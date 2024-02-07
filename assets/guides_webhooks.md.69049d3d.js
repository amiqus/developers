import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.a0a3e5fa.js";const h=JSON.parse('{"title":"Webhooks","description":"","frontmatter":{"prev":false,"next":false,"outline":[2,3]},"headers":[],"relativePath":"guides/webhooks.md","filePath":"guides/webhooks.md","lastUpdated":1707321598000}'),o={name:"guides/webhooks.md"},t=n(`<h1 id="webhooks" tabindex="-1">Webhooks <a class="header-anchor" href="#webhooks" aria-label="Permalink to &quot;Webhooks&quot;">​</a></h1><p>Webhooks are automated messages sent by an application or service when a specific event occurs. Webhooks typically contain a message — a payload of information relevant to the triggering event — and are sent over HTTP.</p><p>Webhooks can be used to notify your service of an event in near real-time, avoiding having to frequently poll the API for updates.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>Before creating a webhook, your service must have a publicly accessible URL with a valid SSL certificate. The service must be able to accept POST requests with a JSON payload.</p><p>If your service will receive webhooks for more than one team, consider creating a dedicated URL for each team, or use a query parameter when creating the webhook e.g. <code>https://example.com/webhook?team_id=12345</code>. Alternatively, store a record of the webhook UUID and ID of the team it was created for.</p><p>Your service must respond with a <code>2xx</code> response code to acknowledge receipt. A further two delivery attempts will be made if a non-<code>2xx</code> response code is received. The second attempt will be made 60 seconds after the first, the third attempt 120 seconds after the second. If the third attempt fails, no further attempts will be made, however webhooks can be manually resent in the Webhooks UI.</p><p>Repeated delivery failures do not automatically disable a webhook, however this is subject to change but you will be notified with further details.</p><h2 id="payloads" tabindex="-1">Payloads <a class="header-anchor" href="#payloads" aria-label="Permalink to &quot;Payloads&quot;">​</a></h2><p>When an event with an active webhook occurs, Amiqus sends a POST request to the configured URL. The webhook contains a JSON payload containing details about the webhhook, the event trigger and any entities related to it.</p><p>Webhook payloads are deliberately concise, containing only minimal data without sensitive or personally identifiable information (PII). The combination of event alias and entity identifiers may be sufficient to trigger an action within your service, for example <code>client.archived</code>. However, some webhooks may require a subsequent API request to retrieve further data, for example <code>client.created</code>.</p><p>All payloads contain three properties:</p><ul><li><code>webhook</code> Contains details about the registered webhook including its UUID and the list of events that trigger it.</li><li><code>trigger</code> The event that triggered this webhook.</li><li><code>data</code> Supplementary metadata that can be used to perform an action after having received the webhook.</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">webhook</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">uuid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">db6a2d91-b67e-4f88-b71a-b73da98c5168</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-11T13:01:34Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">events</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">triggered_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-06-28T16:15:27Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">alias</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">client.created</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">472346</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://id.amiqus.co/api/v2/clients/472346</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="webook-security" tabindex="-1">Webook Security <a class="header-anchor" href="#webook-security" aria-label="Permalink to &quot;Webook Security&quot;">​</a></h2><p>All webhooks sent by Amiqus are signed using a shared secret. Webhook signatures allow you to verify that the webhook originated from Amiqus, and not a third-party. We strongly advise you to verify all webhook signatures and reject any that fail. Consider returning a <code>404</code> response code for rejected webhooks to prevent enumeration attacks.</p><p>A webhook signature is a base64-encoded HMAC-SHA256 hash made up of the webhook payload body and shared secret as the key. The signature is included in the webhook requests headers as <code>X-AQID-Signature</code>. The shared secret is returned in <code>webhook</code> API response objects and is also available in the Webhooks UI.</p><p>Verifying a webhook signature is a simple process. Your system should create an HMAC signature using the webhook request body and shared secret, then compare it with the header value. If the values don&#39;t match, the webhook should be rejected. The following are examples of how you might perform validation.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-LmIbq" id="tab-AsfDrvL" checked="checked"><label for="tab-AsfDrvL">PHP</label><input type="radio" name="group-LmIbq" id="tab-PoRn-iE"><label for="tab-PoRn-iE">Python</label><input type="radio" name="group-LmIbq" id="tab-TA8G04H"><label for="tab-TA8G04H">Node.JS</label></div><div class="blocks"><div class="language-php active"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">verifySignature</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">payloadBody</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sharedSecret</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">webhookSignature</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">void</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">decodedSignature </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">base64_decode</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">webhookSignature</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">expectedSignature </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hash_hmac</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sha256</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">payloadBody</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sharedSecret</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#82AAFF;">hash_equals</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">decodedSignature</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">expectedSignature</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InvalidArgumentException</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Webhook signature is invalid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Raw webhook payload body</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">payloadBody </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// e.g. file_get_contents(&#39;php://input&#39;);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Shared webhook secret</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sharedSecret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Value of signature from the request headers</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">webhookSignature </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// e.g. $_SERVER[&#39;X_AQID_SIGNATURE&#39;];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">verifySignature</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">payloadBody</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sharedSecret</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">webhookSignature</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">InvalidArgumentException</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Webhook signature is invalid</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getMessage</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> base64</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> hashlib</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> hmac</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">verify_signature</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">payload_body</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">shared_secret</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">webhook_signature</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    decoded_signature </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> base64</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">b64decode</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">webhook_signature</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    expected_signature </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> hmac</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">shared_secret</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">encode</span><span style="color:#89DDFF;">(),</span><span style="color:#82AAFF;"> payload_body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">encode</span><span style="color:#89DDFF;">(),</span><span style="color:#82AAFF;"> hashlib</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sha256</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">digest</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> hmac</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">compare_digest</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">decoded_signature</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> expected_signature</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">raise</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Webhook signature is invalid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Raw webhook payload body</span></span>
<span class="line"><span style="color:#A6ACCD;">    payload_body </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Shared webhook secret</span></span>
<span class="line"><span style="color:#A6ACCD;">    shared_secret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Value of signature header (X-AQID-Signature)</span></span>
<span class="line"><span style="color:#A6ACCD;">    webhook_signature </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">verify_signature</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">payload_body</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> shared_secret</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> webhook_signature</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">except</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Webhook signature is invalid</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">e</span><span style="color:#89DDFF;">))</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> crypto </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">crypto</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">verifySignature</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">payloadBody</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">sharedSecret</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">webhookSignature</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decodedSignature</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Buffer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">webhookSignature</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base64</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computedSignature</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">crypto</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createHmac</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sha256</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sharedSecret</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">payloadBody</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">digest</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">crypto</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">timingSafeEqual</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">decodedSignature</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computedSignature</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Webhook signature is invalid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Raw webhook payload body</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payloadBody</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Shared webhook secret</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sharedSecret</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Value of signature from the request headers</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">webhookSignature</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">verifySignature</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">payloadBody</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sharedSecret</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">webhookSignature</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (error) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Webhook signature is invalid</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">error</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><h2 id="available-webhooks" tabindex="-1">Available Webhooks <a class="header-anchor" href="#available-webhooks" aria-label="Permalink to &quot;Available Webhooks&quot;">​</a></h2><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>record.created</code></td><td>Triggered when a record is created.</td></tr><tr><td><code>record.updated</code></td><td>Triggered when a record or any of its steps are updated, including check steps being submitted by the client or when a check step is processed.</td></tr><tr><td><code>record.finished</code></td><td>Triggered when a record status changes to a &quot;terminal&quot; state, e.g. it expired, was completed or fails without the possibility of retry. All steps have either; been completed and have finished processing; the client failed to complete them in time; or that there was a technical error preventing the record from ever being completed.</td></tr><tr><td><code>record.bounced</code></td><td>Triggered when a record created email message bounces. This is a useful prompt to check and resend the record via the Amiqus request page or to notify the client directly.</td></tr><tr><td><code>record.reviewed</code></td><td>Triggered when a team member manually marks a record as having been reviewed. This is a decisive event, assuming no further action will be taken on the record unless it is unreviewed.</td></tr><tr><td><code>record.unreviewed</code></td><td>Triggered when a member of the team manually marks a record no longer being reviewed.</td></tr><tr><td><code>client.created</code></td><td>Triggered when a client is created.</td></tr><tr><td><code>client.deleted</code></td><td>Triggered when a client is deleted. Note that the payload data will only include the client ID.</td></tr><tr><td><code>client.organisations</code></td><td>Triggered when a client&#39;s relationship to an organisation changes e.g. added to or removed from an organisation.</td></tr><tr><td><code>client.record</code></td><td>Triggered when a client receives a new request.</td></tr><tr><td><code>client.status</code></td><td>Triggered when a client&#39;s status changed.</td></tr><tr><td><code>client.updated</code></td><td>Triggered when a client&#39;s details were updated.</td></tr><tr><td><code>client.archived</code></td><td>Triggered when a client was archived by a team member.</td></tr><tr><td><code>client.unarchived</code></td><td>Triggered when a client was unarchived by a team member.</td></tr><tr><td><code>form.attached</code></td><td>Triggered when a form is added to a client directly, not as a record step. Typically used for internal data collection.</td></tr><tr><td><code>form.deleted</code></td><td>Triggered when a client form is deleted. Note that forms sent as a record step cannot be deleted, and deleting a form template does not delete a client form.</td></tr><tr><td><code>form.modified</code></td><td>Triggered when a client form is modified (title or description changed, fields added or removed, etc). Note that forms sent as a record step cannot be modified, and changes form templates have no affect.</td></tr><tr><td><code>form.sent</code></td><td>Triggered when a form is sent to a client as a record step.</td></tr><tr><td><code>form.submitted</code></td><td>Triggered when a form sent to a client as a record step was submitted by the client.</td></tr><tr><td><code>form.updated</code></td><td>Triggered when a form has its answers or flags updated. This is triggered by both direct client forms and record step forms. Record step forms trigger after submission by the client and direct client forms each time a field is updated. Flagged fields for both types of forms will also trigger this event. This event can trigger several times.</td></tr></tbody></table><h2 id="webhook-categories" tabindex="-1">Webhook Categories <a class="header-anchor" href="#webhook-categories" aria-label="Permalink to &quot;Webhook Categories&quot;">​</a></h2><p>Webhooks are categorised by the entity they represent. It is possible to subscribe to an entire category using a wildcard, e.g. <code>record.*</code>, <code>client.*</code>. Be aware that any new events added will be included in this group so your service must be able to account for them.</p><p>To subscribe to all categories, use the wildcard event <code>*</code>. As with category wildcards, any new categories will be included as they are added.</p><h3 id="records" tabindex="-1">Records <a class="header-anchor" href="#records" aria-label="Permalink to &quot;Records&quot;">​</a></h3><p>The lifecycle of a record within Amiqus can be followed closely using webhooks. While the record&#39;s information will only be available via an authenticated API call, there are plenty of events that will allow you to infer its progression.</p><table><thead><tr><th>Path</th><th>Description</th></tr></thead><tbody><tr><td><code>data.record.id</code></td><td>The unique identifier for the record.</td></tr><tr><td><code>data.record.show</code></td><td>API endpoint to retrieve the record.</td></tr><tr><td><code>data.record.download</code></td><td>API endpoint to download the record as a PDF.</td></tr><tr><td><code>data.client.id</code></td><td>The unique identifier for the client which the record was sent to.</td></tr><tr><td><code>data.client.show</code></td><td>API endpoint to retrieve the client.</td></tr></tbody></table><h3 id="clients" tabindex="-1">Clients <a class="header-anchor" href="#clients" aria-label="Permalink to &quot;Clients&quot;">​</a></h3><p>Changes to clients (also referred to as &quot;People&quot;, to differentiate them from &quot;Organisations&quot;) can be tracked using webhooks, too. Similarly to record webhooks, full client information is only available via an authenticated API call.</p><table><thead><tr><th>Path</th><th>Description</th></tr></thead><tbody><tr><td><code>data.client.id</code></td><td>The unique identifier for the client.</td></tr><tr><td><code>data.client.show</code></td><td>API endpoint to retrieve the client.</td></tr></tbody></table><p>All client webhooks share the same payload with the exception of:</p><ul><li><code>client.deleted</code> which only contains <code>data.client.id</code>; and</li><li><code>client.record</code> which contains additional record specific properties (<code>data.record.id</code>, <code>data.record.show</code>, <code>data.record.download</code>).</li></ul><h3 id="client-forms" tabindex="-1">Client Forms <a class="header-anchor" href="#client-forms" aria-label="Permalink to &quot;Client Forms&quot;">​</a></h3><p>Client forms are associated with a client either having been attached directly or as a record step. Direct client forms can only be completed by team members, record step forms are typically completed by the client as part of a request but can be completed by a team member on their behalf.</p><p>Once a form template is attached to a client, there is no longer any association between them. Changes made to the form template do not affect client forms and vice versa.</p><table><thead><tr><th>Path</th><th>Description</th></tr></thead><tbody><tr><td><code>data.form.reference</code></td><td>The unique identifier (UUID) for the form.</td></tr><tr><td><code>data.form.show</code></td><td>API endpoint to retrieve the form.</td></tr><tr><td><code>data.client.id</code></td><td>The unique identifier for the client the form is associated to.</td></tr><tr><td><code>data.client.show</code></td><td>API endpoint to retrieve the client.</td></tr></tbody></table><p>The payload for <code>form.deleted</code> will not contain <code>data.client.id</code> or <code>data.client.show</code>.</p><p>Client forms sent as a record step include additional data about the record.</p><table><thead><tr><th>Path</th><th>Description</th></tr></thead><tbody><tr><td><code>data.record.id</code></td><td>The unique identifier for the record.</td></tr><tr><td><code>data.record.show</code></td><td>API endpoint to retrieve the record.</td></tr><tr><td><code>data.record.download</code></td><td>API endpoint to download the record as a PDF.</td></tr></tbody></table>`,39),l=[t];function p(r,c,i,d,y,D){return a(),e("div",null,l)}const A=s(o,[["render",p]]);export{h as __pageData,A as default};
