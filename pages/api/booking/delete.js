import connectMongo from '../../../lib/connectMongo';
import addVisit from '../../../models/bookingModel';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function bookDelete(req,res) {
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