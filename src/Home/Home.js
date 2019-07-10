import React, { Component } from "react";

import CustomButton from "../CustomButton/CustomButton";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import IntroPage from "../IntroPage/IntroPage";
import TopAppBar from "../TopAppBar/TopAppBar";
import Ensemble from "../Ensemble/Ensemble";
import ModVerticalStepper from "../ModVerticalStepper/ModVerticalStepper";
import ReactFullpage from "@fullpage/react-fullpage";

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
        <div className="landingPage">
          <h2 id="mainHeader">
            Dive into <b id="sashankName">Sashank's</b> World.
          </h2>
          <CustomButton handleclick={this.handleClick} />
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
