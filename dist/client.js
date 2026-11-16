window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var fa=Object.create;var we=Object.defineProperty;var da=Object.getOwnPropertyDescriptor;var pa=Object.getOwnPropertyNames;var ua=Object.getPrototypeOf,ma=Object.prototype.hasOwnProperty;var va=(e,t)=>{for(var o in t)we(e,o,{get:t[o],enumerable:!0})},Ae=(e,t,o,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of pa(t))!ma.call(e,c)&&c!==o&&we(e,c,{get:()=>t[c],enumerable:!(i=da(t,c))||i.enumerable});return e};var se=(e,t,o)=>(o=e!=null?fa(ua(e)):{},Ae(t||!e||!e.__esModule?we(o,"default",{value:e,enumerable:!0}):o,e)),ga=e=>Ae(we({},"__esModule",{value:!0}),e);var ja={};va(ja,{apply:()=>Ha,inject:()=>Oa});module.exports=ga(ja);var la=se(require("react"),1);var T=se(require("react"),1);var Oe=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
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
  --cf-send: var(--dsw-alias-button-info-fill, light-dark(#3964fe, #679efe));
  --cf-send-hover: var(--dsw-alias-button-info-hover, light-dark(#2f57e8, #7fb0ff));
  --cf-send-fg: var(--dsw-alias-label-on-color, #fff);

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
`;var He=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
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
  bottom: var(--cf-sp-5);
  transform: translateX(-50%);
  width: min(760px, calc(100% - var(--cf-sp-7)));
  display: grid;
  gap: var(--cf-sp-2);
  gap: 12px;
  padding: 8px 8px 6px;
  border-radius: var(--cf-r-panel);
  background: var(--cf-input-surface);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 16px 40px -20px oklch(0% 0 0 / 0.6);
}
.cf-composer:focus-within { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.6); }

.cf-composer-input {
  width: 100%;
  min-height: 56px;
  max-height: 160px;
  resize: none;
  border: 0;
  background: transparent;
  color: var(--cf-fg);
  font-size: var(--cf-fs-14);
  line-height: 1.6;
  padding: 10px var(--cf-sp-3);
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
  min-height: 34px;
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
  height: 32px;
  padding-inline: 10px;
  border-radius: var(--cf-r-sm);
  font-size: var(--cf-fs-13);
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
  flex: none;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: var(--cf-r-pill);
  background: var(--cf-send);
  color: var(--cf-send-fg);
  transition: background-color 100ms ease, opacity 100ms ease;
}
.cf-send:hover:not(:disabled) { background: var(--cf-send-hover); }
.cf-send:disabled { opacity: 0.4; cursor: default; }

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
  left: var(--cf-sp-4);
  bottom: var(--cf-sp-4);
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
  .cf-zoom { left: var(--cf-sp-2); bottom: 132px; }
  .cf-minimap { display: none; }
  .cf-page-actions { margin-inline-start: 0; flex-wrap: wrap; }
  .cf-page-head { flex-wrap: wrap; }
}
`;var Ke=`${Oe}
${He}`;var s=se(require("react"),1),xa={canvas:s.default.createElement(s.default.Fragment,null,s.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),s.default.createElement("path",{d:"M3 10h18M9 10v10"})),image:s.default.createElement(s.default.Fragment,null,s.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),s.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),s.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),s.default.createElement("path",{d:"M5 17h14"})),folder:s.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:s.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),cursor:s.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:s.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:s.default.createElement(s.default.Fragment,null,s.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),s.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),s.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:s.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:s.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:s.default.createElement(s.default.Fragment,null,s.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),s.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),s.default.createElement("path",{d:"M11 11l2 2"})),search:s.default.createElement(s.default.Fragment,null,s.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),s.default.createElement("path",{d:"M16 16l4 4"})),plus:s.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:s.default.createElement("path",{d:"M5 12h14"}),trash:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),s.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),s.default.createElement("path",{d:"M14 6l4 4"})),close:s.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:s.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M12 16V4"}),s.default.createElement("path",{d:"M7 9l5-5 5 5"}),s.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M12 4v12"}),s.default.createElement("path",{d:"M7 11l5 5 5-5"}),s.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:s.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),s.default.createElement("path",{d:"M20 4v4h-4"})),more:s.default.createElement(s.default.Fragment,null,s.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),s.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),s.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M9 8H4v5"}),s.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M15 8h5v5"}),s.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),map:s.default.createElement(s.default.Fragment,null,s.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),s.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:s.default.createElement(s.default.Fragment,null,s.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),s.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M9 15l6-6"}),s.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),s.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),s.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),play:s.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:s.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M10 6l-5 6 5 6"}),s.default.createElement("path",{d:"M5 12h14"})),arrowUp:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M12 19V5"}),s.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:s.default.createElement(s.default.Fragment,null,s.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"}))};function j({name:e,size:t=16,...o}){let i=xa[e];return i?s.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...o},i):null}function X({name:e,label:t,size:o=16,...i}){return s.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":t,title:t,...i},s.default.createElement(j,{name:e,size:o}))}function B({variant:e="ghost",size:t,icon:o,children:i,...c}){return s.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${t==="sm"?" cf-btn--sm":""}`,...c},o?s.default.createElement(j,{name:o,size:14}):null,i)}function oe({title:e,children:t,footer:o,onClose:i,wide:c}){return s.default.useEffect(()=>{let l=g=>{g.key==="Escape"&&i()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),s.default.createElement("div",{className:"cf-scrim",onPointerDown:l=>{l.target===l.currentTarget&&i()}},s.default.createElement("div",{className:`cf-dialog${c?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},s.default.createElement("header",{className:"cf-dialog-head"},s.default.createElement("h2",{className:"cf-dialog-title"},e),s.default.createElement(X,{name:"close",label:"\u5173\u95ED",onClick:i})),s.default.createElement("div",{className:"cf-dialog-body"},t,o?s.default.createElement("div",{className:"cf-dialog-foot"},o):null)))}function je({text:e,kind:t}){return s.default.createElement("p",{className:`cf-toast${t==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function te({icon:e="canvas",title:t,hint:o,action:i}){return s.default.createElement("div",{className:"cf-empty"},s.default.createElement("span",{className:"cf-empty-icon"},s.default.createElement(j,{name:e,size:28})),s.default.createElement("p",{className:"cf-empty-title"},t),o?s.default.createElement("p",{className:"cf-empty-hint"},o):null,i)}var We=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],be={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"};var ce=[{id:"1:1",label:"1:1",w:1024,h:1024},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1280,h:720},{id:"9:16",label:"9:16",w:720,h:1280}],ke=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],Ne=["1k","2k","4k","\u81EA\u52A8"],Ye=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],ue=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],Ee=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],Ue=0;function F(e="x"){return Ue+=1,`${e}_${Date.now().toString(36)}${Ue.toString(36)}`}function Ce(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:F("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}function ya(e){switch(e){case"image":return{w:240,h:268};case"audio":return{w:240,h:140};case"text":return{w:230,h:160};case"config":return{w:240,h:176};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function xe(e,t,o={}){let i=ya(e),c={id:F(e[0]),type:e,x:Math.round(t.x-i.w/2),y:Math.round(t.y-i.h/2),w:i.w,h:i.h,name:"",status:"idle",z:e==="group"?1:2,...o};return e==="text"&&(c.text=o.text??""),e==="config"&&(c.modelKey=o.modelKey??"",c.ratio=o.ratio??"1:1",c.count=o.count??1),e==="image"&&(c.prompt=o.prompt??"",c.ratio=o.ratio??"1:1",c.locked=o.locked??!0),e==="audio"&&(c.prompt=o.prompt??""),c}function De(e="openai"){let t=ue.find(o=>o.id===e)||ue[0];return{id:F("ch"),name:"",protocol:t.id,baseUrl:t.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function wa(e,t){return`${e}:${t}`}function me(e,t){if(!t)return null;let[o,...i]=t.split(":"),c=e.find(g=>g.id===o);if(!c)return null;let l=c.models.find(g=>g.id===i.join(":"));return l?{channel:c,model:l,label:l.label||l.id}:null}function ve(e,t="image"){let o=[];for(let i of e)if(i.enabled)for(let c of i.models)c.enabled&&(c.caps||[]).includes(t)&&o.push({key:wa(i.id,c.id),model:c,channel:i});return o}var ka=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],Na=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function Ve(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:ka.map(e=>({...e})),promptSources:[],assets:Na.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8"},canvasCount:1},records:[],configTab:"channels",grid:"dots"}}function $e(){let e=(k,d,w,E,y,I)=>{let $=xe(k,{x:d+E/2,y:w+y/2},{...I,w:E,h:y});return $.x=d,$.y=w,$},t=e("group",660,120,640,700,{name:"\u9713\u8679\u8857\u89D2"}),o=e("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),i=e("config",400,300,240,176,{ratio:"3:4",count:1}),c=e("image",700,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),l=e("image",980,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),g=e("image",700,510,240,268,{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),M=[{id:F("e"),from:o.id,to:i.id},{id:F("e"),from:i.id,to:c.id},{id:F("e"),from:i.id,to:l.id},{id:F("e"),from:i.id,to:g.id}];return{nodes:[t,o,i,c,l,g],edges:M}}function _e(e,t,o,i){if(o===i)return!1;let c=e.find(g=>g.id===o),l=e.find(g=>g.id===i);return!(!c||!l||c.type==="config"&&l.type==="config"||c.type==="group"||l.type==="group"||t.some(g=>g.from===o&&g.to===i))}function Xe(e,t){let o=e.filter(k=>t.includes(k.id)&&k.type!=="group");if(!o.length)return null;let i=44,c=Math.min(...o.map(k=>k.x))-i,l=Math.min(...o.map(k=>k.y))-i-34,g=Math.max(...o.map(k=>k.x+k.w))+i,M=Math.max(...o.map(k=>k.y+k.h))+i;return xe("group",{x:(c+g)/2,y:(l+M)/2},{w:Math.round(g-c),h:Math.round(M-l),name:"\u65B0\u5206\u7EC4",childIds:o.map(k=>k.id),x:Math.round(c),y:Math.round(l)})}function Fe(e){return e.openCanvasId?"editor":e.view}function qe(e,t){return{...e,view:t,openCanvasId:null}}function Ge(e,t){return{...e,openCanvasId:t}}function Je(e){return{...e,openCanvasId:null,view:"canvas"}}var f=se(require("react"),1);var v=se(require("react"),1);var Me=.1,Te=3,Ca=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Qe(){let e=v.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),t=v.default.useCallback(c=>{if(!c)return;let l=e.current;c.style.transform=`translate3d(${l.x}px, ${l.y}px, 0) scale(${l.s})`},[]),o=v.default.useCallback((c,l)=>{let g=e.current;g.raf=0;let M=.24,k=g.tx-g.x,d=g.ty-g.y,w=g.ts-g.s;if(Math.abs(k)<.2&&Math.abs(d)<.2&&Math.abs(w)<8e-4){g.x=g.tx,g.y=g.ty,g.s=g.ts,t(c),l?.();return}g.x+=k*M,g.y+=d*M,g.s+=w*M,t(c),l?.(),g.raf=requestAnimationFrame(()=>o(c,l))},[t]),i=v.default.useCallback((c,l,g,M,k)=>{let d=e.current;if(d.tx=l,d.ty=g,d.ts=Math.min(Te,Math.max(Me,M)),Ca()){d.x=d.tx,d.y=d.ty,d.s=d.ts,d.raf&&cancelAnimationFrame(d.raf),d.raf=0,t(c),k?.();return}d.raf||(d.raf=requestAnimationFrame(()=>o(c,k)))},[t,o]);return v.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:t,moveTo:i}}function Be(e,t){if(!e||!t)return"";let o=e.x+e.w,i=e.y+e.h/2,c=t.x,l=t.y+t.h/2,g=Math.max(40,Math.abs(c-o)*.45);return`M ${o} ${i} C ${o+g} ${i}, ${c-g} ${l}, ${c} ${l}`}function Ma({node:e}){let t=v.default.useRef(null);return v.default.useEffect(()=>{let o=t.current;if(!o)return;let i=o.getContext("2d"),c=480;o.width=c,o.height=c;let l=`${e.id}${e.prompt||""}`,g=7;for(let d=0;d<l.length;d++)g=(g*31+l.charCodeAt(d))%2147483647;let M=()=>(g=g*16807%2147483647)/2147483647;i.fillStyle="#141414",i.fillRect(0,0,c,c);let k=i.createRadialGradient(c*(.25+M()*.5),c*(.3+M()*.4),24,c/2,c/2,c*.8);k.addColorStop(0,"rgba(255,255,255,0.16)"),k.addColorStop(.5,"rgba(255,255,255,0.05)"),k.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=k,i.fillRect(0,0,c,c),i.strokeStyle="rgba(255,255,255,0.22)",i.lineWidth=1.5;for(let d=0;d<6;d++){let w=c*(.18+M()*.66);i.beginPath(),i.moveTo(0,w),i.lineTo(c,w+(M()-.5)*80),i.stroke()}i.strokeStyle="rgba(255,255,255,0.4)";for(let d=0;d<3;d++){let w=c*(.2+M()*.6),E=40+M()*90;i.beginPath(),M()<.5?i.arc(w,c*(.3+M()*.4),E,0,Math.PI*2):i.rect(w-E/2,c*(.3+M()*.4)-E/2,E,E),i.stroke()}},[e.id,e.prompt]),v.default.createElement("canvas",{ref:t,"aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function za({node:e,channels:t}){switch(e.type){case"image":return v.default.createElement("div",{className:"cf-node-media"},e.src?v.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):null,!e.src&&e.status==="running"?v.default.createElement("div",{className:"cf-node-void"},v.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):null,!e.src&&e.status!=="running"?v.default.createElement(Ma,{node:e}):null,!e.src&&e.status==="failed"?v.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25"):null);case"audio":return v.default.createElement("div",{className:"cf-node-audio"},v.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(o,i)=>v.default.createElement("span",{key:i,style:{height:`${16+i*41%66}%`}}))),v.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return v.default.createElement("div",{className:"cf-node-text"},e.text?v.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):v.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":{let o=me(t,e.modelKey);return v.default.createElement("div",{className:"cf-node-config"},v.default.createElement("p",{className:"cf-node-config-row"},v.default.createElement("span",null,"\u6A21\u578B"),v.default.createElement("b",null,o?o.label:"\u672A\u9009\u62E9")),v.default.createElement("p",{className:"cf-node-config-row"},v.default.createElement("span",null,"\u6BD4\u4F8B"),v.default.createElement("b",null,e.ratio)),v.default.createElement("p",{className:"cf-node-config-row"},v.default.createElement("span",null,"\u5F20\u6570"),v.default.createElement("b",null,e.count)))}case"group":return null;default:return null}}function Ze({nodes:e,edges:t,selection:o,channels:i,grid:c,minimap:l,onSelection:g,onMove:M,onResize:k,onConnect:d,onRemoveEdge:w,onOpenNode:E,camera:y,camApi:I,showHint:$}){let C=v.default.useRef(null),P=v.default.useRef(null),{cam:h,moveTo:n}=I,[b,O]=v.default.useState({w:1200,h:700}),[K,W]=v.default.useState(Math.round(h.current.s*100)),J=v.default.useRef(null),G=v.default.useRef(null),ae=v.default.useRef(null),R=v.default.useRef(null),Q=v.default.useRef(null),[ne,V]=v.default.useState(null),[_,ie]=v.default.useState(null),[U,ee]=v.default.useState(!1),ge=v.default.useCallback(()=>I.apply(C.current),[I]);v.default.useEffect(()=>{let p=P.current;if(!p)return;let x=new ResizeObserver(()=>{let m=p.getBoundingClientRect();O({w:m.width,h:m.height})});x.observe(p);let a=p.getBoundingClientRect();return O({w:a.width,h:a.height}),()=>x.disconnect()},[]),v.default.useEffect(()=>{ge(),W(Math.round(h.current.s*100))}),v.default.useEffect(()=>{let p=a=>{a.code==="Space"&&!/input|textarea/i.test(a.target.tagName)&&(ee(!0),a.preventDefault())},x=a=>{a.code==="Space"&&ee(!1)};return window.addEventListener("keydown",p),window.addEventListener("keyup",x),()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",x)}},[]),v.default.useEffect(()=>{if(!y)return;let p=C.current;p&&n(p,y.x,y.y,y.s,()=>W(Math.round(h.current.s*100)))},[y]);let fe=()=>P.current.getBoundingClientRect(),q=(p,x)=>{let a=fe();return{x:(p-a.left-h.current.x)/h.current.s,y:(x-a.top-h.current.y)/h.current.s}},z=v.default.useCallback(()=>{let p=C.current;if(!p||!e.length)return;let x=72,a=Math.min(...e.map(H=>H.x))-x,m=Math.min(...e.map(H=>H.y))-x,S=Math.max(...e.map(H=>H.x+H.w))+x,A=Math.max(...e.map(H=>H.y+H.h))+x,L=Math.min(1.35,Math.max(Me,Math.min(b.w/(S-a),b.h/(A-m))));n(p,x-a*L,x-m*L,L,()=>W(Math.round(h.current.s*100)))},[e,b,n,h]);v.default.useEffect(()=>{let p=setTimeout(z,80);return()=>clearTimeout(p)},[]);let Y=p=>{let x=C.current;if(!x)return;let a=b.w/2,m=b.h/2,S=h.current,A=(a-S.tx)/S.ts,L=(m-S.ty)/S.ts,H=Math.min(Te,Math.max(Me,S.ts*p));n(x,a-A*H,m-L*H,H,()=>W(Math.round(h.current.s*100)))},Z=p=>{p.preventDefault();let x=fe(),a=p.clientX-x.left,m=p.clientY-x.top,S=h.current,A=(a-S.tx)/S.ts,L=(m-S.ty)/S.ts,H=Math.min(Te,Math.max(Me,S.ts*Math.exp(-p.deltaY*.0018)));n(C.current,a-A*H,m-L*H,H,()=>W(Math.round(h.current.s*100)))},re=p=>{if(p.button===1||U){p.preventDefault(),J.current={x:p.clientX,y:p.clientY,cx:h.current.tx,cy:h.current.ty},P.current.classList.add("is-grabbing"),P.current.setPointerCapture(p.pointerId);return}if(p.button!==0)return;let x=q(p.clientX,p.clientY);R.current={x0:x.x,y0:x.y,additive:p.shiftKey},ie({x:x.x,y:x.y,w:0,h:0}),P.current.setPointerCapture(p.pointerId)},de=p=>{if(J.current){let x=h.current;n(C.current,J.current.cx+(p.clientX-J.current.x),J.current.cy+(p.clientY-J.current.y),x.ts,()=>W(Math.round(h.current.s*100)));return}if(G.current){let x=q(p.clientX,p.clientY);M(G.current.ids,x.x-G.current.p0.x,x.y-G.current.p0.y),G.current.p0=x;return}if(ae.current){let x=q(p.clientX,p.clientY),a=ae.current,m=Math.max(140,Math.round(x.x-a.x)),S=a.locked?Math.round(m/a.ratio):Math.max(80,Math.round(x.y-a.y));k(a.id,m,S);return}if(R.current){let x=q(p.clientX,p.clientY),a=R.current;ie({x:Math.min(a.x0,x.x),y:Math.min(a.y0,x.y),w:Math.abs(x.x-a.x0),h:Math.abs(x.y-a.y0)});return}Q.current&&V({from:Q.current,to:q(p.clientX,p.clientY)})},ye=p=>{if(J.current){J.current=null,P.current.classList.remove("is-grabbing");return}if(G.current){G.current=null;return}if(ae.current){ae.current=null;return}if(R.current){let x=R.current;R.current=null;let a=_;if(ie(null),a&&(a.w>6||a.h>6)){let m=e.filter(S=>!(S.x>a.x+a.w||S.x+S.w<a.x||S.y>a.y+a.h||S.y+S.h<a.y));g(x.additive?[...new Set([...o,...m.map(S=>S.id)])]:m.map(S=>S.id))}else x.additive||g([]);return}if(Q.current){let x=q(p.clientX,p.clientY),a=e.find(m=>x.x>=m.x&&x.x<=m.x+m.w&&x.y>=m.y&&x.y<=m.y+m.h);a&&_e(e,t,Q.current,a.id)&&d(Q.current,a.id),Q.current=null,V(null)}},ze=(p,x)=>{if(p.stopPropagation(),U||p.button===1)return;let a=p.shiftKey||p.metaKey||p.ctrlKey,m=o.includes(x.id),S;if(a?S=m?o.filter(H=>H!==x.id):[...o,x.id]:S=m?o:[x.id],g(S),a)return;let A=q(p.clientX,p.clientY),L=x.type==="group"&&x.childIds?.length?[x.id,...x.childIds]:S.length>1?S:[x.id];G.current={ids:L,p0:A},P.current.setPointerCapture(p.pointerId)},Se=(p,x)=>{let[a,m]=(x.ratio||"1:1").split(":").map(Number);ae.current={id:x.id,x:x.x,y:x.y,locked:x.locked!==!1,ratio:m/a},P.current.setPointerCapture(p.pointerId)},le=(p,x)=>{p.stopPropagation(),Q.current=x.id,V({from:x.id,to:q(p.clientX,p.clientY)}),P.current.setPointerCapture(p.pointerId)},pe=v.default.useMemo(()=>Object.fromEntries(e.map(p=>[p.id,p])),[e]);return v.default.createElement("div",{className:"cf-board"},v.default.createElement("div",{className:`cf-stage ${c==="lines"?"cf-stage--lines":c==="blank"?"cf-stage--blank":"cf-stage--dots"}${U?" is-grab":""}`,ref:P,onPointerDown:re,onPointerMove:de,onPointerUp:ye,onPointerCancel:ye,onWheel:Z,style:{"--cf-grid":`${28*K/100}px`}},v.default.createElement("div",{className:"cf-world",ref:C},v.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},v.default.createElement("defs",null,v.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},v.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),t.map(p=>{let x=pe[p.from],a=pe[p.to];return!x||!a?null:v.default.createElement("g",{key:p.id,className:"cf-edge"},v.default.createElement("path",{d:Be(x,a),className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),v.default.createElement("path",{d:Be(x,a),className:"cf-edge-hit",onPointerDown:m=>{m.stopPropagation(),w(p.id)}},v.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),ne?(()=>{let p=pe[ne.from];return p?v.default.createElement("path",{d:Be(p,{x:ne.to.x,y:ne.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),e.map(p=>v.default.createElement("div",{key:p.id,className:`cf-node${o.includes(p.id)?" is-selected":""}${p.status==="running"?" is-running":""}${p.type==="group"?" is-group":""}`,"data-id":p.id,style:{left:p.x,top:p.y,width:p.w,height:p.h,zIndex:p.type==="group"?3:2},onPointerDown:x=>ze(x,p)},p.type==="group"?v.default.createElement("div",{className:"cf-node-group-head"},v.default.createElement("span",null,p.name||"\u5206\u7EC4"),p.childIds?.length?v.default.createElement("span",{className:"cf-node-group-count"},p.childIds.length," \u4E2A\u8282\u70B9"):null):v.default.createElement(v.default.Fragment,null,v.default.createElement("div",{className:"cf-node-head"},v.default.createElement("span",{className:"cf-node-type"},be[p.type]),v.default.createElement("span",{className:"cf-node-name"},p.name||""),v.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:x=>le(x,p),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),v.default.createElement("div",{className:"cf-node-body",onDoubleClick:x=>{x.stopPropagation(),E(p)}},v.default.createElement(za,{node:p,channels:i}))),o.includes(p.id)&&p.type!=="group"?v.default.createElement("span",{className:"cf-node-handle",onPointerDown:x=>{x.stopPropagation(),Se(x,p)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)),_&&_.w>4?v.default.createElement("div",{className:"cf-marquee",style:{left:_.x,top:_.y,width:_.w,height:_.h}}):null)),l?v.default.createElement(Sa,{nodes:e,cam:h.current,size:b,onJump:p=>n(C.current,b.w/2-p.x*h.current.s,b.h/2-p.y*h.current.s,h.current.s,()=>W(Math.round(h.current.s*100)))}):null,v.default.createElement("div",{className:"cf-zoom"},v.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>Y(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),v.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:K,"aria-label":"\u7F29\u653E",onChange:p=>{let x=C.current;if(!x)return;let a=Number(p.target.value)/100,m=h.current,S=b.w/2,A=b.h/2;n(x,S-(S-m.tx)/m.s*a,A-(A-m.ty)/m.s*a,a,()=>W(Math.round(h.current.s*100)))}}),v.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>Y(1.25),"aria-label":"\u653E\u5927"},"+"),v.default.createElement("span",{className:"cf-zoom-num"},K,"%"),v.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:z},"\u9002\u5E94")),$?v.default.createElement("p",{className:"cf-editor-hint"},"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5"):null)}function Sa({nodes:e,cam:t,size:o,onJump:i}){if(!e.length)return null;let c=168,l=108,g=80,M=Math.min(...e.map(n=>n.x))-g,k=Math.min(...e.map(n=>n.y))-g,d=Math.max(...e.map(n=>n.x+n.w))+g,w=Math.max(...e.map(n=>n.y+n.h))+g,E=Math.max(1,d-M),y=Math.max(1,w-k),I=Math.min(c/E,l/y),$=(c-E*I)/2,C=(l-y*I)/2,P=n=>({x:(n.x-M)*I+$,y:(n.y-k)*I+C,w:n.w*I,h:n.h*I}),h={x:(-t.x/t.s-M)*I+$,y:(-t.y/t.s-k)*I+C,w:o.w/t.s*I,h:o.h/t.s*I};return v.default.createElement("svg",{className:"cf-minimap",viewBox:`0 0 ${c} ${l}`,width:c,height:l,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:n=>{let b=n.currentTarget.getBoundingClientRect(),O=(n.clientX-b.left)/b.width*c,K=(n.clientY-b.top)/b.height*l;i({x:M+(O-$)/I,y:k+(K-C)/I})}},e.filter(n=>n.type==="group").map(n=>{let b=P(n);return v.default.createElement("rect",{key:n.id,x:b.x,y:b.y,width:b.w,height:b.h,rx:3,className:"cf-mini-group"})}),e.filter(n=>n.type!=="group").map(n=>{let b=P(n);return v.default.createElement("rect",{key:n.id,x:b.x,y:b.y,width:Math.max(3,b.w),height:Math.max(3,b.h),rx:2,className:`cf-mini-node${n.type==="image"?" cf-mini-image":""}`})}),v.default.createElement("rect",{x:h.x,y:h.y,width:Math.max(6,h.w),height:Math.max(6,h.h),rx:2,className:"cf-mini-view"}))}function Re({canvases:e,onOpen:t,onCreate:o,onRename:i,onDelete:c,onImport:l}){let[g,M]=f.default.useState(null),[k,d]=f.default.useState(null);return f.default.createElement("div",{className:"cf-page"},f.default.createElement("div",{className:"cf-page-inner"},f.default.createElement("div",{className:"cf-page-head"},f.default.createElement("div",null,f.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),f.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),f.default.createElement("div",{className:"cf-page-actions"},f.default.createElement(B,{icon:"upload",onClick:l},"\u5BFC\u5165\u753B\u5E03"),f.default.createElement(B,{variant:"primary",icon:"plus",onClick:o},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?f.default.createElement(te,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:f.default.createElement(B,{variant:"primary",icon:"plus",onClick:o},"\u65B0\u5EFA\u753B\u5E03")}):f.default.createElement("div",{className:"cf-card"},f.default.createElement("div",{className:"cf-list-head"},f.default.createElement("span",null,"\u540D\u79F0"),f.default.createElement("span",null,"\u5185\u5BB9"),f.default.createElement("span",null,"\u66F4\u65B0")),f.default.createElement("div",{className:"cf-canvas-list"},e.map(w=>f.default.createElement("div",{key:w.id,className:"cf-canvas-row"},f.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>t(w.id)},w.name||"\u672A\u547D\u540D\u753B\u5E03"),f.default.createElement("span",{className:"cf-canvas-meta"},w.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",w.edges.length," \u6761\u8FDE\u7EBF"),f.default.createElement("span",{className:"cf-canvas-row-actions"},f.default.createElement(X,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>M(w)}),f.default.createElement(X,{name:"trash",label:"\u5220\u9664",onClick:()=>d(w)}))))))),g?f.default.createElement(Ia,{canvas:g,onClose:()=>M(null),onSubmit:w=>{i(g.id,w),M(null)}}):null,k?f.default.createElement(oe,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>d(null),footer:f.default.createElement(f.default.Fragment,null,f.default.createElement(B,{onClick:()=>d(null)},"\u53D6\u6D88"),f.default.createElement(B,{variant:"danger",onClick:()=>{c(k.id),d(null)}},"\u5220\u9664"))},f.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",k.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",k.nodes.length," \u4E2A\u8282\u70B9\u548C ",k.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function Ia({canvas:e,onClose:t,onSubmit:o}){let[i,c]=f.default.useState(e.name||"");return f.default.createElement(oe,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:t,footer:f.default.createElement(f.default.Fragment,null,f.default.createElement(B,{onClick:t},"\u53D6\u6D88"),f.default.createElement(B,{variant:"primary",onClick:()=>o(i.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},f.default.createElement("label",{className:"cf-field"},f.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),f.default.createElement("input",{className:"cf-input",value:i,autoFocus:!0,onChange:l=>c(l.target.value),onKeyDown:l=>{l.key==="Enter"&&o(i.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var Ea=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"audio",label:"\u97F3\u9891",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"}];function ea({canvas:e,channels:t,defaults:o,onChange:i,onBack:c,say:l}){let g=Qe(),{cam:M,moveTo:k}=g,[d,w]=f.default.useState([]),[E,y]=f.default.useState("select"),[I,$]=f.default.useState(typeof window<"u"&&window.__CF_DEV_PROMPT||""),[C,P]=f.default.useState(o?.ratio||"1:1"),[h,n]=f.default.useState(o?.count||1),[b,O]=f.default.useState(o?.modelKey||""),[K,W]=f.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[J,G]=f.default.useState([]),[ae,R]=f.default.useState(null),Q=f.default.useRef(null),ne=f.default.useRef(null);f.default.useEffect(()=>{if(!K)return;let a=S=>{Q.current?.contains(S.target)||W(null)},m=S=>{S.key==="Escape"&&W(null)};return window.addEventListener("pointerdown",a),window.addEventListener("keydown",m),()=>{window.removeEventListener("pointerdown",a),window.removeEventListener("keydown",m)}},[K]);let V=e.nodes,_=e.edges,ie=V.filter(a=>d.includes(a.id)),U=ie.length===1?ie[0]:null,ee=f.default.useMemo(()=>U?_.filter(a=>a.to===U.id).map(a=>V.find(m=>m.id===a.from)).filter(a=>a&&a.type!=="group"&&a.type!=="config"):[],[U,_,V]),ge=()=>{ne.current?.click()},fe=a=>{let m=[...a.target.files||[]];m.length&&(G(S=>[...S,...m.map(A=>({id:A.name+A.size,name:A.name,url:URL.createObjectURL(A)}))]),l?.(`\u5DF2\u52A0\u5165 ${m.length} \u5F20\u53C2\u8003\u56FE`),a.target.value="")},q=ve(t,"image"),z=me(t,b)||q[0]||null;f.default.useEffect(()=>{U&&(U.type==="image"||U.type==="audio")&&($(U.prompt||""),U.ratio&&P(U.ratio))},[U?.id]);let Y=a=>i({nodes:a,updatedAt:Date.now()}),Z=a=>i({edges:a,updatedAt:Date.now()}),re=(a,m)=>Y(V.map(S=>S.id===a?{...S,...m}:S)),de=(a,m,S)=>{let A=new Set(a);Y(V.map(L=>A.has(L.id)?{...L,x:Math.round(L.x+m),y:Math.round(L.y+S)}:L))},ye=(a,m,S)=>re(a,{w:m,h:S}),ze=(a,m)=>Z([..._,{id:F("e"),from:a,to:m}]),Se=a=>Z(_.filter(m=>m.id!==a)),le=a=>{let m=M.current,S={x:(window.innerWidth/2-m.tx)/m.s,y:(window.innerHeight/2-m.ty)/m.s},A=xe(a,S,a==="config"?{modelKey:b||q[0]?.key||"",ratio:C,count:h}:{});Y([...V,A]),w([A.id]),l?.(`\u5DF2\u65B0\u5EFA${be[a]}\u8282\u70B9`)},pe=()=>{let a=I.trim();if(!a)return;let m=U&&U.type==="image"?U:null;if(m){re(m.id,{prompt:a,status:"running",ratio:C}),setTimeout(()=>re(m.id,{status:"done"}),900),l?.("\u5F00\u59CB\u751F\u6210");return}let S=M.current,A={x:(window.innerWidth/2-S.tx)/S.s,y:(window.innerHeight/2-S.ty)/S.s},L=Array.from({length:h},(H,he)=>xe("image",{x:A.x+he*260,y:A.y},{prompt:a,ratio:C,status:"running"}));Y([...V,...L]),w(L.map(H=>H.id)),setTimeout(()=>{Y(H=>H.map(he=>L.some(ca=>ca.id===he.id)?{...he,status:"done"}:he))},900),$(""),l?.("\u5F00\u59CB\u751F\u6210")},Ie=()=>{let a=Xe(V,d);a&&(Y([a,...V]),w([a.id]))},p=()=>{let a=new Set(d);Y(V.filter(m=>!a.has(m.id))),Z(_.filter(m=>!a.has(m.from)&&!a.has(m.to))),w([])},x=()=>{let a=V.filter(L=>d.includes(L.id));if(!a.length)return;let m={},S=a.map(L=>{let H=F(L.type[0]);return m[L.id]=H,{...L,id:H,x:L.x+40,y:L.y+40,status:"idle"}}),A=_.filter(L=>m[L.from]&&m[L.to]).map(L=>({id:F("e"),from:m[L.from],to:m[L.to]}));Y([...V,...S]),Z([..._,...A]),w(S.map(L=>L.id))};return f.default.useEffect(()=>{let a=m=>{if(/input|textarea|select/i.test(m.target.tagName))return;let S=m.metaKey||m.ctrlKey;if(S&&m.key.toLowerCase()==="d"){m.preventDefault(),x();return}if(S&&m.key.toLowerCase()==="g"){m.preventDefault(),Ie();return}if(m.key==="Delete"||m.key==="Backspace"){m.preventDefault(),p();return}if(m.key==="Escape"){w([]);return}let A=m.key.toLowerCase();A==="v"&&y("select"),A==="h"&&y("pan"),A==="t"&&le("text"),A==="i"&&le("image"),A==="a"&&le("audio"),A==="c"&&le("config"),A==="g"&&le("group")};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[V,_,d,I,C,h,b]),f.default.createElement("div",{className:"cf-editor"},f.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},f.default.createElement(X,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:c}),f.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),Ea.map((a,m)=>a.sep?f.default.createElement("span",{key:`s${m}`,className:"cf-rail-sep","aria-hidden":"true"}):f.default.createElement("button",{key:a.id,type:"button",className:`cf-rail-btn${E===a.id?" is-on":""}`,title:`${a.label}  ${a.key}`,"aria-label":a.label,"aria-pressed":E===a.id,onClick:()=>{if(a.id==="focus"){R({...M.current,s:M.current.s});return}if(["text","image","audio","config","group"].includes(a.id)){le(a.id);return}y(a.id)}},f.default.createElement(j,{name:a.icon,size:18})))),f.default.createElement("div",{className:"cf-editor-main"},f.default.createElement(Ze,{nodes:V,edges:_,selection:d,channels:t,grid:e.grid||"dots",minimap:!0,camera:ae,camApi:g,showHint:!ie.length,onSelection:w,onMove:de,onResize:ye,onConnect:ze,onRemoveEdge:Se,onOpenNode:a=>{w([a.id]),$(a.prompt||a.text||"")}}),f.default.createElement("div",{className:"cf-composer"},f.default.createElement("textarea",{className:"cf-composer-input",value:I,rows:4,placeholder:U?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:a=>$(a.target.value),onKeyDown:a=>{a.key==="Enter"&&!a.shiftKey&&!a.nativeEvent.isComposing&&(a.preventDefault(),pe())}}),f.default.createElement("div",{className:"cf-composer-bar",ref:Q},f.default.createElement("div",{className:"cf-composer-left"},f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>W(K==="ref"?null:"ref"),"aria-expanded":K==="ref","aria-haspopup":"menu"},f.default.createElement(j,{name:"plus",size:15}),"\u53C2\u8003",J.length+ee.length?f.default.createElement("span",{className:"cf-bar-badge"},J.length+ee.length):null),K==="ref"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),ee.length?ee.map(a=>f.default.createElement("button",{key:a.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{$(m=>`${m}${m&&!m.endsWith(" ")?" ":""}@${be[a.type]}${a.name?`:${a.name}`:""} `),W(null)}},f.default.createElement(j,{name:a.type==="image"?"image":a.type==="text"?"text":"audio",size:14}),f.default.createElement("span",{className:"cf-menu-label"},a.name||(a.prompt||a.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):f.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),f.default.createElement("div",{className:"cf-menu-sep"}),f.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:ge},f.default.createElement(j,{name:"upload",size:14}),f.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),f.default.createElement("input",{ref:ne,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:fe})):null),f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>W(K==="ratio"?null:"ratio"),"aria-expanded":K==="ratio","aria-haspopup":"menu"},f.default.createElement(j,{name:"frame",size:15}),C),K==="ratio"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u753B\u9762\u6BD4\u4F8B"),ce.map(a=>f.default.createElement("button",{key:a.id,type:"button",className:`cf-menu-item${C===a.id?" is-on":""}`,role:"menuitem",onClick:()=>{P(a.id),W(null)}},f.default.createElement("span",{className:"cf-menu-label"},a.label),f.default.createElement("span",{className:"cf-menu-meta"},a.w," \xD7 ",a.h)))):null),f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>W(K==="count"?null:"count"),"aria-expanded":K==="count","aria-haspopup":"menu"},h," \u5F20",f.default.createElement(j,{name:"chevron",size:12})),K==="count"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},f.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(a=>f.default.createElement("button",{key:a,type:"button",className:`cf-menu-item${h===a?" is-on":""}`,role:"menuitem",onClick:()=>{n(a),W(null)}},a," \u5F20"))):null)),f.default.createElement("div",{className:"cf-composer-right"},f.default.createElement("div",{className:"cf-bar-slot"},f.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>W(K==="model"?null:"model"),"aria-expanded":K==="model","aria-haspopup":"menu"},f.default.createElement(j,{name:"bars",size:15}),f.default.createElement("span",{className:"cf-bar-label"},z?z.label:"\u9009\u62E9\u6A21\u578B"),f.default.createElement(j,{name:"chevron",size:12})),K==="model"?f.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},f.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),q.length?q.map(a=>f.default.createElement("button",{key:a.key,type:"button",className:`cf-menu-item${a.key===b?" is-on":""}`,role:"menuitem",onClick:()=>{O(a.key),W(null)}},f.default.createElement("span",{className:"cf-menu-label"},a.label),f.default.createElement("span",{className:"cf-menu-meta"},a.channel.name||a.channel.protocol))):f.default.createElement("p",{className:"cf-menu-empty"},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0")):null),ie.length?f.default.createElement("span",{style:{display:"inline-flex",gap:2}},f.default.createElement(X,{name:"group",label:"\u5305\u6210\u7EC4",onClick:Ie}),f.default.createElement(X,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:p})):null,f.default.createElement("button",{type:"button",className:"cf-send",onClick:pe,disabled:!I.trim(),"aria-label":"\u751F\u6210",title:"\u751F\u6210\uFF08Enter\uFF09"},f.default.createElement(j,{name:"arrowUp",size:17})))))))}var u=se(require("react"),1);function aa({channels:e,defaults:t,records:o,prompt:i,onPrompt:c,onCreateRecord:l,onDeleteRecords:g,onLookupPrompts:M,say:k}){let d=c,[w,E]=u.default.useState(t?.ratio||"1:1"),[y,I]=u.default.useState(t?.quality||"\u81EA\u52A8"),[$,C]=u.default.useState(t?.resolution||"\u81EA\u52A8"),[P,h]=u.default.useState(t?.modelKey||""),[n,b]=u.default.useState(1024),[O,K]=u.default.useState(1024),[W,J]=u.default.useState(!0),[G,ae]=u.default.useState([]),[R,Q]=u.default.useState(!1),[ne,V]=u.default.useState([]),[_,ie]=u.default.useState(!1),U=ve(e,"image"),ee=me(e,P)||U[0]||null,ge=z=>{E(z);let Y=ce.find(Z=>Z.id===z);Y&&(b(Y.w),K(Y.h))},fe=()=>{let z=i.trim();if(!z){k?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}let Y=re=>{let de=Math.max(256,Math.min(4096,Math.round(re)));return W?Math.round(de/16)*16:de};Q(!0);let Z={id:`r${Date.now().toString(36)}`,prompt:z,model:ee?ee.label:"\u672A\u9009\u62E9\u6A21\u578B",ratio:w,size:`${Y(n)}x${Y(O)}`,quality:y,resolution:$,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};l?.(Z),setTimeout(()=>{Q(!1),V(re=>[{...Z,id:`img${Date.now().toString(36)}`},...re]),k?.("\u751F\u6210\u5B8C\u6210")},1100)},q=z=>ae(Y=>Y.includes(z)?Y.filter(Z=>Z!==z):[...Y,z]);return u.default.createElement("div",{className:"cf-page"},u.default.createElement("div",{className:"cf-page-inner"},u.default.createElement("div",{className:"cf-studio"},u.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),u.default.createElement("span",{className:"cf-card-count"},o.length)),u.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)"}},u.default.createElement("div",{style:{display:"flex",gap:6}},u.default.createElement(B,{size:"sm",icon:"plus",onClick:()=>d("")},"\u65B0\u5EFA"),u.default.createElement(B,{size:"sm",onClick:()=>ae(o.map(z=>z.id))},"\u5168\u9009"),u.default.createElement(B,{size:"sm",variant:"danger",disabled:!G.length,onClick:()=>{g?.(G),ae([])}},"\u5220\u9664")),o.length===0?u.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):u.default.createElement("div",{className:"cf-record-list"},o.map(z=>u.default.createElement("div",{key:z.id,style:{display:"flex",alignItems:"center",gap:6}},u.default.createElement("input",{type:"checkbox",checked:G.includes(z.id),onChange:()=>q(z.id),"aria-label":`\u9009\u62E9 ${z.prompt}`}),u.default.createElement("button",{type:"button",className:"cf-record",style:{flex:1,minWidth:0},onClick:()=>{d(z.prompt),E(z.ratio)}},u.default.createElement("span",{className:"cf-record-prompt"},z.prompt),u.default.createElement("span",{className:"cf-record-meta"},z.model," \xB7 ",z.size," \xB7 ",z.at)))))))),u.default.createElement("div",{className:"cf-studio-col"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),u.default.createElement("div",{className:"cf-card-body cf-form"},u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),u.default.createElement("div",{className:"cf-form-head-actions"},u.default.createElement(B,{size:"sm",icon:"book",onClick:()=>M?.()},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),u.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:i,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:z=>d(z.target.value)})),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),u.default.createElement("div",{className:"cf-form-head-actions"},u.default.createElement(B,{size:"sm",onClick:()=>k?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u526A\u5207\u677F"),u.default.createElement(B,{size:"sm",icon:"upload",onClick:()=>k?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u4E0A\u4F20"))),u.default.createElement("div",{className:"cf-drop"},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC")),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),u.default.createElement("div",{style:{position:"relative"}},u.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>ie(z=>!z)},u.default.createElement(j,{name:"sparkle",size:13}),u.default.createElement("span",null,ee?ee.label:"\u9009\u62E9\u6A21\u578B"),u.default.createElement(j,{name:"chevron",size:12})),_?u.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},U.length?U.map(z=>u.default.createElement("button",{key:z.key,type:"button",className:`cf-menu-item${z.key===(P||U[0]?.key)?" is-on":""}`,onClick:()=>{h(z.key),ie(!1)}},z.label," ",u.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",z.channel.name||z.channel.protocol))):u.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),u.default.createElement("div",{className:"cf-chips"},ke.map(z=>u.default.createElement("button",{key:z,type:"button",className:`cf-chip${y===z?" is-on":""}`,onClick:()=>I(z)},z)))),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("div",{className:"cf-form-head"},u.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),u.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},u.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),u.default.createElement("input",{type:"checkbox",checked:W,onChange:z=>J(z.target.checked)}))),u.default.createElement("div",{className:"cf-size-row"},u.default.createElement("input",{className:"cf-input cf-input--num",value:n,"aria-label":"\u5BBD",onChange:z=>b(Number(z.target.value.replace(/\D/g,""))||0)}),u.default.createElement(j,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),u.default.createElement("input",{className:"cf-input cf-input--num",value:O,"aria-label":"\u9AD8",onChange:z=>K(Number(z.target.value.replace(/\D/g,""))||0)})),u.default.createElement("div",{className:"cf-chips"},ce.map(z=>u.default.createElement("button",{key:z.id,type:"button",className:`cf-chip cf-chip--tag${w===z.id?" is-on":""}`,onClick:()=>ge(z.id)},z.label)))),u.default.createElement("div",{className:"cf-form-row"},u.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),u.default.createElement("div",{className:"cf-chips"},Ne.map(z=>u.default.createElement("button",{key:z,type:"button",className:`cf-chip${$===z?" is-on":""}`,onClick:()=>C(z)},z)))),u.default.createElement(B,{variant:"primary",icon:R?"refresh":"play",onClick:fe,disabled:R||!i.trim()},R?"\u751F\u6210\u4E2D\u2026":"\u5F00\u59CB\u751F\u6210")))),u.default.createElement("div",{className:"cf-studio-col"},u.default.createElement("div",{className:"cf-card"},u.default.createElement("div",{className:"cf-card-head"},u.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),u.default.createElement("span",{className:"cf-card-count"},ne.length)),u.default.createElement("div",{className:"cf-card-body"},ne.length===0?u.default.createElement(te,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):u.default.createElement("div",{className:"cf-results"},ne.map(z=>u.default.createElement(Da,{key:z.id,record:z})))))))))}function Da({record:e}){let t=u.default.useRef(null);return u.default.useEffect(()=>{let o=t.current;if(!o)return;let i=320;o.width=i,o.height=i;let c=o.getContext("2d"),l=11;for(let k of`${e.prompt}${e.id}`)l=(l*31+k.charCodeAt(0))%2147483647;let g=()=>(l=l*16807%2147483647)/2147483647;c.fillStyle="#141414",c.fillRect(0,0,i,i);let M=c.createRadialGradient(i*g(),i*g(),20,i/2,i/2,i*.7);M.addColorStop(0,"rgba(255,255,255,0.18)"),M.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=M,c.fillRect(0,0,i,i),c.strokeStyle="rgba(255,255,255,0.3)",c.lineWidth=1.4;for(let k=0;k<5;k++){let d=i*(.2+g()*.6);c.beginPath(),c.moveTo(0,d),c.lineTo(i,d+(g()-.5)*60),c.stroke()}},[e.id,e.prompt]),u.default.createElement("figure",{className:"cf-result",title:`${e.prompt}
${e.model} \xB7 ${e.size}`},u.default.createElement("canvas",{ref:t,"aria-label":e.prompt}))}var D=se(require("react"),1);var Pe=6;function na({prompts:e,sources:t,onUse:o,onBack:i,returnTo:c}){let[l,g]=D.default.useState(""),[M,k]=D.default.useState("\u5168\u90E8"),[d,w]=D.default.useState("\u5168\u90E8"),[E,y]=D.default.useState(Pe),I=["\u5168\u90E8",...new Set(e.map(n=>n.category).filter(Boolean))],$=["\u5168\u90E8",...new Set(e.flatMap(n=>n.tags||[]))],C=e.filter(n=>{if(M!=="\u5168\u90E8"&&n.category!==M||d!=="\u5168\u90E8"&&!(n.tags||[]).includes(d))return!1;if(!l)return!0;let b=l.toLowerCase();return(n.title||"").toLowerCase().includes(b)||(n.text||"").toLowerCase().includes(b)||(n.tags||[]).some(O=>O.toLowerCase().includes(b))}),P=C.slice(0,E),h=C.length>P.length;return D.default.useEffect(()=>{y(Pe)},[l,M,d]),D.default.createElement("div",{className:"cf-page"},D.default.createElement("div",{className:"cf-page-inner"},D.default.createElement("div",{className:"cf-title-center"},D.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),D.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD"),c&&i?D.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:i},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),D.default.createElement("div",{className:"cf-split"},D.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},D.default.createElement("div",{className:"cf-filter-group"},D.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),D.default.createElement("div",{className:"cf-filter-chips"},I.map(n=>D.default.createElement("button",{key:n,type:"button",className:`cf-chip cf-chip--tag${M===n?" is-on":""}`,onClick:()=>k(n)},n)))),D.default.createElement("div",{className:"cf-filter-group"},D.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),D.default.createElement("div",{className:"cf-filter-chips"},$.map(n=>D.default.createElement("button",{key:n,type:"button",className:`cf-chip cf-chip--tag${d===n?" is-on":""}`,onClick:()=>w(n)},n))))),D.default.createElement("div",null,D.default.createElement("div",{className:"cf-search"},D.default.createElement(j,{name:"search",size:15}),D.default.createElement("input",{className:"cf-input",value:l,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u6216\u6807\u7B7E",onChange:n=>g(n.target.value)})),t.length===0?D.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u63D0\u793A\u8BCD\u6765\u6E90\u3002\u5230\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u540E\uFF0C\u8FD9\u91CC\u4F1A\u5206\u9875\u52A0\u8F7D\u66F4\u591A\u3002"):null,C.length===0?D.default.createElement(te,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:l||M!=="\u5168\u90E8"||d!=="\u5168\u90E8"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u6765\u6E90\u3002"}):D.default.createElement(D.default.Fragment,null,D.default.createElement("ul",{className:"cf-prompt-grid"},P.map(n=>D.default.createElement("li",{key:n.id,className:"cf-prompt-card"},D.default.createElement("span",{className:"cf-prompt-title"},n.title),D.default.createElement("span",{className:"cf-prompt-text"},n.text),D.default.createElement("span",{className:"cf-prompt-tags"},n.category?D.default.createElement("span",{className:"cf-tag"},n.category):null,(n.tags||[]).map(b=>D.default.createElement("span",{key:b,className:"cf-tag"},b))),D.default.createElement("span",{style:{display:"flex",gap:6,marginTop:4}},D.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>o(n)},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"))))),h?D.default.createElement("div",{className:"cf-more"},D.default.createElement(B,{onClick:()=>y(n=>n+Pe)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",C.length-P.length," \u6761\uFF09")):D.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))))}var N=se(require("react"),1);function ia({assets:e,onSave:t,onDelete:o,onImport:i,say:c}){let[l,g]=N.default.useState(""),[M,k]=N.default.useState("all"),[d,w]=N.default.useState(null),[E,y]=N.default.useState(null),I=e.filter(C=>{if(M!=="all"&&C.kind!==M)return!1;if(!l)return!0;let P=l.toLowerCase();return[C.title,C.text,C.source,...C.tags||[]].filter(Boolean).some(h=>String(h).toLowerCase().includes(P))});return N.default.createElement("div",{className:"cf-page"},N.default.createElement("div",{className:"cf-page-inner"},N.default.createElement("div",{className:"cf-page-head"},N.default.createElement("div",null,N.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),N.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),N.default.createElement("div",{className:"cf-page-actions"},N.default.createElement(B,{icon:"upload",onClick:i},"\u5BFC\u5165\u8D44\u4EA7"),N.default.createElement(B,{icon:"download",onClick:()=>{let C=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),P=document.createElement("a");P.href=URL.createObjectURL(C),P.download="my-assets.json",P.click(),setTimeout(()=>URL.revokeObjectURL(P.href),2e3),c?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),N.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>w({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),N.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},N.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},N.default.createElement("div",{className:"cf-filter-group"},N.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),N.default.createElement("div",{className:"cf-filter-chips"},Ee.map(C=>N.default.createElement("button",{key:C.id,type:"button",className:`cf-chip cf-chip--tag${M===C.id?" is-on":""}`,onClick:()=>k(C.id)},C.label))))),N.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},N.default.createElement(j,{name:"search",size:15}),N.default.createElement("input",{className:"cf-input",value:l,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:C=>g(C.target.value)}))),I.length===0?N.default.createElement(te,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:l||M!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:N.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>w({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):N.default.createElement("div",{className:"cf-asset-grid"},I.map(C=>N.default.createElement("div",{key:C.id,className:"cf-asset"},N.default.createElement("div",{className:"cf-asset-thumb"},C.kind==="image"&&C.cover?N.default.createElement("img",{src:C.cover,alt:C.title}):N.default.createElement(j,{name:C.kind==="image"?"image":C.kind==="video"?"play":"text",size:22})),N.default.createElement("div",{className:"cf-asset-body"},N.default.createElement("span",{className:"cf-asset-title"},C.title||"\u672A\u547D\u540D\u8D44\u4EA7"),N.default.createElement("span",{className:"cf-asset-meta"},C.source||"\u6765\u6E90\u672A\u6CE8\u660E",C.tags?.length?` \xB7 ${C.tags.join(" / ")}`:""),N.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},N.default.createElement(X,{name:"edit",label:"\u7F16\u8F91",onClick:()=>w({...C})}),N.default.createElement(X,{name:"trash",label:"\u5220\u9664",onClick:()=>y(C)}))))))),d?N.default.createElement($a,{asset:d,onClose:()=>w(null),onSave:C=>{let P=C.id?e.map(h=>h.id===C.id?C:h):[...e,{...C,id:F("a")}];t(P),w(null),c?.(C.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,E?N.default.createElement(oe,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>y(null),footer:N.default.createElement(N.default.Fragment,null,N.default.createElement(B,{onClick:()=>y(null)},"\u53D6\u6D88"),N.default.createElement(B,{variant:"danger",onClick:()=>{o(E.id),y(null),c?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},N.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",E.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function $a({asset:e,onClose:t,onSave:o}){let[i,c]=N.default.useState({...e,tags:e.tags||[]}),l=(d,w)=>c(E=>({...E,[d]:w})),[g,M]=N.default.useState(""),k=i.title?.trim()&&(i.kind!=="text"||i.text?.trim());return N.default.createElement(oe,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:t,footer:N.default.createElement(N.default.Fragment,null,N.default.createElement(B,{onClick:t},"\u53D6\u6D88"),N.default.createElement(B,{variant:"primary",disabled:!k,onClick:()=>o({...i,title:i.title.trim()})},"\u4FDD\u5B58"))},N.default.createElement("div",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),N.default.createElement("div",{className:"cf-chips"},Ee.filter(d=>d.id!=="all").map(d=>N.default.createElement("button",{key:d.id,type:"button",className:`cf-chip${i.kind===d.id?" is-on":""}`,onClick:()=>l("kind",d.id)},d.label)))),N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),N.default.createElement("input",{className:"cf-input",value:i.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:d=>l("title",d.target.value)})),i.kind==="text"?N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),N.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:i.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:d=>l("text",d.target.value)})):N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),N.default.createElement("input",{className:"cf-input",value:i.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:d=>l("cover",d.target.value)})),N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),N.default.createElement("input",{className:"cf-input",value:g,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:d=>M(d.target.value),onKeyDown:d=>{if(d.key!=="Enter")return;d.preventDefault();let w=g.trim();w&&(l("tags",[...new Set([...i.tags||[],w])]),M(""))}}),i.tags?.length?N.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},i.tags.map(d=>N.default.createElement("button",{key:d,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>l("tags",i.tags.filter(w=>w!==d)),title:"\u70B9\u51FB\u79FB\u9664"},d," \xD7"))):null),N.default.createElement("label",{className:"cf-field"},N.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),N.default.createElement("input",{className:"cf-input",value:i.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:d=>l("source",d.target.value)})))}var r=se(require("react"),1);var Ba=[{id:"channels",label:"\u6E20\u9053"},{id:"proxy",label:"\u672C\u5730\u4EE3\u7406"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"},{id:"webdav",label:"WebDAV"},{id:"storage",label:"\u672C\u5730\u5B58\u50A8"}];function ta({tab:e,onTab:t,channels:o,onChannels:i,defaults:c,onDefaults:l,promptSources:g,onPromptSources:M,say:k}){let[d,w]=r.default.useState(null),[E,y]=r.default.useState(null),[I,$]=r.default.useState({name:"",url:""});return r.default.createElement("div",{className:"cf-page"},r.default.createElement("div",{className:"cf-page-inner"},r.default.createElement("div",{className:"cf-page-head"},r.default.createElement("div",null,r.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),r.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u6A21\u578B\u9009\u62E9\u3001\u540C\u6B65\u4E0E\u672C\u5730\u5B58\u50A8"))),r.default.createElement("div",{className:"cf-config-notice"},r.default.createElement("span",null,"JSON \u6587\u4EF6\u5305\u542B API Key \u548C WebDAV \u51ED\u636E\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),r.default.createElement("span",{className:"cf-config-notice-actions"},r.default.createElement(B,{size:"sm",icon:"upload",onClick:()=>{let h=document.createElement("input");h.type="file",h.accept=".json,application/json",h.onchange=async()=>{let n=h.files?.[0];if(n)try{let b=JSON.parse(await n.text());Array.isArray(b.channels)&&i(b.channels),b.defaults&&l(b.defaults),Array.isArray(b.promptSources)&&M(b.promptSources),k?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{k?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},h.click()}},"\u5BFC\u5165\u914D\u7F6E"),r.default.createElement(B,{size:"sm",icon:"download",onClick:()=>{let h={version:1,channels:o,defaults:c,promptSources:g},n=new Blob([JSON.stringify(h,null,2)],{type:"application/json"}),b=document.createElement("a");b.href=URL.createObjectURL(n),b.download="chunfeng-config.json",b.click(),setTimeout(()=>URL.revokeObjectURL(b.href),2e3),k?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),r.default.createElement("div",{className:"cf-tabs",role:"tablist"},Ba.map(h=>r.default.createElement("button",{key:h.id,type:"button",role:"tab","aria-selected":e===h.id,className:`cf-tab${e===h.id?" is-on":""}`,onClick:()=>t(h.id)},h.label))),e==="channels"?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u8C03\u7528\u811A\u672C\u3002"),r.default.createElement(B,{icon:"plus",onClick:()=>w(De())},"\u65B0\u589E\u6E20\u9053")),o.length===0?r.default.createElement(te,{icon:"sliders",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:r.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>w(De())},"\u65B0\u589E\u6E20\u9053")}):r.default.createElement("div",{className:"cf-channel-list"},o.map(h=>r.default.createElement("div",{key:h.id,className:"cf-channel"},r.default.createElement("div",{className:"cf-channel-main"},r.default.createElement("span",{className:"cf-channel-name"},h.name||"\u672A\u547D\u540D\u6E20\u9053"),r.default.createElement("span",{className:"cf-channel-meta"},ue.find(n=>n.id===h.protocol)?.label||h.protocol," \xB7 ",h.models.length," \u4E2A\u6A21\u578B"," \xB7 ",h.baseUrl,h.keyHint?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${h.keyHint}`:" \xB7 \u672A\u586B\u5BC6\u94A5")),r.default.createElement("span",{className:"cf-channel-actions"},r.default.createElement(X,{name:"edit",label:"\u7F16\u8F91",onClick:()=>w({...h})}),r.default.createElement(X,{name:"trash",label:"\u5220\u9664",onClick:()=>y(h)})))))):null,e==="defaults"?r.default.createElement(Ta,{channels:o,defaults:c,onDefaults:l}):null,e==="sources"?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B\u6765\u6E90\u5206\u9875\u52A0\u8F7D\u3002\u7559\u7A7A\u65F6\u53EA\u663E\u793A\u5185\u7F6E\u63D0\u793A\u8BCD\u3002")),r.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},r.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},r.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:I.name,onChange:h=>$(n=>({...n,name:h.target.value}))}),r.default.createElement("input",{className:"cf-input",placeholder:"\u63D0\u793A\u8BCD\u6765\u6E90\u5730\u5740\uFF08JSON\uFF09",value:I.url,onChange:h=>$(n=>({...n,url:h.target.value}))}),r.default.createElement(B,{variant:"primary",disabled:!I.url.trim(),onClick:()=>{M([...g,{id:F("src"),name:I.name.trim()||"\u672A\u547D\u540D\u6765\u6E90",url:I.url.trim()}]),$({name:"",url:""}),k?.("\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),g.length===0?r.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002"):r.default.createElement("div",{style:{display:"grid",gap:2}},g.map(h=>r.default.createElement("div",{key:h.id,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},r.default.createElement("span",{style:{fontSize:13}},h.name),r.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},h.url),r.default.createElement(X,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>M(g.filter(n=>n.id!==h.id)),style:{marginInlineStart:"auto"}})))))):null,e==="proxy"?r.default.createElement(Le,{title:"\u672C\u5730\u4EE3\u7406",desc:"\u8BA9\u51FA\u56FE\u8BF7\u6C42\u7ECF\u8FC7\u672C\u673A\u4EE3\u7406\u3002",items:["\u4EE3\u7406\u5730\u5740\uFF08http://127.0.0.1:7890\uFF09","\u4EC5\u5BF9\u6307\u5B9A\u6E20\u9053\u751F\u6548","\u8FDE\u901A\u6027\u6D4B\u8BD5"]}):null,e==="webdav"?r.default.createElement(Le,{title:"WebDAV",desc:"\u628A\u753B\u5E03\u548C\u8D44\u4EA7\u540C\u6B65\u5230\u81EA\u5DF1\u7684 WebDAV\u3002",items:["\u670D\u52A1\u5668\u5730\u5740","\u8D26\u53F7\u4E0E\u5BC6\u7801","\u540C\u6B65\u8303\u56F4\uFF1A\u753B\u5E03 / \u8D44\u4EA7 / \u63D0\u793A\u8BCD"]}):null,e==="storage"?r.default.createElement(Le,{title:"\u672C\u5730\u5B58\u50A8",desc:"\u6570\u636E\u76EE\u524D\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\uFF1B\u63A5\u4E0A Host \u540E\u4F1A\u843D\u5230 ~/.dsh/dsh-chunfeng-image/\u3002",items:["\u753B\u5E03\u4E0E\u8282\u70B9","\u751F\u6210\u7684\u56FE\u7247\u6587\u4EF6","\u914D\u7F6E\u6587\u4EF6\uFF08\u542B\u5BC6\u94A5\u51ED\u8BC1\uFF09"]}):null),d?r.default.createElement(Pa,{channel:d,onClose:()=>w(null),onSave:h=>{let n=o.some(b=>b.id===h.id);i(n?o.map(b=>b.id===h.id?h:b):[...o,h]),w(null),k?.(n?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,E?r.default.createElement(oe,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>y(null),footer:r.default.createElement(r.default.Fragment,null,r.default.createElement(B,{onClick:()=>y(null)},"\u53D6\u6D88"),r.default.createElement(B,{variant:"danger",onClick:()=>{i(o.filter(h=>h.id!==E.id)),y(null),k?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},r.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",E.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",E.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function Ta({channels:e,defaults:t,onDefaults:o}){let i=ve(e,"image"),c=l=>o({...t,image:{...t.image,...l}});return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),r.default.createElement("div",{className:"cf-defaults"},r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),r.default.createElement("select",{className:"cf-input",value:t.image.modelKey||"",onChange:l=>c({modelKey:l.target.value})},r.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),i.map(l=>r.default.createElement("option",{key:l.key,value:l.key},l.label," \xB7 ",l.channel.name||l.channel.protocol))),i.length===0?r.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),r.default.createElement("div",{className:"cf-chips"},ce.map(l=>r.default.createElement("button",{key:l.id,type:"button",className:`cf-chip${t.image.ratio===l.id?" is-on":""}`,onClick:()=>c({ratio:l.id})},l.label)))),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),r.default.createElement("div",{className:"cf-chips"},ke.map(l=>r.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.quality===l?" is-on":""}`,onClick:()=>c({quality:l})},l)))),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),r.default.createElement("div",{className:"cf-chips"},Ne.map(l=>r.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.resolution===l?" is-on":""}`,onClick:()=>c({resolution:l})},l)))),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),r.default.createElement("div",{className:"cf-chips"},[1,2,4].map(l=>r.default.createElement("button",{key:l,type:"button",className:`cf-chip${t.image.count===l?" is-on":""}`,onClick:()=>c({count:l})},l," \u5F20"))))))}function Le({title:e,desc:t,items:o}){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"cf-section-head"},r.default.createElement("p",{className:"cf-section-desc"},t)),r.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)"}},r.default.createElement("p",{style:{fontSize:13,fontWeight:500,marginBottom:8}},e),r.default.createElement("ul",{style:{display:"grid",gap:6}},o.map(i=>r.default.createElement("li",{key:i,style:{fontSize:12,color:"var(--cf-muted)",display:"flex",gap:8,alignItems:"center"}},r.default.createElement("span",{style:{width:4,height:4,borderRadius:999,background:"var(--cf-caption)"},"aria-hidden":"true"}),i))),r.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",marginTop:12}},"\u8FD9\u4E00\u7248\u5148\u628A\u4F4D\u7F6E\u7559\u597D\uFF0C\u63A5\u5165 Host \u540E\u518D\u586B\u3002")))}function Pa({channel:e,onClose:t,onSave:o}){let[i,c]=r.default.useState({...e}),[l,g]=r.default.useState(""),[M,k]=r.default.useState(""),d=(y,I)=>c($=>({...$,[y]:I})),w=()=>{let y=M.trim();if(y){if(i.models.some(I=>I.id===y)){k("");return}d("models",[...i.models,{id:y,label:y,caps:La(y),enabled:!0,source:"manual"}]),k("")}},E=(y,I)=>{d("models",i.models.map($=>{if($.id!==y)return $;let C=$.caps||[];return{...$,caps:C.includes(I)?C.filter(P=>P!==I):[...C,I]}}))};return r.default.createElement(oe,{title:e.id&&e.models?"\u7F16\u8F91\u6E20\u9053":"\u65B0\u589E\u6E20\u9053",wide:!0,onClose:t,footer:r.default.createElement(r.default.Fragment,null,r.default.createElement(B,{onClick:t},"\u53D6\u6D88"),r.default.createElement(B,{variant:"primary",disabled:!i.baseUrl.trim(),onClick:()=>{let y=l.trim()?l.trim().slice(-4):i.keyHint;o({...i,keyHint:y||"",hasKey:!!l.trim()||i.hasKey})}},"\u4FDD\u5B58"))},r.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),r.default.createElement("input",{className:"cf-input",value:i.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:y=>d("name",y.target.value)})),r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),r.default.createElement("select",{className:"cf-input",value:i.protocol,onChange:y=>{let I=ue.find($=>$.id===y.target.value);d("protocol",y.target.value),I&&d("baseUrl",I.baseUrl)}},ue.map(y=>r.default.createElement("option",{key:y.id,value:y.id},y.label))))),r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),r.default.createElement("input",{className:"cf-input",value:i.baseUrl,placeholder:"https://api.example.com/v1",onChange:y=>d("baseUrl",y.target.value)})),r.default.createElement("label",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"API Key",i.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${i.keyHint}\uFF09`:""),r.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:l,placeholder:i.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:y=>g(y.target.value)}),r.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),r.default.createElement("div",{className:"cf-field"},r.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),r.default.createElement("div",{style:{display:"flex",gap:6}},r.default.createElement("input",{className:"cf-input",value:M,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:y=>k(y.target.value),onKeyDown:y=>{y.key==="Enter"&&(y.preventDefault(),w())}}),r.default.createElement(B,{onClick:w,disabled:!M.trim()},"\u6DFB\u52A0")),i.models.length===0?r.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u4FDD\u5B58\u6E20\u9053\u540E\u53EF\u4EE5\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u5728\u8FD9\u91CC\u624B\u52A8\u6DFB\u52A0\u3002"):r.default.createElement("div",{style:{display:"grid",gap:6,marginTop:4}},i.models.map(y=>r.default.createElement("div",{key:y.id,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",padding:"8px 10px",borderRadius:"var(--cf-r-sm)",boxShadow:"inset 0 0 0 var(--cf-hair) var(--cf-line)"}},r.default.createElement("span",{style:{fontSize:12,minWidth:120}},y.label||y.id),r.default.createElement("span",{style:{display:"flex",gap:4,marginInlineStart:"auto"}},Ye.map(I=>r.default.createElement("button",{key:I.id,type:"button",className:`cf-chip cf-chip--tag${(y.caps||[]).includes(I.id)?" is-on":""}`,onClick:()=>E(y.id,I.id)},I.label))),r.default.createElement(X,{name:"trash",label:`\u79FB\u9664 ${y.id}`,onClick:()=>d("models",i.models.filter(I=>I.id!==y.id))}))))),r.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u81EA\u52A8\u62C9\u53D6\u6A21\u578B\u4E0E\u300C\u5B9E\u6D4B\u51FA\u56FE\u300D\u4F1A\u5728\u63A5\u4E0A Host \u540E\u53EF\u7528\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u624B\u52A8\u6DFB\u52A0\u5E76\u52FE\u9009\u80FD\u529B\u3002"))}function La(e){let t=e.toLowerCase();return/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(t)?["image"]:/veo|kling|sora|runway|video/.test(t)?["video"]:/tts|audio|speech|whisper|music/.test(t)?["audio"]:["text"]}var ra="dsh-chunfeng-image:state:v2";function Aa(){try{let e=localStorage.getItem(ra);if(!e)return null;let t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch{return null}}function sa(){let[e,t]=T.default.useState(()=>{let n=Ve(),b=Aa(),O=b?{...n,...b}:n;return!O.canvases.length&&!b&&(O.canvases=[{...Ce("\u9713\u8679\u8857\u89D2"),...$e()}],O.openCanvasId=null),O}),[o,i]=T.default.useState(""),[c,l]=T.default.useState(null),[g,M]=T.default.useState(null),k=T.default.useRef(0);T.default.useEffect(()=>{try{localStorage.setItem(ra,JSON.stringify(e))}catch{}},[e]);let d=T.default.useCallback((n,b)=>{M({text:n,kind:b,at:Date.now()}),clearTimeout(k.current),k.current=setTimeout(()=>M(null),2200)},[]);T.default.useEffect(()=>()=>clearTimeout(k.current),[]);let w=n=>t(b=>({...b,...n})),E=e.canvases.find(n=>n.id===e.openCanvasId)||null,y=Fe(e),I=n=>{l(null),t(b=>qe(b,n))},$=(n,b)=>w({canvases:e.canvases.map(O=>O.id===n?{...O,...b,updatedAt:Date.now()}:O)}),C=()=>{let n={...Ce(),...$e()};w({canvases:[n,...e.canvases],openCanvasId:n.id,view:"canvas"}),d("\u5DF2\u65B0\u5EFA\u753B\u5E03")},P=()=>{let n=document.createElement("input");n.type="file",n.accept=".json,application/json",n.onchange=async()=>{let b=n.files?.[0];if(b)try{let O=JSON.parse(await b.text()),K={...Ce(O.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(O.nodes)?O.nodes:[],edges:Array.isArray(O.edges)?O.edges:[],grid:O.grid||"dots"};w({canvases:[K,...e.canvases],openCanvasId:K.id,view:"canvas"}),d("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{d("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},n.click()},h=n=>{if(E){let b={id:F("i"),type:"image",x:220+E.nodes.length*26,y:220+E.nodes.length*20,w:240,h:268,name:"",status:"idle",z:2,prompt:n.text,ratio:e.defaults.image.ratio||"1:1",locked:!0};$(E.id,{nodes:[...E.nodes,b]}),d(`\u5DF2\u7528\u300C${n.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}i(n.text),w({view:"studio",openCanvasId:null}),d(`\u5DF2\u586B\u5165\u300C${n.title}\u300D`)};return T.default.createElement("div",{className:"cf-app"},T.default.createElement("style",null,Ke),T.default.createElement("div",{className:"cf-ambient","aria-hidden":"true"},T.default.createElement("i",null),T.default.createElement("i",null),T.default.createElement("i",null)),T.default.createElement("header",{className:"cf-nav"},T.default.createElement("span",{className:"cf-brand"},T.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round","aria-hidden":"true"},T.default.createElement("path",{d:"M12 3.5L21 19H3z"}),T.default.createElement("path",{d:"M12 9.5v5.5",strokeLinecap:"round"})),"\u6625\u98CE\u753B\u5E03"),T.default.createElement("nav",{className:"cf-nav-list","aria-label":"\u4E3B\u5BFC\u822A"},We.map(n=>{let b=n.id==="canvas"?y==="canvas"||y==="editor":y===n.id;return T.default.createElement("button",{key:n.id,type:"button",className:`cf-nav-item${b?" is-on":""}`,onClick:()=>I(n.id),"aria-current":b?"page":void 0},T.default.createElement(j,{name:n.icon,size:15}),n.label)})),T.default.createElement("div",{className:"cf-nav-right"},E?T.default.createElement(T.default.Fragment,null,T.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},E.name),T.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}].map(n=>T.default.createElement("button",{key:n.id,type:"button",className:(E.grid||"dots")===n.id?"is-on":"",onClick:()=>$(E.id,{grid:n.id})},n.label)))):null,T.default.createElement("span",{className:"cf-nav-version"},"v0.1.0"),T.default.createElement(X,{name:"keyboard",label:"\u5FEB\u6377\u952E",onClick:()=>d("V \u9009\u62E9 \xB7 H \u79FB\u52A8 \xB7 T/I/A/C/G \u65B0\u5EFA\u8282\u70B9 \xB7 \u2318D \u590D\u5236 \xB7 \u2318G \u5305\u7EC4 \xB7 \u232B \u5220\u9664")}))),y==="editor"&&E?T.default.createElement(ea,{canvas:E,channels:e.channels,defaults:e.defaults.image,onChange:n=>$(E.id,n),onBack:()=>t(n=>Je(n)),say:d}):null,y==="canvas"?T.default.createElement(Re,{canvases:e.canvases,onOpen:n=>t(b=>Ge(b,n)),onCreate:C,onRename:(n,b)=>$(n,{name:b}),onDelete:n=>w({canvases:e.canvases.filter(b=>b.id!==n),openCanvasId:null}),onImport:P}):null,y==="studio"?T.default.createElement(aa,{channels:e.channels,defaults:e.defaults.image,records:e.records,prompt:o,onPrompt:i,onCreateRecord:n=>w({records:[n,...e.records]}),onDeleteRecords:n=>w({records:e.records.filter(b=>!n.includes(b.id))}),onLookupPrompts:()=>{l("studio"),w({view:"prompts",openCanvasId:null})},say:d}):null,y==="prompts"?T.default.createElement(na,{prompts:e.prompts,sources:e.promptSources,returnTo:c,onUse:h,onBack:c?()=>{l(null),w({view:c})}:null}):null,y==="assets"?T.default.createElement(ia,{assets:e.assets,onSave:n=>w({assets:n}),onDelete:n=>w({assets:e.assets.filter(b=>b.id!==n)}),onImport:()=>d("\u8D44\u4EA7\u5305\u5BFC\u5165\u63A5 Host \u540E\u53EF\u7528"),say:d}):null,y==="config"?T.default.createElement(ta,{tab:e.configTab,onTab:n=>w({configTab:n}),channels:e.channels,onChannels:n=>w({channels:n}),defaults:e.defaults,onDefaults:n=>w({defaults:n}),promptSources:e.promptSources,onPromptSources:n=>w({promptSources:n}),say:d}):null,g?T.default.createElement(je,{text:g.text,kind:g.kind}):null)}var oa="dsh-chunfeng-image",Oa=["slots"];function Ha(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:oa},sa)),e.effect(()=>{let t=null;return(()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:oa,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},Ka))})(),()=>t?.()},"dsh-chunfeng-image: sidebar entry")}function Ka(){return la.default.createElement(j,{name:"canvas",size:16})}
return module.exports}})
