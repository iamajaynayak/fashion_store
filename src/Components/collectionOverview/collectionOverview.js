import React from'react';
import './collection-overview.css';
import PreviewCollection from '../PreviewCollection/PreviewCollection.js';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector.js';

const CollectionOverview = ({collection}) => (
				<div className="collection-overview">
					{ collection.map(({id, ...otherCollections}) => (
						<PreviewCollection key={id} {...otherCollections} />
					))}
				</div>
)

const mapStateToProps = createStructuredSelector({
	collection : selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);