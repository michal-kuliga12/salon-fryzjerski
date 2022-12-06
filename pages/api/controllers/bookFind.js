import connectMongo from '../../../lib/connectMongo';
import bookingModel from '../../../models/booking';
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

const bookFind = async (req, res) => {
    try {
        const data = req.body.data
        console.log(data)
        await connectMongo()
        console.log("Szukanie")
        const foundData = await bookingModel.exists({data: data})
        console.log(foundData)
        if (foundData) {
            console.log("Znaleziono date")
            res.status(200).send(foundData).end()
        } else {
            console.log("Nie znaleziono daty")
            res.status(204)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
export default bookFind;