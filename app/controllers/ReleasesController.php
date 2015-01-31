<?php

use \Illuminate\Database\Eloquent\ModelNotFoundException;
use \Comiket\Release as ComiketRelease;

class ReleasesController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /releases
	 *
	 * @return Response
	 */
	public function index()
	{
		return ComiketRelease::all();
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /releases/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /releases
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /releases/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		try {
			$release = ComiketRelease::findOrFail($id);
		}
		catch(ModelNotFoundException $e) {
			throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
		}
		return $release;
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /releases/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		try {
			$release = ComiketRelease::findOrFail($id);
		}
		catch(ModelNotFoundException $e) {
			throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
		}
		return $release;
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /releases/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /releases/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		try {
			$release = ComiketRelease::findOrFail($id);
		}
		catch(ModelNotFoundException $e) {
			throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
		}
		$release->delete();
		return $release;
	}

}