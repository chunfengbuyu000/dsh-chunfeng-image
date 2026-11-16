window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ma=Object.create;var ze=Object.defineProperty;var va=Object.getOwnPropertyDescriptor;var ga=Object.getOwnPropertyNames;var ha=Object.getPrototypeOf,ba=Object.prototype.hasOwnProperty;var xa=(e,t)=>{for(var o in t)ze(e,o,{get:t[o],enumerable:!0})},je=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let f of ga(t))!ba.call(e,f)&&f!==o&&ze(e,f,{get:()=>t[f],enumerable:!(n=va(t,f))||n.enumerable});return e};var de=(e,t,o)=>(o=e!=null?ma(ha(e)):{},je(t||!e||!e.__esModule?ze(o,"default",{value:e,enumerable:!0}):o,e)),ya=e=>je(ze({},"__esModule",{value:!0}),e);var Va={};xa(Va,{apply:()=>Wa,inject:()=>Ua});module.exports=ya(Va);var pa=de(require("react"),1);var A=de(require("react"),1);var Ue=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
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
`;var We=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
 * imagery: the work itself, node pictures and generated tiles on the workspace ground \xB7 signature: the canvas is the page, one composer at its foot
 * axes: mid/grotesk-sans/neutral \xB7 posture: full-palette \xB7 contrast: pass \xB7 fold: pass \xB7 v2.0.0 */
/* Hallmark \xB7 pre-emit critique: P5 H5 E5 S5 R5 V5 \xB7 weakest: V, the palette is the host's so character had to come from density and rhythm; kept every surface one step above the ground and let the pictures carry colour */
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
/* \u5185\u5BB9\u6392\u5728\u73AF\u5883\u5149\u4E4B\u4E0A */
.cf-app > :not(.cf-ambient) { position: relative; z-index: 1; }

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
  z-index: 3;
  display: block;
  background: color-mix(in oklab, var(--cf-panel-2) 55%, transparent);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  pointer-events: none;
}
.cf-node.is-group .cf-node-head { pointer-events: auto; }

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
  gap: var(--cf-sp-2);
  gap: 9px;
  padding: 6px 6px 4px;
  border-radius: var(--cf-r-panel);
  background: var(--cf-input-surface);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 16px 40px -20px oklch(0% 0 0 / 0.6);
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
  padding: 8px var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  background: var(--cf-bg);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-muted);
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
  position: fixed;
  z-index: var(--cf-z-toast);
  left: 50%;
  bottom: 40px;
  translate: -50% 0;
  padding: 8px var(--cf-sp-4);
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel-3);
  color: var(--cf-fg);
  font-size: var(--cf-fs-12);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.7);
}
.cf-toast.is-error { color: var(--cf-danger); }

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
`;var Ye=`${Ue}
${We}`;var r=de(require("react"),1),Na={canvas:r.default.createElement(r.default.Fragment,null,r.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),r.default.createElement("path",{d:"M3 10h18M9 10v10"})),image:r.default.createElement(r.default.Fragment,null,r.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),r.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),r.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),r.default.createElement("path",{d:"M5 17h14"})),folder:r.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:r.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),cursor:r.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:r.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:r.default.createElement(r.default.Fragment,null,r.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),r.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),r.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:r.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:r.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:r.default.createElement(r.default.Fragment,null,r.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),r.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),r.default.createElement("path",{d:"M11 11l2 2"})),search:r.default.createElement(r.default.Fragment,null,r.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),r.default.createElement("path",{d:"M16 16l4 4"})),plus:r.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:r.default.createElement("path",{d:"M5 12h14"}),trash:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),r.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),r.default.createElement("path",{d:"M14 6l4 4"})),close:r.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:r.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M12 16V4"}),r.default.createElement("path",{d:"M7 9l5-5 5 5"}),r.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M12 4v12"}),r.default.createElement("path",{d:"M7 11l5 5 5-5"}),r.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:r.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),r.default.createElement("path",{d:"M20 4v4h-4"})),more:r.default.createElement(r.default.Fragment,null,r.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),r.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),r.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M9 8H4v5"}),r.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M15 8h5v5"}),r.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),map:r.default.createElement(r.default.Fragment,null,r.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),r.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:r.default.createElement(r.default.Fragment,null,r.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),r.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M9 15l6-6"}),r.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),r.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),r.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),play:r.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:r.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 6l-5 6 5 6"}),r.default.createElement("path",{d:"M5 12h14"})),arrowUp:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M12 19V5"}),r.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"}))};function j({name:e,size:t=16,...o}){let n=Na[e];return n?r.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...o},n):null}function X({name:e,label:t,size:o=16,...n}){return r.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":t,title:t,...n},r.default.createElement(j,{name:e,size:o}))}function L({variant:e="ghost",size:t,icon:o,children:n,...f}){return r.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${t==="sm"?" cf-btn--sm":""}`,...f},o?r.default.createElement(j,{name:o,size:14}):null,n)}function pe({title:e,children:t,footer:o,onClose:n,wide:f}){return r.default.useEffect(()=>{let l=g=>{g.key==="Escape"&&n()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[n]),r.default.createElement("div",{className:"cf-scrim",onPointerDown:l=>{l.target===l.currentTarget&&n()}},r.default.createElement("div",{className:`cf-dialog${f?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},r.default.createElement("header",{className:"cf-dialog-head"},r.default.createElement("h2",{className:"cf-dialog-title"},e),r.default.createElement(X,{name:"close",label:"\u5173\u95ED",onClick:n})),r.default.createElement("div",{className:"cf-dialog-body"},t,o?r.default.createElement("div",{className:"cf-dialog-foot"},o):null)))}function Ve({text:e,kind:t}){return r.default.createElement("p",{className:`cf-toast${t==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function le({icon:e="canvas",title:t,hint:o,action:n}){return r.default.createElement("div",{className:"cf-empty"},r.default.createElement("span",{className:"cf-empty-icon"},r.default.createElement(j,{name:e,size:28})),r.default.createElement("p",{className:"cf-empty-title"},t),o?r.default.createElement("p",{className:"cf-empty-hint"},o):null,n)}var Xe=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],Ce={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"};var ge=[{id:"1:1",label:"1:1",w:1024,h:1024},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1280,h:720},{id:"9:16",label:"9:16",w:720,h:1280}],Se=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],Ie=["1k","2k","4k","\u81EA\u52A8"],Fe=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],be=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],Be=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],_e=0;function F(e="x"){return _e+=1,`${e}_${Date.now().toString(36)}${_e.toString(36)}`}function Ee(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:F("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}function Ca(e){switch(e){case"image":return{w:240,h:268};case"audio":return{w:240,h:140};case"text":return{w:230,h:160};case"config":return{w:240,h:176};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function Me(e,t,o={}){let n=Ca(e),f={id:F(e[0]),type:e,x:Math.round(t.x-n.w/2),y:Math.round(t.y-n.h/2),w:n.w,h:n.h,name:"",status:"idle",z:e==="group"?1:2,...o};return e==="text"&&(f.text=o.text??""),e==="config"&&(f.modelKey=o.modelKey??"",f.ratio=o.ratio??"1:1",f.count=o.count??1),e==="image"&&(f.prompt=o.prompt??"",f.ratio=o.ratio??"1:1",f.locked=o.locked??!0),e==="audio"&&(f.prompt=o.prompt??""),f}function Te(e="openai"){let t=be.find(o=>o.id===e)||be[0];return{id:F("ch"),name:"",protocol:t.id,baseUrl:t.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function Ma(e,t){return`${e}:${t}`}function xe(e,t){if(!t)return null;let[o,...n]=t.split(":"),f=e.find(g=>g.id===o);if(!f)return null;let l=f.models.find(g=>g.id===n.join(":"));return l?{channel:f,model:l,label:l.label||l.id}:null}function ye(e,t="image"){let o=[];for(let n of e)if(n.enabled)for(let f of n.models)f.enabled&&(f.caps||[]).includes(t)&&o.push({key:Ma(n.id,f.id),model:f,channel:n});return o}var za=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],Sa=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function qe(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:za.map(e=>({...e})),promptSources:[],assets:Sa.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8"},canvasCount:1},records:[],configTab:"channels",grid:"dots"}}function Pe(){let e=(k,d,w,E,y,I)=>{let $=Me(k,{x:d+E/2,y:w+y/2},{...I,w:E,h:y});return $.x=d,$.y=w,$},t=e("group",660,120,640,700,{name:"\u9713\u8679\u8857\u89D2"}),o=e("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),n=e("config",400,300,240,176,{ratio:"3:4",count:1}),f=e("image",700,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),l=e("image",980,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),g=e("image",700,510,240,268,{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),M=[{id:F("e"),from:o.id,to:n.id},{id:F("e"),from:n.id,to:f.id},{id:F("e"),from:n.id,to:l.id},{id:F("e"),from:n.id,to:g.id}];return{nodes:[t,o,n,f,l,g],edges:M}}function Ge(e,t,o,n){if(o===n)return!1;let f=e.find(g=>g.id===o),l=e.find(g=>g.id===n);return!(!f||!l||f.type==="config"&&l.type==="config"||f.type==="group"||l.type==="group"||t.some(g=>g.from===o&&g.to===n))}function Je(e,t){let o=e.filter(k=>t.includes(k.id)&&k.type!=="group");if(!o.length)return null;let n=44,f=Math.min(...o.map(k=>k.x))-n,l=Math.min(...o.map(k=>k.y))-n-34,g=Math.max(...o.map(k=>k.x+k.w))+n,M=Math.max(...o.map(k=>k.y+k.h))+n;return Me("group",{x:(f+g)/2,y:(l+M)/2},{w:Math.round(g-f),h:Math.round(M-l),name:"\u65B0\u5206\u7EC4",childIds:o.map(k=>k.id),x:Math.round(f),y:Math.round(l)})}function Qe(e){return e.openCanvasId?"editor":e.view}function Ze(e,t){return{...e,view:t,openCanvasId:null}}function Re(e,t){return{...e,openCanvasId:t}}function ea(e){return{...e,openCanvasId:null,view:"canvas"}}var s=de(require("react"),1);var m=de(require("react"),1);var De=.1,Ae=3,Ia=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function aa(){let e=m.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),t=m.default.useCallback(f=>{if(!f)return;let l=e.current;f.style.transform=`translate3d(${l.x}px, ${l.y}px, 0) scale(${l.s})`},[]),o=m.default.useCallback((f,l)=>{let g=e.current;g.raf=0;let M=.24,k=g.tx-g.x,d=g.ty-g.y,w=g.ts-g.s;if(Math.abs(k)<.2&&Math.abs(d)<.2&&Math.abs(w)<8e-4){g.x=g.tx,g.y=g.ty,g.s=g.ts,t(f),l?.();return}g.x+=k*M,g.y+=d*M,g.s+=w*M,t(f),l?.(),g.raf=requestAnimationFrame(()=>o(f,l))},[t]),n=m.default.useCallback((f,l,g,M,k)=>{let d=e.current;if(d.tx=l,d.ty=g,d.ts=Math.min(Ae,Math.max(De,M)),Ia()){d.x=d.tx,d.y=d.ty,d.s=d.ts,d.raf&&cancelAnimationFrame(d.raf),d.raf=0,t(f),k?.();return}d.raf||(d.raf=requestAnimationFrame(()=>o(f,k)))},[t,o]);return m.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:t,moveTo:n}}function Le(e,t){if(!e||!t)return"";let o=e.x+e.w,n=e.y+e.h/2,f=t.x,l=t.y+t.h/2,g=Math.max(40,Math.abs(f-o)*.45);return`M ${o} ${n} C ${o+g} ${n}, ${f-g} ${l}, ${f} ${l}`}function Ea({node:e}){let t=m.default.useRef(null);return m.default.useEffect(()=>{let o=t.current;if(!o)return;let n=o.getContext("2d"),f=480;o.width=f,o.height=f;let l=`${e.id}${e.prompt||""}`,g=7;for(let d=0;d<l.length;d++)g=(g*31+l.charCodeAt(d))%2147483647;let M=()=>(g=g*16807%2147483647)/2147483647;n.fillStyle="#141414",n.fillRect(0,0,f,f);let k=n.createRadialGradient(f*(.25+M()*.5),f*(.3+M()*.4),24,f/2,f/2,f*.8);k.addColorStop(0,"rgba(255,255,255,0.16)"),k.addColorStop(.5,"rgba(255,255,255,0.05)"),k.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=k,n.fillRect(0,0,f,f),n.strokeStyle="rgba(255,255,255,0.22)",n.lineWidth=1.5;for(let d=0;d<6;d++){let w=f*(.18+M()*.66);n.beginPath(),n.moveTo(0,w),n.lineTo(f,w+(M()-.5)*80),n.stroke()}n.strokeStyle="rgba(255,255,255,0.4)";for(let d=0;d<3;d++){let w=f*(.2+M()*.6),E=40+M()*90;n.beginPath(),M()<.5?n.arc(w,f*(.3+M()*.4),E,0,Math.PI*2):n.rect(w-E/2,f*(.3+M()*.4)-E/2,E,E),n.stroke()}},[e.id,e.prompt]),m.default.createElement("canvas",{ref:t,"aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function Da({node:e,channels:t}){switch(e.type){case"image":return m.default.createElement("div",{className:"cf-node-media"},e.src?m.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):null,!e.src&&e.status==="running"?m.default.createElement("div",{className:"cf-node-void"},m.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):null,!e.src&&e.status!=="running"?m.default.createElement(Ea,{node:e}):null,!e.src&&e.status==="failed"?m.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25"):null);case"audio":return m.default.createElement("div",{className:"cf-node-audio"},m.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(o,n)=>m.default.createElement("span",{key:n,style:{height:`${16+n*41%66}%`}}))),m.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return m.default.createElement("div",{className:"cf-node-text"},e.text?m.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):m.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":{let o=xe(t,e.modelKey);return m.default.createElement("div",{className:"cf-node-config"},m.default.createElement("p",{className:"cf-node-config-row"},m.default.createElement("span",null,"\u6A21\u578B"),m.default.createElement("b",null,o?o.label:"\u672A\u9009\u62E9")),m.default.createElement("p",{className:"cf-node-config-row"},m.default.createElement("span",null,"\u6BD4\u4F8B"),m.default.createElement("b",null,e.ratio)),m.default.createElement("p",{className:"cf-node-config-row"},m.default.createElement("span",null,"\u5F20\u6570"),m.default.createElement("b",null,e.count)))}case"group":return null;default:return null}}function na({nodes:e,edges:t,selection:o,channels:n,grid:f,minimap:l,onSelection:g,onMove:M,onResize:k,onConnect:d,onRemoveEdge:w,onOpenNode:E,camera:y,camApi:I,showHint:$}){let C=m.default.useRef(null),T=m.default.useRef(null),{cam:h,moveTo:a}=I,[b,O]=m.default.useState({w:1200,h:700}),[H,Y]=m.default.useState(Math.round(h.current.s*100)),Q=m.default.useRef(null),G=m.default.useRef(null),Z=m.default.useRef(null),R=m.default.useRef(null),J=m.default.useRef(null),[ne,ue]=m.default.useState(null),[te,ce]=m.default.useState(null),[ie,V]=m.default.useState(!1),ee=m.default.useCallback(()=>I.apply(C.current),[I]);m.default.useEffect(()=>{let p=T.current;if(!p)return;let v=new ResizeObserver(()=>{let B=p.getBoundingClientRect();O({w:B.width,h:B.height})});v.observe(p);let S=p.getBoundingClientRect();return O({w:S.width,h:S.height}),()=>v.disconnect()},[]),m.default.useEffect(()=>{ee(),Y(Math.round(h.current.s*100))}),m.default.useEffect(()=>{let p=S=>{S.code==="Space"&&!/input|textarea/i.test(S.target.tagName)&&(V(!0),S.preventDefault())},v=S=>{S.code==="Space"&&V(!1)};return window.addEventListener("keydown",p),window.addEventListener("keyup",v),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",v)}},[]),m.default.useEffect(()=>{if(!y)return;let p=C.current;p&&a(p,y.x,y.y,y.s,()=>Y(Math.round(h.current.s*100)))},[y]);let fe=()=>T.current.getBoundingClientRect(),U=(p,v)=>{let S=fe();return{x:(p-S.left-h.current.x)/h.current.s,y:(v-S.top-h.current.y)/h.current.s}},z=m.default.useCallback(()=>{let p=C.current;if(!p||!e.length)return;let v=72,S=Math.min(...e.map(x=>x.x))-v,B=Math.min(...e.map(x=>x.y))-v,P=Math.max(...e.map(x=>x.x+x.w))+v,ae=Math.max(...e.map(x=>x.y+x.h))+v,c=Math.min(1.35,Math.max(De,Math.min(b.w/(P-S),b.h/(ae-B))));a(p,v-S*c,v-B*c,c,()=>Y(Math.round(h.current.s*100)))},[e,b,a,h]);m.default.useEffect(()=>{let p=setTimeout(z,80);return()=>clearTimeout(p)},[]);let q=p=>{let v=C.current;if(!v)return;let S=b.w/2,B=b.h/2,P=h.current,ae=(S-P.tx)/P.ts,c=(B-P.ty)/P.ts,x=Math.min(Ae,Math.max(De,P.ts*p));a(v,S-ae*x,B-c*x,x,()=>Y(Math.round(h.current.s*100)))},se=p=>{p.preventDefault();let v=fe(),S=p.clientX-v.left,B=p.clientY-v.top,P=h.current,ae=(S-P.tx)/P.ts,c=(B-P.ty)/P.ts,x=Math.min(Ae,Math.max(De,P.ts*Math.exp(-p.deltaY*.0018)));a(C.current,S-ae*x,B-c*x,x,()=>Y(Math.round(h.current.s*100)))},oe=p=>{if(p.button===1||ie){p.preventDefault(),Q.current={x:p.clientX,y:p.clientY,cx:h.current.tx,cy:h.current.ty},T.current.classList.add("is-grabbing"),T.current.setPointerCapture(p.pointerId);return}if(p.button!==0)return;let v=U(p.clientX,p.clientY);R.current={x0:v.x,y0:v.y,additive:p.shiftKey},ce({x:v.x,y:v.y,w:0,h:0}),T.current.setPointerCapture(p.pointerId)},me=p=>{if(Q.current){let v=h.current;a(C.current,Q.current.cx+(p.clientX-Q.current.x),Q.current.cy+(p.clientY-Q.current.y),v.ts,()=>Y(Math.round(h.current.s*100)));return}if(G.current){let v=U(p.clientX,p.clientY);M(G.current.ids,v.x-G.current.p0.x,v.y-G.current.p0.y),G.current.p0=v;return}if(Z.current){let v=U(p.clientX,p.clientY),S=Z.current,B=Math.max(140,Math.round(v.x-S.x)),P=S.locked?Math.round(B/S.ratio):Math.max(80,Math.round(v.y-S.y));k(S.id,B,P);return}if(R.current){let v=U(p.clientX,p.clientY),S=R.current;ce({x:Math.min(S.x0,v.x),y:Math.min(S.y0,v.y),w:Math.abs(v.x-S.x0),h:Math.abs(v.y-S.y0)});return}J.current&&ue({from:J.current,to:U(p.clientX,p.clientY)})},re=p=>{if(Q.current){Q.current=null,T.current.classList.remove("is-grabbing");return}if(G.current){G.current=null;return}if(Z.current){Z.current=null;return}if(R.current){let v=R.current;R.current=null;let S=te;if(ce(null),S&&(S.w>6||S.h>6)){let B=e.filter(P=>!(P.x>S.x+S.w||P.x+P.w<S.x||P.y>S.y+S.h||P.y+P.h<S.y));g(v.additive?[...new Set([...o,...B.map(P=>P.id)])]:B.map(P=>P.id))}else v.additive||g([]);return}if(J.current){let v=U(p.clientX,p.clientY),S=e.find(B=>v.x>=B.x&&v.x<=B.x+B.w&&v.y>=B.y&&v.y<=B.y+B.h);S&&Ge(e,t,J.current,S.id)&&d(J.current,S.id),J.current=null,ue(null)}},he=(p,v)=>{if(p.stopPropagation(),ie||p.button===1)return;let S=p.shiftKey||p.metaKey||p.ctrlKey,B=o.includes(v.id),P;if(S?P=B?o.filter(x=>x!==v.id):[...o,v.id]:P=B?o:[v.id],g(P),S)return;let ae=U(p.clientX,p.clientY),c=v.type==="group"&&v.childIds?.length?[v.id,...v.childIds]:P.length>1?P:[v.id];G.current={ids:c,p0:ae},T.current.setPointerCapture(p.pointerId)},we=(p,v)=>{let[S,B]=(v.ratio||"1:1").split(":").map(Number);Z.current={id:v.id,x:v.x,y:v.y,locked:v.locked!==!1,ratio:B/S},T.current.setPointerCapture(p.pointerId)},$e=(p,v)=>{p.stopPropagation(),J.current=v.id,ue({from:v.id,to:U(p.clientX,p.clientY)}),T.current.setPointerCapture(p.pointerId)},ke=m.default.useMemo(()=>Object.fromEntries(e.map(p=>[p.id,p])),[e]);return m.default.createElement("div",{className:"cf-board"},m.default.createElement("div",{className:`cf-stage ${f==="lines"?"cf-stage--lines":f==="blank"?"cf-stage--blank":"cf-stage--dots"}${ie?" is-grab":""}`,ref:T,onPointerDown:oe,onPointerMove:me,onPointerUp:re,onPointerCancel:re,onWheel:se,style:{"--cf-grid":`${28*H/100}px`}},m.default.createElement("div",{className:"cf-world",ref:C},m.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},m.default.createElement("defs",null,m.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},m.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),t.map(p=>{let v=ke[p.from],S=ke[p.to];return!v||!S?null:m.default.createElement("g",{key:p.id,className:"cf-edge"},m.default.createElement("path",{d:Le(v,S),className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),m.default.createElement("path",{d:Le(v,S),className:"cf-edge-hit",onPointerDown:B=>{B.stopPropagation(),w(p.id)}},m.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),ne?(()=>{let p=ke[ne.from];return p?m.default.createElement("path",{d:Le(p,{x:ne.to.x,y:ne.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),e.map(p=>m.default.createElement("div",{key:p.id,className:`cf-node${o.includes(p.id)?" is-selected":""}${p.status==="running"?" is-running":""}${p.type==="group"?" is-group":""}`,"data-id":p.id,style:{left:p.x,top:p.y,width:p.w,height:p.h,zIndex:p.type==="group"?3:2},onPointerDown:v=>he(v,p)},p.type==="group"?m.default.createElement("div",{className:"cf-node-group-head"},m.default.createElement("span",null,p.name||"\u5206\u7EC4"),p.childIds?.length?m.default.createElement("span",{className:"cf-node-group-count"},p.childIds.length," \u4E2A\u8282\u70B9"):null):m.default.createElement(m.default.Fragment,null,m.default.createElement("div",{className:"cf-node-head"},m.default.createElement("span",{className:"cf-node-type"},Ce[p.type]),m.default.createElement("span",{className:"cf-node-name"},p.name||""),m.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:v=>$e(v,p),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),m.default.createElement("div",{className:"cf-node-body",onDoubleClick:v=>{v.stopPropagation(),E(p)}},m.default.createElement(Da,{node:p,channels:n}))),o.includes(p.id)&&p.type!=="group"?m.default.createElement("span",{className:"cf-node-handle",onPointerDown:v=>{v.stopPropagation(),we(v,p)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)),te&&te.w>4?m.default.createElement("div",{className:"cf-marquee",style:{left:te.x,top:te.y,width:te.w,height:te.h}}):null)),l?m.default.createElement($a,{nodes:e,cam:h.current,size:b,onJump:p=>a(C.current,b.w/2-p.x*h.current.s,b.h/2-p.y*h.current.s,h.current.s,()=>Y(Math.round(h.current.s*100)))}):null,m.default.createElement("div",{className:"cf-zoom"},m.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>q(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),m.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:H,"aria-label":"\u7F29\u653E",onChange:p=>{let v=C.current;if(!v)return;let S=Number(p.target.value)/100,B=h.current,P=b.w/2,ae=b.h/2;a(v,P-(P-B.tx)/B.s*S,ae-(ae-B.ty)/B.s*S,S,()=>Y(Math.round(h.current.s*100)))}}),m.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>q(1.25),"aria-label":"\u653E\u5927"},"+"),m.default.createElement("span",{className:"cf-zoom-num"},H,"%"),m.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:z},"\u9002\u5E94")),$?m.default.createElement("p",{className:"cf-editor-hint"},"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5"):null)}function $a({nodes:e,cam:t,size:o,onJump:n}){if(!e.length)return null;let f=168,l=108,g=80,M=Math.min(...e.map(a=>a.x))-g,k=Math.min(...e.map(a=>a.y))-g,d=Math.max(...e.map(a=>a.x+a.w))+g,w=Math.max(...e.map(a=>a.y+a.h))+g,E=Math.max(1,d-M),y=Math.max(1,w-k),I=Math.min(f/E,l/y),$=(f-E*I)/2,C=(l-y*I)/2,T=a=>({x:(a.x-M)*I+$,y:(a.y-k)*I+C,w:a.w*I,h:a.h*I}),h={x:(-t.x/t.s-M)*I+$,y:(-t.y/t.s-k)*I+C,w:o.w/t.s*I,h:o.h/t.s*I};return m.default.createElement("svg",{className:"cf-minimap",viewBox:`0 0 ${f} ${l}`,width:f,height:l,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:a=>{let b=a.currentTarget.getBoundingClientRect(),O=(a.clientX-b.left)/b.width*f,H=(a.clientY-b.top)/b.height*l;n({x:M+(O-$)/I,y:k+(H-C)/I})}},e.filter(a=>a.type==="group").map(a=>{let b=T(a);return m.default.createElement("rect",{key:a.id,x:b.x,y:b.y,width:b.w,height:b.h,rx:3,className:"cf-mini-group"})}),e.filter(a=>a.type!=="group").map(a=>{let b=T(a);return m.default.createElement("rect",{key:a.id,x:b.x,y:b.y,width:Math.max(3,b.w),height:Math.max(3,b.h),rx:2,className:`cf-mini-node${a.type==="image"?" cf-mini-image":""}`})}),m.default.createElement("rect",{x:h.x,y:h.y,width:Math.max(6,h.w),height:Math.max(6,h.h),rx:2,className:"cf-mini-view"}))}function ta({canvases:e,onOpen:t,onCreate:o,onRename:n,onDelete:f,onImport:l}){let[g,M]=s.default.useState(null),[k,d]=s.default.useState(null);return s.default.createElement("div",{className:"cf-page"},s.default.createElement("div",{className:"cf-page-inner"},s.default.createElement("div",{className:"cf-page-head"},s.default.createElement("div",null,s.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),s.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),s.default.createElement("div",{className:"cf-page-actions"},s.default.createElement(L,{icon:"upload",onClick:l},"\u5BFC\u5165\u753B\u5E03"),s.default.createElement(L,{variant:"primary",icon:"plus",onClick:o},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?s.default.createElement(le,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:s.default.createElement(L,{variant:"primary",icon:"plus",onClick:o},"\u65B0\u5EFA\u753B\u5E03")}):s.default.createElement("div",{className:"cf-card"},s.default.createElement("div",{className:"cf-list-head"},s.default.createElement("span",null,"\u540D\u79F0"),s.default.createElement("span",null,"\u5185\u5BB9"),s.default.createElement("span",null,"\u66F4\u65B0")),s.default.createElement("div",{className:"cf-canvas-list"},e.map(w=>s.default.createElement("div",{key:w.id,className:"cf-canvas-row"},s.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>t(w.id)},w.name||"\u672A\u547D\u540D\u753B\u5E03"),s.default.createElement("span",{className:"cf-canvas-meta"},w.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",w.edges.length," \u6761\u8FDE\u7EBF"),s.default.createElement("span",{className:"cf-canvas-row-actions"},s.default.createElement(X,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>M(w)}),s.default.createElement(X,{name:"trash",label:"\u5220\u9664",onClick:()=>d(w)}))))))),g?s.default.createElement(Ba,{canvas:g,onClose:()=>M(null),onSubmit:w=>{n(g.id,w),M(null)}}):null,k?s.default.createElement(pe,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>d(null),footer:s.default.createElement(s.default.Fragment,null,s.default.createElement(L,{onClick:()=>d(null)},"\u53D6\u6D88"),s.default.createElement(L,{variant:"danger",onClick:()=>{f(k.id),d(null)}},"\u5220\u9664"))},s.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",k.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",k.nodes.length," \u4E2A\u8282\u70B9\u548C ",k.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function Ba({canvas:e,onClose:t,onSubmit:o}){let[n,f]=s.default.useState(e.name||"");return s.default.createElement(pe,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:t,footer:s.default.createElement(s.default.Fragment,null,s.default.createElement(L,{onClick:t},"\u53D6\u6D88"),s.default.createElement(L,{variant:"primary",onClick:()=>o(n.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},s.default.createElement("label",{className:"cf-field"},s.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),s.default.createElement("input",{className:"cf-input",value:n,autoFocus:!0,onChange:l=>f(l.target.value),onKeyDown:l=>{l.key==="Enter"&&o(n.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var Ta=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"audio",label:"\u97F3\u9891",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"}];function ia({canvas:e,channels:t,defaults:o,onChange:n,onBack:f,say:l}){let g=aa(),{cam:M,moveTo:k}=g,[d,w]=s.default.useState([]),[E,y]=s.default.useState("select"),[I,$]=s.default.useState(typeof window<"u"&&window.__CF_DEV_PROMPT||""),[C,T]=s.default.useState(o?.ratio||"1:1"),[h,a]=s.default.useState(o?.count||1),[b,O]=s.default.useState(o?.modelKey||""),[H,Y]=s.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[Q,G]=s.default.useState([]),[Z,R]=s.default.useState(1024),[J,ne]=s.default.useState(1024),[ue,te]=s.default.useState(null),ce=s.default.useRef(null),ie=s.default.useRef(null);s.default.useEffect(()=>{if(!H)return;let c=K=>{ce.current?.contains(K.target)||Y(null)},x=K=>{K.key==="Escape"&&Y(null)};return window.addEventListener("pointerdown",c),window.addEventListener("keydown",x),()=>{window.removeEventListener("pointerdown",c),window.removeEventListener("keydown",x)}},[H]);let V=e.nodes,ee=e.edges,fe=V.filter(c=>d.includes(c.id)),U=fe.length===1?fe[0]:null,z=s.default.useMemo(()=>U?ee.filter(c=>c.to===U.id).map(c=>V.find(x=>x.id===c.from)).filter(c=>c&&c.type!=="group"&&c.type!=="config"):[],[U,ee,V]),q=()=>{ie.current?.click()},se=c=>{let x=[...c.target.files||[]];x.length&&(G(K=>[...K,...x.map(_=>({id:_.name+_.size,name:_.name,url:URL.createObjectURL(_)}))]),l?.(`\u5DF2\u52A0\u5165 ${x.length} \u5F20\u53C2\u8003\u56FE`),c.target.value="")},oe=ye(t,"image"),me=xe(t,b)||oe[0]||null;s.default.useEffect(()=>{U&&(U.type==="image"||U.type==="audio")&&($(U.prompt||""),U.ratio&&T(U.ratio))},[U?.id]);let re=c=>n({nodes:c,updatedAt:Date.now()}),he=c=>n({edges:c,updatedAt:Date.now()}),we=(c,x)=>re(V.map(K=>K.id===c?{...K,...x}:K)),$e=(c,x,K)=>{let _=new Set(c);re(V.map(W=>_.has(W.id)?{...W,x:Math.round(W.x+x),y:Math.round(W.y+K)}:W))},ke=(c,x,K)=>we(c,{w:x,h:K}),Ke=(c,x)=>he([...ee,{id:F("e"),from:c,to:x}]),p=c=>he(ee.filter(x=>x.id!==c)),v=c=>{let x=M.current,K={x:(window.innerWidth/2-x.tx)/x.s,y:(window.innerHeight/2-x.ty)/x.s},_=Me(c,K,c==="config"?{modelKey:b||oe[0]?.key||"",ratio:C,count:h}:{});re([...V,_]),w([_.id]),l?.(`\u5DF2\u65B0\u5EFA${Ce[c]}\u8282\u70B9`)},S=()=>{let c=I.trim();if(!c)return;let x=U&&U.type==="image"?U:null;if(x){we(x.id,{prompt:c,status:"running",ratio:C}),setTimeout(()=>we(x.id,{status:"done"}),900),l?.("\u5F00\u59CB\u751F\u6210");return}let K=M.current,_={x:(window.innerWidth/2-K.tx)/K.s,y:(window.innerHeight/2-K.ty)/K.s},W=Array.from({length:h},(ve,Ne)=>Me("image",{x:_.x+Ne*260,y:_.y},{prompt:c,ratio:C,status:"running"}));re([...V,...W]),w(W.map(ve=>ve.id)),setTimeout(()=>{re(ve=>ve.map(Ne=>W.some(ua=>ua.id===Ne.id)?{...Ne,status:"done"}:Ne))},900),$(""),l?.("\u5F00\u59CB\u751F\u6210")},B=()=>{let c=Je(V,d);c&&(re([c,...V]),w([c.id]))},P=()=>{let c=new Set(d);re(V.filter(x=>!c.has(x.id))),he(ee.filter(x=>!c.has(x.from)&&!c.has(x.to))),w([])},ae=()=>{let c=V.filter(W=>d.includes(W.id));if(!c.length)return;let x={},K=c.map(W=>{let ve=F(W.type[0]);return x[W.id]=ve,{...W,id:ve,x:W.x+40,y:W.y+40,status:"idle"}}),_=ee.filter(W=>x[W.from]&&x[W.to]).map(W=>({id:F("e"),from:x[W.from],to:x[W.to]}));re([...V,...K]),he([...ee,..._]),w(K.map(W=>W.id))};return s.default.useEffect(()=>{let c=x=>{if(/input|textarea|select/i.test(x.target.tagName))return;let K=x.metaKey||x.ctrlKey;if(K&&x.key.toLowerCase()==="d"){x.preventDefault(),ae();return}if(K&&x.key.toLowerCase()==="g"){x.preventDefault(),B();return}if(x.key==="Delete"||x.key==="Backspace"){x.preventDefault(),P();return}if(x.key==="Escape"){w([]);return}let _=x.key.toLowerCase();_==="v"&&y("select"),_==="h"&&y("pan"),_==="t"&&v("text"),_==="i"&&v("image"),_==="a"&&v("audio"),_==="c"&&v("config"),_==="g"&&v("group")};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[V,ee,d,I,C,h,b]),s.default.createElement("div",{className:"cf-editor"},s.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},s.default.createElement(X,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:f}),s.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),Ta.map((c,x)=>c.sep?s.default.createElement("span",{key:`s${x}`,className:"cf-rail-sep","aria-hidden":"true"}):s.default.createElement("button",{key:c.id,type:"button",className:`cf-rail-btn${E===c.id?" is-on":""}`,title:`${c.label}  ${c.key}`,"aria-label":c.label,"aria-pressed":E===c.id,onClick:()=>{if(c.id==="focus"){te({...M.current,s:M.current.s});return}if(["text","image","audio","config","group"].includes(c.id)){v(c.id);return}y(c.id)}},s.default.createElement(j,{name:c.icon,size:18})))),s.default.createElement("div",{className:"cf-editor-main"},s.default.createElement(na,{nodes:V,edges:ee,selection:d,channels:t,grid:e.grid||"dots",minimap:!0,camera:ue,camApi:g,showHint:!fe.length,onSelection:w,onMove:$e,onResize:ke,onConnect:Ke,onRemoveEdge:p,onOpenNode:c=>{w([c.id]),$(c.prompt||c.text||"")}}),s.default.createElement("div",{className:"cf-composer"},s.default.createElement("textarea",{className:"cf-composer-input",value:I,rows:3,placeholder:U?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:c=>$(c.target.value),onKeyDown:c=>{c.key==="Enter"&&!c.shiftKey&&!c.nativeEvent.isComposing&&(c.preventDefault(),S())}}),s.default.createElement("div",{className:"cf-composer-bar",ref:ce},s.default.createElement("div",{className:"cf-composer-left"},s.default.createElement("div",{className:"cf-bar-slot"},s.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Y(H==="ref"?null:"ref"),"aria-expanded":H==="ref","aria-haspopup":"menu"},s.default.createElement(j,{name:"plus",size:15}),"\u53C2\u8003",Q.length+z.length?s.default.createElement("span",{className:"cf-bar-badge"},Q.length+z.length):null),H==="ref"?s.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},s.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),z.length?z.map(c=>s.default.createElement("button",{key:c.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{$(x=>`${x}${x&&!x.endsWith(" ")?" ":""}@${Ce[c.type]}${c.name?`:${c.name}`:""} `),Y(null)}},s.default.createElement(j,{name:c.type==="image"?"image":c.type==="text"?"text":"audio",size:14}),s.default.createElement("span",{className:"cf-menu-label"},c.name||(c.prompt||c.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):s.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),s.default.createElement("div",{className:"cf-menu-sep"}),s.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:q},s.default.createElement(j,{name:"upload",size:14}),s.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),s.default.createElement("input",{ref:ie,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:se})):null),s.default.createElement("div",{className:"cf-bar-slot"},s.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>{if(H!=="ratio"){let c=C.split(":").map(Number);c.length===2&&c.every(x=>Number.isFinite(x)&&x>0)&&(R(c[0]),ne(c[1]))}Y(H==="ratio"?null:"ratio")},"aria-expanded":H==="ratio","aria-haspopup":"menu"},s.default.createElement(j,{name:"frame",size:15}),C),H==="ratio"?s.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},s.default.createElement("p",{className:"cf-menu-head"},"\u753B\u9762\u6BD4\u4F8B"),ge.map(c=>s.default.createElement("button",{key:c.id,type:"button",className:`cf-menu-item${C===c.id?" is-on":""}`,role:"menuitem",onClick:()=>{T(c.id),Y(null)}},s.default.createElement("span",{className:"cf-menu-label"},c.label),s.default.createElement("span",{className:"cf-menu-meta"},c.w," \xD7 ",c.h))),s.default.createElement("div",{className:"cf-menu-sep"}),s.default.createElement("p",{className:"cf-menu-head"},"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),s.default.createElement("div",{className:"cf-menu-custom"},s.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:Z,"aria-label":"\u5BBD",onChange:c=>R(Number(c.target.value.replace(/\D/g,""))||0)}),s.default.createElement("span",{className:"cf-menu-x","aria-hidden":"true"},"\xD7"),s.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:J,"aria-label":"\u9AD8",onChange:c=>ne(Number(c.target.value.replace(/\D/g,""))||0)}),s.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",disabled:!Z||!J,onClick:()=>{T(`${Z}:${J}`),Y(null)}},"\u5E94\u7528"))):null),s.default.createElement("div",{className:"cf-bar-slot"},s.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>Y(H==="count"?null:"count"),"aria-expanded":H==="count","aria-haspopup":"menu"},h," \u5F20",s.default.createElement(j,{name:"chevron",size:12})),H==="count"?s.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},s.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(c=>s.default.createElement("button",{key:c,type:"button",className:`cf-menu-item${h===c?" is-on":""}`,role:"menuitem",onClick:()=>{a(c),Y(null)}},c," \u5F20"))):null)),s.default.createElement("div",{className:"cf-composer-right"},s.default.createElement("div",{className:"cf-bar-slot"},s.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>Y(H==="model"?null:"model"),"aria-expanded":H==="model","aria-haspopup":"menu"},s.default.createElement(j,{name:"bars",size:15}),s.default.createElement("span",{className:"cf-bar-label"},me?me.label:"\u9009\u62E9\u6A21\u578B"),s.default.createElement(j,{name:"chevron",size:12})),H==="model"?s.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},s.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),oe.length?oe.map(c=>s.default.createElement("button",{key:c.key,type:"button",className:`cf-menu-item${c.key===b?" is-on":""}`,role:"menuitem",onClick:()=>{O(c.key),Y(null)}},s.default.createElement("span",{className:"cf-menu-label"},c.label),s.default.createElement("span",{className:"cf-menu-meta"},c.channel.name||c.channel.protocol))):s.default.createElement("p",{className:"cf-menu-empty"},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0")):null),fe.length?s.default.createElement("span",{style:{display:"inline-flex",gap:2}},s.default.createElement(X,{name:"group",label:"\u5305\u6210\u7EC4",onClick:B}),s.default.createElement(X,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:P})):null,s.default.createElement("button",{type:"button",className:"cf-send",onClick:S,disabled:!I.trim(),"aria-label":"\u53D1\u9001\u6D88\u606F","data-tip":"\u53D1\u9001\u6D88\u606F"},s.default.createElement(j,{name:"arrowUp",size:17})))))))}var u=de(require("react"),1);function ra({channels:e,defaults:t,records:o,prompt:n,onPrompt:f,onCreateRecord:l,onDeleteRecords:g,onLookupPrompts:M,say:k}){let d=f,[w,E]=u.default.useState(t?.ratio||"1:1"),[y,I]=u.default.useState(t?.quality||"\u81EA\u52A8"),[$,C]=u.default.useState(t?.resolution||"\u81EA\u52A8"),[T,h]=u.default.useState(t?.modelKey||""),[a,b]=u.default.useState(1024),[O,H]=u.default.useState(1024),[Y,Q]=u.default.useState(!0),[G,Z]=u.default.useState([]),[R,J]=u.default.useState(!1),[ne,ue]=u.default.useState([]),[te,ce]=u.default.useState(!1),ie=ye(e,"image"),V=xe(e,T)||ie[0]||null,ee=z=>{E(z);let q=ge.find(se=>se.id===z);q&&(b(q.w),H(q.h))},fe=()=>{let z=n.trim();if(!z){k?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}let q=oe=>{let me=Math.max(256,Math.min(4096,Math.round(oe)));return Y?Math.round(me/16)*16:me};J(!0);let se={id:`r${Date.now().toString(36)}`,prompt:z,model:V?V.label:"\u672A\u9009\u62E9\u6A21\u578B",ratio:w,size:`${q(a)}x${q(O)}`,quality:y,resolution:$,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};l?.(se),setTimeout(()=>{J(!1),ue(oe=>[{...se,id:`img${Date.now().toString(36)}`},...oe]),k?.("\u751F\u6210\u5B8C\u6210")},1100)},U=z=>Z(q=>q.includes(z)?q.filter(se=>se!==z):[...q,z]);return u.default.createElement("div",{className:"cf-page"},u.default.createElement("div",{className:"cf-page-inner"},u.default.createElement("div",{className:"cf-studio"},u.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),u.default.createElement("span",{className:"cf-card-count"},o.length)),u.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)"}},u.default.createElement("div",{style:{display:"flex",gap:6}},u.default.createElement(L,{size:"sm",icon:"plus",onClick:()=>d("")},"\u65B0\u5EFA"),u.default.createElement(L,{size:"sm",onClick:()=>Z(o.map(z=>z.id))},"\u5168\u9009"),u.default.createElement(L,{size:"sm",variant:"danger",disabled:!G.length,onClick:()=>{g?.(G),Z([])}},"\u5220\u9664")),o.length===0?u.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):u.default.createElement("div",{className:"cf-record-list"},o.map(z=>u.default.createElement("div",{key:z.id,style:{display:"flex",alignItems:"center",gap:6}},u.default.createElement("input",{type:"checkbox",checked:G.includes(z.id),onChange:()=>U(z.id),"aria-label":`\u9009\u62E9 ${z.prompt}`}),u.default.createElement("button",{type:"button",className:"cf-record",style:{flex:1,minWidth:0},onClick:()=>{d(z.prompt),E(z.ratio)}},u.default.createElement("span",{className:"cf-record-prompt"},z.prompt),u.default.createElement("span",{className:"cf-record-meta"},z.model," \xB7 ",z.size," \xB7 ",z.at)))))))),u.default.createElement("div",{className:"cf-studio-col"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),u.default.createElement("div",{className:"cf-card-body cf-form"},u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),u.default.createElement("div",{className:"cf-form-head-actions"},u.default.createElement(L,{size:"sm",icon:"book",onClick:()=>M?.()},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),u.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:n,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:z=>d(z.target.value)})),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),u.default.createElement("div",{className:"cf-form-head-actions"},u.default.createElement(L,{size:"sm",onClick:()=>k?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u526A\u5207\u677F"),u.default.createElement(L,{size:"sm",icon:"upload",onClick:()=>k?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u4E0A\u4F20"))),u.default.createElement("div",{className:"cf-drop"},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC")),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),u.default.createElement("div",{style:{position:"relative"}},u.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>ce(z=>!z)},u.default.createElement(j,{name:"sparkle",size:13}),u.default.createElement("span",null,V?V.label:"\u9009\u62E9\u6A21\u578B"),u.default.createElement(j,{name:"chevron",size:12})),te?u.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},ie.length?ie.map(z=>u.default.createElement("button",{key:z.key,type:"button",className:`cf-menu-item${z.key===(T||ie[0]?.key)?" is-on":""}`,onClick:()=>{h(z.key),ce(!1)}},z.label," ",u.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",z.channel.name||z.channel.protocol))):u.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),u.default.createElement("div",{className:"cf-chips"},Se.map(z=>u.default.createElement("button",{key:z,type:"button",className:`cf-chip${y===z?" is-on":""}`,onClick:()=>I(z)},z)))),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),u.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},u.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),u.default.createElement("input",{type:"checkbox",checked:Y,onChange:z=>Q(z.target.checked)}))),u.default.createElement("div",{className:"cf-size-row"},u.default.createElement("input",{className:"cf-input cf-input--num",value:a,"aria-label":"\u5BBD",onChange:z=>b(Number(z.target.value.replace(/\D/g,""))||0)}),u.default.createElement(j,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),u.default.createElement("input",{className:"cf-input cf-input--num",value:O,"aria-label":"\u9AD8",onChange:z=>H(Number(z.target.value.replace(/\D/g,""))||0)})),u.default.createElement("div",{className:"cf-chips"},ge.map(z=>u.default.createElement("button",{key:z.id,type:"button",className:`cf-chip cf-chip--tag${w===z.id?" is-on":""}`,onClick:()=>ee(z.id)},z.label)))),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),u.default.createElement("div",{className:"cf-chips"},Ie.map(z=>u.default.createElement("button",{key:z,type:"button",className:`cf-chip${$===z?" is-on":""}`,onClick:()=>C(z)},z)))),u.default.createElement(L,{variant:"primary",icon:R?"refresh":"play",onClick:fe,disabled:R||!n.trim()},R?"\u751F\u6210\u4E2D\u2026":"\u5F00\u59CB\u751F\u6210")))),u.default.createElement("div",{className:"cf-studio-col"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),u.default.createElement("span",{className:"cf-card-count"},ne.length)),u.default.createElement("div",{className:"cf-card-body"},ne.length===0?u.default.createElement(le,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):u.default.createElement("div",{className:"cf-results"},ne.map(z=>u.default.createElement(Pa,{key:z.id,record:z})))))))))}function Pa({record:e}){let t=u.default.useRef(null);return u.default.useEffect(()=>{let o=t.current;if(!o)return;let n=320;o.width=n,o.height=n;let f=o.getContext("2d"),l=11;for(let k of`${e.prompt}${e.id}`)l=(l*31+k.charCodeAt(0))%2147483647;let g=()=>(l=l*16807%2147483647)/2147483647;f.fillStyle="#141414",f.fillRect(0,0,n,n);let M=f.createRadialGradient(n*g(),n*g(),20,n/2,n/2,n*.7);M.addColorStop(0,"rgba(255,255,255,0.18)"),M.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=M,f.fillRect(0,0,n,n),f.strokeStyle="rgba(255,255,255,0.3)",f.lineWidth=1.4;for(let k=0;k<5;k++){let d=n*(.2+g()*.6);f.beginPath(),f.moveTo(0,d),f.lineTo(n,d+(g()-.5)*60),f.stroke()}},[e.id,e.prompt]),u.default.createElement("figure",{className:"cf-result",title:`${e.prompt}
${e.model} \xB7 ${e.size}`},u.default.createElement("canvas",{ref:t,"aria-label":e.prompt}))}var D=de(require("react"),1);var Oe=6;function sa({prompts:e,sources:t,onUse:o,onBack:n,returnTo:f}){let[l,g]=D.default.useState(""),[M,k]=D.default.useState("\u5168\u90E8"),[d,w]=D.default.useState("\u5168\u90E8"),[E,y]=D.default.useState(Oe),I=["\u5168\u90E8",...new Set(e.map(a=>a.category).filter(Boolean))],$=["\u5168\u90E8",...new Set(e.flatMap(a=>a.tags||[]))],C=e.filter(a=>{if(M!=="\u5168\u90E8"&&a.category!==M||d!=="\u5168\u90E8"&&!(a.tags||[]).includes(d))return!1;if(!l)return!0;let b=l.toLowerCase();return(a.title||"").toLowerCase().includes(b)||(a.text||"").toLowerCase().includes(b)||(a.tags||[]).some(O=>O.toLowerCase().includes(b))}),T=C.slice(0,E),h=C.length>T.length;return D.default.useEffect(()=>{y(Oe)},[l,M,d]),D.default.createElement("div",{className:"cf-page"},D.default.createElement("div",{className:"cf-page-inner"},D.default.createElement("div",{className:"cf-title-center"},D.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),D.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD"),f&&n?D.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:n},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),D.default.createElement("div",{className:"cf-split"},D.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},D.default.createElement("div",{className:"cf-filter-group"},D.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),D.default.createElement("div",{className:"cf-filter-chips"},I.map(a=>D.default.createElement("button",{key:a,type:"button",className:`cf-chip cf-chip--tag${M===a?" is-on":""}`,onClick:()=>k(a)},a)))),D.default.createElement("div",{className:"cf-filter-group"},D.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),D.default.createElement("div",{className:"cf-filter-chips"},$.map(a=>D.default.createElement("button",{key:a,type:"button",className:`cf-chip cf-chip--tag${d===a?" is-on":""}`,onClick:()=>w(a)},a))))),D.default.createElement("div",null,D.default.createElement("div",{className:"cf-search"},D.default.createElement(j,{name:"search",size:15}),D.default.createElement("input",{className:"cf-input",value:l,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u6216\u6807\u7B7E",onChange:a=>g(a.target.value)})),t.length===0?D.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u63D0\u793A\u8BCD\u6765\u6E90\u3002\u5230\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u540E\uFF0C\u8FD9\u91CC\u4F1A\u5206\u9875\u52A0\u8F7D\u66F4\u591A\u3002"):null,C.length===0?D.default.createElement(le,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:l||M!=="\u5168\u90E8"||d!=="\u5168\u90E8"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u6765\u6E90\u3002"}):D.default.createElement(D.default.Fragment,null,D.default.createElement("ul",{className:"cf-prompt-grid"},T.map(a=>D.default.createElement("li",{key:a.id,className:"cf-prompt-card"},D.default.createElement("span",{className:"cf-prompt-title"},a.title),D.default.createElement("span",{className:"cf-prompt-text"},a.text),D.default.createElement("span",{className:"cf-prompt-tags"},a.category?D.default.createElement("span",{className:"cf-tag"},a.category):null,(a.tags||[]).map(b=>D.default.createElement("span",{key:b,className:"cf-tag"},b))),D.default.createElement("span",{style:{display:"flex",gap:6,marginTop:4}},D.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>o(a)},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"))))),h?D.default.createElement("div",{className:"cf-more"},D.default.createElement(L,{onClick:()=>y(a=>a+Oe)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",C.length-T.length," \u6761\uFF09")):D.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))))}var N=de(require("react"),1);function oa({assets:e,onSave:t,onDelete:o,onImport:n,say:f}){let[l,g]=N.default.useState(""),[M,k]=N.default.useState("all"),[d,w]=N.default.useState(null),[E,y]=N.default.useState(null),I=e.filter(C=>{if(M!=="all"&&C.kind!==M)return!1;if(!l)return!0;let T=l.toLowerCase();return[C.title,C.text,C.source,...C.tags||[]].filter(Boolean).some(h=>String(h).toLowerCase().includes(T))});return N.default.createElement("div",{className:"cf-page"},N.default.createElement("div",{className:"cf-page-inner"},N.default.createElement("div",{className:"cf-page-head"},N.default.createElement("div",null,N.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),N.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),N.default.createElement("div",{className:"cf-page-actions"},N.default.createElement(L,{icon:"upload",onClick:n},"\u5BFC\u5165\u8D44\u4EA7"),N.default.createElement(L,{icon:"download",onClick:()=>{let C=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),T=document.createElement("a");T.href=URL.createObjectURL(C),T.download="my-assets.json",T.click(),setTimeout(()=>URL.revokeObjectURL(T.href),2e3),f?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),N.default.createElement(L,{variant:"primary",icon:"plus",onClick:()=>w({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),N.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},N.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},N.default.createElement("div",{className:"cf-filter-group"},N.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),N.default.createElement("div",{className:"cf-filter-chips"},Be.map(C=>N.default.createElement("button",{key:C.id,type:"button",className:`cf-chip cf-chip--tag${M===C.id?" is-on":""}`,onClick:()=>k(C.id)},C.label))))),N.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},N.default.createElement(j,{name:"search",size:15}),N.default.createElement("input",{className:"cf-input",value:l,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:C=>g(C.target.value)}))),I.length===0?N.default.createElement(le,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:l||M!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:N.default.createElement(L,{variant:"primary",icon:"plus",onClick:()=>w({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):N.default.createElement("div",{className:"cf-asset-grid"},I.map(C=>N.default.createElement("div",{key:C.id,className:"cf-asset"},N.default.createElement("div",{className:"cf-asset-thumb"},C.kind==="image"&&C.cover?N.default.createElement("img",{src:C.cover,alt:C.title}):N.default.createElement(j,{name:C.kind==="image"?"image":C.kind==="video"?"play":"text",size:22})),N.default.createElement("div",{className:"cf-asset-body"},N.default.createElement("span",{className:"cf-asset-title"},C.title||"\u672A\u547D\u540D\u8D44\u4EA7"),N.default.createElement("span",{className:"cf-asset-meta"},C.source||"\u6765\u6E90\u672A\u6CE8\u660E",C.tags?.length?` \xB7 ${C.tags.join(" / ")}`:""),N.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},N.default.createElement(X,{name:"edit",label:"\u7F16\u8F91",onClick:()=>w({...C})}),N.default.createElement(X,{name:"trash",label:"\u5220\u9664",onClick:()=>y(C)}))))))),d?N.default.createElement(La,{asset:d,onClose:()=>w(null),onSave:C=>{let T=C.id?e.map(h=>h.id===C.id?C:h):[...e,{...C,id:F("a")}];t(T),w(null),f?.(C.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,E?N.default.createElement(pe,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>y(null),footer:N.default.createElement(N.default.Fragment,null,N.default.createElement(L,{onClick:()=>y(null)},"\u53D6\u6D88"),N.default.createElement(L,{variant:"danger",onClick:()=>{o(E.id),y(null),f?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},N.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",E.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function La({asset:e,onClose:t,onSave:o}){let[n,f]=N.default.useState({...e,tags:e.tags||[]}),l=(d,w)=>f(E=>({...E,[d]:w})),[g,M]=N.default.useState(""),k=n.title?.trim()&&(n.kind!=="text"||n.text?.trim());return N.default.createElement(pe,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:t,footer:N.default.createElement(N.default.Fragment,null,N.default.createElement(L,{onClick:t},"\u53D6\u6D88"),N.default.createElement(L,{variant:"primary",disabled:!k,onClick:()=>o({...n,title:n.title.trim()})},"\u4FDD\u5B58"))},N.default.createElement("div",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),N.default.createElement("div",{className:"cf-chips"},Be.filter(d=>d.id!=="all").map(d=>N.default.createElement("button",{key:d.id,type:"button",className:`cf-chip${n.kind===d.id?" is-on":""}`,onClick:()=>l("kind",d.id)},d.label)))),N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),N.default.createElement("input",{className:"cf-input",value:n.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:d=>l("title",d.target.value)})),n.kind==="text"?N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),N.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:n.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:d=>l("text",d.target.value)})):N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),N.default.createElement("input",{className:"cf-input",value:n.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:d=>l("cover",d.target.value)})),N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),N.default.createElement("input",{className:"cf-input",value:g,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:d=>M(d.target.value),onKeyDown:d=>{if(d.key!=="Enter")return;d.preventDefault();let w=g.trim();w&&(l("tags",[...new Set([...n.tags||[],w])]),M(""))}}),n.tags?.length?N.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},n.tags.map(d=>N.default.createElement("button",{key:d,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>l("tags",n.tags.filter(w=>w!==d)),title:"\u70B9\u51FB\u79FB\u9664"},d," \xD7"))):null),N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),N.default.createElement("input",{className:"cf-input",value:n.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:d=>l("source",d.target.value)})))}var i=de(require("react"),1);var Aa=[{id:"channels",label:"\u6E20\u9053"},{id:"proxy",label:"\u672C\u5730\u4EE3\u7406"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"},{id:"webdav",label:"WebDAV"},{id:"storage",label:"\u672C\u5730\u5B58\u50A8"}];function la({tab:e,onTab:t,channels:o,onChannels:n,defaults:f,onDefaults:l,promptSources:g,onPromptSources:M,say:k}){let[d,w]=i.default.useState(null),[E,y]=i.default.useState(null),[I,$]=i.default.useState({name:"",url:""});return i.default.createElement("div",{className:"cf-page"},i.default.createElement("div",{className:"cf-page-inner"},i.default.createElement("div",{className:"cf-page-head"},i.default.createElement("div",null,i.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),i.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u6A21\u578B\u9009\u62E9\u3001\u540C\u6B65\u4E0E\u672C\u5730\u5B58\u50A8"))),i.default.createElement("div",{className:"cf-config-notice"},i.default.createElement("span",null,"JSON \u6587\u4EF6\u5305\u542B API Key \u548C WebDAV \u51ED\u636E\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),i.default.createElement("span",{className:"cf-config-notice-actions"},i.default.createElement(L,{size:"sm",icon:"upload",onClick:()=>{let h=document.createElement("input");h.type="file",h.accept=".json,application/json",h.onchange=async()=>{let a=h.files?.[0];if(a)try{let b=JSON.parse(await a.text());Array.isArray(b.channels)&&n(b.channels),b.defaults&&l(b.defaults),Array.isArray(b.promptSources)&&M(b.promptSources),k?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{k?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},h.click()}},"\u5BFC\u5165\u914D\u7F6E"),i.default.createElement(L,{size:"sm",icon:"download",onClick:()=>{let h={version:1,channels:o,defaults:f,promptSources:g},a=new Blob([JSON.stringify(h,null,2)],{type:"application/json"}),b=document.createElement("a");b.href=URL.createObjectURL(a),b.download="chunfeng-config.json",b.click(),setTimeout(()=>URL.revokeObjectURL(b.href),2e3),k?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),i.default.createElement("div",{className:"cf-tabs",role:"tablist"},Aa.map(h=>i.default.createElement("button",{key:h.id,type:"button",role:"tab","aria-selected":e===h.id,className:`cf-tab${e===h.id?" is-on":""}`,onClick:()=>t(h.id)},h.label))),e==="channels"?i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"cf-section-head"},i.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u8C03\u7528\u811A\u672C\u3002"),i.default.createElement(L,{icon:"plus",onClick:()=>w(Te())},"\u65B0\u589E\u6E20\u9053")),o.length===0?i.default.createElement(le,{icon:"sliders",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:i.default.createElement(L,{variant:"primary",icon:"plus",onClick:()=>w(Te())},"\u65B0\u589E\u6E20\u9053")}):i.default.createElement("div",{className:"cf-channel-list"},o.map(h=>i.default.createElement("div",{key:h.id,className:"cf-channel"},i.default.createElement("div",{className:"cf-channel-main"},i.default.createElement("span",{className:"cf-channel-name"},h.name||"\u672A\u547D\u540D\u6E20\u9053"),i.default.createElement("span",{className:"cf-channel-meta"},be.find(a=>a.id===h.protocol)?.label||h.protocol," \xB7 ",h.models.length," \u4E2A\u6A21\u578B"," \xB7 ",h.baseUrl,h.keyHint?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${h.keyHint}`:" \xB7 \u672A\u586B\u5BC6\u94A5")),i.default.createElement("span",{className:"cf-channel-actions"},i.default.createElement(X,{name:"edit",label:"\u7F16\u8F91",onClick:()=>w({...h})}),i.default.createElement(X,{name:"trash",label:"\u5220\u9664",onClick:()=>y(h)})))))):null,e==="defaults"?i.default.createElement(Oa,{channels:o,defaults:f,onDefaults:l}):null,e==="sources"?i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"cf-section-head"},i.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B\u6765\u6E90\u5206\u9875\u52A0\u8F7D\u3002\u7559\u7A7A\u65F6\u53EA\u663E\u793A\u5185\u7F6E\u63D0\u793A\u8BCD\u3002")),i.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},i.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},i.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:I.name,onChange:h=>$(a=>({...a,name:h.target.value}))}),i.default.createElement("input",{className:"cf-input",placeholder:"\u63D0\u793A\u8BCD\u6765\u6E90\u5730\u5740\uFF08JSON\uFF09",value:I.url,onChange:h=>$(a=>({...a,url:h.target.value}))}),i.default.createElement(L,{variant:"primary",disabled:!I.url.trim(),onClick:()=>{M([...g,{id:F("src"),name:I.name.trim()||"\u672A\u547D\u540D\u6765\u6E90",url:I.url.trim()}]),$({name:"",url:""}),k?.("\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),g.length===0?i.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002"):i.default.createElement("div",{style:{display:"grid",gap:2}},g.map(h=>i.default.createElement("div",{key:h.id,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},i.default.createElement("span",{style:{fontSize:13}},h.name),i.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},h.url),i.default.createElement(X,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>M(g.filter(a=>a.id!==h.id)),style:{marginInlineStart:"auto"}})))))):null,e==="proxy"?i.default.createElement(He,{title:"\u672C\u5730\u4EE3\u7406",desc:"\u8BA9\u51FA\u56FE\u8BF7\u6C42\u7ECF\u8FC7\u672C\u673A\u4EE3\u7406\u3002",items:["\u4EE3\u7406\u5730\u5740\uFF08http://127.0.0.1:7890\uFF09","\u4EC5\u5BF9\u6307\u5B9A\u6E20\u9053\u751F\u6548","\u8FDE\u901A\u6027\u6D4B\u8BD5"]}):null,e==="webdav"?i.default.createElement(He,{title:"WebDAV",desc:"\u628A\u753B\u5E03\u548C\u8D44\u4EA7\u540C\u6B65\u5230\u81EA\u5DF1\u7684 WebDAV\u3002",items:["\u670D\u52A1\u5668\u5730\u5740","\u8D26\u53F7\u4E0E\u5BC6\u7801","\u540C\u6B65\u8303\u56F4\uFF1A\u753B\u5E03 / \u8D44\u4EA7 / \u63D0\u793A\u8BCD"]}):null,e==="storage"?i.default.createElement(He,{title:"\u672C\u5730\u5B58\u50A8",desc:"\u6570\u636E\u76EE\u524D\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\uFF1B\u63A5\u4E0A Host \u540E\u4F1A\u843D\u5230 ~/.dsh/dsh-chunfeng-image/\u3002",items:["\u753B\u5E03\u4E0E\u8282\u70B9","\u751F\u6210\u7684\u56FE\u7247\u6587\u4EF6","\u914D\u7F6E\u6587\u4EF6\uFF08\u542B\u5BC6\u94A5\u51ED\u8BC1\uFF09"]}):null),d?i.default.createElement(Ha,{channel:d,onClose:()=>w(null),onSave:h=>{let a=o.some(b=>b.id===h.id);n(a?o.map(b=>b.id===h.id?h:b):[...o,h]),w(null),k?.(a?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,E?i.default.createElement(pe,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>y(null),footer:i.default.createElement(i.default.Fragment,null,i.default.createElement(L,{onClick:()=>y(null)},"\u53D6\u6D88"),i.default.createElement(L,{variant:"danger",onClick:()=>{n(o.filter(h=>h.id!==E.id)),y(null),k?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},i.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",E.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",E.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function Oa({channels:e,defaults:t,onDefaults:o}){let n=ye(e,"image"),f=l=>o({...t,image:{...t.image,...l}});return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"cf-section-head"},i.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),i.default.createElement("div",{className:"cf-defaults"},i.default.createElement("label",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),i.default.createElement("select",{className:"cf-input",value:t.image.modelKey||"",onChange:l=>f({modelKey:l.target.value})},i.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),n.map(l=>i.default.createElement("option",{key:l.key,value:l.key},l.label," \xB7 ",l.channel.name||l.channel.protocol))),n.length===0?i.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),i.default.createElement("div",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),i.default.createElement("div",{className:"cf-chips"},ge.map(l=>i.default.createElement("button",{key:l.id,type:"button",className:`cf-chip${t.image.ratio===l.id?" is-on":""}`,onClick:()=>f({ratio:l.id})},l.label)))),i.default.createElement("div",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),i.default.createElement("div",{className:"cf-chips"},Se.map(l=>i.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.quality===l?" is-on":""}`,onClick:()=>f({quality:l})},l)))),i.default.createElement("div",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),i.default.createElement("div",{className:"cf-chips"},Ie.map(l=>i.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.resolution===l?" is-on":""}`,onClick:()=>f({resolution:l})},l)))),i.default.createElement("div",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),i.default.createElement("div",{className:"cf-chips"},[1,2,4].map(l=>i.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.count===l?" is-on":""}`,onClick:()=>f({count:l})},l," \u5F20"))))))}function He({title:e,desc:t,items:o}){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"cf-section-head"},i.default.createElement("p",{className:"cf-section-desc"},t)),i.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)"}},i.default.createElement("p",{style:{fontSize:13,fontWeight:500,marginBottom:8}},e),i.default.createElement("ul",{style:{display:"grid",gap:6}},o.map(n=>i.default.createElement("li",{key:n,style:{fontSize:12,color:"var(--cf-muted)",display:"flex",gap:8,alignItems:"center"}},i.default.createElement("span",{style:{width:4,height:4,borderRadius:999,background:"var(--cf-caption)"},"aria-hidden":"true"}),n))),i.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",marginTop:12}},"\u8FD9\u4E00\u7248\u5148\u628A\u4F4D\u7F6E\u7559\u597D\uFF0C\u63A5\u5165 Host \u540E\u518D\u586B\u3002")))}function Ha({channel:e,onClose:t,onSave:o}){let[n,f]=i.default.useState({...e}),[l,g]=i.default.useState(""),[M,k]=i.default.useState(""),d=(y,I)=>f($=>({...$,[y]:I})),w=()=>{let y=M.trim();if(y){if(n.models.some(I=>I.id===y)){k("");return}d("models",[...n.models,{id:y,label:y,caps:Ka(y),enabled:!0,source:"manual"}]),k("")}},E=(y,I)=>{d("models",n.models.map($=>{if($.id!==y)return $;let C=$.caps||[];return{...$,caps:C.includes(I)?C.filter(T=>T!==I):[...C,I]}}))};return i.default.createElement(pe,{title:e.id&&e.models?"\u7F16\u8F91\u6E20\u9053":"\u65B0\u589E\u6E20\u9053",wide:!0,onClose:t,footer:i.default.createElement(i.default.Fragment,null,i.default.createElement(L,{onClick:t},"\u53D6\u6D88"),i.default.createElement(L,{variant:"primary",disabled:!n.baseUrl.trim(),onClick:()=>{let y=l.trim()?l.trim().slice(-4):n.keyHint;o({...n,keyHint:y||"",hasKey:!!l.trim()||n.hasKey})}},"\u4FDD\u5B58"))},i.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},i.default.createElement("label",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),i.default.createElement("input",{className:"cf-input",value:n.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:y=>d("name",y.target.value)})),i.default.createElement("label",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),i.default.createElement("select",{className:"cf-input",value:n.protocol,onChange:y=>{let I=be.find($=>$.id===y.target.value);d("protocol",y.target.value),I&&d("baseUrl",I.baseUrl)}},be.map(y=>i.default.createElement("option",{key:y.id,value:y.id},y.label))))),i.default.createElement("label",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),i.default.createElement("input",{className:"cf-input",value:n.baseUrl,placeholder:"https://api.example.com/v1",onChange:y=>d("baseUrl",y.target.value)})),i.default.createElement("label",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"API Key",n.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${n.keyHint}\uFF09`:""),i.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:l,placeholder:n.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:y=>g(y.target.value)}),i.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),i.default.createElement("div",{className:"cf-field"},i.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),i.default.createElement("div",{style:{display:"flex",gap:6}},i.default.createElement("input",{className:"cf-input",value:M,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:y=>k(y.target.value),onKeyDown:y=>{y.key==="Enter"&&(y.preventDefault(),w())}}),i.default.createElement(L,{onClick:w,disabled:!M.trim()},"\u6DFB\u52A0")),n.models.length===0?i.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u4FDD\u5B58\u6E20\u9053\u540E\u53EF\u4EE5\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u5728\u8FD9\u91CC\u624B\u52A8\u6DFB\u52A0\u3002"):i.default.createElement("div",{style:{display:"grid",gap:6,marginTop:4}},n.models.map(y=>i.default.createElement("div",{key:y.id,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",padding:"8px 10px",borderRadius:"var(--cf-r-sm)",boxShadow:"inset 0 0 0 var(--cf-hair) var(--cf-line)"}},i.default.createElement("span",{style:{fontSize:12,minWidth:120}},y.label||y.id),i.default.createElement("span",{style:{display:"flex",gap:4,marginInlineStart:"auto"}},Fe.map(I=>i.default.createElement("button",{key:I.id,type:"button",className:`cf-chip cf-chip--tag${(y.caps||[]).includes(I.id)?" is-on":""}`,onClick:()=>E(y.id,I.id)},I.label))),i.default.createElement(X,{name:"trash",label:`\u79FB\u9664 ${y.id}`,onClick:()=>d("models",n.models.filter(I=>I.id!==y.id))}))))),i.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u81EA\u52A8\u62C9\u53D6\u6A21\u578B\u4E0E\u300C\u5B9E\u6D4B\u51FA\u56FE\u300D\u4F1A\u5728\u63A5\u4E0A Host \u540E\u53EF\u7528\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u624B\u52A8\u6DFB\u52A0\u5E76\u52FE\u9009\u80FD\u529B\u3002"))}function Ka(e){let t=e.toLowerCase();return/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(t)?["image"]:/veo|kling|sora|runway|video/.test(t)?["video"]:/tts|audio|speech|whisper|music/.test(t)?["audio"]:["text"]}var ca="dsh-chunfeng-image:state:v2";function ja(){try{let e=localStorage.getItem(ca);if(!e)return null;let t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch{return null}}function fa(){let[e,t]=A.default.useState(()=>{let a=qe(),b=ja(),O=b?{...a,...b}:a;return!O.canvases.length&&!b&&(O.canvases=[{...Ee("\u9713\u8679\u8857\u89D2"),...Pe()}],O.openCanvasId=null),O}),[o,n]=A.default.useState(""),[f,l]=A.default.useState(null),[g,M]=A.default.useState(null),k=A.default.useRef(0);A.default.useEffect(()=>{try{localStorage.setItem(ca,JSON.stringify(e))}catch{}},[e]);let d=A.default.useCallback((a,b)=>{M({text:a,kind:b,at:Date.now()}),clearTimeout(k.current),k.current=setTimeout(()=>M(null),2200)},[]);A.default.useEffect(()=>()=>clearTimeout(k.current),[]);let w=a=>t(b=>({...b,...a})),E=e.canvases.find(a=>a.id===e.openCanvasId)||null,y=Qe(e),I=a=>{l(null),t(b=>Ze(b,a))},$=(a,b)=>w({canvases:e.canvases.map(O=>O.id===a?{...O,...b,updatedAt:Date.now()}:O)}),C=()=>{let a={...Ee(),...Pe()};w({canvases:[a,...e.canvases],openCanvasId:a.id,view:"canvas"}),d("\u5DF2\u65B0\u5EFA\u753B\u5E03")},T=()=>{let a=document.createElement("input");a.type="file",a.accept=".json,application/json",a.onchange=async()=>{let b=a.files?.[0];if(b)try{let O=JSON.parse(await b.text()),H={...Ee(O.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(O.nodes)?O.nodes:[],edges:Array.isArray(O.edges)?O.edges:[],grid:O.grid||"dots"};w({canvases:[H,...e.canvases],openCanvasId:H.id,view:"canvas"}),d("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{d("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},a.click()},h=a=>{if(E){let b={id:F("i"),type:"image",x:220+E.nodes.length*26,y:220+E.nodes.length*20,w:240,h:268,name:"",status:"idle",z:2,prompt:a.text,ratio:e.defaults.image.ratio||"1:1",locked:!0};$(E.id,{nodes:[...E.nodes,b]}),d(`\u5DF2\u7528\u300C${a.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}n(a.text),w({view:"studio",openCanvasId:null}),d(`\u5DF2\u586B\u5165\u300C${a.title}\u300D`)};return A.default.createElement("div",{className:"cf-app"},A.default.createElement("style",null,Ye),A.default.createElement("div",{className:"cf-ambient","aria-hidden":"true"},A.default.createElement("i",null),A.default.createElement("i",null),A.default.createElement("i",null)),A.default.createElement("header",{className:"cf-nav"},A.default.createElement("span",{className:"cf-brand"},A.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round","aria-hidden":"true"},A.default.createElement("path",{d:"M12 3.5L21 19H3z"}),A.default.createElement("path",{d:"M12 9.5v5.5",strokeLinecap:"round"})),"\u6625\u98CE\u753B\u5E03"),A.default.createElement("nav",{className:"cf-nav-list","aria-label":"\u4E3B\u5BFC\u822A"},Xe.map(a=>{let b=a.id==="canvas"?y==="canvas"||y==="editor":y===a.id;return A.default.createElement("button",{key:a.id,type:"button",className:`cf-nav-item${b?" is-on":""}`,onClick:()=>I(a.id),"aria-current":b?"page":void 0},A.default.createElement(j,{name:a.icon,size:15}),a.label)})),A.default.createElement("div",{className:"cf-nav-right"},E?A.default.createElement(A.default.Fragment,null,A.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},E.name),A.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}].map(a=>A.default.createElement("button",{key:a.id,type:"button",className:(E.grid||"dots")===a.id?"is-on":"",onClick:()=>$(E.id,{grid:a.id})},a.label)))):null,A.default.createElement("span",{className:"cf-nav-version"},"v0.1.0"),A.default.createElement(X,{name:"keyboard",label:"\u5FEB\u6377\u952E",onClick:()=>d("V \u9009\u62E9 \xB7 H \u79FB\u52A8 \xB7 T/I/A/C/G \u65B0\u5EFA\u8282\u70B9 \xB7 \u2318D \u590D\u5236 \xB7 \u2318G \u5305\u7EC4 \xB7 \u232B \u5220\u9664")}))),y==="editor"&&E?A.default.createElement(ia,{canvas:E,channels:e.channels,defaults:e.defaults.image,onChange:a=>$(E.id,a),onBack:()=>t(a=>ea(a)),say:d}):null,y==="canvas"?A.default.createElement(ta,{canvases:e.canvases,onOpen:a=>t(b=>Re(b,a)),onCreate:C,onRename:(a,b)=>$(a,{name:b}),onDelete:a=>w({canvases:e.canvases.filter(b=>b.id!==a),openCanvasId:null}),onImport:T}):null,y==="studio"?A.default.createElement(ra,{channels:e.channels,defaults:e.defaults.image,records:e.records,prompt:o,onPrompt:n,onCreateRecord:a=>w({records:[a,...e.records]}),onDeleteRecords:a=>w({records:e.records.filter(b=>!a.includes(b.id))}),onLookupPrompts:()=>{l("studio"),w({view:"prompts",openCanvasId:null})},say:d}):null,y==="prompts"?A.default.createElement(sa,{prompts:e.prompts,sources:e.promptSources,returnTo:f,onUse:h,onBack:f?()=>{l(null),w({view:f})}:null}):null,y==="assets"?A.default.createElement(oa,{assets:e.assets,onSave:a=>w({assets:a}),onDelete:a=>w({assets:e.assets.filter(b=>b.id!==a)}),onImport:()=>d("\u8D44\u4EA7\u5305\u5BFC\u5165\u63A5 Host \u540E\u53EF\u7528"),say:d}):null,y==="config"?A.default.createElement(la,{tab:e.configTab,onTab:a=>w({configTab:a}),channels:e.channels,onChannels:a=>w({channels:a}),defaults:e.defaults,onDefaults:a=>w({defaults:a}),promptSources:e.promptSources,onPromptSources:a=>w({promptSources:a}),say:d}):null,g?A.default.createElement(Ve,{text:g.text,kind:g.kind}):null)}var da="dsh-chunfeng-image",Ua=["slots"];function Wa(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:da},fa)),e.effect(()=>{let t=null;return(()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:da,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},Ya))})(),()=>t?.()},"dsh-chunfeng-image: sidebar entry")}function Ya(){return pa.default.createElement(j,{name:"canvas",size:16})}
return module.exports}})
