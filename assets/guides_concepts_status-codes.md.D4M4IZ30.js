import{_ as e,c as a,o as t,a4 as s}from"./chunks/framework.SRkspo3m.js";const b=JSON.parse('{"title":"Status Codes","description":"","frontmatter":{"outline":3},"headers":[],"relativePath":"guides/concepts/status-codes.md","filePath":"guides/concepts/status-codes.md","lastUpdated":1714575600000}'),r={name:"guides/concepts/status-codes.md"},o=s('<h1 id="status-codes" tabindex="-1">Status Codes <a class="header-anchor" href="#status-codes" aria-label="Permalink to &quot;Status Codes&quot;">​</a></h1><p>The Amiqus API returns standard HTTP status codes in response to all requests. Amiqus API follows common principles when selecting a response code, and can be used by integrators to determine what actions to take. Common status codes used by API v2 include:</p><h3 id="_200-ok" tabindex="-1">200 OK <a class="header-anchor" href="#_200-ok" aria-label="Permalink to &quot;200 OK&quot;">​</a></h3><p>The request was successful and the response contains a payload. This is used for a range of operations including <code>GET</code>, <code>PUT</code> and <code>PATCH</code>.</p><h3 id="_201-created" tabindex="-1">201 Created <a class="header-anchor" href="#_201-created" aria-label="Permalink to &quot;201 Created&quot;">​</a></h3><p>The request was successful and a new resource was created successfully. This is typically used with <code>POST</code> requests. However, there are some endpoints where this can be be returned by a <code>PUT</code> or <code>PATCH</code> operation.</p><p>For example, <a href="/aqid/api-reference.html#tag/Client-Assignees/operation/patch-clients-id-assignees" target="_blank">Update assignees for a client</a> returns <code>201 Created</code> if new assignments are created, otherwise <code>200 OK</code> when no changes were made.</p><h3 id="_204-no-content" tabindex="-1">204 No Content <a class="header-anchor" href="#_204-no-content" aria-label="Permalink to &quot;204 No Content&quot;">​</a></h3><p>The request was successful but the response does not contain a payload. <code>DELETE</code> operations will typically return this status when the resource was deleted. Other operations like <a href="/aqid/api-reference.html#tag/Service-Status/operation/get-status" target="_blank">Check service status</a> also return this status when a response payload is unnecessary.</p><h3 id="_401-unauthorized" tabindex="-1">401 Unauthorized <a class="header-anchor" href="#_401-unauthorized" aria-label="Permalink to &quot;401 Unauthorized&quot;">​</a></h3><p>The request was unsuccessful and the authorisation credentials could not be authenticated. Check the access token is valid and is associated with the appropriate team.</p><h3 id="_403-forbidden" tabindex="-1">403 Forbidden <a class="header-anchor" href="#_403-forbidden" aria-label="Permalink to &quot;403 Forbidden&quot;">​</a></h3><p>The request was unsuccessful but the authorisation credentials were authenticated. Check that the access token&#39;s user has appropriate permissions to access the requested resource or perform the action.</p><h3 id="_404-not-found" tabindex="-1">404 Not Found <a class="header-anchor" href="#_404-not-found" aria-label="Permalink to &quot;404 Not Found&quot;">​</a></h3><p>The requested resource is not found. Check the request information is correct or the resource may not exist.</p><h3 id="_413-request-entity-too-large" tabindex="-1">413 Request Entity Too Large <a class="header-anchor" href="#_413-request-entity-too-large" aria-label="Permalink to &quot;413 Request Entity Too Large&quot;">​</a></h3><p>This indicates that the request data is too large. This is typically seen with the <a href="/aqid/api-reference.html#tag/Other-Resources/operation/post-attachments" target="_blank">Create an attachment</a> endpoint.</p><h3 id="_422-unprocessable-content" tabindex="-1">422 Unprocessable Content <a class="header-anchor" href="#_422-unprocessable-content" aria-label="Permalink to &quot;422 Unprocessable Content&quot;">​</a></h3><p>This suggests that the request payload body and/or query parameters may contain missing fields or invalid data and that the request has failed validation.</p><h3 id="_429-too-many-requests" tabindex="-1">429 Too Many Requests <a class="header-anchor" href="#_429-too-many-requests" aria-label="Permalink to &quot;429 Too Many Requests&quot;">​</a></h3><p>Rate limit exceeded. See <a href="./rate-limits.html">Rate Limits</a> guide for more information.</p><h3 id="_500-internal-server-error" tabindex="-1">500 Internal Server Error <a class="header-anchor" href="#_500-internal-server-error" aria-label="Permalink to &quot;500 Internal Server Error&quot;">​</a></h3><p>An unexpected error has occurred. This error is generic and could be caused by any one of a number of issues. It&#39;s possible there may be an error in the request data, either query parameters or request body, so check the payload first. Please report these errors to <a href="mailto:developers@amiqus.co" target="_blank" rel="noreferrer">developers@amiqus.co</a> so we can investigate further.</p><h3 id="_503-service-unavailable" tabindex="-1">503 Service Unavailable <a class="header-anchor" href="#_503-service-unavailable" aria-label="Permalink to &quot;503 Service Unavailable&quot;">​</a></h3><p>Application is down for maintenance. Maintenance outages are rare and are communicated in advance unless responding to a critical emergency.</p>',25),n=[o];function i(c,d,h,u,l,p){return t(),a("div",null,n)}const f=e(r,[["render",i]]);export{b as __pageData,f as default};
