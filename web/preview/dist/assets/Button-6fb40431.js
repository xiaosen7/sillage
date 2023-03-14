import{r as te,c as he,j as H0}from"./index-9a1ace1a.js";import{I as me}from"./index.esm-3a1241cc.js";var q0={},ge={get exports(){return q0},set exports(l0){q0=l0}};/*! For license information please see index.js.LICENSE.txt */(function(l0,L0){(function(s0,u0){l0.exports=u0(te)})(he,a0=>(()=>{var s0={967:function(d){(function(p,P){d.exports=P()})(0,()=>(()=>{var s={d:(a,u)=>{for(var b in u)s.o(u,b)&&!s.o(a,b)&&Object.defineProperty(a,b,{enumerable:!0,get:u[b]})},o:(a,u)=>Object.prototype.hasOwnProperty.call(a,u),r:a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},p={};s.r(p),s.d(p,{beforeCssLayout:()=>R,beforeFutureCssLayout:()=>V,frameThrower:()=>K,onceAnimationEnd:()=>S,onceNextCssLayout:()=>z,onceTransitionEnd:()=>N,recursiveAnimationFrame:()=>P,setCssEndEvent:()=>j});var P=function(a,u){window&&a&&Number.isInteger(a)&&a>0?window.requestAnimationFrame(function(){P(a-1,u)}):u()};function j(a,u,b){var F=b===void 0?{}:b,Q=F.tolerance,m0=Q===void 0?0:Q,j0=F.propertyName;return new Promise(function(O0){var Z;if(a){var Y=null,_0=u.charAt(0).toUpperCase()+u.slice(1),X=0;a.style["Webkit".concat(_0)]!==void 0&&(Y="webkit".concat(_0,"End")),((Z=a.style)===null||Z===void 0?void 0:Z.OTransition)!==void 0&&(Y="o".concat(u,"End")),a.style[u]!==void 0&&(Y="".concat(u,"end")),a.clearCssEndEvent&&a.clearCssEndEvent(),a.clearCssEndEvent=function(){a.removeEventListener(Y,g0)},a.addEventListener(Y,g0)}else O0(!1);function g0(v0){if((v0.srcElement||v0.target)===a){if(X>=m0){if(j0&&j0!==v0.propertyName)return;a.removeEventListener(Y,g0),O0(v0)}X+=1}}})}function R(a){typeof window<"u"&&(window!=null&&window.requestAnimationFrame)||a(),window.requestAnimationFrame(a)}function V(a,u){typeof window<"u"&&(window!=null&&window.requestAnimationFrame)||u(),P(a+1,u)}function K(a){return new Promise(function(u){V(a,u)})}function z(){return new Promise(function(a){P(2,a)})}function N(a,u){return u===void 0&&(u={}),new Promise(function(b){j(a,"transition",u).then(b)})}function S(a,u){return u===void 0&&(u={}),new Promise(function(b){j(a,"animation",u).then(b)})}return p})())},251:(d,s,p)=>{var P=p(787),j=Symbol.for("react.element"),R=Object.prototype.hasOwnProperty,V=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function z(N,S,a){var u,b={},F=null,Q=null;for(u in a!==void 0&&(F=""+a),S.key!==void 0&&(F=""+S.key),S.ref!==void 0&&(Q=S.ref),S)R.call(S,u)&&!K.hasOwnProperty(u)&&(b[u]=S[u]);if(N&&N.defaultProps)for(u in S=N.defaultProps)b[u]===void 0&&(b[u]=S[u]);return{$$typeof:j,type:N,key:F,ref:Q,props:b,_owner:V.current}}s.jsx=z,s.jsxs=z},893:(d,s,p)=>{d.exports=p(251)},787:d=>{d.exports=a0}},u0={};function _(d){var s=u0[d];if(s!==void 0)return s.exports;var p=u0[d]={exports:{}};return s0[d].call(p.exports,p,p.exports,_),p.exports}_.d=(d,s)=>{for(var p in s)_.o(s,p)&&!_.o(d,p)&&Object.defineProperty(d,p,{enumerable:!0,get:s[p]})},_.o=(d,s)=>Object.prototype.hasOwnProperty.call(d,s),_.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var d0={};return(()=>{_.r(d0),_.d(d0,{AwesomeButton:()=>b,AwesomeButtonProgress:()=>ce,AwesomeButtonSocial:()=>_0});var d=_(893),s=_(787),p=_(967),P=["middle","left","right"];function j(e,r){return r===void 0&&(r="&"),Object.entries(e).map(function(o){var t=o[0],n=o[1];return"".concat(t,"=").concat(n)}).join(r)}function R(e,r){if(e===void 0&&(e=[]),!r)return e.join(" ").trim();for(var o=[],t=e.length;t--;)r[e[t]]&&o.push(r[e[t]]);return o.join(" ").trim()}function V(e,r){return e===void 0&&(e=""),r&&r[e]||e}function K(e){var r,o=e.element,t=e.root,n=e.cssModule,h=n===void 0?null:n,v=e.state,g=v===void 0?null:v;if(!(!((r=o==null?void 0:o.classList)===null||r===void 0)&&r.remove))return!1;if(!g)return[R(["".concat(t,"--").concat(P[0])],h),R(["".concat(t,"--").concat(P[1])],h),R(["".concat(t,"--").concat(P[2])],h)].forEach(function(y){y&&o.classList.remove(y)}),!1;for(var f=P.filter(function(y){return y!==g}),m=f.length;m--;){var i=R(["".concat(t,"--").concat(f[m])],h);i&&o.classList.remove(i)}var c=R(["".concat(t,"--").concat(g)],h);return c&&o.classList.add(c),!0}var z=function(){return z=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},z.apply(this,arguments)},N=typeof window<"u",S=N&&"ontouchstart"in window||N&&navigator.maxTouchPoints>0,a=s.forwardRef(function(e,r){return(0,d.jsx)("a",z({ref:r},e))}),u=s.forwardRef(function(e,r){return(0,d.jsx)("button",z({ref:r},e))});const b=function(e){var r=e.active,o=r!==void 0&&r,t=e.after,n=t===void 0?null:t,h=e.before,v=h===void 0?null:h,g=e.between,f=g!==void 0&&g,m=e.children,i=m===void 0?null:m,c=e.className,y=c===void 0?null:c,k=e.containerProps,e0=k===void 0?{}:k,B=e.cssModule,x=B===void 0?null:B,C=e.disabled,M=C!==void 0&&C,f0=e.element,D=f0===void 0?null:f0,U=e.extra,w0=U===void 0?null:U,b0=e.href,H=b0===void 0?null:b0,I=e.moveEvents,P0=I===void 0||I,y0=e.onMouseDown,n0=y0===void 0?null:y0,z0=e.onMouseUp,p0=z0===void 0?null:z0,S0=e.onPress,k0=S0===void 0?null:S0,T0=e.onPressed,O=T0===void 0?null:T0,T=e.onReleased,A0=T===void 0?null:T,R0=e.placeholder,G=R0===void 0||R0,N0=e.ripple,F0=N0!==void 0&&N0,Y0=e.rootElement,L=Y0===void 0?"aws-btn":Y0,X0=e.size,I0=X0===void 0?null:X0,G0=e.style,ie=G0===void 0?{}:G0,$0=e.type,V0=$0===void 0?"primary":$0,J0=e.visible,K0=J0===void 0||J0,Q0=s.useState(null),h0=Q0[0],Z0=Q0[1],W=s.useRef(null),t0=s.useRef(null),r0=s.useRef(null),le=s.useRef(null),D0=s.useRef(!1),o0=s.useRef(0),M0=s.useRef(null),U0=s.useRef(0),ae=D||(H?a:u),se={href:H},c0=s.useMemo(function(){return G===!0&&!i||M},[G,i,M]);s.useEffect(function(){return W!=null&&W.current&&(r0.current=W.current.parentNode),function(){M0!=null&&M0.current&&clearTimeout(M0.current)}},[]),s.useEffect(function(){h0!==null&&o===!1&&C0({force:!0})},[o]);var A,ue=function(){o0.current=0,A0&&A0(r0.current)},C0=function(l){var w,E=l===void 0?{}:l,q=E.force,i0=q!==void 0&&q,$=E.leave,W0=$!==void 0&&$;if(K({element:r0.current,root:L,cssModule:x}),W0!==!0||o0.current!==0){var E0=o&&!i0?"".concat(L,"--active"):null;!((w=t0==null?void 0:t0.current)===null||w===void 0)&&w.clearCssEvent&&t0.current.clearCssEvent(),E0===null&&(h0!=null&&h0.match(/active/gim))&&(0,p.setCssEndEvent)(t0.current,"transition",{tolerance:1}).then(ue),Z0(E0)}},de=function(l){(function(E){var q,i0,$=E.event,W0=E.button,E0=E.content,fe=E.className,x0=W0.getBoundingClientRect(),pe=window.pageYOffset||document.documentElement.scrollTop||0,J=document.createElement("span"),B0=x0.width<50?3*x0.width:2*x0.width;$.nativeEvent instanceof TouchEvent?(q=$.changedTouches[0].pageX,i0=$.changedTouches[0].pageY):(q=$.pageX,i0=$.pageY),J.className=fe,J.style.top="-".concat(B0/2-(i0-x0.top-pe),"px"),J.style.left="-".concat(B0/2-(q-x0.left),"px"),J.style.width="".concat(B0,"px"),J.style.height="".concat(B0,"px"),(0,p.setCssEndEvent)(J,"animation").then(function(){window.requestAnimationFrame(function(){E0.removeChild(J)})}),window.requestAnimationFrame(function(){E0.appendChild(J)})})({event:l,button:W.current,content:t0.current,className:V("".concat(L,"__bubble"),x)})},ee=function(l){c0!==!0&&o0.current!==2&&(o0.current=1,(0,p.setCssEndEvent)(t0.current,"transition",{tolerance:1}).then(function(){return O&&O(l)}),Z0("".concat(L,"--active")))},ne=function(l){if(c0!==!0&&o0.current===1){if(M0.current&&clearTimeout(M0.current),F0===!0&&de(l),N&&W.current){var w=new Event("btn-press");W.current.dispatchEvent(w)}ve(l),o!==!0?C0():o0.current=2}},ve=function(l){r0.current&&k0&&k0(l)};return(0,d.jsx)(ae,z({style:ie,className:s.useMemo(function(){var l=[L,V0&&"".concat(L,"--").concat(V0),I0&&"".concat(L,"--").concat(I0),K0&&"".concat(L,"--visible"),f&&"".concat(L,"--between"),G&&!i&&"".concat(L,"--placeholder")||null];return c0===!0&&l.push("".concat(L,"--disabled")),h0&&l.push(h0),y&&l.push.apply(l,y.split(" ")),x&&x["aws-btn"]?R(l,x):l.join(" ").trim().replace(/[\s]+/gi," ")},[L,V0,I0,K0,f,G,i,c0,h0,y,x]),role:"button",ref:r0},e0,se,(A={onClick:function(l){H&&c0&&l.preventDefault()}},S?(A.onTouchStart=function(l){var w,E;n0&&n0(l),U0.current=(E=(w=l==null?void 0:l.changedTouches)===null||w===void 0?void 0:w[0])===null||E===void 0?void 0:E.clientY,ee(l)},A.onTouchEnd=function(l){var w,E;p0&&p0(l),(U0.current&&(!((E=(w=l==null?void 0:l.changedTouches)===null||w===void 0?void 0:w[0])===null||E===void 0)&&E.clientY)?Math.abs(U0.current-l.changedTouches[0].clientY):0)>W.current.offsetHeight?C0({force:!0}):ne(l)},A):(A.onMouseLeave=function(){D0.current=!1,o!==!0||o0.current===2?C0({leave:!0}):C0({force:!0})},A.onMouseDown=function(l){var w;n0&&n0(l),((w=l==null?void 0:l.nativeEvent)===null||w===void 0?void 0:w.button)===0&&ee(l)},A.onMouseUp=function(l){p0&&p0(l),c0!==!0?ne(l):l.preventDefault()},P0===!0?(A.onMouseMove=function(l){if(c0!==!0){D0.current=!0;var w=W.current,E=w.getBoundingClientRect().left,q=w.offsetWidth,i0=l.pageX<E+.3*q?"left":l.pageX>E+.65*q?"right":"middle";K({element:r0.current,root:L,cssModule:x,state:i0})}},A):(A.onMouseEnter=function(){D0.current=!0,K({element:r0.current,root:L,cssModule:x,state:"middle"})},A))),{children:(0,d.jsxs)("span",z({ref:W,className:V("".concat(L,"__wrapper"),x)},{children:[(0,d.jsxs)("span",z({ref:t0,className:V("".concat(L,"__content"),x)},{children:[v,(0,d.jsx)("span",z({ref:le},{children:i})),n]})),w0]}))}))};var F=function(){return F=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},F.apply(this,arguments)};function Q(e){var r=e.url,o=e.message,t=e.title,n=e.image,h=e.user,v=e.type,g=e.phone,f=e.width,m=e.height,i={},c={};switch(v){case"facebook":c.u=encodeURIComponent(r),i.url="https://www.facebook.com/sharer.php?".concat(j(c,"&")),i.title="Facebook Sharer";break;case"twitter":c.text=o,c.url=r,i.height=250,i.url="https://twitter.com/share?".concat(j(c,"&")),i.title="Twitter Sharer";break;case"pinterest":c.url=r,n&&(c.media=n),i.url="https://pinterest.com/pin/create/button/?".concat(j(c,"&")),i.title="Pinterest Sharer";break;case"google":case"gplus":c.url=r,i.url="https://plus.google.com/share?".concat(j(c,"&")),i.title="Google+ Sharer",i.width=400;break;case"linkedin":c.mini=!0,c.url=r,c.title=o||t,i.url="https://www.linkedin.com/shareArticle?".concat(j(c,"&")),i.title="Linkedin Sharer";break;case"reddit":c.url=r,c.title=o||t,i.url="https://www.reddit.com/submit?".concat(j(c,"&")),i.title="",i.width=850;break;case"whatsapp":c.phone=g==null?void 0:g.replace(/\+|(|)/gim,""),c.title=o||t,i.url="https://api.whatsapp.com/send?".concat(j(c,"&")),i.title="Whatsapp Message",i.width=850;break;case"messenger":i.url="https://m.me/".concat(h),i.title="Messenger Message",i.width=850;break;case"mail":i.url="mailto:".concat(r),i.title="_self";break;case"instagram":i.url=r,i.title="_self";break;default:return i}return i.extra=j(F({width:"".concat(i.width||f,"px"),height:"".concat(i.height||m,"px")},function(k,e0){if(typeof window>"u")return{top:0,left:0};var B=window.screenLeft,x=B===void 0?0:B,C=window.screenTop,M=C===void 0?0:C,f0=window.innerWidth,D=window.innerHeight,U=f0||(document.documentElement.clientWidth?document.documentElement.clientWidth:0);return{top:(D||(document.documentElement.clientHeight?document.documentElement.clientHeight:0))/2-e0/2+M,left:U/2-k/2+x}}(i.width||f,i.height||m)),","),i}var m0=function(){return m0=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},m0.apply(this,arguments)},j0={youtube:"M38.1,23H11.9c-4.1,0-7.6,3.4-7.6,7.6v6.1c0,4.1,3.4,7.6,7.6,7.6h26.3c4.1,0,7.6-3.4,7.6-7.6v-6.1C45.8,26.4,42.4,23,38.1,23z M17.4,27.7h-2.5v12.2h-2.4V27.7h-2.5v-2h7.3V27.7z M24.3,39.9h-2.1v-1.2c-0.4,0.4-0.8,0.8-1.2,0.9c-0.4,0.3-0.8,0.3-1.2,0.3c-0.5,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.3-0.8-0.3-1.4v-8.6h2.1v8c0,0.3,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.6-0.3c0.3-0.2,0.4-0.3,0.7-0.6v-7.9h2.1v10.6H24.3z M31.9,37.7c0,0.8-0.2,1.4-0.5,1.7C31,39.8,30.5,40,29.9,40c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.6-0.4-0.9-0.7v0.8h-2.1V25.7h2.1v4.6c0.3-0.3,0.6-0.6,0.9-0.8c0.3-0.2,0.7-0.3,0.9-0.3c0.7,0,1.2,0.3,1.5,0.7s0.5,1.1,0.5,1.9L31.9,37.7L31.9,37.7z M39.2,34.9h-4v1.9c0,0.6,0.1,0.9,0.2,1.2c0.2,0.3,0.3,0.3,0.7,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.2-0.6,0.2-1.2v-0.5h2.2v0.5c0,1.1-0.3,1.9-0.8,2.5c-0.5,0.5-1.3,0.8-2.4,0.8c-0.9,0-1.7-0.3-2.2-0.8C33.3,38.8,33,38,33,37v-4.7c0-0.9,0.3-1.7,0.9-2.2c0.6-0.6,1.4-0.8,2.3-0.8c0.9,0,1.7,0.3,2.2,0.8c0.5,0.5,0.8,1.3,0.8,2.3V34.9z M36.1,30.9c-0.3,0-0.6,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.3,0.9v1.1H37v-1.1c0-0.4-0.1-0.8-0.3-0.9C36.6,31.1,36.4,30.9,36.1,30.9z M28.8,30.9c-0.2,0-0.3,0-0.4,0.1c-0.2,0.1-0.3,0.2-0.4,0.3v6.5c0.2,0.2,0.3,0.3,0.5,0.3c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.4-0.1,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.8v-5.4c0-0.3-0.1-0.6-0.3-0.8C29.4,31,29.1,30.9,28.8,30.9z M15.3,19.4h2.6v-6.5l3.1-9.1h-2.7L16.7,10h-0.2l-1.7-6.3h-2.7l3.2,9.5V19.4z M24.6,19.6c1.1,0,1.9-0.3,2.5-0.8s0.9-1.4,0.9-2.4v-6c0-0.8-0.3-1.6-0.9-2.2s-1.4-0.8-2.4-0.8c-1.1,0-1.9,0.3-2.5,0.8c-0.7,0.5-0.9,1.3-0.9,2.1v6c0,1,0.3,1.8,0.9,2.4C22.8,19.4,23.6,19.6,24.6,19.6z M23.7,10.3c0-0.3,0.1-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.3,0.3,0.6v6.3c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.4,0.3-0.8,0.3s-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.3-0.8L23.7,10.3L23.7,10.3z M31.6,19.5c0.4,0,0.9-0.1,1.4-0.3c0.5-0.3,0.9-0.6,1.4-1.1v1.3h2.4V7.8h-2.4v8.8c-0.3,0.3-0.4,0.4-0.8,0.6c-0.3,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6V7.8h-2.4v9.6c0,0.7,0.2,1.2,0.4,1.5C30.7,19.4,31.1,19.5,31.6,19.5z",mail:"M4.9,14L25,30.5L45.1,14v-3.7H4.9V14z M4.9,36.4l9.9-11l-9.9-8.9C4.9,16.6,4.9,36.4,4.9,36.4zM45.1,36.7L34.9,25.5L45,16.7L45.1,36.7L45.1,36.7z M25,33.7l-8.2-6.8L4.9,39.6h40.2L33.2,26.8L25,33.7z",facebook:"M31.6,44.5V25.7h8l1.3-8h-9.4v-4c0-2.7,1.3-4,4-4h4V1.5c-1.3,0-4.3,0-6.7,0c-6.7,0-9.4,4-9.4,10.7v5.4h-8v8h8v18.8L31.6,44.5L31.6,44.5z",whatsapp:"M2.5,46.6c0.6-1.9,1.2-3.6,1.8-5.4c0.6-1.7,1.1-3.5,1.8-5.2c0.3-0.9,0.2-1.5-0.2-2.3c-2.4-4.4-3.1-9.1-2.3-14c0.7-4.2,2.5-7.8,5.3-11c4.7-5.1,10.6-7.6,17.5-7.3c5.1,0.2,9.6,2.1,13.4,5.4c3.6,3.1,5.9,7,7,11.6c0.9,3.7,0.8,7.4-0.3,11.1c-1.4,4.6-4,8.5-7.8,11.4c-5.4,4.1-11.4,5.3-18,4c-2-0.4-3.9-1.1-5.6-2c-0.3-0.2-0.5-0.2-0.9-0.1c-3.4,1.1-6.7,2.2-10.1,3.2C3.7,46.2,3.2,46.4,2.5,46.6z M8.3,40.9c0.2,0,0.3-0.1,0.3-0.1c2.1-0.7,4.2-1.3,6.3-2c0.2-0.1,0.5,0,0.7,0.1c0.9,0.5,1.8,1,2.7,1.4c3.9,1.6,7.9,1.9,11.9,0.8c4.8-1.3,8.5-4.2,11-8.6c2.2-3.7,2.9-7.7,2.2-11.9C42.7,15.2,39.9,11,35.4,8c-3.9-2.6-8.3-3.5-12.9-2.7c-4,0.6-7.4,2.5-10.2,5.4c-2.4,2.5-4,5.5-4.7,8.8c-1,4.9-0.3,9.5,2.4,13.7c0.5,0.8,0.5,1.5,0.2,2.3C9.5,37.3,8.9,39.1,8.3,40.9z M36.8,29.8c0,1.7-0.9,3.1-2.5,3.9c-1.6,0.8-3.3,1-5,0.4c-1.5-0.6-3.1-1.2-4.6-1.9c-2-1-3.6-2.4-5-4c-1.6-1.8-3-3.7-4.1-5.9c-0.8-1.5-1.3-3.1-1.1-4.8c0.2-1.8,1-3.3,2.5-4.4c0.3-0.2,0.7-0.3,1.1-0.4c0.5,0,1,0,1.4,0.1c0.4,0,0.6,0.3,0.8,0.6c0.4,0.9,0.7,1.7,1,2.6c0.2,0.6,0.4,1.2,0.7,1.8c0.3,0.7,0.1,1.3-0.3,1.8c-0.4,0.5-0.8,0.9-1.2,1.3C20,21.2,20,21.6,20.2,22c1,1.9,2.3,3.5,4,4.9c1.1,0.9,2.3,1.5,3.6,2.2c0.4,0.2,0.7,0.2,1-0.2c0.6-0.7,1.3-1.4,1.9-2.1c0.4-0.5,0.6-0.6,1.1-0.3c1.5,0.8,3.1,1.6,4.6,2.4C36.8,29,36.9,29.3,36.8,29.8z",messenger:"M27.5,30l-5.4-5.7L11.7,30l11.5-12.2l5.5,5.7L39,17.8L27.5,30z M25.5,3.8c-11.6,0-21.1,8.7-21.1,19.5c0,6.1,3.1,11.6,7.9,15.2v7.4l7.2-3.9c1.9,0.5,3.9,0.8,6,0.8c11.6,0,21.1-8.7,21.1-19.5S37.1,3.8,25.5,3.8z",instagram:"M25,13.3c-5.8,0-10.6,4.7-10.6,10.6S19.1,34.6,25,34.6S35.6,29.8,35.6,24S30.8,13.3,25,13.3z M25,30.7c-3.7,0-6.8-3.1-6.8-6.8s3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8S28.7,30.7,25,30.7z M36.1,10.6c1.3,0,2.4,1.1,2.4,2.4s-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4S34.7,10.6,36.1,10.6z M42.3,6.8c-2.2-2.2-5.2-3.4-8.7-3.4H16.4c-7.2,0-12,4.8-12,12v17c0,3.6,1.2,6.7,3.5,8.9c2.2,2.2,5.2,3.2,8.6,3.2h17c3.6,0,6.6-1.2,8.7-3.2c2.2-2.2,3.4-5.2,3.4-8.8V15.4C45.6,11.9,44.5,8.9,42.3,6.8z M42,32.6c0,2.6-0.9,4.7-2.4,6.1s-3.6,2.2-6.1,2.2h-17c-2.5,0-4.6-0.7-6.1-2.2s-2.2-3.6-2.2-6.2v-17c0-2.5,0.7-4.6,2.2-6.1C11.8,8,14,7.2,16.5,7.2h17.1c2.5,0,4.6,0.7,6.1,2.2c1.4,1.5,2.2,3.6,2.2,6v17.2H42z",twitter:"M49.3,9.1c-1.8,0.8-3.6,1.3-5.6,1.5c2-1.2,3.6-3.1,4.3-5.4c-1.9,1.1-4,1.9-6.2,2.4c-1.8-1.9-4.3-3.1-7.1-3.1c-5.4,0-9.8,4.4-9.8,9.8c0,0.8,0.1,1.5,0.3,2.2C17,16.1,9.8,12.2,5,6.3c-0.8,1.4-1.3,3.1-1.3,4.9c0,3.4,1.7,6.4,4.3,8.1c-1.6-0.1-3.1-0.5-4.4-1.2v0.1c0,4.7,3.4,8.7,7.8,9.6c-0.8,0.2-1.7,0.3-2.6,0.3c-0.6,0-1.2-0.1-1.8-0.2c1.2,3.9,4.9,6.7,9.1,6.8c-3.3,2.6-7.6,4.2-12.1,4.2c-0.8,0-1.6,0-2.3-0.1c4.3,2.8,9.5,4.4,15,4.4c18,0,27.8-14.9,27.8-27.8c0-0.4,0-0.8,0-1.3C46.4,12.7,48,11,49.3,9.1z",github:"M25,2.5C12.2,2.5,1.9,12.8,1.9,25.6c0,10.2,6.6,18.9,15.8,21.9c1.2,0.2,1.5-0.5,1.5-1.1c0-0.5,0-2.1,0-4c-6.4,1.4-7.8-3-7.8-3c-1-2.7-2.6-3.4-2.6-3.4C6.7,34.6,9,34.6,9,34.6c2.3,0.2,3.5,2.4,3.5,2.4c2.1,3.5,5.4,2.5,6.7,1.9c0.2-1.5,0.8-2.5,1.5-3.1c-5.1-0.6-10.5-2.6-10.5-11.4c0-2.5,0.9-4.6,2.4-6.2c-0.2-0.6-1-2.9,0.2-6.1c0,0,1.9-0.6,6.3,2.4c1.8-0.5,3.8-0.8,5.8-0.8s3.9,0.3,5.8,0.8c4.4-3,6.3-2.4,6.3-2.4c1.3,3.2,0.5,5.5,0.2,6.1c1.5,1.6,2.4,3.7,2.4,6.2c0,8.9-5.4,10.8-10.5,11.4c0.8,0.7,1.6,2.1,1.6,4.3c0,2.9,0,5.6,0,6.4c0,0.6,0.4,1.3,1.5,1.1C41.4,44.5,48,35.9,48,25.7C48.1,12.8,37.8,2.5,25,2.5z",linkedin:"M13.8,41.7H5.4V13.6h8.4C13.8,13.6,13.8,41.7,13.8,41.7z M44.7,41.7h-8.4v-15c0-3.9-1.4-5.9-4.2-5.9c-2.2,0-3.6,1.1-4.3,3.3c0,3.5,0,17.6,0,17.6h-8.4c0,0,0.1-25.3,0-28.1h6.7l0.5,5.6h0.2c1.7-2.8,4.5-4.7,8.3-4.7c2.9,0,5.2,0.8,7,2.8s2.7,4.7,2.7,8.5L44.7,41.7L44.7,41.7z M9.6,2.3C12,2.3,14,4.2,14,6.5s-2,4.2-4.4,4.2S5.2,8.8,5.2,6.5C5.3,4.2,7.2,2.3,9.6,2.3z",gplus:"M29.9,5.2c0,0-9.1,0-12.2,0C12.2,5.2,6.9,9.1,6.9,14c0,5,3.8,8.8,9.5,8.8c0.4,0,0.7-0.1,1.1-0.1c-0.4,0.7-0.7,1.5-0.7,2.3c0,1.4,0.7,2.5,1.7,3.4c-0.7,0-1.4,0-2.1,0c-6.9,0-12.2,4.4-12.2,8.9c0,4.5,5.9,7.4,12.7,7.4c7.9,0,12.2-4.5,12.2-8.9c0-3.6-1-5.8-4.4-8.1c-1.1-0.8-3.3-2.7-3.3-3.9c0-1.3,0.4-2,2.4-3.5c2-1.6,3.5-3.5,3.5-6.1c0-3.2-1.3-7-4-7H28L29.9,5.2z M25.8,35c0.1,0.4,0.2,0.8,0.2,1.3c0,3.6-2.3,6.5-9,6.5c-4.7,0-8.2-3-8.2-6.6c0-3.5,4.3-6.5,9-6.4c1.1,0,2.1,0.2,3.1,0.5C23.5,32,25.3,33,25.8,35z M18.2,21.5c-3.2-0.1-6.2-3.6-6.8-7.8s1.6-7.4,4.8-7.4c3.2,0.1,6.2,3.4,6.8,7.7C23.6,18.2,21.4,21.6,18.2,21.5z M39.8,21v-6h-3.9v6h-6v4h6v6h3.9v-6h6v-3.9L39.8,21L39.8,21z",pinterest:"M7.6,17.7c0,3.3,1.1,6.6,3.3,8.5c0.5,0.4,1.7,1.3,2.6,1.3c0.7,0,0.8-0.8,1-1.4c1-3.3,0.1-1.9-1.1-4.7c-1.3-2.8-0.4-7.3,1.1-9.6c2.9-4.4,6.2-6,11.6-6c3.1,0,5.4,1.1,7.1,2.6c6.1,5.2,1.9,21.8-5.6,20.9c-7.5-0.8-1.4-10-1.4-14c0-6.2-8.5-5.2-8.5,2.7c0,2.7,1.1,3.5,0.9,4.2c-1.1,3.8-1.9,8.2-2.9,12.2c-1.1,4.1-1,7.5-0.6,11.7c0,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.2,0,0.3-0.1c2.9-2.9,4.8-7.7,5.5-10.5c0.4-1.5,0.9-3.3,1.2-4.8c0.1-0.3,0.7,0.6,1.1,1c3.1,2.8,8.4,2.2,11.8,0.1c6.6-4,9.4-15.4,5.9-22.2c-1-1.9-2-2.8-3.4-4.3C31.8-0.1,19.3,0.2,13.2,6C9.9,9.1,7.6,12.7,7.6,17.7L7.6,17.7z",reddit:"M48.9,18.6L48.9,18.6c0,0.1,0,0.2,0,0.3c0,1.2-0.4,2.4-1,3.3s-1.4,1.7-2.4,2.2c0.1,0.5,0.1,1,0.1,1.4c0,2.6-0.9,5.1-2.4,7.2l0,0l0,0c-2.8,3.8-7.2,6.1-11.6,7.2l0,0l0,0c-2.3,0.6-4.8,0.9-7.2,0.9c-3.6,0-7.2-0.7-10.6-2l0,0l0,0C10.3,37.7,7,35.4,5,32c-1.1-1.8-1.7-3.9-1.7-6.1c0-0.5,0-1,0.1-1.4c-0.9-0.5-1.7-1.3-2.3-2.1c-0.6-1-1-2.1-1.1-3.2l0,0l0,0l0,0c0-1.6,0.7-3.2,1.8-4.4s2.6-1.9,4.2-1.9h0.1c0.2,0,0.3,0,0.5,0c0.8,0,1.6,0.1,2.4,0.4l0,0l0,0c0.7,0.3,1.3,0.6,1.9,1.1c0.2-0.1,0.4-0.2,0.6-0.3c3.5-2.1,7.6-2.9,11.6-3.2c0-2,0.3-4.1,1.2-5.9c0.8-1.5,2.2-2.7,3.9-3.1l0,0l0,0c0.6-0.1,1.3-0.2,1.9-0.2c1.7,0,3.4,0.4,4.9,1c0.7-1.1,1.7-1.9,2.8-2.3l0,0l0,0c0.7-0.2,1.4-0.3,2.1-0.3c0.8,0,1.5,0.1,2.2,0.5l0,0l0,0l0,0c1,0.4,1.9,1.1,2.5,2.1c0.6,0.9,1,2,1,3.2c0,0.2,0,0.4,0,0.6l0,0l0,0c-0.1,1.5-0.9,2.8-1.9,3.7c-1.1,0.9-2.4,1.5-3.8,1.5c-0.2,0-0.4,0-0.7,0c-1.4-0.1-2.7-0.8-3.6-1.8c-1-1-1.6-2.4-1.6-3.8C34,6,34,6,34,5.9c-1.3-0.6-2.7-1.1-4.1-1.1c-0.2,0-0.4,0-0.6,0l0,0c-1,0.1-2,0.8-2.4,1.7l0,0l0,0c-0.7,1.4-0.8,3-0.9,4.6c3.9,0.3,7.9,1.2,11.4,3.2l0,0l0,0c0.1,0,0.2,0.1,0.3,0.2c0.2-0.2,0.5-0.4,0.8-0.6c1.1-0.7,2.3-1.1,3.5-1.1c0.6,0,1.1,0.1,1.6,0.2l0,0l0,0l0,0l0,0c1.3,0.3,2.4,1.1,3.3,2.1C48.2,15.9,48.8,17.2,48.9,18.6L48.9,18.6L48.9,18.6z M42.5,26c0-1.8-0.6-3.6-1.7-5c-2.1-2.9-5.2-4.8-8.5-5.8l0,0c-0.6-0.2-1.3-0.4-1.9-0.5c-1.9-0.4-3.9-0.7-5.9-0.7c-2.7,0-5.3,0.4-7.9,1.2c-3.3,1.1-6.5,2.9-8.5,5.8l0,0c-1,1.4-1.6,3.2-1.6,5c0,0.7,0.1,1.3,0.3,2l0,0c0.4,1.4,1.1,2.7,2,3.8c0.9,1.1,2.1,2.1,3.3,2.9c0.3,0.2,0.5,0.3,0.8,0.5c3.5,2,7.6,2.9,11.6,2.9c0.7,0,1.4,0,2-0.1c4.1-0.3,8.2-1.6,11.5-4l0,0c1.1-0.8,2-1.7,2.8-2.8s1.3-2.3,1.6-3.6l0,0l0,0C42.5,27,42.5,26.5,42.5,26zM37.3,5.5c0,0.1,0,0.1,0,0.2l0,0l0,0c0,0.7,0.3,1.3,0.8,1.8s1.1,0.8,1.8,0.8l0,0l0,0H40c0.7,0,1.3-0.3,1.8-0.8s0.8-1.1,0.9-1.8l0,0l0,0c0-0.1,0-0.1,0-0.2c0-0.7-0.3-1.4-0.9-1.9c-0.5-0.5-1.2-0.8-1.9-0.8c-0.2,0-0.4,0-0.7,0.1l0,0l0,0c-0.6,0.1-1.1,0.5-1.5,1C37.5,4.4,37.3,4.9,37.3,5.5z M8.2,16.2c-0.5-0.2-1.1-0.4-1.6-0.4c-0.1,0-0.2,0-0.3,0l0,0l0,0c-0.8,0-1.6,0.4-2.1,0.9c-0.6,0.5-1,1.3-1,2.1l0,0l0,0c0,0.1,0,0.1,0,0.2c0,0.5,0.2,1,0.4,1.4C3.8,20.7,4,21,4.3,21.3C5.2,19.3,6.6,17.6,8.2,16.2zM45.7,18.9c0-0.4-0.1-0.9-0.3-1.3l0,0l0,0c-0.3-0.6-0.7-1-1.3-1.4c-0.5-0.3-1.2-0.5-1.8-0.5s-1.1,0.1-1.7,0.4c1.6,1.4,3,3.1,3.9,5.1c0.3-0.3,0.5-0.6,0.7-0.9C45.6,19.9,45.7,19.4,45.7,18.9z M32.9,29.2c-0.2-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.5,0.1-0.7,0.2c-2.1,1.1-4.6,1.7-7.1,1.7c-1.9,0-3.7-0.3-5.4-1.1l0,0l0,0c-0.3-0.1-0.5-0.3-0.9-0.5c-0.2-0.1-0.3-0.2-0.5-0.2C17.3,29,17.1,29,16.9,29s-0.4,0-0.6,0.1l0,0l0,0c-0.3,0.1-0.5,0.3-0.7,0.5s-0.2,0.5-0.2,0.7s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.6,0.5c2.4,1.4,5.2,2.1,8.1,2.1c2.6,0,5.2-0.5,7.5-1.5l0,0l0,0c0.3-0.2,0.7-0.3,1.1-0.5c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6l0,0c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.4-0.1-0.5C33.3,29.5,33.1,29.3,32.9,29.2zM16.8,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C19.9,21.1,18.5,19.8,16.8,19.8z M32.1,19.8c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1C35.1,21.1,33.8,19.8,32.1,19.8z"};const O0=function(r){var o=r.type,t=r.width,n=r.height,h=r.color;return(0,d.jsx)("svg",m0({version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 50 50",width:t,height:n},{children:(0,d.jsx)("path",{fill:h,d:j0[o]})}))};var Z=function(){return Z=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},Z.apply(this,arguments)},Y=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o};const _0=function(e){var r=e.onPress,o=r===void 0?null:r,t=e.children,n=t===void 0?null:t,h=e.icon,v=h===void 0||h,g=e.sharer,f=g===void 0?{}:g,m=e.dimensions,i=m===void 0?{width:640,height:480}:m,c=e.type,y=Y(e,["onPress","children","icon","sharer","dimensions","type"]),k=typeof window<"u",e0=s.useRef(function(){var M;return typeof navigator<"u"&&((M=navigator==null?void 0:navigator.userAgent)===null||M===void 0?void 0:M.match(/iPhone|iPad|iPod|Android/i))}()).current,B=function(){if(f!=null&&f.message)return f.message;if(k){var C=document.querySelector("title");if(C!=null&&C.innerHTML)return C.innerHTML}return null},x=function(){if(f!=null&&f.image)return f.image;if(k!==null){var C=document.querySelector('meta[property="og:image"]');if(C)return C.getAttribute("content")}return null};return(0,d.jsx)(b,Z({type:c,onPress:function(C){if(o)o(C);else if(!y.href){var M=Q({height:i==null?void 0:i.height,width:i==null?void 0:i.width,url:f!=null&&f.url?f.url:k?window.location.href:null,message:B(),image:x(),type:c,user:f.user,phone:f.phone});M!=null&&M.url&&(navigator!=null&&navigator.share&&e0?navigator.share({url:M.url,text:M.text,title:M.title}):k&&window.open(M.url,M.title,M.extra))}}},y,{before:v?O0({type:c,width:v===!0?24:v.width||24,height:v===!0?24:v.height||24,color:y.disabled?"rgba(255,255,255,0.35)":"#FFF"}):null},{children:n}))};var X=function(){return X=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},X.apply(this,arguments)},g0=function(e,r,o,t){return new(o||(o=Promise))(function(n,h){function v(m){try{f(t.next(m))}catch(i){h(i)}}function g(m){try{f(t.throw(m))}catch(i){h(i)}}function f(m){m.done?n(m.value):function(c){return c instanceof o?c:new o(function(y){y(c)})}(m.value).then(v,g)}f((t=t.apply(e,r||[])).next())})},v0=function(e,r){var o,t,n,h,v={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return h={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function g(f){return function(m){return function(c){if(o)throw new TypeError("Generator is already executing.");for(;v;)try{if(o=1,t&&(n=2&c[0]?t.return:c[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,c[1])).done)return n;switch(t=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return v.label++,{value:c[1],done:!1};case 5:v.label++,t=c[1],c=[0];continue;case 7:c=v.ops.pop(),v.trys.pop();continue;default:if(n=v.trys,!((n=n.length>0&&n[n.length-1])||c[0]!==6&&c[0]!==2)){v=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){v.label=c[1];break}if(c[0]===6&&v.label<n[1]){v.label=n[1],n=c;break}if(n&&v.label<n[2]){v.label=n[2],v.ops.push(c);break}n[2]&&v.ops.pop(),v.trys.pop();continue}c=r.call(e,v)}catch(y){c=[6,y],t=0}finally{o=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([f,m])}}},re=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o},oe=typeof window<"u";const ce=function(e){var r=e.onPress,o=r===void 0?null:r,t=e.rootElement,n=t===void 0?null:t,h=e.loadingLabel,v=h===void 0?"Wait..":h,g=e.resultLabel,f=g===void 0?"Success!":g,m=(e.disabled,e.cssModule),i=m===void 0?null:m,c=e.children,y=c===void 0?null:c,k=e.size,e0=k===void 0?null:k,B=e.type,x=B===void 0?null:B,C=e.releaseDelay,M=C===void 0?500:C,f0=re(e,["onPress","rootElement","loadingLabel","resultLabel","disabled","cssModule","children","size","type","releaseDelay"]),D=n||"aws-btn",U=s.useRef(null),w0=s.useRef(null),b0=function(O){var T=s.useState(O),A0=T[0],R0=T[1],G=s.useRef(O);return[A0,function(N0){var F0=X(X({},G.current),N0);G.current=F0,R0(F0)},G.current]}({loadingEnd:!1,loadingStart:!1,loadingError:!1,errorLabel:null,active:!1}),H=b0[1],I=b0[2];s.useEffect(function(){return function(){U!=null&&U.current&&clearTimeout(U.current)}},[]);var P0,y0,n0,z0=function(O,T){O===void 0&&(O=!0),T===void 0&&(T=null),H({loadingEnd:!0,loadingError:!O,errorLabel:T})},p0=function(){U.current=setTimeout(function(){oe&&(0,p.beforeFutureCssLayout)(2,function(){var O;O=function(){H({loadingError:!1,errorLabel:null})},H({loadingStart:!1,loadingEnd:!1,active:!1}),(0,p.beforeFutureCssLayout)(2,O)})},M)},S0=s.useCallback(function(){H({active:!0})},[H]),k0=I.active,T0=I.errorLabel;return(0,d.jsx)(b,X({size:e0,type:x,className:(P0=I.loadingStart,y0=I.loadingEnd,n0=I.loadingError,[P0&&"".concat(D,"--start")||null,y0&&"".concat(D,"--end")||null,n0&&"".concat(D,"--errored")||null,"".concat(D,"--progress")].join(" ").trim().replace(/[\s]+/gi," ")),onPress:function(O){return g0(void 0,void 0,void 0,function(){return v0(this,function(T){switch(T.label){case 0:return(I==null?void 0:I.loadingStart)===!0?[2]:((0,p.beforeFutureCssLayout)(4,function(){H({loadingStart:!0})}),[4,(0,p.onceTransitionEnd)(w0.current)]);case 1:return T.sent(),o&&o(O,z0),(0,p.setCssEndEvent)(w0.current,"transition",{tolerance:3}).then(p0),[2]}})})},onMouseDown:S0,cssModule:i,active:k0,extra:(0,d.jsx)("span",{children:(0,d.jsx)("span",{ref:w0,"data-loading":v||null,"data-status":T0||f||null,className:V("".concat(D,"__progress"),i)})})},f0,{children:(0,d.jsx)("span",{children:y})}))}})(),d0})())})(ge);function ye(l0){const{href:L0,before:a0,onMouseUp:s0,...u0}=l0,_=te.useCallback(d=>{L0&&window.open(L0),s0&&s0(d)},[L0,s0]),d0=a0?Reflect.get(me,a0):void 0;return H0.jsx(H0.Fragment,{children:H0.jsx(q0.AwesomeButton,{before:d0?H0.jsx(d0,{},a0):null,onMouseUp:_,...u0,children:l0.text})})}export{ye as default};