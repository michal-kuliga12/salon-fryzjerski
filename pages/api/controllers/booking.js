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
        console.log('CONNECTING TO DATABASE')
        await connectMongo()
        console.log('CONNECTED TO DATABASE')
        console.log('CREATING DOCUMENT')
        let book = await bookingModel.create(req.body)
        console.log('CREATED DOCUMENT')
        res.json({ book })

    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
//USUWANIE REZERWACJI
export const bookDelete = async (req,res) => {
    try {
        const { id } = req.body;
        console.log({id})
        console.log('CONNECTING TO DATABASE')
        await connectMongo()
        console.log('CONNECTED TO DATABASE')
        console.log('DELETING DOCUMENT')
        await bookingModel.deleteOne(id)
        console.log('DELETED DOCUMENT')
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}
//EDYCJA REZERWACJI
export const bookEdit = async (req,res) => {
    try {
        const id = req.body._id;
        console.log(id)
        await connectMongo()
        let editedBooking = await bookingModel.updateOne({_id: id}, {$set: req.body})
        console.log('EDITED DOCUMENT')
        res.json({ editedBooking })
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}