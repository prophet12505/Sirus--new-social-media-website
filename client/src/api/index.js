

import axios from "axios";

const url='http://localhost:5000/posts'
const loginURL="http://localhost:5000/auth"
// const url="https://sirus--social-media.herokuapp.com/posts"//hosted on heroku

//Home page apis
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


//account apis
export const login=(loginData)=>{
    try {
        const res=axios.post(loginURL+"/login",loginData);
        console.log(res);
        return res;

    } catch (error) {
        console.log(error);
    }
}
export const signup=(signupData)=>{
    try {
        const res=axios.post(loginURL+"/signup",signupData);
        console.log(res);
        return res;

    } catch (error) {
        console.log(error);
    }
}
export const verifyEmail=(_id)=>{
    try {
        const res=axios.get(loginURL+"/"+_id+"/verify-email");
        //console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}

// export const verifyEmail=()=>{
//     try {
//         const res=axios.get(loginURL+"/signup",signupData);
//     } catch (error) {
        
//     }
// }