import React from "react"
import "./Nav.css"
import { useSelector } from "react-redux";
import { useEffect ,useState} from "react";
import { useNavigate } from 'react-router-dom';
const Nav=()=>{
  const loggedAccountStore = useSelector((state) =>
  state.auth
  //state.auth
);
const [accountNavItem,setAccountNavItem]=useState(null);
useEffect(
  () => {
      //if the store in the useEffect has changed, put it into the useEffect to make sure it's up-to-date because it's asynchronous
      if (loggedAccountStore) {
        setAccountNavItem(
          loggedAccountStore.loggedIn?
        <img className="profile-photo" src={loggedAccountStore._doc.picture} alt="profile photo" />
        :<a  href="/auth">Login/Sign Up</a>
        )
      }
      console.log(loggedAccountStore);
  }
  , [loggedAccountStore]
);
    
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