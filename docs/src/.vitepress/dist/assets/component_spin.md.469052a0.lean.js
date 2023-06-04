import{d as E,r as p,o as e,c as F,a,u as C,b as s,e as n}from"./app.79e262a2.js";const t=[{name:"loading",remark:"是否开启加载",type:"Boolean",default:"false"},{name:"tip",remark:"加载提示文字",type:"String",default:""}],c=s("h1",{id:"加载-spin",tabindex:"-1"},[n("加载 Spin "),s("a",{class:"header-anchor",href:"#加载-spin","aria-hidden":"true"},"#")],-1),r=s("p",null,"用于在合适区域内展示加载状态，提升用户等待体验。",-1),D=s("h3",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),A=s("p",null,"基础的加载状态。",-1),i=s("h3",{id:"在容器中使用",tabindex:"-1"},[n("在容器中使用 "),s("a",{class:"header-anchor",href:"#在容器中使用","aria-hidden":"true"},"#")],-1),y=s("p",null,[n("支持在容器中使用 "),s("code",null,"loading"),n(" 控制加载状态。")],-1),d=s("h3",{id:"spin-属性",tabindex:"-1"},[n("Spin 属性 "),s("a",{class:"header-anchor",href:"#spin-属性","aria-hidden":"true"},"#")],-1),f=JSON.parse('{"title":"加载 Spin","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"在容器中使用","slug":"在容器中使用","link":"#在容器中使用","children":[]},{"level":3,"title":"Spin 属性","slug":"spin-属性","link":"#spin-属性","children":[]}],"relativePath":"component/spin.md"}'),B={name:"component/spin.md"},g=E({...B,setup(h){return(u,_)=>{const l=p("demo-block"),o=p("table-block");return e(),F("div",null,[c,r,D,A,a(l,{src:"example/spin/basic",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-spin%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%2F%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),i,y,a(l,{src:"example/spin/container",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-spin%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eloading%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etip%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B%E5%8A%A0%E8%BD%BD%E4%B8%AD%EF%BC%8C%E8%AF%B7%E7%A8%8D%E5%80%99%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eclass%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bdemo-spin-box%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-spin%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bless%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E.demo-spin-box%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Ewidth%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3E100%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%25%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Eheight%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3E100%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Eborder-radius%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3E6%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Ebackground-color%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3E%23f0f7fc%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),d,a(o,{type:"props",data:C(t)},null,8,["data"])])}}});export{f as __pageData,g as default};
