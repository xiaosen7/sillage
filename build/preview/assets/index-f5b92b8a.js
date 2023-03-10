import {
  r as u,
  F as Pt,
  d as rt,
  c as B,
  a as zt,
  h as It,
  b as Nt,
  B as kt,
  C as dt,
  I as Bt,
  l as it,
  D as bt,
  T as ht,
  au as yt,
  av as Dt,
  aw as at,
  ax as Et,
  ay as Rt,
  az as Lt,
  aA as lt,
  A as Mt,
  n as Vt,
  a8 as Xt,
  aB as Ft,
  a7 as vt,
} from "./index-841fcd0d.js";
import { K as v, a as Ht, T as Zt, g as Kt } from "./index.esm-eda47c21.js";
const Z = [
    "blue",
    "purple",
    "cyan",
    "green",
    "magenta",
    "pink",
    "red",
    "orange",
    "yellow",
    "volcano",
    "geekblue",
    "lime",
    "gold",
  ],
  Wt = (e, t, o, r, n) => {
    const a = e / 2,
      s = 0,
      i = a,
      l = (o * 1) / Math.sqrt(2),
      c = a - o * (1 - 1 / Math.sqrt(2)),
      m = a - t * (1 / Math.sqrt(2)),
      f = o * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      b = 2 * a - m,
      p = f,
      O = 2 * a - l,
      P = c,
      D = 2 * a - s,
      z = i,
      I = a * Math.sqrt(2) + o * (Math.sqrt(2) - 2);
    return {
      borderRadius: { _skip_check_: !0, value: `0 0 ${t}px` },
      pointerEvents: "none",
      width: e,
      height: e,
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: e,
        height: e / 2,
        background: r,
        clipPath: `path('M ${s} ${i} A ${o} ${o} 0 0 0 ${l} ${c} L ${m} ${f} A ${t} ${t} 0 0 1 ${b} ${p} L ${O} ${P} A ${o} ${o} 0 0 0 ${D} ${z} Z')`,
        content: '""',
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: I,
        height: I,
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow: n,
        zIndex: 0,
        background: "transparent",
      },
    };
  };
function Yt(e, t) {
  return Z.reduce((o, r) => {
    const n = e[`${r}-1`],
      a = e[`${r}-3`],
      s = e[`${r}-6`],
      i = e[`${r}-7`];
    return Object.assign(
      Object.assign({}, o),
      t(r, { lightColor: n, lightBorderColor: a, darkColor: s, textColor: i })
    );
  }, {});
}
var Ut = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
        },
      },
    ],
  },
  name: "check-circle",
  theme: "filled",
};
const qt = Ut;
var wt = function (t, o) {
  return u.createElement(Pt, rt(rt({}, t), {}, { ref: o, icon: qt }));
};
wt.displayName = "CheckCircleFilled";
const De = u.forwardRef(wt),
  Gt = new v("antZoomIn", {
    "0%": { transform: "scale(0.2)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  Qt = new v("antZoomOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.2)", opacity: 0 },
  }),
  ct = new v("antZoomBigIn", {
    "0%": { transform: "scale(0.8)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  }),
  ft = new v("antZoomBigOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.8)", opacity: 0 },
  }),
  Jt = new v("antZoomUpIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 0%" },
  }),
  te = new v("antZoomUpOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 0%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 },
  }),
  ee = new v("antZoomLeftIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "0% 50%" },
  }),
  oe = new v("antZoomLeftOut", {
    "0%": { transform: "scale(1)", transformOrigin: "0% 50%" },
    "100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 },
  }),
  re = new v("antZoomRightIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "100% 50%" },
  }),
  ne = new v("antZoomRightOut", {
    "0%": { transform: "scale(1)", transformOrigin: "100% 50%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0,
    },
  }),
  ae = new v("antZoomDownIn", {
    "0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 },
    "100%": { transform: "scale(1)", transformOrigin: "50% 100%" },
  }),
  se = new v("antZoomDownOut", {
    "0%": { transform: "scale(1)", transformOrigin: "50% 100%" },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0,
    },
  }),
  ie = {
    zoom: { inKeyframes: Gt, outKeyframes: Qt },
    "zoom-big": { inKeyframes: ct, outKeyframes: ft },
    "zoom-big-fast": { inKeyframes: ct, outKeyframes: ft },
    "zoom-left": { inKeyframes: ee, outKeyframes: oe },
    "zoom-right": { inKeyframes: re, outKeyframes: ne },
    "zoom-up": { inKeyframes: Jt, outKeyframes: te },
    "zoom-down": { inKeyframes: ae, outKeyframes: se },
  },
  le = (e, t) => {
    const { antCls: o } = e,
      r = `${o}-${t}`,
      { inKeyframes: n, outKeyframes: a } = ie[t];
    return [
      Ht(
        r,
        n,
        a,
        t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: "scale(0)",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          "&-prepare": { transform: "none" },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  };
var h = { adjustX: 1, adjustY: 1 },
  y = [0, 0],
  nt = {
    left: {
      points: ["cr", "cl"],
      overflow: h,
      offset: [-4, 0],
      targetOffset: y,
    },
    right: {
      points: ["cl", "cr"],
      overflow: h,
      offset: [4, 0],
      targetOffset: y,
    },
    top: {
      points: ["bc", "tc"],
      overflow: h,
      offset: [0, -4],
      targetOffset: y,
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: h,
      offset: [0, 4],
      targetOffset: y,
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: h,
      offset: [0, -4],
      targetOffset: y,
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: h,
      offset: [-4, 0],
      targetOffset: y,
    },
    topRight: {
      points: ["br", "tr"],
      overflow: h,
      offset: [0, -4],
      targetOffset: y,
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: h,
      offset: [4, 0],
      targetOffset: y,
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: h,
      offset: [0, 4],
      targetOffset: y,
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: h,
      offset: [4, 0],
      targetOffset: y,
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: h,
      offset: [0, 4],
      targetOffset: y,
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: h,
      offset: [-4, 0],
      targetOffset: y,
    },
  };
function Ot(e) {
  var t = e.showArrow,
    o = e.arrowContent,
    r = e.children,
    n = e.prefixCls,
    a = e.id,
    s = e.overlayInnerStyle,
    i = e.className,
    l = e.style;
  return u.createElement(
    "div",
    { className: B("".concat(n, "-content"), i), style: l },
    t !== !1 &&
      u.createElement(
        "div",
        { className: "".concat(n, "-arrow"), key: "arrow" },
        o
      ),
    u.createElement(
      "div",
      { className: "".concat(n, "-inner"), id: a, role: "tooltip", style: s },
      typeof r == "function" ? r() : r
    )
  );
}
var ce = [
    "overlayClassName",
    "trigger",
    "mouseEnterDelay",
    "mouseLeaveDelay",
    "overlayStyle",
    "prefixCls",
    "children",
    "onVisibleChange",
    "afterVisibleChange",
    "transitionName",
    "animation",
    "motion",
    "placement",
    "align",
    "destroyTooltipOnHide",
    "defaultVisible",
    "getTooltipContainer",
    "overlayInnerStyle",
    "arrowContent",
    "overlay",
    "id",
    "showArrow",
  ],
  fe = function (t, o) {
    var r = t.overlayClassName,
      n = t.trigger,
      a = n === void 0 ? ["hover"] : n,
      s = t.mouseEnterDelay,
      i = s === void 0 ? 0 : s,
      l = t.mouseLeaveDelay,
      c = l === void 0 ? 0.1 : l,
      m = t.overlayStyle,
      f = t.prefixCls,
      b = f === void 0 ? "rc-tooltip" : f,
      p = t.children,
      O = t.onVisibleChange,
      P = t.afterVisibleChange,
      D = t.transitionName,
      z = t.animation,
      I = t.motion,
      L = t.placement,
      K = L === void 0 ? "right" : L,
      N = t.align,
      W = N === void 0 ? {} : N,
      E = t.destroyTooltipOnHide,
      _ = E === void 0 ? !1 : E,
      Y = t.defaultVisible,
      U = t.getTooltipContainer,
      q = t.overlayInnerStyle,
      G = t.arrowContent,
      Q = t.overlay,
      J = t.id,
      M = t.showArrow,
      tt = M === void 0 ? !0 : M,
      C = zt(t, ce),
      V = u.useRef(null);
    u.useImperativeHandle(o, function () {
      return V.current;
    });
    var X = rt({}, C);
    "visible" in t && (X.popupVisible = t.visible);
    var R = function () {
        return u.createElement(
          Ot,
          {
            showArrow: tt,
            arrowContent: G,
            key: "content",
            prefixCls: b,
            id: J,
            overlayInnerStyle: q,
          },
          Q
        );
      },
      x = !1,
      j = !1;
    if (typeof _ == "boolean") x = _;
    else if (_ && It(_) === "object") {
      var F = _.keepParent;
      (x = F === !0), (j = F === !1);
    }
    return u.createElement(
      Zt,
      Nt(
        {
          popupClassName: r,
          prefixCls: b,
          popup: R,
          action: a,
          builtinPlacements: nt,
          popupPlacement: K,
          ref: V,
          popupAlign: W,
          getPopupContainer: U,
          onPopupVisibleChange: O,
          afterPopupVisibleChange: P,
          popupTransitionName: D,
          popupAnimation: z,
          popupMotion: I,
          defaultPopupVisible: Y,
          destroyPopupOnHide: x,
          autoDestroy: j,
          mouseLeaveDelay: c,
          popupStyle: m,
          mouseEnterDelay: i,
        },
        X
      ),
      p
    );
  };
const me = u.forwardRef(fe),
  ue = { adjustX: 1, adjustY: 1 },
  mt = { adjustX: 0, adjustY: 0 },
  pe = [0, 0];
function ut(e) {
  return typeof e == "boolean"
    ? e
      ? ue
      : mt
    : Object.assign(Object.assign({}, mt), e);
}
function pt(e, t, o) {
  switch (e) {
    case "top":
    case "topLeft":
    case "topRight":
      return [0, -(t / 2 + o)];
    case "bottom":
    case "bottomLeft":
    case "bottomRight":
      return [0, t / 2 + o];
    case "left":
    case "leftTop":
    case "leftBottom":
      return [-(t / 2 + o), 0];
    case "right":
    case "rightTop":
    case "rightBottom":
      return [t / 2 + o, 0];
    default:
      return [0, 0];
  }
}
function gt(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function ge(e) {
  const {
      arrowWidth: t,
      horizontalArrowShift: o = 16,
      verticalArrowShift: r = 8,
      autoAdjustOverflow: n,
      arrowPointAtCenter: a,
      offset: s,
    } = e,
    i = t / 2,
    l = {
      left: { points: ["cr", "cl"], offset: [-s, 0] },
      right: { points: ["cl", "cr"], offset: [s, 0] },
      top: { points: ["bc", "tc"], offset: [0, -s] },
      bottom: { points: ["tc", "bc"], offset: [0, s] },
      topLeft: { points: ["bl", "tc"], offset: [-(o + i), -s] },
      leftTop: { points: ["tr", "cl"], offset: [-s, -(r + i)] },
      topRight: { points: ["br", "tc"], offset: [o + i, -s] },
      rightTop: { points: ["tl", "cr"], offset: [s, -(r + i)] },
      bottomRight: { points: ["tr", "bc"], offset: [o + i, s] },
      rightBottom: { points: ["bl", "cr"], offset: [s, r + i] },
      bottomLeft: { points: ["tl", "bc"], offset: [-(o + i), s] },
      leftBottom: { points: ["br", "cl"], offset: [-s, r + i] },
    };
  return (
    Object.keys(l).forEach((c) => {
      (l[c] = a
        ? Object.assign(Object.assign({}, l[c]), {
            offset: gt(l[c].offset, pt(c, t, s)),
            overflow: ut(n),
            targetOffset: pe,
          })
        : Object.assign(Object.assign({}, nt[c]), {
            offset: gt(nt[c].offset, pt(c, t, s)),
            overflow: ut(n),
          })),
        (l[c].ignoreShake = !0);
    }),
    l
  );
}
const Ct = 8;
function de(e) {
  const t = Ct,
    { contentRadius: o, limitVerticalRadius: r } = e,
    n = o > 12 ? o + 2 : 12;
  return { dropdownArrowOffset: n, dropdownArrowOffsetVertical: r ? t : n };
}
function H(e, t) {
  return e ? t : {};
}
function be(e, t) {
  const {
      componentCls: o,
      sizePopupArrow: r,
      borderRadiusXS: n,
      borderRadiusOuter: a,
      boxShadowPopoverArrow: s,
    } = e,
    {
      colorBg: i,
      contentRadius: l = e.borderRadiusLG,
      limitVerticalRadius: c,
      arrowDistance: m = 0,
      arrowPlacement: f = { left: !0, right: !0, top: !0, bottom: !0 },
    } = t,
    { dropdownArrowOffsetVertical: b, dropdownArrowOffset: p } = de({
      contentRadius: l,
      limitVerticalRadius: c,
    });
  return {
    [o]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${o}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: "absolute", zIndex: 1, display: "block" },
                    Wt(r, n, a, i, s)
                  ),
                  { "&:before": { background: i } }
                ),
              ],
            },
            H(!!f.top, {
              [[
                `&-placement-top ${o}-arrow`,
                `&-placement-topLeft ${o}-arrow`,
                `&-placement-topRight ${o}-arrow`,
              ].join(",")]: {
                bottom: m,
                transform: "translateY(100%) rotate(180deg)",
              },
              [`&-placement-top ${o}-arrow`]: {
                left: { _skip_check_: !0, value: "50%" },
                transform: "translateX(-50%) translateY(100%) rotate(180deg)",
              },
              [`&-placement-topLeft ${o}-arrow`]: {
                left: { _skip_check_: !0, value: p },
              },
              [`&-placement-topRight ${o}-arrow`]: {
                right: { _skip_check_: !0, value: p },
              },
            })
          ),
          H(!!f.bottom, {
            [[
              `&-placement-bottom ${o}-arrow`,
              `&-placement-bottomLeft ${o}-arrow`,
              `&-placement-bottomRight ${o}-arrow`,
            ].join(",")]: { top: m, transform: "translateY(-100%)" },
            [`&-placement-bottom ${o}-arrow`]: {
              left: { _skip_check_: !0, value: "50%" },
              transform: "translateX(-50%) translateY(-100%)",
            },
            [`&-placement-bottomLeft ${o}-arrow`]: {
              left: { _skip_check_: !0, value: p },
            },
            [`&-placement-bottomRight ${o}-arrow`]: {
              right: { _skip_check_: !0, value: p },
            },
          })
        ),
        H(!!f.left, {
          [[
            `&-placement-left ${o}-arrow`,
            `&-placement-leftTop ${o}-arrow`,
            `&-placement-leftBottom ${o}-arrow`,
          ].join(",")]: {
            right: { _skip_check_: !0, value: m },
            transform: "translateX(100%) rotate(90deg)",
          },
          [`&-placement-left ${o}-arrow`]: {
            top: { _skip_check_: !0, value: "50%" },
            transform: "translateY(-50%) translateX(100%) rotate(90deg)",
          },
          [`&-placement-leftTop ${o}-arrow`]: { top: b },
          [`&-placement-leftBottom ${o}-arrow`]: { bottom: b },
        })
      ),
      H(!!f.right, {
        [[
          `&-placement-right ${o}-arrow`,
          `&-placement-rightTop ${o}-arrow`,
          `&-placement-rightBottom ${o}-arrow`,
        ].join(",")]: {
          left: { _skip_check_: !0, value: m },
          transform: "translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-right ${o}-arrow`]: {
          top: { _skip_check_: !0, value: "50%" },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)",
        },
        [`&-placement-rightTop ${o}-arrow`]: { top: b },
        [`&-placement-rightBottom ${o}-arrow`]: { bottom: b },
      })
    ),
  };
}
const he = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: o,
      tooltipColor: r,
      tooltipBg: n,
      tooltipBorderRadius: a,
      zIndexPopup: s,
      controlHeight: i,
      boxShadowSecondary: l,
      paddingSM: c,
      paddingXS: m,
      tooltipRadiusOuter: f,
    } = e;
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, Bt(e)), {
              position: "absolute",
              zIndex: s,
              display: "block",
              "&": [{ width: "max-content" }, { width: "intrinsic" }],
              maxWidth: o,
              visibility: "visible",
              "&-hidden": { display: "none" },
              "--antd-arrow-background-color": n,
              [`${t}-inner`]: {
                minWidth: i,
                minHeight: i,
                padding: `${c / 2}px ${m}px`,
                color: r,
                textAlign: "start",
                textDecoration: "none",
                wordWrap: "break-word",
                backgroundColor: n,
                borderRadius: a,
                boxShadow: l,
              },
              [[
                "&-placement-left",
                "&-placement-leftTop",
                "&-placement-leftBottom",
                "&-placement-right",
                "&-placement-rightTop",
                "&-placement-rightBottom",
              ].join(",")]: {
                [`${t}-inner`]: { borderRadius: Math.min(a, Ct) },
              },
              [`${t}-content`]: { position: "relative" },
            }),
            Yt(e, (b, p) => {
              let { darkColor: O } = p;
              return {
                [`&${t}-${b}`]: {
                  [`${t}-inner`]: { backgroundColor: O },
                  [`${t}-arrow`]: { "--antd-arrow-background-color": O },
                },
              };
            })
          ),
          { "&-rtl": { direction: "rtl" } }
        ),
      },
      be(dt(e, { borderRadiusOuter: f }), {
        colorBg: "var(--antd-arrow-background-color)",
        contentRadius: a,
        limitVerticalRadius: !0,
      }),
      { [`${t}-pure`]: { position: "relative", maxWidth: "none" } },
    ];
  },
  $t = (e, t) =>
    kt(
      "Tooltip",
      (r) => {
        if (t === !1) return [];
        const {
            borderRadius: n,
            colorTextLightSolid: a,
            colorBgDefault: s,
            borderRadiusOuter: i,
          } = r,
          l = dt(r, {
            tooltipMaxWidth: 250,
            tooltipColor: a,
            tooltipBorderRadius: n,
            tooltipBg: s,
            tooltipRadiusOuter: i > 4 ? 4 : i,
          });
        return [he(l), le(r, "zoom-big-fast")];
      },
      (r) => {
        let { zIndexPopupBase: n, colorBgSpotlight: a } = r;
        return { zIndexPopup: n + 70, colorBgDefault: a };
      }
    )(e),
  ye = Z.map((e) => `${e}-inverse`);
function ve(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [].concat(it(ye), it(Z)).includes(e)
    : Z.includes(e);
}
function St(e, t) {
  const o = ve(t),
    r = B({ [`${e}-${t}`]: t && o }),
    n = {},
    a = {};
  return (
    t && !o && ((n.background = t), (a["--antd-arrow-background-color"] = t)),
    { className: r, overlayStyle: n, arrowStyle: a }
  );
}
function we(e) {
  const {
      prefixCls: t,
      className: o,
      placement: r = "top",
      title: n,
      color: a,
      overlayInnerStyle: s,
    } = e,
    { getPrefixCls: i } = u.useContext(bt),
    l = i("tooltip", t),
    [c, m] = $t(l, !0),
    f = St(l, a),
    b = Object.assign(Object.assign({}, s), f.overlayStyle),
    p = f.arrowStyle;
  return c(
    u.createElement(
      "div",
      {
        className: B(m, l, `${l}-pure`, `${l}-placement-${r}`, o, f.className),
        style: p,
      },
      u.createElement(
        Ot,
        Object.assign({}, e, {
          className: m,
          prefixCls: l,
          overlayInnerStyle: b,
        }),
        n
      )
    )
  );
}
const S = (e, t) => new ht(e).setAlpha(t).toRgbString(),
  k = (e, t) => new ht(e).lighten(t).toHexString(),
  Oe = (e) => {
    const t = yt(e, { theme: "dark" });
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[6],
      6: t[5],
      7: t[4],
      8: t[6],
      9: t[5],
      10: t[4],
    };
  },
  Ce = (e, t) => {
    const o = e || "#000",
      r = t || "#fff";
    return {
      colorBgBase: o,
      colorTextBase: r,
      colorText: S(r, 0.85),
      colorTextSecondary: S(r, 0.65),
      colorTextTertiary: S(r, 0.45),
      colorTextQuaternary: S(r, 0.25),
      colorFill: S(r, 0.18),
      colorFillSecondary: S(r, 0.12),
      colorFillTertiary: S(r, 0.08),
      colorFillQuaternary: S(r, 0.04),
      colorBgElevated: k(o, 12),
      colorBgContainer: k(o, 8),
      colorBgLayout: k(o, 0),
      colorBgSpotlight: k(o, 26),
      colorBorder: k(o, 26),
      colorBorderSecondary: k(o, 19),
    };
  },
  $e = (e, t) => {
    const o = Object.keys(Dt)
        .map((n) => {
          const a = yt(e[n], { theme: "dark" });
          return new Array(10)
            .fill(1)
            .reduce((s, i, l) => ((s[`${n}-${l + 1}`] = a[l]), s), {});
        })
        .reduce(
          (n, a) => ((n = Object.assign(Object.assign({}, n), a)), n),
          {}
        ),
      r = t ?? at(e);
    return Object.assign(
      Object.assign(Object.assign({}, r), o),
      Et(e, { generateColorPalettes: Oe, generateNeutralColorPalettes: Ce })
    );
  },
  Se = $e;
function _e(e) {
  const { sizeUnit: t, sizeStep: o } = e,
    r = o - 2;
  return {
    sizeXXL: t * (r + 10),
    sizeXL: t * (r + 6),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 2),
    sizeMS: t * (r + 1),
    size: t * r,
    sizeSM: t * r,
    sizeXS: t * (r - 1),
    sizeXXS: t * (r - 1),
  };
}
const xe = (e, t) => {
    const o = t ?? at(e),
      r = o.fontSizeSM,
      n = o.controlHeight - 4;
    return Object.assign(
      Object.assign(
        Object.assign(Object.assign(Object.assign({}, o), _e(t ?? e)), Rt(r)),
        { controlHeight: n }
      ),
      Lt(Object.assign(Object.assign({}, o), { controlHeight: n }))
    );
  },
  je = xe;
function Te() {
  const [e, t, o] = Mt();
  return { theme: e, token: t, hashId: o };
}
const Ae = {
  defaultConfig: lt,
  defaultSeed: lt.token,
  useToken: Te,
  defaultAlgorithm: at,
  darkAlgorithm: Se,
  compactAlgorithm: je,
};
var Pe =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var o = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (o[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
        t.indexOf(r[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
          (o[r[n]] = e[r[n]]);
    return o;
  };
const { useToken: ze } = Ae,
  Ie = (e, t) => {
    const o = {},
      r = Object.assign({}, e);
    return (
      t.forEach((n) => {
        e && n in e && ((o[n] = e[n]), delete r[n]);
      }),
      { picked: o, omitted: r }
    );
  };
function Ne(e, t) {
  const o = e.type;
  if (
    ((o.__ANT_BUTTON === !0 || e.type === "button") && e.props.disabled) ||
    (o.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading)) ||
    (o.__ANT_RADIO === !0 && e.props.disabled)
  ) {
    const { picked: r, omitted: n } = Ie(e.props.style, [
        "position",
        "left",
        "right",
        "top",
        "bottom",
        "float",
        "display",
        "zIndex",
      ]),
      a = Object.assign(Object.assign({ display: "inline-block" }, r), {
        cursor: "not-allowed",
        width: e.props.block ? "100%" : void 0,
      }),
      s = Object.assign(Object.assign({}, n), { pointerEvents: "none" }),
      i = vt(e, { style: s, className: null });
    return u.createElement(
      "span",
      {
        style: a,
        className: B(e.props.className, `${t}-disabled-compatible-wrapper`),
      },
      i
    );
  }
  return e;
}
const _t = u.forwardRef((e, t) => {
  var o, r;
  const {
      prefixCls: n,
      openClassName: a,
      getTooltipContainer: s,
      overlayClassName: i,
      color: l,
      overlayInnerStyle: c,
      children: m,
      afterOpenChange: f,
      afterVisibleChange: b,
      arrow: p = !0,
    } = e,
    O = !!p,
    { token: P } = ze(),
    { getPopupContainer: D, getPrefixCls: z, direction: I } = u.useContext(bt),
    [L, K] = Vt(!1, {
      value: (o = e.open) !== null && o !== void 0 ? o : e.visible,
      defaultValue:
        (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
    }),
    N = () => {
      const { title: g, overlay: d } = e;
      return !g && !d && g !== 0;
    },
    W = (g) => {
      var d, $;
      K(N() ? !1 : g),
        N() ||
          ((d = e.onOpenChange) === null || d === void 0 || d.call(e, g),
          ($ = e.onVisibleChange) === null || $ === void 0 || $.call(e, g));
    },
    E = () => {
      var g;
      const {
          builtinPlacements: d,
          arrowPointAtCenter: $ = !1,
          autoAdjustOverflow: T = !0,
        } = e,
        A =
          (g =
            typeof p != "boolean" &&
            (p == null ? void 0 : p.arrowPointAtCenter)) !== null &&
          g !== void 0
            ? g
            : $;
      return (
        d ||
        ge({
          arrowPointAtCenter: A,
          autoAdjustOverflow: T,
          arrowWidth: O ? P.sizePopupArrow : 0,
          offset: P.marginXXS,
        })
      );
    },
    _ = (g, d) => {
      const $ = E(),
        T = Object.keys($).find((A) => {
          var w, ot;
          return (
            $[A].points[0] ===
              ((w = d.points) === null || w === void 0 ? void 0 : w[0]) &&
            $[A].points[1] ===
              ((ot = d.points) === null || ot === void 0 ? void 0 : ot[1])
          );
        });
      if (T) {
        const A = g.getBoundingClientRect(),
          w = { top: "50%", left: "50%" };
        /top|Bottom/.test(T)
          ? (w.top = `${A.height - d.offset[1]}px`)
          : /Top|bottom/.test(T) && (w.top = `${-d.offset[1]}px`),
          /left|Right/.test(T)
            ? (w.left = `${A.width - d.offset[0]}px`)
            : /right|Left/.test(T) && (w.left = `${-d.offset[0]}px`),
          (g.style.transformOrigin = `${w.left} ${w.top}`);
      }
    },
    Y = () => {
      const { title: g, overlay: d } = e;
      return g === 0 ? g : d || g || "";
    },
    {
      getPopupContainer: U,
      placement: q = "top",
      mouseEnterDelay: G = 0.1,
      mouseLeaveDelay: Q = 0.1,
      overlayStyle: J,
      rootClassName: M,
    } = e,
    tt = Pe(e, [
      "getPopupContainer",
      "placement",
      "mouseEnterDelay",
      "mouseLeaveDelay",
      "overlayStyle",
      "rootClassName",
    ]),
    C = z("tooltip", n),
    V = z(),
    X = e["data-popover-inject"];
  let R = L;
  !("open" in e) && !("visible" in e) && N() && (R = !1);
  const x = Ne(Xt(m) && !Ft(m) ? m : u.createElement("span", null, m), C),
    j = x.props,
    F =
      !j.className || typeof j.className == "string"
        ? B(j.className, { [a || `${C}-open`]: !0 })
        : j.className,
    [st, xt] = $t(C, !X),
    et = St(C, l),
    jt = Object.assign(Object.assign({}, c), et.overlayStyle),
    Tt = et.arrowStyle,
    At = B(i, { [`${C}-rtl`]: I === "rtl" }, et.className, M, xt);
  return st(
    u.createElement(
      me,
      Object.assign({}, tt, {
        showArrow: O,
        placement: q,
        mouseEnterDelay: G,
        mouseLeaveDelay: Q,
        prefixCls: C,
        overlayClassName: At,
        overlayStyle: Object.assign(Object.assign({}, Tt), J),
        getTooltipContainer: U || s || D,
        ref: t,
        builtinPlacements: E(),
        overlay: Y(),
        visible: R,
        onVisibleChange: W,
        afterVisibleChange: f ?? b,
        onPopupAlign: _,
        overlayInnerStyle: jt,
        arrowContent: u.createElement("span", {
          className: `${C}-arrow-content`,
        }),
        motion: {
          motionName: Kt(V, "zoom-big-fast", e.transitionName),
          motionDeadline: 1e3,
        },
      }),
      R ? vt(x, { className: F }) : x
    )
  );
});
_t._InternalPanelDoNotUseOrYouWillBeFired = we;
const Ee = _t;
export { De as C, Ee as T, le as i };
