// Typed models for the Elonmuskapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetRandomArticle {
  description?: string
  published_at?: string
  source?: string
  title?: string
  url?: string
}

export type GetRandomArticleLoadMatch = Partial<GetRandomArticle>

