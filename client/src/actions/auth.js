import * as api from "../api";
import { AUTH,LOGOUT,SIGNUP } from "../constants/actionType";
//export const updatePost=(id,post)=>async(dispatch)=>{
export const userLogin=(loginData)=>async(dispatch)=>{
    try {
       

        //     const {data}=await api.();
        const {data}=await api.login(loginData);
       
        dispatch({
            type:AUTH,
            payload:data
        });
    } catch (error) {
        console.log(error);
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
