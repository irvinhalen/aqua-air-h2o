<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class LogTestCommand extends Command
{
    protected $signature = 'log:test';
    protected $description = 'Generate a log entry for testing purposes.';

    public function handle()
    {
        Log::info('This is a test log entry from the LogTestCommand.');
        $this->info('Log entry generated successfully.');
    }
}
