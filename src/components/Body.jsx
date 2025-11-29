import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
const Body= () =>{
    return (
        <div className="body"> 
            <div className="searchBar">
                <input type="text" placeholder="Search for food items..." />
                <button>top rating ({'>'}4)</button>
            </div>
            <div className="restaurantList">
                {resData.map((restaurant)=> {
                    return <RestaurantCard key={restaurant.id}res={restaurant} />
                })}
                   
            </div>    
        </div>
    );
}
export default Body;