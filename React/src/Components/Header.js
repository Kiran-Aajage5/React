import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Header component
const Header = () => {

  let btnName = "Login";
  // const [btnNameReact] = useState("Login");
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header Render");

  //  if No dependency array => useEffect is called on every component render
  // if dependency array is empty = [] => useEffect is called on intial render (just once)
  useEffect(()=> {
    console.log("useEffect called")
  }, [btnNameReact]);
    return (
      <div className="header">
        <div className="logo-container">
          <img  className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
              </li>
            <li>
             <Link to="/contact">Contact Us</Link>
              </li>
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