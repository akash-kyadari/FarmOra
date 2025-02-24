import express from "express";
const router = express.Router();

import { loginRoute, signupRoute, logoutRoute, getMe, verifyToken } from "../controllers/authController.js";

router
    .post('/login', loginRoute)
    .post('/signup', signupRoute)
    .post('/logout', logoutRoute)
router.get("/me", verifyToken, getMe);
export default router;