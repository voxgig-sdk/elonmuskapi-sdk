# Elonmuskapi SDK utility: make_context
require_relative '../core/context'
module ElonmuskapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    ElonmuskapiContext.new(ctxmap, basectx)
  }
end
