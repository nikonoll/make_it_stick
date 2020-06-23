import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function getCardById(req, res) {
    if(req.method !== 'GET'){
        res.status(500).json({message: 'only accepts GET requests'})
    }
    res.json({hello: req.query.deck, message: 'getCardbyId'})
}