import{d as p,r as o,o as t,c as F,a as l,u as e,b as s,e as a}from"./app.79e262a2.js";const C=[{name:"visible（v-model）",remark:"对话框显示状态",type:"Boolean",default:"false"},{name:"title",remark:"对话框标题",type:"String",default:"标题"},{name:"width",remark:"对话框宽度",type:"String",default:"600px"},{name:"top",remark:"对话框距离顶部高度",type:"String",default:"20vh"}],c=[{name:"cancle",remark:"对话框取消按钮触发"},{name:"ok",remark:"对话框确定按钮触发"}],r=s("h1",{id:"对话框-modal",tabindex:"-1"},[a("对话框 Modal "),s("a",{class:"header-anchor",href:"#对话框-modal","aria-hidden":"true"},"#")],-1),D=s("p",null,"在当前页面打开一个与用户对话、交互的弹框。",-1),A=s("h3",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),d=s("p",null,"基础的弹框使用方式",-1),y=s("h3",{id:"modal-属性",tabindex:"-1"},[a("Modal 属性 "),s("a",{class:"header-anchor",href:"#modal-属性","aria-hidden":"true"},"#")],-1),i=s("h3",{id:"modal-事件",tabindex:"-1"},[a("Modal 事件 "),s("a",{class:"header-anchor",href:"#modal-事件","aria-hidden":"true"},"#")],-1),f=JSON.parse('{"title":"对话框 Modal","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"Modal 属性","slug":"modal-属性","link":"#modal-属性","children":[]},{"level":3,"title":"Modal 事件","slug":"modal-事件","link":"#modal-事件","children":[]}],"relativePath":"component/modal.md"}'),m={name:"component/modal.md"},b=p({...m,setup(B){return(h,u)=>{const E=o("demo-block"),n=o("table-block");return t(),F("div",null,[r,D,A,d,l(E,{src:"example/modal/basic",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E%40click%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3BhandleOpen%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E6%89%93%E5%BC%80%E5%AF%B9%E8%AF%9D%E6%A1%86%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-modal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Ev-model%3Avisible%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bshow%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E5%AF%B9%E8%AF%9D%E6%A1%86%E5%86%85%E5%AE%B9%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-modal%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bvue%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3EhandleOpen%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Eshow%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E.value%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%231976D2%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),y,l(n,{type:"props",data:e(C)},null,8,["data"]),i,l(n,{type:"events",data:e(c)},null,8,["data"])])}}});export{f as __pageData,b as default};
