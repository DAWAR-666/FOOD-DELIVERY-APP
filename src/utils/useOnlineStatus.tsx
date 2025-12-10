import { useState,useEffect } from "react";

const useOnlineStatus=():boolean=>{
    const [isOnline,setIsOnline]=useState<boolean>(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true);
        });
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        });

    },[]);
    return isOnline;
}
export default useOnlineStatus;