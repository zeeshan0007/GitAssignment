import React, { Component } from 'react';
class Navbar extends Component {
	render = () => (
		<div className="col-12">
			<h2 className="bg-primary text-white text-center p2">
				{this.props.name}'s To do listsssssssssssssssssssssssssssssssssssssss
			</h2>
		</div>
	);
}
export default Navbar;