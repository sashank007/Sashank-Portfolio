import React from "react";
import Home from "../Home/Home";
import IntroPage from "../IntroPage/IntroPage";
import SkillSet from "../SkillSet/SkillSet";
import ReactFullpage from "@fullpage/react-fullpage";
import MyWork from "../MyWork/MyWork";
import RadarChart from "../RadarChart/RadarChart";
import BehavioralRadar from "../BehavioralRadar/BehavioralRadar";
import WordCloud from "../Common/WordCloud";
import Contact from "../Contact/Contact";
import Charts from "../Charts/Charts";
import ChartsTab from "../Tab/Tab";
import Portfolio from "../Portfolio/Portfolio";
import Portfolio2 from "../Portfolio/Portfolio2";
const Scrolling = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <IntroPage handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <SkillSet handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            {/* <MyWork handleClick={() => fullpageApi.moveSectionDown()} /> */}
            <Portfolio handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <ChartsTab handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <Contact handleClick={() => fullpageApi.moveSectionDown()} />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Scrolling;
