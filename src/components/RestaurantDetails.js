import { useEffect, useState } from "react"
import { SWIGGY_RES_MENU_DETAILS_LINK } from "../utils/constants"
import { useParams } from "react-router-dom";

const RestaurantDetails=()=>{
    const [resMenuList,setResMenuList]=useState([]);
    const params=useParams();
    // console.log(params);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        try{
            const jsonData=await fetch(SWIGGY_RES_MENU_DETAILS_LINK + params.resid);
            const resMenu= await jsonData.json();
            console.log(resMenu);
            const resDetPath=resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR;
            resDetPath?.cards[1]?.card?.card?.itemCards ? setResMenuList(resDetPath.cards[1]?.card?.card?.itemCards) : setResMenuList(resDetPath.cards[2]?.card?.card?.itemCards)
            
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <h1>Restaurant Details</h1>
            <h2>Menu</h2>
            <ul>
                {
                    resMenuList?.map((item)=>(
                        <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                    ))
                }
            </ul>
            </div>
    )
}

export default RestaurantDetails;