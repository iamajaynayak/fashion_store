import React from 'react';
import CustomButton from '../CustomButton/CustomButton.js';
import './cart-dropdown.css';
import CartItems from '../cart-items/cartItems.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector.js';
import { withRouter } from 'react-router-dom';
import { ToggleCart } from '../../redux/cart/cartAction.js'

const CartDropdown = ({cartItems , history, dispatch}) => (
	<div className = "cart-dropdown">
		<div className = "cart-items">
		{
			cartItems.length ? ( cartItems.map(cartItem => <CartItems key = {cartItem.id} item = {cartItem} />) )
			:
			(<span className="empty-message">Your cart is empty</span>)
			
		}
		<CustomButton onClick={() => {history.push('/checkout') ;
									  dispatch(ToggleCart());
									}} >GO TO CHECKOUT </CustomButton>
	</div>
	</div>

)

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));