(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0dead6"],{8756:function(e,t,c){"use strict";c.r(t);var s=c("7a23");const l={class:"bp-resource"},i=Object(s.i)("div",{class:"banner-text"},[Object(s.i)("h2",null,"Resources"),Object(s.i)("p",null,"这里汇总了所有小纸鹤发布的所有资源")],-1),a={class:"bp-resource-article"},n=Object(s.i)("h2",{class:"block-title"},"文章",-1),b=Object(s.i)("p",{class:"block-describe"},"--",-1),j={key:0,class:"block-article-loading"},O={class:"article-list-item-title"},r={class:"article-list-item-content"};var o={name:"home-resource",setup(){const{proxy:e}=Object(s.k)(),t=Object(s.y)({articleLoading:!0,articleList:[]});return e.$api.getArticleList().then(e=>{t.articleList=e.data,setTimeout(()=>{t.articleLoading=!1},400)}),{...Object(s.H)(t),handleArticleClick:e=>{window.open(e)}}},render:function(e,t,c,o,f,u){const p=Object(s.C)("bp-col"),d=Object(s.C)("bp-row");return Object(s.u)(),Object(s.f)("div",null,[Object(s.i)("div",l,[Object(s.i)(d,{class:"bp-resource-banner"},{default:Object(s.N)(()=>[Object(s.i)(p,{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:20,offset:2},lg:{span:18,offset:3},xl:{span:16,offset:4}},{default:Object(s.N)(()=>[Object(s.i)(d,{class:"banner-content font-quick"},{default:Object(s.N)(()=>[Object(s.i)(p,{lg:{span:12},xl:{span:12},md:{span:12},sm:{span:24},xs:{span:24},class:"left"},{default:Object(s.N)(()=>[i]),_:1})]),_:1})]),_:1})]),_:1})]),Object(s.i)("div",a,[Object(s.i)(d,null,{default:Object(s.N)(()=>[Object(s.i)(p,{xs:{span:20,offset:2},sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:18,offset:3},xl:{span:16,offset:4}},{default:Object(s.N)(()=>[n,b,e.articleLoading?(Object(s.u)(),Object(s.f)("p",j," 数据加载中... ")):(Object(s.u)(!0),Object(s.f)(s.a,{key:1},Object(s.A)(e.articleList,(e,t)=>(Object(s.u)(),Object(s.f)("div",{key:"type-"+t,class:"article-list-item"},[Object(s.i)("div",O,[Object(s.i)("p",null,Object(s.G)(e.name),1)]),Object(s.i)("div",r,[Object(s.i)("ul",null,[(Object(s.u)(!0),Object(s.f)(s.a,null,Object(s.A)(e.articleList,(e,t)=>(Object(s.u)(),Object(s.f)("li",{key:"art-"+t},[Object(s.i)("a",{href:"javascript:;",onClick:t=>o.handleArticleClick(e.url)},Object(s.G)(e.title),9,["onClick"])]))),128))])])]))),128))]),_:1})]),_:1})])])}};t.default=o}}]);