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
        Schema::create('banners', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('public_id')->index();
            $table->integer('local')->default(0);
            $table->smallInteger('target_blank')->default(0);
            $table->string('titulo');
            $table->date('periodo_inicio')->nullable();
            $table->date('periodo_fim')->nullable();
            $table->text('url')->nullable();
            $table->string('imagem')->nullable();
            $table->string('imagem_mobile')->nullable();
            $table->integer('qtd_cliques')->default(0);
            $table->integer('qtd_views')->default(0);
            $table->integer('ordem')->default(0);
            $table->smallInteger('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
