<?php
declare(strict_types=1);

// Elonmuskapi SDK base feature

class ElonmuskapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ElonmuskapiContext $ctx, array $options): void {}
    public function PostConstruct(ElonmuskapiContext $ctx): void {}
    public function PostConstructEntity(ElonmuskapiContext $ctx): void {}
    public function SetData(ElonmuskapiContext $ctx): void {}
    public function GetData(ElonmuskapiContext $ctx): void {}
    public function GetMatch(ElonmuskapiContext $ctx): void {}
    public function SetMatch(ElonmuskapiContext $ctx): void {}
    public function PrePoint(ElonmuskapiContext $ctx): void {}
    public function PreSpec(ElonmuskapiContext $ctx): void {}
    public function PreRequest(ElonmuskapiContext $ctx): void {}
    public function PreResponse(ElonmuskapiContext $ctx): void {}
    public function PreResult(ElonmuskapiContext $ctx): void {}
    public function PreDone(ElonmuskapiContext $ctx): void {}
    public function PreUnexpected(ElonmuskapiContext $ctx): void {}
}
