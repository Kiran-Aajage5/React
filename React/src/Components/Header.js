import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

// Header component
const Header = () => {

  let btnName = "Login";
  // const [btnNameReact] = useState("Login");
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header Render");
    return (
      <div className="header">
        <div className="logo-container">
          <img  className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            {/* <button className="login" onClick={()=> {setbtnNameReact  ("Logout") ;
              // console.log(btnNameReact);
            }}>{btnNameReact}</button> */}
            
            {/* Toggel */}

            <button className="login" onClick={()=> { 
              btnNameReact=== "Login"
             ? setbtnNameReact  ("Logout") 
             : setbtnNameReact  ("Login") ;
              // console.log(btnNameReact);
            }}>{btnNameReact}</button>
          </ul>
  
        </div>
  
  
      </div>
    )
  }
  

  export default Header;