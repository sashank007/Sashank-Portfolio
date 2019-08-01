import React from "react";
import { Radar } from "react-chartjs-2";

export default function RadarChart() {
  const data = {
    labels: [
      "Communicating",
      "Teamwork",
      "Problem Solving",
      "Creativity",
      "Fast Learning",
      "Resiliency",
      "Discipline"
    ],
    datasets: [
      {
        label: "My Behavior",
        backgroundColor: "rgb(254, 233, 178,0.2)",
        borderColor: "rgb(254, 233, 178,1)",
        pointBackgroundColor: "rgb(254, 233, 178,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(254, 233, 178,1)",
        data: [95, 65, 97, 75, 85, 72, 55]
      }
      // {
      //   label: "My Second dataset",
      //   backgroundColor: "rgba(255,99,132,0.2)",
      //   borderColor: "rgba(255,99,132,1)",
      //   pointBackgroundColor: "rgba(255,99,132,1)",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgba(255,99,132,1)",
      //   data: [28, 48, 40, 19, 96, 27, 100]
      // }
    ]
  };
  var options = {
    // All of my other bar chart option here
    scale: {
      // beginAtZero: true,
      ticks: {
        // beginAtZero: true
      }
    }
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
}
