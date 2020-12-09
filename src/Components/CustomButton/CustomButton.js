import React from 'react';
import './custombutton.css';

const CustomButton = ({children, isGoogleSignedIn , inverted , ...buttonprops}) => (
	
	<button className={`${inverted ? 'inverted' : '' }
	 ${isGoogleSignedIn ? 'google-signin' : '' } 
	 custombutton `} {...buttonprops}>
	{
		children
	}
	</button>
	)

export default CustomButton