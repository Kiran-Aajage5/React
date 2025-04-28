import { CDN_URL } from "../utils/constants";

// Restaurent card component


// const Restaurentcard = (props) => {
//   console.log(props);


const Restaurentcard = (props) => {
    const {resData}= props;
  
    // optional chaining
    const {
      cloudinaryImageId,
       name,
       cuisines,
       avgRating,
       costForTwo,
       sla: { deliveryTime },  
      } = resData?.info; 
  
    return(
      <div className="Restaurentcard m-4 p-4 w-[250px] bg-orange-100 hover:bg-yellow-400 rounded-lg shadow-md overflow-hidden break-words">
        {/* <img className="res-logo"alt="rest-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG">
        </img> */}
        {/* <img 
    className="res-logo"
    alt="rest-logo"
    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
  /> */}
  
  <img 
    className={"res-logo rounded-lg"} 
    alt="rest-logo"
    src={ CDN_URL + resData.info.cloudinaryImageId}
  />
  
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(",")} </h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Mins</h4>
      </div>
    );
  };



  // Higher order function

 export const withPromtedLabel = (Restaurentcard) =>{
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white">Promoted</label>
        <Restaurentcard {...props}/>
      </div>
    );
  };
 };



 
  export default Restaurentcard;