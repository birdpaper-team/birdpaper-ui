import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "shortcut icon",
      href: "https://cos.birdpaper.design/birdpaper-ui/v2/public/favicon.ico",
      type: "image/x-icon",
    },
  ],
  [
    "script",
    {},
    `!function(p){"use strict";if (window.location.href.includes("birdpaper")) {!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}}({id:"3GOZ8bucbhinQNPw",ck:"3GOZ8bucbhinQNPw",autoTrack:true,hashMode:true});`,
  ],
  [
    "script",
    {},
    `!(function(c,i,e,b){
      if (!window.location.href.includes("birdpaper")) { return }
      var h=i.createElement("script");
      var f=i.getElementsByTagName("script")[0];
      h.type="text/javascript";
      h.crossorigin=true;
      h.onload=function(){new c[b]["Monitor"]().init({id:"3GXi3j1OWBZtT06D",sendSuspicious:true,sendSpaPv:true});};
      f.parentNode.insertBefore(h,f);h.src=e;})(window,document,"https://sdk.51.la/perf/js-sdk-perf.min.js","LingQue");`,
  ],
];
