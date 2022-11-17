import connectMongo from '../../../lib/connectMongo';
import newsModel from "../../../models/newsModel";
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function EditNews(req,res) {
    try {
        const id = req.body._id;
        console.log(id)
        await connectMongo()
        let editedNews= await newsModel.updateOne({_id: id}, {$set: req.body})
        console.log('EDITED DOCUMENT')
        res.json({ editedNews })
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}