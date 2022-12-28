import * as api from "../api";
import { AUTH,LOGOUT,SIGNUP,VERIFIED,GET_USER_BY_JWT,GOOGLE_AUTH } from "../constants/actionType";
//export const updatePost=(id,post)=>async(dispatch)=>{
export const userLogin=(loginData)=>async(dispatch)=>{
    try {
       

        //     const {data}=await api.();
        
        const responseData=await api.login(loginData);
        console.log("responseData:");
        console.log(responseData);
        const {data}=responseData;
        await dispatch({
            type:AUTH,
            payload:data
        });
    } catch (error) {
        console.log(error);
    }
}
export const googleLogin=(loginData)=>async(dispatch)=>{
    try {
        await dispatch({
            type:GOOGLE_AUTH,
            payload:loginData
        });
    } catch (error) {
        
    }
}

export const userSignup=(signupData)=>async(dispatch)=>{
    try {
        const {data}=await api.signup(signupData);
        dispatch({
            type:SIGNUP,
            payload:data
        })
        
    } catch (error) {
        console.log(error);
    }
}
export const confirmVerification=(_id)=>async(dispatch)=>{
    try {
        const {data}=await api.verifyEmail(_id);

        dispatch({
            type:VERIFIED,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}
export const getUserByJWTToken=(token)=>async(dispatch)=>{
    try {
        //empty token will triger error
        //console.log("token:");
        //console.log(token);
        if(token){
            const {data}=await api.fetchUserByJWTToken(token);
       
            dispatch({
                type:GET_USER_BY_JWT,
                payload:data
            });
        }
        
    } catch (error) {
        console.log(error);
    }
}