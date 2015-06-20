<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Mmanos\Api\ControllerTrait;

abstract class Controller extends BaseController
{
	use ControllerTrait, DispatchesJobs, ValidatesRequests;
}
