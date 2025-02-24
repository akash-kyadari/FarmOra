import express from "express";
import 'dotenv/config';
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend URL
    credentials: true
}))
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('server is working')
})
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)

app.listen(PORT, () => {
    console.log('app is listening on port 3000');
    connectDB()
})