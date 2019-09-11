import React from 'react';
import {withRouter} from 'react-router-dom';
import {Animated} from "react-animated-css";

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, subtitle, size, history, match, linkUrl}) => (
	<div 
		className={`${size} menu-item`}  
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div className="background-image" style={{ background: `url(${imageUrl})`}} />
		<Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">{subtitle}</span>
			</div>
		</Animated>
	</div>
);

export default withRouter(MenuItem);