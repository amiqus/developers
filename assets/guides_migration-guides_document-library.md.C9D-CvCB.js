import{_ as s,c as a,o as n,a3 as o}from"./chunks/framework.BG__5Sii.js";const d=JSON.parse(`{"title":"Endpoints for managing a team's document library files","description":"","frontmatter":{"next":false},"headers":[],"relativePath":"guides/migration-guides/document-library.md","filePath":"guides/migration-guides/document-library.md","lastUpdated":1743166461000}`),l={name:"guides/migration-guides/document-library.md"},p=o(`<h1 id="endpoints-for-managing-a-team-s-document-library-files" tabindex="-1">Endpoints for managing a team&#39;s document library files <a class="header-anchor" href="#endpoints-for-managing-a-team-s-document-library-files" aria-label="Permalink to &quot;Endpoints for managing a team&#39;s document library files&quot;">​</a></h1><h2 id="list-all-document-library-files" tabindex="-1">List all document library files <a class="header-anchor" href="#list-all-document-library-files" aria-label="Permalink to &quot;List all document library files&quot;">​</a></h2><table tabindex="0"><thead><tr><th>v1</th><th>GET</th><th><a href="https://id.amiqus.co/api/team/documents" target="_blank" rel="noreferrer">https://id.amiqus.co/api/team/documents</a></th></tr></thead><tbody><tr><td>v2</td><td>GET</td><td><a href="https://developers.amiqus.co/aqid/api-reference.html#operation/get-documents" target="_blank" rel="noreferrer"> https://id.amiqus.co/api/v2/documents</a></td></tr></tbody></table><p>“List all document library files” endpoint has been replaced with “Documents → List all documents”</p><p><u><strong>Request:</strong></u></p><p><strong>Added</strong></p><ul><li>optional expandable property <code>attachment</code></li><li><code>enabled</code> - returns a list of a team&#39;s enabled document library files (i.e. not in &quot;draft&quot; status).</li></ul><p><u><strong>Response:</strong></u></p><p><strong>Added</strong></p><ul><li><code>object</code> with type of <code>paginated_list</code></li><li><code>data.*.object</code> with type of <code>document</code></li><li><code>is_enabled</code></li></ul><p><strong>Changed</strong></p><ul><li><code>attachment_id</code> is replaced with <code>data.*.object</code> with type of <code>attachment</code> (where property is expanded) or <code>attachment</code> (which will contain the attachment’s <code>id</code> as an integer).</li></ul><p><strong>Removed</strong></p><ul><li><code>status</code></li><li><code>active</code></li><li><code>file</code></li></ul><p><strong>Note:</strong> The endpoint <strong>List all enabled document library files</strong> has been deprecated and replaced by an optional query property enabled mentioned above. This will return a filtered list of the team’s enabled document library files.</p><p>Below are examples of responses:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-UDEWD" id="tab-GVqfuvU" checked><label for="tab-GVqfuvU">v1</label><input type="radio" name="group-UDEWD" id="tab-S8OMOYU"><label for="tab-S8OMOYU">v2</label></div><div class="blocks"><div class="language-json active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Guide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Guides for Team</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Live</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-08-23T15:30:59+00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">created_by</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-08-23T15:32:38+00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">updated_by</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">David Adams</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">attachment_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">                &quot;</span><span style="color:#F78C6C;">av_status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">CLEAN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                &quot;</span><span style="color:#F78C6C;">original</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Team Guides docs.pdf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                &quot;</span><span style="color:#F78C6C;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">application/pdf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                &quot;</span><span style="color:#F78C6C;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7234303</span></span>
<span class="line"><span style="color:#89DDFF;">            },</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">                &quot;</span><span style="color:#F78C6C;">download</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">https://amiqusid.test/team/attachments/1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            }</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    ],</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">meta</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#FFCB6B;">pagination</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">per_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">current_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">total_pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {}</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">paginated_list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">document</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Guide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Guides for Team</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">is_enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">attachment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-08-23T15:30:59Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-08-23T15:32:38Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    ],</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">current_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">total_pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><div class="no-title"><div class="info custom-block"><p class="custom-block-title">INFO</p><p>📌 <strong>Please refer to <a href="https://developers.amiqus.co/aqid/api-reference.html#operation/get-documents" target="_blank" rel="noreferrer">List all documents</a> for more information.</strong></p></div></div>`,18),t=[p];function e(F,c,r,D,y,i){return n(),a("div",null,t)}const q=s(l,[["render",e]]);export{d as __pageData,q as default};
