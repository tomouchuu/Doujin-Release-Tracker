<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mmanos\Api\Api;

use App\DoujinReleaseTracker\Comiket\Comiket;
use App\DoujinReleaseTracker\Vocamas\Vocamas;
use App\DoujinReleaseTracker\M3\M3;

class EventController extends Controller
{
	/**
	 * Displays the releases from the latest comiket event.
	 *
	 * @return Response
	 */
	public function index($event)
	{
		if ($event === 'comiket') {
			$latestEvent = Comiket::max('_id');
		}
		elseif ($event === 'vocamas') {
			$latestEvent = Vocamas::max('_id');
		}
		elseif ($event === 'm3') {
			$latestEvent = M3::max('_id');
		}

		$data = Api::internal('api/v1/' . $event . '/' . $latestEvent)->get();
		$releases = Api::internal('api/v1/' . $event . '/' . $latestEvent . '/releases')->get();

		return view('events.index', ['eventname' => ucfirst($event), 'data' => $data, 'releases' => $releases]);
	}

	/**
	 * Display the releases from the specific comiket event.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function specific($event, $id)
	{
		$data = Api::internal('api/v1/' . $event . '/' . $id)->get();
		$releases = Api::internal('api/v1/' . $event . '/' . $id . '/releases')->get();
		return view('events.index', ['eventname' => ucfirst($event), 'data' => $data, 'releases' => $releases]);
	}

	/**
	 * Display all the release events we have for a specific event.
	 *
	 * @return Response
	 */
	public function archive($event)
	{
		$events = Api::internal('api/v1/' . $event . '/')->get();
		return view('events.archive', ['eventname' => ucfirst($event), 'events' => $events]);
	}
}
