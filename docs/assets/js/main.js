import Vivus from "./vivus.js";

/** @type {Document['querySelector']} */
const $ = (selector, root = document) => root.querySelector(selector);

/**
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} tag
 * @param attrs {Partial<HTMLElementTagNameMap[TagName]>}
 * @returns {HTMLElementTagNameMap[TagName]}
 */
const create = (tag, attrs = {}) => {
  return Object.assign(document.createElement(tag), attrs);
};

const header = $(".header");
const splash = $(".splash");
const splashLogo = $(".splash__logo", splash);

if (!("scrollBehavior" in create("a").style)) {
  const smoothscrollPolyfill = create("script", {
    src: "https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js",
    defer: true
  });
  const smoothscrollAnchorPolyfill = create("script", {
    src: "https://unpkg.com/smoothscroll-anchor-polyfill",
    defer: true
  });

  document.head.append(smoothscrollPolyfill, smoothscrollAnchorPolyfill);
}

if ($(".header--splash")) {
  new Vivus(
    splashLogo,
    {
      type: "oneByOne",
      duration: 110,
      pathTimingFunction: Vivus.EASE_OUT_BOUNCE,
      onReady: () => (
        splash.classList.add("splash--anim-start"),
        document.body.classList.add("overflow-hidden")
      )
    },
    () => {
      splash.classList.add("splash--anim-complete");
      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
        header.classList.remove("header--splash");
      }, 500);
    }
  );
}

const detectScrollBar = () => {
  const body = document.body;
  const el = body.appendChild(document.createElement("div"));

  el.style.cssText = `
  width:100px;height:100px;overflow:scroll !important;position:absolute;top:-100vh`;

  const hasScrollbar = el.offsetWidth - el.clientWidth > 0;
  if (hasScrollbar) body.classList.add("has-scrollbar");

  body.removeChild(el);
  return hasScrollbar;
};

detectScrollBar();
