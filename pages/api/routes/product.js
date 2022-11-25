/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

 import { productAdd, productDelete, productEdit } from '../controllers/product';

 export default function productRoutes(req,res){
     const method = req.method
     switch (method) {
         case "POST":
             productAdd(req,res)
             res.status(200).json({ message: "Wykorzystano metode POST"})
             break;
         case "PUT":
             productEdit(req,res)
             res.status(200).json({ message: "Wykorzystano metode PUT"})
             break;
         case "DELETE":
             productDelete(req,res)
             res.status(200).json({ message: "Wykorzystano metode DELETE"})
             break;
     }
 }