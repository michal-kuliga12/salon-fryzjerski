/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

 import { orderAdd, orderDelete} from '../controllers/order';

 export default async function orderRoutes(req,res){
     const method = req.method
     switch (method) {
         case "POST":
             orderAdd(req,res)
             break;
        //  case "PUT":
        //      orderEdit(req,res)
        //      res.status(200).json({ message: "Wykorzystano metode PUT"})
        //      break;
         case "DELETE":
             orderDelete(req,res)
             res.status(200).send({ message: "Wykorzystano metode DELETE"})
             break;
     }
 }