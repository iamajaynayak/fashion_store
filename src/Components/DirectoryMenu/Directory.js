import React from 'react';
import MenuContainer from '../MenuContainer/MenuContainer';
import './directory.css';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector.js';
import { createStructuredSelector } from 'reselect'

const Directory = ({ sections }) =>(
	<div className="directory-menu">
			{
				sections.map(({id, ...sections}) => (
					<MenuContainer  key={id} {...sections}/>
					))
			}
	</div>
)

const mapStateToProps = createStructuredSelector({
	sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory);