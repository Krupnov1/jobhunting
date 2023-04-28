<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vacancy_categories_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->string('users_employers_email', 50);
            $table->string('organization', 145);
            $table->string('profession', 145);
            $table->string('payment', 45);
            $table->text('vacancy_description');
            $table->text('requirements');
            $table->dateTime('created_at')->default(NOW());
            $table->dateTime('read_at')->nullable();
            $table->dateTime('updated_at')->nullable();
            $table->dateTime('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
