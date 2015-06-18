<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

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
		$data = Comiket::find($latestComiket);
		$releases = $data->releases;

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
		$data = Comiket::findOrFail($id);
		$releases = $data->releases;
		return view('_layouts.index', ['data' => $data, 'releases' => $releases]);
	}
}
