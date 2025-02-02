/*

<div id="parent">
        <div id="child">
        <h1> i'm h1 tag</h1>
        <h2> i'm h2 tag</h2>
        </div>

</div>

*/


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"im h1 tag"),
        React.createElement("h2",{},"im h2 tag"), 
]),   


React.createElement("div",{id:"child 2"},[
    React.createElement("h1",{},"im h1 tag"),
    React.createElement("h2",{},"im h2 tag"),
]) 

]); 

// const parent = React.createElement(
//     "div",
//     {id:"parent"}, 
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"im h1 tag"),
//     React.createElement("h2",{},"im h2 tag")]

// ));




// const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");

console.log(parent); //obiject
// const root = ReactDOM.createRoot(document.getElementById("header"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);