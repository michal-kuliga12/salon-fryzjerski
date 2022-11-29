import { Schema, model, models } from "mongoose";

const newsSchema = new Schema ({
    tytul: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true,
    },
    tresc: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    }
});
const newsModel = models.new || model('new',newsSchema)
export default newsModel