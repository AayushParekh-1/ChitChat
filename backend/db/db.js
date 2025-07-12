import mongoose from 'mongoose'

export const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db connected successfully!")
    } catch (error) {
        console.log("Error Connecting to the Db", error)
        process.exit(1)
    }
}