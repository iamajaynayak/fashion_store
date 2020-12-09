import React from 'react';
import {withRouter} from 'react-router-dom';
import './menucontainer.css';

const MenuContainer = ({title , imageUrl, size, history , match ,linkUrl}) => 
	(
		<div className="overlay">
				<div className={`${size} menu-container`} style={
					{
						backgroundImage: `url(${imageUrl})`
					}
				}>
				 
					<div className="item-container" 
					onClick={() => history.push(`${match.url}${linkUrl}`)}>
						<div className="title">{title}</div>
						<span className="subtitle">Shop Now</span>
					</div>
				</div>
		</div>
				);
export default withRouter(MenuContainer)