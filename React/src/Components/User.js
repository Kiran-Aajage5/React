// Functional Component

import { useEffect, useState } from "react";



const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{

    },[]);
    
    return (
    <div className="user-card">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Surat</h3>
        <h4>Contact: aajagekiran@gmail.com</h4>

    </div>
    );
}

export default User;