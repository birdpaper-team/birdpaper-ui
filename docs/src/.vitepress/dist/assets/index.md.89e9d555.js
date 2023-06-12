import{d as m,r as g,o as a,c as i,b as t,e as p,t as s,u as e,i as y,a as o,w as u,F as x,g as k,h as c}from"./app.8cdd5676.js";const $="/logo-shadow.jpg",n={name:"BirdpaperUI",intro_cn:'一个通用的 <span style="color:#059669">Vue3</span> 组件库',intro_en:'<span class="text-en"> A common UI component library for Vue3.</span>',btn_text:{start:"快速上手",git:"在 Github 上查看"},version:""},N=[{title:"指南",icon:"ri-compass-3-line",intro:"查看操作指南，帮助更快速的上手组件库的安装和使用，更高效的搭建易用、美观的页面。",action:{btnName:"查看详情",link:"/guide/install",disabled:!1}},{title:"组件",icon:"ri-shape-line",intro:"组件参考文档，了解并预览组件的使用方式、API、事件和方法等。",action:{btnName:"查看详情",link:"",disabled:!1}},{title:"设计资源",icon:"ri-palette-line",intro:"查看或下载相关设计资源，帮助设计师快速输出页面视觉效果，提高团队协作效率。",action:{btnName:"稍晚推出",link:"",disabled:!0}},{title:"更新日志",icon:"ri-file-list-3-line",intro:"查看历史版本记录，了解功能新增、优化、Bug 修复和产品计划等信息。",action:{btnName:"稍晚推出",link:"",disabled:!0}}],C={class:"home-page-banner"},V={class:"left"},B={class:"app-name"},w={key:0,class:"brage-version"},I={class:"brage-version-inner"},L=["innerHTML"],q={class:"btn-area"},z={class:"right"},E=["src"],S=m({__name:"banner",setup(b){return(_,d)=>{const h=g("bp-button"),f=g("bp-space");return a(),i("div",C,[t("div",V,[t("div",B,[p(s(e(n).name)+" ",1),e(n).version?(a(),i("div",w,[t("div",I,s(e(n).version),1)])):y("",!0)]),t("p",{class:"app-intro",innerHTML:e(n).intro_cn+e(n).intro_en},null,8,L),t("div",q,[o(f,null,{default:u(()=>[o(h,{status:"primary",size:"large",type:"primary"},{default:u(()=>[p(s(e(n).btn_text.start),1)]),_:1}),o(h,{status:"normal",size:"large",type:"normal"},{default:u(()=>[p(s(e(n).btn_text.git),1)]),_:1})]),_:1})])]),t("div",z,[t("img",{src:e($),alt:""},null,8,E)])])}}}),T={class:"header-icon"},l="quick-entry",A=m({__name:"quickEntry",setup(b){const _=d=>{};return(d,h)=>{const f=g("bp-button");return a(),i("div",{class:c(l)},[(a(!0),i(x,null,k(e(N),(r,v)=>(a(),i("div",{class:c(`${l}-item`),key:`item-${v}`},[t("div",{class:c(`${l}-header`)},[t("h3",null,s(r.title),1),t("div",T,[t("i",{class:c(r.icon)},null,2)])],2),t("div",{class:c(`${l}-body`)},[t("p",null,s(r.intro),1)],2),t("div",{class:c(`${l}-footer`)},[o(f,{type:"text",disabled:r.action.disabled,status:r.action.disabled?"normal":"primary",onClick:M=>_()},{default:u(()=>[p(s(r.action.btnName),1)]),_:2},1032,["disabled","status","onClick"])],2)],2))),128))])}}}),D={class:"home-page"},F=m({__name:"index",setup(b){return(_,d)=>(a(),i("div",D,[o(S),o(A)]))}}),U=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md"}'),H={name:"index.md"},j=m({...H,setup(b){return(_,d)=>(a(),i("div",null,[o(F)]))}});export{U as __pageData,j as default};
