import{g as v,r as s,o as u,e as f,w as t,d as e,p as m,t as y,h as x,E as b,z as w,b as d,a as h,l as j,F as $}from"./vendor.793e35db.js";import{_ as k,b as D}from"./index.0e2d6b0f.js";const P={name:"donate-banner",data(){return{title:{cn:"\u6350\u8D60\u9879\u76EE",en:"Donation Project"},subTitle:{cn:`
        \u5C0F\u7EB8\u9E64\u8BBE\u8BA1\uFF08\u5305\u62EC\u7EC4\u4EF6\u5E93\u548C\u540E\u7EED\u7684\u5F00\u6E90\u9879\u76EE\uFF09\u5C06\u7EDF\u4E00\u91C7\u7528 MIT \u7684\u5F00\u6E90\u8BB8\u53EF\u534F\u8BAE\uFF0C \u662F\u7531\u4E2A\u4EBA\u5F00\u53D1\u5E76\u7EF4\u62A4\u7684\u9879\u76EE\uFF0C\u5411\u4F7F\u7528\u8005\u627F\u8BFA\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\u3002
        \u5982\u679C\u4F60\u662F\u4E2A\u4EBA\u7528\u6237\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6350\u8D60\u7684\u65B9\u5F0F\u652F\u6301\u8FD9\u4E2A\u9879\u76EE\uFF0C \u4F60\u7684\u6350\u8D60\u8BB0\u5F55\u548C\u6635\u79F0\u5C06\u4F1A\u5728\u7F51\u7AD9\u663E\u793A\uFF1B\u5982\u679C\u4F60\u662F\u4F01\u4E1A\u7684\u7ECF\u8425\u8005\u5E76\u4E14\u5728
        \u4E0A\u7EBF\u7684\u4EA7\u54C1\u7528\u4F7F\u7528\u4E86 birdpaperUI\uFF0C\u90A3\u4E48\u4F60\u7684\u6350\u8D60\u5C06\u5177\u6709\u5546\u4E1A\u610F\u4E49\u3002`,en:"Plan every day with the zeal of a travel guide. -- Lee Cockerell, When Are You Going to Start"}}},setup(){const{t:l}=v();return{t:l}}};function C(l,n,r,a,o,c){const p=s("the-title"),_=s("bp-col"),i=s("bp-row");return u(),f(i,{class:"donate-banner",type:"flex",justify:"center"},{default:t(()=>[e(_,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:t(()=>[e(i,null,{default:t(()=>[e(_,{span:"18"},{default:t(()=>[e(p,{bold:"","sub-title":o.subTitle[a.t("Pages.Discover.mode")]},{default:t(()=>[m(y(o.title[a.t("Pages.Discover.mode")]),1)]),_:1},8,["sub-title"])]),_:1})]),_:1})]),_:1})]),_:1})}var L=k(P,[["render",C]]),B="/birdpaper-ui/assets/wechat-pay.67e1e7ee.svg",O="/birdpaper-ui/assets/alipay.7722cf7a.svg";const T=m(" \u5FAE\u4FE1\u652F\u4ED8 "),I=m(" \u652F\u4ED8\u5B9D ");function N(l){const n=x("wechat-pay"),r=a=>{n.value=a};return(a,o)=>{const c=s("bp-button"),p=s("bp-col"),_=s("bp-image"),i=s("bp-row");return u(),f(i,{class:"donate-pay",type:"flex",justify:"center"},{default:t(()=>[e(p,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:t(()=>[e(i,{class:"pay-content",type:"flex",justify:"center"},{default:t(()=>[e(p,{span:"12",class:"pay-option"},{default:t(()=>[e(c,{type:n.value==="wechat-pay"?"success":"default",onClick:o[0]||(o[0]=g=>r("wechat-pay")),round:"",icon:"ri-wechat-pay-line"},{default:t(()=>[T]),_:1},8,["type"]),e(c,{type:n.value==="alipay"?"primary":"default",onClick:o[1]||(o[1]=g=>r("alipay")),round:"",icon:"ri-alipay-line"},{default:t(()=>[I]),_:1},8,["type"])]),_:1}),e(p,{span:"12",class:"pay-code"},{default:t(()=>[e(_,{src:n.value==="alipay"?b(O):b(B),width:"150"},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1})}}const V={name:"donate-pay"},z=Object.assign(V,{setup:N}),E=()=>{const{findDonateList:l}=D,n=x();return{list:n,getList:()=>new Promise((a,o)=>{l().then(c=>{n.value=c.data})})}},F=d("p",{class:"list-title"},"\u6350\u8D60\u516C\u793A",-1),M={class:"list-content"},S={class:"left"},A={class:"right"};function G(l){const{list:n,getList:r}=E();return w(()=>r()),(a,o)=>{const c=s("bp-col"),p=s("bp-row");return u(),f(p,{class:"donate-list",type:"flex",justify:"center"},{default:t(()=>[e(c,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:t(()=>[e(p,{type:"flex",justify:"center"},{default:t(()=>[e(c,{span:"18"},{default:t(()=>[F]),_:1})]),_:1}),e(p,{type:"flex",justify:"center"},{default:t(()=>[e(c,{xl:{span:12},lg:{span:14},md:{span:20},sm:{span:22},xs:{span:22}},{default:t(()=>[d("div",M,[d("ul",null,[(u(!0),h($,null,j(b(n),(_,i)=>(u(),h("li",{key:`list-${i}`,class:"donate-item"},[d("span",S,y(_.name),1),d("span",A,"\uFFE5"+y(_.money),1)]))),128))])])]),_:1})]),_:1})]),_:1})]),_:1})}}const U={name:"donate-list"},W=Object.assign(U,{setup:G}),Y={class:"app-donate"};function q(l){return(n,r)=>{const a=s("app-footer");return u(),h("div",Y,[e(L),e(z),e(W),e(a)])}}const H={name:"donate"},Q=Object.assign(H,{setup:q});export{Q as default};