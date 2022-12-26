import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
 export const createPost=
 async (req,res) =>{
    const newPost=req.body;
    console.log(req.body);
    const newPostModel=new PostMessage(newPost);
    try {
        
        //PostMessage is a Constructor
        //console.log("newPostModel, post request received");
        await newPostModel.save();  
        
        //to modify
        res.status(201).json(newPostModel);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({error:error.message});
    }
};
export const getPosts=
async(req,res)=>{
    try {
        //console.log("PostMessages, get request received");
        const PostMessages=await PostMessage.find();       
        res.status(200).json(PostMessages);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({error:error.message});
    }
};
export const updatePost=async(req,res)=>{
    
    const{id:_id}=req.params;//rename deconstruction
    const post=req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);
    const response=await PostMessage.findByIdAndUpdate(_id,post,{new:true});//return a new post
    res.json(response);
}
export const deletePost=async(req,res)=>{
    const{id:_id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndDelete(_id);
    res.json("successfully deleted");
}

export const likePost=async(req,res)=>{
    
    const{id:_id}=req.params;//rename deconstruction

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);
    const post=await PostMessage.findById(_id);
    const response = await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount+1},{new:true});
    res.json(response);
}