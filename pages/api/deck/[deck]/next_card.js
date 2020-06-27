import { PrismaClient } from '@prisma/client'

// PRISMA DUBUG MODE 
// const prisma = new PrismaClient()
const prisma = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
    ],
  })
  
  prisma.on('query', e => {
    e.query, console.log(e)
  })
//TODO function to get card with needed score
// add score to db
// make this AND condition look for the card with the lowest score?
const nextCard = async (deckId) => {
    const c = await prisma.card.findMany({
        where: { 
            AND: [
                { deckId: deckId },
                { repScore:
                    { gte: 0 }
                },
            ]
        }
    })
    const length = c.length
    const random = Math.floor(Math.random() * length)
    return c[random]
}

export default async function getCardToStudy(req, res) {
    const {
        query: { deck },
        method,
    } = req
    const deckId = parseInt(deck)

    switch (method) {
        case 'GET':
            const data = await nextCard(deckId)
            res.status(200).json(data)
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}