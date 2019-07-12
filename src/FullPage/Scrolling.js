import React from "react";
import Home from "../Home/Home";
import IntroPage from "../IntroPage/IntroPage";
import SkillSet from "../SkillSet/SkillSet";
import ReactFullpage from "@fullpage/react-fullpage";
import MyWork from "../MyWork/MyWork";

const Scrolling = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section ">
            <Home handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <IntroPage handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <SkillSet handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <MyWork handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Scrolling;
