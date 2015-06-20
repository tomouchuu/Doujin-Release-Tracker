<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Doujin Release Tracker</title>

	<link rel="stylesheet" href="assets/css/app.css" media="screen" title="Main Stylesheet" charset="utf-8">
</head>
<body>

	<nav class="navbar navbar-inverse navbar-static-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="/">Comiket Release Tracker</a>
			</div>


			<div class="collapse navbar-collapse" id="navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="/87">C87 <span class="sr-only">(current)</span></a></li>
					<li><a href="/86">C86</a></li>
					<li><a href="/85">C85</a></li>
					<li><a href="/84">C84</a></li>
				</ul>
				<form class="navbar-form navbar-right" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Global Search...">
					</div>
					<button type="submit" class="btn btn-default">Submit</button>
				</form>
			</div>
		</div>
	</nav>

	<div class="container">
		<div class="row">
			<div class="col-sm-6 event-title">
				<h1>Comiket {{ $data['_id'] }} <small class="date">{{ $data['date'] }}</small></h1>
			</div>
			<div class="available-filter col-sm-6" ng-init="[filter.available = '', filter.type = '']">
				<p>Show:
					<a href="" ng-click="[filter.available = '', filter.type = '']">All</a> //
					<a href="" ng-click="filter.available = 'mp3'">Available MP3s</a><br> //
					<a href="" ng-click="filter.available = 'flac'">Available FLACs</a> //
					<a href="" ng-click="filter.available = 'other'">Available Others</a><br> //
					<a href="" ng-click="filter.type = 'touhou'">Touhou</a> //
					<a href="" ng-click="filter.type = 'kancolle'">KanColle</a> //
					<a href="" ng-click="filter.type = 'vocaloid'">Vocaloid</a> //
					<a href="" ng-click="filter.type = 'utaite'">Utaite</a>
				</p>
			</div>
		</div>

		<div class="row threads">
			<div class="col-sm-6">
				<p class="text-center">
					<strong>Doujinstyle thread:</strong>
					<a target="_blank" href="{{ $data['doujinstyle'] }}">{{ $data['doujinstyle'] }}</a>
				</p>
			</div>
			@if (isset($data['jpthread']))
				<div class="col-sm-6">
					<p class="text-center">
						<strong>/jp/ thread:</strong>
						<a target="_blank" href="http://boards.4chan.org/jp/thread/{{ $data['jpthread'] }}">{{ '#'.$data['jpthread'] }}</a>
					</p>
				</div>
			@endif
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-xs-12">

				<table id="releases-table" class="table table-hover table-bordered" cellspacing="0" width="100%">
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
								<td>{{ $release['album'] }}</td>
								<td>{{ $release['artistcircle'] }}</td>
								<td>{{ (isset($release['genre'])) ? $release['genre'] : '' }}</td>
								<td>
									<a href="{{ $release['preview'] }}"><span class="glyphicon glyphicon-headphones" aria-hidden="true"></span></a>
								</td>

								@if ($release['available']['mp3'])
									<td><a href="{{ $release['available']['mp3'] }}"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a></td>
								@else
									<td><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
								@endif

								@if ($release['available']['flac'])
									<td><a href="{{ $release['available']['flac'] }}"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a></td>
								@else
									<td><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
								@endif

								@if ($release['available']['other'])
									<td><a href="{{ $release['available']['other'] }}"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a></td>
								@else
									<td><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
								@endif
							</tr>
						@endforeach
					</tbody>
				</table>

			</div>
		</div>
	</div>

	<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>
