import RestaurantCard from "./RestaurantCard";
const Body= () =>{
    return (
        <div className="body"> 
            <div className="searchBar">
                <input type="text" placeholder="Search for food items..." />
                <button>Search</button>
            </div>
            <div className="restaurantList">
                {resList.map((restaurant)=> {
                    return <RestaurantCard key={resCard.id} resData={restaurant}/>
                })}
                   
            </div>    
        </div>
    );
}
export default Body;