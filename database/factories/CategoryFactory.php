<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use InvoiceShelf\Models\Category;
use InvoiceShelf\Models\User;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'company_id' => User::find(1)->companies()->first()->id,
            'description' => $this->faker->text,
        ];
    }
}
