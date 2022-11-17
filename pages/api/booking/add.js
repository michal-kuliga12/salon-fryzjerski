import connectMongo from '../../../lib/connectMongo';
import addVisit from '../../../models/bookingModel';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function bookAdd(req,res) {
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
