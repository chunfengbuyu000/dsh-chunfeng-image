window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Bs=Object.create;var ea=Object.defineProperty;var Os=Object.getOwnPropertyDescriptor;var Ls=Object.getOwnPropertyNames;var Us=Object.getPrototypeOf,_s=Object.prototype.hasOwnProperty;var Yn=(e,t)=>()=>(e&&(t=e(e=0)),t);var ho=(e,t)=>{for(var n in t)ea(e,n,{get:t[n],enumerable:!0})},vo=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ls(t))!_s.call(e,o)&&o!==n&&ea(e,o,{get:()=>t[o],enumerable:!(r=Os(t,o))||r.enumerable});return e};var Zt=(e,t,n)=>(n=e!=null?Bs(Us(e)):{},vo(t||!e||!e.__esModule?ea(n,"default",{value:e,enumerable:!0}):n,e)),Ks=e=>vo(ea({},"__esModule",{value:!0}),e);var oa,pe,ia,ht,Te,It,kn=Yn(()=>{oa="dsh-chunfeng-image",pe={appState:"app_state",imageFiles:"image_files",imagePreviews:"image_previews",mediaFiles:"media_files",logs:"logs",meta:"meta"},ia=Object.values(pe),ht={legacyState:"dsh-chunfeng-image:state:v2",config:"dsh-cf:config:v1",configBackup:"dsh-cf:config:backup",ui:"dsh-cf:ui:v1"},Te={canvasProjects:"canvas:projects",prompts:"prompts",promptSources:"promptSources",promptCache:"promptCache",assets:"assets",assistantMessages:"assistantMessages",logOne:e=>`log:${e}`,schemaVersion:"schemaVersion",migratedAt:"migratedAt",migrationLock:"migrationLock",migrationStatus:"migration",rawBackup:"rawBackup"},It={QUOTA:"quota",VERSION:"version",BLOCKED:"blocked",CLOSED:"closed",UNAVAILABLE:"unavailable",ABORT:"abort",ERROR:"error"}});function Lo(e){if(!e)return It.ERROR;let t=e.name||"";return t==="QuotaExceededError"||t==="NS_ERROR_DOM_QUOTA_REACHED"||e.code===22||e.code===1014?It.QUOTA:t==="VersionError"?It.VERSION:t==="InvalidStateError"?It.CLOSED:t==="AbortError"?It.ABORT:t==="SecurityError"?It.UNAVAILABLE:t==="UnknownError"?It.UNAVAILABLE:It.ERROR}function Uo(e){return e instanceof Zn?e.kind===It.QUOTA:Lo(e)===It.QUOTA}function pr(e,t,n){if(e instanceof Zn)return e;let r=Lo(e),o=r===It.QUOTA?"\uFF08\u672C\u5730\u5B58\u50A8\u914D\u989D\u5DF2\u6EE1\uFF09":"";return new Zn(`${n}${o}`,{cause:e,kind:r,store:t})}function Fa(){return tn.db?Promise.resolve(tn.db):(tn.opening||(tn.opening=new Promise((e,t)=>{if(typeof indexedDB>"u"||indexedDB===null){t(new Zn("IndexedDB \u4E0D\u53EF\u7528\uFF08\u9690\u79C1\u6A21\u5F0F\u6216\u53D7\u9650\u7684 iframe \u73AF\u5883\uFF09",{kind:It.UNAVAILABLE}));return}let n;try{n=indexedDB.open(oa,1)}catch(r){t(pr(r,oa,"\u6253\u5F00\u6570\u636E\u5E93\u5931\u8D25"));return}n.onupgradeneeded=()=>{let r=n.result;for(let o of ia)r.objectStoreNames.contains(o)||r.createObjectStore(o)},n.onblocked=()=>{t(new Zn("\u6570\u636E\u5E93\u5347\u7EA7\u88AB\u5176\u5B83\u7A97\u53E3\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875\u540E\u91CD\u8BD5",{kind:It.BLOCKED}))},n.onerror=()=>t(pr(n.error,oa,"\u6253\u5F00\u6570\u636E\u5E93\u5931\u8D25")),n.onsuccess=()=>{let r=n.result;r.onversionchange=()=>{try{r.close()}catch{}tn.db=null,tn.opening=null},r.onclose=()=>{tn.db=null,tn.opening=null},tn.db=r,e(r)}}).catch(e=>{throw tn.opening=null,e})),tn.opening)}async function Rn(e,t,n){let r=await Fa(),o;try{o=r.transaction(e,t)}catch(c){throw pr(c,e,`\u5F00\u542F\u4E8B\u52A1\u5931\u8D25\uFF1A${e}`)}let a=new Promise((c,s)=>{o.oncomplete=()=>c(),o.onabort=()=>s(pr(o.error||new Error("\u4E8B\u52A1\u88AB\u4E2D\u6B62"),e,"\u4E8B\u52A1\u88AB\u4E2D\u6B62")),o.onerror=()=>s(pr(o.error||new Error("\u4E8B\u52A1\u5931\u8D25"),e,"\u4E8B\u52A1\u5931\u8D25"))}),i;try{i=await n(o.objectStore(e))}catch(c){try{o.abort()}catch{}throw await a.catch(()=>{}),pr(c,e,`\u5199\u5165\u5931\u8D25\uFF1A${e}`)}return await a,i}function nt(e,t){return Rn(e,"readonly",n=>ur(n.get(t)))}function pn(e,t,n){return Rn(e,"readwrite",r=>ur(r.put(n,t)))}function mr(e,t){return Rn(e,"readwrite",async n=>{for(let[r,o]of t)await ur(n.put(o,r));return t.length})}function Wn(e,t){return Rn(e,"readwrite",async n=>{for(let r of t)await ur(n.delete(r));return t.length})}function _o(e){return Rn(e,"readwrite",t=>ur(t.clear()))}function Ko(e){return Rn(e,"readonly",t=>ur(t.getAll()))}function Ha(e,t){return Rn(e,"readonly",n=>new Promise((r,o)=>{let a=n.openCursor();a.onsuccess=()=>{let i=a.result;if(!i){r();return}t(i.key,i.value),i.continue()},a.onerror=()=>o(a.error)}))}var Zn,tn,ur,Vn=Yn(()=>{kn();Zn=class extends Error{constructor(t,{cause:n,kind:r=It.ERROR,store:o=""}={}){super(t),this.name="StorageError",this.kind=r,this.store=o,n&&(this.cause=n)}};tn={db:null,opening:null};ur=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)})});function ua(e,t="image/png"){let n=String(e||"").replace(/^data:[^,]+,/,"").replace(/\s+/g,"");if(typeof Uint8Array.fromBase64=="function")try{return new Blob([Uint8Array.fromBase64(n)],{type:t})}catch{}if(typeof Buffer<"u")return new Blob([Buffer.from(n,"base64")],{type:t});let r=atob(n),o=new Uint8Array(r.length);for(let a=0;a<r.length;a+=1)o[a]=r.charCodeAt(a);return new Blob([o],{type:t})}function gc(e){let t=e.indexOf(",");if(t===-1||!e.startsWith("data:"))throw new Error("\u4E0D\u662F\u5408\u6CD5\u7684 data URL");let n=e.slice(5,t),r=n.split(";")[0]||"image/png";return n.includes(";base64")?ua(e.slice(t+1),r):new Blob([decodeURIComponent(e.slice(t+1))],{type:r})}function hr(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(String(r.result||"")),r.onerror=()=>n(r.error||new Error("\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25")),r.readAsDataURL(e)})}function ti(e){if(!e)return null;if(e instanceof Blob)return{blob:e};if(typeof e=="string")return e.startsWith("data:")?{dataUrl:e}:{url:e};if(e.blob instanceof Blob)return{blob:e.blob};if(typeof e.b64_json=="string"&&e.b64_json)return{blob:ua(e.b64_json,e.mime_type||"image/png")};if(typeof e.base64=="string"&&e.base64)return{blob:ua(e.base64,e.mime_type||"image/png")};let t=e.inlineData||e.inline_data;if(t?.data)return{blob:ua(t.data,t.mimeType||t.mime_type||"image/png")};let n=e.fileData?.fileUri||e.file_data?.file_uri;if(typeof n=="string"&&n)return{url:n};if(typeof e.dataUrl=="string"&&e.dataUrl)return{dataUrl:e.dataUrl};if(typeof e.url=="string"&&e.url)return{url:e.url};let r=[e.video_url,e.result_url,e.content?.url,e.content?.video_url].find(o=>typeof o=="string"&&o);return r?{url:r}:null}function ni(e){if(!e)return[];if(Array.isArray(e))return e;if(Array.isArray(e.candidates)){let n=e.candidates.flatMap(r=>r?.content?.parts||[]).filter(r=>r?.inlineData?.data||r?.inline_data?.data||r?.fileData?.fileUri||r?.file_data?.file_uri);if(n.length)return n}for(let t of["data","images","results","output"])if(Array.isArray(e[t]))return e[t];return[e]}function ma(e,t){if(er.has(e))return er.get(e);let n=URL.createObjectURL(t);return er.set(e,n),n}function Ro(e,t){if(nn.has(e))return nn.get(e);let n=URL.createObjectURL(t);return nn.set(e,n),n}function rn(e){return er.get(e)||""}function Dn(e){return nn.get(e)||""}function ri(e){return Va.add(e),()=>Va.delete(e)}function ei(e){for(let t of Va)try{t(e)}catch{}}function ai({originalUrl:e="",previewUrl:t="",forceOriginal:n=!1,renderedPx:r=0}={}){return n||r>mc?e||t||"":t||e||""}function oi(e){if(!e)return;let t=er.get(e);t&&(URL.revokeObjectURL(t),er.delete(e));let n=nn.get(e);n&&(URL.revokeObjectURL(n),nn.delete(e)),Br.delete(e)}async function $n(e){if(typeof createImageBitmap=="function"&&e.type!=="image/svg+xml")try{let t=await createImageBitmap(e),n={width:t.width,height:t.height};return t.close(),n}catch{}return new Promise((t,n)=>{let r=URL.createObjectURL(e),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t({width:o.naturalWidth,height:o.naturalHeight})},o.onerror=()=>{URL.revokeObjectURL(r),n(new Error("\u56FE\u7247\u89E3\u7801\u5931\u8D25"))},o.src=r})}async function hc(e){if(!(e instanceof Blob)||!e.size||!e.type?.startsWith("image/")||e.type==="image/svg+xml"||typeof createImageBitmap!="function")return null;let t=null;try{t=await createImageBitmap(e);let n=t.width,r=t.height;if(!n||!r)return null;let o=Math.min(1,uc/Math.max(n,r));if(o===1&&(e.type==="image/webp"||e.size<=3e5))return null;let a=Math.max(1,Math.round(n*o)),i=Math.max(1,Math.round(r*o));if(typeof OffscreenCanvas<"u"){let c=new OffscreenCanvas(a,i),s=c.getContext("2d");if(!s)return null;s.drawImage(t,0,0,a,i);let f=await c.convertToBlob({type:"image/webp",quality:Qo}).catch(()=>null);return f&&f.size?{blob:f,width:a,height:i,origWidth:n,origHeight:r}:null}if(typeof document<"u"){let c=document.createElement("canvas");c.width=a,c.height=i;let s=c.getContext("2d");if(!s)return null;s.drawImage(t,0,0,a,i);let f=await new Promise(d=>c.toBlob(d,"image/webp",Qo));return f&&f.size?{blob:f,width:a,height:i,origWidth:n,origHeight:r}:null}return null}catch{return null}finally{try{t?.close()}catch{}}}function vr(e){if(!e)return Promise.resolve("");if(nn.has(e))return Promise.resolve(nn.get(e));if(Br.has(e))return Promise.resolve("");if(pa.has(e))return pa.get(e);let t=Zo.then(async()=>{if(nn.has(e))return nn.get(e);let n=await nt(pe.imagePreviews,e).catch(()=>null);if(n?.blob){let i=Ro(e,n.blob);return ei(e),i}let r=await nt(pe.imageFiles,e).catch(()=>null);if(!r?.blob)return Br.add(e),"";let o=await hc(r.blob);if(!o?.blob)return Br.add(e),"";await pn(pe.imagePreviews,e,{blob:o.blob,type:o.blob.type,bytes:o.blob.size,width:o.width,height:o.height,at:Date.now()}).catch(()=>{});let a=Ro(e,o.blob);return ei(e),a}).finally(()=>{pa.delete(e)});return Zo=t.catch(()=>""),pa.set(e,t),t}function wt(e="image"){let t=Math.random().toString(36).slice(2,10);return`${e}:${Date.now().toString(36)}${t}`}async function Bt(e,t,n={}){let r=n.store||pe.imageFiles;if(!(t instanceof Blob)||!t.size)throw new Error("\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u4EF6");await pn(r,e,{blob:t,type:t.type,bytes:t.size,at:Date.now(),...n}),Br.delete(e);let o=nn.get(e);return o&&(URL.revokeObjectURL(o),nn.delete(e)),r===pe.imageFiles&&t.type?.startsWith("image/")&&vr(e),{storageKey:e,bytes:t.size,mimeType:t.type}}async function Or(e){return e?nt(pe.imageFiles,e).catch(()=>null):null}async function br(e){if(!e)return null;let t=await nt(pe.imageFiles,e).catch(()=>null);return t?.blob?t:nt(pe.mediaFiles,e).catch(()=>null)}async function Lr(e){if(!e)return"";let t=await br(e);return t?.blob?hr(t.blob):""}async function vt(e){if(!e)return"";let t=er.get(e);if(t)return t;let n=await br(e);return n?.blob?ma(e,n.blob):""}async function ii(e,{storageKey:t,signal:n,fetchImpl:r=fetch}={}){if(!e)throw new Error("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247");if(e.blob){let i=t||wt(),c=await $n(e.blob).catch(()=>({width:0,height:0}));return{...await Bt(i,e.blob,{mimeType:e.blob.type,width:c.width,height:c.height}),width:c.width,height:c.height,url:ma(i,e.blob),source:"blob",degraded:!1}}let o=e.dataUrl||(typeof e.url=="string"&&e.url.startsWith("data:")?e.url:"");if(o){let i=gc(o),c=t||wt(),s=await $n(i).catch(()=>({width:0,height:0}));return{...await Bt(c,i,{mimeType:i.type,width:s.width,height:s.height}),width:s.width,height:s.height,url:ma(c,i),source:"data-url",degraded:!1}}let a=e.url;try{let i=await r(a,{signal:n,cache:"force-cache"});if(!i.ok)throw new Error(`HTTP ${i.status}`);let c=await i.blob();if(!c.size)throw new Error("\u7A7A\u6587\u4EF6");let s=t||wt(),f=await $n(c).catch(()=>({width:0,height:0}));return{...await Bt(s,c,{mimeType:c.type,remoteUrl:a,width:f.width,height:f.height}),url:ma(s,c),remoteUrl:a,source:"downloaded",degraded:!1,width:f.width,height:f.height}}catch(i){if(i?.name==="AbortError"||n?.aborted)throw i;return{storageKey:"",bytes:0,mimeType:"",url:a,remoteUrl:a,source:"remote",degraded:!0}}}var uc,Qo,mc,er,nn,Br,pa,Va,Zo,Gn=Yn(()=>{kn();Vn();uc=768,Qo=.84,mc=960;er=new Map,nn=new Map,Br=new Set,pa=new Map,Va=new Set,Zo=Promise.resolve()});function Bn(e,t=!0){let n=Math.max(256,Math.min(4096,Math.round(Number(e)||1024)));return t&&(n=Math.max(256,Math.round(n/16)*16)),n}function On(e){let t=String(e||"").trim().toLowerCase().match(/^(\d+)x(\d+)$/);return t?{width:Number(t[1]),height:Number(t[2])}:null}function on({resolution:e="\u81EA\u52A8",ratio:t="1:1",customSize:n="",align16:r=!0}={}){let o=On(n);if(o)return`${Bn(o.width,r)}x${Bn(o.height,r)}`;let a=String(e||"\u81EA\u52A8").toLowerCase(),i=t==="auto"?"\u81EA\u52A8":t||"1:1";if(Di[a]?.[i])return Di[a][i];if((a==="\u81EA\u52A8"||a==="auto")&&Pi[i])return Pi[i];let c=a==="4k"?3072:a==="2k"?2048:1024,[s,f]=String(i).split(":").map(Number),d=Number.isFinite(s)&&Number.isFinite(f)&&s>0&&f>0?s/f:1,m=Bn(Math.sqrt(c*c*d),r),p=Bn(Math.sqrt(c*c/d),r);return`${m}x${p}`}function Bi({ratio:e="1:1",resolution:t="\u81EA\u52A8"}={}){let n={};e&&e!=="\u81EA\u52A8"&&e!=="auto"&&(n.aspectRatio=e);let r=String(t||"").toLowerCase();return(r==="1k"||r==="2k"||r==="4k")&&(n.imageSize=r.toUpperCase()),Object.keys(n).length?n:void 0}function ro(e){let t=Array.isArray(e?.images)&&e.images.length?e.images.find(o=>o.id===e.primaryImageId)||e.images[0]:null,n=Number(t?.width)||Number(e?.metadata?.width)||0,r=Number(t?.height)||Number(e?.metadata?.height)||0;if(n>0&&r>0){let o=Math.max(n,r),a=Math.min(n,r),i=n,c=r;if(o>4096){let s=4096/o;i=n*s,c=r*s}else if(a<256){let s=256/a;i=Math.min(4096,n*s),c=Math.min(4096,r*s)}return`${Bn(i,!0)}x${Bn(c,!0)}`}return on({resolution:e?.resolution||"\u81EA\u52A8",ratio:e?.ratio||"1:1"})}function Oi(e,t){let n=String(e||"").trim();if(!t||t<=0)return n;let r=Array.from({length:t},(o,a)=>`\u56FE\u7247${a+1}`).join("\u3001");return n?`\u53C2\u8003\u56FE\u7247\u7F16\u53F7\uFF1A${r}\u3002
${n}`:`\u53C2\u8003\u56FE\u7247\u7F16\u53F7\uFF1A${r}\u3002`}function Li(e){return`\u53C2\u8003\u56FE\u72471\u4E3A\u539F\u56FE\uFF0C\u56FE\u72472\u662F\u5728\u539F\u56FE\u4E0A\u7528\u84DD\u8272\u534A\u900F\u660E\u6807\u6CE8\u51FA\u7684\u5F85\u4FEE\u6539\u533A\u57DF\u3002\u8BF7\u53EA\u4FEE\u6539\u84DD\u8272\u6807\u6CE8\u8986\u76D6\u7684\u533A\u57DF\uFF0C\u5176\u4F59\u533A\u57DF\u4E0E\u539F\u56FE\u4FDD\u6301\u5B8C\u5168\u4E00\u81F4\uFF0C\u8F93\u51FA\u4E0E\u539F\u56FE\u76F8\u540C\u5C3A\u5BF8\u7684\u5B8C\u6574\u56FE\u7247\uFF0C\u5E76\u4E14\u7ED3\u679C\u4E2D\u4E0D\u8981\u4FDD\u7559\u4EFB\u4F55\u84DD\u8272\u6807\u6CE8\u3002\u4FEE\u6539\u8981\u6C42\uFF1A${String(e||"").trim()}`}function Ui({horizontal:e=0,pitch:t=0,distance:n=5,wide:r=!1}={}){let o=Math.round(Number(e)||0),a=Math.round(Number(t)||0),i=Number(n)||5,c=o===0?"\u6B63\u9762\u5E73\u89C6\u65B9\u4F4D\uFF08\u6C34\u5E73\u504F\u8F6C 0\xB0\uFF09":o>0?`\u5411\u53F3\u4FA7\u73AF\u7ED5\u65CB\u8F6C ${o}\xB0`:`\u5411\u5DE6\u4FA7\u73AF\u7ED5\u65CB\u8F6C ${Math.abs(o)}\xB0`,s=a===0?"\u6C34\u5E73\u89C6\u7EBF\uFF08\u4FEF\u4EF0 0\xB0\uFF09":a>0?`\u5411\u4E0A\u62AC\u5347\u5E76\u4FEF\u62CD ${a}\xB0`:`\u964D\u4F4E\u673A\u4F4D\u5E76\u4EF0\u62CD ${Math.abs(a)}\xB0`,f=i<=3?"\u7279\u5199\u8FD1\u666F\u8DDD\u79BB\uFF08\u653E\u5927\u4E3B\u4F53\u7EC6\u8282\uFF09":i>=7.5?"\u8FDC\u666F\u5168\u8C8C\u8DDD\u79BB\uFF08\u7EB3\u5165\u66F4\u591A\u73AF\u5883\u80CC\u666F\uFF09":`\u4E2D\u666F\u8DDD\u79BB\uFF08\u955C\u5934\u8DDD\u79BB\u7CFB\u6570 ${i.toFixed(1)}\uFF09`;return`\u4FDD\u6301\u53C2\u8003\u56FE\u72471\u4E2D\u7684\u4E3B\u4F53\u5916\u89C2\u3001\u670D\u9970\u7279\u5F81\u3001\u6750\u8D28\u5149\u5F71\u4E0E\u6574\u4F53\u98CE\u683C\u5B8C\u5168\u4E00\u81F4\uFF0C\u4EC5\u4ECE\u65B0\u7684\u4E09\u7EF4\u6444\u50CF\u673A\u673A\u4F4D\u91CD\u65B0\u62CD\u6444\u751F\u6210\u753B\u9762\uFF1A\u6C34\u5E73\u89D2\u5EA6${c}\uFF0C\u5782\u76F4\u89C6\u89D2${s}\uFF0C\u62CD\u6444\u666F\u522B\u4E3A${f}\uFF0C\u91C7\u7528${r?"\u5E7F\u89D2\u955C\u5934\u900F\u89C6\u6548\u679C":"\u6807\u51C6\u955C\u5934\u81EA\u7136\u900F\u89C6\u6548\u679C"}\u3002`}var Di,Pi,jr=Yn(()=>{Di={"1k":{\u81EA\u52A8:"1024x1024",auto:"1024x1024","1:1":"1024x1024","2:3":"832x1248","3:2":"1248x832","3:4":"864x1152","4:3":"1152x864","16:9":"1536x864","9:16":"864x1536","21:9":"1792x768","9:21":"768x1792"},"2k":{\u81EA\u52A8:"2048x2048",auto:"2048x2048","1:1":"2048x2048","2:3":"1664x2496","3:2":"2496x1664","3:4":"1728x2304","4:3":"2304x1728","16:9":"2560x1440","9:16":"1440x2560","21:9":"3072x1344","9:21":"1344x3072"},"4k":{\u81EA\u52A8:"4096x4096",auto:"4096x4096","1:1":"4096x4096","2:3":"2560x3840","3:2":"3840x2560","3:4":"3072x4096","4:3":"4096x3072","16:9":"3840x2160","9:16":"2160x3840","21:9":"4096x1792","9:21":"1792x4096"}},Pi={\u81EA\u52A8:"1024x1024",auto:"1024x1024","1:1":"1024x1024","2:3":"832x1248","3:2":"1248x832","3:4":"864x1152","4:3":"1152x864","16:9":"1536x864","9:16":"864x1536","21:9":"1792x768","9:21":"768x1792"}});function al(e){let t=e.filter(Boolean);if(!t.length)return;if(t.length===1)return t[0];if(typeof AbortSignal.any=="function")return AbortSignal.any(t);let n=new AbortController,r=()=>t.forEach(a=>a.removeEventListener("abort",o));function o(a){r(),n.abort(a?.target?.reason??new DOMException("Aborted","AbortError"))}for(let a of t){if(a.aborted){o({target:a});break}a.addEventListener("abort",o,{once:!0})}return n.signal}function ol(e){if(!e||e<=0)return;if(typeof AbortSignal.timeout=="function")return AbortSignal.timeout(e);let t=new AbortController,n=setTimeout(()=>t.abort(new DOMException(`\u8BF7\u6C42\u8D85\u8FC7 ${e}ms \u6CA1\u6709\u54CD\u5E94`,"TimeoutError")),e);return t.signal.addEventListener("abort",()=>clearTimeout(n),{once:!0}),t.signal}function Hi({signal:e,timeoutMs:t}={}){return al([e,ol(t)])}function Nn(e){return e?.name==="AbortError"||e?.name==="TimeoutError"}var Yi=Yn(()=>{});function ll(e){return e.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim().slice(0,120)||"\u7A7A\u9875\u9762"}function Mn(e,t=0){if(e==null||t>5||typeof e=="number"||typeof e=="boolean")return"";if(typeof e=="string"){let a=e.trim();if(!a)return"";if(/^<(!doctype|html|head|body|\?xml)/i.test(a)||/<[a-z][\s\S]*>/i.test(a))return`\u4E0A\u6E38\u8FD4\u56DE\u4E86\u7F51\u9875\u800C\u4E0D\u662F\u63A5\u53E3\u6570\u636E\uFF1A${ll(a)}`;if(/^[[{]/.test(a))try{return Mn(JSON.parse(a),t+1)}catch{return a.slice(0,200)}return a.slice(0,200)}if(Array.isArray(e)){for(let a of e){let i=Mn(a,t+1);if(i)return i}return""}let n=e.error,r=typeof n=="string"?n:n&&typeof n=="object"?Mn(n.message,t+1)||Mn(n.msg,t+1):"",o=typeof e.code=="string"?e.code:"";return cl[o]||Mn(e.msg,t+1)||Mn(e.message,t+1)||Mn(r,t+1)||Mn(e.detail,t+1)||Mn(e.error,t+1)||""}function Xi(e,{timeoutMs:t}={}){if(e?.name==="AbortError")return new Be("\u5DF2\u53D6\u6D88",{code:"ABORTED",cause:e});if(e?.name==="TimeoutError")return new Be(`\u8BF7\u6C42\u8D85\u65F6\uFF1A\u8D85\u8FC7 ${Math.round((t||0)/1e3)} \u79D2\u6CA1\u6709\u54CD\u5E94`,{code:"TIMEOUT",cause:e});let n=e?.cause?.message||e?.message||"",r=n&&n!=="Failed to fetch"?`\uFF1A${n}`:"";return new Be(`\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25${r}`,{code:"NETWORK",cause:e})}function Wi(e,t,n="\u8BF7\u6C42\u5931\u8D25"){let r=e?.status??0,a=(typeof t?.error=="string"?t.error.trim():"")||Mn(t),i=sl[r];if(t?.cancelled||r===499)return new Be("\u5DF2\u53D6\u6D88",{code:"ABORTED",status:r});if(a)return new Be(i?`${a}\uFF08${i}\uFF09`:a,{code:`HTTP_${r}`,status:r,body:t});let c=il[r]||n;return new Be(`${c}\uFF08HTTP ${r}\uFF09`,{code:`HTTP_${r}`,status:r,body:t})}var il,sl,cl,Be,Sa=Yn(()=>{il={400:"\u8BF7\u6C42\u683C\u5F0F\u6709\u8BEF",401:"\u9274\u6743\u5931\u8D25",403:"\u6CA1\u6709\u6743\u9650",404:"\u63A5\u53E3\u6216\u6A21\u578B\u4E0D\u5B58\u5728",405:"\u63A5\u53E3\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42\u65B9\u6CD5",408:"\u4E0A\u6E38\u54CD\u5E94\u8D85\u65F6",409:"\u8BF7\u6C42\u51B2\u7A81\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",413:"\u8BF7\u6C42\u4F53\u8FC7\u5927\uFF1A\u53C2\u8003\u56FE\u592A\u591A\u6216\u63D0\u793A\u8BCD\u592A\u957F",415:"\u4E0A\u6E38\u4E0D\u652F\u6301\u8FD9\u79CD\u5185\u5BB9\u7C7B\u578B",422:"\u4E0A\u6E38\u62D2\u7EDD\u4E86\u8FD9\u4E2A\u53C2\u6570\u7EC4\u5408",429:"\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41",499:"\u5DF2\u53D6\u6D88",500:"\u4E0A\u6E38\u670D\u52A1\u51FA\u9519",502:"\u4E0A\u6E38\u7F51\u5173\u9519\u8BEF",503:"\u4E0A\u6E38\u7E41\u5FD9",504:"\u4E0A\u6E38\u7F51\u5173\u8D85\u65F6"},sl={401:"API Key \u6CA1\u586B\u6216\u5DF2\u5931\u6548",403:"API Key \u65E0\u6743\u7528\u8FD9\u4E2A\u6A21\u578B",413:"\u51CF\u5C11\u53C2\u8003\u56FE\uFF0C\u6216\u628A\u63D0\u793A\u8BCD\u62C6\u77ED",429:"\u964D\u5E76\u53D1\u6216\u7A0D\u540E\u91CD\u8BD5"},cl={API_KEY_REQUIRED:"\u6CA1\u6709\u586B API Key",INVALID_API_KEY:"API Key \u65E0\u6548\u6216\u5DF2\u8FC7\u671F",RATE_LIMITED:"\u4E0A\u6E38\u9650\u6D41\uFF0C\u7A0D\u540E\u91CD\u8BD5",NOT_FOUND:"\u4E0A\u6E38\u6CA1\u6709\u8FD9\u4E2A\u63A5\u53E3\u6216\u6A21\u578B",INSUFFICIENT_QUOTA:"\u4E0A\u6E38\u989D\u5EA6\u4E0D\u8DB3",CONTENT_POLICY:"\u5185\u5BB9\u88AB\u4E0A\u6E38\u5B89\u5168\u7B56\u7565\u62E6\u4E0B\uFF0C\u6362\u4E2A\u63CF\u8FF0\u518D\u8BD5"};Be=class extends Error{constructor(t,{code:n,status:r,body:o,cause:a}={}){super(t),this.name="ApiError",this.code=n||"REQUEST_FAILED",this.status=r??0,this.body=o,a&&(this.cause=a)}}});var Ri={};ho(Ri,{VIDEO_DEADLINE_MS:()=>Gi,createVideoTask:()=>pl,normalizeStatus:()=>qi,pickResultUrl:()=>io,pickTaskId:()=>oo,pollVideoTask:()=>Qi,pollVideoTaskOnce:()=>Ji,resumeVideoTask:()=>ul,saveVideoResult:()=>Zi});function oo(e){if(!e||typeof e!="object")return"";for(let t of["id","task_id","taskId"])if(typeof e[t]=="string"&&e[t])return e[t];for(let t of["data","task","result"]){let n=e[t];if(n&&typeof n=="object"){let r=oo(n);if(r)return r}}return""}function io(e){if(!e||typeof e!="object")return"";let t=[e.url,e.video_url,e.result_url,e.output_url,e.download_url].find(n=>typeof n=="string"&&n);if(t)return t;for(let n of["output","result","data","video"]){let r=e[n];if(r&&typeof r=="object"){let o=io(r);if(o)return o}}return""}function qi(e){let t=String(e?.status||e?.state||e?.task_status||"").toLowerCase();return["completed","succeeded","success","done","finished"].includes(t)?"completed":["failed","error","cancelled","canceled"].includes(t)?"failed":["queued","pending","running","processing","in_progress","generating"].includes(t)||t?"pending":"unknown"}async function pl({channel:e,model:t,prompt:n,params:r={},signal:o}){if(!String(n||"").trim())throw new Be("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD",{code:"NO_PROMPT"});let a={model:t,prompt:n};r.seconds&&(a.seconds=String(r.seconds)),r.size&&(a.size=r.size);let i;try{i=await Ln({channel:e,path:"v1/videos",payload:a,timeoutMs:fl,signal:o})}catch(s){throw/not supported|unsupported|not found|404/i.test(s.message||"")?new Be(`\u8FD9\u4E2A\u6E20\u9053\u4E0D\u652F\u6301\u89C6\u9891\u751F\u6210\uFF08\u4E0A\u6E38\u8FD4\u56DE\uFF1A${s.message}\uFF09\u3002\u6362\u4E00\u4E2A\u652F\u6301\u89C6\u9891\u7684\u6E20\u9053\u518D\u8BD5\u3002`,{code:"VIDEO_UNSUPPORTED"}):s}let c=oo(i);if(!c)throw new Be("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u4EFB\u52A1 ID",{code:"NO_TASK_ID",body:i});return{taskId:c,raw:i}}async function Ji({channel:e,taskId:t,signal:n}){let r=await Ln({channel:e,path:`v1/videos/${encodeURIComponent(t)}`,method:"GET",timeoutMs:dl,signal:n}),o=qi(r),a=io(r);return o==="completed"&&!a?{status:"completed",url:"",needContent:!0,raw:r}:o==="failed"?{status:"failed",error:r?.error?.message||r?.message||"\u4E0A\u6E38\u62A5\u544A\u4EFB\u52A1\u5931\u8D25",raw:r}:{status:o==="completed"?"completed":"pending",url:a,raw:r}}async function Qi({channel:e,taskId:t,signal:n,deadlineMs:r=Gi,onTick:o}){let a=Date.now(),i=0,c=0;for(;Date.now()-a<r;){if(n?.aborted)throw new DOMException("Aborted","AbortError");i+=1;let s=null,f="";try{s=await Ji({channel:e,taskId:t,signal:n})}catch(d){if(d?.name==="AbortError")throw d;if(d?.status===429||/429|rate limit/i.test(d.message||"")){let p=Vi[Math.min(c,Vi.length-1)];c+=1,o?.({status:"pending",elapsed:Date.now()-a,attempt:i,note:`\u9650\u6D41\uFF0C${Math.round(p/1e3)}s \u540E\u91CD\u8BD5`}),await ao(p,n);continue}f=d?.message||"\u67E5\u8BE2\u5931\u8D25",o?.({status:"pending",elapsed:Date.now()-a,attempt:i,note:f}),await ao(2500,n);continue}if(s.status==="completed")return{...s,elapsed:Date.now()-a};if(s.status==="failed")throw new Be(s.error||"\u89C6\u9891\u751F\u6210\u5931\u8D25",{code:"VIDEO_FAILED",body:s.raw});o?.({status:"pending",elapsed:Date.now()-a,attempt:i}),await ao(i<6?2500:5e3,n)}throw new Be(`\u7B49\u4E86 ${Math.round(r/6e4)} \u5206\u949F\u8FD8\u6CA1\u5B8C\u6210\u3002\u4EFB\u52A1\u53EF\u80FD\u8FD8\u5728\u8DD1\uFF0C\u5237\u65B0\u540E\u53EF\u4EE5\u7EE7\u7EED\u7B49\u3002`,{code:"VIDEO_TIMEOUT"})}async function Zi({url:e,blob:t,taskId:n,signal:r}){let o=t;if(!o){if(!e)throw new Be("\u4E0A\u6E38\u6CA1\u6709\u7ED9\u51FA\u89C6\u9891\u5730\u5740",{code:"NO_VIDEO_URL"});let c=await fetch(e,{signal:r});if(!c.ok)throw new Be(`\u4E0B\u8F7D\u89C6\u9891\u5931\u8D25\uFF1AHTTP ${c.status}`,{code:"DOWNLOAD_FAILED"});o=await c.blob()}if(!o.size)throw new Be("\u4E0B\u8F7D\u5230\u7684\u89C6\u9891\u662F\u7A7A\u7684",{code:"EMPTY_VIDEO"});let a=wt("video");return{...await Bt(a,o,{store:pe.mediaFiles,mimeType:o.type||"video/mp4",source:"video-task",taskId:n}),taskId:n}}async function ul({channel:e,taskId:t,signal:n,onTick:r}){let o=await Qi({channel:e,taskId:t,signal:n,onTick:r});return Zi({url:o.url,blob:null,taskId:t,signal:n})}var fl,dl,Gi,Vi,ao,es=Yn(()=>{Hr();Sa();Gn();kn();fl=6e4,dl=3e4,Gi=15*6e4,Vi=[2500,4500,8100,14600,2e4],ao=(e,t)=>new Promise((n,r)=>{if(t?.aborted){r(new DOMException("Aborted","AbortError"));return}let o=setTimeout(()=>{t?.removeEventListener("abort",a),n()},e);function a(){clearTimeout(o),r(new DOMException("Aborted","AbortError"))}t?.addEventListener("abort",a,{once:!0})})});function ml(e){if(!e)throw new Be("\u8FD8\u6CA1\u6709\u9009\u62E9\u6E20\u9053\uFF0C\u5148\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A",{code:"NO_CHANNEL"});if(!String(e.baseUrl||"").trim())throw new Be("\u6E20\u9053\u6CA1\u6709\u586B Base URL",{code:"NO_BASE_URL"});if(!String(e.apiKey||"").trim())throw new Be("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key",{code:"NO_API_KEY",status:401});return e}async function gl(){try{let e=typeof AbortSignal.timeout=="function"?AbortSignal.timeout(3e3):void 0,t=await fetch(ts+"ping",{headers:{"sec-fetch-site":"same-origin"},cache:"no-store",signal:e});return t.ok?!!(await t.json().catch(()=>null))?.ok:!1}catch{return!1}}async function Ln({channel:e,path:t,method:n="POST",payload:r,multipart:o,headers:a,timeoutMs:i,signal:c}){ml(e);let s=Hi({signal:c,timeoutMs:i||rr}),f;try{f=await fetch(ts+"relay",{method:"POST",headers:{"content-type":"application/json","sec-fetch-site":"same-origin"},body:JSON.stringify({channel:{baseUrl:e.baseUrl,apiKey:e.apiKey,protocol:e.protocol||"openai"},path:t,method:n,payload:r,multipart:o,headers:a,timeoutMs:i||rr}),signal:s})}catch(p){let v=await gl(),D=Xi(p,{timeoutMs:i||rr});throw v?new Be(`${D.message}\uFF08\u63D2\u4EF6\u670D\u52A1\u5728\u7EBF\uFF0C\u662F\u8FD9\u6B21\u8BF7\u6C42\u6CA1\u53D1\u51FA\u53BB\uFF0C\u53EF\u91CD\u8BD5\uFF09`,{code:"NETWORK",cause:p}):new Be(`${D.message}\uFF08\u63D2\u4EF6\u670D\u52A1\u6CA1\u6709\u54CD\u5E94\uFF0C\u8BF7\u91CD\u542F DSH\uFF09`,{code:"NETWORK",cause:p})}let d=await f.text(),m=null;if(d){let p=d.trim();if(/^<(!doctype|html|head|body|\?xml)/i.test(p)){let v=p.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim().slice(0,120);throw new Be(`\u4E0A\u6E38\u8FD4\u56DE\u4E86\u7F51\u9875\u800C\u4E0D\u662F\u63A5\u53E3\u6570\u636E\uFF1A${v||"\u7A7A\u9875\u9762"}`,{code:"UPSTREAM_HTML",status:f.status})}try{m=JSON.parse(p)}catch{m={error:p.slice(0,200)}}}if(!f.ok)throw Wi(f,m);if(m&&typeof m=="object"&&typeof m.error=="string"&&m.error)throw new Be(m.error,{code:"UPSTREAM_ERROR",status:m.upstreamStatus||0,body:m});return m}function hl(e){let t=String(e||"").match(/^data:([^;,]+)(?:;[^,]*)?,([\s\S]+)$/i);return t?{inlineData:{mimeType:t[1]||"image/png",data:t[2].replace(/\s+/g,"")}}:{fileData:{fileUri:e,mimeType:"image/png"}}}async function so(e,t){let n=Math.max(1,Math.min(10,Number(e)||1));if(n===1){let c=await t(0);return{items:c,failed:[],short:Math.max(0,1-c.length)}}let r=new Array(n).fill(null),o=[],a=await Promise.allSettled(Array.from({length:n},(c,s)=>t(s)));a.forEach((c,s)=>{if(c.status==="fulfilled"){let f=c.value?.[0];f?r[s]={...f,index:s}:o.push({index:s,error:"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247"})}else{if(c.reason?.name==="AbortError"||Nn(c.reason))throw c.reason;o.push({index:s,error:c.reason?.message||"\u751F\u6210\u5931\u8D25"})}});let i=r.filter(Boolean);if(!i.length){let c=a.find(s=>s.status==="rejected")?.reason;throw c||new Be(o[0]?.error||"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247",{code:"NO_IMAGE"})}return{items:i,failed:o,short:Math.max(0,n-i.length-o.length)}}async function ns({channel:e,model:t,prompt:n,imageDataUrls:r=[],params:o={},signal:a,onProgress:i}){let c=Bi({ratio:o.ratio||"1:1",resolution:o.resolution||"\u81EA\u52A8"}),s=`v1beta/models/${encodeURIComponent(t)}:generateContent`,d={contents:[{role:"user",parts:[...r.map(v=>hl(v)),...n?[{text:n}]:[]]}],generationConfig:{responseModalities:["IMAGE","TEXT"],...c?{imageConfig:c}:{}}},m=Math.max(1,Math.min(10,Number(o.count)||1));i?.({stage:"request",n:m});let p=await so(m,async v=>{let D=await Ln({channel:e,path:s,payload:d,timeoutMs:rr,signal:a});if(D?.promptFeedback?.blockReason)throw new Be(`Gemini \u5B89\u5168\u7B56\u7565\u62E6\u622A\uFF08${D.promptFeedback.blockReason}\uFF09`,{code:"GEMINI_BLOCKED"});let{results:T}=await co({raw:D,signal:a,slotOffset:v,onProgress:i});return T});return{ok:!0,items:p.items,failed:p.failed,requested:m,got:p.items.length,short:p.short}}async function vl({channel:e,model:t,prompt:n,params:r={},signal:o,onProgress:a}){if(e?.protocol==="gemini")return ns({channel:e,model:t,prompt:n,params:r,signal:o,onProgress:a});let i=Math.max(1,Math.min(10,Number(r.count)||1)),c=on({resolution:r.resolution||"\u81EA\u52A8",ratio:r.ratio||"1:1",customSize:r.size&&/^\d+x\d+$/i.test(String(r.size))?r.size:r.ratio?"":r.size,align16:r.align16!==!1}),s={model:t,prompt:n,n:1,size:c};r.quality&&r.quality!=="\u81EA\u52A8"&&(s.quality=rs(r.quality)),r.background&&(s.background=r.background);let f=r.outputFormat||(r.background==="transparent"?"png":"");f&&(s.output_format=f),/gpt-image/i.test(String(t||""))||(s.response_format="b64_json"),a?.({stage:"request",n:i});let d=await so(i,async m=>{let p=await Ln({channel:e,path:"v1/images/generations",payload:s,timeoutMs:rr,signal:o}),{results:v}=await co({raw:p,signal:o,slotOffset:m,onProgress:a});return v});return{ok:!0,items:d.items,failed:d.failed,requested:i,got:d.items.length,short:d.short}}async function co({raw:e,signal:t,slotOffset:n=0,onProgress:r}){let o=ni(e);if(!o.length)throw new Be("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247",{code:"NO_IMAGE",body:e});r?.({stage:"save",n:o.length});let a=new Array(o.length).fill(null),i=[];await Promise.all(o.map(async(s,f)=>{let d=ti(s);if(d)try{let m=await ii(d,{signal:t,storageKey:wt("image")}),p={...m,width:Number(m?.width)||Number(s?.width)||0,height:Number(m?.height)||Number(s?.height)||0,revisedPrompt:s?.revised_prompt||""};a[f]=p,r?.({stage:"item",index:n+f,item:p})}catch(m){if(m?.name==="AbortError")throw m;i.push({index:n+f,error:m.message})}}));let c=a.filter(Boolean);if(!c.length)throw new Be(i[0]?.error||"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u53EF\u7528\u7684\u56FE\u7247",{code:"NO_IMAGE",body:e});return{results:c,failed:i}}async function bl({channel:e,model:t,prompt:n,imageDataUrl:r,imageDataUrls:o,params:a={},signal:i,onProgress:c}){let s=Array.isArray(o)&&o.length?o.filter(Boolean):Array.isArray(a.imageDataUrls)&&a.imageDataUrls.length?a.imageDataUrls.filter(Boolean):r?[r]:[];if(!s.length)throw new Be("\u6CA1\u6709\u53EF\u7F16\u8F91\u7684\u56FE\u7247",{code:"NO_IMAGE_INPUT"});if(!String(n||"").trim())throw new Be("\u5148\u5199\u4E00\u53E5\u8981\u6539\u4EC0\u4E48",{code:"NO_PROMPT"});let f=a.skipRefPrefix?String(n||"").trim():Oi(n,s.length);if(e?.protocol==="gemini")return ns({channel:e,model:t,prompt:f,imageDataUrls:s,params:a,signal:i,onProgress:c});let d=Math.max(1,Math.min(10,Number(a.count)||1)),m=on({resolution:a.resolution||"\u81EA\u52A8",ratio:a.ratio||"1:1",customSize:a.size&&/^\d+x\d+$/i.test(String(a.size))?a.size:a.ratio||a.resolution&&a.resolution!=="\u81EA\u52A8"?"":a.size||"1024x1024",align16:a.align16!==!1}),p=a.quality&&a.quality!=="\u81EA\u52A8"?rs(a.quality):"",v=a.background||"",D=a.outputFormat||(v==="transparent"?"png":""),T=()=>{let Y={model:t,prompt:f,n:1,size:m,images:s.map(I=>({image_url:I}))};return p&&(Y.quality=p),v&&(Y.background=v),D&&(Y.output_format=D),/gpt-image/i.test(String(t||""))||(Y.response_format="b64_json"),Ln({channel:e,path:"v1/images/edits",payload:Y,timeoutMs:rr,signal:i})},A=()=>{let Y={model:t,prompt:f,n:"1",size:m};p&&(Y.quality=p),v&&(Y.background=v),D&&(Y.output_format=D),/gpt-image/i.test(String(t||""))||(Y.response_format="b64_json");let I=s.map((O,Z)=>({field:s.length>1?"image[]":"image",name:`reference-${Z+1}.png`,dataUrl:O}));return Ln({channel:e,path:"v1/images/edits",multipart:{fields:Y,files:I},timeoutMs:rr,signal:i})},z=e?.editFormat==="multipart"||/api\.openai\.com/i.test(String(e?.baseUrl||""));c?.({stage:"request",n:d});let K=await so(d,async Y=>{let I;try{I=z?await A():await T()}catch(Z){if(Nn(Z))throw Z;let ue=String(Z?.message||"");if(!z&&(Z?.status===415||/multipart|form-data|unsupported media type/i.test(ue)&&!/images\[\]\.image_url/i.test(ue)))I=await A();else if(z&&/images\[\]\.image_url|invalid json|unexpected token/i.test(ue))I=await T();else throw/not supported|unsupported/i.test(ue)?new Be(`\u8FD9\u4E2A\u6E20\u9053\u4E0D\u652F\u6301\u56FE\u7247\u7F16\u8F91\uFF08\u4E0A\u6E38\u8FD4\u56DE\uFF1A${ue}\uFF09\u3002\u6362\u4E00\u4E2A\u652F\u6301\u7F16\u8F91\u7684\u6E20\u9053\u518D\u8BD5\u3002`,{code:"EDIT_UNSUPPORTED"}):Z}let{results:O}=await co({raw:I,signal:i,slotOffset:Y,onProgress:c});return O});return{ok:!0,items:K.items,failed:K.failed,requested:d,got:K.items.length,short:K.short}}function rs(e){return{\u4F4E:"low",\u4E2D:"medium",\u9AD8:"high",\u6781\u9AD8:"xhigh",\u6700\u9AD8:"max"}[e]||e}async function yl({channel:e,model:t,prompt:n,params:r={},signal:o,onTick:a}){let{createVideoTask:i,pollVideoTask:c,saveVideoResult:s}=await Promise.resolve().then(()=>(es(),Ri));a?.({status:"pending",stage:"create"});let{taskId:f}=await i({channel:e,model:t,prompt:n,params:r,signal:o});a?.({status:"pending",stage:"created",taskId:f});let d=await c({channel:e,taskId:f,signal:o,onTick:a}),m=await s({url:d.url,blob:d.blob,taskId:f,signal:o});return{ok:!0,taskId:f,...m}}async function Un({capability:e,channel:t,model:n,prompt:r,params:o={},signal:a,onProgress:i,onTick:c}){switch(e){case"image":return vl({channel:t,model:n,prompt:r,params:o,signal:a,onProgress:i});case"image-edit":return bl({channel:t,model:n,prompt:r,imageDataUrl:o.imageDataUrl,imageDataUrls:o.imageDataUrls,params:o,signal:a,onProgress:i});case"video":return yl({channel:t,model:n,prompt:r,params:o,signal:a,onTick:c});default:throw new Be(`\u6682\u65F6\u8FD8\u4E0D\u652F\u6301\u300C${e}\u300D\u751F\u6210`,{code:"CAPABILITY_TODO"})}}var ts,rr,dd,Hr=Yn(()=>{Yi();Sa();Gn();jr();ts="dsh-chunfeng-image/",rr=10*6e4,dd=2*6e4});var of={};ho(of,{apply:()=>nf,inject:()=>tf});module.exports=Ks(of);var Ia=Zt(require("react"),1);var W=Zt(require("react"),1);var bo=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
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
`;var yo=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
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
  --cf-leading-safe: var(--dsh-frame-leading-clearance, 0px);
}
:is([data-platform="darwin"]) :is([data-sidebar-collapsed], [data-sidebar-drawer]) .cf-app {
  --cf-leading-safe: var(--dsh-frame-leading-clearance, 160px);
}
:is([data-platform="darwin"][data-fullscreen]) :is([data-sidebar-collapsed], [data-sidebar-drawer]) .cf-app,
:is([data-platform="darwin"]) :is([data-sidebar-collapsed][data-fullscreen], [data-sidebar-drawer][data-fullscreen]) .cf-app,
html:not([data-platform="darwin"]) :is([data-sidebar-collapsed], [data-sidebar-drawer]) .cf-app {
  --cf-leading-safe: var(--dsh-frame-leading-clearance, 84px);
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
  left: max(var(--cf-sp-3), var(--cf-leading-safe, 0px));
  right: var(--cf-sp-3);
  z-index: var(--cf-z-nav);
  display: flex;
  align-items: center;
  gap: var(--cf-sp-2);
  pointer-events: none;
  transition: left var(--cf-dur) var(--cf-ease);
}
.cf-nav > * { pointer-events: auto; -webkit-app-region: no-drag; }

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
  padding: 2px;
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
  left: calc(50% + var(--cf-leading-safe, 0px) * 0.35);
  translate: -50% 0;
  display: flex;
  align-items: center;
  gap: var(--cf-sp-2);
  height: 36px;
  padding: 2px;
  border-radius: var(--cf-r-md);
  background: var(--cf-glass);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  -webkit-app-region: no-drag;
  transition: left var(--cf-dur) var(--cf-ease);
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
  .cf-canvas-bar-name { max-width: 12ch; }
}

@media (max-width: 860px) {
  .cf-page-inner { padding: calc(var(--cf-sp-3) + 36px + var(--cf-sp-3)) 20px var(--cf-sp-6); }
  .cf-nav { height: auto; padding: 0; flex-wrap: wrap; gap: var(--cf-sp-1); }
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
`;var xo=`${bo}
${yo}`;var b=Zt(require("react"),1),Hs=b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4.6 8v7.9a2.4 2.4 0 0 0 2.4 2.4h7.6"}),b.default.createElement("rect",{x:"7.2",y:"3.2",width:"13.6",height:"13.6",rx:"3.1"}),b.default.createElement("circle",{cx:"11.7",cy:"7.7",r:"1.35"}),b.default.createElement("path",{d:"M9.3 13.6l3.6-4.3 3.9 4.3"})),Ys={canvas:Hs,image:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),b.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),b.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),b.default.createElement("path",{d:"M5 17h14"})),folder:b.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:b.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),gear:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"3.1"}),b.default.createElement("path",{d:"M19.4 13.6a7.6 7.6 0 0 0 0-3.2l1.9-1.4-1.6-2.8-2.3.8a7.6 7.6 0 0 0-2.8-1.6L14.2 2.8h-4.4l-.4 2.6a7.6 7.6 0 0 0-2.8 1.6l-2.3-.8-1.6 2.8 1.9 1.4a7.6 7.6 0 0 0 0 3.2l-1.9 1.4 1.6 2.8 2.3-.8a7.6 7.6 0 0 0 2.8 1.6l.4 2.6h4.4l.4-2.6a7.6 7.6 0 0 0 2.8-1.6l2.3.8 1.6-2.8z"})),cursor:b.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:b.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),b.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),b.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:b.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:b.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),b.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),b.default.createElement("path",{d:"M11 11l2 2"})),search:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),b.default.createElement("path",{d:"M16 16l4 4"})),plus:b.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:b.default.createElement("path",{d:"M5 12h14"}),trash:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),b.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),b.default.createElement("path",{d:"M14 6l4 4"})),close:b.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:b.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 16V4"}),b.default.createElement("path",{d:"M7 9l5-5 5 5"}),b.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 4v12"}),b.default.createElement("path",{d:"M7 11l5 5 5-5"}),b.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:b.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),b.default.createElement("path",{d:"M20 4v4h-4"})),more:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),b.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),b.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M9 8H4v5"}),b.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M15 8h5v5"}),b.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),crop:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M6 3v12a3 3 0 003 3h12"}),b.default.createElement("path",{d:"M18 21V9a3 3 0 00-3-3H3"})),split:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),b.default.createElement("path",{d:"M3 12h18M12 3v18"})),upscale:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M15 3h6v6"}),b.default.createElement("path",{d:"M9 21H3v-6"}),b.default.createElement("path",{d:"M21 3l-7 7"}),b.default.createElement("path",{d:"M3 21l7-7"})),angle:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 3l8 4.5v9L12 21l-8-4.5v-9z"}),b.default.createElement("path",{d:"M4 7.5l8 4.5 8-4.5"}),b.default.createElement("path",{d:"M12 12v9"})),replace:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20 11a8 8 0 10-2.6 5.9"}),b.default.createElement("path",{d:"M20 5v6h-6"}),b.default.createElement("path",{d:"M12 8v8M9 13l3 3 3-3"})),lock:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"4.5",y:"10.5",width:"15",height:"10",rx:"2"}),b.default.createElement("path",{d:"M8 10.5V7a4 4 0 018 0v3.5"})),unlock:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"4.5",y:"10.5",width:"15",height:"10",rx:"2"}),b.default.createElement("path",{d:"M8 10.5V7a4 4 0 017.5-2"})),info:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"9"}),b.default.createElement("path",{d:"M12 11v6"}),b.default.createElement("path",{d:"M12 7.6h.01"})),video:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"2.5",y:"6",width:"13",height:"12",rx:"2"}),b.default.createElement("path",{d:"M15.5 10.5l6-3.5v10l-6-3.5z"})),copy:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"9",y:"9",width:"12",height:"12",rx:"2"}),b.default.createElement("path",{d:"M5 15V5a2 2 0 012-2h8"})),stack:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 3l9 5-9 5-9-5z"}),b.default.createElement("path",{d:"M3 13l9 5 9-5"}),b.default.createElement("path",{d:"M3 17.5l9 5 9-5"})),explode:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),b.default.createElement("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),b.default.createElement("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),b.default.createElement("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})),map:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),b.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),b.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M9 15l6-6"}),b.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),b.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),b.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),message:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20 15a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2h12a2 2 0 012 2z"})),play:b.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:b.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M10 6l-5 6 5 6"}),b.default.createElement("path",{d:"M5 12h14"})),arrowUp:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M12 19V5"}),b.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"})),resolution:b.default.createElement(b.default.Fragment,null,b.default.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2.5"}),b.default.createElement("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1.2",fill:"currentColor",stroke:"none"})),sun:b.default.createElement(b.default.Fragment,null,b.default.createElement("circle",{cx:"12",cy:"12",r:"4"}),b.default.createElement("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"})),moon:b.default.createElement(b.default.Fragment,null,b.default.createElement("path",{d:"M20.5 14.5A8.5 8.5 0 019.5 3.5a7 7 0 1011 11z"}))};function he({name:e,size:t=16,...n}){let r=Ys[e];return r?b.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n},r):null}function Ke({name:e,label:t,size:n=16,...r}){return b.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":t,"data-tip":t,...r},b.default.createElement(he,{name:e,size:n}))}function G({variant:e="ghost",size:t,icon:n,children:r,...o}){return b.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${t==="sm"?" cf-btn--sm":""}`,...o},n?b.default.createElement(he,{name:n,size:14}):null,r)}function dt({title:e,children:t,footer:n,onClose:r,wide:o}){return b.default.useEffect(()=>{let a=i=>{i.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[r]),b.default.createElement("div",{className:"cf-scrim",onPointerDown:a=>{a.target===a.currentTarget&&r()}},b.default.createElement("div",{className:`cf-dialog${o?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},b.default.createElement("header",{className:"cf-dialog-head"},b.default.createElement("h2",{className:"cf-dialog-title"},e),b.default.createElement(Ke,{name:"close",label:"\u5173\u95ED",onClick:r})),b.default.createElement("div",{className:"cf-dialog-body"},t,n?b.default.createElement("div",{className:"cf-dialog-foot"},n):null)))}var sr=class extends b.default.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[\u6625\u98CE\u753B\u5E03] \u6E32\u67D3\u51FA\u9519",t,n)}render(){let{error:t}=this.state;if(!t)return this.props.children;let n=String(t&&t.message||t);return b.default.createElement("div",{className:"cf-crash",role:"alert"},b.default.createElement("span",{className:"cf-crash-icon"},b.default.createElement(he,{name:"refresh",size:22})),b.default.createElement("p",{className:"cf-crash-title"},"\u8FD9\u4E00\u5757\u51FA\u9519\u4E86"),b.default.createElement("p",{className:"cf-crash-detail"},n),b.default.createElement("div",{className:"cf-crash-actions"},b.default.createElement(G,{variant:"primary",size:"sm",onClick:()=>this.setState({error:null})},"\u91CD\u8BD5"),b.default.createElement(G,{size:"sm",onClick:()=>{try{localStorage.clear()}catch{}location.reload()}},"\u91CD\u7F6E\u672C\u5730\u6570\u636E")))}};function wo({text:e,kind:t}){return b.default.createElement("p",{className:`cf-toast${t==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function Rt({icon:e="canvas",title:t,hint:n,action:r}){return b.default.createElement("div",{className:"cf-empty"},b.default.createElement("span",{className:"cf-empty-icon"},b.default.createElement(he,{name:e,size:28})),b.default.createElement("p",{className:"cf-empty-title"},t),n?b.default.createElement("p",{className:"cf-empty-hint"},n):null,r)}var Xs=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],Ht={image:"\u56FE\u7247",video:"\u89C6\u9891",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"},Oa=[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}],zn=[{id:"\u81EA\u52A8",label:"\u81EA\u52A8",w:1024,h:1024},{id:"1:1",label:"1:1",w:1024,h:1024},{id:"2:3",label:"2:3",w:832,h:1248},{id:"3:2",label:"3:2",w:1248,h:832},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1536,h:864},{id:"9:16",label:"9:16",w:864,h:1536},{id:"21:9",label:"21:9",w:1792,h:768}],fr=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],Xn=["1k","2k","4k","\u81EA\u52A8"],ta=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],lr=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],La=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],ko=0;function ze(e="x"){return ko+=1,`${e}_${Date.now().toString(36)}${ko.toString(36)}`}function Tr(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:ze("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}var Ws=240;var Ua=28,Vs=18;function fn(e){let[t,n]=String(e||"1:1").split(":").map(Number);return Number.isFinite(t)&&Number.isFinite(n)&&t>0&&n>0?t/n:1}function Tn(e="1:1",t=Ws){return{w:t,h:Math.round(t/fn(e))+Ua}}function So(e,t="1:1"){switch(e){case"image":return Tn(t);case"video":return{w:320,h:260};case"audio":return{w:232,h:140};case"text":return{w:230,h:160};case"config":return{w:232,h:256};case"group":return{w:420,h:320};default:return{w:232,h:200}}}function pt(e,t,n={}){let r=So(e,n.ratio),o={id:ze(e[0]),type:e,x:Math.round(t.x-r.w/2),y:Math.round(t.y-r.h/2),w:r.w,h:r.h,name:"",status:"idle",z:e==="group"?1:2,...n};return e==="text"&&(o.text=n.text??""),e==="config"&&(o.mode=n.mode??"image",o.modelKey=n.modelKey??"",o.ratio=n.ratio??"1:1",o.count=n.count??1,o.resolution=n.resolution??"\u81EA\u52A8",o.quality=n.quality??"\u81EA\u52A8",o.prompt=n.prompt??""),e==="image"&&(o.prompt=n.prompt??"",o.ratio=n.ratio??"1:1",o.resolution=n.resolution??"\u81EA\u52A8",o.locked=n.locked??!0,o.images=n.images??[],o.primaryImageId=n.primaryImageId??""),e==="video"&&(o.prompt=n.prompt??"",o.ratio=n.ratio??"16:9",o.seconds=n.seconds??4,o.videoTaskId=n.videoTaskId??"",o.storageKey=n.storageKey??""),e==="audio"&&(o.prompt=n.prompt??""),o}function na(e="openai"){let t=lr.find(n=>n.id===e)||lr[0];return{id:ze("ch"),name:"",protocol:t.id,baseUrl:t.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}var Gs="https://chunfengapi.com/v1",qs=[{id:"gpt-image-2.6",label:"GPT Image 2.6",caps:["image"],enabled:!0,source:"preset"},{id:"gpt-image-2.5",label:"GPT Image 2.5",caps:["image"],enabled:!0,source:"preset"},{id:"gpt-image-2",label:"GPT Image 2",caps:["image"],enabled:!0,source:"preset"},{id:"seedream-5-pro",label:"Seedream 5.0 Pro",caps:["image"],enabled:!0,source:"preset"},{id:"gemini-2.5-flash-image",label:"Gemini 2.5 Flash Image",caps:["image"],enabled:!0,source:"preset"}];function _a(e=null){let t=e?{...e}:na("openai"),n=Array.isArray(t.models)?t.models.map(a=>({...a,caps:[...a.caps||[]]})):[],r=new Set(n.map(a=>a.id)),o=[...n,...qs.filter(a=>!r.has(a.id)).map(a=>({...a,caps:[...a.caps]}))];return{...t,name:String(t.name||"").trim()?t.name:"\u6625\u98CE API \u5B98\u65B9\u63A8\u8350",protocol:"openai",baseUrl:Gs,models:o,enabled:!0}}function Ka(e,t){return`${e}:${t}`}function wn(e,t){if(!t)return null;let[n,...r]=t.split(":"),o=e.find(i=>i.id===n);if(!o)return null;let a=o.models.find(i=>i.id===r.join(":"));return a?{channel:o,model:a,label:a.label||a.id}:null}function en(e,t="image"){let n=[];for(let r of e)if(r.enabled)for(let o of r.models)o.enabled&&(o.caps||[]).includes(t)&&n.push({key:Ka(r.id,o.id),model:o,channel:r,label:o.label||o.id});return n}var Js=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],Qs=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function $r(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:Js.map(e=>({...e})),promptSources:[],showToolbarLabels:!1,assets:Qs.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8",transparent:!1},canvasCount:1},records:[],assistantMessages:[],assistantModel:null,configTab:"channels",grid:"dots",theme:"system"}}function No(){let e=Vs,t=Tn("3:4"),n=700,r=180,o=40,a=(v,D,T,A,z,K)=>{let Y=pt(v,{x:D+A/2,y:T+z/2},{...K,w:A,h:z});return Y.x=D,Y.y=T,Y},c=[{y:r,prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"},{y:r+t.h+e,prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"},{y:r+(t.h+e)*2,prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149"}].map(v=>a("image",n,v.y,t.w,t.h,{prompt:v.prompt,ratio:"3:4"})),s=c[c.length-1].y+t.h,f=a("group",n-o,r-60,t.w+o*2,s-r+o+60,{name:"\u9713\u8679\u8857\u89D2"}),d=a("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),m=a("config",400,300,232,176,{ratio:"3:4",count:1}),p=[{id:ze("e"),from:d.id,to:m.id},...c.map(v=>({id:ze("e"),from:m.id,to:v.id}))];return{nodes:[f,d,m,...c],edges:p}}function ja(e,t,n,r){if(n===r)return!1;let o=e.find(i=>i.id===n),a=e.find(i=>i.id===r);return!(!o||!a||o.type==="config"&&a.type==="config"||o.type==="group"||a.type==="group"||t.some(i=>i.from===n&&i.to===r))}function Mo(e,t){let n=e.filter(s=>t.includes(s.id)&&s.type!=="group");if(!n.length)return null;let r=44,o=Math.min(...n.map(s=>s.x))-r,a=Math.min(...n.map(s=>s.y))-r-34,i=Math.max(...n.map(s=>s.x+s.w))+r,c=Math.max(...n.map(s=>s.y+s.h))+r;return pt("group",{x:(o+i)/2,y:(a+c)/2},{w:Math.round(i-o),h:Math.round(c-a),name:"\u65B0\u5206\u7EC4",childIds:n.map(s=>s.id),x:Math.round(o),y:Math.round(a)})}function Co(e){return e.openCanvasId?"editor":e.view}function Ao(e,t){return{...e,view:t,openCanvasId:null}}function Io(e,t){return{...e,openCanvasId:t}}function Eo(e){return{...e,openCanvasId:null,view:"canvas"}}var Zs=["idle","running","done","failed"],cr=(e,t)=>Number.isFinite(e)?e:t;function Rs(e,t){if(!e||typeof e!="object")return null;let n=Ht[e.type]?e.type:"text",r=So(n),o=Zs.includes(e.status)?e.status:"idle",a=o==="running"&&(n!=="video"||!e.videoTaskId),i={...e,id:typeof e.id=="string"&&e.id?e.id:`n_${t}`,type:n,x:cr(e.x,0),y:cr(e.y,0),w:Math.max(40,cr(e.w,r.w)),h:Math.max(40,cr(e.h,r.h)),name:typeof e.name=="string"?e.name:"",status:a?"failed":o,error:a?"\u9875\u9762\u5237\u65B0\u540E\u751F\u6210\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210":typeof e.error=="string"?e.error:"",z:cr(e.z,n==="group"?3:2)};return Array.isArray(e.childIds)&&(i.childIds=e.childIds.filter(c=>typeof c=="string")),i}function ec(e,t){if(!e||typeof e!="object")return null;let n=Array.isArray(e.nodes)?e.nodes.map(Rs).filter(Boolean):[],r=new Set(n.map(a=>a.id)),o=Array.isArray(e.edges)?e.edges.filter(a=>a&&typeof a=="object"&&r.has(a.from)&&r.has(a.to)).map((a,i)=>({id:typeof a.id=="string"&&a.id?a.id:`e_${i}`,from:a.from,to:a.to})):[];return{...e,id:typeof e.id=="string"&&e.id?e.id:`cv_${t}`,name:typeof e.name=="string"&&e.name?e.name:"\u672A\u547D\u540D\u753B\u5E03",nodes:n,edges:o,grid:Oa.some(a=>a.id===e.grid)?e.grid:"dots",camera:e.camera&&typeof e.camera=="object"?e.camera:{x:0,y:0,s:1},updatedAt:cr(e.updatedAt,Date.now())}}function Dr(e){let t=$r();if(!e||typeof e!="object")return t;let n={...t};return Xs.some(r=>r.id===e.view)&&(n.view=e.view),typeof e.configTab=="string"&&(n.configTab=e.configTab),n.canvases=Array.isArray(e.canvases)?e.canvases.map(ec).filter(Boolean):[],n.channels=Array.isArray(e.channels)?e.channels.filter(r=>r&&typeof r=="object").map((r,o)=>({...r,id:typeof r.id=="string"&&r.id?r.id:`ch_${o}`,name:typeof r.name=="string"?r.name:"",baseUrl:typeof r.baseUrl=="string"?r.baseUrl:"",apiKey:typeof r.apiKey=="string"?r.apiKey:"",keyHint:typeof r.keyHint=="string"?r.keyHint:"",hasKey:!!r.apiKey||!!r.hasKey,enabled:r.enabled!==!1,models:Array.isArray(r.models)?r.models.filter(a=>a&&typeof a=="object").map((a,i)=>({...a,id:typeof a.id=="string"&&a.id?a.id:`m_${i}`,label:typeof a.label=="string"?a.label:"",caps:Array.isArray(a.caps)?a.caps.filter(c=>ta.some(s=>s.id===c)):[],enabled:a.enabled!==!1})):[]})):[],n.prompts=Array.isArray(e.prompts)?e.prompts.filter(r=>r&&typeof r=="object"):t.prompts,n.assets=Array.isArray(e.assets)?e.assets.filter(r=>r&&typeof r=="object"):t.assets,n.records=Array.isArray(e.records)?e.records.filter(r=>r&&typeof r=="object"):[],n.assistantMessages=Array.isArray(e.assistantMessages)?e.assistantMessages.filter(r=>r&&typeof r=="object"&&typeof r.text=="string"):[],n.assistantModel=e.assistantModel&&typeof e.assistantModel=="object"&&typeof e.assistantModel.provider=="string"&&typeof e.assistantModel.model=="string"?{provider:e.assistantModel.provider,model:e.assistantModel.model}:null,n.promptSources=Array.isArray(e.promptSources)?e.promptSources.filter(r=>r&&typeof r=="object"):[],e.defaults&&typeof e.defaults=="object"&&e.defaults.image&&typeof e.defaults.image=="object"&&(n.defaults={...t.defaults,...e.defaults,image:{...t.defaults.image,...e.defaults.image}}),n.openCanvasId=n.canvases.some(r=>r.id===e.openCanvasId)?e.openCanvasId:null,n.showToolbarLabels=!!e.showToolbarLabels,n.theme=["light","dark","system"].includes(e.theme)?e.theme:"system",n}function ra(e=""){let t=String(e||""),n=new Set;return{get:()=>t,set(r){let o=String(typeof r=="function"?r(t):r??"");if(o!==t){t=o;for(let a of n)a(o)}},subscribe(r){return n.add(r),()=>n.delete(r)}}}var zo="dsh-chunfeng-image/",To=typeof window<"u"&&!!window.__DSH_BOOT__,tc={providers:[{id:"preview",name:"\u9884\u89C8\u793A\u4F8B",models:[{id:"deepseek-v4.1-flash",name:"deepseek-v4.1-flash"},{id:"deepseek-v4.1-pro",name:"deepseek-v4.1-pro"}]}],default:{provider:"preview",model:"deepseek-v4.1-flash"},available:!1,preview:!0},dr=null;async function aa({force:e=!1}={}){if(dr&&!e)return dr;try{let t=await fetch(zo+"models",{headers:{"sec-fetch-site":"same-origin"},cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return dr=await t.json(),dr}catch(t){if(To)throw t;return dr=tc,dr}}function $o(e,t){return t?.model?e?.providers?.find(o=>o.id===t.provider)?.models?.find(o=>o.id===t.model)?.name||t.model:""}async function Pr({messages:e,system:t,model:n,maxTokens:r,signal:o,onDelta:a,images:i}){if(!To)return nc({messages:e,onDelta:a,signal:o});let c=await fetch(zo+"stream",{method:"POST",headers:{"content-type":"application/json","sec-fetch-site":"same-origin"},body:JSON.stringify({messages:e,system:t,model:n,maxTokens:r,images:i}),signal:o});if(!c.ok){let p=`\u6A21\u578B\u8C03\u7528\u5931\u8D25\uFF08HTTP ${c.status}\uFF09`;try{let v=await c.json();v?.error&&(p=v.error)}catch{}throw new Error(p)}if(!c.body)throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u6D41\u5F0F\u8BFB\u53D6");let s=c.body.getReader(),f=new TextDecoder,d="",m="";for(;;){let{value:p,done:v}=await s.read();if(v)break;d+=f.decode(p,{stream:!0});let D;for(;(D=d.indexOf(`
`))>=0;){let T=d.slice(0,D).trim();if(d=d.slice(D+1),!T)continue;let A;try{A=JSON.parse(T)}catch{continue}if(A.error)throw new Error(A.error);if(typeof A.d=="string"&&A.d&&(m+=A.d,a?.(A.d,m)),A.done)return m}}return m}async function nc({messages:e,onDelta:t,signal:n}){let o=`\uFF08\u9884\u89C8\u793A\u4F8B\uFF0C\u6CA1\u6709\u8FDE\u63A5\u771F\u5B9E\u6A21\u578B\uFF09

\u6536\u5230\uFF1A${([...e||[]].reverse().find(i=>i.role==="user")?.text||"").slice(0,60)}`,a="";for(let i of o){if(n?.aborted)break;a+=i,t?.(i,a),await new Promise(c=>setTimeout(c,12))}return a}kn();function dn({storageKey:e="",width:t=0,height:n=0,bytes:r=0,mimeType:o="image/png",prompt:a="",id:i,createdAt:c,url:s="",degraded:f=!1,remoteUrl:d=""}={}){return{id:i||`img_${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`,storageKey:e,width:t,height:n,bytes:r,mimeType:o,prompt:a,createdAt:c||Date.now(),url:s||d||"",degraded:!!f}}function Et(e){let t=e?.images||[];return t.length?t.find(r=>r.id===e.primaryImageId)||t[0]:null}function Do(e,t){if(!(e.images||[]).some(r=>r.id===t))return e;let n=e.images.find(r=>r.id===t);return{...e,primaryImageId:t,storageKey:n.storageKey||e.storageKey}}function Po(e,t){let n=(e.images||[]).filter(i=>i.id!==t);if(!n.length)return{...e,images:[],primaryImageId:"",storageKey:""};let o=n.some(i=>i.id===e.primaryImageId)?e.primaryImageId:n[0].id,a=n.find(i=>i.id===o);return{...e,images:n,primaryImageId:o,storageKey:a?.storageKey||""}}function Bo(e,{gap:t=24,makeId:n=()=>`i_${Math.random().toString(36).slice(2,8)}`}={}){let r=e.images||[];if(r.length<=1)return[];let o=[],a=e.x,i=e.y;return r.forEach(c=>{let s=c.width&&c.height?c.width/c.height:e.w/e.h,f=e.h,d=Math.max(140,Math.round(f*s));o.push({...e,id:n(),x:a,y:i,w:d,h:f,images:[c],primaryImageId:c.id,storageKey:c.storageKey||"",status:"idle"}),a+=d+t}),o}function Oo(e,{makeId:t}={}){if(e.length<=1)return null;let n=e[0],r=[],o=n.x,a=n.y,i=-1/0,c=-1/0;return e.forEach(s=>{(s.images?.length?s.images:[{id:`img_${s.id}`,storageKey:s.storageKey||"",width:s.w,height:s.h,bytes:s.bytes||0,mimeType:s.mimeType||"image/png",prompt:s.prompt||"",createdAt:Date.now()}]).forEach(f=>r.push(f)),i=Math.max(i,s.x+s.w),c=Math.max(c,s.y+s.h)}),{...n,id:t?t():`i_${Math.random().toString(36).slice(2,8)}`,x:o,y:a,w:Math.max(n.w,i-o),h:Math.max(n.h,c-a),images:r,primaryImageId:r[0]?.id||"",storageKey:r[0]?.storageKey||"",status:"idle"}}kn();Vn();var jo=Math.random().toString(36).slice(2),ac=3e4,oc=4*1024*1024,ic=200,sc=8e3;function Fo(e){let t=2166136261,n=JSON.stringify(e);for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619)>>>0;return t.toString(16)}function Ho(){try{let e=localStorage.getItem(ht.legacyState);return e&&e.length>2?e:null}catch{return null}}function cc(e,t=null){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Xa(e,t=new WeakSet){if(e===null||typeof e!="object")return typeof e=="string"&&(e.startsWith("blob:")||e.startsWith("data:"))?"":e;if(t.has(e))return e;if(t.add(e),Array.isArray(e))return e.map(r=>Xa(r,t));let n={};for(let[r,o]of Object.entries(e))n[r]=Xa(o,t);return n}async function lc(){let e=await nt(pe.meta,Te.schemaVersion).catch(()=>{}),t=Ho();return(!e||e<1)&&!!t}async function Yo({onProgress:e}={}){if(!await lc())return{status:"skipped"};let t=await nt(pe.meta,Te.migrationLock).catch(()=>null);if(t&&Date.now()-t.at<ac&&t.tabId!==jo)return{status:"locked"};await pn(pe.meta,Te.migrationLock,{at:Date.now(),tabId:jo}).catch(()=>{});let n=[],r=async(o,a,i)=>{await pn(o,a,i),n.push([o,a])};try{e?.("read");let o=Ho(),a=JSON.parse(o),i=Dr(a);e?.("backup"),await r(pe.meta,Te.rawBackup,o.length<=oc?{at:Date.now(),bytes:o.length,raw:o}:{at:Date.now(),bytes:o.length,omitted:!0}),e?.("transform");let c=$r().defaults,s=Xa({...i,openCanvasId:null,assistantMessages:(i.assistantMessages||[]).slice(-ic).map(T=>({...T,text:typeof T.text=="string"?T.text.slice(0,sc):""})),channels:(i.channels||[]).map(T=>T.apiKey?T:{...T,apiKey:"",keyHint:"",hasKey:!1})});if(e?.("write"),await r(pe.appState,Te.canvasProjects,{state:{canvases:s.canvases,openCanvasId:null,grid:s.grid},version:1}),await r(pe.appState,Te.prompts,s.prompts),await r(pe.appState,Te.promptSources,s.promptSources),await r(pe.appState,Te.assets,s.assets),await r(pe.appState,Te.assistantMessages,s.assistantMessages),s.records.length){let T=Date.now();await mr(pe.logs,s.records.map((A,z)=>[Te.logOne(A.id||`log_${T}_${z}`),{...A,createdAt:A.createdAt||T}])),n.push([pe.logs,"*"])}try{localStorage.setItem(ht.config,JSON.stringify({channels:s.channels,defaults:s.defaults||c,assistantModel:s.assistantModel})),localStorage.setItem(ht.ui,JSON.stringify({view:s.view,configTab:s.configTab,grid:s.grid}))}catch(T){throw new Error(`\u914D\u7F6E\u5C42\u5199\u5165\u5931\u8D25\uFF08localStorage \u53EF\u80FD\u5DF2\u6EE1\uFF09\uFF1A${T.message}`)}e?.("verify");let d=(await nt(pe.appState,Te.canvasProjects))?.state?.canvases,m=Array.isArray(d)&&d.length===s.canvases.length,p=m&&s.canvases.every((T,A)=>{let z=d[A];return z?.id===T.id&&Array.isArray(z.nodes)&&z.nodes.length===T.nodes.length&&Fo(z.nodes)===Fo(T.nodes)}),v=cc(ht.config,{}),D=Array.isArray(v.channels)&&v.channels.length===s.channels.length;if(!m||!p||!D)throw new Error("\u8FC1\u79FB\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A\u5199\u56DE\u5185\u5BB9\u4E0E\u65E7\u6570\u636E\u4E0D\u4E00\u81F4");return e?.("mark"),await mr(pe.meta,[[Te.schemaVersion,1],[Te.migratedAt,{at:Date.now(),fromKey:ht.legacyState,fromBytes:o.length,canvases:s.canvases.length}]]),await Wn(pe.meta,[Te.migrationLock]).catch(()=>{}),{status:"done",canvases:s.canvases.length}}catch(o){for(let[a,i]of n.reverse())i==="*"?await _o(a).catch(()=>{}):await Wn(a,[i]).catch(()=>{});throw await pn(pe.meta,Te.migrationStatus,{status:"failed",at:Date.now(),error:String(o?.message||o)}).catch(()=>{}),await Wn(pe.meta,[Te.migrationLock]).catch(()=>{}),o}}Vn();kn();Vn();var Go="dsh-chunfeng-image/";function Wa(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function dc(e,t){if(e===t)return!0;if(!e||!t)return!1;let n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>e[r]===t[r])}var Cf=Te.canvasProjects,Xo=0,Wo=null;function pc(e){Wo=e,clearTimeout(Xo),Xo=setTimeout(()=>{let t=Wo;t&&(!Array.isArray(t.channels)||t.channels.length===0||fetch(`${Go}config`,{method:"PUT",headers:{"content-type":"application/json","sec-fetch-site":"same-origin"},body:JSON.stringify(t)}).catch(()=>{}))},600)}async function fa(){try{let e=await fetch(`${Go}config`,{headers:{"sec-fetch-site":"same-origin"},cache:"no-store"});return e.ok&&(await e.json())?.config||null}catch{return null}}var gr=0,ca=null,la=null,sa=Promise.resolve();async function qo(){let e=Wa(ht.config)||{},t=Wa(ht.configBackup)||{},n=Wa(ht.ui)||{},r=Array.isArray(e.channels)&&e.channels.length?e.channels:Array.isArray(t.channels)&&t.channels.length?t.channels:e.channels;try{let o=await nt(pe.appState,Te.canvasProjects);if(o){la=o.state?.canvases??null;let[a,i,c,s,f]=await Promise.all([nt(pe.appState,Te.prompts).catch(()=>{}),nt(pe.appState,Te.promptSources).catch(()=>{}),nt(pe.appState,Te.assets).catch(()=>{}),nt(pe.appState,Te.assistantMessages).catch(()=>{}),Ko(pe.logs).catch(()=>[])]),d=Array.isArray(f)?f.filter(v=>v&&typeof v=="object"&&typeof v.id=="string").sort((v,D)=>(D.at||0)-(v.at||0)).slice(0,80):[],m=Array.isArray(e.promptSources)?e.promptSources:Array.isArray(t.promptSources)?t.promptSources:null,p=Array.isArray(i)&&i.length?i:m||i;return{from:"idb",state:{...o.state||{},prompts:a,promptSources:p,assets:c,assistantMessages:s,records:d,channels:r,defaults:e.defaults,assistantModel:e.assistantModel,view:n.view,configTab:n.configTab,showToolbarLabels:!!n.showToolbarLabels,theme:n.theme||"system"}}}}catch{}try{let o=localStorage.getItem(ht.legacyState);if(!o)return Array.isArray(r)&&r.length?{from:"config",state:{channels:r,defaults:e.defaults,assistantModel:e.assistantModel,promptSources:Array.isArray(e.promptSources)?e.promptSources:void 0}}:{from:"none",state:null};let a=JSON.parse(o);return a&&typeof a=="object"?{from:"legacy",state:a}:{from:"none",state:null}}catch{return{from:"none",state:null}}}var Vo=null;function Jo(e,{pick:t,debounceMs:n=400,onError:r}={}){let o=t?t(e):{},a={canvases:e?.canvases,openCanvasId:e?.openCanvasId,channels:e?.channels,defaults:e?.defaults,assistantModel:e?.assistantModel,prompts:e?.prompts,promptSources:e?.promptSources,assets:e?.assets,assistantMessages:e?.assistantMessages,records:e?.records,view:e?.view,configTab:e?.configTab,grid:e?.grid,showToolbarLabels:e?.showToolbarLabels,theme:e?.theme,...o};la&&dc(la,a)||(la=a,ca=e,gr&&clearTimeout(gr),gr=setTimeout(()=>{da({onError:r})},n))}function da({onError:e}={}){if(!ca)return sa;let t=ca;return ca=null,gr&&(clearTimeout(gr),gr=0),sa=sa.then(async()=>{let n=Vo;try{let r=[];if((!n||n.canvases!==t.canvases||n.openCanvasId!==t.openCanvasId||n.grid!==t.grid)&&r.push([Te.canvasProjects,{state:{canvases:t.canvases,openCanvasId:t.openCanvasId,grid:t.grid},version:1}]),(!n||n.prompts!==t.prompts)&&r.push([Te.prompts,t.prompts]),(!n||n.promptSources!==t.promptSources)&&r.push([Te.promptSources,t.promptSources]),(!n||n.assets!==t.assets)&&r.push([Te.assets,t.assets]),(!n||n.assistantMessages!==t.assistantMessages)&&r.push([Te.assistantMessages,t.assistantMessages]),r.length&&await mr(pe.appState,r),!n||n.records!==t.records){let i=Array.isArray(t.records)?t.records.slice(0,80):[],c=Array.isArray(n?.records)?n.records:[],s=new Set(i.map(d=>d.id)),f=c.filter(d=>d?.id&&!s.has(d.id)).map(d=>Te.logOne(d.id));f.length&&await Wn(pe.logs,f),i.length&&await mr(pe.logs,i.map(d=>[Te.logOne(d.id),d]))}let o=!n||n.channels!==t.channels||n.defaults!==t.defaults||n.assistantModel!==t.assistantModel||n.promptSources!==t.promptSources,a=!n||n.view!==t.view||n.configTab!==t.configTab||n.grid!==t.grid||n.showToolbarLabels!==t.showToolbarLabels||n.theme!==t.theme;try{if(o){let i=JSON.stringify({channels:t.channels,defaults:t.defaults,assistantModel:t.assistantModel,promptSources:t.promptSources}),c=localStorage.getItem(ht.config);if(c&&c!==i)try{localStorage.setItem(ht.configBackup,c)}catch{}localStorage.setItem(ht.config,i),pc({channels:t.channels,defaults:t.defaults,assistantModel:t.assistantModel,promptSources:t.promptSources})}a&&localStorage.setItem(ht.ui,JSON.stringify({view:t.view,configTab:t.configTab,grid:t.grid,showToolbarLabels:!!t.showToolbarLabels,theme:t.theme||"system"}))}catch(i){e?.(i,{quota:!0})}Vo={canvases:t.canvases,openCanvasId:t.openCanvasId,channels:t.channels,defaults:t.defaults,assistantModel:t.assistantModel,prompts:t.prompts,promptSources:t.promptSources,assets:t.assets,assistantMessages:t.assistantMessages,records:t.records,view:t.view,configTab:t.configTab,grid:t.grid,showToolbarLabels:t.showToolbarLabels,theme:t.theme}}catch(r){e?.(r,{quota:Uo(r)})}}),sa}typeof window<"u"&&(window.__CF_STORAGE__={flush:()=>da(),async readCanvasState(){try{return(await nt(pe.appState,Te.canvasProjects))?.state??null}catch{return null}},readConfig(){try{return JSON.parse(localStorage.getItem(ht.config)||"null")}catch{return null}},async readMeta(){let[e,t,n]=await Promise.all([nt(pe.meta,Te.schemaVersion).catch(()=>{}),nt(pe.meta,Te.migratedAt).catch(()=>{}),nt(pe.meta,Te.migrationStatus).catch(()=>{})]);return{schemaVersion:e,migratedAt:t,status:n}}});Vn();kn();Gn();var ga="dsh-cf:prompt-cache:v1",vc=6e4,bc=6e3,si=3,yc=3e3,xc="https://raw.githubusercontent.com/yukkcat/image-prompts/main/dist/sources",wc="https://cdn.jsdelivr.net/gh/yukkcat/image-prompts@main/dist/sources";function tr(e,t,n){return{id:e,name:t,url:`${xc}/${e}.json`,fallbackUrl:`${wc}/${e}.json`,homepage:n,enabled:!0,builtIn:!0}}var Ur=[tr("banana-prompt-quicker","Banana Prompt Quicker","https://glidea.github.io/banana-prompt-quicker/"),tr("davidwu-gpt-image2-prompts","DavidWu GPT Image 2","https://github.com/davidwuw0811-boop/awesome-gpt-image2-prompts"),tr("freestylefly-gpt-image-2","Freestylefly GPT Image 2","https://github.com/freestylefly/awesome-gpt-image-2"),tr("awesome-gpt-image","Awesome GPT Image","https://github.com/ZeroLu/awesome-gpt-image"),tr("awesome-gpt4o-image-prompts","Awesome GPT-4o","https://github.com/ImgEdify/Awesome-GPT4o-Image-Prompts"),tr("youmind-gpt-image-2","YouMind GPT Image 2","https://github.com/YouMind-OpenLab/awesome-gpt-image-2"),tr("youmind-nano-banana-pro","YouMind Nano Banana Pro","https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts")];function va(e){let t=String(e||"").trim().match(/^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/i);return t?`https://cdn.jsdelivr.net/gh/${t[1]}/${t[2]}@${t[3]}/${t[4]}`:""}function yr(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/\/+(readme(?:\.md)?)?$/i,"").replace(/\/tree\/(?:main|master)$/i,"").replace(/\/+$/,"")}function kc(e){let t=yr(e);return t&&Ur.find(n=>yr(n.homepage)===t||yr(n.url)===t||yr(n.fallbackUrl)===t)||null}function Yt(e){let t=e&&typeof e=="object"?e:{url:e},n=String(t.url||"").trim(),r=n,o=String(t.homepage||"").trim(),a=!1,i=!1,c=kc(n);if(c)yr(n)===yr(c.homepage)&&(r=c.url,a=!0),o||(o=c.homepage);else{let m=n.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw)\/([^/]+)\/(.+)$/i);m&&(r=`https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}/${m[4]}`,i=!0,o||(o=n))}let s=String(t.fallbackUrl||"").trim()||(c?c.fallbackUrl:"")||va(r),f=String(t.id||"").trim()||c?.id||`src_${qa(r||n||"empty")}`,d=String(t.name||"").trim()||c?.name||"\u672A\u547D\u540D\u6765\u6E90";return{id:f,name:d,url:r,fallbackUrl:s,homepage:o,enabled:t.enabled!==!1,builtIn:!!(t.builtIn||c),convertedFromHomepage:a,convertedFromBlob:i}}var Sn=null;function li(){if(typeof localStorage>"u")return null;try{let e=localStorage.getItem(ga);if(!e)return null;let t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch{return null}}function fi(){return typeof indexedDB<"u"&&indexedDB!==null}function an(){return Sn&&typeof Sn=="object"||(Sn=li()||{}),Sn}async function di(){if(!fi())return an();try{let e=await nt(pe.appState,Te.promptCache).catch(()=>null),t=li(),n={...t&&typeof t=="object"?t:{},...Sn&&typeof Sn=="object"?Sn:{},...e&&typeof e=="object"?e:{}};if(Sn=n,t&&Object.keys(t).length){await pn(pe.appState,Te.promptCache,n).catch(()=>{});try{localStorage.removeItem(ga)}catch{}}return n}catch{return an()}}function pi(e){let t=e&&typeof e=="object"?e:{};if(Sn=t,fi())return pn(pe.appState,Te.promptCache,t).catch(()=>{}),!0;if(typeof localStorage>"u")return!0;try{return localStorage.setItem(ga,JSON.stringify(t)),!0}catch{try{let n=Object.keys(t),r={};return n.slice(-5).forEach(o=>{r[o]=t[o]}),localStorage.setItem(ga,JSON.stringify(r)),!0}catch{return!1}}}function ha(e,t=null){let n=[];if(Array.isArray(t)){let r=new Set;for(let o of t){if(!o||o.enabled===!1||!o.url)continue;let a=Yt(o),i=e?.[a.url]||e?.[o.url]||e?.[a.id];if(i?.items?.length)for(let c of i.items){let s=`${a.id}\0${c.id}`;r.has(s)||(r.add(s),n.push({...c,sourceId:a.id,sourceName:a.name,category:c.category||a.name}))}}return n}for(let[r,o]of Object.entries(e||{})){if(!o?.items?.length)continue;let a=o.id||r,i=o.name||r;o.items.forEach(c=>{n.push({...c,sourceId:c.sourceId||a,sourceName:i,category:c.category||i})})}return n}function _r(e,t,n=an()){let r=(e||[]).filter(c=>c&&typeof c=="object"&&!c.sourceId),o=ha(n,t||[]),a=[],i=new Set;for(let c of[...o,...r]){let s=`${c.sourceId||""}\0${c.id||`${c.title}\0${c.text}`}`;i.has(s)||(i.add(s),a.push(c))}return a}function Ga(e,t){let n=String(t||"").trim();if(!n)return"";if(!e)return n;try{return new URL(n,e).toString()}catch{return n}}var kt=(e,t)=>{if(!e||typeof e!="object")return"";for(let n of t){let r=e[n];if(typeof r=="string"&&r.trim())return r.trim()}return""};function Sc(e,t){if(!Array.isArray(e))return[];let n=[],r=new Set;for(let o of e){let a=typeof o=="string"?o.trim():kt(o,["url","image_url","imageUrl","src"]);if(!a)continue;let i=Ga(t,a);r.has(i)||(r.add(i),n.push(i))}return n}function Nc(e,t={}){let n=(i,c=0)=>{if(!i||c>4)return[];if(Array.isArray(i))return i.flatMap(s=>Array.isArray(s)?n(s,c+1):[ci(s,t)]);if(typeof i!="object")return[];for(let s of["prompts","items","list","data","results"])if(Array.isArray(i[s]))return i[s].map(f=>ci(f,t));return Array.isArray(i.categories)?i.categories.flatMap(s=>{let f=kt(s,["name","title","category"]);return n(s,c+1).map(d=>d?{...d,category:d.category||f}:null)}):[]},r=n(e).filter(Boolean),o=new Set,a=[];for(let i of r){let c=`${i.title}\0${i.text}`;if(!o.has(c)&&(o.add(c),a.push(i),a.length>=yc))break}return a}function ci(e,t={}){if(!e)return null;if(typeof e=="string"){let p=e.trim();return p?{id:`p_${qa(`${p.slice(0,24)}\0${p}`)}`,title:p.slice(0,24),text:p,category:t.sourceName||"",tags:[],coverUrl:"",referenceImageUrls:[],description:"",preview:"",author:"",sourceUrl:"",createdAt:"",updatedAt:"",imageMode:"",imageSize:"",sourceId:t.sourceId||"",sourceName:t.sourceName||""}:null}if(typeof e!="object")return null;let n=kt(e,["prompt","text","content","value","zh","description"]),r=kt(e,["title","name","label"])||n.slice(0,24);if(!n&&!r)return null;let o=kt(e,["description","desc","summary"]),a=o&&o!==n?o:"",i=e.tags??e.tag??e.labels,c=Array.isArray(i)?i.filter(p=>typeof p=="string"&&p.trim()).map(p=>p.trim()):typeof i=="string"&&i.trim()?i.split(/[,，;；\s]+/).filter(Boolean):[],s=e.referenceImageUrls??e.referenceImages??e.refImages??(Array.isArray(e.images)?e.images:[]),f=Sc(s,t.baseUrl),d=kt(e,["coverUrl","cover","imageUrl","image","thumbnail","previewImage"]),m=Ga(t.baseUrl,d)||f[0]||"";return{id:kt(e,["id"])||`p_${qa(`${r}\0${n}`)}`,title:r,text:n||r,category:kt(e,["category","type","group","class"])||t.sourceName||"",tags:c,coverUrl:m,referenceImageUrls:f,description:a,preview:kt(e,["preview"]),author:kt(e,["author","creator"]),sourceUrl:Ga(t.baseUrl,kt(e,["sourceUrl","homepage","link"])),createdAt:kt(e,["createdAt","date"]),updatedAt:kt(e,["updatedAt"]),imageMode:kt(e,["imageMode"]),imageSize:kt(e,["imageSize"]),sourceId:t.sourceId||kt(e,["sourceId"])||"",sourceName:t.sourceName||""}}function qa(e){let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0).toString(36)}async function Mc(e,t){try{let n=await fetch(`dsh-chunfeng-image/fetch?url=${encodeURIComponent(e)}`,{signal:t,headers:{"sec-fetch-site":"same-origin"},cache:"no-store"});if(!n.ok||!String(n.headers.get("content-type")||"").toLowerCase().includes("application/json"))return null;let o=await n.json();return!o||typeof o!="object"?null:o}catch{return null}}async function Cc(e,t,n){let r=0,o="",a=await Mc(e,t);if(a){if(r=a.status,o=a.text||"",!a.ok&&!o)return{ok:!1,error:a.error||`HTTP ${r}`}}else{let s=await fetch(e,{signal:t,cache:"no-cache"});if(r=s.status,!s.ok)return{ok:!1,error:`HTTP ${s.status}`};o=await s.text()}if(r&&(r<200||r>=300))return{ok:!1,error:`HTTP ${r}`};if(/^\s*<(!doctype|html|head|body)/i.test(o))return{ok:!1,error:"\u8FD4\u56DE\u7684\u662F\u7F51\u9875\u800C\u4E0D\u662F JSON\uFF08\u8BF7\u586B .json \u6570\u636E\u76F4\u94FE\uFF09"};let i;try{i=JSON.parse(o)}catch{return{ok:!1,error:"JSON \u683C\u5F0F\u6709\u8BEF"}}let c=Nc(i,{baseUrl:e,sourceId:n.id,sourceName:n.name});return c.length?{ok:!0,items:c}:{ok:!1,error:"\u8FD9\u4EFD JSON \u91CC\u6CA1\u8BA4\u51FA\u63D0\u793A\u8BCD"}}function Ja(e,t=an()){let n=Yt(e);if(!n.url||n.enabled===!1)return!1;let r=t[n.url]||t[e?.url]||t[n.id];return!!(!r||!Array.isArray(r.items)||r.items.length===0||r.lastError)}async function ui(e,{signal:t,timeoutMs:n=vc,hedgeDelayMs:r=bc}={}){let o=Yt(e),{id:a,name:i,url:c,fallbackUrl:s}=o;if(!c)return{ok:!1,id:a,name:i,url:c,items:[],error:"\u6CA1\u6709\u586B\u5730\u5740"};if(!/^https?:\/\//i.test(c))return{ok:!1,id:a,name:i,url:c,items:[],error:"\u5730\u5740\u5FC5\u987B\u662F http(s)"};let f=Date.now(),d=!!(s&&s!==c),m=new AbortController,p=new AbortController,v=!1,D=()=>{m.abort(),p.abort()},T=setTimeout(()=>{v=!0,D()},n),A=()=>D();t?.addEventListener("abort",A,{once:!0});let z=I=>I?.name==="AbortError"||I?.name==="TimeoutError"?t?.aborted?"\u5DF2\u53D6\u6D88":v?`\u8D85\u8FC7 ${Math.round(n/1e3)} \u79D2\u6CA1\u54CD\u5E94`:"\u8BF7\u6C42\u5DF2\u53D6\u6D88":/failed to fetch|load failed|networkerror/i.test(I?.message||"")?"\u53D6\u4E0D\u5230\u5185\u5BB9\uFF1A\u8DE8\u57DF\u88AB\u62E6\u6216\u5730\u5740\u4E0D\u53EF\u8FBE\uFF08Host \u4EE3\u7406\u4E5F\u6CA1\u6210\u529F\uFF09":I?.message||"\u7F51\u7EDC\u9519\u8BEF",K=async(I,O)=>{try{return await Cc(I,O.signal,o)}catch(Z){return{ok:!1,error:z(Z),aborted:O.signal.aborted}}},Y=null;try{if(!d){let O=await K(c,m);return O.ok?{ok:!0,id:a,name:i,url:c,items:O.items,ms:Date.now()-f}:{ok:!1,id:a,name:i,url:c,items:[],error:O.error||z({name:"AbortError"}),ms:Date.now()-f}}let I=await new Promise(O=>{let Z=!1,ue=!1,te=!1,ee=!1,$e=null,J=null,k=E=>{Z||(Z=!0,Y&&(clearTimeout(Y),Y=null),D(),O(E))},H=()=>{if(!ue||!ee)return;let E=!J?.aborted&&J?.error||!$e?.aborted&&$e?.error||$e?.error||J?.error||(t?.aborted?"\u5DF2\u53D6\u6D88":`\u8D85\u8FC7 ${Math.round(n/1e3)} \u79D2\u6CA1\u54CD\u5E94`);k({ok:!1,error:E})},re=()=>{if(!(te||Z)){if(te=!0,Y&&(clearTimeout(Y),Y=null),t?.aborted||v){ee=!0,J={ok:!1,error:t?.aborted?"\u5DF2\u53D6\u6D88":`\u8D85\u8FC7 ${Math.round(n/1e3)} \u79D2\u6CA1\u54CD\u5E94`,aborted:!0},H();return}K(s,p).then(E=>{if(ee=!0,J=E,E.ok){m.abort(),k(E);return}H()})}};Y=setTimeout(re,Math.max(0,r)),K(c,m).then(E=>{if(ue=!0,$e=E,E.ok){p.abort(),k(E);return}te?H():re()})});return I.ok?{ok:!0,id:a,name:i,url:c,items:I.items,ms:Date.now()-f}:{ok:!1,id:a,name:i,url:c,items:[],error:I.error,ms:Date.now()-f}}finally{Y&&clearTimeout(Y),clearTimeout(T),t?.removeEventListener("abort",A)}}async function mi(e,{signal:t,timeoutMs:n}={}){let r=an(),o=await ui(e,{signal:t,timeoutMs:n});if(o.ok){let a=o.url||o.name;r[a]={id:o.id,name:o.name,url:o.url,items:o.items,at:Date.now(),count:o.items.length}}else o.url&&r[o.url]&&(r[o.url]={...r[o.url],lastError:o.error,lastTriedAt:Date.now()});return pi(r),{result:o,cache:r,prompts:ha(r,[e])}}async function ba(e,{signal:t,onProgress:n,onResult:r,concurrency:o=si,onlyMissingOrFailed:a=!1,timeoutMs:i,hedgeDelayMs:c}={}){let s=(e||[]).filter(A=>A&&A.url&&A.enabled!==!1),f=an();if(!s.length)return{results:[],skipped:0,cache:f,prompts:[]};let d=a?s.filter(A=>Ja(A,f)):s,m=s.length-d.length;if(!d.length)return{results:[],skipped:m,cache:f,prompts:ha(f,s)};let p=new Array(d.length),v=0,D=Math.max(1,Math.min(Number(o)||si,d.length)),T=async()=>{for(;v<d.length;){let A=v;v+=1;let z=d[A];n?.({index:A,total:d.length,name:z.name||z.url});let K;try{K=await ui(z,{signal:t,timeoutMs:i,hedgeDelayMs:c})}catch(Y){let I=Yt(z);K={ok:!1,id:I.id,name:I.name,url:I.url,items:[],error:Y?.message||"\u672A\u77E5\u9519\u8BEF"}}if(p[A]=K,K.ok){let Y=K.url||K.name;f[Y]={id:K.id,name:K.name,url:K.url,items:K.items,at:Date.now(),count:K.items.length}}else K.url&&f[K.url]&&(f[K.url]={...f[K.url],lastError:K.error,lastTriedAt:Date.now()});pi(f),r?.(K,{...f})}};return await Promise.all(Array.from({length:D},T)),{results:p,skipped:m,cache:f,prompts:ha(f,s)}}function gi(e,t=[],n={}){return(e||[]).map(r=>{let o=Yt(r),a=t.find(c=>c.url===o.url||c.url===r.url||c.id===o.id),i=n[o.url]||n[r.url]||n[o.id];return{id:o.id,name:o.name,url:o.url,enabled:o.enabled,ok:a?a.ok:null,error:a?a.error:i?.lastError||"",count:i?.count||i?.items?.length||0,at:i?.at||0,ms:a?.ms||0}})}async function nr(e,{max:t=4,signal:n}={}){let r=(e||[]).filter(i=>typeof i=="string"&&/^https?:\/\//i.test(i.trim())).slice(0,t);if(!r.length)return[];let o=async i=>{let c=[i],s=va(i);s&&s!==i&&c.push(s);for(let m of c)try{let p=await fetch(`dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(m)}`,{signal:n,headers:{"sec-fetch-site":"same-origin"},cache:"force-cache"});if(p.ok){let v=await p.blob();if(v.size>0&&v.type.startsWith("image/"))return v}if(p.status===404)break}catch(p){if(p?.name==="AbortError"||n?.aborted)throw p}let f=await fetch(i,{signal:n,cache:"force-cache"});if(!f.ok)return null;let d=await f.blob();return d.size>0&&d.type.startsWith("image/")?d:null},a=[];for(let i=0;i<r.length&&!n?.aborted;i+=1)try{let c=await o(r[i]);if(!c)continue;let s=await $n(c).catch(()=>({width:0,height:0})),f=wt("ref");await Bt(f,c,{mimeType:c.type||"image/png",source:"prompt-ref",width:s.width,height:s.height});let d=await vt(f).catch(()=>URL.createObjectURL(c));a.push({id:`ref_${Date.now().toString(36)}_${i}`,name:`\u63D0\u793A\u8BCD\u53C2\u8003\u56FE ${i+1}`,storageKey:f,url:d,width:s.width,height:s.height})}catch(c){if(c?.name==="AbortError"||n?.aborted)break}return a}var x=Zt(require("react"),1);var g=Zt(require("react"),1);function Ac(e,t){return Math.max(40,Math.abs(t-e)*.45)}function Ic(e,t){return{x1:e.x+e.w,y1:e.y+e.h/2,x2:t.x,y2:t.y+t.h/2}}function hi(e,t,n){if(!e||!t)return!1;let{x1:r,y1:o,x2:a,y2:i}=Ic(e,t),c=Ac(r,a);return Math.max(r+c,a)>n.left&&Math.min(r,a-c)<n.right&&Math.max(o,i)>n.top&&Math.min(o,i)<n.bottom}function vi(e,t){return e?e.x+e.w>t.left&&e.x<t.right&&e.y+e.h>t.top&&e.y<t.bottom:!1}function bi(e,t,n){let r=e.s||1,o=n??Math.max(280,280),a=-e.x/r-o,i=-e.y/r-o;return{left:a,top:i,right:a+(t.w||0)/r+o*2,bottom:i+(t.h||0)/r+o*2}}Gn();var Pn=Zt(require("react"),1);var Ec=14,zc=[{id:"copyPrompt",label:"\u590D\u5236\u63D0\u793A\u8BCD",icon:"copy",group:0},{id:"reversePrompt",label:"\u53CD\u63A8\u63D0\u793A\u8BCD",icon:"sparkle",group:0},{id:"sendToStudio",label:"\u9001\u53BB\u5DE5\u4F5C\u53F0",icon:"image",group:0},{id:"replace",label:"\u66FF\u6362\u56FE\u7247",icon:"replace",group:1},{id:"maskEdit",label:"\u5C40\u90E8\u4FEE\u6539",icon:"edit",group:1},{id:"crop",label:"\u88C1\u526A",icon:"crop",group:1},{id:"split",label:"\u5207\u56FE",icon:"split",group:1},{id:"upscale",label:"\u653E\u5927",icon:"upscale",group:1},{id:"angle",label:"\u591A\u89D2\u5EA6",icon:"angle",group:1},{id:"view",label:"\u770B\u5927\u56FE",icon:"search",group:2},{id:"info",label:"\u4FE1\u606F",icon:"info",group:2},{id:"saveAsset",label:"\u5B58\u4E3A\u8D44\u4EA7",icon:"folder",group:3},{id:"download",label:"\u4E0B\u8F7D",icon:"download",group:3},{id:"delete",label:"\u5220\u9664",icon:"trash",group:4,danger:!0}];function Tc(e,t){if(!e||!t)return null;let n=t.s||1;return{left:t.x+(e.x+e.w/2)*n,top:t.y+e.y*n-Ec}}function yi({node:e,cam:t,showLabels:n,onAction:r,onKeep:o,onLeave:a}){let i=Pn.default.useMemo(()=>{let s=e?.locked!==!1,f=[...zc],d=f.findIndex(m=>m.id==="angle");return f.splice(d+1,0,{id:"resize",label:s?"\u6539\u4E3A\u81EA\u7531\u6BD4\u4F8B":"\u6539\u4E3A\u7B49\u6BD4\u7F29\u653E",icon:s?"lock":"unlock",group:1}),f},[e?.locked]),c=Tc(e,t);return!c||!e?null:Pn.default.createElement("div",{className:`cf-node-toolbar${n?" is-labels":""}`,style:{left:c.left,top:c.top},role:"toolbar","aria-label":"\u56FE\u7247\u64CD\u4F5C",onPointerEnter:o,onPointerLeave:a,onPointerDown:s=>s.stopPropagation()},i.map((s,f)=>{let d=i[f-1],m=d&&d.group!==s.group;return Pn.default.createElement(Pn.default.Fragment,{key:s.id},m?Pn.default.createElement("span",{className:"cf-node-toolbar-sep","aria-hidden":"true"}):null,Pn.default.createElement("button",{type:"button",className:`cf-node-toolbar-btn${s.danger?" is-danger":""}`,"data-tip":s.label,"aria-label":s.label,onClick:p=>{p.stopPropagation(),r(s.id,e)}},Pn.default.createElement(he,{name:s.icon,size:15}),n?Pn.default.createElement("span",null,s.label):null))}))}var ya=.1,Qa=3,xi=4096;function Ni(){let e=g.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0,prevS:null,gridS:null,stage:null}),t=g.default.useCallback(o=>{e.current.stage=o},[]),n=g.default.useCallback((o,a=e.current.stage)=>{let i=e.current;o&&(o.style.transform=`translate3d(${i.x}px, ${i.y}px, 0) scale(${i.s})`,i.prevS!==i.s&&(i.prevS=i.s,o.style.setProperty("--cf-cam-s",String(i.s))));let c=a?.firstElementChild?.classList?.contains("cf-grid")?a.firstElementChild:null;if(c){let s=28*i.s;i.gridS!==s&&(i.gridS=s,c.style.setProperty("--cf-grid",`${s}px`));let f=(i.x%s+s)%s,d=(i.y%s+s)%s;c.style.transform=`translate3d(${f}px, ${d}px, 0)`}},[]),r=g.default.useCallback((o,a,i,c,s,f=e.current.stage)=>{let d=e.current;d.tx=a,d.ty=i,d.ts=Math.min(Qa,Math.max(ya,c));let m=()=>{d.raf=0,d.x=d.tx,d.y=d.ty,d.s=d.ts,n(o,f),s?.()};if(typeof requestAnimationFrame!="function"){m();return}d.raf||(d.raf=requestAnimationFrame(m))},[n]);return g.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),g.default.useMemo(()=>({cam:e,bindStage:t,apply:n,moveTo:r}),[t,n,r])}var $c=["se","sw","ne","nw"];function wi(e,t){if(!e||!t)return"";let n=e.x+e.w,r=e.y+e.h/2,o=t.x,a=t.y+t.h/2,i=Math.max(40,Math.abs(o-n)*.45);return`M ${n} ${r} C ${n+i} ${r}, ${o-i} ${a}, ${o} ${a}`}function Dc(e){let[t,n]=g.default.useState(Date.now());return g.default.useEffect(()=>{if(!e)return;let r=setInterval(()=>n(Date.now()),1e3);return()=>clearInterval(r)},[e]),e?Math.max(0,Math.round((t-e)/1e3)):0}function Pc({node:e,scaleBucket:t=1,expanded:n=!1,onToggleExpand:r}){let o=e.images||[],a=Et(e),i=a?.storageKey||e.storageKey||"",[c,s]=g.default.useState(()=>(i?rn(i):"")||e.src||""),[f,d]=g.default.useState(()=>i?Dn(i):"");g.default.useEffect(()=>{let z=!0;if(!i)return s(e.src||""),d(""),()=>{z=!1};s(rn(i)),d(Dn(i)),vt(i).then(Y=>{z&&s(Y||"")}).catch(()=>{z&&s("")}),vr(i).then(Y=>{z&&Y&&d(Y)}).catch(()=>{});let K=ri(Y=>{z&&Y===i&&d(Dn(i))});return()=>{z=!1,K()}},[i,e.src]);let m=e.status==="running",p=o.length>1,v=Dc(m?e.startedAt:0),D=a?.degraded&&a.url||"",T=ai({originalUrl:c,previewUrl:f,forceOriginal:t>=1.8,renderedPx:Math.max(e.w||0,e.h||0)*t}),A=T||D;return g.default.createElement("div",{className:`cf-node-media${p?" cf-node-media--batch":""}${A?" has-img":""}`},A?g.default.createElement("img",{src:A,alt:e.prompt||"\u56FE\u7247",decoding:"async",draggable:!1}):null,!A&&m?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D",v>=3?` \xB7 ${v}s`:""):null,!A&&!m&&e.status!=="failed"?g.default.createElement("div",{className:"cf-node-empty"},g.default.createElement(he,{name:"image",size:20,stroke:1.4}),g.default.createElement("span",null,"\u56FE\u7247")):null,!A&&e.status==="failed"?g.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25",e.error?`\uFF1A${e.error}`:""):null,p?g.default.createElement("button",{type:"button",className:`cf-node-badge${n?" is-on":""}`,title:`\u5171 ${o.length} \u5F20 \xB7 \u70B9\u51FB\u5C55\u5F00`,"aria-expanded":n,onPointerDown:z=>z.stopPropagation(),onClick:z=>{z.stopPropagation(),r?.(e.id)}},o.length):null,A&&D&&!T?g.default.createElement("span",{className:"cf-node-flag"},"\u8FDC\u7A0B"):null)}function Bc({entry:e,fallbackSrc:t="",onClick:n}){let r=e?.storageKey||"",o=e?.degraded?e.url||"":e?.url||t||"",[a,i]=g.default.useState(()=>(r?Dn(r)||rn(r):"")||o);return g.default.useEffect(()=>{let c=!0;return r?(i(Dn(r)||rn(r)||o),vr(r).then(s=>{c&&s&&i(s)}).catch(()=>{}),vt(r).then(s=>{c&&s&&i(f=>f||s)}).catch(()=>{}),()=>{c=!1}):(i(o),()=>{c=!1})},[r,o]),g.default.createElement("img",{src:a||void 0,alt:e?.prompt||"\u6279\u91CF\u56FE\u7247",decoding:"async",draggable:!1,onClick:n})}function Oc({node:e,onClose:t,onOpenZoom:n,onBatchAction:r}){let o=e.images||[],a=Et(e);return g.default.createElement("div",{className:"cf-batch-pop",style:{transform:`translate3d(${e.x}px, ${e.y+e.h+10}px, 0)`},onPointerDown:i=>i.stopPropagation(),onWheel:i=>i.stopPropagation()},g.default.createElement("div",{className:"cf-batch-pop-head"},g.default.createElement("span",null,"\u5171 ",o.length," \u5F20"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>r?.("explode",e)},"\u5168\u90E8\u62C6\u5206"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:t},"\u6536\u8D77")),g.default.createElement("div",{className:"cf-batch-grid"},o.map((i,c)=>{let s=a?.id===i.id;return g.default.createElement("div",{key:i.id||c,className:`cf-batch-item${s?" is-main":""}`},g.default.createElement(Bc,{entry:i,fallbackSrc:e.src||"",onClick:()=>n?.(e,c)}),s?g.default.createElement("span",{className:"cf-batch-main-tag"},"\u4E3B\u56FE"):null,g.default.createElement("div",{className:"cf-batch-item-bar"},s?g.default.createElement("span",{className:"cf-batch-item-btn",style:{opacity:.6}},"\u4E3B\u56FE"):g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",onClick:()=>r?.("setPrimary",e,i.id)},"\u8BBE\u4E3A\u4E3B\u56FE"),g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",title:"\u62C6\u6210\u72EC\u7ACB\u8282\u70B9",onClick:()=>r?.("duplicateItem",e,i.id)},"\u62C6\u51FA"),g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",title:"\u4E0B\u8F7D",onClick:()=>r?.("downloadItem",e,i.id)},"\u4E0B\u8F7D"),g.default.createElement("button",{type:"button",className:"cf-batch-item-btn",title:"\u79FB\u9664",onClick:()=>r?.("removeItem",e,i.id)},"\u5220")))})))}function Lc({node:e}){let[t,n]=g.default.useState(""),r=e.storageKey||"";return g.default.useEffect(()=>{let o=!0;return r?(vt(r).then(a=>{o&&n(a||"")}).catch(()=>{o&&n("")}),()=>{o=!1}):(n(""),()=>{o=!1})},[r]),t?g.default.createElement("div",{className:"cf-node-media cf-node-media--video"},g.default.createElement("video",{src:t,controls:!0,preload:"metadata",playsInline:!0})):e.status==="running"?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D",e.videoTaskId?g.default.createElement("span",{className:"cf-node-taskid"},e.videoTaskId):null):e.status==="failed"?g.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25",e.error?`\uFF1A${e.error}`:""):g.default.createElement("div",{className:"cf-node-void"},"\u89C6\u9891",e.prompt?g.default.createElement("span",{className:"cf-node-taskid"},e.prompt.slice(0,24)):null)}var Uc=[{id:"image",label:"\u751F\u56FE"},{id:"text",label:"\u6587\u672C"},{id:"video",label:"\u89C6\u9891"},{id:"audio",label:"\u97F3\u9891"}];function _c({node:e,channels:t,upstreamSummary:n,onUpdateNode:r,onRunConfig:o}){let a=e.mode||"image",i=en(t,a),c=i.some(f=>f.key===e.modelKey)?e.modelKey:i[0]?.key||"",s=f=>f.stopPropagation();return g.default.createElement("div",{className:"cf-node-config",onPointerDown:s,onWheel:s},g.default.createElement("div",{className:"cf-node-config-tabs",role:"group","aria-label":"\u751F\u6210\u6A21\u5F0F"},Uc.map(f=>g.default.createElement("button",{key:f.id,type:"button",className:`cf-node-config-tab${a===f.id?" is-on":""}`,onClick:()=>r?.(e.id,{mode:f.id})},f.label))),g.default.createElement("select",{className:"cf-node-config-select","aria-label":"\u914D\u7F6E\u8282\u70B9\u6A21\u578B",value:c,onChange:f=>r?.(e.id,{modelKey:f.target.value})},i.length?i.map(f=>g.default.createElement("option",{key:f.key,value:f.key},f.label)):g.default.createElement("option",{value:""},"\u65E0\u53EF\u7528\u6A21\u578B")),a==="image"?g.default.createElement("div",{className:"cf-node-config-grid"},g.default.createElement("select",{className:"cf-node-config-select","aria-label":"\u6BD4\u4F8B",value:e.ratio||"1:1",onChange:f=>r?.(e.id,{ratio:f.target.value})},zn.map(f=>g.default.createElement("option",{key:f.id,value:f.id},f.label))),g.default.createElement("select",{className:"cf-node-config-select","aria-label":"\u5206\u8FA8\u7387",value:e.resolution||"\u81EA\u52A8",onChange:f=>r?.(e.id,{resolution:f.target.value})},Xn.map(f=>g.default.createElement("option",{key:f,value:f},f))),g.default.createElement("input",{type:"number",min:1,max:10,className:"cf-node-config-input","aria-label":"\u5F20\u6570",value:Math.max(1,Number(e.count)||1),onChange:f=>r?.(e.id,{count:Math.max(1,Math.min(10,Number(f.target.value)||1))})})):null,g.default.createElement("input",{type:"text",className:"cf-node-config-input",placeholder:"\u8F93\u5165\u6216\u8865\u5145\u63D0\u793A\u8BCD\u2026",value:e.prompt||"",onChange:f=>r?.(e.id,{prompt:f.target.value}),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),o?.(e))}}),g.default.createElement("div",{className:"cf-node-config-foot"},g.default.createElement("span",{className:"cf-node-config-meta",title:n||"\u672A\u8FDE\u63A5\u4E0A\u6E38\u8282\u70B9"},n||"\u53EF\u8FDE\u4E0A\u6E38\u56FE/\u6587\u672C"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",style:{height:22,paddingInline:8,fontSize:11},disabled:e.status==="running",onClick:()=>o?.(e)},e.status==="running"?"\u751F\u6210\u4E2D":"\u751F\u6210")))}function Kc({node:e,onCommit:t,onCancel:n}){let[r,o]=g.default.useState(e.text||"");return g.default.createElement("textarea",{autoFocus:!0,className:"cf-node-text-edit",value:r,onChange:a=>o(a.target.value),onPointerDown:a=>a.stopPropagation(),onBlur:()=>t(e.id,r),onKeyDown:a=>{a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),n()),(a.metaKey||a.ctrlKey)&&a.key==="Enter"&&(a.preventDefault(),t(e.id,r))}})}function jc({node:e,channels:t,scaleBucket:n,expanded:r,upstreamSummary:o,isEditingText:a,onToggleExpand:i,onUpdateNode:c,onRunConfig:s,onCommitText:f,onCancelText:d}){switch(e.type){case"image":return g.default.createElement(Pc,{node:e,scaleBucket:n,expanded:r,onToggleExpand:i});case"video":return g.default.createElement(Lc,{node:e});case"audio":return g.default.createElement("div",{className:"cf-node-audio"},g.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(m,p)=>g.default.createElement("span",{key:p,style:{height:`${16+p*41%66}%`}}))),g.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return g.default.createElement("div",{className:"cf-node-text"},a?g.default.createElement(Kc,{node:e,onCommit:f,onCancel:d}):e.text?g.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):g.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":return g.default.createElement(_c,{node:e,channels:t,upstreamSummary:o,onUpdateNode:c,onRunConfig:s});case"group":return null;default:return null}}var Fc=g.default.memo(function({node:t,selected:n,dragging:r,isTarget:o,expanded:a,upstreamSummary:i,isEditingText:c,channels:s,scaleBucket:f,onNodeDown:d,onHoverEnter:m,onHoverLeave:p,onOpenZoom:v,onPortDown:D,onResizeDown:T,onToggleExpand:A,onUpdateNode:z,onRunConfig:K,onCommitText:Y,onCancelText:I}){return g.default.createElement("div",{className:`cf-node${n?" is-selected":""}${r?" is-dragging":""}${o?" is-target":""}${t.status==="running"?" is-running":""}${t.type==="group"?" is-group":""}`,"data-id":t.id,style:{transform:`translate3d(${t.x}px, ${t.y}px, 0)`,width:t.w,height:t.h,zIndex:t.type==="group"?1:2},onPointerDown:O=>d(O,t),onPointerEnter:()=>m(t),onPointerLeave:p},t.type==="group"?g.default.createElement("div",{className:"cf-node-group-head"},g.default.createElement("span",null,t.name||"\u5206\u7EC4"),t.childIds?.length?g.default.createElement("span",{className:"cf-node-group-count"},t.childIds.length," \u4E2A\u8282\u70B9"):null):g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"cf-node-head"},g.default.createElement("span",{className:"cf-node-type"},Ht[t.type]),g.default.createElement("span",{className:"cf-node-name"},t.name||"")),g.default.createElement("div",{className:"cf-node-body"},g.default.createElement(jc,{node:t,channels:s,scaleBucket:f,expanded:a,upstreamSummary:i,isEditingText:c,onToggleExpand:A,onUpdateNode:z,onRunConfig:K,onCommitText:Y,onCancelText:I})),t.type==="image"?g.default.createElement("button",{type:"button",className:"cf-node-zoom",title:"\u770B\u5927\u56FE\uFF08\u4E5F\u53EF\u4EE5\u53CC\u51FB\uFF09","aria-label":"\u770B\u5927\u56FE",onPointerDown:O=>O.stopPropagation(),onClick:O=>{O.stopPropagation(),v(t)}},g.default.createElement(he,{name:"search",size:12})):null,g.default.createElement("span",{className:"cf-node-port-in","aria-hidden":"true",title:"\u8FDE\u7EBF\u8F93\u5165\u7AEF\u53E3"}),g.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:O=>D(O,t),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"},g.default.createElement("span",{"aria-hidden":"true"}))),n&&t.type!=="group"?$c.map(O=>g.default.createElement("span",{key:O,className:`cf-node-handle cf-node-handle--${O}`,onPointerDown:Z=>{Z.stopPropagation(),T(Z,t,O)},title:"\u8C03\u6574\u5C3A\u5BF8"})):null)});function Hc({node:e,initialIndexOverride:t=null,onClose:n}){let r=g.default.useMemo(()=>{let p=Array.isArray(e?.images)&&e.images.length?e.images:[];return p.length?p:e?.storageKey||e?.src?[{id:"single",storageKey:e.storageKey||"",url:e.src||""}]:[]},[e]),o=g.default.useMemo(()=>{if(typeof t=="number"&&t>=0&&t<r.length)return t;let p=r.findIndex(v=>v.id===e?.primaryImageId);return p>=0?p:0},[r,e?.primaryImageId,t]),[a,i]=g.default.useState(o);g.default.useEffect(()=>{i(o)},[o,e?.id]);let c=r[a]||r[0]||null,s=c?.storageKey||"",f=c?.degraded?c.url||"":c?.url&&!s?c.url:e?.src||"",[d,m]=g.default.useState(()=>(s?rn(s):"")||f);return g.default.useEffect(()=>{let p=!0;return s?(m(rn(s)||f),vt(s).then(v=>{p&&m(v||f)}).catch(()=>{p&&m(f)}),()=>{p=!1}):(m(f),()=>{p=!1})},[s,f]),g.default.useEffect(()=>{if(r.length<=1)return;let p=v=>{(v.key==="ArrowLeft"||v.key==="ArrowRight")&&(v.preventDefault(),i(D=>(D+(v.key==="ArrowRight"?1:-1)+r.length)%r.length))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[r.length]),g.default.createElement("div",{className:"cf-lightbox",role:"dialog","aria-modal":"true","aria-label":"\u9884\u89C8\u5927\u56FE",onPointerDown:p=>{p.target===p.currentTarget&&n()}},g.default.createElement("figure",{className:"cf-lightbox-figure",style:{"--cf-lb-ratio":fn(e.ratio)}},d?g.default.createElement("img",{src:d,alt:e.prompt||"\u56FE\u7247"}):e.status==="running"?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):g.default.createElement("div",{className:"cf-node-empty"},g.default.createElement(he,{name:"image",size:28,stroke:1.3}),g.default.createElement("span",null,"\u6682\u65E0\u56FE\u7247"))),r.length>1?g.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:10}},g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>i(p=>(p-1+r.length)%r.length),"aria-label":"\u4E0A\u4E00\u5F20"},"\u4E0A\u4E00\u5F20"),g.default.createElement("span",{className:"cf-lightbox-cap"},a+1," / ",r.length),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>i(p=>(p+1)%r.length),"aria-label":"\u4E0B\u4E00\u5F20"},"\u4E0B\u4E00\u5F20")):null,e.prompt?g.default.createElement("figcaption",{className:"cf-lightbox-cap"},e.prompt):null,g.default.createElement("button",{type:"button",className:"cf-lightbox-x",onClick:n,"aria-label":"\u5173\u95ED\u9884\u89C8"},g.default.createElement(he,{name:"close",size:16})))}function ki(e,t,n,r,o=28){let a=null,i=1/0;for(let c of e){if(c.type==="group"||!ja(e,t,n,c.id)||r.x<c.x-o||r.x>c.x+c.w+o||r.y<c.y-o||r.y>c.y+c.h+o)continue;let s=Math.hypot(r.x-c.x,r.y-(c.y+c.h/2)),d=r.x>=c.x&&r.x<=c.x+c.w&&r.y>=c.y&&r.y<=c.y+c.h?s*.5:s;d<i&&(i=d,a=c)}return a}function Si({title:e,sx:t,sy:n,items:r,onPick:o,onClose:a}){return g.default.createElement("div",{className:"cf-ctx cf-create-menu",style:{left:t,top:n},role:"menu",onPointerDown:i=>i.stopPropagation(),onWheel:i=>i.stopPropagation()},g.default.createElement("p",{className:"cf-ctx-head"},e),r.map(i=>g.default.createElement("button",{key:i.type,type:"button",className:"cf-ctx-item",role:"menuitem",onClick:()=>{o(i.type),a()}},g.default.createElement(he,{name:i.icon,size:14}),g.default.createElement("span",{className:"cf-ctx-item-label"},i.label))))}function Mi({nodes:e,edges:t,selection:n,channels:r,grid:o,minimap:a,tool:i="select",actions:c={},onSelection:s,onMove:f,onResize:d,onConnect:m,onRemoveEdge:p,onOpenNode:v,onGesture:D,camera:T,camApi:A,showHint:z,onNodeAction:K,showToolbarLabels:Y=!1,onUpdateNode:I,onRunConfig:O,onBatchAction:Z,onCreateFromConnection:ue,onCreateAt:te,onDropFiles:ee}){let $e=g.default.useRef(null),J=g.default.useRef(null),{cam:k,moveTo:H,bindStage:re}=A,[E,ae]=g.default.useState({w:1200,h:700}),[U,ye]=g.default.useState(null),ne=g.default.useRef(0),et=g.default.useRef(0),Ve=g.default.useCallback(()=>{ne.current&&(clearTimeout(ne.current),ne.current=0),et.current&&(clearTimeout(et.current),et.current=0)},[]);g.default.useEffect(()=>Ve,[Ve]);let Ot=g.default.useCallback(h=>{!h||h.type!=="image"||(Ve(),ne.current=setTimeout(()=>ye(h.id),100))},[Ve]),bt=g.default.useCallback(h=>{ne.current&&(clearTimeout(ne.current),ne.current=0),!h?.relatedTarget?.closest?.(".cf-node-toolbar")&&(et.current=setTimeout(()=>ye(null),180))},[]),Lt=g.default.useCallback(()=>{et.current&&(clearTimeout(et.current),et.current=0)},[]),St=g.default.useCallback(h=>{if(h?.relatedTarget?.closest?.(".cf-node")){Lt();return}et.current=setTimeout(()=>ye(null),180)},[Lt]),[qe,lt]=g.default.useState(()=>({x:k.current.x,y:k.current.y,s:k.current.s,zoom:Math.round(k.current.s*100)})),Ye=g.default.useRef(qe);Ye.current=qe;let yt=g.default.useRef({x:k.current.x,y:k.current.y,s:k.current.s}),Ze=g.default.useCallback((h=!1)=>{let N=k.current,F=Math.round(N.s*100),Q=Math.hypot(N.x-yt.current.x,N.y-yt.current.y),we=Math.abs(N.s-yt.current.s)>5e-4;h||we?(yt.current={x:N.x,y:N.y,s:N.s},lt({x:N.x,y:N.y,s:N.s,zoom:F})):Q>=(B.current?360:160)?(yt.current={x:N.x,y:N.y,s:N.s},g.default.startTransition(()=>{lt({x:N.x,y:N.y,s:N.s,zoom:F})})):F!==Ye.current.zoom&&lt(be=>({...be,s:N.s,zoom:F}))},[k]),$=qe.zoom,B=g.default.useRef(null),se=g.default.useRef(null),le=g.default.useRef(null),Ue=g.default.useRef(null),ke=g.default.useRef(null),Ce=g.default.useRef(0),[Ee,Se]=g.default.useState(null),[Oe,at]=g.default.useState(null),Xe=g.default.useRef(null),[Wt,Me]=g.default.useState(null),[Le,gt]=g.default.useState(null),[tt,ot]=g.default.useState(null),[ft,Fe]=g.default.useState(null),[Re,zt]=g.default.useState(null),[Cn,Sr]=g.default.useState(!0),[Jn,Vt]=g.default.useState(null),[Ut,An]=g.default.useState(null),[Gt,Tt]=g.default.useState(!1),[Nt,un]=g.default.useState(null),[ve,$t]=g.default.useState(null);g.default.useEffect(()=>()=>{Ce.current&&cancelAnimationFrame(Ce.current)},[]),g.default.useEffect(()=>{let h=J.current;if(!h)return;re?.(h);let N=new ResizeObserver(()=>{let Q=h.getBoundingClientRect();ae({w:Q.width,h:Q.height})});N.observe(h);let F=h.getBoundingClientRect();return ae({w:F.width,h:F.height}),()=>N.disconnect()},[re]),g.default.useEffect(()=>{re?.(J.current),A.apply($e.current,J.current),Ze(!0)},[A,re,Ze]),g.default.useEffect(()=>{let h=F=>{F.code==="Space"&&!/input|textarea/i.test(F.target.tagName)&&(Tt(!0),F.preventDefault())},N=F=>{F.code==="Space"&&Tt(!1)};return window.addEventListener("keydown",h),window.addEventListener("keyup",N),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",N)}},[]),g.default.useEffect(()=>{if(!T)return;let h=$e.current;h&&H(h,T.x,T.y,T.s,()=>Ze(!0),J.current)},[T,H,Ze]);let sn=g.default.useCallback(()=>J.current.getBoundingClientRect(),[]),ut=g.default.useCallback((h,N)=>{let F=J.current.getBoundingClientRect();return{x:(h-F.left-k.current.x)/k.current.s,y:(N-F.top-k.current.y)/k.current.s}},[k]),_n=g.default.useCallback(()=>{let h=$e.current;if(!h||!e.length)return;let N=72,F=Math.min(...e.map(De=>De.x))-N,Q=Math.min(...e.map(De=>De.y))-N,we=Math.max(...e.map(De=>De.x+De.w))+N,be=Math.max(...e.map(De=>De.y+De.h))+N,Ge=Math.min(1.35,Math.max(ya,Math.min(E.w/(we-F),E.h/(be-Q))));H(h,N-F*Ge,N-Q*Ge,Ge,()=>Ze(!0),J.current)},[e,E,H,Ze]);g.default.useEffect(()=>{let h=setTimeout(_n,80);return()=>clearTimeout(h)},[]),g.default.useEffect(()=>{A.fit=_n},[A,_n]);let mn=h=>{let N=$e.current;if(!N)return;let F=E.w/2,Q=E.h/2,we=k.current,be=(F-we.tx)/we.ts,Ge=(Q-we.ty)/we.ts,De=Math.min(Qa,Math.max(ya,we.ts*h));H(N,F-be*De,Q-Ge*De,De,()=>Ze(!0),J.current)},S=h=>{h.preventDefault();let N=sn(),F=h.clientX-N.left,Q=h.clientY-N.top,we=k.current,be=(F-we.tx)/we.ts,Ge=(Q-we.ty)/we.ts,De=Math.min(Qa,Math.max(ya,we.ts*Math.exp(-h.deltaY*.0018)));H($e.current,F-be*De,Q-Ge*De,De,()=>Ze(),J.current)},V=h=>{h.preventDefault();let N=sn(),F=Math.max(0,Math.min(h.clientX-N.left,N.width-200)),Q=Math.max(0,Math.min(h.clientY-N.top,N.height-40)),we=document.elementFromPoint(h.clientX,h.clientY)||h.target,be=we.closest?.(".cf-node");if(be){let De=be.dataset.id,st=e.find(mt=>mt.id===De);De&&!n.includes(De)&&s([De]),Vt({kind:st?.type==="group"?"group":"node",id:De,x:F,y:Q});return}let Ge=we.closest?.(".cf-edge");if(Ge?.dataset.id){Vt({kind:"edge",id:Ge.dataset.id,x:F,y:Q});return}Vt({kind:"blank",id:null,x:F,y:Q})},ge=h=>{if(Jn&&Vt(null),ft&&Fe(null),Re&&zt(null),ve&&$t(null),h.button===1||Gt||i==="pan"){h.preventDefault(),B.current={x:h.clientX,y:h.clientY,cx:k.current.tx,cy:k.current.ty},J.current.classList.add("is-grabbing"),J.current.setPointerCapture(h.pointerId);return}if(h.button!==0)return;let N=ut(h.clientX,h.clientY);Ue.current={x0:N.x,y0:N.y,additive:h.shiftKey,clientX:h.clientX,clientY:h.clientY},An({x:N.x,y:N.y,w:0,h:0}),J.current.setPointerCapture(h.pointerId)},R=g.default.useMemo(()=>Object.fromEntries(e.map(h=>[h.id,h])),[e]),Ne=g.default.useRef(e);Ne.current=e;let _e=g.default.useRef(t);_e.current=t;let We=g.default.useRef(R);We.current=R;let Dt=g.default.useRef(n);Dt.current=n;let Kn=g.default.useRef(Gt);Kn.current=Gt;let qt=g.default.useRef(i);qt.current=i;let In=g.default.useRef(ve);In.current=ve;let gn=(h,N,F)=>{let Q=ut(N,F),we=Q.x-h.p0.x,be=Q.y-h.p0.y,Ge={};for(let De of h.ids){let st=h.start.get(De);st&&(Ge[De]={x:st.x+we,y:st.y+be,w:st.w,h:st.h})}return{dx:we,dy:be,patch:Ge}},Je=(h,N,F)=>{let Q=ut(N,F),we=140,be=80,Ge=h.corner==="nw"||h.corner==="sw",De=h.corner==="nw"||h.corner==="ne",st,mt,yn=h.start.x,Cr=h.start.y;return Ge?(st=Math.round(h.anchorRight-Q.x),st=Math.max(we,Math.min(xi,st)),yn=h.anchorRight-st):(st=Math.round(Q.x-h.start.x),st=Math.max(we,Math.min(xi,st))),h.locked?mt=Math.round(st/h.ratio)+h.head:De?(mt=Math.round(h.anchorBottom-Q.y),mt=Math.max(be,mt),Cr=h.anchorBottom-mt):(mt=Math.round(Q.y-h.start.y),mt=Math.max(be,mt)),h.locked&&De&&(Cr=h.anchorBottom-mt),{x:yn,y:Cr,w:st,h:mt}},_t=()=>{if(Ce.current=0,se.current){let h=se.current,{dx:N,dy:F,patch:Q}=gn(h,h.clientX,h.clientY);h.dx=N,h.dy=F,Se(Q);return}if(le.current){let h=le.current,N=Je(h,h.clientX,h.clientY);h.last=N,Se({[h.id]:N});return}if(Ue.current){let h=Ue.current,N=ut(h.clientX,h.clientY);An({x:Math.min(h.x0,N.x),y:Math.min(h.y0,N.y),w:Math.abs(N.x-h.x0),h:Math.abs(N.y-h.y0)});return}if(ke.current){let h=ut(ke.current.clientX,ke.current.clientY),N=ki(Ne.current,_e.current,ke.current.id,h,28),F=N?.id||null;Xe.current!==F&&(Xe.current=F,Me(F)),at({from:ke.current.id,to:N?{x:N.x,y:N.y+N.h/2}:h})}},xt=()=>{Ce.current||(Ce.current=requestAnimationFrame(_t))},Pt=h=>{if(B.current){let N=k.current;H($e.current,B.current.cx+(h.clientX-B.current.x),B.current.cy+(h.clientY-B.current.y),N.ts,()=>Ze(),J.current);return}if(se.current){se.current.clientX=h.clientX,se.current.clientY=h.clientY,xt();return}if(le.current){le.current.clientX=h.clientX,le.current.clientY=h.clientY,xt();return}if(Ue.current){Ue.current.clientX=h.clientX,Ue.current.clientY=h.clientY,xt();return}ke.current&&(ke.current.clientX=h.clientX,ke.current.clientY=h.clientY,xt())},fe=h=>{if(Ce.current&&(cancelAnimationFrame(Ce.current),Ce.current=0),B.current){B.current=null,J.current?.classList.remove("is-grabbing"),Ze(!0);return}if(se.current){let N=se.current;se.current=null;let{dx:F,dy:Q}=gn(N,h.clientX??N.clientX,h.clientY??N.clientY);Se(null),(F!==0||Q!==0)&&f(N.ids,F,Q),D?.("end");return}if(le.current){let N=le.current;le.current=null;let F=Je(N,h.clientX??N.clientX,h.clientY??N.clientY);Se(null),(F.w!==N.start.w||F.h!==N.start.h)&&d(N.id,F.w,F.h),(F.x!==N.start.x||F.y!==N.start.y)&&f([N.id],F.x-N.start.x,F.y-N.start.y),D?.("end");return}if(Ue.current){let N=Ue.current;Ue.current=null;let F=ut(h.clientX,h.clientY),Q={x:Math.min(N.x0,F.x),y:Math.min(N.y0,F.y),w:Math.abs(F.x-N.x0),h:Math.abs(F.y-N.y0)};if(An(null),Q.w>6||Q.h>6){let we=e.filter(be=>!(be.x>Q.x+Q.w||be.x+be.w<Q.x||be.y>Q.y+Q.h||be.y+be.h<Q.y));s(N.additive?[...new Set([...n,...we.map(be=>be.id)])]:we.map(be=>be.id))}else N.additive||s([]);return}if(ke.current){let{id:N,startX:F,startY:Q}=ke.current;ke.current=null,Xe.current=null,Me(null),at(null);let we=ut(h.clientX,h.clientY),be=ki(Ne.current,_e.current,N,we,28);if(be&&ja(Ne.current,_e.current,N,be.id))m(N,be.id);else if(Math.hypot((h.clientX??F)-F,(h.clientY??Q)-Q)>24&&ue){let Ge=sn();Fe({fromId:N,worldX:we.x,worldY:we.y,sx:Math.max(8,Math.min(h.clientX-Ge.left,Ge.width-190)),sy:Math.max(8,Math.min(h.clientY-Ge.top,Ge.height-230))})}}},Mt=g.default.useRef({id:"",t:0,x:0,y:0}),En=g.default.useCallback((h,N)=>{let F=N.timeStamp||Date.now(),Q=Mt.current,we=Math.abs(N.clientX-Q.x)<6&&Math.abs(N.clientY-Q.y)<6;return Mt.current={id:h.id,t:F,x:N.clientX,y:N.clientY},Q.id===h.id&&F-Q.t<320&&we},[]),Jt=g.default.useCallback((h,N=null)=>{un(h?{node:h,idx:N}:null)},[]),hn=g.default.useCallback(()=>{un(null)},[]);g.default.useEffect(()=>{if(!Nt&&!ft&&!Re)return;let h=N=>{N.key==="Escape"&&(N.preventDefault(),N.stopPropagation(),Nt?un(null):(Fe(null),zt(null)))};return window.addEventListener("keydown",h,!0),()=>window.removeEventListener("keydown",h,!0)},[Nt,ft,Re]);let vn=g.default.useCallback(h=>{gt(N=>N===h?null:h)},[]),it=g.default.useCallback((h,N)=>{ot(null),I?.(h,{text:N})},[I]),ct=g.default.useCallback(()=>ot(null),[]),jn=g.default.useCallback((h,N)=>{if(h.button!==0||h.button===1||Kn.current||qt.current==="pan")return;if(In.current&&$t(null),En(N,h)){h.stopPropagation(),N.type==="image"?Jt(N):(N.type==="text"&&ot(N.id),v(N));return}h.stopPropagation();let F=Dt.current,Q=h.shiftKey||h.metaKey||h.ctrlKey,we=F.includes(N.id),be=Q?we?F.filter(mt=>mt!==N.id):[...F,N.id]:we?F:[N.id];if(s(be),Q)return;let Ge=ut(h.clientX,h.clientY),De=N.type==="group"&&N.childIds?.length?[N.id,...N.childIds]:be.length>1?be:[N.id],st=new Map;for(let mt of De){let yn=We.current[mt];yn&&st.set(mt,{x:yn.x,y:yn.y,w:yn.w,h:yn.h})}se.current={ids:De,start:st,p0:Ge,clientX:h.clientX,clientY:h.clientY,dx:0,dy:0},D?.("start"),J.current?.setPointerCapture(h.pointerId)},[En,Jt,v,s,ut,D]),Kt=g.default.useCallback((h,N,F="se")=>{let Q=N.type==="image"&&N.locked!==!1;le.current={id:N.id,corner:F,locked:Q,ratio:fn(N.ratio),head:N.type==="image"?Ua:0,start:{x:N.x,y:N.y,w:N.w,h:N.h},last:{x:N.x,y:N.y,w:N.w,h:N.h},anchorRight:N.x+N.w,anchorBottom:N.y+N.h,clientX:h.clientX,clientY:h.clientY},D?.("start"),J.current?.setPointerCapture(h.pointerId)},[D]),bn=g.default.useCallback((h,N)=>{h.stopPropagation(),ke.current={id:N.id,startX:h.clientX,startY:h.clientY,clientX:h.clientX,clientY:h.clientY},at({from:N.id,to:ut(h.clientX,h.clientY)}),J.current?.setPointerCapture(h.pointerId)},[ut]),Fn=g.default.useMemo(()=>{let h=bi(qe,E),N=new Set,F=new Set(n||[]);ke.current?.id&&F.add(ke.current.id);let Q=e.filter(be=>F.has(be.id)||vi(be,h));Q.forEach(be=>N.add(be.id));let we=t.filter(be=>{let Ge=R[be.from],De=R[be.to];return!Ge||!De||!N.has(Ge.id)||!N.has(De.id)?!1:hi(Ge,De,h)});return{nodes:Q,edges:we,culled:e.length-Q.length}},[e,t,R,n,qe,E.w,E.h]),Nr=g.default.useMemo(()=>Ee?Fn.nodes.map(h=>Ee[h.id]?{...h,...Ee[h.id]}:h):Fn.nodes,[Fn.nodes,Ee]),cn=g.default.useMemo(()=>{if(!Ee)return R;let h={...R};for(let[N,F]of Object.entries(Ee))h[N]&&(h[N]={...h[N],...F});return h},[R,Ee]),qr=qe.s>=1.8?2:qe.s>=1.1?1.5:1,Mr=o==="lines"?"cf-stage--lines":o==="blank"?"cf-stage--blank":"cf-stage--dots",Hn=g.default.useMemo(()=>new Set(n||[]),[n]),Ea=g.default.useMemo(()=>{let h=new Map;for(let N of e){if(N.type!=="config")continue;let F=0,Q=0;for(let we of t){if(we.to!==N.id)continue;let be=R[we.from];be&&(be.type==="image"?F+=1:be.type==="text"&&(Q+=1))}if(F||Q){let we=[];F&&we.push(`\u56FE\xD7${F}`),Q&&we.push(`\u6587\xD7${Q}`),h.set(N.id,`\u4E0A\u6E38 ${we.join(" ")}`)}else h.set(N.id,"")}return h},[e,t,R]),Jr=g.default.useMemo(()=>{if(!Le)return null;let h=cn[Le];return h&&(h.images?.length||0)>1?h:null},[Le,cn]),ar=g.default.useMemo(()=>{if(!n||n.length<2)return null;let h=n.map(Q=>R[Q]).filter(Boolean),N=h.some(Q=>Q.type==="group"),F=h.filter(Q=>Q.type==="image"&&(Q.images?.length||Q.storageKey||Q.src));return{count:n.length,hasGroup:N,canMerge:F.length>=2}},[n,R]);g.default.useEffect(()=>{if(!ve)return;let h=N=>{if(!/input|textarea|select/i.test(N.target.tagName)){if(N.key==="Escape"){$t(null);return}(N.key==="Delete"||N.key==="Backspace")&&(N.preventDefault(),N.stopPropagation(),p(ve),$t(null))}};return window.addEventListener("keydown",h,!0),()=>window.removeEventListener("keydown",h,!0)},[ve,p]);let za=h=>{if(!te||h.target.closest?.(".cf-node, .cf-zoom, .cf-minimap, .cf-ctx, .cf-node-toolbar, .cf-sel-bar, .cf-batch-pop"))return;let N=sn(),F=ut(h.clientX,h.clientY);zt({worldX:F.x,worldY:F.y,sx:Math.max(8,Math.min(h.clientX-N.left,N.width-190)),sy:Math.max(8,Math.min(h.clientY-N.top,N.height-230))})},Ta=h=>{ee&&h.dataTransfer?.types?.includes("Files")&&h.preventDefault()},$a=h=>{if(!ee)return;let N=[...h.dataTransfer?.files||[]].filter(F=>F.type.startsWith("image/"));N.length&&(h.preventDefault(),ee(N,ut(h.clientX,h.clientY)))},Da=[{type:"image",icon:"image",label:"\u65B0\u5EFA\u56FE\u7247\u8282\u70B9"},{type:"text",icon:"text",label:"\u65B0\u5EFA\u6587\u672C\u8282\u70B9"},{type:"config",icon:"sliders",label:"\u65B0\u5EFA\u914D\u7F6E\u8282\u70B9"},{type:"video",icon:"play",label:"\u65B0\u5EFA\u89C6\u9891\u8282\u70B9"},{type:"audio",icon:"bars",label:"\u65B0\u5EFA\u97F3\u9891\u8282\u70B9"}];return g.default.createElement("div",{className:"cf-board"},g.default.createElement("div",{className:`cf-stage ${Mr}${Gt||i==="pan"?" is-grab":""}`,ref:J,onPointerDown:ge,onPointerMove:Pt,onPointerUp:fe,onPointerCancel:fe,onDoubleClick:za,onDragOver:Ta,onDrop:$a,onWheel:S,onContextMenu:V},g.default.createElement("div",{className:`cf-grid ${Mr}`,"aria-hidden":"true"}),g.default.createElement("div",{className:"cf-world",ref:$e},g.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},g.default.createElement("defs",null,g.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},g.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),Fn.edges.map(h=>{let N=cn[h.from],F=cn[h.to];if(!N||!F)return null;let Q=wi(N,F),we=Hn.has(h.from)||Hn.has(h.to);return g.default.createElement("g",{key:h.id,className:`cf-edge${ve===h.id?" is-on":""}${we?" is-related":""}`,"data-id":h.id},g.default.createElement("path",{d:Q,className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),g.default.createElement("path",{d:Q,className:"cf-edge-hit",onPointerDown:be=>{be.stopPropagation(),$t(h.id)}},g.default.createElement("title",null,"\u70B9\u51FB\u9009\u4E2D\uFF0CDelete \u6216\u53F3\u952E\u83DC\u5355\u5220\u9664")))}),Oe?(()=>{let h=cn[Oe.from];return h?g.default.createElement("path",{d:wi(h,{x:Oe.to.x,y:Oe.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),Nr.map(h=>g.default.createElement(Fc,{key:h.id,node:h,selected:Hn.has(h.id),dragging:!!Ee?.[h.id],isTarget:Wt===h.id,expanded:Le===h.id,upstreamSummary:h.type==="config"?Ea.get(h.id):void 0,isEditingText:tt===h.id,channels:r,scaleBucket:qr,onNodeDown:jn,onHoverEnter:Ot,onHoverLeave:bt,onOpenZoom:Jt,onPortDown:bn,onResizeDown:Kt,onToggleExpand:vn,onUpdateNode:I,onRunConfig:O,onCommitText:it,onCancelText:ct})),Jr?g.default.createElement(Oc,{node:Jr,onClose:()=>gt(null),onOpenZoom:Jt,onBatchAction:Z}):null,Ut&&Ut.w>4?g.default.createElement("div",{className:"cf-marquee",style:{left:Ut.x,top:Ut.y,width:Ut.w,height:Ut.h}}):null),ar&&!Ut?g.default.createElement("div",{className:"cf-sel-bar",role:"toolbar","aria-label":"\u591A\u9009\u6279\u91CF\u64CD\u4F5C",onPointerDown:h=>h.stopPropagation()},g.default.createElement("span",{className:"cf-sel-bar-count"},"\u5DF2\u9009 ",ar.count," \u9879"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.wrap?.()},"\u6253\u7EC4"),ar.hasGroup&&c.ungroupSelected?g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.ungroupSelected?.()},"\u53D6\u6D88\u5206\u7EC4"):null,ar.canMerge&&Z?g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>Z("merge",n)},"\u5408\u5E76\u4E3A\u56FE\u7EC4"):null,g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.duplicate?.()},"\u590D\u5236"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>c.removeSelection?.()},"\u5220\u9664")):null,U?(()=>{let h=cn[U];return!h||h.type!=="image"?null:g.default.createElement(yi,{node:h,cam:k.current,showLabels:Y,onAction:(N,F)=>{if(N==="view"){Jt(F);return}K?.(N,F)},onKeep:Lt,onLeave:St})})():null,Jn?g.default.createElement(Xc,{ctx:Jn,nodes:e,selection:n,actions:c,onClose:()=>Vt(null)}):null,ft?g.default.createElement(Si,{title:"\u65B0\u5EFA\u5E76\u8FDE\u63A5",sx:ft.sx,sy:ft.sy,items:Da,onPick:h=>ue?.(ft.fromId,h,{x:ft.worldX,y:ft.worldY}),onClose:()=>Fe(null)}):null,Re?g.default.createElement(Si,{title:"\u5728\u6B64\u5904\u65B0\u5EFA",sx:Re.sx,sy:Re.sy,items:[...Da,{type:"group",icon:"group",label:"\u65B0\u5EFA\u5206\u7EC4"}],onPick:h=>te?.(h,{x:Re.worldX,y:Re.worldY}),onClose:()=>zt(null)}):null),a&&Cn?g.default.createElement(Yc,{nodes:e,cam:qe,size:E,onJump:h=>H($e.current,E.w/2-h.x*k.current.s,E.h/2-h.y*k.current.s,k.current.s,()=>Ze(!0),J.current)}):null,g.default.createElement("div",{className:`cf-zoom${!a||!Cn?" is-no-minimap":""}`},g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>mn(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),g.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:$,"aria-label":"\u7F29\u653E",onChange:h=>{let N=$e.current;if(!N)return;let F=Number(h.target.value)/100,Q=k.current,we=E.w/2,be=E.h/2;H(N,we-(we-Q.tx)/Q.s*F,be-(be-Q.ty)/Q.s*F,F,()=>Ze(),J.current)}}),g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>mn(1.25),"aria-label":"\u653E\u5927"},"+"),g.default.createElement("span",{className:"cf-zoom-num"},$,"%"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:_n},"\u9002\u5E94"),a?g.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":Cn?"\u9690\u85CF\u7F29\u7565\u56FE":"\u663E\u793A\u7F29\u7565\u56FE","aria-pressed":Cn,title:"\u7F29\u7565\u56FE",onClick:()=>Sr(h=>!h)},g.default.createElement(he,{name:"frame",size:13})):null),z?g.default.createElement("p",{className:"cf-editor-hint","aria-hidden":"true"},g.default.createElement("span",null,"\u6846\u9009"),g.default.createElement("span",null,"\u7A7A\u683C\u5E73\u79FB"),g.default.createElement("span",null,"\u6EDA\u8F6E\u7F29\u653E"),g.default.createElement("span",null,"\u53CC\u51FB\u770B\u5927\u56FE")):null,Nt?.node?g.default.createElement(Hc,{node:cn[Nt.node.id]||Nt.node,initialIndexOverride:Nt.idx,onClose:hn}):null)}var Yc=g.default.memo(function({nodes:t,cam:n,size:r,onJump:o}){let s=g.default.useMemo(()=>{if(!t.length)return null;let A=1/0,z=1/0,K=-1/0,Y=-1/0;for(let J of t)J.x<A&&(A=J.x),J.y<z&&(z=J.y),J.x+J.w>K&&(K=J.x+J.w),J.y+J.h>Y&&(Y=J.y+J.h);A-=80,z-=80,K+=80,Y+=80;let I=Math.max(1,K-A),O=Math.max(1,Y-z),Z=Math.min(143/I,92/O),ue=(143-I*Z)/2,te=(92-O*Z)/2,ee=J=>({x:(J.x-A)*Z+ue,y:(J.y-z)*Z+te,w:J.w*Z,h:J.h*Z}),$e=g.default.createElement(g.default.Fragment,null,t.filter(J=>J.type==="group").map(J=>{let k=ee(J);return g.default.createElement("rect",{key:J.id,x:k.x,y:k.y,width:k.w,height:k.h,rx:3,className:"cf-mini-group"})}),t.filter(J=>J.type!=="group").map(J=>{let k=ee(J);return g.default.createElement("rect",{key:J.id,x:k.x,y:k.y,width:Math.max(3,k.w),height:Math.max(3,k.h),rx:2,className:`cf-mini-node${J.type==="image"?" cf-mini-image":""}`})}));return{minX:A,minY:z,k:Z,offX:ue,offY:te,rects:$e}},[t]);if(!s)return null;let{minX:f,minY:d,k:m,offX:p,offY:v,rects:D}=s,T={x:(-n.x/n.s-f)*m+p,y:(-n.y/n.s-d)*m+v,w:r.w/n.s*m,h:r.h/n.s*m};return g.default.createElement("svg",{className:"cf-minimap",viewBox:"0 0 143 92",width:143,height:92,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:A=>{let z=A.currentTarget.getBoundingClientRect(),K=(A.clientX-z.left)/z.width*143,Y=(A.clientY-z.top)/z.height*92;o({x:f+(K-p)/m,y:d+(Y-v)/m})}},D,g.default.createElement("rect",{x:T.x,y:T.y,width:Math.max(6,T.w),height:Math.max(6,T.h),rx:2,className:"cf-mini-view"}))});function Xc({ctx:e,nodes:t,selection:n,actions:r,onClose:o}){let a=e.id?t.find(s=>s.id===e.id):null,i=s=>()=>{o(),s?.()},c=(()=>{if(e.kind==="edge")return[{icon:"trash",label:"\u5220\u9664\u8FDE\u7EBF",run:i(()=>r.removeEdge?.(e.id))}];if(e.kind==="group")return[{icon:"plus",label:"\u590D\u5236\u5206\u7EC4",run:i(()=>r.duplicate?.())},{icon:"close",label:"\u53D6\u6D88\u5206\u7EC4\uFF08\u4FDD\u7559\u8282\u70B9\uFF09",run:i(()=>r.ungroup?.(e.id))},{sep:!0},{icon:"trash",label:"\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9",danger:!0,run:i(()=>r.deleteGroupDeep?.(e.id))}];if(e.kind==="node"){let s=[];return a?.type==="image"&&s.push({icon:"play",label:"\u7528\u5F53\u524D\u63D0\u793A\u8BCD\u751F\u6210",run:i(()=>r.generateNode?.(e.id))}),s.push({icon:"plus",label:"\u590D\u5236",hint:"\u2318D",run:i(()=>r.duplicate?.())}),s.push({icon:"group",label:"\u5305\u6210\u7EC4",hint:"\u2318G",disabled:n.length<2,run:i(()=>r.wrap?.())}),s.push({sep:!0}),s.push({icon:"trash",label:"\u5220\u9664",hint:"\u232B",danger:!0,run:i(()=>r.removeSelection?.())}),s}return[{icon:"image",label:"\u65B0\u5EFA\u56FE\u7247\u8282\u70B9",run:i(()=>r.addNode?.("image"))},{icon:"text",label:"\u65B0\u5EFA\u6587\u672C\u8282\u70B9",run:i(()=>r.addNode?.("text"))},{icon:"sliders",label:"\u65B0\u5EFA\u914D\u7F6E\u8282\u70B9",run:i(()=>r.addNode?.("config"))},{icon:"group",label:"\u65B0\u5EFA\u5206\u7EC4",run:i(()=>r.addNode?.("group"))},{sep:!0},{icon:"check",label:"\u5168\u9009",hint:"\u2318A",run:i(()=>r.selectAll?.())},{icon:"target",label:"\u9002\u5E94\u89C6\u56FE",hint:"0",run:i(()=>r.fit?.())}]})();return g.default.createElement("div",{className:"cf-ctx",style:{left:e.x,top:e.y},role:"menu",onPointerDown:s=>s.stopPropagation(),onContextMenu:s=>s.preventDefault()},g.default.createElement("p",{className:"cf-ctx-head"},e.kind==="blank"?"\u753B\u5E03":e.kind==="edge"?"\u8FDE\u7EBF":a?.type==="group"?a.name||"\u5206\u7EC4":`${Ht[a?.type]||""}\u8282\u70B9`),c.map((s,f)=>s.sep?g.default.createElement("div",{key:`s${f}`,className:"cf-ctx-sep"}):g.default.createElement("button",{key:f,type:"button",className:"cf-ctx-item",role:"menuitem",disabled:s.disabled,onClick:s.run},g.default.createElement(he,{name:s.icon,size:14}),g.default.createElement("span",{className:"cf-ctx-item-label"},s.label),s.hint?g.default.createElement("span",{className:"cf-ctx-item-key"},s.hint):null)))}function xr(e){return{nodes:e?.nodes,edges:e?.edges,grid:e?.grid}}function Wc(e,t){return!e||!t?!1:e.nodes===t.nodes&&e.edges===t.edges&&e.grid===t.grid}function Ci({get:e,apply:t,limit:n=50,wait:r=180}){let o=[],a=[],i=null,c=0,s=!1,f=null,d=()=>f?.({canUndo:o.length>0,canRedo:a.length>0}),m=()=>{let p=xr(e());!i||Wc(i,p)||(o=[...o.slice(-(n-1)),i],a=[],i=p,d())};return{subscribe(p){return f=p,d(),()=>{f=null}},init(){i=xr(e()),o=[],a=[],d()},tick(){s||(c&&clearTimeout(c),c=setTimeout(()=>{c=0,m()},r))},pause(){s=!0,c&&(clearTimeout(c),c=0)},resume(){s&&(s=!1,m())},undo(){let p=o.pop();return p?(a=[...a,xr(e())],s=!0,t(p),i=xr(p),s=!1,c&&(clearTimeout(c),c=0),d(),!0):!1},redo(){let p=a.pop();return p?(o=[...o,xr(e())],s=!0,t(p),i=xr(p),s=!1,c&&(clearTimeout(c),c=0),d(),!0):!1},flush(){c&&(clearTimeout(c),c=0),m()},get canUndo(){return o.length>0},get canRedo(){return a.length>0},get depth(){return o.length},_reset(){o=[],a=[],i=null,s=!1,c&&(clearTimeout(c),c=0),d()}}}var P=Zt(require("react"),1);function Kr(e){return new Promise((t,n)=>{let r=new Image,o=typeof e=="string"?e:URL.createObjectURL(e);r.onload=()=>{typeof e!="string"&&URL.revokeObjectURL(o),t(r)},r.onerror=()=>{typeof e!="string"&&URL.revokeObjectURL(o),n(new Error("\u56FE\u7247\u89E3\u7801\u5931\u8D25"))},r.src=o})}function Ra(e){return new Promise((t,n)=>{e.toBlob(r=>r?t(r):n(new Error("\u5BFC\u51FA\u56FE\u7247\u5931\u8D25")),"image/png")})}async function eo(e,t,n,r,o){let a=document.createElement("canvas");a.width=Math.max(1,Math.round(r)),a.height=Math.max(1,Math.round(o));let i=a.getContext("2d");if(!i)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");let c=Math.max(0,Math.min(e.width-1,Math.round(t))),s=Math.max(0,Math.min(e.height-1,Math.round(n))),f=Math.max(1,Math.min(e.width-c,Math.round(r))),d=Math.max(1,Math.min(e.height-s,Math.round(o)));return i.drawImage(e,c,s,f,d,0,0,a.width,a.height),{blob:await Ra(a),width:a.width,height:a.height}}async function Ii(e,t){let n=await Kr(e);if(t)return eo(n,Math.floor(t.x*n.width),Math.floor(t.y*n.height),Math.ceil(t.width*n.width),Math.ceil(t.height*n.height));let r=Math.min(n.width,n.height),o=Math.max(0,Math.floor((n.width-r)/2)),a=Math.max(0,Math.floor((n.height-r)/2));return eo(n,o,a,r,r)}function Ai(e,t,n){return e?.length?[0,...e.map(r=>Math.round(r*t)).filter(r=>r>0&&r<t).sort((r,o)=>r-o),t]:Array.from({length:n+1},(r,o)=>Math.floor(o*t/n))}async function Ei(e,t){let n=await Kr(e),r=Math.max(1,Math.floor(t.rows)),o=Math.max(1,Math.floor(t.columns)),a=Ai(t.verticalLines,n.width,o),i=Ai(t.horizontalLines,n.height,r),c=[];for(let s=0;s<i.length-1;s+=1){let f=i[s],d=i[s+1]-f;for(let m=0;m<a.length-1;m+=1){let p=a[m],v=a[m+1]-p,D=await eo(n,p,f,v,d);c.push({row:s,column:m,...D})}}return c}function to(e,t,n){let r=Math.max(1,e,t),a=Math.min(4096,Math.max(1,Math.round(n)))/r;return{width:Math.max(1,Math.round(e*a)),height:Math.max(1,Math.round(t*a))}}function Za(e,t,n,r,o,a){let i=document.createElement("canvas");i.width=r,i.height=o;let c=i.getContext("2d");if(!c)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");return c.imageSmoothingEnabled=a!=="nearest",c.imageSmoothingQuality=a==="bilinear"?"medium":"high",c.drawImage(e,0,0,t,n,0,0,r,o),i}async function zi(e,t,n="high"){let r=await Kr(e),{width:o,height:a}=to(r.width,r.height,t);if(n!=="high"){let d=Za(r,r.width,r.height,o,a,n);return{blob:await Ra(d),width:o,height:a}}let i=r,c=r.width,s=r.height;for(;c*2<o&&s*2<a;){let d=c*2,m=s*2;i=Za(i,c,s,d,m,"high"),c=d,s=m}let f=Za(i,c,s,o,a,"high");return{blob:await Ra(f),width:o,height:a}}async function Ti(e,t=768,n=.86){let r=await Kr(e),o=Math.max(r.width,r.height);o<=t;let a=o>t?t/o:1,i=Math.max(1,Math.round(r.width*a)),c=Math.max(1,Math.round(r.height*a)),s=document.createElement("canvas");s.width=i,s.height=c;let f=s.getContext("2d");if(!f)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");f.fillStyle="#fff",f.fillRect(0,0,i,c),f.drawImage(r,0,0,i,c);let d=s.toDataURL("image/jpeg",n);return{dataUrl:d,mimeType:"image/jpeg",data:d.slice(d.indexOf(",")+1),width:i,height:c}}function wr(e){return Kr(e).then(t=>({width:t.width,height:t.height}))}var xa="#2563eb";function Vc(e){return new Promise((t,n)=>{let r=typeof e=="string",o=r?e:URL.createObjectURL(e),a=new Image;a.onload=()=>{r||URL.revokeObjectURL(o),t(a)},a.onerror=()=>{r||URL.revokeObjectURL(o),n(new Error("\u56FE\u7247\u89E3\u7801\u5931\u8D25"))},a.src=o})}async function $i(e,t){if(!t)throw new Error("\u6CA1\u6709\u8499\u7248");let n=t.width,r=t.height,o=document.createElement("canvas");o.width=n,o.height=r;let a=o.getContext("2d");if(!a)throw new Error("\u65E0\u6CD5\u521B\u5EFA\u753B\u5E03\u4E0A\u4E0B\u6587");let i=null;e?(i=await Vc(e),a.drawImage(i,0,0,n,r)):(a.fillStyle="#ffffff",a.fillRect(0,0,n,r)),a.save(),a.globalAlpha=.4,a.globalCompositeOperation="source-over";let c=document.createElement("canvas");c.width=n,c.height=r;let s=c.getContext("2d");return s.drawImage(t,0,0),s.globalCompositeOperation="source-in",s.fillStyle=xa,s.fillRect(0,0,n,r),a.drawImage(c,0,0),a.restore(),{blob:await new Promise((d,m)=>{o.toBlob(p=>p?d(p):m(new Error("\u5BFC\u51FA\u5931\u8D25")),"image/png")}),dataUrl:o.toDataURL("image/png"),width:n,height:r}}function no(e){if(!e)return!1;let t=e.getContext("2d",{willReadFrequently:!0});if(!t)return!1;let{data:n}=t.getImageData(0,0,e.width,e.height);for(let r=3;r<n.length;r+=4)if(n[r]>8)return!0;return!1}function wa(e){if(!e)return;let t=e.getContext("2d");t&&t.clearRect(0,0,e.width,e.height)}function ka(e,t,n,r,o=!1){if(!e)return;let a=e.getContext("2d");if(!a)return;let i=e.width,c=e.height;a.save(),a.globalCompositeOperation=o?"destination-out":"source-over",a.strokeStyle=xa,a.lineWidth=Math.max(1,r*Math.min(i,c)),a.lineCap="round",a.lineJoin="round",a.beginPath(),a.moveTo(t.x*i,t.y*c),a.lineTo(n.x*i,n.y*c),a.stroke(),a.restore()}jr();function Fr({title:e,icon:t,onClose:n,onApply:r,applyLabel:o="\u5E94\u7528",busy:a,disabled:i,children:c}){return P.default.useEffect(()=>{let s=f=>{f.key==="Escape"&&!a&&n()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[n,a]),P.default.createElement("div",{className:"cf-scrim",onPointerDown:s=>{s.target===s.currentTarget&&!a&&n()}},P.default.createElement("div",{className:"cf-dialog cf-dialog--wide",role:"dialog","aria-modal":"true","aria-label":e},P.default.createElement("header",{className:"cf-dialog-head"},P.default.createElement("h2",{className:"cf-dialog-title"},e),P.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":"\u5173\u95ED",onClick:n,disabled:a},P.default.createElement(he,{name:"close",size:15}))),P.default.createElement("div",{className:"cf-dialog-body"},c),P.default.createElement("footer",{className:"cf-dialog-foot"},P.default.createElement(G,{onClick:n,disabled:a},"\u53D6\u6D88"),P.default.createElement(G,{variant:"primary",onClick:r,disabled:a||i},a?"\u5904\u7406\u4E2D\u2026":o))))}var _i=.06,qc={x:.12,y:.12,width:.76,height:.76};function Ki(e){let t=Math.max(_i,Math.min(1,e.width)),n=Math.max(_i,Math.min(1,e.height));return{x:Math.max(0,Math.min(1-t,e.x)),y:Math.max(0,Math.min(1-n,e.y)),width:t,height:n}}var Jc=["nw","n","ne","e","se","s","sw","w"];function Qc({src:e,onClose:t,onDone:n}){let[r,o]=P.default.useState(qc),[a,i]=P.default.useState(null),[c,s]=P.default.useState("free"),[f,d]=P.default.useState(!1),m=P.default.useRef(null);P.default.useEffect(()=>{wr(e).then(i).catch(()=>i(null))},[e]);let p=c==="free"?null:c==="1:1"?1:c==="4:3"?4/3:c==="3:4"?3/4:c==="16:9"?16/9:9/16,v=z=>{if(s(z),z==="free"||!a)return;let K=z==="1:1"?1:z==="4:3"?4/3:z==="3:4"?3/4:z==="16:9"?16/9:9/16,Y=r.width*a.width,I=r.height*a.height,O=r.width,Z=r.height,ue=Y/K/a.height;ue<=1?Z=ue:(Z=1,O=a.height*K/a.width),o(Ki({x:r.x,y:r.y,width:O,height:Z}))},D=(z,K,Y)=>{K.preventDefault(),K.stopPropagation();let I=m.current?.getBoundingClientRect();if(!I)return;let O={...r},Z=K.clientX,ue=K.clientY,te=$e=>{let J=($e.clientX-Z)/I.width,k=($e.clientY-ue)/I.height,H;if(z==="move")H={...O,x:O.x+J,y:O.y+k};else{let{x:re,y:E,width:ae,height:U}=O;if(Y.includes("w")&&(re=O.x+J,ae=O.width-J),Y.includes("e")&&(ae=O.width+J),Y.includes("n")&&(E=O.y+k,U=O.height-k),Y.includes("s")&&(U=O.height+k),H={x:re,y:E,width:ae,height:U},p&&a){let ye=H.width*a.width/p/a.height;Y.includes("n")&&(H.y=O.y+(O.height-ye)),H.height=ye}}o(Ki(H))},ee=()=>{window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",ee)};window.addEventListener("pointermove",te),window.addEventListener("pointerup",ee)},T=async()=>{d(!0);try{let z=await Ii(e,r);n(z)}finally{d(!1)}},A=a?{w:Math.round(r.width*a.width),h:Math.round(r.height*a.height)}:null;return P.default.createElement(Fr,{title:"\u88C1\u526A",icon:"crop",onClose:t,onApply:T,busy:f,applyLabel:"\u88C1\u526A\u5E76\u751F\u6210\u65B0\u8282\u70B9"},P.default.createElement("div",{className:"cf-tool-ratios"},[["free","\u81EA\u7531"],["1:1","1:1"],["4:3","4:3"],["3:4","3:4"],["16:9","16:9"],["9:16","9:16"]].map(([z,K])=>P.default.createElement("button",{key:z,type:"button",className:`cf-chip${c===z?" is-on":""}`,onClick:()=>v(z)},K)),A?P.default.createElement("span",{className:"cf-tool-meta"},A.w," \xD7 ",A.h," px"):null),P.default.createElement("div",{className:"cf-crop-stage"},P.default.createElement("div",{className:"cf-crop-box",ref:m},P.default.createElement("img",{src:typeof e=="string"?e:"",alt:"",draggable:!1}),P.default.createElement("div",{className:"cf-crop-shade",style:{left:0,top:0,width:"100%",height:`${r.y*100}%`}}),P.default.createElement("div",{className:"cf-crop-shade",style:{left:0,top:`${(r.y+r.height)*100}%`,width:"100%",bottom:0}}),P.default.createElement("div",{className:"cf-crop-shade",style:{left:0,top:`${r.y*100}%`,width:`${r.x*100}%`,height:`${r.height*100}%`}}),P.default.createElement("div",{className:"cf-crop-shade",style:{right:0,top:`${r.y*100}%`,left:`${(r.x+r.width)*100}%`,height:`${r.height*100}%`}}),P.default.createElement("div",{className:"cf-crop-frame",style:{left:`${r.x*100}%`,top:`${r.y*100}%`,width:`${r.width*100}%`,height:`${r.height*100}%`},onPointerDown:z=>D("move",z)},Jc.map(z=>P.default.createElement("span",{key:z,className:`cf-crop-handle cf-crop-handle--${z}`,onPointerDown:K=>D("resize",K,z)}))))))}function Zc({src:e,onClose:t,onDone:n}){let[r,o]=P.default.useState(2),[a,i]=P.default.useState(2),[c,s]=P.default.useState(!1),f=r*a;return P.default.createElement(Fr,{title:"\u5207\u56FE",icon:"split",onClose:t,onApply:async()=>{s(!0);try{let m=await Ei(e,{rows:r,columns:a});n(m)}finally{s(!1)}},busy:c,applyLabel:`\u5207\u6210 ${f} \u5F20`},P.default.createElement("div",{className:"cf-tool-row"},P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u884C"),P.default.createElement("input",{className:"cf-input",type:"number",min:1,max:10,value:r,onChange:m=>o(Math.max(1,Math.min(10,Number(m.target.value)||1)))})),P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u5217"),P.default.createElement("input",{className:"cf-input",type:"number",min:1,max:10,value:a,onChange:m=>i(Math.max(1,Math.min(10,Number(m.target.value)||1)))}))),P.default.createElement("div",{className:"cf-split-preview"},P.default.createElement("div",{className:"cf-split-grid",style:{gridTemplateColumns:`repeat(${a}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`}},Array.from({length:f},(m,p)=>P.default.createElement("span",{key:p,className:"cf-split-cell"},p+1)))),P.default.createElement("p",{className:"cf-tool-hint"},"\u5207\u5B8C\u4F1A\u751F\u6210 ",f," \u4E2A\u65B0\u8282\u70B9\uFF0C\u6309\u884C\u5217\u6392\u5F00\u3002"))}var Rc=[1024,1536,2048,3072,4096];function el({src:e,onClose:t,onDone:n}){let[r,o]=P.default.useState(2048),[a,i]=P.default.useState("high"),[c,s]=P.default.useState(null),[f,d]=P.default.useState(!1);P.default.useEffect(()=>{wr(e).then(s).catch(()=>s(null))},[e]);let m=c?to(c.width,c.height,r):null;return P.default.createElement(Fr,{title:"\u653E\u5927",icon:"upscale",onClose:t,onApply:async()=>{d(!0);try{let v=await zi(e,r,a);n(v)}finally{d(!1)}},busy:f,applyLabel:"\u653E\u5927\u5E76\u751F\u6210\u65B0\u8282\u70B9"},P.default.createElement("div",{className:"cf-tool-row"},P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u76EE\u6807\u957F\u8FB9"),P.default.createElement("div",{className:"cf-chips"},Rc.map(v=>P.default.createElement("button",{key:v,type:"button",className:`cf-chip${r===v?" is-on":""}`,onClick:()=>o(v)},v))))),P.default.createElement("div",{className:"cf-tool-row"},P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u7B97\u6CD5"),P.default.createElement("div",{className:"cf-chips"},[["nearest","\u90BB\u8FD1"],["bilinear","\u53CC\u7EBF\u6027"],["high","\u9AD8\u8D28\u91CF"]].map(([v,D])=>P.default.createElement("button",{key:v,type:"button",className:`cf-chip${a===v?" is-on":""}`,onClick:()=>i(v)},D))))),c&&m?P.default.createElement("p",{className:"cf-tool-hint"},c.width," \xD7 ",c.height," \u2192 ",P.default.createElement("strong",null,m.width," \xD7 ",m.height),a==="high"?"\uFF08\u9010\u7EA7\u7FFB\u500D\uFF0C\u7EC6\u8282\u66F4\u7A33\uFF09":""):null)}function tl({src:e,onClose:t,onDone:n}){let[r,o]=P.default.useState(0),[a,i]=P.default.useState(9),[c,s]=P.default.useState(4.8),[f,d]=P.default.useState(!1),[m,p]=P.default.useState(!1),v=async()=>{p(!0);try{let T=Ui({horizontal:r,pitch:a,distance:c,wide:f});await n({kind:"angle",angleParams:{horizontal:r,pitch:a,distance:c,wide:f},prompt:T})}finally{p(!1)}},D={transform:`perspective(520px) rotateY(${r*-.45}deg) rotateX(${a*.35}deg) scale(${Math.max(.72,Math.min(1.08,1.08-c*.035+(f?-.08:0)))})`};return P.default.createElement(Fr,{title:"\u591A\u89D2\u5EA6",icon:"angle",onClose:t,onApply:v,busy:m,applyLabel:"AI \u751F\u6210\u65B0\u89C6\u89D2"},P.default.createElement("div",{className:"cf-angle-preview"},P.default.createElement("img",{src:typeof e=="string"?e:"",alt:"",style:D,draggable:!1})),P.default.createElement("div",{className:"cf-tool-row"},P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u6C34\u5E73 ",r,"\xB0"),P.default.createElement("input",{type:"range",min:-60,max:60,value:r,onChange:T=>o(Number(T.target.value))}))),P.default.createElement("div",{className:"cf-tool-row"},P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u4FEF\u4EF0 ",a,"\xB0"),P.default.createElement("input",{type:"range",min:-45,max:45,value:a,onChange:T=>i(Number(T.target.value))}))),P.default.createElement("div",{className:"cf-tool-row"},P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u8DDD\u79BB ",c.toFixed(1)),P.default.createElement("input",{type:"range",min:1,max:10,step:.1,value:c,onChange:T=>s(Number(T.target.value))}))),P.default.createElement("label",{className:"cf-tool-check"},P.default.createElement("input",{type:"checkbox",checked:f,onChange:T=>d(T.target.checked)}),P.default.createElement("span",null,"\u5E7F\u89D2\u955C\u5934")),P.default.createElement("p",{className:"cf-tool-hint"},"\u5C06\u539F\u56FE\u4E0E\u4E09\u7EF4\u673A\u4F4D\u53C2\u6570\u53D1\u9001\u7ED9\u751F\u56FE\u6A21\u578B\uFF0C\u4EE5\u65B0\u89C6\u89D2\u91CD\u7ED8\u5E76\u5728\u53F3\u4FA7\u751F\u6210\u5B50\u8282\u70B9\u3002"))}var nl=[.03,.06,.1,.16];function ji(e,t){if(e){wa(e);for(let n of t){let r=n.points||[];for(let o=0;o<r.length;o+=1)ka(e,r[o-1]||r[o],r[o],n.brush,n.erase)}}}function rl({src:e,onClose:t,onDone:n}){let[r,o]=P.default.useState(""),[a,i]=P.default.useState(.06),[c,s]=P.default.useState(!1),[f,d]=P.default.useState(!1),[m,p]=P.default.useState(!1),[v,D]=P.default.useState(null),[T,A]=P.default.useState({undo:0,redo:0}),z=P.default.useRef(null),K=P.default.useRef(null),Y=P.default.useRef(null),I=P.default.useRef([]),O=P.default.useRef([]),Z=()=>{A({undo:I.current.length,redo:O.current.length}),p(z.current?no(z.current):!1)};P.default.useEffect(()=>{I.current=[],O.current=[],A({undo:0,redo:0}),wr(e).then(E=>{D(E);let ae=z.current;ae&&(ae.width=E.width,ae.height=E.height,wa(ae),p(!1))}).catch(()=>D(null))},[e]);let ue=E=>{let ae=K.current?.getBoundingClientRect();return ae?{x:Math.max(0,Math.min(1,(E.clientX-ae.left)/ae.width)),y:Math.max(0,Math.min(1,(E.clientY-ae.top)/ae.height))}:{x:0,y:0}},te=E=>{if(!z.current||E.button!==0)return;E.preventDefault(),E.currentTarget.setPointerCapture(E.pointerId);let ae=ue(E);Y.current={last:ae,stroke:{brush:a,erase:c,points:[ae]}},ka(z.current,ae,ae,a,c),c||p(!0)},ee=E=>{if(!Y.current||!z.current)return;let ae=ue(E);ka(z.current,Y.current.last,ae,Y.current.stroke.brush,Y.current.stroke.erase),Y.current.last=ae,Y.current.stroke.points.push(ae)},$e=()=>{let E=Y.current?.stroke;Y.current=null,E?.points?.length&&(I.current.push(E),O.current=[],Z())},J=()=>{if(!I.current.length)return;let E=I.current.pop();O.current.push(E),ji(z.current,I.current),Z()},k=()=>{if(!O.current.length)return;let E=O.current.pop();I.current.push(E),ji(z.current,I.current),Z()},H=async()=>{let E=r.trim();if(!E){d(!1);return}if(no(z.current)){d(!0);try{let{dataUrl:ae,width:U,height:ye}=await $i(e,z.current);await n({kind:"maskEdit",dataUrl:ae,width:U,height:ye,rawPrompt:E,prompt:Li(E)})}finally{d(!1)}}},re=r.trim().length>0&&m;return P.default.createElement(Fr,{title:"\u5C40\u90E8\u4FEE\u6539",icon:"edit",onClose:t,onApply:H,busy:f,disabled:!re,applyLabel:"\u6309\u6807\u8BB0\u4FEE\u6539"},P.default.createElement("div",{className:"cf-mask-bar"},P.default.createElement("span",{className:"cf-mask-label"},"\u7B14\u5237"),nl.map(E=>P.default.createElement("button",{key:E,type:"button",className:`cf-chip${a===E&&!c?" is-on":""}`,onClick:()=>{i(E),s(!1)},title:`${Math.round(E*100)}%`},Math.round(E*100))),P.default.createElement("span",{className:"cf-mask-sep"}),P.default.createElement("button",{type:"button",className:`cf-chip${c?" is-on":""}`,onClick:()=>s(E=>!E)},"\u6A61\u76AE"),P.default.createElement("button",{type:"button",className:"cf-chip",disabled:!T.undo,onClick:J},"\u64A4\u9500"),P.default.createElement("button",{type:"button",className:"cf-chip",disabled:!T.redo,onClick:k},"\u91CD\u505A"),P.default.createElement("button",{type:"button",className:"cf-chip",onClick:()=>{I.current=[],O.current=[],wa(z.current),Z()}},"\u6E05\u7A7A")),P.default.createElement("div",{className:"cf-mask-stage"},P.default.createElement("div",{className:"cf-mask-box",ref:K,onPointerDown:te,onPointerMove:ee,onPointerUp:$e,onPointerCancel:$e},typeof e=="string"?P.default.createElement("img",{src:e,alt:"",draggable:!1}):null,P.default.createElement("canvas",{ref:z,className:"cf-mask-layer",style:{opacity:.4+.15}}),m?null:P.default.createElement("span",{className:"cf-mask-hint"},"\u5728\u8981\u4FEE\u6539\u7684\u5730\u65B9\u6D82\u62B9"))),P.default.createElement("label",{className:"cf-field"},P.default.createElement("span",{className:"cf-label"},"\u8981\u6539\u6210\u4EC0\u4E48"),P.default.createElement("input",{className:"cf-input",value:r,placeholder:"\u4F8B\u5982\uFF1A\u628A\u6807\u8BB0\u7684\u5730\u65B9\u6362\u6210\u7EA2\u8272\u7684\u676F\u5B50",onChange:E=>o(E.target.value)})),P.default.createElement("p",{className:"cf-tool-hint"},"\u5C06",P.default.createElement("strong",null,"\u5E72\u51C0\u539F\u56FE"),"\u4E0E",P.default.createElement("strong",null,"\u534A\u900F\u660E\u84DD\u6807\u6CE8\u56FE\uFF08",xa,"\uFF09"),"\u6210\u5BF9\u63D0\u4EA4\u6A21\u578B\uFF0C\u9501\u5B9A\u672A\u6807\u6CE8\u533A\u57DF\u4E00\u81F4\u6027\u3002",v?` \u539F\u56FE ${v.width} \xD7 ${v.height}\u3002`:""))}function Fi({kind:e,src:t,onClose:n,onDone:r}){return!e||!t?null:e==="crop"?P.default.createElement(Qc,{src:t,onClose:n,onDone:r}):e==="split"?P.default.createElement(Zc,{src:t,onClose:n,onDone:r}):e==="upscale"?P.default.createElement(el,{src:t,onClose:n,onDone:r}):e==="angle"?P.default.createElement(tl,{src:t,onClose:n,onDone:r}):e==="maskEdit"?P.default.createElement(rl,{src:t,onClose:n,onDone:r}):null}Gn();Hr();jr();function Yr(e){return!e||e.type!=="image"?!1:Et(e)?.storageKey||e.storageKey||Array.isArray(e.images)&&e.images.some(t=>!!(t?.storageKey||t?.url))?!0:!!e.src}function xl(e,t,n){if(!e||!Array.isArray(t)||!Array.isArray(n))return[];let r=new Map(t.map(s=>[s.id,s])),o=n.filter(s=>s.to===e.id);if(!o.length)return[];let a=new Set([e.id]),i=[],c=s=>{if(!(!s||a.has(s.id))){if(a.add(s.id),s.type==="group"&&Array.isArray(s.childIds)){for(let f of s.childIds){let d=r.get(f);d&&!a.has(d.id)&&(a.add(d.id),i.push(d))}return}i.push(s)}};for(let s of o)c(r.get(s.from));return i.sort((s,f)=>s.y-f.y||s.x-f.x),i}function Xr(e,t,n){let r=xl(e,t,n),o=[],a=[],i=null;for(let c of r)if(c.type==="text"){let s=String(c.text||c.prompt||"").trim();s&&o.push({id:c.id,name:c.name||"",text:s,node:c})}else if(c.type==="image"){let s=Et(c),f=s?.storageKey||c.storageKey||"",d=s?.degraded?s.url||"":s?.url||c.src||"";(f||d)&&a.push({id:c.id,name:c.name||"",storageKey:f,url:d,mimeType:s?.mimeType||"image/png",node:c})}else c.type==="config"&&!i&&(i=c);return{upstream:r,textInputs:o,imageInputs:a,configNode:i}}function Wr(e,t=[],n=[]){let r=String(e||"").trim(),o=new Set;for(let i of t){let c=`@${Ht.text}${i.name?`:${i.name}`:""}`;r.includes(c)&&(o.add(i.id),r=r.split(c).join(i.text))}let a=t.filter(i=>!o.has(i.id)).map((i,c)=>t.length>1||r?`\u3010\u53C2\u8003\u6587\u672C${c+1}\u3011${i.text}`:i.text);for(let i of n)i.type==="image"&&i.name&&(r=r.split(`@${Ht.image}:${i.name}`).join(`\u53C2\u8003\u56FE(${i.name})`));return a.length?r?`${a.join(`
`)}
${r}`:a.join(`
`):r}var _=Zt(require("react"),1);function as(e){if(!e)return"";let t=new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleDateString("zh-CN")}function qn({src:e,alt:t="",className:n="",onClick:r,compactEmpty:o=!1}){let a=String(e||"").trim(),[i,c]=_.default.useState(0);if(_.default.useEffect(()=>{c(0)},[a]),!a||i>=3)return _.default.createElement("div",{className:`cf-prompt-cover-empty${o?" is-compact":""} ${n}`,"aria-hidden":"true"},_.default.createElement(he,{name:"image",size:o?16:22,stroke:1.4}));let s=va(a),f=/^https?:\/\//i.test(a)?`dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(s||a)}`:"",d=a;return i===1?d=s||f||a:i===2&&(d=f||""),d?_.default.createElement("img",{src:d,alt:t,className:n,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>{c(p=>p===0&&!s?f?2:3:p===1&&!f?3:p+1)},onClick:r}):_.default.createElement("div",{className:`cf-prompt-cover-empty${o?" is-compact":""} ${n}`,"aria-hidden":"true"},_.default.createElement(he,{name:"image",size:o?16:22,stroke:1.4}))}function Na({prompt:e,onClose:t,onUse:n,onCopy:r,onSaveAsset:o}){if(!e)return null;let a=Array.isArray(e.referenceImageUrls)?e.referenceImageUrls.filter(Boolean):[],i=e.text||e.prompt||"",c=as(e.createdAt),s=as(e.updatedAt);return _.default.createElement(dt,{wide:!0,title:e.title||"\u63D0\u793A\u8BCD\u8BE6\u60C5",onClose:t,footer:_.default.createElement(_.default.Fragment,null,a.length>0&&n?_.default.createElement(_.default.Fragment,null,_.default.createElement(G,{variant:"primary",icon:"image",onClick:()=>{n(e,{withRefs:!0}),t()}},"\u5E26\u53C2\u8003\u56FE\u4F7F\u7528\uFF08",a.length," \u5F20\uFF09"),_.default.createElement(G,{onClick:()=>{n(e,{withRefs:!1}),t()}},"\u4EC5\u4F7F\u7528\u6587\u5B57")):n?_.default.createElement(G,{variant:"primary",onClick:()=>{n(e,{withRefs:!1}),t()}},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"):null,r?_.default.createElement(G,{icon:"copy",onClick:()=>r(e)},"\u590D\u5236\u63D0\u793A\u8BCD"):null,o?_.default.createElement(G,{icon:"folder",onClick:()=>o(e)},"\u5B58\u4E3A\u8D44\u4EA7"):null,_.default.createElement(G,{onClick:t},"\u5173\u95ED"))},_.default.createElement("div",{className:"cf-prompt-detail"},e.coverUrl||a.length>0?_.default.createElement("div",{className:"cf-prompt-detail-media"},e.coverUrl?_.default.createElement("div",{className:"cf-prompt-detail-cover"},_.default.createElement(qn,{src:e.coverUrl,alt:e.title||"\u5C01\u9762"})):null,a.length>0?_.default.createElement("div",{className:"cf-prompt-detail-refs"},_.default.createElement("div",{className:"cf-prompt-detail-subhead"},"\u914D\u5957\u53C2\u8003\u56FE\uFF08",a.length," \u5F20\uFF09"),_.default.createElement("div",{className:"cf-prompt-detail-ref-grid"},a.map((f,d)=>_.default.createElement("div",{key:`${f}_${d}`,className:"cf-prompt-detail-ref-item"},_.default.createElement(qn,{src:f,alt:`\u53C2\u8003\u56FE ${d+1}`,compactEmpty:!0}))))):null):null,_.default.createElement("div",{className:"cf-prompt-detail-body"},_.default.createElement("div",{className:"cf-prompt-detail-meta"},e.category?_.default.createElement("span",{className:"cf-tag"},e.category):null,(e.tags||[]).map(f=>_.default.createElement("span",{key:f,className:"cf-tag"},f)),e.author?_.default.createElement("span",{className:"cf-prompt-detail-note"},"\u4F5C\u8005\uFF1A",e.author):null,c||s?_.default.createElement("span",{className:"cf-prompt-detail-note"},c?`\u521B\u5EFA ${c}`:"",c&&s?" \xB7 ":"",s?`\u66F4\u65B0 ${s}`:""):null,e.sourceUrl?_.default.createElement("a",{className:"cf-link",href:e.sourceUrl,target:"_blank",rel:"noreferrer"},"\u67E5\u770B\u539F\u9879\u76EE"):null),e.description?_.default.createElement("p",{className:"cf-prompt-detail-desc"},e.description):null,e.preview?_.default.createElement("pre",{className:"cf-prompt-detail-preview"},e.preview):null,_.default.createElement("div",{className:"cf-prompt-detail-full"},i))))}function Ma({prompts:e=[],onPick:t,onManage:n,onClose:r}){let[o,a]=_.default.useState(""),[i,c]=_.default.useState("\u5168\u90E8"),[s,f]=_.default.useState([]),[d,m]=_.default.useState(24),[p,v]=_.default.useState(null),D=_.default.useMemo(()=>["\u5168\u90E8",...new Set(e.map(I=>I.category).filter(Boolean))],[e]),T=_.default.useMemo(()=>{let I=i==="\u5168\u90E8"?e:e.filter(O=>O.category===i);return["\u5168\u90E8",...new Set(I.flatMap(O=>O.tags||[]).filter(Boolean))]},[e,i]),A=_.default.useMemo(()=>{let I=o.trim().toLowerCase();return e.filter(O=>i!=="\u5168\u90E8"&&O.category!==i||s.length&&!s.some(Z=>(O.tags||[]).includes(Z))?!1:I?[O.title,O.text,O.description,O.category,O.author,...O.tags||[]].filter(Boolean).some(Z=>String(Z).toLowerCase().includes(I)):!0)},[e,i,s,o]);_.default.useEffect(()=>{m(24)},[o,i,s]);let z=A.slice(0,d),K=A.length>z.length,Y=I=>{if(I==="\u5168\u90E8"){f([]);return}f(O=>O.includes(I)?O.filter(Z=>Z!==I):[...O,I])};return _.default.createElement(_.default.Fragment,null,_.default.createElement(dt,{wide:!0,title:`\u9009\u62E9\u63D0\u793A\u8BCD\uFF08${A.length} \u6761\uFF09`,onClose:r,footer:_.default.createElement(_.default.Fragment,null,n?_.default.createElement(G,{onClick:n},"\u6253\u5F00\u63D0\u793A\u8BCD\u4E2D\u5FC3"):null,_.default.createElement(G,{onClick:r},"\u5173\u95ED"))},_.default.createElement("div",{className:"cf-prompt-picker"},_.default.createElement("aside",{className:"cf-prompt-picker-side"},_.default.createElement("div",{className:"cf-filter-group"},_.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),_.default.createElement("div",{className:"cf-filter-chips"},D.map(I=>_.default.createElement("button",{key:I,type:"button",className:`cf-chip cf-chip--tag${i===I?" is-on":""}`,onClick:()=>{c(I),f([])}},I)))),_.default.createElement("div",{className:"cf-filter-group"},_.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),_.default.createElement("div",{className:"cf-filter-chips"},T.slice(0,40).map(I=>{let O=I==="\u5168\u90E8"?s.length===0:s.includes(I);return _.default.createElement("button",{key:I,type:"button",className:`cf-chip cf-chip--tag${O?" is-on":""}`,onClick:()=>Y(I)},I)})))),_.default.createElement("div",{className:"cf-prompt-picker-main"},_.default.createElement("input",{className:"cf-input",placeholder:"\u641C\u7D22\u6807\u9898\u3001\u6B63\u6587\u3001\u6807\u7B7E\u6216\u4F5C\u8005\u2026",value:o,onChange:I=>a(I.target.value),autoFocus:!0}),_.default.createElement("div",{className:"cf-prompt-picker-scroll",onScroll:I=>{let O=I.currentTarget;K&&O.scrollTop+O.clientHeight>=O.scrollHeight-140&&m(Z=>Z+24)}},z.length===0?_.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",padding:"24px 0",textAlign:"center"}},"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD"):_.default.createElement("div",{className:"cf-prompt-picker-grid"},z.map(I=>{let O=I.referenceImageUrls?.length||0;return _.default.createElement("div",{key:`${I.sourceId||""}_${I.id}`,className:"cf-prompt-picker-card"},_.default.createElement("button",{type:"button",className:"cf-prompt-picker-thumb",onClick:()=>t?.(I,{withRefs:O>0}),title:O>0?`\u70B9\u51FB\u586B\u5165\u63D0\u793A\u8BCD\u5E76\u52A0\u8F7D ${O} \u5F20\u53C2\u8003\u56FE`:"\u70B9\u51FB\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"},_.default.createElement(qn,{src:I.coverUrl,alt:I.title,compactEmpty:!0}),O>0?_.default.createElement("span",{className:"cf-prompt-ref-badge"},"\u53C2\u8003\u56FE\xD7",O):null),_.default.createElement("div",{className:"cf-prompt-picker-info"},_.default.createElement("button",{type:"button",className:"cf-prompt-picker-title",onClick:()=>t?.(I,{withRefs:O>0})},I.title||"\u672A\u547D\u540D\u63D0\u793A\u8BCD"),_.default.createElement("p",{className:"cf-prompt-picker-snippet"},I.text),_.default.createElement("div",{className:"cf-prompt-picker-foot"},_.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>t?.(I,{withRefs:O>0})},"\u4F7F\u7528"),_.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:()=>v(I)},"\u8BE6\u60C5"))))})),K?_.default.createElement("div",{style:{textAlign:"center",paddingTop:10}},_.default.createElement(G,{size:"sm",onClick:()=>m(I=>I+24)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u5269 ",A.length-z.length," \u6761\uFF09")):null)))),p?_.default.createElement(Na,{prompt:p,onClose:()=>v(null),onUse:(I,O)=>{v(null),t?.(I,O)}}):null)}function os({source:e,items:t=[],busy:n=!1,onRefresh:r,onUse:o,onCopy:a,onSaveAsset:i,onClose:c}){let[s,f]=_.default.useState(""),[d,m]=_.default.useState(20),[p,v]=_.default.useState(null),D=_.default.useMemo(()=>{let A=s.trim().toLowerCase();return A?t.filter(z=>(z.title||"").toLowerCase().includes(A)||(z.text||"").toLowerCase().includes(A)||(z.tags||[]).some(K=>K.toLowerCase().includes(A))):t},[t,s]);if(_.default.useEffect(()=>{m(20)},[s,e?.url]),!e)return null;let T=D.slice(0,d);return _.default.createElement(_.default.Fragment,null,_.default.createElement(dt,{wide:!0,title:`${e.name||"\u6765\u6E90\u5185\u5BB9"}\uFF08${t.length} \u6761\uFF09`,onClose:c,footer:_.default.createElement(_.default.Fragment,null,r?_.default.createElement(G,{icon:"refresh",disabled:n,onClick:r},n?"\u62C9\u53D6\u4E2D\u2026":"\u5237\u65B0\u6B64\u6E90"):null,_.default.createElement(G,{onClick:c},"\u5173\u95ED"))},_.default.createElement("div",{style:{display:"grid",gap:10}},_.default.createElement("input",{className:"cf-input",placeholder:"\u5728\u5F53\u524D\u6765\u6E90\u4E2D\u641C\u7D22\u2026",value:s,onChange:A=>f(A.target.value)}),_.default.createElement("div",{className:"cf-source-preview-list"},T.length===0?_.default.createElement(Rt,{icon:"book",title:t.length?"\u6CA1\u6709\u5339\u914D\u6761\u76EE":"\u8BE5\u6765\u6E90\u6682\u65E0\u7F13\u5B58\u5185\u5BB9",hint:"\u70B9\u4E0B\u65B9\u300C\u5237\u65B0\u6B64\u6E90\u300D\u7ACB\u523B\u62C9\u53D6\u3002"}):T.map(A=>_.default.createElement("div",{key:A.id,className:"cf-source-preview-row"},_.default.createElement("div",{className:"cf-source-preview-thumb",onClick:()=>v(A),style:{cursor:"pointer"}},_.default.createElement(qn,{src:A.coverUrl,alt:A.title,compactEmpty:!0})),_.default.createElement("div",{style:{minWidth:0,flex:1}},_.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},_.default.createElement("span",{style:{fontWeight:500,fontSize:13}},A.title),A.referenceImageUrls?.length?_.default.createElement("span",{className:"cf-tag"},"\u53C2\u8003\u56FE\xD7",A.referenceImageUrls.length):null),_.default.createElement("p",{className:"cf-prompt-picker-snippet",style:{marginTop:2}},A.text),A.tags?.length?_.default.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginTop:4}},A.tags.slice(0,5).map(z=>_.default.createElement("span",{key:z,className:"cf-tag"},z))):null),_.default.createElement("div",{style:{display:"flex",gap:4,flex:"none"}},_.default.createElement(Ke,{name:"copy",label:"\u590D\u5236",onClick:()=>a?.(A)}),_.default.createElement(G,{size:"sm",onClick:()=>v(A)},"\u8BE6\u60C5"),o?_.default.createElement(G,{size:"sm",variant:"primary",onClick:()=>{o(A,{withRefs:!0}),c()}},"\u4F7F\u7528"):null)))),D.length>T.length?_.default.createElement("div",{style:{textAlign:"center"}},_.default.createElement(G,{size:"sm",onClick:()=>m(A=>A+20)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",D.length-T.length," \u6761\uFF09")):null)),p?_.default.createElement(Na,{prompt:p,onClose:()=>v(null),onUse:(A,z)=>{v(null),c(),o?.(A,z)},onCopy:a,onSaveAsset:i}):null)}function wl({info:e,onClose:t,say:n}){let r=a=>a?a<1024?`${a} B`:a<1048576?`${(a/1024).toFixed(1)} KB`:`${(a/1024/1024).toFixed(2)} MB`:"\u2014",o=[["\u8282\u70B9 ID",e.id],["\u539F\u59CB\u5C3A\u5BF8",e.width&&e.height?`${e.width} \xD7 ${e.height}`:"\u2014"],["\u753B\u5E03\u5C3A\u5BF8",`${e.w} \xD7 ${e.h}`],["\u4F4D\u7F6E",`${e.x}, ${e.y}`],["\u6587\u4EF6\u5927\u5C0F",r(e.bytes)],["\u683C\u5F0F",e.mimeType||"\u2014"],["\u6279\u91CF\u5F20\u6570",String(e.count||1)],["\u6BD4\u4F8B",e.locked?"\u7B49\u6BD4\u7F29\u653E":"\u81EA\u7531\u6BD4\u4F8B"],["\u5B58\u50A8\u952E",e.storageKey||"\u2014"],["\u521B\u5EFA\u65F6\u95F4",e.createdAt?new Date(e.createdAt).toLocaleString("zh-CN"):"\u2014"]];return x.default.createElement(dt,{title:"\u8282\u70B9\u4FE1\u606F",onClose:t,footer:x.default.createElement(G,{onClick:t},"\u5173\u95ED")},x.default.createElement("div",{className:"cf-info-list"},o.map(([a,i])=>x.default.createElement("div",{key:a,className:"cf-info-row"},x.default.createElement("span",{className:"cf-info-key"},a),x.default.createElement("span",{className:`cf-info-val${a==="\u5B58\u50A8\u952E"?" is-mono":""}`},i)))),e.storageKey?x.default.createElement("div",{style:{display:"flex",gap:6,marginTop:"var(--cf-sp-3)"}},x.default.createElement(G,{size:"sm",onClick:async()=>{try{await navigator.clipboard.writeText(e.storageKey),n?.("\u5B58\u50A8\u952E\u5DF2\u590D\u5236")}catch{n?.("\u590D\u5236\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u526A\u8D34\u677F","error")}}},"\u590D\u5236\u5B58\u50A8\u952E")):null)}function kl(e,t){if(!e?.providers?.length)return null;let n=(i,c)=>{let s=e.providers.find(d=>d.id===i),f=s?.models?.find(d=>d.id===c);return s&&f?{provider:s,model:f}:null},r=t?.provider&&t?.model?t:e.default;if(r?.provider&&r?.model){let i=n(r.provider,r.model);if(i)return i}let o=e.providers[0],a=o?.models?.[0];return o&&a?{provider:o,model:a}:null}function ss({canvases:e,onOpen:t,onCreate:n,onRename:r,onDelete:o,onImport:a}){let[i,c]=x.default.useState(null),[s,f]=x.default.useState(null);return x.default.createElement("div",{className:"cf-page"},x.default.createElement("div",{className:"cf-page-inner"},x.default.createElement("div",{className:"cf-page-head"},x.default.createElement("div",null,x.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),x.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),x.default.createElement("div",{className:"cf-page-actions"},x.default.createElement(G,{icon:"upload",onClick:a},"\u5BFC\u5165\u753B\u5E03"),x.default.createElement(G,{variant:"primary",icon:"plus",onClick:n},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?x.default.createElement(Rt,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:x.default.createElement(G,{variant:"primary",icon:"plus",onClick:n},"\u65B0\u5EFA\u753B\u5E03")}):x.default.createElement("div",{className:"cf-card"},x.default.createElement("div",{className:"cf-list-head"},x.default.createElement("span",null,"\u540D\u79F0"),x.default.createElement("span",null,"\u5185\u5BB9"),x.default.createElement("span",null,"\u66F4\u65B0")),x.default.createElement("div",{className:"cf-canvas-list"},e.map(d=>x.default.createElement("div",{key:d.id,className:"cf-canvas-row"},x.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>t(d.id)},d.name||"\u672A\u547D\u540D\u753B\u5E03"),x.default.createElement("span",{className:"cf-canvas-meta"},d.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",d.edges.length," \u6761\u8FDE\u7EBF"),x.default.createElement("span",{className:"cf-canvas-row-actions"},x.default.createElement(Ke,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>c(d)}),x.default.createElement(Ke,{name:"trash",label:"\u5220\u9664",onClick:()=>f(d)}))))))),i?x.default.createElement(Sl,{canvas:i,onClose:()=>c(null),onSubmit:d=>{r(i.id,d),c(null)}}):null,s?x.default.createElement(dt,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>f(null),footer:x.default.createElement(x.default.Fragment,null,x.default.createElement(G,{onClick:()=>f(null)},"\u53D6\u6D88"),x.default.createElement(G,{variant:"danger",onClick:()=>{o(s.id),f(null)}},"\u5220\u9664"))},x.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",s.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",s.nodes.length," \u4E2A\u8282\u70B9\u548C ",s.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function Sl({canvas:e,onClose:t,onSubmit:n}){let[r,o]=x.default.useState(e.name||"");return x.default.createElement(dt,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:t,footer:x.default.createElement(x.default.Fragment,null,x.default.createElement(G,{onClick:t},"\u53D6\u6D88"),x.default.createElement(G,{variant:"primary",onClick:()=>n(r.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},x.default.createElement("label",{className:"cf-field"},x.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),x.default.createElement("input",{className:"cf-input",value:r,autoFocus:!0,onChange:a=>o(a.target.value),onKeyDown:a=>{a.key==="Enter"&&n(r.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var Nl=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"video",label:"\u89C6\u9891",icon:"video",key:""},{id:"audio",label:"\u97F3\u9891\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"},{sep:!0},{id:"undo",label:"\u64A4\u9500",icon:"undo",key:"\u2318Z",action:"undo"},{id:"redo",label:"\u91CD\u505A",icon:"redo",key:"\u21E7\u2318Z",action:"redo"}],Ml=x.default.memo(Mi);function is(e){let t=[];if(e?.storageKey&&t.push(e.storageKey),Array.isArray(e?.images))for(let n of e.images)n?.storageKey&&t.push(n.storageKey);return t}function lo(e,t){if(!e?.length)return;let n=new Set;for(let r of t||[])for(let o of is(r))n.add(o);for(let r of e)for(let o of is(r))n.has(o)||oi(o)}function Cl({draftStore:e,placeholder:t,hasRefs:n,onPaste:r,onSubmit:o}){let a=x.default.useSyncExternalStore(e.subscribe,e.get,e.get),i=x.default.useRef(null),c=x.default.useRef(0);return x.default.useLayoutEffect(()=>{let s=i.current;if(!s)return;let f=n?85:121;s.style.height="auto";let d=Math.min(s.scrollHeight,f);s.style.height=`${d}px`,s.style.overflowY=s.scrollHeight>f?"auto":"hidden"},[a,n]),x.default.createElement("textarea",{ref:i,className:"cf-composer-input",value:a,rows:2,placeholder:t,onChange:s=>e.set(s.target.value),onPaste:r,onCompositionStart:()=>{c.current=Date.now()},onCompositionEnd:()=>{c.current=Date.now()},onKeyDown:s=>{s.key==="Enter"&&(s.nativeEvent.isComposing||Date.now()-c.current<500||s.shiftKey||(s.preventDefault(),c.current=0,o()))}})}function Al({draftStore:e,textBusy:t,imgBusy:n,onSubmit:r,onStopText:o,onStopImg:a}){let i=x.default.useSyncExternalStore(e.subscribe,e.get,e.get),c=t?"\u505C\u6B62\u751F\u6210":n?"\u53D6\u6D88\u751F\u6210":"\u53D1\u9001\u6D88\u606F",s=t?o:n?a:r,f=!t&&!n&&!i.trim();return x.default.createElement("button",{type:"button",className:`cf-send${n?" is-busy":""}`,onClick:s,disabled:f,"aria-label":c,"data-tip":c},t?x.default.createElement(he,{name:"stop",size:14}):n?x.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}):x.default.createElement(he,{name:"arrowUp",size:17}))}function cs({canvas:e,channels:t,defaults:n,assistantModel:r,prompts:o=[],draftStore:a,draft:i,onDraftChange:c,onSendToStudio:s,showComposer:f=!0,onChange:d,onBack:m,say:p,onSaveAsset:v,showToolbarLabels:D=!1,theme:T="system",onTheme:A}){let z=Ni(),{cam:K,moveTo:Y}=z,I=x.default.useRef({nodes:e.nodes,edges:e.edges});I.current={nodes:e.nodes,edges:e.edges};let[O,Z]=x.default.useState(!1),[ue,te]=x.default.useState([]),[ee,$e]=x.default.useState("select"),J=x.default.useRef(null);J.current||(J.current=Ci({get:()=>J._canvas||{nodes:[],edges:[],grid:"dots"},apply:l=>d({nodes:l.nodes,edges:l.edges,grid:l.grid})}));let k=J.current;J._canvas=e;let[H,re]=x.default.useState({canUndo:!1,canRedo:!1}),[E,ae]=x.default.useState(null),U=x.default.useRef(null),ye=x.default.useRef(null),[ne,et]=x.default.useState(!1),[Ve,Ot]=x.default.useState(null),[bt,Lt]=x.default.useState({});x.default.useEffect(()=>k.subscribe(re),[k]),x.default.useEffect(()=>{k.init()},[e?.id]);let St=x.default.useRef(null);St.current||(St.current=ra(i||""));let qe=a||St.current,lt=x.default.useCallback(l=>{qe.set(l),!a&&c&&c(qe.get())},[qe,a,c]),[Ye,yt]=x.default.useState(n?.ratio||"1:1"),[Ze,$]=x.default.useState(n?.count||1),[B,se]=x.default.useState(n?.resolution||"\u81EA\u52A8"),[le,Ue]=x.default.useState(n?.quality||"\u81EA\u52A8"),[ke,Ce]=x.default.useState(!!n?.transparent),[Ee,Se]=x.default.useState(n?.modelKey||""),[Oe,at]=x.default.useState(!0),[Xe,Wt]=x.default.useState(!1),[Me,Le]=x.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[gt,tt]=x.default.useState([]),[ot,ft]=x.default.useState(()=>{let l=On(on({resolution:n?.resolution||"\u81EA\u52A8",ratio:n?.ratio||"1:1"}));return l?l.width:1024}),[Fe,Re]=x.default.useState(()=>{let l=On(on({resolution:n?.resolution||"\u81EA\u52A8",ratio:n?.ratio||"1:1"}));return l?l.height:1024}),zt=x.default.useRef(!!n?.modelKey);x.default.useEffect(()=>{!zt.current&&n?.modelKey&&(zt.current=!0,Ee||Se(n.modelKey))},[n?.modelKey,Ee]);let[Cn,Sr]=x.default.useState(null),[Jn,Vt]=x.default.useState(!1),Ut=x.default.useRef(null),An=x.default.useRef(null),Gt=x.default.useRef(null);x.default.useEffect(()=>{if(!Me)return;let l=w=>{An.current?.contains(w.target)||Le(null)},u=w=>{w.key==="Escape"&&Le(null)};return window.addEventListener("pointerdown",l),window.addEventListener("keydown",u),()=>{window.removeEventListener("pointerdown",l),window.removeEventListener("keydown",u)}},[Me]);let Tt=e.nodes,Nt=e.edges,un=Tt.filter(l=>ue.includes(l.id)),ve=un.length===1?un[0]:null,$t=x.default.useMemo(()=>ve?Nt.filter(l=>l.to===ve.id).map(l=>Tt.find(u=>u.id===l.from)).filter(l=>l&&l.type!=="group"&&l.type!=="config"):[],[ve,Nt,Tt]),sn=l=>{let u=l.map((w,C)=>({id:`${Date.now()}_${C}_${w.name||"paste"}`,name:w.name||"\u7C98\u8D34\u7684\u56FE\u7247",url:URL.createObjectURL(w),file:w}));u.length&&(tt(w=>[...w,...u]),p?.(`\u5DF2\u52A0\u5165 ${u.length} \u5F20\u53C2\u8003\u56FE`))},ut=l=>tt(u=>{let w=u.find(C=>C.id===l);return w?.url&&URL.revokeObjectURL(w.url),u.filter(C=>C.id!==l)}),_n=()=>Gt.current?.click(),mn=l=>{sn([...l.target.files||[]]),l.target.value=""},S=l=>{let u=l.clipboardData;if(!u)return;let w=[];for(let C of Array.from(u.items||[]))if(C.kind==="file"&&C.type.startsWith("image/")){let L=C.getAsFile();L&&w.push(L)}if(!w.length)for(let C of Array.from(u.files||[]))C.type.startsWith("image/")&&w.push(C);w.length&&(l.preventDefault(),sn(w))},V=en(t,"image"),ge=wn(t,Ee)||V[0]||null,R=x.default.useMemo(()=>{let l=t||[];if(!l.length)return"\u8FD8\u6CA1\u6709\u914D\u6E20\u9053\u3002\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u65B0\u589E\u4E00\u4E2A\uFF0C\u586B\u597D\u5730\u5740\u548C Key \u540E\u62C9\u53D6\u6A21\u578B\u3002";let u=l.filter(j=>j.enabled!==!1);if(!u.length)return`\u6709 ${l.length} \u4E2A\u6E20\u9053\u4F46\u90FD\u505C\u7528\u4E86\u3002\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6253\u5F00\u5F00\u5173\u3002`;let w=0,C=0,L=0;for(let j of u)for(let q of j.models||[])w+=1,q.enabled!==!1&&(C+=1,(q.caps||[]).includes("image")&&(L+=1));return w?C?L?"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u68C0\u67E5\u4E00\u4E0B\u3002":`\u5171\u6709 ${w} \u4E2A\u6A21\u578B\uFF0C\u4F46\u6CA1\u6709\u4E00\u4E2A\u6807\u4E86\u300C\u751F\u56FE\u300D\u80FD\u529B\u3002\u53BB\u914D\u7F6E\u91CC\u7ED9\u751F\u56FE\u6A21\u578B\u70B9\u4EAE\u300C\u751F\u56FE\u300D\u3002`:`\u5171\u6709 ${w} \u4E2A\u6A21\u578B\u4F46\u90FD\u88AB\u52FE\u6389\u4E86\u3002\u53BB\u914D\u7F6E\u91CC\u52FE\u4E0A\u8981\u7528\u7684\u3002`:`\u6E20\u9053\u300C${u[0].name||"\u672A\u547D\u540D"}\u300D\u91CC\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u53BB\u914D\u7F6E\u91CC\u70B9\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u624B\u52A8\u6DFB\u52A0\u3002`},[t]),Ne=l=>Math.max(256,Math.round(l/16)*16),_e=(l,u=B)=>{let w=On(on({resolution:u,ratio:l,align16:Oe}));return w?{w:w.width,h:w.height}:{w:1024,h:1024}},[We,Dt]=x.default.useState(null),Kn=(l=Ye)=>We&&We.ratio===l?We:_e(l,B),qt=(l=Ye)=>{let u=Kn(l);ft(u.w),Re(u.h)},In=(l,u)=>{let w=l/u,C=null;for(let oe of zn){if(oe.id==="\u81EA\u52A8")continue;let ie=Math.abs(fn(oe.id)-w)/w;ie<.02&&(!C||ie<C.d)&&(C={id:oe.id,d:ie})}if(C)return C.id;let L=(oe,ie)=>ie?L(ie,oe%ie):oe,j=L(Math.round(l),Math.round(u))||1,q=Math.round(l/j),ce=Math.round(u/j);return q<=64&&ce<=64?`${q}:${ce}`:`${Math.round(w*100)/100}:1`},gn=l=>{yt(l);let u=_e(l,B);if(Dt({ratio:l,w:u.w,h:u.h,custom:!1}),ft(u.w),Re(u.h),ve&&ve.type==="image"){let w=Tn(l,ve.w);Jt(ve.id,{ratio:l,w:w.w,h:w.h})}},Je=l=>{se(l);let u=_e(Ye,l);Dt({ratio:Ye,w:u.w,h:u.h,custom:!1}),ft(u.w),Re(u.h)},_t=()=>{let l=Math.round(ot),u=Math.round(Fe);if(!l||!u)return;Oe&&(l=Ne(l),u=Ne(u)),ft(l),Re(u);let w=In(l,u);if(Dt({ratio:w,w:l,h:u,custom:!0}),yt(w),ve&&ve.type==="image"){let C=Math.max(140,Math.min(280,l));Jt(ve.id,{ratio:w,w:C,h:Math.round(C/(l/u))+28})}},xt=(l,u)=>{let w=Number(String(u).replace(/\D/g,""))||0;if(l==="w"?ft(w):Re(w),!Xe||!w)return;let C=fn(Ye);l==="w"?Re(Math.round(w/C)):ft(Math.round(w*C))},Pt=()=>{let l=!Xe;if(Wt(l),l&&ot&&Fe){let u=fn(Ye);Re(Math.round(ot/u))}};x.default.useEffect(()=>{ve&&(ve.type==="image"||ve.type==="audio")&&(lt(ve.prompt||""),ve.ratio&&(yt(ve.ratio),qt(ve.ratio)),ve.resolution&&se(ve.resolution))},[ve?.id]);let fe=l=>{d(l),k.tick()},Mt=()=>{k.undo()||p?.("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C")},En=()=>{k.redo()||p?.("\u6CA1\u6709\u53EF\u91CD\u505A\u7684\u64CD\u4F5C")},Jt=(l,u)=>fe(w=>({nodes:w.nodes.map(C=>C.id===l?{...C,...u}:C)})),hn=(l,u,w)=>{let C=new Set(l);fe(L=>({nodes:L.nodes.map(j=>C.has(j.id)?{...j,x:Math.round(j.x+u),y:Math.round(j.y+w)}:j)}))},vn=(l,u,w)=>Jt(l,{w:u,h:w}),it=(l,u)=>fe(w=>({edges:[...w.edges,{id:ze("e"),from:l,to:u}]})),ct=l=>fe(u=>({edges:u.edges.filter(w=>w.id!==l)})),jn=l=>{let u=K.current,w={x:(window.innerWidth/2-u.tx)/u.s,y:(window.innerHeight/2-u.ty)/u.s},C=l==="config"?{modelKey:Ee||V[0]?.key||"",ratio:Ye,count:Ze,resolution:B}:l==="audio"?{name:"\u6682\u4E0D\u652F\u6301\u751F\u6210"}:{},L=pt(l,w,C);fe(j=>({nodes:[...j.nodes,L]})),te([L.id]),p?.(l==="audio"?"\u5DF2\u65B0\u5EFA\u97F3\u9891\u8282\u70B9\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09":`\u5DF2\u65B0\u5EFA${Ht[l]}\u8282\u70B9`)},Kt=async({node:l,rawText:u,sourceParent:w=null,modelOverride:C=""})=>{let L=Xr(w||l,I.current.nodes,I.current.edges),j=Wr(u,L.textInputs,L.upstream);if(!j){p?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD","error");return}let q=l?.id||"";if(!q){let je=w?{x:w.x+w.w+96,y:w.y}:{x:(window.innerWidth/2-K.current.tx)/K.current.s,y:(window.innerHeight/2-K.current.ty)/K.current.s},de=pt("text",{x:je.x+120,y:je.y+80},{text:"",prompt:u});de.x=je.x,de.y=je.y,q=de.id;let Ie=w?{id:ze("e"),from:w.id,to:q}:null;fe(Ft=>({nodes:[...Ft.nodes,de],edges:Ie?[...Ft.edges,Ie]:Ft.edges})),te([q])}let ce=C?wn(t,C):null,oe=ce?{provider:{id:ce.channel.id},model:{id:ce.model.id}}:r||null,ie=new AbortController;Ut.current=ie,Vt(!0);let Pe=0,He="",xe=!1,Ae=je=>{xe||fe(de=>({nodes:de.nodes.map(Ie=>Ie.id===q?je(Ie):Ie)}))};Ae(je=>({...je,text:"",status:"running"}));try{await Pr({model:oe,messages:[{role:"user",text:j}],signal:ie.signal,onDelta:(je,de)=>{He=de;let Ie=Date.now();Ie-Pe>80&&(Pe=Ie,Ae(Ft=>({...Ft,text:de})))}}),Ae(je=>({...je,text:He,status:"done"}))}catch(je){Ae(de=>({...de,text:He||`\u751F\u6210\u5931\u8D25\uFF1A${je.message}`,status:"failed"}))}finally{Vt(!1),Ut.current=null}},bn=()=>{let l=qe.get().trim();if(ve&&ve.type==="config"){cn({...ve,prompt:l||ve.prompt});return}if(!l)return;if(ve&&ve.type==="video"){fe(w=>({nodes:w.nodes.map(C=>C.id===ve.id?{...C,prompt:l}:C)})),N({...ve,prompt:l});return}if(ve&&ve.type==="audio"){p?.("\u97F3\u9891\u8282\u70B9\u6682\u4E0D\u652F\u6301\u751F\u6210","error");return}if(ve&&ve.type==="text"){Kt({node:ve,rawText:l}).then(()=>lt(""));return}let u=ve&&ve.type==="image"?ve:null;Nr({text:l,target:u,ratio:Ye,resolution:B,count:Ze,quality:le,transparent:ke})},Fn=async l=>{if(!l)return"";if(l.storageKey){let u=await Lr(l.storageKey).catch(()=>"");if(u)return u}if(l.url?.startsWith("data:"))return l.url;if(l.url){let w=await(await fetch(l.url)).blob();return hr(w)}return""},Nr=async({text:l,target:u=null,sourceParent:w=null,ratio:C,resolution:L,count:j,quality:q,transparent:ce,modelKeyOverride:oe="",forceOverwrite:ie=!1,extraRefInputs:Pe=[],onDoneStatus:He=null})=>{let{nodes:xe,edges:Ae}=I.current,je=u||w,de=je?Xr(je,xe,Ae):{upstream:[],textInputs:[],imageInputs:[],configNode:null},Ie=!ie&&u&&Yr(u)?u:w,Ft=Ie===u?null:u,or=C||de.configNode?.ratio||Ye,Qr=L||de.configNode?.resolution||B,Ds=Math.max(1,Number(j??de.configNode?.count??Ze)||1),Ps=oe||u?.modelKey||de.configNode?.modelKey||Ee||n?.modelKey,Ar=wn(t,Ps)||en(t,"image")[0]||null;if(!Ar){He?.("idle"),p?.("\u6CA1\u6709\u53EF\u7528\u7684\u751F\u56FE\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A\u652F\u6301\u751F\u56FE\u7684\u6E20\u9053","error");return}let Pa=Wr(l,de.textInputs,de.upstream),Ir=String(l||"").trim()||Pa,Ba=new AbortController;ye.current?.abort(),ye.current=Ba,et(!0);let Er=Ft?.id||"";if(Ft)fe(Qt=>({nodes:Qt.nodes.map(Ct=>Ct.id===Ft.id?{...Ct,status:"running",error:"",prompt:Ir,ratio:or,resolution:Qr,startedAt:Date.now()}:Ct)}));else{let Qt=K.current,Ct=Tn(or),xn=Ie?{x:Ie.x+Ie.w+96,y:Ie.y}:{x:(window.innerWidth/2-Qt.tx)/Qt.s-Ct.w/2,y:(window.innerHeight/2-Qt.ty)/Qt.s-Ct.h/2},ln={...pt("image",{x:xn.x+Ct.w/2,y:xn.y+Ct.h/2},{prompt:Ir,ratio:or,resolution:Qr}),...Ct,x:Math.round(xn.x),y:Math.round(xn.y),status:"running",startedAt:Date.now(),prompt:Ir};Er=ln.id;let Zr=Ie?{id:ze("e"),from:Ie.id,to:ln.id}:null;fe(ir=>({nodes:[...ir.nodes,ln],edges:Zr?[...ir.edges,Zr]:ir.edges})),te([ln.id])}try{let Qt=We&&We.custom&&We.ratio===or?`${We.w}x${We.h}`:"",Ct=on({resolution:Qr,ratio:or,customSize:Qt,align16:Oe}),xn=[];if(Ie&&Ie.type==="image"&&Yr(Ie)){let At=Et(Ie);xn.push({storageKey:At?.storageKey||Ie.storageKey||"",url:At?.url||Ie.src||""})}xn.push(...de.imageInputs,...Pe,...gt);let ln=new Set,Zr=xn.filter(At=>{let Qn=At?.storageKey||At?.url||"";return!Qn||ln.has(Qn)?!1:(ln.add(Qn),!0)}),ir=(await Promise.all(Zr.map(Fn))).filter(Boolean),uo={count:Ds,ratio:or,resolution:Qr,size:Ct,quality:q,background:ce?"transparent":void 0,outputFormat:ce?"png":void 0,align16:Oe},zr;ir.length?zr=await Un({capability:"image-edit",channel:Ar.channel,model:Ar.model.id,prompt:Pa,params:{...uo,imageDataUrls:ir},signal:Ba.signal}):zr=await Un({capability:"image",channel:Ar.channel,model:Ar.model.id,prompt:Pa,params:uo,signal:Ba.signal});let mo=zr.items||[];if(!mo.length){He?.("failed"),p?.("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247","error");return}let Rr=mo.map(At=>dn({storageKey:At.storageKey,width:At.width,height:At.height,bytes:At.bytes,mimeType:At.mimeType,prompt:Ir,url:At.url,degraded:At.degraded})),go=Rr[0];fe(At=>({nodes:At.nodes.map(Qn=>Qn.id===Er?{...Qn,status:"done",error:"",startedAt:0,images:Rr,primaryImageId:go.id,storageKey:go.storageKey,prompt:Ir}:Qn)})),te([Er]),He?.("idle"),lt(""),p?.(Rr.length>1?`\u5DF2\u751F\u6210 ${Rr.length} \u5F20`:"\u751F\u6210\u5B8C\u6210"),zr.short>0&&p?.(`\u4E0A\u6E38\u5C11\u7ED9\u4E86 ${zr.short} \u5F20`,"error")}catch(Qt){let Ct=Nn(Qt);Ct?p?.("\u5DF2\u53D6\u6D88"):p?.(Qt.message||"\u751F\u6210\u5931\u8D25","error"),He?.(Ct?"idle":"failed"),Er&&fe(xn=>({nodes:xn.nodes.map(ln=>ln.id===Er?{...ln,status:"failed",error:Ct?"\u5DF2\u53D6\u6D88":Qt.message||"\u751F\u6210\u5931\u8D25",startedAt:0}:ln)}))}finally{et(!1)}},cn=async l=>{if(!l)return;let{nodes:u,edges:w}=I.current,C=Xr(l,u,w),L=(l.prompt||"").trim(),j=l.mode||"image";if(!L&&!C.textInputs.length&&!C.imageInputs.length){p?.("\u5148\u8FDE\u63A5\u4E0A\u6E38\u6587\u672C/\u56FE\u7247\u8282\u70B9\uFF0C\u6216\u5728\u914D\u7F6E\u8282\u70B9\u91CC\u8F93\u5165\u63D0\u793A\u8BCD","error");return}let q=ce=>fe(oe=>({nodes:oe.nodes.map(ie=>ie.id===l.id?{...ie,status:ce}:ie)}));if(q("running"),j==="text"){await Kt({node:null,rawText:L,sourceParent:l,modelOverride:l.modelKey||""}),q("idle");return}if(j==="video"){let ce={x:l.x+l.w+96,y:l.y},oe=Wr(L,C.textInputs,C.upstream),ie=pt("video",{x:ce.x+120,y:ce.y+80},{prompt:oe,modelKey:l.modelKey||""});ie.x=ce.x,ie.y=ce.y;let Pe={id:ze("e"),from:l.id,to:ie.id};fe(He=>({nodes:[...He.nodes,ie],edges:[...He.edges,Pe]})),te([ie.id]),await N(ie),q("idle");return}if(j==="audio"){q("idle"),p?.("\u4E0A\u6E38\u6E20\u9053\u6682\u672A\u63D0\u4F9B\u97F3\u9891\u751F\u6210\u63A5\u53E3","error");return}await Nr({text:L,sourceParent:l,ratio:l.ratio||Ye,resolution:l.resolution||B,count:Math.max(1,Number(l.count)||1),quality:le,transparent:ke,modelKeyOverride:l.modelKey||"",extraRefInputs:C.imageInputs,onDoneStatus:q})},qr=()=>{let l=Mo(Tt,ue);l&&(fe(u=>({nodes:[l,...u.nodes]})),te([l.id]))},Mr=()=>{let l=new Set(ue);l.size&&(fe(u=>{let w=u.nodes.filter(L=>l.has(L.id)&&L.type!=="group"),C=u.nodes.filter(L=>!l.has(L.id));return lo(w,C),{nodes:C,edges:u.edges.filter(L=>!l.has(L.from)&&!l.has(L.to))}}),te([]))},Hn=x.default.useRef(null);Hn.current||(Hn.current={nodes:[],edges:[]});let Ea=()=>{let l=Tt.filter(C=>ue.includes(C.id));if(!l.length)return null;let u=new Set(l.map(C=>C.id)),w=Nt.filter(C=>u.has(C.from)||u.has(C.to));return{nodes:l.map(C=>({...C})),edges:w.map(C=>({...C}))}},Jr=()=>{let l=Ea();l&&(Hn.current=l,p?.(`\u5DF2\u590D\u5236 ${l.nodes.length} \u4E2A\u8282\u70B9`))},ar=()=>{let l=Hn.current;if(!l?.nodes?.length)return;let u={},w=z.cam.current,C=Math.min(...l.nodes.map(de=>de.x)),L=Math.min(...l.nodes.map(de=>de.y)),j=Math.max(...l.nodes.map(de=>de.x+de.w)),q=Math.max(...l.nodes.map(de=>de.y+de.h)),ce=(C+j)/2,oe=(L+q)/2,ie=(window.innerWidth/2-w.tx)/w.ts,Pe=(window.innerHeight/2-w.ty)/w.ts,He=Math.round(ie-ce),xe=Math.round(Pe-oe),Ae=l.nodes.map(de=>{let Ie=ze(de.type[0]);return u[de.id]=Ie,{...de,id:Ie,x:de.x+He,y:de.y+xe,status:"idle"}}),je=l.edges.filter(de=>u[de.from]&&u[de.to]).map(de=>({id:ze("e"),from:u[de.from],to:u[de.to]}));fe(de=>({nodes:[...de.nodes,...Ae],edges:[...de.edges,...je]})),te(Ae.map(de=>de.id)),p?.(`\u5DF2\u7C98\u8D34 ${Ae.length} \u4E2A\u8282\u70B9`)},za=()=>{let l=Tt.filter(L=>ue.includes(L.id));if(!l.length)return;let u={},w=l.map(L=>{let j=ze(L.type[0]);return u[L.id]=j,{...L,id:j,x:L.x+40,y:L.y+40,status:"idle"}}),C=Nt.filter(L=>u[L.from]&&u[L.to]).map(L=>({id:ze("e"),from:u[L.from],to:u[L.to]}));fe(L=>({nodes:[...L.nodes,...w],edges:[...L.edges,...C]})),te(w.map(L=>L.id))},Ta=async(l,u)=>{if(!u)return;let C=Et(u)?.storageKey||u.storageKey;if(!C){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}let L=await vt(C);if(!L){p?.("\u56FE\u7247\u6570\u636E\u8BFB\u4E0D\u51FA\u6765\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406","error");return}ae({kind:l,nodeId:u.id,src:L})},$a=async l=>{let u=E;if(ae(null),!u||!l)return;let w=Tt.find(oe=>oe.id===u.nodeId);if(Array.isArray(l)){let oe=[],ie=Math.max(...l.map(xe=>xe.column))+1,Pe=24;l.forEach((xe,Ae)=>{let je=Ae%ie,de=Math.floor(Ae/ie),Ie=pt("image",{x:0,y:0},{ratio:w?.ratio||"1:1"});Ie.x=(w?w.x+w.w+80:200)+je*(Ie.w+Pe),Ie.y=(w?w.y:200)+de*(Ie.h+Pe),Ie.prompt=w?.prompt||"",Ie.status="done",Ie.pending=xe.blob,oe.push(Ie)}),await Promise.all(oe.map(async xe=>{let Ae=wt("image");await Bt(Ae,xe.pending,{mimeType:xe.pending.type,source:"split"});let je=dn({storageKey:Ae,width:0,height:0,bytes:xe.pending.size,mimeType:xe.pending.type,prompt:xe.prompt});delete xe.pending,xe.images=[je],xe.primaryImageId=je.id,xe.storageKey=Ae}));let He=w?oe.map(xe=>({id:ze("e"),from:w.id,to:xe.id})):[];fe(xe=>({nodes:[...xe.nodes,...oe],edges:[...xe.edges,...He]})),te(oe.map(xe=>xe.id)),p?.(`\u5DF2\u5207\u51FA ${oe.length} \u4E2A\u8282\u70B9`);return}let C=async()=>{let ie=(w?Et(w):null)?.storageKey||w?.storageKey;if(ie){let Pe=await Lr(ie).catch(()=>"");if(Pe)return Pe}if(u.src){let Pe=await(await fetch(u.src)).blob();return hr(Pe)}return""};if(l.kind==="angle"){let oe=wn(t,w?.modelKey||Ee||n?.modelKey)||en(t,"image")[0]||null;if(!oe){p?.("\u6CA1\u6709\u53EF\u7528\u7684\u751F\u56FE\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A","error");return}let ie=await C().catch(()=>"");if(!ie){p?.("\u539F\u56FE\u6570\u636E\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u91CD\u7ED8\u65B0\u89C6\u89D2","error");return}let Pe={...pt("image",{x:w?w.x+w.w+96:400,y:w?w.y:200},{ratio:w?.ratio||"1:1",resolution:w?.resolution||B}),status:"running",startedAt:Date.now(),prompt:l.prompt},He=w?{id:ze("e"),from:w.id,to:Pe.id}:null;fe(xe=>({nodes:[...xe.nodes,Pe],edges:He?[...xe.edges,He]:xe.edges})),te([Pe.id]);try{let Ae=(await Un({capability:"image-edit",channel:oe.channel,model:oe.model.id,prompt:l.prompt,params:{imageDataUrls:[ie],skipRefPrefix:!0,size:ro(w),ratio:w?.ratio||"1:1",quality:le,background:ke?"transparent":void 0,outputFormat:ke?"png":void 0}})).items?.[0];if(!Ae)throw new Error("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247");let je=dn({storageKey:Ae.storageKey,width:Ae.width,height:Ae.height,bytes:Ae.bytes,mimeType:Ae.mimeType,url:Ae.url,degraded:Ae.degraded,prompt:l.prompt});fe(de=>({nodes:de.nodes.map(Ie=>Ie.id===Pe.id?{...Ie,status:"done",error:"",startedAt:0,images:[je],primaryImageId:je.id,storageKey:Ae.storageKey}:Ie)})),p?.("\u65B0\u89C6\u89D2\u751F\u6210\u5B8C\u6210")}catch(xe){fe(Ae=>({nodes:Ae.nodes.map(je=>je.id===Pe.id?{...je,status:"failed",error:xe.message||"\u591A\u89D2\u5EA6\u751F\u6210\u5931\u8D25",startedAt:0}:je)})),p?.(xe.message||"\u591A\u89D2\u5EA6\u751F\u6210\u5931\u8D25","error")}return}if(l.kind==="maskEdit"||l.dataUrl){let oe=wn(t,w?.modelKey||Ee||n?.modelKey)||en(t,"image")[0]||null;if(!oe){p?.("\u6CA1\u6709\u53EF\u7528\u4E8E\u7F16\u8F91\u7684\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A","error");return}try{let ie=await C().catch(()=>""),Pe=ie?[ie,l.dataUrl]:[l.dataUrl],xe=(await Un({capability:"image-edit",channel:oe.channel,model:oe.model.id,prompt:l.prompt,params:{imageDataUrls:Pe,skipRefPrefix:!0,size:ro(w),ratio:w?.ratio||"1:1",quality:le,background:ke?"transparent":void 0,outputFormat:ke?"png":void 0}})).items?.[0];if(!xe){p?.("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247","error");return}let Ae=l.rawPrompt||l.prompt,je=dn({storageKey:xe.storageKey,width:xe.width,height:xe.height,bytes:xe.bytes,mimeType:xe.mimeType,url:xe.url,degraded:xe.degraded,prompt:Ae}),de=pt("image",{x:w?w.x+w.w+96:400,y:w?w.y:200},{ratio:w?.ratio||"1:1",resolution:w?.resolution||B});de.prompt=Ae,de.status="done",de.images=[je],de.primaryImageId=je.id,de.storageKey=xe.storageKey;let Ie=w?{id:ze("e"),from:w.id,to:de.id}:null;fe(Ft=>({nodes:[...Ft.nodes,de],edges:Ie?[...Ft.edges,Ie]:Ft.edges})),te([de.id]),p?.("\u5C40\u90E8\u4FEE\u6539\u5B8C\u6210")}catch(ie){p?.(ie.message||"\u5C40\u90E8\u4FEE\u6539\u5931\u8D25","error")}return}let L=wt("image");await Bt(L,l.blob,{mimeType:l.blob.type,source:"tool",width:l.width,height:l.height});let j=dn({storageKey:L,width:l.width,height:l.height,bytes:l.blob.size,mimeType:l.blob.type,prompt:w?.prompt||""}),q=pt("image",{x:w?w.x+w.w+96:400,y:w?w.y:200},{ratio:w?.ratio||"1:1"});q.prompt=w?.prompt||"",q.status="done",q.images=[j],q.primaryImageId=j.id,q.storageKey=L;let ce=w?{id:ze("e"),from:w.id,to:q.id}:null;fe(oe=>({nodes:[...oe.nodes,q],edges:ce?[...oe.edges,ce]:oe.edges})),te([q.id]),p?.("\u5DF2\u751F\u6210\u65B0\u8282\u70B9")},Da=ve&&ve.type==="image"&&(Et(ve)||ve.storageKey),h=en(t,"video"),N=async l=>{let{nodes:u,edges:w}=I.current,C=Xr(l,u,w),L=Wr(l.prompt||"",C.textInputs,C.upstream);if(!L){p?.("\u5148\u7ED9\u8FD9\u4E2A\u89C6\u9891\u8282\u70B9\u5199\u4E00\u53E5\u63D0\u793A\u8BCD","error");return}let j=wn(t,l.modelKey||C.configNode?.modelKey)||h[0]||null;if(!j){p?.("\u6CA1\u6709\u652F\u6301\u89C6\u9891\u7684\u6A21\u578B\uFF0C\u53BB\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A\u652F\u6301\u89C6\u9891\u7684\u6E20\u9053","error");return}fe(q=>({nodes:q.nodes.map(ce=>ce.id===l.id?{...ce,status:"running",error:"",modelKey:j.key}:ce)}));try{let q=new AbortController;U.current?.abort(),U.current=q;let ce=await Un({capability:"video",channel:j.channel,model:j.model.id,prompt:L,params:{seconds:l.seconds||4},signal:q.signal,onTick:({status:oe,stage:ie,taskId:Pe,note:He})=>{Pe&&fe(xe=>({nodes:xe.nodes.map(Ae=>Ae.id===l.id?{...Ae,videoTaskId:Pe}:Ae)})),He&&p?.(He)}});fe(oe=>({nodes:oe.nodes.map(ie=>ie.id===l.id?{...ie,status:"idle",storageKey:ce.storageKey,mimeType:ce.mimeType,bytes:ce.bytes}:ie)})),p?.("\u89C6\u9891\u751F\u6210\u5B8C\u6210")}catch(q){Nn(q)?p?.("\u5DF2\u53D6\u6D88"):p?.(q.message||"\u89C6\u9891\u751F\u6210\u5931\u8D25","error"),fe(ce=>({nodes:ce.nodes.map(oe=>oe.id===l.id?{...oe,status:"failed",error:Nn(q)?"":q.message||"\u751F\u6210\u5931\u8D25"}:oe)}))}},F=async l=>{let u=l?.prompt||"";if(!u.trim()){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u63D0\u793A\u8BCD","error");return}try{await navigator.clipboard.writeText(u),p?.("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{let w=document.createElement("textarea");w.value=u,w.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(w),w.select();try{document.execCommand("copy"),p?.("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{p?.("\u590D\u5236\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u526A\u8D34\u677F","error")}finally{document.body.removeChild(w)}}},Q=async l=>{let w=Et(l)?.storageKey||l.storageKey;if(!w){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}let C=await Or(w).catch(()=>null);if(!C?.blob){p?.("\u56FE\u7247\u6570\u636E\u8BFB\u4E0D\u51FA\u6765\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406","error");return}let L=(C.blob.type?.split("/")[1]||"png").replace("jpeg","jpg"),j=URL.createObjectURL(C.blob),q=document.createElement("a");q.href=j,q.download=`${(l.prompt||"canvas-image").slice(0,40).replace(/[/\\:*?"<>|]/g,"")}.${L}`,q.click(),setTimeout(()=>URL.revokeObjectURL(j),3e3),p?.("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")},we=async l=>{let w=Et(l)?.storageKey||l.storageKey;if(!w){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}if(!v){p?.("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u5B58\u4E3A\u8D44\u4EA7","error");return}v({id:ze("a"),kind:"image",title:(l.prompt||"\u753B\u5E03\u56FE\u7247").slice(0,30),text:l.prompt||"",cover:w,tags:["\u753B\u5E03"],source:"\u753B\u5E03\u8282\u70B9",at:Date.now()}),p?.("\u5DF2\u5B58\u4E3A\u8D44\u4EA7")},be=l=>{l&&(fe(u=>{let w=u.nodes.filter(L=>L.id===l),C=u.nodes.filter(L=>L.id!==l);return lo(w,C),{nodes:C,edges:u.edges.filter(L=>L.from!==l&&L.to!==l)}}),te(u=>u.filter(w=>w!==l)),p?.("\u5DF2\u5220\u9664\u8282\u70B9"))},Ge="\u4F60\u662F\u4E00\u4E2A\u56FE\u50CF\u63CF\u8FF0\u52A9\u624B\u3002\u770B\u5230\u56FE\u7247\u540E\uFF0C\u7528\u4E00\u6BB5\u4E2D\u6587\u5199\u6E05\u695A\u5B83\u7684\u753B\u9762\u5185\u5BB9\uFF1A\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u3001\u8272\u5F69\u3002",De="\u8BF7\u63CF\u8FF0\u8FD9\u5F20\u56FE\u3002\u53EA\u7ED9\u63CF\u8FF0\u672C\u8EAB\uFF0C\u4E0D\u8981\u89E3\u91CA\u4F60\u5728\u505A\u4EC0\u4E48\uFF0C\u4E0D\u8981\u7528 Markdown \u6807\u9898\u6216\u5217\u8868\u3002",st=async l=>{let w=Et(l)?.storageKey||l.storageKey;if(!w){p?.("\u8FD9\u4E2A\u8282\u70B9\u8FD8\u6CA1\u6709\u56FE\u7247","error");return}let C=await br(w).catch(()=>null);if(!C?.blob){p?.("\u56FE\u7247\u6570\u636E\u8BFB\u4E0D\u51FA\u6765\uFF0C\u53EF\u80FD\u5DF2\u88AB\u6E05\u7406","error");return}let L=await aa().catch(()=>null),j=kl(L,r);if(j&&Array.isArray(j.model.inputModalities)&&!j.model.inputModalities.includes("image")){p?.(`DSH \u5F53\u524D\u6A21\u578B\u300C${j.model.name||j.model.id}\u300D\u4E0D\u652F\u6301\u8BFB\u56FE\uFF0C\u8BF7\u5728 DSH \u91CC\u6362\u4E00\u4E2A\u652F\u6301\u56FE\u7247\u8F93\u5165\u7684\u6A21\u578B`,"error");return}let q=await Ti(C.blob,768);p?.("\u6B63\u5728\u53CD\u63A8\u63D0\u793A\u8BCD\u2026");try{let ce=await Pr({messages:[{role:"user",text:De}],images:[{mimeType:q.mimeType,data:q.data}],system:Ge,model:j?{provider:j.provider.id,model:j.model.id}:void 0,maxTokens:600}),oe=String(ce||"").trim();if(!oe){p?.("\u6A21\u578B\u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\uFF0C\u53EF\u80FD\u8FD9\u4E2A\u6A21\u578B\u4E0D\u652F\u6301\u8BFB\u56FE","error");return}fe(ie=>{let Pe=ie.nodes.map(xe=>xe.id===l.id?{...xe,prompt:oe}:xe),He=pt("text",{x:0,y:0});return He.x=l.x+l.w+96,He.y=l.y,He.text=oe,He.name="\u53CD\u63A8\u63D0\u793A\u8BCD",He.status="done",{nodes:[...Pe,He]}}),p?.("\u53CD\u63A8\u5B8C\u6210\uFF0C\u5DF2\u5199\u5165\u63D0\u793A\u8BCD\u5E76\u65B0\u5EFA\u6587\u672C\u8282\u70B9")}catch(ce){Nn(ce)?p?.("\u5DF2\u53D6\u6D88"):p?.(ce.message||"\u53CD\u63A8\u5931\u8D25","error")}},mt=l=>{let u=document.createElement("input");u.type="file",u.accept="image/*",u.onchange=async()=>{let w=u.files?.[0];if(w){if(!/^image\//.test(w.type)){p?.("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6","error");return}try{let C=wt("image");await Bt(C,w,{mimeType:w.type,source:"replace"});let L=await wr(w).catch(()=>({width:0,height:0})),j=dn({storageKey:C,width:L.width,height:L.height,bytes:w.size,mimeType:w.type,prompt:l.prompt||""}),q=!1;fe(ce=>ce.nodes.find(ie=>ie.id===l.id)?(q=!0,{nodes:ce.nodes.map(ie=>ie.id===l.id?{...ie,images:[j],primaryImageId:j.id,storageKey:C,status:"idle",error:""}:ie)}):{}),q&&p?.("\u5DF2\u66FF\u6362\u56FE\u7247")}catch(C){p?.(C.message||"\u66FF\u6362\u5931\u8D25","error")}}},u.click()},yn=l=>{let u=l.locked!==!1;fe(w=>({nodes:w.nodes.map(C=>C.id===l.id?{...C,locked:!u}:C)})),p?.(u?"\u5DF2\u6539\u4E3A\u81EA\u7531\u6BD4\u4F8B":"\u5DF2\u6539\u4E3A\u7B49\u6BD4\u7F29\u653E")},Cr=l=>{let u=Et(l);Ot({id:l.id,title:l.name||l.prompt?.slice(0,24)||"\u56FE\u7247",width:u?.width||Math.round(l.w),height:u?.height||Math.round(l.h),bytes:u?.bytes||0,mimeType:u?.mimeType||"",storageKey:u?.storageKey||l.storageKey||"",count:l.images?.length||0,locked:l.locked!==!1,createdAt:u?.createdAt||0,x:Math.round(l.x),y:Math.round(l.y),w:Math.round(l.w),h:Math.round(l.h)})},ks=(l,u)=>{switch(l){case"copyPrompt":F(u);break;case"reversePrompt":st(u);break;case"sendToStudio":s?.(u);break;case"replace":mt(u);break;case"resize":yn(u);break;case"info":Cr(u);break;case"crop":case"split":case"upscale":case"angle":case"maskEdit":Ta(l,u);break;case"saveAsset":we(u);break;case"download":Q(u);break;case"delete":be(u.id);break;default:break}},Ss=l=>{fe(u=>({nodes:u.nodes.filter(w=>w.id!==l)})),te([]),p?.("\u5DF2\u53D6\u6D88\u5206\u7EC4\uFF0C\u8282\u70B9\u4FDD\u7559")},Ns=l=>{fe(u=>{let w=u.nodes.find(q=>q.id===l),C=new Set([l,...w?.childIds||[]]),L=u.nodes.filter(q=>C.has(q.id)),j=u.nodes.filter(q=>!C.has(q.id));return lo(L,j),{nodes:j,edges:u.edges.filter(q=>!C.has(q.from)&&!C.has(q.to))}}),te([]),p?.("\u5DF2\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9")},Ms=()=>te(Tt.map(l=>l.id)),Cs=l=>{let u=I.current.nodes.find(w=>w.id===l);if(u){if(u.type==="config"){cn(u);return}if(u.type==="video"){N(u);return}if(u.type==="audio"){p?.("\u97F3\u9891\u8282\u70B9\u6682\u4E0D\u652F\u6301\u751F\u6210","error");return}if(u.type==="text"){Kt({node:u,rawText:u.prompt||u.text||qe.get().trim()});return}if(u.type==="image"){let w=(u.prompt||"").trim()||qe.get().trim();if(!w){p?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD\u518D\u751F\u6210","error");return}Nr({text:w,target:u,ratio:u.ratio||Ye,resolution:u.resolution||B,count:Ze,quality:le,transparent:ke,forceOverwrite:!Yr(u)})}}},As=()=>{let l=new Set(ue),u=I.current.nodes.filter(C=>l.has(C.id)&&C.type==="group").map(C=>C.id);if(!u.length)return;let w=new Set(u);fe(C=>({nodes:C.nodes.filter(L=>!w.has(L.id))})),te([]),p?.("\u5DF2\u53D6\u6D88\u5206\u7EC4\uFF0C\u8282\u70B9\u4FDD\u7559")},Is=(l,u)=>{let w=l==="config"?{modelKey:Ee||V[0]?.key||"",ratio:Ye,count:Ze,resolution:B}:l==="audio"?{name:"\u6682\u4E0D\u652F\u6301\u751F\u6210"}:{},C=pt(l,u,w);return fe(L=>({nodes:[...L.nodes,C]})),te([C.id]),p?.(l==="audio"?"\u5DF2\u65B0\u5EFA\u97F3\u9891\u8282\u70B9\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09":`\u5DF2\u65B0\u5EFA${Ht[l]}\u8282\u70B9`),C},Es=(l,u,w)=>{let C=I.current.nodes.find(ie=>ie.id===l);if(!C)return;let L=u==="config"?{modelKey:Ee||V[0]?.key||"",ratio:Ye,count:Ze,resolution:B}:u==="audio"?{name:"\u6682\u4E0D\u652F\u6301\u751F\u6210"}:{},j=pt(u,w,L),q=!(C.type==="config"&&j.type==="config")&&j.type!=="group",ce=q?{id:ze("e"),from:l,to:j.id}:null;fe(ie=>({nodes:[...ie.nodes,j],edges:ce?[...ie.edges,ce]:ie.edges})),te([j.id]);let oe=u==="audio"?"\uFF08\u6682\u4E0D\u652F\u6301\u751F\u6210\uFF09":"";p?.(q?`\u5DF2\u65B0\u5EFA\u5E76\u8FDE\u63A5${Ht[u]}\u8282\u70B9${oe}`:`\u5DF2\u65B0\u5EFA${Ht[u]}\u8282\u70B9${oe}`)},zs=async(l,u,w)=>{if(l==="setPrimary"&&u){fe(C=>({nodes:C.nodes.map(L=>L.id===u.id?Do(L,w):L)})),p?.("\u5DF2\u8BBE\u4E3A\u4E3B\u56FE");return}if(l==="removeItem"&&u){fe(C=>({nodes:C.nodes.map(L=>L.id===u.id?Po(L,w):L)})),p?.("\u5DF2\u79FB\u9664\u56FE\u7247");return}if(l==="explode"&&u){let C=Bo(u,{makeId:()=>ze("i")});if(!C.length)return;fe(L=>({nodes:[...L.nodes.filter(j=>j.id!==u.id),...C],edges:L.edges.filter(j=>j.from!==u.id&&j.to!==u.id)})),te(C.map(L=>L.id)),p?.(`\u5DF2\u62C6\u5206\u4E3A ${C.length} \u4E2A\u72EC\u7ACB\u8282\u70B9`);return}if(l==="duplicateItem"&&u){let C=(u.images||[]).find(oe=>oe.id===w);if(!C)return;let L=C.width&&C.height?C.width/C.height:u.w/Math.max(1,u.h-28),j=Math.max(180,Math.min(280,Math.round(u.w||240))),q=Math.round(j/Math.max(.25,L))+28,ce={...pt("image",{x:u.x+u.w+32,y:u.y},{ratio:u.ratio||"1:1",w:j,h:q}),x:Math.round(u.x+u.w+32),y:Math.round(u.y),prompt:C.prompt||u.prompt||"",status:"done",images:[{...C}],primaryImageId:C.id,storageKey:C.storageKey||""};fe(oe=>({nodes:[...oe.nodes,ce]})),te([ce.id]),p?.("\u5DF2\u62C6\u51FA\u4E3A\u72EC\u7ACB\u8282\u70B9");return}if(l==="downloadItem"&&u){let C=(u.images||[]).find(ie=>ie.id===w),L=C?.storageKey;if(!L){p?.("\u8FD9\u5F20\u56FE\u7247\u6682\u65E0\u672C\u5730\u526F\u672C","error");return}let j=await Or(L).catch(()=>null);if(!j?.blob){p?.("\u56FE\u7247\u8BFB\u53D6\u5931\u8D25","error");return}let q=(j.blob.type?.split("/")[1]||"png").replace("jpeg","jpg"),ce=URL.createObjectURL(j.blob),oe=document.createElement("a");oe.href=ce,oe.download=`${(C.prompt||u.prompt||"image").slice(0,32).replace(/[/\\:*?"<>|]/g,"")}.${q}`,oe.click(),setTimeout(()=>URL.revokeObjectURL(ce),3e3),p?.("\u5DF2\u5F00\u59CB\u4E0B\u8F7D");return}if(l==="merge"&&Array.isArray(u)){let{nodes:C}=I.current,L=new Set(u),j=C.filter(ie=>L.has(ie.id)&&ie.type==="image"&&Yr(ie));if(j.length<2){p?.("\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u6709\u56FE\u7684\u56FE\u7247\u8282\u70B9","error");return}let q=Oo(j,{makeId:()=>ze("i")});if(!q)return;let ce=new Set(j.map(ie=>ie.id)),oe={...q,w:Math.min(280,Math.max(200,Math.round(j[0].w||240))),h:Math.min(380,Math.max(200,Math.round(j[0].h||268)))};fe(ie=>({nodes:[...ie.nodes.filter(Pe=>!ce.has(Pe.id)),oe],edges:ie.edges.filter(Pe=>!ce.has(Pe.from)&&!ce.has(Pe.to))})),te([oe.id]),p?.(`\u5DF2\u5408\u5E76\u4E3A ${oe.images.length} \u5F20\u6279\u91CF\u56FE\u7EC4`)}},Ts=async(l,u)=>{let w=[...l||[]].filter(q=>q?.type?.startsWith("image/"));if(!w.length)return;let C=[],L=Math.round(u?.x??200),j=Math.round(u?.y??200);for(let q of w){let ce=await $n(q).catch(()=>({width:0,height:0})),oe=wt("image");await Bt(oe,q,{mimeType:q.type,source:"drop",width:ce.width,height:ce.height});let ie=ce.width&&ce.height?ce.width/ce.height:1,Pe=240,He=Math.round(Pe/Math.max(.25,Math.min(4,ie)))+28,xe=dn({storageKey:oe,width:ce.width,height:ce.height,bytes:q.size,mimeType:q.type,prompt:""}),Ae=pt("image",{x:L,y:j},{w:Pe,h:He,name:q.name||""});Ae.x=L,Ae.y=j,Ae.status="done",Ae.images=[xe],Ae.primaryImageId=xe.id,Ae.storageKey=oe,C.push(Ae),L+=Pe+24}C.length&&(fe(q=>({nodes:[...q.nodes,...C]})),te(C.map(q=>q.id)),p?.(`\u5DF2\u5BFC\u5165 ${C.length} \u5F20\u56FE\u7247\u5230\u753B\u5E03`))},Qe=x.default.useRef(null);Qe.current={duplicate:za,wrap:qr,ungroupSelected:As,removeSelection:Mr,removeEdge:ct,addNode:jn,selectAll:Ms,fit:()=>z.fit?.(),generateNode:Cs,ungroup:Ss,deleteGroupDeep:Ns,undo:Mt,redo:En,copy:Jr,paste:ar,setTool:$e,setSelection:te,updateNode:Jt,runConfigNode:cn,handleBatchAction:zs,createFromConnection:Es,createAtWorld:Is,handleDropFiles:Ts,handleNodeAction:ks,onMove:hn,onResize:vn,onConnect:it,onRemoveEdge:ct,onOpenNode:l=>{te([l.id]),lt(l.prompt||l.text||"")},onGesture:l=>{l==="start"?k.pause():k.resume()}};let $s=x.default.useMemo(()=>({duplicate:()=>Qe.current.duplicate(),wrap:()=>Qe.current.wrap(),ungroupSelected:()=>Qe.current.ungroupSelected(),removeSelection:()=>Qe.current.removeSelection(),removeEdge:l=>Qe.current.removeEdge(l),addNode:l=>Qe.current.addNode(l),selectAll:()=>Qe.current.selectAll(),fit:()=>Qe.current.fit(),generateNode:l=>Qe.current.generateNode(l),ungroup:l=>Qe.current.ungroup(l),deleteGroupDeep:l=>Qe.current.deleteGroupDeep(l)}),[]),jt=x.default.useMemo(()=>({onMove:(l,u,w)=>Qe.current.onMove(l,u,w),onResize:(l,u,w)=>Qe.current.onResize(l,u,w),onConnect:(l,u)=>Qe.current.onConnect(l,u),onRemoveEdge:l=>Qe.current.onRemoveEdge(l),onNodeAction:(l,u)=>Qe.current.handleNodeAction(l,u),onGesture:l=>Qe.current.onGesture(l),onOpenNode:l=>Qe.current.onOpenNode(l),onUpdateNode:(l,u)=>Qe.current.updateNode(l,u),onRunConfig:l=>Qe.current.runConfigNode(l),onBatchAction:(l,u,w)=>Qe.current.handleBatchAction(l,u,w),onCreateFromConnection:(l,u,w)=>Qe.current.createFromConnection(l,u,w),onCreateAt:(l,u)=>Qe.current.createAtWorld(l,u),onDropFiles:(l,u)=>Qe.current.handleDropFiles(l,u)}),[]);return x.default.useEffect(()=>{let l=u=>{let w=document.activeElement;if(w&&(/input|textarea|select/i.test(w.tagName)||w.isContentEditable))return;let C=u.clipboardData;if(!C)return;let L=[];for(let ce of Array.from(C.items||[]))if(ce.kind==="file"&&ce.type.startsWith("image/")){let oe=ce.getAsFile();oe&&L.push(oe)}if(!L.length)for(let ce of Array.from(C.files||[]))ce.type?.startsWith("image/")&&L.push(ce);if(!L.length)return;u.preventDefault();let j=K.current,q={x:(window.innerWidth/2-j.tx)/j.s-120,y:(window.innerHeight/2-j.ty)/j.s-120};Qe.current?.handleDropFiles(L,q)};return window.addEventListener("paste",l),()=>window.removeEventListener("paste",l)},[K]),x.default.useEffect(()=>{let l=u=>{if(/input|textarea|select/i.test(u.target.tagName))return;let w=u.nativeEvent||u;if(u.isComposing||w.isComposing||u.keyCode===229||u.which===229||w.keyCode===229||w.which===229||u.target.isContentEditable)return;let C=Qe.current;if(!C)return;let L=u.metaKey||u.ctrlKey,j=u.key.toLowerCase();if(L){if(j==="z"){u.preventDefault(),u.shiftKey?C.redo():C.undo();return}if(j==="y"){u.preventDefault(),C.redo();return}if(j==="d"){u.preventDefault(),C.duplicate();return}if(j==="g"){u.preventDefault(),u.shiftKey?C.ungroup():C.wrap();return}if(j==="a"){u.preventDefault(),C.selectAll();return}if(j==="c"){u.preventDefault(),C.copy();return}if(j==="v"){u.preventDefault(),C.paste();return}return}if(u.key==="Delete"||u.key==="Backspace"){u.preventDefault(),C.removeSelection();return}if(u.key==="Escape"){C.setSelection([]);return}j==="v"&&C.setTool("select"),j==="h"&&C.setTool("pan"),j==="t"&&C.addNode("text"),j==="i"&&C.addNode("image"),j==="a"&&C.addNode("audio"),j==="c"&&C.addNode("config"),j==="g"&&C.addNode("group")};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),x.default.createElement("div",{className:"cf-editor"},E?x.default.createElement(Fi,{kind:E.kind,src:E.src,onClose:()=>ae(null),onDone:$a}):null,Ve?x.default.createElement(wl,{info:Ve,onClose:()=>Ot(null),say:p}):null,O?x.default.createElement(Ma,{prompts:o,onClose:()=>Z(!1),onPick:async(l,u={})=>{if(Z(!1),lt(l.text||l.prompt||""),u.withRefs&&l.referenceImageUrls?.length){p?.(`\u5DF2\u586B\u5165\u300C${l.title||"\u63D0\u793A\u8BCD"}\u300D\uFF0C\u6B63\u5728\u52A0\u8F7D ${l.referenceImageUrls.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let w=await nr(l.referenceImageUrls,{max:4});w.length?(tt(C=>[...C,...w.map(L=>({id:L.id,name:L.name,url:L.url,storageKey:L.storageKey}))]),p?.(`\u5DF2\u52A0\u5165 ${w.length} \u5F20\u63D0\u793A\u8BCD\u914D\u5957\u53C2\u8003\u56FE`)):p?.(`\u5DF2\u586B\u5165\u300C${l.title||"\u63D0\u793A\u8BCD"}\u300D\uFF08\u914D\u5957\u53C2\u8003\u56FE\u52A0\u8F7D\u5931\u8D25\uFF09`)}else p?.(`\u5DF2\u586B\u5165\u300C${l.title||"\u63D0\u793A\u8BCD"}\u300D`)}}):null,x.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},x.default.createElement(Ke,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:m}),x.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),Nl.map((l,u)=>l.sep?x.default.createElement("span",{key:`s${u}`,className:"cf-rail-sep","aria-hidden":"true"}):x.default.createElement("button",{key:l.id,type:"button",className:`cf-rail-btn${ee===l.id?" is-on":""}`,title:`${l.label}  ${l.key}`,"aria-label":l.label,"aria-pressed":ee===l.id,disabled:l.action==="undo"?!H.canUndo:l.action==="redo"?!H.canRedo:!1,onClick:()=>{if(l.action==="undo"){Mt();return}if(l.action==="redo"){En();return}if(l.id==="focus"){z.fit?.();return}if(["text","image","video","audio","config","group"].includes(l.id)){jn(l.id);return}$e(l.id)}},x.default.createElement(he,{name:l.icon,size:18})))),x.default.createElement("div",{className:"cf-editor-main"},x.default.createElement("div",{className:"cf-canvas-bar"},x.default.createElement("span",{className:"cf-canvas-bar-name",title:e.name||"\u672A\u547D\u540D\u753B\u5E03"},e.name||"\u672A\u547D\u540D\u753B\u5E03"),x.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},Oa.map(l=>x.default.createElement("button",{key:l.id,type:"button",className:(e.grid||"dots")===l.id?"is-on":"",onClick:()=>d({grid:l.id})},l.label))),A?x.default.createElement("button",{type:"button",className:"cf-icon-btn",title:`\u5207\u6362\u5916\u89C2\uFF08\u5F53\u524D\uFF1A${T==="dark"?"\u6697\u9ED1":T==="light"?"\u660E\u4EAE":"\u8DDF\u968F\u7CFB\u7EDF"}\uFF09`,"aria-label":"\u5207\u6362\u5916\u89C2\u4E3B\u9898",onClick:()=>{let l=["system","light","dark"];A(l[(l.indexOf(T)+1)%l.length])}},x.default.createElement(he,{name:T==="dark"?"moon":"sun",size:14})):null),x.default.createElement(Ml,{nodes:Tt,edges:Nt,selection:ue,channels:t,grid:e.grid||"dots",tool:ee,minimap:!0,camera:Cn,camApi:z,showHint:!un.length,onSelection:te,onMove:jt.onMove,onResize:jt.onResize,onNodeAction:jt.onNodeAction,showToolbarLabels:D,onGesture:jt.onGesture,onConnect:jt.onConnect,onRemoveEdge:jt.onRemoveEdge,onOpenNode:jt.onOpenNode,onUpdateNode:jt.onUpdateNode,onRunConfig:jt.onRunConfig,onBatchAction:jt.onBatchAction,onCreateFromConnection:jt.onCreateFromConnection,onCreateAt:jt.onCreateAt,onDropFiles:jt.onDropFiles,actions:$s}),f?x.default.createElement("div",{className:`cf-composer${Me?" is-menu":""}`},gt.length?x.default.createElement("div",{className:"cf-composer-refs"},gt.map(l=>x.default.createElement("span",{key:l.id,className:"cf-ref-thumb"},x.default.createElement("img",{src:l.url,alt:l.name}),x.default.createElement("button",{type:"button",className:"cf-ref-x",onClick:()=>ut(l.id),"aria-label":`\u79FB\u9664 ${l.name}`},"\xD7")))):null,x.default.createElement(Cl,{draftStore:qe,hasRefs:gt.length>0,placeholder:ve?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":ve?.type==="text"?"\u63CF\u8FF0\u8981\u751F\u6210\u7684\u6587\u5B57\u5185\u5BB9":ve?.type==="audio"?"\u97F3\u9891\u8282\u70B9\u6682\u4E0D\u652F\u6301\u751F\u6210":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onPaste:S,onSubmit:bn}),x.default.createElement("div",{className:"cf-composer-bar",ref:An},x.default.createElement("div",{className:"cf-composer-left"},x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Le(Me==="ref"?null:"ref"),"aria-expanded":Me==="ref","aria-haspopup":"menu"},x.default.createElement(he,{name:"plus",size:15}),"\u53C2\u8003",gt.length+$t.length?x.default.createElement("span",{className:"cf-bar-badge"},gt.length+$t.length):null),Me==="ref"?x.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},x.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),$t.length?$t.map(l=>x.default.createElement("button",{key:l.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{lt(u=>`${u}${u&&!u.endsWith(" ")?" ":""}@${Ht[l.type]}${l.name?`:${l.name}`:""} `),Le(null)}},x.default.createElement(he,{name:l.type==="image"?"image":l.type==="text"?"text":"audio",size:14}),x.default.createElement("span",{className:"cf-menu-label"},l.name||(l.prompt||l.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):x.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:_n},x.default.createElement(he,{name:"upload",size:14}),x.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),x.default.createElement("input",{ref:Gt,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:mn})):null),x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>{Me!=="ratio"&&qt(),Le(Me==="ratio"?null:"ratio")},"aria-expanded":Me==="ratio","aria-haspopup":"menu"},x.default.createElement(he,{name:"frame",size:15}),Ye),Me==="ratio"?x.default.createElement("div",{className:"cf-menu cf-menu--up cf-size-panel",role:"menu","aria-label":"\u5C3A\u5BF8"},x.default.createElement("div",{className:"cf-size-head"},x.default.createElement("span",{className:"cf-size-title"},"\u5C3A\u5BF8"),x.default.createElement("label",{className:"cf-size-align"},x.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),x.default.createElement("input",{type:"checkbox",checked:Oe,onChange:l=>at(l.target.checked)}))),x.default.createElement("div",{className:"cf-size-row"},x.default.createElement("input",{className:"cf-input cf-input--num cf-px",value:ot,"aria-label":"\u5BBD",inputMode:"numeric",onChange:l=>xt("w",l.target.value)}),x.default.createElement("button",{type:"button",className:`cf-size-link${Xe?" is-on":""}`,"aria-pressed":Xe,title:Xe?"\u5DF2\u9501\u5B9A\u6BD4\u4F8B":"\u672A\u9501\u5B9A\u6BD4\u4F8B","aria-label":Xe?"\u89E3\u9501\u6BD4\u4F8B":"\u9501\u5B9A\u6BD4\u4F8B",onClick:Pt},x.default.createElement(he,{name:"link",size:13})),x.default.createElement("input",{className:"cf-input cf-input--num cf-px",value:Fe,"aria-label":"\u9AD8",inputMode:"numeric",onChange:l=>xt("h",l.target.value)})),x.default.createElement("div",{className:"cf-size-chips"},zn.map(l=>x.default.createElement("button",{key:l.id,type:"button",className:`cf-size-chip${Ye===l.id?" is-on":""}`,role:"menuitem",onClick:()=>{gn(l.id),Le(null)}},l.label))),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("div",{className:"cf-size-foot"},x.default.createElement("span",{className:"cf-size-hint"},ot&&Fe?`${ot} \xD7 ${Fe}`:"\u586B\u4E24\u4E2A\u8FB9\u957F"),x.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",disabled:!ot||!Fe,onClick:()=>{_t(),Le(null)}},"\u5E94\u7528"))):null),x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Le(Me==="count"?null:"count"),"aria-expanded":Me==="count","aria-haspopup":"menu"},Ze," \u5F20",x.default.createElement(he,{name:"chevron",size:12})),Me==="count"?x.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},x.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(l=>x.default.createElement("button",{key:l,type:"button",className:`cf-menu-item${Ze===l?" is-on":""}`,role:"menuitem",onClick:()=>{$(l),Le(null)}},l," \u5F20"))):null),x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Le(Me==="res"?null:"res"),"aria-expanded":Me==="res","aria-haspopup":"menu","data-res":!0,title:`\u5206\u8FA8\u7387\uFF1A${B}`,"aria-label":`\u5206\u8FA8\u7387\uFF1A${B}`},x.default.createElement(he,{name:"resolution",size:15}),B),Me==="res"?x.default.createElement("div",{className:"cf-menu cf-menu--up cf-size-panel",role:"menu","aria-label":"\u5206\u8FA8\u7387"},x.default.createElement("div",{className:"cf-size-head"},x.default.createElement("span",{className:"cf-size-title"},"\u5206\u8FA8\u7387"),x.default.createElement("span",{className:"cf-size-hint"},ot," \xD7 ",Fe)),x.default.createElement("div",{className:"cf-size-chips"},Xn.map(l=>x.default.createElement("button",{key:l,type:"button",className:`cf-size-chip${B===l?" is-on":""}`,role:"menuitem",onClick:()=>{Je(l),Le(null)}},l))),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("div",{className:"cf-size-head"},x.default.createElement("span",{className:"cf-size-title"},"\u753B\u8D28")),x.default.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:4}},fr.map(l=>x.default.createElement("button",{key:l,type:"button",className:`cf-chip${le===l?" is-on":""}`,onClick:()=>Ue(l)},l))),x.default.createElement("div",{className:"cf-menu-sep"}),x.default.createElement("label",{className:"cf-size-align",style:{justifyContent:"space-between"}},x.default.createElement("span",null,"\u900F\u660E\u80CC\u666F\uFF08PNG\uFF09"),x.default.createElement("input",{type:"checkbox",checked:ke,onChange:l=>Ce(l.target.checked)}))):null),x.default.createElement("button",{type:"button",className:"cf-icon-btn",title:"\u4ECE\u63D0\u793A\u8BCD\u5E93\u9009\u62E9","aria-label":"\u63D0\u793A\u8BCD\u5E93",onClick:()=>Z(!0)},x.default.createElement(he,{name:"book",size:15}))),x.default.createElement("div",{className:"cf-composer-right"},x.default.createElement("div",{className:"cf-bar-slot"},x.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>Le(Me==="model"?null:"model"),"aria-expanded":Me==="model","aria-haspopup":"menu"},x.default.createElement(he,{name:"bars",size:15}),x.default.createElement("span",{className:"cf-bar-label"},ge?ge.label:"\u9009\u62E9\u6A21\u578B"),x.default.createElement(he,{name:"chevron",size:12})),Me==="model"?x.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},x.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),V.length?V.map(l=>x.default.createElement("button",{key:l.key,type:"button",className:`cf-menu-item${l.key===Ee?" is-on":""}`,role:"menuitem",onClick:()=>{Se(l.key),Le(null)}},x.default.createElement("span",{className:"cf-menu-label"},l.label),x.default.createElement("span",{className:"cf-menu-meta"},l.channel.name||l.channel.protocol))):x.default.createElement("p",{className:"cf-menu-empty"},R)):null),un.length?x.default.createElement("span",{style:{display:"inline-flex",gap:2}},x.default.createElement(Ke,{name:"group",label:"\u5305\u6210\u7EC4",onClick:qr}),x.default.createElement(Ke,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:Mr})):null,x.default.createElement(Al,{draftStore:qe,textBusy:Jn,imgBusy:ne,onSubmit:bn,onStopText:()=>{Ut.current?.abort(),Vt(!1)},onStopImg:()=>{ye.current?.abort()}})))):null))}var y=Zt(require("react"),1);Gn();jr();Hr();function ls(e){return e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(0)} KB`:`${(e/1024/1024).toFixed(2)} MB`:""}function Il(e){return!e||e<0?"":e<1e3?`${e}ms`:`${(e/1e3).toFixed(1)}s`}function El({ratio:e}){let t=fn(e),n=12,r=t>=1?n:Math.max(5,Math.round(n*t)),o=t>=1?Math.max(5,Math.round(n/t)):n;return y.default.createElement("span",{className:"cf-aspect-box",style:{width:r,height:o},"aria-hidden":"true"})}function Vr({storageKey:e,url:t="",alt:n="",preferPreview:r=!0,className:o,style:a,onClick:i}){let c=e?r?Dn(e)||rn(e):rn(e):"",[s,f]=y.default.useState(()=>c||t||"");return y.default.useEffect(()=>{let d=!0;if(!e)return f(t||""),()=>{d=!1};let m=r?Dn(e)||rn(e):rn(e);return m&&f(m),r&&vr(e).then(p=>{d&&p&&f(p)}).catch(()=>{}),vt(e).then(p=>{d&&f(!r&&p?p:v=>v||p||t||"")}).catch(()=>{d&&t&&f(p=>p||t)}),()=>{d=!1}},[e,t,r]),s?y.default.createElement("img",{src:s,alt:n,className:o,style:a,loading:"lazy",decoding:"async",onClick:i}):null}function fs({channels:e,defaults:t,records:n=[],assets:r=[],prompts:o=[],prompt:a,onPrompt:i,onCreateRecord:c,onUpdateRecord:s,onDeleteRecords:f,onSaveAsset:d,onLookupPrompts:m,onSendToCanvas:p,initialRef:v,initialRefs:D,onConsumeRef:T,say:A}){let z=i,K=t?.ratio||"1:1",Y=t?.resolution||"\u81EA\u52A8",I=On(on({resolution:Y,ratio:K,align16:!0}))||{width:1024,height:1024},[O,Z]=y.default.useState(K),[ue,te]=y.default.useState(t?.quality||"\u81EA\u52A8"),[ee,$e]=y.default.useState(Y),[J,k]=y.default.useState(!!t?.transparent),[H,re]=y.default.useState(t?.modelKey||""),[E,ae]=y.default.useState(I.width),[U,ye]=y.default.useState(I.height),[ne,et]=y.default.useState(!0),[Ve,Ot]=y.default.useState(Math.max(1,Math.min(10,t?.count||1))),[bt,Lt]=y.default.useState([]),[St,qe]=y.default.useState(null),[lt,Ye]=y.default.useState([]),[yt,Ze]=y.default.useState(!1),[$,B]=y.default.useState(!1),[se,le]=y.default.useState(!1),[Ue,ke]=y.default.useState(!1),[Ce,Ee]=y.default.useState(null),[Se,Oe]=y.default.useState(null),[at,Xe]=y.default.useState({}),Wt=y.default.useRef(null),Me=y.default.useRef(null),Le=y.default.useRef(new Set),gt=en(e,"image"),tt=wn(e,H)||gt[0]||null,ot=y.default.useCallback((S,V,ge=ne)=>{let R=On(on({resolution:V,ratio:S,align16:ge}));R&&(ae(R.width),ye(R.height))},[ne]),ft=S=>{Z(S),ot(S,ee,ne)},Fe=S=>{$e(S),ot(O,S,ne)};y.default.useEffect(()=>{let S=!0,V=Array.isArray(D)&&D.length?D:v?.storageKey?[{storageKey:v.storageKey,name:"\u6765\u81EA\u753B\u5E03\u7684\u56FE\u7247"}]:[];return V.length?(Promise.all(V.map(async(ge,R)=>{let Ne=await vt(ge.storageKey).catch(()=>"");return Ne?{id:ze("ref"),name:ge.name||`\u53C2\u8003\u56FE ${R+1}`,storageKey:ge.storageKey,url:Ne}:null})).then(ge=>{if(!S)return;let R=ge.filter(Boolean);R.length&&Ye(R),T?.()}).catch(()=>{T?.()}),()=>{S=!1}):()=>{S=!1}},[v?.storageKey,D]);let Re=async S=>{let V=[...S||[]];if(!V.length)return;let ge=[];for(let R of V){if(!/^image\//.test(R.type)){A?.(`\u8DF3\u8FC7\u975E\u56FE\u7247\u6587\u4EF6\uFF1A${R.name}`,"error");continue}let Ne=await $n(R).catch(()=>({width:0,height:0})),_e=wt("ref");await Bt(_e,R,{mimeType:R.type,source:"studio-ref",width:Ne.width,height:Ne.height}),ge.push({id:ze("ref"),name:R.name||"\u53C2\u8003\u56FE",storageKey:_e,url:URL.createObjectURL(R)})}ge.length&&(Ye(R=>[...R,...ge]),A?.(`\u5DF2\u52A0\u5165 ${ge.length} \u5F20\u53C2\u8003\u56FE`))},zt=S=>{Ye(V=>{let ge=V.find(R=>R.id===S);return ge?.url?.startsWith("blob:")&&URL.revokeObjectURL(ge.url),V.filter(R=>R.id!==S)})},Cn=(S,V)=>{Ye(ge=>{let R=S+V;if(R<0||R>=ge.length)return ge;let Ne=[...ge],[_e]=Ne.splice(S,1);return Ne.splice(R,0,_e),Ne})},Sr=()=>{Ye(S=>(S.forEach(V=>{V.url?.startsWith("blob:")&&URL.revokeObjectURL(V.url)}),[]))},Jn=S=>{Re(S.target.files),S.target.value=""},Vt=S=>{S.preventDefault(),Re(S.dataTransfer?.files)},Ut=async()=>{try{let S=await navigator.clipboard.read(),V=[];for(let ge of S){let R=ge.types.find(_e=>_e.startsWith("image/"));if(!R)continue;let Ne=await ge.getType(R);V.push(new File([Ne],"\u526A\u8D34\u677F\u56FE\u7247.png",{type:R}))}if(!V.length){A?.("\u526A\u8D34\u677F\u91CC\u6CA1\u6709\u56FE\u7247","error");return}await Re(V)}catch{A?.("\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u8BFB\u526A\u8D34\u677F\uFF0C\u8BF7\u7528\u300C\u4E0A\u4F20\u300D","error")}},An=async S=>{let V=[];for(let ge of S||[]){if(ge.storageKey){let R=await Lr(ge.storageKey).catch(()=>"");if(R){V.push(R);continue}}if(ge.url?.startsWith("data:")){V.push(ge.url);continue}if(ge.url){let Ne=await(await fetch(ge.url)).blob();V.push(await hr(Ne))}}return V},Gt=(S,V)=>({index:S,status:"done",storageKey:V.storageKey||"",width:V.width||0,height:V.height||0,bytes:V.bytes||0,mimeType:V.mimeType||"image/png",degraded:!!V.degraded,url:V.degraded&&V.url||"",revisedPrompt:V.revisedPrompt||"",error:""}),Tt=()=>{qe(null),z(""),Sr()},Nt=async S=>{if(!S)return;qe(S.id),z(S.prompt||""),S.ratio&&Z(S.ratio),S.resolution&&$e(S.resolution),S.quality&&te(S.quality),typeof S.transparent=="boolean"&&k(S.transparent),S.count&&Ot(Math.max(1,Math.min(10,Number(S.count)||1))),S.modelKey&&re(S.modelKey);let V=On(S.size);if(V&&(ae(V.width),ye(V.height)),Array.isArray(S.refs)&&S.refs.length){let ge=await Promise.all(S.refs.map(async R=>{let Ne=R.storageKey?await vt(R.storageKey).catch(()=>""):R.url||"";return{id:R.id||ze("ref"),name:R.name||"\u53C2\u8003\u56FE",storageKey:R.storageKey||"",url:Ne}}));Ye(ge.filter(R=>R.storageKey||R.url))}else Sr()},un=async()=>{let S=a.trim();if(!S){A?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}if(!tt){A?.("\u5148\u5728\u914D\u7F6E\u91CC\u52A0\u4E00\u4E2A\u6E20\u9053\u5E76\u9009\u597D\u6A21\u578B","error");return}if(!tt.channel?.apiKey){A?.("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key","error");return}if(yt){Me.current?.abort();return}let V=Bn(E,256,4096,ne),ge=Bn(U,256,4096,ne),R=`${V}x${ge}`,Ne=Math.max(1,Math.min(10,Math.round(Number(Ve)||1))),_e=Date.now(),We=ze("r"),Dt=Array.from({length:Ne},(Je,_t)=>({index:_t,status:"pending"})),Kn={id:We,prompt:S,model:tt.label,modelKey:tt.key,ratio:O,size:R,quality:ue,resolution:ee,transparent:J,count:Ne,refs:lt.map(Je=>({id:Je.id,name:Je.name,storageKey:Je.storageKey||""})),slots:Dt,images:[],startedAt:_e,elapsedMs:0,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};c?.(Kn),qe(We),Le.current.add(We),Ze(!0);let qt=new AbortController;Me.current=qt;let In=new Map,gn=(Je,_t)=>{In.set(Je,_t),s?.(We,xt=>{let Pt=(xt.slots||Dt).map(fe=>fe.index===Je?_t:fe);return{...xt,slots:Pt,images:Pt.filter(fe=>fe.status==="done")}})};try{let Je=await An(lt),_t=Je.length>0,xt={size:R,ratio:O,resolution:ee,quality:ue,count:Ne,align16:ne,background:J?"transparent":void 0,outputFormat:J?"png":void 0},{items:Pt,failed:fe,requested:Mt,got:En}=await Un(_t?{capability:"image-edit",channel:tt.channel,model:tt.model?.id||tt.label,prompt:S,params:{...xt,imageDataUrls:Je},signal:qt.signal,onProgress:({stage:hn,index:vn,item:it})=>{hn==="item"&&it&&gn(vn,Gt(vn,it))}}:{capability:"image",channel:tt.channel,model:tt.model?.id||tt.label,prompt:S,params:xt,signal:qt.signal,onProgress:({stage:hn,index:vn,item:it})=>{hn==="item"&&it&&gn(vn,Gt(vn,it))}}),Jt=Date.now()-_e;s?.(We,hn=>{let it=(hn.slots||Dt).map(ct=>({...ct}));Pt.forEach((ct,jn)=>{let Kt=ct.index??jn;Kt>=0&&Kt<it.length&&(it[Kt]=Gt(Kt,ct))}),(fe||[]).forEach((ct,jn)=>{let Kt=typeof ct.index=="number"?ct.index:it.findIndex(Fn=>Fn.status==="pending"),bn=Kt>=0?Kt:Math.min(it.length-1,Pt.length+jn);bn>=0&&it[bn]&&it[bn].status!=="done"&&(it[bn]={index:bn,status:"failed",error:ct.error||"\u751F\u6210\u5931\u8D25"})});for(let ct=0;ct<it.length;ct++)it[ct].status==="pending"&&(it[ct]={index:ct,status:"failed",error:"\u4E0A\u6E38\u672A\u8FD4\u56DE\u8BE5\u5F20\u56FE\u7247"});return{...hn,slots:it,images:it.filter(ct=>ct.status==="done"),elapsedMs:Jt}}),fe?.length?A?.(`${fe.length} \u5F20\u5931\u8D25\uFF1A${fe[0].error}`,"error"):Mt&&En&&En<Mt?A?.(`\u4E0A\u6E38\u53EA\u7ED9\u4E86 ${En}/${Mt} \u5F20`,"error"):A?.(Pt.length>1?`\u5DF2\u751F\u6210 ${Pt.length} \u5F20`:"\u751F\u6210\u5B8C\u6210")}catch(Je){let _t=Nn(Je),xt=_t?"\u5DF2\u53D6\u6D88":Je.message||"\u751F\u6210\u5931\u8D25";_t?A?.("\u5DF2\u53D6\u6D88"):A?.(xt,"error"),s?.(We,Pt=>{let fe=(Pt.slots||Dt).map(Mt=>Mt.status==="pending"?{...Mt,status:"failed",error:xt}:Mt);return{...Pt,slots:fe,images:fe.filter(Mt=>Mt.status==="done"),elapsedMs:Date.now()-_e}})}finally{Le.current.delete(We),Me.current=null,Ze(!1)}},ve=async(S,V)=>{let ge=`${S.id}:${V}`;if(at[ge])return;let R=wn(e,S.modelKey)||tt;if(!R||!R.channel?.apiKey){A?.("\u6CA1\u6709\u53EF\u7528\u7684\u6A21\u578B\u6216\u672A\u586B\u5199 API Key","error");return}Xe(Ne=>({...Ne,[ge]:!0})),Le.current.add(S.id),s?.(S.id,Ne=>({...Ne,slots:(Ne.slots||[]).map(_e=>_e.index===V?{index:V,status:"pending"}:_e)}));try{let Ne=await An(S.refs?.length?S.refs:lt),_e={size:S.size||"1024x1024",ratio:S.ratio||"1:1",resolution:S.resolution||"\u81EA\u52A8",quality:S.quality||"\u81EA\u52A8",count:1,align16:ne,background:S.transparent?"transparent":void 0,outputFormat:S.transparent?"png":void 0},We=await Un(Ne.length?{capability:"image-edit",channel:R.channel,model:R.model?.id||R.label,prompt:S.prompt,params:{..._e,imageDataUrls:Ne}}:{capability:"image",channel:R.channel,model:R.model?.id||R.label,prompt:S.prompt,params:_e}),Dt=We.items?.[0];if(!Dt)throw new Error(We.failed?.[0]?.error||"\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u56FE\u7247");let Kn=Gt(V,Dt);s?.(S.id,qt=>{let In=(qt.slots||[]).map(Je=>Je.index===V?Kn:Je),gn={...qt,slots:In,images:In.filter(Je=>Je.status==="done")};return Ee(Je=>Je&&Je.id===S.id?gn:Je),gn}),A?.("\u91CD\u7ED8\u5B8C\u6210")}catch(Ne){s?.(S.id,_e=>({..._e,slots:(_e.slots||[]).map(We=>We.index===V?{index:V,status:"failed",error:Ne.message||"\u91CD\u8BD5\u5931\u8D25"}:We)})),A?.(Ne.message||"\u91CD\u8BD5\u5931\u8D25","error")}finally{Le.current.delete(S.id),Xe(Ne=>{let _e={...Ne};return delete _e[ge],_e})}},$t=async(S,V)=>{let ge=V?.storageKey;if(!ge){A?.("\u6CA1\u6709\u53EF\u4E0B\u8F7D\u7684\u672C\u5730\u56FE\u7247","error");return}let R=await Or(ge).catch(()=>null);if(!R?.blob){A?.("\u56FE\u7247\u8BFB\u53D6\u5931\u8D25","error");return}let Ne=(R.blob.type?.split("/")[1]||"png").replace("jpeg","jpg"),_e=URL.createObjectURL(R.blob),We=document.createElement("a");We.href=_e,We.download=`${(S.prompt||"studio-image").slice(0,32).replace(/[/\\:*?"<>|]/g,"")}.${Ne}`,We.click(),setTimeout(()=>URL.revokeObjectURL(_e),3e3),A?.("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")},sn=(S,V)=>{if(!V?.storageKey||!d){A?.("\u5F53\u524D\u65E0\u6CD5\u5B58\u4E3A\u8D44\u4EA7","error");return}d({id:ze("a"),kind:"image",title:(S.prompt||"\u5DE5\u4F5C\u53F0\u4F5C\u54C1").slice(0,30),text:S.prompt||"",cover:V.storageKey,tags:["\u5DE5\u4F5C\u53F0"],source:"\u751F\u56FE\u5DE5\u4F5C\u53F0",at:Date.now()}),A?.("\u5DF2\u5B58\u4E3A\u8D44\u4EA7")},ut=async S=>{if(!S?.storageKey){A?.("\u8FD9\u5F20\u56FE\u7F3A\u5C11\u672C\u5730\u526F\u672C","error");return}let V=await vt(S.storageKey).catch(()=>"");Ye(ge=>[...ge,{id:ze("ref"),name:"\u6765\u81EA\u751F\u6210\u7ED3\u679C",storageKey:S.storageKey,url:V}]),A?.("\u5DF2\u8BBE\u4E3A\u53C2\u8003\u56FE")},_n=S=>Lt(V=>V.includes(S)?V.filter(ge=>ge!==S):[...V,S]),mn=y.default.useMemo(()=>(n||[]).filter(S=>S.slots&&S.slots.length>0||S.images&&S.images.length>0||S.url),[n]);return y.default.createElement("div",{className:"cf-page cf-page--studio"},y.default.createElement("div",{className:"cf-page-inner"},se?y.default.createElement(Ma,{prompts:o,onPick:async(S,V={})=>{if(le(!1),z(S.text||S.prompt||""),V.withRefs&&S.referenceImageUrls?.length){A?.(`\u5DF2\u586B\u5165\u300C${S.title||"\u63D0\u793A\u8BCD"}\u300D\uFF0C\u6B63\u5728\u52A0\u8F7D ${S.referenceImageUrls.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let ge=await nr(S.referenceImageUrls,{max:4});if(ge.length){Ye(R=>[...R,...ge.map(Ne=>({id:Ne.id,name:Ne.name,storageKey:Ne.storageKey,url:Ne.url}))]),A?.(`\u5DF2\u52A0\u5165 ${ge.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE`);return}}A?.(`\u5DF2\u586B\u5165\u300C${S.title||"\u63D0\u793A\u8BCD"}\u300D`)},onManage:()=>{le(!1),m?.()},onClose:()=>le(!1)}):null,Ue?y.default.createElement(Dl,{assets:r,onPick:async S=>{let V=await vt(S.cover).catch(()=>"");Ye(ge=>[...ge,{id:ze("ref"),name:S.title||"\u8D44\u4EA7\u56FE\u7247",storageKey:S.cover,url:V}]),ke(!1),A?.("\u5DF2\u52A0\u5165\u53C2\u8003\u56FE")},onClose:()=>ke(!1)}):null,Ce?y.default.createElement(Tl,{record:mn.find(S=>S.id===Ce.id)||Ce,onClose:()=>Ee(null),onSend:S=>p?.(S),onDownload:$t,onSaveAsset:sn,onUseAsRef:ut,onOpenLightbox:(S,V)=>Oe({record:S,index:V}),onRetrySlot:ve,isRunning:S=>Le.current.has(S)}):null,Se?y.default.createElement($l,{record:mn.find(S=>S.id===Se.record.id)||Se.record,initialIndex:Se.index,onClose:()=>Oe(null),onDownload:$t,onSaveAsset:sn,onUseAsRef:ut,onSend:p}):null,y.default.createElement("div",{className:"cf-studio"},y.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},y.default.createElement("div",{className:"cf-card"},y.default.createElement("div",{className:"cf-card-head"},y.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),y.default.createElement("span",{className:"cf-card-count"},n.length)),y.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)",alignContent:"start"}},y.default.createElement("div",{style:{display:"flex",gap:6}},y.default.createElement(G,{size:"sm",icon:"plus",onClick:Tt},"\u65B0\u5EFA"),y.default.createElement(G,{size:"sm",onClick:()=>Lt(n.map(S=>S.id))},"\u5168\u9009"),y.default.createElement(G,{size:"sm",variant:"danger",disabled:!bt.length,onClick:()=>{St&&bt.includes(St)&&qe(null),f?.(bt),Lt([])}},"\u5220\u9664")),n.length===0?y.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):y.default.createElement("div",{className:"cf-record-list"},n.map(S=>y.default.createElement("div",{key:S.id,style:{display:"flex",alignItems:"center",gap:6}},y.default.createElement("input",{type:"checkbox",checked:bt.includes(S.id),onChange:()=>_n(S.id),"aria-label":`\u9009\u62E9 ${S.prompt}`}),y.default.createElement("button",{type:"button",className:`cf-record${St===S.id?" is-active":""}`,style:{flex:1,minWidth:0},onClick:()=>Nt(S)},y.default.createElement("span",{className:"cf-record-prompt"},S.prompt),y.default.createElement("span",{className:"cf-record-meta"},S.model," \xB7 ",S.size," \xB7 ",S.at)))))))),y.default.createElement("div",{className:"cf-studio-col"},y.default.createElement("div",{className:"cf-card"},y.default.createElement("div",{className:"cf-card-head"},y.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),y.default.createElement("div",{className:"cf-card-body cf-form",style:{alignContent:"start"}},y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),y.default.createElement("div",{className:"cf-form-head-actions"},y.default.createElement(G,{size:"sm",icon:"book",onClick:()=>le(!0)},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),y.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:a,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:S=>z(S.target.value)})),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),y.default.createElement("div",{className:"cf-form-head-actions"},y.default.createElement(G,{size:"sm",onClick:()=>ke(!0)},"\u8D44\u4EA7"),y.default.createElement(G,{size:"sm",onClick:Ut},"\u526A\u5207\u677F"),y.default.createElement(G,{size:"sm",icon:"upload",onClick:()=>Wt.current?.click()},"\u4E0A\u4F20"))),y.default.createElement("input",{ref:Wt,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:Jn}),lt.length?y.default.createElement("div",{className:"cf-studio-refs",onDragOver:S=>S.preventDefault(),onDrop:Vt},lt.map((S,V)=>y.default.createElement("div",{key:S.id,className:"cf-studio-ref"},y.default.createElement(Vr,{storageKey:S.storageKey,url:S.url,alt:S.name}),y.default.createElement("div",{className:"cf-studio-ref-meta"},y.default.createElement("span",null,S.name),y.default.createElement("span",{className:"cf-studio-ref-hint"},"\u6709\u53C2\u8003\u56FE\u65F6\u8D70\u300C\u56FE\u7247\u7F16\u8F91\u300D\uFF0C\u4E0D\u662F\u7EAF\u6587\u751F\u56FE\uFF08\u7B2C ",V+1,"/",lt.length," \u5F20\uFF09")),y.default.createElement("div",{className:"cf-studio-ref-actions"},y.default.createElement(Ke,{name:"chevron",label:"\u4E0A\u79FB",disabled:V===0,onClick:()=>Cn(V,-1),style:{transform:"rotate(180deg)"}}),y.default.createElement(Ke,{name:"chevron",label:"\u4E0B\u79FB",disabled:V===lt.length-1,onClick:()=>Cn(V,1)}),y.default.createElement(Ke,{name:"x",label:"\u79FB\u9664\u53C2\u8003\u56FE",onClick:()=>zt(S.id)}))))):y.default.createElement("div",{className:"cf-drop",onDragOver:S=>{S.preventDefault()},onDrop:Vt},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u62D6\u5165\u591A\u5F20\u56FE\u7247")),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),y.default.createElement("div",{style:{position:"relative"}},y.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>B(S=>!S)},y.default.createElement(he,{name:"sparkle",size:13}),y.default.createElement("span",null,tt?tt.label:"\u9009\u62E9\u6A21\u578B"),y.default.createElement(he,{name:"chevron",size:12})),$?y.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},gt.length?gt.map(S=>y.default.createElement("button",{key:S.key,type:"button",className:`cf-menu-item${S.key===(H||gt[0]?.key)?" is-on":""}`,onClick:()=>{re(S.key),B(!1)}},S.label," ",y.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",S.channel.name||S.channel.protocol))):y.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),y.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},y.default.createElement("span",null,"\u900F\u660E\u80CC\u666F\uFF08PNG\uFF09"),y.default.createElement("input",{type:"checkbox",checked:J,onChange:S=>k(S.target.checked)}))),y.default.createElement("div",{className:"cf-chips"},fr.map(S=>y.default.createElement("button",{key:S,type:"button",className:`cf-chip${ue===S?" is-on":""}`,onClick:()=>te(S)},S)))),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("div",{className:"cf-form-head"},y.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),y.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},y.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),y.default.createElement("input",{type:"checkbox",checked:ne,onChange:S=>et(S.target.checked)}))),y.default.createElement("div",{className:"cf-size-row"},y.default.createElement("input",{className:"cf-input cf-input--num",value:E,"aria-label":"\u5BBD",onChange:S=>ae(Number(S.target.value.replace(/\D/g,""))||0)}),y.default.createElement(he,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),y.default.createElement("input",{className:"cf-input cf-input--num",value:U,"aria-label":"\u9AD8",onChange:S=>ye(Number(S.target.value.replace(/\D/g,""))||0)})),y.default.createElement("div",{className:"cf-chips"},zn.map(S=>y.default.createElement("button",{key:S.id,type:"button",className:`cf-chip cf-chip--tag${O===S.id?" is-on":""}`,onClick:()=>ft(S.id)},y.default.createElement(El,{ratio:S.id}),S.label)))),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),y.default.createElement("div",{className:"cf-chips"},Xn.map(S=>y.default.createElement("button",{key:S,type:"button",className:`cf-chip${ee===S?" is-on":""}`,onClick:()=>Fe(S)},S)))),y.default.createElement("div",{className:"cf-form-row"},y.default.createElement("span",{className:"cf-label"},"\u5F20\u6570"),y.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}},y.default.createElement("div",{className:"cf-chips"},[1,2,4].map(S=>y.default.createElement("button",{key:S,type:"button",className:`cf-chip${Ve===S?" is-on":""}`,onClick:()=>Ot(S)},S," \u5F20"))),y.default.createElement("input",{type:"number",min:1,max:10,className:"cf-input cf-input--num",style:{width:64},"aria-label":"\u81EA\u5B9A\u4E49\u751F\u6210\u5F20\u6570",value:Ve,onChange:S=>Ot(Math.max(1,Math.min(10,Number(S.target.value)||1)))}))),y.default.createElement(G,{variant:"primary",icon:yt?"stop":"play",onClick:un,disabled:!yt&&!a.trim()},yt?"\u505C\u6B62\u751F\u6210":"\u5F00\u59CB\u751F\u6210")))),y.default.createElement("div",{className:"cf-studio-col"},y.default.createElement("div",{className:"cf-card"},y.default.createElement("div",{className:"cf-card-head"},y.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),y.default.createElement("span",{className:"cf-card-count"},mn.length)),y.default.createElement("div",{className:"cf-card-body"},mn.length===0?y.default.createElement(Rt,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):y.default.createElement("div",{className:"cf-results"},mn.map(S=>y.default.createElement(zl,{key:S.id,record:S,active:St===S.id,isRunning:Le.current.has(S.id),onOpenGallery:()=>Ee(S),onOpenLightbox:V=>Oe({record:S,index:V}),onSend:()=>p?.(S),onDownload:V=>$t(S,V),onSaveAsset:V=>sn(S,V),onUseAsRef:V=>ut(V),onRetrySlot:V=>ve(S,V)})))))))))}function ds({record:e,total:t,doneCount:n,isRunning:r,onRetryAll:o}){return y.default.createElement("div",{className:"cf-pending-card"},r?y.default.createElement(y.default.Fragment,null,y.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),y.default.createElement("span",null,"\u751F\u6210\u4E2D\u2026 ",n,"/",t),y.default.createElement("span",{style:{fontSize:11,opacity:.8}},e.prompt.slice(0,32))):y.default.createElement(y.default.Fragment,null,y.default.createElement("span",null,"\u4EFB\u52A1\u5DF2\u4E2D\u65AD\uFF08\u5237\u65B0\u524D\u672A\u5B8C\u6210\uFF09"),y.default.createElement(G,{size:"sm",icon:"refresh",onClick:o},"\u91CD\u65B0\u751F\u6210")))}function ps({error:e,label:t,onRetry:n}){return y.default.createElement("div",{className:"cf-failed-card"},y.default.createElement("span",null,t||"\u751F\u6210\u5931\u8D25"),y.default.createElement("span",{className:"cf-failed-err"},e||"\u8BF7\u6C42\u672A\u5B8C\u6210"),n?y.default.createElement(G,{size:"sm",icon:"refresh",onClick:n},"\u91CD\u8BD5"):null)}function zl({record:e,active:t,isRunning:n,onOpenGallery:r,onOpenLightbox:o,onSend:a,onDownload:i,onSaveAsset:c,onUseAsRef:s,onRetrySlot:f}){let d=y.default.useMemo(()=>Array.isArray(e.slots)&&e.slots.length?e.slots:(Array.isArray(e.images)&&e.images.length?e.images:e.url?[{url:e.url,storageKey:e.storageKey||"",width:e.width,height:e.height}]:[]).map((z,K)=>({...z,index:K,status:"done"})),[e]),m=d.filter(A=>A.status==="done"),p=d.filter(A=>A.status==="pending"),v=d.filter(A=>A.status==="failed");if(!m.length){if(p.length)return y.default.createElement(ds,{record:e,total:d.length,doneCount:0,isRunning:n,onRetryAll:()=>f?.(p[0].index)});let A=v[0];return y.default.createElement(ps,{label:d.length>1?`${d.length} \u5F20\u5747\u751F\u6210\u5931\u8D25`:"\u751F\u6210\u5931\u8D25",error:A?.error||"\u4E0A\u6E38\u672A\u8FD4\u56DE\u56FE\u7247",onRetry:A?()=>f?.(A.index):void 0})}let D=m[0],T=m.length>1;return y.default.createElement("div",{className:`cf-result-unit${t?" is-active":""}`},y.default.createElement("figure",{className:`cf-result${T?" cf-result--stack":""}`,title:`${e.prompt}
${e.model} \xB7 ${e.size}${T?` \xB7 ${m.length} \u5F20`:""}`,onClick:()=>T?r?.():o?.(0),style:{cursor:"zoom-in"}},y.default.createElement(Vr,{storageKey:D.storageKey,url:D.url,alt:e.prompt}),T?y.default.createElement("span",{className:"cf-result-badge"},m.length):null,D.degraded?y.default.createElement("span",{className:"cf-result-flag"},"\u8FDC\u7A0B"):null,a?y.default.createElement("button",{type:"button",className:"cf-result-send",title:"\u9001\u5230\u753B\u5E03\uFF0C\u6210\u4E3A\u56FE\u7247\u8282\u70B9","aria-label":"\u9001\u5230\u753B\u5E03",onClick:A=>{A.stopPropagation(),a()}},y.default.createElement(he,{name:"canvas",size:13})):null),y.default.createElement("div",{className:"cf-result-meta-bar"},y.default.createElement("span",{className:"cf-result-meta-text"},D.width&&D.height?`${D.width}\xD7${D.height}`:e.size,D.bytes?` \xB7 ${ls(D.bytes)}`:"",e.elapsedMs?` \xB7 ${Il(e.elapsedMs)}`:""),y.default.createElement("div",{className:"cf-result-meta-actions"},y.default.createElement(Ke,{name:"download",label:"\u4E0B\u8F7D\u539F\u56FE",onClick:()=>i?.(D)}),y.default.createElement(Ke,{name:"folder",label:"\u5B58\u4E3A\u8D44\u4EA7",onClick:()=>c?.(D)}),y.default.createElement(Ke,{name:"image",label:"\u8BBE\u4E3A\u53C2\u8003\u56FE",onClick:()=>s?.(D)}))),p.length||v.length?y.default.createElement("div",{className:"cf-slot-status-strip"},p.map(A=>y.default.createElement("span",{key:`p_${A.index}`,className:"cf-slot-pill"},y.default.createElement("span",{className:"cf-spin","aria-hidden":"true",style:{width:10,height:10}}),"\u7B2C ",A.index+1," \u5F20\u751F\u6210\u4E2D")),v.map(A=>y.default.createElement("button",{key:`f_${A.index}`,type:"button",className:"cf-slot-pill is-failed",title:A.error||"\u70B9\u51FB\u91CD\u8BD5",onClick:()=>f?.(A.index)},"\u7B2C ",A.index+1," \u5F20\u5931\u8D25 \xB7 \u91CD\u8BD5"))):null)}function Tl({record:e,onClose:t,onSend:n,onDownload:r,onSaveAsset:o,onUseAsRef:a,onOpenLightbox:i,onRetrySlot:c,isRunning:s}){let f=Array.isArray(e.slots)&&e.slots.length?e.slots:(e.images||[]).map((v,D)=>({...v,index:D,status:"done"})),d=f.filter(v=>v.status==="done"),m=f.filter(v=>v.status==="failed"),p=f.filter(v=>v.status==="pending");return y.default.createElement(dt,{title:`${d.length} \u5F20 \xB7 ${e.prompt.slice(0,24)}`,onClose:t,footer:y.default.createElement(y.default.Fragment,null,n&&d.length?y.default.createElement(G,{icon:"canvas",onClick:()=>{n(e),t()}},"\u5168\u90E8\u9001\u5230\u753B\u5E03"):null,y.default.createElement(G,{onClick:t},"\u5173\u95ED"))},y.default.createElement("div",{className:"cf-result-gallery"},d.map((v,D)=>y.default.createElement("figure",{key:v.index??D,className:"cf-result-gallery-item"},y.default.createElement(Vr,{storageKey:v.storageKey,url:v.url,alt:`${e.prompt} ${D+1}`,style:{cursor:"zoom-in"},onClick:()=>i?.(e,D)}),y.default.createElement("figcaption",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:4}},y.default.createElement("span",null,v.width&&v.height?`${v.width} \xD7 ${v.height}`:"",v.bytes?` \xB7 ${ls(v.bytes)}`:"",v.degraded?" \xB7 \u8FDC\u7A0B":""),y.default.createElement("span",{style:{display:"inline-flex",gap:2}},y.default.createElement(Ke,{name:"download",label:"\u4E0B\u8F7D",onClick:()=>r?.(e,v)}),y.default.createElement(Ke,{name:"folder",label:"\u5B58\u8D44\u4EA7",onClick:()=>o?.(e,v)}),y.default.createElement(Ke,{name:"image",label:"\u8BBE\u53C2\u8003",onClick:()=>a?.(v)}))))),p.map(v=>y.default.createElement(ds,{key:`p_${v.index}`,record:e,total:f.length,doneCount:d.length,isRunning:s?.(e.id),onRetryAll:()=>c?.(e,v.index)})),m.map(v=>y.default.createElement(ps,{key:`f_${v.index}`,label:`\u7B2C ${v.index+1} \u5F20\u5931\u8D25`,error:v.error,onRetry:()=>c?.(e,v.index)}))))}function $l({record:e,initialIndex:t=0,onClose:n,onDownload:r,onSaveAsset:o,onUseAsRef:a,onSend:i}){let c=y.default.useMemo(()=>(e.slots||e.images||[]).filter(p=>p.status!=="failed"&&p.status!=="pending"&&(p.storageKey||p.url)),[e]),[s,f]=y.default.useState(Math.max(0,Math.min(c.length-1,t))),d=c[s]||c[0]||null;return y.default.useEffect(()=>{let m=p=>{if(p.key==="Escape"){p.preventDefault(),p.stopPropagation(),n();return}c.length>1&&(p.key==="ArrowLeft"||p.key==="ArrowRight")&&(p.preventDefault(),f(v=>(v+(p.key==="ArrowRight"?1:-1)+c.length)%c.length))};return window.addEventListener("keydown",m,!0),()=>window.removeEventListener("keydown",m,!0)},[n,c.length]),d?y.default.createElement("div",{className:"cf-lightbox",style:{position:"fixed",zIndex:"var(--cf-z-modal)"},role:"dialog","aria-modal":"true","aria-label":"\u9AD8\u6E05\u5927\u56FE\u9884\u89C8",onPointerDown:m=>{m.target===m.currentTarget&&n()}},y.default.createElement("figure",{className:"cf-lightbox-figure",style:{"--cf-lb-ratio":fn(e.ratio)}},y.default.createElement(Vr,{storageKey:d.storageKey,url:d.url,alt:e.prompt,preferPreview:!1})),y.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"center"}},c.length>1?y.default.createElement(y.default.Fragment,null,y.default.createElement(G,{size:"sm",onClick:()=>f(m=>(m-1+c.length)%c.length)},"\u4E0A\u4E00\u5F20"),y.default.createElement("span",{className:"cf-lightbox-cap"},s+1," / ",c.length),y.default.createElement(G,{size:"sm",onClick:()=>f(m=>(m+1)%c.length)},"\u4E0B\u4E00\u5F20")):null,y.default.createElement(G,{size:"sm",icon:"download",onClick:()=>r?.(e,d)},"\u4E0B\u8F7D"),y.default.createElement(G,{size:"sm",icon:"folder",onClick:()=>o?.(e,d)},"\u5B58\u4E3A\u8D44\u4EA7"),y.default.createElement(G,{size:"sm",icon:"image",onClick:()=>a?.(d)},"\u8BBE\u4E3A\u53C2\u8003\u56FE"),i?y.default.createElement(G,{size:"sm",icon:"canvas",onClick:()=>{i(e),n()}},"\u9001\u5230\u753B\u5E03"):null),y.default.createElement("figcaption",{className:"cf-lightbox-cap"},d.width&&d.height?`${d.width} \xD7 ${d.height} \xB7 `:"",e.prompt),y.default.createElement("button",{type:"button",className:"cf-lightbox-x",onClick:n,"aria-label":"\u5173\u95ED\u9884\u89C8"},y.default.createElement(he,{name:"close",size:16}))):null}function Dl({assets:e,onPick:t,onClose:n}){let r=y.default.useMemo(()=>(e||[]).filter(o=>o.kind==="image"&&o.cover),[e]);return y.default.createElement(dt,{title:"\u4ECE\u6211\u7684\u8D44\u4EA7\u9009\u62E9\u53C2\u8003\u56FE",onClose:n,footer:y.default.createElement(G,{onClick:n},"\u5173\u95ED")},r.length?y.default.createElement("div",{className:"cf-picker-grid"},r.map(o=>y.default.createElement("button",{key:o.id,type:"button",className:"cf-picker-asset",onClick:()=>t(o)},y.default.createElement(Vr,{storageKey:o.cover,alt:o.title||"\u8D44\u4EA7\u56FE\u7247"}),y.default.createElement("span",null,o.title||"\u8D44\u4EA7\u56FE\u7247")))):y.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u56FE\u7247\u8D44\u4EA7\uFF0C\u5148\u5728\u753B\u5E03\u6216\u5DE5\u4F5C\u53F0\u4FDD\u5B58\u51E0\u5F20\u56FE\u7247\u5230\u8D44\u4EA7\u5E93\u3002"))}var me=Zt(require("react"),1);var Ca=24;function us({prompts:e=[],sources:t=[],onUse:n,onCopy:r,onSaveAsset:o,onEnableBuiltins:a,onBack:i,returnTo:c}){let[s,f]=me.default.useState(""),[d,m]=me.default.useState("\u5168\u90E8"),[p,v]=me.default.useState([]),[D,T]=me.default.useState(Ca),[A,z]=me.default.useState(null),[K,Y]=me.default.useState(!1),I=me.default.useMemo(()=>["\u5168\u90E8",...new Set(e.map(k=>k.category).filter(Boolean))],[e]),O=me.default.useMemo(()=>{let k=d==="\u5168\u90E8"?e:e.filter(H=>H.category===d);return["\u5168\u90E8",...new Set(k.flatMap(H=>H.tags||[]).filter(Boolean))]},[e,d]),Z=me.default.useMemo(()=>{let k=s.trim().toLowerCase();return e.filter(H=>d!=="\u5168\u90E8"&&H.category!==d||p.length&&!p.some(re=>(H.tags||[]).includes(re))?!1:k?[H.title,H.text,H.description,H.category,H.author,...H.tags||[]].filter(Boolean).some(re=>String(re).toLowerCase().includes(k)):!0)},[e,d,p,s]),ue=Z.slice(0,D),te=Z.length>ue.length;me.default.useEffect(()=>{T(Ca)},[s,d,p]);let ee=k=>{if(k==="\u5168\u90E8"){v([]);return}v(H=>H.includes(k)?H.filter(re=>re!==k):[...H,k])},$e=k=>{let H=k.currentTarget;te&&H.scrollTop+H.clientHeight>=H.scrollHeight-180&&T(re=>re+Ca)},J=async()=>{if(!(!a||K)){Y(!0);try{await a()}finally{Y(!1)}}};return me.default.createElement("div",{className:"cf-page",onScroll:$e},me.default.createElement("div",{className:"cf-page-inner"},me.default.createElement("div",{className:"cf-title-center"},me.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),me.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD",Z.length!==e.length?`\uFF08\u5DF2\u7B5B\u9009 ${Z.length} \u6761\uFF09`:""),c&&i?me.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:i},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),me.default.createElement("div",{className:"cf-split"},me.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},me.default.createElement("div",{className:"cf-filter-group"},me.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),me.default.createElement("div",{className:"cf-filter-chips"},I.map(k=>me.default.createElement("button",{key:k,type:"button",className:`cf-chip cf-chip--tag${d===k?" is-on":""}`,onClick:()=>{m(k),v([])}},k)))),me.default.createElement("div",{className:"cf-filter-group"},me.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E",p.length?`\uFF08\u5DF2\u9009 ${p.length}\uFF09`:""),me.default.createElement("div",{className:"cf-filter-chips"},O.slice(0,60).map(k=>{let H=k==="\u5168\u90E8"?p.length===0:p.includes(k);return me.default.createElement("button",{key:k,type:"button",className:`cf-chip cf-chip--tag${H?" is-on":""}`,onClick:()=>ee(k)},k)})))),me.default.createElement("div",null,me.default.createElement("div",{className:"cf-search"},me.default.createElement(he,{name:"search",size:15}),me.default.createElement("input",{className:"cf-input",value:s,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u4F5C\u8005",onChange:k=>f(k.target.value)})),t.length===0?me.default.createElement("div",{className:"cf-source-presets",style:{marginBottom:"var(--cf-sp-4)"}},me.default.createElement("span",null,"\u8FD8\u6CA1\u6709\u914D\u7F6E\u5916\u90E8\u63D0\u793A\u8BCD\u6765\u6E90\uFF0C\u5F53\u524D\u4EC5\u5C55\u793A\u5185\u7F6E\u793A\u4F8B\u3002\u53EF\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\uFF0C\u6216\u4E00\u952E\u542F\u7528 7 \u4E2A\u5B98\u65B9\u6E90\u3002"),a?me.default.createElement(G,{size:"sm",variant:"primary",icon:"refresh",disabled:K,onClick:J},K?"\u62C9\u53D6\u4E2D\u2026":"\u4E00\u952E\u542F\u7528 7 \u4E2A\u5B98\u65B9\u6E90\u5E76\u62C9\u53D6"):null):null,Z.length===0?me.default.createElement(Rt,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:s||d!=="\u5168\u90E8"||p.length?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u5E76\u62C9\u53D6\u6765\u6E90\u3002"}):me.default.createElement(me.default.Fragment,null,me.default.createElement("ul",{className:"cf-prompt-grid"},ue.map(k=>{let H=k.referenceImageUrls?.length||0;return me.default.createElement("li",{key:`${k.sourceId||""}_${k.id}`,className:"cf-prompt-card"},me.default.createElement("div",{className:"cf-prompt-cover",onClick:()=>z(k),title:"\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5\u4E0E\u53C2\u8003\u56FE"},me.default.createElement(qn,{src:k.coverUrl,alt:k.title||"\u63D0\u793A\u8BCD\u5C01\u9762"}),H>0?me.default.createElement("span",{className:"cf-prompt-ref-badge"},"\u53C2\u8003\u56FE\xD7",H):null),me.default.createElement("div",{className:"cf-prompt-body"},me.default.createElement("button",{type:"button",className:"cf-prompt-title",onClick:()=>z(k)},k.title),me.default.createElement("p",{className:"cf-prompt-text",onClick:()=>z(k)},k.description||k.text),me.default.createElement("span",{className:"cf-prompt-tags"},k.category?me.default.createElement("span",{className:"cf-tag"},k.category):null,(k.tags||[]).slice(0,5).map(re=>me.default.createElement("span",{key:re,className:"cf-tag"},re))),me.default.createElement("span",{className:"cf-prompt-card-actions"},me.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>n?.(k,{withRefs:H>0})},H>0?"\u5E26\u53C2\u8003\u56FE\u4F7F\u7528":"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"),r?me.default.createElement(Ke,{name:"copy",label:"\u590D\u5236\u63D0\u793A\u8BCD",onClick:()=>r(k)}):null,o?me.default.createElement(Ke,{name:"folder",label:"\u5B58\u4E3A\u8D44\u4EA7",onClick:()=>o(k)}):null)))})),te?me.default.createElement("div",{className:"cf-more"},me.default.createElement(G,{onClick:()=>T(k=>k+Ca)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",Z.length-ue.length," \u6761\uFF09")):me.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))),A?me.default.createElement(Na,{prompt:A,onClose:()=>z(null),onUse:n,onCopy:r,onSaveAsset:o}):null)}var X=Zt(require("react"),1);Gn();function Pl({asset:e}){let t=e?.kind==="image"?e.cover:"",n=e?.coverUrl||(!t&&/^https?:\/\//i.test(e?.cover||"")?e.cover:""),[r,o]=X.default.useState("");return X.default.useEffect(()=>{let a=!0;return t?(vt(t).then(i=>{a&&o(i||"")}).catch(()=>{a&&o("")}),()=>{a=!1}):(o(""),()=>{a=!1})},[t]),r?X.default.createElement("img",{src:r,alt:e.title||"\u8D44\u4EA7",loading:"lazy"}):n?X.default.createElement(qn,{src:n,alt:e.title||"\u8D44\u4EA7",compactEmpty:!0}):t?X.default.createElement("span",{className:"cf-asset-thumb-empty"},"\u56FE\u7247\u8BFB\u4E0D\u51FA\u6765"):X.default.createElement(he,{name:e.kind==="image"?"image":e.kind==="video"?"play":"text",size:22})}function Bl({asset:e,onClose:t}){let[n,r]=X.default.useState(""),[o,a]=X.default.useState(null);return X.default.useEffect(()=>{let i=!0,c=e?.cover;return c?(vt(c).then(s=>{i&&r(s||"")}).catch(()=>{}),br(c).then(s=>{i&&s?.blob&&a({bytes:s.blob.size,type:s.blob.type})}).catch(()=>{}),()=>{i=!1}):()=>{i=!1}},[e?.cover]),X.default.createElement(dt,{title:e?.title||"\u8D44\u4EA7\u9884\u89C8",onClose:t,footer:X.default.createElement(G,{onClick:t},"\u5173\u95ED")},X.default.createElement("div",{className:"cf-asset-preview"},n?X.default.createElement("img",{src:n,alt:e?.title||""}):X.default.createElement("span",{className:"cf-asset-thumb-empty"},"\u56FE\u7247\u8BFB\u4E0D\u51FA\u6765")),X.default.createElement("div",{className:"cf-asset-preview-meta"},o?`${o.type} \xB7 ${(o.bytes/1024).toFixed(1)} KB`:"",e?.tags?.length?` \xB7 ${e.tags.join(" / ")}`:""))}function Ol(e,t){let n=[];if(Array.isArray(e)?n=e:e&&typeof e=="object"&&(Array.isArray(e.assets)?n=e.assets:Array.isArray(e.state?.assets)?n=e.state.assets:"assets"in e||(n=[e])),!n.length)return[];let r=new Set((t||[]).map(a=>a?.id).filter(Boolean)),o=[];for(let a of n){if(!a||typeof a!="object"||Array.isArray(a))continue;let i=typeof a.title=="string"?a.title.trim():"",c=typeof a.text=="string"?a.text:typeof a.prompt=="string"?a.prompt:"",s=typeof a.cover=="string"?a.cover.trim():"",f=typeof a.coverUrl=="string"?a.coverUrl.trim():"";if(!i&&!c.trim()&&!s&&!f)continue;let d=a.kind==="image"||a.kind==="text"?a.kind:s||f&&!c.trim()?"image":"text",m=typeof a.id=="string"?a.id.trim():"";if(!m||r.has(m))do m=ze("a");while(r.has(m));r.add(m);let p=Array.isArray(a.tags)?[...new Set(a.tags.filter(T=>typeof T=="string"&&T.trim()).map(T=>T.trim()))]:[],v=typeof a.source=="string"&&a.source.trim()?a.source.trim():"\u5BFC\u5165",D={id:m,kind:d,title:i||c.trim().slice(0,24)||"\u672A\u547D\u540D\u8D44\u4EA7",text:c,tags:p,source:v,at:Date.now()};s&&(D.cover=s),f&&(D.coverUrl=f),o.push(D)}return o}function ms({assets:e,onSave:t,onDelete:n,onImport:r,say:o}){let[a,i]=X.default.useState(""),[c,s]=X.default.useState("all"),[f,d]=X.default.useState(null),[m,p]=X.default.useState(null),[v,D]=X.default.useState(null),T=X.default.useRef(null),A=X.default.useRef(e);A.current=e;let z=e.filter(I=>{if(c!=="all"&&I.kind!==c)return!1;if(!a)return!0;let O=a.toLowerCase();return[I.title,I.text,I.source,...I.tags||[]].filter(Boolean).some(Z=>String(Z).toLowerCase().includes(O))});return X.default.createElement("div",{className:"cf-page"},X.default.createElement("div",{className:"cf-page-inner"},X.default.createElement("div",{className:"cf-page-head"},X.default.createElement("div",null,X.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),X.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),X.default.createElement("div",{className:"cf-page-actions"},X.default.createElement(G,{icon:"upload",onClick:()=>T.current?.click()},"\u5BFC\u5165\u8D44\u4EA7"),X.default.createElement("input",{ref:T,type:"file",accept:".json,application/json",hidden:!0,onChange:async I=>{let O=I.target,Z=O.files?.[0];if(Z)try{let ue=JSON.parse(await Z.text()),te=Ol(ue,A.current);if(!te.length){o?.("\u672A\u5728\u6587\u4EF6\u4E2D\u627E\u5230\u6709\u6548\u8D44\u4EA7\u6761\u76EE","error");return}r?r(te):t([...te,...A.current]),o?.(`\u5DF2\u5BFC\u5165 ${te.length} \u6761\u8D44\u4EA7`)}catch{o?.("\u5BFC\u5165\u5931\u8D25\uFF1AJSON \u6587\u4EF6\u683C\u5F0F\u65E0\u6548","error")}finally{O.value=""}}}),X.default.createElement(G,{icon:"download",onClick:()=>{let I=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),O=document.createElement("a");O.href=URL.createObjectURL(I),O.download="my-assets.json",O.click(),setTimeout(()=>URL.revokeObjectURL(O.href),2e3),o?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),X.default.createElement(G,{variant:"primary",icon:"plus",onClick:()=>d({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),X.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},X.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},X.default.createElement("div",{className:"cf-filter-group"},X.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),X.default.createElement("div",{className:"cf-filter-chips"},La.map(I=>X.default.createElement("button",{key:I.id,type:"button",className:`cf-chip cf-chip--tag${c===I.id?" is-on":""}`,onClick:()=>s(I.id)},I.label))))),X.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},X.default.createElement(he,{name:"search",size:15}),X.default.createElement("input",{className:"cf-input",value:a,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:I=>i(I.target.value)}))),z.length===0?X.default.createElement(Rt,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:a||c!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:X.default.createElement(G,{variant:"primary",icon:"plus",onClick:()=>d({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):X.default.createElement("div",{className:"cf-asset-grid"},z.map(I=>X.default.createElement("div",{key:I.id,className:"cf-asset"},X.default.createElement("button",{type:"button",className:"cf-asset-thumb",onClick:()=>{I.kind==="image"&&I.cover&&D(I)},title:I.kind==="image"&&I.cover?"\u70B9\u51FB\u770B\u5927\u56FE":void 0},X.default.createElement(Pl,{asset:I})),X.default.createElement("div",{className:"cf-asset-body"},X.default.createElement("span",{className:"cf-asset-title"},I.title||"\u672A\u547D\u540D\u8D44\u4EA7"),X.default.createElement("span",{className:"cf-asset-meta"},I.source||"\u6765\u6E90\u672A\u6CE8\u660E",I.tags?.length?` \xB7 ${I.tags.join(" / ")}`:""),X.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},X.default.createElement(Ke,{name:"edit",label:"\u7F16\u8F91",onClick:()=>d({...I})}),X.default.createElement(Ke,{name:"trash",label:"\u5220\u9664",onClick:()=>p(I)}))))))),f?X.default.createElement(Ll,{asset:f,onClose:()=>d(null),onSave:I=>{let O=I.id?e.map(Z=>Z.id===I.id?I:Z):[...e,{...I,id:ze("a")}];t(O),d(null),o?.(I.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,v?X.default.createElement(Bl,{asset:v,onClose:()=>D(null)}):null,m?X.default.createElement(dt,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>p(null),footer:X.default.createElement(X.default.Fragment,null,X.default.createElement(G,{onClick:()=>p(null)},"\u53D6\u6D88"),X.default.createElement(G,{variant:"danger",onClick:()=>{n(m.id),p(null),o?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},X.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",m.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function Ll({asset:e,onClose:t,onSave:n}){let[r,o]=X.default.useState({...e,tags:e.tags||[]}),a=(f,d)=>o(m=>({...m,[f]:d})),[i,c]=X.default.useState(""),s=r.title?.trim()&&(r.kind!=="text"||r.text?.trim());return X.default.createElement(dt,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:t,footer:X.default.createElement(X.default.Fragment,null,X.default.createElement(G,{onClick:t},"\u53D6\u6D88"),X.default.createElement(G,{variant:"primary",disabled:!s,onClick:()=>n({...r,title:r.title.trim()})},"\u4FDD\u5B58"))},X.default.createElement("div",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),X.default.createElement("div",{className:"cf-chips"},La.filter(f=>f.id!=="all").map(f=>X.default.createElement("button",{key:f.id,type:"button",className:`cf-chip${r.kind===f.id?" is-on":""}`,onClick:()=>a("kind",f.id)},f.label)))),X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),X.default.createElement("input",{className:"cf-input",value:r.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:f=>a("title",f.target.value)})),r.kind==="text"?X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),X.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:r.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:f=>a("text",f.target.value)})):X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),X.default.createElement("input",{className:"cf-input",value:r.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:f=>a("cover",f.target.value)})),X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),X.default.createElement("input",{className:"cf-input",value:i,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:f=>c(f.target.value),onKeyDown:f=>{if(f.key!=="Enter")return;f.preventDefault();let d=i.trim();d&&(a("tags",[...new Set([...r.tags||[],d])]),c(""))}}),r.tags?.length?X.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},r.tags.map(f=>X.default.createElement("button",{key:f,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>a("tags",r.tags.filter(d=>d!==f)),title:"\u70B9\u51FB\u79FB\u9664"},f," \xD7"))):null),X.default.createElement("label",{className:"cf-field"},X.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),X.default.createElement("input",{className:"cf-input",value:r.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:f=>a("source",f.target.value)})))}var M=Zt(require("react"),1);Hr();Sa();var Ul=3e4;async function Aa(e,{signal:t}={}){if(!e?.baseUrl)throw new Be("\u6E20\u9053\u6CA1\u6709\u586B Base URL",{code:"NO_BASE_URL"});if(!e?.apiKey)throw new Be("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key",{code:"NO_API_KEY"});let n=e.protocol==="gemini",r=await Ln({channel:e,path:n?"v1beta/models":"v1/models",method:"GET",timeoutMs:Ul,signal:t}),o=Array.isArray(r?.data)?r.data:Array.isArray(r?.models)?r.models:Array.isArray(r)?r:[];if(!o.length)throw new Be("\u4E0A\u6E38\u6CA1\u6709\u8FD4\u56DE\u4EFB\u4F55\u6A21\u578B",{code:"NO_MODELS",body:r});return o.map(a=>{let i=typeof a=="string"?a:a?.id||a?.name||"";if(!i)return null;let c=n?String(i).replace(/^models\//,""):i;return{id:c,label:(typeof a=="object"&&(a.displayName||a.display_name||a.name))?.replace(/^models\//,"")||c}}).filter(Boolean)}function kr(e){let t=String(e||"").toLowerCase();return/video|sora|veo|kling|seedance|runway|luma|hailuo|grok-imagine-video|cogvideo|vidu|pika/.test(t)?"video":/tts|speech|audio|voice|whisper|music|suno/.test(t)?"audio":/image|dall|flux|seedream|banana|nanobanana|nano[_-]?banana|imagen|sdxl|stable-diffusion|sd[-_]?\d|midjourney|mj[_-]|gpt-image|grok-imagine|jimeng|ideogram|recraft|kolors|wanx|cogview|hidream|omnigen|hunyuan-image|qwen-image/.test(t)?"image":"text"}kn();Vn();function gs(e){if(!e)return 0;if(typeof e.bytes=="number"&&Number.isFinite(e.bytes))return e.bytes;if(e instanceof Blob)return e.size;if(e.blob instanceof Blob)return e.blob.size;if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return e.byteLength;try{return new TextEncoder().encode(JSON.stringify(e)).byteLength}catch{return 0}}var _l={[pe.appState]:"\u753B\u5E03\u6570\u636E",[pe.imageFiles]:"\u56FE\u7247\u539F\u56FE",[pe.imagePreviews]:"\u9884\u89C8\u7F29\u7565\u56FE",[pe.mediaFiles]:"\u89C6\u9891\u97F3\u9891",[pe.logs]:"\u751F\u6210\u8BB0\u5F55",[pe.meta]:"\u5143\u4FE1\u606F"},Gr=e=>e?e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024**3?`${(e/1024/1024).toFixed(1)} MB`:`${(e/1024**3).toFixed(2)} GB`:"0 B";async function hs(){let e={stores:[],total:0,usage:null,quota:null,unavailable:!1};try{await Fa()}catch(t){return{...e,unavailable:!0,reason:t?.message||"\u5B58\u50A8\u4E0D\u53EF\u7528"}}for(let t of ia){let n=0,r=0;await Ha(t,(o,a)=>{n+=1,r+=gs(a)}).catch(()=>{}),e.stores.push({name:t,label:_l[t]||t,records:n,bytes:r}),e.total+=r}e.stores.sort((t,n)=>n.bytes-t.bytes);try{if(navigator.storage?.estimate){let t=await navigator.storage.estimate();Number.isFinite(t?.usage)&&t.usage>0&&(e.usage=t.usage,e.quota=t.quota??null)}}catch{}return e.usage===null&&(e.usage=e.total),e}function Kl(e){let t=new Set,n=(r,o=0)=>{if(!(!r||typeof r!="object"||o>8)){typeof r.storageKey=="string"&&r.storageKey&&t.add(r.storageKey);for(let a of Object.values(r))Array.isArray(a)?a.forEach(i=>n(i,o+1)):n(a,o+1)}};return n(e),t}async function jl(e,{keepMs:t=168*36e5,now:n=Date.now()}={}){let r=Kl(e),o=[],a=0;for(let[i,c]of[[pe.imageFiles,"\u56FE\u7247"],[pe.imagePreviews,"\u9884\u89C8"],[pe.mediaFiles,"\u5A92\u4F53"]])await Ha(i,(s,f)=>{if(r.has(s))return;let d=f?.at||0;if(d&&n-d<t)return;let m=gs(f);o.push({store:i,label:c,key:s,bytes:m}),a+=m}).catch(()=>{});return{orphans:o,bytes:a}}async function fo(e,{dryRun:t=!0,...n}={}){let r=await jl(e,n);if(t)return{...r,deleted:0};let o=new Map;for(let i of r.orphans)o.has(i.store)||o.set(i.store,[]),o.get(i.store).push(i.key);let a=0;for(let[i,c]of o)a+=await Wn(i,c);return{...r,deleted:a}}var Fl=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t+=1){let n=t;for(let r=0;r<8;r+=1)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function Hl(e){let t=4294967295;for(let n=0;n<e.length;n+=1)t=Fl[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}var po=new TextEncoder;function vs(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):e instanceof Blob?e.arrayBuffer().then(t=>new Uint8Array(t)):typeof e=="string"?po.encode(e):po.encode(String(e))}function Yl(e=new Date){let t=(e.getHours()&31)<<11|(e.getMinutes()&63)<<5|Math.floor(e.getSeconds()/2)&31,n=(e.getFullYear()-1980&127)<<9|(e.getMonth()+1&15)<<5|e.getDate()&31;return{time:t,day:n}}function rt(e,t,n){e.setUint16(t,n,!0)}function Xt(e,t,n){e.setUint32(t,n>>>0,!0)}async function Xl(e,{date:t=new Date}={}){let n=[],{time:r,day:o}=Yl(t);for(let v of e||[]){let D=String(v?.name||"").replace(/^\/+/,"");if(!D)continue;let T=v.data,A=T instanceof Blob?await vs(T):await vs(T),z=po.encode(D),K=Hl(A);n.push({nameBytes:z,data:A,crc:K})}if(!n.length)throw new Error("\u6CA1\u6709\u53EF\u6253\u5305\u7684\u5185\u5BB9");let a=0;for(let v of n)a+=30+v.nameBytes.length+v.data.length;let i=0;for(let v of n)i+=46+v.nameBytes.length;let c=a+i+22,s=new Uint8Array(c),f=new DataView(s.buffer),d=0,m=[];for(let v of n)m.push(d),Xt(f,d,67324752),rt(f,d+4,20),rt(f,d+6,2048),rt(f,d+8,0),rt(f,d+10,r),rt(f,d+12,o),Xt(f,d+14,v.crc),Xt(f,d+18,v.data.length),Xt(f,d+22,v.data.length),rt(f,d+26,v.nameBytes.length),rt(f,d+28,0),d+=30,s.set(v.nameBytes,d),d+=v.nameBytes.length,s.set(v.data,d),d+=v.data.length;let p=d;return n.forEach((v,D)=>{Xt(f,d,33639248),rt(f,d+4,20),rt(f,d+6,20),rt(f,d+8,2048),rt(f,d+10,0),rt(f,d+12,r),rt(f,d+14,o),Xt(f,d+16,v.crc),Xt(f,d+20,v.data.length),Xt(f,d+24,v.data.length),rt(f,d+28,v.nameBytes.length),rt(f,d+30,0),rt(f,d+32,0),rt(f,d+34,0),rt(f,d+36,0),Xt(f,d+38,0),Xt(f,d+42,m[D]),d+=46,s.set(v.nameBytes,d),d+=v.nameBytes.length}),Xt(f,d,101010256),rt(f,d+4,0),rt(f,d+6,0),rt(f,d+8,n.length),rt(f,d+10,n.length),Xt(f,d+12,d-p),Xt(f,d+16,p),rt(f,d+20,0),new Blob([s],{type:"application/zip"})}async function bs(e,{getBlob:t,date:n=new Date}={}){let r=[],o={app:"dsh-chunfeng-image",version:1,exportedAt:new Date(n).toISOString(),canvases:(e?.canvases||[]).map(m=>({id:m.id,name:m.name,nodes:m.nodes?.length||0})),assets:(e?.assets||[]).length,prompts:(e?.prompts||[]).length,files:[]},a={canvases:e?.canvases||[],openCanvasId:e?.openCanvasId??null,grid:e?.grid||"dots"};r.push({name:"canvas.json",data:JSON.stringify(a,null,2)});let i=(e?.channels||[]).map(m=>{let{apiKey:p,...v}=m;return{...v,apiKey:"",hasKey:!!p}});r.push({name:"config.json",data:JSON.stringify({channels:i,defaults:e?.defaults||{},assistantModel:e?.assistantModel||"",promptSources:e?.promptSources||[]},null,2)}),r.push({name:"assets.json",data:JSON.stringify(e?.assets||[],null,2)}),r.push({name:"prompts.json",data:JSON.stringify(e?.prompts||[],null,2)});let c=new Set,s=(m,p=0)=>{if(!(!m||typeof m!="object"||p>6)){typeof m.storageKey=="string"&&m.storageKey&&c.add(m.storageKey);for(let v of Object.values(m))Array.isArray(v)?v.forEach(D=>s(D,p+1)):s(v,p+1)}};s(e?.canvases),s(e?.assets);let f=0;for(let m of c){let p=await t(m).catch(()=>null);if(!p?.size)continue;f+=1;let v=(p.type?.split("/")[1]||"png").replace("jpeg","jpg"),D=`images/${String(f).padStart(4,"0")}.${v}`;r.push({name:D,data:p}),o.files.push({storageKey:m,name:D,bytes:p.size,type:p.type})}return r.push({name:"manifest.json",data:JSON.stringify(o,null,2)}),{blob:await Xl(r,{date:n}),manifest:o,count:r.length}}Vn();kn();var Wl=[{id:"channels",label:"\u6E20\u9053"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"}];function ys({tab:e,onTab:t,channels:n,onChannels:r,defaults:o,onDefaults:a,promptSources:i,onPromptSources:c,say:s,state:f,onPrompts:d,onUsePrompt:m,onCopyPrompt:p,onSavePromptAsset:v,showToolbarLabels:D,onShowToolbarLabels:T,theme:A,onTheme:z}){let[K,Y]=M.default.useState(null),[I,O]=M.default.useState(null),[Z,ue]=M.default.useState({name:"",url:""}),[te,ee]=M.default.useState(""),$e=async U=>{if(!te){if(!U.apiKey){s?.("\u8FD9\u4E2A\u6E20\u9053\u8FD8\u6CA1\u6709\u586B API Key","error");return}ee(U.id);try{let ye=await Aa(U),ne=new Set((U.models||[]).map(Ve=>Ve.id)),et=[...U.models||[],...ye.filter(Ve=>!ne.has(Ve.id)).map(Ve=>({id:Ve.id,label:Ve.label,caps:[kr(Ve.id)],enabled:!0,source:"pulled"}))];r(n.map(Ve=>Ve.id===U.id?{...Ve,models:et}:Ve)),s?.(`\u62C9\u5230 ${ye.length} \u4E2A\u6A21\u578B\uFF0C\u65B0\u589E ${et.length-(U.models?.length||0)} \u4E2A`)}catch(ye){s?.(ye.message||"\u62C9\u53D6\u5931\u8D25","error")}finally{ee("")}}},J=async()=>{if(!te){ee("restore");try{let U=await fa();if(!U?.channels?.length){s?.("\u672C\u673A\u6587\u4EF6\u91CC\u6CA1\u6709\u53EF\u6062\u590D\u7684\u6E20\u9053","error");return}r(U.channels),s?.(`\u5DF2\u4ECE\u672C\u673A\u6587\u4EF6\u6062\u590D ${U.channels.length} \u4E2A\u6E20\u9053`)}catch(U){s?.(U.message||"\u6062\u590D\u5931\u8D25","error")}finally{ee("")}}},k=async U=>{if(!te){if(!U.apiKey){s?.("\u5148\u586B API Key \u518D\u8BCA\u65AD","error");return}ee(U.id);try{let ye=Date.now(),ne=await Aa(U);s?.(`\u8FDE\u901A\u6B63\u5E38\uFF1A${Date.now()-ye}ms\uFF0C\u4E0A\u6E38\u6709 ${ne.length} \u4E2A\u6A21\u578B`)}catch(ye){s?.(`\u8BCA\u65AD\u5931\u8D25\uFF1A${ye.message}`,"error")}finally{ee("")}}},H=()=>{let U={version:1,channels:n,defaults:o,promptSources:i},ye=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),ne=document.createElement("a");ne.href=URL.createObjectURL(ye),ne.download="chunfeng-config.json",ne.click(),setTimeout(()=>URL.revokeObjectURL(ne.href),2e3),s?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")},re=()=>{let U=document.createElement("input");U.type="file",U.accept=".json,application/json",U.onchange=async()=>{let ye=U.files?.[0];if(ye)try{let ne=JSON.parse(await ye.text());Array.isArray(ne.channels)&&r(ne.channels),ne.defaults&&a(ne.defaults),Array.isArray(ne.promptSources)&&c(ne.promptSources),s?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{s?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},U.click()},E=n.some(U=>/chunfengapi\.com/i.test(String(U.baseUrl||""))),ae=()=>{let U=n.find(ye=>/chunfengapi\.com/i.test(String(ye.baseUrl||"")));Y(U?{...U}:_a())};return M.default.createElement("div",{className:"cf-page"},M.default.createElement("div",{className:"cf-page-inner"},M.default.createElement("div",{className:"cf-page-head"},M.default.createElement("div",null,M.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),M.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u9ED8\u8BA4\u53C2\u6570\u4E0E\u672C\u5730\u5B58\u50A8"))),M.default.createElement("div",{className:"cf-config-notice"},M.default.createElement("span",null,"JSON \u6587\u4EF6\u542B\u660E\u6587 API Key\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),M.default.createElement("span",{className:"cf-config-notice-actions"},M.default.createElement(G,{size:"sm",icon:"upload",onClick:re},"\u5BFC\u5165\u914D\u7F6E"),M.default.createElement(G,{size:"sm",icon:"download",onClick:H},"\u5BFC\u51FA\u914D\u7F6E"))),M.default.createElement("div",{className:"cf-tabs",role:"tablist"},Wl.map(U=>M.default.createElement("button",{key:U.id,type:"button",role:"tab","aria-selected":e===U.id,className:`cf-tab${e===U.id?" is-on":""}`,onClick:()=>t(U.id)},U.label))),e==="channels"?M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"cf-section-head"},M.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\u3002"),M.default.createElement("div",{style:{display:"flex",gap:6,flexWrap:"wrap"}},M.default.createElement(G,{onClick:J,disabled:!!te},"\u4ECE\u672C\u673A\u6587\u4EF6\u6062\u590D"),E?null:M.default.createElement(G,{variant:"primary",icon:"plus",onClick:ae},"\u4E00\u952E\u6DFB\u52A0\u6625\u98CE\u6E20\u9053"),M.default.createElement(G,{icon:"plus",onClick:()=>Y(na())},"\u65B0\u589E\u6E20\u9053"))),n.length===0?M.default.createElement(Rt,{icon:"gear",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u53EF\u4E00\u952E\u586B\u5165\u6625\u98CE API \u5B98\u65B9\u9884\u8BBE\u6E20\u9053\uFF08chunfengapi.com\uFF0C\u586B Key \u5373\u53EF\u51FA\u56FE\uFF09\uFF0C\u6216\u624B\u52A8\u65B0\u589E\u4EFB\u610F\u517C\u5BB9\u6E20\u9053\u3002",action:M.default.createElement("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"}},M.default.createElement(G,{variant:"primary",icon:"plus",onClick:ae},"\u4E00\u952E\u6DFB\u52A0\u6625\u98CE\u5B98\u65B9\u6E20\u9053"),M.default.createElement(G,{icon:"plus",onClick:()=>Y(na())},"\u65B0\u589E\u6E20\u9053"))}):M.default.createElement("div",{className:"cf-channel-list"},n.map(U=>M.default.createElement("div",{key:U.id,className:"cf-channel"},M.default.createElement("div",{className:"cf-channel-main"},M.default.createElement("span",{className:"cf-channel-name"},U.name||"\u672A\u547D\u540D\u6E20\u9053"),M.default.createElement("span",{className:"cf-channel-meta"},lr.find(ye=>ye.id===U.protocol)?.label||U.protocol," \xB7 ",U.models.length," \u4E2A\u6A21\u578B"," \xB7 ",U.baseUrl,U.apiKey?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${U.keyHint||U.apiKey.slice(-4)}`:U.keyHint?" \xB7 \u5BC6\u94A5\u9700\u91CD\u586B\uFF08\u53EA\u6709\u672B\u56DB\u4F4D\uFF09":" \xB7 \u672A\u586B\u5BC6\u94A5")),M.default.createElement("span",{className:"cf-channel-actions"},M.default.createElement(Ke,{name:"refresh",label:"\u62C9\u53D6\u6A21\u578B",onClick:()=>$e(U)}),M.default.createElement(Ke,{name:"target",label:"\u8FDE\u901A\u6027\u8BCA\u65AD",onClick:()=>k(U)}),M.default.createElement(Ke,{name:"edit",label:"\u7F16\u8F91",onClick:()=>Y({...U})}),M.default.createElement(Ke,{name:"trash",label:"\u5220\u9664",onClick:()=>O(U)})))))):null,e==="defaults"?M.default.createElement(Gl,{channels:n,defaults:o,onDefaults:a,state:f,say:s,showToolbarLabels:D,onShowToolbarLabels:T,theme:A,onTheme:z}):null,e==="sources"?M.default.createElement(Vl,{promptSources:i,onPromptSources:c,say:s,onPrompts:d,onUsePrompt:m,onCopyPrompt:p,onSavePromptAsset:v}):null),K?M.default.createElement(Jl,{channel:K,isNew:!n.some(U=>U.id===K.id),onClose:()=>Y(null),onSave:U=>{let ye=n.some(ne=>ne.id===U.id);if(r(ye?n.map(ne=>ne.id===U.id?U:ne):[...n,U]),!o?.image?.modelKey&&U.enabled!==!1){let ne=(U.models||[]).find(et=>et.enabled&&(et.caps||[]).includes("image"));ne&&a?.({...o,image:{...o?.image||{},modelKey:Ka(U.id,ne.id)}})}Y(null),s?.(ye?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,I?M.default.createElement(dt,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>O(null),footer:M.default.createElement(M.default.Fragment,null,M.default.createElement(G,{onClick:()=>O(null)},"\u53D6\u6D88"),M.default.createElement(G,{variant:"danger",onClick:()=>{r(n.filter(U=>U.id!==I.id)),O(null),s?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},M.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",I.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",I.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function Vl({promptSources:e=[],onPromptSources:t,say:n,onPrompts:r,onUsePrompt:o,onCopyPrompt:a,onSavePromptAsset:i}){let[c,s]=M.default.useState({name:"",url:""}),[f,d]=M.default.useState(!1),[m,p]=M.default.useState(""),[v,D]=M.default.useState([]),[T,A]=M.default.useState(null),z=M.default.useRef(null),K=M.default.useMemo(()=>an(),[f,m,e]),Y=gi(e,v,K),I=new Set(e.map(E=>Yt(E).url)),O=Ur.filter(E=>!I.has(E.url)),Z=e.filter(E=>E&&E.url&&E.enabled!==!1),ue=Z.filter((E,ae)=>Y.find(ye=>ye.id===E.id||ye.url===Yt(E).url)?.ok===!1||Ja(E,K)),te=async(E,{onlyPending:ae=!1}={})=>{if(!(E||[]).filter(ne=>ne&&ne.url&&ne.enabled!==!1).length){n?.("\u5148\u6DFB\u52A0\u5E76\u542F\u7528\u81F3\u5C11\u4E00\u4E2A\u6765\u6E90","error");return}if(f){z.current?.abort();return}let ye=new AbortController;z.current=ye,d(!0),ae||D([]);try{let ne=await ba(E,{signal:ye.signal,onlyMissingOrFailed:ae,onResult:(bt,Lt)=>{D(St=>[...St.filter(qe=>qe.url!==bt.url&&qe.id!==bt.id),bt]),bt.ok&&r?.(void 0,Lt)}});if(ae||D(ne.results),r?.(ne.prompts,ne.cache),ne.results.length===0&&ne.skipped>0){n?.(`\u5168\u90E8 ${ne.skipped} \u4E2A\u6765\u6E90\u5747\u5DF2\u6210\u529F\u7F13\u5B58\uFF0C\u65E0\u9700\u91CD\u590D\u62C9\u53D6`);return}let et=ne.results.filter(bt=>bt.ok).length,Ve=ne.results.length-et,Ot=ne.skipped>0?`\uFF08\u8DF3\u8FC7 ${ne.skipped} \u4E2A\u5DF2\u7F13\u5B58\uFF09`:"";Ve===0?n?.(`\u5DF2\u4ECE ${et} \u4E2A\u6765\u6E90\u62C9\u5230 ${ne.prompts.length} \u6761\u63D0\u793A\u8BCD${Ot}`):n?.(`\u672C\u6B21 ${et} \u6210\u529F / ${Ve} \u5931\u8D25${Ot}\uFF0C\u5171 ${ne.prompts.length} \u6761\u53EF\u7528`,"error")}catch(ne){n?.(ne.message||"\u62C9\u53D6\u5931\u8D25","error")}finally{z.current=null,d(!1)}},ee=async E=>{if(!(f||m)){p(E.id);try{let{result:ae,cache:U}=await mi(E);D(ye=>[...ye.filter(ne=>ne.url!==ae.url&&ne.id!==ae.id),ae]),ae.ok?(r?.(void 0,U),n?.(`\u5DF2\u4ECE\u300C${ae.name}\u300D\u62C9\u5230 ${ae.items.length} \u6761`)):n?.(`\u62C9\u53D6\u5931\u8D25\uFF1A${ae.error||"\u672A\u77E5\u539F\u56E0"}`,"error")}catch(ae){n?.(ae.message||"\u62C9\u53D6\u5931\u8D25","error")}finally{p("")}}},$e=async()=>{if(!O.length)return;let E=[...e,...O];t?.(E),await te(E,{onlyPending:!0})},J=E=>{let ae=e.map(U=>U.id===E.id?{...U,enabled:U.enabled===!1}:U);t?.(ae)},k=E=>{if(!E)return"";let ae=new Date(E),U=Date.now()-E;return U<6e4?"\u521A\u521A":U<36e5?`${Math.floor(U/6e4)} \u5206\u949F\u524D`:U<864e5?`${Math.floor(U/36e5)} \u5C0F\u65F6\u524D`:ae.toLocaleDateString("zh-CN")},H=T?Yt(T):null,re=H?K[H.url]?.items||K[T.url]?.items||K[H.id]?.items||[]:[];return M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"cf-section-head"},M.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B JSON \u6765\u6E90\u62C9\u53D6\uFF0860 \u79D2\u8D85\u65F6\u3001\u81EA\u52A8\u5E76\u53D1\u5207\u6362 jsDelivr \u955C\u50CF\uFF0C\u5E76\u652F\u6301\u53EA\u91CD\u8BD5\u5931\u8D25\u9879\uFF09\u3002"),M.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"var(--cf-sp-2)",flexShrink:0}},!f&&ue.length>0&&ue.length<Z.length?M.default.createElement(G,{variant:"primary",icon:"refresh",onClick:()=>te(e,{onlyPending:!0})},"\u4EC5\u62C9\u53D6\u672A\u6210\u529F (",ue.length,")"):null,M.default.createElement(G,{icon:f?"stop":"refresh",onClick:()=>te(e)},f?"\u505C\u6B62":"\u62C9\u53D6\u5168\u90E8"))),M.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},M.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},M.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:c.name,onChange:E=>s(ae=>({...ae,name:E.target.value}))}),M.default.createElement("input",{className:"cf-input",placeholder:"https://example.com/prompts.json",value:c.url,onChange:E=>s(ae=>({...ae,url:E.target.value}))}),M.default.createElement(G,{variant:"primary",disabled:!c.url.trim(),onClick:()=>{let E=Yt({id:ze("src"),name:c.name.trim(),url:c.url.trim()});t([...e,{id:E.id,name:E.name,url:E.url,fallbackUrl:E.fallbackUrl,homepage:E.homepage,enabled:!0,builtIn:E.builtIn}]),s({name:"",url:""}),n?.(E.convertedFromHomepage||E.convertedFromBlob?"\u6765\u6E90\u5DF2\u6DFB\u52A0\uFF08\u5DF2\u81EA\u52A8\u8F6C\u6362\u4E3A JSON \u76F4\u94FE\uFF09":"\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),O.length>0?M.default.createElement("div",{className:"cf-source-presets"},M.default.createElement("span",null,"\u8FD8\u6709 ",O.length," \u4E2A\u5B98\u65B9\u63D0\u793A\u8BCD\u6E90\u672A\u6DFB\u52A0\uFF08\u5305\u542B\u5C01\u9762\u56FE\u4E0E\u914D\u5957\u53C2\u8003\u56FE\uFF0C\u5171\u5343\u4F59\u6761\uFF09\u3002"),M.default.createElement(G,{size:"sm",icon:"plus",disabled:f,onClick:$e},"\u4E00\u952E\u6DFB\u52A0\u5E76\u62C9\u53D6 ",O.length," \u4E2A\u5B98\u65B9\u6765\u6E90")):null,e.length===0?M.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002\u70B9\u4E0A\u65B9\u6309\u94AE\u5373\u53EF\u4E00\u952E\u542F\u7528\u5168\u90E8\u5B98\u65B9\u6765\u6E90\u3002"):M.default.createElement("div",{style:{display:"grid",gap:2}},e.map((E,ae)=>{let U=Y[ae],ye=E.enabled===!1;return M.default.createElement("div",{key:E.id,style:{padding:"10px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},M.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},M.default.createElement("input",{type:"checkbox",checked:!ye,onChange:()=>J(E),"aria-label":`\u542F\u7528 ${E.name}`,style:{accentColor:"var(--cf-accent)"}}),M.default.createElement("span",{style:{fontSize:13}},E.name),E.builtIn?M.default.createElement("span",{className:"cf-tag"},"\u5B98\u65B9"):null,M.default.createElement("span",{style:{fontSize:"var(--cf-fs-11)",padding:"1px 6px",borderRadius:"var(--cf-r-pill)",color:ye?"var(--cf-caption)":U.ok===!0?"var(--cf-success)":U.ok===!1?"var(--cf-danger)":"var(--cf-caption)",boxShadow:"inset 0 0 0 var(--cf-hair) currentColor"}},ye?"\u5DF2\u505C\u7528":U.ok===!0?"\u6210\u529F":U.ok===!1?"\u5931\u8D25":U.count?"\u7F13\u5B58":"\u672A\u62C9\u53D6"),M.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:4,marginInlineStart:"auto"}},M.default.createElement(G,{size:"sm",onClick:()=>A(E)},"\u67E5\u770B"),M.default.createElement(G,{size:"sm",icon:"refresh",disabled:f||m===E.id||ye,onClick:()=>ee(E)},m===E.id?"\u62C9\u53D6\u4E2D":"\u62C9\u53D6"),M.default.createElement(Ke,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>t(e.filter(ne=>ne.id!==E.id))}))),M.default.createElement("div",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginTop:2}},U.url||E.url),M.default.createElement("div",{style:{fontSize:12,color:U.ok===!1?"var(--cf-danger)":"var(--cf-muted)",marginTop:2}},U.ok===!1?`\u5931\u8D25\uFF1A${U.error||"\u672A\u77E5\u539F\u56E0"}`:U.count?`${U.count} \u6761 \xB7 ${k(U.at)}${U.ms?` \xB7 ${U.ms}ms`:""}`:"\u8FD8\u6CA1\u6709\u62C9\u53D6"))}))),T?M.default.createElement(os,{source:T,items:re,busy:m===T.id,onRefresh:()=>ee(T),onUse:o,onCopy:a,onSaveAsset:i,onClose:()=>A(null)}):null)}function Gl({channels:e,defaults:t,onDefaults:n,state:r,say:o,showToolbarLabels:a,onShowToolbarLabels:i,theme:c="system",onTheme:s}){let f=en(e,"image"),d=m=>n({...t,image:{...t.image,...m}});return M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"cf-section-head"},M.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),M.default.createElement("div",{className:"cf-defaults"},M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),M.default.createElement("select",{className:"cf-input",value:t.image.modelKey||"",onChange:m=>d({modelKey:m.target.value})},M.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),f.map(m=>M.default.createElement("option",{key:m.key,value:m.key},m.label," \xB7 ",m.channel.name||m.channel.protocol))),f.length===0?M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),M.default.createElement("div",{className:"cf-chips"},zn.map(m=>M.default.createElement("button",{key:m.id,type:"button",className:`cf-chip${t.image.ratio===m.id?" is-on":""}`,onClick:()=>d({ratio:m.id})},m.label)))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),M.default.createElement("div",{className:"cf-chips"},fr.map(m=>M.default.createElement("button",{key:m,type:"button",className:`cf-chip${t.image.quality===m?" is-on":""}`,onClick:()=>d({quality:m})},m)))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),M.default.createElement("div",{className:"cf-chips"},Xn.map(m=>M.default.createElement("button",{key:m,type:"button",className:`cf-chip${t.image.resolution===m?" is-on":""}`,onClick:()=>d({resolution:m})},m)))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),M.default.createElement("div",{className:"cf-chips"},[1,2,4].map(m=>M.default.createElement("button",{key:m,type:"button",className:`cf-chip${t.image.count===m?" is-on":""}`,onClick:()=>d({count:m})},m," \u5F20"))))),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5DE5\u5177\u6761"),M.default.createElement("div",{className:"cf-chips"},M.default.createElement("button",{type:"button",className:`cf-chip${a?"":" is-on"}`,onClick:()=>i?.(!1)},"\u53EA\u663E\u793A\u56FE\u6807"),M.default.createElement("button",{type:"button",className:`cf-chip${a?" is-on":""}`,onClick:()=>i?.(!0)},"\u663E\u793A\u6587\u5B57")),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u9F20\u6807\u60AC\u505C\u5728\u753B\u5E03\u91CC\u7684\u56FE\u7247\u8282\u70B9\u4E0A\uFF0C\u4E0A\u65B9\u4F1A\u51FA\u73B0\u4E00\u6392\u64CD\u4F5C\u6309\u94AE\u3002")),M.default.createElement("div",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u5916\u89C2\u4E3B\u9898"),M.default.createElement("div",{className:"cf-chips"},[{id:"system",label:"\u8DDF\u968F\u7CFB\u7EDF"},{id:"light",label:"\u660E\u4EAE"},{id:"dark",label:"\u6697\u9ED1"}].map(m=>M.default.createElement("button",{key:m.id,type:"button",className:`cf-chip${c===m.id?" is-on":""}`,onClick:()=>s?.(m.id)},m.label)))),M.default.createElement(ql,{state:r,say:o}))}function ql({state:e,say:t}){let[n,r]=M.default.useState(null),[o,a]=M.default.useState(!1),[i,c]=M.default.useState(!1),s=M.default.useCallback(()=>{hs().then(r).catch(v=>r({unavailable:!0,reason:v.message}))},[]);M.default.useEffect(s,[s]);let f=async()=>{if(!i){c(!0);try{window.__CF_STORAGE__?.flush?.(),await new Promise(Y=>setTimeout(Y,120));let{blob:v,manifest:D,count:T}=await bs(e||{},{getBlob:Y=>nt(pe.imageFiles,Y).then(I=>I?.blob||null)}),A=URL.createObjectURL(v),z=document.createElement("a"),K=new Date().toISOString().slice(0,10);z.href=A,z.download=`\u6625\u98CE\u753B\u5E03\u5907\u4EFD-${K}.zip`,z.click(),setTimeout(()=>URL.revokeObjectURL(A),4e3),t?.(`\u5DF2\u5BFC\u51FA\u5907\u4EFD\uFF1A${T} \u4E2A\u6587\u4EF6\uFF0C${(v.size/1024/1024).toFixed(1)} MB\uFF0C\u542B ${D.files.length} \u5F20\u56FE`)}catch(v){t?.(`\u5BFC\u51FA\u5931\u8D25\uFF1A${v.message}`,"error")}finally{c(!1)}}},d=async()=>{if(!o){a(!0);try{let v=await fo(e||{},{dryRun:!0});if(!v.orphans.length){t?.("\u6CA1\u6709\u53EF\u6E05\u7406\u7684\u5B64\u513F\u6587\u4EF6");return}if(!window.confirm(`\u5C06\u5220\u9664 ${v.orphans.length} \u4E2A\u672A\u88AB\u5F15\u7528\u7684\u6587\u4EF6\uFF0C\u5171 ${Gr(v.bytes)}\u3002\u7EE7\u7EED\uFF1F`))return;let T=await fo(e||{},{dryRun:!1});t?.(`\u5DF2\u6E05\u7406 ${T.deleted} \u4E2A\u6587\u4EF6\uFF0C\u91CA\u653E ${Gr(T.bytes)}`),s()}catch(v){t?.(`\u6E05\u7406\u5931\u8D25\uFF1A${v.message}`,"error")}finally{a(!1)}}};if(!n)return null;if(n.unavailable)return M.default.createElement("div",{className:"cf-field",style:{marginTop:"var(--cf-sp-5)"}},M.default.createElement("span",{className:"cf-label"},"\u672C\u5730\u5B58\u50A8"),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 IndexedDB\uFF1A",n.reason));let m=n.quota?Math.min(100,n.usage/n.quota*100):null,p=n.stores.filter(v=>v.bytes>0).map(v=>`${v.label} ${Gr(v.bytes)}`);return M.default.createElement("div",{className:"cf-field",style:{marginTop:"var(--cf-sp-5)",paddingTop:"var(--cf-sp-4)",borderTop:"var(--cf-hair) solid var(--cf-line)"}},M.default.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:"var(--cf-sp-3)",flexWrap:"wrap"}},M.default.createElement("span",{className:"cf-label"},"\u672C\u5730\u5B58\u50A8"),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)"}},"\u5DF2\u7528 ",Gr(n.usage),p.length?` \xB7 ${p.join(" \xB7 ")}`:""),m!==null?M.default.createElement("span",{style:{marginInlineStart:"auto",fontSize:12,color:m>80?"var(--cf-danger)":"var(--cf-caption)"}},"\u914D\u989D ",m.toFixed(1),"%"):null),M.default.createElement("div",{style:{display:"flex",gap:"var(--cf-sp-2)",marginTop:"var(--cf-sp-2)",flexWrap:"wrap"}},M.default.createElement(G,{size:"sm",icon:"download",disabled:i,onClick:f},i?"\u6253\u5305\u4E2D\u2026":"\u5BFC\u51FA\u5907\u4EFD\uFF08ZIP\uFF09"),M.default.createElement(G,{size:"sm",icon:"trash",disabled:o,onClick:d},"\u6E05\u7406\u672A\u5F15\u7528\u6587\u4EF6"),M.default.createElement(G,{size:"sm",onClick:s},"\u5237\u65B0")))}function Jl({channel:e,isNew:t,onClose:n,onSave:r,say:o}){let[a,i]=M.default.useState({...e}),[c,s]=M.default.useState(""),[f,d]=M.default.useState(""),m=(k,H)=>i(re=>({...re,[k]:H})),[p,v]=M.default.useState([]),[D,T]=M.default.useState(!1),[A,z]=M.default.useState(""),[K,Y]=M.default.useState(""),I=()=>c.trim()||a.apiKey||"",O=async()=>{if(!D){if(!String(a.baseUrl||"").trim()){z("\u5148\u586B Base URL");return}if(!I()){z("\u5148\u586B API Key");return}T(!0),z("");try{let k=await Aa({...a,apiKey:I()});v(k);let H=new Set(a.models.map(E=>E.id)),re=k.filter(E=>!H.has(E.id)).map(E=>({id:E.id,label:E.label,caps:[kr(E.id)],enabled:!0,source:"pulled"}));re.length&&m("models",[...a.models,...re]),z(`\u4E0A\u6E38\u8FD4\u56DE ${k.length} \u4E2A\u6A21\u578B${re.length?`\uFF0C\u65B0\u589E ${re.length} \u4E2A`:"\uFF0C\u6CA1\u6709\u65B0\u6A21\u578B"}`)}catch(k){z(k.message||"\u62C9\u53D6\u5931\u8D25")}finally{T(!1)}}},Z=k=>{if(z(""),a.models.find(E=>E.id===k)){m("models",a.models.map(E=>E.id===k?{...E,enabled:!E.enabled}:E));return}let re=p.find(E=>E.id===k);m("models",[...a.models,{id:k,label:re?.label||k,caps:[kr(k)],enabled:!0,source:"pulled"}])},ue=M.default.useMemo(()=>{let k=[],H=new Set;for(let re of a.models)H.has(re.id)||(H.add(re.id),k.push(re.id));for(let re of p)H.has(re.id)||(H.add(re.id),k.push(re.id));return k.map(re=>{let E=a.models.find(U=>U.id===re),ae=p.find(U=>U.id===re);return{id:re,label:E?.label||ae?.label||re,caps:E?.caps||[],enabled:!!E?.enabled,inChannel:!!E,upstream:!!ae,source:E?.source||"pulled"}})},[a.models,p]),te=K.trim()?ue.filter(k=>k.id.toLowerCase().includes(K.trim().toLowerCase())):ue,ee=()=>{let k=f.trim();if(k){if(a.models.some(H=>H.id===k)){d("");return}m("models",[...a.models,{id:k,label:k,caps:[kr(k)],enabled:!0,source:"manual"}]),d("")}},$e=(k,H)=>{m("models",a.models.map(re=>{if(re.id!==k)return re;let E=re.caps||[];return{...re,caps:E.includes(H)?E.filter(ae=>ae!==H):[...E,H]}}))},J=/chunfengapi\.com/i.test(String(a.baseUrl||""));return M.default.createElement(dt,{title:t?"\u65B0\u589E\u6E20\u9053":"\u7F16\u8F91\u6E20\u9053",wide:!0,onClose:n,footer:M.default.createElement(M.default.Fragment,null,M.default.createElement(G,{onClick:n},"\u53D6\u6D88"),M.default.createElement(G,{variant:"primary",disabled:!a.baseUrl.trim(),onClick:()=>{let k=c.trim()||a.apiKey||"";r({...a,apiKey:k,keyHint:k?k.slice(-4):"",hasKey:!!k})}},"\u4FDD\u5B58"))},J?M.default.createElement("div",{className:"cf-source-presets"},M.default.createElement("span",null,"\u5DF2\u586B\u5165\u6625\u98CE API\uFF08chunfengapi.com\uFF09\u5B98\u65B9\u9884\u8BBE\u5730\u5740\uFF0C\u5728\u4E0B\u65B9\u7C98\u8D34 API Key \u70B9\u4FDD\u5B58\u5373\u53EF\u51FA\u56FE\uFF08\u4E5F\u53EF\u70B9\u300C\u62C9\u53D6\u6A21\u578B\u300D\u540C\u6B65\u5168\u91CF\u5217\u8868\uFF09\u3002")):M.default.createElement("div",{className:"cf-source-presets"},M.default.createElement("span",null,"\u5B98\u65B9\u63A8\u8350\u9884\u8BBE\uFF1A\u4E00\u952E\u586B\u5165\u6625\u98CE API\uFF08chunfengapi.com\uFF09\u63A5\u53E3\u5730\u5740\u4E0E 5 \u6B3E\u4E3B\u529B\u751F\u56FE\u6A21\u578B\uFF0C\u4EC5\u9700\u7C98\u8D34 API Key\u3002"),M.default.createElement(G,{size:"sm",icon:"plus",onClick:()=>{i(k=>_a({...k,name:k.name?.trim()?k.name:""})),z("\u5DF2\u586B\u5165\u6625\u98CE API\uFF08chunfengapi.com\uFF09\u9884\u8BBE\uFF0C\u7C98\u8D34 API Key \u540E\u70B9\u4FDD\u5B58\u5373\u53EF\u51FA\u56FE\uFF0C\u4E5F\u53EF\u70B9\u300C\u62C9\u53D6\u6A21\u578B\u300D\u540C\u6B65\u5168\u91CF\u5217\u8868\u3002")}},"\u4E00\u952E\u586B\u5165\u6625\u98CE\u6E20\u9053")),M.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),M.default.createElement("input",{className:"cf-input",value:a.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:k=>m("name",k.target.value)})),M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),M.default.createElement("select",{className:"cf-input",value:a.protocol,onChange:k=>{let H=lr.find(re=>re.id===k.target.value);m("protocol",k.target.value),H&&m("baseUrl",H.baseUrl)}},lr.map(k=>M.default.createElement("option",{key:k.id,value:k.id},k.label))))),M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),M.default.createElement("input",{className:"cf-input",value:a.baseUrl,placeholder:"https://api.example.com/v1",onChange:k=>m("baseUrl",k.target.value)})),M.default.createElement("label",{className:"cf-field"},M.default.createElement("span",{className:"cf-label"},"API Key",a.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${a.keyHint}\uFF09`:""),M.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:c,placeholder:a.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:k=>s(k.target.value)}),M.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),M.default.createElement("div",{className:"cf-field"},M.default.createElement("div",{className:"cf-form-head"},M.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),M.default.createElement("div",{className:"cf-form-head-actions"},M.default.createElement(G,{size:"sm",icon:"refresh",onClick:O,disabled:D},D?"\u62C9\u53D6\u4E2D\u2026":"\u62C9\u53D6\u6A21\u578B"))),M.default.createElement("p",{className:"cf-model-note"},A||(ue.length?`\u5171 ${ue.length} \u4E2A\uFF0C\u5DF2\u542F\u7528 ${ue.filter(k=>k.enabled).length} \u4E2A`:"\u586B\u597D Base URL \u548C API Key\uFF0C\u70B9\u300C\u62C9\u53D6\u6A21\u578B\u300D\u4ECE\u4E0A\u6E38\u53D6\u5217\u8868\uFF1B\u4E5F\u53EF\u4EE5\u624B\u52A8\u6DFB\u52A0\u3002")),ue.length>8?M.default.createElement("input",{className:"cf-input",value:K,placeholder:"\u7B5B\u9009\u6A21\u578B\u2026",onChange:k=>Y(k.target.value),style:{marginBottom:6}}):null,te.length===0?null:M.default.createElement("div",{className:"cf-model-list"},te.map(k=>M.default.createElement("div",{key:k.id,className:`cf-model-row${k.enabled?" is-on":""}`},M.default.createElement("input",{type:"checkbox",checked:k.enabled,onChange:()=>Z(k.id),"aria-label":`\u542F\u7528 ${k.id}`}),M.default.createElement("span",{className:"cf-model-name",title:k.id},k.label||k.id),M.default.createElement("span",{className:"cf-model-tags"},k.inChannel?ta.map(H=>M.default.createElement("button",{key:H.id,type:"button",className:`cf-chip cf-chip--tag${(k.caps||[]).includes(H.id)?" is-on":""}`,onClick:()=>$e(k.id,H.id),title:`\u5207\u6362\u300C${H.label}\u300D\u80FD\u529B`},H.label)):M.default.createElement("span",{className:"cf-model-guess"},ta.find(H=>H.id===kr(k.id))?.label||"\u672A\u6807\u6CE8")),M.default.createElement("span",{className:"cf-model-src",title:k.upstream?"\u4E0A\u6E38\u8FD4\u56DE":k.source==="preset"?"\u5B98\u65B9\u9884\u8BBE":"\u624B\u52A8\u6DFB\u52A0"},k.upstream?"\u4E0A\u6E38":k.source==="preset"?"\u9884\u8BBE":"\u624B\u52A8"),k.inChannel?M.default.createElement(Ke,{name:"trash",label:`\u79FB\u9664 ${k.id}`,onClick:()=>m("models",a.models.filter(H=>H.id!==k.id))}):M.default.createElement("span",{className:"cf-model-hold"})))),M.default.createElement("div",{style:{display:"flex",gap:6,marginTop:8}},M.default.createElement("input",{className:"cf-input",value:f,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:k=>d(k.target.value),onKeyDown:k=>{k.key==="Enter"&&(k.preventDefault(),ee())}}),M.default.createElement(G,{onClick:ee,disabled:!f.trim()},"\u6DFB\u52A0"))),M.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u52FE\u9009\u5373\u542F\u7528\uFF1B\u53D6\u6D88\u52FE\u9009\u4F1A\u4FDD\u7559\u8FD9\u4E2A\u6A21\u578B\uFF08\u8FDE\u540C\u80FD\u529B\u6807\u7B7E\uFF09\uFF0C\u53EA\u662F\u4E0D\u53C2\u4E0E\u751F\u6210\u3002 \u70B9\u80FD\u529B\u5C0F\u6807\u7B7E\u53EF\u4EE5\u6539\u5224\u5B9A\u2014\u2014\u731C\u9519\u65F6\u5728\u8FD9\u91CC\u6539\u3002"))}var Up=ht.legacyState,Ql=[{id:"canvas",label:"\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD",icon:"book"},{id:"assets",label:"\u8D44\u4EA7",icon:"folder"}];function Zl(){let e=$r();return e.canvases=[{...Tr("\u9713\u8679\u8857\u89D2"),...No()}],e.openCanvasId=null,e}function xs(){let[e,t]=W.default.useState(Zl),[n,r]=W.default.useState(!1),o=W.default.useRef(!1),a=W.default.useMemo(()=>ra(typeof window<"u"&&window.__CF_DEV_PROMPT?window.__CF_DEV_PROMPT:""),[]),[i,c]=W.default.useState(""),[s,f]=W.default.useState(null),[d,m]=W.default.useState(null),[p,v]=W.default.useState(null),[D,T]=W.default.useState(!1),[A,z]=W.default.useState(!1),[K,Y]=W.default.useState(null),[I,O]=W.default.useState(!1),Z=W.default.useRef(0),ue=W.default.useRef(null);W.default.useEffect(()=>{let $=!0;return aa().then(B=>{$&&Y(B)}).catch(B=>{$&&Y({providers:[],error:B.message})}),()=>{$=!1}},[]),W.default.useEffect(()=>{if(o.current)return;o.current=!0;let $=!0;return(async()=>{try{let B=await Yo();B.status==="done"&&ee(`\u5DF2\u8FC1\u79FB ${B.canvases} \u4E2A\u753B\u5E03\u5230\u65B0\u5B58\u50A8`)}catch(B){ee(`\u672C\u5730\u6570\u636E\u8FC1\u79FB\u672A\u5B8C\u6210\uFF1A${B.message}`,"error")}try{let[B,se]=await Promise.all([di().catch(()=>an()),qo()]),{state:le,from:Ue}=se,ke=le&&Ue!=="none"?Dr(le):null,Ce=Se=>{let Oe=(Se.promptSources||[]).map(at=>{let Xe=Yt(at);return{id:Xe.id,name:Xe.name,url:Xe.url,fallbackUrl:Xe.fallbackUrl,homepage:Xe.homepage,enabled:Xe.enabled,builtIn:Xe.builtIn}});return{...Se,promptSources:Oe,prompts:_r(Se.prompts,Oe,B)}};$&&ke&&t(Ce(ke));let Ee=le&&Array.isArray(le.channels)?le.channels:[];if($&&Ee.length===0){let Se=await fa();$&&Se?.channels?.length&&(t(Oe=>Ce(Dr({...Oe,channels:Se.channels,defaults:Se.defaults||Oe.defaults,assistantModel:Se.assistantModel??Oe.assistantModel,promptSources:(Oe.promptSources?.length?Oe.promptSources:Se.promptSources)||Oe.promptSources}))),ee(`\u5DF2\u4ECE\u672C\u673A\u6587\u4EF6\u6062\u590D ${Se.channels.length} \u4E2A\u6E20\u9053`))}}catch{}$&&r(!0)})(),()=>{$=!1}},[]),W.default.useEffect(()=>{n&&Jo(e,{onError:($,B)=>{ee(B?.quota?"\u672C\u5730\u5B58\u50A8\u5DF2\u6EE1\uFF0C\u672C\u6B21\u4FEE\u6539\u53EF\u80FD\u4E22\u5931":`\u4FDD\u5B58\u5931\u8D25\uFF1A${$.message}`,"error")}})},[e,n]),W.default.useEffect(()=>{let $=()=>{da()},B=()=>{document.visibilityState==="hidden"&&$()};return window.addEventListener("pagehide",$),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("pagehide",$),document.removeEventListener("visibilitychange",B)}},[]);let te=W.default.useRef(e);te.current=e;let ee=W.default.useCallback(($,B)=>{v({text:$,kind:B,at:Date.now()}),clearTimeout(Z.current),Z.current=setTimeout(()=>v(null),2200)},[]);W.default.useEffect(()=>()=>{clearTimeout(Z.current),ue.current?.abort()},[]);let $e=W.default.useCallback($=>{let B=$?.storageKey||$?.images?.[0]?.storageKey||"";k({view:"studio",openCanvasId:null}),c($?.prompt||""),f(B?{storageKey:B,prompt:$.prompt||""}:null),ee(B?"\u5DF2\u9001\u53BB\u5DE5\u4F5C\u53F0\uFF08\u56FE\u4F5C\u4E3A\u53C2\u8003\u56FE\uFF09":"\u5DF2\u9001\u53BB\u5DE5\u4F5C\u53F0\uFF08\u8FD9\u4E2A\u8282\u70B9\u6CA1\u6709\u56FE\u7247\uFF09")},[ee]),J=W.default.useCallback(($,B={})=>{let se=($?.images||[]).filter(Se=>Se.storageKey);if(!se.length)return ee("\u8FD9\u6279\u56FE\u6CA1\u6709\u672C\u5730\u526F\u672C\uFF0C\u5148\u91CD\u65B0\u751F\u6210\u518D\u9001","error"),null;let le=te.current,Ue=le.canvases.find(Se=>Se.id===le.openCanvasId)||le.canvases[0]||null,ke=($.prompt||"\u751F\u6210\u7ED3\u679C").slice(0,16),Ce=Ue?.id||null,Ee=Ue?.name||ke;return t(Se=>{let Oe=(Ce?Se.canvases.find(Fe=>Fe.id===Ce):null)||Tr(ke),at=Oe.nodes||[],Xe=80,Wt=120;if(at.length){let Fe=-1/0,Re=1/0;for(let zt of at)zt.type!=="group"&&(Fe=Math.max(Fe,zt.x+(zt.w||240)),Re=Math.min(Re,zt.y));Number.isFinite(Fe)&&(Xe=Fe+80,Wt=Number.isFinite(Re)?Re:120)}let Me=se.map((Fe,Re)=>dn({storageKey:Fe.storageKey,width:Fe.width||0,height:Fe.height||0,bytes:Fe.bytes||0,mimeType:Fe.mimeType||"",prompt:$.prompt||""})),Le=Me[0],gt=Le?.width&&Le?.height?Tn(`${Le.width}:${Le.height}`):Tn("1:1"),tt={...pt("image",{x:Xe,y:Wt},{prompt:$.prompt,ratio:$.ratio}),x:Xe,y:Wt,...gt,status:"done",prompt:$.prompt||"",images:Me,primaryImageId:Le?.id||"",storageKey:Le?.storageKey||""},ot={...Oe,nodes:[...at,tt],updatedAt:Date.now()},ft=Se.canvases.some(Fe=>Fe.id===Oe.id)?Se.canvases.map(Fe=>Fe.id===Oe.id?ot:Fe):[...Se.canvases,ot];return{...Se,canvases:ft,openCanvasId:Oe.id,canvasPickedIds:[tt.id]}}),ee(`\u5DF2\u9001\u5230\u753B\u5E03\u300C${Ee}\u300D`),Ee},[ee]),k=$=>t(B=>({...B,...$})),H=e.canvases.find($=>$.id===e.openCanvasId)||null,re=Co(e),E=e.assistantMessages||[],ae=e.assistantModel||K?.default||null,U=$o(K,ae)||"\u6A21\u578B",ye=$=>{m(null),T(!1),t(B=>Ao(B,$))},ne=($,B)=>t(se=>({...se,canvases:se.canvases.map(le=>{if(le.id!==$)return le;let Ue=typeof B=="function"?B(le):B;return{...le,...Ue,updatedAt:Date.now()}})})),et=()=>{let $=Tr();t(B=>({...B,canvases:[$,...B.canvases],openCanvasId:$.id,view:"canvas"})),ee("\u5DF2\u65B0\u5EFA\u753B\u5E03")},Ve=()=>{let $=document.createElement("input");$.type="file",$.accept=".json,application/json",$.onchange=async()=>{let B=$.files?.[0];if(B)try{let se=JSON.parse(await B.text()),le={...Tr(se.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(se.nodes)?se.nodes:[],edges:Array.isArray(se.edges)?se.edges:[],grid:se.grid||"dots"};t(Ue=>({...Ue,canvases:[le,...Ue.canvases],openCanvasId:le.id,view:"canvas"})),ee("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{ee("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},$.click()},Ot=W.default.useCallback(async()=>{let $=new Set((te.current.promptSources||[]).map(Ce=>Yt(Ce).url)),B=Ur.filter(Ce=>!$.has(Ce.url)),se=[...te.current.promptSources||[],...B];t(Ce=>({...Ce,promptSources:se})),ee("\u6B63\u5728\u62C9\u53D6\u5B98\u65B9\u63D0\u793A\u8BCD\u6765\u6E90\u2026");let le=await ba(se,{onlyMissingOrFailed:!0});t(Ce=>({...Ce,promptSources:se,prompts:_r(Ce.prompts,se,le.cache)}));let Ue=le.results.filter(Ce=>Ce.ok).length,ke=le.results.length-Ue;ke===0?ee(`\u5DF2\u52A0\u8F7D ${le.prompts.length} \u6761\u63D0\u793A\u8BCD`):ee(`\u672C\u6B21 ${Ue} \u6210\u529F / ${ke} \u5931\u8D25\uFF0C\u5171 ${le.prompts.length} \u6761\u53EF\u7528`,"error")},[ee]),bt=W.default.useCallback(async $=>{let B=$?.text||$?.prompt||"";if(B)try{await navigator.clipboard.writeText(B),ee("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{let se=document.createElement("textarea");se.value=B,se.style.cssText="position:fixed;left:-9999px;top:0",document.body.appendChild(se),se.select();try{document.execCommand("copy"),ee("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236")}catch{ee("\u590D\u5236\u5931\u8D25\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u526A\u8D34\u677F","error")}finally{document.body.removeChild(se)}}},[ee]),Lt=W.default.useCallback($=>{if(!$)return;let B={id:ze("a"),kind:"text",title:$.title||"\u6536\u85CF\u7684\u63D0\u793A\u8BCD",text:$.text||$.prompt||"",coverUrl:$.coverUrl||"",tags:Array.isArray($.tags)?$.tags:[],source:$.category||$.sourceName||"\u63D0\u793A\u8BCD\u4E2D\u5FC3",at:Date.now()};t(se=>({...se,assets:[B,...se.assets]})),ee("\u5DF2\u6536\u85CF\u5230\u6211\u7684\u8D44\u4EA7")},[ee]),St=W.default.useCallback(async($,{withRefs:B=!0}={})=>{let se=$?.text||$?.prompt||"",le=B&&Array.isArray($?.referenceImageUrls)?$.referenceImageUrls.filter(Boolean):[],Ue=te.current.canvases.find(ke=>ke.id===te.current.openCanvasId)||null;if(Ue){let ke=te.current.defaults?.image?.ratio||"1:1",Ce=Tn(ke),Ee=220+Ue.nodes.length*26,Se=220+Ue.nodes.length*20,Oe={id:ze("i"),type:"image",x:Ee,y:Se,w:Ce.w,h:Ce.h,name:"",status:"idle",z:2,prompt:se,ratio:ke,locked:!0};if(ne(Ue.id,at=>({nodes:[...at.nodes,Oe]})),le.length){ee(`\u5DF2\u7528\u300C${$.title}\u300D\u5EFA\u8282\u70B9\uFF0C\u6B63\u5728\u52A0\u8F7D ${le.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let at=await nr(le,{max:4});if(at.length){let Xe=at.map((Me,Le)=>{let gt=Me.width&&Me.height?Me.width/Me.height:1,tt=200,ot=Math.round(tt/Math.max(.25,Math.min(4,gt)))+28;return{...pt("image",{x:Ee-280,y:Se+Le*(ot+16)},{w:tt,h:ot}),x:Ee-280,y:Se+Le*(ot+16),status:"done",storageKey:Me.storageKey,images:[dn({storageKey:Me.storageKey,width:Me.width,height:Me.height,prompt:""})],primaryImageId:"",name:`\u53C2\u8003\u56FE ${Le+1}`}}).map(Me=>({...Me,primaryImageId:Me.images[0]?.id||""})),Wt=Xe.map(Me=>({id:ze("e"),from:Me.id,to:Oe.id}));ne(Ue.id,Me=>({nodes:[...Me.nodes,...Xe],edges:[...Me.edges,...Wt]})),ee(`\u5DF2\u6302\u8F7D ${at.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u5230\u753B\u5E03\u8282\u70B9`);return}}ee(`\u5DF2\u7528\u300C${$.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}if(c(se),k({view:"studio",openCanvasId:null}),le.length){ee(`\u5DF2\u586B\u5165\u300C${$.title}\u300D\uFF0C\u6B63\u5728\u52A0\u8F7D ${le.length} \u5F20\u914D\u5957\u53C2\u8003\u56FE\u2026`);let ke=await nr(le,{max:4});ke.length?(f(ke.map(Ce=>({storageKey:Ce.storageKey,name:Ce.name}))),ee(`\u5DF2\u586B\u5165\u63D0\u793A\u8BCD\u5E76\u52A0\u8F7D ${ke.length} \u5F20\u53C2\u8003\u56FE`)):ee(`\u5DF2\u586B\u5165\u300C${$.title}\u300D\uFF08\u914D\u5957\u53C2\u8003\u56FE\u62C9\u53D6\u5931\u8D25\uFF09`)}else ee(`\u5DF2\u586B\u5165\u300C${$.title}\u300D`)},[ee]),qe=$=>{k({assistantModel:$||null}),z(!1)},lt=async()=>{let $=a.get().trim();if(!$||I)return;let B={id:ze("m"),role:"user",text:$},se={id:ze("m"),role:"assistant",text:""},le=[...E,B];k({assistantMessages:[...le,se]}),a.set("");let Ue=new AbortController;ue.current=Ue,O(!0);let ke=Ce=>t(Ee=>({...Ee,assistantMessages:(Ee.assistantMessages||[]).map(Se=>Se.id===se.id?Ce(Se):Se)}));try{let Ce=0,Ee="";await Pr({model:e.assistantModel||null,messages:le.map(Se=>({role:Se.role,text:Se.text})),signal:Ue.signal,onDelta:(Se,Oe)=>{Ee=Oe;let at=Date.now();at-Ce>60&&(Ce=at,ke(Xe=>({...Xe,text:Oe})))}}),ke(Se=>({...Se,text:Ee}))}catch(Ce){ke(Ee=>({...Ee,text:`${Ee.text||""}

\uFF08\u5931\u8D25\uFF1A${Ce.message}\uFF09`}))}finally{O(!1),ue.current=null}},Ye=()=>{ue.current?.abort(),O(!1)},yt=$=>{let B=H;if(!B){ee("\u5148\u6253\u5F00\u4E00\u5F20\u753B\u5E03\u518D\u63D2\u5165");return}let se=pt("text",{x:420,y:320},{text:$.text});se.x=160+B.nodes.length%6*28,se.y=180+B.nodes.length%6*24,ne(B.id,{nodes:[...B.nodes,se]}),ee("\u5DF2\u63D2\u5165\u753B\u5E03")};W.default.useLayoutEffect(()=>{if(typeof document>"u"||document.querySelector("style[data-cf-styles]"))return;let $=[...document.head.querySelectorAll("style")].find(se=>se.textContent?.includes(".cf-app"));if($){$.setAttribute("data-cf-styles","1");return}let B=document.createElement("style");B.setAttribute("data-cf-styles","1"),B.textContent=xo,document.head.appendChild(B)},[]);let Ze=e.theme==="dark"?" dark":e.theme==="light"?" light":"";return W.default.createElement("div",{className:`cf-app${Ze}`},W.default.createElement("header",{className:"cf-nav"},W.default.createElement("div",{className:"cf-island cf-island--nav"},W.default.createElement("nav",{className:"cf-nav-glass","aria-label":"\u4E3B\u5BFC\u822A"},Ql.map($=>{let B=$.id==="canvas"?re==="canvas"||re==="editor":re===$.id;return W.default.createElement("button",{key:$.id,type:"button",className:B?"is-on":"",onClick:()=>ye($.id),"aria-current":B?"page":void 0},$.label)}))),W.default.createElement("div",{className:"cf-nav-right"},W.default.createElement("button",{type:"button",className:"cf-glass-btn",onClick:()=>z(!0),title:`\u52A9\u624B\u6A21\u578B\uFF1A${U}`},W.default.createElement(he,{name:"sparkle",size:14}),W.default.createElement("span",null,U)),W.default.createElement("button",{type:"button",className:"cf-glass-btn cf-glass-btn--icon",title:"\u914D\u7F6E","aria-label":"\u914D\u7F6E",onClick:()=>ye("config")},W.default.createElement(he,{name:"gear",size:15})),W.default.createElement("button",{type:"button",className:`cf-glass-btn cf-glass-btn--dock${D?" is-on":""}`,"aria-pressed":D,onClick:()=>T($=>!$)},W.default.createElement(he,{name:"message",size:14}),"\u52A9\u624B"))),W.default.createElement(sr,{key:re},re==="editor"&&H?W.default.createElement(cs,{canvas:H,channels:e.channels,defaults:e.defaults.image,assistantModel:e.assistantModel||null,prompts:e.prompts,onSendToStudio:$e,draftStore:a,showComposer:!D,onChange:$=>ne(H.id,$),onBack:()=>t($=>Eo($)),onSaveAsset:$=>t(B=>({...B,assets:[$,...B.assets]})),showToolbarLabels:e.showToolbarLabels,theme:e.theme||"system",onTheme:$=>k({theme:$}),say:ee}):null,re==="canvas"?W.default.createElement(ss,{canvases:e.canvases,onOpen:$=>t(B=>Io(B,$)),onCreate:et,onRename:($,B)=>ne($,{name:B}),onDelete:$=>t(B=>({...B,canvases:B.canvases.filter(se=>se.id!==$),openCanvasId:null})),onImport:Ve}):null,re==="studio"?W.default.createElement(fs,{channels:e.channels,defaults:e.defaults.image,records:e.records,assets:e.assets,prompts:e.prompts,prompt:i,onPrompt:c,onCreateRecord:$=>t(B=>({...B,records:[$,...B.records]})),onUpdateRecord:($,B)=>t(se=>({...se,records:se.records.map(le=>le.id===$?typeof B=="function"?B(le):{...le,...B}:le)})),onDeleteRecords:$=>t(B=>({...B,records:B.records.filter(se=>!$.includes(se.id))})),onSaveAsset:$=>t(B=>({...B,assets:[$,...B.assets]})),onLookupPrompts:()=>{m("studio"),k({view:"prompts",openCanvasId:null})},onSendToCanvas:J,initialRefs:Array.isArray(s)?s:null,initialRef:Array.isArray(s)?null:s,onConsumeRef:()=>f(null),say:ee}):null,re==="prompts"?W.default.createElement(us,{prompts:e.prompts,sources:e.promptSources,returnTo:d,onUse:St,onCopy:bt,onSaveAsset:Lt,onEnableBuiltins:Ot,onBack:d?()=>{m(null),k({view:d})}:null}):null,re==="assets"?W.default.createElement(ms,{assets:e.assets,onSave:$=>k({assets:$}),onDelete:$=>t(B=>({...B,assets:B.assets.filter(se=>se.id!==$)})),onImport:$=>t(B=>({...B,assets:[...$,...B.assets]})),say:ee}):null,re==="config"?W.default.createElement(ys,{tab:e.configTab,onTab:$=>k({configTab:$}),channels:e.channels,onChannels:$=>k({channels:$}),defaults:e.defaults,onDefaults:$=>k({defaults:$}),promptSources:e.promptSources,onPromptSources:$=>t(B=>({...B,promptSources:$,prompts:_r(B.prompts,$,an())})),showToolbarLabels:e.showToolbarLabels,onShowToolbarLabels:$=>k({showToolbarLabels:$}),theme:e.theme||"system",onTheme:$=>k({theme:$}),onPrompts:($,B)=>{t(se=>({...se,prompts:_r(se.prompts,se.promptSources,B||an())}))},onUsePrompt:St,onCopyPrompt:bt,onSavePromptAsset:Lt,say:ee,state:e}):null),D?W.default.createElement(ef,{messages:E,draftStore:a,streaming:I,onSend:lt,onStop:Ye,onClose:()=>T(!1),onInsert:yt,onClear:()=>k({assistantMessages:[]}),canInsert:!!H,modelLabelText:U}):null,A?W.default.createElement(Rl,{models:K,selection:ae,onPick:qe,onClose:()=>z(!1)}):null,p?W.default.createElement(wo,{text:p.text,kind:p.kind}):null)}function Rl({models:e,selection:t,onPick:n,onClose:r}){let[o,a]=W.default.useState(""),i=e?.providers||[],c=o.trim().toLowerCase(),s=i.map(f=>({...f,models:f.models.filter(d=>!c||(d.name||d.id).toLowerCase().includes(c)||f.name.toLowerCase().includes(c))})).filter(f=>f.models.length);return W.default.createElement(dt,{title:"\u52A9\u624B\u6A21\u578B",wide:!0,onClose:r,footer:W.default.createElement("span",{style:{marginInlineEnd:"auto",fontSize:12,color:"var(--cf-caption)"}},e?.error?`\u8BFB\u53D6\u5931\u8D25\uFF1A${e.error}`:`\u6765\u81EA DSH \u5F53\u524D\u4F9B\u5E94\u7684 ${i.reduce((f,d)=>f+d.models.length,0)} \u4E2A\u6A21\u578B`)},W.default.createElement("button",{type:"button",className:`cf-chip${t?.model?"":" is-on"}`,style:{justifySelf:"start"},onClick:()=>n(null)},"\u8DDF\u968F DSH \u9ED8\u8BA4"),W.default.createElement("input",{className:"cf-input",value:o,placeholder:"\u641C\u7D22\u6A21\u578B\u6216\u5382\u5546",onChange:f=>a(f.target.value)}),s.length===0?W.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},e===null?"\u6B63\u5728\u8BFB\u53D6\u6A21\u578B\u2026":c?"\u6CA1\u6709\u5339\u914D\u7684\u6A21\u578B":"DSH \u91CC\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6A21\u578B"):W.default.createElement("div",{style:{display:"grid",gap:"var(--cf-sp-3)"}},s.map(f=>W.default.createElement("div",{key:f.id,style:{display:"grid",gap:2}},W.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",paddingInline:4}},f.name),f.models.map(d=>{let m=t?.provider===f.id&&t?.model===d.id;return W.default.createElement("button",{key:d.id,type:"button",className:`cf-menu-item${m?" is-on":""}`,onClick:()=>n({provider:f.id,model:d.id})},W.default.createElement("span",{className:"cf-menu-label"},d.name),m?W.default.createElement(he,{name:"check",size:14}):null)})))))}function ef({messages:e,draftStore:t,streaming:n,onSend:r,onStop:o,onClose:a,onInsert:i,onClear:c,canInsert:s,modelLabelText:f}){let d=W.default.useSyncExternalStore(t.subscribe,t.get,t.get),m=T=>t.set(T),p=W.default.useRef(null),v=W.default.useRef(null),D=W.default.useRef(0);return W.default.useEffect(()=>{let T=p.current;T&&(T.scrollTop=T.scrollHeight)},[e]),W.default.useEffect(()=>{v.current?.focus()},[]),W.default.createElement("aside",{className:"cf-dock","aria-label":"\u52A9\u624B"},W.default.createElement("header",{className:"cf-dock-head"},W.default.createElement(he,{name:"message",size:15}),W.default.createElement("span",{className:"cf-dock-title"},"\u52A9\u624B"),W.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},f),e.length?W.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:c},"\u6E05\u7A7A"):null,W.default.createElement(Ke,{name:"close",label:"\u5173\u95ED\u52A9\u624B",onClick:a})),W.default.createElement("div",{className:"cf-dock-body",ref:p},e.length===0?W.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u95EE\u70B9\u4EC0\u4E48\uFF0C\u6216\u8005\u628A\u753B\u5E03\u8F93\u5165\u6846\u91CC\u7684\u8349\u7A3F\u5E26\u8FC7\u6765\u7EE7\u7EED\u5199\u3002"):e.map(T=>W.default.createElement("div",{key:T.id,className:`cf-msg cf-msg--${T.role}`},W.default.createElement("div",{className:"cf-msg-text"},T.text||(T.role==="assistant"&&n?"\u2026":"")),T.role==="assistant"&&T.text?W.default.createElement("div",{className:"cf-msg-actions"},W.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",disabled:!s,onClick:()=>i(T)},"\u63D2\u5165\u753B\u5E03")):null))),W.default.createElement("div",{className:"cf-dock-foot"},W.default.createElement("textarea",{ref:v,className:"cf-dock-input",value:d,placeholder:"\u7ED9\u52A9\u624B\u8BF4\u70B9\u4EC0\u4E48",onChange:T=>m(T.target.value),onCompositionStart:()=>{D.current=Date.now()},onCompositionEnd:()=>{D.current=Date.now()},onKeyDown:T=>{T.key==="Enter"&&(T.nativeEvent.isComposing||Date.now()-D.current<500||T.shiftKey||(T.preventDefault(),D.current=0,r()))}}),W.default.createElement("div",{className:"cf-dock-bar"},W.default.createElement("span",{style:{fontSize:11,color:"var(--cf-caption)"}},s?"\u56DE\u590D\u53EF\u63D2\u5165\u5F53\u524D\u753B\u5E03":"\u6253\u5F00\u4E00\u5F20\u753B\u5E03\u540E\u53EF\u63D2\u5165"),n?W.default.createElement("button",{type:"button",className:"cf-send",onClick:o,"aria-label":"\u505C\u6B62","data-tip":"\u505C\u6B62"},W.default.createElement(he,{name:"stop",size:13})):W.default.createElement("button",{type:"button",className:"cf-send",onClick:r,disabled:!d.trim(),"aria-label":"\u53D1\u9001","data-tip":"\u53D1\u9001"},W.default.createElement(he,{name:"arrowUp",size:17})))))}var ws="dsh-chunfeng-image",tf=["slots"];function nf(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:ws},af)),e.effect(()=>{let t=null;return(()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:ws,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},rf))})(),()=>t?.()},"dsh-chunfeng-image: sidebar entry")}function rf(){return Ia.default.createElement(he,{name:"image",size:16})}function af(){return Ia.default.createElement(sr,null,Ia.default.createElement(xs,null))}
return module.exports}})
