<?php

namespace App\DoujinReleaseTracker\Releases;

use Jenssegers\Mongodb\Model as Eloquent;

class Release extends Eloquent {

    protected $collection = 'releases';

    public function comiket()
    {
        return $this->belongsTo('App\DoujinReleaseTracker\Comiket\Comiket');
    }

    public function vocamas()
    {
        return $this->belongsTo('App\DoujinReleaseTracker\Vocamas\Vocamas');
    }

    public function m3()
    {
        return $this->belongsTo('App\DoujinReleaseTracker\M3\M3');
    }

}
