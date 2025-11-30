
const RestaurantCard= (props) =>{
    const {res}=props;
    return (
        <div className="restaurantCard">
            <img src="https://www.warmoven.in/cdn/shop/files/duel-delight-chocolate_-cake.jpg?v=1749833568&width=1080" alt="Food Item" />
            <h3>{res.info.name}</h3>
            <p>{res.description}.</p>
            <h4>rating:{res.info.avgRating}</h4>
        </div>
    );
}
export default RestaurantCard;