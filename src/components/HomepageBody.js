import { SWIGGY_RES_LIST_API_LINK } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import useOnlineStatus from "../utils/useOnlineStatus";

const HomepageBody = () => {
  const [filteredResList, setFilteredResList] = useState(null);
  const onlineStatus=useOnlineStatus();
  
  const {data,error,loading}=useFetchData(SWIGGY_RES_LIST_API_LINK);
  const restaurants = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
 
  if(!onlineStatus) return (<div>Seems like you are Offline, please check your internet connection.</div>);
  if(loading) return (<div><ShimmerCard/> {console.log("shimmer loaded")}</div>);
  if(error) return(<div>failed to fetch data</div>);
  
  
  const handleTopRatedResList = () => {
    const topRatedRes = restaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setFilteredResList(topRatedRes);
  };

  return (
    <div className="w-full box-border flex flex-col">
      <div className="my-2 p-1">
        <button
          className="mx-2 border py-2 px-3 rounded-2xl hover:border-red-500 hover:bg-red-500 hover:text-white"
          onClick={() => {
            setFilteredResList(restaurants);
          }}
        >
          ALL
        </button>
        <button
          className="mx-2 border py-2 px-3 rounded-2xl  hover:border-red-500 hover:bg-red-500 hover:text-white"
        onClick={handleTopRatedResList}>Top rated Restaurants</button>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto  w-10/12 py-2">
        {(filteredResList ?? restaurants).map((list) => (
          <Link key={list.info.id} to={"/restaurantdetails/"+ list.info.id}><RestaurantCard  restaurantData={list.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default HomepageBody;
