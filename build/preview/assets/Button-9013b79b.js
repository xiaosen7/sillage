var ar = Object.defineProperty;
var ir = (e, t, o) =>
  t in e
    ? ar(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (e[t] = o);
var It = (e, t, o) => (ir(e, typeof t != "symbol" ? t + "" : t, o), o);
import {
  r,
  _ as fe,
  a as lt,
  b as Ke,
  c as Be,
  d as me,
  R as ln,
  u as lr,
  w as ut,
  e as Tt,
  f as cr,
  g as sr,
  h as _t,
  i as Oe,
  j as ur,
  k as dr,
  l as it,
  m as fr,
  n as Wt,
  o as vr,
  t as mr,
  p as pr,
  q as gr,
  s as xn,
  v as Mn,
  x as hr,
  y as br,
  z as Rn,
  A as On,
  T as jt,
  B as Dn,
  C as ht,
  D as Yt,
  E as kt,
  F as Sr,
  G as wr,
  L as yr,
  S as Cr,
  H as Er,
  I as cn,
  J as nn,
  K as Pn,
  M as Ir,
  N as xr,
  O as Mr,
  P as Rr,
  Q as Or,
  U as Dr,
  V as Pr,
  W as $r,
  X as Xt,
  Y as $n,
  Z as Tr,
  $ as _r,
  a0 as Vt,
} from "./index-841fcd0d.js";
import {
  p as Kt,
  T as Nr,
  i as Lr,
  u as zr,
  C as Hr,
  K as Xe,
  a as Tn,
  g as Fr,
  b as Ar,
  I as Vr,
} from "./index.esm-eda47c21.js";
import { K as ce } from "./KeyCode-6413d982.js";
import { C as jr } from "./CheckOutlined-b8520936.js";
var _n = r.createContext(null);
function Wr() {
  return r.useContext(_n);
}
function Kr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
    t = r.useState(!1),
    o = fe(t, 2),
    n = o[0],
    i = o[1],
    a = r.useRef(null),
    u = function () {
      window.clearTimeout(a.current);
    };
  r.useEffect(function () {
    return u;
  }, []);
  var l = function (d, v) {
    u(),
      (a.current = window.setTimeout(function () {
        i(d), v && v();
      }, e));
  };
  return [n, l, u];
}
function Nn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
    t = r.useRef(null),
    o = r.useRef(null);
  r.useEffect(function () {
    return function () {
      window.clearTimeout(o.current);
    };
  }, []);
  function n(i) {
    (i || t.current === null) && (t.current = i),
      window.clearTimeout(o.current),
      (o.current = window.setTimeout(function () {
        t.current = null;
      }, e));
  }
  return [
    function () {
      return t.current;
    },
    n,
  ];
}
function Br(e, t, o, n) {
  var i = r.useRef(null);
  (i.current = { open: t, triggerOpen: o, customizedTrigger: n }),
    r.useEffect(function () {
      function a(u) {
        var l;
        if (
          !((l = i.current) !== null && l !== void 0 && l.customizedTrigger)
        ) {
          var c = u.target;
          c.shadowRoot && u.composed && (c = u.composedPath()[0] || c),
            i.current.open &&
              e()
                .filter(function (d) {
                  return d;
                })
                .every(function (d) {
                  return !d.contains(c) && d !== c;
                }) &&
              i.current.triggerOpen(!1);
        }
      }
      return (
        window.addEventListener("mousedown", a),
        function () {
          return window.removeEventListener("mousedown", a);
        }
      );
    }, []);
}
var Ur = [
    "prefixCls",
    "invalidate",
    "item",
    "renderItem",
    "responsive",
    "responsiveDisabled",
    "registerSize",
    "itemKey",
    "className",
    "style",
    "children",
    "display",
    "order",
    "component",
  ],
  xt = void 0;
function Yr(e, t) {
  var o = e.prefixCls,
    n = e.invalidate,
    i = e.item,
    a = e.renderItem,
    u = e.responsive,
    l = e.responsiveDisabled,
    c = e.registerSize,
    d = e.itemKey,
    v = e.className,
    f = e.style,
    p = e.children,
    g = e.display,
    S = e.order,
    R = e.component,
    T = R === void 0 ? "div" : R,
    O = lt(e, Ur),
    h = u && !g;
  function x(z) {
    c(d, z);
  }
  r.useEffect(function () {
    return function () {
      x(null);
    };
  }, []);
  var _ = a && i !== xt ? a(i) : p,
    A;
  n ||
    (A = {
      opacity: h ? 0 : 1,
      height: h ? 0 : xt,
      overflowY: h ? "hidden" : xt,
      order: u ? S : xt,
      pointerEvents: h ? "none" : xt,
      position: h ? "absolute" : xt,
    });
  var ne = {};
  h && (ne["aria-hidden"] = !0);
  var Z = r.createElement(
    T,
    Ke({ className: Be(!n && o, v), style: me(me({}, A), f) }, ne, O, {
      ref: t,
    }),
    _
  );
  return (
    u &&
      (Z = r.createElement(
        ln,
        {
          onResize: function (ie) {
            var V = ie.offsetWidth;
            x(V);
          },
          disabled: l,
        },
        Z
      )),
    Z
  );
}
var $t = r.forwardRef(Yr);
$t.displayName = "Item";
function Xr() {
  var e = lr({}),
    t = fe(e, 2),
    o = t[1],
    n = r.useRef([]),
    i = 0,
    a = 0;
  function u(l) {
    var c = i;
    (i += 1), n.current.length < c + 1 && (n.current[c] = l);
    var d = n.current[c];
    function v(f) {
      (n.current[c] = typeof f == "function" ? f(n.current[c]) : f),
        ut.cancel(a),
        (a = ut(function () {
          o({}, !0);
        }));
    }
    return [d, v];
  }
  return u;
}
var Gr = ["component"],
  qr = ["className"],
  Qr = ["className"],
  kr = function (t, o) {
    var n = r.useContext(Bt);
    if (!n) {
      var i = t.component,
        a = i === void 0 ? "div" : i,
        u = lt(t, Gr);
      return r.createElement(a, Ke({}, u, { ref: o }));
    }
    var l = n.className,
      c = lt(n, qr),
      d = t.className,
      v = lt(t, Qr);
    return r.createElement(
      Bt.Provider,
      { value: null },
      r.createElement($t, Ke({ ref: o, className: Be(l, d) }, c, v))
    );
  },
  Ln = r.forwardRef(kr);
Ln.displayName = "RawItem";
var Jr = [
    "prefixCls",
    "data",
    "renderItem",
    "renderRawItem",
    "itemKey",
    "itemWidth",
    "ssr",
    "style",
    "className",
    "maxCount",
    "renderRest",
    "renderRawRest",
    "suffix",
    "component",
    "itemComponent",
    "onVisibleChange",
  ],
  Bt = r.createContext(null),
  zn = "responsive",
  Hn = "invalidate";
function Zr(e) {
  return "+ ".concat(e.length, " ...");
}
function eo(e, t) {
  var o = e.prefixCls,
    n = o === void 0 ? "rc-overflow" : o,
    i = e.data,
    a = i === void 0 ? [] : i,
    u = e.renderItem,
    l = e.renderRawItem,
    c = e.itemKey,
    d = e.itemWidth,
    v = d === void 0 ? 10 : d,
    f = e.ssr,
    p = e.style,
    g = e.className,
    S = e.maxCount,
    R = e.renderRest,
    T = e.renderRawRest,
    O = e.suffix,
    h = e.component,
    x = h === void 0 ? "div" : h,
    _ = e.itemComponent,
    A = e.onVisibleChange,
    ne = lt(e, Jr),
    Z = Xr(),
    z = f === "full",
    ie = Z(null),
    V = fe(ie, 2),
    J = V[0],
    de = V[1],
    j = J || 0,
    ve = Z(new Map()),
    B = fe(ve, 2),
    H = B[0],
    ee = B[1],
    te = Z(0),
    s = fe(te, 2),
    w = s[0],
    y = s[1],
    E = Z(0),
    m = fe(E, 2),
    W = m[0],
    U = m[1],
    N = Z(0),
    M = fe(N, 2),
    P = M[0],
    I = M[1],
    b = r.useState(null),
    F = fe(b, 2),
    re = F[0],
    X = F[1],
    se = r.useState(null),
    k = fe(se, 2),
    q = k[0],
    le = k[1],
    he = r.useMemo(
      function () {
        return q === null && z ? Number.MAX_SAFE_INTEGER : q || 0;
      },
      [q, J]
    ),
    pe = r.useState(!1),
    oe = fe(pe, 2),
    Le = oe[0],
    He = oe[1],
    be = "".concat(n, "-item"),
    ye = Math.max(w, W),
    Ye = S === zn,
    Se = a.length && Ye,
    De = S === Hn,
    $e = Se || (typeof S == "number" && a.length > S),
    we = r.useMemo(
      function () {
        var C = a;
        return (
          Se
            ? J === null && z
              ? (C = a)
              : (C = a.slice(0, Math.min(a.length, j / v)))
            : typeof S == "number" && (C = a.slice(0, S)),
          C
        );
      },
      [a, v, J, S, Se]
    ),
    Ie = r.useMemo(
      function () {
        return Se ? a.slice(he + 1) : a.slice(we.length);
      },
      [a, we, Se, he]
    ),
    Ge = r.useCallback(
      function (C, D) {
        var $;
        return typeof c == "function"
          ? c(C)
          : ($ = c && (C == null ? void 0 : C[c])) !== null && $ !== void 0
          ? $
          : D;
      },
      [c]
    ),
    Ve = r.useCallback(
      u ||
        function (C) {
          return C;
        },
      [u]
    );
  function L(C, D, $) {
    (q === C && (D === void 0 || D === re)) ||
      (le(C),
      $ || (He(C < a.length - 1), A == null || A(C)),
      D !== void 0 && X(D));
  }
  function G(C, D) {
    de(D.clientWidth);
  }
  function Me(C, D) {
    ee(function ($) {
      var Y = new Map($);
      return D === null ? Y.delete(C) : Y.set(C, D), Y;
    });
  }
  function Ee(C, D) {
    U(D), y(W);
  }
  function Re(C, D) {
    I(D);
  }
  function Te(C) {
    return H.get(Ge(we[C], C));
  }
  Tt(
    function () {
      if (j && ye && we) {
        var C = P,
          D = we.length,
          $ = D - 1;
        if (!D) {
          L(0, null);
          return;
        }
        for (var Y = 0; Y < D; Y += 1) {
          var ue = Te(Y);
          if ((z && (ue = ue || 0), ue === void 0)) {
            L(Y - 1, void 0, !0);
            break;
          }
          if (
            ((C += ue), ($ === 0 && C <= j) || (Y === $ - 1 && C + Te($) <= j))
          ) {
            L($, null);
            break;
          } else if (C + ye > j) {
            L(Y - 1, C - ue - P + W);
            break;
          }
        }
        O && Te(0) + P > j && X(null);
      }
    },
    [j, H, W, P, Ge, we]
  );
  var je = Le && !!Ie.length,
    nt = {};
  re !== null && Se && (nt = { position: "absolute", left: re, top: 0 });
  var ge = { prefixCls: be, responsive: Se, component: _, invalidate: De },
    Ze = l
      ? function (C, D) {
          var $ = Ge(C, D);
          return r.createElement(
            Bt.Provider,
            {
              key: $,
              value: me(
                me({}, ge),
                {},
                {
                  order: D,
                  item: C,
                  itemKey: $,
                  registerSize: Me,
                  display: D <= he,
                }
              ),
            },
            l(C, D)
          );
        }
      : function (C, D) {
          var $ = Ge(C, D);
          return r.createElement(
            $t,
            Ke({}, ge, {
              order: D,
              key: $,
              item: C,
              renderItem: Ve,
              itemKey: $,
              registerSize: Me,
              display: D <= he,
            })
          );
        },
    Ue,
    xe = {
      order: je ? he : Number.MAX_SAFE_INTEGER,
      className: "".concat(be, "-rest"),
      registerSize: Ee,
      display: je,
    };
  if (T)
    T &&
      (Ue = r.createElement(Bt.Provider, { value: me(me({}, ge), xe) }, T(Ie)));
  else {
    var dt = R || Zr;
    Ue = r.createElement(
      $t,
      Ke({}, ge, xe),
      typeof dt == "function" ? dt(Ie) : dt
    );
  }
  var qe = r.createElement(
    x,
    Ke({ className: Be(!De && n, g), style: p, ref: t }, ne),
    we.map(Ze),
    $e ? Ue : null,
    O &&
      r.createElement(
        $t,
        Ke({}, ge, {
          responsive: Ye,
          responsiveDisabled: !Se,
          order: he,
          className: "".concat(be, "-suffix"),
          registerSize: Re,
          display: !0,
          style: nt,
        }),
        O
      )
  );
  return (
    Ye && (qe = r.createElement(ln, { onResize: G, disabled: !Se }, qe)), qe
  );
}
var Nt = r.forwardRef(eo);
Nt.displayName = "Overflow";
Nt.Item = Ln;
Nt.RESPONSIVE = zn;
Nt.INVALIDATE = Hn;
var Ut = function (t) {
    var o = t.className,
      n = t.customizeIcon,
      i = t.customizeIconProps,
      a = t.onMouseDown,
      u = t.onClick,
      l = t.children,
      c;
    return (
      typeof n == "function" ? (c = n(i)) : (c = n),
      r.createElement(
        "span",
        {
          className: o,
          onMouseDown: function (v) {
            v.preventDefault(), a && a(v);
          },
          style: { userSelect: "none", WebkitUserSelect: "none" },
          unselectable: "on",
          onClick: u,
          "aria-hidden": !0,
        },
        c !== void 0
          ? c
          : r.createElement(
              "span",
              {
                className: Be(
                  o.split(/\s+/).map(function (d) {
                    return "".concat(d, "-icon");
                  })
                ),
              },
              l
            )
      )
    );
  },
  to = function (t, o) {
    var n,
      i,
      a = t.prefixCls,
      u = t.id,
      l = t.inputElement,
      c = t.disabled,
      d = t.tabIndex,
      v = t.autoFocus,
      f = t.autoComplete,
      p = t.editable,
      g = t.activeDescendantId,
      S = t.value,
      R = t.maxLength,
      T = t.onKeyDown,
      O = t.onMouseDown,
      h = t.onChange,
      x = t.onPaste,
      _ = t.onCompositionStart,
      A = t.onCompositionEnd,
      ne = t.open,
      Z = t.attrs,
      z = l || r.createElement("input", null),
      ie = z,
      V = ie.ref,
      J = ie.props,
      de = J.onKeyDown,
      j = J.onChange,
      ve = J.onMouseDown,
      B = J.onCompositionStart,
      H = J.onCompositionEnd,
      ee = J.style;
    return (
      cr(!("maxLength" in z.props)),
      (z = r.cloneElement(
        z,
        me(
          me(
            me({ type: "search" }, J),
            {},
            {
              id: u,
              ref: sr(o, V),
              disabled: c,
              tabIndex: d,
              autoComplete: f || "off",
              autoFocus: v,
              className: Be(
                "".concat(a, "-selection-search-input"),
                (n = z) === null ||
                  n === void 0 ||
                  (i = n.props) === null ||
                  i === void 0
                  ? void 0
                  : i.className
              ),
              role: "combobox",
              "aria-expanded": ne,
              "aria-haspopup": "listbox",
              "aria-owns": "".concat(u, "_list"),
              "aria-autocomplete": "list",
              "aria-controls": "".concat(u, "_list"),
              "aria-activedescendant": g,
            },
            Z
          ),
          {},
          {
            value: p ? S : "",
            maxLength: R,
            readOnly: !p,
            unselectable: p ? null : "on",
            style: me(me({}, ee), {}, { opacity: p ? null : 0 }),
            onKeyDown: function (s) {
              T(s), de && de(s);
            },
            onMouseDown: function (s) {
              O(s), ve && ve(s);
            },
            onChange: function (s) {
              h(s), j && j(s);
            },
            onCompositionStart: function (s) {
              _(s), B && B(s);
            },
            onCompositionEnd: function (s) {
              A(s), H && H(s);
            },
            onPaste: x,
          }
        )
      )),
      z
    );
  },
  sn = r.forwardRef(to);
sn.displayName = "Input";
function Fn(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var no =
    typeof window < "u" && window.document && window.document.documentElement,
  ro = no;
function oo(e) {
  return e != null;
}
function pn(e) {
  return ["string", "number"].includes(_t(e));
}
function An(e) {
  var t = void 0;
  return (
    e &&
      (pn(e.title)
        ? (t = e.title.toString())
        : pn(e.label) && (t = e.label.toString())),
    t
  );
}
function ao(e, t) {
  ro ? r.useLayoutEffect(e, t) : r.useEffect(e, t);
}
function io(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var gn = function (t) {
    t.preventDefault(), t.stopPropagation();
  },
  lo = function (t) {
    var o = t.id,
      n = t.prefixCls,
      i = t.values,
      a = t.open,
      u = t.searchValue,
      l = t.autoClearSearchValue,
      c = t.inputRef,
      d = t.placeholder,
      v = t.disabled,
      f = t.mode,
      p = t.showSearch,
      g = t.autoFocus,
      S = t.autoComplete,
      R = t.activeDescendantId,
      T = t.tabIndex,
      O = t.removeIcon,
      h = t.maxTagCount,
      x = t.maxTagTextLength,
      _ = t.maxTagPlaceholder,
      A =
        _ === void 0
          ? function (X) {
              return "+ ".concat(X.length, " ...");
            }
          : _,
      ne = t.tagRender,
      Z = t.onToggleOpen,
      z = t.onRemove,
      ie = t.onInputChange,
      V = t.onInputPaste,
      J = t.onInputKeyDown,
      de = t.onInputMouseDown,
      j = t.onInputCompositionStart,
      ve = t.onInputCompositionEnd,
      B = r.useRef(null),
      H = r.useState(0),
      ee = fe(H, 2),
      te = ee[0],
      s = ee[1],
      w = r.useState(!1),
      y = fe(w, 2),
      E = y[0],
      m = y[1],
      W = "".concat(n, "-selection"),
      U = a || (f === "multiple" && l === !1) || f === "tags" ? u : "",
      N = f === "tags" || (f === "multiple" && l === !1) || (p && (a || E));
    ao(
      function () {
        s(B.current.scrollWidth);
      },
      [U]
    );
    function M(X, se, k, q, le) {
      return r.createElement(
        "span",
        {
          className: Be(
            "".concat(W, "-item"),
            Oe({}, "".concat(W, "-item-disabled"), k)
          ),
          title: An(X),
        },
        r.createElement(
          "span",
          { className: "".concat(W, "-item-content") },
          se
        ),
        q &&
          r.createElement(
            Ut,
            {
              className: "".concat(W, "-item-remove"),
              onMouseDown: gn,
              onClick: le,
              customizeIcon: O,
            },
            "×"
          )
      );
    }
    function P(X, se, k, q, le) {
      var he = function (oe) {
        gn(oe), Z(!a);
      };
      return r.createElement(
        "span",
        { onMouseDown: he },
        ne({ label: se, value: X, disabled: k, closable: q, onClose: le })
      );
    }
    function I(X) {
      var se = X.disabled,
        k = X.label,
        q = X.value,
        le = !v && !se,
        he = k;
      if (
        typeof x == "number" &&
        (typeof k == "string" || typeof k == "number")
      ) {
        var pe = String(he);
        pe.length > x && (he = "".concat(pe.slice(0, x), "..."));
      }
      var oe = function (He) {
        He && He.stopPropagation(), z(X);
      };
      return typeof ne == "function"
        ? P(q, he, se, le, oe)
        : M(X, he, se, le, oe);
    }
    function b(X) {
      var se = typeof A == "function" ? A(X) : A;
      return M({ title: se }, se, !1);
    }
    var F = r.createElement(
        "div",
        {
          className: "".concat(W, "-search"),
          style: { width: te },
          onFocus: function () {
            m(!0);
          },
          onBlur: function () {
            m(!1);
          },
        },
        r.createElement(sn, {
          ref: c,
          open: a,
          prefixCls: n,
          id: o,
          inputElement: null,
          disabled: v,
          autoFocus: g,
          autoComplete: S,
          editable: N,
          activeDescendantId: R,
          value: U,
          onKeyDown: J,
          onMouseDown: de,
          onChange: ie,
          onPaste: V,
          onCompositionStart: j,
          onCompositionEnd: ve,
          tabIndex: T,
          attrs: Kt(t, !0),
        }),
        r.createElement(
          "span",
          {
            ref: B,
            className: "".concat(W, "-search-mirror"),
            "aria-hidden": !0,
          },
          U,
          " "
        )
      ),
      re = r.createElement(Nt, {
        prefixCls: "".concat(W, "-overflow"),
        data: i,
        renderItem: I,
        renderRest: b,
        suffix: F,
        itemKey: io,
        maxCount: h,
      });
    return r.createElement(
      r.Fragment,
      null,
      re,
      !i.length &&
        !U &&
        r.createElement("span", { className: "".concat(W, "-placeholder") }, d)
    );
  },
  co = function (t) {
    var o = t.inputElement,
      n = t.prefixCls,
      i = t.id,
      a = t.inputRef,
      u = t.disabled,
      l = t.autoFocus,
      c = t.autoComplete,
      d = t.activeDescendantId,
      v = t.mode,
      f = t.open,
      p = t.values,
      g = t.placeholder,
      S = t.tabIndex,
      R = t.showSearch,
      T = t.searchValue,
      O = t.activeValue,
      h = t.maxLength,
      x = t.onInputKeyDown,
      _ = t.onInputMouseDown,
      A = t.onInputChange,
      ne = t.onInputPaste,
      Z = t.onInputCompositionStart,
      z = t.onInputCompositionEnd,
      ie = r.useState(!1),
      V = fe(ie, 2),
      J = V[0],
      de = V[1],
      j = v === "combobox",
      ve = j || R,
      B = p[0],
      H = T || "";
    j && O && !J && (H = O),
      r.useEffect(
        function () {
          j && de(!1);
        },
        [j, O]
      );
    var ee = v !== "combobox" && !f && !R ? !1 : !!H,
      te = An(B),
      s = function () {
        if (B) return null;
        var y = ee ? { visibility: "hidden" } : void 0;
        return r.createElement(
          "span",
          { className: "".concat(n, "-selection-placeholder"), style: y },
          g
        );
      };
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        "span",
        { className: "".concat(n, "-selection-search") },
        r.createElement(sn, {
          ref: a,
          prefixCls: n,
          id: i,
          open: f,
          inputElement: o,
          disabled: u,
          autoFocus: l,
          autoComplete: c,
          editable: ve,
          activeDescendantId: d,
          value: H,
          onKeyDown: x,
          onMouseDown: _,
          onChange: function (y) {
            de(!0), A(y);
          },
          onPaste: ne,
          onCompositionStart: Z,
          onCompositionEnd: z,
          tabIndex: S,
          attrs: Kt(t, !0),
          maxLength: j ? h : void 0,
        })
      ),
      !j &&
        B &&
        !ee &&
        r.createElement(
          "span",
          { className: "".concat(n, "-selection-item"), title: te },
          B.label
        ),
      s()
    );
  };
function so(e) {
  return ![
    ce.ESC,
    ce.SHIFT,
    ce.BACKSPACE,
    ce.TAB,
    ce.WIN_KEY,
    ce.ALT,
    ce.META,
    ce.WIN_KEY_RIGHT,
    ce.CTRL,
    ce.SEMICOLON,
    ce.EQUALS,
    ce.CAPS_LOCK,
    ce.CONTEXT_MENU,
    ce.F1,
    ce.F2,
    ce.F3,
    ce.F4,
    ce.F5,
    ce.F6,
    ce.F7,
    ce.F8,
    ce.F9,
    ce.F10,
    ce.F11,
    ce.F12,
  ].includes(e);
}
var uo = function (t, o) {
    var n = r.useRef(null),
      i = r.useRef(!1),
      a = t.prefixCls,
      u = t.open,
      l = t.mode,
      c = t.showSearch,
      d = t.tokenWithEnter,
      v = t.autoClearSearchValue,
      f = t.onSearch,
      p = t.onSearchSubmit,
      g = t.onToggleOpen,
      S = t.onInputKeyDown,
      R = t.domRef;
    r.useImperativeHandle(o, function () {
      return {
        focus: function () {
          n.current.focus();
        },
        blur: function () {
          n.current.blur();
        },
      };
    });
    var T = Nn(0),
      O = fe(T, 2),
      h = O[0],
      x = O[1],
      _ = function (ee) {
        var te = ee.which;
        (te === ce.UP || te === ce.DOWN) && ee.preventDefault(),
          S && S(ee),
          te === ce.ENTER &&
            l === "tags" &&
            !i.current &&
            !u &&
            (p == null || p(ee.target.value)),
          so(te) && g(!0);
      },
      A = function () {
        x(!0);
      },
      ne = r.useRef(null),
      Z = function (ee) {
        f(ee, !0, i.current) !== !1 && g(!0);
      },
      z = function () {
        i.current = !0;
      },
      ie = function (ee) {
        (i.current = !1), l !== "combobox" && Z(ee.target.value);
      },
      V = function (ee) {
        var te = ee.target.value;
        if (d && ne.current && /[\r\n]/.test(ne.current)) {
          var s = ne.current
            .replace(/[\r\n]+$/, "")
            .replace(/\r\n/g, " ")
            .replace(/[\r\n]/g, " ");
          te = te.replace(s, ne.current);
        }
        (ne.current = null), Z(te);
      },
      J = function (ee) {
        var te = ee.clipboardData,
          s = te.getData("text");
        ne.current = s;
      },
      de = function (ee) {
        var te = ee.target;
        if (te !== n.current) {
          var s = document.body.style.msTouchAction !== void 0;
          s
            ? setTimeout(function () {
                n.current.focus();
              })
            : n.current.focus();
        }
      },
      j = function (ee) {
        var te = h();
        ee.target !== n.current &&
          !te &&
          l !== "combobox" &&
          ee.preventDefault(),
          ((l !== "combobox" && (!c || !te)) || !u) &&
            (u && v !== !1 && f("", !0, !1), g());
      },
      ve = {
        inputRef: n,
        onInputKeyDown: _,
        onInputMouseDown: A,
        onInputChange: V,
        onInputPaste: J,
        onInputCompositionStart: z,
        onInputCompositionEnd: ie,
      },
      B =
        l === "multiple" || l === "tags"
          ? r.createElement(lo, Ke({}, t, ve))
          : r.createElement(co, Ke({}, t, ve));
    return r.createElement(
      "div",
      {
        ref: R,
        className: "".concat(a, "-selector"),
        onClick: de,
        onMouseDown: j,
      },
      B
    );
  },
  Vn = r.forwardRef(uo);
Vn.displayName = "Selector";
var fo = [
    "prefixCls",
    "disabled",
    "visible",
    "children",
    "popupElement",
    "containerWidth",
    "animation",
    "transitionName",
    "dropdownStyle",
    "dropdownClassName",
    "direction",
    "placement",
    "dropdownMatchSelectWidth",
    "dropdownRender",
    "dropdownAlign",
    "getPopupContainer",
    "empty",
    "getTriggerDOMNode",
    "onPopupVisibleChange",
    "onPopupMouseEnter",
  ],
  vo = function (t) {
    var o = t === !0 ? 0 : 1;
    return {
      bottomLeft: {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: { adjustX: o, adjustY: 1 },
      },
      bottomRight: {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: { adjustX: o, adjustY: 1 },
      },
      topLeft: {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: { adjustX: o, adjustY: 1 },
      },
      topRight: {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: { adjustX: o, adjustY: 1 },
      },
    };
  },
  mo = function (t, o) {
    var n = t.prefixCls;
    t.disabled;
    var i = t.visible,
      a = t.children,
      u = t.popupElement,
      l = t.containerWidth,
      c = t.animation,
      d = t.transitionName,
      v = t.dropdownStyle,
      f = t.dropdownClassName,
      p = t.direction,
      g = p === void 0 ? "ltr" : p,
      S = t.placement,
      R = t.dropdownMatchSelectWidth,
      T = t.dropdownRender,
      O = t.dropdownAlign,
      h = t.getPopupContainer,
      x = t.empty,
      _ = t.getTriggerDOMNode,
      A = t.onPopupVisibleChange,
      ne = t.onPopupMouseEnter,
      Z = lt(t, fo),
      z = "".concat(n, "-dropdown"),
      ie = u;
    T && (ie = T(u));
    var V = r.useMemo(
        function () {
          return vo(R);
        },
        [R]
      ),
      J = c ? "".concat(z, "-").concat(c) : d,
      de = r.useRef(null);
    r.useImperativeHandle(o, function () {
      return {
        getPopupElement: function () {
          return de.current;
        },
      };
    });
    var j = me({ minWidth: l }, v);
    return (
      typeof R == "number" ? (j.width = R) : R && (j.width = l),
      r.createElement(
        Nr,
        Ke({}, Z, {
          showAction: A ? ["click"] : [],
          hideAction: A ? ["click"] : [],
          popupPlacement: S || (g === "rtl" ? "bottomRight" : "bottomLeft"),
          builtinPlacements: V,
          prefixCls: z,
          popupTransitionName: J,
          popup: r.createElement("div", { ref: de, onMouseEnter: ne }, ie),
          popupAlign: O,
          popupVisible: i,
          getPopupContainer: h,
          popupClassName: Be(f, Oe({}, "".concat(z, "-empty"), x)),
          popupStyle: j,
          getTriggerDOMNode: _,
          onPopupVisibleChange: A,
        }),
        a
      )
    );
  },
  jn = r.forwardRef(mo);
jn.displayName = "SelectTrigger";
function hn(e, t) {
  var o = e.key,
    n;
  return (
    "value" in e && (n = e.value),
    o ?? (n !== void 0 ? n : "rc-index-key-".concat(t))
  );
}
function Wn(e, t) {
  var o = e || {},
    n = o.label,
    i = o.value,
    a = o.options;
  return {
    label: n || (t ? "children" : "label"),
    value: i || "value",
    options: a || "options",
  };
}
function po(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    o = t.fieldNames,
    n = t.childrenAsData,
    i = [],
    a = Wn(o, !1),
    u = a.label,
    l = a.value,
    c = a.options;
  function d(v, f) {
    v.forEach(function (p) {
      var g = p[u];
      if (f || !(c in p)) {
        var S = p[l];
        i.push({
          key: hn(p, i.length),
          groupOption: f,
          data: p,
          label: g,
          value: S,
        });
      } else {
        var R = g;
        R === void 0 && n && (R = p.label),
          i.push({ key: hn(p, i.length), group: !0, data: p, label: R }),
          d(p[c], !0);
      }
    });
  }
  return d(e, !1), i;
}
function rn(e) {
  var t = me({}, e);
  return (
    "props" in t ||
      Object.defineProperty(t, "props", {
        get: function () {
          return (
            ur(
              !1,
              "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."
            ),
            t
          );
        },
      }),
    t
  );
}
function go(e, t) {
  if (!t || !t.length) return null;
  var o = !1;
  function n(a, u) {
    var l = dr(u),
      c = l[0],
      d = l.slice(1);
    if (!c) return [a];
    var v = a.split(c);
    return (
      (o = o || v.length > 1),
      v
        .reduce(function (f, p) {
          return [].concat(it(f), it(n(p, d)));
        }, [])
        .filter(function (f) {
          return f;
        })
    );
  }
  var i = n(e, t);
  return o ? i : null;
}
var ho = [
    "id",
    "prefixCls",
    "className",
    "showSearch",
    "tagRender",
    "direction",
    "omitDomProps",
    "displayValues",
    "onDisplayValuesChange",
    "emptyOptions",
    "notFoundContent",
    "onClear",
    "mode",
    "disabled",
    "loading",
    "getInputElement",
    "getRawInputElement",
    "open",
    "defaultOpen",
    "onDropdownVisibleChange",
    "activeValue",
    "onActiveValueChange",
    "activeDescendantId",
    "searchValue",
    "autoClearSearchValue",
    "onSearch",
    "onSearchSplit",
    "tokenSeparators",
    "allowClear",
    "showArrow",
    "inputIcon",
    "clearIcon",
    "OptionList",
    "animation",
    "transitionName",
    "dropdownStyle",
    "dropdownClassName",
    "dropdownMatchSelectWidth",
    "dropdownRender",
    "dropdownAlign",
    "placement",
    "getPopupContainer",
    "showAction",
    "onFocus",
    "onBlur",
    "onKeyUp",
    "onKeyDown",
    "onMouseDown",
  ],
  bo = [
    "value",
    "onChange",
    "removeIcon",
    "placeholder",
    "autoFocus",
    "maxTagCount",
    "maxTagTextLength",
    "maxTagPlaceholder",
    "choiceTransitionName",
    "onInputKeyDown",
    "onPopupScroll",
    "tabIndex",
  ];
function on(e) {
  return e === "tags" || e === "multiple";
}
var So = r.forwardRef(function (e, t) {
  var o,
    n,
    i = e.id,
    a = e.prefixCls,
    u = e.className,
    l = e.showSearch,
    c = e.tagRender,
    d = e.direction,
    v = e.omitDomProps,
    f = e.displayValues,
    p = e.onDisplayValuesChange,
    g = e.emptyOptions,
    S = e.notFoundContent,
    R = S === void 0 ? "Not Found" : S,
    T = e.onClear,
    O = e.mode,
    h = e.disabled,
    x = e.loading,
    _ = e.getInputElement,
    A = e.getRawInputElement,
    ne = e.open,
    Z = e.defaultOpen,
    z = e.onDropdownVisibleChange,
    ie = e.activeValue,
    V = e.onActiveValueChange,
    J = e.activeDescendantId,
    de = e.searchValue,
    j = e.autoClearSearchValue,
    ve = e.onSearch,
    B = e.onSearchSplit,
    H = e.tokenSeparators,
    ee = e.allowClear,
    te = e.showArrow,
    s = e.inputIcon,
    w = e.clearIcon,
    y = e.OptionList,
    E = e.animation,
    m = e.transitionName,
    W = e.dropdownStyle,
    U = e.dropdownClassName,
    N = e.dropdownMatchSelectWidth,
    M = e.dropdownRender,
    P = e.dropdownAlign,
    I = e.placement,
    b = e.getPopupContainer,
    F = e.showAction,
    re = F === void 0 ? [] : F,
    X = e.onFocus,
    se = e.onBlur,
    k = e.onKeyUp,
    q = e.onKeyDown,
    le = e.onMouseDown,
    he = lt(e, ho),
    pe = on(O),
    oe = (l !== void 0 ? l : pe) || O === "combobox",
    Le = me({}, he);
  bo.forEach(function (ae) {
    delete Le[ae];
  }),
    v == null ||
      v.forEach(function (ae) {
        delete Le[ae];
      });
  var He = r.useState(!1),
    be = fe(He, 2),
    ye = be[0],
    Ye = be[1];
  r.useEffect(function () {
    Ye(Lr());
  }, []);
  var Se = r.useRef(null),
    De = r.useRef(null),
    $e = r.useRef(null),
    we = r.useRef(null),
    Ie = r.useRef(null),
    Ge = Kr(),
    Ve = fe(Ge, 3),
    L = Ve[0],
    G = Ve[1],
    Me = Ve[2];
  r.useImperativeHandle(t, function () {
    var ae, K;
    return {
      focus: (ae = we.current) === null || ae === void 0 ? void 0 : ae.focus,
      blur: (K = we.current) === null || K === void 0 ? void 0 : K.blur,
      scrollTo: function (Je) {
        var ze;
        return (ze = Ie.current) === null || ze === void 0
          ? void 0
          : ze.scrollTo(Je);
      },
    };
  });
  var Ee = r.useMemo(
      function () {
        var ae;
        if (O !== "combobox") return de;
        var K = (ae = f[0]) === null || ae === void 0 ? void 0 : ae.value;
        return typeof K == "string" || typeof K == "number" ? String(K) : "";
      },
      [de, O, f]
    ),
    Re = (O === "combobox" && typeof _ == "function" && _()) || null,
    Te = typeof A == "function" && A(),
    je = fr(
      De,
      Te == null || (o = Te.props) === null || o === void 0 ? void 0 : o.ref
    ),
    nt = Wt(void 0, { defaultValue: Z, value: ne }),
    ge = fe(nt, 2),
    Ze = ge[0],
    Ue = ge[1],
    xe = Ze,
    dt = !R && g;
  (h || (dt && xe && O === "combobox")) && (xe = !1);
  var qe = dt ? !1 : xe,
    C = r.useCallback(
      function (ae) {
        var K = ae !== void 0 ? ae : !xe;
        h || (Ue(K), xe !== K && (z == null || z(K)));
      },
      [h, xe, Ue, z]
    ),
    D = r.useMemo(
      function () {
        return (H || []).some(function (ae) {
          return [
            `
`,
            `\r
`,
          ].includes(ae);
        });
      },
      [H]
    ),
    $ = function (K, Ne, Je) {
      var ze = !0,
        tt = K;
      V == null || V(null);
      var st = Je ? null : go(K, H);
      return (
        O !== "combobox" &&
          st &&
          ((tt = ""), B == null || B(st), C(!1), (ze = !1)),
        ve && Ee !== tt && ve(tt, { source: Ne ? "typing" : "effect" }),
        ze
      );
    },
    Y = function (K) {
      !K || !K.trim() || ve(K, { source: "submit" });
    };
  r.useEffect(
    function () {
      !xe && !pe && O !== "combobox" && $("", !1, !1);
    },
    [xe]
  ),
    r.useEffect(
      function () {
        Ze && h && Ue(!1), h && G(!1);
      },
      [h]
    );
  var ue = Nn(),
    Ce = fe(ue, 2),
    Fe = Ce[0],
    We = Ce[1],
    Qe = function (K) {
      var Ne = Fe(),
        Je = K.which;
      if (
        (Je === ce.ENTER &&
          (O !== "combobox" && K.preventDefault(), xe || C(!0)),
        We(!!Ee),
        Je === ce.BACKSPACE && !Ne && pe && !Ee && f.length)
      ) {
        for (var ze = it(f), tt = null, st = ze.length - 1; st >= 0; st -= 1) {
          var Dt = ze[st];
          if (!Dt.disabled) {
            ze.splice(st, 1), (tt = Dt);
            break;
          }
        }
        tt && p(ze, { type: "remove", values: [tt] });
      }
      for (
        var bt = arguments.length, Et = new Array(bt > 1 ? bt - 1 : 0), St = 1;
        St < bt;
        St++
      )
        Et[St - 1] = arguments[St];
      if (xe && Ie.current) {
        var mn;
        (mn = Ie.current).onKeyDown.apply(mn, [K].concat(Et));
      }
      q == null || q.apply(void 0, [K].concat(Et));
    },
    Ae = function (K) {
      for (
        var Ne = arguments.length, Je = new Array(Ne > 1 ? Ne - 1 : 0), ze = 1;
        ze < Ne;
        ze++
      )
        Je[ze - 1] = arguments[ze];
      if (xe && Ie.current) {
        var tt;
        (tt = Ie.current).onKeyUp.apply(tt, [K].concat(Je));
      }
      k == null || k.apply(void 0, [K].concat(Je));
    },
    rt = function (K) {
      var Ne = f.filter(function (Je) {
        return Je !== K;
      });
      p(Ne, { type: "remove", values: [K] });
    },
    et = r.useRef(!1),
    mt = function () {
      G(!0),
        h ||
          (X && !et.current && X.apply(void 0, arguments),
          re.includes("focus") && C(!0)),
        (et.current = !0);
    },
    Ct = function () {
      G(!1, function () {
        (et.current = !1), C(!1);
      }),
        !h &&
          (Ee &&
            (O === "tags"
              ? ve(Ee, { source: "submit" })
              : O === "multiple" && ve("", { source: "blur" })),
          se && se.apply(void 0, arguments));
    },
    ot = [];
  r.useEffect(function () {
    return function () {
      ot.forEach(function (ae) {
        return clearTimeout(ae);
      }),
        ot.splice(0, ot.length);
    };
  }, []);
  var ct = function (K) {
      var Ne,
        Je = K.target,
        ze =
          (Ne = $e.current) === null || Ne === void 0
            ? void 0
            : Ne.getPopupElement();
      if (ze && ze.contains(Je)) {
        var tt = setTimeout(function () {
          var Et = ot.indexOf(tt);
          if (
            (Et !== -1 && ot.splice(Et, 1),
            Me(),
            !ye && !ze.contains(document.activeElement))
          ) {
            var St;
            (St = we.current) === null || St === void 0 || St.focus();
          }
        });
        ot.push(tt);
      }
      for (
        var st = arguments.length, Dt = new Array(st > 1 ? st - 1 : 0), bt = 1;
        bt < st;
        bt++
      )
        Dt[bt - 1] = arguments[bt];
      le == null || le.apply(void 0, [K].concat(Dt));
    },
    pt = r.useState(null),
    ke = fe(pt, 2),
    zt = ke[0],
    wt = ke[1],
    qt = r.useState({}),
    Ht = fe(qt, 2),
    Ft = Ht[1];
  function Qt() {
    Ft({});
  }
  Tt(
    function () {
      if (qe) {
        var ae,
          K = Math.ceil(
            (ae = Se.current) === null || ae === void 0
              ? void 0
              : ae.offsetWidth
          );
        zt !== K && !Number.isNaN(K) && wt(K);
      }
    },
    [qe]
  );
  var Q;
  Te &&
    (Q = function (K) {
      C(K);
    }),
    Br(
      function () {
        var ae;
        return [
          Se.current,
          (ae = $e.current) === null || ae === void 0
            ? void 0
            : ae.getPopupElement(),
        ];
      },
      qe,
      C,
      !!Te
    );
  var Pe = r.useMemo(
      function () {
        return me(
          me({}, e),
          {},
          {
            notFoundContent: R,
            open: xe,
            triggerOpen: qe,
            id: i,
            showSearch: oe,
            multiple: pe,
            toggleOpen: C,
          }
        );
      },
      [e, R, qe, xe, i, oe, pe, C]
    ),
    _e = te !== void 0 ? te : x || (!pe && O !== "combobox"),
    at;
  _e &&
    (at = r.createElement(Ut, {
      className: Be(
        "".concat(a, "-arrow"),
        Oe({}, "".concat(a, "-arrow-loading"), x)
      ),
      customizeIcon: s,
      customizeIconProps: {
        loading: x,
        searchValue: Ee,
        open: xe,
        focused: L,
        showSearch: oe,
      },
    }));
  var ft,
    vt = function () {
      var K;
      T == null || T(),
        (K = we.current) === null || K === void 0 || K.focus(),
        p([], { type: "clear", values: f }),
        $("", !1, !1);
    };
  !h &&
    ee &&
    (f.length || Ee) &&
    !(O === "combobox" && Ee === "") &&
    (ft = r.createElement(
      Ut,
      { className: "".concat(a, "-clear"), onMouseDown: vt, customizeIcon: w },
      "×"
    ));
  var Ot = r.createElement(y, { ref: Ie }),
    yt = Be(
      a,
      u,
      ((n = {}),
      Oe(n, "".concat(a, "-focused"), L),
      Oe(n, "".concat(a, "-multiple"), pe),
      Oe(n, "".concat(a, "-single"), !pe),
      Oe(n, "".concat(a, "-allow-clear"), ee),
      Oe(n, "".concat(a, "-show-arrow"), _e),
      Oe(n, "".concat(a, "-disabled"), h),
      Oe(n, "".concat(a, "-loading"), x),
      Oe(n, "".concat(a, "-open"), xe),
      Oe(n, "".concat(a, "-customize-input"), Re),
      Oe(n, "".concat(a, "-show-search"), oe),
      n)
    ),
    At = r.createElement(
      jn,
      {
        ref: $e,
        disabled: h,
        prefixCls: a,
        visible: qe,
        popupElement: Ot,
        containerWidth: zt,
        animation: E,
        transitionName: m,
        dropdownStyle: W,
        dropdownClassName: U,
        direction: d,
        dropdownMatchSelectWidth: N,
        dropdownRender: M,
        dropdownAlign: P,
        placement: I,
        getPopupContainer: b,
        empty: g,
        getTriggerDOMNode: function () {
          return De.current;
        },
        onPopupVisibleChange: Q,
        onPopupMouseEnter: Qt,
      },
      Te
        ? r.cloneElement(Te, { ref: je })
        : r.createElement(
            Vn,
            Ke({}, e, {
              domRef: De,
              prefixCls: a,
              inputElement: Re,
              ref: we,
              id: i,
              showSearch: oe,
              autoClearSearchValue: j,
              mode: O,
              activeDescendantId: J,
              tagRender: c,
              values: f,
              open: xe,
              onToggleOpen: C,
              activeValue: ie,
              searchValue: Ee,
              onSearch: $,
              onSearchSubmit: Y,
              onRemove: rt,
              tokenWithEnter: D,
            })
          )
    ),
    gt;
  return (
    Te
      ? (gt = At)
      : (gt = r.createElement(
          "div",
          Ke({ className: yt }, Le, {
            ref: Se,
            onMouseDown: ct,
            onKeyDown: Qe,
            onKeyUp: Ae,
            onFocus: mt,
            onBlur: Ct,
          }),
          L &&
            !xe &&
            r.createElement(
              "span",
              {
                style: {
                  width: 0,
                  height: 0,
                  position: "absolute",
                  overflow: "hidden",
                  opacity: 0,
                },
                "aria-live": "polite",
              },
              "".concat(
                f
                  .map(function (ae) {
                    var K = ae.label,
                      Ne = ae.value;
                    return ["number", "string"].includes(_t(K)) ? K : Ne;
                  })
                  .join(", ")
              )
            ),
          At,
          at,
          ft
        )),
    r.createElement(_n.Provider, { value: Pe }, gt)
  );
});
const wo = function (e, t) {
  var o = r.useRef({ values: new Map(), options: new Map() }),
    n = r.useMemo(
      function () {
        var a = o.current,
          u = a.values,
          l = a.options,
          c = e.map(function (f) {
            if (f.label === void 0) {
              var p;
              return me(
                me({}, f),
                {},
                {
                  label:
                    (p = u.get(f.value)) === null || p === void 0
                      ? void 0
                      : p.label,
                }
              );
            }
            return f;
          }),
          d = new Map(),
          v = new Map();
        return (
          c.forEach(function (f) {
            d.set(f.value, f), v.set(f.value, t.get(f.value) || l.get(f.value));
          }),
          (o.current.values = d),
          (o.current.options = v),
          c
        );
      },
      [e, t]
    ),
    i = r.useCallback(
      function (a) {
        return t.get(a) || o.current.options.get(a);
      },
      [t]
    );
  return [n, i];
};
function Jt(e, t) {
  return Fn(e).join("").toUpperCase().includes(t);
}
const yo = function (e, t, o, n, i) {
  return r.useMemo(
    function () {
      if (!o || n === !1) return e;
      var a = t.options,
        u = t.label,
        l = t.value,
        c = [],
        d = typeof n == "function",
        v = o.toUpperCase(),
        f = d
          ? n
          : function (g, S) {
              return i
                ? Jt(S[i], v)
                : S[a]
                ? Jt(S[u !== "children" ? u : "label"], v)
                : Jt(S[l], v);
            },
        p = d
          ? function (g) {
              return rn(g);
            }
          : function (g) {
              return g;
            };
      return (
        e.forEach(function (g) {
          if (g[a]) {
            var S = f(o, p(g));
            if (S) c.push(g);
            else {
              var R = g[a].filter(function (T) {
                return f(o, p(T));
              });
              R.length && c.push(me(me({}, g), {}, Oe({}, a, R)));
            }
            return;
          }
          f(o, p(g)) && c.push(g);
        }),
        c
      );
    },
    [e, n, i, o, t]
  );
};
var bn = 0,
  Co = vr();
function Eo() {
  var e;
  return Co ? ((e = bn), (bn += 1)) : (e = "TEST_OR_SSR"), e;
}
function Io(e) {
  var t = r.useState(),
    o = fe(t, 2),
    n = o[0],
    i = o[1];
  return (
    r.useEffect(function () {
      i("rc_select_".concat(Eo()));
    }, []),
    e || n
  );
}
var xo = ["children", "value"],
  Mo = ["children"];
function Ro(e) {
  var t = e,
    o = t.key,
    n = t.props,
    i = n.children,
    a = n.value,
    u = lt(n, xo);
  return me({ key: o, value: a !== void 0 ? a : o, children: i }, u);
}
function Kn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return mr(e)
    .map(function (o, n) {
      if (!r.isValidElement(o) || !o.type) return null;
      var i = o,
        a = i.type.isSelectOptGroup,
        u = i.key,
        l = i.props,
        c = l.children,
        d = lt(l, Mo);
      return t || !a
        ? Ro(o)
        : me(
            me(
              {
                key: "__RC_SELECT_GRP__".concat(u === null ? n : u, "__"),
                label: u,
              },
              d
            ),
            {},
            { options: Kn(c) }
          );
    })
    .filter(function (o) {
      return o;
    });
}
function Oo(e, t, o, n, i) {
  return r.useMemo(
    function () {
      var a = e,
        u = !e;
      u && (a = Kn(t));
      var l = new Map(),
        c = new Map(),
        d = function (p, g, S) {
          S && typeof S == "string" && p.set(g[S], g);
        };
      function v(f) {
        for (
          var p =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            g = 0;
          g < f.length;
          g += 1
        ) {
          var S = f[g];
          !S[o.options] || p
            ? (l.set(S[o.value], S), d(c, S, o.label), d(c, S, n), d(c, S, i))
            : v(S[o.options], !0);
        }
      }
      return v(a), { options: a, valueOptions: l, labelOptions: c };
    },
    [e, t, o, n, i]
  );
}
function Sn(e) {
  var t = r.useRef();
  t.current = e;
  var o = r.useCallback(function () {
    return t.current.apply(t, arguments);
  }, []);
  return o;
}
var un = function () {
  return null;
};
un.isSelectOptGroup = !0;
var dn = function () {
  return null;
};
dn.isSelectOption = !0;
var Bn = r.forwardRef(function (e, t) {
  var o = e.height,
    n = e.offset,
    i = e.children,
    a = e.prefixCls,
    u = e.onInnerResize,
    l = e.innerProps,
    c = {},
    d = { display: "flex", flexDirection: "column" };
  return (
    n !== void 0 &&
      ((c = { height: o, position: "relative", overflow: "hidden" }),
      (d = me(
        me({}, d),
        {},
        {
          transform: "translateY(".concat(n, "px)"),
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
        }
      ))),
    r.createElement(
      "div",
      { style: c },
      r.createElement(
        ln,
        {
          onResize: function (f) {
            var p = f.offsetHeight;
            p && u && u();
          },
        },
        r.createElement(
          "div",
          Ke(
            {
              style: d,
              className: Be(Oe({}, "".concat(a, "-holder-inner"), a)),
              ref: t,
            },
            l
          ),
          i
        )
      )
    )
  );
});
Bn.displayName = "Filler";
var Do = 20;
function wn(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var Po = (function (e) {
  pr(o, e);
  var t = gr(o);
  function o() {
    var n;
    xn(this, o);
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    return (
      (n = t.call.apply(t, [this].concat(a))),
      (n.moveRaf = null),
      (n.scrollbarRef = r.createRef()),
      (n.thumbRef = r.createRef()),
      (n.visibleTimeout = null),
      (n.state = { dragging: !1, pageY: null, startTop: null, visible: !1 }),
      (n.delayHidden = function () {
        clearTimeout(n.visibleTimeout),
          n.setState({ visible: !0 }),
          (n.visibleTimeout = setTimeout(function () {
            n.setState({ visible: !1 });
          }, 2e3));
      }),
      (n.onScrollbarTouchStart = function (l) {
        l.preventDefault();
      }),
      (n.onContainerMouseDown = function (l) {
        l.stopPropagation(), l.preventDefault();
      }),
      (n.patchEvents = function () {
        window.addEventListener("mousemove", n.onMouseMove),
          window.addEventListener("mouseup", n.onMouseUp),
          n.thumbRef.current.addEventListener("touchmove", n.onMouseMove),
          n.thumbRef.current.addEventListener("touchend", n.onMouseUp);
      }),
      (n.removeEvents = function () {
        var l;
        window.removeEventListener("mousemove", n.onMouseMove),
          window.removeEventListener("mouseup", n.onMouseUp),
          (l = n.scrollbarRef.current) === null ||
            l === void 0 ||
            l.removeEventListener("touchstart", n.onScrollbarTouchStart),
          n.thumbRef.current &&
            (n.thumbRef.current.removeEventListener(
              "touchstart",
              n.onMouseDown
            ),
            n.thumbRef.current.removeEventListener("touchmove", n.onMouseMove),
            n.thumbRef.current.removeEventListener("touchend", n.onMouseUp)),
          ut.cancel(n.moveRaf);
      }),
      (n.onMouseDown = function (l) {
        var c = n.props.onStartMove;
        n.setState({ dragging: !0, pageY: wn(l), startTop: n.getTop() }),
          c(),
          n.patchEvents(),
          l.stopPropagation(),
          l.preventDefault();
      }),
      (n.onMouseMove = function (l) {
        var c = n.state,
          d = c.dragging,
          v = c.pageY,
          f = c.startTop,
          p = n.props.onScroll;
        if ((ut.cancel(n.moveRaf), d)) {
          var g = wn(l) - v,
            S = f + g,
            R = n.getEnableScrollRange(),
            T = n.getEnableHeightRange(),
            O = T ? S / T : 0,
            h = Math.ceil(O * R);
          n.moveRaf = ut(function () {
            p(h);
          });
        }
      }),
      (n.onMouseUp = function () {
        var l = n.props.onStopMove;
        n.setState({ dragging: !1 }), l(), n.removeEvents();
      }),
      (n.getSpinHeight = function () {
        var l = n.props,
          c = l.height,
          d = l.count,
          v = (c / d) * 10;
        return (v = Math.max(v, Do)), (v = Math.min(v, c / 2)), Math.floor(v);
      }),
      (n.getEnableScrollRange = function () {
        var l = n.props,
          c = l.scrollHeight,
          d = l.height;
        return c - d || 0;
      }),
      (n.getEnableHeightRange = function () {
        var l = n.props.height,
          c = n.getSpinHeight();
        return l - c || 0;
      }),
      (n.getTop = function () {
        var l = n.props.scrollTop,
          c = n.getEnableScrollRange(),
          d = n.getEnableHeightRange();
        if (l === 0 || c === 0) return 0;
        var v = l / c;
        return v * d;
      }),
      (n.showScroll = function () {
        var l = n.props,
          c = l.height,
          d = l.scrollHeight;
        return d > c;
      }),
      n
    );
  }
  return (
    Mn(o, [
      {
        key: "componentDidMount",
        value: function () {
          this.scrollbarRef.current.addEventListener(
            "touchstart",
            this.onScrollbarTouchStart
          ),
            this.thumbRef.current.addEventListener(
              "touchstart",
              this.onMouseDown
            );
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          i.scrollTop !== this.props.scrollTop && this.delayHidden();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.removeEvents(), clearTimeout(this.visibleTimeout);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.state,
            a = i.dragging,
            u = i.visible,
            l = this.props.prefixCls,
            c = this.getSpinHeight(),
            d = this.getTop(),
            v = this.showScroll(),
            f = v && u;
          return r.createElement(
            "div",
            {
              ref: this.scrollbarRef,
              className: Be(
                "".concat(l, "-scrollbar"),
                Oe({}, "".concat(l, "-scrollbar-show"), v)
              ),
              style: {
                width: 8,
                top: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: f ? null : "none",
              },
              onMouseDown: this.onContainerMouseDown,
              onMouseMove: this.delayHidden,
            },
            r.createElement("div", {
              ref: this.thumbRef,
              className: Be(
                "".concat(l, "-scrollbar-thumb"),
                Oe({}, "".concat(l, "-scrollbar-thumb-moving"), a)
              ),
              style: {
                width: "100%",
                height: c,
                top: d,
                left: 0,
                position: "absolute",
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: 99,
                cursor: "pointer",
                userSelect: "none",
              },
              onMouseDown: this.onMouseDown,
            })
          );
        },
      },
    ]),
    o
  );
})(r.Component);
function $o(e) {
  var t = e.children,
    o = e.setRef,
    n = r.useCallback(function (i) {
      o(i);
    }, []);
  return r.cloneElement(t, { ref: n });
}
function To(e, t, o, n, i, a) {
  var u = a.getKey;
  return e.slice(t, o + 1).map(function (l, c) {
    var d = t + c,
      v = i(l, d, {}),
      f = u(l);
    return r.createElement(
      $o,
      {
        key: f,
        setRef: function (g) {
          return n(l, g);
        },
      },
      v
    );
  });
}
var _o = (function () {
  function e() {
    xn(this, e), (this.maps = void 0), (this.maps = Object.create(null));
  }
  return (
    Mn(e, [
      {
        key: "set",
        value: function (o, n) {
          this.maps[o] = n;
        },
      },
      {
        key: "get",
        value: function (o) {
          return this.maps[o];
        },
      },
    ]),
    e
  );
})();
function No(e, t, o) {
  var n = r.useState(0),
    i = fe(n, 2),
    a = i[0],
    u = i[1],
    l = r.useRef(new Map()),
    c = r.useRef(new _o()),
    d = r.useRef();
  function v() {
    ut.cancel(d.current);
  }
  function f() {
    v(),
      (d.current = ut(function () {
        l.current.forEach(function (g, S) {
          if (g && g.offsetParent) {
            var R = hr(g),
              T = R.offsetHeight;
            c.current.get(S) !== T && c.current.set(S, R.offsetHeight);
          }
        }),
          u(function (g) {
            return g + 1;
          });
      }));
  }
  function p(g, S) {
    var R = e(g),
      T = l.current.get(R);
    S ? (l.current.set(R, S), f()) : l.current.delete(R),
      !T != !S && (S ? t == null || t(g) : o == null || o(g));
  }
  return (
    r.useEffect(function () {
      return v;
    }, []),
    [p, f, c.current, a]
  );
}
function Lo(e, t, o, n, i, a, u, l) {
  var c = r.useRef();
  return function (d) {
    if (d == null) {
      l();
      return;
    }
    if ((ut.cancel(c.current), typeof d == "number")) u(d);
    else if (d && _t(d) === "object") {
      var v,
        f = d.align;
      "index" in d
        ? (v = d.index)
        : (v = t.findIndex(function (R) {
            return i(R) === d.key;
          }));
      var p = d.offset,
        g = p === void 0 ? 0 : p,
        S = function R(T, O) {
          if (!(T < 0 || !e.current)) {
            var h = e.current.clientHeight,
              x = !1,
              _ = O;
            if (h) {
              for (
                var A = O || f,
                  ne = 0,
                  Z = 0,
                  z = 0,
                  ie = Math.min(t.length, v),
                  V = 0;
                V <= ie;
                V += 1
              ) {
                var J = i(t[V]);
                Z = ne;
                var de = o.get(J);
                (z = Z + (de === void 0 ? n : de)),
                  (ne = z),
                  V === v && de === void 0 && (x = !0);
              }
              var j = null;
              switch (A) {
                case "top":
                  j = Z - g;
                  break;
                case "bottom":
                  j = z - h + g;
                  break;
                default: {
                  var ve = e.current.scrollTop,
                    B = ve + h;
                  Z < ve ? (_ = "top") : z > B && (_ = "bottom");
                }
              }
              j !== null && j !== e.current.scrollTop && u(j);
            }
            c.current = ut(function () {
              x && a(), R(T - 1, _);
            }, 2);
          }
        };
      S(3);
    }
  };
}
function zo(e, t, o) {
  var n = e.length,
    i = t.length,
    a,
    u;
  if (n === 0 && i === 0) return null;
  n < i ? ((a = e), (u = t)) : ((a = t), (u = e));
  var l = { __EMPTY_ITEM__: !0 };
  function c(S) {
    return S !== void 0 ? o(S) : l;
  }
  for (var d = null, v = Math.abs(n - i) !== 1, f = 0; f < u.length; f += 1) {
    var p = c(a[f]),
      g = c(u[f]);
    if (p !== g) {
      (d = f), (v = v || p !== c(u[f + 1]));
      break;
    }
  }
  return d === null ? null : { index: d, multiple: v };
}
function Ho(e, t, o) {
  var n = r.useState(e),
    i = fe(n, 2),
    a = i[0],
    u = i[1],
    l = r.useState(null),
    c = fe(l, 2),
    d = c[0],
    v = c[1];
  return (
    r.useEffect(
      function () {
        var f = zo(a || [], e || [], t);
        (f == null ? void 0 : f.index) !== void 0 &&
          (o == null || o(f.index), v(e[f.index])),
          u(e);
      },
      [e]
    ),
    [d]
  );
}
var Fo =
  (typeof navigator > "u" ? "undefined" : _t(navigator)) === "object" &&
  /Firefox/i.test(navigator.userAgent);
const Un = function (e, t) {
  var o = r.useRef(!1),
    n = r.useRef(null);
  function i() {
    clearTimeout(n.current),
      (o.current = !0),
      (n.current = setTimeout(function () {
        o.current = !1;
      }, 50));
  }
  var a = r.useRef({ top: e, bottom: t });
  return (
    (a.current.top = e),
    (a.current.bottom = t),
    function (u) {
      var l =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        c = (u < 0 && a.current.top) || (u > 0 && a.current.bottom);
      return (
        l && c
          ? (clearTimeout(n.current), (o.current = !1))
          : (!c || o.current) && i(),
        !o.current && c
      );
    }
  );
};
function Ao(e, t, o, n) {
  var i = r.useRef(0),
    a = r.useRef(null),
    u = r.useRef(null),
    l = r.useRef(!1),
    c = Un(t, o);
  function d(f) {
    if (e) {
      ut.cancel(a.current);
      var p = f.deltaY;
      (i.current += p),
        (u.current = p),
        !c(p) &&
          (Fo || f.preventDefault(),
          (a.current = ut(function () {
            var g = l.current ? 10 : 1;
            n(i.current * g), (i.current = 0);
          })));
    }
  }
  function v(f) {
    e && (l.current = f.detail === u.current);
  }
  return [d, v];
}
var Vo = 14 / 15;
function jo(e, t, o) {
  var n = r.useRef(!1),
    i = r.useRef(0),
    a = r.useRef(null),
    u = r.useRef(null),
    l,
    c = function (p) {
      if (n.current) {
        var g = Math.ceil(p.touches[0].pageY),
          S = i.current - g;
        (i.current = g),
          o(S) && p.preventDefault(),
          clearInterval(u.current),
          (u.current = setInterval(function () {
            (S *= Vo),
              (!o(S, !0) || Math.abs(S) <= 0.1) && clearInterval(u.current);
          }, 16));
      }
    },
    d = function () {
      (n.current = !1), l();
    },
    v = function (p) {
      l(),
        p.touches.length === 1 &&
          !n.current &&
          ((n.current = !0),
          (i.current = Math.ceil(p.touches[0].pageY)),
          (a.current = p.target),
          a.current.addEventListener("touchmove", c),
          a.current.addEventListener("touchend", d));
    };
  (l = function () {
    a.current &&
      (a.current.removeEventListener("touchmove", c),
      a.current.removeEventListener("touchend", d));
  }),
    Tt(
      function () {
        return (
          e && t.current.addEventListener("touchstart", v),
          function () {
            var f;
            (f = t.current) === null ||
              f === void 0 ||
              f.removeEventListener("touchstart", v),
              l(),
              clearInterval(u.current);
          }
        );
      },
      [e]
    );
}
var Wo = [
    "prefixCls",
    "className",
    "height",
    "itemHeight",
    "fullHeight",
    "style",
    "data",
    "children",
    "itemKey",
    "virtual",
    "component",
    "onScroll",
    "onVisibleChange",
    "innerProps",
  ],
  Ko = [],
  Bo = { overflowY: "auto", overflowAnchor: "none" };
function Uo(e, t) {
  var o = e.prefixCls,
    n = o === void 0 ? "rc-virtual-list" : o,
    i = e.className,
    a = e.height,
    u = e.itemHeight,
    l = e.fullHeight,
    c = l === void 0 ? !0 : l,
    d = e.style,
    v = e.data,
    f = e.children,
    p = e.itemKey,
    g = e.virtual,
    S = e.component,
    R = S === void 0 ? "div" : S,
    T = e.onScroll,
    O = e.onVisibleChange,
    h = e.innerProps,
    x = lt(e, Wo),
    _ = !!(g !== !1 && a && u),
    A = _ && v && u * v.length > a,
    ne = r.useState(0),
    Z = fe(ne, 2),
    z = Z[0],
    ie = Z[1],
    V = r.useState(!1),
    J = fe(V, 2),
    de = J[0],
    j = J[1],
    ve = Be(n, i),
    B = v || Ko,
    H = r.useRef(),
    ee = r.useRef(),
    te = r.useRef(),
    s = r.useCallback(
      function (L) {
        return typeof p == "function" ? p(L) : L == null ? void 0 : L[p];
      },
      [p]
    ),
    w = { getKey: s };
  function y(L) {
    ie(function (G) {
      var Me;
      typeof L == "function" ? (Me = L(G)) : (Me = L);
      var Ee = oe(Me);
      return (H.current.scrollTop = Ee), Ee;
    });
  }
  var E = r.useRef({ start: 0, end: B.length }),
    m = r.useRef(),
    W = Ho(B, s),
    U = fe(W, 1),
    N = U[0];
  m.current = N;
  var M = No(s, null, null),
    P = fe(M, 4),
    I = P[0],
    b = P[1],
    F = P[2],
    re = P[3],
    X = r.useMemo(
      function () {
        if (!_)
          return {
            scrollHeight: void 0,
            start: 0,
            end: B.length - 1,
            offset: void 0,
          };
        if (!A) {
          var L;
          return {
            scrollHeight:
              ((L = ee.current) === null || L === void 0
                ? void 0
                : L.offsetHeight) || 0,
            start: 0,
            end: B.length - 1,
            offset: void 0,
          };
        }
        for (var G = 0, Me, Ee, Re, Te = B.length, je = 0; je < Te; je += 1) {
          var nt = B[je],
            ge = s(nt),
            Ze = F.get(ge),
            Ue = G + (Ze === void 0 ? u : Ze);
          Ue >= z && Me === void 0 && ((Me = je), (Ee = G)),
            Ue > z + a && Re === void 0 && (Re = je),
            (G = Ue);
        }
        return (
          Me === void 0 && ((Me = 0), (Ee = 0), (Re = Math.ceil(a / u))),
          Re === void 0 && (Re = B.length - 1),
          (Re = Math.min(Re + 1, B.length)),
          { scrollHeight: G, start: Me, end: Re, offset: Ee }
        );
      },
      [A, _, z, B, re, a]
    ),
    se = X.scrollHeight,
    k = X.start,
    q = X.end,
    le = X.offset;
  (E.current.start = k), (E.current.end = q);
  var he = se - a,
    pe = r.useRef(he);
  pe.current = he;
  function oe(L) {
    var G = L;
    return (
      Number.isNaN(pe.current) || (G = Math.min(G, pe.current)),
      (G = Math.max(G, 0)),
      G
    );
  }
  var Le = z <= 0,
    He = z >= he,
    be = Un(Le, He);
  function ye(L) {
    var G = L;
    y(G);
  }
  function Ye(L) {
    var G = L.currentTarget.scrollTop;
    G !== z && y(G), T == null || T(L);
  }
  var Se = Ao(_, Le, He, function (L) {
      y(function (G) {
        var Me = G + L;
        return Me;
      });
    }),
    De = fe(Se, 2),
    $e = De[0],
    we = De[1];
  jo(_, H, function (L, G) {
    return be(L, G)
      ? !1
      : ($e({ preventDefault: function () {}, deltaY: L }), !0);
  }),
    Tt(
      function () {
        function L(G) {
          _ && G.preventDefault();
        }
        return (
          H.current.addEventListener("wheel", $e),
          H.current.addEventListener("DOMMouseScroll", we),
          H.current.addEventListener("MozMousePixelScroll", L),
          function () {
            H.current &&
              (H.current.removeEventListener("wheel", $e),
              H.current.removeEventListener("DOMMouseScroll", we),
              H.current.removeEventListener("MozMousePixelScroll", L));
          }
        );
      },
      [_]
    );
  var Ie = Lo(H, B, F, u, s, b, y, function () {
    var L;
    (L = te.current) === null || L === void 0 || L.delayHidden();
  });
  r.useImperativeHandle(t, function () {
    return { scrollTo: Ie };
  }),
    Tt(
      function () {
        if (O) {
          var L = B.slice(k, q + 1);
          O(L, B);
        }
      },
      [k, q, B]
    );
  var Ge = To(B, k, q, I, f, w),
    Ve = null;
  return (
    a &&
      ((Ve = me(Oe({}, c ? "height" : "maxHeight", a), Bo)),
      _ && ((Ve.overflowY = "hidden"), de && (Ve.pointerEvents = "none"))),
    r.createElement(
      "div",
      Ke(
        { style: me(me({}, d), {}, { position: "relative" }), className: ve },
        x
      ),
      r.createElement(
        R,
        { className: "".concat(n, "-holder"), style: Ve, ref: H, onScroll: Ye },
        r.createElement(
          Bn,
          {
            prefixCls: n,
            height: se,
            offset: le,
            onInnerResize: b,
            ref: ee,
            innerProps: h,
          },
          Ge
        )
      ),
      _ &&
        r.createElement(Po, {
          ref: te,
          prefixCls: n,
          scrollTop: z,
          height: a,
          scrollHeight: se,
          count: B.length,
          onScroll: ye,
          onStartMove: function () {
            j(!0);
          },
          onStopMove: function () {
            j(!1);
          },
        })
    )
  );
}
var Yn = r.forwardRef(Uo);
Yn.displayName = "List";
var Xn = r.createContext(null);
function Yo() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var Xo = ["disabled", "title", "children", "style", "className"];
function yn(e) {
  return typeof e == "string" || typeof e == "number";
}
var Go = function (t, o) {
    var n = Wr(),
      i = n.prefixCls,
      a = n.id,
      u = n.open,
      l = n.multiple,
      c = n.mode,
      d = n.searchValue,
      v = n.toggleOpen,
      f = n.notFoundContent,
      p = n.onPopupScroll,
      g = r.useContext(Xn),
      S = g.flattenOptions,
      R = g.onActiveValue,
      T = g.defaultActiveFirstOption,
      O = g.onSelect,
      h = g.menuItemSelectedIcon,
      x = g.rawValues,
      _ = g.fieldNames,
      A = g.virtual,
      ne = g.listHeight,
      Z = g.listItemHeight,
      z = "".concat(i, "-item"),
      ie = br(
        function () {
          return S;
        },
        [u, S],
        function (N, M) {
          return M[0] && N[1] !== M[1];
        }
      ),
      V = r.useRef(null),
      J = function (M) {
        M.preventDefault();
      },
      de = function (M) {
        V.current &&
          V.current.scrollTo(typeof M == "number" ? { index: M } : M);
      },
      j = function (M) {
        for (
          var P =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 1,
            I = ie.length,
            b = 0;
          b < I;
          b += 1
        ) {
          var F = (M + b * P + I) % I,
            re = ie[F],
            X = re.group,
            se = re.data;
          if (!X && !se.disabled) return F;
        }
        return -1;
      },
      ve = r.useState(function () {
        return j(0);
      }),
      B = fe(ve, 2),
      H = B[0],
      ee = B[1],
      te = function (M) {
        var P =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        ee(M);
        var I = { source: P ? "keyboard" : "mouse" },
          b = ie[M];
        if (!b) {
          R(null, -1, I);
          return;
        }
        R(b.value, M, I);
      };
    r.useEffect(
      function () {
        te(T !== !1 ? j(0) : -1);
      },
      [ie.length, d]
    );
    var s = r.useCallback(
      function (N) {
        return x.has(N) && c !== "combobox";
      },
      [c, it(x).toString(), x.size]
    );
    r.useEffect(
      function () {
        var N = setTimeout(function () {
          if (!l && u && x.size === 1) {
            var P = Array.from(x)[0],
              I = ie.findIndex(function (b) {
                var F = b.data;
                return F.value === P;
              });
            I !== -1 && (te(I), de(I));
          }
        });
        if (u) {
          var M;
          (M = V.current) === null || M === void 0 || M.scrollTo(void 0);
        }
        return function () {
          return clearTimeout(N);
        };
      },
      [u, d, S.length]
    );
    var w = function (M) {
      M !== void 0 && O(M, { selected: !x.has(M) }), l || v(!1);
    };
    if (
      (r.useImperativeHandle(o, function () {
        return {
          onKeyDown: function (M) {
            var P = M.which,
              I = M.ctrlKey;
            switch (P) {
              case ce.N:
              case ce.P:
              case ce.UP:
              case ce.DOWN: {
                var b = 0;
                if (
                  (P === ce.UP
                    ? (b = -1)
                    : P === ce.DOWN
                    ? (b = 1)
                    : Yo() &&
                      I &&
                      (P === ce.N ? (b = 1) : P === ce.P && (b = -1)),
                  b !== 0)
                ) {
                  var F = j(H + b, b);
                  de(F), te(F, !0);
                }
                break;
              }
              case ce.ENTER: {
                var re = ie[H];
                re && !re.data.disabled ? w(re.value) : w(void 0),
                  u && M.preventDefault();
                break;
              }
              case ce.ESC:
                v(!1), u && M.stopPropagation();
            }
          },
          onKeyUp: function () {},
          scrollTo: function (M) {
            de(M);
          },
        };
      }),
      ie.length === 0)
    )
      return r.createElement(
        "div",
        {
          role: "listbox",
          id: "".concat(a, "_list"),
          className: "".concat(z, "-empty"),
          onMouseDown: J,
        },
        f
      );
    var y = Object.keys(_).map(function (N) {
        return _[N];
      }),
      E = function (M) {
        return M.label;
      };
    function m(N, M) {
      var P = N.group;
      return {
        role: P ? "presentation" : "option",
        id: "".concat(a, "_list_").concat(M),
      };
    }
    var W = function (M) {
        var P = ie[M];
        if (!P) return null;
        var I = P.data || {},
          b = I.value,
          F = P.group,
          re = Kt(I, !0),
          X = E(P);
        return P
          ? r.createElement(
              "div",
              Ke(
                { "aria-label": typeof X == "string" && !F ? X : null },
                re,
                { key: M },
                m(P, M),
                { "aria-selected": s(b) }
              ),
              b
            )
          : null;
      },
      U = { role: "listbox", id: "".concat(a, "_list") };
    return r.createElement(
      r.Fragment,
      null,
      A &&
        r.createElement(
          "div",
          Ke({}, U, { style: { height: 0, width: 0, overflow: "hidden" } }),
          W(H - 1),
          W(H),
          W(H + 1)
        ),
      r.createElement(
        Yn,
        {
          itemKey: "key",
          ref: V,
          data: ie,
          height: ne,
          itemHeight: Z,
          fullHeight: !1,
          onMouseDown: J,
          onScroll: p,
          virtual: A,
          innerProps: A ? null : U,
        },
        function (N, M) {
          var P,
            I = N.group,
            b = N.groupOption,
            F = N.data,
            re = N.label,
            X = N.value,
            se = F.key;
          if (I) {
            var k,
              q =
                (k = F.title) !== null && k !== void 0
                  ? k
                  : yn(re)
                  ? re.toString()
                  : void 0;
            return r.createElement(
              "div",
              { className: Be(z, "".concat(z, "-group")), title: q },
              re !== void 0 ? re : se
            );
          }
          var le = F.disabled,
            he = F.title;
          F.children;
          var pe = F.style,
            oe = F.className,
            Le = lt(F, Xo),
            He = Rn(Le, y),
            be = s(X),
            ye = "".concat(z, "-option"),
            Ye = Be(
              z,
              ye,
              oe,
              ((P = {}),
              Oe(P, "".concat(ye, "-grouped"), b),
              Oe(P, "".concat(ye, "-active"), H === M && !le),
              Oe(P, "".concat(ye, "-disabled"), le),
              Oe(P, "".concat(ye, "-selected"), be),
              P)
            ),
            Se = E(N),
            De = !h || typeof h == "function" || be,
            $e = typeof Se == "number" ? Se : Se || X,
            we = yn($e) ? $e.toString() : void 0;
          return (
            he !== void 0 && (we = he),
            r.createElement(
              "div",
              Ke({}, Kt(He), A ? {} : m(N, M), {
                "aria-selected": be,
                className: Ye,
                title: we,
                onMouseMove: function () {
                  H === M || le || te(M);
                },
                onClick: function () {
                  le || w(X);
                },
                style: pe,
              }),
              r.createElement(
                "div",
                { className: "".concat(ye, "-content") },
                $e
              ),
              r.isValidElement(h) || be,
              De &&
                r.createElement(
                  Ut,
                  {
                    className: "".concat(z, "-option-state"),
                    customizeIcon: h,
                    customizeIconProps: { isSelected: be },
                  },
                  be ? "✓" : null
                )
            )
          );
        }
      )
    );
  },
  Gn = r.forwardRef(Go);
Gn.displayName = "OptionList";
var qo = [
    "id",
    "mode",
    "prefixCls",
    "backfill",
    "fieldNames",
    "inputValue",
    "searchValue",
    "onSearch",
    "autoClearSearchValue",
    "onSelect",
    "onDeselect",
    "dropdownMatchSelectWidth",
    "filterOption",
    "filterSort",
    "optionFilterProp",
    "optionLabelProp",
    "options",
    "children",
    "defaultActiveFirstOption",
    "menuItemSelectedIcon",
    "virtual",
    "listHeight",
    "listItemHeight",
    "value",
    "defaultValue",
    "labelInValue",
    "onChange",
  ],
  Qo = ["inputValue"];
function ko(e) {
  return !e || _t(e) !== "object";
}
var Jo = r.forwardRef(function (e, t) {
    var o = e.id,
      n = e.mode,
      i = e.prefixCls,
      a = i === void 0 ? "rc-select" : i,
      u = e.backfill,
      l = e.fieldNames,
      c = e.inputValue,
      d = e.searchValue,
      v = e.onSearch,
      f = e.autoClearSearchValue,
      p = f === void 0 ? !0 : f,
      g = e.onSelect,
      S = e.onDeselect,
      R = e.dropdownMatchSelectWidth,
      T = R === void 0 ? !0 : R,
      O = e.filterOption,
      h = e.filterSort,
      x = e.optionFilterProp,
      _ = e.optionLabelProp,
      A = e.options,
      ne = e.children,
      Z = e.defaultActiveFirstOption,
      z = e.menuItemSelectedIcon,
      ie = e.virtual,
      V = e.listHeight,
      J = V === void 0 ? 200 : V,
      de = e.listItemHeight,
      j = de === void 0 ? 20 : de,
      ve = e.value,
      B = e.defaultValue,
      H = e.labelInValue,
      ee = e.onChange,
      te = lt(e, qo),
      s = Io(o),
      w = on(n),
      y = !!(!A && ne),
      E = r.useMemo(
        function () {
          return O === void 0 && n === "combobox" ? !1 : O;
        },
        [O, n]
      ),
      m = r.useMemo(
        function () {
          return Wn(l, y);
        },
        [JSON.stringify(l), y]
      ),
      W = Wt("", {
        value: d !== void 0 ? d : c,
        postState: function (D) {
          return D || "";
        },
      }),
      U = fe(W, 2),
      N = U[0],
      M = U[1],
      P = Oo(A, ne, m, x, _),
      I = P.valueOptions,
      b = P.labelOptions,
      F = P.options,
      re = r.useCallback(
        function (C) {
          var D = Fn(C);
          return D.map(function ($) {
            var Y, ue, Ce, Fe, We;
            if (ko($)) Y = $;
            else {
              var Qe;
              (Ce = $.key),
                (ue = $.label),
                (Y = (Qe = $.value) !== null && Qe !== void 0 ? Qe : Ce);
            }
            var Ae = I.get(Y);
            if (Ae) {
              var rt;
              ue === void 0 && (ue = Ae == null ? void 0 : Ae[_ || m.label]),
                Ce === void 0 &&
                  (Ce =
                    (rt = Ae == null ? void 0 : Ae.key) !== null &&
                    rt !== void 0
                      ? rt
                      : Y),
                (Fe = Ae == null ? void 0 : Ae.disabled),
                (We = Ae == null ? void 0 : Ae.title);
            }
            return { label: ue, value: Y, key: Ce, disabled: Fe, title: We };
          });
        },
        [m, _, I]
      ),
      X = Wt(B, { value: ve }),
      se = fe(X, 2),
      k = se[0],
      q = se[1],
      le = r.useMemo(
        function () {
          var C,
            D = re(k);
          return n === "combobox" &&
            !((C = D[0]) !== null && C !== void 0 && C.value)
            ? []
            : D;
        },
        [k, re, n]
      ),
      he = wo(le, I),
      pe = fe(he, 2),
      oe = pe[0],
      Le = pe[1],
      He = r.useMemo(
        function () {
          if (!n && oe.length === 1) {
            var C = oe[0];
            if (C.value === null && (C.label === null || C.label === void 0))
              return [];
          }
          return oe.map(function (D) {
            var $;
            return me(
              me({}, D),
              {},
              { label: ($ = D.label) !== null && $ !== void 0 ? $ : D.value }
            );
          });
        },
        [n, oe]
      ),
      be = r.useMemo(
        function () {
          return new Set(
            oe.map(function (C) {
              return C.value;
            })
          );
        },
        [oe]
      );
    r.useEffect(
      function () {
        if (n === "combobox") {
          var C,
            D = (C = oe[0]) === null || C === void 0 ? void 0 : C.value;
          M(oo(D) ? String(D) : "");
        }
      },
      [oe]
    );
    var ye = Sn(function (C, D) {
        var $,
          Y = D ?? C;
        return ($ = {}), Oe($, m.value, C), Oe($, m.label, Y), $;
      }),
      Ye = r.useMemo(
        function () {
          if (n !== "tags") return F;
          var C = it(F),
            D = function (Y) {
              return I.has(Y);
            };
          return (
            it(oe)
              .sort(function ($, Y) {
                return $.value < Y.value ? -1 : 1;
              })
              .forEach(function ($) {
                var Y = $.value;
                D(Y) || C.push(ye(Y, $.label));
              }),
            C
          );
        },
        [ye, F, I, oe, n]
      ),
      Se = yo(Ye, m, N, E, x),
      De = r.useMemo(
        function () {
          return n !== "tags" ||
            !N ||
            Se.some(function (C) {
              return C[x || "value"] === N;
            })
            ? Se
            : [ye(N)].concat(it(Se));
        },
        [ye, x, n, Se, N]
      ),
      $e = r.useMemo(
        function () {
          return h
            ? it(De).sort(function (C, D) {
                return h(C, D);
              })
            : De;
        },
        [De, h]
      ),
      we = r.useMemo(
        function () {
          return po($e, { fieldNames: m, childrenAsData: y });
        },
        [$e, m, y]
      ),
      Ie = function (D) {
        var $ = re(D);
        if (
          (q($),
          ee &&
            ($.length !== oe.length ||
              $.some(function (Ce, Fe) {
                var We;
                return (
                  ((We = oe[Fe]) === null || We === void 0
                    ? void 0
                    : We.value) !== (Ce == null ? void 0 : Ce.value)
                );
              })))
        ) {
          var Y = H
              ? $
              : $.map(function (Ce) {
                  return Ce.value;
                }),
            ue = $.map(function (Ce) {
              return rn(Le(Ce.value));
            });
          ee(w ? Y : Y[0], w ? ue : ue[0]);
        }
      },
      Ge = r.useState(null),
      Ve = fe(Ge, 2),
      L = Ve[0],
      G = Ve[1],
      Me = r.useState(0),
      Ee = fe(Me, 2),
      Re = Ee[0],
      Te = Ee[1],
      je = Z !== void 0 ? Z : n !== "combobox",
      nt = r.useCallback(
        function (C, D) {
          var $ =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            Y = $.source,
            ue = Y === void 0 ? "keyboard" : Y;
          Te(D),
            u &&
              n === "combobox" &&
              C !== null &&
              ue === "keyboard" &&
              G(String(C));
        },
        [u, n]
      ),
      ge = function (D, $, Y) {
        var ue = function () {
          var ot,
            ct = Le(D);
          return [
            H
              ? {
                  label: ct == null ? void 0 : ct[m.label],
                  value: D,
                  key:
                    (ot = ct == null ? void 0 : ct.key) !== null &&
                    ot !== void 0
                      ? ot
                      : D,
                }
              : D,
            rn(ct),
          ];
        };
        if ($ && g) {
          var Ce = ue(),
            Fe = fe(Ce, 2),
            We = Fe[0],
            Qe = Fe[1];
          g(We, Qe);
        } else if (!$ && S && Y !== "clear") {
          var Ae = ue(),
            rt = fe(Ae, 2),
            et = rt[0],
            mt = rt[1];
          S(et, mt);
        }
      },
      Ze = Sn(function (C, D) {
        var $,
          Y = w ? D.selected : !0;
        Y
          ? ($ = w ? [].concat(it(oe), [C]) : [C])
          : ($ = oe.filter(function (ue) {
              return ue.value !== C;
            })),
          Ie($),
          ge(C, Y),
          n === "combobox" ? G("") : (!on || p) && (M(""), G(""));
      }),
      Ue = function (D, $) {
        Ie(D);
        var Y = $.type,
          ue = $.values;
        (Y === "remove" || Y === "clear") &&
          ue.forEach(function (Ce) {
            ge(Ce.value, !1, Y);
          });
      },
      xe = function (D, $) {
        if ((M(D), G(null), $.source === "submit")) {
          var Y = (D || "").trim();
          if (Y) {
            var ue = Array.from(new Set([].concat(it(be), [Y])));
            Ie(ue), ge(Y, !0), M("");
          }
          return;
        }
        $.source !== "blur" && (n === "combobox" && Ie(D), v == null || v(D));
      },
      dt = function (D) {
        var $ = D;
        n !== "tags" &&
          ($ = D.map(function (ue) {
            var Ce = b.get(ue);
            return Ce == null ? void 0 : Ce.value;
          }).filter(function (ue) {
            return ue !== void 0;
          }));
        var Y = Array.from(new Set([].concat(it(be), it($))));
        Ie(Y),
          Y.forEach(function (ue) {
            ge(ue, !0);
          });
      },
      qe = r.useMemo(
        function () {
          var C = ie !== !1 && T !== !1;
          return me(
            me({}, P),
            {},
            {
              flattenOptions: we,
              onActiveValue: nt,
              defaultActiveFirstOption: je,
              onSelect: Ze,
              menuItemSelectedIcon: z,
              rawValues: be,
              fieldNames: m,
              virtual: C,
              listHeight: J,
              listItemHeight: j,
              childrenAsData: y,
            }
          );
        },
        [P, we, nt, je, Ze, z, be, m, ie, T, J, j, y]
      );
    return r.createElement(
      Xn.Provider,
      { value: qe },
      r.createElement(
        So,
        Ke({}, te, {
          id: s,
          prefixCls: a,
          ref: t,
          omitDomProps: Qo,
          mode: n,
          displayValues: He,
          onDisplayValuesChange: Ue,
          searchValue: N,
          onSearch: xe,
          autoClearSearchValue: p,
          onSearchSplit: dt,
          dropdownMatchSelectWidth: T,
          OptionList: Gn,
          emptyOptions: !we.length,
          activeValue: L,
          activeDescendantId: "".concat(s, "_list_").concat(Re),
        })
      )
    );
  }),
  fn = Jo;
fn.Option = dn;
fn.OptGroup = un;
const Zo = () => {
    const [, e] = On(),
      t = new jt(e.colorBgBase);
    let o = {};
    return (
      t.toHsl().l < 0.5 && (o = { opacity: 0.65 }),
      r.createElement(
        "svg",
        {
          style: o,
          width: "184",
          height: "152",
          viewBox: "0 0 184 152",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          r.createElement(
            "g",
            { transform: "translate(24 31.67)" },
            r.createElement("ellipse", {
              fillOpacity: ".8",
              fill: "#F5F5F7",
              cx: "67.797",
              cy: "106.89",
              rx: "67.797",
              ry: "12.668",
            }),
            r.createElement("path", {
              d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
              fill: "#AEB8C2",
            }),
            r.createElement("path", {
              d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
              fill: "url(#linearGradient-1)",
              transform: "translate(13.56)",
            }),
            r.createElement("path", {
              d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
              fill: "#F5F5F7",
            }),
            r.createElement("path", {
              d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
              fill: "#DCE0E6",
            })
          ),
          r.createElement("path", {
            d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
            fill: "#DCE0E6",
          }),
          r.createElement(
            "g",
            { transform: "translate(149.65 15.383)", fill: "#FFF" },
            r.createElement("ellipse", {
              cx: "20.654",
              cy: "3.167",
              rx: "2.849",
              ry: "2.815",
            }),
            r.createElement("path", {
              d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z",
            })
          )
        )
      )
    );
  },
  ea = Zo,
  ta = () => {
    const [, e] = On(),
      {
        colorFill: t,
        colorFillTertiary: o,
        colorFillQuaternary: n,
        colorBgContainer: i,
      } = e,
      {
        borderColor: a,
        shadowColor: u,
        contentColor: l,
      } = r.useMemo(
        () => ({
          borderColor: new jt(t).onBackground(i).toHexShortString(),
          shadowColor: new jt(o).onBackground(i).toHexShortString(),
          contentColor: new jt(n).onBackground(i).toHexShortString(),
        }),
        [t, o, n, i]
      );
    return r.createElement(
      "svg",
      {
        width: "64",
        height: "41",
        viewBox: "0 0 64 41",
        xmlns: "http://www.w3.org/2000/svg",
      },
      r.createElement(
        "g",
        { transform: "translate(0 1)", fill: "none", fillRule: "evenodd" },
        r.createElement("ellipse", {
          fill: u,
          cx: "32",
          cy: "33",
          rx: "32",
          ry: "7",
        }),
        r.createElement(
          "g",
          { fillRule: "nonzero", stroke: a },
          r.createElement("path", {
            d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z",
          }),
          r.createElement("path", {
            d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
            fill: l,
          })
        )
      )
    );
  },
  na = ta,
  ra = (e) => {
    const {
      componentCls: t,
      margin: o,
      marginXS: n,
      marginXL: i,
      fontSize: a,
      lineHeight: u,
    } = e;
    return {
      [t]: {
        marginInline: n,
        fontSize: a,
        lineHeight: u,
        textAlign: "center",
        [`${t}-image`]: {
          height: e.emptyImgHeight,
          marginBottom: n,
          opacity: e.opacityImage,
          img: { height: "100%" },
          svg: { height: "100%", margin: "auto" },
        },
        [`${t}-description`]: { color: e.colorText },
        [`${t}-footer`]: { marginTop: o },
        "&-normal": {
          marginBlock: i,
          color: e.colorTextDisabled,
          [`${t}-description`]: { color: e.colorTextDisabled },
          [`${t}-image`]: { height: e.emptyImgHeightMD },
        },
        "&-small": {
          marginBlock: n,
          color: e.colorTextDisabled,
          [`${t}-image`]: { height: e.emptyImgHeightSM },
        },
      },
    };
  },
  oa = Dn("Empty", (e) => {
    const { componentCls: t, controlHeightLG: o } = e,
      n = ht(e, {
        emptyImgCls: `${t}-img`,
        emptyImgHeight: o * 2.5,
        emptyImgHeightMD: o,
        emptyImgHeightSM: o * 0.875,
      });
    return [ra(n)];
  });
var aa =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (o[n[i]] = e[n[i]]);
    return o;
  };
const qn = r.createElement(ea, null),
  Qn = r.createElement(na, null),
  vn = (e) => {
    var {
        className: t,
        rootClassName: o,
        prefixCls: n,
        image: i = qn,
        description: a,
        children: u,
        imageStyle: l,
      } = e,
      c = aa(e, [
        "className",
        "rootClassName",
        "prefixCls",
        "image",
        "description",
        "children",
        "imageStyle",
      ]);
    const { getPrefixCls: d, direction: v } = r.useContext(Yt),
      f = d("empty", n),
      [p, g] = oa(f),
      [S] = zr("Empty"),
      R = typeof a < "u" ? a : S == null ? void 0 : S.description,
      T = typeof R == "string" ? R : "empty";
    let O = null;
    return (
      typeof i == "string"
        ? (O = r.createElement("img", { alt: T, src: i }))
        : (O = i),
      p(
        r.createElement(
          "div",
          Object.assign(
            {
              className: Be(
                g,
                f,
                { [`${f}-normal`]: i === Qn, [`${f}-rtl`]: v === "rtl" },
                t,
                o
              ),
            },
            c
          ),
          r.createElement("div", { className: `${f}-image`, style: l }, O),
          R && r.createElement("div", { className: `${f}-description` }, R),
          u && r.createElement("div", { className: `${f}-footer` }, u)
        )
      )
    );
  };
vn.PRESENTED_IMAGE_DEFAULT = qn;
vn.PRESENTED_IMAGE_SIMPLE = Qn;
const Pt = vn,
  ia = (e) => {
    const { componentName: t } = e,
      { getPrefixCls: o } = r.useContext(Yt),
      n = o("empty");
    switch (t) {
      case "Table":
      case "List":
        return kt.createElement(Pt, { image: Pt.PRESENTED_IMAGE_SIMPLE });
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return kt.createElement(Pt, {
          image: Pt.PRESENTED_IMAGE_SIMPLE,
          className: `${n}-small`,
        });
      default:
        return kt.createElement(Pt, null);
    }
  },
  la = ia;
var ca = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
        },
      },
    ],
  },
  name: "down",
  theme: "outlined",
};
const sa = ca;
var kn = function (t, o) {
  return r.createElement(Sr, me(me({}, t), {}, { ref: o, icon: sa }));
};
kn.displayName = "DownOutlined";
const ua = r.forwardRef(kn);
function da(e) {
  let {
    suffixIcon: t,
    clearIcon: o,
    menuItemSelectedIcon: n,
    removeIcon: i,
    loading: a,
    multiple: u,
    hasFeedback: l,
    prefixCls: c,
    showArrow: d,
    feedbackIcon: v,
  } = e;
  const f = o ?? r.createElement(wr, null),
    p = (T) => r.createElement(r.Fragment, null, d !== !1 && T, l && v);
  let g = null;
  if (t !== void 0) g = p(t);
  else if (a) g = p(r.createElement(yr, { spin: !0 }));
  else {
    const T = `${c}-suffix`;
    g = (O) => {
      let { open: h, showSearch: x } = O;
      return p(
        h && x
          ? r.createElement(Cr, { className: T })
          : r.createElement(ua, { className: T })
      );
    };
  }
  let S = null;
  n !== void 0 ? (S = n) : u ? (S = r.createElement(jr, null)) : (S = null);
  let R = null;
  return (
    i !== void 0 ? (R = i) : (R = r.createElement(Hr, null)),
    { clearIcon: f, suffixIcon: g, itemIcon: S, removeIcon: R }
  );
}
function fa(e, t, o) {
  return function (i) {
    const { prefixCls: a, style: u } = i,
      l = r.useRef(null),
      [c, d] = r.useState(0),
      [v, f] = r.useState(0),
      [p, g] = Wt(!1, { value: i.open }),
      { getPrefixCls: S } = r.useContext(Yt),
      R = S(t || "select", a);
    return (
      r.useEffect(() => {
        if ((g(!0), typeof ResizeObserver < "u")) {
          const T = new ResizeObserver((h) => {
              const x = h[0].target;
              d(x.offsetHeight + 8), f(x.offsetWidth);
            }),
            O = setInterval(() => {
              var h;
              const x = o ? `.${o(R)}` : `.${R}-dropdown`,
                _ =
                  (h = l.current) === null || h === void 0
                    ? void 0
                    : h.querySelector(x);
              _ && (clearInterval(O), T.observe(_));
            }, 10);
          return () => {
            clearInterval(O), T.disconnect();
          };
        }
      }, []),
      r.createElement(
        Er,
        {
          theme: {
            token: {
              motionDurationFast: "0.01s",
              motionDurationMid: "0.01s",
              motionDurationSlow: "0.01s",
            },
          },
        },
        r.createElement(
          "div",
          {
            ref: l,
            style: {
              paddingBottom: c,
              position: "relative",
              width: "fit-content",
              minWidth: v,
            },
          },
          r.createElement(
            e,
            Object.assign({}, i, {
              style: Object.assign(Object.assign({}, u), { margin: 0 }),
              open: p,
              visible: p,
              getPopupContainer: () => l.current,
            })
          )
        )
      )
    );
  };
}
const va = new Xe("antMoveDownIn", {
    "0%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  ma = new Xe("antMoveDownOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  pa = new Xe("antMoveLeftIn", {
    "0%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  ga = new Xe("antMoveLeftOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  ha = new Xe("antMoveRightIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  ba = new Xe("antMoveRightOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  Sa = new Xe("antMoveUpIn", {
    "0%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  wa = new Xe("antMoveUpOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  ya = {
    "move-up": { inKeyframes: Sa, outKeyframes: wa },
    "move-down": { inKeyframes: va, outKeyframes: ma },
    "move-left": { inKeyframes: pa, outKeyframes: ga },
    "move-right": { inKeyframes: ha, outKeyframes: ba },
  },
  Cn = (e, t) => {
    const { antCls: o } = e,
      n = `${o}-${t}`,
      { inKeyframes: i, outKeyframes: a } = ya[t];
    return [
      Tn(n, i, a, e.motionDurationMid),
      {
        [`
        ${n}-enter,
        ${n}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
        [`${n}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  Jn = new Xe("antSlideUpIn", {
    "0%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  Zn = new Xe("antSlideUpOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  er = new Xe("antSlideDownIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1,
    },
  }),
  tr = new Xe("antSlideDownOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
  }),
  Ca = new Xe("antSlideLeftIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  Ea = new Xe("antSlideLeftOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  Ia = new Xe("antSlideRightIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
  }),
  xa = new Xe("antSlideRightOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0,
    },
  }),
  Ma = {
    "slide-up": { inKeyframes: Jn, outKeyframes: Zn },
    "slide-down": { inKeyframes: er, outKeyframes: tr },
    "slide-left": { inKeyframes: Ca, outKeyframes: Ea },
    "slide-right": { inKeyframes: Ia, outKeyframes: xa },
  },
  En = (e, t) => {
    const { antCls: o } = e,
      n = `${o}-${t}`,
      { inKeyframes: i, outKeyframes: a } = Ma[t];
    return [
      Tn(n, i, a, e.motionDurationMid),
      {
        [`
      ${n}-enter,
      ${n}-appear
    `]: {
          transform: "scale(0)",
          transformOrigin: "0% 0%",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
        },
        [`${n}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  },
  In = (e) => {
    const { controlPaddingHorizontal: t } = e;
    return {
      position: "relative",
      display: "block",
      minHeight: e.controlHeight,
      padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${t}px`,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      boxSizing: "border-box",
    };
  },
  Ra = (e) => {
    const { antCls: t, componentCls: o } = e,
      n = `${o}-item`;
    return [
      {
        [`${o}-dropdown`]: Object.assign(Object.assign({}, cn(e)), {
          position: "absolute",
          top: -9999,
          zIndex: e.zIndexPopup,
          boxSizing: "border-box",
          padding: e.paddingXXS,
          overflow: "hidden",
          fontSize: e.fontSize,
          fontVariant: "initial",
          backgroundColor: e.colorBgElevated,
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary,
          [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${o}-dropdown-placement-bottomLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${o}-dropdown-placement-bottomLeft
          `]: { animationName: Jn },
          [`
            &${t}-slide-up-enter${t}-slide-up-enter-active${o}-dropdown-placement-topLeft,
            &${t}-slide-up-appear${t}-slide-up-appear-active${o}-dropdown-placement-topLeft
          `]: { animationName: er },
          [`&${t}-slide-up-leave${t}-slide-up-leave-active${o}-dropdown-placement-bottomLeft`]:
            { animationName: Zn },
          [`&${t}-slide-up-leave${t}-slide-up-leave-active${o}-dropdown-placement-topLeft`]:
            { animationName: tr },
          "&-hidden": { display: "none" },
          "&-empty": { color: e.colorTextDisabled },
          [`${n}-empty`]: Object.assign(Object.assign({}, In(e)), {
            color: e.colorTextDisabled,
          }),
          [`${n}`]: Object.assign(Object.assign({}, In(e)), {
            cursor: "pointer",
            transition: `background ${e.motionDurationSlow} ease`,
            borderRadius: e.borderRadiusSM,
            "&-group": {
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              cursor: "default",
            },
            "&-option": {
              display: "flex",
              "&-content": Object.assign({ flex: "auto" }, nn),
              "&-state": { flex: "none" },
              [`&-active:not(${n}-option-disabled)`]: {
                backgroundColor: e.controlItemBgHover,
              },
              [`&-selected:not(${n}-option-disabled)`]: {
                color: e.colorText,
                fontWeight: e.fontWeightStrong,
                backgroundColor: e.controlItemBgActive,
                [`${n}-option-state`]: { color: e.colorPrimary },
              },
              "&-disabled": {
                [`&${n}-option-selected`]: {
                  backgroundColor: e.colorBgContainerDisabled,
                },
                color: e.colorTextDisabled,
                cursor: "not-allowed",
              },
              "&-grouped": {
                paddingInlineStart: e.controlPaddingHorizontal * 2,
              },
            },
          }),
          "&-rtl": { direction: "rtl" },
        }),
      },
      En(e, "slide-up"),
      En(e, "slide-down"),
      Cn(e, "move-up"),
      Cn(e, "move-down"),
    ];
  },
  Oa = Ra,
  Mt = 2;
function nr(e) {
  let { controlHeightSM: t, controlHeight: o, lineWidth: n } = e;
  const i = (o - t) / 2 - n,
    a = Math.ceil(i / 2);
  return [i, a];
}
function Zt(e, t) {
  const { componentCls: o, iconCls: n } = e,
    i = `${o}-selection-overflow`,
    a = e.controlHeightSM,
    [u] = nr(e),
    l = t ? `${o}-${t}` : "";
  return {
    [`${o}-multiple${l}`]: {
      fontSize: e.fontSize,
      [i]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex",
        },
      },
      [`${o}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: `${u - Mt}px ${Mt * 2}px`,
        borderRadius: e.borderRadius,
        [`${o}-show-search&`]: { cursor: "text" },
        [`${o}-disabled&`]: {
          background: e.colorBgContainerDisabled,
          cursor: "not-allowed",
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${Mt}px 0`,
          lineHeight: `${a}px`,
          content: '"\\a0"',
        },
      },
      [`
        &${o}-show-arrow ${o}-selector,
        &${o}-allow-clear ${o}-selector
      `]: { paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal },
      [`${o}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: a,
        marginTop: Mt,
        marginBottom: Mt,
        lineHeight: `${a - e.lineWidth * 2}px`,
        background: e.colorFillSecondary,
        border: `${e.lineWidth}px solid ${e.colorSplit}`,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: Mt * 2,
        paddingInlineStart: e.paddingXS,
        paddingInlineEnd: e.paddingXS / 2,
        [`${o}-disabled&`]: {
          color: e.colorTextDisabled,
          borderColor: e.colorBorder,
          cursor: "not-allowed",
        },
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis",
        },
        "&-remove": Object.assign(Object.assign({}, Pn()), {
          display: "inline-block",
          color: e.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: { verticalAlign: "-0.2em" },
          "&:hover": { color: e.colorIconHover },
        }),
      },
      [`${i}-item + ${i}-item`]: {
        [`${o}-selection-search`]: { marginInlineStart: 0 },
      },
      [`${o}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - u,
        [`
          &-input,
          &-mirror
        `]: {
          height: a,
          fontFamily: e.fontFamily,
          lineHeight: `${a}px`,
          transition: `all ${e.motionDurationSlow}`,
        },
        "&-input": { width: "100%", minWidth: 4.1 },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden",
        },
      },
      [`${o}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`,
      },
    },
  };
}
function Da(e) {
  const { componentCls: t } = e,
    o = ht(e, {
      controlHeight: e.controlHeightSM,
      controlHeightSM: e.controlHeightXS,
      borderRadius: e.borderRadiusSM,
      borderRadiusSM: e.borderRadiusXS,
    }),
    [, n] = nr(e);
  return [
    Zt(e),
    Zt(o, "sm"),
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.controlPaddingHorizontalSM - e.lineWidth,
        },
        [`${t}-selection-search`]: { marginInlineStart: n },
      },
    },
    Zt(
      ht(e, {
        fontSize: e.fontSizeLG,
        controlHeight: e.controlHeightLG,
        controlHeightSM: e.controlHeight,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius,
      }),
      "lg"
    ),
  ];
}
function en(e, t) {
  const { componentCls: o, inputPaddingHorizontalBase: n, borderRadius: i } = e,
    a = e.controlHeight - e.lineWidth * 2,
    u = Math.ceil(e.fontSize * 1.25),
    l = t ? `${o}-${t}` : "";
  return {
    [`${o}-single${l}`]: {
      fontSize: e.fontSize,
      [`${o}-selector`]: Object.assign(Object.assign({}, cn(e)), {
        display: "flex",
        borderRadius: i,
        [`${o}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: n,
          insetInlineEnd: n,
          bottom: 0,
          "&-input": { width: "100%" },
        },
        [`
          ${o}-selection-item,
          ${o}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${a}px`,
          transition: `all ${e.motionDurationSlow}`,
          "@supports (-moz-appearance: meterbar)": { lineHeight: `${a}px` },
        },
        [`${o}-selection-item`]: { position: "relative", userSelect: "none" },
        [`${o}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none",
        },
        [[
          "&:after",
          `${o}-selection-item:after`,
          `${o}-selection-placeholder:after`,
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"',
        },
      }),
      [`
        &${o}-show-arrow ${o}-selection-item,
        &${o}-show-arrow ${o}-selection-placeholder
      `]: { paddingInlineEnd: u },
      [`&${o}-open ${o}-selection-item`]: { color: e.colorTextPlaceholder },
      [`&:not(${o}-customize-input)`]: {
        [`${o}-selector`]: {
          width: "100%",
          height: e.controlHeight,
          padding: `0 ${n}px`,
          [`${o}-selection-search-input`]: { height: a },
          "&:after": { lineHeight: `${a}px` },
        },
      },
      [`&${o}-customize-input`]: {
        [`${o}-selector`]: {
          "&:after": { display: "none" },
          [`${o}-selection-search`]: { position: "static", width: "100%" },
          [`${o}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${n}px`,
            "&:after": { display: "none" },
          },
        },
      },
    },
  };
}
function Pa(e) {
  const { componentCls: t } = e,
    o = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    en(e),
    en(
      ht(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM,
      }),
      "sm"
    ),
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: { insetInlineStart: o, insetInlineEnd: o },
          [`${t}-selector`]: { padding: `0 ${o}px` },
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: o + e.fontSize * 1.5,
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: { paddingInlineEnd: e.fontSize * 1.5 },
        },
      },
    },
    en(
      ht(e, {
        controlHeight: e.controlHeightLG,
        fontSize: e.fontSizeLG,
        borderRadius: e.borderRadiusLG,
      }),
      "lg"
    ),
  ];
}
const $a = (e) => {
    const { componentCls: t } = e;
    return {
      position: "relative",
      backgroundColor: e.colorBgContainer,
      border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      input: { cursor: "pointer" },
      [`${t}-show-search&`]: {
        cursor: "text",
        input: { cursor: "auto", color: "inherit" },
      },
      [`${t}-disabled&`]: {
        color: e.colorTextDisabled,
        background: e.colorBgContainerDisabled,
        cursor: "not-allowed",
        [`${t}-multiple&`]: { background: e.colorBgContainerDisabled },
        input: { cursor: "not-allowed" },
      },
    };
  },
  tn = function (e, t) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const {
        componentCls: n,
        borderHoverColor: i,
        outlineColor: a,
        antCls: u,
      } = t,
      l = o ? { [`${n}-selector`]: { borderColor: i } } : {};
    return {
      [e]: {
        [`&:not(${n}-disabled):not(${n}-customize-input):not(${u}-pagination-size-changer)`]:
          Object.assign(Object.assign({}, l), {
            [`${n}-focused& ${n}-selector`]: {
              borderColor: i,
              boxShadow: `0 0 0 ${t.controlOutlineWidth}px ${a}`,
              outline: 0,
            },
            [`&:hover ${n}-selector`]: { borderColor: i },
          }),
      },
    };
  },
  Ta = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: "transparent",
        border: "none",
        outline: "none",
        appearance: "none",
        "&::-webkit-search-cancel-button": {
          display: "none",
          "-webkit-appearance": "none",
        },
      },
    };
  },
  _a = (e) => {
    const { componentCls: t, inputPaddingHorizontalBase: o, iconCls: n } = e;
    return {
      [t]: Object.assign(Object.assign({}, cn(e)), {
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        [`&:not(${t}-customize-input) ${t}-selector`]: Object.assign(
          Object.assign({}, $a(e)),
          Ta(e)
        ),
        [`${t}-selection-item`]: Object.assign(
          { flex: 1, fontWeight: "normal" },
          nn
        ),
        [`${t}-selection-placeholder`]: Object.assign(Object.assign({}, nn), {
          flex: 1,
          color: e.colorTextPlaceholder,
          pointerEvents: "none",
        }),
        [`${t}-arrow`]: Object.assign(Object.assign({}, Pn()), {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: o,
          height: e.fontSizeIcon,
          marginTop: -e.fontSizeIcon / 2,
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          lineHeight: 1,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          [n]: {
            verticalAlign: "top",
            transition: `transform ${e.motionDurationSlow}`,
            "> svg": { verticalAlign: "top" },
            [`&:not(${t}-suffix)`]: { pointerEvents: "auto" },
          },
          [`${t}-disabled &`]: { cursor: "not-allowed" },
          "> *:not(:last-child)": { marginInlineEnd: 8 },
        }),
        [`${t}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: o,
          zIndex: 1,
          display: "inline-block",
          width: e.fontSizeIcon,
          height: e.fontSizeIcon,
          marginTop: -e.fontSizeIcon / 2,
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          background: e.colorBgContainer,
          cursor: "pointer",
          opacity: 0,
          transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
          textRendering: "auto",
          "&:before": { display: "block" },
          "&:hover": { color: e.colorTextTertiary },
        },
        "&:hover": { [`${t}-clear`]: { opacity: 1 } },
      }),
      [`${t}-has-feedback`]: {
        [`${t}-clear`]: { insetInlineEnd: o + e.fontSize + e.paddingXXS },
      },
    };
  },
  Na = (e) => {
    const { componentCls: t } = e;
    return [
      {
        [t]: {
          [`&-borderless ${t}-selector`]: {
            backgroundColor: "transparent !important",
            borderColor: "transparent !important",
            boxShadow: "none !important",
          },
          [`&${t}-in-form-item`]: { width: "100%" },
        },
      },
      _a(e),
      Pa(e),
      Da(e),
      Oa(e),
      { [`${t}-rtl`]: { direction: "rtl" } },
      tn(
        t,
        ht(e, {
          borderHoverColor: e.colorPrimaryHover,
          outlineColor: e.controlOutline,
        })
      ),
      tn(
        `${t}-status-error`,
        ht(e, {
          borderHoverColor: e.colorErrorHover,
          outlineColor: e.colorErrorOutline,
        }),
        !0
      ),
      tn(
        `${t}-status-warning`,
        ht(e, {
          borderHoverColor: e.colorWarningHover,
          outlineColor: e.colorWarningOutline,
        }),
        !0
      ),
      Ir(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` }),
    ];
  },
  La = Dn(
    "Select",
    (e, t) => {
      let { rootPrefixCls: o } = t;
      const n = ht(e, {
        rootPrefixCls: o,
        inputPaddingHorizontalBase: e.paddingSM - 1,
      });
      return [Na(n)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  );
var za =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (o[n[i]] = e[n[i]]);
    return o;
  };
const rr = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
  Ha = (e, t) => {
    var {
        prefixCls: o,
        bordered: n = !0,
        className: i,
        rootClassName: a,
        getPopupContainer: u,
        popupClassName: l,
        dropdownClassName: c,
        listHeight: d = 256,
        placement: v,
        listItemHeight: f = 24,
        size: p,
        disabled: g,
        notFoundContent: S,
        status: R,
        showArrow: T,
      } = e,
      O = za(e, [
        "prefixCls",
        "bordered",
        "className",
        "rootClassName",
        "getPopupContainer",
        "popupClassName",
        "dropdownClassName",
        "listHeight",
        "placement",
        "listItemHeight",
        "size",
        "disabled",
        "notFoundContent",
        "status",
        "showArrow",
      ]);
    const {
        getPopupContainer: h,
        getPrefixCls: x,
        renderEmpty: _,
        direction: A,
        virtual: ne,
        dropdownMatchSelectWidth: Z,
        select: z,
      } = r.useContext(Yt),
      ie = r.useContext(xr),
      V = x("select", o),
      J = x(),
      { compactSize: de, compactItemClassnames: j } = Mr(V, A),
      [ve, B] = La(V),
      H = r.useMemo(() => {
        const { mode: q } = O;
        if (q !== "combobox") return q === rr ? "combobox" : q;
      }, [O.mode]),
      ee = H === "multiple" || H === "tags",
      te = T !== void 0 ? T : O.loading || !(ee || H === "combobox"),
      {
        status: s,
        hasFeedback: w,
        isFormItemInput: y,
        feedbackIcon: E,
      } = r.useContext(Rr),
      m = Pr(s, R);
    let W;
    S !== void 0
      ? (W = S)
      : H === "combobox"
      ? (W = null)
      : (W =
          (_ == null ? void 0 : _("Select")) ||
          r.createElement(la, { componentName: "Select" }));
    const {
        suffixIcon: U,
        itemIcon: N,
        removeIcon: M,
        clearIcon: P,
      } = da(
        Object.assign(Object.assign({}, O), {
          multiple: ee,
          hasFeedback: w,
          feedbackIcon: E,
          showArrow: te,
          prefixCls: V,
        })
      ),
      I = Rn(O, ["suffixIcon", "itemIcon"]),
      b = Be(l || c, { [`${V}-dropdown-${A}`]: A === "rtl" }, a, B),
      F = de || p || ie,
      re = r.useContext(Or),
      X = g ?? re,
      se = Be(
        {
          [`${V}-lg`]: F === "large",
          [`${V}-sm`]: F === "small",
          [`${V}-rtl`]: A === "rtl",
          [`${V}-borderless`]: !n,
          [`${V}-in-form-item`]: y,
        },
        Dr(V, m, w),
        j,
        i,
        a,
        B
      ),
      k = () => (v !== void 0 ? v : A === "rtl" ? "bottomRight" : "bottomLeft");
    return ve(
      r.createElement(
        fn,
        Object.assign(
          {
            ref: t,
            virtual: ne,
            dropdownMatchSelectWidth: Z,
            showSearch: z == null ? void 0 : z.showSearch,
          },
          I,
          {
            transitionName: Fr(J, Ar(v), O.transitionName),
            listHeight: d,
            listItemHeight: f,
            mode: H,
            prefixCls: V,
            placement: k(),
            direction: A,
            inputIcon: U,
            menuItemSelectedIcon: N,
            removeIcon: M,
            clearIcon: P,
            notFoundContent: W,
            className: se,
            getPopupContainer: u || h,
            dropdownClassName: b,
            showArrow: w || T,
            disabled: X,
          }
        )
      )
    );
  },
  Rt = r.forwardRef(Ha),
  Fa = fa(Rt);
Rt.SECRET_COMBOBOX_MODE_DO_NOT_USE = rr;
Rt.Option = dn;
Rt.OptGroup = un;
Rt._InternalPanelDoNotUseOrYouWillBeFired = Fa;
const Aa = Rt;
var an = {},
  Va = {
    get exports() {
      return an;
    },
    set exports(e) {
      an = e;
    },
  };
/*! For license information please see index.js.LICENSE.txt */ (function (
  e,
  t
) {
  (function (n, i) {
    e.exports = i(r);
  })($r, (o) =>
    (() => {
      var n = {
          967: function (l) {
            (function (d, v) {
              l.exports = v();
            })(0, () =>
              (() => {
                var c = {
                    d: (h, x) => {
                      for (var _ in x)
                        c.o(x, _) &&
                          !c.o(h, _) &&
                          Object.defineProperty(h, _, {
                            enumerable: !0,
                            get: x[_],
                          });
                    },
                    o: (h, x) => Object.prototype.hasOwnProperty.call(h, x),
                    r: (h) => {
                      typeof Symbol < "u" &&
                        Symbol.toStringTag &&
                        Object.defineProperty(h, Symbol.toStringTag, {
                          value: "Module",
                        }),
                        Object.defineProperty(h, "__esModule", { value: !0 });
                    },
                  },
                  d = {};
                c.r(d),
                  c.d(d, {
                    beforeCssLayout: () => p,
                    beforeFutureCssLayout: () => g,
                    frameThrower: () => S,
                    onceAnimationEnd: () => O,
                    onceNextCssLayout: () => R,
                    onceTransitionEnd: () => T,
                    recursiveAnimationFrame: () => v,
                    setCssEndEvent: () => f,
                  });
                var v = function (h, x) {
                  window && h && Number.isInteger(h) && h > 0
                    ? window.requestAnimationFrame(function () {
                        v(h - 1, x);
                      })
                    : x();
                };
                function f(h, x, _) {
                  var A = _ === void 0 ? {} : _,
                    ne = A.tolerance,
                    Z = ne === void 0 ? 0 : ne,
                    z = A.propertyName;
                  return new Promise(function (ie) {
                    var V;
                    if (h) {
                      var J = null,
                        de = x.charAt(0).toUpperCase() + x.slice(1),
                        j = 0;
                      h.style["Webkit".concat(de)] !== void 0 &&
                        (J = "webkit".concat(de, "End")),
                        ((V = h.style) === null || V === void 0
                          ? void 0
                          : V.OTransition) !== void 0 &&
                          (J = "o".concat(x, "End")),
                        h.style[x] !== void 0 && (J = "".concat(x, "end")),
                        h.clearCssEndEvent && h.clearCssEndEvent(),
                        (h.clearCssEndEvent = function () {
                          h.removeEventListener(J, ve);
                        }),
                        h.addEventListener(J, ve);
                    } else ie(!1);
                    function ve(B) {
                      if ((B.srcElement || B.target) === h) {
                        if (j >= Z) {
                          if (z && z !== B.propertyName) return;
                          h.removeEventListener(J, ve), ie(B);
                        }
                        j += 1;
                      }
                    }
                  });
                }
                function p(h) {
                  (typeof window < "u" &&
                    window != null &&
                    window.requestAnimationFrame) ||
                    h(),
                    window.requestAnimationFrame(h);
                }
                function g(h, x) {
                  (typeof window < "u" &&
                    window != null &&
                    window.requestAnimationFrame) ||
                    x(),
                    v(h + 1, x);
                }
                function S(h) {
                  return new Promise(function (x) {
                    g(h, x);
                  });
                }
                function R() {
                  return new Promise(function (h) {
                    v(2, h);
                  });
                }
                function T(h, x) {
                  return (
                    x === void 0 && (x = {}),
                    new Promise(function (_) {
                      f(h, "transition", x).then(_);
                    })
                  );
                }
                function O(h, x) {
                  return (
                    x === void 0 && (x = {}),
                    new Promise(function (_) {
                      f(h, "animation", x).then(_);
                    })
                  );
                }
                return d;
              })()
            );
          },
          251: (l, c, d) => {
            var v = d(787),
              f = Symbol.for("react.element"),
              p = Object.prototype.hasOwnProperty,
              g =
                v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                  .ReactCurrentOwner,
              S = { key: !0, ref: !0, __self: !0, __source: !0 };
            function R(T, O, h) {
              var x,
                _ = {},
                A = null,
                ne = null;
              for (x in (h !== void 0 && (A = "" + h),
              O.key !== void 0 && (A = "" + O.key),
              O.ref !== void 0 && (ne = O.ref),
              O))
                p.call(O, x) && !S.hasOwnProperty(x) && (_[x] = O[x]);
              if (T && T.defaultProps)
                for (x in (O = T.defaultProps))
                  _[x] === void 0 && (_[x] = O[x]);
              return {
                $$typeof: f,
                type: T,
                key: A,
                ref: ne,
                props: _,
                _owner: g.current,
              };
            }
            (c.jsx = R), (c.jsxs = R);
          },
          893: (l, c, d) => {
            l.exports = d(251);
          },
          787: (l) => {
            l.exports = o;
          },
        },
        i = {};
      function a(l) {
        var c = i[l];
        if (c !== void 0) return c.exports;
        var d = (i[l] = { exports: {} });
        return n[l].call(d.exports, d, d.exports, a), d.exports;
      }
      (a.d = (l, c) => {
        for (var d in c)
          a.o(c, d) &&
            !a.o(l, d) &&
            Object.defineProperty(l, d, { enumerable: !0, get: c[d] });
      }),
        (a.o = (l, c) => Object.prototype.hasOwnProperty.call(l, c)),
        (a.r = (l) => {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(l, "__esModule", { value: !0 });
        });
      var u = {};
      return (
        (() => {
          a.r(u),
            a.d(u, {
              AwesomeButton: () => _,
              AwesomeButtonProgress: () => te,
              AwesomeButtonSocial: () => de,
            });
          var l = a(893),
            c = a(787),
            d = a(967),
            v = ["middle", "left", "right"];
          function f(s, w) {
            return (
              w === void 0 && (w = "&"),
              Object.entries(s)
                .map(function (y) {
                  var E = y[0],
                    m = y[1];
                  return "".concat(E, "=").concat(m);
                })
                .join(w)
            );
          }
          function p(s, w) {
            if ((s === void 0 && (s = []), !w)) return s.join(" ").trim();
            for (var y = [], E = s.length; E--; ) w[s[E]] && y.push(w[s[E]]);
            return y.join(" ").trim();
          }
          function g(s, w) {
            return s === void 0 && (s = ""), (w && w[s]) || s;
          }
          function S(s) {
            var w,
              y = s.element,
              E = s.root,
              m = s.cssModule,
              W = m === void 0 ? null : m,
              U = s.state,
              N = U === void 0 ? null : U;
            if (
              !(
                !(
                  (w = y == null ? void 0 : y.classList) === null ||
                  w === void 0
                ) && w.remove
              )
            )
              return !1;
            if (!N)
              return (
                [
                  p(["".concat(E, "--").concat(v[0])], W),
                  p(["".concat(E, "--").concat(v[1])], W),
                  p(["".concat(E, "--").concat(v[2])], W),
                ].forEach(function (F) {
                  F && y.classList.remove(F);
                }),
                !1
              );
            for (
              var M = v.filter(function (F) {
                  return F !== N;
                }),
                P = M.length;
              P--;

            ) {
              var I = p(["".concat(E, "--").concat(M[P])], W);
              I && y.classList.remove(I);
            }
            var b = p(["".concat(E, "--").concat(N)], W);
            return b && y.classList.add(b), !0;
          }
          var R = function () {
              return (
                (R =
                  Object.assign ||
                  function (s) {
                    for (var w, y = 1, E = arguments.length; y < E; y++)
                      for (var m in (w = arguments[y]))
                        Object.prototype.hasOwnProperty.call(w, m) &&
                          (s[m] = w[m]);
                    return s;
                  }),
                R.apply(this, arguments)
              );
            },
            T = typeof window < "u",
            O =
              (T && "ontouchstart" in window) ||
              (T && navigator.maxTouchPoints > 0),
            h = c.forwardRef(function (s, w) {
              return (0, l.jsx)("a", R({ ref: w }, s));
            }),
            x = c.forwardRef(function (s, w) {
              return (0, l.jsx)("button", R({ ref: w }, s));
            });
          const _ = function (s) {
            var w = s.active,
              y = w !== void 0 && w,
              E = s.after,
              m = E === void 0 ? null : E,
              W = s.before,
              U = W === void 0 ? null : W,
              N = s.between,
              M = N !== void 0 && N,
              P = s.children,
              I = P === void 0 ? null : P,
              b = s.className,
              F = b === void 0 ? null : b,
              re = s.containerProps,
              X = re === void 0 ? {} : re,
              se = s.cssModule,
              k = se === void 0 ? null : se,
              q = s.disabled,
              le = q !== void 0 && q,
              he = s.element,
              pe = he === void 0 ? null : he,
              oe = s.extra,
              Le = oe === void 0 ? null : oe,
              He = s.href,
              be = He === void 0 ? null : He,
              ye = s.moveEvents,
              Ye = ye === void 0 || ye,
              Se = s.onMouseDown,
              De = Se === void 0 ? null : Se,
              $e = s.onMouseUp,
              we = $e === void 0 ? null : $e,
              Ie = s.onPress,
              Ge = Ie === void 0 ? null : Ie,
              Ve = s.onPressed,
              L = Ve === void 0 ? null : Ve,
              G = s.onReleased,
              Me = G === void 0 ? null : G,
              Ee = s.placeholder,
              Re = Ee === void 0 || Ee,
              Te = s.ripple,
              je = Te !== void 0 && Te,
              nt = s.rootElement,
              ge = nt === void 0 ? "aws-btn" : nt,
              Ze = s.size,
              Ue = Ze === void 0 ? null : Ze,
              xe = s.style,
              dt = xe === void 0 ? {} : xe,
              qe = s.type,
              C = qe === void 0 ? "primary" : qe,
              D = s.visible,
              $ = D === void 0 || D,
              Y = c.useState(null),
              ue = Y[0],
              Ce = Y[1],
              Fe = c.useRef(null),
              We = c.useRef(null),
              Qe = c.useRef(null),
              Ae = c.useRef(null),
              rt = c.useRef(!1),
              et = c.useRef(0),
              mt = c.useRef(null),
              Ct = c.useRef(0),
              ot = pe || (be ? h : x),
              ct = { href: be },
              pt = c.useMemo(
                function () {
                  return (Re === !0 && !I) || le;
                },
                [Re, I, le]
              );
            c.useEffect(function () {
              return (
                Fe != null &&
                  Fe.current &&
                  (Qe.current = Fe.current.parentNode),
                function () {
                  mt != null && mt.current && clearTimeout(mt.current);
                }
              );
            }, []),
              c.useEffect(
                function () {
                  ue !== null && y === !1 && wt({ force: !0 });
                },
                [y]
              );
            var ke,
              zt = function () {
                (et.current = 0), Me && Me(Qe.current);
              },
              wt = function (Q) {
                var Pe,
                  _e = Q === void 0 ? {} : Q,
                  at = _e.force,
                  ft = at !== void 0 && at,
                  vt = _e.leave,
                  Ot = vt !== void 0 && vt;
                if (
                  (S({ element: Qe.current, root: ge, cssModule: k }),
                  Ot !== !0 || et.current !== 0)
                ) {
                  var yt = y && !ft ? "".concat(ge, "--active") : null;
                  !(
                    (Pe = We == null ? void 0 : We.current) === null ||
                    Pe === void 0
                  ) &&
                    Pe.clearCssEvent &&
                    We.current.clearCssEvent(),
                    yt === null &&
                      ue != null &&
                      ue.match(/active/gim) &&
                      (0, d.setCssEndEvent)(We.current, "transition", {
                        tolerance: 1,
                      }).then(zt),
                    Ce(yt);
                }
              },
              qt = function (Q) {
                (function (_e) {
                  var at,
                    ft,
                    vt = _e.event,
                    Ot = _e.button,
                    yt = _e.content,
                    At = _e.className,
                    gt = Ot.getBoundingClientRect(),
                    ae =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      0,
                    K = document.createElement("span"),
                    Ne = gt.width < 50 ? 3 * gt.width : 2 * gt.width;
                  vt.nativeEvent instanceof TouchEvent
                    ? ((at = vt.changedTouches[0].pageX),
                      (ft = vt.changedTouches[0].pageY))
                    : ((at = vt.pageX), (ft = vt.pageY)),
                    (K.className = At),
                    (K.style.top = "-".concat(
                      Ne / 2 - (ft - gt.top - ae),
                      "px"
                    )),
                    (K.style.left = "-".concat(Ne / 2 - (at - gt.left), "px")),
                    (K.style.width = "".concat(Ne, "px")),
                    (K.style.height = "".concat(Ne, "px")),
                    (0, d.setCssEndEvent)(K, "animation").then(function () {
                      window.requestAnimationFrame(function () {
                        yt.removeChild(K);
                      });
                    }),
                    window.requestAnimationFrame(function () {
                      yt.appendChild(K);
                    });
                })({
                  event: Q,
                  button: Fe.current,
                  content: We.current,
                  className: g("".concat(ge, "__bubble"), k),
                });
              },
              Ht = function (Q) {
                pt !== !0 &&
                  et.current !== 2 &&
                  ((et.current = 1),
                  (0, d.setCssEndEvent)(We.current, "transition", {
                    tolerance: 1,
                  }).then(function () {
                    return L && L(Q);
                  }),
                  Ce("".concat(ge, "--active")));
              },
              Ft = function (Q) {
                if (pt !== !0 && et.current === 1) {
                  if (
                    (mt.current && clearTimeout(mt.current),
                    je === !0 && qt(Q),
                    T && Fe.current)
                  ) {
                    var Pe = new Event("btn-press");
                    Fe.current.dispatchEvent(Pe);
                  }
                  Qt(Q), y !== !0 ? wt() : (et.current = 2);
                }
              },
              Qt = function (Q) {
                Qe.current && Ge && Ge(Q);
              };
            return (0, l.jsx)(
              ot,
              R(
                {
                  style: dt,
                  className: c.useMemo(
                    function () {
                      var Q = [
                        ge,
                        C && "".concat(ge, "--").concat(C),
                        Ue && "".concat(ge, "--").concat(Ue),
                        $ && "".concat(ge, "--visible"),
                        M && "".concat(ge, "--between"),
                        (Re && !I && "".concat(ge, "--placeholder")) || null,
                      ];
                      return (
                        pt === !0 && Q.push("".concat(ge, "--disabled")),
                        ue && Q.push(ue),
                        F && Q.push.apply(Q, F.split(" ")),
                        k && k["aws-btn"]
                          ? p(Q, k)
                          : Q.join(" ").trim().replace(/[\s]+/gi, " ")
                      );
                    },
                    [ge, C, Ue, $, M, Re, I, pt, ue, F, k]
                  ),
                  role: "button",
                  ref: Qe,
                },
                X,
                ct,
                ((ke = {
                  onClick: function (Q) {
                    be && pt && Q.preventDefault();
                  },
                }),
                O
                  ? ((ke.onTouchStart = function (Q) {
                      var Pe, _e;
                      De && De(Q),
                        (Ct.current =
                          (_e =
                            (Pe = Q == null ? void 0 : Q.changedTouches) ===
                              null || Pe === void 0
                              ? void 0
                              : Pe[0]) === null || _e === void 0
                            ? void 0
                            : _e.clientY),
                        Ht(Q);
                    }),
                    (ke.onTouchEnd = function (Q) {
                      var Pe, _e;
                      we && we(Q),
                        (Ct.current &&
                        !(
                          (_e =
                            (Pe = Q == null ? void 0 : Q.changedTouches) ===
                              null || Pe === void 0
                              ? void 0
                              : Pe[0]) === null || _e === void 0
                        ) &&
                        _e.clientY
                          ? Math.abs(Ct.current - Q.changedTouches[0].clientY)
                          : 0) > Fe.current.offsetHeight
                          ? wt({ force: !0 })
                          : Ft(Q);
                    }),
                    ke)
                  : ((ke.onMouseLeave = function () {
                      (rt.current = !1),
                        y !== !0 || et.current === 2
                          ? wt({ leave: !0 })
                          : wt({ force: !0 });
                    }),
                    (ke.onMouseDown = function (Q) {
                      var Pe;
                      De && De(Q),
                        ((Pe = Q == null ? void 0 : Q.nativeEvent) === null ||
                        Pe === void 0
                          ? void 0
                          : Pe.button) === 0 && Ht(Q);
                    }),
                    (ke.onMouseUp = function (Q) {
                      we && we(Q), pt !== !0 ? Ft(Q) : Q.preventDefault();
                    }),
                    Ye === !0
                      ? ((ke.onMouseMove = function (Q) {
                          if (pt !== !0) {
                            rt.current = !0;
                            var Pe = Fe.current,
                              _e = Pe.getBoundingClientRect().left,
                              at = Pe.offsetWidth,
                              ft =
                                Q.pageX < _e + 0.3 * at
                                  ? "left"
                                  : Q.pageX > _e + 0.65 * at
                                  ? "right"
                                  : "middle";
                            S({
                              element: Qe.current,
                              root: ge,
                              cssModule: k,
                              state: ft,
                            });
                          }
                        }),
                        ke)
                      : ((ke.onMouseEnter = function () {
                          (rt.current = !0),
                            S({
                              element: Qe.current,
                              root: ge,
                              cssModule: k,
                              state: "middle",
                            });
                        }),
                        ke))),
                {
                  children: (0, l.jsxs)(
                    "span",
                    R(
                      { ref: Fe, className: g("".concat(ge, "__wrapper"), k) },
                      {
                        children: [
                          (0, l.jsxs)(
                            "span",
                            R(
                              {
                                ref: We,
                                className: g("".concat(ge, "__content"), k),
                              },
                              {
                                children: [
                                  U,
                                  (0, l.jsx)(
                                    "span",
                                    R({ ref: Ae }, { children: I })
                                  ),
                                  m,
                                ],
                              }
                            )
                          ),
                          Le,
                        ],
                      }
                    )
                  ),
                }
              )
            );
          };
          var A = function () {
            return (
              (A =
                Object.assign ||
                function (s) {
                  for (var w, y = 1, E = arguments.length; y < E; y++)
                    for (var m in (w = arguments[y]))
                      Object.prototype.hasOwnProperty.call(w, m) &&
                        (s[m] = w[m]);
                  return s;
                }),
              A.apply(this, arguments)
            );
          };
          function ne(s) {
            var w = s.url,
              y = s.message,
              E = s.title,
              m = s.image,
              W = s.user,
              U = s.type,
              N = s.phone,
              M = s.width,
              P = s.height,
              I = {},
              b = {};
            switch (U) {
              case "facebook":
                (b.u = encodeURIComponent(w)),
                  (I.url = "https://www.facebook.com/sharer.php?".concat(
                    f(b, "&")
                  )),
                  (I.title = "Facebook Sharer");
                break;
              case "twitter":
                (b.text = y),
                  (b.url = w),
                  (I.height = 250),
                  (I.url = "https://twitter.com/share?".concat(f(b, "&"))),
                  (I.title = "Twitter Sharer");
                break;
              case "pinterest":
                (b.url = w),
                  m && (b.media = m),
                  (I.url = "https://pinterest.com/pin/create/button/?".concat(
                    f(b, "&")
                  )),
                  (I.title = "Pinterest Sharer");
                break;
              case "google":
              case "gplus":
                (b.url = w),
                  (I.url = "https://plus.google.com/share?".concat(f(b, "&"))),
                  (I.title = "Google+ Sharer"),
                  (I.width = 400);
                break;
              case "linkedin":
                (b.mini = !0),
                  (b.url = w),
                  (b.title = y || E),
                  (I.url = "https://www.linkedin.com/shareArticle?".concat(
                    f(b, "&")
                  )),
                  (I.title = "Linkedin Sharer");
                break;
              case "reddit":
                (b.url = w),
                  (b.title = y || E),
                  (I.url = "https://www.reddit.com/submit?".concat(f(b, "&"))),
                  (I.title = ""),
                  (I.width = 850);
                break;
              case "whatsapp":
                (b.phone = N == null ? void 0 : N.replace(/\+|(|)/gim, "")),
                  (b.title = y || E),
                  (I.url = "https://api.whatsapp.com/send?".concat(f(b, "&"))),
                  (I.title = "Whatsapp Message"),
                  (I.width = 850);
                break;
              case "messenger":
                (I.url = "https://m.me/".concat(W)),
                  (I.title = "Messenger Message"),
                  (I.width = 850);
                break;
              case "mail":
                (I.url = "mailto:".concat(w)), (I.title = "_self");
                break;
              case "instagram":
                (I.url = w), (I.title = "_self");
                break;
              default:
                return I;
            }
            return (
              (I.extra = f(
                A(
                  {
                    width: "".concat(I.width || M, "px"),
                    height: "".concat(I.height || P, "px"),
                  },
                  (function (re, X) {
                    if (typeof window > "u") return { top: 0, left: 0 };
                    var se = window.screenLeft,
                      k = se === void 0 ? 0 : se,
                      q = window.screenTop,
                      le = q === void 0 ? 0 : q,
                      he = window.innerWidth,
                      pe = window.innerHeight,
                      oe =
                        he ||
                        (document.documentElement.clientWidth
                          ? document.documentElement.clientWidth
                          : 0);
                    return {
                      top:
                        (pe ||
                          (document.documentElement.clientHeight
                            ? document.documentElement.clientHeight
                            : 0)) /
                          2 -
                        X / 2 +
                        le,
                      left: oe / 2 - re / 2 + k,
                    };
                  })(I.width || M, I.height || P)
                ),
                ","
              )),
              I
            );
          }
          var Z = function () {
              return (
                (Z =
                  Object.assign ||
                  function (s) {
                    for (var w, y = 1, E = arguments.length; y < E; y++)
                      for (var m in (w = arguments[y]))
                        Object.prototype.hasOwnProperty.call(w, m) &&
                          (s[m] = w[m]);
                    return s;
                  }),
                Z.apply(this, arguments)
              );
            },
            z = {
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
          const ie = function (w) {
            var y = w.type,
              E = w.width,
              m = w.height,
              W = w.color;
            return (0, l.jsx)(
              "svg",
              Z(
                {
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "xMidYMid meet",
                  viewBox: "0 0 50 50",
                  width: E,
                  height: m,
                },
                { children: (0, l.jsx)("path", { fill: W, d: z[y] }) }
              )
            );
          };
          var V = function () {
              return (
                (V =
                  Object.assign ||
                  function (s) {
                    for (var w, y = 1, E = arguments.length; y < E; y++)
                      for (var m in (w = arguments[y]))
                        Object.prototype.hasOwnProperty.call(w, m) &&
                          (s[m] = w[m]);
                    return s;
                  }),
                V.apply(this, arguments)
              );
            },
            J = function (s, w) {
              var y = {};
              for (var E in s)
                Object.prototype.hasOwnProperty.call(s, E) &&
                  w.indexOf(E) < 0 &&
                  (y[E] = s[E]);
              if (
                s != null &&
                typeof Object.getOwnPropertySymbols == "function"
              ) {
                var m = 0;
                for (E = Object.getOwnPropertySymbols(s); m < E.length; m++)
                  w.indexOf(E[m]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, E[m]) &&
                    (y[E[m]] = s[E[m]]);
              }
              return y;
            };
          const de = function (s) {
            var w = s.onPress,
              y = w === void 0 ? null : w,
              E = s.children,
              m = E === void 0 ? null : E,
              W = s.icon,
              U = W === void 0 || W,
              N = s.sharer,
              M = N === void 0 ? {} : N,
              P = s.dimensions,
              I = P === void 0 ? { width: 640, height: 480 } : P,
              b = s.type,
              F = J(s, [
                "onPress",
                "children",
                "icon",
                "sharer",
                "dimensions",
                "type",
              ]),
              re = typeof window < "u",
              X = c.useRef(
                (function () {
                  var le;
                  return (
                    typeof navigator < "u" &&
                    ((le = navigator == null ? void 0 : navigator.userAgent) ===
                      null || le === void 0
                      ? void 0
                      : le.match(/iPhone|iPad|iPod|Android/i))
                  );
                })()
              ).current,
              se = function () {
                if (M != null && M.message) return M.message;
                if (re) {
                  var q = document.querySelector("title");
                  if (q != null && q.innerHTML) return q.innerHTML;
                }
                return null;
              },
              k = function () {
                if (M != null && M.image) return M.image;
                if (re !== null) {
                  var q = document.querySelector('meta[property="og:image"]');
                  if (q) return q.getAttribute("content");
                }
                return null;
              };
            return (0, l.jsx)(
              _,
              V(
                {
                  type: b,
                  onPress: function (q) {
                    if (y) y(q);
                    else if (!F.href) {
                      var le = ne({
                        height: I == null ? void 0 : I.height,
                        width: I == null ? void 0 : I.width,
                        url:
                          M != null && M.url
                            ? M.url
                            : re
                            ? window.location.href
                            : null,
                        message: se(),
                        image: k(),
                        type: b,
                        user: M.user,
                        phone: M.phone,
                      });
                      le != null &&
                        le.url &&
                        (navigator != null && navigator.share && X
                          ? navigator.share({
                              url: le.url,
                              text: le.text,
                              title: le.title,
                            })
                          : re && window.open(le.url, le.title, le.extra));
                    }
                  },
                },
                F,
                {
                  before: U
                    ? ie({
                        type: b,
                        width: U === !0 ? 24 : U.width || 24,
                        height: U === !0 ? 24 : U.height || 24,
                        color: F.disabled ? "rgba(255,255,255,0.35)" : "#FFF",
                      })
                    : null,
                },
                { children: m }
              )
            );
          };
          var j = function () {
              return (
                (j =
                  Object.assign ||
                  function (s) {
                    for (var w, y = 1, E = arguments.length; y < E; y++)
                      for (var m in (w = arguments[y]))
                        Object.prototype.hasOwnProperty.call(w, m) &&
                          (s[m] = w[m]);
                    return s;
                  }),
                j.apply(this, arguments)
              );
            },
            ve = function (s, w, y, E) {
              return new (y || (y = Promise))(function (m, W) {
                function U(P) {
                  try {
                    M(E.next(P));
                  } catch (I) {
                    W(I);
                  }
                }
                function N(P) {
                  try {
                    M(E.throw(P));
                  } catch (I) {
                    W(I);
                  }
                }
                function M(P) {
                  P.done
                    ? m(P.value)
                    : (function (b) {
                        return b instanceof y
                          ? b
                          : new y(function (F) {
                              F(b);
                            });
                      })(P.value).then(U, N);
                }
                M((E = E.apply(s, w || [])).next());
              });
            },
            B = function (s, w) {
              var y,
                E,
                m,
                W,
                U = {
                  label: 0,
                  sent: function () {
                    if (1 & m[0]) throw m[1];
                    return m[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (W = { next: N(0), throw: N(1), return: N(2) }),
                typeof Symbol == "function" &&
                  (W[Symbol.iterator] = function () {
                    return this;
                  }),
                W
              );
              function N(M) {
                return function (P) {
                  return (function (b) {
                    if (y)
                      throw new TypeError("Generator is already executing.");
                    for (; U; )
                      try {
                        if (
                          ((y = 1),
                          E &&
                            (m =
                              2 & b[0]
                                ? E.return
                                : b[0]
                                ? E.throw || ((m = E.return) && m.call(E), 0)
                                : E.next) &&
                            !(m = m.call(E, b[1])).done)
                        )
                          return m;
                        switch (
                          ((E = 0), m && (b = [2 & b[0], m.value]), b[0])
                        ) {
                          case 0:
                          case 1:
                            m = b;
                            break;
                          case 4:
                            return U.label++, { value: b[1], done: !1 };
                          case 5:
                            U.label++, (E = b[1]), (b = [0]);
                            continue;
                          case 7:
                            (b = U.ops.pop()), U.trys.pop();
                            continue;
                          default:
                            if (
                              ((m = U.trys),
                              !(
                                (m = m.length > 0 && m[m.length - 1]) ||
                                (b[0] !== 6 && b[0] !== 2)
                              ))
                            ) {
                              U = 0;
                              continue;
                            }
                            if (
                              b[0] === 3 &&
                              (!m || (b[1] > m[0] && b[1] < m[3]))
                            ) {
                              U.label = b[1];
                              break;
                            }
                            if (b[0] === 6 && U.label < m[1]) {
                              (U.label = m[1]), (m = b);
                              break;
                            }
                            if (m && U.label < m[2]) {
                              (U.label = m[2]), U.ops.push(b);
                              break;
                            }
                            m[2] && U.ops.pop(), U.trys.pop();
                            continue;
                        }
                        b = w.call(s, U);
                      } catch (F) {
                        (b = [6, F]), (E = 0);
                      } finally {
                        y = m = 0;
                      }
                    if (5 & b[0]) throw b[1];
                    return { value: b[0] ? b[1] : void 0, done: !0 };
                  })([M, P]);
                };
              }
            },
            H = function (s, w) {
              var y = {};
              for (var E in s)
                Object.prototype.hasOwnProperty.call(s, E) &&
                  w.indexOf(E) < 0 &&
                  (y[E] = s[E]);
              if (
                s != null &&
                typeof Object.getOwnPropertySymbols == "function"
              ) {
                var m = 0;
                for (E = Object.getOwnPropertySymbols(s); m < E.length; m++)
                  w.indexOf(E[m]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, E[m]) &&
                    (y[E[m]] = s[E[m]]);
              }
              return y;
            },
            ee = typeof window < "u";
          const te = function (s) {
            var w = s.onPress,
              y = w === void 0 ? null : w,
              E = s.rootElement,
              m = E === void 0 ? null : E,
              W = s.loadingLabel,
              U = W === void 0 ? "Wait.." : W,
              N = s.resultLabel,
              M = N === void 0 ? "Success!" : N,
              P = (s.disabled, s.cssModule),
              I = P === void 0 ? null : P,
              b = s.children,
              F = b === void 0 ? null : b,
              re = s.size,
              X = re === void 0 ? null : re,
              se = s.type,
              k = se === void 0 ? null : se,
              q = s.releaseDelay,
              le = q === void 0 ? 500 : q,
              he = H(s, [
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
              pe = m || "aws-btn",
              oe = c.useRef(null),
              Le = c.useRef(null),
              He = (function (L) {
                var G = c.useState(L),
                  Me = G[0],
                  Ee = G[1],
                  Re = c.useRef(L);
                return [
                  Me,
                  function (Te) {
                    var je = j(j({}, Re.current), Te);
                    (Re.current = je), Ee(je);
                  },
                  Re.current,
                ];
              })({
                loadingEnd: !1,
                loadingStart: !1,
                loadingError: !1,
                errorLabel: null,
                active: !1,
              }),
              be = He[1],
              ye = He[2];
            c.useEffect(function () {
              return function () {
                oe != null && oe.current && clearTimeout(oe.current);
              };
            }, []);
            var Ye,
              Se,
              De,
              $e = function (L, G) {
                L === void 0 && (L = !0),
                  G === void 0 && (G = null),
                  be({ loadingEnd: !0, loadingError: !L, errorLabel: G });
              },
              we = function () {
                oe.current = setTimeout(function () {
                  ee &&
                    (0, d.beforeFutureCssLayout)(2, function () {
                      var L;
                      (L = function () {
                        be({ loadingError: !1, errorLabel: null });
                      }),
                        be({ loadingStart: !1, loadingEnd: !1, active: !1 }),
                        (0, d.beforeFutureCssLayout)(2, L);
                    });
                }, le);
              },
              Ie = c.useCallback(
                function () {
                  be({ active: !0 });
                },
                [be]
              ),
              Ge = ye.active,
              Ve = ye.errorLabel;
            return (0, l.jsx)(
              _,
              j(
                {
                  size: X,
                  type: k,
                  className:
                    ((Ye = ye.loadingStart),
                    (Se = ye.loadingEnd),
                    (De = ye.loadingError),
                    [
                      (Ye && "".concat(pe, "--start")) || null,
                      (Se && "".concat(pe, "--end")) || null,
                      (De && "".concat(pe, "--errored")) || null,
                      "".concat(pe, "--progress"),
                    ]
                      .join(" ")
                      .trim()
                      .replace(/[\s]+/gi, " ")),
                  onPress: function (L) {
                    return ve(void 0, void 0, void 0, function () {
                      return B(this, function (G) {
                        switch (G.label) {
                          case 0:
                            return (ye == null ? void 0 : ye.loadingStart) ===
                              !0
                              ? [2]
                              : ((0, d.beforeFutureCssLayout)(4, function () {
                                  be({ loadingStart: !0 });
                                }),
                                [4, (0, d.onceTransitionEnd)(Le.current)]);
                          case 1:
                            return (
                              G.sent(),
                              y && y(L, $e),
                              (0, d.setCssEndEvent)(Le.current, "transition", {
                                tolerance: 3,
                              }).then(we),
                              [2]
                            );
                        }
                      });
                    });
                  },
                  onMouseDown: Ie,
                  cssModule: I,
                  active: Ge,
                  extra: (0, l.jsx)("span", {
                    children: (0, l.jsx)("span", {
                      ref: Le,
                      "data-loading": U || null,
                      "data-status": Ve || M || null,
                      className: g("".concat(pe, "__progress"), I),
                    }),
                  }),
                },
                he,
                { children: (0, l.jsx)("span", { children: F }) }
              )
            );
          };
        })(),
        u
      );
    })()
  );
})(Va);
var ja = Object.defineProperty,
  Wa = Object.getOwnPropertyDescriptor,
  Gt = (e, t, o, n) => {
    for (
      var i = n > 1 ? void 0 : n ? Wa(t, o) : t, a = e.length - 1, u;
      a >= 0;
      a--
    )
      (u = e[a]) && (i = (n ? u(t, o, i) : u(i)) || i);
    return n && i && ja(t, o, i), i;
  };
const Ka = ["primary", "secondary", "anchor", "danger"];
class Lt {
  constructor() {
    It(this, "type", "primary");
    It(this, "text", "button");
    It(this, "href");
    It(this, "before");
    It(this, "onMouseUp");
  }
}
Gt(
  [
    Xt(Aa, {
      options: Ka.map((e) => ({ label: e, value: e })),
      style: { width: "100%" },
    }),
  ],
  Lt.prototype,
  "type",
  2
);
Gt([Xt($n)], Lt.prototype, "text", 2);
Gt([Xt($n)], Lt.prototype, "href", 2);
Gt([Xt(Tr)], Lt.prototype, "before", 2);
const Ba = _r({
  name: "button",
  isInternal: !1,
  isContainer: !1,
  styleEditor: {
    unSupportGroups: ["Background", "Border"],
    unSupportProperties: ["color"],
  },
});
or.Props = Lt;
or.metaConfig = Ba;
function or(e) {
  const { href: t, before: o, onMouseUp: n, ...i } = e,
    a = r.useCallback(
      (l) => {
        t && window.open(t), n && n(l);
      },
      [t, n]
    ),
    u = o ? Reflect.get(Vr, o) : void 0;
  return Vt.jsx(Vt.Fragment, {
    children: Vt.jsx(an.AwesomeButton, {
      before: u ? Vt.jsx(u, {}, o) : null,
      onMouseUp: a,
      ...i,
      children: e.text,
    }),
  });
}
export { or as default };
