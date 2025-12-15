const MenuCategories = ({data}) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl 
                               font-bold 
                               m-2
                                 p-2
                                    border-b-4
                                    border-amber-300
                                    ">
                    {data.card.card.title}
                </h2>
                <h2>V</h2>
            </div>
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