import React from "react";
import { Polar } from "react-chartjs-2";
import pattern from "patternomaly";
export default function PolarAreaSkillChart() {
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 10, 8],
        backgroundColor: [
          pattern.draw("diamond", "#e6f8f9"),
          pattern.draw("disc", "#b1e8ed"),

          pattern.draw("box", "#edb5f5"),
          pattern.draw("dot", "#e86ed0"),
          pattern.draw("dot-dash", "#a4d7e1")
        ],
        label: "My dataset" // for legend
      }
    ],
    labels: [
      "UI Design",
      "Robust Programming",
      "Data Analysis",
      "Data Structures",
      "Visualization"
    ]
  };

  return (
    <div>
      <Polar data={data} />
    </div>
  );
}
