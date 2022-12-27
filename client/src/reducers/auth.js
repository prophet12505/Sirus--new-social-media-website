import { AUTH,LOGOUT,SIGNUP,VERIFIED,GET_USER_BY_JWT } from "../constants/actionType";

export default (accountData={loggedIn:false},action)=>{
    //console.log("Reducer: ", posts, action);
    switch(action.type){
        case AUTH:
            {
            console.log("Action AUTH");
            console.log(action.payload);
            //use the object returned from the server to replace the current account object
            return action.payload;
            }
        case SIGNUP:
            {
                //with success
                if(!action.payload.signupSuccess)
                {
                    console.log("unsuccessfully signned up because of duplicated email!");
                    //return accountData;  
                }
                else {
                    console.log("successfully signned up ");
                    console.log(action.payload);
                    //return action.payload;
                }
                return accountData;     
            }
        case VERIFIED:
            {
                //console.log("Verified reducer launched");
                //console.log(action.payload);
                return accountData; 
        }
        case GET_USER_BY_JWT:{
            //console.log("GET_USER_BY_JWT reducer launched");
            console.log(action.payload);
            return action.payload;
        }
        default:
                return accountData;
        }
      
            //default must return posts, otherwise there will be some issues



    };
