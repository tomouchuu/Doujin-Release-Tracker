<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReleasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('releases', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('event_id');
			$table->string('album');
			$table->string('circle');
			$table->string('link');
			$table->string('preview');
			$table->string('genre');
			$table->string('type');
			$table->string('mp3_link');
			$table->string('flac_link');
			$table->string('other_link');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('releases');
	}

}
