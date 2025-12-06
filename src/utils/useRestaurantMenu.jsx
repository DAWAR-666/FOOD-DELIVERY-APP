import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./Const";
const useRestaurantMenu = (resId) => {
    const [menuData,setMenuData]=useState(null);
    useEffect(()=>{
        fetchData();
    })
    const fetchData=async()=>{
        const url=FETCH_MENU_URL + resId.slice(1);
        const abcd=await fetch(url);
        const json=await abcd.json();
        setMenuData(json?.data);
    }
    return menuData.data;
}
export default useRestaurantMenu;