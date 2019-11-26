import React from "react";
import logo from "./logo.svg";
import Home from "./Home/Home";
import Responsive from "./Responsive/Responsive";
import Scrolling from "./FullPage/Scrolling";
import Test from "./Test/Test";
import Portfolio from "./Portfolio/Portfolio";
import SideNav from "./SideNav/SideNav";
import "./App.css";
import MenuScroll from "./MenuScroll/MenuScroll";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Home /> */}
        {/* <SideNav />
        <Scrolling /> */}
        <SideNav />
        <MenuScroll />
        {/* <Portfolio /> */}
        {/* <Test /> */}
      </header>
    </div>
  );
}

export default App;
