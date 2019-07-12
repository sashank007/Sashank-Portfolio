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
      <div style={{ background: "#f08b65" }} class="centered line" />
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="react" />
        <div class="ribbon">
          <span>React</span>
        </div>

        <div class="details">
          <span id="titleProject">Project Title</span>
          <span id="infoProject">
            Brief Description of what this project does and maybe a button for
            github link.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="android" />
        <div class="ribbon">
          <span>Java</span>
        </div>

        <div class="details">
          <span id="titleProject">Project Title</span>
          <span id="infoProject">
            Brief Description of what this project does and maybe a button for
            github link.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="npm" />
        <div class="ribbon">
          <span>Javascript</span>
        </div>

        <div class="details">
          <span id="titleProject">Project Title</span>
          <span id="infoProject">
            Brief Description of what this project does and maybe a button for
            github link.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="graphql" />
        <div class="ribbon">
          <span>Javascript</span>
        </div>

        <div class="details">
          <span id="titleProject">Project Title</span>
          <span id="infoProject">
            Brief Description of what this project does and maybe a button for
            github link.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="python" />
        <div class="ribbon">
          <span>Python</span>
        </div>

        <div class="details">
          <span id="titleProject">Project Title</span>
          <span id="infoProject">
            Brief Description of what this project does and maybe a button for
            github link.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div class="img-container">
        <img id="workImage" src={codeImage} alt="js" />
        <div class="ribbon">
          <span>Javascript</span>
        </div>

        <div class="details">
          <span id="titleProject">Project Title</span>
          <span id="infoProject">
            Brief Description of what this project does and maybe a button for
            github link.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
    </div>
  );
};
export default MyWork;
