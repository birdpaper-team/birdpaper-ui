import{b as m}from"./index.aaa173b4.js";import{H as c}from"./vendor.793e35db.js";const l=()=>{const{addSubscribe:d,updateSubscribe:u}=m;let o={};const e=c({addLoading:!1,email:"",tipText:"",tipType:"error",tipShow:!1}),t=c({result:"\u8BF7\u7A0D\u540E...",type:"loading"}),p=(r,n="error")=>{e.tipText=r,e.tipType=n,e.tipShow=!0};return o.add=function(r){return e.addLoading=!0,new Promise((n,a)=>{d({email:r}).then(s=>{if(s.code!="0"){a(s.msg.cn);return}e.addLoading=!1,n(s.msg.cn)})})},o.update=function(r,n){return t.type="loading",t.result="\u8BF7\u7A0D\u540E...",new Promise((a,s)=>{u({code:r,status:n}).then(i=>{if(t.result=i.msg.cn,i.code!="0"){t.type="error",s(i.msg.cn);return}t.type="success",a(i.msg.cn)})})},{state:e,subscribe:o,showTips:p,check:t}};export{l as u};