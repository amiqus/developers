import{_ as e,c as a,o as t,a3 as o}from"./chunks/framework.BG__5Sii.js";const f=JSON.parse('{"title":"Data Formats","description":"","frontmatter":{"next":false},"headers":[],"relativePath":"guides/concepts/data-formats.md","filePath":"guides/concepts/data-formats.md","lastUpdated":1724935018000}'),r={name:"guides/concepts/data-formats.md"},d=o('<h1 id="data-formats" tabindex="-1">Data Formats <a class="header-anchor" href="#data-formats" aria-label="Permalink to &quot;Data Formats&quot;">​</a></h1><h2 id="date-and-time" tabindex="-1">Date and Time <a class="header-anchor" href="#date-and-time" aria-label="Permalink to &quot;Date and Time&quot;">​</a></h2><p>Date and time formatted strings adhere to ISO 8601 standards as outlined in <a href="https://datatracker.ietf.org/doc/html/rfc3339#section-5.6" target="_blank" rel="noreferrer">RFC 3339</a>. This ensures consistency and interoperability across different systems. Date strings are formatted as either <code>date</code> or <code>date-time</code>.</p><h3 id="date" tabindex="-1">Date <a class="header-anchor" href="#date" aria-label="Permalink to &quot;Date&quot;">​</a></h3><p>Date formatted strings should follow the full-date notation, <code>YYYY-MM-DD</code>, where:</p><ul><li><code>YYYY</code> represents the year with four digits.</li><li><code>MM</code> represents the month with two digits (01–12).</li><li><code>DD</code> represents the day with two digits (01–31).</li></ul><p>Example: <code>2024-05-07</code></p><h3 id="date-and-time-1" tabindex="-1">Date and time <a class="header-anchor" href="#date-and-time-1" aria-label="Permalink to &quot;Date and time&quot;">​</a></h3><p>Date and time formatted strings should follow the date-time format <code>YYYY-MM-DDTHH:MM:SSZ</code>, where:</p><ul><li><code>YYYY-MM-DD</code> represents the date in the same format as described above.</li><li><code>T</code> separates the date and time components.</li><li><code>HH:MM:SS</code> represents the time in hours (00–23), minutes (00–59), and seconds (00–59) respectively.</li><li><code>Z</code> indicates that the time is in Coordinated Universal Time (UTC), also known as &quot;Zulu&quot; time.</li></ul><p>Example: <code>2024-05-07T12:30:45Z</code></p><h2 id="other-formats" tabindex="-1">Other Formats <a class="header-anchor" href="#other-formats" aria-label="Permalink to &quot;Other Formats&quot;">​</a></h2><h3 id="query-parameter-encoding" tabindex="-1">Query parameter encoding <a class="header-anchor" href="#query-parameter-encoding" aria-label="Permalink to &quot;Query parameter encoding&quot;">​</a></h3><p>We allow some reserved characters in query parameter values to be sent without percent-encoding. Characters <code>:/?[]@!$&#39;()*,;</code> can be sent as they are, or can be percent-encoded. For example <code>foo=bar/baz.txt</code> can be sent as is or encoded <code>foo%3Dbar%2Fbaz.txt</code>.</p><p>The other reserved characters, <code>#&amp;=+</code>, must be sent percent-encoded.</p><h3 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h3><p>Unless otherwise noted, all responses containing data are returned with a <code>Content-type: application/json</code> header and JSON string body.</p><p>Forward slashes (<code>/</code>) are not escaped in JSON strings but multibyte unicode characters are. The JSON string <code>{&quot;message&quot;: &quot;Tomás starts on 27/05/2024 😊&quot;}</code> is returned <code>{&quot;message&quot;: &quot;Tom\\u00e1s starts on 27/05/2024 \\ud83d\\ude0a&quot;}</code>.</p>',18),s=[d];function n(i,c,l,h,m,u){return t(),a("div",null,s)}const b=e(r,[["render",n]]);export{f as __pageData,b as default};
