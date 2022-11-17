import { Schema, model, models } from "mongoose";

const bookingSchema = new Schema({
    klient: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    usluga: {
        type: String,
        required: true,
    },
    metoda: {
        type: String,
        required: true,
    },
    cena: {
        type: String,
        required: true,
    }
});
const addVisit = models.appointment || model('appointment',bookingSchema)
export default addVisit
