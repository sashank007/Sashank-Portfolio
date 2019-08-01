import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core";
import codeImage from "../assets/images/code.jpg";
import GitHubIcon from "../assets/images/github-icon.png";
import momTrackerImage from "../assets/images/momtracker.png";
import graphQLImage from "../assets/images/graphql.png";
import netflixRouletteImage from "../assets/images/nr_1.PNG";
import tempeHappeningsImage from "../assets/images/th_search.PNG";
import NpmLogo from "../assets/images/npmLogo.png";
import Sassy from "../assets/images/sassy_page2.PNG";
import Down from "../Common/Down";
import cheatSheetImage from "../assets/images/CheatSheet.PNG";

import "./MyWork.css";

const momTrackerUrl = "https://github.com/sashank007/Mom-Tracker";
const tempeHappeningsUrl =
  "https://github.com/sashank007/graphql-react-event-manager";
const netflixRouletteUrl = "https://github.com/sashank007/NetflixRoulette";
const npmUrl = "https://www.npmjs.com/settings/sashank007/packages";
const cheatSheetUrl = "http://ada-cheatsheet.netlify.com";
const sassyUrl =
  "https://marketplace.visualstudio.com/items?itemName=SashankTungaturthi.Sassy&ssr=false#overview";

const MyWork = props => {
  const propDown = () => {
    props.handleClick();
  };

  const handleWorkClick = e => {
    let currentClass = e.target.className;
    console.log("handle work click: ", currentClass);
    switch (currentClass) {
      case "momTracker": {
        let win = window.open(momTrackerUrl, "_blank");
        win.focus();
        break;
      }
      case "tempeHappenings": {
        let win = window.open(tempeHappeningsUrl, "_blank");
        win.focus();
        break;
      }
      case "npmLib": {
        let win = window.open(npmUrl, "_blank");
        win.focus();
        break;
      }
      case "cheatsheet": {
        let win = window.open(cheatSheetUrl, "_blank");
        win.focus();
        break;
      }
      case "netflixRoulette": {
        let win = window.open(netflixRouletteUrl, "_blank");
        win.focus();
        break;
      }
      case "sassy": {
        let win = window.open(sassyUrl, "_blank");
        win.focus();
        break;
      }
      default:
        break;
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="clearfix">
      <h2 id="titleWork">My Recent Work</h2>
      <div style={{ background: "#f08b65" }} class="centered line" />
      <div class="img-container">
        <img
          className="momTracker"
          id="workImage"
          src={momTrackerImage}
          alt="react"
          onClick={handleWorkClick}
        />
        {/* <div className="ribbon">
          <span>Android</span>
        </div> */}

        <div className="details" onClick={handleWorkClick}>
          <span id="titleProject" className="momTracker">
            Mom Tracker
          </span>
          <span id="infoProject" className="momTracker">
            Expense tracking mobile application which generates streaks for
            users to keep track of when users do not spend above their daily
            allowance.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div class="img-container">
        <img
          className="tempeHappenings"
          id="workImage"
          src={tempeHappeningsImage}
          alt="java"
          href={tempeHappeningsUrl}
          onClick={handleWorkClick}
        />

        {/* <div className="ribbon">
          <span>GraphQL</span>
        </div> */}

        <div class="details" onClick={handleWorkClick}>
          <span id="titleProject" className="tempeHappenings">
            Tempe Happenings
          </span>
          <span id="infoProject" className="tempeHappenings">
            Event management application for Tempe events built using ReactJs
            and GraphQL with MongoDB.
          </span>
        </div>
      </div>
      <div className="img-container">
        <img
          id="workImage"
          className="netflixRoulette"
          src={netflixRouletteImage}
          alt="npm"
          href={netflixRouletteUrl}
          onClick={handleWorkClick}
        />
        {/* <div className="ribbon">
          <span>Node</span>
        </div> */}

        <div class="details" onClick={handleWorkClick}>
          <span id="titleProject" className="netflixRoulette">
            Netflix Roulette
          </span>
          <span id="infoProject" className="netflixRoulette">
            Amazon Alexa Skill which helps users fetch a random Netflix
            tv-series or movie to watch based on their preferences.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div className="img-container">
        <img
          id="workImage"
          onClick={handleWorkClick}
          className="NpmLib"
          src={NpmLogo}
          alt="graphql"
        />
        {/* <div className="ribbon">
          <span>Javascript</span>
        </div> */}

        <div class="details" onClick={handleWorkClick}>
          <span id="titleProject" className="npmLib">
            NPM Libraries
          </span>
          <span id="infoProject" className="NpmLib">
            Javascript libraries created to help the Javascript community.
            Combined, the packages have more than 1000 downloads.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div className="img-container">
        <img
          id="workImage"
          onClick={handleWorkClick}
          className="sassy"
          src={Sassy}
          href={sassyUrl}
          alt="python"
        />
        {/* <div className="ribbon">
          <span>VSCode</span>
        </div> */}

        <div class="details" onClick={handleWorkClick}>
          <span id="titleProject" className="sassy">
            Sassy
          </span>
          <span id="infoProject" className="sassy">
            A minimalistic dark theme created for vs-code.
          </span>
        </div>
        {/* <div class="middle">
          <img src={GitHubIcon} />
          <div class="text">Go To Github Repo</div>
        </div> */}
      </div>
      <div className="img-container">
        <img
          id="workImage"
          className="cheatsheet"
          onClick={handleWorkClick}
          src={cheatSheetImage}
          alt="js"
        />
        {/* <div className="ribbon">
          <span>Javascript</span>
        </div> */}

        <div class="details" onClick={handleWorkClick}>
          <span id="titleProject" className="cheatsheet">
            Ada's CheatSheet
          </span>
          <span id="infoProject" className="cheatsheet" className="workImage">
            Full-text search cheatsheet built for programming languages.
          </span>
        </div>
      </div>
      <div id="arrowDown">
        <Down click={propDown} />
      </div>
    </div>
  );
};
export default MyWork;
