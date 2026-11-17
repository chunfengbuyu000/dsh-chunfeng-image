window.__ModuleLoader__.load({id:"dsh-chunfeng-image",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ya=Object.create;var Ue=Object.defineProperty;var Wa=Object.getOwnPropertyDescriptor;var Fa=Object.getOwnPropertyNames;var Va=Object.getPrototypeOf,Xa=Object.prototype.hasOwnProperty;var qa=(e,t)=>{for(var n in t)Ue(e,n,{get:t[n],enumerable:!0})},fa=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Fa(t))!Xa.call(e,r)&&r!==n&&Ue(e,r,{get:()=>t[r],enumerable:!(a=Wa(t,r))||a.enumerable});return e};var ke=(e,t,n)=>(n=e!=null?Ya(Va(e)):{},fa(t||!e||!e.__esModule?Ue(n,"default",{value:e,enumerable:!0}):n,e)),Ga=e=>fa(Ue({},"__esModule",{value:!0}),e);var Et={};qa(Et,{apply:()=>St,inject:()=>Mt});module.exports=Ga(Et);var qe=ke(require("react"),1);var x=ke(require("react"),1);var da=`/* \u6625\u98CE\u753B\u5E03 \xB7 \u4EE4\u724C
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
  --cf-mini-h: 108px;
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
`;var pa=`/* Hallmark \xB7 shape: Workbench multi-page app (canvas / studio / prompts / assets / config) \xB7 genre: modern-minimal \xB7 theme: none, the project's own DSH alias tokens (pre-flight signal 1 wins) \xB7 job: try \xB7 draw: none
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
/* \u5185\u5BB9\u6392\u5728\u73AF\u5883\u5149\u4E4B\u4E0A\u3002\u53EA\u70B9\u540D\u9700\u8981\u7684\u90A3\u51E0\u5757 \u2014\u2014 \u7528\u8FC7 :not() \u6392\u9664\u6CD5\u65F6\u6F0F\u6389\u4E86\u6D6E\u5C42\uFF0C
   \u7ED3\u679C toast \u88AB\u6491\u6210\u5168\u5BBD\u6761\u3001\u52A9\u624B\u680F\u88AB\u585E\u8FDB grid \u6D41\u91CC\u3002 */
.cf-nav, .cf-page, .cf-editor { position: relative; z-index: 1; }

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
  backdrop-filter: blur(24px) saturate(160%);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 12px 32px -22px oklch(0% 0 0 / 0.8);
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
  backdrop-filter: blur(24px) saturate(160%);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 12px 32px -22px oklch(0% 0 0 / 0.8);
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

.cf-nav-right { display: flex; align-items: center; gap: var(--cf-sp-2); margin-inline-start: auto; }
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
  gap: 2px;
  max-height: calc(100% - 180px);
  padding: 6px;
  border-radius: var(--cf-r-md);
  background: var(--cf-glass);
  backdrop-filter: blur(24px) saturate(160%);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line), 0 16px 40px -28px oklch(0% 0 0 / 0.8);
  overflow-y: auto;
  scrollbar-width: none;
}
.cf-rail::-webkit-scrollbar { display: none; }
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
  backdrop-filter: blur(20px) saturate(150%);
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
.cf-composer:focus-within { box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-muted), 0 16px 40px -20px oklch(0% 0 0 / 0.6); }
.cf-composer-input:focus-visible,
.cf-dock-input:focus-visible { outline: none; }
.cf-dock:focus-within { box-shadow: -1px 0 0 var(--cf-line-strong), -24px 0 60px -40px oklch(0% 0 0 / 0.8); }

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
  /* \u548C\u7F29\u7565\u56FE\u8D34\u5728\u4E00\u8D77\uFF1A\u53F3\u5BF9\u9F50\u3001\u6B63\u597D\u843D\u5728\u5B83\u4E0A\u65B9 */
  right: var(--cf-sp-3);
  bottom: calc(var(--cf-sp-3) + var(--cf-mini-h) + 8px);
  top: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 36px;
  padding: 2px 4px;
  border-radius: var(--cf-r-pill);
  background: var(--cf-panel);
  box-shadow: inset 0 0 0 var(--cf-hair) var(--cf-line-strong);
}
.cf-zoom-num { min-width: 3.6ch; text-align: end; font-size: var(--cf-fs-11); color: var(--cf-fg-2); font-variant-numeric: tabular-nums; }
.cf-zoom-range { width: 68px; height: 20px; appearance: none; background: transparent; cursor: pointer; }
.cf-zoom-range::-webkit-slider-runnable-track { height: 2px; background: var(--cf-line-strong); border-radius: 2px; }
.cf-zoom-range::-webkit-slider-thumb { appearance: none; width: 12px; height: 12px; margin-top: -5px; border-radius: var(--cf-r-pill); background: var(--cf-fg); }
.cf-zoom-range::-moz-range-track { height: 2px; background: var(--cf-line-strong); }
.cf-zoom-range::-moz-range-thumb { width: 12px; height: 12px; border: 0; border-radius: var(--cf-r-pill); background: var(--cf-fg); }

.cf-minimap {
  position: absolute;
  z-index: var(--cf-z-float);
  right: var(--cf-sp-3);
  bottom: var(--cf-sp-3);
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
  bottom: var(--cf-sp-4);
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
`;var ua=`${da}
${pa}`;var o=ke(require("react"),1),Za={canvas:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("path",{d:"M3 10h18M9 10v10"})),image:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("circle",{cx:"9",cy:"10",r:"1.6"}),o.default.createElement("path",{d:"M4 18l5-5 4 4 3-3 4 4"})),book:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"}),o.default.createElement("path",{d:"M5 17h14"})),folder:o.default.createElement("path",{d:"M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),sliders:o.default.createElement("path",{d:"M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4"}),cursor:o.default.createElement("path",{d:"M6 3l12 7-5 1.5L10.5 20z"}),hand:o.default.createElement("path",{d:"M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2"}),target:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"12",cy:"12",r:"6.5"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"2.2"}),o.default.createElement("path",{d:"M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5"})),text:o.default.createElement("path",{d:"M5 6.5h14M12 6.5V19M9 19h6"}),audio:o.default.createElement("path",{d:"M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4"}),group:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5"}),o.default.createElement("rect",{x:"13",y:"13",width:"8",height:"8",rx:"1.5"}),o.default.createElement("path",{d:"M11 11l2 2"})),search:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"11",cy:"11",r:"6.5"}),o.default.createElement("path",{d:"M16 16l4 4"})),plus:o.default.createElement("path",{d:"M12 5v14M5 12h14"}),minus:o.default.createElement("path",{d:"M5 12h14"}),trash:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 7h16M10 4h4M6 7l1 13h10l1-13"}),o.default.createElement("path",{d:"M10 11v5M14 11v5"})),edit:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 20h4l10-10-4-4L4 16z"}),o.default.createElement("path",{d:"M14 6l4 4"})),close:o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}),chevron:o.default.createElement("path",{d:"M6 9l6 6 6-6"}),upload:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 16V4"}),o.default.createElement("path",{d:"M7 9l5-5 5 5"}),o.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),download:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 4v12"}),o.default.createElement("path",{d:"M7 11l5 5 5-5"}),o.default.createElement("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"})),check:o.default.createElement("path",{d:"M4 12l5 5L20 6"}),refresh:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M20 12a8 8 0 11-2.4-5.7"}),o.default.createElement("path",{d:"M20 4v4h-4"})),more:o.default.createElement(o.default.Fragment,null,o.default.createElement("circle",{cx:"6",cy:"12",r:"1.2"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"1.2"}),o.default.createElement("circle",{cx:"18",cy:"12",r:"1.2"})),undo:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M9 8H4v5"}),o.default.createElement("path",{d:"M4 13a8 8 0 1114 5"})),redo:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M15 8h5v5"}),o.default.createElement("path",{d:"M20 13A8 8 0 106 18"})),map:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),o.default.createElement("path",{d:"M3 10h18M9 10v10M15 10v10"})),keyboard:o.default.createElement(o.default.Fragment,null,o.default.createElement("rect",{x:"2",y:"6.5",width:"20",height:"11",rx:"2"}),o.default.createElement("path",{d:"M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10"})),link:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M9 15l6-6"}),o.default.createElement("path",{d:"M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8"}),o.default.createElement("path",{d:"M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8"})),sparkle:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z"}),o.default.createElement("path",{d:"M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z"})),message:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M20 15a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2h12a2 2 0 012 2z"})),play:o.default.createElement("path",{d:"M8 5l11 7-11 7z"}),stop:o.default.createElement("rect",{x:"6",y:"6",width:"12",height:"12",rx:"1.5"}),grid:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M4 9h16M4 15h16M9 4v16M15 4v16"})),back:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M10 6l-5 6 5 6"}),o.default.createElement("path",{d:"M5 12h14"})),arrowUp:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 19V5"}),o.default.createElement("path",{d:"M6 11l6-6 6 6"})),frame:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2"})),bars:o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M5 15v3M9.5 10v8M14 6v12M18.5 12v6"}))};function _({name:e,size:t=16,...n}){let a=Za[e];return a?o.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n},a):null}function ie({name:e,label:t,size:n=16,...a}){return o.default.createElement("button",{type:"button",className:"cf-icon-btn","aria-label":t,title:t,...a},o.default.createElement(_,{name:e,size:n}))}function j({variant:e="ghost",size:t,icon:n,children:a,...r}){return o.default.createElement("button",{type:"button",className:`cf-btn cf-btn--${e}${t==="sm"?" cf-btn--sm":""}`,...r},n?o.default.createElement(_,{name:n,size:14}):null,a)}function be({title:e,children:t,footer:n,onClose:a,wide:r}){return o.default.useEffect(()=>{let i=p=>{p.key==="Escape"&&a()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[a]),o.default.createElement("div",{className:"cf-scrim",onPointerDown:i=>{i.target===i.currentTarget&&a()}},o.default.createElement("div",{className:`cf-dialog${r?" cf-dialog--wide":""}`,role:"dialog","aria-modal":"true","aria-label":e},o.default.createElement("header",{className:"cf-dialog-head"},o.default.createElement("h2",{className:"cf-dialog-title"},e),o.default.createElement(ie,{name:"close",label:"\u5173\u95ED",onClick:a})),o.default.createElement("div",{className:"cf-dialog-body"},t,n?o.default.createElement("div",{className:"cf-dialog-foot"},n):null)))}var Te=class extends o.default.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,n){console.error("[\u6625\u98CE\u753B\u5E03] \u6E32\u67D3\u51FA\u9519",t,n)}render(){let{error:t}=this.state;if(!t)return this.props.children;let n=String(t&&t.message||t);return o.default.createElement("div",{className:"cf-crash",role:"alert"},o.default.createElement("span",{className:"cf-crash-icon"},o.default.createElement(_,{name:"refresh",size:22})),o.default.createElement("p",{className:"cf-crash-title"},"\u8FD9\u4E00\u5757\u51FA\u9519\u4E86"),o.default.createElement("p",{className:"cf-crash-detail"},n),o.default.createElement("div",{className:"cf-crash-actions"},o.default.createElement(j,{variant:"primary",size:"sm",onClick:()=>this.setState({error:null})},"\u91CD\u8BD5"),o.default.createElement(j,{size:"sm",onClick:()=>{try{localStorage.clear()}catch{}location.reload()}},"\u91CD\u7F6E\u672C\u5730\u6570\u636E")))}};function ma({text:e,kind:t}){return o.default.createElement("p",{className:`cf-toast${t==="error"?" is-error":""}`,role:"status","aria-live":"polite"},e)}function ye({icon:e="canvas",title:t,hint:n,action:a}){return o.default.createElement("div",{className:"cf-empty"},o.default.createElement("span",{className:"cf-empty-icon"},o.default.createElement(_,{name:e,size:28})),o.default.createElement("p",{className:"cf-empty-title"},t),n?o.default.createElement("p",{className:"cf-empty-hint"},n):null,a)}var Ra=[{id:"canvas",label:"\u6211\u7684\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE\u5DE5\u4F5C\u53F0",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD\u5E93",icon:"book"},{id:"assets",label:"\u6211\u7684\u8D44\u4EA7",icon:"folder"},{id:"config",label:"\u914D\u7F6E",icon:"sliders"}],ze={image:"\u56FE\u7247",text:"\u6587\u672C",config:"\u914D\u7F6E",audio:"\u97F3\u9891",group:"\u7EC4"},ea=[{id:"dots",label:"\u70B9\u9635"},{id:"lines",label:"\u7F51\u683C"},{id:"blank",label:"\u7A7A\u767D"}],De=[{id:"1:1",label:"1:1",w:1024,h:1024},{id:"4:3",label:"4:3",w:1152,h:864},{id:"3:4",label:"3:4",w:864,h:1152},{id:"16:9",label:"16:9",w:1280,h:720},{id:"9:16",label:"9:16",w:720,h:1280}],Ye=["\u81EA\u52A8","\u4F4E","\u4E2D","\u9AD8","\u6781\u9AD8","\u6700\u9AD8"],We=["1k","2k","4k","\u81EA\u52A8"],aa=[{id:"image",label:"\u751F\u56FE"},{id:"video",label:"\u89C6\u9891"},{id:"text",label:"\u6587\u672C"},{id:"audio",label:"\u97F3\u9891"}],Pe=[{id:"openai",label:"OpenAI",baseUrl:"https://api.openai.com/v1"},{id:"gemini",label:"Gemini",baseUrl:"https://generativelanguage.googleapis.com/v1beta"}],ta=[{id:"all",label:"\u5168\u90E8"},{id:"text",label:"\u6587\u672C"},{id:"image",label:"\u56FE\u7247"}],va=0;function ee(e="x"){return va+=1,`${e}_${Date.now().toString(36)}${va.toString(36)}`}function Fe(e="\u672A\u547D\u540D\u753B\u5E03"){return{id:ee("cv"),name:e,nodes:[],edges:[],camera:{x:0,y:0,s:1},grid:"dots",updatedAt:Date.now()}}function ga(e){switch(e){case"image":return{w:240,h:268};case"audio":return{w:240,h:140};case"text":return{w:230,h:160};case"config":return{w:240,h:176};case"group":return{w:420,h:320};default:return{w:240,h:200}}}function Ee(e,t,n={}){let a=ga(e),r={id:ee(e[0]),type:e,x:Math.round(t.x-a.w/2),y:Math.round(t.y-a.h/2),w:a.w,h:a.h,name:"",status:"idle",z:e==="group"?1:2,...n};return e==="text"&&(r.text=n.text??""),e==="config"&&(r.modelKey=n.modelKey??"",r.ratio=n.ratio??"1:1",r.count=n.count??1),e==="image"&&(r.prompt=n.prompt??"",r.ratio=n.ratio??"1:1",r.locked=n.locked??!0),e==="audio"&&(r.prompt=n.prompt??""),r}function na(e="openai"){let t=Pe.find(n=>n.id===e)||Pe[0];return{id:ee("ch"),name:"",protocol:t.id,baseUrl:t.baseUrl,keyHint:"",hasKey:!1,models:[],enabled:!0}}function et(e,t){return`${e}:${t}`}function Le(e,t){if(!t)return null;let[n,...a]=t.split(":"),r=e.find(p=>p.id===n);if(!r)return null;let i=r.models.find(p=>p.id===a.join(":"));return i?{channel:r,model:i,label:i.label||i.id}:null}function je(e,t="image"){let n=[];for(let a of e)if(a.enabled)for(let r of a.models)r.enabled&&(r.caps||[]).includes(t)&&n.push({key:et(a.id,r.id),model:r,channel:a,label:r.label||r.id});return n}var at=[{id:"p1",title:"\u7535\u5F71\u611F\u4EBA\u50CF",text:"35mm \u80F6\u7247\u8D28\u611F\uFF0C\u67D4\u548C\u4FA7\u9006\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u4EBA\u7269\u534A\u4FA7\u8138\uFF0C\u80CC\u666F\u865A\u5316\u6210\u6696\u8272\u5149\u6591",category:"\u6444\u5F71",tags:["\u4EBA\u50CF","\u80F6\u7247"]},{id:"p2",title:"\u4EA7\u54C1\u767D\u5E95\u56FE",text:"\u7EAF\u767D\u80CC\u666F\uFF0C\u67D4\u5149\u7BB1\u6253\u5149\uFF0C\u4EA7\u54C1\u5C45\u4E2D\uFF0C\u8F7B\u5FAE\u6295\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u8D28\u611F",category:"\u5546\u4E1A",tags:["\u4EA7\u54C1","\u767D\u5E95"]},{id:"p3",title:"\u7B49\u8DDD\u63D2\u753B",text:"\u7B49\u8DDD\u89C6\u89D2\uFF0C\u67D4\u548C\u6E10\u53D8\uFF0C\u6241\u5E73\u63D2\u753B\u98CE\u683C\uFF0C\u5706\u89D2\u51E0\u4F55\u9020\u578B\uFF0C\u6D45\u8272\u80CC\u666F",category:"\u63D2\u753B",tags:["\u7B49\u8DDD","\u6241\u5E73"]},{id:"p4",title:"\u9ED1\u767D\u80F6\u7247\u8857\u62CD",text:"\u9AD8\u5BF9\u6BD4\u9ED1\u767D\uFF0C\u9897\u7C92\u611F\uFF0C\u8857\u5934\u6293\u62CD\uFF0C\u5E7F\u89D2\uFF0C\u6697\u89D2\u660E\u663E",category:"\u6444\u5F71",tags:["\u9ED1\u767D","\u8857\u62CD"]},{id:"p5",title:"\u56FD\u98CE\u5C71\u6C34",text:"\u6C34\u58A8\u7559\u767D\uFF0C\u8FDC\u5C71\u6DE1\u58A8\uFF0C\u5BA3\u7EB8\u8D28\u611F\uFF0C\u7AD6\u6784\u56FE\uFF0C\u4E00\u53F6\u5C0F\u821F",category:"\u56FD\u98CE",tags:["\u6C34\u58A8","\u7559\u767D"]},{id:"p6",title:"\u8D5B\u535A\u591C\u666F",text:"\u96E8\u591C\u9713\u8679\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\uFF0C\u9752\u6A59\u5BF9\u6BD4\uFF0C\u957F\u66DD\u5149\u8F66\u6D41\uFF0C\u9999\u6E2F\u8857\u5DF7",category:"\u573A\u666F",tags:["\u591C\u666F","\u9713\u8679"]},{id:"p7",title:"\u6781\u7B80\u51E0\u4F55\u6D77\u62A5",text:"\u5927\u9762\u79EF\u7559\u767D\uFF0C\u5355\u4E00\u51E0\u4F55\u4E3B\u4F53\uFF0C\u9AD8\u5BF9\u6BD4\u914D\u8272\uFF0C\u786C\u8FB9\u9634\u5F71\uFF0C\u5370\u5237\u8D28\u611F",category:"\u8BBE\u8BA1",tags:["\u6781\u7B80","\u6D77\u62A5"]},{id:"p8",title:"\u81EA\u7136\u5149\u9759\u7269",text:"\u7A97\u5149\u4ECE\u4FA7\u9762\u8FDB\u5165\uFF0C\u6728\u8D28\u53F0\u9762\uFF0C\u514B\u5236\u7684\u9053\u5177\uFF0C\u6D45\u666F\u6DF1\uFF0C\u5B89\u9759\u7684\u8272\u8C03",category:"\u6444\u5F71",tags:["\u9759\u7269","\u81EA\u7136\u5149"]}],tt=[{id:"a1",kind:"text",title:"\u54C1\u724C\u53E3\u543B\u8BF4\u660E",text:"\u514B\u5236\u3001\u5177\u4F53\u3001\u4E0D\u7528\u5F62\u5BB9\u8BCD\u5806\u53E0\uFF0C\u5148\u7ED9\u7ED3\u8BBA\u518D\u7ED9\u7406\u7531\u3002",tags:["\u6587\u6848","\u89C4\u8303"],source:"\u624B\u52A8\u6DFB\u52A0"},{id:"a2",kind:"text",title:"\u5E38\u7528\u8D1F\u9762\u8BCD",text:"\u4E0D\u8981\u6587\u5B57\u3001\u4E0D\u8981\u6C34\u5370\u3001\u4E0D\u8981\u591A\u4F59\u7684\u80A2\u4F53\u3001\u4E0D\u8981\u8FC7\u66DD",tags:["\u8D1F\u9762\u8BCD"],source:"\u624B\u52A8\u6DFB\u52A0"}];function ia(){return{view:"canvas",openCanvasId:null,canvases:[],channels:[],prompts:at.map(e=>({...e})),promptSources:[],assets:tt.map(e=>({...e})),defaults:{image:{modelKey:"",size:"1024x1024",ratio:"1:1",count:1,quality:"\u81EA\u52A8",resolution:"\u81EA\u52A8"},canvasCount:1},records:[],assistantMessages:[],assistantModel:null,configTab:"channels",grid:"dots"}}function ha(){let e=(m,f,w,T,S,I)=>{let E=Ee(m,{x:f+T/2,y:w+S/2},{...I,w:T,h:S});return E.x=f,E.y=w,E},t=e("group",660,120,640,700,{name:"\u9713\u8679\u8857\u89D2"}),n=e("text",120,300,230,160,{text:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C"}),a=e("config",400,300,240,176,{ratio:"3:4",count:1}),r=e("image",700,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),i=e("image",980,200,240,268,{prompt:"\u96E8\u591C\u7684\u9713\u8679\u8857\u89D2\uFF0C\u6E7F\u6DA6\u5730\u9762\u53CD\u5C04\u62DB\u724C",ratio:"3:4"}),p=e("image",700,510,240,268,{prompt:"\u540C\u4E00\u8857\u89D2\u7684\u6E05\u6668\uFF0C\u96E8\u505C\u540E\u7684\u53CD\u5149",ratio:"3:4"}),y=[{id:ee("e"),from:n.id,to:a.id},{id:ee("e"),from:a.id,to:r.id},{id:ee("e"),from:a.id,to:i.id},{id:ee("e"),from:a.id,to:p.id}];return{nodes:[t,n,a,r,i,p],edges:y}}function ba(e,t,n,a){if(n===a)return!1;let r=e.find(p=>p.id===n),i=e.find(p=>p.id===a);return!(!r||!i||r.type==="config"&&i.type==="config"||r.type==="group"||i.type==="group"||t.some(p=>p.from===n&&p.to===a))}function xa(e,t){let n=e.filter(m=>t.includes(m.id)&&m.type!=="group");if(!n.length)return null;let a=44,r=Math.min(...n.map(m=>m.x))-a,i=Math.min(...n.map(m=>m.y))-a-34,p=Math.max(...n.map(m=>m.x+m.w))+a,y=Math.max(...n.map(m=>m.y+m.h))+a;return Ee("group",{x:(r+p)/2,y:(i+y)/2},{w:Math.round(p-r),h:Math.round(y-i),name:"\u65B0\u5206\u7EC4",childIds:n.map(m=>m.id),x:Math.round(r),y:Math.round(i)})}function ya(e){return e.openCanvasId?"editor":e.view}function wa(e,t){return{...e,view:t,openCanvasId:null}}function ka(e,t){return{...e,openCanvasId:t}}function Na(e){return{...e,openCanvasId:null,view:"canvas"}}var nt=["idle","running","done","failed"],Be=(e,t)=>Number.isFinite(e)?e:t;function it(e,t){if(!e||typeof e!="object")return null;let n=ze[e.type]?e.type:"text",a=ga(n),r={...e,id:typeof e.id=="string"&&e.id?e.id:`n_${t}`,type:n,x:Be(e.x,0),y:Be(e.y,0),w:Math.max(40,Be(e.w,a.w)),h:Math.max(40,Be(e.h,a.h)),name:typeof e.name=="string"?e.name:"",status:nt.includes(e.status)?e.status:"idle",z:Be(e.z,n==="group"?3:2)};return Array.isArray(e.childIds)&&(r.childIds=e.childIds.filter(i=>typeof i=="string")),r}function rt(e,t){if(!e||typeof e!="object")return null;let n=Array.isArray(e.nodes)?e.nodes.map(it).filter(Boolean):[],a=new Set(n.map(i=>i.id)),r=Array.isArray(e.edges)?e.edges.filter(i=>i&&typeof i=="object"&&a.has(i.from)&&a.has(i.to)).map((i,p)=>({id:typeof i.id=="string"&&i.id?i.id:`e_${p}`,from:i.from,to:i.to})):[];return{...e,id:typeof e.id=="string"&&e.id?e.id:`cv_${t}`,name:typeof e.name=="string"&&e.name?e.name:"\u672A\u547D\u540D\u753B\u5E03",nodes:n,edges:r,grid:ea.some(i=>i.id===e.grid)?e.grid:"dots",camera:e.camera&&typeof e.camera=="object"?e.camera:{x:0,y:0,s:1},updatedAt:Be(e.updatedAt,Date.now())}}function Ca(e){let t=ia();if(!e||typeof e!="object")return t;let n={...t};return Ra.some(a=>a.id===e.view)&&(n.view=e.view),typeof e.configTab=="string"&&(n.configTab=e.configTab),n.canvases=Array.isArray(e.canvases)?e.canvases.map(rt).filter(Boolean):[],n.channels=Array.isArray(e.channels)?e.channels.filter(a=>a&&typeof a=="object").map((a,r)=>({...a,id:typeof a.id=="string"&&a.id?a.id:`ch_${r}`,name:typeof a.name=="string"?a.name:"",baseUrl:typeof a.baseUrl=="string"?a.baseUrl:"",keyHint:typeof a.keyHint=="string"?a.keyHint:"",hasKey:!!a.hasKey,enabled:a.enabled!==!1,models:Array.isArray(a.models)?a.models.filter(i=>i&&typeof i=="object").map((i,p)=>({...i,id:typeof i.id=="string"&&i.id?i.id:`m_${p}`,label:typeof i.label=="string"?i.label:"",caps:Array.isArray(i.caps)?i.caps.filter(y=>aa.some(m=>m.id===y)):[],enabled:i.enabled!==!1})):[]})):[],n.prompts=Array.isArray(e.prompts)?e.prompts.filter(a=>a&&typeof a=="object"):t.prompts,n.assets=Array.isArray(e.assets)?e.assets.filter(a=>a&&typeof a=="object"):t.assets,n.records=Array.isArray(e.records)?e.records.filter(a=>a&&typeof a=="object"):[],n.assistantMessages=Array.isArray(e.assistantMessages)?e.assistantMessages.filter(a=>a&&typeof a=="object"&&typeof a.text=="string"):[],n.assistantModel=e.assistantModel&&typeof e.assistantModel=="object"&&typeof e.assistantModel.provider=="string"&&typeof e.assistantModel.model=="string"?{provider:e.assistantModel.provider,model:e.assistantModel.model}:null,n.promptSources=Array.isArray(e.promptSources)?e.promptSources.filter(a=>a&&typeof a=="object"):[],e.defaults&&typeof e.defaults=="object"&&e.defaults.image&&typeof e.defaults.image=="object"&&(n.defaults={...t.defaults,...e.defaults,image:{...t.defaults.image,...e.defaults.image}}),n.openCanvasId=n.canvases.some(a=>a.id===e.openCanvasId)?e.openCanvasId:null,n}var Ma="dsh-chunfeng-image/",Sa=typeof window<"u"&&!!window.__DSH_BOOT__,st={providers:[{id:"preview",name:"\u9884\u89C8\u793A\u4F8B",models:[{id:"deepseek-v4.1-flash",name:"deepseek-v4.1-flash"},{id:"deepseek-v4.1-pro",name:"deepseek-v4.1-pro"}]}],default:{provider:"preview",model:"deepseek-v4.1-flash"},available:!1,preview:!0},Oe=null;async function za({force:e=!1}={}){if(Oe&&!e)return Oe;try{let t=await fetch(Ma+"models",{headers:{"sec-fetch-site":"same-origin"},cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);return Oe=await t.json(),Oe}catch(t){if(Sa)throw t;return Oe=st,Oe}}function Da(e,t){return t?.model?e?.providers?.find(r=>r.id===t.provider)?.models?.find(r=>r.id===t.model)?.name||t.model:""}async function Ve({messages:e,system:t,model:n,maxTokens:a,signal:r,onDelta:i}){if(!Sa)return ot({messages:e,onDelta:i,signal:r});let p=await fetch(Ma+"stream",{method:"POST",headers:{"content-type":"application/json","sec-fetch-site":"same-origin"},body:JSON.stringify({messages:e,system:t,model:n,maxTokens:a}),signal:r});if(!p.ok){let T=`\u6A21\u578B\u8C03\u7528\u5931\u8D25\uFF08HTTP ${p.status}\uFF09`;try{let S=await p.json();S?.error&&(T=S.error)}catch{}throw new Error(T)}if(!p.body)throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u6D41\u5F0F\u8BFB\u53D6");let y=p.body.getReader(),m=new TextDecoder,f="",w="";for(;;){let{value:T,done:S}=await y.read();if(S)break;f+=m.decode(T,{stream:!0});let I;for(;(I=f.indexOf(`
`))>=0;){let E=f.slice(0,I).trim();if(f=f.slice(I+1),!E)continue;let z;try{z=JSON.parse(E)}catch{continue}if(z.error)throw new Error(z.error);if(typeof z.d=="string"&&z.d&&(w+=z.d,i?.(z.d,w)),z.done)return w}}return w}async function ot({messages:e,onDelta:t,signal:n}){let r=`\uFF08\u9884\u89C8\u793A\u4F8B\uFF0C\u6CA1\u6709\u8FDE\u63A5\u771F\u5B9E\u6A21\u578B\uFF09

\u6536\u5230\uFF1A${([...e||[]].reverse().find(p=>p.role==="user")?.text||"").slice(0,60)}`,i="";for(let p of r){if(n?.aborted)break;i+=p,t?.(p,i),await new Promise(y=>setTimeout(y,12))}return i}var l=ke(require("react"),1);var g=ke(require("react"),1);var Xe=.1,sa=3,lt=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Ea(){let e=g.default.useRef({x:0,y:0,s:1,tx:0,ty:0,ts:1,raf:0}),t=g.default.useCallback(r=>{if(!r)return;let i=e.current;r.style.transform=`translate3d(${i.x}px, ${i.y}px, 0) scale(${i.s})`},[]),n=g.default.useCallback((r,i)=>{let p=e.current;p.raf=0;let y=.24,m=p.tx-p.x,f=p.ty-p.y,w=p.ts-p.s;if(Math.abs(m)<.2&&Math.abs(f)<.2&&Math.abs(w)<8e-4){p.x=p.tx,p.y=p.ty,p.s=p.ts,t(r),i?.();return}p.x+=m*y,p.y+=f*y,p.s+=w*y,t(r),i?.(),p.raf=requestAnimationFrame(()=>n(r,i))},[t]),a=g.default.useCallback((r,i,p,y,m)=>{let f=e.current;if(f.tx=i,f.ty=p,f.ts=Math.min(sa,Math.max(Xe,y)),lt()){f.x=f.tx,f.y=f.ty,f.s=f.ts,f.raf&&cancelAnimationFrame(f.raf),f.raf=0,t(r),m?.();return}f.raf||(f.raf=requestAnimationFrame(()=>n(r,m)))},[t,n]);return g.default.useEffect(()=>()=>{e.current.raf&&cancelAnimationFrame(e.current.raf)},[]),{cam:e,apply:t,moveTo:a}}function ra(e,t){if(!e||!t)return"";let n=e.x+e.w,a=e.y+e.h/2,r=t.x,i=t.y+t.h/2,p=Math.max(40,Math.abs(r-n)*.45);return`M ${n} ${a} C ${n+p} ${a}, ${r-p} ${i}, ${r} ${i}`}function ct({node:e}){let t=g.default.useRef(null);return g.default.useEffect(()=>{let n=t.current;if(!n)return;let a=n.getContext("2d"),r=480;n.width=r,n.height=r;let i=`${e.id}${e.prompt||""}`,p=7;for(let f=0;f<i.length;f++)p=(p*31+i.charCodeAt(f))%2147483647;let y=()=>(p=p*16807%2147483647)/2147483647;a.fillStyle="#141414",a.fillRect(0,0,r,r);let m=a.createRadialGradient(r*(.25+y()*.5),r*(.3+y()*.4),24,r/2,r/2,r*.8);m.addColorStop(0,"rgba(255,255,255,0.16)"),m.addColorStop(.5,"rgba(255,255,255,0.05)"),m.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=m,a.fillRect(0,0,r,r),a.strokeStyle="rgba(255,255,255,0.22)",a.lineWidth=1.5;for(let f=0;f<6;f++){let w=r*(.18+y()*.66);a.beginPath(),a.moveTo(0,w),a.lineTo(r,w+(y()-.5)*80),a.stroke()}a.strokeStyle="rgba(255,255,255,0.4)";for(let f=0;f<3;f++){let w=r*(.2+y()*.6),T=40+y()*90;a.beginPath(),y()<.5?a.arc(w,r*(.3+y()*.4),T,0,Math.PI*2):a.rect(w-T/2,r*(.3+y()*.4)-T/2,T,T),a.stroke()}},[e.id,e.prompt]),g.default.createElement("canvas",{ref:t,"aria-label":e.prompt||"\u793A\u4F8B\u753B\u9762"})}function ft({node:e,channels:t}){switch(e.type){case"image":return g.default.createElement("div",{className:"cf-node-media"},e.src?g.default.createElement("img",{src:e.src,alt:e.prompt||"\u56FE\u7247",draggable:!1}):null,!e.src&&e.status==="running"?g.default.createElement("div",{className:"cf-node-void"},g.default.createElement("span",{className:"cf-spin","aria-hidden":"true"}),"\u751F\u6210\u4E2D"):null,!e.src&&e.status!=="running"?g.default.createElement(ct,{node:e}):null,!e.src&&e.status==="failed"?g.default.createElement("div",{className:"cf-node-void"},"\u751F\u6210\u5931\u8D25"):null);case"audio":return g.default.createElement("div",{className:"cf-node-audio"},g.default.createElement("div",{className:"cf-wave","aria-hidden":"true"},Array.from({length:26},(n,a)=>g.default.createElement("span",{key:a,style:{height:`${16+a*41%66}%`}}))),g.default.createElement("p",{style:{fontSize:11,color:"var(--cf-muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.status==="running"?"\u751F\u6210\u4E2D":e.prompt||"\u7A7A\u97F3\u9891\u8282\u70B9"));case"text":return g.default.createElement("div",{className:"cf-node-text"},e.text?g.default.createElement("p",{style:{fontSize:e.fontSize||13}},e.text):g.default.createElement("p",{style:{color:"var(--cf-caption)"}},"\u53CC\u51FB\u7F16\u8F91\u6587\u672C"));case"config":{let n=Le(t,e.modelKey);return g.default.createElement("div",{className:"cf-node-config"},g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u6A21\u578B"),g.default.createElement("b",null,n?n.label:"\u672A\u9009\u62E9")),g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u6BD4\u4F8B"),g.default.createElement("b",null,e.ratio)),g.default.createElement("p",{className:"cf-node-config-row"},g.default.createElement("span",null,"\u5F20\u6570"),g.default.createElement("b",null,e.count)))}case"group":return null;default:return null}}function Ia({nodes:e,edges:t,selection:n,channels:a,grid:r,minimap:i,tool:p="select",actions:y={},onSelection:m,onMove:f,onResize:w,onConnect:T,onRemoveEdge:S,onOpenNode:I,camera:E,camApi:z,showHint:F}){let M=g.default.useRef(null),v=g.default.useRef(null),{cam:k,moveTo:Y}=z,[U,ae]=g.default.useState({w:1200,h:700}),[Q,ne]=g.default.useState(Math.round(k.current.s*100)),W=g.default.useRef(null),X=g.default.useRef(null),re=g.default.useRef(null),te=g.default.useRef(null),se=g.default.useRef(null),[ve,ge]=g.default.useState(null),[de,le]=g.default.useState(null),[pe,Ne]=g.default.useState(null),[N,u]=g.default.useState(!1),O=g.default.useCallback(()=>z.apply(M.current),[z]);g.default.useEffect(()=>{let c=v.current;if(!c)return;let b=new ResizeObserver(()=>{let B=c.getBoundingClientRect();ae({w:B.width,h:B.height})});b.observe(c);let $=c.getBoundingClientRect();return ae({w:$.width,h:$.height}),()=>b.disconnect()},[]),g.default.useEffect(()=>{O(),ne(Math.round(k.current.s*100))}),g.default.useEffect(()=>{let c=$=>{$.code==="Space"&&!/input|textarea/i.test($.target.tagName)&&(u(!0),$.preventDefault())},b=$=>{$.code==="Space"&&u(!1)};return window.addEventListener("keydown",c),window.addEventListener("keyup",b),()=>{window.removeEventListener("keydown",c),window.removeEventListener("keyup",b)}},[]),g.default.useEffect(()=>{if(!E)return;let c=M.current;c&&Y(c,E.x,E.y,E.s,()=>ne(Math.round(k.current.s*100)))},[E]);let G=()=>v.current.getBoundingClientRect(),J=(c,b)=>{let $=G();return{x:(c-$.left-k.current.x)/k.current.s,y:(b-$.top-k.current.y)/k.current.s}},Z=g.default.useCallback(()=>{let c=M.current;if(!c||!e.length)return;let b=72,$=Math.min(...e.map(q=>q.x))-b,B=Math.min(...e.map(q=>q.y))-b,P=Math.max(...e.map(q=>q.x+q.w))+b,oe=Math.max(...e.map(q=>q.y+q.h))+b,R=Math.min(1.35,Math.max(Xe,Math.min(U.w/(P-$),U.h/(oe-B))));Y(c,b-$*R,b-B*R,R,()=>ne(Math.round(k.current.s*100)))},[e,U,Y,k]);g.default.useEffect(()=>{let c=setTimeout(Z,80);return()=>clearTimeout(c)},[]),g.default.useEffect(()=>{z.fit=Z},[z,Z]);let ce=c=>{let b=M.current;if(!b)return;let $=U.w/2,B=U.h/2,P=k.current,oe=($-P.tx)/P.ts,R=(B-P.ty)/P.ts,q=Math.min(sa,Math.max(Xe,P.ts*c));Y(b,$-oe*q,B-R*q,q,()=>ne(Math.round(k.current.s*100)))},fe=c=>{c.preventDefault();let b=G(),$=c.clientX-b.left,B=c.clientY-b.top,P=k.current,oe=($-P.tx)/P.ts,R=(B-P.ty)/P.ts,q=Math.min(sa,Math.max(Xe,P.ts*Math.exp(-c.deltaY*.0018)));Y(M.current,$-oe*q,B-R*q,q,()=>ne(Math.round(k.current.s*100)))},V=c=>{c.preventDefault();let b=G(),$=Math.max(0,Math.min(c.clientX-b.left,b.width-200)),B=Math.max(0,Math.min(c.clientY-b.top,b.height-40)),P=document.elementFromPoint(c.clientX,c.clientY)||c.target,oe=P.closest?.(".cf-node");if(oe){let q=oe.dataset.id,He=e.find(Ke=>Ke.id===q);q&&!n.includes(q)&&m([q]),le({kind:He?.type==="group"?"group":"node",id:q,x:$,y:B});return}let R=P.closest?.(".cf-edge");if(R?.dataset.id){le({kind:"edge",id:R.dataset.id,x:$,y:B});return}le({kind:"blank",id:null,x:$,y:B})},we=c=>{if(de&&le(null),c.button===1||N||p==="pan"){c.preventDefault(),W.current={x:c.clientX,y:c.clientY,cx:k.current.tx,cy:k.current.ty},v.current.classList.add("is-grabbing"),v.current.setPointerCapture(c.pointerId);return}if(c.button!==0)return;let b=J(c.clientX,c.clientY);te.current={x0:b.x,y0:b.y,additive:c.shiftKey},Ne({x:b.x,y:b.y,w:0,h:0}),v.current.setPointerCapture(c.pointerId)},Se=c=>{if(W.current){let b=k.current;Y(M.current,W.current.cx+(c.clientX-W.current.x),W.current.cy+(c.clientY-W.current.y),b.ts,()=>ne(Math.round(k.current.s*100)));return}if(X.current){let b=J(c.clientX,c.clientY);f(X.current.ids,b.x-X.current.p0.x,b.y-X.current.p0.y),X.current.p0=b;return}if(re.current){let b=J(c.clientX,c.clientY),$=re.current,B=Math.max(140,Math.round(b.x-$.x)),P=$.locked?Math.round(B*$.ratio):Math.max(80,Math.round(b.y-$.y));w($.id,B,P);return}if(te.current){let b=J(c.clientX,c.clientY),$=te.current;Ne({x:Math.min($.x0,b.x),y:Math.min($.y0,b.y),w:Math.abs(b.x-$.x0),h:Math.abs(b.y-$.y0)});return}se.current&&ge({from:se.current,to:J(c.clientX,c.clientY)})},Ie=c=>{if(W.current){W.current=null,v.current.classList.remove("is-grabbing");return}if(X.current){X.current=null;return}if(re.current){re.current=null;return}if(te.current){let b=te.current;te.current=null;let $=pe;if(Ne(null),$&&($.w>6||$.h>6)){let B=e.filter(P=>!(P.x>$.x+$.w||P.x+P.w<$.x||P.y>$.y+$.h||P.y+P.h<$.y));m(b.additive?[...new Set([...n,...B.map(P=>P.id)])]:B.map(P=>P.id))}else b.additive||m([]);return}if(se.current){let b=J(c.clientX,c.clientY),$=e.filter(B=>B.type!=="group").find(B=>b.x>=B.x&&b.x<=B.x+B.w&&b.y>=B.y&&b.y<=B.y+B.h);$&&ba(e,t,se.current,$.id)&&T(se.current,$.id),se.current=null,ge(null)}},Ge=(c,b)=>{if(c.button!==0||c.button===1||N||p==="pan")return;c.stopPropagation();let $=c.shiftKey||c.metaKey||c.ctrlKey,B=n.includes(b.id),P;if($?P=B?n.filter(q=>q!==b.id):[...n,b.id]:P=B?n:[b.id],m(P),$)return;let oe=J(c.clientX,c.clientY),R=b.type==="group"&&b.childIds?.length?[b.id,...b.childIds]:P.length>1?P:[b.id];X.current={ids:R,p0:oe},v.current.setPointerCapture(c.pointerId)},Je=(c,b)=>{let[$,B]=String(b.ratio||"1:1").split(":").map(Number),P=Number.isFinite($)&&Number.isFinite(B)&&$>0&&B>0?B/$:1;re.current={id:b.id,x:b.x,y:b.y,locked:b.type==="image"&&b.locked!==!1,ratio:P},v.current.setPointerCapture(c.pointerId)},Qe=(c,b)=>{c.stopPropagation(),se.current=b.id,ge({from:b.id,to:J(c.clientX,c.clientY)}),v.current.setPointerCapture(c.pointerId)},Ce=g.default.useMemo(()=>Object.fromEntries(e.map(c=>[c.id,c])),[e]);return g.default.createElement("div",{className:"cf-board"},g.default.createElement("div",{className:`cf-stage ${r==="lines"?"cf-stage--lines":r==="blank"?"cf-stage--blank":"cf-stage--dots"}${N||p==="pan"?" is-grab":""}`,ref:v,onPointerDown:we,onPointerMove:Se,onPointerUp:Ie,onPointerCancel:Ie,onWheel:fe,onContextMenu:V,style:{"--cf-grid":`${28*Q/100}px`}},g.default.createElement("div",{className:"cf-world",ref:M},g.default.createElement("svg",{className:"cf-edges",width:"1",height:"1"},g.default.createElement("defs",null,g.default.createElement("marker",{id:"cf-arrow",viewBox:"0 0 8 8",refX:"7",refY:"4",markerWidth:"7",markerHeight:"7",orient:"auto"},g.default.createElement("path",{d:"M0 0 L8 4 L0 8 z",className:"cf-arrow-head"}))),t.map(c=>{let b=Ce[c.from],$=Ce[c.to];return!b||!$?null:g.default.createElement("g",{key:c.id,className:"cf-edge","data-id":c.id},g.default.createElement("path",{d:ra(b,$),className:"cf-edge-line",markerEnd:"url(#cf-arrow)"}),g.default.createElement("path",{d:ra(b,$),className:"cf-edge-hit",onPointerDown:B=>{B.stopPropagation(),S(c.id)}},g.default.createElement("title",null,"\u70B9\u51FB\u5220\u9664\u8FD9\u6761\u8FDE\u7EBF")))}),ve?(()=>{let c=Ce[ve.from];return c?g.default.createElement("path",{d:ra(c,{x:ve.to.x,y:ve.to.y-10,w:0,h:20}),className:"cf-edge-line cf-edge-line--ghost"}):null})():null),e.map(c=>g.default.createElement("div",{key:c.id,className:`cf-node${n.includes(c.id)?" is-selected":""}${c.status==="running"?" is-running":""}${c.type==="group"?" is-group":""}`,"data-id":c.id,style:{left:c.x,top:c.y,width:c.w,height:c.h,zIndex:c.type==="group"?1:2},onPointerDown:b=>Ge(b,c)},c.type==="group"?g.default.createElement("div",{className:"cf-node-group-head"},g.default.createElement("span",null,c.name||"\u5206\u7EC4"),c.childIds?.length?g.default.createElement("span",{className:"cf-node-group-count"},c.childIds.length," \u4E2A\u8282\u70B9"):null):g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"cf-node-head"},g.default.createElement("span",{className:"cf-node-type"},ze[c.type]),g.default.createElement("span",{className:"cf-node-name"},c.name||""),g.default.createElement("button",{type:"button",className:"cf-node-port",onPointerDown:b=>Qe(b,c),title:"\u4ECE\u8FD9\u91CC\u62D6\u5230\u53E6\u4E00\u4E2A\u8282\u70B9\u4EE5\u8FDE\u7EBF","aria-label":"\u8FDE\u7EBF\u7AEF\u53E3"})),g.default.createElement("div",{className:"cf-node-body",onDoubleClick:b=>{b.stopPropagation(),I(c)}},g.default.createElement(ft,{node:c,channels:a}))),n.includes(c.id)&&c.type!=="group"?g.default.createElement("span",{className:"cf-node-handle",onPointerDown:b=>{b.stopPropagation(),Je(b,c)},title:"\u8C03\u6574\u5C3A\u5BF8"}):null)),pe&&pe.w>4?g.default.createElement("div",{className:"cf-marquee",style:{left:pe.x,top:pe.y,width:pe.w,height:pe.h}}):null),de?g.default.createElement(pt,{ctx:de,nodes:e,selection:n,actions:y,onClose:()=>le(null)}):null),i?g.default.createElement(dt,{nodes:e,cam:k.current,size:U,onJump:c=>Y(M.current,U.w/2-c.x*k.current.s,U.h/2-c.y*k.current.s,k.current.s,()=>ne(Math.round(k.current.s*100)))}):null,g.default.createElement("div",{className:"cf-zoom"},g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>ce(1/1.25),"aria-label":"\u7F29\u5C0F"},"\u2212"),g.default.createElement("input",{className:"cf-zoom-range",type:"range",min:10,max:300,value:Q,"aria-label":"\u7F29\u653E",onChange:c=>{let b=M.current;if(!b)return;let $=Number(c.target.value)/100,B=k.current,P=U.w/2,oe=U.h/2;Y(b,P-(P-B.tx)/B.s*$,oe-(oe-B.ty)/B.s*$,$,()=>ne(Math.round(k.current.s*100)))}}),g.default.createElement("button",{type:"button",className:"cf-icon-btn",onClick:()=>ce(1.25),"aria-label":"\u653E\u5927"},"+"),g.default.createElement("span",{className:"cf-zoom-num"},Q,"%"),g.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:Z},"\u9002\u5E94")),F?g.default.createElement("p",{className:"cf-editor-hint"},"\u62D6\u7A7A\u767D\u5904\u6846\u9009 \xB7 \u7A7A\u683C\u62D6\u52A8\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u4ECE\u8282\u70B9\u53F3\u4E0A\u7AEF\u53E3\u62D6\u7EBF\u8FDE\u63A5"):null)}function dt({nodes:e,cam:t,size:n,onJump:a}){if(!e.length)return null;let r=168,i=108,p=80,y=Math.min(...e.map(v=>v.x))-p,m=Math.min(...e.map(v=>v.y))-p,f=Math.max(...e.map(v=>v.x+v.w))+p,w=Math.max(...e.map(v=>v.y+v.h))+p,T=Math.max(1,f-y),S=Math.max(1,w-m),I=Math.min(r/T,i/S),E=(r-T*I)/2,z=(i-S*I)/2,F=v=>({x:(v.x-y)*I+E,y:(v.y-m)*I+z,w:v.w*I,h:v.h*I}),M={x:(-t.x/t.s-y)*I+E,y:(-t.y/t.s-m)*I+z,w:n.w/t.s*I,h:n.h/t.s*I};return g.default.createElement("svg",{className:"cf-minimap",viewBox:`0 0 ${r} ${i}`,width:r,height:i,role:"img","aria-label":"\u753B\u5E03\u7F29\u7565\u56FE\uFF0C\u70B9\u51FB\u8DF3\u8F6C",onClick:v=>{let k=v.currentTarget.getBoundingClientRect(),Y=(v.clientX-k.left)/k.width*r,U=(v.clientY-k.top)/k.height*i;a({x:y+(Y-E)/I,y:m+(U-z)/I})}},e.filter(v=>v.type==="group").map(v=>{let k=F(v);return g.default.createElement("rect",{key:v.id,x:k.x,y:k.y,width:k.w,height:k.h,rx:3,className:"cf-mini-group"})}),e.filter(v=>v.type!=="group").map(v=>{let k=F(v);return g.default.createElement("rect",{key:v.id,x:k.x,y:k.y,width:Math.max(3,k.w),height:Math.max(3,k.h),rx:2,className:`cf-mini-node${v.type==="image"?" cf-mini-image":""}`})}),g.default.createElement("rect",{x:M.x,y:M.y,width:Math.max(6,M.w),height:Math.max(6,M.h),rx:2,className:"cf-mini-view"}))}function pt({ctx:e,nodes:t,selection:n,actions:a,onClose:r}){let i=e.id?t.find(m=>m.id===e.id):null,p=m=>()=>{r(),m?.()},y=(()=>{if(e.kind==="edge")return[{icon:"trash",label:"\u5220\u9664\u8FDE\u7EBF",run:p(()=>a.removeEdge?.(e.id))}];if(e.kind==="group")return[{icon:"plus",label:"\u590D\u5236\u5206\u7EC4",run:p(()=>a.duplicate?.())},{icon:"close",label:"\u53D6\u6D88\u5206\u7EC4\uFF08\u4FDD\u7559\u8282\u70B9\uFF09",run:p(()=>a.ungroup?.(e.id))},{sep:!0},{icon:"trash",label:"\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9",danger:!0,run:p(()=>a.deleteGroupDeep?.(e.id))}];if(e.kind==="node"){let m=[];return i?.type==="image"&&m.push({icon:"play",label:"\u7528\u5F53\u524D\u63D0\u793A\u8BCD\u751F\u6210",run:p(()=>a.generateNode?.(e.id))}),m.push({icon:"plus",label:"\u590D\u5236",hint:"\u2318D",run:p(()=>a.duplicate?.())}),m.push({icon:"group",label:"\u5305\u6210\u7EC4",hint:"\u2318G",disabled:n.length<2,run:p(()=>a.wrap?.())}),m.push({sep:!0}),m.push({icon:"trash",label:"\u5220\u9664",hint:"\u232B",danger:!0,run:p(()=>a.removeSelection?.())}),m}return[{icon:"image",label:"\u65B0\u5EFA\u56FE\u7247\u8282\u70B9",run:p(()=>a.addNode?.("image"))},{icon:"text",label:"\u65B0\u5EFA\u6587\u672C\u8282\u70B9",run:p(()=>a.addNode?.("text"))},{icon:"sliders",label:"\u65B0\u5EFA\u914D\u7F6E\u8282\u70B9",run:p(()=>a.addNode?.("config"))},{icon:"group",label:"\u65B0\u5EFA\u5206\u7EC4",run:p(()=>a.addNode?.("group"))},{sep:!0},{icon:"check",label:"\u5168\u9009",hint:"\u2318A",run:p(()=>a.selectAll?.())},{icon:"target",label:"\u9002\u5E94\u89C6\u56FE",hint:"0",run:p(()=>a.fit?.())}]})();return g.default.createElement("div",{className:"cf-ctx",style:{left:e.x,top:e.y},role:"menu",onPointerDown:m=>m.stopPropagation(),onContextMenu:m=>m.preventDefault()},g.default.createElement("p",{className:"cf-ctx-head"},e.kind==="blank"?"\u753B\u5E03":e.kind==="edge"?"\u8FDE\u7EBF":i?.type==="group"?i.name||"\u5206\u7EC4":`${ze[i?.type]||""}\u8282\u70B9`),y.map((m,f)=>m.sep?g.default.createElement("div",{key:`s${f}`,className:"cf-ctx-sep"}):g.default.createElement("button",{key:f,type:"button",className:"cf-ctx-item",role:"menuitem",disabled:m.disabled,onClick:m.run},g.default.createElement(_,{name:m.icon,size:14}),g.default.createElement("span",{className:"cf-ctx-item-label"},m.label),m.hint?g.default.createElement("span",{className:"cf-ctx-item-key"},m.hint):null)))}function $a({canvases:e,onOpen:t,onCreate:n,onRename:a,onDelete:r,onImport:i}){let[p,y]=l.default.useState(null),[m,f]=l.default.useState(null);return l.default.createElement("div",{className:"cf-page"},l.default.createElement("div",{className:"cf-page-inner"},l.default.createElement("div",{className:"cf-page-head"},l.default.createElement("div",null,l.default.createElement("h1",{className:"cf-page-title"},"\u65E0\u9650\u753B\u5E03"),l.default.createElement("p",{className:"cf-page-sub"},"\u5728\u753B\u5E03\u4E0A\u751F\u6210\u3001\u8FDE\u63A5\u548C\u91CD\u7EC4\u56FE\u7247\u4E0E\u6587\u5B57\uFF0C\u8BA9\u521B\u4F5C\u4ECE\u5355\u6B21\u751F\u6210\u53D8\u6210\u8FDE\u7EED\u63A8\u6F14\u3002")),l.default.createElement("div",{className:"cf-page-actions"},l.default.createElement(j,{icon:"upload",onClick:i},"\u5BFC\u5165\u753B\u5E03"),l.default.createElement(j,{variant:"primary",icon:"plus",onClick:n},"\u65B0\u5EFA\u753B\u5E03"))),e.length===0?l.default.createElement(ye,{icon:"canvas",title:"\u8FD8\u6CA1\u6709\u753B\u5E03",hint:"\u65B0\u5EFA\u4E00\u4E2A\u753B\u5E03\u540E\uFF0C\u5C31\u53EF\u4EE5\u72EC\u7ACB\u4FDD\u5B58\u8282\u70B9\u3001\u8FDE\u7EBF\u548C\u753B\u5E03\u5916\u89C2\u3002",action:l.default.createElement(j,{variant:"primary",icon:"plus",onClick:n},"\u65B0\u5EFA\u753B\u5E03")}):l.default.createElement("div",{className:"cf-card"},l.default.createElement("div",{className:"cf-list-head"},l.default.createElement("span",null,"\u540D\u79F0"),l.default.createElement("span",null,"\u5185\u5BB9"),l.default.createElement("span",null,"\u66F4\u65B0")),l.default.createElement("div",{className:"cf-canvas-list"},e.map(w=>l.default.createElement("div",{key:w.id,className:"cf-canvas-row"},l.default.createElement("button",{type:"button",className:"cf-canvas-name",style:{textAlign:"start"},onClick:()=>t(w.id)},w.name||"\u672A\u547D\u540D\u753B\u5E03"),l.default.createElement("span",{className:"cf-canvas-meta"},w.nodes.length," \u4E2A\u8282\u70B9 \xB7 ",w.edges.length," \u6761\u8FDE\u7EBF"),l.default.createElement("span",{className:"cf-canvas-row-actions"},l.default.createElement(ie,{name:"edit",label:"\u91CD\u547D\u540D",onClick:()=>y(w)}),l.default.createElement(ie,{name:"trash",label:"\u5220\u9664",onClick:()=>f(w)}))))))),p?l.default.createElement(ut,{canvas:p,onClose:()=>y(null),onSubmit:w=>{a(p.id,w),y(null)}}):null,m?l.default.createElement(be,{title:"\u5220\u9664\u753B\u5E03\uFF1F",onClose:()=>f(null),footer:l.default.createElement(l.default.Fragment,null,l.default.createElement(j,{onClick:()=>f(null)},"\u53D6\u6D88"),l.default.createElement(j,{variant:"danger",onClick:()=>{r(m.id),f(null)}},"\u5220\u9664"))},l.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u5C06\u5220\u9664\u300C",m.name||"\u672A\u547D\u540D\u753B\u5E03","\u300D\uFF0C\u91CC\u9762\u7684 ",m.nodes.length," \u4E2A\u8282\u70B9\u548C ",m.edges.length," \u6761\u8FDE\u7EBF\u4F1A\u4E00\u8D77\u79FB\u9664\u3002")):null)}function ut({canvas:e,onClose:t,onSubmit:n}){let[a,r]=l.default.useState(e.name||"");return l.default.createElement(be,{title:"\u91CD\u547D\u540D\u753B\u5E03",onClose:t,footer:l.default.createElement(l.default.Fragment,null,l.default.createElement(j,{onClick:t},"\u53D6\u6D88"),l.default.createElement(j,{variant:"primary",onClick:()=>n(a.trim()||"\u672A\u547D\u540D\u753B\u5E03")},"\u4FDD\u5B58"))},l.default.createElement("label",{className:"cf-field"},l.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),l.default.createElement("input",{className:"cf-input",value:a,autoFocus:!0,onChange:i=>r(i.target.value),onKeyDown:i=>{i.key==="Enter"&&n(a.trim()||"\u672A\u547D\u540D\u753B\u5E03")}})))}var mt=[{id:"select",label:"\u9009\u62E9",icon:"cursor",key:"V"},{id:"pan",label:"\u79FB\u52A8",icon:"hand",key:"H"},{id:"focus",label:"\u9002\u5E94",icon:"target",key:"F"},{sep:!0},{id:"text",label:"\u6587\u672C",icon:"text",key:"T"},{id:"image",label:"\u56FE\u7247",icon:"image",key:"I"},{id:"audio",label:"\u97F3\u9891",icon:"audio",key:"A"},{id:"config",label:"\u914D\u7F6E",icon:"sliders",key:"C"},{id:"group",label:"\u5206\u7EC4",icon:"group",key:"G"}];function Aa({canvas:e,channels:t,defaults:n,assistantModel:a,draft:r,onDraftChange:i,showComposer:p=!0,onChange:y,onBack:m,say:f}){let w=Ea(),{cam:T,moveTo:S}=w,[I,E]=l.default.useState([]),[z,F]=l.default.useState("select"),M=r,v=i,[k,Y]=l.default.useState(n?.ratio||"1:1"),[U,ae]=l.default.useState(n?.count||1),[Q,ne]=l.default.useState(n?.modelKey||""),[W,X]=l.default.useState(typeof window<"u"&&window.__CF_DEV_MENU||null),[re,te]=l.default.useState([]),se=l.default.useRef(0),[ve,ge]=l.default.useState(1024),[de,le]=l.default.useState(1024),[pe,Ne]=l.default.useState(null),[N,u]=l.default.useState(!1),O=l.default.useRef(null),G=l.default.useRef(null),J=l.default.useRef(null);l.default.useEffect(()=>{if(!W)return;let s=A=>{G.current?.contains(A.target)||X(null)},C=A=>{A.key==="Escape"&&X(null)};return window.addEventListener("pointerdown",s),window.addEventListener("keydown",C),()=>{window.removeEventListener("pointerdown",s),window.removeEventListener("keydown",C)}},[W]);let Z=e.nodes,ce=e.edges,fe=Z.filter(s=>I.includes(s.id)),V=fe.length===1?fe[0]:null,we=l.default.useMemo(()=>V?ce.filter(s=>s.to===V.id).map(s=>Z.find(C=>C.id===s.from)).filter(s=>s&&s.type!=="group"&&s.type!=="config"):[],[V,ce,Z]),Se=s=>{let C=s.map((A,H)=>({id:`${Date.now()}_${H}_${A.name||"paste"}`,name:A.name||"\u7C98\u8D34\u7684\u56FE\u7247",url:URL.createObjectURL(A),file:A}));C.length&&(te(A=>[...A,...C]),f?.(`\u5DF2\u52A0\u5165 ${C.length} \u5F20\u53C2\u8003\u56FE`))},Ie=s=>te(C=>{let A=C.find(H=>H.id===s);return A?.url&&URL.revokeObjectURL(A.url),C.filter(H=>H.id!==s)}),Ge=()=>J.current?.click(),Je=s=>{Se([...s.target.files||[]]),s.target.value=""},Qe=s=>{let C=s.clipboardData;if(!C)return;let A=[];for(let H of Array.from(C.items||[]))if(H.kind==="file"&&H.type.startsWith("image/")){let K=H.getAsFile();K&&A.push(K)}if(!A.length)for(let H of Array.from(C.files||[]))H.type.startsWith("image/")&&A.push(H);A.length&&(s.preventDefault(),Se(A))},Ce=je(t,"image"),Ze=Le(t,Q)||Ce[0]||null;l.default.useEffect(()=>{V&&(V.type==="image"||V.type==="audio")&&(v(V.prompt||""),V.ratio&&Y(V.ratio))},[V?.id]);let c=s=>y(s),b=(s,C)=>c(A=>({nodes:A.nodes.map(H=>H.id===s?{...H,...C}:H)})),$=(s,C,A)=>{let H=new Set(s);c(K=>({nodes:K.nodes.map(xe=>H.has(xe.id)?{...xe,x:Math.round(xe.x+C),y:Math.round(xe.y+A)}:xe)}))},B=(s,C,A)=>b(s,{w:C,h:A}),P=(s,C)=>c(A=>({edges:[...A.edges,{id:ee("e"),from:s,to:C}]})),oe=s=>c(C=>({edges:C.edges.filter(A=>A.id!==s)})),R=s=>{let C=T.current,A={x:(window.innerWidth/2-C.tx)/C.s,y:(window.innerHeight/2-C.ty)/C.s},H=Ee(s,A,s==="config"?{modelKey:Q||Ce[0]?.key||"",ratio:k,count:U}:{});c(K=>({nodes:[...K.nodes,H]})),E([H.id]),f?.(`\u5DF2\u65B0\u5EFA${ze[s]}\u8282\u70B9`)},q=()=>{let s=M.trim();if(!s)return;if(V&&V.type==="text"){let ue=V.id,me=new AbortController;O.current=me,u(!0);let he=0,Re="",_a=!1,_e=Me=>{_a||c($e=>({nodes:$e.nodes.map(Ae=>Ae.id===ue?Me(Ae):Ae)}))};_e(Me=>({...Me,text:"",status:"running"})),Ve({model:a||null,messages:[{role:"user",text:s}],signal:me.signal,onDelta:(Me,$e)=>{Re=$e;let Ae=Date.now();Ae-he>80&&(he=Ae,_e(Ua=>({...Ua,text:$e})))}}).then(()=>_e(Me=>({...Me,text:Re,status:"done"}))).catch(Me=>_e($e=>({...$e,text:Re||`\u751F\u6210\u5931\u8D25\uFF1A${Me.message}`,status:"failed"}))).finally(()=>{u(!1),O.current=null,v("")});return}let C=V&&V.type==="image"?V:null;if(C){let ue=C.id;c(me=>({nodes:me.nodes.map(he=>he.id===ue?{...he,prompt:s,status:"running",ratio:k}:he)})),setTimeout(()=>{c(me=>({nodes:me.nodes.map(he=>he.id===ue&&he.status==="running"?{...he,status:"done"}:he)}))},900),f?.("\u5F00\u59CB\u751F\u6210");return}let A=T.current,H={x:(window.innerWidth/2-A.tx)/A.s,y:(window.innerHeight/2-A.ty)/A.s},K=Array.from({length:U},(ue,me)=>Ee("image",{x:H.x+me*260,y:H.y},{prompt:s,ratio:k,status:"running"})),xe=new Set(K.map(ue=>ue.id));c(ue=>({nodes:[...ue.nodes,...K]})),E(K.map(ue=>ue.id)),setTimeout(()=>{c(ue=>({nodes:ue.nodes.map(me=>xe.has(me.id)&&me.status==="running"?{...me,status:"done"}:me)}))},900),v(""),f?.("\u5F00\u59CB\u751F\u6210")},He=()=>{let s=xa(Z,I);s&&(c(C=>({nodes:[s,...C.nodes]})),E([s.id]))},Ke=()=>{let s=new Set(I);s.size&&(c(C=>({nodes:C.nodes.filter(A=>!s.has(A.id)),edges:C.edges.filter(A=>!s.has(A.from)&&!s.has(A.to))})),E([]))},ca=()=>{let s=Z.filter(K=>I.includes(K.id));if(!s.length)return;let C={},A=s.map(K=>{let xe=ee(K.type[0]);return C[K.id]=xe,{...K,id:xe,x:K.x+40,y:K.y+40,status:"idle"}}),H=ce.filter(K=>C[K.from]&&C[K.to]).map(K=>({id:ee("e"),from:C[K.from],to:C[K.to]}));c(K=>({nodes:[...K.nodes,...A],edges:[...K.edges,...H]})),E(A.map(K=>K.id))},Ka={duplicate:ca,wrap:He,removeSelection:Ke,removeEdge:oe,addNode:R,selectAll:()=>E(Z.map(s=>s.id)),fit:()=>w.fit?.(),generateNode:s=>{c(C=>({nodes:C.nodes.map(A=>A.id===s?{...A,status:"running"}:A)})),setTimeout(()=>{c(C=>({nodes:C.nodes.map(A=>A.id===s&&A.status==="running"?{...A,status:"done"}:A)}))},900),f?.("\u5F00\u59CB\u751F\u6210")},ungroup:s=>{c(C=>({nodes:C.nodes.filter(A=>A.id!==s)})),E([]),f?.("\u5DF2\u53D6\u6D88\u5206\u7EC4\uFF0C\u8282\u70B9\u4FDD\u7559")},deleteGroupDeep:s=>{c(C=>{let A=C.nodes.find(K=>K.id===s),H=new Set([s,...A?.childIds||[]]);return{nodes:C.nodes.filter(K=>!H.has(K.id)),edges:C.edges.filter(K=>!H.has(K.from)&&!H.has(K.to))}}),E([]),f?.("\u5DF2\u5220\u9664\u5206\u7EC4\u4E0E\u5185\u5BB9")}};return l.default.useEffect(()=>{let s=C=>{if(/input|textarea|select/i.test(C.target.tagName))return;let A=C.metaKey||C.ctrlKey;if(A&&C.key.toLowerCase()==="d"){C.preventDefault(),ca();return}if(A&&C.key.toLowerCase()==="g"){C.preventDefault(),He();return}if(C.key==="Delete"||C.key==="Backspace"){C.preventDefault(),Ke();return}if(C.key==="Escape"){E([]);return}let H=C.key.toLowerCase();H==="v"&&F("select"),H==="h"&&F("pan"),H==="t"&&R("text"),H==="i"&&R("image"),H==="a"&&R("audio"),H==="c"&&R("config"),H==="g"&&R("group")};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[Z,ce,I,M,k,U,Q]),l.default.createElement("div",{className:"cf-editor"},l.default.createElement("nav",{className:"cf-rail","aria-label":"\u753B\u5E03\u5DE5\u5177"},l.default.createElement(ie,{name:"back",label:"\u8FD4\u56DE\u753B\u5E03\u5217\u8868",onClick:m}),l.default.createElement("span",{className:"cf-rail-sep","aria-hidden":"true"}),mt.map((s,C)=>s.sep?l.default.createElement("span",{key:`s${C}`,className:"cf-rail-sep","aria-hidden":"true"}):l.default.createElement("button",{key:s.id,type:"button",className:`cf-rail-btn${z===s.id?" is-on":""}`,title:`${s.label}  ${s.key}`,"aria-label":s.label,"aria-pressed":z===s.id,onClick:()=>{if(s.id==="focus"){w.fit?.();return}if(["text","image","audio","config","group"].includes(s.id)){R(s.id);return}F(s.id)}},l.default.createElement(_,{name:s.icon,size:18})))),l.default.createElement("div",{className:"cf-editor-main"},l.default.createElement("div",{className:"cf-canvas-bar"},l.default.createElement("span",{className:"cf-canvas-bar-name",title:e.name||"\u672A\u547D\u540D\u753B\u5E03"},e.name||"\u672A\u547D\u540D\u753B\u5E03"),l.default.createElement("div",{className:"cf-seg",role:"group","aria-label":"\u7F51\u683C\u6837\u5F0F"},ea.map(s=>l.default.createElement("button",{key:s.id,type:"button",className:(e.grid||"dots")===s.id?"is-on":"",onClick:()=>y({grid:s.id})},s.label)))),l.default.createElement(Ia,{nodes:Z,edges:ce,selection:I,channels:t,grid:e.grid||"dots",tool:z,minimap:!0,camera:pe,camApi:w,showHint:!fe.length,onSelection:E,onMove:$,onResize:B,onConnect:P,onRemoveEdge:oe,onOpenNode:s=>{E([s.id]),v(s.prompt||s.text||"")},actions:Ka}),p?l.default.createElement("div",{className:"cf-composer"},re.length?l.default.createElement("div",{className:"cf-composer-refs"},re.map(s=>l.default.createElement("span",{key:s.id,className:"cf-ref-thumb"},l.default.createElement("img",{src:s.url,alt:s.name}),l.default.createElement("button",{type:"button",className:"cf-ref-x",onClick:()=>Ie(s.id),"aria-label":`\u79FB\u9664 ${s.name}`},"\xD7")))):null,l.default.createElement("textarea",{className:"cf-composer-input",value:M,rows:3,placeholder:V?.type==="image"?"\u63CF\u8FF0\u4F60\u60F3\u628A\u8FD9\u5F20\u56FE\u6539\u6210\u4EC0\u4E48":V?.type==="text"?"\u63CF\u8FF0\u8981\u751F\u6210\u7684\u6587\u5B57\u5185\u5BB9":"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:s=>v(s.target.value),onPaste:Qe,onCompositionStart:()=>{se.current=Date.now()},onCompositionEnd:()=>{se.current=Date.now()},onKeyDown:s=>{s.key==="Enter"&&(s.nativeEvent.isComposing||Date.now()-se.current<500||s.shiftKey||(s.preventDefault(),se.current=0,q()))}}),l.default.createElement("div",{className:"cf-composer-bar",ref:G},l.default.createElement("div",{className:"cf-composer-left"},l.default.createElement("div",{className:"cf-bar-slot"},l.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>X(W==="ref"?null:"ref"),"aria-expanded":W==="ref","aria-haspopup":"menu"},l.default.createElement(_,{name:"plus",size:15}),"\u53C2\u8003",re.length+we.length?l.default.createElement("span",{className:"cf-bar-badge"},re.length+we.length):null),W==="ref"?l.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},l.default.createElement("p",{className:"cf-menu-head"},"\u753B\u5E03\u4E0A\u5DF2\u8FDE\u63A5\u7684\u7D20\u6750"),we.length?we.map(s=>l.default.createElement("button",{key:s.id,type:"button",className:"cf-menu-item",role:"menuitem",onClick:()=>{v(C=>`${C}${C&&!C.endsWith(" ")?" ":""}@${ze[s.type]}${s.name?`:${s.name}`:""} `),X(null)}},l.default.createElement(_,{name:s.type==="image"?"image":s.type==="text"?"text":"audio",size:14}),l.default.createElement("span",{className:"cf-menu-label"},s.name||(s.prompt||s.text||"\u672A\u547D\u540D\u7D20\u6750").slice(0,18)))):l.default.createElement("p",{className:"cf-menu-empty"},"\u5148\u628A\u7D20\u6750\u8FDE\u5230\u8FD9\u4E2A\u8282\u70B9\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u5F15\u7528"),l.default.createElement("div",{className:"cf-menu-sep"}),l.default.createElement("button",{type:"button",className:"cf-menu-item",role:"menuitem",onClick:Ge},l.default.createElement(_,{name:"upload",size:14}),l.default.createElement("span",{className:"cf-menu-label"},"\u4ECE\u672C\u5730\u4E0A\u4F20\u56FE\u7247")),l.default.createElement("input",{ref:J,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:Je})):null),l.default.createElement("div",{className:"cf-bar-slot"},l.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>{if(W!=="ratio"){let s=k.split(":").map(Number);s.length===2&&s.every(C=>Number.isFinite(C)&&C>0)&&(ge(s[0]),le(s[1]))}X(W==="ratio"?null:"ratio")},"aria-expanded":W==="ratio","aria-haspopup":"menu"},l.default.createElement(_,{name:"frame",size:15}),k),W==="ratio"?l.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},l.default.createElement("p",{className:"cf-menu-head"},"\u753B\u9762\u6BD4\u4F8B"),De.map(s=>l.default.createElement("button",{key:s.id,type:"button",className:`cf-menu-item${k===s.id?" is-on":""}`,role:"menuitem",onClick:()=>{Y(s.id),X(null)}},l.default.createElement("span",{className:"cf-menu-label"},s.label),l.default.createElement("span",{className:"cf-menu-meta"},s.w," \xD7 ",s.h))),l.default.createElement("div",{className:"cf-menu-sep"}),l.default.createElement("p",{className:"cf-menu-head"},"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),l.default.createElement("div",{className:"cf-menu-custom"},l.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:ve,"aria-label":"\u5BBD",onChange:s=>ge(Number(s.target.value.replace(/\D/g,""))||0)}),l.default.createElement("span",{className:"cf-menu-x","aria-hidden":"true"},"\xD7"),l.default.createElement("input",{className:"cf-input cf-input--num cf-input--tiny",value:de,"aria-label":"\u9AD8",onChange:s=>le(Number(s.target.value.replace(/\D/g,""))||0)}),l.default.createElement("button",{type:"button",className:"cf-btn cf-btn--primary cf-btn--sm",disabled:!ve||!de,onClick:()=>{Y(`${ve}:${de}`),X(null)}},"\u5E94\u7528"))):null),l.default.createElement("div",{className:"cf-bar-slot"},l.default.createElement("button",{type:"button",className:"cf-bar-btn",onClick:()=>X(W==="count"?null:"count"),"aria-expanded":W==="count","aria-haspopup":"menu"},U," \u5F20",l.default.createElement(_,{name:"chevron",size:12})),W==="count"?l.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu"},l.default.createElement("p",{className:"cf-menu-head"},"\u751F\u6210\u5F20\u6570"),[1,2,4].map(s=>l.default.createElement("button",{key:s,type:"button",className:`cf-menu-item${U===s?" is-on":""}`,role:"menuitem",onClick:()=>{ae(s),X(null)}},s," \u5F20"))):null)),l.default.createElement("div",{className:"cf-composer-right"},l.default.createElement("div",{className:"cf-bar-slot"},l.default.createElement("button",{type:"button",className:"cf-bar-btn cf-bar-btn--select",onClick:()=>X(W==="model"?null:"model"),"aria-expanded":W==="model","aria-haspopup":"menu"},l.default.createElement(_,{name:"bars",size:15}),l.default.createElement("span",{className:"cf-bar-label"},Ze?Ze.label:"\u9009\u62E9\u6A21\u578B"),l.default.createElement(_,{name:"chevron",size:12})),W==="model"?l.default.createElement("div",{className:"cf-menu cf-menu--up",role:"menu",style:{width:300}},l.default.createElement("p",{className:"cf-menu-head"},"\u751F\u56FE\u6A21\u578B"),Ce.length?Ce.map(s=>l.default.createElement("button",{key:s.key,type:"button",className:`cf-menu-item${s.key===Q?" is-on":""}`,role:"menuitem",onClick:()=>{ne(s.key),X(null)}},l.default.createElement("span",{className:"cf-menu-label"},s.label),l.default.createElement("span",{className:"cf-menu-meta"},s.channel.name||s.channel.protocol))):l.default.createElement("p",{className:"cf-menu-empty"},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0")):null),fe.length?l.default.createElement("span",{style:{display:"inline-flex",gap:2}},l.default.createElement(ie,{name:"group",label:"\u5305\u6210\u7EC4",onClick:He}),l.default.createElement(ie,{name:"trash",label:"\u5220\u9664\u9009\u4E2D",onClick:Ke})):null,N?l.default.createElement("button",{type:"button",className:"cf-send","aria-label":"\u505C\u6B62\u751F\u6210","data-tip":"\u505C\u6B62\u751F\u6210",onClick:()=>{O.current?.abort(),u(!1)}},l.default.createElement(_,{name:"stop",size:14})):l.default.createElement("button",{type:"button",className:"cf-send",onClick:q,disabled:!M.trim(),"aria-label":"\u53D1\u9001\u6D88\u606F","data-tip":"\u53D1\u9001\u6D88\u606F"},l.default.createElement(_,{name:"arrowUp",size:17}))))):null))}var h=ke(require("react"),1);function Ta({channels:e,defaults:t,records:n,prompt:a,onPrompt:r,onCreateRecord:i,onDeleteRecords:p,onLookupPrompts:y,say:m}){let f=r,[w,T]=h.default.useState(t?.ratio||"1:1"),[S,I]=h.default.useState(t?.quality||"\u81EA\u52A8"),[E,z]=h.default.useState(t?.resolution||"\u81EA\u52A8"),[F,M]=h.default.useState(t?.modelKey||""),[v,k]=h.default.useState(1024),[Y,U]=h.default.useState(1024),[ae,Q]=h.default.useState(!0),[ne,W]=h.default.useState([]),[X,re]=h.default.useState(!1),[te,se]=h.default.useState([]),[ve,ge]=h.default.useState(!1),de=je(e,"image"),le=Le(e,F)||de[0]||null,pe=u=>{T(u);let O=De.find(G=>G.id===u);O&&(k(O.w),U(O.h))},Ne=()=>{let u=a.trim();if(!u){m?.("\u5148\u5199\u4E00\u53E5\u63D0\u793A\u8BCD");return}let O=J=>{let Z=Math.max(256,Math.min(4096,Math.round(J)));return ae?Math.round(Z/16)*16:Z};re(!0);let G={id:`r${Date.now().toString(36)}`,prompt:u,model:le?le.label:"\u672A\u9009\u62E9\u6A21\u578B",ratio:w,size:`${O(v)}x${O(Y)}`,quality:S,resolution:E,at:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};i?.(G),setTimeout(()=>{re(!1),se(J=>[{...G,id:`img${Date.now().toString(36)}`},...J]),m?.("\u751F\u6210\u5B8C\u6210")},1100)},N=u=>W(O=>O.includes(u)?O.filter(G=>G!==u):[...O,u]);return h.default.createElement("div",{className:"cf-page"},h.default.createElement("div",{className:"cf-page-inner"},h.default.createElement("div",{className:"cf-studio"},h.default.createElement("div",{className:"cf-studio-col cf-studio-col--records"},h.default.createElement("div",{className:"cf-card"},h.default.createElement("div",{className:"cf-card-head"},h.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u8BB0\u5F55"),h.default.createElement("span",{className:"cf-card-count"},n.length)),h.default.createElement("div",{className:"cf-card-body",style:{display:"grid",gap:"var(--cf-sp-3)"}},h.default.createElement("div",{style:{display:"flex",gap:6}},h.default.createElement(j,{size:"sm",icon:"plus",onClick:()=>f("")},"\u65B0\u5EFA"),h.default.createElement(j,{size:"sm",onClick:()=>W(n.map(u=>u.id))},"\u5168\u9009"),h.default.createElement(j,{size:"sm",variant:"danger",disabled:!ne.length,onClick:()=>{p?.(ne),W([])}},"\u5220\u9664")),n.length===0?h.default.createElement("div",{className:"cf-drop",style:{minHeight:120}},"\u6682\u65E0\u751F\u6210\u8BB0\u5F55"):h.default.createElement("div",{className:"cf-record-list"},n.map(u=>h.default.createElement("div",{key:u.id,style:{display:"flex",alignItems:"center",gap:6}},h.default.createElement("input",{type:"checkbox",checked:ne.includes(u.id),onChange:()=>N(u.id),"aria-label":`\u9009\u62E9 ${u.prompt}`}),h.default.createElement("button",{type:"button",className:"cf-record",style:{flex:1,minWidth:0},onClick:()=>{f(u.prompt),T(u.ratio)}},h.default.createElement("span",{className:"cf-record-prompt"},u.prompt),h.default.createElement("span",{className:"cf-record-meta"},u.model," \xB7 ",u.size," \xB7 ",u.at)))))))),h.default.createElement("div",{className:"cf-studio-col"},h.default.createElement("div",{className:"cf-card"},h.default.createElement("div",{className:"cf-card-head"},h.default.createElement("span",{className:"cf-card-title"},"\u751F\u56FE\u5DE5\u4F5C\u53F0")),h.default.createElement("div",{className:"cf-card-body cf-form"},h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("div",{className:"cf-form-head"},h.default.createElement("span",{className:"cf-label"},"\u63D0\u793A\u8BCD"),h.default.createElement("div",{className:"cf-form-head-actions"},h.default.createElement(j,{size:"sm",icon:"book",onClick:()=>y?.()},"\u67E5\u770B\u63D0\u793A\u8BCD\u5E93"))),h.default.createElement("textarea",{className:"cf-input cf-input--area",rows:4,value:a,placeholder:"\u63CF\u8FF0\u753B\u9762\u4E3B\u4F53\u3001\u98CE\u683C\u3001\u6784\u56FE\u3001\u5149\u7EBF\u548C\u7528\u9014",onChange:u=>f(u.target.value)})),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("div",{className:"cf-form-head"},h.default.createElement("span",{className:"cf-label"},"\u53C2\u8003\u56FE"),h.default.createElement("div",{className:"cf-form-head-actions"},h.default.createElement(j,{size:"sm",onClick:()=>m?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u526A\u5207\u677F"),h.default.createElement(j,{size:"sm",icon:"upload",onClick:()=>m?.("\u53C2\u8003\u56FE\u63A5\u771F\u5B9E\u6E20\u9053\u540E\u53EF\u7528")},"\u4E0A\u4F20"))),h.default.createElement("div",{className:"cf-drop"},"\u6682\u65E0\u53C2\u8003\u56FE\uFF0C\u53EF\u5C06\u56FE\u7247\u62D6\u5230\u8FD9\u91CC")),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("span",{className:"cf-label"},"\u6A21\u578B"),h.default.createElement("div",{style:{position:"relative"}},h.default.createElement("button",{type:"button",className:"cf-model-pill",onClick:()=>ge(u=>!u)},h.default.createElement(_,{name:"sparkle",size:13}),h.default.createElement("span",null,le?le.label:"\u9009\u62E9\u6A21\u578B"),h.default.createElement(_,{name:"chevron",size:12})),ve?h.default.createElement("div",{className:"cf-menu",style:{position:"absolute",top:"calc(100% + 6px)",left:0,width:300}},de.length?de.map(u=>h.default.createElement("button",{key:u.key,type:"button",className:`cf-menu-item${u.key===(F||de[0]?.key)?" is-on":""}`,onClick:()=>{M(u.key),ge(!1)}},u.label," ",h.default.createElement("span",{style:{color:"var(--cf-caption)"}},"\xB7 ",u.channel.name||u.channel.protocol))):h.default.createElement("p",{className:"cf-menu-head",style:{whiteSpace:"normal"}},"\u8FD8\u6CA1\u6709\u53EF\u7528\u6A21\u578B\uFF0C\u53BB\u300C\u914D\u7F6E \u2192 \u6E20\u9053\u300D\u6DFB\u52A0\u3002")):null)),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("span",{className:"cf-label"},"\u8D28\u91CF"),h.default.createElement("div",{className:"cf-chips"},Ye.map(u=>h.default.createElement("button",{key:u,type:"button",className:`cf-chip${S===u?" is-on":""}`,onClick:()=>I(u)},u)))),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("div",{className:"cf-form-head"},h.default.createElement("span",{className:"cf-label"},"\u5C3A\u5BF8"),h.default.createElement("label",{className:"cf-switch",style:{marginInlineStart:"auto"}},h.default.createElement("span",null,"16 \u500D\u6570\u5BF9\u9F50"),h.default.createElement("input",{type:"checkbox",checked:ae,onChange:u=>Q(u.target.checked)}))),h.default.createElement("div",{className:"cf-size-row"},h.default.createElement("input",{className:"cf-input cf-input--num",value:v,"aria-label":"\u5BBD",onChange:u=>k(Number(u.target.value.replace(/\D/g,""))||0)}),h.default.createElement(_,{name:"link",size:14,style:{color:"var(--cf-caption)",flex:"0 0 auto"}}),h.default.createElement("input",{className:"cf-input cf-input--num",value:Y,"aria-label":"\u9AD8",onChange:u=>U(Number(u.target.value.replace(/\D/g,""))||0)})),h.default.createElement("div",{className:"cf-chips"},De.map(u=>h.default.createElement("button",{key:u.id,type:"button",className:`cf-chip cf-chip--tag${w===u.id?" is-on":""}`,onClick:()=>pe(u.id)},u.label)))),h.default.createElement("div",{className:"cf-form-row"},h.default.createElement("span",{className:"cf-label"},"\u5206\u8FA8\u7387"),h.default.createElement("div",{className:"cf-chips"},We.map(u=>h.default.createElement("button",{key:u,type:"button",className:`cf-chip${E===u?" is-on":""}`,onClick:()=>z(u)},u)))),h.default.createElement(j,{variant:"primary",icon:X?"refresh":"play",onClick:Ne,disabled:X||!a.trim()},X?"\u751F\u6210\u4E2D\u2026":"\u5F00\u59CB\u751F\u6210")))),h.default.createElement("div",{className:"cf-studio-col"},h.default.createElement("div",{className:"cf-card"},h.default.createElement("div",{className:"cf-card-head"},h.default.createElement("span",{className:"cf-card-title"},"\u751F\u6210\u7ED3\u679C"),h.default.createElement("span",{className:"cf-card-count"},te.length)),h.default.createElement("div",{className:"cf-card-body"},te.length===0?h.default.createElement(ye,{icon:"image",title:"\u8FD8\u6CA1\u6709\u751F\u6210\u56FE\u7247",hint:"\u5728\u5DE6\u8FB9\u5199\u597D\u63D0\u793A\u8BCD\uFF0C\u70B9\u5F00\u59CB\u751F\u6210\u3002"}):h.default.createElement("div",{className:"cf-results"},te.map(u=>h.default.createElement(vt,{key:u.id,record:u})))))))))}function vt({record:e}){let t=h.default.useRef(null);return h.default.useEffect(()=>{let n=t.current;if(!n)return;let a=320;n.width=a,n.height=a;let r=n.getContext("2d"),i=11;for(let m of`${e.prompt}${e.id}`)i=(i*31+m.charCodeAt(0))%2147483647;let p=()=>(i=i*16807%2147483647)/2147483647;r.fillStyle="#141414",r.fillRect(0,0,a,a);let y=r.createRadialGradient(a*p(),a*p(),20,a/2,a/2,a*.7);y.addColorStop(0,"rgba(255,255,255,0.18)"),y.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=y,r.fillRect(0,0,a,a),r.strokeStyle="rgba(255,255,255,0.3)",r.lineWidth=1.4;for(let m=0;m<5;m++){let f=a*(.2+p()*.6);r.beginPath(),r.moveTo(0,f),r.lineTo(a,f+(p()-.5)*60),r.stroke()}},[e.id,e.prompt]),h.default.createElement("figure",{className:"cf-result",title:`${e.prompt}
${e.model} \xB7 ${e.size}`},h.default.createElement("canvas",{ref:t,"aria-label":e.prompt}))}var L=ke(require("react"),1);var oa=6;function Ba({prompts:e,sources:t,onUse:n,onBack:a,returnTo:r}){let[i,p]=L.default.useState(""),[y,m]=L.default.useState("\u5168\u90E8"),[f,w]=L.default.useState("\u5168\u90E8"),[T,S]=L.default.useState(oa),I=["\u5168\u90E8",...new Set(e.map(v=>v.category).filter(Boolean))],E=["\u5168\u90E8",...new Set(e.flatMap(v=>v.tags||[]))],z=e.filter(v=>{if(y!=="\u5168\u90E8"&&v.category!==y||f!=="\u5168\u90E8"&&!(v.tags||[]).includes(f))return!1;if(!i)return!0;let k=i.toLowerCase();return(v.title||"").toLowerCase().includes(k)||(v.text||"").toLowerCase().includes(k)||(v.tags||[]).some(Y=>Y.toLowerCase().includes(k))}),F=z.slice(0,T),M=z.length>F.length;return L.default.useEffect(()=>{S(oa)},[i,y,f]),L.default.createElement("div",{className:"cf-page"},L.default.createElement("div",{className:"cf-page-inner"},L.default.createElement("div",{className:"cf-title-center"},L.default.createElement("h1",null,"\u63D0\u793A\u8BCD\u4E2D\u5FC3"),L.default.createElement("p",null,"\u5F53\u524D\u5171 ",e.length," \u6761\u63D0\u793A\u8BCD"),r&&a?L.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",style:{marginTop:10},onClick:a},"\u8FD4\u56DE\u751F\u56FE\u5DE5\u4F5C\u53F0"):null),L.default.createElement("div",{className:"cf-split"},L.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},L.default.createElement("div",{className:"cf-filter-group"},L.default.createElement("span",{className:"cf-filter-title"},"\u5206\u7C7B"),L.default.createElement("div",{className:"cf-filter-chips"},I.map(v=>L.default.createElement("button",{key:v,type:"button",className:`cf-chip cf-chip--tag${y===v?" is-on":""}`,onClick:()=>m(v)},v)))),L.default.createElement("div",{className:"cf-filter-group"},L.default.createElement("span",{className:"cf-filter-title"},"\u6807\u7B7E"),L.default.createElement("div",{className:"cf-filter-chips"},E.map(v=>L.default.createElement("button",{key:v,type:"button",className:`cf-chip cf-chip--tag${f===v?" is-on":""}`,onClick:()=>w(v)},v))))),L.default.createElement("div",null,L.default.createElement("div",{className:"cf-search"},L.default.createElement(_,{name:"search",size:15}),L.default.createElement("input",{className:"cf-input",value:i,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u6216\u6807\u7B7E",onChange:v=>p(v.target.value)})),t.length===0?L.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u63D0\u793A\u8BCD\u6765\u6E90\u3002\u5230\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u540E\uFF0C\u8FD9\u91CC\u4F1A\u5206\u9875\u52A0\u8F7D\u66F4\u591A\u3002"):null,z.length===0?L.default.createElement(ye,{icon:"book",title:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",hint:i||y!=="\u5168\u90E8"||f!=="\u5168\u90E8"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7B5B\u9009\u6761\u4EF6\u8BD5\u8BD5\u3002":"\u5148\u53BB\u300C\u914D\u7F6E \u2192 \u63D0\u793A\u8BCD\u6765\u6E90\u300D\u6DFB\u52A0\u6765\u6E90\u3002"}):L.default.createElement(L.default.Fragment,null,L.default.createElement("ul",{className:"cf-prompt-grid"},F.map(v=>L.default.createElement("li",{key:v.id,className:"cf-prompt-card"},L.default.createElement("span",{className:"cf-prompt-title"},v.title),L.default.createElement("span",{className:"cf-prompt-text"},v.text),L.default.createElement("span",{className:"cf-prompt-tags"},v.category?L.default.createElement("span",{className:"cf-tag"},v.category):null,(v.tags||[]).map(k=>L.default.createElement("span",{key:k,className:"cf-tag"},k))),L.default.createElement("span",{style:{display:"flex",gap:6,marginTop:4}},L.default.createElement("button",{type:"button",className:"cf-btn cf-btn--ghost cf-btn--sm",onClick:()=>n(v)},"\u4F7F\u7528\u6B64\u63D0\u793A\u8BCD"))))),M?L.default.createElement("div",{className:"cf-more"},L.default.createElement(j,{onClick:()=>S(v=>v+oa)},"\u52A0\u8F7D\u66F4\u591A\uFF08\u8FD8\u6709 ",z.length-F.length," \u6761\uFF09")):L.default.createElement("p",{className:"cf-end"},"\u5DF2\u7ECF\u5230\u5E95\u4E86"))))))}var D=ke(require("react"),1);function Pa({assets:e,onSave:t,onDelete:n,onImport:a,say:r}){let[i,p]=D.default.useState(""),[y,m]=D.default.useState("all"),[f,w]=D.default.useState(null),[T,S]=D.default.useState(null),I=e.filter(z=>{if(y!=="all"&&z.kind!==y)return!1;if(!i)return!0;let F=i.toLowerCase();return[z.title,z.text,z.source,...z.tags||[]].filter(Boolean).some(M=>String(M).toLowerCase().includes(F))});return D.default.createElement("div",{className:"cf-page"},D.default.createElement("div",{className:"cf-page-inner"},D.default.createElement("div",{className:"cf-page-head"},D.default.createElement("div",null,D.default.createElement("h1",{className:"cf-page-title"},"\u6211\u7684\u8D44\u4EA7"),D.default.createElement("p",{className:"cf-page-sub"},"\u628A\u5E38\u7528\u7684\u6587\u5B57\u548C\u56FE\u7247\u5B58\u4E0B\u6765\uFF0C\u4E4B\u540E\u6309\u7C7B\u578B\u3001\u6807\u9898\u6216\u6807\u7B7E\u5FEB\u901F\u627E\u56DE\u6765\u3002")),D.default.createElement("div",{className:"cf-page-actions"},D.default.createElement(j,{icon:"upload",onClick:a},"\u5BFC\u5165\u8D44\u4EA7"),D.default.createElement(j,{icon:"download",onClick:()=>{let z=new Blob([JSON.stringify({version:1,assets:e},null,2)],{type:"application/json"}),F=document.createElement("a");F.href=URL.createObjectURL(z),F.download="my-assets.json",F.click(),setTimeout(()=>URL.revokeObjectURL(F.href),2e3),r?.("\u5DF2\u5BFC\u51FA\u8D44\u4EA7")}},"\u5BFC\u51FA\u8D44\u4EA7"),D.default.createElement(j,{variant:"primary",icon:"plus",onClick:()=>w({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7"))),D.default.createElement("div",{className:"cf-split",style:{marginBottom:"var(--cf-sp-4)"}},D.default.createElement("aside",{className:"cf-filters","aria-label":"\u7B5B\u9009"},D.default.createElement("div",{className:"cf-filter-group"},D.default.createElement("span",{className:"cf-filter-title"},"\u7C7B\u578B"),D.default.createElement("div",{className:"cf-filter-chips"},ta.map(z=>D.default.createElement("button",{key:z.id,type:"button",className:`cf-chip cf-chip--tag${y===z.id?" is-on":""}`,onClick:()=>m(z.id)},z.label))))),D.default.createElement("div",{className:"cf-search",style:{marginBottom:0}},D.default.createElement(_,{name:"search",size:15}),D.default.createElement("input",{className:"cf-input",value:i,placeholder:"\u641C\u7D22\u6807\u9898\u3001\u5185\u5BB9\u3001\u6807\u7B7E\u6216\u6765\u6E90",onChange:z=>p(z.target.value)}))),I.length===0?D.default.createElement(ye,{icon:"folder",title:"\u6CA1\u6709\u627E\u5230\u8D44\u4EA7",hint:i||y!=="all"?"\u6362\u4E2A\u5173\u952E\u8BCD\u6216\u7C7B\u578B\u8BD5\u8BD5\u3002":"\u65B0\u589E\u4E00\u6761\uFF0C\u6216\u4ECE\u6587\u4EF6\u5BFC\u5165\u3002",action:D.default.createElement(j,{variant:"primary",icon:"plus",onClick:()=>w({kind:"text",title:"",text:"",tags:[],source:"\u624B\u52A8\u6DFB\u52A0"})},"\u65B0\u589E\u8D44\u4EA7")}):D.default.createElement("div",{className:"cf-asset-grid"},I.map(z=>D.default.createElement("div",{key:z.id,className:"cf-asset"},D.default.createElement("div",{className:"cf-asset-thumb"},z.kind==="image"&&z.cover?D.default.createElement("img",{src:z.cover,alt:z.title}):D.default.createElement(_,{name:z.kind==="image"?"image":z.kind==="video"?"play":"text",size:22})),D.default.createElement("div",{className:"cf-asset-body"},D.default.createElement("span",{className:"cf-asset-title"},z.title||"\u672A\u547D\u540D\u8D44\u4EA7"),D.default.createElement("span",{className:"cf-asset-meta"},z.source||"\u6765\u6E90\u672A\u6CE8\u660E",z.tags?.length?` \xB7 ${z.tags.join(" / ")}`:""),D.default.createElement("span",{style:{display:"flex",gap:2,marginTop:4}},D.default.createElement(ie,{name:"edit",label:"\u7F16\u8F91",onClick:()=>w({...z})}),D.default.createElement(ie,{name:"trash",label:"\u5220\u9664",onClick:()=>S(z)}))))))),f?D.default.createElement(gt,{asset:f,onClose:()=>w(null),onSave:z=>{let F=z.id?e.map(M=>M.id===z.id?z:M):[...e,{...z,id:ee("a")}];t(F),w(null),r?.(z.id?"\u8D44\u4EA7\u5DF2\u66F4\u65B0":"\u8D44\u4EA7\u5DF2\u4FDD\u5B58")}}):null,T?D.default.createElement(be,{title:"\u5220\u9664\u8D44\u4EA7\uFF1F",onClose:()=>S(null),footer:D.default.createElement(D.default.Fragment,null,D.default.createElement(j,{onClick:()=>S(null)},"\u53D6\u6D88"),D.default.createElement(j,{variant:"danger",onClick:()=>{n(T.id),S(null),r?.("\u8D44\u4EA7\u5DF2\u5220\u9664")}},"\u5220\u9664"))},D.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u786E\u5B9A\u5220\u9664\u300C",T.title||"\u672A\u547D\u540D\u8D44\u4EA7","\u300D\u5417\uFF1F\u5220\u9664\u540E\u4F1A\u4ECE\u6211\u7684\u8D44\u4EA7\u4E2D\u79FB\u9664\u3002")):null)}function gt({asset:e,onClose:t,onSave:n}){let[a,r]=D.default.useState({...e,tags:e.tags||[]}),i=(f,w)=>r(T=>({...T,[f]:w})),[p,y]=D.default.useState(""),m=a.title?.trim()&&(a.kind!=="text"||a.text?.trim());return D.default.createElement(be,{title:e.id?"\u7F16\u8F91\u8D44\u4EA7":"\u65B0\u589E\u8D44\u4EA7",onClose:t,footer:D.default.createElement(D.default.Fragment,null,D.default.createElement(j,{onClick:t},"\u53D6\u6D88"),D.default.createElement(j,{variant:"primary",disabled:!m,onClick:()=>n({...a,title:a.title.trim()})},"\u4FDD\u5B58"))},D.default.createElement("div",{className:"cf-field"},D.default.createElement("span",{className:"cf-label"},"\u7C7B\u578B"),D.default.createElement("div",{className:"cf-chips"},ta.filter(f=>f.id!=="all").map(f=>D.default.createElement("button",{key:f.id,type:"button",className:`cf-chip${a.kind===f.id?" is-on":""}`,onClick:()=>i("kind",f.id)},f.label)))),D.default.createElement("label",{className:"cf-field"},D.default.createElement("span",{className:"cf-label"},"\u6807\u9898"),D.default.createElement("input",{className:"cf-input",value:a.title,placeholder:"\u7ED9\u8D44\u4EA7\u8D77\u4E00\u4E2A\u5BB9\u6613\u627E\u5230\u7684\u540D\u5B57",onChange:f=>i("title",f.target.value)})),a.kind==="text"?D.default.createElement("label",{className:"cf-field"},D.default.createElement("span",{className:"cf-label"},"\u6587\u672C\u5185\u5BB9"),D.default.createElement("textarea",{className:"cf-input cf-input--area",rows:5,value:a.text||"",placeholder:"\u4FDD\u5B58\u63D0\u793A\u8BCD\u3001\u6587\u6848\u3001\u53C2\u8003\u63CF\u8FF0\u7B49\u6587\u5B57\u7D20\u6750",onChange:f=>i("text",f.target.value)})):D.default.createElement("label",{className:"cf-field"},D.default.createElement("span",{className:"cf-label"},"\u56FE\u7247\u5730\u5740"),D.default.createElement("input",{className:"cf-input",value:a.cover||"",placeholder:"\u7C98\u8D34\u56FE\u7247\u5730\u5740",onChange:f=>i("cover",f.target.value)})),D.default.createElement("label",{className:"cf-field"},D.default.createElement("span",{className:"cf-label"},"\u6807\u7B7E"),D.default.createElement("input",{className:"cf-input",value:p,placeholder:"\u8F93\u5165\u540E\u56DE\u8F66\u6DFB\u52A0",onChange:f=>y(f.target.value),onKeyDown:f=>{if(f.key!=="Enter")return;f.preventDefault();let w=p.trim();w&&(i("tags",[...new Set([...a.tags||[],w])]),y(""))}}),a.tags?.length?D.default.createElement("div",{className:"cf-chips",style:{marginTop:4}},a.tags.map(f=>D.default.createElement("button",{key:f,type:"button",className:"cf-chip cf-chip--tag is-on",onClick:()=>i("tags",a.tags.filter(w=>w!==f)),title:"\u70B9\u51FB\u79FB\u9664"},f," \xD7"))):null),D.default.createElement("label",{className:"cf-field"},D.default.createElement("span",{className:"cf-label"},"\u6765\u6E90"),D.default.createElement("input",{className:"cf-input",value:a.source||"",placeholder:"\u624B\u52A8\u6DFB\u52A0 / \u753B\u5E03 / \u63D0\u793A\u8BCD\u5E93",onChange:f=>i("source",f.target.value)})))}var d=ke(require("react"),1);var ht=[{id:"channels",label:"\u6E20\u9053"},{id:"proxy",label:"\u672C\u5730\u4EE3\u7406"},{id:"defaults",label:"\u504F\u597D\u8BBE\u7F6E"},{id:"sources",label:"\u63D0\u793A\u8BCD\u6765\u6E90"},{id:"webdav",label:"WebDAV"},{id:"storage",label:"\u672C\u5730\u5B58\u50A8"}];function La({tab:e,onTab:t,channels:n,onChannels:a,defaults:r,onDefaults:i,promptSources:p,onPromptSources:y,say:m}){let[f,w]=d.default.useState(null),[T,S]=d.default.useState(null),[I,E]=d.default.useState({name:"",url:""});return d.default.createElement("div",{className:"cf-page"},d.default.createElement("div",{className:"cf-page-inner"},d.default.createElement("div",{className:"cf-page-head"},d.default.createElement("div",null,d.default.createElement("h1",{className:"cf-page-title"},"\u914D\u7F6E\u4E0E\u7528\u6237\u504F\u597D"),d.default.createElement("p",{className:"cf-page-sub"},"\u6E20\u9053\u805A\u5408\u3001\u6A21\u578B\u9009\u62E9\u3001\u540C\u6B65\u4E0E\u672C\u5730\u5B58\u50A8"))),d.default.createElement("div",{className:"cf-config-notice"},d.default.createElement("span",null,"JSON \u6587\u4EF6\u5305\u542B API Key \u548C WebDAV \u51ED\u636E\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1\u3002"),d.default.createElement("span",{className:"cf-config-notice-actions"},d.default.createElement(j,{size:"sm",icon:"upload",onClick:()=>{let M=document.createElement("input");M.type="file",M.accept=".json,application/json",M.onchange=async()=>{let v=M.files?.[0];if(v)try{let k=JSON.parse(await v.text());Array.isArray(k.channels)&&a(k.channels),k.defaults&&i(k.defaults),Array.isArray(k.promptSources)&&y(k.promptSources),m?.("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{m?.("\u914D\u7F6E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},M.click()}},"\u5BFC\u5165\u914D\u7F6E"),d.default.createElement(j,{size:"sm",icon:"download",onClick:()=>{let M={version:1,channels:n,defaults:r,promptSources:p},v=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),k=document.createElement("a");k.href=URL.createObjectURL(v),k.download="chunfeng-config.json",k.click(),setTimeout(()=>URL.revokeObjectURL(k.href),2e3),m?.("\u5DF2\u5BFC\u51FA\u914D\u7F6E\uFF08\u4E0D\u542B\u5BC6\u94A5\uFF09")}},"\u5BFC\u51FA\u914D\u7F6E"))),d.default.createElement("div",{className:"cf-tabs",role:"tablist"},ht.map(M=>d.default.createElement("button",{key:M.id,type:"button",role:"tab","aria-selected":e===M.id,className:`cf-tab${e===M.id?" is-on":""}`,onClick:()=>t(M.id)},M.label))),e==="channels"?d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"cf-section-head"},d.default.createElement("p",{className:"cf-section-desc"},"\u6BCF\u4E2A\u6E20\u9053\u9009\u62E9\u4E00\u4E2A\u534F\u8BAE\u5E76\u62C9\u53D6\u6A21\u578B\uFF0C\u4E3A\u6BCF\u4E2A\u6A21\u578B\u6307\u5B9A\u80FD\u529B\uFF08\u751F\u56FE / \u89C6\u9891 / \u6587\u672C / \u97F3\u9891\uFF09\uFF0C\u5E76\u53EF\u81EA\u5B9A\u4E49\u8C03\u7528\u811A\u672C\u3002"),d.default.createElement(j,{icon:"plus",onClick:()=>w(na())},"\u65B0\u589E\u6E20\u9053")),n.length===0?d.default.createElement(ye,{icon:"sliders",title:"\u8FD8\u6CA1\u6709\u6E20\u9053",hint:"\u65B0\u589E\u4E00\u4E2A\u6E20\u9053\uFF0C\u586B\u597D\u63A5\u53E3\u5730\u5740\u4E0E Key\uFF0C\u5C31\u80FD\u5728\u8FD9\u91CC\u62C9\u53D6\u6A21\u578B\u5E76\u6307\u5B9A\u80FD\u529B\u3002",action:d.default.createElement(j,{variant:"primary",icon:"plus",onClick:()=>w(na())},"\u65B0\u589E\u6E20\u9053")}):d.default.createElement("div",{className:"cf-channel-list"},n.map(M=>d.default.createElement("div",{key:M.id,className:"cf-channel"},d.default.createElement("div",{className:"cf-channel-main"},d.default.createElement("span",{className:"cf-channel-name"},M.name||"\u672A\u547D\u540D\u6E20\u9053"),d.default.createElement("span",{className:"cf-channel-meta"},Pe.find(v=>v.id===M.protocol)?.label||M.protocol," \xB7 ",M.models.length," \u4E2A\u6A21\u578B"," \xB7 ",M.baseUrl,M.keyHint?` \xB7 \u5BC6\u94A5 \u2022\u2022\u2022\u2022${M.keyHint}`:" \xB7 \u672A\u586B\u5BC6\u94A5")),d.default.createElement("span",{className:"cf-channel-actions"},d.default.createElement(ie,{name:"edit",label:"\u7F16\u8F91",onClick:()=>w({...M})}),d.default.createElement(ie,{name:"trash",label:"\u5220\u9664",onClick:()=>S(M)})))))):null,e==="defaults"?d.default.createElement(bt,{channels:n,defaults:r,onDefaults:i}):null,e==="sources"?d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"cf-section-head"},d.default.createElement("p",{className:"cf-section-desc"},"\u63D0\u793A\u8BCD\u5E93\u4ECE\u8FD9\u4E9B\u6765\u6E90\u5206\u9875\u52A0\u8F7D\u3002\u7559\u7A7A\u65F6\u53EA\u663E\u793A\u5185\u7F6E\u63D0\u793A\u8BCD\u3002")),d.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)",display:"grid",gap:"var(--cf-sp-3)"}},d.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,2fr) auto",gap:"var(--cf-sp-2)"}},d.default.createElement("input",{className:"cf-input",placeholder:"\u540D\u79F0",value:I.name,onChange:M=>E(v=>({...v,name:M.target.value}))}),d.default.createElement("input",{className:"cf-input",placeholder:"\u63D0\u793A\u8BCD\u6765\u6E90\u5730\u5740\uFF08JSON\uFF09",value:I.url,onChange:M=>E(v=>({...v,url:M.target.value}))}),d.default.createElement(j,{variant:"primary",disabled:!I.url.trim(),onClick:()=>{y([...p,{id:ee("src"),name:I.name.trim()||"\u672A\u547D\u540D\u6765\u6E90",url:I.url.trim()}]),E({name:"",url:""}),m?.("\u6765\u6E90\u5DF2\u6DFB\u52A0")}},"\u6DFB\u52A0")),p.length===0?d.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u914D\u7F6E\u6765\u6E90\u3002"):d.default.createElement("div",{style:{display:"grid",gap:2}},p.map(M=>d.default.createElement("div",{key:M.id,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 4px",borderBottom:"var(--cf-hair) solid var(--cf-line)"}},d.default.createElement("span",{style:{fontSize:13}},M.name),d.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},M.url),d.default.createElement(ie,{name:"trash",label:"\u79FB\u9664\u6765\u6E90",onClick:()=>y(p.filter(v=>v.id!==M.id)),style:{marginInlineStart:"auto"}})))))):null,e==="proxy"?d.default.createElement(la,{title:"\u672C\u5730\u4EE3\u7406",desc:"\u8BA9\u51FA\u56FE\u8BF7\u6C42\u7ECF\u8FC7\u672C\u673A\u4EE3\u7406\u3002",items:["\u4EE3\u7406\u5730\u5740\uFF08http://127.0.0.1:7890\uFF09","\u4EC5\u5BF9\u6307\u5B9A\u6E20\u9053\u751F\u6548","\u8FDE\u901A\u6027\u6D4B\u8BD5"]}):null,e==="webdav"?d.default.createElement(la,{title:"WebDAV",desc:"\u628A\u753B\u5E03\u548C\u8D44\u4EA7\u540C\u6B65\u5230\u81EA\u5DF1\u7684 WebDAV\u3002",items:["\u670D\u52A1\u5668\u5730\u5740","\u8D26\u53F7\u4E0E\u5BC6\u7801","\u540C\u6B65\u8303\u56F4\uFF1A\u753B\u5E03 / \u8D44\u4EA7 / \u63D0\u793A\u8BCD"]}):null,e==="storage"?d.default.createElement(la,{title:"\u672C\u5730\u5B58\u50A8",desc:"\u6570\u636E\u76EE\u524D\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u672C\u5730\uFF1B\u63A5\u4E0A Host \u540E\u4F1A\u843D\u5230 ~/.dsh/dsh-chunfeng-image/\u3002",items:["\u753B\u5E03\u4E0E\u8282\u70B9","\u751F\u6210\u7684\u56FE\u7247\u6587\u4EF6","\u914D\u7F6E\u6587\u4EF6\uFF08\u542B\u5BC6\u94A5\u51ED\u8BC1\uFF09"]}):null),f?d.default.createElement(xt,{channel:f,onClose:()=>w(null),onSave:M=>{let v=n.some(k=>k.id===M.id);a(v?n.map(k=>k.id===M.id?M:k):[...n,M]),w(null),m?.(v?"\u6E20\u9053\u5DF2\u66F4\u65B0":"\u6E20\u9053\u5DF2\u6DFB\u52A0")}}):null,T?d.default.createElement(be,{title:"\u5220\u9664\u6E20\u9053\uFF1F",onClose:()=>S(null),footer:d.default.createElement(d.default.Fragment,null,d.default.createElement(j,{onClick:()=>S(null)},"\u53D6\u6D88"),d.default.createElement(j,{variant:"danger",onClick:()=>{a(n.filter(M=>M.id!==T.id)),S(null),m?.("\u6E20\u9053\u5DF2\u5220\u9664")}},"\u5220\u9664"))},d.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},"\u5220\u9664\u300C",T.name||"\u672A\u547D\u540D\u6E20\u9053","\u300D\u540E\uFF0C\u5B83\u4E0B\u9762\u7684 ",T.models.length," \u4E2A\u6A21\u578B\u4E5F\u4E0D\u53EF\u7528\u3002")):null)}function bt({channels:e,defaults:t,onDefaults:n}){let a=je(e,"image"),r=i=>n({...t,image:{...t.image,...i}});return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"cf-section-head"},d.default.createElement("p",{className:"cf-section-desc"},"\u65B0\u5EFA\u753B\u5E03\u548C\u914D\u7F6E\u8282\u70B9\u4F1A\u7528\u8FD9\u91CC\u7684\u9ED8\u8BA4\u503C\uFF1B\u5355\u4E2A\u8282\u70B9\u4ECD\u53EF\u5355\u72EC\u8986\u76D6\u3002")),d.default.createElement("div",{className:"cf-defaults"},d.default.createElement("label",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u751F\u56FE\u6A21\u578B"),d.default.createElement("select",{className:"cf-input",value:t.image.modelKey||"",onChange:i=>r({modelKey:i.target.value})},d.default.createElement("option",{value:""},"\u672A\u6307\u5B9A"),a.map(i=>d.default.createElement("option",{key:i.key,value:i.key},i.label," \xB7 ",i.channel.name||i.channel.protocol))),a.length===0?d.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u8FD8\u6CA1\u6709\u5177\u5907\u751F\u56FE\u80FD\u529B\u7684\u6A21\u578B\u3002"):null),d.default.createElement("div",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u6BD4\u4F8B"),d.default.createElement("div",{className:"cf-chips"},De.map(i=>d.default.createElement("button",{key:i.id,type:"button",className:`cf-chip${t.image.ratio===i.id?" is-on":""}`,onClick:()=>r({ratio:i.id})},i.label)))),d.default.createElement("div",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u8D28\u91CF"),d.default.createElement("div",{className:"cf-chips"},Ye.map(i=>d.default.createElement("button",{key:i,type:"button",className:`cf-chip${t.image.quality===i?" is-on":""}`,onClick:()=>r({quality:i})},i)))),d.default.createElement("div",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u9ED8\u8BA4\u5206\u8FA8\u7387"),d.default.createElement("div",{className:"cf-chips"},We.map(i=>d.default.createElement("button",{key:i,type:"button",className:`cf-chip${t.image.resolution===i?" is-on":""}`,onClick:()=>r({resolution:i})},i)))),d.default.createElement("div",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u753B\u5E03\u9ED8\u8BA4\u751F\u56FE\u5F20\u6570"),d.default.createElement("div",{className:"cf-chips"},[1,2,4].map(i=>d.default.createElement("button",{key:i,type:"button",className:`cf-chip${t.image.count===i?" is-on":""}`,onClick:()=>r({count:i})},i," \u5F20"))))))}function la({title:e,desc:t,items:n}){return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"cf-section-head"},d.default.createElement("p",{className:"cf-section-desc"},t)),d.default.createElement("div",{className:"cf-card",style:{padding:"var(--cf-sp-4)"}},d.default.createElement("p",{style:{fontSize:13,fontWeight:500,marginBottom:8}},e),d.default.createElement("ul",{style:{display:"grid",gap:6}},n.map(a=>d.default.createElement("li",{key:a,style:{fontSize:12,color:"var(--cf-muted)",display:"flex",gap:8,alignItems:"center"}},d.default.createElement("span",{style:{width:4,height:4,borderRadius:999,background:"var(--cf-caption)"},"aria-hidden":"true"}),a))),d.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",marginTop:12}},"\u8FD9\u4E00\u7248\u5148\u628A\u4F4D\u7F6E\u7559\u597D\uFF0C\u63A5\u5165 Host \u540E\u518D\u586B\u3002")))}function xt({channel:e,onClose:t,onSave:n}){let[a,r]=d.default.useState({...e}),[i,p]=d.default.useState(""),[y,m]=d.default.useState(""),f=(S,I)=>r(E=>({...E,[S]:I})),w=()=>{let S=y.trim();if(S){if(a.models.some(I=>I.id===S)){m("");return}f("models",[...a.models,{id:S,label:S,caps:yt(S),enabled:!0,source:"manual"}]),m("")}},T=(S,I)=>{f("models",a.models.map(E=>{if(E.id!==S)return E;let z=E.caps||[];return{...E,caps:z.includes(I)?z.filter(F=>F!==I):[...z,I]}}))};return d.default.createElement(be,{title:e.id&&e.models?"\u7F16\u8F91\u6E20\u9053":"\u65B0\u589E\u6E20\u9053",wide:!0,onClose:t,footer:d.default.createElement(d.default.Fragment,null,d.default.createElement(j,{onClick:t},"\u53D6\u6D88"),d.default.createElement(j,{variant:"primary",disabled:!a.baseUrl.trim(),onClick:()=>{let S=i.trim()?i.trim().slice(-4):a.keyHint;n({...a,keyHint:S||"",hasKey:!!i.trim()||a.hasKey})}},"\u4FDD\u5B58"))},d.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--cf-sp-3)"}},d.default.createElement("label",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u540D\u79F0"),d.default.createElement("input",{className:"cf-input",value:a.name,placeholder:"\u4F8B\u5982\uFF1AOpenAI \u5B98\u65B9",onChange:S=>f("name",S.target.value)})),d.default.createElement("label",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u534F\u8BAE"),d.default.createElement("select",{className:"cf-input",value:a.protocol,onChange:S=>{let I=Pe.find(E=>E.id===S.target.value);f("protocol",S.target.value),I&&f("baseUrl",I.baseUrl)}},Pe.map(S=>d.default.createElement("option",{key:S.id,value:S.id},S.label))))),d.default.createElement("label",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u63A5\u53E3\u5730\u5740"),d.default.createElement("input",{className:"cf-input",value:a.baseUrl,placeholder:"https://api.example.com/v1",onChange:S=>f("baseUrl",S.target.value)})),d.default.createElement("label",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"API Key",a.keyHint?`\uFF08\u5DF2\u4FDD\u5B58\uFF0C\u672B\u56DB\u4F4D ${a.keyHint}\uFF09`:""),d.default.createElement("input",{className:"cf-input",type:"password",autoComplete:"off",value:i,placeholder:a.keyHint?"\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539":"sk-\u2026",onChange:S=>p(S.target.value)}),d.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u56DE\u4F20\u7ED9\u9875\u9762\u3002\u63A5\u4E0A Host \u540E\u6539\u5B58\u7CFB\u7EDF\u51ED\u8BC1\u533A\u3002")),d.default.createElement("div",{className:"cf-field"},d.default.createElement("span",{className:"cf-label"},"\u6A21\u578B\u4E0E\u80FD\u529B"),d.default.createElement("div",{style:{display:"flex",gap:6}},d.default.createElement("input",{className:"cf-input",value:y,placeholder:"\u624B\u52A8\u6DFB\u52A0\u6A21\u578B id\uFF0C\u4F8B\u5982 gpt-image-1",onChange:S=>m(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.preventDefault(),w())}}),d.default.createElement(j,{onClick:w,disabled:!y.trim()},"\u6DFB\u52A0")),a.models.length===0?d.default.createElement("p",{className:"cf-end",style:{textAlign:"start"}},"\u8FD8\u6CA1\u6709\u6A21\u578B\u3002\u4FDD\u5B58\u6E20\u9053\u540E\u53EF\u4EE5\u300C\u62C9\u53D6\u6A21\u578B\u300D\uFF0C\u6216\u5728\u8FD9\u91CC\u624B\u52A8\u6DFB\u52A0\u3002"):d.default.createElement("div",{style:{display:"grid",gap:6,marginTop:4}},a.models.map(S=>d.default.createElement("div",{key:S.id,style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",padding:"8px 10px",borderRadius:"var(--cf-r-sm)",boxShadow:"inset 0 0 0 var(--cf-hair) var(--cf-line)"}},d.default.createElement("span",{style:{fontSize:12,minWidth:120}},S.label||S.id),d.default.createElement("span",{style:{display:"flex",gap:4,marginInlineStart:"auto"}},aa.map(I=>d.default.createElement("button",{key:I.id,type:"button",className:`cf-chip cf-chip--tag${(S.caps||[]).includes(I.id)?" is-on":""}`,onClick:()=>T(S.id,I.id)},I.label))),d.default.createElement(ie,{name:"trash",label:`\u79FB\u9664 ${S.id}`,onClick:()=>f("models",a.models.filter(I=>I.id!==S.id))}))))),d.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)"}},"\u81EA\u52A8\u62C9\u53D6\u6A21\u578B\u4E0E\u300C\u5B9E\u6D4B\u51FA\u56FE\u300D\u4F1A\u5728\u63A5\u4E0A Host \u540E\u53EF\u7528\uFF1B\u73B0\u5728\u53EF\u4EE5\u5148\u624B\u52A8\u6DFB\u52A0\u5E76\u52FE\u9009\u80FD\u529B\u3002"))}function yt(e){let t=e.toLowerCase();return/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(t)?["image"]:/veo|kling|sora|runway|video/.test(t)?["video"]:/tts|audio|speech|whisper|music/.test(t)?["audio"]:["text"]}var ja="dsh-chunfeng-image:state:v2",wt=[{id:"canvas",label:"\u753B\u5E03",icon:"canvas"},{id:"studio",label:"\u751F\u56FE",icon:"image"},{id:"prompts",label:"\u63D0\u793A\u8BCD",icon:"book"},{id:"assets",label:"\u8D44\u4EA7",icon:"folder"}];function kt(){try{let e=localStorage.getItem(ja);if(!e)return null;let t=JSON.parse(e);return t&&typeof t=="object"?t:null}catch{return null}}function Oa(){let[e,t]=x.default.useState(()=>{let N=kt();if(N)return Ca(N);let u=ia();return u.canvases=[{...Fe("\u9713\u8679\u8857\u89D2"),...ha()}],u.openCanvasId=null,u}),[n,a]=x.default.useState(()=>typeof window<"u"&&window.__CF_DEV_PROMPT?window.__CF_DEV_PROMPT:""),[r,i]=x.default.useState(""),[p,y]=x.default.useState(null),[m,f]=x.default.useState(null),[w,T]=x.default.useState(!1),[S,I]=x.default.useState(!1),[E,z]=x.default.useState(null),[F,M]=x.default.useState(!1),v=x.default.useRef(0),k=x.default.useRef(null);x.default.useEffect(()=>{let N=!0;return za().then(u=>{N&&z(u)}).catch(u=>{N&&z({providers:[],error:u.message})}),()=>{N=!1}},[]),x.default.useEffect(()=>{try{localStorage.setItem(ja,JSON.stringify(e))}catch{}},[e]);let Y=x.default.useCallback((N,u)=>{f({text:N,kind:u,at:Date.now()}),clearTimeout(v.current),v.current=setTimeout(()=>f(null),2200)},[]);x.default.useEffect(()=>()=>{clearTimeout(v.current),k.current?.abort()},[]);let U=N=>t(u=>({...u,...N})),ae=e.canvases.find(N=>N.id===e.openCanvasId)||null,Q=ya(e),ne=e.assistantMessages||[],W=e.assistantModel||E?.default||null,X=Da(E,W)||"\u6A21\u578B",re=N=>{y(null),T(!1),t(u=>wa(u,N))},te=(N,u)=>t(O=>({...O,canvases:O.canvases.map(G=>{if(G.id!==N)return G;let J=typeof u=="function"?u(G):u;return{...G,...J,updatedAt:Date.now()}})})),se=()=>{let N=Fe();t(u=>({...u,canvases:[N,...u.canvases],openCanvasId:N.id,view:"canvas"})),Y("\u5DF2\u65B0\u5EFA\u753B\u5E03")},ve=()=>{let N=document.createElement("input");N.type="file",N.accept=".json,application/json",N.onchange=async()=>{let u=N.files?.[0];if(u)try{let O=JSON.parse(await u.text()),G={...Fe(O.name||"\u5BFC\u5165\u7684\u753B\u5E03"),nodes:Array.isArray(O.nodes)?O.nodes:[],edges:Array.isArray(O.edges)?O.edges:[],grid:O.grid||"dots"};t(J=>({...J,canvases:[G,...J.canvases],openCanvasId:G.id,view:"canvas"})),Y("\u753B\u5E03\u5DF2\u5BFC\u5165")}catch{Y("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F","error")}},N.click()},ge=N=>{if(ae){let u={id:ee("i"),type:"image",x:220+ae.nodes.length*26,y:220+ae.nodes.length*20,w:240,h:268,name:"",status:"idle",z:2,prompt:N.text,ratio:e.defaults.image.ratio||"1:1",locked:!0};te(ae.id,{nodes:[...ae.nodes,u]}),Y(`\u5DF2\u7528\u300C${N.title}\u300D\u65B0\u5EFA\u56FE\u7247\u8282\u70B9`);return}i(N.text),U({view:"studio",openCanvasId:null}),Y(`\u5DF2\u586B\u5165\u300C${N.title}\u300D`)},de=N=>{U({assistantModel:N||null}),I(!1)},le=async()=>{let N=n.trim();if(!N||F)return;let u={id:ee("m"),role:"user",text:N},O={id:ee("m"),role:"assistant",text:""},G=[...ne,u];U({assistantMessages:[...G,O]}),a("");let J=new AbortController;k.current=J,M(!0);let Z=ce=>t(fe=>({...fe,assistantMessages:(fe.assistantMessages||[]).map(V=>V.id===O.id?ce(V):V)}));try{let ce=0,fe="";await Ve({model:e.assistantModel||null,messages:G.map(V=>({role:V.role,text:V.text})),signal:J.signal,onDelta:(V,we)=>{fe=we;let Se=Date.now();Se-ce>60&&(ce=Se,Z(Ie=>({...Ie,text:we})))}}),Z(V=>({...V,text:fe}))}catch(ce){Z(fe=>({...fe,text:`${fe.text||""}

\uFF08\u5931\u8D25\uFF1A${ce.message}\uFF09`}))}finally{M(!1),k.current=null}},pe=()=>{k.current?.abort(),M(!1)},Ne=N=>{let u=ae;if(!u){Y("\u5148\u6253\u5F00\u4E00\u5F20\u753B\u5E03\u518D\u63D2\u5165");return}let O=Ee("text",{x:420,y:320},{text:N.text});O.x=160+u.nodes.length%6*28,O.y=180+u.nodes.length%6*24,te(u.id,{nodes:[...u.nodes,O]}),Y("\u5DF2\u63D2\u5165\u753B\u5E03")};return x.default.createElement("div",{className:"cf-app"},x.default.createElement("style",null,ua),x.default.createElement("div",{className:"cf-ambient","aria-hidden":"true"},x.default.createElement("i",null),x.default.createElement("i",null),x.default.createElement("i",null)),x.default.createElement("header",{className:"cf-nav"},x.default.createElement("div",{className:"cf-island cf-island--nav"},x.default.createElement("nav",{className:"cf-nav-glass","aria-label":"\u4E3B\u5BFC\u822A"},wt.map(N=>{let u=N.id==="canvas"?Q==="canvas"||Q==="editor":Q===N.id;return x.default.createElement("button",{key:N.id,type:"button",className:u?"is-on":"",onClick:()=>re(N.id),"aria-current":u?"page":void 0},N.label)}))),x.default.createElement("div",{className:"cf-nav-right"},x.default.createElement("button",{type:"button",className:"cf-glass-btn",onClick:()=>I(!0),title:`\u52A9\u624B\u6A21\u578B\uFF1A${X}`},x.default.createElement(_,{name:"sparkle",size:14}),x.default.createElement("span",null,X)),x.default.createElement("button",{type:"button",className:"cf-glass-btn cf-glass-btn--icon",title:"\u914D\u7F6E","aria-label":"\u914D\u7F6E",onClick:()=>re("config")},x.default.createElement(_,{name:"sliders",size:15})),x.default.createElement("button",{type:"button",className:`cf-glass-btn${w?" is-on":""}`,"aria-pressed":w,onClick:()=>T(N=>!N)},x.default.createElement(_,{name:"message",size:14}),"\u52A9\u624B"))),x.default.createElement(Te,{key:Q},Q==="editor"&&ae?x.default.createElement(Aa,{canvas:ae,channels:e.channels,defaults:e.defaults.image,assistantModel:e.assistantModel||null,draft:n,onDraftChange:a,showComposer:!w,onChange:N=>te(ae.id,N),onBack:()=>t(N=>Na(N)),say:Y}):null,Q==="canvas"?x.default.createElement($a,{canvases:e.canvases,onOpen:N=>t(u=>ka(u,N)),onCreate:se,onRename:(N,u)=>te(N,{name:u}),onDelete:N=>t(u=>({...u,canvases:u.canvases.filter(O=>O.id!==N),openCanvasId:null})),onImport:ve}):null,Q==="studio"?x.default.createElement(Ta,{channels:e.channels,defaults:e.defaults.image,records:e.records,prompt:r,onPrompt:i,onCreateRecord:N=>t(u=>({...u,records:[N,...u.records]})),onDeleteRecords:N=>t(u=>({...u,records:u.records.filter(O=>!N.includes(O.id))})),onLookupPrompts:()=>{y("studio"),U({view:"prompts",openCanvasId:null})},say:Y}):null,Q==="prompts"?x.default.createElement(Ba,{prompts:e.prompts,sources:e.promptSources,returnTo:p,onUse:ge,onBack:p?()=>{y(null),U({view:p})}:null}):null,Q==="assets"?x.default.createElement(Pa,{assets:e.assets,onSave:N=>U({assets:N}),onDelete:N=>t(u=>({...u,assets:u.assets.filter(O=>O.id!==N)})),onImport:()=>Y("\u8D44\u4EA7\u5305\u5BFC\u5165\u63A5 Host \u540E\u53EF\u7528"),say:Y}):null,Q==="config"?x.default.createElement(La,{tab:e.configTab,onTab:N=>U({configTab:N}),channels:e.channels,onChannels:N=>U({channels:N}),defaults:e.defaults,onDefaults:N=>U({defaults:N}),promptSources:e.promptSources,onPromptSources:N=>U({promptSources:N}),say:Y}):null),w?x.default.createElement(Ct,{messages:ne,draft:n,onDraftChange:a,streaming:F,onSend:le,onStop:pe,onClose:()=>T(!1),onInsert:Ne,onClear:()=>U({assistantMessages:[]}),canInsert:!!ae,modelLabelText:X}):null,S?x.default.createElement(Nt,{models:E,selection:W,onPick:de,onClose:()=>I(!1)}):null,m?x.default.createElement(ma,{text:m.text,kind:m.kind}):null)}function Nt({models:e,selection:t,onPick:n,onClose:a}){let[r,i]=x.default.useState(""),p=e?.providers||[],y=r.trim().toLowerCase(),m=p.map(f=>({...f,models:f.models.filter(w=>!y||(w.name||w.id).toLowerCase().includes(y)||f.name.toLowerCase().includes(y))})).filter(f=>f.models.length);return x.default.createElement(be,{title:"\u52A9\u624B\u6A21\u578B",wide:!0,onClose:a,footer:x.default.createElement("span",{style:{marginInlineEnd:"auto",fontSize:12,color:"var(--cf-caption)"}},e?.error?`\u8BFB\u53D6\u5931\u8D25\uFF1A${e.error}`:`\u6765\u81EA DSH \u5F53\u524D\u4F9B\u5E94\u7684 ${p.reduce((f,w)=>f+w.models.length,0)} \u4E2A\u6A21\u578B`)},x.default.createElement("button",{type:"button",className:`cf-chip${t?.model?"":" is-on"}`,style:{justifySelf:"start"},onClick:()=>n(null)},"\u8DDF\u968F DSH \u9ED8\u8BA4"),x.default.createElement("input",{className:"cf-input",value:r,placeholder:"\u641C\u7D22\u6A21\u578B\u6216\u5382\u5546",onChange:f=>i(f.target.value)}),m.length===0?x.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)"}},e===null?"\u6B63\u5728\u8BFB\u53D6\u6A21\u578B\u2026":y?"\u6CA1\u6709\u5339\u914D\u7684\u6A21\u578B":"DSH \u91CC\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u6A21\u578B"):x.default.createElement("div",{style:{display:"grid",gap:"var(--cf-sp-3)"}},m.map(f=>x.default.createElement("div",{key:f.id,style:{display:"grid",gap:2}},x.default.createElement("p",{style:{fontSize:12,color:"var(--cf-caption)",paddingInline:4}},f.name),f.models.map(w=>{let T=t?.provider===f.id&&t?.model===w.id;return x.default.createElement("button",{key:w.id,type:"button",className:`cf-menu-item${T?" is-on":""}`,onClick:()=>n({provider:f.id,model:w.id})},x.default.createElement("span",{className:"cf-menu-label"},w.name),T?x.default.createElement(_,{name:"check",size:14}):null)})))))}function Ct({messages:e,draft:t,onDraftChange:n,streaming:a,onSend:r,onStop:i,onClose:p,onInsert:y,onClear:m,canInsert:f,modelLabelText:w}){let T=x.default.useRef(null),S=x.default.useRef(null),I=x.default.useRef(0);return x.default.useEffect(()=>{let E=T.current;E&&(E.scrollTop=E.scrollHeight)},[e]),x.default.useEffect(()=>{S.current?.focus()},[]),x.default.createElement("aside",{className:"cf-dock","aria-label":"\u52A9\u624B"},x.default.createElement("header",{className:"cf-dock-head"},x.default.createElement(_,{name:"message",size:15}),x.default.createElement("span",{className:"cf-dock-title"},"\u52A9\u624B"),x.default.createElement("span",{style:{fontSize:12,color:"var(--cf-caption)"}},w),e.length?x.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",onClick:m},"\u6E05\u7A7A"):null,x.default.createElement(ie,{name:"close",label:"\u5173\u95ED\u52A9\u624B",onClick:p})),x.default.createElement("div",{className:"cf-dock-body",ref:T},e.length===0?x.default.createElement("p",{style:{fontSize:13,color:"var(--cf-muted)",lineHeight:1.6}},"\u95EE\u70B9\u4EC0\u4E48\uFF0C\u6216\u8005\u628A\u753B\u5E03\u8F93\u5165\u6846\u91CC\u7684\u8349\u7A3F\u5E26\u8FC7\u6765\u7EE7\u7EED\u5199\u3002"):e.map(E=>x.default.createElement("div",{key:E.id,className:`cf-msg cf-msg--${E.role}`},x.default.createElement("div",{className:"cf-msg-text"},E.text||(E.role==="assistant"&&a?"\u2026":"")),E.role==="assistant"&&E.text?x.default.createElement("div",{className:"cf-msg-actions"},x.default.createElement("button",{type:"button",className:"cf-btn cf-btn--quiet cf-btn--sm",disabled:!f,onClick:()=>y(E)},"\u63D2\u5165\u753B\u5E03")):null))),x.default.createElement("div",{className:"cf-dock-foot"},x.default.createElement("textarea",{ref:S,className:"cf-dock-input",value:t,placeholder:"\u7ED9\u52A9\u624B\u8BF4\u70B9\u4EC0\u4E48",onChange:E=>n(E.target.value),onCompositionStart:()=>{I.current=Date.now()},onCompositionEnd:()=>{I.current=Date.now()},onKeyDown:E=>{E.key==="Enter"&&(E.nativeEvent.isComposing||Date.now()-I.current<500||E.shiftKey||(E.preventDefault(),I.current=0,r()))}}),x.default.createElement("div",{className:"cf-dock-bar"},x.default.createElement("span",{style:{fontSize:11,color:"var(--cf-caption)"}},f?"\u56DE\u590D\u53EF\u63D2\u5165\u5F53\u524D\u753B\u5E03":"\u6253\u5F00\u4E00\u5F20\u753B\u5E03\u540E\u53EF\u63D2\u5165"),a?x.default.createElement("button",{type:"button",className:"cf-send",onClick:i,"aria-label":"\u505C\u6B62","data-tip":"\u505C\u6B62"},x.default.createElement(_,{name:"stop",size:13})):x.default.createElement("button",{type:"button",className:"cf-send",onClick:r,disabled:!t.trim(),"aria-label":"\u53D1\u9001","data-tip":"\u53D1\u9001"},x.default.createElement(_,{name:"arrowUp",size:17})))))}var Ha="dsh-chunfeng-image",Mt=["slots"];function St(e){e.slots.inject("main",()=>e.slots.register({name:"main",key:Ha},Dt)),e.effect(()=>{let t=null;return(()=>{t?.(),t=e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Ha,order:6,label:()=>"\u6625\u98CE\u753B\u5E03"},zt))})(),()=>t?.()},"dsh-chunfeng-image: sidebar entry")}function zt(){return qe.default.createElement(_,{name:"canvas",size:16})}function Dt(){return qe.default.createElement(Te,null,qe.default.createElement(Oa,null))}
return module.exports}})
