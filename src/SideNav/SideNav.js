import React from "react";
import { SocialIcon } from "react-social-icons";
import "./SideNav.css";
import LinkedinIcon from "../assets/images/icons8-linkedin-48.png";
import TwitterIcon from "../assets/images/icons8-twitter-48.png";
import GithubIcon from "../assets/images/github-icon.png";

export default function SideNav() {
  return (
    <div class="sidenav">
      <span>
        <a href="https://www.linkedin.com/in/sashank-tungaturthi-206a83147/">
          <img style={{ height: 25, width: 25 }} src={LinkedinIcon} />
        </a>
      </span>
      <span>
        <a href="https://twitter.com/sas_o07">
          <img style={{ height: 25, width: 25 }} src={TwitterIcon} />
        </a>
      </span>
      <span id="socialIcon-last">
        <a href="https://github.com/sashank007">
          <img style={{ height: 24, width: 24 }} src={GithubIcon} />
        </a>
        {/* <SocialIcon
          style={{ height: 25, width: 25 }}
          url="https://twitter.com/sas_o07"
        /> */}
        {/* <hr /> */}
      </span>
    </div>
  );
}
