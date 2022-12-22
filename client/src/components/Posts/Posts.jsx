import React from "react"
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import "./Posts.css"
const Posts= ({currentId,setCurrentId})=>{
    const posts=useSelector((state)=>
        state.posts
    )
    return (
        <div id="posts">
   
        <div id="post-group">
        {posts.map((post,index)=>{ 
                    
                    return <Post key={index} post={post} currentId={currentId} setCurrentId={setCurrentId}></Post>

                })}
                </div>
        
       
        </div>
        );
}
export default Posts;