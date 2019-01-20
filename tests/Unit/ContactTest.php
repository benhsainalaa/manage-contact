<?php

namespace Tests\Unit;

use App\Contact;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
//use Illuminate\Foundation\Testing\RefreshDatabase;

class ContactTest extends TestCase {
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_can_create_contact() {
        
        $data = [

        'email' => $this->faker->safeEmail,
    	'first_name' => $this->faker->firstName,
    	'last_name' => $this->faker->lastName,
    	'function' => $this->faker->sentence(20),
    	'birth_date' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
    	'city' => $this->faker->city,
    	'phone' =>$this->faker->phoneNumber,
    	'company_name' =>$this->faker->company,
    	'company_address' =>$this->faker->address,
    	'created_at' => now(),
       
        ];
        $this->post(route('contacts.store'), $data)
            ->assertStatus(201)
            ->assertJson($data);

    }
    public function test_can_update_contact() {
        
        $contact = factory(Contact::class)->create();
        $data = [
        'email' => $this->faker->safeEmail,
    	'first_name' => $this->faker->firstName,
    	'last_name' => $this->faker->lastName,
    	'function' => $this->faker->sentence(20),
    	'birth_date' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
    	'city' => $this->faker->city,
    	'phone' =>$this->faker->phoneNumber,
    	'company_name' =>$this->faker->company,
    	'company_address' =>$this->faker->address,
    	'created_at' => now(),
        ];
        $this->put(route('contacts.update', $contact->id), $data)
            ->assertStatus(200)
            ->assertJson($data);
    }
    public function test_can_show_contact() {
        $contact = factory(Contact::class)->create();
        $this->get(route('contacts.show', $contact->id))
            ->assertStatus(200);
    }
    public function test_can_delete_contact() {
        $contact = factory(Contact::class)->create();
        $this->delete(route('contacts.delete', $contact->id))
            ->assertStatus(204);
    }
    public function test_can_list_contacts() {
        $contacts = factory(Contact::class, 3)->create()->map(function ($contact) {
            return $contact->only(['id', 'first_name', 'last_name', 'function',
    	'birth_date','city', 'phone', 'company_name', 'company_address', 'created_at']);
        });
        $this->get(route('contacts'))
            ->assertStatus(200)
            ->assertJson($contacts->toArray())
            ->assertJsonStructure([
                '*' => [ 'id', 'first_name', 'last_name', 'function',
    	'birth_date','city', 'phone', 'company_name', 'company_address', 'created_at' ],
            ]);
    }
}
