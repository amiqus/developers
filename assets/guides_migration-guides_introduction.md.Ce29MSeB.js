import{_ as e,c as t,o as a,a3 as o}from"./chunks/framework.BG__5Sii.js";const f=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"prev":false},"headers":[],"relativePath":"guides/migration-guides/introduction.md","filePath":"guides/migration-guides/introduction.md","lastUpdated":1743411055000}'),i={name:"guides/migration-guides/introduction.md"},n=o('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>This guide outlines the steps required to migrate your application from API v1 to v2. The upgraded API v2 contains new features, clear documentation and improved functionality that will enhance your application’s performance and usability. At first, a migration can seem daunting but this guide will provide you with a roadmap to ensure a smooth transition. This guide sets out the most common differences between API v1 and v2, and should not be taken as exhaustive. If you do have any difficulties during your migration process or you spot a bug or any unexpected behaviour not documented below, please contact <a href="mailto:developers@amiqus.co" target="_blank" rel="noreferrer">developers@amiqus.co</a>.</p><p>If you are a new Amiqus integration client, please see the API v2 spec <a href="https://developers.amiqus.co/aqid/api-reference.html" target="_blank" rel="noreferrer">here</a>.</p><h2 id="concepts" tabindex="-1">Concepts <a class="header-anchor" href="#concepts" aria-label="Permalink to &quot;Concepts&quot;">​</a></h2><p>Please refer to the <a href="/guides/concepts/">Concepts guide</a> to account for key aspects that apply universally to all endpoints of the Amiqus API in your integration. These concepts will replace what was previously available for v1. For example, wherever your integration uses an endpoint that returns a list please see <a href="/guides/concepts/pagination.html">Pagination</a>.</p><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h2><p>Good news 🥳 Authentication will remain the same in across all current versions of the API. Your application’s existing valid tokens will also work to access API v2.</p><p>To read more about the different types of authentication available and how to implement them, see <a href="/guides/authentication.html">here</a>.</p>',8),r=[n];function s(c,u,d,l,h,p){return a(),t("div",null,r)}const g=e(i,[["render",s]]);export{f as __pageData,g as default};
