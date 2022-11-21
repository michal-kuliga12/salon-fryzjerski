import connect from "mongodb";
import connectMongo from "../../../lib/connectMongo";
import userModel from "../../../models/userModel";
/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export const userRegister = async (req,res) => {
    try {
        await connectMongo()
        let newUser = await userModel.create(req.body)
        res.json({ newUser })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}
export const userCheck = async (req,res) => {
    try {
        await connectMongo()
        const foundUser = await userModel.findOne({
            username: req.body.username, 
            email: req.body.email, 
            password: req.body.password})
        if(!foundUser) res.status("Nie znaleziono użytkownika")
        else res.status(200).send('Znaleziono użytkownika')
    } catch (error) {
        console.log(error)
        res.status(404).send('Użytkownik nie istnieje')
    }
}
export const userGet = async (req,res) => {
    try {
        await connectMongo()
        const getUser = await userModel.find({})
        return res.json(getUser)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
    
}