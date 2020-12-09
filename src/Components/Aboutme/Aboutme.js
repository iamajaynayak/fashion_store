import React from "react";
import "./aboutme.css";
import ME from "../../assets/Ajay.jpg";

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-image">
        <img src={ME} alt=" " className="my-actual-img" />
      </div>
      <div className="aboutme-para">
        <span className="aboutme-name">Hi, I am Ajay Nayak</span>
        <spawn className="aboutme-info">
          I am a Javascript developer. I build this project while learning
          ReactJs. Improvement is always an option and I am up for any
          suggestions.
        </spawn>
      </div>
    </div>
  );
};

export default Aboutme;
