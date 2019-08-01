import React from "react";
import { HorizontalBar } from "react-chartjs-2";

export default function SkillsHorizontalChart() {
  const data = {
    labels: ["Javascript", "C++", "Java", "Python", "CSS", "Rust"],
    datasets: [
      {
        label: "My Language Rating",
        data: [90, 85, 85, 75, 65, 60],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        backgroundColor: [
          "rgb(207, 69, 92,0.75)",
          "rgb(255, 221, 103,0.75)",
          "rgb(255, 138, 92,0.75)",
          "rgb(68, 68, 68,0.75)",
          "rgb(186, 225, 255,0.75)",
          "rgb(255, 179, 186,0.75)"
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
  //   const data = {
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  //     datasets: [
  //       {
  //         label: "My First dataset",
  //         backgroundColor: "rgba(255,99,132,0.2)",
  //         borderColor: "rgba(255,99,132,1)",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //         hoverBorderColor: "rgba(255,99,132,1)",
  //         data: [65, 59, 80, 81, 56, 55, 40]
  //       }
  //     ]
  //   };

  var options = {
    // All of my other bar chart option here
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
          barThickness: 2,
          maxBarThickness: 4,
          minBarLength: 2,
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <div>
      <HorizontalBar
        style={{ padding: "15px" }}
        options={options}
        data={data}
      />
    </div>
  );
}
