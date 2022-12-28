import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav/Nav';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import EmailVerificationSuccess from './components/Auth/EmailAuth/EmailVerificationSuccess';


import {BrowserRouter, Routes, Route} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {


  return (
    <GoogleOAuthProvider clientId="872960135632-2irvivn8qk2bnqn86bin0g3m4punsnfh.apps.googleusercontent.com">
    <BrowserRouter>
      <div className="App">
    
          {/* <div id="headingbox">
          <h1>Sirius -- find your best life</h1>
          </div> */}
          

        {/* </header> */}
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/auth' element={<Auth></Auth>}></Route>
          {/* ///:id/verify-email */}
          <Route path='/auth/:id/verify-email' element={<EmailVerificationSuccess></EmailVerificationSuccess>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
