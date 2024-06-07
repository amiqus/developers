import{_ as s,c as a,o,a4 as n}from"./chunks/framework.SRkspo3m.js";const d=JSON.parse('{"title":"Endpoints for current status","description":"","frontmatter":{},"headers":[],"relativePath":"guides/migration-guides/current-status.md","filePath":"guides/migration-guides/current-status.md","lastUpdated":1717749724000}'),l={name:"guides/migration-guides/current-status.md"},p=n(`<h1 id="endpoints-for-current-status" tabindex="-1">Endpoints for current status <a class="header-anchor" href="#endpoints-for-current-status" aria-label="Permalink to &quot;Endpoints for current status&quot;">​</a></h1><h2 id="get-current-user" tabindex="-1">Get current user <a class="header-anchor" href="#get-current-user" aria-label="Permalink to &quot;Get current user&quot;">​</a></h2><table><thead><tr><th>v1</th><th>GET</th><th><a href="https://id.amiqus.co/api/users/me" target="_blank" rel="noreferrer">https://id.amiqus.co/api/users/me</a></th></tr></thead><tbody><tr><td>v2</td><td>GET</td><td><a href="https://developers.amiqus.co/aqid/api-reference.html#operation/get-me" target="_blank" rel="noreferrer">https://id.amiqus.co/api/v2/me</a></td></tr></tbody></table><p>“Get current user” endpoint has been replaced with “User account → Retrieve user account”</p><p><strong>Added</strong></p><ul><li><code>object</code> the value of this property is always <code>&quot;user&quot;</code> indicating this is a user object</li><li><code>is_verified</code></li><li><code>is_disabled</code></li></ul><p><strong>Removed</strong></p><ul><li><code>email_change_to</code></li><li><code>is_assumed</code></li><li><code>verified</code></li><li><code>disabled</code></li><li><code>has_access</code></li><li><code>is_admin</code></li><li><code>last_notification_open_at</code></li><li><code>two_factor_enabled</code></li><li><code>role</code></li></ul><p><strong>Note</strong></p><p>Information previously contained in the <code>role</code> or <code>is_admin</code> fields can now be found in <a href="https://developers.amiqus.co/aqid/api-reference.html#operation/get-team-me" target="_blank" rel="noreferrer">Retrieve team membership</a>.</p><div class="no-title"><div class="info custom-block"><p class="custom-block-title">INFO</p><p>📌 <strong>Please refer to <a href="https://developers.amiqus.co/aqid/api-reference.html#operation/get-me" target="_blank" rel="noreferrer">Retrieve user account</a> for more information.</strong></p></div></div><p>Below are examples of responses:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-srmzf" id="tab-M_CfsYB" checked="checked"><label for="tab-M_CfsYB">v1</label><input type="radio" name="group-srmzf" id="tab-s8Vlpeh"><label for="tab-s8Vlpeh">v2</label></div><div class="blocks"><div class="language-json active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Helena Harrison</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">owner@amiqus.co</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">email_change_to</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">is_assumed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">verified</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">has_access</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">is_admin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">owner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">last_notification_open_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2022-03-23T10:28:38+00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">two_factor_enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2022-02-02T16:37:30+00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2022-02-02T16:39:44+00:00</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Helena Harrison</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">owner@amiqus.co</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">is_verified</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">is_disabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2022-02-02T16:37:30Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2022-02-02T16:39:44Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><h2 id="get-current-team" tabindex="-1">Get current team <a class="header-anchor" href="#get-current-team" aria-label="Permalink to &quot;Get current team&quot;">​</a></h2><table><thead><tr><th>v1</th><th>GET</th><th><a href="https://id.amiqus.co/api/team/current" target="_blank" rel="noreferrer">https://id.amiqus.co/api/team/current</a></th></tr></thead><tbody><tr><td>v2</td><td>GET</td><td><a href="https://developers.amiqus.co/aqid/api-reference.html#operation/get-team" target="_blank" rel="noreferrer">https://id.amiqus.co/api/v2/team</a></td></tr></tbody></table><p>“Get current team” endpoint has been replaced with “Your Team → Retrieve current team”.</p><p><strong>Added:</strong></p><ul><li><code>object</code> this is always of type <code>team</code></li><li><code>identifier</code></li><li><code>is_support_enabled</code></li><li><code>limit</code></li><li><code>archived_at</code></li></ul><p><strong>Removed:</strong></p><ul><li><code>credits</code></li><li><code>low_credits</code></li><li><code>organisation_group</code></li><li><code>account_credits</code></li><li><code>available_credits</code></li><li><code>archived</code> (see <code>archived_at</code> for an alternative)</li><li><code>members_count</code></li><li><code>tier_name_short</code></li><li><code>using_sso</code></li><li><code>can_enable_sso</code></li><li><code>charged_per_seat</code></li><li><code>features</code></li><li><code>feature_badges</code></li><li><code>integrations</code></li><li><code>support_access</code></li><li><code>live_at</code></li><li><code>archived_at</code></li><li><code>logo</code></li><li><code>object</code> of type <code>pivot</code> (and nested properties: <code>user_id</code>, <code>team_id</code>, <code>role</code>, <code>default</code>, <code>last_activity_at</code>)</li></ul><p>Below are examples of responses:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-rF_-C" id="tab-E2pgpgk" checked="checked"><label for="tab-E2pgpgk">v1</label><input type="radio" name="group-rF_-C" id="tab-m99KGyH"><label for="tab-m99KGyH">v2</label></div><div class="blocks"><div class="language-json active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">uuid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">1234-22re-555yyy-09nn-87unnn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">ABC Ltd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">33ff-gg67-hh99900</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">organisation_group</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">234opo-45dfgf-32r234gdfg-sdfds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">credits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 472</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">credits_in_use</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">account_credits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 472</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">available_credits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 472</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">archived</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">contact</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">jane@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">telephone</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">02990123123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">members_count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">support_access</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">tier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">enterprise_2021</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">tier_name_short</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">enterprise_2021</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-03-23T11:00:01+00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-08-03T16:24:13+00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">live_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">using_sso</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">can_enable_sso</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">charged_per_seat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">can_use_assigned_only</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">features</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [],</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">feature_badges</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [],</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">integrations</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> []</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">team</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">33ff-gg67-hh99900</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">uuid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">1234-22re-555yyy-09nn-87unnn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">ABC Ltd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">contact</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">jane@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">telephone</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">02990123123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">tier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">enterprise_2021</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">is_support_enabled</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> false,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-03-23T11:00:01Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2023-08-03T16:24:13Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    &quot;</span><span style="color:#C792EA;">archived_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><div class="no-title"><div class="info custom-block"><p class="custom-block-title">INFO</p><p>📌 <strong>Please refer to <a href="https://developers.amiqus.co/aqid/api-reference.html#operation/get-team" target="_blank" rel="noreferrer">Retrieve current team</a> for more information.</strong></p></div></div>`,23),e=[p];function t(c,r,D,F,y,i){return o(),a("div",null,e)}const q=s(l,[["render",t]]);export{d as __pageData,q as default};
