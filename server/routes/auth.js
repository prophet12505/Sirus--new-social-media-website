import express from "express";
import { userLogin,getAuthPage,userSignup,verifyEmail } from "../controllers/authController.js";

const router=express.Router();

// router.get('/',);
router.get('/login',getAuthPage);
router.post('/login',userLogin);
router.post('/signup',userSignup);
router.get('/:id/verify-email',verifyEmail);
export default router;