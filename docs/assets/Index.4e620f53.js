import{g as w,a5 as N,i as z,h as S,z as V,D as A,r as s,o,e as v,w as e,d as t,T as C,E as a,b as k,t as g,p as j,a6 as O,a as x,n as I,k as $,l as P,F as B}from"./vendor.2e0829af.js";import{u as R,e as M,a as F,_ as L,i as K}from"./index.ba3f6e7b.js";import{u as q}from"./subscribe.360bc9e5.js";var G="/birdpaper-ui/assets/design-text-logo-line-light.a7bb1e7c.svg",Q="/birdpaper-ui/assets/design-text-logo-line-dark.339d971c.svg";const J={class:"banner-text"},W={class:"banner-btn"};function X(y){const{t:c}=w(),n=N(),d=z("cfg"),{themeMode:p}=R(),m=S(p.get());V(()=>{A(()=>{M.on("theme-change",_=>{m.value=_})})});const r=()=>{n.push({path:"/components/install_m"})},i=()=>{window.open(d.VITE_GITHUB_REPO)};return(_,b)=>{const u=s("bp-image"),f=s("bp-col"),l=s("bp-row"),h=s("bp-button");return o(),v(l,{class:"the-banner"},{default:e(()=>[t(f,{span:"24"},{default:e(()=>[t(l,{type:"flex",justify:"center"},{default:e(()=>[t(f,{xl:{span:10},lg:{span:10},md:{span:19},sm:{span:19},xs:{span:19}},{default:e(()=>[t(C,{name:"mode-fade",mode:"out-in"},{default:e(()=>[m.value==="light"?(o(),v(u,{key:"light",class:"logo-img",src:a(G)},null,8,["src"])):(o(),v(u,{key:"dark",class:"logo-img",src:a(Q)},null,8,["src"]))]),_:1})]),_:1})]),_:1}),t(l,{type:"flex",justify:"center"},{default:e(()=>[t(f,{xl:{span:10},lg:{span:10},md:{span:20},sm:{span:20},xs:{span:20}},{default:e(()=>[k("div",J,[k("p",null,g(a(c)("Pages.Home.bannerText")),1)]),k("div",W,[t(h,{type:"primary",icon:"ri-rocket-fill",onClick:r},{default:e(()=>[j(g(a(c)("Pages.Home.mainBtnText")),1)]),_:1}),t(h,{plain:"",onClick:i},{default:e(()=>[j(g(a(c)("Pages.Home.subBtnText")),1)]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}const Y={name:"the-banner"},Z=Object.assign(Y,{setup:X});function ee(y){const{t:c}=w(),n=S([]),{local:d}=F(),p=()=>{const m=d.get("config",!0)||{};n.value=m.homeRecom};return V(A(()=>{p(),M.on("app-complete",()=>p())})),(m,r)=>{const i=s("the-title"),_=s("new-block"),b=s("bp-col"),u=s("bp-row");return o(),v(u,{class:"the-news",type:"flex",justify:"center"},{default:e(()=>[t(b,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:e(()=>[t(i,null,{default:e(()=>[j(g(a(c)("Pages.Home.newTitle")),1)]),_:1}),t(u,{gutter:"20"},{default:e(()=>[t(b,{span:"24"},{default:e(()=>[t(_,{"new-list":n.value},null,8,["new-list"])]),_:1})]),_:1})]),_:1})]),_:1})}}const te={name:"the-news"},se=Object.assign(te,{setup:ee});function ne(y){const{t:c}=w(),{state:n,subscribe:d,showTips:p}=q(),m=async()=>{if(!n.email)return p("\u8BF7\u586B\u5199\u90AE\u7BB1\u5730\u5740");if(!K(n.email))return p("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F");try{const r=await d.add(n.email);n.email="",p(r,"success"),setTimeout(()=>{n.showTips=!1},5e3)}catch(r){return p(r)}};return(r,i)=>{const _=s("the-title"),b=s("bp-button"),u=s("bp-input"),f=s("bp-col"),l=s("bp-row");return o(),v(l,{class:"the-subscribe",type:"flex",justify:"center"},{default:e(()=>[t(f,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:e(()=>[t(_,{"sub-title":a(c)("Pages.Home.subscribeSubTitle")},{default:e(()=>[j(g(a(c)("Pages.Home.subscribeTitle")),1)]),_:1},8,["sub-title"]),t(l,{type:"flex",justify:"center"},{default:e(()=>[t(f,{xs:{span:24},sm:{span:14},md:{span:10},lg:{span:10},xl:{span:10},class:"the-subscribe-content"},{default:e(()=>[t(u,{size:"large",onKeyup:[i[0]||(i[0]=h=>a(n).tipShow=!1),O(m,["enter"])],placeholder:a(c)("Pages.Home.subscribeInput"),modelValue:a(n).email,"onUpdate:modelValue":i[1]||(i[1]=h=>a(n).email=h)},{append:e(()=>[t(b,{size:"large",loading:a(n).loading,onClick:m},{default:e(()=>[j(g(a(c)("Pages.Home.subscribeBtn")),1)]),_:1},8,["loading"])]),_:1},8,["onKeyup","placeholder","modelValue"]),t(C,{name:"fade",mode:"out-in"},{default:e(()=>[a(n).tipShow?(o(),x("p",{key:0,class:I(["subscribe-tip-text",a(n).tipType==="success"?"success-text":""])},g(a(n).tipText),3)):$("v-if",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}const ae={name:"the-subscribe"},oe=Object.assign(ae,{setup:ne});var ce=L(oe,[["__scopeId","data-v-321c1dd4"]]),D="/birdpaper-ui/assets/cover-design.0fd498d2.svg",E="/birdpaper-ui/assets/cover-base.eaf23426.svg",H="/birdpaper-ui/assets/cover-empty.cf910ce5.svg",ie={cn:[[{title:["\u8BBE\u8BA1\u8BED\u8A00","\u4F53\u7CFB & \u4EF7\u503C\u89C2"],tip:'<span class="project-tip-span">Birdpaper-Design</span>',actions:[{title:"\u8BBE\u8BA1\u6587\u6863",disabled:!1,link:"/design/introduce_m"},{title:"\u8BBE\u8BA1\u8D44\u6E90",disabled:!1,link:"/discover"}],cover:D},{title:["\u5FEB\u901F\u4E0A\u624B\u7684",'<span class="span-green-text">Vue3.0</span><span>UI</span> \u7EC4\u4EF6\u5E93'],tip:'<span class="project-tip-span">birdpaper-ui</span>\u6700\u65B0\u7248\u672C\uFF1Av0.9.5',actions:[{title:"\u7EC4\u4EF6\u6587\u6863",disabled:!1,link:"/components/install_m"},{title:"\u66F4\u65B0\u65E5\u5FD7",disabled:!1,link:"/components/version_c"}],cover:E}],[{title:["\u72EC\u6811\u4E00\u5E1C\u7684","web \u4E1A\u52A1\u7EC4\u4EF6\u5E93"],tip:'<span class="project-tip-span">Aim admin</span>',actions:[{title:"\u9884\u8BA12022\u5E744\u6708\u4EFD\u4E0A\u7EBF",disabled:!0,link:"javascript:;"}],cover:H},{title:["\u4F01\u4E1A\u7EA7\u7684","\u4E2D\u540E\u53F0\u89E3\u51B3\u65B9\u6848"],tip:'<span class="project-tip-span">Aim admin pro</span>',actions:[{title:"\u9884\u8BA12022\u5E748\u6708\u4EFD\u4E0A\u7EBF",disabled:!0,link:"javascript:;"}],cover:H}]],en:[[{title:["Design language ","System & Values"],tip:"",actions:[{title:"Document",disabled:!1,link:"/design/introduce_m"},{title:"Resource",disabled:!1,link:"/discover"}],cover:D},{title:["The Quick Start",'<span class="span-green-text">Vue3.0</span><span>UI</span> Framework.'],tip:'<span class="project-tip-span">birdpaper-ui</span>Latest version\uFF1Av0.9.5',actions:[{title:"Document",disabled:!1,link:""},{title:"Update log",disabled:!1,link:""}],cover:E}],[{title:["Unique web","Business components"],tip:'<span class="project-tip-span">Aim admin</span>',actions:[{title:"About online 2022 April",disabled:!0,link:"javascript:;"}],cover:H},{title:["Enterprise level","Admin solution"],tip:'<span class="project-tip-span">Aim admin pro</span>',actions:[{title:"About online 2022 August",disabled:!0,link:"javascript:;"}],cover:H}]]};const le={name:"the-project",setup(){const{t:y}=w();return{t:y,list:ie}}},pe={class:"project-item font-quick"},re=["innerHTML"],_e=["innerHTML"],ue=["innerHTML"],de={class:"project-link"},me=["href"],be={key:0,class:"ri-links-line"};function fe(y,c,n,d,p,m){const r=s("the-title"),i=s("project-block"),_=s("bp-col"),b=s("bp-row");return o(),v(b,{class:"the-project",type:"flex",justify:"center"},{default:e(()=>[t(_,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:e(()=>[t(r,null,{default:e(()=>[j(g(d.t("Pages.Home.projectTitle")),1)]),_:1}),(o(!0),x(B,null,P(d.list[d.t("Pages.Home.footer")],(u,f)=>(o(),v(b,{key:`project-row-${f}`,gutter:"10",class:"project-row"},{default:e(()=>[(o(!0),x(B,null,P(u,(l,h)=>(o(),v(_,{key:`project-item-${f}-${h}`,xl:{span:12},lg:{span:12},md:{span:12},sm:{span:24},xs:{span:24},style:{"margin-bottom":"20px"}},{default:e(()=>[t(i,{cover:l.cover},{default:e(()=>[k("div",pe,[k("h2",{class:"project-title",innerHTML:l.title[0]},null,8,re),k("h2",{class:"project-title",innerHTML:l.title[1]},null,8,_e),k("p",{class:"project-tip",innerHTML:l.tip},null,8,ue),k("div",de,[(o(!0),x(B,null,P(l.actions,(T,U)=>(o(),x("a",{key:`project-actions-${f}-${h}-${U}`,class:I(["project-link-item",{"project-link-item-disabled":T.disabled}]),href:T.link},[T.disabled?$("v-if",!0):(o(),x("i",be)),j(" "+g(T.title),1)],10,me))),128))])])]),_:2},1032,["cover"])]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})}var ge=L(le,[["render",fe]]);const he={name:"home",components:{TheBanner:Z,TheNews:se,TheSubscribe:ce,TheProject:ge}},ve={class:"app-home"};function ke(y,c,n,d,p,m){const r=s("the-banner"),i=s("the-news"),_=s("the-project"),b=s("the-subscribe"),u=s("app-footer");return o(),x("div",ve,[$(" The homepage banner block "),t(r),$(" The lastest articels block "),t(i),t(_),t(b),t(u)])}var Te=L(he,[["render",ke]]);export{Te as default};
