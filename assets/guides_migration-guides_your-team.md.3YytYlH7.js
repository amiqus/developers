import{_ as s,c as a,o as n,a4 as o}from"./chunks/framework.CLN81aYI.js";const q=JSON.parse('{"title":"Endpoints for your team information","description":"","frontmatter":{},"headers":[],"relativePath":"guides/migration-guides/your-team.md","filePath":"guides/migration-guides/your-team.md","lastUpdated":1714038612000}'),l={name:"guides/migration-guides/your-team.md"},p=o(`<h1 id="endpoints-for-your-team-information" tabindex="-1">Endpoints for your team information <a class="header-anchor" href="#endpoints-for-your-team-information" aria-label="Permalink to &quot;Endpoints for your team information&quot;">​</a></h1><h2 id="list-all-team-members" tabindex="-1">List all team members <a class="header-anchor" href="#list-all-team-members" aria-label="Permalink to &quot;List all team members&quot;">​</a></h2><table><thead><tr><th>v1</th><th>GET</th><th><a href="https://id.amiqus.co/api/team/members" target="_blank" rel="noreferrer">https://id.amiqus.co/api/team/members</a></th></tr></thead><tbody><tr><td>v2</td><td>GET</td><td><a href="https://developers.amiqus.co/aqid/api-reference.html#tag/Your-Team/operation/get-team-members" target="_blank" rel="noreferrer">https://id.amiqus.co/api/v2/team/members</a></td></tr></tbody></table><p><strong>Added:</strong></p><ul><li><code>object</code> of type <code>paginated_list</code></li><li><code>object</code> of type <code>team_member</code></li></ul><p><strong>Changed:</strong></p><ul><li>Enum values for <code>role</code> have changed: <code>guest</code> is now replaced with <code>read-only</code>. Two additional roles are available: <code>assigned-only</code> <code>assumed</code>.</li></ul><p><strong>Removed:</strong></p><ul><li><code>two_factor_enabled</code></li></ul><p>Below are examples of responses:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-JnSnV" id="tab-loJ1Nay" checked="checked"><label for="tab-loJ1Nay">v1</label><input type="radio" name="group-JnSnV" id="tab-rPpRMcP"><label for="tab-rPpRMcP">v2</label></div><div class="blocks"><div class="language-json active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">David Adams</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">david@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">two_factor_enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">owner</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        },</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Dale Patel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">dp@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">two_factor_enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">member</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        },</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Henry Watson</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">henry@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">two_factor_enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">guest</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        },</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Yvonne Ross</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">yr@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">two_factor_enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">assigned-only</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    ],</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">meta</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#FFCB6B;">pagination</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">per_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">current_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">total_pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#F78C6C;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {}</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">paginated_list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">team_member</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">David Adams</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">david@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">owner</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        },</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">team_member</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Dale Patel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">dp@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">member</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        },</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">team_member</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Henry Watson</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">henry@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">read-only</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        },</span></span>
<span class="line"><span style="color:#89DDFF;">        {</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">team_member</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Yvonne Ross</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">yr@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">            &quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">assigned-only</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">    ],</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">total</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">current_page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">total_pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><div class="no-title"><div class="info custom-block"><p class="custom-block-title">INFO</p><p>📌 <strong>Please refer to <a href="https://developers.amiqus.co/aqid/api-reference.html#tag/Your-Team/operation/get-team-members" target="_blank" rel="noreferrer">List all team members</a> for more information.</strong></p></div></div>`,12),e=[p];function t(F,D,c,r,y,i){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{q as __pageData,d as default};
