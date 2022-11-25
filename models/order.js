import { Schema, model, models } from "mongoose";

const orderSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    order_date: {
        type: Date,
        required: true,
    },
    realization_date: {
        type: Date,
    }
});
const orderModel = models.order || model('order',orderSchema)
export default orderModel