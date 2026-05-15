<?php
declare(strict_types=1);

// Elonmuskapi SDK utility: feature_add

class ElonmuskapiFeatureAdd
{
    public static function call(ElonmuskapiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
