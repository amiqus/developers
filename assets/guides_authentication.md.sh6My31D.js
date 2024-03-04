import{_ as t,c as e,o as a,V as o}from"./chunks/framework.RPR8h3Bo.js";const b=JSON.parse('{"title":"Authentication","description":"","frontmatter":{},"headers":[],"relativePath":"guides/authentication.md","filePath":"guides/authentication.md","lastUpdated":1709551266000}'),n={name:"guides/authentication.md"},s=o('<h1 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h1><p>Most Amiqus API endpoints require authentication using a Bearer token. Bearer access tokens can be created by one of two authentication methods:</p><ul><li><a href="./auth/personal-access-token.html">Personal access tokens</a></li><li><a href="./auth/oauth.html">OAuth 2.0</a></li></ul><p>You should think of access tokens as an alternative to a username and password. All access tokens have the following attributes:</p><ul><li>they are linked to the user who granted the token and are subject to the same permissions as that user;</li><li>all activities are attributed to the token&#39;s user;</li><li>their scope of access is limited to the individual team active at the time of token creation.</li></ul><h2 id="personal-access-tokens-vs-oauth-2-0" tabindex="-1">Personal access tokens vs OAuth 2.0 <a class="header-anchor" href="#personal-access-tokens-vs-oauth-2-0" aria-label="Permalink to &quot;Personal access tokens vs OAuth 2.0&quot;">​</a></h2><p>As for which option is the best choice, this depends on your needs. Each has its own benefits and drawbacks. Below are some examples of the pros and cons of each option.</p><h3 id="personal-access-tokens" tabindex="-1">Personal access tokens <a class="header-anchor" href="#personal-access-tokens" aria-label="Permalink to &quot;Personal access tokens&quot;">​</a></h3><span style="display:block;word-wrap:break-word;"><table><thead><tr><th>Pros</th><th>Cons</th></tr></thead><tbody><tr><td>Quick to get up and running for development. See <a href="./auth/personal-access-token.html#creating-a-token">Creating a Token</a></td><td>Tokens expire automatically after 1 year and cannot be programmatically refreshed</td></tr><tr><td>Suitable for simpler integrations</td><td>Not suitable for accessing data from multiple accounts</td></tr><tr><td>Token can be generated by the user</td><td></td></tr><tr><td>Can be revoked by the user</td><td></td></tr></tbody></table></span><h3 id="oauth-2-0" tabindex="-1">OAuth 2.0 <a class="header-anchor" href="#oauth-2-0" aria-label="Permalink to &quot;OAuth 2.0&quot;">​</a></h3><span style="display:block;word-wrap:break-word;"><table><thead><tr><th>Pros</th><th>Cons</th></tr></thead><tbody><tr><td>Relatively common user journey, e.g. Logging in to an application using a social media account</td><td>Flow can appear complex for integrators new to APIs</td></tr><tr><td>Great for scalable integrations that require access to <br>multiple accounts</td><td>More involved setup due to redirect URI handling and (optional) token refresh</td></tr><tr><td>Tokens can be <a href="./auth/oauth.html#refreshing-an-access-token">programmatically refreshed</a> without user input</td><td></td></tr><tr><td>Secure authorisation protocol</td><td></td></tr><tr><td>Can be revoked by the user</td><td></td></tr></tbody></table></span><p>Our integrators have a wide range of use cases for Amiqus API, utilising one or both of these authentication methods. Some integrators like to get things started quickly in their Sandbox enviroment by generating Personal Access Tokens, and then switching to the OAuth 2.0 flow before the production stage. Others find setting up with OAuth 2.0 from the outset in their Sandbox enviroment to be the perfect way to familiarise themselves with the protocol early in their development cycle. More information about each option can be found in the next pages.</p>',12),r=[s];function i(h,c,d,l,u,p){return a(),e("div",null,r)}const f=t(n,[["render",i]]);export{b as __pageData,f as default};
