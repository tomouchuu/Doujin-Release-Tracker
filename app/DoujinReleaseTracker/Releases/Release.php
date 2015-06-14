<?php

namespace App\DoujinReleaseTracker\Releases;

use Jenssegers\Mongodb\Model as Eloquent;

class Release extends Eloquent {

    protected $collection = 'releases';

}
