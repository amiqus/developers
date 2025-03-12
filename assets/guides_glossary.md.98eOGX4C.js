import{_ as e,c as t,o as a,a3 as o}from"./chunks/framework.BG__5Sii.js";const g=JSON.parse('{"title":"Glossary","description":"","frontmatter":{"prev":false,"next":false,"outline":[2,3]},"headers":[],"relativePath":"guides/glossary.md","filePath":"guides/glossary.md","lastUpdated":1741772582000}'),r={name:"guides/glossary.md"},n=o('<h1 id="glossary" tabindex="-1">Glossary <a class="header-anchor" href="#glossary" aria-label="Permalink to &quot;Glossary&quot;">​</a></h1><p>This glossary defines the terms used in our API and maps them to the corresponding terms used in Amiqus. When the term <strong>Amiqus</strong> is used in this glossary, we are referring to the browser-based application, while when referencing <strong>API</strong>, we are referring to the Amiqus API.</p><h2 id="api-terms" tabindex="-1"><strong>API Terms</strong> <a class="header-anchor" href="#api-terms" aria-label="Permalink to &quot;**API Terms**&quot;">​</a></h2><h3 id="team" tabindex="-1">Team <a class="header-anchor" href="#team" aria-label="Permalink to &quot;Team&quot;">​</a></h3><p>A Team is an Amiqus account consisting of Amiqus users with the ability to onboard and verify the identity of Clients. A team member is the assignment of a user within team. Team members can have one of four roles within a team: Admin, Member, Read-only or Assignee only. Roles are assigned by a team member with an admin role. A user can be a team member of several teams with a different role on each.</p><h3 id="record" tabindex="-1"><strong>Record</strong> <a class="header-anchor" href="#record" aria-label="Permalink to &quot;**Record**&quot;">​</a></h3><p>In the context of the API, a <strong>Record</strong> refers to a collection of Checks, Document Transfers, Document Requests, and Forms that your team has asked a Client to complete. In the product, this is referred to as a <strong>Request</strong>.</p><p><strong>API Term</strong>: Record</p><p><strong>Amiqus Term</strong>: Request</p><h3 id="client" tabindex="-1"><strong>Client</strong> <a class="header-anchor" href="#client" aria-label="Permalink to &quot;**Client**&quot;">​</a></h3><p>In the context of the API, a <strong>Client</strong> refers to the person (candidate, applicant, employee etc) your Team wishes to engage with. In the Amiqus, referred to as <strong>Person</strong> (or <strong>People</strong>).</p><p><strong>API Term</strong>: Client</p><p><strong>Amiqus Term</strong>: Person</p><h3 id="file" tabindex="-1">File <a class="header-anchor" href="#file" aria-label="Permalink to &quot;File&quot;">​</a></h3><p>In the context of the API, a <strong>File</strong> is an uploaded file, either by a team member, or as part of a Record. Files are retrieved from endpoints &quot;List all files for a client&quot;, &quot;Download a file for a client&quot;. In the product, they are found in the <strong>Documents</strong> tab under the person you&#39;re viewing.</p><p><strong>API Term</strong>: File</p><p><strong>Amiqus Term</strong>: Document</p><h3 id="document" tabindex="-1">Document <a class="header-anchor" href="#document" aria-label="Permalink to &quot;Document&quot;">​</a></h3><p>In the context of the API, a <strong>Document</strong> is a commonly used file that can be attached to a Record for a Client to download and are available under the endpoint &quot;List all documents&quot;. In the product, they are found in <strong>Document attachments</strong> in your team&#39;s Workflow area.</p><p><strong>API Term</strong>: Document</p><p><strong>Amiqus Term</strong>: Document attachment</p><h3 id="document-template" tabindex="-1">Document template <a class="header-anchor" href="#document-template" aria-label="Permalink to &quot;Document template&quot;">​</a></h3><p>In the context of the API, <strong>Document template</strong> refers to a commonly used file uploader that can be added to a Record to accept supporting documentation from a Client. Uploaded files can be used for additional verification such as a utility bill. In the product, these are referred to as <strong>Document requests</strong> in your team&#39;s Workflow area.</p><h3 id="organisation" tabindex="-1">Organisation <a class="header-anchor" href="#organisation" aria-label="Permalink to &quot;Organisation&quot;">​</a></h3><p>Clients working for the same company can be added to an Organisation. Information about the Organisation including incorporation data, company directors, ownership information and documentation can be retrieved from OpenCorporates and Companies House databases.</p><h3 id="step" tabindex="-1">Step <a class="header-anchor" href="#step" aria-label="Permalink to &quot;Step&quot;">​</a></h3><p>A Record consists of one or more Steps. A Step can be a Check, Document Request, Document Transfer or Form, and a Record may have as many Steps as necessary. Only one of each Check type may be used within a Record.</p><h2 id="summary" tabindex="-1"><strong>Summary</strong> <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;**Summary**&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">API Term</th><th style="text-align:left;">Amiqus Term</th></tr></thead><tbody><tr><td style="text-align:left;">Record</td><td style="text-align:left;">Request</td></tr><tr><td style="text-align:left;">Client</td><td style="text-align:left;">Person, People</td></tr><tr><td style="text-align:left;">File</td><td style="text-align:left;">Document</td></tr><tr><td style="text-align:left;">Document</td><td style="text-align:left;">Document attachment</td></tr><tr><td style="text-align:left;">Document template</td><td style="text-align:left;">Document request</td></tr></tbody></table><p>Please contact <a href="mailto:developers@amiqus.co" target="_blank" rel="noreferrer">developers@amiqus.co</a> if you have any questions about these terms or if you need further clarification.</p>',30),s=[n];function i(l,d,m,c,h,u){return a(),t("div",null,s)}const f=e(r,[["render",i]]);export{g as __pageData,f as default};
