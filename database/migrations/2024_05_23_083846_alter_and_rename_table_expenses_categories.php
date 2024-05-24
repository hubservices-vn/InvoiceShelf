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
            $table->string('type')->default('expense');
            $table->string('image_url')->nullable();
            $table->string('complete_name')->nullable();
            $table->string('parent_path')->nullable();
            $table->integer('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')->references('id')->on('categories')->onDelete('restrict');
        });
        Schema::table('categories', function (Blueprint $table) {
            $table->string('type')->default(null)->change();
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
                'complete_name',
                'parent_path',
            ]);
        });
        Schema::rename('categories', 'expense_categories');
    }
};
