import {
  v as d5,
  s as p5,
  i as A,
  aC as p1,
  r as Z,
  F as k5,
  d as L,
  o as F5,
  a5 as b1,
  b as K,
  c as v1,
  E as a,
  aD as T5,
  ai as d1,
  _ as T,
  e as H1,
  aE as P5,
  g as m5,
  h as D5,
  aF as x5,
  u as R5,
  w as q,
  a2 as O5,
  a3 as W1,
  a as N5,
  p as B5,
  q as W5,
  aG as E,
  x as z5,
  ag as $5,
  aH as _5,
  ab as z1,
} from "./index-841fcd0d.js";
var Pa = (function () {
  function t(o, e) {
    p5(this, t),
      A(this, "name", void 0),
      A(this, "style", void 0),
      A(this, "_keyframe", !0),
      (this.name = o),
      (this.style = e);
  }
  return (
    d5(t, [
      {
        key: "getName",
        value: function () {
          var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return e ? "".concat(e, "-").concat(this.name) : this.name;
        },
      },
    ]),
    t
  );
})();
function t1(t, o, e, l) {
  var r = p1.unstable_batchedUpdates
    ? function (n) {
        p1.unstable_batchedUpdates(e, n);
      }
    : e;
  return (
    t.addEventListener && t.addEventListener(o, r, l),
    {
      remove: function () {
        t.removeEventListener && t.removeEventListener(o, r, l);
      },
    }
  );
}
var U5 = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
        },
      },
    ],
  },
  name: "close",
  theme: "outlined",
};
const j5 = U5;
var v5 = function (o, e) {
  return Z.createElement(k5, L(L({}, o), {}, { ref: e, icon: j5 }));
};
v5.displayName = "CloseOutlined";
const Da = Z.forwardRef(v5),
  X5 = function () {
    if (typeof navigator > "u" || typeof window > "u") return !1;
    var t = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        t
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        t == null ? void 0 : t.substr(0, 4)
      )
    );
  };
var G5 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  q5 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  Y5 = ""
    .concat(G5, " ")
    .concat(q5)
    .split(/[\s\n]+/),
  K5 = "aria-",
  Q5 = "data-";
function $1(t, o) {
  return t.indexOf(o) === 0;
}
function xa(t) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    e;
  o === !1
    ? (e = { aria: !0, data: !0, attr: !0 })
    : o === !0
    ? (e = { aria: !0 })
    : (e = L({}, o));
  var l = {};
  return (
    Object.keys(t).forEach(function (r) {
      ((e.aria && (r === "role" || $1(r, K5))) ||
        (e.data && $1(r, Q5)) ||
        (e.attr && Y5.includes(r))) &&
        (l[r] = t[r]);
    }),
    l
  );
}
var J5 = Z.forwardRef(function (t, o) {
  var e = t.didUpdate,
    l = t.getContainer,
    r = t.children,
    h = Z.useRef(),
    n = Z.useRef();
  Z.useImperativeHandle(o, function () {
    return {};
  });
  var d = Z.useRef(!1);
  return (
    !d.current &&
      F5() &&
      ((n.current = l()), (h.current = n.current.parentNode), (d.current = !0)),
    Z.useEffect(function () {
      e == null || e(t);
    }),
    Z.useEffect(function () {
      return (
        n.current.parentNode === null &&
          h.current !== null &&
          h.current.appendChild(n.current),
        function () {
          var i, p;
          (i = n.current) === null ||
            i === void 0 ||
            (p = i.parentNode) === null ||
            p === void 0 ||
            p.removeChild(n.current);
        }
      );
    }, []),
    n.current ? p1.createPortal(r, n.current) : null
  );
});
function a0(t, o, e) {
  return e ? t[0] === o[0] : t[0] === o[0] && t[1] === o[1];
}
function t0(t, o, e) {
  var l = t[o] || {};
  return L(L({}, l), e);
}
function e0(t, o, e, l) {
  for (var r = e.points, h = Object.keys(t), n = 0; n < h.length; n += 1) {
    var d = h[n];
    if (a0(t[d].points, r, l)) return "".concat(o, "-placement-").concat(d);
  }
  return "";
}
function u5(t) {
  var o = t.prefixCls,
    e = t.motion,
    l = t.animation,
    r = t.transitionName;
  return (
    e ||
    (l
      ? { motionName: "".concat(o, "-").concat(l) }
      : r
      ? { motionName: r }
      : null)
  );
}
function n0(t) {
  var o = t.prefixCls,
    e = t.visible,
    l = t.zIndex,
    r = t.mask,
    h = t.maskMotion,
    n = t.maskAnimation,
    d = t.maskTransitionName;
  if (!r) return null;
  var i = {};
  return (
    (h || d || n) &&
      (i = L(
        { motionAppear: !0 },
        u5({ motion: h, prefixCls: o, transitionName: d, animation: n })
      )),
    Z.createElement(
      b1,
      K({}, i, { visible: e, removeOnLeave: !0 }),
      function (p) {
        var v = p.className;
        return Z.createElement("div", {
          style: { zIndex: l },
          className: v1("".concat(o, "-mask"), v),
        });
      }
    )
  );
}
function _1(t, o) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    o &&
      (l = l.filter(function (r) {
        return Object.getOwnPropertyDescriptor(t, r).enumerable;
      })),
      e.push.apply(e, l);
  }
  return e;
}
function U1(t) {
  for (var o = 1; o < arguments.length; o++) {
    var e = arguments[o] != null ? arguments[o] : {};
    o % 2
      ? _1(Object(e), !0).forEach(function (l) {
          c0(t, l, e[l]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
      : _1(Object(e)).forEach(function (l) {
          Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(e, l));
        });
  }
  return t;
}
function I1(t) {
  return (
    (I1 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              typeof Symbol == "function" &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    I1(t)
  );
}
function c0(t, o, e) {
  return (
    o in t
      ? Object.defineProperty(t, o, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[o] = e),
    t
  );
}
var a1,
  o0 = { Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-", O: "-o-" };
function m1() {
  if (a1 !== void 0) return a1;
  a1 = "";
  var t = document.createElement("p").style,
    o = "Transform";
  for (var e in o0) e + o in t && (a1 = e);
  return a1;
}
function Z5() {
  return m1() ? "".concat(m1(), "TransitionProperty") : "transitionProperty";
}
function u1() {
  return m1() ? "".concat(m1(), "Transform") : "transform";
}
function j1(t, o) {
  var e = Z5();
  e &&
    ((t.style[e] = o),
    e !== "transitionProperty" && (t.style.transitionProperty = o));
}
function M1(t, o) {
  var e = u1();
  e && ((t.style[e] = o), e !== "transform" && (t.style.transform = o));
}
function l0(t) {
  return t.style.transitionProperty || t.style[Z5()];
}
function r0(t) {
  var o = window.getComputedStyle(t, null),
    e = o.getPropertyValue("transform") || o.getPropertyValue(u1());
  if (e && e !== "none") {
    var l = e.replace(/[^0-9\-.,]/g, "").split(",");
    return { x: parseFloat(l[12] || l[4], 0), y: parseFloat(l[13] || l[5], 0) };
  }
  return { x: 0, y: 0 };
}
var h0 = /matrix\((.*)\)/,
  i0 = /matrix3d\((.*)\)/;
function d0(t, o) {
  var e = window.getComputedStyle(t, null),
    l = e.getPropertyValue("transform") || e.getPropertyValue(u1());
  if (l && l !== "none") {
    var r,
      h = l.match(h0);
    if (h)
      (h = h[1]),
        (r = h.split(",").map(function (d) {
          return parseFloat(d, 10);
        })),
        (r[4] = o.x),
        (r[5] = o.y),
        M1(t, "matrix(".concat(r.join(","), ")"));
    else {
      var n = l.match(i0)[1];
      (r = n.split(",").map(function (d) {
        return parseFloat(d, 10);
      })),
        (r[12] = o.x),
        (r[13] = o.y),
        M1(t, "matrix3d(".concat(r.join(","), ")"));
    }
  } else
    M1(
      t,
      "translateX("
        .concat(o.x, "px) translateY(")
        .concat(o.y, "px) translateZ(0)")
    );
}
var p0 = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
  c1;
function X1(t) {
  var o = t.style.display;
  (t.style.display = "none"), t.offsetHeight, (t.style.display = o);
}
function Y(t, o, e) {
  var l = e;
  if (I1(o) === "object") {
    for (var r in o) o.hasOwnProperty(r) && Y(t, r, o[r]);
    return;
  }
  if (typeof l < "u") {
    typeof l == "number" && (l = "".concat(l, "px")), (t.style[o] = l);
    return;
  }
  return c1(t, o);
}
function m0(t) {
  var o,
    e,
    l,
    r = t.ownerDocument,
    h = r.body,
    n = r && r.documentElement;
  return (
    (o = t.getBoundingClientRect()),
    (e = Math.floor(o.left)),
    (l = Math.floor(o.top)),
    (e -= n.clientLeft || h.clientLeft || 0),
    (l -= n.clientTop || h.clientTop || 0),
    { left: e, top: l }
  );
}
function s5(t, o) {
  var e = t["page".concat(o ? "Y" : "X", "Offset")],
    l = "scroll".concat(o ? "Top" : "Left");
  if (typeof e != "number") {
    var r = t.document;
    (e = r.documentElement[l]), typeof e != "number" && (e = r.body[l]);
  }
  return e;
}
function M5(t) {
  return s5(t);
}
function f5(t) {
  return s5(t, !0);
}
function n1(t) {
  var o = m0(t),
    e = t.ownerDocument,
    l = e.defaultView || e.parentWindow;
  return (o.left += M5(l)), (o.top += f5(l)), o;
}
function S1(t) {
  return t != null && t == t.window;
}
function A5(t) {
  return S1(t) ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
}
function v0(t, o, e) {
  var l = e,
    r = "",
    h = A5(t);
  return (
    (l = l || h.defaultView.getComputedStyle(t, null)),
    l && (r = l.getPropertyValue(o) || l[o]),
    r
  );
}
var u0 = new RegExp("^(".concat(p0, ")(?!px)[a-z%]+$"), "i"),
  Z0 = /^(top|right|bottom|left)$/,
  f1 = "currentStyle",
  A1 = "runtimeStyle",
  j = "left",
  s0 = "px";
function M0(t, o) {
  var e = t[f1] && t[f1][o];
  if (u0.test(e) && !Z0.test(o)) {
    var l = t.style,
      r = l[j],
      h = t[A1][j];
    (t[A1][j] = t[f1][j]),
      (l[j] = o === "fontSize" ? "1em" : e || 0),
      (e = l.pixelLeft + s0),
      (l[j] = r),
      (t[A1][j] = h);
  }
  return e === "" ? "auto" : e;
}
typeof window < "u" && (c1 = window.getComputedStyle ? v0 : M0);
function l1(t, o) {
  return t === "left"
    ? o.useCssRight
      ? "right"
      : t
    : o.useCssBottom
    ? "bottom"
    : t;
}
function G1(t) {
  if (t === "left") return "right";
  if (t === "right") return "left";
  if (t === "top") return "bottom";
  if (t === "bottom") return "top";
}
function q1(t, o, e) {
  Y(t, "position") === "static" && (t.style.position = "relative");
  var l = -999,
    r = -999,
    h = l1("left", e),
    n = l1("top", e),
    d = G1(h),
    i = G1(n);
  h !== "left" && (l = 999), n !== "top" && (r = 999);
  var p = "",
    v = n1(t);
  ("left" in o || "top" in o) && ((p = l0(t) || ""), j1(t, "none")),
    "left" in o && ((t.style[d] = ""), (t.style[h] = "".concat(l, "px"))),
    "top" in o && ((t.style[i] = ""), (t.style[n] = "".concat(r, "px"))),
    X1(t);
  var M = n1(t),
    s = {};
  for (var m in o)
    if (o.hasOwnProperty(m)) {
      var u = l1(m, e),
        w = m === "left" ? l : r,
        H = v[m] - M[m];
      u === m ? (s[u] = w + H) : (s[u] = w - H);
    }
  Y(t, s), X1(t), ("left" in o || "top" in o) && j1(t, p);
  var g = {};
  for (var V in o)
    if (o.hasOwnProperty(V)) {
      var I = l1(V, e),
        y = o[V] - v[V];
      V === I ? (g[I] = s[I] + y) : (g[I] = s[I] - y);
    }
  Y(t, g);
}
function f0(t, o) {
  var e = n1(t),
    l = r0(t),
    r = { x: l.x, y: l.y };
  "left" in o && (r.x = l.x + o.left - e.left),
    "top" in o && (r.y = l.y + o.top - e.top),
    d0(t, r);
}
function A0(t, o, e) {
  if (e.ignoreShake) {
    var l = n1(t),
      r = l.left.toFixed(0),
      h = l.top.toFixed(0),
      n = o.left.toFixed(0),
      d = o.top.toFixed(0);
    if (r === n && h === d) return;
  }
  e.useCssRight || e.useCssBottom
    ? q1(t, o, e)
    : e.useCssTransform && u1() in document.body.style
    ? f0(t, o)
    : q1(t, o, e);
}
function k1(t, o) {
  for (var e = 0; e < t.length; e++) o(t[e]);
}
function E5(t) {
  return c1(t, "boxSizing") === "border-box";
}
var E0 = ["margin", "border", "padding"],
  C1 = -1,
  w0 = 2,
  L1 = 1,
  g0 = 0;
function V0(t, o, e) {
  var l = {},
    r = t.style,
    h;
  for (h in o) o.hasOwnProperty(h) && ((l[h] = r[h]), (r[h] = o[h]));
  e.call(t);
  for (h in o) o.hasOwnProperty(h) && (r[h] = l[h]);
}
function e1(t, o, e) {
  var l = 0,
    r,
    h,
    n;
  for (h = 0; h < o.length; h++)
    if (((r = o[h]), r))
      for (n = 0; n < e.length; n++) {
        var d = void 0;
        r === "border"
          ? (d = "".concat(r).concat(e[n], "Width"))
          : (d = r + e[n]),
          (l += parseFloat(c1(t, d)) || 0);
      }
  return l;
}
var R = {
  getParent: function (o) {
    var e = o;
    do e.nodeType === 11 && e.host ? (e = e.host) : (e = e.parentNode);
    while (e && e.nodeType !== 1 && e.nodeType !== 9);
    return e;
  },
};
k1(["Width", "Height"], function (t) {
  (R["doc".concat(t)] = function (o) {
    var e = o.document;
    return Math.max(
      e.documentElement["scroll".concat(t)],
      e.body["scroll".concat(t)],
      R["viewport".concat(t)](e)
    );
  }),
    (R["viewport".concat(t)] = function (o) {
      var e = "client".concat(t),
        l = o.document,
        r = l.body,
        h = l.documentElement,
        n = h[e];
      return (l.compatMode === "CSS1Compat" && n) || (r && r[e]) || n;
    });
});
function Y1(t, o, e) {
  var l = e;
  if (S1(t)) return o === "width" ? R.viewportWidth(t) : R.viewportHeight(t);
  if (t.nodeType === 9) return o === "width" ? R.docWidth(t) : R.docHeight(t);
  var r = o === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
    h = Math.floor(
      o === "width"
        ? t.getBoundingClientRect().width
        : t.getBoundingClientRect().height
    ),
    n = E5(t),
    d = 0;
  (h == null || h <= 0) &&
    ((h = void 0),
    (d = c1(t, o)),
    (d == null || Number(d) < 0) && (d = t.style[o] || 0),
    (d = Math.floor(parseFloat(d)) || 0)),
    l === void 0 && (l = n ? L1 : C1);
  var i = h !== void 0 || n,
    p = h || d;
  return l === C1
    ? i
      ? p - e1(t, ["border", "padding"], r)
      : d
    : i
    ? l === L1
      ? p
      : p + (l === w0 ? -e1(t, ["border"], r) : e1(t, ["margin"], r))
    : d + e1(t, E0.slice(l), r);
}
var H0 = { position: "absolute", visibility: "hidden", display: "block" };
function K1() {
  for (var t = arguments.length, o = new Array(t), e = 0; e < t; e++)
    o[e] = arguments[e];
  var l,
    r = o[0];
  return (
    r.offsetWidth !== 0
      ? (l = Y1.apply(void 0, o))
      : V0(r, H0, function () {
          l = Y1.apply(void 0, o);
        }),
    l
  );
}
k1(["width", "height"], function (t) {
  var o = t.charAt(0).toUpperCase() + t.slice(1);
  R["outer".concat(o)] = function (l, r) {
    return l && K1(l, t, r ? g0 : L1);
  };
  var e = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  R[t] = function (l, r) {
    var h = r;
    if (h !== void 0) {
      if (l) {
        var n = E5(l);
        return n && (h += e1(l, ["padding", "border"], e)), Y(l, t, h);
      }
      return;
    }
    return l && K1(l, t, C1);
  };
});
function w5(t, o) {
  for (var e in o) o.hasOwnProperty(e) && (t[e] = o[e]);
  return t;
}
var f = {
  getWindow: function (o) {
    if (o && o.document && o.setTimeout) return o;
    var e = o.ownerDocument || o;
    return e.defaultView || e.parentWindow;
  },
  getDocument: A5,
  offset: function (o, e, l) {
    if (typeof e < "u") A0(o, e, l || {});
    else return n1(o);
  },
  isWindow: S1,
  each: k1,
  css: Y,
  clone: function (o) {
    var e,
      l = {};
    for (e in o) o.hasOwnProperty(e) && (l[e] = o[e]);
    var r = o.overflow;
    if (r) for (e in o) o.hasOwnProperty(e) && (l.overflow[e] = o.overflow[e]);
    return l;
  },
  mix: w5,
  getWindowScrollLeft: function (o) {
    return M5(o);
  },
  getWindowScrollTop: function (o) {
    return f5(o);
  },
  merge: function () {
    for (var o = {}, e = 0; e < arguments.length; e++)
      f.mix(o, e < 0 || arguments.length <= e ? void 0 : arguments[e]);
    return o;
  },
  viewportWidth: 0,
  viewportHeight: 0,
};
w5(f, R);
var E1 = f.getParent;
function y1(t) {
  if (f.isWindow(t) || t.nodeType === 9) return null;
  var o = f.getDocument(t),
    e = o.body,
    l,
    r = f.css(t, "position"),
    h = r === "fixed" || r === "absolute";
  if (!h) return t.nodeName.toLowerCase() === "html" ? null : E1(t);
  for (l = E1(t); l && l !== e && l.nodeType !== 9; l = E1(l))
    if (((r = f.css(l, "position")), r !== "static")) return l;
  return null;
}
var Q1 = f.getParent;
function I0(t) {
  if (f.isWindow(t) || t.nodeType === 9) return !1;
  var o = f.getDocument(t),
    e = o.body,
    l = null;
  for (l = Q1(t); l && l !== e && l !== o; l = Q1(l)) {
    var r = f.css(l, "position");
    if (r === "fixed") return !0;
  }
  return !1;
}
function F1(t, o) {
  for (
    var e = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
      l = y1(t),
      r = f.getDocument(t),
      h = r.defaultView || r.parentWindow,
      n = r.body,
      d = r.documentElement;
    l;

  ) {
    if (
      (navigator.userAgent.indexOf("MSIE") === -1 || l.clientWidth !== 0) &&
      l !== n &&
      l !== d &&
      f.css(l, "overflow") !== "visible"
    ) {
      var i = f.offset(l);
      (i.left += l.clientLeft),
        (i.top += l.clientTop),
        (e.top = Math.max(e.top, i.top)),
        (e.right = Math.min(e.right, i.left + l.clientWidth)),
        (e.bottom = Math.min(e.bottom, i.top + l.clientHeight)),
        (e.left = Math.max(e.left, i.left));
    } else if (l === n || l === d) break;
    l = y1(l);
  }
  var p = null;
  if (!f.isWindow(t) && t.nodeType !== 9) {
    p = t.style.position;
    var v = f.css(t, "position");
    v === "absolute" && (t.style.position = "fixed");
  }
  var M = f.getWindowScrollLeft(h),
    s = f.getWindowScrollTop(h),
    m = f.viewportWidth(h),
    u = f.viewportHeight(h),
    w = d.scrollWidth,
    H = d.scrollHeight,
    g = window.getComputedStyle(n);
  if (
    (g.overflowX === "hidden" && (w = h.innerWidth),
    g.overflowY === "hidden" && (H = h.innerHeight),
    t.style && (t.style.position = p),
    o || I0(t))
  )
    (e.left = Math.max(e.left, M)),
      (e.top = Math.max(e.top, s)),
      (e.right = Math.min(e.right, M + m)),
      (e.bottom = Math.min(e.bottom, s + u));
  else {
    var V = Math.max(w, M + m);
    e.right = Math.min(e.right, V);
    var I = Math.max(H, s + u);
    e.bottom = Math.min(e.bottom, I);
  }
  return e.top >= 0 && e.left >= 0 && e.bottom > e.top && e.right > e.left
    ? e
    : null;
}
function C0(t, o, e, l) {
  var r = f.clone(t),
    h = { width: o.width, height: o.height };
  return (
    l.adjustX && r.left < e.left && (r.left = e.left),
    l.resizeWidth &&
      r.left >= e.left &&
      r.left + h.width > e.right &&
      (h.width -= r.left + h.width - e.right),
    l.adjustX &&
      r.left + h.width > e.right &&
      (r.left = Math.max(e.right - h.width, e.left)),
    l.adjustY && r.top < e.top && (r.top = e.top),
    l.resizeHeight &&
      r.top >= e.top &&
      r.top + h.height > e.bottom &&
      (h.height -= r.top + h.height - e.bottom),
    l.adjustY &&
      r.top + h.height > e.bottom &&
      (r.top = Math.max(e.bottom - h.height, e.top)),
    f.mix(r, h)
  );
}
function T1(t) {
  var o, e, l;
  if (!f.isWindow(t) && t.nodeType !== 9)
    (o = f.offset(t)), (e = f.outerWidth(t)), (l = f.outerHeight(t));
  else {
    var r = f.getWindow(t);
    (o = { left: f.getWindowScrollLeft(r), top: f.getWindowScrollTop(r) }),
      (e = f.viewportWidth(r)),
      (l = f.viewportHeight(r));
  }
  return (o.width = e), (o.height = l), o;
}
function J1(t, o) {
  var e = o.charAt(0),
    l = o.charAt(1),
    r = t.width,
    h = t.height,
    n = t.left,
    d = t.top;
  return (
    e === "c" ? (d += h / 2) : e === "b" && (d += h),
    l === "c" ? (n += r / 2) : l === "r" && (n += r),
    { left: n, top: d }
  );
}
function r1(t, o, e, l, r) {
  var h = J1(o, e[1]),
    n = J1(t, e[0]),
    d = [n.left - h.left, n.top - h.top];
  return {
    left: Math.round(t.left - d[0] + l[0] - r[0]),
    top: Math.round(t.top - d[1] + l[1] - r[1]),
  };
}
function a5(t, o, e) {
  return t.left < e.left || t.left + o.width > e.right;
}
function t5(t, o, e) {
  return t.top < e.top || t.top + o.height > e.bottom;
}
function L0(t, o, e) {
  return t.left > e.right || t.left + o.width < e.left;
}
function y0(t, o, e) {
  return t.top > e.bottom || t.top + o.height < e.top;
}
function h1(t, o, e) {
  var l = [];
  return (
    f.each(t, function (r) {
      l.push(
        r.replace(o, function (h) {
          return e[h];
        })
      );
    }),
    l
  );
}
function i1(t, o) {
  return (t[o] = -t[o]), t;
}
function e5(t, o) {
  var e;
  return (
    /%$/.test(t)
      ? (e = (parseInt(t.substring(0, t.length - 1), 10) / 100) * o)
      : (e = parseInt(t, 10)),
    e || 0
  );
}
function n5(t, o) {
  (t[0] = e5(t[0], o.width)), (t[1] = e5(t[1], o.height));
}
function g5(t, o, e, l) {
  var r = e.points,
    h = e.offset || [0, 0],
    n = e.targetOffset || [0, 0],
    d = e.overflow,
    i = e.source || t;
  (h = [].concat(h)), (n = [].concat(n)), (d = d || {});
  var p = {},
    v = 0,
    M = !!(d && d.alwaysByViewport),
    s = F1(i, M),
    m = T1(i);
  n5(h, m), n5(n, o);
  var u = r1(m, o, r, h, n),
    w = f.merge(m, u);
  if (s && (d.adjustX || d.adjustY) && l) {
    if (d.adjustX && a5(u, m, s)) {
      var H = h1(r, /[lr]/gi, { l: "r", r: "l" }),
        g = i1(h, 0),
        V = i1(n, 0),
        I = r1(m, o, H, g, V);
      L0(I, m, s) || ((v = 1), (r = H), (h = g), (n = V));
    }
    if (d.adjustY && t5(u, m, s)) {
      var y = h1(r, /[tb]/gi, { t: "b", b: "t" }),
        k = i1(h, 1),
        P = i1(n, 1),
        B = r1(m, o, y, k, P);
      y0(B, m, s) || ((v = 1), (r = y), (h = k), (n = P));
    }
    v && ((u = r1(m, o, r, h, n)), f.mix(w, u));
    var D = a5(u, m, s),
      x = t5(u, m, s);
    if (D || x) {
      var O = r;
      D && (O = h1(r, /[lr]/gi, { l: "r", r: "l" })),
        x && (O = h1(r, /[tb]/gi, { t: "b", b: "t" })),
        (r = O),
        (h = e.offset || [0, 0]),
        (n = e.targetOffset || [0, 0]);
    }
    (p.adjustX = d.adjustX && D),
      (p.adjustY = d.adjustY && x),
      (p.adjustX || p.adjustY) && (w = C0(u, m, s, p));
  }
  return (
    w.width !== m.width && f.css(i, "width", f.width(i) + w.width - m.width),
    w.height !== m.height &&
      f.css(i, "height", f.height(i) + w.height - m.height),
    f.offset(
      i,
      { left: w.left, top: w.top },
      {
        useCssRight: e.useCssRight,
        useCssBottom: e.useCssBottom,
        useCssTransform: e.useCssTransform,
        ignoreShake: e.ignoreShake,
      }
    ),
    { points: r, offset: h, targetOffset: n, overflow: p }
  );
}
function b0(t, o) {
  var e = F1(t, o),
    l = T1(t);
  return (
    !e ||
    l.left + l.width <= e.left ||
    l.top + l.height <= e.top ||
    l.left >= e.right ||
    l.top >= e.bottom
  );
}
function P1(t, o, e) {
  var l = e.target || o,
    r = T1(l),
    h = !b0(l, e.overflow && e.overflow.alwaysByViewport);
  return g5(t, r, e, h);
}
P1.__getOffsetParent = y1;
P1.__getVisibleRectForElement = F1;
function S0(t, o, e) {
  var l,
    r,
    h = f.getDocument(t),
    n = h.defaultView || h.parentWindow,
    d = f.getWindowScrollLeft(n),
    i = f.getWindowScrollTop(n),
    p = f.viewportWidth(n),
    v = f.viewportHeight(n);
  "pageX" in o ? (l = o.pageX) : (l = d + o.clientX),
    "pageY" in o ? (r = o.pageY) : (r = i + o.clientY);
  var M = { left: l, top: r, width: 0, height: 0 },
    s = l >= 0 && l <= d + p && r >= 0 && r <= i + v,
    m = [e.points[0], "cc"];
  return g5(t, M, U1(U1({}, e), {}, { points: m }), s);
}
const k0 = function (t, o) {
  var e = a.useRef(!1),
    l = a.useRef(null);
  function r() {
    window.clearTimeout(l.current);
  }
  function h(n) {
    if ((r(), !e.current || n === !0)) {
      if (t(n) === !1) return;
      (e.current = !0),
        (l.current = window.setTimeout(function () {
          e.current = !1;
        }, o));
    } else
      l.current = window.setTimeout(function () {
        (e.current = !1), h();
      }, o);
  }
  return [
    h,
    function () {
      (e.current = !1), r();
    },
  ];
};
function F0(t, o) {
  return t === o
    ? !0
    : !t || !o
    ? !1
    : "pageX" in o && "pageY" in o
    ? t.pageX === o.pageX && t.pageY === o.pageY
    : "clientX" in o && "clientY" in o
    ? t.clientX === o.clientX && t.clientY === o.clientY
    : !1;
}
function T0(t, o) {
  t !== document.activeElement &&
    d1(o, t) &&
    typeof t.focus == "function" &&
    t.focus();
}
function c5(t, o) {
  var e = null,
    l = null;
  function r(n) {
    var d = T(n, 1),
      i = d[0].target;
    if (document.documentElement.contains(i)) {
      var p = i.getBoundingClientRect(),
        v = p.width,
        M = p.height,
        s = Math.floor(v),
        m = Math.floor(M);
      (e !== s || l !== m) &&
        Promise.resolve().then(function () {
          o({ width: s, height: m });
        }),
        (e = s),
        (l = m);
    }
  }
  var h = new T5(r);
  return (
    t && h.observe(t),
    function () {
      h.disconnect();
    }
  );
}
function o5(t) {
  return typeof t != "function" ? null : t();
}
function l5(t) {
  return D5(t) !== "object" || !t ? null : t;
}
var P0 = function (o, e) {
    var l = o.children,
      r = o.disabled,
      h = o.target,
      n = o.align,
      d = o.onAlign,
      i = o.monitorWindowResize,
      p = o.monitorBufferTime,
      v = p === void 0 ? 0 : p,
      M = a.useRef({}),
      s = a.useRef(),
      m = a.Children.only(l),
      u = a.useRef({});
    (u.current.disabled = r),
      (u.current.target = h),
      (u.current.align = n),
      (u.current.onAlign = d);
    var w = k0(function () {
        var S = u.current,
          W = S.disabled,
          z = S.target,
          $ = S.align,
          X = S.onAlign,
          F = s.current;
        if (!W && z && F) {
          var _,
            b = o5(z),
            U = l5(z);
          (M.current.element = b), (M.current.point = U), (M.current.align = $);
          var Z1 = document,
            o1 = Z1.activeElement;
          return (
            b && x5(b) ? (_ = P1(F, b, $)) : U && (_ = S0(F, U, $)),
            T0(o1, F),
            X && _ && X(F, _),
            !0
          );
        }
        return !1;
      }, v),
      H = T(w, 2),
      g = H[0],
      V = H[1],
      I = a.useState(),
      y = T(I, 2),
      k = y[0],
      P = y[1],
      B = a.useState(),
      D = T(B, 2),
      x = D[0],
      O = D[1];
    return (
      H1(function () {
        P(o5(h)), O(l5(h));
      }),
      a.useEffect(function () {
        (M.current.element !== k ||
          !F0(M.current.point, x) ||
          !P5(M.current.align, n)) &&
          g();
      }),
      a.useEffect(
        function () {
          var S = c5(s.current, g);
          return S;
        },
        [s.current]
      ),
      a.useEffect(
        function () {
          var S = c5(k, g);
          return S;
        },
        [k]
      ),
      a.useEffect(
        function () {
          r ? V() : g();
        },
        [r]
      ),
      a.useEffect(
        function () {
          if (i) {
            var S = t1(window, "resize", g);
            return S.remove;
          }
        },
        [i]
      ),
      a.useEffect(function () {
        return function () {
          V();
        };
      }, []),
      a.useImperativeHandle(e, function () {
        return {
          forceAlign: function () {
            return g(!0);
          },
        };
      }),
      a.isValidElement(m) && (m = a.cloneElement(m, { ref: m5(m.ref, s) })),
      m
    );
  },
  V5 = a.forwardRef(P0);
V5.displayName = "Align";
var r5 = ["measure", "alignPre", "align", null, "motion"];
const D0 = function (t, o) {
    var e = R5(null),
      l = T(e, 2),
      r = l[0],
      h = l[1],
      n = Z.useRef();
    function d(v) {
      h(v, !0);
    }
    function i() {
      q.cancel(n.current);
    }
    function p(v) {
      i(),
        (n.current = q(function () {
          d(function (M) {
            switch (r) {
              case "align":
                return "motion";
              case "motion":
                return "stable";
            }
            return M;
          }),
            v == null || v();
        }));
    }
    return (
      Z.useEffect(
        function () {
          d("measure");
        },
        [t]
      ),
      Z.useEffect(
        function () {
          switch (r) {
            case "measure":
              o();
              break;
          }
          r &&
            (n.current = q(
              O5(
                W1().mark(function v() {
                  var M, s;
                  return W1().wrap(function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          (M = r5.indexOf(r)),
                            (s = r5[M + 1]),
                            s && M !== -1 && d(s);
                        case 3:
                        case "end":
                          return u.stop();
                      }
                  }, v);
                })
              )
            ));
        },
        [r]
      ),
      Z.useEffect(function () {
        return function () {
          i();
        };
      }, []),
      [r, p]
    );
  },
  x0 = function (t) {
    var o = Z.useState({ width: 0, height: 0 }),
      e = T(o, 2),
      l = e[0],
      r = e[1];
    function h(d) {
      var i = d.offsetWidth,
        p = d.offsetHeight,
        v = d.getBoundingClientRect(),
        M = v.width,
        s = v.height;
      Math.abs(i - M) < 1 && Math.abs(p - s) < 1 && ((i = M), (p = s)),
        r({ width: i, height: p });
    }
    var n = Z.useMemo(
      function () {
        var d = {};
        if (t) {
          var i = l.width,
            p = l.height;
          t.indexOf("height") !== -1 && p
            ? (d.height = p)
            : t.indexOf("minHeight") !== -1 && p && (d.minHeight = p),
            t.indexOf("width") !== -1 && i
              ? (d.width = i)
              : t.indexOf("minWidth") !== -1 && i && (d.minWidth = i);
        }
        return d;
      },
      [t, l]
    );
    return [n, h];
  };
var H5 = Z.forwardRef(function (t, o) {
  var e = t.visible,
    l = t.prefixCls,
    r = t.className,
    h = t.style,
    n = t.children,
    d = t.zIndex,
    i = t.stretch,
    p = t.destroyPopupOnHide,
    v = t.forceRender,
    M = t.align,
    s = t.point,
    m = t.getRootDomNode,
    u = t.getClassNameFromAlign,
    w = t.onAlign,
    H = t.onMouseEnter,
    g = t.onMouseLeave,
    V = t.onMouseDown,
    I = t.onTouchStart,
    y = t.onClick,
    k = Z.useRef(),
    P = Z.useRef(),
    B = Z.useState(),
    D = T(B, 2),
    x = D[0],
    O = D[1],
    S = x0(i),
    W = T(S, 2),
    z = W[0],
    $ = W[1];
  function X() {
    i && $(m());
  }
  var F = D0(e, X),
    _ = T(F, 2),
    b = _[0],
    U = _[1],
    Z1 = Z.useState(0),
    o1 = T(Z1, 2),
    D1 = o1[0],
    x1 = o1[1],
    s1 = Z.useRef();
  H1(
    function () {
      b === "alignPre" && x1(0);
    },
    [b]
  );
  function L5() {
    return s || m;
  }
  function R1() {
    var C;
    (C = k.current) === null || C === void 0 || C.forceAlign();
  }
  function y5(C, N) {
    var G = u(N);
    x !== G && O(G),
      x1(function (J) {
        return J + 1;
      }),
      b === "align" && (w == null || w(C, N));
  }
  H1(
    function () {
      b === "align" &&
        (D1 < 3
          ? R1()
          : U(function () {
              var C;
              (C = s1.current) === null || C === void 0 || C.call(s1);
            }));
    },
    [D1]
  );
  var Q = L({}, u5(t));
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (C) {
    var N = Q[C];
    Q[C] = function (G, J) {
      return U(), N == null ? void 0 : N(G, J);
    };
  });
  function O1() {
    return new Promise(function (C) {
      s1.current = C;
    });
  }
  Z.useEffect(
    function () {
      !Q.motionName && b === "motion" && U();
    },
    [Q.motionName, b]
  ),
    Z.useImperativeHandle(o, function () {
      return {
        forceAlign: R1,
        getElement: function () {
          return P.current;
        },
      };
    });
  var b5 = L(
      L({}, z),
      {},
      {
        zIndex: d,
        opacity: b === "motion" || b === "stable" || !e ? void 0 : 0,
        pointerEvents: !e && b !== "stable" ? "none" : void 0,
      },
      h
    ),
    N1 = !0;
  M != null && M.points && (b === "align" || b === "stable") && (N1 = !1);
  var B1 = n;
  return (
    Z.Children.count(n) > 1 &&
      (B1 = Z.createElement("div", { className: "".concat(l, "-content") }, n)),
    Z.createElement(
      b1,
      K({ visible: e, ref: P, leavedClassName: "".concat(l, "-hidden") }, Q, {
        onAppearPrepare: O1,
        onEnterPrepare: O1,
        removeOnLeave: p,
        forceRender: v,
      }),
      function (C, N) {
        var G = C.className,
          J = C.style,
          S5 = v1(l, r, x, G);
        return Z.createElement(
          V5,
          {
            target: L5(),
            key: "popup",
            ref: k,
            monitorWindowResize: !0,
            disabled: N1,
            align: M,
            onAlign: y5,
          },
          Z.createElement(
            "div",
            {
              ref: N,
              className: S5,
              onMouseEnter: H,
              onMouseLeave: g,
              onMouseDownCapture: V,
              onTouchStartCapture: I,
              onClick: y,
              style: L(L({}, J), b5),
            },
            B1
          )
        );
      }
    )
  );
});
H5.displayName = "PopupInner";
var I5 = Z.forwardRef(function (t, o) {
  var e = t.prefixCls,
    l = t.visible,
    r = t.zIndex,
    h = t.children,
    n = t.mobile;
  n = n === void 0 ? {} : n;
  var d = n.popupClassName,
    i = n.popupStyle,
    p = n.popupMotion,
    v = p === void 0 ? {} : p,
    M = n.popupRender,
    s = t.onClick,
    m = Z.useRef();
  Z.useImperativeHandle(o, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return m.current;
      },
    };
  });
  var u = L({ zIndex: r }, i),
    w = h;
  return (
    Z.Children.count(h) > 1 &&
      (w = Z.createElement("div", { className: "".concat(e, "-content") }, h)),
    M && (w = M(w)),
    Z.createElement(
      b1,
      K({ visible: l, ref: m, removeOnLeave: !0 }, v),
      function (H, g) {
        var V = H.className,
          I = H.style,
          y = v1(e, d, V);
        return Z.createElement(
          "div",
          { ref: g, className: y, onClick: s, style: L(L({}, I), u) },
          w
        );
      }
    )
  );
});
I5.displayName = "MobilePopupInner";
var R0 = ["visible", "mobile"],
  C5 = Z.forwardRef(function (t, o) {
    var e = t.visible,
      l = t.mobile,
      r = N5(t, R0),
      h = Z.useState(e),
      n = T(h, 2),
      d = n[0],
      i = n[1],
      p = Z.useState(!1),
      v = T(p, 2),
      M = v[0],
      s = v[1],
      m = L(L({}, r), {}, { visible: d });
    Z.useEffect(
      function () {
        i(e), e && l && s(X5());
      },
      [e, l]
    );
    var u = M
      ? Z.createElement(I5, K({}, m, { mobile: l, ref: o }))
      : Z.createElement(H5, K({}, m, { ref: o }));
    return Z.createElement("div", null, Z.createElement(n0, m), u);
  });
C5.displayName = "Popup";
var h5 = Z.createContext(null);
function w1() {}
function O0() {
  return "";
}
function N0(t) {
  return t ? t.ownerDocument : window.document;
}
var B0 = [
  "onClick",
  "onMouseDown",
  "onTouchStart",
  "onMouseEnter",
  "onMouseLeave",
  "onFocus",
  "onBlur",
  "onContextMenu",
];
function W0(t) {
  var o = (function (e) {
    B5(r, e);
    var l = W5(r);
    function r(h) {
      var n;
      p5(this, r),
        (n = l.call(this, h)),
        A(E(n), "popupRef", Z.createRef()),
        A(E(n), "triggerRef", Z.createRef()),
        A(E(n), "portalContainer", void 0),
        A(E(n), "attachId", void 0),
        A(E(n), "clickOutsideHandler", void 0),
        A(E(n), "touchOutsideHandler", void 0),
        A(E(n), "contextMenuOutsideHandler1", void 0),
        A(E(n), "contextMenuOutsideHandler2", void 0),
        A(E(n), "mouseDownTimeout", void 0),
        A(E(n), "focusTime", void 0),
        A(E(n), "preClickTime", void 0),
        A(E(n), "preTouchTime", void 0),
        A(E(n), "delayTimer", void 0),
        A(E(n), "hasPopupMouseDown", void 0),
        A(E(n), "onMouseEnter", function (i) {
          var p = n.props.mouseEnterDelay;
          n.fireEvents("onMouseEnter", i),
            n.delaySetPopupVisible(!0, p, p ? null : i);
        }),
        A(E(n), "onMouseMove", function (i) {
          n.fireEvents("onMouseMove", i), n.setPoint(i);
        }),
        A(E(n), "onMouseLeave", function (i) {
          n.fireEvents("onMouseLeave", i),
            n.delaySetPopupVisible(!1, n.props.mouseLeaveDelay);
        }),
        A(E(n), "onPopupMouseEnter", function () {
          n.clearDelayTimer();
        }),
        A(E(n), "onPopupMouseLeave", function (i) {
          var p;
          (i.relatedTarget &&
            !i.relatedTarget.setTimeout &&
            d1(
              (p = n.popupRef.current) === null || p === void 0
                ? void 0
                : p.getElement(),
              i.relatedTarget
            )) ||
            n.delaySetPopupVisible(!1, n.props.mouseLeaveDelay);
        }),
        A(E(n), "onFocus", function (i) {
          n.fireEvents("onFocus", i),
            n.clearDelayTimer(),
            n.isFocusToShow() &&
              ((n.focusTime = Date.now()),
              n.delaySetPopupVisible(!0, n.props.focusDelay));
        }),
        A(E(n), "onMouseDown", function (i) {
          n.fireEvents("onMouseDown", i), (n.preClickTime = Date.now());
        }),
        A(E(n), "onTouchStart", function (i) {
          n.fireEvents("onTouchStart", i), (n.preTouchTime = Date.now());
        }),
        A(E(n), "onBlur", function (i) {
          n.fireEvents("onBlur", i),
            n.clearDelayTimer(),
            n.isBlurToHide() && n.delaySetPopupVisible(!1, n.props.blurDelay);
        }),
        A(E(n), "onContextMenu", function (i) {
          i.preventDefault(),
            n.fireEvents("onContextMenu", i),
            n.setPopupVisible(!0, i);
        }),
        A(E(n), "onContextMenuClose", function () {
          n.isContextMenuToShow() && n.close();
        }),
        A(E(n), "onClick", function (i) {
          if ((n.fireEvents("onClick", i), n.focusTime)) {
            var p;
            if (
              (n.preClickTime && n.preTouchTime
                ? (p = Math.min(n.preClickTime, n.preTouchTime))
                : n.preClickTime
                ? (p = n.preClickTime)
                : n.preTouchTime && (p = n.preTouchTime),
              Math.abs(p - n.focusTime) < 20)
            )
              return;
            n.focusTime = 0;
          }
          (n.preClickTime = 0),
            (n.preTouchTime = 0),
            n.isClickToShow() &&
              (n.isClickToHide() || n.isBlurToHide()) &&
              i &&
              i.preventDefault &&
              i.preventDefault();
          var v = !n.state.popupVisible;
          ((n.isClickToHide() && !v) || (v && n.isClickToShow())) &&
            n.setPopupVisible(!n.state.popupVisible, i);
        }),
        A(E(n), "onPopupMouseDown", function () {
          if (
            ((n.hasPopupMouseDown = !0),
            clearTimeout(n.mouseDownTimeout),
            (n.mouseDownTimeout = window.setTimeout(function () {
              n.hasPopupMouseDown = !1;
            }, 0)),
            n.context)
          ) {
            var i;
            (i = n.context).onPopupMouseDown.apply(i, arguments);
          }
        }),
        A(E(n), "onDocumentClick", function (i) {
          if (!(n.props.mask && !n.props.maskClosable)) {
            var p = i.target,
              v = n.getRootDomNode(),
              M = n.getPopupDomNode();
            (!d1(v, p) || n.isContextMenuOnly()) &&
              !d1(M, p) &&
              !n.hasPopupMouseDown &&
              n.close();
          }
        }),
        A(E(n), "getRootDomNode", function () {
          var i = n.props.getTriggerDOMNode;
          if (i) return i(n.triggerRef.current);
          try {
            var p = z5(n.triggerRef.current);
            if (p) return p;
          } catch {}
          return p1.findDOMNode(E(n));
        }),
        A(E(n), "getPopupClassNameFromAlign", function (i) {
          var p = [],
            v = n.props,
            M = v.popupPlacement,
            s = v.builtinPlacements,
            m = v.prefixCls,
            u = v.alignPoint,
            w = v.getPopupClassNameFromAlign;
          return (
            M && s && p.push(e0(s, m, i, u)), w && p.push(w(i)), p.join(" ")
          );
        }),
        A(E(n), "getComponent", function () {
          var i = n.props,
            p = i.prefixCls,
            v = i.destroyPopupOnHide,
            M = i.popupClassName,
            s = i.onPopupAlign,
            m = i.popupMotion,
            u = i.popupAnimation,
            w = i.popupTransitionName,
            H = i.popupStyle,
            g = i.mask,
            V = i.maskAnimation,
            I = i.maskTransitionName,
            y = i.maskMotion,
            k = i.zIndex,
            P = i.popup,
            B = i.stretch,
            D = i.alignPoint,
            x = i.mobile,
            O = i.forceRender,
            S = i.onPopupClick,
            W = n.state,
            z = W.popupVisible,
            $ = W.point,
            X = n.getPopupAlign(),
            F = {};
          return (
            n.isMouseEnterToShow() && (F.onMouseEnter = n.onPopupMouseEnter),
            n.isMouseLeaveToHide() && (F.onMouseLeave = n.onPopupMouseLeave),
            (F.onMouseDown = n.onPopupMouseDown),
            (F.onTouchStart = n.onPopupMouseDown),
            Z.createElement(
              C5,
              K(
                {
                  prefixCls: p,
                  destroyPopupOnHide: v,
                  visible: z,
                  point: D && $,
                  className: M,
                  align: X,
                  onAlign: s,
                  animation: u,
                  getClassNameFromAlign: n.getPopupClassNameFromAlign,
                },
                F,
                {
                  stretch: B,
                  getRootDomNode: n.getRootDomNode,
                  style: H,
                  mask: g,
                  zIndex: k,
                  transitionName: w,
                  maskAnimation: V,
                  maskTransitionName: I,
                  maskMotion: y,
                  ref: n.popupRef,
                  motion: m,
                  mobile: x,
                  forceRender: O,
                  onClick: S,
                }
              ),
              typeof P == "function" ? P() : P
            )
          );
        }),
        A(E(n), "attachParent", function (i) {
          q.cancel(n.attachId);
          var p = n.props,
            v = p.getPopupContainer,
            M = p.getDocument,
            s = n.getRootDomNode(),
            m;
          v
            ? (s || v.length === 0) && (m = v(s))
            : (m = M(n.getRootDomNode()).body),
            m
              ? m.appendChild(i)
              : (n.attachId = q(function () {
                  n.attachParent(i);
                }));
        }),
        A(E(n), "getContainer", function () {
          if (!n.portalContainer) {
            var i = n.props.getDocument,
              p = i(n.getRootDomNode()).createElement("div");
            (p.style.position = "absolute"),
              (p.style.top = "0"),
              (p.style.left = "0"),
              (p.style.width = "100%"),
              (n.portalContainer = p);
          }
          return n.attachParent(n.portalContainer), n.portalContainer;
        }),
        A(E(n), "setPoint", function (i) {
          var p = n.props.alignPoint;
          !p || !i || n.setState({ point: { pageX: i.pageX, pageY: i.pageY } });
        }),
        A(E(n), "handlePortalUpdate", function () {
          n.state.prevPopupVisible !== n.state.popupVisible &&
            n.props.afterPopupVisibleChange(n.state.popupVisible);
        }),
        A(E(n), "triggerContextValue", {
          onPopupMouseDown: n.onPopupMouseDown,
        });
      var d;
      return (
        "popupVisible" in h
          ? (d = !!h.popupVisible)
          : (d = !!h.defaultPopupVisible),
        (n.state = { prevPopupVisible: d, popupVisible: d }),
        B0.forEach(function (i) {
          n["fire".concat(i)] = function (p) {
            n.fireEvents(i, p);
          };
        }),
        n
      );
    }
    return (
      d5(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.componentDidUpdate();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              var n = this.props,
                d = this.state;
              if (d.popupVisible) {
                var i;
                !this.clickOutsideHandler &&
                  (this.isClickToHide() || this.isContextMenuToShow()) &&
                  ((i = n.getDocument(this.getRootDomNode())),
                  (this.clickOutsideHandler = t1(
                    i,
                    "mousedown",
                    this.onDocumentClick
                  ))),
                  this.touchOutsideHandler ||
                    ((i = i || n.getDocument(this.getRootDomNode())),
                    (this.touchOutsideHandler = t1(
                      i,
                      "touchstart",
                      this.onDocumentClick
                    ))),
                  !this.contextMenuOutsideHandler1 &&
                    this.isContextMenuToShow() &&
                    ((i = i || n.getDocument(this.getRootDomNode())),
                    (this.contextMenuOutsideHandler1 = t1(
                      i,
                      "scroll",
                      this.onContextMenuClose
                    ))),
                  !this.contextMenuOutsideHandler2 &&
                    this.isContextMenuToShow() &&
                    (this.contextMenuOutsideHandler2 = t1(
                      window,
                      "blur",
                      this.onContextMenuClose
                    ));
                return;
              }
              this.clearOutsideHandler();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.clearDelayTimer(),
                this.clearOutsideHandler(),
                clearTimeout(this.mouseDownTimeout),
                q.cancel(this.attachId);
            },
          },
          {
            key: "getPopupDomNode",
            value: function () {
              var n;
              return (
                ((n = this.popupRef.current) === null || n === void 0
                  ? void 0
                  : n.getElement()) || null
              );
            },
          },
          {
            key: "getPopupAlign",
            value: function () {
              var n = this.props,
                d = n.popupPlacement,
                i = n.popupAlign,
                p = n.builtinPlacements;
              return d && p ? t0(p, d, i) : i;
            },
          },
          {
            key: "setPopupVisible",
            value: function (n, d) {
              var i = this.props.alignPoint,
                p = this.state.popupVisible;
              this.clearDelayTimer(),
                p !== n &&
                  ("popupVisible" in this.props ||
                    this.setState({ popupVisible: n, prevPopupVisible: p }),
                  this.props.onPopupVisibleChange(n)),
                i && d && n && this.setPoint(d);
            },
          },
          {
            key: "delaySetPopupVisible",
            value: function (n, d, i) {
              var p = this,
                v = d * 1e3;
              if ((this.clearDelayTimer(), v)) {
                var M = i ? { pageX: i.pageX, pageY: i.pageY } : null;
                this.delayTimer = window.setTimeout(function () {
                  p.setPopupVisible(n, M), p.clearDelayTimer();
                }, v);
              } else this.setPopupVisible(n, i);
            },
          },
          {
            key: "clearDelayTimer",
            value: function () {
              this.delayTimer &&
                (clearTimeout(this.delayTimer), (this.delayTimer = null));
            },
          },
          {
            key: "clearOutsideHandler",
            value: function () {
              this.clickOutsideHandler &&
                (this.clickOutsideHandler.remove(),
                (this.clickOutsideHandler = null)),
                this.contextMenuOutsideHandler1 &&
                  (this.contextMenuOutsideHandler1.remove(),
                  (this.contextMenuOutsideHandler1 = null)),
                this.contextMenuOutsideHandler2 &&
                  (this.contextMenuOutsideHandler2.remove(),
                  (this.contextMenuOutsideHandler2 = null)),
                this.touchOutsideHandler &&
                  (this.touchOutsideHandler.remove(),
                  (this.touchOutsideHandler = null));
            },
          },
          {
            key: "createTwoChains",
            value: function (n) {
              var d = this.props.children.props,
                i = this.props;
              return d[n] && i[n] ? this["fire".concat(n)] : d[n] || i[n];
            },
          },
          {
            key: "isClickToShow",
            value: function () {
              var n = this.props,
                d = n.action,
                i = n.showAction;
              return d.indexOf("click") !== -1 || i.indexOf("click") !== -1;
            },
          },
          {
            key: "isContextMenuOnly",
            value: function () {
              var n = this.props.action;
              return (
                n === "contextMenu" ||
                (n.length === 1 && n[0] === "contextMenu")
              );
            },
          },
          {
            key: "isContextMenuToShow",
            value: function () {
              var n = this.props,
                d = n.action,
                i = n.showAction;
              return (
                d.indexOf("contextMenu") !== -1 ||
                i.indexOf("contextMenu") !== -1
              );
            },
          },
          {
            key: "isClickToHide",
            value: function () {
              var n = this.props,
                d = n.action,
                i = n.hideAction;
              return d.indexOf("click") !== -1 || i.indexOf("click") !== -1;
            },
          },
          {
            key: "isMouseEnterToShow",
            value: function () {
              var n = this.props,
                d = n.action,
                i = n.showAction;
              return (
                d.indexOf("hover") !== -1 || i.indexOf("mouseEnter") !== -1
              );
            },
          },
          {
            key: "isMouseLeaveToHide",
            value: function () {
              var n = this.props,
                d = n.action,
                i = n.hideAction;
              return (
                d.indexOf("hover") !== -1 || i.indexOf("mouseLeave") !== -1
              );
            },
          },
          {
            key: "isFocusToShow",
            value: function () {
              var n = this.props,
                d = n.action,
                i = n.showAction;
              return d.indexOf("focus") !== -1 || i.indexOf("focus") !== -1;
            },
          },
          {
            key: "isBlurToHide",
            value: function () {
              var n = this.props,
                d = n.action,
                i = n.hideAction;
              return d.indexOf("focus") !== -1 || i.indexOf("blur") !== -1;
            },
          },
          {
            key: "forcePopupAlign",
            value: function () {
              if (this.state.popupVisible) {
                var n;
                (n = this.popupRef.current) === null ||
                  n === void 0 ||
                  n.forceAlign();
              }
            },
          },
          {
            key: "fireEvents",
            value: function (n, d) {
              var i = this.props.children.props[n];
              i && i(d);
              var p = this.props[n];
              p && p(d);
            },
          },
          {
            key: "close",
            value: function () {
              this.setPopupVisible(!1);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.state.popupVisible,
                d = this.props,
                i = d.children,
                p = d.forceRender,
                v = d.alignPoint,
                M = d.className,
                s = d.autoDestroy,
                m = Z.Children.only(i),
                u = { key: "trigger" };
              this.isContextMenuToShow()
                ? (u.onContextMenu = this.onContextMenu)
                : (u.onContextMenu = this.createTwoChains("onContextMenu")),
                this.isClickToHide() || this.isClickToShow()
                  ? ((u.onClick = this.onClick),
                    (u.onMouseDown = this.onMouseDown),
                    (u.onTouchStart = this.onTouchStart))
                  : ((u.onClick = this.createTwoChains("onClick")),
                    (u.onMouseDown = this.createTwoChains("onMouseDown")),
                    (u.onTouchStart = this.createTwoChains("onTouchStart"))),
                this.isMouseEnterToShow()
                  ? ((u.onMouseEnter = this.onMouseEnter),
                    v && (u.onMouseMove = this.onMouseMove))
                  : (u.onMouseEnter = this.createTwoChains("onMouseEnter")),
                this.isMouseLeaveToHide()
                  ? (u.onMouseLeave = this.onMouseLeave)
                  : (u.onMouseLeave = this.createTwoChains("onMouseLeave")),
                this.isFocusToShow() || this.isBlurToHide()
                  ? ((u.onFocus = this.onFocus), (u.onBlur = this.onBlur))
                  : ((u.onFocus = this.createTwoChains("onFocus")),
                    (u.onBlur = this.createTwoChains("onBlur")));
              var w = v1(m && m.props && m.props.className, M);
              w && (u.className = w);
              var H = L({}, u);
              $5(m) && (H.ref = m5(this.triggerRef, m.ref));
              var g = Z.cloneElement(m, H),
                V;
              return (
                (n || this.popupRef.current || p) &&
                  (V = Z.createElement(
                    t,
                    {
                      key: "portal",
                      getContainer: this.getContainer,
                      didUpdate: this.handlePortalUpdate,
                    },
                    this.getComponent()
                  )),
                !n && s && (V = null),
                Z.createElement(
                  h5.Provider,
                  { value: this.triggerContextValue },
                  g,
                  V
                )
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (n, d) {
              var i = n.popupVisible,
                p = {};
              return (
                i !== void 0 &&
                  d.popupVisible !== i &&
                  ((p.popupVisible = i), (p.prevPopupVisible = d.popupVisible)),
                p
              );
            },
          },
        ]
      ),
      r
    );
  })(Z.Component);
  return (
    A(o, "contextType", h5),
    A(o, "defaultProps", {
      prefixCls: "rc-trigger-popup",
      getPopupClassNameFromAlign: O0,
      getDocument: N0,
      onPopupVisibleChange: w1,
      afterPopupVisibleChange: w1,
      onPopupAlign: w1,
      popupClassName: "",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: !1,
      popupAlign: {},
      defaultPopupVisible: !1,
      mask: !1,
      maskClosable: !0,
      action: [],
      showAction: [],
      hideAction: [],
      autoDestroy: !1,
    }),
    o
  );
}
const Ra = W0(J5),
  z0 = (t, o) => {
    const e = Z.useContext(_5),
      l = Z.useMemo(() => {
        var h;
        const n = o || z1[t],
          d = (h = e == null ? void 0 : e[t]) !== null && h !== void 0 ? h : {};
        return Object.assign(
          Object.assign({}, typeof n == "function" ? n() : n),
          d || {}
        );
      }, [t, o, e]),
      r = Z.useMemo(() => {
        const h = e == null ? void 0 : e.locale;
        return e != null && e.exist && !h ? z1.locale : h;
      }, [e]);
    return [l, r];
  },
  Oa = z0,
  g1 = () => ({ height: 0, opacity: 0 }),
  i5 = (t) => {
    const { scrollHeight: o } = t;
    return { height: o, opacity: 1 };
  },
  $0 = (t) => ({ height: t ? t.offsetHeight : 0 }),
  V1 = (t, o) =>
    (o == null ? void 0 : o.deadline) === !0 || o.propertyName === "height",
  Na = function () {
    return {
      motionName: `${
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"
      }-motion-collapse`,
      onAppearStart: g1,
      onEnterStart: g1,
      onAppearActive: i5,
      onEnterActive: i5,
      onLeaveStart: $0,
      onLeaveActive: g1,
      onAppearEnd: V1,
      onEnterEnd: V1,
      onLeaveEnd: V1,
      motionDeadline: 500,
    };
  },
  Ba = (t) =>
    t !== void 0 && (t === "topLeft" || t === "topRight")
      ? "slide-down"
      : "slide-up",
  Wa = (t, o, e) => (e !== void 0 ? e : `${t}-${o}`),
  _0 = (t) => ({ animationDuration: t, animationFillMode: "both" }),
  U0 = (t) => ({ animationDuration: t, animationFillMode: "both" }),
  za = function (t, o, e, l) {
    const h = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? "&"
      : "";
    return {
      [`
      ${h}${t}-enter,
      ${h}${t}-appear
    `]: Object.assign(Object.assign({}, _0(l)), {
        animationPlayState: "paused",
      }),
      [`${h}${t}-leave`]: Object.assign(Object.assign({}, U0(l)), {
        animationPlayState: "paused",
      }),
      [`
      ${h}${t}-enter${t}-enter-active,
      ${h}${t}-appear${t}-appear-active
    `]: { animationName: o, animationPlayState: "running" },
      [`${h}${t}-leave${t}-leave-active`]: {
        animationName: e,
        animationPlayState: "running",
        pointerEvents: "none",
      },
    };
  };
function j0(t, o) {
  if (t == null) return {};
  var e = {},
    l = Object.keys(t),
    r,
    h;
  for (h = 0; h < l.length; h++)
    (r = l[h]), !(o.indexOf(r) >= 0) && (e[r] = t[r]);
  return e;
}
function X0(t, o) {
  if (t == null) return {};
  var e = j0(t, o),
    l,
    r;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(t);
    for (r = 0; r < h.length; r++)
      (l = h[r]),
        !(o.indexOf(l) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, l) &&
          (e[l] = t[l]);
  }
  return e;
}
var G0 = { small: 16, medium: 32, large: 64 };
function c(t, o, e) {
  var l = e(),
    r = Object.keys(l);
  function h(n) {
    var d = n["aria-label"],
      i = n.tabIndex,
      p = n.className,
      v = p === void 0 ? o : p,
      M = n.fill,
      s = M === void 0 ? "currentColor" : M,
      m = n.size,
      u = m === void 0 ? 16 : m,
      w = n.verticalAlign,
      H = w === void 0 ? "text-bottom" : w,
      g = G0[u] || u,
      V = q0(r, g),
      I = l[V].width,
      y = g * (I / V),
      k = l[V].path;
    return a.createElement(
      "svg",
      {
        "aria-hidden": d ? "false" : "true",
        tabIndex: i,
        focusable: i >= 0 ? "true" : "false",
        "aria-label": d,
        role: "img",
        className: v,
        viewBox: "0 0 ".concat(I, " ").concat(V),
        width: y,
        height: g,
        fill: s,
        style: {
          display: "inline-block",
          userSelect: "none",
          verticalAlign: H,
          overflow: "visible",
        },
      },
      k
    );
  }
  return (h.displayName = t), h;
}
function q0(t, o) {
  return t
    .map(function (e) {
      return parseInt(e, 10);
    })
    .reduce(function (e, l) {
      return l <= o ? l : e;
    }, t[0]);
}
var Y0 = c("AccessibilityIcon", "octicon octicon-accessibility", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.923 5.302c.063.063.122.129.178.198H14A.75.75 0 0 1 14 7h-3.3l.578 5.163.362 2.997a.75.75 0 0 1-1.49.18L9.868 13H6.132l-.282 2.34a.75.75 0 0 1-1.49-.18l.362-2.997L5.3 7H2a.75.75 0 0 1 0-1.5h3.9a2.54 2.54 0 0 1 .176-.198 3 3 0 1 1 3.847 0ZM9.2 7.073h-.001a1.206 1.206 0 0 0-2.398 0L6.305 11.5h3.39ZM9.5 3a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 3Z",
        }),
      },
    };
  }),
  K0 = c(
    "AccessibilityInsetIcon",
    "octicon octicon-accessibility-inset",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm2 4a2 2 0 1 0-2.95 1.76 1.87 1.87 0 0 0-.32.24H3.75a.75.75 0 0 0 0 1.5h2.363l-.607 5.67a.75.75 0 1 0 1.49.16l.25-2.33h1.508l.25 2.33a.75.75 0 0 0 1.492-.16L9.888 7.5h2.362a.75.75 0 0 0 0-1.5H9.27a1.98 1.98 0 0 0-.32-.24A2 2 0 0 0 10 4Z",
          }),
        },
      };
    }
  ),
  Q0 = c("AlertIcon", "octicon octicon-alert", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25-8.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z",
          }),
          a.createElement("path", {
            d: "M9.836 3.244c.963-1.665 3.365-1.665 4.328 0l8.967 15.504c.963 1.667-.24 3.752-2.165 3.752H3.034c-1.926 0-3.128-2.085-2.165-3.752Zm3.03.751a1.002 1.002 0 0 0-1.732 0L2.168 19.499A1.002 1.002 0 0 0 3.034 21h17.932a1.002 1.002 0 0 0 .866-1.5L12.866 3.994Z",
          })
        ),
      },
    };
  }),
  J0 = c("AlertFillIcon", "octicon octicon-alert-fill", function () {
    return {
      12: {
        width: 12,
        path: a.createElement("path", {
          d: "M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
        }),
      },
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575ZM8 5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8 5Zm1 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M9.836 3.244c.963-1.665 3.365-1.665 4.328 0l8.967 15.504c.963 1.667-.24 3.752-2.165 3.752H3.034c-1.926 0-3.128-2.085-2.165-3.752ZM12 8.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 8.5Zm1 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z",
        }),
      },
    };
  }),
  a2 = c("AppsIcon", "octicon octicon-apps", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.5 3.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 5.75 7.5h-2.5A1.75 1.75 0 0 1 1.5 5.75Zm7 0c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 8.5 5.75Zm-7 7c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75Zm7 0c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75ZM3.25 3a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5A.25.25 0 0 0 6 5.75v-2.5A.25.25 0 0 0 5.75 3Zm7 0a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm-7 7a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm7 0a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
    };
  }),
  t2 = c("ArchiveIcon", "octicon octicon-archive", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 14.25 6H1.75A1.75 1.75 0 0 1 0 4.25ZM1.75 7a.75.75 0 0 1 .75.75v5.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-5.5a.75.75 0 0 1 1.5 0v5.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25v-5.5A.75.75 0 0 1 1.75 7Zm0-4.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25ZM6.25 8h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.75 2h18.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 21.25 9H2.75A1.75 1.75 0 0 1 1 7.25v-3.5C1 2.784 1.784 2 2.75 2Zm18.5 1.5H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25ZM2.75 10a.75.75 0 0 1 .75.75v9.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-9.5a.75.75 0 0 1 1.5 0v9.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-9.5a.75.75 0 0 1 .75-.75Z",
          }),
          a.createElement("path", {
            d: "M9.75 11.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z",
          })
        ),
      },
    };
  }),
  e2 = c("ArrowBothIcon", "octicon octicon-arrow-both", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.72 3.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.56 7h10.88l-2.22-2.22a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l2.22-2.22H2.56l2.22 2.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-3.5-3.5a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.78 5.97a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 0 0 1.06-1.06L3.81 12.5h16.38l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06l-5.25-5.25a.75.75 0 1 0-1.06 1.06L20.19 11H3.81l3.97-3.97a.75.75 0 0 0 0-1.06Z",
        }),
      },
    };
  }),
  n2 = c("ArrowDownIcon", "octicon octicon-arrow-down", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06Z",
        }),
      },
    };
  }),
  c2 = c("ArrowDownLeftIcon", "octicon octicon-arrow-down-left", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11.78 4.22a.75.75 0 0 1 0 1.06l-5.26 5.26h4.2a.75.75 0 0 1 0 1.5H4.71a.75.75 0 0 1-.75-.75V5.28a.75.75 0 0 1 1.5 0v4.2l5.26-5.26a.75.75 0 0 1 1.06 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.75 8.5a.75.75 0 0 1 .75.75v7.19L16.72 6.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L7.56 17.5h7.19a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  o2 = c("ArrowDownRightIcon", "octicon octicon-arrow-down-right", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.22 4.179a.75.75 0 0 1 1.06 0l5.26 5.26v-4.2a.75.75 0 0 1 1.5 0v6.01a.75.75 0 0 1-.75.75H5.28a.75.75 0 0 1 0-1.5h4.2L4.22 5.24a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M18.25 8.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1 0-1.5h7.19L6.22 7.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L17.5 16.44V9.25a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  l2 = c("ArrowLeftIcon", "octicon octicon-arrow-left", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z",
        }),
      },
    };
  }),
  r2 = c("ArrowRightIcon", "octicon octicon-arrow-right", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z",
        }),
      },
    };
  }),
  h2 = c("ArrowSwitchIcon", "octicon octicon-arrow-switch", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.72 21.78a.75.75 0 0 0 1.06-1.06L5.56 17.5h14.69a.75.75 0 0 0 0-1.5H5.56l3.22-3.22a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5Zm8.56-9.5a.75.75 0 1 1-1.06-1.06L18.44 8H3.75a.75.75 0 0 1 0-1.5h14.69l-3.22-3.22a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5Z",
        }),
      },
    };
  }),
  i2 = c("ArrowUpIcon", "octicon octicon-arrow-up", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z",
        }),
      },
    };
  }),
  d2 = c("ArrowUpLeftIcon", "octicon octicon-arrow-up-left", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.96 4.75A.75.75 0 0 1 4.71 4h6.01a.75.75 0 0 1 0 1.5h-4.2l5.26 5.26a.75.75 0 0 1-1.06 1.061l-5.26-5.26v4.2a.75.75 0 0 1-1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.75 15.5a.75.75 0 0 1-.75-.75v-9A.75.75 0 0 1 5.75 5h9a.75.75 0 0 1 0 1.5H7.56l10.22 10.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L6.5 7.56v7.19a.75.75 0 0 1-.75.75Z",
        }),
      },
    };
  }),
  p2 = c("ArrowUpRightIcon", "octicon octicon-arrow-up-right", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.53 4.75A.75.75 0 0 1 5.28 4h6.01a.75.75 0 0 1 .75.75v6.01a.75.75 0 0 1-1.5 0v-4.2l-5.26 5.261a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L9.48 5.5h-4.2a.75.75 0 0 1-.75-.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z",
        }),
      },
    };
  }),
  m2 = c("BeakerIcon", "octicon octicon-beaker", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5 5.782V2.5h-.25a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5H11v3.282l3.666 5.76C15.619 13.04 14.543 15 12.767 15H3.233c-1.776 0-2.852-1.96-1.899-3.458Zm-2.4 6.565a.75.75 0 0 0 .633 1.153h9.534a.75.75 0 0 0 .633-1.153L12.225 10.5h-8.45ZM9.5 2.5h-3V6c0 .143-.04.283-.117.403L4.73 9h6.54L9.617 6.403A.746.746 0 0 1 9.5 6Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M8 8.807V3.5h-.563a.75.75 0 0 1 0-1.5h9.125a.75.75 0 0 1 0 1.5H16v5.307l5.125 9.301c.964 1.75-.302 3.892-2.299 3.892H5.174c-1.998 0-3.263-2.142-2.3-3.892ZM4.189 18.832a1.123 1.123 0 0 0 .985 1.668h13.652a1.123 1.123 0 0 0 .985-1.668L17.7 15H6.3ZM14.5 3.5h-5V9a.75.75 0 0 1-.093.362L7.127 13.5h9.746l-2.28-4.138A.75.75 0 0 1 14.5 9Z",
        }),
      },
    };
  }),
  v2 = c("BellIcon", "octicon octicon-bell", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001h16.964l.007-.001.006-.004.004-.006.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z",
        }),
      },
    };
  }),
  u2 = c("BellFillIcon", "octicon octicon-bell-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16c.9 0 1.7-.6 1.9-1.5.1-.3-.1-.5-.4-.5h-3c-.3 0-.5.2-.4.5.2.9 1 1.5 1.9 1.5ZM3 5c0-2.8 2.2-5 5-5s5 2.2 5 5v3l1.7 2.6c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5h-11c-.8.1-1.5-.6-1.5-1.4 0-.3.1-.6.3-.8L3 8.1V5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M6 8a6 6 0 1 1 12 0v2.917c0 .703.228 1.387.65 1.95L20.7 15.6a1.5 1.5 0 0 1-1.2 2.4h-15a1.5 1.5 0 0 1-1.2-2.4l2.05-2.733a3.25 3.25 0 0 0 .65-1.95Zm6 13.5A3.502 3.502 0 0 1 8.645 19h6.71A3.502 3.502 0 0 1 12 21.5Z",
        }),
      },
    };
  }),
  Z2 = c("BellSlashIcon", "octicon octicon-bell-slash", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1.22 1.22a.75.75 0 0 1 1.06 0l20.5 20.5a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L17.94 19H15.5a3.5 3.5 0 1 1-7 0H3.518a1.516 1.516 0 0 1-1.263-2.36l2.2-3.298A3.249 3.249 0 0 0 5 11.539V7c0-.294.025-.583.073-.866L1.22 2.28a.75.75 0 0 1 0-1.06ZM6.5 7.56h-.001v3.979a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001H16.44ZM10 19a2 2 0 1 0 4 0Zm2-16.5c-1.463 0-2.8.485-3.788 1.257l-.04.032a.75.75 0 1 1-.935-1.173l.05-.04C8.548 1.59 10.212 1 12 1c3.681 0 7 2.565 7 6v4.539c0 .642.19 1.269.546 1.803l1.328 1.992a.75.75 0 1 1-1.248.832l-1.328-1.992a4.75 4.75 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5Z",
        }),
      },
    };
  }),
  s2 = c("BlockedIcon", "octicon octicon-blocked", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.467.22a.749.749 0 0 1 .53-.22h6.006c.199 0 .389.079.53.22l4.247 4.247c.141.14.22.331.22.53v6.006a.749.749 0 0 1-.22.53l-4.247 4.247a.749.749 0 0 1-.53.22H4.997a.749.749 0 0 1-.53-.22L.22 11.533a.749.749 0 0 1-.22-.53V4.997c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.308v5.384L5.308 14.5h5.384l3.808-3.808V5.308L10.692 1.5ZM4 7.75A.75.75 0 0 1 4.75 7h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 7.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.638 2.22a.749.749 0 0 1 .53-.22h7.664c.199 0 .389.079.53.22l5.418 5.418c.141.14.22.332.22.53v7.664a.749.749 0 0 1-.22.53l-5.418 5.418a.749.749 0 0 1-.53.22H8.168a.749.749 0 0 1-.53-.22l-5.42-5.418a.752.752 0 0 1-.219-.53V8.168c0-.199.079-.389.22-.53l5.418-5.42ZM8.48 3.5 3.5 8.48v7.04l4.98 4.98h7.04l4.98-4.98V8.48L15.52 3.5ZM7 11.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  M2 = c("BoldIcon", "octicon octicon-bold", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4 2h4.5a3.501 3.501 0 0 1 2.852 5.53A3.499 3.499 0 0 1 9.5 14H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 7v3h4.5a1.5 1.5 0 0 0 0-3Zm3.5-2a1.5 1.5 0 0 0 0-3H5v3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M6 4.75c0-.69.56-1.25 1.25-1.25h5a4.752 4.752 0 0 1 3.888 7.479A5 5 0 0 1 14 20.5H7.25c-.69 0-1.25-.56-1.25-1.25ZM8.5 13v5H14a2.5 2.5 0 1 0 0-5Zm0-2.5h3.751A2.25 2.25 0 0 0 12.25 6H8.5Z",
        }),
      },
    };
  }),
  f2 = c("BookIcon", "octicon octicon-book", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M0 3.75A.75.75 0 0 1 .75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.495 4.495 0 0 1 15.75 3h7.5a.75.75 0 0 1 .75.75v15.063a.752.752 0 0 1-.755.75l-7.682-.052a3 3 0 0 0-2.142.878l-.89.891a.75.75 0 0 1-1.061 0l-.902-.901a2.996 2.996 0 0 0-2.121-.879H.75a.75.75 0 0 1-.75-.75Zm12.75 15.232a4.503 4.503 0 0 1 2.823-.971l6.927.047V4.5h-6.75a3 3 0 0 0-3 3ZM11.247 7.497a3 3 0 0 0-3-2.997H1.5V18h6.947c1.018 0 2.006.346 2.803.98Z",
        }),
      },
    };
  }),
  A2 = c("BookmarkIcon", "octicon octicon-bookmark", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.586L12 17.21l-5.781 4.625A.75.75 0 0 1 5 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v15.94l5.031-4.026a.749.749 0 0 1 .938 0L17.5 19.69V3.75a.25.25 0 0 0-.25-.25Z",
        }),
      },
    };
  }),
  E2 = c("BookmarkFillIcon", "octicon octicon-bookmark-fill", function () {
    return {
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M6.69 2h10.56c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.585L12 17.21l-5.781 4.626A.75.75 0 0 1 5 21.253L4.94 3.756A1.748 1.748 0 0 1 6.69 2Z",
        }),
      },
    };
  }),
  w2 = c("BookmarkSlashIcon", "octicon octicon-bookmark-slash", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1.565 2.018v-.001l21.75 15.75a.75.75 0 1 1-.88 1.215L19 16.495v4.764a.748.748 0 0 1-1.219.584L12 17.21l-5.781 4.634A.75.75 0 0 1 5 21.259V6.357L.685 3.232a.75.75 0 0 1 .88-1.214ZM17.5 15.408l-11-7.965v12.254l5.031-4.032a.749.749 0 0 1 .938 0l5.031 4.032ZM7.25 2a.75.75 0 0 0 0 1.5h10a.25.25 0 0 1 .25.25v6.5a.75.75 0 0 0 1.5 0v-6.5A1.75 1.75 0 0 0 17.25 2h-10Z",
        }),
      },
    };
  }),
  g2 = c(
    "BookmarkSlashFillIcon",
    "octicon octicon-bookmark-slash-fill",
    function () {
      return {
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "m3.232 2.175 18.5 15.5a.75.75 0 1 1-.964 1.15L19 17.343v3.907a.75.75 0 0 1-1.218.585L12 17.21l-5.781 4.626A.75.75 0 0 1 5 21.253L4.947 5.569 2.268 3.325a.75.75 0 1 1 .964-1.15ZM7.421 2h9.829c.966 0 1.75.784 1.75 1.75v8.073a.75.75 0 0 1-1.232.575L6.94 3.325A.75.75 0 0 1 7.421 2Z",
          }),
        },
      };
    }
  ),
  V2 = c("BriefcaseIcon", "octicon octicon-briefcase", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.75 0h2.5C10.216 0 11 .784 11 1.75V3h3.25c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-8.5C0 3.784.784 3 1.75 3H5V1.75C5 .784 5.784 0 6.75 0ZM3.5 9.5a3.49 3.49 0 0 1-2-.627v4.377c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V8.873a3.49 3.49 0 0 1-2 .627Zm-1.75-5a.25.25 0 0 0-.25.25V6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V4.75a.25.25 0 0 0-.25-.25H1.75ZM9.5 3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25V3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z",
        }),
      },
    };
  }),
  H2 = c("BroadcastIcon", "octicon octicon-broadcast", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.75 8.582v5.668a.75.75 0 0 1-1.5 0V8.582a1.75 1.75 0 1 1 1.5 0Zm3.983-7.125a.75.75 0 0 1 1.06.026A7.976 7.976 0 0 1 16 7c0 2.139-.84 4.083-2.207 5.517a.75.75 0 1 1-1.086-1.034A6.474 6.474 0 0 0 14.5 7a6.474 6.474 0 0 0-1.793-4.483.75.75 0 0 1 .026-1.06Zm-9.466 0c.3.286.312.76.026 1.06A6.474 6.474 0 0 0 1.5 7a6.47 6.47 0 0 0 1.793 4.483.75.75 0 0 1-1.086 1.034A7.973 7.973 0 0 1 0 7c0-2.139.84-4.083 2.207-5.517a.75.75 0 0 1 1.06-.026Zm8.556 2.321A4.988 4.988 0 0 1 13 7a4.988 4.988 0 0 1-1.177 3.222.75.75 0 1 1-1.146-.967A3.487 3.487 0 0 0 11.5 7c0-.86-.309-1.645-.823-2.255a.75.75 0 0 1 1.146-.967Zm-6.492.958A3.48 3.48 0 0 0 4.5 7a3.48 3.48 0 0 0 .823 2.255.75.75 0 0 1-1.146.967A4.981 4.981 0 0 1 3 7a4.982 4.982 0 0 1 1.188-3.236.75.75 0 1 1 1.143.972Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M20.485 2.515a.75.75 0 0 0-1.06 1.06A10.465 10.465 0 0 1 22.5 11c0 2.9-1.174 5.523-3.075 7.424a.75.75 0 0 0 1.06 1.061A11.965 11.965 0 0 0 24 11c0-3.314-1.344-6.315-3.515-8.485Zm-15.91 1.06a.75.75 0 0 0-1.06-1.06A11.965 11.965 0 0 0 0 11c0 3.313 1.344 6.314 3.515 8.485a.75.75 0 0 0 1.06-1.06A10.465 10.465 0 0 1 1.5 11c0-2.9 1.174-5.524 3.075-7.425ZM8.11 7.11a.75.75 0 0 0-1.06-1.06A6.98 6.98 0 0 0 5 11a6.98 6.98 0 0 0 2.05 4.95.75.75 0 0 0 1.06-1.061 5.48 5.48 0 0 1-1.61-3.89 5.48 5.48 0 0 1 1.61-3.888Zm8.84-1.06a.75.75 0 1 0-1.06 1.06A5.48 5.48 0 0 1 17.5 11a5.48 5.48 0 0 1-1.61 3.889.75.75 0 1 0 1.06 1.06A6.98 6.98 0 0 0 19 11a6.98 6.98 0 0 0-2.05-4.949ZM14 11a2 2 0 0 1-1.25 1.855v8.395a.75.75 0 0 1-1.5 0v-8.395A2 2 0 1 1 14 11Z",
        }),
      },
    };
  }),
  I2 = c("BrowserIcon", "octicon octicon-browser", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M0 3.75C0 2.784.784 2 1.75 2h20.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 22.25 22H1.75A1.75 1.75 0 0 1 0 20.25ZM22.5 7h-21v13.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25Zm-10-3.5v2h10V3.75a.25.25 0 0 0-.25-.25ZM7 3.5v2h4v-2Zm-5.25 0a.25.25 0 0 0-.25.25V5.5h4v-2Z",
        }),
      },
    };
  }),
  C2 = c("BugIcon", "octicon octicon-bug", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.72.22a.75.75 0 0 1 1.06 0l1 .999a3.488 3.488 0 0 1 2.441 0l.999-1a.748.748 0 0 1 1.265.332.75.75 0 0 1-.205.729l-.775.776c.616.63.995 1.493.995 2.444v.327c0 .1-.009.197-.025.292.408.14.764.392 1.029.722l1.968-.787a.75.75 0 0 1 .556 1.392L13 7.258V9h2.25a.75.75 0 0 1 0 1.5H13v.5c0 .409-.049.806-.141 1.186l2.17.868a.75.75 0 0 1-.557 1.392l-2.184-.873A4.997 4.997 0 0 1 8 16a4.997 4.997 0 0 1-4.288-2.427l-2.183.873a.75.75 0 0 1-.558-1.392l2.17-.868A5.036 5.036 0 0 1 3 11v-.5H.75a.75.75 0 0 1 0-1.5H3V7.258L.971 6.446a.75.75 0 0 1 .558-1.392l1.967.787c.265-.33.62-.583 1.03-.722a1.677 1.677 0 0 1-.026-.292V4.5c0-.951.38-1.814.995-2.444L4.72 1.28a.75.75 0 0 1 0-1.06Zm.53 6.28a.75.75 0 0 0-.75.75V11a3.5 3.5 0 1 0 7 0V7.25a.75.75 0 0 0-.75-.75ZM6.173 5h3.654A.172.172 0 0 0 10 4.827V4.5a2 2 0 1 0-4 0v.327c0 .096.077.173.173.173Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.72.22a.75.75 0 0 1 1.06 0l1.204 1.203A4.98 4.98 0 0 1 12 1c.717 0 1.4.151 2.016.423L15.22.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-.971.972A4.991 4.991 0 0 1 17 6v1.104a2.755 2.755 0 0 1 1.917 1.974l1.998-.999a.75.75 0 0 1 .67 1.342L19 10.714V13.5l3.25.003a.75.75 0 0 1 0 1.5L19 15.001V16c0 .568-.068 1.134-.204 1.686l.04.018 2.75 1.375a.75.75 0 1 1-.671 1.342l-2.638-1.319A6.998 6.998 0 0 1 12 23a6.998 6.998 0 0 1-6.197-3.742l-2.758 1.181a.752.752 0 0 1-1.064-.776.752.752 0 0 1 .474-.602l2.795-1.199A6.976 6.976 0 0 1 5 16v-.996H1.75a.75.75 0 0 1 0-1.5H5v-2.79L2.415 9.42a.75.75 0 0 1 .67-1.342l1.998.999A2.756 2.756 0 0 1 7 7.104V6a4.99 4.99 0 0 1 1.69-3.748l-.97-.972a.75.75 0 0 1 0-1.06ZM6.5 9.75V16a5.5 5.5 0 1 0 11 0V9.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25ZM8.5 7h7V6a3.5 3.5 0 1 0-7 0Z",
        }),
      },
    };
  }),
  L2 = c("CacheIcon", "octicon octicon-cache", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.5 5.724V8c0 .248.238.7 1.169 1.159.874.43 2.144.745 3.62.822a.75.75 0 1 1-.078 1.498c-1.622-.085-3.102-.432-4.204-.975a5.565 5.565 0 0 1-.507-.28V12.5c0 .133.058.318.282.551.227.237.591.483 1.101.707 1.015.447 2.47.742 4.117.742.406 0 .802-.018 1.183-.052a.751.751 0 1 1 .134 1.494C8.89 15.98 8.45 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.619-1.579-1.041-.408-.425-.7-.964-.7-1.59v-9c0-.626.292-1.165.7-1.591.406-.42.956-.766 1.579-1.04C4.525.32 6.195 0 8 0c1.806 0 3.476.32 4.721.869.623.274 1.173.619 1.579 1.041.408.425.7.964.7 1.59 0 .626-.292 1.165-.7 1.591-.406.42-.956.766-1.578 1.04C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0-2.224c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55 0-.133-.058-.318-.282-.551-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742-.508.224-.873.471-1.1.708-.224.232-.282.417-.282.55Z",
          }),
          a.createElement("path", {
            d: "M14.49 7.582a.375.375 0 0 0-.66-.313l-3.625 4.625a.375.375 0 0 0 .295.606h2.127l-.619 2.922a.375.375 0 0 0 .666.304l3.125-4.125A.375.375 0 0 0 15.5 11h-1.778l.769-3.418Z",
          })
        ),
      },
    };
  }),
  y2 = c("CalendarIcon", "octicon octicon-calendar", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M6.75 0a.75.75 0 0 1 .75.75V3h9V.75a.75.75 0 0 1 1.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 0 1 6.75 0ZM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25Zm-17.75-5a.25.25 0 0 0-.25.25V8h18V4.75a.25.25 0 0 0-.25-.25Z",
        }),
      },
    };
  }),
  b2 = c("CheckIcon", "octicon octicon-check", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M21.03 5.72a.75.75 0 0 1 0 1.06l-11.5 11.5a.747.747 0 0 1-1.072-.012l-5.5-5.75a.75.75 0 1 1 1.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 0 1 1.06 0Z",
        }),
      },
    };
  }),
  S2 = c("CheckCircleIcon", "octicon octicon-check-circle", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm1.5 0a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm10.28-1.72-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.47 1.47 3.97-3.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  k2 = c(
    "CheckCircleFillIcon",
    "octicon octicon-check-circle-fill",
    function () {
      return {
        12: {
          width: 12,
          path: a.createElement("path", {
            d: "M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm-.705 8.737L9.63 4.403 8.392 3.166 5.295 6.263l-1.7-1.702L2.356 5.8l2.938 2.938Z",
          }),
        },
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z",
          }),
        },
      };
    }
  ),
  F2 = c("CheckboxIcon", "octicon octicon-checkbox", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1ZM2.5 2.75v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25Zm9.28 3.53-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.47 1.47 3.97-3.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z",
          }),
          a.createElement("path", {
            d: "M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25Z",
          })
        ),
      },
    };
  }),
  T2 = c("ChecklistIcon", "octicon octicon-checklist", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.5 1.75v11.5c0 .138.112.25.25.25h3.17a.75.75 0 0 1 0 1.5H2.75A1.75 1.75 0 0 1 1 13.25V1.75C1 .784 1.784 0 2.75 0h8.5C12.216 0 13 .784 13 1.75v7.736a.75.75 0 0 1-1.5 0V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13.274 9.537v-.001l-4.557 4.45a.75.75 0 0 1-1.055-.008l-1.943-1.95a.75.75 0 0 1 1.062-1.058l1.419 1.425 4.026-3.932a.75.75 0 1 1 1.048 1.074ZM4.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM4 7.75A.75.75 0 0 1 4.75 7h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 4 7.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z",
          }),
          a.createElement("path", {
            d: "M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z",
          })
        ),
      },
    };
  }),
  P2 = c("ChevronDownIcon", "octicon octicon-chevron-down", function () {
    return {
      12: {
        width: 12,
        path: a.createElement("path", {
          d: "M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z",
        }),
      },
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z",
        }),
      },
    };
  }),
  D2 = c("ChevronLeftIcon", "octicon octicon-chevron-left", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z",
        }),
      },
    };
  }),
  x2 = c("ChevronRightIcon", "octicon octicon-chevron-right", function () {
    return {
      12: {
        width: 12,
        path: a.createElement("path", {
          d: "M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z",
        }),
      },
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z",
        }),
      },
    };
  }),
  R2 = c("ChevronUpIcon", "octicon octicon-chevron-up", function () {
    return {
      12: {
        width: 12,
        path: a.createElement("path", {
          d: "M6 4c-.2 0-.4.1-.5.2L2.2 7.5c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0L6 5.9l2.7 2.7c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1L6.6 4.3C6.4 4.1 6.2 4 6 4Z",
        }),
      },
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.22 10.53a.749.749 0 0 1 0-1.06l4.25-4.25a.749.749 0 0 1 1.06 0l4.25 4.25a.749.749 0 1 1-1.06 1.06L8 6.811 4.28 10.53a.749.749 0 0 1-1.06 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z",
        }),
      },
    };
  }),
  O2 = c("CircleIcon", "octicon octicon-circle", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5Z",
        }),
      },
    };
  }),
  N2 = c("CircleSlashIcon", "octicon octicon-circle-slash", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM3.965 13.096a6.5 6.5 0 0 0 9.131-9.131ZM1.5 8a6.474 6.474 0 0 0 1.404 4.035l9.131-9.131A6.499 6.499 0 0 0 1.5 8Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM5.834 19.227A9.464 9.464 0 0 0 12 21.5a9.5 9.5 0 0 0 9.5-9.5 9.464 9.464 0 0 0-2.273-6.166ZM2.5 12a9.464 9.464 0 0 0 2.273 6.166L18.166 4.773A9.463 9.463 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
        }),
      },
    };
  }),
  B2 = c("ClockIcon", "octicon octicon-clock", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  W2 = c("ClockFillIcon", "octicon octicon-clock-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8.575-3.25a.825.825 0 1 0-1.65 0v3.5c0 .337.205.64.519.766l2.5 1a.825.825 0 0 0 .612-1.532l-1.981-.793Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11.575-4.75a.825.825 0 1 0-1.65 0v5.5c0 .296.159.57.416.716l3.5 2a.825.825 0 0 0 .818-1.432l-3.084-1.763Z",
        }),
      },
    };
  }),
  z2 = c("CloudIcon", "octicon octicon-cloud", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 7.25A5.225 5.225 0 0 1 7.25 2a5.222 5.222 0 0 1 4.767 3.029A4.472 4.472 0 0 1 16 9.5c0 2.505-1.995 4.5-4.5 4.5h-8A3.474 3.474 0 0 1 0 10.5c0-1.41.809-2.614 2.001-3.17Zm1.54.482a.75.75 0 0 1-.556.832c-.86.22-1.484.987-1.484 1.936 0 1.124.876 2 2 2h8c1.676 0 3-1.324 3-3s-1.324-3-3-3a.75.75 0 0 1-.709-.504A3.72 3.72 0 0 0 7.25 3.5C5.16 3.5 3.5 5.16 3.5 7.25c.002.146.014.292.035.436l.004.036.001.008Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.103 10.107c0-4.244 3.445-7.607 7.733-7.607 3.19 0 5.912 1.858 7.099 4.563l.01.022.001.006C21.348 7.345 24 10.095 24 13.536 24 17.148 21.076 20 17.431 20H5.017C2.23 20 0 17.83 0 15.06a4.899 4.899 0 0 1 3.112-4.581 7.696 7.696 0 0 1-.009-.372ZM10.836 4c-3.485 0-6.233 2.717-6.233 6.107 0 .284.022.602.052.756a.75.75 0 0 1-.552.869c-1.52.385-2.603 1.712-2.603 3.328 0 1.917 1.532 3.44 3.517 3.44h12.414c2.843 0 5.069-2.206 5.069-4.964 0-2.759-2.226-4.965-5.069-4.965a.75.75 0 0 1-.696-.47l-.179-.446C15.606 5.5 13.424 4 10.836 4Z",
        }),
      },
    };
  }),
  $2 = c("CloudOfflineIcon", "octicon octicon-cloud-offline", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.25 2c-.69 0-1.351.13-1.957.371a.75.75 0 1 0 .554 1.394c.43-.17.903-.265 1.403-.265a3.72 3.72 0 0 1 3.541 2.496.75.75 0 0 0 .709.504c1.676 0 3 1.324 3 3a3 3 0 0 1-.681 1.92.75.75 0 0 0 1.156.955A4.496 4.496 0 0 0 16 9.5a4.472 4.472 0 0 0-3.983-4.471A5.222 5.222 0 0 0 7.25 2ZM.72 1.72a.75.75 0 0 1 1.06 0l2.311 2.31c.03.025.056.052.08.08l8.531 8.532.035.034 2.043 2.044a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-1.8-1.799a4.54 4.54 0 0 1-.42.019h-8A3.474 3.474 0 0 1 0 10.5c0-1.41.809-2.614 2.001-3.17a5.218 5.218 0 0 1 .646-2.622L.72 2.78a.75.75 0 0 1 0-1.06ZM3.5 7.25c.004.161.018.322.041.481a.75.75 0 0 1-.557.833c-.86.22-1.484.986-1.484 1.936 0 1.124.876 2 2 2h6.94L3.771 5.832A3.788 3.788 0 0 0 3.5 7.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "m2.78 2.22 19.5 19.5a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2.845-2.845a6.932 6.932 0 0 1-.944.065H5.017C2.229 20 0 17.831 0 15.059a4.899 4.899 0 0 1 3.111-4.58A7.52 7.52 0 0 1 4.36 5.922L1.72 3.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018ZM16.94 18.5 5.448 7.01a6.026 6.026 0 0 0-.794 3.853.75.75 0 0 1-.552.869c-1.52.385-2.603 1.712-2.603 3.328 0 1.917 1.532 3.44 3.517 3.44Zm-6.104-16a7.865 7.865 0 0 0-3.638.88.75.75 0 1 0 .692 1.331A6.365 6.365 0 0 1 10.836 4c2.588 0 4.77 1.5 5.72 3.655l.179.445a.75.75 0 0 0 .696.471c2.843 0 5.069 2.206 5.069 4.965a4.9 4.9 0 0 1-1.684 3.716.75.75 0 0 0 .986 1.13A6.396 6.396 0 0 0 24 13.536c0-3.44-2.652-6.191-6.054-6.445l-.002-.006a.634.634 0 0 0-.01-.022C16.749 4.358 14.026 2.5 10.837 2.5Z",
        }),
      },
    };
  }),
  _2 = c("CodeIcon", "octicon octicon-code", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z",
        }),
      },
    };
  }),
  U2 = c("CodeOfConductIcon", "octicon octicon-code-of-conduct", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.048 2.241c.964-.709 2.079-1.238 3.325-1.241a4.616 4.616 0 0 1 3.282 1.355c.41.408.757.86.996 1.428.238.568.348 1.206.347 1.968 0 2.193-1.505 4.254-3.081 5.862-1.496 1.526-3.213 2.796-4.249 3.563l-.22.163a.749.749 0 0 1-.895 0l-.221-.163c-1.036-.767-2.753-2.037-4.249-3.563C1.51 10.008.007 7.952.002 5.762a4.614 4.614 0 0 1 1.353-3.407C3.123.585 6.223.537 8.048 2.24Zm-1.153.983c-1.25-1.033-3.321-.967-4.48.191a3.115 3.115 0 0 0-.913 2.335c0 1.556 1.109 3.24 2.652 4.813C5.463 11.898 6.96 13.032 8 13.805c.353-.262.758-.565 1.191-.905l-1.326-1.223a.75.75 0 0 1 1.018-1.102l1.48 1.366c.328-.281.659-.577.984-.887L9.99 9.802a.75.75 0 1 1 1.019-1.103l1.384 1.28c.295-.329.566-.661.81-.995L12.92 8.7l-1.167-1.168c-.674-.671-1.78-.664-2.474.03-.268.269-.538.537-.802.797-.893.882-2.319.843-3.185-.032-.346-.35-.693-.697-1.043-1.047a.75.75 0 0 1-.04-1.016c.162-.191.336-.401.52-.623.62-.748 1.356-1.637 2.166-2.417Zm7.112 4.442c.313-.65.491-1.293.491-1.916v-.001c0-.614-.088-1.045-.23-1.385-.143-.339-.357-.633-.673-.949a3.111 3.111 0 0 0-2.218-.915c-1.092.003-2.165.627-3.226 1.602-.823.755-1.554 1.637-2.228 2.45l-.127.154.562.566a.755.755 0 0 0 1.066.02l.794-.79c1.258-1.258 3.312-1.31 4.594-.032.396.394.792.791 1.173 1.173Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z",
        }),
      },
    };
  }),
  j2 = c("CodeReviewIcon", "octicon octicon-code-review", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 13H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25v-8.5C0 1.784.784 1 1.75 1ZM1.5 2.75v8.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm5.28 1.72a.75.75 0 0 1 0 1.06L5.31 7l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0Zm2.44 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.69 7 9.22 5.53a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.3 6.74a.75.75 0 0 1-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z",
          }),
          a.createElement("path", {
            d: "M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  X2 = c("CodeSquareIcon", "octicon octicon-code-square", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.3 8.24a.75.75 0 0 1-.04 1.06L7.352 12l2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z",
          }),
          a.createElement("path", {
            d: "M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  G2 = c("CodescanIcon", "octicon octicon-codescan", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.47 4.97a.75.75 0 0 0 0 1.06L9.94 7.5 8.47 8.97a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0ZM6.53 6.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.06 7.5l1.47-1.47Z",
          }),
          a.createElement("path", {
            d: "M12.246 13.307a7.501 7.501 0 1 1 1.06-1.06l2.474 2.473a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM1.5 7.5a6.002 6.002 0 0 0 3.608 5.504 6.002 6.002 0 0 0 6.486-1.117.748.748 0 0 1 .292-.293A6 6 0 1 0 1.5 7.5Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.97 6.97a.75.75 0 0 0 0 1.06l2.47 2.47-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0ZM9.03 8.03a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L6.56 10.5l2.47-2.47Z",
          }),
          a.createElement("path", {
            d: "M10.5 0C16.299 0 21 4.701 21 10.5a10.457 10.457 0 0 1-2.564 6.875l4.344 4.345a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-4.345-4.344A10.459 10.459 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5S4.701 0 10.5 0Zm-9 10.5a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9Z",
          })
        ),
      },
    };
  }),
  q2 = c(
    "CodescanCheckmarkIcon",
    "octicon octicon-codescan-checkmark",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M10.28 6.28a.75.75 0 1 0-1.06-1.06L6.25 8.19l-.97-.97a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3.5-3.5Z",
            }),
            a.createElement("path", {
              d: "M7.5 15a7.5 7.5 0 1 1 5.807-2.754l2.473 2.474a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2.474-2.473A7.472 7.472 0 0 1 7.5 15Zm0-13.5a6 6 0 1 0 4.094 10.386.748.748 0 0 1 .293-.292 6.002 6.002 0 0 0 1.117-6.486A6.002 6.002 0 0 0 7.5 1.5Z",
            })
          ),
        },
        24: {
          width: 24,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M15.03 8.28a.75.75 0 0 0-1.06-1.06l-5.22 5.22-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l5.75-5.75Z",
            }),
            a.createElement("path", {
              d: "M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-4.345-4.344A10.457 10.457 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5Zm10.5-9a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Z",
            })
          ),
        },
      };
    }
  ),
  Y2 = c("CodespacesIcon", "octicon octicon-codespaces", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z",
          }),
          a.createElement("path", {
            d: "M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z",
          }),
          a.createElement("path", {
            d: "M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z",
          })
        ),
      },
    };
  }),
  K2 = c("ColumnsIcon", "octicon octicon-columns", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.75 0h2.5C6.216 0 7 .784 7 1.75v12.5A1.75 1.75 0 0 1 5.25 16h-2.5A1.75 1.75 0 0 1 1 14.25V1.75C1 .784 1.784 0 2.75 0Zm8 0h2.5C14.216 0 15 .784 15 1.75v12.5A1.75 1.75 0 0 1 13.25 16h-2.5A1.75 1.75 0 0 1 9 14.25V1.75C9 .784 9.784 0 10.75 0ZM2.5 1.75v12.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Zm8 0v12.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.75 2h5.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 9.25 22h-5.5A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2Zm11 0h5.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22h-5.5A1.75 1.75 0 0 1 13 20.25V3.75c0-.966.784-1.75 1.75-1.75ZM3.5 3.75v16.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25Zm11 0v16.5c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25Z",
        }),
      },
    };
  }),
  Q2 = c("CommandPaletteIcon", "octicon octicon-command-palette", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.045 18.894 9.94 12 3.045 5.106a.75.75 0 0 1 1.06-1.061l7.425 7.425a.75.75 0 0 1 0 1.06l-7.424 7.425a.75.75 0 0 1-1.061-1.06Zm8.205.606a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5Z",
        }),
      },
    };
  }),
  J2 = c("CommentIcon", "octicon octicon-comment", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z",
        }),
      },
    };
  }),
  a7 = c(
    "CommentDiscussionIcon",
    "octicon octicon-comment-discussion",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z",
            }),
            a.createElement("path", {
              d: "M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z",
            })
          ),
        },
      };
    }
  ),
  t7 = c("CommitIcon", "octicon octicon-commit", function () {
    return {
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 11.75A.75.75 0 0 1 .75 11h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm17.5 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z",
          }),
          a.createElement("path", {
            d: "M12 17.75a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
          })
        ),
      },
    };
  }),
  e7 = c("ContainerIcon", "octicon octicon-container", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m10.41.24 4.711 2.774c.544.316.878.897.879 1.526v5.01a1.77 1.77 0 0 1-.88 1.53l-7.753 4.521-.002.001a1.769 1.769 0 0 1-1.774 0H5.59L.873 12.85A1.761 1.761 0 0 1 0 11.327V6.292c0-.304.078-.598.22-.855l.004-.005.01-.019c.15-.262.369-.486.64-.643L8.641.239a1.752 1.752 0 0 1 1.765 0l.002.001ZM9.397 1.534l-7.17 4.182 4.116 2.388a.27.27 0 0 0 .269 0l7.152-4.148-4.115-2.422a.252.252 0 0 0-.252 0Zm-7.768 10.02 4.1 2.393V9.474a1.807 1.807 0 0 1-.138-.072L1.5 7.029v4.298c0 .095.05.181.129.227Zm8.6.642 1.521-.887v-4.45l-1.521.882ZM7.365 9.402h.001c-.044.026-.09.049-.136.071v4.472l1.5-.875V8.61Zm5.885 1.032 1.115-.65h.002a.267.267 0 0 0 .133-.232V5.264l-1.25.725Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M13.152.682a2.251 2.251 0 0 1 2.269 0l.007.004 6.957 4.276a2.277 2.277 0 0 1 1.126 1.964v7.516c0 .81-.432 1.56-1.133 1.968l-.002.001-11.964 7.037-.004.003c-.706.41-1.578.41-2.284 0l-.026-.015-6.503-4.502a2.268 2.268 0 0 1-1.096-1.943V9.438c0-.392.1-.77.284-1.1l.003-.006.014-.026c.197-.342.48-.627.82-.827h.002L13.152.681Zm.757 1.295h-.001L2.648 8.616l6.248 4.247a.775.775 0 0 0 .758-.01h.001l11.633-6.804-6.629-4.074a.75.75 0 0 0-.75.003ZM8.517 14.33a2.286 2.286 0 0 1-.393-.18l-.023-.014-6.102-4.147v7.003c0 .275.145.528.379.664l.025.014 6.114 4.232V14.33ZM18 9.709l-3.25 1.9v7.548L18 17.245Zm-7.59 4.438-.002.002a2.296 2.296 0 0 1-.391.18v7.612l3.233-1.902v-7.552Zm9.09-5.316v7.532l2.124-1.25a.776.776 0 0 0 .387-.671V7.363Z",
        }),
      },
    };
  }),
  n7 = c("CopilotIcon", "octicon octicon-copilot", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.25 9a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 6.25 9Zm4.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z",
          }),
          a.createElement("path", {
            d: "M7.86 1.77c.05.053.097.107.14.164.043-.057.09-.111.14-.164.681-.731 1.737-.9 2.943-.765 1.23.136 2.145.527 2.724 1.26.566.716.693 1.614.693 2.485 0 .572-.053 1.147-.254 1.655l.168.838.066.033A2.75 2.75 0 0 1 16 9.736V11c0 .24-.086.438-.156.567-.073.131-.16.253-.259.366-.18.21-.404.413-.605.58a10.19 10.19 0 0 1-.792.597l-.015.01-.006.004-.028.018a8.849 8.849 0 0 1-.456.281c-.307.177-.749.41-1.296.642C11.296 14.528 9.756 15 8 15c-1.756 0-3.296-.472-4.387-.935a12.28 12.28 0 0 1-1.296-.641 8.849 8.849 0 0 1-.456-.281l-.028-.02-.006-.003-.015-.01a10.593 10.593 0 0 1-.792-.596 5.264 5.264 0 0 1-.605-.58 2.133 2.133 0 0 1-.259-.367A1.189 1.189 0 0 1 0 11V9.736a2.75 2.75 0 0 1 1.52-2.46l.067-.033.167-.838C1.553 5.897 1.5 5.322 1.5 4.75c0-.87.127-1.77.693-2.485.579-.733 1.494-1.124 2.724-1.26 1.206-.134 2.262.034 2.944.765ZM3 7.824v4.261c.02.013.043.025.065.038.264.152.65.356 1.134.562.972.412 2.307.815 3.801.815 1.494 0 2.83-.403 3.8-.815.412-.174.813-.375 1.2-.6v-4.26l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.06-.328-2.71-.991A3.233 3.233 0 0 1 8 6.266c-.144.269-.321.52-.54.743C6.81 7.672 5.896 8 4.75 8c-.652 0-1.236-.082-1.726-.291L3 7.824Zm6.237-5.031c-.204.218-.359.678-.242 1.614.091.726.303 1.23.618 1.553.299.304.784.54 1.638.54.922 0 1.28-.199 1.442-.38.179-.2.308-.578.308-1.37 0-.765-.123-1.242-.37-1.555-.233-.296-.693-.586-1.713-.7-1.044-.116-1.488.091-1.681.298Zm-2.472 0c-.193-.207-.637-.414-1.681-.298-1.02.114-1.48.404-1.713.7-.247.313-.37.79-.37 1.555 0 .792.129 1.17.308 1.37.162.181.52.38 1.442.38.854 0 1.339-.236 1.638-.54.315-.323.527-.827.618-1.553.117-.936-.038-1.396-.242-1.614Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.75 14a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm4.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z",
          }),
          a.createElement("path", {
            d: "M12 2c2.214 0 4.248.657 5.747 1.756.136.099.268.204.397.312.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086l.633 1.478.043.022A4.75 4.75 0 0 1 24 15.222v1.028c0 .529-.309.987-.565 1.293-.28.336-.636.653-.966.918a13.84 13.84 0 0 1-1.299.911l-.024.015-.006.004-.039.025c-.223.135-.45.264-.68.386-.46.245-1.122.571-1.941.895C16.845 21.344 14.561 22 12 22c-2.561 0-4.845-.656-6.479-1.303a19.046 19.046 0 0 1-1.942-.894 14.081 14.081 0 0 1-.535-.3l-.144-.087-.04-.025-.006-.004-.024-.015a13.16 13.16 0 0 1-1.299-.911 6.913 6.913 0 0 1-.967-.918C.31 17.237 0 16.779 0 16.25v-1.028a4.75 4.75 0 0 1 2.626-4.248l.043-.022.633-1.478a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.498 1.132-3.368.397-.406.89-.717 1.474-.952.129-.108.261-.213.397-.312C7.752 2.657 9.786 2 12 2Zm-8 9.654v6.669a17.59 17.59 0 0 0 2.073.98C7.595 19.906 9.686 20.5 12 20.5c2.314 0 4.405-.594 5.927-1.197a17.59 17.59 0 0 0 2.073-.98v-6.669l-.038-.09c-.046.061-.095.12-.145.177-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.544-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.344a4.323 4.323 0 0 1-.355.508C10.704 12.456 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a3.026 3.026 0 0 1-.145-.177Zm6.309-1.092c.445-.547.708-1.334.851-2.301.057-.357.087-.718.09-1.079v-.031c-.001-.762-.166-1.26-.43-1.568l-.008-.01c-.341-.391-1.046-.689-2.533-.529-1.505.163-2.347.537-2.824 1.024-.462.473-.705 1.18-.705 2.32 0 .605.044 1.087.135 1.472.092.384.231.672.423.89.365.413 1.084.75 2.657.75.91 0 1.527-.223 1.964-.564.14-.11.268-.235.38-.374Zm2.504-2.497c.136 1.057.403 1.913.878 2.497.442.545 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.151.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.318-.862-2.824-1.025-1.487-.161-2.192.139-2.533.529-.268.308-.437.808-.438 1.578v.02c.002.299.023.598.063.894Z",
          })
        ),
      },
      48: {
        width: 48,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M21 29.5a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 3 0v-4Zm9 0a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 3 0v-4Z",
          }),
          a.createElement("path", {
            d: "M34.895 8.939c1.89.602 3.378 1.472 4.41 2.73 1.397 1.703 1.736 3.837 1.55 6.19l.016.032 1.684 3.79.964.193a3.5 3.5 0 0 1 2.161 1.398l1.668 2.335c.424.593.652 1.304.652 2.033v4.86c0 1.058-.619 1.973-1.129 2.585-.56.673-1.273 1.308-1.934 1.836a26.616 26.616 0 0 1-2.597 1.824l-.048.029h-.001l-.012.008-.021.014-.058.035c-.445.27-.898.528-1.358.773a37.655 37.655 0 0 1-3.883 1.79C33.69 42.69 29.123 44 24 44c-5.123 0-9.69-1.311-12.959-2.605a38.197 38.197 0 0 1-3.884-1.79c-.46-.245-.912-.503-1.357-.773l-.08-.05-.011-.007-.001-.001-.048-.03c-.041-.025-.1-.06-.173-.107a26.449 26.449 0 0 1-2.424-1.716c-.66-.528-1.373-1.163-1.934-1.836C.619 34.473 0 33.558 0 32.5v-4.86c0-.729.228-1.44.652-2.033l1.668-2.335a3.5 3.5 0 0 1 2.161-1.398l.964-.193 1.684-3.79.015-.032c-.185-2.353.154-4.487 1.55-6.19 1.033-1.258 2.52-2.128 4.411-2.73C15.84 6.82 19.71 5.5 24 5.5c4.29 0 8.16 1.321 10.895 3.439ZM23.643 20.5v-.001a8.385 8.385 0 0 1-.946 1.894c-1.263 1.866-3.286 3.044-6.18 3.297-3.115.273-5.498-.171-7.111-1.707a5.848 5.848 0 0 1-1.077-1.405l-.329.74v13.328c.163.092.353.197.569.312a35.355 35.355 0 0 0 3.577 1.647C15.19 39.811 19.373 41 24 41c4.627 0 8.809-1.189 11.854-2.394a35.238 35.238 0 0 0 3.576-1.647c.217-.115.407-.22.57-.312V23.32l-.329-.74a5.842 5.842 0 0 1-1.078 1.404c-1.612 1.536-3.995 1.98-7.11 1.707-2.894-.253-4.917-1.431-6.18-3.297a8.427 8.427 0 0 1-.946-1.894h-.714Zm-12.514.907c.107.152.222.286.346.404.675.643 1.966 1.138 4.78.892 2.139-.187 3.277-.985 3.958-1.99.067-.1.131-.203.192-.31.607-1.067.897-2.504.968-4.242.095-2.367-.35-3.664-1.021-4.309-.623-.599-1.877-1.034-4.506-.514-2.668.527-4.082 1.322-4.832 2.235-.721.88-1.047 2.144-.869 4.174.157 1.796.474 2.934.984 3.66Zm26.679-3.183c.017-.154.033-.313.047-.478.178-2.03-.148-3.294-.869-4.174-.75-.913-2.164-1.708-4.832-2.235-2.629-.52-3.883-.085-4.506.514-.671.645-1.116 1.942-1.021 4.31.071 1.737.361 3.174.968 4.24a4.7 4.7 0 0 0 .192.31c.638.943 1.679 1.703 3.568 1.948.129.017.259.031.389.043 2.111.184 3.365-.047 4.145-.447.26-.133.467-.285.636-.445.662-.63 1.073-1.711 1.283-3.586ZM22.5 17a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1Z",
          })
        ),
      },
      96: {
        width: 96,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M38 54a4 4 0 0 1 4 4v8a4 4 0 0 1-8 0v-8a4 4 0 0 1 4-4Zm24 4a4 4 0 0 0-8 0v8a4 4 0 1 0 8 0v-8Z",
          }),
          a.createElement("path", {
            d: "M25.013 15.024C31.008 10.628 39.145 8 48 8c8.855 0 16.992 2.628 22.987 7.024 3.64 2.67 6.553 6.05 8.278 9.92 1.615 2.744 2.114 5.94 1.968 9.397l3.898 9.026.355.07a10.996 10.996 0 0 1 6.794 4.394l2.416 3.382A7 7 0 0 1 96 55.282V65c0 2.116-1.238 3.947-2.258 5.17-1.122 1.347-2.547 2.616-3.868 3.673a52.899 52.899 0 0 1-3.647 2.653c-.51.34-1.025.671-1.546.993l-.061.037-.036.022-.002.001-.024.015-.158.099c-.134.083-.327.201-.576.348-.704.415-1.417.815-2.139 1.199a76.495 76.495 0 0 1-7.768 3.58C67.381 85.377 58.245 88 48 88c-10.245 0-19.381-2.622-25.917-5.21a76.495 76.495 0 0 1-7.768-3.58 55.966 55.966 0 0 1-2.14-1.199 34.102 34.102 0 0 1-.733-.447l-.024-.015-.002-.001-.038-.023-.059-.036-.345-.215a54.57 54.57 0 0 1-1.2-.778 52.918 52.918 0 0 1-3.648-2.653c-1.321-1.057-2.746-2.326-3.868-3.672C1.238 68.946 0 67.116 0 65v-9.718a7 7 0 0 1 1.304-4.069l2.416-3.382a10.998 10.998 0 0 1 6.794-4.393l.355-.071 3.898-9.026c-.146-3.457.353-6.654 1.968-9.398 1.725-3.87 4.637-7.249 8.278-9.919ZM16 46.62v26.671c.326.184.706.394 1.138.624a70.399 70.399 0 0 0 7.154 3.295C30.381 79.622 38.745 82 48 82c9.255 0 17.618-2.378 23.708-4.789a70.406 70.406 0 0 0 7.154-3.296c.432-.23.812-.44 1.138-.624V46.62l-.983-2.275a11.56 11.56 0 0 1-2.281 3.065c-3.167 3.016-7.836 3.88-13.914 3.348-5.658-.495-9.622-2.8-12.098-6.457a13.9 13.9 0 0 1-.213-.324c-1.674.031-3.348.031-5.022 0-.07.109-.141.217-.213.324-2.476 3.657-6.44 5.962-12.098 6.457-6.077.532-10.747-.332-13.914-3.348a11.586 11.586 0 0 1-2.282-3.065Zm24.307-5.683c1.427-2.108 2.097-5.107 2.247-8.826.185-4.606-.683-7.105-1.965-8.337-1.187-1.139-3.597-1.991-8.71-.981-5.191 1.025-7.925 2.568-9.368 4.328-1.388 1.692-2.022 4.13-1.677 8.076.199 2.276.53 4.003 1.007 5.316.358.985.799 1.738 1.328 2.315.075.082.153.161.233.237 1.21 1.153 3.471 2.073 8.261 1.789.32-.019.65-.043.992-.073 1.952-.171 3.472-.603 4.67-1.216a7.8 7.8 0 0 0 2.982-2.628Zm15.386 0a7.8 7.8 0 0 0 2.982 2.628c1.198.613 2.718 1.045 4.67 1.216 5.475.479 7.962-.486 9.253-1.716.634-.604 1.151-1.425 1.56-2.551.478-1.314.808-3.04 1.008-5.317.345-3.946-.289-6.384-1.677-8.076-1.443-1.76-4.177-3.303-9.368-4.328-5.113-1.01-7.523-.158-8.71.981-1.282 1.232-2.15 3.731-1.965 8.337.15 3.719.82 6.718 2.247 8.826Zm-9.27-5.997a6.498 6.498 0 0 1 3.154 0l.06.015a1.498 1.498 0 0 0 1.463-.399 1.498 1.498 0 0 0-.736-2.511l-.06-.015a9.504 9.504 0 0 0-4.608 0l-.06.015a1.498 1.498 0 0 0-.73 2.508 1.5 1.5 0 0 0 1.458.402l.06-.015Z",
          })
        ),
      },
    };
  }),
  c7 = c("CopilotErrorIcon", "octicon octicon-copilot-error", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M.865 2.759v.001l14.82 10.722a.755.755 0 0 0 .188.1.751.751 0 0 1-1.063 1.025l-1.415-1.024c-.274.147-.613.315-1.008.482C11.296 14.528 9.756 15 8 15c-1.756 0-3.296-.473-4.387-.934a11.947 11.947 0 0 1-1.654-.859l-.098-.065-.028-.018-.006-.004-.015-.01a10.19 10.19 0 0 1-.792-.597 5.145 5.145 0 0 1-.605-.58 2.185 2.185 0 0 1-.259-.366A1.193 1.193 0 0 1 0 11V9.736a2.75 2.75 0 0 1 1.52-2.46l.067-.033.167-.838c-.175-.442-.238-.936-.251-1.434L.31 4.107a.75.75 0 0 1 .555-1.348ZM7.86 1.77c.05.053.097.107.14.164.043-.057.09-.111.14-.164.681-.731 1.737-.9 2.943-.765 1.23.136 2.145.527 2.724 1.26.566.716.693 1.614.693 2.485 0 .572-.053 1.147-.254 1.655l.168.838.066.033A2.75 2.75 0 0 1 16 9.736V11c0 .24-.086.438-.156.567a1.59 1.59 0 0 1-.075.125L13 9.688V7.824l-.023-.115c-.49.21-1.075.291-1.727.291-.22 0-.43-.012-.633-.036L6.824 5.22c.082-.233.143-.503.182-.813.117-.936-.038-1.396-.242-1.614-.193-.207-.637-.414-1.681-.298-.707.079-1.144.243-1.424.434l-1.251-.905c.58-.579 1.422-.899 2.51-1.02 1.205-.133 2.26.035 2.943.766ZM4.75 8c-.652 0-1.237-.081-1.727-.291L3 7.825v4.26c.387.225.788.426 1.2.6.97.412 2.306.815 3.8.815 1.494 0 2.829-.403 3.801-.815.076-.033.15-.065.22-.097L5.594 7.934A5.158 5.158 0 0 1 4.75 8Zm4.486-5.207c-.204.218-.359.678-.242 1.614.091.726.303 1.23.618 1.553.299.304.784.54 1.638.54.922 0 1.28-.199 1.442-.38.179-.2.308-.578.308-1.37 0-.765-.123-1.242-.37-1.555-.233-.296-.693-.586-1.713-.7-1.044-.116-1.488.091-1.681.298Z",
        }),
      },
    };
  }),
  o7 = c("CopilotWarningIcon", "octicon octicon-copilot-warning", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.86 1.77c.05.053.097.107.14.164.043-.057.09-.111.14-.164.681-.731 1.737-.9 2.943-.765 1.23.136 2.145.527 2.724 1.26.566.716.693 1.614.693 2.485 0 .463-.035.929-.155 1.359a6.015 6.015 0 0 0-1.398-.616c.034-.195.053-.439.053-.743 0-.766-.123-1.242-.37-1.555-.233-.296-.693-.586-1.713-.7-1.044-.116-1.488.091-1.681.298-.204.218-.359.678-.242 1.614.06.479.172.86.332 1.158a6.014 6.014 0 0 0-2.92 2.144C5.926 7.904 5.372 8 4.75 8c-.652 0-1.237-.082-1.727-.291L3 7.824v4.261c.02.013.043.025.065.038a10.83 10.83 0 0 0 2.495 1.035c.21.629.522 1.21.916 1.726a11.883 11.883 0 0 1-2.863-.819 12.28 12.28 0 0 1-1.296-.641 8.849 8.849 0 0 1-.456-.281l-.028-.02-.006-.003-.015-.01a10.593 10.593 0 0 1-.792-.596 5.264 5.264 0 0 1-.605-.58 2.133 2.133 0 0 1-.259-.367A1.189 1.189 0 0 1 0 11V9.736a2.75 2.75 0 0 1 1.52-2.46l.067-.033.167-.838C1.553 5.897 1.5 5.322 1.5 4.75c0-.87.127-1.77.693-2.485.579-.733 1.494-1.124 2.724-1.26 1.206-.134 2.262.034 2.944.765ZM6.765 2.793c-.193-.207-.637-.414-1.681-.298-1.02.114-1.48.404-1.713.7-.247.313-.37.79-.37 1.555 0 .792.129 1.17.308 1.37.162.181.52.38 1.442.38.854 0 1.339-.236 1.638-.54.315-.323.527-.827.618-1.553.117-.936-.038-1.396-.242-1.614Z",
          }),
          a.createElement("path", {
            d: "M8.498 14.81v.001a4.5 4.5 0 1 1 5.503-7.12 4.5 4.5 0 0 1-5.503 7.119ZM10.5 8.75V11a.75.75 0 0 0 1.5 0V8.75a.75.75 0 0 0-1.5 0Zm.75 5.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          })
        ),
      },
    };
  }),
  l7 = c("CopyIcon", "octicon octicon-copy", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z",
          }),
          a.createElement("path", {
            d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z",
          }),
          a.createElement("path", {
            d: "M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z",
          })
        ),
      },
    };
  }),
  r7 = c("CpuIcon", "octicon octicon-cpu", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.5.75V2h3V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75V5h1.25a.75.75 0 0 1 0 1.5H14v3h1.25a.75.75 0 0 1 0 1.5H14v1.25A1.75 1.75 0 0 1 12.25 14H11v1.25a.75.75 0 0 1-1.5 0V14h-3v1.25a.75.75 0 0 1-1.5 0V14H3.75A1.75 1.75 0 0 1 2 12.25V11H.75a.75.75 0 0 1 0-1.5H2v-3H.75a.75.75 0 0 1 0-1.5H2V3.75C2 2.784 2.784 2 3.75 2H5V.75a.75.75 0 0 1 1.5 0Zm5.75 11.75a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25ZM5.75 5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 5.75 5Zm.75 4.5h3v-3h-3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.75 8h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75v-6.5A.75.75 0 0 1 8.75 8Zm.75 6.5h5v-5h-5Z",
          }),
          a.createElement("path", {
            d: "M15.25 1a.75.75 0 0 1 .75.75V4h2.25c.966 0 1.75.784 1.75 1.75V8h2.25a.75.75 0 0 1 0 1.5H20v5h2.25a.75.75 0 0 1 0 1.5H20v2.25A1.75 1.75 0 0 1 18.25 20H16v2.25a.75.75 0 0 1-1.5 0V20h-5v2.25a.75.75 0 0 1-1.5 0V20H5.75A1.75 1.75 0 0 1 4 18.25V16H1.75a.75.75 0 0 1 0-1.5H4v-5H1.75a.75.75 0 0 1 0-1.5H4V5.75C4 4.784 4.784 4 5.75 4H8V1.75a.75.75 0 0 1 1.5 0V4h5V1.75a.75.75 0 0 1 .75-.75Zm3 17.5a.25.25 0 0 0 .25-.25V5.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25Z",
          })
        ),
      },
    };
  }),
  h7 = c("CreditCardIcon", "octicon octicon-credit-card", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.75 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z",
          }),
          a.createElement("path", {
            d: "M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25ZM14.5 6.5h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm0-2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5h13Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M15.25 14a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z",
          }),
          a.createElement("path", {
            d: "M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3Zm-.25 7v9.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V10Zm0-5.25V8.5h21V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z",
          })
        ),
      },
    };
  }),
  i7 = c("CrossReferenceIcon", "octicon octicon-cross-reference", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.75 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 13H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 14.543V13H2.75A1.75 1.75 0 0 1 1 11.25v-7.5C1 2.784 1.784 2 2.75 2h5.5a.75.75 0 0 1 0 1.5ZM16 1.25v4.146a.25.25 0 0 1-.427.177L14.03 4.03l-3.75 3.75a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l3.75-3.75-1.543-1.543A.25.25 0 0 1 11.604 1h4.146a.25.25 0 0 1 .25.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M16.5 2.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.06l-6.22 6.22a.75.75 0 1 1-1.06-1.06L20.94 3h-3.69a.75.75 0 0 1-.75-.75Z",
          }),
          a.createElement("path", {
            d: "M3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.75.75 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25v-6a.75.75 0 0 1 1.5 0v6a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75V4.25c0-.966.784-1.75 1.75-1.75h11a.75.75 0 0 1 0 1.5h-11Z",
          })
        ),
      },
    };
  }),
  d7 = c("DashIcon", "octicon octicon-dash", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4.5 12.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  p7 = c("DatabaseIcon", "octicon octicon-database", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1 3.5c0-.626.292-1.165.7-1.59.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869.622.274 1.172.62 1.578 1.04.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869-.623-.274-1.173-.62-1.579-1.04-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55 0-.133-.058-.318-.282-.551-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742-.508.224-.873.471-1.1.708-.224.232-.282.417-.282.55Zm0 4.5c0 .133.058.318.282.551.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742.508-.224.873-.471 1.1-.708.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55.227.237.592.484 1.1.708 1.016.447 2.471.742 4.118.742 1.647 0 3.102-.295 4.117-.742.51-.224.874-.47 1.101-.707.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406-1.247.549-2.917.869-4.722.869-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 1.25c2.487 0 4.773.402 6.466 1.079.844.337 1.577.758 2.112 1.264.536.507.922 1.151.922 1.907v12.987l-.026.013h.026c0 .756-.386 1.4-.922 1.907-.535.506-1.268.927-2.112 1.264-1.693.677-3.979 1.079-6.466 1.079s-4.774-.402-6.466-1.079c-.844-.337-1.577-.758-2.112-1.264C2.886 19.9 2.5 19.256 2.5 18.5h.026l-.026-.013V5.5c0-.756.386-1.4.922-1.907.535-.506 1.268-.927 2.112-1.264C7.226 1.652 9.513 1.25 12 1.25ZM4 14.371v4.116l-.013.013H4c0 .211.103.487.453.817.351.332.898.666 1.638.962 1.475.589 3.564.971 5.909.971 2.345 0 4.434-.381 5.909-.971.739-.296 1.288-.63 1.638-.962.349-.33.453-.607.453-.817h.013L20 18.487v-4.116a7.85 7.85 0 0 1-1.534.8c-1.693.677-3.979 1.079-6.466 1.079s-4.774-.402-6.466-1.079a7.843 7.843 0 0 1-1.534-.8ZM20 12V7.871a7.85 7.85 0 0 1-1.534.8C16.773 9.348 14.487 9.75 12 9.75s-4.774-.402-6.466-1.079A7.85 7.85 0 0 1 4 7.871V12c0 .21.104.487.453.817.35.332.899.666 1.638.961 1.475.59 3.564.972 5.909.972 2.345 0 4.434-.382 5.909-.972.74-.295 1.287-.629 1.638-.96.35-.33.453-.607.453-.818ZM4 5.5c0 .211.103.487.453.817.351.332.898.666 1.638.962 1.475.589 3.564.971 5.909.971 2.345 0 4.434-.381 5.909-.971.739-.296 1.288-.63 1.638-.962.349-.33.453-.607.453-.817 0-.211-.103-.487-.453-.817-.351-.332-.898-.666-1.638-.962-1.475-.589-3.564-.971-5.909-.971-2.345 0-4.434.381-5.909.971-.739.296-1.288.63-1.638.962C4.104 5.013 4 5.29 4 5.5Z",
        }),
      },
    };
  }),
  m7 = c("DependabotIcon", "octicon octicon-dependabot", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.75 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm5.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z",
          }),
          a.createElement("path", {
            d: "M6.25 0h2A.75.75 0 0 1 9 .75V3.5h3.25a2.25 2.25 0 0 1 2.25 2.25V8h.75a.75.75 0 0 1 0 1.5h-.75v2.75a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V9.5H.75a.75.75 0 0 1 0-1.5h.75V5.75A2.25 2.25 0 0 1 3.75 3.5H7.5v-2H6.25a.75.75 0 0 1 0-1.5ZM3 5.75v6.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.75 11a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Zm7.25.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z",
          }),
          a.createElement("path", {
            d: "M9.813 1h2.437a.75.75 0 0 1 .75.75V5h6.75A2.25 2.25 0 0 1 22 7.25v5.25h1.25a.75.75 0 0 1 0 1.5H22v5.75A2.25 2.25 0 0 1 19.75 22H4.25A2.25 2.25 0 0 1 2 19.75V14H.75a.75.75 0 0 1 0-1.5H2V7.25A2.25 2.25 0 0 1 4.25 5h7.25V2.5H9.813A.75.75 0 0 1 9.812 1ZM3.5 7.25v12.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V7.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75Z",
          })
        ),
      },
    };
  }),
  v7 = c(
    "DesktopDownloadIcon",
    "octicon octicon-desktop-download",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "m4.927 5.427 2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 5H8.75V.75a.75.75 0 1 0-1.5 0V5H5.104a.25.25 0 0 0-.177.427Z",
            }),
            a.createElement("path", {
              d: "M1.573 2.573a.25.25 0 0 0-.073.177v7.5a.25.25 0 0 0 .25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-3a.75.75 0 1 1 0-1.5h3A1.75 1.75 0 0 1 16 2.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.75.75 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5A1.75 1.75 0 0 1 1.75 1h3a.75.75 0 0 1 0 1.5h-3a.25.25 0 0 0-.177.073ZM6.982 12a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5H6.982Z",
            })
          ),
        },
        24: {
          width: 24,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M11.25 9.331V.75a.75.75 0 0 1 1.5 0v8.58l1.949-2.11A.75.75 0 1 1 15.8 8.237l-3.25 3.52a.75.75 0 0 1-1.102 0l-3.25-3.52A.75.75 0 1 1 9.3 7.22l1.949 2.111Z",
            }),
            a.createElement("path", {
              d: "M2.5 3.75v11.5c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25h-5.5a.75.75 0 0 1 0-1.5h5.5c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0 1 21.25 17h-6.204c.171 1.375.805 2.652 1.769 3.757A.752.752 0 0 1 16.25 22h-8.5a.75.75 0 0 1-.566-1.243c.965-1.105 1.599-2.382 1.77-3.757H2.75A1.75 1.75 0 0 1 1 15.25V3.75C1 2.784 1.784 2 2.75 2h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25ZM10.463 17c-.126 1.266-.564 2.445-1.223 3.5h5.52c-.66-1.055-1.098-2.234-1.223-3.5Z",
            })
          ),
        },
      };
    }
  ),
  u7 = c("DeviceCameraIcon", "octicon octicon-device-camera", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M15 3c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1 0-.55.45-1 1-1h4c.55 0 1 .45 1 1Zm-4.5 9c1.94 0 3.5-1.56 3.5-3.5S12.44 5 10.5 5 7 6.56 7 8.5 8.56 12 10.5 12ZM13 8.5c0 1.38-1.13 2.5-2.5 2.5S8 9.87 8 8.5 9.13 6 10.5 6 13 7.13 13 8.5ZM6 5V4H2v1Z",
        }),
      },
    };
  }),
  Z7 = c(
    "DeviceCameraVideoIcon",
    "octicon octicon-device-camera-video",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M16 3.75v8.5a.75.75 0 0 1-1.136.643L11 10.575v.675A1.75 1.75 0 0 1 9.25 13h-7.5A1.75 1.75 0 0 1 0 11.25v-6.5C0 3.784.784 3 1.75 3h7.5c.966 0 1.75.784 1.75 1.75v.675l3.864-2.318A.75.75 0 0 1 16 3.75Zm-6.5 1a.25.25 0 0 0-.25-.25h-7.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-6.5ZM11 8.825l3.5 2.1v-5.85l-3.5 2.1Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "M24 5.25v13a.75.75 0 0 1-1.136.643L16.5 15.075v2.175A1.75 1.75 0 0 1 14.75 19h-13A1.75 1.75 0 0 1 0 17.25v-11C0 5.284.784 4.5 1.75 4.5h13c.966 0 1.75.784 1.75 1.75v2.175l6.364-3.818A.75.75 0 0 1 24 5.25Zm-9 1a.25.25 0 0 0-.25-.25h-13a.25.25 0 0 0-.25.25v11c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25v-11Zm1.5 7.075 6 3.6V6.575l-6 3.6Z",
          }),
        },
      };
    }
  ),
  s7 = c("DeviceDesktopIcon", "octicon octicon-device-desktop", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M14.25 1c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 14.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.752.752 0 0 1 11.25 16h-6.5a.75.75 0 0 1-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 0 1 0 10.25v-7.5C0 1.784.784 1 1.75 1ZM1.75 2.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25ZM9.018 12H6.982a5.72 5.72 0 0 1-.765 2.5h3.566a5.72 5.72 0 0 1-.765-2.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M8.954 17H2.75A1.75 1.75 0 0 1 1 15.25V3.75C1 2.784 1.784 2 2.75 2h18.5c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0 1 21.25 17h-6.204c.171 1.375.805 2.652 1.769 3.757A.752.752 0 0 1 16.25 22h-8.5a.75.75 0 0 1-.565-1.243c.964-1.105 1.598-2.382 1.769-3.757ZM21.5 3.75a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v11.5c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25ZM13.537 17h-3.074c-.126 1.266-.564 2.445-1.223 3.5h5.52c-.659-1.055-1.098-2.234-1.223-3.5Z",
        }),
      },
    };
  }),
  M7 = c("DeviceMobileIcon", "octicon octicon-device-mobile", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.25 5.25A.75.75 0 0 1 11 4.5h2A.75.75 0 0 1 13 6h-2a.75.75 0 0 1-.75-.75ZM12 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            d: "M4 2.75C4 1.784 4.784 1 5.75 1h12.5c.966 0 1.75.784 1.75 1.75v18.5A1.75 1.75 0 0 1 18.25 23H5.75A1.75 1.75 0 0 1 4 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  f7 = c("DiamondIcon", "octicon octicon-diamond", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M.527 9.237a1.75 1.75 0 0 1 0-2.474L6.777.512a1.75 1.75 0 0 1 2.475 0l6.251 6.25a1.75 1.75 0 0 1 0 2.475l-6.25 6.251a1.75 1.75 0 0 1-2.475 0L.527 9.238Zm1.06-1.414a.25.25 0 0 0 0 .354l6.251 6.25a.25.25 0 0 0 .354 0l6.25-6.25a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.354 0l-6.25 6.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1.527 13.237a1.75 1.75 0 0 1 0-2.474l9.272-9.273a1.75 1.75 0 0 1 2.475 0l9.272 9.273a1.75 1.75 0 0 1 0 2.474l-9.272 9.272a1.75 1.75 0 0 1-2.475 0Zm1.06-1.414a.25.25 0 0 0 0 .354l9.273 9.272a.25.25 0 0 0 .353 0l9.272-9.272a.25.25 0 0 0 0-.354l-9.272-9.272a.25.25 0 0 0-.353 0Z",
        }),
      },
    };
  }),
  A7 = c("DiffIcon", "octicon octicon-diff", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.75 1.75V5H12a.75.75 0 0 1 0 1.5H8.75v3.25a.75.75 0 0 1-1.5 0V6.5H4A.75.75 0 0 1 4 5h3.25V1.75a.75.75 0 0 1 1.5 0ZM4 13h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 4 13Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.25 3.5a.75.75 0 0 1 .75.75V8.5h4.25a.75.75 0 0 1 0 1.5H13v4.25a.75.75 0 0 1-1.5 0V10H7.25a.75.75 0 0 1 0-1.5h4.25V4.25a.75.75 0 0 1 .75-.75ZM6.562 19.25a.75.75 0 0 1 .75-.75h9.938a.75.75 0 0 1 0 1.5H7.312a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  E7 = c("DiffAddedIcon", "octicon octicon-diff-added", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1Zm10.5 1.5H2.75a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4Z",
        }),
      },
    };
  }),
  w7 = c("DiffIgnoredIcon", "octicon octicon-diff-ignored", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.25 1c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Zm8.53 3.28-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
    };
  }),
  g7 = c("DiffModifiedIcon", "octicon octicon-diff-modified", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.25 1c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z",
        }),
      },
    };
  }),
  V7 = c("DiffRemovedIcon", "octicon octicon-diff-removed", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.25 1c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Zm8.5 6.25h-6.5a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5Z",
        }),
      },
    };
  }),
  H7 = c("DiffRenamedIcon", "octicon octicon-diff-renamed", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.25 1c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Zm9.03 6.03-3.25 3.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.97-1.97H4.75a.75.75 0 0 1 0-1.5h4.69L7.47 5.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l3.25 3.25a.75.75 0 0 1 0 1.06Z",
        }),
      },
    };
  }),
  I7 = c("DotIcon", "octicon octicon-dot", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
        }),
      },
    };
  }),
  C7 = c("DotFillIcon", "octicon octicon-dot-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z",
        }),
      },
    };
  }),
  L7 = c("DownloadIcon", "octicon octicon-download", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z",
          }),
          a.createElement("path", {
            d: "M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.75 17.25a.75.75 0 0 1 .75.75v2.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V18a.75.75 0 0 1 1.5 0v2.25A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V18a.75.75 0 0 1 .75-.75Z",
          }),
          a.createElement("path", {
            d: "M5.22 9.97a.749.749 0 0 1 1.06 0l4.97 4.969V2.75a.75.75 0 0 1 1.5 0v12.189l4.97-4.969a.749.749 0 1 1 1.06 1.06l-6.25 6.25a.749.749 0 0 1-1.06 0l-6.25-6.25a.749.749 0 0 1 0-1.06Z",
          })
        ),
      },
    };
  }),
  y7 = c("DuplicateIcon", "octicon octicon-duplicate", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.5 3a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 10.5 3Z",
          }),
          a.createElement("path", {
            d: "M6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5C5 .784 5.784 0 6.75 0ZM6.5 1.75v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5a.25.25 0 0 0-.25.25Z",
          }),
          a.createElement("path", {
            d: "M1.75 5A1.75 1.75 0 0 0 0 6.75v7.5C0 15.216.784 16 1.75 16h7.5A1.75 1.75 0 0 0 11 14.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25v-7.5a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M14.513 6a.75.75 0 0 1 .75.75v2h1.987a.75.75 0 0 1 0 1.5h-1.987v2a.75.75 0 1 1-1.5 0v-2H11.75a.75.75 0 0 1 0-1.5h2.013v-2a.75.75 0 0 1 .75-.75Z",
          }),
          a.createElement("path", {
            d: "M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z",
          }),
          a.createElement("path", {
            d: "M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z",
          })
        ),
      },
    };
  }),
  b7 = c("EllipsisIcon", "octicon octicon-ellipsis", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
        }),
      },
    };
  }),
  S7 = c("EyeIcon", "octicon octicon-eye", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
          }),
          a.createElement("path", {
            d: "M12 3.5c3.432 0 6.124 1.534 8.054 3.241 1.926 1.703 3.132 3.61 3.616 4.46a1.6 1.6 0 0 1 0 1.598c-.484.85-1.69 2.757-3.616 4.461-1.929 1.706-4.622 3.24-8.054 3.24-3.432 0-6.124-1.534-8.054-3.24C2.02 15.558.814 13.65.33 12.8a1.6 1.6 0 0 1 0-1.598c.484-.85 1.69-2.757 3.616-4.462C5.875 5.034 8.568 3.5 12 3.5ZM1.633 11.945a.115.115 0 0 0-.017.055c.001.02.006.039.017.056.441.774 1.551 2.527 3.307 4.08C6.691 17.685 9.045 19 12 19c2.955 0 5.31-1.315 7.06-2.864 1.756-1.553 2.866-3.306 3.307-4.08a.111.111 0 0 0 .017-.056.111.111 0 0 0-.017-.056c-.441-.773-1.551-2.527-3.307-4.08C17.309 6.315 14.955 5 12 5 9.045 5 6.69 6.314 4.94 7.865c-1.756 1.552-2.866 3.306-3.307 4.08Z",
          })
        ),
      },
    };
  }),
  k7 = c("EyeClosedIcon", "octicon octicon-eye-closed", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M.143 2.31a.75.75 0 0 1 1.047-.167l14.5 10.5a.75.75 0 1 1-.88 1.214l-2.248-1.628C11.346 13.19 9.792 14 8 14c-1.981 0-3.67-.992-4.933-2.078C1.797 10.832.88 9.577.43 8.9a1.619 1.619 0 0 1 0-1.797c.353-.533.995-1.42 1.868-2.305L.31 3.357A.75.75 0 0 1 .143 2.31Zm1.536 5.622A.12.12 0 0 0 1.657 8c0 .021.006.045.022.068.412.621 1.242 1.75 2.366 2.717C5.175 11.758 6.527 12.5 8 12.5c1.195 0 2.31-.488 3.29-1.191L9.063 9.695A2 2 0 0 1 6.058 7.52L3.529 5.688a14.207 14.207 0 0 0-1.85 2.244ZM8 3.5c-.516 0-1.017.09-1.499.251a.75.75 0 1 1-.473-1.423A6.207 6.207 0 0 1 8 2c1.981 0 3.67.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.11.166-.248.365-.41.587a.75.75 0 1 1-1.21-.887c.148-.201.272-.382.371-.53a.119.119 0 0 0 0-.137c-.412-.621-1.242-1.75-2.366-2.717C10.825 4.242 9.473 3.5 8 3.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M8.052 5.837A9.715 9.715 0 0 1 12 5c2.955 0 5.309 1.315 7.06 2.864 1.756 1.553 2.866 3.307 3.307 4.08a.11.11 0 0 1 .016.055.122.122 0 0 1-.017.06 16.766 16.766 0 0 1-1.53 2.218.75.75 0 1 0 1.163.946 18.253 18.253 0 0 0 1.67-2.42 1.607 1.607 0 0 0 .001-1.602c-.485-.85-1.69-2.757-3.616-4.46C18.124 5.034 15.432 3.5 12 3.5c-1.695 0-3.215.374-4.552.963a.75.75 0 0 0 .604 1.373Zm11.114 12.15C17.328 19.38 14.933 20.5 12 20.5c-3.432 0-6.125-1.534-8.054-3.24C2.02 15.556.814 13.648.33 12.798a1.606 1.606 0 0 1 .001-1.6A18.283 18.283 0 0 1 3.648 7.01L1.317 5.362a.75.75 0 1 1 .866-1.224l20.5 14.5a.75.75 0 1 1-.866 1.224ZM4.902 7.898c-1.73 1.541-2.828 3.273-3.268 4.044a.112.112 0 0 0-.017.059c0 .015.003.034.016.055.441.774 1.551 2.527 3.307 4.08C6.69 17.685 9.045 19 12 19c2.334 0 4.29-.82 5.874-1.927l-3.516-2.487a3.5 3.5 0 0 1-5.583-3.949L4.902 7.899Z",
        }),
      },
    };
  }),
  F7 = c("FeedDiscussionIcon", "octicon octicon-feed-discussion", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM4 5v5a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 .854.354L8.707 11H11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z",
        }),
      },
    };
  }),
  T7 = c("FeedForkedIcon", "octicon octicon-feed-forked", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM6 6.928a1.75 1.75 0 1 0-1 0V7.5A1.5 1.5 0 0 0 6.5 9h1v1.072a1.75 1.75 0 1 0 1 0V9h1A1.5 1.5 0 0 0 11 7.5v-.572a1.75 1.75 0 1 0-1 0V7.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z",
        }),
      },
    };
  }),
  P7 = c("FeedHeartIcon", "octicon octicon-feed-heart", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm2.33-11.5c-1.22 0-1.83.5-2.323 1.136C7.513 5 6.903 4.5 5.682 4.5c-1.028 0-2.169.784-2.169 2.5 0 1.499 1.493 3.433 3.246 4.517.52.321.89.479 1.248.484.357-.005.728-.163 1.247-.484C11.007 10.433 12.5 8.5 12.5 7c0-1.716-1.14-2.5-2.17-2.5Z",
        }),
      },
    };
  }),
  D7 = c("FeedMergedIcon", "octicon octicon-feed-merged", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm.25-11.25A1.75 1.75 0 1 0 6 6.428v3.144a1.75 1.75 0 1 0 1 0V8.236A2.99 2.99 0 0 0 9 9h.571a1.75 1.75 0 1 0 0-1H9a2 2 0 0 1-1.957-1.586A1.75 1.75 0 0 0 8.25 4.75Z",
        }),
      },
    };
  }),
  x7 = c("FeedPersonIcon", "octicon octicon-feed-person", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm.847-8.145a2.502 2.502 0 1 0-1.694 0C5.471 8.261 4 9.775 4 11c0 .395.145.995 1 .995h6c.855 0 1-.6 1-.995 0-1.224-1.47-2.74-3.153-3.145Z",
        }),
      },
    };
  }),
  R7 = c("FeedRepoIcon", "octicon octicon-feed-repo", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM5.5 4A1.5 1.5 0 0 0 4 5.5v5c0 .828.5 1.5 1 1.5v-1a1 1 0 0 1 1-1h5v1h-1v1h1.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm.5 7.25v2.514a.25.25 0 0 0 .426.178l.898-.888a.25.25 0 0 1 .352 0l.898.888A.25.25 0 0 0 9 13.764V11H6.25a.25.25 0 0 0-.25.25Z",
        }),
      },
    };
  }),
  O7 = c("FeedRocketIcon", "octicon octicon-feed-rocket", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.031-12a4.38 4.38 0 0 0-3.097 1.283l-.23.229c-.156.157-.308.32-.452.49H5.65a.876.876 0 0 0-.746.417l-.856 1.388a.377.377 0 0 0 .21.556l1.552.477 1.35 1.35.478 1.553a.374.374 0 0 0 .555.21l1.389-.855a.876.876 0 0 0 .416-.746V8.747c.17-.144.333-.295.49-.452l.23-.23A4.379 4.379 0 0 0 12 4.969v-.093A.876.876 0 0 0 11.124 4Zm-5.107 7.144h-.001a.809.809 0 0 0-1.33-.881c-.395.394-.564 1.258-.62 1.62a.12.12 0 0 0 .035.108.12.12 0 0 0 .108.035c.362-.056 1.226-.225 1.62-.619a.803.803 0 0 0 .188-.263Z",
        }),
      },
    };
  }),
  N7 = c("FeedStarIcon", "octicon octicon-feed-star", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm.252-12.932a.476.476 0 0 0-.682.195l-1.2 2.432-2.684.39a.477.477 0 0 0-.266.816l1.944 1.892-.46 2.674a.479.479 0 0 0 .694.504L8 10.709l2.4 1.261a.478.478 0 0 0 .694-.504l-.458-2.673L12.578 6.9a.479.479 0 0 0-.265-.815l-2.685-.39-1.2-2.432a.473.473 0 0 0-.176-.195Z",
        }),
      },
    };
  }),
  B7 = c("FeedTagIcon", "octicon octicon-feed-tag", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.22 6.5a.72.72 0 1 1-1.44 0 .72.72 0 0 1 1.44 0Z",
          }),
          a.createElement("path", {
            d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM4 5v3.38c.001.397.159.778.44 1.059l3.211 3.213a1.202 1.202 0 0 0 1.698 0l3.303-3.303a1.202 1.202 0 0 0 0-1.698L9.439 4.44A1.5 1.5 0 0 0 8.379 4H5a1 1 0 0 0-1 1Z",
          })
        ),
      },
    };
  }),
  W7 = c("FeedTrophyIcon", "octicon octicon-feed-trophy", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11 5h1v1.146a1 1 0 0 1-.629.928L11 7.223V5ZM5 7.223l-.371-.149A1 1 0 0 1 4 6.146V5h1v2.223Z",
          }),
          a.createElement("path", {
            d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM3 5v1.146a2 2 0 0 0 1.257 1.858l.865.346a3.005 3.005 0 0 0 2.294 2.093C7.22 11.404 6.658 12 5.502 12H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1c-1.158 0-1.72-.595-1.916-1.557a3.005 3.005 0 0 0 2.294-2.094l.865-.346A2 2 0 0 0 13 6.146V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z",
          })
        ),
      },
    };
  }),
  z7 = c("FileIcon", "octicon octicon-file", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4Zm10 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z",
        }),
      },
    };
  }),
  $7 = c("FileAddedIcon", "octicon octicon-file-added", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073Zm4.48 3.758a.75.75 0 0 1 .755.745l.01 1.497h1.497a.75.75 0 0 1 0 1.5H9v1.507a.75.75 0 0 1-1.5 0V9.005l-1.502.01a.75.75 0 0 1-.01-1.5l1.507-.01-.01-1.492a.75.75 0 0 1 .745-.755Z",
        }),
      },
    };
  }),
  _7 = c("FileBadgeIcon", "octicon octicon-file-badge", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.75 1.5a.25.25 0 0 0-.25.25v11.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 1 13.25V1.75C1 .784 1.784 0 2.75 0h8a1.75 1.75 0 0 1 1.508.862.75.75 0 1 1-1.289.768.25.25 0 0 0-.219-.13h-8Z",
          }),
          a.createElement("path", {
            d: "M8 7a3.999 3.999 0 0 1 7.605-1.733 4 4 0 0 1-1.115 4.863l.995 4.973a.75.75 0 0 1-.991.852l-2.409-.876a.248.248 0 0 0-.17 0l-2.409.876a.75.75 0 0 1-.991-.852l.994-4.973A3.994 3.994 0 0 1 8 7Zm4-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 6.5c-.373 0-.745-.051-1.104-.154l-.649 3.243 1.155-.42c.386-.14.81-.14 1.196 0l1.155.42-.649-3.243A4.004 4.004 0 0 1 12 11Z",
          })
        ),
      },
    };
  }),
  U7 = c("FileBinaryIcon", "octicon octicon-file-binary", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0Zm-4 6C0 6.784.784 6 1.75 6h1.5C4.216 6 5 6.784 5 7.75v2.5A1.75 1.75 0 0 1 3.25 12h-1.5A1.75 1.75 0 0 1 0 10.25ZM6.75 6h1.5a.75.75 0 0 1 .75.75v3.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-3h-.75a.75.75 0 0 1 0-1.5Zm-5 1.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm9.75-5.938V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm12-.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z",
          }),
          a.createElement("path", {
            d: "M0 13.75C0 12.784.784 12 1.75 12h3c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 0 17.75Zm1.75-.25a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h3a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25ZM9 12a.75.75 0 0 0 0 1.5h1.5V18H9a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H12v-5.25a.75.75 0 0 0-.75-.75H9Z",
          })
        ),
      },
    };
  }),
  j7 = c("FileCodeIcon", "octicon octicon-file-code", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm12-.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z",
          }),
          a.createElement("path", {
            d: "M4.53 12.24a.75.75 0 0 1-.039 1.06l-2.639 2.45 2.64 2.45a.75.75 0 1 1-1.022 1.1l-3.23-3a.75.75 0 0 1 0-1.1l3.23-3a.75.75 0 0 1 1.06.04Zm3.979 1.06a.75.75 0 1 1 1.02-1.1l3.231 3a.75.75 0 0 1 0 1.1l-3.23 3a.75.75 0 1 1-1.021-1.1l2.639-2.45-2.64-2.45Z",
          })
        ),
      },
    };
  }),
  X7 = c("FileDiffIcon", "octicon octicon-file-diff", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1 1.75C1 .784 1.784 0 2.75 0h7.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073ZM8 3.25a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0V7h-1.5a.75.75 0 0 1 0-1.5h1.5V4A.75.75 0 0 1 8 3.25Zm-3 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12.5 6.75a.75.75 0 0 0-1.5 0V9H8.75a.75.75 0 0 0 0 1.5H11v2.25a.75.75 0 0 0 1.5 0V10.5h2.25a.75.75 0 0 0 0-1.5H12.5V6.75ZM8.75 16a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z",
          }),
          a.createElement("path", {
            d: "M5 1h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2Zm-.5 2v18a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V7.018a.5.5 0 0 0-.146-.354l-4.018-4.018a.5.5 0 0 0-.354-.146H5a.5.5 0 0 0-.5.5Z",
          })
        ),
      },
    };
  }),
  G7 = c("FileDirectoryIcon", "octicon octicon-file-directory", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H7.5c-.55 0-1.07-.26-1.4-.7l-.9-1.2a.25.25 0 0 0-.2-.1Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063c.046.069.124.11.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V7.687a.25.25 0 0 0-.25-.25h-8.471a1.75 1.75 0 0 1-1.447-.765L8.928 4.61a.252.252 0 0 0-.208-.11Z",
        }),
      },
    };
  }),
  q7 = c(
    "FileDirectoryFillIcon",
    "octicon octicon-file-directory-fill",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "M2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063c.046.069.124.11.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25Z",
          }),
        },
      };
    }
  ),
  Y7 = c(
    "FileDirectoryOpenFillIcon",
    "octicon octicon-file-directory-open-fill",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z",
          }),
        },
      };
    }
  ),
  K7 = c("FileMediaIcon", "octicon octicon-file-media", function () {
    return {
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M21.75 21.5H2.25A1.75 1.75 0 0 1 .5 19.75V4.25c0-.966.784-1.75 1.75-1.75h19.5c.966 0 1.75.784 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75ZM2.25 4a.25.25 0 0 0-.25.25v15.5c0 .138.112.25.25.25h3.178L14 10.977a1.749 1.749 0 0 1 2.506-.032L22 16.44V4.25a.25.25 0 0 0-.25-.25ZM22 19.75v-1.19l-6.555-6.554a.248.248 0 0 0-.18-.073.247.247 0 0 0-.178.077L7.497 20H21.75a.25.25 0 0 0 .25-.25ZM10.5 9.25a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Zm-1.5 0a1.75 1.75 0 1 0-3.501.001A1.75 1.75 0 0 0 9 9.25Z",
        }),
      },
    };
  }),
  Q7 = c("FileMovedIcon", "octicon octicon-file-moved", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073H3.75a.25.25 0 0 0-.25.25v6.5a.75.75 0 0 1-1.5 0v-6.5Z",
          }),
          a.createElement("path", {
            d: "m5.427 15.573 3.146-3.146a.25.25 0 0 0 0-.354L5.427 8.927A.25.25 0 0 0 5 9.104V11.5H.75a.75.75 0 0 0 0 1.5H5v2.396c0 .223.27.335.427.177Z",
          })
        ),
      },
    };
  }),
  J7 = c("FileRemovedIcon", "octicon octicon-file-removed", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073Zm4.5 6h2.242a.75.75 0 0 1 0 1.5h-2.24l-2.254.015a.75.75 0 0 1-.01-1.5Z",
        }),
      },
    };
  }),
  a4 = c("FileSubmoduleIcon", "octicon octicon-file-submodule", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm9.42 9.36 2.883-2.677a.25.25 0 0 0 0-.366L9.42 6.39a.249.249 0 0 0-.42.183V8.5H4.75a.75.75 0 0 0 0 1.5H9v1.927c0 .218.26.331.42.183Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M2 4.75C2 3.784 2.784 3 3.75 3h4.965a1.75 1.75 0 0 1 1.456.78l1.406 2.109a.25.25 0 0 0 .208.111h8.465c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25Zm12.78 4.97a.749.749 0 0 0-1.275.326.749.749 0 0 0 .215.734l1.72 1.72H6.75a.75.75 0 0 0 0 1.5h8.69l-1.72 1.72a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215l3-3a.75.75 0 0 0 0-1.06Z",
        }),
      },
    };
  }),
  t4 = c(
    "FileSymlinkFileIcon",
    "octicon octicon-file-symlink-file",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M2 1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-7a.75.75 0 0 1 0-1.5h7a.25.25 0 0 0 .25-.25V6H9.75A1.75 1.75 0 0 1 8 4.25V1.5H3.75a.25.25 0 0 0-.25.25V4.5a.75.75 0 0 1-1.5 0Zm-.5 10.487v1.013a.75.75 0 0 1-1.5 0v-1.012a3.748 3.748 0 0 1 3.77-3.749L4 8.49V6.573a.25.25 0 0 1 .42-.183l2.883 2.678a.25.25 0 0 1 0 .366L4.42 12.111a.25.25 0 0 1-.42-.183V9.99l-.238-.003a2.25 2.25 0 0 0-2.262 2.25Zm8-10.675V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm6.308 11.5-2.104-2.236a.751.751 0 0 1 .369-1.255.749.749 0 0 1 .723.227l3.294 3.5a.75.75 0 0 1 0 1.028l-3.294 3.5a.749.749 0 0 1-1.275-.293.751.751 0 0 1 .183-.735L9.308 16H4.09a2.59 2.59 0 0 0-2.59 2.59v3.16a.75.75 0 0 1-1.5 0v-3.16a4.09 4.09 0 0 1 4.09-4.09ZM15 2.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z",
          }),
        },
      };
    }
  ),
  e4 = c("FileZipIcon", "octicon octicon-file-zip", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.5 1.75v11.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 2 13.25V1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.185 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177L9.513 1.573a.25.25 0 0 0-.177-.073H7.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5h-3a.25.25 0 0 0-.25.25Zm3.75 8.75h.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3c0-.966.784-1.75 1.75-1.75ZM6 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 5.25Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 6.75A.75.75 0 0 1 8.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 6.75ZM8.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 9.75A.75.75 0 0 1 8.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 9.75Zm-1 2.5v2.25h1v-2.25a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 2.5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h1.75a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2h-2.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V7.018a.5.5 0 0 0-.146-.354l-4.018-4.018a.5.5 0 0 0-.354-.146H5Z",
          }),
          a.createElement("path", {
            d: "M11.5 15.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm.75-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm-.75-2.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM12.25 6a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm-.75-2.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM9.75 13.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1ZM9 11.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm.75-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1ZM9 5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 9 5.25ZM11 17h1a2 2 0 0 1 2 2v4.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V19a2 2 0 0 1 2-2Zm-.5 2v3.5h2V19a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Z",
          })
        ),
      },
    };
  }),
  n4 = c("FilterIcon", "octicon octicon-filter", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M2.75 6a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75ZM6 11.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Zm4 4.938a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  c4 = c("FiscalHostIcon", "octicon octicon-fiscal-host", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }),
          a.createElement("path", {
            d: "M4 9.25h-.75a.75.75 0 0 1 0-1.5H4v-1.5h-.75a.75.75 0 0 1 0-1.5H4V3.5a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1ZM5.5 4v.793a.75.75 0 0 1 0 1.414v1.586a.75.75 0 0 1 0 1.414V10H12V4Z",
          }),
          a.createElement("path", {
            d: "M12.75 14.25V14h-9.5v.25a.75.75 0 0 1-1.5 0V14A1.75 1.75 0 0 1 0 12.25V1.75C0 .784.784 0 1.75 0h12.5C15.217 0 16 .784 16 1.75v10.5A1.75 1.75 0 0 1 14.25 14v.25a.75.75 0 0 1-1.5 0ZM1.75 1.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  o4 = c("FlameIcon", "octicon octicon-flame", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.533.753V.752c.217 2.385 1.463 3.626 2.653 4.81C13.37 6.74 14.498 7.863 14.498 10c0 3.5-3 6-6.5 6S1.5 13.512 1.5 10c0-1.298.536-2.56 1.425-3.286.376-.308.862 0 1.035.454C4.46 8.487 5.581 8.419 6 8c.282-.282.341-.811-.003-1.5C4.34 3.187 7.035.75 8.77.146c.39-.137.726.194.763.607ZM7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.79 2.79 0 0 1-1.436-.874A3.198 3.198 0 0 0 3 10c0 2.53 2.164 4.5 4.998 4.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M14.265 1.627c0 3.545 1.869 5.327 3.479 7.021 1.54 1.62 3.006 3.163 3.006 6.102 0 4.812-3.753 8.25-8.565 8.25-4.813 0-8.935-3.421-8.935-8.25 0-2.039.962-4.011 2.509-4.899.305-.175.672.007.803.334C7.563 12.684 8.797 12.64 9.437 12c.388-.387.47-1.116-.004-2.062-2.405-4.812 1.863-8.279 4.2-8.854.336-.082.615.198.632.543ZM12.185 21.5c4.059 0 7.065-2.84 7.065-6.75 0-2.337-1.093-3.489-2.678-5.158l-.021-.023c-1.44-1.517-3.139-3.351-3.649-6.557a6.148 6.148 0 0 0-1.911 1.76c-.787 1.144-1.147 2.633-.216 4.495.603 1.205.777 2.74-.277 3.794-.657.657-1.762 1.1-2.956.586-.752-.324-1.353-.955-1.838-1.79-.567.706-.954 1.74-.954 2.893 0 3.847 3.288 6.75 7.435 6.75Z",
        }),
      },
    };
  }),
  l4 = c("FoldIcon", "octicon octicon-fold", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M10.896 2H8.75V.75a.75.75 0 0 0-1.5 0V2H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 2ZM8.75 15.25a.75.75 0 0 1-1.5 0V14H5.104a.25.25 0 0 1-.177-.427l2.896-2.896a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25Zm-6.5-6.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 15c.199 0 .389.079.53.22l3.25 3.25a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 16.81l-2.72 2.72a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25A.749.749 0 0 1 12 15Z",
          }),
          a.createElement("path", {
            d: "M12.53 8.78a.75.75 0 0 1-1.06 0L8.22 5.53a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L12 7.19l2.72-2.72a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734ZM12 15.75a.75.75 0 0 1 .75.75v5.75a.75.75 0 0 1-1.5 0V16.5a.75.75 0 0 1 .75-.75Z",
          }),
          a.createElement("path", {
            d: "M12 8.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75ZM2.75 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z",
          })
        ),
      },
    };
  }),
  r4 = c("FoldDownIcon", "octicon octicon-fold-down", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m8.177 14.323 2.896-2.896a.25.25 0 0 0-.177-.427H8.75V7.764a.75.75 0 1 0-1.5 0V11H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0ZM2.25 5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 4.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 .75.75ZM8.25 5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 4.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 .75.75Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 19a.749.749 0 0 1-.53-.22l-3.25-3.25a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215L12 17.19l2.72-2.72a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-3.25 3.25A.749.749 0 0 1 12 19Z",
          }),
          a.createElement("path", {
            d: "M12 18a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 18ZM2.75 6a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 2.75 6Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 6.75 6Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z",
          })
        ),
      },
    };
  }),
  h4 = c("FoldUpIcon", "octicon octicon-fold-up", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.823 1.677 4.927 4.573A.25.25 0 0 0 5.104 5H7.25v3.236a.75.75 0 1 0 1.5 0V5h2.146a.25.25 0 0 0 .177-.427L8.177 1.677a.25.25 0 0 0-.354 0ZM13.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Zm-3.75.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM7.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM4 11.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM1.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.47 5.22a.75.75 0 0 1 1.06 0l3.25 3.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L12 6.81 9.28 9.53a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Z",
          }),
          a.createElement("path", {
            d: "M12 5.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8A.75.75 0 0 1 12 5.5ZM2.75 18a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z",
          })
        ),
      },
    };
  }),
  i4 = c("GearIcon", "octicon octicon-gear", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1.5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
          }),
          a.createElement("path", {
            d: "M12 1c.266 0 .532.009.797.028.763.055 1.345.617 1.512 1.304l.352 1.45c.019.078.09.171.225.221.247.089.49.19.728.302.13.061.246.044.315.002l1.275-.776c.603-.368 1.411-.353 1.99.147.402.349.78.726 1.128 1.129.501.578.515 1.386.147 1.99l-.776 1.274c-.042.069-.058.185.002.315.112.238.213.481.303.728.048.135.142.205.22.225l1.45.352c.687.167 1.249.749 1.303 1.512.038.531.038 1.063 0 1.594-.054.763-.616 1.345-1.303 1.512l-1.45.352c-.078.019-.171.09-.221.225-.089.248-.19.491-.302.728-.061.13-.044.246-.002.315l.776 1.275c.368.603.353 1.411-.147 1.99-.349.402-.726.78-1.129 1.128-.578.501-1.386.515-1.99.147l-1.274-.776c-.069-.042-.185-.058-.314.002a8.606 8.606 0 0 1-.729.303c-.135.048-.205.142-.225.22l-.352 1.45c-.167.687-.749 1.249-1.512 1.303-.531.038-1.063.038-1.594 0-.763-.054-1.345-.616-1.512-1.303l-.352-1.45c-.019-.078-.09-.171-.225-.221a8.138 8.138 0 0 1-.728-.302c-.13-.061-.246-.044-.315-.002l-1.275.776c-.603.368-1.411.353-1.99-.147-.402-.349-.78-.726-1.128-1.129-.501-.578-.515-1.386-.147-1.99l.776-1.274c.042-.069.058-.185-.002-.314a8.606 8.606 0 0 1-.303-.729c-.048-.135-.142-.205-.22-.225l-1.45-.352c-.687-.167-1.249-.749-1.304-1.512a11.158 11.158 0 0 1 0-1.594c.055-.763.617-1.345 1.304-1.512l1.45-.352c.078-.019.171-.09.221-.225.089-.248.19-.491.302-.728.061-.13.044-.246.002-.315l-.776-1.275c-.368-.603-.353-1.411.147-1.99.349-.402.726-.78 1.129-1.128.578-.501 1.386-.515 1.99-.147l1.274.776c.069.042.185.058.315-.002.238-.112.481-.213.728-.303.135-.048.205-.142.225-.22l.352-1.45c.167-.687.749-1.249 1.512-1.304C11.466 1.01 11.732 1 12 1Zm-.69 1.525c-.055.004-.135.05-.161.161l-.353 1.45a1.832 1.832 0 0 1-1.172 1.277 7.147 7.147 0 0 0-.6.249 1.833 1.833 0 0 1-1.734-.074l-1.274-.776c-.098-.06-.186-.036-.228 0a9.774 9.774 0 0 0-.976.976c-.036.042-.06.131 0 .228l.776 1.274c.314.529.342 1.18.074 1.734a7.147 7.147 0 0 0-.249.6 1.831 1.831 0 0 1-1.278 1.173l-1.45.351c-.11.027-.156.107-.16.162a9.63 9.63 0 0 0 0 1.38c.004.055.05.135.161.161l1.45.353a1.832 1.832 0 0 1 1.277 1.172c.074.204.157.404.249.6.268.553.24 1.204-.074 1.733l-.776 1.275c-.06.098-.036.186 0 .228.301.348.628.675.976.976.042.036.131.06.228 0l1.274-.776a1.83 1.83 0 0 1 1.734-.075c.196.093.396.176.6.25a1.831 1.831 0 0 1 1.173 1.278l.351 1.45c.027.11.107.156.162.16a9.63 9.63 0 0 0 1.38 0c.055-.004.135-.05.161-.161l.353-1.45a1.834 1.834 0 0 1 1.172-1.278 6.82 6.82 0 0 0 .6-.248 1.831 1.831 0 0 1 1.733.074l1.275.776c.098.06.186.036.228 0 .348-.301.675-.628.976-.976.036-.042.06-.131 0-.228l-.776-1.275a1.834 1.834 0 0 1-.075-1.733c.093-.196.176-.396.25-.6a1.831 1.831 0 0 1 1.278-1.173l1.45-.351c.11-.027.156-.107.16-.162a9.63 9.63 0 0 0 0-1.38c-.004-.055-.05-.135-.161-.161l-1.45-.353c-.626-.152-1.08-.625-1.278-1.172a6.576 6.576 0 0 0-.248-.6 1.833 1.833 0 0 1 .074-1.734l.776-1.274c.06-.098.036-.186 0-.228a9.774 9.774 0 0 0-.976-.976c-.042-.036-.131-.06-.228 0l-1.275.776a1.831 1.831 0 0 1-1.733.074 6.88 6.88 0 0 0-.6-.249 1.835 1.835 0 0 1-1.173-1.278l-.351-1.45c-.027-.11-.107-.156-.162-.16a9.63 9.63 0 0 0-1.38 0Z",
          })
        ),
      },
    };
  }),
  d4 = c("GiftIcon", "octicon octicon-gift", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.455 0 3.436.901 4.5 3.11C13.064.901 15.044 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c.966 0 1.75.784 1.75 1.75v2.5c0 .698-.409 1.301-1 1.582v8.418A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.418c-.591-.282-1-.884-1-1.582v-2.5C1 6.784 1.784 6 2.75 6H4.5a3.733 3.733 0 0 1-.75-2.25ZM20.5 12h-7.75v8.5h7.5a.25.25 0 0 0 .25-.25Zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25Zm10-10a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.433 1.007-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z",
        }),
      },
    };
  }),
  p4 = c("GitBranchIcon", "octicon octicon-git-branch", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M15 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM2.5 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5Zm0 14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 21Zm12.5-14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 6.5Z",
          }),
          a.createElement("path", {
            d: "M5.75 16.75A.75.75 0 0 1 5 16V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75Z",
          }),
          a.createElement("path", {
            d: "M17.5 8.75v-1H19v1a3.75 3.75 0 0 1-3.75 3.75h-7a1.75 1.75 0 0 0-1.75 1.75H5A3.25 3.25 0 0 1 8.25 11h7a2.25 2.25 0 0 0 2.25-2.25Z",
          })
        ),
      },
    };
  }),
  m4 = c("GitCommitIcon", "octicon octicon-git-commit", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M16.944 11h4.306a.75.75 0 0 1 0 1.5h-4.306a5.001 5.001 0 0 1-9.888 0H2.75a.75.75 0 0 1 0-1.5h4.306a5.001 5.001 0 0 1 9.888 0Zm-1.444.75a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z",
        }),
      },
    };
  }),
  v4 = c("GitCompareIcon", "octicon octicon-git-compare", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM6 12v-1.646a.25.25 0 0 1 .427-.177l2.396 2.396a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 6 15.146V13.5H5A2.5 2.5 0 0 1 2.5 11V5.372a2.25 2.25 0 1 1 1.5 0V11a1 1 0 0 0 1 1ZM4 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM12.75 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M16.5 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25-1.75a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z",
          }),
          a.createElement("path", {
            d: "M13.905 1.72a.75.75 0 0 1 0 1.06L12.685 4h4.065a3.75 3.75 0 0 1 3.75 3.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM7.5 4.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM4.25 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 4.25 6.5Z",
          }),
          a.createElement("path", {
            d: "M10.095 22.28a.75.75 0 0 1 0-1.06l1.22-1.22H7.25a3.75 3.75 0 0 1-3.75-3.75V7.5a.75.75 0 0 1 1.5 0v8.75a2.25 2.25 0 0 0 2.25 2.25h4.064l-1.22-1.22a.748.748 0 0 1 .332-1.265.75.75 0 0 1 .729.205l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0Z",
          })
        ),
      },
    };
  }),
  u4 = c("GitMergeIcon", "octicon octicon-git-merge", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M15 13.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-12.5 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5Zm0 14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 21Zm12.5-6a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 15Z",
          }),
          a.createElement("path", {
            d: "M6.5 7.25c0 2.9 2.35 5.25 5.25 5.25h4.5V14h-4.5A6.75 6.75 0 0 1 5 7.25Z",
          }),
          a.createElement("path", {
            d: "M5.75 16.75A.75.75 0 0 1 5 16V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75Z",
          })
        ),
      },
    };
  }),
  Z4 = c("GitMergeQueueIcon", "octicon octicon-git-merge-queue", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.75 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3 7.75a.75.75 0 0 1 1.5 0v2.878a2.251 2.251 0 1 1-1.5 0Zm.75 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm5-7.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm5.75 2.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-1.5 0a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.75 6.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 5.75 6.5ZM9.5 8.75a1.75 1.75 0 1 1 3.501.001A1.75 1.75 0 0 1 9.5 8.75ZM5.75 22.5a3.25 3.25 0 0 1-.745-6.414A.81.81 0 0 1 5 16v-5a.75.75 0 0 1 1.5 0v5a.81.81 0 0 1-.005.086A3.252 3.252 0 0 1 5.75 22.5ZM4 19.25a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 4 19.25Zm11-6.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25 1.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z",
        }),
      },
    };
  }),
  s4 = c("GitPullRequestIcon", "octicon octicon-git-pull-request", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M16 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-14.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM4.75 3a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 3Zm0 14.5a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 17.5Zm14.5 0a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z",
          }),
          a.createElement("path", {
            d: "M13.405 1.72a.75.75 0 0 1 0 1.06L12.185 4h4.065A3.75 3.75 0 0 1 20 7.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM4.75 7.25A.75.75 0 0 1 5.5 8v8A.75.75 0 0 1 4 16V8a.75.75 0 0 1 .75-.75Z",
          })
        ),
      },
    };
  }),
  M4 = c(
    "GitPullRequestClosedIcon",
    "octicon octicon-git-pull-request-closed",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 5.5a.75.75 0 0 1 .75.75v3.378a2.251 2.251 0 1 1-1.5 0V7.25a.75.75 0 0 1 .75-.75Zm-2.03-5.273a.75.75 0 0 1 1.06 0l.97.97.97-.97a.748.748 0 0 1 1.265.332.75.75 0 0 1-.205.729l-.97.97.97.97a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-.97-.97-.97.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l.97-.97-.97-.97a.75.75 0 0 1 0-1.06ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "M22.266 2.711a.75.75 0 1 0-1.061-1.06l-1.983 1.983-1.984-1.983a.75.75 0 1 0-1.06 1.06l1.983 1.983-1.983 1.984a.75.75 0 0 0 1.06 1.06l1.984-1.983 1.983 1.983a.75.75 0 0 0 1.06-1.06l-1.983-1.984 1.984-1.983ZM4.75 1.5a3.25 3.25 0 0 1 .745 6.414A.827.827 0 0 1 5.5 8v8a.827.827 0 0 1-.005.086A3.25 3.25 0 0 1 4.75 22.5a3.25 3.25 0 0 1-.745-6.414A.827.827 0 0 1 4 16V8c0-.029.002-.057.005-.086A3.25 3.25 0 0 1 4.75 1.5ZM16 19.25a3.252 3.252 0 0 1 2.5-3.163V9.625a.75.75 0 0 1 1.5 0v6.462a3.252 3.252 0 0 1-.75 6.413A3.25 3.25 0 0 1 16 19.25ZM3 4.75a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 4.75Zm0 14.5a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 19.25Zm16.25-1.75a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z",
          }),
        },
      };
    }
  ),
  f4 = c(
    "GitPullRequestDraftIcon",
    "octicon octicon-git-pull-request-draft",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "M4.75 1.5a3.25 3.25 0 0 1 .745 6.414A.827.827 0 0 1 5.5 8v8a.827.827 0 0 1-.005.086A3.25 3.25 0 0 1 4.75 22.5a3.25 3.25 0 0 1-.745-6.414A.827.827 0 0 1 4 16V8c0-.029.002-.057.005-.086A3.25 3.25 0 0 1 4.75 1.5ZM16 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM3 4.75a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 4.75Zm0 14.5a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 19.25Zm16.25-1.75a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Zm0-11.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM21 11.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z",
          }),
        },
      };
    }
  ),
  A4 = c("GlobeIcon", "octicon octicon-globe", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm3.241 10.5v-.001c-.1-2.708-.992-4.904-1.89-6.452a13.919 13.919 0 0 0-1.304-1.88L12 3.11l-.047.059c-.354.425-.828 1.06-1.304 1.88-.898 1.547-1.79 3.743-1.89 6.451Zm-12.728 0h4.745c.1-3.037 1.1-5.49 2.093-7.204.39-.672.78-1.233 1.119-1.673C6.11 3.329 2.746 7 2.513 11.5Zm18.974 0C21.254 7 17.89 3.329 13.53 2.623c.339.44.729 1.001 1.119 1.673.993 1.714 1.993 4.167 2.093 7.204ZM8.787 13c.182 2.478 1.02 4.5 1.862 5.953.382.661.818 1.29 1.304 1.88l.047.057.047-.059c.354-.425.828-1.06 1.304-1.88.842-1.451 1.679-3.471 1.862-5.951Zm-1.504 0H2.552a9.505 9.505 0 0 0 7.918 8.377 15.773 15.773 0 0 1-1.119-1.673C8.413 18.085 7.47 15.807 7.283 13Zm9.434 0c-.186 2.807-1.13 5.085-2.068 6.704-.39.672-.78 1.233-1.118 1.673A9.506 9.506 0 0 0 21.447 13Z",
        }),
      },
    };
  }),
  E4 = c("GoalIcon", "octicon octicon-goal", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z",
          }),
          a.createElement("path", {
            d: "M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z",
          }),
          a.createElement("path", {
            d: "M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M20.172 6.75h-1.861l-4.566 4.564a1.874 1.874 0 1 1-1.06-1.06l4.565-4.565V3.828a.94.94 0 0 1 .275-.664l1.73-1.73a.249.249 0 0 1 .25-.063c.089.026.155.1.173.191l.46 2.301 2.3.46c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.731 1.73a.937.937 0 0 1-.663.275Z",
          }),
          a.createElement("path", {
            d: "M2.625 12A9.375 9.375 0 0 0 12 21.375 9.375 9.375 0 0 0 21.375 12c0-.898-.126-1.766-.361-2.587A.75.75 0 0 1 22.455 9c.274.954.42 1.96.42 3 0 6.006-4.869 10.875-10.875 10.875S1.125 18.006 1.125 12 5.994 1.125 12 1.125c1.015-.001 2.024.14 3 .419a.75.75 0 1 1-.413 1.442A9.39 9.39 0 0 0 12 2.625 9.375 9.375 0 0 0 2.625 12Z",
          }),
          a.createElement("path", {
            d: "M7.125 12a4.874 4.874 0 1 0 9.717-.569.748.748 0 0 1 1.047-.798c.251.112.42.351.442.625a6.373 6.373 0 0 1-10.836 5.253 6.376 6.376 0 0 1 5.236-10.844.75.75 0 1 1-.17 1.49A4.876 4.876 0 0 0 7.125 12Z",
          })
        ),
      },
    };
  }),
  w4 = c("GrabberIcon", "octicon octicon-grabber", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M9 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
    };
  }),
  g4 = c("GraphIcon", "octicon octicon-graph", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.5 2.75a.75.75 0 0 0-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 0 0 0-1.5H2.5V2.75Z",
          }),
          a.createElement("path", {
            d: "M22.28 7.78a.75.75 0 0 0-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 1 0 1.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 0 0 1.06 0l6.25-6.25Z",
          })
        ),
      },
    };
  }),
  V4 = c("HashIcon", "octicon octicon-hash", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.368 1.01a.75.75 0 0 1 .623.859L6.57 4.5h3.98l.46-2.868a.75.75 0 0 1 1.48.237L12.07 4.5h2.18a.75.75 0 0 1 0 1.5h-2.42l-.64 4h2.56a.75.75 0 0 1 0 1.5h-2.8l-.46 2.869a.75.75 0 0 1-1.48-.237l.42-2.632H5.45l-.46 2.869a.75.75 0 0 1-1.48-.237l.42-2.632H1.75a.75.75 0 0 1 0-1.5h2.42l.64-4H2.25a.75.75 0 0 1 0-1.5h2.8l.46-2.868a.75.75 0 0 1 .858-.622ZM9.67 10l.64-4H6.33l-.64 4Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M9.618 1.76a.75.75 0 0 1 .623.859L9.46 7.5h6.48l.82-5.118a.75.75 0 0 1 1.48.237L17.46 7.5h3.79a.75.75 0 0 1 0 1.5h-4.03l-.96 6h3.99a.75.75 0 0 1 0 1.5h-4.23l-.78 4.869a.75.75 0 0 1-1.48-.237l.74-4.632H8.02l-.78 4.869a.75.75 0 0 1-1.48-.237L6.5 16.5H2.745a.75.75 0 0 1 0-1.5H6.74l.96-6H3.75a.75.75 0 0 1 0-1.5h4.19l.82-5.118a.75.75 0 0 1 .858-.622ZM14.741 15l.96-6H9.22l-.96 6Z",
        }),
      },
    };
  }),
  H4 = c("HeadingIcon", "octicon octicon-heading", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.75 2a.75.75 0 0 1 .75.75V7h7V2.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 0 1-1.5 0V8.5h-7v4.75a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 3.75 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M6.25 4a.75.75 0 0 1 .75.75V11h10V4.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-1.5 0V12.5H7v6.75a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 6.25 4Z",
        }),
      },
    };
  }),
  I4 = c("HeartIcon", "octicon octicon-heart", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z",
        }),
      },
    };
  }),
  C4 = c("HeartFillIcon", "octicon octicon-heart-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 0 1-.686 0 16.709 16.709 0 0 1-.465-.252 31.147 31.147 0 0 1-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0 1 14 20.408Z",
        }),
      },
    };
  }),
  L4 = c("HistoryIcon", "octicon octicon-history", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.998 2.5A9.503 9.503 0 0 0 3.378 8H5.75a.75.75 0 0 1 0 1.5H2a1 1 0 0 1-1-1V4.75a.75.75 0 0 1 1.5 0v1.697A10.997 10.997 0 0 1 11.998 1C18.074 1 23 5.925 23 12s-4.926 11-11.002 11C6.014 23 1.146 18.223 1 12.275a.75.75 0 0 1 1.5-.037 9.5 9.5 0 0 0 9.498 9.262c5.248 0 9.502-4.253 9.502-9.5s-4.254-9.5-9.502-9.5Z",
          }),
          a.createElement("path", {
            d: "M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z",
          })
        ),
      },
    };
  }),
  y4 = c("HomeIcon", "octicon octicon-home", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z",
        }),
      },
    };
  }),
  b4 = c("HomeFillIcon", "octicon octicon-home-fill", function () {
    return {
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363Z",
        }),
      },
    };
  }),
  S4 = c("HorizontalRuleIcon", "octicon octicon-horizontal-rule", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 7.75A.75.75 0 0 1 .75 7h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 7.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M2 12.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  k4 = c("HourglassIcon", "octicon octicon-hourglass", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.75 1h10.5a.75.75 0 0 1 0 1.5h-.75v1.25a4.75 4.75 0 0 1-1.9 3.8l-.333.25a.25.25 0 0 0 0 .4l.333.25a4.75 4.75 0 0 1 1.9 3.8v1.25h.75a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.75v-1.25a4.75 4.75 0 0 1 1.9-3.8l.333-.25a.25.25 0 0 0 0-.4L5.4 7.55a4.75 4.75 0 0 1-1.9-3.8V2.5h-.75a.75.75 0 0 1 0-1.5ZM11 2.5H5v1.25c0 1.023.482 1.986 1.3 2.6l.333.25c.934.7.934 2.1 0 2.8l-.333.25a3.251 3.251 0 0 0-1.3 2.6v1.25h6v-1.25a3.251 3.251 0 0 0-1.3-2.6l-.333-.25a1.748 1.748 0 0 1 0-2.8l.333-.25a3.251 3.251 0 0 0 1.3-2.6Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4.75 2h14.5a.75.75 0 0 1 0 1.5h-.75v2.982a4.75 4.75 0 0 1-2.215 4.017l-2.044 1.29a.25.25 0 0 0 0 .422l2.044 1.29a4.75 4.75 0 0 1 2.215 4.017V20.5h.75a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h.75v-2.982a4.75 4.75 0 0 1 2.215-4.017l2.044-1.29a.25.25 0 0 0 0-.422l-2.044-1.29A4.75 4.75 0 0 1 5.5 6.482V3.5h-.75a.75.75 0 0 1 0-1.5ZM17 3.5H7v2.982A3.25 3.25 0 0 0 8.516 9.23l2.044 1.29a1.75 1.75 0 0 1 0 2.96l-2.044 1.29A3.25 3.25 0 0 0 7 17.518V20.5h10v-2.982a3.25 3.25 0 0 0-1.516-2.748l-2.044-1.29a1.75 1.75 0 0 1 0-2.96l2.044-1.29A3.25 3.25 0 0 0 17 6.482Z",
        }),
      },
    };
  }),
  F4 = c("HubotIcon", "octicon octicon-hubot", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 8a8 8 0 0 1 16 0v5.25a.75.75 0 0 1-1.5 0V8a6.5 6.5 0 1 0-13 0v5.25a.75.75 0 0 1-1.5 0Zm3-1.25C3 5.784 3.784 5 4.75 5h6.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 11.25 10h-6.5A1.75 1.75 0 0 1 3 8.25Zm1.47-.53a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06 0L8 7.81l.97.97a.75.75 0 0 0 1.06 0l1.5-1.5a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215l-.97.97-.97-.97a.75.75 0 0 0-1.06 0l-.97.97-.97-.97a.75.75 0 0 0-1.06 0Zm1.03 6.03a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 13C0 6.373 5.373 1 12 1s12 5.373 12 12v8.657a.75.75 0 0 1-1.5 0V13c0-5.799-4.701-10.5-10.5-10.5S1.5 7.201 1.5 13v8.657a.75.75 0 0 1-1.5 0V13Z",
          }),
          a.createElement("path", {
            d: "M8 19.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75ZM5.25 9.5h13.5c.966 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.5c0-.966.784-1.75 1.75-1.75Zm.22 1.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0L12 12.56l2.47 2.47a.75.75 0 0 0 1.06 0l3-3a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L15 13.44l-2.47-2.47a.75.75 0 0 0-1.06 0L9 13.44l-2.47-2.47a.75.75 0 0 0-1.06 0Z",
          })
        ),
      },
    };
  }),
  T4 = c("IdBadgeIcon", "octicon octicon-id-badge", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3Zm10 .25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75ZM10.25 11a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5Z",
          }),
          a.createElement("path", {
            d: "M7.25 0h1.5c.966 0 1.75.784 1.75 1.75V3h3.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-8.5C0 3.784.784 3 1.75 3H5.5V1.75C5.5.784 6.284 0 7.25 0Zm3.232 4.5A1.75 1.75 0 0 1 8.75 6h-1.5a1.75 1.75 0 0 1-1.732-1.5H1.75a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM7 1.75v2.5c0 .138.112.25.25.25h1.5A.25.25 0 0 0 9 4.25v-2.5a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25Z",
          })
        ),
      },
    };
  }),
  P4 = c("ImageIcon", "octicon octicon-image", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M16 13.25A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75ZM1.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h.94l.03-.03 6.077-6.078a1.75 1.75 0 0 1 2.412-.06L14.5 10.31V2.75a.25.25 0 0 0-.25-.25Zm12.5 11a.25.25 0 0 0 .25-.25v-.917l-4.298-3.889a.25.25 0 0 0-.344.009L4.81 13.5ZM7 6a2 2 0 1 1-3.999.001A2 2 0 0 1 7 6ZM5.5 6a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4.75 3h14.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V4.75C3 3.784 3.784 3 4.75 3Zm14.5 1.5H4.75a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h.19l9.823-9.823a1.75 1.75 0 0 1 2.475 0l2.262 2.262V4.75a.25.25 0 0 0-.25-.25Zm.25 9.56-3.323-3.323a.25.25 0 0 0-.354 0L7.061 19.5H19.25a.25.25 0 0 0 .25-.25ZM8.5 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
        }),
      },
    };
  }),
  D4 = c("InboxIcon", "octicon octicon-inbox", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4.801 3.57A1.75 1.75 0 0 1 6.414 2.5h11.174c.702 0 1.337.42 1.611 1.067l3.741 8.828c.04.092.06.192.06.293v7.562A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25v-7.5c0-.1.02-.199.059-.291L4.8 3.571ZM6.414 4a.25.25 0 0 0-.23.153L2.88 12H8a.75.75 0 0 1 .648.372L10.18 15h3.638l1.533-2.628a.75.75 0 0 1 .64-.372l5.13-.051-3.304-7.797a.25.25 0 0 0-.23-.152ZM21.5 13.445l-5.067.05-1.535 2.633a.75.75 0 0 1-.648.372h-4.5a.75.75 0 0 1-.648-.372L7.57 13.5H2.5v6.75c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25Z",
        }),
      },
    };
  }),
  x4 = c("InfinityIcon", "octicon octicon-infinity", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 6.984c.59-.533 1.204-1.066 1.825-1.493.797-.548 1.7-.991 2.675-.991C14.414 4.5 16 6.086 16 8s-1.586 3.5-3.5 3.5c-.975 0-1.878-.444-2.675-.991-.621-.427-1.235-.96-1.825-1.493-.59.533-1.204 1.066-1.825 1.493-.797.547-1.7.991-2.675.991C1.586 11.5 0 9.914 0 8s1.586-3.5 3.5-3.5c.975 0 1.878.443 2.675.991.621.427 1.235.96 1.825 1.493ZM9.114 8c.536.483 1.052.922 1.56 1.273.704.483 1.3.727 1.826.727 1.086 0 2-.914 2-2 0-1.086-.914-2-2-2-.525 0-1.122.244-1.825.727-.51.35-1.025.79-1.561 1.273ZM3.5 6c-1.086 0-2 .914-2 2 0 1.086.914 2 2 2 .525 0 1.122-.244 1.825-.727.51-.35 1.025-.79 1.561-1.273-.536-.483-1.052-.922-1.56-1.273C4.621 6.244 4.025 6 3.5 6Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 11.16c.887-.933 1.813-1.865 2.78-2.6C15.952 7.668 17.267 7 18.75 7 21.657 7 24 9.615 24 12.25s-2.343 5.25-5.25 5.25c-1.483 0-2.798-.668-3.97-1.56-.967-.735-1.893-1.667-2.78-2.6-.887.933-1.813 1.865-2.78 2.6-1.172.892-2.487 1.56-3.97 1.56C2.343 17.5 0 14.885 0 12.25S2.343 7 5.25 7c1.483 0 2.798.667 3.97 1.56.967.735 1.893 1.667 2.78 2.6ZM5.25 8.5c-2.032 0-3.75 1.895-3.75 3.75S3.218 16 5.25 16c1.017 0 2.014-.457 3.062-1.253.89-.678 1.758-1.554 2.655-2.497-.897-.943-1.765-1.82-2.655-2.497C7.264 8.957 6.267 8.5 5.25 8.5Zm7.783 3.75c.897.943 1.765 1.82 2.655 2.497C16.736 15.543 17.733 16 18.75 16c2.032 0 3.75-1.895 3.75-3.75S20.782 8.5 18.75 8.5c-1.017 0-2.014.457-3.062 1.253-.89.678-1.758 1.554-2.655 2.497Z",
        }),
      },
    };
  }),
  R4 = c("InfoIcon", "octicon octicon-info", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v4.25h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V12h-.75a.75.75 0 0 1-.75-.75Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  O4 = c("IssueClosedIcon", "octicon octicon-issue-closed", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z",
          }),
          a.createElement("path", {
            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  N4 = c("IssueDraftIcon", "octicon octicon-issue-draft", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M14.307 11.655a.75.75 0 0 1 .165 1.048 8.05 8.05 0 0 1-1.769 1.77.75.75 0 0 1-.883-1.214 6.552 6.552 0 0 0 1.44-1.439.75.75 0 0 1 1.047-.165Zm-2.652-9.962a.75.75 0 0 1 1.048-.165 8.05 8.05 0 0 1 1.77 1.769.75.75 0 0 1-1.214.883 6.552 6.552 0 0 0-1.439-1.44.75.75 0 0 1-.165-1.047ZM6.749.097a8.074 8.074 0 0 1 2.502 0 .75.75 0 1 1-.233 1.482 6.558 6.558 0 0 0-2.036 0A.751.751 0 0 1 6.749.097ZM.955 6.125a.75.75 0 0 1 .624.857 6.558 6.558 0 0 0 0 2.036.75.75 0 1 1-1.482.233 8.074 8.074 0 0 1 0-2.502.75.75 0 0 1 .858-.624Zm14.09 0a.75.75 0 0 1 .858.624c.13.829.13 1.673 0 2.502a.75.75 0 1 1-1.482-.233 6.558 6.558 0 0 0 0-2.036.75.75 0 0 1 .624-.857Zm-8.92 8.92a.75.75 0 0 1 .857-.624 6.558 6.558 0 0 0 2.036 0 .75.75 0 1 1 .233 1.482c-.829.13-1.673.13-2.502 0a.75.75 0 0 1-.624-.858Zm-4.432-3.39a.75.75 0 0 1 1.048.165 6.552 6.552 0 0 0 1.439 1.44.751.751 0 0 1-.883 1.212 8.05 8.05 0 0 1-1.77-1.769.75.75 0 0 1 .166-1.048Zm2.652-9.962A.75.75 0 0 1 4.18 2.74a6.556 6.556 0 0 0-1.44 1.44.751.751 0 0 1-1.212-.883 8.05 8.05 0 0 1 1.769-1.77.75.75 0 0 1 1.048.166Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M17.32 3.205a.75.75 0 0 1 1.046-.177 11.056 11.056 0 0 1 2.605 2.606.75.75 0 1 1-1.222.869 9.554 9.554 0 0 0-2.252-2.252.75.75 0 0 1-.177-1.046Zm3.475 14.115a.75.75 0 0 1 .176 1.046 11.07 11.07 0 0 1-2.605 2.605.75.75 0 1 1-.869-1.222 9.554 9.554 0 0 0 2.252-2.252.75.75 0 0 1 1.046-.177ZM2.018 9.543a.75.75 0 0 1 .615.864 9.571 9.571 0 0 0 0 3.186.75.75 0 1 1-1.48.25 11.07 11.07 0 0 1 0-3.686.75.75 0 0 1 .865-.614Zm7.525 12.439a.75.75 0 0 1 .864-.615 9.571 9.571 0 0 0 3.186 0 .75.75 0 1 1 .25 1.48 11.07 11.07 0 0 1-3.686 0 .75.75 0 0 1-.614-.865ZM6.68 3.205a.75.75 0 0 1-.177 1.046A9.558 9.558 0 0 0 4.25 6.503a.75.75 0 1 1-1.223-.87 11.056 11.056 0 0 1 2.606-2.605.75.75 0 0 1 1.046.177ZM3.205 17.32a.75.75 0 0 1 1.046.177 9.554 9.554 0 0 0 2.252 2.252.75.75 0 1 1-.87 1.223 11.056 11.056 0 0 1-2.605-2.606.75.75 0 0 1 .177-1.046Zm6.952-16.166a11.07 11.07 0 0 1 3.686 0 .75.75 0 0 1-.25 1.479 9.571 9.571 0 0 0-3.186 0 .75.75 0 1 1-.25-1.48Zm11.825 8.389a.75.75 0 0 1 .864.614 11.07 11.07 0 0 1 0 3.686.75.75 0 0 1-1.479-.25 9.571 9.571 0 0 0 0-3.186.75.75 0 0 1 .615-.864Z",
        }),
      },
    };
  }),
  B4 = c("IssueOpenedIcon", "octicon octicon-issue-opened", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
          }),
          a.createElement("path", {
            d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z",
        }),
      },
    };
  }),
  W4 = c("IssueReopenedIcon", "octicon octicon-issue-reopened", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.029 2.217a6.5 6.5 0 0 1 9.437 5.11.75.75 0 1 0 1.492-.154 8 8 0 0 0-14.315-4.03L.427 1.927A.25.25 0 0 0 0 2.104V5.75A.25.25 0 0 0 .25 6h3.646a.25.25 0 0 0 .177-.427L2.715 4.215a6.491 6.491 0 0 1 2.314-1.998ZM1.262 8.169a.75.75 0 0 0-1.22.658 8.001 8.001 0 0 0 14.315 4.03l1.216 1.216a.25.25 0 0 0 .427-.177V10.25a.25.25 0 0 0-.25-.25h-3.646a.25.25 0 0 0-.177.427l1.358 1.358a6.501 6.501 0 0 1-11.751-3.11.75.75 0 0 0-.272-.506Z",
          }),
          a.createElement("path", {
            d: "M9.06 9.06a1.5 1.5 0 1 1-2.12-2.12 1.5 1.5 0 0 1 2.12 2.12Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.38 8A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 9.215 7.182.75.75 0 1 0 1.456-.364C21.473 4.539 17.15 1 12 1a10.995 10.995 0 0 0-9.5 5.452V4.75a.75.75 0 0 0-1.5 0V8.5a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5H3.38Zm-.595 6.318a.75.75 0 0 0-1.455.364C2.527 19.461 6.85 23 12 23c4.052 0 7.592-2.191 9.5-5.451v1.701a.75.75 0 0 0 1.5 0V15.5a1 1 0 0 0-1-1h-3.75a.75.75 0 0 0 0 1.5h2.37A9.502 9.502 0 0 1 12 21.5c-4.446 0-8.181-3.055-9.215-7.182Z",
          }),
          a.createElement("path", {
            d: "M13.414 13.414a2 2 0 1 1-2.828-2.828 2 2 0 0 1 2.828 2.828Z",
          })
        ),
      },
    };
  }),
  z4 = c("IssueTrackedByIcon", "octicon octicon-issue-tracked-by", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 8a6.5 6.5 0 0 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8 .75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8Z",
          }),
          a.createElement("path", {
            d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm3.573 5.823-2.896-2.896a.25.25 0 0 1 0-.354l2.896-2.896a.25.25 0 0 1 .427.177V11.5h3.25a.75.75 0 0 1 0 1.5H12v2.146a.25.25 0 0 1-.427.177Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 2.5a9.5 9.5 0 1 0 0 19 .75.75 0 0 1 0 1.5C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a.75.75 0 0 1-1.5 0A9.5 9.5 0 0 0 12 2.5Z",
          }),
          a.createElement("path", {
            d: "m13.759 17.48 3.728 3.314a.308.308 0 0 0 .513-.23V18h4.25a.75.75 0 0 0 0-1.5H18v-2.564a.308.308 0 0 0-.513-.23L13.76 17.02a.308.308 0 0 0 0 .46ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
          })
        ),
      },
    };
  }),
  $4 = c("IssueTracksIcon", "octicon octicon-issue-tracks", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 8a6.5 6.5 0 0 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8 .75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8Z",
          }),
          a.createElement("path", {
            d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 1.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm2.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.5 12a9.5 9.5 0 1 1 19 0 .75.75 0 0 0 1.5 0c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11a.75.75 0 0 0 0-1.5A9.5 9.5 0 0 1 2.5 12Z",
          }),
          a.createElement("path", {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2.5 2.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm3.75 2.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z",
          })
        ),
      },
    };
  }),
  _4 = c("ItalicIcon", "octicon octicon-italic", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6 2.75A.75.75 0 0 1 6.75 2h6.5a.75.75 0 0 1 0 1.5h-2.505l-3.858 9H9.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.505l3.858-9H6.75A.75.75 0 0 1 6 2.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10 4.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-3.514l-5.828 13h3.342a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.514l5.828-13H10.75a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  U4 = c("IterationsIcon", "octicon octicon-iterations", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.5 7.25a4.75 4.75 0 0 1 9.5 0 .75.75 0 0 0 1.5 0 6.25 6.25 0 1 0-6.25 6.25H12v2.146c0 .223.27.335.427.177l2.896-2.896a.25.25 0 0 0 0-.354l-2.896-2.896a.25.25 0 0 0-.427.177V12H7.25A4.75 4.75 0 0 1 2.5 7.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M2.5 10.5a8 8 0 1 1 16 0 .75.75 0 0 0 1.5 0 9.5 9.5 0 1 0-9.5 9.5h10.94l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.735-3.735c.44-.439.44-1.151 0-1.59L19.78 14.72a.75.75 0 0 0-1.06 1.06l2.72 2.72H10.5a8 8 0 0 1-8-8Z",
        }),
      },
    };
  }),
  j4 = c(
    "KebabHorizontalIcon",
    "octicon octicon-kebab-horizontal",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement("path", {
            d: "M20 14a2 2 0 1 1-.001-3.999A2 2 0 0 1 20 14ZM6 12a2 2 0 1 1-3.999.001A2 2 0 0 1 6 12Zm8 0a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12Z",
          }),
        },
      };
    }
  ),
  X4 = c("KeyIcon", "octicon octicon-key", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0Zm-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M16.75 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
          }),
          a.createElement("path", {
            d: "M15.75 0a8.25 8.25 0 1 1-2.541 16.101l-1.636 1.636a1.744 1.744 0 0 1-1.237.513H9.25a.25.25 0 0 0-.25.25v1.448a.876.876 0 0 1-.256.619l-.214.213a.75.75 0 0 1-.545.22H5.25a.25.25 0 0 0-.25.25v1A1.75 1.75 0 0 1 3.25 24h-1.5A1.75 1.75 0 0 1 0 22.25v-2.836c0-.464.185-.908.513-1.236l7.386-7.388A8.249 8.249 0 0 1 15.75 0ZM9 8.25a6.733 6.733 0 0 0 .463 2.462.75.75 0 0 1-.168.804l-7.722 7.721a.25.25 0 0 0-.073.177v2.836c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-1c0-.966.784-1.75 1.75-1.75H7.5v-1c0-.966.784-1.75 1.75-1.75h1.086a.25.25 0 0 0 .177-.073l1.971-1.972a.75.75 0 0 1 .804-.168A6.75 6.75 0 1 0 9 8.25Z",
          })
        ),
      },
    };
  }),
  G4 = c("KeyAsteriskIcon", "octicon octicon-key-asterisk", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v10.5A2.75 2.75 0 0 1 13.25 16H2.75A2.75 2.75 0 0 1 0 13.25ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25Z",
          }),
          a.createElement("path", {
            d: "M8 4a.75.75 0 0 1 .75.75V6.7l1.69-.975a.75.75 0 0 1 .75 1.3L9.5 8l1.69.976a.75.75 0 0 1-.75 1.298L8.75 9.3v1.951a.75.75 0 0 1-1.5 0V9.299l-1.69.976a.75.75 0 0 1-.75-1.3L6.5 8l-1.69-.975a.75.75 0 0 1 .75-1.3l1.69.976V4.75A.75.75 0 0 1 8 4Z",
          })
        ),
      },
    };
  }),
  q4 = c("LawIcon", "octicon octicon-law", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154c.041.028.09.043.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.749.749 0 0 1-.23.896c-.1.074-.203.143-.31.206a6.296 6.296 0 0 1-.79.399 7.349 7.349 0 0 1-2.856.569 7.343 7.343 0 0 1-2.855-.568 6.205 6.205 0 0 1-.79-.4 3.205 3.205 0 0 1-.307-.202l-.005-.004a.749.749 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.246.246 0 0 0-.14-.043H12.75v14.5h4.487a.75.75 0 0 1 0 1.5H6.763a.75.75 0 0 1 0-1.5h4.487V6H9.275a.249.249 0 0 0-.14.043L7.439 7.197c-.29.197-.633.303-.984.303h-.886l3.368 7.68a.75.75 0 0 1-.209.878c-.08.065-.16.126-.31.223a6.077 6.077 0 0 1-.792.433 6.924 6.924 0 0 1-2.876.62 6.913 6.913 0 0 1-2.876-.62 6.077 6.077 0 0 1-.792-.433 3.483 3.483 0 0 1-.309-.221.762.762 0 0 1-.21-.88L3.93 7.5H2.353a.75.75 0 0 1 0-1.5h4.102c.05 0 .099-.015.141-.043l1.695-1.154c.29-.198.634-.303.985-.303h1.974V2.75a.75.75 0 0 1 1.5 0ZM2.193 15.198a5.414 5.414 0 0 0 2.557.635 5.414 5.414 0 0 0 2.557-.635L4.75 9.368Zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.847 5.847 0 0 0 2.547-.576L19.25 9.367Z",
        }),
      },
    };
  }),
  Y4 = c("LightBulbIcon", "octicon octicon-light-bulb", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 2.5c-3.81 0-6.5 2.743-6.5 6.119 0 1.536.632 2.572 1.425 3.56.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774.404.531.783 1.128.995 1.834a.75.75 0 0 1-1.436.432c-.138-.46-.397-.89-.753-1.357a18.111 18.111 0 0 0-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618 4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714-.356.467-.615.898-.753 1.357a.751.751 0 0 1-1.437-.432c.213-.706.592-1.303.997-1.834.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5ZM8.75 18h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  K4 = c("LinkIcon", "octicon octicon-link", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353.75.75 0 0 0-1.18.928 5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061l3-3Z",
          }),
          a.createElement("path", {
            d: "M7.28 11.153a3.936 3.936 0 0 1 5.88.353.75.75 0 0 0 1.18-.928 5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568l3.627-3.627Z",
          })
        ),
      },
    };
  }),
  Q4 = c("LinkExternalIcon", "octicon octicon-link-external", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M15.5 2.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.06l-6.22 6.22a.75.75 0 1 1-1.06-1.06L19.94 3h-3.69a.75.75 0 0 1-.75-.75Z",
          }),
          a.createElement("path", {
            d: "M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.25.25 0 0 0-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 0 0 .25-.25v-8.5a.75.75 0 0 1 1.5 0v8.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75V4.25Z",
          })
        ),
      },
    };
  }),
  J4 = c("ListOrderedIcon", "octicon octicon-list-ordered", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5 3.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 3.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM.924 10.32a.5.5 0 0 1-.851-.525l.001-.001.001-.002.002-.004.007-.011c.097-.144.215-.273.348-.384.228-.19.588-.392 1.068-.392.468 0 .858.181 1.126.484.259.294.377.673.377 1.038 0 .987-.686 1.495-1.156 1.845l-.047.035c-.303.225-.522.4-.654.597h1.357a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5c0-1.005.692-1.52 1.167-1.875l.035-.025c.531-.396.8-.625.8-1.078a.57.57 0 0 0-.128-.376C1.806 10.068 1.695 10 1.5 10a.658.658 0 0 0-.429.163.835.835 0 0 0-.144.153ZM2.003 2.5V6h.503a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1h.503V3.308l-.28.14a.5.5 0 0 1-.446-.895l1.003-.5a.5.5 0 0 1 .723.447Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.604 3.089A.75.75 0 0 1 4 3.75V8.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 1 1 0-1.5h.75V5.151l-.334.223a.75.75 0 0 1-.832-1.248l1.5-1a.75.75 0 0 1 .77-.037ZM8.75 5.5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H8.75Zm0 6a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H8.75Zm0 6a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5H8.75ZM5.5 15.75c0-.704-.271-1.286-.72-1.686a2.302 2.302 0 0 0-1.53-.564c-.535 0-1.094.178-1.53.565-.449.399-.72.982-.72 1.685a.75.75 0 0 0 1.5 0c0-.296.104-.464.217-.564A.805.805 0 0 1 3.25 15c.215 0 .406.072.533.185.113.101.217.268.217.565 0 .332-.069.48-.21.657-.092.113-.216.24-.403.419l-.147.14c-.152.144-.33.313-.52.504l-1.5 1.5a.75.75 0 0 0-.22.53v.25c0 .414.336.75.75.75H5A.75.75 0 0 0 5 19H3.31l.47-.47c.176-.176.333-.324.48-.465l.165-.156a5.98 5.98 0 0 0 .536-.566c.358-.447.539-.925.539-1.593Z",
        }),
      },
    };
  }),
  a3 = c("ListUnorderedIcon", "octicon octicon-list-unordered", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M8.75 5.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5Zm0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5Zm0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
    };
  }),
  t3 = c("LocationIcon", "octicon octicon-location", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
          }),
          a.createElement("path", {
            d: "M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 0 1-3.336 0l-5.375-5.375-.028-.028c-3.905-3.905-3.905-10.237 0-14.142 3.904-3.905 10.236-3.905 14.141 0ZM5.99 4.489v.001a8.5 8.5 0 0 0 0 12.02l.023.024.002.002 5.378 5.378a.859.859 0 0 0 1.214 0l5.403-5.404a8.5 8.5 0 0 0-.043-11.977A8.5 8.5 0 0 0 5.99 4.489Z",
          })
        ),
      },
    };
  }),
  e3 = c("LockIcon", "octicon octicon-lock", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z",
        }),
      },
    };
  }),
  n3 = c("LogIcon", "octicon octicon-log", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 8.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 5 8.25ZM4 10.5A.75.75 0 0 0 4 12h4a.75.75 0 0 0 0-1.5H4Z",
          }),
          a.createElement("path", {
            d: "M13-.005c1.654 0 3 1.328 3 3 0 .982-.338 1.933-.783 2.818-.443.879-1.028 1.758-1.582 2.588l-.011.017c-.568.853-1.104 1.659-1.501 2.446-.398.789-.623 1.494-.623 2.136a1.5 1.5 0 1 0 2.333-1.248.75.75 0 0 1 .834-1.246A3 3 0 0 1 13 16H3a3 3 0 0 1-3-3c0-1.582.891-3.135 1.777-4.506.209-.322.418-.637.623-.946.473-.709.923-1.386 1.287-2.048H2.51c-.576 0-1.381-.133-1.907-.783A2.68 2.68 0 0 1 0 2.995a3 3 0 0 1 3-3Zm0 1.5a1.5 1.5 0 0 0-1.5 1.5c0 .476.223.834.667 1.132A.75.75 0 0 1 11.75 5.5H5.368c-.467 1.003-1.141 2.015-1.773 2.963-.192.289-.381.571-.558.845C2.13 10.711 1.5 11.916 1.5 13A1.5 1.5 0 0 0 3 14.5h7.401A2.989 2.989 0 0 1 10 13c0-.979.338-1.928.784-2.812.441-.874 1.023-1.748 1.575-2.576l.017-.026c.568-.853 1.103-1.658 1.501-2.448.398-.79.623-1.497.623-2.143 0-.838-.669-1.5-1.5-1.5Zm-10 0a1.5 1.5 0 0 0-1.5 1.5c0 .321.1.569.27.778.097.12.325.227.74.227h7.674A2.737 2.737 0 0 1 10 2.995c0-.546.146-1.059.401-1.5Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.197 10a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm-2.382 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm-1.581 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z",
          }),
          a.createElement("path", {
            d: "M4.125 0h15.75a4.11 4.11 0 0 1 2.92 1.205A4.11 4.11 0 0 1 24 4.125c0 1.384-.476 2.794-1.128 4.16-.652 1.365-1.515 2.757-2.352 4.104l-.008.013c-.849 1.368-1.669 2.691-2.28 3.97-.614 1.283-.982 2.45-.982 3.503a2.625 2.625 0 1 0 4.083-2.183.75.75 0 1 1 .834-1.247A4.126 4.126 0 0 1 19.875 24H4.5a4.125 4.125 0 0 1-4.125-4.125c0-2.234 1.258-4.656 2.59-6.902.348-.586.702-1.162 1.05-1.728.8-1.304 1.567-2.553 2.144-3.738H3.39c-.823 0-1.886-.193-2.567-1.035A3.647 3.647 0 0 1 0 4.125 4.125 4.125 0 0 1 4.125 0ZM15.75 19.875c0-1.38.476-2.786 1.128-4.15.649-1.358 1.509-2.743 2.343-4.086l.017-.028c.849-1.367 1.669-2.692 2.28-3.972.614-1.285.982-2.457.982-3.514A2.615 2.615 0 0 0 19.875 1.5a2.625 2.625 0 0 0-2.625 2.625c0 .865.421 1.509 1.167 2.009A.75.75 0 0 1 18 7.507H7.812c-.65 1.483-1.624 3.069-2.577 4.619-.334.544-.666 1.083-.98 1.612-1.355 2.287-2.38 4.371-2.38 6.137A2.625 2.625 0 0 0 4.5 22.5h12.193a4.108 4.108 0 0 1-.943-2.625ZM1.5 4.125c-.01.511.163 1.008.487 1.403.254.313.74.479 1.402.479h12.86a3.648 3.648 0 0 1-.499-1.882 4.11 4.11 0 0 1 .943-2.625H4.125A2.625 2.625 0 0 0 1.5 4.125Z",
          })
        ),
      },
    };
  }),
  c3 = c("LogoGistIcon", "octicon octicon-logo-gist", function () {
    return {
      16: {
        width: 25,
        path: a.createElement("path", {
          d: "M4.7 8.73v-1h3.52v5.69c-.78.37-1.95.64-3.59.64C1.11 14.06 0 11.37 0 8.03 0 4.69 1.13 2 4.63 2c1.62 0 2.64.33 3.28.66v1.05c-1.22-.5-2-.73-3.28-.73-2.57 0-3.48 2.21-3.48 5.06 0 2.85.91 5.05 3.47 5.05.89 0 1.98-.07 2.53-.34V8.73Zm10.98.69h.03c2.22.2 2.75.95 2.75 2.23 0 1.21-.76 2.41-3.14 2.41-.75 0-1.83-.19-2.33-.39v-.94c.47.17 1.22.36 2.33.36 1.62 0 2.06-.69 2.06-1.42 0-.71-.22-1.21-1.77-1.34-2.26-.2-2.73-1-2.73-2.08 0-1.11.72-2.31 2.92-2.31.73 0 1.56.09 2.25.39v.94c-.61-.2-1.22-.36-2.27-.36-1.55 0-1.88.57-1.88 1.34 0 .69.28 1.04 1.78 1.17Zm8.58-3.33v.85h-2.42v4.87c0 .95.53 1.34 1.5 1.34.2 0 .42 0 .61-.03v.89c-.17.03-.5.05-.69.05-1.31 0-2.5-.6-2.5-2.13v-5H19.2v-.48l1.56-.44V3.9l1.08-.31v2.5h2.42Zm-13.17-.03v6.41c0 .54.19.7.67.7v.89c-1.14 0-1.72-.47-1.72-1.72V6.06h1.05Zm.25-2.33c0 .44-.34.78-.78.78a.76.76 0 0 1-.77-.78c0-.44.32-.78.77-.78s.78.34.78.78Z",
        }),
      },
    };
  }),
  o3 = c("LogoGithubIcon", "octicon octicon-logo-github", function () {
    return {
      16: {
        width: 45,
        path: a.createElement("path", {
          d: "M8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17Zm35.85 2.33c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88ZM27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16-.1.05-.74.22-1.27.22-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83.247 0 .481-.049.574-.05ZM12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25ZM11.19 2.68c.75 0 1.36.61 1.36 1.38 0 .77-.61 1.38-1.36 1.38-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38Zm7.34 9.35v.001l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z",
        }),
      },
    };
  }),
  l3 = c("MailIcon", "octicon octicon-mail", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z",
        }),
      },
    };
  }),
  r3 = c("MarkGithubIcon", "octicon octicon-mark-github", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z",
        }),
      },
    };
  }),
  h3 = c("MarkdownIcon", "octicon octicon-markdown", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M14.85 3c.63 0 1.15.52 1.14 1.15v7.7c0 .63-.51 1.15-1.15 1.15H1.15C.52 13 0 12.48 0 11.84V4.15C0 3.52.52 3 1.15 3ZM9 11V5H7L5.5 7 4 5H2v6h2V8l1.5 1.92L7 8v3Zm2.99.5L14.5 8H13V5h-2v3H9.5Z",
        }),
      },
    };
  }),
  i3 = c("MegaphoneIcon", "octicon octicon-megaphone", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.25 9a.75.75 0 0 1 .75.75c0 2.142.456 3.828.733 4.653a.122.122 0 0 0 .05.064.212.212 0 0 0 .117.033h1.31c.085 0 .18-.042.258-.152a.45.45 0 0 0 .075-.366A16.743 16.743 0 0 1 6 9.75a.75.75 0 0 1 1.5 0c0 1.588.25 2.926.494 3.85.293 1.113-.504 2.4-1.783 2.4H4.9c-.686 0-1.35-.41-1.589-1.12A16.4 16.4 0 0 1 2.5 9.75.75.75 0 0 1 3.25 9Z",
          }),
          a.createElement("path", {
            d: "M0 6a4 4 0 0 1 4-4h2.75a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H4a4 4 0 0 1-4-4Zm4-2.5a2.5 2.5 0 1 0 0 5h2v-5Z",
          }),
          a.createElement("path", {
            d: "M15.59.082A.75.75 0 0 1 16 .75v10.5a.75.75 0 0 1-1.189.608l-.002-.001h.001l-.014-.01a5.775 5.775 0 0 0-.422-.25 10.63 10.63 0 0 0-1.469-.64C11.576 10.484 9.536 10 6.75 10a.75.75 0 0 1 0-1.5c2.964 0 5.174.516 6.658 1.043.423.151.787.302 1.092.443V2.014c-.305.14-.669.292-1.092.443C11.924 2.984 9.713 3.5 6.75 3.5a.75.75 0 0 1 0-1.5c2.786 0 4.826-.484 6.155-.957.665-.236 1.154-.47 1.47-.64.144-.077.284-.161.421-.25l.014-.01a.75.75 0 0 1 .78-.061Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M22 1.75v14.5a.75.75 0 0 1-.399.662c-.384.204-.783-.035-1.139-.248l-.003-.002c-.09-.054-.177-.107-.261-.15a15.53 15.53 0 0 0-2-.849c-1.738-.607-4.321-1.223-7.703-1.251a.833.833 0 0 1 .005.088c0 2.279.494 4.279.906 5.547.368 1.131-.438 2.453-1.732 2.453H7.661c-.696 0-1.36-.42-1.6-1.129C5.684 20.255 5 17.811 5 14.75v-.457A5.5 5.5 0 0 1 6.5 3.5h3.75c3.505 0 6.175-.61 7.955-1.21a15.88 15.88 0 0 0 2.002-.82 9.21 9.21 0 0 0 .49-.262c.048-.028.095-.055.142-.085A.751.751 0 0 1 22 1.75ZM10.5 12.912c3.564.029 6.313.678 8.193 1.335.737.258 1.34.517 1.807.74V2.993c-.467.216-1.073.467-1.815.718-1.878.634-4.624 1.26-8.185 1.288ZM6.5 5a4 4 0 0 0 0 8H9V5Zm0 9.75c0 2.847.638 5.123.982 6.141.018.051.074.109.179.109h2.013c.087 0 .179-.043.249-.147a.396.396 0 0 0 .057-.343C9.537 19.148 9 16.986 9 14.5H6.5Z",
        }),
      },
    };
  }),
  d3 = c("MentionIcon", "octicon octicon-mention", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.75 2.37a6.501 6.501 0 0 0 6.5 11.26.75.75 0 0 1 .75 1.298A7.999 7.999 0 0 1 .989 4.148 8 8 0 0 1 16 7.75v1.5a2.75 2.75 0 0 1-5.072 1.475 3.999 3.999 0 0 1-6.65-4.19A4 4 0 0 1 12 8v1.25a1.25 1.25 0 0 0 2.5 0V7.867a6.5 6.5 0 0 0-9.75-5.496ZM10.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M20.226 7.25c-2.623-4.542-8.432-6.098-12.974-3.475-4.543 2.622-6.099 8.431-3.477 12.974 2.623 4.542 8.431 6.099 12.974 3.477a.75.75 0 0 1 .75 1.299c-5.26 3.037-11.987 1.235-15.024-4.026C-.562 12.24 1.24 5.512 6.501 2.475 11.76-.562 18.488 1.24 21.525 6.501a10.959 10.959 0 0 1 1.455 4.826c.013.056.02.113.02.173v2.25a3.5 3.5 0 0 1-6.623 1.581 5.5 5.5 0 1 1 1.112-3.682.802.802 0 0 1 .011.129v1.972a2 2 0 1 0 4 0v-1.766a9.456 9.456 0 0 0-1.274-4.733ZM16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z",
        }),
      },
    };
  }),
  p3 = c("MeterIcon", "octicon octicon-meter", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 1.5a6.5 6.5 0 1 0 6.016 4.035.75.75 0 0 1 1.388-.57 8 8 0 1 1-4.37-4.37.75.75 0 1 1-.569 1.389A6.473 6.473 0 0 0 8 1.5Zm6.28.22a.75.75 0 0 1 0 1.06l-4.063 4.064a2.5 2.5 0 1 1-1.06-1.06L13.22 1.72a.75.75 0 0 1 1.06 0ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
        }),
      },
    };
  }),
  m3 = c("MilestoneIcon", "octicon octicon-milestone", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M11.75 1a.75.75 0 0 1 .75.75V4h6.532c.42 0 .826.15 1.143.425l3.187 2.75a1.75 1.75 0 0 1 0 2.65l-3.187 2.75a1.75 1.75 0 0 1-1.143.425H12.5v9.25a.75.75 0 0 1-1.5 0V13H3.75A1.75 1.75 0 0 1 2 11.25v-5.5C2 4.783 2.784 4 3.75 4H11V1.75a.75.75 0 0 1 .75-.75Zm7.282 4.5H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h15.282c.06 0 .118-.021.163-.06l3.188-2.75a.248.248 0 0 0 0-.38l-3.188-2.75a.249.249 0 0 0-.163-.06Z",
        }),
      },
    };
  }),
  v3 = c("MirrorIcon", "octicon octicon-mirror", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M15.547 3.061A.75.75 0 0 1 16 3.75v8.5a.751.751 0 0 1-1.265.545l-4.5-4.25a.75.75 0 0 1 0-1.09l4.5-4.25a.75.75 0 0 1 .812-.144ZM0 12.25v-8.5a.751.751 0 0 1 1.265-.545l4.5 4.25a.75.75 0 0 1 0 1.09l-4.5 4.25A.75.75 0 0 1 0 12.25Zm1.5-6.76v5.02L4.158 8ZM11.842 8l2.658 2.51V5.49ZM8 4a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 4Zm.75-2.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0Zm0 6v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0ZM8 10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 10Zm0 3a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 8 13Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M21.553 6.064A.75.75 0 0 1 22 6.75v10.5a.75.75 0 0 1-1.256.554l-5.75-5.25a.748.748 0 0 1 0-1.108l5.75-5.25a.75.75 0 0 1 .809-.132ZM2.447 17.936A.75.75 0 0 1 2 17.25V6.75a.75.75 0 0 1 1.256-.554l5.75 5.25a.748.748 0 0 1 0 1.108l-5.75 5.25a.75.75 0 0 1-.809.132ZM7.387 12 3.5 8.45v7.1L7.388 12Zm9.226 0 3.887 3.55v-7.1L16.612 12ZM12 2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0 8a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm0-8a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  u3 = c("MoonIcon", "octicon octicon-moon", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M14.768 3.96v.001l-.002-.005a9.08 9.08 0 0 0-.218-.779c-.13-.394.21-.8.602-.67.29.096.575.205.855.328l.01.005A10.002 10.002 0 0 1 12 22a10.002 10.002 0 0 1-9.162-5.985l-.004-.01a9.722 9.722 0 0 1-.329-.855c-.13-.392.277-.732.67-.602.257.084.517.157.78.218l.004.002A9 9 0 0 0 14.999 6a9.09 9.09 0 0 0-.231-2.04ZM16.5 6c0 5.799-4.701 10.5-10.5 10.5-.426 0-.847-.026-1.26-.075A8.5 8.5 0 1 0 16.425 4.74c.05.413.075.833.075 1.259Z",
        }),
      },
    };
  }),
  Z3 = c("MortarBoardIcon", "octicon octicon-mortar-board", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.693 1.066a.747.747 0 0 1 .614 0l7.25 3.25a.75.75 0 0 1 0 1.368L13 6.831v2.794c0 1.024-.81 1.749-1.66 2.173-.893.447-2.075.702-3.34.702-.278 0-.55-.012-.816-.036a.75.75 0 0 1 .133-1.494c.22.02.45.03.683.03 1.082 0 2.025-.221 2.67-.543.69-.345.83-.682.83-.832V7.503L8.307 8.934a.747.747 0 0 1-.614 0L4 7.28v1.663c.296.105.575.275.812.512.438.438.688 1.059.688 1.796v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3c0-.737.25-1.358.688-1.796.237-.237.516-.407.812-.512V6.606L.443 5.684a.75.75 0 0 1 0-1.368ZM2.583 5 8 7.428 13.416 5 8 2.572ZM2.5 11.25v2.25H4v-2.25c0-.388-.125-.611-.25-.735a.697.697 0 0 0-.5-.203.707.707 0 0 0-.5.203c-.125.124-.25.347-.25.735Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.292 2.06v-.001l11.25 4.75a.749.749 0 0 1 0 1.382L19 10.108V15a.75.75 0 0 1-.11.391h-.001a2.84 2.84 0 0 1-.392.482c-.249.256-.625.58-1.163.896-1.08.638-2.776 1.23-5.334 1.23-.673 0-1.286-.041-1.846-.113a.75.75 0 0 1 .192-1.487c.492.063 1.042.1 1.654.1 2.317 0 3.746-.533 4.572-1.021.31-.178.596-.397.849-.65l.079-.085V10.74l-5.208 2.2a.75.75 0 0 1-.584 0L5.75 10.424v3.17c.502.129.96.391 1.327.758.579.578.923 1.41.923 2.428v4.5a.761.761 0 0 1-.345.634 2.157 2.157 0 0 1-.21.117 3.923 3.923 0 0 1-.52.213A6.121 6.121 0 0 1 5 22.532a6.092 6.092 0 0 1-1.925-.288 4.065 4.065 0 0 1-.52-.213 1.816 1.816 0 0 1-.22-.124.757.757 0 0 1-.335-.624v-4.5c0-1.02.344-1.85.923-2.43a2.904 2.904 0 0 1 1.327-.757V9.793L.458 8.19a.75.75 0 0 1 0-1.38l11.25-4.75a.75.75 0 0 1 .584 0ZM12 11.436 21.322 7.5 12 3.564 2.678 7.5ZM5 15c-.377 0-.745.141-1.017.413-.265.265-.483.7-.483 1.368v4.022c.299.105.797.228 1.5.228s1.201-.123 1.5-.228V16.78c0-.669-.218-1.103-.483-1.368A1.433 1.433 0 0 0 5 15Z",
        }),
      },
    };
  }),
  s3 = c("MoveToBottomIcon", "octicon octicon-move-to-bottom", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.47 10.78a.749.749 0 0 0 1.06 0l3.75-3.75a.749.749 0 1 0-1.06-1.06L8.75 8.439V1.75a.75.75 0 0 0-1.5 0v6.689L4.78 5.97a.749.749 0 1 0-1.06 1.06l3.75 3.75ZM3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4 21.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Zm.97-11.28a.749.749 0 0 1 1.06 0L11 14.939V2.75a.75.75 0 0 1 1.5 0v12.189l4.97-4.969a.749.749 0 1 1 1.06 1.06l-6.25 6.25a.749.749 0 0 1-1.06 0l-6.25-6.25a.749.749 0 0 1 0-1.06Z",
        }),
      },
    };
  }),
  M3 = c("MoveToEndIcon", "octicon octicon-move-to-end", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m10.78 8.53-3.75 3.75a.749.749 0 1 1-1.06-1.06l2.469-2.47H1.75a.75.75 0 0 1 0-1.5h6.689L5.97 4.78a.749.749 0 1 1 1.06-1.06l3.75 3.75a.749.749 0 0 1 0 1.06ZM13 12.25v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M11.22 5.22a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06l-6.25 6.25a.749.749 0 1 1-1.06-1.06l4.969-4.97H1.75a.75.75 0 0 1 0-1.5h14.439L11.22 6.28a.749.749 0 0 1 0-1.06Zm10.03-1.47a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  f3 = c("MoveToStartIcon", "octicon octicon-move-to-start", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.22 7.47a.749.749 0 0 0 0 1.06l3.75 3.75a.749.749 0 1 0 1.06-1.06L7.561 8.75h6.689a.75.75 0 0 0 0-1.5H7.561l2.469-2.47a.749.749 0 1 0-1.06-1.06L5.22 7.47ZM3 3.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.78 18.78a.749.749 0 0 1-1.06 0l-6.25-6.25a.749.749 0 0 1 0-1.06l6.25-6.25a.749.749 0 1 1 1.06 1.06l-4.969 4.97H22.25a.75.75 0 0 1 0 1.5H7.811l4.969 4.97a.749.749 0 0 1 0 1.06ZM2.75 3.75a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  A3 = c("MoveToTopIcon", "octicon octicon-move-to-top", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.53 1.22a.749.749 0 0 0-1.06 0L3.72 4.97a.749.749 0 1 0 1.06 1.06l2.47-2.469v6.689a.75.75 0 0 0 1.5 0V3.561l2.47 2.469a.749.749 0 1 0 1.06-1.06L8.53 1.22ZM3.75 13a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4 21.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75ZM5.22 9.53a.749.749 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 1 1-1.06 1.06l-4.97-4.969V16.75a.75.75 0 0 1-1.5 0V4.561L6.28 9.53a.749.749 0 0 1-1.06 0Z",
        }),
      },
    };
  }),
  E3 = c("MultiSelectIcon", "octicon octicon-multi-select", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.75 7.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm-4-10h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10.314-3.082L11.07 2.417A.25.25 0 0 1 11.256 2h4.488a.25.25 0 0 1 .186.417l-2.244 2.5a.25.25 0 0 1-.372 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M8.75 11.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5Zm0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5Zm-5-12h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1 0-1.5ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.309 7.918l-2.245-2.501A.25.25 0 0 1 17.25 5h4.49a.25.25 0 0 1 .185.417l-2.244 2.5a.25.25 0 0 1-.372 0Z",
        }),
      },
    };
  }),
  w3 = c("MuteIcon", "octicon octicon-mute", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 2.75v10.5a.751.751 0 0 1-1.238.57L3.473 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.722l3.29-2.82A.75.75 0 0 1 8 2.75Zm3.28 2.47L13 6.94l1.72-1.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L14.06 8l1.72 1.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L13 9.06l-1.72 1.72a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L11.94 8l-1.72-1.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-7.042 1.1a.752.752 0 0 1-.488.18h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62V4.38Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805A.75.75 0 0 1 12 3.75ZM6.255 9.305a.748.748 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86V5.445ZM16.28 8.22a.75.75 0 1 0-1.06 1.06L17.94 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06L19 13.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L20.06 12l2.72-2.72a.75.75 0 0 0-1.06-1.06L19 10.94l-2.72-2.72Z",
        }),
      },
    };
  }),
  g3 = c("NoEntryIcon", "octicon octicon-no-entry", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.25 7.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z",
          }),
          a.createElement("path", {
            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm15.75.75H5.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5Z",
        }),
      },
    };
  }),
  V3 = c("NoEntryFillIcon", "octicon octicon-no-entry-fill", function () {
    return {
      12: {
        width: 12,
        path: a.createElement("path", {
          d: "M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm3 5H3v2h6Z",
        }),
      },
    };
  }),
  H3 = c("NorthStarIcon", "octicon octicon-north-star", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939V.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.5 1.25a.75.75 0 0 0-1.5 0v8.69L6.447 5.385a.75.75 0 1 0-1.061 1.06L9.94 11H1.25a.75.75 0 0 0 0 1.5h8.69l-4.554 4.553a.75.75 0 0 0 1.06 1.061L11 13.561v8.689a.75.75 0 0 0 1.5 0v-8.69l4.553 4.554a.75.75 0 0 0 1.061-1.06L13.561 12.5h8.689a.75.75 0 0 0 0-1.5h-8.69l4.554-4.553a.75.75 0 1 0-1.06-1.061L12.5 9.939V1.25Z",
        }),
      },
    };
  }),
  I3 = c("NoteIcon", "octicon octicon-note", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z",
          }),
          a.createElement("path", {
            d: "M5 8.75A.75.75 0 0 1 5.75 8h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 8.75Zm0 4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z",
          })
        ),
      },
    };
  }),
  C3 = c("NumberIcon", "octicon octicon-number", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9 4.75A.75.75 0 0 1 9.75 4h4a.75.75 0 0 1 .53 1.28l-1.89 1.892c.312.076.604.18.867.319.742.391 1.244 1.063 1.244 2.005 0 .653-.231 1.208-.629 1.627-.386.408-.894.653-1.408.777-1.01.243-2.225.063-3.124-.527a.751.751 0 0 1 .822-1.254c.534.35 1.32.474 1.951.322.306-.073.53-.201.67-.349.129-.136.218-.32.218-.596 0-.308-.123-.509-.444-.678-.373-.197-.98-.318-1.806-.318a.75.75 0 0 1-.53-1.28l1.72-1.72H9.75A.75.75 0 0 1 9 4.75Zm-3.587 5.763c-.35-.05-.77.113-.983.572a.75.75 0 1 1-1.36-.632c.508-1.094 1.589-1.565 2.558-1.425 1 .145 1.872.945 1.872 2.222 0 1.433-1.088 2.192-1.79 2.681-.308.216-.571.397-.772.573H7a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75c0-.69.3-1.211.67-1.61.348-.372.8-.676 1.15-.92.8-.56 1.18-.904 1.18-1.474 0-.473-.267-.69-.587-.737ZM5.604.089A.75.75 0 0 1 6 .75v4.77h.711a.75.75 0 0 1 0 1.5H3.759a.75.75 0 0 1 0-1.5H4.5V2.15l-.334.223a.75.75 0 0 1-.832-1.248l1.5-1a.75.75 0 0 1 .77-.037Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M13.003 7.754a.75.75 0 0 1 .75-.75h5.232a.75.75 0 0 1 .53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483.905.477 1.504 1.284 1.504 2.418 0 .966-.471 1.75-1.172 2.27-.687.511-1.587.77-2.521.77-1.367 0-2.274-.528-2.667-.756a.75.75 0 0 1 .755-1.297c.331.193.953.553 1.912.553.673 0 1.243-.188 1.627-.473.37-.275.566-.635.566-1.067 0-.5-.219-.836-.703-1.091-.538-.284-1.375-.443-2.471-.443a.75.75 0 0 1-.53-1.28l2.643-2.644h-3.421a.75.75 0 0 1-.75-.75ZM7.88 15.215a1.4 1.4 0 0 0-1.446.83.75.75 0 0 1-1.37-.61 2.899 2.899 0 0 1 2.986-1.71c.589.06 1.139.323 1.557.743.434.446.685 1.058.685 1.778 0 1.641-1.254 2.437-2.12 2.986-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.799 1.337-2.63 2.243-3.21 1.032-.659 1.55-1.031 1.55-1.8 0-.355-.116-.584-.26-.732a1.071 1.071 0 0 0-.652-.298Zm.234-13.121a.75.75 0 0 1 .386.656V9h1.252a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5H7V4.103l-.853.533a.749.749 0 1 1-.795-1.272l2-1.25a.749.749 0 0 1 .762-.02Z",
        }),
      },
    };
  }),
  L3 = c("OrganizationIcon", "octicon octicon-organization", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM5.5 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM6.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 12.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm.75-4.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 5.75A.75.75 0 0 1 9.75 5h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 9 5.75ZM13.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Zm-.75-2.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM13.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z",
          }),
          a.createElement("path", {
            d: "M2 20V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17c0 .173-.022.34-.063.5H20a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.2-.4l-.5-.375a.75.75 0 0 1 .9-1.2l.5.375c.504.378.8.97.8 1.6v8a2 2 0 0 1-2 2h-3.562a.767.767 0 0 1-.166-.018c-.089.012-.18.018-.272.018h-3.75a.75.75 0 0 1-.75-.75V19h-3v2.25a.75.75 0 0 1-.75.75H4a2 2 0 0 1-2-2Zm2 .5h3v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25h3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Z",
          })
        ),
      },
    };
  }),
  y3 = c("PackageIcon", "octicon octicon-package", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z",
        }),
      },
    };
  }),
  b3 = c(
    "PackageDependenciesIcon",
    "octicon octicon-package-dependencies",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M6.122.392a1.75 1.75 0 0 1 1.756 0l5.25 3.045c.54.313.872.89.872 1.514V7.25a.75.75 0 0 1-1.5 0V5.677L7.75 8.432v6.384a1 1 0 0 1-1.502.865L.872 12.563A1.75 1.75 0 0 1 0 11.049V4.951c0-.624.332-1.2.872-1.514ZM7.125 1.69a.248.248 0 0 0-.25 0l-4.63 2.685L7 7.133l4.755-2.758ZM1.5 11.049a.25.25 0 0 0 .125.216l4.625 2.683V8.432L1.5 5.677Zm11.672-.282L11.999 12h3.251a.75.75 0 0 1 0 1.5h-3.251l1.173 1.233a.75.75 0 1 1-1.087 1.034l-2.378-2.5a.75.75 0 0 1 0-1.034l2.378-2.5a.75.75 0 0 1 1.087 1.034Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M9.126.64a1.748 1.748 0 0 1 1.75 0l8.25 4.762c.103.06.199.128.286.206a.75.75 0 0 1 .554.96c.023.113.035.23.035.35v3.332a.75.75 0 0 1-1.5 0V7.64l-7.75 4.474V22.36a.75.75 0 0 1-1.125.65l-8.75-5.052a1.75 1.75 0 0 1-.875-1.515V6.917c0-.119.012-.236.035-.35a.749.749 0 0 1 .554-.96c.088-.078.184-.146.286-.205L9.126.639Zm.875 10.173v.001l7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0L2.251 6.34Zm-8.5-3.175v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z",
            }),
            a.createElement("path", {
              d: "m16.617 17.5 2.895-2.702a.75.75 0 0 0-1.024-1.096l-4.285 4a.75.75 0 0 0 0 1.096l4.285 4a.75.75 0 1 0 1.024-1.096L16.617 19h6.633a.75.75 0 0 0 0-1.5h-6.633Z",
            })
          ),
        },
      };
    }
  ),
  S3 = c(
    "PackageDependentsIcon",
    "octicon octicon-package-dependents",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement("path", {
            d: "M6.122.392a1.75 1.75 0 0 1 1.756 0l5.25 3.045c.54.313.872.89.872 1.514V7.25a.75.75 0 0 1-1.5 0V5.677L7.75 8.432v6.384a1 1 0 0 1-1.502.865L.872 12.563A1.75 1.75 0 0 1 0 11.049V4.951c0-.624.332-1.2.872-1.514ZM7.125 1.69a.248.248 0 0 0-.25 0l-4.63 2.685L7 7.133l4.755-2.758ZM1.5 11.049a.25.25 0 0 0 .125.216l4.625 2.683V8.432L1.5 5.677Zm10.828 3.684 1.173-1.233H10.25a.75.75 0 0 1 0-1.5h3.251l-1.173-1.233a.75.75 0 1 1 1.087-1.034l2.378 2.5a.75.75 0 0 1 0 1.034l-2.378 2.5a.75.75 0 0 1-1.087-1.034Z",
          }),
        },
        24: {
          width: 24,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M9.126.64a1.748 1.748 0 0 1 1.75 0l8.25 4.762c.103.06.199.128.286.206a.75.75 0 0 1 .554.96c.023.113.035.23.035.35v3.332a.75.75 0 0 1-1.5 0V7.64l-7.75 4.474V22.36a.75.75 0 0 1-1.125.65l-8.75-5.052a1.75 1.75 0 0 1-.875-1.515V6.917c0-.119.012-.236.035-.35a.749.749 0 0 1 .554-.96c.088-.078.184-.146.286-.205L9.126.639Zm.875 10.173v.001l7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0L2.251 6.34Zm-8.5-3.175v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z",
            }),
            a.createElement("path", {
              d: "m21.347 17.5-2.894-2.702a.75.75 0 1 1 1.023-1.096l4.286 4a.75.75 0 0 1 0 1.096l-4.286 4a.75.75 0 1 1-1.023-1.096L21.347 19h-6.633a.75.75 0 0 1 0-1.5h6.633Z",
            })
          ),
        },
      };
    }
  ),
  k3 = c("PaintbrushIcon", "octicon octicon-paintbrush", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11.134 1.535c.7-.509 1.416-.942 2.076-1.155.649-.21 1.463-.267 2.069.34.603.601.568 1.411.368 2.07-.202.668-.624 1.39-1.125 2.096-1.011 1.424-2.496 2.987-3.775 4.249-1.098 1.084-2.132 1.839-3.04 2.3a3.744 3.744 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861-.614.177-1.294.287-1.914.357A21.151 21.151 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008-.742.007v-.054a21.25 21.25 0 0 1 .13-2.284c.067-.647.187-1.287.358-1.914.17-.591.43-1.226.86-1.657a3.746 3.746 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982 1.271-1.255 2.833-2.75 4.245-3.777ZM1.62 13.089c-.051.464-.086.929-.104 1.395.466-.018.932-.053 1.396-.104a10.511 10.511 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.515 10.515 0 0 0-.309 1.67Zm10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833.47-.662.78-1.227.912-1.662.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027-.432.14-.995.462-1.655.942Zm-4.832 7.266-.001.001a9.859 9.859 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192Z",
        }),
      },
    };
  }),
  F3 = c("PaperAirplaneIcon", "octicon octicon-paper-airplane", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M.989 8 .064 2.68a1.342 1.342 0 0 1 1.85-1.462l13.402 5.744a1.13 1.13 0 0 1 0 2.076L1.913 14.782a1.343 1.343 0 0 1-1.85-1.463L.99 8Zm.603-5.288L2.38 7.25h4.87a.75.75 0 0 1 0 1.5H2.38l-.788 4.538L13.929 8Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1.513 1.96a1.374 1.374 0 0 1 1.499-.21l19.335 9.215a1.147 1.147 0 0 1 0 2.07L3.012 22.25a1.374 1.374 0 0 1-1.947-1.46L2.49 12 1.065 3.21a1.375 1.375 0 0 1 .448-1.25Zm2.375 10.79-1.304 8.042L21.031 12 2.584 3.208l1.304 8.042h7.362a.75.75 0 0 1 0 1.5Z",
        }),
      },
    };
  }),
  T3 = c("PaperclipIcon", "octicon octicon-paperclip", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M12.212 3.02a1.753 1.753 0 0 0-2.478.003l-5.83 5.83a3.007 3.007 0 0 0-.88 2.127c0 .795.315 1.551.88 2.116.567.567 1.333.89 2.126.89.79 0 1.548-.321 2.116-.89l5.48-5.48a.75.75 0 0 1 1.061 1.06l-5.48 5.48a4.492 4.492 0 0 1-3.177 1.33c-1.2 0-2.345-.487-3.187-1.33a4.483 4.483 0 0 1-1.32-3.177c0-1.195.475-2.341 1.32-3.186l5.83-5.83a3.25 3.25 0 0 1 5.553 2.297c0 .863-.343 1.691-.953 2.301L7.439 12.39c-.375.377-.884.59-1.416.593a1.998 1.998 0 0 1-1.412-.593 1.992 1.992 0 0 1 0-2.828l5.48-5.48a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-5.48 5.48a.492.492 0 0 0 0 .707.499.499 0 0 0 .352.154.51.51 0 0 0 .356-.154l5.833-5.827a1.755 1.755 0 0 0 0-2.481Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M19.187 3.588a2.75 2.75 0 0 0-3.889 0L5.575 13.31a4.5 4.5 0 0 0 6.364 6.364l8.662-8.662a.75.75 0 0 1 1.061 1.06L13 20.735a6 6 0 0 1-8.485-8.485l9.723-9.723a4.247 4.247 0 0 1 4.124-1.139 4.247 4.247 0 0 1 3.025 3.025 4.247 4.247 0 0 1-1.139 4.124l-9.193 9.193a2.64 2.64 0 0 1-1.858.779 2.626 2.626 0 0 1-1.854-.779c-.196-.196-.338-.47-.43-.726a2.822 2.822 0 0 1-.168-.946c0-.7.284-1.373.775-1.864l8.132-8.131a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-8.131 8.132a1.148 1.148 0 0 0-.336.803c.003.204.053.405.146.587.01.018.018.028.02.032.22.215.501.332.786.332.29 0 .58-.121.798-.34l9.192-9.192a2.75 2.75 0 0 0 0-3.89Z",
        }),
      },
    };
  }),
  P3 = c("PasteIcon", "octicon octicon-paste", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.626 3.533a.249.249 0 0 0-.126.217v9.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-9.5a.249.249 0 0 0-.126-.217.75.75 0 0 1 .752-1.298c.541.313.874.89.874 1.515v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-.625.333-1.202.874-1.515a.75.75 0 0 1 .752 1.298ZM5.75 1h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 4.75v-3A.75.75 0 0 1 5.75 1Zm.75 3h3V2.5h-3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.962 2.513a.75.75 0 0 1-.475.949l-.816.272a.25.25 0 0 0-.171.237V21.25c0 .138.112.25.25.25h14.5a.25.25 0 0 0 .25-.25V3.97a.25.25 0 0 0-.17-.236l-.817-.272a.75.75 0 0 1 .474-1.424l.816.273A1.751 1.751 0 0 1 21 3.97v17.28A1.75 1.75 0 0 1 19.25 23H4.75A1.75 1.75 0 0 1 3 21.25V3.97a1.75 1.75 0 0 1 1.197-1.66l.816-.272a.75.75 0 0 1 .949.475Z",
          }),
          a.createElement("path", {
            d: "M7 1.75C7 .784 7.784 0 8.75 0h6.5C16.216 0 17 .784 17 1.75v1.5A1.75 1.75 0 0 1 15.25 5h-6.5A1.75 1.75 0 0 1 7 3.25Zm1.75-.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  D3 = c("PencilIcon", "octicon octicon-pencil", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z",
        }),
      },
    };
  }),
  x3 = c("PeopleIcon", "octicon octicon-people", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.499-.044 9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8Z",
        }),
      },
    };
  }),
  R3 = c("PersonIcon", "octicon octicon-person", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z",
        }),
      },
    };
  }),
  O3 = c("PersonAddIcon", "octicon octicon-person-add", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.9 8.548h-.001a5.528 5.528 0 0 1 3.1 4.659.75.75 0 1 1-1.498.086A4.01 4.01 0 0 0 5.5 9.5a4.01 4.01 0 0 0-4.001 3.793.75.75 0 1 1-1.498-.085 5.527 5.527 0 0 1 3.1-4.66 3.5 3.5 0 1 1 4.799 0ZM13.25 0a.75.75 0 0 1 .75.75V2h1.25a.75.75 0 0 1 0 1.5H14v1.25a.75.75 0 0 1-1.5 0V3.5h-1.25a.75.75 0 0 1 0-1.5h1.25V.75a.75.75 0 0 1 .75-.75ZM5.5 4a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 4Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M4 9.5a5 5 0 1 1 7.916 4.062 7.973 7.973 0 0 1 5.018 7.166.75.75 0 1 1-1.499.044 6.469 6.469 0 0 0-12.932 0 .75.75 0 0 1-1.499-.044 7.972 7.972 0 0 1 5.059-7.181A4.994 4.994 0 0 1 4 9.5ZM9 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm10.25-5a.75.75 0 0 1 .75.75V4h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V5.5h-2.25a.75.75 0 0 1 0-1.5h2.25V1.75a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  N3 = c("PersonFillIcon", "octicon octicon-person-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.243 4.757a3.757 3.757 0 1 1 5.851 3.119 6.006 6.006 0 0 1 3.9 5.339.75.75 0 0 1-.715.784H2.721a.75.75 0 0 1-.714-.784 6.006 6.006 0 0 1 3.9-5.34 3.753 3.753 0 0 1-1.664-3.118Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 2.5a5.25 5.25 0 0 0-2.519 9.857 9.005 9.005 0 0 0-6.477 8.37.75.75 0 0 0 .727.773H20.27a.75.75 0 0 0 .727-.772 9.005 9.005 0 0 0-6.477-8.37A5.25 5.25 0 0 0 12 2.5Z",
        }),
      },
    };
  }),
  B3 = c("PinIcon", "octicon octicon-pin", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.08 3.08 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.748.748 0 0 1-.332 1.265.75.75 0 0 1-.729-.205L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.08 3.08 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826ZM5.92 1.866a.253.253 0 0 0-.183-.142.251.251 0 0 0-.221.07L1.794 5.516a.251.251 0 0 0-.07.221c.015.08.068.149.142.183l1.328.613A4.582 4.582 0 0 1 5.73 9.63l.584 2.454a.251.251 0 0 0 .42.12l5.47-5.47a.25.25 0 0 0-.12-.42L9.63 5.73a4.583 4.583 0 0 1-3.098-2.537Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.886 1.553a1.75 1.75 0 0 1 2.869.604l.633 1.629a5.667 5.667 0 0 0 3.725 3.395l3.959 1.131a1.749 1.749 0 0 1 .757 2.92L16.06 15l5.594 5.595a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L15 16.061l-3.768 3.768a1.749 1.749 0 0 1-2.92-.757l-1.131-3.96a5.665 5.665 0 0 0-3.395-3.724l-1.63-.633a1.75 1.75 0 0 1-.603-2.869Zm6.589 12.912 4.293-4.294a.25.25 0 0 0-.108-.417L14.7 8.623A7.165 7.165 0 0 1 9.99 4.33L9.357 2.7a.25.25 0 0 0-.41-.086L2.614 8.946a.25.25 0 0 0 .086.41l1.63.634a7.167 7.167 0 0 1 4.294 4.71l1.13 3.96a.25.25 0 0 0 .417.108l4.294-4.293Z",
        }),
      },
    };
  }),
  W3 = c("PlayIcon", "octicon octicon-play", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z",
          }),
          a.createElement("path", {
            d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5Z",
          })
        ),
      },
    };
  }),
  z3 = c("PlugIcon", "octicon octicon-plug", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4 8H2.5a1 1 0 0 0-1 1v5.25a.75.75 0 0 1-1.5 0V9a2.5 2.5 0 0 1 2.5-2.5H4V5.133a1.75 1.75 0 0 1 1.533-1.737l2.831-.353.76-.913c.332-.4.825-.63 1.344-.63h.782c.966 0 1.75.784 1.75 1.75V4h2.25a.75.75 0 0 1 0 1.5H13v4h2.25a.75.75 0 0 1 0 1.5H13v.75a1.75 1.75 0 0 1-1.75 1.75h-.782c-.519 0-1.012-.23-1.344-.63l-.761-.912-2.83-.354A1.75 1.75 0 0 1 4 9.867Zm6.276-4.91-.95 1.14a.753.753 0 0 1-.483.265l-3.124.39a.25.25 0 0 0-.219.248v4.734c0 .126.094.233.219.249l3.124.39a.752.752 0 0 1 .483.264l.95 1.14a.25.25 0 0 0 .192.09h.782a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-.782a.25.25 0 0 0-.192.09Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7 11.5H2.938c-.794 0-1.438.644-1.438 1.437v8.313a.75.75 0 0 1-1.5 0v-8.312A2.939 2.939 0 0 1 2.937 10H7V6.151c0-.897.678-1.648 1.57-1.74l6.055-.626 1.006-1.174A1.752 1.752 0 0 1 16.96 2h1.29c.966 0 1.75.784 1.75 1.75V6h3.25a.75.75 0 0 1 0 1.5H20V14h3.25a.75.75 0 0 1 0 1.5H20v2.25a1.75 1.75 0 0 1-1.75 1.75h-1.29a1.75 1.75 0 0 1-1.329-.611l-1.006-1.174-6.055-.627A1.749 1.749 0 0 1 7 15.348Zm9.77-7.913v.001l-1.201 1.4a.75.75 0 0 1-.492.258l-6.353.657a.25.25 0 0 0-.224.249v9.196a.25.25 0 0 0 .224.249l6.353.657c.191.02.368.112.493.258l1.2 1.401a.252.252 0 0 0 .19.087h1.29a.25.25 0 0 0 .25-.25v-14a.25.25 0 0 0-.25-.25h-1.29a.252.252 0 0 0-.19.087Z",
        }),
      },
    };
  }),
  $3 = c("PlusIcon", "octicon octicon-plus", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  _3 = c("PlusCircleIcon", "octicon octicon-plus-circle", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12.75 7.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  U3 = c("ProjectIcon", "octicon octicon-project", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6ZM12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6Zm4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0v-9.5Z",
          }),
          a.createElement("path", {
            d: "M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25Z",
          })
        ),
      },
    };
  }),
  j3 = c("ProjectRoadmapIcon", "octicon octicon-project-roadmap", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM5 4.75A.75.75 0 0 1 5.75 4h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 4.75ZM6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z",
          }),
          a.createElement("path", {
            d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.75 7a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM7 11.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75ZM9.75 15a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z",
          }),
          a.createElement("path", {
            d: "M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  X3 = c("ProjectSymlinkIcon", "octicon octicon-project-symlink", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16h-8.5a.75.75 0 0 1 0-1.5h8.5a.25.25 0 0 0 .25-.25V6.5h-13v1.75a.75.75 0 0 1-1.5 0ZM6.5 5h8V1.75a.25.25 0 0 0-.25-.25H6.5Zm-5 0H5V1.5H1.75a.25.25 0 0 0-.25.25Z",
          }),
          a.createElement("path", {
            d: "M1.5 13.737a2.25 2.25 0 0 1 2.262-2.25L4 11.49v1.938c0 .218.26.331.42.183l2.883-2.677a.25.25 0 0 0 0-.366L4.42 7.89a.25.25 0 0 0-.42.183V9.99l-.23-.001A3.75 3.75 0 0 0 0 13.738v1.012a.75.75 0 0 0 1.5 0v-1.013Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H9.75a.75.75 0 0 1 0-1.5h10.5a.25.25 0 0 0 .25-.25V9h-17v3A.75.75 0 0 1 2 12ZM9 7.5h11.5V3.75a.25.25 0 0 0-.25-.25H9Zm-5.5 0h4v-4H3.75a.25.25 0 0 0-.25.25Z",
          }),
          a.createElement("path", {
            d: "m9.308 14.5-2.104-2.236a.75.75 0 1 1 1.092-1.028l3.294 3.5a.75.75 0 0 1 0 1.028l-3.294 3.5a.75.75 0 1 1-1.092-1.028L9.308 16H6.09a2.59 2.59 0 0 0-2.59 2.59v2.66a.75.75 0 0 1-1.5 0v-2.66a4.09 4.09 0 0 1 4.09-4.09h3.218Z",
          })
        ),
      },
    };
  }),
  G3 = c("PulseIcon", "octicon octicon-pulse", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M9.002 2.5a.75.75 0 0 1 .691.464l6.302 15.305 2.56-6.301a.75.75 0 0 1 .695-.468h4a.75.75 0 0 1 0 1.5h-3.495l-3.06 7.532a.75.75 0 0 1-1.389.004L8.997 5.21l-3.054 7.329A.75.75 0 0 1 5.25 13H.75a.75.75 0 0 1 0-1.5h4l3.558-8.538a.75.75 0 0 1 .694-.462Z",
        }),
      },
    };
  }),
  q3 = c("QuestionIcon", "octicon octicon-question", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.97 8.265a1.45 1.45 0 0 0-.487.57.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215-.19.183-.399.358-.579.508l-.147.123a4.329 4.329 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736.22-.28.486-.517.718-.714l.183-.153.001-.001c.172-.143.324-.27.47-.412.368-.355.569-.676.569-1.136a.953.953 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  Y3 = c("QuoteIcon", "octicon octicon-quote", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.75 2.5h10.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Zm4 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2.5 7.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3 6.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.25Zm5 6.063a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75Zm0 5.937a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75ZM3.75 11a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z",
        }),
      },
    };
  }),
  K3 = c("ReadIcon", "octicon octicon-read", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.115.65a1.752 1.752 0 0 1 1.77 0l6.25 3.663c.536.314.865.889.865 1.51v6.427A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25V5.823c0-.621.33-1.196.865-1.51Zm1.011 1.293a.252.252 0 0 0-.252 0l-5.72 3.353L6.468 7.76a2.748 2.748 0 0 1 3.066 0l4.312-2.464-5.719-3.353ZM13.15 12.5 8.772 9.06a1.25 1.25 0 0 0-1.544 0L2.85 12.5Zm1.35-5.85-3.687 2.106 3.687 2.897ZM5.187 8.756 1.5 6.65v5.003Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10.89 1.767a2.252 2.252 0 0 1 2.22 0l9.75 5.525A2.25 2.25 0 0 1 24 9.249v9.501A2.25 2.25 0 0 1 21.75 21H2.25A2.25 2.25 0 0 1 0 18.75v-9.5c0-.81.435-1.558 1.14-1.958Zm1.48 1.305a.75.75 0 0 0-.74 0l-9.316 5.28 7.41 4.233a3.75 3.75 0 0 1 4.553 0l7.41-4.234-9.317-5.28ZM20.65 19.5l-7.26-5.704a2.25 2.25 0 0 0-2.78 0L3.35 19.5Zm1.85-9.886-6.95 3.971 6.663 5.236c.089.07.161.159.21.26a.745.745 0 0 0 .077-.331ZM8.45 13.585 1.5 9.614v9.136c0 .119.028.23.076.33a.744.744 0 0 1 .21-.259Z",
        }),
      },
    };
  }),
  Q3 = c("RelFilePathIcon", "octicon octicon-rel-file-path", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.94 3.045a.75.75 0 0 0-1.38-.59l-4.5 10.5a.75.75 0 1 0 1.38.59l4.5-10.5ZM5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M19.564 4.42a.75.75 0 0 0-1.378-.59l-6.75 15.75a.75.75 0 0 0 1.378.59l6.75-15.75ZM7 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
        }),
      },
    };
  }),
  J3 = c("ReplyIcon", "octicon octicon-reply", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.78 1.97a.75.75 0 0 1 0 1.06L3.81 6h6.44A4.75 4.75 0 0 1 15 10.75v2.5a.75.75 0 0 1-1.5 0v-2.5a3.25 3.25 0 0 0-3.25-3.25H3.81l2.97 2.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L1.47 7.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10.53 5.03a.75.75 0 1 0-1.06-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 1 0 1.06-1.06L5.56 11.5H17a3.248 3.248 0 0 1 3.25 3.248v4.502a.75.75 0 0 0 1.5 0v-4.502A4.748 4.748 0 0 0 17 10H5.56l4.97-4.97Z",
        }),
      },
    };
  }),
  a6 = c("RepoIcon", "octicon octicon-repo", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z",
          }),
          a.createElement("path", {
            d: "M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z",
          })
        ),
      },
    };
  }),
  t6 = c("RepoCloneIcon", "octicon octicon-repo-clone", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 1v9h10v3c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h7v1Zm13-1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-3v1h-1V8h-1c-.55 0-1-.45-1-1V0Zm-4 11H1v2h2v-1h3v1h5Zm4-6V1h-4v4Zm0 2V6h-3v1ZM4 3H3V2h1Zm0 2H3V4h1Zm0 2H3V6h1Zm7 0V6h-1v1ZM3 8h1v1H3Z",
        }),
      },
    };
  }),
  e6 = c("RepoDeletedIcon", "octicon octicon-repo-deleted", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.492 2.492 0 0 1 3.5 9h4.75a.75.75 0 0 1 0 1.5H3.5a1 1 0 1 0 0 2h4.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5v-9Z",
          }),
          a.createElement("path", {
            d: "M11.28 10.22a.75.75 0 1 0-1.06 1.06L11.94 13l-1.72 1.72a.75.75 0 1 0 1.06 1.06L13 14.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L14.06 13l1.72-1.72a.75.75 0 1 0-1.06-1.06L13 11.94l-1.72-1.72Z",
          })
        ),
      },
    };
  }),
  n6 = c("RepoForkedIcon", "octicon octicon-repo-forked", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.75 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM15 4.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-12.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5ZM12 21a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 12 21Zm6.25-14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 6.5Z",
          }),
          a.createElement("path", {
            d: "M6.5 7.75v1A2.25 2.25 0 0 0 8.75 11h6.5a2.25 2.25 0 0 0 2.25-2.25v-1H19v1a3.75 3.75 0 0 1-3.75 3.75h-6.5A3.75 3.75 0 0 1 5 8.75v-1Z",
          }),
          a.createElement("path", { d: "M11.25 16.25v-5h1.5v5h-1.5Z" })
        ),
      },
    };
  }),
  c6 = c("RepoLockedIcon", "octicon octicon-repo-locked", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.492 2.492 0 0 1 3.5 9h2.75a.75.75 0 0 1 0 1.5H3.5a1 1 0 1 0 0 2h2.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5v-9Z",
          }),
          a.createElement("path", {
            d: "M9 10.168V9a3 3 0 1 1 6 0v1.168c.591.281 1 .884 1 1.582v2.5A1.75 1.75 0 0 1 14.25 16h-4.5A1.75 1.75 0 0 1 8 14.25v-2.5c0-.698.409-1.3 1-1.582ZM13.5 10V9a1.5 1.5 0 0 0-3 0v1Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 2.75A2.75 2.75 0 0 1 4.75 0h14.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V1.5H4.75c-.69 0-1.25.56-1.25 1.25v12.651A2.987 2.987 0 0 1 5 15h6.25a.75.75 0 0 1 0 1.5H5A1.5 1.5 0 0 0 3.5 18v1.25c0 .69.56 1.25 1.25 1.25h6a.75.75 0 0 1 0 1.5h-6A2.75 2.75 0 0 1 2 19.25V2.75Z",
          }),
          a.createElement("path", {
            d: "M15 14.5a3.5 3.5 0 1 1 7 0V16h.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 22.25 24h-7.5A1.75 1.75 0 0 1 13 22.25v-4.5c0-.966.784-1.75 1.75-1.75H15Zm3.5-2a2 2 0 0 0-2 2V16h4v-1.5a2 2 0 0 0-2-2Z",
          })
        ),
      },
    };
  }),
  o6 = c("RepoPullIcon", "octicon octicon-repo-pull", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11 7h1v6c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2h-1V1H2v9h9Zm2 1V6H7V4h6V2l3 3Zm-2 3H1v2h2v-1h3v1h5ZM4 2v1H3V2Zm0 2v1H3V4Zm0 2v1H3V6ZM3 9V8h1v1Z",
        }),
      },
    };
  }),
  l6 = c("RepoPushIcon", "octicon octicon-repo-push", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.75 0A2.75 2.75 0 0 0 2 2.75v16.5A2.75 2.75 0 0 0 4.75 22h11a.75.75 0 0 0 0-1.5h-11c-.69 0-1.25-.56-1.25-1.25V18A1.5 1.5 0 0 1 5 16.5h7.25a.75.75 0 0 0 0-1.5H5c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H18.5v7a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75H4.75Z",
          }),
          a.createElement("path", {
            d: "m20 13.903 2.202 2.359a.75.75 0 0 0 1.096-1.024l-3.5-3.75a.75.75 0 0 0-1.096 0l-3.5 3.75a.75.75 0 1 0 1.096 1.024l2.202-2.36v9.348a.75.75 0 0 0 1.5 0v-9.347Z",
          })
        ),
      },
    };
  }),
  r6 = c("RepoTemplateIcon", "octicon octicon-repo-template", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.75 0A2.75 2.75 0 0 0 3 2.75v1a.75.75 0 0 0 1.5 0v-1c0-.69.56-1.25 1.25-1.25h1a.75.75 0 0 0 0-1.5h-1Zm4 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm7.5 0a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3ZM4.5 6.5a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V6.5Zm16.5 0a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V6.5ZM4.5 13.25a.75.75 0 0 0-1.5 0v5.5a3.25 3.25 0 0 0 1.95 2.98.75.75 0 1 0 .6-1.375A1.75 1.75 0 0 1 4.5 18.75V18A1.5 1.5 0 0 1 6 16.5h.75a.75.75 0 0 0 0-1.5H6c-.546 0-1.059.146-1.5.401V13.25Zm16.5 0a.75.75 0 0 0-1.5 0V15h-2.25a.75.75 0 0 0 0 1.5h2.25v4h-5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75v-8ZM9.75 15a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm-2.353 8.461A.25.25 0 0 1 7 23.26v-5.01a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46Z",
        }),
      },
    };
  }),
  h6 = c("ReportIcon", "octicon octicon-report", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.586a.25.25 0 0 0-.177.073l-3.5 3.5A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.427-3.427A1.75 1.75 0 0 1 11.164 17h9.586a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25ZM12 6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 12 6Zm0 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
    };
  }),
  i6 = c("RocketIcon", "octicon octicon-rocket", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M20.322.75h1.176a1.75 1.75 0 0 1 1.75 1.749v1.177a10.75 10.75 0 0 1-2.925 7.374l-1.228 1.304a23.699 23.699 0 0 1-1.596 1.542v5.038c0 .615-.323 1.184-.85 1.5l-4.514 2.709a.75.75 0 0 1-1.12-.488l-.963-4.572a1.305 1.305 0 0 1-.14-.129L8.04 15.96l-1.994-1.873a1.305 1.305 0 0 1-.129-.14l-4.571-.963a.75.75 0 0 1-.49-1.12l2.71-4.514c.316-.527.885-.85 1.5-.85h5.037a23.668 23.668 0 0 1 1.542-1.594l1.304-1.23A10.753 10.753 0 0 1 20.321.75Zm-6.344 4.018v-.001l-1.304 1.23a22.275 22.275 0 0 0-3.255 3.851l-2.193 3.29 1.859 1.744a.545.545 0 0 1 .034.034l1.743 1.858 3.288-2.192a22.263 22.263 0 0 0 3.854-3.257l1.228-1.303a9.251 9.251 0 0 0 2.517-6.346V2.5a.25.25 0 0 0-.25-.25h-1.177a9.252 9.252 0 0 0-6.344 2.518ZM6.5 21c-1.209 1.209-3.901 1.445-4.743 1.49a.236.236 0 0 1-.18-.067.236.236 0 0 1-.067-.18c.045-.842.281-3.534 1.49-4.743.9-.9 2.6-.9 3.5 0 .9.9.9 2.6 0 3.5Zm-.592-8.588L8.17 9.017c.23-.346.47-.685.717-1.017H5.066a.25.25 0 0 0-.214.121l-2.167 3.612ZM16 15.112c-.333.248-.672.487-1.018.718l-3.393 2.262.678 3.223 3.612-2.167a.25.25 0 0 0 .121-.214ZM17.5 8a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 17.5 8Z",
        }),
      },
    };
  }),
  d6 = c("RowsIcon", "octicon octicon-rows", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M16 10.75v2.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-2.5C0 9.784.784 9 1.75 9h12.5c.966 0 1.75.784 1.75 1.75Zm0-8v2.5A1.75 1.75 0 0 1 14.25 7H1.75A1.75 1.75 0 0 1 0 5.25v-2.5C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75Zm-1.75-.25H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm0 8H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M22 3.75v5.5A1.75 1.75 0 0 1 20.25 11H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75Zm0 11v5.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75h16.5c.966 0 1.75.784 1.75 1.75ZM20.25 3.5H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25Zm0 11H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
    };
  }),
  p6 = c("RssIcon", "octicon octicon-rss", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 0 1-1.497.098 10.502 10.502 0 0 0-9.776-9.776.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7.002 7.002 0 0 1 6.113 6.111.75.75 0 0 1-1.49.178 5.503 5.503 0 0 0-4.8-4.8.75.75 0 0 1 .179-1.489ZM2 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.5 3.25a.75.75 0 0 1 .75-.75C14.053 2.5 22 10.447 22 20.25a.75.75 0 0 1-1.5 0C20.5 11.275 13.225 4 4.25 4a.75.75 0 0 1-.75-.75Zm.75 6.25C10.187 9.5 15 14.313 15 20.25a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 4.25 11a.75.75 0 0 1 0-1.5ZM3.5 19a2 2 0 1 1 3.999-.001A2 2 0 0 1 3.5 19Z",
        }),
      },
    };
  }),
  m6 = c("RubyIcon", "octicon octicon-ruby", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.637 2.291A.748.748 0 0 1 4.23 2h7.54c.232 0 .451.107.593.291l3.48 4.5a.75.75 0 0 1-.072.999l-7.25 7a.75.75 0 0 1-1.042 0l-7.25-7a.75.75 0 0 1-.072-.999ZM4.598 3.5 1.754 7.177 8 13.207l6.246-6.03L11.402 3.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.873 3.26A.748.748 0 0 1 6.44 3h11.31c.223 0 .434.099.576.27l5 6a.75.75 0 0 1-.028.992l-10.75 11.5a.75.75 0 0 1-1.096 0l-10.75-11.5a.75.75 0 0 1-.02-1.003l5.19-6Zm.91 1.24L2.258 9.73 12 20.153l9.75-10.43L17.399 4.5Z",
        }),
      },
    };
  }),
  v6 = c("ScreenFullIcon", "octicon octicon-screen-full", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.75 10a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 1 13.25v-2.5a.75.75 0 0 1 .75-.75Zm12.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5a.75.75 0 0 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 .75-.75ZM2.75 2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0v-2.5C1 1.784 1.784 1 2.75 1h2.5a.75.75 0 0 1 0 1.5ZM10 1.75a.75.75 0 0 1 .75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.75 15a.75.75 0 0 1 .75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 3 19.25v-3.5a.75.75 0 0 1 .75-.75Zm16.5 0a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 19.25 21h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 .75-.75ZM4.75 4.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0v-3.5C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 0 1 0 1.5ZM15 3.75a.75.75 0 0 1 .75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  u6 = c("ScreenNormalIcon", "octicon octicon-screen-normal", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M10.75 1a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 10 4.25v-2.5a.75.75 0 0 1 .75-.75Zm-5.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 4.25 6h-2.5a.75.75 0 0 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5A.75.75 0 0 1 5.25 1ZM1 10.75a.75.75 0 0 1 .75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1-.75-.75Zm9 1c0-.966.784-1.75 1.75-1.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M15.75 3a.75.75 0 0 1 .75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 15 7.25v-3.5a.75.75 0 0 1 .75-.75Zm-7.5 0a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 7.25 9h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25v-3.5A.75.75 0 0 1 8.25 3ZM3 15.75a.75.75 0 0 1 .75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1-.75-.75Zm12 1c0-.966.784-1.75 1.75-1.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0Z",
        }),
      },
    };
  }),
  Z6 = c("SearchIcon", "octicon octicon-search", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z",
        }),
      },
    };
  }),
  s6 = c("ServerIcon", "octicon octicon-server", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v4c0 .372-.116.717-.314 1 .198.283.314.628.314 1v4a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 12.75v-4c0-.358.109-.707.314-1a1.739 1.739 0 0 1-.314-1v-4C0 1.784.784 1 1.75 1ZM1.5 2.75v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm.25 5.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25ZM7 4.75A.75.75 0 0 1 7.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 4.75ZM7.75 10h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM3 4.75A.75.75 0 0 1 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 4.75ZM3.75 10h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.75 6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5ZM6 7.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 7.25Zm4 9a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-3.25-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z",
          }),
          a.createElement("path", {
            d: "M3.25 2h17.5c.966 0 1.75.784 1.75 1.75v7c0 .372-.116.716-.314 1 .198.284.314.628.314 1v7a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-7c0-.358.109-.707.314-1a1.741 1.741 0 0 1-.314-1v-7C1.5 2.784 2.284 2 3.25 2Zm0 10.5a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25Zm0-1.5h17.5a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25H3.25a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25Z",
          })
        ),
      },
    };
  }),
  M6 = c("ShareIcon", "octicon octicon-share", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.75 6.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-6.5C2 5.784 2.784 5 3.75 5h1a.75.75 0 0 1 0 1.5ZM7.823.177a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v5.75a.75.75 0 0 1-1.5 0V3.5H5.104a.25.25 0 0 1-.177-.427Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.5 9.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1 0-1.5h2.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V9.75C4 8.784 4.784 8 5.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25Zm7.03-8.53 3.25 3.25a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-1.97-1.97v10.69a.75.75 0 0 1-1.5 0V3.56L9.28 5.53a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0Z",
        }),
      },
    };
  }),
  f6 = c("ShareAndroidIcon", "octicon octicon-share-android", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M15 3a3 3 0 0 1-5.175 2.066l-3.92 2.179a2.994 2.994 0 0 1 0 1.51l3.92 2.179a3 3 0 1 1-.73 1.31l-3.92-2.178a3 3 0 1 1 0-4.133l3.92-2.178A3 3 0 1 1 15 3Zm-1.5 10a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 13Zm-9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 4.5 8Zm9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M20 5.5a3.498 3.498 0 0 1-6.062 2.385l-5.112 3.021a3.498 3.498 0 0 1 0 2.188l5.112 3.021a3.5 3.5 0 1 1-.764 1.29l-5.112-3.02a3.499 3.499 0 1 1-3.843-5.642 3.499 3.499 0 0 1 3.843.872l5.112-3.021A3.5 3.5 0 1 1 20 5.5Zm-1.5 13a2 2 0 1 0-3.999-.001 2 2 0 0 0 3.999.001Zm0-13a2 2 0 1 0-3.999-.001A2 2 0 0 0 18.5 5.5ZM5.5 14a2 2 0 1 0 .001-3.999A2 2 0 0 0 5.5 14Z",
        }),
      },
    };
  }),
  A6 = c("ShieldIcon", "octicon octicon-shield", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25-8.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z",
          }),
          a.createElement("path", {
            d: "M11.46.637a1.748 1.748 0 0 1 1.08 0l8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.77 10.705-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.771 20.704 2 16.19 2 10V4.976c0-.76.49-1.43 1.21-1.664Zm.617 1.426a.253.253 0 0 0-.154 0L3.673 4.74a.25.25 0 0 0-.173.237V10c0 5.461 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.46 20.5 10V4.976a.25.25 0 0 0-.173-.237Z",
          })
        ),
      },
    };
  }),
  E6 = c("ShieldCheckIcon", "octicon octicon-shield-check", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM11.28 6.28l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.97-2.97a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z",
          }),
          a.createElement("path", {
            d: "m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z",
          })
        ),
      },
    };
  }),
  w6 = c("ShieldLockIcon", "octicon octicon-shield-lock", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M11.46 1.137a1.748 1.748 0 0 1 1.08 0l8.25 2.675A1.75 1.75 0 0 1 22 5.476V10.5c0 6.19-3.77 10.705-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.771 21.204 2 16.69 2 10.5V5.476c0-.76.49-1.43 1.21-1.664Zm.617 1.426a.253.253 0 0 0-.154 0L3.673 5.24a.25.25 0 0 0-.173.237V10.5c0 5.461 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0c5.15-1.943 8.43-5.965 8.43-11.426V5.476a.25.25 0 0 0-.173-.237ZM13 12.232V15a1 1 0 0 1-2 0v-2.768a2 2 0 1 1 2 0Z",
        }),
      },
    };
  }),
  g6 = c("ShieldSlashIcon", "octicon octicon-shield-slash", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.533.133a1.75 1.75 0 0 0-1.066 0l-2.091.67a.75.75 0 0 0 .457 1.428l2.09-.67a.25.25 0 0 1 .153 0l5.25 1.68a.25.25 0 0 1 .174.239V7c0 .233-.008.464-.025.694a.75.75 0 1 0 1.495.112c.02-.27.03-.538.03-.806V3.48a1.75 1.75 0 0 0-1.217-1.667L8.533.133ZM1 2.857l-.69-.5a.75.75 0 1 1 .88-1.214l14.5 10.5a.75.75 0 1 1-.88 1.214l-1.282-.928c-.995 1.397-2.553 2.624-4.864 3.608-.425.181-.905.18-1.329 0-2.447-1.042-4.049-2.356-5.032-3.855C1.32 10.182 1 8.566 1 7Zm1.5 1.086V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297.05.02.106.02.153 0 2.127-.905 3.439-1.982 4.237-3.108Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.54 1.137a1.748 1.748 0 0 0-1.08 0L6.018 2.905a.75.75 0 1 0 .464 1.427l5.441-1.768a.239.239 0 0 1 .154 0l8.25 2.675a.249.249 0 0 1 .173.237V10.5c0 1.284-.24 2.83-.696 3.971a.75.75 0 1 0 1.392.557C21.74 13.67 22 11.927 22 10.5V5.476a1.75 1.75 0 0 0-1.21-1.664l-8.25-2.675ZM2.017 4.843l-.974-.748a.751.751 0 0 1 .914-1.19l20.5 15.75a.751.751 0 0 1-.914 1.19l-2.012-1.546-.702.852-.008.009a.07.07 0 0 1-.008.01c-1.603 1.821-3.731 3.223-6.214 4.16a1.699 1.699 0 0 1-1.198-.001C5.771 21.205 2 16.689 2 10.5V5c0-.054.006-.107.017-.157ZM3.5 5.982V10.5c0 5.461 3.281 9.483 8.431 11.426a.193.193 0 0 0 .138 0c2.283-.861 4.192-2.131 5.61-3.738l.662-.803Z",
        }),
      },
    };
  }),
  V6 = c("ShieldXIcon", "octicon octicon-shield-x", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m8.533.133 5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.748 1.748 0 0 1 1.066 0Zm-.61 1.429.001.001-5.25 1.68a.251.251 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859.784 1.194 2.121 2.342 4.366 3.298a.196.196 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297C13.225 9.666 13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0ZM6.78 5.22 8 6.44l1.22-1.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 7.5l1.22 1.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 8.56 6.78 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 7.5 5.72 6.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.28 7.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06L12 12.56l2.72 2.72a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06L12 10.44 9.28 7.72Z",
          }),
          a.createElement("path", {
            d: "m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z",
          })
        ),
      },
    };
  }),
  H6 = c(
    "SidebarCollapseIcon",
    "octicon octicon-sidebar-collapse",
    function () {
      return {
        16: {
          width: 16,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z",
            }),
            a.createElement("path", {
              d: "M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z",
            })
          ),
        },
        24: {
          width: 24,
          path: a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M7.22 14.47 9.69 12 7.22 9.53a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l3 3a.75.75 0 0 1 0 1.06l-3 3a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Z",
            }),
            a.createElement("path", {
              d: "M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25Zm13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z",
            })
          ),
        },
      };
    }
  ),
  I6 = c("SidebarExpandIcon", "octicon octicon-sidebar-expand", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z",
          }),
          a.createElement("path", {
            d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.28 9.53 8.81 12l2.47 2.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-3-3a.75.75 0 0 1 0-1.06l3-3a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z",
          }),
          a.createElement("path", {
            d: "M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25Zm13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z",
          })
        ),
      },
    };
  }),
  C6 = c("SignInIcon", "octicon octicon-sign-in", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm6.56 4.5h5.69a.75.75 0 0 1 0 1.5H8.56l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L6.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm9.994 9.5 3.3 3.484a.75.75 0 0 1-1.088 1.032l-4.5-4.75a.75.75 0 0 1 0-1.032l4.5-4.75a.75.75 0 0 1 1.088 1.032l-3.3 3.484h8.256a.75.75 0 0 1 0 1.5Z",
        }),
      },
    };
  }),
  L6 = c("SignOutIcon", "octicon octicon-sign-out", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5-1.97-1.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.97-1.97H6.75a.75.75 0 0 1 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm16.006 9.5H10.75a.75.75 0 0 1 0-1.5h8.256l-3.3-3.484a.75.75 0 0 1 1.088-1.032l4.5 4.75a.75.75 0 0 1 0 1.032l-4.5 4.75a.75.75 0 0 1-1.088-1.032Z",
        }),
      },
    };
  }),
  y6 = c("SingleSelectIcon", "octicon octicon-single-select", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m5.06 7.356 2.795 2.833c.08.081.21.081.29 0l2.794-2.833c.13-.131.038-.356-.145-.356H5.206c-.183 0-.275.225-.145.356Z",
          }),
          a.createElement("path", {
            d: "M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m7.854 10.854 3.792 3.792a.5.5 0 0 0 .708 0l3.793-3.792a.5.5 0 0 0-.354-.854H8.207a.5.5 0 0 0-.353.854Z",
          }),
          a.createElement("path", {
            d: "M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  b6 = c("SkipIcon", "octicon octicon-skip", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm9.78-2.22-5.5 5.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l5.5-5.5a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M17.28 7.78a.75.75 0 0 0-1.06-1.06l-9.5 9.5a.75.75 0 1 0 1.06 1.06l9.5-9.5Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  S6 = c("SkipFillIcon", "octicon octicon-skip-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm11.333-2.167a.825.825 0 0 0-1.166-1.166l-5.5 5.5a.825.825 0 0 0 1.166 1.166Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.333-4.167a.825.825 0 0 0-1.166-1.166l-9.5 9.5a.825.825 0 0 0 1.166 1.166Z",
        }),
      },
    };
  }),
  k6 = c("SlidersIcon", "octicon octicon-sliders", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M15 2.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Zm-8.5.75v1.25a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0V2H1.75a.75.75 0 0 0 0 1.5H6.5Zm1.25 5.25a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5h6ZM15 8a.75.75 0 0 1-.75.75H11.5V10a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 1.5 0v1.25h2.75A.75.75 0 0 1 15 8Zm-9 5.25v-2a.75.75 0 0 0-1.5 0v1.25H1.75a.75.75 0 0 0 0 1.5H4.5v1.25a.75.75 0 0 0 1.5 0v-2Zm9 0a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z",
        }),
      },
    };
  }),
  F6 = c("SmileyIcon", "octicon octicon-smiley", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1 1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.014.019a2.066 2.066 0 0 1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.331 3.331 0 0 1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.456 14.494a.75.75 0 0 1 1.068.17 3.08 3.08 0 0 0 .572.492A3.381 3.381 0 0 0 12 15.72c.855 0 1.487-.283 1.904-.562a3.081 3.081 0 0 0 .572-.492l.021-.026a.75.75 0 0 1 1.197.905l-.027.034c-.013.016-.03.038-.052.063-.044.05-.105.119-.184.198a4.569 4.569 0 0 1-.695.566A4.88 4.88 0 0 1 12 17.22a4.88 4.88 0 0 1-2.736-.814 4.57 4.57 0 0 1-.695-.566 3.253 3.253 0 0 1-.236-.261c-.259-.332-.223-.824.123-1.084Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          }),
          a.createElement("path", {
            d: "M9 10.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM16.25 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
          })
        ),
      },
    };
  }),
  T6 = c("SortAscIcon", "octicon octicon-sort-asc", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m12.927 2.573 3 3A.25.25 0 0 1 15.75 6H13.5v6.75a.75.75 0 0 1-1.5 0V6H9.75a.25.25 0 0 1-.177-.427l3-3a.25.25 0 0 1 .354 0ZM0 12.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8.25Zm0-4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M18.5 17.25a.75.75 0 0 1-1.5 0V7.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18.5 7.56v9.69Zm-15.75.25a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5h-9.5Zm0-5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5h-5.5Zm0-5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5h-3.5Z",
        }),
      },
    };
  }),
  P6 = c("SortDescIcon", "octicon octicon-sort-desc", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 4.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.25Zm0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8.25Zm0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75ZM13.5 10h2.25a.25.25 0 0 1 .177.427l-3 3a.25.25 0 0 1-.354 0l-3-3A.25.25 0 0 1 9.75 10H12V3.75a.75.75 0 0 1 1.5 0V10Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M18.5 16.44V6.75a.75.75 0 0 0-1.5 0v9.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22ZM2 7.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 7.25Zm0 5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z",
        }),
      },
    };
  }),
  D6 = c("SparkleFillIcon", "octicon octicon-sparkle-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.492 7.492 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.492 7.492 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.492 7.492 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.492 7.492 0 0 0 4.464-4.464Z",
        }),
      },
    };
  }),
  x6 = c("SponsorTiersIcon", "octicon octicon-sponsor-tiers", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M10.586 1C12.268 1 13.5 2.37 13.5 4.25c0 1.745-.996 3.359-2.622 4.831-.166.15-.336.297-.509.438l1.116 5.584a.75.75 0 0 1-.991.852l-2.409-.876a.25.25 0 0 0-.17 0l-2.409.876a.75.75 0 0 1-.991-.852L5.63 9.519a13.78 13.78 0 0 1-.51-.438C3.497 7.609 2.5 5.995 2.5 4.25 2.5 2.37 3.732 1 5.414 1c.963 0 1.843.403 2.474 1.073L8 2.198l.112-.125a3.385 3.385 0 0 1 2.283-1.068L10.586 1Zm-3.621 9.495-.718 3.594 1.155-.42a1.75 1.75 0 0 1 1.028-.051l.168.051 1.154.42-.718-3.592c-.199.13-.37.235-.505.314l-.169.097a.75.75 0 0 1-.72 0 9.54 9.54 0 0 1-.515-.308l-.16-.105ZM10.586 2.5c-.863 0-1.611.58-1.866 1.459-.209.721-1.231.721-1.44 0C7.025 3.08 6.277 2.5 5.414 2.5 4.598 2.5 4 3.165 4 4.25c0 1.23.786 2.504 2.128 3.719.49.443 1.018.846 1.546 1.198l.325.21.076-.047.251-.163a13.341 13.341 0 0 0 1.546-1.198C11.214 6.754 12 5.479 12 4.25c0-1.085-.598-1.75-1.414-1.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M16.004 1.25C18.311 1.25 20 3.128 20 5.75c0 2.292-1.23 4.464-3.295 6.485-.481.47-.98.909-1.482 1.31l.265 1.32 1.375 7.5a.75.75 0 0 1-.982.844l-3.512-1.207a.75.75 0 0 0-.488 0L8.37 23.209a.75.75 0 0 1-.982-.844l1.378-7.512.261-1.309c-.5-.4-1-.838-1.481-1.31C5.479 10.215 4.25 8.043 4.25 5.75c0-2.622 1.689-4.5 3.996-4.5 1.55 0 2.947.752 3.832 1.967l.047.067.047-.067a4.726 4.726 0 0 1 3.612-1.962l.22-.005ZM13.89 14.531c-.418.285-.828.542-1.218.77l-.18.103a.75.75 0 0 1-.734 0l-.071-.04-.46-.272c-.282-.173-.573-.36-.868-.562l-.121.605-1.145 6.239 2.3-.79a2.248 2.248 0 0 1 1.284-.054l.18.053 2.299.79-1.141-6.226-.125-.616ZM16.004 2.75c-1.464 0-2.731.983-3.159 2.459-.209.721-1.231.721-1.44 0-.428-1.476-1.695-2.459-3.16-2.459-1.44 0-2.495 1.173-2.495 3 0 1.811 1.039 3.647 2.844 5.412a19.624 19.624 0 0 0 3.734 2.84l-.019-.011-.184-.111.147-.088a19.81 19.81 0 0 0 3.015-2.278l.37-.352C17.46 9.397 18.5 7.561 18.5 5.75c0-1.827-1.055-3-2.496-3Z",
        }),
      },
    };
  }),
  R6 = c("SquareIcon", "octicon octicon-square", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4 5.75C4 4.784 4.784 4 5.75 4h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 10.25 12h-4.5A1.75 1.75 0 0 1 4 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M6 7.75C6 6.784 6.784 6 7.75 6h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 18h-8.5A1.75 1.75 0 0 1 6 16.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
    };
  }),
  O6 = c("SquareFillIcon", "octicon octicon-square-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.75 4h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 10.25 12h-4.5A1.75 1.75 0 0 1 4 10.25v-4.5C4 4.784 4.784 4 5.75 4Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.75 6h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 18h-8.5A1.75 1.75 0 0 1 6 16.25v-8.5C6 6.784 6.784 6 7.75 6Z",
        }),
      },
    };
  }),
  N6 = c("SquirrelIcon", "octicon octicon-squirrel", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.499.75a.75.75 0 0 1 1.5 0v.996C5.9 2.903 6.793 3.65 7.662 4.376l.24.202c-.036-.694.055-1.422.426-2.163C9.1.873 10.794-.045 12.622.26 14.408.558 16 1.94 16 4.25c0 1.278-.954 2.575-2.44 2.734l.146.508.065.22c.203.701.412 1.455.476 2.226.142 1.707-.4 3.03-1.487 3.898C11.714 14.671 10.27 15 8.75 15h-6a.75.75 0 0 1 0-1.5h1.376a4.484 4.484 0 0 1-.563-1.191 3.835 3.835 0 0 1-.05-2.063 4.647 4.647 0 0 1-2.025-.293.75.75 0 0 1 .525-1.406c1.357.507 2.376-.006 2.698-.318l.009-.01a.747.747 0 0 1 1.06 0 .748.748 0 0 1-.012 1.074c-.912.92-.992 1.835-.768 2.586.221.74.745 1.337 1.196 1.621H8.75c1.343 0 2.398-.296 3.074-.836.635-.507 1.036-1.31.928-2.602-.05-.603-.216-1.224-.422-1.93l-.064-.221c-.12-.407-.246-.84-.353-1.29a2.425 2.425 0 0 1-.507-.441 3.075 3.075 0 0 1-.633-1.248.75.75 0 0 1 1.455-.364c.046.185.144.436.31.627.146.168.353.305.712.305.738 0 1.25-.615 1.25-1.25 0-1.47-.95-2.315-2.123-2.51-1.172-.196-2.227.387-2.706 1.345-.46.92-.27 1.774.019 3.062l.042.19a.884.884 0 0 1 .01.05c.348.443.666.949.94 1.553a.75.75 0 1 1-1.365.62c-.553-1.217-1.32-1.94-2.3-2.768L6.7 5.527c-.814-.68-1.75-1.462-2.692-2.619a3.737 3.737 0 0 0-1.023.88c-.406.495-.663 1.036-.722 1.508.116.122.306.21.591.239.388.038.797-.06 1.032-.19a.75.75 0 0 1 .728 1.31c-.515.287-1.23.439-1.906.373-.682-.067-1.473-.38-1.879-1.193L.75 5.677V5.5c0-.984.48-1.94 1.077-2.664.46-.559 1.05-1.055 1.673-1.353V.75Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M18.377 3.49c-1.862-.31-3.718.62-4.456 2.095-.428.857-.691 1.624-.728 2.361-.035.71.138 1.444.67 2.252.644.854 1.199 1.913 1.608 3.346a.75.75 0 1 1-1.442.412c-.353-1.236-.82-2.135-1.372-2.865l-.008-.01c-.53-.698-1.14-1.242-1.807-1.778a50.724 50.724 0 0 0-.667-.524C9.024 7.884 7.71 6.863 6.471 5.16c-.59.287-1.248.798-1.806 1.454-.665.78-1.097 1.66-1.158 2.446.246.36.685.61 1.246.715.643.12 1.278.015 1.633-.182a.75.75 0 1 1 .728 1.311c-.723.402-1.728.516-2.637.346-.916-.172-1.898-.667-2.398-1.666L2 9.427V9.25c0-1.323.678-2.615 1.523-3.607.7-.824 1.59-1.528 2.477-1.917V2.75a.75.75 0 1 1 1.5 0v1.27c1.154 1.67 2.363 2.612 3.568 3.551.207.162.415.323.621.489.001-.063.003-.126.006-.188.052-1.034.414-2.017.884-2.958 1.06-2.118 3.594-3.313 6.044-2.904 1.225.204 2.329.795 3.125 1.748C22.546 4.713 23 5.988 23 7.5c0 1.496-.913 3.255-2.688 3.652.838 1.699 1.438 3.768 1.181 5.697-.269 2.017-1.04 3.615-2.582 4.675C17.409 22.558 15.288 23 12.5 23H4.75a.75.75 0 0 1 0-1.5h2.322c-.58-.701-.998-1.578-1.223-2.471-.327-1.3-.297-2.786.265-4.131-.92.091-1.985-.02-3.126-.445a.75.75 0 1 1 .524-1.406c1.964.733 3.428.266 4.045-.19.068-.06.137-.12.208-.18a.745.745 0 0 1 .861-.076.746.746 0 0 1 .32.368.752.752 0 0 1-.173.819c-.077.076-.16.15-.252.221-1.322 1.234-1.62 3.055-1.218 4.654.438 1.737 1.574 2.833 2.69 2.837H12.5c2.674 0 4.429-.433 5.56-1.212 1.094-.752 1.715-1.904 1.946-3.637.236-1.768-.445-3.845-1.407-5.529a.576.576 0 0 1-.012-.02 3.557 3.557 0 0 1-1.553-.94c-.556-.565-.89-1.243-1.012-1.73a.75.75 0 0 1 1.456-.364c.057.231.26.67.626 1.043.35.357.822.623 1.443.623 1.172 0 1.953-1.058 1.953-2.234 0-1.205-.357-2.127-.903-2.78-.547-.654-1.318-1.08-2.22-1.23Z",
        }),
      },
    };
  }),
  B6 = c("StackIcon", "octicon octicon-stack", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.122.392a1.75 1.75 0 0 1 1.756 0l5.003 2.902c.83.481.83 1.68 0 2.162L8.878 8.358a1.75 1.75 0 0 1-1.756 0L2.119 5.456a1.251 1.251 0 0 1 0-2.162ZM8.125 1.69a.248.248 0 0 0-.25 0l-4.63 2.685 4.63 2.685a.248.248 0 0 0 .25 0l4.63-2.685ZM1.601 7.789a.75.75 0 0 1 1.025-.273l5.249 3.044a.248.248 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0L1.874 8.814A.75.75 0 0 1 1.6 7.789Zm0 3.5a.75.75 0 0 1 1.025-.273l5.249 3.044a.248.248 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0l-5.248-3.044a.75.75 0 0 1-.273-1.025Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.063 1.456a1.749 1.749 0 0 1 1.874 0l8.383 5.316a1.751 1.751 0 0 1 0 2.956l-8.383 5.316a1.749 1.749 0 0 1-1.874 0L2.68 9.728a1.751 1.751 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z",
          }),
          a.createElement("path", {
            d: "M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z",
          }),
          a.createElement("path", {
            d: "M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z",
          })
        ),
      },
    };
  }),
  W6 = c("StarIcon", "octicon octicon-star", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.751.751 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.328.668A.75.75 0 0 1 12 .25Zm0 2.445L9.44 7.882a.75.75 0 0 1-.565.41l-5.725.832 4.143 4.038a.748.748 0 0 1 .215.664l-.978 5.702 5.121-2.692a.75.75 0 0 1 .698 0l5.12 2.692-.977-5.702a.748.748 0 0 1 .215-.664l4.143-4.038-5.725-.831a.75.75 0 0 1-.565-.41L12 2.694Z",
        }),
      },
    };
  }),
  z6 = c("StarFillIcon", "octicon octicon-star-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "m12.672.668 3.059 6.197 6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823 1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0Z",
        }),
      },
    };
  }),
  $6 = c("StopIcon", "octicon octicon-stop", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 7a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 7Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            d: "M7.328 1.47a.749.749 0 0 1 .53-.22h8.284c.199 0 .389.079.53.22l5.858 5.858c.141.14.22.33.22.53v8.284a.749.749 0 0 1-.22.53l-5.858 5.858a.749.749 0 0 1-.53.22H7.858a.749.749 0 0 1-.53-.22L1.47 16.672a.749.749 0 0 1-.22-.53V7.858c0-.199.079-.389.22-.53Zm.84 1.28L2.75 8.169v7.662l5.419 5.419h7.662l5.419-5.418V8.168L15.832 2.75Z",
          })
        ),
      },
    };
  }),
  _6 = c("StopwatchIcon", "octicon octicon-stopwatch", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.75.75A.75.75 0 0 1 6.5 0h3a.75.75 0 0 1 0 1.5h-.75v1l-.001.041a6.724 6.724 0 0 1 3.464 1.435l.007-.006.75-.75a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-.75.75-.006.007a6.75 6.75 0 1 1-10.548 0L2.72 5.03l-.75-.75a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l.75.75.007.006A6.72 6.72 0 0 1 7.25 2.541V1.5H6.5a.75.75 0 0 1-.75-.75ZM8 14.5a5.25 5.25 0 1 0-.001-10.501A5.25 5.25 0 0 0 8 14.5Zm.389-6.7 1.33-1.33a.75.75 0 1 1 1.061 1.06L9.45 8.861A1.503 1.503 0 0 1 8 10.75a1.499 1.499 0 1 1 .389-2.95Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10.25 0h3.5a.75.75 0 0 1 0 1.5h-1v1.278a9.954 9.954 0 0 1 5.636 2.276L19.72 3.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.315 1.316A9.959 9.959 0 0 1 22 12.75c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.959 9.959 0 0 1 2.535-6.654L3.22 4.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.335 1.334a9.958 9.958 0 0 1 5.635-2.276V1.5h-1a.75.75 0 0 1 0-1.5ZM12 21.25a8.5 8.5 0 1 0-.001-17.001A8.5 8.5 0 0 0 12 21.25Zm4.03-12.53a.75.75 0 0 1 0 1.06l-2.381 2.382a1.75 1.75 0 1 1-1.06-1.06l2.38-2.382a.75.75 0 0 1 1.061 0Z",
        }),
      },
    };
  }),
  U6 = c("StrikethroughIcon", "octicon octicon-strikethrough", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11.055 8.5c.524.536.815 1.257.811 2.007a3.133 3.133 0 0 1-1.12 2.408C9.948 13.597 8.748 14 7.096 14c-1.706 0-3.104-.607-3.902-1.377a.751.751 0 0 1 1.042-1.079c.48.463 1.487.956 2.86.956 1.422 0 2.232-.346 2.676-.726.435-.372.594-.839.594-1.267 0-.472-.208-.857-.647-1.197-.448-.346-1.116-.623-1.951-.81H1.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5ZM7.581 3.25c-2.036 0-2.778 1.082-2.778 1.786 0 .055.002.107.006.157a.75.75 0 0 1-1.496.114 3.506 3.506 0 0 1-.01-.271c0-1.832 1.75-3.286 4.278-3.286 1.418 0 2.721.58 3.514 1.093a.75.75 0 1 1-.814 1.26c-.64-.414-1.662-.853-2.7-.853Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "m16.533 12.5.054.043c.93.75 1.538 1.77 1.538 3.066a4.13 4.13 0 0 1-1.479 3.177c-1.058.904-2.679 1.464-4.974 1.464-2.35 0-4.252-.837-5.318-1.865a.75.75 0 1 1 1.042-1.08c.747.722 2.258 1.445 4.276 1.445 2.065 0 3.296-.504 3.999-1.105a2.63 2.63 0 0 0 .954-2.036c0-.764-.337-1.38-.979-1.898-.649-.523-1.598-.931-2.76-1.211H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5ZM12.36 5C9.37 5 8.105 6.613 8.105 7.848c0 .411.072.744.193 1.02a.75.75 0 0 1-1.373.603 3.988 3.988 0 0 1-.32-1.623c0-2.363 2.271-4.348 5.755-4.348 1.931 0 3.722.794 4.814 1.5a.75.75 0 1 1-.814 1.26c-.94-.607-2.448-1.26-4-1.26Z",
        }),
      },
    };
  }),
  j6 = c("SunIcon", "octicon octicon-sun", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 1 0 0 11Zm-5.657.157a.75.75 0 0 1 0 1.06l-1.768 1.768a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.767-1.768a.75.75 0 0 1 1.061 0ZM3.515 3.515a.75.75 0 0 1 1.06 0l1.768 1.768a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L3.515 4.575a.75.75 0 0 1 0-1.06ZM12 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 12 0ZM4 12a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 4 12Zm8 8a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 12 20Zm12-8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 24 12Zm-6.343 5.657a.75.75 0 0 1 1.06 0l1.768 1.768a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.768-1.767a.75.75 0 0 1 0-1.061Zm2.828-14.142a.75.75 0 0 1 0 1.06l-1.768 1.768a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l1.767-1.768a.75.75 0 0 1 1.061 0Z",
        }),
      },
    };
  }),
  X6 = c("SyncIcon", "octicon octicon-sync", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3.38 8A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 9.215 7.182.75.75 0 1 0 1.456-.364C21.473 4.539 17.15 1 12 1a10.995 10.995 0 0 0-9.5 5.452V4.75a.75.75 0 0 0-1.5 0V8.5a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5H3.38Zm-.595 6.318a.75.75 0 0 0-1.455.364C2.527 19.461 6.85 23 12 23c4.052 0 7.592-2.191 9.5-5.451v1.701a.75.75 0 0 0 1.5 0V15.5a1 1 0 0 0-1-1h-3.75a.75.75 0 0 0 0 1.5h2.37A9.502 9.502 0 0 1 12 21.5c-4.446 0-8.181-3.055-9.215-7.182Z",
        }),
      },
    };
  }),
  G6 = c("TabIcon", "octicon octicon-tab", function () {
    return {
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M22 4.25a.75.75 0 0 0-1.5 0v15a.75.75 0 0 0 1.5 0v-15Zm-9.72 14.28a.75.75 0 1 1-1.06-1.06l4.97-4.97H1.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25Z",
        }),
      },
    };
  }),
  q6 = c("TabExternalIcon", "octicon octicon-tab-external", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.25 4a.25.25 0 0 0-.25.25v9a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h.75V4.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v8.25h.75a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75v-9a.25.25 0 0 0-.25-.25h-9.5Z",
          }),
          a.createElement("path", {
            d: "m7.97 7.97-2.75 2.75a.75.75 0 1 0 1.06 1.06l2.75-2.75 1.543 1.543a.25.25 0 0 0 .427-.177V6.25a.25.25 0 0 0-.25-.25H6.604a.25.25 0 0 0-.177.427L7.97 7.97Z",
          })
        ),
      },
    };
  }),
  Y6 = c("TableIcon", "octicon octicon-table", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25ZM9 9v11.5h11.25a.25.25 0 0 0 .25-.25V9Zm11.5-1.5V3.75a.25.25 0 0 0-.25-.25H9v4ZM3.5 9v11.25c0 .138.112.25.25.25H7.5V9Zm4-1.5v-4H3.75a.25.25 0 0 0-.25.25V7.5Z",
        }),
      },
    };
  }),
  K6 = c("TagIcon", "octicon octicon-tag", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.75 6.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
          }),
          a.createElement("path", {
            d: "M2.5 1h8.44a1.5 1.5 0 0 1 1.06.44l10.25 10.25a1.5 1.5 0 0 1 0 2.12l-8.44 8.44a1.5 1.5 0 0 1-2.12 0L1.44 12A1.497 1.497 0 0 1 1 10.94V2.5A1.5 1.5 0 0 1 2.5 1Zm0 1.5v8.44l10.25 10.25 8.44-8.44L10.94 2.5Z",
          })
        ),
      },
    };
  }),
  Q6 = c("TasklistIcon", "octicon octicon-tasklist", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm4.655 8.595a.75.75 0 0 1 0 1.06L4.03 14.28a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.095-2.095a.75.75 0 0 1 1.06 0ZM9.75 2.5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm-7.25-9v3h3v-3Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M3 6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm1.5 4.5h4v-4h-4Zm8.25-5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm-2.97-2.53a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.97-2.97a.75.75 0 0 1 1.06 0Z",
        }),
      },
    };
  }),
  J6 = c("TelescopeIcon", "octicon octicon-telescope", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M.408 15.13a2 2 0 0 1 .59-2.642L17.038 1.33a1.999 1.999 0 0 1 2.85.602l2.828 4.644a2 2 0 0 1-.851 2.847l-17.762 8.43a2 2 0 0 1-2.59-.807Zm5.263-4.066 1.987 3.44 8.712-4.135-2.857-4.76Zm12.06-1.34.001-.001 3.49-1.656a.498.498 0 0 0 .212-.712l-2.826-4.644a.503.503 0 0 0-.713-.151l-3.148 2.19Zm-13.295 2.2L1.854 13.72a.5.5 0 0 0-.147.66l1.105 1.915a.5.5 0 0 0 .648.201l2.838-1.347ZM17.155 22.87a.75.75 0 0 0 .226-1.036l-4-6.239a.75.75 0 0 0-.941-.278l-2.75 1.25a.75.75 0 0 0-.318.274l-3.25 4.989a.75.75 0 0 0 1.256.819l3.131-4.806.51-.232v5.64a.75.75 0 1 0 1.5 0v-6.22l3.6 5.613a.75.75 0 0 0 1.036.226Z",
        }),
      },
    };
  }),
  aa = c("TelescopeFillIcon", "octicon octicon-telescope-fill", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11.905.42a1.5 1.5 0 0 1 2.144.49l1.692 2.93a1.5 1.5 0 0 1-.649 2.102L2.895 11.815a1.5 1.5 0 0 1-1.95-.602l-.68-1.176a1.5 1.5 0 0 1 .455-1.99L11.905.422Zm-3.374 9.79a.75.75 0 0 1 .944.253l2.644 3.864a.751.751 0 0 1-1.238.847L9 12.424v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.048-2.992a.752.752 0 0 1 .293-.252l1.81-.871Zm2.476-3.965v-.001l1.356-.653-1.52-2.631-1.243.848ZM3.279 8.119l.835 1.445 1.355-.653-.947-1.64Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M17.155 22.87a.75.75 0 0 0 .226-1.036l-4-6.239a.75.75 0 0 0-.941-.277l-2.75 1.25a.75.75 0 0 0-.318.273l-3.25 4.989a.75.75 0 0 0 1.256.819l3.131-4.806.51-.232v5.64a.75.75 0 1 0 1.5 0v-6.22l3.6 5.613a.75.75 0 0 0 1.036.226ZM.408 15.13a2 2 0 0 1 .59-2.642L17.038 1.33a1.999 1.999 0 0 1 2.85.602l2.828 4.644a2 2 0 0 1-.851 2.847l-17.762 8.43a2 2 0 0 1-2.59-.807Zm13.105-9.521 2.857 4.76 1.361-.646-2.984-4.973Zm-7.842 5.455-1.235.86 1.862 3.225 1.36-.645Z",
        }),
      },
    };
  }),
  ta = c("TerminalIcon", "octicon octicon-terminal", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM7.25 8a.749.749 0 0 1-.22.53l-2.25 2.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L5.44 8 3.72 6.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.25 2.25c.141.14.22.331.22.53Zm1.5 1.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z",
          }),
          a.createElement("path", {
            d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z",
          })
        ),
      },
    };
  }),
  ea = c("ThreeBarsIcon", "octicon octicon-three-bars", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z",
        }),
      },
    };
  }),
  na = c("ThumbsdownIcon", "octicon octicon-thumbsdown", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.083 15.986c-.763-.087-1.499-.295-2.011-.884-.504-.581-.655-1.378-.655-2.299 0-.468.087-1.12.157-1.638l.015-.112H3.167c-.603 0-1.174-.086-1.669-.334a2.415 2.415 0 0 1-1.136-1.2c-.454-.998-.438-2.447-.188-4.316l.04-.306C.32 4.108.41 3.424.526 2.864c.132-.63.316-1.209.669-1.672C1.947.205 3.211.053 4.917.053c1.848 0 3.234.332 4.388.652l.474.133c.658.187 1.201.341 1.726.415a1.75 1.75 0 0 1 1.662-1.2h1c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.514-.872c-.259.105-.59.268-.919.508-.671.491-1.317 1.285-1.317 2.614v.5c0 1.201-.994 2.336-2.334 2.183Zm4.334-13.232c-.706-.089-1.39-.284-2.072-.479l-.441-.125c-1.096-.304-2.335-.597-3.987-.597-1.794 0-2.28.222-2.529.548-.147.193-.275.505-.393 1.07-.105.502-.188 1.124-.295 1.93l-.04.3c-.25 1.882-.19 2.933.067 3.497a.923.923 0 0 0 .443.48c.208.104.52.175.997.175h1.75c.685 0 1.295.577 1.205 1.335-.022.192-.049.39-.075.586-.066.488-.13.97-.13 1.329 0 .808.144 1.15.288 1.316.137.157.401.303 1.048.377.307.035.664-.237.664-.693v-.5c0-1.922.978-3.127 1.932-3.825a5.878 5.878 0 0 1 1.568-.809Zm1.75 6.798h1a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.596 21.957c-1.301.092-2.303-.986-2.303-2.206v-1.053c0-2.666-1.813-3.785-2.774-4.2a1.884 1.884 0 0 0-.523-.13A1.75 1.75 0 0 1 5.25 16h-1.5A1.75 1.75 0 0 1 2 14.25V3.75C2 2.784 2.784 2 3.75 2h1.5a1.75 1.75 0 0 1 1.742 1.58c.838-.06 1.667-.296 2.69-.586l.602-.17C11.748 2.419 13.497 2 15.828 2c2.188 0 3.693.204 4.583 1.372.422.554.65 1.255.816 2.05.148.708.262 1.57.396 2.58l.051.39c.319 2.386.328 4.18-.223 5.394-.293.644-.743 1.125-1.355 1.431-.59.296-1.284.404-2.036.404h-2.05l.056.429c.025.18.05.372.076.572.06.483.117 1.006.117 1.438 0 1.245-.222 2.253-.92 2.942-.684.674-1.668.879-2.743.955ZM7 5.082v7.779c.383.025.759.113 1.113.26 1.192.514 3.68 2.027 3.68 5.577v1.053c0 .436.347.734.698.71 1.021-.072 1.52-.258 1.795-.528.26-.256.473-.748.473-1.873 0-.328-.045-.768-.105-1.25l-.07-.527c-.04-.297-.079-.59-.105-.834-.082-.758.53-1.328 1.211-1.328h2.37c.625 0 1.06-.092 1.365-.245.285-.142.5-.359.66-.711.355-.78.422-2.176.102-4.574l-.05-.385c-.137-1.027-.243-1.827-.379-2.477-.152-.73-.324-1.165-.54-1.448-.386-.507-1.113-.781-3.39-.781-2.136 0-3.736.379-5.142.771-.191.052-.38.106-.568.16-1.039.296-2.059.587-3.118.651ZM3.75 3.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z",
        }),
      },
    };
  }),
  ca = c("ThumbsupIcon", "octicon octicon-thumbsup", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M8.834.066c.763.087 1.5.295 2.01.884.505.581.656 1.378.656 2.3 0 .467-.087 1.119-.157 1.637L11.328 5h1.422c.603 0 1.174.085 1.668.333.508.254.911.679 1.137 1.2.453.998.438 2.447.188 4.316l-.04.306c-.105.79-.195 1.473-.313 2.033-.131.63-.315 1.209-.668 1.672C13.97 15.847 12.706 16 11 16c-1.848 0-3.234-.333-4.388-.653-.165-.045-.323-.09-.475-.133-.658-.186-1.2-.34-1.725-.415A1.75 1.75 0 0 1 2.75 16h-1A1.75 1.75 0 0 1 0 14.25v-7.5C0 5.784.784 5 1.75 5h1a1.75 1.75 0 0 1 1.514.872c.258-.105.59-.268.918-.508C5.853 4.874 6.5 4.079 6.5 2.75v-.5c0-1.202.994-2.337 2.334-2.184ZM4.5 13.3c.705.088 1.39.284 2.072.478l.441.125c1.096.305 2.334.598 3.987.598 1.794 0 2.28-.223 2.528-.549.147-.193.276-.505.394-1.07.105-.502.188-1.124.295-1.93l.04-.3c.25-1.882.189-2.933-.068-3.497a.921.921 0 0 0-.442-.48c-.208-.104-.52-.174-.997-.174H11c-.686 0-1.295-.577-1.206-1.336.023-.192.05-.39.076-.586.065-.488.13-.97.13-1.328 0-.809-.144-1.15-.288-1.316-.137-.158-.402-.304-1.048-.378C8.357 1.521 8 1.793 8 2.25v.5c0 1.922-.978 3.128-1.933 3.825a5.831 5.831 0 0 1-1.567.81ZM2.75 6.5h-1a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M12.596 2.043c1.075.076 2.059.281 2.743.956.698.688.92 1.696.92 2.941 0 .432-.057.955-.117 1.438-.026.2-.051.392-.076.572l-.056.429h2.05c.752 0 1.446.108 2.036.404.612.306 1.062.787 1.355 1.431.551 1.214.542 3.008.223 5.394l-.051.39c-.134 1.01-.248 1.872-.396 2.58-.166.795-.394 1.496-.816 2.05-.89 1.168-2.395 1.372-4.583 1.372-2.331 0-4.08-.418-5.544-.824l-.602-.17c-1.023-.29-1.852-.526-2.69-.586A1.75 1.75 0 0 1 5.25 22h-1.5A1.75 1.75 0 0 1 2 20.25V9.75C2 8.784 2.784 8 3.75 8h1.5a1.75 1.75 0 0 1 1.746 1.633 1.85 1.85 0 0 0 .523-.131c.961-.415 2.774-1.534 2.774-4.2V4.249c0-1.22 1.002-2.298 2.303-2.206ZM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26ZM3.75 20.5h1.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25Z",
        }),
      },
    };
  }),
  oa = c("ToolsIcon", "octicon octicon-tools", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.433 2.304A4.492 4.492 0 0 0 3.5 6c0 1.598.832 3.002 2.09 3.802.518.328.929.923.902 1.64v.008l-.164 3.337a.75.75 0 1 1-1.498-.073l.163-3.33c.002-.085-.05-.216-.207-.316A5.996 5.996 0 0 1 2 6a5.993 5.993 0 0 1 2.567-4.92 1.482 1.482 0 0 1 1.673-.04c.462.296.76.827.76 1.423v2.82c0 .082.041.16.11.206l.75.51a.25.25 0 0 0 .28 0l.75-.51A.249.249 0 0 0 9 5.282V2.463c0-.596.298-1.127.76-1.423a1.482 1.482 0 0 1 1.673.04A5.993 5.993 0 0 1 14 6a5.996 5.996 0 0 1-2.786 5.068c-.157.1-.209.23-.207.315l.163 3.33a.752.752 0 0 1-1.094.714.75.75 0 0 1-.404-.64l-.164-3.345c-.027-.717.384-1.312.902-1.64A4.495 4.495 0 0 0 12.5 6a4.492 4.492 0 0 0-1.933-3.696c-.024.017-.067.067-.067.16v2.818a1.75 1.75 0 0 1-.767 1.448l-.75.51a1.75 1.75 0 0 1-1.966 0l-.75-.51A1.75 1.75 0 0 1 5.5 5.282V2.463c0-.092-.043-.142-.067-.159Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.875 2.292a.114.114 0 0 0-.032.018A7.239 7.239 0 0 0 4.75 8.25a7.248 7.248 0 0 0 3.654 6.297c.57.327.982.955.941 1.682v.002l-.317 6.058a.75.75 0 1 1-1.498-.078l.317-6.062v-.004c.006-.09-.047-.215-.188-.296A8.749 8.749 0 0 1 3.25 8.25a8.738 8.738 0 0 1 3.732-7.169 1.547 1.547 0 0 1 1.709-.064c.484.292.809.835.809 1.46v4.714a.25.25 0 0 0 .119.213l2.25 1.385c.08.05.182.05.262 0l2.25-1.385a.25.25 0 0 0 .119-.213V2.478c0-.626.325-1.169.81-1.461a1.547 1.547 0 0 1 1.708.064 8.741 8.741 0 0 1 3.732 7.17 8.747 8.747 0 0 1-4.41 7.598c-.14.081-.193.206-.188.296v.004l.318 6.062a.75.75 0 1 1-1.498.078l-.317-6.058v-.002c-.041-.727.37-1.355.94-1.682A7.247 7.247 0 0 0 19.25 8.25a7.239 7.239 0 0 0-3.093-5.94.114.114 0 0 0-.032-.018l-.01-.001c-.003 0-.014 0-.031.01-.036.022-.084.079-.084.177V7.19c0 .608-.315 1.172-.833 1.49l-2.25 1.385a1.75 1.75 0 0 1-1.834 0l-2.25-1.384A1.752 1.752 0 0 1 8 7.192V2.477c0-.098-.048-.155-.084-.176a.068.068 0 0 0-.031-.011l-.01.001Z",
        }),
      },
    };
  }),
  la = c("TrashIcon", "octicon octicon-trash", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z",
          }),
          a.createElement("path", {
            d: "M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z",
          })
        ),
      },
    };
  }),
  ra = c("TriangleDownIcon", "octicon octicon-triangle-down", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M11.646 15.146 5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0Z",
        }),
      },
    };
  }),
  ha = c("TriangleLeftIcon", "octicon octicon-triangle-left", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.573 4.427 6.177 7.823a.25.25 0 0 0 0 .354l3.396 3.396a.25.25 0 0 0 .427-.177V4.604a.25.25 0 0 0-.427-.177Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "m8.854 11.646 5.792-5.792a.5.5 0 0 1 .854.353v11.586a.5.5 0 0 1-.854.353l-5.792-5.792a.5.5 0 0 1 0-.708Z",
        }),
      },
    };
  }),
  ia = c("TriangleRightIcon", "octicon octicon-triangle-right", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m6.427 4.427 3.396 3.396a.25.25 0 0 1 0 .354l-3.396 3.396A.25.25 0 0 1 6 11.396V4.604a.25.25 0 0 1 .427-.177Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "m15.146 12.354-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708Z",
        }),
      },
    };
  }),
  da = c("TriangleUpIcon", "octicon octicon-triangle-up", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m4.427 9.573 3.396-3.396a.25.25 0 0 1 .354 0l3.396 3.396a.25.25 0 0 1-.177.427H4.604a.25.25 0 0 1-.177-.427Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "m12.354 8.854 5.792 5.792a.5.5 0 0 1-.353.854H6.207a.5.5 0 0 1-.353-.854l5.792-5.792a.5.5 0 0 1 .708 0Z",
        }),
      },
    };
  }),
  pa = c("TrophyIcon", "octicon octicon-trophy", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712 5.014 5.014 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204.086.087.217.17.373.227.283.103.618.274.89.568.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226.27-.294.606-.465.889-.568.139-.048.266-.126.373-.227.084-.085.109-.153.114-.204l.144-1.446a5.015 5.015 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.068.068 0 0 0-.068-.068H4.568a.068.068 0 0 0-.068.068Zm2.957 8.902-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.766.766 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.766.766 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5.064 5.064 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25H13Zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.09 10.121A5.251 5.251 0 0 1 1 5V3.75C1 2.784 1.784 2 2.75 2h2.364c.236-.586.81-1 1.48-1h10.812c.67 0 1.244.414 1.48 1h2.489c.966 0 1.75.784 1.75 1.75V5a5.252 5.252 0 0 1-4.219 5.149 7.01 7.01 0 0 1-4.644 5.478l.231 3.003a.5.5 0 0 0 .034.031c.079.065.303.203.836.282.838.124 1.637.81 1.637 1.807v.75h2.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H7v-.75c0-.996.8-1.683 1.637-1.807.533-.08.757-.217.836-.282a.5.5 0 0 0 .034-.031l.231-3.003A7.012 7.012 0 0 1 5.09 10.12ZM6.5 2.594V9a5.5 5.5 0 1 0 11 0V2.594a.094.094 0 0 0-.094-.094H6.594a.094.094 0 0 0-.094.094Zm4.717 13.363-.215 2.793-.001.021-.003.043a1.212 1.212 0 0 1-.022.147c-.05.237-.194.567-.553.86-.348.286-.853.5-1.566.605a.478.478 0 0 0-.274.136.264.264 0 0 0-.083.188v.75h7v-.75a.264.264 0 0 0-.083-.188.478.478 0 0 0-.274-.136c-.713-.105-1.218-.32-1.567-.604-.358-.294-.502-.624-.552-.86a1.22 1.22 0 0 1-.025-.19l-.001-.022-.215-2.793a7.069 7.069 0 0 1-1.566 0ZM19 8.578A3.751 3.751 0 0 0 21.625 5V3.75a.25.25 0 0 0-.25-.25H19ZM5 3.5H2.75a.25.25 0 0 0-.25.25V5A3.752 3.752 0 0 0 5 8.537Z",
        }),
      },
    };
  }),
  ma = c("TypographyIcon", "octicon octicon-typography", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.71 10H2.332l-.874 2.498a.75.75 0 0 1-1.415-.496l3.39-9.688a1.217 1.217 0 0 1 2.302.018l3.227 9.681a.75.75 0 0 1-1.423.474Zm3.13-4.358C10.53 4.374 11.87 4 13 4c1.5 0 3 .939 3 2.601v5.649a.75.75 0 0 1-1.448.275C13.995 12.82 13.3 13 12.5 13c-.77 0-1.514-.231-2.078-.709-.577-.488-.922-1.199-.922-2.041 0-.694.265-1.411.887-1.944C11 7.78 11.88 7.5 13 7.5h1.5v-.899c0-.54-.5-1.101-1.5-1.101-.869 0-1.528.282-1.84.858a.75.75 0 1 1-1.32-.716ZM6.21 8.5 4.574 3.594 2.857 8.5Zm8.29.5H13c-.881 0-1.375.22-1.637.444-.253.217-.363.5-.363.806 0 .408.155.697.39.896.249.21.63.354 1.11.354.732 0 1.26-.209 1.588-.449.35-.257.412-.495.412-.551Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10.414 15H3.586l-1.631 4.505a.75.75 0 1 1-1.41-.51l5.08-14.03a1.463 1.463 0 0 1 2.75 0l5.08 14.03a.75.75 0 1 1-1.411.51Zm4.532-5.098c.913-1.683 2.703-2.205 4.284-2.205 1.047 0 2.084.312 2.878.885.801.577 1.392 1.455 1.392 2.548v8.12a.75.75 0 0 1-1.5 0v-.06l-.044.025c-.893.52-2.096.785-3.451.785-1.051 0-2.048-.315-2.795-.948-.76-.643-1.217-1.578-1.217-2.702 0-.919.349-1.861 1.168-2.563.81-.694 2-1.087 3.569-1.087H22v-1.57c0-.503-.263-.967-.769-1.332-.513-.37-1.235-.6-2.001-.6-1.319 0-2.429.43-2.966 1.42a.75.75 0 0 1-1.318-.716ZM9.87 13.5 7 5.572 4.13 13.5Zm12.13.7h-2.77c-1.331 0-2.134.333-2.593.726a1.822 1.822 0 0 0-.644 1.424c0 .689.267 1.203.686 1.557.43.365 1.065.593 1.826.593 1.183 0 2.102-.235 2.697-.581.582-.34.798-.74.798-1.134Z",
        }),
      },
    };
  }),
  va = c("UnfoldIcon", "octicon octicon-unfold", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m8.177.677 2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25a.75.75 0 0 1-1.5 0V4H5.104a.25.25 0 0 1-.177-.427L7.823.677a.25.25 0 0 1 .354 0ZM7.25 10.75a.75.75 0 0 1 1.5 0V12h2.146a.25.25 0 0 1 .177.427l-2.896 2.896a.25.25 0 0 1-.354 0l-2.896-2.896A.25.25 0 0 1 5.104 12H7.25v-1.25Zm-5-2a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 23a.749.749 0 0 1-.53-.22l-3.25-3.25a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215L12 21.19l2.72-2.72a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-3.25 3.25A.749.749 0 0 1 12 23Z",
          }),
          a.createElement("path", {
            d: "M11.47 1.22a.75.75 0 0 1 1.06 0l3.25 3.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L12 2.81 9.28 5.53a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042ZM12 22.25a.75.75 0 0 1-.75-.75v-5.75a.75.75 0 0 1 1.5 0v5.75a.75.75 0 0 1-.75.75ZM2.75 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z",
          }),
          a.createElement("path", {
            d: "M12 1.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 12 1.5Z",
          })
        ),
      },
    };
  }),
  ua = c("UnlinkIcon", "octicon octicon-unlink", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M12.914 5.914a2 2 0 0 0-2.828-2.828l-.837.837a.75.75 0 1 1-1.06-1.061l.836-.837a3.5 3.5 0 1 1 4.95 4.95l-.195.194a.75.75 0 0 1-1.06-1.06l.194-.195Zm-1.87 3.482a.759.759 0 0 1-.07.079c-.63.63-1.468 1.108-2.343 1.263-.89.159-1.86-.017-2.606-.763a.75.75 0 1 1 1.06-1.06c.329.327.767.438 1.284.347.493-.088 1.018-.36 1.445-.752l-1.247-.897a.709.709 0 0 1-.01-.008l-.295-.212c-.94-.597-1.984-.499-2.676.193l-2.5 2.5a2 2 0 1 0 2.828 2.828l.837-.836a.75.75 0 0 1 1.06 1.06l-.836.837a3.5 3.5 0 0 1-4.95-4.95l2.5-2.5a3.472 3.472 0 0 1 1.354-.848L2.312 3.109a.75.75 0 0 1 .876-1.218l5.93 4.27c.115.074.226.155.335.24l6.235 4.49a.75.75 0 0 1-.876 1.218l-3.768-2.713Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M20.347 3.653a3.936 3.936 0 0 0-5.567 0l-1.75 1.75a.75.75 0 0 1-1.06-1.06l1.75-1.75a5.436 5.436 0 0 1 7.688 7.687l-1.564 1.564a.75.75 0 0 1-1.06-1.06l1.563-1.564a3.936 3.936 0 0 0 0-5.567ZM9.786 12.369a.75.75 0 0 1 1.053.125c.096.122.2.24.314.353 1.348 1.348 3.386 1.587 4.89.658l-3.922-2.858a.745.745 0 0 1-.057-.037c-1.419-1.013-3.454-.787-4.784.543L3.653 14.78a3.936 3.936 0 0 0 5.567 5.567l3-3a.75.75 0 1 1 1.06 1.06l-3 3a5.436 5.436 0 1 1-7.688-7.687l3.628-3.628a5.517 5.517 0 0 1 3.014-1.547l-7.05-5.136a.75.75 0 0 1 .883-1.213l20.25 14.75a.75.75 0 0 1-.884 1.213l-5.109-3.722c-2.155 1.709-5.278 1.425-7.232-.53a5.491 5.491 0 0 1-.431-.485.75.75 0 0 1 .125-1.053Z",
        }),
      },
    };
  }),
  Za = c("UnlockIcon", "octicon octicon-unlock", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M5.5 4v2h7A1.5 1.5 0 0 1 14 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5v-6A1.5 1.5 0 0 1 3.499 6H4V4a4 4 0 0 1 7.371-2.154.75.75 0 0 1-1.264.808A2.5 2.5 0 0 0 5.5 4Zm-2 3.5v6h9v-6h-9Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M7.5 7.25V9h11a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9H6V7.25C6 3.845 8.503 1 12 1c2.792 0 4.971 1.825 5.718 4.31a.75.75 0 1 1-1.436.432C15.71 3.84 14.079 2.5 12 2.5c-2.578 0-4.5 2.08-4.5 4.75Zm-3 4.25v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Z",
        }),
      },
    };
  }),
  sa = c("UnmuteIcon", "octicon octicon-unmute", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.563 2.069A.75.75 0 0 1 8 2.75v10.5a.751.751 0 0 1-1.238.57L3.472 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 0 1 .801-.111ZM6.5 4.38 4.238 6.319a.748.748 0 0 1-.488.181h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62Zm6.096-2.038a.75.75 0 0 1 1.06 0 8 8 0 0 1 0 11.314.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042 6.5 6.5 0 0 0 0-9.193.75.75 0 0 1 0-1.06Zm-1.06 2.121-.001.001a5 5 0 0 1 0 7.07.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734 3.5 3.5 0 0 0 0-4.95.75.75 0 1 1 1.061-1.061Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.553 3.064A.75.75 0 0 1 12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.752.752 0 0 1 .808-.13ZM10.5 5.445l-4.245 3.86a.748.748 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86Zm8.218-1.223a.75.75 0 0 1 1.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 0 1-1.06-1.06 9.5 9.5 0 0 0 0-13.436.75.75 0 0 1 0-1.06Z",
          }),
          a.createElement("path", {
            d: "M16.243 7.757a.75.75 0 1 0-1.061 1.061 4.5 4.5 0 0 1 0 6.364.75.75 0 0 0 1.06 1.06 6 6 0 0 0 0-8.485Z",
          })
        ),
      },
    };
  }),
  Ma = c("UnreadIcon", "octicon octicon-unread", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.5 3.5H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l3.02-1.77a.75.75 0 0 1 .758 1.295L8.379 9.397a.75.75 0 0 1-.758 0L1.5 5.809v6.441c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4.5a.75.75 0 0 1 1.5 0v4.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25V4.513a.75.75 0 0 1 0-.027V3.75C0 2.784.784 2 1.75 2h8.75a.75.75 0 0 1 0 1.5Z",
          }),
          a.createElement("path", { d: "M14 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.75 4.5a.25.25 0 0 0-.25.25v.852l10.36 7a.25.25 0 0 0 .28 0l5.69-3.845A.75.75 0 0 1 18.67 10l-5.69 3.845c-.592.4-1.368.4-1.96 0L1.5 7.412V19.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25v-8.5a.75.75 0 0 1 1.5 0v8.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3h15.5a.75.75 0 0 1 0 1.5H1.75Z",
          }),
          a.createElement("path", {
            d: "M24 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
          })
        ),
      },
    };
  }),
  fa = c("UnverifiedIcon", "octicon octicon-unverified", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M6.415.52a2.677 2.677 0 0 1 3.17 0l.928.68c.153.113.33.186.518.215l1.138.175a2.678 2.678 0 0 1 2.241 2.24l.175 1.138c.029.187.102.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.186 1.186 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.186 1.186 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.186 1.186 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.186 1.186 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928a1.17 1.17 0 0 0 .215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.138-.175c.187-.029.365-.102.518-.215l.928-.68Zm2.282 1.209a1.18 1.18 0 0 0-1.394 0l-.928.68a2.67 2.67 0 0 1-1.18.489l-1.136.174a1.18 1.18 0 0 0-.987.987l-.174 1.137a2.67 2.67 0 0 1-.489 1.18l-.68.927c-.305.415-.305.98 0 1.394l.68.928c.256.348.423.752.489 1.18l.174 1.136c.078.51.478.909.987.987l1.137.174c.427.066.831.233 1.18.489l.927.68c.415.305.98.305 1.394 0l.928-.68a2.67 2.67 0 0 1 1.18-.489l1.136-.174c.51-.078.909-.478.987-.987l.174-1.137c.066-.427.233-.831.489-1.18l.68-.927c.305-.415.305-.98 0-1.394l-.68-.928a2.67 2.67 0 0 1-.489-1.18l-.174-1.136a1.18 1.18 0 0 0-.987-.987l-1.137-.174a2.67 2.67 0 0 1-1.18-.489ZM6.92 6.085h.001a.75.75 0 0 1-1.342-.67c.169-.339.436-.701.849-.977C6.846 4.16 7.369 4 8 4a2.76 2.76 0 0 1 1.638.525c.502.377.862.965.862 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.109-.073.22-.139.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.517-7.665c.112-.223.268-.424.488-.57C11.186 8.12 11.506 8 12 8c.384 0 .766.118 1.034.319a.953.953 0 0 1 .403.806c0 .48-.218.81-.62 1.186a9.293 9.293 0 0 1-.409.354 19.8 19.8 0 0 0-.294.249c-.246.213-.524.474-.738.795l-.126.19V13.5a.75.75 0 0 0 1.5 0v-1.12c.09-.1.203-.208.347-.333.063-.055.14-.119.222-.187.166-.14.358-.3.52-.452.536-.5 1.098-1.2 1.098-2.283a2.45 2.45 0 0 0-1.003-2.006C13.37 6.695 12.658 6.5 12 6.5c-.756 0-1.373.191-1.861.517a2.944 2.944 0 0 0-.997 1.148.75.75 0 0 0 1.341.67Z",
          }),
          a.createElement("path", {
            d: "M9.864 1.2a3.61 3.61 0 0 1 4.272 0l1.375 1.01c.274.2.593.333.929.384l1.686.259a3.61 3.61 0 0 1 3.021 3.02l.259 1.687c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.686a3.61 3.61 0 0 1-3.02 3.021l-1.687.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.686-.259a3.61 3.61 0 0 1-3.021-3.02l-.259-1.687a2.106 2.106 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.686a3.61 3.61 0 0 1 3.02-3.021l1.687-.259c.336-.051.655-.183.929-.384Zm3.384 1.209a2.11 2.11 0 0 0-2.496 0l-1.376 1.01a3.61 3.61 0 0 1-1.589.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.614 3.614 0 0 1-.658 1.59l-1.01 1.375a2.11 2.11 0 0 0 0 2.496l1.01 1.376a3.61 3.61 0 0 1 .658 1.589l.258 1.686a2.11 2.11 0 0 0 1.766 1.765l1.686.26a3.613 3.613 0 0 1 1.59.657l1.375 1.01a2.11 2.11 0 0 0 2.496 0l1.376-1.01a3.61 3.61 0 0 1 1.589-.658l1.686-.258a2.11 2.11 0 0 0 1.765-1.766l.26-1.686a3.613 3.613 0 0 1 .657-1.59l1.01-1.375a2.11 2.11 0 0 0 0-2.496l-1.01-1.376a3.61 3.61 0 0 1-.658-1.589l-.258-1.686a2.111 2.111 0 0 0-1.766-1.766l-1.686-.258a3.614 3.614 0 0 1-1.59-.658Z",
          })
        ),
      },
    };
  }),
  Aa = c("UploadIcon", "octicon octicon-upload", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z",
          }),
          a.createElement("path", {
            d: "M11.78 4.72a.749.749 0 1 1-1.06 1.06L8.75 3.811V9.5a.75.75 0 0 1-1.5 0V3.811L5.28 5.78a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0l3.25 3.25Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4 20.25V18a.75.75 0 0 1 1.5 0v2.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V18a.75.75 0 0 1 1.5 0v2.25A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25Z",
          }),
          a.createElement("path", {
            d: "M5.22 9.53a.749.749 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 1 1-1.06 1.06l-4.97-4.969V16.75a.75.75 0 0 1-1.5 0V4.561L6.28 9.53a.749.749 0 0 1-1.06 0Z",
          })
        ),
      },
    };
  }),
  Ea = c("VerifiedIcon", "octicon octicon-verified", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.678 2.678 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.174 1.174 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.17 1.17 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.174 1.174 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.17 1.17 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.677 2.677 0 0 1 3.17 0ZM7.303 1.728l-.927.68a2.67 2.67 0 0 1-1.18.489l-1.137.174a1.179 1.179 0 0 0-.987.987l-.174 1.136a2.677 2.677 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.67 2.67 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.67 2.67 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.67 2.67 0 0 1 .489-1.18l.68-.928a1.176 1.176 0 0 0 0-1.394l-.68-.927a2.686 2.686 0 0 1-.489-1.18l-.174-1.137a1.179 1.179 0 0 0-.987-.987l-1.136-.174a2.677 2.677 0 0 1-1.18-.489l-.928-.68a1.176 1.176 0 0 0-1.394 0ZM11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L7 8.94l3.22-3.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z",
          }),
          a.createElement("path", {
            d: "m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z",
          })
        ),
      },
    };
  }),
  wa = c("VersionsIcon", "octicon octicon-versions", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M7.75 14A1.75 1.75 0 0 1 6 12.25v-8.5C6 2.784 6.784 2 7.75 2h6.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14Zm-.25-1.75c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25ZM4.9 3.508a.75.75 0 0 1-.274 1.025.249.249 0 0 0-.126.217v6.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.75 1.75 0 0 1 3 11.25v-6.5c0-.649.353-1.214.874-1.516a.75.75 0 0 1 1.025.274ZM1.625 5.533h.001a.249.249 0 0 0-.126.217v4.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 0 10.25v-4.5a1.748 1.748 0 0 1 .873-1.516.75.75 0 1 1 .752 1.299Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M10 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Zm-.5-2a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5ZM6.17 4.165a.75.75 0 0 1-.335 1.006c-.228.114-.295.177-.315.201a.035.035 0 0 0-.008.016.423.423 0 0 0-.012.112v13c0 .07.008.102.012.112a.03.03 0 0 0 .008.016c.02.024.087.087.315.201a.749.749 0 1 1-.67 1.342c-.272-.136-.58-.315-.81-.598C4.1 19.259 4 18.893 4 18.5v-13c0-.393.1-.759.355-1.073.23-.283.538-.462.81-.598a.75.75 0 0 1 1.006.336ZM2.15 5.624a.75.75 0 0 1-.274 1.025c-.15.087-.257.17-.32.245C1.5 6.96 1.5 6.99 1.5 7v10c0 .01 0 .04.056.106.063.074.17.158.32.245a.75.75 0 0 1-.752 1.298C.73 18.421 0 17.907 0 17V7c0-.907.73-1.42 1.124-1.65a.75.75 0 0 1 1.025.274Z",
        }),
      },
    };
  }),
  ga = c("VideoIcon", "octicon octicon-video", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z",
          }),
          a.createElement("path", {
            d: "M6 10.559V5.442a.25.25 0 0 1 .379-.215l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z",
          }),
          a.createElement("path", {
            d: "M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z",
          })
        ),
      },
    };
  }),
  Va = c("WebhookIcon", "octicon octicon-webhook", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.5 4.25a2.25 2.25 0 0 1 4.5 0 .75.75 0 0 0 1.5 0 3.75 3.75 0 1 0-6.14 2.889l-2.272 4.258a.75.75 0 0 0 1.324.706L7 7.25a.75.75 0 0 0-.309-1.015A2.25 2.25 0 0 1 5.5 4.25Z",
          }),
          a.createElement("path", {
            d: "M7.364 3.607a.75.75 0 0 1 1.03.257l2.608 4.349a3.75 3.75 0 1 1-.628 6.785.75.75 0 0 1 .752-1.299 2.25 2.25 0 1 0-.033-3.88.75.75 0 0 1-1.03-.256L7.107 4.636a.75.75 0 0 1 .257-1.03Z",
          }),
          a.createElement("path", {
            d: "M2.9 8.776A.75.75 0 0 1 2.625 9.8 2.25 2.25 0 1 0 6 11.75a.75.75 0 0 1 .75-.751h5.5a.75.75 0 0 1 0 1.5H7.425a3.751 3.751 0 1 1-5.55-3.998.75.75 0 0 1 1.024.274Z",
          })
        ),
      },
    };
  }),
  Ha = c("WorkflowIcon", "octicon octicon-workflow", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25Zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z",
        }),
      },
    };
  }),
  Ia = c("XIcon", "octicon octicon-x", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z",
        }),
      },
    };
  }),
  Ca = c("XCircleIcon", "octicon octicon-x-circle", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.344 2.343h-.001a8 8 0 0 1 11.314 11.314A8.002 8.002 0 0 1 .234 10.089a8 8 0 0 1 2.11-7.746Zm1.06 10.253a6.5 6.5 0 1 0 9.108-9.275 6.5 6.5 0 0 0-9.108 9.275ZM6.03 4.97 8 6.94l1.97-1.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l1.97 1.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-1.97 1.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L6.94 8 4.97 6.03a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.036 7.976a.75.75 0 0 0-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 1 0 1.06 1.06L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.75.75 0 1 0-1.06-1.06L12 10.939 9.036 7.976Z",
          }),
          a.createElement("path", {
            d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z",
          })
        ),
      },
    };
  }),
  La = c("XCircleFillIcon", "octicon octicon-x-circle-fill", function () {
    return {
      12: {
        width: 12,
        path: a.createElement("path", {
          d: "M1.757 10.243a6.001 6.001 0 1 1 8.488-8.486 6.001 6.001 0 0 1-8.488 8.486ZM6 4.763l-2-2L2.763 4l2 2-2 2L4 9.237l2-2 2 2L9.237 8l-2-2 2-2L8 2.763Z",
        }),
      },
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L12 10.939Z",
        }),
      },
    };
  }),
  ya = c("ZapIcon", "octicon octicon-zap", function () {
    return {
      16: {
        width: 16,
        path: a.createElement("path", {
          d: "M9.504.43a1.516 1.516 0 0 1 2.437 1.713L10.415 5.5h2.123c1.57 0 2.346 1.909 1.22 3.004l-7.34 7.142a1.249 1.249 0 0 1-.871.354h-.302a1.25 1.25 0 0 1-1.157-1.723L5.633 10.5H3.462c-1.57 0-2.346-1.909-1.22-3.004L9.503.429Zm1.047 1.074L3.286 8.571A.25.25 0 0 0 3.462 9H6.75a.75.75 0 0 1 .694 1.034l-1.713 4.188 6.982-6.793A.25.25 0 0 0 12.538 7H9.25a.75.75 0 0 1-.683-1.06l2.008-4.418.003-.006a.036.036 0 0 0-.004-.009l-.006-.006-.008-.001c-.003 0-.006.002-.009.004Z",
        }),
      },
      24: {
        width: 24,
        path: a.createElement("path", {
          d: "M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z",
        }),
      },
    };
  }),
  ba = c("ZoomInIcon", "octicon octicon-zoom-in", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.75 7.5a.75.75 0 0 1 .75-.75h2.25V4.5a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H8.25v2.25a.75.75 0 0 1-1.5 0V8.25H4.5a.75.75 0 0 1-.75-.75Z",
          }),
          a.createElement("path", {
            d: "M7.5 0a7.5 7.5 0 0 1 5.807 12.247l2.473 2.473a.749.749 0 1 1-1.06 1.06l-2.473-2.473A7.5 7.5 0 1 1 7.5 0Zm-6 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.5 5.75a.75.75 0 0 1 .75.75v3.25h3.25a.75.75 0 0 1 0 1.5h-3.25v3.25a.75.75 0 0 1-1.5 0v-3.25H6.5a.75.75 0 0 1 0-1.5h3.25V6.5a.75.75 0 0 1 .75-.75Z",
          }),
          a.createElement("path", {
            d: "M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.749.749 0 1 1-1.06 1.06l-4.345-4.344A10.459 10.459 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5Zm10.5-9a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Z",
          })
        ),
      },
    };
  }),
  Sa = c("ZoomOutIcon", "octicon octicon-zoom-out", function () {
    return {
      16: {
        width: 16,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.5 6.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5Z",
          }),
          a.createElement("path", {
            d: "M0 7.5a7.5 7.5 0 1 1 13.307 4.747l2.473 2.473a.749.749 0 1 1-1.06 1.06l-2.473-2.473A7.5 7.5 0 0 1 0 7.5Zm7.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z",
          })
        ),
      },
      24: {
        width: 24,
        path: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M14.5 11.25a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5h8Z",
          }),
          a.createElement("path", {
            d: "M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.749.749 0 1 1-1.06 1.06l-4.345-4.344A10.459 10.459 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5Zm10.5-9a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Z",
          })
        ),
      },
    };
  }),
  ka = ["icon", "children"];
function Fa(t) {
  var o = t.icon,
    e = t.children,
    l = X0(t, ka);
  return (
    console.warn(
      "<Octicon> is deprecated. Use icon components on their own instead (e.g. <Octicon icon={AlertIcon} /> → <AlertIcon />)"
    ),
    typeof o == "function"
      ? a.createElement(o, l)
      : a.cloneElement(a.Children.only(e), l)
  );
}
const $a = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AccessibilityIcon: Y0,
      AccessibilityInsetIcon: K0,
      AlertFillIcon: J0,
      AlertIcon: Q0,
      AppsIcon: a2,
      ArchiveIcon: t2,
      ArrowBothIcon: e2,
      ArrowDownIcon: n2,
      ArrowDownLeftIcon: c2,
      ArrowDownRightIcon: o2,
      ArrowLeftIcon: l2,
      ArrowRightIcon: r2,
      ArrowSwitchIcon: h2,
      ArrowUpIcon: i2,
      ArrowUpLeftIcon: d2,
      ArrowUpRightIcon: p2,
      BeakerIcon: m2,
      BellFillIcon: u2,
      BellIcon: v2,
      BellSlashIcon: Z2,
      BlockedIcon: s2,
      BoldIcon: M2,
      BookIcon: f2,
      BookmarkFillIcon: E2,
      BookmarkIcon: A2,
      BookmarkSlashFillIcon: g2,
      BookmarkSlashIcon: w2,
      BriefcaseIcon: V2,
      BroadcastIcon: H2,
      BrowserIcon: I2,
      BugIcon: C2,
      CacheIcon: L2,
      CalendarIcon: y2,
      CheckCircleFillIcon: k2,
      CheckCircleIcon: S2,
      CheckIcon: b2,
      CheckboxIcon: F2,
      ChecklistIcon: T2,
      ChevronDownIcon: P2,
      ChevronLeftIcon: D2,
      ChevronRightIcon: x2,
      ChevronUpIcon: R2,
      CircleIcon: O2,
      CircleSlashIcon: N2,
      ClockFillIcon: W2,
      ClockIcon: B2,
      CloudIcon: z2,
      CloudOfflineIcon: $2,
      CodeIcon: _2,
      CodeOfConductIcon: U2,
      CodeReviewIcon: j2,
      CodeSquareIcon: X2,
      CodescanCheckmarkIcon: q2,
      CodescanIcon: G2,
      CodespacesIcon: Y2,
      ColumnsIcon: K2,
      CommandPaletteIcon: Q2,
      CommentDiscussionIcon: a7,
      CommentIcon: J2,
      CommitIcon: t7,
      ContainerIcon: e7,
      CopilotErrorIcon: c7,
      CopilotIcon: n7,
      CopilotWarningIcon: o7,
      CopyIcon: l7,
      CpuIcon: r7,
      CreditCardIcon: h7,
      CrossReferenceIcon: i7,
      DashIcon: d7,
      DatabaseIcon: p7,
      DependabotIcon: m7,
      DesktopDownloadIcon: v7,
      DeviceCameraIcon: u7,
      DeviceCameraVideoIcon: Z7,
      DeviceDesktopIcon: s7,
      DeviceMobileIcon: M7,
      DiamondIcon: f7,
      DiffAddedIcon: E7,
      DiffIcon: A7,
      DiffIgnoredIcon: w7,
      DiffModifiedIcon: g7,
      DiffRemovedIcon: V7,
      DiffRenamedIcon: H7,
      DotFillIcon: C7,
      DotIcon: I7,
      DownloadIcon: L7,
      DuplicateIcon: y7,
      EllipsisIcon: b7,
      EyeClosedIcon: k7,
      EyeIcon: S7,
      FeedDiscussionIcon: F7,
      FeedForkedIcon: T7,
      FeedHeartIcon: P7,
      FeedMergedIcon: D7,
      FeedPersonIcon: x7,
      FeedRepoIcon: R7,
      FeedRocketIcon: O7,
      FeedStarIcon: N7,
      FeedTagIcon: B7,
      FeedTrophyIcon: W7,
      FileAddedIcon: $7,
      FileBadgeIcon: _7,
      FileBinaryIcon: U7,
      FileCodeIcon: j7,
      FileDiffIcon: X7,
      FileDirectoryFillIcon: q7,
      FileDirectoryIcon: G7,
      FileDirectoryOpenFillIcon: Y7,
      FileIcon: z7,
      FileMediaIcon: K7,
      FileMovedIcon: Q7,
      FileRemovedIcon: J7,
      FileSubmoduleIcon: a4,
      FileSymlinkFileIcon: t4,
      FileZipIcon: e4,
      FilterIcon: n4,
      FiscalHostIcon: c4,
      FlameIcon: o4,
      FoldDownIcon: r4,
      FoldIcon: l4,
      FoldUpIcon: h4,
      GearIcon: i4,
      GiftIcon: d4,
      GitBranchIcon: p4,
      GitCommitIcon: m4,
      GitCompareIcon: v4,
      GitMergeIcon: u4,
      GitMergeQueueIcon: Z4,
      GitPullRequestClosedIcon: M4,
      GitPullRequestDraftIcon: f4,
      GitPullRequestIcon: s4,
      GlobeIcon: A4,
      GoalIcon: E4,
      GrabberIcon: w4,
      GraphIcon: g4,
      HashIcon: V4,
      HeadingIcon: H4,
      HeartFillIcon: C4,
      HeartIcon: I4,
      HistoryIcon: L4,
      HomeFillIcon: b4,
      HomeIcon: y4,
      HorizontalRuleIcon: S4,
      HourglassIcon: k4,
      HubotIcon: F4,
      IdBadgeIcon: T4,
      ImageIcon: P4,
      InboxIcon: D4,
      InfinityIcon: x4,
      InfoIcon: R4,
      IssueClosedIcon: O4,
      IssueDraftIcon: N4,
      IssueOpenedIcon: B4,
      IssueReopenedIcon: W4,
      IssueTrackedByIcon: z4,
      IssueTracksIcon: $4,
      ItalicIcon: _4,
      IterationsIcon: U4,
      KebabHorizontalIcon: j4,
      KeyAsteriskIcon: G4,
      KeyIcon: X4,
      LawIcon: q4,
      LightBulbIcon: Y4,
      LinkExternalIcon: Q4,
      LinkIcon: K4,
      ListOrderedIcon: J4,
      ListUnorderedIcon: a3,
      LocationIcon: t3,
      LockIcon: e3,
      LogIcon: n3,
      LogoGistIcon: c3,
      LogoGithubIcon: o3,
      MailIcon: l3,
      MarkGithubIcon: r3,
      MarkdownIcon: h3,
      MegaphoneIcon: i3,
      MentionIcon: d3,
      MeterIcon: p3,
      MilestoneIcon: m3,
      MirrorIcon: v3,
      MoonIcon: u3,
      MortarBoardIcon: Z3,
      MoveToBottomIcon: s3,
      MoveToEndIcon: M3,
      MoveToStartIcon: f3,
      MoveToTopIcon: A3,
      MultiSelectIcon: E3,
      MuteIcon: w3,
      NoEntryFillIcon: V3,
      NoEntryIcon: g3,
      NorthStarIcon: H3,
      NoteIcon: I3,
      NumberIcon: C3,
      OrganizationIcon: L3,
      PackageDependenciesIcon: b3,
      PackageDependentsIcon: S3,
      PackageIcon: y3,
      PaintbrushIcon: k3,
      PaperAirplaneIcon: F3,
      PaperclipIcon: T3,
      PasteIcon: P3,
      PencilIcon: D3,
      PeopleIcon: x3,
      PersonAddIcon: O3,
      PersonFillIcon: N3,
      PersonIcon: R3,
      PinIcon: B3,
      PlayIcon: W3,
      PlugIcon: z3,
      PlusCircleIcon: _3,
      PlusIcon: $3,
      ProjectIcon: U3,
      ProjectRoadmapIcon: j3,
      ProjectSymlinkIcon: X3,
      PulseIcon: G3,
      QuestionIcon: q3,
      QuoteIcon: Y3,
      ReadIcon: K3,
      RelFilePathIcon: Q3,
      ReplyIcon: J3,
      RepoCloneIcon: t6,
      RepoDeletedIcon: e6,
      RepoForkedIcon: n6,
      RepoIcon: a6,
      RepoLockedIcon: c6,
      RepoPullIcon: o6,
      RepoPushIcon: l6,
      RepoTemplateIcon: r6,
      ReportIcon: h6,
      RocketIcon: i6,
      RowsIcon: d6,
      RssIcon: p6,
      RubyIcon: m6,
      ScreenFullIcon: v6,
      ScreenNormalIcon: u6,
      SearchIcon: Z6,
      ServerIcon: s6,
      ShareAndroidIcon: f6,
      ShareIcon: M6,
      ShieldCheckIcon: E6,
      ShieldIcon: A6,
      ShieldLockIcon: w6,
      ShieldSlashIcon: g6,
      ShieldXIcon: V6,
      SidebarCollapseIcon: H6,
      SidebarExpandIcon: I6,
      SignInIcon: C6,
      SignOutIcon: L6,
      SingleSelectIcon: y6,
      SkipFillIcon: S6,
      SkipIcon: b6,
      SlidersIcon: k6,
      SmileyIcon: F6,
      SortAscIcon: T6,
      SortDescIcon: P6,
      SparkleFillIcon: D6,
      SponsorTiersIcon: x6,
      SquareFillIcon: O6,
      SquareIcon: R6,
      SquirrelIcon: N6,
      StackIcon: B6,
      StarFillIcon: z6,
      StarIcon: W6,
      StopIcon: $6,
      StopwatchIcon: _6,
      StrikethroughIcon: U6,
      SunIcon: j6,
      SyncIcon: X6,
      TabExternalIcon: q6,
      TabIcon: G6,
      TableIcon: Y6,
      TagIcon: K6,
      TasklistIcon: Q6,
      TelescopeFillIcon: aa,
      TelescopeIcon: J6,
      TerminalIcon: ta,
      ThreeBarsIcon: ea,
      ThumbsdownIcon: na,
      ThumbsupIcon: ca,
      ToolsIcon: oa,
      TrashIcon: la,
      TriangleDownIcon: ra,
      TriangleLeftIcon: ha,
      TriangleRightIcon: ia,
      TriangleUpIcon: da,
      TrophyIcon: pa,
      TypographyIcon: ma,
      UnfoldIcon: va,
      UnlinkIcon: ua,
      UnlockIcon: Za,
      UnmuteIcon: sa,
      UnreadIcon: Ma,
      UnverifiedIcon: fa,
      UploadIcon: Aa,
      VerifiedIcon: Ea,
      VersionsIcon: wa,
      VideoIcon: ga,
      WebhookIcon: Va,
      WorkflowIcon: Ha,
      XCircleFillIcon: La,
      XCircleIcon: Ca,
      XIcon: Ia,
      ZapIcon: ya,
      ZoomInIcon: ba,
      ZoomOutIcon: Sa,
      default: Fa,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  Da as C,
  $a as I,
  Pa as K,
  Ra as T,
  Aa as U,
  za as a,
  Ba as b,
  Na as c,
  Wa as g,
  X5 as i,
  xa as p,
  Oa as u,
};
