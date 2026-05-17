package voxgigelonmuskapisdk

import (
	"github.com/voxgig-sdk/elonmuskapi-sdk/go/core"
	"github.com/voxgig-sdk/elonmuskapi-sdk/go/entity"
	"github.com/voxgig-sdk/elonmuskapi-sdk/go/feature"
	_ "github.com/voxgig-sdk/elonmuskapi-sdk/go/utility"
)

// Type aliases preserve external API.
type ElonmuskapiSDK = core.ElonmuskapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ElonmuskapiEntity = core.ElonmuskapiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ElonmuskapiError = core.ElonmuskapiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetRandomArticleEntityFunc = func(client *core.ElonmuskapiSDK, entopts map[string]any) core.ElonmuskapiEntity {
		return entity.NewGetRandomArticleEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewElonmuskapiSDK = core.NewElonmuskapiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
