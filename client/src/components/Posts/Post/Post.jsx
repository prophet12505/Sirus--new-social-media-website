import React from "react"
import "./Post.css"
import { useState,useEffect } from "react"
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
    useEffect(()=>{
        const randomColor = () => {
            const r = Math.floor(Math.random() * 156)+100;
            const g = Math.floor(Math.random() * 156)+100;
            const b = Math.floor(Math.random() * 156)+100;
            return [`rgb(${r}, ${g}, ${b})`,`rgb(${255-r}, ${255-g}, ${255-b})`];
          };
          
          const elements = document.querySelectorAll('.tag');
          elements.forEach((element) => {
            element.style.color = "#000";
            element.style.backgroundColor = randomColor()[0];
          });

    },[])
    return (
            
            <div className="card">
            
            <div className="card-top">
                <p className="p-creator">{post.creator||"anynomous author"}</p>
                <button className="btn btn-white btn-round btn-update" onClick={()=>{setCurrentId(post._id)}}>...</button>
            </div>
            
            <div className="preview-img"><img className="post-img" src={post.selectedFile} alt="graph" /></div>

            
            <p className="p-heading">{post.title}</p>
            <p className="p-message">{post.message.length > 100 ? post.message.substring(0, 100) + '...' : post.message}</p>
            <p className="p-tags">{post.tags && post.tags.map(tag=>{return <p className='tag'>{tag}</p>})}</p>
            
           
            
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