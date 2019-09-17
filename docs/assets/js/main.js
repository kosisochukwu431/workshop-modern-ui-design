import { $, create, detectScrollBar } from "./utils.js";
import Vivus from "./vivus.js";

detectScrollBar();

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

if (typeof IntersectionObserver !== "undefined") {
  const observedBtn = $(".js-observed-signup");
  const headerBtn = $(".btn-signup");

  const observer = new IntersectionObserver(
    ([btn]) => {
      if (btn.isIntersecting) headerBtn.classList.remove("lg:max-w-full");
      else headerBtn.classList.add("lg:max-w-full");
    },
    { rootMargin: "-64px 0px 0px" }
  );

  observer.observe(observedBtn);
}
