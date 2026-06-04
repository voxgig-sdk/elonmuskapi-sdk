# Elonmuskapi SDK

Fetch a random news article mentioning Elon Musk

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About ElonMuskAPI

ElonMuskAPI is a small free public API that returns a random recent news article mentioning Elon Musk. It is maintained by [nickatnight](https://github.com/nickatnight/elonmu.sh) and described by its author as "MaaS: Musk as a Service" — a hobby project built on Node.js, TypeScript, and Express, deployed on DigitalOcean App Platform.

Under the hood the service wraps [NewsAPI](https://newsapi.org/) and picks one matching article per request, so coverage spans whichever outlets NewsAPI indexes.

What you get from the API:

- A single random article per call from `GET /api`
- Fields observed in the success response: `source`, `title`, `description`, `url`, `urlImage`, and `publishDate` (ISO 8601 timestamp)
- A `400` response with an `error` message if the upstream NewsAPI call fails

Operational notes: the endpoint is unauthenticated and free to use, CORS is disabled per the freepublicapis.com listing, and there is no documented rate limit — be polite, since the service ultimately consumes a third-party news feed.

## Try it

**TypeScript**
```bash
npm install elonmuskapi
```

**Python**
```bash
pip install elonmuskapi-sdk
```

**PHP**
```bash
composer require voxgig/elonmuskapi-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/elonmuskapi-sdk/go
```

**Ruby**
```bash
gem install elonmuskapi-sdk
```

**Lua**
```bash
luarocks install elonmuskapi-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ElonmuskapiSDK } from 'elonmuskapi'

const client = new ElonmuskapiSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o elonmuskapi-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "elonmuskapi": {
      "command": "/abs/path/to/elonmuskapi-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetRandomArticle** | Returns a single random news article mentioning Elon Musk via `GET /api`, with fields including `source`, `title`, `description`, `url`, `urlImage`, and `publishDate`. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from elonmuskapi_sdk import ElonmuskapiSDK

client = ElonmuskapiSDK({})


# Load a specific getrandomarticle
getrandomarticle, err = client.GetRandomArticle(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'elonmuskapi_sdk.php';

$client = new ElonmuskapiSDK([]);


// Load a specific getrandomarticle
[$getrandomarticle, $err] = $client->GetRandomArticle(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/elonmuskapi-sdk/go"

client := sdk.NewElonmuskapiSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Elonmuskapi_sdk"

client = ElonmuskapiSDK.new({})


# Load a specific getrandomarticle
getrandomarticle, err = client.GetRandomArticle(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("elonmuskapi_sdk")

local client = sdk.new({})


-- Load a specific getrandomarticle
local getrandomarticle, err = client:GetRandomArticle(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ElonmuskapiSDK.test()
const result = await client.GetRandomArticle().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ElonmuskapiSDK.test(None, None)
result, err = client.GetRandomArticle(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ElonmuskapiSDK::test(null, null);
[$result, $err] = $client->GetRandomArticle(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetRandomArticle(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ElonmuskapiSDK.test(nil, nil)
result, err = client.GetRandomArticle(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetRandomArticle(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the ElonMuskAPI

- Upstream: [https://elonmu.sh](https://elonmu.sh)
- API docs: [https://github.com/nickatnight/elonmu.sh](https://github.com/nickatnight/elonmu.sh)

- The elonmu.sh site shows a "© 2024 elonmu.sh All rights reserved" notice on the homepage.
- The [nickatnight/elonmu.sh](https://github.com/nickatnight/elonmu.sh) repository does not declare an explicit open-source licence.
- Article content is sourced from third-party news outlets via NewsAPI, so the underlying articles remain subject to their original publishers' terms.
- Treat the service as a free hobby endpoint and check with the maintainer before relying on it for production use.

---

Generated from the ElonMuskAPI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
