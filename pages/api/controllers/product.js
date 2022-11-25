import connectMongo from '../../../lib/connectMongo';
import productModel from '../../../models/product';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
//DODAWANIE RESERWACJI
export const productAdd = async (req,res) => {
    try {
        const { name, type, price, description, isAvailable} = req.body;
        await connectMongo()
        let product = await productModel.create(req.body)
        res.json({ product })

    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
//USUWANIE REZERWACJI
export const productDelete = async (req,res) => {
    try {
        const { id } = req.body;
        await connectMongo()
        await productModel.deleteOne(id)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
//EDYCJA REZERWACJI
export const productEdit = async (req,res) => {
    try {
        const id = req.body._id;
        await connectMongo()
        let editedProduct = await productModel.updateOne({_id: id}, {$set: req.body})
        res.json({ editedProduct })
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}