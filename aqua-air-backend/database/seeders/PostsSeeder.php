<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            'message'=>'🫧 Aqua-Air H2O: Rehydrated 💦',
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
        DB::table('posts')->insert([
            'message'=>'Thirty-five is the character limit.',
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
    }
}
