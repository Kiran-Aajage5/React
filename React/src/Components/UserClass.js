import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            // count: 0,
            // count2: 2,
            userInfo:{
                login: "kiran",
                id: "Abc",
                


            },
           
        };

        // console.log(props);
         console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount(){
         console.log(this.props.name + "child ComponentDidMount");


        // Api Call
        const data = await fetch("");
        const json =  await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);

       
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        // const {name,Location} = this.props;
        // const {count} = this.state;
         console.log( this.props.name + " Child Render");

        const {login, id, avatar_url} =  this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1> */}
                {/* <h1>Count2: {count2}</h1> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                        // count2: this.state.count2 + 1,
                    })
                }}>Count</button> */}
                <img src= {avatar_url}/>

                <h2>Name: {login}</h2>
                <h3>Location: {id}</h3>
                <h4>Contact: aajagekiran@gmail.com</h4>
        
            </div>
            );
    }
}

export default UserClass;





/*

Mounting


Consttuctor (dummmy)
Render (Dummy)
    < HTML Dummy>
    Component did mount
    <Api Call>
    <this.setstate> ---> State variable is updated

-------  Update

    render(API Data)
    <HTML (new Api Data) user can see data here

    ComponentDidUpdate
*/