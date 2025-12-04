import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const [menuData,setMenuData]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{
        const abcd=await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId.slice(1));
        const json=await abcd.json();
        // console.log(json);
        setMenuData(json?.data);
    }
    if(!menuData){
        return <h1>Loading Menu...</h1>;
    };
    const {name,avgRating,cuisines}=menuData?.cards[2]?.card?.card?.info;
    const {items}=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>Cuisine: {cuisines.join(", ")}</h3>
            <h3>Average Rating: {avgRating}⭐</h3>
            <h2>Menu Items</h2>
            <ul>
                
            </ul>
        </div>
    );
};
export default RestaurantMenu;