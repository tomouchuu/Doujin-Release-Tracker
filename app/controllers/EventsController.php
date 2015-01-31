<?php

use \Illuminate\Database\Eloquent\ModelNotFoundException;
use \Comiket\Event as ComiketEvent;

class EventsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /events
	 *
	 * @return Response
	 */
	public function index()
	{
		return ComiketEvent::all();
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /events/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /events
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /events/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		try {
			$event = ComiketEvent::findOrFail($id);
		}
		catch(ModelNotFoundException $e) {
			throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
		}
		return $event;
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /events/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		try {
			$event = ComiketEvent::findOrFail($id);
		}
		catch(ModelNotFoundException $e) {
			throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
		}
		return $event;
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /events/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{

	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /events/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		try {
			$event = ComiketEvent::findOrFail($id);
		}
		catch(ModelNotFoundException $e) {
			throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
		}
		$event->delete();
		return $event;
	}

}