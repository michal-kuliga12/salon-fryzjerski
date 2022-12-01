import connectMongo from '../../../lib/connectMongo';
import bookingModel from '../../../models/booking';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
//DODAWANIE RESERWACJI
export const bookAdd = async (req,res) => {
    try {
        const { klient, data, usluga, metoda, cena } = req.body;
        await connectMongo()
        let book = await bookingModel.create(req.body)
        res.status(200)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
//USUWANIE REZERWACJI
export const bookDelete = async (req,res) => {
    try {
        const { id } = req.body;
        await connectMongo()
        await bookingModel.deleteOne(id)
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
//EDYCJA REZERWACJI
export const bookEdit = async (req,res) => {
    try {
        const id = req.body._id;
        await connectMongo()
        let editedBooking = await bookingModel.updateOne({_id: id}, {$set: req.body})
        res.json({ editedBooking })
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
export const bookFindOne = async (req,res) => {
    try {
        const data = req.body.data
        await connectMongo()
        let foundBooking = await bookingModel.findOne({data: data})
        return foundBooking

    } catch(error) {
        console.log(error)
        res.json(error)
    }
}