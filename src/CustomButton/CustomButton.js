import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./CustomButton.css";
// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: "linear-gradient(45deg,  #f46b45 30%, #eea849 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
};

class CustomButton extends React.Component {
  handleClick = () => {
    console.log("handle click in child");
    this.props.handleclick(true);
  };
  render() {
    const { title, classes, children, className, ...other } = this.props;
    return (
      <Button
        onClick={this.handleClick}
        className={clsx(classes.root, className)}
        {...other}
      >
        {title}
      </Button>
    );
  }
}
CustomButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(CustomButton);
