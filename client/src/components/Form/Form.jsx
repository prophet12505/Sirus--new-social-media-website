import React from "react"
import { useDispatch } from 'react-redux'
import { createPost } from "../../actions/posts";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import FileBase from 'react-file-base64'
import "./Form.css"
import { updatePost } from "../../actions/posts";

// title:String,
// message:String,
// creater:String,
// tags:[String],
// selectedFile:String,



const Form= ({currentId,setCurrentId})=>{
    const [postMessage,setPostMessage]=useState({
        title:'',
        message:'',
        creator:'',
        tags:[],
        selectedFile:''
    });
    const post=useSelector((state)=>
        currentId?state.posts.find((post)=>post._id===currentId):null
    );
    const dispatch=useDispatch();
    //notice: useEffect will refresh the page in the very beginning even if post is null, at that time postMessage will be null
    //we must add validation to make sure that we won't set null to our useState hook, so we must add null validation
    //useEffect will be triggered in the very beginning, at that time, post is still null.
    useEffect(
        ()=>{
                if(post){
                setPostMessage(post);
                }
            
            console.log(currentId);
        }
        ,[post]
        );
    //set postMessage to empty state
    const clear=()=>{
        setPostMessage({ title:'',
        message:'',
        creator:'',
        tags:[],
        selectedFile:''});
        setCurrentId(null);//clear id selection

    }

    const handleSubmit=(e)=>{
        

         e.preventDefault();
         if(!currentId){      
            
            dispatch(createPost(postMessage));
            clear();
         }
         else{//  should update the post
            dispatch(updatePost(currentId,postMessage));
            clear();
         }
    }

    return (
        <>
            <form >
                <p className="p-heading">Form</p>
                <label className="p-heading" >Title of the Article</label>
                <input type="text" name="title" value={postMessage.title} onChange={(e)=>{setPostMessage({...postMessage,title:e.target.value})}}/><br />
                <label>Text Message you wanna input</label><br />
                <input type="text" name="message" value={postMessage.message} id="message" onChange={(e)=>{setPostMessage({...postMessage,message:e.target.value})}}/><br />
                <label>Author</label><br />
                <input type="text" name="creator" value={postMessage.creator} onChange={(e)=>{setPostMessage({...postMessage,creator:e.target.value})}}/><br />
                <label>Tags</label><br />
                <input type="text" name="tags" value={postMessage.tags} onChange={(e)=>{setPostMessage({...postMessage,tags:e.target.value.split(',')})}}/><br /> 
                <FileBase className="btn btn-white" type="file" multiple={false} value={postMessage.selectedFile} onDone={({ base64 }) => setPostMessage({ ...postMessage, selectedFile: base64 })} />
               
                {/* <input type="text" name="title"  onChange={(e)=>{setPostMessage({...postMessage,title:e.target.value})}}/><br />
                <label>Text Message you wanna input</label><br />
                <input type="text" name="message"  id="message" onChange={(e)=>{setPostMessage({...postMessage,message:e.target.value})}}/><br />
                <label>Author</label><br />
                <input type="text" name="creator"  onChange={(e)=>{setPostMessage({...postMessage,creator:e.target.value})}}/><br />
                <label>Tags</label><br />
                <input type="text" name="tags"  onChange={(e)=>{setPostMessage({...postMessage,title:e.target.value})}}/><br />
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostMessage({ ...postMessage, selectedFile: base64 })} /> */}
                {/* <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64})=>setPostMessage({...postMessage,selectedFile:{base64}})}
                ></FileBase> */}
                
                {/* base64 should be a string, do not add {} around it while passing it to selected File  */}
                <button className="btn btn-white" type="submit" onClick={handleSubmit}>Way to go!</button>
            </form>
        </>
        );
}
export default Form;