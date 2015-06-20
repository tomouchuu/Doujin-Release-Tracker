<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Doujin Release Tracker</title>

	<link rel="stylesheet" href="assets/css/app.css" media="screen" title="Main Stylesheet" charset="utf-8">
</head>
<body>

	<div class="container">
		<div class="row">
			<div class="col-sm-8 col-sm-offset-2">

				<div class="row">
					<div class="col-sm-8">
						<h1>Doujin Release Tracker Hub</h1>
					</div>
					<div class="col-sm-4">
						<ul class="nav nav-pills">
							<li role="presentation"><a href="/login">Login</a></li>
							<li role="presentation"><a href="/api">API</a></li>
							<li role="presentation"><a href="https://github.com/tomopagu/Doujin-Release-Tracker">Source</a></li>
						</ul>
					</div>
				</div>

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
		</div>
	</div>

	<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>
