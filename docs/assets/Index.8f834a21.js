import{e as l,d as e}from"./index.e903c96c.js";import{g as m,u as p,h as d,z as f,D as v,j as D,o as E,a as b,d as j,E as g}from"./vendor.2e0829af.js";import{u as T,_ as y}from"./index.b25df931.js";const h=[{title:{cn:"\u4ECB\u7ECD",en:"Introduce"},type:"main-title",disabled:!1,path:"/design/introduce_m"},{title:{cn:"\u7248\u672C\u89C4\u8303",en:"Version"},type:"main-title",disabled:!1,path:"/design/version_m"},{title:{cn:"\u5E38\u89C1\u95EE\u9898",en:"FAQ"},type:"main-title",disabled:!1,path:"/design/faq_m"},{title:{cn:"\u5982\u4F55\u8D21\u732E",en:"Contribute"},type:"main-title",disabled:!1,path:"/design/contribute_m"},{title:{cn:"\u8BBE\u8BA1",en:"Design"},type:"main-title",disabled:!0,path:"/design/",children:[{title:{cn:"\u989C\u8272",en:"Color"},type:"second-title",path:"/design/color_m"}]}];function I(n){switch(n){case"./Doc/cn/color.md":return e(()=>import("./color.26c8ffe7.js"),[]);case"./Doc/cn/contribute.md":return e(()=>import("./contribute.c910c054.js"),[]);case"./Doc/cn/faq.md":return e(()=>import("./faq.5638a784.js"),[]);case"./Doc/cn/introduce.md":return e(()=>import("./introduce.5c5f4713.js"),[]);case"./Doc/cn/version.md":return e(()=>import("./version.724078d2.js"),[]);case"./Doc/en/color.md":return e(()=>import("./color.1f5da1fd.js"),[]);case"./Doc/en/contribute.md":return e(()=>import("./contribute.7c081337.js"),[]);case"./Doc/en/faq.md":return e(()=>import("./faq.2028b36e.js"),[]);case"./Doc/en/introduce.md":return e(()=>import("./introduce.2086483c.js"),[]);case"./Doc/en/version.md":return e(()=>import("./version.62065135.js"),[]);default:return new Promise(function(i,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}const L={class:"app-design"};function P(n){const{getLocals:i}=T();m();const t=p(),r=d(""),a=d(""),s=(c=!1)=>{const o=t.params.resource;if(!o||typeof o=="object")return;c&&(window.document.documentElement.scrollTop=0,window.document.body.scrollTop=0);const _=o.split("_"),u=i()==="zh_CN"?"cn":"en";r.value=_[1],r.value==="m"&&(a.value=I(`./Doc/${u}/${_[0]}.md`))};return f(()=>{s(!0),v(()=>{l.on("lang-change",c=>{s()})})}),D(()=>t.params,()=>s(!0)),(c,o)=>(E(),b("div",L,[j(y,{top:"80",list:g(h),"doc-type":r.value,resource:a.value},null,8,["list","doc-type","resource"])]))}const R={name:"design"},w=Object.assign(R,{setup:P});export{w as default};
