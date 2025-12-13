import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";   
import Heading from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Error from "./components/Error";
const AppLayout= ()=>(
    
    <div className="font-serif font-bold">
        <Heading />
        
        <Outlet />
    </div>
);
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
              }
            ],
            errorElement:<Error />,
        }        
    ]);
const root=ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={approuter}/>);