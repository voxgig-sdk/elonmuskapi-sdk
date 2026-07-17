-- Elonmuskapi SDK exists test

local sdk = require("elonmuskapi_sdk")

describe("ElonmuskapiSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
