import{_ as t,D as n,c as r,b as l,w as e,a4 as i,a3 as a,o as s,I as p,a as c}from"./chunks/framework.BG__5Sii.js";const w=JSON.parse('{"title":"Standard Amiqus Integration Flow","description":"How to create a new Amiqus check as part of a website registration process","frontmatter":{"title":"Standard Amiqus Integration Flow","description":"How to create a new Amiqus check as part of a website registration process"},"headers":[],"relativePath":"guides/use-cases/registration-flow.md","filePath":"guides/use-cases/registration-flow.md","lastUpdated":1744018019000}'),u={name:"guides/use-cases/registration-flow.md"},d=a("",6),h=a("",19);function F(y,m,q,D,g,f){const o=n("Mermaid");return s(),r("div",null,[d,(s(),l(i,null,{default:e(()=>[p(o,{id:"mermaid-27",class:"mermaid",graph:"sequenceDiagram%0A%20%20%20%20autonumber%0A%20%20%20%20participant%20User%0A%20%20%20%20participant%20Your%20Website%0A%20%20%20%20participant%20Amiqus%0A%0A%20%20%20%20Note%20over%20Your%20Website%3A%200)%20Register%20Webhook%20(Prerequisite)%0A%20%20%20%20User-%3E%3EYour%20Website%3A%201)%20Register%20with%20(Name%2C%20Email%2C%20etc.)%0A%20%20%20%20Your%20Website-%3E%3EAmiqus%3A%202.1)%20Create%20a%20Client%0A%20%20%20%20Amiqus--%3E%3EYour%20Website%3A%20Client%20created%20(Client%20ID)%0A%20%20%20%20Your%20Website-%3E%3EAmiqus%3A%202.2)%20Create%20a%20Record%20(using%20Client%20ID)%0A%20%20%20%20Amiqus--%3E%3EYour%20Website%3A%20Record%20created%20(Record%20ID)%0A%20%20%20%20Amiqus-%3E%3EUser%3A%203)%20Send%20Email%20to%20Complete%20Checks%0A%20%20%20%20User-%3E%3EAmiqus%3A%20Complete%20Checks%0A%20%20%20%20Amiqus--%3E%3EYour%20Website%3A%20Webhook%20trigger%20when%20Record%20is%20updated%0A"})]),fallback:e(()=>[c(" Loading... ")]),_:1})),h])}const b=t(u,[["render",F]]);export{w as __pageData,b as default};
