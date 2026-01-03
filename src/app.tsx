import React, { use } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";   
import Heading from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout= ()=>{
  const [userName,setUserName]=useState<string>("");
  useEffect(()=>{
    //API call to get user info
    const data= {
      name:"dummy"
    };
    setUserName(data.name);
  },[]);
  return(
    <Provider store={appStore}>
    <UserContext.Provider value={({user:userName , setUserName})}>
    <div className="font-serif font-bold">
     
        <Heading />
   
        <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
)};
const approuter=createBrowserRouter([
        {
            path:"/",
            element:<AppLayout />,
            children:[
              {
                path:"/",
                element:<Body />
              },
              {
                path:"about",
                element:<About />
              } ,
              {
                path:"contact",
                element:<Contact />
              },
              {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
              },
              {
                path:"cart",
                element:<Cart />
              }
            ],
            errorElement:<Error />,
        }        
    ]);
const root=ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={approuter}/>);