-- Elonmuskapi SDK error

local ElonmuskapiError = {}
ElonmuskapiError.__index = ElonmuskapiError


function ElonmuskapiError.new(code, msg, ctx)
  local self = setmetatable({}, ElonmuskapiError)
  self.is_sdk_error = true
  self.sdk = "Elonmuskapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ElonmuskapiError:error()
  return self.msg
end


function ElonmuskapiError:__tostring()
  return self.msg
end


return ElonmuskapiError
