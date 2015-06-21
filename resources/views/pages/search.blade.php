@extends('pages.base')

@section('content')
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h1>Search: <small>{{ $query }}</small></h1>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<div class="table-responsive">

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
	</div>
@endsection
