This is an overview of some of the key aspects that apply universally to all endpoints of the Amiqus API.

## Rate Limits
Rate limits are applied to every API request and allow users to make a finite number of requests within a set time period. Rate limits apply to both [OAuth access tokens](#tag/Getting-Started/OAuth-2.0) and [Personal Access Tokens](#tag/Getting-Started/Personal-Access-Tokens). Users have separate limits for each team they are a member of.

API v2 rate limits take a different approach to v1. If you have an existing v1 integration you may need to account for these changes.

**Common scenarios:**
- A user has 3 x Personal Access Tokens for one team, each token shares one rate limit.
- A user has a Personal Access Token and an OAuth access token for one team, each token shares one rate limit.
- A user has a Personal Access Token for team A and another Personal Access Token for team B, each token has a separate rate limit.

When a request is made with a valid token, rate limit details are returned in the response headers. For example:
- `X-RateLimit-Limit: 200`
- `X-RateLimit-Remaining: 187`

Rate limits may differ depending on the endpoint, with some far lower than others. As requests are made, `X-RateLimit-Remaining` decreases until it reaches `0`. Requests made after this point return a `429 Too Many Requests` response status and the following additional headers:

| Header  | Description  |
| :--- | :--- |
|`Retry-After`| The number of seconds remaining before the rate limit resets. |
|`X-RateLimit-Reset`| The timestamp of when the rate limit resets. |

## Pagination
"List all" endpoints typically return a paginated list object, which contains the following properties:

```json
{
    "object": "paginated_list",
    "data": [...],
    "total": 2,
    "count": 2,
    "limit": 25,
    "current_page": 1,
    "total_pages": 1,
    "links": null
}
```
Each paginated request will contain the following information:

| Field  | Description  |
| :--- | :--- |
|`object`| The paginated list object identifier (`paginated_list`). |
|`data`| An array of objects of the resource being listed. |
|`total`| The total number of results available for the resource being listed (matching any applied filters). |
|`count`| The number of results present in the response. |
|`limit` | The largest number of results that can be present in the response (default: `25`). See [increase page limit](#increase-page-limit). |
|`current_page`| The current page of results. |
|`total_pages`| The total number of pages of results. |
|`links`| Links to the next and previous pages of results. See [page links](#page-links). |

### Page links
Where there are two or more pages of results, the pagination object's `links` property contains links to the next and previous pages of results as you paginate through results:

```
"links": {
    "next": "https://id.amiqus.co/api/v2/clients?page=3",
    "previous": "https://id.amiqus.co/api/v2/clients?page=2"
}
```

Any query parameters present on the current request are also applied to page links, making it easy to navigate between results.

### Increase page limit

The number of results per page can be increased or decreased using the `limit` query parameter. All endpoints have minimum and maximum page limits, which by default are `1..100`.

**Example paging query parameters:**

```
https://id.amiqus.co/api/v2/clients?limit=1
```

```
https://id.amiqus.co/api/v2/clients?limit=100&page=2
```

## Expand
The `expand` query parameter is available on a several endpoints to enable retrieval of nested resources or additional data. This can help prevent having to make subsequent requests to retrieve the data.

Expandable properties are collapsed by default to keep responses concise and efficient. See the [API Reference](https://developers.amiqus.co/aqid/api-reference.html) for information on where this is available and what data will be provided.

### Requests
The `expand` property should be included as a query parameter in the API request url. The value of this property typically represents the resource that you want to expand. For example to expand the `check` property for check step types in [List all steps for a record](https://developers.amiqus.co/aqid/api-reference.html#tag/Records/operation/get-records-id-steps), the GET request url should be:

```
https://id.amiqus.co/api/v2/records/123/steps?expand=check
```

Where available, multiple resources can be expanded using a comma separated list. For example:

```
https://id.amiqus.co/api/v2/records/123/steps?expand=check,form,document
```

It is not possible to expand properties within expanded data.

### Responses

The value of an expandable property both in its collapsed and expanded state depends on the resource. A typical expandable property representing a single resource will be be of the following types:

| Value | Description |
| --- | --- |
| `null`| No resource for this property. Value is the same either collapsed or expanded. |
| `integer` | The resource ID when collapsed. |
| `object` | The full resource when expanded. |

Some expandable properties may contain multiple resources. When collapsed, these are represented as an **array of integers** and when expanded, an **array of objects**. An example of this is the `attachment` property in [List all documents](https://developers.amiqus.co/aqid/api-reference.html#tag/Documents/operation/get-documents).

Other properties may be more than one type when expanded depending on the parent resource. In [List all files for a client](https://developers.amiqus.co/aqid/api-reference.html#tag/Clients/operation/get-clients-id-files), `source` can be a `check`, `client`, `form` or `record_document` object when expanded. When collapsed, this is represented as an object containing the resource ID and object type.


#### Expand examples

A document object with no associated attachment:
```json
{
    "object": "document",
    "id": 3342,
    "name": "Non-disclosure agreement",
    "description": "Generic non-disclosure agreement",
    "is_enabled": true,
    "attachment": null,
    "created_at": "2022-08-17T13:56:05Z",
    "updated_at": "2022-08-17T13:56:05Z"
}
```

A document object with an associated attachment in its collapsed state:

```json
{
    "object": "document",
    "id": 3342,
    "name": "Non-disclosure agreement",
    "description": "Generic non-disclosure agreement",
    "is_enabled": true,
    "attachment": 43375,
    "created_at": "2022-08-17T13:56:05Z",
    "updated_at": "2022-08-17T13:56:05Z"
}
```

A document object with an associated attachment in its expanded state:

```json
{
    "object": "document",
    "id": 3342,
    "name": "Non-disclosure agreement",
    "description": "Generic non-disclosure agreement",
    "is_enabled": true,
    "attachment": {
        "object": "attachment",
        "id": 43375,
        "name": "367452af-3931-4207-851a-adda324cd3d6.pdf",
        "original": "NDA-final.pdf",
        "type": "application/pdf",
        "size": 272534,
        "av_status": "clean",
        "created_at": "2022-08-17T13:56:05Z",
        "updated_at": "2022-08-17T13:56:05Z"
    },
    "created_at": "2022-08-17T13:56:05Z",
    "updated_at": "2022-08-17T13:56:05Z"
}
```

Integrators should be mindful of the impact to response payload size and response times where the `expand` property is used on indexes with a large number of resources.

## Status Codes
The Amiqus API returns standard HTTP status codes in response to all requests. Amiqus API follows common principles when selecting a response code, and can be used by integrators to determine what actions to take. Common status codes used by API v2 include:

### 200 OK
The request was successful and the response contains a payload. This is used for a range of operations including `GET`, `PUT` and `PATCH`.

### 201 Created
The request was successful and a new resource was created successfully. This is typically used with `POST` requests. However, there are some endpoints where this can be be returned by a `PUT` or `PATCH` operation.

For example, [Update assignees for a client](https://developers.amiqus.co/aqid/api-reference.html#tag/Client-Assignees/operation/patch-clients-id-assignees) returns `201 Created` if new assignments are created, otherwise `200 OK` when no changes were made.

### 204 No Content
The request was successful but the response does not contain a payload. `DELETE` operations will typically return this status when the resource was deleted. Other operations like [Check service status](https://developers.amiqus.co/aqid/api-reference.html#tag/Service-Status/operation/get-status) also return this status when a response payload is unnecessary.

### 401 Unauthorized
The request was unsuccessful and the authorisation credentials could not be authenticated. Check the access token is valid and is associated with the appropriate team.

### 403 Forbidden
The request was unsuccessful but the authorisation credentials were authenticated. Check that the access token's user has appropriate permissions to access the requested resource or perform the action.

### 404 Not Found
The requested resource is not found. Check the request information is correct or the resource may not exist.

### 413 Request Entity Too Large
This indicates that the request data is too large. This is typically seen with the [Create an attachment](https://developers.amiqus.co/aqid/api-reference.html#tag/Other-Resources/operation/post-attachments) endpoint.

### 422 Unprocessable Content
This suggests that the request payload body and/or query parameters may contain missing fields or invalid data and that the request has failed validation.

### 429 Too Many Requests
Rate limit exceeded. See [Rate Limits](#tag/Global-Functionality/Rate-Limits) guide for more information.
