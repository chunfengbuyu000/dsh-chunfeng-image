window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ma=Object.create;var Pe=Object.defineProperty;var Ia=Object.getOwnPropertyDescriptor;var Da=Object.getOwnPropertyNames;var Ea=Object.getPrototypeOf,$a=Object.prototype.hasOwnProperty;var Aa=(e,n)=>{for(var r in n)Pe(e,r,{get:n[r],enumerable:!0})},aa=(e,n,r,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let l of Da(n))!$a.call(e,l)&&l!==r&&Pe(e,l,{get:()=>n[l],enumerable:!(a=Ia(n,l))||a.enumerable});return e};var ge=(e,n,r)=>(r=e!=null?Ma(Ea(e)):{},aa(n||!e||!e.__esModule?Pe(r,"default",{value:e,enumerable:!0}):r,e)),Ba=e=>aa(Pe({},"__esModule",{value:!0}),e);var cn={};Aa(cn,{apply:()=>sn,inject:()=>rn});module.exports=Ba(cn);var Ke=ge(require("react"),1);var j=ge(require("react"),1);var na=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
   \u5168\u90E8\u8D70 DSH \u522B\u540D\u4EE4\u724C\uFF0C\u8DDF\u968F\u5BBF\u4E3B\u6DF1\u6D45\u8272\uFF0C\u4E0E\u300C\u6625\u98CE\u5DE5\u4F5C\u53F0\u300D\u7684\u753B\u5E03\u540C\u4E00\u5957\u914D\u8272\u3002
   \u62EC\u53F7\u91CC\u662F\u8131\u79BB DSH \u5355\u72EC\u9884\u89C8\u65F6\u7684\u515C\u5E95\u503C\u3002 */
.cf-app {
  --cf-bg: var(--dsw-alias-bg-base, oklch(14.5% 0 0));
  --cf-bg-sunken: var(--dsw-alias-bg-sunken, oklch(12% 0 0));
  --cf-panel: var(--dsw-alias-bg-layer-2, oklch(18.5% 0 0));
  --cf-panel-2: var(--dsw-alias-bg-layer-1, oklch(16.5% 0 0));
  --cf-panel-3: var(--dsw-alias-bg-layer-3, oklch(21% 0 0));

  --cf-fg: var(--dsw-alias-label-primary, oklch(96% 0 0));
  --cf-fg-2: var(--dsw-alias-label-secondary, oklch(85% 0 0));
  --cf-muted: var(--dsw-alias-label-tertiary, oklch(67% 0 0));
  --cf-caption: var(--dsw-alias-label-caption, oklch(66% 0 0));

  --cf-line: var(--dsw-alias-border-l2, oklch(100% 0 0 / 0.1));
  --cf-line-strong: var(--dsw-alias-border-l4, oklch(100% 0 0 / 0.18));

  --cf-primary: var(--dsw-alias-button-primary-fill, oklch(96% 0 0));
  --cf-primary-fg: var(--dsw-alias-label-primary-inverted, oklch(16% 0 0));
  --cf-primary-hover: var(--dsw-alias-button-primary-hover, oklch(90% 0 0));
  --cf-link: var(--dsw-alias-link, oklch(72% 0.11 250));

  /* \u53D1\u9001\u94AE\u914D\u8272\u8DDF DSH \u5BA2\u6237\u7AEF\u4E00\u81F4\uFF1A
     InputBar.module.css \u6CE8\u660E\u300C34px circle, #3964FE light / #679EFE dark\u300D\uFF0C
     \u5373 --dsw-alias-button-info-fill \u90A3\u4E00\u5BF9\uFF0C\u4E0D\u662F button-primary\u3002 */
  /* \u5B9E\u6D4B\u81EA DSH \u5BA2\u6237\u7AEF\u622A\u56FE\uFF1A\u9ED8\u8BA4 #79abff\uFF0C\u60AC\u6D6E\u52A0\u6DF1\u5230 #4375e3\u3002
     \u6D45\u8272\u4E3B\u9898\u6309\u6E90\u7801\u6CE8\u8BB0\u7528 500 \u6863 #3964fe\u3002 */
  --cf-send: light-dark(#3964fe, #79abff);
  --cf-send-hover: light-dark(#2f57e8, #4375e3);
  --cf-send-fg: #fff;
  --cf-tip-bg: #434549;
  --cf-tip-fg: #d8d9dd;

  /* \u8F93\u5165\u5361\u7247\u4E0E\u9009\u62E9\u5668\u7684\u8868\u9762\u8272\uFF0C\u540C\u6837\u53D6 DSH \u7684\u540C\u540D\u4EE4\u724C */
  --cf-input-surface: var(--dsw-specific-input-major, var(--cf-panel));
  --cf-selector: var(--dsw-specific-selector, var(--cf-panel-2));
  --cf-r-panel: var(--dsw-radius-panel, 18px);

  /* \u73BB\u7483\u5E95\uFF1A\u548C\u6625\u98CE\u5DE5\u4F5C\u53F0\u540C\u4E00\u914D\u65B9 */
  --cf-glass: color-mix(in srgb, var(--cf-panel) 72%, transparent);
  --cf-glass-soft: color-mix(in srgb, var(--cf-panel) 55%, transparent);

  --cf-hover: var(--dsw-alias-interactive-bg-hover, oklch(100% 0 0 / 0.07));
  --cf-active: var(--dsw-alias-interactive-bg-active, oklch(100% 0 0 / 0.13));
  --cf-focus: var(--dsw-alias-border-focus, oklch(72% 0.13 250));
  --cf-danger: oklch(62% 0.19 27);

  /* \u5C3A\u5BF8\u4E0E\u8282\u594F */
  --cf-r-xs: var(--dsw-radius-xs, 6px);
  --cf-r-sm: var(--dsw-radius-sm, 8px);
  --cf-r-md: var(--dsw-radius-md, 12px);
  --cf-r-lg: var(--dsw-radius-lg, 16px);
  --cf-r-pill: 999px;
  --cf-hair: 1px;

  --cf-sp-1: 4px; --cf-sp-2: 8px; --cf-sp-3: 12px; --cf-sp-4: 16px;
  --cf-sp-5: 24px; --cf-sp-6: 32px; --cf-sp-7: 48px;

  --cf-fs-11: 11px; --cf-fs-12: 12px; --cf-fs-13: 13px; --cf-fs-14: 14px;
  --cf-fs-16: 16px; --cf-fs-18: 18px; --cf-fs-22: 22px; --cf-fs-28: 28px; --cf-fs-36: 36px;

  --cf-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --cf-dur: 160ms;

  --cf-nav-h: 60px;
  --cf-z-nav: 300;
  --cf-z-float: 200;
  --cf-z-menu: 400;
  --cf-z-modal: 500;
  --cf-z-toast: 600;

  color-scheme: light dark;
  font-family: var(--dsw-font-sans, ui-sans-serif, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif);
  font-size: var(--cf-fs-14);
  color: var(--cf-fg);
  background: var(--cf-bg);
}
`;var ta=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
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
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  overflow: clip;
}
/* \u5185\u5BB9\u6392\u5728\u73AF\u5883\u5149\u4E4B\u4E0A\u3002toast \u8981\u6392\u9664\u6389\uFF1A
   \u5B83\u5FC5\u987B\u662F fixed \u4E14\u4E0D\u5403\u70B9\u51FB\uFF0C\u5426\u5219\u4F1A\u88AB\u8FD9\u6761\u89C4\u5219\u6539\u6210 grid \u5B50\u9879\u3001\u6491\u6210\u5168\u5BBD\u6761\u76D6\u4F4F\u8F93\u5165\u6761\u3002 */
.cf-app > :not(.cf-ambient):not(.cf-toast) { position: relative; z-index: 1; }

/* \u73AF\u5883\u5149\uFF1A\u4E09\u56E2\u6781\u6162\u6F02\u79FB\u7684\u67D4\u5149\uFF0C\u7ED9\u7EAF\u4EE4\u724C\u5E95\u52A0\u4E00\u70B9\u4F53\u79EF\u548C\u8272\u76F8\u53D8\u5316\u3002
   \u548C\u300C\u6625\u98CE\u5DE5\u4F5C\u53F0\u300D\u540C\u4E00\u914D\u65B9\uFF1A56vmax\u3001blur 70px\u300142s\u3002 */
.cf-ambient { position: absolute; inset: 0; z-index: 0; overflow: clip; pointer-events: none; }
.cf-ambient i {
  position: absolute;
  width: 56vmax;
  height: 56vmax;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
  animation: cf-drift 42s ease-in-out infinite alternate;
}
.cf-ambient i:nth-child(1) { left: -18vmax; top: -24vmax; background: radial-gradient(circle, color-mix(in srgb, #d9e4ff 42%, var(--cf-bg)), transparent 68%); }
.cf-ambient i:nth-child(2) { right: -14vmax; top: -8vmax; background: radial-gradient(circle, color-mix(in srgb, #f6e2ef 42%, var(--cf-bg)), transparent 68%); animation-delay: -14s; }
.cf-ambient i:nth-child(3) { left: 22vmax; bottom: -34vmax; background: radial-gradient(circle, color-mix(in srgb, #e2f3e0 42%, var(--cf-bg)), transparent 68%); animation-delay: -28s; }
@keyframes cf-drift { to { transform: translate3d(6vmax, 4vmax, 0) scale(1.12); } }
@media (prefers-reduced-motion: reduce) {
  .cf-ambient i { animation: none; }
}

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
  display: flex;
  align-items: center;
  gap: var(--cf-sp-2);
  height: var(--cf-nav-h);
  padding-inline: var(--cf-sp-4);
  border-bottom: var(--cf-hair) solid var(--cf-line);
  background: var(--cf-glass);
  backdrop-filter: blur(24px) saturate(160%);
  z-index: var(--cf-z-nav);
}

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

.cf-nav-right { display: flex; align-items: center; gap: var(--cf-sp-1); margin-inline-start: auto; }
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
  height: 32px;
  padding-inline: var(--cf-sp-3);
  border-radius: 6px;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-seg button:hover { color: var(--cf-fg); }
.cf-seg button.is-on { background: var(--cf-panel-3); color: var(--cf-fg); }

/* ---------- \u9875\u9762\u9AA8\u67B6 ---------- */

.cf-page { height: 100%; overflow-y: auto; overflow-x: clip; }
.cf-page-inner { max-width: 1180px; margin-inline: auto; padding: var(--cf-sp-6) var(--cf-sp-5) var(--cf-sp-7); }

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
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  min-height: 0;
}
.cf-editor-main { position: relative; min-width: 0; min-height: 0; height: 100%; }

.cf-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: var(--cf-sp-2) 0;
  border-inline-end: var(--cf-hair) solid var(--cf-line);
  background: var(--cf-glass);
  backdrop-filter: blur(24px) saturate(150%);
  overflow-y: auto;
}
.cf-rail-btn {
  position: relative;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--cf-r-sm);
  color: var(--cf-muted);
  transition: background-color var(--cf-dur) var(--cf-ease), color var(--cf-dur) var(--cf-ease);
}
.cf-rail-btn:hover { background: var(--cf-hover); color: var(--cf-fg); }
.cf-rail-btn.is-on { background: var(--cf-active); color: var(--cf-fg); }
.cf-rail-sep { width: 24px; height: var(--cf-hair); background: var(--cf-line); margin: var(--cf-sp-1) 0; }

.cf-board { position: relative; width: 100%; height: 100%; min-width: 0; min-height: 0; background: transparent; }

.cf-stage {
  position: absolute;
  inset: 0;
  overflow: clip;
  touch-action: none;
}
.cf-stage.is-grab { cursor: grab; }
.cf-stage.is-grabbing { cursor: grabbing; }

.cf-stage--dots {
  background-image: radial-gradient(circle at 1px 1px, var(--cf-line-strong) 1px, transparent 0);
  background-size: var(--cf-grid, 28px) var(--cf-grid, 28px);
}
.cf-stage--lines {
  background-image:
    linear-gradient(to right, var(--cf-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--cf-line) 1px, transparent 1px);
  background-size: var(--cf-grid, 28px) var(--cf-grid, 28px);
}
.cf-stage--blank { background-image: none; }

.cf-world { position: absolute; top: 0; left: 0; width: 0; height: 0; transform-origin: 0 0; will-change: transform; }

.cf-edges { position: absolute; top: 0; left: 0; overflow: visible; pointer-events: none; }
.cf-edge-line { fill: none; stroke: var(--cf-muted); stroke-opacity: 0.55; stroke-width: 1.5; }
.cf-edge-line--ghost { stroke: var(--cf-fg); stroke-dasharray: 5 5; stroke-opacity: 0.9; }
.cf-edge-hit { fill: none; stroke: transparent; stroke-width: 18; pointer-events: stroke; cursor: pointer; }
.cf-edge:hover .cf-edge-line { stroke: var(--cf-fg); stroke-opacity: 1; }
.cf-arrow-head { fill: var(--cf-muted); fill-opacity: 0.7; }

.cf-marquee {
  position: absolute;
  border: var(--cf-hair) solid var(--cf-focus);
  background: color-mix(in oklab, var(--cf-focus) 12%, transparent);
  pointer-events: none;
}

/* \u8282\u70B9 */
.cf-node {
  position: absolute;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  transition: box-shadow var(--cf-dur) var(--cf-ease);
}
.cf-node:hover { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-fg-2); }
.cf-node.is-selected { box-shadow: inset 0 0 0 1.5px var(--cf-fg), 0 0 0 3px color-mix(in oklab, var(--cf-fg) 12%, transparent); }
.cf-node.is-running { box-shadow: inset 0 0 0 1.5px var(--cf-link), 0 0 0 3px color-mix(in oklab, var(--cf-link) 18%, transparent); }
.cf-node.is-group {
  display: block;
  background: color-mix(in oklab, var(--cf-panel-2) 55%, transparent);
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
  min-height: 30px;
  padding-inline: var(--cf-sp-3);
  border-bottom: var(--cf-hair) solid var(--cf-line);
  font-size: var(--cf-fs-11);
  color: var(--cf-muted);
  min-width: 0;
}
.cf-node-type { flex: 0 0 auto; }
.cf-node-name { margin-inline-start: auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cf-node-port {
  flex: 0 0 auto;
  width: 10px;
  height: 10px;
  border-radius: var(--cf-r-pill);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg-2);
  background: var(--cf-bg);
  cursor: crosshair;
}
.cf-node-port:hover { background: var(--cf-fg); box-shadow: none; }
.cf-node-body { min-height: 0; overflow: hidden; border-radius: 0 0 var(--cf-r-md) var(--cf-r-md); }

.cf-node-media { width: 100%; height: 100%; background: var(--cf-panel-2); }
.cf-node-media img, .cf-node-media video, .cf-node-media canvas { width: 100%; height: 100%; object-fit: cover; }

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

.cf-node-group-head {
  position: absolute;
  top: -24px;
  left: 0;
  display: flex;
  align-items: center;
  gap: var(--cf-sp-3);
  height: 20px;
  padding-inline: 2px;
  cursor: grab;
  font-size: var(--cf-fs-12);
  color: var(--cf-muted);
  white-space: nowrap;
}
.cf-node-group-count { margin-inline-start: auto; color: var(--cf-muted); font-size: var(--cf-fs-11); }

.cf-node-handle {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: var(--cf-bg);
  box-shadow: inset 0 0 0 1.5px var(--cf-fg);
  cursor: nwse-resize;
}

/* composer\uFF1A\u753B\u5E03\u5E95\u90E8\u7684\u63D0\u793A\u8BCD\u8F93\u5165 */
.cf-composer {
  position: absolute;
  z-index: var(--cf-z-float);
  left: 50%;
  bottom: var(--cf-sp-4);
  transform: translateX(-50%);
  width: min(532px, calc(100% - var(--cf-sp-6)));
  display: grid;
  gap: 9px;
  padding: 10px 8px 6px;
  border-radius: var(--cf-r-panel);
  background: var(--cf-input-surface);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.6);
}
.cf-composer:focus-within { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.6); }

.cf-composer-input {
  width: 100%;
  min-height: 48px;
  max-height: 132px;
  resize: none;
  border: 0;
  background: transparent;
  color: var(--cf-fg);
  font-size: var(--cf-fs-13);
  line-height: 1.55;
  padding: 2px var(--cf-sp-2);
}
.cf-composer-input::placeholder { color: var(--cf-caption); }
.cf-composer-input:focus-visible { outline: none; }

.cf-composer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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

/* \u60AC\u6D6E\uFF1A\u7F29\u653E\u3001\u7F29\u7565\u56FE */
.cf-zoom {
  position: absolute;
  z-index: var(--cf-z-float);
  right: var(--cf-sp-4);
  top: var(--cf-sp-4);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 6px;
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
}
.cf-zoom-num { min-width: 4ch; text-align: end; font-size: var(--cf-fs-11); color: var(--cf-fg-2); font-variant-numeric: tabular-nums; }
.cf-zoom-range { width: 88px; height: 24px; appearance: none; background: transparent; cursor: pointer; }
.cf-zoom-range::-webkit-slider-runnable-track { height: 2px; background: var(--cf-line-strong); border-radius: 2px; }
.cf-zoom-range::-webkit-slider-thumb { appearance: none; width: 12px; height: 12px; margin-top: -5px; border-radius: var(--cf-r-pill); background: var(--cf-fg); }
.cf-zoom-range::-moz-range-track { height: 2px; background: var(--cf-line-strong); }
.cf-zoom-range::-moz-range-thumb { width: 12px; height: 12px; border: 0; border-radius: var(--cf-r-pill); background: var(--cf-fg); }

.cf-minimap {
  position: absolute;
  z-index: var(--cf-z-float);
  right: var(--cf-sp-4);
  bottom: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
  cursor: pointer;
}
.cf-mini-node { fill: var(--cf-fg-2); fill-opacity: 0.3; }
.cf-mini-image { fill: var(--cf-fg-2); fill-opacity: 0.45; }
.cf-mini-group { fill: none; stroke: var(--cf-line-strong); stroke-width: 1; }
.cf-mini-view { fill: color-mix(in oklab, var(--cf-focus) 12%, transparent); stroke: var(--cf-focus); stroke-width: 1.2; }

.cf-editor-hint {
  position: absolute;
  top: var(--cf-sp-4);
  left: var(--cf-sp-4);
  z-index: var(--cf-z-float);
  max-width: 46ch;
  font-size: var(--cf-fs-11);
  color: var(--cf-caption);
  pointer-events: none;
}

/* ---------- \u751F\u56FE\u5DE5\u4F5C\u53F0 ---------- */

.cf-studio { display: grid; grid-template-columns: 260px minmax(0, 1fr) minmax(0, 1fr); gap: var(--cf-sp-4); align-items: stretch; }
.cf-studio-col { display: grid; gap: var(--cf-sp-4); align-content: start; }
.cf-studio .cf-card { display: grid; grid-template-rows: auto minmax(0, 1fr); }
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
.cf-result { border-radius: var(--cf-r-md); overflow: hidden; box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong); aspect-ratio: 1; background: var(--cf-panel-2); }
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
  display: grid;
  gap: var(--cf-sp-2);
  align-content: start;
  padding: var(--cf-sp-4);
  border-radius: var(--cf-r-md);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  transition: box-shadow var(--cf-dur) var(--cf-ease);
  min-width: 0;
}
.cf-prompt-card:hover { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong); }
.cf-prompt-title { font-size: var(--cf-fs-14); font-weight: 500; overflow-wrap: break-word; }
.cf-prompt-text { font-size: var(--cf-fs-12); color: var(--cf-muted); line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
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
  .cf-page-inner { padding: var(--cf-sp-5) 20px var(--cf-sp-6); }
  .cf-nav { height: auto; padding: var(--cf-sp-2) 20px; flex-wrap: wrap; gap: var(--cf-sp-1); }
  .cf-nav-item.is-on::after { bottom: -6px; }
  .cf-nav-version { display: none; }
  .cf-split { grid-template-columns: minmax(0, 1fr); gap: var(--cf-sp-4); }
  .cf-filters { grid-auto-flow: column; grid-auto-columns: max-content; overflow-x: auto; gap: var(--cf-sp-4); }
  .cf-studio { grid-template-columns: minmax(0, 1fr); }
  .cf-editor { grid-template-columns: 48px minmax(0, 1fr); }
  .cf-editor-hint { display: none; }
  .cf-composer { width: calc(100% - var(--cf-sp-4)); bottom: var(--cf-sp-2); }
  .cf-zoom { right: var(--cf-sp-2); top: var(--cf-sp-2); }
  .cf-minimap { display: none; }
  .cf-page-actions { margin-inline-start: 0; flex-wrap: wrap; }
  .cf-page-head { flex-wrap: wrap; }
}
`;var ia=`${na}
${ta}`;var o=ge(require("react"),1),La={canvas:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("path",{d:"M3 10h18M9 10v10"})),image:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),o.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),o.default.createElement("path",{d:"M5 17h14"})),folder:o.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:o.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),cursor:o.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:o.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),o.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:o.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:o.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),o.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),o.default.createElement("path",{d:"M11 11l2 2"})),search:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),o.default.createElement("path",{d:"M16 16l4 4"})),plus:o.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:o.default.createElement("path",{d:"M5 12h14"}),trash:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),o.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),o.default.createElement("path",{d:"M14 6l4 4"})),close:o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:o.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 16V4"}),o.default.createElement("path",{d:"M7 9l5-5 5 5"}),o.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 4v12"}),o.default.createElement("path",{d:"M7 11l5 5 5-5"}),o.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:o.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),o.default.createElement("path",{d:"M20 4v4h-4"})),more:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),o.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M9 8H4v5"}),o.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M15 8h5v5"}),o.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),map:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),o.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M9 15l6-6"}),o.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),o.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),o.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),play:o.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:o.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M10 6l-5 6 5 6"}),o.default.createElement("path",{d:"M5 12h14"})),arrowUp:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 19V5"}),o.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"}))};function W({name:e,size:n=16,...r}){let a=La[e];return a?o.default.createElement("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...r},a):null}function q({name:e,label:n,size:r=16,...a}){return o.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":n,title:n,...a},o.default.createElement(W,{name:e,size:r}))}function P({variant:e="ghost",size:n,icon:r,children:a,...l}){return o.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${n==="sm"?" cf-btn--sm":""}`,...l},r?o.default.createElement(W,{name:r,size:14}):null,a)}function he({title:e,children:n,footer:r,onClose:a,wide:l}){return o.default.useEffect(()=>{let t=m=>{m.key==="Escape"&&a()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[a]),o.default.createElement("div",{className:"cf-scrim",onPointerDown:t=>{t.target===t.currentTarget&&a()}},o.default.createElement("div",{className:`cf-dialog${l?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},o.default.createElement("header",{className:"cf-dialog-head"},o.default.createElement("h2",{className:"cf-dialog-title"},e),o.default.createElement(q,{name:"close",label:"\u5173\u95ED",onClick:a})),o.default.createElement("div",{className:"cf-dialog-body"},n,r?o.default.createElement("div",{className:"cf-dialog-foot"},r):null)))}var ze=class extends o.default.Component{constructor(n){super(n),this.state={error:null}}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,r){console.error("[\u6625\u98CE\u753B\u5E03] \u6E32\u67D3\u51FA\u9519",n,r)}render(){let{error:n}=this.state;if(!n)return this.props.children;let r=String(n&&n.message||n);return o.default.createElement("div",{className:"cf-crash",role:"alert"},o.default.createElement("span",{className:"cf-crash-icon"},o.default.createElement(W,{name:"refresh",size:22})),o.default.createElement("p",{className:"cf-crash-title"},"\u8FD9\u4E00\u5757\u51FA\u9519\u4E86"),o.default.createElement("p",{className:"cf-crash-detail"},r),o.default.createElement("div",{className:"cf-crash-actions"},o.default.createElement(P,{variant:"primary",size:"sm",onClick:()=>this.setState({error:null})},"\u91CD\u8BD5"),o.default.createElement(P,{size:"sm",onClick:()=>{try{localStorage.clear()}catch{}location.reload()}},"\u91CD\u7F6E\u672C\u5730\u6570\u636E")))}};function ra({text:e,kind:n}){return o.default.createElement("p",{className:`cf-toast${n==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function me({icon:e="canvas",title:n,hint:r,action:a}){return o.default.createElement("div",{className:"cf-empty"},o.default.createElement("span",{className:"cf-empty-icon"},o.default.createElement(W,{name:e,size:28})),o.default.createElement("p",{className:"cf-empty-title"},n),r?o.default.createElement("p",{className:"cf-empty-hint"},r):null,a)}var Xe=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],ke={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"},ja=[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}],Ne=[{id:"1:1",label:"1:1",w:1024,h:1024},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1280,h:720},{id:"9:16",label:"9:16",w:720,h:1280}],Le=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],je=["1k","2k","4k","\u81EA\u52A8"],Ve=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],Ie=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],Ge=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],sa=0;function J(e="x"){return sa+=1,`${e}_${Date.now().toString(36)}${sa.toString(36)}`}function He(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:J("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}function oa(e){switch(e){case"image":return{w:240,h:268};case"audio":return{w:240,h:140};case"text":return{w:230,h:160};case"config":return{w:240,h:176};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function $e(e,n,r={}){let a=oa(e),l={id:J(e[0]),type:e,x:Math.round(n.x-a.w/2),y:Math.round(n.y-a.h/2),w:a.w,h:a.h,name:"",status:"idle",z:e==="group"?1:2,...r};return e==="text"&&(l.text=r.text??""),e==="config"&&(l.modelKey=r.modelKey??"",l.ratio=r.ratio??"1:1",l.count=r.count??1),e==="image"&&(l.prompt=r.prompt??"",l.ratio=r.ratio??"1:1",l.locked=r.locked??!0),e==="audio"&&(l.prompt=r.prompt??""),l}function qe(e="openai"){let n=Ie.find(r=>r.id===e)||Ie[0];return{id:J("ch"),name:"",protocol:n.id,baseUrl:n.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function Ha(e,n){return`${e}:${n}`}function De(e,n){if(!n)return null;let[r,...a]=n.split(":"),l=e.find(m=>m.id===r);if(!l)return null;let t=l.models.find(m=>m.id===a.join(":"));return t?{channel:l,model:t,label:t.label||t.id}:null}function Ee(e,n="image"){let r=[];for(let a of e)if(a.enabled)for(let l of a.models)l.enabled&&(l.caps||[]).includes(n)&&r.push({key:Ha(a.id,l.id),model:l,channel:a,label:l.label||l.id});return r}var Oa=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],Ka=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function Je(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:Oa.map(e=>({...e})),promptSources:[],assets:Ka.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8"},canvasCount:1},records:[],configTab:"channels",grid:"dots"}}function la(){let e=(v,p,k,E,x,D)=>{let A=$e(v,{x:p+E/2,y:k+x/2},{...D,w:E,h:x});return A.x=p,A.y=k,A},n=e("group",660,120,640,700,{name:"\u9713\u8679\u8857\u89D2"}),r=e("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),a=e("config",400,300,240,176,{ratio:"3:4",count:1}),l=e("image",700,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),t=e("image",980,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),m=e("image",700,510,240,268,{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),S=[{id:J("e"),from:r.id,to:a.id},{id:J("e"),from:a.id,to:l.id},{id:J("e"),from:a.id,to:t.id},{id:J("e"),from:a.id,to:m.id}];return{nodes:[n,r,a,l,t,m],edges:S}}function ca(e,n,r,a){if(r===a)return!1;let l=e.find(m=>m.id===r),t=e.find(m=>m.id===a);return!(!l||!t||l.type==="config"&&t.type==="config"||l.type==="group"||t.type==="group"||n.some(m=>m.from===r&&m.to===a))}function fa(e,n){let r=e.filter(v=>n.includes(v.id)&&v.type!=="group");if(!r.length)return null;let a=44,l=Math.min(...r.map(v=>v.x))-a,t=Math.min(...r.map(v=>v.y))-a-34,m=Math.max(...r.map(v=>v.x+v.w))+a,S=Math.max(...r.map(v=>v.y+v.h))+a;return $e("group",{x:(l+m)/2,y:(t+S)/2},{w:Math.round(m-l),h:Math.round(S-t),name:"\u65B0\u5206\u7EC4",childIds:r.map(v=>v.id),x:Math.round(l),y:Math.round(t)})}function da(e){return e.openCanvasId?"editor":e.view}function pa(e,n){return{...e,view:n,openCanvasId:null}}function ua(e,n){return{...e,openCanvasId:n}}function ma(e){return{...e,openCanvasId:null,view:"canvas"}}var Ua=["idle","running","done","failed"],Me=(e,n)=>Number.isFinite(e)?e:n;function Wa(e,n){if(!e||typeof e!="object")return null;let r=ke[e.type]?e.type:"text",a=oa(r),l={...e,id:typeof e.id=="string"&&e.id?e.id:`n_${n}`,type:r,x:Me(e.x,0),y:Me(e.y,0),w:Math.max(40,Me(e.w,a.w)),h:Math.max(40,Me(e.h,a.h)),name:typeof e.name=="string"?e.name:"",status:Ua.includes(e.status)?e.status:"idle",z:Me(e.z,r==="group"?3:2)};return Array.isArray(e.childIds)&&(l.childIds=e.childIds.filter(t=>typeof t=="string")),l}function Ya(e,n){if(!e||typeof e!="object")return null;let r=Array.isArray(e.nodes)?e.nodes.map(Wa).filter(Boolean):[],a=new Set(r.map(t=>t.id)),l=Array.isArray(e.edges)?e.edges.filter(t=>t&&typeof t=="object"&&a.has(t.from)&&a.has(t.to)).map((t,m)=>({id:typeof t.id=="string"&&t.id?t.id:`e_${m}`,from:t.from,to:t.to})):[];return{...e,id:typeof e.id=="string"&&e.id?e.id:`cv_${n}`,name:typeof e.name=="string"&&e.name?e.name:"\u672A\u547D\u540D\u753B\u5E03",nodes:r,edges:l,grid:ja.some(t=>t.id===e.grid)?e.grid:"dots",camera:e.camera&&typeof e.camera=="object"?e.camera:{x:0,y:0,s:1},updatedAt:Me(e.updatedAt,Date.now())}}function va(e){let n=Je();if(!e||typeof e!="object")return n;let r={...n};return Xe.some(a=>a.id===e.view)&&(r.view=e.view),typeof e.configTab=="string"&&(r.configTab=e.configTab),r.canvases=Array.isArray(e.canvases)?e.canvases.map(Ya).filter(Boolean):[],r.channels=Array.isArray(e.channels)?e.channels.filter(a=>a&&typeof a=="object").map((a,l)=>({...a,id:typeof a.id=="string"&&a.id?a.id:`ch_${l}`,name:typeof a.name=="string"?a.name:"",baseUrl:typeof a.baseUrl=="string"?a.baseUrl:"",keyHint:typeof a.keyHint=="string"?a.keyHint:"",hasKey:!!a.hasKey,enabled:a.enabled!==!1,models:Array.isArray(a.models)?a.models.filter(t=>t&&typeof t=="object").map((t,m)=>({...t,id:typeof t.id=="string"&&t.id?t.id:`m_${m}`,label:typeof t.label=="string"?t.label:"",caps:Array.isArray(t.caps)?t.caps.filter(S=>Ve.some(v=>v.id===S)):[],enabled:t.enabled!==!1})):[]})):[],r.prompts=Array.isArray(e.prompts)?e.prompts.filter(a=>a&&typeof a=="object"):n.prompts,r.assets=Array.isArray(e.assets)?e.assets.filter(a=>a&&typeof a=="object"):n.assets,r.records=Array.isArray(e.records)?e.records.filter(a=>a&&typeof a=="object"):[],r.promptSources=Array.isArray(e.promptSources)?e.promptSources.filter(a=>a&&typeof a=="object"):[],e.defaults&&typeof e.defaults=="object"&&e.defaults.image&&typeof e.defaults.image=="object"&&(r.defaults={...n.defaults,...e.defaults,image:{...n.defaults.image,...e.defaults.image}}),r.openCanvasId=r.canvases.some(a=>a.id===e.openCanvasId)?e.openCanvasId:null,r}var f=ge(require("react"),1);var g=ge(require("react"),1);var Oe=.1,Ze=3,_a=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function ga(){let e=g.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),n=g.default.useCallback(l=>{if(!l)return;let t=e.current;l.style.transform=`translate3d(${t.x}px, ${t.y}px, 0) scale(${t.s})`},[]),r=g.default.useCallback((l,t)=>{let m=e.current;m.raf=0;let S=.24,v=m.tx-m.x,p=m.ty-m.y,k=m.ts-m.s;if(Math.abs(v)<.2&&Math.abs(p)<.2&&Math.abs(k)<8e-4){m.x=m.tx,m.y=m.ty,m.s=m.ts,n(l),t?.();return}m.x+=v*S,m.y+=p*S,m.s+=k*S,n(l),t?.(),m.raf=requestAnimationFrame(()=>r(l,t))},[n]),a=g.default.useCallback((l,t,m,S,v)=>{let p=e.current;if(p.tx=t,p.ty=m,p.ts=Math.min(Ze,Math.max(Oe,S)),_a()){p.x=p.tx,p.y=p.ty,p.s=p.ts,p.raf&&cancelAnimationFrame(p.raf),p.raf=0,n(l),v?.();return}p.raf||(p.raf=requestAnimationFrame(()=>r(l,v)))},[n,r]);return g.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:n,moveTo:a}}function Qe(e,n){if(!e||!n)return"";let r=e.x+e.w,a=e.y+e.h/2,l=n.x,t=n.y+n.h/2,m=Math.max(40,Math.abs(l-r)*.45);return`M ${r} ${a} C ${r+m} ${a}, ${l-m} ${t}, ${l} ${t}`}function Fa({node:e}){let n=g.default.useRef(null);return g.default.useEffect(()=>{let r=n.current;if(!r)return;let a=r.getContext("2d"),l=480;r.width=l,r.height=l;let t=`${e.id}${e.prompt||""}`,m=7;for(let p=0;p<t.length;p++)m=(m*31+t.charCodeAt(p))%2147483647;let S=()=>(m=m*16807%2147483647)/2147483647;a.fillStyle="#141414",a.fillRect(0,0,l,l);let v=a.createRadialGradient(l*(.25+S()*.5),l*(.3+S()*.4),24,l/2,l/2,l*.8);v.addColorStop(0,"rgba(255,255,255,0.16)"),v.addColorStop(.5,"rgba(255,255,255,0.05)"),v.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=v,a.fillRect(0,0,l,l),a.strokeStyle="rgba(255,255,255,0.22)",a.lineWidth=1.5;for(let p=0;p<6;p++){let k=l*(.18+S()*.66);a.beginPath(),a.moveTo(0,k),a.lineTo(l,k+(S()-.5)*80),a.stroke()}a.strokeStyle="rgba(255,255,255,0.4)";for(let p=0;p<3;p++){let k=l*(.2+S()*.6),E=40+S()*90;a.beginPath(),S()<.5?a.arc(k,l*(.3+S()*.4),E,0,Math.PI*2):a.rect(k-E/2,l*(.3+S()*.4)-E/2,E,E),a.stroke()}},[e.id,e.prompt]),g.default.createElement("canvas",{ref:n,"aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function Xa({node:e,channels:n}){switch(e.type){case"image":return g.default.createElement("div",{className:"cf-node-media"},e.src?g.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):null,!e.src&&e.status==="running"?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):null,!e.src&&e.status!=="running"?g.default.createElement(Fa,{node:e}):null,!e.src&&e.status==="failed"?g.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25"):null);case"audio":return g.default.createElement("div",{className:"cf-node-audio"},g.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(r,a)=>g.default.createElement("span",{key:a,style:{height:`${16+a*41%66}%`}}))),g.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return g.default.createElement("div",{className:"cf-node-text"},e.text?g.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):g.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":{let r=De(n,e.modelKey);return g.default.createElement("div",{className:"cf-node-config"},g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u6A21\u578B"),g.default.createElement("b",null,r?r.label:"\u672A\u9009\u62E9")),g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u6BD4\u4F8B"),g.default.createElement("b",null,e.ratio)),g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u5F20\u6570"),g.default.createElement("b",null,e.count)))}case"group":return null;default:return null}}function ha({nodes:e,edges:n,selection:r,channels:a,grid:l,minimap:t,tool:m="select",actions:S={},onSelection:v,onMove:p,onResize:k,onConnect:E,onRemoveEdge:x,onOpenNode:D,camera:A,camApi:M,showHint:U}){let N=g.default.useRef(null),i=g.default.useRef(null),{cam:u,moveTo:K}=M,[L,_]=g.default.useState({w:1200,h:700}),[fe,Z]=g.default.useState(Math.round(u.current.s*100)),V=g.default.useRef(null),Q=g.default.useRef(null),se=g.default.useRef(null),R=g.default.useRef(null),re=g.default.useRef(null),[be,we]=g.default.useState(null),[oe,ne]=g.default.useState(null),[F,le]=g.default.useState(null),[de,w]=g.default.useState(!1),G=g.default.useCallback(()=>M.apply(N.current),[M]);g.default.useEffect(()=>{let d=i.current;if(!d)return;let b=new ResizeObserver(()=>{let $=d.getBoundingClientRect();_({w:$.width,h:$.height})});b.observe(d);let z=d.getBoundingClientRect();return _({w:z.width,h:z.height}),()=>b.disconnect()},[]),g.default.useEffect(()=>{G(),Z(Math.round(u.current.s*100))}),g.default.useEffect(()=>{let d=z=>{z.code==="Space"&&!/input|textarea/i.test(z.target.tagName)&&(w(!0),z.preventDefault())},b=z=>{z.code==="Space"&&w(!1)};return window.addEventListener("keydown",d),window.addEventListener("keyup",b),()=>{window.removeEventListener("keydown",d),window.removeEventListener("keyup",b)}},[]),g.default.useEffect(()=>{if(!A)return;let d=N.current;d&&K(d,A.x,A.y,A.s,()=>Z(Math.round(u.current.s*100)))},[A]);let te=()=>i.current.getBoundingClientRect(),ee=(d,b)=>{let z=te();return{x:(d-z.left-u.current.x)/u.current.s,y:(b-z.top-u.current.y)/u.current.s}},ve=g.default.useCallback(()=>{let d=N.current;if(!d||!e.length)return;let b=72,z=Math.min(...e.map(Y=>Y.x))-b,$=Math.min(...e.map(Y=>Y.y))-b,T=Math.max(...e.map(Y=>Y.x+Y.w))+b,ae=Math.max(...e.map(Y=>Y.y+Y.h))+b,ie=Math.min(1.35,Math.max(Oe,Math.min(L.w/(T-z),L.h/(ae-$))));K(d,b-z*ie,b-$*ie,ie,()=>Z(Math.round(u.current.s*100)))},[e,L,K,u]);g.default.useEffect(()=>{let d=setTimeout(ve,80);return()=>clearTimeout(d)},[]),g.default.useEffect(()=>{M.fit=ve},[M,ve]);let Ae=d=>{let b=N.current;if(!b)return;let z=L.w/2,$=L.h/2,T=u.current,ae=(z-T.tx)/T.ts,ie=($-T.ty)/T.ts,Y=Math.min(Ze,Math.max(Oe,T.ts*d));K(b,z-ae*Y,$-ie*Y,Y,()=>Z(Math.round(u.current.s*100)))},Ue=d=>{d.preventDefault();let b=te(),z=d.clientX-b.left,$=d.clientY-b.top,T=u.current,ae=(z-T.tx)/T.ts,ie=($-T.ty)/T.ts,Y=Math.min(Ze,Math.max(Oe,T.ts*Math.exp(-d.deltaY*.0018)));K(N.current,z-ae*Y,$-ie*Y,Y,()=>Z(Math.round(u.current.s*100)))},Ce=d=>{d.preventDefault();let b=te(),z=Math.max(0,Math.min(d.clientX-b.left,b.width-200)),$=Math.max(0,Math.min(d.clientY-b.top,b.height-40)),T=document.elementFromPoint(d.clientX,d.clientY)||d.target,ae=T.closest?.(".cf-node");if(ae){let Y=ae.dataset.id,Fe=e.find(s=>s.id===Y);Y&&!r.includes(Y)&&v([Y]),ne({kind:Fe?.type==="group"?"group":"node",id:Y,x:z,y:$});return}let ie=T.closest?.(".cf-edge");if(ie?.dataset.id){ne({kind:"edge",id:ie.dataset.id,x:z,y:$});return}ne({kind:"blank",id:null,x:z,y:$})},Be=d=>{if(oe&&ne(null),d.button===1||de||m==="pan"){d.preventDefault(),V.current={x:d.clientX,y:d.clientY,cx:u.current.tx,cy:u.current.ty},i.current.classList.add("is-grabbing"),i.current.setPointerCapture(d.pointerId);return}if(d.button!==0)return;let b=ee(d.clientX,d.clientY);R.current={x0:b.x,y0:b.y,additive:d.shiftKey},le({x:b.x,y:b.y,w:0,h:0}),i.current.setPointerCapture(d.pointerId)},X=d=>{if(V.current){let b=u.current;K(N.current,V.current.cx+(d.clientX-V.current.x),V.current.cy+(d.clientY-V.current.y),b.ts,()=>Z(Math.round(u.current.s*100)));return}if(Q.current){let b=ee(d.clientX,d.clientY);p(Q.current.ids,b.x-Q.current.p0.x,b.y-Q.current.p0.y),Q.current.p0=b;return}if(se.current){let b=ee(d.clientX,d.clientY),z=se.current,$=Math.max(140,Math.round(b.x-z.x)),T=z.locked?Math.round($*z.ratio):Math.max(80,Math.round(b.y-z.y));k(z.id,$,T);return}if(R.current){let b=ee(d.clientX,d.clientY),z=R.current;le({x:Math.min(z.x0,b.x),y:Math.min(z.y0,b.y),w:Math.abs(b.x-z.x0),h:Math.abs(b.y-z.y0)});return}re.current&&we({from:re.current,to:ee(d.clientX,d.clientY)})},Te=d=>{if(V.current){V.current=null,i.current.classList.remove("is-grabbing");return}if(Q.current){Q.current=null;return}if(se.current){se.current=null;return}if(R.current){let b=R.current;R.current=null;let z=F;if(le(null),z&&(z.w>6||z.h>6)){let $=e.filter(T=>!(T.x>z.x+z.w||T.x+T.w<z.x||T.y>z.y+z.h||T.y+T.h<z.y));v(b.additive?[...new Set([...r,...$.map(T=>T.id)])]:$.map(T=>T.id))}else b.additive||v([]);return}if(re.current){let b=ee(d.clientX,d.clientY),z=e.filter($=>$.type!=="group").find($=>b.x>=$.x&&b.x<=$.x+$.w&&b.y>=$.y&&b.y<=$.y+$.h);z&&ca(e,n,re.current,z.id)&&E(re.current,z.id),re.current=null,we(null)}},We=(d,b)=>{if(d.button!==0||d.button===1||de||m==="pan")return;d.stopPropagation();let z=d.shiftKey||d.metaKey||d.ctrlKey,$=r.includes(b.id),T;if(z?T=$?r.filter(Y=>Y!==b.id):[...r,b.id]:T=$?r:[b.id],v(T),z)return;let ae=ee(d.clientX,d.clientY),ie=b.type==="group"&&b.childIds?.length?[b.id,...b.childIds]:T.length>1?T:[b.id];Q.current={ids:ie,p0:ae},i.current.setPointerCapture(d.pointerId)},Ye=(d,b)=>{let[z,$]=String(b.ratio||"1:1").split(":").map(Number),T=Number.isFinite(z)&&Number.isFinite($)&&z>0&&$>0?$/z:1;se.current={id:b.id,x:b.x,y:b.y,locked:b.type==="image"&&b.locked!==!1,ratio:T},i.current.setPointerCapture(d.pointerId)},_e=(d,b)=>{d.stopPropagation(),re.current=b.id,we({from:b.id,to:ee(d.clientX,d.clientY)}),i.current.setPointerCapture(d.pointerId)},Se=g.default.useMemo(()=>Object.fromEntries(e.map(d=>[d.id,d])),[e]);return g.default.createElement("div",{className:"cf-board"},g.default.createElement("div",{className:`cf-stage ${l==="lines"?"cf-stage--lines":l==="blank"?"cf-stage--blank":"cf-stage--dots"}${de||m==="pan"?" is-grab":""}`,ref:i,onPointerDown:Be,onPointerMove:X,onPointerUp:Te,onPointerCancel:Te,onWheel:Ue,onContextMenu:Ce,style:{"--cf-grid":`${28*fe/100}px`}},g.default.createElement("div",{className:"cf-world",ref:N},g.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},g.default.createElement("defs",null,g.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},g.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),n.map(d=>{let b=Se[d.from],z=Se[d.to];return!b||!z?null:g.default.createElement("g",{key:d.id,className:"cf-edge","data-id":d.id},g.default.createElement("path",{d:Qe(b,z),className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),g.default.createElement("path",{d:Qe(b,z),className:"cf-edge-hit",onPointerDown:$=>{$.stopPropagation(),x(d.id)}},g.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),be?(()=>{let d=Se[be.from];return d?g.default.createElement("path",{d:Qe(d,{x:be.to.x,y:be.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),e.map(d=>g.default.createElement("div",{key:d.id,className:`cf-node${r.includes(d.id)?" is-selected":""}${d.status==="running"?" is-running":""}${d.type==="group"?" is-group":""}`,"data-id":d.id,style:{left:d.x,top:d.y,width:d.w,height:d.h,zIndex:d.type==="group"?1:2},onPointerDown:b=>We(b,d)},d.type==="group"?g.default.createElement("div",{className:"cf-node-group-head"},g.default.createElement("span",null,d.name||"\u5206\u7EC4"),d.childIds?.length?g.default.createElement("span",{className:"cf-node-group-count"},d.childIds.length," \u4E2A\u8282\u70B9"):null):g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"cf-node-head"},g.default.createElement("span",{className:"cf-node-type"},ke[d.type]),g.default.createElement("span",{className:"cf-node-name"},d.name||""),g.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:b=>_e(b,d),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),g.default.createElement("div",{className:"cf-node-body",onDoubleClick:b=>{b.stopPropagation(),D(d)}},g.default.createElement(Xa,{node:d,channels:a}))),r.includes(d.id)&&d.type!=="group"?g.default.createElement("span",{className:"cf-node-handle",onPointerDown:b=>{b.stopPropagation(),Ye(b,d)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)),F&&F.w>4?g.default.createElement("div",{className:"cf-marquee",style:{left:F.x,top:F.y,width:F.w,height:F.h}}):null),oe?g.default.createElement(Ga,{ctx:oe,nodes:e,selection:r,actions:S,onClose:()=>ne(null)}):null),t?g.default.createElement(Va,{nodes:e,cam:u.current,size:L,onJump:d=>K(N.current,L.w/2-d.x*u.current.s,L.h/2-d.y*u.current.s,u.current.s,()=>Z(Math.round(u.current.s*100)))}):null,g.default.createElement("div",{className:"cf-zoom"},g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>Ae(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),g.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:fe,"aria-label":"\u7F29\u653E",onChange:d=>{let b=N.current;if(!b)return;let z=Number(d.target.value)/100,$=u.current,T=L.w/2,ae=L.h/2;K(b,T-(T-$.tx)/$.s*z,ae-(ae-$.ty)/$.s*z,z,()=>Z(Math.round(u.current.s*100)))}}),g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>Ae(1.25),"aria-label":"\u653E\u5927"},"+"),g.default.createElement("span",{className:"cf-zoom-num"},fe,"%"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:ve},"\u9002\u5E94")),U?g.default.createElement("p",{className:"cf-editor-hint"},"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5"):null)}function Va({nodes:e,cam:n,size:r,onJump:a}){if(!e.length)return null;let l=168,t=108,m=80,S=Math.min(...e.map(i=>i.x))-m,v=Math.min(...e.map(i=>i.y))-m,p=Math.max(...e.map(i=>i.x+i.w))+m,k=Math.max(...e.map(i=>i.y+i.h))+m,E=Math.max(1,p-S),x=Math.max(1,k-v),D=Math.min(l/E,t/x),A=(l-E*D)/2,M=(t-x*D)/2,U=i=>({x:(i.x-S)*D+A,y:(i.y-v)*D+M,w:i.w*D,h:i.h*D}),N={x:(-n.x/n.s-S)*D+A,y:(-n.y/n.s-v)*D+M,w:r.w/n.s*D,h:r.h/n.s*D};return g.default.createElement("svg",{className:"cf-minimap",viewBox:`0 0 ${l} ${t}`,width:l,height:t,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:i=>{let u=i.currentTarget.getBoundingClientRect(),K=(i.clientX-u.left)/u.width*l,L=(i.clientY-u.top)/u.height*t;a({x:S+(K-A)/D,y:v+(L-M)/D})}},e.filter(i=>i.type==="group").map(i=>{let u=U(i);return g.default.createElement("rect",{key:i.id,x:u.x,y:u.y,width:u.w,height:u.h,rx:3,className:"cf-mini-group"})}),e.filter(i=>i.type!=="group").map(i=>{let u=U(i);return g.default.createElement("rect",{key:i.id,x:u.x,y:u.y,width:Math.max(3,u.w),height:Math.max(3,u.h),rx:2,className:`cf-mini-node${i.type==="image"?" cf-mini-image":""}`})}),g.default.createElement("rect",{x:N.x,y:N.y,width:Math.max(6,N.w),height:Math.max(6,N.h),rx:2,className:"cf-mini-view"}))}function Ga({ctx:e,nodes:n,selection:r,actions:a,onClose:l}){let t=e.id?n.find(v=>v.id===e.id):null,m=v=>()=>{l(),v?.()},S=(()=>{if(e.kind==="edge")return[{icon:"trash",label:"\u5220\u9664\u8FDE\u7EBF",run:m(()=>a.removeEdge?.(e.id))}];if(e.kind==="group")return[{icon:"plus",label:"\u590D\u5236\u5206\u7EC4",run:m(()=>a.duplicate?.())},{icon:"close",label:"\u53D6\u6D88\u5206\u7EC4\uFF08\u4FDD\u7559\u8282\u70B9\uFF09",run:m(()=>a.ungroup?.(e.id))},{sep:!0},{icon:"trash",label:"\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9",danger:!0,run:m(()=>a.deleteGroupDeep?.(e.id))}];if(e.kind==="node"){let v=[];return t?.type==="image"&&v.push({icon:"play",label:"\u7528\u5F53\u524D\u63D0\u793A\u8BCD\u751F\u6210",run:m(()=>a.generateNode?.(e.id))}),v.push({icon:"plus",label:"\u590D\u5236",hint:"\u2318D",run:m(()=>a.duplicate?.())}),v.push({icon:"group",label:"\u5305\u6210\u7EC4",hint:"\u2318G",disabled:r.length<2,run:m(()=>a.wrap?.())}),v.push({sep:!0}),v.push({icon:"trash",label:"\u5220\u9664",hint:"\u232B",danger:!0,run:m(()=>a.removeSelection?.())}),v}return[{icon:"image",label:"\u65B0\u5EFA\u56FE\u7247\u8282\u70B9",run:m(()=>a.addNode?.("image"))},{icon:"text",label:"\u65B0\u5EFA\u6587\u672C\u8282\u70B9",run:m(()=>a.addNode?.("text"))},{icon:"sliders",label:"\u65B0\u5EFA\u914D\u7F6E\u8282\u70B9",run:m(()=>a.addNode?.("config"))},{icon:"group",label:"\u65B0\u5EFA\u5206\u7EC4",run:m(()=>a.addNode?.("group"))},{sep:!0},{icon:"check",label:"\u5168\u9009",hint:"\u2318A",run:m(()=>a.selectAll?.())},{icon:"target",label:"\u9002\u5E94\u89C6\u56FE",hint:"0",run:m(()=>a.fit?.())}]})();return g.default.createElement("div",{className:"cf-ctx",style:{left:e.x,top:e.y},role:"menu",onPointerDown:v=>v.stopPropagation(),onContextMenu:v=>v.preventDefault()},g.default.createElement("p",{className:"cf-ctx-head"},e.kind==="blank"?"\u753B\u5E03":e.kind==="edge"?"\u8FDE\u7EBF":t?.type==="group"?t.name||"\u5206\u7EC4":`${ke[t?.type]||""}\u8282\u70B9`),S.map((v,p)=>v.sep?g.default.createElement("div",{key:`s${p}`,className:"cf-ctx-sep"}):g.default.createElement("button",{key:p,type:"button",className:"cf-ctx-item",role:"menuitem",disabled:v.disabled,onClick:v.run},g.default.createElement(W,{name:v.icon,size:14}),g.default.createElement("span",{className:"cf-ctx-item-label"},v.label),v.hint?g.default.createElement("span",{className:"cf-ctx-item-key"},v.hint):null)))}function ba({canvases:e,onOpen:n,onCreate:r,onRename:a,onDelete:l,onImport:t}){let[m,S]=f.default.useState(null),[v,p]=f.default.useState(null);return f.default.createElement("div",{className:"cf-page"},f.default.createElement("div",{className:"cf-page-inner"},f.default.createElement("div",{className:"cf-page-head"},f.default.createElement("div",null,f.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),f.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),f.default.createElement("div",{className:"cf-page-actions"},f.default.createElement(P,{icon:"upload",onClick:t},"\u5BFC\u5165\u753B\u5E03"),f.default.createElement(P,{variant:"primary",icon:"plus",onClick:r},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?f.default.createElement(me,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:f.default.createElement(P,{variant:"primary",icon:"plus",onClick:r},"\u65B0\u5EFA\u753B\u5E03")}):f.default.createElement("div",{className:"cf-card"},f.default.createElement("div",{className:"cf-list-head"},f.default.createElement("span",null,"\u540D\u79F0"),f.default.createElement("span",null,"\u5185\u5BB9"),f.default.createElement("span",null,"\u66F4\u65B0")),f.default.createElement("div",{className:"cf-canvas-list"},e.map(k=>f.default.createElement("div",{key:k.id,className:"cf-canvas-row"},f.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>n(k.id)},k.name||"\u672A\u547D\u540D\u753B\u5E03"),f.default.createElement("span",{className:"cf-canvas-meta"},k.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",k.edges.length," \u6761\u8FDE\u7EBF"),f.default.createElement("span",{className:"cf-canvas-row-actions"},f.default.createElement(q,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>S(k)}),f.default.createElement(q,{name:"trash",label:"\u5220\u9664",onClick:()=>p(k)}))))))),m?f.default.createElement(qa,{canvas:m,onClose:()=>S(null),onSubmit:k=>{a(m.id,k),S(null)}}):null,v?f.default.createElement(he,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>p(null),footer:f.default.createElement(f.default.Fragment,null,f.default.createElement(P,{onClick:()=>p(null)},"\u53D6\u6D88"),f.default.createElement(P,{variant:"danger",onClick:()=>{l(v.id),p(null)}},"\u5220\u9664"))},f.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",v.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",v.nodes.length," \u4E2A\u8282\u70B9\u548C ",v.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function qa({canvas:e,onClose:n,onSubmit:r}){let[a,l]=f.default.useState(e.name||"");return f.default.createElement(he,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:n,footer:f.default.createElement(f.default.Fragment,null,f.default.createElement(P,{onClick:n},"\u53D6\u6D88"),f.default.createElement(P,{variant:"primary",onClick:()=>r(a.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},f.default.createElement("label",{className:"cf-field"},f.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),f.default.createElement("input",{className:"cf-input",value:a,autoFocus:!0,onChange:t=>l(t.target.value),onKeyDown:t=>{t.key==="Enter"&&r(a.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var Ja=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"audio",label:"\u97F3\u9891",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"}];function xa({canvas:e,channels:n,defaults:r,onChange:a,onBack:l,say:t}){let m=ga(),{cam:S,moveTo:v}=m,[p,k]=f.default.useState([]),[E,x]=f.default.useState("select"),[D,A]=f.default.useState(typeof window<"u"&&window.__CF_DEV_PROMPT||""),[M,U]=f.default.useState(r?.ratio||"1:1"),[N,i]=f.default.useState(r?.count||1),[u,K]=f.default.useState(r?.modelKey||""),[L,_]=f.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[fe,Z]=f.default.useState([]),V=f.default.useRef(0),[Q,se]=f.default.useState(1024),[R,re]=f.default.useState(1024),[be,we]=f.default.useState(null),oe=f.default.useRef(null),ne=f.default.useRef(null);f.default.useEffect(()=>{if(!L)return;let s=I=>{oe.current?.contains(I.target)||_(null)},y=I=>{I.key==="Escape"&&_(null)};return window.addEventListener("pointerdown",s),window.addEventListener("keydown",y),()=>{window.removeEventListener("pointerdown",s),window.removeEventListener("keydown",y)}},[L]);let F=e.nodes,le=e.edges,de=F.filter(s=>p.includes(s.id)),w=de.length===1?de[0]:null,G=f.default.useMemo(()=>w?le.filter(s=>s.to===w.id).map(s=>F.find(y=>y.id===s.from)).filter(s=>s&&s.type!=="group"&&s.type!=="config"):[],[w,le,F]),te=s=>{let y=s.map((I,H)=>({id:`${Date.now()}_${H}_${I.name||"paste"}`,name:I.name||"\u7C98\u8D34\u7684\u56FE\u7247",url:URL.createObjectURL(I),file:I}));y.length&&(Z(I=>[...I,...y]),t?.(`\u5DF2\u52A0\u5165 ${y.length} \u5F20\u53C2\u8003\u56FE`))},ee=s=>Z(y=>{let I=y.find(H=>H.id===s);return I?.url&&URL.revokeObjectURL(I.url),y.filter(H=>H.id!==s)}),ve=()=>ne.current?.click(),Ae=s=>{te([...s.target.files||[]]),s.target.value=""},Ue=s=>{let y=s.clipboardData;if(!y)return;let I=[];for(let H of Array.from(y.items||[]))if(H.kind==="file"&&H.type.startsWith("image/")){let O=H.getAsFile();O&&I.push(O)}if(!I.length)for(let H of Array.from(y.files||[]))H.type.startsWith("image/")&&I.push(H);I.length&&(s.preventDefault(),te(I))},Ce=Ee(n,"image"),Be=De(n,u)||Ce[0]||null;f.default.useEffect(()=>{w&&(w.type==="image"||w.type==="audio")&&(A(w.prompt||""),w.ratio&&U(w.ratio))},[w?.id]);let X=s=>a(s),Te=(s,y)=>X(I=>({nodes:I.nodes.map(H=>H.id===s?{...H,...y}:H)})),We=(s,y,I)=>{let H=new Set(s);X(O=>({nodes:O.nodes.map(pe=>H.has(pe.id)?{...pe,x:Math.round(pe.x+y),y:Math.round(pe.y+I)}:pe)}))},Ye=(s,y,I)=>Te(s,{w:y,h:I}),_e=(s,y)=>X(I=>({edges:[...I.edges,{id:J("e"),from:s,to:y}]})),Se=s=>X(y=>({edges:y.edges.filter(I=>I.id!==s)})),xe=s=>{let y=S.current,I={x:(window.innerWidth/2-y.tx)/y.s,y:(window.innerHeight/2-y.ty)/y.s},H=$e(s,I,s==="config"?{modelKey:u||Ce[0]?.key||"",ratio:M,count:N}:{});X(O=>({nodes:[...O.nodes,H]})),k([H.id]),t?.(`\u5DF2\u65B0\u5EFA${ke[s]}\u8282\u70B9`)},d=()=>{let s=D.trim();if(!s)return;let y=w&&w.type==="image"?w:null;if(y){let ce=y.id;X(ue=>({nodes:ue.nodes.map(ye=>ye.id===ce?{...ye,prompt:s,status:"running",ratio:M}:ye)})),setTimeout(()=>{X(ue=>({nodes:ue.nodes.map(ye=>ye.id===ce&&ye.status==="running"?{...ye,status:"done"}:ye)}))},900),t?.("\u5F00\u59CB\u751F\u6210");return}let I=S.current,H={x:(window.innerWidth/2-I.tx)/I.s,y:(window.innerHeight/2-I.ty)/I.s},O=Array.from({length:N},(ce,ue)=>$e("image",{x:H.x+ue*260,y:H.y},{prompt:s,ratio:M,status:"running"})),pe=new Set(O.map(ce=>ce.id));X(ce=>({nodes:[...ce.nodes,...O]})),k(O.map(ce=>ce.id)),setTimeout(()=>{X(ce=>({nodes:ce.nodes.map(ue=>pe.has(ue.id)&&ue.status==="running"?{...ue,status:"done"}:ue)}))},900),A(""),t?.("\u5F00\u59CB\u751F\u6210")},b=()=>{let s=fa(F,p);s&&(X(y=>({nodes:[s,...y.nodes]})),k([s.id]))},z=()=>{let s=new Set(p);s.size&&(X(y=>({nodes:y.nodes.filter(I=>!s.has(I.id)),edges:y.edges.filter(I=>!s.has(I.from)&&!s.has(I.to))})),k([]))},$=()=>{let s=F.filter(O=>p.includes(O.id));if(!s.length)return;let y={},I=s.map(O=>{let pe=J(O.type[0]);return y[O.id]=pe,{...O,id:pe,x:O.x+40,y:O.y+40,status:"idle"}}),H=le.filter(O=>y[O.from]&&y[O.to]).map(O=>({id:J("e"),from:y[O.from],to:y[O.to]}));X(O=>({nodes:[...O.nodes,...I],edges:[...O.edges,...H]})),k(I.map(O=>O.id))},Fe={duplicate:$,wrap:b,removeSelection:z,removeEdge:Se,addNode:xe,selectAll:()=>k(F.map(s=>s.id)),fit:()=>m.fit?.(),generateNode:s=>{X(y=>({nodes:y.nodes.map(I=>I.id===s?{...I,status:"running"}:I)})),setTimeout(()=>{X(y=>({nodes:y.nodes.map(I=>I.id===s&&I.status==="running"?{...I,status:"done"}:I)}))},900),t?.("\u5F00\u59CB\u751F\u6210")},ungroup:s=>{X(y=>({nodes:y.nodes.filter(I=>I.id!==s)})),k([]),t?.("\u5DF2\u53D6\u6D88\u5206\u7EC4\uFF0C\u8282\u70B9\u4FDD\u7559")},deleteGroupDeep:s=>{X(y=>{let I=y.nodes.find(O=>O.id===s),H=new Set([s,...I?.childIds||[]]);return{nodes:y.nodes.filter(O=>!H.has(O.id)),edges:y.edges.filter(O=>!H.has(O.from)&&!H.has(O.to))}}),k([]),t?.("\u5DF2\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9")}};return f.default.useEffect(()=>{let s=y=>{if(/input|textarea|select/i.test(y.target.tagName))return;let I=y.metaKey||y.ctrlKey;if(I&&y.key.toLowerCase()==="d"){y.preventDefault(),$();return}if(I&&y.key.toLowerCase()==="g"){y.preventDefault(),b();return}if(y.key==="Delete"||y.key==="Backspace"){y.preventDefault(),z();return}if(y.key==="Escape"){k([]);return}let H=y.key.toLowerCase();H==="v"&&x("select"),H==="h"&&x("pan"),H==="t"&&xe("text"),H==="i"&&xe("image"),H==="a"&&xe("audio"),H==="c"&&xe("config"),H==="g"&&xe("group")};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[F,le,p,D,M,N,u]),f.default.createElement("div",{className:"cf-editor"},f.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},f.default.createElement(q,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:l}),f.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),Ja.map((s,y)=>s.sep?f.default.createElement("span",{key:`s${y}`,className:"cf-rail-sep","aria-hidden":"true"}):f.default.createElement("button",{key:s.id,type:"button",className:`cf-rail-btn${E===s.id?" is-on":""}`,title:`${s.label}  ${s.key}`,"aria-label":s.label,"aria-pressed":E===s.id,onClick:()=>{if(s.id==="focus"){m.fit?.();return}if(["text","image","audio","config","group"].includes(s.id)){xe(s.id);return}x(s.id)}},f.default.createElement(W,{name:s.icon,size:18})))),f.default.createElement("div",{className:"cf-editor-main"},f.default.createElement(ha,{nodes:F,edges:le,selection:p,channels:n,grid:e.grid||"dots",tool:E,minimap:!0,camera:be,camApi:m,showHint:!de.length,onSelection:k,onMove:We,onResize:Ye,onConnect:_e,onRemoveEdge:Se,onOpenNode:s=>{k([s.id]),A(s.prompt||s.text||"")},actions:Fe}),f.default.createElement("div",{className:"cf-composer"},fe.length?f.default.createElement("div",{className:"cf-composer-refs"},fe.map(s=>f.default.createElement("span",{key:s.id,className:"cf-ref-thumb"},f.default.createElement("img",{src:s.url,alt:s.name}),f.default.createElement("button",{type:"button",className:"cf-ref-x",onClick:()=>ee(s.id),"aria-label":`\u79FB\u9664 ${s.name}`},"\xD7")))):null,f.default.createElement("textarea",{className:"cf-composer-input",value:D,rows:3,placeholder:w?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:s=>A(s.target.value),onPaste:Ue,onCompositionStart:()=>{V.current=Date.now()},onCompositionEnd:()=>{V.current=Date.now()},onKeyDown:s=>{s.key==="Enter"&&(s.nativeEvent.isComposing||Date.now()-V.current<500||s.shiftKey||(s.preventDefault(),V.current=0,d()))}}),f.default.createElement("div",{className:"cf-composer-bar",ref:oe},f.default.createElement("div",{className:"cf-composer-left"},f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>_(L==="ref"?null:"ref"),"aria-expanded":L==="ref","aria-haspopup":"menu"},f.default.createElement(W,{name:"plus",size:15}),"\u53C2\u8003",fe.length+G.length?f.default.createElement("span",{className:"cf-bar-badge"},fe.length+G.length):null),L==="ref"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),G.length?G.map(s=>f.default.createElement("button",{key:s.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{A(y=>`${y}${y&&!y.endsWith(" ")?" ":""}@${ke[s.type]}${s.name?`:${s.name}`:""} `),_(null)}},f.default.createElement(W,{name:s.type==="image"?"image":s.type==="text"?"text":"audio",size:14}),f.default.createElement("span",{className:"cf-menu-label"},s.name||(s.prompt||s.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):f.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),f.default.createElement("div",{className:"cf-menu-sep"}),f.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:ve},f.default.createElement(W,{name:"upload",size:14}),f.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),f.default.createElement("input",{ref:ne,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:Ae})):null),f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>{if(L!=="ratio"){let s=M.split(":").map(Number);s.length===2&&s.every(y=>Number.isFinite(y)&&y>0)&&(se(s[0]),re(s[1]))}_(L==="ratio"?null:"ratio")},"aria-expanded":L==="ratio","aria-haspopup":"menu"},f.default.createElement(W,{name:"frame",size:15}),M),L==="ratio"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u753B\u9762\u6BD4\u4F8B"),Ne.map(s=>f.default.createElement("button",{key:s.id,type:"button",className:`cf-menu-item${M===s.id?" is-on":""}`,role:"menuitem",onClick:()=>{U(s.id),_(null)}},f.default.createElement("span",{className:"cf-menu-label"},s.label),f.default.createElement("span",{className:"cf-menu-meta"},s.w," \xD7 ",s.h))),f.default.createElement("div",{className:"cf-menu-sep"}),f.default.createElement("p",{className:"cf-menu-head"},"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),f.default.createElement("div",{className:"cf-menu-custom"},f.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:Q,"aria-label":"\u5BBD",onChange:s=>se(Number(s.target.value.replace(/\D/g,""))||0)}),f.default.createElement("span",{className:"cf-menu-x","aria-hidden":"true"},"\xD7"),f.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:R,"aria-label":"\u9AD8",onChange:s=>re(Number(s.target.value.replace(/\D/g,""))||0)}),f.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",disabled:!Q||!R,onClick:()=>{U(`${Q}:${R}`),_(null)}},"\u5E94\u7528"))):null),f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>_(L==="count"?null:"count"),"aria-expanded":L==="count","aria-haspopup":"menu"},N," \u5F20",f.default.createElement(W,{name:"chevron",size:12})),L==="count"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(s=>f.default.createElement("button",{key:s,type:"button",className:`cf-menu-item${N===s?" is-on":""}`,role:"menuitem",onClick:()=>{i(s),_(null)}},s," \u5F20"))):null)),f.default.createElement("div",{className:"cf-composer-right"},f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>_(L==="model"?null:"model"),"aria-expanded":L==="model","aria-haspopup":"menu"},f.default.createElement(W,{name:"bars",size:15}),f.default.createElement("span",{className:"cf-bar-label"},Be?Be.label:"\u9009\u62E9\u6A21\u578B"),f.default.createElement(W,{name:"chevron",size:12})),L==="model"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},f.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),Ce.length?Ce.map(s=>f.default.createElement("button",{key:s.key,type:"button",className:`cf-menu-item${s.key===u?" is-on":""}`,role:"menuitem",onClick:()=>{K(s.key),_(null)}},f.default.createElement("span",{className:"cf-menu-label"},s.label),f.default.createElement("span",{className:"cf-menu-meta"},s.channel.name||s.channel.protocol))):f.default.createElement("p",{className:"cf-menu-empty"},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0")):null),de.length?f.default.createElement("span",{style:{display:"inline-flex",gap:2}},f.default.createElement(q,{name:"group",label:"\u5305\u6210\u7EC4",onClick:b}),f.default.createElement(q,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:z})):null,f.default.createElement("button",{type:"button",className:"cf-send",onClick:d,disabled:!D.trim(),"aria-label":"\u53D1\u9001\u6D88\u606F","data-tip":"\u53D1\u9001\u6D88\u606F"},f.default.createElement(W,{name:"arrowUp",size:17})))))))}var h=ge(require("react"),1);function ya({channels:e,defaults:n,records:r,prompt:a,onPrompt:l,onCreateRecord:t,onDeleteRecords:m,onLookupPrompts:S,say:v}){let p=l,[k,E]=h.default.useState(n?.ratio||"1:1"),[x,D]=h.default.useState(n?.quality||"\u81EA\u52A8"),[A,M]=h.default.useState(n?.resolution||"\u81EA\u52A8"),[U,N]=h.default.useState(n?.modelKey||""),[i,u]=h.default.useState(1024),[K,L]=h.default.useState(1024),[_,fe]=h.default.useState(!0),[Z,V]=h.default.useState([]),[Q,se]=h.default.useState(!1),[R,re]=h.default.useState([]),[be,we]=h.default.useState(!1),oe=Ee(e,"image"),ne=De(e,U)||oe[0]||null,F=w=>{E(w);let G=Ne.find(te=>te.id===w);G&&(u(G.w),L(G.h))},le=()=>{let w=a.trim();if(!w){v?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}let G=ee=>{let ve=Math.max(256,Math.min(4096,Math.round(ee)));return _?Math.round(ve/16)*16:ve};se(!0);let te={id:`r${Date.now().toString(36)}`,prompt:w,model:ne?ne.label:"\u672A\u9009\u62E9\u6A21\u578B",ratio:k,size:`${G(i)}x${G(K)}`,quality:x,resolution:A,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};t?.(te),setTimeout(()=>{se(!1),re(ee=>[{...te,id:`img${Date.now().toString(36)}`},...ee]),v?.("\u751F\u6210\u5B8C\u6210")},1100)},de=w=>V(G=>G.includes(w)?G.filter(te=>te!==w):[...G,w]);return h.default.createElement("div",{className:"cf-page"},h.default.createElement("div",{className:"cf-page-inner"},h.default.createElement("div",{className:"cf-studio"},h.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},h.default.createElement("div",{className:"cf-card"},h.default.createElement("div",{className:"cf-card-head"},h.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),h.default.createElement("span",{className:"cf-card-count"},r.length)),h.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)"}},h.default.createElement("div",{style:{display:"flex",gap:6}},h.default.createElement(P,{size:"sm",icon:"plus",onClick:()=>p("")},"\u65B0\u5EFA"),h.default.createElement(P,{size:"sm",onClick:()=>V(r.map(w=>w.id))},"\u5168\u9009"),h.default.createElement(P,{size:"sm",variant:"danger",disabled:!Z.length,onClick:()=>{m?.(Z),V([])}},"\u5220\u9664")),r.length===0?h.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):h.default.createElement("div",{className:"cf-record-list"},r.map(w=>h.default.createElement("div",{key:w.id,style:{display:"flex",alignItems:"center",gap:6}},h.default.createElement("input",{type:"checkbox",checked:Z.includes(w.id),onChange:()=>de(w.id),"aria-label":`\u9009\u62E9 ${w.prompt}`}),h.default.createElement("button",{type:"button",className:"cf-record",style:{flex:1,minWidth:0},onClick:()=>{p(w.prompt),E(w.ratio)}},h.default.createElement("span",{className:"cf-record-prompt"},w.prompt),h.default.createElement("span",{className:"cf-record-meta"},w.model," \xB7 ",w.size," \xB7 ",w.at)))))))),h.default.createElement("div",{className:"cf-studio-col"},h.default.createElement("div",{className:"cf-card"},h.default.createElement("div",{className:"cf-card-head"},h.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),h.default.createElement("div",{className:"cf-card-body cf-form"},h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("div",{className:"cf-form-head"},h.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),h.default.createElement("div",{className:"cf-form-head-actions"},h.default.createElement(P,{size:"sm",icon:"book",onClick:()=>S?.()},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),h.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:a,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:w=>p(w.target.value)})),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("div",{className:"cf-form-head"},h.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),h.default.createElement("div",{className:"cf-form-head-actions"},h.default.createElement(P,{size:"sm",onClick:()=>v?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u526A\u5207\u677F"),h.default.createElement(P,{size:"sm",icon:"upload",onClick:()=>v?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u4E0A\u4F20"))),h.default.createElement("div",{className:"cf-drop"},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC")),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),h.default.createElement("div",{style:{position:"relative"}},h.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>we(w=>!w)},h.default.createElement(W,{name:"sparkle",size:13}),h.default.createElement("span",null,ne?ne.label:"\u9009\u62E9\u6A21\u578B"),h.default.createElement(W,{name:"chevron",size:12})),be?h.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},oe.length?oe.map(w=>h.default.createElement("button",{key:w.key,type:"button",className:`cf-menu-item${w.key===(U||oe[0]?.key)?" is-on":""}`,onClick:()=>{N(w.key),we(!1)}},w.label," ",h.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",w.channel.name||w.channel.protocol))):h.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),h.default.createElement("div",{className:"cf-chips"},Le.map(w=>h.default.createElement("button",{key:w,type:"button",className:`cf-chip${x===w?" is-on":""}`,onClick:()=>D(w)},w)))),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("div",{className:"cf-form-head"},h.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),h.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},h.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),h.default.createElement("input",{type:"checkbox",checked:_,onChange:w=>fe(w.target.checked)}))),h.default.createElement("div",{className:"cf-size-row"},h.default.createElement("input",{className:"cf-input cf-input--num",value:i,"aria-label":"\u5BBD",onChange:w=>u(Number(w.target.value.replace(/\D/g,""))||0)}),h.default.createElement(W,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),h.default.createElement("input",{className:"cf-input cf-input--num",value:K,"aria-label":"\u9AD8",onChange:w=>L(Number(w.target.value.replace(/\D/g,""))||0)})),h.default.createElement("div",{className:"cf-chips"},Ne.map(w=>h.default.createElement("button",{key:w.id,type:"button",className:`cf-chip cf-chip--tag${k===w.id?" is-on":""}`,onClick:()=>F(w.id)},w.label)))),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),h.default.createElement("div",{className:"cf-chips"},je.map(w=>h.default.createElement("button",{key:w,type:"button",className:`cf-chip${A===w?" is-on":""}`,onClick:()=>M(w)},w)))),h.default.createElement(P,{variant:"primary",icon:Q?"refresh":"play",onClick:le,disabled:Q||!a.trim()},Q?"\u751F\u6210\u4E2D\u2026":"\u5F00\u59CB\u751F\u6210")))),h.default.createElement("div",{className:"cf-studio-col"},h.default.createElement("div",{className:"cf-card"},h.default.createElement("div",{className:"cf-card-head"},h.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),h.default.createElement("span",{className:"cf-card-count"},R.length)),h.default.createElement("div",{className:"cf-card-body"},R.length===0?h.default.createElement(me,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):h.default.createElement("div",{className:"cf-results"},R.map(w=>h.default.createElement(Qa,{key:w.id,record:w})))))))))}function Qa({record:e}){let n=h.default.useRef(null);return h.default.useEffect(()=>{let r=n.current;if(!r)return;let a=320;r.width=a,r.height=a;let l=r.getContext("2d"),t=11;for(let v of`${e.prompt}${e.id}`)t=(t*31+v.charCodeAt(0))%2147483647;let m=()=>(t=t*16807%2147483647)/2147483647;l.fillStyle="#141414",l.fillRect(0,0,a,a);let S=l.createRadialGradient(a*m(),a*m(),20,a/2,a/2,a*.7);S.addColorStop(0,"rgba(255,255,255,0.18)"),S.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=S,l.fillRect(0,0,a,a),l.strokeStyle="rgba(255,255,255,0.3)",l.lineWidth=1.4;for(let v=0;v<5;v++){let p=a*(.2+m()*.6);l.beginPath(),l.moveTo(0,p),l.lineTo(a,p+(m()-.5)*60),l.stroke()}},[e.id,e.prompt]),h.default.createElement("figure",{className:"cf-result",title:`${e.prompt}
${e.model} \xB7 ${e.size}`},h.default.createElement("canvas",{ref:n,"aria-label":e.prompt}))}var B=ge(require("react"),1);var Re=6;function wa({prompts:e,sources:n,onUse:r,onBack:a,returnTo:l}){let[t,m]=B.default.useState(""),[S,v]=B.default.useState("\u5168\u90E8"),[p,k]=B.default.useState("\u5168\u90E8"),[E,x]=B.default.useState(Re),D=["\u5168\u90E8",...new Set(e.map(i=>i.category).filter(Boolean))],A=["\u5168\u90E8",...new Set(e.flatMap(i=>i.tags||[]))],M=e.filter(i=>{if(S!=="\u5168\u90E8"&&i.category!==S||p!=="\u5168\u90E8"&&!(i.tags||[]).includes(p))return!1;if(!t)return!0;let u=t.toLowerCase();return(i.title||"").toLowerCase().includes(u)||(i.text||"").toLowerCase().includes(u)||(i.tags||[]).some(K=>K.toLowerCase().includes(u))}),U=M.slice(0,E),N=M.length>U.length;return B.default.useEffect(()=>{x(Re)},[t,S,p]),B.default.createElement("div",{className:"cf-page"},B.default.createElement("div",{className:"cf-page-inner"},B.default.createElement("div",{className:"cf-title-center"},B.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),B.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD"),l&&a?B.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:a},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),B.default.createElement("div",{className:"cf-split"},B.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},B.default.createElement("div",{className:"cf-filter-group"},B.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),B.default.createElement("div",{className:"cf-filter-chips"},D.map(i=>B.default.createElement("button",{key:i,type:"button",className:`cf-chip cf-chip--tag${S===i?" is-on":""}`,onClick:()=>v(i)},i)))),B.default.createElement("div",{className:"cf-filter-group"},B.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),B.default.createElement("div",{className:"cf-filter-chips"},A.map(i=>B.default.createElement("button",{key:i,type:"button",className:`cf-chip cf-chip--tag${p===i?" is-on":""}`,onClick:()=>k(i)},i))))),B.default.createElement("div",null,B.default.createElement("div",{className:"cf-search"},B.default.createElement(W,{name:"search",size:15}),B.default.createElement("input",{className:"cf-input",value:t,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u6216\u6807\u7B7E",onChange:i=>m(i.target.value)})),n.length===0?B.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u63D0\u793A\u8BCD\u6765\u6E90\u3002\u5230\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u540E\uFF0C\u8FD9\u91CC\u4F1A\u5206\u9875\u52A0\u8F7D\u66F4\u591A\u3002"):null,M.length===0?B.default.createElement(me,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:t||S!=="\u5168\u90E8"||p!=="\u5168\u90E8"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u6765\u6E90\u3002"}):B.default.createElement(B.default.Fragment,null,B.default.createElement("ul",{className:"cf-prompt-grid"},U.map(i=>B.default.createElement("li",{key:i.id,className:"cf-prompt-card"},B.default.createElement("span",{className:"cf-prompt-title"},i.title),B.default.createElement("span",{className:"cf-prompt-text"},i.text),B.default.createElement("span",{className:"cf-prompt-tags"},i.category?B.default.createElement("span",{className:"cf-tag"},i.category):null,(i.tags||[]).map(u=>B.default.createElement("span",{key:u,className:"cf-tag"},u))),B.default.createElement("span",{style:{display:"flex",gap:6,marginTop:4}},B.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>r(i)},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"))))),N?B.default.createElement("div",{className:"cf-more"},B.default.createElement(P,{onClick:()=>x(i=>i+Re)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",M.length-U.length," \u6761\uFF09")):B.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))))}var C=ge(require("react"),1);function ka({assets:e,onSave:n,onDelete:r,onImport:a,say:l}){let[t,m]=C.default.useState(""),[S,v]=C.default.useState("all"),[p,k]=C.default.useState(null),[E,x]=C.default.useState(null),D=e.filter(M=>{if(S!=="all"&&M.kind!==S)return!1;if(!t)return!0;let U=t.toLowerCase();return[M.title,M.text,M.source,...M.tags||[]].filter(Boolean).some(N=>String(N).toLowerCase().includes(U))});return C.default.createElement("div",{className:"cf-page"},C.default.createElement("div",{className:"cf-page-inner"},C.default.createElement("div",{className:"cf-page-head"},C.default.createElement("div",null,C.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),C.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),C.default.createElement("div",{className:"cf-page-actions"},C.default.createElement(P,{icon:"upload",onClick:a},"\u5BFC\u5165\u8D44\u4EA7"),C.default.createElement(P,{icon:"download",onClick:()=>{let M=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),U=document.createElement("a");U.href=URL.createObjectURL(M),U.download="my-assets.json",U.click(),setTimeout(()=>URL.revokeObjectURL(U.href),2e3),l?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),C.default.createElement(P,{variant:"primary",icon:"plus",onClick:()=>k({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),C.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},C.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},C.default.createElement("div",{className:"cf-filter-group"},C.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),C.default.createElement("div",{className:"cf-filter-chips"},Ge.map(M=>C.default.createElement("button",{key:M.id,type:"button",className:`cf-chip cf-chip--tag${S===M.id?" is-on":""}`,onClick:()=>v(M.id)},M.label))))),C.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},C.default.createElement(W,{name:"search",size:15}),C.default.createElement("input",{className:"cf-input",value:t,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:M=>m(M.target.value)}))),D.length===0?C.default.createElement(me,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:t||S!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:C.default.createElement(P,{variant:"primary",icon:"plus",onClick:()=>k({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):C.default.createElement("div",{className:"cf-asset-grid"},D.map(M=>C.default.createElement("div",{key:M.id,className:"cf-asset"},C.default.createElement("div",{className:"cf-asset-thumb"},M.kind==="image"&&M.cover?C.default.createElement("img",{src:M.cover,alt:M.title}):C.default.createElement(W,{name:M.kind==="image"?"image":M.kind==="video"?"play":"text",size:22})),C.default.createElement("div",{className:"cf-asset-body"},C.default.createElement("span",{className:"cf-asset-title"},M.title||"\u672A\u547D\u540D\u8D44\u4EA7"),C.default.createElement("span",{className:"cf-asset-meta"},M.source||"\u6765\u6E90\u672A\u6CE8\u660E",M.tags?.length?` \xB7 ${M.tags.join(" / ")}`:""),C.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},C.default.createElement(q,{name:"edit",label:"\u7F16\u8F91",onClick:()=>k({...M})}),C.default.createElement(q,{name:"trash",label:"\u5220\u9664",onClick:()=>x(M)}))))))),p?C.default.createElement(Za,{asset:p,onClose:()=>k(null),onSave:M=>{let U=M.id?e.map(N=>N.id===M.id?M:N):[...e,{...M,id:J("a")}];n(U),k(null),l?.(M.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,E?C.default.createElement(he,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>x(null),footer:C.default.createElement(C.default.Fragment,null,C.default.createElement(P,{onClick:()=>x(null)},"\u53D6\u6D88"),C.default.createElement(P,{variant:"danger",onClick:()=>{r(E.id),x(null),l?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},C.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",E.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function Za({asset:e,onClose:n,onSave:r}){let[a,l]=C.default.useState({...e,tags:e.tags||[]}),t=(p,k)=>l(E=>({...E,[p]:k})),[m,S]=C.default.useState(""),v=a.title?.trim()&&(a.kind!=="text"||a.text?.trim());return C.default.createElement(he,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:n,footer:C.default.createElement(C.default.Fragment,null,C.default.createElement(P,{onClick:n},"\u53D6\u6D88"),C.default.createElement(P,{variant:"primary",disabled:!v,onClick:()=>r({...a,title:a.title.trim()})},"\u4FDD\u5B58"))},C.default.createElement("div",{className:"cf-field"},C.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),C.default.createElement("div",{className:"cf-chips"},Ge.filter(p=>p.id!=="all").map(p=>C.default.createElement("button",{key:p.id,type:"button",className:`cf-chip${a.kind===p.id?" is-on":""}`,onClick:()=>t("kind",p.id)},p.label)))),C.default.createElement("label",{className:"cf-field"},C.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),C.default.createElement("input",{className:"cf-input",value:a.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:p=>t("title",p.target.value)})),a.kind==="text"?C.default.createElement("label",{className:"cf-field"},C.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),C.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:a.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:p=>t("text",p.target.value)})):C.default.createElement("label",{className:"cf-field"},C.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),C.default.createElement("input",{className:"cf-input",value:a.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:p=>t("cover",p.target.value)})),C.default.createElement("label",{className:"cf-field"},C.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),C.default.createElement("input",{className:"cf-input",value:m,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:p=>S(p.target.value),onKeyDown:p=>{if(p.key!=="Enter")return;p.preventDefault();let k=m.trim();k&&(t("tags",[...new Set([...a.tags||[],k])]),S(""))}}),a.tags?.length?C.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},a.tags.map(p=>C.default.createElement("button",{key:p,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>t("tags",a.tags.filter(k=>k!==p)),title:"\u70B9\u51FB\u79FB\u9664"},p," \xD7"))):null),C.default.createElement("label",{className:"cf-field"},C.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),C.default.createElement("input",{className:"cf-input",value:a.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:p=>t("source",p.target.value)})))}var c=ge(require("react"),1);var Ra=[{id:"channels",label:"\u6E20\u9053"},{id:"proxy",label:"\u672C\u5730\u4EE3\u7406"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"},{id:"webdav",label:"WebDAV"},{id:"storage",label:"\u672C\u5730\u5B58\u50A8"}];function Na({tab:e,onTab:n,channels:r,onChannels:a,defaults:l,onDefaults:t,promptSources:m,onPromptSources:S,say:v}){let[p,k]=c.default.useState(null),[E,x]=c.default.useState(null),[D,A]=c.default.useState({name:"",url:""});return c.default.createElement("div",{className:"cf-page"},c.default.createElement("div",{className:"cf-page-inner"},c.default.createElement("div",{className:"cf-page-head"},c.default.createElement("div",null,c.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),c.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u6A21\u578B\u9009\u62E9\u3001\u540C\u6B65\u4E0E\u672C\u5730\u5B58\u50A8"))),c.default.createElement("div",{className:"cf-config-notice"},c.default.createElement("span",null,"JSON \u6587\u4EF6\u5305\u542B API Key \u548C WebDAV \u51ED\u636E\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),c.default.createElement("span",{className:"cf-config-notice-actions"},c.default.createElement(P,{size:"sm",icon:"upload",onClick:()=>{let N=document.createElement("input");N.type="file",N.accept=".json,application/json",N.onchange=async()=>{let i=N.files?.[0];if(i)try{let u=JSON.parse(await i.text());Array.isArray(u.channels)&&a(u.channels),u.defaults&&t(u.defaults),Array.isArray(u.promptSources)&&S(u.promptSources),v?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{v?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},N.click()}},"\u5BFC\u5165\u914D\u7F6E"),c.default.createElement(P,{size:"sm",icon:"download",onClick:()=>{let N={version:1,channels:r,defaults:l,promptSources:m},i=new Blob([JSON.stringify(N,null,2)],{type:"application/json"}),u=document.createElement("a");u.href=URL.createObjectURL(i),u.download="chunfeng-config.json",u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),2e3),v?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),c.default.createElement("div",{className:"cf-tabs",role:"tablist"},Ra.map(N=>c.default.createElement("button",{key:N.id,type:"button",role:"tab","aria-selected":e===N.id,className:`cf-tab${e===N.id?" is-on":""}`,onClick:()=>n(N.id)},N.label))),e==="channels"?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u8C03\u7528\u811A\u672C\u3002"),c.default.createElement(P,{icon:"plus",onClick:()=>k(qe())},"\u65B0\u589E\u6E20\u9053")),r.length===0?c.default.createElement(me,{icon:"sliders",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:c.default.createElement(P,{variant:"primary",icon:"plus",onClick:()=>k(qe())},"\u65B0\u589E\u6E20\u9053")}):c.default.createElement("div",{className:"cf-channel-list"},r.map(N=>c.default.createElement("div",{key:N.id,className:"cf-channel"},c.default.createElement("div",{className:"cf-channel-main"},c.default.createElement("span",{className:"cf-channel-name"},N.name||"\u672A\u547D\u540D\u6E20\u9053"),c.default.createElement("span",{className:"cf-channel-meta"},Ie.find(i=>i.id===N.protocol)?.label||N.protocol," \xB7 ",N.models.length," \u4E2A\u6A21\u578B"," \xB7 ",N.baseUrl,N.keyHint?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${N.keyHint}`:" \xB7 \u672A\u586B\u5BC6\u94A5")),c.default.createElement("span",{className:"cf-channel-actions"},c.default.createElement(q,{name:"edit",label:"\u7F16\u8F91",onClick:()=>k({...N})}),c.default.createElement(q,{name:"trash",label:"\u5220\u9664",onClick:()=>x(N)})))))):null,e==="defaults"?c.default.createElement(en,{channels:r,defaults:l,onDefaults:t}):null,e==="sources"?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B\u6765\u6E90\u5206\u9875\u52A0\u8F7D\u3002\u7559\u7A7A\u65F6\u53EA\u663E\u793A\u5185\u7F6E\u63D0\u793A\u8BCD\u3002")),c.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},c.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},c.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:D.name,onChange:N=>A(i=>({...i,name:N.target.value}))}),c.default.createElement("input",{className:"cf-input",placeholder:"\u63D0\u793A\u8BCD\u6765\u6E90\u5730\u5740\uFF08JSON\uFF09",value:D.url,onChange:N=>A(i=>({...i,url:N.target.value}))}),c.default.createElement(P,{variant:"primary",disabled:!D.url.trim(),onClick:()=>{S([...m,{id:J("src"),name:D.name.trim()||"\u672A\u547D\u540D\u6765\u6E90",url:D.url.trim()}]),A({name:"",url:""}),v?.("\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),m.length===0?c.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002"):c.default.createElement("div",{style:{display:"grid",gap:2}},m.map(N=>c.default.createElement("div",{key:N.id,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},c.default.createElement("span",{style:{fontSize:13}},N.name),c.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},N.url),c.default.createElement(q,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>S(m.filter(i=>i.id!==N.id)),style:{marginInlineStart:"auto"}})))))):null,e==="proxy"?c.default.createElement(ea,{title:"\u672C\u5730\u4EE3\u7406",desc:"\u8BA9\u51FA\u56FE\u8BF7\u6C42\u7ECF\u8FC7\u672C\u673A\u4EE3\u7406\u3002",items:["\u4EE3\u7406\u5730\u5740\uFF08http://127.0.0.1:7890\uFF09","\u4EC5\u5BF9\u6307\u5B9A\u6E20\u9053\u751F\u6548","\u8FDE\u901A\u6027\u6D4B\u8BD5"]}):null,e==="webdav"?c.default.createElement(ea,{title:"WebDAV",desc:"\u628A\u753B\u5E03\u548C\u8D44\u4EA7\u540C\u6B65\u5230\u81EA\u5DF1\u7684 WebDAV\u3002",items:["\u670D\u52A1\u5668\u5730\u5740","\u8D26\u53F7\u4E0E\u5BC6\u7801","\u540C\u6B65\u8303\u56F4\uFF1A\u753B\u5E03 / \u8D44\u4EA7 / \u63D0\u793A\u8BCD"]}):null,e==="storage"?c.default.createElement(ea,{title:"\u672C\u5730\u5B58\u50A8",desc:"\u6570\u636E\u76EE\u524D\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\uFF1B\u63A5\u4E0A Host \u540E\u4F1A\u843D\u5230 ~/.dsh/dsh-chunfeng-image/\u3002",items:["\u753B\u5E03\u4E0E\u8282\u70B9","\u751F\u6210\u7684\u56FE\u7247\u6587\u4EF6","\u914D\u7F6E\u6587\u4EF6\uFF08\u542B\u5BC6\u94A5\u51ED\u8BC1\uFF09"]}):null),p?c.default.createElement(an,{channel:p,onClose:()=>k(null),onSave:N=>{let i=r.some(u=>u.id===N.id);a(i?r.map(u=>u.id===N.id?N:u):[...r,N]),k(null),v?.(i?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,E?c.default.createElement(he,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>x(null),footer:c.default.createElement(c.default.Fragment,null,c.default.createElement(P,{onClick:()=>x(null)},"\u53D6\u6D88"),c.default.createElement(P,{variant:"danger",onClick:()=>{a(r.filter(N=>N.id!==E.id)),x(null),v?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},c.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",E.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",E.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function en({channels:e,defaults:n,onDefaults:r}){let a=Ee(e,"image"),l=t=>r({...n,image:{...n.image,...t}});return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),c.default.createElement("div",{className:"cf-defaults"},c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),c.default.createElement("select",{className:"cf-input",value:n.image.modelKey||"",onChange:t=>l({modelKey:t.target.value})},c.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),a.map(t=>c.default.createElement("option",{key:t.key,value:t.key},t.label," \xB7 ",t.channel.name||t.channel.protocol))),a.length===0?c.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),c.default.createElement("div",{className:"cf-chips"},Ne.map(t=>c.default.createElement("button",{key:t.id,type:"button",className:`cf-chip${n.image.ratio===t.id?" is-on":""}`,onClick:()=>l({ratio:t.id})},t.label)))),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),c.default.createElement("div",{className:"cf-chips"},Le.map(t=>c.default.createElement("button",{key:t,type:"button",className:`cf-chip${n.image.quality===t?" is-on":""}`,onClick:()=>l({quality:t})},t)))),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),c.default.createElement("div",{className:"cf-chips"},je.map(t=>c.default.createElement("button",{key:t,type:"button",className:`cf-chip${n.image.resolution===t?" is-on":""}`,onClick:()=>l({resolution:t})},t)))),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),c.default.createElement("div",{className:"cf-chips"},[1,2,4].map(t=>c.default.createElement("button",{key:t,type:"button",className:`cf-chip${n.image.count===t?" is-on":""}`,onClick:()=>l({count:t})},t," \u5F20"))))))}function ea({title:e,desc:n,items:r}){return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},n)),c.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)"}},c.default.createElement("p",{style:{fontSize:13,fontWeight:500,marginBottom:8}},e),c.default.createElement("ul",{style:{display:"grid",gap:6}},r.map(a=>c.default.createElement("li",{key:a,style:{fontSize:12,color:"var(--cf-muted)",display:"flex",gap:8,alignItems:"center"}},c.default.createElement("span",{style:{width:4,height:4,borderRadius:999,background:"var(--cf-caption)"},"aria-hidden":"true"}),a))),c.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",marginTop:12}},"\u8FD9\u4E00\u7248\u5148\u628A\u4F4D\u7F6E\u7559\u597D\uFF0C\u63A5\u5165 Host \u540E\u518D\u586B\u3002")))}function an({channel:e,onClose:n,onSave:r}){let[a,l]=c.default.useState({...e}),[t,m]=c.default.useState(""),[S,v]=c.default.useState(""),p=(x,D)=>l(A=>({...A,[x]:D})),k=()=>{let x=S.trim();if(x){if(a.models.some(D=>D.id===x)){v("");return}p("models",[...a.models,{id:x,label:x,caps:nn(x),enabled:!0,source:"manual"}]),v("")}},E=(x,D)=>{p("models",a.models.map(A=>{if(A.id!==x)return A;let M=A.caps||[];return{...A,caps:M.includes(D)?M.filter(U=>U!==D):[...M,D]}}))};return c.default.createElement(he,{title:e.id&&e.models?"\u7F16\u8F91\u6E20\u9053":"\u65B0\u589E\u6E20\u9053",wide:!0,onClose:n,footer:c.default.createElement(c.default.Fragment,null,c.default.createElement(P,{onClick:n},"\u53D6\u6D88"),c.default.createElement(P,{variant:"primary",disabled:!a.baseUrl.trim(),onClick:()=>{let x=t.trim()?t.trim().slice(-4):a.keyHint;r({...a,keyHint:x||"",hasKey:!!t.trim()||a.hasKey})}},"\u4FDD\u5B58"))},c.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),c.default.createElement("input",{className:"cf-input",value:a.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:x=>p("name",x.target.value)})),c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),c.default.createElement("select",{className:"cf-input",value:a.protocol,onChange:x=>{let D=Ie.find(A=>A.id===x.target.value);p("protocol",x.target.value),D&&p("baseUrl",D.baseUrl)}},Ie.map(x=>c.default.createElement("option",{key:x.id,value:x.id},x.label))))),c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),c.default.createElement("input",{className:"cf-input",value:a.baseUrl,placeholder:"https://api.example.com/v1",onChange:x=>p("baseUrl",x.target.value)})),c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"API Key",a.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${a.keyHint}\uFF09`:""),c.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:t,placeholder:a.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:x=>m(x.target.value)}),c.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),c.default.createElement("div",{style:{display:"flex",gap:6}},c.default.createElement("input",{className:"cf-input",value:S,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:x=>v(x.target.value),onKeyDown:x=>{x.key==="Enter"&&(x.preventDefault(),k())}}),c.default.createElement(P,{onClick:k,disabled:!S.trim()},"\u6DFB\u52A0")),a.models.length===0?c.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u4FDD\u5B58\u6E20\u9053\u540E\u53EF\u4EE5\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u5728\u8FD9\u91CC\u624B\u52A8\u6DFB\u52A0\u3002"):c.default.createElement("div",{style:{display:"grid",gap:6,marginTop:4}},a.models.map(x=>c.default.createElement("div",{key:x.id,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",padding:"8px 10px",borderRadius:"var(--cf-r-sm)",boxShadow:"inset 0 0 0 var(--cf-hair) var(--cf-line)"}},c.default.createElement("span",{style:{fontSize:12,minWidth:120}},x.label||x.id),c.default.createElement("span",{style:{display:"flex",gap:4,marginInlineStart:"auto"}},Ve.map(D=>c.default.createElement("button",{key:D.id,type:"button",className:`cf-chip cf-chip--tag${(x.caps||[]).includes(D.id)?" is-on":""}`,onClick:()=>E(x.id,D.id)},D.label))),c.default.createElement(q,{name:"trash",label:`\u79FB\u9664 ${x.id}`,onClick:()=>p("models",a.models.filter(D=>D.id!==x.id))}))))),c.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u81EA\u52A8\u62C9\u53D6\u6A21\u578B\u4E0E\u300C\u5B9E\u6D4B\u51FA\u56FE\u300D\u4F1A\u5728\u63A5\u4E0A Host \u540E\u53EF\u7528\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u624B\u52A8\u6DFB\u52A0\u5E76\u52FE\u9009\u80FD\u529B\u3002"))}function nn(e){let n=e.toLowerCase();return/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(n)?["image"]:/veo|kling|sora|runway|video/.test(n)?["video"]:/tts|audio|speech|whisper|music/.test(n)?["audio"]:["text"]}var Ca="dsh-chunfeng-image:state:v2";function tn(){try{let e=localStorage.getItem(Ca);if(!e)return null;let n=JSON.parse(e);return n&&typeof n=="object"?n:null}catch{return null}}function Sa(){let[e,n]=j.default.useState(()=>{let i=tn();if(i)return va(i);let u=Je();return u.canvases=[{...He("\u9713\u8679\u8857\u89D2"),...la()}],u.openCanvasId=null,u}),[r,a]=j.default.useState(""),[l,t]=j.default.useState(null),[m,S]=j.default.useState(null),v=j.default.useRef(0);j.default.useEffect(()=>{try{localStorage.setItem(Ca,JSON.stringify(e))}catch{}},[e]);let p=j.default.useCallback((i,u)=>{S({text:i,kind:u,at:Date.now()}),clearTimeout(v.current),v.current=setTimeout(()=>S(null),2200)},[]);j.default.useEffect(()=>()=>clearTimeout(v.current),[]);let k=i=>n(u=>({...u,...i})),E=e.canvases.find(i=>i.id===e.openCanvasId)||null,x=da(e),D=i=>{t(null),n(u=>pa(u,i))},A=(i,u)=>n(K=>({...K,canvases:K.canvases.map(L=>{if(L.id!==i)return L;let _=typeof u=="function"?u(L):u;return{...L,..._,updatedAt:Date.now()}})})),M=()=>{let i=He();n(u=>({...u,canvases:[i,...u.canvases],openCanvasId:i.id,view:"canvas"})),p("\u5DF2\u65B0\u5EFA\u753B\u5E03")},U=()=>{let i=document.createElement("input");i.type="file",i.accept=".json,application/json",i.onchange=async()=>{let u=i.files?.[0];if(u)try{let K=JSON.parse(await u.text()),L={...He(K.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(K.nodes)?K.nodes:[],edges:Array.isArray(K.edges)?K.edges:[],grid:K.grid||"dots"};n(_=>({..._,canvases:[L,..._.canvases],openCanvasId:L.id,view:"canvas"})),p("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{p("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},i.click()},N=i=>{if(E){let u={id:J("i"),type:"image",x:220+E.nodes.length*26,y:220+E.nodes.length*20,w:240,h:268,name:"",status:"idle",z:2,prompt:i.text,ratio:e.defaults.image.ratio||"1:1",locked:!0};A(E.id,{nodes:[...E.nodes,u]}),p(`\u5DF2\u7528\u300C${i.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}a(i.text),k({view:"studio",openCanvasId:null}),p(`\u5DF2\u586B\u5165\u300C${i.title}\u300D`)};return j.default.createElement("div",{className:"cf-app"},j.default.createElement("style",null,ia),j.default.createElement("div",{className:"cf-ambient","aria-hidden":"true"},j.default.createElement("i",null),j.default.createElement("i",null),j.default.createElement("i",null)),j.default.createElement("header",{className:"cf-nav"},j.default.createElement("span",{className:"cf-brand"},j.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round","aria-hidden":"true"},j.default.createElement("path",{d:"M12 3.5L21 19H3z"}),j.default.createElement("path",{d:"M12 9.5v5.5",strokeLinecap:"round"})),"\u6625\u98CE\u753B\u5E03"),j.default.createElement("nav",{className:"cf-nav-list","aria-label":"\u4E3B\u5BFC\u822A"},Xe.map(i=>{let u=i.id==="canvas"?x==="canvas"||x==="editor":x===i.id;return j.default.createElement("button",{key:i.id,type:"button",className:`cf-nav-item${u?" is-on":""}`,onClick:()=>D(i.id),"aria-current":u?"page":void 0},j.default.createElement(W,{name:i.icon,size:15}),i.label)})),j.default.createElement("div",{className:"cf-nav-right"},E?j.default.createElement(j.default.Fragment,null,j.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},E.name),j.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}].map(i=>j.default.createElement("button",{key:i.id,type:"button",className:(E.grid||"dots")===i.id?"is-on":"",onClick:()=>A(E.id,{grid:i.id})},i.label)))):null,j.default.createElement("span",{className:"cf-nav-version"},"v0.1.0"),j.default.createElement(q,{name:"keyboard",label:"\u5FEB\u6377\u952E",onClick:()=>p("V \u9009\u62E9 \xB7 H \u79FB\u52A8 \xB7 T/I/A/C/G \u65B0\u5EFA\u8282\u70B9 \xB7 \u2318D \u590D\u5236 \xB7 \u2318G \u5305\u7EC4 \xB7 \u232B \u5220\u9664")}))),j.default.createElement(ze,{key:x},x==="editor"&&E?j.default.createElement(xa,{canvas:E,channels:e.channels,defaults:e.defaults.image,onChange:i=>A(E.id,i),onBack:()=>n(i=>ma(i)),say:p}):null,x==="canvas"?j.default.createElement(ba,{canvases:e.canvases,onOpen:i=>n(u=>ua(u,i)),onCreate:M,onRename:(i,u)=>A(i,{name:u}),onDelete:i=>n(u=>({...u,canvases:u.canvases.filter(K=>K.id!==i),openCanvasId:null})),onImport:U}):null,x==="studio"?j.default.createElement(ya,{channels:e.channels,defaults:e.defaults.image,records:e.records,prompt:r,onPrompt:a,onCreateRecord:i=>n(u=>({...u,records:[i,...u.records]})),onDeleteRecords:i=>n(u=>({...u,records:u.records.filter(K=>!i.includes(K.id))})),onLookupPrompts:()=>{t("studio"),k({view:"prompts",openCanvasId:null})},say:p}):null,x==="prompts"?j.default.createElement(wa,{prompts:e.prompts,sources:e.promptSources,returnTo:l,onUse:N,onBack:l?()=>{t(null),k({view:l})}:null}):null,x==="assets"?j.default.createElement(ka,{assets:e.assets,onSave:i=>k({assets:i}),onDelete:i=>n(u=>({...u,assets:u.assets.filter(K=>K.id!==i)})),onImport:()=>p("\u8D44\u4EA7\u5305\u5BFC\u5165\u63A5 Host \u540E\u53EF\u7528"),say:p}):null,x==="config"?j.default.createElement(Na,{tab:e.configTab,onTab:i=>k({configTab:i}),channels:e.channels,onChannels:i=>k({channels:i}),defaults:e.defaults,onDefaults:i=>k({defaults:i}),promptSources:e.promptSources,onPromptSources:i=>k({promptSources:i}),say:p}):null),m?j.default.createElement(ra,{text:m.text,kind:m.kind}):null)}var za="dsh-chunfeng-image",rn=["slots"];function sn(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:za},ln)),e.effect(()=>{let n=null;return(()=>{n?.(),n=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:za,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},on))})(),()=>n?.()},"dsh-chunfeng-image: sidebar entry")}function on(){return Ke.default.createElement(W,{name:"canvas",size:16})}function ln(){return Ke.default.createElement(ze,null,Ke.default.createElement(Sa,null))}
return module.exports}})
