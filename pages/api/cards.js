const { prisma } = require('../../generated/prisma-client')

export default async function (req, res) {
    if(req.method === 'POST'){
        const { body } = req;
        const values = JSON.parse(body);
        const card = await prisma.createCard({ 
            question: values.question,
            answer: values.answer    
        })
        res.json(card);
    }
}