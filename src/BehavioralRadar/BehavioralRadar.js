import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import React from "react";

const data = [
  {
    data: {
      //   positivity: 0.9,
      communication: 0.7,
      learning: 0.8,
      code: 0.67,
      problemsolving: 0.9,
      teamplayer: 0.75
    },
    meta: { color: "orange" }
  }
  //   {
  //     data: {
  //       positivity: 0.6,
  //       communication: 0.85,
  //       learning: 0.5,
  //       code: 0.6,
  //       problemsolving: 0.7,
  //       teamplayer: 0.8
  //     },
  //     meta: { color: "red" }
  //   }
];

const captions = {
  // columns
  //   positivity: "Positivity",
  communication: "Communication Skills",
  learning: "Quick Learning",
  code: "Code Robustness",
  problemsolving: "Problem Solving",
  teamplayer: "Team Player"
};

const BehavioralRadar = () => {
  return <RadarChart captions={captions} data={data} size={450} />;
};

export default BehavioralRadar;
