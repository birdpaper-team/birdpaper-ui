import{d as $,r as g,o as l,c,b as s,e as n,t as u,u as o,i as C,a as i,w as m,F as x,g as N,h as t,M as y}from"./app.d9c827c8.js";import{i as w}from"./chunks/index.37409154.js";const B="/logo-shadow.jpg",p={name:"BirdpaperUI",intro_cn:'一个通用的 <span style="color:#059669">Vue3</span> 组件库',intro_en:'<span class="text-en"> A common UI component library for Vue3.</span>',btn_text:{start:"快速上手",git:"在 Github 上查看"},version:""},I=[{title:"指南",icon:"ri-compass-3-line",intro:"查看操作指南，帮助更快速的上手组件库的安装和使用，更高效的搭建易用、美观的页面。",action:{btnName:"查看详情",link:"/guide/install",disabled:!1}},{title:"组件",icon:"ri-shape-line",intro:"组件参考文档，了解并预览组件的使用方式、API、事件和方法等。",action:{btnName:"查看详情",link:"",disabled:!1}},{title:"设计资源",icon:"ri-palette-line",intro:"查看或下载相关设计资源，帮助设计师快速输出页面视觉效果，提高团队协作效率。",action:{btnName:"稍晚推出",link:"",disabled:!0}},{title:"更新日志",icon:"ri-file-list-3-line",intro:"查看历史版本记录，了解功能新增、优化、Bug 修复和产品计划等信息。",action:{btnName:"稍晚推出",link:"",disabled:!0}}],S={class:"home-page-banner"},V={class:"left"},z={class:"app-name"},L={key:0,class:"brage-version"},M={class:"brage-version-inner"},P=["innerHTML"],q={class:"btn-area"},D={class:"right"},T=["src"],U=$({__name:"banner",setup(b){return(d,_)=>{const a=g("bp-button"),f=g("bp-space");return l(),c("div",S,[s("div",V,[s("div",z,[n(u(o(p).name)+" ",1),o(p).version?(l(),c("div",L,[s("div",M,u(o(p).version),1)])):C("",!0)]),s("p",{class:"app-intro",innerHTML:o(p).intro_cn+o(p).intro_en},null,8,P),s("div",q,[i(f,null,{default:m(()=>[i(a,{status:"primary",size:"large",type:"primary"},{default:m(()=>[n(u(o(p).btn_text.start),1)]),_:1}),i(a,{status:"normal",size:"large",type:"normal"},{default:m(()=>[n(u(o(p).btn_text.git),1)]),_:1})]),_:1})])]),s("div",D,[s("img",{src:o(B),alt:""},null,8,T)])])}}}),A={class:"header-icon"},v="quick-entry",E=$({__name:"quick-entry",setup(b){const d=_=>{};return(_,a)=>{const f=g("bp-button");return l(),c("div",{class:t(v)},[(l(!0),c(x,null,N(o(I),(r,k)=>(l(),c("div",{class:t(`${v}-item`),key:`item-${k}`},[s("div",{class:t(`${v}-header`)},[s("h3",null,u(r.title),1),s("div",A,[s("i",{class:t(r.icon)},null,2)])],2),s("div",{class:t(`${v}-body`)},[s("p",null,u(r.intro),1)],2),s("div",{class:t(`${v}-footer`)},[i(f,{type:"text",disabled:r.action.disabled,status:r.action.disabled?"normal":"primary",onClick:cs=>d()},{default:m(()=>[n(u(r.action.btnName),1)]),_:2},1032,["disabled","status","onClick"])],2)],2))),128))])}}}),F=s("div",{class:"title"},[s("p",null,[s("i",{class:"ri-brush-2-fill"}),n("设计师")])],-1),H=s("div",{class:"intro"},[s("p",null,"了解设计指引和规范，获取第一手组件库设计资源，帮助设计师快速输出视觉效果")],-1),j={class:"option"},G=s("div",{class:"title"},[s("p",null,[s("i",{class:"ri-terminal-box-fill"}),n("开发者")])],-1),J=s("div",{class:"intro"},[s("p",null,"推荐使用 Npm 安装，快速构建你的 Web 应用")],-1),O=s("div",{class:"content"},[s("p",null,[n("$ npm install "),s("span",null,"birdpaper-ui"),n(" -S")])],-1),W=s("i",{class:"ri-file-copy-line"},null,-1),K=[W],h="start-entry",Q=$({__name:"start-entry",setup(b){const{toClipboard:d}=w(),_=async()=>{try{await d("npm install birdpaper-ui -S"),y.success("已复制到剪贴板")}catch(a){y.error(a.message)}};return(a,f)=>{const r=g("bp-button");return l(),c("div",{class:t(h)},[s("div",{class:t(`${h}-header`)},[s("p",{class:t(`${h}-header-inner`)},"快速上手体验",2)],2),s("div",{class:t(`${h}-container`)},[s("div",{class:t(`${h}-container-item designer`)},[F,H,s("div",j,[i(r,{type:"dashed",size:"large",block:"",disabled:""},{default:m(()=>[n("稍晚推出")]),_:1})])],2),s("div",{class:t(`${h}-container-item developer`)},[G,J,s("div",{class:"option"},[s("div",{class:"shell-box"},[O,s("div",{class:"copy-btn",onClick:_},K)])])],2)],2)])}}}),R=s("p",null,"设计",-1),X=[R],Y=s("p",null,"设计",-1),Z=[Y],ss={class:"power-area"},ts=s("div",{class:"power-tag"},[s("span",null,"Powered by Birdpaper Design")],-1),es={class:"copyright-text"},ns={class:"number"},e="site-footer",is=$({__name:"site-footer",setup(b){return(d,_)=>{const a=g("bp-link");return l(),c("div",{class:t(e)},[s("div",{class:t(`${e}-container`)},[s("div",{class:t(`${e}-menu`)},[s("div",{class:t(`${e}-menu-group`)},[s("div",{class:t(`${e}-menu-group-title`)},X,2),s("div",{class:t(`${e}-menu-group-list`)},[s("ul",null,[s("li",{class:t(`${e}-menu-group-list-item`)},"设计指引",2),s("li",{class:t(`${e}-menu-group-list-item`)},"设计资源",2)])],2)],2),s("div",{class:t(`${e}-menu-group`)},[s("div",{class:t(`${e}-menu-group-title`)},Z,2),s("div",{class:t(`${e}-menu-group-list`)},[s("ul",null,[s("li",{class:t(`${e}-menu-group-list-item`)},"设计指引",2),s("li",{class:t(`${e}-menu-group-list-item`)},"设计资源",2),s("li",{class:t(`${e}-menu-group-list-item`)},"设计资源",2),s("li",{class:t(`${e}-menu-group-list-item`)},"设计资源",2),s("li",{class:t(`${e}-menu-group-list-item`)},"设计资源",2)])],2)],2)],2),s("div",{class:t(`${e}-mp`)},[s("div",{class:t(`${e}-mp-inner`)},null,2)],2)],2),s("div",{class:t(`${e}-info`)},[s("div",{class:t(`${e}-info-content`)},[s("div",ss,[ts,s("span",es,[n("BirdpaperUI author by "),i(a,{status:"normal"},{default:m(()=>[n("木亦Sam")]),_:1}),n(" 2023")])]),s("div",ns,[i(a,{status:"normal"},{default:m(()=>[n("粤ICP备17015354号")]),_:1})])],2)],2)])}}}),as={class:"home-page"},os=$({__name:"index",setup(b){return(d,_)=>(l(),c(x,null,[s("div",as,[i(U),i(E),i(Q)]),i(is)],64))}}),_s=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md"}'),ls={name:"index.md"},ps=$({...ls,setup(b){return(d,_)=>(l(),c("div",null,[i(os)]))}});export{_s as __pageData,ps as default};
