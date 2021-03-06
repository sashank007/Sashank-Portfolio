import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ModCard from "../ModCard/ModCard";
import dp from "../assets/images/dp-01.jpeg";
import dp_color from "../assets/images/dp-02.jpeg";
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
            <ModCard className="myCard" image={dp_color} />
          </div>
          <div className="textContent">
            <p class="intro_para">
              Hi, I'm Sashank, a Full-Stack Software Engineer who is currently
              chasing my Masters in Computer Science. I am majorly interested in
              Engineering applications and designing them both in the front-end
              and the back-end. I am looking for opportunities to create amazing
              products to help make the world a better place!
            </p>
          </div>
          <div id="downArrow">
            <Down click={this.propDown} />
          </div>
        </div>
      </div>
    );
  }
}
export default IntroPage;
