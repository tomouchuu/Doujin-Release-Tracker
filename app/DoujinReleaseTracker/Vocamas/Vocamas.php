<?php

namespace App\DoujinReleaseTracker\Vocamas;

use Jenssegers\Mongodb\Model as Eloquent;

class Vocamas extends Eloquent {

    protected $collection = 'vocamas';

    public function releases()
    {
        return $this->hasMany('App\DoujinReleaseTracker\Releases\Release');
    }

}
