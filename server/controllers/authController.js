import UserAccount from "../models/UserAcccount.js";
import mongoose from "mongoose";

 export const userLogin=
 async (req,res) =>{
   try {
     
      const loginData=req.body;

      console.log(loginData);
      let userData=await UserAccount.findOne({email:loginData.email,password:loginData.password});    
      // const userData=queryForAccountData[0];
      if(!userData){
         userData={loggedIn:false};
      }
      console.log(userData);

      res.status(201).json(userData);
   } catch (error) {
      console.log(error);
      res.status(404).json({error:error.message});
   }
 }
 export const userSignup= async (req,res)=>{
   try {
      const signupData=req.body;

      console.log(signupData);
      let duplicateEmail=await UserAccount.findOne({email:signupData.email});    
      
      //registered is allowed 
      if(!duplicateEmail){
         const newAccountModel=new UserAccount(signupData);
         await newAccountModel.save();  
         console.log("new Account Model successfully saved");
         res.status(201).json({...newAccountModel,signupSuccess:true});
      }
      //registered is not allowed
      else{
         console.log("duplicate email!");
         res.status(201).json({signupSuccess:false});
         ;
      }
   } catch (error) {
      console.log(error);
      res.status(404).json({error:error.message});
   }
 }
 export const getAuthPage= async (req,res) =>{
   try {
      console.log("getAuthPage controller triggered");
      res.status(201).json({message:"get auth page success"});
   } catch (error) {
      console.log(error);
      res.status(404).json({error:error.message});
   }
 }