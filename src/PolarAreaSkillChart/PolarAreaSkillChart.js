import React from "react";
import { Polar } from "react-chartjs-2";
import pattern from "patternomaly";
export default function PolarAreaSkillChart() {
  const data = {
    datasets: [
      {
        data: [7, 16, 9, 13, 12, 8, 10],
        backgroundColor: [
          // pattern.draw("diamond", "#e6f8f9"),
          // pattern.draw("disc", "#b1e8ed"),

          // pattern.draw("box", "#edb5f5"),
          // pattern.draw("dot", "#e86ed0"),
          // pattern.draw("dot-dash", "#a4d7e1")
          "rgb(126, 207, 192,0.5)",
          "rgb(242, 227, 201,0.5)",
          "rgb(236, 143, 106,0.5)",
          "rgb(199, 240, 219,0.5)",
          "rgb(239, 75, 75,0.5)",
          "rgb(249, 224, 144,0.5)",
          "rgb(255, 147, 92,0.5)"
        ],
        label: "My dataset" // for legend
      }
    ],
    labels: [
      "Netowrking",
      "Data Structures and algorithms",
      "Embedded Systems",
      "Object Oriented Programming",
      "Functional Programming",
      "Code Readability",
      "Optimization"
    ]
  };

  return (
    <div>
      <Polar data={data} />
    </div>
  );
}
