/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

import { userCheck, userGet, userRegister } from '../controllers/auth';

export default function authRoutes(req,res) {
    const method = req.method
    switch (method) {
        case "POST":
            userRegister(req,res)
            break;
        case "PUT":
            userCheck(req,res)
            break;
        case "GET":
            userGet(req,res)
            break;
        default:
            res.status(400).send("Złe żądanie")
            break;
    }

}