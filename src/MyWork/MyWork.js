import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core";
import codeImage from "../assets/images/code.jpg";
import GitHubIcon from "../assets/images/GitHub-Mark-32px.png";
import "./MyWork.css";

const MyWork = ({}) => {
  useEffect(() => {}, []);
  return (
    <div class="clearfix">
      <h2 id="titleWork">My Recent Work</h2>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="react" />
        <div class="ribbon">
          <span>React</span>
        </div>
        {/* <div class="corner-ribbon  sticky red shadow">Hello</div> */}

        <div class="desc-text">Project Description</div>
        <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div>
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="android" />
        <div class="ribbon">
          <span>Java</span>
        </div>
        <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div>
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="npm" />
        <div class="ribbon">
          <span>Javascript</span>
        </div>
        <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div>
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="graphql" />
        <div class="ribbon">
          <span>Javascript</span>
        </div>
        <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div>
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="python" />
        <div class="ribbon">
          <span>Python</span>
        </div>
        <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div>
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="js" />
        <div class="ribbon">
          <span>Javascript</span>
        </div>
        <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div>
      </div>
    </div>
  );
};
export default MyWork;
