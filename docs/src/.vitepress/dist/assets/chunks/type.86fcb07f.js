import{d as c,r as u,o as _,i as d,w as t,a,e as r,M as i}from"../app.79e262a2.js";const C=c({__name:"type",setup(f){const n=s=>{i[s](`这是 ${s} 类型的消息提示`)};return(s,e)=>{const o=u("bp-button"),l=u("bp-space");return _(),d(l,null,{default:t(()=>[a(o,{status:"success",onClick:e[0]||(e[0]=p=>n("success"))},{default:t(()=>[r("成功提示")]),_:1}),a(o,{status:"warning",onClick:e[1]||(e[1]=p=>n("warning"))},{default:t(()=>[r("警告提示")]),_:1}),a(o,{status:"danger",onClick:e[2]||(e[2]=p=>n("error"))},{default:t(()=>[r("错误提示")]),_:1})]),_:1})}}});export{C as default};
