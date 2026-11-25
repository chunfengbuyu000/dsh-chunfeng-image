window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ds=Object.create;var ea=Object.defineProperty;var Ps=Object.getOwnPropertyDescriptor;var Bs=Object.getOwnPropertyNames;var Os=Object.getPrototypeOf,Ls=Object.prototype.hasOwnProperty;var Yn=(e,t)=>()=>(e&&(t=e(e=0)),t);var mo=(e,t)=>{for(var n in t)ea(e,n,{get:t[n],enumerable:!0})},go=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Bs(t))!Ls.call(e,o)&&o!==n&&ea(e,o,{get:()=>t[o],enumerable:!(r=Ps(t,o))||r.enumerable});return e};var Zt=(e,t,n)=>(n=e!=null?Ds(Os(e)):{},go(t||!e||!e.__esModule?ea(n,"default",{value:e,enumerable:!0}):n,e)),Us=e=>go(ea({},"__esModule",{value:!0}),e);var aa,pe,oa,gt,ze,It,kn=Yn(()=>{aa="dsh-chunfeng-image",pe={appState:"app_state",imageFiles:"image_files",imagePreviews:"image_previews",mediaFiles:"media_files",logs:"logs",meta:"meta"},oa=Object.values(pe),gt={legacyState:"dsh-chunfeng-image:state:v2",config:"dsh-cf:config:v1",configBackup:"dsh-cf:config:backup",ui:"dsh-cf:ui:v1"},ze={canvasProjects:"canvas:projects",prompts:"prompts",promptSources:"promptSources",promptCache:"promptCache",assets:"assets",assistantMessages:"assistantMessages",logOne:e=>`log:${e}`,schemaVersion:"schemaVersion",migratedAt:"migratedAt",migrationLock:"migrationLock",migrationStatus:"migration",rawBackup:"rawBackup"},It={QUOTA:"quota",VERSION:"version",BLOCKED:"blocked",CLOSED:"closed",UNAVAILABLE:"unavailable",ABORT:"abort",ERROR:"error"}});function Bo(e){if(!e)return It.ERROR;let t=e.name||"";return t==="QuotaExceededError"||t==="NS_ERROR_DOM_QUOTA_REACHED"||e.code===22||e.code===1014?It.QUOTA:t==="VersionError"?It.VERSION:t==="InvalidStateError"?It.CLOSED:t==="AbortError"?It.ABORT:t==="SecurityError"?It.UNAVAILABLE:t==="UnknownError"?It.UNAVAILABLE:It.ERROR}function Oo(e){return e instanceof Zn?e.kind===It.QUOTA:Bo(e)===It.QUOTA}function pr(e,t,n){if(e instanceof Zn)return e;let r=Bo(e),o=r===It.QUOTA?"\uFF08\u672C\u5730\u5B58\u50A8\u914D\u989D\u5DF2\u6EE1\uFF09":"";return new Zn(`${n}${o}`,{cause:e,kind:r,store:t})}function Ka(){return tn.db?Promise.resolve(tn.db):(tn.opening||(tn.opening=new Promise((e,t)=>{if(typeof indexedDB>"u"||indexedDB===null){t(new Zn("IndexedDB \u4E0D\u53EF\u7528\uFF08\u9690\u79C1\u6A21\u5F0F\u6216\u53D7\u9650\u7684 iframe \u73AF\u5883\uFF09",{kind:It.UNAVAILABLE}));return}let n;try{n=indexedDB.open(aa,1)}catch(r){t(pr(r,aa,"\u6253\u5F00\u6570\u636E\u5E93\u5931\u8D25"));return}n.onupgradeneeded=()=>{let r=n.result;for(let o of oa)r.objectStoreNames.contains(o)||r.createObjectStore(o)},n.onblocked=()=>{t(new Zn("\u6570\u636E\u5E93\u5347\u7EA7\u88AB\u5176\u5B83\u7A97\u53E3\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875\u540E\u91CD\u8BD5",{kind:It.BLOCKED}))},n.onerror=()=>t(pr(n.error,aa,"\u6253\u5F00\u6570\u636E\u5E93\u5931\u8D25")),n.onsuccess=()=>{let r=n.result;r.onversionchange=()=>{try{r.close()}catch{}tn.db=null,tn.opening=null},r.onclose=()=>{tn.db=null,tn.opening=null},tn.db=r,e(r)}}).catch(e=>{throw tn.opening=null,e})),tn.opening)}async function Rn(e,t,n){let r=await Ka(),o;try{o=r.transaction(e,t)}catch(c){throw pr(c,e,`\u5F00\u542F\u4E8B\u52A1\u5931\u8D25\uFF1A${e}`)}let a=new Promise((c,s)=>{o.oncomplete=()=>c(),o.onabort=()=>s(pr(o.error||new Error("\u4E8B\u52A1\u88AB\u4E2D\u6B62"),e,"\u4E8B\u52A1\u88AB\u4E2D\u6B62")),o.onerror=()=>s(pr(o.error||new Error("\u4E8B\u52A1\u5931\u8D25"),e,"\u4E8B\u52A1\u5931\u8D25"))}),i;try{i=await n(o.objectStore(e))}catch(c){try{o.abort()}catch{}throw await a.catch(()=>{}),pr(c,e,`\u5199\u5165\u5931\u8D25\uFF1A${e}`)}return await a,i}function et(e,t){return Rn(e,"readonly",n=>ur(n.get(t)))}function pn(e,t,n){return Rn(e,"readwrite",r=>ur(r.put(n,t)))}function mr(e,t){return Rn(e,"readwrite",async n=>{for(let[r,o]of t)await ur(n.put(o,r));return t.length})}function Wn(e,t){return Rn(e,"readwrite",async n=>{for(let r of t)await ur(n.delete(r));return t.length})}function Lo(e){return Rn(e,"readwrite",t=>ur(t.clear()))}function Uo(e){return Rn(e,"readonly",t=>ur(t.getAll()))}function ja(e,t){return Rn(e,"readonly",n=>new Promise((r,o)=>{let a=n.openCursor();a.onsuccess=()=>{let i=a.result;if(!i){r();return}t(i.key,i.value),i.continue()},a.onerror=()=>o(a.error)}))}var Zn,tn,ur,Vn=Yn(()=>{kn();Zn=class extends Error{constructor(t,{cause:n,kind:r=It.ERROR,store:o=""}={}){super(t),this.name="StorageError",this.kind=r,this.store=o,n&&(this.cause=n)}};tn={db:null,opening:null};ur=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)})});function pa(e,t="image/png"){let n=String(e||"").replace(/^data:[^,]+,/,"").replace(/\s+/g,"");if(typeof Uint8Array.fromBase64=="function")try{return new Blob([Uint8Array.fromBase64(n)],{type:t})}catch{}if(typeof Buffer<"u")return new Blob([Buffer.from(n,"base64")],{type:t});let r=atob(n),o=new Uint8Array(r.length);for(let a=0;a<r.length;a+=1)o[a]=r.charCodeAt(a);return new Blob([o],{type:t})}function pc(e){let t=e.indexOf(",");if(t===-1||!e.startsWith("data:"))throw new Error("\u4E0D\u662F\u5408\u6CD5\u7684 data URL");let n=e.slice(5,t),r=n.split(";")[0]||"image/png";return n.includes(";base64")?pa(e.slice(t+1),r):new Blob([decodeURIComponent(e.slice(t+1))],{type:r})}function hr(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result||"")),r.onerror=()=>n(r.error||new Error("\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25")),r.readAsDataURL(e)})}function Ro(e){if(!e)return null;if(e instanceof Blob)return{blob:e};if(typeof e=="string")return e.startsWith("data:")?{dataUrl:e}:{url:e};if(e.blob instanceof Blob)return{blob:e.blob};if(typeof e.b64_json=="string"&&e.b64_json)return{blob:pa(e.b64_json,e.mime_type||"image/png")};if(typeof e.base64=="string"&&e.base64)return{blob:pa(e.base64,e.mime_type||"image/png")};let t=e.inlineData||e.inline_data;if(t?.data)return{blob:pa(t.data,t.mimeType||t.mime_type||"image/png")};let n=e.fileData?.fileUri||e.file_data?.file_uri;if(typeof n=="string"&&n)return{url:n};if(typeof e.dataUrl=="string"&&e.dataUrl)return{dataUrl:e.dataUrl};if(typeof e.url=="string"&&e.url)return{url:e.url};let r=[e.video_url,e.result_url,e.content?.url,e.content?.video_url].find(o=>typeof o=="string"&&o);return r?{url:r}:null}function ei(e){if(!e)return[];if(Array.isArray(e))return e;if(Array.isArray(e.candidates)){let n=e.candidates.flatMap(r=>r?.content?.parts||[]).filter(r=>r?.inlineData?.data||r?.inline_data?.data||r?.fileData?.fileUri||r?.file_data?.file_uri);if(n.length)return n}for(let t of["data","images","results","output"])if(Array.isArray(e[t]))return e[t];return[e]}function ua(e,t){if(er.has(e))return er.get(e);let n=URL.createObjectURL(t);return er.set(e,n),n}function Qo(e,t){if(nn.has(e))return nn.get(e);let n=URL.createObjectURL(t);return nn.set(e,n),n}function rn(e){return er.get(e)||""}function Dn(e){return nn.get(e)||""}function ti(e){return Xa.add(e),()=>Xa.delete(e)}function Zo(e){for(let t of Xa)try{t(e)}catch{}}function ni({originalUrl:e="",previewUrl:t="",forceOriginal:n=!1,renderedPx:r=0}={}){return n||r>dc?e||t||"":t||e||""}function ri(e){if(!e)return;let t=er.get(e);t&&(URL.revokeObjectURL(t),er.delete(e));let n=nn.get(e);n&&(URL.revokeObjectURL(n),nn.delete(e)),Br.delete(e)}async function $n(e){if(typeof createImageBitmap=="function"&&e.type!=="image/svg+xml")try{let t=await createImageBitmap(e),n={width:t.width,height:t.height};return t.close(),n}catch{}return new Promise((t,n)=>{let r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t({width:o.naturalWidth,height:o.naturalHeight})},o.onerror=()=>{URL.revokeObjectURL(r),n(new Error("\u56FE\u7247\u89E3\u7801\u5931\u8D25"))},o.src=r})}async function uc(e){if(!(e instanceof Blob)||!e.size||!e.type?.startsWith("image/")||e.type==="image/svg+xml"||typeof createImageBitmap!="function")return null;let t=null;try{t=await createImageBitmap(e);let n=t.width,r=t.height;if(!n||!r)return null;let o=Math.min(1,fc/Math.max(n,r));if(o===1&&(e.type==="image/webp"||e.size<=3e5))return null;let a=Math.max(1,Math.round(n*o)),i=Math.max(1,Math.round(r*o));if(typeof OffscreenCanvas<"u"){let c=new OffscreenCanvas(a,i),s=c.getContext("2d");if(!s)return null;s.drawImage(t,0,0,a,i);let f=await c.convertToBlob({type:"image/webp",quality:qo}).catch(()=>null);return f&&f.size?{blob:f,width:a,height:i,origWidth:n,origHeight:r}:null}if(typeof document<"u"){let c=document.createElement("canvas");c.width=a,c.height=i;let s=c.getContext("2d");if(!s)return null;s.drawImage(t,0,0,a,i);let f=await new Promise(d=>c.toBlob(d,"image/webp",qo));return f&&f.size?{blob:f,width:a,height:i,origWidth:n,origHeight:r}:null}return null}catch{return null}finally{try{t?.close()}catch{}}}function vr(e){if(!e)return Promise.resolve("");if(nn.has(e))return Promise.resolve(nn.get(e));if(Br.has(e))return Promise.resolve("");if(da.has(e))return da.get(e);let t=Jo.then(async()=>{if(nn.has(e))return nn.get(e);let n=await et(pe.imagePreviews,e).catch(()=>null);if(n?.blob){let i=Qo(e,n.blob);return Zo(e),i}let r=await et(pe.imageFiles,e).catch(()=>null);if(!r?.blob)return Br.add(e),"";let o=await uc(r.blob);if(!o?.blob)return Br.add(e),"";await pn(pe.imagePreviews,e,{blob:o.blob,type:o.blob.type,bytes:o.blob.size,width:o.width,height:o.height,at:Date.now()}).catch(()=>{});let a=Qo(e,o.blob);return Zo(e),a}).finally(()=>{da.delete(e)});return Jo=t.catch(()=>""),da.set(e,t),t}function wt(e="image"){let t=Math.random().toString(36).slice(2,10);return`${e}:${Date.now().toString(36)}${t}`}async function Bt(e,t,n={}){let r=n.store||pe.imageFiles;if(!(t instanceof Blob)||!t.size)throw new Error("\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u4EF6");await pn(r,e,{blob:t,type:t.type,bytes:t.size,at:Date.now(),...n}),Br.delete(e);let o=nn.get(e);return o&&(URL.revokeObjectURL(o),nn.delete(e)),r===pe.imageFiles&&t.type?.startsWith("image/")&&vr(e),{storageKey:e,bytes:t.size,mimeType:t.type}}async function Or(e){return e?et(pe.imageFiles,e).catch(()=>null):null}async function br(e){if(!e)return null;let t=await et(pe.imageFiles,e).catch(()=>null);return t?.blob?t:et(pe.mediaFiles,e).catch(()=>null)}async function Lr(e){if(!e)return"";let t=await br(e);return t?.blob?hr(t.blob):""}async function ht(e){if(!e)return"";let t=er.get(e);if(t)return t;let n=await br(e);return n?.blob?ua(e,n.blob):""}async function ai(e,{storageKey:t,signal:n,fetchImpl:r=fetch}={}){if(!e)throw new Error("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247");if(e.blob){let i=t||wt(),c=await $n(e.blob).catch(()=>({width:0,height:0}));return{...await Bt(i,e.blob,{mimeType:e.blob.type,width:c.width,height:c.height}),width:c.width,height:c.height,url:ua(i,e.blob),source:"blob",degraded:!1}}let o=e.dataUrl||(typeof e.url=="string"&&e.url.startsWith("data:")?e.url:"");if(o){let i=pc(o),c=t||wt(),s=await $n(i).catch(()=>({width:0,height:0}));return{...await Bt(c,i,{mimeType:i.type,width:s.width,height:s.height}),width:s.width,height:s.height,url:ua(c,i),source:"data-url",degraded:!1}}let a=e.url;try{let i=await r(a,{signal:n,cache:"force-cache"});if(!i.ok)throw new Error(`HTTP ${i.status}`);let c=await i.blob();if(!c.size)throw new Error("\u7A7A\u6587\u4EF6");let s=t||wt(),f=await $n(c).catch(()=>({width:0,height:0}));return{...await Bt(s,c,{mimeType:c.type,remoteUrl:a,width:f.width,height:f.height}),url:ua(s,c),remoteUrl:a,source:"downloaded",degraded:!1,width:f.width,height:f.height}}catch(i){if(i?.name==="AbortError"||n?.aborted)throw i;return{storageKey:"",bytes:0,mimeType:"",url:a,remoteUrl:a,source:"remote",degraded:!0}}}var fc,qo,dc,er,nn,Br,da,Xa,Jo,Gn=Yn(()=>{kn();Vn();fc=768,qo=.84,dc=960;er=new Map,nn=new Map,Br=new Set,da=new Map,Xa=new Set,Jo=Promise.resolve()});function Bn(e,t=!0){let n=Math.max(256,Math.min(4096,Math.round(Number(e)||1024)));return t&&(n=Math.max(256,Math.round(n/16)*16)),n}function On(e){let t=String(e||"").trim().toLowerCase().match(/^(\d+)x(\d+)$/);return t?{width:Number(t[1]),height:Number(t[2])}:null}function on({resolution:e="\u81EA\u52A8",ratio:t="1:1",customSize:n="",align16:r=!0}={}){let o=On(n);if(o)return`${Bn(o.width,r)}x${Bn(o.height,r)}`;let a=String(e||"\u81EA\u52A8").toLowerCase(),i=t==="auto"?"\u81EA\u52A8":t||"1:1";if(Ti[a]?.[i])return Ti[a][i];if((a==="\u81EA\u52A8"||a==="auto")&&$i[i])return $i[i];let c=a==="4k"?3072:a==="2k"?2048:1024,[s,f]=String(i).split(":").map(Number),d=Number.isFinite(s)&&Number.isFinite(f)&&s>0&&f>0?s/f:1,m=Bn(Math.sqrt(c*c*d),r),p=Bn(Math.sqrt(c*c/d),r);return`${m}x${p}`}function Di({ratio:e="1:1",resolution:t="\u81EA\u52A8"}={}){let n={};e&&e!=="\u81EA\u52A8"&&e!=="auto"&&(n.aspectRatio=e);let r=String(t||"").toLowerCase();return(r==="1k"||r==="2k"||r==="4k")&&(n.imageSize=r.toUpperCase()),Object.keys(n).length?n:void 0}function to(e){let t=Array.isArray(e?.images)&&e.images.length?e.images.find(o=>o.id===e.primaryImageId)||e.images[0]:null,n=Number(t?.width)||Number(e?.metadata?.width)||0,r=Number(t?.height)||Number(e?.metadata?.height)||0;if(n>0&&r>0){let o=Math.max(n,r),a=Math.min(n,r),i=n,c=r;if(o>4096){let s=4096/o;i=n*s,c=r*s}else if(a<256){let s=256/a;i=Math.min(4096,n*s),c=Math.min(4096,r*s)}return`${Bn(i,!0)}x${Bn(c,!0)}`}return on({resolution:e?.resolution||"\u81EA\u52A8",ratio:e?.ratio||"1:1"})}function Pi(e,t){let n=String(e||"").trim();if(!t||t<=0)return n;let r=Array.from({length:t},(o,a)=>`\u56FE\u7247${a+1}`).join("\u3001");return n?`\u53C2\u8003\u56FE\u7247\u7F16\u53F7\uFF1A${r}\u3002
${n}`:`\u53C2\u8003\u56FE\u7247\u7F16\u53F7\uFF1A${r}\u3002`}function Bi(e){return`\u53C2\u8003\u56FE\u72471\u4E3A\u539F\u56FE\uFF0C\u56FE\u72472\u662F\u5728\u539F\u56FE\u4E0A\u7528\u84DD\u8272\u534A\u900F\u660E\u6807\u6CE8\u51FA\u7684\u5F85\u4FEE\u6539\u533A\u57DF\u3002\u8BF7\u53EA\u4FEE\u6539\u84DD\u8272\u6807\u6CE8\u8986\u76D6\u7684\u533A\u57DF\uFF0C\u5176\u4F59\u533A\u57DF\u4E0E\u539F\u56FE\u4FDD\u6301\u5B8C\u5168\u4E00\u81F4\uFF0C\u8F93\u51FA\u4E0E\u539F\u56FE\u76F8\u540C\u5C3A\u5BF8\u7684\u5B8C\u6574\u56FE\u7247\uFF0C\u5E76\u4E14\u7ED3\u679C\u4E2D\u4E0D\u8981\u4FDD\u7559\u4EFB\u4F55\u84DD\u8272\u6807\u6CE8\u3002\u4FEE\u6539\u8981\u6C42\uFF1A${String(e||"").trim()}`}function Oi({horizontal:e=0,pitch:t=0,distance:n=5,wide:r=!1}={}){let o=Math.round(Number(e)||0),a=Math.round(Number(t)||0),i=Number(n)||5,c=o===0?"\u6B63\u9762\u5E73\u89C6\u65B9\u4F4D\uFF08\u6C34\u5E73\u504F\u8F6C 0\xB0\uFF09":o>0?`\u5411\u53F3\u4FA7\u73AF\u7ED5\u65CB\u8F6C ${o}\xB0`:`\u5411\u5DE6\u4FA7\u73AF\u7ED5\u65CB\u8F6C ${Math.abs(o)}\xB0`,s=a===0?"\u6C34\u5E73\u89C6\u7EBF\uFF08\u4FEF\u4EF0 0\xB0\uFF09":a>0?`\u5411\u4E0A\u62AC\u5347\u5E76\u4FEF\u62CD ${a}\xB0`:`\u964D\u4F4E\u673A\u4F4D\u5E76\u4EF0\u62CD ${Math.abs(a)}\xB0`,f=i<=3?"\u7279\u5199\u8FD1\u666F\u8DDD\u79BB\uFF08\u653E\u5927\u4E3B\u4F53\u7EC6\u8282\uFF09":i>=7.5?"\u8FDC\u666F\u5168\u8C8C\u8DDD\u79BB\uFF08\u7EB3\u5165\u66F4\u591A\u73AF\u5883\u80CC\u666F\uFF09":`\u4E2D\u666F\u8DDD\u79BB\uFF08\u955C\u5934\u8DDD\u79BB\u7CFB\u6570 ${i.toFixed(1)}\uFF09`;return`\u4FDD\u6301\u53C2\u8003\u56FE\u72471\u4E2D\u7684\u4E3B\u4F53\u5916\u89C2\u3001\u670D\u9970\u7279\u5F81\u3001\u6750\u8D28\u5149\u5F71\u4E0E\u6574\u4F53\u98CE\u683C\u5B8C\u5168\u4E00\u81F4\uFF0C\u4EC5\u4ECE\u65B0\u7684\u4E09\u7EF4\u6444\u50CF\u673A\u673A\u4F4D\u91CD\u65B0\u62CD\u6444\u751F\u6210\u753B\u9762\uFF1A\u6C34\u5E73\u89D2\u5EA6${c}\uFF0C\u5782\u76F4\u89C6\u89D2${s}\uFF0C\u62CD\u6444\u666F\u522B\u4E3A${f}\uFF0C\u91C7\u7528${r?"\u5E7F\u89D2\u955C\u5934\u900F\u89C6\u6548\u679C":"\u6807\u51C6\u955C\u5934\u81EA\u7136\u900F\u89C6\u6548\u679C"}\u3002`}var Ti,$i,jr=Yn(()=>{Ti={"1k":{\u81EA\u52A8:"1024x1024",auto:"1024x1024","1:1":"1024x1024","2:3":"832x1248","3:2":"1248x832","3:4":"864x1152","4:3":"1152x864","16:9":"1536x864","9:16":"864x1536","21:9":"1792x768","9:21":"768x1792"},"2k":{\u81EA\u52A8:"2048x2048",auto:"2048x2048","1:1":"2048x2048","2:3":"1664x2496","3:2":"2496x1664","3:4":"1728x2304","4:3":"2304x1728","16:9":"2560x1440","9:16":"1440x2560","21:9":"3072x1344","9:21":"1344x3072"},"4k":{\u81EA\u52A8:"4096x4096",auto:"4096x4096","1:1":"4096x4096","2:3":"2560x3840","3:2":"3840x2560","3:4":"3072x4096","4:3":"4096x3072","16:9":"3840x2160","9:16":"2160x3840","21:9":"4096x1792","9:21":"1792x4096"}},$i={\u81EA\u52A8:"1024x1024",auto:"1024x1024","1:1":"1024x1024","2:3":"832x1248","3:2":"1248x832","3:4":"864x1152","4:3":"1152x864","16:9":"1536x864","9:16":"864x1536","21:9":"1792x768","9:21":"768x1792"}});function tl(e){let t=e.filter(Boolean);if(!t.length)return;if(t.length===1)return t[0];if(typeof AbortSignal.any=="function")return AbortSignal.any(t);let n=new AbortController,r=()=>t.forEach(a=>a.removeEventListener("abort",o));function o(a){r(),n.abort(a?.target?.reason??new DOMException("Aborted","AbortError"))}for(let a of t){if(a.aborted){o({target:a});break}a.addEventListener("abort",o,{once:!0})}return n.signal}function nl(e){if(!e||e<=0)return;if(typeof AbortSignal.timeout=="function")return AbortSignal.timeout(e);let t=new AbortController,n=setTimeout(()=>t.abort(new DOMException(`\u8BF7\u6C42\u8D85\u8FC7 ${e}ms \u6CA1\u6709\u54CD\u5E94`,"TimeoutError")),e);return t.signal.addEventListener("abort",()=>clearTimeout(n),{once:!0}),t.signal}function ji({signal:e,timeoutMs:t}={}){return tl([e,nl(t)])}function Nn(e){return e?.name==="AbortError"||e?.name==="TimeoutError"}var Fi=Yn(()=>{});function il(e){return e.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim().slice(0,120)||"\u7A7A\u9875\u9762"}function Mn(e,t=0){if(e==null||t>5||typeof e=="number"||typeof e=="boolean")return"";if(typeof e=="string"){let a=e.trim();if(!a)return"";if(/^<(!doctype|html|head|body|\?xml)/i.test(a)||/<[a-z][\s\S]*>/i.test(a))return`\u4E0A\u6E38\u8FD4\u56DE\u4E86\u7F51\u9875\u800C\u4E0D\u662F\u63A5\u53E3\u6570\u636E\uFF1A${il(a)}`;if(/^[[{]/.test(a))try{return Mn(JSON.parse(a),t+1)}catch{return a.slice(0,200)}return a.slice(0,200)}if(Array.isArray(e)){for(let a of e){let i=Mn(a,t+1);if(i)return i}return""}let n=e.error,r=typeof n=="string"?n:n&&typeof n=="object"?Mn(n.message,t+1)||Mn(n.msg,t+1):"",o=typeof e.code=="string"?e.code:"";return ol[o]||Mn(e.msg,t+1)||Mn(e.message,t+1)||Mn(r,t+1)||Mn(e.detail,t+1)||Mn(e.error,t+1)||""}function Hi(e,{timeoutMs:t}={}){if(e?.name==="AbortError")return new Pe("\u5DF2\u53D6\u6D88",{code:"ABORTED",cause:e});if(e?.name==="TimeoutError")return new Pe(`\u8BF7\u6C42\u8D85\u65F6\uFF1A\u8D85\u8FC7 ${Math.round((t||0)/1e3)} \u79D2\u6CA1\u6709\u54CD\u5E94`,{code:"TIMEOUT",cause:e});let n=e?.cause?.message||e?.message||"",r=n&&n!=="Failed to fetch"?`\uFF1A${n}`:"";return new Pe(`\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25${r}`,{code:"NETWORK",cause:e})}function Yi(e,t,n="\u8BF7\u6C42\u5931\u8D25"){let r=e?.status??0,a=(typeof t?.error=="string"?t.error.trim():"")||Mn(t),i=al[r];if(t?.cancelled||r===499)return new Pe("\u5DF2\u53D6\u6D88",{code:"ABORTED",status:r});if(a)return new Pe(i?`${a}\uFF08${i}\uFF09`:a,{code:`HTTP_${r}`,status:r,body:t});let c=rl[r]||n;return new Pe(`${c}\uFF08HTTP ${r}\uFF09`,{code:`HTTP_${r}`,status:r,body:t})}var rl,al,ol,Pe,ka=Yn(()=>{rl={400:"\u8BF7\u6C42\u683C\u5F0F\u6709\u8BEF",401:"\u9274\u6743\u5931\u8D25",403:"\u6CA1\u6709\u6743\u9650",404:"\u63A5\u53E3\u6216\u6A21\u578B\u4E0D\u5B58\u5728",405:"\u63A5\u53E3\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42\u65B9\u6CD5",408:"\u4E0A\u6E38\u54CD\u5E94\u8D85\u65F6",409:"\u8BF7\u6C42\u51B2\u7A81\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",413:"\u8BF7\u6C42\u4F53\u8FC7\u5927\uFF1A\u53C2\u8003\u56FE\u592A\u591A\u6216\u63D0\u793A\u8BCD\u592A\u957F",415:"\u4E0A\u6E38\u4E0D\u652F\u6301\u8FD9\u79CD\u5185\u5BB9\u7C7B\u578B",422:"\u4E0A\u6E38\u62D2\u7EDD\u4E86\u8FD9\u4E2A\u53C2\u6570\u7EC4\u5408",429:"\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41",499:"\u5DF2\u53D6\u6D88",500:"\u4E0A\u6E38\u670D\u52A1\u51FA\u9519",502:"\u4E0A\u6E38\u7F51\u5173\u9519\u8BEF",503:"\u4E0A\u6E38\u7E41\u5FD9",504:"\u4E0A\u6E38\u7F51\u5173\u8D85\u65F6"},al={401:"API Key \u6CA1\u586B\u6216\u5DF2\u5931\u6548",403:"API Key \u65E0\u6743\u7528\u8FD9\u4E2A\u6A21\u578B",413:"\u51CF\u5C11\u53C2\u8003\u56FE\uFF0C\u6216\u628A\u63D0\u793A\u8BCD\u62C6\u77ED",429:"\u964D\u5E76\u53D1\u6216\u7A0D\u540E\u91CD\u8BD5"},ol={API_KEY_REQUIRED:"\u6CA1\u6709\u586B API Key",INVALID_API_KEY:"API Key \u65E0\u6548\u6216\u5DF2\u8FC7\u671F",RATE_LIMITED:"\u4E0A\u6E38\u9650\u6D41\uFF0C\u7A0D\u540E\u91CD\u8BD5",NOT_FOUND:"\u4E0A\u6E38\u6CA1\u6709\u8FD9\u4E2A\u63A5\u53E3\u6216\u6A21\u578B",INSUFFICIENT_QUOTA:"\u4E0A\u6E38\u989D\u5EA6\u4E0D\u8DB3",CONTENT_POLICY:"\u5185\u5BB9\u88AB\u4E0A\u6E38\u5B89\u5168\u7B56\u7565\u62E6\u4E0B\uFF0C\u6362\u4E2A\u63CF\u8FF0\u518D\u8BD5"};Pe=class extends Error{constructor(t,{code:n,status:r,body:o,cause:a}={}){super(t),this.name="ApiError",this.code=n||"REQUEST_FAILED",this.status=r??0,this.body=o,a&&(this.cause=a)}}});var Qi={};mo(Qi,{VIDEO_DEADLINE_MS:()=>Wi,createVideoTask:()=>ll,normalizeStatus:()=>Vi,pickResultUrl:()=>ao,pickTaskId:()=>ro,pollVideoTask:()=>qi,pollVideoTaskOnce:()=>Gi,resumeVideoTask:()=>fl,saveVideoResult:()=>Ji});function ro(e){if(!e||typeof e!="object")return"";for(let t of["id","task_id","taskId"])if(typeof e[t]=="string"&&e[t])return e[t];for(let t of["data","task","result"]){let n=e[t];if(n&&typeof n=="object"){let r=ro(n);if(r)return r}}return""}function ao(e){if(!e||typeof e!="object")return"";let t=[e.url,e.video_url,e.result_url,e.output_url,e.download_url].find(n=>typeof n=="string"&&n);if(t)return t;for(let n of["output","result","data","video"]){let r=e[n];if(r&&typeof r=="object"){let o=ao(r);if(o)return o}}return""}function Vi(e){let t=String(e?.status||e?.state||e?.task_status||"").toLowerCase();return["completed","succeeded","success","done","finished"].includes(t)?"completed":["failed","error","cancelled","canceled"].includes(t)?"failed":["queued","pending","running","processing","in_progress","generating"].includes(t)||t?"pending":"unknown"}async function ll({channel:e,model:t,prompt:n,params:r={},signal:o}){if(!String(n||"").trim())throw new Pe("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD",{code:"NO_PROMPT"});let a={model:t,prompt:n};r.seconds&&(a.seconds=String(r.seconds)),r.size&&(a.size=r.size);let i;try{i=await Ln({channel:e,path:"v1/videos",payload:a,timeoutMs:sl,signal:o})}catch(s){throw/not supported|unsupported|not found|404/i.test(s.message||"")?new Pe(`\u8FD9\u4E2A\u6E20\u9053\u4E0D\u652F\u6301\u89C6\u9891\u751F\u6210\uFF08\u4E0A\u6E38\u8FD4\u56DE\uFF1A${s.message}\uFF09\u3002\u6362\u4E00\u4E2A\u652F\u6301\u89C6\u9891\u7684\u6E20\u9053\u518D\u8BD5\u3002`,{code:"VIDEO_UNSUPPORTED"}):s}let c=ro(i);if(!c)throw new Pe("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u4EFB\u52A1 ID",{code:"NO_TASK_ID",body:i});return{taskId:c,raw:i}}async function Gi({channel:e,taskId:t,signal:n}){let r=await Ln({channel:e,path:`v1/videos/${encodeURIComponent(t)}`,method:"GET",timeoutMs:cl,signal:n}),o=Vi(r),a=ao(r);return o==="completed"&&!a?{status:"completed",url:"",needContent:!0,raw:r}:o==="failed"?{status:"failed",error:r?.error?.message||r?.message||"\u4E0A\u6E38\u62A5\u544A\u4EFB\u52A1\u5931\u8D25",raw:r}:{status:o==="completed"?"completed":"pending",url:a,raw:r}}async function qi({channel:e,taskId:t,signal:n,deadlineMs:r=Wi,onTick:o}){let a=Date.now(),i=0,c=0;for(;Date.now()-a<r;){if(n?.aborted)throw new DOMException("Aborted","AbortError");i+=1;let s=null,f="";try{s=await Gi({channel:e,taskId:t,signal:n})}catch(d){if(d?.name==="AbortError")throw d;if(d?.status===429||/429|rate limit/i.test(d.message||"")){let p=Xi[Math.min(c,Xi.length-1)];c+=1,o?.({status:"pending",elapsed:Date.now()-a,attempt:i,note:`\u9650\u6D41\uFF0C${Math.round(p/1e3)}s \u540E\u91CD\u8BD5`}),await no(p,n);continue}f=d?.message||"\u67E5\u8BE2\u5931\u8D25",o?.({status:"pending",elapsed:Date.now()-a,attempt:i,note:f}),await no(2500,n);continue}if(s.status==="completed")return{...s,elapsed:Date.now()-a};if(s.status==="failed")throw new Pe(s.error||"\u89C6\u9891\u751F\u6210\u5931\u8D25",{code:"VIDEO_FAILED",body:s.raw});o?.({status:"pending",elapsed:Date.now()-a,attempt:i}),await no(i<6?2500:5e3,n)}throw new Pe(`\u7B49\u4E86 ${Math.round(r/6e4)} \u5206\u949F\u8FD8\u6CA1\u5B8C\u6210\u3002\u4EFB\u52A1\u53EF\u80FD\u8FD8\u5728\u8DD1\uFF0C\u5237\u65B0\u540E\u53EF\u4EE5\u7EE7\u7EED\u7B49\u3002`,{code:"VIDEO_TIMEOUT"})}async function Ji({url:e,blob:t,taskId:n,signal:r}){let o=t;if(!o){if(!e)throw new Pe("\u4E0A\u6E38\u6CA1\u6709\u7ED9\u51FA\u89C6\u9891\u5730\u5740",{code:"NO_VIDEO_URL"});let c=await fetch(e,{signal:r});if(!c.ok)throw new Pe(`\u4E0B\u8F7D\u89C6\u9891\u5931\u8D25\uFF1AHTTP ${c.status}`,{code:"DOWNLOAD_FAILED"});o=await c.blob()}if(!o.size)throw new Pe("\u4E0B\u8F7D\u5230\u7684\u89C6\u9891\u662F\u7A7A\u7684",{code:"EMPTY_VIDEO"});let a=wt("video");return{...await Bt(a,o,{store:pe.mediaFiles,mimeType:o.type||"video/mp4",source:"video-task",taskId:n}),taskId:n}}async function fl({channel:e,taskId:t,signal:n,onTick:r}){let o=await qi({channel:e,taskId:t,signal:n,onTick:r});return Ji({url:o.url,blob:null,taskId:t,signal:n})}var sl,cl,Wi,Xi,no,Zi=Yn(()=>{Hr();ka();Gn();kn();sl=6e4,cl=3e4,Wi=15*6e4,Xi=[2500,4500,8100,14600,2e4],no=(e,t)=>new Promise((n,r)=>{if(t?.aborted){r(new DOMException("Aborted","AbortError"));return}let o=setTimeout(()=>{t?.removeEventListener("abort",a),n()},e);function a(){clearTimeout(o),r(new DOMException("Aborted","AbortError"))}t?.addEventListener("abort",a,{once:!0})})});function dl(e){if(!e)throw new Pe("\u8FD8\u6CA1\u6709\u9009\u62E9\u6E20\u9053\uFF0C\u5148\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A",{code:"NO_CHANNEL"});if(!String(e.baseUrl||"").trim())throw new Pe("\u6E20\u9053\u6CA1\u6709\u586B Base URL",{code:"NO_BASE_URL"});if(!String(e.apiKey||"").trim())throw new Pe("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key",{code:"NO_API_KEY",status:401});return e}async function pl(){try{let e=typeof AbortSignal.timeout=="function"?AbortSignal.timeout(3e3):void 0,t=await fetch(Ri+"ping",{headers:{"sec-fetch-site":"same-origin"},cache:"no-store",signal:e});return t.ok?!!(await t.json().catch(()=>null))?.ok:!1}catch{return!1}}async function Ln({channel:e,path:t,method:n="POST",payload:r,multipart:o,headers:a,timeoutMs:i,signal:c}){dl(e);let s=ji({signal:c,timeoutMs:i||rr}),f;try{f=await fetch(Ri+"relay",{method:"POST",headers:{"content-type":"application/json","sec-fetch-site":"same-origin"},body:JSON.stringify({channel:{baseUrl:e.baseUrl,apiKey:e.apiKey,protocol:e.protocol||"openai"},path:t,method:n,payload:r,multipart:o,headers:a,timeoutMs:i||rr}),signal:s})}catch(p){let v=await pl(),P=Hi(p,{timeoutMs:i||rr});throw v?new Pe(`${P.message}\uFF08\u63D2\u4EF6\u670D\u52A1\u5728\u7EBF\uFF0C\u662F\u8FD9\u6B21\u8BF7\u6C42\u6CA1\u53D1\u51FA\u53BB\uFF0C\u53EF\u91CD\u8BD5\uFF09`,{code:"NETWORK",cause:p}):new Pe(`${P.message}\uFF08\u63D2\u4EF6\u670D\u52A1\u6CA1\u6709\u54CD\u5E94\uFF0C\u8BF7\u91CD\u542F DSH\uFF09`,{code:"NETWORK",cause:p})}let d=await f.text(),m=null;if(d){let p=d.trim();if(/^<(!doctype|html|head|body|\?xml)/i.test(p)){let v=p.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim().slice(0,120);throw new Pe(`\u4E0A\u6E38\u8FD4\u56DE\u4E86\u7F51\u9875\u800C\u4E0D\u662F\u63A5\u53E3\u6570\u636E\uFF1A${v||"\u7A7A\u9875\u9762"}`,{code:"UPSTREAM_HTML",status:f.status})}try{m=JSON.parse(p)}catch{m={error:p.slice(0,200)}}}if(!f.ok)throw Yi(f,m);if(m&&typeof m=="object"&&typeof m.error=="string"&&m.error)throw new Pe(m.error,{code:"UPSTREAM_ERROR",status:m.upstreamStatus||0,body:m});return m}function ul(e){let t=String(e||"").match(/^data:([^;,]+)(?:;[^,]*)?,([\s\S]+)$/i);return t?{inlineData:{mimeType:t[1]||"image/png",data:t[2].replace(/\s+/g,"")}}:{fileData:{fileUri:e,mimeType:"image/png"}}}async function oo(e,t){let n=Math.max(1,Math.min(10,Number(e)||1));if(n===1){let c=await t(0);return{items:c,failed:[],short:Math.max(0,1-c.length)}}let r=new Array(n).fill(null),o=[],a=await Promise.allSettled(Array.from({length:n},(c,s)=>t(s)));a.forEach((c,s)=>{if(c.status==="fulfilled"){let f=c.value?.[0];f?r[s]={...f,index:s}:o.push({index:s,error:"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247"})}else{if(c.reason?.name==="AbortError"||Nn(c.reason))throw c.reason;o.push({index:s,error:c.reason?.message||"\u751F\u6210\u5931\u8D25"})}});let i=r.filter(Boolean);if(!i.length){let c=a.find(s=>s.status==="rejected")?.reason;throw c||new Pe(o[0]?.error||"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247",{code:"NO_IMAGE"})}return{items:i,failed:o,short:Math.max(0,n-i.length-o.length)}}async function es({channel:e,model:t,prompt:n,imageDataUrls:r=[],params:o={},signal:a,onProgress:i}){let c=Di({ratio:o.ratio||"1:1",resolution:o.resolution||"\u81EA\u52A8"}),s=`v1beta/models/${encodeURIComponent(t)}:generateContent`,d={contents:[{role:"user",parts:[...r.map(v=>ul(v)),...n?[{text:n}]:[]]}],generationConfig:{responseModalities:["IMAGE","TEXT"],...c?{imageConfig:c}:{}}},m=Math.max(1,Math.min(10,Number(o.count)||1));i?.({stage:"request",n:m});let p=await oo(m,async v=>{let P=await Ln({channel:e,path:s,payload:d,timeoutMs:rr,signal:a});if(P?.promptFeedback?.blockReason)throw new Pe(`Gemini \u5B89\u5168\u7B56\u7565\u62E6\u622A\uFF08${P.promptFeedback.blockReason}\uFF09`,{code:"GEMINI_BLOCKED"});let{results:T}=await io({raw:P,signal:a,slotOffset:v,onProgress:i});return T});return{ok:!0,items:p.items,failed:p.failed,requested:m,got:p.items.length,short:p.short}}async function ml({channel:e,model:t,prompt:n,params:r={},signal:o,onProgress:a}){if(e?.protocol==="gemini")return es({channel:e,model:t,prompt:n,params:r,signal:o,onProgress:a});let i=Math.max(1,Math.min(10,Number(r.count)||1)),c=on({resolution:r.resolution||"\u81EA\u52A8",ratio:r.ratio||"1:1",customSize:r.size&&/^\d+x\d+$/i.test(String(r.size))?r.size:r.ratio?"":r.size,align16:r.align16!==!1}),s={model:t,prompt:n,n:1,size:c};r.quality&&r.quality!=="\u81EA\u52A8"&&(s.quality=ts(r.quality)),r.background&&(s.background=r.background);let f=r.outputFormat||(r.background==="transparent"?"png":"");f&&(s.output_format=f),/gpt-image/i.test(String(t||""))||(s.response_format="b64_json"),a?.({stage:"request",n:i});let d=await oo(i,async m=>{let p=await Ln({channel:e,path:"v1/images/generations",payload:s,timeoutMs:rr,signal:o}),{results:v}=await io({raw:p,signal:o,slotOffset:m,onProgress:a});return v});return{ok:!0,items:d.items,failed:d.failed,requested:i,got:d.items.length,short:d.short}}async function io({raw:e,signal:t,slotOffset:n=0,onProgress:r}){let o=ei(e);if(!o.length)throw new Pe("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247",{code:"NO_IMAGE",body:e});r?.({stage:"save",n:o.length});let a=new Array(o.length).fill(null),i=[];await Promise.all(o.map(async(s,f)=>{let d=Ro(s);if(d)try{let m=await ai(d,{signal:t,storageKey:wt("image")}),p={...m,width:Number(m?.width)||Number(s?.width)||0,height:Number(m?.height)||Number(s?.height)||0,revisedPrompt:s?.revised_prompt||""};a[f]=p,r?.({stage:"item",index:n+f,item:p})}catch(m){if(m?.name==="AbortError")throw m;i.push({index:n+f,error:m.message})}}));let c=a.filter(Boolean);if(!c.length)throw new Pe(i[0]?.error||"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u7684\u56FE\u7247",{code:"NO_IMAGE",body:e});return{results:c,failed:i}}async function gl({channel:e,model:t,prompt:n,imageDataUrl:r,imageDataUrls:o,params:a={},signal:i,onProgress:c}){let s=Array.isArray(o)&&o.length?o.filter(Boolean):Array.isArray(a.imageDataUrls)&&a.imageDataUrls.length?a.imageDataUrls.filter(Boolean):r?[r]:[];if(!s.length)throw new Pe("\u6CA1\u6709\u53EF\u7F16\u8F91\u7684\u56FE\u7247",{code:"NO_IMAGE_INPUT"});if(!String(n||"").trim())throw new Pe("\u5148\u5199\u4E00\u53E5\u8981\u6539\u4EC0\u4E48",{code:"NO_PROMPT"});let f=a.skipRefPrefix?String(n||"").trim():Pi(n,s.length);if(e?.protocol==="gemini")return es({channel:e,model:t,prompt:f,imageDataUrls:s,params:a,signal:i,onProgress:c});let d=Math.max(1,Math.min(10,Number(a.count)||1)),m=on({resolution:a.resolution||"\u81EA\u52A8",ratio:a.ratio||"1:1",customSize:a.size&&/^\d+x\d+$/i.test(String(a.size))?a.size:a.ratio||a.resolution&&a.resolution!=="\u81EA\u52A8"?"":a.size||"1024x1024",align16:a.align16!==!1}),p=a.quality&&a.quality!=="\u81EA\u52A8"?ts(a.quality):"",v=a.background||"",P=a.outputFormat||(v==="transparent"?"png":""),T=()=>{let Y={model:t,prompt:f,n:1,size:m,images:s.map(I=>({image_url:I}))};return p&&(Y.quality=p),v&&(Y.background=v),P&&(Y.output_format=P),/gpt-image/i.test(String(t||""))||(Y.response_format="b64_json"),Ln({channel:e,path:"v1/images/edits",payload:Y,timeoutMs:rr,signal:i})},A=()=>{let Y={model:t,prompt:f,n:"1",size:m};p&&(Y.quality=p),v&&(Y.background=v),P&&(Y.output_format=P),/gpt-image/i.test(String(t||""))||(Y.response_format="b64_json");let I=s.map((L,Z)=>({field:s.length>1?"image[]":"image",name:`reference-${Z+1}.png`,dataUrl:L}));return Ln({channel:e,path:"v1/images/edits",multipart:{fields:Y,files:I},timeoutMs:rr,signal:i})},$=e?.editFormat==="multipart"||/api\.openai\.com/i.test(String(e?.baseUrl||""));c?.({stage:"request",n:d});let K=await oo(d,async Y=>{let I;try{I=$?await A():await T()}catch(Z){if(Nn(Z))throw Z;let ue=String(Z?.message||"");if(!$&&(Z?.status===415||/multipart|form-data|unsupported media type/i.test(ue)&&!/images\[\]\.image_url/i.test(ue)))I=await A();else if($&&/images\[\]\.image_url|invalid json|unexpected token/i.test(ue))I=await T();else throw/not supported|unsupported/i.test(ue)?new Pe(`\u8FD9\u4E2A\u6E20\u9053\u4E0D\u652F\u6301\u56FE\u7247\u7F16\u8F91\uFF08\u4E0A\u6E38\u8FD4\u56DE\uFF1A${ue}\uFF09\u3002\u6362\u4E00\u4E2A\u652F\u6301\u7F16\u8F91\u7684\u6E20\u9053\u518D\u8BD5\u3002`,{code:"EDIT_UNSUPPORTED"}):Z}let{results:L}=await io({raw:I,signal:i,slotOffset:Y,onProgress:c});return L});return{ok:!0,items:K.items,failed:K.failed,requested:d,got:K.items.length,short:K.short}}function ts(e){return{\u4F4E:"low",\u4E2D:"medium",\u9AD8:"high",\u6781\u9AD8:"xhigh",\u6700\u9AD8:"max"}[e]||e}async function hl({channel:e,model:t,prompt:n,params:r={},signal:o,onTick:a}){let{createVideoTask:i,pollVideoTask:c,saveVideoResult:s}=await Promise.resolve().then(()=>(Zi(),Qi));a?.({status:"pending",stage:"create"});let{taskId:f}=await i({channel:e,model:t,prompt:n,params:r,signal:o});a?.({status:"pending",stage:"created",taskId:f});let d=await c({channel:e,taskId:f,signal:o,onTick:a}),m=await s({url:d.url,blob:d.blob,taskId:f,signal:o});return{ok:!0,taskId:f,...m}}async function Un({capability:e,channel:t,model:n,prompt:r,params:o={},signal:a,onProgress:i,onTick:c}){switch(e){case"image":return ml({channel:t,model:n,prompt:r,params:o,signal:a,onProgress:i});case"image-edit":return gl({channel:t,model:n,prompt:r,imageDataUrl:o.imageDataUrl,imageDataUrls:o.imageDataUrls,params:o,signal:a,onProgress:i});case"video":return hl({channel:t,model:n,prompt:r,params:o,signal:a,onTick:c});default:throw new Pe(`\u6682\u65F6\u8FD8\u4E0D\u652F\u6301\u300C${e}\u300D\u751F\u6210`,{code:"CAPABILITY_TODO"})}}var Ri,rr,cd,Hr=Yn(()=>{Fi();ka();Gn();jr();Ri="dsh-chunfeng-image/",rr=10*6e4,cd=2*6e4});var nf={};mo(nf,{apply:()=>Rl,inject:()=>Zl});module.exports=Us(nf);var Aa=Zt(require("react"),1);var W=Zt(require("react"),1);var ho=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
   \u5168\u90E8\u8D70 DSH \u522B\u540D\u4EE4\u724C\uFF0C\u8DDF\u968F\u5BBF\u4E3B\u6DF1\u6D45\u8272\uFF0C\u4E0E\u300C\u6625\u98CE\u5DE5\u4F5C\u53F0\u300D\u7684\u753B\u5E03\u540C\u4E00\u5957\u914D\u8272\u3002

   \u515C\u5E95\u503C\u4E0D\u518D\u662F\u300C\u4E00\u4EFD\u6697\u8272\u300D\uFF0C\u800C\u662F**\u4E24\u5957\u771F\u5B9E\u4E3B\u9898**\uFF1A
   - \u5BBF\u4E3B\u6CE8\u5165\u4E86 --dsw-* \u5C31\u7528\u5BBF\u4E3B\u7684\uFF08\u4EE4\u724C\u4F18\u5148\u7EA7\u6700\u9AD8\uFF09\uFF1B
   - \u8131\u79BB\u5BBF\u4E3B\uFF08\u72EC\u7ACB\u9884\u89C8 / \u622A\u56FE / \u5BFC\u51FA\uFF09\u65F6\uFF0C\u7528\u4E0B\u9762\u8FD9\u5F20 DSH \u9759\u6001\u8C03\u8272\u677F\u81EA\u7B97\uFF0C
     \u6240\u4EE5\u660E\u6697\u5207\u6362\u5728\u4E24\u79CD\u73AF\u5883\u4E0B\u90FD\u6210\u7ACB\u3002

   DSH \u7684\u522B\u540D\u4EE4\u724C\u672C\u8EAB\u662F var(--dsw-static-*) \u7684\u4E00\u5C42\u6620\u5C04\uFF0C\u6D45\u8272\u4E0E\u6DF1\u8272\u5404\u6307\u4E00\u5F20\u3002
   \u8FD9\u91CC\u628A\u90A3\u5F20\u6620\u5C04\u5185\u8054\u8FDB\u6765\uFF0C\u53D6\u503C\u4E0E DSH \u6E90\u7801\u4E00\u81F4\uFF08neutral-bluish / deepseek \u4E24\u65CF\uFF09\u3002 */

/* ---------- DSH \u9759\u6001\u8C03\u8272\u677F\uFF08\u4E2D\u6027\u504F\u84DD\uFF0CDSH \u7684\u4E3B\u8272\u76F8\uFF09 ---------- */
.cf-app {
  --dsw-static-neutral-bluish-00: #ffffff;
  --dsw-static-neutral-bluish-50: #f9fafb;
  --dsw-static-neutral-bluish-55: #f5f7fa;
  --dsw-static-neutral-bluish-60: #f5f6f7;
  --dsw-static-neutral-bluish-75: #f0f2f5;
  --dsw-static-neutral-bluish-100: #ebeef2;
  --dsw-static-neutral-bluish-150: #e9ecf2;
  --dsw-static-neutral-bluish-200: #e1e5ee;
  --dsw-static-neutral-bluish-300: #cfd3d6;
  --dsw-static-neutral-bluish-310: #cad2db;
  --dsw-static-neutral-bluish-400: #adb2b8;
  --dsw-static-neutral-bluish-500: #979da6;
  --dsw-static-neutral-bluish-600: #81858c;
  --dsw-static-neutral-bluish-700: #61666b;
  --dsw-static-neutral-bluish-750: #43454a;
  --dsw-static-neutral-bluish-800: #353638;
  --dsw-static-neutral-bluish-850: #2c2c2e;
  --dsw-static-neutral-bluish-875: #232324;
  --dsw-static-neutral-bluish-900: #1b1b1c;
  --dsw-static-neutral-bluish-950: #151517;
  --dsw-static-neutral-bluish-1000: #0f1115;

  --dsw-static-deepseek-50: #edf3fe;
  --dsw-static-deepseek-100: #e4edfd;
  --dsw-static-deepseek-200: #d3e2ff;
  --dsw-static-deepseek-300: #b7c8fe;
  --dsw-static-deepseek-400: #7aaaff;
  --dsw-static-deepseek-450: #5686fe;
  --dsw-static-deepseek-500: #4176e6;
  --dsw-static-deepseek-600: #4868b2;
  --dsw-static-deepseek-800: #34415b;
  --dsw-static-deepseek-900: #283142;
}

/* ---------- \u660E\u8272\u4E3B\u9898\uFF08\u9ED8\u8BA4\uFF09 ---------- */
/* \u89E6\u53D1\u6761\u4EF6\uFF1A\u5BBF\u4E3B\u663E\u5F0F\u58F0\u660E light\uFF0C\u6216\u672A\u58F0\u660E\u6DF1\u6D45\u8272\uFF08\u9ED8\u8BA4\u53D6\u660E\u8272\uFF0C\u753B\u5E03\u7C7B\u5DE5\u5177\u767D\u5E95\u66F4\u5E38\u89C1\uFF09\u3002
   DSH \u5728 <html> \u4E0A\u52A0 class="dark" \u65F6\u7531\u4E0B\u9762\u90A3\u6BB5\u63A5\u7BA1\u3002 */
.cf-app,
.cf-app.light {
  --cf-bg: var(--dsw-alias-bg-base, var(--dsw-static-neutral-bluish-00));
  --cf-bg-sunken: var(--dsw-alias-bg-sunken, var(--dsw-static-neutral-bluish-55));
  --cf-sunken: var(--cf-bg-sunken);
  --cf-panel: var(--dsw-alias-bg-layer-2, var(--dsw-static-neutral-bluish-00));
  --cf-panel-2: var(--dsw-alias-bg-layer-1, var(--dsw-static-neutral-bluish-50));
  --cf-panel-3: var(--dsw-alias-bg-layer-3, var(--dsw-static-neutral-bluish-75));

  --cf-fg: var(--dsw-alias-label-primary, var(--dsw-static-neutral-bluish-1000));
  --cf-fg-2: var(--dsw-alias-label-secondary, var(--dsw-static-neutral-bluish-700));
  --cf-muted: var(--dsw-alias-label-tertiary, var(--dsw-static-neutral-bluish-600));
  --cf-caption: var(--dsw-alias-label-caption, var(--dsw-static-neutral-bluish-600));

  --cf-line: var(--dsw-alias-border-l2, rgb(15 17 21 / 0.09));
  --cf-line-strong: var(--dsw-alias-border-l4, rgb(15 17 21 / 0.16));

  --cf-primary: var(--dsw-alias-button-primary-fill, var(--dsw-static-neutral-bluish-1000));
  --cf-primary-fg: var(--dsw-alias-label-primary-inverted, var(--dsw-static-neutral-bluish-00));
  --cf-primary-hover: var(--dsw-alias-button-primary-hover, var(--dsw-static-neutral-bluish-800));
  --cf-link: var(--dsw-alias-link, var(--dsw-static-deepseek-500));
  --cf-accent: var(--cf-link);
  --cf-on-accent: #ffffff;
  --cf-accent-soft: color-mix(in srgb, var(--cf-link) 11%, transparent);

  --cf-hover: var(--dsw-alias-interactive-bg-hover, rgb(15 17 21 / 0.05));
  --cf-active: var(--dsw-alias-interactive-bg-active, rgb(15 17 21 / 0.09));
  --cf-focus: var(--dsw-alias-border-focus, var(--dsw-static-deepseek-450));
  --cf-danger: #c0392b;
  --cf-success: #16a34a;
  --cf-scrim-bg: rgb(15 17 21 / 0.42);

  /* \u9AD8\u4E0D\u900F\u660E\u5EA6\u9762\u677F\u5E95\uFF1A\u6D88\u9664\u591A\u5C42 backdrop-filter \u7684\u6BCF\u5E27\u79BB\u5C4F\u91CD\u91C7\u6837\uFF0C\u517C\u987E\u901A\u900F\u611F */
  --cf-glass: color-mix(in srgb, var(--cf-panel) 96%, transparent);
  --cf-glass-soft: color-mix(in srgb, var(--cf-panel) 90%, transparent);

  color-scheme: light;
}

/* ---------- \u6697\u8272\u4E3B\u9898 ---------- */
/* \u4E24\u79CD\u89E6\u53D1\u90FD\u8981\u8BA4\uFF1A
   1) \u5BBF\u4E3B\u5728 <html> \u6216\u7956\u5148\u4E0A\u52A0\u4E86 .dark\uFF08DSH \u684C\u9762\u7AEF\u5C31\u662F\u8FD9\u4E2A\u505A\u6CD5\uFF09\uFF0C\u4E14\u7EC4\u4EF6\u672A\u663E\u5F0F\u5207\u5230 .light
   2) \u7EC4\u4EF6\u81EA\u8EAB\u663E\u5F0F\u5207\u5230 .dark
   3) \u7CFB\u7EDF\u504F\u597D\u6697\u8272\u4E14\u5BBF\u4E3B\u6CA1\u663E\u5F0F\u58F0\u660E light */
.cf-app.dark,
.dark .cf-app:not(.light) {
  --cf-bg: var(--dsw-alias-bg-base, var(--dsw-static-neutral-bluish-950));
  --cf-bg-sunken: var(--dsw-alias-bg-sunken, var(--dsw-static-neutral-bluish-1000));
  --cf-sunken: var(--cf-bg-sunken);
  --cf-panel: var(--dsw-alias-bg-layer-2, var(--dsw-static-neutral-bluish-850));
  --cf-panel-2: var(--dsw-alias-bg-layer-1, var(--dsw-static-neutral-bluish-875));
  --cf-panel-3: var(--dsw-alias-bg-layer-3, var(--dsw-static-neutral-bluish-800));

  --cf-fg: var(--dsw-alias-label-primary, var(--dsw-static-neutral-bluish-50));
  --cf-fg-2: var(--dsw-alias-label-secondary, var(--dsw-static-neutral-bluish-300));
  --cf-muted: var(--dsw-alias-label-tertiary, var(--dsw-static-neutral-bluish-400));
  --cf-caption: var(--dsw-alias-label-caption, var(--dsw-static-neutral-bluish-400));

  --cf-line: var(--dsw-alias-border-l2, rgb(255 255 255 / 0.10));
  --cf-line-strong: var(--dsw-alias-border-l4, rgb(255 255 255 / 0.18));

  --cf-primary: var(--dsw-alias-button-primary-fill, var(--dsw-static-neutral-bluish-50));
  --cf-primary-fg: var(--dsw-alias-label-primary-inverted, var(--dsw-static-neutral-bluish-800));
  --cf-primary-hover: var(--dsw-alias-button-primary-hover, var(--dsw-static-neutral-bluish-100));
  --cf-link: var(--dsw-alias-link, var(--dsw-static-deepseek-400));
  --cf-accent: var(--cf-link);
  --cf-on-accent: #0f1115;
  --cf-accent-soft: color-mix(in srgb, var(--cf-link) 15%, transparent);

  --cf-hover: var(--dsw-alias-interactive-bg-hover, rgb(255 255 255 / 0.07));
  --cf-active: var(--dsw-alias-interactive-bg-active, rgb(255 255 255 / 0.13));
  --cf-focus: var(--dsw-alias-border-focus, var(--dsw-static-deepseek-400));
  --cf-danger: #e05a4a;
  --cf-success: #4ade80;
  --cf-scrim-bg: rgb(0 0 0 / 0.62);

  --cf-glass: color-mix(in srgb, var(--cf-panel) 96%, transparent);
  --cf-glass-soft: color-mix(in srgb, var(--cf-panel) 90%, transparent);

  color-scheme: dark;
}

/* \u7CFB\u7EDF\u504F\u597D\u6697\u8272\uFF1A\u53EA\u5728\u5BBF\u4E3B\u6CA1\u6709\u663E\u5F0F\u7ED9\u660E\u8272\u65F6\u751F\u6548\uFF08.light \u53EF\u5F3A\u5236\u8986\u76D6\uFF09 */
@media (prefers-color-scheme: dark) {
  .cf-app:not(.light):not(.dark) {
    --cf-bg: var(--dsw-static-neutral-bluish-950);
    --cf-bg-sunken: var(--dsw-static-neutral-bluish-1000);
    --cf-sunken: var(--cf-bg-sunken);
    --cf-panel: var(--dsw-static-neutral-bluish-850);
    --cf-panel-2: var(--dsw-static-neutral-bluish-875);
    --cf-panel-3: var(--dsw-static-neutral-bluish-800);
    --cf-fg: var(--dsw-static-neutral-bluish-50);
    --cf-fg-2: var(--dsw-static-neutral-bluish-300);
    --cf-muted: var(--dsw-static-neutral-bluish-400);
    --cf-caption: var(--dsw-static-neutral-bluish-400);
    --cf-line: rgb(255 255 255 / 0.10);
    --cf-line-strong: rgb(255 255 255 / 0.18);
    --cf-primary: var(--dsw-static-neutral-bluish-50);
    --cf-primary-fg: var(--dsw-static-neutral-bluish-800);
    --cf-primary-hover: var(--dsw-static-neutral-bluish-100);
    --cf-link: var(--dsw-static-deepseek-400);
    --cf-accent: var(--cf-link);
    --cf-on-accent: #0f1115;
    --cf-accent-soft: color-mix(in srgb, var(--cf-link) 15%, transparent);
    --cf-hover: rgb(255 255 255 / 0.07);
    --cf-active: rgb(255 255 255 / 0.13);
    --cf-focus: var(--dsw-static-deepseek-400);
    --cf-danger: #e05a4a;
    --cf-success: #4ade80;
    --cf-scrim-bg: rgb(0 0 0 / 0.62);
    --cf-glass: color-mix(in srgb, var(--cf-panel) 96%, transparent);
    --cf-glass-soft: color-mix(in srgb, var(--cf-panel) 90%, transparent);
    color-scheme: dark;
  }
}

/* ---------- \u4E0E\u4E3B\u9898\u65E0\u5173\u7684\u5C3A\u5BF8/\u8282\u594F\u4EE4\u724C ---------- */
.cf-app {
  --cf-r-xs: var(--dsw-radius-xs, 6px);
  --cf-r-sm: var(--dsw-radius-sm, 8px);
  --cf-r-md: var(--dsw-radius-md, 12px);
  --cf-r-lg: var(--dsw-radius-lg, 16px);
  --cf-r-pill: 999px;
  --cf-hair: 1px;

  --cf-sp-1: 4px; --cf-sp-2: 8px; --cf-sp-3: 12px; --cf-sp-4: 16px;
  --cf-sp-5: 24px; --cf-sp-6: 32px; --cf-sp-7: 48px;

  /* \u5B57\u53F7\u4E0B\u9650 12px\uFF1A--cf-fs-11 \u4FDD\u7559\u4E3A\u522B\u540D\uFF0C\u5B9E\u9645\u843D\u5728 12\uFF0C\u907F\u514D\u4EFB\u4F55\u4E00\u5904\u6389\u5230 11px \u96BE\u8BFB */
  --cf-fs-11: 12px; --cf-fs-12: 12px; --cf-fs-13: 13px; --cf-fs-14: 14px;
  --cf-fs-16: 16px; --cf-fs-18: 18px; --cf-fs-22: 22px; --cf-fs-28: 28px; --cf-fs-36: 36px;

  --cf-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --cf-dur: 160ms;

  --cf-nav-h: 60px;
  /* \u5361\u7247\u9634\u5F71\uFF1A\u660E\u8272\u4E0B\u9760\u4E00\u5C42\u6781\u8F7B\u7684\u5916\u9634\u5F71\u7ACB\u4F4F\u8FB9\u754C\uFF0C\u6697\u8272\u4E0B\u8981\u52A0\u6DF1\u624D\u770B\u5F97\u89C1 */
  --cf-shadow-1: light-dark(rgb(15 17 21 / 0.06), rgb(0 0 0 / 0.45));
  --cf-shadow-2: light-dark(rgb(15 17 21 / 0.10), rgb(0 0 0 / 0.55));
  --cf-card-shadow: 0 4px 12px var(--cf-shadow-1);
  --cf-card-shadow-hover: 0 8px 20px var(--cf-shadow-2);
  --cf-mini-w: 143px;
  --cf-mini-h: 92px;
  --cf-z-nav: 300;
  --cf-z-float: 200;
  --cf-z-menu: 400;
  --cf-z-modal: 500;
  --cf-z-toast: 600;

  /* \u53D1\u9001\u94AE\uFF1ADSH \u5BA2\u6237\u7AEF InputBar \u7684\u540C\u4E00\u5BF9\uFF08\u660E #3964fe / \u6697 #79abff\uFF09 */
  --cf-send: light-dark(#3964fe, #79abff);
  --cf-send-hover: light-dark(#2f57e8, #4375e3);
  --cf-send-fg: #fff;
  --cf-tip-bg: #434549;
  --cf-tip-fg: #d8d9dd;

  --cf-input-surface: var(--dsw-specific-input-major, var(--cf-panel));
  --cf-selector: var(--dsw-specific-selector, var(--cf-panel-2));
  --cf-r-panel: var(--dsw-radius-panel, 18px);

  font-family: var(--dsw-font-sans, ui-sans-serif, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif);
  font-size: var(--cf-fs-14);
  color: var(--cf-fg);
  background: var(--cf-bg);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
@media (prefers-reduced-motion: reduce) {
  .cf-app { transition: none; }
}
`;var vo=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
 * imagery: the work itself, node pictures and generated tiles on the workspace ground \xB7 signature: the canvas is the page, one composer at its foot
 * axes: mid/grotesk-sans/neutral \xB7 posture: full-palette \xB7 contrast: pass \xB7 fold: pass \xB7 v2.0.0 */
/* Hallmark \xB7 pre-emit critique: P5 H5 E5 S5 R5 V5 \xB7 weakest: V, the palette is the host's so character had to come from density and rhythm; kept every surface one step above the ground and let the pictures carry colour */
/* Hallmark \xB7 waive 40 \xB7 the composer textarea is a borderless inner core inside a bordered card,
 * matching DeepSeek Harness's own composer (client-ui-conversation InputBar.module.css uses a
 * contenteditable core with no field box). Drawing an inner ring would put a line back through the
 * middle of the card, which the owner explicitly asked to remove. The card itself carries the edge. */
/* Hallmark \xB7 waive 39b \xB7 the prompt and asset cards are content containers, not controls; only real controls are 30 to 40px \xB7 their height is their text's */
/* \u6625\u98CE\u753B\u5E03 \xB7 \u6837\u5F0F
   \u5168\u90E8\u4F5C\u7528\u57DF\u5728 .cf-app \u4E0B\uFF0C\u4E0D\u6C61\u67D3\u5BBF\u4E3B\u3002
   \u914D\u8272\u6765\u81EA tokens.css\uFF08DSH \u522B\u540D\u4EE4\u724C\uFF09\u3002 */

/* ---------- \u57FA\u7840 ---------- */

.cf-app,
.cf-app *,
.cf-app *::before,
.cf-app *::after { box-sizing: border-box; }

.cf-app {
  position: relative;
  isolation: isolate;
  height: 100%;
  overflow: clip;
}
.cf-nav, .cf-page, .cf-editor { position: relative; z-index: 1; }
/* \u5DF2\u79FB\u9664\u5168\u5C4F\u65E0\u9650\u6A21\u7CCA\u6F02\u79FB\u5C42 .cf-ambient\uFF0C\u6539\u7528\u9759\u7F6E 0 \u5E27\u63D0\u4EA4\u7684\u7EAF\u8272\u5E95\uFF08var(--cf-bg)\uFF09\uFF0C
   \u6D88\u9664 ProMotion \u5C4F\u6BCF\u79D2 60/120 \u6B21\u5168\u5C4F\u79BB\u5C4F\u9AD8\u65AF\u6A21\u7CCA\u91CD\u7ED8\u4E0E WindowServer \u9AD8\u8D1F\u8F7D\u3002 */

.cf-app :where(h1, h2, h3, h4, p, ul, ol, dl, dd, figure, blockquote) { margin: 0; padding: 0; }
.cf-app :where(ul, ol) { list-style: none; }
.cf-app :where(button) { font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; }
.cf-app :where(button):disabled { cursor: not-allowed; }
.cf-app :where(input, textarea, select) { font: inherit; color: inherit; }
.cf-app :where(img, video, canvas) { display: block; max-width: 100%; }
.cf-app :where(a) { color: var(--cf-link); }

.cf-app :focus-visible {
  outline: 2px solid var(--cf-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .cf-app *,
  .cf-app *::before,
  .cf-app *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
}

/* ---------- \u9876\u680F ---------- */

.cf-nav {
  position: absolute;
  top: var(--cf-sp-3);
  left: var(--cf-sp-3);
  right: var(--cf-sp-3);
  z-index: var(--cf-z-nav);
  display: flex;
  align-items: center;
  gap: var(--cf-sp-2);
  pointer-events: none;
}
.cf-nav > * { pointer-events: auto; }

/* \u6D6E\u5C9B\uFF1A\u72EC\u7ACB\u7684\u5706\u89D2\u73BB\u7483\u5757\uFF0C\u4E0D\u662F\u4E00\u4E2A\u901A\u680F\u91CC\u5957\u6309\u94AE */
.cf-island {
  display: inline-flex;
  align-items: center;
  gap: var(--cf-sp-2);
  height: 36px;
  padding-inline: var(--cf-sp-2);
  border-radius: var(--cf-r-md);
  background: var(--cf-glass);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 8px 24px -18px oklch(0% 0 0 / 0.55);
}
.cf-island--nav { padding-inline: 2px; }
.cf-island--btn { gap: 7px; font-size: var(--cf-fs-13); color: var(--cf-fg-2); max-width: 240px; }
.cf-island--btn:hover { color: var(--cf-fg); }
.cf-island--btn.is-on { color: var(--cf-fg); background: var(--cf-active); }
.cf-island--icon { width: 44px; padding-inline: 0; justify-content: center; color: var(--cf-fg-2); }
.cf-island--icon:hover { color: var(--cf-fg); }
.cf-island--btn span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.cf-nav-glass {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: var(--cf-r-md);
  background: var(--cf-glass-soft);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}
.cf-nav-glass button {
  height: 32px;
  padding-inline: 13px;
  border-radius: var(--cf-r-sm);
  font-size: var(--cf-fs-13);
  color: var(--cf-muted);
  white-space: nowrap;
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-nav-glass button:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-nav-glass button.is-on { background: var(--cf-primary); color: var(--cf-primary-fg); }

/* \u9876\u680F\u53F3\u4FA7\u73BB\u7483\u6309\u94AE */
.cf-glass-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding-inline: var(--cf-sp-2);
  border-radius: var(--cf-r-md);
  font-size: var(--cf-fs-13);
  color: var(--cf-fg-2);
  background: var(--cf-glass);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 8px 24px -18px oklch(0% 0 0 / 0.55);
  white-space: nowrap;
  max-width: 240px;
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-glass-btn:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-glass-btn.is-on { background: var(--cf-active); color: var(--cf-fg); }
.cf-glass-btn span { overflow: hidden; text-overflow: ellipsis; }
.cf-glass-btn--icon { width: 36px; padding-inline: 0; justify-content: center; }

.cf-brand {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-2);
  padding-inline-end: var(--cf-sp-3);
  font-size: var(--cf-fs-14);
  font-weight: 600;
  letter-spacing: 0.01em;
  white-space: nowrap;
  color: var(--cf-fg);
}
.cf-brand svg { flex: 0 0 auto; }

.cf-nav-list { display: flex; align-items: stretch; gap: 2px; min-width: 0; }

.cf-nav-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding-inline: var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  color: var(--cf-muted);
  font-size: var(--cf-fs-13);
  white-space: nowrap;
  position: relative;
  transition: color var(--cf-dur) var(--cf-ease), background-color var(--cf-dur) var(--cf-ease);
}
.cf-nav-item:hover { color: var(--cf-fg); background: var(--cf-hover); }
.cf-nav-item.is-on { color: var(--cf-fg); }
.cf-nav-item.is-on::after {
  content: "";
  position: absolute;
  left: var(--cf-sp-2);
  right: var(--cf-sp-2);
  bottom: -12px;
  height: 2px;
  background: var(--cf-fg);
  border-radius: 2px;
}
.cf-nav-item svg { flex: 0 0 auto; opacity: 0.85; }

/* \u53F3\u4FA7\uFF1A\u6A21\u578B\u80F6\u56CA\u4E0E\u9F7F\u8F6E\u662F\u4E00\u7EC4\uFF08\u6A21\u578B\u914D\u7F6E\uFF09\uFF0C\u300C\u52A9\u624B\u300D\u662F\u5168\u5C40\u529F\u80FD\uFF0C\u4E2D\u95F4\u591A\u7559\u4E00\u6863\u95F4\u8DDD */
.cf-nav-right { display: flex; align-items: center; gap: var(--cf-sp-2); margin-inline-start: auto; }
.cf-nav-right .cf-glass-btn--dock { margin-inline-start: 4px; }
.cf-nav-version { font-size: var(--cf-fs-11); color: var(--cf-caption); padding-inline: var(--cf-sp-2); white-space: nowrap; }

/* ---------- \u901A\u7528\u63A7\u4EF6 ---------- */

.cf-icon-btn {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: var(--cf-r-sm);
  color: var(--cf-fg-2);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-icon-btn:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-icon-btn[aria-pressed="true"] { background: var(--cf-active); color: var(--cf-fg); }
.cf-icon-btn:disabled { opacity: 0.35; background: transparent; }

.cf-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding-inline: var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  font-size: var(--cf-fs-13);
  font-weight: 500;
  white-space: nowrap;
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease),
              border-color var(--cf-dur) var(--cf-ease);
}
.cf-btn--sm { height: 30px; padding-inline: var(--cf-sp-2); font-size: var(--cf-fs-12); }
.cf-btn--primary { background: var(--cf-primary); color: var(--cf-primary-fg); }
.cf-btn--primary:hover { background: var(--cf-primary-hover); }
.cf-btn--ghost { color: var(--cf-fg); box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong); }
.cf-btn--ghost:hover { background: var(--cf-hover); }
.cf-btn--quiet { color: var(--cf-fg-2); }
.cf-btn--quiet:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-btn--danger { color: var(--cf-danger); box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong); }
.cf-btn--danger:hover { background: color-mix(in oklab, var(--cf-danger) 14%, transparent); }
.cf-btn:disabled { opacity: 0.45; }

.cf-field { display: grid; gap: var(--cf-sp-2); }
.cf-label { font-size: var(--cf-fs-12); font-weight: 500; color: var(--cf-fg-2); }

.cf-input {
  width: 100%;
  min-height: 34px;
  padding: 6px var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  border: var(--cf-hair) solid var(--cf-muted);
  background: var(--cf-bg);
  color: var(--cf-fg);
  font-size: var(--cf-fs-13);
}
.cf-input::placeholder { color: var(--cf-caption); }
.cf-input:focus-visible { outline: 2px solid var(--cf-focus); outline-offset: 0; border-color: transparent; }
.cf-input--area { min-height: 96px; resize: vertical; line-height: 1.55; }
.cf-input--num { min-width: 0; text-align: center; font-variant-numeric: tabular-nums; }

.cf-chips { display: flex; flex-wrap: wrap; gap: var(--cf-sp-2); }
.cf-chip {
  height: 34px;
  padding-inline: var(--cf-sp-4);
  border-radius: var(--cf-r-sm);
  font-size: var(--cf-fs-13);
  color: var(--cf-fg-2);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  transition: color var(--cf-dur) var(--cf-ease), background-color var(--cf-dur) var(--cf-ease),
              box-shadow var(--cf-dur) var(--cf-ease);
}
.cf-chip:hover { color: var(--cf-fg); background: var(--cf-hover); }
.cf-chip.is-on { color: var(--cf-fg); background: var(--cf-active); box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-fg-2); }
.cf-chip--tag {
  height: 32px;
  padding-inline: var(--cf-sp-3);
  font-size: var(--cf-fs-12);
  border-radius: var(--cf-r-pill);
}

.cf-switch { display: inline-flex; align-items: center; gap: var(--cf-sp-2); font-size: var(--cf-fs-12); color: var(--cf-fg-2); cursor: pointer; }
.cf-switch input { width: 15px; height: 15px; accent-color: var(--cf-fg); }

.cf-seg { display: inline-flex; gap: 2px; padding: 2px; border-radius: var(--cf-r-sm); background: var(--cf-panel-2); }
.cf-seg button {
  white-space: nowrap;
  height: 28px;
  padding-inline: 10px;
  border-radius: 6px;
  font-size: var(--cf-fs-12);
  font-weight: 400;
  color: var(--cf-muted);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-seg button:hover { color: var(--cf-fg); }
/* \u9009\u4E2D\u6001\uFF1A\u5E95\u8272 + \u52A0\u7C97 + \u6D45\u63CF\u8FB9\u4E09\u91CD\u533A\u5206\uFF0C\u767D\u5E95\u5728\u6D45\u8272\u4E3B\u9898\u4E0B\u4E5F\u4E0D\u7CCA */
.cf-seg button.is-on {
  background: var(--cf-panel);
  color: var(--cf-fg);
  font-weight: 600;
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow);
}

/* ---------- \u9875\u9762\u9AA8\u67B6 ---------- */

.cf-page { height: 100%; overflow-y: auto; overflow-x: clip; }
.cf-page-inner { max-width: 1180px; margin-inline: auto; padding: calc(var(--cf-sp-3) + 36px + var(--cf-sp-4)) var(--cf-sp-5) var(--cf-sp-7); }

.cf-page-head { display: flex; align-items: flex-start; gap: var(--cf-sp-4); margin-bottom: var(--cf-sp-5); }
.cf-page-head > div:first-child { min-width: 0; }
.cf-page-title {
  font-size: var(--cf-fs-28);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.25;
  overflow-wrap: break-word;
}
.cf-page-sub { margin-top: 6px; font-size: var(--cf-fs-13); color: var(--cf-muted); line-height: 1.5; }
.cf-page-actions { display: flex; gap: var(--cf-sp-2); margin-inline-start: auto; flex: 0 0 auto; }

.cf-card {
  border-radius: var(--cf-r-lg);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  overflow: hidden;
}
.cf-card-head {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-3);
  padding: var(--cf-sp-3) var(--cf-sp-4);
  border-bottom: var(--cf-hair) solid var(--cf-line);
  min-height: 52px;
}
.cf-card-title { font-size: var(--cf-fs-14); font-weight: 600; }
.cf-card-count {
  font-size: var(--cf-fs-11);
  color: var(--cf-muted);
  min-width: 20px;
  height: 20px;
  padding-inline: 6px;
  border-radius: var(--cf-r-pill);
  display: inline-grid;
  place-items: center;
  background: var(--cf-panel-3);
  font-variant-numeric: tabular-nums;
}
.cf-card-body { padding: var(--cf-sp-4); }

.cf-empty { display: grid; gap: var(--cf-sp-2); justify-items: center; text-align: center; padding: var(--cf-sp-7) var(--cf-sp-4); }
.cf-empty-icon { color: var(--cf-caption); margin-bottom: var(--cf-sp-1); }
.cf-empty-title { font-size: var(--cf-fs-16); font-weight: 500; color: var(--cf-fg-2); }
.cf-empty-hint { font-size: var(--cf-fs-13); color: var(--cf-muted); max-width: 42ch; line-height: 1.6; }
.cf-empty .cf-btn { margin-top: var(--cf-sp-2); }

/* ---------- \u6211\u7684\u753B\u5E03\uFF1A\u5217\u8868 ---------- */

.cf-canvas-list { display: grid; gap: 2px; }
.cf-canvas-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  align-items: center;
  gap: var(--cf-sp-4);
  width: 100%;
  padding: var(--cf-sp-3) var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  text-align: start;
  transition: background-color var(--cf-dur) var(--cf-ease);
}
.cf-canvas-row:hover { background: var(--cf-hover); }
.cf-canvas-name {
  display: flex;
  align-items: center;
  min-height: 32px;
  font-size: var(--cf-fs-14);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: var(--cf-r-xs);
  transition: color var(--cf-dur) var(--cf-ease);
}
.cf-canvas-name:hover { color: var(--cf-fg); text-decoration: underline; text-underline-offset: 3px; }
.cf-canvas-meta { font-size: var(--cf-fs-12); color: var(--cf-muted); white-space: nowrap; font-variant-numeric: tabular-nums; }
.cf-canvas-row-actions { display: flex; gap: var(--cf-sp-1); opacity: 0; transition: opacity var(--cf-dur) var(--cf-ease); }
.cf-canvas-row:hover .cf-canvas-row-actions,
.cf-canvas-row:focus-within .cf-canvas-row-actions { opacity: 1; }

.cf-list-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: var(--cf-sp-4);
  padding: var(--cf-sp-3) var(--cf-sp-4) var(--cf-sp-2);
  border-bottom: var(--cf-hair) solid var(--cf-line);
  margin-bottom: var(--cf-sp-2);
  font-size: var(--cf-fs-11);
  color: var(--cf-caption);
}

/* ---------- \u753B\u5E03\u7F16\u8F91\u5668 ---------- */

.cf-editor {
  position: relative;
  height: 100%;
  min-height: 0;
}
.cf-editor-main { position: relative; width: 100%; min-width: 0; min-height: 0; height: 100%; }

.cf-rail {
  position: absolute;
  left: var(--cf-sp-3);
  top: 50%;
  translate: 0 -50%;
  z-index: var(--cf-z-float);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--cf-sp-2);
  max-height: calc(100% - 180px);
  padding: 6px 5px;
  border-radius: var(--cf-r-md);
  background: var(--cf-glass);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 12px 28px -20px oklch(0% 0 0 / 0.55);
  overflow-y: auto;
  scrollbar-width: none;
}
.cf-rail::-webkit-scrollbar { display: none; }
.cf-rail-btn {
  position: relative;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: var(--cf-r-sm);
  color: var(--cf-muted);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-rail-btn:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-rail-btn.is-on { background: var(--cf-active); color: var(--cf-fg); }
.cf-rail-sep { width: 20px; height: var(--cf-hair); background: var(--cf-line); margin: 2px 0; }

.cf-board { position: relative; width: 100%; height: 100%; min-width: 0; min-height: 0; background: transparent; }

.cf-stage {
  position: absolute;
  inset: 0;
  overflow: clip;
  touch-action: none;
}
.cf-stage.is-grab { cursor: grab; }
.cf-stage.is-grabbing { cursor: grabbing; }

.cf-grid {
  position: absolute;
  inset: -96px;
  pointer-events: none;
  z-index: 0;
  contain: strict;
}
.cf-stage--dots:not(:has(.cf-grid)),
.cf-grid.cf-stage--dots {
  background-image: radial-gradient(circle at 1px 1px, var(--cf-line-strong) 1px, transparent 0);
  background-size: var(--cf-grid, 28px) var(--cf-grid, 28px);
}
.cf-stage--lines:not(:has(.cf-grid)),
.cf-grid.cf-stage--lines {
  background-image:
    linear-gradient(to right, var(--cf-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--cf-line) 1px, transparent 1px);
  background-size: var(--cf-grid, 28px) var(--cf-grid, 28px);
}
.cf-stage--blank { background-image: none; }

.cf-world { position: absolute; top: 0; left: 0; width: 0; height: 0; transform-origin: 0 0; will-change: transform; }

.cf-edges { position: absolute; top: 0; left: 0; overflow: visible; pointer-events: none; }
/* \u8FDE\u7EBF\uFF1A\u9ED8\u8BA4\u6BD4\u65E7\u7248\u6DF1\u4E00\u6863\uFF0C\u60AC\u505C\u4E0E\u9009\u4E2D\u5347\u5230\u54C1\u724C\u84DD\u5E76\u52A0\u7C97\uFF0C\u591A\u8282\u70B9\u65F6\u80FD\u987A\u7740\u770B\u6D41\u5411 */
.cf-edge-line {
  fill: none;
  stroke: var(--cf-fg-2);
  stroke-opacity: 0.42;
  stroke-width: 1.6;
  transition: stroke var(--cf-dur) var(--cf-ease), stroke-opacity var(--cf-dur) var(--cf-ease),
              stroke-width var(--cf-dur) var(--cf-ease);
}
.cf-edge-line--ghost { stroke: var(--cf-fg); stroke-dasharray: 5 5; stroke-opacity: 0.9; }
.cf-edge-hit { fill: none; stroke: transparent; stroke-width: 18; pointer-events: stroke; cursor: pointer; }
.cf-edge:hover .cf-edge-line,
.cf-edge.is-on .cf-edge-line {
  stroke: var(--cf-link);
  stroke-opacity: 1;
  stroke-width: 2.4;
}
.cf-edge:hover .cf-arrow-head,
.cf-edge.is-on .cf-arrow-head { fill: var(--cf-link); fill-opacity: 1; }
.cf-arrow-head { fill: var(--cf-fg-2); fill-opacity: 0.55; }


.cf-marquee {
  position: absolute;
  border: var(--cf-hair) solid var(--cf-focus);
  background: color-mix(in oklab, var(--cf-focus) 12%, transparent);
  pointer-events: none;
}

/* \u8282\u70B9\uFF1A\u6D45\u5E95\u4E0A\u9760 1px \u63CF\u8FB9 + \u8F7B\u6295\u5F71\u7ACB\u4F4F\u5C42\u7EA7\uFF0C\u4E0D\u7528\u91CD\u9634\u5F71\u5806\u780C */
.cf-node {
  position: absolute;
  left: 0;
  top: 0;
  contain: layout style;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow);
  transition: box-shadow var(--cf-dur) var(--cf-ease);
}
.cf-node.is-dragging { will-change: transform; }
.cf-node:hover {
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow-hover);
}
.cf-node.is-selected {
  box-shadow: inset 0 0 0 1.5px var(--cf-fg), 0 0 0 3px color-mix(in oklab, var(--cf-fg) 12%, transparent), var(--cf-card-shadow-hover);
}
.cf-node.is-running {
  box-shadow: inset 0 0 0 1.5px var(--cf-link), 0 0 0 3px color-mix(in oklab, var(--cf-link) 18%, transparent), var(--cf-card-shadow);
}
.cf-node.is-group {
  display: block;
  background: color-mix(in oklab, var(--cf-panel-2) 42%, transparent);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  /* \u5206\u7EC4\u8981\u80FD\u70B9\u4E2D\uFF1A\u6846\u67B6\u672C\u8EAB\u63A5\u6536\u70B9\u51FB\uFF08\u5B50\u8282\u70B9\u5C42\u7EA7\u66F4\u9AD8\uFF0C\u4ECD\u7136\u4F18\u5148\u547D\u4E2D\uFF09 */
  cursor: grab;
  transition: box-shadow var(--cf-dur) var(--cf-ease), background-color var(--cf-dur) var(--cf-ease);
}
.cf-node.is-group:hover { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-fg-2); }
/* \u9009\u4E2D\u6001\u5FC5\u987B\u76D6\u8FC7 .is-group \u7684\u63CF\u8FB9\uFF0C\u5426\u5219\u9009\u4E2D\u4E86\u770B\u4E0D\u51FA\u6765 */
.cf-node.is-group.is-selected {
  background: color-mix(in oklab, var(--cf-fg) 6%, transparent);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg);
}


.cf-node-head {
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  /* \u53F3\u4FA7\u591A\u7559\u4E00\u70B9\uFF1A\u8FDE\u63A5\u70B9\u9A91\u5728\u89D2\u4E0A\uFF0C\u8282\u70B9\u540D\u4E0D\u80FD\u88AB\u5B83\u538B\u4F4F */
  padding-inline: var(--cf-sp-3) var(--cf-sp-4);
  border-bottom: var(--cf-hair) solid var(--cf-line);
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  min-width: 0;
}
.cf-node-type { flex: 0 0 auto; }
.cf-node-name { margin-inline-start: auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* \u8FDE\u63A5\u70B9\uFF1A\u89C6\u89C9\u4ECD\u662F 10px \u7A7A\u5FC3\u5706\uFF0C\u70ED\u533A\u6309\u5C4F\u5E55\u50CF\u7D20\u6052\u5B9A 20px \u2014\u2014 \u4E16\u754C\u5C42\u6574\u4F53 scale\uFF0C
   \u8FD9\u91CC\u7528 --cf-cam-s \u53CD\u7B97\u56DE\u6765\uFF0C\u7F29\u5230 50% \u4E5F\u4E0D\u4F1A\u53D8\u6210 5px \u7684\u9488\u5C16\u3002
   \u70ED\u533A\u6B63\u597D\u9A91\u5728\u8282\u70B9\u53F3\u4E0A\u89D2\u4E0A\uFF0C\u4E00\u534A\u5728\u5361\u5916\uFF0C\u4E0D\u989D\u5916\u4FB5\u5360\u753B\u5E03\u5185\u5BB9\u3002 */
.cf-node-port {
  --cf-port-hit: max(22px, calc(22px / var(--cf-cam-s, 1)));
  position: absolute;
  top: calc(var(--cf-port-hit) / -2);
  right: calc(var(--cf-port-hit) / -2);
  z-index: 3;
  display: grid;
  place-items: center;
  width: var(--cf-port-hit);
  height: var(--cf-port-hit);
  border-radius: var(--cf-r-pill);
  cursor: crosshair;
}
.cf-node-port span {
  width: max(8px, calc(8px / var(--cf-cam-s, 1)));
  height: max(8px, calc(8px / var(--cf-cam-s, 1)));
  border-radius: var(--cf-r-pill);
  background: var(--cf-bg);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg-2);
  transition: transform 140ms var(--cf-ease), background-color var(--cf-dur) var(--cf-ease),
              box-shadow var(--cf-dur) var(--cf-ease);
}
.cf-node-port:hover span,
.cf-node-port:focus-visible span {
  transform: scale(1.45);
  background: var(--cf-fg);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--cf-link) 24%, transparent);
}
.cf-node-body { min-height: 0; overflow: hidden; border-radius: 0 0 var(--cf-r-md) var(--cf-r-md); }

.cf-node-media { position: relative; width: 100%; height: 100%; background: var(--cf-panel-2); }
.cf-node-media.has-img { background: transparent; }
.cf-node-media img { width: 100%; height: 100%; object-fit: contain; }
.cf-node-media video, .cf-node-media canvas { width: 100%; height: 100%; object-fit: cover; }
.cf-node-empty {
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 6px;
  width: 100%;
  height: 100%;
  color: var(--cf-muted);
  font-size: var(--cf-fs-12);
  background: var(--cf-panel-2);
}
/* \u56FE\u7247\u8282\u70B9\u662F\u7F29\u7565\u9884\u89C8\uFF1A\u60AC\u505C\u65F6\u5DE6\u4E0B\u89D2\u9732\u4E00\u4E2A\u300C\u770B\u5927\u56FE\u300D\u6309\u94AE\uFF08\u53F3\u4E0B\u89D2\u8BA9\u7ED9\u7F29\u653E\u624B\u67C4\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u53CC\u51FB\u5361\u7247 */
.cf-node-zoom {
  position: absolute;
  left: 6px;
  bottom: 6px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: var(--cf-r-xs);
  background: oklch(0% 0 0 / 0.55);
  color: #fff;
  opacity: 0;
  transition: opacity var(--cf-dur) var(--cf-ease), background-color var(--cf-dur) var(--cf-ease);
}
.cf-node:hover .cf-node-zoom,
.cf-node-zoom:focus-visible { opacity: 1; }
.cf-node-zoom:hover { background: oklch(0% 0 0 / 0.78); }

.cf-node-void {
  display: grid;
  place-items: center;
  gap: var(--cf-sp-2);
  width: 100%;
  height: 100%;
  padding: var(--cf-sp-4);
  text-align: center;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  background: var(--cf-panel-2);
}
.cf-spin {
  width: 18px;
  height: 18px;
  border-radius: var(--cf-r-pill);
  border: 2px solid var(--cf-line-strong);
  border-top-color: var(--cf-fg);
  animation: cf-spin 900ms linear infinite;
}
@keyframes cf-spin { to { transform: rotate(360deg); } }

.cf-node-text { height: 100%; overflow: auto; padding: var(--cf-sp-3); }
.cf-node-text p { font-size: var(--cf-fs-13); line-height: 1.6; white-space: pre-wrap; overflow-wrap: break-word; color: var(--cf-fg-2); }

.cf-node-config { display: grid; gap: 6px; padding: var(--cf-sp-3); font-size: var(--cf-fs-12); }
.cf-node-config-row { display: flex; justify-content: space-between; gap: var(--cf-sp-3); }
.cf-node-config-row span { color: var(--cf-muted); }
.cf-node-config-row b { font-weight: 500; color: var(--cf-fg); font-variant-numeric: tabular-nums; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.cf-node-audio { display: grid; gap: var(--cf-sp-3); align-content: center; height: 100%; padding: var(--cf-sp-4); }
.cf-wave { display: flex; align-items: center; gap: 2px; height: 40px; }
.cf-wave span { flex: 1; min-width: 2px; border-radius: 1px; background: var(--cf-fg-2); opacity: 0.5; }

/* \u5206\u7EC4\u6807\u7B7E\uFF1A\u4ECE\u70B9\u9635\u4E0A\u6D6E\u8D77\u6765\uFF0C\u505A\u6210\u5E26\u6D45\u5E95\u7684\u80F6\u56CA\uFF0C\u907F\u514D\u6587\u5B57\u76F4\u63A5\u538B\u5728\u7F51\u683C\u4E0A\u8FA8\u8BA4\u4E0D\u6E05 */
.cf-node-group-head {
  position: absolute;
  top: -28px;
  left: -1px;
  display: inline-flex;
  align-items: center;
  gap: var(--cf-sp-2);
  height: 22px;
  padding-inline: 9px;
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow);
  cursor: grab;
  font-size: var(--cf-fs-12);
  font-weight: 500;
  color: var(--cf-fg-2);
  white-space: nowrap;
  transition: color var(--cf-dur) var(--cf-ease), box-shadow var(--cf-dur) var(--cf-ease);
}
.cf-node-group-head:hover { color: var(--cf-fg); }
.cf-node.is-group.is-selected .cf-node-group-head {
  color: var(--cf-fg);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg), var(--cf-card-shadow);
}
.cf-node-group-count { margin-inline-start: 2px; color: var(--cf-caption); font-size: var(--cf-fs-12); font-weight: 400; }

.cf-node-handle {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: var(--cf-bg);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg);
}
/* \u56DB\u89D2\uFF1A\u5750\u6807\u5404\u81EA\u6446\u4F4D\uFF0C\u5149\u6807\u6309\u5BF9\u89D2\u7EBF\u65B9\u5411\u533A\u5206 */
.cf-node-handle--se { right: -5px; bottom: -5px; cursor: nwse-resize; }
.cf-node-handle--nw { left: -5px; top: -5px; cursor: nwse-resize; }
.cf-node-handle--sw { left: -5px; bottom: -5px; cursor: nesw-resize; }
.cf-node-handle--ne { right: -5px; top: -5px; cursor: nesw-resize; }

/* \u753B\u5E03\u5DE6\u4E0A\u89D2\u7684\u6D6E\u52A8\u6761\uFF1A\u753B\u5E03\u540D + \u7F51\u683C\u5207\u6362\uFF08\u539F\u5728\u9876\u680F\uFF09 */
.cf-canvas-bar {
  position: absolute;
  z-index: var(--cf-z-float);
  top: var(--cf-sp-3);
  left: 50%;
  translate: -50% 0;
  display: flex;
  align-items: center;
  gap: var(--cf-sp-2);
  height: 36px;
  padding: 2px;
  border-radius: var(--cf-r-md);
  background: var(--cf-glass);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}
.cf-canvas-bar-name {
  max-width: 22ch;
  padding-inline: 8px;
  font-size: var(--cf-fs-12);
  color: var(--cf-fg-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* composer\uFF1A\u753B\u5E03\u5E95\u90E8\u7684\u63D0\u793A\u8BCD\u8F93\u5165\u3002\u9ED8\u8BA4\u4E24\u884C\u9AD8\uFF08\u6574\u5361\u7EA6 101px\uFF09\uFF0C
   \u5185\u5BB9\u53D8\u591A\u968F textarea \u5411\u4E0A\u6491\u5F00\uFF0C\u6574\u5361\u6700\u9AD8 200px \u540E\u6846\u5185\u6EDA\u52A8\uFF0C\u4E0D\u906E\u66F4\u591A\u753B\u5E03\u3002 */
.cf-composer {
  position: absolute;
  z-index: var(--cf-z-float);
  left: 50%;
  bottom: var(--cf-sp-4);
  transform: translateX(-50%);
  /* 560px\uFF1A\u56FE\u7247\u5DE5\u5177\u5DF2\u632A\u5230 cf-img-tools \u72EC\u7ACB\u884C\uFF0C\u8FD9\u6761 bar \u53EA\u5269
     \u53C2\u8003/\u6BD4\u4F8B/\u5F20\u6570/\u8D28\u91CF + \u6A21\u578B + \u6253\u7EC4/\u5220\u9664 + \u53D1\u9001\u3002
     \u5B9E\u6D4B\u9700\u6C42 = \u5DE6\u7EC4 245 + \u53F3\u7EC4 270 + \u95F4\u8DDD 12 + \u5185\u8FB9\u8DDD 16 = 543\uFF0C
     532px \u65F6\u5DEE 11px \u4ECD\u4F1A\u6362\u884C\uFF1B720px \u53C8\u4F1A\u538B\u4F4F\u53F3\u4E0B\u89D2\u5C0F\u5730\u56FE\u3002 */
  width: min(600px, calc(100% - var(--cf-sp-6)));
  display: grid;
  gap: 9px;
  padding: 10px 8px 6px;
  border-radius: var(--cf-r-panel);
  background: var(--cf-input-surface);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow);
  transition: box-shadow 180ms var(--cf-ease), translate 180ms var(--cf-ease);
}
/* \u805A\u7126\u6001\uFF1A\u6574\u5757\u9762\u677F\u52A0\u4E00\u5708\u6D45\u8272 focus ring \u5E76\u8F7B\u5FAE\u4E0A\u6D6E\uFF0C\u660E\u786E\u300C\u73B0\u5728\u5728\u5199\u8FD9\u4E00\u6761\u300D */
.cf-composer:focus-within {
  translate: 0 -2px;
  box-shadow: inset 0 0 0 1px var(--cf-focus), 0 0 0 3px color-mix(in oklab, var(--cf-focus) 16%, transparent), 0 24px 48px -24px oklch(0% 0 0 / 0.7);
}
.cf-composer:focus-within.is-menu {
  translate: 0;
}
.cf-composer-input:focus-visible,
.cf-dock-input:focus-visible { outline: none; }
.cf-dock:focus-within { box-shadow: -1px 0 0 var(--cf-line-strong), -24px 0 60px -40px oklch(0% 0 0 / 0.8); }

.cf-composer-input {
  width: 100%;
  min-height: 44px;
  max-height: 140px;
  resize: none;
  border: 0;
  overflow-y: hidden;
  background: transparent;
  color: var(--cf-fg);
  font-size: var(--cf-fs-13);
  line-height: 1.55;
  padding: 2px var(--cf-sp-2);
  transition: height 140ms var(--cf-ease);
}
.cf-composer-input::placeholder { color: var(--cf-caption); }
.cf-composer-input:focus-visible { outline: none; }

.cf-composer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  /* \u5141\u8BB8\u6362\u884C\u53EA\u4F5C\u4E3A\u6781\u7A84\u7A97\u53E3\u7684\u515C\u5E95\uFF1B\u6B63\u5E38\u5BBD\u5EA6\u4E0B\u5FC5\u987B\u5355\u884C */
  flex-wrap: wrap;
  min-height: 32px;
}
.cf-composer-left,
.cf-composer-right { display: flex; align-items: center; gap: 4px; min-width: 0; }
.cf-composer-right { flex: none; margin-inline-start: auto; }
.cf-bar-slot { position: relative; display: inline-flex; }

/* \u8F93\u5165\u6761\u4E0A\u7684\u6587\u5B57\u6309\u94AE\uFF1A\u65E0\u8FB9\u6846\uFF0C\u9760 hover \u7ED9\u53CD\u9988\uFF0C\u548C\u539F\u7AD9\u4E00\u81F4 */
.cf-bar-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding-inline: 8px;
  border-radius: var(--cf-r-sm);
  font-size: var(--cf-fs-12);
  color: var(--cf-fg-2);
  white-space: nowrap;
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-bar-btn:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-bar-btn[aria-expanded="true"] { background: var(--cf-active); color: var(--cf-fg); }
.cf-bar-btn svg { flex: 0 0 auto; opacity: 0.8; }
/* \u6A21\u578B\u9009\u62E9\u5668\u7528 DSH \u7684 selector \u8868\u9762\u8272\uFF0C\u548C\u666E\u901A\u6587\u5B57\u6309\u94AE\u533A\u5206\u5F00 */
.cf-bar-btn--select { background: var(--cf-selector); border-radius: var(--cf-r-pill); padding-inline: 12px; }
.cf-bar-btn--select:hover { background: var(--cf-selector); filter: brightness(1.08); }
.cf-bar-label { max-width: 18ch; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cf-bar-badge {
  min-width: 18px;
  height: 18px;
  padding-inline: 5px;
  display: inline-grid;
  place-items: center;
  border-radius: var(--cf-r-pill);
  background: var(--cf-selector);
  color: var(--cf-fg-2);
  font-size: var(--cf-fs-11);
  font-variant-numeric: tabular-nums;
}

/* \u53D1\u9001\u5706\u94AE\uFF1A\u548C DSH \u5BA2\u6237\u7AEF\u540C\u4E00\u4E2A\u5706\u3001\u540C\u4E00\u5BF9\u989C\u8272\uFF0C\u7A7A\u6587\u672C\u65F6 0.4 \u900F\u660E\u5EA6 */
.cf-send {
  position: relative;
  flex: none;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: var(--cf-r-pill);
  background: var(--cf-send);
  color: var(--cf-send-fg);
  transition: background-color 100ms ease, opacity 100ms ease;
}
.cf-send:hover:not(:disabled) { background: var(--cf-send-hover); }
.cf-send:disabled { opacity: 0.4; cursor: default; }

/* \u901A\u7528\u60AC\u6D6E\u63D0\u793A\uFF1A\u56FE\u6807\u6309\u94AE\u4E00\u5F8B\u8D70 data-tip\uFF0C\u6BD4\u539F\u751F title \u5373\u65F6\u3001\u6837\u5F0F\u7EDF\u4E00\u3002
   .cf-send \u90A3\u6761\u4FDD\u7559\uFF08\u5B83\u8D34\u53F3\u8FB9\u7F18\uFF0C\u9700\u8981 right:0 \u800C\u4E0D\u662F\u5C45\u4E2D\uFF09\u3002 */
.cf-icon-btn { position: relative; }
.cf-icon-btn[data-tip]::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  border-radius: var(--cf-r-xs);
  background: var(--cf-tip-bg);
  color: var(--cf-tip-fg);
  font-size: var(--cf-fs-12);
  line-height: 18px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;
  z-index: 20;
  box-shadow: 0 8px 20px -12px oklch(0% 0 0 / 0.7);
}
.cf-icon-btn[data-tip]:hover:not(:disabled)::after { opacity: 1; }

/* \u8282\u70B9\u6D6E\u52A8\u5DE5\u5177\u6761\uFF1A\u60AC\u505C\u5728\u56FE\u7247\u8282\u70B9\u4E0A\u65F6\u6D6E\u5728\u5176\u6B63\u4E0A\u65B9\u3002
   \u6302\u5728 cf-stage \u800C\u4E0D\u662F cf-world\uFF0C\u6240\u4EE5\u4E0D\u53C2\u4E0E\u753B\u5E03\u7F29\u653E\u3002 */
.cf-node-toolbar {
  position: absolute;
  z-index: var(--cf-z-float);
  transform: translate(-50%, -100%);
  display: flex;
  align-items: center;
  gap: 1px;
  height: 40px;
  padding: 0 5px;
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel);
  box-shadow:
    inset 0 0 0 var(--cf-hair) var(--cf-line-strong),
    0 10px 28px -14px oklch(0% 0 0 / 0.45);
  /* \u4ECE\u8282\u70B9\u79FB\u5411\u5DE5\u5177\u6761\u8981\u7A7F\u8FC7 14px \u95F4\u9699\uFF1B\u628A\u95F4\u9699\u7B97\u8FDB\u70ED\u533A\uFF0C\u9F20\u6807\u4E0D\u4F1A\u300C\u6389\u51FA\u53BB\u300D */
  margin-top: -0px;
  animation: cf-toolbar-in 120ms var(--cf-ease);
}

@keyframes cf-toolbar-in {
  from { opacity: 0; transform: translate(-50%, calc(-100% + 4px)); }
  to   { opacity: 1; transform: translate(-50%, -100%); }
}

/* \u6865\u63A5\u5C42\uFF1A\u5DE5\u5177\u6761\u4E0E\u8282\u70B9\u4E4B\u95F4\u6709 14px \u95F4\u9699\uFF0C\u9F20\u6807\u7A7F\u8FC7\u53BB\u65F6\u65E2\u4E0D\u7B97\u5728\u8282\u70B9\u4E0A\u3001
   \u4E5F\u4E0D\u7B97\u5728\u5DE5\u5177\u6761\u4E0A\u3002\u53EA\u9760\u300C\u79BB\u5F00\u540E 180ms \u5BBD\u9650\u300D\u4E0D\u591F\u2014\u2014\u624B\u6162\u4E00\u70B9\u5C31\u6D88\u5931\uFF0C
   \u6C38\u8FDC\u70B9\u4E0D\u5230\u6309\u94AE\u3002\u8FD9\u5757\u4F2A\u5143\u7D20\u628A\u95F4\u9699\u586B\u6EE1\uFF0C\u6307\u9488\u4E8B\u4EF6\u4F1A\u6D3E\u53D1\u7ED9\u5DE5\u5177\u6761\u672C\u8EAB\uFF0C
   \u6240\u4EE5\u7A7F\u8FC7\u53BB\u65F6\u4E0D\u4F1A\u89E6\u53D1 leave\u3002 */
.cf-node-toolbar::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 14px;
}

.cf-node-toolbar.is-labels { gap: 2px; padding: 0 8px; }

.cf-node-toolbar-sep {
  width: var(--cf-hair);
  height: 18px;
  margin: 0 4px;
  background: var(--cf-line-strong);
}

.cf-node-toolbar-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 32px;
  min-width: 32px;
  padding: 0 6px;
  border-radius: var(--cf-r-sm);
  font-size: var(--cf-fs-12);
  color: var(--cf-fg-2);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-node-toolbar-btn:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-node-toolbar-btn.is-danger:hover { background: var(--cf-danger-soft, var(--cf-hover)); color: var(--cf-danger); }

.cf-node-toolbar-btn[data-tip]::after {
  content: attr(data-tip);
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  border-radius: var(--cf-r-xs);
  background: var(--cf-tip-bg);
  color: var(--cf-tip-fg);
  font-size: var(--cf-fs-12);
  line-height: 18px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;
  z-index: 21;
  box-shadow: 0 8px 20px -12px oklch(0% 0 0 / 0.7);
}
/* \u5E26\u6587\u5B57\u65F6\u4E0D\u5F39\u63D0\u793A\uFF0C\u907F\u514D\u540C\u4E00\u53E5\u8BDD\u51FA\u73B0\u4E24\u6B21 */
.cf-node-toolbar:not(.is-labels) .cf-node-toolbar-btn[data-tip]:hover::after { opacity: 1; }

/* \u60AC\u6D6E\u63D0\u793A\uFF1A\u548C DSH \u4E00\u81F4\uFF0C\u6DF1\u7070\u5E95\u6D45\u5B57\uFF0C\u6D6E\u5728\u6309\u94AE\u4E0A\u65B9 */
.cf-send[data-tip]::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  padding: 4px 8px;
  border-radius: var(--cf-r-xs);
  background: var(--cf-tip-bg);
  color: var(--cf-tip-fg);
  font-size: var(--cf-fs-12);
  line-height: 18px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;
  box-shadow: 0 8px 20px -12px oklch(0% 0 0 / 0.7);
}
.cf-send[data-tip]:hover:not(:disabled)::after { opacity: 1; }

.cf-model-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  max-width: 100%;
  padding-inline: var(--cf-sp-3);
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-12);
  color: var(--cf-fg-2);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-model-pill:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-model-pill span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.cf-ref-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding-inline: 8px;
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-11);
  color: var(--cf-fg);
  background: var(--cf-panel-3);
}

/* \u8F93\u5165\u533A\u91CC\u7684\u53C2\u8003\u56FE\u7F29\u7565\u56FE\u6761 */
.cf-composer-refs { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 var(--cf-sp-2); }
.cf-ref-thumb {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: var(--cf-r-sm);
  overflow: hidden;
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  background: var(--cf-panel-2);
}
.cf-ref-thumb img { width: 100%; height: 100%; object-fit: cover; }
.cf-ref-x {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 16px;
  height: 16px;
  display: grid;
  place-items: center;
  border-radius: var(--cf-r-pill);
  background: oklch(0% 0 0 / 0.6);
  color: #fff;
  font-size: 11px;
  line-height: 1;
}
.cf-ref-x:hover { background: oklch(0% 0 0 / 0.85); }

/* \u60AC\u6D6E\uFF1A\u7F29\u653E\u3001\u7F29\u7565\u56FE\u3002\u4E24\u8005\u540C\u4E00\u53F3\u8FB9\u754C\u7EBF\uFF0C\u4E2D\u95F4\u7559 12px \u5B89\u5168\u8DDD\u79BB\uFF0C\u907F\u514D\u6ED1\u6746\u8BEF\u89E6\u7F29\u7565\u56FE */
.cf-zoom {
  position: absolute;
  z-index: var(--cf-z-float);
  right: var(--cf-sp-3);
  bottom: calc(var(--cf-sp-3) + var(--cf-mini-h) + 12px);
  top: auto;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 30px;
  padding: 0 4px;
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
}
.cf-zoom .cf-icon-btn { width: 24px; height: 24px; border-radius: var(--cf-r-pill); }
.cf-zoom-num { min-width: 3.6ch; text-align: end; font-size: var(--cf-fs-12); color: var(--cf-fg-2); font-variant-numeric: tabular-nums; margin-inline-end: 2px; }
.cf-zoom-range { width: 62px; height: 20px; appearance: none; background: transparent; cursor: pointer; }
.cf-zoom-range::-webkit-slider-runnable-track { height: 2px; background: var(--cf-line-strong); border-radius: 2px; }
.cf-zoom-range::-webkit-slider-thumb { appearance: none; width: 11px; height: 11px; margin-top: -4.5px; border-radius: var(--cf-r-pill); background: var(--cf-fg); }
.cf-zoom-range::-moz-range-track { height: 2px; background: var(--cf-line-strong); }
.cf-zoom-range::-moz-range-thumb { width: 11px; height: 11px; border: 0; border-radius: var(--cf-r-pill); background: var(--cf-fg); }
.cf-zoom .cf-btn--sm { height: 24px; padding-inline: 6px; }

.cf-minimap {
  position: absolute;
  z-index: var(--cf-z-float);
  right: var(--cf-sp-3);
  bottom: var(--cf-sp-3);
  width: var(--cf-mini-w);
  height: var(--cf-mini-h);
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  cursor: pointer;
}
.cf-mini-node { fill: var(--cf-fg-2); fill-opacity: 0.3; }
.cf-mini-image { fill: var(--cf-fg-2); fill-opacity: 0.45; }
.cf-mini-group { fill: none; stroke: var(--cf-line-strong); stroke-width: 1; }
.cf-mini-view { fill: color-mix(in oklab, var(--cf-focus) 12%, transparent); stroke: var(--cf-focus); stroke-width: 1.2; }

/* \u5DE6\u4E0B\u89D2\u64CD\u4F5C\u63D0\u793A\uFF1A\u4E0E\u5DE5\u5177\u680F\u5DE6\u8FB9\u8DDD\u5BF9\u9F50\uFF0C\u5355\u884C\u5B8C\u6574\u663E\u793A\uFF0C\u4E0D\u51FA\u73B0\u5B64\u5B57\u6298\u884C */
.cf-editor-hint {
  position: absolute;
  bottom: var(--cf-sp-4);
  left: var(--cf-sp-3);
  z-index: var(--cf-z-float);
  display: flex;
  align-items: center;
  gap: var(--cf-sp-3);
  font-size: var(--cf-fs-12);
  line-height: 1.5;
  color: var(--cf-caption);
  white-space: nowrap;
  pointer-events: none;
}
.cf-editor-hint span + span { position: relative; }
.cf-editor-hint span + span::before {
  content: "";
  position: absolute;
  left: calc(var(--cf-sp-3) / -2);
  top: 50%;
  width: var(--cf-hair);
  height: 9px;
  translate: 0 -50%;
  background: var(--cf-line-strong);
}

/* \u56FE\u7247\u706F\u7BB1\uFF1A\u53CC\u51FB\u8282\u70B9\u770B\u5927\u56FE\uFF0CEsc \u6216\u70B9\u80CC\u666F\u5173\u95ED */
.cf-lightbox {
  position: absolute;
  inset: 0;
  z-index: var(--cf-z-modal);
  display: grid;
  place-content: center;
  justify-items: center;
  gap: var(--cf-sp-3);
  padding: var(--cf-sp-6);
  background: var(--cf-scrim-bg);
  animation: cf-fade 140ms var(--cf-ease);
}
@keyframes cf-fade { from { opacity: 0 } to { opacity: 1 } }
/* \u706F\u7BB1\u6309\u8282\u70B9\u771F\u5B9E\u6BD4\u4F8B\u5B9A\u5BBD\uFF1A\u5BBD = min(\u53EF\u7528\u5BBD, 720, \u53EF\u7528\u9AD8 \xD7 \u5BBD\u9AD8\u6BD4)\uFF0C\u9AD8\u518D\u7531\u6BD4\u4F8B\u63A8\u56DE\u6765 */
.cf-lightbox-figure {
  position: relative;
  --cf-lb-w: min(72vw, 720px, calc(64vh * var(--cf-lb-ratio, 1)));
  width: var(--cf-lb-w);
  aspect-ratio: var(--cf-lb-ratio, 1);
  margin: 0;
  overflow: hidden;
  border-radius: var(--cf-r-lg);
  background: var(--cf-panel-2);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 32px 80px -32px oklch(0% 0 0 / 0.85);
}
.cf-lightbox-figure img,
.cf-lightbox-figure canvas { width: 100%; height: 100%; object-fit: contain; }
.cf-lightbox-cap {
  max-width: min(72vw, 720px);
  font-size: var(--cf-fs-12);
  line-height: 1.6;
  color: oklch(96% 0 0 / 0.82);
  text-align: center;
  overflow-wrap: anywhere;
}
.cf-lightbox-x {
  position: absolute;
  /* \u8BA9\u5F00\u9876\u90E8\u6D6E\u5C9B\uFF0836 + 12 + 12\uFF09\uFF0C\u907F\u514D\u548C\u9876\u680F\u6309\u94AE\u53E0\u5728\u4E00\u8D77 */
  top: calc(var(--cf-sp-3) + 36px + var(--cf-sp-3));
  right: var(--cf-sp-3);
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel);
  color: var(--cf-fg-2);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
}
.cf-lightbox-x:hover { color: var(--cf-fg); background: var(--cf-panel-3); }

/* ---------- \u751F\u56FE\u5DE5\u4F5C\u53F0 ---------- */

.cf-studio { display: grid; grid-template-columns: 300px 400px minmax(0, 1fr); gap: var(--cf-sp-4); align-items: stretch; }
.cf-studio-col { display: grid; gap: var(--cf-sp-4); align-content: start; min-height: 0; }
.cf-studio .cf-card { display: grid; grid-template-rows: auto minmax(0, 1fr); min-height: 0; }
@media (min-width: 1081px) {
  .cf-page--studio {
    overflow: hidden;
  }
  .cf-page--studio > .cf-page-inner {
    height: 100%;
    max-width: none;
    padding-bottom: var(--cf-sp-4);
    overflow: hidden;
  }
  .cf-page--studio .cf-studio {
    height: 100%;
  }
  .cf-page--studio .cf-studio-col {
    height: 100%;
    grid-template-rows: minmax(0, 1fr);
    overflow: hidden;
  }
  .cf-page--studio .cf-studio .cf-card {
    height: 100%;
  }
  .cf-page--studio .cf-studio .cf-card-body {
    overflow-y: auto;
    min-height: 0;
  }
}
.cf-record-list { display: grid; gap: 2px; }
.cf-record {
  display: grid;
  gap: 2px;
  padding: var(--cf-sp-2) var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  text-align: start;
  transition: background-color var(--cf-dur) var(--cf-ease);
}
.cf-record:hover { background: var(--cf-hover); }
.cf-record-prompt { font-size: var(--cf-fs-12); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cf-record-meta { font-size: var(--cf-fs-11); color: var(--cf-caption); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.cf-form { display: grid; gap: var(--cf-sp-4); }
.cf-form-row { display: grid; gap: var(--cf-sp-2); }
.cf-form-head { display: flex; align-items: center; gap: var(--cf-sp-2); }
.cf-form-head .cf-label { margin-inline-end: 0; }
.cf-form-head-actions { display: flex; gap: var(--cf-sp-1); margin-inline-start: auto; flex-wrap: wrap; }

.cf-drop {
  display: grid;
  place-items: center;
  gap: 6px;
  min-height: 96px;
  padding: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  border: var(--cf-hair) dashed var(--cf-line-strong);
  color: var(--cf-muted);
  font-size: var(--cf-fs-12);
  text-align: center;
}

.cf-size-row { display: flex; align-items: center; gap: var(--cf-sp-2); }
.cf-size-row .cf-input { flex: 1; min-width: 0; }

.cf-results { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: var(--cf-sp-3); }
.cf-result { position: relative; border-radius: var(--cf-r-md); overflow: hidden; box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong); aspect-ratio: 1; background: var(--cf-panel-2); }
.cf-result img, .cf-result canvas { width: 100%; height: 100%; object-fit: cover; }

/* ---------- \u63D0\u793A\u8BCD\u5E93 / \u8D44\u4EA7\uFF1A\u5DE6\u7B5B\u9009 + \u4E3B\u533A ---------- */

.cf-split { display: grid; grid-template-columns: 168px minmax(0, 1fr); gap: var(--cf-sp-5); align-items: start; }
.cf-filters { display: grid; gap: var(--cf-sp-5); }
@media (min-width: 861px) {
  .cf-split > .cf-filters { border-inline-end: var(--cf-hair) solid var(--cf-line); padding-inline-end: var(--cf-sp-4); }
}
.cf-filter-group { display: grid; gap: var(--cf-sp-2); }
.cf-filter-title { font-size: var(--cf-fs-11); color: var(--cf-caption); }
.cf-filter-chips { display: flex; flex-wrap: wrap; gap: 6px; }

.cf-title-center { text-align: center; margin-bottom: var(--cf-sp-5); }
.cf-title-center h1 { font-size: var(--cf-fs-28); font-weight: 600; letter-spacing: -0.01em; }
.cf-title-center p { margin-top: 6px; font-size: var(--cf-fs-13); color: var(--cf-muted); }

.cf-search { position: relative; margin-bottom: var(--cf-sp-4); }
.cf-search .cf-input { padding-inline-start: 34px; height: 40px; }
.cf-search svg { position: absolute; left: 11px; top: 50%; translate: 0 -50%; color: var(--cf-caption); pointer-events: none; }

.cf-prompt-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr)); gap: var(--cf-sp-3); }
.cf-prompt-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  transition: box-shadow var(--cf-dur) var(--cf-ease);
  overflow: hidden;
  min-width: 0;
}
.cf-prompt-card:hover { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow); }
.cf-prompt-cover {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: var(--cf-sunken);
  overflow: hidden;
  cursor: pointer;
}
.cf-prompt-cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cf-prompt-cover-empty {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--cf-caption);
  background: var(--cf-sunken);
}
.cf-prompt-ref-badge {
  position: absolute;
  right: 8px;
  bottom: 8px;
  padding: 2px 7px;
  border-radius: var(--cf-r-pill);
  font-size: 11px;
  color: #fff;
  background: rgb(15 17 21 / 0.72);
}
.cf-prompt-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: var(--cf-sp-3) var(--cf-sp-4) var(--cf-sp-4);
  flex: 1;
  min-width: 0;
}
.cf-prompt-title { font-size: var(--cf-fs-14); font-weight: 500; overflow-wrap: break-word; text-align: start; cursor: pointer; }
.cf-prompt-text { font-size: var(--cf-fs-12); color: var(--cf-muted); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-align: start; cursor: pointer; }
.cf-prompt-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: auto; }
.cf-tag { font-size: var(--cf-fs-11); color: var(--cf-muted); padding: 2px 8px; border-radius: var(--cf-r-pill); background: var(--cf-panel-3); }

.cf-more { display: grid; place-items: center; padding: var(--cf-sp-4); }
.cf-end { text-align: center; font-size: var(--cf-fs-12); color: var(--cf-caption); padding: var(--cf-sp-4); }

/* ---------- \u8D44\u4EA7 ---------- */

.cf-asset-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr)); gap: var(--cf-sp-3); }
.cf-asset {
  display: grid;
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  overflow: hidden;
  text-align: start;
  min-width: 0;
}
.cf-asset-thumb { aspect-ratio: 4 / 3; background: var(--cf-panel-2); display: grid; place-items: center; color: var(--cf-caption); }
.cf-asset-thumb img { width: 100%; height: 100%; object-fit: cover; }
.cf-asset-body { display: grid; gap: 4px; padding: var(--cf-sp-3); min-width: 0; }
.cf-asset-title { font-size: var(--cf-fs-13); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cf-asset-meta { font-size: var(--cf-fs-11); color: var(--cf-caption); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ---------- \u914D\u7F6E ---------- */

.cf-config-notice {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-3);
  padding: var(--cf-sp-3) 0;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  border-bottom: var(--cf-hair) solid var(--cf-line);
}
.cf-config-notice-actions { display: flex; gap: var(--cf-sp-2); margin-inline-start: auto; }

.cf-tabs { display: flex; gap: var(--cf-sp-1); border-bottom: var(--cf-hair) solid var(--cf-line); margin-bottom: var(--cf-sp-5); overflow-x: auto; scrollbar-width: none; }
.cf-tabs::-webkit-scrollbar { display: none; }
.cf-tab {
  position: relative;
  padding: var(--cf-sp-3) var(--cf-sp-3);
  font-size: var(--cf-fs-13);
  color: var(--cf-muted);
  white-space: nowrap;
  transition: color var(--cf-dur) var(--cf-ease);
}
.cf-tab:hover { color: var(--cf-fg); }
.cf-tab.is-on { color: var(--cf-fg); }
.cf-tab.is-on::after {
  content: "";
  position: absolute;
  left: var(--cf-sp-2);
  right: var(--cf-sp-2);
  bottom: -1px;
  height: 2px;
  background: var(--cf-fg);
}

.cf-section-head { display: flex; align-items: flex-start; gap: var(--cf-sp-4); margin-bottom: var(--cf-sp-4); }
.cf-section-desc { font-size: var(--cf-fs-12); color: var(--cf-muted); line-height: 1.6; max-width: 62ch; }
.cf-section-head .cf-btn { margin-inline-start: auto; flex: 0 0 auto; }

.cf-channel-list { display: grid; gap: var(--cf-sp-2); }
.cf-channel {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-4);
  padding: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}
.cf-channel-main { min-width: 0; display: grid; gap: 2px; }
.cf-channel-name { font-size: var(--cf-fs-14); font-weight: 500; }
.cf-channel-meta { font-size: var(--cf-fs-12); color: var(--cf-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cf-channel-actions { display: flex; gap: var(--cf-sp-1); margin-inline-start: auto; flex: 0 0 auto; }

.cf-defaults { display: grid; gap: var(--cf-sp-4); max-width: 560px; }

/* ---------- \u52A9\u624B\u4FA7\u680F ---------- */

.cf-dock {
  position: absolute;
  z-index: var(--cf-z-float);
  top: calc(var(--cf-sp-3) + 36px + var(--cf-sp-3));
  right: 0;
  bottom: 0;
  width: min(380px, 92%);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  background: var(--cf-panel);
  box-shadow: -1px 0 0 var(--cf-line), -24px 0 60px -40px oklch(0% 0 0 / 0.8);
  animation: cf-dock-in 180ms var(--cf-ease);
}
@keyframes cf-dock-in { from { transform: translateX(16px); opacity: 0.6 } to { transform: none; opacity: 1 } }

.cf-dock-head {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-2);
  padding: var(--cf-sp-3) var(--cf-sp-4);
  border-bottom: var(--cf-hair) solid var(--cf-line);
}
.cf-dock-title { font-size: var(--cf-fs-14); font-weight: 600; }
.cf-dock-head .cf-icon-btn { margin-inline-start: auto; }

.cf-dock-body { overflow-y: auto; padding: var(--cf-sp-4); display: grid; gap: var(--cf-sp-3); align-content: start; }

.cf-msg { display: grid; gap: 6px; max-width: 100%; }
.cf-msg--user { justify-items: end; }
.cf-msg-text {
  padding: 9px 12px;
  border-radius: var(--cf-r-md);
  font-size: var(--cf-fs-13);
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  background: var(--cf-panel-2);
  color: var(--cf-fg);
}
.cf-msg--user .cf-msg-text { background: var(--cf-active); }
.cf-msg-actions { display: flex; gap: 4px; }

.cf-dock-foot { border-top: var(--cf-hair) solid var(--cf-line); padding: var(--cf-sp-3); display: grid; gap: 6px; }
.cf-dock-input {
  width: 100%;
  min-height: 64px;
  max-height: 160px;
  resize: none;
  border: 0;
  padding: 2px;
  background: transparent;
  color: var(--cf-fg);
  font-size: var(--cf-fs-13);
  line-height: 1.55;
}
.cf-dock-bar { display: flex; align-items: center; gap: var(--cf-sp-2); }
.cf-dock-bar .cf-send { margin-inline-start: auto; }

/* ---------- \u53F3\u952E\u83DC\u5355 ---------- */

.cf-ctx {
  position: absolute;
  z-index: var(--cf-z-menu);
  min-width: 184px;
  display: grid;
  gap: 1px;
  padding: 4px;
  border-radius: var(--cf-r-md);
  background: var(--cf-panel-3);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.7);
}
.cf-ctx-item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding-inline: var(--cf-sp-2);
  border-radius: var(--cf-r-xs);
  font-size: var(--cf-fs-13);
  color: var(--cf-fg-2);
  text-align: start;
  white-space: nowrap;
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-ctx-item:hover:not(:disabled) { background: var(--cf-hover); color: var(--cf-fg); }
.cf-ctx-item:disabled { color: var(--cf-caption); }
.cf-ctx-item svg { flex: 0 0 auto; opacity: 0.75; }
.cf-ctx-item-label { flex: 1; }
.cf-ctx-item-key { color: var(--cf-caption); font-size: var(--cf-fs-11); }
.cf-ctx-sep { height: var(--cf-hair); background: var(--cf-line); margin: 3px 0; }
.cf-ctx-head { padding: 4px var(--cf-sp-2) 6px; font-size: var(--cf-fs-11); color: var(--cf-caption); }

/* ---------- \u5F39\u5C42 ---------- */

.cf-scrim {
  position: fixed;
  inset: 0;
  z-index: var(--cf-z-modal);
  display: grid;
  place-items: center;
  padding: var(--cf-sp-5);
  background: oklch(0% 0 0 / 0.55);
}
.cf-dialog {
  width: min(440px, 100%);
  max-height: min(80vh, 680px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-radius: var(--cf-r-lg);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 24px 60px -24px oklch(0% 0 0 / 0.7);
  overflow: hidden;
}
.cf-dialog--wide { width: min(720px, 100%); }
.cf-dialog-head {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-3);
  padding: var(--cf-sp-4);
  border-bottom: var(--cf-hair) solid var(--cf-line);
}
.cf-dialog-title { font-size: var(--cf-fs-16); font-weight: 600; }
.cf-dialog-head .cf-icon-btn { margin-inline-start: auto; }
.cf-dialog-body { padding: var(--cf-sp-4); overflow-y: auto; display: grid; gap: var(--cf-sp-4); align-content: start; }
.cf-dialog-foot { display: flex; gap: var(--cf-sp-2); justify-content: flex-end; }

.cf-menu {
  position: absolute;
  z-index: var(--cf-z-menu);
  min-width: 200px;
  display: grid;
  gap: 2px;
  padding: 4px;
  border-radius: var(--cf-r-md);
  background: var(--cf-panel-3);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.7);
}
.cf-menu-item {
  padding: 8px var(--cf-sp-3);
  border-radius: var(--cf-r-xs);
  text-align: start;
  font-size: var(--cf-fs-13);
  color: var(--cf-fg-2);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-menu-item:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-menu-item.is-on { color: var(--cf-fg); }
.cf-menu-sep { height: var(--cf-hair); background: var(--cf-line); margin: 4px 0; }
.cf-menu-head { padding: 6px var(--cf-sp-3); font-size: var(--cf-fs-11); color: var(--cf-caption); }
.cf-menu--up { bottom: calc(100% + 8px); left: 0; min-width: 220px; }
.cf-menu-item { display: flex; align-items: center; gap: 8px; }
.cf-menu-item svg { flex: 0 0 auto; opacity: 0.75; }
.cf-menu-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cf-menu-meta { margin-inline-start: auto; color: var(--cf-caption); font-size: var(--cf-fs-11); white-space: nowrap; }
.cf-menu-empty { padding: 8px var(--cf-sp-3); font-size: var(--cf-fs-12); color: var(--cf-muted); line-height: 1.5; }
.cf-menu-custom { display: flex; align-items: center; gap: 6px; padding: 2px var(--cf-sp-2) 6px; }

/* \u5C3A\u5BF8\u9762\u677F\uFF1A\u6BD4\u4F8B + \u81EA\u5B9A\u4E49\u50CF\u7D20\u653E\u5728\u540C\u4E00\u5F20\u9762\u677F\u91CC\uFF0C\u50CF\u53C2\u8003\u56FE\u90A3\u6837\u300C\u5C3A\u5BF8 / 16 \u500D\u6570\u5BF9\u9F50 / \u4E24\u4E2A\u50CF\u7D20\u6846 / \u6BD4\u4F8B\u80F6\u56CA\u300D */
.cf-size-panel { width: 300px; padding: var(--cf-sp-3); gap: var(--cf-sp-3); }
.cf-size-head { display: flex; align-items: center; gap: var(--cf-sp-2); }
.cf-size-title { font-size: var(--cf-fs-13); font-weight: 500; color: var(--cf-fg); }
.cf-size-align {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-inline-start: auto;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  cursor: pointer;
  white-space: nowrap;
}
.cf-size-align input { width: 14px; height: 14px; margin: 0; accent-color: var(--cf-fg); cursor: pointer; }
.cf-size-row { display: flex; align-items: center; gap: var(--cf-sp-2); }
.cf-px {
  flex: 1;
  min-width: 0;
  height: 36px;
  min-height: 36px;
  padding-inline: var(--cf-sp-2);
  font-size: var(--cf-fs-13);
  font-variant-numeric: tabular-nums;
  text-align: center;
  border-color: var(--cf-line-strong);
  border-radius: var(--cf-r-sm);
}
.cf-px:focus-visible { outline: 2px solid var(--cf-focus); outline-offset: 0; border-color: transparent; }
.cf-size-link {
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: var(--cf-r-xs);
  color: var(--cf-caption);
  transition: color var(--cf-dur) var(--cf-ease), background-color var(--cf-dur) var(--cf-ease);
}
.cf-size-link:hover { color: var(--cf-fg); background: var(--cf-hover); }
.cf-size-link.is-on { color: var(--cf-fg); background: var(--cf-active); }
.cf-size-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.cf-size-chip {
  height: 30px;
  flex: 1 1 0;
  min-width: 44px;
  padding-inline: 6px;
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-12);
  color: var(--cf-fg-2);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  transition: color var(--cf-dur) var(--cf-ease), background-color var(--cf-dur) var(--cf-ease),
              box-shadow var(--cf-dur) var(--cf-ease);
}
.cf-size-chip:hover { color: var(--cf-fg); background: var(--cf-hover); }
.cf-size-chip.is-on {
  color: var(--cf-fg);
  font-weight: 600;
  background: var(--cf-active);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg-2);
}
.cf-size-foot { display: flex; align-items: center; gap: var(--cf-sp-2); }
.cf-size-hint { font-size: var(--cf-fs-12); color: var(--cf-caption); font-variant-numeric: tabular-nums; }
.cf-size-foot .cf-btn { margin-inline-start: auto; }
.cf-size-note { font-size: var(--cf-fs-12); color: var(--cf-caption); line-height: 1.5; }
.cf-menu-x { color: var(--cf-caption); font-size: var(--cf-fs-12); flex: 0 0 auto; }
.cf-input--tiny { height: 30px; min-height: 30px; padding: 4px 6px; font-size: var(--cf-fs-12); }

.cf-toast {
  pointer-events: none;
  position: fixed;
  z-index: var(--cf-z-toast);
  left: 50%;
  top: calc(var(--cf-nav-h) + 14px);
  translate: -50% 0;
  padding: 8px var(--cf-sp-4);
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel-3);
  color: var(--cf-fg);
  font-size: var(--cf-fs-12);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.7);
}
.cf-toast.is-error { color: var(--cf-danger); }

/* ---------- \u51FA\u9519\u515C\u5E95 ---------- */

.cf-crash {
  display: grid;
  place-content: center;
  justify-items: center;
  gap: var(--cf-sp-2);
  height: 100%;
  padding: var(--cf-sp-6);
  text-align: center;
}
.cf-crash-icon { color: var(--cf-muted); }
.cf-crash-title { font-size: var(--cf-fs-16); font-weight: 500; }
.cf-crash-detail {
  max-width: 46ch;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  line-height: 1.6;
  overflow-wrap: anywhere;
}
.cf-crash-actions { display: flex; gap: var(--cf-sp-2); margin-top: var(--cf-sp-2); }

/* ---------- \u7A84\u5C4F ---------- */

@media (max-width: 1080px) {
  .cf-studio { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .cf-studio-col--records { grid-column: 1 / -1; }
}

@media (max-width: 860px) {
  .cf-page-inner { padding: calc(var(--cf-sp-3) + 36px + var(--cf-sp-3)) 20px var(--cf-sp-6); }
  .cf-nav { height: auto; padding: var(--cf-sp-2) 20px; flex-wrap: wrap; gap: var(--cf-sp-1); }
  .cf-nav-item.is-on::after { bottom: -6px; }
  .cf-nav-version { display: none; }
  .cf-split { grid-template-columns: minmax(0, 1fr); gap: var(--cf-sp-4); }
  .cf-filters { grid-auto-flow: column; grid-auto-columns: max-content; overflow-x: auto; gap: var(--cf-sp-4); }
  .cf-studio { grid-template-columns: minmax(0, 1fr); }
  .cf-rail { left: var(--cf-sp-2); }
  .cf-canvas-bar-name { display: none; }
  .cf-editor-hint { display: none; }
  .cf-composer { width: calc(100% - var(--cf-sp-4)); bottom: var(--cf-sp-2); }
  .cf-zoom { right: var(--cf-sp-2); top: var(--cf-sp-2); }
  .cf-minimap { display: none; }
  .cf-page-actions { margin-inline-start: 0; flex-wrap: wrap; }
  .cf-page-head { flex-wrap: wrap; }
}

/* \u7ED3\u679C\u56FE\u4E0A\u7684\u72B6\u6001\u89D2\u6807\uFF1A\u8FDC\u7A0B = \u53EA\u6709\u94FE\u63A5\u3001\u672C\u5730\u6CA1\u6709\u526F\u672C\uFF0C\u5BFC\u51FA\u4E0E\u7F29\u7565\u56FE\u4F1A\u53D7\u9650 */
.cf-result-flag {
  position: absolute;
  right: 6px;
  bottom: 6px;
  padding: 1px 7px;
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-11);
  color: var(--cf-tip-fg);
  background: var(--cf-tip-bg);
  opacity: 0.9;
}

/* ---------- \u6279\u91CF\u56FE\u7EC4 ---------- */

/* \u53E0\u724C\uFF1A\u4E3B\u56FE\u53F3\u4E0B\u9732\u4E24\u89D2\uFF0C\u6697\u793A"\u8FD8\u6709\u66F4\u591A" */
.cf-node-media--batch img {
  box-shadow: 4px 4px 0 -1px var(--cf-panel), 5px 5px 0 0 var(--cf-line-strong);
}

.cf-node-badge {
  position: absolute;
  right: 6px;
  top: 6px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  display: grid;
  place-items: center;
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-11);
  font-variant-numeric: tabular-nums;
  color: var(--cf-on-accent);
  background: var(--cf-accent);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.28);
}

/* \u751F\u56FE\u4E2D\u7684\u53D1\u9001\u6309\u94AE\uFF1A\u8F6C\u5708 + \u5141\u8BB8\u70B9\u51FB\u53D6\u6D88 */
.cf-send.is-busy {
  display: grid;
  place-items: center;
  background: var(--cf-accent);
  cursor: pointer;
}

/* \u8FDC\u7A0B\u515C\u5E95\u56FE\u4E0A\u7684\u89D2\u6807\uFF1A\u8BF4\u660E\u8FD9\u5F20\u56FE\u6CA1\u6709\u672C\u5730\u526F\u672C */
.cf-node-flag {
  position: absolute;
  left: 6px;
  top: 6px;
  padding: 1px 6px;
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-11);
  color: var(--cf-tip-fg);
  background: var(--cf-tip-bg);
  opacity: 0.85;
  pointer-events: none;
}

/* ---------- \u6E20\u9053\uFF1A\u6A21\u578B\u52FE\u9009\u5217\u8868 ---------- */

.cf-model-note {
  margin: 2px 0 6px;
  font-size: var(--cf-fs-12);
  color: var(--cf-caption);
}

.cf-model-list {
  display: grid;
  gap: 4px;
  max-height: 260px;
  overflow-y: auto;
  padding: 2px;
}

.cf-model-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: var(--cf-r-sm);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  font-size: var(--cf-fs-13);
}
/* \u542F\u7528\u7684\u884C\u52A0\u4E00\u70B9\u5E95\uFF0C\u626B\u4E00\u773C\u5C31\u77E5\u9053\u54EA\u4E9B\u5728\u751F\u6548 */
.cf-model-row.is-on { background: var(--cf-accent-soft, var(--cf-sunken)); }

.cf-model-row input[type='checkbox'] { flex: none; accent-color: var(--cf-accent); }

.cf-model-name {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--cf-fg);
}
.cf-model-row:not(.is-on) .cf-model-name { color: var(--cf-caption); }

.cf-model-tags { display: flex; gap: 3px; flex: none; }
.cf-model-guess { font-size: var(--cf-fs-11); color: var(--cf-caption); }

.cf-model-src {
  flex: none;
  font-size: var(--cf-fs-11);
  color: var(--cf-caption);
  min-width: 22px;
  text-align: end;
}
/* \u6CA1\u6709\u79FB\u9664\u6309\u94AE\u7684\u884C\u7559\u7B49\u5BBD\u5360\u4F4D\uFF0C\u907F\u514D\u53F3\u4FA7\u53C2\u5DEE */
.cf-model-hold { width: 22px; flex: none; }

/* ---------- \u5DE5\u4F5C\u53F0\u53C2\u8003\u56FE ---------- */

.cf-studio-ref {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-3);
  padding: 6px;
  border-radius: var(--cf-r-md);
  background: var(--cf-sunken);
}
.cf-studio-ref img {
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: var(--cf-r-sm);
  flex: none;
}
.cf-studio-ref-meta {
  display: grid;
  gap: 2px;
  min-width: 0;
  flex: 1;
  font-size: var(--cf-fs-12);
}
.cf-studio-ref-meta > span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--cf-fg);
}
.cf-studio-ref-hint { color: var(--cf-caption); font-size: var(--cf-fs-11); }

/* ---------- \u751F\u6210\u7ED3\u679C\uFF1A\u6279\u91CF\u53E0\u724C ---------- */

/* \u591A\u5F20\u65F6\u9732\u4E00\u4E2A\u89D2\uFF0C\u6697\u793A\u300C\u4E0B\u9762\u8FD8\u6709\u300D */
.cf-result--stack img {
  box-shadow: 3px 3px 0 -1px var(--cf-panel), 4px 4px 0 0 var(--cf-line-strong);
}

.cf-result-badge {
  position: absolute;
  right: 6px;
  top: 6px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  display: grid;
  place-items: center;
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-11);
  font-variant-numeric: tabular-nums;
  color: var(--cf-on-accent);
  background: var(--cf-accent);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.28);
}

/* \u300C\u9001\u5230\u753B\u5E03\u300D\uFF1A\u9ED8\u8BA4\u6DE1\u51FA\uFF0C\u60AC\u505C\u5361\u7247\u624D\u663E\u773C\uFF0C\u907F\u514D\u62A2\u89D2\u6807\u7684\u6CE8\u610F\u529B */
.cf-result-send {
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: var(--cf-r-sm);
  color: var(--cf-tip-fg);
  background: var(--cf-tip-bg);
  opacity: 0;
  transition: opacity 0.12s ease;
  cursor: pointer;
}
.cf-result:hover .cf-result-send,
.cf-result-send:focus-visible { opacity: 1; }

.cf-result-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--cf-sp-3);
  max-height: 62vh;
  overflow-y: auto;
  align-content: start;
}
.cf-result-gallery-item { margin: 0; }
.cf-result-gallery-item img {
  display: block;
  width: 100%;
  /* \u9650\u9AD8\uFF1A\u4E0D\u7136\u51E0\u5F20\u65B9\u5F62\u56FE\u53E0\u8D77\u6765\uFF0C\u5F39\u5C42\u4F1A\u9AD8\u5230\u770B\u4E0D\u89C1\u5E95 */
  max-height: 24vh;
  object-fit: contain;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
}
.cf-result-gallery-item figcaption {
  margin-top: 4px;
  font-size: var(--cf-fs-11);
  color: var(--cf-caption);
  font-variant-numeric: tabular-nums;
}

/* ---------- \u8D44\u4EA7\u7F29\u7565\u56FE / \u9884\u89C8 ---------- */

.cf-asset-thumb {
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  color: var(--cf-caption);
  cursor: default;
}
.cf-asset-thumb:has(img) { cursor: zoom-in; }
.cf-asset-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cf-asset-thumb-empty { font-size: var(--cf-fs-11); color: var(--cf-caption); }

.cf-asset-preview {
  display: grid;
  place-items: center;
  max-height: 62vh;
  overflow: hidden;
  border-radius: var(--cf-r-md);
  background: var(--cf-sunken);
}
.cf-asset-preview img {
  display: block;
  max-width: 100%;
  max-height: 62vh;
  object-fit: contain;
}
.cf-asset-preview-meta {
  margin-top: var(--cf-sp-2);
  font-size: var(--cf-fs-12);
  color: var(--cf-caption);
  font-variant-numeric: tabular-nums;
}

/* ---------- \u8282\u70B9\u4FE1\u606F ---------- */

.cf-info-list { display: grid; gap: 2px; }
.cf-info-row {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: var(--cf-sp-3);
  padding: 6px 0;
  border-bottom: var(--cf-hair) solid var(--cf-line);
  font-size: var(--cf-fs-13);
}
.cf-info-row:last-child { border-bottom: 0; }
.cf-info-key { color: var(--cf-caption); }
.cf-info-val { color: var(--cf-fg); overflow-wrap: anywhere; }
.cf-info-val.is-mono { font-variant-numeric: tabular-nums; font-size: var(--cf-fs-12); }

/* ---------- \u8499\u7248\u5C40\u90E8\u7F16\u8F91 ---------- */

.cf-mask-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: var(--cf-sp-3);
}
.cf-mask-label { font-size: var(--cf-fs-12); color: var(--cf-caption); margin-inline-end: 4px; }
.cf-mask-sep { width: var(--cf-hair); height: 16px; margin: 0 4px; background: var(--cf-line-strong); }

.cf-mask-stage {
  display: grid;
  place-items: center;
  padding: var(--cf-sp-4);
  max-height: 46vh;
  overflow: hidden;
  border-radius: var(--cf-r-md);
  background: var(--cf-sunken);
}
/* \u7D27\u8D34\u56FE\u7247\u7684\u5B9A\u4F4D\u5BB9\u5668\uFF1A\u5750\u6807\u6362\u7B97\u548C\u8499\u7248\u53E0\u52A0\u90FD\u4EE5\u5B83\u4E3A\u57FA\u51C6 */
.cf-mask-box {
  position: relative;
  display: inline-block;
  line-height: 0;
  touch-action: none;
  cursor: crosshair;
  user-select: none;
}
.cf-mask-box img {
  display: block;
  max-width: 100%;
  max-height: 42vh;
  object-fit: contain;
  pointer-events: none;
  border-radius: var(--cf-r-sm);
}
/* \u8499\u7248\u5C42\u4E0E\u56FE\u5B8C\u5168\u91CD\u5408\uFF1A\u7EDD\u5BF9\u5B9A\u4F4D\u94FA\u6EE1 stage */
.cf-mask-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.cf-mask-hint {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 10px;
  border-radius: var(--cf-r-pill);
  font-size: var(--cf-fs-12);
  color: var(--cf-tip-fg);
  background: var(--cf-tip-bg);
  opacity: 0.85;
  pointer-events: none;
}

/* ---------- \u89C6\u9891\u8282\u70B9 ---------- */

.cf-node-media--video { display: grid; place-items: center; background: var(--cf-sunken); }
.cf-node-media--video video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
}

/* \u89C6\u9891\u8282\u70B9\u7684\u4EFB\u52A1 ID / \u63D0\u793A\u8BCD\u6458\u8981\uFF1A\u5C0F\u5B57\u3001\u5355\u884C\u7701\u7565 */
.cf-node-taskid {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--cf-fs-11);
  font-variant-numeric: tabular-nums;
  color: var(--cf-caption);
  margin-top: 4px;
}

/* ---------- \u56FE\u7247\u5DE5\u5177\u5BF9\u8BDD\u6846 ---------- */

.cf-dialog--wide {
  width: min(820px, calc(100vw - 64px));
}

.cf-tool-row {
  display: flex;
  gap: var(--cf-sp-4);
  align-items: flex-start;
  margin-bottom: var(--cf-sp-3);
}

.cf-tool-row > .cf-field { flex: 1; min-width: 0; }

.cf-tool-ratios {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: var(--cf-sp-3);
}

.cf-tool-meta {
  margin-inline-start: auto;
  font-size: var(--cf-fs-12);
  color: var(--cf-caption);
  font-variant-numeric: tabular-nums;
}

.cf-tool-hint {
  font-size: var(--cf-fs-12);
  color: var(--cf-caption);
  margin-top: var(--cf-sp-3);
}

.cf-tool-check {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-size: var(--cf-fs-13);
  color: var(--cf-muted);
  cursor: pointer;
}

/* ---------- \u88C1\u526A ---------- */

.cf-crop-stage {
  display: grid;
  place-items: center;
  padding: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  background: var(--cf-sunken);
  max-height: 52vh;
  overflow: hidden;
}

.cf-crop-box {
  position: relative;
  display: inline-block;
  max-width: 100%;
  max-height: 48vh;
  user-select: none;
  touch-action: none;
}

.cf-crop-box img {
  display: block;
  max-width: 100%;
  max-height: 48vh;
  object-fit: contain;
  pointer-events: none;
  border-radius: var(--cf-r-sm);
}

/* \u56DB\u8FB9\u6697\u5316\uFF1A\u56DB\u4E2A\u77E9\u5F62\u800C\u4E0D\u662F box-shadow\uFF0C\u7F29\u5C0F\u65F6\u4E0D\u7CCA */
.cf-crop-shade {
  position: absolute;
  background: rgba(0, 0, 0, 0.52);
  pointer-events: none;
}

.cf-crop-frame {
  position: absolute;
  box-shadow: inset 0 0 0 1.5px var(--cf-accent);
  cursor: move;
  touch-action: none;
}

.cf-crop-handle {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: var(--cf-accent);
  box-shadow: 0 0 0 1.5px var(--cf-bg);
}

.cf-crop-handle--nw { left: -6px; top: -6px; cursor: nwse-resize; }
.cf-crop-handle--n  { left: 50%; top: -6px; margin-left: -6px; cursor: ns-resize; }
.cf-crop-handle--ne { right: -6px; top: -6px; cursor: nesw-resize; }
.cf-crop-handle--e  { right: -6px; top: 50%; margin-top: -6px; cursor: ew-resize; }
.cf-crop-handle--se { right: -6px; bottom: -6px; cursor: nwse-resize; }
.cf-crop-handle--s  { left: 50%; bottom: -6px; margin-left: -6px; cursor: ns-resize; }
.cf-crop-handle--sw { left: -6px; bottom: -6px; cursor: nesw-resize; }
.cf-crop-handle--w  { left: -6px; top: 50%; margin-top: -6px; cursor: ew-resize; }

/* ---------- \u5207\u56FE ---------- */

.cf-split-preview {
  padding: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  background: var(--cf-sunken);
}

.cf-split-grid {
  display: grid;
  gap: 3px;
  aspect-ratio: 4 / 3;
  max-height: 34vh;
  margin-inline: auto;
}

.cf-split-cell {
  display: grid;
  place-items: center;
  border-radius: var(--cf-r-xs);
  font-size: var(--cf-fs-11);
  color: var(--cf-caption);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}

/* ---------- \u591A\u89D2\u5EA6 ---------- */

.cf-angle-preview {
  display: grid;
  place-items: center;
  height: 240px;
  margin-bottom: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  background: var(--cf-sunken);
  perspective: 640px;
  overflow: hidden;
}

.cf-angle-preview img {
  max-width: 78%;
  max-height: 78%;
  object-fit: contain;
  transition: transform 120ms ease-out;
  border-radius: var(--cf-r-sm);
}

/* ---------- \u753B\u5E03\u5DE5\u4F5C\u6D41\u589E\u5F3A\uFF1A\u53CC\u5411\u7AEF\u53E3 / \u5173\u8054\u7EBF / \u914D\u7F6E\u9762\u677F / \u6279\u91CF\u5C55\u5F00 / \u591A\u9009\u680F ---------- */

.cf-edge.is-related .cf-edge-line {
  stroke: var(--cf-link);
  stroke-opacity: 0.72;
  stroke-width: 2;
}
.cf-edge.is-related .cf-arrow-head {
  fill: var(--cf-link);
  fill-opacity: 0.85;
}

.cf-node.is-target {
  box-shadow: inset 0 0 0 2px var(--cf-link), 0 0 0 4px color-mix(in oklab, var(--cf-link) 22%, transparent), var(--cf-card-shadow-hover);
}

.cf-node-port-in {
  position: absolute;
  left: -5px;
  top: 50%;
  width: 9px;
  height: 9px;
  transform: translateY(-50%);
  border-radius: var(--cf-r-pill);
  background: var(--cf-bg);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg-2);
  pointer-events: none;
  z-index: 3;
}
.cf-node.is-target .cf-node-port-in {
  transform: translateY(-50%) scale(1.45);
  background: var(--cf-link);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--cf-link) 28%, transparent);
}

.cf-node-badge { cursor: pointer; }
.cf-node-badge.is-on { outline: 2px solid var(--cf-fg); outline-offset: 1px; }

.cf-node-config {
  display: grid;
  gap: 5px;
  padding: 8px 10px;
  height: 100%;
  overflow-y: auto;
  align-content: start;
  font-size: var(--cf-fs-12);
}
.cf-node-config-tabs {
  display: flex;
  gap: 3px;
}
.cf-node-config-tab {
  flex: 1;
  height: 22px;
  border-radius: var(--cf-r-xs);
  font-size: 11px;
  color: var(--cf-muted);
  background: var(--cf-sunken);
  text-align: center;
}
.cf-node-config-tab.is-on {
  background: var(--cf-fg);
  color: var(--cf-primary-fg);
  font-weight: 500;
}
.cf-node-config-select,
.cf-node-config-input {
  width: 100%;
  min-width: 0;
  height: 24px;
  padding: 0 6px;
  border-radius: var(--cf-r-xs);
  border: var(--cf-hair) solid var(--cf-line-strong);
  background: var(--cf-sunken);
  color: var(--cf-fg);
  font-size: 11px;
}
.cf-node-config-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 48px;
  gap: 4px;
}
.cf-node-config-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-top: 2px;
}
.cf-node-config-meta {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  color: var(--cf-caption);
}

.cf-node-text-edit {
  width: 100%;
  height: 100%;
  min-height: 80px;
  border: 0;
  resize: none;
  background: var(--cf-sunken);
  color: var(--cf-fg);
  font-size: var(--cf-fs-13);
  line-height: 1.5;
  padding: 6px 8px;
  border-radius: var(--cf-r-xs);
  outline: 1.5px solid var(--cf-focus);
}

.cf-batch-pop {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 6;
  width: 320px;
  padding: 10px;
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow-hover);
}
.cf-batch-pop-head {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  font-size: var(--cf-fs-12);
  color: var(--cf-fg-2);
}
.cf-batch-pop-head > span { margin-inline-end: auto; font-weight: 500; }
.cf-batch-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
}
.cf-batch-item {
  position: relative;
  border-radius: var(--cf-r-sm);
  overflow: hidden;
  background: var(--cf-sunken);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}
.cf-batch-item.is-main {
  box-shadow: inset 0 0 0 1.5px var(--cf-accent);
}
.cf-batch-item img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  cursor: pointer;
}
.cf-batch-item-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  padding: 3px 4px;
  background: var(--cf-panel-2);
}
.cf-batch-item-btn {
  padding: 2px 4px;
  border-radius: var(--cf-r-xs);
  font-size: 11px;
  color: var(--cf-fg-2);
}
.cf-batch-item-btn:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-batch-main-tag {
  position: absolute;
  left: 4px;
  top: 4px;
  padding: 1px 5px;
  border-radius: var(--cf-r-pill);
  font-size: 10px;
  color: var(--cf-on-accent);
  background: var(--cf-accent);
}

.cf-sel-bar {
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--cf-z-float);
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), var(--cf-card-shadow-hover);
  white-space: nowrap;
}
.cf-sel-bar-count {
  padding: 0 6px;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
}

.cf-zoom.is-no-minimap { bottom: var(--cf-sp-3); }

/* ---------- \u5DE5\u4F5C\u53F0 v2\uFF1A\u72EC\u7ACB\u680F\u6EDA\u52A8 / \u591A\u56FE\u53C2\u8003 / \u6BD4\u4F8B\u6846 / \u72B6\u6001\u5361 / \u6A21\u6001\u9009\u62E9\u5668 ---------- */

.cf-record.is-active {
  background: var(--cf-accent-soft, var(--cf-hover));
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-focus);
}

.cf-studio-refs {
  display: grid;
  gap: 6px;
}

.cf-studio-ref-actions {
  display: flex;
  gap: 2px;
  flex: none;
}

.cf-aspect-box {
  display: inline-block;
  border: 1.5px solid currentColor;
  border-radius: 2px;
  flex: none;
}

.cf-result-unit {
  display: grid;
  gap: 6px;
  padding: 6px;
  border-radius: var(--cf-r-md);
  background: var(--cf-panel-2);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}
.cf-result-unit.is-active {
  box-shadow: inset 0 0 0 1.5px var(--cf-focus);
}

.cf-result-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  font-size: 11px;
  color: var(--cf-caption);
  min-width: 0;
}
.cf-result-meta-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.cf-result-meta-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: none;
}

.cf-pending-card,
.cf-failed-card {
  display: grid;
  place-items: center;
  gap: 8px;
  min-height: 150px;
  padding: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  background: var(--cf-panel-2);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  text-align: center;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
}
.cf-failed-card {
  box-shadow: inset 0 0 0 var(--cf-hair) color-mix(in srgb, var(--cf-danger) 55%, transparent);
}
.cf-failed-err {
  color: var(--cf-danger);
  font-size: 11px;
  word-break: break-word;
  max-width: 100%;
}

.cf-slot-status-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.cf-slot-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: var(--cf-r-xs);
  font-size: 11px;
  background: var(--cf-sunken);
  color: var(--cf-muted);
}
.cf-slot-pill.is-failed { color: var(--cf-danger); }

.cf-picker-list {
  display: grid;
  gap: 6px;
  max-height: 52vh;
  overflow-y: auto;
  margin-top: var(--cf-sp-3);
}
.cf-picker-item {
  display: flex;
  align-items: flex-start;
  gap: var(--cf-sp-3);
  padding: 8px 10px;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  text-align: start;
  cursor: pointer;
}
.cf-picker-item:hover { background: var(--cf-hover); }
.cf-picker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  gap: var(--cf-sp-2);
  max-height: 52vh;
  overflow-y: auto;
  margin-top: var(--cf-sp-3);
}
.cf-picker-asset {
  display: grid;
  gap: 4px;
  padding: 4px;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  text-align: start;
  cursor: pointer;
}
.cf-picker-asset:hover { box-shadow: inset 0 0 0 1.5px var(--cf-focus); }
.cf-picker-asset img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--cf-r-xs);
}
.cf-picker-asset span {
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------- \u63D0\u793A\u8BCD\u8BE6\u60C5 / \u901A\u7528\u6311\u9009\u5668 / \u6765\u6E90\u9884\u89C8 ---------- */

.cf-prompt-card-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
}

.cf-prompt-detail {
  display: grid;
  gap: var(--cf-sp-4);
}
.cf-prompt-detail-media {
  display: grid;
  gap: var(--cf-sp-3);
}
.cf-prompt-detail-cover {
  border-radius: var(--cf-r-md);
  overflow: hidden;
  background: var(--cf-sunken);
  max-height: 300px;
}
.cf-prompt-detail-cover img,
.cf-prompt-detail-cover .cf-prompt-cover-empty {
  width: 100%;
  max-height: 300px;
  min-height: 160px;
  object-fit: contain;
  display: block;
}
.cf-prompt-detail-subhead {
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  margin-bottom: 6px;
}
.cf-prompt-detail-ref-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(76px, 1fr));
  gap: 6px;
}
.cf-prompt-detail-ref-item {
  aspect-ratio: 1;
  border-radius: var(--cf-r-sm);
  overflow: hidden;
  background: var(--cf-sunken);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}
.cf-prompt-detail-ref-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.cf-prompt-detail-body {
  display: grid;
  gap: var(--cf-sp-3);
}
.cf-prompt-detail-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.cf-prompt-detail-note {
  font-size: var(--cf-fs-11);
  color: var(--cf-caption);
}
.cf-link {
  font-size: var(--cf-fs-12);
  color: var(--cf-link);
  text-decoration: underline;
}
.cf-prompt-detail-desc {
  font-size: var(--cf-fs-13);
  color: var(--cf-muted);
  line-height: 1.6;
}
.cf-prompt-detail-preview {
  padding: var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  font-size: var(--cf-fs-12);
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.cf-prompt-detail-full {
  padding: var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  font-size: var(--cf-fs-13);
  line-height: 1.7;
  color: var(--cf-fg);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  user-select: text;
}

.cf-prompt-picker {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: var(--cf-sp-4);
  height: min(62vh, 560px);
  min-height: 0;
}
@media (max-width: 720px) {
  .cf-prompt-picker {
    grid-template-columns: minmax(0, 1fr);
    height: auto;
  }
}
.cf-prompt-picker-side {
  display: grid;
  gap: var(--cf-sp-4);
  align-content: start;
  overflow-y: auto;
  padding-inline-end: var(--cf-sp-2);
  border-inline-end: var(--cf-hair) solid var(--cf-line);
}
.cf-prompt-picker-main {
  display: flex;
  flex-direction: column;
  gap: var(--cf-sp-3);
  min-width: 0;
  min-height: 0;
}
.cf-prompt-picker-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-inline-end: 4px;
}
.cf-prompt-picker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  gap: var(--cf-sp-2);
}
.cf-prompt-picker-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  overflow: hidden;
  min-width: 0;
}
.cf-prompt-picker-card:hover {
  box-shadow: inset 0 0 0 1.5px var(--cf-focus);
}
.cf-prompt-picker-thumb {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  background: var(--cf-panel-2);
  overflow: hidden;
  cursor: pointer;
}
.cf-prompt-picker-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.cf-prompt-picker-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  flex: 1;
  min-width: 0;
}
.cf-prompt-picker-title {
  font-size: var(--cf-fs-12);
  font-weight: 500;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.cf-prompt-picker-snippet {
  font-size: 11px;
  color: var(--cf-muted);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cf-prompt-picker-foot {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: 2px;
}

.cf-source-presets {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--cf-sp-2);
  padding: 8px 10px;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
}

.cf-source-preview-list {
  display: grid;
  gap: 8px;
  max-height: 54vh;
  overflow-y: auto;
}
.cf-source-preview-row {
  display: flex;
  align-items: center;
  gap: var(--cf-sp-3);
  padding: 8px;
  border-radius: var(--cf-r-sm);
  background: var(--cf-sunken);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
}
.cf-source-preview-thumb {
  width: 52px;
  height: 52px;
  border-radius: var(--cf-r-xs);
  overflow: hidden;
  flex: none;
  background: var(--cf-panel-2);
}
.cf-source-preview-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
`;var bo=`${ho}
${vo}`;var b=Zt(require("react"),1),js=b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4.6 8v7.9a2.4 2.4 0 0 0 2.4 2.4h7.6"}),b.default.createElement("rect",{x:"7.2",y:"3.2",width:"13.6",height:"13.6",rx:"3.1"}),b.default.createElement("circle",{cx:"11.7",cy:"7.7",r:"1.35"}),b.default.createElement("path",{d:"M9.3 13.6l3.6-4.3 3.9 4.3"})),Fs={canvas:js,image:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),b.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),b.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),b.default.createElement("path",{d:"M5 17h14"})),folder:b.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:b.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),gear:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"3.1"}),b.default.createElement("path",{d:"M19.4 13.6a7.6 7.6 0 0 0 0-3.2l1.9-1.4-1.6-2.8-2.3.8a7.6 7.6 0 0 0-2.8-1.6L14.2 2.8h-4.4l-.4 2.6a7.6 7.6 0 0 0-2.8 1.6l-2.3-.8-1.6 2.8 1.9 1.4a7.6 7.6 0 0 0 0 3.2l-1.9 1.4 1.6 2.8 2.3-.8a7.6 7.6 0 0 0 2.8 1.6l.4 2.6h4.4l.4-2.6a7.6 7.6 0 0 0 2.8-1.6l2.3.8 1.6-2.8z"})),cursor:b.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:b.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),b.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),b.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:b.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:b.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),b.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),b.default.createElement("path",{d:"M11 11l2 2"})),search:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),b.default.createElement("path",{d:"M16 16l4 4"})),plus:b.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:b.default.createElement("path",{d:"M5 12h14"}),trash:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),b.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),b.default.createElement("path",{d:"M14 6l4 4"})),close:b.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:b.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 16V4"}),b.default.createElement("path",{d:"M7 9l5-5 5 5"}),b.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 4v12"}),b.default.createElement("path",{d:"M7 11l5 5 5-5"}),b.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:b.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),b.default.createElement("path",{d:"M20 4v4h-4"})),more:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),b.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),b.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M9 8H4v5"}),b.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M15 8h5v5"}),b.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),crop:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M6 3v12a3 3 0 003 3h12"}),b.default.createElement("path",{d:"M18 21V9a3 3 0 00-3-3H3"})),split:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),b.default.createElement("path",{d:"M3 12h18M12 3v18"})),upscale:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M15 3h6v6"}),b.default.createElement("path",{d:"M9 21H3v-6"}),b.default.createElement("path",{d:"M21 3l-7 7"}),b.default.createElement("path",{d:"M3 21l7-7"})),angle:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9z"}),b.default.createElement("path",{d:"M4 7.5l8 4.5 8-4.5"}),b.default.createElement("path",{d:"M12 12v9"})),replace:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20 11a8 8 0 10-2.6 5.9"}),b.default.createElement("path",{d:"M20 5v6h-6"}),b.default.createElement("path",{d:"M12 8v8M9 13l3 3 3-3"})),lock:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"4.5",y:"10.5",width:"15",height:"10",rx:"2"}),b.default.createElement("path",{d:"M8 10.5V7a4 4 0 018 0v3.5"})),unlock:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"4.5",y:"10.5",width:"15",height:"10",rx:"2"}),b.default.createElement("path",{d:"M8 10.5V7a4 4 0 017.5-2"})),info:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"9"}),b.default.createElement("path",{d:"M12 11v6"}),b.default.createElement("path",{d:"M12 7.6h.01"})),video:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"2.5",y:"6",width:"13",height:"12",rx:"2"}),b.default.createElement("path",{d:"M15.5 10.5l6-3.5v10l-6-3.5z"})),copy:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"9",y:"9",width:"12",height:"12",rx:"2"}),b.default.createElement("path",{d:"M5 15V5a2 2 0 012-2h8"})),stack:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 3l9 5-9 5-9-5z"}),b.default.createElement("path",{d:"M3 13l9 5 9-5"}),b.default.createElement("path",{d:"M3 17.5l9 5 9-5"})),explode:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),b.default.createElement("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),b.default.createElement("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),b.default.createElement("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})),map:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),b.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),b.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M9 15l6-6"}),b.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),b.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),b.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),message:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20 15a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2h12a2 2 0 012 2z"})),play:b.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:b.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M10 6l-5 6 5 6"}),b.default.createElement("path",{d:"M5 12h14"})),arrowUp:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 19V5"}),b.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"})),resolution:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2.5"}),b.default.createElement("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1.2",fill:"currentColor",stroke:"none"})),sun:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"4"}),b.default.createElement("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"})),moon:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20.5 14.5A8.5 8.5 0 019.5 3.5a7 7 0 1011 11z"}))};function he({name:e,size:t=16,...n}){let r=Fs[e];return r?b.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n},r):null}function Ke({name:e,label:t,size:n=16,...r}){return b.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":t,"data-tip":t,...r},b.default.createElement(he,{name:e,size:n}))}function J({variant:e="ghost",size:t,icon:n,children:r,...o}){return b.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${t==="sm"?" cf-btn--sm":""}`,...o},n?b.default.createElement(he,{name:n,size:14}):null,r)}function lt({title:e,children:t,footer:n,onClose:r,wide:o}){return b.default.useEffect(()=>{let a=i=>{i.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[r]),b.default.createElement("div",{className:"cf-scrim",onPointerDown:a=>{a.target===a.currentTarget&&r()}},b.default.createElement("div",{className:`cf-dialog${o?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},b.default.createElement("header",{className:"cf-dialog-head"},b.default.createElement("h2",{className:"cf-dialog-title"},e),b.default.createElement(Ke,{name:"close",label:"\u5173\u95ED",onClick:r})),b.default.createElement("div",{className:"cf-dialog-body"},t,n?b.default.createElement("div",{className:"cf-dialog-foot"},n):null)))}var sr=class extends b.default.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[\u6625\u98CE\u753B\u5E03] \u6E32\u67D3\u51FA\u9519",t,n)}render(){let{error:t}=this.state;if(!t)return this.props.children;let n=String(t&&t.message||t);return b.default.createElement("div",{className:"cf-crash",role:"alert"},b.default.createElement("span",{className:"cf-crash-icon"},b.default.createElement(he,{name:"refresh",size:22})),b.default.createElement("p",{className:"cf-crash-title"},"\u8FD9\u4E00\u5757\u51FA\u9519\u4E86"),b.default.createElement("p",{className:"cf-crash-detail"},n),b.default.createElement("div",{className:"cf-crash-actions"},b.default.createElement(J,{variant:"primary",size:"sm",onClick:()=>this.setState({error:null})},"\u91CD\u8BD5"),b.default.createElement(J,{size:"sm",onClick:()=>{try{localStorage.clear()}catch{}location.reload()}},"\u91CD\u7F6E\u672C\u5730\u6570\u636E")))}};function yo({text:e,kind:t}){return b.default.createElement("p",{className:`cf-toast${t==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function Rt({icon:e="canvas",title:t,hint:n,action:r}){return b.default.createElement("div",{className:"cf-empty"},b.default.createElement("span",{className:"cf-empty-icon"},b.default.createElement(he,{name:e,size:28})),b.default.createElement("p",{className:"cf-empty-title"},t),n?b.default.createElement("p",{className:"cf-empty-hint"},n):null,r)}var Hs=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],Ht={image:"\u56FE\u7247",video:"\u89C6\u9891",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"},Ba=[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}],zn=[{id:"\u81EA\u52A8",label:"\u81EA\u52A8",w:1024,h:1024},{id:"1:1",label:"1:1",w:1024,h:1024},{id:"2:3",label:"2:3",w:832,h:1248},{id:"3:2",label:"3:2",w:1248,h:832},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1536,h:864},{id:"9:16",label:"9:16",w:864,h:1536},{id:"21:9",label:"21:9",w:1792,h:768}],fr=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],Xn=["1k","2k","4k","\u81EA\u52A8"],ta=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],lr=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],Oa=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],xo=0;function Ee(e="x"){return xo+=1,`${e}_${Date.now().toString(36)}${xo.toString(36)}`}function Tr(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:Ee("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}var Ys=240;var La=28,Xs=18;function fn(e){let[t,n]=String(e||"1:1").split(":").map(Number);return Number.isFinite(t)&&Number.isFinite(n)&&t>0&&n>0?t/n:1}function Tn(e="1:1",t=Ys){return{w:t,h:Math.round(t/fn(e))+La}}function wo(e,t="1:1"){switch(e){case"image":return Tn(t);case"video":return{w:320,h:260};case"audio":return{w:232,h:140};case"text":return{w:230,h:160};case"config":return{w:232,h:256};case"group":return{w:420,h:320};default:return{w:232,h:200}}}function ft(e,t,n={}){let r=wo(e,n.ratio),o={id:Ee(e[0]),type:e,x:Math.round(t.x-r.w/2),y:Math.round(t.y-r.h/2),w:r.w,h:r.h,name:"",status:"idle",z:e==="group"?1:2,...n};return e==="text"&&(o.text=n.text??""),e==="config"&&(o.mode=n.mode??"image",o.modelKey=n.modelKey??"",o.ratio=n.ratio??"1:1",o.count=n.count??1,o.resolution=n.resolution??"\u81EA\u52A8",o.quality=n.quality??"\u81EA\u52A8",o.prompt=n.prompt??""),e==="image"&&(o.prompt=n.prompt??"",o.ratio=n.ratio??"1:1",o.resolution=n.resolution??"\u81EA\u52A8",o.locked=n.locked??!0,o.images=n.images??[],o.primaryImageId=n.primaryImageId??""),e==="video"&&(o.prompt=n.prompt??"",o.ratio=n.ratio??"16:9",o.seconds=n.seconds??4,o.videoTaskId=n.videoTaskId??"",o.storageKey=n.storageKey??""),e==="audio"&&(o.prompt=n.prompt??""),o}function Ua(e="openai"){let t=lr.find(n=>n.id===e)||lr[0];return{id:Ee("ch"),name:"",protocol:t.id,baseUrl:t.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function Ws(e,t){return`${e}:${t}`}function wn(e,t){if(!t)return null;let[n,...r]=t.split(":"),o=e.find(i=>i.id===n);if(!o)return null;let a=o.models.find(i=>i.id===r.join(":"));return a?{channel:o,model:a,label:a.label||a.id}:null}function en(e,t="image"){let n=[];for(let r of e)if(r.enabled)for(let o of r.models)o.enabled&&(o.caps||[]).includes(t)&&n.push({key:Ws(r.id,o.id),model:o,channel:r,label:o.label||o.id});return n}var Vs=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],Gs=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function $r(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:Vs.map(e=>({...e})),promptSources:[],showToolbarLabels:!1,assets:Gs.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8",transparent:!1},canvasCount:1},records:[],assistantMessages:[],assistantModel:null,configTab:"channels",grid:"dots",theme:"system"}}function ko(){let e=Xs,t=Tn("3:4"),n=700,r=180,o=40,a=(v,P,T,A,$,K)=>{let Y=ft(v,{x:P+A/2,y:T+$/2},{...K,w:A,h:$});return Y.x=P,Y.y=T,Y},c=[{y:r,prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"},{y:r+t.h+e,prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"},{y:r+(t.h+e)*2,prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149"}].map(v=>a("image",n,v.y,t.w,t.h,{prompt:v.prompt,ratio:"3:4"})),s=c[c.length-1].y+t.h,f=a("group",n-o,r-60,t.w+o*2,s-r+o+60,{name:"\u9713\u8679\u8857\u89D2"}),d=a("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),m=a("config",400,300,232,176,{ratio:"3:4",count:1}),p=[{id:Ee("e"),from:d.id,to:m.id},...c.map(v=>({id:Ee("e"),from:m.id,to:v.id}))];return{nodes:[f,d,m,...c],edges:p}}function _a(e,t,n,r){if(n===r)return!1;let o=e.find(i=>i.id===n),a=e.find(i=>i.id===r);return!(!o||!a||o.type==="config"&&a.type==="config"||o.type==="group"||a.type==="group"||t.some(i=>i.from===n&&i.to===r))}function So(e,t){let n=e.filter(s=>t.includes(s.id)&&s.type!=="group");if(!n.length)return null;let r=44,o=Math.min(...n.map(s=>s.x))-r,a=Math.min(...n.map(s=>s.y))-r-34,i=Math.max(...n.map(s=>s.x+s.w))+r,c=Math.max(...n.map(s=>s.y+s.h))+r;return ft("group",{x:(o+i)/2,y:(a+c)/2},{w:Math.round(i-o),h:Math.round(c-a),name:"\u65B0\u5206\u7EC4",childIds:n.map(s=>s.id),x:Math.round(o),y:Math.round(a)})}function No(e){return e.openCanvasId?"editor":e.view}function Mo(e,t){return{...e,view:t,openCanvasId:null}}function Co(e,t){return{...e,openCanvasId:t}}function Ao(e){return{...e,openCanvasId:null,view:"canvas"}}var qs=["idle","running","done","failed"],cr=(e,t)=>Number.isFinite(e)?e:t;function Js(e,t){if(!e||typeof e!="object")return null;let n=Ht[e.type]?e.type:"text",r=wo(n),o=qs.includes(e.status)?e.status:"idle",a=o==="running"&&(n!=="video"||!e.videoTaskId),i={...e,id:typeof e.id=="string"&&e.id?e.id:`n_${t}`,type:n,x:cr(e.x,0),y:cr(e.y,0),w:Math.max(40,cr(e.w,r.w)),h:Math.max(40,cr(e.h,r.h)),name:typeof e.name=="string"?e.name:"",status:a?"failed":o,error:a?"\u9875\u9762\u5237\u65B0\u540E\u751F\u6210\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210":typeof e.error=="string"?e.error:"",z:cr(e.z,n==="group"?3:2)};return Array.isArray(e.childIds)&&(i.childIds=e.childIds.filter(c=>typeof c=="string")),i}function Qs(e,t){if(!e||typeof e!="object")return null;let n=Array.isArray(e.nodes)?e.nodes.map(Js).filter(Boolean):[],r=new Set(n.map(a=>a.id)),o=Array.isArray(e.edges)?e.edges.filter(a=>a&&typeof a=="object"&&r.has(a.from)&&r.has(a.to)).map((a,i)=>({id:typeof a.id=="string"&&a.id?a.id:`e_${i}`,from:a.from,to:a.to})):[];return{...e,id:typeof e.id=="string"&&e.id?e.id:`cv_${t}`,name:typeof e.name=="string"&&e.name?e.name:"\u672A\u547D\u540D\u753B\u5E03",nodes:n,edges:o,grid:Ba.some(a=>a.id===e.grid)?e.grid:"dots",camera:e.camera&&typeof e.camera=="object"?e.camera:{x:0,y:0,s:1},updatedAt:cr(e.updatedAt,Date.now())}}function Dr(e){let t=$r();if(!e||typeof e!="object")return t;let n={...t};return Hs.some(r=>r.id===e.view)&&(n.view=e.view),typeof e.configTab=="string"&&(n.configTab=e.configTab),n.canvases=Array.isArray(e.canvases)?e.canvases.map(Qs).filter(Boolean):[],n.channels=Array.isArray(e.channels)?e.channels.filter(r=>r&&typeof r=="object").map((r,o)=>({...r,id:typeof r.id=="string"&&r.id?r.id:`ch_${o}`,name:typeof r.name=="string"?r.name:"",baseUrl:typeof r.baseUrl=="string"?r.baseUrl:"",apiKey:typeof r.apiKey=="string"?r.apiKey:"",keyHint:typeof r.keyHint=="string"?r.keyHint:"",hasKey:!!r.apiKey||!!r.hasKey,enabled:r.enabled!==!1,models:Array.isArray(r.models)?r.models.filter(a=>a&&typeof a=="object").map((a,i)=>({...a,id:typeof a.id=="string"&&a.id?a.id:`m_${i}`,label:typeof a.label=="string"?a.label:"",caps:Array.isArray(a.caps)?a.caps.filter(c=>ta.some(s=>s.id===c)):[],enabled:a.enabled!==!1})):[]})):[],n.prompts=Array.isArray(e.prompts)?e.prompts.filter(r=>r&&typeof r=="object"):t.prompts,n.assets=Array.isArray(e.assets)?e.assets.filter(r=>r&&typeof r=="object"):t.assets,n.records=Array.isArray(e.records)?e.records.filter(r=>r&&typeof r=="object"):[],n.assistantMessages=Array.isArray(e.assistantMessages)?e.assistantMessages.filter(r=>r&&typeof r=="object"&&typeof r.text=="string"):[],n.assistantModel=e.assistantModel&&typeof e.assistantModel=="object"&&typeof e.assistantModel.provider=="string"&&typeof e.assistantModel.model=="string"?{provider:e.assistantModel.provider,model:e.assistantModel.model}:null,n.promptSources=Array.isArray(e.promptSources)?e.promptSources.filter(r=>r&&typeof r=="object"):[],e.defaults&&typeof e.defaults=="object"&&e.defaults.image&&typeof e.defaults.image=="object"&&(n.defaults={...t.defaults,...e.defaults,image:{...t.defaults.image,...e.defaults.image}}),n.openCanvasId=n.canvases.some(r=>r.id===e.openCanvasId)?e.openCanvasId:null,n.showToolbarLabels=!!e.showToolbarLabels,n.theme=["light","dark","system"].includes(e.theme)?e.theme:"system",n}function na(e=""){let t=String(e||""),n=new Set;return{get:()=>t,set(r){let o=String(typeof r=="function"?r(t):r??"");if(o!==t){t=o;for(let a of n)a(o)}},subscribe(r){return n.add(r),()=>n.delete(r)}}}var Io="dsh-chunfeng-image/",Eo=typeof window<"u"&&!!window.__DSH_BOOT__,Zs={providers:[{id:"preview",name:"\u9884\u89C8\u793A\u4F8B",models:[{id:"deepseek-v4.1-flash",name:"deepseek-v4.1-flash"},{id:"deepseek-v4.1-pro",name:"deepseek-v4.1-pro"}]}],default:{provider:"preview",model:"deepseek-v4.1-flash"},available:!1,preview:!0},dr=null;async function ra({force:e=!1}={}){if(dr&&!e)return dr;try{let t=await fetch(Io+"models",{headers:{"sec-fetch-site":"same-origin"},cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return dr=await t.json(),dr}catch(t){if(Eo)throw t;return dr=Zs,dr}}function zo(e,t){return t?.model?e?.providers?.find(o=>o.id===t.provider)?.models?.find(o=>o.id===t.model)?.name||t.model:""}async function Pr({messages:e,system:t,model:n,maxTokens:r,signal:o,onDelta:a,images:i}){if(!Eo)return Rs({messages:e,onDelta:a,signal:o});let c=await fetch(Io+"stream",{method:"POST",headers:{"content-type":"application/json","sec-fetch-site":"same-origin"},body:JSON.stringify({messages:e,system:t,model:n,maxTokens:r,images:i}),signal:o});if(!c.ok){let p=`\u6A21\u578B\u8C03\u7528\u5931\u8D25\uFF08HTTP ${c.status}\uFF09`;try{let v=await c.json();v?.error&&(p=v.error)}catch{}throw new Error(p)}if(!c.body)throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u6D41\u5F0F\u8BFB\u53D6");let s=c.body.getReader(),f=new TextDecoder,d="",m="";for(;;){let{value:p,done:v}=await s.read();if(v)break;d+=f.decode(p,{stream:!0});let P;for(;(P=d.indexOf(`
`))>=0;){let T=d.slice(0,P).trim();if(d=d.slice(P+1),!T)continue;let A;try{A=JSON.parse(T)}catch{continue}if(A.error)throw new Error(A.error);if(typeof A.d=="string"&&A.d&&(m+=A.d,a?.(A.d,m)),A.done)return m}}return m}async function Rs({messages:e,onDelta:t,signal:n}){let o=`\uFF08\u9884\u89C8\u793A\u4F8B\uFF0C\u6CA1\u6709\u8FDE\u63A5\u771F\u5B9E\u6A21\u578B\uFF09

\u6536\u5230\uFF1A${([...e||[]].reverse().find(i=>i.role==="user")?.text||"").slice(0,60)}`,a="";for(let i of o){if(n?.aborted)break;a+=i,t?.(i,a),await new Promise(c=>setTimeout(c,12))}return a}kn();function dn({storageKey:e="",width:t=0,height:n=0,bytes:r=0,mimeType:o="image/png",prompt:a="",id:i,createdAt:c,url:s="",degraded:f=!1,remoteUrl:d=""}={}){return{id:i||`img_${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`,storageKey:e,width:t,height:n,bytes:r,mimeType:o,prompt:a,createdAt:c||Date.now(),url:s||d||"",degraded:!!f}}function Et(e){let t=e?.images||[];return t.length?t.find(r=>r.id===e.primaryImageId)||t[0]:null}function To(e,t){if(!(e.images||[]).some(r=>r.id===t))return e;let n=e.images.find(r=>r.id===t);return{...e,primaryImageId:t,storageKey:n.storageKey||e.storageKey}}function $o(e,t){let n=(e.images||[]).filter(i=>i.id!==t);if(!n.length)return{...e,images:[],primaryImageId:"",storageKey:""};let o=n.some(i=>i.id===e.primaryImageId)?e.primaryImageId:n[0].id,a=n.find(i=>i.id===o);return{...e,images:n,primaryImageId:o,storageKey:a?.storageKey||""}}function Do(e,{gap:t=24,makeId:n=()=>`i_${Math.random().toString(36).slice(2,8)}`}={}){let r=e.images||[];if(r.length<=1)return[];let o=[],a=e.x,i=e.y;return r.forEach(c=>{let s=c.width&&c.height?c.width/c.height:e.w/e.h,f=e.h,d=Math.max(140,Math.round(f*s));o.push({...e,id:n(),x:a,y:i,w:d,h:f,images:[c],primaryImageId:c.id,storageKey:c.storageKey||"",status:"idle"}),a+=d+t}),o}function Po(e,{makeId:t}={}){if(e.length<=1)return null;let n=e[0],r=[],o=n.x,a=n.y,i=-1/0,c=-1/0;return e.forEach(s=>{(s.images?.length?s.images:[{id:`img_${s.id}`,storageKey:s.storageKey||"",width:s.w,height:s.h,bytes:s.bytes||0,mimeType:s.mimeType||"image/png",prompt:s.prompt||"",createdAt:Date.now()}]).forEach(f=>r.push(f)),i=Math.max(i,s.x+s.w),c=Math.max(c,s.y+s.h)}),{...n,id:t?t():`i_${Math.random().toString(36).slice(2,8)}`,x:o,y:a,w:Math.max(n.w,i-o),h:Math.max(n.h,c-a),images:r,primaryImageId:r[0]?.id||"",storageKey:r[0]?.storageKey||"",status:"idle"}}kn();Vn();var _o=Math.random().toString(36).slice(2),tc=3e4,nc=4*1024*1024,rc=200,ac=8e3;function Ko(e){let t=2166136261,n=JSON.stringify(e);for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619)>>>0;return t.toString(16)}function jo(){try{let e=localStorage.getItem(gt.legacyState);return e&&e.length>2?e:null}catch{return null}}function oc(e,t=null){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ha(e,t=new WeakSet){if(e===null||typeof e!="object")return typeof e=="string"&&(e.startsWith("blob:")||e.startsWith("data:"))?"":e;if(t.has(e))return e;if(t.add(e),Array.isArray(e))return e.map(r=>Ha(r,t));let n={};for(let[r,o]of Object.entries(e))n[r]=Ha(o,t);return n}async function ic(){let e=await et(pe.meta,ze.schemaVersion).catch(()=>{}),t=jo();return(!e||e<1)&&!!t}async function Fo({onProgress:e}={}){if(!await ic())return{status:"skipped"};let t=await et(pe.meta,ze.migrationLock).catch(()=>null);if(t&&Date.now()-t.at<tc&&t.tabId!==_o)return{status:"locked"};await pn(pe.meta,ze.migrationLock,{at:Date.now(),tabId:_o}).catch(()=>{});let n=[],r=async(o,a,i)=>{await pn(o,a,i),n.push([o,a])};try{e?.("read");let o=jo(),a=JSON.parse(o),i=Dr(a);e?.("backup"),await r(pe.meta,ze.rawBackup,o.length<=nc?{at:Date.now(),bytes:o.length,raw:o}:{at:Date.now(),bytes:o.length,omitted:!0}),e?.("transform");let c=$r().defaults,s=Ha({...i,openCanvasId:null,assistantMessages:(i.assistantMessages||[]).slice(-rc).map(T=>({...T,text:typeof T.text=="string"?T.text.slice(0,ac):""})),channels:(i.channels||[]).map(T=>T.apiKey?T:{...T,apiKey:"",keyHint:"",hasKey:!1})});if(e?.("write"),await r(pe.appState,ze.canvasProjects,{state:{canvases:s.canvases,openCanvasId:null,grid:s.grid},version:1}),await r(pe.appState,ze.prompts,s.prompts),await r(pe.appState,ze.promptSources,s.promptSources),await r(pe.appState,ze.assets,s.assets),await r(pe.appState,ze.assistantMessages,s.assistantMessages),s.records.length){let T=Date.now();await mr(pe.logs,s.records.map((A,$)=>[ze.logOne(A.id||`log_${T}_${$}`),{...A,createdAt:A.createdAt||T}])),n.push([pe.logs,"*"])}try{localStorage.setItem(gt.config,JSON.stringify({channels:s.channels,defaults:s.defaults||c,assistantModel:s.assistantModel})),localStorage.setItem(gt.ui,JSON.stringify({view:s.view,configTab:s.configTab,grid:s.grid}))}catch(T){throw new Error(`\u914D\u7F6E\u5C42\u5199\u5165\u5931\u8D25\uFF08localStorage \u53EF\u80FD\u5DF2\u6EE1\uFF09\uFF1A${T.message}`)}e?.("verify");let d=(await et(pe.appState,ze.canvasProjects))?.state?.canvases,m=Array.isArray(d)&&d.length===s.canvases.length,p=m&&s.canvases.every((T,A)=>{let $=d[A];return $?.id===T.id&&Array.isArray($.nodes)&&$.nodes.length===T.nodes.length&&Ko($.nodes)===Ko(T.nodes)}),v=oc(gt.config,{}),P=Array.isArray(v.channels)&&v.channels.length===s.channels.length;if(!m||!p||!P)throw new Error("\u8FC1\u79FB\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A\u5199\u56DE\u5185\u5BB9\u4E0E\u65E7\u6570\u636E\u4E0D\u4E00\u81F4");return e?.("mark"),await mr(pe.meta,[[ze.schemaVersion,1],[ze.migratedAt,{at:Date.now(),fromKey:gt.legacyState,fromBytes:o.length,canvases:s.canvases.length}]]),await Wn(pe.meta,[ze.migrationLock]).catch(()=>{}),{status:"done",canvases:s.canvases.length}}catch(o){for(let[a,i]of n.reverse())i==="*"?await Lo(a).catch(()=>{}):await Wn(a,[i]).catch(()=>{});throw await pn(pe.meta,ze.migrationStatus,{status:"failed",at:Date.now(),error:String(o?.message||o)}).catch(()=>{}),await Wn(pe.meta,[ze.migrationLock]).catch(()=>{}),o}}Vn();kn();Vn();var Wo="dsh-chunfeng-image/";function Ya(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function cc(e,t){if(e===t)return!0;if(!e||!t)return!1;let n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>e[r]===t[r])}var Sf=ze.canvasProjects,Ho=0,Yo=null;function lc(e){Yo=e,clearTimeout(Ho),Ho=setTimeout(()=>{let t=Yo;t&&(!Array.isArray(t.channels)||t.channels.length===0||fetch(`${Wo}config`,{method:"PUT",headers:{"content-type":"application/json","sec-fetch-site":"same-origin"},body:JSON.stringify(t)}).catch(()=>{}))},600)}async function la(){try{let e=await fetch(`${Wo}config`,{headers:{"sec-fetch-site":"same-origin"},cache:"no-store"});return e.ok&&(await e.json())?.config||null}catch{return null}}var gr=0,sa=null,ca=null,ia=Promise.resolve();async function Vo(){let e=Ya(gt.config)||{},t=Ya(gt.configBackup)||{},n=Ya(gt.ui)||{},r=Array.isArray(e.channels)&&e.channels.length?e.channels:Array.isArray(t.channels)&&t.channels.length?t.channels:e.channels;try{let o=await et(pe.appState,ze.canvasProjects);if(o){ca=o.state?.canvases??null;let[a,i,c,s,f]=await Promise.all([et(pe.appState,ze.prompts).catch(()=>{}),et(pe.appState,ze.promptSources).catch(()=>{}),et(pe.appState,ze.assets).catch(()=>{}),et(pe.appState,ze.assistantMessages).catch(()=>{}),Uo(pe.logs).catch(()=>[])]),d=Array.isArray(f)?f.filter(v=>v&&typeof v=="object"&&typeof v.id=="string").sort((v,P)=>(P.at||0)-(v.at||0)).slice(0,80):[],m=Array.isArray(e.promptSources)?e.promptSources:Array.isArray(t.promptSources)?t.promptSources:null,p=Array.isArray(i)&&i.length?i:m||i;return{from:"idb",state:{...o.state||{},prompts:a,promptSources:p,assets:c,assistantMessages:s,records:d,channels:r,defaults:e.defaults,assistantModel:e.assistantModel,view:n.view,configTab:n.configTab,showToolbarLabels:!!n.showToolbarLabels,theme:n.theme||"system"}}}}catch{}try{let o=localStorage.getItem(gt.legacyState);if(!o)return Array.isArray(r)&&r.length?{from:"config",state:{channels:r,defaults:e.defaults,assistantModel:e.assistantModel,promptSources:Array.isArray(e.promptSources)?e.promptSources:void 0}}:{from:"none",state:null};let a=JSON.parse(o);return a&&typeof a=="object"?{from:"legacy",state:a}:{from:"none",state:null}}catch{return{from:"none",state:null}}}var Xo=null;function Go(e,{pick:t,debounceMs:n=400,onError:r}={}){let o=t?t(e):{},a={canvases:e?.canvases,openCanvasId:e?.openCanvasId,channels:e?.channels,defaults:e?.defaults,assistantModel:e?.assistantModel,prompts:e?.prompts,promptSources:e?.promptSources,assets:e?.assets,assistantMessages:e?.assistantMessages,records:e?.records,view:e?.view,configTab:e?.configTab,grid:e?.grid,showToolbarLabels:e?.showToolbarLabels,theme:e?.theme,...o};ca&&cc(ca,a)||(ca=a,sa=e,gr&&clearTimeout(gr),gr=setTimeout(()=>{fa({onError:r})},n))}function fa({onError:e}={}){if(!sa)return ia;let t=sa;return sa=null,gr&&(clearTimeout(gr),gr=0),ia=ia.then(async()=>{let n=Xo;try{let r=[];if((!n||n.canvases!==t.canvases||n.openCanvasId!==t.openCanvasId||n.grid!==t.grid)&&r.push([ze.canvasProjects,{state:{canvases:t.canvases,openCanvasId:t.openCanvasId,grid:t.grid},version:1}]),(!n||n.prompts!==t.prompts)&&r.push([ze.prompts,t.prompts]),(!n||n.promptSources!==t.promptSources)&&r.push([ze.promptSources,t.promptSources]),(!n||n.assets!==t.assets)&&r.push([ze.assets,t.assets]),(!n||n.assistantMessages!==t.assistantMessages)&&r.push([ze.assistantMessages,t.assistantMessages]),r.length&&await mr(pe.appState,r),!n||n.records!==t.records){let i=Array.isArray(t.records)?t.records.slice(0,80):[],c=Array.isArray(n?.records)?n.records:[],s=new Set(i.map(d=>d.id)),f=c.filter(d=>d?.id&&!s.has(d.id)).map(d=>ze.logOne(d.id));f.length&&await Wn(pe.logs,f),i.length&&await mr(pe.logs,i.map(d=>[ze.logOne(d.id),d]))}let o=!n||n.channels!==t.channels||n.defaults!==t.defaults||n.assistantModel!==t.assistantModel||n.promptSources!==t.promptSources,a=!n||n.view!==t.view||n.configTab!==t.configTab||n.grid!==t.grid||n.showToolbarLabels!==t.showToolbarLabels||n.theme!==t.theme;try{if(o){let i=JSON.stringify({channels:t.channels,defaults:t.defaults,assistantModel:t.assistantModel,promptSources:t.promptSources}),c=localStorage.getItem(gt.config);if(c&&c!==i)try{localStorage.setItem(gt.configBackup,c)}catch{}localStorage.setItem(gt.config,i),lc({channels:t.channels,defaults:t.defaults,assistantModel:t.assistantModel,promptSources:t.promptSources})}a&&localStorage.setItem(gt.ui,JSON.stringify({view:t.view,configTab:t.configTab,grid:t.grid,showToolbarLabels:!!t.showToolbarLabels,theme:t.theme||"system"}))}catch(i){e?.(i,{quota:!0})}Xo={canvases:t.canvases,openCanvasId:t.openCanvasId,channels:t.channels,defaults:t.defaults,assistantModel:t.assistantModel,prompts:t.prompts,promptSources:t.promptSources,assets:t.assets,assistantMessages:t.assistantMessages,records:t.records,view:t.view,configTab:t.configTab,grid:t.grid,showToolbarLabels:t.showToolbarLabels,theme:t.theme}}catch(r){e?.(r,{quota:Oo(r)})}}),ia}typeof window<"u"&&(window.__CF_STORAGE__={flush:()=>fa(),async readCanvasState(){try{return(await et(pe.appState,ze.canvasProjects))?.state??null}catch{return null}},readConfig(){try{return JSON.parse(localStorage.getItem(gt.config)||"null")}catch{return null}},async readMeta(){let[e,t,n]=await Promise.all([et(pe.meta,ze.schemaVersion).catch(()=>{}),et(pe.meta,ze.migratedAt).catch(()=>{}),et(pe.meta,ze.migrationStatus).catch(()=>{})]);return{schemaVersion:e,migratedAt:t,status:n}}});Vn();kn();Gn();var ma="dsh-cf:prompt-cache:v1",mc=6e4,gc=6e3,oi=3,hc=3e3,vc="https://raw.githubusercontent.com/yukkcat/image-prompts/main/dist/sources",bc="https://cdn.jsdelivr.net/gh/yukkcat/image-prompts@main/dist/sources";function tr(e,t,n){return{id:e,name:t,url:`${vc}/${e}.json`,fallbackUrl:`${bc}/${e}.json`,homepage:n,enabled:!0,builtIn:!0}}var Ur=[tr("banana-prompt-quicker","Banana Prompt Quicker","https://glidea.github.io/banana-prompt-quicker/"),tr("davidwu-gpt-image2-prompts","DavidWu GPT Image 2","https://github.com/davidwuw0811-boop/awesome-gpt-image2-prompts"),tr("freestylefly-gpt-image-2","Freestylefly GPT Image 2","https://github.com/freestylefly/awesome-gpt-image-2"),tr("awesome-gpt-image","Awesome GPT Image","https://github.com/ZeroLu/awesome-gpt-image"),tr("awesome-gpt4o-image-prompts","Awesome GPT-4o","https://github.com/ImgEdify/Awesome-GPT4o-Image-Prompts"),tr("youmind-gpt-image-2","YouMind GPT Image 2","https://github.com/YouMind-OpenLab/awesome-gpt-image-2"),tr("youmind-nano-banana-pro","YouMind Nano Banana Pro","https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts")];function ha(e){let t=String(e||"").trim().match(/^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/i);return t?`https://cdn.jsdelivr.net/gh/${t[1]}/${t[2]}@${t[3]}/${t[4]}`:""}function yr(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/\/+(readme(?:\.md)?)?$/i,"").replace(/\/tree\/(?:main|master)$/i,"").replace(/\/+$/,"")}function yc(e){let t=yr(e);return t&&Ur.find(n=>yr(n.homepage)===t||yr(n.url)===t||yr(n.fallbackUrl)===t)||null}function Yt(e){let t=e&&typeof e=="object"?e:{url:e},n=String(t.url||"").trim(),r=n,o=String(t.homepage||"").trim(),a=!1,i=!1,c=yc(n);if(c)yr(n)===yr(c.homepage)&&(r=c.url,a=!0),o||(o=c.homepage);else{let m=n.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw)\/([^/]+)\/(.+)$/i);m&&(r=`https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}/${m[4]}`,i=!0,o||(o=n))}let s=String(t.fallbackUrl||"").trim()||(c?c.fallbackUrl:"")||ha(r),f=String(t.id||"").trim()||c?.id||`src_${Va(r||n||"empty")}`,d=String(t.name||"").trim()||c?.name||"\u672A\u547D\u540D\u6765\u6E90";return{id:f,name:d,url:r,fallbackUrl:s,homepage:o,enabled:t.enabled!==!1,builtIn:!!(t.builtIn||c),convertedFromHomepage:a,convertedFromBlob:i}}var Sn=null;function si(){if(typeof localStorage>"u")return null;try{let e=localStorage.getItem(ma);if(!e)return null;let t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch{return null}}function ci(){return typeof indexedDB<"u"&&indexedDB!==null}function an(){return Sn&&typeof Sn=="object"||(Sn=si()||{}),Sn}async function li(){if(!ci())return an();try{let e=await et(pe.appState,ze.promptCache).catch(()=>null),t=si(),n={...t&&typeof t=="object"?t:{},...Sn&&typeof Sn=="object"?Sn:{},...e&&typeof e=="object"?e:{}};if(Sn=n,t&&Object.keys(t).length){await pn(pe.appState,ze.promptCache,n).catch(()=>{});try{localStorage.removeItem(ma)}catch{}}return n}catch{return an()}}function fi(e){let t=e&&typeof e=="object"?e:{};if(Sn=t,ci())return pn(pe.appState,ze.promptCache,t).catch(()=>{}),!0;if(typeof localStorage>"u")return!0;try{return localStorage.setItem(ma,JSON.stringify(t)),!0}catch{try{let n=Object.keys(t),r={};return n.slice(-5).forEach(o=>{r[o]=t[o]}),localStorage.setItem(ma,JSON.stringify(r)),!0}catch{return!1}}}function ga(e,t=null){let n=[];if(Array.isArray(t)){let r=new Set;for(let o of t){if(!o||o.enabled===!1||!o.url)continue;let a=Yt(o),i=e?.[a.url]||e?.[o.url]||e?.[a.id];if(i?.items?.length)for(let c of i.items){let s=`${a.id}\0${c.id}`;r.has(s)||(r.add(s),n.push({...c,sourceId:a.id,sourceName:a.name,category:c.category||a.name}))}}return n}for(let[r,o]of Object.entries(e||{})){if(!o?.items?.length)continue;let a=o.id||r,i=o.name||r;o.items.forEach(c=>{n.push({...c,sourceId:c.sourceId||a,sourceName:i,category:c.category||i})})}return n}function _r(e,t,n=an()){let r=(e||[]).filter(c=>c&&typeof c=="object"&&!c.sourceId),o=ga(n,t||[]),a=[],i=new Set;for(let c of[...o,...r]){let s=`${c.sourceId||""}\0${c.id||`${c.title}\0${c.text}`}`;i.has(s)||(i.add(s),a.push(c))}return a}function Wa(e,t){let n=String(t||"").trim();if(!n)return"";if(!e)return n;try{return new URL(n,e).toString()}catch{return n}}var kt=(e,t)=>{if(!e||typeof e!="object")return"";for(let n of t){let r=e[n];if(typeof r=="string"&&r.trim())return r.trim()}return""};function xc(e,t){if(!Array.isArray(e))return[];let n=[],r=new Set;for(let o of e){let a=typeof o=="string"?o.trim():kt(o,["url","image_url","imageUrl","src"]);if(!a)continue;let i=Wa(t,a);r.has(i)||(r.add(i),n.push(i))}return n}function wc(e,t={}){let n=(i,c=0)=>{if(!i||c>4)return[];if(Array.isArray(i))return i.flatMap(s=>Array.isArray(s)?n(s,c+1):[ii(s,t)]);if(typeof i!="object")return[];for(let s of["prompts","items","list","data","results"])if(Array.isArray(i[s]))return i[s].map(f=>ii(f,t));return Array.isArray(i.categories)?i.categories.flatMap(s=>{let f=kt(s,["name","title","category"]);return n(s,c+1).map(d=>d?{...d,category:d.category||f}:null)}):[]},r=n(e).filter(Boolean),o=new Set,a=[];for(let i of r){let c=`${i.title}\0${i.text}`;if(!o.has(c)&&(o.add(c),a.push(i),a.length>=hc))break}return a}function ii(e,t={}){if(!e)return null;if(typeof e=="string"){let p=e.trim();return p?{id:`p_${Va(`${p.slice(0,24)}\0${p}`)}`,title:p.slice(0,24),text:p,category:t.sourceName||"",tags:[],coverUrl:"",referenceImageUrls:[],description:"",preview:"",author:"",sourceUrl:"",createdAt:"",updatedAt:"",imageMode:"",imageSize:"",sourceId:t.sourceId||"",sourceName:t.sourceName||""}:null}if(typeof e!="object")return null;let n=kt(e,["prompt","text","content","value","zh","description"]),r=kt(e,["title","name","label"])||n.slice(0,24);if(!n&&!r)return null;let o=kt(e,["description","desc","summary"]),a=o&&o!==n?o:"",i=e.tags??e.tag??e.labels,c=Array.isArray(i)?i.filter(p=>typeof p=="string"&&p.trim()).map(p=>p.trim()):typeof i=="string"&&i.trim()?i.split(/[,，;；\s]+/).filter(Boolean):[],s=e.referenceImageUrls??e.referenceImages??e.refImages??(Array.isArray(e.images)?e.images:[]),f=xc(s,t.baseUrl),d=kt(e,["coverUrl","cover","imageUrl","image","thumbnail","previewImage"]),m=Wa(t.baseUrl,d)||f[0]||"";return{id:kt(e,["id"])||`p_${Va(`${r}\0${n}`)}`,title:r,text:n||r,category:kt(e,["category","type","group","class"])||t.sourceName||"",tags:c,coverUrl:m,referenceImageUrls:f,description:a,preview:kt(e,["preview"]),author:kt(e,["author","creator"]),sourceUrl:Wa(t.baseUrl,kt(e,["sourceUrl","homepage","link"])),createdAt:kt(e,["createdAt","date"]),updatedAt:kt(e,["updatedAt"]),imageMode:kt(e,["imageMode"]),imageSize:kt(e,["imageSize"]),sourceId:t.sourceId||kt(e,["sourceId"])||"",sourceName:t.sourceName||""}}function Va(e){let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0).toString(36)}async function kc(e,t){try{let n=await fetch(`dsh-chunfeng-image/fetch?url=${encodeURIComponent(e)}`,{signal:t,headers:{"sec-fetch-site":"same-origin"},cache:"no-store"});if(!n.ok||!String(n.headers.get("content-type")||"").toLowerCase().includes("application/json"))return null;let o=await n.json();return!o||typeof o!="object"?null:o}catch{return null}}async function Sc(e,t,n){let r=0,o="",a=await kc(e,t);if(a){if(r=a.status,o=a.text||"",!a.ok&&!o)return{ok:!1,error:a.error||`HTTP ${r}`}}else{let s=await fetch(e,{signal:t,cache:"no-cache"});if(r=s.status,!s.ok)return{ok:!1,error:`HTTP ${s.status}`};o=await s.text()}if(r&&(r<200||r>=300))return{ok:!1,error:`HTTP ${r}`};if(/^\s*<(!doctype|html|head|body)/i.test(o))return{ok:!1,error:"\u8FD4\u56DE\u7684\u662F\u7F51\u9875\u800C\u4E0D\u662F JSON\uFF08\u8BF7\u586B .json \u6570\u636E\u76F4\u94FE\uFF09"};let i;try{i=JSON.parse(o)}catch{return{ok:!1,error:"JSON \u683C\u5F0F\u6709\u8BEF"}}let c=wc(i,{baseUrl:e,sourceId:n.id,sourceName:n.name});return c.length?{ok:!0,items:c}:{ok:!1,error:"\u8FD9\u4EFD JSON \u91CC\u6CA1\u8BA4\u51FA\u63D0\u793A\u8BCD"}}function Ga(e,t=an()){let n=Yt(e);if(!n.url||n.enabled===!1)return!1;let r=t[n.url]||t[e?.url]||t[n.id];return!!(!r||!Array.isArray(r.items)||r.items.length===0||r.lastError)}async function di(e,{signal:t,timeoutMs:n=mc,hedgeDelayMs:r=gc}={}){let o=Yt(e),{id:a,name:i,url:c,fallbackUrl:s}=o;if(!c)return{ok:!1,id:a,name:i,url:c,items:[],error:"\u6CA1\u6709\u586B\u5730\u5740"};if(!/^https?:\/\//i.test(c))return{ok:!1,id:a,name:i,url:c,items:[],error:"\u5730\u5740\u5FC5\u987B\u662F http(s)"};let f=Date.now(),d=!!(s&&s!==c),m=new AbortController,p=new AbortController,v=!1,P=()=>{m.abort(),p.abort()},T=setTimeout(()=>{v=!0,P()},n),A=()=>P();t?.addEventListener("abort",A,{once:!0});let $=I=>I?.name==="AbortError"||I?.name==="TimeoutError"?t?.aborted?"\u5DF2\u53D6\u6D88":v?`\u8D85\u8FC7 ${Math.round(n/1e3)} \u79D2\u6CA1\u54CD\u5E94`:"\u8BF7\u6C42\u5DF2\u53D6\u6D88":/failed to fetch|load failed|networkerror/i.test(I?.message||"")?"\u53D6\u4E0D\u5230\u5185\u5BB9\uFF1A\u8DE8\u57DF\u88AB\u62E6\u6216\u5730\u5740\u4E0D\u53EF\u8FBE\uFF08Host \u4EE3\u7406\u4E5F\u6CA1\u6210\u529F\uFF09":I?.message||"\u7F51\u7EDC\u9519\u8BEF",K=async(I,L)=>{try{return await Sc(I,L.signal,o)}catch(Z){return{ok:!1,error:$(Z),aborted:L.signal.aborted}}},Y=null;try{if(!d){let L=await K(c,m);return L.ok?{ok:!0,id:a,name:i,url:c,items:L.items,ms:Date.now()-f}:{ok:!1,id:a,name:i,url:c,items:[],error:L.error||$({name:"AbortError"}),ms:Date.now()-f}}let I=await new Promise(L=>{let Z=!1,ue=!1,te=!1,ee=!1,Te=null,E=null,z=N=>{Z||(Z=!0,Y&&(clearTimeout(Y),Y=null),P(),L(N))},H=()=>{if(!ue||!ee)return;let N=!E?.aborted&&E?.error||!Te?.aborted&&Te?.error||Te?.error||E?.error||(t?.aborted?"\u5DF2\u53D6\u6D88":`\u8D85\u8FC7 ${Math.round(n/1e3)} \u79D2\u6CA1\u54CD\u5E94`);z({ok:!1,error:N})},ae=()=>{if(!(te||Z)){if(te=!0,Y&&(clearTimeout(Y),Y=null),t?.aborted||v){ee=!0,E={ok:!1,error:t?.aborted?"\u5DF2\u53D6\u6D88":`\u8D85\u8FC7 ${Math.round(n/1e3)} \u79D2\u6CA1\u54CD\u5E94`,aborted:!0},H();return}K(s,p).then(N=>{if(ee=!0,E=N,N.ok){m.abort(),z(N);return}H()})}};Y=setTimeout(ae,Math.max(0,r)),K(c,m).then(N=>{if(ue=!0,Te=N,N.ok){p.abort(),z(N);return}te?H():ae()})});return I.ok?{ok:!0,id:a,name:i,url:c,items:I.items,ms:Date.now()-f}:{ok:!1,id:a,name:i,url:c,items:[],error:I.error,ms:Date.now()-f}}finally{Y&&clearTimeout(Y),clearTimeout(T),t?.removeEventListener("abort",A)}}async function pi(e,{signal:t,timeoutMs:n}={}){let r=an(),o=await di(e,{signal:t,timeoutMs:n});if(o.ok){let a=o.url||o.name;r[a]={id:o.id,name:o.name,url:o.url,items:o.items,at:Date.now(),count:o.items.length}}else o.url&&r[o.url]&&(r[o.url]={...r[o.url],lastError:o.error,lastTriedAt:Date.now()});return fi(r),{result:o,cache:r,prompts:ga(r,[e])}}async function va(e,{signal:t,onProgress:n,onResult:r,concurrency:o=oi,onlyMissingOrFailed:a=!1,timeoutMs:i,hedgeDelayMs:c}={}){let s=(e||[]).filter(A=>A&&A.url&&A.enabled!==!1),f=an();if(!s.length)return{results:[],skipped:0,cache:f,prompts:[]};let d=a?s.filter(A=>Ga(A,f)):s,m=s.length-d.length;if(!d.length)return{results:[],skipped:m,cache:f,prompts:ga(f,s)};let p=new Array(d.length),v=0,P=Math.max(1,Math.min(Number(o)||oi,d.length)),T=async()=>{for(;v<d.length;){let A=v;v+=1;let $=d[A];n?.({index:A,total:d.length,name:$.name||$.url});let K;try{K=await di($,{signal:t,timeoutMs:i,hedgeDelayMs:c})}catch(Y){let I=Yt($);K={ok:!1,id:I.id,name:I.name,url:I.url,items:[],error:Y?.message||"\u672A\u77E5\u9519\u8BEF"}}if(p[A]=K,K.ok){let Y=K.url||K.name;f[Y]={id:K.id,name:K.name,url:K.url,items:K.items,at:Date.now(),count:K.items.length}}else K.url&&f[K.url]&&(f[K.url]={...f[K.url],lastError:K.error,lastTriedAt:Date.now()});fi(f),r?.(K,{...f})}};return await Promise.all(Array.from({length:P},T)),{results:p,skipped:m,cache:f,prompts:ga(f,s)}}function ui(e,t=[],n={}){return(e||[]).map(r=>{let o=Yt(r),a=t.find(c=>c.url===o.url||c.url===r.url||c.id===o.id),i=n[o.url]||n[r.url]||n[o.id];return{id:o.id,name:o.name,url:o.url,enabled:o.enabled,ok:a?a.ok:null,error:a?a.error:i?.lastError||"",count:i?.count||i?.items?.length||0,at:i?.at||0,ms:a?.ms||0}})}async function nr(e,{max:t=4,signal:n}={}){let r=(e||[]).filter(i=>typeof i=="string"&&/^https?:\/\//i.test(i.trim())).slice(0,t);if(!r.length)return[];let o=async i=>{let c=[i],s=ha(i);s&&s!==i&&c.push(s);for(let m of c)try{let p=await fetch(`dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(m)}`,{signal:n,headers:{"sec-fetch-site":"same-origin"},cache:"force-cache"});if(p.ok){let v=await p.blob();if(v.size>0&&v.type.startsWith("image/"))return v}if(p.status===404)break}catch(p){if(p?.name==="AbortError"||n?.aborted)throw p}let f=await fetch(i,{signal:n,cache:"force-cache"});if(!f.ok)return null;let d=await f.blob();return d.size>0&&d.type.startsWith("image/")?d:null},a=[];for(let i=0;i<r.length&&!n?.aborted;i+=1)try{let c=await o(r[i]);if(!c)continue;let s=await $n(c).catch(()=>({width:0,height:0})),f=wt("ref");await Bt(f,c,{mimeType:c.type||"image/png",source:"prompt-ref",width:s.width,height:s.height});let d=await ht(f).catch(()=>URL.createObjectURL(c));a.push({id:`ref_${Date.now().toString(36)}_${i}`,name:`\u63D0\u793A\u8BCD\u53C2\u8003\u56FE ${i+1}`,storageKey:f,url:d,width:s.width,height:s.height})}catch(c){if(c?.name==="AbortError"||n?.aborted)break}return a}var x=Zt(require("react"),1);var g=Zt(require("react"),1);function Nc(e,t){return Math.max(40,Math.abs(t-e)*.45)}function Mc(e,t){return{x1:e.x+e.w,y1:e.y+e.h/2,x2:t.x,y2:t.y+t.h/2}}function mi(e,t,n){if(!e||!t)return!1;let{x1:r,y1:o,x2:a,y2:i}=Mc(e,t),c=Nc(r,a);return Math.max(r+c,a)>n.left&&Math.min(r,a-c)<n.right&&Math.max(o,i)>n.top&&Math.min(o,i)<n.bottom}function gi(e,t){return e?e.x+e.w>t.left&&e.x<t.right&&e.y+e.h>t.top&&e.y<t.bottom:!1}function hi(e,t,n){let r=e.s||1,o=n??Math.max(280,280),a=-e.x/r-o,i=-e.y/r-o;return{left:a,top:i,right:a+(t.w||0)/r+o*2,bottom:i+(t.h||0)/r+o*2}}Gn();var Pn=Zt(require("react"),1);var Cc=14,Ac=[{id:"copyPrompt",label:"\u590D\u5236\u63D0\u793A\u8BCD",icon:"copy",group:0},{id:"reversePrompt",label:"\u53CD\u63A8\u63D0\u793A\u8BCD",icon:"sparkle",group:0},{id:"sendToStudio",label:"\u9001\u53BB\u5DE5\u4F5C\u53F0",icon:"image",group:0},{id:"replace",label:"\u66FF\u6362\u56FE\u7247",icon:"replace",group:1},{id:"maskEdit",label:"\u5C40\u90E8\u4FEE\u6539",icon:"edit",group:1},{id:"crop",label:"\u88C1\u526A",icon:"crop",group:1},{id:"split",label:"\u5207\u56FE",icon:"split",group:1},{id:"upscale",label:"\u653E\u5927",icon:"upscale",group:1},{id:"angle",label:"\u591A\u89D2\u5EA6",icon:"angle",group:1},{id:"view",label:"\u770B\u5927\u56FE",icon:"search",group:2},{id:"info",label:"\u4FE1\u606F",icon:"info",group:2},{id:"saveAsset",label:"\u5B58\u4E3A\u8D44\u4EA7",icon:"folder",group:3},{id:"download",label:"\u4E0B\u8F7D",icon:"download",group:3},{id:"delete",label:"\u5220\u9664",icon:"trash",group:4,danger:!0}];function Ic(e,t){if(!e||!t)return null;let n=t.s||1;return{left:t.x+(e.x+e.w/2)*n,top:t.y+e.y*n-Cc}}function vi({node:e,cam:t,showLabels:n,onAction:r,onKeep:o,onLeave:a}){let i=Pn.default.useMemo(()=>{let s=e?.locked!==!1,f=[...Ac],d=f.findIndex(m=>m.id==="angle");return f.splice(d+1,0,{id:"resize",label:s?"\u6539\u4E3A\u81EA\u7531\u6BD4\u4F8B":"\u6539\u4E3A\u7B49\u6BD4\u7F29\u653E",icon:s?"lock":"unlock",group:1}),f},[e?.locked]),c=Ic(e,t);return!c||!e?null:Pn.default.createElement("div",{className:`cf-node-toolbar${n?" is-labels":""}`,style:{left:c.left,top:c.top},role:"toolbar","aria-label":"\u56FE\u7247\u64CD\u4F5C",onPointerEnter:o,onPointerLeave:a,onPointerDown:s=>s.stopPropagation()},i.map((s,f)=>{let d=i[f-1],m=d&&d.group!==s.group;return Pn.default.createElement(Pn.default.Fragment,{key:s.id},m?Pn.default.createElement("span",{className:"cf-node-toolbar-sep","aria-hidden":"true"}):null,Pn.default.createElement("button",{type:"button",className:`cf-node-toolbar-btn${s.danger?" is-danger":""}`,"data-tip":s.label,"aria-label":s.label,onClick:p=>{p.stopPropagation(),r(s.id,e)}},Pn.default.createElement(he,{name:s.icon,size:15}),n?Pn.default.createElement("span",null,s.label):null))}))}var ba=.1,qa=3,bi=4096;function ki(){let e=g.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0,prevS:null,gridS:null,stage:null}),t=g.default.useCallback(o=>{e.current.stage=o},[]),n=g.default.useCallback((o,a=e.current.stage)=>{let i=e.current;o&&(o.style.transform=`translate3d(${i.x}px, ${i.y}px, 0) scale(${i.s})`,i.prevS!==i.s&&(i.prevS=i.s,o.style.setProperty("--cf-cam-s",String(i.s))));let c=a?.firstElementChild?.classList?.contains("cf-grid")?a.firstElementChild:null;if(c){let s=28*i.s;i.gridS!==s&&(i.gridS=s,c.style.setProperty("--cf-grid",`${s}px`));let f=(i.x%s+s)%s,d=(i.y%s+s)%s;c.style.transform=`translate3d(${f}px, ${d}px, 0)`}},[]),r=g.default.useCallback((o,a,i,c,s,f=e.current.stage)=>{let d=e.current;d.tx=a,d.ty=i,d.ts=Math.min(qa,Math.max(ba,c));let m=()=>{d.raf=0,d.x=d.tx,d.y=d.ty,d.s=d.ts,n(o,f),s?.()};if(typeof requestAnimationFrame!="function"){m();return}d.raf||(d.raf=requestAnimationFrame(m))},[n]);return g.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),g.default.useMemo(()=>({cam:e,bindStage:t,apply:n,moveTo:r}),[t,n,r])}var Ec=["se","sw","ne","nw"];function yi(e,t){if(!e||!t)return"";let n=e.x+e.w,r=e.y+e.h/2,o=t.x,a=t.y+t.h/2,i=Math.max(40,Math.abs(o-n)*.45);return`M ${n} ${r} C ${n+i} ${r}, ${o-i} ${a}, ${o} ${a}`}function zc(e){let[t,n]=g.default.useState(Date.now());return g.default.useEffect(()=>{if(!e)return;let r=setInterval(()=>n(Date.now()),1e3);return()=>clearInterval(r)},[e]),e?Math.max(0,Math.round((t-e)/1e3)):0}function Tc({node:e,scaleBucket:t=1,expanded:n=!1,onToggleExpand:r}){let o=e.images||[],a=Et(e),i=a?.storageKey||e.storageKey||"",[c,s]=g.default.useState(()=>(i?rn(i):"")||e.src||""),[f,d]=g.default.useState(()=>i?Dn(i):"");g.default.useEffect(()=>{let $=!0;if(!i)return s(e.src||""),d(""),()=>{$=!1};s(rn(i)),d(Dn(i)),ht(i).then(Y=>{$&&s(Y||"")}).catch(()=>{$&&s("")}),vr(i).then(Y=>{$&&Y&&d(Y)}).catch(()=>{});let K=ti(Y=>{$&&Y===i&&d(Dn(i))});return()=>{$=!1,K()}},[i,e.src]);let m=e.status==="running",p=o.length>1,v=zc(m?e.startedAt:0),P=a?.degraded&&a.url||"",T=ni({originalUrl:c,previewUrl:f,forceOriginal:t>=1.8,renderedPx:Math.max(e.w||0,e.h||0)*t}),A=T||P;return g.default.createElement("div",{className:`cf-node-media${p?" cf-node-media--batch":""}${A?" has-img":""}`},A?g.default.createElement("img",{src:A,alt:e.prompt||"\u56FE\u7247",decoding:"async",draggable:!1}):null,!A&&m?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D",v>=3?` \xB7 ${v}s`:""):null,!A&&!m&&e.status!=="failed"?g.default.createElement("div",{className:"cf-node-empty"},g.default.createElement(he,{name:"image",size:20,stroke:1.4}),g.default.createElement("span",null,"\u56FE\u7247")):null,!A&&e.status==="failed"?g.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25",e.error?`\uFF1A${e.error}`:""):null,p?g.default.createElement("button",{type:"button",className:`cf-node-badge${n?" is-on":""}`,title:`\u5171 ${o.length} \u5F20 \xB7 \u70B9\u51FB\u5C55\u5F00`,"aria-expanded":n,onPointerDown:$=>$.stopPropagation(),onClick:$=>{$.stopPropagation(),r?.(e.id)}},o.length):null,A&&P&&!T?g.default.createElement("span",{className:"cf-node-flag"},"\u8FDC\u7A0B"):null)}function $c({entry:e,fallbackSrc:t="",onClick:n}){let r=e?.storageKey||"",o=e?.degraded?e.url||"":e?.url||t||"",[a,i]=g.default.useState(()=>(r?Dn(r)||rn(r):"")||o);return g.default.useEffect(()=>{let c=!0;return r?(i(Dn(r)||rn(r)||o),vr(r).then(s=>{c&&s&&i(s)}).catch(()=>{}),ht(r).then(s=>{c&&s&&i(f=>f||s)}).catch(()=>{}),()=>{c=!1}):(i(o),()=>{c=!1})},[r,o]),g.default.createElement("img",{src:a||void 0,alt:e?.prompt||"\u6279\u91CF\u56FE\u7247",decoding:"async",draggable:!1,onClick:n})}function Dc({node:e,onClose:t,onOpenZoom:n,onBatchAction:r}){let o=e.images||[],a=Et(e);return g.default.createElement("div",{className:"cf-batch-pop",style:{transform:`translate3d(${e.x}px, ${e.y+e.h+10}px, 0)`},onPointerDown:i=>i.stopPropagation(),onWheel:i=>i.stopPropagation()},g.default.createElement("div",{className:"cf-batch-pop-head"},g.default.createElement("span",null,"\u5171 ",o.length," \u5F20"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>r?.("explode",e)},"\u5168\u90E8\u62C6\u5206"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:t},"\u6536\u8D77")),g.default.createElement("div",{className:"cf-batch-grid"},o.map((i,c)=>{let s=a?.id===i.id;return g.default.createElement("div",{key:i.id||c,className:`cf-batch-item${s?" is-main":""}`},g.default.createElement($c,{entry:i,fallbackSrc:e.src||"",onClick:()=>n?.(e,c)}),s?g.default.createElement("span",{className:"cf-batch-main-tag"},"\u4E3B\u56FE"):null,g.default.createElement("div",{className:"cf-batch-item-bar"},s?g.default.createElement("span",{className:"cf-batch-item-btn",style:{opacity:.6}},"\u4E3B\u56FE"):g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",onClick:()=>r?.("setPrimary",e,i.id)},"\u8BBE\u4E3A\u4E3B\u56FE"),g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",title:"\u62C6\u6210\u72EC\u7ACB\u8282\u70B9",onClick:()=>r?.("duplicateItem",e,i.id)},"\u62C6\u51FA"),g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",title:"\u4E0B\u8F7D",onClick:()=>r?.("downloadItem",e,i.id)},"\u4E0B\u8F7D"),g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",title:"\u79FB\u9664",onClick:()=>r?.("removeItem",e,i.id)},"\u5220")))})))}function Pc({node:e}){let[t,n]=g.default.useState(""),r=e.storageKey||"";return g.default.useEffect(()=>{let o=!0;return r?(ht(r).then(a=>{o&&n(a||"")}).catch(()=>{o&&n("")}),()=>{o=!1}):(n(""),()=>{o=!1})},[r]),t?g.default.createElement("div",{className:"cf-node-media cf-node-media--video"},g.default.createElement("video",{src:t,controls:!0,preload:"metadata",playsInline:!0})):e.status==="running"?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D",e.videoTaskId?g.default.createElement("span",{className:"cf-node-taskid"},e.videoTaskId):null):e.status==="failed"?g.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25",e.error?`\uFF1A${e.error}`:""):g.default.createElement("div",{className:"cf-node-void"},"\u89C6\u9891",e.prompt?g.default.createElement("span",{className:"cf-node-taskid"},e.prompt.slice(0,24)):null)}var Bc=[{id:"image",label:"\u751F\u56FE"},{id:"text",label:"\u6587\u672C"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"}];function Oc({node:e,channels:t,upstreamSummary:n,onUpdateNode:r,onRunConfig:o}){let a=e.mode||"image",i=en(t,a),c=i.some(f=>f.key===e.modelKey)?e.modelKey:i[0]?.key||"",s=f=>f.stopPropagation();return g.default.createElement("div",{className:"cf-node-config",onPointerDown:s,onWheel:s},g.default.createElement("div",{className:"cf-node-config-tabs",role:"group","aria-label":"\u751F\u6210\u6A21\u5F0F"},Bc.map(f=>g.default.createElement("button",{key:f.id,type:"button",className:`cf-node-config-tab${a===f.id?" is-on":""}`,onClick:()=>r?.(e.id,{mode:f.id})},f.label))),g.default.createElement("select",{className:"cf-node-config-select","aria-label":"\u914D\u7F6E\u8282\u70B9\u6A21\u578B",value:c,onChange:f=>r?.(e.id,{modelKey:f.target.value})},i.length?i.map(f=>g.default.createElement("option",{key:f.key,value:f.key},f.label)):g.default.createElement("option",{value:""},"\u65E0\u53EF\u7528\u6A21\u578B")),a==="image"?g.default.createElement("div",{className:"cf-node-config-grid"},g.default.createElement("select",{className:"cf-node-config-select","aria-label":"\u6BD4\u4F8B",value:e.ratio||"1:1",onChange:f=>r?.(e.id,{ratio:f.target.value})},zn.map(f=>g.default.createElement("option",{key:f.id,value:f.id},f.label))),g.default.createElement("select",{className:"cf-node-config-select","aria-label":"\u5206\u8FA8\u7387",value:e.resolution||"\u81EA\u52A8",onChange:f=>r?.(e.id,{resolution:f.target.value})},Xn.map(f=>g.default.createElement("option",{key:f,value:f},f))),g.default.createElement("input",{type:"number",min:1,max:10,className:"cf-node-config-input","aria-label":"\u5F20\u6570",value:Math.max(1,Number(e.count)||1),onChange:f=>r?.(e.id,{count:Math.max(1,Math.min(10,Number(f.target.value)||1))})})):null,g.default.createElement("input",{type:"text",className:"cf-node-config-input",placeholder:"\u8F93\u5165\u6216\u8865\u5145\u63D0\u793A\u8BCD\u2026",value:e.prompt||"",onChange:f=>r?.(e.id,{prompt:f.target.value}),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),o?.(e))}}),g.default.createElement("div",{className:"cf-node-config-foot"},g.default.createElement("span",{className:"cf-node-config-meta",title:n||"\u672A\u8FDE\u63A5\u4E0A\u6E38\u8282\u70B9"},n||"\u53EF\u8FDE\u4E0A\u6E38\u56FE/\u6587\u672C"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",style:{height:22,paddingInline:8,fontSize:11},disabled:e.status==="running",onClick:()=>o?.(e)},e.status==="running"?"\u751F\u6210\u4E2D":"\u751F\u6210")))}function Lc({node:e,onCommit:t,onCancel:n}){let[r,o]=g.default.useState(e.text||"");return g.default.createElement("textarea",{autoFocus:!0,className:"cf-node-text-edit",value:r,onChange:a=>o(a.target.value),onPointerDown:a=>a.stopPropagation(),onBlur:()=>t(e.id,r),onKeyDown:a=>{a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),n()),(a.metaKey||a.ctrlKey)&&a.key==="Enter"&&(a.preventDefault(),t(e.id,r))}})}function Uc({node:e,channels:t,scaleBucket:n,expanded:r,upstreamSummary:o,isEditingText:a,onToggleExpand:i,onUpdateNode:c,onRunConfig:s,onCommitText:f,onCancelText:d}){switch(e.type){case"image":return g.default.createElement(Tc,{node:e,scaleBucket:n,expanded:r,onToggleExpand:i});case"video":return g.default.createElement(Pc,{node:e});case"audio":return g.default.createElement("div",{className:"cf-node-audio"},g.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(m,p)=>g.default.createElement("span",{key:p,style:{height:`${16+p*41%66}%`}}))),g.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return g.default.createElement("div",{className:"cf-node-text"},a?g.default.createElement(Lc,{node:e,onCommit:f,onCancel:d}):e.text?g.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):g.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":return g.default.createElement(Oc,{node:e,channels:t,upstreamSummary:o,onUpdateNode:c,onRunConfig:s});case"group":return null;default:return null}}var _c=g.default.memo(function({node:t,selected:n,dragging:r,isTarget:o,expanded:a,upstreamSummary:i,isEditingText:c,channels:s,scaleBucket:f,onNodeDown:d,onHoverEnter:m,onHoverLeave:p,onOpenZoom:v,onPortDown:P,onResizeDown:T,onToggleExpand:A,onUpdateNode:$,onRunConfig:K,onCommitText:Y,onCancelText:I}){return g.default.createElement("div",{className:`cf-node${n?" is-selected":""}${r?" is-dragging":""}${o?" is-target":""}${t.status==="running"?" is-running":""}${t.type==="group"?" is-group":""}`,"data-id":t.id,style:{transform:`translate3d(${t.x}px, ${t.y}px, 0)`,width:t.w,height:t.h,zIndex:t.type==="group"?1:2},onPointerDown:L=>d(L,t),onPointerEnter:()=>m(t),onPointerLeave:p},t.type==="group"?g.default.createElement("div",{className:"cf-node-group-head"},g.default.createElement("span",null,t.name||"\u5206\u7EC4"),t.childIds?.length?g.default.createElement("span",{className:"cf-node-group-count"},t.childIds.length," \u4E2A\u8282\u70B9"):null):g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"cf-node-head"},g.default.createElement("span",{className:"cf-node-type"},Ht[t.type]),g.default.createElement("span",{className:"cf-node-name"},t.name||"")),g.default.createElement("div",{className:"cf-node-body"},g.default.createElement(Uc,{node:t,channels:s,scaleBucket:f,expanded:a,upstreamSummary:i,isEditingText:c,onToggleExpand:A,onUpdateNode:$,onRunConfig:K,onCommitText:Y,onCancelText:I})),t.type==="image"?g.default.createElement("button",{type:"button",className:"cf-node-zoom",title:"\u770B\u5927\u56FE\uFF08\u4E5F\u53EF\u4EE5\u53CC\u51FB\uFF09","aria-label":"\u770B\u5927\u56FE",onPointerDown:L=>L.stopPropagation(),onClick:L=>{L.stopPropagation(),v(t)}},g.default.createElement(he,{name:"search",size:12})):null,g.default.createElement("span",{className:"cf-node-port-in","aria-hidden":"true",title:"\u8FDE\u7EBF\u8F93\u5165\u7AEF\u53E3"}),g.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:L=>P(L,t),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"},g.default.createElement("span",{"aria-hidden":"true"}))),n&&t.type!=="group"?Ec.map(L=>g.default.createElement("span",{key:L,className:`cf-node-handle cf-node-handle--${L}`,onPointerDown:Z=>{Z.stopPropagation(),T(Z,t,L)},title:"\u8C03\u6574\u5C3A\u5BF8"})):null)});function Kc({node:e,initialIndexOverride:t=null,onClose:n}){let r=g.default.useMemo(()=>{let p=Array.isArray(e?.images)&&e.images.length?e.images:[];return p.length?p:e?.storageKey||e?.src?[{id:"single",storageKey:e.storageKey||"",url:e.src||""}]:[]},[e]),o=g.default.useMemo(()=>{if(typeof t=="number"&&t>=0&&t<r.length)return t;let p=r.findIndex(v=>v.id===e?.primaryImageId);return p>=0?p:0},[r,e?.primaryImageId,t]),[a,i]=g.default.useState(o);g.default.useEffect(()=>{i(o)},[o,e?.id]);let c=r[a]||r[0]||null,s=c?.storageKey||"",f=c?.degraded?c.url||"":c?.url&&!s?c.url:e?.src||"",[d,m]=g.default.useState(()=>(s?rn(s):"")||f);return g.default.useEffect(()=>{let p=!0;return s?(m(rn(s)||f),ht(s).then(v=>{p&&m(v||f)}).catch(()=>{p&&m(f)}),()=>{p=!1}):(m(f),()=>{p=!1})},[s,f]),g.default.useEffect(()=>{if(r.length<=1)return;let p=v=>{(v.key==="ArrowLeft"||v.key==="ArrowRight")&&(v.preventDefault(),i(P=>(P+(v.key==="ArrowRight"?1:-1)+r.length)%r.length))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r.length]),g.default.createElement("div",{className:"cf-lightbox",role:"dialog","aria-modal":"true","aria-label":"\u9884\u89C8\u5927\u56FE",onPointerDown:p=>{p.target===p.currentTarget&&n()}},g.default.createElement("figure",{className:"cf-lightbox-figure",style:{"--cf-lb-ratio":fn(e.ratio)}},d?g.default.createElement("img",{src:d,alt:e.prompt||"\u56FE\u7247"}):e.status==="running"?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):g.default.createElement("div",{className:"cf-node-empty"},g.default.createElement(he,{name:"image",size:28,stroke:1.3}),g.default.createElement("span",null,"\u6682\u65E0\u56FE\u7247"))),r.length>1?g.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:10}},g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>i(p=>(p-1+r.length)%r.length),"aria-label":"\u4E0A\u4E00\u5F20"},"\u4E0A\u4E00\u5F20"),g.default.createElement("span",{className:"cf-lightbox-cap"},a+1," / ",r.length),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>i(p=>(p+1)%r.length),"aria-label":"\u4E0B\u4E00\u5F20"},"\u4E0B\u4E00\u5F20")):null,e.prompt?g.default.createElement("figcaption",{className:"cf-lightbox-cap"},e.prompt):null,g.default.createElement("button",{type:"button",className:"cf-lightbox-x",onClick:n,"aria-label":"\u5173\u95ED\u9884\u89C8"},g.default.createElement(he,{name:"close",size:16})))}function xi(e,t,n,r,o=28){let a=null,i=1/0;for(let c of e){if(c.type==="group"||!_a(e,t,n,c.id)||r.x<c.x-o||r.x>c.x+c.w+o||r.y<c.y-o||r.y>c.y+c.h+o)continue;let s=Math.hypot(r.x-c.x,r.y-(c.y+c.h/2)),d=r.x>=c.x&&r.x<=c.x+c.w&&r.y>=c.y&&r.y<=c.y+c.h?s*.5:s;d<i&&(i=d,a=c)}return a}function wi({title:e,sx:t,sy:n,items:r,onPick:o,onClose:a}){return g.default.createElement("div",{className:"cf-ctx cf-create-menu",style:{left:t,top:n},role:"menu",onPointerDown:i=>i.stopPropagation(),onWheel:i=>i.stopPropagation()},g.default.createElement("p",{className:"cf-ctx-head"},e),r.map(i=>g.default.createElement("button",{key:i.type,type:"button",className:"cf-ctx-item",role:"menuitem",onClick:()=>{o(i.type),a()}},g.default.createElement(he,{name:i.icon,size:14}),g.default.createElement("span",{className:"cf-ctx-item-label"},i.label))))}function Si({nodes:e,edges:t,selection:n,channels:r,grid:o,minimap:a,tool:i="select",actions:c={},onSelection:s,onMove:f,onResize:d,onConnect:m,onRemoveEdge:p,onOpenNode:v,onGesture:P,camera:T,camApi:A,showHint:$,onNodeAction:K,showToolbarLabels:Y=!1,onUpdateNode:I,onRunConfig:L,onBatchAction:Z,onCreateFromConnection:ue,onCreateAt:te,onDropFiles:ee}){let Te=g.default.useRef(null),E=g.default.useRef(null),{cam:z,moveTo:H,bindStage:ae}=A,[N,G]=g.default.useState({w:1200,h:700}),[oe,Le]=g.default.useState(null),ce=g.default.useRef(0),dt=g.default.useRef(0),bt=g.default.useCallback(()=>{ce.current&&(clearTimeout(ce.current),ce.current=0),dt.current&&(clearTimeout(dt.current),dt.current=0)},[]);g.default.useEffect(()=>bt,[bt]);let Ot=g.default.useCallback(h=>{!h||h.type!=="image"||(bt(),ce.current=setTimeout(()=>Le(h.id),100))},[bt]),vt=g.default.useCallback(h=>{ce.current&&(clearTimeout(ce.current),ce.current=0),!h?.relatedTarget?.closest?.(".cf-node-toolbar")&&(dt.current=setTimeout(()=>Le(null),180))},[]),Lt=g.default.useCallback(()=>{dt.current&&(clearTimeout(dt.current),dt.current=0)},[]),St=g.default.useCallback(h=>{if(h?.relatedTarget?.closest?.(".cf-node")){Lt();return}dt.current=setTimeout(()=>Le(null),180)},[Lt]),[Ge,st]=g.default.useState(()=>({x:z.current.x,y:z.current.y,s:z.current.s,zoom:Math.round(z.current.s*100)})),Ye=g.default.useRef(Ge);Ye.current=Ge;let yt=g.default.useRef({x:z.current.x,y:z.current.y,s:z.current.s}),Qe=g.default.useCallback((h=!1)=>{let S=z.current,F=Math.round(S.s*100),Q=Math.hypot(S.x-yt.current.x,S.y-yt.current.y),xe=Math.abs(S.s-yt.current.s)>5e-4;h||xe?(yt.current={x:S.x,y:S.y,s:S.s},st({x:S.x,y:S.y,s:S.s,zoom:F})):Q>=(O.current?360:160)?(yt.current={x:S.x,y:S.y,s:S.s},g.default.startTransition(()=>{st({x:S.x,y:S.y,s:S.s,zoom:F})})):F!==Ye.current.zoom&&st(be=>({...be,s:S.s,zoom:F}))},[z]),D=Ge.zoom,O=g.default.useRef(null),ie=g.default.useRef(null),le=g.default.useRef(null),Ue=g.default.useRef(null),we=g.default.useRef(null),Me=g.default.useRef(0),[Ie,ke]=g.default.useState(null),[Be,nt]=g.default.useState(null),Xe=g.default.useRef(null),[Wt,Ne]=g.default.useState(null),[Oe,mt]=g.default.useState(null),[Re,rt]=g.default.useState(null),[ct,Fe]=g.default.useState(null),[Ze,zt]=g.default.useState(null),[Cn,Sr]=g.default.useState(!0),[Jn,Vt]=g.default.useState(null),[Ut,An]=g.default.useState(null),[Gt,Tt]=g.default.useState(!1),[Nt,un]=g.default.useState(null),[ve,$t]=g.default.useState(null);g.default.useEffect(()=>()=>{Me.current&&cancelAnimationFrame(Me.current)},[]),g.default.useEffect(()=>{let h=E.current;if(!h)return;ae?.(h);let S=new ResizeObserver(()=>{let Q=h.getBoundingClientRect();G({w:Q.width,h:Q.height})});S.observe(h);let F=h.getBoundingClientRect();return G({w:F.width,h:F.height}),()=>S.disconnect()},[ae]),g.default.useEffect(()=>{ae?.(E.current),A.apply(Te.current,E.current),Qe(!0)},[A,ae,Qe]),g.default.useEffect(()=>{let h=F=>{F.code==="Space"&&!/input|textarea/i.test(F.target.tagName)&&(Tt(!0),F.preventDefault())},S=F=>{F.code==="Space"&&Tt(!1)};return window.addEventListener("keydown",h),window.addEventListener("keyup",S),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",S)}},[]),g.default.useEffect(()=>{if(!T)return;let h=Te.current;h&&H(h,T.x,T.y,T.s,()=>Qe(!0),E.current)},[T,H,Qe]);let sn=g.default.useCallback(()=>E.current.getBoundingClientRect(),[]),pt=g.default.useCallback((h,S)=>{let F=E.current.getBoundingClientRect();return{x:(h-F.left-z.current.x)/z.current.s,y:(S-F.top-z.current.y)/z.current.s}},[z]),_n=g.default.useCallback(()=>{let h=Te.current;if(!h||!e.length)return;let S=72,F=Math.min(...e.map($e=>$e.x))-S,Q=Math.min(...e.map($e=>$e.y))-S,xe=Math.max(...e.map($e=>$e.x+$e.w))+S,be=Math.max(...e.map($e=>$e.y+$e.h))+S,Ve=Math.min(1.35,Math.max(ba,Math.min(N.w/(xe-F),N.h/(be-Q))));H(h,S-F*Ve,S-Q*Ve,Ve,()=>Qe(!0),E.current)},[e,N,H,Qe]);g.default.useEffect(()=>{let h=setTimeout(_n,80);return()=>clearTimeout(h)},[]),g.default.useEffect(()=>{A.fit=_n},[A,_n]);let mn=h=>{let S=Te.current;if(!S)return;let F=N.w/2,Q=N.h/2,xe=z.current,be=(F-xe.tx)/xe.ts,Ve=(Q-xe.ty)/xe.ts,$e=Math.min(qa,Math.max(ba,xe.ts*h));H(S,F-be*$e,Q-Ve*$e,$e,()=>Qe(!0),E.current)},k=h=>{h.preventDefault();let S=sn(),F=h.clientX-S.left,Q=h.clientY-S.top,xe=z.current,be=(F-xe.tx)/xe.ts,Ve=(Q-xe.ty)/xe.ts,$e=Math.min(qa,Math.max(ba,xe.ts*Math.exp(-h.deltaY*.0018)));H(Te.current,F-be*$e,Q-Ve*$e,$e,()=>Qe(),E.current)},V=h=>{h.preventDefault();let S=sn(),F=Math.max(0,Math.min(h.clientX-S.left,S.width-200)),Q=Math.max(0,Math.min(h.clientY-S.top,S.height-40)),xe=document.elementFromPoint(h.clientX,h.clientY)||h.target,be=xe.closest?.(".cf-node");if(be){let $e=be.dataset.id,ot=e.find(ut=>ut.id===$e);$e&&!n.includes($e)&&s([$e]),Vt({kind:ot?.type==="group"?"group":"node",id:$e,x:F,y:Q});return}let Ve=xe.closest?.(".cf-edge");if(Ve?.dataset.id){Vt({kind:"edge",id:Ve.dataset.id,x:F,y:Q});return}Vt({kind:"blank",id:null,x:F,y:Q})},ge=h=>{if(Jn&&Vt(null),ct&&Fe(null),Ze&&zt(null),ve&&$t(null),h.button===1||Gt||i==="pan"){h.preventDefault(),O.current={x:h.clientX,y:h.clientY,cx:z.current.tx,cy:z.current.ty},E.current.classList.add("is-grabbing"),E.current.setPointerCapture(h.pointerId);return}if(h.button!==0)return;let S=pt(h.clientX,h.clientY);Ue.current={x0:S.x,y0:S.y,additive:h.shiftKey,clientX:h.clientX,clientY:h.clientY},An({x:S.x,y:S.y,w:0,h:0}),E.current.setPointerCapture(h.pointerId)},R=g.default.useMemo(()=>Object.fromEntries(e.map(h=>[h.id,h])),[e]),Se=g.default.useRef(e);Se.current=e;let _e=g.default.useRef(t);_e.current=t;let We=g.default.useRef(R);We.current=R;let Dt=g.default.useRef(n);Dt.current=n;let Kn=g.default.useRef(Gt);Kn.current=Gt;let qt=g.default.useRef(i);qt.current=i;let In=g.default.useRef(ve);In.current=ve;let gn=(h,S,F)=>{let Q=pt(S,F),xe=Q.x-h.p0.x,be=Q.y-h.p0.y,Ve={};for(let $e of h.ids){let ot=h.start.get($e);ot&&(Ve[$e]={x:ot.x+xe,y:ot.y+be,w:ot.w,h:ot.h})}return{dx:xe,dy:be,patch:Ve}},qe=(h,S,F)=>{let Q=pt(S,F),xe=140,be=80,Ve=h.corner==="nw"||h.corner==="sw",$e=h.corner==="nw"||h.corner==="ne",ot,ut,yn=h.start.x,Cr=h.start.y;return Ve?(ot=Math.round(h.anchorRight-Q.x),ot=Math.max(xe,Math.min(bi,ot)),yn=h.anchorRight-ot):(ot=Math.round(Q.x-h.start.x),ot=Math.max(xe,Math.min(bi,ot))),h.locked?ut=Math.round(ot/h.ratio)+h.head:$e?(ut=Math.round(h.anchorBottom-Q.y),ut=Math.max(be,ut),Cr=h.anchorBottom-ut):(ut=Math.round(Q.y-h.start.y),ut=Math.max(be,ut)),h.locked&&$e&&(Cr=h.anchorBottom-ut),{x:yn,y:Cr,w:ot,h:ut}},_t=()=>{if(Me.current=0,ie.current){let h=ie.current,{dx:S,dy:F,patch:Q}=gn(h,h.clientX,h.clientY);h.dx=S,h.dy=F,ke(Q);return}if(le.current){let h=le.current,S=qe(h,h.clientX,h.clientY);h.last=S,ke({[h.id]:S});return}if(Ue.current){let h=Ue.current,S=pt(h.clientX,h.clientY);An({x:Math.min(h.x0,S.x),y:Math.min(h.y0,S.y),w:Math.abs(S.x-h.x0),h:Math.abs(S.y-h.y0)});return}if(we.current){let h=pt(we.current.clientX,we.current.clientY),S=xi(Se.current,_e.current,we.current.id,h,28),F=S?.id||null;Xe.current!==F&&(Xe.current=F,Ne(F)),nt({from:we.current.id,to:S?{x:S.x,y:S.y+S.h/2}:h})}},xt=()=>{Me.current||(Me.current=requestAnimationFrame(_t))},Pt=h=>{if(O.current){let S=z.current;H(Te.current,O.current.cx+(h.clientX-O.current.x),O.current.cy+(h.clientY-O.current.y),S.ts,()=>Qe(),E.current);return}if(ie.current){ie.current.clientX=h.clientX,ie.current.clientY=h.clientY,xt();return}if(le.current){le.current.clientX=h.clientX,le.current.clientY=h.clientY,xt();return}if(Ue.current){Ue.current.clientX=h.clientX,Ue.current.clientY=h.clientY,xt();return}we.current&&(we.current.clientX=h.clientX,we.current.clientY=h.clientY,xt())},fe=h=>{if(Me.current&&(cancelAnimationFrame(Me.current),Me.current=0),O.current){O.current=null,E.current?.classList.remove("is-grabbing"),Qe(!0);return}if(ie.current){let S=ie.current;ie.current=null;let{dx:F,dy:Q}=gn(S,h.clientX??S.clientX,h.clientY??S.clientY);ke(null),(F!==0||Q!==0)&&f(S.ids,F,Q),P?.("end");return}if(le.current){let S=le.current;le.current=null;let F=qe(S,h.clientX??S.clientX,h.clientY??S.clientY);ke(null),(F.w!==S.start.w||F.h!==S.start.h)&&d(S.id,F.w,F.h),(F.x!==S.start.x||F.y!==S.start.y)&&f([S.id],F.x-S.start.x,F.y-S.start.y),P?.("end");return}if(Ue.current){let S=Ue.current;Ue.current=null;let F=pt(h.clientX,h.clientY),Q={x:Math.min(S.x0,F.x),y:Math.min(S.y0,F.y),w:Math.abs(F.x-S.x0),h:Math.abs(F.y-S.y0)};if(An(null),Q.w>6||Q.h>6){let xe=e.filter(be=>!(be.x>Q.x+Q.w||be.x+be.w<Q.x||be.y>Q.y+Q.h||be.y+be.h<Q.y));s(S.additive?[...new Set([...n,...xe.map(be=>be.id)])]:xe.map(be=>be.id))}else S.additive||s([]);return}if(we.current){let{id:S,startX:F,startY:Q}=we.current;we.current=null,Xe.current=null,Ne(null),nt(null);let xe=pt(h.clientX,h.clientY),be=xi(Se.current,_e.current,S,xe,28);if(be&&_a(Se.current,_e.current,S,be.id))m(S,be.id);else if(Math.hypot((h.clientX??F)-F,(h.clientY??Q)-Q)>24&&ue){let Ve=sn();Fe({fromId:S,worldX:xe.x,worldY:xe.y,sx:Math.max(8,Math.min(h.clientX-Ve.left,Ve.width-190)),sy:Math.max(8,Math.min(h.clientY-Ve.top,Ve.height-230))})}}},Mt=g.default.useRef({id:"",t:0,x:0,y:0}),En=g.default.useCallback((h,S)=>{let F=S.timeStamp||Date.now(),Q=Mt.current,xe=Math.abs(S.clientX-Q.x)<6&&Math.abs(S.clientY-Q.y)<6;return Mt.current={id:h.id,t:F,x:S.clientX,y:S.clientY},Q.id===h.id&&F-Q.t<320&&xe},[]),Jt=g.default.useCallback((h,S=null)=>{un(h?{node:h,idx:S}:null)},[]),hn=g.default.useCallback(()=>{un(null)},[]);g.default.useEffect(()=>{if(!Nt&&!ct&&!Ze)return;let h=S=>{S.key==="Escape"&&(S.preventDefault(),S.stopPropagation(),Nt?un(null):(Fe(null),zt(null)))};return window.addEventListener("keydown",h,!0),()=>window.removeEventListener("keydown",h,!0)},[Nt,ct,Ze]);let vn=g.default.useCallback(h=>{mt(S=>S===h?null:h)},[]),at=g.default.useCallback((h,S)=>{rt(null),I?.(h,{text:S})},[I]),it=g.default.useCallback(()=>rt(null),[]),jn=g.default.useCallback((h,S)=>{if(h.button!==0||h.button===1||Kn.current||qt.current==="pan")return;if(In.current&&$t(null),En(S,h)){h.stopPropagation(),S.type==="image"?Jt(S):(S.type==="text"&&rt(S.id),v(S));return}h.stopPropagation();let F=Dt.current,Q=h.shiftKey||h.metaKey||h.ctrlKey,xe=F.includes(S.id),be=Q?xe?F.filter(ut=>ut!==S.id):[...F,S.id]:xe?F:[S.id];if(s(be),Q)return;let Ve=pt(h.clientX,h.clientY),$e=S.type==="group"&&S.childIds?.length?[S.id,...S.childIds]:be.length>1?be:[S.id],ot=new Map;for(let ut of $e){let yn=We.current[ut];yn&&ot.set(ut,{x:yn.x,y:yn.y,w:yn.w,h:yn.h})}ie.current={ids:$e,start:ot,p0:Ve,clientX:h.clientX,clientY:h.clientY,dx:0,dy:0},P?.("start"),E.current?.setPointerCapture(h.pointerId)},[En,Jt,v,s,pt,P]),Kt=g.default.useCallback((h,S,F="se")=>{let Q=S.type==="image"&&S.locked!==!1;le.current={id:S.id,corner:F,locked:Q,ratio:fn(S.ratio),head:S.type==="image"?La:0,start:{x:S.x,y:S.y,w:S.w,h:S.h},last:{x:S.x,y:S.y,w:S.w,h:S.h},anchorRight:S.x+S.w,anchorBottom:S.y+S.h,clientX:h.clientX,clientY:h.clientY},P?.("start"),E.current?.setPointerCapture(h.pointerId)},[P]),bn=g.default.useCallback((h,S)=>{h.stopPropagation(),we.current={id:S.id,startX:h.clientX,startY:h.clientY,clientX:h.clientX,clientY:h.clientY},nt({from:S.id,to:pt(h.clientX,h.clientY)}),E.current?.setPointerCapture(h.pointerId)},[pt]),Fn=g.default.useMemo(()=>{let h=hi(Ge,N),S=new Set,F=new Set(n||[]);we.current?.id&&F.add(we.current.id);let Q=e.filter(be=>F.has(be.id)||gi(be,h));Q.forEach(be=>S.add(be.id));let xe=t.filter(be=>{let Ve=R[be.from],$e=R[be.to];return!Ve||!$e||!S.has(Ve.id)||!S.has($e.id)?!1:mi(Ve,$e,h)});return{nodes:Q,edges:xe,culled:e.length-Q.length}},[e,t,R,n,Ge,N.w,N.h]),Nr=g.default.useMemo(()=>Ie?Fn.nodes.map(h=>Ie[h.id]?{...h,...Ie[h.id]}:h):Fn.nodes,[Fn.nodes,Ie]),cn=g.default.useMemo(()=>{if(!Ie)return R;let h={...R};for(let[S,F]of Object.entries(Ie))h[S]&&(h[S]={...h[S],...F});return h},[R,Ie]),qr=Ge.s>=1.8?2:Ge.s>=1.1?1.5:1,Mr=o==="lines"?"cf-stage--lines":o==="blank"?"cf-stage--blank":"cf-stage--dots",Hn=g.default.useMemo(()=>new Set(n||[]),[n]),Ia=g.default.useMemo(()=>{let h=new Map;for(let S of e){if(S.type!=="config")continue;let F=0,Q=0;for(let xe of t){if(xe.to!==S.id)continue;let be=R[xe.from];be&&(be.type==="image"?F+=1:be.type==="text"&&(Q+=1))}if(F||Q){let xe=[];F&&xe.push(`\u56FE\xD7${F}`),Q&&xe.push(`\u6587\xD7${Q}`),h.set(S.id,`\u4E0A\u6E38 ${xe.join(" ")}`)}else h.set(S.id,"")}return h},[e,t,R]),Jr=g.default.useMemo(()=>{if(!Oe)return null;let h=cn[Oe];return h&&(h.images?.length||0)>1?h:null},[Oe,cn]),ar=g.default.useMemo(()=>{if(!n||n.length<2)return null;let h=n.map(Q=>R[Q]).filter(Boolean),S=h.some(Q=>Q.type==="group"),F=h.filter(Q=>Q.type==="image"&&(Q.images?.length||Q.storageKey||Q.src));return{count:n.length,hasGroup:S,canMerge:F.length>=2}},[n,R]);g.default.useEffect(()=>{if(!ve)return;let h=S=>{if(!/input|textarea|select/i.test(S.target.tagName)){if(S.key==="Escape"){$t(null);return}(S.key==="Delete"||S.key==="Backspace")&&(S.preventDefault(),S.stopPropagation(),p(ve),$t(null))}};return window.addEventListener("keydown",h,!0),()=>window.removeEventListener("keydown",h,!0)},[ve,p]);let Ea=h=>{if(!te||h.target.closest?.(".cf-node, .cf-zoom, .cf-minimap, .cf-ctx, .cf-node-toolbar, .cf-sel-bar, .cf-batch-pop"))return;let S=sn(),F=pt(h.clientX,h.clientY);zt({worldX:F.x,worldY:F.y,sx:Math.max(8,Math.min(h.clientX-S.left,S.width-190)),sy:Math.max(8,Math.min(h.clientY-S.top,S.height-230))})},za=h=>{ee&&h.dataTransfer?.types?.includes("Files")&&h.preventDefault()},Ta=h=>{if(!ee)return;let S=[...h.dataTransfer?.files||[]].filter(F=>F.type.startsWith("image/"));S.length&&(h.preventDefault(),ee(S,pt(h.clientX,h.clientY)))},$a=[{type:"image",icon:"image",label:"\u65B0\u5EFA\u56FE\u7247\u8282\u70B9"},{type:"text",icon:"text",label:"\u65B0\u5EFA\u6587\u672C\u8282\u70B9"},{type:"config",icon:"sliders",label:"\u65B0\u5EFA\u914D\u7F6E\u8282\u70B9"},{type:"video",icon:"play",label:"\u65B0\u5EFA\u89C6\u9891\u8282\u70B9"},{type:"audio",icon:"bars",label:"\u65B0\u5EFA\u97F3\u9891\u8282\u70B9"}];return g.default.createElement("div",{className:"cf-board"},g.default.createElement("div",{className:`cf-stage ${Mr}${Gt||i==="pan"?" is-grab":""}`,ref:E,onPointerDown:ge,onPointerMove:Pt,onPointerUp:fe,onPointerCancel:fe,onDoubleClick:Ea,onDragOver:za,onDrop:Ta,onWheel:k,onContextMenu:V},g.default.createElement("div",{className:`cf-grid ${Mr}`,"aria-hidden":"true"}),g.default.createElement("div",{className:"cf-world",ref:Te},g.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},g.default.createElement("defs",null,g.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},g.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),Fn.edges.map(h=>{let S=cn[h.from],F=cn[h.to];if(!S||!F)return null;let Q=yi(S,F),xe=Hn.has(h.from)||Hn.has(h.to);return g.default.createElement("g",{key:h.id,className:`cf-edge${ve===h.id?" is-on":""}${xe?" is-related":""}`,"data-id":h.id},g.default.createElement("path",{d:Q,className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),g.default.createElement("path",{d:Q,className:"cf-edge-hit",onPointerDown:be=>{be.stopPropagation(),$t(h.id)}},g.default.createElement("title",null,"\u70B9\u51FB\u9009\u4E2D\uFF0CDelete \u6216\u53F3\u952E\u83DC\u5355\u5220\u9664")))}),Be?(()=>{let h=cn[Be.from];return h?g.default.createElement("path",{d:yi(h,{x:Be.to.x,y:Be.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),Nr.map(h=>g.default.createElement(_c,{key:h.id,node:h,selected:Hn.has(h.id),dragging:!!Ie?.[h.id],isTarget:Wt===h.id,expanded:Oe===h.id,upstreamSummary:h.type==="config"?Ia.get(h.id):void 0,isEditingText:Re===h.id,channels:r,scaleBucket:qr,onNodeDown:jn,onHoverEnter:Ot,onHoverLeave:vt,onOpenZoom:Jt,onPortDown:bn,onResizeDown:Kt,onToggleExpand:vn,onUpdateNode:I,onRunConfig:L,onCommitText:at,onCancelText:it})),Jr?g.default.createElement(Dc,{node:Jr,onClose:()=>mt(null),onOpenZoom:Jt,onBatchAction:Z}):null,Ut&&Ut.w>4?g.default.createElement("div",{className:"cf-marquee",style:{left:Ut.x,top:Ut.y,width:Ut.w,height:Ut.h}}):null),ar&&!Ut?g.default.createElement("div",{className:"cf-sel-bar",role:"toolbar","aria-label":"\u591A\u9009\u6279\u91CF\u64CD\u4F5C",onPointerDown:h=>h.stopPropagation()},g.default.createElement("span",{className:"cf-sel-bar-count"},"\u5DF2\u9009 ",ar.count," \u9879"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.wrap?.()},"\u6253\u7EC4"),ar.hasGroup&&c.ungroupSelected?g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.ungroupSelected?.()},"\u53D6\u6D88\u5206\u7EC4"):null,ar.canMerge&&Z?g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>Z("merge",n)},"\u5408\u5E76\u4E3A\u56FE\u7EC4"):null,g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.duplicate?.()},"\u590D\u5236"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.removeSelection?.()},"\u5220\u9664")):null,oe?(()=>{let h=cn[oe];return!h||h.type!=="image"?null:g.default.createElement(vi,{node:h,cam:z.current,showLabels:Y,onAction:(S,F)=>{if(S==="view"){Jt(F);return}K?.(S,F)},onKeep:Lt,onLeave:St})})():null,Jn?g.default.createElement(Fc,{ctx:Jn,nodes:e,selection:n,actions:c,onClose:()=>Vt(null)}):null,ct?g.default.createElement(wi,{title:"\u65B0\u5EFA\u5E76\u8FDE\u63A5",sx:ct.sx,sy:ct.sy,items:$a,onPick:h=>ue?.(ct.fromId,h,{x:ct.worldX,y:ct.worldY}),onClose:()=>Fe(null)}):null,Ze?g.default.createElement(wi,{title:"\u5728\u6B64\u5904\u65B0\u5EFA",sx:Ze.sx,sy:Ze.sy,items:[...$a,{type:"group",icon:"group",label:"\u65B0\u5EFA\u5206\u7EC4"}],onPick:h=>te?.(h,{x:Ze.worldX,y:Ze.worldY}),onClose:()=>zt(null)}):null),a&&Cn?g.default.createElement(jc,{nodes:e,cam:Ge,size:N,onJump:h=>H(Te.current,N.w/2-h.x*z.current.s,N.h/2-h.y*z.current.s,z.current.s,()=>Qe(!0),E.current)}):null,g.default.createElement("div",{className:`cf-zoom${!a||!Cn?" is-no-minimap":""}`},g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>mn(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),g.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:D,"aria-label":"\u7F29\u653E",onChange:h=>{let S=Te.current;if(!S)return;let F=Number(h.target.value)/100,Q=z.current,xe=N.w/2,be=N.h/2;H(S,xe-(xe-Q.tx)/Q.s*F,be-(be-Q.ty)/Q.s*F,F,()=>Qe(),E.current)}}),g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>mn(1.25),"aria-label":"\u653E\u5927"},"+"),g.default.createElement("span",{className:"cf-zoom-num"},D,"%"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:_n},"\u9002\u5E94"),a?g.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":Cn?"\u9690\u85CF\u7F29\u7565\u56FE":"\u663E\u793A\u7F29\u7565\u56FE","aria-pressed":Cn,title:"\u7F29\u7565\u56FE",onClick:()=>Sr(h=>!h)},g.default.createElement(he,{name:"frame",size:13})):null),$?g.default.createElement("p",{className:"cf-editor-hint","aria-hidden":"true"},g.default.createElement("span",null,"\u6846\u9009"),g.default.createElement("span",null,"\u7A7A\u683C\u5E73\u79FB"),g.default.createElement("span",null,"\u6EDA\u8F6E\u7F29\u653E"),g.default.createElement("span",null,"\u53CC\u51FB\u770B\u5927\u56FE")):null,Nt?.node?g.default.createElement(Kc,{node:cn[Nt.node.id]||Nt.node,initialIndexOverride:Nt.idx,onClose:hn}):null)}var jc=g.default.memo(function({nodes:t,cam:n,size:r,onJump:o}){let s=g.default.useMemo(()=>{if(!t.length)return null;let A=1/0,$=1/0,K=-1/0,Y=-1/0;for(let E of t)E.x<A&&(A=E.x),E.y<$&&($=E.y),E.x+E.w>K&&(K=E.x+E.w),E.y+E.h>Y&&(Y=E.y+E.h);A-=80,$-=80,K+=80,Y+=80;let I=Math.max(1,K-A),L=Math.max(1,Y-$),Z=Math.min(143/I,92/L),ue=(143-I*Z)/2,te=(92-L*Z)/2,ee=E=>({x:(E.x-A)*Z+ue,y:(E.y-$)*Z+te,w:E.w*Z,h:E.h*Z}),Te=g.default.createElement(g.default.Fragment,null,t.filter(E=>E.type==="group").map(E=>{let z=ee(E);return g.default.createElement("rect",{key:E.id,x:z.x,y:z.y,width:z.w,height:z.h,rx:3,className:"cf-mini-group"})}),t.filter(E=>E.type!=="group").map(E=>{let z=ee(E);return g.default.createElement("rect",{key:E.id,x:z.x,y:z.y,width:Math.max(3,z.w),height:Math.max(3,z.h),rx:2,className:`cf-mini-node${E.type==="image"?" cf-mini-image":""}`})}));return{minX:A,minY:$,k:Z,offX:ue,offY:te,rects:Te}},[t]);if(!s)return null;let{minX:f,minY:d,k:m,offX:p,offY:v,rects:P}=s,T={x:(-n.x/n.s-f)*m+p,y:(-n.y/n.s-d)*m+v,w:r.w/n.s*m,h:r.h/n.s*m};return g.default.createElement("svg",{className:"cf-minimap",viewBox:"0 0 143 92",width:143,height:92,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:A=>{let $=A.currentTarget.getBoundingClientRect(),K=(A.clientX-$.left)/$.width*143,Y=(A.clientY-$.top)/$.height*92;o({x:f+(K-p)/m,y:d+(Y-v)/m})}},P,g.default.createElement("rect",{x:T.x,y:T.y,width:Math.max(6,T.w),height:Math.max(6,T.h),rx:2,className:"cf-mini-view"}))});function Fc({ctx:e,nodes:t,selection:n,actions:r,onClose:o}){let a=e.id?t.find(s=>s.id===e.id):null,i=s=>()=>{o(),s?.()},c=(()=>{if(e.kind==="edge")return[{icon:"trash",label:"\u5220\u9664\u8FDE\u7EBF",run:i(()=>r.removeEdge?.(e.id))}];if(e.kind==="group")return[{icon:"plus",label:"\u590D\u5236\u5206\u7EC4",run:i(()=>r.duplicate?.())},{icon:"close",label:"\u53D6\u6D88\u5206\u7EC4\uFF08\u4FDD\u7559\u8282\u70B9\uFF09",run:i(()=>r.ungroup?.(e.id))},{sep:!0},{icon:"trash",label:"\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9",danger:!0,run:i(()=>r.deleteGroupDeep?.(e.id))}];if(e.kind==="node"){let s=[];return a?.type==="image"&&s.push({icon:"play",label:"\u7528\u5F53\u524D\u63D0\u793A\u8BCD\u751F\u6210",run:i(()=>r.generateNode?.(e.id))}),s.push({icon:"plus",label:"\u590D\u5236",hint:"\u2318D",run:i(()=>r.duplicate?.())}),s.push({icon:"group",label:"\u5305\u6210\u7EC4",hint:"\u2318G",disabled:n.length<2,run:i(()=>r.wrap?.())}),s.push({sep:!0}),s.push({icon:"trash",label:"\u5220\u9664",hint:"\u232B",danger:!0,run:i(()=>r.removeSelection?.())}),s}return[{icon:"image",label:"\u65B0\u5EFA\u56FE\u7247\u8282\u70B9",run:i(()=>r.addNode?.("image"))},{icon:"text",label:"\u65B0\u5EFA\u6587\u672C\u8282\u70B9",run:i(()=>r.addNode?.("text"))},{icon:"sliders",label:"\u65B0\u5EFA\u914D\u7F6E\u8282\u70B9",run:i(()=>r.addNode?.("config"))},{icon:"group",label:"\u65B0\u5EFA\u5206\u7EC4",run:i(()=>r.addNode?.("group"))},{sep:!0},{icon:"check",label:"\u5168\u9009",hint:"\u2318A",run:i(()=>r.selectAll?.())},{icon:"target",label:"\u9002\u5E94\u89C6\u56FE",hint:"0",run:i(()=>r.fit?.())}]})();return g.default.createElement("div",{className:"cf-ctx",style:{left:e.x,top:e.y},role:"menu",onPointerDown:s=>s.stopPropagation(),onContextMenu:s=>s.preventDefault()},g.default.createElement("p",{className:"cf-ctx-head"},e.kind==="blank"?"\u753B\u5E03":e.kind==="edge"?"\u8FDE\u7EBF":a?.type==="group"?a.name||"\u5206\u7EC4":`${Ht[a?.type]||""}\u8282\u70B9`),c.map((s,f)=>s.sep?g.default.createElement("div",{key:`s${f}`,className:"cf-ctx-sep"}):g.default.createElement("button",{key:f,type:"button",className:"cf-ctx-item",role:"menuitem",disabled:s.disabled,onClick:s.run},g.default.createElement(he,{name:s.icon,size:14}),g.default.createElement("span",{className:"cf-ctx-item-label"},s.label),s.hint?g.default.createElement("span",{className:"cf-ctx-item-key"},s.hint):null)))}function xr(e){return{nodes:e?.nodes,edges:e?.edges,grid:e?.grid}}function Hc(e,t){return!e||!t?!1:e.nodes===t.nodes&&e.edges===t.edges&&e.grid===t.grid}function Ni({get:e,apply:t,limit:n=50,wait:r=180}){let o=[],a=[],i=null,c=0,s=!1,f=null,d=()=>f?.({canUndo:o.length>0,canRedo:a.length>0}),m=()=>{let p=xr(e());!i||Hc(i,p)||(o=[...o.slice(-(n-1)),i],a=[],i=p,d())};return{subscribe(p){return f=p,d(),()=>{f=null}},init(){i=xr(e()),o=[],a=[],d()},tick(){s||(c&&clearTimeout(c),c=setTimeout(()=>{c=0,m()},r))},pause(){s=!0,c&&(clearTimeout(c),c=0)},resume(){s&&(s=!1,m())},undo(){let p=o.pop();return p?(a=[...a,xr(e())],s=!0,t(p),i=xr(p),s=!1,c&&(clearTimeout(c),c=0),d(),!0):!1},redo(){let p=a.pop();return p?(o=[...o,xr(e())],s=!0,t(p),i=xr(p),s=!1,c&&(clearTimeout(c),c=0),d(),!0):!1},flush(){c&&(clearTimeout(c),c=0),m()},get canUndo(){return o.length>0},get canRedo(){return a.length>0},get depth(){return o.length},_reset(){o=[],a=[],i=null,s=!1,c&&(clearTimeout(c),c=0),d()}}}var B=Zt(require("react"),1);function Kr(e){return new Promise((t,n)=>{let r=new Image,o=typeof e=="string"?e:URL.createObjectURL(e);r.onload=()=>{typeof e!="string"&&URL.revokeObjectURL(o),t(r)},r.onerror=()=>{typeof e!="string"&&URL.revokeObjectURL(o),n(new Error("\u56FE\u7247\u89E3\u7801\u5931\u8D25"))},r.src=o})}function Qa(e){return new Promise((t,n)=>{e.toBlob(r=>r?t(r):n(new Error("\u5BFC\u51FA\u56FE\u7247\u5931\u8D25")),"image/png")})}async function Za(e,t,n,r,o){let a=document.createElement("canvas");a.width=Math.max(1,Math.round(r)),a.height=Math.max(1,Math.round(o));let i=a.getContext("2d");if(!i)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");let c=Math.max(0,Math.min(e.width-1,Math.round(t))),s=Math.max(0,Math.min(e.height-1,Math.round(n))),f=Math.max(1,Math.min(e.width-c,Math.round(r))),d=Math.max(1,Math.min(e.height-s,Math.round(o)));return i.drawImage(e,c,s,f,d,0,0,a.width,a.height),{blob:await Qa(a),width:a.width,height:a.height}}async function Ci(e,t){let n=await Kr(e);if(t)return Za(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let r=Math.min(n.width,n.height),o=Math.max(0,Math.floor((n.width-r)/2)),a=Math.max(0,Math.floor((n.height-r)/2));return Za(n,o,a,r,r)}function Mi(e,t,n){return e?.length?[0,...e.map(r=>Math.round(r*t)).filter(r=>r>0&&r<t).sort((r,o)=>r-o),t]:Array.from({length:n+1},(r,o)=>Math.floor(o*t/n))}async function Ai(e,t){let n=await Kr(e),r=Math.max(1,Math.floor(t.rows)),o=Math.max(1,Math.floor(t.columns)),a=Mi(t.verticalLines,n.width,o),i=Mi(t.horizontalLines,n.height,r),c=[];for(let s=0;s<i.length-1;s+=1){let f=i[s],d=i[s+1]-f;for(let m=0;m<a.length-1;m+=1){let p=a[m],v=a[m+1]-p,P=await Za(n,p,f,v,d);c.push({row:s,column:m,...P})}}return c}function Ra(e,t,n){let r=Math.max(1,e,t),a=Math.min(4096,Math.max(1,Math.round(n)))/r;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Ja(e,t,n,r,o,a){let i=document.createElement("canvas");i.width=r,i.height=o;let c=i.getContext("2d");if(!c)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");return c.imageSmoothingEnabled=a!=="nearest",c.imageSmoothingQuality=a==="bilinear"?"medium":"high",c.drawImage(e,0,0,t,n,0,0,r,o),i}async function Ii(e,t,n="high"){let r=await Kr(e),{width:o,height:a}=Ra(r.width,r.height,t);if(n!=="high"){let d=Ja(r,r.width,r.height,o,a,n);return{blob:await Qa(d),width:o,height:a}}let i=r,c=r.width,s=r.height;for(;c*2<o&&s*2<a;){let d=c*2,m=s*2;i=Ja(i,c,s,d,m,"high"),c=d,s=m}let f=Ja(i,c,s,o,a,"high");return{blob:await Qa(f),width:o,height:a}}async function Ei(e,t=768,n=.86){let r=await Kr(e),o=Math.max(r.width,r.height);o<=t;let a=o>t?t/o:1,i=Math.max(1,Math.round(r.width*a)),c=Math.max(1,Math.round(r.height*a)),s=document.createElement("canvas");s.width=i,s.height=c;let f=s.getContext("2d");if(!f)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");f.fillStyle="#fff",f.fillRect(0,0,i,c),f.drawImage(r,0,0,i,c);let d=s.toDataURL("image/jpeg",n);return{dataUrl:d,mimeType:"image/jpeg",data:d.slice(d.indexOf(",")+1),width:i,height:c}}function wr(e){return Kr(e).then(t=>({width:t.width,height:t.height}))}var ya="#2563eb";function Yc(e){return new Promise((t,n)=>{let r=typeof e=="string",o=r?e:URL.createObjectURL(e),a=new Image;a.onload=()=>{r||URL.revokeObjectURL(o),t(a)},a.onerror=()=>{r||URL.revokeObjectURL(o),n(new Error("\u56FE\u7247\u89E3\u7801\u5931\u8D25"))},a.src=o})}async function zi(e,t){if(!t)throw new Error("\u6CA1\u6709\u8499\u7248");let n=t.width,r=t.height,o=document.createElement("canvas");o.width=n,o.height=r;let a=o.getContext("2d");if(!a)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");let i=null;e?(i=await Yc(e),a.drawImage(i,0,0,n,r)):(a.fillStyle="#ffffff",a.fillRect(0,0,n,r)),a.save(),a.globalAlpha=.4,a.globalCompositeOperation="source-over";let c=document.createElement("canvas");c.width=n,c.height=r;let s=c.getContext("2d");return s.drawImage(t,0,0),s.globalCompositeOperation="source-in",s.fillStyle=ya,s.fillRect(0,0,n,r),a.drawImage(c,0,0),a.restore(),{blob:await new Promise((d,m)=>{o.toBlob(p=>p?d(p):m(new Error("\u5BFC\u51FA\u5931\u8D25")),"image/png")}),dataUrl:o.toDataURL("image/png"),width:n,height:r}}function eo(e){if(!e)return!1;let t=e.getContext("2d",{willReadFrequently:!0});if(!t)return!1;let{data:n}=t.getImageData(0,0,e.width,e.height);for(let r=3;r<n.length;r+=4)if(n[r]>8)return!0;return!1}function xa(e){if(!e)return;let t=e.getContext("2d");t&&t.clearRect(0,0,e.width,e.height)}function wa(e,t,n,r,o=!1){if(!e)return;let a=e.getContext("2d");if(!a)return;let i=e.width,c=e.height;a.save(),a.globalCompositeOperation=o?"destination-out":"source-over",a.strokeStyle=ya,a.lineWidth=Math.max(1,r*Math.min(i,c)),a.lineCap="round",a.lineJoin="round",a.beginPath(),a.moveTo(t.x*i,t.y*c),a.lineTo(n.x*i,n.y*c),a.stroke(),a.restore()}jr();function Fr({title:e,icon:t,onClose:n,onApply:r,applyLabel:o="\u5E94\u7528",busy:a,disabled:i,children:c}){return B.default.useEffect(()=>{let s=f=>{f.key==="Escape"&&!a&&n()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[n,a]),B.default.createElement("div",{className:"cf-scrim",onPointerDown:s=>{s.target===s.currentTarget&&!a&&n()}},B.default.createElement("div",{className:"cf-dialog cf-dialog--wide",role:"dialog","aria-modal":"true","aria-label":e},B.default.createElement("header",{className:"cf-dialog-head"},B.default.createElement("h2",{className:"cf-dialog-title"},e),B.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":"\u5173\u95ED",onClick:n,disabled:a},B.default.createElement(he,{name:"close",size:15}))),B.default.createElement("div",{className:"cf-dialog-body"},c),B.default.createElement("footer",{className:"cf-dialog-foot"},B.default.createElement(J,{onClick:n,disabled:a},"\u53D6\u6D88"),B.default.createElement(J,{variant:"primary",onClick:r,disabled:a||i},a?"\u5904\u7406\u4E2D\u2026":o))))}var Li=.06,Wc={x:.12,y:.12,width:.76,height:.76};function Ui(e){let t=Math.max(Li,Math.min(1,e.width)),n=Math.max(Li,Math.min(1,e.height));return{x:Math.max(0,Math.min(1-t,e.x)),y:Math.max(0,Math.min(1-n,e.y)),width:t,height:n}}var Vc=["nw","n","ne","e","se","s","sw","w"];function Gc({src:e,onClose:t,onDone:n}){let[r,o]=B.default.useState(Wc),[a,i]=B.default.useState(null),[c,s]=B.default.useState("free"),[f,d]=B.default.useState(!1),m=B.default.useRef(null);B.default.useEffect(()=>{wr(e).then(i).catch(()=>i(null))},[e]);let p=c==="free"?null:c==="1:1"?1:c==="4:3"?4/3:c==="3:4"?3/4:c==="16:9"?16/9:9/16,v=$=>{if(s($),$==="free"||!a)return;let K=$==="1:1"?1:$==="4:3"?4/3:$==="3:4"?3/4:$==="16:9"?16/9:9/16,Y=r.width*a.width,I=r.height*a.height,L=r.width,Z=r.height,ue=Y/K/a.height;ue<=1?Z=ue:(Z=1,L=a.height*K/a.width),o(Ui({x:r.x,y:r.y,width:L,height:Z}))},P=($,K,Y)=>{K.preventDefault(),K.stopPropagation();let I=m.current?.getBoundingClientRect();if(!I)return;let L={...r},Z=K.clientX,ue=K.clientY,te=Te=>{let E=(Te.clientX-Z)/I.width,z=(Te.clientY-ue)/I.height,H;if($==="move")H={...L,x:L.x+E,y:L.y+z};else{let{x:ae,y:N,width:G,height:oe}=L;if(Y.includes("w")&&(ae=L.x+E,G=L.width-E),Y.includes("e")&&(G=L.width+E),Y.includes("n")&&(N=L.y+z,oe=L.height-z),Y.includes("s")&&(oe=L.height+z),H={x:ae,y:N,width:G,height:oe},p&&a){let Le=H.width*a.width/p/a.height;Y.includes("n")&&(H.y=L.y+(L.height-Le)),H.height=Le}}o(Ui(H))},ee=()=>{window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",ee)};window.addEventListener("pointermove",te),window.addEventListener("pointerup",ee)},T=async()=>{d(!0);try{let $=await Ci(e,r);n($)}finally{d(!1)}},A=a?{w:Math.round(r.width*a.width),h:Math.round(r.height*a.height)}:null;return B.default.createElement(Fr,{title:"\u88C1\u526A",icon:"crop",onClose:t,onApply:T,busy:f,applyLabel:"\u88C1\u526A\u5E76\u751F\u6210\u65B0\u8282\u70B9"},B.default.createElement("div",{className:"cf-tool-ratios"},[["free","\u81EA\u7531"],["1:1","1:1"],["4:3","4:3"],["3:4","3:4"],["16:9","16:9"],["9:16","9:16"]].map(([$,K])=>B.default.createElement("button",{key:$,type:"button",className:`cf-chip${c===$?" is-on":""}`,onClick:()=>v($)},K)),A?B.default.createElement("span",{className:"cf-tool-meta"},A.w," \xD7 ",A.h," px"):null),B.default.createElement("div",{className:"cf-crop-stage"},B.default.createElement("div",{className:"cf-crop-box",ref:m},B.default.createElement("img",{src:typeof e=="string"?e:"",alt:"",draggable:!1}),B.default.createElement("div",{className:"cf-crop-shade",style:{left:0,top:0,width:"100%",height:`${r.y*100}%`}}),B.default.createElement("div",{className:"cf-crop-shade",style:{left:0,top:`${(r.y+r.height)*100}%`,width:"100%",bottom:0}}),B.default.createElement("div",{className:"cf-crop-shade",style:{left:0,top:`${r.y*100}%`,width:`${r.x*100}%`,height:`${r.height*100}%`}}),B.default.createElement("div",{className:"cf-crop-shade",style:{right:0,top:`${r.y*100}%`,left:`${(r.x+r.width)*100}%`,height:`${r.height*100}%`}}),B.default.createElement("div",{className:"cf-crop-frame",style:{left:`${r.x*100}%`,top:`${r.y*100}%`,width:`${r.width*100}%`,height:`${r.height*100}%`},onPointerDown:$=>P("move",$)},Vc.map($=>B.default.createElement("span",{key:$,className:`cf-crop-handle cf-crop-handle--${$}`,onPointerDown:K=>P("resize",K,$)}))))))}function qc({src:e,onClose:t,onDone:n}){let[r,o]=B.default.useState(2),[a,i]=B.default.useState(2),[c,s]=B.default.useState(!1),f=r*a;return B.default.createElement(Fr,{title:"\u5207\u56FE",icon:"split",onClose:t,onApply:async()=>{s(!0);try{let m=await Ai(e,{rows:r,columns:a});n(m)}finally{s(!1)}},busy:c,applyLabel:`\u5207\u6210 ${f} \u5F20`},B.default.createElement("div",{className:"cf-tool-row"},B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u884C"),B.default.createElement("input",{className:"cf-input",type:"number",min:1,max:10,value:r,onChange:m=>o(Math.max(1,Math.min(10,Number(m.target.value)||1)))})),B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u5217"),B.default.createElement("input",{className:"cf-input",type:"number",min:1,max:10,value:a,onChange:m=>i(Math.max(1,Math.min(10,Number(m.target.value)||1)))}))),B.default.createElement("div",{className:"cf-split-preview"},B.default.createElement("div",{className:"cf-split-grid",style:{gridTemplateColumns:`repeat(${a}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`}},Array.from({length:f},(m,p)=>B.default.createElement("span",{key:p,className:"cf-split-cell"},p+1)))),B.default.createElement("p",{className:"cf-tool-hint"},"\u5207\u5B8C\u4F1A\u751F\u6210 ",f," \u4E2A\u65B0\u8282\u70B9\uFF0C\u6309\u884C\u5217\u6392\u5F00\u3002"))}var Jc=[1024,1536,2048,3072,4096];function Qc({src:e,onClose:t,onDone:n}){let[r,o]=B.default.useState(2048),[a,i]=B.default.useState("high"),[c,s]=B.default.useState(null),[f,d]=B.default.useState(!1);B.default.useEffect(()=>{wr(e).then(s).catch(()=>s(null))},[e]);let m=c?Ra(c.width,c.height,r):null;return B.default.createElement(Fr,{title:"\u653E\u5927",icon:"upscale",onClose:t,onApply:async()=>{d(!0);try{let v=await Ii(e,r,a);n(v)}finally{d(!1)}},busy:f,applyLabel:"\u653E\u5927\u5E76\u751F\u6210\u65B0\u8282\u70B9"},B.default.createElement("div",{className:"cf-tool-row"},B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u76EE\u6807\u957F\u8FB9"),B.default.createElement("div",{className:"cf-chips"},Jc.map(v=>B.default.createElement("button",{key:v,type:"button",className:`cf-chip${r===v?" is-on":""}`,onClick:()=>o(v)},v))))),B.default.createElement("div",{className:"cf-tool-row"},B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u7B97\u6CD5"),B.default.createElement("div",{className:"cf-chips"},[["nearest","\u90BB\u8FD1"],["bilinear","\u53CC\u7EBF\u6027"],["high","\u9AD8\u8D28\u91CF"]].map(([v,P])=>B.default.createElement("button",{key:v,type:"button",className:`cf-chip${a===v?" is-on":""}`,onClick:()=>i(v)},P))))),c&&m?B.default.createElement("p",{className:"cf-tool-hint"},c.width," \xD7 ",c.height," \u2192 ",B.default.createElement("strong",null,m.width," \xD7 ",m.height),a==="high"?"\uFF08\u9010\u7EA7\u7FFB\u500D\uFF0C\u7EC6\u8282\u66F4\u7A33\uFF09":""):null)}function Zc({src:e,onClose:t,onDone:n}){let[r,o]=B.default.useState(0),[a,i]=B.default.useState(9),[c,s]=B.default.useState(4.8),[f,d]=B.default.useState(!1),[m,p]=B.default.useState(!1),v=async()=>{p(!0);try{let T=Oi({horizontal:r,pitch:a,distance:c,wide:f});await n({kind:"angle",angleParams:{horizontal:r,pitch:a,distance:c,wide:f},prompt:T})}finally{p(!1)}},P={transform:`perspective(520px) rotateY(${r*-.45}deg) rotateX(${a*.35}deg) scale(${Math.max(.72,Math.min(1.08,1.08-c*.035+(f?-.08:0)))})`};return B.default.createElement(Fr,{title:"\u591A\u89D2\u5EA6",icon:"angle",onClose:t,onApply:v,busy:m,applyLabel:"AI \u751F\u6210\u65B0\u89C6\u89D2"},B.default.createElement("div",{className:"cf-angle-preview"},B.default.createElement("img",{src:typeof e=="string"?e:"",alt:"",style:P,draggable:!1})),B.default.createElement("div",{className:"cf-tool-row"},B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u6C34\u5E73 ",r,"\xB0"),B.default.createElement("input",{type:"range",min:-60,max:60,value:r,onChange:T=>o(Number(T.target.value))}))),B.default.createElement("div",{className:"cf-tool-row"},B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u4FEF\u4EF0 ",a,"\xB0"),B.default.createElement("input",{type:"range",min:-45,max:45,value:a,onChange:T=>i(Number(T.target.value))}))),B.default.createElement("div",{className:"cf-tool-row"},B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u8DDD\u79BB ",c.toFixed(1)),B.default.createElement("input",{type:"range",min:1,max:10,step:.1,value:c,onChange:T=>s(Number(T.target.value))}))),B.default.createElement("label",{className:"cf-tool-check"},B.default.createElement("input",{type:"checkbox",checked:f,onChange:T=>d(T.target.checked)}),B.default.createElement("span",null,"\u5E7F\u89D2\u955C\u5934")),B.default.createElement("p",{className:"cf-tool-hint"},"\u5C06\u539F\u56FE\u4E0E\u4E09\u7EF4\u673A\u4F4D\u53C2\u6570\u53D1\u9001\u7ED9\u751F\u56FE\u6A21\u578B\uFF0C\u4EE5\u65B0\u89C6\u89D2\u91CD\u7ED8\u5E76\u5728\u53F3\u4FA7\u751F\u6210\u5B50\u8282\u70B9\u3002"))}var Rc=[.03,.06,.1,.16];function _i(e,t){if(e){xa(e);for(let n of t){let r=n.points||[];for(let o=0;o<r.length;o+=1)wa(e,r[o-1]||r[o],r[o],n.brush,n.erase)}}}function el({src:e,onClose:t,onDone:n}){let[r,o]=B.default.useState(""),[a,i]=B.default.useState(.06),[c,s]=B.default.useState(!1),[f,d]=B.default.useState(!1),[m,p]=B.default.useState(!1),[v,P]=B.default.useState(null),[T,A]=B.default.useState({undo:0,redo:0}),$=B.default.useRef(null),K=B.default.useRef(null),Y=B.default.useRef(null),I=B.default.useRef([]),L=B.default.useRef([]),Z=()=>{A({undo:I.current.length,redo:L.current.length}),p($.current?eo($.current):!1)};B.default.useEffect(()=>{I.current=[],L.current=[],A({undo:0,redo:0}),wr(e).then(N=>{P(N);let G=$.current;G&&(G.width=N.width,G.height=N.height,xa(G),p(!1))}).catch(()=>P(null))},[e]);let ue=N=>{let G=K.current?.getBoundingClientRect();return G?{x:Math.max(0,Math.min(1,(N.clientX-G.left)/G.width)),y:Math.max(0,Math.min(1,(N.clientY-G.top)/G.height))}:{x:0,y:0}},te=N=>{if(!$.current||N.button!==0)return;N.preventDefault(),N.currentTarget.setPointerCapture(N.pointerId);let G=ue(N);Y.current={last:G,stroke:{brush:a,erase:c,points:[G]}},wa($.current,G,G,a,c),c||p(!0)},ee=N=>{if(!Y.current||!$.current)return;let G=ue(N);wa($.current,Y.current.last,G,Y.current.stroke.brush,Y.current.stroke.erase),Y.current.last=G,Y.current.stroke.points.push(G)},Te=()=>{let N=Y.current?.stroke;Y.current=null,N?.points?.length&&(I.current.push(N),L.current=[],Z())},E=()=>{if(!I.current.length)return;let N=I.current.pop();L.current.push(N),_i($.current,I.current),Z()},z=()=>{if(!L.current.length)return;let N=L.current.pop();I.current.push(N),_i($.current,I.current),Z()},H=async()=>{let N=r.trim();if(!N){d(!1);return}if(eo($.current)){d(!0);try{let{dataUrl:G,width:oe,height:Le}=await zi(e,$.current);await n({kind:"maskEdit",dataUrl:G,width:oe,height:Le,rawPrompt:N,prompt:Bi(N)})}finally{d(!1)}}},ae=r.trim().length>0&&m;return B.default.createElement(Fr,{title:"\u5C40\u90E8\u4FEE\u6539",icon:"edit",onClose:t,onApply:H,busy:f,disabled:!ae,applyLabel:"\u6309\u6807\u8BB0\u4FEE\u6539"},B.default.createElement("div",{className:"cf-mask-bar"},B.default.createElement("span",{className:"cf-mask-label"},"\u7B14\u5237"),Rc.map(N=>B.default.createElement("button",{key:N,type:"button",className:`cf-chip${a===N&&!c?" is-on":""}`,onClick:()=>{i(N),s(!1)},title:`${Math.round(N*100)}%`},Math.round(N*100))),B.default.createElement("span",{className:"cf-mask-sep"}),B.default.createElement("button",{type:"button",className:`cf-chip${c?" is-on":""}`,onClick:()=>s(N=>!N)},"\u6A61\u76AE"),B.default.createElement("button",{type:"button",className:"cf-chip",disabled:!T.undo,onClick:E},"\u64A4\u9500"),B.default.createElement("button",{type:"button",className:"cf-chip",disabled:!T.redo,onClick:z},"\u91CD\u505A"),B.default.createElement("button",{type:"button",className:"cf-chip",onClick:()=>{I.current=[],L.current=[],xa($.current),Z()}},"\u6E05\u7A7A")),B.default.createElement("div",{className:"cf-mask-stage"},B.default.createElement("div",{className:"cf-mask-box",ref:K,onPointerDown:te,onPointerMove:ee,onPointerUp:Te,onPointerCancel:Te},typeof e=="string"?B.default.createElement("img",{src:e,alt:"",draggable:!1}):null,B.default.createElement("canvas",{ref:$,className:"cf-mask-layer",style:{opacity:.4+.15}}),m?null:B.default.createElement("span",{className:"cf-mask-hint"},"\u5728\u8981\u4FEE\u6539\u7684\u5730\u65B9\u6D82\u62B9"))),B.default.createElement("label",{className:"cf-field"},B.default.createElement("span",{className:"cf-label"},"\u8981\u6539\u6210\u4EC0\u4E48"),B.default.createElement("input",{className:"cf-input",value:r,placeholder:"\u4F8B\u5982\uFF1A\u628A\u6807\u8BB0\u7684\u5730\u65B9\u6362\u6210\u7EA2\u8272\u7684\u676F\u5B50",onChange:N=>o(N.target.value)})),B.default.createElement("p",{className:"cf-tool-hint"},"\u5C06",B.default.createElement("strong",null,"\u5E72\u51C0\u539F\u56FE"),"\u4E0E",B.default.createElement("strong",null,"\u534A\u900F\u660E\u84DD\u6807\u6CE8\u56FE\uFF08",ya,"\uFF09"),"\u6210\u5BF9\u63D0\u4EA4\u6A21\u578B\uFF0C\u9501\u5B9A\u672A\u6807\u6CE8\u533A\u57DF\u4E00\u81F4\u6027\u3002",v?` \u539F\u56FE ${v.width} \xD7 ${v.height}\u3002`:""))}function Ki({kind:e,src:t,onClose:n,onDone:r}){return!e||!t?null:e==="crop"?B.default.createElement(Gc,{src:t,onClose:n,onDone:r}):e==="split"?B.default.createElement(qc,{src:t,onClose:n,onDone:r}):e==="upscale"?B.default.createElement(Qc,{src:t,onClose:n,onDone:r}):e==="angle"?B.default.createElement(Zc,{src:t,onClose:n,onDone:r}):e==="maskEdit"?B.default.createElement(el,{src:t,onClose:n,onDone:r}):null}Gn();Hr();jr();function Yr(e){return!e||e.type!=="image"?!1:Et(e)?.storageKey||e.storageKey||Array.isArray(e.images)&&e.images.some(t=>!!(t?.storageKey||t?.url))?!0:!!e.src}function vl(e,t,n){if(!e||!Array.isArray(t)||!Array.isArray(n))return[];let r=new Map(t.map(s=>[s.id,s])),o=n.filter(s=>s.to===e.id);if(!o.length)return[];let a=new Set([e.id]),i=[],c=s=>{if(!(!s||a.has(s.id))){if(a.add(s.id),s.type==="group"&&Array.isArray(s.childIds)){for(let f of s.childIds){let d=r.get(f);d&&!a.has(d.id)&&(a.add(d.id),i.push(d))}return}i.push(s)}};for(let s of o)c(r.get(s.from));return i.sort((s,f)=>s.y-f.y||s.x-f.x),i}function Xr(e,t,n){let r=vl(e,t,n),o=[],a=[],i=null;for(let c of r)if(c.type==="text"){let s=String(c.text||c.prompt||"").trim();s&&o.push({id:c.id,name:c.name||"",text:s,node:c})}else if(c.type==="image"){let s=Et(c),f=s?.storageKey||c.storageKey||"",d=s?.degraded?s.url||"":s?.url||c.src||"";(f||d)&&a.push({id:c.id,name:c.name||"",storageKey:f,url:d,mimeType:s?.mimeType||"image/png",node:c})}else c.type==="config"&&!i&&(i=c);return{upstream:r,textInputs:o,imageInputs:a,configNode:i}}function Wr(e,t=[],n=[]){let r=String(e||"").trim(),o=new Set;for(let i of t){let c=`@${Ht.text}${i.name?`:${i.name}`:""}`;r.includes(c)&&(o.add(i.id),r=r.split(c).join(i.text))}let a=t.filter(i=>!o.has(i.id)).map((i,c)=>t.length>1||r?`\u3010\u53C2\u8003\u6587\u672C${c+1}\u3011${i.text}`:i.text);for(let i of n)i.type==="image"&&i.name&&(r=r.split(`@${Ht.image}:${i.name}`).join(`\u53C2\u8003\u56FE(${i.name})`));return a.length?r?`${a.join(`
`)}
${r}`:a.join(`
`):r}var _=Zt(require("react"),1);function ns(e){if(!e)return"";let t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleDateString("zh-CN")}function qn({src:e,alt:t="",className:n="",onClick:r,compactEmpty:o=!1}){let a=String(e||"").trim(),[i,c]=_.default.useState(0);if(_.default.useEffect(()=>{c(0)},[a]),!a||i>=3)return _.default.createElement("div",{className:`cf-prompt-cover-empty${o?" is-compact":""} ${n}`,"aria-hidden":"true"},_.default.createElement(he,{name:"image",size:o?16:22,stroke:1.4}));let s=ha(a),f=/^https?:\/\//i.test(a)?`dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(s||a)}`:"",d=a;return i===1?d=s||f||a:i===2&&(d=f||""),d?_.default.createElement("img",{src:d,alt:t,className:n,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>{c(p=>p===0&&!s?f?2:3:p===1&&!f?3:p+1)},onClick:r}):_.default.createElement("div",{className:`cf-prompt-cover-empty${o?" is-compact":""} ${n}`,"aria-hidden":"true"},_.default.createElement(he,{name:"image",size:o?16:22,stroke:1.4}))}function Sa({prompt:e,onClose:t,onUse:n,onCopy:r,onSaveAsset:o}){if(!e)return null;let a=Array.isArray(e.referenceImageUrls)?e.referenceImageUrls.filter(Boolean):[],i=e.text||e.prompt||"",c=ns(e.createdAt),s=ns(e.updatedAt);return _.default.createElement(lt,{wide:!0,title:e.title||"\u63D0\u793A\u8BCD\u8BE6\u60C5",onClose:t,footer:_.default.createElement(_.default.Fragment,null,a.length>0&&n?_.default.createElement(_.default.Fragment,null,_.default.createElement(J,{variant:"primary",icon:"image",onClick:()=>{n(e,{withRefs:!0}),t()}},"\u5E26\u53C2\u8003\u56FE\u4F7F\u7528\uFF08",a.length," \u5F20\uFF09"),_.default.createElement(J,{onClick:()=>{n(e,{withRefs:!1}),t()}},"\u4EC5\u4F7F\u7528\u6587\u5B57")):n?_.default.createElement(J,{variant:"primary",onClick:()=>{n(e,{withRefs:!1}),t()}},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"):null,r?_.default.createElement(J,{icon:"copy",onClick:()=>r(e)},"\u590D\u5236\u63D0\u793A\u8BCD"):null,o?_.default.createElement(J,{icon:"folder",onClick:()=>o(e)},"\u5B58\u4E3A\u8D44\u4EA7"):null,_.default.createElement(J,{onClick:t},"\u5173\u95ED"))},_.default.createElement("div",{className:"cf-prompt-detail"},e.coverUrl||a.length>0?_.default.createElement("div",{className:"cf-prompt-detail-media"},e.coverUrl?_.default.createElement("div",{className:"cf-prompt-detail-cover"},_.default.createElement(qn,{src:e.coverUrl,alt:e.title||"\u5C01\u9762"})):null,a.length>0?_.default.createElement("div",{className:"cf-prompt-detail-refs"},_.default.createElement("div",{className:"cf-prompt-detail-subhead"},"\u914D\u5957\u53C2\u8003\u56FE\uFF08",a.length," \u5F20\uFF09"),_.default.createElement("div",{className:"cf-prompt-detail-ref-grid"},a.map((f,d)=>_.default.createElement("div",{key:`${f}_${d}`,className:"cf-prompt-detail-ref-item"},_.default.createElement(qn,{src:f,alt:`\u53C2\u8003\u56FE ${d+1}`,compactEmpty:!0}))))):null):null,_.default.createElement("div",{className:"cf-prompt-detail-body"},_.default.createElement("div",{className:"cf-prompt-detail-meta"},e.category?_.default.createElement("span",{className:"cf-tag"},e.category):null,(e.tags||[]).map(f=>_.default.createElement("span",{key:f,className:"cf-tag"},f)),e.author?_.default.createElement("span",{className:"cf-prompt-detail-note"},"\u4F5C\u8005\uFF1A",e.author):null,c||s?_.default.createElement("span",{className:"cf-prompt-detail-note"},c?`\u521B\u5EFA ${c}`:"",c&&s?" \xB7 ":"",s?`\u66F4\u65B0 ${s}`:""):null,e.sourceUrl?_.default.createElement("a",{className:"cf-link",href:e.sourceUrl,target:"_blank",rel:"noreferrer"},"\u67E5\u770B\u539F\u9879\u76EE"):null),e.description?_.default.createElement("p",{className:"cf-prompt-detail-desc"},e.description):null,e.preview?_.default.createElement("pre",{className:"cf-prompt-detail-preview"},e.preview):null,_.default.createElement("div",{className:"cf-prompt-detail-full"},i))))}function Na({prompts:e=[],onPick:t,onManage:n,onClose:r}){let[o,a]=_.default.useState(""),[i,c]=_.default.useState("\u5168\u90E8"),[s,f]=_.default.useState([]),[d,m]=_.default.useState(24),[p,v]=_.default.useState(null),P=_.default.useMemo(()=>["\u5168\u90E8",...new Set(e.map(I=>I.category).filter(Boolean))],[e]),T=_.default.useMemo(()=>{let I=i==="\u5168\u90E8"?e:e.filter(L=>L.category===i);return["\u5168\u90E8",...new Set(I.flatMap(L=>L.tags||[]).filter(Boolean))]},[e,i]),A=_.default.useMemo(()=>{let I=o.trim().toLowerCase();return e.filter(L=>i!=="\u5168\u90E8"&&L.category!==i||s.length&&!s.some(Z=>(L.tags||[]).includes(Z))?!1:I?[L.title,L.text,L.description,L.category,L.author,...L.tags||[]].filter(Boolean).some(Z=>String(Z).toLowerCase().includes(I)):!0)},[e,i,s,o]);_.default.useEffect(()=>{m(24)},[o,i,s]);let $=A.slice(0,d),K=A.length>$.length,Y=I=>{if(I==="\u5168\u90E8"){f([]);return}f(L=>L.includes(I)?L.filter(Z=>Z!==I):[...L,I])};return _.default.createElement(_.default.Fragment,null,_.default.createElement(lt,{wide:!0,title:`\u9009\u62E9\u63D0\u793A\u8BCD\uFF08${A.length} \u6761\uFF09`,onClose:r,footer:_.default.createElement(_.default.Fragment,null,n?_.default.createElement(J,{onClick:n},"\u6253\u5F00\u63D0\u793A\u8BCD\u4E2D\u5FC3"):null,_.default.createElement(J,{onClick:r},"\u5173\u95ED"))},_.default.createElement("div",{className:"cf-prompt-picker"},_.default.createElement("aside",{className:"cf-prompt-picker-side"},_.default.createElement("div",{className:"cf-filter-group"},_.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),_.default.createElement("div",{className:"cf-filter-chips"},P.map(I=>_.default.createElement("button",{key:I,type:"button",className:`cf-chip cf-chip--tag${i===I?" is-on":""}`,onClick:()=>{c(I),f([])}},I)))),_.default.createElement("div",{className:"cf-filter-group"},_.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),_.default.createElement("div",{className:"cf-filter-chips"},T.slice(0,40).map(I=>{let L=I==="\u5168\u90E8"?s.length===0:s.includes(I);return _.default.createElement("button",{key:I,type:"button",className:`cf-chip cf-chip--tag${L?" is-on":""}`,onClick:()=>Y(I)},I)})))),_.default.createElement("div",{className:"cf-prompt-picker-main"},_.default.createElement("input",{className:"cf-input",placeholder:"\u641C\u7D22\u6807\u9898\u3001\u6B63\u6587\u3001\u6807\u7B7E\u6216\u4F5C\u8005\u2026",value:o,onChange:I=>a(I.target.value),autoFocus:!0}),_.default.createElement("div",{className:"cf-prompt-picker-scroll",onScroll:I=>{let L=I.currentTarget;K&&L.scrollTop+L.clientHeight>=L.scrollHeight-140&&m(Z=>Z+24)}},$.length===0?_.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",padding:"24px 0",textAlign:"center"}},"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD"):_.default.createElement("div",{className:"cf-prompt-picker-grid"},$.map(I=>{let L=I.referenceImageUrls?.length||0;return _.default.createElement("div",{key:`${I.sourceId||""}_${I.id}`,className:"cf-prompt-picker-card"},_.default.createElement("button",{type:"button",className:"cf-prompt-picker-thumb",onClick:()=>t?.(I,{withRefs:L>0}),title:L>0?`\u70B9\u51FB\u586B\u5165\u63D0\u793A\u8BCD\u5E76\u52A0\u8F7D ${L} \u5F20\u53C2\u8003\u56FE`:"\u70B9\u51FB\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"},_.default.createElement(qn,{src:I.coverUrl,alt:I.title,compactEmpty:!0}),L>0?_.default.createElement("span",{className:"cf-prompt-ref-badge"},"\u53C2\u8003\u56FE\xD7",L):null),_.default.createElement("div",{className:"cf-prompt-picker-info"},_.default.createElement("button",{type:"button",className:"cf-prompt-picker-title",onClick:()=>t?.(I,{withRefs:L>0})},I.title||"\u672A\u547D\u540D\u63D0\u793A\u8BCD"),_.default.createElement("p",{className:"cf-prompt-picker-snippet"},I.text),_.default.createElement("div",{className:"cf-prompt-picker-foot"},_.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>t?.(I,{withRefs:L>0})},"\u4F7F\u7528"),_.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:()=>v(I)},"\u8BE6\u60C5"))))})),K?_.default.createElement("div",{style:{textAlign:"center",paddingTop:10}},_.default.createElement(J,{size:"sm",onClick:()=>m(I=>I+24)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u5269 ",A.length-$.length," \u6761\uFF09")):null)))),p?_.default.createElement(Sa,{prompt:p,onClose:()=>v(null),onUse:(I,L)=>{v(null),t?.(I,L)}}):null)}function rs({source:e,items:t=[],busy:n=!1,onRefresh:r,onUse:o,onCopy:a,onSaveAsset:i,onClose:c}){let[s,f]=_.default.useState(""),[d,m]=_.default.useState(20),[p,v]=_.default.useState(null),P=_.default.useMemo(()=>{let A=s.trim().toLowerCase();return A?t.filter($=>($.title||"").toLowerCase().includes(A)||($.text||"").toLowerCase().includes(A)||($.tags||[]).some(K=>K.toLowerCase().includes(A))):t},[t,s]);if(_.default.useEffect(()=>{m(20)},[s,e?.url]),!e)return null;let T=P.slice(0,d);return _.default.createElement(_.default.Fragment,null,_.default.createElement(lt,{wide:!0,title:`${e.name||"\u6765\u6E90\u5185\u5BB9"}\uFF08${t.length} \u6761\uFF09`,onClose:c,footer:_.default.createElement(_.default.Fragment,null,r?_.default.createElement(J,{icon:"refresh",disabled:n,onClick:r},n?"\u62C9\u53D6\u4E2D\u2026":"\u5237\u65B0\u6B64\u6E90"):null,_.default.createElement(J,{onClick:c},"\u5173\u95ED"))},_.default.createElement("div",{style:{display:"grid",gap:10}},_.default.createElement("input",{className:"cf-input",placeholder:"\u5728\u5F53\u524D\u6765\u6E90\u4E2D\u641C\u7D22\u2026",value:s,onChange:A=>f(A.target.value)}),_.default.createElement("div",{className:"cf-source-preview-list"},T.length===0?_.default.createElement(Rt,{icon:"book",title:t.length?"\u6CA1\u6709\u5339\u914D\u6761\u76EE":"\u8BE5\u6765\u6E90\u6682\u65E0\u7F13\u5B58\u5185\u5BB9",hint:"\u70B9\u4E0B\u65B9\u300C\u5237\u65B0\u6B64\u6E90\u300D\u7ACB\u523B\u62C9\u53D6\u3002"}):T.map(A=>_.default.createElement("div",{key:A.id,className:"cf-source-preview-row"},_.default.createElement("div",{className:"cf-source-preview-thumb",onClick:()=>v(A),style:{cursor:"pointer"}},_.default.createElement(qn,{src:A.coverUrl,alt:A.title,compactEmpty:!0})),_.default.createElement("div",{style:{minWidth:0,flex:1}},_.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},_.default.createElement("span",{style:{fontWeight:500,fontSize:13}},A.title),A.referenceImageUrls?.length?_.default.createElement("span",{className:"cf-tag"},"\u53C2\u8003\u56FE\xD7",A.referenceImageUrls.length):null),_.default.createElement("p",{className:"cf-prompt-picker-snippet",style:{marginTop:2}},A.text),A.tags?.length?_.default.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginTop:4}},A.tags.slice(0,5).map($=>_.default.createElement("span",{key:$,className:"cf-tag"},$))):null),_.default.createElement("div",{style:{display:"flex",gap:4,flex:"none"}},_.default.createElement(Ke,{name:"copy",label:"\u590D\u5236",onClick:()=>a?.(A)}),_.default.createElement(J,{size:"sm",onClick:()=>v(A)},"\u8BE6\u60C5"),o?_.default.createElement(J,{size:"sm",variant:"primary",onClick:()=>{o(A,{withRefs:!0}),c()}},"\u4F7F\u7528"):null)))),P.length>T.length?_.default.createElement("div",{style:{textAlign:"center"}},_.default.createElement(J,{size:"sm",onClick:()=>m(A=>A+20)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",P.length-T.length," \u6761\uFF09")):null)),p?_.default.createElement(Sa,{prompt:p,onClose:()=>v(null),onUse:(A,$)=>{v(null),c(),o?.(A,$)},onCopy:a,onSaveAsset:i}):null)}function bl({info:e,onClose:t,say:n}){let r=a=>a?a<1024?`${a} B`:a<1048576?`${(a/1024).toFixed(1)} KB`:`${(a/1024/1024).toFixed(2)} MB`:"\u2014",o=[["\u8282\u70B9 ID",e.id],["\u539F\u59CB\u5C3A\u5BF8",e.width&&e.height?`${e.width} \xD7 ${e.height}`:"\u2014"],["\u753B\u5E03\u5C3A\u5BF8",`${e.w} \xD7 ${e.h}`],["\u4F4D\u7F6E",`${e.x}, ${e.y}`],["\u6587\u4EF6\u5927\u5C0F",r(e.bytes)],["\u683C\u5F0F",e.mimeType||"\u2014"],["\u6279\u91CF\u5F20\u6570",String(e.count||1)],["\u6BD4\u4F8B",e.locked?"\u7B49\u6BD4\u7F29\u653E":"\u81EA\u7531\u6BD4\u4F8B"],["\u5B58\u50A8\u952E",e.storageKey||"\u2014"],["\u521B\u5EFA\u65F6\u95F4",e.createdAt?new Date(e.createdAt).toLocaleString("zh-CN"):"\u2014"]];return x.default.createElement(lt,{title:"\u8282\u70B9\u4FE1\u606F",onClose:t,footer:x.default.createElement(J,{onClick:t},"\u5173\u95ED")},x.default.createElement("div",{className:"cf-info-list"},o.map(([a,i])=>x.default.createElement("div",{key:a,className:"cf-info-row"},x.default.createElement("span",{className:"cf-info-key"},a),x.default.createElement("span",{className:`cf-info-val${a==="\u5B58\u50A8\u952E"?" is-mono":""}`},i)))),e.storageKey?x.default.createElement("div",{style:{display:"flex",gap:6,marginTop:"var(--cf-sp-3)"}},x.default.createElement(J,{size:"sm",onClick:async()=>{try{await navigator.clipboard.writeText(e.storageKey),n?.("\u5B58\u50A8\u952E\u5DF2\u590D\u5236")}catch{n?.("\u590D\u5236\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u526A\u8D34\u677F","error")}}},"\u590D\u5236\u5B58\u50A8\u952E")):null)}function yl(e,t){if(!e?.providers?.length)return null;let n=(i,c)=>{let s=e.providers.find(d=>d.id===i),f=s?.models?.find(d=>d.id===c);return s&&f?{provider:s,model:f}:null},r=t?.provider&&t?.model?t:e.default;if(r?.provider&&r?.model){let i=n(r.provider,r.model);if(i)return i}let o=e.providers[0],a=o?.models?.[0];return o&&a?{provider:o,model:a}:null}function os({canvases:e,onOpen:t,onCreate:n,onRename:r,onDelete:o,onImport:a}){let[i,c]=x.default.useState(null),[s,f]=x.default.useState(null);return x.default.createElement("div",{className:"cf-page"},x.default.createElement("div",{className:"cf-page-inner"},x.default.createElement("div",{className:"cf-page-head"},x.default.createElement("div",null,x.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),x.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),x.default.createElement("div",{className:"cf-page-actions"},x.default.createElement(J,{icon:"upload",onClick:a},"\u5BFC\u5165\u753B\u5E03"),x.default.createElement(J,{variant:"primary",icon:"plus",onClick:n},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?x.default.createElement(Rt,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:x.default.createElement(J,{variant:"primary",icon:"plus",onClick:n},"\u65B0\u5EFA\u753B\u5E03")}):x.default.createElement("div",{className:"cf-card"},x.default.createElement("div",{className:"cf-list-head"},x.default.createElement("span",null,"\u540D\u79F0"),x.default.createElement("span",null,"\u5185\u5BB9"),x.default.createElement("span",null,"\u66F4\u65B0")),x.default.createElement("div",{className:"cf-canvas-list"},e.map(d=>x.default.createElement("div",{key:d.id,className:"cf-canvas-row"},x.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>t(d.id)},d.name||"\u672A\u547D\u540D\u753B\u5E03"),x.default.createElement("span",{className:"cf-canvas-meta"},d.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",d.edges.length," \u6761\u8FDE\u7EBF"),x.default.createElement("span",{className:"cf-canvas-row-actions"},x.default.createElement(Ke,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>c(d)}),x.default.createElement(Ke,{name:"trash",label:"\u5220\u9664",onClick:()=>f(d)}))))))),i?x.default.createElement(xl,{canvas:i,onClose:()=>c(null),onSubmit:d=>{r(i.id,d),c(null)}}):null,s?x.default.createElement(lt,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>f(null),footer:x.default.createElement(x.default.Fragment,null,x.default.createElement(J,{onClick:()=>f(null)},"\u53D6\u6D88"),x.default.createElement(J,{variant:"danger",onClick:()=>{o(s.id),f(null)}},"\u5220\u9664"))},x.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",s.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",s.nodes.length," \u4E2A\u8282\u70B9\u548C ",s.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function xl({canvas:e,onClose:t,onSubmit:n}){let[r,o]=x.default.useState(e.name||"");return x.default.createElement(lt,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:t,footer:x.default.createElement(x.default.Fragment,null,x.default.createElement(J,{onClick:t},"\u53D6\u6D88"),x.default.createElement(J,{variant:"primary",onClick:()=>n(r.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},x.default.createElement("label",{className:"cf-field"},x.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),x.default.createElement("input",{className:"cf-input",value:r,autoFocus:!0,onChange:a=>o(a.target.value),onKeyDown:a=>{a.key==="Enter"&&n(r.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var wl=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"video",label:"\u89C6\u9891",icon:"video",key:""},{id:"audio",label:"\u97F3\u9891\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"},{sep:!0},{id:"undo",label:"\u64A4\u9500",icon:"undo",key:"\u2318Z",action:"undo"},{id:"redo",label:"\u91CD\u505A",icon:"redo",key:"\u21E7\u2318Z",action:"redo"}],kl=x.default.memo(Si);function as(e){let t=[];if(e?.storageKey&&t.push(e.storageKey),Array.isArray(e?.images))for(let n of e.images)n?.storageKey&&t.push(n.storageKey);return t}function so(e,t){if(!e?.length)return;let n=new Set;for(let r of t||[])for(let o of as(r))n.add(o);for(let r of e)for(let o of as(r))n.has(o)||ri(o)}function Sl({draftStore:e,placeholder:t,hasRefs:n,onPaste:r,onSubmit:o}){let a=x.default.useSyncExternalStore(e.subscribe,e.get,e.get),i=x.default.useRef(null),c=x.default.useRef(0);return x.default.useLayoutEffect(()=>{let s=i.current;if(!s)return;let f=n?85:121;s.style.height="auto";let d=Math.min(s.scrollHeight,f);s.style.height=`${d}px`,s.style.overflowY=s.scrollHeight>f?"auto":"hidden"},[a,n]),x.default.createElement("textarea",{ref:i,className:"cf-composer-input",value:a,rows:2,placeholder:t,onChange:s=>e.set(s.target.value),onPaste:r,onCompositionStart:()=>{c.current=Date.now()},onCompositionEnd:()=>{c.current=Date.now()},onKeyDown:s=>{s.key==="Enter"&&(s.nativeEvent.isComposing||Date.now()-c.current<500||s.shiftKey||(s.preventDefault(),c.current=0,o()))}})}function Nl({draftStore:e,textBusy:t,imgBusy:n,onSubmit:r,onStopText:o,onStopImg:a}){let i=x.default.useSyncExternalStore(e.subscribe,e.get,e.get),c=t?"\u505C\u6B62\u751F\u6210":n?"\u53D6\u6D88\u751F\u6210":"\u53D1\u9001\u6D88\u606F",s=t?o:n?a:r,f=!t&&!n&&!i.trim();return x.default.createElement("button",{type:"button",className:`cf-send${n?" is-busy":""}`,onClick:s,disabled:f,"aria-label":c,"data-tip":c},t?x.default.createElement(he,{name:"stop",size:14}):n?x.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}):x.default.createElement(he,{name:"arrowUp",size:17}))}function is({canvas:e,channels:t,defaults:n,assistantModel:r,prompts:o=[],draftStore:a,draft:i,onDraftChange:c,onSendToStudio:s,showComposer:f=!0,onChange:d,onBack:m,say:p,onSaveAsset:v,showToolbarLabels:P=!1,theme:T="system",onTheme:A}){let $=ki(),{cam:K,moveTo:Y}=$,I=x.default.useRef({nodes:e.nodes,edges:e.edges});I.current={nodes:e.nodes,edges:e.edges};let[L,Z]=x.default.useState(!1),[ue,te]=x.default.useState([]),[ee,Te]=x.default.useState("select"),E=x.default.useRef(null);E.current||(E.current=Ni({get:()=>E._canvas||{nodes:[],edges:[],grid:"dots"},apply:l=>d({nodes:l.nodes,edges:l.edges,grid:l.grid})}));let z=E.current;E._canvas=e;let[H,ae]=x.default.useState({canUndo:!1,canRedo:!1}),[N,G]=x.default.useState(null),oe=x.default.useRef(null),Le=x.default.useRef(null),[ce,dt]=x.default.useState(!1),[bt,Ot]=x.default.useState(null),[vt,Lt]=x.default.useState({});x.default.useEffect(()=>z.subscribe(ae),[z]),x.default.useEffect(()=>{z.init()},[e?.id]);let St=x.default.useRef(null);St.current||(St.current=na(i||""));let Ge=a||St.current,st=x.default.useCallback(l=>{Ge.set(l),!a&&c&&c(Ge.get())},[Ge,a,c]),[Ye,yt]=x.default.useState(n?.ratio||"1:1"),[Qe,D]=x.default.useState(n?.count||1),[O,ie]=x.default.useState(n?.resolution||"\u81EA\u52A8"),[le,Ue]=x.default.useState(n?.quality||"\u81EA\u52A8"),[we,Me]=x.default.useState(!!n?.transparent),[Ie,ke]=x.default.useState(n?.modelKey||""),[Be,nt]=x.default.useState(!0),[Xe,Wt]=x.default.useState(!1),[Ne,Oe]=x.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[mt,Re]=x.default.useState([]),[rt,ct]=x.default.useState(()=>{let l=On(on({resolution:n?.resolution||"\u81EA\u52A8",ratio:n?.ratio||"1:1"}));return l?l.width:1024}),[Fe,Ze]=x.default.useState(()=>{let l=On(on({resolution:n?.resolution||"\u81EA\u52A8",ratio:n?.ratio||"1:1"}));return l?l.height:1024}),zt=x.default.useRef(!!n?.modelKey);x.default.useEffect(()=>{!zt.current&&n?.modelKey&&(zt.current=!0,Ie||ke(n.modelKey))},[n?.modelKey,Ie]);let[Cn,Sr]=x.default.useState(null),[Jn,Vt]=x.default.useState(!1),Ut=x.default.useRef(null),An=x.default.useRef(null),Gt=x.default.useRef(null);x.default.useEffect(()=>{if(!Ne)return;let l=w=>{An.current?.contains(w.target)||Oe(null)},u=w=>{w.key==="Escape"&&Oe(null)};return window.addEventListener("pointerdown",l),window.addEventListener("keydown",u),()=>{window.removeEventListener("pointerdown",l),window.removeEventListener("keydown",u)}},[Ne]);let Tt=e.nodes,Nt=e.edges,un=Tt.filter(l=>ue.includes(l.id)),ve=un.length===1?un[0]:null,$t=x.default.useMemo(()=>ve?Nt.filter(l=>l.to===ve.id).map(l=>Tt.find(u=>u.id===l.from)).filter(l=>l&&l.type!=="group"&&l.type!=="config"):[],[ve,Nt,Tt]),sn=l=>{let u=l.map((w,C)=>({id:`${Date.now()}_${C}_${w.name||"paste"}`,name:w.name||"\u7C98\u8D34\u7684\u56FE\u7247",url:URL.createObjectURL(w),file:w}));u.length&&(Re(w=>[...w,...u]),p?.(`\u5DF2\u52A0\u5165 ${u.length} \u5F20\u53C2\u8003\u56FE`))},pt=l=>Re(u=>{let w=u.find(C=>C.id===l);return w?.url&&URL.revokeObjectURL(w.url),u.filter(C=>C.id!==l)}),_n=()=>Gt.current?.click(),mn=l=>{sn([...l.target.files||[]]),l.target.value=""},k=l=>{let u=l.clipboardData;if(!u)return;let w=[];for(let C of Array.from(u.items||[]))if(C.kind==="file"&&C.type.startsWith("image/")){let U=C.getAsFile();U&&w.push(U)}if(!w.length)for(let C of Array.from(u.files||[]))C.type.startsWith("image/")&&w.push(C);w.length&&(l.preventDefault(),sn(w))},V=en(t,"image"),ge=wn(t,Ie)||V[0]||null,R=x.default.useMemo(()=>{let l=t||[];if(!l.length)return"\u8FD8\u6CA1\u6709\u914D\u6E20\u9053\u3002\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u65B0\u589E\u4E00\u4E2A\uFF0C\u586B\u597D\u5730\u5740\u548C Key \u540E\u62C9\u53D6\u6A21\u578B\u3002";let u=l.filter(j=>j.enabled!==!1);if(!u.length)return`\u6709 ${l.length} \u4E2A\u6E20\u9053\u4F46\u90FD\u505C\u7528\u4E86\u3002\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6253\u5F00\u5F00\u5173\u3002`;let w=0,C=0,U=0;for(let j of u)for(let q of j.models||[])w+=1,q.enabled!==!1&&(C+=1,(q.caps||[]).includes("image")&&(U+=1));return w?C?U?"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u68C0\u67E5\u4E00\u4E0B\u3002":`\u5171\u6709 ${w} \u4E2A\u6A21\u578B\uFF0C\u4F46\u6CA1\u6709\u4E00\u4E2A\u6807\u4E86\u300C\u751F\u56FE\u300D\u80FD\u529B\u3002\u53BB\u914D\u7F6E\u91CC\u7ED9\u751F\u56FE\u6A21\u578B\u70B9\u4EAE\u300C\u751F\u56FE\u300D\u3002`:`\u5171\u6709 ${w} \u4E2A\u6A21\u578B\u4F46\u90FD\u88AB\u52FE\u6389\u4E86\u3002\u53BB\u914D\u7F6E\u91CC\u52FE\u4E0A\u8981\u7528\u7684\u3002`:`\u6E20\u9053\u300C${u[0].name||"\u672A\u547D\u540D"}\u300D\u91CC\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u53BB\u914D\u7F6E\u91CC\u70B9\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u624B\u52A8\u6DFB\u52A0\u3002`},[t]),Se=l=>Math.max(256,Math.round(l/16)*16),_e=(l,u=O)=>{let w=On(on({resolution:u,ratio:l,align16:Be}));return w?{w:w.width,h:w.height}:{w:1024,h:1024}},[We,Dt]=x.default.useState(null),Kn=(l=Ye)=>We&&We.ratio===l?We:_e(l,O),qt=(l=Ye)=>{let u=Kn(l);ct(u.w),Ze(u.h)},In=(l,u)=>{let w=l/u,C=null;for(let ne of zn){if(ne.id==="\u81EA\u52A8")continue;let re=Math.abs(fn(ne.id)-w)/w;re<.02&&(!C||re<C.d)&&(C={id:ne.id,d:re})}if(C)return C.id;let U=(ne,re)=>re?U(re,ne%re):ne,j=U(Math.round(l),Math.round(u))||1,q=Math.round(l/j),se=Math.round(u/j);return q<=64&&se<=64?`${q}:${se}`:`${Math.round(w*100)/100}:1`},gn=l=>{yt(l);let u=_e(l,O);if(Dt({ratio:l,w:u.w,h:u.h,custom:!1}),ct(u.w),Ze(u.h),ve&&ve.type==="image"){let w=Tn(l,ve.w);Jt(ve.id,{ratio:l,w:w.w,h:w.h})}},qe=l=>{ie(l);let u=_e(Ye,l);Dt({ratio:Ye,w:u.w,h:u.h,custom:!1}),ct(u.w),Ze(u.h)},_t=()=>{let l=Math.round(rt),u=Math.round(Fe);if(!l||!u)return;Be&&(l=Se(l),u=Se(u)),ct(l),Ze(u);let w=In(l,u);if(Dt({ratio:w,w:l,h:u,custom:!0}),yt(w),ve&&ve.type==="image"){let C=Math.max(140,Math.min(280,l));Jt(ve.id,{ratio:w,w:C,h:Math.round(C/(l/u))+28})}},xt=(l,u)=>{let w=Number(String(u).replace(/\D/g,""))||0;if(l==="w"?ct(w):Ze(w),!Xe||!w)return;let C=fn(Ye);l==="w"?Ze(Math.round(w/C)):ct(Math.round(w*C))},Pt=()=>{let l=!Xe;if(Wt(l),l&&rt&&Fe){let u=fn(Ye);Ze(Math.round(rt/u))}};x.default.useEffect(()=>{ve&&(ve.type==="image"||ve.type==="audio")&&(st(ve.prompt||""),ve.ratio&&(yt(ve.ratio),qt(ve.ratio)),ve.resolution&&ie(ve.resolution))},[ve?.id]);let fe=l=>{d(l),z.tick()},Mt=()=>{z.undo()||p?.("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C")},En=()=>{z.redo()||p?.("\u6CA1\u6709\u53EF\u91CD\u505A\u7684\u64CD\u4F5C")},Jt=(l,u)=>fe(w=>({nodes:w.nodes.map(C=>C.id===l?{...C,...u}:C)})),hn=(l,u,w)=>{let C=new Set(l);fe(U=>({nodes:U.nodes.map(j=>C.has(j.id)?{...j,x:Math.round(j.x+u),y:Math.round(j.y+w)}:j)}))},vn=(l,u,w)=>Jt(l,{w:u,h:w}),at=(l,u)=>fe(w=>({edges:[...w.edges,{id:Ee("e"),from:l,to:u}]})),it=l=>fe(u=>({edges:u.edges.filter(w=>w.id!==l)})),jn=l=>{let u=K.current,w={x:(window.innerWidth/2-u.tx)/u.s,y:(window.innerHeight/2-u.ty)/u.s},C=l==="config"?{modelKey:Ie||V[0]?.key||"",ratio:Ye,count:Qe,resolution:O}:l==="audio"?{name:"\u6682\u4E0D\u652F\u6301\u751F\u6210"}:{},U=ft(l,w,C);fe(j=>({nodes:[...j.nodes,U]})),te([U.id]),p?.(l==="audio"?"\u5DF2\u65B0\u5EFA\u97F3\u9891\u8282\u70B9\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09":`\u5DF2\u65B0\u5EFA${Ht[l]}\u8282\u70B9`)},Kt=async({node:l,rawText:u,sourceParent:w=null,modelOverride:C=""})=>{let U=Xr(w||l,I.current.nodes,I.current.edges),j=Wr(u,U.textInputs,U.upstream);if(!j){p?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD","error");return}let q=l?.id||"";if(!q){let je=w?{x:w.x+w.w+96,y:w.y}:{x:(window.innerWidth/2-K.current.tx)/K.current.s,y:(window.innerHeight/2-K.current.ty)/K.current.s},de=ft("text",{x:je.x+120,y:je.y+80},{text:"",prompt:u});de.x=je.x,de.y=je.y,q=de.id;let Ae=w?{id:Ee("e"),from:w.id,to:q}:null;fe(Ft=>({nodes:[...Ft.nodes,de],edges:Ae?[...Ft.edges,Ae]:Ft.edges})),te([q])}let se=C?wn(t,C):null,ne=se?{provider:{id:se.channel.id},model:{id:se.model.id}}:r||null,re=new AbortController;Ut.current=re,Vt(!0);let De=0,He="",ye=!1,Ce=je=>{ye||fe(de=>({nodes:de.nodes.map(Ae=>Ae.id===q?je(Ae):Ae)}))};Ce(je=>({...je,text:"",status:"running"}));try{await Pr({model:ne,messages:[{role:"user",text:j}],signal:re.signal,onDelta:(je,de)=>{He=de;let Ae=Date.now();Ae-De>80&&(De=Ae,Ce(Ft=>({...Ft,text:de})))}}),Ce(je=>({...je,text:He,status:"done"}))}catch(je){Ce(de=>({...de,text:He||`\u751F\u6210\u5931\u8D25\uFF1A${je.message}`,status:"failed"}))}finally{Vt(!1),Ut.current=null}},bn=()=>{let l=Ge.get().trim();if(ve&&ve.type==="config"){cn({...ve,prompt:l||ve.prompt});return}if(!l)return;if(ve&&ve.type==="video"){fe(w=>({nodes:w.nodes.map(C=>C.id===ve.id?{...C,prompt:l}:C)})),S({...ve,prompt:l});return}if(ve&&ve.type==="audio"){p?.("\u97F3\u9891\u8282\u70B9\u6682\u4E0D\u652F\u6301\u751F\u6210","error");return}if(ve&&ve.type==="text"){Kt({node:ve,rawText:l}).then(()=>st(""));return}let u=ve&&ve.type==="image"?ve:null;Nr({text:l,target:u,ratio:Ye,resolution:O,count:Qe,quality:le,transparent:we})},Fn=async l=>{if(!l)return"";if(l.storageKey){let u=await Lr(l.storageKey).catch(()=>"");if(u)return u}if(l.url?.startsWith("data:"))return l.url;if(l.url){let w=await(await fetch(l.url)).blob();return hr(w)}return""},Nr=async({text:l,target:u=null,sourceParent:w=null,ratio:C,resolution:U,count:j,quality:q,transparent:se,modelKeyOverride:ne="",forceOverwrite:re=!1,extraRefInputs:De=[],onDoneStatus:He=null})=>{let{nodes:ye,edges:Ce}=I.current,je=u||w,de=je?Xr(je,ye,Ce):{upstream:[],textInputs:[],imageInputs:[],configNode:null},Ae=!re&&u&&Yr(u)?u:w,Ft=Ae===u?null:u,or=C||de.configNode?.ratio||Ye,Qr=U||de.configNode?.resolution||O,Ts=Math.max(1,Number(j??de.configNode?.count??Qe)||1),$s=ne||u?.modelKey||de.configNode?.modelKey||Ie||n?.modelKey,Ar=wn(t,$s)||en(t,"image")[0]||null;if(!Ar){He?.("idle"),p?.("\u6CA1\u6709\u53EF\u7528\u7684\u751F\u56FE\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A\u652F\u6301\u751F\u56FE\u7684\u6E20\u9053","error");return}let Da=Wr(l,de.textInputs,de.upstream),Ir=String(l||"").trim()||Da,Pa=new AbortController;Le.current?.abort(),Le.current=Pa,dt(!0);let Er=Ft?.id||"";if(Ft)fe(Qt=>({nodes:Qt.nodes.map(Ct=>Ct.id===Ft.id?{...Ct,status:"running",error:"",prompt:Ir,ratio:or,resolution:Qr,startedAt:Date.now()}:Ct)}));else{let Qt=K.current,Ct=Tn(or),xn=Ae?{x:Ae.x+Ae.w+96,y:Ae.y}:{x:(window.innerWidth/2-Qt.tx)/Qt.s-Ct.w/2,y:(window.innerHeight/2-Qt.ty)/Qt.s-Ct.h/2},ln={...ft("image",{x:xn.x+Ct.w/2,y:xn.y+Ct.h/2},{prompt:Ir,ratio:or,resolution:Qr}),...Ct,x:Math.round(xn.x),y:Math.round(xn.y),status:"running",startedAt:Date.now(),prompt:Ir};Er=ln.id;let Zr=Ae?{id:Ee("e"),from:Ae.id,to:ln.id}:null;fe(ir=>({nodes:[...ir.nodes,ln],edges:Zr?[...ir.edges,Zr]:ir.edges})),te([ln.id])}try{let Qt=We&&We.custom&&We.ratio===or?`${We.w}x${We.h}`:"",Ct=on({resolution:Qr,ratio:or,customSize:Qt,align16:Be}),xn=[];if(Ae&&Ae.type==="image"&&Yr(Ae)){let At=Et(Ae);xn.push({storageKey:At?.storageKey||Ae.storageKey||"",url:At?.url||Ae.src||""})}xn.push(...de.imageInputs,...De,...mt);let ln=new Set,Zr=xn.filter(At=>{let Qn=At?.storageKey||At?.url||"";return!Qn||ln.has(Qn)?!1:(ln.add(Qn),!0)}),ir=(await Promise.all(Zr.map(Fn))).filter(Boolean),fo={count:Ts,ratio:or,resolution:Qr,size:Ct,quality:q,background:se?"transparent":void 0,outputFormat:se?"png":void 0,align16:Be},zr;ir.length?zr=await Un({capability:"image-edit",channel:Ar.channel,model:Ar.model.id,prompt:Da,params:{...fo,imageDataUrls:ir},signal:Pa.signal}):zr=await Un({capability:"image",channel:Ar.channel,model:Ar.model.id,prompt:Da,params:fo,signal:Pa.signal});let po=zr.items||[];if(!po.length){He?.("failed"),p?.("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247","error");return}let Rr=po.map(At=>dn({storageKey:At.storageKey,width:At.width,height:At.height,bytes:At.bytes,mimeType:At.mimeType,prompt:Ir,url:At.url,degraded:At.degraded})),uo=Rr[0];fe(At=>({nodes:At.nodes.map(Qn=>Qn.id===Er?{...Qn,status:"done",error:"",startedAt:0,images:Rr,primaryImageId:uo.id,storageKey:uo.storageKey,prompt:Ir}:Qn)})),te([Er]),He?.("idle"),st(""),p?.(Rr.length>1?`\u5DF2\u751F\u6210 ${Rr.length} \u5F20`:"\u751F\u6210\u5B8C\u6210"),zr.short>0&&p?.(`\u4E0A\u6E38\u5C11\u7ED9\u4E86 ${zr.short} \u5F20`,"error")}catch(Qt){let Ct=Nn(Qt);Ct?p?.("\u5DF2\u53D6\u6D88"):p?.(Qt.message||"\u751F\u6210\u5931\u8D25","error"),He?.(Ct?"idle":"failed"),Er&&fe(xn=>({nodes:xn.nodes.map(ln=>ln.id===Er?{...ln,status:"failed",error:Ct?"\u5DF2\u53D6\u6D88":Qt.message||"\u751F\u6210\u5931\u8D25",startedAt:0}:ln)}))}finally{dt(!1)}},cn=async l=>{if(!l)return;let{nodes:u,edges:w}=I.current,C=Xr(l,u,w),U=(l.prompt||"").trim(),j=l.mode||"image";if(!U&&!C.textInputs.length&&!C.imageInputs.length){p?.("\u5148\u8FDE\u63A5\u4E0A\u6E38\u6587\u672C/\u56FE\u7247\u8282\u70B9\uFF0C\u6216\u5728\u914D\u7F6E\u8282\u70B9\u91CC\u8F93\u5165\u63D0\u793A\u8BCD","error");return}let q=se=>fe(ne=>({nodes:ne.nodes.map(re=>re.id===l.id?{...re,status:se}:re)}));if(q("running"),j==="text"){await Kt({node:null,rawText:U,sourceParent:l,modelOverride:l.modelKey||""}),q("idle");return}if(j==="video"){let se={x:l.x+l.w+96,y:l.y},ne=Wr(U,C.textInputs,C.upstream),re=ft("video",{x:se.x+120,y:se.y+80},{prompt:ne,modelKey:l.modelKey||""});re.x=se.x,re.y=se.y;let De={id:Ee("e"),from:l.id,to:re.id};fe(He=>({nodes:[...He.nodes,re],edges:[...He.edges,De]})),te([re.id]),await S(re),q("idle");return}if(j==="audio"){q("idle"),p?.("\u4E0A\u6E38\u6E20\u9053\u6682\u672A\u63D0\u4F9B\u97F3\u9891\u751F\u6210\u63A5\u53E3","error");return}await Nr({text:U,sourceParent:l,ratio:l.ratio||Ye,resolution:l.resolution||O,count:Math.max(1,Number(l.count)||1),quality:le,transparent:we,modelKeyOverride:l.modelKey||"",extraRefInputs:C.imageInputs,onDoneStatus:q})},qr=()=>{let l=So(Tt,ue);l&&(fe(u=>({nodes:[l,...u.nodes]})),te([l.id]))},Mr=()=>{let l=new Set(ue);l.size&&(fe(u=>{let w=u.nodes.filter(U=>l.has(U.id)&&U.type!=="group"),C=u.nodes.filter(U=>!l.has(U.id));return so(w,C),{nodes:C,edges:u.edges.filter(U=>!l.has(U.from)&&!l.has(U.to))}}),te([]))},Hn=x.default.useRef(null);Hn.current||(Hn.current={nodes:[],edges:[]});let Ia=()=>{let l=Tt.filter(C=>ue.includes(C.id));if(!l.length)return null;let u=new Set(l.map(C=>C.id)),w=Nt.filter(C=>u.has(C.from)||u.has(C.to));return{nodes:l.map(C=>({...C})),edges:w.map(C=>({...C}))}},Jr=()=>{let l=Ia();l&&(Hn.current=l,p?.(`\u5DF2\u590D\u5236 ${l.nodes.length} \u4E2A\u8282\u70B9`))},ar=()=>{let l=Hn.current;if(!l?.nodes?.length)return;let u={},w=$.cam.current,C=Math.min(...l.nodes.map(de=>de.x)),U=Math.min(...l.nodes.map(de=>de.y)),j=Math.max(...l.nodes.map(de=>de.x+de.w)),q=Math.max(...l.nodes.map(de=>de.y+de.h)),se=(C+j)/2,ne=(U+q)/2,re=(window.innerWidth/2-w.tx)/w.ts,De=(window.innerHeight/2-w.ty)/w.ts,He=Math.round(re-se),ye=Math.round(De-ne),Ce=l.nodes.map(de=>{let Ae=Ee(de.type[0]);return u[de.id]=Ae,{...de,id:Ae,x:de.x+He,y:de.y+ye,status:"idle"}}),je=l.edges.filter(de=>u[de.from]&&u[de.to]).map(de=>({id:Ee("e"),from:u[de.from],to:u[de.to]}));fe(de=>({nodes:[...de.nodes,...Ce],edges:[...de.edges,...je]})),te(Ce.map(de=>de.id)),p?.(`\u5DF2\u7C98\u8D34 ${Ce.length} \u4E2A\u8282\u70B9`)},Ea=()=>{let l=Tt.filter(U=>ue.includes(U.id));if(!l.length)return;let u={},w=l.map(U=>{let j=Ee(U.type[0]);return u[U.id]=j,{...U,id:j,x:U.x+40,y:U.y+40,status:"idle"}}),C=Nt.filter(U=>u[U.from]&&u[U.to]).map(U=>({id:Ee("e"),from:u[U.from],to:u[U.to]}));fe(U=>({nodes:[...U.nodes,...w],edges:[...U.edges,...C]})),te(w.map(U=>U.id))},za=async(l,u)=>{if(!u)return;let C=Et(u)?.storageKey||u.storageKey;if(!C){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}let U=await ht(C);if(!U){p?.("\u56FE\u7247\u6570\u636E\u8BFB\u4E0D\u51FA\u6765\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406","error");return}G({kind:l,nodeId:u.id,src:U})},Ta=async l=>{let u=N;if(G(null),!u||!l)return;let w=Tt.find(ne=>ne.id===u.nodeId);if(Array.isArray(l)){let ne=[],re=Math.max(...l.map(ye=>ye.column))+1,De=24;l.forEach((ye,Ce)=>{let je=Ce%re,de=Math.floor(Ce/re),Ae=ft("image",{x:0,y:0},{ratio:w?.ratio||"1:1"});Ae.x=(w?w.x+w.w+80:200)+je*(Ae.w+De),Ae.y=(w?w.y:200)+de*(Ae.h+De),Ae.prompt=w?.prompt||"",Ae.status="done",Ae.pending=ye.blob,ne.push(Ae)}),await Promise.all(ne.map(async ye=>{let Ce=wt("image");await Bt(Ce,ye.pending,{mimeType:ye.pending.type,source:"split"});let je=dn({storageKey:Ce,width:0,height:0,bytes:ye.pending.size,mimeType:ye.pending.type,prompt:ye.prompt});delete ye.pending,ye.images=[je],ye.primaryImageId=je.id,ye.storageKey=Ce}));let He=w?ne.map(ye=>({id:Ee("e"),from:w.id,to:ye.id})):[];fe(ye=>({nodes:[...ye.nodes,...ne],edges:[...ye.edges,...He]})),te(ne.map(ye=>ye.id)),p?.(`\u5DF2\u5207\u51FA ${ne.length} \u4E2A\u8282\u70B9`);return}let C=async()=>{let re=(w?Et(w):null)?.storageKey||w?.storageKey;if(re){let De=await Lr(re).catch(()=>"");if(De)return De}if(u.src){let De=await(await fetch(u.src)).blob();return hr(De)}return""};if(l.kind==="angle"){let ne=wn(t,w?.modelKey||Ie||n?.modelKey)||en(t,"image")[0]||null;if(!ne){p?.("\u6CA1\u6709\u53EF\u7528\u7684\u751F\u56FE\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A","error");return}let re=await C().catch(()=>"");if(!re){p?.("\u539F\u56FE\u6570\u636E\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u91CD\u7ED8\u65B0\u89C6\u89D2","error");return}let De={...ft("image",{x:w?w.x+w.w+96:400,y:w?w.y:200},{ratio:w?.ratio||"1:1",resolution:w?.resolution||O}),status:"running",startedAt:Date.now(),prompt:l.prompt},He=w?{id:Ee("e"),from:w.id,to:De.id}:null;fe(ye=>({nodes:[...ye.nodes,De],edges:He?[...ye.edges,He]:ye.edges})),te([De.id]);try{let Ce=(await Un({capability:"image-edit",channel:ne.channel,model:ne.model.id,prompt:l.prompt,params:{imageDataUrls:[re],skipRefPrefix:!0,size:to(w),ratio:w?.ratio||"1:1",quality:le,background:we?"transparent":void 0,outputFormat:we?"png":void 0}})).items?.[0];if(!Ce)throw new Error("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247");let je=dn({storageKey:Ce.storageKey,width:Ce.width,height:Ce.height,bytes:Ce.bytes,mimeType:Ce.mimeType,url:Ce.url,degraded:Ce.degraded,prompt:l.prompt});fe(de=>({nodes:de.nodes.map(Ae=>Ae.id===De.id?{...Ae,status:"done",error:"",startedAt:0,images:[je],primaryImageId:je.id,storageKey:Ce.storageKey}:Ae)})),p?.("\u65B0\u89C6\u89D2\u751F\u6210\u5B8C\u6210")}catch(ye){fe(Ce=>({nodes:Ce.nodes.map(je=>je.id===De.id?{...je,status:"failed",error:ye.message||"\u591A\u89D2\u5EA6\u751F\u6210\u5931\u8D25",startedAt:0}:je)})),p?.(ye.message||"\u591A\u89D2\u5EA6\u751F\u6210\u5931\u8D25","error")}return}if(l.kind==="maskEdit"||l.dataUrl){let ne=wn(t,w?.modelKey||Ie||n?.modelKey)||en(t,"image")[0]||null;if(!ne){p?.("\u6CA1\u6709\u53EF\u7528\u4E8E\u7F16\u8F91\u7684\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A","error");return}try{let re=await C().catch(()=>""),De=re?[re,l.dataUrl]:[l.dataUrl],ye=(await Un({capability:"image-edit",channel:ne.channel,model:ne.model.id,prompt:l.prompt,params:{imageDataUrls:De,skipRefPrefix:!0,size:to(w),ratio:w?.ratio||"1:1",quality:le,background:we?"transparent":void 0,outputFormat:we?"png":void 0}})).items?.[0];if(!ye){p?.("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247","error");return}let Ce=l.rawPrompt||l.prompt,je=dn({storageKey:ye.storageKey,width:ye.width,height:ye.height,bytes:ye.bytes,mimeType:ye.mimeType,url:ye.url,degraded:ye.degraded,prompt:Ce}),de=ft("image",{x:w?w.x+w.w+96:400,y:w?w.y:200},{ratio:w?.ratio||"1:1",resolution:w?.resolution||O});de.prompt=Ce,de.status="done",de.images=[je],de.primaryImageId=je.id,de.storageKey=ye.storageKey;let Ae=w?{id:Ee("e"),from:w.id,to:de.id}:null;fe(Ft=>({nodes:[...Ft.nodes,de],edges:Ae?[...Ft.edges,Ae]:Ft.edges})),te([de.id]),p?.("\u5C40\u90E8\u4FEE\u6539\u5B8C\u6210")}catch(re){p?.(re.message||"\u5C40\u90E8\u4FEE\u6539\u5931\u8D25","error")}return}let U=wt("image");await Bt(U,l.blob,{mimeType:l.blob.type,source:"tool",width:l.width,height:l.height});let j=dn({storageKey:U,width:l.width,height:l.height,bytes:l.blob.size,mimeType:l.blob.type,prompt:w?.prompt||""}),q=ft("image",{x:w?w.x+w.w+96:400,y:w?w.y:200},{ratio:w?.ratio||"1:1"});q.prompt=w?.prompt||"",q.status="done",q.images=[j],q.primaryImageId=j.id,q.storageKey=U;let se=w?{id:Ee("e"),from:w.id,to:q.id}:null;fe(ne=>({nodes:[...ne.nodes,q],edges:se?[...ne.edges,se]:ne.edges})),te([q.id]),p?.("\u5DF2\u751F\u6210\u65B0\u8282\u70B9")},$a=ve&&ve.type==="image"&&(Et(ve)||ve.storageKey),h=en(t,"video"),S=async l=>{let{nodes:u,edges:w}=I.current,C=Xr(l,u,w),U=Wr(l.prompt||"",C.textInputs,C.upstream);if(!U){p?.("\u5148\u7ED9\u8FD9\u4E2A\u89C6\u9891\u8282\u70B9\u5199\u4E00\u53E5\u63D0\u793A\u8BCD","error");return}let j=wn(t,l.modelKey||C.configNode?.modelKey)||h[0]||null;if(!j){p?.("\u6CA1\u6709\u652F\u6301\u89C6\u9891\u7684\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A\u652F\u6301\u89C6\u9891\u7684\u6E20\u9053","error");return}fe(q=>({nodes:q.nodes.map(se=>se.id===l.id?{...se,status:"running",error:"",modelKey:j.key}:se)}));try{let q=new AbortController;oe.current?.abort(),oe.current=q;let se=await Un({capability:"video",channel:j.channel,model:j.model.id,prompt:U,params:{seconds:l.seconds||4},signal:q.signal,onTick:({status:ne,stage:re,taskId:De,note:He})=>{De&&fe(ye=>({nodes:ye.nodes.map(Ce=>Ce.id===l.id?{...Ce,videoTaskId:De}:Ce)})),He&&p?.(He)}});fe(ne=>({nodes:ne.nodes.map(re=>re.id===l.id?{...re,status:"idle",storageKey:se.storageKey,mimeType:se.mimeType,bytes:se.bytes}:re)})),p?.("\u89C6\u9891\u751F\u6210\u5B8C\u6210")}catch(q){Nn(q)?p?.("\u5DF2\u53D6\u6D88"):p?.(q.message||"\u89C6\u9891\u751F\u6210\u5931\u8D25","error"),fe(se=>({nodes:se.nodes.map(ne=>ne.id===l.id?{...ne,status:"failed",error:Nn(q)?"":q.message||"\u751F\u6210\u5931\u8D25"}:ne)}))}},F=async l=>{let u=l?.prompt||"";if(!u.trim()){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u63D0\u793A\u8BCD","error");return}try{await navigator.clipboard.writeText(u),p?.("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{let w=document.createElement("textarea");w.value=u,w.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(w),w.select();try{document.execCommand("copy"),p?.("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{p?.("\u590D\u5236\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u526A\u8D34\u677F","error")}finally{document.body.removeChild(w)}}},Q=async l=>{let w=Et(l)?.storageKey||l.storageKey;if(!w){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}let C=await Or(w).catch(()=>null);if(!C?.blob){p?.("\u56FE\u7247\u6570\u636E\u8BFB\u4E0D\u51FA\u6765\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406","error");return}let U=(C.blob.type?.split("/")[1]||"png").replace("jpeg","jpg"),j=URL.createObjectURL(C.blob),q=document.createElement("a");q.href=j,q.download=`${(l.prompt||"canvas-image").slice(0,40).replace(/[/\\:*?"<>|]/g,"")}.${U}`,q.click(),setTimeout(()=>URL.revokeObjectURL(j),3e3),p?.("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")},xe=async l=>{let w=Et(l)?.storageKey||l.storageKey;if(!w){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}if(!v){p?.("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u5B58\u4E3A\u8D44\u4EA7","error");return}v({id:Ee("a"),kind:"image",title:(l.prompt||"\u753B\u5E03\u56FE\u7247").slice(0,30),text:l.prompt||"",cover:w,tags:["\u753B\u5E03"],source:"\u753B\u5E03\u8282\u70B9",at:Date.now()}),p?.("\u5DF2\u5B58\u4E3A\u8D44\u4EA7")},be=l=>{l&&(fe(u=>{let w=u.nodes.filter(U=>U.id===l),C=u.nodes.filter(U=>U.id!==l);return so(w,C),{nodes:C,edges:u.edges.filter(U=>U.from!==l&&U.to!==l)}}),te(u=>u.filter(w=>w!==l)),p?.("\u5DF2\u5220\u9664\u8282\u70B9"))},Ve="\u4F60\u662F\u4E00\u4E2A\u56FE\u50CF\u63CF\u8FF0\u52A9\u624B\u3002\u770B\u5230\u56FE\u7247\u540E\uFF0C\u7528\u4E00\u6BB5\u4E2D\u6587\u5199\u6E05\u695A\u5B83\u7684\u753B\u9762\u5185\u5BB9\uFF1A\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u3001\u8272\u5F69\u3002",$e="\u8BF7\u63CF\u8FF0\u8FD9\u5F20\u56FE\u3002\u53EA\u7ED9\u63CF\u8FF0\u672C\u8EAB\uFF0C\u4E0D\u8981\u89E3\u91CA\u4F60\u5728\u505A\u4EC0\u4E48\uFF0C\u4E0D\u8981\u7528 Markdown \u6807\u9898\u6216\u5217\u8868\u3002",ot=async l=>{let w=Et(l)?.storageKey||l.storageKey;if(!w){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}let C=await br(w).catch(()=>null);if(!C?.blob){p?.("\u56FE\u7247\u6570\u636E\u8BFB\u4E0D\u51FA\u6765\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406","error");return}let U=await ra().catch(()=>null),j=yl(U,r);if(j&&Array.isArray(j.model.inputModalities)&&!j.model.inputModalities.includes("image")){p?.(`DSH \u5F53\u524D\u6A21\u578B\u300C${j.model.name||j.model.id}\u300D\u4E0D\u652F\u6301\u8BFB\u56FE\uFF0C\u8BF7\u5728 DSH \u91CC\u6362\u4E00\u4E2A\u652F\u6301\u56FE\u7247\u8F93\u5165\u7684\u6A21\u578B`,"error");return}let q=await Ei(C.blob,768);p?.("\u6B63\u5728\u53CD\u63A8\u63D0\u793A\u8BCD\u2026");try{let se=await Pr({messages:[{role:"user",text:$e}],images:[{mimeType:q.mimeType,data:q.data}],system:Ve,model:j?{provider:j.provider.id,model:j.model.id}:void 0,maxTokens:600}),ne=String(se||"").trim();if(!ne){p?.("\u6A21\u578B\u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u53EF\u80FD\u8FD9\u4E2A\u6A21\u578B\u4E0D\u652F\u6301\u8BFB\u56FE","error");return}fe(re=>{let De=re.nodes.map(ye=>ye.id===l.id?{...ye,prompt:ne}:ye),He=ft("text",{x:0,y:0});return He.x=l.x+l.w+96,He.y=l.y,He.text=ne,He.name="\u53CD\u63A8\u63D0\u793A\u8BCD",He.status="done",{nodes:[...De,He]}}),p?.("\u53CD\u63A8\u5B8C\u6210\uFF0C\u5DF2\u5199\u5165\u63D0\u793A\u8BCD\u5E76\u65B0\u5EFA\u6587\u672C\u8282\u70B9")}catch(se){Nn(se)?p?.("\u5DF2\u53D6\u6D88"):p?.(se.message||"\u53CD\u63A8\u5931\u8D25","error")}},ut=l=>{let u=document.createElement("input");u.type="file",u.accept="image/*",u.onchange=async()=>{let w=u.files?.[0];if(w){if(!/^image\//.test(w.type)){p?.("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6","error");return}try{let C=wt("image");await Bt(C,w,{mimeType:w.type,source:"replace"});let U=await wr(w).catch(()=>({width:0,height:0})),j=dn({storageKey:C,width:U.width,height:U.height,bytes:w.size,mimeType:w.type,prompt:l.prompt||""}),q=!1;fe(se=>se.nodes.find(re=>re.id===l.id)?(q=!0,{nodes:se.nodes.map(re=>re.id===l.id?{...re,images:[j],primaryImageId:j.id,storageKey:C,status:"idle",error:""}:re)}):{}),q&&p?.("\u5DF2\u66FF\u6362\u56FE\u7247")}catch(C){p?.(C.message||"\u66FF\u6362\u5931\u8D25","error")}}},u.click()},yn=l=>{let u=l.locked!==!1;fe(w=>({nodes:w.nodes.map(C=>C.id===l.id?{...C,locked:!u}:C)})),p?.(u?"\u5DF2\u6539\u4E3A\u81EA\u7531\u6BD4\u4F8B":"\u5DF2\u6539\u4E3A\u7B49\u6BD4\u7F29\u653E")},Cr=l=>{let u=Et(l);Ot({id:l.id,title:l.name||l.prompt?.slice(0,24)||"\u56FE\u7247",width:u?.width||Math.round(l.w),height:u?.height||Math.round(l.h),bytes:u?.bytes||0,mimeType:u?.mimeType||"",storageKey:u?.storageKey||l.storageKey||"",count:l.images?.length||0,locked:l.locked!==!1,createdAt:u?.createdAt||0,x:Math.round(l.x),y:Math.round(l.y),w:Math.round(l.w),h:Math.round(l.h)})},xs=(l,u)=>{switch(l){case"copyPrompt":F(u);break;case"reversePrompt":ot(u);break;case"sendToStudio":s?.(u);break;case"replace":ut(u);break;case"resize":yn(u);break;case"info":Cr(u);break;case"crop":case"split":case"upscale":case"angle":case"maskEdit":za(l,u);break;case"saveAsset":xe(u);break;case"download":Q(u);break;case"delete":be(u.id);break;default:break}},ws=l=>{fe(u=>({nodes:u.nodes.filter(w=>w.id!==l)})),te([]),p?.("\u5DF2\u53D6\u6D88\u5206\u7EC4\uFF0C\u8282\u70B9\u4FDD\u7559")},ks=l=>{fe(u=>{let w=u.nodes.find(q=>q.id===l),C=new Set([l,...w?.childIds||[]]),U=u.nodes.filter(q=>C.has(q.id)),j=u.nodes.filter(q=>!C.has(q.id));return so(U,j),{nodes:j,edges:u.edges.filter(q=>!C.has(q.from)&&!C.has(q.to))}}),te([]),p?.("\u5DF2\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9")},Ss=()=>te(Tt.map(l=>l.id)),Ns=l=>{let u=I.current.nodes.find(w=>w.id===l);if(u){if(u.type==="config"){cn(u);return}if(u.type==="video"){S(u);return}if(u.type==="audio"){p?.("\u97F3\u9891\u8282\u70B9\u6682\u4E0D\u652F\u6301\u751F\u6210","error");return}if(u.type==="text"){Kt({node:u,rawText:u.prompt||u.text||Ge.get().trim()});return}if(u.type==="image"){let w=(u.prompt||"").trim()||Ge.get().trim();if(!w){p?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD\u518D\u751F\u6210","error");return}Nr({text:w,target:u,ratio:u.ratio||Ye,resolution:u.resolution||O,count:Qe,quality:le,transparent:we,forceOverwrite:!Yr(u)})}}},Ms=()=>{let l=new Set(ue),u=I.current.nodes.filter(C=>l.has(C.id)&&C.type==="group").map(C=>C.id);if(!u.length)return;let w=new Set(u);fe(C=>({nodes:C.nodes.filter(U=>!w.has(U.id))})),te([]),p?.("\u5DF2\u53D6\u6D88\u5206\u7EC4\uFF0C\u8282\u70B9\u4FDD\u7559")},Cs=(l,u)=>{let w=l==="config"?{modelKey:Ie||V[0]?.key||"",ratio:Ye,count:Qe,resolution:O}:l==="audio"?{name:"\u6682\u4E0D\u652F\u6301\u751F\u6210"}:{},C=ft(l,u,w);return fe(U=>({nodes:[...U.nodes,C]})),te([C.id]),p?.(l==="audio"?"\u5DF2\u65B0\u5EFA\u97F3\u9891\u8282\u70B9\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09":`\u5DF2\u65B0\u5EFA${Ht[l]}\u8282\u70B9`),C},As=(l,u,w)=>{let C=I.current.nodes.find(re=>re.id===l);if(!C)return;let U=u==="config"?{modelKey:Ie||V[0]?.key||"",ratio:Ye,count:Qe,resolution:O}:u==="audio"?{name:"\u6682\u4E0D\u652F\u6301\u751F\u6210"}:{},j=ft(u,w,U),q=!(C.type==="config"&&j.type==="config")&&j.type!=="group",se=q?{id:Ee("e"),from:l,to:j.id}:null;fe(re=>({nodes:[...re.nodes,j],edges:se?[...re.edges,se]:re.edges})),te([j.id]);let ne=u==="audio"?"\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09":"";p?.(q?`\u5DF2\u65B0\u5EFA\u5E76\u8FDE\u63A5${Ht[u]}\u8282\u70B9${ne}`:`\u5DF2\u65B0\u5EFA${Ht[u]}\u8282\u70B9${ne}`)},Is=async(l,u,w)=>{if(l==="setPrimary"&&u){fe(C=>({nodes:C.nodes.map(U=>U.id===u.id?To(U,w):U)})),p?.("\u5DF2\u8BBE\u4E3A\u4E3B\u56FE");return}if(l==="removeItem"&&u){fe(C=>({nodes:C.nodes.map(U=>U.id===u.id?$o(U,w):U)})),p?.("\u5DF2\u79FB\u9664\u56FE\u7247");return}if(l==="explode"&&u){let C=Do(u,{makeId:()=>Ee("i")});if(!C.length)return;fe(U=>({nodes:[...U.nodes.filter(j=>j.id!==u.id),...C],edges:U.edges.filter(j=>j.from!==u.id&&j.to!==u.id)})),te(C.map(U=>U.id)),p?.(`\u5DF2\u62C6\u5206\u4E3A ${C.length} \u4E2A\u72EC\u7ACB\u8282\u70B9`);return}if(l==="duplicateItem"&&u){let C=(u.images||[]).find(ne=>ne.id===w);if(!C)return;let U=C.width&&C.height?C.width/C.height:u.w/Math.max(1,u.h-28),j=Math.max(180,Math.min(280,Math.round(u.w||240))),q=Math.round(j/Math.max(.25,U))+28,se={...ft("image",{x:u.x+u.w+32,y:u.y},{ratio:u.ratio||"1:1",w:j,h:q}),x:Math.round(u.x+u.w+32),y:Math.round(u.y),prompt:C.prompt||u.prompt||"",status:"done",images:[{...C}],primaryImageId:C.id,storageKey:C.storageKey||""};fe(ne=>({nodes:[...ne.nodes,se]})),te([se.id]),p?.("\u5DF2\u62C6\u51FA\u4E3A\u72EC\u7ACB\u8282\u70B9");return}if(l==="downloadItem"&&u){let C=(u.images||[]).find(re=>re.id===w),U=C?.storageKey;if(!U){p?.("\u8FD9\u5F20\u56FE\u7247\u6682\u65E0\u672C\u5730\u526F\u672C","error");return}let j=await Or(U).catch(()=>null);if(!j?.blob){p?.("\u56FE\u7247\u8BFB\u53D6\u5931\u8D25","error");return}let q=(j.blob.type?.split("/")[1]||"png").replace("jpeg","jpg"),se=URL.createObjectURL(j.blob),ne=document.createElement("a");ne.href=se,ne.download=`${(C.prompt||u.prompt||"image").slice(0,32).replace(/[/\\:*?"<>|]/g,"")}.${q}`,ne.click(),setTimeout(()=>URL.revokeObjectURL(se),3e3),p?.("\u5DF2\u5F00\u59CB\u4E0B\u8F7D");return}if(l==="merge"&&Array.isArray(u)){let{nodes:C}=I.current,U=new Set(u),j=C.filter(re=>U.has(re.id)&&re.type==="image"&&Yr(re));if(j.length<2){p?.("\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u6709\u56FE\u7684\u56FE\u7247\u8282\u70B9","error");return}let q=Po(j,{makeId:()=>Ee("i")});if(!q)return;let se=new Set(j.map(re=>re.id)),ne={...q,w:Math.min(280,Math.max(200,Math.round(j[0].w||240))),h:Math.min(380,Math.max(200,Math.round(j[0].h||268)))};fe(re=>({nodes:[...re.nodes.filter(De=>!se.has(De.id)),ne],edges:re.edges.filter(De=>!se.has(De.from)&&!se.has(De.to))})),te([ne.id]),p?.(`\u5DF2\u5408\u5E76\u4E3A ${ne.images.length} \u5F20\u6279\u91CF\u56FE\u7EC4`)}},Es=async(l,u)=>{let w=[...l||[]].filter(q=>q?.type?.startsWith("image/"));if(!w.length)return;let C=[],U=Math.round(u?.x??200),j=Math.round(u?.y??200);for(let q of w){let se=await $n(q).catch(()=>({width:0,height:0})),ne=wt("image");await Bt(ne,q,{mimeType:q.type,source:"drop",width:se.width,height:se.height});let re=se.width&&se.height?se.width/se.height:1,De=240,He=Math.round(De/Math.max(.25,Math.min(4,re)))+28,ye=dn({storageKey:ne,width:se.width,height:se.height,bytes:q.size,mimeType:q.type,prompt:""}),Ce=ft("image",{x:U,y:j},{w:De,h:He,name:q.name||""});Ce.x=U,Ce.y=j,Ce.status="done",Ce.images=[ye],Ce.primaryImageId=ye.id,Ce.storageKey=ne,C.push(Ce),U+=De+24}C.length&&(fe(q=>({nodes:[...q.nodes,...C]})),te(C.map(q=>q.id)),p?.(`\u5DF2\u5BFC\u5165 ${C.length} \u5F20\u56FE\u7247\u5230\u753B\u5E03`))},Je=x.default.useRef(null);Je.current={duplicate:Ea,wrap:qr,ungroupSelected:Ms,removeSelection:Mr,removeEdge:it,addNode:jn,selectAll:Ss,fit:()=>$.fit?.(),generateNode:Ns,ungroup:ws,deleteGroupDeep:ks,undo:Mt,redo:En,copy:Jr,paste:ar,setTool:Te,setSelection:te,updateNode:Jt,runConfigNode:cn,handleBatchAction:Is,createFromConnection:As,createAtWorld:Cs,handleDropFiles:Es,handleNodeAction:xs,onMove:hn,onResize:vn,onConnect:at,onRemoveEdge:it,onOpenNode:l=>{te([l.id]),st(l.prompt||l.text||"")},onGesture:l=>{l==="start"?z.pause():z.resume()}};let zs=x.default.useMemo(()=>({duplicate:()=>Je.current.duplicate(),wrap:()=>Je.current.wrap(),ungroupSelected:()=>Je.current.ungroupSelected(),removeSelection:()=>Je.current.removeSelection(),removeEdge:l=>Je.current.removeEdge(l),addNode:l=>Je.current.addNode(l),selectAll:()=>Je.current.selectAll(),fit:()=>Je.current.fit(),generateNode:l=>Je.current.generateNode(l),ungroup:l=>Je.current.ungroup(l),deleteGroupDeep:l=>Je.current.deleteGroupDeep(l)}),[]),jt=x.default.useMemo(()=>({onMove:(l,u,w)=>Je.current.onMove(l,u,w),onResize:(l,u,w)=>Je.current.onResize(l,u,w),onConnect:(l,u)=>Je.current.onConnect(l,u),onRemoveEdge:l=>Je.current.onRemoveEdge(l),onNodeAction:(l,u)=>Je.current.handleNodeAction(l,u),onGesture:l=>Je.current.onGesture(l),onOpenNode:l=>Je.current.onOpenNode(l),onUpdateNode:(l,u)=>Je.current.updateNode(l,u),onRunConfig:l=>Je.current.runConfigNode(l),onBatchAction:(l,u,w)=>Je.current.handleBatchAction(l,u,w),onCreateFromConnection:(l,u,w)=>Je.current.createFromConnection(l,u,w),onCreateAt:(l,u)=>Je.current.createAtWorld(l,u),onDropFiles:(l,u)=>Je.current.handleDropFiles(l,u)}),[]);return x.default.useEffect(()=>{let l=u=>{let w=document.activeElement;if(w&&(/input|textarea|select/i.test(w.tagName)||w.isContentEditable))return;let C=u.clipboardData;if(!C)return;let U=[];for(let se of Array.from(C.items||[]))if(se.kind==="file"&&se.type.startsWith("image/")){let ne=se.getAsFile();ne&&U.push(ne)}if(!U.length)for(let se of Array.from(C.files||[]))se.type?.startsWith("image/")&&U.push(se);if(!U.length)return;u.preventDefault();let j=K.current,q={x:(window.innerWidth/2-j.tx)/j.s-120,y:(window.innerHeight/2-j.ty)/j.s-120};Je.current?.handleDropFiles(U,q)};return window.addEventListener("paste",l),()=>window.removeEventListener("paste",l)},[K]),x.default.useEffect(()=>{let l=u=>{if(/input|textarea|select/i.test(u.target.tagName))return;let w=u.nativeEvent||u;if(u.isComposing||w.isComposing||u.keyCode===229||u.which===229||w.keyCode===229||w.which===229||u.target.isContentEditable)return;let C=Je.current;if(!C)return;let U=u.metaKey||u.ctrlKey,j=u.key.toLowerCase();if(U){if(j==="z"){u.preventDefault(),u.shiftKey?C.redo():C.undo();return}if(j==="y"){u.preventDefault(),C.redo();return}if(j==="d"){u.preventDefault(),C.duplicate();return}if(j==="g"){u.preventDefault(),u.shiftKey?C.ungroup():C.wrap();return}if(j==="a"){u.preventDefault(),C.selectAll();return}if(j==="c"){u.preventDefault(),C.copy();return}if(j==="v"){u.preventDefault(),C.paste();return}return}if(u.key==="Delete"||u.key==="Backspace"){u.preventDefault(),C.removeSelection();return}if(u.key==="Escape"){C.setSelection([]);return}j==="v"&&C.setTool("select"),j==="h"&&C.setTool("pan"),j==="t"&&C.addNode("text"),j==="i"&&C.addNode("image"),j==="a"&&C.addNode("audio"),j==="c"&&C.addNode("config"),j==="g"&&C.addNode("group")};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),x.default.createElement("div",{className:"cf-editor"},N?x.default.createElement(Ki,{kind:N.kind,src:N.src,onClose:()=>G(null),onDone:Ta}):null,bt?x.default.createElement(bl,{info:bt,onClose:()=>Ot(null),say:p}):null,L?x.default.createElement(Na,{prompts:o,onClose:()=>Z(!1),onPick:async(l,u={})=>{if(Z(!1),st(l.text||l.prompt||""),u.withRefs&&l.referenceImageUrls?.length){p?.(`\u5DF2\u586B\u5165\u300C${l.title||"\u63D0\u793A\u8BCD"}\u300D\uFF0C\u6B63\u5728\u52A0\u8F7D ${l.referenceImageUrls.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let w=await nr(l.referenceImageUrls,{max:4});w.length?(Re(C=>[...C,...w.map(U=>({id:U.id,name:U.name,url:U.url,storageKey:U.storageKey}))]),p?.(`\u5DF2\u52A0\u5165 ${w.length} \u5F20\u63D0\u793A\u8BCD\u914D\u5957\u53C2\u8003\u56FE`)):p?.(`\u5DF2\u586B\u5165\u300C${l.title||"\u63D0\u793A\u8BCD"}\u300D\uFF08\u914D\u5957\u53C2\u8003\u56FE\u52A0\u8F7D\u5931\u8D25\uFF09`)}else p?.(`\u5DF2\u586B\u5165\u300C${l.title||"\u63D0\u793A\u8BCD"}\u300D`)}}):null,x.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},x.default.createElement(Ke,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:m}),x.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),wl.map((l,u)=>l.sep?x.default.createElement("span",{key:`s${u}`,className:"cf-rail-sep","aria-hidden":"true"}):x.default.createElement("button",{key:l.id,type:"button",className:`cf-rail-btn${ee===l.id?" is-on":""}`,title:`${l.label}  ${l.key}`,"aria-label":l.label,"aria-pressed":ee===l.id,disabled:l.action==="undo"?!H.canUndo:l.action==="redo"?!H.canRedo:!1,onClick:()=>{if(l.action==="undo"){Mt();return}if(l.action==="redo"){En();return}if(l.id==="focus"){$.fit?.();return}if(["text","image","video","audio","config","group"].includes(l.id)){jn(l.id);return}Te(l.id)}},x.default.createElement(he,{name:l.icon,size:18})))),x.default.createElement("div",{className:"cf-editor-main"},x.default.createElement("div",{className:"cf-canvas-bar"},x.default.createElement("span",{className:"cf-canvas-bar-name",title:e.name||"\u672A\u547D\u540D\u753B\u5E03"},e.name||"\u672A\u547D\u540D\u753B\u5E03"),x.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},Ba.map(l=>x.default.createElement("button",{key:l.id,type:"button",className:(e.grid||"dots")===l.id?"is-on":"",onClick:()=>d({grid:l.id})},l.label))),A?x.default.createElement("button",{type:"button",className:"cf-icon-btn",title:`\u5207\u6362\u5916\u89C2\uFF08\u5F53\u524D\uFF1A${T==="dark"?"\u6697\u9ED1":T==="light"?"\u660E\u4EAE":"\u8DDF\u968F\u7CFB\u7EDF"}\uFF09`,"aria-label":"\u5207\u6362\u5916\u89C2\u4E3B\u9898",onClick:()=>{let l=["system","light","dark"];A(l[(l.indexOf(T)+1)%l.length])}},x.default.createElement(he,{name:T==="dark"?"moon":"sun",size:14})):null),x.default.createElement(kl,{nodes:Tt,edges:Nt,selection:ue,channels:t,grid:e.grid||"dots",tool:ee,minimap:!0,camera:Cn,camApi:$,showHint:!un.length,onSelection:te,onMove:jt.onMove,onResize:jt.onResize,onNodeAction:jt.onNodeAction,showToolbarLabels:P,onGesture:jt.onGesture,onConnect:jt.onConnect,onRemoveEdge:jt.onRemoveEdge,onOpenNode:jt.onOpenNode,onUpdateNode:jt.onUpdateNode,onRunConfig:jt.onRunConfig,onBatchAction:jt.onBatchAction,onCreateFromConnection:jt.onCreateFromConnection,onCreateAt:jt.onCreateAt,onDropFiles:jt.onDropFiles,actions:zs}),f?x.default.createElement("div",{className:`cf-composer${Ne?" is-menu":""}`},mt.length?x.default.createElement("div",{className:"cf-composer-refs"},mt.map(l=>x.default.createElement("span",{key:l.id,className:"cf-ref-thumb"},x.default.createElement("img",{src:l.url,alt:l.name}),x.default.createElement("button",{type:"button",className:"cf-ref-x",onClick:()=>pt(l.id),"aria-label":`\u79FB\u9664 ${l.name}`},"\xD7")))):null,x.default.createElement(Sl,{draftStore:Ge,hasRefs:mt.length>0,placeholder:ve?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":ve?.type==="text"?"\u63CF\u8FF0\u8981\u751F\u6210\u7684\u6587\u5B57\u5185\u5BB9":ve?.type==="audio"?"\u97F3\u9891\u8282\u70B9\u6682\u4E0D\u652F\u6301\u751F\u6210":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onPaste:k,onSubmit:bn}),x.default.createElement("div",{className:"cf-composer-bar",ref:An},x.default.createElement("div",{className:"cf-composer-left"},x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Oe(Ne==="ref"?null:"ref"),"aria-expanded":Ne==="ref","aria-haspopup":"menu"},x.default.createElement(he,{name:"plus",size:15}),"\u53C2\u8003",mt.length+$t.length?x.default.createElement("span",{className:"cf-bar-badge"},mt.length+$t.length):null),Ne==="ref"?x.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},x.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),$t.length?$t.map(l=>x.default.createElement("button",{key:l.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{st(u=>`${u}${u&&!u.endsWith(" ")?" ":""}@${Ht[l.type]}${l.name?`:${l.name}`:""} `),Oe(null)}},x.default.createElement(he,{name:l.type==="image"?"image":l.type==="text"?"text":"audio",size:14}),x.default.createElement("span",{className:"cf-menu-label"},l.name||(l.prompt||l.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):x.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:_n},x.default.createElement(he,{name:"upload",size:14}),x.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),x.default.createElement("input",{ref:Gt,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:mn})):null),x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>{Ne!=="ratio"&&qt(),Oe(Ne==="ratio"?null:"ratio")},"aria-expanded":Ne==="ratio","aria-haspopup":"menu"},x.default.createElement(he,{name:"frame",size:15}),Ye),Ne==="ratio"?x.default.createElement("div",{className:"cf-menu cf-menu--up cf-size-panel",role:"menu","aria-label":"\u5C3A\u5BF8"},x.default.createElement("div",{className:"cf-size-head"},x.default.createElement("span",{className:"cf-size-title"},"\u5C3A\u5BF8"),x.default.createElement("label",{className:"cf-size-align"},x.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),x.default.createElement("input",{type:"checkbox",checked:Be,onChange:l=>nt(l.target.checked)}))),x.default.createElement("div",{className:"cf-size-row"},x.default.createElement("input",{className:"cf-input cf-input--num cf-px",value:rt,"aria-label":"\u5BBD",inputMode:"numeric",onChange:l=>xt("w",l.target.value)}),x.default.createElement("button",{type:"button",className:`cf-size-link${Xe?" is-on":""}`,"aria-pressed":Xe,title:Xe?"\u5DF2\u9501\u5B9A\u6BD4\u4F8B":"\u672A\u9501\u5B9A\u6BD4\u4F8B","aria-label":Xe?"\u89E3\u9501\u6BD4\u4F8B":"\u9501\u5B9A\u6BD4\u4F8B",onClick:Pt},x.default.createElement(he,{name:"link",size:13})),x.default.createElement("input",{className:"cf-input cf-input--num cf-px",value:Fe,"aria-label":"\u9AD8",inputMode:"numeric",onChange:l=>xt("h",l.target.value)})),x.default.createElement("div",{className:"cf-size-chips"},zn.map(l=>x.default.createElement("button",{key:l.id,type:"button",className:`cf-size-chip${Ye===l.id?" is-on":""}`,role:"menuitem",onClick:()=>{gn(l.id),Oe(null)}},l.label))),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("div",{className:"cf-size-foot"},x.default.createElement("span",{className:"cf-size-hint"},rt&&Fe?`${rt} \xD7 ${Fe}`:"\u586B\u4E24\u4E2A\u8FB9\u957F"),x.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",disabled:!rt||!Fe,onClick:()=>{_t(),Oe(null)}},"\u5E94\u7528"))):null),x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Oe(Ne==="count"?null:"count"),"aria-expanded":Ne==="count","aria-haspopup":"menu"},Qe," \u5F20",x.default.createElement(he,{name:"chevron",size:12})),Ne==="count"?x.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},x.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(l=>x.default.createElement("button",{key:l,type:"button",className:`cf-menu-item${Qe===l?" is-on":""}`,role:"menuitem",onClick:()=>{D(l),Oe(null)}},l," \u5F20"))):null),x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Oe(Ne==="res"?null:"res"),"aria-expanded":Ne==="res","aria-haspopup":"menu","data-res":!0,title:`\u5206\u8FA8\u7387\uFF1A${O}`,"aria-label":`\u5206\u8FA8\u7387\uFF1A${O}`},x.default.createElement(he,{name:"resolution",size:15}),O),Ne==="res"?x.default.createElement("div",{className:"cf-menu cf-menu--up cf-size-panel",role:"menu","aria-label":"\u5206\u8FA8\u7387"},x.default.createElement("div",{className:"cf-size-head"},x.default.createElement("span",{className:"cf-size-title"},"\u5206\u8FA8\u7387"),x.default.createElement("span",{className:"cf-size-hint"},rt," \xD7 ",Fe)),x.default.createElement("div",{className:"cf-size-chips"},Xn.map(l=>x.default.createElement("button",{key:l,type:"button",className:`cf-size-chip${O===l?" is-on":""}`,role:"menuitem",onClick:()=>{qe(l),Oe(null)}},l))),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("div",{className:"cf-size-head"},x.default.createElement("span",{className:"cf-size-title"},"\u753B\u8D28")),x.default.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:4}},fr.map(l=>x.default.createElement("button",{key:l,type:"button",className:`cf-chip${le===l?" is-on":""}`,onClick:()=>Ue(l)},l))),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("label",{className:"cf-size-align",style:{justifyContent:"space-between"}},x.default.createElement("span",null,"\u900F\u660E\u80CC\u666F\uFF08PNG\uFF09"),x.default.createElement("input",{type:"checkbox",checked:we,onChange:l=>Me(l.target.checked)}))):null),x.default.createElement("button",{type:"button",className:"cf-icon-btn",title:"\u4ECE\u63D0\u793A\u8BCD\u5E93\u9009\u62E9","aria-label":"\u63D0\u793A\u8BCD\u5E93",onClick:()=>Z(!0)},x.default.createElement(he,{name:"book",size:15}))),x.default.createElement("div",{className:"cf-composer-right"},x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>Oe(Ne==="model"?null:"model"),"aria-expanded":Ne==="model","aria-haspopup":"menu"},x.default.createElement(he,{name:"bars",size:15}),x.default.createElement("span",{className:"cf-bar-label"},ge?ge.label:"\u9009\u62E9\u6A21\u578B"),x.default.createElement(he,{name:"chevron",size:12})),Ne==="model"?x.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},x.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),V.length?V.map(l=>x.default.createElement("button",{key:l.key,type:"button",className:`cf-menu-item${l.key===Ie?" is-on":""}`,role:"menuitem",onClick:()=>{ke(l.key),Oe(null)}},x.default.createElement("span",{className:"cf-menu-label"},l.label),x.default.createElement("span",{className:"cf-menu-meta"},l.channel.name||l.channel.protocol))):x.default.createElement("p",{className:"cf-menu-empty"},R)):null),un.length?x.default.createElement("span",{style:{display:"inline-flex",gap:2}},x.default.createElement(Ke,{name:"group",label:"\u5305\u6210\u7EC4",onClick:qr}),x.default.createElement(Ke,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:Mr})):null,x.default.createElement(Nl,{draftStore:Ge,textBusy:Jn,imgBusy:ce,onSubmit:bn,onStopText:()=>{Ut.current?.abort(),Vt(!1)},onStopImg:()=>{Le.current?.abort()}})))):null))}var y=Zt(require("react"),1);Gn();jr();Hr();function ss(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(2)} MB`:""}function Ml(e){return!e||e<0?"":e<1e3?`${e}ms`:`${(e/1e3).toFixed(1)}s`}function Cl({ratio:e}){let t=fn(e),n=12,r=t>=1?n:Math.max(5,Math.round(n*t)),o=t>=1?Math.max(5,Math.round(n/t)):n;return y.default.createElement("span",{className:"cf-aspect-box",style:{width:r,height:o},"aria-hidden":"true"})}function Vr({storageKey:e,url:t="",alt:n="",preferPreview:r=!0,className:o,style:a,onClick:i}){let c=e?r?Dn(e)||rn(e):rn(e):"",[s,f]=y.default.useState(()=>c||t||"");return y.default.useEffect(()=>{let d=!0;if(!e)return f(t||""),()=>{d=!1};let m=r?Dn(e)||rn(e):rn(e);return m&&f(m),r&&vr(e).then(p=>{d&&p&&f(p)}).catch(()=>{}),ht(e).then(p=>{d&&f(!r&&p?p:v=>v||p||t||"")}).catch(()=>{d&&t&&f(p=>p||t)}),()=>{d=!1}},[e,t,r]),s?y.default.createElement("img",{src:s,alt:n,className:o,style:a,loading:"lazy",decoding:"async",onClick:i}):null}function cs({channels:e,defaults:t,records:n=[],assets:r=[],prompts:o=[],prompt:a,onPrompt:i,onCreateRecord:c,onUpdateRecord:s,onDeleteRecords:f,onSaveAsset:d,onLookupPrompts:m,onSendToCanvas:p,initialRef:v,initialRefs:P,onConsumeRef:T,say:A}){let $=i,K=t?.ratio||"1:1",Y=t?.resolution||"\u81EA\u52A8",I=On(on({resolution:Y,ratio:K,align16:!0}))||{width:1024,height:1024},[L,Z]=y.default.useState(K),[ue,te]=y.default.useState(t?.quality||"\u81EA\u52A8"),[ee,Te]=y.default.useState(Y),[E,z]=y.default.useState(!!t?.transparent),[H,ae]=y.default.useState(t?.modelKey||""),[N,G]=y.default.useState(I.width),[oe,Le]=y.default.useState(I.height),[ce,dt]=y.default.useState(!0),[bt,Ot]=y.default.useState(Math.max(1,Math.min(10,t?.count||1))),[vt,Lt]=y.default.useState([]),[St,Ge]=y.default.useState(null),[st,Ye]=y.default.useState([]),[yt,Qe]=y.default.useState(!1),[D,O]=y.default.useState(!1),[ie,le]=y.default.useState(!1),[Ue,we]=y.default.useState(!1),[Me,Ie]=y.default.useState(null),[ke,Be]=y.default.useState(null),[nt,Xe]=y.default.useState({}),Wt=y.default.useRef(null),Ne=y.default.useRef(null),Oe=y.default.useRef(new Set),mt=en(e,"image"),Re=wn(e,H)||mt[0]||null,rt=y.default.useCallback((k,V,ge=ce)=>{let R=On(on({resolution:V,ratio:k,align16:ge}));R&&(G(R.width),Le(R.height))},[ce]),ct=k=>{Z(k),rt(k,ee,ce)},Fe=k=>{Te(k),rt(L,k,ce)};y.default.useEffect(()=>{let k=!0,V=Array.isArray(P)&&P.length?P:v?.storageKey?[{storageKey:v.storageKey,name:"\u6765\u81EA\u753B\u5E03\u7684\u56FE\u7247"}]:[];return V.length?(Promise.all(V.map(async(ge,R)=>{let Se=await ht(ge.storageKey).catch(()=>"");return Se?{id:Ee("ref"),name:ge.name||`\u53C2\u8003\u56FE ${R+1}`,storageKey:ge.storageKey,url:Se}:null})).then(ge=>{if(!k)return;let R=ge.filter(Boolean);R.length&&Ye(R),T?.()}).catch(()=>{T?.()}),()=>{k=!1}):()=>{k=!1}},[v?.storageKey,P]);let Ze=async k=>{let V=[...k||[]];if(!V.length)return;let ge=[];for(let R of V){if(!/^image\//.test(R.type)){A?.(`\u8DF3\u8FC7\u975E\u56FE\u7247\u6587\u4EF6\uFF1A${R.name}`,"error");continue}let Se=await $n(R).catch(()=>({width:0,height:0})),_e=wt("ref");await Bt(_e,R,{mimeType:R.type,source:"studio-ref",width:Se.width,height:Se.height}),ge.push({id:Ee("ref"),name:R.name||"\u53C2\u8003\u56FE",storageKey:_e,url:URL.createObjectURL(R)})}ge.length&&(Ye(R=>[...R,...ge]),A?.(`\u5DF2\u52A0\u5165 ${ge.length} \u5F20\u53C2\u8003\u56FE`))},zt=k=>{Ye(V=>{let ge=V.find(R=>R.id===k);return ge?.url?.startsWith("blob:")&&URL.revokeObjectURL(ge.url),V.filter(R=>R.id!==k)})},Cn=(k,V)=>{Ye(ge=>{let R=k+V;if(R<0||R>=ge.length)return ge;let Se=[...ge],[_e]=Se.splice(k,1);return Se.splice(R,0,_e),Se})},Sr=()=>{Ye(k=>(k.forEach(V=>{V.url?.startsWith("blob:")&&URL.revokeObjectURL(V.url)}),[]))},Jn=k=>{Ze(k.target.files),k.target.value=""},Vt=k=>{k.preventDefault(),Ze(k.dataTransfer?.files)},Ut=async()=>{try{let k=await navigator.clipboard.read(),V=[];for(let ge of k){let R=ge.types.find(_e=>_e.startsWith("image/"));if(!R)continue;let Se=await ge.getType(R);V.push(new File([Se],"\u526A\u8D34\u677F\u56FE\u7247.png",{type:R}))}if(!V.length){A?.("\u526A\u8D34\u677F\u91CC\u6CA1\u6709\u56FE\u7247","error");return}await Ze(V)}catch{A?.("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u526A\u8D34\u677F\uFF0C\u8BF7\u7528\u300C\u4E0A\u4F20\u300D","error")}},An=async k=>{let V=[];for(let ge of k||[]){if(ge.storageKey){let R=await Lr(ge.storageKey).catch(()=>"");if(R){V.push(R);continue}}if(ge.url?.startsWith("data:")){V.push(ge.url);continue}if(ge.url){let Se=await(await fetch(ge.url)).blob();V.push(await hr(Se))}}return V},Gt=(k,V)=>({index:k,status:"done",storageKey:V.storageKey||"",width:V.width||0,height:V.height||0,bytes:V.bytes||0,mimeType:V.mimeType||"image/png",degraded:!!V.degraded,url:V.degraded&&V.url||"",revisedPrompt:V.revisedPrompt||"",error:""}),Tt=()=>{Ge(null),$(""),Sr()},Nt=async k=>{if(!k)return;Ge(k.id),$(k.prompt||""),k.ratio&&Z(k.ratio),k.resolution&&Te(k.resolution),k.quality&&te(k.quality),typeof k.transparent=="boolean"&&z(k.transparent),k.count&&Ot(Math.max(1,Math.min(10,Number(k.count)||1))),k.modelKey&&ae(k.modelKey);let V=On(k.size);if(V&&(G(V.width),Le(V.height)),Array.isArray(k.refs)&&k.refs.length){let ge=await Promise.all(k.refs.map(async R=>{let Se=R.storageKey?await ht(R.storageKey).catch(()=>""):R.url||"";return{id:R.id||Ee("ref"),name:R.name||"\u53C2\u8003\u56FE",storageKey:R.storageKey||"",url:Se}}));Ye(ge.filter(R=>R.storageKey||R.url))}else Sr()},un=async()=>{let k=a.trim();if(!k){A?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}if(!Re){A?.("\u5148\u5728\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A\u6E20\u9053\u5E76\u9009\u597D\u6A21\u578B","error");return}if(!Re.channel?.apiKey){A?.("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key","error");return}if(yt){Ne.current?.abort();return}let V=Bn(N,256,4096,ce),ge=Bn(oe,256,4096,ce),R=`${V}x${ge}`,Se=Math.max(1,Math.min(10,Math.round(Number(bt)||1))),_e=Date.now(),We=Ee("r"),Dt=Array.from({length:Se},(qe,_t)=>({index:_t,status:"pending"})),Kn={id:We,prompt:k,model:Re.label,modelKey:Re.key,ratio:L,size:R,quality:ue,resolution:ee,transparent:E,count:Se,refs:st.map(qe=>({id:qe.id,name:qe.name,storageKey:qe.storageKey||""})),slots:Dt,images:[],startedAt:_e,elapsedMs:0,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};c?.(Kn),Ge(We),Oe.current.add(We),Qe(!0);let qt=new AbortController;Ne.current=qt;let In=new Map,gn=(qe,_t)=>{In.set(qe,_t),s?.(We,xt=>{let Pt=(xt.slots||Dt).map(fe=>fe.index===qe?_t:fe);return{...xt,slots:Pt,images:Pt.filter(fe=>fe.status==="done")}})};try{let qe=await An(st),_t=qe.length>0,xt={size:R,ratio:L,resolution:ee,quality:ue,count:Se,align16:ce,background:E?"transparent":void 0,outputFormat:E?"png":void 0},{items:Pt,failed:fe,requested:Mt,got:En}=await Un(_t?{capability:"image-edit",channel:Re.channel,model:Re.model?.id||Re.label,prompt:k,params:{...xt,imageDataUrls:qe},signal:qt.signal,onProgress:({stage:hn,index:vn,item:at})=>{hn==="item"&&at&&gn(vn,Gt(vn,at))}}:{capability:"image",channel:Re.channel,model:Re.model?.id||Re.label,prompt:k,params:xt,signal:qt.signal,onProgress:({stage:hn,index:vn,item:at})=>{hn==="item"&&at&&gn(vn,Gt(vn,at))}}),Jt=Date.now()-_e;s?.(We,hn=>{let at=(hn.slots||Dt).map(it=>({...it}));Pt.forEach((it,jn)=>{let Kt=it.index??jn;Kt>=0&&Kt<at.length&&(at[Kt]=Gt(Kt,it))}),(fe||[]).forEach((it,jn)=>{let Kt=typeof it.index=="number"?it.index:at.findIndex(Fn=>Fn.status==="pending"),bn=Kt>=0?Kt:Math.min(at.length-1,Pt.length+jn);bn>=0&&at[bn]&&at[bn].status!=="done"&&(at[bn]={index:bn,status:"failed",error:it.error||"\u751F\u6210\u5931\u8D25"})});for(let it=0;it<at.length;it++)at[it].status==="pending"&&(at[it]={index:it,status:"failed",error:"\u4E0A\u6E38\u672A\u8FD4\u56DE\u8BE5\u5F20\u56FE\u7247"});return{...hn,slots:at,images:at.filter(it=>it.status==="done"),elapsedMs:Jt}}),fe?.length?A?.(`${fe.length} \u5F20\u5931\u8D25\uFF1A${fe[0].error}`,"error"):Mt&&En&&En<Mt?A?.(`\u4E0A\u6E38\u53EA\u7ED9\u4E86 ${En}/${Mt} \u5F20`,"error"):A?.(Pt.length>1?`\u5DF2\u751F\u6210 ${Pt.length} \u5F20`:"\u751F\u6210\u5B8C\u6210")}catch(qe){let _t=Nn(qe),xt=_t?"\u5DF2\u53D6\u6D88":qe.message||"\u751F\u6210\u5931\u8D25";_t?A?.("\u5DF2\u53D6\u6D88"):A?.(xt,"error"),s?.(We,Pt=>{let fe=(Pt.slots||Dt).map(Mt=>Mt.status==="pending"?{...Mt,status:"failed",error:xt}:Mt);return{...Pt,slots:fe,images:fe.filter(Mt=>Mt.status==="done"),elapsedMs:Date.now()-_e}})}finally{Oe.current.delete(We),Ne.current=null,Qe(!1)}},ve=async(k,V)=>{let ge=`${k.id}:${V}`;if(nt[ge])return;let R=wn(e,k.modelKey)||Re;if(!R||!R.channel?.apiKey){A?.("\u6CA1\u6709\u53EF\u7528\u7684\u6A21\u578B\u6216\u672A\u586B\u5199 API Key","error");return}Xe(Se=>({...Se,[ge]:!0})),Oe.current.add(k.id),s?.(k.id,Se=>({...Se,slots:(Se.slots||[]).map(_e=>_e.index===V?{index:V,status:"pending"}:_e)}));try{let Se=await An(k.refs?.length?k.refs:st),_e={size:k.size||"1024x1024",ratio:k.ratio||"1:1",resolution:k.resolution||"\u81EA\u52A8",quality:k.quality||"\u81EA\u52A8",count:1,align16:ce,background:k.transparent?"transparent":void 0,outputFormat:k.transparent?"png":void 0},We=await Un(Se.length?{capability:"image-edit",channel:R.channel,model:R.model?.id||R.label,prompt:k.prompt,params:{..._e,imageDataUrls:Se}}:{capability:"image",channel:R.channel,model:R.model?.id||R.label,prompt:k.prompt,params:_e}),Dt=We.items?.[0];if(!Dt)throw new Error(We.failed?.[0]?.error||"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247");let Kn=Gt(V,Dt);s?.(k.id,qt=>{let In=(qt.slots||[]).map(qe=>qe.index===V?Kn:qe),gn={...qt,slots:In,images:In.filter(qe=>qe.status==="done")};return Ie(qe=>qe&&qe.id===k.id?gn:qe),gn}),A?.("\u91CD\u7ED8\u5B8C\u6210")}catch(Se){s?.(k.id,_e=>({..._e,slots:(_e.slots||[]).map(We=>We.index===V?{index:V,status:"failed",error:Se.message||"\u91CD\u8BD5\u5931\u8D25"}:We)})),A?.(Se.message||"\u91CD\u8BD5\u5931\u8D25","error")}finally{Oe.current.delete(k.id),Xe(Se=>{let _e={...Se};return delete _e[ge],_e})}},$t=async(k,V)=>{let ge=V?.storageKey;if(!ge){A?.("\u6CA1\u6709\u53EF\u4E0B\u8F7D\u7684\u672C\u5730\u56FE\u7247","error");return}let R=await Or(ge).catch(()=>null);if(!R?.blob){A?.("\u56FE\u7247\u8BFB\u53D6\u5931\u8D25","error");return}let Se=(R.blob.type?.split("/")[1]||"png").replace("jpeg","jpg"),_e=URL.createObjectURL(R.blob),We=document.createElement("a");We.href=_e,We.download=`${(k.prompt||"studio-image").slice(0,32).replace(/[/\\:*?"<>|]/g,"")}.${Se}`,We.click(),setTimeout(()=>URL.revokeObjectURL(_e),3e3),A?.("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")},sn=(k,V)=>{if(!V?.storageKey||!d){A?.("\u5F53\u524D\u65E0\u6CD5\u5B58\u4E3A\u8D44\u4EA7","error");return}d({id:Ee("a"),kind:"image",title:(k.prompt||"\u5DE5\u4F5C\u53F0\u4F5C\u54C1").slice(0,30),text:k.prompt||"",cover:V.storageKey,tags:["\u5DE5\u4F5C\u53F0"],source:"\u751F\u56FE\u5DE5\u4F5C\u53F0",at:Date.now()}),A?.("\u5DF2\u5B58\u4E3A\u8D44\u4EA7")},pt=async k=>{if(!k?.storageKey){A?.("\u8FD9\u5F20\u56FE\u7F3A\u5C11\u672C\u5730\u526F\u672C","error");return}let V=await ht(k.storageKey).catch(()=>"");Ye(ge=>[...ge,{id:Ee("ref"),name:"\u6765\u81EA\u751F\u6210\u7ED3\u679C",storageKey:k.storageKey,url:V}]),A?.("\u5DF2\u8BBE\u4E3A\u53C2\u8003\u56FE")},_n=k=>Lt(V=>V.includes(k)?V.filter(ge=>ge!==k):[...V,k]),mn=y.default.useMemo(()=>(n||[]).filter(k=>k.slots&&k.slots.length>0||k.images&&k.images.length>0||k.url),[n]);return y.default.createElement("div",{className:"cf-page cf-page--studio"},y.default.createElement("div",{className:"cf-page-inner"},ie?y.default.createElement(Na,{prompts:o,onPick:async(k,V={})=>{if(le(!1),$(k.text||k.prompt||""),V.withRefs&&k.referenceImageUrls?.length){A?.(`\u5DF2\u586B\u5165\u300C${k.title||"\u63D0\u793A\u8BCD"}\u300D\uFF0C\u6B63\u5728\u52A0\u8F7D ${k.referenceImageUrls.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let ge=await nr(k.referenceImageUrls,{max:4});if(ge.length){Ye(R=>[...R,...ge.map(Se=>({id:Se.id,name:Se.name,storageKey:Se.storageKey,url:Se.url}))]),A?.(`\u5DF2\u52A0\u5165 ${ge.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE`);return}}A?.(`\u5DF2\u586B\u5165\u300C${k.title||"\u63D0\u793A\u8BCD"}\u300D`)},onManage:()=>{le(!1),m?.()},onClose:()=>le(!1)}):null,Ue?y.default.createElement(zl,{assets:r,onPick:async k=>{let V=await ht(k.cover).catch(()=>"");Ye(ge=>[...ge,{id:Ee("ref"),name:k.title||"\u8D44\u4EA7\u56FE\u7247",storageKey:k.cover,url:V}]),we(!1),A?.("\u5DF2\u52A0\u5165\u53C2\u8003\u56FE")},onClose:()=>we(!1)}):null,Me?y.default.createElement(Il,{record:mn.find(k=>k.id===Me.id)||Me,onClose:()=>Ie(null),onSend:k=>p?.(k),onDownload:$t,onSaveAsset:sn,onUseAsRef:pt,onOpenLightbox:(k,V)=>Be({record:k,index:V}),onRetrySlot:ve,isRunning:k=>Oe.current.has(k)}):null,ke?y.default.createElement(El,{record:mn.find(k=>k.id===ke.record.id)||ke.record,initialIndex:ke.index,onClose:()=>Be(null),onDownload:$t,onSaveAsset:sn,onUseAsRef:pt,onSend:p}):null,y.default.createElement("div",{className:"cf-studio"},y.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},y.default.createElement("div",{className:"cf-card"},y.default.createElement("div",{className:"cf-card-head"},y.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),y.default.createElement("span",{className:"cf-card-count"},n.length)),y.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)",alignContent:"start"}},y.default.createElement("div",{style:{display:"flex",gap:6}},y.default.createElement(J,{size:"sm",icon:"plus",onClick:Tt},"\u65B0\u5EFA"),y.default.createElement(J,{size:"sm",onClick:()=>Lt(n.map(k=>k.id))},"\u5168\u9009"),y.default.createElement(J,{size:"sm",variant:"danger",disabled:!vt.length,onClick:()=>{St&&vt.includes(St)&&Ge(null),f?.(vt),Lt([])}},"\u5220\u9664")),n.length===0?y.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):y.default.createElement("div",{className:"cf-record-list"},n.map(k=>y.default.createElement("div",{key:k.id,style:{display:"flex",alignItems:"center",gap:6}},y.default.createElement("input",{type:"checkbox",checked:vt.includes(k.id),onChange:()=>_n(k.id),"aria-label":`\u9009\u62E9 ${k.prompt}`}),y.default.createElement("button",{type:"button",className:`cf-record${St===k.id?" is-active":""}`,style:{flex:1,minWidth:0},onClick:()=>Nt(k)},y.default.createElement("span",{className:"cf-record-prompt"},k.prompt),y.default.createElement("span",{className:"cf-record-meta"},k.model," \xB7 ",k.size," \xB7 ",k.at)))))))),y.default.createElement("div",{className:"cf-studio-col"},y.default.createElement("div",{className:"cf-card"},y.default.createElement("div",{className:"cf-card-head"},y.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),y.default.createElement("div",{className:"cf-card-body cf-form",style:{alignContent:"start"}},y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),y.default.createElement("div",{className:"cf-form-head-actions"},y.default.createElement(J,{size:"sm",icon:"book",onClick:()=>le(!0)},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),y.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:a,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:k=>$(k.target.value)})),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),y.default.createElement("div",{className:"cf-form-head-actions"},y.default.createElement(J,{size:"sm",onClick:()=>we(!0)},"\u8D44\u4EA7"),y.default.createElement(J,{size:"sm",onClick:Ut},"\u526A\u5207\u677F"),y.default.createElement(J,{size:"sm",icon:"upload",onClick:()=>Wt.current?.click()},"\u4E0A\u4F20"))),y.default.createElement("input",{ref:Wt,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:Jn}),st.length?y.default.createElement("div",{className:"cf-studio-refs",onDragOver:k=>k.preventDefault(),onDrop:Vt},st.map((k,V)=>y.default.createElement("div",{key:k.id,className:"cf-studio-ref"},y.default.createElement(Vr,{storageKey:k.storageKey,url:k.url,alt:k.name}),y.default.createElement("div",{className:"cf-studio-ref-meta"},y.default.createElement("span",null,k.name),y.default.createElement("span",{className:"cf-studio-ref-hint"},"\u6709\u53C2\u8003\u56FE\u65F6\u8D70\u300C\u56FE\u7247\u7F16\u8F91\u300D\uFF0C\u4E0D\u662F\u7EAF\u6587\u751F\u56FE\uFF08\u7B2C ",V+1,"/",st.length," \u5F20\uFF09")),y.default.createElement("div",{className:"cf-studio-ref-actions"},y.default.createElement(Ke,{name:"chevron",label:"\u4E0A\u79FB",disabled:V===0,onClick:()=>Cn(V,-1),style:{transform:"rotate(180deg)"}}),y.default.createElement(Ke,{name:"chevron",label:"\u4E0B\u79FB",disabled:V===st.length-1,onClick:()=>Cn(V,1)}),y.default.createElement(Ke,{name:"x",label:"\u79FB\u9664\u53C2\u8003\u56FE",onClick:()=>zt(k.id)}))))):y.default.createElement("div",{className:"cf-drop",onDragOver:k=>{k.preventDefault()},onDrop:Vt},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u62D6\u5165\u591A\u5F20\u56FE\u7247")),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),y.default.createElement("div",{style:{position:"relative"}},y.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>O(k=>!k)},y.default.createElement(he,{name:"sparkle",size:13}),y.default.createElement("span",null,Re?Re.label:"\u9009\u62E9\u6A21\u578B"),y.default.createElement(he,{name:"chevron",size:12})),D?y.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},mt.length?mt.map(k=>y.default.createElement("button",{key:k.key,type:"button",className:`cf-menu-item${k.key===(H||mt[0]?.key)?" is-on":""}`,onClick:()=>{ae(k.key),O(!1)}},k.label," ",y.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",k.channel.name||k.channel.protocol))):y.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),y.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},y.default.createElement("span",null,"\u900F\u660E\u80CC\u666F\uFF08PNG\uFF09"),y.default.createElement("input",{type:"checkbox",checked:E,onChange:k=>z(k.target.checked)}))),y.default.createElement("div",{className:"cf-chips"},fr.map(k=>y.default.createElement("button",{key:k,type:"button",className:`cf-chip${ue===k?" is-on":""}`,onClick:()=>te(k)},k)))),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),y.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},y.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),y.default.createElement("input",{type:"checkbox",checked:ce,onChange:k=>dt(k.target.checked)}))),y.default.createElement("div",{className:"cf-size-row"},y.default.createElement("input",{className:"cf-input cf-input--num",value:N,"aria-label":"\u5BBD",onChange:k=>G(Number(k.target.value.replace(/\D/g,""))||0)}),y.default.createElement(he,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),y.default.createElement("input",{className:"cf-input cf-input--num",value:oe,"aria-label":"\u9AD8",onChange:k=>Le(Number(k.target.value.replace(/\D/g,""))||0)})),y.default.createElement("div",{className:"cf-chips"},zn.map(k=>y.default.createElement("button",{key:k.id,type:"button",className:`cf-chip cf-chip--tag${L===k.id?" is-on":""}`,onClick:()=>ct(k.id)},y.default.createElement(Cl,{ratio:k.id}),k.label)))),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),y.default.createElement("div",{className:"cf-chips"},Xn.map(k=>y.default.createElement("button",{key:k,type:"button",className:`cf-chip${ee===k?" is-on":""}`,onClick:()=>Fe(k)},k)))),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("span",{className:"cf-label"},"\u5F20\u6570"),y.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},y.default.createElement("div",{className:"cf-chips"},[1,2,4].map(k=>y.default.createElement("button",{key:k,type:"button",className:`cf-chip${bt===k?" is-on":""}`,onClick:()=>Ot(k)},k," \u5F20"))),y.default.createElement("input",{type:"number",min:1,max:10,className:"cf-input cf-input--num",style:{width:64},"aria-label":"\u81EA\u5B9A\u4E49\u751F\u6210\u5F20\u6570",value:bt,onChange:k=>Ot(Math.max(1,Math.min(10,Number(k.target.value)||1)))}))),y.default.createElement(J,{variant:"primary",icon:yt?"stop":"play",onClick:un,disabled:!yt&&!a.trim()},yt?"\u505C\u6B62\u751F\u6210":"\u5F00\u59CB\u751F\u6210")))),y.default.createElement("div",{className:"cf-studio-col"},y.default.createElement("div",{className:"cf-card"},y.default.createElement("div",{className:"cf-card-head"},y.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),y.default.createElement("span",{className:"cf-card-count"},mn.length)),y.default.createElement("div",{className:"cf-card-body"},mn.length===0?y.default.createElement(Rt,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):y.default.createElement("div",{className:"cf-results"},mn.map(k=>y.default.createElement(Al,{key:k.id,record:k,active:St===k.id,isRunning:Oe.current.has(k.id),onOpenGallery:()=>Ie(k),onOpenLightbox:V=>Be({record:k,index:V}),onSend:()=>p?.(k),onDownload:V=>$t(k,V),onSaveAsset:V=>sn(k,V),onUseAsRef:V=>pt(V),onRetrySlot:V=>ve(k,V)})))))))))}function ls({record:e,total:t,doneCount:n,isRunning:r,onRetryAll:o}){return y.default.createElement("div",{className:"cf-pending-card"},r?y.default.createElement(y.default.Fragment,null,y.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),y.default.createElement("span",null,"\u751F\u6210\u4E2D\u2026 ",n,"/",t),y.default.createElement("span",{style:{fontSize:11,opacity:.8}},e.prompt.slice(0,32))):y.default.createElement(y.default.Fragment,null,y.default.createElement("span",null,"\u4EFB\u52A1\u5DF2\u4E2D\u65AD\uFF08\u5237\u65B0\u524D\u672A\u5B8C\u6210\uFF09"),y.default.createElement(J,{size:"sm",icon:"refresh",onClick:o},"\u91CD\u65B0\u751F\u6210")))}function fs({error:e,label:t,onRetry:n}){return y.default.createElement("div",{className:"cf-failed-card"},y.default.createElement("span",null,t||"\u751F\u6210\u5931\u8D25"),y.default.createElement("span",{className:"cf-failed-err"},e||"\u8BF7\u6C42\u672A\u5B8C\u6210"),n?y.default.createElement(J,{size:"sm",icon:"refresh",onClick:n},"\u91CD\u8BD5"):null)}function Al({record:e,active:t,isRunning:n,onOpenGallery:r,onOpenLightbox:o,onSend:a,onDownload:i,onSaveAsset:c,onUseAsRef:s,onRetrySlot:f}){let d=y.default.useMemo(()=>Array.isArray(e.slots)&&e.slots.length?e.slots:(Array.isArray(e.images)&&e.images.length?e.images:e.url?[{url:e.url,storageKey:e.storageKey||"",width:e.width,height:e.height}]:[]).map(($,K)=>({...$,index:K,status:"done"})),[e]),m=d.filter(A=>A.status==="done"),p=d.filter(A=>A.status==="pending"),v=d.filter(A=>A.status==="failed");if(!m.length){if(p.length)return y.default.createElement(ls,{record:e,total:d.length,doneCount:0,isRunning:n,onRetryAll:()=>f?.(p[0].index)});let A=v[0];return y.default.createElement(fs,{label:d.length>1?`${d.length} \u5F20\u5747\u751F\u6210\u5931\u8D25`:"\u751F\u6210\u5931\u8D25",error:A?.error||"\u4E0A\u6E38\u672A\u8FD4\u56DE\u56FE\u7247",onRetry:A?()=>f?.(A.index):void 0})}let P=m[0],T=m.length>1;return y.default.createElement("div",{className:`cf-result-unit${t?" is-active":""}`},y.default.createElement("figure",{className:`cf-result${T?" cf-result--stack":""}`,title:`${e.prompt}
${e.model} \xB7 ${e.size}${T?` \xB7 ${m.length} \u5F20`:""}`,onClick:()=>T?r?.():o?.(0),style:{cursor:"zoom-in"}},y.default.createElement(Vr,{storageKey:P.storageKey,url:P.url,alt:e.prompt}),T?y.default.createElement("span",{className:"cf-result-badge"},m.length):null,P.degraded?y.default.createElement("span",{className:"cf-result-flag"},"\u8FDC\u7A0B"):null,a?y.default.createElement("button",{type:"button",className:"cf-result-send",title:"\u9001\u5230\u753B\u5E03\uFF0C\u6210\u4E3A\u56FE\u7247\u8282\u70B9","aria-label":"\u9001\u5230\u753B\u5E03",onClick:A=>{A.stopPropagation(),a()}},y.default.createElement(he,{name:"canvas",size:13})):null),y.default.createElement("div",{className:"cf-result-meta-bar"},y.default.createElement("span",{className:"cf-result-meta-text"},P.width&&P.height?`${P.width}\xD7${P.height}`:e.size,P.bytes?` \xB7 ${ss(P.bytes)}`:"",e.elapsedMs?` \xB7 ${Ml(e.elapsedMs)}`:""),y.default.createElement("div",{className:"cf-result-meta-actions"},y.default.createElement(Ke,{name:"download",label:"\u4E0B\u8F7D\u539F\u56FE",onClick:()=>i?.(P)}),y.default.createElement(Ke,{name:"folder",label:"\u5B58\u4E3A\u8D44\u4EA7",onClick:()=>c?.(P)}),y.default.createElement(Ke,{name:"image",label:"\u8BBE\u4E3A\u53C2\u8003\u56FE",onClick:()=>s?.(P)}))),p.length||v.length?y.default.createElement("div",{className:"cf-slot-status-strip"},p.map(A=>y.default.createElement("span",{key:`p_${A.index}`,className:"cf-slot-pill"},y.default.createElement("span",{className:"cf-spin","aria-hidden":"true",style:{width:10,height:10}}),"\u7B2C ",A.index+1," \u5F20\u751F\u6210\u4E2D")),v.map(A=>y.default.createElement("button",{key:`f_${A.index}`,type:"button",className:"cf-slot-pill is-failed",title:A.error||"\u70B9\u51FB\u91CD\u8BD5",onClick:()=>f?.(A.index)},"\u7B2C ",A.index+1," \u5F20\u5931\u8D25 \xB7 \u91CD\u8BD5"))):null)}function Il({record:e,onClose:t,onSend:n,onDownload:r,onSaveAsset:o,onUseAsRef:a,onOpenLightbox:i,onRetrySlot:c,isRunning:s}){let f=Array.isArray(e.slots)&&e.slots.length?e.slots:(e.images||[]).map((v,P)=>({...v,index:P,status:"done"})),d=f.filter(v=>v.status==="done"),m=f.filter(v=>v.status==="failed"),p=f.filter(v=>v.status==="pending");return y.default.createElement(lt,{title:`${d.length} \u5F20 \xB7 ${e.prompt.slice(0,24)}`,onClose:t,footer:y.default.createElement(y.default.Fragment,null,n&&d.length?y.default.createElement(J,{icon:"canvas",onClick:()=>{n(e),t()}},"\u5168\u90E8\u9001\u5230\u753B\u5E03"):null,y.default.createElement(J,{onClick:t},"\u5173\u95ED"))},y.default.createElement("div",{className:"cf-result-gallery"},d.map((v,P)=>y.default.createElement("figure",{key:v.index??P,className:"cf-result-gallery-item"},y.default.createElement(Vr,{storageKey:v.storageKey,url:v.url,alt:`${e.prompt} ${P+1}`,style:{cursor:"zoom-in"},onClick:()=>i?.(e,P)}),y.default.createElement("figcaption",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:4}},y.default.createElement("span",null,v.width&&v.height?`${v.width} \xD7 ${v.height}`:"",v.bytes?` \xB7 ${ss(v.bytes)}`:"",v.degraded?" \xB7 \u8FDC\u7A0B":""),y.default.createElement("span",{style:{display:"inline-flex",gap:2}},y.default.createElement(Ke,{name:"download",label:"\u4E0B\u8F7D",onClick:()=>r?.(e,v)}),y.default.createElement(Ke,{name:"folder",label:"\u5B58\u8D44\u4EA7",onClick:()=>o?.(e,v)}),y.default.createElement(Ke,{name:"image",label:"\u8BBE\u53C2\u8003",onClick:()=>a?.(v)}))))),p.map(v=>y.default.createElement(ls,{key:`p_${v.index}`,record:e,total:f.length,doneCount:d.length,isRunning:s?.(e.id),onRetryAll:()=>c?.(e,v.index)})),m.map(v=>y.default.createElement(fs,{key:`f_${v.index}`,label:`\u7B2C ${v.index+1} \u5F20\u5931\u8D25`,error:v.error,onRetry:()=>c?.(e,v.index)}))))}function El({record:e,initialIndex:t=0,onClose:n,onDownload:r,onSaveAsset:o,onUseAsRef:a,onSend:i}){let c=y.default.useMemo(()=>(e.slots||e.images||[]).filter(p=>p.status!=="failed"&&p.status!=="pending"&&(p.storageKey||p.url)),[e]),[s,f]=y.default.useState(Math.max(0,Math.min(c.length-1,t))),d=c[s]||c[0]||null;return y.default.useEffect(()=>{let m=p=>{if(p.key==="Escape"){p.preventDefault(),p.stopPropagation(),n();return}c.length>1&&(p.key==="ArrowLeft"||p.key==="ArrowRight")&&(p.preventDefault(),f(v=>(v+(p.key==="ArrowRight"?1:-1)+c.length)%c.length))};return window.addEventListener("keydown",m,!0),()=>window.removeEventListener("keydown",m,!0)},[n,c.length]),d?y.default.createElement("div",{className:"cf-lightbox",style:{position:"fixed",zIndex:"var(--cf-z-modal)"},role:"dialog","aria-modal":"true","aria-label":"\u9AD8\u6E05\u5927\u56FE\u9884\u89C8",onPointerDown:m=>{m.target===m.currentTarget&&n()}},y.default.createElement("figure",{className:"cf-lightbox-figure",style:{"--cf-lb-ratio":fn(e.ratio)}},y.default.createElement(Vr,{storageKey:d.storageKey,url:d.url,alt:e.prompt,preferPreview:!1})),y.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"center"}},c.length>1?y.default.createElement(y.default.Fragment,null,y.default.createElement(J,{size:"sm",onClick:()=>f(m=>(m-1+c.length)%c.length)},"\u4E0A\u4E00\u5F20"),y.default.createElement("span",{className:"cf-lightbox-cap"},s+1," / ",c.length),y.default.createElement(J,{size:"sm",onClick:()=>f(m=>(m+1)%c.length)},"\u4E0B\u4E00\u5F20")):null,y.default.createElement(J,{size:"sm",icon:"download",onClick:()=>r?.(e,d)},"\u4E0B\u8F7D"),y.default.createElement(J,{size:"sm",icon:"folder",onClick:()=>o?.(e,d)},"\u5B58\u4E3A\u8D44\u4EA7"),y.default.createElement(J,{size:"sm",icon:"image",onClick:()=>a?.(d)},"\u8BBE\u4E3A\u53C2\u8003\u56FE"),i?y.default.createElement(J,{size:"sm",icon:"canvas",onClick:()=>{i(e),n()}},"\u9001\u5230\u753B\u5E03"):null),y.default.createElement("figcaption",{className:"cf-lightbox-cap"},d.width&&d.height?`${d.width} \xD7 ${d.height} \xB7 `:"",e.prompt),y.default.createElement("button",{type:"button",className:"cf-lightbox-x",onClick:n,"aria-label":"\u5173\u95ED\u9884\u89C8"},y.default.createElement(he,{name:"close",size:16}))):null}function zl({assets:e,onPick:t,onClose:n}){let r=y.default.useMemo(()=>(e||[]).filter(o=>o.kind==="image"&&o.cover),[e]);return y.default.createElement(lt,{title:"\u4ECE\u6211\u7684\u8D44\u4EA7\u9009\u62E9\u53C2\u8003\u56FE",onClose:n,footer:y.default.createElement(J,{onClick:n},"\u5173\u95ED")},r.length?y.default.createElement("div",{className:"cf-picker-grid"},r.map(o=>y.default.createElement("button",{key:o.id,type:"button",className:"cf-picker-asset",onClick:()=>t(o)},y.default.createElement(Vr,{storageKey:o.cover,alt:o.title||"\u8D44\u4EA7\u56FE\u7247"}),y.default.createElement("span",null,o.title||"\u8D44\u4EA7\u56FE\u7247")))):y.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u56FE\u7247\u8D44\u4EA7\uFF0C\u5148\u5728\u753B\u5E03\u6216\u5DE5\u4F5C\u53F0\u4FDD\u5B58\u51E0\u5F20\u56FE\u7247\u5230\u8D44\u4EA7\u5E93\u3002"))}var me=Zt(require("react"),1);var Ma=24;function ds({prompts:e=[],sources:t=[],onUse:n,onCopy:r,onSaveAsset:o,onEnableBuiltins:a,onBack:i,returnTo:c}){let[s,f]=me.default.useState(""),[d,m]=me.default.useState("\u5168\u90E8"),[p,v]=me.default.useState([]),[P,T]=me.default.useState(Ma),[A,$]=me.default.useState(null),[K,Y]=me.default.useState(!1),I=me.default.useMemo(()=>["\u5168\u90E8",...new Set(e.map(z=>z.category).filter(Boolean))],[e]),L=me.default.useMemo(()=>{let z=d==="\u5168\u90E8"?e:e.filter(H=>H.category===d);return["\u5168\u90E8",...new Set(z.flatMap(H=>H.tags||[]).filter(Boolean))]},[e,d]),Z=me.default.useMemo(()=>{let z=s.trim().toLowerCase();return e.filter(H=>d!=="\u5168\u90E8"&&H.category!==d||p.length&&!p.some(ae=>(H.tags||[]).includes(ae))?!1:z?[H.title,H.text,H.description,H.category,H.author,...H.tags||[]].filter(Boolean).some(ae=>String(ae).toLowerCase().includes(z)):!0)},[e,d,p,s]),ue=Z.slice(0,P),te=Z.length>ue.length;me.default.useEffect(()=>{T(Ma)},[s,d,p]);let ee=z=>{if(z==="\u5168\u90E8"){v([]);return}v(H=>H.includes(z)?H.filter(ae=>ae!==z):[...H,z])},Te=z=>{let H=z.currentTarget;te&&H.scrollTop+H.clientHeight>=H.scrollHeight-180&&T(ae=>ae+Ma)},E=async()=>{if(!(!a||K)){Y(!0);try{await a()}finally{Y(!1)}}};return me.default.createElement("div",{className:"cf-page",onScroll:Te},me.default.createElement("div",{className:"cf-page-inner"},me.default.createElement("div",{className:"cf-title-center"},me.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),me.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD",Z.length!==e.length?`\uFF08\u5DF2\u7B5B\u9009 ${Z.length} \u6761\uFF09`:""),c&&i?me.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:i},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),me.default.createElement("div",{className:"cf-split"},me.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},me.default.createElement("div",{className:"cf-filter-group"},me.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),me.default.createElement("div",{className:"cf-filter-chips"},I.map(z=>me.default.createElement("button",{key:z,type:"button",className:`cf-chip cf-chip--tag${d===z?" is-on":""}`,onClick:()=>{m(z),v([])}},z)))),me.default.createElement("div",{className:"cf-filter-group"},me.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E",p.length?`\uFF08\u5DF2\u9009 ${p.length}\uFF09`:""),me.default.createElement("div",{className:"cf-filter-chips"},L.slice(0,60).map(z=>{let H=z==="\u5168\u90E8"?p.length===0:p.includes(z);return me.default.createElement("button",{key:z,type:"button",className:`cf-chip cf-chip--tag${H?" is-on":""}`,onClick:()=>ee(z)},z)})))),me.default.createElement("div",null,me.default.createElement("div",{className:"cf-search"},me.default.createElement(he,{name:"search",size:15}),me.default.createElement("input",{className:"cf-input",value:s,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u4F5C\u8005",onChange:z=>f(z.target.value)})),t.length===0?me.default.createElement("div",{className:"cf-source-presets",style:{marginBottom:"var(--cf-sp-4)"}},me.default.createElement("span",null,"\u8FD8\u6CA1\u6709\u914D\u7F6E\u5916\u90E8\u63D0\u793A\u8BCD\u6765\u6E90\uFF0C\u5F53\u524D\u4EC5\u5C55\u793A\u5185\u7F6E\u793A\u4F8B\u3002\u53EF\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\uFF0C\u6216\u4E00\u952E\u542F\u7528 7 \u4E2A\u5B98\u65B9\u6E90\u3002"),a?me.default.createElement(J,{size:"sm",variant:"primary",icon:"refresh",disabled:K,onClick:E},K?"\u62C9\u53D6\u4E2D\u2026":"\u4E00\u952E\u542F\u7528 7 \u4E2A\u5B98\u65B9\u6E90\u5E76\u62C9\u53D6"):null):null,Z.length===0?me.default.createElement(Rt,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:s||d!=="\u5168\u90E8"||p.length?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u5E76\u62C9\u53D6\u6765\u6E90\u3002"}):me.default.createElement(me.default.Fragment,null,me.default.createElement("ul",{className:"cf-prompt-grid"},ue.map(z=>{let H=z.referenceImageUrls?.length||0;return me.default.createElement("li",{key:`${z.sourceId||""}_${z.id}`,className:"cf-prompt-card"},me.default.createElement("div",{className:"cf-prompt-cover",onClick:()=>$(z),title:"\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5\u4E0E\u53C2\u8003\u56FE"},me.default.createElement(qn,{src:z.coverUrl,alt:z.title||"\u63D0\u793A\u8BCD\u5C01\u9762"}),H>0?me.default.createElement("span",{className:"cf-prompt-ref-badge"},"\u53C2\u8003\u56FE\xD7",H):null),me.default.createElement("div",{className:"cf-prompt-body"},me.default.createElement("button",{type:"button",className:"cf-prompt-title",onClick:()=>$(z)},z.title),me.default.createElement("p",{className:"cf-prompt-text",onClick:()=>$(z)},z.description||z.text),me.default.createElement("span",{className:"cf-prompt-tags"},z.category?me.default.createElement("span",{className:"cf-tag"},z.category):null,(z.tags||[]).slice(0,5).map(ae=>me.default.createElement("span",{key:ae,className:"cf-tag"},ae))),me.default.createElement("span",{className:"cf-prompt-card-actions"},me.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>n?.(z,{withRefs:H>0})},H>0?"\u5E26\u53C2\u8003\u56FE\u4F7F\u7528":"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"),r?me.default.createElement(Ke,{name:"copy",label:"\u590D\u5236\u63D0\u793A\u8BCD",onClick:()=>r(z)}):null,o?me.default.createElement(Ke,{name:"folder",label:"\u5B58\u4E3A\u8D44\u4EA7",onClick:()=>o(z)}):null)))})),te?me.default.createElement("div",{className:"cf-more"},me.default.createElement(J,{onClick:()=>T(z=>z+Ma)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",Z.length-ue.length," \u6761\uFF09")):me.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))),A?me.default.createElement(Sa,{prompt:A,onClose:()=>$(null),onUse:n,onCopy:r,onSaveAsset:o}):null)}var X=Zt(require("react"),1);Gn();function Tl({asset:e}){let t=e?.kind==="image"?e.cover:"",n=e?.coverUrl||(!t&&/^https?:\/\//i.test(e?.cover||"")?e.cover:""),[r,o]=X.default.useState("");return X.default.useEffect(()=>{let a=!0;return t?(ht(t).then(i=>{a&&o(i||"")}).catch(()=>{a&&o("")}),()=>{a=!1}):(o(""),()=>{a=!1})},[t]),r?X.default.createElement("img",{src:r,alt:e.title||"\u8D44\u4EA7",loading:"lazy"}):n?X.default.createElement(qn,{src:n,alt:e.title||"\u8D44\u4EA7",compactEmpty:!0}):t?X.default.createElement("span",{className:"cf-asset-thumb-empty"},"\u56FE\u7247\u8BFB\u4E0D\u51FA\u6765"):X.default.createElement(he,{name:e.kind==="image"?"image":e.kind==="video"?"play":"text",size:22})}function $l({asset:e,onClose:t}){let[n,r]=X.default.useState(""),[o,a]=X.default.useState(null);return X.default.useEffect(()=>{let i=!0,c=e?.cover;return c?(ht(c).then(s=>{i&&r(s||"")}).catch(()=>{}),br(c).then(s=>{i&&s?.blob&&a({bytes:s.blob.size,type:s.blob.type})}).catch(()=>{}),()=>{i=!1}):()=>{i=!1}},[e?.cover]),X.default.createElement(lt,{title:e?.title||"\u8D44\u4EA7\u9884\u89C8",onClose:t,footer:X.default.createElement(J,{onClick:t},"\u5173\u95ED")},X.default.createElement("div",{className:"cf-asset-preview"},n?X.default.createElement("img",{src:n,alt:e?.title||""}):X.default.createElement("span",{className:"cf-asset-thumb-empty"},"\u56FE\u7247\u8BFB\u4E0D\u51FA\u6765")),X.default.createElement("div",{className:"cf-asset-preview-meta"},o?`${o.type} \xB7 ${(o.bytes/1024).toFixed(1)} KB`:"",e?.tags?.length?` \xB7 ${e.tags.join(" / ")}`:""))}function Dl(e,t){let n=[];if(Array.isArray(e)?n=e:e&&typeof e=="object"&&(Array.isArray(e.assets)?n=e.assets:Array.isArray(e.state?.assets)?n=e.state.assets:"assets"in e||(n=[e])),!n.length)return[];let r=new Set((t||[]).map(a=>a?.id).filter(Boolean)),o=[];for(let a of n){if(!a||typeof a!="object"||Array.isArray(a))continue;let i=typeof a.title=="string"?a.title.trim():"",c=typeof a.text=="string"?a.text:typeof a.prompt=="string"?a.prompt:"",s=typeof a.cover=="string"?a.cover.trim():"",f=typeof a.coverUrl=="string"?a.coverUrl.trim():"";if(!i&&!c.trim()&&!s&&!f)continue;let d=a.kind==="image"||a.kind==="text"?a.kind:s||f&&!c.trim()?"image":"text",m=typeof a.id=="string"?a.id.trim():"";if(!m||r.has(m))do m=Ee("a");while(r.has(m));r.add(m);let p=Array.isArray(a.tags)?[...new Set(a.tags.filter(T=>typeof T=="string"&&T.trim()).map(T=>T.trim()))]:[],v=typeof a.source=="string"&&a.source.trim()?a.source.trim():"\u5BFC\u5165",P={id:m,kind:d,title:i||c.trim().slice(0,24)||"\u672A\u547D\u540D\u8D44\u4EA7",text:c,tags:p,source:v,at:Date.now()};s&&(P.cover=s),f&&(P.coverUrl=f),o.push(P)}return o}function ps({assets:e,onSave:t,onDelete:n,onImport:r,say:o}){let[a,i]=X.default.useState(""),[c,s]=X.default.useState("all"),[f,d]=X.default.useState(null),[m,p]=X.default.useState(null),[v,P]=X.default.useState(null),T=X.default.useRef(null),A=X.default.useRef(e);A.current=e;let $=e.filter(I=>{if(c!=="all"&&I.kind!==c)return!1;if(!a)return!0;let L=a.toLowerCase();return[I.title,I.text,I.source,...I.tags||[]].filter(Boolean).some(Z=>String(Z).toLowerCase().includes(L))});return X.default.createElement("div",{className:"cf-page"},X.default.createElement("div",{className:"cf-page-inner"},X.default.createElement("div",{className:"cf-page-head"},X.default.createElement("div",null,X.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),X.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),X.default.createElement("div",{className:"cf-page-actions"},X.default.createElement(J,{icon:"upload",onClick:()=>T.current?.click()},"\u5BFC\u5165\u8D44\u4EA7"),X.default.createElement("input",{ref:T,type:"file",accept:".json,application/json",hidden:!0,onChange:async I=>{let L=I.target,Z=L.files?.[0];if(Z)try{let ue=JSON.parse(await Z.text()),te=Dl(ue,A.current);if(!te.length){o?.("\u672A\u5728\u6587\u4EF6\u4E2D\u627E\u5230\u6709\u6548\u8D44\u4EA7\u6761\u76EE","error");return}r?r(te):t([...te,...A.current]),o?.(`\u5DF2\u5BFC\u5165 ${te.length} \u6761\u8D44\u4EA7`)}catch{o?.("\u5BFC\u5165\u5931\u8D25\uFF1AJSON \u6587\u4EF6\u683C\u5F0F\u65E0\u6548","error")}finally{L.value=""}}}),X.default.createElement(J,{icon:"download",onClick:()=>{let I=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),L=document.createElement("a");L.href=URL.createObjectURL(I),L.download="my-assets.json",L.click(),setTimeout(()=>URL.revokeObjectURL(L.href),2e3),o?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),X.default.createElement(J,{variant:"primary",icon:"plus",onClick:()=>d({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),X.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},X.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},X.default.createElement("div",{className:"cf-filter-group"},X.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),X.default.createElement("div",{className:"cf-filter-chips"},Oa.map(I=>X.default.createElement("button",{key:I.id,type:"button",className:`cf-chip cf-chip--tag${c===I.id?" is-on":""}`,onClick:()=>s(I.id)},I.label))))),X.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},X.default.createElement(he,{name:"search",size:15}),X.default.createElement("input",{className:"cf-input",value:a,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:I=>i(I.target.value)}))),$.length===0?X.default.createElement(Rt,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:a||c!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:X.default.createElement(J,{variant:"primary",icon:"plus",onClick:()=>d({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):X.default.createElement("div",{className:"cf-asset-grid"},$.map(I=>X.default.createElement("div",{key:I.id,className:"cf-asset"},X.default.createElement("button",{type:"button",className:"cf-asset-thumb",onClick:()=>{I.kind==="image"&&I.cover&&P(I)},title:I.kind==="image"&&I.cover?"\u70B9\u51FB\u770B\u5927\u56FE":void 0},X.default.createElement(Tl,{asset:I})),X.default.createElement("div",{className:"cf-asset-body"},X.default.createElement("span",{className:"cf-asset-title"},I.title||"\u672A\u547D\u540D\u8D44\u4EA7"),X.default.createElement("span",{className:"cf-asset-meta"},I.source||"\u6765\u6E90\u672A\u6CE8\u660E",I.tags?.length?` \xB7 ${I.tags.join(" / ")}`:""),X.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},X.default.createElement(Ke,{name:"edit",label:"\u7F16\u8F91",onClick:()=>d({...I})}),X.default.createElement(Ke,{name:"trash",label:"\u5220\u9664",onClick:()=>p(I)}))))))),f?X.default.createElement(Pl,{asset:f,onClose:()=>d(null),onSave:I=>{let L=I.id?e.map(Z=>Z.id===I.id?I:Z):[...e,{...I,id:Ee("a")}];t(L),d(null),o?.(I.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,v?X.default.createElement($l,{asset:v,onClose:()=>P(null)}):null,m?X.default.createElement(lt,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>p(null),footer:X.default.createElement(X.default.Fragment,null,X.default.createElement(J,{onClick:()=>p(null)},"\u53D6\u6D88"),X.default.createElement(J,{variant:"danger",onClick:()=>{n(m.id),p(null),o?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},X.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",m.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function Pl({asset:e,onClose:t,onSave:n}){let[r,o]=X.default.useState({...e,tags:e.tags||[]}),a=(f,d)=>o(m=>({...m,[f]:d})),[i,c]=X.default.useState(""),s=r.title?.trim()&&(r.kind!=="text"||r.text?.trim());return X.default.createElement(lt,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:t,footer:X.default.createElement(X.default.Fragment,null,X.default.createElement(J,{onClick:t},"\u53D6\u6D88"),X.default.createElement(J,{variant:"primary",disabled:!s,onClick:()=>n({...r,title:r.title.trim()})},"\u4FDD\u5B58"))},X.default.createElement("div",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),X.default.createElement("div",{className:"cf-chips"},Oa.filter(f=>f.id!=="all").map(f=>X.default.createElement("button",{key:f.id,type:"button",className:`cf-chip${r.kind===f.id?" is-on":""}`,onClick:()=>a("kind",f.id)},f.label)))),X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),X.default.createElement("input",{className:"cf-input",value:r.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:f=>a("title",f.target.value)})),r.kind==="text"?X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),X.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:r.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:f=>a("text",f.target.value)})):X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),X.default.createElement("input",{className:"cf-input",value:r.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:f=>a("cover",f.target.value)})),X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),X.default.createElement("input",{className:"cf-input",value:i,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:f=>c(f.target.value),onKeyDown:f=>{if(f.key!=="Enter")return;f.preventDefault();let d=i.trim();d&&(a("tags",[...new Set([...r.tags||[],d])]),c(""))}}),r.tags?.length?X.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},r.tags.map(f=>X.default.createElement("button",{key:f,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>a("tags",r.tags.filter(d=>d!==f)),title:"\u70B9\u51FB\u79FB\u9664"},f," \xD7"))):null),X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),X.default.createElement("input",{className:"cf-input",value:r.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:f=>a("source",f.target.value)})))}var M=Zt(require("react"),1);Hr();ka();var Bl=3e4;async function Ca(e,{signal:t}={}){if(!e?.baseUrl)throw new Pe("\u6E20\u9053\u6CA1\u6709\u586B Base URL",{code:"NO_BASE_URL"});if(!e?.apiKey)throw new Pe("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key",{code:"NO_API_KEY"});let n=e.protocol==="gemini",r=await Ln({channel:e,path:n?"v1beta/models":"v1/models",method:"GET",timeoutMs:Bl,signal:t}),o=Array.isArray(r?.data)?r.data:Array.isArray(r?.models)?r.models:Array.isArray(r)?r:[];if(!o.length)throw new Pe("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u4EFB\u4F55\u6A21\u578B",{code:"NO_MODELS",body:r});return o.map(a=>{let i=typeof a=="string"?a:a?.id||a?.name||"";if(!i)return null;let c=n?String(i).replace(/^models\//,""):i;return{id:c,label:(typeof a=="object"&&(a.displayName||a.display_name||a.name))?.replace(/^models\//,"")||c}}).filter(Boolean)}function kr(e){let t=String(e||"").toLowerCase();return/video|sora|veo|kling|seedance|runway|luma|hailuo|grok-imagine-video|cogvideo|vidu|pika/.test(t)?"video":/tts|speech|audio|voice|whisper|music|suno/.test(t)?"audio":/image|dall|flux|seedream|banana|nanobanana|nano[_-]?banana|imagen|sdxl|stable-diffusion|sd[-_]?\d|midjourney|mj[_-]|gpt-image|grok-imagine|jimeng|ideogram|recraft|kolors|wanx|cogview|hidream|omnigen|hunyuan-image|qwen-image/.test(t)?"image":"text"}kn();Vn();function us(e){if(!e)return 0;if(typeof e.bytes=="number"&&Number.isFinite(e.bytes))return e.bytes;if(e instanceof Blob)return e.size;if(e.blob instanceof Blob)return e.blob.size;if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return e.byteLength;try{return new TextEncoder().encode(JSON.stringify(e)).byteLength}catch{return 0}}var Ol={[pe.appState]:"\u753B\u5E03\u6570\u636E",[pe.imageFiles]:"\u56FE\u7247\u539F\u56FE",[pe.imagePreviews]:"\u9884\u89C8\u7F29\u7565\u56FE",[pe.mediaFiles]:"\u89C6\u9891\u97F3\u9891",[pe.logs]:"\u751F\u6210\u8BB0\u5F55",[pe.meta]:"\u5143\u4FE1\u606F"},Gr=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024**3?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024**3).toFixed(2)} GB`:"0 B";async function ms(){let e={stores:[],total:0,usage:null,quota:null,unavailable:!1};try{await Ka()}catch(t){return{...e,unavailable:!0,reason:t?.message||"\u5B58\u50A8\u4E0D\u53EF\u7528"}}for(let t of oa){let n=0,r=0;await ja(t,(o,a)=>{n+=1,r+=us(a)}).catch(()=>{}),e.stores.push({name:t,label:Ol[t]||t,records:n,bytes:r}),e.total+=r}e.stores.sort((t,n)=>n.bytes-t.bytes);try{if(navigator.storage?.estimate){let t=await navigator.storage.estimate();Number.isFinite(t?.usage)&&t.usage>0&&(e.usage=t.usage,e.quota=t.quota??null)}}catch{}return e.usage===null&&(e.usage=e.total),e}function Ll(e){let t=new Set,n=(r,o=0)=>{if(!(!r||typeof r!="object"||o>8)){typeof r.storageKey=="string"&&r.storageKey&&t.add(r.storageKey);for(let a of Object.values(r))Array.isArray(a)?a.forEach(i=>n(i,o+1)):n(a,o+1)}};return n(e),t}async function Ul(e,{keepMs:t=168*36e5,now:n=Date.now()}={}){let r=Ll(e),o=[],a=0;for(let[i,c]of[[pe.imageFiles,"\u56FE\u7247"],[pe.imagePreviews,"\u9884\u89C8"],[pe.mediaFiles,"\u5A92\u4F53"]])await ja(i,(s,f)=>{if(r.has(s))return;let d=f?.at||0;if(d&&n-d<t)return;let m=us(f);o.push({store:i,label:c,key:s,bytes:m}),a+=m}).catch(()=>{});return{orphans:o,bytes:a}}async function co(e,{dryRun:t=!0,...n}={}){let r=await Ul(e,n);if(t)return{...r,deleted:0};let o=new Map;for(let i of r.orphans)o.has(i.store)||o.set(i.store,[]),o.get(i.store).push(i.key);let a=0;for(let[i,c]of o)a+=await Wn(i,c);return{...r,deleted:a}}var _l=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t+=1){let n=t;for(let r=0;r<8;r+=1)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function Kl(e){let t=4294967295;for(let n=0;n<e.length;n+=1)t=_l[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}var lo=new TextEncoder;function gs(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):e instanceof Blob?e.arrayBuffer().then(t=>new Uint8Array(t)):typeof e=="string"?lo.encode(e):lo.encode(String(e))}function jl(e=new Date){let t=(e.getHours()&31)<<11|(e.getMinutes()&63)<<5|Math.floor(e.getSeconds()/2)&31,n=(e.getFullYear()-1980&127)<<9|(e.getMonth()+1&15)<<5|e.getDate()&31;return{time:t,day:n}}function tt(e,t,n){e.setUint16(t,n,!0)}function Xt(e,t,n){e.setUint32(t,n>>>0,!0)}async function Fl(e,{date:t=new Date}={}){let n=[],{time:r,day:o}=jl(t);for(let v of e||[]){let P=String(v?.name||"").replace(/^\/+/,"");if(!P)continue;let T=v.data,A=T instanceof Blob?await gs(T):await gs(T),$=lo.encode(P),K=Kl(A);n.push({nameBytes:$,data:A,crc:K})}if(!n.length)throw new Error("\u6CA1\u6709\u53EF\u6253\u5305\u7684\u5185\u5BB9");let a=0;for(let v of n)a+=30+v.nameBytes.length+v.data.length;let i=0;for(let v of n)i+=46+v.nameBytes.length;let c=a+i+22,s=new Uint8Array(c),f=new DataView(s.buffer),d=0,m=[];for(let v of n)m.push(d),Xt(f,d,67324752),tt(f,d+4,20),tt(f,d+6,2048),tt(f,d+8,0),tt(f,d+10,r),tt(f,d+12,o),Xt(f,d+14,v.crc),Xt(f,d+18,v.data.length),Xt(f,d+22,v.data.length),tt(f,d+26,v.nameBytes.length),tt(f,d+28,0),d+=30,s.set(v.nameBytes,d),d+=v.nameBytes.length,s.set(v.data,d),d+=v.data.length;let p=d;return n.forEach((v,P)=>{Xt(f,d,33639248),tt(f,d+4,20),tt(f,d+6,20),tt(f,d+8,2048),tt(f,d+10,0),tt(f,d+12,r),tt(f,d+14,o),Xt(f,d+16,v.crc),Xt(f,d+20,v.data.length),Xt(f,d+24,v.data.length),tt(f,d+28,v.nameBytes.length),tt(f,d+30,0),tt(f,d+32,0),tt(f,d+34,0),tt(f,d+36,0),Xt(f,d+38,0),Xt(f,d+42,m[P]),d+=46,s.set(v.nameBytes,d),d+=v.nameBytes.length}),Xt(f,d,101010256),tt(f,d+4,0),tt(f,d+6,0),tt(f,d+8,n.length),tt(f,d+10,n.length),Xt(f,d+12,d-p),Xt(f,d+16,p),tt(f,d+20,0),new Blob([s],{type:"application/zip"})}async function hs(e,{getBlob:t,date:n=new Date}={}){let r=[],o={app:"dsh-chunfeng-image",version:1,exportedAt:new Date(n).toISOString(),canvases:(e?.canvases||[]).map(m=>({id:m.id,name:m.name,nodes:m.nodes?.length||0})),assets:(e?.assets||[]).length,prompts:(e?.prompts||[]).length,files:[]},a={canvases:e?.canvases||[],openCanvasId:e?.openCanvasId??null,grid:e?.grid||"dots"};r.push({name:"canvas.json",data:JSON.stringify(a,null,2)});let i=(e?.channels||[]).map(m=>{let{apiKey:p,...v}=m;return{...v,apiKey:"",hasKey:!!p}});r.push({name:"config.json",data:JSON.stringify({channels:i,defaults:e?.defaults||{},assistantModel:e?.assistantModel||"",promptSources:e?.promptSources||[]},null,2)}),r.push({name:"assets.json",data:JSON.stringify(e?.assets||[],null,2)}),r.push({name:"prompts.json",data:JSON.stringify(e?.prompts||[],null,2)});let c=new Set,s=(m,p=0)=>{if(!(!m||typeof m!="object"||p>6)){typeof m.storageKey=="string"&&m.storageKey&&c.add(m.storageKey);for(let v of Object.values(m))Array.isArray(v)?v.forEach(P=>s(P,p+1)):s(v,p+1)}};s(e?.canvases),s(e?.assets);let f=0;for(let m of c){let p=await t(m).catch(()=>null);if(!p?.size)continue;f+=1;let v=(p.type?.split("/")[1]||"png").replace("jpeg","jpg"),P=`images/${String(f).padStart(4,"0")}.${v}`;r.push({name:P,data:p}),o.files.push({storageKey:m,name:P,bytes:p.size,type:p.type})}return r.push({name:"manifest.json",data:JSON.stringify(o,null,2)}),{blob:await Fl(r,{date:n}),manifest:o,count:r.length}}Vn();kn();var Hl=[{id:"channels",label:"\u6E20\u9053"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"}];function vs({tab:e,onTab:t,channels:n,onChannels:r,defaults:o,onDefaults:a,promptSources:i,onPromptSources:c,say:s,state:f,onPrompts:d,onUsePrompt:m,onCopyPrompt:p,onSavePromptAsset:v,showToolbarLabels:P,onShowToolbarLabels:T,theme:A,onTheme:$}){let[K,Y]=M.default.useState(null),[I,L]=M.default.useState(null),[Z,ue]=M.default.useState({name:"",url:""}),[te,ee]=M.default.useState(""),Te=async N=>{if(!te){if(!N.apiKey){s?.("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key","error");return}ee(N.id);try{let G=await Ca(N),oe=new Set((N.models||[]).map(ce=>ce.id)),Le=[...N.models||[],...G.filter(ce=>!oe.has(ce.id)).map(ce=>({id:ce.id,label:ce.label,caps:[kr(ce.id)],enabled:!0,source:"pulled"}))];r(n.map(ce=>ce.id===N.id?{...ce,models:Le}:ce)),s?.(`\u62C9\u5230 ${G.length} \u4E2A\u6A21\u578B\uFF0C\u65B0\u589E ${Le.length-(N.models?.length||0)} \u4E2A`)}catch(G){s?.(G.message||"\u62C9\u53D6\u5931\u8D25","error")}finally{ee("")}}},E=async()=>{if(!te){ee("restore");try{let N=await la();if(!N?.channels?.length){s?.("\u672C\u673A\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u6062\u590D\u7684\u6E20\u9053","error");return}r(N.channels),s?.(`\u5DF2\u4ECE\u672C\u673A\u6587\u4EF6\u6062\u590D ${N.channels.length} \u4E2A\u6E20\u9053`)}catch(N){s?.(N.message||"\u6062\u590D\u5931\u8D25","error")}finally{ee("")}}},z=async N=>{if(!te){if(!N.apiKey){s?.("\u5148\u586B API Key \u518D\u8BCA\u65AD","error");return}ee(N.id);try{let G=Date.now(),oe=await Ca(N);s?.(`\u8FDE\u901A\u6B63\u5E38\uFF1A${Date.now()-G}ms\uFF0C\u4E0A\u6E38\u6709 ${oe.length} \u4E2A\u6A21\u578B`)}catch(G){s?.(`\u8BCA\u65AD\u5931\u8D25\uFF1A${G.message}`,"error")}finally{ee("")}}};return M.default.createElement("div",{className:"cf-page"},M.default.createElement("div",{className:"cf-page-inner"},M.default.createElement("div",{className:"cf-page-head"},M.default.createElement("div",null,M.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),M.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u9ED8\u8BA4\u53C2\u6570\u4E0E\u672C\u5730\u5B58\u50A8"))),M.default.createElement("div",{className:"cf-config-notice"},M.default.createElement("span",null,"JSON \u6587\u4EF6\u542B\u660E\u6587 API Key\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),M.default.createElement("span",{className:"cf-config-notice-actions"},M.default.createElement(J,{size:"sm",icon:"upload",onClick:()=>{let N=document.createElement("input");N.type="file",N.accept=".json,application/json",N.onchange=async()=>{let G=N.files?.[0];if(G)try{let oe=JSON.parse(await G.text());Array.isArray(oe.channels)&&r(oe.channels),oe.defaults&&a(oe.defaults),Array.isArray(oe.promptSources)&&c(oe.promptSources),s?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{s?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},N.click()}},"\u5BFC\u5165\u914D\u7F6E"),M.default.createElement(J,{size:"sm",icon:"download",onClick:()=>{let N={version:1,channels:n,defaults:o,promptSources:i},G=new Blob([JSON.stringify(N,null,2)],{type:"application/json"}),oe=document.createElement("a");oe.href=URL.createObjectURL(G),oe.download="chunfeng-config.json",oe.click(),setTimeout(()=>URL.revokeObjectURL(oe.href),2e3),s?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),M.default.createElement("div",{className:"cf-tabs",role:"tablist"},Hl.map(N=>M.default.createElement("button",{key:N.id,type:"button",role:"tab","aria-selected":e===N.id,className:`cf-tab${e===N.id?" is-on":""}`,onClick:()=>t(N.id)},N.label))),e==="channels"?M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"cf-section-head"},M.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\u3002"),M.default.createElement("div",{style:{display:"flex",gap:6}},M.default.createElement(J,{onClick:E,disabled:!!te},"\u4ECE\u672C\u673A\u6587\u4EF6\u6062\u590D"),M.default.createElement(J,{icon:"plus",onClick:()=>Y(Ua())},"\u65B0\u589E\u6E20\u9053"))),n.length===0?M.default.createElement(Rt,{icon:"gear",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:M.default.createElement(J,{variant:"primary",icon:"plus",onClick:()=>Y(Ua())},"\u65B0\u589E\u6E20\u9053")}):M.default.createElement("div",{className:"cf-channel-list"},n.map(N=>M.default.createElement("div",{key:N.id,className:"cf-channel"},M.default.createElement("div",{className:"cf-channel-main"},M.default.createElement("span",{className:"cf-channel-name"},N.name||"\u672A\u547D\u540D\u6E20\u9053"),M.default.createElement("span",{className:"cf-channel-meta"},lr.find(G=>G.id===N.protocol)?.label||N.protocol," \xB7 ",N.models.length," \u4E2A\u6A21\u578B"," \xB7 ",N.baseUrl,N.apiKey?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${N.keyHint||N.apiKey.slice(-4)}`:N.keyHint?" \xB7 \u5BC6\u94A5\u9700\u91CD\u586B\uFF08\u53EA\u6709\u672B\u56DB\u4F4D\uFF09":" \xB7 \u672A\u586B\u5BC6\u94A5")),M.default.createElement("span",{className:"cf-channel-actions"},M.default.createElement(Ke,{name:"refresh",label:"\u62C9\u53D6\u6A21\u578B",onClick:()=>Te(N)}),M.default.createElement(Ke,{name:"target",label:"\u8FDE\u901A\u6027\u8BCA\u65AD",onClick:()=>z(N)}),M.default.createElement(Ke,{name:"edit",label:"\u7F16\u8F91",onClick:()=>Y({...N})}),M.default.createElement(Ke,{name:"trash",label:"\u5220\u9664",onClick:()=>L(N)})))))):null,e==="defaults"?M.default.createElement(Xl,{channels:n,defaults:o,onDefaults:a,state:f,say:s,showToolbarLabels:P,onShowToolbarLabels:T,theme:A,onTheme:$}):null,e==="sources"?M.default.createElement(Yl,{promptSources:i,onPromptSources:c,say:s,onPrompts:d,onUsePrompt:m,onCopyPrompt:p,onSavePromptAsset:v}):null),K?M.default.createElement(Vl,{channel:K,isNew:!n.some(N=>N.id===K.id),onClose:()=>Y(null),onSave:N=>{let G=n.some(oe=>oe.id===N.id);r(G?n.map(oe=>oe.id===N.id?N:oe):[...n,N]),Y(null),s?.(G?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,I?M.default.createElement(lt,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>L(null),footer:M.default.createElement(M.default.Fragment,null,M.default.createElement(J,{onClick:()=>L(null)},"\u53D6\u6D88"),M.default.createElement(J,{variant:"danger",onClick:()=>{r(n.filter(N=>N.id!==I.id)),L(null),s?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},M.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",I.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",I.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function Yl({promptSources:e=[],onPromptSources:t,say:n,onPrompts:r,onUsePrompt:o,onCopyPrompt:a,onSavePromptAsset:i}){let[c,s]=M.default.useState({name:"",url:""}),[f,d]=M.default.useState(!1),[m,p]=M.default.useState(""),[v,P]=M.default.useState([]),[T,A]=M.default.useState(null),$=M.default.useRef(null),K=M.default.useMemo(()=>an(),[f,m,e]),Y=ui(e,v,K),I=new Set(e.map(N=>Yt(N).url)),L=Ur.filter(N=>!I.has(N.url)),Z=e.filter(N=>N&&N.url&&N.enabled!==!1),ue=Z.filter((N,G)=>Y.find(Le=>Le.id===N.id||Le.url===Yt(N).url)?.ok===!1||Ga(N,K)),te=async(N,{onlyPending:G=!1}={})=>{if(!(N||[]).filter(ce=>ce&&ce.url&&ce.enabled!==!1).length){n?.("\u5148\u6DFB\u52A0\u5E76\u542F\u7528\u81F3\u5C11\u4E00\u4E2A\u6765\u6E90","error");return}if(f){$.current?.abort();return}let Le=new AbortController;$.current=Le,d(!0),G||P([]);try{let ce=await va(N,{signal:Le.signal,onlyMissingOrFailed:G,onResult:(vt,Lt)=>{P(St=>[...St.filter(Ge=>Ge.url!==vt.url&&Ge.id!==vt.id),vt]),vt.ok&&r?.(void 0,Lt)}});if(G||P(ce.results),r?.(ce.prompts,ce.cache),ce.results.length===0&&ce.skipped>0){n?.(`\u5168\u90E8 ${ce.skipped} \u4E2A\u6765\u6E90\u5747\u5DF2\u6210\u529F\u7F13\u5B58\uFF0C\u65E0\u9700\u91CD\u590D\u62C9\u53D6`);return}let dt=ce.results.filter(vt=>vt.ok).length,bt=ce.results.length-dt,Ot=ce.skipped>0?`\uFF08\u8DF3\u8FC7 ${ce.skipped} \u4E2A\u5DF2\u7F13\u5B58\uFF09`:"";bt===0?n?.(`\u5DF2\u4ECE ${dt} \u4E2A\u6765\u6E90\u62C9\u5230 ${ce.prompts.length} \u6761\u63D0\u793A\u8BCD${Ot}`):n?.(`\u672C\u6B21 ${dt} \u6210\u529F / ${bt} \u5931\u8D25${Ot}\uFF0C\u5171 ${ce.prompts.length} \u6761\u53EF\u7528`,"error")}catch(ce){n?.(ce.message||"\u62C9\u53D6\u5931\u8D25","error")}finally{$.current=null,d(!1)}},ee=async N=>{if(!(f||m)){p(N.id);try{let{result:G,cache:oe}=await pi(N);P(Le=>[...Le.filter(ce=>ce.url!==G.url&&ce.id!==G.id),G]),G.ok?(r?.(void 0,oe),n?.(`\u5DF2\u4ECE\u300C${G.name}\u300D\u62C9\u5230 ${G.items.length} \u6761`)):n?.(`\u62C9\u53D6\u5931\u8D25\uFF1A${G.error||"\u672A\u77E5\u539F\u56E0"}`,"error")}catch(G){n?.(G.message||"\u62C9\u53D6\u5931\u8D25","error")}finally{p("")}}},Te=async()=>{if(!L.length)return;let N=[...e,...L];t?.(N),await te(N,{onlyPending:!0})},E=N=>{let G=e.map(oe=>oe.id===N.id?{...oe,enabled:oe.enabled===!1}:oe);t?.(G)},z=N=>{if(!N)return"";let G=new Date(N),oe=Date.now()-N;return oe<6e4?"\u521A\u521A":oe<36e5?`${Math.floor(oe/6e4)} \u5206\u949F\u524D`:oe<864e5?`${Math.floor(oe/36e5)} \u5C0F\u65F6\u524D`:G.toLocaleDateString("zh-CN")},H=T?Yt(T):null,ae=H?K[H.url]?.items||K[T.url]?.items||K[H.id]?.items||[]:[];return M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"cf-section-head"},M.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B JSON \u6765\u6E90\u62C9\u53D6\uFF0860 \u79D2\u8D85\u65F6\u3001\u81EA\u52A8\u5E76\u53D1\u5207\u6362 jsDelivr \u955C\u50CF\uFF0C\u5E76\u652F\u6301\u53EA\u91CD\u8BD5\u5931\u8D25\u9879\uFF09\u3002"),M.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"var(--cf-sp-2)",flexShrink:0}},!f&&ue.length>0&&ue.length<Z.length?M.default.createElement(J,{variant:"primary",icon:"refresh",onClick:()=>te(e,{onlyPending:!0})},"\u4EC5\u62C9\u53D6\u672A\u6210\u529F (",ue.length,")"):null,M.default.createElement(J,{icon:f?"stop":"refresh",onClick:()=>te(e)},f?"\u505C\u6B62":"\u62C9\u53D6\u5168\u90E8"))),M.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},M.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},M.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:c.name,onChange:N=>s(G=>({...G,name:N.target.value}))}),M.default.createElement("input",{className:"cf-input",placeholder:"https://example.com/prompts.json",value:c.url,onChange:N=>s(G=>({...G,url:N.target.value}))}),M.default.createElement(J,{variant:"primary",disabled:!c.url.trim(),onClick:()=>{let N=Yt({id:Ee("src"),name:c.name.trim(),url:c.url.trim()});t([...e,{id:N.id,name:N.name,url:N.url,fallbackUrl:N.fallbackUrl,homepage:N.homepage,enabled:!0,builtIn:N.builtIn}]),s({name:"",url:""}),n?.(N.convertedFromHomepage||N.convertedFromBlob?"\u6765\u6E90\u5DF2\u6DFB\u52A0\uFF08\u5DF2\u81EA\u52A8\u8F6C\u6362\u4E3A JSON \u76F4\u94FE\uFF09":"\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),L.length>0?M.default.createElement("div",{className:"cf-source-presets"},M.default.createElement("span",null,"\u8FD8\u6709 ",L.length," \u4E2A\u5B98\u65B9\u63D0\u793A\u8BCD\u6E90\u672A\u6DFB\u52A0\uFF08\u5305\u542B\u5C01\u9762\u56FE\u4E0E\u914D\u5957\u53C2\u8003\u56FE\uFF0C\u5171\u5343\u4F59\u6761\uFF09\u3002"),M.default.createElement(J,{size:"sm",icon:"plus",disabled:f,onClick:Te},"\u4E00\u952E\u6DFB\u52A0\u5E76\u62C9\u53D6 ",L.length," \u4E2A\u5B98\u65B9\u6765\u6E90")):null,e.length===0?M.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002\u70B9\u4E0A\u65B9\u6309\u94AE\u5373\u53EF\u4E00\u952E\u542F\u7528\u5168\u90E8\u5B98\u65B9\u6765\u6E90\u3002"):M.default.createElement("div",{style:{display:"grid",gap:2}},e.map((N,G)=>{let oe=Y[G],Le=N.enabled===!1;return M.default.createElement("div",{key:N.id,style:{padding:"10px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},M.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},M.default.createElement("input",{type:"checkbox",checked:!Le,onChange:()=>E(N),"aria-label":`\u542F\u7528 ${N.name}`,style:{accentColor:"var(--cf-accent)"}}),M.default.createElement("span",{style:{fontSize:13}},N.name),N.builtIn?M.default.createElement("span",{className:"cf-tag"},"\u5B98\u65B9"):null,M.default.createElement("span",{style:{fontSize:"var(--cf-fs-11)",padding:"1px 6px",borderRadius:"var(--cf-r-pill)",color:Le?"var(--cf-caption)":oe.ok===!0?"var(--cf-success)":oe.ok===!1?"var(--cf-danger)":"var(--cf-caption)",boxShadow:"inset 0 0 0 var(--cf-hair) currentColor"}},Le?"\u5DF2\u505C\u7528":oe.ok===!0?"\u6210\u529F":oe.ok===!1?"\u5931\u8D25":oe.count?"\u7F13\u5B58":"\u672A\u62C9\u53D6"),M.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:4,marginInlineStart:"auto"}},M.default.createElement(J,{size:"sm",onClick:()=>A(N)},"\u67E5\u770B"),M.default.createElement(J,{size:"sm",icon:"refresh",disabled:f||m===N.id||Le,onClick:()=>ee(N)},m===N.id?"\u62C9\u53D6\u4E2D":"\u62C9\u53D6"),M.default.createElement(Ke,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>t(e.filter(ce=>ce.id!==N.id))}))),M.default.createElement("div",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginTop:2}},oe.url||N.url),M.default.createElement("div",{style:{fontSize:12,color:oe.ok===!1?"var(--cf-danger)":"var(--cf-muted)",marginTop:2}},oe.ok===!1?`\u5931\u8D25\uFF1A${oe.error||"\u672A\u77E5\u539F\u56E0"}`:oe.count?`${oe.count} \u6761 \xB7 ${z(oe.at)}${oe.ms?` \xB7 ${oe.ms}ms`:""}`:"\u8FD8\u6CA1\u6709\u62C9\u53D6"))}))),T?M.default.createElement(rs,{source:T,items:ae,busy:m===T.id,onRefresh:()=>ee(T),onUse:o,onCopy:a,onSaveAsset:i,onClose:()=>A(null)}):null)}function Xl({channels:e,defaults:t,onDefaults:n,state:r,say:o,showToolbarLabels:a,onShowToolbarLabels:i,theme:c="system",onTheme:s}){let f=en(e,"image"),d=m=>n({...t,image:{...t.image,...m}});return M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"cf-section-head"},M.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),M.default.createElement("div",{className:"cf-defaults"},M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),M.default.createElement("select",{className:"cf-input",value:t.image.modelKey||"",onChange:m=>d({modelKey:m.target.value})},M.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),f.map(m=>M.default.createElement("option",{key:m.key,value:m.key},m.label," \xB7 ",m.channel.name||m.channel.protocol))),f.length===0?M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),M.default.createElement("div",{className:"cf-chips"},zn.map(m=>M.default.createElement("button",{key:m.id,type:"button",className:`cf-chip${t.image.ratio===m.id?" is-on":""}`,onClick:()=>d({ratio:m.id})},m.label)))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),M.default.createElement("div",{className:"cf-chips"},fr.map(m=>M.default.createElement("button",{key:m,type:"button",className:`cf-chip${t.image.quality===m?" is-on":""}`,onClick:()=>d({quality:m})},m)))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),M.default.createElement("div",{className:"cf-chips"},Xn.map(m=>M.default.createElement("button",{key:m,type:"button",className:`cf-chip${t.image.resolution===m?" is-on":""}`,onClick:()=>d({resolution:m})},m)))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),M.default.createElement("div",{className:"cf-chips"},[1,2,4].map(m=>M.default.createElement("button",{key:m,type:"button",className:`cf-chip${t.image.count===m?" is-on":""}`,onClick:()=>d({count:m})},m," \u5F20"))))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5DE5\u5177\u6761"),M.default.createElement("div",{className:"cf-chips"},M.default.createElement("button",{type:"button",className:`cf-chip${a?"":" is-on"}`,onClick:()=>i?.(!1)},"\u53EA\u663E\u793A\u56FE\u6807"),M.default.createElement("button",{type:"button",className:`cf-chip${a?" is-on":""}`,onClick:()=>i?.(!0)},"\u663E\u793A\u6587\u5B57")),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u9F20\u6807\u60AC\u505C\u5728\u753B\u5E03\u91CC\u7684\u56FE\u7247\u8282\u70B9\u4E0A\uFF0C\u4E0A\u65B9\u4F1A\u51FA\u73B0\u4E00\u6392\u64CD\u4F5C\u6309\u94AE\u3002")),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u5916\u89C2\u4E3B\u9898"),M.default.createElement("div",{className:"cf-chips"},[{id:"system",label:"\u8DDF\u968F\u7CFB\u7EDF"},{id:"light",label:"\u660E\u4EAE"},{id:"dark",label:"\u6697\u9ED1"}].map(m=>M.default.createElement("button",{key:m.id,type:"button",className:`cf-chip${c===m.id?" is-on":""}`,onClick:()=>s?.(m.id)},m.label)))),M.default.createElement(Wl,{state:r,say:o}))}function Wl({state:e,say:t}){let[n,r]=M.default.useState(null),[o,a]=M.default.useState(!1),[i,c]=M.default.useState(!1),s=M.default.useCallback(()=>{ms().then(r).catch(v=>r({unavailable:!0,reason:v.message}))},[]);M.default.useEffect(s,[s]);let f=async()=>{if(!i){c(!0);try{window.__CF_STORAGE__?.flush?.(),await new Promise(Y=>setTimeout(Y,120));let{blob:v,manifest:P,count:T}=await hs(e||{},{getBlob:Y=>et(pe.imageFiles,Y).then(I=>I?.blob||null)}),A=URL.createObjectURL(v),$=document.createElement("a"),K=new Date().toISOString().slice(0,10);$.href=A,$.download=`\u6625\u98CE\u753B\u5E03\u5907\u4EFD-${K}.zip`,$.click(),setTimeout(()=>URL.revokeObjectURL(A),4e3),t?.(`\u5DF2\u5BFC\u51FA\u5907\u4EFD\uFF1A${T} \u4E2A\u6587\u4EF6\uFF0C${(v.size/1024/1024).toFixed(1)} MB\uFF0C\u542B ${P.files.length} \u5F20\u56FE`)}catch(v){t?.(`\u5BFC\u51FA\u5931\u8D25\uFF1A${v.message}`,"error")}finally{c(!1)}}},d=async()=>{if(!o){a(!0);try{let v=await co(e||{},{dryRun:!0});if(!v.orphans.length){t?.("\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5B64\u513F\u6587\u4EF6");return}if(!window.confirm(`\u5C06\u5220\u9664 ${v.orphans.length} \u4E2A\u672A\u88AB\u5F15\u7528\u7684\u6587\u4EF6\uFF0C\u5171 ${Gr(v.bytes)}\u3002\u7EE7\u7EED\uFF1F`))return;let T=await co(e||{},{dryRun:!1});t?.(`\u5DF2\u6E05\u7406 ${T.deleted} \u4E2A\u6587\u4EF6\uFF0C\u91CA\u653E ${Gr(T.bytes)}`),s()}catch(v){t?.(`\u6E05\u7406\u5931\u8D25\uFF1A${v.message}`,"error")}finally{a(!1)}}};if(!n)return null;if(n.unavailable)return M.default.createElement("div",{className:"cf-field",style:{marginTop:"var(--cf-sp-5)"}},M.default.createElement("span",{className:"cf-label"},"\u672C\u5730\u5B58\u50A8"),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF1A",n.reason));let m=n.quota?Math.min(100,n.usage/n.quota*100):null,p=n.stores.filter(v=>v.bytes>0).map(v=>`${v.label} ${Gr(v.bytes)}`);return M.default.createElement("div",{className:"cf-field",style:{marginTop:"var(--cf-sp-5)",paddingTop:"var(--cf-sp-4)",borderTop:"var(--cf-hair) solid var(--cf-line)"}},M.default.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:"var(--cf-sp-3)",flexWrap:"wrap"}},M.default.createElement("span",{className:"cf-label"},"\u672C\u5730\u5B58\u50A8"),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)"}},"\u5DF2\u7528 ",Gr(n.usage),p.length?` \xB7 ${p.join(" \xB7 ")}`:""),m!==null?M.default.createElement("span",{style:{marginInlineStart:"auto",fontSize:12,color:m>80?"var(--cf-danger)":"var(--cf-caption)"}},"\u914D\u989D ",m.toFixed(1),"%"):null),M.default.createElement("div",{style:{display:"flex",gap:"var(--cf-sp-2)",marginTop:"var(--cf-sp-2)",flexWrap:"wrap"}},M.default.createElement(J,{size:"sm",icon:"download",disabled:i,onClick:f},i?"\u6253\u5305\u4E2D\u2026":"\u5BFC\u51FA\u5907\u4EFD\uFF08ZIP\uFF09"),M.default.createElement(J,{size:"sm",icon:"trash",disabled:o,onClick:d},"\u6E05\u7406\u672A\u5F15\u7528\u6587\u4EF6"),M.default.createElement(J,{size:"sm",onClick:s},"\u5237\u65B0")))}function Vl({channel:e,isNew:t,onClose:n,onSave:r,say:o}){let[a,i]=M.default.useState({...e}),[c,s]=M.default.useState(""),[f,d]=M.default.useState(""),m=(E,z)=>i(H=>({...H,[E]:z})),[p,v]=M.default.useState([]),[P,T]=M.default.useState(!1),[A,$]=M.default.useState(""),[K,Y]=M.default.useState(""),I=()=>c.trim()||a.apiKey||"",L=async()=>{if(!P){if(!String(a.baseUrl||"").trim()){$("\u5148\u586B Base URL");return}if(!I()){$("\u5148\u586B API Key");return}T(!0),$("");try{let E=await Ca({...a,apiKey:I()});v(E);let z=new Set(a.models.map(ae=>ae.id)),H=E.filter(ae=>!z.has(ae.id)).map(ae=>({id:ae.id,label:ae.label,caps:[kr(ae.id)],enabled:!0,source:"pulled"}));H.length&&m("models",[...a.models,...H]),$(`\u4E0A\u6E38\u8FD4\u56DE ${E.length} \u4E2A\u6A21\u578B${H.length?`\uFF0C\u65B0\u589E ${H.length} \u4E2A`:"\uFF0C\u6CA1\u6709\u65B0\u6A21\u578B"}`)}catch(E){$(E.message||"\u62C9\u53D6\u5931\u8D25")}finally{T(!1)}}},Z=E=>{if($(""),a.models.find(ae=>ae.id===E)){m("models",a.models.map(ae=>ae.id===E?{...ae,enabled:!ae.enabled}:ae));return}let H=p.find(ae=>ae.id===E);m("models",[...a.models,{id:E,label:H?.label||E,caps:[kr(E)],enabled:!0,source:"pulled"}])},ue=M.default.useMemo(()=>{let E=[],z=new Set;for(let H of a.models)z.has(H.id)||(z.add(H.id),E.push(H.id));for(let H of p)z.has(H.id)||(z.add(H.id),E.push(H.id));return E.map(H=>{let ae=a.models.find(G=>G.id===H),N=p.find(G=>G.id===H);return{id:H,label:ae?.label||N?.label||H,caps:ae?.caps||[],enabled:!!ae?.enabled,inChannel:!!ae,upstream:!!N,source:ae?.source||"pulled"}})},[a.models,p]),te=K.trim()?ue.filter(E=>E.id.toLowerCase().includes(K.trim().toLowerCase())):ue,ee=()=>{let E=f.trim();if(E){if(a.models.some(z=>z.id===E)){d("");return}m("models",[...a.models,{id:E,label:E,caps:[kr(E)],enabled:!0,source:"manual"}]),d("")}},Te=(E,z)=>{m("models",a.models.map(H=>{if(H.id!==E)return H;let ae=H.caps||[];return{...H,caps:ae.includes(z)?ae.filter(N=>N!==z):[...ae,z]}}))};return M.default.createElement(lt,{title:t?"\u65B0\u589E\u6E20\u9053":"\u7F16\u8F91\u6E20\u9053",wide:!0,onClose:n,footer:M.default.createElement(M.default.Fragment,null,M.default.createElement(J,{onClick:n},"\u53D6\u6D88"),M.default.createElement(J,{variant:"primary",disabled:!a.baseUrl.trim(),onClick:()=>{let E=c.trim()||a.apiKey||"";r({...a,apiKey:E,keyHint:E?E.slice(-4):"",hasKey:!!E})}},"\u4FDD\u5B58"))},M.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),M.default.createElement("input",{className:"cf-input",value:a.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:E=>m("name",E.target.value)})),M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),M.default.createElement("select",{className:"cf-input",value:a.protocol,onChange:E=>{let z=lr.find(H=>H.id===E.target.value);m("protocol",E.target.value),z&&m("baseUrl",z.baseUrl)}},lr.map(E=>M.default.createElement("option",{key:E.id,value:E.id},E.label))))),M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),M.default.createElement("input",{className:"cf-input",value:a.baseUrl,placeholder:"https://api.example.com/v1",onChange:E=>m("baseUrl",E.target.value)})),M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"API Key",a.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${a.keyHint}\uFF09`:""),M.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:c,placeholder:a.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:E=>s(E.target.value)}),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),M.default.createElement("div",{className:"cf-field"},M.default.createElement("div",{className:"cf-form-head"},M.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),M.default.createElement("div",{className:"cf-form-head-actions"},M.default.createElement(J,{size:"sm",icon:"refresh",onClick:L,disabled:P},P?"\u62C9\u53D6\u4E2D\u2026":"\u62C9\u53D6\u6A21\u578B"))),M.default.createElement("p",{className:"cf-model-note"},A||(ue.length?`\u5171 ${ue.length} \u4E2A\uFF0C\u5DF2\u542F\u7528 ${ue.filter(E=>E.enabled).length} \u4E2A`:"\u586B\u597D Base URL \u548C API Key\uFF0C\u70B9\u300C\u62C9\u53D6\u6A21\u578B\u300D\u4ECE\u4E0A\u6E38\u53D6\u5217\u8868\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6DFB\u52A0\u3002")),ue.length>8?M.default.createElement("input",{className:"cf-input",value:K,placeholder:"\u7B5B\u9009\u6A21\u578B\u2026",onChange:E=>Y(E.target.value),style:{marginBottom:6}}):null,te.length===0?null:M.default.createElement("div",{className:"cf-model-list"},te.map(E=>M.default.createElement("div",{key:E.id,className:`cf-model-row${E.enabled?" is-on":""}`},M.default.createElement("input",{type:"checkbox",checked:E.enabled,onChange:()=>Z(E.id),"aria-label":`\u542F\u7528 ${E.id}`}),M.default.createElement("span",{className:"cf-model-name",title:E.id},E.label||E.id),M.default.createElement("span",{className:"cf-model-tags"},E.inChannel?ta.map(z=>M.default.createElement("button",{key:z.id,type:"button",className:`cf-chip cf-chip--tag${(E.caps||[]).includes(z.id)?" is-on":""}`,onClick:()=>Te(E.id,z.id),title:`\u5207\u6362\u300C${z.label}\u300D\u80FD\u529B`},z.label)):M.default.createElement("span",{className:"cf-model-guess"},ta.find(z=>z.id===kr(E.id))?.label||"\u672A\u6807\u6CE8")),M.default.createElement("span",{className:"cf-model-src",title:E.upstream?"\u4E0A\u6E38\u8FD4\u56DE":"\u624B\u52A8\u6DFB\u52A0"},E.upstream?"\u4E0A\u6E38":"\u624B\u52A8"),E.inChannel?M.default.createElement(Ke,{name:"trash",label:`\u79FB\u9664 ${E.id}`,onClick:()=>m("models",a.models.filter(z=>z.id!==E.id))}):M.default.createElement("span",{className:"cf-model-hold"})))),M.default.createElement("div",{style:{display:"flex",gap:6,marginTop:8}},M.default.createElement("input",{className:"cf-input",value:f,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:E=>d(E.target.value),onKeyDown:E=>{E.key==="Enter"&&(E.preventDefault(),ee())}}),M.default.createElement(J,{onClick:ee,disabled:!f.trim()},"\u6DFB\u52A0"))),M.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u52FE\u9009\u5373\u542F\u7528\uFF1B\u53D6\u6D88\u52FE\u9009\u4F1A\u4FDD\u7559\u8FD9\u4E2A\u6A21\u578B\uFF08\u8FDE\u540C\u80FD\u529B\u6807\u7B7E\uFF09\uFF0C\u53EA\u662F\u4E0D\u53C2\u4E0E\u751F\u6210\u3002 \u70B9\u80FD\u529B\u5C0F\u6807\u7B7E\u53EF\u4EE5\u6539\u5224\u5B9A\u2014\u2014\u731C\u9519\u65F6\u5728\u8FD9\u91CC\u6539\u3002"))}var Op=gt.legacyState,Gl=[{id:"canvas",label:"\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD",icon:"book"},{id:"assets",label:"\u8D44\u4EA7",icon:"folder"}];function ql(){let e=$r();return e.canvases=[{...Tr("\u9713\u8679\u8857\u89D2"),...ko()}],e.openCanvasId=null,e}function bs(){let[e,t]=W.default.useState(ql),[n,r]=W.default.useState(!1),o=W.default.useRef(!1),a=W.default.useMemo(()=>na(typeof window<"u"&&window.__CF_DEV_PROMPT?window.__CF_DEV_PROMPT:""),[]),[i,c]=W.default.useState(""),[s,f]=W.default.useState(null),[d,m]=W.default.useState(null),[p,v]=W.default.useState(null),[P,T]=W.default.useState(!1),[A,$]=W.default.useState(!1),[K,Y]=W.default.useState(null),[I,L]=W.default.useState(!1),Z=W.default.useRef(0),ue=W.default.useRef(null);W.default.useEffect(()=>{let D=!0;return ra().then(O=>{D&&Y(O)}).catch(O=>{D&&Y({providers:[],error:O.message})}),()=>{D=!1}},[]),W.default.useEffect(()=>{if(o.current)return;o.current=!0;let D=!0;return(async()=>{try{let O=await Fo();O.status==="done"&&ee(`\u5DF2\u8FC1\u79FB ${O.canvases} \u4E2A\u753B\u5E03\u5230\u65B0\u5B58\u50A8`)}catch(O){ee(`\u672C\u5730\u6570\u636E\u8FC1\u79FB\u672A\u5B8C\u6210\uFF1A${O.message}`,"error")}try{let[O,ie]=await Promise.all([li().catch(()=>an()),Vo()]),{state:le,from:Ue}=ie,we=le&&Ue!=="none"?Dr(le):null,Me=ke=>{let Be=(ke.promptSources||[]).map(nt=>{let Xe=Yt(nt);return{id:Xe.id,name:Xe.name,url:Xe.url,fallbackUrl:Xe.fallbackUrl,homepage:Xe.homepage,enabled:Xe.enabled,builtIn:Xe.builtIn}});return{...ke,promptSources:Be,prompts:_r(ke.prompts,Be,O)}};D&&we&&t(Me(we));let Ie=le&&Array.isArray(le.channels)?le.channels:[];if(D&&Ie.length===0){let ke=await la();D&&ke?.channels?.length&&(t(Be=>Me(Dr({...Be,channels:ke.channels,defaults:ke.defaults||Be.defaults,assistantModel:ke.assistantModel??Be.assistantModel,promptSources:(Be.promptSources?.length?Be.promptSources:ke.promptSources)||Be.promptSources}))),ee(`\u5DF2\u4ECE\u672C\u673A\u6587\u4EF6\u6062\u590D ${ke.channels.length} \u4E2A\u6E20\u9053`))}}catch{}D&&r(!0)})(),()=>{D=!1}},[]),W.default.useEffect(()=>{n&&Go(e,{onError:(D,O)=>{ee(O?.quota?"\u672C\u5730\u5B58\u50A8\u5DF2\u6EE1\uFF0C\u672C\u6B21\u4FEE\u6539\u53EF\u80FD\u4E22\u5931":`\u4FDD\u5B58\u5931\u8D25\uFF1A${D.message}`,"error")}})},[e,n]),W.default.useEffect(()=>{let D=()=>{fa()},O=()=>{document.visibilityState==="hidden"&&D()};return window.addEventListener("pagehide",D),document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("pagehide",D),document.removeEventListener("visibilitychange",O)}},[]);let te=W.default.useRef(e);te.current=e;let ee=W.default.useCallback((D,O)=>{v({text:D,kind:O,at:Date.now()}),clearTimeout(Z.current),Z.current=setTimeout(()=>v(null),2200)},[]);W.default.useEffect(()=>()=>{clearTimeout(Z.current),ue.current?.abort()},[]);let Te=W.default.useCallback(D=>{let O=D?.storageKey||D?.images?.[0]?.storageKey||"";z({view:"studio",openCanvasId:null}),c(D?.prompt||""),f(O?{storageKey:O,prompt:D.prompt||""}:null),ee(O?"\u5DF2\u9001\u53BB\u5DE5\u4F5C\u53F0\uFF08\u56FE\u4F5C\u4E3A\u53C2\u8003\u56FE\uFF09":"\u5DF2\u9001\u53BB\u5DE5\u4F5C\u53F0\uFF08\u8FD9\u4E2A\u8282\u70B9\u6CA1\u6709\u56FE\u7247\uFF09")},[ee]),E=W.default.useCallback((D,O={})=>{let ie=(D?.images||[]).filter(ke=>ke.storageKey);if(!ie.length)return ee("\u8FD9\u6279\u56FE\u6CA1\u6709\u672C\u5730\u526F\u672C\uFF0C\u5148\u91CD\u65B0\u751F\u6210\u518D\u9001","error"),null;let le=te.current,Ue=le.canvases.find(ke=>ke.id===le.openCanvasId)||le.canvases[0]||null,we=(D.prompt||"\u751F\u6210\u7ED3\u679C").slice(0,16),Me=Ue?.id||null,Ie=Ue?.name||we;return t(ke=>{let Be=(Me?ke.canvases.find(Fe=>Fe.id===Me):null)||Tr(we),nt=Be.nodes||[],Xe=80,Wt=120;if(nt.length){let Fe=-1/0,Ze=1/0;for(let zt of nt)zt.type!=="group"&&(Fe=Math.max(Fe,zt.x+(zt.w||240)),Ze=Math.min(Ze,zt.y));Number.isFinite(Fe)&&(Xe=Fe+80,Wt=Number.isFinite(Ze)?Ze:120)}let Ne=ie.map((Fe,Ze)=>dn({storageKey:Fe.storageKey,width:Fe.width||0,height:Fe.height||0,bytes:Fe.bytes||0,mimeType:Fe.mimeType||"",prompt:D.prompt||""})),Oe=Ne[0],mt=Oe?.width&&Oe?.height?Tn(`${Oe.width}:${Oe.height}`):Tn("1:1"),Re={...ft("image",{x:Xe,y:Wt},{prompt:D.prompt,ratio:D.ratio}),x:Xe,y:Wt,...mt,status:"done",prompt:D.prompt||"",images:Ne,primaryImageId:Oe?.id||"",storageKey:Oe?.storageKey||""},rt={...Be,nodes:[...nt,Re],updatedAt:Date.now()},ct=ke.canvases.some(Fe=>Fe.id===Be.id)?ke.canvases.map(Fe=>Fe.id===Be.id?rt:Fe):[...ke.canvases,rt];return{...ke,canvases:ct,openCanvasId:Be.id,canvasPickedIds:[Re.id]}}),ee(`\u5DF2\u9001\u5230\u753B\u5E03\u300C${Ie}\u300D`),Ie},[ee]),z=D=>t(O=>({...O,...D})),H=e.canvases.find(D=>D.id===e.openCanvasId)||null,ae=No(e),N=e.assistantMessages||[],G=e.assistantModel||K?.default||null,oe=zo(K,G)||"\u6A21\u578B",Le=D=>{m(null),T(!1),t(O=>Mo(O,D))},ce=(D,O)=>t(ie=>({...ie,canvases:ie.canvases.map(le=>{if(le.id!==D)return le;let Ue=typeof O=="function"?O(le):O;return{...le,...Ue,updatedAt:Date.now()}})})),dt=()=>{let D=Tr();t(O=>({...O,canvases:[D,...O.canvases],openCanvasId:D.id,view:"canvas"})),ee("\u5DF2\u65B0\u5EFA\u753B\u5E03")},bt=()=>{let D=document.createElement("input");D.type="file",D.accept=".json,application/json",D.onchange=async()=>{let O=D.files?.[0];if(O)try{let ie=JSON.parse(await O.text()),le={...Tr(ie.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(ie.nodes)?ie.nodes:[],edges:Array.isArray(ie.edges)?ie.edges:[],grid:ie.grid||"dots"};t(Ue=>({...Ue,canvases:[le,...Ue.canvases],openCanvasId:le.id,view:"canvas"})),ee("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{ee("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},D.click()},Ot=W.default.useCallback(async()=>{let D=new Set((te.current.promptSources||[]).map(Me=>Yt(Me).url)),O=Ur.filter(Me=>!D.has(Me.url)),ie=[...te.current.promptSources||[],...O];t(Me=>({...Me,promptSources:ie})),ee("\u6B63\u5728\u62C9\u53D6\u5B98\u65B9\u63D0\u793A\u8BCD\u6765\u6E90\u2026");let le=await va(ie,{onlyMissingOrFailed:!0});t(Me=>({...Me,promptSources:ie,prompts:_r(Me.prompts,ie,le.cache)}));let Ue=le.results.filter(Me=>Me.ok).length,we=le.results.length-Ue;we===0?ee(`\u5DF2\u52A0\u8F7D ${le.prompts.length} \u6761\u63D0\u793A\u8BCD`):ee(`\u672C\u6B21 ${Ue} \u6210\u529F / ${we} \u5931\u8D25\uFF0C\u5171 ${le.prompts.length} \u6761\u53EF\u7528`,"error")},[ee]),vt=W.default.useCallback(async D=>{let O=D?.text||D?.prompt||"";if(O)try{await navigator.clipboard.writeText(O),ee("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{let ie=document.createElement("textarea");ie.value=O,ie.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(ie),ie.select();try{document.execCommand("copy"),ee("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{ee("\u590D\u5236\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u526A\u8D34\u677F","error")}finally{document.body.removeChild(ie)}}},[ee]),Lt=W.default.useCallback(D=>{if(!D)return;let O={id:Ee("a"),kind:"text",title:D.title||"\u6536\u85CF\u7684\u63D0\u793A\u8BCD",text:D.text||D.prompt||"",coverUrl:D.coverUrl||"",tags:Array.isArray(D.tags)?D.tags:[],source:D.category||D.sourceName||"\u63D0\u793A\u8BCD\u4E2D\u5FC3",at:Date.now()};t(ie=>({...ie,assets:[O,...ie.assets]})),ee("\u5DF2\u6536\u85CF\u5230\u6211\u7684\u8D44\u4EA7")},[ee]),St=W.default.useCallback(async(D,{withRefs:O=!0}={})=>{let ie=D?.text||D?.prompt||"",le=O&&Array.isArray(D?.referenceImageUrls)?D.referenceImageUrls.filter(Boolean):[],Ue=te.current.canvases.find(we=>we.id===te.current.openCanvasId)||null;if(Ue){let we=te.current.defaults?.image?.ratio||"1:1",Me=Tn(we),Ie=220+Ue.nodes.length*26,ke=220+Ue.nodes.length*20,Be={id:Ee("i"),type:"image",x:Ie,y:ke,w:Me.w,h:Me.h,name:"",status:"idle",z:2,prompt:ie,ratio:we,locked:!0};if(ce(Ue.id,nt=>({nodes:[...nt.nodes,Be]})),le.length){ee(`\u5DF2\u7528\u300C${D.title}\u300D\u5EFA\u8282\u70B9\uFF0C\u6B63\u5728\u52A0\u8F7D ${le.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let nt=await nr(le,{max:4});if(nt.length){let Xe=nt.map((Ne,Oe)=>{let mt=Ne.width&&Ne.height?Ne.width/Ne.height:1,Re=200,rt=Math.round(Re/Math.max(.25,Math.min(4,mt)))+28;return{...ft("image",{x:Ie-280,y:ke+Oe*(rt+16)},{w:Re,h:rt}),x:Ie-280,y:ke+Oe*(rt+16),status:"done",storageKey:Ne.storageKey,images:[dn({storageKey:Ne.storageKey,width:Ne.width,height:Ne.height,prompt:""})],primaryImageId:"",name:`\u53C2\u8003\u56FE ${Oe+1}`}}).map(Ne=>({...Ne,primaryImageId:Ne.images[0]?.id||""})),Wt=Xe.map(Ne=>({id:Ee("e"),from:Ne.id,to:Be.id}));ce(Ue.id,Ne=>({nodes:[...Ne.nodes,...Xe],edges:[...Ne.edges,...Wt]})),ee(`\u5DF2\u6302\u8F7D ${nt.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u5230\u753B\u5E03\u8282\u70B9`);return}}ee(`\u5DF2\u7528\u300C${D.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}if(c(ie),z({view:"studio",openCanvasId:null}),le.length){ee(`\u5DF2\u586B\u5165\u300C${D.title}\u300D\uFF0C\u6B63\u5728\u52A0\u8F7D ${le.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let we=await nr(le,{max:4});we.length?(f(we.map(Me=>({storageKey:Me.storageKey,name:Me.name}))),ee(`\u5DF2\u586B\u5165\u63D0\u793A\u8BCD\u5E76\u52A0\u8F7D ${we.length} \u5F20\u53C2\u8003\u56FE`)):ee(`\u5DF2\u586B\u5165\u300C${D.title}\u300D\uFF08\u914D\u5957\u53C2\u8003\u56FE\u62C9\u53D6\u5931\u8D25\uFF09`)}else ee(`\u5DF2\u586B\u5165\u300C${D.title}\u300D`)},[ee]),Ge=D=>{z({assistantModel:D||null}),$(!1)},st=async()=>{let D=a.get().trim();if(!D||I)return;let O={id:Ee("m"),role:"user",text:D},ie={id:Ee("m"),role:"assistant",text:""},le=[...N,O];z({assistantMessages:[...le,ie]}),a.set("");let Ue=new AbortController;ue.current=Ue,L(!0);let we=Me=>t(Ie=>({...Ie,assistantMessages:(Ie.assistantMessages||[]).map(ke=>ke.id===ie.id?Me(ke):ke)}));try{let Me=0,Ie="";await Pr({model:e.assistantModel||null,messages:le.map(ke=>({role:ke.role,text:ke.text})),signal:Ue.signal,onDelta:(ke,Be)=>{Ie=Be;let nt=Date.now();nt-Me>60&&(Me=nt,we(Xe=>({...Xe,text:Be})))}}),we(ke=>({...ke,text:Ie}))}catch(Me){we(Ie=>({...Ie,text:`${Ie.text||""}

\uFF08\u5931\u8D25\uFF1A${Me.message}\uFF09`}))}finally{L(!1),ue.current=null}},Ye=()=>{ue.current?.abort(),L(!1)},yt=D=>{let O=H;if(!O){ee("\u5148\u6253\u5F00\u4E00\u5F20\u753B\u5E03\u518D\u63D2\u5165");return}let ie=ft("text",{x:420,y:320},{text:D.text});ie.x=160+O.nodes.length%6*28,ie.y=180+O.nodes.length%6*24,ce(O.id,{nodes:[...O.nodes,ie]}),ee("\u5DF2\u63D2\u5165\u753B\u5E03")};W.default.useLayoutEffect(()=>{if(typeof document>"u"||document.querySelector("style[data-cf-styles]"))return;let D=[...document.head.querySelectorAll("style")].find(ie=>ie.textContent?.includes(".cf-app"));if(D){D.setAttribute("data-cf-styles","1");return}let O=document.createElement("style");O.setAttribute("data-cf-styles","1"),O.textContent=bo,document.head.appendChild(O)},[]);let Qe=e.theme==="dark"?" dark":e.theme==="light"?" light":"";return W.default.createElement("div",{className:`cf-app${Qe}`},W.default.createElement("header",{className:"cf-nav"},W.default.createElement("div",{className:"cf-island cf-island--nav"},W.default.createElement("nav",{className:"cf-nav-glass","aria-label":"\u4E3B\u5BFC\u822A"},Gl.map(D=>{let O=D.id==="canvas"?ae==="canvas"||ae==="editor":ae===D.id;return W.default.createElement("button",{key:D.id,type:"button",className:O?"is-on":"",onClick:()=>Le(D.id),"aria-current":O?"page":void 0},D.label)}))),W.default.createElement("div",{className:"cf-nav-right"},W.default.createElement("button",{type:"button",className:"cf-glass-btn",onClick:()=>$(!0),title:`\u52A9\u624B\u6A21\u578B\uFF1A${oe}`},W.default.createElement(he,{name:"sparkle",size:14}),W.default.createElement("span",null,oe)),W.default.createElement("button",{type:"button",className:"cf-glass-btn cf-glass-btn--icon",title:"\u914D\u7F6E","aria-label":"\u914D\u7F6E",onClick:()=>Le("config")},W.default.createElement(he,{name:"gear",size:15})),W.default.createElement("button",{type:"button",className:`cf-glass-btn cf-glass-btn--dock${P?" is-on":""}`,"aria-pressed":P,onClick:()=>T(D=>!D)},W.default.createElement(he,{name:"message",size:14}),"\u52A9\u624B"))),W.default.createElement(sr,{key:ae},ae==="editor"&&H?W.default.createElement(is,{canvas:H,channels:e.channels,defaults:e.defaults.image,assistantModel:e.assistantModel||null,prompts:e.prompts,onSendToStudio:Te,draftStore:a,showComposer:!P,onChange:D=>ce(H.id,D),onBack:()=>t(D=>Ao(D)),onSaveAsset:D=>t(O=>({...O,assets:[D,...O.assets]})),showToolbarLabels:e.showToolbarLabels,theme:e.theme||"system",onTheme:D=>z({theme:D}),say:ee}):null,ae==="canvas"?W.default.createElement(os,{canvases:e.canvases,onOpen:D=>t(O=>Co(O,D)),onCreate:dt,onRename:(D,O)=>ce(D,{name:O}),onDelete:D=>t(O=>({...O,canvases:O.canvases.filter(ie=>ie.id!==D),openCanvasId:null})),onImport:bt}):null,ae==="studio"?W.default.createElement(cs,{channels:e.channels,defaults:e.defaults.image,records:e.records,assets:e.assets,prompts:e.prompts,prompt:i,onPrompt:c,onCreateRecord:D=>t(O=>({...O,records:[D,...O.records]})),onUpdateRecord:(D,O)=>t(ie=>({...ie,records:ie.records.map(le=>le.id===D?typeof O=="function"?O(le):{...le,...O}:le)})),onDeleteRecords:D=>t(O=>({...O,records:O.records.filter(ie=>!D.includes(ie.id))})),onSaveAsset:D=>t(O=>({...O,assets:[D,...O.assets]})),onLookupPrompts:()=>{m("studio"),z({view:"prompts",openCanvasId:null})},onSendToCanvas:E,initialRefs:Array.isArray(s)?s:null,initialRef:Array.isArray(s)?null:s,onConsumeRef:()=>f(null),say:ee}):null,ae==="prompts"?W.default.createElement(ds,{prompts:e.prompts,sources:e.promptSources,returnTo:d,onUse:St,onCopy:vt,onSaveAsset:Lt,onEnableBuiltins:Ot,onBack:d?()=>{m(null),z({view:d})}:null}):null,ae==="assets"?W.default.createElement(ps,{assets:e.assets,onSave:D=>z({assets:D}),onDelete:D=>t(O=>({...O,assets:O.assets.filter(ie=>ie.id!==D)})),onImport:D=>t(O=>({...O,assets:[...D,...O.assets]})),say:ee}):null,ae==="config"?W.default.createElement(vs,{tab:e.configTab,onTab:D=>z({configTab:D}),channels:e.channels,onChannels:D=>z({channels:D}),defaults:e.defaults,onDefaults:D=>z({defaults:D}),promptSources:e.promptSources,onPromptSources:D=>t(O=>({...O,promptSources:D,prompts:_r(O.prompts,D,an())})),showToolbarLabels:e.showToolbarLabels,onShowToolbarLabels:D=>z({showToolbarLabels:D}),theme:e.theme||"system",onTheme:D=>z({theme:D}),onPrompts:(D,O)=>{t(ie=>({...ie,prompts:_r(ie.prompts,ie.promptSources,O||an())}))},onUsePrompt:St,onCopyPrompt:vt,onSavePromptAsset:Lt,say:ee,state:e}):null),P?W.default.createElement(Ql,{messages:N,draftStore:a,streaming:I,onSend:st,onStop:Ye,onClose:()=>T(!1),onInsert:yt,onClear:()=>z({assistantMessages:[]}),canInsert:!!H,modelLabelText:oe}):null,A?W.default.createElement(Jl,{models:K,selection:G,onPick:Ge,onClose:()=>$(!1)}):null,p?W.default.createElement(yo,{text:p.text,kind:p.kind}):null)}function Jl({models:e,selection:t,onPick:n,onClose:r}){let[o,a]=W.default.useState(""),i=e?.providers||[],c=o.trim().toLowerCase(),s=i.map(f=>({...f,models:f.models.filter(d=>!c||(d.name||d.id).toLowerCase().includes(c)||f.name.toLowerCase().includes(c))})).filter(f=>f.models.length);return W.default.createElement(lt,{title:"\u52A9\u624B\u6A21\u578B",wide:!0,onClose:r,footer:W.default.createElement("span",{style:{marginInlineEnd:"auto",fontSize:12,color:"var(--cf-caption)"}},e?.error?`\u8BFB\u53D6\u5931\u8D25\uFF1A${e.error}`:`\u6765\u81EA DSH \u5F53\u524D\u4F9B\u5E94\u7684 ${i.reduce((f,d)=>f+d.models.length,0)} \u4E2A\u6A21\u578B`)},W.default.createElement("button",{type:"button",className:`cf-chip${t?.model?"":" is-on"}`,style:{justifySelf:"start"},onClick:()=>n(null)},"\u8DDF\u968F DSH \u9ED8\u8BA4"),W.default.createElement("input",{className:"cf-input",value:o,placeholder:"\u641C\u7D22\u6A21\u578B\u6216\u5382\u5546",onChange:f=>a(f.target.value)}),s.length===0?W.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},e===null?"\u6B63\u5728\u8BFB\u53D6\u6A21\u578B\u2026":c?"\u6CA1\u6709\u5339\u914D\u7684\u6A21\u578B":"DSH \u91CC\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6A21\u578B"):W.default.createElement("div",{style:{display:"grid",gap:"var(--cf-sp-3)"}},s.map(f=>W.default.createElement("div",{key:f.id,style:{display:"grid",gap:2}},W.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",paddingInline:4}},f.name),f.models.map(d=>{let m=t?.provider===f.id&&t?.model===d.id;return W.default.createElement("button",{key:d.id,type:"button",className:`cf-menu-item${m?" is-on":""}`,onClick:()=>n({provider:f.id,model:d.id})},W.default.createElement("span",{className:"cf-menu-label"},d.name),m?W.default.createElement(he,{name:"check",size:14}):null)})))))}function Ql({messages:e,draftStore:t,streaming:n,onSend:r,onStop:o,onClose:a,onInsert:i,onClear:c,canInsert:s,modelLabelText:f}){let d=W.default.useSyncExternalStore(t.subscribe,t.get,t.get),m=T=>t.set(T),p=W.default.useRef(null),v=W.default.useRef(null),P=W.default.useRef(0);return W.default.useEffect(()=>{let T=p.current;T&&(T.scrollTop=T.scrollHeight)},[e]),W.default.useEffect(()=>{v.current?.focus()},[]),W.default.createElement("aside",{className:"cf-dock","aria-label":"\u52A9\u624B"},W.default.createElement("header",{className:"cf-dock-head"},W.default.createElement(he,{name:"message",size:15}),W.default.createElement("span",{className:"cf-dock-title"},"\u52A9\u624B"),W.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},f),e.length?W.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:c},"\u6E05\u7A7A"):null,W.default.createElement(Ke,{name:"close",label:"\u5173\u95ED\u52A9\u624B",onClick:a})),W.default.createElement("div",{className:"cf-dock-body",ref:p},e.length===0?W.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u95EE\u70B9\u4EC0\u4E48\uFF0C\u6216\u8005\u628A\u753B\u5E03\u8F93\u5165\u6846\u91CC\u7684\u8349\u7A3F\u5E26\u8FC7\u6765\u7EE7\u7EED\u5199\u3002"):e.map(T=>W.default.createElement("div",{key:T.id,className:`cf-msg cf-msg--${T.role}`},W.default.createElement("div",{className:"cf-msg-text"},T.text||(T.role==="assistant"&&n?"\u2026":"")),T.role==="assistant"&&T.text?W.default.createElement("div",{className:"cf-msg-actions"},W.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",disabled:!s,onClick:()=>i(T)},"\u63D2\u5165\u753B\u5E03")):null))),W.default.createElement("div",{className:"cf-dock-foot"},W.default.createElement("textarea",{ref:v,className:"cf-dock-input",value:d,placeholder:"\u7ED9\u52A9\u624B\u8BF4\u70B9\u4EC0\u4E48",onChange:T=>m(T.target.value),onCompositionStart:()=>{P.current=Date.now()},onCompositionEnd:()=>{P.current=Date.now()},onKeyDown:T=>{T.key==="Enter"&&(T.nativeEvent.isComposing||Date.now()-P.current<500||T.shiftKey||(T.preventDefault(),P.current=0,r()))}}),W.default.createElement("div",{className:"cf-dock-bar"},W.default.createElement("span",{style:{fontSize:11,color:"var(--cf-caption)"}},s?"\u56DE\u590D\u53EF\u63D2\u5165\u5F53\u524D\u753B\u5E03":"\u6253\u5F00\u4E00\u5F20\u753B\u5E03\u540E\u53EF\u63D2\u5165"),n?W.default.createElement("button",{type:"button",className:"cf-send",onClick:o,"aria-label":"\u505C\u6B62","data-tip":"\u505C\u6B62"},W.default.createElement(he,{name:"stop",size:13})):W.default.createElement("button",{type:"button",className:"cf-send",onClick:r,disabled:!d.trim(),"aria-label":"\u53D1\u9001","data-tip":"\u53D1\u9001"},W.default.createElement(he,{name:"arrowUp",size:17})))))}var ys="dsh-chunfeng-image",Zl=["slots"];function Rl(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:ys},tf)),e.effect(()=>{let t=null;return(()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:ys,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},ef))})(),()=>t?.()},"dsh-chunfeng-image: sidebar entry")}function ef(){return Aa.default.createElement(he,{name:"image",size:16})}function tf(){return Aa.default.createElement(sr,null,Aa.default.createElement(bs,null))}
return module.exports}})
