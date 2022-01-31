import{g as D,r as t,o as m,e as $,w as n,d as e,p as w,t as v,h as B,z as P,E as b,a as g,l as L,b as h,F as j}from"./vendor.99e38015.js";import{_ as I,b as O}from"./index.bc673eed.js";const A={name:"discover-banner",data(){return{title:{cn:"\u53D1\u73B0",en:"Discover"},subTitle:{cn:"\u8981\u7528\u505A\u65C5\u6E38\u653B\u7565\u7684\u70ED\u5FF1\u8BA1\u5212\u6BCF\u5929\u3002\u2014\u2014\u674E\xB7\u79D1\u514B\u96F7\u5C14\u300A\u4F60\u6253\u7B97\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u300B",en:"Plan every day with the zeal of a travel guide. -- Lee Cockerell, When Are You Going to Start"}}},setup(){const{t:u}=D();return{t:u}}};function z(u,o,d,a,c,l){const p=t("the-title"),i=t("bp-col"),r=t("bp-row");return m(),$(r,{class:"discover-banner",type:"flex",justify:"center"},{default:n(()=>[e(i,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:n(()=>[e(r,null,{default:n(()=>[e(i,{span:"24"},{default:n(()=>[e(p,{bold:"","sub-title":c.subTitle[a.t("Pages.Discover.mode")]},{default:n(()=>[w(v(c.title[a.t("Pages.Discover.mode")]),1)]),_:1},8,["sub-title"])]),_:1})]),_:1})]),_:1})]),_:1})}var E=I(A,[["render",z]]);const S=()=>{const{findArticleList:u}=O,o=B();return{list:o,getList:()=>new Promise((a,c)=>{u().then(l=>{o.value=l.data})})}},V=()=>({getHumanDate:o=>{var d=new Date(o).getTime(),a=1e3*60,c=a*60,l=c*24,p=l*30,i=p*12,r=new Date().getTime(),s=r-d,_="";if(!(s<0)){var x=s/p,f=s/(7*l),y=s/l,k=s/c,T=s/a,C=s/i;return C>=1?""+parseInt(C)+"\u5E74\u524D":(x>=1?_=""+parseInt(x)+"\u6708\u524D":f>=1?_=""+parseInt(f)+"\u5468\u524D":y>=1?_=""+parseInt(y)+"\u5929\u524D":k>=1?_=""+parseInt(k)+"\u5C0F\u65F6\u524D":T>=1?_=""+parseInt(T)+"\u5206\u949F\u524D":_="\u521A\u521A",_)}}}),G={class:"article-list-item-title"},H={class:"article-list-item-content"},N=["href"];function F(u){const{t:o}=D(),{getHumanDate:d}=V(),{list:a,getList:c}=S();return P(()=>c()),(l,p)=>{const i=t("the-title"),r=t("bp-col"),s=t("bp-row");return m(),$(s,{class:"the-article",type:"flex",justify:"center"},{default:n(()=>[e(r,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:n(()=>[e(i,{"sub-title":b(o)("Pages.Discover.articleSubTitle")},{default:n(()=>[w(v(b(o)("Pages.Discover.articleTitle")),1)]),_:1},8,["sub-title"]),e(s,null,{default:n(()=>[e(r,{span:"24"},{default:n(()=>[(m(!0),g(j,null,L(b(a),(_,x)=>(m(),g("div",{key:`type-${x}`,class:"article-list-item"},[h("div",G,[h("p",null,v(_.title),1)]),h("div",H,[h("ul",null,[(m(!0),g(j,null,L(_.list,(f,y)=>(m(),g("li",{key:`art-${y}`},[h("a",{href:f.url,target:"_blank"},[w(v(f.title)+" ",1),h("span",null,v(b(d)(f.publish_at)),1)],8,N)]))),128))])])]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}const q={name:"the-article"},M=Object.assign(q,{setup:F});function R(u){const{t:o}=D(),d=()=>{window.open("https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/resoure/Birdpaper%20Design-LOGO%20%E7%B4%A0%E6%9D%90%2020211210.zip")};return(a,c)=>{const l=t("the-title"),p=t("resource-block"),i=t("bp-col"),r=t("bp-row");return m(),$(r,{class:"the-resource",type:"flex",justify:"center"},{default:n(()=>[e(i,{xl:{span:14},lg:{span:17},md:{span:20},sm:{span:22},xs:{span:22}},{default:n(()=>[e(l,null,{default:n(()=>[w(v(b(o)("Pages.Discover.resourceTitle")),1)]),_:1}),e(p,{title:"\u5C0F\u7EB8\u9E64LOGO\u7D20\u6750\u4E0B\u8F7D20211210",onClick:d})]),_:1})]),_:1})}}const W={name:"the-source"},Y=Object.assign(W,{setup:R}),J={name:"discover",components:{DiscoverBanner:E,TheArticle:M,TheResource:Y}},K={class:"app-discover"};function Q(u,o,d,a,c,l){const p=t("discover-banner"),i=t("the-resource"),r=t("the-article"),s=t("app-footer");return m(),g("div",K,[e(p),e(i),e(r),e(s)])}var Z=I(J,[["render",Q]]);export{Z as default};
