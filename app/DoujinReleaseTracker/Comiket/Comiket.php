<?php

namespace App\DoujinReleaseTracker\Comiket;

use Jenssegers\Mongodb\Model as Eloquent;

class Comiket extends Eloquent {

    protected $collection = 'comiket';

    public function releases()
    {
        return $this->hasMany('App\DoujinReleaseTracker\Releases\Release');
    }

}
