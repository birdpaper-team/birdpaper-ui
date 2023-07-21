import{i as h}from"./chunks/index.37409154.js";import{d as s,o as c,c as o,g as p,F as v,n as y,b as r,t,M as d,u,a as _,e as w}from"./app.d9c827c8.js";const a={"primary-0":"#f0f7fc","primary-1":"#e6f4ff","primary-2":"#bae0ff","primary-3":"#91caff","primary-4":"#449efb","primary-5":"#4096ff","primary-6":"#1677ff","primary-7":"#0958d9","primary-8":"#003eb3","primary-9":"#002c8c","success-0":"#edfceb","success-1":"#e5f8db","success-2":"#d9f7be","success-3":"#b7eb8f","success-4":"#95de64","success-5":"#73d13d","success-6":"#52c41a","success-7":"#209124","success-8":"#237804","success-9":"#135200","warning-0":"#fff7e6","warning-1":"#faefd7","warning-2":"#ffe49c","warning-3":"#ffd591","warning-4":"#ffc069","warning-5":"#ffa940","warning-6":"#fa8c16","warning-7":"#d46b08","warning-8":"#ad4e00","warning-9":"#873800","danger-0":"#fff1f0","danger-1":"#ffe8e6","danger-2":"#ffccc7","danger-3":"#ffa39e","danger-4":"#ff7875","danger-5":"#ff4d4f","danger-6":"#f5222d","danger-7":"#cf1322","danger-8":"#a8071a","danger-9":"#820014","gary-1":"#ffffff","gary-2":"#fafafa","gary-3":"#f5f5f5","gary-4":"#f0f0f0","gary-5":"#d9d9d9","gary-6":"#bfbfbf","gary-7":"#8c8c8c","gary-8":"#595959","gary-9":"#434343","gary-10":"#262626","gary-11":"#1f1f1f","gary-12":"#141414"},b=["primary","success","warning","danger","gary"],f={primary:{title:"主色 / Primary",list:[{name:"primary-0",value:a["primary-0"],color:a["gary-10"]},{name:"primary-1",value:a["primary-1"],color:a["gary-10"]},{name:"primary-2",value:a["primary-2"],color:a["gary-10"]},{name:"primary-3",value:a["primary-3"],color:a["gary-10"]},{name:"primary-4",value:a["primary-4"],color:a["gary-10"]},{name:"primary-5",value:a["primary-5"],color:a["gary-10"]},{name:"primary-6",value:a["primary-6"],color:a["gary-1"]},{name:"primary-7",value:a["primary-7"],color:a["gary-1"]},{name:"primary-8",value:a["primary-8"],color:a["gary-1"]},{name:"primary-9",value:a["primary-9"],color:a["gary-1"]}]},success:{title:"成功色 / Success",list:[{name:"success-0",value:a["success-0"],color:a["gary-10"]},{name:"success-1",value:a["success-1"],color:a["gary-10"]},{name:"success-2",value:a["success-2"],color:a["gary-10"]},{name:"success-3",value:a["success-3"],color:a["gary-10"]},{name:"success-4",value:a["success-4"],color:a["gary-10"]},{name:"success-5",value:a["success-5"],color:a["gary-10"]},{name:"success-6",value:a["success-6"],color:a["gary-1"]},{name:"success-7",value:a["success-7"],color:a["gary-1"]},{name:"success-8",value:a["success-8"],color:a["gary-1"]},{name:"success-9",value:a["success-9"],color:a["gary-1"]}]},warning:{title:"警告色 / Warning",list:[{name:"warning-0",value:a["warning-0"],color:a["gary-10"]},{name:"warning-1",value:a["warning-1"],color:a["gary-10"]},{name:"warning-2",value:a["warning-2"],color:a["gary-10"]},{name:"warning-3",value:a["warning-3"],color:a["gary-10"]},{name:"warning-4",value:a["warning-4"],color:a["gary-10"]},{name:"warning-5",value:a["warning-5"],color:a["gary-10"]},{name:"warning-6",value:a["warning-6"],color:a["gary-1"]},{name:"warning-7",value:a["warning-7"],color:a["gary-1"]},{name:"warning-8",value:a["warning-8"],color:a["gary-1"]},{name:"warning-9",value:a["warning-9"],color:a["gary-1"]}]},danger:{title:"危险色 / Danger",list:[{name:"danger-0",value:a["danger-0"],color:a["gary-10"]},{name:"danger-1",value:a["danger-1"],color:a["gary-10"]},{name:"danger-2",value:a["danger-2"],color:a["gary-10"]},{name:"danger-3",value:a["danger-3"],color:a["gary-10"]},{name:"danger-4",value:a["danger-4"],color:a["gary-10"]},{name:"danger-5",value:a["danger-5"],color:a["gary-10"]},{name:"danger-6",value:a["danger-6"],color:a["gary-1"]},{name:"danger-7",value:a["danger-7"],color:a["gary-1"]},{name:"danger-8",value:a["danger-8"],color:a["gary-1"]},{name:"danger-9",value:a["danger-9"],color:a["gary-1"]}]},gary:{title:"中性色 / Gary",list:[{name:"gary-1",value:a["gary-1"],color:a["gary-10"]},{name:"gary-2",value:a["gary-2"],color:a["gary-10"]},{name:"gary-3",value:a["gary-3"],color:a["gary-10"]},{name:"gary-4",value:a["gary-4"],color:a["gary-10"]},{name:"gary-5",value:a["gary-5"],color:a["gary-10"]},{name:"gary-6",value:a["gary-6"],color:a["gary-10"]},{name:"gary-7",value:a["gary-7"],color:a["gary-1"]},{name:"gary-8",value:a["gary-8"],color:a["gary-1"]},{name:"gary-9",value:a["gary-9"],color:a["gary-1"]},{name:"gary-10",value:a["gary-10"],color:a["gary-1"]},{name:"gary-11",value:a["gary-11"],color:a["gary-1"]},{name:"gary-12",value:a["gary-12"],color:a["gary-1"]}]}},$=["onClick"],k=s({name:"colorBlock"}),x=s({...k,props:{list:{type:Array,required:!0}},setup(l){const{toClipboard:g}=h(),i=async n=>{try{await g(n.value),d.success(`已复制到剪贴板: ${n.name}`)}catch(m){d.error(m.message)}};return(n,m)=>(c(!0),o(v,null,p(l.list,e=>(c(),o("div",{key:e.value,class:"color-item",style:y(`background-color:${e.value}`),onClick:T=>i(e)},[r("span",{class:"left",style:y(`color:${e.color}`)},t(e.name),5),r("span",{class:"right",style:y(`color:${e.color}`)},t(e.value),5)],12,$))),128))}}),C={class:"color-page"},B={class:"color-block-item"},N={class:"header"},S={class:"color-block-item-title"},D=s({__name:"index",setup(l){return(g,i)=>(c(),o("div",C,[(c(!0),o(v,null,p(u(b),n=>(c(),o("div",B,[r("div",N,[r("p",S,t(u(f)[n].title),1)]),_(x,{list:u(f)[n].list},null,8,["list"])]))),256))]))}}),V=r("h1",{id:"颜色-color",tabindex:"-1"},[w("颜色 Color "),r("a",{class:"header-anchor",href:"#颜色-color","aria-hidden":"true"},"#")],-1),F=r("p",null,"内置视觉色彩色板，提供组件库整体视觉统一。",-1),L=r("h3",{id:"介绍",tabindex:"-1"},[w("介绍 "),r("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#")],-1),M=r("p",null,"组件库目前提供 5 个色板，包含 4 个主题色板和一个中性色板。",-1),A=JSON.parse('{"title":"颜色 Color","description":"","frontmatter":{},"headers":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]}],"relativePath":"guide/color.md"}'),P={name:"guide/color.md"},E=s({...P,setup(l){return(g,i)=>(c(),o("div",null,[V,F,L,M,_(D)]))}});export{A as __pageData,E as default};