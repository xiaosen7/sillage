var Me = Object.defineProperty;
var Ce = (y, L, j) =>
  L in y
    ? Me(y, L, { enumerable: !0, configurable: !0, writable: !0, value: j })
    : (y[L] = j);
var g0 = (y, L, j) => (Ce(y, typeof L != "symbol" ? L + "" : L, j), j);
import {
  r as ie,
  c as Ee,
  e as U0,
  S as xe,
  I as le,
  a as Le,
  d as Oe,
  j as D0,
} from "./index-53175ba2.js";
import { I as je } from "./index.esm-ee489aaa.js";
var $0 = {},
  Pe = {
    get exports() {
      return $0;
    },
    set exports(y) {
      $0 = y;
    },
  };
/*! For license information please see index.js.LICENSE.txt */ (function (
  y,
  L
) {
  (function (F, S) {
    y.exports = S(ie);
  })(Ee, (j) =>
    (() => {
      var F = {
          967: function (d) {
            (function (p, k) {
              d.exports = k();
            })(0, () =>
              (() => {
                var s = {
                    d: (a, u) => {
                      for (var b in u)
                        s.o(u, b) &&
                          !s.o(a, b) &&
                          Object.defineProperty(a, b, {
                            enumerable: !0,
                            get: u[b],
                          });
                    },
                    o: (a, u) => Object.prototype.hasOwnProperty.call(a, u),
                    r: (a) => {
                      typeof Symbol < "u" &&
                        Symbol.toStringTag &&
                        Object.defineProperty(a, Symbol.toStringTag, {
                          value: "Module",
                        }),
                        Object.defineProperty(a, "__esModule", { value: !0 });
                    },
                  },
                  p = {};
                s.r(p),
                  s.d(p, {
                    beforeCssLayout: () => D,
                    beforeFutureCssLayout: () => G,
                    frameThrower: () => r0,
                    onceAnimationEnd: () => R,
                    onceNextCssLayout: () => A,
                    onceTransitionEnd: () => U,
                    recursiveAnimationFrame: () => k,
                    setCssEndEvent: () => z,
                  });
                var k = function (a, u) {
                  window && a && Number.isInteger(a) && a > 0
                    ? window.requestAnimationFrame(function () {
                        k(a - 1, u);
                      })
                    : u();
                };
                function z(a, u, b) {
                  var V = b === void 0 ? {} : b,
                    o0 = V.tolerance,
                    w0 = o0 === void 0 ? 0 : o0,
                    P0 = V.propertyName;
                  return new Promise(function (_0) {
                    var c0;
                    if (a) {
                      var Q = null,
                        S0 = u.charAt(0).toUpperCase() + u.slice(1),
                        Z = 0;
                      a.style["Webkit".concat(S0)] !== void 0 &&
                        (Q = "webkit".concat(S0, "End")),
                        ((c0 = a.style) === null || c0 === void 0
                          ? void 0
                          : c0.OTransition) !== void 0 &&
                          (Q = "o".concat(u, "End")),
                        a.style[u] !== void 0 && (Q = "".concat(u, "end")),
                        a.clearCssEndEvent && a.clearCssEndEvent(),
                        (a.clearCssEndEvent = function () {
                          a.removeEventListener(Q, b0);
                        }),
                        a.addEventListener(Q, b0);
                    } else _0(!1);
                    function b0(v0) {
                      if ((v0.srcElement || v0.target) === a) {
                        if (Z >= w0) {
                          if (P0 && P0 !== v0.propertyName) return;
                          a.removeEventListener(Q, b0), _0(v0);
                        }
                        Z += 1;
                      }
                    }
                  });
                }
                function D(a) {
                  (typeof window < "u" &&
                    window != null &&
                    window.requestAnimationFrame) ||
                    a(),
                    window.requestAnimationFrame(a);
                }
                function G(a, u) {
                  (typeof window < "u" &&
                    window != null &&
                    window.requestAnimationFrame) ||
                    u(),
                    k(a + 1, u);
                }
                function r0(a) {
                  return new Promise(function (u) {
                    G(a, u);
                  });
                }
                function A() {
                  return new Promise(function (a) {
                    k(2, a);
                  });
                }
                function U(a, u) {
                  return (
                    u === void 0 && (u = {}),
                    new Promise(function (b) {
                      z(a, "transition", u).then(b);
                    })
                  );
                }
                function R(a, u) {
                  return (
                    u === void 0 && (u = {}),
                    new Promise(function (b) {
                      z(a, "animation", u).then(b);
                    })
                  );
                }
                return p;
              })()
            );
          },
          251: (d, s, p) => {
            var k = p(787),
              z = Symbol.for("react.element"),
              D = Object.prototype.hasOwnProperty,
              G =
                k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              r0 = { key: !0, ref: !0, __self: !0, __source: !0 };
            function A(U, R, a) {
              var u,
                b = {},
                V = null,
                o0 = null;
              for (u in (a !== void 0 && (V = "" + a),
              R.key !== void 0 && (V = "" + R.key),
              R.ref !== void 0 && (o0 = R.ref),
              R))
                D.call(R, u) && !r0.hasOwnProperty(u) && (b[u] = R[u]);
              if (U && U.defaultProps)
                for (u in (R = U.defaultProps))
                  b[u] === void 0 && (b[u] = R[u]);
              return {
                $$typeof: z,
                type: U,
                key: V,
                ref: o0,
                props: b,
                _owner: G.current,
              };
            }
            (s.jsx = A), (s.jsxs = A);
          },
          893: (d, s, p) => {
            d.exports = p(251);
          },
          787: (d) => {
            d.exports = j;
          },
        },
        S = {};
      function O(d) {
        var s = S[d];
        if (s !== void 0) return s.exports;
        var p = (S[d] = { exports: {} });
        return F[d].call(p.exports, p, p.exports, O), p.exports;
      }
      (O.d = (d, s) => {
        for (var p in s)
          O.o(s, p) &&
            !O.o(d, p) &&
            Object.defineProperty(d, p, { enumerable: !0, get: s[p] });
      }),
        (O.o = (d, s) => Object.prototype.hasOwnProperty.call(d, s)),
        (O.r = (d) => {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(d, "__esModule", { value: !0 });
        });
      var H = {};
      return (
        (() => {
          O.r(H),
            O.d(H, {
              AwesomeButton: () => b,
              AwesomeButtonProgress: () => de,
              AwesomeButtonSocial: () => S0,
            });
          var d = O(893),
            s = O(787),
            p = O(967),
            k = ["middle", "left", "right"];
          function z(e, r) {
            return (
              r === void 0 && (r = "&"),
              Object.entries(e)
                .map(function (o) {
                  var t = o[0],
                    n = o[1];
                  return "".concat(t, "=").concat(n);
                })
                .join(r)
            );
          }
          function D(e, r) {
            if ((e === void 0 && (e = []), !r)) return e.join(" ").trim();
            for (var o = [], t = e.length; t--; ) r[e[t]] && o.push(r[e[t]]);
            return o.join(" ").trim();
          }
          function G(e, r) {
            return e === void 0 && (e = ""), (r && r[e]) || e;
          }
          function r0(e) {
            var r,
              o = e.element,
              t = e.root,
              n = e.cssModule,
              h = n === void 0 ? null : n,
              f = e.state,
              g = f === void 0 ? null : f;
            if (
              !(
                !(
                  (r = o == null ? void 0 : o.classList) === null ||
                  r === void 0
                ) && r.remove
              )
            )
              return !1;
            if (!g)
              return (
                [
                  D(["".concat(t, "--").concat(k[0])], h),
                  D(["".concat(t, "--").concat(k[1])], h),
                  D(["".concat(t, "--").concat(k[2])], h),
                ].forEach(function (M) {
                  M && o.classList.remove(M);
                }),
                !1
              );
            for (
              var v = k.filter(function (M) {
                  return M !== g;
                }),
                m = v.length;
              m--;

            ) {
              var i = D(["".concat(t, "--").concat(v[m])], h);
              i && o.classList.remove(i);
            }
            var c = D(["".concat(t, "--").concat(g)], h);
            return c && o.classList.add(c), !0;
          }
          var A = function () {
              return (
                (A =
                  Object.assign ||
                  function (e) {
                    for (var r, o = 1, t = arguments.length; o < t; o++)
                      for (var n in (r = arguments[o]))
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    return e;
                  }),
                A.apply(this, arguments)
              );
            },
            U = typeof window < "u",
            R =
              (U && "ontouchstart" in window) ||
              (U && navigator.maxTouchPoints > 0),
            a = s.forwardRef(function (e, r) {
              return (0, d.jsx)("a", A({ ref: r }, e));
            }),
            u = s.forwardRef(function (e, r) {
              return (0, d.jsx)("button", A({ ref: r }, e));
            });
          const b = function (e) {
            var r = e.active,
              o = r !== void 0 && r,
              t = e.after,
              n = t === void 0 ? null : t,
              h = e.before,
              f = h === void 0 ? null : h,
              g = e.between,
              v = g !== void 0 && g,
              m = e.children,
              i = m === void 0 ? null : m,
              c = e.className,
              M = c === void 0 ? null : c,
              N = e.containerProps,
              i0 = N === void 0 ? {} : N,
              W = e.cssModule,
              P = W === void 0 ? null : W,
              E = e.disabled,
              C = E !== void 0 && E,
              p0 = e.element,
              X = p0 === void 0 ? null : p0,
              $ = e.extra,
              y0 = $ === void 0 ? null : $,
              M0 = e.href,
              q = M0 === void 0 ? null : M0,
              Y = e.moveEvents,
              z0 = Y === void 0 || Y,
              C0 = e.onMouseDown,
              l0 = C0 === void 0 ? null : C0,
              T0 = e.onMouseUp,
              h0 = T0 === void 0 ? null : T0,
              k0 = e.onPress,
              A0 = k0 === void 0 ? null : k0,
              R0 = e.onPressed,
              T = R0 === void 0 ? null : R0,
              B = e.onReleased,
              N0 = B === void 0 ? null : B,
              B0 = e.placeholder,
              e0 = B0 === void 0 || B0,
              F0 = e.ripple,
              I0 = F0 !== void 0 && F0,
              J0 = e.rootElement,
              _ = J0 === void 0 ? "aws-btn" : J0,
              K0 = e.size,
              W0 = K0 === void 0 ? null : K0,
              Q0 = e.style,
              fe = Q0 === void 0 ? {} : Q0,
              Z0 = e.type,
              q0 = Z0 === void 0 ? "primary" : Z0,
              ee = e.visible,
              ne = ee === void 0 || ee,
              te = s.useState(null),
              m0 = te[0],
              re = te[1],
              J = s.useRef(null),
              a0 = s.useRef(null),
              s0 = s.useRef(null),
              ve = s.useRef(null),
              Y0 = s.useRef(!1),
              u0 = s.useRef(0),
              E0 = s.useRef(null),
              G0 = s.useRef(0),
              pe = X || (q ? a : u),
              he = { href: q },
              d0 = s.useMemo(
                function () {
                  return (e0 === !0 && !i) || C;
                },
                [e0, i, C]
              );
            s.useEffect(function () {
              return (
                J != null && J.current && (s0.current = J.current.parentNode),
                function () {
                  E0 != null && E0.current && clearTimeout(E0.current);
                }
              );
            }, []),
              s.useEffect(
                function () {
                  m0 !== null && o === !1 && x0({ force: !0 });
                },
                [o]
              );
            var I,
              me = function () {
                (u0.current = 0), N0 && N0(s0.current);
              },
              x0 = function (l) {
                var w,
                  x = l === void 0 ? {} : l,
                  K = x.force,
                  f0 = K !== void 0 && K,
                  n0 = x.leave,
                  X0 = n0 !== void 0 && n0;
                if (
                  (r0({ element: s0.current, root: _, cssModule: P }),
                  X0 !== !0 || u0.current !== 0)
                ) {
                  var L0 = o && !f0 ? "".concat(_, "--active") : null;
                  !(
                    (w = a0 == null ? void 0 : a0.current) === null ||
                    w === void 0
                  ) &&
                    w.clearCssEvent &&
                    a0.current.clearCssEvent(),
                    L0 === null &&
                      m0 != null &&
                      m0.match(/active/gim) &&
                      (0, p.setCssEndEvent)(a0.current, "transition", {
                        tolerance: 1,
                      }).then(me),
                    re(L0);
                }
              },
              ge = function (l) {
                (function (x) {
                  var K,
                    f0,
                    n0 = x.event,
                    X0 = x.button,
                    L0 = x.content,
                    be = x.className,
                    O0 = X0.getBoundingClientRect(),
                    ye =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      0,
                    t0 = document.createElement("span"),
                    H0 = O0.width < 50 ? 3 * O0.width : 2 * O0.width;
                  n0.nativeEvent instanceof TouchEvent
                    ? ((K = n0.changedTouches[0].pageX),
                      (f0 = n0.changedTouches[0].pageY))
                    : ((K = n0.pageX), (f0 = n0.pageY)),
                    (t0.className = be),
                    (t0.style.top = "-".concat(
                      H0 / 2 - (f0 - O0.top - ye),
                      "px"
                    )),
                    (t0.style.left = "-".concat(H0 / 2 - (K - O0.left), "px")),
                    (t0.style.width = "".concat(H0, "px")),
                    (t0.style.height = "".concat(H0, "px")),
                    (0, p.setCssEndEvent)(t0, "animation").then(function () {
                      window.requestAnimationFrame(function () {
                        L0.removeChild(t0);
                      });
                    }),
                    window.requestAnimationFrame(function () {
                      L0.appendChild(t0);
                    });
                })({
                  event: l,
                  button: J.current,
                  content: a0.current,
                  className: G("".concat(_, "__bubble"), P),
                });
              },
              oe = function (l) {
                d0 !== !0 &&
                  u0.current !== 2 &&
                  ((u0.current = 1),
                  (0, p.setCssEndEvent)(a0.current, "transition", {
                    tolerance: 1,
                  }).then(function () {
                    return T && T(l);
                  }),
                  re("".concat(_, "--active")));
              },
              ce = function (l) {
                if (d0 !== !0 && u0.current === 1) {
                  if (
                    (E0.current && clearTimeout(E0.current),
                    I0 === !0 && ge(l),
                    U && J.current)
                  ) {
                    var w = new Event("btn-press");
                    J.current.dispatchEvent(w);
                  }
                  we(l), o !== !0 ? x0() : (u0.current = 2);
                }
              },
              we = function (l) {
                s0.current && A0 && A0(l);
              };
            return (0, d.jsx)(
              pe,
              A(
                {
                  style: fe,
                  className: s.useMemo(
                    function () {
                      var l = [
                        _,
                        q0 && "".concat(_, "--").concat(q0),
                        W0 && "".concat(_, "--").concat(W0),
                        ne && "".concat(_, "--visible"),
                        v && "".concat(_, "--between"),
                        (e0 && !i && "".concat(_, "--placeholder")) || null,
                      ];
                      return (
                        d0 === !0 && l.push("".concat(_, "--disabled")),
                        m0 && l.push(m0),
                        M && l.push.apply(l, M.split(" ")),
                        P && P["aws-btn"]
                          ? D(l, P)
                          : l.join(" ").trim().replace(/[\s]+/gi, " ")
                      );
                    },
                    [_, q0, W0, ne, v, e0, i, d0, m0, M, P]
                  ),
                  role: "button",
                  ref: s0,
                },
                i0,
                he,
                ((I = {
                  onClick: function (l) {
                    q && d0 && l.preventDefault();
                  },
                }),
                R
                  ? ((I.onTouchStart = function (l) {
                      var w, x;
                      l0 && l0(l),
                        (G0.current =
                          (x =
                            (w = l == null ? void 0 : l.changedTouches) ===
                              null || w === void 0
                              ? void 0
                              : w[0]) === null || x === void 0
                            ? void 0
                            : x.clientY),
                        oe(l);
                    }),
                    (I.onTouchEnd = function (l) {
                      var w, x;
                      h0 && h0(l),
                        (G0.current &&
                        !(
                          (x =
                            (w = l == null ? void 0 : l.changedTouches) ===
                              null || w === void 0
                              ? void 0
                              : w[0]) === null || x === void 0
                        ) &&
                        x.clientY
                          ? Math.abs(G0.current - l.changedTouches[0].clientY)
                          : 0) > J.current.offsetHeight
                          ? x0({ force: !0 })
                          : ce(l);
                    }),
                    I)
                  : ((I.onMouseLeave = function () {
                      (Y0.current = !1),
                        o !== !0 || u0.current === 2
                          ? x0({ leave: !0 })
                          : x0({ force: !0 });
                    }),
                    (I.onMouseDown = function (l) {
                      var w;
                      l0 && l0(l),
                        ((w = l == null ? void 0 : l.nativeEvent) === null ||
                        w === void 0
                          ? void 0
                          : w.button) === 0 && oe(l);
                    }),
                    (I.onMouseUp = function (l) {
                      h0 && h0(l), d0 !== !0 ? ce(l) : l.preventDefault();
                    }),
                    z0 === !0
                      ? ((I.onMouseMove = function (l) {
                          if (d0 !== !0) {
                            Y0.current = !0;
                            var w = J.current,
                              x = w.getBoundingClientRect().left,
                              K = w.offsetWidth,
                              f0 =
                                l.pageX < x + 0.3 * K
                                  ? "left"
                                  : l.pageX > x + 0.65 * K
                                  ? "right"
                                  : "middle";
                            r0({
                              element: s0.current,
                              root: _,
                              cssModule: P,
                              state: f0,
                            });
                          }
                        }),
                        I)
                      : ((I.onMouseEnter = function () {
                          (Y0.current = !0),
                            r0({
                              element: s0.current,
                              root: _,
                              cssModule: P,
                              state: "middle",
                            });
                        }),
                        I))),
                {
                  children: (0, d.jsxs)(
                    "span",
                    A(
                      { ref: J, className: G("".concat(_, "__wrapper"), P) },
                      {
                        children: [
                          (0, d.jsxs)(
                            "span",
                            A(
                              {
                                ref: a0,
                                className: G("".concat(_, "__content"), P),
                              },
                              {
                                children: [
                                  f,
                                  (0, d.jsx)(
                                    "span",
                                    A({ ref: ve }, { children: i })
                                  ),
                                  n,
                                ],
                              }
                            )
                          ),
                          y0,
                        ],
                      }
                    )
                  ),
                }
              )
            );
          };
          var V = function () {
            return (
              (V =
                Object.assign ||
                function (e) {
                  for (var r, o = 1, t = arguments.length; o < t; o++)
                    for (var n in (r = arguments[o]))
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n]);
                  return e;
                }),
              V.apply(this, arguments)
            );
          };
          function o0(e) {
            var r = e.url,
              o = e.message,
              t = e.title,
              n = e.image,
              h = e.user,
              f = e.type,
              g = e.phone,
              v = e.width,
              m = e.height,
              i = {},
              c = {};
            switch (f) {
              case "facebook":
                (c.u = encodeURIComponent(r)),
                  (i.url = "https://www.facebook.com/sharer.php?".concat(
                    z(c, "&")
                  )),
                  (i.title = "Facebook Sharer");
                break;
              case "twitter":
                (c.text = o),
                  (c.url = r),
                  (i.height = 250),
                  (i.url = "https://twitter.com/share?".concat(z(c, "&"))),
                  (i.title = "Twitter Sharer");
                break;
              case "pinterest":
                (c.url = r),
                  n && (c.media = n),
                  (i.url = "https://pinterest.com/pin/create/button/?".concat(
                    z(c, "&")
                  )),
                  (i.title = "Pinterest Sharer");
                break;
              case "google":
              case "gplus":
                (c.url = r),
                  (i.url = "https://plus.google.com/share?".concat(z(c, "&"))),
                  (i.title = "Google+ Sharer"),
                  (i.width = 400);
                break;
              case "linkedin":
                (c.mini = !0),
                  (c.url = r),
                  (c.title = o || t),
                  (i.url = "https://www.linkedin.com/shareArticle?".concat(
                    z(c, "&")
                  )),
                  (i.title = "Linkedin Sharer");
                break;
              case "reddit":
                (c.url = r),
                  (c.title = o || t),
                  (i.url = "https://www.reddit.com/submit?".concat(z(c, "&"))),
                  (i.title = ""),
                  (i.width = 850);
                break;
              case "whatsapp":
                (c.phone = g == null ? void 0 : g.replace(/\+|(|)/gim, "")),
                  (c.title = o || t),
                  (i.url = "https://api.whatsapp.com/send?".concat(z(c, "&"))),
                  (i.title = "Whatsapp Message"),
                  (i.width = 850);
                break;
              case "messenger":
                (i.url = "https://m.me/".concat(h)),
                  (i.title = "Messenger Message"),
                  (i.width = 850);
                break;
              case "mail":
                (i.url = "mailto:".concat(r)), (i.title = "_self");
                break;
              case "instagram":
                (i.url = r), (i.title = "_self");
                break;
              default:
                return i;
            }
            return (
              (i.extra = z(
                V(
                  {
                    width: "".concat(i.width || v, "px"),
                    height: "".concat(i.height || m, "px"),
                  },
                  (function (N, i0) {
                    if (typeof window > "u") return { top: 0, left: 0 };
                    var W = window.screenLeft,
                      P = W === void 0 ? 0 : W,
                      E = window.screenTop,
                      C = E === void 0 ? 0 : E,
                      p0 = window.innerWidth,
                      X = window.innerHeight,
                      $ =
                        p0 ||
                        (document.documentElement.clientWidth
                          ? document.documentElement.clientWidth
                          : 0);
                    return {
                      top:
                        (X ||
                          (document.documentElement.clientHeight
                            ? document.documentElement.clientHeight
                            : 0)) /
                          2 -
                        i0 / 2 +
                        C,
                      left: $ / 2 - N / 2 + P,
                    };
                  })(i.width || v, i.height || m)
                ),
                ","
              )),
              i
            );
          }
          var w0 = function () {
              return (
                (w0 =
                  Object.assign ||
                  function (e) {
                    for (var r, o = 1, t = arguments.length; o < t; o++)
                      for (var n in (r = arguments[o]))
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    return e;
                  }),
                w0.apply(this, arguments)
              );
            },
            P0 = {
              youtube:
                "M38.1,23H11.9c-4.1,0-7.6,3.4-7.6,7.6v6.1c0,4.1,3.4,7.6,7.6,7.6h26.3c4.1,0,7.6-3.4,7.6-7.6v-6.1C45.8,26.4,42.4,23,38.1,23z M17.4,27.7h-2.5v12.2h-2.4V27.7h-2.5v-2h7.3V27.7z M24.3,39.9h-2.1v-1.2c-0.4,0.4-0.8,0.8-1.2,0.9c-0.4,0.3-0.8,0.3-1.2,0.3c-0.5,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.3-0.8-0.3-1.4v-8.6h2.1v8c0,0.3,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.6-0.3c0.3-0.2,0.4-0.3,0.7-0.6v-7.9h2.1v10.6H24.3z M31.9,37.7c0,0.8-0.2,1.4-0.5,1.7C31,39.8,30.5,40,29.9,40c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.6-0.4-0.9-0.7v0.8h-2.1V25.7h2.1v4.6c0.3-0.3,0.6-0.6,0.9-0.8c0.3-0.2,0.7-0.3,0.9-0.3c0.7,0,1.2,0.3,1.5,0.7s0.5,1.1,0.5,1.9L31.9,37.7L31.9,37.7z M39.2,34.9h-4v1.9c0,0.6,0.1,0.9,0.2,1.2c0.2,0.3,0.3,0.3,0.7,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.2-0.6,0.2-1.2v-0.5h2.2v0.5c0,1.1-0.3,1.9-0.8,2.5c-0.5,0.5-1.3,0.8-2.4,0.8c-0.9,0-1.7-0.3-2.2-0.8C33.3,38.8,33,38,33,37v-4.7c0-0.9,0.3-1.7,0.9-2.2c0.6-0.6,1.4-0.8,2.3-0.8c0.9,0,1.7,0.3,2.2,0.8c0.5,0.5,0.8,1.3,0.8,2.3V34.9z M36.1,30.9c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.9v1.1H37v-1.1c0-0.4-0.1-0.8-0.3-0.9C36.6,31.1,36.4,30.9,36.1,30.9z M28.8,30.9c-0.2,0-0.3,0-0.4,0.1c-0.2,0.1-0.3,0.2-0.4,0.3v6.5c0.2,0.2,0.3,0.3,0.5,0.3c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.4-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8v-5.4c0-0.3-0.1-0.6-0.3-0.8C29.4,31,29.1,30.9,28.8,30.9z M15.3,19.4h2.6v-6.5l3.1-9.1h-2.7L16.7,10h-0.2l-1.7-6.3h-2.7l3.2,9.5V19.4z M24.6,19.6c1.1,0,1.9-0.3,2.5-0.8s0.9-1.4,0.9-2.4v-6c0-0.8-0.3-1.6-0.9-2.2s-1.4-0.8-2.4-0.8c-1.1,0-1.9,0.3-2.5,0.8c-0.7,0.5-0.9,1.3-0.9,2.1v6c0,1,0.3,1.8,0.9,2.4C22.8,19.4,23.6,19.6,24.6,19.6z M23.7,10.3c0-0.3,0.1-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.3,0.3,0.6v6.3c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.8,0.3s-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.3-0.8L23.7,10.3L23.7,10.3z M31.6,19.5c0.4,0,0.9-0.1,1.4-0.3c0.5-0.3,0.9-0.6,1.4-1.1v1.3h2.4V7.8h-2.4v8.8c-0.3,0.3-0.4,0.4-0.8,0.6c-0.3,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6V7.8h-2.4v9.6c0,0.7,0.2,1.2,0.4,1.5C30.7,19.4,31.1,19.5,31.6,19.5z",
              mail: "M4.9,14L25,30.5L45.1,14v-3.7H4.9V14z M4.9,36.4l9.9-11l-9.9-8.9C4.9,16.6,4.9,36.4,4.9,36.4zM45.1,36.7L34.9,25.5L45,16.7L45.1,36.7L45.1,36.7z M25,33.7l-8.2-6.8L4.9,39.6h40.2L33.2,26.8L25,33.7z",
              facebook:
                "M31.6,44.5V25.7h8l1.3-8h-9.4v-4c0-2.7,1.3-4,4-4h4V1.5c-1.3,0-4.3,0-6.7,0c-6.7,0-9.4,4-9.4,10.7v5.4h-8v8h8v18.8L31.6,44.5L31.6,44.5z",
              whatsapp:
                "M2.5,46.6c0.6-1.9,1.2-3.6,1.8-5.4c0.6-1.7,1.1-3.5,1.8-5.2c0.3-0.9,0.2-1.5-0.2-2.3c-2.4-4.4-3.1-9.1-2.3-14c0.7-4.2,2.5-7.8,5.3-11c4.7-5.1,10.6-7.6,17.5-7.3c5.1,0.2,9.6,2.1,13.4,5.4c3.6,3.1,5.9,7,7,11.6c0.9,3.7,0.8,7.4-0.3,11.1c-1.4,4.6-4,8.5-7.8,11.4c-5.4,4.1-11.4,5.3-18,4c-2-0.4-3.9-1.1-5.6-2c-0.3-0.2-0.5-0.2-0.9-0.1c-3.4,1.1-6.7,2.2-10.1,3.2C3.7,46.2,3.2,46.4,2.5,46.6z M8.3,40.9c0.2,0,0.3-0.1,0.3-0.1c2.1-0.7,4.2-1.3,6.3-2c0.2-0.1,0.5,0,0.7,0.1c0.9,0.5,1.8,1,2.7,1.4c3.9,1.6,7.9,1.9,11.9,0.8c4.8-1.3,8.5-4.2,11-8.6c2.2-3.7,2.9-7.7,2.2-11.9C42.7,15.2,39.9,11,35.4,8c-3.9-2.6-8.3-3.5-12.9-2.7c-4,0.6-7.4,2.5-10.2,5.4c-2.4,2.5-4,5.5-4.7,8.8c-1,4.9-0.3,9.5,2.4,13.7c0.5,0.8,0.5,1.5,0.2,2.3C9.5,37.3,8.9,39.1,8.3,40.9z M36.8,29.8c0,1.7-0.9,3.1-2.5,3.9c-1.6,0.8-3.3,1-5,0.4c-1.5-0.6-3.1-1.2-4.6-1.9c-2-1-3.6-2.4-5-4c-1.6-1.8-3-3.7-4.1-5.9c-0.8-1.5-1.3-3.1-1.1-4.8c0.2-1.8,1-3.3,2.5-4.4c0.3-0.2,0.7-0.3,1.1-0.4c0.5,0,1,0,1.4,0.1c0.4,0,0.6,0.3,0.8,0.6c0.4,0.9,0.7,1.7,1,2.6c0.2,0.6,0.4,1.2,0.7,1.8c0.3,0.7,0.1,1.3-0.3,1.8c-0.4,0.5-0.8,0.9-1.2,1.3C20,21.2,20,21.6,20.2,22c1,1.9,2.3,3.5,4,4.9c1.1,0.9,2.3,1.5,3.6,2.2c0.4,0.2,0.7,0.2,1-0.2c0.6-0.7,1.3-1.4,1.9-2.1c0.4-0.5,0.6-0.6,1.1-0.3c1.5,0.8,3.1,1.6,4.6,2.4C36.8,29,36.9,29.3,36.8,29.8z",
              messenger:
                "M27.5,30l-5.4-5.7L11.7,30l11.5-12.2l5.5,5.7L39,17.8L27.5,30z M25.5,3.8c-11.6,0-21.1,8.7-21.1,19.5c0,6.1,3.1,11.6,7.9,15.2v7.4l7.2-3.9c1.9,0.5,3.9,0.8,6,0.8c11.6,0,21.1-8.7,21.1-19.5S37.1,3.8,25.5,3.8z",
              instagram:
                "M25,13.3c-5.8,0-10.6,4.7-10.6,10.6S19.1,34.6,25,34.6S35.6,29.8,35.6,24S30.8,13.3,25,13.3z M25,30.7c-3.7,0-6.8-3.1-6.8-6.8s3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8S28.7,30.7,25,30.7z M36.1,10.6c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4S34.7,10.6,36.1,10.6z M42.3,6.8c-2.2-2.2-5.2-3.4-8.7-3.4H16.4c-7.2,0-12,4.8-12,12v17c0,3.6,1.2,6.7,3.5,8.9c2.2,2.2,5.2,3.2,8.6,3.2h17c3.6,0,6.6-1.2,8.7-3.2c2.2-2.2,3.4-5.2,3.4-8.8V15.4C45.6,11.9,44.5,8.9,42.3,6.8z M42,32.6c0,2.6-0.9,4.7-2.4,6.1s-3.6,2.2-6.1,2.2h-17c-2.5,0-4.6-0.7-6.1-2.2s-2.2-3.6-2.2-6.2v-17c0-2.5,0.7-4.6,2.2-6.1C11.8,8,14,7.2,16.5,7.2h17.1c2.5,0,4.6,0.7,6.1,2.2c1.4,1.5,2.2,3.6,2.2,6v17.2H42z",
              twitter:
                "M49.3,9.1c-1.8,0.8-3.6,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.1-3.1c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C17,16.1,9.8,12.2,5,6.3c-0.8,1.4-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.3,8.1c-1.6-0.1-3.1-0.5-4.4-1.2v0.1c0,4.7,3.4,8.7,7.8,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2c1.2,3.9,4.9,6.7,9.1,6.8c-3.3,2.6-7.6,4.2-12.1,4.2c-0.8,0-1.6,0-2.3-0.1c4.3,2.8,9.5,4.4,15,4.4c18,0,27.8-14.9,27.8-27.8c0-0.4,0-0.8,0-1.3C46.4,12.7,48,11,49.3,9.1z",
              github:
                "M25,2.5C12.2,2.5,1.9,12.8,1.9,25.6c0,10.2,6.6,18.9,15.8,21.9c1.2,0.2,1.5-0.5,1.5-1.1c0-0.5,0-2.1,0-4c-6.4,1.4-7.8-3-7.8-3c-1-2.7-2.6-3.4-2.6-3.4C6.7,34.6,9,34.6,9,34.6c2.3,0.2,3.5,2.4,3.5,2.4c2.1,3.5,5.4,2.5,6.7,1.9c0.2-1.5,0.8-2.5,1.5-3.1c-5.1-0.6-10.5-2.6-10.5-11.4c0-2.5,0.9-4.6,2.4-6.2c-0.2-0.6-1-2.9,0.2-6.1c0,0,1.9-0.6,6.3,2.4c1.8-0.5,3.8-0.8,5.8-0.8s3.9,0.3,5.8,0.8c4.4-3,6.3-2.4,6.3-2.4c1.3,3.2,0.5,5.5,0.2,6.1c1.5,1.6,2.4,3.7,2.4,6.2c0,8.9-5.4,10.8-10.5,11.4c0.8,0.7,1.6,2.1,1.6,4.3c0,2.9,0,5.6,0,6.4c0,0.6,0.4,1.3,1.5,1.1C41.4,44.5,48,35.9,48,25.7C48.1,12.8,37.8,2.5,25,2.5z",
              linkedin:
                "M13.8,41.7H5.4V13.6h8.4C13.8,13.6,13.8,41.7,13.8,41.7z M44.7,41.7h-8.4v-15c0-3.9-1.4-5.9-4.2-5.9c-2.2,0-3.6,1.1-4.3,3.3c0,3.5,0,17.6,0,17.6h-8.4c0,0,0.1-25.3,0-28.1h6.7l0.5,5.6h0.2c1.7-2.8,4.5-4.7,8.3-4.7c2.9,0,5.2,0.8,7,2.8s2.7,4.7,2.7,8.5L44.7,41.7L44.7,41.7z M9.6,2.3C12,2.3,14,4.2,14,6.5s-2,4.2-4.4,4.2S5.2,8.8,5.2,6.5C5.3,4.2,7.2,2.3,9.6,2.3z",
              gplus:
                "M29.9,5.2c0,0-9.1,0-12.2,0C12.2,5.2,6.9,9.1,6.9,14c0,5,3.8,8.8,9.5,8.8c0.4,0,0.7-0.1,1.1-0.1c-0.4,0.7-0.7,1.5-0.7,2.3c0,1.4,0.7,2.5,1.7,3.4c-0.7,0-1.4,0-2.1,0c-6.9,0-12.2,4.4-12.2,8.9c0,4.5,5.9,7.4,12.7,7.4c7.9,0,12.2-4.5,12.2-8.9c0-3.6-1-5.8-4.4-8.1c-1.1-0.8-3.3-2.7-3.3-3.9c0-1.3,0.4-2,2.4-3.5c2-1.6,3.5-3.5,3.5-6.1c0-3.2-1.3-7-4-7H28L29.9,5.2z M25.8,35c0.1,0.4,0.2,0.8,0.2,1.3c0,3.6-2.3,6.5-9,6.5c-4.7,0-8.2-3-8.2-6.6c0-3.5,4.3-6.5,9-6.4c1.1,0,2.1,0.2,3.1,0.5C23.5,32,25.3,33,25.8,35z M18.2,21.5c-3.2-0.1-6.2-3.6-6.8-7.8s1.6-7.4,4.8-7.4c3.2,0.1,6.2,3.4,6.8,7.7C23.6,18.2,21.4,21.6,18.2,21.5z M39.8,21v-6h-3.9v6h-6v4h6v6h3.9v-6h6v-3.9L39.8,21L39.8,21z",
              pinterest:
                "M7.6,17.7c0,3.3,1.1,6.6,3.3,8.5c0.5,0.4,1.7,1.3,2.6,1.3c0.7,0,0.8-0.8,1-1.4c1-3.3,0.1-1.9-1.1-4.7c-1.3-2.8-0.4-7.3,1.1-9.6c2.9-4.4,6.2-6,11.6-6c3.1,0,5.4,1.1,7.1,2.6c6.1,5.2,1.9,21.8-5.6,20.9c-7.5-0.8-1.4-10-1.4-14c0-6.2-8.5-5.2-8.5,2.7c0,2.7,1.1,3.5,0.9,4.2c-1.1,3.8-1.9,8.2-2.9,12.2c-1.1,4.1-1,7.5-0.6,11.7c0,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0,0.3-0.1c2.9-2.9,4.8-7.7,5.5-10.5c0.4-1.5,0.9-3.3,1.2-4.8c0.1-0.3,0.7,0.6,1.1,1c3.1,2.8,8.4,2.2,11.8,0.1c6.6-4,9.4-15.4,5.9-22.2c-1-1.9-2-2.8-3.4-4.3C31.8-0.1,19.3,0.2,13.2,6C9.9,9.1,7.6,12.7,7.6,17.7L7.6,17.7z",
              reddit:
                "M48.9,18.6L48.9,18.6c0,0.1,0,0.2,0,0.3c0,1.2-0.4,2.4-1,3.3s-1.4,1.7-2.4,2.2c0.1,0.5,0.1,1,0.1,1.4c0,2.6-0.9,5.1-2.4,7.2l0,0l0,0c-2.8,3.8-7.2,6.1-11.6,7.2l0,0l0,0c-2.3,0.6-4.8,0.9-7.2,0.9c-3.6,0-7.2-0.7-10.6-2l0,0l0,0C10.3,37.7,7,35.4,5,32c-1.1-1.8-1.7-3.9-1.7-6.1c0-0.5,0-1,0.1-1.4c-0.9-0.5-1.7-1.3-2.3-2.1c-0.6-1-1-2.1-1.1-3.2l0,0l0,0l0,0c0-1.6,0.7-3.2,1.8-4.4s2.6-1.9,4.2-1.9h0.1c0.2,0,0.3,0,0.5,0c0.8,0,1.6,0.1,2.4,0.4l0,0l0,0c0.7,0.3,1.3,0.6,1.9,1.1c0.2-0.1,0.4-0.2,0.6-0.3c3.5-2.1,7.6-2.9,11.6-3.2c0-2,0.3-4.1,1.2-5.9c0.8-1.5,2.2-2.7,3.9-3.1l0,0l0,0c0.6-0.1,1.3-0.2,1.9-0.2c1.7,0,3.4,0.4,4.9,1c0.7-1.1,1.7-1.9,2.8-2.3l0,0l0,0c0.7-0.2,1.4-0.3,2.1-0.3c0.8,0,1.5,0.1,2.2,0.5l0,0l0,0l0,0c1,0.4,1.9,1.1,2.5,2.1c0.6,0.9,1,2,1,3.2c0,0.2,0,0.4,0,0.6l0,0l0,0c-0.1,1.5-0.9,2.8-1.9,3.7c-1.1,0.9-2.4,1.5-3.8,1.5c-0.2,0-0.4,0-0.7,0c-1.4-0.1-2.7-0.8-3.6-1.8c-1-1-1.6-2.4-1.6-3.8C34,6,34,6,34,5.9c-1.3-0.6-2.7-1.1-4.1-1.1c-0.2,0-0.4,0-0.6,0l0,0c-1,0.1-2,0.8-2.4,1.7l0,0l0,0c-0.7,1.4-0.8,3-0.9,4.6c3.9,0.3,7.9,1.2,11.4,3.2l0,0l0,0c0.1,0,0.2,0.1,0.3,0.2c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.7,2.3-1.1,3.5-1.1c0.6,0,1.1,0.1,1.6,0.2l0,0l0,0l0,0l0,0c1.3,0.3,2.4,1.1,3.3,2.1C48.2,15.9,48.8,17.2,48.9,18.6L48.9,18.6L48.9,18.6z M42.5,26c0-1.8-0.6-3.6-1.7-5c-2.1-2.9-5.2-4.8-8.5-5.8l0,0c-0.6-0.2-1.3-0.4-1.9-0.5c-1.9-0.4-3.9-0.7-5.9-0.7c-2.7,0-5.3,0.4-7.9,1.2c-3.3,1.1-6.5,2.9-8.5,5.8l0,0c-1,1.4-1.6,3.2-1.6,5c0,0.7,0.1,1.3,0.3,2l0,0c0.4,1.4,1.1,2.7,2,3.8c0.9,1.1,2.1,2.1,3.3,2.9c0.3,0.2,0.5,0.3,0.8,0.5c3.5,2,7.6,2.9,11.6,2.9c0.7,0,1.4,0,2-0.1c4.1-0.3,8.2-1.6,11.5-4l0,0c1.1-0.8,2-1.7,2.8-2.8s1.3-2.3,1.6-3.6l0,0l0,0C42.5,27,42.5,26.5,42.5,26zM37.3,5.5c0,0.1,0,0.1,0,0.2l0,0l0,0c0,0.7,0.3,1.3,0.8,1.8s1.1,0.8,1.8,0.8l0,0l0,0H40c0.7,0,1.3-0.3,1.8-0.8s0.8-1.1,0.9-1.8l0,0l0,0c0-0.1,0-0.1,0-0.2c0-0.7-0.3-1.4-0.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8c-0.2,0-0.4,0-0.7,0.1l0,0l0,0c-0.6,0.1-1.1,0.5-1.5,1C37.5,4.4,37.3,4.9,37.3,5.5z M8.2,16.2c-0.5-0.2-1.1-0.4-1.6-0.4c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.8,0-1.6,0.4-2.1,0.9c-0.6,0.5-1,1.3-1,2.1l0,0l0,0c0,0.1,0,0.1,0,0.2c0,0.5,0.2,1,0.4,1.4C3.8,20.7,4,21,4.3,21.3C5.2,19.3,6.6,17.6,8.2,16.2zM45.7,18.9c0-0.4-0.1-0.9-0.3-1.3l0,0l0,0c-0.3-0.6-0.7-1-1.3-1.4c-0.5-0.3-1.2-0.5-1.8-0.5s-1.1,0.1-1.7,0.4c1.6,1.4,3,3.1,3.9,5.1c0.3-0.3,0.5-0.6,0.7-0.9C45.6,19.9,45.7,19.4,45.7,18.9z M32.9,29.2c-0.2-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0.1-0.7,0.2c-2.1,1.1-4.6,1.7-7.1,1.7c-1.9,0-3.7-0.3-5.4-1.1l0,0l0,0c-0.3-0.1-0.5-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.5-0.2C17.3,29,17.1,29,16.9,29s-0.4,0-0.6,0.1l0,0l0,0c-0.3,0.1-0.5,0.3-0.7,0.5s-0.2,0.5-0.2,0.7s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.6,0.5c2.4,1.4,5.2,2.1,8.1,2.1c2.6,0,5.2-0.5,7.5-1.5l0,0l0,0c0.3-0.2,0.7-0.3,1.1-0.5c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6l0,0c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.4-0.1-0.5C33.3,29.5,33.1,29.3,32.9,29.2zM16.8,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C19.9,21.1,18.5,19.8,16.8,19.8z M32.1,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C35.1,21.1,33.8,19.8,32.1,19.8z",
            };
          const _0 = function (r) {
            var o = r.type,
              t = r.width,
              n = r.height,
              h = r.color;
            return (0, d.jsx)(
              "svg",
              w0(
                {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "xMidYMid meet",
                  viewBox: "0 0 50 50",
                  width: t,
                  height: n,
                },
                { children: (0, d.jsx)("path", { fill: h, d: P0[o] }) }
              )
            );
          };
          var c0 = function () {
              return (
                (c0 =
                  Object.assign ||
                  function (e) {
                    for (var r, o = 1, t = arguments.length; o < t; o++)
                      for (var n in (r = arguments[o]))
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    return e;
                  }),
                c0.apply(this, arguments)
              );
            },
            Q = function (e, r) {
              var o = {};
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) &&
                  r.indexOf(t) < 0 &&
                  (o[t] = e[t]);
              if (
                e != null &&
                typeof Object.getOwnPropertySymbols == "function"
              ) {
                var n = 0;
                for (t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                  r.indexOf(t[n]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, t[n]) &&
                    (o[t[n]] = e[t[n]]);
              }
              return o;
            };
          const S0 = function (e) {
            var r = e.onPress,
              o = r === void 0 ? null : r,
              t = e.children,
              n = t === void 0 ? null : t,
              h = e.icon,
              f = h === void 0 || h,
              g = e.sharer,
              v = g === void 0 ? {} : g,
              m = e.dimensions,
              i = m === void 0 ? { width: 640, height: 480 } : m,
              c = e.type,
              M = Q(e, [
                "onPress",
                "children",
                "icon",
                "sharer",
                "dimensions",
                "type",
              ]),
              N = typeof window < "u",
              i0 = s.useRef(
                (function () {
                  var C;
                  return (
                    typeof navigator < "u" &&
                    ((C = navigator == null ? void 0 : navigator.userAgent) ===
                      null || C === void 0
                      ? void 0
                      : C.match(/iPhone|iPad|iPod|Android/i))
                  );
                })()
              ).current,
              W = function () {
                if (v != null && v.message) return v.message;
                if (N) {
                  var E = document.querySelector("title");
                  if (E != null && E.innerHTML) return E.innerHTML;
                }
                return null;
              },
              P = function () {
                if (v != null && v.image) return v.image;
                if (N !== null) {
                  var E = document.querySelector('meta[property="og:image"]');
                  if (E) return E.getAttribute("content");
                }
                return null;
              };
            return (0, d.jsx)(
              b,
              c0(
                {
                  type: c,
                  onPress: function (E) {
                    if (o) o(E);
                    else if (!M.href) {
                      var C = o0({
                        height: i == null ? void 0 : i.height,
                        width: i == null ? void 0 : i.width,
                        url:
                          v != null && v.url
                            ? v.url
                            : N
                            ? window.location.href
                            : null,
                        message: W(),
                        image: P(),
                        type: c,
                        user: v.user,
                        phone: v.phone,
                      });
                      C != null &&
                        C.url &&
                        (navigator != null && navigator.share && i0
                          ? navigator.share({
                              url: C.url,
                              text: C.text,
                              title: C.title,
                            })
                          : N && window.open(C.url, C.title, C.extra));
                    }
                  },
                },
                M,
                {
                  before: f
                    ? _0({
                        type: c,
                        width: f === !0 ? 24 : f.width || 24,
                        height: f === !0 ? 24 : f.height || 24,
                        color: M.disabled ? "rgba(255,255,255,0.35)" : "#FFF",
                      })
                    : null,
                },
                { children: n }
              )
            );
          };
          var Z = function () {
              return (
                (Z =
                  Object.assign ||
                  function (e) {
                    for (var r, o = 1, t = arguments.length; o < t; o++)
                      for (var n in (r = arguments[o]))
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    return e;
                  }),
                Z.apply(this, arguments)
              );
            },
            b0 = function (e, r, o, t) {
              return new (o || (o = Promise))(function (n, h) {
                function f(m) {
                  try {
                    v(t.next(m));
                  } catch (i) {
                    h(i);
                  }
                }
                function g(m) {
                  try {
                    v(t.throw(m));
                  } catch (i) {
                    h(i);
                  }
                }
                function v(m) {
                  m.done
                    ? n(m.value)
                    : (function (c) {
                        return c instanceof o
                          ? c
                          : new o(function (M) {
                              M(c);
                            });
                      })(m.value).then(f, g);
                }
                v((t = t.apply(e, r || [])).next());
              });
            },
            v0 = function (e, r) {
              var o,
                t,
                n,
                h,
                f = {
                  label: 0,
                  sent: function () {
                    if (1 & n[0]) throw n[1];
                    return n[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (h = { next: g(0), throw: g(1), return: g(2) }),
                typeof Symbol == "function" &&
                  (h[Symbol.iterator] = function () {
                    return this;
                  }),
                h
              );
              function g(v) {
                return function (m) {
                  return (function (c) {
                    if (o)
                      throw new TypeError("Generator is already executing.");
                    for (; f; )
                      try {
                        if (
                          ((o = 1),
                          t &&
                            (n =
                              2 & c[0]
                                ? t.return
                                : c[0]
                                ? t.throw || ((n = t.return) && n.call(t), 0)
                                : t.next) &&
                            !(n = n.call(t, c[1])).done)
                        )
                          return n;
                        switch (
                          ((t = 0), n && (c = [2 & c[0], n.value]), c[0])
                        ) {
                          case 0:
                          case 1:
                            n = c;
                            break;
                          case 4:
                            return f.label++, { value: c[1], done: !1 };
                          case 5:
                            f.label++, (t = c[1]), (c = [0]);
                            continue;
                          case 7:
                            (c = f.ops.pop()), f.trys.pop();
                            continue;
                          default:
                            if (
                              ((n = f.trys),
                              !(
                                (n = n.length > 0 && n[n.length - 1]) ||
                                (c[0] !== 6 && c[0] !== 2)
                              ))
                            ) {
                              f = 0;
                              continue;
                            }
                            if (
                              c[0] === 3 &&
                              (!n || (c[1] > n[0] && c[1] < n[3]))
                            ) {
                              f.label = c[1];
                              break;
                            }
                            if (c[0] === 6 && f.label < n[1]) {
                              (f.label = n[1]), (n = c);
                              break;
                            }
                            if (n && f.label < n[2]) {
                              (f.label = n[2]), f.ops.push(c);
                              break;
                            }
                            n[2] && f.ops.pop(), f.trys.pop();
                            continue;
                        }
                        c = r.call(e, f);
                      } catch (M) {
                        (c = [6, M]), (t = 0);
                      } finally {
                        o = n = 0;
                      }
                    if (5 & c[0]) throw c[1];
                    return { value: c[0] ? c[1] : void 0, done: !0 };
                  })([v, m]);
                };
              }
            },
            se = function (e, r) {
              var o = {};
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) &&
                  r.indexOf(t) < 0 &&
                  (o[t] = e[t]);
              if (
                e != null &&
                typeof Object.getOwnPropertySymbols == "function"
              ) {
                var n = 0;
                for (t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                  r.indexOf(t[n]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, t[n]) &&
                    (o[t[n]] = e[t[n]]);
              }
              return o;
            },
            ue = typeof window < "u";
          const de = function (e) {
            var r = e.onPress,
              o = r === void 0 ? null : r,
              t = e.rootElement,
              n = t === void 0 ? null : t,
              h = e.loadingLabel,
              f = h === void 0 ? "Wait.." : h,
              g = e.resultLabel,
              v = g === void 0 ? "Success!" : g,
              m = (e.disabled, e.cssModule),
              i = m === void 0 ? null : m,
              c = e.children,
              M = c === void 0 ? null : c,
              N = e.size,
              i0 = N === void 0 ? null : N,
              W = e.type,
              P = W === void 0 ? null : W,
              E = e.releaseDelay,
              C = E === void 0 ? 500 : E,
              p0 = se(e, [
                "onPress",
                "rootElement",
                "loadingLabel",
                "resultLabel",
                "disabled",
                "cssModule",
                "children",
                "size",
                "type",
                "releaseDelay",
              ]),
              X = n || "aws-btn",
              $ = s.useRef(null),
              y0 = s.useRef(null),
              M0 = (function (T) {
                var B = s.useState(T),
                  N0 = B[0],
                  B0 = B[1],
                  e0 = s.useRef(T);
                return [
                  N0,
                  function (F0) {
                    var I0 = Z(Z({}, e0.current), F0);
                    (e0.current = I0), B0(I0);
                  },
                  e0.current,
                ];
              })({
                loadingEnd: !1,
                loadingStart: !1,
                loadingError: !1,
                errorLabel: null,
                active: !1,
              }),
              q = M0[1],
              Y = M0[2];
            s.useEffect(function () {
              return function () {
                $ != null && $.current && clearTimeout($.current);
              };
            }, []);
            var z0,
              C0,
              l0,
              T0 = function (T, B) {
                T === void 0 && (T = !0),
                  B === void 0 && (B = null),
                  q({ loadingEnd: !0, loadingError: !T, errorLabel: B });
              },
              h0 = function () {
                $.current = setTimeout(function () {
                  ue &&
                    (0, p.beforeFutureCssLayout)(2, function () {
                      var T;
                      (T = function () {
                        q({ loadingError: !1, errorLabel: null });
                      }),
                        q({ loadingStart: !1, loadingEnd: !1, active: !1 }),
                        (0, p.beforeFutureCssLayout)(2, T);
                    });
                }, C);
              },
              k0 = s.useCallback(
                function () {
                  q({ active: !0 });
                },
                [q]
              ),
              A0 = Y.active,
              R0 = Y.errorLabel;
            return (0, d.jsx)(
              b,
              Z(
                {
                  size: i0,
                  type: P,
                  className:
                    ((z0 = Y.loadingStart),
                    (C0 = Y.loadingEnd),
                    (l0 = Y.loadingError),
                    [
                      (z0 && "".concat(X, "--start")) || null,
                      (C0 && "".concat(X, "--end")) || null,
                      (l0 && "".concat(X, "--errored")) || null,
                      "".concat(X, "--progress"),
                    ]
                      .join(" ")
                      .trim()
                      .replace(/[\s]+/gi, " ")),
                  onPress: function (T) {
                    return b0(void 0, void 0, void 0, function () {
                      return v0(this, function (B) {
                        switch (B.label) {
                          case 0:
                            return (Y == null ? void 0 : Y.loadingStart) === !0
                              ? [2]
                              : ((0, p.beforeFutureCssLayout)(4, function () {
                                  q({ loadingStart: !0 });
                                }),
                                [4, (0, p.onceTransitionEnd)(y0.current)]);
                          case 1:
                            return (
                              B.sent(),
                              o && o(T, T0),
                              (0, p.setCssEndEvent)(y0.current, "transition", {
                                tolerance: 3,
                              }).then(h0),
                              [2]
                            );
                        }
                      });
                    });
                  },
                  onMouseDown: k0,
                  cssModule: i,
                  active: A0,
                  extra: (0, d.jsx)("span", {
                    children: (0, d.jsx)("span", {
                      ref: y0,
                      "data-loading": f || null,
                      "data-status": R0 || v || null,
                      className: G("".concat(X, "__progress"), i),
                    }),
                  }),
                },
                p0,
                { children: (0, d.jsx)("span", { children: M }) }
              )
            );
          };
        })(),
        H
      );
    })()
  );
})(Pe);
var _e = Object.defineProperty,
  Se = Object.getOwnPropertyDescriptor,
  V0 = (y, L, j, F) => {
    for (
      var S = F > 1 ? void 0 : F ? Se(L, j) : L, O = y.length - 1, H;
      O >= 0;
      O--
    )
      (H = y[O]) && (S = (F ? H(L, j, S) : H(S)) || S);
    return F && S && _e(L, j, S), S;
  };
const ze = ["primary", "secondary", "anchor", "danger"];
class j0 {
  constructor() {
    g0(this, "type", "primary");
    g0(this, "text", "button");
    g0(this, "href");
    g0(this, "before");
    g0(this, "onMouseUp");
  }
}
V0(
  [
    U0(xe, {
      options: ze.map((y) => ({ label: y, value: y })),
      style: { width: "100%" },
    }),
  ],
  j0.prototype,
  "type",
  2
);
V0([U0(le)], j0.prototype, "text", 2);
V0([U0(le)], j0.prototype, "href", 2);
V0([U0(Le)], j0.prototype, "before", 2);
const Te = Oe({
  name: "button",
  isInternal: !1,
  isContainer: !1,
  styleEditor: {
    unSupportGroups: ["Background", "Border"],
    unSupportProperties: ["color"],
  },
});
ae.Props = j0;
ae.metaConfig = Te;
function ae(y) {
  const { href: L, before: j, onMouseUp: F, ...S } = y,
    O = ie.useCallback(
      (d) => {
        L && window.open(L), F && F(d);
      },
      [L, F]
    ),
    H = j ? Reflect.get(je, j) : void 0;
  return D0.jsx(D0.Fragment, {
    children: D0.jsx($0.AwesomeButton, {
      before: H ? D0.jsx(H, {}, j) : null,
      onMouseUp: O,
      ...S,
      children: y.text,
    }),
  });
}
export { ae as default };
