<?php
declare(strict_types=1);

// Elonmuskapi SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ElonmuskapiUtility::setRegistrar(function (ElonmuskapiUtility $u): void {
    $u->clean = [ElonmuskapiClean::class, 'call'];
    $u->done = [ElonmuskapiDone::class, 'call'];
    $u->make_error = [ElonmuskapiMakeError::class, 'call'];
    $u->feature_add = [ElonmuskapiFeatureAdd::class, 'call'];
    $u->feature_hook = [ElonmuskapiFeatureHook::class, 'call'];
    $u->feature_init = [ElonmuskapiFeatureInit::class, 'call'];
    $u->fetcher = [ElonmuskapiFetcher::class, 'call'];
    $u->make_fetch_def = [ElonmuskapiMakeFetchDef::class, 'call'];
    $u->make_context = [ElonmuskapiMakeContext::class, 'call'];
    $u->make_options = [ElonmuskapiMakeOptions::class, 'call'];
    $u->make_request = [ElonmuskapiMakeRequest::class, 'call'];
    $u->make_response = [ElonmuskapiMakeResponse::class, 'call'];
    $u->make_result = [ElonmuskapiMakeResult::class, 'call'];
    $u->make_point = [ElonmuskapiMakePoint::class, 'call'];
    $u->make_spec = [ElonmuskapiMakeSpec::class, 'call'];
    $u->make_url = [ElonmuskapiMakeUrl::class, 'call'];
    $u->param = [ElonmuskapiParam::class, 'call'];
    $u->prepare_auth = [ElonmuskapiPrepareAuth::class, 'call'];
    $u->prepare_body = [ElonmuskapiPrepareBody::class, 'call'];
    $u->prepare_headers = [ElonmuskapiPrepareHeaders::class, 'call'];
    $u->prepare_method = [ElonmuskapiPrepareMethod::class, 'call'];
    $u->prepare_params = [ElonmuskapiPrepareParams::class, 'call'];
    $u->prepare_path = [ElonmuskapiPreparePath::class, 'call'];
    $u->prepare_query = [ElonmuskapiPrepareQuery::class, 'call'];
    $u->result_basic = [ElonmuskapiResultBasic::class, 'call'];
    $u->result_body = [ElonmuskapiResultBody::class, 'call'];
    $u->result_headers = [ElonmuskapiResultHeaders::class, 'call'];
    $u->transform_request = [ElonmuskapiTransformRequest::class, 'call'];
    $u->transform_response = [ElonmuskapiTransformResponse::class, 'call'];
});
