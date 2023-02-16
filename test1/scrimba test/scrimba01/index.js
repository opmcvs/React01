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
const root = ReactDOM.createRoot(document.getElementById("root")).render(page);
 
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


// 14 Project 1 markup
// Challenge: Starting from scratch, build and render the 
// HTML for our section project. Check the Google slide for 
// what you're trying to build.
import React from "react"
import ReactDOM from "react-dom/client";

ReactDOM.render(page1, document.getElementById("root"))
const page1 = (
    <div>
        <img src="./react-logo.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

// 15 Import react from react for JSX syntax
//  all JSX to be nested by a single parent.
//  What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.


// 16 Custom Components
import React from "react";
import ReactDOM from "react-dom/client";

const Root= ReactDom.createRoot(document.getElementById("root")).render(<TestOut/>);

function TestOut (){
    return (
    <div>
        <header>
            <nav>
                <img src="anyimage.sgv" width="40px"></img>
            </nav>
        </header>
        <h1>Here is the Ordered List</h1>
        <ol>
    <li>I like it  1</li>
    <li>I like it  2</li>
    <li>I like it  3</li>

        </ol>
        <footer>
            <small>© 2023 The Bat development. All rights reserved.</small>
        </footer>
    </div>
    )
}

// 17 part of challenge in 16 add more elements to the page.
// 18 Quiz!
//  Ui- what the user can see on the screen.

// 1. What is a React component?


// 2. What's wrong with this code?
// ``` the my needs to be pascal case or capitalize.
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// 3. What's wrong with this code?
// ``` the Header needs to have <> instead of ()
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))


// 19 Parent child components
//  the header from withing the page component under div 
//  to its own component but still connected to its parent page component

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer(){
    return (
        <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}



function Page() {
    return (
        <div>
            <Header />
            <MainContent/>
            <Footer/>
        </div>
    )
}

const Root = ReactDOM.createRoot( document.getElementById("root")).render(<Page/>)

// 20 Styling with Classes
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
// CSS
// .nav {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

// .nav-logo {
//     width: 60px;
// }

// .nav-items {
//     list-style: none;
//     display: flex;
// }

// TAKE NOTE OF THIS WAY  
// .nav-items > li {
//     padding: 10px;
// }

// 21 Organize components
//  put this on its own page
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

//  then ofcourse import it in the parent component page
// import Header from "./Header";

//  22 Run React locally with Vite uses-esbuild much faster.
// pre-requisite for vite- node and npm(install node using nvm)
// transpiles it to support major browsers out there 
// take care of bundlers as well like webpack,parcel,rollup,esbuild
// bundlers is the process of bundling-to reduce the no. of files when browsing.
// Vite is a next-generation, front-end 
// tool that focuses on speed and performance. 
// It consists of two major parts: A development 
// server that provides rich feature enhancements
//  over native ES modules: fast Hot Module Replacement (HMR),
//   pre-bundling, support for typescript, jsx, and dynamic import

import logo from "./scrimba.logo"- getting it locally

<img src={logo}