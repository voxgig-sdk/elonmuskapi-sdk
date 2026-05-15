# Elonmuskapi SDK utility: feature_add
module ElonmuskapiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
