window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Xe=Object.create;var ae=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var _e=Object.getPrototypeOf,Fe=Object.prototype.hasOwnProperty;var He=(e,r)=>{for(var o in r)ae(e,o,{get:r[o],enumerable:!0})},he=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Oe(r))!Fe.call(e,s)&&s!==o&&ae(e,s,{get:()=>r[s],enumerable:!(n=Be(r,s))||n.enumerable});return e};var R=(e,r,o)=>(o=e!=null?Xe(_e(e)):{},he(r||!e||!e.__esModule?ae(o,"default",{value:e,enumerable:!0}):o,e)),We=e=>he(ae({},"__esModule",{value:!0}),e);var mr={};He(mr,{apply:()=>cr,inject:()=>pr});module.exports=We(mr);var Ge=R(require("react"),1);var t=R(require("react"),1);var p=R(require("react"),1);var X={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",video:"\u89C6\u9891",audio:"\u97F3\u9891",group:"\u7EC4"},ve=[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}],de=["1:1","4:3","3:4","16:9","9:16","3:2","2:3"],B=[{id:"gpt-image-1",label:"gpt-image-1",channel:"OpenAI"},{id:"gemini-3-pro-image",label:"gemini-3-pro-image",channel:"Gemini"},{id:"seedream-4",label:"seedream-4",channel:"\u706B\u5C71"},{id:"flux-2-pro",label:"flux-2-pro",channel:"BFL"}],pe=[{id:"p1",name:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591"},{id:"p2",name:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F"},{id:"p3",name:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F"},{id:"p4",name:"\u9ED1\u767D\u80F6\u7247",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E"},{id:"p5",name:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F"},{id:"p6",name:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7"}],ge=0;function W(e="n"){return ge+=1,`${e}_${Date.now().toString(36)}${ge.toString(36)}`}function Ke(e){switch(e){case"image":return{w:260,h:300};case"video":return{w:300,h:260};case"audio":return{w:260,h:150};case"text":return{w:240,h:180};case"config":return{w:260,h:230};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function H(e,r,o={}){let n=Ke(e),s={id:W(e[0]),type:e,x:Math.round(r.x-n.w/2),y:Math.round(r.y-n.h/2),w:n.w,h:n.h,name:"",status:"idle",z:1,...o};return e==="text"&&(s.text=o.text??""),e==="config"&&(s.model=o.model??B[0].id,s.ratio=o.ratio??"1:1",s.count=o.count??1,s.systemPrompt=o.systemPrompt??""),(e==="image"||e==="video")&&(s.prompt=o.prompt??"",s.ratio=o.ratio??"1:1",s.locked=o.locked??!0),e==="audio"&&(s.prompt=o.prompt??""),s}var be=()=>({canvases:[{id:"cv1",name:"\u672A\u547D\u540D\u753B\u5E03",updatedAt:Date.now()}],activeCanvas:"cv1",nodes:[],edges:[],selection:[],camera:{x:0,y:0,s:1},grid:"dots",theme:"dark",minimap:!0,panel:"inspector",undo:[],redo:[]});function xe(){let e=H("text",{x:300,y:300},{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),r=H("config",{x:620,y:300},{model:"gpt-image-1",ratio:"3:4",count:1}),o=H("image",{x:940,y:220},{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),n=H("image",{x:1240,y:220},{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),s=H("image",{x:940,y:540},{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),b=[H("group",{x:880,y:120},{w:620,h:720,name:"\u9713\u8679\u8857\u89D2"}),e,r,o,n,s];for(let g of b)g.type!=="group"&&(g.z=2);let d=[{id:W("e"),from:e.id,to:r.id},{id:W("e"),from:r.id,to:o.id},{id:W("e"),from:r.id,to:n.id},{id:W("e"),from:r.id,to:s.id}];return{nodes:b,edges:d}}function te(e,r,o,n){if(o===n)return!1;let s=e.find(b=>b.id===o),h=e.find(b=>b.id===n);return!(!s||!h||s.type==="config"&&h.type==="config"||s.type==="group"||h.type==="group"||r.some(b=>b.from===o&&b.to===n))}function fe(e,r){let o=e.filter(f=>r.includes(f.id)&&f.type!=="group");if(!o.length)return null;let n=48,s=Math.min(...o.map(f=>f.x))-n,h=Math.min(...o.map(f=>f.y))-n-34,b=Math.max(...o.map(f=>f.x+f.w))+n,d=Math.max(...o.map(f=>f.y+f.h))+n,g=H("group",{x:(s+b)/2,y:(h+d)/2},{w:Math.round(b-s),h:Math.round(d-h),name:"\u65B0\u5206\u7EC4",childIds:o.map(f=>f.id)});return g.x=Math.round(s),g.y=Math.round(h),g}var ye=.1,we=3,qe=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function ke(){let e=p.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),r=p.default.useCallback(h=>{if(!h)return;let b=e.current;h.style.transform=`translate3d(${b.x}px, ${b.y}px, 0) scale(${b.s})`},[]),o=p.default.useCallback((h,b)=>{let d=e.current;d.raf=0;let g=.24,f=d.tx-d.x,w=d.ty-d.y,S=d.ts-d.s;if(Math.abs(f)<.2&&Math.abs(w)<.2&&Math.abs(S)<8e-4){d.x=d.tx,d.y=d.ty,d.s=d.ts,r(h),b?.();return}d.x+=f*g,d.y+=w*g,d.s+=S*g,r(h),b?.(),d.raf=requestAnimationFrame(()=>o(h,b))},[r]),n=p.default.useCallback((h,b,d,g,f)=>{let w=e.current;if(w.tx=b,w.ty=d,w.ts=Math.min(we,Math.max(ye,g)),qe()){w.x=w.tx,w.y=w.ty,w.s=w.ts,w.raf&&cancelAnimationFrame(w.raf),w.raf=0,r(h),f?.();return}w.raf||(w.raf=requestAnimationFrame(()=>o(h,f)))},[r,o]),s=p.default.useCallback(()=>{let h=e.current;h.raf&&cancelAnimationFrame(h.raf),h.raf=0,h.tx=h.x,h.ty=h.y,h.ts=h.s},[]);return p.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:r,moveTo:n,stop:s}}function Ue(e,r,o,n){return{x:(o-r.left-e.x)/e.s,y:(n-r.top-e.y)/e.s}}function ce(e,r){if(!e||!r)return"";let o=e.x+e.w,n=e.y+e.h/2,s=r.x,h=r.y+r.h/2,b=Math.max(40,Math.abs(s-o)*.45);return`M ${o} ${n} C ${o+b} ${n}, ${s-b} ${h}, ${s} ${h}`}function Ve({node:e,selected:r,running:o,children:n,onPointerDown:s,onResize:h,onContext:b}){return p.default.createElement("div",{className:`node${r?" is-selected":""}${o?" is-running":""}${e.type==="group"?" is-group":""}`,"data-id":e.id,style:{left:e.x,top:e.y,width:e.w,height:e.h,zIndex:e.type==="group"?1:e.z||2},onPointerDown:d=>s(d,e),onContextMenu:d=>{d.preventDefault(),b?.(e)}},n,r?p.default.createElement("span",{className:"node-handle",onPointerDown:d=>{d.stopPropagation(),h(d,e)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)}function Ze({node:e}){let r=p.default.useRef(null);return p.default.useEffect(()=>{let o=r.current;if(!o)return;let n=o.getContext("2d"),s=o.width=480,h=o.height=480,b=n.createLinearGradient(0,0,s,h);b.addColorStop(0,"#1a1512"),b.addColorStop(1,"#0d0b0a"),n.fillStyle=b,n.fillRect(0,0,s,h);let d=0,g=`${e.id}${e.prompt||""}`;for(let S=0;S<g.length;S++)d=(d*31+g.charCodeAt(S))%2147483647;let f=()=>(d=d*16807%2147483647)/2147483647,w=n.createRadialGradient(s*(.3+f()*.4),h*(.4+f()*.3),20,s*.5,h*.5,s*.75);w.addColorStop(0,"oklch(70% 0.2 45 / 0.55)"),w.addColorStop(.55,"oklch(40% 0.16 27 / 0.25)"),w.addColorStop(1,"transparent"),n.fillStyle=w,n.fillRect(0,0,s,h),n.strokeStyle="oklch(94% 0.02 80 / 0.22)",n.lineWidth=2;for(let S=0;S<5;S++){let T=h*(.2+f()*.7);n.beginPath(),n.moveTo(0,T),n.lineTo(s,T+(f()-.5)*90),n.stroke()}n.strokeStyle="oklch(70% 0.2 45 / 0.5)",n.lineWidth=3;for(let S=0;S<4;S++){let T=s*(.15+f()*.7);n.beginPath(),n.moveTo(T,h*.15),n.lineTo(T+(f()-.5)*40,h*(.5+f()*.4)),n.stroke()}},[e.id,e.prompt]),p.default.createElement("canvas",{ref:r,className:"node-canvas",width:"480",height:"480","aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function Je({node:e}){return p.default.createElement("div",{className:"node-media"},e.src?p.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):p.default.createElement(Ze,{node:e}))}function Qe({node:e,onEditText:r,onGenerate:o}){switch(e.type){case"image":return p.default.createElement(Je,{node:e});case"video":return p.default.createElement("div",{className:"node-media node-media--video"},e.src?p.default.createElement("video",{src:e.src,controls:!0,playsInline:!0,muted:!0,preload:"metadata"}):p.default.createElement("div",{className:"node-void"},p.default.createElement("span",{className:"node-badge"},"\u89C6\u9891"),e.status==="running"?"\u751F\u6210\u4E2D":"\u7A7A\u89C6\u9891\u8282\u70B9"));case"audio":return p.default.createElement("div",{className:"node-audio"},p.default.createElement("div",{className:"node-wave","aria-hidden":"true"},Array.from({length:28},(n,s)=>p.default.createElement("span",{key:s,style:{height:`${18+s*37%62}%`}}))),p.default.createElement("p",{className:"node-audio-label"},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return p.default.createElement("div",{className:"node-text"},e.text?p.default.createElement("p",{style:{fontSize:e.fontSize||14}},e.text):p.default.createElement("p",{className:"node-hint"},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":return p.default.createElement("div",{className:"node-config"},p.default.createElement("p",{className:"node-config-row"},p.default.createElement("span",null,"\u6A21\u578B"),p.default.createElement("b",null,B.find(n=>n.id===e.model)?.label||e.model)),p.default.createElement("p",{className:"node-config-row"},p.default.createElement("span",null,"\u6BD4\u4F8B"),p.default.createElement("b",null,e.ratio)),p.default.createElement("p",{className:"node-config-row"},p.default.createElement("span",null,"\u5F20\u6570"),p.default.createElement("b",null,e.count)),p.default.createElement("div",{className:"node-config-order"},p.default.createElement("span",null,"\u8F93\u5165\u987A\u5E8F"),p.default.createElement("ol",null,e.orders?.length?e.orders.map((n,s)=>p.default.createElement("li",{key:s},n)):p.default.createElement("li",{className:"is-empty"},"\u672A\u8FDE\u63A5\u8F93\u5165"))));case"group":return p.default.createElement("div",{className:"node-group-head"},p.default.createElement("span",{className:"node-group-name"},e.name||"\u5206\u7EC4"),e.childIds?.length?p.default.createElement("span",{className:"node-group-count"},e.childIds.length," \u4E2A\u8282\u70B9"):null);default:return null}}function Re({nodes:e,cam:r,size:o,onJump:n}){if(!e.length)return null;let b=80,d=Math.min(...e.map(y=>y.x))-b,g=Math.min(...e.map(y=>y.y))-b,f=Math.max(...e.map(y=>y.x+y.w))+b,w=Math.max(...e.map(y=>y.y+y.h))+b,S=Math.max(1,f-d),T=Math.max(1,w-g),P=Math.min(168/S,112/T),Y=(168-S*P)/2,E=(112-T*P)/2,L=y=>({x:(y.x-d)*P+Y,y:(y.y-g)*P+E,w:y.w*P,h:y.h*P}),$={x:(-r.x/r.s-d)*P+Y,y:(-r.y/r.s-g)*P+E,w:o.w/r.s*P,h:o.h/r.s*P};return p.default.createElement("svg",{className:"minimap",viewBox:"0 0 168 112",width:168,height:112,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u53EF\u8DF3\u8F6C",onClick:y=>{let C=y.currentTarget.getBoundingClientRect(),O=(y.clientX-C.left)/C.width*168,V=(y.clientY-C.top)/C.height*112;n({x:d+(O-Y)/P,y:g+(V-E)/P})}},e.filter(y=>y.type==="group").map(y=>{let C=L(y);return p.default.createElement("rect",{key:y.id,x:C.x,y:C.y,width:C.w,height:C.h,rx:3,className:"mini-group"})}),e.filter(y=>y.type!=="group").map(y=>{let C=L(y);return p.default.createElement("rect",{key:y.id,x:C.x,y:C.y,width:Math.max(3,C.w),height:Math.max(3,C.h),rx:2,className:`mini-node mini-${y.type}`})}),p.default.createElement("rect",{x:$.x,y:$.y,width:Math.max(6,$.w),height:Math.max(6,$.h),rx:2,className:"mini-view"}))}function Ne({state:e,dispatch:r,camApi:o,onOpenNode:n,tool:s,setTool:h,showMinimap:b,onCanvasSize:d}){let g=p.default.useRef(null),f=p.default.useRef(null),{cam:w,moveTo:S,stop:T}=o,[P,Y]=p.default.useState({w:1200,h:800}),E=p.default.useRef(null),L=p.default.useRef(null),$=p.default.useRef(null),y=p.default.useRef(null),C=p.default.useRef(null),[O,V]=p.default.useState(null),[U,J]=p.default.useState(null),[j,D]=p.default.useState(!1),_=p.default.useCallback(()=>o.apply(g.current),[o]);p.default.useEffect(()=>{let i=f.current;if(!i)return;let a=new ResizeObserver(()=>{let x=i.getBoundingClientRect();Y({w:x.width,h:x.height}),d?.({w:x.width,h:x.height})});a.observe(i);let c=i.getBoundingClientRect();return Y({w:c.width,h:c.height}),d?.({w:c.width,h:c.height}),()=>a.disconnect()},[d]),p.default.useEffect(()=>{_()}),p.default.useEffect(()=>{let i=c=>{c.code==="Space"&&!/input|textarea/i.test(c.target.tagName)&&(D(!0),c.preventDefault())},a=c=>{c.code==="Space"&&D(!1)};return window.addEventListener("keydown",i),window.addEventListener("keyup",a),()=>{window.removeEventListener("keydown",i),window.removeEventListener("keyup",a)}},[]);let G=()=>f.current.getBoundingClientRect(),I=(i,a)=>Ue(w.current,G(),i,a),Q=i=>{if(i.ctrlKey||i.metaKey||!i.shiftKey){i.preventDefault();let a=G(),c=i.clientX-a.left,x=i.clientY-a.top,N=w.current,F=(c-N.tx)/N.ts,Z=(x-N.ty)/N.ts,se=Math.exp(-i.deltaY*.0018),le=Math.min(we,Math.max(ye,N.ts*se));S(g.current,c-F*le,x-Z*le,le,_)}},ie=i=>{if(i.button===1||j||s==="pan"){i.preventDefault(),L.current={x:i.clientX,y:i.clientY,cx:w.current.tx,cy:w.current.ty},f.current.classList.add("is-panning"),f.current.setPointerCapture(i.pointerId);return}if(i.button!==0)return;let a=I(i.clientX,i.clientY);y.current={x0:a.x,y0:a.y,additive:i.shiftKey},J({x:a.x,y:a.y,w:0,h:0}),f.current.setPointerCapture(i.pointerId)},ee=i=>{if(L.current){let a=w.current;S(g.current,L.current.cx+(i.clientX-L.current.x),L.current.cy+(i.clientY-L.current.y),a.ts,_);return}if(E.current){let a=I(i.clientX,i.clientY),c=a.x-E.current.p0.x,x=a.y-E.current.p0.y;r({type:"move-selection",dx:c,dy:x,ids:E.current.ids}),E.current.p0=a;return}if($.current){let a=I(i.clientX,i.clientY),c=$.current,x=Math.max(120,Math.round(a.x-c.x)),N=c.locked?Math.round(x/c.ratio):Math.max(90,Math.round(a.y-c.y));r({type:"resize-node",id:c.id,w:x,h:N});return}if(y.current){let a=I(i.clientX,i.clientY),c=y.current;J({x:Math.min(c.x0,a.x),y:Math.min(c.y0,a.y),w:Math.abs(a.x-c.x0),h:Math.abs(a.y-c.y0)});return}if(C.current){let a=I(i.clientX,i.clientY);V({from:C.current,to:a})}},re=i=>{if(L.current){L.current=null,f.current.classList.remove("is-panning");return}if(E.current){E.current=null,r({type:"commit"});return}if($.current){$.current=null,r({type:"commit"});return}if(y.current){let a=y.current;y.current=null;let c=U;if(J(null),c&&(c.w>6||c.h>6)){let x=e.nodes.filter(N=>!(N.x>c.x+c.w||N.x+N.w<c.x||N.y>c.y+c.h||N.y+N.h<c.y));r({type:"select",ids:x.map(N=>N.id),additive:a.additive})}else a.additive||r({type:"select",ids:[]});return}if(C.current){let a=I(i.clientX,i.clientY),c=e.nodes.find(x=>a.x>=x.x&&a.x<=x.x+x.w&&a.y>=x.y&&a.y<=x.y+x.h);c&&te(e.nodes,e.edges,C.current,c.id)&&r({type:"connect",from:C.current,to:c.id}),C.current=null,V(null)}},oe=(i,a)=>{if(i.stopPropagation(),i.button===1||j||s==="pan"||i.button===2)return;let c=i.shiftKey||i.metaKey||i.ctrlKey,x=e.selection.includes(a.id),N=c?x?e.selection.filter(F=>F!==a.id):[...e.selection,a.id]:x?e.selection:[a.id];if(r({type:"select",ids:c&&x||c?N:[a.id]}),!c){let F=I(i.clientX,i.clientY),Z=a.type==="group"&&a.childIds?.length?[a.id,...a.childIds]:e.selection.includes(a.id)&&e.selection.length>1?e.selection:[a.id];E.current={ids:Z,p0:F},f.current.setPointerCapture(i.pointerId)}},u=(i,a)=>{let c=a.ratio&&a.ratio.includes(":")?Number(a.ratio.split(":")[1])/Number(a.ratio.split(":")[0]):a.h/a.w;$.current={id:a.id,x:a.x,y:a.y,locked:a.locked!==!1,ratio:c},f.current.setPointerCapture(i.pointerId)},v=(i,a)=>{if(i.stopPropagation(),a.type==="text")return n(a,"text");if(a.type==="image"||a.type==="video"||a.type==="audio")return n(a,"detail");if(a.type==="config")return n(a,"config");n(a,"detail")},M=(i,a)=>{i.stopPropagation(),C.current=a.id;let c=I(i.clientX,i.clientY);V({from:a.id,to:c}),f.current.setPointerCapture(i.pointerId)},k=p.default.useMemo(()=>Object.fromEntries(e.nodes.map(i=>[i.id,i])),[e.nodes]),z=`stage-grid stage-grid--${e.grid}`;return p.default.createElement("div",{className:`stage ${z}${j?" is-space":""}${s==="pan"?" is-pan":""}`,ref:f,onPointerDown:ie,onPointerMove:ee,onPointerUp:re,onPointerCancel:re,onWheel:Q,onContextMenu:i=>i.preventDefault(),style:{"--grid-size":`${28*w.current.s}px`}},p.default.createElement("div",{className:"world",ref:g},p.default.createElement("svg",{className:"edges",width:"1",height:"1","aria-hidden":"true"},p.default.createElement("defs",null,p.default.createElement("marker",{id:"edge-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},p.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"edge-arrow-head"}))),e.edges.map(i=>{let a=k[i.from],c=k[i.to];return!a||!c?null:p.default.createElement("g",{key:i.id,className:"edge"},p.default.createElement("path",{d:ce(a,c),className:"edge-line",markerEnd:"url(#edge-arrow)"}),p.default.createElement("path",{d:ce(a,c),className:"edge-hit",onPointerDown:x=>{x.stopPropagation(),r({type:"remove-edge",id:i.id})}},p.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),O?(()=>{let i=k[O.from];if(!i)return null;let a={x:O.to.x,y:O.to.y-10,w:0,h:20};return p.default.createElement("path",{d:ce(i,a),className:"edge-line edge-line--ghost"})})():null),e.nodes.map(i=>p.default.createElement(Ve,{key:i.id,node:i,selected:e.selection.includes(i.id),running:i.status==="running",onPointerDown:oe,onResize:u,onContext:a=>r({type:"select",ids:[a.id]})},p.default.createElement("div",{className:"node-head"},p.default.createElement("span",{className:"node-type"},X[i.type]),p.default.createElement("span",{className:"node-name"},i.name||(i.type==="image"||i.type==="video")&&i.ratio||""),p.default.createElement("button",{type:"button",className:"node-port",onPointerDown:a=>M(a,i),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),p.default.createElement("div",{className:"node-body",onDoubleClick:a=>v(a,i)},p.default.createElement(Qe,{node:i,onEditText:n,onGenerate:n})))),U&&U.w>4?p.default.createElement("div",{className:"marquee",style:{left:U.x,top:U.y,width:U.w,height:U.h}}):null),b?p.default.createElement(Re,{nodes:e.nodes,cam:w.current,size:P,onJump:i=>S(g.current,P.w/2-i.x*w.current.s,P.h/2-i.y*w.current.s,w.current.s,_)}):null)}var er=40;function ue(e){return{nodes:e.nodes.map(r=>({...r})),edges:e.edges.map(r=>({...r}))}}function K(e){let r=[...e.undo,ue(e)];return r.length>er&&r.shift(),{undo:r,redo:[]}}function Me(e,r){switch(r.type){case"select":return{...e,selection:r.ids};case"move-selection":{let o=new Set(r.ids);return{...e,nodes:e.nodes.map(n=>o.has(n.id)?{...n,x:Math.round(n.x+r.dx),y:Math.round(n.y+r.dy)}:n)}}case"commit":return e;case"resize-node":return{...e,nodes:e.nodes.map(o=>o.id===r.id?{...o,w:r.w,h:r.h}:o)};case"add-node":{let o=K(e),n=r.node||H(r.nodeType,r.at,r.extra||{});return{...e,...o,nodes:[...e.nodes,n],selection:[n.id]}}case"update-node":{let o=K(e);return{...e,...o,nodes:e.nodes.map(n=>n.id===r.id?{...n,...r.patch}:n)}}case"set-node-silent":return{...e,nodes:e.nodes.map(o=>o.id===r.id?{...o,...r.patch}:o)};case"remove-selected":{if(!e.selection.length)return e;let o=K(e),n=new Set(e.selection),s=e.nodes.filter(b=>!n.has(b.id)),h=e.edges.filter(b=>!n.has(b.from)&&!n.has(b.to));return{...e,...o,nodes:s,edges:h,selection:[]}}case"duplicate-selected":{if(!e.selection.length)return e;let o=K(e),n=e.nodes.filter(d=>e.selection.includes(d.id)),s={},h=n.map(d=>{let g=W(d.type[0]);return s[d.id]=g,{...d,id:g,x:d.x+40,y:d.y+40,status:d.type==="config"?d.status:"idle",name:d.name?`${d.name} \u526F\u672C`:""}}),b=e.edges.filter(d=>s[d.from]&&s[d.to]).map(d=>({id:W("e"),from:s[d.from],to:s[d.to]}));return{...e,...o,nodes:[...e.nodes,...h],edges:[...e.edges,...b],selection:h.map(d=>d.id)}}case"connect":{if(!te(e.nodes,e.edges,r.from,r.to))return e;let o=K(e);return{...e,...o,edges:[...e.edges,{id:W("e"),from:r.from,to:r.to}]}}case"remove-edge":{let o=K(e);return{...e,...o,edges:e.edges.filter(n=>n.id!==r.id)}}case"wrap-group":{let o=fe(e.nodes,e.selection);if(!o)return e;let n=K(e);return{...e,...n,nodes:[o,...e.nodes],selection:[o.id]}}case"ungroup":{let o=new Set(e.nodes.filter(s=>e.selection.includes(s.id)&&s.type==="group").map(s=>s.id));if(!o.size)return e;let n=K(e);return{...e,...n,nodes:e.nodes.filter(s=>!o.has(s.id)),selection:[]}}case"set-canvas":return{...e,camera:r.camera};case"set-grid":return{...e,grid:r.grid};case"set-theme":return{...e,theme:r.theme};case"toggle-minimap":return{...e,minimap:!e.minimap};case"set-panel":return{...e,panel:r.panel};case"clear":return{...e,...K(e),nodes:[],edges:[],selection:[]};case"undo":{if(!e.undo.length)return e;let o=e.undo[e.undo.length-1];return{...e,...o,undo:e.undo.slice(0,-1),redo:[...e.redo,ue(e)],selection:e.selection.filter(n=>o.nodes.some(s=>s.id===n))}}case"redo":{if(!e.redo.length)return e;let o=e.redo[e.redo.length-1];return{...e,...o,redo:e.redo.slice(0,-1),undo:[...e.undo,ue(e)],selection:e.selection.filter(n=>o.nodes.some(s=>s.id===n))}}case"load":return{...e,nodes:r.nodes,edges:r.edges,undo:[],redo:[],selection:[]};default:return e}}var l=R(require("react"),1);function ne({label:e,children:r}){return l.default.createElement("div",{className:"row"},l.default.createElement("span",{className:"row-k"},e),l.default.createElement("span",{className:"row-v"},r))}function q({label:e,children:r}){return l.default.createElement("label",{className:"field"},l.default.createElement("span",{className:"field-k"},e),r)}function ze({node:e,dispatch:r,onDelete:o,onDuplicate:n,onWrap:s,onUngroup:h,selectedCount:b}){if(!e)return l.default.createElement("div",{className:"panel-empty"},l.default.createElement("p",null,"\u6CA1\u6709\u9009\u4E2D\u8282\u70B9"),l.default.createElement("p",{className:"panel-empty-hint"},"\u5728\u753B\u5E03\u4E0A\u70B9\u4E00\u4E2A\u8282\u70B9\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u5B83\u7684\u53C2\u6570\u3002"),b>1?l.default.createElement("button",{type:"button",className:"btn btn--ghost btn--sm",onClick:s},"\u628A\u9009\u4E2D\u7684 ",b," \u4E2A\u8282\u70B9\u5305\u6210\u7EC4"):null);let d=g=>r({type:"update-node",id:e.id,patch:g});return l.default.createElement("div",{className:"panel-section"},l.default.createElement("div",{className:"panel-head"},l.default.createElement("h2",{className:"panel-title"},e.name||X[e.type]),l.default.createElement("span",{className:"panel-sub"},X[e.type],"\u8282\u70B9")),l.default.createElement("div",{className:"panel-grid"},l.default.createElement(ne,{label:"\u4F4D\u7F6E"},e.x,", ",e.y),l.default.createElement(ne,{label:"\u5C3A\u5BF8"},e.w," \xD7 ",e.h),e.type!=="group"?l.default.createElement(ne,{label:"\u72B6\u6001"},e.status==="running"?"\u751F\u6210\u4E2D":e.status==="failed"?"\u5931\u8D25":e.status==="done"?"\u5DF2\u5B8C\u6210":"\u5F85\u751F\u6210"):null,e.childIds?.length?l.default.createElement(ne,{label:"\u5305\u542B"},e.childIds.length," \u4E2A\u8282\u70B9"):null),l.default.createElement(q,{label:"\u540D\u79F0"},l.default.createElement("input",{className:"input",value:e.name||"",placeholder:"\u672A\u547D\u540D",onChange:g=>d({name:g.target.value})})),e.type==="image"||e.type==="video"||e.type==="audio"?l.default.createElement(l.default.Fragment,null,l.default.createElement(q,{label:e.type==="audio"?"\u58F0\u97F3\u63CF\u8FF0":"\u63D0\u793A\u8BCD"},l.default.createElement("textarea",{className:"input input--area",rows:4,value:e.prompt||"",placeholder:e.type==="audio"?"\u63CF\u8FF0\u8981\u751F\u6210\u7684\u97F3\u9891\u5185\u5BB9":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:g=>d({prompt:g.target.value})})),e.type!=="audio"?l.default.createElement(l.default.Fragment,null,l.default.createElement(q,{label:"\u6BD4\u4F8B"},l.default.createElement("div",{className:"chips"},de.map(g=>l.default.createElement("button",{key:g,type:"button",className:`chip${e.ratio===g?" is-on":""}`,onClick:()=>d({ratio:g})},g)))),l.default.createElement("label",{className:"switch"},l.default.createElement("input",{type:"checkbox",checked:e.locked!==!1,onChange:g=>d({locked:g.target.checked})}),l.default.createElement("span",null,"\u9501\u5B9A\u6BD4\u4F8B"))):null):null,e.type==="text"?l.default.createElement(l.default.Fragment,null,l.default.createElement(q,{label:"\u6587\u672C"},l.default.createElement("textarea",{className:"input input--area",rows:6,value:e.text||"",onChange:g=>d({text:g.target.value})})),l.default.createElement(q,{label:`\u5B57\u53F7 ${e.fontSize||14}px`},l.default.createElement("input",{className:"range",type:"range",min:10,max:28,value:e.fontSize||14,onChange:g=>d({fontSize:Number(g.target.value)})}))):null,e.type==="config"?l.default.createElement(l.default.Fragment,null,l.default.createElement(q,{label:"\u6A21\u578B"},l.default.createElement("select",{className:"input",value:e.model,onChange:g=>d({model:g.target.value})},B.map(g=>l.default.createElement("option",{key:g.id,value:g.id},g.label," \xB7 ",g.channel)))),l.default.createElement(q,{label:"\u9ED8\u8BA4\u6BD4\u4F8B"},l.default.createElement("div",{className:"chips"},de.map(g=>l.default.createElement("button",{key:g,type:"button",className:`chip${e.ratio===g?" is-on":""}`,onClick:()=>d({ratio:g})},g)))),l.default.createElement(q,{label:`\u5F20\u6570 ${e.count}`},l.default.createElement("input",{className:"range",type:"range",min:1,max:8,value:e.count,onChange:g=>d({count:Number(g.target.value)})})),l.default.createElement(q,{label:"\u7CFB\u7EDF\u63D0\u793A\u8BCD"},l.default.createElement("textarea",{className:"input input--area",rows:3,value:e.systemPrompt||"",placeholder:"\u4F8B\u5982\uFF1A\u4F60\u662F\u4E00\u4F4D\u64C5\u957F\u7535\u5F71\u611F\u5199\u5B9E\u6444\u5F71\u7684\u89C6\u89C9\u5BFC\u6F14\u3002",onChange:g=>d({systemPrompt:g.target.value})}))):null,l.default.createElement("div",{className:"panel-actions"},l.default.createElement("button",{type:"button",className:"btn btn--ghost btn--sm",onClick:n},"\u590D\u5236"),e.type!=="group"?l.default.createElement("button",{type:"button",className:"btn btn--ghost btn--sm",onClick:s},"\u5305\u6210\u7EC4"):l.default.createElement("button",{type:"button",className:"btn btn--ghost btn--sm",onClick:h},"\u89E3\u6563\u7EC4"),l.default.createElement("button",{type:"button",className:"btn btn--danger btn--sm",onClick:o},"\u5220\u9664")))}function Ce({onUse:e}){let[r,o]=l.default.useState(""),n=pe.filter(s=>!r||s.name.includes(r)||s.text.includes(r));return l.default.createElement("div",{className:"panel-section"},l.default.createElement("div",{className:"panel-head"},l.default.createElement("h2",{className:"panel-title"},"\u63D0\u793A\u8BCD\u5E93"),l.default.createElement("span",{className:"panel-sub"},"\u5171 ",pe.length," \u6761")),l.default.createElement("input",{className:"input",placeholder:"\u641C\u7D22\u63D0\u793A\u8BCD",value:r,onChange:s=>o(s.target.value)}),n.length?l.default.createElement("ul",{className:"prompt-list"},n.map(s=>l.default.createElement("li",{key:s.id,className:"prompt-item"},l.default.createElement("button",{type:"button",className:"prompt-use",onClick:()=>e(s)},l.default.createElement("span",{className:"prompt-name"},s.name),l.default.createElement("span",{className:"prompt-text"},s.text))))):l.default.createElement("p",{className:"panel-empty-hint"},"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD\u3002"))}function Se(){return l.default.createElement("div",{className:"panel-section"},l.default.createElement("div",{className:"panel-head"},l.default.createElement("h2",{className:"panel-title"},"\u6A21\u578B\u6E20\u9053"),l.default.createElement("span",{className:"panel-sub"},B.length," \u4E2A\u6A21\u578B")),l.default.createElement("ul",{className:"model-list"},B.map(e=>l.default.createElement("li",{key:e.id,className:"model-item"},l.default.createElement("div",null,l.default.createElement("p",{className:"model-name"},e.label),l.default.createElement("p",{className:"model-channel"},e.channel)),l.default.createElement("span",{className:"model-tag"},"\u751F\u56FE")))),l.default.createElement("p",{className:"panel-empty-hint"},"\u5728\u300C\u8BBE\u7F6E \u2192 \u6E20\u9053\u300D\u91CC\u586B\u63A5\u53E3\u5730\u5740\u4E0E Key \u540E\uFF0C\u8FD9\u91CC\u4F1A\u62C9\u53D6\u771F\u5B9E\u6A21\u578B\u5217\u8868\u3002"))}function Pe({nodes:e}){let r=e.filter(o=>o.type==="image"&&o.status!=="running");return l.default.createElement("div",{className:"panel-section"},l.default.createElement("div",{className:"panel-head"},l.default.createElement("h2",{className:"panel-title"},"\u753B\u5E03\u7D20\u6750"),l.default.createElement("span",{className:"panel-sub"},r.length," \u5F20")),r.length?l.default.createElement("div",{className:"asset-grid"},r.map(o=>l.default.createElement("div",{key:o.id,className:"asset-cell",title:o.prompt||""},l.default.createElement("canvas",{className:"asset-thumb",width:"1",height:"1",ref:n=>{if(!n)return;n.width=120,n.height=120;let s=n.getContext("2d");s.fillStyle="#1a1512",s.fillRect(0,0,120,120);let h=7;for(let g of o.id)h=(h*31+g.charCodeAt(0))%2147483647;let b=()=>(h=h*16807%2147483647)/2147483647,d=s.createRadialGradient(60*b(),60*b(),6,60,60,90);d.addColorStop(0,"oklch(70% 0.2 45 / 0.6)"),d.addColorStop(1,"transparent"),s.fillStyle=d,s.fillRect(0,0,120,120)}})))):l.default.createElement("p",{className:"panel-empty-hint"},"\u753B\u5E03\u4E0A\u8FD8\u6CA1\u6709\u56FE\u7247\u3002"))}function Le({logs:e}){return l.default.createElement("div",{className:"panel-section"},l.default.createElement("div",{className:"panel-head"},l.default.createElement("h2",{className:"panel-title"},"\u751F\u6210\u8BB0\u5F55"),l.default.createElement("span",{className:"panel-sub"},e.length," \u6761")),e.length?l.default.createElement("ul",{className:"log-list"},e.map(r=>l.default.createElement("li",{key:r.id,className:"log-item"},l.default.createElement("span",{className:`log-dot is-${r.status}`,"aria-hidden":"true"}),l.default.createElement("div",{className:"log-body"},l.default.createElement("p",{className:"log-prompt"},r.prompt||"\u672A\u586B\u63D0\u793A\u8BCD"),l.default.createElement("p",{className:"log-meta"},r.model," \xB7 ",r.ratio," \xB7 ",r.at))))):l.default.createElement("p",{className:"panel-empty-hint"},"\u8FD8\u6CA1\u6709\u751F\u6210\u8BB0\u5F55\u3002"))}var m=R(require("react"),1),rr={cursor:m.default.createElement("path",{d:"M5 3l14 8-6 1.5L10 20z"}),hand:m.default.createElement("path",{d:"M8 13V6a2 2 0 114 0v6m0-1V5a2 2 0 114 0v8m0-2V7a2 2 0 114 0v9a6 6 0 01-6 6h-2a6 6 0 01-6-6v-4a2 2 0 114 0v2"}),target:m.default.createElement(m.default.Fragment,null,m.default.createElement("circle",{cx:"12",cy:"12",r:"7"}),m.default.createElement("circle",{cx:"12",cy:"12",r:"2.5"}),m.default.createElement("path",{d:"M12 2v3m0 14v3M2 12h3m14 0h3"})),text:m.default.createElement("path",{d:"M5 6h14M12 6v13M9 19h6"}),image:m.default.createElement(m.default.Fragment,null,m.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),m.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),m.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),video:m.default.createElement(m.default.Fragment,null,m.default.createElement("rect",{x:"3",y:"5",width:"13",height:"14",rx:"2"}),m.default.createElement("path",{d:"M16 10l5-3v10l-5-3z"})),audio:m.default.createElement(m.default.Fragment,null,m.default.createElement("path",{d:"M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"})),sliders:m.default.createElement("path",{d:"M4 7h10M18 7h2M4 12h4M12 12h8M4 17h9M17 17h3M14 5v4M8 10v4M13 15v4"}),group:m.default.createElement(m.default.Fragment,null,m.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),m.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),m.default.createElement("path",{d:"M11 11l2 2"})),menu:m.default.createElement("path",{d:"M4 7h16M4 12h16M4 17h16"}),undo:m.default.createElement("path",{d:"M9 7L4 12l5 5M4 12h10a5 5 0 010 10"}),redo:m.default.createElement("path",{d:"M15 7l5 5-5 5M20 12H10a5 5 0 000 10"}),map:m.default.createElement(m.default.Fragment,null,m.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),m.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:m.default.createElement(m.default.Fragment,null,m.default.createElement("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),m.default.createElement("path",{d:"M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"})),sun:m.default.createElement(m.default.Fragment,null,m.default.createElement("circle",{cx:"12",cy:"12",r:"4"}),m.default.createElement("path",{d:"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"})),moon:m.default.createElement("path",{d:"M20 14a8 8 0 11-9.9-9.6A7 7 0 0020 14z"}),book:m.default.createElement(m.default.Fragment,null,m.default.createElement("path",{d:"M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2z"}),m.default.createElement("path",{d:"M4 17h15"})),chip:m.default.createElement(m.default.Fragment,null,m.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"}),m.default.createElement("path",{d:"M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3M19 9h3m-3 6h3"})),list:m.default.createElement("path",{d:"M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"}),canvas:m.default.createElement(m.default.Fragment,null,m.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),m.default.createElement("path",{d:"M3 9h18M9 9v12"})),close:m.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"})};function A({name:e,size:r=16}){let o=rr[e];return o?m.default.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},o):null}function me({title:e,children:r,onClose:o,wide:n}){return m.default.useEffect(()=>{let s=h=>{h.key==="Escape"&&o()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[o]),m.default.createElement("div",{className:"scrim",onPointerDown:s=>{s.target===s.currentTarget&&o()}},m.default.createElement("div",{className:`dialog${n?" dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},m.default.createElement("header",{className:"dialog-head"},m.default.createElement("h2",null,e),m.default.createElement("button",{type:"button",className:"icon-btn",onClick:o,"aria-label":"\u5173\u95ED"},m.default.createElement(A,{name:"close",size:16}))),m.default.createElement("div",{className:"dialog-body"},r)))}function Ee({text:e,kind:r}){return m.default.createElement("p",{className:`toast${r==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}var $e=`:root {
  color-scheme: dark;
  --space-3xs: 2px; --space-2xs: 4px; --space-xs: 8px; --space-sm: 12px; --space-md: 16px; --space-lg: 24px; --space-xl: 40px; --space-2xl: 64px; --space-3xl: 96px; --space-4xl: 144px;
  --text-xs: 0.8125rem; --text-sm: 0.875rem; --text-md: 1rem; --text-lg: 1.25rem; --text-xl: 1.5625rem; --text-2xl: 1.953rem; --text-3xl: 2.441rem;
  --text-display-s: clamp(2.25rem, 4vw + 0.5rem, 3.75rem); --text-display: clamp(2.75rem, 5vw + 1rem, 5.25rem);
  --text-section: clamp(2rem, 2.5vw + 1rem, 3.5rem); --text-title: clamp(1.25rem, 0.75vw + 0.875rem, 1.625rem); --text-lead: clamp(1.125rem, 0.35vw + 1rem, 1.375rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1); --ease-in: cubic-bezier(0.7, 0, 0.84, 0); --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-micro: 120ms; --dur-short: 220ms; --dur-long: 420ms;
  --color-error: oklch(72% 0.15 27); --color-success: oklch(76% 0.13 150);
  --container: 1440px; --gutter: 64px; --gap-columns: 32px; --section-gap-s: 120px; --section-gap: 144px; --section-gap-l: 176px;
  --z-base: 1; --z-raised: 10; --z-dropdown: 100; --z-sticky: 200; --z-sticky-nav: 300; --z-modal: 400; --z-toast: 500; --z-tooltip: 600;
  --color-paper: oklch(13% 0.012 40); --color-paper-2: oklch(17.5% 0.016 40); --color-paper-3: oklch(22% 0.018 40);
  --color-ink: oklch(94% 0.02 80); --color-ink-2: oklch(84% 0.025 70); --color-muted: oklch(72% 0.03 60);
  --color-rule: oklch(96% 0.01 80 / 0.12);
  --color-accent: oklch(70% 0.2 45); --color-accent-ink: oklch(14% 0.02 40); --color-focus: oklch(76% 0.19 56);
  --heat-0: oklch(12% 0.012 40); --heat-1: oklch(22% 0.07 22); --heat-2: oklch(40% 0.16 27); --heat-3: oklch(60% 0.21 36);
  --heat-4: oklch(76% 0.19 56); --heat-5: oklch(89% 0.14 78); --heat-6: oklch(98% 0.04 95);
  --font-display: "Boska", "Iowan Old Style", Georgia, serif; --font-body: "Geist", ui-sans-serif, system-ui, sans-serif;
  --font-outlier: "Geist Mono", ui-monospace, monospace;
  --radius-card: 28px; --radius-well: 16px; --radius-pill: 999px; --rule-hair: 1px;
  --shadow-card: 0 50px 90px -30px oklch(8% 0.01 40 / 0.5);
  --tracking-display: -0.02em; --display-weight: 500;
}
`;var De=`*, *::before, *::after { box-sizing: border-box; }
html, body { overflow-x: clip; }
html { scrollbar-color: var(--color-muted) var(--color-paper); scroll-padding-top: var(--space-3xl); }
body { margin: 0; background: var(--color-paper); color: var(--color-ink); font-family: var(--font-body); font-size: var(--text-md); line-height: 1.55; -webkit-font-smoothing: antialiased; caret-color: var(--color-accent); }
::selection { background: color-mix(in oklab, var(--color-accent) 35%, transparent); }
:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
a { color: inherit; text-decoration-thickness: 1px; text-underline-offset: 0.16em; }
h1, h2, h3 { margin: 0; font-family: var(--font-display); font-weight: var(--display-weight, 700); font-synthesis: none; letter-spacing: var(--tracking-display); line-height: 1.05; overflow-wrap: break-word; min-width: 0; text-wrap: balance; }
h1 { max-width: 20ch; font-size: var(--text-display); } h2 { max-width: 30ch; font-size: var(--text-section); } h3 { max-width: 40ch; font-size: var(--text-title); line-height: 1.2; }
.lead { font-size: var(--text-lead); line-height: 1.45; max-width: 52ch; }
p { margin: 0; text-wrap: pretty; }
p:not([class]) { max-width: 65ch; }
img, video { max-width: 100%; height: auto; display: block; }
svg { display: block; }
[hidden] { display: none !important; }
button, input, select, textarea { font: inherit; }
.container { width: 100%; max-width: var(--container); margin-inline: auto; padding-inline: var(--gutter); box-sizing: border-box; }
.num, .figure, td.num { font-variant-numeric: tabular-nums; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
[data-slot] { position: relative; overflow: hidden; background: linear-gradient(160deg, var(--color-paper-2, var(--color-paper)), var(--color-paper-3, var(--color-paper))); }
[data-slot] > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }
[data-slot]:has(> img) > :not(img):not([data-keep]) { display: none !important; }
@media (max-width: 60rem) { :root { --gutter: 24px; --section-gap-s: 80px; --section-gap: 96px; --section-gap-l: 120px; } }
@media (max-width: 40rem) { :root { --gutter: 16px; --section-gap-s: 56px; --section-gap: 72px; --section-gap-l: 96px; --gap-columns: 16px; } }
@media (prefers-reduced-motion: reduce) { *:not(.keep-motion), *:not(.keep-motion)::before, *:not(.keep-motion)::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }
/* photographs: warm sepia=50 sat=-12 con=8 exp=-6 */
[data-slot] > img { filter: sepia(0.5) saturate(0.88) contrast(1.08) brightness(0.94); }
`;var Ie=`/* Hallmark \xB7 shape: Workbench, app screen \xB7 genre: atmospheric \xB7 theme: Kiln (deal 2/3, seed infinite-canvas-image-generation-32bc\xB78999b19a\xB72026-11-16\xB7r0) \xB7 job: try \xB7 draw: none \xB7 imagery: the work itself, every node's picture lit on a near-black ground \xB7 signature: the canvas is the page, one ember per generating node
 * hero: none, an app screen \xB7 nav: the app's own topbar and tool rail \xB7 footer: a status strip \xB7 kiln: ember
 * axes: dark/high-contrast-serif/warm \xB7 posture: full-palette \xB7 contrast: pass \xB7 fold: pass \xB7 v2.0.0 */
/* Hallmark \xB7 pre-emit critique: P5 H5 E4 S5 R4 V5 \xB7 weakest: E, a tool this dense risks looking like a control panel; kept every chrome surface one step above the ground and the pictures the only bright thing */

/* ---------- the shell ---------- */

.desk {
  --node-radius: 12px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  min-height: 520px;
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  overflow: clip;
}

/* the light colourway (bisque): the ground turns bone, the heat stays ember */
.desk.is-light {
  --color-paper: oklch(96.5% 0.014 80);
  --color-paper-2: oklch(93% 0.016 78);
  --color-paper-3: oklch(89% 0.02 76);
  --color-ink: oklch(20% 0.02 40);
  --color-ink-2: oklch(32% 0.025 42);
  --color-muted: oklch(46% 0.03 50);
  --color-rule: oklch(20% 0.02 40 / 0.16);
  --color-accent: oklch(58% 0.17 46);
  --color-accent-ink: oklch(98% 0.012 80);
  --color-focus: oklch(58% 0.17 46);
  color-scheme: light;
}

/* ---------- the top bar ---------- */

.topbar {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  height: 56px;
  padding-inline: var(--space-md);
  border-bottom: var(--rule-hair) solid var(--color-rule);
  background: var(--color-paper-2);
}

.topbar-left,
.topbar-mid,
.topbar-right {
  display: flex;
  align-items: center;
  gap: var(--space-2xs);
  min-width: 0;
}

.topbar-mid { margin-inline: auto; }
.topbar-right { margin-inline-start: auto; }

.title-block { min-width: 0; display: grid; gap: 1px; padding-inline-start: var(--space-2xs); }

.desk-title {
  font-family: var(--font-display);
  font-weight: var(--display-weight);
  font-size: var(--text-md);
  letter-spacing: var(--tracking-display);
  line-height: 1.15;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 26ch;
}

.desk-meta {
  margin: 0;
  font-size: var(--text-xs);
  color: var(--color-muted);
  white-space: nowrap;
}

.topbar-sep {
  width: var(--rule-hair);
  height: 18px;
  background: var(--color-rule);
  margin-inline: var(--space-2xs);
}

/* ---------- controls ---------- */

.icon-btn {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: var(--radius-well);
  background: transparent;
  color: var(--color-ink-2);
  cursor: pointer;
  transition: background-color var(--dur-short) var(--ease-out), color var(--dur-short) var(--ease-out);
}
.icon-btn:hover { background: var(--color-paper-3); color: var(--color-ink); }
.icon-btn:active { background: var(--color-paper); }
.icon-btn:disabled { opacity: 0.35; cursor: not-allowed; background: transparent; }
.icon-btn[aria-pressed="true"] { background: var(--color-paper-3); color: var(--color-ink); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2xs);
  min-height: 36px;
  padding-inline: var(--space-md);
  border: 0;
  border-radius: var(--radius-pill);
  font: 500 var(--text-sm) / 1 var(--font-body);
  cursor: pointer;
  white-space: nowrap;
  transition: background-color var(--dur-short) var(--ease-out), color var(--dur-short) var(--ease-out);
}
.btn--sm { min-height: 32px; padding-inline: var(--space-sm); font-size: var(--text-xs); }
.btn--primary { background: var(--color-accent); color: var(--color-accent-ink); }
.btn--primary:hover { background: var(--heat-5); }
.btn--primary:active { background: var(--heat-4); }
.btn--ghost { background: transparent; color: var(--color-ink); box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule); }
.btn--ghost:hover { background: var(--color-paper-3); }
.btn--ghost:active { background: var(--color-paper); }
.btn--danger { background: transparent; color: var(--color-error); box-shadow: inset 0 0 0 var(--rule-hair) currentColor; }
.btn--danger:hover { background: color-mix(in oklab, var(--color-error) 16%, transparent); }
.btn:disabled { opacity: 0.45; cursor: not-allowed; }

.seg {
  display: inline-flex;
  padding: 2px;
  border-radius: var(--radius-pill);
  background: var(--color-paper);
  box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule);
}
.seg-btn {
  white-space: nowrap;
  border: 0;
  background: transparent;
  color: var(--color-muted);
  font: 500 var(--text-xs) / 1 var(--font-body);
  padding: 6px var(--space-sm);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: background-color var(--dur-micro) var(--ease-out), color var(--dur-micro) var(--ease-out);
}
.seg-btn:hover { color: var(--color-ink); }
.seg-btn.is-on { background: var(--color-paper-3); color: var(--color-ink); }

/* ---------- body: rail / board / side ---------- */

.body {
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr) 312px;
  min-height: 0;
}

.rail {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-2xs);
  padding: var(--space-sm) var(--space-2xs);
  border-inline-end: var(--rule-hair) solid var(--color-rule);
  background: var(--color-paper-2);
  overflow-y: auto;
}

.rail-btn {
  display: grid;
  justify-items: center;
  gap: 3px;
  padding: var(--space-xs) 2px;
  border: 0;
  border-radius: var(--radius-well);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  transition: background-color var(--dur-micro) var(--ease-out), color var(--dur-micro) var(--ease-out);
}
.rail-btn:hover { background: var(--color-paper-3); color: var(--color-ink); }
.rail-btn.is-on { background: var(--color-paper-3); color: var(--color-ink); box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule); }
.rail-label { font-size: 11px; line-height: 1; letter-spacing: 0; }
.rail-sep { height: var(--rule-hair); background: var(--color-rule); margin: var(--space-2xs) var(--space-xs); }

/* ---------- the board ---------- */

.board { position: relative; min-width: 0; min-height: 0; background: var(--color-paper); }

.stage {
  position: absolute;
  inset: 0;
  overflow: clip;
  cursor: default;
  touch-action: none;
}
.stage.is-pan { cursor: grab; }
.stage.is-panning { cursor: grabbing; }
.stage.is-space { cursor: grab; }

/* three grid styles, drawn with one background each */
.stage-grid--dots {
  background-image: radial-gradient(circle at 1px 1px, var(--color-rule) 1px, transparent 0);
  background-size: var(--grid-size, 28px) var(--grid-size, 28px);
}
.stage-grid--lines {
  background-image:
    linear-gradient(to right, var(--color-rule) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-rule) 1px, transparent 1px);
  background-size: var(--grid-size, 28px) var(--grid-size, 28px);
}
.stage-grid--blank { background-image: none; }

.world {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  transform-origin: 0 0;
  will-change: transform;
}

.edges { position: absolute; top: 0; left: 0; overflow: visible; pointer-events: none; }
.edge-line { fill: none; stroke: var(--color-ink-2); stroke-opacity: 0.42; stroke-width: 1.5; }
.edge-line--ghost { stroke: var(--color-accent); stroke-dasharray: 5 5; stroke-opacity: 0.9; }
.edge-arrow-head { fill: var(--color-ink-2); fill-opacity: 0.55; }
.edge-hit { fill: none; stroke: transparent; stroke-width: 18; pointer-events: stroke; cursor: pointer; }
.edge-hit:hover + .edge-line, .edge:hover .edge-line { stroke: var(--color-accent); stroke-opacity: 1; }

.marquee {
  position: absolute;
  border: var(--rule-hair) solid var(--color-focus);
  background: color-mix(in oklab, var(--color-focus) 12%, transparent);
  pointer-events: none;
}

/* ---------- a node ---------- */

.node {
  position: absolute;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-radius: var(--node-radius);
  background: var(--color-paper-2);
  box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule);
  overflow: visible;
  contain: layout style;
  transition: box-shadow var(--dur-micro) var(--ease-out);
}
.node:hover { box-shadow: inset 0 0 0 var(--rule-hair) var(--color-ink-2); }
.node.is-selected { box-shadow: inset 0 0 0 1px var(--color-focus), 0 0 0 3px color-mix(in oklab, var(--color-focus) 22%, transparent); }
.node.is-running { box-shadow: inset 0 0 0 1px var(--color-accent), 0 0 0 3px color-mix(in oklab, var(--color-accent) 18%, transparent); }
.node.is-group {
  background: color-mix(in oklab, var(--color-paper-3) 55%, transparent);
  box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule);
  pointer-events: none;
}
.node.is-group .node-group-head { pointer-events: auto; }

.node-head {
  display: flex;
  align-items: center;
  gap: var(--space-2xs);
  height: 30px;
  padding-inline: var(--space-md);
  border-bottom: var(--rule-hair) solid var(--color-rule);
  min-width: 0;
}
.node-type {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-muted);
  white-space: nowrap;
}
.node-name {
  font-size: 11px;
  color: var(--color-muted);
  margin-inline-start: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.node-port {
  flex: 0 0 auto;
  width: 11px;
  height: 11px;
  margin-inline-start: var(--space-2xs);
  border: var(--rule-hair) solid var(--color-ink-2);
  border-radius: var(--radius-pill);
  background: var(--color-paper);
  cursor: crosshair;
  padding: 0;
}
.node-port:hover { background: var(--color-accent); border-color: var(--color-accent); }

.node-body { min-height: 0; overflow: hidden; border-radius: 0 0 var(--node-radius) var(--node-radius); }

.node-media { position: relative; width: 100%; height: 100%; background: var(--heat-0); }
.node-media img,
.node-canvas { display: block; width: 100%; height: 100%; object-fit: cover; }
.node-media--video video { width: 100%; height: 100%; object-fit: cover; }

.node-void {
  display: grid;
  place-items: center;
  gap: var(--space-xs);
  width: 100%;
  height: 100%;
  padding: var(--space-md);
  color: var(--color-muted);
  font-size: var(--text-xs);
  border: var(--rule-hair) dashed var(--color-rule);
  border-radius: 0 0 var(--node-radius) var(--node-radius);
  background: var(--heat-0);
}
.node-badge {
  font-size: 11px;
  padding: 2px 6px;
  border-radius: var(--radius-pill);
  box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule);
}
.node-spin {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-rule);
  border-top-color: var(--color-accent);
  border-radius: var(--radius-pill);
  animation: node-spin 900ms linear infinite;
}
@keyframes node-spin { to { transform: rotate(360deg); } }

.node-canvas { background: var(--heat-0); }

/* text node */
.node-text { padding: var(--space-md); height: 100%; overflow: auto; }
.node-text p { margin: 0; color: var(--color-ink); line-height: 1.5; white-space: pre-wrap; overflow-wrap: break-word; }
.node-hint { color: var(--color-muted); font-size: var(--text-xs); }

/* audio node */
.node-audio { display: grid; gap: var(--space-sm); padding: var(--space-md); height: 100%; align-content: center; }
.node-wave { display: flex; align-items: center; gap: 2px; height: 44px; }
.node-wave span { flex: 1; min-width: 2px; background: var(--color-accent); opacity: 0.7; border-radius: 1px; }
.node-audio-label { margin: 0; font-size: 11px; color: var(--color-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* config node */
.node-config { display: grid; gap: var(--space-2xs); padding: var(--space-md); font-size: var(--text-xs); }
.node-config-row { display: flex; justify-content: space-between; gap: var(--space-sm); margin: 0; }
.node-config-row span { color: var(--color-muted); }
.node-config-row b { font-weight: 500; color: var(--color-ink); font-variant-numeric: tabular-nums; }
.node-config-order { margin-top: var(--space-2xs); display: grid; gap: 2px; }
.node-config-order > span { color: var(--color-muted); }
.node-config-order ol { margin: 0; padding-inline-start: var(--space-md); color: var(--color-ink-2); }
.node-config-order .is-empty { color: var(--color-muted); list-style: none; padding-inline-start: var(--space-md); }

/* group head */
.node-group-head {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  height: 34px;
  padding-inline: var(--space-md);
  cursor: grab;
}
.node-group-name { font-size: var(--text-xs); font-weight: 500; color: var(--color-ink-2); }
.node-group-count { font-size: 11px; color: var(--color-muted); margin-inline-start: auto; }

.node-handle {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 12px;
  height: 12px;
  border: var(--rule-hair) solid var(--color-focus);
  border-radius: 2px;
  background: var(--color-paper);
  cursor: nwse-resize;
}

/* ---------- HUD ---------- */

.hud {
  position: absolute;
  z-index: var(--z-raised);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-2xs) var(--space-xs);
  border-radius: var(--radius-pill);
  background: color-mix(in oklab, var(--color-paper-2) 92%, transparent);
  box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule);
  font-size: var(--text-xs);
  color: var(--color-muted);
}
.hud--zoom { left: var(--space-md); bottom: var(--space-md); }
.hud--hint { left: var(--space-md); top: var(--space-md); max-width: 46ch; border-radius: var(--radius-well); }

.hud-btn {
  border: 0;
  background: transparent;
  color: var(--color-ink-2);
  font: 500 var(--text-sm) / 1 var(--font-body);
  width: 32px;
  height: 32px;
  border-radius: var(--radius-well);
  cursor: pointer;
}
.hud-btn:hover { background: var(--color-paper-3); color: var(--color-ink); }
.hud-btn--wide { width: auto; padding-inline: var(--space-xs); font-size: var(--text-xs); white-space: nowrap; }
.hud-num { font-variant-numeric: tabular-nums; min-width: 4ch; text-align: end; color: var(--color-ink-2); }

.zoom-range {
  width: 100px;
  height: 20px;
  appearance: none;
  background: transparent;
  cursor: pointer;
}
.zoom-range::-webkit-slider-runnable-track { height: 2px; background: var(--color-rule); border-radius: 2px; }
.zoom-range::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  margin-top: -5px;
  border-radius: var(--radius-pill);
  background: var(--color-accent);
}
.zoom-range::-moz-range-track { height: 2px; background: var(--color-rule); }
.zoom-range::-moz-range-thumb { width: 12px; height: 12px; border: 0; border-radius: var(--radius-pill); background: var(--color-accent); }

/* ---------- minimap ---------- */

.minimap {
  position: absolute;
  right: var(--space-md);
  bottom: var(--space-md);
  z-index: var(--z-raised);
  border-radius: var(--radius-well);
  background: color-mix(in oklab, var(--color-paper-2) 88%, transparent);
  box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule);
  cursor: pointer;
}
.mini-node { fill: var(--color-ink-2); fill-opacity: 0.3; }
.mini-image { fill: var(--heat-4); fill-opacity: 0.26; }
.mini-text { fill: var(--color-ink-2); fill-opacity: 0.24; }
.mini-config { fill: var(--color-ink-2); fill-opacity: 0.46; }
.mini-group { fill: none; stroke: var(--color-rule); stroke-width: 1; }
.mini-view { fill: color-mix(in oklab, var(--color-focus) 10%, transparent); stroke: var(--color-focus); stroke-width: 1.2; }

/* ---------- the side panel ---------- */

.side {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-inline-start: var(--rule-hair) solid var(--color-rule);
  background: var(--color-paper-2);
  min-height: 0;
}

.side-tabs {
  display: flex;
  gap: 2px;
  padding: var(--space-xs) var(--space-xs) 0;
  border-bottom: var(--rule-hair) solid var(--color-rule);
  overflow-x: auto;
  scrollbar-width: none;
}
.side-tabs::-webkit-scrollbar { display: none; }
.side-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 40px;
  padding: var(--space-xs);
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: var(--color-muted);
  font: 500 var(--text-xs) / 1 var(--font-body);
  cursor: pointer;
  white-space: nowrap;
  transition: color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out);
}
.side-tab:hover { color: var(--color-ink); }
.side-tab.is-on { color: var(--color-ink); border-bottom-color: var(--color-accent); }

.side-body { overflow-y: auto; min-height: 0; }

.panel-section { display: grid; gap: var(--space-sm); padding: var(--space-md); }
.panel-head { display: grid; gap: 2px; }
.panel-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: var(--display-weight);
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-display);
  line-height: 1.1;
}
.panel-sub { font-size: var(--text-xs); color: var(--color-muted); }
.panel-grid { display: grid; gap: 2px; }
.panel-empty { display: grid; gap: var(--space-xs); justify-items: start; padding: var(--space-lg) var(--space-md); }
.panel-empty p { margin: 0; }
.panel-empty > p:first-child { color: var(--color-ink-2); font-weight: 500; }
.panel-empty-hint { font-size: var(--text-xs); color: var(--color-muted); line-height: 1.55; }
.panel-actions { display: flex; flex-wrap: wrap; gap: var(--space-xs); padding-top: var(--space-xs); }

.row { display: flex; justify-content: space-between; gap: var(--space-sm); font-size: var(--text-xs); padding-block: 3px; }
.row-k { color: var(--color-muted); }
.row-v { color: var(--color-ink-2); font-variant-numeric: tabular-nums; }

.field { display: grid; gap: var(--space-2xs); }
.field-k { font-size: var(--text-xs); font-weight: 500; color: var(--color-muted); }

.input {
  width: 100%;
  min-height: 34px;
  padding: var(--space-2xs) var(--space-sm);
  border: var(--rule-hair) solid var(--color-rule);
  border-radius: var(--radius-well);
  background: var(--color-paper);
  color: var(--color-ink);
  font: 400 var(--text-sm) / 1.5 var(--font-body);
}
.input::placeholder { color: var(--color-muted); }
.input:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 0; }
.input--area { min-height: 72px; resize: vertical; }

.range { width: 100%; height: 20px; appearance: none; background: transparent; cursor: pointer; }
.range::-webkit-slider-runnable-track { height: 2px; background: var(--color-rule); }
.range::-webkit-slider-thumb { appearance: none; width: 12px; height: 12px; margin-top: -5px; border-radius: var(--radius-pill); background: var(--color-accent); }
.range::-moz-range-track { height: 2px; background: var(--color-rule); }
.range::-moz-range-thumb { width: 12px; height: 12px; border: 0; border-radius: var(--radius-pill); background: var(--color-accent); }

.chips { display: flex; flex-wrap: wrap; gap: var(--space-2xs); }
.chip {
  padding: 4px var(--space-xs);
  border: var(--rule-hair) solid var(--color-rule);
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--color-muted);
  font: 500 var(--text-xs) / 1.3 var(--font-body);
  cursor: pointer;
  font-variant-numeric: tabular-nums;
  transition: background-color var(--dur-micro) var(--ease-out), color var(--dur-micro) var(--ease-out);
}
.chip:hover { color: var(--color-ink); background: var(--color-paper-3); }
.chip.is-on { background: var(--color-accent); border-color: var(--color-accent); color: var(--color-accent-ink); }

.switch { display: inline-flex; align-items: center; gap: var(--space-xs); font-size: var(--text-xs); color: var(--color-ink-2); cursor: pointer; }
.switch input { width: 14px; height: 14px; accent-color: var(--color-accent); }

/* prompt library */
.prompt-list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-2xs); }
.prompt-use {
  display: grid;
  gap: 2px;
  width: 100%;
  text-align: start;
  padding: var(--space-xs) var(--space-sm);
  border: var(--rule-hair) solid var(--color-rule);
  border-radius: var(--radius-well);
  background: var(--color-paper);
  color: var(--color-ink);
  cursor: pointer;
  transition: background-color var(--dur-micro) var(--ease-out);
}
.prompt-use:hover { background: var(--color-paper-3); }
.prompt-name { font-size: var(--text-xs); font-weight: 500; }
.prompt-text { font-size: 11px; line-height: 1.5; color: var(--color-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* models */
.model-list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-2xs); }
.model-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-sm);
  border: var(--rule-hair) solid var(--color-rule);
  border-radius: var(--radius-well);
  background: var(--color-paper);
}
.model-name { margin: 0; font-size: var(--text-xs); font-weight: 500; }
.model-channel { margin: 0; font-size: 11px; color: var(--color-muted); }
.model-tag { font-size: 11px; color: var(--color-muted); padding: 2px 6px; border-radius: var(--radius-pill); box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule); }

/* assets */
.asset-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-2xs); }
.asset-cell { aspect-ratio: 1; border-radius: 8px; overflow: hidden; box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule); }
.asset-thumb { display: block; width: 100%; height: 100%; object-fit: cover; }

/* logs */
.log-list { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-2xs); }
.log-item { display: flex; gap: var(--space-xs); align-items: flex-start; padding: var(--space-xs) var(--space-sm); border: var(--rule-hair) solid var(--color-rule); border-radius: var(--radius-well); background: var(--color-paper); }
.log-dot { flex: 0 0 auto; width: 6px; height: 6px; margin-top: 6px; border-radius: var(--radius-pill); background: var(--color-muted); }
.log-dot.is-running { background: var(--color-accent); }
.log-dot.is-done { background: var(--color-success); }
.log-body { min-width: 0; display: grid; gap: 2px; }
.log-prompt { margin: 0; font-size: var(--text-xs); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.log-meta { margin: 0; font-size: 11px; color: var(--color-muted); }

/* ---------- status strip ---------- */

.statusbar {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  height: 28px;
  padding-inline: var(--space-sm);
  border-top: var(--rule-hair) solid var(--color-rule);
  background: var(--color-paper-2);
  font-size: 11px;
  color: var(--color-muted);
  white-space: nowrap;
  overflow: hidden;
}
.statusbar-sep { width: var(--rule-hair); height: 12px; background: var(--color-rule); }
.statusbar-grow { flex: 1; }

/* ---------- menu ---------- */

.menu {
  position: absolute;
  z-index: var(--z-dropdown);
  top: 56px;
  left: var(--space-sm);
  width: 232px;
  display: grid;
  gap: 2px;
  padding: var(--space-2xs);
  border-radius: var(--radius-well);
  background: var(--color-paper-3);
  box-shadow: var(--shadow-card), inset 0 0 0 var(--rule-hair) var(--color-rule);
}
.menu-head { margin: 0; padding: var(--space-2xs) var(--space-xs); font-size: 11px; color: var(--color-muted); }
.menu-item {
  text-align: start;
  padding: var(--space-xs) var(--space-sm);
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--color-ink);
  font: 400 var(--text-sm) / 1.4 var(--font-body);
  cursor: pointer;
}
.menu-item:hover { background: var(--color-paper-2); }
.menu-item.is-on { color: var(--color-accent); }
.menu-sep { height: var(--rule-hair); background: var(--color-rule); margin: var(--space-2xs) 0; }

/* ---------- dialog ---------- */

.scrim {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  display: grid;
  place-items: center;
  padding: var(--space-lg);
  background: color-mix(in oklab, var(--color-paper) 72%, transparent);
}
.dialog {
  width: min(440px, 100%);
  max-height: min(78vh, 640px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-radius: var(--radius-card);
  background: var(--color-paper-2);
  box-shadow: var(--shadow-card), inset 0 0 0 var(--rule-hair) var(--color-rule);
  overflow: hidden;
}
.dialog--wide { width: min(760px, 100%); }
.dialog-head {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border-bottom: var(--rule-hair) solid var(--color-rule);
}
.dialog-head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: var(--display-weight);
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-display);
  line-height: 1.1;
  text-transform: none;
}
.dialog-head .icon-btn { margin-inline-start: auto; }
.dialog-body { overflow-y: auto; padding: var(--space-md); }

/* node detail */
.detail { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); gap: var(--space-md); }
.detail-media { border-radius: var(--radius-well); overflow: hidden; background: var(--heat-0); aspect-ratio: 1; }
.detail-media img { display: block; width: 100%; height: 100%; object-fit: cover; }
.detail-void { display: grid; place-items: center; height: 100%; padding: var(--space-md); text-align: center; color: var(--color-muted); font-size: var(--text-xs); }
.detail-side { display: grid; align-content: start; gap: var(--space-xs); }
.detail-k { margin: 0; font-size: 11px; color: var(--color-muted); }
.detail-prompt { margin: 0; font-size: var(--text-sm); line-height: 1.55; color: var(--color-ink-2); overflow-wrap: break-word; }
.detail-facts { margin: 0; padding-inline-start: var(--space-md); font-size: var(--text-xs); color: var(--color-muted); display: grid; gap: 2px; }
.detail-actions { display: flex; gap: var(--space-xs); padding-top: var(--space-xs); }

/* shortcuts */
.keys { list-style: none; margin: 0; padding: 0; display: grid; gap: 2px; }
.keys li { display: flex; justify-content: space-between; gap: var(--space-md); padding: 6px var(--space-2xs); font-size: var(--text-xs); border-bottom: var(--rule-hair) solid var(--color-rule); }
.keys li:last-child { border-bottom: 0; }
.keys span { color: var(--color-ink-2); }
kbd {
  font-family: var(--font-outlier);
  font-size: 11px;
  color: var(--color-muted);
  padding: 2px 6px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 var(--rule-hair) var(--color-rule);
}

/* ---------- toast ---------- */

.toast {
  position: fixed;
  z-index: var(--z-toast);
  left: 50%;
  bottom: 52px;
  transform: translateX(-50%);
  margin: 0;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-pill);
  background: var(--color-paper-3);
  color: var(--color-ink);
  font-size: var(--text-xs);
  box-shadow: var(--shadow-card), inset 0 0 0 var(--rule-hair) var(--color-rule);
}
.toast.is-error { color: var(--color-error); }

/* ---------- narrow: the rail keeps, the side collapses ---------- */

@media (max-width: 68rem) {
  .body { grid-template-columns: 64px minmax(0, 1fr); }
  .side {
    position: absolute;
    right: 0;
    top: 56px;
    bottom: 28px;
    width: min(312px, 82vw);
    z-index: var(--z-sticky);
    box-shadow: var(--shadow-card);
  }
  .segment-label { display: none; }
}

@media (max-width: 48rem) {
  .body { grid-template-columns: 56px minmax(0, 1fr); }
  .rail-label { display: none; }
  .topbar { height: auto; padding-block: var(--space-2xs); flex-wrap: wrap; }
  .topbar-mid { margin-inline: 0; }
  .desk-meta { display: none; }
  .hud--hint { display: none; }
  .detail { grid-template-columns: minmax(0, 1fr); }
  .statusbar > span:nth-child(5) { display: none; }
}
`;var Te=`${$e}
${De}
${Ie}`;var Ye=[{id:"select",label:"\u9009\u62E9",key:"V",icon:"cursor"},{id:"pan",label:"\u79FB\u52A8",key:"H",icon:"hand"},{id:"focus",label:"\u5C45\u4E2D",key:"F",icon:"target"},{sep:!0},{id:"text",label:"\u6587\u672C",key:"T",icon:"text"},{id:"image",label:"\u56FE\u7247",key:"I",icon:"image"},{id:"video",label:"\u89C6\u9891",key:"M",icon:"video"},{id:"audio",label:"\u97F3\u9891",key:"A",icon:"audio"},{id:"config",label:"\u914D\u7F6E",key:"C",icon:"sliders"},{id:"group",label:"\u5206\u7EC4",key:"G",icon:"group"}],nr=[{id:"inspector",label:"\u68C0\u89C6",icon:"sliders"},{id:"prompts",label:"\u63D0\u793A\u8BCD",icon:"book"},{id:"models",label:"\u6A21\u578B",icon:"chip"},{id:"assets",label:"\u7D20\u6750",icon:"image"},{id:"logs",label:"\u8BB0\u5F55",icon:"list"}],ir=0;function Ae(){let[e,r]=t.default.useReducer(Me,void 0,()=>{let u=be(),v=xe();return{...u,nodes:v.nodes,edges:v.edges}}),o=ke(),{cam:n,moveTo:s}=o,[h,b]=t.default.useState("select"),[d,g]=t.default.useState({w:1200,h:800}),[f,w]=t.default.useState(!1),[S,T]=t.default.useState(null),[P,Y]=t.default.useState(!1),[E,L]=t.default.useState(!1),[$,y]=t.default.useState(null),[C,O]=t.default.useState([]),[V,U]=t.default.useState(null),J=t.default.useRef(null),j=e.nodes.find(u=>e.selection.includes(u.id))||null,D=t.default.useCallback((u,v)=>{T({text:u,kind:v,id:Date.now()}),setTimeout(()=>T(M=>M&&Date.now()-M.id>2200?null:M),2400)},[]),_=()=>document.querySelector(".world"),G=t.default.useCallback(()=>{let u=_();if(!u||!e.nodes.length)return;let v=80,M=Math.min(...e.nodes.map(c=>c.x))-v,k=Math.min(...e.nodes.map(c=>c.y))-v,z=Math.max(...e.nodes.map(c=>c.x+c.w))+v,i=Math.max(...e.nodes.map(c=>c.y+c.h))+v,a=Math.min(1.4,Math.max(.1,Math.min(d.w/(z-M),d.h/(i-k))));s(u,v-M*a,v-k*a,a,()=>{})},[e.nodes,d,s]);t.default.useEffect(()=>{if(f||!e.nodes.length)return;let u=setTimeout(()=>{G(),w(!0)},60);return()=>clearTimeout(u)},[f,e.nodes.length,G]);let I=u=>{let v=_();if(!v)return;let M=d.w/2,k=d.h/2,z=n.current,i=(M-z.tx)/z.ts,a=(k-z.ty)/z.ts,c=Math.min(3,Math.max(.1,z.ts*u));s(v,M-i*c,k-a*c,c,()=>{})},Q=t.default.useCallback(u=>{let v=_(),M=n.current,k={x:(d.w/2-M.tx)/M.ts,y:(d.h/2-M.ty)/M.ts},z=e.nodes.length%6*26;r({type:"add-node",nodeType:u,at:{x:k.x+z,y:k.y+z}}),D(`\u5DF2\u65B0\u5EFA${X[u]}\u8282\u70B9`)},[d,e.nodes.length,D]),ie=t.default.useCallback(u=>{let v=B[0],M=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});r({type:"update-node",id:u.id,patch:{status:"running"}}),O(k=>[{id:`l${++ir}`,prompt:u.prompt,model:v.label,ratio:u.ratio||"1:1",at:M,status:"running"},...k]),setTimeout(()=>{r({type:"update-node",id:u.id,patch:{status:"done"}}),O(k=>k.map(z=>z.status==="running"?{...z,status:"done"}:z)),D("\u56FE\u7247\u5DF2\u751F\u6210")},1100)},[D]);t.default.useEffect(()=>{let u=v=>{let M=/input|textarea|select/i.test(v.target.tagName),k=v.metaKey||v.ctrlKey;if(M&&!(k&&(v.key==="s"||v.key==="z")))return;if(k&&v.key.toLowerCase()==="z"){v.preventDefault(),r({type:v.shiftKey?"redo":"undo"});return}if(k&&v.key.toLowerCase()==="a"){v.preventDefault(),r({type:"select",ids:e.nodes.map(a=>a.id)});return}if(k&&v.key.toLowerCase()==="d"){v.preventDefault(),r({type:"duplicate-selected"});return}if(k&&v.key.toLowerCase()==="g"){v.preventDefault(),r({type:v.shiftKey?"ungroup":"wrap-group"});return}if(k)return;if(v.key==="Delete"||v.key==="Backspace"){v.preventDefault(),r({type:"remove-selected"});return}if(v.key==="Escape"){r({type:"select",ids:[]}),y(null),Y(!1);return}let z={v:"select",h:"pan",f:"focus",t:"text",i:"image",m:"video",a:"audio",c:"config",g:"group"},i=v.key.toLowerCase();if(z[i]){let a=z[i];if(a==="focus"){G();return}if(["text","image","video","audio","config","group"].includes(a)){Q(a),b("select");return}b(a)}v.key==="0"&&G(),v.key==="1"&&I(.8),v.key==="2"&&I(1.25),v.key==="?"&&L(!0)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[e.nodes,Q,G]);let ee=()=>{let u=e.nodes.filter(x=>x.type!=="group");if(!u.length){D("\u753B\u5E03\u662F\u7A7A\u7684");return}let v=60,M=Math.min(...u.map(x=>x.x))-v,k=Math.min(...u.map(x=>x.y))-v,z=Math.max(...u.map(x=>x.x+x.w))+v,i=Math.max(...u.map(x=>x.y+x.h))+v,a=document.createElement("canvas");a.width=Math.ceil(z-M),a.height=Math.ceil(i-k);let c=a.getContext("2d");c.fillStyle="#0d0b0a",c.fillRect(0,0,a.width,a.height);for(let x of u){let N=x.x-M,F=x.y-k;c.fillStyle="#1a1512",c.strokeStyle="rgba(255,244,230,0.16)",c.lineWidth=1,c.beginPath(),c.roundRect(N+.5,F+.5,x.w-1,x.h-1,12),c.fill(),c.stroke();let Z=document.querySelector(`[data-id="${x.id}"] canvas`);if(Z)try{c.drawImage(Z,N+1,F+34,x.w-2,Math.min(x.w-2,x.h-36))}catch{}c.fillStyle="#f2e9dd",c.font="500 12px system-ui, sans-serif";let se=(x.prompt||x.text||x.name||X[x.type]).slice(0,22);c.fillText(se,N+10,F+22)}a.toBlob(x=>{let N=document.createElement("a");N.href=URL.createObjectURL(x),N.download=`\u753B\u5E03-${new Date().toISOString().slice(0,10)}.png`,N.click(),setTimeout(()=>URL.revokeObjectURL(N.href),2e3),D(`\u5DF2\u5BFC\u51FA ${a.width} \xD7 ${a.height}`)},"image/png")},re=()=>{let u={version:1,nodes:e.nodes,edges:e.edges,grid:e.grid},v=document.createElement("a");v.href=URL.createObjectURL(new Blob([JSON.stringify(u,null,2)],{type:"application/json"})),v.download="\u753B\u5E03.json",v.click(),D("\u5DF2\u5BFC\u51FA\u5DE5\u7A0B\u6587\u4EF6")},oe=Math.round(n.current.s*100);return t.default.createElement("div",{className:`desk ${e.theme==="light"?"is-light":""}`},t.default.createElement("style",null,Te),t.default.createElement("header",{className:"topbar"},t.default.createElement("div",{className:"topbar-left"},t.default.createElement("button",{type:"button",className:"icon-btn","aria-label":"\u753B\u5E03\u83DC\u5355",onClick:()=>Y(u=>!u)},t.default.createElement(A,{name:"menu",size:16})),t.default.createElement("div",{className:"title-block"},t.default.createElement("h1",{className:"desk-title"},e.canvases[0].name),t.default.createElement("p",{className:"desk-meta"},e.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",e.edges.length," \u6761\u8FDE\u7EBF"))),t.default.createElement("div",{className:"topbar-mid"},t.default.createElement("button",{type:"button",className:"icon-btn",onClick:()=>r({type:"undo"}),disabled:!e.undo.length,"aria-label":"\u64A4\u9500",title:"\u64A4\u9500 \u2318Z"},t.default.createElement(A,{name:"undo",size:16})),t.default.createElement("button",{type:"button",className:"icon-btn",onClick:()=>r({type:"redo"}),disabled:!e.redo.length,"aria-label":"\u91CD\u505A",title:"\u91CD\u505A \u21E7\u2318Z"},t.default.createElement(A,{name:"redo",size:16})),t.default.createElement("span",{className:"topbar-sep","aria-hidden":"true"}),t.default.createElement("button",{type:"button",className:"icon-btn",onClick:()=>r({type:"toggle-minimap"}),"aria-label":"\u7F29\u7565\u56FE",title:"\u7F29\u7565\u56FE","aria-pressed":e.minimap},t.default.createElement(A,{name:"map",size:16})),t.default.createElement("button",{type:"button",className:"icon-btn",onClick:()=>L(!0),"aria-label":"\u5FEB\u6377\u952E",title:"\u5FEB\u6377\u952E ?"},t.default.createElement(A,{name:"keyboard",size:16}))),t.default.createElement("div",{className:"topbar-right"},t.default.createElement("div",{className:"seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},ve.map(u=>t.default.createElement("button",{key:u.id,type:"button",className:`seg-btn${e.grid===u.id?" is-on":""}`,onClick:()=>r({type:"set-grid",grid:u.id})},u.label))),t.default.createElement("button",{type:"button",className:"icon-btn",onClick:()=>r({type:"set-theme",theme:e.theme==="dark"?"light":"dark"}),"aria-label":"\u4E3B\u9898",title:"\u5207\u6362\u4E3B\u9898"},t.default.createElement(A,{name:e.theme==="dark"?"sun":"moon",size:16})),t.default.createElement("button",{type:"button",className:"btn btn--ghost btn--sm",onClick:re},"\u5BFC\u51FA\u5DE5\u7A0B"),t.default.createElement("button",{type:"button",className:"btn btn--primary btn--sm",onClick:ee},"\u5BFC\u51FA PNG"))),P?t.default.createElement("div",{className:"menu",role:"menu"},t.default.createElement("p",{className:"menu-head"},"\u753B\u5E03\u5217\u8868"),e.canvases.map(u=>t.default.createElement("button",{key:u.id,type:"button",className:"menu-item is-on",role:"menuitem"},u.name)),t.default.createElement("span",{className:"menu-sep","aria-hidden":"true"}),t.default.createElement("button",{type:"button",className:"menu-item",role:"menuitem",onClick:()=>{ee(),Y(!1)}},"\u5BFC\u51FA\u5F53\u524D\u753B\u5E03"),t.default.createElement("button",{type:"button",className:"menu-item",role:"menuitem",onClick:()=>{r({type:"clear"}),Y(!1),D("\u753B\u5E03\u5DF2\u6E05\u7A7A")}},"\u6E05\u7A7A\u753B\u5E03"),t.default.createElement("button",{type:"button",className:"menu-item",role:"menuitem",onClick:()=>{L(!0),Y(!1)}},"\u952E\u76D8\u5FEB\u6377\u952E")):null,t.default.createElement("div",{className:"body"},t.default.createElement("nav",{className:"rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},Ye.map((u,v)=>u.sep?t.default.createElement("span",{key:`s${v}`,className:"rail-sep","aria-hidden":"true"}):t.default.createElement("button",{key:u.id,type:"button",className:`rail-btn${h===u.id?" is-on":""}`,onClick:()=>{if(u.id==="focus"){G();return}if(["text","image","video","audio","config","group"].includes(u.id)){Q(u.id);return}b(u.id)},title:`${u.label}  ${u.key}`,"aria-pressed":h===u.id},t.default.createElement(A,{name:u.icon,size:18}),t.default.createElement("span",{className:"rail-label"},u.label)))),t.default.createElement("div",{className:"board",ref:J},t.default.createElement(Ne,{state:e,dispatch:r,camApi:o,tool:h,setTool:b,showMinimap:e.minimap,onCanvasSize:g,onOpenNode:(u,v)=>{if(v==="text"){r({type:"select",ids:[u.id]}),r({type:"set-panel",panel:"inspector"});return}y(u),r({type:"set-panel",panel:"inspector"})}}),t.default.createElement("div",{className:"hud hud--zoom"},t.default.createElement("button",{type:"button",className:"hud-btn",onClick:()=>I(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),t.default.createElement("input",{className:"zoom-range",type:"range",min:10,max:300,step:1,value:oe,"aria-label":"\u7CBE\u786E\u8C03\u6574\u7F29\u653E",onChange:u=>{let v=_();if(!v)return;let M=Number(u.target.value)/100,k=d.w/2,z=d.h/2,i=n.current,a=(k-i.ts)/i.s,c=(z-i.ts)/i.s;s(v,k-(k-i.tx)/i.s*M,z-(z-i.ty)/i.s*M,M,()=>{})}}),t.default.createElement("button",{type:"button",className:"hud-btn",onClick:()=>I(1.25),"aria-label":"\u653E\u5927"},"+"),t.default.createElement("span",{className:"hud-num"},oe,"%"),t.default.createElement("button",{type:"button",className:"hud-btn hud-btn--wide",onClick:G},"\u9002\u5E94")),t.default.createElement("p",{className:"hud hud--hint"},h==="pan"?"\u6309\u4F4F\u62D6\u52A8\u79FB\u52A8\u753B\u5E03 \xB7 \u6EDA\u8F6E\u7F29\u653E":"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5")),t.default.createElement("aside",{className:"side","aria-label":"\u9762\u677F"},t.default.createElement("div",{className:"side-tabs",role:"tablist"},nr.map(u=>t.default.createElement("button",{key:u.id,type:"button",role:"tab","aria-selected":e.panel===u.id,className:`side-tab${e.panel===u.id?" is-on":""}`,onClick:()=>r({type:"set-panel",panel:u.id}),title:u.label,"aria-label":u.label},t.default.createElement(A,{name:u.icon,size:16})))),t.default.createElement("div",{className:"side-body"},e.panel==="inspector"?t.default.createElement(ze,{node:j,dispatch:r,selectedCount:e.selection.length,onDelete:()=>r({type:"remove-selected"}),onDuplicate:()=>r({type:"duplicate-selected"}),onWrap:()=>r({type:"wrap-group"}),onUngroup:()=>r({type:"ungroup"})}):null,e.panel==="prompts"?t.default.createElement(Ce,{onUse:u=>{j&&(j.type==="image"||j.type==="video"||j.type==="audio")?(r({type:"update-node",id:j.id,patch:{prompt:u.text}}),D(`\u5DF2\u586B\u5165\u300C${u.name}\u300D`)):(r({type:"add-node",nodeType:"image",at:{x:400,y:400},extra:{prompt:u.text}}),D(`\u5DF2\u7528\u300C${u.name}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`))}}):null,e.panel==="models"?t.default.createElement(Se,null):null,e.panel==="assets"?t.default.createElement(Pe,{nodes:e.nodes}):null,e.panel==="logs"?t.default.createElement(Le,{logs:C}):null))),t.default.createElement("footer",{className:"statusbar"},t.default.createElement("span",null,e.selection.length?`\u5DF2\u9009 ${e.selection.length} \u4E2A`:"\u672A\u9009\u4E2D"),t.default.createElement("span",{className:"statusbar-sep","aria-hidden":"true"}),t.default.createElement("span",null,Ye.find(u=>u.id===h)?.label||"\u9009\u62E9"),t.default.createElement("span",{className:"statusbar-sep","aria-hidden":"true"}),t.default.createElement("span",null,e.grid==="dots"?"\u70B9\u9635":e.grid==="lines"?"\u7F51\u683C":"\u7A7A\u767D","\u5E95"),t.default.createElement("span",{className:"statusbar-grow"}),t.default.createElement("span",null,"\u2318Z \u64A4\u9500 \xB7 \u21E7\u2318Z \u91CD\u505A \xB7 \u232B \u5220\u9664 \xB7 0 \u9002\u5E94")),$?t.default.createElement(sr,{node:$,onClose:()=>y(null),onGenerate:()=>{ie($),y(null)},dispatch:r}):null,E?t.default.createElement(dr,{onClose:()=>L(!1)}):null,S?t.default.createElement(Ee,{text:S.text,kind:S.kind}):null)}function sr({node:e,onClose:r,onGenerate:o,dispatch:n}){let s=e.type==="image";return t.default.createElement(me,{title:e.name||(s?"\u56FE\u7247\u8282\u70B9":`${X[e.type]}\u8282\u70B9`),onClose:r,wide:!0},t.default.createElement("div",{className:"detail"},t.default.createElement("div",{className:"detail-media"},s?e.src?t.default.createElement("img",{src:e.src,alt:e.prompt||""}):t.default.createElement("div",{className:"detail-void"},"\u8FD9\u4E00\u683C\u8FD8\u6CA1\u6709\u56FE\u3002\u586B\u63D0\u793A\u8BCD\u540E\u70B9\u751F\u6210\u3002"):t.default.createElement("div",{className:"detail-void"},X[e.type],"\u8282\u70B9")),t.default.createElement("div",{className:"detail-side"},t.default.createElement("p",{className:"detail-k"},"\u63D0\u793A\u8BCD"),t.default.createElement("p",{className:"detail-prompt"},e.prompt||e.text||"\uFF08\u7A7A\uFF09"),t.default.createElement("p",{className:"detail-k"},"\u53C2\u6570"),t.default.createElement("ul",{className:"detail-facts"},t.default.createElement("li",null,e.w," \xD7 ",e.h),e.ratio?t.default.createElement("li",null,"\u6BD4\u4F8B ",e.ratio):null,e.model?t.default.createElement("li",null,B.find(h=>h.id===e.model)?.label||e.model):null,t.default.createElement("li",null,e.status==="running"?"\u751F\u6210\u4E2D":e.status==="done"?"\u5DF2\u5B8C\u6210":"\u5F85\u751F\u6210")),t.default.createElement("div",{className:"detail-actions"},s?t.default.createElement("button",{type:"button",className:"btn btn--primary btn--sm",onClick:o,disabled:e.status==="running"},e.status==="running"?"\u751F\u6210\u4E2D\u2026":e.status==="done"?"\u91CD\u65B0\u751F\u6210":"\u5F00\u59CB\u751F\u6210"):null,t.default.createElement("button",{type:"button",className:"btn btn--ghost btn--sm",onClick:r},"\u5173\u95ED")))))}var lr=[["\u9009\u62E9","V"],["\u79FB\u52A8","H"],["\u5C45\u4E2D / \u9002\u5E94","F \u6216 0"],["\u6587\u672C\u8282\u70B9","T"],["\u56FE\u7247\u8282\u70B9","I"],["\u89C6\u9891\u8282\u70B9","M"],["\u97F3\u9891\u8282\u70B9","A"],["\u914D\u7F6E\u8282\u70B9","C"],["\u5206\u7EC4","G"],["\u6846\u9009","\u62D6\u7A7A\u767D\u5904"],["\u5E73\u79FB","\u7A7A\u683C + \u62D6"],["\u7F29\u653E","\u6EDA\u8F6E"],["\u64A4\u9500","\u2318Z"],["\u91CD\u505A","\u21E7\u2318Z"],["\u5168\u9009","\u2318A"],["\u590D\u5236\u8282\u70B9","\u2318D"],["\u5305\u6210\u7EC4 / \u89E3\u6563","\u2318G / \u21E7\u2318G"],["\u5220\u9664","\u232B"],["\u5173\u95ED\u5F39\u5C42","Esc"],["\u672C\u8868","?"]];function dr({onClose:e}){return t.default.createElement(me,{title:"\u952E\u76D8\u5FEB\u6377\u952E",onClose:e},t.default.createElement("ul",{className:"keys"},lr.map(([r,o])=>t.default.createElement("li",{key:r},t.default.createElement("span",null,r),t.default.createElement("kbd",null,o)))))}var je="dsh-chunfeng-image",pr=["slots"];function cr(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:je},Ae)),e.effect(()=>{let r=null;return(()=>{r?.(),r=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:je,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},ur))})(),()=>r?.()},"dsh-chunfeng-image: sidebar entry")}function ur(){return Ge.default.createElement(A,{name:"canvas",size:16})}
return module.exports}})
