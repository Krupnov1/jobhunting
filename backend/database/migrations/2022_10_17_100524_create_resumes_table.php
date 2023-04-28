<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResumesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('resumes_categories_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->string('users_email', 50);
            $table->string('first_name', 145);
            $table->string('last_name', 145);
            $table->string('locality', 145);
            $table->string('education', 145);
            $table->string('profession', 145);
            $table->text('professional_experience');
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
        Schema::dropIfExists('resumes');
    }
}
