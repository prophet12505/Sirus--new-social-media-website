import React from "react"
import "./Post.css"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { deletePost,getPosts,likePost } from "../../../actions/posts";
// title:String,
// message:String,
// creater:String,
// tags:[String],
// selectedFile:String,
const Post= ({post,currentId,setCurrentId})=>{
    // const post=props.post
    const dispatch=useDispatch();
    return (
            
            <div className="card">
            
            <div className="hx-row">
                <p className="p-heading">{post.title}</p>
                <button className="btn btn-white btn-round btn-update" onClick={()=>{setCurrentId(post._id)}}>...</button>
            </div>


            <p className="p-message">{post.message}</p>
            <p className="p-creator">{post.creator||""}</p>
            <p className="p-tags">{post.tags && post.tags.map(tag=>" #"+tag)}</p>
            
            <img className="post-img"src={post.selectedFile} alt="graph" />
            
            <div className="buttonGroup">
             
                <button className="btn btn-white" onClick={()=>{
      
      dispatch(likePost(post._id));

      }}> like {post.likeCount}</button>
                <button  className="btn btn-white" onClick={()=>{
      
                    dispatch(deletePost(post._id));

                    }}> Delete</button>
            </div>
            </div>
        );
}
export default Post;