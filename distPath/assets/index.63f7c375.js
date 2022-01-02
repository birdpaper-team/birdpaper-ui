import{g as D,r as y,o as a,a as p,k as b,G as j,F as g,b as d,d as _,w as u,n as A,l as S,e as m,p as C,t as k,E as x,u as I,h as w,z as P,D as E,a3 as K,a4 as G,j as F,B as M,J as H,f as J,T as Q,K as W,H as X,O as Y,I as N}from"./vendor.08769289.js";import{a as Z,_ as ee,f as te,g as oe,h as U,t as z,e as ne}from"./index.da2d1efd.js";const Ge=()=>{const{local:e}=Z(),{t:r,locale:l}=D();return{t:r,locale:l,getLocals:()=>e.get("lang")||l.value,setLocals:(n="")=>{l.value=n,e.set("lang",n),location.reload()}}},se={key:0,class:"bp-doc-catalog-item-disabled"},le={class:"catalog-title-group"},ce=["href","onClick"];function ae(e){const{t:r}=D();return(l,i)=>{const s=y("router-link"),n=y("catalog-item",!0);return a(),p(g,null,[b(" \u4E0D\u53EF\u8DF3\u8F6C "),e.type==="main-title"&&e.disabled?(a(),p("li",se,[j(l.$slots,"default")])):e.type==="title-group"?(a(),p(g,{key:1},[b(" \u5206\u7EC4 "),d("p",le,[j(l.$slots,"default")])],2112)):(a(),p(g,{key:2},[b(" \u4E3B\u6807\u9898 "),_(s,{custom:"",to:e.path},{default:u(({href:o,navigate:t,isActive:c,isExactActive:f})=>[d("li",{class:A(["bp-doc-catalog-item",`catalog-${e.type}`,c&&"left-menu-active",f&&"left-menu-exact-active"])},[d("a",{href:o,onClick:t},[j(l.$slots,"default")],8,ce)],2)]),_:3},8,["to"])],2112)),b(" \u4E8C\u7EA7\u6807\u9898 "),e.children?(a(!0),p(g,{key:3},S(e.children,(o,t)=>(a(),m(n,{key:`li-${t}`,type:o.type,disabled:o.disabled,children:o.children,path:o.path},{default:u(()=>[C(k(o.title[x(r)("Pages.Components.mode")]),1)]),_:2},1032,["type","disabled","children","path"]))),128)):b("v-if",!0)],64)}}const re={name:"catalog-item"},R=Object.assign(re,{props:{type:{type:String,default:"main-title"},path:{type:String,default:""},disabled:{type:Boolean,default:!1},children:{type:Array,default:()=>[]}},setup:ae}),ie=d("div",{class:"scrollbar"},null,-1),de={class:"bp-doc-catalog-ul"},ue=d("div",{class:"bp-doc-catalog-mobile-button"},[d("i",{class:"ri-menu-line"})],-1),pe={class:"bp-doc-catalog-mobile-list"},me={class:"bp-doc-catalog-ul"};function fe(e){const{t:r}=D();I();const l=w(!1);return(i,s)=>{const n=y("bp-col"),o=y("van-popup");return a(),p(g,null,[_(n,{xs:{span:0},sm:{span:0},md:{span:0},lg:{span:3},xl:{span:3},class:"bp-doc-catalog scroll hide-sm-and-down"},{default:u(()=>[ie,d("ul",de,[(a(!0),p(g,null,S(e.list,(t,c)=>(a(),m(R,{key:`main-${c}`,type:t.type,disabled:t.disabled,children:t.children,path:t.path},{default:u(()=>[C(k(t.title[x(r)("Pages.Components.mode")]),1)]),_:2},1032,["type","disabled","children","path"]))),128))])]),_:1}),b(" Mobile "),_(n,{xl:{span:0},lg:{span:0},md:{span:1},sm:{span:1},xs:{span:1},class:"bp-doc-catalog-mobile",onClick:s[0]||(s[0]=t=>l.value=!l.value)},{default:u(()=>[ue]),_:1}),_(o,{closeable:"","close-on-popstate":"","safe-area-inset-bottom":"",teleport:"body",position:"left",style:{width:"40%",height:"100%"},show:l.value,"onUpdate:show":s[1]||(s[1]=t=>l.value=t)},{default:u(()=>[d("div",pe,[d("ul",me,[(a(!0),p(g,null,S(e.list,(t,c)=>(a(),m(R,{key:`main-${c}`,type:t.type,disabled:t.disabled,children:t.children,path:t.path},{default:u(()=>[C(k(t.title[x(r)("Pages.Components.mode")]),1)]),_:2},1032,["type","disabled","children","path"]))),128))])])]),_:1},8,["show"])],64)}}const _e={name:"bp-doc-catalog"},ye=Object.assign(_e,{props:{list:{type:Array,default:[]}},setup:fe});const be={class:"content-loading"},ge={class:"feature-area",id:"doc-container"},he={class:"bp-doc-header"},ve=["innerHTML"];function $e(e,{emit:r}){const l=e,i=w();P(()=>E(()=>n()));let s=K(null);const n=()=>{if(!l.resource)return r("on-error","404");i.value=!0,s.value=G(l.resource),i.value=!1,r("on-load")};return F(()=>l.resource,()=>n()),(o,t)=>{const c=y("bp-spin");return a(),p(g,null,[M(d("div",be,[_(c,{spinning:i.value},null,8,["spinning"])],512),[[H,i.value]]),M(d("div",ge,[d("div",he,[d("h1",null,k(e.title),1),e.describe!==""?(a(),p("p",{key:0,innerHTML:e.describe},null,8,ve)):b("v-if",!0)]),(a(),m(W,null,[_(Q,{name:"fade",mode:"out-in"},{default:u(()=>[(a(),m(J(x(s))))]),_:1})],1024))],512),[[H,!i.value&&x(s)]])],64)}}const ke={name:"component-block"},xe=Object.assign(ke,{props:{resource:{type:[Promise,String,Object],default:""},title:{type:String,default:"Untitled"},describe:{type:String,default:""}},emits:["on-load","on-error"],setup:$e});var Te=ee(xe,[["__scopeId","data-v-55a87f04"]]);const we={class:"bp-doc-content",id:"bp-doc-content"},De={class:"footer-copyright"};function Se(e,{emit:r}){const{t:l}=D();I();const i=()=>r("on-load");return(s,n)=>{const o=y("bp-col");return a(),m(o,{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:17},xl:{span:17},class:"bp-doc-content-box"},{default:u(()=>[d("div",we,[e.docType==="m"?(a(),m(te,{key:0,resource:e.resource,onOnLoad:i},null,8,["resource"])):b("v-if",!0),e.docType==="c"?(a(),m(Te,{key:1,title:e.title,describe:e.describe,resource:e.resource,onOnLoad:i},null,8,["title","describe","resource"])):b("v-if",!0),d("div",De,[d("p",null,k(x(l)("Pages.Components.documentFooterText")),1)])])]),_:1})}}const Ce={name:"bp-doc-content"},Le=Object.assign(Ce,{props:{docType:{type:String,default:""},resource:{type:[Promise,String,Object],default:""},title:{type:String,default:"Untitled"},describe:{type:String,default:""}},emits:["on-load"],setup:Se}),je=()=>({scrollSmoothTo:r=>{window.requestAnimationFrame||(window.requestAnimationFrame=function(s){return setTimeout(s,17)});var l=document.documentElement.scrollTop||document.body.scrollTop;const i=function(){var s=r-l;if(l=l+s/5,Math.abs(s)<1){window.scrollTo(0,r);return}window.scrollTo(0,l),requestAnimationFrame(i)};i()}}),Oe=()=>{const{scrollSmoothTo:e}=je();return{setDirectoryData:()=>{let s=[],n=[];function o(t){s.push(t);const c=U(t);c?n.push(c.offsetTop):console.error(`[ directory.js setDirectoryData error]\u300C${t}\u300Dnot found.`)}return new Promise(t=>{const c=oe("doc-container"),f=c.length;for(let $=0;$<f;$++){const T=c[$];if(typeof T=="string"){o(T);continue}for(let h=0;h<T.length;h++)o(T[h])}t({dirs:c,expandDirs:s,dirPosition:n})})},moveToDir:(s=null)=>{if(!s)return;const n=U(s)||null,o=n&&n.offsetTop+20;return n?e(o):console.error(`[ directory.js moveToDir error]\u300C${s}\u300Dnot found.`),o},onScroll:(s=[],n=[])=>{const o=document.documentElement.scrollTop||document.body.scrollTop;if(o<n[0])return s[0];let t="";for(let c=0;c<n.length;c++){const f=n.length-1;if(o>=n[f]){t=s[f];break}if(o>=n[c]&&o<n[c+1]){t=s[c];break}}return t}}},Ee={href:"javascript:;",class:"directory-item-a"},Be={key:1,class:"directory-item"},Ae={class:"directory-ol"};function Ie(e,{emit:r}){const l=i=>r("click",i);return(i,s)=>{const n=y("dir-item",!0);return typeof e.item=="string"?(a(),p("li",{key:0,class:A(["directory-item",{active:e.currentDir===e.item}]),onClick:s[0]||(s[0]=o=>l(e.item))},[d("a",Ee,[j(i.$slots,"default")])],2)):(a(),p("li",Be,[d("ol",Ae,[(a(!0),p(g,null,S(e.item,(o,t)=>(a(),m(n,{key:`ol-${t}`,onClick:c=>l(o),item:o,currentDir:e.currentDir},{default:u(()=>[C(k(o),1)]),_:2},1032,["onClick","item","currentDir"]))),128))])]))}}const Pe={name:"dir-item"},Fe=Object.assign(Pe,{props:{currentDir:{type:[String,Number],default:""},item:{type:[Array,String],default:""}},emits:["click"],setup:Ie}),Me={class:"directory-ul"},He={class:"directory-ol"};function Ne(e,{expose:r}){D();const{setDirectoryData:l,moveToDir:i,onScroll:s}=Oe();let n=[];const o=w(""),t=w(""),c=w(0),f=X({dirs:[],position:[]}),$=(v=!1)=>{l().then(L=>{f.dirs=L.dirs,f.position=L.dirPosition,n=L.expandDirs,v&&O(),o.value=n[t.value||0],t.value=""})},T=(v=null)=>{window.removeEventListener("scroll",h),o.value=i(v),setTimeout(()=>{window.addEventListener("scroll",z(h,100))},600)},h=()=>{o.value=s(n,f.position)};P(()=>{E(()=>{window.addEventListener("scroll",z(h,100)),ne.on("lang-change",v=>{t.value=n.indexOf(o.value),setTimeout(()=>{$(!1)},400)}),setTimeout(()=>{window.addEventListener("resize",()=>O(),!1)},400)})});function O(){const v=document.getElementById("bp-doc-content");c.value=v&&v.getBoundingClientRect().right}return F(()=>c,()=>c.value===0&&O(),{immediate:!0}),Y(()=>{window.removeEventListener("scroll",h)}),r({init:$}),(v,L)=>{const V=y("bp-col");return c.value!==0?(a(),m(V,{key:0,xs:{span:0},sm:{span:0},md:{span:0},lg:{span:3},xl:{span:3},class:"bp-document-directory",style:N(`left:${c.value}px`)},{default:u(()=>[d("ul",Me,[d("ol",He,[(a(!0),p(g,null,S(x(f).dirs,(B,q)=>(a(),m(Fe,{key:`dir-${q}`,item:B,currentDir:o.value,onClick:T},{default:u(()=>[C(k(B),1)]),_:2},1032,["item","currentDir"]))),128))])])]),_:1},8,["style"])):b("v-if",!0)}}const Ue={name:"bp-doc-directory"},ze=Object.assign(Ue,{setup:Ne});function Re(e){const r=w(null),l=()=>{E(()=>{setTimeout(()=>r.value.init(!0),800)})};return(i,s)=>{const n=y("bp-row"),o=y("bp-col");return a(),m(n,{class:"bp-document",type:"flex",align:"top",justify:"center",style:N(`padding-top:${e.top}px`)},{default:u(()=>[_(o,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22},class:"bp-document-container"},{default:u(()=>[_(n,{class:"container-row"},{default:u(()=>[_(ye,{list:e.list},null,8,["list"]),_(Le,{title:e.title,describe:e.describe,"doc-type":e.docType,resource:e.resource,onOnLoad:l},null,8,["title","describe","doc-type","resource"])]),_:1})]),_:1}),_(ze,{ref:(t,c)=>{c.docDirectory=t,r.value=t}},null,512)]),_:1},8,["style"])}}const Ve={name:"bp-document"},Je=Object.assign(Ve,{props:{top:{type:[String,Number],default:0},list:{type:Array,default:[]},docType:{type:String,default:""},resource:{type:[Promise,String,Object],default:""},title:{type:String,default:"Untitled"},describe:{type:String,default:""}},setup:Re});export{Je as _,Ge as u};
