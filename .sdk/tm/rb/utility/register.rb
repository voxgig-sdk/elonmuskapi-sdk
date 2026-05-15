# Elonmuskapi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ElonmuskapiUtility.registrar = ->(u) {
  u.clean = ElonmuskapiUtilities::Clean
  u.done = ElonmuskapiUtilities::Done
  u.make_error = ElonmuskapiUtilities::MakeError
  u.feature_add = ElonmuskapiUtilities::FeatureAdd
  u.feature_hook = ElonmuskapiUtilities::FeatureHook
  u.feature_init = ElonmuskapiUtilities::FeatureInit
  u.fetcher = ElonmuskapiUtilities::Fetcher
  u.make_fetch_def = ElonmuskapiUtilities::MakeFetchDef
  u.make_context = ElonmuskapiUtilities::MakeContext
  u.make_options = ElonmuskapiUtilities::MakeOptions
  u.make_request = ElonmuskapiUtilities::MakeRequest
  u.make_response = ElonmuskapiUtilities::MakeResponse
  u.make_result = ElonmuskapiUtilities::MakeResult
  u.make_point = ElonmuskapiUtilities::MakePoint
  u.make_spec = ElonmuskapiUtilities::MakeSpec
  u.make_url = ElonmuskapiUtilities::MakeUrl
  u.param = ElonmuskapiUtilities::Param
  u.prepare_auth = ElonmuskapiUtilities::PrepareAuth
  u.prepare_body = ElonmuskapiUtilities::PrepareBody
  u.prepare_headers = ElonmuskapiUtilities::PrepareHeaders
  u.prepare_method = ElonmuskapiUtilities::PrepareMethod
  u.prepare_params = ElonmuskapiUtilities::PrepareParams
  u.prepare_path = ElonmuskapiUtilities::PreparePath
  u.prepare_query = ElonmuskapiUtilities::PrepareQuery
  u.result_basic = ElonmuskapiUtilities::ResultBasic
  u.result_body = ElonmuskapiUtilities::ResultBody
  u.result_headers = ElonmuskapiUtilities::ResultHeaders
  u.transform_request = ElonmuskapiUtilities::TransformRequest
  u.transform_response = ElonmuskapiUtilities::TransformResponse
}
