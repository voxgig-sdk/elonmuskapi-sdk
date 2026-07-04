# frozen_string_literal: true

# Typed models for the Elonmuskapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetRandomArticle entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] published_at
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
GetRandomArticle = Struct.new(
  :description,
  :published_at,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Match filter for GetRandomArticle#load (any subset of GetRandomArticle fields).
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] published_at
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
GetRandomArticleLoadMatch = Struct.new(
  :description,
  :published_at,
  :source,
  :title,
  :url,
  keyword_init: true
)

