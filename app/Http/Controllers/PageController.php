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
	 * Displays a list of events for all the categories.
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
	public function search(Request $request)
	{
		$query = $request->input('q');
		if ($query === '') {
			return abort(400, 'No Search Query');
		}
		$releases = Api::internal('api/v1/search/' . $query)->get();

		return view('pages.search', ['query' => $query, 'releases' => $releases]);
	}
}
