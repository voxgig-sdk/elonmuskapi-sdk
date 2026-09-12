<?php
declare(strict_types=1);

// Elonmuskapi SDK configuration

class ElonmuskapiConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Elonmuskapi",
                "slug" => "elonmuskapi",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://elonmu.sh",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_random_article" => [],
                ],
            ],
            "entity" => [
        'get_random_article' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'A brief description or excerpt from the article',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'publishedAt',
              'short' => 'The publication date and time of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'The news outlet that published the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'The title of the news article',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'url',
              'short' => 'The URL to the original news article',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_random_article',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'segments' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ElonmuskapiFeatures::make_feature($name);
    }
}
