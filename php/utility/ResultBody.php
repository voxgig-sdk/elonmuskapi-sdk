<?php
declare(strict_types=1);

// Elonmuskapi SDK utility: result_body

class ElonmuskapiResultBody
{
    public static function call(ElonmuskapiContext $ctx): ?ElonmuskapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
