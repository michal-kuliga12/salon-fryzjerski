import connectMongo from '../../../lib/connectMongo';
import addVisit from '../../../models/bookingModel';
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
        let book = await addVisit.create(req.body)
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
        await addVisit.deleteOne(id)
        console.log('DELETED DOCUMENT')
        window.location.reload(false);
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
        let editedBooking = await addVisit.updateOne({_id: id}, {$set: req.body})
        console.log('EDITED DOCUMENT')
        res.json({ editedBooking })
    } catch(error) {
        console.log(error)
        res.json(error)
    }
}