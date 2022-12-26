import React from 'react';
import './EmailVerificationSuccess.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { confirmVerification } from '../../../actions/auth';
const EmailVerificationSuccess = () =>{ 
  const  {id:_id}  = useParams();
  console.log(_id);
  const dispatch=useDispatch();
  useEffect(() => {
    // Run some code when the component is first rendered
    dispatch(confirmVerification(_id));
    console.log('email confirmed');
  }, []); 
  return (
  <div className="success-message">
    <h1>Email Verified!</h1>
    <p>Your email address has been successfully verified.</p>
  </div>
);}

export default EmailVerificationSuccess;