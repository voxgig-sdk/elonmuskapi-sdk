# Elonmuskapi SDK exists test

require "minitest/autorun"
require_relative "../Elonmuskapi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ElonmuskapiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
