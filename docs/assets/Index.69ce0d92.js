import{a2 as k,u as x,r as n,o,a as c,d as s,w as t,b as r,E as a,k as i,t as y,p as v}from"./vendor.793e35db.js";import{u as g}from"./subscribe.3cc45575.js";import"./index.aaa173b4.js";const j={class:"app-subscribe"},w={class:"check-icon"},B={key:0,class:"ri-checkbox-circle-fill"},C={key:1,class:"ri-close-circle-fill"},N={key:2,class:"bp-icon-loading ri-loader-5-fill"},V={class:"check-text"},E={class:"option-button"},R=v("\u8FD4\u56DE\u4E3B\u9875");function S(D){const d=k(),b=x(),{check:e,subscribe:f}=g(),{code:l,status:u}=b.params;!l&&!u&&(e.result="\u6211\u4EEC\u65E0\u6CD5\u9A8C\u8BC1\u4F60\u7684\u90AE\u7BB1\u5730\u5740\uFF0C\u8BF7\u68C0\u67E5\u540E\u518D\u8BD5",e.type="error"),f.update(l,u);const m=()=>{d.replace("/")};return(O,T)=>{const h=n("bp-button"),p=n("bp-col"),_=n("bp-row");return o(),c("div",j,[s(_,{class:"subscibe-check-result-container",type:"flex",justify:"center"},{default:t(()=>[s(p,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:t(()=>[s(_,{type:"flex",justify:"center"},{default:t(()=>[s(p,{span:"18"},{default:t(()=>[r("div",w,[a(e).type==="success"?(o(),c("i",B)):i("v-if",!0),a(e).type==="error"?(o(),c("i",C)):i("v-if",!0),a(e).type==="loading"?(o(),c("i",N)):i("v-if",!0)]),r("p",V,y(a(e).result),1),r("div",E,[s(h,{size:"large",round:"",onClick:m},{default:t(()=>[R]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})])}}const z={name:"subscribe-index"},G=Object.assign(z,{setup:S});export{G as default};
