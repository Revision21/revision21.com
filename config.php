<?php

use Illuminate\Support\Str;

return [
    'production' => false,
    'baseUrl' => 'http://localhost:3000',
    'title' => 'Revision21 Consulting',
    'description' => 'Revision21 Consulting',
    'collections' => [],

    // Helpers
    'isActive' => function ($page, $path) {
        return Str::endsWith(trimPath($page->getPath()), trimPath($path));
    },
];
