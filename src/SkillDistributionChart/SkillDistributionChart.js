import React from "react";

import {
  RadialGauge,
  RadialGaugeSeries,
  PieChart,
  PieArcSeries,
  DonutChart
} from "reaviz";
import chroma from "chroma-js";

const SkillDistributionChart = () => {
  const colorScheme = ["#62d9fa", "red", "#0861a5", "#e76f00", "#7fbd42"];

  return (
    <div
      style={{
        position: "absolute",
        top: "125px",
        left: "-171px"
      }}
    >
      <div style={{ margin: "auto", maxHeight: "100%" }}>
        <PieChart
          data={[
            { key: "React", data: 90 },
            { key: "Angular", data: 80 },
            { key: "Python", data: 85 },
            // { key: "CSS", data: 80 },
            { key: "Java", data: 75 },
            { key: "Node", data: 85 }
          ]}
          height={300}
          width={800}
          minValue={0}
          maxValue={100}
          // colorScheme={chroma.scale(["ACB7C9", "ffffff"])}
          series={<PieArcSeries colorScheme={colorScheme} />}
        />
      </div>
    </div>
  );
};

export default SkillDistributionChart;
