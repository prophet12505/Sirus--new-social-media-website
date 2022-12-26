import React from "react"
import "./Auth.css"
import { GoogleLogin } from 'react-google-login';
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { userLogin, userSignup } from "../../actions/auth";

import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';



const Auth = () => {
    function showSignUp() {
        document.getElementById('id01').style.display = 'block';
    }
    function showVerificationEmail(){
        document.getElementById('id01').style.display = 'none';
        document.getElementById('verification-email').style.display = 'block';
    }
    function hideSignUp() {
        document.getElementById('id01').style.display = 'none';
    }

    const [loginData, setLoginData] = useState({
        name: '',
        email: '',
        password: '',
        picture: ''
    });
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        picture: ''
    });
    const dispatch = useDispatch();

    function handleSubmitLogin(e) {
        e.preventDefault();
        dispatch(userLogin(loginData));
    }
    function handleSubmitSignup(e) {
        e.preventDefault();
        dispatch(userSignup(signupData));


        //need more logic to verify whether the mail is duplicated
        
        showVerificationEmail();
    }
    // google login API 



    return (
        <>
            {/* signup */}
            <div id="id01" className="modal">

                <form className="modal-content animate" action="/" method="post">
                    <div className="imgcontainer">
                        <span onClick={hideSignUp} className="close" title="Close Modal">&times;</span>
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    <div class="signup-container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname"
                            onChange={(e) => { setSignupData({ ...signupData, name: e.target.value }) }}
                            required ></input>
                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email"
                            onChange={(e) => { setSignupData({ ...signupData, email: e.target.value }) }}
                            required ></input>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw"
                            onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }) }}
                            required ></input>

                        <button className="btn-green" type="submit" onClick={handleSubmitSignup}>Signup</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" ></input> Remember me
                        </label>

                    </div>

                    {/* <div class="container" style="background-color:#f1f1f1">
                            <button type="button" onClick={} class="cancelbtn">Cancel</button>
                            <span class="psw">Forgot <a href="#">password?</a></span>
                        </div> */}
                </form>
            </div>
            {/* signup -- email verification  */}
            <div id="verification-email" className="verification-email modal">
                <div className="modal-content">
                <h1>Verification Email Sent</h1>
                <p>A verification email has been sent to your inbox. Please follow the instructions in the email to complete the verification process.</p>
                <Link to="/">
                    <button className="return-home-button">Return Home</button>
                </Link>
                </div>
            </div>

            <div className="login-container">

                <h1>Welcome! Please login to continue.</h1>
                <form action="/login" method="post">
                    {/* <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter your username" /><br /> */}
                    <label for="email">Email:</label><br />
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                        onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
                        required /><br />
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="psw" placeholder="Enter your password"
                        onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                        required /><br /><br />



                    {/* Google Login Button */}
                    <div id="buttonDiv"></div>

                    <button className="btn btn-green" type="button" onClick={showSignUp} >Create New Account</button>
                    <button className="btn-submit" id="submit-login" Name="submit" type="button" onClick={handleSubmitLogin}>Submit</button>
                </form>
            </div>

        </>
    );

}
export default Auth;