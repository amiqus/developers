import{_ as o,D as n,c as r,b as l,w as s,a4 as p,a3 as t,o as e,I as i,a as c}from"./chunks/framework.BG__5Sii.js";const _=JSON.parse('{"title":"Submit Identity Report via the Amiqus SDK API","description":"Learn how to submit an Identity Report using the Amiqus SDK API, keeping your users within your own ecosystem.","frontmatter":{"title":"Submit Identity Report via the Amiqus SDK API","description":"Learn how to submit an Identity Report using the Amiqus SDK API, keeping your users within your own ecosystem."},"headers":[],"relativePath":"guides/use-cases/id-report-submission-sdk-api.md","filePath":"guides/use-cases/id-report-submission-sdk-api.md","lastUpdated":1740586948000}'),u={name:"guides/use-cases/id-report-submission-sdk-api.md"},d=t("",6),D=t("",19);function y(h,F,m,q,f,b){const a=n("Mermaid");return e(),r("div",null,[d,(e(),l(p,null,{default:s(()=>[i(a,{id:"mermaid-32",class:"mermaid",graph:"sequenceDiagram%0A%20%20%20%20participant%20User%0A%20%20%20%20participant%20Your%20Website%20as%20Your%20Website%0A%20%20%20%20participant%20Amiqus%0A%0A%20%20%20%20User-%3E%3EYour%20Website%3A%201)%20Enter%20identity%20details%20via%20form%0A%20%20%20%20Your%20Website-%3E%3EAmiqus%3A%202)%20POST%20%2Fsdk_token%20with%20record_id%0A%20%20%20%20Amiqus--%3E%3EYour%20Website%3A%20Response%20with%20SDK%20token%0A%20%20%20%20Your%20Website-%3E%3EAmiqus%3A%203)%20POST%20%2Fsteps%2F%7Bstep_id%7D%20with%20identity%20report%20data%20%26%20SDK%20token%0A%20%20%20%20Amiqus--%3E%3EYour%20Website%3A%204)%20Response%20with%20submission%20status%0A"})]),fallback:s(()=>[c(" Loading... ")]),_:1})),D])}const A=o(u,[["render",y]]);export{_ as __pageData,A as default};
