package = "voxgig-sdk-elonmuskapi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/elonmuskapi-sdk.git"
}
description = {
  summary = "Elonmuskapi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["elonmuskapi_sdk"] = "elonmuskapi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
