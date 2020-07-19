import { PrismaClient } from '@prisma/client';
import scoreDelta from '../../../helper/score_calc';

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
            const learned = req.body.learned;
            await handleScoreUpdate(cardId, learned, res);
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

async function handleScoreUpdate(cardId, learned, res){
    const c = await prisma.card.findOne({
        where: { id: cardId }
    });
    const currentScore = c.repScore
    const updatedScore = parseInt(currentScore + scoreDelta(learned))

    const updateElement = await prisma.card.update({
        where: { id: cardId },
        data: { repScore: updatedScore },
    })
    res.status(200).json(updateElement)
}