import{_ as e,c as s,o as a,a3 as n,a8 as o,a9 as t,aa as l}from"./chunks/framework.BG__5Sii.js";const b=JSON.parse('{"title":"Personal Access Token","description":"","frontmatter":{},"headers":[],"relativePath":"guides/auth/personal-access-token.md","filePath":"guides/auth/personal-access-token.md","lastUpdated":1727776050000}'),p={name:"guides/auth/personal-access-token.md"},r=n('<h1 id="personal-access-token" tabindex="-1">Personal Access Token <a class="header-anchor" href="#personal-access-token" aria-label="Permalink to &quot;Personal Access Token&quot;">​</a></h1><blockquote><p><em>Great for quick starts and internal applications | Managed by user</em></p></blockquote><p>Personal Access Tokens are simple to set up and are useful for getting up and running quickly while in development.</p><p>Personal Access Tokens are typically used with Internal Integrations that only require access to or perform actions on behalf of a single user account.</p><div class="warning custom-block"><p class="custom-block-title">⚠️ Token Lifetime</p><p>Personal Access Tokens can be manually revoked by the user who generated them, otherwise they <strong>automatically expire after 1 year</strong>.</p></div><div class="warning custom-block"><p class="custom-block-title">⚠️ Multiple Users</p><p>If you need to access data from more than one account <a href="./oauth.html">OAuth 2.0</a> is the recommended workflow. You should avoid asking your users to paste any Amiqus Personal Access Token into your app.</p></div><h2 id="creating-a-token" tabindex="-1">Creating a token <a class="header-anchor" href="#creating-a-token" aria-label="Permalink to &quot;Creating a token&quot;">​</a></h2><p>Personal Access Tokens can be created in the <a href="https://id.amiqus.co/account/developer" target="_blank" rel="noreferrer">Amiqus Developer Settings</a> dashboard.</p><ol><li><p>Access the Developer Settings via the dropdown menu under your user name</p></li><li><p>Click Personal access tokens and +Create token</p></li><li><p>Give your token a descriptive name and select Create token <img src="'+o+'" alt="PAT"></p></li><li><p>Copy the token and store it in a safe place as this will be the <strong>only</strong> time it will be displayed. <img src="'+t+'" alt="Token"></p></li><li><p>Close the window to return the the Personal access tokens overview page. You can also manually revoke tokens by selecting Delete. <img src="'+l+`" alt="Token"></p></li></ol><h2 id="using-the-token" tabindex="-1">Using the token <a class="header-anchor" href="#using-the-token" aria-label="Permalink to &quot;Using the token&quot;">​</a></h2><p>Include access tokens in the Authorisation header of API requests in a Bearer format as shown below. You should not include tokens in the body of a request.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-xzOdK" id="tab-Ev4Sicp" checked><label for="tab-Ev4Sicp">Request</label><input type="radio" name="group-xzOdK" id="tab-7gMAFn4"><label for="tab-7gMAFn4">Response</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> https://id.amiqus.co/api/v2/me</span><span style="color:#BABED8;"> \\</span></span>
<span class="line"><span style="color:#C3E88D;">     --header</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">Authorization: Bearer {access_token}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">HTTP/1.1</span><span style="color:#F78C6C;"> 200</span><span style="color:#C3E88D;"> OK</span></span>
<span class="line"><span style="color:#FFCB6B;">Content-Type:</span><span style="color:#C3E88D;"> application/json</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Limit:</span><span style="color:#F78C6C;"> 200</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Remaining:</span><span style="color:#F78C6C;"> 199</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;object&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;id&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#C3E88D;"> 345789,</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Bob Gale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;email&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">bob@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;is_verified&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#89DDFF;"> true</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;is_disabled&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#89DDFF;"> false</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;created_at&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2019-08-24T14:15:22Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">    &quot;updated_at&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2019-08-24T14:15:22Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><h2 id="revoking-a-token" tabindex="-1">Revoking a token <a class="header-anchor" href="#revoking-a-token" aria-label="Permalink to &quot;Revoking a token&quot;">​</a></h2><p>Personal Access Tokens can be revoked at any time by accessing the <a href="https://id.amiqus.co/account/developer" target="_blank" rel="noreferrer">Developer Settings</a> dashboard.</p><ol><li>Access the Developer Settings via the dropdown menu under your user name;</li><li>Click Personal access tokens and select the Saved tab;</li><li>Click Delete beside the relevant token you wish to revoke;</li><li>Confirm that you are happy by clicking Delete token;</li><li>A green banner will appear confirming the token has been deleted;</li></ol>`,15),c=[r];function i(u,d,h,y,F,k){return a(),s("div",null,c)}const g=e(p,[["render",i]]);export{b as __pageData,g as default};
