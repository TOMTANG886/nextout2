(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9517:function(e,n,t){Promise.resolve().then(t.bind(t,1970))},2554:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var c=t(7437),a=t(2265),r=t(6691),s=t.n(r),l=t(1396),i=t.n(l),o=t(4033),d=t(6642),h=t(6589),u={src:"/_next/static/media/navigationbar.ec2f1dc4.svg",height:45,width:50,blurWidth:0,blurHeight:0},f=t(9688);function m(){let e=(0,a.useRef)(),{data:n,error:t}=(0,d.Ao)(),r=(null==n?void 0:n.data)||[],l=(0,o.useSearchParams)(),m=l.get("channelId");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("dialog",{ref:e,className:"fixed top-0 w-[750px] h-[100vh] bg-themecolor text-gray-200 z-10",children:[(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsxs)("button",{onClick:n=>{n.preventDefault(),e.current.close()},children:["  ",(0,c.jsx)(s(),{src:h.Z,className:"",alt:""})]}),(0,c.jsx)("h1",{className:"absolute left-0 right-0 w-[100px]  mx-auto",children:"推荐类别"})]}),(0,c.jsxs)("div",{className:"m-16",children:[(0,c.jsx)("h1",{className:"my-4 font-bold",children:"热门频道"}),(0,c.jsx)("ul",{className:"grid grid-cols-4 gap-4",children:f.f.map((n,t)=>(0,c.jsx)("li",{className:"border-2 rounded border-[#FAD689] w-[120px] h-[53px] leading-[53px] text-center ".concat(m==n.channelId?"bg-[#FAD689]  text-[#19202A]":""),children:(0,c.jsx)(i(),{href:"?channelId=".concat(n.channelId),onClick:()=>e.current.close(),children:n.name})},n.channelId))})]}),(0,c.jsxs)("div",{className:"m-16",children:[(0,c.jsx)("h1",{className:"my-4 font-bold",children:"热门标签"}),(0,c.jsx)("ul",{className:"grid grid-cols-4 gap-4 ",children:r.map((e,n)=>(0,c.jsx)("li",{children:(0,c.jsxs)(i(),{href:"/search?tag=".concat(e),children:[" ",(0,c.jsx)("span",{className:"text-[#FAD689]",children:"#"})," ",e]})},e))})]})]}),(0,c.jsx)("button",{onClick:n=>{n.preventDefault(),e.current.show()},children:(0,c.jsx)(s(),{src:u,alt:"",width:50,height:50})})]})}var x={src:"/_next/static/media/logo.a3071467.svg",height:46,width:46,blurWidth:0,blurHeight:0},p={src:"/_next/static/media/icon_search.3c0d8195.svg",height:22,width:22,blurWidth:0,blurHeight:0};function g(){let e=(0,a.useRef)(),n=(0,o.useRouter)(),t=(0,o.useSearchParams)().get("channelId");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flex justify-between m-3",children:[(0,c.jsx)(i(),{href:"/",children:(0,c.jsx)(s(),{src:x,alt:"",width:50,height:50})}),(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsx)("input",{ref:e,className:"p-2 rounded-full bg-slate-300 text-white placeholder-white",placeholder:"搜寻关键词",onKeyUp:t=>{t.preventDefault(),"Enter"===t.key&&(n.push("/search?title=".concat(e.current.value)),e.current.value="")}}),(0,c.jsx)(s(),{src:p,className:"cursor-pointer absolute top-0 right-0 m-2",alt:"",onClick:t=>{t.preventDefault(),n.push("/search?title=".concat(e.current.value)),e.current.value=""}})]})]}),(0,c.jsx)("div",{className:"",children:(0,c.jsxs)("div",{className:"flex flex-row",children:[(0,c.jsx)("div",{className:"w-11/12",children:(0,c.jsx)("ul",{className:"flex justify-around flex-nowrap flex-row  overflow-hidden break-normal break-keep ",children:f.f.map((e,n)=>(0,c.jsx)("li",{className:"font-bold text-[#fff] ".concat(t==e.channelId?"underline":""," underline-offset-6 decoration-[#FAD689] "),children:(0,c.jsx)(i(),{href:"?channelId=".concat(e.channelId),children:e.name})},e.channelId))})}),(0,c.jsx)("div",{className:"basis-1/12",children:(0,c.jsx)(m,{})})]})})]})}},6642:function(e,n,t){"use strict";t.d(n,{Ao:function(){return u},EM:function(){return h},ZQ:function(){return f},_u:function(){return m}});var c=t(2333),a=t(9357);let{TOKEN:r,API_URL:s,API_PLAYER_DOMAIN:l,API_PLAYER_DOMAIN_m3u8:i,IMAGE_DOMAIN:o}=a,d=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())},h=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,{data:a,error:r}=(0,c.ZP)("".concat(s,"/api/p1/channel/").concat(e,"?page=").concat(n,"&size=").concat(t),d,{revalidateOnFocus:!1,dedupingInterval:36e5});return{data:a,error:r}},u=()=>{let{data:e,error:n}=(0,c.ZP)("".concat(s,"/api/p1/hot_tags"),d,{revalidateOnFocus:!1});return{data:e,error:n}},f=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,{data:a,error:r}=(0,c.ZP)("".concat(s,"/api/p1/title/").concat(e,"?page=").concat(n,"&size=").concat(t),d,{revalidateOnFocus:!1});return{data:a,error:r}},m=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,{data:a,error:r}=(0,c.ZP)("".concat(s,"/api/p1/home/").concat(e,"?page=").concat(n,"&size=").concat(t),d,{revalidateOnFocus:!1,dedupingInterval:36e5});return{data:a,error:r}}},1970:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d},metadata:function(){return o}});var c=t(7437),a=t(2941),r=t.n(a);t(3177);var s=t(4033),l=t(2554);function i(e){let{children:n}=e,t=(0,s.usePathname)();return"/list/"===t||"/video/"===t||"/search/"===t?(0,c.jsx)(c.Fragment,{children:n}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{}),n]})}let o={title:"Create Next App",description:"Generated by create next app"};function d(e){let{children:n}=e;return(0,c.jsx)("html",{lang:"en",children:(0,c.jsx)("body",{className:r().className,children:(0,c.jsx)("div",{className:"rootlayout w-[750px] bg-themecolor min-h-screen",children:(0,c.jsx)(i,{children:n})})})})}},9688:function(e,n,t){"use strict";t.d(n,{f:function(){return c}});let c=[{channelId:1,name:"无码"},{channelId:2,name:"欧美"},{channelId:3,name:"有码"},{channelId:5,name:"自拍"},{channelId:7,name:"中文"},{channelId:10,name:"素人"},{channelId:13,name:"免费"},{channelId:14,name:"独家"},{channelId:16,name:"动漫"}]},3177:function(){},6589:function(e,n){"use strict";n.Z={src:"/_next/static/media/arrowleft.0e2ecf8a.svg",height:65,width:65,blurWidth:0,blurHeight:0}},2941:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},9357:function(e){"use strict";e.exports=JSON.parse('{"API_URL":"https://api.ms.vscp168.com","TOKEN":"c1b6825c864aaf3e459f24c05842c6b6","IMAGE_DOMAIN":"https://dcxzp.com","API_PLAYER_DOMAIN":"https://api.vp.vscp168.com","API_PLAYER_DOMAIN_m3u8":"https://dou3.kammy.cn"}')}},function(e){e.O(0,[352,333,396,971,596,744],function(){return e(e.s=9517)}),_N_E=e.O()}]);