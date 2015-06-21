<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>{{ $eventname }} {{ $data['_id'] }} Release Tracker</title>

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
				<a class="navbar-brand" href="/">{{ $eventname }} Release Tracker</a>
			</div>


			<div class="collapse navbar-collapse" id="navbar-collapse-1">
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
				<form class="navbar-form navbar-right" role="search">
					<div class="form-group">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search all events...">
							<span class="input-group-btn">
								<button class="btn btn-default" type="button">Go!</button>
							</span>
						</div>
					</div>
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="/archive">Archive</a></li>
					<li><a href="http://www.doujinreleas.es">Other Events</a></li>
					<li><a href="http://www.doujinreleas.es/login">Login</a></li>
					<li><a href="http://www.doujinreleas.es/api">API</a></li>
					<li><a href="https://github.com/tomopagu/Doujin-Release-Tracker">Source</a></li>
				</ul>
			</div>
		</div>
	</nav>

	@yield('content')

	<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>
