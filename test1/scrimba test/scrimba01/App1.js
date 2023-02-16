import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App1(){
    return(
        <div>
        <Navbar/>
        <Main/>
          </div>
    )
}
const Root= ReactDom.createRoot(document.getElementById("root")).render(<App1/>);