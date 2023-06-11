import mongoose from 'mongoose'
import logger from '../logger/index'

export const connectDB = async() => {
    try{
        console.log(process.env.DB_URI)
        await mongoose.connect(process.env.DB_URI,{})
        logger.warn('Connected to DB')
    }
    catch (error){
        logger.error(error.message)
    }
}