
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategories from "./MenuCategories";

const RestaurantMenu=()=>{
    const {resId}=useParams<{resId:string}>();
    if(!resId){
        return <h1>Invalid Restaurant ID</h1>;
    }
    const menuData=useRestaurantMenu(resId);
    if(!menuData){
        return <h1 className="text-4xl flex justify-center m-20">Loading Menu...</h1>;
    };
    const {name,avgRating,cuisines}=menuData?.cards[2]?.card?.card?.info;
    const items=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    e.card?.card?.hasOwnProperty("itemCards"));
    console.log(menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) =>
    e.card?.card?.hasOwnProperty("itemCards")))
    return(
        <div className="p-4 m-4">
            <div className="flex justify-center flex-col items-center mb-4">
            <h1 className="text-4xl">{name}</h1>
            <h3 className="text-lg">Cuisine: {cuisines.join(", ")}</h3>
            <h3 className="text-lg">Average Rating: {avgRating}⭐</h3>
            <h2 className="text-2xl">Menu Items</h2>
            </div>
            
                {items.map((e)=>(
                    <MenuCategories key={e.card.card.categoryId} data={e}/>))}             
        </div>
    );
};
export default RestaurantMenu;