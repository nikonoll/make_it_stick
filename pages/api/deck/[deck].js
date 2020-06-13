const { prisma } = require('../../../generated/prisma-client');

export default async function getDeck(req, res) {
    const deck = req.query.id
    if(req.method === 'GET'){
        const data = await prisma.decks({
            where: { id: deck },
        });
        res.json(data)
    }  
}