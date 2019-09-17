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

/* Smoothscroll-Polyfills laden */
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

const splashHeaderContainer = $(".splash-header-container");

function animateSplashLogo() {
  document.body.classList.add("overflow-hidden");
  const splash = $(".splash", splashHeaderContainer);
  const splashLogo = $("svg", splash);

  new Vivus(
    splashLogo,
    {
      type: "oneByOne",
      duration: 110,
      pathTimingFunction: Vivus.EASE_OUT_BOUNCE,
      onReady: () => {
        setTimeout(() => splashLogo.classList.add("show-dot"), 1250);
      }
    },
    () => {
      splash.classList.add("splash--visible");
      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
        splashHeaderContainer.classList.remove("h-full");
      }, 700);
    }
  );
}

if (splashHeaderContainer.classList.contains("h-full")) {
  animateSplashLogo();
}

!(function detectScrollBar() {
  const body = document.body;
  const el = body.appendChild(create("div"));

  el.style.cssText = `
  width:100px;height:100px;overflow:scroll !important;position:absolute;top:-100vh`;

  const hasScrollbar = el.offsetWidth - el.clientWidth > 0;
  if (hasScrollbar) document.documentElement.classList.add("scrollbar");

  body.removeChild(el);
  return hasScrollbar;
})();

if (typeof IntersectionObserver !== "undefined") {
  const observedBtn = $(".js-observed-signup");
  const headerBtn = $(".btn-signup");

  const observer = new IntersectionObserver(
    ([btn]) => {
      if (btn.isIntersecting) headerBtn.classList.add("max-w-0");
      else headerBtn.classList.remove("max-w-0");
    },
    { rootMargin: "-64px 0px 0px" }
  );

  observer.observe(observedBtn);
}
