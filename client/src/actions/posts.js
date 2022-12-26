import * as api from "../api";
import { LIKE,DELETE,UPDATE,FETCH_ALL,CREATE } from "../constants/actionType";
export const getPosts=()=>async(dispatch)=>{
    try {
        console.log("get posts action launched");
        //api.fetchPosts didn't get response
        const {data}=await api.fetchPosts();
        //it returns an javascript object
        //I have to deconstruct; data is one field of the return object (It includes header, data, etc)
        dispatch({
            type:FETCH_ALL,
            payload:data
        });

    } catch (error) {
        console.log(error);
    }
}
export const createPost=(newPost)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(newPost);
        //I have to deconstruct; It's worth noting why
        dispatch({
            type:CREATE,
            payload:data
        });

    } catch (error) {
        console.log(error);
    }
}
export const updatePost=(id,post)=>async(dispatch)=>{
    try {
        const {data}=await api.updatePost(id,post);
        dispatch({
            type:UPDATE,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }

}

export const deletePost=(id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({
            type:DELETE,
            payload:id
        });
    } catch (error) {
        console.log(error);
    }
}
export const likePost=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.likePost(id);
        dispatch({
            type:LIKE,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }

}
