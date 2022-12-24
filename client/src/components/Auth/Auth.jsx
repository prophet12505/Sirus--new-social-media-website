import React from "react"
import "./Auth.css"

const Auth = () => {
    function showSignUp(){
        console.log("yes");
        document.getElementById('id01').style.display='block';
    }
    function hideSignUp(){
        document.getElementById('id01').style.display='none';
    }
    return (
        <>
        <div id="id01" className="modal">

            <form className="modal-content animate" action="/" method="post">
                <div className="imgcontainer">
                    <span onClick={hideSignUp} className="close" title="Close Modal">&times;</span>
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div class="signup-container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required ></input>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required ></input>

                            <button className="btn-green" type="submit">Login</button>
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



                <div className="login-container">
                    <h1>Welcome! Please login to continue.</h1>
                    <form action="/login" method="post">
                        <label for="username">Username:</label><br />
                        <input type="text" id="username" name="username" placeholder="Enter your username" /><br />
                        <label for="password">Password:</label><br />
                        <input type="password" id="password" name="password" placeholder="Enter your password" /><br /><br />
                        <button className="btn btn-green" type="button" onClick={showSignUp}>Create New Account</button>
                        <button Name="btn-submit" type="submit">Submit</button>
                    </form>
                </div>

                </>
                );

}
                export default Auth;