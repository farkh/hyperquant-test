import React, { Component } from 'react';

import GraphImg from '../../img/graph-for-now.png';

import './scss/_graph.scss';

class Graph extends Component {
	render() {
		return (
			<div className="dashboard__graph graph">
				<img src={GraphImg} alt="Graph" />
			</div>
		);
	}
}

export default Graph;
