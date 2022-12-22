import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
 import postRouter from "./routes/posts.js";
 import dotenv from "dotenv";


const app=express();
dotenv.config();

// bodyParser configuration
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


// cors configuration
app.use(cors());
app.use("/posts",postRouter);
app.get("/",(req,res)=>{res.send("welcome to sirus API")})




// const CONNECT_URL="<your mongodb connection url>";
//  const PORT=process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECT_URL)
.then(app.listen(process.env.PORT,()=>{console.log(`server started at port ${process.env.PORT}`)}))
.catch(err=>{console.log(err.message)});
