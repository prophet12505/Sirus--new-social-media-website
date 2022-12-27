import express from "express";
import { userLogin,getUserByJWTToken,userSignup,verifyEmail } from "../controllers/authController.js";

const router=express.Router();

// router.get('/',);
//loginURL+"/"+_id+"/get-user-by-JWT-token"
router.get('/:id/get-user-by-JWT-token',getUserByJWTToken);
router.post('/login',userLogin);
router.post('/signup',userSignup);
router.get('/:id/verify-email',verifyEmail);

export default router;