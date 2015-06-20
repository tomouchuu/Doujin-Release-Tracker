<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mmanos\Api\Api;

use App\DoujinReleaseTracker\Comiket\Comiket;

class ComiketController extends Controller
{
	/**
	 * Displays the releases from the latest comiket event.
	 *
	 * @return Response
	 */
	public function index()
	{
		$latestComiket = Comiket::max('_id');

		$data = Api::internal('api/v1/comiket/' . $latestComiket)->get();
		$releases = Api::internal('api/v1/comiket/' . $latestComiket . '/releases')->get();

		return view('_layouts.index', ['data' => $data, 'releases' => $releases]);
	}

	/**
	 * Display the releases from the specific comiket event.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function specific($id)
	{
		$data = Api::internal('api/v1/comiket/' . $id)->get();
		$releases = Api::internal('api/v1/comiket/' . $id . '/releases')->get();
		return view('_layouts.index', ['data' => $data, 'releases' => $releases]);
	}
}
