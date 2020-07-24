import { PrismaClient } from '@prisma/client'
const queue = require('../../../../lib/queue')

const prisma = new PrismaClient()
// PRISMA DUBUG MODE 
// const prisma = new PrismaClient({
//     log: [
//       {
//         emit: 'event',
//         level: 'query',
//       },
//     ],
//   })
  
//   prisma.on('query', e => {
//     e.query, console.log(e)
//   })

export default async function getCardToStudy(req, res) {
    const {
        query: { deck },
        method,
    } = req
    const deckId = parseInt(deck)

    switch (method) {
        case 'GET':
            const data = await queue.nextCard(deckId)
            res.status(200).json(data)
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}