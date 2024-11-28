import { RESTAURANT_CARD_BG } from "../utils/constants";

const RestaurantCard=({restaurantData})=>{
    const {name,cuisines,cloudinaryImageId,areaName}=restaurantData;
    return(
      <div className="restaurant-card">
        <div className="restaurant-image"  style={{backgroundImage: `url(${RESTAURANT_CARD_BG+cloudinaryImageId})`}}></div>
        <p className="restaurant-card-title">{name}</p>
        <p className="restaurant-card-subtitle">{cuisines.join(', ')}</p>
        <p className="restaurant-card-subtitle">{areaName}</p>
      </div>
    )
}

export default RestaurantCard;