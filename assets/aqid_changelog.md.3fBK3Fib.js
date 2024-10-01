import{_ as e,c as d,o,a3 as a}from"./chunks/framework.BG__5Sii.js";const b=JSON.parse('{"title":"API Changelog","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"aqid/changelog.md","filePath":"aqid/changelog.md","lastUpdated":1727776035000}'),i={name:"aqid/changelog.md"},l=a('<h1 id="api-changelog" tabindex="-1">API Changelog <a class="header-anchor" href="#api-changelog" aria-label="Permalink to &quot;API Changelog&quot;">​</a></h1><h2 id="september-26-2024" tabindex="-1">September 26 2024 <a class="header-anchor" href="#september-26-2024" aria-label="Permalink to &quot;September 26 2024&quot;">​</a></h2><ul><li>Updated Photo ID record step preferences <ul><li>Added <code>right_to_work</code> property for <code>standard</code> and <code>biometric</code> report types</li><li>Added <code>allow_fallback</code> property for <code>biometric</code> report types</li></ul></li></ul><h2 id="september-12-2024" tabindex="-1">September 12 2024 <a class="header-anchor" href="#september-12-2024" aria-label="Permalink to &quot;September 12 2024&quot;">​</a></h2><ul><li>Added <code>case.id</code> and <code>case.show</code> to Webhook payloads for <code>record</code> and <code>form</code> aliases</li><li>Updated <a href="/guides/webhooks.html">Webhook</a> guides section with <code>case.id</code> and <code>case.show</code> properties</li></ul><h2 id="july-24-2024" tabindex="-1">July 24 2024 <a class="header-anchor" href="#july-24-2024" aria-label="Permalink to &quot;July 24 2024&quot;">​</a></h2><ul><li>[<strong>Amiqus SDK</strong>] Added endpoint <em>Create an Onfido SDK token</em></li><li>[<strong>Amiqus SDK</strong>] Added support for Photo ID step type in <em>Submit a step</em> endpoint</li></ul><h2 id="july-19-2024" tabindex="-1">July 19 2024 <a class="header-anchor" href="#july-19-2024" aria-label="Permalink to &quot;July 19 2024&quot;">​</a></h2><ul><li>Added <a href="/guides/use-cases/automation.html">Use Cases</a> guides section</li></ul><h2 id="july-2-2024" tabindex="-1">July 2 2024 <a class="header-anchor" href="#july-2-2024" aria-label="Permalink to &quot;July 2 2024&quot;">​</a></h2><ul><li>Added <code>national_insurance_number</code> to the <code>client</code> object</li></ul><h2 id="june-21-2024" tabindex="-1">June 21 2024 <a class="header-anchor" href="#june-21-2024" aria-label="Permalink to &quot;June 21 2024&quot;">​</a></h2><ul><li>Updated <code>name</code> object properties <ul><li>Added maximum length of <code>20</code> to the <code>title</code> property</li><li>Added maximum length of <code>255</code> to the <code>first_name</code> property</li><li>Added maximum length of <code>255</code> to the <code>middle_name</code> property</li><li>Added maximum length of <code>255</code> to the <code>last_name</code> property</li></ul></li></ul><h2 id="may-30-2024" tabindex="-1">May 30 2024 <a class="header-anchor" href="#may-30-2024" aria-label="Permalink to &quot;May 30 2024&quot;">​</a></h2><ul><li>Updated descriptions on client assignees, record assignees and client organisations endpoints in relation to <a href="#may-13-2024">May 13 2024</a> breaking changes</li></ul><h2 id="may-29-2024" tabindex="-1">May 29 2024 <a class="header-anchor" href="#may-29-2024" aria-label="Permalink to &quot;May 29 2024&quot;">​</a></h2><ul><li>Added missing <code>403</code> responses to several endpoints</li></ul><h2 id="may-22-2024" tabindex="-1">May 22 2024 <a class="header-anchor" href="#may-22-2024" aria-label="Permalink to &quot;May 22 2024&quot;">​</a></h2><ul><li>Added <em>Delete an attachment</em> endpoint</li><li>Updated <code>source_type</code> query parameter, adding <code>employment_referencing</code> on <em>List all files for a client</em> endpoint</li></ul><h2 id="may-13-2024" tabindex="-1">May 13 2024 <a class="header-anchor" href="#may-13-2024" aria-label="Permalink to &quot;May 13 2024&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p><p>The behaviour of creating and updating assignees for clients and records and organisations for clients has changed. Assignees and organisations are added using the POST operation and any existing links remain intact. Assignees and organisations are replaced using the PUT operation.</p><p>If an assignee or organisation is already attached to the entity and is included in a PUT operation, the existing link remains intact.</p><p>Only when new links are created will POST and PUT operations return <code>201</code>, otherwise they return <code>204</code>.</p><p>Client and record assignee endpoints now return <code>team_member</code> assignee types. These contain a team member&#39;s name and email and also their role within the team.</p></div><ul><li>Renamed <em>Set assignees for a client</em> to <em>Add assignees to a client</em> endpoint</li><li>Updated <em>Add assignees to a client</em> endpoint responses, removing <code>200</code>, adding <code>201</code> and <code>204</code></li><li>Removed <em>Update assignees for a client</em> endpoint</li><li>Added <em>Replace assignees for a client</em> endpoint</li><li>Renamed <em>Set assignees for a record</em> to <em>Add assignees to a record</em> endpoint</li><li>Updated <em>Add assignees to a record</em> endpoint responses, removing <code>200</code>, adding <code>201</code> and <code>204</code></li><li>Removed <em>Update assignees for a record</em> endpoint</li><li>Added <em>Replace assignees for a record</em> endpoint</li><li>Removed <em>Update organisations for a client</em> endpoint</li><li>Added <em>Add organisations for a client</em> endpoint</li><li>Updated <em>Replace organisations for a client</em> endpoint responses, removing <code>200</code>, adding <code>201</code> and <code>204</code></li><li>Removed <code>user</code> assignee type for assignees for a client and assignees for a record endpoints</li><li>Added <code>team_member</code> assignee type for assignees for a client and assignees for a record endpoints</li><li>Added <em>Create a file for a client</em> endpoint</li><li>Added <a href="/guides/concepts/data-formats.html">Data Formats</a> guides</li></ul><h2 id="may-7-2024" tabindex="-1">May 7 2024 <a class="header-anchor" href="#may-7-2024" aria-label="Permalink to &quot;May 7 2024&quot;">​</a></h2><ul><li>Updated <code>list</code> object making property <code>url</code> not nullable</li></ul><h2 id="april-18-2024" tabindex="-1">April 18 2024 <a class="header-anchor" href="#april-18-2024" aria-label="Permalink to &quot;April 18 2024&quot;">​</a></h2><ul><li>Added Cases resource group <ul><li><em>List all cases</em></li><li><em>Create a case</em></li><li><em>Retrieve a case</em></li><li><em>Update a case</em></li><li><em>List all reviews for a case</em></li><li><em>Create a case review</em></li></ul></li><li>Added Case Items resource group <ul><li><em>List all case items</em></li><li><em>Update items for a case</em></li></ul></li><li>Added Case Assignees resource group <ul><li><em>List all assignees for a case</em></li></ul></li><li>Added Aggregates resource group <ul><li><em>Case Status</em></li></ul></li></ul><h2 id="april-16-2024" tabindex="-1">April 16 2024 <a class="header-anchor" href="#april-16-2024" aria-label="Permalink to &quot;April 16 2024&quot;">​</a></h2><ul><li>Added missing <code>403</code> responses to several endpoints</li></ul><h2 id="april-9-2024" tabindex="-1">April 9 2024 <a class="header-anchor" href="#april-9-2024" aria-label="Permalink to &quot;April 9 2024&quot;">​</a></h2><ul><li>Added <code>sort_by</code> and <code>order_by</code> query parameters to <em>List all files for a client</em> endpoint <ul><li>Included <code>name</code>, <code>created_at</code> and <code>expires_at</code> options</li></ul></li><li>Updated expanded <code>source</code> object to return full <code>client_form</code> object on <em>List all files for a client</em> endpoint</li></ul><h2 id="april-3-2024" tabindex="-1">April 3 2024 <a class="header-anchor" href="#april-3-2024" aria-label="Permalink to &quot;April 3 2024&quot;">​</a></h2><ul><li>Updated <code>check</code> object <code>type</code> property to match terms used in the <code>step</code> object <ul><li>Changed <code>document</code> to <code>photo_id</code></li><li>Changed <code>open_banking</code> to <code>banking_information</code></li></ul></li></ul><h2 id="march-27-2024" tabindex="-1">March 27 2024 <a class="header-anchor" href="#march-27-2024" aria-label="Permalink to &quot;March 27 2024&quot;">​</a></h2><ul><li>Added <code>reference</code> value to <code>source_type</code> query parameter on <em>List all files for a client</em> endpoint</li><li>Added <em>Update a correction for a client</em> endpoint</li><li>Added <code>expires_at</code> property to <em>List all client files</em></li><li>Updated <code>source</code> query parameter, adding <code>client_form</code> and deprecating <code>form</code> on <em>List all files for a client</em> endpoint</li><li>Fixed expanded <code>attachments</code> property of <code>record_document</code> object to return an array of attachments objects</li></ul><h2 id="march-19-2024" tabindex="-1">March 19 2024 <a class="header-anchor" href="#march-19-2024" aria-label="Permalink to &quot;March 19 2024&quot;">​</a></h2><ul><li>Added <em>List all corrections for a client</em> endpoint</li><li>Added <code>reference</code> and <code>search</code> query parameters to <em>List all clients</em> endpoint</li><li>Added <code>sort_by</code> and <code>order_by</code> query parameters to <em>List all organisations for a client</em> endpoint</li></ul><h2 id="march-14-2024" tabindex="-1">March 14 2024 <a class="header-anchor" href="#march-14-2024" aria-label="Permalink to &quot;March 14 2024&quot;">​</a></h2><ul><li>Fixed link in description of <em>Retrieve team membership</em> endpoint</li></ul><h2 id="march-12-2024" tabindex="-1">March 12 2024 <a class="header-anchor" href="#march-12-2024" aria-label="Permalink to &quot;March 12 2024&quot;">​</a></h2><ul><li>Added <code>check.employment_referencing</code> step type</li></ul><h2 id="march-4-2024" tabindex="-1">March 4 2024 <a class="header-anchor" href="#march-4-2024" aria-label="Permalink to &quot;March 4 2024&quot;">​</a></h2><ul><li>Added <code>source</code> and <code>source_type</code> query parameters to <em>List all files for a client</em> endpoint</li><li>Added <code>created_by</code> query parameter on <em>List all records</em> endpoint</li><li>Deprecated <code>creator</code> query parameter on <em>List all records</em> endpoint</li></ul><h2 id="february-22-2024" tabindex="-1">February 22 2024 <a class="header-anchor" href="#february-22-2024" aria-label="Permalink to &quot;February 22 2024&quot;">​</a></h2><ul><li>Temporarily removed code samples from API Reference</li></ul><h2 id="february-20-2024" tabindex="-1">February 20 2024 <a class="header-anchor" href="#february-20-2024" aria-label="Permalink to &quot;February 20 2024&quot;">​</a></h2><ul><li>Updated <code>assignee</code> query parameter to accept <code>false</code> property to filter for unassigned records on <em>List all records</em> endpoint</li></ul><h2 id="february-8-2024" tabindex="-1">February 8 2024 <a class="header-anchor" href="#february-8-2024" aria-label="Permalink to &quot;February 8 2024&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">⭐ Authentication Guides and Self-Serve API Clients</p><p>OAuth clients can now be set up on a self-serve basis in Amiqus. The OAuth 2.0 guides have been updated to outline each set up step. A flow diagram of the OAuth 2.0 flow is included to help visually represent the process. Both the OAuth 2.0 and the Personal Access Token guides now include explanatory screenshots.</p><p>The Authentication guides have been updated with more guidance to help you decide which authentication option to chose for your integration.</p></div><ul><li>Updated <a href="/guides/authentication.html">Authentication</a>, <a href="/guides/auth/oauth.html">OAuth 2.0</a> and <a href="/guides/auth/personal-access-token.html">Personal Access Token</a> guides</li></ul><h2 id="february-7-2024" tabindex="-1">February 7 2024 <a class="header-anchor" href="#february-7-2024" aria-label="Permalink to &quot;February 7 2024&quot;">​</a></h2><ul><li>Added <code>created_by</code> to <code>client_file</code> object</li><li>Updated <code>expand</code> query parameter, adding <code>created_by</code> to <em>List all files for a client</em> endpoint</li></ul><h2 id="february-1-2024" tabindex="-1">February 1 2024 <a class="header-anchor" href="#february-1-2024" aria-label="Permalink to &quot;February 1 2024&quot;">​</a></h2><ul><li>Added <code>410</code> and <code>423</code> responses to <em>Download a file for a client</em> endpoint</li></ul><h2 id="january-25-2024" tabindex="-1">January 25 2024 <a class="header-anchor" href="#january-25-2024" aria-label="Permalink to &quot;January 25 2024&quot;">​</a></h2><ul><li>Updated <code>team_member</code> object making <code>role</code> property nullable</li></ul><h2 id="january-19-2024" tabindex="-1">January 19 2024 <a class="header-anchor" href="#january-19-2024" aria-label="Permalink to &quot;January 19 2024&quot;">​</a></h2><ul><li>Removed <code>has_reminder</code> property from <code>record</code> object, mistakenly added on January 17 2024</li></ul><h2 id="january-18-2024" tabindex="-1">January 18 2024 <a class="header-anchor" href="#january-18-2024" aria-label="Permalink to &quot;January 18 2024&quot;">​</a></h2><ul><li>Fixed issue with <code>expired_at</code> property on <code>record</code> object which incorrectly stated <code>expired_at</code> could be <code>true</code> or <code>null</code></li></ul><h2 id="january-17-2024" tabindex="-1">January 17 2024 <a class="header-anchor" href="#january-17-2024" aria-label="Permalink to &quot;January 17 2024&quot;">​</a></h2><ul><li>Added <code>sort_by</code>, <code>order_by</code> query parameters to <em>List all organisations</em> endpoint</li><li>Added ability to extend a record&#39;s expiry date in <em>Update a record</em> endpoint</li><li>Added <code>expired_at</code> to <code>record</code> object</li></ul><h2 id="january-8-2024" tabindex="-1">January 8 2024 <a class="header-anchor" href="#january-8-2024" aria-label="Permalink to &quot;January 8 2024&quot;">​</a></h2><ul><li>Added <code>secret</code> to <code>webhook</code> object</li><li>Fixed order of <code>webhook</code> object properties</li><li>Removed deprecated <code>face</code> property from <code>check.photo_id</code> step type request body examples</li></ul><h2 id="november-30-2023" tabindex="-1">November 30 2023 <a class="header-anchor" href="#november-30-2023" aria-label="Permalink to &quot;November 30 2023&quot;">​</a></h2><ul><li>Updated webhook guides with caveats of <code>client.deleted</code>,<code>client.record</code>, and <code>form.deleted</code> payloads</li></ul><h2 id="november-28-2023" tabindex="-1">November 28 2023 <a class="header-anchor" href="#november-28-2023" aria-label="Permalink to &quot;November 28 2023&quot;">​</a></h2><ul><li>Added <code>has_reminders</code> to <code>record</code> object</li></ul><h2 id="november-16-2023" tabindex="-1">November 16 2023 <a class="header-anchor" href="#november-16-2023" aria-label="Permalink to &quot;November 16 2023&quot;">​</a></h2><ul><li>Added <code>sort_by</code>, <code>order_by</code> query parameters to <em>List all clients</em> endpoint</li><li>Added <code>sort_by</code>, <code>order_by</code> query parameters to <em>List all records</em> endpoint</li></ul><h2 id="november-10-2023" tabindex="-1">November 10 2023 <a class="header-anchor" href="#november-10-2023" aria-label="Permalink to &quot;November 10 2023&quot;">​</a></h2><ul><li>Added <a href="/guides/glossary.html">Glossary of Terms</a></li></ul><h2 id="november-9-2023" tabindex="-1">November 9 2023 <a class="header-anchor" href="#november-9-2023" aria-label="Permalink to &quot;November 9 2023&quot;">​</a></h2><ul><li>Added <code>visibility</code> query parameter to <em>List all organisations</em> endpoint</li></ul><h2 id="november-2-2023" tabindex="-1">November 2 2023 <a class="header-anchor" href="#november-2-2023" aria-label="Permalink to &quot;November 2 2023&quot;">​</a></h2><ul><li>Updated <em>List all organisations for a client</em> endpoint description</li></ul><h2 id="october-27-2023" tabindex="-1">October 27 2023 <a class="header-anchor" href="#october-27-2023" aria-label="Permalink to &quot;October 27 2023&quot;">​</a></h2><ul><li>Added <code>archived_at</code> to <code>organisation</code> object</li></ul><h2 id="october-24-2023" tabindex="-1">October 24 2023 <a class="header-anchor" href="#october-24-2023" aria-label="Permalink to &quot;October 24 2023&quot;">​</a></h2><ul><li>Added <code>presets</code> property to <em>List all record templates</em> endpoint</li><li>Added <code>status</code>, <code>assignee</code> and <code>visibility</code> query parameters to <em>List all clients</em> endpoint</li><li>Added <code>client_visibility</code> query parameter to <em>List all records</em> endpoint</li><li>Updated migration guide with details on inclusion of archived entities for <em>List all records</em> and <em>List all clients</em> endpoints</li></ul><h2 id="october-16-2023" tabindex="-1">October 16 2023 <a class="header-anchor" href="#october-16-2023" aria-label="Permalink to &quot;October 16 2023&quot;">​</a></h2><ul><li>Added <code>visibility</code> query parameter to <em>List all records</em> endpoint</li></ul><h2 id="october-5-2023" tabindex="-1">October 5 2023 <a class="header-anchor" href="#october-5-2023" aria-label="Permalink to &quot;October 5 2023&quot;">​</a></h2><ul><li>Fix <code>document</code> object property <code>attachment</code> to allow <code>null</code> value</li></ul><h2 id="september-22-2023" tabindex="-1">September 22 2023 <a class="header-anchor" href="#september-22-2023" aria-label="Permalink to &quot;September 22 2023&quot;">​</a></h2><ul><li>Updated <em>List all records</em> endpoint <code>status</code> filter description detailing deprecated <code>failed</code> status</li></ul><h2 id="september-18-2023" tabindex="-1">September 18 2023 <a class="header-anchor" href="#september-18-2023" aria-label="Permalink to &quot;September 18 2023&quot;">​</a></h2><ul><li>Added <code>webhook</code> object property descriptions</li><li>Updated <em>List all webhooks</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated endpoint description</li></ul></li><li>Updated <em>Retrieve a webhook</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>Update a webhook</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>Delete a webhook</em> endpoint <ul><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>List all deliveries for a webhook</em> endpoint <ul><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Fix duplicate <code>title</code>, <code>other_title</code> and <code>middle_name</code> property types on <em>Create a cliend</em> endpoint</li></ul><h2 id="september-8-2023" tabindex="-1">September 8 2023 <a class="header-anchor" href="#september-8-2023" aria-label="Permalink to &quot;September 8 2023&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">⭐ Migration Guides</p><p>A new section of the developer guides has been added to help upgrade your integration from API v1 to v2.</p><p>The migration guides go into detail about every property, parameter and endpoint added, changed or removed in v2 and includes suggestions for alternatives.</p></div><ul><li>Added <a href="/guides/migration-guides/introduction.html">Migration Guides</a></li><li>Updated <em>Delete an assignee for a client</em> endpoint description</li><li>Updated <em>Delete assignees for a client</em> endpoint description</li><li>Updated <em>List all assignees for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated path parameter description</li></ul></li><li>Updated <em>Set assignees for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated request property and path parameter descriptions</li></ul></li><li>Updated <em>Update assignees for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated endpoint, request property and path parameter descriptions</li></ul></li><li>Updated <em>Delete assignee for a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated endpoint and path parameter descriptions</li></ul></li></ul><h2 id="september-7-2023" tabindex="-1">September 7 2023 <a class="header-anchor" href="#september-7-2023" aria-label="Permalink to &quot;September 7 2023&quot;">​</a></h2><ul><li>Add missing <code>perform_url</code> property to <em>List all records</em> and <em>Update a record</em> response samples</li></ul><h2 id="september-5-2023" tabindex="-1">September 5 2023 <a class="header-anchor" href="#september-5-2023" aria-label="Permalink to &quot;September 5 2023&quot;">​</a></h2><ul><li>Fix invalid syntax in webhook security code sample</li><li>Fix sort order in <em>List all clients</em> response sample</li></ul><h2 id="august-21-2023" tabindex="-1">August 21 2023 <a class="header-anchor" href="#august-21-2023" aria-label="Permalink to &quot;August 21 2023&quot;">​</a></h2><ul><li>Updated <em>List all records</em> endpoint <ul><li>Added <code>401</code> response</li></ul></li><li>Updated <em>Create a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated request property descriptions</li></ul></li><li>Updated <em>Retrieve a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated path parameter descriptions</li></ul></li><li>Updated <em>Expire a record</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated path parameter descriptions</li></ul></li></ul><h2 id="august-14-2023" tabindex="-1">August 14 2023 <a class="header-anchor" href="#august-14-2023" aria-label="Permalink to &quot;August 14 2023&quot;">​</a></h2><ul><li>Updated <em>Delete an assignee for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated query parameter descriptions</li></ul></li><li>Updated <em>List all assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Set assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated query parameter descriptions</li></ul></li><li>Updated <em>Update assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated query parameter descriptions</li></ul></li><li>Updated <em>Delete assignees for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li></ul><h2 id="august-9-2023" tabindex="-1">August 9 2023 <a class="header-anchor" href="#august-9-2023" aria-label="Permalink to &quot;August 9 2023&quot;">​</a></h2><ul><li>Added <code>address</code> object property descriptions</li><li>Updated <em>Retrieve address for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Replace an address for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li></ul><h2 id="august-3-2023" tabindex="-1">August 3 2023 <a class="header-anchor" href="#august-3-2023" aria-label="Permalink to &quot;August 3 2023&quot;">​</a></h2><ul><li>Added <code>client</code> object property descriptions</li><li>Updated <em>List all clients</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Create a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Update a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li></ul><h2 id="august-2-2023" tabindex="-1">August 2 2023 <a class="header-anchor" href="#august-2-2023" aria-label="Permalink to &quot;August 2 2023&quot;">​</a></h2><ul><li>Deprecated <em>Archive a record</em> endpoint. Replaced by <em>Update a record</em> endpoint</li></ul><h2 id="july-31-2023" tabindex="-1">July 31 2023 <a class="header-anchor" href="#july-31-2023" aria-label="Permalink to &quot;July 31 2023&quot;">​</a></h2><ul><li>Added <code>perform_link</code> to <code>record</code> object</li></ul><h2 id="july-26-2023" tabindex="-1">July 26 2023 <a class="header-anchor" href="#july-26-2023" aria-label="Permalink to &quot;July 26 2023&quot;">​</a></h2><ul><li>Added <code>is_reviewed</code> property to <em>Update a record</em> endpoint. Allows toggling a record&#39;s reviewed state</li></ul><h2 id="july-21-2023" tabindex="-1">July 21 2023 <a class="header-anchor" href="#july-21-2023" aria-label="Permalink to &quot;July 21 2023&quot;">​</a></h2><ul><li>Added <em>Update a record</em> endpoint</li></ul><h2 id="july-14-2023" tabindex="-1">July 14 2023 <a class="header-anchor" href="#july-14-2023" aria-label="Permalink to &quot;July 14 2023&quot;">​</a></h2><ul><li>Updated <em>List all records</em> endpoint <ul><li>Added <code>page</code>, <code>limit</code>, <code>status</code>, <code>creator</code> and <code>assignee</code> query parameters</li></ul></li></ul><h2 id="july-6-2023" tabindex="-1">July 6 2023 <a class="header-anchor" href="#july-6-2023" aria-label="Permalink to &quot;July 6 2023&quot;">​</a></h2><ul><li>Updated <em>Delete organisation for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li><li>Updated <em>Delete organisations for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li><li>Updated <em>List all organisations for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Update organisations for a client</em> endpoint <ul><li>Added <code>404</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Replace organisations for a client</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li></ul><h2 id="july-4-2023" tabindex="-1">July 4 2023 <a class="header-anchor" href="#july-4-2023" aria-label="Permalink to &quot;July 4 2023&quot;">​</a></h2><ul><li>Updated <em>Create an organisation</em> and <em>Update an organisation</em> properties <ul><li>Updated <code>jurisdiction</code> description with details of requirement</li></ul></li><li>Added request code samples</li></ul><h2 id="june-28-2023" tabindex="-1">June 28 2023 <a class="header-anchor" href="#june-28-2023" aria-label="Permalink to &quot;June 28 2023&quot;">​</a></h2><ul><li>Added <code>template</code> property to <em>Create a record</em> endpoint. Allows creation of records using a record template</li></ul><h2 id="june-26-2023" tabindex="-1">June 26 2023 <a class="header-anchor" href="#june-26-2023" aria-label="Permalink to &quot;June 26 2023&quot;">​</a></h2><ul><li>Added <code>expand</code> query parameter examples for <em>List all steps for a record</em> endpoint</li></ul><h2 id="june-20-2023" tabindex="-1">June 20 2023 <a class="header-anchor" href="#june-20-2023" aria-label="Permalink to &quot;June 20 2023&quot;">​</a></h2><ul><li>Added <em>Create an attachment</em> endpoint</li></ul><h2 id="june-13-2023" tabindex="-1">June 13 2023 <a class="header-anchor" href="#june-13-2023" aria-label="Permalink to &quot;June 13 2023&quot;">​</a></h2><ul><li>Added <code>organisation</code> object property descriptions</li><li>Updated <em>List all organisations</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Create an organisation</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve an organisation</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li></ul></li><li>Updated <em>Update an organisation</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>404</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li></ul><h2 id="june-1-2023" tabindex="-1">June 1 2023 <a class="header-anchor" href="#june-1-2023" aria-label="Permalink to &quot;June 1 2023&quot;">​</a></h2><ul><li>Added <code>status</code> enum values to <em>Create a client</em> and <em>Update a client</em> endpoints</li><li>Added <code>user</code> object property descriptions</li><li>Updated <code>422 Unprocessable Content</code> response description with examples</li><li>Updated <em>Check service status</em> endpoint <ul><li>Removed <code>403</code> response</li><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve user account</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Update user account</em> endpoint <ul><li>Added <code>401</code> response</li><li>Added <code>422</code> response</li><li>Updated description</li></ul></li><li>Updated <em>List all my teams</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve team membership</em> endpoint <ul><li>Added <code>401</code> response</li><li>Updated description</li></ul></li><li>Updated <em>Retrieve a team member</em> endpoint <ul><li>Added <code>401</code> response</li></ul></li></ul><h2 id="may-31-2023" tabindex="-1">May 31 2023 <a class="header-anchor" href="#may-31-2023" aria-label="Permalink to &quot;May 31 2023&quot;">​</a></h2><ul><li>Changed <code>403</code> responses <ul><li>Updated response from <code>403 Unauthorized</code> to <code>403 Forbidden</code></li><li>Removed <code>error</code> property</li><li>Added <code>message</code> property</li></ul></li></ul><h2 id="may-29-2023" tabindex="-1">May 29 2023 <a class="header-anchor" href="#may-29-2023" aria-label="Permalink to &quot;May 29 2023&quot;">​</a></h2><ul><li>Added <code>secret</code> property to <code>webhook</code> object</li><li>Added <code>201 Created</code> success responses to <em>Update assignees for a record</em> and <em>Update assignees for a client</em> endpoints</li></ul><h2 id="may-26-2023" tabindex="-1">May 26 2023 <a class="header-anchor" href="#may-26-2023" aria-label="Permalink to &quot;May 26 2023&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed Document Transfer record step preferences <ul><li>Added required <code>attachment</code> property to &quot;New Document&quot; type</li></ul></li></ul><h2 id="may-22-2023" tabindex="-1">May 22 2023 <a class="header-anchor" href="#may-22-2023" aria-label="Permalink to &quot;May 22 2023&quot;">​</a></h2><ul><li>Changed HSCNI Access NI record step preferences <ul><li>Updated <code>barring_adults</code> and <code>barring_children</code> description with details of requirement</li><li>Changed <code>false</code> as default value for <code>barring_adults</code> and <code>barring_children</code> properties</li></ul></li><li>Changed Watchlist record step preferences <ul><li>Changed <code>true</code> as default value for <code>silent</code> property</li><li>Updated <code>silent</code> description with details of availability</li></ul></li></ul><h2 id="may-18-2023" tabindex="-1">May 18 2023 <a class="header-anchor" href="#may-18-2023" aria-label="Permalink to &quot;May 18 2023&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed Dummy record step preferences <ul><li><code>preferences</code> is no longer a required property</li><li>Changed <code>payment_amount</code> from <code>float</code> to <code>integer</code></li><li>Updated <code>payment_amount</code> description with details of value format</li><li>Changed minimum and maximum value of <code>payment_amount</code> to <code>0</code> – <code>10000</code></li><li>Changed minimum and maximum value of <code>credit_cost</code> to <code>0</code> – <code>100</code></li></ul></li></ul><h2 id="may-17-2023" tabindex="-1">May 17 2023 <a class="header-anchor" href="#may-17-2023" aria-label="Permalink to &quot;May 17 2023&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed Banking Information record step preferences <ul><li>Renamed step type <code>check.open_banking</code> to <code>check.banking_information</code></li><li><code>preferences</code> is no longer a required property</li><li>Added <code>false</code> as default value for <code>balance</code> and <code>transactions</code> properties</li></ul></li><li>Changed Criminal record step preferences <ul><li><code>free_volunteer</code> property for DBS: Standard and DBS: Enhanced types is now <strong>read only</strong></li></ul></li><li>Changed Document Transfer record step preferences <ul><li>Renamed property <code>confirmed</code> to <code>require_confirmation</code></li><li>Renamed property <code>returned</code> to <code>require_return</code></li></ul></li><li>Changed Photo ID record step preferences <ul><li><code>face</code> and <code>liveness</code> properties for <code>standard</code> report type are now <strong>read only</strong></li><li>Added <code>issuing_countries</code> property for <code>standard</code> and <code>biometric</code> report types</li><li>Updated <code>facial_similarity</code> description for <code>standard</code> report type with details of cost changes</li></ul></li><li>Changed Watchlist record step preferences <ul><li>Added <code>1</code> and <code>3</code> options to <code>monitor</code> property</li><li>Added <code>false</code> as default value for <code>silent</code> and <code>monitor</code> properties</li><li>Updated <code>silent</code> and <code>monitor</code> descriptions with details of availability and cost changes</li></ul></li><li>Changed <code>record_document</code> object <ul><li>Renamed config choice headings <ul><li>&quot;Sent&quot; to &quot;Document Transfer&quot;</li><li>&quot;Requested&quot; to &quot;Document Request&quot;</li></ul></li><li>Renamed property <code>description</code> to <code>instructions</code></li><li>Renamed property <code>instructions</code> to <code>return_message</code></li><li>Added <code>return_message</code> description</li></ul></li><li>Removed <code>link</code> and <code>in_person</code> notification types from <em>Create a record</em> endpoint</li><li>Added <code>false</code> notification type to <em>Create a record</em> endpoint</li></ul><h2 id="may-12-2023" tabindex="-1">May 12 2023 <a class="header-anchor" href="#may-12-2023" aria-label="Permalink to &quot;May 12 2023&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">⚠️ Breaking changes</p><p>This release includes breaking changes.</p></div><ul><li>Changed success response codes from <code>200 OK</code> to <code>201 Created</code> for endpoints: <ul><li><em>Create a client</em></li><li><em>Set assignees for a client</em></li><li><em>Create an organisation</em></li><li><em>Create a record</em></li><li><em>Set assignees for a record</em></li><li><em>Create a webhook</em></li></ul></li></ul><h2 id="may-11-2023" tabindex="-1">May 11 2023 <a class="header-anchor" href="#may-11-2023" aria-label="Permalink to &quot;May 11 2023&quot;">​</a></h2><ul><li>Changed maximum length of <code>message</code> property to <code>5000</code> for <em>Create a record</em> endpoint</li></ul><h2 id="may-10-2023" tabindex="-1">May 10 2023 <a class="header-anchor" href="#may-10-2023" aria-label="Permalink to &quot;May 10 2023&quot;">​</a></h2><ul><li>Removed <code>enabled</code> query parameter from <em>List all forms for a client</em> endpoint</li></ul>',148),r=[l];function t(n,c,s,u,p,m){return o(),d("div",null,r)}const f=e(i,[["render",t]]);export{b as __pageData,f as default};
