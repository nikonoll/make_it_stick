import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//WIP: get one card by ID and more importantly update and create a card
// UPDATE card repscore upon response of user (easy, ok, hard)
export default async function cardActions(req, res) {
    const {
        query: { card },
        method,
    } = req
    const cardId = parseInt(card)

    switch (method) {
        case 'GET':
            const data = { "card": "card" }
            res.status(200).json(data)
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}