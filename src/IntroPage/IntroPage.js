import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import TopAppBar from "../TopAppBar/TopAppBar";
import ModCard from "../ModCard/ModCard";
import robustImage from "../assets/images/data.png";
import designImage from "../assets/images/layers.png";
import codeImage from "../assets/images/data.png";
import listenerImage from "../assets/images/listener.png";
import engineerImage from "../assets/images/engineer.png";
import dp from "../assets/images/dp.jpeg";
import Grow from "@material-ui/core/Grow";
import Collapse from "@material-ui/core/Grow";
import Down from "../Common/Down";
import "./IntroPage.css";
class IntroPage extends React.Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  propDown = () => {
    this.props.handleClick();
  };
  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className="root">
        <div>
          <h2 class="about">About</h2>
          <div style={{ background: "#f08b65" }} class="centered line" />
          <div id="card">
            <ModCard className="myCard" image={dp} />
          </div>
          <div className="textContent">
            <p id="para">
              Hi, I'm Sashank, a Full-Stack Software Engineer who is currently
              pursuing my Masters in Computer Science. I am majorly interested
              in Engineering applications and designing them both in the
              front-end and the back-end. Looking for opportunities to further
              enhance my skill-set and creating amazing products to help make
              the world a better place!
            </p>
          </div>
          <div id="downArrow">
            <Down click={this.propDown} />
          </div>
          {/* <div class="cards">
              <ModCard
                title="Robust Code"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={codeImage}
              />
              <ModCard
                title="UI/UX Design"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={designImage}
              />
              <ModCard
                title="Communication"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={listenerImage}
              />
              <ModCard
                title="Engineering Perfection"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={engineerImage}
              />
            </div> */}
        </div>
      </div>
    );
  }
}
export default IntroPage;
