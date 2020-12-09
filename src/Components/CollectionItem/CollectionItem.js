import React from 'react';
import CustomButton from '../CustomButton/CustomButton.js';
import './collectionitem.css';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction.js';

const CollectionItem = ({item, addItem}) => {
	const {id, imageUrl, name, price} = item;
	return (
	<div className="collection-item" key={id}>
	<div className="image"
	style={{
		backgroundImage:`url(${imageUrl})`
	}} />
	<div className="collection-footer">
		<span className="name-view">{name}</span>
		<span className="price-view">{price}</span>
	</div>
	<CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
	</div>

	)
}

const mapDispatchToProps = dispatch => ({
	addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);