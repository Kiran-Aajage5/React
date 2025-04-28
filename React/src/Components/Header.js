import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header component
const Header = () => {

  let btnName = "Login";
  // const [btnNameReact] = useState("Login");
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header Render");

  // online Status
  const OnlineStatus = useOnlineStatus();

  //  if No dependency array => useEffect is called on every component render
  // if dependency array is empty = [] => useEffect is called on intial render (just once)
  useEffect(()=> {
    console.log("useEffect called")
  }, [btnNameReact]);
    return (
      <div className="flex justify-between bg-pink-100 drop-shadow-lg m-2 sm:bg-blue-100 lg:bg-fuchsia-200">
        <div className="logo-container">
          <img  className="w-35" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
            {/* online status */}
            <li className="px-4 font-bold">
              Online Status: {OnlineStatus? "🟢": "🔴"}
            </li>
            <li className="px-4 font-bold">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4 font-bold">
              <Link to="/about">About Us</Link>
              </li>
            <li className="px-4 font-bold">
             <Link to="/contact">Contact Us</Link>
              </li>

              <li className="px-4 font-bold">
             <Link to="/grocery">Grocery</Link>
              </li>
            <li className="px-4 font-bold">Cart</li>
            {/* <button className="login" onClick={()=> {setbtnNameReact  ("Logout") ;
              // console.log(btnNameReact);
            }}>{btnNameReact}</button> */}
            
            {/* Toggel */}

            <button className="px-4 font-bold hover:bg-violet-600 rounded-3xl"  onClick={()=> { 
              btnNameReact=== "Login"
             ? setbtnNameReact  ("Logout") 
             : setbtnNameReact  ("Login") ;
              // console.log(btnNameReact);
            }}>{btnNameReact}</button>
          </ul>
  
        </div>
        {/* <div className="bg-blue-500 text-white p-4 rounded-lg">
      Hello Tailwind!
    </div> */}
  
      </div>
    )
  }
  

  export default Header;