import React from "react";
import "./socialmedia.css";

const SocialMediaHandle = ({ profile, name, url }) => {
  return (
    <div className="social-media">
      <a className="social-link" href={url} target="_blank">
        <img src={profile} className="social-img" alt="social-media-logo" />
        <span className="social-name">{name}</span>
      </a>
    </div>
  );
};

export default SocialMediaHandle;
