import React from "react";

import ModSkillCard from "../ModSkillCard/ModSkillCard";
import reactImage from "../assets/images/react-icon.png";
import ReactLogo from "../Common/ReactLogo";
import NodeLogo from "../Common/NodeLogo";
import AngularLogo from "../Common/AngularLogo";
import NpmLogo from "../Common/NpmLogo";
import D3Logo from "../Common/D3Logo";
import PythonLogo from "../Common/PythonLogo";
import JavaLogo from "../Common/JavaLogo";
import FlaskLogo from "../Common/FlaskLogo";
import WebpackLogo from "../Common/WebpackLogo";
import GitLogo from "../Common/GitLogo";

import Down from "../Common/Down";
import "./SkillSet.css";

class SkillSet extends React.Component {
  propDown = () => {
    this.props.handleClick();
  };

  render() {
    return (
      <div>
        <h2 class="title">Skill Set </h2>
        <div style={{ background: "#f08b65" }} class="centered line" />
        <div class="cards">
          <div class="container">
            <div class="row">
              <div class="col-full">
                {/* <h2 class="section-title">Technical Skills</h2> */}
              </div>
            </div>

            <div className="row section-content">
              <div className="col-full text-center">
                <p id="para">
                  I've worked with a wide variety of programming languages. For
                  web applications I use Javascript with the React Framework.
                  Whenever I need the best performance possible I go with Java
                  and finally when I am working on passion projects, Python is
                  my go-to language. Here are a set of all the
                  technologies/languages I am well versed in:
                </p>
              </div>
              <div className="skill-container">
                <div className="col-1-5 skill" />
                <div className="col-1-5 skill ">
                  <NodeLogo />
                </div>
                <div className="col-1-5 skill">
                  <ReactLogo />
                </div>
                <div className="col-1-5 skill">
                  <PythonLogo />
                </div>
                <div className="col-1-5 skill">
                  <JavaLogo />
                </div>
                <div className="col-1-5 skill">
                  <AngularLogo />
                </div>
                <div className="col-1-5 skill">
                  <D3Logo />
                </div>
                <div className="col-1-5 skill">
                  <NpmLogo />
                </div>
                <div className="col-1-5 skill">
                  <FlaskLogo />
                </div>
                <div className="col-1-5 skill">
                  <WebpackLogo />
                </div>
                <div className="col-1-5 skill">
                  <GitLogo />
                </div>
              </div>
              <div id="arrowDown">
                <Down click={this.propDown} />
              </div>
              {/* <div class="col-full skill-container">
                <h3>Most frequently used tools</h3>
              </div>
              <div className="col-2-3 col-wrap centered skill-container">
                <div className="col-1-2">
                  <h4>Frameworks and Engines</h4>
                  <ul>
                    <li>Laravel</li>
                    <li>Vue.js</li>
                    <li>React</li>
                    <li>Electron</li>
                    <li>Unity Engine</li>
                  </ul>
                </div>
                <div className="col-1-2">
                  <h4>Software</h4>
                  <ul>
                    <li>Windows & Linux</li>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>MySQL</li>
                  </ul>{" "}
                </div>
              </div> */}
            </div>
          </div>

          {/* <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} /> */}
        </div>
      </div>
    );
  }
}

export default SkillSet;
