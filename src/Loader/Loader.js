import React from "react";

// import "./LoaderSplash.scss";
import "./Loader.css";
export default class Loader extends React.Component {
  constructor() {
    super();
    this.state = {
      words: null,
      activeWord: null
    };
  }

  render() {
    return (
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    );
  }
}
