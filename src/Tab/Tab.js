/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { purple } from "@material-ui/core/colors";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Down from "../Common/Down";
import RadarChart from "../RadarChart/RadarChart";
import "./Tab.css";
import DonutSkillSet from "../DonutSkillSet/DonutSkillSet";
import PolarAreaSkillChart from "../PolarAreaSkillChart/PolarAreaSkillChart";
import { Radar, HorizontalBar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import SkillsHorizontalChart from "../SkillsHorizontalChart/SkillsHorizontalChart";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const IOSSwitch = withStyles(theme => ({
  MuiTypography: {
    fontWeight: "200",
    body1: {
      fontWeight: "200"
    }
  },
  switchBase: {
    // padding: 1,
    "&$checked": {
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "rgba(255, 174, 87, 1)",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "rgba(255, 174, 87, 1)",
      border: "6px solid #fff"
    }
  },
  // thumb: {
  //   width: 12,
  //   height: 12
  // },
  track: {
    // borderRadius: 13 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const ChartsTab = props => {
  const propDown = () => {
    props.handleClick();
  };

  const matches = useMediaQuery("(min-width:600px)");

  const [switchLabel, setLabelSwitch] = useState("I love pies");
  const [index, onChange] = useState(0);
  const [test, setTest] = useState({ x: "a", a: "t", y: "b" });
  const [checkedButton, setCheckedButton] = useState(false);

  const handleCheck = () => {
    setCheckedButton(!checkedButton);
    if (!checkedButton) {
      setLabelSwitch("I love bars");
    } else {
      setLabelSwitch("I love pies");
    }
  };

  return (
    <div class="div_root">
      {!matches ? (
        <div>
          <h3 id="headerCharts" style={{ margin: "2%" }}>
            Here are a few charts, cause who doesn't love charts?!
          </h3>
          <div style={{ background: "#f08b65" }} class="centered line" />
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={200}
            totalSlides={3}
            style={{ marginTop: "5%" }}
            class="carousel_chart"
          >
            <Slider>
              <Slide index={0}>
                <div>
                  <DonutSkillSet />
                </div>
              </Slide>
              <Slide index={1}>
                <div>
                  <SkillsHorizontalChart />
                </div>
              </Slide>
              {/* <Slide index={2}>
                <div>
                  <PolarAreaSkillChart />
                </div>
              </Slide> */}
              <Slide index={2}>
                <div>
                  <RadarChart />
                </div>
              </Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div>
      ) : (
        <div className="Tab">
          <h3 id="headerCharts">
            Here are a few charts, cause who doesn't love charts?!
          </h3>

          <div>
            <AppBar
              style={{
                // background:
                //   "linear-gradient(to right, rgb(44, 62, 80), rgb(253, 116, 108))",
                background:
                  // "linear-gradient(to right, rgb(255, 179, 71), rgb(255, 204, 51))",
                  "#ffae57",
                color: "white",
                borderRadius: "5px"
              }}
              position={"static"}
            >
              <Tabs value={index} onChange={(e, val) => onChange(val)}>
                <Tab label="Programming Languages" disableRipple />
                <Tab label="Engineering Focus Areas" disableRipple />
                <Tab label="Behavior" disableRipple />
              </Tabs>
            </AppBar>
            <div className="Tabs-TabContainer">
              {index === 0 && (
                <Paper>
                  <TabContainer>
                    {checkedButton ? (
                      <DonutSkillSet />
                    ) : (
                      <SkillsHorizontalChart />
                    )}
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={checkedButton}
                          onChange={handleCheck}
                          value="checkedB"
                        />
                      }
                      style={{ fontWeight: "200" }}
                      label={switchLabel}
                    />
                  </TabContainer>
                </Paper>
              )}

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
        </div>
      )}
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
