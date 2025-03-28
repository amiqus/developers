import{_ as l,D as o,c as n,b as s,w as e,a4 as r,a3 as i,o as a,I as c,a as d}from"./chunks/framework.BG__5Sii.js";const v=JSON.parse('{"title":"Download All Client Files","description":"Learn how to download all files for a client by listing clients, retrieving file details, and downloading each file using the Amiqus API.","frontmatter":{"title":"Download All Client Files","description":"Learn how to download all files for a client by listing clients, retrieving file details, and downloading each file using the Amiqus API."},"headers":[],"relativePath":"guides/use-cases/download-all-files.md","filePath":"guides/use-cases/download-all-files.md","lastUpdated":1743165697000}'),h={name:"guides/use-cases/download-all-files.md"},f=i("",6),u=i("",12);function p(m,g,_,w,A,b){const t=o("Mermaid");return a(),n("div",null,[f,(a(),s(r,null,{default:e(()=>[c(t,{id:"mermaid-22",class:"mermaid",graph:"sequenceDiagram%0A%20%20%20%20participant%20Script%20as%20Your%20Script%0A%20%20%20%20participant%20Amiqus%20as%20Amiqus%20API%0A%20%20%20%20participant%20Storage%20as%20Local%20Storage%0A%0A%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Fclients%0A%20%20%20%20loop%20For%20each%20client%0A%20%20%20%20%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Fclients%2F%7BclientId%7D%2Ffiles%0A%20%20%20%20%20%20%20%20loop%20For%20each%20file%0A%20%20%20%20%20%20%20%20%20%20%20%20Script-%3E%3EAmiqus%3A%20GET%20%2Fclients%2F%7BclientId%7D%2Ffiles%2F%7BfileId%7D%2Fdownload%0A%20%20%20%20%20%20%20%20%20%20%20%20Amiqus--%3E%3EScript%3A%20File%20data%0A%20%20%20%20%20%20%20%20%20%20%20%20Script-%3E%3EStorage%3A%20Save%20file%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A"})]),fallback:e(()=>[d(" Loading... ")]),_:1})),u])}const y=l(h,[["render",p]]);export{v as __pageData,y as default};
