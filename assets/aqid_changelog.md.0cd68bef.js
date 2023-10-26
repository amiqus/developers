import{_ as e,o as d,c as i,Q as o}from"./chunks/framework.a0a3e5fa.js";const f=JSON.parse('{"title":"API Changelog","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"aqid/changelog.md","filePath":"aqid/changelog.md","lastUpdated":1698334319000}'),a={name:"aqid/changelog.md"},l=o('<h1 id="api-changelog" tabindex="-1">API Changelog <a class="header-anchor" href="#api-changelog" aria-label="Permalink to &quot;API Changelog&quot;">​</a></h1><h2 id="october-24-2023" tabindex="-1"><a href="#october-24-2023">October 24 2023</a> <a class="header-anchor" href="#october-24-2023" aria-label="Permalink to &quot;[October 24 2023](#october-24-2023)&quot;">​</a></h2><ul><li>Added <code>presets</code> property to <em>List all record templates</em> endpoint</li><li>Added <code>status</code>, <code>assignee</code> and <code>visibility</code> query parameters to <em>List all clients</em> endpoint</li><li>Added <code>client_visibility</code> query parameter to <em>List all records</em> endpoint</li><li>Updated migration guide with details on inclusion of archived entities for <em>List all records</em> and <em>List all clients</em> endpoints</li></ul><h2 id="october-16-2023" tabindex="-1"><a href="#october-16-2023">October 16 2023</a> <a class="header-anchor" href="#october-16-2023" aria-label="Permalink to &quot;[October 16 2023](#october-16-2023)&quot;">​</a></h2><ul><li>Added <code>visibility</code> query parameter to <em>List all records</em> endpoint</li></ul><h2 id="october-5-2023" tabindex="-1"><a href="#october-5-2023">October 5 2023</a> <a class="header-anchor" href="#october-5-2023" aria-label="Permalink to &quot;[October 5 2023](#october-5-2023)&quot;">​</a></h2><ul><li>Fix <code>document</code> object property <code>attachment</code> to allow <code>null</code> value</li></ul><h2 id="september-22-2023" tabindex="-1"><a href="#september-22-2023">September 22 2023</a> <a class="header-anchor" href="#september-22-2023" aria-label="Permalink to &quot;[September 22 2023](#september-22-2023)&quot;">​</a></h2><ul><li>Updated <em>List all records</em> endpoint <code>status</code> filter description detailing deprecated <code>failed</code> status</li></ul><h2 id="september-18-2023" tabindex="-1"><a href="#september-18-2023">September 18 2023</a> <a class="header-anchor" href="#september-18-2023" aria-label="Permalink to &quot;[September 18 2023](#september-18-2023)&quot;">​</a></h2><ul><li>Added <code>webhook</code> object property descriptions</li><li>Updated <em>List all webhooks</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated endpoint description</li></ul></li><li>Updated <em>Retrieve a webhook</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>Update a webhook</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>Delete a webhook</em> endpoint <ul><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>List all deliveries for a webhook</em> endpoint <ul><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Fix duplicate <code>title</code>, <code>other_title</code> and <code>middle_name</code> property types on <em>Create a cliend</em> endpoint</li></ul><h2 id="september-8-2023" tabindex="-1"><a href="#september-8-2023">September 8 2023</a> <a class="header-anchor" href="#september-8-2023" aria-label="Permalink to &quot;[September 8 2023](#september-8-2023)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">⭐ Migration Guides</p><p>A new section of the developer guides has been added to help upgrade your integration from API v1 to v2.</p><p>The migration guides go into detail about every property, parameter and endpoint added, changed or removed in v2 and includes suggestions for alternatives.</p></div><ul><li>Added <a href="/guides/migration-guides/introduction.html">Migration Guides</a></li><li>Updated <em>Delete an assignee for a client</em> endpoint description</li><li>Updated <em>Delete assignees for a client</em> endpoint description</li><li>Updated <em>List all assignees for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>Set assignees for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated request property and path parameter descriptions</li></ul></li><li>Updated <em>Update assignees for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated endpoint, request property and path parameter descriptions</li></ul></li><li>Updated <em>Delete assignee for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated endpoint and path parameter descriptions</li></ul></li></ul><h2 id="september-7-2023" tabindex="-1"><a href="#september-7-2023">September 7 2023</a> <a class="header-anchor" href="#september-7-2023" aria-label="Permalink to &quot;[September 7 2023](#september-7-2023)&quot;">​</a></h2><ul><li>Add missing <code>perform_url</code> property to <em>List all records</em> and <em>Update a record</em> response samples</li></ul><h2 id="september-5-2023" tabindex="-1"><a href="#september-5-2023">September 5 2023</a> <a class="header-anchor" href="#september-5-2023" aria-label="Permalink to &quot;[September 5 2023](#september-5-2023)&quot;">​</a></h2><ul><li>Fix invalid syntax in webhook security code sample</li><li>Fix sort order in <em>List all clients</em> response sample</li></ul><h2 id="august-21-2023" tabindex="-1"><a href="#august-21-2023">August 21 2023</a> <a class="header-anchor" href="#august-21-2023" aria-label="Permalink to &quot;[August 21 2023](#august-21-2023)&quot;">​</a></h2><ul><li>Updated <em>List all records</em> endpoint <ul><li>Added <code>401</code> response</li></ul></li><li>Updated <em>Create a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated request property descriptions</li></ul></li><li>Updated <em>Retrieve a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated path parameter descriptions</li></ul></li><li>Updated <em>Expire a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated path parameter descriptions</li></ul></li></ul><h2 id="august-14-2023" tabindex="-1"><a href="#august-14-2023">August 14 2023</a> <a class="header-anchor" href="#august-14-2023" aria-label="Permalink to &quot;[August 14 2023](#august-14-2023)&quot;">​</a></h2><ul><li>Updated <em>Delete an assignee for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated query parameter descriptions</li></ul></li><li>Updated <em>List all assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Set assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated query parameter descriptions</li></ul></li><li>Updated <em>Update assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated query parameter descriptions</li></ul></li><li>Updated <em>Delete assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li></ul><h2 id="august-9-2023" tabindex="-1"><a href="#august-9-2023">August 9 2023</a> <a class="header-anchor" href="#august-9-2023" aria-label="Permalink to &quot;[August 9 2023](#august-9-2023)&quot;">​</a></h2><ul><li>Added <code>address</code> object property descriptions</li><li>Updated <em>Retrieve address for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Replace an address for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li></ul><h2 id="august-3-2023" tabindex="-1"><a href="#august-3-2023">August 3 2023</a> <a class="header-anchor" href="#august-3-2023" aria-label="Permalink to &quot;[August 3 2023](#august-3-2023)&quot;">​</a></h2><ul><li>Added <code>client</code> object property descriptions</li><li>Updated <em>List all clients</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Create a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Update a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li></ul><h2 id="august-2-2023" tabindex="-1"><a href="#august-2-2023">August 2 2023</a> <a class="header-anchor" href="#august-2-2023" aria-label="Permalink to &quot;[August 2 2023](#august-2-2023)&quot;">​</a></h2><ul><li>Deprecated <em>Archive a record</em> endpoint. Replaced by <em>Update a record</em> endpoint.</li></ul><h2 id="july-31-2023" tabindex="-1"><a href="#july-31-2023">July 31 2023</a> <a class="header-anchor" href="#july-31-2023" aria-label="Permalink to &quot;[July 31 2023](#july-31-2023)&quot;">​</a></h2><ul><li>Added <code>perform_link</code> to <code>record</code> object</li></ul><h2 id="july-26-2023" tabindex="-1"><a href="#july-31-2023">July 26 2023</a> <a class="header-anchor" href="#july-26-2023" aria-label="Permalink to &quot;[July 26 2023](#july-31-2023)&quot;">​</a></h2><ul><li>Added <code>is_reviewed</code> property to <em>Update a record</em> endpoint. Allows toggling a record&#39;s reviewed state.</li></ul><h2 id="july-21-2023" tabindex="-1"><a href="#july-31-2023">July 21 2023</a> <a class="header-anchor" href="#july-21-2023" aria-label="Permalink to &quot;[July 21 2023](#july-31-2023)&quot;">​</a></h2><ul><li>Added <em>Update a record</em> endpoint</li></ul><h2 id="july-14-2023" tabindex="-1"><a href="#july-14-2023">July 14 2023</a> <a class="header-anchor" href="#july-14-2023" aria-label="Permalink to &quot;[July 14 2023](#july-14-2023)&quot;">​</a></h2><ul><li>Updated <em>List all records</em> endpoint <ul><li>Added <code>page</code>, <code>limit</code>, <code>status</code>, <code>creator</code> and <code>assignee</code> query parameters</li></ul></li></ul><h2 id="july-6-2023" tabindex="-1"><a href="#july-6-2023">July 6 2023</a> <a class="header-anchor" href="#july-6-2023" aria-label="Permalink to &quot;[July 6 2023](#july-6-2023)&quot;">​</a></h2><ul><li>Updated <em>Delete organisation for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li><li>Updated <em>Delete organisations for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li><li>Updated <em>List all organisations for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Update organisations for a client</em> endpoint <ul><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Replace organisations for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li></ul><h2 id="july-4-2023" tabindex="-1"><a href="#july-4-2023">July 4 2023</a> <a class="header-anchor" href="#july-4-2023" aria-label="Permalink to &quot;[July 4 2023](#july-4-2023)&quot;">​</a></h2><ul><li>Updated <em>Create an organisation</em> and <em>Update an organisation</em> properties <ul><li>Updated <code>jurisdiction</code> description with details of requirement</li></ul></li><li>Added request code samples</li></ul><h2 id="june-28-2023" tabindex="-1"><a href="#june-28-2023">June 28 2023</a> <a class="header-anchor" href="#june-28-2023" aria-label="Permalink to &quot;[June 28 2023](#june-28-2023)&quot;">​</a></h2><ul><li>Added <code>template</code> property to <em>Create a record</em> endpoint. Allows creation of records using a record template.</li></ul><h2 id="june-26-2023" tabindex="-1"><a href="#june-26-2023">June 26 2023</a> <a class="header-anchor" href="#june-26-2023" aria-label="Permalink to &quot;[June 26 2023](#june-26-2023)&quot;">​</a></h2><ul><li>Added <code>expand</code> query parameter examples for <em>List all steps for a record</em> endpoint</li></ul><h2 id="june-20-2023" tabindex="-1"><a href="#june-20-2023">June 20 2023</a> <a class="header-anchor" href="#june-20-2023" aria-label="Permalink to &quot;[June 20 2023](#june-20-2023)&quot;">​</a></h2><ul><li>Added <em>Create an attachment</em> endpoint</li></ul><h2 id="june-13-2023" tabindex="-1"><a href="#june-13-2023">June 13 2023</a> <a class="header-anchor" href="#june-13-2023" aria-label="Permalink to &quot;[June 13 2023](#june-13-2023)&quot;">​</a></h2><ul><li>Added <code>organisation</code> object property descriptions</li><li>Updated <em>List all organisations</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Create an organisation</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve an organisation</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li><li>Updated <em>Update an organisation</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li></ul><h2 id="june-1-2023" tabindex="-1"><a href="#june-1-2023">June 1 2023</a> <a class="header-anchor" href="#june-1-2023" aria-label="Permalink to &quot;[June 1 2023](#june-1-2023)&quot;">​</a></h2><ul><li>Added <code>status</code> enum values to <em>Create a client</em> and <em>Update a client</em> endpoints</li><li>Added <code>user</code> object property descriptions</li><li>Updated <code>422 Unprocessable Content</code> response description with examples</li><li>Updated <em>Check service status</em> endpoint <ul><li>Removed <code>403</code> response</li><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve user account</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Update user account</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li><li>Updated <em>List all my teams</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve team membership</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve a team member</em> endpoint <ul><li>Added <code>401</code> response</li></ul></li></ul><h2 id="may-31-2023" tabindex="-1"><a href="#may-31-2023">May 31 2023</a> <a class="header-anchor" href="#may-31-2023" aria-label="Permalink to &quot;[May 31 2023](#may-31-2023)&quot;">​</a></h2><ul><li>Changed <code>403</code> responses <ul><li>Updated response from <code>403 Unauthorized</code> to <code>403 Forbidden</code></li><li>Removed <code>error</code> property</li><li>Added <code>message</code> property</li></ul></li></ul><h2 id="may-29-2023" tabindex="-1"><a href="#may-29-2023">May 29 2023</a> <a class="header-anchor" href="#may-29-2023" aria-label="Permalink to &quot;[May 29 2023](#may-29-2023)&quot;">​</a></h2><ul><li>Added <code>secret</code> property to <code>webhook</code> object</li><li>Added <code>201 Created</code> success responses to <em>Update assignees for a record</em> and <em>Update assignees for a client</em> endpoints</li></ul><h2 id="may-26-2023" tabindex="-1"><a href="#may-26-2023">May 26 2023</a> <a class="header-anchor" href="#may-26-2023" aria-label="Permalink to &quot;[May 26 2023](#may-26-2023)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed Document Transfer record step preferences <ul><li>Added required <code>attachment</code> property to &quot;New Document&quot; type</li></ul></li></ul><h2 id="may-22-2023" tabindex="-1"><a href="#may-22-2023">May 22 2023</a> <a class="header-anchor" href="#may-22-2023" aria-label="Permalink to &quot;[May 22 2023](#may-22-2023)&quot;">​</a></h2><ul><li>Changed HSCNI Access NI record step preferences <ul><li>Updated <code>barring_adults</code> and <code>barring_children</code> description with details of requirement</li><li>Changed <code>false</code> as default value for <code>barring_adults</code> and <code>barring_children</code> properties</li></ul></li><li>Changed Watchlist record step preferences <ul><li>Changed <code>true</code> as default value for <code>silent</code> property</li><li>Updated <code>silent</code> description with details of availability</li></ul></li></ul><h2 id="may-18-2023" tabindex="-1"><a href="#may-18-2023">May 18 2023</a> <a class="header-anchor" href="#may-18-2023" aria-label="Permalink to &quot;[May 18 2023](#may-18-2023)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed Dummy record step preferences <ul><li><code>preferences</code> is no longer a required property</li><li>Changed <code>payment_amount</code> from <code>float</code> to <code>integer</code></li><li>Updated <code>payment_amount</code> description with details of value format</li><li>Changed minimum and maximum value of <code>payment_amount</code> to <code>0</code> – <code>10000</code></li><li>Changed minimum and maximum value of <code>credit_cost</code> to <code>0</code> – <code>100</code></li></ul></li></ul><h2 id="may-17-2023" tabindex="-1"><a href="#may-17-2023">May 17 2023</a> <a class="header-anchor" href="#may-17-2023" aria-label="Permalink to &quot;[May 17 2023](#may-17-2023)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed Banking Information record step preferences <ul><li>Renamed step type <code>check.open_banking</code> to <code>check.banking_information</code></li><li><code>preferences</code> is no longer a required property</li><li>Added <code>false</code> as default value for <code>balance</code> and <code>transactions</code> properties</li></ul></li><li>Changed Criminal Record step preferences <ul><li><code>free_volunteer</code> property for DBS: Standard and DBS: Enhanced types is now <strong>read only</strong></li></ul></li><li>Changed Document Transfer step preferences <ul><li>Renamed property <code>confirmed</code> to <code>require_confirmation</code></li><li>Renamed property <code>returned</code> to <code>require_return</code></li></ul></li><li>Changed Photo ID step preferences <ul><li><code>face</code> and <code>liveness</code> properties for <code>standard</code> report type are now <strong>read only</strong></li><li>Added <code>issuing_countries</code> property for <code>standard</code> and <code>biometric</code> report types</li><li>Updated <code>facial_similarity</code> description for <code>standard</code> report type with details of cost changes</li></ul></li><li>Changed Photo ID step preferences <ul><li>Added <code>1</code> and <code>3</code> options to <code>monitor</code> property</li><li>Added <code>false</code> as default value for <code>silent</code> and <code>monitor</code> properties</li><li>Updated <code>silent</code> and <code>monitor</code> descriptions with details of availability and cost changes</li></ul></li><li>Changed <code>record_document</code> object <ul><li>Renamed config choice headings <ul><li>&quot;Sent&quot; to &quot;Document Transfer&quot;</li><li>&quot;Requested&quot; to &quot;Document Request&quot;</li></ul></li><li>Renamed property <code>description</code> to <code>instructions</code></li><li>Renamed property <code>instructions</code> to <code>return_message</code></li><li>Added <code>return_message</code> description</li></ul></li><li>Removed <code>link</code> and <code>in_person</code> notification types from <em>Create a record</em> endpoint</li><li>Added <code>false</code> notification type to <em>Create a record</em> endpoint</li></ul><h2 id="may-12-2023" tabindex="-1"><a href="#may-12-2023">May 12 2023</a> <a class="header-anchor" href="#may-12-2023" aria-label="Permalink to &quot;[May 12 2023](#may-12-2023)&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed success response codes from <code>200 OK</code> to <code>201 Created</code> for endpoints: <ul><li><em>Create a client</em></li><li><em>Set assignees for a client</em></li><li><em>Create an organisation</em></li><li><em>Create a record</em></li><li><em>Set assignees for a record</em></li><li><em>Create a webhook</em></li></ul></li></ul><h2 id="may-11-2023" tabindex="-1"><a href="#may-11-2023">May 11 2023</a> <a class="header-anchor" href="#may-11-2023" aria-label="Permalink to &quot;[May 11 2023](#may-11-2023)&quot;">​</a></h2><ul><li>Changed maximum length of <code>message</code> property to <code>5000</code> for <em>Create a record</em> endpoint</li></ul><h2 id="may-10-2023" tabindex="-1"><a href="#may-10-2023">May 10 2023</a> <a class="header-anchor" href="#may-10-2023" aria-label="Permalink to &quot;[May 10 2023](#may-10-2023)&quot;">​</a></h2><ul><li>Removed <code>enabled</code> query parameter from <em>List all forms for a client</em> endpoint</li></ul>',72),t=[l];function r(n,c,s,p,u,m){return d(),i("div",null,t)}const b=e(a,[["render",r]]);export{f as __pageData,b as default};
