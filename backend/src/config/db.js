import mongoose from 'mongoose'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('db connected successfully');
    } catch (error) {
        console.log('monogoDb connection error :', error);
    }
}
export default connectDB;