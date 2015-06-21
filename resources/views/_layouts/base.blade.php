<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>@yield('title')</title>

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
				<a class="navbar-brand" href="/">@yield('title')</a>
			</div>


			<div class="collapse navbar-collapse" id="navbar-collapse-1">
				@yield('event-nav')

				<form action="http://www.doujinreleas.es/search" method="GET" class="navbar-form navbar-right" role="search">
					<div class="form-group">
						<div class="input-group">
							<input name="q" type="text" class="form-control" placeholder="Search all events...">
							<span class="input-group-btn">
								<button class="btn btn-default" type="button">Go!</button>
							</span>
						</div>
					</div>
					{!! csrf_field() !!}
				</form>

				<ul class="nav navbar-nav navbar-right">
					@section('navbar-right')
						<li><a href="http://www.doujinreleas.es/login">Login</a></li>
						<li><a href="http://www.doujinreleas.es/api">API</a></li>
						<li><a href="https://github.com/tomopagu/Doujin-Release-Tracker">Source</a></li>
					@show
				</ul>
			</div>
		</div>
	</nav>

	@yield('content')

	<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>
