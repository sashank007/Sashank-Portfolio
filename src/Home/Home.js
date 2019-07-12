import React, { Component } from "react";

import CustomButton from "../CustomButton/CustomButton";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import IntroPage from "../IntroPage/IntroPage";
import TopAppBar from "../TopAppBar/TopAppBar";
import Ensemble from "../Ensemble/Ensemble";
import ModVerticalStepper from "../ModVerticalStepper/ModVerticalStepper";
import ReactFullpage from "@fullpage/react-fullpage";

// import CodeIcon from "../assets/images/code.png";
import CodeIcon from "../Common/Code";
import "./Home.css";

class Home extends Component {
  state = {
    showIntro: false
  };
  handleClick = () => {
    console.log("handle click in home");
    // this.setState({ showIntro: !this.state.showIntro });
    // fullpageApi.moveSectionDown();
    this.props.handleClick();
  };
  render() {
    const { showIntro } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {/* {showIntro ? null : ( */}
        <div className="social">
          <span id="email">
            <a
              href="mailto:sashank.tungaturthi@gmail.com?Subject=Hello"
              target="_top"
            >
              sashank.tungaturthi@gmail.com
            </a>
          </span>
        </div>
        <hr />
        <div className="landingPage">
          {/* <img src={CodeIcon} id="code" /> */}
          <CodeIcon />

          <p id="intro">Hello, my name is</p>
          <h1 id="name">Sashank Tungaturthi. </h1>
          <h2 id="mainHeader">
            Wanna get to know <b id="sashankName">Me</b> better?
            {/* <b id="sashankName">Sashank's</b> World. */}
          </h2>

          <CustomButton
            className="customButton"
            handleclick={this.handleClick}
          />
        </div>
        {/* )} */}
        {/* {showIntro ? (
          <div>
            <Slide direction="right" in={showIntro}>
              <div>
                <TopAppBar />
              </div>
            </Slide>
          </div>
        ) : null} */}
        {/* {showIntro ? (
          <div className="introDiv">
            <Slide direction="up" in={showIntro}>
              <div>
                {/* <Ensemble /> */}
        {/* <ModVerticalStepper />
              </div>
            </Slide>
          </div>
        ) : null} */}{" "}
      </div>
    );
  }
}

export default Home;
