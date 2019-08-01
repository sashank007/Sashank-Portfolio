import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DonutSkillSet() {
  const data = {
    labels: ["Javascript", "Python", "Java", "CSS", "C++", "Rust"],
    datasets: [
      {
        label: "My Language Rating",
        data: [90, 75, 85, 65, 85, 60],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        backgroundColor: [
          "rgb(207, 69, 92,0.7)",
          "rgb(255, 221, 103,0.7)",
          "rgb(255, 138, 92,0.7)",
          "rgb(68, 68, 68,0.7)",
          "rgb(186, 225, 255,0.7)",
          "rgb(255, 179, 186,0.7)"
        ],
        hoverBackgroundColor: [
          "#cf455c",
          "#ffdd67",
          "#ff8a5c",
          "#444444",
          "#bae1ff",
          "#ffb3ba"
        ]
      }
    ]
  };

  return (
    <div>
      <Doughnut style={{ padding: "15px" }} data={data} />
    </div>
  );
}
