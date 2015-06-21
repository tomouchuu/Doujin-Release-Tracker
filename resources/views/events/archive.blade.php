@extends('_layouts.event')

@section('content')
	<div class="container">
		<div class="row">
			<div class="col-xs-12">

				<h1>{{ $eventname }} Events</h1>

				<table class="table table-hover table-bordered" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th>ID</th>
							<th>Date</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						@foreach ($events as $event)
							<tr>
								<td>{{ $event['_id'] }}</td>
								<td>{{ $event['date'] }}</td>
								<td><a href="/{{ $event['_id'] }}">Link</td>
							</tr>
						@endforeach
					</tbody>
				</table>

			</div>
		</div>
	</div>
@endsection
