(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{5893:function(){},3368:function(e,s,n){Promise.resolve().then(n.bind(n,3518))},4285:function(e,s,n){"use strict";n.d(s,{Z:function(){return d}});var t=n(7437),c=n(6691),a=n.n(c),r=n(1396),i=n.n(r),l=n(9357);function d(e){let{videodata:s="",index:n=-1,slider:c=!1,w:r=750,h:d=171}=e;return(0,t.jsxs)(i(),{href:"".concat("/video?cid="+s.cid),className:" relative  h-[300px]",children:[(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(a(),{className:"rounded-lg ",src:"".concat(l.IMAGE_DOMAIN,"/").concat(s.picUrl),width:r,height:d,alt:""})}),(0,t.jsx)("div",{className:"h-14 text-xl overflow-hidden",children:s.name})]},s.picUrl)}},3518:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return A}});var t=n(7437),c=n(2265),a=n(4033),r=n(1396),i=n.n(r),l=n(2333);n(6691);var d=n(4267);n(1921);var o=e=>{let s=c.useRef(null),n=c.useRef(null),{options:a,onReady:r}=e;return c.useEffect(()=>{if(n.current){let e=n.current;e.autoplay(a.autoplay),e.src(a.sources)}else{let e=document.createElement("video-js");e.classList.add("vjs-big-play-centered"),s.current.appendChild(e);let t=n.current=(0,d.Z)(e,a,()=>{d.Z.log("player is ready"),r&&r(t)})}},[a,s]),c.useEffect(()=>{let e=n.current;return()=>{e&&!e.isDisposed()&&(e.dispose(),n.current=null)}},[n]),(0,t.jsx)("div",{"data-vjs-player":!0,children:(0,t.jsx)("div",{ref:s})})};function u(e){let{streamurl:s,imgurl:n}=e,a=(0,c.useRef)(null);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o,{options:{autoplay:!1,controls:!0,responsive:!0,fluid:!0,sources:[{src:s}],poster:n||""},onReady:e=>{a.current=e,e.on("waiting",()=>{}),e.on("dispose",()=>{})}})})}n(4922),n(8278),n(7021);var h=n(4327),v=n(4285),p=n(9357);function f(e){let{cid:s}=e,[n,a]=(0,c.useState)([]),[r,i]=(0,c.useState)(0),[l,d]=(0,h.YD)();async function o(){var e;let n=r+1,t=await fetch("".concat(p.API_URL,"/api/p1/video/").concat(s,"/related?page=").concat(n,"&size=8"),{}).then(e=>e.json());(null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.length)&&(i(n),a(e=>[...(null==e?void 0:e.length)?e:[],...t.data]))}return(0,c.useEffect)(()=>{d&&o()},[d]),(0,t.jsxs)("div",{className:"my-5",children:[(0,t.jsx)("div",{className:"grid grid-cols-2 auto-rows-auto gap-4",children:null==n?void 0:n.map((e,s)=>(0,t.jsx)(v.Z,{videodata:e},e.cid))}),(0,t.jsx)("div",{ref:l,children:"---滑到最底啦---"})]})}let{TOKEN:x,API_URL:m,API_PLAYER_DOMAIN:j,API_PLAYER_DOMAIN_m3u8:g,IMAGE_DOMAIN:N}=p,_=function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];return fetch(...s).then(e=>e.json())};function A(){var e;let s=(0,a.useSearchParams)(),n=s.get("cid"),c="".concat(m,"/api/p1/video/").concat(n),{data:r,error:d}=(0,l.ZP)(c,_,{revalidateOnFocus:!1}),{name:o,tags:h,enabledDate:v,actors:p,channel:A,picUrl:y}=(null==r?void 0:r.data)||"",E="".concat(j,"/api/video/single7?sid=CW90RDVW9R&cid=").concat(n,"&token=").concat(x,"&dns=dou3.kammy.cn&db=true&cache=false"),{data:I,error:O}=(0,l.ZP)(E,_,{revalidateOnFocus:!1});return I?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"",children:[I&&(0,t.jsx)(u,{streamurl:"".concat(g).concat(null==I?void 0:null===(e=I.data)||void 0===e?void 0:e.v_url),imgurl:"".concat(N,"/").concat(y)}),(0,t.jsxs)("div",{className:"px-4 text-base gap-5",children:[(0,t.jsxs)("h1",{className:"text-2xl",children:[n,o]}),(0,t.jsx)("div",{children:h&&h.map(e=>(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"text-[#FAD689]",children:"#"}),e]},e))}),(0,t.jsxs)("div",{children:["上市時間：",v]}),(0,t.jsxs)("div",{children:["演员：",p&&p.map(e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-[#FAD689]",children:"#"}),e]}))]}),(0,t.jsxs)("div",{children:["频道：",(0,t.jsx)(i(),{href:"/list?channelId=".concat(A),children:A})]})]}),(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsx)("h1",{children:"相关推荐"}),(0,t.jsx)(f,{cid:n})]})]})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("iframe",{className:"aspect-[16/9] w-full  animate-pulse overflow-hidden  bg-gray-300"})})}},9357:function(e){"use strict";e.exports=JSON.parse('{"API_URL":"https://api.ms.vscp168.com","TOKEN":"c1b6825c864aaf3e459f24c05842c6b6","IMAGE_DOMAIN":"https://dcxzp.com","API_PLAYER_DOMAIN":"https://api.vp.vscp168.com","API_PLAYER_DOMAIN_m3u8":"https://dou3.kammy.cn"}')}},function(e){e.O(0,[532,352,333,396,15,677,971,596,744],function(){return e(e.s=3368)}),_N_E=e.O()}]);