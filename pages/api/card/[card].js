import { PrismaClient } from '@prisma/client';
import scoreHelper from '../../../helper/score_calc';
import validate from '../../../helper/validations/validations';

const prisma = new PrismaClient()

// UPDATE card repscore upon response of user (easy, ok, hard)
export default async function cardActions(req, res) {
    const {
        query: { card },
        method,
    } = req
    const cardId = parseInt(card);

    if(!card){res.status(401)}
    switch (method) {
        case 'GET':
            await handleGet(cardId, res);
            break
        case 'PUT':
            const currResponse = req.body.currResponse;
            if (validate.cardResponse(currResponse) == false) { 
                res.status(500).end("Gotta give me a valid response here: ok, easy or hard")
                break
            }
            await handleScoreUpdate(cardId, currResponse, res);
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function handleGet(cardId, res){
    const c = await prisma.card.findOne({
        where: { id: cardId }
    })
    res.status(200).json(c)
}

async function handleScoreUpdate(cardId, currResponse, res){
    const c = await prisma.card.findOne({
        where: { id: cardId }
    });
    const currentScore = c.repScore
    const updatedScore = scoreHelper.newScore(currentScore, currResponse)

    const updateElement = await prisma.card.update({
        where: { id: cardId },
        data: { repScore: updatedScore },
    })
    updateElement["oldScore"] = currentScore
    res.status(200).json(updateElement)
}
