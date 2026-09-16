

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ElonmuskapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetRandomArticleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ELONMUSKAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('ELONMUSKAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ElonmuskapiSDK.test()
    const ent = testsdk.GetRandomArticle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ELONMUSKAPI_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_random_article.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"A brief description or excerpt from the article","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"publishedAt","req":false,"short":"The publication date and time of the article","type":"`$STRING`","index$":1},{"active":true,"name":"source","req":false,"short":"The news outlet that published the article","type":"`$STRING`","index$":2},{"active":true,"name":"title","req":false,"short":"The title of the news article","type":"`$STRING`","index$":3},{"active":true,"format":"uri","name":"url","req":false,"short":"The URL to the original news article","type":"`$STRING`","index$":4}],"name":"get_random_article","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /","json":"{\"operationId\":\"getRandomArticle\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"description\":\"Tesla CEO Elon Musk unveiled the latest electric vehicle innovation...\",\"publishedAt\":\"2024-01-15T10:30:00Z\",\"source\":\"TechNews Daily\",\"title\":\"Elon Musk Announces New Tesla Model\",\"url\":\"https://example.com/article\"},\"schema\":{\"properties\":{\"description\":{\"description\":\"A brief description or excerpt from the article\",\"type\":\"string\"},\"publishedAt\":{\"description\":\"The publication date and time of the article\",\"format\":\"date-time\",\"type\":\"string\"},\"source\":{\"description\":\"The news outlet that published the article\",\"type\":\"string\"},\"title\":{\"description\":\"The title of the news article\",\"type\":\"string\"},\"url\":{\"description\":\"The URL to the original news article\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with a random news article\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_random_article","name__orig":"get_random_article","Name":"GetRandomArticle","name_":"get_random_article","name-":"get-random-article","NAME":"GET_RANDOM_ARTICLE","index$":0}, {"active":true,"entity":"get_random_article","key$":"BasicGetRandomArticleFlow","kind":"basic","name":"BasicGetRandomArticleFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_random_article_ref01","srcdatavar":"get_random_article_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_random_article_ref01"}}],"index$":0}]}, 'GetRandomArticle')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_random_article_ref01_data = Object.values(setup.data.existing.get_random_article)[0] as any

    // LOAD
    const get_random_article_ref01_ent = client.GetRandomArticle()
    const get_random_article_ref01_match_dt0: any = {}
    const get_random_article_ref01_data_dt0 = (await get_random_article_ref01_ent.load(get_random_article_ref01_match_dt0)).data()
    assert(null != get_random_article_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_random_article/GetRandomArticleTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ElonmuskapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_random_article01','get_random_article02','get_random_article03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ELONMUSKAPI_TEST_GET_RANDOM_ARTICLE_ENTID': idmap,
    'ELONMUSKAPI_TEST_LIVE': 'FALSE',
    'ELONMUSKAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ELONMUSKAPI_TEST_GET_RANDOM_ARTICLE_ENTID']

  const live = 'TRUE' === env.ELONMUSKAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ELONMUSKAPI_TEST_GET_RANDOM_ARTICLE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ElonmuskapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ELONMUSKAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
