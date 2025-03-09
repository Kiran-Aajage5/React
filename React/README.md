# React Js

# Parcel
- Dev build
- Local Server
- HMR - Hot Module Replacement
- file watching algorithm - written in c++
- caching - faster build 
- image optimization
- minification
- bundling
- compress
- Consistent Hashing
- Code spliting
- Differential bundling - support older browsers
- Diagnostic
- Error handling
- HTTPS
- tree shaking (will remaove unused code for u)
- (https://parceljs.org/)
- different dev and production bundle




# food App
<!-- // ep3
// React element
// const heading = React.createElement("h1",{id:"heading"},"React");


// jsx is not HTML in js
// it is HTML Like syntax
// const jsxHeading = <h1  className="heading"> React Using JSX</h1>
// console.log(jsxHeading);

// React Component
// 1 class based component- old way writing code
// 2 functional component- new way of writing code


// const HeadingComponent = () => {
//   return   <h1 className="heading">Hello</h1>
// };


// Component Composition:-
// const Title = () => (
// <h1  className="heading"> React Using JSX

// </h1>
// ); -->






<!-- // const elem = <span> React Element</span>

// const Title = () => (
// <h1  className="heading"> React Using JSX

// </h1>
// );

// // js codeinside jsx
// // const number = 1000;
// // multiline code use "()"
// const HeadingComponent = () => (
// <div id="container">
//   <Title/> 

//   {/* {Title()}  js as a function*/}

//   {/* <h2>{100+200}</h2> */}



//   <h1 className="heading">Hello1 functional compo</h1>
//   </div>
// );






// { root.render(jsxHeading);

// console.log(jsxHeading); }






/*

<div id="parent">
        <div id="child">
        <h1> i'm h1 tag</h1>
        <h2> i'm h2 tag</h2>
        </div>

</div>

*/


// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"this is React"),
//         React.createElement("h2",{},"by Kiran"), 
// ]),   


// React.createElement("div",{id:"child 2"},[
//     React.createElement("h1",{},"im h1 tag"),
//     React.createElement("h2",{},"im h2 tag"),
// ]) 

// ]); 

// const parent = React.createElement(
//     "div",
//     {id:"parent"}, 
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"im h1 tag"),
//     React.createElement("h2",{},"im h2 tag")]

// ));




// const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");

// console.log(parent); //obiject
// const root = ReactDOM.createRoot(document.getElementById("header"));
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
 -->



<!-- // ep4

// ui layout for food order (components)
/**
 Header
 - logo
 -nav links

 Body
  - Search
  - Restaurent container
  - Restaurent card
     
    - Dish name
    - Image
    - Restaurent Name
    - Rating
    - Cuisines
    - Time to deliver
 Footer
 - Copyright
 - links
 - Address
 - Contact
 * 
 */

// here we build top level component, what is component? functional component? ( Component is a js function)
// the following is our App component
// What is app component? (it is function that return jsx code) -->


<!-- // Restaurent data of Api

// const resObj = {
  
//     "info": {
//       "id": "671928",
//       "name": "KFC",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
//       "locality": "7th Block",
//       "areaName": "Koramangla",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Fast Food",
//         "Rolls & Wraps"
//       ],
//       "avgRating": 4.3,
//       "parentId": "547",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "3.9K+",
//       "sla": {
//         "deliveryTime": 31,
//         "lastMileTravel": 1.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "1.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2025-02-06 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
//             "description": "bolt!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "bolt!",
//                   "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
//       "type": "WEBLINK"
//     }
  
// } -->



<!-- {/* <Restaurentcard resName="Meghana Foods" cuisine="Asian, Sweets, Cuisines"/> */}
      {/* <Restaurentcard resData = {resList[0]} />
      <Restaurentcard resData = {resList[1]} />
      <Restaurentcard resData = {resList[2]} />
      <Restaurentcard resData = {resList[3]} />
      <Restaurentcard resData = {resList[4]} />
      <Restaurentcard resData = {resList[5]} />
      <Restaurentcard resData = {resList[6]} />
      <Restaurentcard resData = {resList[7]} />
      <Restaurentcard resData = {resList[8]} />
      <Restaurentcard resData = {resList[9]} />
      <Restaurentcard resData = {resList[10]} />
      <Restaurentcard resData = {resList[11]} />
      <Restaurentcard resData = {resList[12]} />
      <Restaurentcard resData = {resList[13]} />
      <Restaurentcard resData = {resList[14]} />
      <Restaurentcard resData = {resList[15]} />
      <Restaurentcard resData = {resList[16]} />
      <Restaurentcard resData = {resList[17]} />
      <Restaurentcard resData = {resList[18]} />
      <Restaurentcard resData = {resList[19]} /> */} -->
