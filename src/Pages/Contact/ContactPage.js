import React from "react";
import Aboutme from "../../Components/Aboutme/Aboutme";
import Titles from "../../Components/Titles/Titles";
import Contact from "../../Components/Contact/Contact";
import SocialMedia from "../../Components/Socialmedia/Socialmedia";
import Footer from "../../Components/Footer/Footer";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Titles title={"About me"} />
      <Aboutme />
      <Titles title={"Reach out to me"} />
      <Contact />
      <Titles title={"Social Media"} />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default ContactPage;
