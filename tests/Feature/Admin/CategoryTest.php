<?php

use Illuminate\Support\Facades\Artisan;
use InvoiceShelf\Http\Controllers\V1\Admin\Expense\CategoriesController;
use InvoiceShelf\Http\Requests\CategoryRequest;
use InvoiceShelf\Models\Category;
use InvoiceShelf\Models\User;
use Laravel\Sanctum\Sanctum;

use function Pest\Laravel\deleteJson;
use function Pest\Laravel\getJson;
use function Pest\Laravel\postJson;
use function Pest\Laravel\putJson;

beforeEach(function () {
    Artisan::call('db:seed', ['--class' => 'DatabaseSeeder', '--force' => true]);
    Artisan::call('db:seed', ['--class' => 'DemoSeeder', '--force' => true]);

    $user = User::find(1);
    $this->withHeaders([
        'company' => $user->companies()->first()->id,
    ]);
    Sanctum::actingAs(
        $user,
        ['*']
    );
});

test('get categories', function () {
    $response = getJson('api/v1/categories');

    $response->assertOk();
});

test('create category', function () {
    $category = Category::factory()->raw();

    $response = postJson('api/v1/categories', $category);

    $response->assertStatus(201);

    $this->assertDatabaseHas('categories', [
        'name' => $category['name'],
        'description' => $category['description'],
    ]);
});

test('store validates using a form request', function () {
    $this->assertActionUsesFormRequest(
        CategoriesController::class,
        'store',
        CategoryRequest::class
    );
});

test('get category', function () {
    $category = Category::factory()->create();

    getJson("api/v1/categories/{$category->id}")->assertOk();
});

test('update category', function () {
    $category = Category::factory()->create();

    $category2 = Category::factory()->raw();

    putJson('api/v1/categories/'.$category->id, $category2)->assertOk();

    $this->assertDatabaseHas('categories', [
        'id' => $category->id,
        'name' => $category2['name'],
        'description' => $category2['description'],
    ]);
});

test('update validates using a form request', function () {
    $this->assertActionUsesFormRequest(
        CategoriesController::class,
        'update',
        CategoryRequest::class
    );
});

test('delete category', function () {
    $category = Category::factory()->create();

    deleteJson('api/v1/categories/'.$category->id)
        ->assertOk()
        ->assertJson([
            'success' => true,
        ]);

    $this->assertModelMissing($category);
});
