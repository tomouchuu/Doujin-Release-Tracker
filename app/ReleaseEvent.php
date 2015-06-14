<?php

namespace DoujinReleaseTracker;

use Jenssegers\Mongodb\Model as Eloquent;

class ReleaseEvent extends Eloquent {

    protected $collection = 'events';

}
