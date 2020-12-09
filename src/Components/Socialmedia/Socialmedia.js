import React from "react";
import "./socialmedia.css";
import SocialData from "./Data.js";
import SocialMediaHandle from "./SocialMediaHandle.js";

const socialBox = SocialData.map((soc, i) => (
  <SocialMediaHandle
    key={SocialData[i].id}
    profile={SocialData[i].profile}
    name={SocialData[i].name}
    url={SocialData[i].url}
  />
));

const SocialMedia = () => {
  return <div className="social-media-container">{socialBox}</div>;
};

export default SocialMedia;
