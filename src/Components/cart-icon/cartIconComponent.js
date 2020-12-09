import React from 'react';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import './cartIconComponent.css';
import { connect } from 'react-redux';
import { ToggleCart } from '../../redux/cart/cartAction.js';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector.js';

const CartIcon = ({ToggleCart , itemCount}) => (
	<div className="shoping-cart" onClick={ToggleCart}>
	<ShopingIcon className="shoping-icon"/>
	<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = createStructuredSelector({
	itemCount : selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
	ToggleCart : () => dispatch(ToggleCart())
});

export default connect(mapStateToProps , mapDispatchToProps)(CartIcon);