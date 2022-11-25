import { Schema, model, models } from "mongoose";

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true,
    },
    imageUrl: {
        type: String
    }
});
const productModel = models.product || model('product',productSchema)
export default productModel