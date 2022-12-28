import React, { lazy, Suspense } from 'react'
import { useEffect, useLayoutEffect } from 'react';


import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';

import { useDispatch } from 'react-redux';
import { googleLogin } from '../../actions/auth';
const GoogleLoginComponent = () => {

    const dispatch=useDispatch();
    // const [GoogleAuth, setGoogleAuth] = React.useState(null);
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    return (
        <div>
            {/* <script src="https://accounts.google.com/gsi/client" ></script> */}
            {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
            {/* <GoogleAuth> */}
            {/* <div id="buttonDiv"></div> */}
            <GoogleLogin
                onSuccess={credentialResponse => {
                    // console.log(credentialResponse);
                    const userData=parseJwt(credentialResponse.credential);
                    console.log(userData);
                    dispatch(googleLogin({loggedIn:true,_doc:{email:userData.email,name:userData.name,picture:userData.picture}}));
                    localStorage.setItem('googleAccount',{email:userData.email,name:userData.name,picture:userData.picture});
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
            />;
            {/* </GoogleAuth> */}
        </div>
    )
}

export default GoogleLoginComponent