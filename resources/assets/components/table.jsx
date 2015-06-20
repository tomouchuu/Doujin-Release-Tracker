var CommentBox = React.createClass({
	getInitialState: function() {
		return {data: []};
	},

	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},

	render: function() {
		return (
			<div className="release-table">
				<table>
					<thead>
						<tr>
							<th rowspan="2">Album</th>
							<th rowspan="2">Artist / Circle</th>
							<th rowspan="2">Genre</th>
							<th rowspan="2">Preview</th>
							<th colspan="3">Available</th>
						</tr>
						<tr>
							<th>MP3</th>
							<th>Flac</th>
							<th>Other</th>
						</tr>
					</thead>
					<tbody>
						{this.props.releases.map(function(data) {
							console.log(data);
							return (
								<Release />
							);
						}, this)}
					</tbody>
				</table>
			</div>
		);
	}
});
