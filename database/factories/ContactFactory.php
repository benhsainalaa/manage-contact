<?php

use Faker\Generator as FakerG;

    $factory->define(App\Contact::class, function (FakerG $faker) {
    $faker->addProvider(new Faker\Provider\en_US\Company($faker));
    $faker->addProvider(new Faker\Provider\en_US\Address($faker));
    return [

    	'email' => $faker->unique()->safeEmail,
    	'first_name' => $faker->firstName,
    	'last_name' => $faker->lastName,
    	'function' => $faker->sentence(20),
    	'birth_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
    	'city' => $faker->city,
    	'phone' =>$faker->phoneNumber,
    	'company_name' =>$faker->company,
    	'company_address' =>$faker->address,
    	'created_at' => now(),
    	 //
        //
    ];
});
