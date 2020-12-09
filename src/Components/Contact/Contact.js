import React, { Component } from "react";
import "./contact.css";

import INFO from "../../assets/info.png";
import { firestore } from "../../firebase/firebase";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onMsgSubmit = (e) => {
    const { name, email, message } = this.state;
    e.preventDefault();
    if (name && email && message) {
      firestore
        .collection("contacts")
        .add({
          name,
          email,
          message,
        })
        .then(this.setState({ name: "", email: "", message: "" }));
    } else {
      alert("Please fill all fields");
    }
  };

  render() {
    return (
      <div className="contactme-container">
        <div className="qr-code">
          <span className="scan-this">Scan this</span>
          <img src={INFO} alt="qr-code" className="qr-img" />
        </div>
        <div className="or">or </div>
        <div className="form-container">
          <input
            type="text"
            className="enter-name"
            name="name"
            placeholder="Name"
            onChange={this.onInputChange}
            required
          />
          <input
            type="email"
            className="enter-email"
            name="email"
            placeholder="email"
            onChange={this.onInputChange}
            required
          />
          <input
            type="text"
            className="enter-msg"
            name="message"
            placeholder="message"
            onChange={this.onInputChange}
            required
          />
          <input
            type="submit"
            className="send-msg"
            value="Send"
            onClick={this.onMsgSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
