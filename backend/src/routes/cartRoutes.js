import express from "express";
import { verifyToken } from "../controllers/authController.js"
import { getProductsInCart, addProductInCart } from "../controllers/cartController.js"
const router = express.Router();

router.route('/getCartItems').get(verifyToken, getProductsInCart)
router.route('/addCartItem').post(verifyToken, addProductInCart)
export default router;