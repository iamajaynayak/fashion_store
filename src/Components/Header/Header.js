import React from "react";
import { Link } from "react-router-dom";
import newlogo from "../../assets/newlogo.png";
import "./header.css";
import { auth } from "../../firebase/firebase.js";
import CartIcon from "../cart-icon/cartIconComponent.js";
import CartDropdown from "../Cart-dropdown/CartDropdown.js";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { selectCartHidden } from "../../redux/cart/cart.selector.js";

import { connect } from "react-redux";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="header-logo-mobile">
      <Link to="/">
        <img
          src={newlogo}
          alt="logo"
          style={{
            height: `12vh`,
          }}
        />
      </Link>
    </div>
    <div className="header-options">
      <Link to="/shop" className="opt">
        Shop
      </Link>
      <Link to="/contact" className="opt">
        Contact
      </Link>
      {currentUser ? (
        <div className="opt" onClick={() => auth.signOut()}>
          {" "}
          Sign out
        </div>
      ) : (
        <Link className="opt" to="/signin">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
