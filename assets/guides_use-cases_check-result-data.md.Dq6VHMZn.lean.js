import{_ as i,D as o,c as s,b as c,w as e,a4 as n,a3 as a,o as t,I as l,a as d}from"./chunks/framework.BG__5Sii.js";const w=JSON.parse('{"title":"Retrieve granular check result data","description":"Learn how to use the Retrieve a Check endpoint to access detailed result data for a specific check, currently supported for the Photo ID check.","frontmatter":{"title":"Retrieve granular check result data","description":"Learn how to use the Retrieve a Check endpoint to access detailed result data for a specific check, currently supported for the Photo ID check."},"headers":[],"relativePath":"guides/use-cases/check-result-data.md","filePath":"guides/use-cases/check-result-data.md","lastUpdated":1744018019000}'),h={name:"guides/use-cases/check-result-data.md"},u=a("",6),p=a("",11);function f(g,m,k,_,v,y){const r=o("Mermaid");return t(),s("div",null,[u,(t(),c(n,null,{default:e(()=>[l(r,{id:"mermaid-32",class:"mermaid",graph:"sequenceDiagram%0Aparticipant%20Script%20as%20Your%20Script%0Aparticipant%20Amiqus%20as%20Amiqus%20API%0A%0A%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Frecords%2F%7BrecordId%7D%2Fsteps%0A%20%20%20%20Amiqus--%3E%3EScript%3A%20Step%20objects%20including%20Photo%20ID%20step%0A%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Fchecks%2F%7BcheckId%7D%0A%20%20%20%20Amiqus--%3E%3EScript%3A%20Granular%20check%20result%20data%0A"})]),fallback:e(()=>[d(" Loading... ")]),_:1})),p])}const q=i(h,[["render",f]]);export{w as __pageData,q as default};
