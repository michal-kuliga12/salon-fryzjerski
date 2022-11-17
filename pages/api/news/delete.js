import connectMongo from "../../../lib/connectMongo";
import newsModel from "../../../models/newsModel";
/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function DeleteNews (req,res){
    try {
        const { id } = req.body
        await connectMongo()
        news = await newsModel.deleteOne( id )
        window.location.reload(false);
    }
    catch(error) {
        console.log(error)
    }
}