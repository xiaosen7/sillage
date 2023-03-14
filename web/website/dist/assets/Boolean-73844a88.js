import{r as t,_ as O,g as T,f as j,k as v,e as P,j as L,K as f,H as W,I as R,aM as A,J as X,M as K,N as _,S as B,a6 as F,bz as G,b6 as J,ai as Q}from"./index-f2e52585.js";var V=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],y=t.forwardRef(function(i,n){var e,a=i.prefixCls,c=a===void 0?"rc-switch":a,r=i.className,d=i.checked,p=i.defaultChecked,o=i.disabled,m=i.loadingIcon,$=i.checkedChildren,I=i.unCheckedChildren,g=i.onClick,w=i.onChange,s=i.onKeyDown,M=O(i,V),x=T(!1,{value:d,defaultValue:p}),S=j(x,2),h=S[0],E=S[1];function C(l,b){var u=h;return o||(u=l,E(u),w==null||w(u,b)),u}function H(l){l.which===f.LEFT?C(!1,l):l.which===f.RIGHT&&C(!0,l),s==null||s(l)}function N(l){var b=C(!h,l);g==null||g(b,l)}var D=v(c,r,(e={},P(e,"".concat(c,"-checked"),h),P(e,"".concat(c,"-disabled"),o),e));return t.createElement("button",L({},M,{type:"button",role:"switch","aria-checked":h,disabled:o,className:D,ref:n,onKeyDown:H,onClick:N}),m,t.createElement("span",{className:"".concat(c,"-inner")},t.createElement("span",{className:"".concat(c,"-inner-checked")},$),t.createElement("span",{className:"".concat(c,"-inner-unchecked")},I)))});y.displayName="Switch";const q=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[`&${n}-small`]:{minWidth:i.switchMinWidthSM,height:i.switchHeightSM,lineHeight:`${i.switchHeightSM}px`,[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMaxSM,paddingInlineEnd:i.switchInnerMarginMinSM,[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:i.switchPinSizeSM,height:i.switchPinSizeSM},[`${n}-loading-icon`]:{top:(i.switchPinSizeSM-i.switchLoadingIconSize)/2,fontSize:i.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:i.switchInnerMarginMinSM,paddingInlineEnd:i.switchInnerMarginMaxSM,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding*2}px + ${i.switchInnerMarginMaxSM*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSizeSM+i.switchPadding*2}px - ${i.switchInnerMarginMaxSM*2}px)`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${i.switchPinSizeSM+i.switchPadding}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.marginXXS/2,marginInlineEnd:-i.marginXXS/2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.marginXXS/2,marginInlineEnd:i.marginXXS/2}}}}}}},U=i=>{const{componentCls:n}=i;return{[n]:{[`${n}-loading-icon${i.iconCls}`]:{position:"relative",top:(i.switchPinSize-i.fontSize)/2,color:i.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:i.switchColor}}}},Y=i=>{const{componentCls:n}=i,e=`${n}-handle`;return{[n]:{[e]:{position:"absolute",top:i.switchPadding,insetInlineStart:i.switchPadding,width:i.switchPinSize,height:i.switchPinSize,transition:`all ${i.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i.colorWhite,borderRadius:i.switchPinSize/2,boxShadow:i.switchHandleShadow,transition:`all ${i.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${e}`]:{insetInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding}px)`},[`&:not(${n}-disabled):active`]:{[`${e}::before`]:{insetInlineEnd:i.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${e}::before`]:{insetInlineEnd:0,insetInlineStart:i.switchHandleActiveInset}}}}},Z=i=>{const{componentCls:n}=i,e=`${n}-inner`;return{[n]:{[e]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:i.switchInnerMarginMax,paddingInlineEnd:i.switchInnerMarginMin,transition:`padding-inline-start ${i.switchDuration} ease-in-out, padding-inline-end ${i.switchDuration} ease-in-out`,[`${e}-checked, ${e}-unchecked`]:{display:"block",color:i.colorTextLightSolid,fontSize:i.fontSizeSM,transition:`margin-inline-start ${i.switchDuration} ease-in-out, margin-inline-end ${i.switchDuration} ease-in-out`,pointerEvents:"none"},[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`},[`${e}-unchecked`]:{marginTop:-i.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${e}`]:{paddingInlineStart:i.switchInnerMarginMin,paddingInlineEnd:i.switchInnerMarginMax,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${i.switchPinSize+i.switchPadding*2}px + ${i.switchInnerMarginMax*2}px)`,marginInlineEnd:`calc(-100% + ${i.switchPinSize+i.switchPadding*2}px - ${i.switchInnerMarginMax*2}px)`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:i.switchPadding*2,marginInlineEnd:-i.switchPadding*2}},[`&${n}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-i.switchPadding*2,marginInlineEnd:i.switchPadding*2}}}}}},k=i=>{const{componentCls:n}=i;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},X(i)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i.switchMinWidth,height:i.switchHeight,lineHeight:`${i.switchHeight}px`,verticalAlign:"middle",background:i.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${i.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:i.colorTextTertiary}}),K(i)),{[`&${n}-checked`]:{background:i.switchColor,[`&:hover:not(${n}-disabled)`]:{background:i.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:i.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},ii=W("Switch",i=>{const n=i.fontSize*i.lineHeight,e=i.controlHeight/2,a=2,c=n-a*2,r=e-a*2,d=R(i,{switchMinWidth:c*2+a*4,switchHeight:n,switchDuration:i.motionDurationMid,switchColor:i.colorPrimary,switchDisabledOpacity:i.opacityLoading,switchInnerMarginMin:c/2,switchInnerMarginMax:c+a+a*2,switchPadding:a,switchPinSize:c,switchBg:i.colorBgContainer,switchMinWidthSM:r*2+a*2,switchHeightSM:e,switchInnerMarginMinSM:r/2,switchInnerMarginMaxSM:r+a+a*2,switchPinSizeSM:r,switchHandleShadow:`0 2px 4px 0 ${new A("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:i.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${i.opacityLoading})`,switchHandleActiveInset:"-30%"});return[k(d),Z(d),Y(d),U(d),q(d)]});var ni=globalThis&&globalThis.__rest||function(i,n){var e={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&n.indexOf(a)<0&&(e[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(i);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(i,a[c])&&(e[a[c]]=i[a[c]]);return e};const z=t.forwardRef((i,n)=>{var{prefixCls:e,size:a,disabled:c,loading:r,className:d,rootClassName:p}=i,o=ni(i,["prefixCls","size","disabled","loading","className","rootClassName"]);const{getPrefixCls:m,direction:$}=t.useContext(_),I=t.useContext(B),g=t.useContext(F),w=(c??g)||r,s=m("switch",e),M=t.createElement("div",{className:`${s}-handle`},r&&t.createElement(J,{className:`${s}-loading-icon`})),[x,S]=ii(s),h=v({[`${s}-small`]:(a||I)==="small",[`${s}-loading`]:r,[`${s}-rtl`]:$==="rtl"},d,p,S);return x(t.createElement(G,null,t.createElement(y,Object.assign({},o,{prefixCls:s,className:h,disabled:w,ref:n,loadingIcon:M}))))});z.__ANT_SWITCH=!0;const ei=z;function ci(i){return Q.jsx(ei,{checked:i.value,onChange:i.onChange})}export{ci as default};
