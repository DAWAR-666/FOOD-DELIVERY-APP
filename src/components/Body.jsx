const Body= () =>{
    return (
        <div className="body"> 
            <div className="searchBar">
                <input type="text" placeholder="Search for food items..." />
                <button>Search</button>
            </div>
            <div className="restaurantList">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                   
            </div>    
        </div>
    );
}
export default Body;