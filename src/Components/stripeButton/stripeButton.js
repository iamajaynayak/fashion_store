import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HaafvIKwFu1gFC7o2IHM1mmZfgRBJkbz8gKZrGuZcmRVr4ouUhUQodamUhdFS2DZLTIqs7Q3kRTnQwSqHmfl7Bz00GrHgnvX0';
	const onToken = token => {
		console.log(token);
		alert("payment successfull")
	}
	return (
		<StripeCheckout 
			label="Pay Now"
			name="Fashion Store Ltd."
			currency="INR"
			billingAddress
			shippingAddress
			description = {`your total is ₹${price}`}
			amount= {priceForStripe}
			pannelLabel ="Pay Now"
			token={onToken}
			stripeKey = {publishableKey}
			/>
			)	
} 

export default StripeCheckoutButton;