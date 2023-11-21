import{_ as e,o as a,c as s,Q as t}from"./chunks/framework.a0a3e5fa.js";const y=JSON.parse('{"title":"Rate Limits","description":"","frontmatter":{},"headers":[],"relativePath":"guides/concepts/rate-limits.md","filePath":"guides/concepts/rate-limits.md","lastUpdated":1700555334000}'),n={name:"guides/concepts/rate-limits.md"},l=t(`<h1 id="rate-limits" tabindex="-1">Rate Limits <a class="header-anchor" href="#rate-limits" aria-label="Permalink to &quot;Rate Limits&quot;">​</a></h1><p>Rate limits are applied to every API request and allow users to make a finite number of requests within a set time period. Rate limits apply to both <a href="./../auth/oauth.html">OAuth access tokens</a> and <a href="./../auth/personal-access-token.html">Personal Access Tokens</a>. Users have separate limits for each team they are a member of.</p><p>API v2 rate limits are applied differently to v1. If you have an existing v1 integration you may need to account for these changes. See <a href="#application-examples">Application Examples</a> for more details.</p><h2 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;">​</a></h2><p>When a request is made, rate limit details are returned in the response headers:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">HTTP/1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">204</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Content</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Limit:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Remaining:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">187</span></span></code></pre></div><p>Rate limits may differ depending on the endpoint, with some being lower than others. Each time a request is made, <code>X-RateLimit-Remaining</code> decreases until it reaches <code>0</code>.</p><h2 id="limit-exceeded" tabindex="-1">Limit Exceeded <a class="header-anchor" href="#limit-exceeded" aria-label="Permalink to &quot;Limit Exceeded&quot;">​</a></h2><p>Once the rate limit has been reached, subsequent requests return a <code>429 Too Many Requests</code> response with additional headers:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">HTTP/1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">429</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Too</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Many</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Requests</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Limit:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Remaining:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">Retry-After:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">47</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Reset:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1693220870</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">Header</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Retry-After</code></td><td style="text-align:left;">The number of seconds remaining before the rate limit resets.</td></tr><tr><td style="text-align:left;"><code>X-RateLimit-Reset</code></td><td style="text-align:left;">The timestamp of when the rate limit resets.</td></tr></tbody></table><h2 id="application-examples" tabindex="-1">Application Examples <a class="header-anchor" href="#application-examples" aria-label="Permalink to &quot;Application Examples&quot;">​</a></h2><p>A single rate limit is shared by all tokens created by or for a user on a single team. The following are common scenarios:</p><ul><li>A user has three Personal Access Tokens for one team, each token shares the same rate limit.</li><li>A user has a Personal Access Token and an OAuth access token for one team, each token shares the same rate limit.</li><li>A user has a Personal Access Token for team A and another Personal Access Token for team B, each token has a separate rate limit.</li></ul>`,14),o=[l];function i(r,p,c,d,h,m){return a(),s("div",null,o)}const u=e(n,[["render",i]]);export{y as __pageData,u as default};
