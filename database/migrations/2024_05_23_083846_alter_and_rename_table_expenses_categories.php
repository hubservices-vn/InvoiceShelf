<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::rename('expense_categories', 'categories');
        Schema::table('categories', function (Blueprint $table) {
            $table->string('type')->nullable();
            $table->string('image_url')->nullable();
            $table->integer('parent_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn([
                'type',
                'image_url',
                'parent_id',
            ]);
        });
        Schema::rename('categories', 'expense_categories');
    }
};
