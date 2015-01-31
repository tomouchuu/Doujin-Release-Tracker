<?php

namespace Comiket;

use \Eloquent;

class Event extends Eloquent {

    protected $table = 'events';
    protected $fillable = [];
    public $timestamps = false;

}