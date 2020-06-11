import { NextApiRequest, NextApiResponse } from "next";

export default function getAllDecks(req, res) {
    if(req.method !== 'GET'){
        res.status(500).json({message: 'only accepts GET requests'})
    }
    res.json({hello: 'world', method: req.method})
}