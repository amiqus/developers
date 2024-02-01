import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.a0a3e5fa.js";const C=JSON.parse('{"title":"OAuth 2.0","description":"","frontmatter":{"next":false,"outline":[2,3]},"headers":[],"relativePath":"guides/auth/oauth.md","filePath":"guides/auth/oauth.md","lastUpdated":1706798065000}'),o={name:"guides/auth/oauth.md"},n=t(`<h1 id="oauth-2-0" tabindex="-1">OAuth 2.0 <a class="header-anchor" href="#oauth-2-0" aria-label="Permalink to &quot;OAuth 2.0&quot;">​</a></h1><blockquote><p><em>Great for integrations that require access to multiple user accounts or teams | Seamless user experience</em></p></blockquote><p>OAuth 2.0 is a protocol that allows users to grant third-party applications access to their data and perform actions on their behalf. It is the recommended workflow for any integration that requires access to more than one user account or team. If you are new to REST APIs, the flow can seem complicated. However, once it is in place, generating an access token is straightforward.</p><p>This is an overview of how to get access to the Amiqus API using OAuth 2.0.</p><h2 id="register-your-application" tabindex="-1">Register your application <a class="header-anchor" href="#register-your-application" aria-label="Permalink to &quot;Register your application&quot;">​</a></h2><p>In order to communicate with the Amiqus API using OAuth 2.0 you need an Amiqus account to register your application. If you don&#39;t yet have one, <a href="mailto:sales@amiqus.co" target="_blank" rel="noreferrer">contact us</a> to set up a sandbox Amiqus account.</p><p>To request an OAuth API client, contact <a href="mailto:developers@amiqus.co" target="_blank" rel="noreferrer">Developer Support</a> with the following information:</p><ul><li>The name of your application (this will be shown to users on the authorisation page, so it should be easily recognisable)</li><li>The URL(s) of your application where users are redirected after authorisation is complete. You can add or update redirect URLs at any time.</li></ul><p>Once your application is registered you can find the <strong>Client ID</strong> and a <strong>Client secret</strong> for your API client in the <a href="https://id.amiqus.co/account/developer" target="_blank" rel="noreferrer">Developer Settings</a> dashboard.</p><h2 id="authorisation" tabindex="-1">Authorisation <a class="header-anchor" href="#authorisation" aria-label="Permalink to &quot;Authorisation&quot;">​</a></h2><p>The OAuth 2.0 flow is comprised of the following steps:</p><ol><li>The user is redirected from your app to Amiqus;</li><li>The user grants your app access to their Amiqus account;</li><li>The user is redirected back to your app with an <strong>authorisation code</strong>;</li><li>Your app makes a request to the Amiqus API exchanging the <strong>authorisation code</strong> for an <strong>access token</strong>;</li><li>Your app can now use the <strong>access token</strong> to perform requests to the Amiqus API.</li></ol><p>This flow should be unobstructive to the user&#39;s experience.</p><h3 id="user-authorisation" tabindex="-1">User authorisation <a class="header-anchor" href="#user-authorisation" aria-label="Permalink to &quot;User authorisation&quot;">​</a></h3><p>Direct the user to the authorisation page using the <code>GET</code> request outlined below. They will be asked to first log in if they are not already.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">https://id.amiqus.co/oauth/authorize?client_id</span><span style="color:#A6ACCD;">={client_id}</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">redirect_uri</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">{redirect_uri}</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">response_type</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">{state}</span></span></code></pre></div><table><thead><tr><th style="text-align:left;">Query string parameter</th><th style="text-align:center;">Required</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>client_id</code></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:left;">Your API Client ID issued when your app was registered.</td></tr><tr><td style="text-align:left;"><code>redirect_uri</code></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:left;">This is the URL of your app or service that users are redirected to after they have granted (or denied) access to Amiqus. <strong>This must match the URL linked to the registered app.</strong> The URL must be url-encoded.</td></tr><tr><td style="text-align:left;"><code>response_type</code></td><td style="text-align:center;"><strong>Yes</strong></td><td style="text-align:left;">For an authorisation codes, value must be <code>code</code>.</td></tr><tr><td style="text-align:left;"><code>state</code></td><td style="text-align:center;">No</td><td style="text-align:left;">A value generated by your application that is returned along with the authorisation code to ensure the integrity of the request. This can be random or include metadata (e.g. base64 encoded JSON), but <strong>must not</strong> contain sensitive information.</td></tr></tbody></table><p>Once the user has granted or denied authorisation, they are redirected to the URL provided in the request, along with the query string parameter <code>code</code> and, if provided <code>state</code>. If authorisation is denied, the query string parameter <code>error=access_denied</code> is returned instead of <code>code</code>. In this event, you will need to re-start the authorisation process.</p><div class="warning custom-block"><p class="custom-block-title">⚠️ Authorisation Code Lifetime</p><p>Authorisation codes are valid for <strong>10 minutes</strong> and can only be redeemed once.</p></div><h3 id="requesting-an-access-token" tabindex="-1">Requesting an access token <a class="header-anchor" href="#requesting-an-access-token" aria-label="Permalink to &quot;Requesting an access token&quot;">​</a></h3><p>Now that you have an authorisation code, it can be exchanged for an access token. To do this, make a <code>POST</code> request to <code>https://id.amiqus.co/oauth/token</code> with the following payload:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>grant_type</code></td><td style="text-align:left;"><code>authorization_code</code></td></tr><tr><td style="text-align:left;"><code>client_id</code></td><td style="text-align:left;">Your API Client ID issued when your app was registered.</td></tr><tr><td style="text-align:left;"><code>client_secret</code></td><td style="text-align:left;">Your API Client secret issued when your application was registered.</td></tr><tr><td style="text-align:left;"><code>code</code></td><td style="text-align:left;">The authorisation code generated from the <a href="#user-authorisation">authorisation step</a>.</td></tr><tr><td style="text-align:left;"><code>redirect_uri</code></td><td style="text-align:left;">The redirect URL registered with your API Client.</td></tr></tbody></table><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-eLS4D" id="tab-xP4RZZA" checked="checked"><label for="tab-xP4RZZA">Request</label><input type="radio" name="group-eLS4D" id="tab-bBC0UPj"><label for="tab-bBC0UPj">Response</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">https://id.amiqus.co/oauth/token</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type: application/x-www-form-urlencoded</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">grant_type=authorization_code&amp;client_id={client_id}&amp;client_secret={client_secret}&amp;code={authorisation_code}&amp;redirect_uri={redirect_uri}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">HTTP/1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OK</span></span>
<span class="line"><span style="color:#FFCB6B;">Content-Type:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;token_type&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bearer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;expires_in&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">31536000</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;access_token&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eyJ0eXAiOiJ...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;refresh_token&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def5020...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><p>If your OAuth token request is successful you will recieve an <strong>access token</strong> in the response. The response will also contain the lifespan of the access token (in seconds) and a refresh token that can be used to generate a new access token without repeating the authorisation process (see <a href="#refreshing-an-access-token">Refreshing an access token</a>).</p><div class="tip custom-block"><p class="custom-block-title">💡</p><p>Remember to store both the <code>access_token</code> and <code>refresh_token</code> values safely as these are essential for your use of the Amiqus API.</p></div><h3 id="refreshing-an-access-token" tabindex="-1">Refreshing an access token <a class="header-anchor" href="#refreshing-an-access-token" aria-label="Permalink to &quot;Refreshing an access token&quot;">​</a></h3><p>Now that you have an access token you can use the refresh token also provided in the response at any point to refresh your access token before it expires. By refreshing your access tokens, you can programmatically prevent them from expiring, without the need to repeat the authorisation flow. Each refresh token can only be used once.</p><p>To refresh your access token, you should make a <code>POST</code> request to <code>https://id.amiqus.co/oauth/token</code> and included the following payload:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>grant_type</code></td><td style="text-align:left;"><code>refresh_token</code>.</td></tr><tr><td style="text-align:left;"><code>client_id</code></td><td style="text-align:left;">Your API Client ID issued when your app was registered.</td></tr><tr><td style="text-align:left;"><code>client_secret</code></td><td style="text-align:left;">Your API Client secret issued when your application was registered.</td></tr><tr><td style="text-align:left;"><code>refresh_token</code></td><td style="text-align:left;">The refresh token provided in the <a href="#requesting-an-access-token">Requesting a token</a> response.</td></tr><tr><td style="text-align:left;"><code>redirect_uri</code></td><td style="text-align:left;">The redirect URL your registered with your API client.</td></tr></tbody></table><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-C_7lC" id="tab-lksm9_1" checked="checked"><label for="tab-lksm9_1">Request</label><input type="radio" name="group-C_7lC" id="tab-RTXp_d1"><label for="tab-RTXp_d1">Response</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">https://id.amiqus.co/oauth/token</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type: application/x-www-form-urlencoded</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">grant_type=refresh_token&amp;client_id={client_id}&amp;client_secret={client_secret}&amp;code={authorisation_code}&amp;redirect_uri={redirect_uri}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">HTTP/1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OK</span></span>
<span class="line"><span style="color:#FFCB6B;">Content-Type:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;token_type&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bearer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;expires_in&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">31536000</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;access_token&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eyJ0eXAiOiJ...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;refresh_token&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">def5020...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><p>The response will be the same as when you requested an access token with the authorisation code.</p><div class="warning custom-block"><p class="custom-block-title">⚠️ Access token replacement</p><p>The refresh token and the original access token are invalidated immediately after a successful response.</p></div><h3 id="using-the-token" tabindex="-1">Using the token <a class="header-anchor" href="#using-the-token" aria-label="Permalink to &quot;Using the token&quot;">​</a></h3><p>Now that you have an access token you can start using the Amiqus API.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-68UrY" id="tab-YO3Hb7M" checked="checked"><label for="tab-YO3Hb7M">Request</label><input type="radio" name="group-68UrY" id="tab-Db6VdST"><label for="tab-Db6VdST">Response</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://id.amiqus.co/api/v2/me</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">--header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Authorization: Bearer {access_token}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">HTTP/1.1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OK</span></span>
<span class="line"><span style="color:#FFCB6B;">Content-Type:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/json</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Limit:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#FFCB6B;">X-RateLimit-Remaining:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">199</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;object&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;id&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">345789</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bob Gale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;email&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bob@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;is_verified&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;is_disabled&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;created_at&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-08-24T14:15:22Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;updated_at&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-08-24T14:15:22Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><h3 id="revoking-a-token" tabindex="-1">Revoking a token <a class="header-anchor" href="#revoking-a-token" aria-label="Permalink to &quot;Revoking a token&quot;">​</a></h3><p>Users may revoke access at any time by visiting the Team apps page in Workflow Integrations. If this is the case, you must put the user through the <a href="#user-authorisation">authorisation flow</a> again to request a new access token.</p>`,39),l=[n];function r(p,c,i,d,u,y){return s(),a("div",null,l)}const D=e(o,[["render",r]]);export{C as __pageData,D as default};
