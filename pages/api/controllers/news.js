import connectMongo from "../../../lib/connectMongo";
import newsModel from "../../../models/news";
/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

//DODAWANIE ATKUALNOŚCI
export const newsAdd = async (req,res) => {
    try {
        const {tytul,autor,data,tresc} = req.body
        await connectMongo()
        const news = await newsModel.create(req.body)
    }
    catch(error) {
        console.log(error)
    }
}
//USUWANIE AKTUALNOŚCI
export const newsDelete = async (req,res) => {
    try {
        const { id } = req.body;
        await connectMongo()
        await newsModel.deleteOne(id)
    }
    catch(error) {
        console.log(error)
    }
}
//EDYCJA AKTUALNOŚCI
export const newsEdit = async (req,res) => {
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