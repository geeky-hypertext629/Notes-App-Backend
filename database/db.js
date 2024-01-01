import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {
    
    
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser:true,useUnifiedTopology:true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;