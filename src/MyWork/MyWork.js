import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core";
import codeImage from "../assets/images/code.jpg";
import GitHubIcon from "../assets/images/GitHub-Mark-32px.png";
import "./MyWork.css";

const MyWork = ({}) => {
  useEffect(() => {}, []);
  return (
    <div className="clearfix">
      <h2 id="titleWork">My Recent Work</h2>
      <div className="img-container">
        <img id="workImage" src={codeImage} alt="react" />
        <div className="ribbon">
          <span>React</span>
        </div>
        {/* <div className="corner-ribbon  sticky red shadow">Hello</div> */}

        <div className="desc-text">Project Description</div>
        <div className="middle">
          <img src={GitHubIcon} />
          <div className="text">Go To Github Repo</div>
        </div>
      </div>
      <div className="img-container">
        <img id="workImage" src={codeImage} alt="android" />
        <div className="ribbon">
          <span>Java</span>
        </div>
        <div className="middle">
          <img src={GitHubIcon} />
          <div className="text">Go To Github Repo</div>
        </div>
      </div>
      <div className="img-container">
        <img id="workImage" src={codeImage} alt="npm" />
        <div className="ribbon">
          <span>Javascript</span>
        </div>
        <div className="middle">
          <img src={GitHubIcon} />
          <div className="text">Go To Github Repo</div>
        </div>
      </div>
      <div className="img-container">
        <img id="workImage" src={codeImage} alt="graphql" />
        <div className="ribbon">
          <span>Javascript</span>
        </div>
        <div className="middle">
          <img src={GitHubIcon} />
          <div className="text">Go To Github Repo</div>
        </div>
      </div>
      <div className="img-container">
        <img id="workImage" src={codeImage} alt="python" />
        <div className="ribbon">
          <span>Python</span>
        </div>
        <div className="middle">
          <img src={GitHubIcon} />
          <div className="text">Go To Github Repo</div>
        </div>
      </div>
      <div className="img-container">
        <img id="workImage" src={codeImage} alt="js" />
        <div className="ribbon">
          <span>Javascript</span>
        </div>
        <div className="middle">
          <img src={GitHubIcon} />
          <div className="text">Go To Github Repo</div>
        </div>
      </div>
    </div>
  );
};
export default MyWork;
