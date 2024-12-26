import { RESTAURANT_CARD_BG } from "../utils/constants";

const RestaurantCard=({restaurantData})=>{
    const {name,cuisines,cloudinaryImageId,areaName}=restaurantData;
    return(
      <div className="w-60 h-full p-2 border rounded-md hover:bg-gray-100">
        <div className="w-full h-32 bg-cover bg-no-repeat rounded-sm"  style={{backgroundImage: `url(${RESTAURANT_CARD_BG+cloudinaryImageId})`}}></div>
        <p className="text-md font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{cuisines.join(', ')}</p>
        <p className="text-gray-900 text-base mt-2">{areaName}</p>
      </div>
    )
}

export default RestaurantCard;