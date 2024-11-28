import { RestaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const HomepageBody = () => {
  const [restaurantDataList, setRestaurantDataList] = useState(RestaurantList);
  const handleResList = () => {
    const topRatedRes = restaurantDataList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setRestaurantDataList(topRatedRes);
  };
  return (
    <div className="homepage-body">
      <div className="filters">
        <button
          onClick={() => {
            setRestaurantDataList(RestaurantList);
          }}
        >
          ALL
        </button>
        <button onClick={handleResList}>Top rated Restaurants</button>
      </div>
      <div className="homepage-body-container">
        {restaurantDataList.map((data) => (
          <RestaurantCard key={data.info.id} restaurantData={data.info} />
        ))}
      </div>
    </div>
  );
};

export default HomepageBody;
