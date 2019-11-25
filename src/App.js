import React, { useEffect, lazy, Suspense } from "react";
import logo from "./logo.svg";
import Home from "./Home/Home";
import Responsive from "./Responsive/Responsive";
// import Scrolling from "./FullPage/Scrolling";
import Test from "./Test/Test";
// import SideNav from "./SideNav/SideNav";
import "./App.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import HamsterProgress from "./HamsterProgress/HamsterProgress";
import ActionButton from "./ActionButton/ActionButton";
import HeaderPage from "./HeaderPage/HeaderPage";
import Loader from "./Loader/Loader";

const Scrolling = lazy(() => import("./FullPage/Scrolling"));
const SideNav = lazy(() => import("./SideNav/SideNav"));

function App() {
  useEffect(() => {
    // var elem = document.getElementById("loader");
    // elem.parentNode.removeChild(elem);
    return () => {};
  }, []);

  const LazyLoad = () => {
    setTimeout(() => {
      return (
        <div>
          <SideNav />
          <Scrolling />
        </div>
      );
    }, 3000);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <SideNav />
          <Scrolling />
        </Suspense>

        {/* <HamsterProgress /> */}
        {/* <Loader /> */}
        {/* <ActionButton /> */}
        {/* <BurgerMenu /> */}
      </header>
    </div>
  );
}

export default App;
