import{_ as o,D as n,c as r,b as l,w as s,a4 as p,a3 as t,o as e,I as i,a as c}from"./chunks/framework.BG__5Sii.js";const _=JSON.parse('{"title":"Submit Identity Report via the Amiqus SDK API","description":"Learn how to submit an Identity Report using the Amiqus SDK API, keeping your users within your own ecosystem.","frontmatter":{"title":"Submit Identity Report via the Amiqus SDK API","description":"Learn how to submit an Identity Report using the Amiqus SDK API, keeping your users within your own ecosystem."},"headers":[],"relativePath":"guides/use-cases/id-report-submission-sdk-api.md","filePath":"guides/use-cases/id-report-submission-sdk-api.md","lastUpdated":1741180837000}'),u={name:"guides/use-cases/id-report-submission-sdk-api.md"},d=t('<h1 id="submit-identity-report-via-the-amiqus-sdk-api" tabindex="-1">Submit Identity Report via the Amiqus SDK API <a class="header-anchor" href="#submit-identity-report-via-the-amiqus-sdk-api" aria-label="Permalink to &quot;Submit Identity Report via the Amiqus SDK API&quot;">​</a></h1><p>This guide demonstrates how to submit an identity report directly from your product using the Amiqus SDK API. Rather than redirecting your user to the Amiqus shopfront, you can collect and submit the necessary data within your own interface, providing a seamless experience.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><strong>Amiqus API credentials</strong>: Ensure you have valid credentials to authenticate your requests. For the SDK API requests, you will need to ensure you are getting a valid SDK Token. <a href="https://developers.amiqus.co/aqid/api-reference.html#tag/Other-Resources/operation/post-sdk_token" target="_blank" rel="noreferrer">More information can be found here</a>.</li><li><strong>Client and record setup</strong>: Prior to submission, you should have already created a client and a record via the Amiqus API. You can follow <a href="/guides/use-cases/registration-flow.html">this guide</a>. From the record, retrieve the relevant step ID associated with the identity report which will be used to submit the step and the record ID will be used to grant your SDK token.</li><li><strong>User identity data</strong>: Gather all necessary identity details (e.g. full name, date of birth and address history) through your product’s interface.</li></ul><h2 id="overview-of-the-flow" tabindex="-1">Overview of the flow <a class="header-anchor" href="#overview-of-the-flow" aria-label="Permalink to &quot;Overview of the flow&quot;">​</a></h2><p>Below is a sequence diagram illustrating the process:</p>',6),D=t(`<h2 id="step-by-step-guide" tabindex="-1">Step-by-step guide <a class="header-anchor" href="#step-by-step-guide" aria-label="Permalink to &quot;Step-by-step guide&quot;">​</a></h2><h3 id="_1-collect-user-identity-data" tabindex="-1">1. Collect user identity data <a class="header-anchor" href="#_1-collect-user-identity-data" aria-label="Permalink to &quot;1. Collect user identity data&quot;">​</a></h3><p>During your user’s registration or verification process, collect the required identity information, such as:</p><ul><li><strong>Title</strong></li><li><strong>Date of birth</strong></li><li><strong>Address history</strong> - 12 months of address history is required for this check</li></ul><h3 id="_2-create-an-sdk-token" tabindex="-1">2. Create an SDK Token <a class="header-anchor" href="#_2-create-an-sdk-token" aria-label="Permalink to &quot;2. Create an SDK Token&quot;">​</a></h3><p>Using the record ID obtained from the prerequisites, make a request to the <a href="https://developers.amiqus.co/aqid/api-reference.html#tag/Other-Resources/operation/post-sdk_token" target="_blank" rel="noreferrer">Create SDK Token</a> endpoint. This will generate a valid SDK token that can only be used in the SDK API for this specific record and is only valid for 60 minutes.</p><p><em>Example request:</em></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">record_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">{record_id}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Replace <code>{record_id}</code> with the actual record ID from your client and record setup.</p><h3 id="_3-submit-the-identity-report-data" tabindex="-1">3. Submit the identity report data <a class="header-anchor" href="#_3-submit-the-identity-report-data" aria-label="Permalink to &quot;3. Submit the identity report data&quot;">​</a></h3><p>Prepare a JSON payload with the collected data. Below is an example payload for an identity report:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">miss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">dob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">1967-10-29</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">address_history</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    {</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#FFCB6B;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F78C6C;">unit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">3rd Floor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F78C6C;">house_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Citypoint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F78C6C;">house_number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">65</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F78C6C;">street_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Haymarket Terrace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F78C6C;">city</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Edinburgh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F78C6C;">postcode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">EH12 5HD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#F78C6C;">country</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">GB</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      },</span></span>
<span class="line"><span style="color:#89DDFF;">      &quot;</span><span style="color:#FFCB6B;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">2019-08-24</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  ],</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C792EA;">privacy_policy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Use the <a href="https://developers.amiqus.co/sdk/sdk-api-reference.html#operation/post-steps-id" target="_blank" rel="noreferrer"><strong>Submit a step</strong></a> endpoint of the Amiqus SDK API to send the identity report data. Ensure you include the SDK token obtained in Step 3 in your request.</p><p>Replace <code>{step_id}</code> with the actual step ID associated with the ID report provided from your previously <a href="https://developers.amiqus.co/aqid/api-reference.html#tag/Records/operation/post-records" target="_blank" rel="noreferrer">created record</a>.</p><h3 id="_4-update-your-system" tabindex="-1">4. Update your system <a class="header-anchor" href="#_4-update-your-system" aria-label="Permalink to &quot;4. Update your system&quot;">​</a></h3><p>Following a successful API response, update your internal systems to reflect the new status of the identity check. Depending on your workflow, you might also receive a webhook notification from Amiqus once the check is fully processed. In either case, ensure that your user’s profile or verification status is updated appropriately.</p><h2 id="what-happens-next" tabindex="-1">What happens next? <a class="header-anchor" href="#what-happens-next" aria-label="Permalink to &quot;What happens next?&quot;">​</a></h2><p>Once the identity report is submitted:</p><ol><li>Amiqus will process the provided data as part of its identity verification checking.</li><li>You can monitor the progress by polling the record details via the Amiqus API or by awaiting a webhook notification.</li><li>Inform your user of the verification status or any further actions required, ensuring a smooth user experience throughout the process.</li></ol>`,19);function y(h,F,m,q,f,b){const a=n("Mermaid");return e(),r("div",null,[d,(e(),l(p,null,{default:s(()=>[i(a,{id:"mermaid-32",class:"mermaid",graph:"sequenceDiagram%0A%20%20%20%20participant%20User%0A%20%20%20%20participant%20Your%20Website%20as%20Your%20Website%0A%20%20%20%20participant%20Amiqus%0A%0A%20%20%20%20User-%3E%3EYour%20Website%3A%201)%20Enter%20identity%20details%20via%20form%0A%20%20%20%20Your%20Website-%3E%3EAmiqus%3A%202)%20POST%20%2Fsdk_token%20with%20record_id%0A%20%20%20%20Amiqus--%3E%3EYour%20Website%3A%20Response%20with%20SDK%20token%0A%20%20%20%20Your%20Website-%3E%3EAmiqus%3A%203)%20POST%20%2Fsteps%2F%7Bstep_id%7D%20with%20identity%20report%20data%20%26%20SDK%20token%0A%20%20%20%20Amiqus--%3E%3EYour%20Website%3A%204)%20Response%20with%20submission%20status%0A"})]),fallback:s(()=>[c(" Loading... ")]),_:1})),D])}const A=o(u,[["render",y]]);export{_ as __pageData,A as default};
