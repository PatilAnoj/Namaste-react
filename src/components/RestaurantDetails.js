import { SWIGGY_RES_MENU_DETAILS_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import ShimmerCard from "./Shimmer";

const RestaurantDetails = () => {
  const params = useParams();
  const { data, error, loading } = useFetchData(SWIGGY_RES_MENU_DETAILS_LINK + params.resid);

  const resDetPath =data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR;

  const itemCards =
    resDetPath?.cards[1]?.card?.card?.itemCards ??
    resDetPath?.cards[2]?.card?.card?.itemCards;
  // if(!onlineStatus) return (<div>Seems like you are Offline, please check your internet connection.</div>);
  if (loading) return (<div><ShimmerCard /></div>);
  if (error) return <div>failed to fetch data</div>;

  return (
    <div>
      <h1>Restaurant Details</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
