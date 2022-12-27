import React from "react"
import "./Nav.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { getUserByJWTToken } from "../../actions/auth";
const Nav = () => {
  const loggedAccountStore = useSelector((state) =>
    state.auth
    //state.auth
  );
  const [accountNavItem, setAccountNavItem] = useState(null);
  const dispatch = useDispatch();
  //if the store in the useEffect has changed, put it into the useEffect to make sure it's up-to-date because it's asynchronous
  useEffect(
    () => {


      if (loggedAccountStore) {
        setAccountNavItem(
          loggedAccountStore.loggedIn ?
            <img className="profile-photo" src={loggedAccountStore._doc.picture} alt="profile photo" />
            : <a href="/auth">Login/Sign Up</a>
        )

        //const token=localStorage.getItem('token').split(' ')[1];
        //dispatch(getUserByJWTToken(token));
        //if(loggedAccountStore.getUserByJWTTokenSuccess);

      }
      console.log(loggedAccountStore);

    }
    , [loggedAccountStore]
  );
  useEffect(
    () => {
      //set token for each 1 seconds
      const interval = setInterval(() => {
        setToken();
      }, 1000);
      return () => clearInterval(interval);
    }, []
  )
  function setToken() {
    
    const token = localStorage.getItem('token').split(' ')[1];
    if(!loggedAccountStore.loggedIn && token){
      dispatch(getUserByJWTToken(token));
    }
  }
  //const settokenInterval=setInterval(setToken,5000);
  setToken();
  return (<nav>
    <ul >
      <div className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="https://prophet12505.github.io/HTML-CSS-JS-portfolio-Website-" target="_blank">About author</a>
        </li>
      </div>
      <div className="nav-list" id="account-nav-item">
        <li >
          {accountNavItem}
        </li>
      </div>

    </ul>



  </nav>);
}

export default Nav;