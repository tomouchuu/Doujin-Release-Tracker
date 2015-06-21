@extends('events.base')

@section('content')
	<div class="container">
		<div class="row">
			<div class="col-sm-6 event-title">
				<h1>{{ $eventname }} {{ $data['_id'] }} <small class="date">{{ $data['date'] }}</small></h1>
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
			@if (isset($data['jpthread']))
				<div class="col-sm-6">
					<p class="text-center">
						<strong>Doujinstyle thread:</strong>
						<a target="_blank" href="{{ $data['doujinstyle'] }}">{{ $data['doujinstyle'] }}</a>
					</p>
				</div>
			@endif
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
@endsection
