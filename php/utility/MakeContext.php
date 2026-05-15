<?php
declare(strict_types=1);

// Elonmuskapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ElonmuskapiMakeContext
{
    public static function call(array $ctxmap, ?ElonmuskapiContext $basectx): ElonmuskapiContext
    {
        return new ElonmuskapiContext($ctxmap, $basectx);
    }
}
