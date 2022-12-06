import connectMongo from '../../../lib/connectMongo';
import orderModel from '../../../models/order';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

//DODAWANIE
export const orderAdd = async (req,res) => {
    try {
        const { name, customer, address, price, quantity, order_date, realization_date} = req.body;
        await connectMongo()
        const order = await orderModel.create(req.body)
        console.log(order)
        res.status(200).json( order )
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
//USUWANIE
export const orderDelete = async (req,res) => {
    try {
        const { id } = req.body;
        await connectMongo()
        await orderModel.deleteOne(id)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
