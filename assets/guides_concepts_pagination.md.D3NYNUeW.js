import{_ as s,c as a,o as e,a4 as t}from"./chunks/framework.CLN81aYI.js";const u=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"guides/concepts/pagination.md","filePath":"guides/concepts/pagination.md","lastUpdated":1712664242000}'),n={name:"guides/concepts/pagination.md"},l=t(`<h1 id="pagination" tabindex="-1">Pagination <a class="header-anchor" href="#pagination" aria-label="Permalink to &quot;Pagination&quot;">​</a></h1><p>&quot;List all&quot; endpoints typically return a paginated list object, which contains the following properties:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">paginated_list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span><span style="color:#BABED8;">...</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">current_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">total_pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Each paginated request will contain the following information:</p><table><thead><tr><th style="text-align:left;">Field</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">The paginated list object identifier (<code>paginated_list</code>).</td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;">An array of objects of the resource being listed.</td></tr><tr><td style="text-align:left;"><code>total</code></td><td style="text-align:left;">The total number of results available for the resource being listed including any applied filters.</td></tr><tr><td style="text-align:left;"><code>count</code></td><td style="text-align:left;">The number of results present in the response.</td></tr><tr><td style="text-align:left;"><code>limit</code></td><td style="text-align:left;">The largest number of results that can be present in the response. See <a href="#increase-page-limit">increase page limit</a>.</td></tr><tr><td style="text-align:left;"><code>current_page</code></td><td style="text-align:left;">The current page of results.</td></tr><tr><td style="text-align:left;"><code>total_pages</code></td><td style="text-align:left;">The total number of pages of results.</td></tr><tr><td style="text-align:left;"><code>links</code></td><td style="text-align:left;">Links to the next and previous pages of results. See <a href="#page-links">page links</a>.</td></tr></tbody></table><h2 id="page-links" tabindex="-1">Page links <a class="header-anchor" href="#page-links" aria-label="Permalink to &quot;Page links&quot;">​</a></h2><p>Where there are two or more pages of results, the pagination object&#39;s <code>links</code> property contains links to the next and previous pages of results as you paginate through results:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#FFCB6B;">next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">https://id.amiqus.co/api/v2/clients?page=3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#FFCB6B;">previous</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">https://id.amiqus.co/api/v2/clients?page=2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Any query parameters present on the current request are also applied to page links, making it easy to navigate between results. When there is only one page of results, <code>links</code> is <code>null</code>.</p><h2 id="increase-page-limit" tabindex="-1">Increase page limit <a class="header-anchor" href="#increase-page-limit" aria-label="Permalink to &quot;Increase page limit&quot;">​</a></h2><p>The number of results per page can be increased or decreased using the <code>limit</code> query parameter. All endpoints have minimum and maximum page limits, which by default are <code>1..100</code>. Some endpoints may have different limits.</p><p><strong>Example paging query parameters:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span>https://id.amiqus.co/api/v2/clients?limit=1</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span>https://id.amiqus.co/api/v2/clients?limit=100&amp;page=2</span></span></code></pre></div>`,14),o=[l];function p(i,c,r,d,F,y){return e(),a("div",null,o)}const g=s(n,[["render",p]]);export{u as __pageData,g as default};
