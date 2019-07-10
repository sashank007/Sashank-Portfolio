// import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// // import "./CustomButton.css";

// const styles = {
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       borderRadius: 3,
//       border: 0,
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     },
//   };

// class CustomButton extends Component {
//   render() {
//     return (
//       <div>
//         <Button
//           variant="outlined"
//           size="large"
//           color="primary"
//           class="CustomButton"
//         >
//           Let's Go.
//         </Button>
//       </div>
//     );
//   }
// }

// export default CustomButton;
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: "linear-gradient(45deg,  #f46b45 30%, #eea849 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px"
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

class CustomButton extends React.Component {
  handleClick = () => {
    console.log("handle click in child");
    this.props.handleclick(true);
  };
  render() {
    const { classes, children, className, ...other } = this.props;
    return (
      <Button
        onClick={this.handleClick}
        className={clsx(classes.root, className)}
        {...other}
      >
        {"Let's Go!"}
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
