import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getAllDecks(req, res) {
    if(req.method === 'GET'){
        const decks = await prisma.deck.findMany();
        res.json(decks)
    }  
}