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
                <hr />
                <button onClick={()=>{setCurrentId(post._id)}}>Update</button>
            <div className="article">
            <h2>{post.title}</h2>
            <p>{post.message}</p>
            <p>{post.creator||""}</p>
            <p>{post.tags && post.tags.map(tag=>" #"+tag)}</p>
            
            <img src={post.selectedFile} alt="graph" />
            </div>
            <div className="buttonGroup">
                <hr />
                <button onClick={()=>{
      
      dispatch(likePost(post._id));

      }}> like {post.likeCount}</button>
                <button onClick={()=>{
      
                    dispatch(deletePost(post._id));

                    }}> Delete</button>
            </div>
            </div>
        );
}
export default Post;