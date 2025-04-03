import{_ as l,D as o,c as n,b as s,w as e,a4 as r,a3 as i,o as a,I as c,a as d}from"./chunks/framework.BG__5Sii.js";const v=JSON.parse('{"title":"Download All Client Files","description":"Learn how to download all files for a client by listing clients, retrieving file details, and downloading each file using the Amiqus API.","frontmatter":{"title":"Download All Client Files","description":"Learn how to download all files for a client by listing clients, retrieving file details, and downloading each file using the Amiqus API."},"headers":[],"relativePath":"guides/use-cases/download-all-files.md","filePath":"guides/use-cases/download-all-files.md","lastUpdated":1743678011000}'),h={name:"guides/use-cases/download-all-files.md"},f=i('<h1 id="download-all-client-files" tabindex="-1">Download all client files <a class="header-anchor" href="#download-all-client-files" aria-label="Permalink to &quot;Download all client files&quot;">​</a></h1><p>This guide demonstrates how to download all files associated with a client using the Amiqus API. Instead of manually fetching files, you can automate the process by combining several endpoints to list clients, retrieve file details and download each file programmatically. This is especially useful if you have not previously had an integration with Amiqus but have been using us for a while and want to backdate the files you have a copy of.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><strong>Amiqus API credentials</strong>: Ensure you have valid API credentials to authenticate your requests.</li></ul><h2 id="overview-of-the-flow" tabindex="-1">Overview of the flow <a class="header-anchor" href="#overview-of-the-flow" aria-label="Permalink to &quot;Overview of the flow&quot;">​</a></h2><p>Below is a sequence diagram illustrating the process:</p>',6),u=i('<h2 id="step-by-step-guide" tabindex="-1">Step-by-step Guide <a class="header-anchor" href="#step-by-step-guide" aria-label="Permalink to &quot;Step-by-step Guide&quot;">​</a></h2><h3 id="_1-list-all-clients" tabindex="-1">1. List all clients <a class="header-anchor" href="#_1-list-all-clients" aria-label="Permalink to &quot;1. List all clients&quot;">​</a></h3><p>Start by retrieving a <a href="/aqid/api-reference.html#operation/get-clients" target="_blank">list of clients</a>. You can apply filters based on your criteria if necessary.</p><p>The response will contain an array of client objects. Use the client IDs from these objects in subsequent steps.</p><h3 id="_2-retrieve-files-for-each-client" tabindex="-1">2. Retrieve files for each client <a class="header-anchor" href="#_2-retrieve-files-for-each-client" aria-label="Permalink to &quot;2. Retrieve files for each client&quot;">​</a></h3><p>For each client obtained in Step 1, call the API endpoint to <a href="/aqid/api-reference.html#operation/get-clients-id-files" target="_blank">list their files</a>. This will return a list of file objects associated with the client.</p><p>Loop through the returned list of clients in your code, calling this endpoint for each client to return a list of files.</p><h3 id="_3-download-each-file" tabindex="-1">3. Download each file <a class="header-anchor" href="#_3-download-each-file" aria-label="Permalink to &quot;3. Download each file&quot;">​</a></h3><p>After gathering the file IDs for each client, iterate through the file list and download each file using its unique ID using the <a href="/aqid/api-reference.html#operation/get-clients-clientId-files-fileId-download" target="_blank">download a file for a client</a> endpoint. You will need both the file ID and the client ID for this step.</p><h2 id="what-happens-next" tabindex="-1">What happens next? <a class="header-anchor" href="#what-happens-next" aria-label="Permalink to &quot;What happens next?&quot;">​</a></h2><p>After downloading the files:</p><ul><li><strong>Monitor API limits:</strong> Keep an eye on your <a href="./../concepts/rate-limits.html">API rate limits</a> to prevent throttling, especially if you are downloading files for a large number of clients.</li></ul>',12);function p(m,g,_,w,A,b){const t=o("Mermaid");return a(),n("div",null,[f,(a(),s(r,null,{default:e(()=>[c(t,{id:"mermaid-22",class:"mermaid",graph:"sequenceDiagram%0A%20%20%20%20participant%20Script%20as%20Your%20Script%0A%20%20%20%20participant%20Amiqus%20as%20Amiqus%20API%0A%20%20%20%20participant%20Storage%20as%20Local%20Storage%0A%0A%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Fclients%0A%20%20%20%20loop%20For%20each%20client%0A%20%20%20%20%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Fclients%2F%7BclientId%7D%2Ffiles%0A%20%20%20%20%20%20%20%20loop%20For%20each%20file%0A%20%20%20%20%20%20%20%20%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Fclients%2F%7BclientId%7D%2Ffiles%2F%7BfileId%7D%2Fdownload%0A%20%20%20%20%20%20%20%20%20%20%20%20Amiqus--%3E%3EScript%3A%20File%20data%0A%20%20%20%20%20%20%20%20%20%20%20%20Script-%3E%3EStorage%3A%20Save%20file%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A"})]),fallback:e(()=>[d(" Loading... ")]),_:1})),u])}const y=l(h,[["render",p]]);export{v as __pageData,y as default};
