<?php
declare(strict_types=1);

// Elonmuskapi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ElonmuskapiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ElonmuskapiBaseFeature();
            case "test":
                return new ElonmuskapiTestFeature();
            default:
                return new ElonmuskapiBaseFeature();
        }
    }
}
