import React from "react";
import logo from "./logo.svg";
import Home from "./Home/Home";
import Responsive from "./Responsive/Responsive";
import Scrolling from "./FullPage/Scrolling";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Home /> */}
        <Scrolling />
      </header>
    </div>
  );
}

export default App;
