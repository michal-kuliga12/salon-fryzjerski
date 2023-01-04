// lib > connectMongo.js
import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect("mongodb+srv://admin:admin123@salon-fryzjerski.xmdbzvz.mongodb.net/hair_salon?retryWrites=true&w=majority")

export default connectMongo;

