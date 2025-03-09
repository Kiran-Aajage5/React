import Restaurentcard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
// to import mock data
import resList from "../utils/mockData";







// Body component
const Body = () => {


  // local State Variable

  const [listOfRestaurants, setListOfRestaurant] = useState (

    // {
    //   "info": {
    //     "id": "10576",
    //     "name": "Pizza Hut",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Pizzas"
    //     ],
    //     "avgRating": 4.3,
      
        
    //     "sla": {
    //       "deliveryTime": 47,
          
    //     },
        
    //     },
      
     
    // },

    // {
    //   "info": {
    //     "id": "10577",
    //     "name": "Dominos",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Pizzas"
    //     ],
    //     "avgRating": 4.5,
    //     "avgRatingString": "4.3",
      
        
    //     "sla": {
    //       "deliveryTime": 47,
          
    //     },
        
    //     },
      
     
    // },

    // {
    //   "info": {
    //     "id": "10578",
    //     "name": "McD",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Pizzas"
    //     ],
    //     "avgRating": 4.6,
      
        
    //     "sla": {
    //       "deliveryTime": 47,
          
    //     },
        
    //     },
      
     
    // },
    resList
  );


  // normal js var
  // let listOfRestaurants = null;

  // let listOfRestaurantsJs = [ 
             
                   
  //     {
  //       "info": {
  //         "id": "10576",
  //         "name": "Pizza Hut",
  //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
  //         "costForTwo": "₹350 for two",
  //         "cuisines": [
  //           "Pizzas"
  //         ],
  //         "avgRating": 4.3,
        
          
  //         "sla": {
  //           "deliveryTime": 47,
            
  //         },
          
  //         },
        
       
  //     },

  //     {
  //       "info": {
  //         "id": "10577",
  //         "name": "Dominos",
  //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
  //         "costForTwo": "₹350 for two",
  //         "cuisines": [
  //           "Pizzas"
  //         ],
  //         "avgRating": 4.5,
  //         "avgRatingString": "4.3",
        
          
  //         "sla": {
  //           "deliveryTime": 47,
            
  //         },
          
  //         },
        
       
  //     },

  //     {
  //       "info": {
  //         "id": "10578",
  //         "name": "McD",
  //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
  //         "costForTwo": "₹350 for two",
  //         "cuisines": [
  //           "Pizzas"
  //         ],
  //         "avgRating": 4.6,
        
          
  //         "sla": {
  //           "deliveryTime": 47,
            
  //         },
          
  //         },
        
       
  //     },
  // ];
  


    return(
      <div className="body">
        <div className="filter">
          {/* <button className="filter-btn" 
          onClick={()=> {console.log("Button clicked");}}>Top Rated Restaurants </button> */}

          <button className="filter-btn" 
          onClick={()=> {
          
              
           const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.3);
            // console.log(listOfRestaurants)
            setListOfRestaurant(filteredList);

          }}>Top Rated Restaurants </button>
        </div>
        <div className="Restaurent-container">
          
    
    
          {
             listOfRestaurants.map((restaurant) => (<Restaurentcard key={restaurant.info.id} resData={restaurant} />))
    
          }
          
          {/* <Restaurentcard resName="KFC" cuisine="Burger"/> */}
          
        
        </div>
    
      </div>
    )
    }
    export default Body;