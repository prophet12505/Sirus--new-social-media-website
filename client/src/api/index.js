

import axios from "axios";

const url='http://localhost:5000/posts'
// const url="https://sirus--social-media.herokuapp.com/posts"//hosted on heroku
export const fetchPosts=()=>{
    try {
        const res= axios.get(url);
        console.log(res);
        return res;
     } catch (error) {
         console.log(error);
         //never log error.message, just log error
     }
}

export const createPost=(newPost)=>{
    try {
        const res=axios.post(url,newPost);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export const updatePost=(id,newPost)=>{
    try {
        const res=axios.patch(url+'/'+id,newPost);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }

}
export const deletePost=(id)=>{
    try {
        axios.delete(url+'/'+id);
        
    } catch (error) {
        console.log(error);
    }
}
export const likePost=(id)=>{
    try {
        const res=axios.patch(url+"/"+id+'/likePost');
        return res;
    } catch (error) {
        console.log(error);
    }
}