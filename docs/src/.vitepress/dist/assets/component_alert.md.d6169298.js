import{d as F,r as p,o as t,c as C,a,u as o,b as s,e as l}from"./app.79e262a2.js";const e=[{name:"type",remark:"提示类型",type:"Enum",optional:["info","success","warning","error"],default:"info"},{name:"clearable",remark:"是否允许关闭",type:"Boolean",default:"false"},{name:"title",remark:"提示标题",type:"String",default:""}],A=[{name:"close",remark:"点击关闭触发",params:"none"}],c=s("h1",{id:"警告提示-alert",tabindex:"-1"},[l("警告提示 Alert "),s("a",{class:"header-anchor",href:"#警告提示-alert","aria-hidden":"true"},"#")],-1),r=s("p",null,"用于向用户展示警告提示以及其他重要信息",-1),D=s("h3",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),y=s("p",null,"基础的警告提示使用方式。",-1),B=s("h3",{id:"提示类型",tabindex:"-1"},[l("提示类型 "),s("a",{class:"header-anchor",href:"#提示类型","aria-hidden":"true"},"#")],-1),i=s("p",null,[l("提供 4 种不同类型以供不同场景使用，分别是"),s("code",null,"info"),l(" - 提示，"),s("code",null,"success"),l(" - 成功，"),s("code",null,"warning"),l(" - 警告，"),s("code",null,"error"),l(" - 错误。")],-1),d=s("h3",{id:"提示标题",tabindex:"-1"},[l("提示标题 "),s("a",{class:"header-anchor",href:"#提示标题","aria-hidden":"true"},"#")],-1),u=s("p",null,[l("可以通过 "),s("code",null,"title"),l(" 属性设置提示信息的标题。")],-1),g=s("h3",{id:"可关闭",tabindex:"-1"},[l("可关闭 "),s("a",{class:"header-anchor",href:"#可关闭","aria-hidden":"true"},"#")],-1),h=s("p",null,[l("可通过 "),s("code",null,"closeable"),l(" 属性控制是否支持手动关闭选项。")],-1),b=s("h3",{id:"alert-属性",tabindex:"-1"},[l("Alert 属性 "),s("a",{class:"header-anchor",href:"#alert-属性","aria-hidden":"true"},"#")],-1),f=s("h3",{id:"alert-事件",tabindex:"-1"},[l("Alert 事件 "),s("a",{class:"header-anchor",href:"#alert-事件","aria-hidden":"true"},"#")],-1),v=JSON.parse('{"title":"警告提示 Alert","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"提示类型","slug":"提示类型","link":"#提示类型","children":[]},{"level":3,"title":"提示标题","slug":"提示标题","link":"#提示标题","children":[]},{"level":3,"title":"可关闭","slug":"可关闭","link":"#可关闭","children":[]},{"level":3,"title":"Alert 属性","slug":"alert-属性","link":"#alert-属性","children":[]},{"level":3,"title":"Alert 事件","slug":"alert-事件","link":"#alert-事件","children":[]}],"relativePath":"component/alert.md"}'),m={name:"component/alert.md"},w=F({...m,setup(_){return(q,k)=>{const E=p("demo-block"),n=p("table-block");return t(),C("div",null,[c,r,D,y,a(E,{src:"example/alert/basic",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Berror%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),B,i,a(E,{src:"example/alert/type",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bhorizontal%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-row%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E%3Agutter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B10%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B12%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Binfo%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B12%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bsuccess%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E6%88%90%E5%8A%9F%E6%8F%90%E7%A4%BA%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-row%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-row%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E%3Agutter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B10%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B12%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bwarning%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E8%AD%A6%E5%91%8A%E6%8F%90%E7%A4%BA%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B12%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Berror%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-row%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),d,u,a(E,{src:"example/alert/title",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-row%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E%3Agutter%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B10%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B12%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Binfo%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etitle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B%E6%8F%90%E7%A4%BA%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B12%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Bsuccess%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etitle%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B%E6%93%8D%E4%BD%9C%E6%88%90%E5%8A%9F%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E6%88%90%E5%8A%9F%E6%8F%90%E7%A4%BA%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-col%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-row%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),g,h,a(E,{src:"example/alert/closeable",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3Binfo%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Ecloseable%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E8%BF%99%E6%98%AF%E4%B8%80%E6%9D%A1%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-alert%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),b,a(n,{type:"props",data:o(e)},null,8,["data"]),f,a(n,{type:"events",data:o(A)},null,8,["data"])])}}});export{v as __pageData,w as default};
