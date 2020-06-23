import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// TODO: function to get your progress on the deck
const cardCount = async (deckId) => {
    const c = await prisma.card.findMany({ where: { deckid: deckId }})
    return parseInt(c.length)
}

export default async function getDeck(req, res) {
    const {
        query: { deck },
        method,
      } = req
      const deckId = parseInt(deck)

    switch (method) {
        case 'GET':
            const data = await prisma.deck.findOne({where: { id: parseInt(deckId) }});
            data["cardCount"] = await cardCount(deckId);
            res.status(200).json(data)
            break
            // case to post a new deck
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}