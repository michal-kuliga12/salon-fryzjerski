import connectMongo from '../../../lib/connectMongo';
import addVisit from '../../../models/bookingModel';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function bookEdit(req,res) {
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
