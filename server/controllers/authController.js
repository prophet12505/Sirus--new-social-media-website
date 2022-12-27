import UserAccount from "../models/UserAcccount.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import generateEmailHTML from "../Utilities/generateEmailHTML.js";


import jwt from 'jsonwebtoken';
// const authenticate = jwt({
//    secret: process.env.JWT_SECRET,
//    algorithms: ['HS256']
//  });


export const userLogin =
   async (req, res) => {
      try {

         const loginData = req.body;

         console.log(loginData);
         let userData = await UserAccount.findOne({ email: loginData.email, password: loginData.password });
         //email and password doesn't match
         if (!userData) {
            userData = { loggedIn: false };
         }
         //email and password match
         else{
         
            
            const token = jwt.sign({id:userData._id}, process.env.JWT_SECRET, {
               algorithm: 'HS256',
               expiresIn: '1h'
             });
             userData = { ...userData,loggedIn: true ,token:token};
         }
         console.log("userData:");
         console.log(userData);

         res.status(201).json(userData);
      } catch (error) {
         console.log(error);
         res.status(404).json({ error: error.message });
      }
   }
export const userSignup = async (req, res) => {
   try {
      const signupData = req.body;

      console.log(signupData);
      let duplicateEmail = await UserAccount.findOne({ email: signupData.email });

      //registered is allowed 
      if (!duplicateEmail) {
         const newAccountModel = new UserAccount(signupData);
         await newAccountModel.save();
         console.log("new Account Model successfully saved");

         //send the email verification
         const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            
            auth: {
               user: process.env.SYSTEM_EMAIL_ACCOUNT,
               pass: process.env.SYSTEM_EMAIL_PWD
            }
         });
         
         const message = {
            from: process.env.SYSTEM_EMAIL_ACCOUNT,
            to: newAccountModel.email,
            subject: 'Email Verification from Sirus',
            html: generateEmailHTML(newAccountModel.email, process.env.END_POINT + "auth/" + newAccountModel._id+"/verify-email")
         };

         transporter.sendMail(message, (error, info) => {
            if (error) {
               console.log(error);
            } else {
               console.log(`Email sent: ${info.response}`);
            }
         });
         res.status(201).json({ ...newAccountModel, signupSuccess: true });
      }

      //registered is not allowed
      else {
         console.log("duplicate email!");
         res.status(201).json({ signupSuccess: false });
         ;
      }
   } catch (error) {
      console.log(error);
      res.status(404).json({ error: error.message });
   }
}
export const getAuthPage = async (req, res) => {
   try {
      console.log("getAuthPage controller triggered");
      res.status(201).json({ message: "get auth page success" });
   } catch (error) {
      console.log(error);
      res.status(404).json({ error: error.message });
   }
}
export const verifyEmail = async (req,res) =>{
   try {
      console.log("verify email triggered");
      const{id:_id}=req.params;//rename deconstruction
      const accountToBeUpdated=await UserAccount.findById(_id);//return a new post
      accountToBeUpdated.verified=true;
      const response=await UserAccount.findByIdAndUpdate(_id,accountToBeUpdated,{new:true});
      console.log("successfully verified");
      console.log(response);
      res.json(response);

   } catch (error) {
      console.log(error);
      res.status(404).json({ error: error.message });
   }
} 