import React from 'react';
import './VideoFooter.css';

function videoFooter(props) {
	return (
		<div className="videofooter">
			<p> {props.name} </p>{' '}
		</div>
	);
}
export default videoFooter;
