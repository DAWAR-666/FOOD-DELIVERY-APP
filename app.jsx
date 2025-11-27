import React from "react";
import ReactDOM from "react-dom/client";
const Heading= () =><h1>sup</h1>;
const FunctionalComponent= ()=>(
    <div>
    <Heading />
    <h1>how u doooin??</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);