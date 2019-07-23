/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

import Down from "../Common/Down";
import RadarChart from "../RadarChart/RadarChart";
// import SkillChart from "../SkillChart/SkillChart";
import SkillDistributionChart from "../SkillDistributionChart/SkillDistributionChart";
import "./Tab.css";
import DonutSkillSet from "../DonutSkillSet/DonutSkillSet";
import BubbleSkillChart from "../BubbleSkillChart/BubbleSkillChart";
import PolarAreaSkillChart from "../PolarAreaSkillChart/PolarAreaSkillChart";
import { Radar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const ChartsTab = props => {
  const propDown = () => {
    props.handleClick();
  };

  const [index, onChange] = useState(0);
  const [test, setTest] = useState({ x: "a", a: "t", y: "b" });

  console.log("old state : ", test);

  const testHandle = () => {
    setTest({ ...test, a: "c" });
    console.log("new state:", test);
  };

  return (
    <div className="Tab">
      <h3 id="headerCharts">
        Here are a few charts, cause who doesn't love charts?!
      </h3>
      {/* <Tabs centered value={index} onChange={(e, val) => onChange(val)}>
        <Tab label="Behavior" disableRipple />

        <Tab label="Skill Distribution" disableRipple />
        {/* <Tab label="" disableRipple /> */}
      {/* <Tab label="Tagged" disableRipple /> */}
      {/* </Tabs> */}
      <AppBar
        style={{
          // background:
          //   "linear-gradient(to right, rgb(44, 62, 80), rgb(253, 116, 108))",
          background:
            "linear-gradient(to right, rgb(255, 179, 71), rgb(255, 204, 51))",
          color: "white",
          borderRadius: "5px"
        }}
        onClick={testHandle}
        position={"static"}
      >
        <Tabs value={index} onChange={(e, val) => onChange(val)}>
          <Tab label="Skills Donut" disableRipple />
          <Tab label="Skills Polar" disableRipple />
          <Tab label="Behavior" disableRipple />
          {/* <Tab label="Usage" disableRipple /> */}
        </Tabs>
      </AppBar>
      <div className="Tabs-TabContainer">
        {index === 0 && (
          <Paper>
            <TabContainer>
              {/* <RadarChart /> */}
              <DonutSkillSet />
            </TabContainer>
          </Paper>
        )}
        {/* {index === 1 && (
          <TabContainer>
            <SkillDistributionChart />
          </TabContainer>
        )} */}
        {index === 1 && (
          <Paper>
            <TabContainer>
              <PolarAreaSkillChart />
            </TabContainer>
          </Paper>
        )}
        {index === 2 && (
          <Paper>
            <TabContainer>
              <RadarChart />
            </TabContainer>
          </Paper>
        )}
      </div>
      <div id="arrowDown">
        <Down click={propDown} />
      </div>
    </div>
  );
};

// ChartsTab.getTheme = muiBaseTheme => ({
//   MuiTabs: {
//     root: {
//       borderTop: "1px solid #efefef",
//       overflow: "visible"
//     },
//     fixed: {
//       overflowX: "visible"
//     },
//     indicator: {
//       height: 1,
//       transform: "translateY(-53px)",
//       backgroundColor: "#262626"
//     }
//   },
//   MuiTab: {
//     root: {
//       lineHeight: "inherit",
//       minWidth: 0,
//       "&:not(:last-child)": {
//         marginRight: 24,
//         [muiBaseTheme.breakpoints.up("sm")]: {
//           marginRight: 60
//         }
//       },
//       [muiBaseTheme.breakpoints.up("md")]: {
//         minWidth: 0
//       }
//     },
//     labelIcon: {
//       minHeight: 53,
//       paddingTop: 0
//     },
//     textColorInherit: {
//       opacity: 0.4
//     },
//     wrapper: {
//       flexDirection: "row",
//       "& svg, .material-icons": {
//         fontSize: 16,
//         marginRight: 4
//       }
//     },
//     labelContainer: {
//       padding: 0,
//       [muiBaseTheme.breakpoints.up("md")]: {
//         padding: 0,
//         paddingLeft: 0,
//         paddingRight: 0
//       }
//     },
//     label: {
//       letterSpacing: "1px",
//       textTransform: "uppercase"
//     }
//   }
// });
// ChartsTab.metadata = {
//   name: "Instagram Tabs",
//   description: "implement Instagram theme"
// };

ChartsTab.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      marginLeft: muiBaseTheme.spacing.unit,
      background: "#ff5000c4"
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: "#ffffff"
    }
  },

  MuiTab: {
    root: {
      textTransform: "initial",
      margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
      minWidth: 0,
      background: "##ff5000c4",
      [muiBaseTheme.breakpoints.up("md")]: {
        minWidth: 0
      }
    },
    label: {
      fontWeight: "normal",
      letterSpacing: 0.5
    },
    labelContainer: {
      padding: 0,
      [muiBaseTheme.breakpoints.up("md")]: {
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    }
  }
});
ChartsTab.metadata = {
  name: "Charts Tabs",
  description:
    "implement charts tab with firebase theme (primary-color: #039be5)"
};

export default ChartsTab;
