import Restaurentcard ,{withPromtedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
// to import mock data
import resList from "../utils/mockData";
// shimmer Ui
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
//online/offline status
import useOnlineStatus from "../utils/useOnlineStatus";


 






// Body component
const Body = () => {


  // local State Variable

  const [listOfRestaurants, setListOfRestaurant] = useState ([]

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
    // resList
  );
  const [filteredRestaurant, setFilterdRestaurant] = useState([]);

  // Search bar
  const [searchText, setsearchText] = useState("");
  // Whenever state variable update, react triggers  a reconciliation cycle (rerender the component)
  console.log("Body Rendered",listOfRestaurants);
  // useeffect
 useEffect (()=> {
  fetchData();
  // console.log ("useEffect called");
}, []);


// WithPromtedLabel HOC
const RestaurentcardPromoted = withPromtedLabel(Restaurentcard);


//fetch
const  fetchData = async() => {
  const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  // https://corsproxy.io/?
  const json = await data.json ();
  console.log(json);
  // Optional Chaining
  setListOfRestaurant(json?.data?.cards[1]?.card ?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilterdRestaurant(json?.data?.cards[1]?.card ?.card?.gridElements?.infoWithStyle?.restaurants);
}

// online/ offline status
const OnlineStatus = useOnlineStatus ();
if (OnlineStatus === false ) return (<h1> Looks like you are offline, please check your internet connection</h1>) ;

//  loader
// condintional rendering- rendering on basices of condition is condintional rendering
// if (listOfRestaurants.length === 0){
  // return <h1>Loading.....</h1>
//   return <Shimmer/>;
// }


// imp Que 
// console.log("Body render");

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
  


    // return listOfRestaurants.length === 0 ? <Shimmer/> :(
      return !listOfRestaurants || listOfRestaurants.length === 0 ? <Shimmer/> : (

      <div className="body">
        <div className="filter">

          <div className="Search p-4 m-4">
             <input type="text" className="search-box  border border-solid border-black rounded-2xl" value={searchText} 
             onChange={(e)=>{
              setsearchText(e.target.value);

             }}/>
              <button className="px-4 py-1 m-2 bg-green-200 rounded-2xl" onClick={()=>{
                console.log(searchText);
                const filteredRestaurant = listOfRestaurants.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
              //  const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.includes(searchText));
              // const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name === (searchText));
              //  setListOfRestaurant (filteredRestaurant);
              setFilterdRestaurant (filteredRestaurant);

              //  const filteredRestaurant = listOfRestaurants.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));

              }


              }>Search</button>

              {/* top rate */}

              <button className="filter-btn px-4 py-1 m-2 bg-gray-200 rounded-xl" 
          onClick={()=> {
          
              
           const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.3);
            // console.log(listOfRestaurants)
            setFilterdRestaurant(filteredList);
            // setlistofRestaurants(filteredList);

          }}>Top Rated Restaurants </button>
          </div>
          
          
          {/* <button className="filter-btn" 
          onClick={()=> {console.log("Button clicked");}}>Top Rated Restaurants </button> */}
          
         {/* <div className= "p-4 m-4 f flex">
        
         </div> */}
        </div>

        <div className="Restaurent-container flex flex-wrap justify-center">
          
    
    
          {
            //  listOfRestaurants.map((restaurant) => (<Restaurentcard key={restaurant.info.id} resData={restaurant} />))
            filteredRestaurant.map((restaurant) => 
              (<Link  key={restaurant.info.id} to={"restaurants/"+ restaurant.info.id}>

                {/* if restaurant is promoted then add a promoted label to it */
                 restaurant.info.promoted ? (<RestaurentcardPromoted resData={restaurant}/> ) : (<Restaurentcard resData={restaurant} />)
                }
               </Link>))
                // {/* <Restaurentcard resData={restaurant} /></Link>)) */}
          }
          
          {/* <Restaurentcard resName="KFC" cuisine="Burger"/> */}
          

          
        
        </div>
    
      </div>
    )
    }
    export default Body;