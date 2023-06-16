!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).BirdpaperUI={},e.Vue)}(this,(function(e,t){"use strict";var l=Object.defineProperty,n=(e,t,n)=>(((e,t,n)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const a=["disabled"],o={key:0,class:"left-icon"},s=t.defineComponent({name:"Button"}),r=t.defineComponent({...s,props:{type:{type:String,default:"normal"},size:{type:String,default:"normal"},shape:{type:String,default:"square"},status:{type:String,default:"normal"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:""},block:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:l}){const n=e,s="bp-btn",r=t.computed((()=>n.disabled||n.loading)),i=t.computed((()=>[s,`${s}-${n.shape}-${n.size}`,`${s}-type-${n.type}-status-${n.status}`,{"has-default-slot":!!t.useSlots().default},{"is-block":n.block}])),c=t.computed((()=>n.loading?"bp-icon-loading ri-loader-4-line":n.icon)),p=()=>{if(!n.disabled)return l("click")};return(e,l)=>(t.openBlock(),t.createElementBlock("button",{class:t.normalizeClass(i.value),type:"button",disabled:r.value,onClick:p},[c.value?(t.openBlock(),t.createElementBlock("span",o,[t.createElementVNode("i",{class:t.normalizeClass(c.value)},null,2)])):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"default")],10,a))}}),i=e=>e??"Bp";r.name=i()+r.name;const c=Object.assign(r,{install:e=>{e.component(r.name,r)}});var p=(e=>(e.Text="text",e.Password="password",e))(p||{});const u=["type","disabled","readonly","cursor","placeholder","maxlength","value"],d={key:0,class:"suffix"},m=["textContent"],f=t.defineComponent({name:"Input"}),y=t.defineComponent({...f,props:{modelValue:{type:String,default:""},type:{type:String,default:p.Text},size:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},isDanger:{type:Boolean,default:!1},placeholder:{type:String,default:""},maxlength:{type:Number,default:null},showLimit:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},emits:["update:modelValue","input","focus","blur","keypress","keyup"],setup(e,{expose:l,emit:n}){const a=e,o="bp-input",s=t.useSlots(),r=t.ref(),i=t.computed((()=>v.value?p.Password:p.Text)),c=t.computed((()=>{const e=(a.disabled?"disabled":a.readonly&&"readonly")||a.isDanger&&"danger"||"normal";return[o,`${o}-size-${a.size}`,`${o}-status-${e}`]}));const f=t.computed((()=>"text"===a.type&&a.modelValue&&a.clearable&&!a.disabled&&!a.readonly)),y=()=>{n("update:modelValue",""),t.nextTick((()=>B()))},g=t.computed((()=>a.maxlength&&a.showLimit&&"text"===a.type)),k=t.computed((()=>`${a.modelValue.length}/${a.maxlength}`)),b=t.ref(!1),v=t.computed((()=>a.type===p.Password&&!b.value)),h=()=>{b.value=!b.value,t.nextTick((()=>B()))},B=()=>r.value.focus(),C=()=>n("focus"),x=()=>n("blur"),S=()=>n("keypress"),V=()=>n("keyup"),$=e=>{const t=e.target.value;n("update:modelValue",t)};return l({handleFocus:B,handleBlur:()=>r.value.blur()}),(l,n)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(c.value)},[t.createElementVNode("input",{ref_key:"inpRef",ref:r,class:"bp-input-inner",type:i.value,spellcheck:!1,disabled:e.disabled,readonly:e.readonly,cursor:e.modelValue.length,placeholder:e.placeholder,maxlength:e.maxlength,value:e.modelValue,onFocus:C,onBlur:x,onKeypress:S,onKeyup:V,onInput:$},null,40,u),t.unref(s).suffix||f.value||g.value||"password"===e.type?(t.openBlock(),t.createElementBlock("div",d,[t.unref(s).suffix?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[f.value?(t.openBlock(),t.createElementBlock("i",{key:0,class:"ri-close-line click-icon",onClick:y})):t.createCommentVNode("",!0),g.value?(t.openBlock(),t.createElementBlock("span",{key:1,textContent:t.toDisplayString(k.value)},null,8,m)):t.createCommentVNode("",!0),"password"===e.type?(t.openBlock(),t.createElementBlock("i",{key:2,onClick:h,class:t.normalizeClass(["click-icon",b.value?"ri-eye-fill":"ri-eye-close-fill"])},null,2)):t.createCommentVNode("",!0)],64)),t.renderSlot(l.$slots,"suffix")])):t.createCommentVNode("",!0)],2))}});y.name=i()+y.name;const g=Object.assign(y,{install:e=>{e.component(y.name,y)}}),k=["rows","disabled","readonly","cursor","placeholder","maxlength","value"],b={class:"suffix"},v=["textContent"],h=t.defineComponent({name:"Textarea"}),B=t.defineComponent({...h,props:{modelValue:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},isDanger:{type:Boolean,default:!1},placeholder:{type:String,default:""},maxlength:{type:Number,default:null},rows:{type:Number,default:2},showLimit:{type:Boolean,default:!1}},emits:["update:modelValue","input","focus","blur","keypress","keyup"],setup(e,{emit:l}){const n=e,a="bp-textarea",o=t.ref(),s=t.computed((()=>{const e=(n.disabled?"disabled":n.readonly&&"readonly")||n.isDanger&&"danger"||"normal";return[a,`${a}-status-${e}`]}));const r=t.computed((()=>n.maxlength&&n.showLimit)),i=t.computed((()=>`${n.modelValue.length}/${n.maxlength}`)),c=()=>l("focus"),p=()=>l("blur"),u=()=>l("keypress"),d=()=>l("keyup"),m=e=>{const t=e.target.value;l("update:modelValue",t)};return(l,n)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(s.value)},[t.createElementVNode("textarea",{ref_key:"inpRef",ref:o,class:"bp-textarea-inner",rows:e.rows,spellcheck:!1,disabled:e.disabled,readonly:e.readonly,cursor:e.modelValue.length,placeholder:e.placeholder,maxlength:e.maxlength,value:e.modelValue,onFocus:c,onBlur:p,onKeypress:u,onKeyup:d,onInput:m},null,40,k),t.createElementVNode("div",b,[r.value?(t.openBlock(),t.createElementBlock("span",{key:0,textContent:t.toDisplayString(i.value)},null,8,v)):t.createCommentVNode("",!0)])],2))}});B.name=i()+B.name;const C=Object.assign(B,{install:e=>{e.component(B.name,B)}}),x=t.defineComponent({name:"Radio"}),S=t.defineComponent({...x,props:{modelValue:{type:[String,Number,Boolean],default:!1},value:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:l}){const n=e,a="bp-radio",o=()=>{n.disabled||(l("update:modelValue",n.value),l("change",n.value))},s=t.computed((()=>n.modelValue===n.value));return(l,n)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass([a,e.disabled?`${a}-disabled`:""]),onClick:o},[t.createElementVNode("input",{type:"radio",class:t.normalizeClass(`${a}-inner`)},null,2),t.createElementVNode("span",{class:t.normalizeClass([`${a}-radio`,s.value?`${a}-check`:""])},null,2),t.createElementVNode("span",{class:t.normalizeClass(`${a}-label`)},[t.renderSlot(l.$slots,"default")],2)],2))}});S.name=i()+S.name;const V=Object.assign(S,{install:e=>{e.component(S.name,S)}}),$={key:0,class:"ri-check-line"},N=t.defineComponent({name:"Checkbox"}),E=t.defineComponent({...N,props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const n=e,a="bp-checkbox",o=t.computed((()=>{let e=[a];return n.disabled&&e.push(`${a}-disabled`),e})),s=t.computed((()=>n.modelValue)),r=()=>{l("update:modelValue",!n.modelValue)};return(e,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(o.value),onClick:r},[t.createElementVNode("input",{type:"checkbox",class:t.normalizeClass(`${a}-inner`)},null,2),t.createElementVNode("span",{class:t.normalizeClass([`${a}-checkbox`,s.value?`${a}-check`:""])},[s.value?(t.openBlock(),t.createElementBlock("i",$)):t.createCommentVNode("",!0)],2),t.createElementVNode("span",{class:t.normalizeClass(`${a}-label`)},[t.renderSlot(e.$slots,"default")],2)],2))}});E.name=i()+E.name;const w=Object.assign(E,{install:e=>{e.component(E.name,E)}}),z=t.defineComponent({name:"Switch"}),T=t.defineComponent({...z,props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const n=e,a="bp-switch",o=t.computed((()=>{let e=[a];return n.disabled&&e.push(`${a}-disabled`),e})),s=t.computed((()=>n.modelValue)),r=()=>{l("update:modelValue",!n.modelValue)};return(e,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(o.value),onClick:r},[t.createElementVNode("input",{type:"checkbox",class:t.normalizeClass(`${a}-inner`)},null,2),t.createElementVNode("span",{class:t.normalizeClass([`${a}-slider`,s.value?`${a}-check`:""])},null,2)],2))}});T.name=i()+T.name;const L=Object.assign(T,{install:e=>{e.component(T.name,T)}});class _{constructor(){n(this,"label",""),n(this,"value","")}}const j=Symbol("SelectCtxKey"),P={mounted(e,t){function l(l){if(e.contains(l.target))return!1;t.value&&"function"==typeof t.value&&t.value(l)}e.__click_outside__=l,document.addEventListener("click",l)},beforeUnmount(e){document.removeEventListener("click",e.__click_outside__),delete e.__click_outside__}},D=(e,t)=>Boolean(e&&6&e.shapeFlag),F=(e,t)=>Boolean(e&&16&e.shapeFlag),O=Object.prototype.toString,M=(e,t)=>Boolean(e&&32&e.shapeFlag),A=(e,t=!1)=>{var l,n;const a=[];for(const i of e??[])r=i,Boolean(r&&1&r.shapeFlag)||D(i)||t&&(s=i,i.children,Boolean(s&&8&s.shapeFlag))?a.push(i):F(i,i.children)?a.push(...A(i.children,t)):M(i,i.children)?a.push(...A(null==(n=(l=i.children).default)?void 0:n.call(l),t)):(o=i,"[object Array]"===O.call(o)&&a.push(...A(i,t)));var o,s,r;return a},R=e=>"string"==typeof e,U=(e,t)=>{var l,n;t=t||200;return function(){var a=arguments,o=Date.now();l&&o-l<t?(clearTimeout(n),n=setTimeout((function(){l=o,e.apply(this,a)}),t)):(l=o,e.apply(this,a))}},I=function(e,t,l,n=!1){e&&t&&l&&e.addEventListener(t,l,n)},K=function(e,t,l,n=!1){e&&t&&l&&e.removeEventListener(t,l,n)},W=(e,t)=>{console.warn(`[ A warning of birdpaper-ui ] - ${e}: `+t)},G=["onClick"],q=t.defineComponent({name:"Select"}),H=t.defineComponent({...q,props:{modelValue:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""},clearable:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:l}){const n=e,a=t.useSlots(),o="bp-select",s=t.ref(),r=t.ref(),i=t.ref(),c=t.reactive(new _),p=t.ref(!1),u=t.computed((()=>{var e,t,l;try{let n={};const o=A(null==(e=a.default)?void 0:e.call(a),!0).filter((e=>e.type!==Comment))??[];for(const e of o)"BpOption"===e.type.name&&(n[e.props.value]=e.props.label||(null==(l=(t=e.children).default)?void 0:l.call(t)[0].children));return n}catch(n){return{}}})),d=()=>{n.disabled||(m(),p.value=!p.value,p.value&&r.value.handleFocus())},m=()=>{const e=s.value.getBoundingClientRect();i.value.setAttribute("style",`display:${p.value?"block":"none"};width: ${e.width}px;top:${e.top+e.height}px;left:${e.left}px`)},f=()=>{p.value=!1},y=()=>{!p.value&&r.value.handleBlur()};return t.provide(j,{modelValue:n.modelValue,onSelect:(e,t)=>{c.value=e,c.label=t.label,l("update:modelValue",c.value),l("change",c.value),p.value=!1}}),c.value=n.modelValue,c.label=u.value[c.value],t.onMounted((()=>{t.nextTick((()=>{I(window,"resize",U(m,100))}))})),t.onBeforeUnmount((()=>{K(window,"resize",m)})),(l,n)=>{const a=t.resolveComponent("bp-input");return t.withDirectives((t.openBlock(),t.createElementBlock("div",{ref_key:"selectRef",ref:s,class:t.normalizeClass([o,p.value?`${o}-focus`:""]),onClick:t.withModifiers(d,["stop"]),onMouseleave:y},[t.createVNode(a,{ref_key:"inpRef",ref:r,modelValue:c.label,"onUpdate:modelValue":n[0]||(n[0]=e=>c.label=e),readonly:"",placeholder:e.placeholder},{suffix:t.withCtx((()=>[t.createElementVNode("i",{class:t.normalizeClass([`${o}-icon-inner`,`ri-arrow-${p.value?"up":"down"}-s-line`])},null,2)])),_:1},8,["modelValue","placeholder"]),(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"fade-select",appear:""},{default:t.withCtx((()=>[t.withDirectives(t.createElementVNode("div",{ref_key:"optionBoxRef",ref:i,class:t.normalizeClass(`${o}-option-box`)},[t.createElementVNode("ul",{class:t.normalizeClass(`${o}-option-list`)},[t.renderSlot(l.$slots,"default")],2)],2),[[t.vShow,p.value]])])),_:3})]))],42,G)),[[t.unref(P),f]])}}}),J=t.defineComponent({name:"Option"}),Q=t.defineComponent({...J,props:{value:{type:[String,Number,Boolean],default:""},label:{type:String,default:""}},setup(e){const l=e,n=t.ref(),a=t.useSlots(),o=t.reactive(new _),s=()=>{var e;null==(e=n.value)||e.onSelect(o.value,{...o})};return t.watch((()=>l),(()=>{var e;n.value=t.inject(j,null),o.label=l.label||(null==(e=a.default)?void 0:e.call(a)[0].children),o.value=l.value}),{immediate:!0}),(e,l)=>(t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass("bp-option-item"),onClick:s},[t.createElementVNode("span",null,[t.renderSlot(e.$slots,"default")])],2))}});H.name=i()+H.name,Q.name=i()+Q.name;const X=Object.assign(H,{install:e=>{e.component(H.name,H),e.component(Q.name,Q)}}),Y=["textContent"],Z={key:1,class:"ri-arrow-left-s-line"},ee=t.defineComponent({name:"PaginationPrev"}),te=t.defineComponent({...ee,props:{text:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:l}){const n=e,a="bp-pagination",o=t.computed((()=>{let e=[`${a}-item`,`${a}-prev`];return n.disabled&&e.push(`${a}-item-disabled`),e})),s=()=>{n.disabled||l("click")};return(l,n)=>(t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass(o.value),onClick:s},[e.text?(t.openBlock(),t.createElementBlock("span",{key:0,textContent:t.toDisplayString(e.text)},null,8,Y)):(t.openBlock(),t.createElementBlock("i",Z))],2))}}),le=["textContent"],ne={key:1,class:"ri-arrow-right-s-line"},ae=t.defineComponent({name:"PaginationNext"}),oe=t.defineComponent({...ae,props:{text:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:l}){const n=e,a="bp-pagination",o=t.computed((()=>{let e=[`${a}-item`,`${a}-next`];return n.disabled&&e.push(`${a}-item-disabled`),e})),s=()=>{n.disabled||l("click")};return(l,n)=>(t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass(o.value),onClick:s},[e.text?(t.openBlock(),t.createElementBlock("span",{key:0,textContent:t.toDisplayString(e.text)},null,8,le)):(t.openBlock(),t.createElementBlock("i",ne))],2))}}),se=["textContent"],re=t.defineComponent({name:"PaginationTotal"}),ie=t.defineComponent({...re,props:{value:{type:Number,default:0},tmpString:{type:String,default:""}},setup(e){const l=e,n="bp-pagination",a=t.ref("");return t.watchEffect((()=>{a.value=l.tmpString.replace("{total}",l.value)})),(e,l)=>(t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass([`${n}-item`,`${n}-total`])},[t.createElementVNode("span",{class:"page-text",textContent:t.toDisplayString(a.value)},null,8,se)],2))}}),ce=["onClick"],pe={key:0},ue={key:1,class:"ri-more-fill"},de=t.defineComponent({name:"PaginationPager"}),me=t.defineComponent({...de,props:{currentPage:{type:Number,default:1},pages:{type:Number,default:0},maxPager:{type:Number,default:0}},emits:["click"],setup(e,{emit:l}){const n=e,a="bp-pagination",o=t.ref([]);return t.watchEffect((()=>{const{pages:e,currentPage:t,maxPager:l}=n;if(o.value=[],e<l+1){for(let t=1;t<e+1;t++)o.value.push({index:t,type:"number"});return}const a=Number((l/2+1).toFixed()),s=l-2,r=t>=a,i=t<=Number(e-a);let c;o.value=[{index:1,type:"number"}],r&&o.value.push({index:t-s,type:"ellipsis"}),!r&&(c=2),r&&i&&(c=t-Number((s/2).toFixed())+1),!i&&(c=e-s);for(let n=c;n<s+c;n++)o.value.push({index:n,type:"number"});i&&o.value.push({index:t+s,type:"ellipsis"}),o.value.push({index:e,type:"number"})})),(n,s)=>(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(o.value,((n,o)=>(t.openBlock(),t.createElementBlock("li",{key:`page-item-${o}`,class:t.normalizeClass([`${a}-pager`,`${a}-item`,n.index===e.currentPage?`${a}-item-active`:""]),onClick:e=>{return t=n.index,void l("click",t);var t}},["number"===n.type?(t.openBlock(),t.createElementBlock("span",pe,t.toDisplayString(n.index),1)):(t.openBlock(),t.createElementBlock("i",ue))],10,ce)))),128))}}),fe={key:0,class:"page-text"},ye={key:1,class:"page-text"},ge=t.defineComponent({name:"PaginationJumper"}),ke=t.defineComponent({...ge,props:{currentPage:{type:Number,default:1},pages:{type:Number,default:0},tmpString:{type:String,default:"前往{jumper}"}},emits:["change"],setup(e,{emit:l}){const n=e,a="bp-pagination",o=t.ref(""),s=t.reactive({prefix:"",suffix:""}),r=()=>{let e=Number(o.value)??1;e<1&&(e=1),e>n.pages&&(e=n.pages),l("change",e)};return t.watchEffect((()=>{try{const e=n.tmpString.split("{jumper}");e.length>1&&(s.prefix=e[0],s.suffix=e[1])}catch(e){W("Pagination","Split jumper paramsStr failure")}})),(e,l)=>{const n=t.resolveComponent("bp-input");return t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass([`${a}-item`,`${a}-jumper`])},[s.prefix?(t.openBlock(),t.createElementBlock("span",fe,t.toDisplayString(s.prefix),1)):t.createCommentVNode("",!0),t.createVNode(n,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),size:"small",onBlur:r},null,8,["modelValue"]),s.suffix?(t.openBlock(),t.createElementBlock("span",ye,t.toDisplayString(s.suffix),1)):t.createCommentVNode("",!0)],2)}}}),be=t.defineComponent({name:"PaginationSizes"}),ve=t.defineComponent({...be,props:{currentSize:{type:Number,default:""},sizesList:{type:Array,default:()=>[]},tmpString:{type:String,default:""}},emits:["change"],setup(e,{emit:l}){const n=e,a="bp-pagination",o=t.ref(n.currentSize||n.sizesList[0]||10),s=t.ref([]),r=e=>{l("change",e)};return t.watchEffect((()=>{for(let e=0;e<n.sizesList.length;e++){const t=n.sizesList[e],l=`${n.tmpString.replace("{value}",t)}`;s.value.push({label:l,value:t})}})),(e,l)=>{const n=t.resolveComponent("bp-option"),i=t.resolveComponent("bp-select");return t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass(`${a}-item ${a}-sizes`)},[t.createVNode(i,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),style:{width:"100px"},onChange:r},{default:t.withCtx((()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(s.value,(e=>(t.openBlock(),t.createBlock(n,{value:e.value},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(e.label),1)])),_:2},1032,["value"])))),256))])),_:1},8,["modelValue"])],2)}}}),he=(e,l)=>{const n={prev:te,next:oe,total:ie,pager:me,jumper:ke,sizes:ve},a=t.ref(e.current||1),o=t.ref(e.pageSize),s=t.ref(0),r=(e,t)=>{let l=a.value;return"prev"===e?l--:"next"===e?l++:l=t??1,a.value=l<1?1:l>s.value?s.value:l,a.value};t.watchEffect((()=>{s.value=Math.ceil(e.total/o.value),a.value>s.value&&r("page",s.value)}));const i=t.computed((()=>({bind:{value:e.total,tmpString:e.totalTmpString}}))),c=t.computed((()=>({bind:{text:e.prevText,disabled:1===a.value},eventName:"click",event:()=>{const e=r("prev");l("update:current",e),l("page-change",e)}}))),p=t.computed((()=>({bind:{pages:s.value,maxPager:e.maxPager,currentPage:a.value},eventName:"click",event:e=>{const t=r("page",e);l("update:current",t),l("page-change",t)}}))),u=t.computed((()=>({bind:{pages:s.value,currentPage:a.value,tmpString:e.jumperTmpString},eventName:"change",event:e=>{const t=r("page",e);l("update:current",t),l("page-change",t)}}))),d=t.computed((()=>({bind:{text:e.nextText,disabled:a.value===s.value},eventName:"click",event:()=>{const e=r("next");l("update:current",e),l("page-change",e)}}))),m=t.computed((()=>({bind:{currentSize:o.value,sizesList:e.sizesList,tmpString:e.sizesTmpString},eventName:"change",event:e=>{const t=(n=e,o.value=n,o.value);var n;l("update:pageSize",t),l("size-change",t)}})));return{componentsList:t.computed((()=>{try{const t=e.layout.replace(/\s*/g,"").split(",")||[];if(0===t.length)return[];const l=[],a={total:i.value,prev:c.value,next:d.value,pager:p.value,jumper:u.value,sizes:m.value};return t.map((e=>{l.push({name:e,component:n[e],...a[e]})})),l}catch(t){W("Pagination","Render componentsList failure")}}))}},Be=t.defineComponent({name:"Pagination"}),Ce=t.defineComponent({...Be,props:{layout:{type:String,default:"prev, pager, next"},total:{type:Number,default:0},current:{type:Number,default:1},pageSize:{type:Number,default:()=>10},sizesList:{type:Array,default:()=>[10,20,50,100]},prevText:{type:String,default:""},nextText:{type:String,default:""},maxPager:{type:Number,default:7},totalTmpString:{type:String,default:"共 {total} 条"},jumperTmpString:{type:String,default:"前往{jumper}"},sizesTmpString:{type:String,default:"{value} 条/页"}},emits:["update:current","update:pageSize","page-change","size-change"],setup(e,{emit:l}){const n=e,a="bp-pagination",{componentsList:o}=he(n,l);return(e,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(a)},[t.createElementVNode("ul",{class:t.normalizeClass(`${a}-container`)},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o),(e=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps(e.bind,{[t.toHandlerKey(e.eventName)]:e.event}),null,16)))),256))],2)]))}});Ce.name=i()+Ce.name;const xe=Object.assign(Ce,{install:e=>{e.component(Ce.name,Ce)}}),Se=e=>{const l=t.ref(null),n=t.ref([]),a=t.ref();let o=0,s=0,r=[],i=[];const c=80,p=()=>{const t=l.value,{cols:p}=e;if(!(0===p.length||p.length>99)){s=0,o=p.length,r=[];for(let e=0;e<p.length;e++){const{width:t,minWidth:l}=p[e];t&&(s+=Number(t),o--),l&&r.push(l)}a.value=t&&t.offsetWidth-6,i=function(){const{cols:t}=e;let l=[],n=u();r.length&&r.map(((e,t)=>{n>e&&(s+=e,o--,r.splice(t,1),n=u())}));for(let e=0;e<t.length;e++){const{width:a,minWidth:o}=t[e];if(a){l.push(a);continue}o&&o>n?l.push(o):l.push(n<c?c:n)}return l}()||[],n.value=[];for(let t=0;t<p.length;t++)n.value.push({...e.cols[t],width:i[t]});return n.value}};function u(){let e=(a.value-s)/o;return Number(Number(e).toFixed(2))}return t.watch((()=>e.cols),(()=>{p()})),t.onMounted((()=>{t.nextTick((()=>{p(),I(window,"resize",U((()=>p()),400))}))})),t.onBeforeUnmount((()=>K(window,"resize",(()=>p())))),{initColumns:p,bpTable:l,_table_width:a,columns:n}},Ve=["name","width"],$e=t.defineComponent({name:"TableColumns"}),Ne=t.defineComponent({...$e,props:{cols:{type:Array,default:()=>[]}},setup:e=>(l,n)=>(t.openBlock(),t.createElementBlock("colgroup",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.cols,((e,l)=>(t.openBlock(),t.createElementBlock("col",{key:`bp-table-tr-${l}`,name:`bp_table_tr_${l}`,width:`${e.width}px`},null,8,Ve)))),128))]))}),Ee={class:"bp-table-header-thead"},we=t.defineComponent({name:"TableHeader"}),ze=t.defineComponent({...we,props:{headerList:{type:Array,default:()=>[]},width:{type:[String,Number],default:""}},setup(e){const l=e=>[`text-${e.headerAlign||e.align||"left"}`];return(n,a)=>(t.openBlock(),t.createElementBlock("table",{class:"bp-table-header",style:t.normalizeStyle(`width:${e.width}px`)},[t.createVNode(Ne,{cols:e.headerList},null,8,["cols"]),t.createElementVNode("thead",Ee,[t.createElementVNode("tr",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.headerList,((e,n)=>(t.openBlock(),t.createElementBlock("th",{key:`bp-table-thead-${n}`,class:t.normalizeClass(l(e))},t.toDisplayString(e.label),3)))),128))])])],4))}}),Te={class:"bp-table-empty-tr"},Le=["colspan"],_e=t.defineComponent({name:"TableEmpty"}),je=t.defineComponent({..._e,props:{colspan:{type:Number,default:0}},setup:e=>(l,n)=>(t.openBlock(),t.createElementBlock("tr",Te,[t.createElementVNode("td",{colspan:e.colspan},"暂无数据",8,Le)]))}),Pe=t.createElementVNode("div",{class:"scrollbar"},null,-1),De={class:"bp-table-body-tbody"},Fe=t.defineComponent({name:"Table"}),Oe=t.defineComponent({...Fe,props:{cols:{type:Array,default:()=>[]},dataSource:{type:Array,default:()=>[]},height:{type:String,default:""},loading:{type:Boolean,default:!1},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!1}},setup(e){const l=e,{bpTable:n,columns:a,_table_width:o}=Se(l),s=t.computed((()=>0===l.dataSource.length)),r=t.computed((()=>l.border)),i=t.computed((()=>l.stripe)),c=t.computed((()=>l.height)),p=t.computed((()=>l.height?`width:${o.value}px;max-height:${l.height}px;height:${l.height}px;overflow-y:auto`:`width:${o.value}px`)),u=t.computed((()=>["bp-table-inner",{"bp-table-border":r.value},{"bp-table-stripe":i.value},{"bp-table-fixed-header":c.value}])),d=e=>[`text-${e.align||"left"}`];return(l,r)=>(t.openBlock(),t.createElementBlock("div",{class:"bp-table",ref_key:"bpTable",ref:n},[t.createElementVNode("div",{class:t.normalizeClass(u.value)},[t.createVNode(ze,{"header-list":t.unref(a),width:t.unref(o)},null,8,["header-list","width"]),t.createElementVNode("div",{class:"bp-table-body-area",style:t.normalizeStyle(p.value)},[Pe,t.createElementVNode("table",{class:"bp-table-body",style:t.normalizeStyle(`width:${t.unref(o)}px`)},[t.createVNode(Ne,{cols:t.unref(a)},null,8,["cols"]),t.createElementVNode("tbody",De,[s.value?(t.openBlock(),t.createBlock(je,{key:0,colspan:t.unref(a).length},null,8,["colspan"])):(t.openBlock(!0),t.createElementBlock(t.Fragment,{key:1},t.renderList(e.dataSource,((e,n)=>(t.openBlock(),t.createElementBlock("tr",{key:`bp-table-tbody-tr-${n}`},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(a),((a,o)=>(t.openBlock(),t.createElementBlock("td",{key:`bp-table-tbody-td-${n}-${o}`,class:t.normalizeClass(d(a))},[a.scope?t.renderSlot(l.$slots,a.scope.customRender,{key:1,row:e,index:n,data:e[a.key]}):(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e[a.key]),1)],64))],2)))),128))])))),128))])],4)],4)],2)],512))}});Oe.name=i()+Oe.name;const Me=Object.assign(Oe,{install:e=>{e.component(Oe.name,Oe)}}),Ae=t.defineComponent({name:"Space",props:{size:{type:[Number,String],default:"small"},type:{type:String,default:"horizontal"},justify:{type:String,default:"flex-start"}},setup(e,{slots:l}){const n=R(e.size)?{mini:4,small:8,normal:16,large:24}[e.size]:e.size;return()=>{var a;const o=A(null==(a=l.default)?void 0:a.call(l),!0).filter((e=>e.type!==t.Comment));return t.createVNode("div",{class:["bp-space",`bp-space-${e.type}`],style:`justify-content:${e.justify}`},[o.map(((l,a)=>t.createVNode(t.Fragment,{key:l.key??`item-${a}`},[t.createVNode("div",{class:"bp-space-item",style:"horizontal"===e.type?`margin: 0 ${n}px`:`margin: ${n}px 0`},[l])])))])}}});Ae.name=i()+Ae.name;const Re=Object.assign(Ae,{install:e=>{e.component(Ae.name,Ae)}}),Ue={key:0,class:"ri-information-fill"},Ie={key:1,class:"ri-checkbox-circle-fill"},Ke={key:2,class:"ri-error-warning-fill"},We={key:3,class:"ri-close-circle-fill"},Ge=["textContent"],qe={key:0,class:"ri-close-line"},He={key:1},Je=t.defineComponent({name:"Alert"}),Qe=t.defineComponent({...Je,props:{type:{type:String,default:"info"},title:{type:String,default:""},closeable:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:l}){const n=e,a="bp-alert",o=t.useSlots(),s=t.computed((()=>[a,`${a}-${n.type}`,n.title?`${a}-with-title`:""])),r=t.ref(!0),i=()=>{r.value=!1,l("close")};return(l,n)=>r.value?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(s.value)},[t.createElementVNode("div",{class:t.normalizeClass(`${a}-icon`)},["info"===e.type?(t.openBlock(),t.createElementBlock("i",Ue)):t.createCommentVNode("",!0),"success"===e.type?(t.openBlock(),t.createElementBlock("i",Ie)):t.createCommentVNode("",!0),"warning"===e.type?(t.openBlock(),t.createElementBlock("i",Ke)):t.createCommentVNode("",!0),"error"===e.type?(t.openBlock(),t.createElementBlock("i",We)):t.createCommentVNode("",!0)],2),t.createElementVNode("div",{class:t.normalizeClass(`${a}-body`)},[e.title?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${a}-title`)},[t.createElementVNode("span",{textContent:t.toDisplayString(e.title)},null,8,Ge)],2)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:t.normalizeClass(`${a}-content`)},[t.createElementVNode("span",null,[t.renderSlot(l.$slots,"default")])],2)],2),t.createElementVNode("div",{class:t.normalizeClass(`${a}-option`)},[e.closeable?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${a}-close-inner`),onClick:i},[t.unref(o).close?(t.openBlock(),t.createElementBlock("span",He,[t.renderSlot(l.$slots,"close")])):(t.openBlock(),t.createElementBlock("i",qe))],2)):t.createCommentVNode("",!0)],2)],2)):t.createCommentVNode("",!0)}});Qe.name=i()+Qe.name;const Xe=Object.assign(Qe,{install:e=>{e.component(Qe.name,Qe)}}),Ye=t.defineComponent({name:"Tag"}),Ze=t.defineComponent({...Ye,props:{status:{type:String,default:"normal"},closeable:{type:Boolean,default:!1}},setup(e){const l=e,n="bp-tag",a=t.computed((()=>[n,`${n}-${l.status}`])),o=t.ref(!0),s=()=>{l.closeable&&(o.value=!1)};return(l,r)=>o.value?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(a.value)},[t.createElementVNode("span",{class:t.normalizeClass(`${n}-inner`)},[t.renderSlot(l.$slots,"default")],2),e.closeable?(t.openBlock(),t.createElementBlock("i",{key:0,class:"ri-close-line",onClick:s})):t.createCommentVNode("",!0)],2)):t.createCommentVNode("",!0)}});Ze.name=i()+Ze.name;const et=Object.assign(Ze,{install:e=>{e.component(Ze.name,Ze)}}),tt=["onClick"],lt=t.defineComponent({name:"Modal"}),nt=t.defineComponent({...lt,props:{visible:{type:Boolean,default:!1},hideFooter:{type:Boolean,default:!1},hideClose:{type:Boolean,default:!1},border:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},title:{type:String,default:"标题"},titleAlign:{type:String,default:"left"},width:{type:String,default:"600px"},top:{type:String,default:"20vh"}},emits:["ok","cancle","update:visible"],setup(e,{emit:l}){const n=e,a="bp-modal",o=t.useSlots(),s=t.ref(!1),r=t.computed((()=>{let e=[a];return n.border&&e.push(`${a}-border`),e.push(`${a}-title-${n.titleAlign}`),e})),i=()=>{n.maskClosable&&c()},c=()=>{l("cancle"),l("update:visible",!1)},p=()=>{l("ok"),l("update:visible",!1)};return t.watch((()=>n.visible),(()=>{n.visible?s.value=!0:setTimeout((()=>{s.value=!1}),200)})),(l,n)=>{const u=t.resolveComponent("bp-button"),d=t.resolveComponent("bp-space");return t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.withDirectives(t.createElementVNode("div",{class:t.normalizeClass(`${a}-container`)},[t.createVNode(t.Transition,{name:"fade-modal-mask"},{default:t.withCtx((()=>[t.withDirectives(t.createElementVNode("div",{class:t.normalizeClass(`${a}-mask`)},null,2),[[t.vShow,e.visible]])])),_:1}),t.createVNode(t.Transition,{name:"modal-fade"},{default:t.withCtx((()=>[t.withDirectives(t.createElementVNode("div",{class:t.normalizeClass(`${a}-wrapper`),onClick:t.withModifiers(i,["self"])},[t.createElementVNode("div",{class:t.normalizeClass(r.value),style:t.normalizeStyle(`width:${e.width};top:${e.top}`)},[t.createElementVNode("div",{class:t.normalizeClass(`${a}-header`)},[t.createElementVNode("p",{class:t.normalizeClass(`${a}-header-title`)},t.toDisplayString(e.title),3),e.hideClose?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("i",{key:0,class:t.normalizeClass([`${a}-header-close`,"ri-close-line"]),onClick:c},null,2))],2),t.createElementVNode("div",{class:t.normalizeClass(`${a}-body`)},[t.renderSlot(l.$slots,"default")],2),e.hideFooter?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${a}-footer`)},[t.unref(o).footer?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(d,{key:0,justify:"flex-end"},{default:t.withCtx((()=>[t.createVNode(u,{onClick:c},{default:t.withCtx((()=>[t.createTextVNode("取消")])),_:1}),t.createVNode(u,{onClick:p,type:"primary",status:"primary"},{default:t.withCtx((()=>[t.createTextVNode("确认")])),_:1})])),_:1})),t.renderSlot(l.$slots,"footer")],2))],6)],10,tt),[[t.vShow,e.visible]])])),_:3})],2),[[t.vShow,s.value]])])}}});nt.name=i()+nt.name;const at=Object.assign(nt,{install:e=>{e.component(nt.name,nt)}}),ot=t.createElementVNode("i",{class:"bp-icon-loading ri-loader-4-line"},null,-1),st=[t.createElementVNode("i",{class:"bp-icon-loading ri-loader-4-line"},null,-1)],rt=t.defineComponent({name:"Spin"}),it=t.defineComponent({...rt,props:{loading:{type:Boolean,default:!1},tip:{type:String,default:""}},setup(e){const l="bp-spin",n=t.useSlots();return(a,o)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(l)},[t.renderSlot(a.$slots,"default"),t.unref(n).default&&e.loading?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(`${l}-mask`)},[t.createElementVNode("div",{class:t.normalizeClass(`${l}-loading`)},[ot,t.createElementVNode("p",{class:t.normalizeClass(`${l}-tip`)},t.toDisplayString(e.tip),3)],2)],2)):(t.openBlock(),t.createElementBlock("div",{key:1,class:t.normalizeClass(`${l}-loading`)},st,2))]))}});it.name=i()+it.name;const ct=Object.assign(it,{install:e=>{e.component(it.name,it)}}),pt=t.defineComponent({name:"Col"}),ut=t.defineComponent({...pt,props:{span:{type:[String,Number],default:24},offset:{type:[String,Number],default:""}},setup(e){const l=e,n="col",a=t.computed((()=>{let e=[`bp-${n}`];return 0!==Number(l.span)&&e.push(`bp-${n}-${l.span}`),0!==Number(l.offset)&&e.push(`bp-${n}-offset-${l.offset}`),e}));return(e,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(a.value)},[t.renderSlot(e.$slots,"default")],2))}}),dt=t.defineComponent({name:"Row"}),mt=t.defineComponent({...dt,props:{gutter:{type:[String,Number],default:""},justify:{type:String,default:"start"},align:{type:String,default:"start"}},setup(e){const l=e,n=t.useSlots().default(),a=t.ref(),o=t.computed((()=>["bp-row",`bp-justify-${l.justify}`,`bp-align-${l.align}`])),s=e=>{const t=a.value.children;e.forEach(((e,n)=>{if(e.type===ut){const e=t[n];return 0!==n&&(e.style.paddingLeft=`${l.gutter}px`),void(n!==t.length-1&&(e.style.paddingRight=`${l.gutter}px`))}"Symbol(Fragment)"===e.type.toString()&&s(e.children)}))};return t.onMounted((()=>{t.nextTick((()=>{s(n)}))})),(e,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(o.value),ref_key:"rowRef",ref:a},[t.renderSlot(e.$slots,"default")],2))}});mt.name=i()+mt.name,ut.name=i()+ut.name;const ft=Object.assign(mt,{Col:ut,install:e=>{e.component(mt.name,mt),e.component(ut.name,ut)}});var yt=(e=>(e.Text="text",e.Success="success",e.Warning="warning",e.Error="error",e.Loading="loading",e))(yt||{});const gt={key:0,class:"ri-checkbox-circle-fill"},kt={key:1,class:"ri-close-circle-fill"},bt={key:2,class:"ri-error-warning-fill"},vt={key:3,class:"ri-loader-4-line"},ht=[t.createElementVNode("i",{class:"ri-close-line"},null,-1)],Bt=t.defineComponent({name:"MessageList"}),Ct=t.defineComponent({...Bt,props:{id:{type:[String,Number],default:""},type:{type:String,default:yt.Text},content:{type:String,default:""},duration:{type:Number,default:3e3},closeable:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:l}){const n=e,a="bp-message",o=t.ref(0),s=()=>{l("close",n.id)};return t.onMounted((()=>{t.nextTick((()=>{n.duration>0&&n.type!==yt.Loading&&(o.value=window.setTimeout(s,n.duration))}))})),t.onUnmounted((()=>{o&&(window.clearTimeout(o.value),o.value=0)})),(l,n)=>(t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass(a)},["text"!==e.type?(t.openBlock(),t.createElementBlock("span",{key:0,class:t.normalizeClass(`${a}-icon`)},["success"===e.type?(t.openBlock(),t.createElementBlock("i",gt)):t.createCommentVNode("",!0),"error"===e.type?(t.openBlock(),t.createElementBlock("i",kt)):t.createCommentVNode("",!0),"warning"===e.type?(t.openBlock(),t.createElementBlock("i",bt)):t.createCommentVNode("",!0),"loading"===e.type?(t.openBlock(),t.createElementBlock("i",vt)):t.createCommentVNode("",!0)],2)):t.createCommentVNode("",!0),t.createElementVNode("span",{class:t.normalizeClass(`${a}-content`)},t.toDisplayString(e.content),3),e.closeable?(t.openBlock(),t.createElementBlock("span",{key:1,class:t.normalizeClass(`${a}-close`),onClick:s},ht,2)):t.createCommentVNode("",!0)]))}}),xt=t.defineComponent({name:"MessageList"}),St=t.defineComponent({...xt,props:{list:{type:Array,default:()=>[]}},emits:["close"],setup(e,{emit:l}){const n=e=>l("close",e);return(l,a)=>(t.openBlock(),t.createBlock(t.TransitionGroup,{class:"bp-message-list",name:"fademsg",tag:"ul"},{default:t.withCtx((()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.list,(e=>(t.openBlock(),t.createBlock(Ct,{key:`${e.id}`,id:e.id,type:e.type,content:e.content,duration:e.duration,closeable:e.closeable,onClose:n},null,8,["id","type","content","duration","closeable"])))),128))])),_:1}))}});class Vt{constructor(e){n(this,"container"),n(this,"messageList"),n(this,"add",(e=>{var l;const n=e.id??`_bp_message_${Math.random().toString()}`,a=t.reactive({id:n,...e});this.messageList.value.push(a);const o=this.messageList.value.length;return o>1&&(null==(l=this.messageList.value[o-1])?void 0:l.duration)===a.duration&&(a.duration=a.duration??3e3+200*o),{close:()=>this.remove(n)}})),n(this,"remove",(e=>{for(let t=0;t<this.messageList.value.length;t++){const{id:l}=this.messageList.value[t];if(e===l){this.messageList.value.splice(t,1);break}}})),n(this,"clear",(()=>{this.messageList.value=[]})),this.messageList=t.ref([]);const l=document.createElement("div");l.setAttribute("class","bp-mask-message"),this.container=l;const a=t.createVNode(St,{list:this.messageList.value,onClose:this.remove});e&&(a.appContext=e),t.render(a,this.container),document.body.appendChild(this.container)}}St.name=i()+St.name;let $t=null;const Nt=["text","success","warning","error","loading"].reduce(((e,t)=>(e[t]=(e,l)=>{R(e)&&(e={content:e});const n={type:t,...e};return $t||($t=new Vt(l)),$t.add(n)},e)),{}),Et=Object.assign({...Nt,install:e=>{e.component(St.name,St)}}),wt={Button:c,Input:g,Textarea:C,Radio:V,Checkbox:w,Switch:L,Select:X,Pagination:xe,Table:Me,Space:Re,Alert:Xe,Tag:et,Modal:at,Spin:ct,Grid:ft,Message:Et},zt={install:function(e){for(const t of Object.keys(wt))e.use(wt[t])},Button:c,Input:g,Textarea:C,Radio:V,Checkbox:w,Switch:L,Select:X,Pagination:xe,Table:Me,Space:Re,Alert:Xe,Tag:et,Modal:at,Spin:ct,Grid:ft,Message:Et};e.Message=Et,e.default=zt,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=birdpaper-ui.umd.js.map
