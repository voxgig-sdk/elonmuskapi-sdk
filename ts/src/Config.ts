
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Elonmuskapi',
        slug: "elonmuskapi",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://elonmu.sh",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_random_article: {
      },

    }
  }


  entity = {
    "get_random_article": {
      "fields": [
        {
          "name": "description",
          "short": "A brief description or excerpt from the article",
          "type": "`$STRING`"
        },
        {
          "name": "publishedAt",
          "short": "The publication date and time of the article",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "The news outlet that published the article",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "The title of the news article",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "The URL to the original news article",
          "type": "`$STRING`"
        }
      ],
      "name": "get_random_article",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "parts": [],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

