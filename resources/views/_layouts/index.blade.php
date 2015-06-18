<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Doujin Release Tracker</title>
</head>
<body>
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
			@foreach ($releases as $release)
				<tr>
					<td>{{ $release->album }}</td>
					<td>{{ $release->artistcircle }}</td>
					<td>{{ $release->genre }}</td>
					<td>{{ $release->preview }}</td>
					<td>{{ $release->available['mp3'] }}</td>
					<td>{{ $release->available['flac'] }}</td>
					<td>{{ $release->available['other'] }}</td>
				</tr>
			@endforeach
		</tbody>
	</table>
</body>
</html>
