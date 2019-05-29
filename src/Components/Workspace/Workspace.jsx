import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './scss/_workspace.scss';

class Workspace extends Component {
	render() {
		return (
			<div className="workspace">
				<Header />
				
				{this.props.children}
				
				<Footer />
			</div>
		);
	}
}

export default Workspace;
