import React from "react";
import FormInput from "../Form-input/FormInput.js";
import CustomButton from "../CustomButton/CustomButton.js";
import { auth, signInWithGoogle } from "../../firebase/firebase.js";
import "./signin.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <div className="mobile-title">
          <h2 className="signin-title">I already have an account</h2>
          <span className="signin-subtitle">
            Signin with your Email and Password
          </span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />
          <div className="button">
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignedIn>
              Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
