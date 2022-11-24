import { getSession } from "../../../lib/session"
/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

import { userCheck, userGet, userRegister } from '../controllers/auth';

export default async function authRoutes (req,res) {
    const method = req.method
    switch (method) {
        case "POST":
            userRegister(req,res)
            break;
        // case "PUT":
        //     try {
        //         const response = await userCheck(req,res)
        //         const user = {user: response.username, isLoggedIn: true}
        //         if(response) {
        //             const session = await getSession(req,res)   
        //             session.user(user)
        //             res.status(200).json({obiekt: JSON.stringify(response)})
        //         } else {
        //             res.status(204).end("Nie znaleziono użytkownika");
        //         }
        //     } catch (error) {
        //         console.log(error)
        //         res.status(500).end("Wystąpił błąd serwera");
        //     }
        //     break;
        case "GET":
            userGet(req,res)
            break;
        default:
            res.status(400).send("Złe żądanie")
            break;
    }
}