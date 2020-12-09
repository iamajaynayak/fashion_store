import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem.js';
import './previewcollection.css'

const PreviewCollection = ({title, items}) => (
	<div className="preview-collection">
		<h1 className="title">{title}</h1>
		<div className="preview-item">
			{
				items.filter((item, index)=> index<4)
				.map((item)=> (
					<CollectionItem key={item.id} item={item} />
					)
				)
			}
		</div>
	</div>
	)

export default PreviewCollection