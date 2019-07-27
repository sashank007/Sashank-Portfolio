import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DonutSkillSet() {
  const data = {
    labels: ["Javascript", "Python", "Java", "CSS"],
    datasets: [
      {
        data: [300, 240, 220, 180],
        backgroundColor: ["#cf455c", "#ffdd67", "#ff8a5c", "#444444"],
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
