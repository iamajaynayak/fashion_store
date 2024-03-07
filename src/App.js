import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Pages/Homepage/homepage.css";
import Shop from "./Pages/Shop/Shop.js";
import SigninAndSignup from "./Pages/SigninAndSignup/SigninAndSignup.js";
import HomePage from "./Pages/Homepage/Homepage";
import Header from "./Components/Header/Header.js";
import { auth, createUserProfileDocument } from "./firebase/firebase.js";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction.js";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import checkOutPage from "./Pages/CheckOut/CheckOut.js";
import ContactPage from "./Pages/Contact/ContactPage";

// const errorPage = () => (
//   <h1 style={{ textAlign: `center` }}>You shouldn't be here</h1>
// );

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/checkout" component={checkOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
