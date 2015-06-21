<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mmanos\Api\Api;

use App\DoujinReleaseTracker\Releases\Release;

class ReleaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
		return Api::transform(Release::all());
    }

    /**
     * Display matches/similar releases to a search query.
     *
     * @param  int  $id
     * @return Response
     */
    public function search($query)
    {
        $data = Release::where('album', 'like', '%'. $query .'%')->orWhere('artistcircle', 'like', '%'. $query .'%')->get();

        if ($data) {
            return Api::transform($data);
        }
        else {
            return Api::abort(404);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $data = Release::find($id);
        if ($data) {
            return Api::transform($data);
        }
        else {
            return Api::abort(404);
        }
    }

    /**
     * Display the comiket event of specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function comiket($id)
    {
        $data = Release::find($id);
        if ($data) {
            return Api::transform($data->comiket);
        }
        else {
            return Api::abort(404);
        }
    }

    /**
     * Display the m3 event of specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function m3($id)
    {
        $data = Release::find($id);
        if ($data) {
            return Api::transform($data->m3);
        }
        else {
            return Api::abort(404);
        }
    }

    /**
     * Display the vocamas event of specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function vocamas($id)
    {
        $data = Release::find($id);
        if ($data) {
            return Api::transform($data->vocamas);
        }
        else {
            return Api::abort(404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
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
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
