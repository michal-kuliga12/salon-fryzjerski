import connectMongo from "../../../lib/connectMongo";
import newsModel from "../../../models/newsModel";
/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addNews (req,res){
    try {
        const {tytul,autor,data,tresc} = req.body
        await connectMongo()
        news = await newsModel.create(req.body)
    }
    catch(error) {
        console.log(error)
    }
}