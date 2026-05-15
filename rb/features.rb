# Elonmuskapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ElonmuskapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      ElonmuskapiBaseFeature.new
    when "test"
      ElonmuskapiTestFeature.new
    else
      ElonmuskapiBaseFeature.new
    end
  end
end
