import { NextApiRequest, NextApiResponse } from "next";

export default function getCards(req, res) {
    if(req.method !== 'GET'){
        res.status(500).json({message: 'only accepts GET requests'})
    }
    res.json({hello: req.query.deck, method: req.method, message: 'getCards'})
}