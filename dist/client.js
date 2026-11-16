window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ba=Object.create;var Ie=Object.defineProperty;var xa=Object.getOwnPropertyDescriptor;var ya=Object.getOwnPropertyNames;var wa=Object.getPrototypeOf,ka=Object.prototype.hasOwnProperty;var Na=(e,t)=>{for(var s in t)Ie(e,s,{get:t[s],enumerable:!0})},Fe=(e,t,s,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of ya(t))!ka.call(e,l)&&l!==s&&Ie(e,l,{get:()=>t[l],enumerable:!(a=xa(t,l))||a.enumerable});return e};var fe=(e,t,s)=>(s=e!=null?ba(wa(e)):{},Fe(t||!e||!e.__esModule?Ie(s,"default",{value:e,enumerable:!0}):s,e)),Ca=e=>Fe(Ie({},"__esModule",{value:!0}),e);var Za={};Na(Za,{apply:()=>Ga,inject:()=>qa});module.exports=Ca(Za);var Be=fe(require("react"),1);var L=fe(require("react"),1);var Xe=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
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
`;var qe=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
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
  z-index: 3;
  display: block;
  background: color-mix(in oklab, var(--cf-panel-2) 55%, transparent);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line);
  pointer-events: none;
}
.cf-node.is-group .cf-node-group-head { pointer-events: auto; }

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
  pointer-events: none;
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
`;var Ge=`${Xe}
${qe}`;var o=fe(require("react"),1),Ma={canvas:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("path",{d:"M3 10h18M9 10v10"})),image:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),o.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),o.default.createElement("path",{d:"M5 17h14"})),folder:o.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:o.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),cursor:o.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:o.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),o.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:o.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:o.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),o.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),o.default.createElement("path",{d:"M11 11l2 2"})),search:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),o.default.createElement("path",{d:"M16 16l4 4"})),plus:o.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:o.default.createElement("path",{d:"M5 12h14"}),trash:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),o.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),o.default.createElement("path",{d:"M14 6l4 4"})),close:o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:o.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 16V4"}),o.default.createElement("path",{d:"M7 9l5-5 5 5"}),o.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 4v12"}),o.default.createElement("path",{d:"M7 11l5 5 5-5"}),o.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:o.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),o.default.createElement("path",{d:"M20 4v4h-4"})),more:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),o.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M9 8H4v5"}),o.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M15 8h5v5"}),o.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),map:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),o.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M9 15l6-6"}),o.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),o.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),o.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),play:o.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:o.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M10 6l-5 6 5 6"}),o.default.createElement("path",{d:"M5 12h14"})),arrowUp:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 19V5"}),o.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"}))};function K({name:e,size:t=16,...s}){let a=Ma[e];return a?o.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...s},a):null}function V({name:e,label:t,size:s=16,...a}){return o.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":t,title:t,...a},o.default.createElement(K,{name:e,size:s}))}function P({variant:e="ghost",size:t,icon:s,children:a,...l}){return o.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${t==="sm"?" cf-btn--sm":""}`,...l},s?o.default.createElement(K,{name:s,size:14}):null,a)}function de({title:e,children:t,footer:s,onClose:a,wide:l}){return o.default.useEffect(()=>{let i=v=>{v.key==="Escape"&&a()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[a]),o.default.createElement("div",{className:"cf-scrim",onPointerDown:i=>{i.target===i.currentTarget&&a()}},o.default.createElement("div",{className:`cf-dialog${l?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},o.default.createElement("header",{className:"cf-dialog-head"},o.default.createElement("h2",{className:"cf-dialog-title"},e),o.default.createElement(V,{name:"close",label:"\u5173\u95ED",onClick:a})),o.default.createElement("div",{className:"cf-dialog-body"},t,s?o.default.createElement("div",{className:"cf-dialog-foot"},s):null)))}var xe=class extends o.default.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,s){console.error("[\u6625\u98CE\u753B\u5E03] \u6E32\u67D3\u51FA\u9519",t,s)}render(){let{error:t}=this.state;if(!t)return this.props.children;let s=String(t&&t.message||t);return o.default.createElement("div",{className:"cf-crash",role:"alert"},o.default.createElement("span",{className:"cf-crash-icon"},o.default.createElement(K,{name:"refresh",size:22})),o.default.createElement("p",{className:"cf-crash-title"},"\u8FD9\u4E00\u5757\u51FA\u9519\u4E86"),o.default.createElement("p",{className:"cf-crash-detail"},s),o.default.createElement("div",{className:"cf-crash-actions"},o.default.createElement(P,{variant:"primary",size:"sm",onClick:()=>this.setState({error:null})},"\u91CD\u8BD5"),o.default.createElement(P,{size:"sm",onClick:()=>{try{localStorage.clear()}catch{}location.reload()}},"\u91CD\u7F6E\u672C\u5730\u6570\u636E")))}};function Je({text:e,kind:t}){return o.default.createElement("p",{className:`cf-toast${t==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function ce({icon:e="canvas",title:t,hint:s,action:a}){return o.default.createElement("div",{className:"cf-empty"},o.default.createElement("span",{className:"cf-empty-icon"},o.default.createElement(K,{name:e,size:28})),o.default.createElement("p",{className:"cf-empty-title"},t),s?o.default.createElement("p",{className:"cf-empty-hint"},s):null,a)}var je=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],ke={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"},Ia=[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}],he=[{id:"1:1",label:"1:1",w:1024,h:1024},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1280,h:720},{id:"9:16",label:"9:16",w:720,h:1280}],Ee=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],$e=["1k","2k","4k","\u81EA\u52A8"],He=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],we=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],Oe=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],Qe=0;function F(e="x"){return Qe+=1,`${e}_${Date.now().toString(36)}${Qe.toString(36)}`}function De(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:F("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}function Ze(e){switch(e){case"image":return{w:240,h:268};case"audio":return{w:240,h:140};case"text":return{w:230,h:160};case"config":return{w:240,h:176};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function ze(e,t,s={}){let a=Ze(e),l={id:F(e[0]),type:e,x:Math.round(t.x-a.w/2),y:Math.round(t.y-a.h/2),w:a.w,h:a.h,name:"",status:"idle",z:e==="group"?1:2,...s};return e==="text"&&(l.text=s.text??""),e==="config"&&(l.modelKey=s.modelKey??"",l.ratio=s.ratio??"1:1",l.count=s.count??1),e==="image"&&(l.prompt=s.prompt??"",l.ratio=s.ratio??"1:1",l.locked=s.locked??!0),e==="audio"&&(l.prompt=s.prompt??""),l}function Ke(e="openai"){let t=we.find(s=>s.id===e)||we[0];return{id:F("ch"),name:"",protocol:t.id,baseUrl:t.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function Ea(e,t){return`${e}:${t}`}function Ne(e,t){if(!t)return null;let[s,...a]=t.split(":"),l=e.find(v=>v.id===s);if(!l)return null;let i=l.models.find(v=>v.id===a.join(":"));return i?{channel:l,model:i,label:i.label||i.id}:null}function Ce(e,t="image"){let s=[];for(let a of e)if(a.enabled)for(let l of a.models)l.enabled&&(l.caps||[]).includes(t)&&s.push({key:Ea(a.id,l.id),model:l,channel:a,label:l.label||l.id});return s}var $a=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],Da=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function Ue(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:$a.map(e=>({...e})),promptSources:[],assets:Da.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8"},canvasCount:1},records:[],configTab:"channels",grid:"dots"}}function Re(){let e=(x,d,N,E,b,I)=>{let D=ze(x,{x:d+E/2,y:N+b/2},{...I,w:E,h:b});return D.x=d,D.y=N,D},t=e("group",660,120,640,700,{name:"\u9713\u8679\u8857\u89D2"}),s=e("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),a=e("config",400,300,240,176,{ratio:"3:4",count:1}),l=e("image",700,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),i=e("image",980,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),v=e("image",700,510,240,268,{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),S=[{id:F("e"),from:s.id,to:a.id},{id:F("e"),from:a.id,to:l.id},{id:F("e"),from:a.id,to:i.id},{id:F("e"),from:a.id,to:v.id}];return{nodes:[t,s,a,l,i,v],edges:S}}function ea(e,t,s,a){if(s===a)return!1;let l=e.find(v=>v.id===s),i=e.find(v=>v.id===a);return!(!l||!i||l.type==="config"&&i.type==="config"||l.type==="group"||i.type==="group"||t.some(v=>v.from===s&&v.to===a))}function aa(e,t){let s=e.filter(x=>t.includes(x.id)&&x.type!=="group");if(!s.length)return null;let a=44,l=Math.min(...s.map(x=>x.x))-a,i=Math.min(...s.map(x=>x.y))-a-34,v=Math.max(...s.map(x=>x.x+x.w))+a,S=Math.max(...s.map(x=>x.y+x.h))+a;return ze("group",{x:(l+v)/2,y:(i+S)/2},{w:Math.round(v-l),h:Math.round(S-i),name:"\u65B0\u5206\u7EC4",childIds:s.map(x=>x.id),x:Math.round(l),y:Math.round(i)})}function na(e){return e.openCanvasId?"editor":e.view}function ta(e,t){return{...e,view:t,openCanvasId:null}}function ia(e,t){return{...e,openCanvasId:t}}function ra(e){return{...e,openCanvasId:null,view:"canvas"}}var Aa=["idle","running","done","failed"],ye=(e,t)=>Number.isFinite(e)?e:t;function Ba(e,t){if(!e||typeof e!="object")return null;let s=ke[e.type]?e.type:"text",a=Ze(s),l={...e,id:typeof e.id=="string"&&e.id?e.id:`n_${t}`,type:s,x:ye(e.x,0),y:ye(e.y,0),w:Math.max(40,ye(e.w,a.w)),h:Math.max(40,ye(e.h,a.h)),name:typeof e.name=="string"?e.name:"",status:Aa.includes(e.status)?e.status:"idle",z:ye(e.z,s==="group"?3:2)};return Array.isArray(e.childIds)&&(l.childIds=e.childIds.filter(i=>typeof i=="string")),l}function Ta(e,t){if(!e||typeof e!="object")return null;let s=Array.isArray(e.nodes)?e.nodes.map(Ba).filter(Boolean):[],a=new Set(s.map(i=>i.id)),l=Array.isArray(e.edges)?e.edges.filter(i=>i&&typeof i=="object"&&a.has(i.from)&&a.has(i.to)).map((i,v)=>({id:typeof i.id=="string"&&i.id?i.id:`e_${v}`,from:i.from,to:i.to})):[];return{...e,id:typeof e.id=="string"&&e.id?e.id:`cv_${t}`,name:typeof e.name=="string"&&e.name?e.name:"\u672A\u547D\u540D\u753B\u5E03",nodes:s,edges:l,grid:Ia.some(i=>i.id===e.grid)?e.grid:"dots",camera:e.camera&&typeof e.camera=="object"?e.camera:{x:0,y:0,s:1},updatedAt:ye(e.updatedAt,Date.now())}}function sa(e){let t=Ue();if(!e||typeof e!="object")return t;let s={...t};return je.some(a=>a.id===e.view)&&(s.view=e.view),typeof e.configTab=="string"&&(s.configTab=e.configTab),s.canvases=Array.isArray(e.canvases)?e.canvases.map(Ta).filter(Boolean):[],s.channels=Array.isArray(e.channels)?e.channels.filter(a=>a&&typeof a=="object").map((a,l)=>({...a,id:typeof a.id=="string"&&a.id?a.id:`ch_${l}`,name:typeof a.name=="string"?a.name:"",baseUrl:typeof a.baseUrl=="string"?a.baseUrl:"",keyHint:typeof a.keyHint=="string"?a.keyHint:"",hasKey:!!a.hasKey,enabled:a.enabled!==!1,models:Array.isArray(a.models)?a.models.filter(i=>i&&typeof i=="object").map((i,v)=>({...i,id:typeof i.id=="string"&&i.id?i.id:`m_${v}`,label:typeof i.label=="string"?i.label:"",caps:Array.isArray(i.caps)?i.caps.filter(S=>He.some(x=>x.id===S)):[],enabled:i.enabled!==!1})):[]})):[],s.prompts=Array.isArray(e.prompts)?e.prompts.filter(a=>a&&typeof a=="object"):t.prompts,s.assets=Array.isArray(e.assets)?e.assets.filter(a=>a&&typeof a=="object"):t.assets,s.records=Array.isArray(e.records)?e.records.filter(a=>a&&typeof a=="object"):[],s.promptSources=Array.isArray(e.promptSources)?e.promptSources.filter(a=>a&&typeof a=="object"):[],e.defaults&&typeof e.defaults=="object"&&e.defaults.image&&typeof e.defaults.image=="object"&&(s.defaults={...t.defaults,...e.defaults,image:{...t.defaults.image,...e.defaults.image}}),s.openCanvasId=s.canvases.some(a=>a.id===e.openCanvasId)?e.openCanvasId:null,s}var f=fe(require("react"),1);var g=fe(require("react"),1);var Ae=.1,Ye=3,Pa=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function oa(){let e=g.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),t=g.default.useCallback(l=>{if(!l)return;let i=e.current;l.style.transform=`translate3d(${i.x}px, ${i.y}px, 0) scale(${i.s})`},[]),s=g.default.useCallback((l,i)=>{let v=e.current;v.raf=0;let S=.24,x=v.tx-v.x,d=v.ty-v.y,N=v.ts-v.s;if(Math.abs(x)<.2&&Math.abs(d)<.2&&Math.abs(N)<8e-4){v.x=v.tx,v.y=v.ty,v.s=v.ts,t(l),i?.();return}v.x+=x*S,v.y+=d*S,v.s+=N*S,t(l),i?.(),v.raf=requestAnimationFrame(()=>s(l,i))},[t]),a=g.default.useCallback((l,i,v,S,x)=>{let d=e.current;if(d.tx=i,d.ty=v,d.ts=Math.min(Ye,Math.max(Ae,S)),Pa()){d.x=d.tx,d.y=d.ty,d.s=d.ts,d.raf&&cancelAnimationFrame(d.raf),d.raf=0,t(l),x?.();return}d.raf||(d.raf=requestAnimationFrame(()=>s(l,x)))},[t,s]);return g.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:t,moveTo:a}}function We(e,t){if(!e||!t)return"";let s=e.x+e.w,a=e.y+e.h/2,l=t.x,i=t.y+t.h/2,v=Math.max(40,Math.abs(l-s)*.45);return`M ${s} ${a} C ${s+v} ${a}, ${l-v} ${i}, ${l} ${i}`}function La({node:e}){let t=g.default.useRef(null);return g.default.useEffect(()=>{let s=t.current;if(!s)return;let a=s.getContext("2d"),l=480;s.width=l,s.height=l;let i=`${e.id}${e.prompt||""}`,v=7;for(let d=0;d<i.length;d++)v=(v*31+i.charCodeAt(d))%2147483647;let S=()=>(v=v*16807%2147483647)/2147483647;a.fillStyle="#141414",a.fillRect(0,0,l,l);let x=a.createRadialGradient(l*(.25+S()*.5),l*(.3+S()*.4),24,l/2,l/2,l*.8);x.addColorStop(0,"rgba(255,255,255,0.16)"),x.addColorStop(.5,"rgba(255,255,255,0.05)"),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.fillRect(0,0,l,l),a.strokeStyle="rgba(255,255,255,0.22)",a.lineWidth=1.5;for(let d=0;d<6;d++){let N=l*(.18+S()*.66);a.beginPath(),a.moveTo(0,N),a.lineTo(l,N+(S()-.5)*80),a.stroke()}a.strokeStyle="rgba(255,255,255,0.4)";for(let d=0;d<3;d++){let N=l*(.2+S()*.6),E=40+S()*90;a.beginPath(),S()<.5?a.arc(N,l*(.3+S()*.4),E,0,Math.PI*2):a.rect(N-E/2,l*(.3+S()*.4)-E/2,E,E),a.stroke()}},[e.id,e.prompt]),g.default.createElement("canvas",{ref:t,"aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function ja({node:e,channels:t}){switch(e.type){case"image":return g.default.createElement("div",{className:"cf-node-media"},e.src?g.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):null,!e.src&&e.status==="running"?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):null,!e.src&&e.status!=="running"?g.default.createElement(La,{node:e}):null,!e.src&&e.status==="failed"?g.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25"):null);case"audio":return g.default.createElement("div",{className:"cf-node-audio"},g.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(s,a)=>g.default.createElement("span",{key:a,style:{height:`${16+a*41%66}%`}}))),g.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return g.default.createElement("div",{className:"cf-node-text"},e.text?g.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):g.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":{let s=Ne(t,e.modelKey);return g.default.createElement("div",{className:"cf-node-config"},g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u6A21\u578B"),g.default.createElement("b",null,s?s.label:"\u672A\u9009\u62E9")),g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u6BD4\u4F8B"),g.default.createElement("b",null,e.ratio)),g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u5F20\u6570"),g.default.createElement("b",null,e.count)))}case"group":return null;default:return null}}function la({nodes:e,edges:t,selection:s,channels:a,grid:l,minimap:i,tool:v="select",onSelection:S,onMove:x,onResize:d,onConnect:N,onRemoveEdge:E,onOpenNode:b,camera:I,camApi:D,showHint:M}){let j=g.default.useRef(null),y=g.default.useRef(null),{cam:n,moveTo:u}=D,[H,O]=g.default.useState({w:1200,h:700}),[W,Z]=g.default.useState(Math.round(n.current.s*100)),G=g.default.useRef(null),X=g.default.useRef(null),ae=g.default.useRef(null),R=g.default.useRef(null),J=g.default.useRef(null),[pe,be]=g.default.useState(null),[ee,ne]=g.default.useState(null),[q,re]=g.default.useState(!1),ue=g.default.useCallback(()=>D.apply(j.current),[D]);g.default.useEffect(()=>{let p=y.current;if(!p)return;let h=new ResizeObserver(()=>{let B=p.getBoundingClientRect();O({w:B.width,h:B.height})});h.observe(p);let z=p.getBoundingClientRect();return O({w:z.width,h:z.height}),()=>h.disconnect()},[]),g.default.useEffect(()=>{ue(),Z(Math.round(n.current.s*100))}),g.default.useEffect(()=>{let p=z=>{z.code==="Space"&&!/input|textarea/i.test(z.target.tagName)&&(re(!0),z.preventDefault())},h=z=>{z.code==="Space"&&re(!1)};return window.addEventListener("keydown",p),window.addEventListener("keyup",h),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",h)}},[]),g.default.useEffect(()=>{if(!I)return;let p=j.current;p&&u(p,I.x,I.y,I.s,()=>Z(Math.round(n.current.s*100)))},[I]);let Y=()=>y.current.getBoundingClientRect(),k=(p,h)=>{let z=Y();return{x:(p-z.left-n.current.x)/n.current.s,y:(h-z.top-n.current.y)/n.current.s}},_=g.default.useCallback(()=>{let p=j.current;if(!p||!e.length)return;let h=72,z=Math.min(...e.map($=>$.x))-h,B=Math.min(...e.map($=>$.y))-h,r=Math.max(...e.map($=>$.x+$.w))+h,C=Math.max(...e.map($=>$.y+$.h))+h,A=Math.min(1.35,Math.max(Ae,Math.min(H.w/(r-z),H.h/(C-B))));u(p,h-z*A,h-B*A,A,()=>Z(Math.round(n.current.s*100)))},[e,H,u,n]);g.default.useEffect(()=>{let p=setTimeout(_,80);return()=>clearTimeout(p)},[]),g.default.useEffect(()=>{D.fit=_},[D,_]);let te=p=>{let h=j.current;if(!h)return;let z=H.w/2,B=H.h/2,r=n.current,C=(z-r.tx)/r.ts,A=(B-r.ty)/r.ts,$=Math.min(Ye,Math.max(Ae,r.ts*p));u(h,z-C*$,B-A*$,$,()=>Z(Math.round(n.current.s*100)))},se=p=>{p.preventDefault();let h=Y(),z=p.clientX-h.left,B=p.clientY-h.top,r=n.current,C=(z-r.tx)/r.ts,A=(B-r.ty)/r.ts,$=Math.min(Ye,Math.max(Ae,r.ts*Math.exp(-p.deltaY*.0018)));u(j.current,z-C*$,B-A*$,$,()=>Z(Math.round(n.current.s*100)))},ve=p=>{if(p.button===1||q||v==="pan"){p.preventDefault(),G.current={x:p.clientX,y:p.clientY,cx:n.current.tx,cy:n.current.ty},y.current.classList.add("is-grabbing"),y.current.setPointerCapture(p.pointerId);return}if(p.button!==0)return;let h=k(p.clientX,p.clientY);R.current={x0:h.x,y0:h.y,additive:p.shiftKey},ne({x:h.x,y:h.y,w:0,h:0}),y.current.setPointerCapture(p.pointerId)},Q=p=>{if(G.current){let h=n.current;u(j.current,G.current.cx+(p.clientX-G.current.x),G.current.cy+(p.clientY-G.current.y),h.ts,()=>Z(Math.round(n.current.s*100)));return}if(X.current){let h=k(p.clientX,p.clientY);x(X.current.ids,h.x-X.current.p0.x,h.y-X.current.p0.y),X.current.p0=h;return}if(ae.current){let h=k(p.clientX,p.clientY),z=ae.current,B=Math.max(140,Math.round(h.x-z.x)),r=z.locked?Math.round(B*z.ratio):Math.max(80,Math.round(h.y-z.y));d(z.id,B,r);return}if(R.current){let h=k(p.clientX,p.clientY),z=R.current;ne({x:Math.min(z.x0,h.x),y:Math.min(z.y0,h.y),w:Math.abs(h.x-z.x0),h:Math.abs(h.y-z.y0)});return}J.current&&be({from:J.current,to:k(p.clientX,p.clientY)})},Me=p=>{if(G.current){G.current=null,y.current.classList.remove("is-grabbing");return}if(X.current){X.current=null;return}if(ae.current){ae.current=null;return}if(R.current){let h=R.current;R.current=null;let z=ee;if(ne(null),z&&(z.w>6||z.h>6)){let B=e.filter(r=>!(r.x>z.x+z.w||r.x+r.w<z.x||r.y>z.y+z.h||r.y+r.h<z.y));S(h.additive?[...new Set([...s,...B.map(r=>r.id)])]:B.map(r=>r.id))}else h.additive||S([]);return}if(J.current){let h=k(p.clientX,p.clientY),z=e.filter(B=>B.type!=="group").find(B=>h.x>=B.x&&h.x<=B.x+B.w&&h.y>=B.y&&h.y<=B.y+B.h);z&&ea(e,t,J.current,z.id)&&N(J.current,z.id),J.current=null,be(null)}},Te=(p,h)=>{if(p.button===1||q||v==="pan")return;p.stopPropagation();let z=p.shiftKey||p.metaKey||p.ctrlKey,B=s.includes(h.id),r;if(z?r=B?s.filter($=>$!==h.id):[...s,h.id]:r=B?s:[h.id],S(r),z)return;let C=k(p.clientX,p.clientY),A=h.type==="group"&&h.childIds?.length?[h.id,...h.childIds]:r.length>1?r:[h.id];X.current={ids:A,p0:C},y.current.setPointerCapture(p.pointerId)},Pe=(p,h)=>{let[z,B]=String(h.ratio||"1:1").split(":").map(Number),r=Number.isFinite(z)&&Number.isFinite(B)&&z>0&&B>0?B/z:1;ae.current={id:h.id,x:h.x,y:h.y,locked:h.type==="image"&&h.locked!==!1,ratio:r},y.current.setPointerCapture(p.pointerId)},Le=(p,h)=>{p.stopPropagation(),J.current=h.id,be({from:h.id,to:k(p.clientX,p.clientY)}),y.current.setPointerCapture(p.pointerId)},Se=g.default.useMemo(()=>Object.fromEntries(e.map(p=>[p.id,p])),[e]);return g.default.createElement("div",{className:"cf-board"},g.default.createElement("div",{className:`cf-stage ${l==="lines"?"cf-stage--lines":l==="blank"?"cf-stage--blank":"cf-stage--dots"}${q||v==="pan"?" is-grab":""}`,ref:y,onPointerDown:ve,onPointerMove:Q,onPointerUp:Me,onPointerCancel:Me,onWheel:se,style:{"--cf-grid":`${28*W/100}px`}},g.default.createElement("div",{className:"cf-world",ref:j},g.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},g.default.createElement("defs",null,g.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},g.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),t.map(p=>{let h=Se[p.from],z=Se[p.to];return!h||!z?null:g.default.createElement("g",{key:p.id,className:"cf-edge"},g.default.createElement("path",{d:We(h,z),className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),g.default.createElement("path",{d:We(h,z),className:"cf-edge-hit",onPointerDown:B=>{B.stopPropagation(),E(p.id)}},g.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),pe?(()=>{let p=Se[pe.from];return p?g.default.createElement("path",{d:We(p,{x:pe.to.x,y:pe.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),e.map(p=>g.default.createElement("div",{key:p.id,className:`cf-node${s.includes(p.id)?" is-selected":""}${p.status==="running"?" is-running":""}${p.type==="group"?" is-group":""}`,"data-id":p.id,style:{left:p.x,top:p.y,width:p.w,height:p.h,zIndex:p.type==="group"?3:2},onPointerDown:h=>Te(h,p)},p.type==="group"?g.default.createElement("div",{className:"cf-node-group-head"},g.default.createElement("span",null,p.name||"\u5206\u7EC4"),p.childIds?.length?g.default.createElement("span",{className:"cf-node-group-count"},p.childIds.length," \u4E2A\u8282\u70B9"):null):g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"cf-node-head"},g.default.createElement("span",{className:"cf-node-type"},ke[p.type]),g.default.createElement("span",{className:"cf-node-name"},p.name||""),g.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:h=>Le(h,p),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),g.default.createElement("div",{className:"cf-node-body",onDoubleClick:h=>{h.stopPropagation(),b(p)}},g.default.createElement(ja,{node:p,channels:a}))),s.includes(p.id)&&p.type!=="group"?g.default.createElement("span",{className:"cf-node-handle",onPointerDown:h=>{h.stopPropagation(),Pe(h,p)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)),ee&&ee.w>4?g.default.createElement("div",{className:"cf-marquee",style:{left:ee.x,top:ee.y,width:ee.w,height:ee.h}}):null)),i?g.default.createElement(Ha,{nodes:e,cam:n.current,size:H,onJump:p=>u(j.current,H.w/2-p.x*n.current.s,H.h/2-p.y*n.current.s,n.current.s,()=>Z(Math.round(n.current.s*100)))}):null,g.default.createElement("div",{className:"cf-zoom"},g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>te(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),g.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:W,"aria-label":"\u7F29\u653E",onChange:p=>{let h=j.current;if(!h)return;let z=Number(p.target.value)/100,B=n.current,r=H.w/2,C=H.h/2;u(h,r-(r-B.tx)/B.s*z,C-(C-B.ty)/B.s*z,z,()=>Z(Math.round(n.current.s*100)))}}),g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>te(1.25),"aria-label":"\u653E\u5927"},"+"),g.default.createElement("span",{className:"cf-zoom-num"},W,"%"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:_},"\u9002\u5E94")),M?g.default.createElement("p",{className:"cf-editor-hint"},"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5"):null)}function Ha({nodes:e,cam:t,size:s,onJump:a}){if(!e.length)return null;let l=168,i=108,v=80,S=Math.min(...e.map(n=>n.x))-v,x=Math.min(...e.map(n=>n.y))-v,d=Math.max(...e.map(n=>n.x+n.w))+v,N=Math.max(...e.map(n=>n.y+n.h))+v,E=Math.max(1,d-S),b=Math.max(1,N-x),I=Math.min(l/E,i/b),D=(l-E*I)/2,M=(i-b*I)/2,j=n=>({x:(n.x-S)*I+D,y:(n.y-x)*I+M,w:n.w*I,h:n.h*I}),y={x:(-t.x/t.s-S)*I+D,y:(-t.y/t.s-x)*I+M,w:s.w/t.s*I,h:s.h/t.s*I};return g.default.createElement("svg",{className:"cf-minimap",viewBox:`0 0 ${l} ${i}`,width:l,height:i,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:n=>{let u=n.currentTarget.getBoundingClientRect(),H=(n.clientX-u.left)/u.width*l,O=(n.clientY-u.top)/u.height*i;a({x:S+(H-D)/I,y:x+(O-M)/I})}},e.filter(n=>n.type==="group").map(n=>{let u=j(n);return g.default.createElement("rect",{key:n.id,x:u.x,y:u.y,width:u.w,height:u.h,rx:3,className:"cf-mini-group"})}),e.filter(n=>n.type!=="group").map(n=>{let u=j(n);return g.default.createElement("rect",{key:n.id,x:u.x,y:u.y,width:Math.max(3,u.w),height:Math.max(3,u.h),rx:2,className:`cf-mini-node${n.type==="image"?" cf-mini-image":""}`})}),g.default.createElement("rect",{x:y.x,y:y.y,width:Math.max(6,y.w),height:Math.max(6,y.h),rx:2,className:"cf-mini-view"}))}function ca({canvases:e,onOpen:t,onCreate:s,onRename:a,onDelete:l,onImport:i}){let[v,S]=f.default.useState(null),[x,d]=f.default.useState(null);return f.default.createElement("div",{className:"cf-page"},f.default.createElement("div",{className:"cf-page-inner"},f.default.createElement("div",{className:"cf-page-head"},f.default.createElement("div",null,f.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),f.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),f.default.createElement("div",{className:"cf-page-actions"},f.default.createElement(P,{icon:"upload",onClick:i},"\u5BFC\u5165\u753B\u5E03"),f.default.createElement(P,{variant:"primary",icon:"plus",onClick:s},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?f.default.createElement(ce,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:f.default.createElement(P,{variant:"primary",icon:"plus",onClick:s},"\u65B0\u5EFA\u753B\u5E03")}):f.default.createElement("div",{className:"cf-card"},f.default.createElement("div",{className:"cf-list-head"},f.default.createElement("span",null,"\u540D\u79F0"),f.default.createElement("span",null,"\u5185\u5BB9"),f.default.createElement("span",null,"\u66F4\u65B0")),f.default.createElement("div",{className:"cf-canvas-list"},e.map(N=>f.default.createElement("div",{key:N.id,className:"cf-canvas-row"},f.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>t(N.id)},N.name||"\u672A\u547D\u540D\u753B\u5E03"),f.default.createElement("span",{className:"cf-canvas-meta"},N.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",N.edges.length," \u6761\u8FDE\u7EBF"),f.default.createElement("span",{className:"cf-canvas-row-actions"},f.default.createElement(V,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>S(N)}),f.default.createElement(V,{name:"trash",label:"\u5220\u9664",onClick:()=>d(N)}))))))),v?f.default.createElement(Oa,{canvas:v,onClose:()=>S(null),onSubmit:N=>{a(v.id,N),S(null)}}):null,x?f.default.createElement(de,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>d(null),footer:f.default.createElement(f.default.Fragment,null,f.default.createElement(P,{onClick:()=>d(null)},"\u53D6\u6D88"),f.default.createElement(P,{variant:"danger",onClick:()=>{l(x.id),d(null)}},"\u5220\u9664"))},f.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",x.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",x.nodes.length," \u4E2A\u8282\u70B9\u548C ",x.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function Oa({canvas:e,onClose:t,onSubmit:s}){let[a,l]=f.default.useState(e.name||"");return f.default.createElement(de,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:t,footer:f.default.createElement(f.default.Fragment,null,f.default.createElement(P,{onClick:t},"\u53D6\u6D88"),f.default.createElement(P,{variant:"primary",onClick:()=>s(a.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},f.default.createElement("label",{className:"cf-field"},f.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),f.default.createElement("input",{className:"cf-input",value:a,autoFocus:!0,onChange:i=>l(i.target.value),onKeyDown:i=>{i.key==="Enter"&&s(a.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var Ka=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"audio",label:"\u97F3\u9891",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"}];function fa({canvas:e,channels:t,defaults:s,onChange:a,onBack:l,say:i}){let v=oa(),{cam:S,moveTo:x}=v,[d,N]=f.default.useState([]),[E,b]=f.default.useState("select"),[I,D]=f.default.useState(typeof window<"u"&&window.__CF_DEV_PROMPT||""),[M,j]=f.default.useState(s?.ratio||"1:1"),[y,n]=f.default.useState(s?.count||1),[u,H]=f.default.useState(s?.modelKey||""),[O,W]=f.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[Z,G]=f.default.useState([]),[X,ae]=f.default.useState(1024),[R,J]=f.default.useState(1024),[pe,be]=f.default.useState(null),ee=f.default.useRef(null),ne=f.default.useRef(null);f.default.useEffect(()=>{if(!O)return;let r=A=>{ee.current?.contains(A.target)||W(null)},C=A=>{A.key==="Escape"&&W(null)};return window.addEventListener("pointerdown",r),window.addEventListener("keydown",C),()=>{window.removeEventListener("pointerdown",r),window.removeEventListener("keydown",C)}},[O]);let q=e.nodes,re=e.edges,ue=q.filter(r=>d.includes(r.id)),Y=ue.length===1?ue[0]:null,k=f.default.useMemo(()=>Y?re.filter(r=>r.to===Y.id).map(r=>q.find(C=>C.id===r.from)).filter(r=>r&&r.type!=="group"&&r.type!=="config"):[],[Y,re,q]),_=()=>{ne.current?.click()},te=r=>{let C=[...r.target.files||[]];C.length&&(G(A=>[...A,...C.map($=>({id:$.name+$.size,name:$.name,url:URL.createObjectURL($)}))]),i?.(`\u5DF2\u52A0\u5165 ${C.length} \u5F20\u53C2\u8003\u56FE`),r.target.value="")},se=Ce(t,"image"),ve=Ne(t,u)||se[0]||null;f.default.useEffect(()=>{Y&&(Y.type==="image"||Y.type==="audio")&&(D(Y.prompt||""),Y.ratio&&j(Y.ratio))},[Y?.id]);let Q=r=>a(r),Me=(r,C)=>Q(A=>({nodes:A.nodes.map($=>$.id===r?{...$,...C}:$)})),Te=(r,C,A)=>{let $=new Set(r);Q(U=>({nodes:U.nodes.map(oe=>$.has(oe.id)?{...oe,x:Math.round(oe.x+C),y:Math.round(oe.y+A)}:oe)}))},Pe=(r,C,A)=>Me(r,{w:C,h:A}),Le=(r,C)=>Q(A=>({edges:[...A.edges,{id:F("e"),from:r,to:C}]})),Se=r=>Q(C=>({edges:C.edges.filter(A=>A.id!==r)})),ge=r=>{let C=S.current,A={x:(window.innerWidth/2-C.tx)/C.s,y:(window.innerHeight/2-C.ty)/C.s},$=ze(r,A,r==="config"?{modelKey:u||se[0]?.key||"",ratio:M,count:y}:{});Q(U=>({nodes:[...U.nodes,$]})),N([$.id]),i?.(`\u5DF2\u65B0\u5EFA${ke[r]}\u8282\u70B9`)},p=()=>{let r=I.trim();if(!r)return;let C=Y&&Y.type==="image"?Y:null;if(C){let ie=C.id;Q(le=>({nodes:le.nodes.map(me=>me.id===ie?{...me,prompt:r,status:"running",ratio:M}:me)})),setTimeout(()=>{Q(le=>({nodes:le.nodes.map(me=>me.id===ie&&me.status==="running"?{...me,status:"done"}:me)}))},900),i?.("\u5F00\u59CB\u751F\u6210");return}let A=S.current,$={x:(window.innerWidth/2-A.tx)/A.s,y:(window.innerHeight/2-A.ty)/A.s},U=Array.from({length:y},(ie,le)=>ze("image",{x:$.x+le*260,y:$.y},{prompt:r,ratio:M,status:"running"})),oe=new Set(U.map(ie=>ie.id));Q(ie=>({nodes:[...ie.nodes,...U]})),N(U.map(ie=>ie.id)),setTimeout(()=>{Q(ie=>({nodes:ie.nodes.map(le=>oe.has(le.id)&&le.status==="running"?{...le,status:"done"}:le)}))},900),D(""),i?.("\u5F00\u59CB\u751F\u6210")},h=()=>{let r=aa(q,d);r&&(Q(C=>({nodes:[r,...C.nodes]})),N([r.id]))},z=()=>{let r=new Set(d);r.size&&(Q(C=>({nodes:C.nodes.filter(A=>!r.has(A.id)),edges:C.edges.filter(A=>!r.has(A.from)&&!r.has(A.to))})),N([]))},B=()=>{let r=q.filter(U=>d.includes(U.id));if(!r.length)return;let C={},A=r.map(U=>{let oe=F(U.type[0]);return C[U.id]=oe,{...U,id:oe,x:U.x+40,y:U.y+40,status:"idle"}}),$=re.filter(U=>C[U.from]&&C[U.to]).map(U=>({id:F("e"),from:C[U.from],to:C[U.to]}));Q(U=>({nodes:[...U.nodes,...A],edges:[...U.edges,...$]})),N(A.map(U=>U.id))};return f.default.useEffect(()=>{let r=C=>{if(/input|textarea|select/i.test(C.target.tagName))return;let A=C.metaKey||C.ctrlKey;if(A&&C.key.toLowerCase()==="d"){C.preventDefault(),B();return}if(A&&C.key.toLowerCase()==="g"){C.preventDefault(),h();return}if(C.key==="Delete"||C.key==="Backspace"){C.preventDefault(),z();return}if(C.key==="Escape"){N([]);return}let $=C.key.toLowerCase();$==="v"&&b("select"),$==="h"&&b("pan"),$==="t"&&ge("text"),$==="i"&&ge("image"),$==="a"&&ge("audio"),$==="c"&&ge("config"),$==="g"&&ge("group")};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[q,re,d,I,M,y,u]),f.default.createElement("div",{className:"cf-editor"},f.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},f.default.createElement(V,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:l}),f.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),Ka.map((r,C)=>r.sep?f.default.createElement("span",{key:`s${C}`,className:"cf-rail-sep","aria-hidden":"true"}):f.default.createElement("button",{key:r.id,type:"button",className:`cf-rail-btn${E===r.id?" is-on":""}`,title:`${r.label}  ${r.key}`,"aria-label":r.label,"aria-pressed":E===r.id,onClick:()=>{if(r.id==="focus"){v.fit?.();return}if(["text","image","audio","config","group"].includes(r.id)){ge(r.id);return}b(r.id)}},f.default.createElement(K,{name:r.icon,size:18})))),f.default.createElement("div",{className:"cf-editor-main"},f.default.createElement(la,{nodes:q,edges:re,selection:d,channels:t,grid:e.grid||"dots",tool:E,minimap:!0,camera:pe,camApi:v,showHint:!ue.length,onSelection:N,onMove:Te,onResize:Pe,onConnect:Le,onRemoveEdge:Se,onOpenNode:r=>{N([r.id]),D(r.prompt||r.text||"")}}),f.default.createElement("div",{className:"cf-composer"},f.default.createElement("textarea",{className:"cf-composer-input",value:I,rows:3,placeholder:Y?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:r=>D(r.target.value),onKeyDown:r=>{r.key==="Enter"&&!r.shiftKey&&!r.nativeEvent.isComposing&&(r.preventDefault(),p())}}),f.default.createElement("div",{className:"cf-composer-bar",ref:ee},f.default.createElement("div",{className:"cf-composer-left"},f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>W(O==="ref"?null:"ref"),"aria-expanded":O==="ref","aria-haspopup":"menu"},f.default.createElement(K,{name:"plus",size:15}),"\u53C2\u8003",Z.length+k.length?f.default.createElement("span",{className:"cf-bar-badge"},Z.length+k.length):null),O==="ref"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),k.length?k.map(r=>f.default.createElement("button",{key:r.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{D(C=>`${C}${C&&!C.endsWith(" ")?" ":""}@${ke[r.type]}${r.name?`:${r.name}`:""} `),W(null)}},f.default.createElement(K,{name:r.type==="image"?"image":r.type==="text"?"text":"audio",size:14}),f.default.createElement("span",{className:"cf-menu-label"},r.name||(r.prompt||r.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):f.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),f.default.createElement("div",{className:"cf-menu-sep"}),f.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:_},f.default.createElement(K,{name:"upload",size:14}),f.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),f.default.createElement("input",{ref:ne,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:te})):null),f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>{if(O!=="ratio"){let r=M.split(":").map(Number);r.length===2&&r.every(C=>Number.isFinite(C)&&C>0)&&(ae(r[0]),J(r[1]))}W(O==="ratio"?null:"ratio")},"aria-expanded":O==="ratio","aria-haspopup":"menu"},f.default.createElement(K,{name:"frame",size:15}),M),O==="ratio"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u753B\u9762\u6BD4\u4F8B"),he.map(r=>f.default.createElement("button",{key:r.id,type:"button",className:`cf-menu-item${M===r.id?" is-on":""}`,role:"menuitem",onClick:()=>{j(r.id),W(null)}},f.default.createElement("span",{className:"cf-menu-label"},r.label),f.default.createElement("span",{className:"cf-menu-meta"},r.w," \xD7 ",r.h))),f.default.createElement("div",{className:"cf-menu-sep"}),f.default.createElement("p",{className:"cf-menu-head"},"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),f.default.createElement("div",{className:"cf-menu-custom"},f.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:X,"aria-label":"\u5BBD",onChange:r=>ae(Number(r.target.value.replace(/\D/g,""))||0)}),f.default.createElement("span",{className:"cf-menu-x","aria-hidden":"true"},"\xD7"),f.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:R,"aria-label":"\u9AD8",onChange:r=>J(Number(r.target.value.replace(/\D/g,""))||0)}),f.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",disabled:!X||!R,onClick:()=>{j(`${X}:${R}`),W(null)}},"\u5E94\u7528"))):null),f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>W(O==="count"?null:"count"),"aria-expanded":O==="count","aria-haspopup":"menu"},y," \u5F20",f.default.createElement(K,{name:"chevron",size:12})),O==="count"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(r=>f.default.createElement("button",{key:r,type:"button",className:`cf-menu-item${y===r?" is-on":""}`,role:"menuitem",onClick:()=>{n(r),W(null)}},r," \u5F20"))):null)),f.default.createElement("div",{className:"cf-composer-right"},f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>W(O==="model"?null:"model"),"aria-expanded":O==="model","aria-haspopup":"menu"},f.default.createElement(K,{name:"bars",size:15}),f.default.createElement("span",{className:"cf-bar-label"},ve?ve.label:"\u9009\u62E9\u6A21\u578B"),f.default.createElement(K,{name:"chevron",size:12})),O==="model"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},f.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),se.length?se.map(r=>f.default.createElement("button",{key:r.key,type:"button",className:`cf-menu-item${r.key===u?" is-on":""}`,role:"menuitem",onClick:()=>{H(r.key),W(null)}},f.default.createElement("span",{className:"cf-menu-label"},r.label),f.default.createElement("span",{className:"cf-menu-meta"},r.channel.name||r.channel.protocol))):f.default.createElement("p",{className:"cf-menu-empty"},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0")):null),ue.length?f.default.createElement("span",{style:{display:"inline-flex",gap:2}},f.default.createElement(V,{name:"group",label:"\u5305\u6210\u7EC4",onClick:h}),f.default.createElement(V,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:z})):null,f.default.createElement("button",{type:"button",className:"cf-send",onClick:p,disabled:!I.trim(),"aria-label":"\u53D1\u9001\u6D88\u606F","data-tip":"\u53D1\u9001\u6D88\u606F"},f.default.createElement(K,{name:"arrowUp",size:17})))))))}var m=fe(require("react"),1);function da({channels:e,defaults:t,records:s,prompt:a,onPrompt:l,onCreateRecord:i,onDeleteRecords:v,onLookupPrompts:S,say:x}){let d=l,[N,E]=m.default.useState(t?.ratio||"1:1"),[b,I]=m.default.useState(t?.quality||"\u81EA\u52A8"),[D,M]=m.default.useState(t?.resolution||"\u81EA\u52A8"),[j,y]=m.default.useState(t?.modelKey||""),[n,u]=m.default.useState(1024),[H,O]=m.default.useState(1024),[W,Z]=m.default.useState(!0),[G,X]=m.default.useState([]),[ae,R]=m.default.useState(!1),[J,pe]=m.default.useState([]),[be,ee]=m.default.useState(!1),ne=Ce(e,"image"),q=Ne(e,j)||ne[0]||null,re=k=>{E(k);let _=he.find(te=>te.id===k);_&&(u(_.w),O(_.h))},ue=()=>{let k=a.trim();if(!k){x?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}let _=se=>{let ve=Math.max(256,Math.min(4096,Math.round(se)));return W?Math.round(ve/16)*16:ve};R(!0);let te={id:`r${Date.now().toString(36)}`,prompt:k,model:q?q.label:"\u672A\u9009\u62E9\u6A21\u578B",ratio:N,size:`${_(n)}x${_(H)}`,quality:b,resolution:D,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};i?.(te),setTimeout(()=>{R(!1),pe(se=>[{...te,id:`img${Date.now().toString(36)}`},...se]),x?.("\u751F\u6210\u5B8C\u6210")},1100)},Y=k=>X(_=>_.includes(k)?_.filter(te=>te!==k):[..._,k]);return m.default.createElement("div",{className:"cf-page"},m.default.createElement("div",{className:"cf-page-inner"},m.default.createElement("div",{className:"cf-studio"},m.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},m.default.createElement("div",{className:"cf-card"},m.default.createElement("div",{className:"cf-card-head"},m.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),m.default.createElement("span",{className:"cf-card-count"},s.length)),m.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)"}},m.default.createElement("div",{style:{display:"flex",gap:6}},m.default.createElement(P,{size:"sm",icon:"plus",onClick:()=>d("")},"\u65B0\u5EFA"),m.default.createElement(P,{size:"sm",onClick:()=>X(s.map(k=>k.id))},"\u5168\u9009"),m.default.createElement(P,{size:"sm",variant:"danger",disabled:!G.length,onClick:()=>{v?.(G),X([])}},"\u5220\u9664")),s.length===0?m.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):m.default.createElement("div",{className:"cf-record-list"},s.map(k=>m.default.createElement("div",{key:k.id,style:{display:"flex",alignItems:"center",gap:6}},m.default.createElement("input",{type:"checkbox",checked:G.includes(k.id),onChange:()=>Y(k.id),"aria-label":`\u9009\u62E9 ${k.prompt}`}),m.default.createElement("button",{type:"button",className:"cf-record",style:{flex:1,minWidth:0},onClick:()=>{d(k.prompt),E(k.ratio)}},m.default.createElement("span",{className:"cf-record-prompt"},k.prompt),m.default.createElement("span",{className:"cf-record-meta"},k.model," \xB7 ",k.size," \xB7 ",k.at)))))))),m.default.createElement("div",{className:"cf-studio-col"},m.default.createElement("div",{className:"cf-card"},m.default.createElement("div",{className:"cf-card-head"},m.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),m.default.createElement("div",{className:"cf-card-body cf-form"},m.default.createElement("div",{className:"cf-form-row"},m.default.createElement("div",{className:"cf-form-head"},m.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),m.default.createElement("div",{className:"cf-form-head-actions"},m.default.createElement(P,{size:"sm",icon:"book",onClick:()=>S?.()},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),m.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:a,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:k=>d(k.target.value)})),m.default.createElement("div",{className:"cf-form-row"},m.default.createElement("div",{className:"cf-form-head"},m.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),m.default.createElement("div",{className:"cf-form-head-actions"},m.default.createElement(P,{size:"sm",onClick:()=>x?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u526A\u5207\u677F"),m.default.createElement(P,{size:"sm",icon:"upload",onClick:()=>x?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u4E0A\u4F20"))),m.default.createElement("div",{className:"cf-drop"},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC")),m.default.createElement("div",{className:"cf-form-row"},m.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),m.default.createElement("div",{style:{position:"relative"}},m.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>ee(k=>!k)},m.default.createElement(K,{name:"sparkle",size:13}),m.default.createElement("span",null,q?q.label:"\u9009\u62E9\u6A21\u578B"),m.default.createElement(K,{name:"chevron",size:12})),be?m.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},ne.length?ne.map(k=>m.default.createElement("button",{key:k.key,type:"button",className:`cf-menu-item${k.key===(j||ne[0]?.key)?" is-on":""}`,onClick:()=>{y(k.key),ee(!1)}},k.label," ",m.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",k.channel.name||k.channel.protocol))):m.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),m.default.createElement("div",{className:"cf-form-row"},m.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),m.default.createElement("div",{className:"cf-chips"},Ee.map(k=>m.default.createElement("button",{key:k,type:"button",className:`cf-chip${b===k?" is-on":""}`,onClick:()=>I(k)},k)))),m.default.createElement("div",{className:"cf-form-row"},m.default.createElement("div",{className:"cf-form-head"},m.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),m.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},m.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),m.default.createElement("input",{type:"checkbox",checked:W,onChange:k=>Z(k.target.checked)}))),m.default.createElement("div",{className:"cf-size-row"},m.default.createElement("input",{className:"cf-input cf-input--num",value:n,"aria-label":"\u5BBD",onChange:k=>u(Number(k.target.value.replace(/\D/g,""))||0)}),m.default.createElement(K,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),m.default.createElement("input",{className:"cf-input cf-input--num",value:H,"aria-label":"\u9AD8",onChange:k=>O(Number(k.target.value.replace(/\D/g,""))||0)})),m.default.createElement("div",{className:"cf-chips"},he.map(k=>m.default.createElement("button",{key:k.id,type:"button",className:`cf-chip cf-chip--tag${N===k.id?" is-on":""}`,onClick:()=>re(k.id)},k.label)))),m.default.createElement("div",{className:"cf-form-row"},m.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),m.default.createElement("div",{className:"cf-chips"},$e.map(k=>m.default.createElement("button",{key:k,type:"button",className:`cf-chip${D===k?" is-on":""}`,onClick:()=>M(k)},k)))),m.default.createElement(P,{variant:"primary",icon:ae?"refresh":"play",onClick:ue,disabled:ae||!a.trim()},ae?"\u751F\u6210\u4E2D\u2026":"\u5F00\u59CB\u751F\u6210")))),m.default.createElement("div",{className:"cf-studio-col"},m.default.createElement("div",{className:"cf-card"},m.default.createElement("div",{className:"cf-card-head"},m.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),m.default.createElement("span",{className:"cf-card-count"},J.length)),m.default.createElement("div",{className:"cf-card-body"},J.length===0?m.default.createElement(ce,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):m.default.createElement("div",{className:"cf-results"},J.map(k=>m.default.createElement(Ua,{key:k.id,record:k})))))))))}function Ua({record:e}){let t=m.default.useRef(null);return m.default.useEffect(()=>{let s=t.current;if(!s)return;let a=320;s.width=a,s.height=a;let l=s.getContext("2d"),i=11;for(let x of`${e.prompt}${e.id}`)i=(i*31+x.charCodeAt(0))%2147483647;let v=()=>(i=i*16807%2147483647)/2147483647;l.fillStyle="#141414",l.fillRect(0,0,a,a);let S=l.createRadialGradient(a*v(),a*v(),20,a/2,a/2,a*.7);S.addColorStop(0,"rgba(255,255,255,0.18)"),S.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=S,l.fillRect(0,0,a,a),l.strokeStyle="rgba(255,255,255,0.3)",l.lineWidth=1.4;for(let x=0;x<5;x++){let d=a*(.2+v()*.6);l.beginPath(),l.moveTo(0,d),l.lineTo(a,d+(v()-.5)*60),l.stroke()}},[e.id,e.prompt]),m.default.createElement("figure",{className:"cf-result",title:`${e.prompt}
${e.model} \xB7 ${e.size}`},m.default.createElement("canvas",{ref:t,"aria-label":e.prompt}))}var T=fe(require("react"),1);var _e=6;function pa({prompts:e,sources:t,onUse:s,onBack:a,returnTo:l}){let[i,v]=T.default.useState(""),[S,x]=T.default.useState("\u5168\u90E8"),[d,N]=T.default.useState("\u5168\u90E8"),[E,b]=T.default.useState(_e),I=["\u5168\u90E8",...new Set(e.map(n=>n.category).filter(Boolean))],D=["\u5168\u90E8",...new Set(e.flatMap(n=>n.tags||[]))],M=e.filter(n=>{if(S!=="\u5168\u90E8"&&n.category!==S||d!=="\u5168\u90E8"&&!(n.tags||[]).includes(d))return!1;if(!i)return!0;let u=i.toLowerCase();return(n.title||"").toLowerCase().includes(u)||(n.text||"").toLowerCase().includes(u)||(n.tags||[]).some(H=>H.toLowerCase().includes(u))}),j=M.slice(0,E),y=M.length>j.length;return T.default.useEffect(()=>{b(_e)},[i,S,d]),T.default.createElement("div",{className:"cf-page"},T.default.createElement("div",{className:"cf-page-inner"},T.default.createElement("div",{className:"cf-title-center"},T.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),T.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD"),l&&a?T.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:a},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),T.default.createElement("div",{className:"cf-split"},T.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},T.default.createElement("div",{className:"cf-filter-group"},T.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),T.default.createElement("div",{className:"cf-filter-chips"},I.map(n=>T.default.createElement("button",{key:n,type:"button",className:`cf-chip cf-chip--tag${S===n?" is-on":""}`,onClick:()=>x(n)},n)))),T.default.createElement("div",{className:"cf-filter-group"},T.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),T.default.createElement("div",{className:"cf-filter-chips"},D.map(n=>T.default.createElement("button",{key:n,type:"button",className:`cf-chip cf-chip--tag${d===n?" is-on":""}`,onClick:()=>N(n)},n))))),T.default.createElement("div",null,T.default.createElement("div",{className:"cf-search"},T.default.createElement(K,{name:"search",size:15}),T.default.createElement("input",{className:"cf-input",value:i,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u6216\u6807\u7B7E",onChange:n=>v(n.target.value)})),t.length===0?T.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u63D0\u793A\u8BCD\u6765\u6E90\u3002\u5230\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u540E\uFF0C\u8FD9\u91CC\u4F1A\u5206\u9875\u52A0\u8F7D\u66F4\u591A\u3002"):null,M.length===0?T.default.createElement(ce,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:i||S!=="\u5168\u90E8"||d!=="\u5168\u90E8"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u6765\u6E90\u3002"}):T.default.createElement(T.default.Fragment,null,T.default.createElement("ul",{className:"cf-prompt-grid"},j.map(n=>T.default.createElement("li",{key:n.id,className:"cf-prompt-card"},T.default.createElement("span",{className:"cf-prompt-title"},n.title),T.default.createElement("span",{className:"cf-prompt-text"},n.text),T.default.createElement("span",{className:"cf-prompt-tags"},n.category?T.default.createElement("span",{className:"cf-tag"},n.category):null,(n.tags||[]).map(u=>T.default.createElement("span",{key:u,className:"cf-tag"},u))),T.default.createElement("span",{style:{display:"flex",gap:6,marginTop:4}},T.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>s(n)},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"))))),y?T.default.createElement("div",{className:"cf-more"},T.default.createElement(P,{onClick:()=>b(n=>n+_e)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",M.length-j.length," \u6761\uFF09")):T.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))))}var w=fe(require("react"),1);function ua({assets:e,onSave:t,onDelete:s,onImport:a,say:l}){let[i,v]=w.default.useState(""),[S,x]=w.default.useState("all"),[d,N]=w.default.useState(null),[E,b]=w.default.useState(null),I=e.filter(M=>{if(S!=="all"&&M.kind!==S)return!1;if(!i)return!0;let j=i.toLowerCase();return[M.title,M.text,M.source,...M.tags||[]].filter(Boolean).some(y=>String(y).toLowerCase().includes(j))});return w.default.createElement("div",{className:"cf-page"},w.default.createElement("div",{className:"cf-page-inner"},w.default.createElement("div",{className:"cf-page-head"},w.default.createElement("div",null,w.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),w.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),w.default.createElement("div",{className:"cf-page-actions"},w.default.createElement(P,{icon:"upload",onClick:a},"\u5BFC\u5165\u8D44\u4EA7"),w.default.createElement(P,{icon:"download",onClick:()=>{let M=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),j=document.createElement("a");j.href=URL.createObjectURL(M),j.download="my-assets.json",j.click(),setTimeout(()=>URL.revokeObjectURL(j.href),2e3),l?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),w.default.createElement(P,{variant:"primary",icon:"plus",onClick:()=>N({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),w.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},w.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},w.default.createElement("div",{className:"cf-filter-group"},w.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),w.default.createElement("div",{className:"cf-filter-chips"},Oe.map(M=>w.default.createElement("button",{key:M.id,type:"button",className:`cf-chip cf-chip--tag${S===M.id?" is-on":""}`,onClick:()=>x(M.id)},M.label))))),w.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},w.default.createElement(K,{name:"search",size:15}),w.default.createElement("input",{className:"cf-input",value:i,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:M=>v(M.target.value)}))),I.length===0?w.default.createElement(ce,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:i||S!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:w.default.createElement(P,{variant:"primary",icon:"plus",onClick:()=>N({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):w.default.createElement("div",{className:"cf-asset-grid"},I.map(M=>w.default.createElement("div",{key:M.id,className:"cf-asset"},w.default.createElement("div",{className:"cf-asset-thumb"},M.kind==="image"&&M.cover?w.default.createElement("img",{src:M.cover,alt:M.title}):w.default.createElement(K,{name:M.kind==="image"?"image":M.kind==="video"?"play":"text",size:22})),w.default.createElement("div",{className:"cf-asset-body"},w.default.createElement("span",{className:"cf-asset-title"},M.title||"\u672A\u547D\u540D\u8D44\u4EA7"),w.default.createElement("span",{className:"cf-asset-meta"},M.source||"\u6765\u6E90\u672A\u6CE8\u660E",M.tags?.length?` \xB7 ${M.tags.join(" / ")}`:""),w.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},w.default.createElement(V,{name:"edit",label:"\u7F16\u8F91",onClick:()=>N({...M})}),w.default.createElement(V,{name:"trash",label:"\u5220\u9664",onClick:()=>b(M)}))))))),d?w.default.createElement(Wa,{asset:d,onClose:()=>N(null),onSave:M=>{let j=M.id?e.map(y=>y.id===M.id?M:y):[...e,{...M,id:F("a")}];t(j),N(null),l?.(M.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,E?w.default.createElement(de,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>b(null),footer:w.default.createElement(w.default.Fragment,null,w.default.createElement(P,{onClick:()=>b(null)},"\u53D6\u6D88"),w.default.createElement(P,{variant:"danger",onClick:()=>{s(E.id),b(null),l?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},w.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",E.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function Wa({asset:e,onClose:t,onSave:s}){let[a,l]=w.default.useState({...e,tags:e.tags||[]}),i=(d,N)=>l(E=>({...E,[d]:N})),[v,S]=w.default.useState(""),x=a.title?.trim()&&(a.kind!=="text"||a.text?.trim());return w.default.createElement(de,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:t,footer:w.default.createElement(w.default.Fragment,null,w.default.createElement(P,{onClick:t},"\u53D6\u6D88"),w.default.createElement(P,{variant:"primary",disabled:!x,onClick:()=>s({...a,title:a.title.trim()})},"\u4FDD\u5B58"))},w.default.createElement("div",{className:"cf-field"},w.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),w.default.createElement("div",{className:"cf-chips"},Oe.filter(d=>d.id!=="all").map(d=>w.default.createElement("button",{key:d.id,type:"button",className:`cf-chip${a.kind===d.id?" is-on":""}`,onClick:()=>i("kind",d.id)},d.label)))),w.default.createElement("label",{className:"cf-field"},w.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),w.default.createElement("input",{className:"cf-input",value:a.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:d=>i("title",d.target.value)})),a.kind==="text"?w.default.createElement("label",{className:"cf-field"},w.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),w.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:a.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:d=>i("text",d.target.value)})):w.default.createElement("label",{className:"cf-field"},w.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),w.default.createElement("input",{className:"cf-input",value:a.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:d=>i("cover",d.target.value)})),w.default.createElement("label",{className:"cf-field"},w.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),w.default.createElement("input",{className:"cf-input",value:v,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:d=>S(d.target.value),onKeyDown:d=>{if(d.key!=="Enter")return;d.preventDefault();let N=v.trim();N&&(i("tags",[...new Set([...a.tags||[],N])]),S(""))}}),a.tags?.length?w.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},a.tags.map(d=>w.default.createElement("button",{key:d,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>i("tags",a.tags.filter(N=>N!==d)),title:"\u70B9\u51FB\u79FB\u9664"},d," \xD7"))):null),w.default.createElement("label",{className:"cf-field"},w.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),w.default.createElement("input",{className:"cf-input",value:a.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:d=>i("source",d.target.value)})))}var c=fe(require("react"),1);var Ya=[{id:"channels",label:"\u6E20\u9053"},{id:"proxy",label:"\u672C\u5730\u4EE3\u7406"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"},{id:"webdav",label:"WebDAV"},{id:"storage",label:"\u672C\u5730\u5B58\u50A8"}];function ma({tab:e,onTab:t,channels:s,onChannels:a,defaults:l,onDefaults:i,promptSources:v,onPromptSources:S,say:x}){let[d,N]=c.default.useState(null),[E,b]=c.default.useState(null),[I,D]=c.default.useState({name:"",url:""});return c.default.createElement("div",{className:"cf-page"},c.default.createElement("div",{className:"cf-page-inner"},c.default.createElement("div",{className:"cf-page-head"},c.default.createElement("div",null,c.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),c.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u6A21\u578B\u9009\u62E9\u3001\u540C\u6B65\u4E0E\u672C\u5730\u5B58\u50A8"))),c.default.createElement("div",{className:"cf-config-notice"},c.default.createElement("span",null,"JSON \u6587\u4EF6\u5305\u542B API Key \u548C WebDAV \u51ED\u636E\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),c.default.createElement("span",{className:"cf-config-notice-actions"},c.default.createElement(P,{size:"sm",icon:"upload",onClick:()=>{let y=document.createElement("input");y.type="file",y.accept=".json,application/json",y.onchange=async()=>{let n=y.files?.[0];if(n)try{let u=JSON.parse(await n.text());Array.isArray(u.channels)&&a(u.channels),u.defaults&&i(u.defaults),Array.isArray(u.promptSources)&&S(u.promptSources),x?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{x?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},y.click()}},"\u5BFC\u5165\u914D\u7F6E"),c.default.createElement(P,{size:"sm",icon:"download",onClick:()=>{let y={version:1,channels:s,defaults:l,promptSources:v},n=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),u=document.createElement("a");u.href=URL.createObjectURL(n),u.download="chunfeng-config.json",u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),2e3),x?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),c.default.createElement("div",{className:"cf-tabs",role:"tablist"},Ya.map(y=>c.default.createElement("button",{key:y.id,type:"button",role:"tab","aria-selected":e===y.id,className:`cf-tab${e===y.id?" is-on":""}`,onClick:()=>t(y.id)},y.label))),e==="channels"?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u8C03\u7528\u811A\u672C\u3002"),c.default.createElement(P,{icon:"plus",onClick:()=>N(Ke())},"\u65B0\u589E\u6E20\u9053")),s.length===0?c.default.createElement(ce,{icon:"sliders",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:c.default.createElement(P,{variant:"primary",icon:"plus",onClick:()=>N(Ke())},"\u65B0\u589E\u6E20\u9053")}):c.default.createElement("div",{className:"cf-channel-list"},s.map(y=>c.default.createElement("div",{key:y.id,className:"cf-channel"},c.default.createElement("div",{className:"cf-channel-main"},c.default.createElement("span",{className:"cf-channel-name"},y.name||"\u672A\u547D\u540D\u6E20\u9053"),c.default.createElement("span",{className:"cf-channel-meta"},we.find(n=>n.id===y.protocol)?.label||y.protocol," \xB7 ",y.models.length," \u4E2A\u6A21\u578B"," \xB7 ",y.baseUrl,y.keyHint?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${y.keyHint}`:" \xB7 \u672A\u586B\u5BC6\u94A5")),c.default.createElement("span",{className:"cf-channel-actions"},c.default.createElement(V,{name:"edit",label:"\u7F16\u8F91",onClick:()=>N({...y})}),c.default.createElement(V,{name:"trash",label:"\u5220\u9664",onClick:()=>b(y)})))))):null,e==="defaults"?c.default.createElement(_a,{channels:s,defaults:l,onDefaults:i}):null,e==="sources"?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B\u6765\u6E90\u5206\u9875\u52A0\u8F7D\u3002\u7559\u7A7A\u65F6\u53EA\u663E\u793A\u5185\u7F6E\u63D0\u793A\u8BCD\u3002")),c.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},c.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},c.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:I.name,onChange:y=>D(n=>({...n,name:y.target.value}))}),c.default.createElement("input",{className:"cf-input",placeholder:"\u63D0\u793A\u8BCD\u6765\u6E90\u5730\u5740\uFF08JSON\uFF09",value:I.url,onChange:y=>D(n=>({...n,url:y.target.value}))}),c.default.createElement(P,{variant:"primary",disabled:!I.url.trim(),onClick:()=>{S([...v,{id:F("src"),name:I.name.trim()||"\u672A\u547D\u540D\u6765\u6E90",url:I.url.trim()}]),D({name:"",url:""}),x?.("\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),v.length===0?c.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002"):c.default.createElement("div",{style:{display:"grid",gap:2}},v.map(y=>c.default.createElement("div",{key:y.id,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},c.default.createElement("span",{style:{fontSize:13}},y.name),c.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},y.url),c.default.createElement(V,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>S(v.filter(n=>n.id!==y.id)),style:{marginInlineStart:"auto"}})))))):null,e==="proxy"?c.default.createElement(Ve,{title:"\u672C\u5730\u4EE3\u7406",desc:"\u8BA9\u51FA\u56FE\u8BF7\u6C42\u7ECF\u8FC7\u672C\u673A\u4EE3\u7406\u3002",items:["\u4EE3\u7406\u5730\u5740\uFF08http://127.0.0.1:7890\uFF09","\u4EC5\u5BF9\u6307\u5B9A\u6E20\u9053\u751F\u6548","\u8FDE\u901A\u6027\u6D4B\u8BD5"]}):null,e==="webdav"?c.default.createElement(Ve,{title:"WebDAV",desc:"\u628A\u753B\u5E03\u548C\u8D44\u4EA7\u540C\u6B65\u5230\u81EA\u5DF1\u7684 WebDAV\u3002",items:["\u670D\u52A1\u5668\u5730\u5740","\u8D26\u53F7\u4E0E\u5BC6\u7801","\u540C\u6B65\u8303\u56F4\uFF1A\u753B\u5E03 / \u8D44\u4EA7 / \u63D0\u793A\u8BCD"]}):null,e==="storage"?c.default.createElement(Ve,{title:"\u672C\u5730\u5B58\u50A8",desc:"\u6570\u636E\u76EE\u524D\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\uFF1B\u63A5\u4E0A Host \u540E\u4F1A\u843D\u5230 ~/.dsh/dsh-chunfeng-image/\u3002",items:["\u753B\u5E03\u4E0E\u8282\u70B9","\u751F\u6210\u7684\u56FE\u7247\u6587\u4EF6","\u914D\u7F6E\u6587\u4EF6\uFF08\u542B\u5BC6\u94A5\u51ED\u8BC1\uFF09"]}):null),d?c.default.createElement(Va,{channel:d,onClose:()=>N(null),onSave:y=>{let n=s.some(u=>u.id===y.id);a(n?s.map(u=>u.id===y.id?y:u):[...s,y]),N(null),x?.(n?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,E?c.default.createElement(de,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>b(null),footer:c.default.createElement(c.default.Fragment,null,c.default.createElement(P,{onClick:()=>b(null)},"\u53D6\u6D88"),c.default.createElement(P,{variant:"danger",onClick:()=>{a(s.filter(y=>y.id!==E.id)),b(null),x?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},c.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",E.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",E.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function _a({channels:e,defaults:t,onDefaults:s}){let a=Ce(e,"image"),l=i=>s({...t,image:{...t.image,...i}});return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),c.default.createElement("div",{className:"cf-defaults"},c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),c.default.createElement("select",{className:"cf-input",value:t.image.modelKey||"",onChange:i=>l({modelKey:i.target.value})},c.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),a.map(i=>c.default.createElement("option",{key:i.key,value:i.key},i.label," \xB7 ",i.channel.name||i.channel.protocol))),a.length===0?c.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),c.default.createElement("div",{className:"cf-chips"},he.map(i=>c.default.createElement("button",{key:i.id,type:"button",className:`cf-chip${t.image.ratio===i.id?" is-on":""}`,onClick:()=>l({ratio:i.id})},i.label)))),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),c.default.createElement("div",{className:"cf-chips"},Ee.map(i=>c.default.createElement("button",{key:i,type:"button",className:`cf-chip${t.image.quality===i?" is-on":""}`,onClick:()=>l({quality:i})},i)))),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),c.default.createElement("div",{className:"cf-chips"},$e.map(i=>c.default.createElement("button",{key:i,type:"button",className:`cf-chip${t.image.resolution===i?" is-on":""}`,onClick:()=>l({resolution:i})},i)))),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),c.default.createElement("div",{className:"cf-chips"},[1,2,4].map(i=>c.default.createElement("button",{key:i,type:"button",className:`cf-chip${t.image.count===i?" is-on":""}`,onClick:()=>l({count:i})},i," \u5F20"))))))}function Ve({title:e,desc:t,items:s}){return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"cf-section-head"},c.default.createElement("p",{className:"cf-section-desc"},t)),c.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)"}},c.default.createElement("p",{style:{fontSize:13,fontWeight:500,marginBottom:8}},e),c.default.createElement("ul",{style:{display:"grid",gap:6}},s.map(a=>c.default.createElement("li",{key:a,style:{fontSize:12,color:"var(--cf-muted)",display:"flex",gap:8,alignItems:"center"}},c.default.createElement("span",{style:{width:4,height:4,borderRadius:999,background:"var(--cf-caption)"},"aria-hidden":"true"}),a))),c.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",marginTop:12}},"\u8FD9\u4E00\u7248\u5148\u628A\u4F4D\u7F6E\u7559\u597D\uFF0C\u63A5\u5165 Host \u540E\u518D\u586B\u3002")))}function Va({channel:e,onClose:t,onSave:s}){let[a,l]=c.default.useState({...e}),[i,v]=c.default.useState(""),[S,x]=c.default.useState(""),d=(b,I)=>l(D=>({...D,[b]:I})),N=()=>{let b=S.trim();if(b){if(a.models.some(I=>I.id===b)){x("");return}d("models",[...a.models,{id:b,label:b,caps:Fa(b),enabled:!0,source:"manual"}]),x("")}},E=(b,I)=>{d("models",a.models.map(D=>{if(D.id!==b)return D;let M=D.caps||[];return{...D,caps:M.includes(I)?M.filter(j=>j!==I):[...M,I]}}))};return c.default.createElement(de,{title:e.id&&e.models?"\u7F16\u8F91\u6E20\u9053":"\u65B0\u589E\u6E20\u9053",wide:!0,onClose:t,footer:c.default.createElement(c.default.Fragment,null,c.default.createElement(P,{onClick:t},"\u53D6\u6D88"),c.default.createElement(P,{variant:"primary",disabled:!a.baseUrl.trim(),onClick:()=>{let b=i.trim()?i.trim().slice(-4):a.keyHint;s({...a,keyHint:b||"",hasKey:!!i.trim()||a.hasKey})}},"\u4FDD\u5B58"))},c.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),c.default.createElement("input",{className:"cf-input",value:a.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:b=>d("name",b.target.value)})),c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),c.default.createElement("select",{className:"cf-input",value:a.protocol,onChange:b=>{let I=we.find(D=>D.id===b.target.value);d("protocol",b.target.value),I&&d("baseUrl",I.baseUrl)}},we.map(b=>c.default.createElement("option",{key:b.id,value:b.id},b.label))))),c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),c.default.createElement("input",{className:"cf-input",value:a.baseUrl,placeholder:"https://api.example.com/v1",onChange:b=>d("baseUrl",b.target.value)})),c.default.createElement("label",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"API Key",a.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${a.keyHint}\uFF09`:""),c.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:i,placeholder:a.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:b=>v(b.target.value)}),c.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),c.default.createElement("div",{className:"cf-field"},c.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),c.default.createElement("div",{style:{display:"flex",gap:6}},c.default.createElement("input",{className:"cf-input",value:S,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:b=>x(b.target.value),onKeyDown:b=>{b.key==="Enter"&&(b.preventDefault(),N())}}),c.default.createElement(P,{onClick:N,disabled:!S.trim()},"\u6DFB\u52A0")),a.models.length===0?c.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u4FDD\u5B58\u6E20\u9053\u540E\u53EF\u4EE5\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u5728\u8FD9\u91CC\u624B\u52A8\u6DFB\u52A0\u3002"):c.default.createElement("div",{style:{display:"grid",gap:6,marginTop:4}},a.models.map(b=>c.default.createElement("div",{key:b.id,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",padding:"8px 10px",borderRadius:"var(--cf-r-sm)",boxShadow:"inset 0 0 0 var(--cf-hair) var(--cf-line)"}},c.default.createElement("span",{style:{fontSize:12,minWidth:120}},b.label||b.id),c.default.createElement("span",{style:{display:"flex",gap:4,marginInlineStart:"auto"}},He.map(I=>c.default.createElement("button",{key:I.id,type:"button",className:`cf-chip cf-chip--tag${(b.caps||[]).includes(I.id)?" is-on":""}`,onClick:()=>E(b.id,I.id)},I.label))),c.default.createElement(V,{name:"trash",label:`\u79FB\u9664 ${b.id}`,onClick:()=>d("models",a.models.filter(I=>I.id!==b.id))}))))),c.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u81EA\u52A8\u62C9\u53D6\u6A21\u578B\u4E0E\u300C\u5B9E\u6D4B\u51FA\u56FE\u300D\u4F1A\u5728\u63A5\u4E0A Host \u540E\u53EF\u7528\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u624B\u52A8\u6DFB\u52A0\u5E76\u52FE\u9009\u80FD\u529B\u3002"))}function Fa(e){let t=e.toLowerCase();return/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(t)?["image"]:/veo|kling|sora|runway|video/.test(t)?["video"]:/tts|audio|speech|whisper|music/.test(t)?["audio"]:["text"]}var va="dsh-chunfeng-image:state:v2";function Xa(){try{let e=localStorage.getItem(va);if(!e)return null;let t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch{return null}}function ga(){let[e,t]=L.default.useState(()=>{let n=Xa();if(n)return sa(n);let u=Ue();return u.canvases=[{...De("\u9713\u8679\u8857\u89D2"),...Re()}],u.openCanvasId=null,u}),[s,a]=L.default.useState(""),[l,i]=L.default.useState(null),[v,S]=L.default.useState(null),x=L.default.useRef(0);L.default.useEffect(()=>{try{localStorage.setItem(va,JSON.stringify(e))}catch{}},[e]);let d=L.default.useCallback((n,u)=>{S({text:n,kind:u,at:Date.now()}),clearTimeout(x.current),x.current=setTimeout(()=>S(null),2200)},[]);L.default.useEffect(()=>()=>clearTimeout(x.current),[]);let N=n=>t(u=>({...u,...n})),E=e.canvases.find(n=>n.id===e.openCanvasId)||null,b=na(e),I=n=>{i(null),t(u=>ta(u,n))},D=(n,u)=>t(H=>({...H,canvases:H.canvases.map(O=>{if(O.id!==n)return O;let W=typeof u=="function"?u(O):u;return{...O,...W,updatedAt:Date.now()}})})),M=()=>{let n=De();t(u=>({...u,canvases:[n,...u.canvases],openCanvasId:n.id,view:"canvas"})),d("\u5DF2\u65B0\u5EFA\u753B\u5E03")},j=()=>{let n=document.createElement("input");n.type="file",n.accept=".json,application/json",n.onchange=async()=>{let u=n.files?.[0];if(u)try{let H=JSON.parse(await u.text()),O={...De(H.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(H.nodes)?H.nodes:[],edges:Array.isArray(H.edges)?H.edges:[],grid:H.grid||"dots"};t(W=>({...W,canvases:[O,...W.canvases],openCanvasId:O.id,view:"canvas"})),d("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{d("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},n.click()},y=n=>{if(E){let u={id:F("i"),type:"image",x:220+E.nodes.length*26,y:220+E.nodes.length*20,w:240,h:268,name:"",status:"idle",z:2,prompt:n.text,ratio:e.defaults.image.ratio||"1:1",locked:!0};D(E.id,{nodes:[...E.nodes,u]}),d(`\u5DF2\u7528\u300C${n.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}a(n.text),N({view:"studio",openCanvasId:null}),d(`\u5DF2\u586B\u5165\u300C${n.title}\u300D`)};return L.default.createElement("div",{className:"cf-app"},L.default.createElement("style",null,Ge),L.default.createElement("div",{className:"cf-ambient","aria-hidden":"true"},L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null)),L.default.createElement("header",{className:"cf-nav"},L.default.createElement("span",{className:"cf-brand"},L.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round","aria-hidden":"true"},L.default.createElement("path",{d:"M12 3.5L21 19H3z"}),L.default.createElement("path",{d:"M12 9.5v5.5",strokeLinecap:"round"})),"\u6625\u98CE\u753B\u5E03"),L.default.createElement("nav",{className:"cf-nav-list","aria-label":"\u4E3B\u5BFC\u822A"},je.map(n=>{let u=n.id==="canvas"?b==="canvas"||b==="editor":b===n.id;return L.default.createElement("button",{key:n.id,type:"button",className:`cf-nav-item${u?" is-on":""}`,onClick:()=>I(n.id),"aria-current":u?"page":void 0},L.default.createElement(K,{name:n.icon,size:15}),n.label)})),L.default.createElement("div",{className:"cf-nav-right"},E?L.default.createElement(L.default.Fragment,null,L.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},E.name),L.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}].map(n=>L.default.createElement("button",{key:n.id,type:"button",className:(E.grid||"dots")===n.id?"is-on":"",onClick:()=>D(E.id,{grid:n.id})},n.label)))):null,L.default.createElement("span",{className:"cf-nav-version"},"v0.1.0"),L.default.createElement(V,{name:"keyboard",label:"\u5FEB\u6377\u952E",onClick:()=>d("V \u9009\u62E9 \xB7 H \u79FB\u52A8 \xB7 T/I/A/C/G \u65B0\u5EFA\u8282\u70B9 \xB7 \u2318D \u590D\u5236 \xB7 \u2318G \u5305\u7EC4 \xB7 \u232B \u5220\u9664")}))),L.default.createElement(xe,{key:b},b==="editor"&&E?L.default.createElement(fa,{canvas:E,channels:e.channels,defaults:e.defaults.image,onChange:n=>D(E.id,n),onBack:()=>t(n=>ra(n)),say:d}):null,b==="canvas"?L.default.createElement(ca,{canvases:e.canvases,onOpen:n=>t(u=>ia(u,n)),onCreate:M,onRename:(n,u)=>D(n,{name:u}),onDelete:n=>t(u=>({...u,canvases:u.canvases.filter(H=>H.id!==n),openCanvasId:null})),onImport:j}):null,b==="studio"?L.default.createElement(da,{channels:e.channels,defaults:e.defaults.image,records:e.records,prompt:s,onPrompt:a,onCreateRecord:n=>t(u=>({...u,records:[n,...u.records]})),onDeleteRecords:n=>t(u=>({...u,records:u.records.filter(H=>!n.includes(H.id))})),onLookupPrompts:()=>{i("studio"),N({view:"prompts",openCanvasId:null})},say:d}):null,b==="prompts"?L.default.createElement(pa,{prompts:e.prompts,sources:e.promptSources,returnTo:l,onUse:y,onBack:l?()=>{i(null),N({view:l})}:null}):null,b==="assets"?L.default.createElement(ua,{assets:e.assets,onSave:n=>N({assets:n}),onDelete:n=>t(u=>({...u,assets:u.assets.filter(H=>H.id!==n)})),onImport:()=>d("\u8D44\u4EA7\u5305\u5BFC\u5165\u63A5 Host \u540E\u53EF\u7528"),say:d}):null,b==="config"?L.default.createElement(ma,{tab:e.configTab,onTab:n=>N({configTab:n}),channels:e.channels,onChannels:n=>N({channels:n}),defaults:e.defaults,onDefaults:n=>N({defaults:n}),promptSources:e.promptSources,onPromptSources:n=>N({promptSources:n}),say:d}):null),v?L.default.createElement(Je,{text:v.text,kind:v.kind}):null)}var ha="dsh-chunfeng-image",qa=["slots"];function Ga(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:ha},Qa)),e.effect(()=>{let t=null;return(()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:ha,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},Ja))})(),()=>t?.()},"dsh-chunfeng-image: sidebar entry")}function Ja(){return Be.default.createElement(K,{name:"canvas",size:16})}function Qa(){return Be.default.createElement(xe,null,Be.default.createElement(ga,null))}
return module.exports}})
