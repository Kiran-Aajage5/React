import { CDN_URL } from "../utils/constants";

const ItemList = ({ items , dummy}) => {
    // console.log (dummy);
    // console.log(items);
    return (

     <div>
        {items.map((item)=> (
            <div key={item.card.info.id}className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">

                <div className="w-9/12 rounded-xl">
                <div className="py-2"> 
                    <span>{item.card.info.name}</span>
                    <span>- ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs text-gray-600 whitespace-normal break-words">{item.card.info.description} </p>
                </div>
                <div className="w-3/12 p-4  "> 
                <div className="relative"> 
                <img src={CDN_URL + item.card.info.imageId} className="rounded-xl"/>
                <button className="p-2 w-25 absolute -bottom-5  mx-6 rounded-lg bg-white text-green-700 font-bold shadow-lg hover:bg-gray-200">ADD</button>
                </div>
                
                </div>
                
             </div>
             

        ))}
    </div>
    ); // No map, just a placeholder
};

export default ItemList;

