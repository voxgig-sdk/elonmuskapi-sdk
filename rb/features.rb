# Elonmuskapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ElonmuskapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      ElonmuskapiBaseFeature.new
    when "ratelimit"
      ElonmuskapiRatelimitFeature.new
    when "retry"
      ElonmuskapiRetryFeature.new
    when "test"
      ElonmuskapiTestFeature.new
    when "timeout"
      ElonmuskapiTimeoutFeature.new
    else
      ElonmuskapiBaseFeature.new
    end
  end
end
