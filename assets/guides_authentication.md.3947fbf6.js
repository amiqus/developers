import{_ as t,o as e,c as a,Q as i}from"./chunks/framework.a0a3e5fa.js";const m=JSON.parse('{"title":"Authentication","description":"","frontmatter":{},"headers":[],"relativePath":"guides/authentication.md","filePath":"guides/authentication.md","lastUpdated":1698250911000}'),o={name:"guides/authentication.md"},s=i('<h1 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h1><p>Most Amiqus API endpoints require authentication using a Bearer token. Bearer access tokens can be created by one of two authentication methods:</p><ul><li><a href="./auth/personal-access-token.html">Personal access tokens</a></li><li><a href="./auth/oauth.html">OAuth 2.0</a></li></ul><p>You should think of access tokens as an alternative to a username and password. All access tokens have the following attributes:</p><ul><li>they are linked to the user who granted the token and are subject to the same permissions as that user;</li><li>all activities are attributed to the token&#39;s user;</li><li>their scope of access is limited to the individual team active at the time of token creation.</li></ul><p>As for which option is the best choice, this depends on your needs. Each has its own benefits and drawbacks.</p>',6),n=[s];function c(r,h,l,u,d,_){return e(),a("div",null,n)}const f=t(o,[["render",c]]);export{m as __pageData,f as default};
