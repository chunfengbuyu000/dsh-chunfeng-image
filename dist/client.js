window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var la=Object.create;var ke=Object.defineProperty;var ca=Object.getOwnPropertyDescriptor;var fa=Object.getOwnPropertyNames;var da=Object.getPrototypeOf,pa=Object.prototype.hasOwnProperty;var ua=(e,i)=>{for(var r in i)ke(e,r,{get:i[r],enumerable:!0})},Ae=(e,i,r,t)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of fa(i))!pa.call(e,o)&&o!==r&&ke(e,o,{get:()=>i[o],enumerable:!(t=ca(i,o))||t.enumerable});return e};var fe=(e,i,r)=>(r=e!=null?la(da(e)):{},Ae(i||!e||!e.__esModule?ke(r,"default",{value:e,enumerable:!0}):r,e)),ma=e=>Ae(ke({},"__esModule",{value:!0}),e);var Ka={};ua(Ka,{apply:()=>La,inject:()=>Aa});module.exports=ma(Ka);var oa=fe(require("react"),1);var T=fe(require("react"),1);var Le=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
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
`;var Oe=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
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
  padding: var(--cf-sp-3);
  border-radius: var(--cf-r-lg);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong), 0 16px 40px -20px oklch(0% 0 0 / 0.6);
}
.cf-composer:focus-within { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-fg-2), 0 16px 40px -20px oklch(0% 0 0 / 0.6); }

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
  padding: 8px var(--cf-sp-3);
  border-radius: var(--cf-r-sm);
  background: var(--cf-bg);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-muted);
}
.cf-composer-input::placeholder { color: var(--cf-caption); }
.cf-composer-input:focus-visible { outline: none; }

.cf-composer-bar { display: flex; align-items: center; gap: var(--cf-sp-2); flex-wrap: wrap; }
.cf-composer-hint { font-size: var(--cf-fs-11); color: var(--cf-caption); margin-inline-start: auto; white-space: nowrap; }

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
`;var Ke=`${Le}
${Oe}`;var l=fe(require("react"),1),ha={canvas:l.default.createElement(l.default.Fragment,null,l.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),l.default.createElement("path",{d:"M3 10h18M9 10v10"})),image:l.default.createElement(l.default.Fragment,null,l.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),l.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),l.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),l.default.createElement("path",{d:"M5 17h14"})),folder:l.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:l.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),cursor:l.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:l.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:l.default.createElement(l.default.Fragment,null,l.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),l.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),l.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:l.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:l.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:l.default.createElement(l.default.Fragment,null,l.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),l.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),l.default.createElement("path",{d:"M11 11l2 2"})),search:l.default.createElement(l.default.Fragment,null,l.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),l.default.createElement("path",{d:"M16 16l4 4"})),plus:l.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:l.default.createElement("path",{d:"M5 12h14"}),trash:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),l.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),l.default.createElement("path",{d:"M14 6l4 4"})),close:l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:l.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M12 16V4"}),l.default.createElement("path",{d:"M7 9l5-5 5 5"}),l.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M12 4v12"}),l.default.createElement("path",{d:"M7 11l5 5 5-5"}),l.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:l.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),l.default.createElement("path",{d:"M20 4v4h-4"})),more:l.default.createElement(l.default.Fragment,null,l.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),l.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),l.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M9 8H4v5"}),l.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M15 8h5v5"}),l.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),map:l.default.createElement(l.default.Fragment,null,l.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),l.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:l.default.createElement(l.default.Fragment,null,l.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),l.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M9 15l6-6"}),l.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),l.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),l.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),play:l.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:l.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M10 6l-5 6 5 6"}),l.default.createElement("path",{d:"M5 12h14"}))};function W({name:e,size:i=16,...r}){let t=ha[e];return t?l.default.createElement("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...r},t):null}function q({name:e,label:i,size:r=16,...t}){return l.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":i,title:i,...t},l.default.createElement(W,{name:e,size:r}))}function B({variant:e="ghost",size:i,icon:r,children:t,...o}){return l.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${i==="sm"?" cf-btn--sm":""}`,...o},r?l.default.createElement(W,{name:r,size:14}):null,t)}function de({title:e,children:i,footer:r,onClose:t,wide:o}){return l.default.useEffect(()=>{let s=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[t]),l.default.createElement("div",{className:"cf-scrim",onPointerDown:s=>{s.target===s.currentTarget&&t()}},l.default.createElement("div",{className:`cf-dialog${o?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},l.default.createElement("header",{className:"cf-dialog-head"},l.default.createElement("h2",{className:"cf-dialog-title"},e),l.default.createElement(q,{name:"close",label:"\u5173\u95ED",onClick:t})),l.default.createElement("div",{className:"cf-dialog-body"},i,r?l.default.createElement("div",{className:"cf-dialog-foot"},r):null)))}function He({text:e,kind:i}){return l.default.createElement("p",{className:`cf-toast${i==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function le({icon:e="canvas",title:i,hint:r,action:t}){return l.default.createElement("div",{className:"cf-empty"},l.default.createElement("span",{className:"cf-empty-icon"},l.default.createElement(W,{name:e,size:28})),l.default.createElement("p",{className:"cf-empty-title"},i),r?l.default.createElement("p",{className:"cf-empty-hint"},r):null,t)}var Ye=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],Ne={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"};var me=[{id:"1:1",label:"1:1",w:1024,h:1024},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1280,h:720},{id:"9:16",label:"9:16",w:720,h:1280}],Ce=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],Me=["1k","2k","4k","\u81EA\u52A8"],We=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],ge=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],Ie=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],je=0;function F(e="x"){return je+=1,`${e}_${Date.now().toString(36)}${je.toString(36)}`}function Se(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:F("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}function ba(e){switch(e){case"image":return{w:240,h:268};case"audio":return{w:240,h:140};case"text":return{w:230,h:160};case"config":return{w:240,h:176};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function ye(e,i,r={}){let t=ba(e),o={id:F(e[0]),type:e,x:Math.round(i.x-t.w/2),y:Math.round(i.y-t.h/2),w:t.w,h:t.h,name:"",status:"idle",z:e==="group"?1:2,...r};return e==="text"&&(o.text=r.text??""),e==="config"&&(o.modelKey=r.modelKey??"",o.ratio=r.ratio??"1:1",o.count=r.count??1),e==="image"&&(o.prompt=r.prompt??"",o.ratio=r.ratio??"1:1",o.locked=r.locked??!0),e==="audio"&&(o.prompt=r.prompt??""),o}function Ee(e="openai"){let i=ge.find(r=>r.id===e)||ge[0];return{id:F("ch"),name:"",protocol:i.id,baseUrl:i.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function xa(e,i){return`${e}:${i}`}function he(e,i){if(!i)return null;let[r,...t]=i.split(":"),o=e.find(u=>u.id===r);if(!o)return null;let s=o.models.find(u=>u.id===t.join(":"));return s?{channel:o,model:s,label:s.label||s.id}:null}function be(e,i="image"){let r=[];for(let t of e)if(t.enabled)for(let o of t.models)o.enabled&&(o.caps||[]).includes(i)&&r.push({key:xa(t.id,o.id),model:o,channel:t});return r}var ya=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],wa=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function Ue(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:ya.map(e=>({...e})),promptSources:[],assets:wa.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8"},canvasCount:1},records:[],configTab:"channels",grid:"dots"}}function De(){let e=(w,f,y,I,x,z)=>{let $=ye(w,{x:f+I/2,y:y+x/2},{...z,w:I,h:x});return $.x=f,$.y=y,$},i=e("group",660,120,640,700,{name:"\u9713\u8679\u8857\u89D2"}),r=e("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),t=e("config",400,300,240,176,{ratio:"3:4",count:1}),o=e("image",700,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),s=e("image",980,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),u=e("image",700,510,240,268,{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),C=[{id:F("e"),from:r.id,to:t.id},{id:F("e"),from:t.id,to:o.id},{id:F("e"),from:t.id,to:s.id},{id:F("e"),from:t.id,to:u.id}];return{nodes:[i,r,t,o,s,u],edges:C}}function Xe(e,i,r,t){if(r===t)return!1;let o=e.find(u=>u.id===r),s=e.find(u=>u.id===t);return!(!o||!s||o.type==="config"&&s.type==="config"||o.type==="group"||s.type==="group"||i.some(u=>u.from===r&&u.to===t))}function Ve(e,i){let r=e.filter(w=>i.includes(w.id)&&w.type!=="group");if(!r.length)return null;let t=44,o=Math.min(...r.map(w=>w.x))-t,s=Math.min(...r.map(w=>w.y))-t-34,u=Math.max(...r.map(w=>w.x+w.w))+t,C=Math.max(...r.map(w=>w.y+w.h))+t;return ye("group",{x:(o+u)/2,y:(s+C)/2},{w:Math.round(u-o),h:Math.round(C-s),name:"\u65B0\u5206\u7EC4",childIds:r.map(w=>w.id),x:Math.round(o),y:Math.round(s)})}function _e(e){return e.openCanvasId?"editor":e.view}function qe(e,i){return{...e,view:i,openCanvasId:null}}function Fe(e,i){return{...e,openCanvasId:i}}function Ge(e){return{...e,openCanvasId:null,view:"canvas"}}var h=fe(require("react"),1);var p=fe(require("react"),1);var ze=.1,Be=3,ka=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Je(){let e=p.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),i=p.default.useCallback(o=>{if(!o)return;let s=e.current;o.style.transform=`translate3d(${s.x}px, ${s.y}px, 0) scale(${s.s})`},[]),r=p.default.useCallback((o,s)=>{let u=e.current;u.raf=0;let C=.24,w=u.tx-u.x,f=u.ty-u.y,y=u.ts-u.s;if(Math.abs(w)<.2&&Math.abs(f)<.2&&Math.abs(y)<8e-4){u.x=u.tx,u.y=u.ty,u.s=u.ts,i(o),s?.();return}u.x+=w*C,u.y+=f*C,u.s+=y*C,i(o),s?.(),u.raf=requestAnimationFrame(()=>r(o,s))},[i]),t=p.default.useCallback((o,s,u,C,w)=>{let f=e.current;if(f.tx=s,f.ty=u,f.ts=Math.min(Be,Math.max(ze,C)),ka()){f.x=f.tx,f.y=f.ty,f.s=f.ts,f.raf&&cancelAnimationFrame(f.raf),f.raf=0,i(o),w?.();return}f.raf||(f.raf=requestAnimationFrame(()=>r(o,w)))},[i,r]);return p.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:i,moveTo:t}}function $e(e,i){if(!e||!i)return"";let r=e.x+e.w,t=e.y+e.h/2,o=i.x,s=i.y+i.h/2,u=Math.max(40,Math.abs(o-r)*.45);return`M ${r} ${t} C ${r+u} ${t}, ${o-u} ${s}, ${o} ${s}`}function Na({node:e}){let i=p.default.useRef(null);return p.default.useEffect(()=>{let r=i.current;if(!r)return;let t=r.getContext("2d"),o=480;r.width=o,r.height=o;let s=`${e.id}${e.prompt||""}`,u=7;for(let f=0;f<s.length;f++)u=(u*31+s.charCodeAt(f))%2147483647;let C=()=>(u=u*16807%2147483647)/2147483647;t.fillStyle="#141414",t.fillRect(0,0,o,o);let w=t.createRadialGradient(o*(.25+C()*.5),o*(.3+C()*.4),24,o/2,o/2,o*.8);w.addColorStop(0,"rgba(255,255,255,0.16)"),w.addColorStop(.5,"rgba(255,255,255,0.05)"),w.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=w,t.fillRect(0,0,o,o),t.strokeStyle="rgba(255,255,255,0.22)",t.lineWidth=1.5;for(let f=0;f<6;f++){let y=o*(.18+C()*.66);t.beginPath(),t.moveTo(0,y),t.lineTo(o,y+(C()-.5)*80),t.stroke()}t.strokeStyle="rgba(255,255,255,0.4)";for(let f=0;f<3;f++){let y=o*(.2+C()*.6),I=40+C()*90;t.beginPath(),C()<.5?t.arc(y,o*(.3+C()*.4),I,0,Math.PI*2):t.rect(y-I/2,o*(.3+C()*.4)-I/2,I,I),t.stroke()}},[e.id,e.prompt]),p.default.createElement("canvas",{ref:i,"aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function Ca({node:e,channels:i}){switch(e.type){case"image":return p.default.createElement("div",{className:"cf-node-media"},e.src?p.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):null,!e.src&&e.status==="running"?p.default.createElement("div",{className:"cf-node-void"},p.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):null,!e.src&&e.status!=="running"?p.default.createElement(Na,{node:e}):null,!e.src&&e.status==="failed"?p.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25"):null);case"audio":return p.default.createElement("div",{className:"cf-node-audio"},p.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(r,t)=>p.default.createElement("span",{key:t,style:{height:`${16+t*41%66}%`}}))),p.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return p.default.createElement("div",{className:"cf-node-text"},e.text?p.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):p.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":{let r=he(i,e.modelKey);return p.default.createElement("div",{className:"cf-node-config"},p.default.createElement("p",{className:"cf-node-config-row"},p.default.createElement("span",null,"\u6A21\u578B"),p.default.createElement("b",null,r?r.label:"\u672A\u9009\u62E9")),p.default.createElement("p",{className:"cf-node-config-row"},p.default.createElement("span",null,"\u6BD4\u4F8B"),p.default.createElement("b",null,e.ratio)),p.default.createElement("p",{className:"cf-node-config-row"},p.default.createElement("span",null,"\u5F20\u6570"),p.default.createElement("b",null,e.count)))}case"group":return null;default:return null}}function Qe({nodes:e,edges:i,selection:r,channels:t,grid:o,minimap:s,onSelection:u,onMove:C,onResize:w,onConnect:f,onRemoveEdge:y,onOpenNode:I,camera:x,camApi:z,showHint:$}){let N=p.default.useRef(null),P=p.default.useRef(null),{cam:g,moveTo:a}=z,[v,O]=p.default.useState({w:1200,h:700}),[R,Q]=p.default.useState(Math.round(g.current.s*100)),ae=p.default.useRef(null),Z=p.default.useRef(null),H=p.default.useRef(null),_=p.default.useRef(null),G=p.default.useRef(null),[U,ne]=p.default.useState(null),[te,J]=p.default.useState(null),[ee,re]=p.default.useState(!1),xe=p.default.useCallback(()=>z.apply(N.current),[z]);p.default.useEffect(()=>{let c=P.current;if(!c)return;let m=new ResizeObserver(()=>{let A=c.getBoundingClientRect();O({w:A.width,h:A.height})});m.observe(c);let S=c.getBoundingClientRect();return O({w:S.width,h:S.height}),()=>m.disconnect()},[]),p.default.useEffect(()=>{xe(),Q(Math.round(g.current.s*100))}),p.default.useEffect(()=>{let c=S=>{S.code==="Space"&&!/input|textarea/i.test(S.target.tagName)&&(re(!0),S.preventDefault())},m=S=>{S.code==="Space"&&re(!1)};return window.addEventListener("keydown",c),window.addEventListener("keyup",m),()=>{window.removeEventListener("keydown",c),window.removeEventListener("keyup",m)}},[]),p.default.useEffect(()=>{if(!x)return;let c=N.current;c&&a(c,x.x,x.y,x.s,()=>Q(Math.round(g.current.s*100)))},[x]);let ve=()=>P.current.getBoundingClientRect(),ie=(c,m)=>{let S=ve();return{x:(c-S.left-g.current.x)/g.current.s,y:(m-S.top-g.current.y)/g.current.s}},M=p.default.useCallback(()=>{let c=N.current;if(!c||!e.length)return;let m=72,S=Math.min(...e.map(V=>V.x))-m,A=Math.min(...e.map(V=>V.y))-m,L=Math.max(...e.map(V=>V.x+V.w))+m,oe=Math.max(...e.map(V=>V.y+V.h))+m,ce=Math.min(1.35,Math.max(ze,Math.min(v.w/(L-S),v.h/(oe-A))));a(c,m-S*ce,m-A*ce,ce,()=>Q(Math.round(g.current.s*100)))},[e,v,a,g]);p.default.useEffect(()=>{let c=setTimeout(M,80);return()=>clearTimeout(c)},[]);let X=c=>{let m=N.current;if(!m)return;let S=v.w/2,A=v.h/2,L=g.current,oe=(S-L.tx)/L.ts,ce=(A-L.ty)/L.ts,V=Math.min(Be,Math.max(ze,L.ts*c));a(m,S-oe*V,A-ce*V,V,()=>Q(Math.round(g.current.s*100)))},se=c=>{c.preventDefault();let m=ve(),S=c.clientX-m.left,A=c.clientY-m.top,L=g.current,oe=(S-L.tx)/L.ts,ce=(A-L.ty)/L.ts,V=Math.min(Be,Math.max(ze,L.ts*Math.exp(-c.deltaY*.0018)));a(N.current,S-oe*V,A-ce*V,V,()=>Q(Math.round(g.current.s*100)))},pe=c=>{if(c.button===1||ee){c.preventDefault(),ae.current={x:c.clientX,y:c.clientY,cx:g.current.tx,cy:g.current.ty},P.current.classList.add("is-grabbing"),P.current.setPointerCapture(c.pointerId);return}if(c.button!==0)return;let m=ie(c.clientX,c.clientY);_.current={x0:m.x,y0:m.y,additive:c.shiftKey},J({x:m.x,y:m.y,w:0,h:0}),P.current.setPointerCapture(c.pointerId)},ue=c=>{if(ae.current){let m=g.current;a(N.current,ae.current.cx+(c.clientX-ae.current.x),ae.current.cy+(c.clientY-ae.current.y),m.ts,()=>Q(Math.round(g.current.s*100)));return}if(Z.current){let m=ie(c.clientX,c.clientY);C(Z.current.ids,m.x-Z.current.p0.x,m.y-Z.current.p0.y),Z.current.p0=m;return}if(H.current){let m=ie(c.clientX,c.clientY),S=H.current,A=Math.max(140,Math.round(m.x-S.x)),L=S.locked?Math.round(A/S.ratio):Math.max(80,Math.round(m.y-S.y));w(S.id,A,L);return}if(_.current){let m=ie(c.clientX,c.clientY),S=_.current;J({x:Math.min(S.x0,m.x),y:Math.min(S.y0,m.y),w:Math.abs(m.x-S.x0),h:Math.abs(m.y-S.y0)});return}G.current&&ne({from:G.current,to:ie(c.clientX,c.clientY)})},we=c=>{if(ae.current){ae.current=null,P.current.classList.remove("is-grabbing");return}if(Z.current){Z.current=null;return}if(H.current){H.current=null;return}if(_.current){let m=_.current;_.current=null;let S=te;if(J(null),S&&(S.w>6||S.h>6)){let A=e.filter(L=>!(L.x>S.x+S.w||L.x+L.w<S.x||L.y>S.y+S.h||L.y+L.h<S.y));u(m.additive?[...new Set([...r,...A.map(L=>L.id)])]:A.map(L=>L.id))}else m.additive||u([]);return}if(G.current){let m=ie(c.clientX,c.clientY),S=e.find(A=>m.x>=A.x&&m.x<=A.x+A.w&&m.y>=A.y&&m.y<=A.y+A.h);S&&Xe(e,i,G.current,S.id)&&f(G.current,S.id),G.current=null,ne(null)}},b=(c,m)=>{if(c.stopPropagation(),ee||c.button===1)return;let S=c.shiftKey||c.metaKey||c.ctrlKey,A=r.includes(m.id),L;if(S?L=A?r.filter(V=>V!==m.id):[...r,m.id]:L=A?r:[m.id],u(L),S)return;let oe=ie(c.clientX,c.clientY),ce=m.type==="group"&&m.childIds?.length?[m.id,...m.childIds]:L.length>1?L:[m.id];Z.current={ids:ce,p0:oe},P.current.setPointerCapture(c.pointerId)},E=(c,m)=>{let[S,A]=(m.ratio||"1:1").split(":").map(Number);H.current={id:m.id,x:m.x,y:m.y,locked:m.locked!==!1,ratio:A/S},P.current.setPointerCapture(c.pointerId)},j=(c,m)=>{c.stopPropagation(),G.current=m.id,ne({from:m.id,to:ie(c.clientX,c.clientY)}),P.current.setPointerCapture(c.pointerId)},Y=p.default.useMemo(()=>Object.fromEntries(e.map(c=>[c.id,c])),[e]);return p.default.createElement("div",{className:"cf-board"},p.default.createElement("div",{className:`cf-stage ${o==="lines"?"cf-stage--lines":o==="blank"?"cf-stage--blank":"cf-stage--dots"}${ee?" is-grab":""}`,ref:P,onPointerDown:pe,onPointerMove:ue,onPointerUp:we,onPointerCancel:we,onWheel:se,style:{"--cf-grid":`${28*R/100}px`}},p.default.createElement("div",{className:"cf-world",ref:N},p.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},p.default.createElement("defs",null,p.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},p.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),i.map(c=>{let m=Y[c.from],S=Y[c.to];return!m||!S?null:p.default.createElement("g",{key:c.id,className:"cf-edge"},p.default.createElement("path",{d:$e(m,S),className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),p.default.createElement("path",{d:$e(m,S),className:"cf-edge-hit",onPointerDown:A=>{A.stopPropagation(),y(c.id)}},p.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),U?(()=>{let c=Y[U.from];return c?p.default.createElement("path",{d:$e(c,{x:U.to.x,y:U.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),e.map(c=>p.default.createElement("div",{key:c.id,className:`cf-node${r.includes(c.id)?" is-selected":""}${c.status==="running"?" is-running":""}${c.type==="group"?" is-group":""}`,"data-id":c.id,style:{left:c.x,top:c.y,width:c.w,height:c.h,zIndex:c.type==="group"?3:2},onPointerDown:m=>b(m,c)},c.type==="group"?p.default.createElement("div",{className:"cf-node-group-head"},p.default.createElement("span",null,c.name||"\u5206\u7EC4"),c.childIds?.length?p.default.createElement("span",{className:"cf-node-group-count"},c.childIds.length," \u4E2A\u8282\u70B9"):null):p.default.createElement(p.default.Fragment,null,p.default.createElement("div",{className:"cf-node-head"},p.default.createElement("span",{className:"cf-node-type"},Ne[c.type]),p.default.createElement("span",{className:"cf-node-name"},c.name||""),p.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:m=>j(m,c),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),p.default.createElement("div",{className:"cf-node-body",onDoubleClick:m=>{m.stopPropagation(),I(c)}},p.default.createElement(Ca,{node:c,channels:t}))),r.includes(c.id)&&c.type!=="group"?p.default.createElement("span",{className:"cf-node-handle",onPointerDown:m=>{m.stopPropagation(),E(m,c)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)),te&&te.w>4?p.default.createElement("div",{className:"cf-marquee",style:{left:te.x,top:te.y,width:te.w,height:te.h}}):null)),s?p.default.createElement(Ma,{nodes:e,cam:g.current,size:v,onJump:c=>a(N.current,v.w/2-c.x*g.current.s,v.h/2-c.y*g.current.s,g.current.s,()=>Q(Math.round(g.current.s*100)))}):null,p.default.createElement("div",{className:"cf-zoom"},p.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>X(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),p.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:R,"aria-label":"\u7F29\u653E",onChange:c=>{let m=N.current;if(!m)return;let S=Number(c.target.value)/100,A=g.current,L=v.w/2,oe=v.h/2;a(m,L-(L-A.tx)/A.s*S,oe-(oe-A.ty)/A.s*S,S,()=>Q(Math.round(g.current.s*100)))}}),p.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>X(1.25),"aria-label":"\u653E\u5927"},"+"),p.default.createElement("span",{className:"cf-zoom-num"},R,"%"),p.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:M},"\u9002\u5E94")),$?p.default.createElement("p",{className:"cf-editor-hint"},"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5"):null)}function Ma({nodes:e,cam:i,size:r,onJump:t}){if(!e.length)return null;let o=168,s=108,u=80,C=Math.min(...e.map(a=>a.x))-u,w=Math.min(...e.map(a=>a.y))-u,f=Math.max(...e.map(a=>a.x+a.w))+u,y=Math.max(...e.map(a=>a.y+a.h))+u,I=Math.max(1,f-C),x=Math.max(1,y-w),z=Math.min(o/I,s/x),$=(o-I*z)/2,N=(s-x*z)/2,P=a=>({x:(a.x-C)*z+$,y:(a.y-w)*z+N,w:a.w*z,h:a.h*z}),g={x:(-i.x/i.s-C)*z+$,y:(-i.y/i.s-w)*z+N,w:r.w/i.s*z,h:r.h/i.s*z};return p.default.createElement("svg",{className:"cf-minimap",viewBox:`0 0 ${o} ${s}`,width:o,height:s,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:a=>{let v=a.currentTarget.getBoundingClientRect(),O=(a.clientX-v.left)/v.width*o,R=(a.clientY-v.top)/v.height*s;t({x:C+(O-$)/z,y:w+(R-N)/z})}},e.filter(a=>a.type==="group").map(a=>{let v=P(a);return p.default.createElement("rect",{key:a.id,x:v.x,y:v.y,width:v.w,height:v.h,rx:3,className:"cf-mini-group"})}),e.filter(a=>a.type!=="group").map(a=>{let v=P(a);return p.default.createElement("rect",{key:a.id,x:v.x,y:v.y,width:Math.max(3,v.w),height:Math.max(3,v.h),rx:2,className:`cf-mini-node${a.type==="image"?" cf-mini-image":""}`})}),p.default.createElement("rect",{x:g.x,y:g.y,width:Math.max(6,g.w),height:Math.max(6,g.h),rx:2,className:"cf-mini-view"}))}function Ze({canvases:e,onOpen:i,onCreate:r,onRename:t,onDelete:o,onImport:s}){let[u,C]=h.default.useState(null),[w,f]=h.default.useState(null);return h.default.createElement("div",{className:"cf-page"},h.default.createElement("div",{className:"cf-page-inner"},h.default.createElement("div",{className:"cf-page-head"},h.default.createElement("div",null,h.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),h.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),h.default.createElement("div",{className:"cf-page-actions"},h.default.createElement(B,{icon:"upload",onClick:s},"\u5BFC\u5165\u753B\u5E03"),h.default.createElement(B,{variant:"primary",icon:"plus",onClick:r},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?h.default.createElement(le,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:h.default.createElement(B,{variant:"primary",icon:"plus",onClick:r},"\u65B0\u5EFA\u753B\u5E03")}):h.default.createElement("div",{className:"cf-card"},h.default.createElement("div",{className:"cf-list-head"},h.default.createElement("span",null,"\u540D\u79F0"),h.default.createElement("span",null,"\u5185\u5BB9"),h.default.createElement("span",null,"\u66F4\u65B0")),h.default.createElement("div",{className:"cf-canvas-list"},e.map(y=>h.default.createElement("div",{key:y.id,className:"cf-canvas-row"},h.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>i(y.id)},y.name||"\u672A\u547D\u540D\u753B\u5E03"),h.default.createElement("span",{className:"cf-canvas-meta"},y.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",y.edges.length," \u6761\u8FDE\u7EBF"),h.default.createElement("span",{className:"cf-canvas-row-actions"},h.default.createElement(q,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>C(y)}),h.default.createElement(q,{name:"trash",label:"\u5220\u9664",onClick:()=>f(y)}))))))),u?h.default.createElement(Sa,{canvas:u,onClose:()=>C(null),onSubmit:y=>{t(u.id,y),C(null)}}):null,w?h.default.createElement(de,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>f(null),footer:h.default.createElement(h.default.Fragment,null,h.default.createElement(B,{onClick:()=>f(null)},"\u53D6\u6D88"),h.default.createElement(B,{variant:"danger",onClick:()=>{o(w.id),f(null)}},"\u5220\u9664"))},h.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",w.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",w.nodes.length," \u4E2A\u8282\u70B9\u548C ",w.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function Sa({canvas:e,onClose:i,onSubmit:r}){let[t,o]=h.default.useState(e.name||"");return h.default.createElement(de,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:i,footer:h.default.createElement(h.default.Fragment,null,h.default.createElement(B,{onClick:i},"\u53D6\u6D88"),h.default.createElement(B,{variant:"primary",onClick:()=>r(t.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},h.default.createElement("label",{className:"cf-field"},h.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),h.default.createElement("input",{className:"cf-input",value:t,autoFocus:!0,onChange:s=>o(s.target.value),onKeyDown:s=>{s.key==="Enter"&&r(t.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var za=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"audio",label:"\u97F3\u9891",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"}];function Re({canvas:e,channels:i,defaults:r,onChange:t,onBack:o,say:s}){let u=Je(),{cam:C,moveTo:w}=u,[f,y]=h.default.useState([]),[I,x]=h.default.useState("select"),[z,$]=h.default.useState(""),[N,P]=h.default.useState(r?.ratio||"1:1"),[g,a]=h.default.useState(r?.count||1),[v,O]=h.default.useState(r?.modelKey||""),[R,Q]=h.default.useState(!1),[ae,Z]=h.default.useState(null),H=e.nodes,_=e.edges,G=H.filter(b=>f.includes(b.id)),U=G.length===1?G[0]:null,ne=be(i,"image"),te=he(i,v)||ne[0]||null;h.default.useEffect(()=>{U&&(U.type==="image"||U.type==="audio")&&($(U.prompt||""),U.ratio&&P(U.ratio))},[U?.id]);let J=b=>t({nodes:b,updatedAt:Date.now()}),ee=b=>t({edges:b,updatedAt:Date.now()}),re=(b,E)=>J(H.map(j=>j.id===b?{...j,...E}:j)),xe=(b,E,j)=>{let Y=new Set(b);J(H.map(K=>Y.has(K.id)?{...K,x:Math.round(K.x+E),y:Math.round(K.y+j)}:K))},ve=(b,E,j)=>re(b,{w:E,h:j}),ie=(b,E)=>ee([..._,{id:F("e"),from:b,to:E}]),M=b=>ee(_.filter(E=>E.id!==b)),X=b=>{let E=C.current,j={x:(window.innerWidth/2-E.tx)/E.s,y:(window.innerHeight/2-E.ty)/E.s},Y=ye(b,j,b==="config"?{modelKey:v||ne[0]?.key||"",ratio:N,count:g}:{});J([...H,Y]),y([Y.id]),s?.(`\u5DF2\u65B0\u5EFA${Ne[b]}\u8282\u70B9`)},se=()=>{let b=z.trim();if(!b)return;let E=U&&U.type==="image"?U:null;if(E){re(E.id,{prompt:b,status:"running",ratio:N}),setTimeout(()=>re(E.id,{status:"done"}),900),s?.("\u5F00\u59CB\u751F\u6210");return}let j=C.current,Y={x:(window.innerWidth/2-j.tx)/j.s,y:(window.innerHeight/2-j.ty)/j.s},K=Array.from({length:g},(c,m)=>ye("image",{x:Y.x+m*260,y:Y.y},{prompt:b,ratio:N,status:"running"}));J([...H,...K]),y(K.map(c=>c.id)),setTimeout(()=>{J(c=>c.map(m=>K.some(S=>S.id===m.id)?{...m,status:"done"}:m))},900),$(""),s?.("\u5F00\u59CB\u751F\u6210")},pe=()=>{let b=Ve(H,f);b&&(J([b,...H]),y([b.id]))},ue=()=>{let b=new Set(f);J(H.filter(E=>!b.has(E.id))),ee(_.filter(E=>!b.has(E.from)&&!b.has(E.to))),y([])},we=()=>{let b=H.filter(K=>f.includes(K.id));if(!b.length)return;let E={},j=b.map(K=>{let c=F(K.type[0]);return E[K.id]=c,{...K,id:c,x:K.x+40,y:K.y+40,status:"idle"}}),Y=_.filter(K=>E[K.from]&&E[K.to]).map(K=>({id:F("e"),from:E[K.from],to:E[K.to]}));J([...H,...j]),ee([..._,...Y]),y(j.map(K=>K.id))};return h.default.useEffect(()=>{let b=E=>{if(/input|textarea|select/i.test(E.target.tagName))return;let j=E.metaKey||E.ctrlKey;if(j&&E.key.toLowerCase()==="d"){E.preventDefault(),we();return}if(j&&E.key.toLowerCase()==="g"){E.preventDefault(),pe();return}if(E.key==="Delete"||E.key==="Backspace"){E.preventDefault(),ue();return}if(E.key==="Escape"){y([]);return}let Y=E.key.toLowerCase();Y==="v"&&x("select"),Y==="h"&&x("pan"),Y==="t"&&X("text"),Y==="i"&&X("image"),Y==="a"&&X("audio"),Y==="c"&&X("config"),Y==="g"&&X("group")};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[H,_,f,z,N,g,v]),h.default.createElement("div",{className:"cf-editor"},h.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},h.default.createElement(q,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:o}),h.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),za.map((b,E)=>b.sep?h.default.createElement("span",{key:`s${E}`,className:"cf-rail-sep","aria-hidden":"true"}):h.default.createElement("button",{key:b.id,type:"button",className:`cf-rail-btn${I===b.id?" is-on":""}`,title:`${b.label}  ${b.key}`,"aria-label":b.label,"aria-pressed":I===b.id,onClick:()=>{if(b.id==="focus"){Z({...C.current,s:C.current.s});return}if(["text","image","audio","config","group"].includes(b.id)){X(b.id);return}x(b.id)}},h.default.createElement(W,{name:b.icon,size:18})))),h.default.createElement("div",{className:"cf-editor-main"},h.default.createElement(Qe,{nodes:H,edges:_,selection:f,channels:i,grid:e.grid||"dots",minimap:!0,camera:ae,camApi:u,showHint:!G.length,onSelection:y,onMove:xe,onResize:ve,onConnect:ie,onRemoveEdge:M,onOpenNode:b=>{y([b.id]),$(b.prompt||b.text||"")}}),h.default.createElement("div",{className:"cf-composer"},h.default.createElement("textarea",{className:"cf-composer-input",value:z,placeholder:U?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:b=>$(b.target.value),onKeyDown:b=>{b.key==="Enter"&&(b.metaKey||b.ctrlKey)&&(b.preventDefault(),se())}}),h.default.createElement("div",{className:"cf-composer-bar"},h.default.createElement("div",{style:{position:"relative"}},h.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>Q(b=>!b)},h.default.createElement(W,{name:"sparkle",size:13}),h.default.createElement("span",null,te?te.label:"\u9009\u62E9\u6A21\u578B"),h.default.createElement(W,{name:"chevron",size:12})),R?h.default.createElement("div",{className:"cf-menu",style:{position:"absolute",bottom:"calc(100% + 6px)",left:0,width:280}},h.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),ne.length?ne.map(b=>h.default.createElement("button",{key:b.key,type:"button",className:`cf-menu-item${b.key===(v||ne[0]?.key)?" is-on":""}`,onClick:()=>{O(b.key),Q(!1)}},b.label," ",h.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",b.channel.name||b.channel.protocol))):h.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null),h.default.createElement("div",{className:"cf-chips"},me.map(b=>h.default.createElement("button",{key:b.id,type:"button",className:`cf-chip cf-chip--tag${N===b.id?" is-on":""}`,onClick:()=>P(b.id)},b.label))),h.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u5F20\u6570"},[1,2,4].map(b=>h.default.createElement("button",{key:b,type:"button",className:g===b?"is-on":"",onClick:()=>a(b)},b," \u5F20"))),h.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",onClick:se,disabled:!z.trim()},h.default.createElement(W,{name:"play",size:13}),"\u751F\u6210"),G.length?h.default.createElement("span",{style:{display:"inline-flex",gap:4}},h.default.createElement(q,{name:"link",label:"\u5305\u6210\u7EC4",onClick:pe}),h.default.createElement(q,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:ue})):null,h.default.createElement("span",{className:"cf-composer-hint"},"\u2318\u23CE \u751F\u6210")))))}var d=fe(require("react"),1);function ea({channels:e,defaults:i,records:r,prompt:t,onPrompt:o,onCreateRecord:s,onDeleteRecords:u,onLookupPrompts:C,say:w}){let f=o,[y,I]=d.default.useState(i?.ratio||"1:1"),[x,z]=d.default.useState(i?.quality||"\u81EA\u52A8"),[$,N]=d.default.useState(i?.resolution||"\u81EA\u52A8"),[P,g]=d.default.useState(i?.modelKey||""),[a,v]=d.default.useState(1024),[O,R]=d.default.useState(1024),[Q,ae]=d.default.useState(!0),[Z,H]=d.default.useState([]),[_,G]=d.default.useState(!1),[U,ne]=d.default.useState([]),[te,J]=d.default.useState(!1),ee=be(e,"image"),re=he(e,P)||ee[0]||null,xe=M=>{I(M);let X=me.find(se=>se.id===M);X&&(v(X.w),R(X.h))},ve=()=>{let M=t.trim();if(!M){w?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}let X=pe=>{let ue=Math.max(256,Math.min(4096,Math.round(pe)));return Q?Math.round(ue/16)*16:ue};G(!0);let se={id:`r${Date.now().toString(36)}`,prompt:M,model:re?re.label:"\u672A\u9009\u62E9\u6A21\u578B",ratio:y,size:`${X(a)}x${X(O)}`,quality:x,resolution:$,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};s?.(se),setTimeout(()=>{G(!1),ne(pe=>[{...se,id:`img${Date.now().toString(36)}`},...pe]),w?.("\u751F\u6210\u5B8C\u6210")},1100)},ie=M=>H(X=>X.includes(M)?X.filter(se=>se!==M):[...X,M]);return d.default.createElement("div",{className:"cf-page"},d.default.createElement("div",{className:"cf-page-inner"},d.default.createElement("div",{className:"cf-studio"},d.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},d.default.createElement("div",{className:"cf-card"},d.default.createElement("div",{className:"cf-card-head"},d.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),d.default.createElement("span",{className:"cf-card-count"},r.length)),d.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)"}},d.default.createElement("div",{style:{display:"flex",gap:6}},d.default.createElement(B,{size:"sm",icon:"plus",onClick:()=>f("")},"\u65B0\u5EFA"),d.default.createElement(B,{size:"sm",onClick:()=>H(r.map(M=>M.id))},"\u5168\u9009"),d.default.createElement(B,{size:"sm",variant:"danger",disabled:!Z.length,onClick:()=>{u?.(Z),H([])}},"\u5220\u9664")),r.length===0?d.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):d.default.createElement("div",{className:"cf-record-list"},r.map(M=>d.default.createElement("div",{key:M.id,style:{display:"flex",alignItems:"center",gap:6}},d.default.createElement("input",{type:"checkbox",checked:Z.includes(M.id),onChange:()=>ie(M.id),"aria-label":`\u9009\u62E9 ${M.prompt}`}),d.default.createElement("button",{type:"button",className:"cf-record",style:{flex:1,minWidth:0},onClick:()=>{f(M.prompt),I(M.ratio)}},d.default.createElement("span",{className:"cf-record-prompt"},M.prompt),d.default.createElement("span",{className:"cf-record-meta"},M.model," \xB7 ",M.size," \xB7 ",M.at)))))))),d.default.createElement("div",{className:"cf-studio-col"},d.default.createElement("div",{className:"cf-card"},d.default.createElement("div",{className:"cf-card-head"},d.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),d.default.createElement("div",{className:"cf-card-body cf-form"},d.default.createElement("div",{className:"cf-form-row"},d.default.createElement("div",{className:"cf-form-head"},d.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),d.default.createElement("div",{className:"cf-form-head-actions"},d.default.createElement(B,{size:"sm",icon:"book",onClick:()=>C?.()},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),d.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:t,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:M=>f(M.target.value)})),d.default.createElement("div",{className:"cf-form-row"},d.default.createElement("div",{className:"cf-form-head"},d.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),d.default.createElement("div",{className:"cf-form-head-actions"},d.default.createElement(B,{size:"sm",onClick:()=>w?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u526A\u5207\u677F"),d.default.createElement(B,{size:"sm",icon:"upload",onClick:()=>w?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u4E0A\u4F20"))),d.default.createElement("div",{className:"cf-drop"},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC")),d.default.createElement("div",{className:"cf-form-row"},d.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),d.default.createElement("div",{style:{position:"relative"}},d.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>J(M=>!M)},d.default.createElement(W,{name:"sparkle",size:13}),d.default.createElement("span",null,re?re.label:"\u9009\u62E9\u6A21\u578B"),d.default.createElement(W,{name:"chevron",size:12})),te?d.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},ee.length?ee.map(M=>d.default.createElement("button",{key:M.key,type:"button",className:`cf-menu-item${M.key===(P||ee[0]?.key)?" is-on":""}`,onClick:()=>{g(M.key),J(!1)}},M.label," ",d.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",M.channel.name||M.channel.protocol))):d.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),d.default.createElement("div",{className:"cf-form-row"},d.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),d.default.createElement("div",{className:"cf-chips"},Ce.map(M=>d.default.createElement("button",{key:M,type:"button",className:`cf-chip${x===M?" is-on":""}`,onClick:()=>z(M)},M)))),d.default.createElement("div",{className:"cf-form-row"},d.default.createElement("div",{className:"cf-form-head"},d.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),d.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},d.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),d.default.createElement("input",{type:"checkbox",checked:Q,onChange:M=>ae(M.target.checked)}))),d.default.createElement("div",{className:"cf-size-row"},d.default.createElement("input",{className:"cf-input cf-input--num",value:a,"aria-label":"\u5BBD",onChange:M=>v(Number(M.target.value.replace(/\D/g,""))||0)}),d.default.createElement(W,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),d.default.createElement("input",{className:"cf-input cf-input--num",value:O,"aria-label":"\u9AD8",onChange:M=>R(Number(M.target.value.replace(/\D/g,""))||0)})),d.default.createElement("div",{className:"cf-chips"},me.map(M=>d.default.createElement("button",{key:M.id,type:"button",className:`cf-chip cf-chip--tag${y===M.id?" is-on":""}`,onClick:()=>xe(M.id)},M.label)))),d.default.createElement("div",{className:"cf-form-row"},d.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),d.default.createElement("div",{className:"cf-chips"},Me.map(M=>d.default.createElement("button",{key:M,type:"button",className:`cf-chip${$===M?" is-on":""}`,onClick:()=>N(M)},M)))),d.default.createElement(B,{variant:"primary",icon:_?"refresh":"play",onClick:ve,disabled:_||!t.trim()},_?"\u751F\u6210\u4E2D\u2026":"\u5F00\u59CB\u751F\u6210")))),d.default.createElement("div",{className:"cf-studio-col"},d.default.createElement("div",{className:"cf-card"},d.default.createElement("div",{className:"cf-card-head"},d.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),d.default.createElement("span",{className:"cf-card-count"},U.length)),d.default.createElement("div",{className:"cf-card-body"},U.length===0?d.default.createElement(le,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):d.default.createElement("div",{className:"cf-results"},U.map(M=>d.default.createElement(Ia,{key:M.id,record:M})))))))))}function Ia({record:e}){let i=d.default.useRef(null);return d.default.useEffect(()=>{let r=i.current;if(!r)return;let t=320;r.width=t,r.height=t;let o=r.getContext("2d"),s=11;for(let w of`${e.prompt}${e.id}`)s=(s*31+w.charCodeAt(0))%2147483647;let u=()=>(s=s*16807%2147483647)/2147483647;o.fillStyle="#141414",o.fillRect(0,0,t,t);let C=o.createRadialGradient(t*u(),t*u(),20,t/2,t/2,t*.7);C.addColorStop(0,"rgba(255,255,255,0.18)"),C.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=C,o.fillRect(0,0,t,t),o.strokeStyle="rgba(255,255,255,0.3)",o.lineWidth=1.4;for(let w=0;w<5;w++){let f=t*(.2+u()*.6);o.beginPath(),o.moveTo(0,f),o.lineTo(t,f+(u()-.5)*60),o.stroke()}},[e.id,e.prompt]),d.default.createElement("figure",{className:"cf-result",title:`${e.prompt}
${e.model} \xB7 ${e.size}`},d.default.createElement("canvas",{ref:i,"aria-label":e.prompt}))}var D=fe(require("react"),1);var Te=6;function aa({prompts:e,sources:i,onUse:r,onBack:t,returnTo:o}){let[s,u]=D.default.useState(""),[C,w]=D.default.useState("\u5168\u90E8"),[f,y]=D.default.useState("\u5168\u90E8"),[I,x]=D.default.useState(Te),z=["\u5168\u90E8",...new Set(e.map(a=>a.category).filter(Boolean))],$=["\u5168\u90E8",...new Set(e.flatMap(a=>a.tags||[]))],N=e.filter(a=>{if(C!=="\u5168\u90E8"&&a.category!==C||f!=="\u5168\u90E8"&&!(a.tags||[]).includes(f))return!1;if(!s)return!0;let v=s.toLowerCase();return(a.title||"").toLowerCase().includes(v)||(a.text||"").toLowerCase().includes(v)||(a.tags||[]).some(O=>O.toLowerCase().includes(v))}),P=N.slice(0,I),g=N.length>P.length;return D.default.useEffect(()=>{x(Te)},[s,C,f]),D.default.createElement("div",{className:"cf-page"},D.default.createElement("div",{className:"cf-page-inner"},D.default.createElement("div",{className:"cf-title-center"},D.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),D.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD"),o&&t?D.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:t},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),D.default.createElement("div",{className:"cf-split"},D.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},D.default.createElement("div",{className:"cf-filter-group"},D.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),D.default.createElement("div",{className:"cf-filter-chips"},z.map(a=>D.default.createElement("button",{key:a,type:"button",className:`cf-chip cf-chip--tag${C===a?" is-on":""}`,onClick:()=>w(a)},a)))),D.default.createElement("div",{className:"cf-filter-group"},D.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),D.default.createElement("div",{className:"cf-filter-chips"},$.map(a=>D.default.createElement("button",{key:a,type:"button",className:`cf-chip cf-chip--tag${f===a?" is-on":""}`,onClick:()=>y(a)},a))))),D.default.createElement("div",null,D.default.createElement("div",{className:"cf-search"},D.default.createElement(W,{name:"search",size:15}),D.default.createElement("input",{className:"cf-input",value:s,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u6216\u6807\u7B7E",onChange:a=>u(a.target.value)})),i.length===0?D.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u63D0\u793A\u8BCD\u6765\u6E90\u3002\u5230\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u540E\uFF0C\u8FD9\u91CC\u4F1A\u5206\u9875\u52A0\u8F7D\u66F4\u591A\u3002"):null,N.length===0?D.default.createElement(le,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:s||C!=="\u5168\u90E8"||f!=="\u5168\u90E8"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u6765\u6E90\u3002"}):D.default.createElement(D.default.Fragment,null,D.default.createElement("ul",{className:"cf-prompt-grid"},P.map(a=>D.default.createElement("li",{key:a.id,className:"cf-prompt-card"},D.default.createElement("span",{className:"cf-prompt-title"},a.title),D.default.createElement("span",{className:"cf-prompt-text"},a.text),D.default.createElement("span",{className:"cf-prompt-tags"},a.category?D.default.createElement("span",{className:"cf-tag"},a.category):null,(a.tags||[]).map(v=>D.default.createElement("span",{key:v,className:"cf-tag"},v))),D.default.createElement("span",{style:{display:"flex",gap:6,marginTop:4}},D.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>r(a)},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"))))),g?D.default.createElement("div",{className:"cf-more"},D.default.createElement(B,{onClick:()=>x(a=>a+Te)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",N.length-P.length," \u6761\uFF09")):D.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))))}var k=fe(require("react"),1);function ta({assets:e,onSave:i,onDelete:r,onImport:t,say:o}){let[s,u]=k.default.useState(""),[C,w]=k.default.useState("all"),[f,y]=k.default.useState(null),[I,x]=k.default.useState(null),z=e.filter(N=>{if(C!=="all"&&N.kind!==C)return!1;if(!s)return!0;let P=s.toLowerCase();return[N.title,N.text,N.source,...N.tags||[]].filter(Boolean).some(g=>String(g).toLowerCase().includes(P))});return k.default.createElement("div",{className:"cf-page"},k.default.createElement("div",{className:"cf-page-inner"},k.default.createElement("div",{className:"cf-page-head"},k.default.createElement("div",null,k.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),k.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),k.default.createElement("div",{className:"cf-page-actions"},k.default.createElement(B,{icon:"upload",onClick:t},"\u5BFC\u5165\u8D44\u4EA7"),k.default.createElement(B,{icon:"download",onClick:()=>{let N=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),P=document.createElement("a");P.href=URL.createObjectURL(N),P.download="my-assets.json",P.click(),setTimeout(()=>URL.revokeObjectURL(P.href),2e3),o?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),k.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>y({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),k.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},k.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},k.default.createElement("div",{className:"cf-filter-group"},k.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),k.default.createElement("div",{className:"cf-filter-chips"},Ie.map(N=>k.default.createElement("button",{key:N.id,type:"button",className:`cf-chip cf-chip--tag${C===N.id?" is-on":""}`,onClick:()=>w(N.id)},N.label))))),k.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},k.default.createElement(W,{name:"search",size:15}),k.default.createElement("input",{className:"cf-input",value:s,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:N=>u(N.target.value)}))),z.length===0?k.default.createElement(le,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:s||C!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:k.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>y({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):k.default.createElement("div",{className:"cf-asset-grid"},z.map(N=>k.default.createElement("div",{key:N.id,className:"cf-asset"},k.default.createElement("div",{className:"cf-asset-thumb"},N.kind==="image"&&N.cover?k.default.createElement("img",{src:N.cover,alt:N.title}):k.default.createElement(W,{name:N.kind==="image"?"image":N.kind==="video"?"play":"text",size:22})),k.default.createElement("div",{className:"cf-asset-body"},k.default.createElement("span",{className:"cf-asset-title"},N.title||"\u672A\u547D\u540D\u8D44\u4EA7"),k.default.createElement("span",{className:"cf-asset-meta"},N.source||"\u6765\u6E90\u672A\u6CE8\u660E",N.tags?.length?` \xB7 ${N.tags.join(" / ")}`:""),k.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},k.default.createElement(q,{name:"edit",label:"\u7F16\u8F91",onClick:()=>y({...N})}),k.default.createElement(q,{name:"trash",label:"\u5220\u9664",onClick:()=>x(N)}))))))),f?k.default.createElement(Ea,{asset:f,onClose:()=>y(null),onSave:N=>{let P=N.id?e.map(g=>g.id===N.id?N:g):[...e,{...N,id:F("a")}];i(P),y(null),o?.(N.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,I?k.default.createElement(de,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>x(null),footer:k.default.createElement(k.default.Fragment,null,k.default.createElement(B,{onClick:()=>x(null)},"\u53D6\u6D88"),k.default.createElement(B,{variant:"danger",onClick:()=>{r(I.id),x(null),o?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},k.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",I.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function Ea({asset:e,onClose:i,onSave:r}){let[t,o]=k.default.useState({...e,tags:e.tags||[]}),s=(f,y)=>o(I=>({...I,[f]:y})),[u,C]=k.default.useState(""),w=t.title?.trim()&&(t.kind!=="text"||t.text?.trim());return k.default.createElement(de,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:i,footer:k.default.createElement(k.default.Fragment,null,k.default.createElement(B,{onClick:i},"\u53D6\u6D88"),k.default.createElement(B,{variant:"primary",disabled:!w,onClick:()=>r({...t,title:t.title.trim()})},"\u4FDD\u5B58"))},k.default.createElement("div",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),k.default.createElement("div",{className:"cf-chips"},Ie.filter(f=>f.id!=="all").map(f=>k.default.createElement("button",{key:f.id,type:"button",className:`cf-chip${t.kind===f.id?" is-on":""}`,onClick:()=>s("kind",f.id)},f.label)))),k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),k.default.createElement("input",{className:"cf-input",value:t.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:f=>s("title",f.target.value)})),t.kind==="text"?k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),k.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:t.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:f=>s("text",f.target.value)})):k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),k.default.createElement("input",{className:"cf-input",value:t.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:f=>s("cover",f.target.value)})),k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),k.default.createElement("input",{className:"cf-input",value:u,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:f=>C(f.target.value),onKeyDown:f=>{if(f.key!=="Enter")return;f.preventDefault();let y=u.trim();y&&(s("tags",[...new Set([...t.tags||[],y])]),C(""))}}),t.tags?.length?k.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},t.tags.map(f=>k.default.createElement("button",{key:f,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>s("tags",t.tags.filter(y=>y!==f)),title:"\u70B9\u51FB\u79FB\u9664"},f," \xD7"))):null),k.default.createElement("label",{className:"cf-field"},k.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),k.default.createElement("input",{className:"cf-input",value:t.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:f=>s("source",f.target.value)})))}var n=fe(require("react"),1);var Da=[{id:"channels",label:"\u6E20\u9053"},{id:"proxy",label:"\u672C\u5730\u4EE3\u7406"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"},{id:"webdav",label:"WebDAV"},{id:"storage",label:"\u672C\u5730\u5B58\u50A8"}];function ia({tab:e,onTab:i,channels:r,onChannels:t,defaults:o,onDefaults:s,promptSources:u,onPromptSources:C,say:w}){let[f,y]=n.default.useState(null),[I,x]=n.default.useState(null),[z,$]=n.default.useState({name:"",url:""});return n.default.createElement("div",{className:"cf-page"},n.default.createElement("div",{className:"cf-page-inner"},n.default.createElement("div",{className:"cf-page-head"},n.default.createElement("div",null,n.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),n.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u6A21\u578B\u9009\u62E9\u3001\u540C\u6B65\u4E0E\u672C\u5730\u5B58\u50A8"))),n.default.createElement("div",{className:"cf-config-notice"},n.default.createElement("span",null,"JSON \u6587\u4EF6\u5305\u542B API Key \u548C WebDAV \u51ED\u636E\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),n.default.createElement("span",{className:"cf-config-notice-actions"},n.default.createElement(B,{size:"sm",icon:"upload",onClick:()=>{let g=document.createElement("input");g.type="file",g.accept=".json,application/json",g.onchange=async()=>{let a=g.files?.[0];if(a)try{let v=JSON.parse(await a.text());Array.isArray(v.channels)&&t(v.channels),v.defaults&&s(v.defaults),Array.isArray(v.promptSources)&&C(v.promptSources),w?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{w?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},g.click()}},"\u5BFC\u5165\u914D\u7F6E"),n.default.createElement(B,{size:"sm",icon:"download",onClick:()=>{let g={version:1,channels:r,defaults:o,promptSources:u},a=new Blob([JSON.stringify(g,null,2)],{type:"application/json"}),v=document.createElement("a");v.href=URL.createObjectURL(a),v.download="chunfeng-config.json",v.click(),setTimeout(()=>URL.revokeObjectURL(v.href),2e3),w?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),n.default.createElement("div",{className:"cf-tabs",role:"tablist"},Da.map(g=>n.default.createElement("button",{key:g.id,type:"button",role:"tab","aria-selected":e===g.id,className:`cf-tab${e===g.id?" is-on":""}`,onClick:()=>i(g.id)},g.label))),e==="channels"?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"cf-section-head"},n.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u8C03\u7528\u811A\u672C\u3002"),n.default.createElement(B,{icon:"plus",onClick:()=>y(Ee())},"\u65B0\u589E\u6E20\u9053")),r.length===0?n.default.createElement(le,{icon:"sliders",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:n.default.createElement(B,{variant:"primary",icon:"plus",onClick:()=>y(Ee())},"\u65B0\u589E\u6E20\u9053")}):n.default.createElement("div",{className:"cf-channel-list"},r.map(g=>n.default.createElement("div",{key:g.id,className:"cf-channel"},n.default.createElement("div",{className:"cf-channel-main"},n.default.createElement("span",{className:"cf-channel-name"},g.name||"\u672A\u547D\u540D\u6E20\u9053"),n.default.createElement("span",{className:"cf-channel-meta"},ge.find(a=>a.id===g.protocol)?.label||g.protocol," \xB7 ",g.models.length," \u4E2A\u6A21\u578B"," \xB7 ",g.baseUrl,g.keyHint?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${g.keyHint}`:" \xB7 \u672A\u586B\u5BC6\u94A5")),n.default.createElement("span",{className:"cf-channel-actions"},n.default.createElement(q,{name:"edit",label:"\u7F16\u8F91",onClick:()=>y({...g})}),n.default.createElement(q,{name:"trash",label:"\u5220\u9664",onClick:()=>x(g)})))))):null,e==="defaults"?n.default.createElement($a,{channels:r,defaults:o,onDefaults:s}):null,e==="sources"?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"cf-section-head"},n.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B\u6765\u6E90\u5206\u9875\u52A0\u8F7D\u3002\u7559\u7A7A\u65F6\u53EA\u663E\u793A\u5185\u7F6E\u63D0\u793A\u8BCD\u3002")),n.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},n.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},n.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:z.name,onChange:g=>$(a=>({...a,name:g.target.value}))}),n.default.createElement("input",{className:"cf-input",placeholder:"\u63D0\u793A\u8BCD\u6765\u6E90\u5730\u5740\uFF08JSON\uFF09",value:z.url,onChange:g=>$(a=>({...a,url:g.target.value}))}),n.default.createElement(B,{variant:"primary",disabled:!z.url.trim(),onClick:()=>{C([...u,{id:F("src"),name:z.name.trim()||"\u672A\u547D\u540D\u6765\u6E90",url:z.url.trim()}]),$({name:"",url:""}),w?.("\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),u.length===0?n.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002"):n.default.createElement("div",{style:{display:"grid",gap:2}},u.map(g=>n.default.createElement("div",{key:g.id,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},n.default.createElement("span",{style:{fontSize:13}},g.name),n.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},g.url),n.default.createElement(q,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>C(u.filter(a=>a.id!==g.id)),style:{marginInlineStart:"auto"}})))))):null,e==="proxy"?n.default.createElement(Pe,{title:"\u672C\u5730\u4EE3\u7406",desc:"\u8BA9\u51FA\u56FE\u8BF7\u6C42\u7ECF\u8FC7\u672C\u673A\u4EE3\u7406\u3002",items:["\u4EE3\u7406\u5730\u5740\uFF08http://127.0.0.1:7890\uFF09","\u4EC5\u5BF9\u6307\u5B9A\u6E20\u9053\u751F\u6548","\u8FDE\u901A\u6027\u6D4B\u8BD5"]}):null,e==="webdav"?n.default.createElement(Pe,{title:"WebDAV",desc:"\u628A\u753B\u5E03\u548C\u8D44\u4EA7\u540C\u6B65\u5230\u81EA\u5DF1\u7684 WebDAV\u3002",items:["\u670D\u52A1\u5668\u5730\u5740","\u8D26\u53F7\u4E0E\u5BC6\u7801","\u540C\u6B65\u8303\u56F4\uFF1A\u753B\u5E03 / \u8D44\u4EA7 / \u63D0\u793A\u8BCD"]}):null,e==="storage"?n.default.createElement(Pe,{title:"\u672C\u5730\u5B58\u50A8",desc:"\u6570\u636E\u76EE\u524D\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\uFF1B\u63A5\u4E0A Host \u540E\u4F1A\u843D\u5230 ~/.dsh/dsh-chunfeng-image/\u3002",items:["\u753B\u5E03\u4E0E\u8282\u70B9","\u751F\u6210\u7684\u56FE\u7247\u6587\u4EF6","\u914D\u7F6E\u6587\u4EF6\uFF08\u542B\u5BC6\u94A5\u51ED\u8BC1\uFF09"]}):null),f?n.default.createElement(Ba,{channel:f,onClose:()=>y(null),onSave:g=>{let a=r.some(v=>v.id===g.id);t(a?r.map(v=>v.id===g.id?g:v):[...r,g]),y(null),w?.(a?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,I?n.default.createElement(de,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>x(null),footer:n.default.createElement(n.default.Fragment,null,n.default.createElement(B,{onClick:()=>x(null)},"\u53D6\u6D88"),n.default.createElement(B,{variant:"danger",onClick:()=>{t(r.filter(g=>g.id!==I.id)),x(null),w?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},n.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",I.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",I.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function $a({channels:e,defaults:i,onDefaults:r}){let t=be(e,"image"),o=s=>r({...i,image:{...i.image,...s}});return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"cf-section-head"},n.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),n.default.createElement("div",{className:"cf-defaults"},n.default.createElement("label",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),n.default.createElement("select",{className:"cf-input",value:i.image.modelKey||"",onChange:s=>o({modelKey:s.target.value})},n.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),t.map(s=>n.default.createElement("option",{key:s.key,value:s.key},s.label," \xB7 ",s.channel.name||s.channel.protocol))),t.length===0?n.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),n.default.createElement("div",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),n.default.createElement("div",{className:"cf-chips"},me.map(s=>n.default.createElement("button",{key:s.id,type:"button",className:`cf-chip${i.image.ratio===s.id?" is-on":""}`,onClick:()=>o({ratio:s.id})},s.label)))),n.default.createElement("div",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),n.default.createElement("div",{className:"cf-chips"},Ce.map(s=>n.default.createElement("button",{key:s,type:"button",className:`cf-chip${i.image.quality===s?" is-on":""}`,onClick:()=>o({quality:s})},s)))),n.default.createElement("div",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),n.default.createElement("div",{className:"cf-chips"},Me.map(s=>n.default.createElement("button",{key:s,type:"button",className:`cf-chip${i.image.resolution===s?" is-on":""}`,onClick:()=>o({resolution:s})},s)))),n.default.createElement("div",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),n.default.createElement("div",{className:"cf-chips"},[1,2,4].map(s=>n.default.createElement("button",{key:s,type:"button",className:`cf-chip${i.image.count===s?" is-on":""}`,onClick:()=>o({count:s})},s," \u5F20"))))))}function Pe({title:e,desc:i,items:r}){return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"cf-section-head"},n.default.createElement("p",{className:"cf-section-desc"},i)),n.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)"}},n.default.createElement("p",{style:{fontSize:13,fontWeight:500,marginBottom:8}},e),n.default.createElement("ul",{style:{display:"grid",gap:6}},r.map(t=>n.default.createElement("li",{key:t,style:{fontSize:12,color:"var(--cf-muted)",display:"flex",gap:8,alignItems:"center"}},n.default.createElement("span",{style:{width:4,height:4,borderRadius:999,background:"var(--cf-caption)"},"aria-hidden":"true"}),t))),n.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",marginTop:12}},"\u8FD9\u4E00\u7248\u5148\u628A\u4F4D\u7F6E\u7559\u597D\uFF0C\u63A5\u5165 Host \u540E\u518D\u586B\u3002")))}function Ba({channel:e,onClose:i,onSave:r}){let[t,o]=n.default.useState({...e}),[s,u]=n.default.useState(""),[C,w]=n.default.useState(""),f=(x,z)=>o($=>({...$,[x]:z})),y=()=>{let x=C.trim();if(x){if(t.models.some(z=>z.id===x)){w("");return}f("models",[...t.models,{id:x,label:x,caps:Ta(x),enabled:!0,source:"manual"}]),w("")}},I=(x,z)=>{f("models",t.models.map($=>{if($.id!==x)return $;let N=$.caps||[];return{...$,caps:N.includes(z)?N.filter(P=>P!==z):[...N,z]}}))};return n.default.createElement(de,{title:e.id&&e.models?"\u7F16\u8F91\u6E20\u9053":"\u65B0\u589E\u6E20\u9053",wide:!0,onClose:i,footer:n.default.createElement(n.default.Fragment,null,n.default.createElement(B,{onClick:i},"\u53D6\u6D88"),n.default.createElement(B,{variant:"primary",disabled:!t.baseUrl.trim(),onClick:()=>{let x=s.trim()?s.trim().slice(-4):t.keyHint;r({...t,keyHint:x||"",hasKey:!!s.trim()||t.hasKey})}},"\u4FDD\u5B58"))},n.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},n.default.createElement("label",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),n.default.createElement("input",{className:"cf-input",value:t.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:x=>f("name",x.target.value)})),n.default.createElement("label",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),n.default.createElement("select",{className:"cf-input",value:t.protocol,onChange:x=>{let z=ge.find($=>$.id===x.target.value);f("protocol",x.target.value),z&&f("baseUrl",z.baseUrl)}},ge.map(x=>n.default.createElement("option",{key:x.id,value:x.id},x.label))))),n.default.createElement("label",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),n.default.createElement("input",{className:"cf-input",value:t.baseUrl,placeholder:"https://api.example.com/v1",onChange:x=>f("baseUrl",x.target.value)})),n.default.createElement("label",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"API Key",t.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${t.keyHint}\uFF09`:""),n.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:s,placeholder:t.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:x=>u(x.target.value)}),n.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),n.default.createElement("div",{className:"cf-field"},n.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),n.default.createElement("div",{style:{display:"flex",gap:6}},n.default.createElement("input",{className:"cf-input",value:C,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:x=>w(x.target.value),onKeyDown:x=>{x.key==="Enter"&&(x.preventDefault(),y())}}),n.default.createElement(B,{onClick:y,disabled:!C.trim()},"\u6DFB\u52A0")),t.models.length===0?n.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u4FDD\u5B58\u6E20\u9053\u540E\u53EF\u4EE5\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u5728\u8FD9\u91CC\u624B\u52A8\u6DFB\u52A0\u3002"):n.default.createElement("div",{style:{display:"grid",gap:6,marginTop:4}},t.models.map(x=>n.default.createElement("div",{key:x.id,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",padding:"8px 10px",borderRadius:"var(--cf-r-sm)",boxShadow:"inset 0 0 0 var(--cf-hair) var(--cf-line)"}},n.default.createElement("span",{style:{fontSize:12,minWidth:120}},x.label||x.id),n.default.createElement("span",{style:{display:"flex",gap:4,marginInlineStart:"auto"}},We.map(z=>n.default.createElement("button",{key:z.id,type:"button",className:`cf-chip cf-chip--tag${(x.caps||[]).includes(z.id)?" is-on":""}`,onClick:()=>I(x.id,z.id)},z.label))),n.default.createElement(q,{name:"trash",label:`\u79FB\u9664 ${x.id}`,onClick:()=>f("models",t.models.filter(z=>z.id!==x.id))}))))),n.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u81EA\u52A8\u62C9\u53D6\u6A21\u578B\u4E0E\u300C\u5B9E\u6D4B\u51FA\u56FE\u300D\u4F1A\u5728\u63A5\u4E0A Host \u540E\u53EF\u7528\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u624B\u52A8\u6DFB\u52A0\u5E76\u52FE\u9009\u80FD\u529B\u3002"))}function Ta(e){let i=e.toLowerCase();return/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(i)?["image"]:/veo|kling|sora|runway|video/.test(i)?["video"]:/tts|audio|speech|whisper|music/.test(i)?["audio"]:["text"]}var na="dsh-chunfeng-image:state:v2";function Pa(){try{let e=localStorage.getItem(na);if(!e)return null;let i=JSON.parse(e);return i&&typeof i=="object"?i:null}catch{return null}}function ra(){let[e,i]=T.default.useState(()=>{let a=Ue(),v=Pa(),O=v?{...a,...v}:a;return!O.canvases.length&&!v&&(O.canvases=[{...Se("\u9713\u8679\u8857\u89D2"),...De()}],O.openCanvasId=null),O}),[r,t]=T.default.useState(""),[o,s]=T.default.useState(null),[u,C]=T.default.useState(null),w=T.default.useRef(0);T.default.useEffect(()=>{try{localStorage.setItem(na,JSON.stringify(e))}catch{}},[e]);let f=T.default.useCallback((a,v)=>{C({text:a,kind:v,at:Date.now()}),clearTimeout(w.current),w.current=setTimeout(()=>C(null),2200)},[]);T.default.useEffect(()=>()=>clearTimeout(w.current),[]);let y=a=>i(v=>({...v,...a})),I=e.canvases.find(a=>a.id===e.openCanvasId)||null,x=_e(e),z=a=>{s(null),i(v=>qe(v,a))},$=(a,v)=>y({canvases:e.canvases.map(O=>O.id===a?{...O,...v,updatedAt:Date.now()}:O)}),N=()=>{let a={...Se(),...De()};y({canvases:[a,...e.canvases],openCanvasId:a.id,view:"canvas"}),f("\u5DF2\u65B0\u5EFA\u753B\u5E03")},P=()=>{let a=document.createElement("input");a.type="file",a.accept=".json,application/json",a.onchange=async()=>{let v=a.files?.[0];if(v)try{let O=JSON.parse(await v.text()),R={...Se(O.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(O.nodes)?O.nodes:[],edges:Array.isArray(O.edges)?O.edges:[],grid:O.grid||"dots"};y({canvases:[R,...e.canvases],openCanvasId:R.id,view:"canvas"}),f("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{f("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},a.click()},g=a=>{if(I){let v={id:F("i"),type:"image",x:220+I.nodes.length*26,y:220+I.nodes.length*20,w:240,h:268,name:"",status:"idle",z:2,prompt:a.text,ratio:e.defaults.image.ratio||"1:1",locked:!0};$(I.id,{nodes:[...I.nodes,v]}),f(`\u5DF2\u7528\u300C${a.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}t(a.text),y({view:"studio",openCanvasId:null}),f(`\u5DF2\u586B\u5165\u300C${a.title}\u300D`)};return T.default.createElement("div",{className:"cf-app"},T.default.createElement("style",null,Ke),T.default.createElement("div",{className:"cf-ambient","aria-hidden":"true"},T.default.createElement("i",null),T.default.createElement("i",null),T.default.createElement("i",null)),T.default.createElement("header",{className:"cf-nav"},T.default.createElement("span",{className:"cf-brand"},T.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round","aria-hidden":"true"},T.default.createElement("path",{d:"M12 3.5L21 19H3z"}),T.default.createElement("path",{d:"M12 9.5v5.5",strokeLinecap:"round"})),"\u6625\u98CE\u753B\u5E03"),T.default.createElement("nav",{className:"cf-nav-list","aria-label":"\u4E3B\u5BFC\u822A"},Ye.map(a=>{let v=a.id==="canvas"?x==="canvas"||x==="editor":x===a.id;return T.default.createElement("button",{key:a.id,type:"button",className:`cf-nav-item${v?" is-on":""}`,onClick:()=>z(a.id),"aria-current":v?"page":void 0},T.default.createElement(W,{name:a.icon,size:15}),a.label)})),T.default.createElement("div",{className:"cf-nav-right"},I?T.default.createElement(T.default.Fragment,null,T.default.createElement("span",{style:{fontSize:12,color:"var(--cf-muted)",maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},I.name),T.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}].map(a=>T.default.createElement("button",{key:a.id,type:"button",className:(I.grid||"dots")===a.id?"is-on":"",onClick:()=>$(I.id,{grid:a.id})},a.label)))):null,T.default.createElement("span",{className:"cf-nav-version"},"v0.1.0"),T.default.createElement(q,{name:"keyboard",label:"\u5FEB\u6377\u952E",onClick:()=>f("V \u9009\u62E9 \xB7 H \u79FB\u52A8 \xB7 T/I/A/C/G \u65B0\u5EFA\u8282\u70B9 \xB7 \u2318D \u590D\u5236 \xB7 \u2318G \u5305\u7EC4 \xB7 \u232B \u5220\u9664")}))),x==="editor"&&I?T.default.createElement(Re,{canvas:I,channels:e.channels,defaults:e.defaults.image,onChange:a=>$(I.id,a),onBack:()=>i(a=>Ge(a)),say:f}):null,x==="canvas"?T.default.createElement(Ze,{canvases:e.canvases,onOpen:a=>i(v=>Fe(v,a)),onCreate:N,onRename:(a,v)=>$(a,{name:v}),onDelete:a=>y({canvases:e.canvases.filter(v=>v.id!==a),openCanvasId:null}),onImport:P}):null,x==="studio"?T.default.createElement(ea,{channels:e.channels,defaults:e.defaults.image,records:e.records,prompt:r,onPrompt:t,onCreateRecord:a=>y({records:[a,...e.records]}),onDeleteRecords:a=>y({records:e.records.filter(v=>!a.includes(v.id))}),onLookupPrompts:()=>{s("studio"),y({view:"prompts",openCanvasId:null})},say:f}):null,x==="prompts"?T.default.createElement(aa,{prompts:e.prompts,sources:e.promptSources,returnTo:o,onUse:g,onBack:o?()=>{s(null),y({view:o})}:null}):null,x==="assets"?T.default.createElement(ta,{assets:e.assets,onSave:a=>y({assets:a}),onDelete:a=>y({assets:e.assets.filter(v=>v.id!==a)}),onImport:()=>f("\u8D44\u4EA7\u5305\u5BFC\u5165\u63A5 Host \u540E\u53EF\u7528"),say:f}):null,x==="config"?T.default.createElement(ia,{tab:e.configTab,onTab:a=>y({configTab:a}),channels:e.channels,onChannels:a=>y({channels:a}),defaults:e.defaults,onDefaults:a=>y({defaults:a}),promptSources:e.promptSources,onPromptSources:a=>y({promptSources:a}),say:f}):null,u?T.default.createElement(He,{text:u.text,kind:u.kind}):null)}var sa="dsh-chunfeng-image",Aa=["slots"];function La(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:sa},ra)),e.effect(()=>{let i=null;return(()=>{i?.(),i=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:sa,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},Oa))})(),()=>i?.()},"dsh-chunfeng-image: sidebar entry")}function Oa(){return oa.default.createElement(W,{name:"canvas",size:16})}
return module.exports}})
