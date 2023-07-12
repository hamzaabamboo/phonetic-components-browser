(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931,396],{9485:function(e,n,t){Promise.resolve().then(t.bind(t,2404)),Promise.resolve().then(t.bind(t,6104)),Promise.resolve().then(t.bind(t,1982)),Promise.resolve().then(t.bind(t,5196)),Promise.resolve().then(t.bind(t,3255))},2404:function(e,n,t){"use strict";t.r(n),t.d(n,{Layout:function(){return a}});var i=t(1264),r=t(8378),l=t(8601);let a=e=>{let{children:n}=e;return(0,i.jsx)(r.W,{maxWidth:["full",null,"80vw"],mx:"auto",children:(0,i.jsx)(l.K,{children:n})})}},6104:function(e,n,t){"use strict";t.r(n),t.d(n,{Navigation:function(){return d}});var i=t(1264),r=t(5207),l=t(3427),a=t(4340),s=t(8967),o=t(1915),c=t(5670),u=t(7094);let d=()=>{let e=(0,u.usePathname)(),n="all"===e.split("/").slice(-1)[0],t=Number(e.split("/").slice(n?-2:-1)[0]);return(0,i.jsxs)(s.U,{w:"full",backgroundColor:"white",position:"sticky",top:0,py:2,zIndex:100,children:[(0,i.jsx)(o.r,{href:(0,l.D)(n?"/all":"/"),shadow:"md",textAlign:"center",py:"2",w:"full",fontSize:"xl",children:(0,i.jsx)(c.xu,{children:(0,i.jsx)(a.U,{"aria-label":"all"})})}),r.k.split("").map((e,r)=>(0,i.jsx)(o.r,{href:(0,l.D)("/browse/".concat(r).concat(n?"/all":"")),shadow:"md",bgColor:t===r?"gray.100":"white",textAlign:"center",py:"2",w:"full",fontSize:"xl",children:(0,i.jsx)(c.xu,{children:e})},e))]})}},1982:function(e,n,t){"use strict";t.r(n),t.d(n,{SearchBar:function(){return p}});var i=t(1264),r=t(5207),l=t(3427),a=t(5670),s=t(7455),o=t(8967),c=t(1915),u=t(1885),d=t.n(u),h=t(6141),f=t(9592),x=t(4294);let p=e=>{let{data:n}=e,[t,u]=(0,h.useState)(""),[p,j]=(0,h.useState)(""),b=(0,h.useCallback)(e=>d()(j,500)(e),[j]),m=(0,h.useMemo)(()=>p?n.flatMap(e=>(0,f.kd)(p)?e.pronunciation.includes((0,f.nw)(p))?e:{...e,kanjis:e.kanjis.filter(e=>e.reading&&(0,f.nw)(p)===(0,f.nw)(e.reading))}:{...e,kanjis:e.kanjis.filter(e=>p.split("").filter(n=>e.kanji.includes(n)).length>0)}).filter(e=>e.kanjis.length>0):[],[n,p]);return(0,h.useEffect)(()=>{b(t)},[t]),(0,i.jsxs)(a.xu,{position:"sticky",top:"62px",bgColor:"white",zIndex:"200",children:[(0,i.jsx)(s.I,{w:"full",value:t,fontSize:"xl",mb:2,onChange:e=>u(e.target.value)}),m.length>0&&(0,i.jsx)(a.xu,{position:"relative",children:(0,i.jsx)(o.U,{position:"absolute",alignItems:"flex-start",width:"full",p:2,backgroundColor:"white",shadow:"md",spacing:6,mb:6,flexWrap:"wrap",maxHeight:256,overflow:"auto",children:m.filter(e=>{var n;return null===(n=e.part[0])||void 0===n?void 0:n.kanji}).slice(0,30).map((e,n)=>(0,i.jsx)(c.r,{boxSize:16,p:2,display:"flex",justifyContent:"center",alignItems:"center",href:(0,l.D)("/browse/".concat(r.c.findIndex(n=>{var t;return n.includes(null===(t=e.pronunciation)||void 0===t?void 0:t[0])}),"#").concat(e.part[0].kanji)),children:(0,i.jsx)(x.I,{data:e.part[0]})},e.part[0].kanji))})})]})}},3255:function(e,n,t){"use strict";t.r(n),t.d(n,{HomeIntro:function(){return c}});var i=t(1264),r=t(3427),l=t(8601),a=t(1094),s=t(1915),o=t(8121);let c=()=>(0,i.jsxs)(l.K,{children:[(0,i.jsx)(a.X,{children:(0,i.jsx)(s.r,{href:(0,r.D)("/"),children:"Radical-Sound Relationship for Kanji"})}),(0,i.jsxs)(o.x,{children:["Collection of radical and kanji that has relationship with certain onyomi sounds, data extracted from ",(0,i.jsx)(s.r,{href:"https://blog.goo.ne.jp/ishiseiji/e/3180bacae127e35db289189ea5b95a4a",children:"Here"})]}),(0,i.jsx)(o.x,{children:"Some glyph may not be properly displayed. Bugs are expected"})]})}},function(e){e.O(0,[835,382,389,196,774,597,744],function(){return e(e.s=9485)}),_N_E=e.O()}]);