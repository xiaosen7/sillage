import {
  r,
  F as Se,
  d as I,
  o as G,
  _,
  l as A,
  e as k,
  ae as tt,
  af as ie,
  ag as nt,
  m as ot,
  ac as at,
  ah as rt,
  a5 as Ee,
  b as L,
  c as T,
  E as R,
  ai as le,
  B as it,
  C as lt,
  I as ct,
  aj as st,
  aa as dt,
  u as ut,
  a9 as ee,
  ak as we,
  D as ne,
  al as Ie,
  am as ft,
  an as mt,
  G as gt,
  H as Ct,
  ao as vt,
  ap as bt,
  aq as ht,
  ab as xt,
  ar as pt,
  a0 as j,
  as as yt,
  at as $t,
} from "./index-841fcd0d.js";
import {
  K as Oe,
  a as St,
  p as Et,
  C as wt,
  u as oe,
  g as X,
  I as It,
} from "./index.esm-eda47c21.js";
import { i as Ot, C as Pt, T as Rt } from "./index-f5b92b8a.js";
import { K as ce } from "./KeyCode-6413d982.js";
var Tt = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
        },
      },
    ],
  },
  name: "exclamation-circle",
  theme: "filled",
};
const Nt = Tt;
var Pe = function (t, n) {
  return r.createElement(Se, I(I({}, t), {}, { ref: n, icon: Nt }));
};
Pe.displayName = "ExclamationCircleFilled";
const Ft = r.forwardRef(Pe);
var _t = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
        },
      },
    ],
  },
  name: "info-circle",
  theme: "filled",
};
const jt = _t;
var Re = function (t, n) {
  return r.createElement(Se, I(I({}, t), {}, { ref: n, icon: jt }));
};
Re.displayName = "InfoCircleFilled";
const zt = r.forwardRef(Re),
  Bt = new Oe("antFadeIn", { "0%": { opacity: 0 }, "100%": { opacity: 1 } }),
  Mt = new Oe("antFadeOut", { "0%": { opacity: 1 }, "100%": { opacity: 0 } }),
  Ht = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const { antCls: n } = e,
      o = `${n}-fade`,
      a = t ? "&" : "";
    return [
      St(o, Bt, Mt, e.motionDurationMid, t),
      {
        [`
        ${a}${o}-enter,
        ${a}${o}-appear
      `]: { opacity: 0, animationTimingFunction: "linear" },
        [`${a}${o}-leave`]: { animationTimingFunction: "linear" },
      },
    ];
  },
  At = () => G() && window.document.documentElement;
var Te = r.createContext(null),
  se = [];
function Lt(e, t) {
  var n = r.useState(function () {
      if (!G()) return null;
      var g = document.createElement("div");
      return g;
    }),
    o = _(n, 1),
    a = o[0],
    l = r.useRef(!1),
    s = r.useContext(Te),
    d = r.useState(se),
    u = _(d, 2),
    c = u[0],
    i = u[1],
    C =
      s ||
      (l.current
        ? void 0
        : function (g) {
            i(function (v) {
              var p = [g].concat(A(v));
              return p;
            });
          });
  function f() {
    a.parentElement || document.body.appendChild(a), (l.current = !0);
  }
  function m() {
    var g;
    (g = a.parentElement) === null || g === void 0 || g.removeChild(a),
      (l.current = !1);
  }
  return (
    k(
      function () {
        return e ? (s ? s(f) : f()) : m(), m;
      },
      [e]
    ),
    k(
      function () {
        c.length &&
          (c.forEach(function (g) {
            return g();
          }),
          i(se));
      },
      [c]
    ),
    [a, C]
  );
}
var J;
function Dt(e) {
  if (typeof document > "u") return 0;
  if (e || J === void 0) {
    var t = document.createElement("div");
    (t.style.width = "100%"), (t.style.height = "200px");
    var n = document.createElement("div"),
      o = n.style;
    (o.position = "absolute"),
      (o.top = "0"),
      (o.left = "0"),
      (o.pointerEvents = "none"),
      (o.visibility = "hidden"),
      (o.width = "200px"),
      (o.height = "150px"),
      (o.overflow = "hidden"),
      n.appendChild(t),
      document.body.appendChild(n);
    var a = t.offsetWidth;
    n.style.overflow = "scroll";
    var l = t.offsetWidth;
    a === l && (l = n.clientWidth), document.body.removeChild(n), (J = a - l);
  }
  return J;
}
function Wt() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var Gt = "rc-util-locker-".concat(Date.now()),
  de = 0;
function Ut(e) {
  var t = !!e,
    n = r.useState(function () {
      return (de += 1), "".concat(Gt, "_").concat(de);
    }),
    o = _(n, 1),
    a = o[0];
  k(
    function () {
      if (t) {
        var l = Dt(),
          s = Wt();
        tt(
          `
html body {
  overflow-y: hidden;
  `.concat(
            s ? "width: calc(100% - ".concat(l, "px);") : "",
            `
}`
          ),
          a
        );
      } else ie(a);
      return function () {
        ie(a);
      };
    },
    [t, a]
  );
}
var ue = !1;
function Vt(e) {
  return typeof e == "boolean" && (ue = e), ue;
}
var fe = function (t) {
    return t === !1
      ? !1
      : !G() || !t
      ? null
      : typeof t == "string"
      ? document.querySelector(t)
      : typeof t == "function"
      ? t()
      : t;
  },
  Xt = r.forwardRef(function (e, t) {
    var n = e.open,
      o = e.autoLock,
      a = e.getContainer;
    e.debug;
    var l = e.autoDestroy,
      s = l === void 0 ? !0 : l,
      d = e.children,
      u = r.useState(n),
      c = _(u, 2),
      i = c[0],
      C = c[1],
      f = i || n;
    r.useEffect(
      function () {
        (s || n) && C(n);
      },
      [n, s]
    );
    var m = r.useState(function () {
        return fe(a);
      }),
      g = _(m, 2),
      v = g[0],
      p = g[1];
    r.useEffect(function () {
      var B = fe(a);
      p(B ?? null);
    });
    var x = Lt(f && !v),
      b = _(x, 2),
      y = b[0],
      h = b[1],
      $ = v ?? y;
    Ut(o && n && G() && ($ === y || $ === document.body));
    var S = null;
    if (d && nt(d) && t) {
      var O = d;
      S = O.ref;
    }
    var P = ot(S, t);
    if (!f || !G() || v === void 0) return null;
    var E = $ === !1 || Vt(),
      z = d;
    return (
      t && (z = r.cloneElement(d, { ref: P })),
      r.createElement(Te.Provider, { value: h }, E ? z : at.createPortal(z, $))
    );
  });
function Qt() {
  var e = I({}, rt);
  return e.useId;
}
var me = 0;
function qt(e) {
  var t = r.useState("ssr-id"),
    n = _(t, 2),
    o = n[0],
    a = n[1],
    l = Qt(),
    s = l == null ? void 0 : l();
  return (
    r.useEffect(function () {
      if (!l) {
        var d = me;
        (me += 1), a("rc_unique_".concat(d));
      }
    }, []),
    e || s || o
  );
}
function Kt(e) {
  var t = e.prefixCls,
    n = e.style,
    o = e.visible,
    a = e.maskProps,
    l = e.motionName;
  return r.createElement(
    Ee,
    {
      key: "mask",
      visible: o,
      motionName: l,
      leavedClassName: "".concat(t, "-mask-hidden"),
    },
    function (s, d) {
      var u = s.className,
        c = s.style;
      return r.createElement(
        "div",
        L(
          {
            ref: d,
            style: I(I({}, c), n),
            className: T("".concat(t, "-mask"), u),
          },
          a
        )
      );
    }
  );
}
function ge(e, t, n) {
  var o = t;
  return !o && n && (o = "".concat(e, "-").concat(n)), o;
}
function Ce(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")],
    o = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var a = e.document;
    (n = a.documentElement[o]), typeof n != "number" && (n = a.body[o]);
  }
  return n;
}
function Zt(e) {
  var t = e.getBoundingClientRect(),
    n = { left: t.left, top: t.top },
    o = e.ownerDocument,
    a = o.defaultView || o.parentWindow;
  return (n.left += Ce(a)), (n.top += Ce(a, !0)), n;
}
const Yt = r.memo(
  function (e) {
    var t = e.children;
    return t;
  },
  function (e, t) {
    var n = t.shouldUpdate;
    return !n;
  }
);
var ve = { width: 0, height: 0, overflow: "hidden", outline: "none" },
  Ne = R.forwardRef(function (e, t) {
    var n = e.prefixCls,
      o = e.className,
      a = e.style,
      l = e.title,
      s = e.ariaId,
      d = e.footer,
      u = e.closable,
      c = e.closeIcon,
      i = e.onClose,
      C = e.children,
      f = e.bodyStyle,
      m = e.bodyProps,
      g = e.modalRender,
      v = e.onMouseDown,
      p = e.onMouseUp,
      x = e.holderRef,
      b = e.visible,
      y = e.forceRender,
      h = e.width,
      $ = e.height,
      S = r.useRef(),
      O = r.useRef();
    R.useImperativeHandle(t, function () {
      return {
        focus: function () {
          var F;
          (F = S.current) === null || F === void 0 || F.focus();
        },
        changeActive: function (F) {
          var Q = document,
            W = Q.activeElement;
          F && W === O.current
            ? S.current.focus()
            : !F && W === S.current && O.current.focus();
        },
      };
    });
    var P = {};
    h !== void 0 && (P.width = h), $ !== void 0 && (P.height = $);
    var E;
    d &&
      (E = R.createElement("div", { className: "".concat(n, "-footer") }, d));
    var z;
    l &&
      (z = R.createElement(
        "div",
        { className: "".concat(n, "-header") },
        R.createElement("div", { className: "".concat(n, "-title"), id: s }, l)
      ));
    var B;
    u &&
      (B = R.createElement(
        "button",
        {
          type: "button",
          onClick: i,
          "aria-label": "Close",
          className: "".concat(n, "-close"),
        },
        c || R.createElement("span", { className: "".concat(n, "-close-x") })
      ));
    var M = R.createElement(
      "div",
      { className: "".concat(n, "-content") },
      B,
      z,
      R.createElement(
        "div",
        L({ className: "".concat(n, "-body"), style: f }, m),
        C
      ),
      E
    );
    return R.createElement(
      "div",
      {
        key: "dialog-element",
        role: "dialog",
        "aria-labelledby": l ? s : null,
        "aria-modal": "true",
        ref: x,
        style: I(I({}, a), P),
        className: T(n, o),
        onMouseDown: v,
        onMouseUp: p,
      },
      R.createElement("div", {
        tabIndex: 0,
        ref: S,
        style: ve,
        "aria-hidden": "true",
      }),
      R.createElement(Yt, { shouldUpdate: b || y }, g ? g(M) : M),
      R.createElement("div", {
        tabIndex: 0,
        ref: O,
        style: ve,
        "aria-hidden": "true",
      })
    );
  }),
  Fe = r.forwardRef(function (e, t) {
    var n = e.prefixCls,
      o = e.title,
      a = e.style,
      l = e.className,
      s = e.visible,
      d = e.forceRender,
      u = e.destroyOnClose,
      c = e.motionName,
      i = e.ariaId,
      C = e.onVisibleChanged,
      f = e.mousePosition,
      m = r.useRef(),
      g = r.useState(),
      v = _(g, 2),
      p = v[0],
      x = v[1],
      b = {};
    p && (b.transformOrigin = p);
    function y() {
      var h = Zt(m.current);
      x(f ? "".concat(f.x - h.left, "px ").concat(f.y - h.top, "px") : "");
    }
    return r.createElement(
      Ee,
      {
        visible: s,
        onVisibleChanged: C,
        onAppearPrepare: y,
        onEnterPrepare: y,
        forceRender: d,
        motionName: c,
        removeOnLeave: u,
        ref: m,
      },
      function (h, $) {
        var S = h.className,
          O = h.style;
        return r.createElement(
          Ne,
          L({}, e, {
            ref: t,
            title: o,
            ariaId: i,
            prefixCls: n,
            holderRef: $,
            style: I(I(I({}, O), a), b),
            className: T(l, S),
          })
        );
      }
    );
  });
Fe.displayName = "Content";
function Jt(e) {
  var t = e.prefixCls,
    n = t === void 0 ? "rc-dialog" : t,
    o = e.zIndex,
    a = e.visible,
    l = a === void 0 ? !1 : a,
    s = e.keyboard,
    d = s === void 0 ? !0 : s,
    u = e.focusTriggerAfterClose,
    c = u === void 0 ? !0 : u,
    i = e.wrapStyle,
    C = e.wrapClassName,
    f = e.wrapProps,
    m = e.onClose,
    g = e.afterClose,
    v = e.transitionName,
    p = e.animation,
    x = e.closable,
    b = x === void 0 ? !0 : x,
    y = e.mask,
    h = y === void 0 ? !0 : y,
    $ = e.maskTransitionName,
    S = e.maskAnimation,
    O = e.maskClosable,
    P = O === void 0 ? !0 : O,
    E = e.maskStyle,
    z = e.maskProps,
    B = e.rootClassName,
    M = r.useRef(),
    D = r.useRef(),
    F = r.useRef(),
    Q = r.useState(l),
    W = _(Q, 2),
    q = W[0],
    ae = W[1],
    qe = qt();
  function Ke() {
    le(D.current, document.activeElement) ||
      (M.current = document.activeElement);
  }
  function Ze() {
    if (!le(D.current, document.activeElement)) {
      var w;
      (w = F.current) === null || w === void 0 || w.focus();
    }
  }
  function Ye(w) {
    if (w) Ze();
    else {
      if ((ae(!1), h && M.current && c)) {
        try {
          M.current.focus({ preventScroll: !0 });
        } catch {}
        M.current = null;
      }
      q && (g == null || g());
    }
  }
  function K(w) {
    m == null || m(w);
  }
  var V = r.useRef(!1),
    Z = r.useRef(),
    Je = function () {
      clearTimeout(Z.current), (V.current = !0);
    },
    ke = function () {
      Z.current = setTimeout(function () {
        V.current = !1;
      });
    },
    re = null;
  P &&
    (re = function (Y) {
      V.current ? (V.current = !1) : D.current === Y.target && K(Y);
    });
  function et(w) {
    if (d && w.keyCode === ce.ESC) {
      w.stopPropagation(), K(w);
      return;
    }
    l && w.keyCode === ce.TAB && F.current.changeActive(!w.shiftKey);
  }
  return (
    r.useEffect(
      function () {
        l && (ae(!0), Ke());
      },
      [l]
    ),
    r.useEffect(function () {
      return function () {
        clearTimeout(Z.current);
      };
    }, []),
    r.createElement(
      "div",
      L({ className: T("".concat(n, "-root"), B) }, Et(e, { data: !0 })),
      r.createElement(Kt, {
        prefixCls: n,
        visible: h && l,
        motionName: ge(n, $, S),
        style: I({ zIndex: o }, E),
        maskProps: z,
      }),
      r.createElement(
        "div",
        L(
          {
            tabIndex: -1,
            onKeyDown: et,
            className: T("".concat(n, "-wrap"), C),
            ref: D,
            onClick: re,
            style: I(I({ zIndex: o }, i), {}, { display: q ? null : "none" }),
          },
          f
        ),
        r.createElement(
          Fe,
          L({}, e, {
            onMouseDown: Je,
            onMouseUp: ke,
            ref: F,
            closable: b,
            ariaId: qe,
            prefixCls: n,
            visible: l && q,
            onClose: K,
            onVisibleChanged: Ye,
            motionName: ge(n, v, p),
          })
        )
      )
    )
  );
}
var _e = function (t) {
  var n = t.visible,
    o = t.getContainer,
    a = t.forceRender,
    l = t.destroyOnClose,
    s = l === void 0 ? !1 : l,
    d = t.afterClose,
    u = r.useState(n),
    c = _(u, 2),
    i = c[0],
    C = c[1];
  return (
    r.useEffect(
      function () {
        n && C(!0);
      },
      [n]
    ),
    !a && s && !i
      ? null
      : r.createElement(
          Xt,
          {
            open: n || a || i,
            autoDestroy: !1,
            getContainer: o,
            autoLock: n || i,
          },
          r.createElement(
            Jt,
            L({}, t, {
              destroyOnClose: s,
              afterClose: function () {
                d == null || d(), C(!1);
              },
            })
          )
        )
  );
};
_e.displayName = "Dialog";
function be(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0,
  };
}
const kt = (e) => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
            transform: "none",
            opacity: 0,
            animationDuration: e.motionDurationSlow,
            userSelect: "none",
          },
          [`${t}-mask`]: Object.assign(Object.assign({}, be("fixed")), {
            zIndex: e.zIndexPopupBase,
            height: "100%",
            backgroundColor: e.colorBgMask,
            [`${t}-hidden`]: { display: "none" },
          }),
          [`${t}-wrap`]: Object.assign(Object.assign({}, be("fixed")), {
            overflow: "auto",
            outline: 0,
            WebkitOverflowScrolling: "touch",
          }),
        },
      },
      { [`${t}-root`]: Ht(e) },
    ];
  },
  en = (e) => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}-wrap`]: {
            zIndex: e.zIndexPopupBase,
            position: "fixed",
            inset: 0,
            overflow: "auto",
            outline: 0,
            WebkitOverflowScrolling: "touch",
          },
          [`${t}-wrap-rtl`]: { direction: "rtl" },
          [`${t}-centered`]: {
            textAlign: "center",
            "&::before": {
              display: "inline-block",
              width: 0,
              height: "100%",
              verticalAlign: "middle",
              content: '""',
            },
            [t]: {
              top: 0,
              display: "inline-block",
              paddingBottom: 0,
              textAlign: "start",
              verticalAlign: "middle",
            },
          },
          [`@media (max-width: ${e.screenSMMax})`]: {
            [t]: {
              maxWidth: "calc(100vw - 16px)",
              margin: `${e.marginXS} auto`,
            },
            [`${t}-centered`]: { [t]: { flex: 1 } },
          },
        },
      },
      {
        [t]: Object.assign(Object.assign({}, ct(e)), {
          pointerEvents: "none",
          position: "relative",
          top: 100,
          width: "auto",
          maxWidth: `calc(100vw - ${e.margin * 2}px)`,
          margin: "0 auto",
          paddingBottom: e.paddingLG,
          [`${t}-title`]: {
            margin: 0,
            color: e.modalHeadingColor,
            fontWeight: e.fontWeightStrong,
            fontSize: e.modalHeaderTitleFontSize,
            lineHeight: e.modalHeaderTitleLineHeight,
            wordWrap: "break-word",
          },
          [`${t}-content`]: {
            position: "relative",
            backgroundColor: e.modalContentBg,
            backgroundClip: "padding-box",
            border: 0,
            borderRadius: e.borderRadiusLG,
            boxShadow: e.boxShadow,
            pointerEvents: "auto",
            padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
          },
          [`${t}-close`]: Object.assign(
            {
              position: "absolute",
              top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
              insetInlineEnd:
                (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
              zIndex: e.zIndexPopupBase + 10,
              padding: 0,
              color: e.modalCloseColor,
              fontWeight: e.fontWeightStrong,
              lineHeight: 1,
              textDecoration: "none",
              background: "transparent",
              borderRadius: e.borderRadiusSM,
              width: e.modalConfirmIconSize,
              height: e.modalConfirmIconSize,
              border: 0,
              outline: 0,
              cursor: "pointer",
              transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
              "&-x": {
                display: "block",
                fontSize: e.fontSizeLG,
                fontStyle: "normal",
                lineHeight: `${e.modalCloseBtnSize}px`,
                textAlign: "center",
                textTransform: "none",
                textRendering: "auto",
              },
              "&:hover": {
                color: e.modalIconHoverColor,
                backgroundColor: e.wireframe
                  ? "transparent"
                  : e.colorFillContent,
                textDecoration: "none",
              },
              "&:active": {
                backgroundColor: e.wireframe
                  ? "transparent"
                  : e.colorFillContentHover,
              },
            },
            st(e)
          ),
          [`${t}-header`]: {
            color: e.colorText,
            background: e.modalHeaderBg,
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
            marginBottom: e.marginXS,
          },
          [`${t}-body`]: {
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            wordWrap: "break-word",
          },
          [`${t}-footer`]: {
            textAlign: "end",
            background: e.modalFooterBg,
            marginTop: e.marginSM,
            [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]:
              { marginBottom: 0, marginInlineStart: e.marginXS },
          },
          [`${t}-open`]: { overflow: "hidden" },
        }),
      },
      {
        [`${t}-pure-panel`]: {
          top: "auto",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
            display: "flex",
            flexDirection: "column",
            flex: "auto",
          },
          [`${t}-confirm-body`]: { marginBottom: "auto" },
        },
      },
    ];
  },
  tn = (e) => {
    const { componentCls: t } = e,
      n = `${t}-confirm`;
    return {
      [n]: {
        "&-rtl": { direction: "rtl" },
        [`${e.antCls}-modal-header`]: { display: "none" },
        [`${n}-body-wrapper`]: Object.assign({}, dt()),
        [`${n}-body`]: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          [`${n}-title`]: {
            flex: "0 0 100%",
            display: "block",
            overflow: "hidden",
            color: e.colorTextHeading,
            fontWeight: e.fontWeightStrong,
            fontSize: e.modalHeaderTitleFontSize,
            lineHeight: e.modalHeaderTitleLineHeight,
            [`+ ${n}-content`]: {
              marginBlockStart: e.marginXS,
              flexBasis: "100%",
              maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`,
            },
          },
          [`${n}-content`]: { color: e.colorText, fontSize: e.fontSize },
          [`> ${e.iconCls}`]: {
            flex: "none",
            marginInlineEnd: e.marginSM,
            fontSize: e.modalConfirmIconSize,
            [`+ ${n}-title`]: { flex: 1 },
            [`+ ${n}-title + ${n}-content`]: {
              marginInlineStart: e.modalConfirmIconSize + e.marginSM,
            },
          },
        },
        [`${n}-btns`]: {
          textAlign: "end",
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS,
          },
        },
      },
      [`${n}-error ${n}-body > ${e.iconCls}`]: { color: e.colorError },
      [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: { color: e.colorWarning },
      [`${n}-info ${n}-body > ${e.iconCls}`]: { color: e.colorInfo },
      [`${n}-success ${n}-body > ${e.iconCls}`]: { color: e.colorSuccess },
      [`${t}-zoom-leave ${t}-btns`]: { pointerEvents: "none" },
    };
  },
  nn = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: "rtl",
          [`${t}-confirm-body`]: { direction: "rtl" },
        },
      },
    };
  },
  on = (e) => {
    const { componentCls: t, antCls: n } = e,
      o = `${t}-confirm`;
    return {
      [t]: {
        [`${t}-content`]: { padding: 0 },
        [`${t}-header`]: {
          padding: e.modalHeaderPadding,
          borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
          marginBottom: 0,
        },
        [`${t}-body`]: { padding: e.modalBodyPadding },
        [`${t}-footer`]: {
          padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
          borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
          borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
          marginTop: 0,
        },
      },
      [o]: {
        [`${n}-modal-body`]: {
          padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`,
        },
        [`${o}-body`]: {
          [`> ${e.iconCls}`]: {
            marginInlineEnd: e.margin,
            [`+ ${o}-title + ${o}-content`]: {
              marginInlineStart: e.modalConfirmIconSize + e.margin,
            },
          },
        },
        [`${o}-btns`]: { marginTop: e.marginLG },
      },
    };
  },
  je = it("Modal", (e) => {
    const t = e.padding,
      n = e.fontSizeHeading5,
      o = e.lineHeightHeading5,
      a = lt(e, {
        modalBodyPadding: e.paddingLG,
        modalHeaderBg: e.colorBgElevated,
        modalHeaderPadding: `${t}px ${e.paddingLG}px`,
        modalHeaderBorderWidth: e.lineWidth,
        modalHeaderBorderStyle: e.lineType,
        modalHeaderTitleLineHeight: o,
        modalHeaderTitleFontSize: n,
        modalHeaderBorderColorSplit: e.colorSplit,
        modalHeaderCloseSize: o * n + t * 2,
        modalContentBg: e.colorBgElevated,
        modalHeadingColor: e.colorTextHeading,
        modalCloseColor: e.colorTextDescription,
        modalFooterBg: "transparent",
        modalFooterBorderColorSplit: e.colorSplit,
        modalFooterBorderStyle: e.lineType,
        modalFooterPaddingVertical: e.paddingXS,
        modalFooterPaddingHorizontal: e.padding,
        modalFooterBorderWidth: e.lineWidth,
        modalConfirmTitleFontSize: e.fontSizeLG,
        modalIconHoverColor: e.colorIconHover,
        modalConfirmIconSize: e.fontSize * e.lineHeight,
        modalCloseBtnSize: e.controlHeightLG * 0.55,
      });
    return [en(a), tn(a), nn(a), kt(a), e.wireframe && on(a), Ot(a, "zoom")];
  });
function he(e) {
  return !!(e && e.then);
}
const an = (e) => {
    const {
        type: t,
        children: n,
        prefixCls: o,
        buttonProps: a,
        close: l,
        autoFocus: s,
        emitEvent: d,
        quitOnNullishReturnValue: u,
        actionFn: c,
      } = e,
      i = r.useRef(!1),
      C = r.useRef(null),
      [f, m] = ut(!1),
      g = function () {
        l == null || l.apply(void 0, arguments);
      };
    r.useEffect(() => {
      let x = null;
      return (
        s &&
          (x = setTimeout(() => {
            var b;
            (b = C.current) === null || b === void 0 || b.focus();
          })),
        () => {
          x && clearTimeout(x);
        }
      );
    }, []);
    const v = (x) => {
        he(x) &&
          (m(!0),
          x.then(
            function () {
              g.apply(void 0, arguments), (i.current = !1);
            },
            (b) => (m(!1, !0), (i.current = !1), Promise.reject(b))
          ));
      },
      p = (x) => {
        if (i.current) return;
        if (((i.current = !0), !c)) {
          g();
          return;
        }
        let b;
        if (d) {
          if (((b = c(x)), u && !he(b))) {
            (i.current = !1), g(x);
            return;
          }
        } else if (c.length) (b = c(l)), (i.current = !1);
        else if (((b = c()), !b)) {
          g();
          return;
        }
        v(b);
      };
    return r.createElement(
      ee,
      Object.assign({}, we(t), { onClick: p, loading: f, prefixCls: o }, a, {
        ref: C,
      }),
      n
    );
  },
  xe = an;
var rn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
function ze(e, t) {
  return r.createElement(
    "span",
    { className: `${e}-close-x` },
    t || r.createElement(wt, { className: `${e}-close-icon` })
  );
}
const Be = (e) => {
    const {
        okText: t,
        okType: n = "primary",
        cancelText: o,
        confirmLoading: a,
        onOk: l,
        onCancel: s,
        okButtonProps: d,
        cancelButtonProps: u,
        footer: c,
      } = e,
      [i] = oe("Modal", Ie());
    return c === void 0
      ? r.createElement(
          r.Fragment,
          null,
          r.createElement(
            ee,
            Object.assign({ onClick: s }, u),
            o || (i == null ? void 0 : i.cancelText)
          ),
          r.createElement(
            ee,
            Object.assign({}, we(n), { loading: a, onClick: l }, d),
            t || (i == null ? void 0 : i.okText)
          )
        )
      : c;
  },
  ln = (e) => {
    const {
        prefixCls: t,
        className: n,
        closeIcon: o,
        closable: a,
        type: l,
        title: s,
        children: d,
      } = e,
      u = rn(e, [
        "prefixCls",
        "className",
        "closeIcon",
        "closable",
        "type",
        "title",
        "children",
      ]),
      { getPrefixCls: c } = r.useContext(ne),
      i = c(),
      C = t || c("modal"),
      [, f] = je(C),
      m = `${C}-confirm`;
    let g = {};
    return (
      l
        ? (g = {
            closable: a ?? !1,
            title: "",
            footer: "",
            children: r.createElement(
              He,
              Object.assign({}, e, {
                confirmPrefixCls: m,
                rootPrefixCls: i,
                content: d,
              })
            ),
          })
        : (g = {
            closable: a ?? !0,
            title: s,
            footer:
              e.footer === null
                ? e.footer
                : r.createElement(Be, Object.assign({}, e)),
            children: d,
          }),
      r.createElement(
        Ne,
        Object.assign(
          {
            prefixCls: C,
            className: T(f, `${C}-pure-panel`, l && m, l && `${m}-${l}`, n),
          },
          u,
          { closeIcon: ze(C, o), closable: a },
          g
        )
      )
    );
  },
  cn = ln;
var sn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
let te;
const dn = (e) => {
  (te = { x: e.pageX, y: e.pageY }),
    setTimeout(() => {
      te = null;
    }, 100);
};
At() && document.documentElement.addEventListener("click", dn, !0);
const un = (e) => {
    var t;
    const {
        getPopupContainer: n,
        getPrefixCls: o,
        direction: a,
      } = r.useContext(ne),
      l = (P) => {
        const { onCancel: E } = e;
        E == null || E(P);
      },
      s = (P) => {
        const { onOk: E } = e;
        E == null || E(P);
      },
      {
        prefixCls: d,
        className: u,
        rootClassName: c,
        open: i,
        wrapClassName: C,
        centered: f,
        getContainer: m,
        closeIcon: g,
        focusTriggerAfterClose: v = !0,
        visible: p,
        width: x = 520,
      } = e,
      b = sn(e, [
        "prefixCls",
        "className",
        "rootClassName",
        "open",
        "wrapClassName",
        "centered",
        "getContainer",
        "closeIcon",
        "focusTriggerAfterClose",
        "visible",
        "width",
      ]),
      y = o("modal", d),
      h = o(),
      [$, S] = je(y),
      O = T(C, { [`${y}-centered`]: !!f, [`${y}-wrap-rtl`]: a === "rtl" });
    return $(
      r.createElement(
        ft,
        null,
        r.createElement(
          mt,
          { status: !0, override: !0 },
          r.createElement(
            _e,
            Object.assign({ width: x }, b, {
              getContainer: m === void 0 ? n : m,
              prefixCls: y,
              rootClassName: T(S, c),
              wrapClassName: O,
              footer:
                e.footer === null
                  ? e.footer
                  : r.createElement(
                      Be,
                      Object.assign({}, e, { onOk: s, onCancel: l })
                    ),
              visible: i ?? p,
              mousePosition:
                (t = b.mousePosition) !== null && t !== void 0 ? t : te,
              onClose: l,
              closeIcon: ze(y, g),
              focusTriggerAfterClose: v,
              transitionName: X(h, "zoom", e.transitionName),
              maskTransitionName: X(h, "fade", e.maskTransitionName),
              className: T(S, u),
            })
          )
        )
      )
    );
  },
  Me = un;
function He(e) {
  const {
    icon: t,
    onCancel: n,
    onOk: o,
    close: a,
    okText: l,
    okButtonProps: s,
    cancelText: d,
    cancelButtonProps: u,
    confirmPrefixCls: c,
    rootPrefixCls: i,
    type: C,
    okCancel: f,
    footer: m,
    locale: g,
  } = e;
  let v = t;
  if (!t && t !== null)
    switch (C) {
      case "info":
        v = r.createElement(zt, null);
        break;
      case "success":
        v = r.createElement(Pt, null);
        break;
      case "error":
        v = r.createElement(gt, null);
        break;
      default:
        v = r.createElement(Ft, null);
    }
  const p = e.okType || "primary",
    x = f ?? C === "confirm",
    b = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok",
    [y] = oe("Modal"),
    h = g || y,
    $ =
      x &&
      r.createElement(
        xe,
        {
          actionFn: n,
          close: a,
          autoFocus: b === "cancel",
          buttonProps: u,
          prefixCls: `${i}-btn`,
        },
        d || (h == null ? void 0 : h.cancelText)
      );
  return r.createElement(
    "div",
    { className: `${c}-body-wrapper` },
    r.createElement(
      "div",
      { className: `${c}-body` },
      v,
      e.title === void 0
        ? null
        : r.createElement("span", { className: `${c}-title` }, e.title),
      r.createElement("div", { className: `${c}-content` }, e.content)
    ),
    m !== void 0
      ? m
      : r.createElement(
          "div",
          { className: `${c}-btns` },
          $,
          r.createElement(
            xe,
            {
              type: p,
              actionFn: o,
              close: a,
              autoFocus: b === "ok",
              buttonProps: s,
              prefixCls: `${i}-btn`,
            },
            l ||
              (x
                ? h == null
                  ? void 0
                  : h.okText
                : h == null
                ? void 0
                : h.justOkText)
          )
        )
  );
}
const Ae = (e) => {
    const {
        close: t,
        zIndex: n,
        afterClose: o,
        visible: a,
        open: l,
        keyboard: s,
        centered: d,
        getContainer: u,
        maskStyle: c,
        direction: i,
        prefixCls: C,
        wrapClassName: f,
        rootPrefixCls: m,
        iconPrefixCls: g,
        bodyStyle: v,
        closable: p = !1,
        closeIcon: x,
        modalRender: b,
        focusTriggerAfterClose: y,
      } = e,
      h = `${C}-confirm`,
      $ = e.width || 416,
      S = e.style || {},
      O = e.mask === void 0 ? !0 : e.mask,
      P = e.maskClosable === void 0 ? !1 : e.maskClosable,
      E = T(h, `${h}-${e.type}`, { [`${h}-rtl`]: i === "rtl" }, e.className);
    return r.createElement(
      Ct,
      { prefixCls: m, iconPrefixCls: g, direction: i },
      r.createElement(
        Me,
        {
          prefixCls: C,
          className: E,
          wrapClassName: T({ [`${h}-centered`]: !!e.centered }, f),
          onCancel: () => (t == null ? void 0 : t({ triggerCancel: !0 })),
          open: l,
          title: "",
          footer: "",
          transitionName: X(m, "zoom", e.transitionName),
          maskTransitionName: X(m, "fade", e.maskTransitionName),
          mask: O,
          maskClosable: P,
          maskStyle: c,
          style: S,
          bodyStyle: v,
          width: $,
          zIndex: n,
          afterClose: o,
          keyboard: s,
          centered: d,
          getContainer: u,
          closable: p,
          closeIcon: x,
          modalRender: b,
          focusTriggerAfterClose: y,
        },
        r.createElement(He, Object.assign({}, e, { confirmPrefixCls: h }))
      )
    );
  },
  fn = [],
  H = fn;
var mn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        t.indexOf(o) < 0 &&
        (n[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, o = Object.getOwnPropertySymbols(e); a < o.length; a++)
        t.indexOf(o[a]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
          (n[o[a]] = e[o[a]]);
    return n;
  };
let Le = "";
function gn() {
  return Le;
}
function U(e) {
  const t = document.createDocumentFragment();
  let n = Object.assign(Object.assign({}, e), { close: s, open: !0 }),
    o;
  function a() {
    for (var u = arguments.length, c = new Array(u), i = 0; i < u; i++)
      c[i] = arguments[i];
    const C = c.some((f) => f && f.triggerCancel);
    e.onCancel && C && e.onCancel.apply(e, [() => {}].concat(A(c.slice(1))));
    for (let f = 0; f < H.length; f++)
      if (H[f] === s) {
        H.splice(f, 1);
        break;
      }
    vt(t);
  }
  function l(u) {
    var { okText: c, cancelText: i, prefixCls: C } = u,
      f = mn(u, ["okText", "cancelText", "prefixCls"]);
    clearTimeout(o),
      (o = setTimeout(() => {
        const m = Ie(),
          { getPrefixCls: g, getIconPrefixCls: v } = ht(),
          p = g(void 0, gn()),
          x = C || `${p}-modal`,
          b = v();
        bt(
          r.createElement(
            Ae,
            Object.assign({}, f, {
              prefixCls: x,
              rootPrefixCls: p,
              iconPrefixCls: b,
              okText: c,
              locale: m,
              cancelText: i || m.cancelText,
            })
          ),
          t
        );
      }));
  }
  function s() {
    for (var u = arguments.length, c = new Array(u), i = 0; i < u; i++)
      c[i] = arguments[i];
    (n = Object.assign(Object.assign({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), a.apply(this, c);
      },
    })),
      n.visible && delete n.visible,
      l(n);
  }
  function d(u) {
    typeof u == "function"
      ? (n = u(n))
      : (n = Object.assign(Object.assign({}, n), u)),
      l(n);
  }
  return l(n), H.push(s), { destroy: s, update: d };
}
function De(e) {
  return Object.assign(Object.assign({}, e), { type: "warning" });
}
function We(e) {
  return Object.assign(Object.assign({}, e), { type: "info" });
}
function Ge(e) {
  return Object.assign(Object.assign({}, e), { type: "success" });
}
function Ue(e) {
  return Object.assign(Object.assign({}, e), { type: "error" });
}
function Ve(e) {
  return Object.assign(Object.assign({}, e), { type: "confirm" });
}
function Cn(e) {
  let { rootPrefixCls: t } = e;
  Le = t;
}
function vn() {
  const [e, t] = r.useState([]),
    n = r.useCallback(
      (o) => (
        t((a) => [].concat(A(a), [o])),
        () => {
          t((a) => a.filter((l) => l !== o));
        }
      ),
      []
    );
  return [e, n];
}
const bn = (e, t) => {
    let { afterClose: n, config: o } = e;
    var a;
    const [l, s] = r.useState(!0),
      [d, u] = r.useState(o),
      { direction: c, getPrefixCls: i } = r.useContext(ne),
      C = i("modal"),
      f = i(),
      m = function () {
        s(!1);
        for (var p = arguments.length, x = new Array(p), b = 0; b < p; b++)
          x[b] = arguments[b];
        const y = x.some((h) => h && h.triggerCancel);
        d.onCancel &&
          y &&
          d.onCancel.apply(d, [() => {}].concat(A(x.slice(1))));
      };
    r.useImperativeHandle(t, () => ({
      destroy: m,
      update: (p) => {
        u((x) => Object.assign(Object.assign({}, x), p));
      },
    }));
    const g =
        (a = d.okCancel) !== null && a !== void 0 ? a : d.type === "confirm",
      [v] = oe("Modal", xt.Modal);
    return r.createElement(
      Ae,
      Object.assign({ prefixCls: C, rootPrefixCls: f }, d, {
        close: m,
        open: l,
        afterClose: n,
        okText:
          d.okText ||
          (g
            ? v == null
              ? void 0
              : v.okText
            : v == null
            ? void 0
            : v.justOkText),
        direction: c,
        cancelText: d.cancelText || (v == null ? void 0 : v.cancelText),
      })
    );
  },
  hn = r.forwardRef(bn);
let pe = 0;
const xn = r.memo(
  r.forwardRef((e, t) => {
    const [n, o] = vn();
    return (
      r.useImperativeHandle(t, () => ({ patchElement: o }), []),
      r.createElement(r.Fragment, null, n)
    );
  })
);
function pn() {
  const e = r.useRef(null),
    [t, n] = r.useState([]);
  r.useEffect(() => {
    t.length &&
      (A(t).forEach((s) => {
        s();
      }),
      n([]));
  }, [t]);
  const o = r.useCallback(
    (l) =>
      function (d) {
        var u;
        pe += 1;
        const c = r.createRef();
        let i;
        const C = r.createElement(hn, {
          key: `modal-${pe}`,
          config: l(d),
          ref: c,
          afterClose: () => {
            i == null || i();
          },
        });
        return (
          (i =
            (u = e.current) === null || u === void 0
              ? void 0
              : u.patchElement(C)),
          i && H.push(i),
          {
            destroy: () => {
              function f() {
                var m;
                (m = c.current) === null || m === void 0 || m.destroy();
              }
              c.current ? f() : n((m) => [].concat(A(m), [f]));
            },
            update: (f) => {
              function m() {
                var g;
                (g = c.current) === null || g === void 0 || g.update(f);
              }
              c.current ? m() : n((g) => [].concat(A(g), [m]));
            },
          }
        );
      },
    []
  );
  return [
    r.useMemo(
      () => ({
        info: o(We),
        success: o(Ge),
        error: o(Ue),
        warning: o(De),
        confirm: o(Ve),
      }),
      []
    ),
    r.createElement(xn, { key: "modal-holder", ref: e }),
  ];
}
function Xe(e) {
  return U(De(e));
}
const N = Me;
N.useModal = pn;
N.info = function (t) {
  return U(We(t));
};
N.success = function (t) {
  return U(Ge(t));
};
N.error = function (t) {
  return U(Ue(t));
};
N.warning = Xe;
N.warn = Xe;
N.confirm = function (t) {
  return U(Ve(t));
};
N.destroyAll = function () {
  for (; H.length; ) {
    const t = H.pop();
    t && t();
  }
};
N.config = Cn;
N._InternalPanelDoNotUseOrYouWillBeFired = cn;
const yn = N;
function $n(e) {
  return e.toLowerCase();
}
var Sn = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  En = /[^A-Z0-9]+/gi;
function wn(e, t) {
  t === void 0 && (t = {});
  for (
    var n = t.splitRegexp,
      o = n === void 0 ? Sn : n,
      a = t.stripRegexp,
      l = a === void 0 ? En : a,
      s = t.transform,
      d = s === void 0 ? $n : s,
      u = t.delimiter,
      c = u === void 0 ? " " : u,
      i = ye(ye(e, o, "$1\0$2"), l, "\0"),
      C = 0,
      f = i.length;
    i.charAt(C) === "\0";

  )
    C++;
  for (; i.charAt(f - 1) === "\0"; ) f--;
  return i.slice(C, f).split("\0").map(d).join(c);
}
function ye(e, t, n) {
  return t instanceof RegExp
    ? e.replace(t, n)
    : t.reduce(function (o, a) {
        return o.replace(a, n);
      }, e);
}
function In(e) {
  return e.charAt(0).toUpperCase() + e.substr(1);
}
function On(e) {
  return In(e.toLowerCase());
}
function Qe(e, t) {
  return (
    t === void 0 && (t = {}), wn(e, pt({ delimiter: " ", transform: On }, t))
  );
}
const $e = {
  "icon-list": "_icon-list_1xpln_1",
  "icon-list__item": "_icon-list__item_1xpln_11",
};
function jn(e) {
  const [t, n] = r.useState(!1),
    [o, a] = r.useState(""),
    l = () => {
      n(!0);
    },
    s = () => {
      n(!1);
    },
    d = Pn(),
    u = r.useCallback(
      (c) => {
        e.onChange(c), s();
      },
      [e]
    );
  return j.jsxs("div", {
    children: [
      j.jsx(yt, {
        before: e.value,
        type: "secondary",
        text: e.value ? Qe(e.value) : "choose an icon",
        onMouseUp: l,
      }),
      j.jsxs(yn, {
        title: "Please choose an icon",
        open: t,
        onCancel: s,
        footer: null,
        children: [
          j.jsx($t, {
            className: "mb-4",
            value: o,
            onChange: (c) => a(c.target.value),
            placeholder: "search icon",
            autoFocus: !0,
          }),
          j.jsx("ul", {
            className: $e["icon-list"],
            children: d
              .filter(Rn(o))
              .map(({ name: c, Icon: i }) =>
                j.jsx(
                  "li",
                  {
                    onClick: () => u(i.name),
                    className: $e["icon-list__item"],
                    children: j.jsx(Rt, {
                      title: c,
                      children: j.jsx("span", { children: j.jsx(i, {}) }),
                    }),
                  },
                  c
                )
              ),
          }),
        ],
      }),
    ],
  });
}
function Pn() {
  const e = [];
  for (const [t, n] of Object.entries(It))
    t.endsWith("Icon") && e.push({ name: Qe(t), Icon: n });
  return e;
}
function Rn(e) {
  const t = new RegExp(e, "i");
  return ({ name: n }) => t.test(n);
}
export { jn as default };
