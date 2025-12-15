const MenuCategories = ({data}) => {
    return (
        <div>
            {data.card.card.itemCards.map((p)=>(

                        <div key={p.card.info.id}>
                            <h4 className="flex 
                                            justify-center 
                                            border-amber-200 
                                            border-2 
                                            m-2 
                                            p-2 
                                            rounded-md 
                                            hover:bg-amber-100 
                                            hover:scale-105 
                                            transition-transform 
                                            duration-200">
                                {p.card.info.name} - ₹{p.card.info.price/100 || p.card.info.defaultPrice/100}
                                </h4>
                            
                        </div>))}  
        </div>
    );
}
export default MenuCategories;