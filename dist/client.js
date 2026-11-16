window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ha=Object.create;var Ee=Object.defineProperty;var ba=Object.getOwnPropertyDescriptor;var xa=Object.getOwnPropertyNames;var ya=Object.getPrototypeOf,wa=Object.prototype.hasOwnProperty;var ka=(e,t)=>{for(var s in t)Ee(e,s,{get:t[s],enumerable:!0})},Ye=(e,t,s,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of xa(t))!wa.call(e,c)&&c!==s&&Ee(e,c,{get:()=>t[c],enumerable:!(n=ba(t,c))||n.enumerable});return e};var ue=(e,t,s)=>(s=e!=null?ha(ya(e)):{},Ye(t||!e||!e.__esModule?Ee(s,"default",{value:e,enumerable:!0}):s,e)),Na=e=>Ye(Ee({},"__esModule",{value:!0}),e);var Fa={};ka(Fa,{apply:()=>_a,inject:()=>Va});module.exports=Na(Fa);var va=ue(require("react"),1);var P=ue(require("react"),1);var Ve=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
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
`;var _e=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
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
`;var Xe=`${Ve}
${_e}`;var i=ue(require("react"),1),za={canvas:i.default.createElement(i.default.Fragment,null,i.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),i.default.createElement("path",{d:"M3 10h18M9 10v10"})),image:i.default.createElement(i.default.Fragment,null,i.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),i.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),i.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),i.default.createElement("path",{d:"M5 17h14"})),folder:i.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:i.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),cursor:i.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:i.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:i.default.createElement(i.default.Fragment,null,i.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),i.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:i.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:i.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:i.default.createElement(i.default.Fragment,null,i.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),i.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),i.default.createElement("path",{d:"M11 11l2 2"})),search:i.default.createElement(i.default.Fragment,null,i.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),i.default.createElement("path",{d:"M16 16l4 4"})),plus:i.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:i.default.createElement("path",{d:"M5 12h14"}),trash:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),i.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),i.default.createElement("path",{d:"M14 6l4 4"})),close:i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:i.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M12 16V4"}),i.default.createElement("path",{d:"M7 9l5-5 5 5"}),i.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M12 4v12"}),i.default.createElement("path",{d:"M7 11l5 5 5-5"}),i.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:i.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),i.default.createElement("path",{d:"M20 4v4h-4"})),more:i.default.createElement(i.default.Fragment,null,i.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),i.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),i.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M9 8H4v5"}),i.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M15 8h5v5"}),i.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),map:i.default.createElement(i.default.Fragment,null,i.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),i.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:i.default.createElement(i.default.Fragment,null,i.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),i.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M9 15l6-6"}),i.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),i.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),i.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),play:i.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:i.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M10 6l-5 6 5 6"}),i.default.createElement("path",{d:"M5 12h14"})),arrowUp:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M12 19V5"}),i.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"}))};function j({name:e,size:t=16,...s}){let n=za[e];return n?i.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...s},n):null}function F({name:e,label:t,size:s=16,...n}){return i.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":t,title:t,...n},i.default.createElement(j,{name:e,size:s}))}function B({variant:e="ghost",size:t,icon:s,children:n,...c}){return i.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${t==="sm"?" cf-btn--sm":""}`,...c},s?i.default.createElement(j,{name:s,size:14}):null,n)}function me({title:e,children:t,footer:s,onClose:n,wide:c}){return i.default.useEffect(()=>{let l=v=>{v.key==="Escape"&&n()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[n]),i.default.createElement("div",{className:"cf-scrim",onPointerDown:l=>{l.target===l.currentTarget&&n()}},i.default.createElement("div",{className:`cf-dialog${c?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},i.default.createElement("header",{className:"cf-dialog-head"},i.default.createElement("h2",{className:"cf-dialog-title"},e),i.default.createElement(F,{name:"close",label:"\u5173\u95ED",onClick:n})),i.default.createElement("div",{className:"cf-dialog-body"},t,s?i.default.createElement("div",{className:"cf-dialog-foot"},s):null)))}var De=class extends i.default.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,s){console.error("[\u6625\u98CE\u753B\u5E03] \u6E32\u67D3\u51FA\u9519",t,s)}render(){let{error:t}=this.state;if(!t)return this.props.children;let s=String(t&&t.message||t);return i.default.createElement("div",{className:"cf-crash",role:"alert"},i.default.createElement("span",{className:"cf-crash-icon"},i.default.createElement(j,{name:"refresh",size:22})),i.default.createElement("p",{className:"cf-crash-title"},"\u8FD9\u4E00\u5757\u51FA\u9519\u4E86"),i.default.createElement("p",{className:"cf-crash-detail"},s),i.default.createElement("div",{className:"cf-crash-actions"},i.default.createElement(B,{variant:"primary",size:"sm",onClick:()=>this.setState({error:null})},"\u91CD\u8BD5"),i.default.createElement(B,{size:"sm",onClick:()=>{try{localStorage.clear()}catch{}location.reload()}},"\u91CD\u7F6E\u672C\u5730\u6570\u636E")))}};function Fe({text:e,kind:t}){return i.default.createElement("p",{className:`cf-toast${t==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function fe({icon:e="canvas",title:t,hint:s,action:n}){return i.default.createElement("div",{className:"cf-empty"},i.default.createElement("span",{className:"cf-empty-icon"},i.default.createElement(j,{name:e,size:28})),i.default.createElement("p",{className:"cf-empty-title"},t),s?i.default.createElement("p",{className:"cf-empty-hint"},s):null,n)}var Ge=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],ze={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"};var xe=[{id:"1:1",label:"1:1",w:1024,h:1024},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1280,h:720},{id:"9:16",label:"9:16",w:720,h:1280}],$e=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],Be=["1k","2k","4k","\u81EA\u52A8"],Je=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],we=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],Le=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],qe=0;function q(e="x"){return qe+=1,`${e}_${Date.now().toString(36)}${qe.toString(36)}`}function Te(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:q("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}function Sa(e){switch(e){case"image":return{w:240,h:268};case"audio":return{w:240,h:140};case"text":return{w:230,h:160};case"config":return{w:240,h:176};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function Se(e,t,s={}){let n=Sa(e),c={id:q(e[0]),type:e,x:Math.round(t.x-n.w/2),y:Math.round(t.y-n.h/2),w:n.w,h:n.h,name:"",status:"idle",z:e==="group"?1:2,...s};return e==="text"&&(c.text=s.text??""),e==="config"&&(c.modelKey=s.modelKey??"",c.ratio=s.ratio??"1:1",c.count=s.count??1),e==="image"&&(c.prompt=s.prompt??"",c.ratio=s.ratio??"1:1",c.locked=s.locked??!0),e==="audio"&&(c.prompt=s.prompt??""),c}function Ae(e="openai"){let t=we.find(s=>s.id===e)||we[0];return{id:q("ch"),name:"",protocol:t.id,baseUrl:t.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function Ia(e,t){return`${e}:${t}`}function ke(e,t){if(!t)return null;let[s,...n]=t.split(":"),c=e.find(v=>v.id===s);if(!c)return null;let l=c.models.find(v=>v.id===n.join(":"));return l?{channel:c,model:l,label:l.label||l.id}:null}function Ne(e,t="image"){let s=[];for(let n of e)if(n.enabled)for(let c of n.models)c.enabled&&(c.caps||[]).includes(t)&&s.push({key:Ia(n.id,c.id),model:c,channel:n});return s}var Ea=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],Da=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function Qe(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:Ea.map(e=>({...e})),promptSources:[],assets:Da.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8"},canvasCount:1},records:[],configTab:"channels",grid:"dots"}}function Oe(){let e=(w,d,y,E,x,I)=>{let T=Se(w,{x:d+E/2,y:y+x/2},{...I,w:E,h:x});return T.x=d,T.y=y,T},t=e("group",660,120,640,700,{name:"\u9713\u8679\u8857\u89D2"}),s=e("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),n=e("config",400,300,240,176,{ratio:"3:4",count:1}),c=e("image",700,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),l=e("image",980,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),v=e("image",700,510,240,268,{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),C=[{id:q("e"),from:s.id,to:n.id},{id:q("e"),from:n.id,to:c.id},{id:q("e"),from:n.id,to:l.id},{id:q("e"),from:n.id,to:v.id}];return{nodes:[t,s,n,c,l,v],edges:C}}function Ze(e,t,s,n){if(s===n)return!1;let c=e.find(v=>v.id===s),l=e.find(v=>v.id===n);return!(!c||!l||c.type==="config"&&l.type==="config"||c.type==="group"||l.type==="group"||t.some(v=>v.from===s&&v.to===n))}function Re(e,t){let s=e.filter(w=>t.includes(w.id)&&w.type!=="group");if(!s.length)return null;let n=44,c=Math.min(...s.map(w=>w.x))-n,l=Math.min(...s.map(w=>w.y))-n-34,v=Math.max(...s.map(w=>w.x+w.w))+n,C=Math.max(...s.map(w=>w.y+w.h))+n;return Se("group",{x:(c+v)/2,y:(l+C)/2},{w:Math.round(v-c),h:Math.round(C-l),name:"\u65B0\u5206\u7EC4",childIds:s.map(w=>w.id),x:Math.round(c),y:Math.round(l)})}function ea(e){return e.openCanvasId?"editor":e.view}function aa(e,t){return{...e,view:t,openCanvasId:null}}function na(e,t){return{...e,openCanvasId:t}}function ta(e){return{...e,openCanvasId:null,view:"canvas"}}var o=ue(require("react"),1);var m=ue(require("react"),1);var Pe=.1,Ke=3,$a=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function ia(){let e=m.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),t=m.default.useCallback(c=>{if(!c)return;let l=e.current;c.style.transform=`translate3d(${l.x}px, ${l.y}px, 0) scale(${l.s})`},[]),s=m.default.useCallback((c,l)=>{let v=e.current;v.raf=0;let C=.24,w=v.tx-v.x,d=v.ty-v.y,y=v.ts-v.s;if(Math.abs(w)<.2&&Math.abs(d)<.2&&Math.abs(y)<8e-4){v.x=v.tx,v.y=v.ty,v.s=v.ts,t(c),l?.();return}v.x+=w*C,v.y+=d*C,v.s+=y*C,t(c),l?.(),v.raf=requestAnimationFrame(()=>s(c,l))},[t]),n=m.default.useCallback((c,l,v,C,w)=>{let d=e.current;if(d.tx=l,d.ty=v,d.ts=Math.min(Ke,Math.max(Pe,C)),$a()){d.x=d.tx,d.y=d.ty,d.s=d.ts,d.raf&&cancelAnimationFrame(d.raf),d.raf=0,t(c),w?.();return}d.raf||(d.raf=requestAnimationFrame(()=>s(c,w)))},[t,s]);return m.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:t,moveTo:n}}function He(e,t){if(!e||!t)return"";let s=e.x+e.w,n=e.y+e.h/2,c=t.x,l=t.y+t.h/2,v=Math.max(40,Math.abs(c-s)*.45);return`M ${s} ${n} C ${s+v} ${n}, ${c-v} ${l}, ${c} ${l}`}function Ba({node:e}){let t=m.default.useRef(null);return m.default.useEffect(()=>{let s=t.current;if(!s)return;let n=s.getContext("2d"),c=480;s.width=c,s.height=c;let l=`${e.id}${e.prompt||""}`,v=7;for(let d=0;d<l.length;d++)v=(v*31+l.charCodeAt(d))%2147483647;let C=()=>(v=v*16807%2147483647)/2147483647;n.fillStyle="#141414",n.fillRect(0,0,c,c);let w=n.createRadialGradient(c*(.25+C()*.5),c*(.3+C()*.4),24,c/2,c/2,c*.8);w.addColorStop(0,"rgba(255,255,255,0.16)"),w.addColorStop(.5,"rgba(255,255,255,0.05)"),w.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=w,n.fillRect(0,0,c,c),n.strokeStyle="rgba(255,255,255,0.22)",n.lineWidth=1.5;for(let d=0;d<6;d++){let y=c*(.18+C()*.66);n.beginPath(),n.moveTo(0,y),n.lineTo(c,y+(C()-.5)*80),n.stroke()}n.strokeStyle="rgba(255,255,255,0.4)";for(let d=0;d<3;d++){let y=c*(.2+C()*.6),E=40+C()*90;n.beginPath(),C()<.5?n.arc(y,c*(.3+C()*.4),E,0,Math.PI*2):n.rect(y-E/2,c*(.3+C()*.4)-E/2,E,E),n.stroke()}},[e.id,e.prompt]),m.default.createElement("canvas",{ref:t,"aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function Ta({node:e,channels:t}){switch(e.type){case"image":return m.default.createElement("div",{className:"cf-node-media"},e.src?m.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):null,!e.src&&e.status==="running"?m.default.createElement("div",{className:"cf-node-void"},m.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):null,!e.src&&e.status!=="running"?m.default.createElement(Ba,{node:e}):null,!e.src&&e.status==="failed"?m.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25"):null);case"audio":return m.default.createElement("div",{className:"cf-node-audio"},m.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(s,n)=>m.default.createElement("span",{key:n,style:{height:`${16+n*41%66}%`}}))),m.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return m.default.createElement("div",{className:"cf-node-text"},e.text?m.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):m.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":{let s=ke(t,e.modelKey);return m.default.createElement("div",{className:"cf-node-config"},m.default.createElement("p",{className:"cf-node-config-row"},m.default.createElement("span",null,"\u6A21\u578B"),m.default.createElement("b",null,s?s.label:"\u672A\u9009\u62E9")),m.default.createElement("p",{className:"cf-node-config-row"},m.default.createElement("span",null,"\u6BD4\u4F8B"),m.default.createElement("b",null,e.ratio)),m.default.createElement("p",{className:"cf-node-config-row"},m.default.createElement("span",null,"\u5F20\u6570"),m.default.createElement("b",null,e.count)))}case"group":return null;default:return null}}function ra({nodes:e,edges:t,selection:s,channels:n,grid:c,minimap:l,onSelection:v,onMove:C,onResize:w,onConnect:d,onRemoveEdge:y,onOpenNode:E,camera:x,camApi:I,showHint:T}){let N=m.default.useRef(null),L=m.default.useRef(null),{cam:g,moveTo:a}=I,[h,H]=m.default.useState({w:1200,h:700}),[K,V]=m.default.useState(Math.round(g.current.s*100)),Z=m.default.useRef(null),J=m.default.useRef(null),R=m.default.useRef(null),ee=m.default.useRef(null),Q=m.default.useRef(null),[ie,ve]=m.default.useState(null),[re,de]=m.default.useState(null),[se,_]=m.default.useState(!1),ae=m.default.useCallback(()=>I.apply(N.current),[I]);m.default.useEffect(()=>{let p=L.current;if(!p)return;let b=new ResizeObserver(()=>{let D=p.getBoundingClientRect();H({w:D.width,h:D.height})});b.observe(p);let S=p.getBoundingClientRect();return H({w:S.width,h:S.height}),()=>b.disconnect()},[]),m.default.useEffect(()=>{ae(),V(Math.round(g.current.s*100))}),m.default.useEffect(()=>{let p=S=>{S.code==="Space"&&!/input|textarea/i.test(S.target.tagName)&&(_(!0),S.preventDefault())},b=S=>{S.code==="Space"&&_(!1)};return window.addEventListener("keydown",p),window.addEventListener("keyup",b),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",b)}},[]),m.default.useEffect(()=>{if(!x)return;let p=N.current;p&&a(p,x.x,x.y,x.s,()=>V(Math.round(g.current.s*100)))},[x]);let pe=()=>L.current.getBoundingClientRect(),U=(p,b)=>{let S=pe();return{x:(p-S.left-g.current.x)/g.current.s,y:(b-S.top-g.current.y)/g.current.s}},M=m.default.useCallback(()=>{let p=N.current;if(!p||!e.length)return;let b=72,S=Math.min(...e.map(X=>X.x))-b,D=Math.min(...e.map(X=>X.y))-b,A=Math.max(...e.map(X=>X.x+X.w))+b,ne=Math.max(...e.map(X=>X.y+X.h))+b,te=Math.min(1.35,Math.max(Pe,Math.min(h.w/(A-S),h.h/(ne-D))));a(p,b-S*te,b-D*te,te,()=>V(Math.round(g.current.s*100)))},[e,h,a,g]);m.default.useEffect(()=>{let p=setTimeout(M,80);return()=>clearTimeout(p)},[]);let G=p=>{let b=N.current;if(!b)return;let S=h.w/2,D=h.h/2,A=g.current,ne=(S-A.tx)/A.ts,te=(D-A.ty)/A.ts,X=Math.min(Ke,Math.max(Pe,A.ts*p));a(b,S-ne*X,D-te*X,X,()=>V(Math.round(g.current.s*100)))},oe=p=>{p.preventDefault();let b=pe(),S=p.clientX-b.left,D=p.clientY-b.top,A=g.current,ne=(S-A.tx)/A.ts,te=(D-A.ty)/A.ts,X=Math.min(Ke,Math.max(Pe,A.ts*Math.exp(-p.deltaY*.0018)));a(N.current,S-ne*X,D-te*X,X,()=>V(Math.round(g.current.s*100)))},le=p=>{if(p.button===1||se){p.preventDefault(),Z.current={x:p.clientX,y:p.clientY,cx:g.current.tx,cy:g.current.ty},L.current.classList.add("is-grabbing"),L.current.setPointerCapture(p.pointerId);return}if(p.button!==0)return;let b=U(p.clientX,p.clientY);ee.current={x0:b.x,y0:b.y,additive:p.shiftKey},de({x:b.x,y:b.y,w:0,h:0}),L.current.setPointerCapture(p.pointerId)},ge=p=>{if(Z.current){let b=g.current;a(N.current,Z.current.cx+(p.clientX-Z.current.x),Z.current.cy+(p.clientY-Z.current.y),b.ts,()=>V(Math.round(g.current.s*100)));return}if(J.current){let b=U(p.clientX,p.clientY);C(J.current.ids,b.x-J.current.p0.x,b.y-J.current.p0.y),J.current.p0=b;return}if(R.current){let b=U(p.clientX,p.clientY),S=R.current,D=Math.max(140,Math.round(b.x-S.x)),A=S.locked?Math.round(D/S.ratio):Math.max(80,Math.round(b.y-S.y));w(S.id,D,A);return}if(ee.current){let b=U(p.clientX,p.clientY),S=ee.current;de({x:Math.min(S.x0,b.x),y:Math.min(S.y0,b.y),w:Math.abs(b.x-S.x0),h:Math.abs(b.y-S.y0)});return}Q.current&&ve({from:Q.current,to:U(p.clientX,p.clientY)})},Ce=p=>{if(Z.current){Z.current=null,L.current.classList.remove("is-grabbing");return}if(J.current){J.current=null;return}if(R.current){R.current=null;return}if(ee.current){let b=ee.current;ee.current=null;let S=re;if(de(null),S&&(S.w>6||S.h>6)){let D=e.filter(A=>!(A.x>S.x+S.w||A.x+A.w<S.x||A.y>S.y+S.h||A.y+A.h<S.y));v(b.additive?[...new Set([...s,...D.map(A=>A.id)])]:D.map(A=>A.id))}else b.additive||v([]);return}if(Q.current){let b=U(p.clientX,p.clientY),S=e.find(D=>b.x>=D.x&&b.x<=D.x+D.w&&b.y>=D.y&&b.y<=D.y+D.h);S&&Ze(e,t,Q.current,S.id)&&d(Q.current,S.id),Q.current=null,ve(null)}},Ie=(p,b)=>{if(p.stopPropagation(),se||p.button===1)return;let S=p.shiftKey||p.metaKey||p.ctrlKey,D=s.includes(b.id),A;if(S?A=D?s.filter(X=>X!==b.id):[...s,b.id]:A=D?s:[b.id],v(A),S)return;let ne=U(p.clientX,p.clientY),te=b.type==="group"&&b.childIds?.length?[b.id,...b.childIds]:A.length>1?A:[b.id];J.current={ids:te,p0:ne},L.current.setPointerCapture(p.pointerId)},ce=(p,b)=>{let[S,D]=(b.ratio||"1:1").split(":").map(Number);R.current={id:b.id,x:b.x,y:b.y,locked:b.locked!==!1,ratio:D/S},L.current.setPointerCapture(p.pointerId)},ye=(p,b)=>{p.stopPropagation(),Q.current=b.id,ve({from:b.id,to:U(p.clientX,p.clientY)}),L.current.setPointerCapture(p.pointerId)},he=m.default.useMemo(()=>Object.fromEntries(e.map(p=>[p.id,p])),[e]);return m.default.createElement("div",{className:"cf-board"},m.default.createElement("div",{className:`cf-stage ${c==="lines"?"cf-stage--lines":c==="blank"?"cf-stage--blank":"cf-stage--dots"}${se?" is-grab":""}`,ref:L,onPointerDown:le,onPointerMove:ge,onPointerUp:Ce,onPointerCancel:Ce,onWheel:oe,style:{"--cf-grid":`${28*K/100}px`}},m.default.createElement("div",{className:"cf-world",ref:N},m.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},m.default.createElement("defs",null,m.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},m.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),t.map(p=>{let b=he[p.from],S=he[p.to];return!b||!S?null:m.default.createElement("g",{key:p.id,className:"cf-edge"},m.default.createElement("path",{d:He(b,S),className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),m.default.createElement("path",{d:He(b,S),className:"cf-edge-hit",onPointerDown:D=>{D.stopPropagation(),y(p.id)}},m.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),ie?(()=>{let p=he[ie.from];return p?m.default.createElement("path",{d:He(p,{x:ie.to.x,y:ie.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),e.map(p=>m.default.createElement("div",{key:p.id,className:`cf-node${s.includes(p.id)?" is-selected":""}${p.status==="running"?" is-running":""}${p.type==="group"?" is-group":""}`,"data-id":p.id,style:{left:p.x,top:p.y,width:p.w,height:p.h,zIndex:p.type==="group"?3:2},onPointerDown:b=>Ie(b,p)},p.type==="group"?m.default.createElement("div",{className:"cf-node-group-head"},m.default.createElement("span",null,p.name||"\u5206\u7EC4"),p.childIds?.length?m.default.createElement("span",{className:"cf-node-group-count"},p.childIds.length," \u4E2A\u8282\u70B9"):null):m.default.createElement(m.default.Fragment,null,m.default.createElement("div",{className:"cf-node-head"},m.default.createElement("span",{className:"cf-node-type"},ze[p.type]),m.default.createElement("span",{className:"cf-node-name"},p.name||""),m.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:b=>ye(b,p),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),m.default.createElement("div",{className:"cf-node-body",onDoubleClick:b=>{b.stopPropagation(),E(p)}},m.default.createElement(Ta,{node:p,channels:n}))),s.includes(p.id)&&p.type!=="group"?m.default.createElement("span",{className:"cf-node-handle",onPointerDown:b=>{b.stopPropagation(),ce(b,p)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)),re&&re.w>4?m.default.createElement("div",{className:"cf-marquee",style:{left:re.x,top:re.y,width:re.w,height:re.h}}):null)),l?m.default.createElement(Pa,{nodes:e,cam:g.current,size:h,onJump:p=>a(N.current,h.w/2-p.x*g.current.s,h.h/2-p.y*g.current.s,g.current.s,()=>V(Math.round(g.current.s*100)))}):null,m.default.createElement("div",{className:"cf-zoom"},m.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>G(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),m.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:K,"aria-label":"\u7F29\u653E",onChange:p=>{let b=N.current;if(!b)return;let S=Number(p.target.value)/100,D=g.current,A=h.w/2,ne=h.h/2;a(b,A-(A-D.tx)/D.s*S,ne-(ne-D.ty)/D.s*S,S,()=>V(Math.round(g.current.s*100)))}}),m.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>G(1.25),"aria-label":"\u653E\u5927"},"+"),m.default.createElement("span",{className:"cf-zoom-num"},K,"%"),m.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:M},"\u9002\u5E94")),T?m.default.createElement("p",{className:"cf-editor-hint"},"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5"):null)}function Pa({nodes:e,cam:t,size:s,onJump:n}){if(!e.length)return null;let c=168,l=108,v=80,C=Math.min(...e.map(a=>a.x))-v,w=Math.min(...e.map(a=>a.y))-v,d=Math.max(...e.map(a=>a.x+a.w))+v,y=Math.max(...e.map(a=>a.y+a.h))+v,E=Math.max(1,d-C),x=Math.max(1,y-w),I=Math.min(c/E,l/x),T=(c-E*I)/2,N=(l-x*I)/2,L=a=>({x:(a.x-C)*I+T,y:(a.y-w)*I+N,w:a.w*I,h:a.h*I}),g={x:(-t.x/t.s-C)*I+T,y:(-t.y/t.s-w)*I+N,w:s.w/t.s*I,h:s.h/t.s*I};return m.default.createElement("svg",{className:"cf-minimap",viewBox:`0 0 ${c} ${l}`,width:c,height:l,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:a=>{let h=a.currentTarget.getBoundingClientRect(),H=(a.clientX-h.left)/h.width*c,K=(a.clientY-h.top)/h.height*l;n({x:C+(H-T)/I,y:w+(K-N)/I})}},e.filter(a=>a.type==="group").map(a=>{let h=L(a);return m.default.createElement("rect",{key:a.id,x:h.x,y:h.y,width:h.w,height:h.h,rx:3,className:"cf-mini-group"})}),e.filter(a=>a.type!=="group").map(a=>{let h=L(a);return m.default.createElement("rect",{key:a.id,x:h.x,y:h.y,width:Math.max(3,h.w),height:Math.max(3,h.h),rx:2,className:`cf-mini-node${a.type==="image"?" cf-mini-image":""}`})}),m.default.createElement("rect",{x:g.x,y:g.y,width:Math.max(6,g.w),height:Math.max(6,g.h),rx:2,className:"cf-mini-view"}))}function sa({canvases:e,onOpen:t,onCreate:s,onRename:n,onDelete:c,onImport:l}){let[v,C]=o.default.useState(null),[w,d]=o.default.useState(null);return o.default.createElement("div",{className:"cf-page"},o.default.createElement("div",{className:"cf-page-inner"},o.default.createElement("div",{className:"cf-page-head"},o.default.createElement("div",null,o.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),o.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),o.default.createElement("div",{className:"cf-page-actions"},o.default.createElement(B,{icon:"upload",onClick:l},"\u5BFC\u5165\u753B\u5E03"),o.default.createElement(B,{variant:"primary",icon:"plus",onClick:s},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?o.default.createElement(fe,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:o.default.createElement(B,{variant:"primary",icon:"plus",onClick:s},"\u65B0\u5EFA\u753B\u5E03")}):o.default.createElement("div",{className:"cf-card"},o.default.createElement("div",{className:"cf-list-head"},o.default.createElement("span",null,"\u540D\u79F0"),o.default.createElement("span",null,"\u5185\u5BB9"),o.default.createElement("span",null,"\u66F4\u65B0")),o.default.createElement("div",{className:"cf-canvas-list"},e.map(y=>o.default.createElement("div",{key:y.id,className:"cf-canvas-row"},o.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>t(y.id)},y.name||"\u672A\u547D\u540D\u753B\u5E03"),o.default.createElement("span",{className:"cf-canvas-meta"},y.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",y.edges.length," \u6761\u8FDE\u7EBF"),o.default.createElement("span",{className:"cf-canvas-row-actions"},o.default.createElement(F,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>C(y)}),o.default.createElement(F,{name:"trash",label:"\u5220\u9664",onClick:()=>d(y)}))))))),v?o.default.createElement(La,{canvas:v,onClose:()=>C(null),onSubmit:y=>{n(v.id,y),C(null)}}):null,w?o.default.createElement(me,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>d(null),footer:o.default.createElement(o.default.Fragment,null,o.default.createElement(B,{onClick:()=>d(null)},"\u53D6\u6D88"),o.default.createElement(B,{variant:"danger",onClick:()=>{c(w.id),d(null)}},"\u5220\u9664"))},o.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",w.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",w.nodes.length," \u4E2A\u8282\u70B9\u548C ",w.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function La({canvas:e,onClose:t,onSubmit:s}){let[n,c]=o.default.useState(e.name||"");return o.default.createElement(me,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:t,footer:o.default.createElement(o.default.Fragment,null,o.default.createElement(B,{onClick:t},"\u53D6\u6D88"),o.default.createElement(B,{variant:"primary",onClick:()=>s(n.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},o.default.createElement("label",{className:"cf-field"},o.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),o.default.createElement("input",{className:"cf-input",value:n,autoFocus:!0,onChange:l=>c(l.target.value),onKeyDown:l=>{l.key==="Enter"&&s(n.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var Aa=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"audio",label:"\u97F3\u9891",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"}];function oa({canvas:e,channels:t,defaults:s,onChange:n,onBack:c,say:l}){let v=ia(),{cam:C,moveTo:w}=v,[d,y]=o.default.useState([]),[E,x]=o.default.useState("select"),[I,T]=o.default.useState(typeof window<"u"&&window.__CF_DEV_PROMPT||""),[N,L]=o.default.useState(s?.ratio||"1:1"),[g,a]=o.default.useState(s?.count||1),[h,H]=o.default.useState(s?.modelKey||""),[K,V]=o.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[Z,J]=o.default.useState([]),[R,ee]=o.default.useState(1024),[Q,ie]=o.default.useState(1024),[ve,re]=o.default.useState(null),de=o.default.useRef(null),se=o.default.useRef(null);o.default.useEffect(()=>{if(!K)return;let f=O=>{de.current?.contains(O.target)||V(null)},z=O=>{O.key==="Escape"&&V(null)};return window.addEventListener("pointerdown",f),window.addEventListener("keydown",z),()=>{window.removeEventListener("pointerdown",f),window.removeEventListener("keydown",z)}},[K]);let _=e.nodes,ae=e.edges,pe=_.filter(f=>d.includes(f.id)),U=pe.length===1?pe[0]:null,M=o.default.useMemo(()=>U?ae.filter(f=>f.to===U.id).map(f=>_.find(z=>z.id===f.from)).filter(f=>f&&f.type!=="group"&&f.type!=="config"):[],[U,ae,_]),G=()=>{se.current?.click()},oe=f=>{let z=[...f.target.files||[]];z.length&&(J(O=>[...O,...z.map(Y=>({id:Y.name+Y.size,name:Y.name,url:URL.createObjectURL(Y)}))]),l?.(`\u5DF2\u52A0\u5165 ${z.length} \u5F20\u53C2\u8003\u56FE`),f.target.value="")},le=Ne(t,"image"),ge=ke(t,h)||le[0]||null;o.default.useEffect(()=>{U&&(U.type==="image"||U.type==="audio")&&(T(U.prompt||""),U.ratio&&L(U.ratio))},[U?.id]);let Ce=o.default.useRef(e);Ce.current=e;let Ie=(f,z)=>{let O=Ce.current[f]||[],Y=typeof z=="function"?z(O):z;n({[f]:Y,updatedAt:Date.now()})},ce=f=>Ie("nodes",f),ye=f=>Ie("edges",f),he=(f,z)=>ce(_.map(O=>O.id===f?{...O,...z}:O)),We=(f,z,O)=>{let Y=new Set(f);ce(_.map(W=>Y.has(W.id)?{...W,x:Math.round(W.x+z),y:Math.round(W.y+O)}:W))},p=(f,z,O)=>he(f,{w:z,h:O}),b=(f,z)=>ye([...ae,{id:q("e"),from:f,to:z}]),S=f=>ye(ae.filter(z=>z.id!==f)),D=f=>{let z=C.current,O={x:(window.innerWidth/2-z.tx)/z.s,y:(window.innerHeight/2-z.ty)/z.s},Y=Se(f,O,f==="config"?{modelKey:h||le[0]?.key||"",ratio:N,count:g}:{});ce([..._,Y]),y([Y.id]),l?.(`\u5DF2\u65B0\u5EFA${ze[f]}\u8282\u70B9`)},A=()=>{let f=I.trim();if(!f)return;let z=U&&U.type==="image"?U:null;if(z){he(z.id,{prompt:f,status:"running",ratio:N}),setTimeout(()=>he(z.id,{status:"done"}),900),l?.("\u5F00\u59CB\u751F\u6210");return}let O=C.current,Y={x:(window.innerWidth/2-O.tx)/O.s,y:(window.innerHeight/2-O.ty)/O.s},W=Array.from({length:g},(be,Me)=>Se("image",{x:Y.x+Me*260,y:Y.y},{prompt:f,ratio:N,status:"running"}));ce([..._,...W]),y(W.map(be=>be.id)),setTimeout(()=>{ce(be=>be.map(Me=>W.some(ga=>ga.id===Me.id)?{...Me,status:"done"}:Me))},900),T(""),l?.("\u5F00\u59CB\u751F\u6210")},ne=()=>{let f=Re(_,d);f&&(ce([f,..._]),y([f.id]))},te=()=>{let f=new Set(d);ce(_.filter(z=>!f.has(z.id))),ye(ae.filter(z=>!f.has(z.from)&&!f.has(z.to))),y([])},X=()=>{let f=_.filter(W=>d.includes(W.id));if(!f.length)return;let z={},O=f.map(W=>{let be=q(W.type[0]);return z[W.id]=be,{...W,id:be,x:W.x+40,y:W.y+40,status:"idle"}}),Y=ae.filter(W=>z[W.from]&&z[W.to]).map(W=>({id:q("e"),from:z[W.from],to:z[W.to]}));ce([..._,...O]),ye([...ae,...Y]),y(O.map(W=>W.id))};return o.default.useEffect(()=>{let f=z=>{if(/input|textarea|select/i.test(z.target.tagName))return;let O=z.metaKey||z.ctrlKey;if(O&&z.key.toLowerCase()==="d"){z.preventDefault(),X();return}if(O&&z.key.toLowerCase()==="g"){z.preventDefault(),ne();return}if(z.key==="Delete"||z.key==="Backspace"){z.preventDefault(),te();return}if(z.key==="Escape"){y([]);return}let Y=z.key.toLowerCase();Y==="v"&&x("select"),Y==="h"&&x("pan"),Y==="t"&&D("text"),Y==="i"&&D("image"),Y==="a"&&D("audio"),Y==="c"&&D("config"),Y==="g"&&D("group")};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[_,ae,d,I,N,g,h]),o.default.createElement("div",{className:"cf-editor"},o.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},o.default.createElement(F,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:c}),o.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),Aa.map((f,z)=>f.sep?o.default.createElement("span",{key:`s${z}`,className:"cf-rail-sep","aria-hidden":"true"}):o.default.createElement("button",{key:f.id,type:"button",className:`cf-rail-btn${E===f.id?" is-on":""}`,title:`${f.label}  ${f.key}`,"aria-label":f.label,"aria-pressed":E===f.id,onClick:()=>{if(f.id==="focus"){re({...C.current,s:C.current.s});return}if(["text","image","audio","config","group"].includes(f.id)){D(f.id);return}x(f.id)}},o.default.createElement(j,{name:f.icon,size:18})))),o.default.createElement("div",{className:"cf-editor-main"},o.default.createElement(ra,{nodes:_,edges:ae,selection:d,channels:t,grid:e.grid||"dots",minimap:!0,camera:ve,camApi:v,showHint:!pe.length,onSelection:y,onMove:We,onResize:p,onConnect:b,onRemoveEdge:S,onOpenNode:f=>{y([f.id]),T(f.prompt||f.text||"")}}),o.default.createElement("div",{className:"cf-composer"},o.default.createElement("textarea",{className:"cf-composer-input",value:I,rows:3,placeholder:U?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:f=>T(f.target.value),onKeyDown:f=>{f.key==="Enter"&&!f.shiftKey&&!f.nativeEvent.isComposing&&(f.preventDefault(),A())}}),o.default.createElement("div",{className:"cf-composer-bar",ref:de},o.default.createElement("div",{className:"cf-composer-left"},o.default.createElement("div",{className:"cf-bar-slot"},o.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>V(K==="ref"?null:"ref"),"aria-expanded":K==="ref","aria-haspopup":"menu"},o.default.createElement(j,{name:"plus",size:15}),"\u53C2\u8003",Z.length+M.length?o.default.createElement("span",{className:"cf-bar-badge"},Z.length+M.length):null),K==="ref"?o.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},o.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),M.length?M.map(f=>o.default.createElement("button",{key:f.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{T(z=>`${z}${z&&!z.endsWith(" ")?" ":""}@${ze[f.type]}${f.name?`:${f.name}`:""} `),V(null)}},o.default.createElement(j,{name:f.type==="image"?"image":f.type==="text"?"text":"audio",size:14}),o.default.createElement("span",{className:"cf-menu-label"},f.name||(f.prompt||f.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):o.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),o.default.createElement("div",{className:"cf-menu-sep"}),o.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:G},o.default.createElement(j,{name:"upload",size:14}),o.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),o.default.createElement("input",{ref:se,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:oe})):null),o.default.createElement("div",{className:"cf-bar-slot"},o.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>{if(K!=="ratio"){let f=N.split(":").map(Number);f.length===2&&f.every(z=>Number.isFinite(z)&&z>0)&&(ee(f[0]),ie(f[1]))}V(K==="ratio"?null:"ratio")},"aria-expanded":K==="ratio","aria-haspopup":"menu"},o.default.createElement(j,{name:"frame",size:15}),N),K==="ratio"?o.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},o.default.createElement("p",{className:"cf-menu-head"},"\u753B\u9762\u6BD4\u4F8B"),xe.map(f=>o.default.createElement("button",{key:f.id,type:"button",className:`cf-menu-item${N===f.id?" is-on":""}`,role:"menuitem",onClick:()=>{L(f.id),V(null)}},o.default.createElement("span",{className:"cf-menu-label"},f.label),o.default.createElement("span",{className:"cf-menu-meta"},f.w," \xD7 ",f.h))),o.default.createElement("div",{className:"cf-menu-sep"}),o.default.createElement("p",{className:"cf-menu-head"},"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),o.default.createElement("div",{className:"cf-menu-custom"},o.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:R,"aria-label":"\u5BBD",onChange:f=>ee(Number(f.target.value.replace(/\D/g,""))||0)}),o.default.createElement("span",{className:"cf-menu-x","aria-hidden":"true"},"\xD7"),o.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:Q,"aria-label":"\u9AD8",onChange:f=>ie(Number(f.target.value.replace(/\D/g,""))||0)}),o.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",disabled:!R||!Q,onClick:()=>{L(`${R}:${Q}`),V(null)}},"\u5E94\u7528"))):null),o.default.createElement("div",{className:"cf-bar-slot"},o.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>V(K==="count"?null:"count"),"aria-expanded":K==="count","aria-haspopup":"menu"},g," \u5F20",o.default.createElement(j,{name:"chevron",size:12})),K==="count"?o.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},o.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(f=>o.default.createElement("button",{key:f,type:"button",className:`cf-menu-item${g===f?" is-on":""}`,role:"menuitem",onClick:()=>{a(f),V(null)}},f," \u5F20"))):null)),o.default.createElement("div",{className:"cf-composer-right"},o.default.createElement("div",{className:"cf-bar-slot"},o.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>V(K==="model"?null:"model"),"aria-expanded":K==="model","aria-haspopup":"menu"},o.default.createElement(j,{name:"bars",size:15}),o.default.createElement("span",{className:"cf-bar-label"},ge?ge.label:"\u9009\u62E9\u6A21\u578B"),o.default.createElement(j,{name:"chevron",size:12})),K==="model"?o.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},o.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),le.length?le.map(f=>o.default.createElement("button",{key:f.key,type:"button",className:`cf-menu-item${f.key===h?" is-on":""}`,role:"menuitem",onClick:()=>{H(f.key),V(null)}},o.default.createElement("span",{className:"cf-menu-label"},f.label),o.default.createElement("span",{className:"cf-menu-meta"},f.channel.name||f.channel.protocol))):o.default.createElement("p",{className:"cf-menu-empty"},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0")):null),pe.length?o.default.createElement("span",{style:{display:"inline-flex",gap:2}},o.default.createElement(F,{name:"group",label:"\u5305\u6210\u7EC4",onClick:ne}),o.default.createElement(F,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:te})):null,o.default.createElement("button",{type:"button",className:"cf-send",onClick:A,disabled:!I.trim(),"aria-label":"\u53D1\u9001\u6D88\u606F","data-tip":"\u53D1\u9001\u6D88\u606F"},o.default.createElement(j,{name:"arrowUp",size:17})))))))}var u=ue(require("react"),1);function la({channels:e,defaults:t,records:s,prompt:n,onPrompt:c,onCreateRecord:l,onDeleteRecords:v,onLookupPrompts:C,say:w}){let d=c,[y,E]=u.default.useState(t?.ratio||"1:1"),[x,I]=u.default.useState(t?.quality||"\u81EA\u52A8"),[T,N]=u.default.useState(t?.resolution||"\u81EA\u52A8"),[L,g]=u.default.useState(t?.modelKey||""),[a,h]=u.default.useState(1024),[H,K]=u.default.useState(1024),[V,Z]=u.default.useState(!0),[J,R]=u.default.useState([]),[ee,Q]=u.default.useState(!1),[ie,ve]=u.default.useState([]),[re,de]=u.default.useState(!1),se=Ne(e,"image"),_=ke(e,L)||se[0]||null,ae=M=>{E(M);let G=xe.find(oe=>oe.id===M);G&&(h(G.w),K(G.h))},pe=()=>{let M=n.trim();if(!M){w?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}let G=le=>{let ge=Math.max(256,Math.min(4096,Math.round(le)));return V?Math.round(ge/16)*16:ge};Q(!0);let oe={id:`r${Date.now().toString(36)}`,prompt:M,model:_?_.label:"\u672A\u9009\u62E9\u6A21\u578B",ratio:y,size:`${G(a)}x${G(H)}`,quality:x,resolution:T,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};l?.(oe),setTimeout(()=>{Q(!1),ve(le=>[{...oe,id:`img${Date.now().toString(36)}`},...le]),w?.("\u751F\u6210\u5B8C\u6210")},1100)},U=M=>R(G=>G.includes(M)?G.filter(oe=>oe!==M):[...G,M]);return u.default.createElement("div",{className:"cf-page"},u.default.createElement("div",{className:"cf-page-inner"},u.default.createElement("div",{className:"cf-studio"},u.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),u.default.createElement("span",{className:"cf-card-count"},s.length)),u.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)"}},u.default.createElement("div",{style:{display:"flex",gap:6}},u.default.createElement(B,{size:"sm",icon:"plus",onClick:()=>d("")},"\u65B0\u5EFA"),u.default.createElement(B,{size:"sm",onClick:()=>R(s.map(M=>M.id))},"\u5168\u9009"),u.default.createElement(B,{size:"sm",variant:"danger",disabled:!J.length,onClick:()=>{v?.(J),R([])}},"\u5220\u9664")),s.length===0?u.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):u.default.createElement("div",{className:"cf-record-list"},s.map(M=>u.default.createElement("div",{key:M.id,style:{display:"flex",alignItems:"center",gap:6}},u.default.createElement("input",{type:"checkbox",checked:J.includes(M.id),onChange:()=>U(M.id),"aria-label":`\u9009\u62E9 ${M.prompt}`}),u.default.createElement("button",{type:"button",className:"cf-record",style:{flex:1,minWidth:0},onClick:()=>{d(M.prompt),E(M.ratio)}},u.default.createElement("span",{className:"cf-record-prompt"},M.prompt),u.default.createElement("span",{className:"cf-record-meta"},M.model," \xB7 ",M.size," \xB7 ",M.at)))))))),u.default.createElement("div",{className:"cf-studio-col"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),u.default.createElement("div",{className:"cf-card-body cf-form"},u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),u.default.createElement("div",{className:"cf-form-head-actions"},u.default.createElement(B,{size:"sm",icon:"book",onClick:()=>C?.()},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),u.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:n,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:M=>d(M.target.value)})),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),u.default.createElement("div",{className:"cf-form-head-actions"},u.default.createElement(B,{size:"sm",onClick:()=>w?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u526A\u5207\u677F"),u.default.createElement(B,{size:"sm",icon:"upload",onClick:()=>w?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u4E0A\u4F20"))),u.default.createElement("div",{className:"cf-drop"},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC")),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),u.default.createElement("div",{style:{position:"relative"}},u.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>de(M=>!M)},u.default.createElement(j,{name:"sparkle",size:13}),u.default.createElement("span",null,_?_.label:"\u9009\u62E9\u6A21\u578B"),u.default.createElement(j,{name:"chevron",size:12})),re?u.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},se.length?se.map(M=>u.default.createElement("button",{key:M.key,type:"button",className:`cf-menu-item${M.key===(L||se[0]?.key)?" is-on":""}`,onClick:()=>{g(M.key),de(!1)}},M.label," ",u.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",M.channel.name||M.channel.protocol))):u.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),u.default.createElement("div",{className:"cf-chips"},$e.map(M=>u.default.createElement("button",{key:M,type:"button",className:`cf-chip${x===M?" is-on":""}`,onClick:()=>I(M)},M)))),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),u.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},u.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),u.default.createElement("input",{type:"checkbox",checked:V,onChange:M=>Z(M.target.checked)}))),u.default.createElement("div",{className:"cf-size-row"},u.default.createElement("input",{className:"cf-input cf-input--num",value:a,"aria-label":"\u5BBD",onChange:M=>h(Number(M.target.value.replace(/\D/g,""))||0)}),u.default.createElement(j,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),u.default.createElement("input",{className:"cf-input cf-input--num",value:H,"aria-label":"\u9AD8",onChange:M=>K(Number(M.target.value.replace(/\D/g,""))||0)})),u.default.createElement("div",{className:"cf-chips"},xe.map(M=>u.default.createElement("button",{key:M.id,type:"button",className:`cf-chip cf-chip--tag${y===M.id?" is-on":""}`,onClick:()=>ae(M.id)},M.label)))),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),u.default.createElement("div",{className:"cf-chips"},Be.map(M=>u.default.createElement("button",{key:M,type:"button",className:`cf-chip${T===M?" is-on":""}`,onClick:()=>N(M)},M)))),u.default.createElement(B,{variant:"primary",icon:ee?"refresh":"play",onClick:pe,disabled:ee||!n.trim()},ee?"\u751F\u6210\u4E2D\u2026":"\u5F00\u59CB\u751F\u6210")))),u.default.createElement("div",{className:"cf-studio-col"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),u.default.createElement("span",{className:"cf-card-count"},ie.length)),u.default.createElement("div",{className:"cf-card-body"},ie.length===0?u.default.createElement(fe,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):u.default.createElement("div",{className:"cf-results"},ie.map(M=>u.default.createElement(Oa,{key:M.id,record:M})))))))))}function Oa({record:e}){let t=u.default.useRef(null);return u.default.useEffect(()=>{let s=t.current;if(!s)return;let n=320;s.width=n,s.height=n;let c=s.getContext("2d"),l=11;for(let w of`${e.prompt}${e.id}`)l=(l*31+w.charCodeAt(0))%2147483647;let v=()=>(l=l*16807%2147483647)/2147483647;c.fillStyle="#141414",c.fillRect(0,0,n,n);let C=c.createRadialGradient(n*v(),n*v(),20,n/2,n/2,n*.7);C.addColorStop(0,"rgba(255,255,255,0.18)"),C.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=C,c.fillRect(0,0,n,n),c.strokeStyle="rgba(255,255,255,0.3)",c.lineWidth=1.4;for(let w=0;w<5;w++){let d=n*(.2+v()*.6);c.beginPath(),c.moveTo(0,d),c.lineTo(n,d+(v()-.5)*60),c.stroke()}},[e.id,e.prompt]),u.default.createElement("figure",{className:"cf-result",title:`${e.prompt}
${e.model} \xB7 ${e.size}`},u.default.createElement("canvas",{ref:t,"aria-label":e.prompt}))}var $=ue(require("react"),1);var je=6;function ca({prompts:e,sources:t,onUse:s,onBack:n,returnTo:c}){let[l,v]=$.default.useState(""),[C,w]=$.default.useState("\u5168\u90E8"),[d,y]=$.default.useState("\u5168\u90E8"),[E,x]=$.default.useState(je),I=["\u5168\u90E8",...new Set(e.map(a=>a.category).filter(Boolean))],T=["\u5168\u90E8",...new Set(e.flatMap(a=>a.tags||[]))],N=e.filter(a=>{if(C!=="\u5168\u90E8"&&a.category!==C||d!=="\u5168\u90E8"&&!(a.tags||[]).includes(d))return!1;if(!l)return!0;let h=l.toLowerCase();return(a.title||"").toLowerCase().includes(h)||(a.text||"").toLowerCase().includes(h)||(a.tags||[]).some(H=>H.toLowerCase().includes(h))}),L=N.slice(0,E),g=N.length>L.length;return $.default.useEffect(()=>{x(je)},[l,C,d]),$.default.createElement("div",{className:"cf-page"},$.default.createElement("div",{className:"cf-page-inner"},$.default.createElement("div",{className:"cf-title-center"},$.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),$.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD"),c&&n?$.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:n},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),$.default.createElement("div",{className:"cf-split"},$.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},$.default.createElement("div",{className:"cf-filter-group"},$.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),$.default.createElement("div",{className:"cf-filter-chips"},I.map(a=>$.default.createElement("button",{key:a,type:"button",className:`cf-chip cf-chip--tag${C===a?" is-on":""}`,onClick:()=>w(a)},a)))),$.default.createElement("div",{className:"cf-filter-group"},$.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),$.default.createElement("div",{className:"cf-filter-chips"},T.map(a=>$.default.createElement("button",{key:a,type:"button",className:`cf-chip cf-chip--tag${d===a?" is-on":""}`,onClick:()=>y(a)},a))))),$.default.createElement("div",null,$.default.createElement("div",{className:"cf-search"},$.default.createElement(j,{name:"search",size:15}),$.default.createElement("input",{className:"cf-input",value:l,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u6216\u6807\u7B7E",onChange:a=>v(a.target.value)})),t.length===0?$.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u63D0\u793A\u8BCD\u6765\u6E90\u3002\u5230\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u540E\uFF0C\u8FD9\u91CC\u4F1A\u5206\u9875\u52A0\u8F7D\u66F4\u591A\u3002"):null,N.length===0?$.default.createElement(fe,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:l||C!=="\u5168\u90E8"||d!=="\u5168\u90E8"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u6765\u6E90\u3002"}):$.default.createElement($.default.Fragment,null,$.default.createElement("ul",{className:"cf-prompt-grid"},L.map(a=>$.default.createElement("li",{key:a.id,className:"cf-prompt-card"},$.default.createElement("span",{className:"cf-prompt-title"},a.title),$.default.createElement("span",{className:"cf-prompt-text"},a.text),$.default.createElement("span",{className:"cf-prompt-tags"},a.category?$.default.createElement("span",{className:"cf-tag"},a.category):null,(a.tags||[]).map(h=>$.default.createElement("span",{key:h,className:"cf-tag"},h))),$.default.createElement("span",{style:{display:"flex",gap:6,marginTop:4}},$.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>s(a)},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"))))),g?$.default.createElement("div",{className:"cf-more"},$.default.createElement(B,{onClick:()=>x(a=>a+je)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",N.length-L.length," \u6761\uFF09")):$.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))))}var k=ue(require("react"),1);function fa({assets:e,onSave:t,onDelete:s,onImport:n,say:c}){let[l,v]=k.default.useState(""),[C,w]=k.default.useState("all"),[d,y]=k.default.useState(null),[E,x]=k.default.useState(null),I=e.filter(N=>{if(C!=="all"&&N.kind!==C)return!1;if(!l)return!0;let L=l.toLowerCase();return[N.title,N.text,N.source,...N.tags||[]].filter(Boolean).some(g=>String(g).toLowerCase().includes(L))});return k.default.createElement("div",{className:"cf-page"},k.default.createElement("div",{className:"cf-page-inner"},k.default.createElement("div",{className:"cf-page-head"},k.default.createElement("div",null,k.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),k.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),k.default.createElement("div",{className:"cf-page-actions"},k.default.createElement(B,{icon:"upload",onClick:n},"\u5BFC\u5165\u8D44\u4EA7"),k.default.createElement(B,{icon:"download",onClick:()=>{let N=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),L=document.createElement("a");L.href=URL.createObjectURL(N),L.download="my-assets.json",L.click(),setTimeout(()=>URL.revokeObjectURL(L.href),2e3),c?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),k.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>y({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),k.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},k.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},k.default.createElement("div",{className:"cf-filter-group"},k.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),k.default.createElement("div",{className:"cf-filter-chips"},Le.map(N=>k.default.createElement("button",{key:N.id,type:"button",className:`cf-chip cf-chip--tag${C===N.id?" is-on":""}`,onClick:()=>w(N.id)},N.label))))),k.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},k.default.createElement(j,{name:"search",size:15}),k.default.createElement("input",{className:"cf-input",value:l,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:N=>v(N.target.value)}))),I.length===0?k.default.createElement(fe,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:l||C!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:k.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>y({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):k.default.createElement("div",{className:"cf-asset-grid"},I.map(N=>k.default.createElement("div",{key:N.id,className:"cf-asset"},k.default.createElement("div",{className:"cf-asset-thumb"},N.kind==="image"&&N.cover?k.default.createElement("img",{src:N.cover,alt:N.title}):k.default.createElement(j,{name:N.kind==="image"?"image":N.kind==="video"?"play":"text",size:22})),k.default.createElement("div",{className:"cf-asset-body"},k.default.createElement("span",{className:"cf-asset-title"},N.title||"\u672A\u547D\u540D\u8D44\u4EA7"),k.default.createElement("span",{className:"cf-asset-meta"},N.source||"\u6765\u6E90\u672A\u6CE8\u660E",N.tags?.length?` \xB7 ${N.tags.join(" / ")}`:""),k.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},k.default.createElement(F,{name:"edit",label:"\u7F16\u8F91",onClick:()=>y({...N})}),k.default.createElement(F,{name:"trash",label:"\u5220\u9664",onClick:()=>x(N)}))))))),d?k.default.createElement(Ha,{asset:d,onClose:()=>y(null),onSave:N=>{let L=N.id?e.map(g=>g.id===N.id?N:g):[...e,{...N,id:q("a")}];t(L),y(null),c?.(N.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,E?k.default.createElement(me,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>x(null),footer:k.default.createElement(k.default.Fragment,null,k.default.createElement(B,{onClick:()=>x(null)},"\u53D6\u6D88"),k.default.createElement(B,{variant:"danger",onClick:()=>{s(E.id),x(null),c?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},k.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",E.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function Ha({asset:e,onClose:t,onSave:s}){let[n,c]=k.default.useState({...e,tags:e.tags||[]}),l=(d,y)=>c(E=>({...E,[d]:y})),[v,C]=k.default.useState(""),w=n.title?.trim()&&(n.kind!=="text"||n.text?.trim());return k.default.createElement(me,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:t,footer:k.default.createElement(k.default.Fragment,null,k.default.createElement(B,{onClick:t},"\u53D6\u6D88"),k.default.createElement(B,{variant:"primary",disabled:!w,onClick:()=>s({...n,title:n.title.trim()})},"\u4FDD\u5B58"))},k.default.createElement("div",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),k.default.createElement("div",{className:"cf-chips"},Le.filter(d=>d.id!=="all").map(d=>k.default.createElement("button",{key:d.id,type:"button",className:`cf-chip${n.kind===d.id?" is-on":""}`,onClick:()=>l("kind",d.id)},d.label)))),k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),k.default.createElement("input",{className:"cf-input",value:n.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:d=>l("title",d.target.value)})),n.kind==="text"?k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),k.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:n.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:d=>l("text",d.target.value)})):k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),k.default.createElement("input",{className:"cf-input",value:n.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:d=>l("cover",d.target.value)})),k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),k.default.createElement("input",{className:"cf-input",value:v,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:d=>C(d.target.value),onKeyDown:d=>{if(d.key!=="Enter")return;d.preventDefault();let y=v.trim();y&&(l("tags",[...new Set([...n.tags||[],y])]),C(""))}}),n.tags?.length?k.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},n.tags.map(d=>k.default.createElement("button",{key:d,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>l("tags",n.tags.filter(y=>y!==d)),title:"\u70B9\u51FB\u79FB\u9664"},d," \xD7"))):null),k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),k.default.createElement("input",{className:"cf-input",value:n.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:d=>l("source",d.target.value)})))}var r=ue(require("react"),1);var Ka=[{id:"channels",label:"\u6E20\u9053"},{id:"proxy",label:"\u672C\u5730\u4EE3\u7406"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"},{id:"webdav",label:"WebDAV"},{id:"storage",label:"\u672C\u5730\u5B58\u50A8"}];function da({tab:e,onTab:t,channels:s,onChannels:n,defaults:c,onDefaults:l,promptSources:v,onPromptSources:C,say:w}){let[d,y]=r.default.useState(null),[E,x]=r.default.useState(null),[I,T]=r.default.useState({name:"",url:""});return r.default.createElement("div",{className:"cf-page"},r.default.createElement("div",{className:"cf-page-inner"},r.default.createElement("div",{className:"cf-page-head"},r.default.createElement("div",null,r.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),r.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u6A21\u578B\u9009\u62E9\u3001\u540C\u6B65\u4E0E\u672C\u5730\u5B58\u50A8"))),r.default.createElement("div",{className:"cf-config-notice"},r.default.createElement("span",null,"JSON \u6587\u4EF6\u5305\u542B API Key \u548C WebDAV \u51ED\u636E\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),r.default.createElement("span",{className:"cf-config-notice-actions"},r.default.createElement(B,{size:"sm",icon:"upload",onClick:()=>{let g=document.createElement("input");g.type="file",g.accept=".json,application/json",g.onchange=async()=>{let a=g.files?.[0];if(a)try{let h=JSON.parse(await a.text());Array.isArray(h.channels)&&n(h.channels),h.defaults&&l(h.defaults),Array.isArray(h.promptSources)&&C(h.promptSources),w?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{w?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},g.click()}},"\u5BFC\u5165\u914D\u7F6E"),r.default.createElement(B,{size:"sm",icon:"download",onClick:()=>{let g={version:1,channels:s,defaults:c,promptSources:v},a=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),h=document.createElement("a");h.href=URL.createObjectURL(a),h.download="chunfeng-config.json",h.click(),setTimeout(()=>URL.revokeObjectURL(h.href),2e3),w?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),r.default.createElement("div",{className:"cf-tabs",role:"tablist"},Ka.map(g=>r.default.createElement("button",{key:g.id,type:"button",role:"tab","aria-selected":e===g.id,className:`cf-tab${e===g.id?" is-on":""}`,onClick:()=>t(g.id)},g.label))),e==="channels"?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u8C03\u7528\u811A\u672C\u3002"),r.default.createElement(B,{icon:"plus",onClick:()=>y(Ae())},"\u65B0\u589E\u6E20\u9053")),s.length===0?r.default.createElement(fe,{icon:"sliders",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:r.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>y(Ae())},"\u65B0\u589E\u6E20\u9053")}):r.default.createElement("div",{className:"cf-channel-list"},s.map(g=>r.default.createElement("div",{key:g.id,className:"cf-channel"},r.default.createElement("div",{className:"cf-channel-main"},r.default.createElement("span",{className:"cf-channel-name"},g.name||"\u672A\u547D\u540D\u6E20\u9053"),r.default.createElement("span",{className:"cf-channel-meta"},we.find(a=>a.id===g.protocol)?.label||g.protocol," \xB7 ",g.models.length," \u4E2A\u6A21\u578B"," \xB7 ",g.baseUrl,g.keyHint?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${g.keyHint}`:" \xB7 \u672A\u586B\u5BC6\u94A5")),r.default.createElement("span",{className:"cf-channel-actions"},r.default.createElement(F,{name:"edit",label:"\u7F16\u8F91",onClick:()=>y({...g})}),r.default.createElement(F,{name:"trash",label:"\u5220\u9664",onClick:()=>x(g)})))))):null,e==="defaults"?r.default.createElement(ja,{channels:s,defaults:c,onDefaults:l}):null,e==="sources"?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B\u6765\u6E90\u5206\u9875\u52A0\u8F7D\u3002\u7559\u7A7A\u65F6\u53EA\u663E\u793A\u5185\u7F6E\u63D0\u793A\u8BCD\u3002")),r.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},r.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},r.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:I.name,onChange:g=>T(a=>({...a,name:g.target.value}))}),r.default.createElement("input",{className:"cf-input",placeholder:"\u63D0\u793A\u8BCD\u6765\u6E90\u5730\u5740\uFF08JSON\uFF09",value:I.url,onChange:g=>T(a=>({...a,url:g.target.value}))}),r.default.createElement(B,{variant:"primary",disabled:!I.url.trim(),onClick:()=>{C([...v,{id:q("src"),name:I.name.trim()||"\u672A\u547D\u540D\u6765\u6E90",url:I.url.trim()}]),T({name:"",url:""}),w?.("\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),v.length===0?r.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002"):r.default.createElement("div",{style:{display:"grid",gap:2}},v.map(g=>r.default.createElement("div",{key:g.id,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},r.default.createElement("span",{style:{fontSize:13}},g.name),r.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},g.url),r.default.createElement(F,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>C(v.filter(a=>a.id!==g.id)),style:{marginInlineStart:"auto"}})))))):null,e==="proxy"?r.default.createElement(Ue,{title:"\u672C\u5730\u4EE3\u7406",desc:"\u8BA9\u51FA\u56FE\u8BF7\u6C42\u7ECF\u8FC7\u672C\u673A\u4EE3\u7406\u3002",items:["\u4EE3\u7406\u5730\u5740\uFF08http://127.0.0.1:7890\uFF09","\u4EC5\u5BF9\u6307\u5B9A\u6E20\u9053\u751F\u6548","\u8FDE\u901A\u6027\u6D4B\u8BD5"]}):null,e==="webdav"?r.default.createElement(Ue,{title:"WebDAV",desc:"\u628A\u753B\u5E03\u548C\u8D44\u4EA7\u540C\u6B65\u5230\u81EA\u5DF1\u7684 WebDAV\u3002",items:["\u670D\u52A1\u5668\u5730\u5740","\u8D26\u53F7\u4E0E\u5BC6\u7801","\u540C\u6B65\u8303\u56F4\uFF1A\u753B\u5E03 / \u8D44\u4EA7 / \u63D0\u793A\u8BCD"]}):null,e==="storage"?r.default.createElement(Ue,{title:"\u672C\u5730\u5B58\u50A8",desc:"\u6570\u636E\u76EE\u524D\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\uFF1B\u63A5\u4E0A Host \u540E\u4F1A\u843D\u5230 ~/.dsh/dsh-chunfeng-image/\u3002",items:["\u753B\u5E03\u4E0E\u8282\u70B9","\u751F\u6210\u7684\u56FE\u7247\u6587\u4EF6","\u914D\u7F6E\u6587\u4EF6\uFF08\u542B\u5BC6\u94A5\u51ED\u8BC1\uFF09"]}):null),d?r.default.createElement(Ua,{channel:d,onClose:()=>y(null),onSave:g=>{let a=s.some(h=>h.id===g.id);n(a?s.map(h=>h.id===g.id?g:h):[...s,g]),y(null),w?.(a?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,E?r.default.createElement(me,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>x(null),footer:r.default.createElement(r.default.Fragment,null,r.default.createElement(B,{onClick:()=>x(null)},"\u53D6\u6D88"),r.default.createElement(B,{variant:"danger",onClick:()=>{n(s.filter(g=>g.id!==E.id)),x(null),w?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},r.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",E.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",E.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function ja({channels:e,defaults:t,onDefaults:s}){let n=Ne(e,"image"),c=l=>s({...t,image:{...t.image,...l}});return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),r.default.createElement("div",{className:"cf-defaults"},r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),r.default.createElement("select",{className:"cf-input",value:t.image.modelKey||"",onChange:l=>c({modelKey:l.target.value})},r.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),n.map(l=>r.default.createElement("option",{key:l.key,value:l.key},l.label," \xB7 ",l.channel.name||l.channel.protocol))),n.length===0?r.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),r.default.createElement("div",{className:"cf-chips"},xe.map(l=>r.default.createElement("button",{key:l.id,type:"button",className:`cf-chip${t.image.ratio===l.id?" is-on":""}`,onClick:()=>c({ratio:l.id})},l.label)))),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),r.default.createElement("div",{className:"cf-chips"},$e.map(l=>r.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.quality===l?" is-on":""}`,onClick:()=>c({quality:l})},l)))),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),r.default.createElement("div",{className:"cf-chips"},Be.map(l=>r.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.resolution===l?" is-on":""}`,onClick:()=>c({resolution:l})},l)))),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),r.default.createElement("div",{className:"cf-chips"},[1,2,4].map(l=>r.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.count===l?" is-on":""}`,onClick:()=>c({count:l})},l," \u5F20"))))))}function Ue({title:e,desc:t,items:s}){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},t)),r.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)"}},r.default.createElement("p",{style:{fontSize:13,fontWeight:500,marginBottom:8}},e),r.default.createElement("ul",{style:{display:"grid",gap:6}},s.map(n=>r.default.createElement("li",{key:n,style:{fontSize:12,color:"var(--cf-muted)",display:"flex",gap:8,alignItems:"center"}},r.default.createElement("span",{style:{width:4,height:4,borderRadius:999,background:"var(--cf-caption)"},"aria-hidden":"true"}),n))),r.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",marginTop:12}},"\u8FD9\u4E00\u7248\u5148\u628A\u4F4D\u7F6E\u7559\u597D\uFF0C\u63A5\u5165 Host \u540E\u518D\u586B\u3002")))}function Ua({channel:e,onClose:t,onSave:s}){let[n,c]=r.default.useState({...e}),[l,v]=r.default.useState(""),[C,w]=r.default.useState(""),d=(x,I)=>c(T=>({...T,[x]:I})),y=()=>{let x=C.trim();if(x){if(n.models.some(I=>I.id===x)){w("");return}d("models",[...n.models,{id:x,label:x,caps:Wa(x),enabled:!0,source:"manual"}]),w("")}},E=(x,I)=>{d("models",n.models.map(T=>{if(T.id!==x)return T;let N=T.caps||[];return{...T,caps:N.includes(I)?N.filter(L=>L!==I):[...N,I]}}))};return r.default.createElement(me,{title:e.id&&e.models?"\u7F16\u8F91\u6E20\u9053":"\u65B0\u589E\u6E20\u9053",wide:!0,onClose:t,footer:r.default.createElement(r.default.Fragment,null,r.default.createElement(B,{onClick:t},"\u53D6\u6D88"),r.default.createElement(B,{variant:"primary",disabled:!n.baseUrl.trim(),onClick:()=>{let x=l.trim()?l.trim().slice(-4):n.keyHint;s({...n,keyHint:x||"",hasKey:!!l.trim()||n.hasKey})}},"\u4FDD\u5B58"))},r.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),r.default.createElement("input",{className:"cf-input",value:n.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:x=>d("name",x.target.value)})),r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),r.default.createElement("select",{className:"cf-input",value:n.protocol,onChange:x=>{let I=we.find(T=>T.id===x.target.value);d("protocol",x.target.value),I&&d("baseUrl",I.baseUrl)}},we.map(x=>r.default.createElement("option",{key:x.id,value:x.id},x.label))))),r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),r.default.createElement("input",{className:"cf-input",value:n.baseUrl,placeholder:"https://api.example.com/v1",onChange:x=>d("baseUrl",x.target.value)})),r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"API Key",n.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${n.keyHint}\uFF09`:""),r.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:l,placeholder:n.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:x=>v(x.target.value)}),r.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),r.default.createElement("div",{style:{display:"flex",gap:6}},r.default.createElement("input",{className:"cf-input",value:C,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:x=>w(x.target.value),onKeyDown:x=>{x.key==="Enter"&&(x.preventDefault(),y())}}),r.default.createElement(B,{onClick:y,disabled:!C.trim()},"\u6DFB\u52A0")),n.models.length===0?r.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u4FDD\u5B58\u6E20\u9053\u540E\u53EF\u4EE5\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u5728\u8FD9\u91CC\u624B\u52A8\u6DFB\u52A0\u3002"):r.default.createElement("div",{style:{display:"grid",gap:6,marginTop:4}},n.models.map(x=>r.default.createElement("div",{key:x.id,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",padding:"8px 10px",borderRadius:"var(--cf-r-sm)",boxShadow:"inset 0 0 0 var(--cf-hair) var(--cf-line)"}},r.default.createElement("span",{style:{fontSize:12,minWidth:120}},x.label||x.id),r.default.createElement("span",{style:{display:"flex",gap:4,marginInlineStart:"auto"}},Je.map(I=>r.default.createElement("button",{key:I.id,type:"button",className:`cf-chip cf-chip--tag${(x.caps||[]).includes(I.id)?" is-on":""}`,onClick:()=>E(x.id,I.id)},I.label))),r.default.createElement(F,{name:"trash",label:`\u79FB\u9664 ${x.id}`,onClick:()=>d("models",n.models.filter(I=>I.id!==x.id))}))))),r.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u81EA\u52A8\u62C9\u53D6\u6A21\u578B\u4E0E\u300C\u5B9E\u6D4B\u51FA\u56FE\u300D\u4F1A\u5728\u63A5\u4E0A Host \u540E\u53EF\u7528\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u624B\u52A8\u6DFB\u52A0\u5E76\u52FE\u9009\u80FD\u529B\u3002"))}function Wa(e){let t=e.toLowerCase();return/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(t)?["image"]:/veo|kling|sora|runway|video/.test(t)?["video"]:/tts|audio|speech|whisper|music/.test(t)?["audio"]:["text"]}var pa="dsh-chunfeng-image:state:v2";function Ya(){try{let e=localStorage.getItem(pa);if(!e)return null;let t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch{return null}}function ua(){let[e,t]=P.default.useState(()=>{let a=Qe(),h=Ya(),H=h?{...a,...h}:a;return!H.canvases.length&&!h&&(H.canvases=[{...Te("\u9713\u8679\u8857\u89D2"),...Oe()}],H.openCanvasId=null),H}),[s,n]=P.default.useState(""),[c,l]=P.default.useState(null),[v,C]=P.default.useState(null),w=P.default.useRef(0);P.default.useEffect(()=>{try{localStorage.setItem(pa,JSON.stringify(e))}catch{}},[e]);let d=P.default.useCallback((a,h)=>{C({text:a,kind:h,at:Date.now()}),clearTimeout(w.current),w.current=setTimeout(()=>C(null),2200)},[]);P.default.useEffect(()=>()=>clearTimeout(w.current),[]);let y=a=>t(h=>({...h,...a})),E=e.canvases.find(a=>a.id===e.openCanvasId)||null,x=ea(e),I=a=>{l(null),t(h=>aa(h,a))},T=(a,h)=>y({canvases:e.canvases.map(H=>H.id===a?{...H,...h,updatedAt:Date.now()}:H)}),N=()=>{let a={...Te(),...Oe()};y({canvases:[a,...e.canvases],openCanvasId:a.id,view:"canvas"}),d("\u5DF2\u65B0\u5EFA\u753B\u5E03")},L=()=>{let a=document.createElement("input");a.type="file",a.accept=".json,application/json",a.onchange=async()=>{let h=a.files?.[0];if(h)try{let H=JSON.parse(await h.text()),K={...Te(H.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(H.nodes)?H.nodes:[],edges:Array.isArray(H.edges)?H.edges:[],grid:H.grid||"dots"};y({canvases:[K,...e.canvases],openCanvasId:K.id,view:"canvas"}),d("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{d("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},a.click()},g=a=>{if(E){let h={id:q("i"),type:"image",x:220+E.nodes.length*26,y:220+E.nodes.length*20,w:240,h:268,name:"",status:"idle",z:2,prompt:a.text,ratio:e.defaults.image.ratio||"1:1",locked:!0};T(E.id,{nodes:[...E.nodes,h]}),d(`\u5DF2\u7528\u300C${a.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}n(a.text),y({view:"studio",openCanvasId:null}),d(`\u5DF2\u586B\u5165\u300C${a.title}\u300D`)};return P.default.createElement("div",{className:"cf-app"},P.default.createElement("style",null,Xe),P.default.createElement("div",{className:"cf-ambient","aria-hidden":"true"},P.default.createElement("i",null),P.default.createElement("i",null),P.default.createElement("i",null)),P.default.createElement("header",{className:"cf-nav"},P.default.createElement("span",{className:"cf-brand"},P.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round","aria-hidden":"true"},P.default.createElement("path",{d:"M12 3.5L21 19H3z"}),P.default.createElement("path",{d:"M12 9.5v5.5",strokeLinecap:"round"})),"\u6625\u98CE\u753B\u5E03"),P.default.createElement("nav",{className:"cf-nav-list","aria-label":"\u4E3B\u5BFC\u822A"},Ge.map(a=>{let h=a.id==="canvas"?x==="canvas"||x==="editor":x===a.id;return P.default.createElement("button",{key:a.id,type:"button",className:`cf-nav-item${h?" is-on":""}`,onClick:()=>I(a.id),"aria-current":h?"page":void 0},P.default.createElement(j,{name:a.icon,size:15}),a.label)})),P.default.createElement("div",{className:"cf-nav-right"},E?P.default.createElement(P.default.Fragment,null,P.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},E.name),P.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}].map(a=>P.default.createElement("button",{key:a.id,type:"button",className:(E.grid||"dots")===a.id?"is-on":"",onClick:()=>T(E.id,{grid:a.id})},a.label)))):null,P.default.createElement("span",{className:"cf-nav-version"},"v0.1.0"),P.default.createElement(F,{name:"keyboard",label:"\u5FEB\u6377\u952E",onClick:()=>d("V \u9009\u62E9 \xB7 H \u79FB\u52A8 \xB7 T/I/A/C/G \u65B0\u5EFA\u8282\u70B9 \xB7 \u2318D \u590D\u5236 \xB7 \u2318G \u5305\u7EC4 \xB7 \u232B \u5220\u9664")}))),P.default.createElement(De,{key:x},x==="editor"&&E?P.default.createElement(oa,{canvas:E,channels:e.channels,defaults:e.defaults.image,onChange:a=>T(E.id,a),onBack:()=>t(a=>ta(a)),say:d}):null,x==="canvas"?P.default.createElement(sa,{canvases:e.canvases,onOpen:a=>t(h=>na(h,a)),onCreate:N,onRename:(a,h)=>T(a,{name:h}),onDelete:a=>y({canvases:e.canvases.filter(h=>h.id!==a),openCanvasId:null}),onImport:L}):null,x==="studio"?P.default.createElement(la,{channels:e.channels,defaults:e.defaults.image,records:e.records,prompt:s,onPrompt:n,onCreateRecord:a=>y({records:[a,...e.records]}),onDeleteRecords:a=>y({records:e.records.filter(h=>!a.includes(h.id))}),onLookupPrompts:()=>{l("studio"),y({view:"prompts",openCanvasId:null})},say:d}):null,x==="prompts"?P.default.createElement(ca,{prompts:e.prompts,sources:e.promptSources,returnTo:c,onUse:g,onBack:c?()=>{l(null),y({view:c})}:null}):null,x==="assets"?P.default.createElement(fa,{assets:e.assets,onSave:a=>y({assets:a}),onDelete:a=>y({assets:e.assets.filter(h=>h.id!==a)}),onImport:()=>d("\u8D44\u4EA7\u5305\u5BFC\u5165\u63A5 Host \u540E\u53EF\u7528"),say:d}):null,x==="config"?P.default.createElement(da,{tab:e.configTab,onTab:a=>y({configTab:a}),channels:e.channels,onChannels:a=>y({channels:a}),defaults:e.defaults,onDefaults:a=>y({defaults:a}),promptSources:e.promptSources,onPromptSources:a=>y({promptSources:a}),say:d}):null),v?P.default.createElement(Fe,{text:v.text,kind:v.kind}):null)}var ma="dsh-chunfeng-image",Va=["slots"];function _a(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:ma},ua)),e.effect(()=>{let t=null;return(()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:ma,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},Xa))})(),()=>t?.()},"dsh-chunfeng-image: sidebar entry")}function Xa(){return va.default.createElement(j,{name:"canvas",size:16})}
return module.exports}})
