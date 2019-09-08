/** @returns {HTMLElement} */
const $ = (selector, root = document) => root.querySelector(selector)

const header = $('.header')
const splash = $('.splash')
const splashLogo = $('.splash__logo', splash)

new Vivus(
  splashLogo,
  {
    type: 'oneByOne',
    duration: 110,
    pathTimingFunction: Vivus.EASE_OUT_BOUNCE,
    onReady: () => splash.classList.add('splash--anim-start'),
  },
  () => {
    splash.classList.add('splash--anim-complete')
    setTimeout(() => header.classList.remove('header--splash'), 500)
  }
)
