import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import pattern from "patternomaly";
export default function DonutSkillSet() {
  const data = {
    labels: ["Javascript", "Python", "Java", "CSS"],
    datasets: [
      {
        data: [300, 240, 220, 230],
        backgroundColor: ["#cf455c", "#ffdd67", "#ff8a5c", "#444444"],
        // backgroundColor: [
        //   pattern.draw("square", "#cf455c"),
        //   pattern.draw("circle", "#ffdd67"),
        //   pattern.draw("diamond", "#ff8a5c"),
        //   pattern.draw("triangle", "#444444")
        // ],
        hoverBackgroundColor: ["#cf455c", "#ffdd67", "#ff8a5c", "#444444"]
      }
    ]
  };

  return (
    <div>
      <Doughnut style={{ padding: "15px" }} data={data} />
    </div>
  );
}
