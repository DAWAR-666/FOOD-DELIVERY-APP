
const RestaurantCard= (props) =>{
    const {res}=props;
    const {name,cloudinaryImageId,avgRating}=res?.info;

    return (
        <div className="restaurantCard">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Food Item" />
            <h3>{name}</h3>
            
            <h4>rating:{avgRating}</h4>
        </div>
    );
}
export default RestaurantCard;