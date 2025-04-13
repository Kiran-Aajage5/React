// Class based Component


import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
import { Component } from "react";



class About extends Component{

    constructor(props){
        super(props);
       // console.log( " Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent ComponentDidMount");
    }

    render(){
        //console.log( " Parent Render");
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>This is about us page</h2>
                {/* <User name={"Kiran (function)"}/> */}
    
                <UserClass name={"First (Class)"} Location={"Surat (Class)"}/>
                {/* <UserClass name={"Second (Class)"} Location={"US (Class)"}/> */}
            </div>
        );   
    }
}

// const About = ()=> {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is about us page</h2>
//             {/* <User name={"Kiran (function)"}/> */}

//             <UserClass name={"Kiran (Class)"} Location={"Surat (Class)"}/>
//         </div>
//     );
// };




/*
parent constructor will call
- parent render
-Kiran  constructor
-Kiran render
  


- Mark constructor
 -Mark render

 <Dom Updated --in a single time Batches>
 -Kiran ComponentDidMount
 -Mark ComponentDidMount 

 - Parent ComponentDidMount 
*/

export default About; 