import React from "react";

import netflixRouletteImage from "../assets/images/nr_1.PNG";
import tempeHappeningsImage from "../assets/images/th_search.PNG";
import NpmLogo from "../assets/images/npmLogo.png";
import Sassy from "../assets/images/sassy_page2.PNG";
import cheatSheetImage from "../assets/images/CheatSheet.PNG";
import momTrackerImage from "../assets/images/momtracker.png";

import "./Portfolio.scss";

const momTrackerUrl = "https://github.com/sashank007/Mom-Tracker";
const tempeHappeningsUrl =
  "https://github.com/sashank007/graphql-react-event-manager";
const netflixRouletteUrl = "https://github.com/sashank007/NetflixRoulette";
const npmUrl = "https://www.npmjs.com/settings/sashank007/packages";
const cheatSheetUrl = "http://ada-cheatsheet.netlify.com";
const sassyUrl =
  "https://marketplace.visualstudio.com/items?itemName=SashankTungaturthi.Sassy&ssr=false#overview";

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

export default class Portfolio2 extends React.Component {
  render() {
    return (
      <section class="portfolio container-fluid" onClick={handleWorkClick}>
        {/* <h2 id="portfolio">Portfolio</h2> */}
        <div class="container contenedor-portfolio d-md-flex flex-md-wrap">
          <article>
            <div class="jod-desc">
              <h3>Movie Roulette</h3>
              <p>
                Amazon Alexa Skill which helps users fetch a random Netflix
                tv-series or movie to watch based on their preferences.
              </p>
            </div>
            <img src={netflixRouletteImage} class="img-fluid" />
          </article>
          <article onClick={handleWorkClick}>
            <div class="jod-desc">
              <h3>Tempe Happenings</h3>
              <p>
                Event management application for Tempe events built using
                ReactJs and GraphQL with MongoDB.
              </p>
            </div>
            <img src={tempeHappeningsImage} class="img-fluid" />
          </article>
          <article onClick={handleWorkClick}>
            <div class="jod-desc">
              <h3>Sassy</h3>
              <p> A minimalistic dark theme created for vs-code.</p>
            </div>
            <img src={Sassy} class="img-fluid" />
          </article>
          <article>
            <div class="jod-desc">
              <h3>NPM Libraries</h3>
              <p>
                Javascript libraries created to help the Javascript community.
                Combined, the packages have more than 1000 downloads.
              </p>
            </div>
            <img src={NpmLogo} class="img-fluid" />
          </article>
        </div>
      </section>
    );
  }
}
