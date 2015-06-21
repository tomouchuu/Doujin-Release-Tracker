<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mmanos\Api\Api;

use App\DoujinReleaseTracker\Comiket\Comiket;
use App\DoujinReleaseTracker\Vocamas\Vocamas;
use App\DoujinReleaseTracker\M3\M3;

class PageController extends Controller
{
	/**
	 * Displays the releases from the latest comiket event.
	 *
	 * @return Response
	 */
	public function index()
	{
		$comiketEvents = Api::internal('api/v1/comiket')->get();
		$m3Events = Api::internal('api/v1/m3')->get();
		$vocamasEvents = Api::internal('api/v1/vocamas')->get();

		return view('pages.index', [
			'comiketEvents' => $comiketEvents,
			'm3Events' => $m3Events,
			'vocamasEvents' => $vocamasEvents,
		]);
	}

	/**
	 * Displays all the releases that match/similar to search query.
	 *
	 * @return Response
	 */
	public function search()
	{
		$releases = Api::internal('api/v1/releases')->get();

		return view('pages.search', ['releases' => $releases]);
	}
}
