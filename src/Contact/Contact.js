import React, { useRef } from "react";
import { Email } from "@coolgk/email";
import CustomButton from "../CustomButton/CustomButton";
import nodemailer from "nodemailer";
import "./Contact.css";
const Contact = () => {
  const emailRef = useRef();
  const bodyRef = useRef();
  const subjectRef = useRef();
  const sendEmail = () => {
    let from = emailRef.current.value;
    let body = bodyRef.current.value;
    let subject = subjectRef.current.value;
    window.open(
      `mailto:sashank.tungaturthi@gmail.com?subject=${subject}&body=${body}&from=${from}`
    );
  };
  const handleClick = () => {
    var link = `mailto:sashank.tungaturthi@gmail.com?`;
    // window.location.href = link;
    console.log("clicking in contact");
    sendEmail();
  };
  return (
    <div>
      <h2 className="title">Contact Me</h2>
      <div style={{ background: "#f08b65" }} class="centered line" />
      <div className="textContent-contact">
        <p id="contact-para">
          I am currently looking for fulltime opportunities in the May of 2020.
          Please feel free to contact me, even if you just want to say hi! I
          make it a point to reply back to all emails!
        </p>
      </div>
      <div className="form-container">
        <form>
          <input
            placeholder="email..."
            ref={emailRef}
            type="text"
            id="email-contact"
            name="email..."
          />
          <br />
          <input
            placeholder="subject..."
            ref={subjectRef}
            type="text"
            id="subject-contact"
            name="subject"
          />
          <br />

          <textarea
            id="ta-body"
            ref={bodyRef}
            placeholder="body..."
            name="body"
            rows="10"
            cols="40"
          />
          <br />
        </form>
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
