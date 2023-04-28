<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesApplicantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles_applicants', function (Blueprint $table) {
            $table->id();
            $table->string('name', 145);
            $table->string('last_name', 145);
            $table->string('phone', 25)->unique();
            $table->string('email', 145)->unique();
            $table->string('locality');
            $table->dateTime('created_at')->default(NOW());
            $table->dateTime('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles_applicants');
    }
}
