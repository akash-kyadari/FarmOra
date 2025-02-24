import express from "express";
import { getAllProducts, getSingleProduct } from "../controllers/productController.js";

const router = express.Router();

router
    .get('/getAllProducts', getAllProducts)
    .get('/getSingleProduct/:id', getSingleProduct)


export default router