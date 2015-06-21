@extends('_layouts.base')

@section('title')
	{{ $eventname }} {{ isset($data['_id']) ? $data['_id'] : '' }} Release Tracker
@endsection

@section('navbar-brand')
	{{ $eventname }} Release Tracker
@endsection

@section('event-nav')
	<ul class="nav navbar-nav">
		@if ($eventname === 'Comiket')
			@foreach ($comiketNavItems as $eventItem)
				<li><a href="/{{ $eventItem['id'] }}">C{{ $eventItem['id'] }}</a></li>
			@endforeach
		@elseif($eventname === 'Vocamas')
			@foreach ($vocamasNavItems as $eventItem)
				<li><a href="/{{ $eventItem['id'] }}">Vocamas {{ $eventItem['id'] }}</a></li>
			@endforeach
		@elseif($eventname === 'M3')
			@foreach ($m3NavItems as $eventItem)
				<li><a href="/{{ $eventItem['id'] }}">M3 {{ $eventItem['id'] }}</a></li>
			@endforeach
		@endif
	</ul>
@endsection

@section('navbar-right')
	<li><a href="/archive">Archive</a></li>
	<li><a href="http://www.doujinreleas.es">Other Events</a></li>
	@parent
@endsection
