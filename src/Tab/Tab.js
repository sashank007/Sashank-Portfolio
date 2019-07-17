/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import "./Tab.css";

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

const ChartsTab = () => {
  const [index, onChange] = useState(0);
  return (
    <div className="Tab">
      <Tabs centered value={index} onChange={(e, val) => onChange(val)}>
        <Tab label="Posts" disableRipple />

        <Tab label="IGTV" disableRipple />
        <Tab label="Saved" disableRipple />
        <Tab label="Tagged" disableRipple />
      </Tabs>
      {index === 0 && <TabContainer>Page One</TabContainer>}
      {index === 1 && <TabContainer>Page Two</TabContainer>}
      {index === 2 && <TabContainer>Page Three</TabContainer>}
    </div>
  );
};

ChartsTab.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      borderTop: "1px solid #efefef",
      overflow: "visible"
    },
    fixed: {
      overflowX: "visible"
    },
    indicator: {
      height: 1,
      transform: "translateY(-53px)",
      backgroundColor: "#262626"
    }
  },
  MuiTab: {
    root: {
      lineHeight: "inherit",
      minWidth: 0,
      "&:not(:last-child)": {
        marginRight: 24,
        [muiBaseTheme.breakpoints.up("sm")]: {
          marginRight: 60
        }
      },
      [muiBaseTheme.breakpoints.up("md")]: {
        minWidth: 0
      }
    },
    labelIcon: {
      minHeight: 53,
      paddingTop: 0
    },
    textColorInherit: {
      opacity: 0.4
    },
    wrapper: {
      flexDirection: "row",
      "& svg, .material-icons": {
        fontSize: 16,
        marginRight: 4
      }
    },
    labelContainer: {
      padding: 0,
      [muiBaseTheme.breakpoints.up("md")]: {
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    label: {
      letterSpacing: "1px",
      textTransform: "uppercase"
    }
  }
});
ChartsTab.metadata = {
  name: "Instagram Tabs",
  description: "implement Instagram theme"
};

export default ChartsTab;
