import{d as _,k as f,r as l,o as i,c,a as n,w as t,e as p,F as m,b}from"../app.d9c827c8.js";const v=b("p",null,"对话框内容",-1),y=_({__name:"footer",setup(k){const o=f(!1),r=()=>{o.value=!0};return(C,e)=>{const a=l("bp-button"),u=l("bp-space"),d=l("bp-modal");return i(),c(m,null,[n(a,{onClick:r},{default:t(()=>[p("自定义底部")]),_:1}),n(d,{visible:o.value,"onUpdate:visible":e[2]||(e[2]=s=>o.value=s)},{footer:t(()=>[n(u,{justify:"flex-end"},{default:t(()=>[n(a,{type:"plain",onClick:e[0]||(e[0]=s=>o.value=!1)},{default:t(()=>[p("取消")]),_:1}),n(a,{type:"primary",status:"danger",onClick:e[1]||(e[1]=s=>o.value=!1)},{default:t(()=>[p("确认删除")]),_:1})]),_:1})]),default:t(()=>[v]),_:1},8,["visible"])],64)}}});export{y as default};
