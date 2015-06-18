<?php

namespace App\DoujinReleaseTracker\Releases;

use Jenssegers\Mongodb\Model as Eloquent;

class Release extends Eloquent {

    protected $collection = 'releases';

    public function comiket()
    {
        return $this->belongsTo('App\DoujinReleaseTracker\Comiket\Comiket');
    }

}
