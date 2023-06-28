import{d as o,r as e,o as p,c,a as n,u as E,b as s,e as a}from"./app.9fcb9066.js";const r=[{name:"size",remark:"间距大小",type:["Enum","Number"],optional:["mini","small","normal","large"],default:"normal"},{name:"type",remark:"布局类型",type:["Enum"],optional:["vertical","horizontal"],default:"horizontal"},{name:"justify",remark:"水平对其方式",type:["String"],default:"flex-start"}],C=s("h1",{id:"间距-space",tabindex:"-1"},[a("间距 Space "),s("a",{class:"header-anchor",href:"#间距-space","aria-hidden":"true"},"#")],-1),F=s("p",null,"控制元素之间的距离和排版方式",-1),i=s("h3",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),d=s("p",null,[a("通过设定 "),s("code",null,"size"),a(" 属性，控制元素之间的间距，支持传入设定的尺寸，或者自定义大小。")],-1),A=s("h3",{id:"space-属性",tabindex:"-1"},[a("Space 属性 "),s("a",{class:"header-anchor",href:"#space-属性","aria-hidden":"true"},"#")],-1),_=JSON.parse('{"title":"间距 Space","description":"","frontmatter":{},"headers":[{"level":3,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":3,"title":"Space 属性","slug":"space-属性","link":"#space-属性","children":[]}],"relativePath":"component/space.md"}'),D={name:"component/space.md"},b=o({...D,setup(m){return(y,u)=>{const t=e("demo-block"),l=e("table-block");return p(),c("div",null,[C,F,i,d,n(t,{src:"example/space/basic",codeString:"%3Cpre%20class%3D%22shiki%20min-light%22%20style%3D%22background-color%3A%20%23ffffff%22%20tabindex%3D%220%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E%3Asize%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D32F2F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3E%26quot%3B10%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E6%8C%89%E9%92%AE%E4%B8%80%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%E6%8C%89%E9%92%AE%E4%BA%8C%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-button%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Ebp-space%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292EFF%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E"}),A,n(l,{type:"props",data:E(r)},null,8,["data"])])}}});export{_ as __pageData,b as default};
