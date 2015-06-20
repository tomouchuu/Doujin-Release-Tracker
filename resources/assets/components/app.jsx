var React = require('react');

var Navbar = require('./navbar.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
			</div>
		);
	}
});

React.render(
	<App />,
	document.getElementById('release-tracker-app')
);
