const { prisma } = require('../../../generated/prisma-client');

export default async function getDeck(req, res) {
    const {
        query: { deck },
        method,
      } = req

    switch (method) {
        case 'GET':
            //return something here
            //const dataOLD = await prisma.decks({
            //    where: { id: deck },
            //});
            const data = await prisma.deck({id: deck});


            console.log(data);
            res.status(200).json(data)
            break
            // case to post a new deck
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}