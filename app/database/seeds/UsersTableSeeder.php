<?php

class UsersTableSeeder extends Seeder {

	public function run()
	{

		User::create([
			'username' => 'tomo',
			'email' => 'tomo@pagu.co',
			'password' => Hash::make($_ENV['ADMIN_PASSWORD']),
		]);

	}

}