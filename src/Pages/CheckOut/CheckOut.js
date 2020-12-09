import React from 'react';
import './checkout.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector.js';
import { selectCartTotal } from '../../redux/cart/cart.selector.js';

import CheckoutItem from '../../Components/checkout-item/CheckoutItem.js';

import StripeCheckoutButton from '../../Components/stripeButton/stripeButton.js'

const CheckOutPage = ({cartItems , total}) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )
		}
		<div className="total">
			<span>TOTAL :  ₹{total}</span>
		</div>
		<div className="test-warning">
		** Please use the following test card(India) for payments
		<br/>
		4000 0035 6000 0008  - Exp date : 02/25 - CVV : 123 
		</div>
			<StripeCheckoutButton className="pay-button" price={total} />
		

	</div>
	)

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	total : selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)