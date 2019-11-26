import React from "react";

import netflixRouletteImage from "../assets/images/nr_1.PNG";
import tempeHappeningsImage from "../assets/images/th_search.PNG";
import NpmLogo from "../assets/images/npmLogo.png";
import Sassy from "../assets/images/sassy_page2.PNG";
import cheatSheetImage from "../assets/images/CheatSheet.PNG";
import momTrackerImage from "../assets/images/momtracker.png";
import SpotiqImage from "../assets/images/spotiq2.png";
import WeaveImage from "../assets/images/weave_2.png";
import "./Portfolio.scss";

const momTrackerUrl = "https://github.com/sashank007/Mom-Tracker";
const tempeHappeningsUrl =
  "https://github.com/sashank007/graphql-react-event-manager";
const netflixRouletteUrl = "https://github.com/sashank007/NetflixRoulette";
const npmUrl = "https://www.npmjs.com/settings/sashank007/packages";
const cheatSheetUrl = "http://ada-cheatsheet.netlify.com";
const weaveUrl = "https://github.com/sashank007/WEave";
const sassyUrl =
  "https://marketplace.visualstudio.com/items?itemName=SashankTungaturthi.Sassy&ssr=false#overview";
const spotiqUrlGithub = "https://github.com/sashank007/project-spotify";
const spotiqUrl = "https://spotiq.netlify.com/";

const handleWorkClick = e => {
  let currentClass = e.target.id;
  console.log("handle work click: ", currentClass);
  switch (currentClass) {
    case "spotiq": {
      let win = window.open(spotiqUrl, "_blank");
      window.open(spotiqUrlGithub);
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
    case "weave": {
      let win = window.open(weaveUrl, "_blank");
      win.focus();
      break;
    }
    case "movieRoulette": {
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

export default class Portfolio extends React.Component {
  render() {
    return (
      <section class="portfolio container-fluid">
        {/* <h2 id="portfolio">Portfolio</h2> */}
        <div class="container contenedor-portfolio d-md-flex flex-md-wrap">
          <article id="spotiq" onClick={handleWorkClick}>
            <div class="jod-desc" id="spotiq">
              <h3>SpotiQ</h3>
              <p>
                React app built to create a collaborative music queue where
                users can create playlists and compete to get their songs to be
                played.
              </p>
            </div>
            <img src={SpotiqImage} class="img-fluid" />
          </article>

          <article id="movieRoulette" onClick={handleWorkClick}>
            <div class="jod-desc" id="movieRoulette">
              <h3 id="movieRoulette">Movie Roulette</h3>
              <p id="movieRoulette">
                Amazon Alexa Skill which helps users fetch a random Netflix
                tv-series or movie to watch based on their preferences.
              </p>
            </div>
            <img
              src={netflixRouletteImage}
              class="img-fluid"
              id="movieRoulette"
            />
          </article>
          <article id="tempeHappenings" onClick={handleWorkClick}>
            <div class="jod-desc" id="tempeHappenings">
              <h3 id="tempeHappenings">Tempe Happenings</h3>
              <p id="tempeHappenings">
                Event management application for Tempe events built using
                ReactJs and GraphQL with MongoDB.
              </p>
            </div>
            <img
              src={tempeHappeningsImage}
              class="img-fluid"
              id="tempeHappenings"
            />
          </article>
          <article id="sassy" onClick={handleWorkClick}>
            <div class="jod-desc" id="sassy">
              <h3 id="sassy">Sassy</h3>
              <p id="sassy"> A minimalistic dark theme created for vs-code.</p>
            </div>
            <img src={Sassy} class="img-fluid" />
          </article>
          <article id="weave" onClick={handleWorkClick}>
            <div class="jod-desc" id="weave" onClick={handleWorkClick}>
              <h3 id="weave">WEave</h3>
              <p id="weave">
                WEave is a desktop/mobile application that helps law enforcement
                track down perpetrators with the help of the network built on
                WEave alongside realtime data analysis.
              </p>
            </div>
            <img src={WeaveImage} class="img-fluid" id="weave" />
          </article>
          <article id="npmLib" onClick={handleWorkClick}>
            <div class="jod-desc" id="npmLib" onClick={handleWorkClick}>
              <h3 id="npmLib">NPM Libraries</h3>
              <p id="npmLib">
                Javascript libraries created to help the Javascript community.
                Combined, the packages have more than 1000 downloads.
              </p>
            </div>
            <img src={NpmLogo} class="img-fluid" id="npmLib" />
          </article>
        </div>
      </section>
    );
  }
}
