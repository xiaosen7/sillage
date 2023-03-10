import {
  r as l,
  _ as wt,
  b as Ct,
  f as Ke,
  g as pe,
  h as be,
  i as k,
  p as Re,
  T as Je,
  k as Qe,
  m as Ye,
  K as Fe,
  l as Ze,
  C as $e,
  o as St,
  n as Et,
  q as xt,
  s as It,
  A as fe,
  t as Z,
  w as Ot,
  u as et,
  v as tt,
  x as rt,
  y as ie,
  z as nt,
  B as Ee,
  R as je,
  D as Pt,
  E as Dt,
  F as Ae,
  G as Rt,
  H as ot,
  J as jt,
  L as Lt,
  M as ke,
  N as Ue,
  O as ze,
  P as _e,
  Q as it,
  U as at,
  V as Ft,
  W as Nt,
  X as Tt,
  Y as Mt,
  Z as At,
  $ as kt,
  a0 as Ut,
  a1 as zt,
  j as He,
} from "./index-53175ba2.js";
import { U as _t } from "./index.esm-ee489aaa.js";
import { C as Ht } from "./CheckCircleFilled-d82e3202.js";
function Bt() {
  const [, e] = l.useReducer((t) => t + 1, 0);
  return e;
}
var Xt = {
    className: "",
    percent: 0,
    prefixCls: "rc-progress",
    strokeColor: "#2db7f5",
    strokeLinecap: "round",
    strokeWidth: 1,
    style: {},
    trailColor: "#D9D9D9",
    trailWidth: 1,
    gapPosition: "bottom",
  },
  Wt = function () {
    var t = l.useRef([]),
      r = l.useRef(null);
    return (
      l.useEffect(function () {
        var n = Date.now(),
          i = !1;
        t.current.forEach(function (o) {
          if (o) {
            i = !0;
            var s = o.style;
            (s.transitionDuration = ".3s, .3s, .3s, .06s"),
              r.current &&
                n - r.current < 100 &&
                (s.transitionDuration = "0s, 0s");
          }
        }),
          i && (r.current = Date.now());
      }),
      t.current
    );
  },
  Be = 0,
  qt = Ct();
function Vt() {
  var e;
  return qt ? ((e = Be), (Be += 1)) : (e = "TEST_OR_SSR"), e;
}
const Gt = function (e) {
  var t = l.useState(),
    r = wt(t, 2),
    n = r[0],
    i = r[1];
  return (
    l.useEffect(function () {
      i("rc_progress_".concat(Vt()));
    }, []),
    e || n
  );
};
var Kt = [
  "id",
  "prefixCls",
  "steps",
  "strokeWidth",
  "trailWidth",
  "gapDegree",
  "gapPosition",
  "trailColor",
  "strokeLinecap",
  "style",
  "className",
  "strokeColor",
  "percent",
];
function Xe(e) {
  return +e.replace("%", "");
}
function We(e) {
  var t = e ?? [];
  return Array.isArray(t) ? t : [t];
}
var de = 100,
  xe = function (t, r, n, i, o, s, a, u, c, d) {
    var m =
        arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0,
      p = (n / 100) * 360 * ((360 - s) / 360),
      b = s === 0 ? 0 : { bottom: 0, top: 180, left: 90, right: -90 }[a],
      y = ((100 - i) / 100) * r;
    return (
      c === "round" && i !== 100 && ((y += d / 2), y >= r && (y = r - 0.01)),
      {
        stroke: typeof u == "string" ? u : void 0,
        strokeDasharray: "".concat(r, "px ").concat(t),
        strokeDashoffset: y + m,
        transform: "rotate(".concat(o + p + b, "deg)"),
        transformOrigin: "0 0",
        transition:
          "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
        fillOpacity: 0,
      }
    );
  },
  Ne = function (t) {
    var r = t.id,
      n = t.prefixCls,
      i = t.steps,
      o = t.strokeWidth,
      s = t.trailWidth,
      a = t.gapDegree,
      u = a === void 0 ? 0 : a,
      c = t.gapPosition,
      d = t.trailColor,
      m = t.strokeLinecap,
      p = t.style,
      b = t.className,
      y = t.strokeColor,
      D = t.percent,
      L = Ke(t, Kt),
      v = Gt(r),
      R = "".concat(v, "-gradient"),
      j = de / 2 - o / 2,
      C = Math.PI * 2 * j,
      g = u > 0 ? 90 + u / 2 : -90,
      P = C * ((360 - u) / 360),
      E = pe(i) === "object" ? i : { count: i, space: 2 },
      z = E.count,
      T = E.space,
      x = xe(C, P, 0, 100, g, u, c, d, m, o),
      H = We(D),
      W = We(y),
      K = W.find(function (X) {
        return X && pe(X) === "object";
      }),
      B = Wt(),
      I = function () {
        var q = 0;
        return H.map(function (V, M) {
          var J = W[M] || W[W.length - 1],
            f = J && pe(J) === "object" ? "url(#".concat(R, ")") : void 0,
            S = xe(C, P, q, V, g, u, c, J, m, o);
          return (
            (q += V),
            l.createElement("circle", {
              key: M,
              className: "".concat(n, "-circle-path"),
              r: j,
              cx: 0,
              cy: 0,
              stroke: f,
              strokeLinecap: m,
              strokeWidth: o,
              opacity: V === 0 ? 0 : 1,
              style: S,
              ref: function (A) {
                B[M] = A;
              },
            })
          );
        }).reverse();
      },
      Y = function () {
        var q = Math.round(z * (H[0] / 100)),
          V = 100 / z,
          M = 0;
        return new Array(z).fill(null).map(function (J, f) {
          var S = f <= q - 1 ? W[0] : d,
            _ = S && pe(S) === "object" ? "url(#".concat(R, ")") : void 0,
            A = xe(C, P, M, V, g, u, c, S, "butt", o, T);
          return (
            (M += ((P - A.strokeDashoffset + T) * 100) / P),
            l.createElement("circle", {
              key: f,
              className: "".concat(n, "-circle-path"),
              r: j,
              cx: 0,
              cy: 0,
              stroke: _,
              strokeWidth: o,
              opacity: 1,
              style: A,
              ref: function (Q) {
                B[f] = Q;
              },
            })
          );
        });
      };
    return l.createElement(
      "svg",
      be(
        {
          className: k("".concat(n, "-circle"), b),
          viewBox: ""
            .concat(-de / 2, " ")
            .concat(-de / 2, " ")
            .concat(de, " ")
            .concat(de),
          style: p,
          id: r,
          role: "presentation",
        },
        L
      ),
      K &&
        l.createElement(
          "defs",
          null,
          l.createElement(
            "linearGradient",
            { id: R, x1: "100%", y1: "0%", x2: "0%", y2: "0%" },
            Object.keys(K)
              .sort(function (X, q) {
                return Xe(X) - Xe(q);
              })
              .map(function (X, q) {
                return l.createElement("stop", {
                  key: q,
                  offset: X,
                  stopColor: K[X],
                });
              })
          )
        ),
      !z &&
        l.createElement("circle", {
          className: "".concat(n, "-circle-trail"),
          r: j,
          cx: 0,
          cy: 0,
          stroke: d,
          strokeLinecap: m,
          strokeWidth: s || o,
          style: x,
        }),
      z ? Y() : I()
    );
  };
Ne.defaultProps = Xt;
Ne.displayName = "Circle";
function ae(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function ye(e) {
  let { success: t, successPercent: r } = e,
    n = r;
  return (
    t && "progress" in t && (n = t.progress),
    t && "percent" in t && (n = t.percent),
    n
  );
}
const Jt = (e) => {
    let { percent: t, success: r, successPercent: n } = e;
    const i = ae(ye({ success: r, successPercent: n }));
    return [i, ae(ae(t) - i)];
  },
  Qt = (e) => {
    let { success: t = {}, strokeColor: r } = e;
    const { strokeColor: n } = t;
    return [n || Re.green, r || null];
  },
  Yt = 3,
  Zt = (e) => (Yt / e) * 100,
  er = (e) => {
    const {
        prefixCls: t,
        width: r = 120,
        strokeWidth: n = Math.max(Zt(r), 6),
        trailColor: i = null,
        strokeLinecap: o = "round",
        gapPosition: s,
        gapDegree: a,
        type: u,
        children: c,
        success: d,
      } = e,
      m = { width: r, height: r, fontSize: r * 0.15 + 6 },
      p = l.useMemo(() => {
        if (a || a === 0) return a;
        if (u === "dashboard") return 75;
      }, [a, u]),
      b = s || (u === "dashboard" && "bottom") || void 0,
      y = Object.prototype.toString.call(e.strokeColor) === "[object Object]",
      D = Qt({ success: d, strokeColor: e.strokeColor }),
      L = k(`${t}-inner`, { [`${t}-circle-gradient`]: y }),
      v = l.createElement(Ne, {
        percent: Jt(e),
        strokeWidth: n,
        trailWidth: n,
        strokeColor: D,
        strokeLinecap: o,
        trailColor: i,
        prefixCls: t,
        gapDegree: p,
        gapPosition: b,
      });
    return l.createElement(
      "div",
      { className: L, style: m },
      r <= 20
        ? l.createElement(Je, { title: c }, v)
        : l.createElement(l.Fragment, null, v, c)
    );
  },
  tr = er;
var rr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (r[n[i]] = e[n[i]]);
    return r;
  };
const nr = (e) => {
    let t = [];
    return (
      Object.keys(e).forEach((r) => {
        const n = parseFloat(r.replace(/%/g, ""));
        isNaN(n) || t.push({ key: n, value: e[r] });
      }),
      (t = t.sort((r, n) => r.key - n.key)),
      t
        .map((r) => {
          let { key: n, value: i } = r;
          return `${i} ${n}%`;
        })
        .join(", ")
    );
  },
  or = (e, t) => {
    const {
        from: r = Re.blue,
        to: n = Re.blue,
        direction: i = t === "rtl" ? "to left" : "to right",
      } = e,
      o = rr(e, ["from", "to", "direction"]);
    if (Object.keys(o).length !== 0) {
      const s = nr(o);
      return { backgroundImage: `linear-gradient(${i}, ${s})` };
    }
    return { backgroundImage: `linear-gradient(${i}, ${r}, ${n})` };
  },
  ir = (e) => {
    const {
        prefixCls: t,
        direction: r,
        percent: n,
        strokeWidth: i,
        size: o,
        strokeColor: s,
        strokeLinecap: a = "round",
        children: u,
        trailColor: c = null,
        success: d,
      } = e,
      m = s && typeof s != "string" ? or(s, r) : { backgroundColor: s },
      p = a === "square" || a === "butt" ? 0 : void 0,
      b = { backgroundColor: c || void 0, borderRadius: p },
      y = Object.assign(
        {
          width: `${ae(n)}%`,
          height: i || (o === "small" ? 6 : 8),
          borderRadius: p,
        },
        m
      ),
      D = ye(e),
      L = {
        width: `${ae(D)}%`,
        height: i || (o === "small" ? 6 : 8),
        borderRadius: p,
        backgroundColor: d == null ? void 0 : d.strokeColor,
      };
    return l.createElement(
      l.Fragment,
      null,
      l.createElement(
        "div",
        { className: `${t}-outer` },
        l.createElement(
          "div",
          { className: `${t}-inner`, style: b },
          l.createElement("div", { className: `${t}-bg`, style: y }),
          D !== void 0
            ? l.createElement("div", { className: `${t}-success-bg`, style: L })
            : null
        )
      ),
      u
    );
  },
  ar = ir,
  sr = (e) => {
    const {
        size: t,
        steps: r,
        percent: n = 0,
        strokeWidth: i = 8,
        strokeColor: o,
        trailColor: s = null,
        prefixCls: a,
        children: u,
      } = e,
      c = Math.round(r * (n / 100)),
      d = t === "small" ? 2 : 14,
      m = new Array(r);
    for (let p = 0; p < r; p++) {
      const b = Array.isArray(o) ? o[p] : o;
      m[p] = l.createElement("div", {
        key: p,
        className: k(`${a}-steps-item`, {
          [`${a}-steps-item-active`]: p <= c - 1,
        }),
        style: { backgroundColor: p <= c - 1 ? b : s, width: d, height: i },
      });
    }
    return l.createElement("div", { className: `${a}-steps-outer` }, m, u);
  },
  lr = sr,
  cr = new Fe("antProgressActive", {
    "0%": { transform: "translateX(-100%) scaleX(0)", opacity: 0.1 },
    "20%": { transform: "translateX(-100%) scaleX(0)", opacity: 0.5 },
    to: { transform: "translateX(0) scaleX(1)", opacity: 0 },
  }),
  ur = (e) => {
    const { componentCls: t, iconCls: r } = e;
    return {
      [t]: Object.assign(Object.assign({}, Ze(e)), {
        display: "inline-block",
        "&-rtl": { direction: "rtl" },
        "&-line": {
          position: "relative",
          width: "100%",
          fontSize: e.fontSize,
          marginInlineEnd: e.marginXS,
          marginBottom: e.marginXS,
        },
        [`${t}-outer`]: { display: "inline-block", width: "100%" },
        [`&${t}-show-info`]: {
          [`${t}-outer`]: {
            marginInlineEnd: `calc(-2em - ${e.marginXS}px)`,
            paddingInlineEnd: `calc(2em + ${e.paddingXS}px)`,
          },
        },
        [`${t}-inner`]: {
          position: "relative",
          display: "inline-block",
          width: "100%",
          overflow: "hidden",
          verticalAlign: "middle",
          backgroundColor: e.progressRemainingColor,
          borderRadius: e.progressLineRadius,
        },
        [`${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorInfo },
        },
        [`${t}-success-bg, ${t}-bg`]: {
          position: "relative",
          backgroundColor: e.colorInfo,
          borderRadius: e.progressLineRadius,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
        },
        [`${t}-success-bg`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          backgroundColor: e.colorSuccess,
        },
        [`${t}-text`]: {
          display: "inline-block",
          width: "2em",
          marginInlineStart: e.marginXS,
          color: e.progressInfoTextColor,
          lineHeight: 1,
          whiteSpace: "nowrap",
          textAlign: "start",
          verticalAlign: "middle",
          wordBreak: "normal",
          [r]: { fontSize: e.fontSize },
        },
        [`&${t}-status-active`]: {
          [`${t}-bg::before`]: {
            position: "absolute",
            inset: 0,
            backgroundColor: e.colorBgContainer,
            borderRadius: e.progressLineRadius,
            opacity: 0,
            animationName: cr,
            animationDuration: e.progressActiveMotionDuration,
            animationTimingFunction: e.motionEaseOutQuint,
            animationIterationCount: "infinite",
            content: '""',
          },
        },
        [`&${t}-status-exception`]: {
          [`${t}-bg`]: { backgroundColor: e.colorError },
          [`${t}-text`]: { color: e.colorError },
        },
        [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorError },
        },
        [`&${t}-status-success`]: {
          [`${t}-bg`]: { backgroundColor: e.colorSuccess },
          [`${t}-text`]: { color: e.colorSuccess },
        },
        [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorSuccess },
        },
      }),
    };
  },
  dr = (e) => {
    const { componentCls: t, iconCls: r } = e;
    return {
      [t]: {
        [`${t}-circle-trail`]: { stroke: e.progressRemainingColor },
        [`&${t}-circle ${t}-inner`]: {
          position: "relative",
          lineHeight: 1,
          backgroundColor: "transparent",
        },
        [`&${t}-circle ${t}-text`]: {
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: 0,
          width: "100%",
          margin: 0,
          padding: 0,
          color: e.colorText,
          lineHeight: 1,
          whiteSpace: "normal",
          textAlign: "center",
          transform: "translateY(-50%)",
          [r]: { fontSize: `${e.fontSize / e.fontSizeSM}em` },
        },
        [`${t}-circle&-status-exception`]: {
          [`${t}-text`]: { color: e.colorError },
        },
        [`${t}-circle&-status-success`]: {
          [`${t}-text`]: { color: e.colorSuccess },
        },
      },
      [`${t}-inline-circle`]: {
        lineHeight: 1,
        [`${t}-inner`]: { verticalAlign: "bottom" },
      },
    };
  },
  pr = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        [`${t}-steps`]: {
          display: "inline-block",
          "&-outer": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
          "&-item": {
            flexShrink: 0,
            minWidth: e.progressStepMinWidth,
            marginInlineEnd: e.progressStepMarginInlineEnd,
            backgroundColor: e.progressRemainingColor,
            transition: `all ${e.motionDurationSlow}`,
            "&-active": { backgroundColor: e.colorInfo },
          },
        },
      },
    };
  },
  mr = (e) => {
    const { componentCls: t, iconCls: r } = e;
    return {
      [t]: {
        [`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]: {
          fontSize: e.fontSizeSM,
        },
      },
    };
  },
  fr = Qe("Progress", (e) => {
    const t = e.marginXXS / 2,
      r = Ye(e, {
        progressLineRadius: 100,
        progressInfoTextColor: e.colorText,
        progressDefaultColor: e.colorInfo,
        progressRemainingColor: e.colorFillSecondary,
        progressStepMarginInlineEnd: t,
        progressStepMinWidth: t,
        progressActiveMotionDuration: "2.4s",
      });
    return [ur(r), dr(r), pr(r), mr(r)];
  });
var gr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (r[n[i]] = e[n[i]]);
    return r;
  };
const hr = ["normal", "exception", "active", "success"],
  vr = (e) => {
    const {
        prefixCls: t,
        className: r,
        rootClassName: n,
        steps: i,
        strokeColor: o,
        percent: s = 0,
        size: a = "default",
        showInfo: u = !0,
        type: c = "line",
        status: d,
        format: m,
      } = e,
      p = gr(e, [
        "prefixCls",
        "className",
        "rootClassName",
        "steps",
        "strokeColor",
        "percent",
        "size",
        "showInfo",
        "type",
        "status",
        "format",
      ]),
      b = l.useMemo(() => {
        var T, x;
        const H = ye(e);
        return parseInt(
          H !== void 0
            ? (T = H ?? 0) === null || T === void 0
              ? void 0
              : T.toString()
            : (x = s ?? 0) === null || x === void 0
            ? void 0
            : x.toString(),
          10
        );
      }, [s, e.success, e.successPercent]),
      y = l.useMemo(
        () => (!hr.includes(d) && b >= 100 ? "success" : d || "normal"),
        [d, b]
      ),
      { getPrefixCls: D, direction: L } = l.useContext($e),
      v = D("progress", t),
      [R, j] = fr(v),
      C = l.useMemo(() => {
        if (!u) return null;
        const T = ye(e);
        let x;
        const H = m || ((K) => `${K}%`),
          W = c === "line";
        return (
          m || (y !== "exception" && y !== "success")
            ? (x = H(ae(s), ae(T)))
            : y === "exception"
            ? (x = W ? l.createElement(Et, null) : l.createElement(xt, null))
            : y === "success" &&
              (x = W ? l.createElement(Ht, null) : l.createElement(It, null)),
          l.createElement(
            "span",
            {
              className: `${v}-text`,
              title: typeof x == "string" ? x : void 0,
            },
            x
          )
        );
      }, [u, s, b, y, c, v, m]),
      g = Array.isArray(o) ? o[0] : o,
      P = typeof o == "string" || Array.isArray(o) ? o : void 0;
    let E;
    c === "line"
      ? (E = i
          ? l.createElement(
              lr,
              Object.assign({}, e, { strokeColor: P, prefixCls: v, steps: i }),
              C
            )
          : l.createElement(
              ar,
              Object.assign({}, e, {
                strokeColor: g,
                prefixCls: v,
                direction: L,
              }),
              C
            ))
      : (c === "circle" || c === "dashboard") &&
        (E = l.createElement(
          tr,
          Object.assign({}, e, {
            strokeColor: g,
            prefixCls: v,
            progressStatus: y,
          }),
          C
        ));
    const z = k(
      v,
      {
        [`${v}-inline-circle`]: c === "circle" && e.width <= 20,
        [`${v}-${(c === "dashboard" && "circle") || (i && "steps") || c}`]: !0,
        [`${v}-status-${y}`]: !0,
        [`${v}-show-info`]: u,
        [`${v}-${a}`]: a,
        [`${v}-rtl`]: L === "rtl",
      },
      r,
      n,
      j
    );
    return R(
      l.createElement(
        "div",
        Object.assign(
          { className: z, role: "progressbar" },
          St(p, [
            "trailColor",
            "strokeWidth",
            "width",
            "gapDegree",
            "gapPosition",
            "strokeLinecap",
            "success",
            "successPercent",
          ])
        ),
        E
      )
    );
  },
  br = vr;
var yr = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z",
        },
      },
    ],
  },
  name: "delete",
  theme: "outlined",
};
const $r = yr;
var st = function (t, r) {
  return l.createElement(fe, Z(Z({}, t), {}, { ref: r, icon: $r }));
};
st.displayName = "DeleteOutlined";
const wr = l.forwardRef(st);
function Cr(e, t) {
  var r = "cannot "
      .concat(e.method, " ")
      .concat(e.action, " ")
      .concat(t.status, "'"),
    n = new Error(r);
  return (n.status = t.status), (n.method = e.method), (n.url = e.action), n;
}
function qe(e) {
  var t = e.responseText || e.response;
  if (!t) return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Sr(e) {
  var t = new XMLHttpRequest();
  e.onProgress &&
    t.upload &&
    (t.upload.onprogress = function (o) {
      o.total > 0 && (o.percent = (o.loaded / o.total) * 100), e.onProgress(o);
    });
  var r = new FormData();
  e.data &&
    Object.keys(e.data).forEach(function (i) {
      var o = e.data[i];
      if (Array.isArray(o)) {
        o.forEach(function (s) {
          r.append("".concat(i, "[]"), s);
        });
        return;
      }
      r.append(i, o);
    }),
    e.file instanceof Blob
      ? r.append(e.filename, e.file, e.file.name)
      : r.append(e.filename, e.file),
    (t.onerror = function (o) {
      e.onError(o);
    }),
    (t.onload = function () {
      return t.status < 200 || t.status >= 300
        ? e.onError(Cr(e, t), qe(t))
        : e.onSuccess(qe(t), t);
    }),
    t.open(e.method, e.action, !0),
    e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  var n = e.headers || {};
  return (
    n["X-Requested-With"] !== null &&
      t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    Object.keys(n).forEach(function (i) {
      n[i] !== null && t.setRequestHeader(i, n[i]);
    }),
    t.send(r),
    {
      abort: function () {
        t.abort();
      },
    }
  );
}
var Er = +new Date(),
  xr = 0;
function Ie() {
  return "rc-upload-".concat(Er, "-").concat(++xr);
}
const Oe = function (e, t) {
  if (e && t) {
    var r = Array.isArray(t) ? t : t.split(","),
      n = e.name || "",
      i = e.type || "",
      o = i.replace(/\/.*$/, "");
    return r.some(function (s) {
      var a = s.trim();
      if (/^\*(\/\*)?$/.test(s)) return !0;
      if (a.charAt(0) === ".") {
        var u = n.toLowerCase(),
          c = a.toLowerCase(),
          d = [c];
        return (
          (c === ".jpg" || c === ".jpeg") && (d = [".jpg", ".jpeg"]),
          d.some(function (m) {
            return u.endsWith(m);
          })
        );
      }
      return /\/\*$/.test(a)
        ? o === a.replace(/\/.*$/, "")
        : i === a
        ? !0
        : /^\w+$/.test(a)
        ? (Ot(
            !1,
            "Upload takes an invalidate 'accept' type '".concat(
              a,
              "'.Skip for check."
            )
          ),
          !0)
        : !1;
    });
  }
  return !0;
};
function Ir(e, t) {
  var r = e.createReader(),
    n = [];
  function i() {
    r.readEntries(function (o) {
      var s = Array.prototype.slice.apply(o);
      n = n.concat(s);
      var a = !s.length;
      a ? t(n) : i();
    });
  }
  i();
}
var Or = function (t, r, n) {
    var i = function o(s, a) {
      (s.path = a || ""),
        s.isFile
          ? s.file(function (u) {
              n(u) &&
                (s.fullPath &&
                  !u.webkitRelativePath &&
                  (Object.defineProperties(u, {
                    webkitRelativePath: { writable: !0 },
                  }),
                  (u.webkitRelativePath = s.fullPath.replace(/^\//, "")),
                  Object.defineProperties(u, {
                    webkitRelativePath: { writable: !1 },
                  })),
                r([u]));
            })
          : s.isDirectory &&
            Ir(s, function (u) {
              u.forEach(function (c) {
                o(c, "".concat(a).concat(s.name, "/"));
              });
            });
    };
    t.forEach(function (o) {
      i(o.webkitGetAsEntry());
    });
  },
  Pr = [
    "component",
    "prefixCls",
    "className",
    "disabled",
    "id",
    "style",
    "multiple",
    "accept",
    "capture",
    "children",
    "directory",
    "openFileDialogOnClick",
    "onMouseEnter",
    "onMouseLeave",
  ],
  Dr = (function (e) {
    et(r, e);
    var t = tt(r);
    function r() {
      var n;
      rt(this, r);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (n = t.call.apply(t, [this].concat(o))),
        (n.state = { uid: Ie() }),
        (n.reqs = {}),
        (n.fileInput = void 0),
        (n._isMounted = void 0),
        (n.onChange = function (a) {
          var u = n.props,
            c = u.accept,
            d = u.directory,
            m = a.target.files,
            p = ie(m).filter(function (b) {
              return !d || Oe(b, c);
            });
          n.uploadFiles(p), n.reset();
        }),
        (n.onClick = function (a) {
          var u = n.fileInput;
          if (u) {
            var c = n.props,
              d = c.children,
              m = c.onClick;
            if (d && d.type === "button") {
              var p = u.parentNode;
              p.focus(), p.querySelector("button").blur();
            }
            u.click(), m && m(a);
          }
        }),
        (n.onKeyDown = function (a) {
          a.key === "Enter" && n.onClick(a);
        }),
        (n.onFileDrop = function (a) {
          var u = n.props.multiple;
          if ((a.preventDefault(), a.type !== "dragover"))
            if (n.props.directory)
              Or(
                Array.prototype.slice.call(a.dataTransfer.items),
                n.uploadFiles,
                function (d) {
                  return Oe(d, n.props.accept);
                }
              );
            else {
              var c = ie(a.dataTransfer.files).filter(function (d) {
                return Oe(d, n.props.accept);
              });
              u === !1 && (c = c.slice(0, 1)), n.uploadFiles(c);
            }
        }),
        (n.uploadFiles = function (a) {
          var u = ie(a),
            c = u.map(function (d) {
              return (d.uid = Ie()), n.processFile(d, u);
            });
          Promise.all(c).then(function (d) {
            var m = n.props.onBatchStart;
            m == null ||
              m(
                d.map(function (p) {
                  var b = p.origin,
                    y = p.parsedFile;
                  return { file: b, parsedFile: y };
                })
              ),
              d
                .filter(function (p) {
                  return p.parsedFile !== null;
                })
                .forEach(function (p) {
                  n.post(p);
                });
          });
        }),
        (n.processFile = (function () {
          var a = Dt(
            Ae().mark(function u(c, d) {
              var m, p, b, y, D, L, v, R, j;
              return Ae().wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        if (((m = n.props.beforeUpload), (p = c), !m)) {
                          g.next = 14;
                          break;
                        }
                        return (g.prev = 3), (g.next = 6), m(c, d);
                      case 6:
                        (p = g.sent), (g.next = 12);
                        break;
                      case 9:
                        (g.prev = 9), (g.t0 = g.catch(3)), (p = !1);
                      case 12:
                        if (p !== !1) {
                          g.next = 14;
                          break;
                        }
                        return g.abrupt("return", {
                          origin: c,
                          parsedFile: null,
                          action: null,
                          data: null,
                        });
                      case 14:
                        if (((b = n.props.action), typeof b != "function")) {
                          g.next = 21;
                          break;
                        }
                        return (g.next = 18), b(c);
                      case 18:
                        (y = g.sent), (g.next = 22);
                        break;
                      case 21:
                        y = b;
                      case 22:
                        if (((D = n.props.data), typeof D != "function")) {
                          g.next = 29;
                          break;
                        }
                        return (g.next = 26), D(c);
                      case 26:
                        (L = g.sent), (g.next = 30);
                        break;
                      case 29:
                        L = D;
                      case 30:
                        return (
                          (v =
                            (pe(p) === "object" || typeof p == "string") && p
                              ? p
                              : c),
                          v instanceof File
                            ? (R = v)
                            : (R = new File([v], c.name, { type: c.type })),
                          (j = R),
                          (j.uid = c.uid),
                          g.abrupt("return", {
                            origin: c,
                            data: L,
                            parsedFile: j,
                            action: y,
                          })
                        );
                      case 35:
                      case "end":
                        return g.stop();
                    }
                },
                u,
                null,
                [[3, 9]]
              );
            })
          );
          return function (u, c) {
            return a.apply(this, arguments);
          };
        })()),
        (n.saveFileInput = function (a) {
          n.fileInput = a;
        }),
        n
      );
    }
    return (
      nt(r, [
        {
          key: "componentDidMount",
          value: function () {
            this._isMounted = !0;
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            (this._isMounted = !1), this.abort();
          },
        },
        {
          key: "post",
          value: function (i) {
            var o = this,
              s = i.data,
              a = i.origin,
              u = i.action,
              c = i.parsedFile;
            if (this._isMounted) {
              var d = this.props,
                m = d.onStart,
                p = d.customRequest,
                b = d.name,
                y = d.headers,
                D = d.withCredentials,
                L = d.method,
                v = a.uid,
                R = p || Sr,
                j = {
                  action: u,
                  filename: b,
                  data: s,
                  file: c,
                  headers: y,
                  withCredentials: D,
                  method: L || "post",
                  onProgress: function (g) {
                    var P = o.props.onProgress;
                    P == null || P(g, c);
                  },
                  onSuccess: function (g, P) {
                    var E = o.props.onSuccess;
                    E == null || E(g, c, P), delete o.reqs[v];
                  },
                  onError: function (g, P) {
                    var E = o.props.onError;
                    E == null || E(g, P, c), delete o.reqs[v];
                  },
                };
              m(a), (this.reqs[v] = R(j));
            }
          },
        },
        {
          key: "reset",
          value: function () {
            this.setState({ uid: Ie() });
          },
        },
        {
          key: "abort",
          value: function (i) {
            var o = this.reqs;
            if (i) {
              var s = i.uid ? i.uid : i;
              o[s] && o[s].abort && o[s].abort(), delete o[s];
            } else
              Object.keys(o).forEach(function (a) {
                o[a] && o[a].abort && o[a].abort(), delete o[a];
              });
          },
        },
        {
          key: "render",
          value: function () {
            var i,
              o = this.props,
              s = o.component,
              a = o.prefixCls,
              u = o.className,
              c = o.disabled,
              d = o.id,
              m = o.style,
              p = o.multiple,
              b = o.accept,
              y = o.capture,
              D = o.children,
              L = o.directory,
              v = o.openFileDialogOnClick,
              R = o.onMouseEnter,
              j = o.onMouseLeave,
              C = Ke(o, Pr),
              g = k(
                ((i = {}),
                Ee(i, a, !0),
                Ee(i, "".concat(a, "-disabled"), c),
                Ee(i, u, u),
                i)
              ),
              P = L
                ? { directory: "directory", webkitdirectory: "webkitdirectory" }
                : {},
              E = c
                ? {}
                : {
                    onClick: v ? this.onClick : function () {},
                    onKeyDown: v ? this.onKeyDown : function () {},
                    onMouseEnter: R,
                    onMouseLeave: j,
                    onDrop: this.onFileDrop,
                    onDragOver: this.onFileDrop,
                    tabIndex: "0",
                  };
            return je.createElement(
              s,
              be({}, E, { className: g, role: "button", style: m }),
              je.createElement(
                "input",
                be(
                  {},
                  Pt(C, { aria: !0, data: !0 }),
                  {
                    id: d,
                    type: "file",
                    ref: this.saveFileInput,
                    onClick: function (T) {
                      return T.stopPropagation();
                    },
                    key: this.state.uid,
                    style: { display: "none" },
                    accept: b,
                  },
                  P,
                  { multiple: p, onChange: this.onChange },
                  y != null ? { capture: y } : {}
                )
              ),
              D
            );
          },
        },
      ]),
      r
    );
  })(l.Component);
function Pe() {}
var Le = (function (e) {
  et(r, e);
  var t = tt(r);
  function r() {
    var n;
    rt(this, r);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (n = t.call.apply(t, [this].concat(o))),
      (n.uploader = void 0),
      (n.saveUploader = function (a) {
        n.uploader = a;
      }),
      n
    );
  }
  return (
    nt(r, [
      {
        key: "abort",
        value: function (i) {
          this.uploader.abort(i);
        },
      },
      {
        key: "render",
        value: function () {
          return je.createElement(
            Dr,
            be({}, this.props, { ref: this.saveUploader })
          );
        },
      },
    ]),
    r
  );
})(l.Component);
Le.defaultProps = {
  component: "span",
  prefixCls: "rc-upload",
  data: {},
  headers: {},
  name: "file",
  multipart: !1,
  onStart: Pe,
  onError: Pe,
  onSuccess: Pe,
  multiple: !1,
  beforeUpload: null,
  customRequest: null,
  withCredentials: !1,
  openFileDialogOnClick: !0,
};
var Rr = {
  icon: function (t, r) {
    return {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",
            fill: r,
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",
            fill: t,
          },
        },
      ],
    };
  },
  name: "file",
  theme: "twotone",
};
const jr = Rr;
var lt = function (t, r) {
  return l.createElement(fe, Z(Z({}, t), {}, { ref: r, icon: jr }));
};
lt.displayName = "FileTwoTone";
const Lr = l.forwardRef(lt);
var Fr = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z",
        },
      },
    ],
  },
  name: "paper-clip",
  theme: "outlined",
};
const Nr = Fr;
var ct = function (t, r) {
  return l.createElement(fe, Z(Z({}, t), {}, { ref: r, icon: Nr }));
};
ct.displayName = "PaperClipOutlined";
const Tr = l.forwardRef(ct);
var Mr = {
  icon: function (t, r) {
    return {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",
            fill: t,
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",
            fill: r,
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",
            fill: r,
          },
        },
        {
          tag: "path",
          attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: r },
        },
        {
          tag: "path",
          attrs: {
            d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",
            fill: t,
          },
        },
      ],
    };
  },
  name: "picture",
  theme: "twotone",
};
const Ar = Mr;
var ut = function (t, r) {
  return l.createElement(fe, Z(Z({}, t), {}, { ref: r, icon: Ar }));
};
ut.displayName = "PictureTwoTone";
const kr = l.forwardRef(ut);
function ge(e) {
  return Object.assign(Object.assign({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e,
  });
}
function he(e, t) {
  const r = ie(t),
    n = r.findIndex((i) => {
      let { uid: o } = i;
      return o === e.uid;
    });
  return n === -1 ? r.push(e) : (r[n] = e), r;
}
function De(e, t) {
  const r = e.uid !== void 0 ? "uid" : "name";
  return t.filter((n) => n[r] === e[r])[0];
}
function Ur(e, t) {
  const r = e.uid !== void 0 ? "uid" : "name",
    n = t.filter((i) => i[r] !== e[r]);
  return n.length === t.length ? null : n;
}
const zr = function () {
    const t = (
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ""
      ).split("/"),
      n = t[t.length - 1].split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(n) || [""])[0];
  },
  dt = (e) => e.indexOf("image/") === 0,
  _r = (e) => {
    if (e.type && !e.thumbUrl) return dt(e.type);
    const t = e.thumbUrl || e.url || "",
      r = zr(t);
    return /^data:image\//.test(t) ||
      /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(r)
      ? !0
      : !(/^data:/.test(t) || r);
  },
  ne = 200;
function Hr(e) {
  return new Promise((t) => {
    if (!e.type || !dt(e.type)) {
      t("");
      return;
    }
    const r = document.createElement("canvas");
    (r.width = ne),
      (r.height = ne),
      (r.style.cssText = `position: fixed; left: 0; top: 0; width: ${ne}px; height: ${ne}px; z-index: 9999; display: none;`),
      document.body.appendChild(r);
    const n = r.getContext("2d"),
      i = new Image();
    if (
      ((i.onload = () => {
        const { width: o, height: s } = i;
        let a = ne,
          u = ne,
          c = 0,
          d = 0;
        o > s
          ? ((u = s * (ne / o)), (d = -(u - a) / 2))
          : ((a = o * (ne / s)), (c = -(a - u) / 2)),
          n.drawImage(i, c, d, a, u);
        const m = r.toDataURL();
        document.body.removeChild(r), t(m);
      }),
      (i.crossOrigin = "anonymous"),
      e.type.startsWith("image/svg+xml"))
    ) {
      const o = new FileReader();
      o.addEventListener("load", () => {
        o.result && (i.src = o.result);
      }),
        o.readAsDataURL(e);
    } else i.src = window.URL.createObjectURL(e);
  });
}
var Br = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  },
  name: "download",
  theme: "outlined",
};
const Xr = Br;
var pt = function (t, r) {
  return l.createElement(fe, Z(Z({}, t), {}, { ref: r, icon: Xr }));
};
pt.displayName = "DownloadOutlined";
const Wr = l.forwardRef(pt),
  qr = l.forwardRef((e, t) => {
    let {
      prefixCls: r,
      className: n,
      style: i,
      locale: o,
      listType: s,
      file: a,
      items: u,
      progress: c,
      iconRender: d,
      actionIconRender: m,
      itemRender: p,
      isImgUrl: b,
      showPreviewIcon: y,
      showRemoveIcon: D,
      showDownloadIcon: L,
      previewIcon: v,
      removeIcon: R,
      downloadIcon: j,
      onPreview: C,
      onDownload: g,
      onClose: P,
    } = e;
    var E, z;
    const { status: T } = a,
      [x, H] = l.useState(T);
    l.useEffect(() => {
      T !== "removed" && H(T);
    }, [T]);
    const [W, K] = l.useState(!1),
      B = l.useRef(null);
    l.useEffect(
      () => (
        (B.current = setTimeout(() => {
          K(!0);
        }, 300)),
        () => {
          B.current && clearTimeout(B.current);
        }
      ),
      []
    );
    const I = d(a);
    let Y = l.createElement("div", { className: `${r}-icon` }, I);
    if (s === "picture" || s === "picture-card" || s === "picture-circle")
      if (x === "uploading" || (!a.thumbUrl && !a.url)) {
        const U = k({
          [`${r}-list-item-thumbnail`]: !0,
          [`${r}-list-item-file`]: x !== "uploading",
        });
        Y = l.createElement("div", { className: U }, I);
      } else {
        const U =
            b != null && b(a)
              ? l.createElement("img", {
                  src: a.thumbUrl || a.url,
                  alt: a.name,
                  className: `${r}-list-item-image`,
                  crossOrigin: a.crossOrigin,
                })
              : I,
          re = k({
            [`${r}-list-item-thumbnail`]: !0,
            [`${r}-list-item-file`]: b && !b(a),
          });
        Y = l.createElement(
          "a",
          {
            className: re,
            onClick: (ce) => C(a, ce),
            href: a.url || a.thumbUrl,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          U
        );
      }
    const X = k(`${r}-list-item`, `${r}-list-item-${x}`),
      q =
        typeof a.linkProps == "string" ? JSON.parse(a.linkProps) : a.linkProps,
      V = D
        ? m(
            (typeof R == "function" ? R(a) : R) || l.createElement(wr, null),
            () => P(a),
            r,
            o.removeFile
          )
        : null,
      M =
        L && x === "done"
          ? m(
              (typeof j == "function" ? j(a) : j) || l.createElement(Wr, null),
              () => g(a),
              r,
              o.downloadFile
            )
          : null,
      J =
        s !== "picture-card" &&
        s !== "picture-circle" &&
        l.createElement(
          "span",
          {
            key: "download-delete",
            className: k(`${r}-list-item-actions`, {
              picture: s === "picture",
            }),
          },
          M,
          V
        ),
      f = k(`${r}-list-item-name`),
      S = a.url
        ? [
            l.createElement(
              "a",
              Object.assign(
                {
                  key: "view",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: f,
                  title: a.name,
                },
                q,
                { href: a.url, onClick: (U) => C(a, U) }
              ),
              a.name
            ),
            J,
          ]
        : [
            l.createElement(
              "span",
              {
                key: "view",
                className: f,
                onClick: (U) => C(a, U),
                title: a.name,
              },
              a.name
            ),
            J,
          ],
      _ = { pointerEvents: "none", opacity: 0.5 },
      A = y
        ? l.createElement(
            "a",
            {
              href: a.url || a.thumbUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              style: a.url || a.thumbUrl ? void 0 : _,
              onClick: (U) => C(a, U),
              title: o.previewFile,
            },
            typeof v == "function" ? v(a) : v || l.createElement(Rt, null)
          )
        : null,
      ee =
        (s === "picture-card" || s === "picture-circle") &&
        x !== "uploading" &&
        l.createElement(
          "span",
          { className: `${r}-list-item-actions` },
          A,
          x === "done" && M,
          V
        ),
      { getPrefixCls: Q } = l.useContext($e),
      we = Q(),
      le = l.createElement(
        "div",
        { className: X },
        Y,
        S,
        ee,
        W &&
          l.createElement(
            ot,
            {
              motionName: `${we}-fade`,
              visible: x === "uploading",
              motionDeadline: 2e3,
            },
            (U) => {
              let { className: re } = U;
              const ce =
                "percent" in a
                  ? l.createElement(
                      br,
                      Object.assign({}, c, { type: "line", percent: a.percent })
                    )
                  : null;
              return l.createElement(
                "div",
                { className: k(`${r}-list-item-progress`, re) },
                ce
              );
            }
          )
      ),
      F =
        a.response && typeof a.response == "string"
          ? a.response
          : ((E = a.error) === null || E === void 0 ? void 0 : E.statusText) ||
            ((z = a.error) === null || z === void 0 ? void 0 : z.message) ||
            o.uploadError,
      te =
        x === "error"
          ? l.createElement(
              Je,
              { title: F, getPopupContainer: (U) => U.parentNode },
              le
            )
          : le;
    return l.createElement(
      "div",
      { className: k(`${r}-list-item-container`, n), style: i, ref: t },
      p
        ? p(te, a, u, {
            download: g.bind(null, a),
            preview: C.bind(null, a),
            remove: P.bind(null, a),
          })
        : te
    );
  }),
  Vr = qr,
  Gr = (e, t) => {
    const {
        listType: r = "text",
        previewFile: n = Hr,
        onPreview: i,
        onDownload: o,
        onRemove: s,
        locale: a,
        iconRender: u,
        isImageUrl: c = _r,
        prefixCls: d,
        items: m = [],
        showPreviewIcon: p = !0,
        showRemoveIcon: b = !0,
        showDownloadIcon: y = !1,
        removeIcon: D,
        previewIcon: L,
        downloadIcon: v,
        progress: R = { strokeWidth: 2, showInfo: !1 },
        appendAction: j,
        appendActionVisible: C = !0,
        itemRender: g,
      } = e,
      P = Bt(),
      [E, z] = l.useState(!1);
    l.useEffect(() => {
      (r !== "picture" && r !== "picture-card" && r !== "picture-circle") ||
        (m || []).forEach((f) => {
          typeof document > "u" ||
            typeof window > "u" ||
            !window.FileReader ||
            !window.File ||
            !(
              f.originFileObj instanceof File || f.originFileObj instanceof Blob
            ) ||
            f.thumbUrl !== void 0 ||
            ((f.thumbUrl = ""),
            n &&
              n(f.originFileObj).then((S) => {
                (f.thumbUrl = S || ""), P();
              }));
        });
    }, [r, m, n]),
      l.useEffect(() => {
        z(!0);
      }, []);
    const T = (f, S) => {
        if (i) return S == null || S.preventDefault(), i(f);
      },
      x = (f) => {
        typeof o == "function" ? o(f) : f.url && window.open(f.url);
      },
      H = (f) => {
        s == null || s(f);
      },
      W = (f) => {
        if (u) return u(f, r);
        const S = f.status === "uploading",
          _ = c && c(f) ? l.createElement(kr, null) : l.createElement(Lr, null);
        let A = S ? l.createElement(Ue, null) : l.createElement(Tr, null);
        return (
          r === "picture"
            ? (A = S ? l.createElement(Ue, null) : _)
            : (r === "picture-card" || r === "picture-circle") &&
              (A = S ? a.uploading : _),
          A
        );
      },
      K = (f, S, _, A) => {
        const ee = {
          type: "text",
          size: "small",
          title: A,
          onClick: (Q) => {
            S(), ze(f) && f.props.onClick && f.props.onClick(Q);
          },
          className: `${_}-list-item-action`,
        };
        if (ze(f)) {
          const Q = ke(
            f,
            Object.assign(Object.assign({}, f.props), { onClick: () => {} })
          );
          return l.createElement(_e, Object.assign({}, ee, { icon: Q }));
        }
        return l.createElement(
          _e,
          Object.assign({}, ee),
          l.createElement("span", null, f)
        );
      };
    l.useImperativeHandle(t, () => ({ handlePreview: T, handleDownload: x }));
    const { getPrefixCls: B } = l.useContext($e),
      I = B("upload", d),
      Y = B(),
      X = k({ [`${I}-list`]: !0, [`${I}-list-${r}`]: !0 }),
      q = ie(m.map((f) => ({ key: f.uid, file: f })));
    let M = {
      motionDeadline: 2e3,
      motionName: `${I}-${
        r === "picture-card" || r === "picture-circle"
          ? "animate-inline"
          : "animate"
      }`,
      keys: q,
      motionAppear: E,
    };
    const J = l.useMemo(() => {
      const f = Object.assign({}, jt(Y));
      return delete f.onAppearEnd, delete f.onEnterEnd, delete f.onLeaveEnd, f;
    }, [Y]);
    return (
      r !== "picture-card" &&
        r !== "picture-circle" &&
        (M = Object.assign(Object.assign({}, J), M)),
      l.createElement(
        "div",
        { className: X },
        l.createElement(Lt, Object.assign({}, M, { component: !1 }), (f) => {
          let { key: S, file: _, className: A, style: ee } = f;
          return l.createElement(Vr, {
            key: S,
            locale: a,
            prefixCls: I,
            className: A,
            style: ee,
            file: _,
            items: m,
            progress: R,
            listType: r,
            isImgUrl: c,
            showPreviewIcon: p,
            showRemoveIcon: b,
            showDownloadIcon: y,
            removeIcon: D,
            previewIcon: L,
            downloadIcon: v,
            iconRender: W,
            actionIconRender: K,
            itemRender: g,
            onPreview: T,
            onDownload: x,
            onClose: H,
          });
        }),
        j &&
          l.createElement(
            ot,
            Object.assign({}, M, { visible: C, forceRender: !0 }),
            (f) => {
              let { className: S, style: _ } = f;
              return ke(j, (A) => ({
                className: k(A.className, S),
                style: Object.assign(
                  Object.assign(Object.assign({}, _), {
                    pointerEvents: S ? "none" : void 0,
                  }),
                  A.style
                ),
              }));
            }
          )
      )
    );
  },
  Kr = l.forwardRef(Gr),
  Jr = Kr,
  Qr = (e) => {
    const { componentCls: t, iconCls: r } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-drag`]: {
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          background: e.colorFillAlter,
          border: `${e.lineWidth}px dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: "pointer",
          transition: `border-color ${e.motionDurationSlow}`,
          [t]: { padding: `${e.padding}px 0` },
          [`${t}-btn`]: {
            display: "table",
            width: "100%",
            height: "100%",
            outline: "none",
          },
          [`${t}-drag-container`]: {
            display: "table-cell",
            verticalAlign: "middle",
          },
          [`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimaryHover },
          [`p${t}-drag-icon`]: {
            marginBottom: e.margin,
            [r]: { color: e.colorPrimary, fontSize: e.uploadThumbnailSize },
          },
          [`p${t}-text`]: {
            margin: `0 0 ${e.marginXXS}px`,
            color: e.colorTextHeading,
            fontSize: e.fontSizeLG,
          },
          [`p${t}-hint`]: {
            color: e.colorTextDescription,
            fontSize: e.fontSize,
          },
          [`&${t}-disabled`]: {
            cursor: "not-allowed",
            [`p${t}-drag-icon ${r},
            p${t}-text,
            p${t}-hint
          `]: { color: e.colorTextDisabled },
          },
        },
      },
    };
  },
  Yr = Qr,
  Zr = (e) => {
    const {
        componentCls: t,
        antCls: r,
        iconCls: n,
        fontSize: i,
        lineHeight: o,
      } = e,
      s = `${t}-list-item`,
      a = `${s}-actions`,
      u = `${s}-action`,
      c = Math.round(i * o);
    return {
      [`${t}-wrapper`]: {
        [`${t}-list`]: Object.assign(Object.assign({}, it()), {
          lineHeight: e.lineHeight,
          [s]: {
            position: "relative",
            height: e.lineHeight * i,
            marginTop: e.marginXS,
            fontSize: i,
            display: "flex",
            alignItems: "center",
            transition: `background-color ${e.motionDurationSlow}`,
            "&:hover": { backgroundColor: e.controlItemBgHover },
            [`${s}-name`]: Object.assign(Object.assign({}, at), {
              padding: `0 ${e.paddingXS}px`,
              lineHeight: o,
              flex: "auto",
              transition: `all ${e.motionDurationSlow}`,
            }),
            [a]: {
              [u]: { opacity: 0 },
              [`${u}${r}-btn-sm`]: {
                height: c,
                border: 0,
                lineHeight: 1,
                "> span": { transform: "scale(1)" },
              },
              [`
              ${u}:focus,
              &.picture ${u}
            `]: { opacity: 1 },
              [n]: {
                color: e.colorTextDescription,
                transition: `all ${e.motionDurationSlow}`,
              },
              [`&:hover ${n}`]: { color: e.colorText },
            },
            [`${t}-icon ${n}`]: { color: e.colorTextDescription, fontSize: i },
            [`${s}-progress`]: {
              position: "absolute",
              bottom: -e.uploadProgressOffset,
              width: "100%",
              paddingInlineStart: i + e.paddingXS,
              fontSize: i,
              lineHeight: 0,
              pointerEvents: "none",
              "> div": { margin: 0 },
            },
          },
          [`${s}:hover ${u}`]: { opacity: 1, color: e.colorText },
          [`${s}-error`]: {
            color: e.colorError,
            [`${s}-name, ${t}-icon ${n}`]: { color: e.colorError },
            [a]: {
              [`${n}, ${n}:hover`]: { color: e.colorError },
              [u]: { opacity: 1 },
            },
          },
          [`${t}-list-item-container`]: {
            transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
            "&::before": {
              display: "table",
              width: 0,
              height: 0,
              content: '""',
            },
          },
        }),
      },
    };
  },
  en = Zr,
  Ve = new Fe("uploadAnimateInlineIn", {
    from: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 },
  }),
  Ge = new Fe("uploadAnimateInlineOut", {
    to: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 },
  }),
  tn = (e) => {
    const { componentCls: t } = e,
      r = `${t}-animate-inline`;
    return [
      {
        [`${t}-wrapper`]: {
          [`${r}-appear, ${r}-enter, ${r}-leave`]: {
            animationDuration: e.motionDurationSlow,
            animationTimingFunction: e.motionEaseInOutCirc,
            animationFillMode: "forwards",
          },
          [`${r}-appear, ${r}-enter`]: { animationName: Ve },
          [`${r}-leave`]: { animationName: Ge },
        },
      },
      Ve,
      Ge,
    ];
  },
  rn = tn,
  nn = (e) => {
    const {
        componentCls: t,
        iconCls: r,
        uploadThumbnailSize: n,
        uploadProgressOffset: i,
      } = e,
      o = `${t}-list`,
      s = `${o}-item`;
    return {
      [`${t}-wrapper`]: {
        [`
        ${o}${o}-picture,
        ${o}${o}-picture-card,
        ${o}${o}-picture-circle
      `]: {
          [s]: {
            position: "relative",
            height: n + e.lineWidth * 2 + e.paddingXS * 2,
            padding: e.paddingXS,
            border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadiusLG,
            "&:hover": { background: "transparent" },
            [`${s}-thumbnail`]: Object.assign(Object.assign({}, at), {
              width: n,
              height: n,
              lineHeight: `${n + e.paddingSM}px`,
              textAlign: "center",
              flex: "none",
              [r]: { fontSize: e.fontSizeHeading2, color: e.colorPrimary },
              img: {
                display: "block",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              },
            }),
            [`${s}-progress`]: {
              bottom: i,
              width: `calc(100% - ${e.paddingSM * 2}px)`,
              marginTop: 0,
              paddingInlineStart: n + e.paddingXS,
            },
          },
          [`${s}-error`]: {
            borderColor: e.colorError,
            [`${s}-thumbnail ${r}`]: {
              ["svg path[fill='#e6f7ff']"]: { fill: e.colorErrorBg },
              ["svg path[fill='#1890ff']"]: { fill: e.colorError },
            },
          },
          [`${s}-uploading`]: {
            borderStyle: "dashed",
            [`${s}-name`]: { marginBottom: i },
          },
        },
        [`${o}${o}-picture-circle ${s}`]: {
          [`&, &::before, ${s}-thumbnail`]: { borderRadius: "50%" },
        },
      },
    };
  },
  on = (e) => {
    const {
        componentCls: t,
        iconCls: r,
        fontSizeLG: n,
        colorTextLightSolid: i,
      } = e,
      o = `${t}-list`,
      s = `${o}-item`,
      a = e.uploadPicCardSize;
    return {
      [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, it()), {
        display: "inline-block",
        width: "100%",
        [`${t}${t}-select`]: {
          width: a,
          height: a,
          marginInlineEnd: e.marginXS,
          marginBottom: e.marginXS,
          textAlign: "center",
          verticalAlign: "top",
          backgroundColor: e.colorFillAlter,
          border: `${e.lineWidth}px dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: "pointer",
          transition: `border-color ${e.motionDurationSlow}`,
          [`> ${t}`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
          },
          [`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimary },
        },
        [`${o}${o}-picture-card, ${o}${o}-picture-circle`]: {
          [`${o}-item-container`]: {
            display: "inline-block",
            width: a,
            height: a,
            marginBlock: `0 ${e.marginXS}px`,
            marginInline: `0 ${e.marginXS}px`,
            verticalAlign: "top",
          },
          "&::after": { display: "none" },
          [s]: {
            height: "100%",
            margin: 0,
            "&::before": {
              position: "absolute",
              zIndex: 1,
              width: `calc(100% - ${e.paddingXS * 2}px)`,
              height: `calc(100% - ${e.paddingXS * 2}px)`,
              backgroundColor: e.colorBgMask,
              opacity: 0,
              transition: `all ${e.motionDurationSlow}`,
              content: '" "',
            },
          },
          [`${s}:hover`]: { [`&::before, ${s}-actions`]: { opacity: 1 } },
          [`${s}-actions`]: {
            position: "absolute",
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            whiteSpace: "nowrap",
            textAlign: "center",
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            [`${r}-eye, ${r}-download, ${r}-delete`]: {
              zIndex: 10,
              width: n,
              margin: `0 ${e.marginXXS}px`,
              fontSize: n,
              cursor: "pointer",
              transition: `all ${e.motionDurationSlow}`,
              svg: { verticalAlign: "baseline" },
            },
          },
          [`${s}-actions, ${s}-actions:hover`]: {
            [`${r}-eye, ${r}-download, ${r}-delete`]: {
              color: new Ft(i).setAlpha(0.65).toRgbString(),
              "&:hover": { color: i },
            },
          },
          [`${s}-thumbnail, ${s}-thumbnail img`]: {
            position: "static",
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          },
          [`${s}-name`]: { display: "none", textAlign: "center" },
          [`${s}-file + ${s}-name`]: {
            position: "absolute",
            bottom: e.margin,
            display: "block",
            width: `calc(100% - ${e.paddingXS * 2}px)`,
          },
          [`${s}-uploading`]: {
            [`&${s}`]: { backgroundColor: e.colorFillAlter },
            [`&::before, ${r}-eye, ${r}-download, ${r}-delete`]: {
              display: "none",
            },
          },
          [`${s}-progress`]: {
            bottom: e.marginXL,
            width: `calc(100% - ${e.paddingXS * 2}px)`,
            paddingInlineStart: 0,
          },
        },
      }),
      [`${t}-wrapper${t}-picture-circle-wrapper`]: {
        [`${t}${t}-select`]: { borderRadius: "50%" },
      },
    };
  },
  an = (e) => {
    const { componentCls: t } = e;
    return { [`${t}-rtl`]: { direction: "rtl" } };
  },
  sn = an,
  ln = (e) => {
    const { componentCls: t, colorTextDisabled: r } = e;
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({}, Ze(e)), {
        [t]: { outline: 0, "input[type='file']": { cursor: "pointer" } },
        [`${t}-select`]: { display: "inline-block" },
        [`${t}-disabled`]: { color: r, cursor: "not-allowed" },
      }),
    };
  },
  cn = Qe("Upload", (e) => {
    const {
        fontSizeHeading3: t,
        fontSize: r,
        lineHeight: n,
        lineWidth: i,
        controlHeightLG: o,
      } = e,
      s = Math.round(r * n),
      a = Ye(e, {
        uploadThumbnailSize: t * 2,
        uploadProgressOffset: s / 2 + i,
        uploadPicCardSize: o * 2.55,
      });
    return [ln(a), Yr(a), nn(a), on(a), en(a), rn(a), sn(a), Nt(a)];
  });
var un =
  (globalThis && globalThis.__awaiter) ||
  function (e, t, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function a(d) {
        try {
          c(n.next(d));
        } catch (m) {
          s(m);
        }
      }
      function u(d) {
        try {
          c(n.throw(d));
        } catch (m) {
          s(m);
        }
      }
      function c(d) {
        d.done ? o(d.value) : i(d.value).then(a, u);
      }
      c((n = n.apply(e, t || [])).next());
    });
  };
const me = `__LIST_IGNORE_${Date.now()}__`,
  dn = (e, t) => {
    const {
        fileList: r,
        defaultFileList: n,
        onRemove: i,
        showUploadList: o = !0,
        listType: s = "text",
        onPreview: a,
        onDownload: u,
        onChange: c,
        onDrop: d,
        previewFile: m,
        disabled: p,
        locale: b,
        iconRender: y,
        isImageUrl: D,
        progress: L,
        prefixCls: v,
        className: R,
        type: j = "select",
        children: C,
        style: g,
        itemRender: P,
        maxCount: E,
        data: z = {},
        multiple: T = !1,
        action: x = "",
        accept: H = "",
        supportServerRender: W = !0,
      } = e,
      K = l.useContext(Tt),
      B = p ?? K,
      [I, Y] = Mt(n || [], { value: r, postState: (h) => h ?? [] }),
      [X, q] = l.useState("drop"),
      V = l.useRef(null);
    l.useMemo(() => {
      const h = Date.now();
      (r || []).forEach((w, N) => {
        !w.uid && !Object.isFrozen(w) && (w.uid = `__AUTO__${h}_${N}__`);
      });
    }, [r]);
    const M = (h, w, N) => {
        let $ = ie(w);
        E === 1 ? ($ = $.slice(-1)) : E && ($ = $.slice(0, E)),
          Ut.flushSync(() => {
            Y($);
          });
        const O = { file: h, fileList: $ };
        N && (O.event = N), c == null || c(O);
      },
      J = (h, w) =>
        un(void 0, void 0, void 0, function* () {
          const { beforeUpload: N, transformFile: $ } = e;
          let O = h;
          if (N) {
            const G = yield N(h, w);
            if (G === !1) return !1;
            if ((delete h[me], G === me))
              return (
                Object.defineProperty(h, me, { value: !0, configurable: !0 }),
                !1
              );
            typeof G == "object" && G && (O = G);
          }
          return $ && (O = yield $(O)), O;
        }),
      f = (h) => {
        const w = h.filter((O) => !O.file[me]);
        if (!w.length) return;
        const N = w.map((O) => ge(O.file));
        let $ = ie(I);
        N.forEach((O) => {
          $ = he(O, $);
        }),
          N.forEach((O, G) => {
            let ue = O;
            if (w[G].parsedFile) O.status = "uploading";
            else {
              const { originFileObj: se } = O;
              let oe;
              try {
                oe = new File([se], se.name, { type: se.type });
              } catch {
                (oe = new Blob([se], { type: se.type })),
                  (oe.name = se.name),
                  (oe.lastModifiedDate = new Date()),
                  (oe.lastModified = new Date().getTime());
              }
              (oe.uid = O.uid), (ue = oe);
            }
            M(ue, $);
          });
      },
      S = (h, w, N) => {
        try {
          typeof h == "string" && (h = JSON.parse(h));
        } catch {}
        if (!De(w, I)) return;
        const $ = ge(w);
        ($.status = "done"), ($.percent = 100), ($.response = h), ($.xhr = N);
        const O = he($, I);
        M($, O);
      },
      _ = (h, w) => {
        if (!De(w, I)) return;
        const N = ge(w);
        (N.status = "uploading"), (N.percent = h.percent);
        const $ = he(N, I);
        M(N, $, h);
      },
      A = (h, w, N) => {
        if (!De(N, I)) return;
        const $ = ge(N);
        ($.error = h), ($.response = w), ($.status = "error");
        const O = he($, I);
        M($, O);
      },
      ee = (h) => {
        let w;
        Promise.resolve(typeof i == "function" ? i(h) : i).then((N) => {
          var $;
          if (N === !1) return;
          const O = Ur(h, I);
          O &&
            ((w = Object.assign(Object.assign({}, h), { status: "removed" })),
            I == null ||
              I.forEach((G) => {
                const ue = w.uid !== void 0 ? "uid" : "name";
                G[ue] === w[ue] &&
                  !Object.isFrozen(G) &&
                  (G.status = "removed");
              }),
            ($ = V.current) === null || $ === void 0 || $.abort(w),
            M(w, O));
        });
      },
      Q = (h) => {
        q(h.type), h.type === "drop" && (d == null || d(h));
      };
    l.useImperativeHandle(t, () => ({
      onBatchStart: f,
      onSuccess: S,
      onProgress: _,
      onError: A,
      fileList: I,
      upload: V.current,
    }));
    const { getPrefixCls: we, direction: le } = l.useContext($e),
      F = we("upload", v),
      te = Object.assign(
        Object.assign(
          { onBatchStart: f, onError: A, onProgress: _, onSuccess: S },
          e
        ),
        {
          data: z,
          multiple: T,
          action: x,
          accept: H,
          supportServerRender: W,
          prefixCls: F,
          disabled: B,
          beforeUpload: J,
          onChange: void 0,
        }
      );
    delete te.className, delete te.style, (!C || B) && delete te.id;
    const [U, re] = cn(F),
      [ce] = At("Upload", kt.Upload),
      {
        showRemoveIcon: ft,
        showPreviewIcon: gt,
        showDownloadIcon: ht,
        removeIcon: vt,
        previewIcon: bt,
        downloadIcon: yt,
      } = typeof o == "boolean" ? {} : o,
      Ce = (h, w) =>
        o
          ? l.createElement(Jr, {
              prefixCls: F,
              listType: s,
              items: I,
              previewFile: m,
              onPreview: a,
              onDownload: u,
              onRemove: ee,
              showRemoveIcon: !B && ft,
              showPreviewIcon: gt,
              showDownloadIcon: ht,
              removeIcon: vt,
              previewIcon: bt,
              downloadIcon: yt,
              iconRender: y,
              locale: Object.assign(Object.assign({}, ce), b),
              isImageUrl: D,
              progress: L,
              appendAction: h,
              appendActionVisible: w,
              itemRender: P,
            })
          : h,
      Se = { [`${F}-rtl`]: le === "rtl" };
    if (j === "drag") {
      const h = k(
        F,
        {
          [`${F}-drag`]: !0,
          [`${F}-drag-uploading`]: I.some((w) => w.status === "uploading"),
          [`${F}-drag-hover`]: X === "dragover",
          [`${F}-disabled`]: B,
          [`${F}-rtl`]: le === "rtl",
        },
        re
      );
      return U(
        l.createElement(
          "span",
          { className: k(`${F}-wrapper`, Se, R, re) },
          l.createElement(
            "div",
            {
              className: h,
              onDrop: Q,
              onDragOver: Q,
              onDragLeave: Q,
              style: g,
            },
            l.createElement(
              Le,
              Object.assign({}, te, { ref: V, className: `${F}-btn` }),
              l.createElement("div", { className: `${F}-drag-container` }, C)
            )
          ),
          Ce()
        )
      );
    }
    const $t = k(F, `${F}-select`, { [`${F}-disabled`]: B }),
      Me = ((h) =>
        l.createElement(
          "div",
          { className: $t, style: h },
          l.createElement(Le, Object.assign({}, te, { ref: V }))
        ))(C ? void 0 : { display: "none" });
    return U(
      s === "picture-card" || s === "picture-circle"
        ? l.createElement(
            "span",
            {
              className: k(
                `${F}-wrapper`,
                {
                  [`${F}-picture-card-wrapper`]: s === "picture-card",
                  [`${F}-picture-circle-wrapper`]: s === "picture-circle",
                },
                Se,
                R,
                re
              ),
            },
            Ce(Me, !!C)
          )
        : l.createElement(
            "span",
            { className: k(`${F}-wrapper`, Se, R, re) },
            Me,
            Ce()
          )
    );
  },
  pn = l.forwardRef(dn),
  mt = pn;
var mn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (r[n[i]] = e[n[i]]);
    return r;
  };
const fn = l.forwardRef((e, t) => {
    var { style: r, height: n } = e,
      i = mn(e, ["style", "height"]);
    return l.createElement(
      mt,
      Object.assign({ ref: t }, i, {
        type: "drag",
        style: Object.assign(Object.assign({}, r), { height: n }),
      })
    );
  }),
  gn = fn,
  Te = mt;
Te.Dragger = gn;
Te.LIST_IGNORE = me;
const hn = Te;
let ve;
async function vn() {
  if (ve) return ve;
  const e = await zt(
    () => import("./aliyun-oss-sdk-5b949d18.js").then((t) => t.a),
    [
      "assets/aliyun-oss-sdk-5b949d18.js",
      "assets/index-53175ba2.js",
      "assets/index-bd3a9276.css",
    ]
  ).then((t) => t.default);
  return (
    (ve = new e({
      accessKeyId: "LTAI5tPCa9s9Gmj8NLRkzpBn",
      accessKeySecret: "mQj9rENC2opUsdstwCXHIuC3zshDgj",
      bucket: "sillage-ui",
      region: "oss-cn-beijing",
      timeout: 0,
    })),
    ve
  );
}
function Sn(e) {
  const t = l.useId(),
    r = {
      showUploadList: { showPreviewIcon: !1 },
      customRequest({ file: n, onError: i }) {
        vn()
          .then(async (o) => await o.put(`images/${t}`, n))
          .then(({ url: o }) => {
            e.onChange(o);
          }, i);
      },
      listType: "picture-card",
      multiple: !1,
      fileList: e.value ? [{ uid: t, name: t, url: e.value }] : [],
      onChange(n) {
        const { fileList: i } = n;
        i.length === 0 && e.onChange("");
      },
    };
  return He.jsx(hn, { ...r, children: !e.value && He.jsx(_t, {}) });
}
export { Sn as default };
