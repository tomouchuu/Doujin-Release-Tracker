<?php

namespace App\DoujinReleaseTracker\M3;

use Jenssegers\Mongodb\Model as Eloquent;

class M3 extends Eloquent {

    protected $collection = 'm3';

    public function releases()
    {
        return $this->hasMany('App\DoujinReleaseTracker\Releases\Release');
    }

}
