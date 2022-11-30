/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

import { bookAdd, bookDelete, bookEdit, bookFindOne } from '../controllers/booking';

export default function bookingRoutes(req,res){
    const method = req.method
    switch (method) {
        case "POST":
            bookAdd(req,res)
            res.status(200).json({ message: "Wykorzystano metode POST"})
            break;
        case "PUT":
            bookEdit(req,res)
            res.status(200).json({ message: "Wykorzystano metode PUT"})
            break;
        case "DELETE":
            bookDelete(req,res)
            res.status(200).json({ message: "Wykorzystano metode DELETE"})
            break;
    }
}