/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

import { newsAdd, newsEdit, newsDelete } from '../controllers/news';

export default function newsRoutes(req,res){
    const method = req.method
    switch (method) {
        case "POST":
            newsAdd(req,res)
            res.status(200).json({ message: "Wykorzystano metode POST"})
            break;
        case "PUT":
            newsEdit(req,res)
            res.status(200).json({ message: "Wykorzystano metode PUT"})
            break;
        case "DELETE":
            newsDelete(req,res)
            res.status(200).json({ message: "Wykorzystano metode DELETE"})
            break;
    }
}