<?php
declare(strict_types=1);

// Elonmuskapi SDK utility: result_headers

class ElonmuskapiResultHeaders
{
    public static function call(ElonmuskapiContext $ctx): ?ElonmuskapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
