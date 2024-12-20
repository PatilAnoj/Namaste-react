import { SWIGGY_RES_LIST_API_LINK } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";

const HomepageBody = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState(false);

  useEffect(() => {
    fetchData();
    // console.log("useeffect loaded");
    // console.log(filteredResList.length);
  },[]);

  const fetchData = async () => {
    try {
      const jsonData = await fetch(SWIGGY_RES_LIST_API_LINK);
      const resListdata = await jsonData.json();
      const restaurants =
        resListdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantDataList(restaurants);
      setFilteredResList(restaurants);
      // console.log("fetch data")
    } catch (error) {
      // console.error("Failed to fetch restaurant data:", error);
      setError(true);
    }finally{
      setLoading(false);
    }
  }  

  if(loading) return (<div><ShimmerCard/> {console.log("shimmer loaded")}</div>);
  if(error) return(<div>failed to fetch data</div>);

  const handleTopRatedResList = () => {
    const topRatedRes = restaurantDataList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setFilteredResList(topRatedRes);
  };

  return (
    <div className="homepage-body">
      <div className="filters">
        <button
          onClick={() => {
            setFilteredResList(restaurantDataList);
          }}
        >
          ALL
        </button>
        {/* {console.log("component loaded", filteredResList.length)} */}
        <button onClick={handleTopRatedResList}>Top rated Restaurants</button>
      </div>
      <div className="homepage-body-container">
        {filteredResList.map((data) => (
          <Link key={data.info.id} to={"/restaurantdetails/"+ data.info.id}><RestaurantCard  restaurantData={data.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default HomepageBody;
