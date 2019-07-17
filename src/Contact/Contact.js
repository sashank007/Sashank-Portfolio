import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const Contact = () => {
  const handleClick = () => {
    var link = "mailto:sashank.tungaturthi@gmail.com";
    window.location.href = link;
  };
  return (
    <div>
      <h2 class="title">Contact Me</h2>
      <div style={{ background: "#f08b65" }} class="centered line" />
      <div className="textContent">
        <p id="para">
          I am currently looking for internship opportunities. Please feel free
          to contact me, even if you just want to say hi! I make it a point to
          reply back to all emails!
        </p>
      </div>
      <CustomButton
        className="customButton"
        title="Email Me!"
        handleclick={handleClick}
      />
    </div>
  );
};
export default Contact;
