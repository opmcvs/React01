ReactDom.render( <h1>Hello, My king!</h1>,document.getElementById("root"));

function TestBar(){
    return <h1>this is cool </h1>
}


ReactDOM.render(
    <div>
        <Navbar />
        <TestBar/>
        
    </div>,
    document.getElementById("root")
)
const show = document.getElementById("root");
show.innerText = "here we are";

const test1 = (
    <nav>
     <h1>Om's Site</h1>
     <ul>
     <li>Price</li>
     <li>About</li>
     <li>Contact</li>
     </ul>
     </nav>
    
)
ReactDOM.render(test1, document.getElementById("root"));

// 9 Drand and Deploy with Netlify.- needs Babel standalone
// through CDN then you need a couple of extra steps. 
// Netlify is the platform developers love for building 
// highly-performant and dynamic websites, e-commerce 
// stores and web applications. By uniting an extensive 
// ecosystem of technologies, services and APIs into one 
// workflow, Netlify unlocks new levels of team productivity,
//  while saving time and money

// 10 useless now 11 Goodbye CDN
// Dependencies are like .json file 
// React version 17 no need to use import React from React. 

// 12 New React 18 createRoot API
// React DOM is no longer supported and would need to use 
// createRoot instead
// 1.first no need to import ReactDom from React but  
//  instead from a client - import ReactDOM from "react-dom/client"
// 2.instead the ReactDom taking in two parameters
// - (navbar, document.getElementById("root"))what you 
// want to render and the root html you will now
// Create a root first and render what you want 
ReactDom.createRoot(document.getElementById("root")).render(navbar);

// 13 Use append() instead of ReactDOM .render()?
const root = ReactDOM.createRoot(document.getElementById("root")).render();
 
const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)
