import express from "express";
import { userLogin,getAuthPage,userSignup } from "../controllers/authController.js";

const router=express.Router();

// router.get('/',);
router.get('/login',getAuthPage);
router.post('/login',userLogin);
router.post('/signup',userSignup);
export default router;