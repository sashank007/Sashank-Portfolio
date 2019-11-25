import React from "react";

import "./HeaderPage.css";

export default function HeaderPage() {
  let state = {
    menuState: false
  };

  const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  /***********************
    Nav Component
   ***********************/

  const Nav = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              yago
              <strong>estévez</strong>
            </p>
            <a
              onClick={props.toggleMenu}
              className={
                props.showMenu === "active"
                  ? "menu-button active"
                  : "menu-button"
              }
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };

  /***********************
    Header Component
   ***********************/

  const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">I do</span>
            <span className="line">graphic design</span>
            <span className="line">
              <span className="color">&</span> code.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };

  const toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "deactive"
        ? "active"
        : "deactive"
    }));
  };

  return (
    <React.Fragment>
      <Menu toggleMenu={toggleMenu} showMenu={state.menuState} />
      <Nav toggleMenu={toggleMenu} showMenu={state.menuState} />
      <Header />
    </React.Fragment>
  );
}
