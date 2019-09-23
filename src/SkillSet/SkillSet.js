import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
import CPlusPlusLogo from "../Common/CPlusPlusLogo";
import RustLogo from "../Common/RustLogo";
import Down from "../Common/Down";
import "./SkillSet.css";

const SkillSet = props => {
  const propDown = () => {
    props.handleClick();
  };
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <h2 class="title_skill">Skill Set </h2>
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
              <p class="para_skillset">
                I've worked with a wide variety of programming languages. For
                web applications I use Javascript with the React Framework.
                Whenever I need the best performance possible I go with C++ or
                Java and finally when I am working on passion projects, Python
                is my go-to language. I am also currently learning Rust to add
                to my arsenal of skills. Here are the set of
                technologies/languages I am well versed in
              </p>
            </div>
            <div className="skill-container">
              <div className="col-1-5 skill ">
                {!matches ? (
                  <CPlusPlusLogo width={25} height={35} />
                ) : (
                  <CPlusPlusLogo width={35} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <ReactLogo width={35} height={35} />
                ) : (
                  <ReactLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <PythonLogo width={35} height={35} />
                ) : (
                  <PythonLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <JavaLogo width={35} height={35} />
                ) : (
                  <JavaLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <AngularLogo width={35} height={35} />
                ) : (
                  <AngularLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <NodeLogo width={35} height={35} />
                ) : (
                  <NodeLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <NpmLogo width={35} height={35} />
                ) : (
                  <NpmLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <FlaskLogo width={35} height={35} />
                ) : (
                  <FlaskLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <WebpackLogo width={35} height={35} />
                ) : (
                  <WebpackLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <GitLogo width={35} height={35} />
                ) : (
                  <GitLogo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <D3Logo width={35} height={35} />
                ) : (
                  <D3Logo width={50} height={50} />
                )}
              </div>
              <div className="col-1-5 skill">
                {!matches ? (
                  <RustLogo width={35} height={35} />
                ) : (
                  <RustLogo width={50} height={50} />
                )}
              </div>
            </div>
            <div id="arrowDown">
              <Down click={propDown} />
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
};

export default SkillSet;
