import{_ as o,D as n,c as l,b as r,w as e,a4 as i,a3 as t,o as s,I as p,a as c,a5 as d,a6 as u,a7 as h}from"./chunks/framework.BG__5Sii.js";const v=JSON.parse('{"title":"OAuth 2.0","description":"","frontmatter":{"next":false,"outline":[2,3]},"headers":[],"relativePath":"guides/auth/oauth.md","filePath":"guides/auth/oauth.md","lastUpdated":1724935018000}'),y={name:"guides/auth/oauth.md"},g=t("",18),F=t("",26);function m(A,D,b,f,C,q){const a=n("Mermaid");return s(),l("div",null,[g,(s(),r(i,null,{default:e(()=>[p(a,{id:"mermaid-116",class:"mermaid",graph:"sequenceDiagram%0A%20%20%20%20participant%20Your%20App%0A%20%20%20%20participant%20User%0A%20%20%20%20Note%20over%20Your%20App%2CUser%3A%20User%20Authorisation%3A%20%3Cbr%2F%3E%20Your%20Application%2FAPI%20client%20will%20ask%20for%20authorisation%20%3Cbr%2F%3E%20from%20your%20end%20users%20(who%20will%20also%20have%20an%20Amiqus%20account).%0A%20%20%20%20Your%20App%20-%3E%3E%20User%20%3A%201.%20Request%20for%20authorisation%0A%20%20%20%20User%20-%3E%3E%20Your%20App%20%3A%202.%20Authorisation%20granted%20(Authorisation%20Code%20provided%20to%20your%20app)%0A%20%20%20%20participant%20Amiqus%20Auth%20Server%0A%20%20%20%20Note%20over%20Your%20App%2CAmiqus%20Auth%20Server%3A%20Obtain%20Access%20Token%3A%20%3Cbr%2F%3E%20Your%20Application%2FAPI%20client%20will%20ask%20Amiqus'%20authorisation%20server%20%3Cbr%2F%3E%20to%20exhange%20the%20Authorisation%20Code%20for%20an%20Access%20Token.%0A%20%20%20%20Your%20App%20-%3E%3E%20Amiqus%20Auth%20Server%3A%203.%20Share%20Authorisation%20Code%0A%20%20%20%20Amiqus%20Auth%20Server%20-%3E%3E%20Your%20App%3A%204.%20Access%20Token%20provided%0A%20%20%20%20participant%20Amiqus%20Resource%20Server%0A%20%20%20%20Note%20over%20Your%20App%2CAmiqus%20Resource%20Server%3A%20Make%20API%20Requests%3A%20%3Cbr%2F%3E%20Your%20Application%2FAPI%20client%20can%20now%20make%20requests%20to%20Amiqus%20API.%0A%20%20%20%20Your%20App%20-%3E%3E%20Amiqus%20Resource%20Server%3A%205.%20Provide%20Access%20Token%0A%20%20%20%20Amiqus%20Resource%20Server%20-%3E%3E%20Your%20App%3A%206.%20Use%20API%20to%20access%20protected%20data%0A%0A"})]),fallback:e(()=>[c(" Loading... ")]),_:1})),F])}const _=o(y,[["render",m]]);export{v as __pageData,_ as default};
