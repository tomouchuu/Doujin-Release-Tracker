@extends('pages.base')

@section('content')
	<div class="container">
		<div class="row">
			<div class="col-sm-4">
				<h2>Comiket</h2>
				<ul class="nav nav-pills nav-stacked">
					@foreach ($comiketEvents as $event)
						<li><a href="http://comiket.doujinreleas.es/{{ $event['_id'] }}">C{{ $event['_id'] }} - {{ $event['date'] }}</a></li>
					@endforeach
				</ul>
			</div>
			<div class="col-sm-4">
				<h2>M3</h2>
				<ul class="nav nav-pills nav-stacked">
					@foreach ($m3Events as $event)
						<li><a href="http://m3.doujinreleas.es/{{ $event['_id'] }}">M3 {{ $event['_id'] }} - {{ $event['date'] }}</a></li>
					@endforeach
				</ul>
			</div>
			<div class="col-sm-4">
				<h2>Vocamas</h2>
				<ul class="nav nav-pills nav-stacked">
					@foreach ($vocamasEvents as $event)
						<li><a href="http://vocamas.doujinreleas.es/{{ $event['_id'] }}">Vocamas{{ $event['_id'] }} - {{ $event['date'] }}</a></li>
					@endforeach
				</ul>
			</div>
		</div>
	</div>
@endsection
