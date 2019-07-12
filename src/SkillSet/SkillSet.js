import React from "react";

import ModSkillCard from "../ModSkillCard/ModSkillCard";
import reactImage from "../assets/images/react-icon.png";
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

            <div class="row section-content">
              <div class="col-full text-center">
                <p id="para">
                  I've worked with a wide variety of programming languages. For
                  web applications I use Javascript with the React Framework.
                  Whenever I need the most performance possible I obviously go
                  with Java and finally when I am building prototypes or working
                  on my hobby projects I fall back on Python
                </p>
              </div>
              <div class="skill-container">
                <div class="col-1-5 skill">
                  <h4 id="javascript">JavaScript</h4>
                </div>
                <div class="col-1-5 skill ">
                  <h4 id="node">Node.JS</h4>
                </div>
                <div class="col-1-5 skill">
                  <h4 id="react">React</h4>
                </div>
                <div class="col-1-5 skill">
                  <h4 id="python">Python</h4>
                </div>
                <div class="col-1-5 skill">
                  <h4 id="java">Java</h4>
                </div>
                <div class="col-1-5 skill">
                  <h4 id="angular">Angular</h4>
                </div>
              </div>
              <div id="arrowDown">
                <Down click={this.propDown} />
              </div>
              {/* <div class="col-full skill-container">
                <h3>Most frequently used tools</h3>
              </div>
              <div class="col-2-3 col-wrap centered skill-container">
                <div class="col-1-2">
                  <h4>Frameworks and Engines</h4>
                  <ul>
                    <li>Laravel</li>
                    <li>Vue.js</li>
                    <li>React</li>
                    <li>Electron</li>
                    <li>Unity Engine</li>
                  </ul>
                </div>
                <div class="col-1-2">
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
