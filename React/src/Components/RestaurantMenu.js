import{useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    // origin vido
    const [resInfo, setResInfo] = useState(null);

    
    // old vido
    const {resId} = useParams();
    // const params = useParams();
    // console.log(params);
    // const params = useParams();

    
    // orgi 
    useEffect(() => {
        fetchMenu();
    }, []);

   
    // orgin 

    const fetchMenu = async () => {
        const data = await fetch ( "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10582&catalog_qa=undefined&submitAction=ENTER");
        
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);


        
    };



 



    // Shimmer UI
    if (resInfo === null) return <Shimmer/>

    

    const { name,cuisines,costForTwoMessage } = resInfo?.cards?.[2]?.card?.card.info;
    
    // const {itemCards} = resInfo?. cards
    // Destructure itemCards from the correct path
    // const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;
    // console.log(itemCards);

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);


    // return (  
    //     <div className="menu">
    //         <h1>{name}</h1>
    //         <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            {/* <h3>{costForTwoMessage}</h3> */}

            // <ul>
            //    {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - {"Rs"}
            //     {item.card.info.price/100 || item.card.info.defaultPrice/100 } </li>)}
            //     {/* <li>{itemCards[0].card.info.name}</li>
            //     <li>{itemCards[1].card.info.name}</li>
            //     <li>{itemCards[2].card.info.name}</li> */}
            //      <li>Coke</li>
                
         {/* </ul>

     </div>
    ); */}



    return (  
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>

            <ul>

                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs"}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                )

                )
                }


                <li>{itemCards[0].card.info.name}</li>
               <li>{itemCards[2].card.info.name}</li>
            </ul>

            
            
        </div>
    );

};

export default RestaurantMenu;





