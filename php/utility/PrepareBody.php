<?php
declare(strict_types=1);

// Elonmuskapi SDK utility: prepare_body

class ElonmuskapiPrepareBody
{
    public static function call(ElonmuskapiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
