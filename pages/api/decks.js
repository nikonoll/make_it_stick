const { prisma } = require('../../generated/prisma-client');

export default async function getAllDecks(req, res) {
    if(req.method === 'GET'){
        const decks = await prisma.decks();
        res.json(decks)
    }  
}