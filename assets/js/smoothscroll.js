!(function() {
  'use strict'
  function o() {
    var o = window,
      t = document
    if (!('scrollBehavior' in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
      var l,
        e = o.HTMLElement || o.Element,
        r = 468,
        i = {
          scroll: o.scroll || o.scrollTo,
          scrollBy: o.scrollBy,
          elementScroll: e.prototype.scroll || n,
          scrollIntoView: e.prototype.scrollIntoView,
        },
        s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now,
        c =
          ((l = o.navigator.userAgent),
          new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(l) ? 1 : 0)
      ;(o.scroll = o.scrollTo = function() {
        void 0 !== arguments[0] &&
          (!0 !== f(arguments[0])
            ? h.call(
                o,
                t.body,
                void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset,
                void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset
              )
            : i.scroll.call(
                o,
                void 0 !== arguments[0].left
                  ? arguments[0].left
                  : 'object' != typeof arguments[0]
                  ? arguments[0]
                  : o.scrollX || o.pageXOffset,
                void 0 !== arguments[0].top
                  ? arguments[0].top
                  : void 0 !== arguments[1]
                  ? arguments[1]
                  : o.scrollY || o.pageYOffset
              ))
      }),
        (o.scrollBy = function() {
          void 0 !== arguments[0] &&
            (f(arguments[0])
              ? i.scrollBy.call(
                  o,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : 'object' != typeof arguments[0]
                    ? arguments[0]
                    : 0,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
                )
              : h.call(
                  o,
                  t.body,
                  ~~arguments[0].left + (o.scrollX || o.pageXOffset),
                  ~~arguments[0].top + (o.scrollY || o.pageYOffset)
                ))
        }),
        (e.prototype.scroll = e.prototype.scrollTo = function() {
          if (void 0 !== arguments[0])
            if (!0 !== f(arguments[0])) {
              var o = arguments[0].left,
                t = arguments[0].top
              h.call(
                this,
                this,
                void 0 === o ? this.scrollLeft : ~~o,
                void 0 === t ? this.scrollTop : ~~t
              )
            } else {
              if ('number' == typeof arguments[0] && void 0 === arguments[1])
                throw new SyntaxError('Value could not be converted')
              i.elementScroll.call(
                this,
                void 0 !== arguments[0].left
                  ? ~~arguments[0].left
                  : 'object' != typeof arguments[0]
                  ? ~~arguments[0]
                  : this.scrollLeft,
                void 0 !== arguments[0].top
                  ? ~~arguments[0].top
                  : void 0 !== arguments[1]
                  ? ~~arguments[1]
                  : this.scrollTop
              )
            }
        }),
        (e.prototype.scrollBy = function() {
          void 0 !== arguments[0] &&
            (!0 !== f(arguments[0])
              ? this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                })
              : i.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                ))
        }),
        (e.prototype.scrollIntoView = function() {
          if (!0 !== f(arguments[0])) {
            var l = (function(o) {
                for (
                  ;
                  o !== t.body &&
                  !1 === ((e = p((l = o), 'Y') && a(l, 'Y')), (r = p(l, 'X') && a(l, 'X')), e || r);

                )
                  o = o.parentNode || o.host
                var l, e, r
                return o
              })(this),
              e = l.getBoundingClientRect(),
              r = this.getBoundingClientRect()
            l !== t.body
              ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top),
                'fixed' !== o.getComputedStyle(l).position &&
                  o.scrollBy({ left: e.left, top: e.top, behavior: 'smooth' }))
              : o.scrollBy({ left: r.left, top: r.top, behavior: 'smooth' })
          } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
        })
    }
    function n(o, t) {
      ;(this.scrollLeft = o), (this.scrollTop = t)
    }
    function f(o) {
      if (
        null === o ||
        'object' != typeof o ||
        void 0 === o.behavior ||
        'auto' === o.behavior ||
        'instant' === o.behavior
      )
        return !0
      if ('object' == typeof o && 'smooth' === o.behavior) return !1
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          o.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      )
    }
    function p(o, t) {
      return 'Y' === t
        ? o.clientHeight + c < o.scrollHeight
        : 'X' === t
        ? o.clientWidth + c < o.scrollWidth
        : void 0
    }
    function a(t, l) {
      var e = o.getComputedStyle(t, null)['overflow' + l]
      return 'auto' === e || 'scroll' === e
    }
    function d(t) {
      var l,
        e,
        i,
        c,
        n = (s() - t.startTime) / r
      ;(c = n = n > 1 ? 1 : n),
        (l = 0.5 * (1 - Math.cos(Math.PI * c))),
        (e = t.startX + (t.x - t.startX) * l),
        (i = t.startY + (t.y - t.startY) * l),
        t.method.call(t.scrollable, e, i),
        (e === t.x && i === t.y) || o.requestAnimationFrame(d.bind(o, t))
    }
    function h(l, e, r) {
      var c,
        f,
        p,
        a,
        h = s()
      l === t.body
        ? ((c = o),
          (f = o.scrollX || o.pageXOffset),
          (p = o.scrollY || o.pageYOffset),
          (a = i.scroll))
        : ((c = l), (f = l.scrollLeft), (p = l.scrollTop), (a = n)),
        d({ scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r })
    }
  }
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = { polyfill: o })
    : o()
})()
!(function() {
  var e, t
  ;(e = function() {
    return new (function() {
      var e = this,
        t = 'undefined' != typeof window
      if (t)
        var n = window,
          o = document,
          r = o.documentElement,
          i = o.createElement('a')
      if (
        ((this.polyfill = function(r) {
          if (((r = r || {}), t)) {
            var l = n.__forceSmoothscrollAnchorPolyfill__,
              a = 'boolean' == typeof r.force ? r.force : l
            if ('scrollBehavior' in i.style && !a) return e
            e.destroy(),
              o.addEventListener('click', p, !1),
              o.addEventListener('scroll', S),
              n.addEventListener('hashchange', b)
          }
          return e
        }),
        (this.destroy = function(r) {
          return (
            (r = r || {}),
            t &&
              (o.removeEventListener('click', p, !1),
              o.removeEventListener('scroll', S),
              n.removeEventListener('hashchange', b)),
            e
          )
        }),
        t)
      ) {
        var l = !1
        try {
          var a = Object.defineProperty({}, 'preventScroll', {
            get: function() {
              l = !0
            },
          })
          i.focus(a)
        } catch (e) {}
        var c,
          s = /scroll-behavior:[\s]*([^;"`'\s]+)/,
          u = getComputedStyle(r),
          f = []
      }
      function h() {
        for (
          var e = [
              r.style.scrollBehavior,
              (s.exec(r.getAttribute('style')) || [])[1],
              u.getPropertyValue('--scroll-behavior'),
              (s.exec(u.fontFamily) || [])[1],
            ],
            t = 0;
          t < e.length;
          t++
        ) {
          var n =
            ((i = void 0),
            (i = null),
            (o = (o = e[t]) && o.trim()),
            /^smooth$/.test(o) && (i = !0),
            /^(initial|inherit|auto|unset)$/.test(o) && (i = !1),
            i)
          if (null !== n) return n
        }
        var o, i
        return !1
      }
      function v(e) {
        if (!/^a$/i.test(e.tagName) || !/#/.test(e.href)) return !1
        var t = e.pathname
        return (
          '/' !== t[0] && (t = '/' + t),
          e.hostname === location.hostname &&
            t === location.pathname &&
            e.search === location.search
        )
      }
      function d(e) {
        if ((e.focus({ preventScroll: !0 }), o.activeElement !== e)) {
          var t = e.getAttribute('tabindex')
          if ((e.setAttribute('tabindex', '-1'), 'none' === getComputedStyle(e).outlineStyle)) {
            var n = e.style.outlineStyle
            ;(e.style.outlineStyle = 'none'),
              e.addEventListener('blur', function o() {
                ;(e.style.outlineStyle = n),
                  e.setAttribute('tabindex', t),
                  e.removeEventListener('blur', o)
              })
          }
          e.focus({ preventScroll: !0 })
        }
      }
      function y(e) {
        if ('string' != typeof e) return null
        var t = (e = (function(e) {
          try {
            e = decodeURIComponent(e)
          } catch (e) {}
          return e
        })(e))
          ? o.getElementById(e.slice(1))
          : o.body
        return '#top' !== e || t || (t = o.body), t
      }
      function m(e) {
        l || clearTimeout(c),
          e === o.body
            ? n.scroll({ top: 0, left: 0, behavior: 'smooth' })
            : e.scrollIntoView({ behavior: 'smooth', block: 'start' }),
          l ? d(e) : (c = setTimeout(d.bind(null, e), 450))
      }
      function p(e) {
        if (!(e.metaKey || e.ctrlKey || e.shiftKey || 0 !== e.button) && h()) {
          var t = (function e(t, n) {
            return n(t) ? t : t.parentElement ? e(t.parentElement, n) : null
          })(
            (function(e) {
              return (e = e || n.event).target || e.srcElement
            })(e),
            v
          )
          if (t) {
            var r = t.hash,
              i = y(r)
            i &&
              (e.preventDefault(),
              m(i),
              history.pushState && history.pushState(null, o.title, r || '#'))
          }
        }
      }
      function b() {
        if (o.body && h()) {
          var e = y(location.hash)
          if (e) {
            var t = E(),
              r = f[f[1] === t ? 0 : 1]
            n.scroll({ top: r, behavior: 'instant' }), m(e)
          }
        }
      }
      function E() {
        return r.scrollTop || o.body.scrollTop
      }
      function S() {
        o.body && ((f[0] = f[1]), (f[1] = E()))
      }
    })().polyfill()
  }),
    !(t = this && this.__sap_ES_MODULE__) && 'function' == typeof define && define.amd
      ? define([], e)
      : !t && 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (this.SmoothscrollAnchorPolyfill = e())
})()
