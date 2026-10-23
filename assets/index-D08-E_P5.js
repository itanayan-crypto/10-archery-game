(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var hd={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function ZM(){if(B_)return ul;B_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:f}}return ul.Fragment=e,ul.jsx=i,ul.jsxs=i,ul}var I_;function QM(){return I_||(I_=1,hd.exports=ZM()),hd.exports}var jt=QM(),dd={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function KM(){if(F_)return ue;F_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(L){return L===null||typeof L!="object"?null:(L=M&&L[M]||L["@@iterator"],typeof L=="function"?L:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,S={};function z(L,K,mt){this.props=L,this.context=K,this.refs=S,this.updater=mt||R}z.prototype.isReactComponent={},z.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},z.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function C(){}C.prototype=z.prototype;function N(L,K,mt){this.props=L,this.context=K,this.refs=S,this.updater=mt||R}var X=N.prototype=new C;X.constructor=N,x(X,z.prototype),X.isPureReactComponent=!0;var B=Array.isArray;function O(){}var rt={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(L,K,mt){var gt=mt.ref;return{$$typeof:o,type:L,key:K,ref:gt!==void 0?gt:null,props:mt}}function lt(L,K){return D(L.type,K,L.props)}function nt(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function _t(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(mt){return K[mt]})}var W=/\/+/g;function et(L,K){return typeof L=="object"&&L!==null&&L.key!=null?_t(""+L.key):K.toString(36)}function H(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(O,O):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function st(L,K,mt,gt,Ot){var Ut=typeof L;(Ut==="undefined"||Ut==="boolean")&&(L=null);var Rt=!1;if(L===null)Rt=!0;else switch(Ut){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(L.$$typeof){case o:case e:Rt=!0;break;case _:return Rt=L._init,st(Rt(L._payload),K,mt,gt,Ot)}}if(Rt)return Ot=Ot(L),Rt=gt===""?"."+et(L,0):gt,B(Ot)?(mt="",Rt!=null&&(mt=Rt.replace(W,"$&/")+"/"),st(Ot,K,mt,"",function(Ne){return Ne})):Ot!=null&&(nt(Ot)&&(Ot=lt(Ot,mt+(Ot.key==null||L&&L.key===Ot.key?"":(""+Ot.key).replace(W,"$&/")+"/")+Rt)),K.push(Ot)),1;Rt=0;var Mt=gt===""?".":gt+":";if(B(L))for(var q=0;q<L.length;q++)gt=L[q],Ut=Mt+et(gt,q),Rt+=st(gt,K,mt,Ut,Ot);else if(q=A(L),typeof q=="function")for(L=q.call(L),q=0;!(gt=L.next()).done;)gt=gt.value,Ut=Mt+et(gt,q++),Rt+=st(gt,K,mt,Ut,Ot);else if(Ut==="object"){if(typeof L.then=="function")return st(H(L),K,mt,gt,Ot);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function it(L,K,mt){if(L==null)return L;var gt=[],Ot=0;return st(L,gt,"","",function(Ut){return K.call(mt,Ut,Ot++)}),gt}function ft(L){if(L._status===-1){var K=L._result,mt=K();mt.then(function(gt){(L._status===0||L._status===-1)&&(L._status=1,L._result=gt,mt.status===void 0&&(mt.status="fulfilled",mt.value=gt))},function(gt){(L._status===0||L._status===-1)&&(L._status=2,L._result=gt,mt.status===void 0&&(mt.status="rejected",mt.reason=gt))}),L._status===-1&&(L._status=0,L._result=mt)}if(L._status===1)return L._result.default;throw L._result}var ht=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(L){var K=rt.T,mt={};mt.types=K!==null?K.types:null,rt.T=mt;try{var gt=L(),Ot=rt.S;Ot!==null&&Ot(mt,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(O,ht)}catch(Ut){ht(Ut)}finally{K!==null&&mt.types!==null&&(K.types=mt.types),rt.T=K}}function Tt(L){var K=rt.T;if(K!==null){var mt=K.types;mt===null?K.types=[L]:mt.indexOf(L)===-1&&mt.push(L)}else Et(Tt.bind(null,L))}var ct={map:it,forEach:function(L,K,mt){it(L,function(){K.apply(this,arguments)},mt)},count:function(L){var K=0;return it(L,function(){K++}),K},toArray:function(L){return it(L,function(K){return K})||[]},only:function(L){if(!nt(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ue.Activity=m,ue.Children=ct,ue.Component=z,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=N,ue.StrictMode=s,ue.Suspense=p,ue.ViewTransition=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rt,ue.__COMPILER_RUNTIME={__proto__:null,c:function(L){return rt.H.useMemoCache(L)}},ue.addTransitionType=Tt,ue.cache=function(L){return function(){return L.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(L,K,mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var gt=x({},L.props),Ot=L.key;if(K!=null)for(Ut in K.key!==void 0&&(Ot=""+K.key),K)!b.call(K,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&K.ref===void 0||(gt[Ut]=K[Ut]);var Ut=arguments.length-2;if(Ut===1)gt.children=mt;else if(1<Ut){for(var Rt=Array(Ut),Mt=0;Mt<Ut;Mt++)Rt[Mt]=arguments[Mt+2];gt.children=Rt}return D(L.type,Ot,gt)},ue.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:f,_context:L},L},ue.createElement=function(L,K,mt){var gt,Ot={},Ut=null;if(K!=null)for(gt in K.key!==void 0&&(Ut=""+K.key),K)b.call(K,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(Ot[gt]=K[gt]);var Rt=arguments.length-2;if(Rt===1)Ot.children=mt;else if(1<Rt){for(var Mt=Array(Rt),q=0;q<Rt;q++)Mt[q]=arguments[q+2];Ot.children=Mt}if(L&&L.defaultProps)for(gt in Rt=L.defaultProps,Rt)Ot[gt]===void 0&&(Ot[gt]=Rt[gt]);return D(L,Ut,Ot)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(L){return{$$typeof:h,render:L}},ue.isValidElement=nt,ue.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:ft}},ue.memo=function(L,K){return{$$typeof:g,type:L,compare:K===void 0?null:K}},ue.startTransition=Et,ue.unstable_useCacheRefresh=function(){return rt.H.useCacheRefresh()},ue.use=function(L){return rt.H.use(L)},ue.useActionState=function(L,K,mt){return rt.H.useActionState(L,K,mt)},ue.useCallback=function(L,K){return rt.H.useCallback(L,K)},ue.useContext=function(L){return rt.H.useContext(L)},ue.useDebugValue=function(){},ue.useDeferredValue=function(L,K){return rt.H.useDeferredValue(L,K)},ue.useEffect=function(L,K){return rt.H.useEffect(L,K)},ue.useEffectEvent=function(L){return rt.H.useEffectEvent(L)},ue.useId=function(){return rt.H.useId()},ue.useImperativeHandle=function(L,K,mt){return rt.H.useImperativeHandle(L,K,mt)},ue.useInsertionEffect=function(L,K){return rt.H.useInsertionEffect(L,K)},ue.useLayoutEffect=function(L,K){return rt.H.useLayoutEffect(L,K)},ue.useMemo=function(L,K){return rt.H.useMemo(L,K)},ue.useOptimistic=function(L,K){return rt.H.useOptimistic(L,K)},ue.useReducer=function(L,K,mt){return rt.H.useReducer(L,K,mt)},ue.useRef=function(L){return rt.H.useRef(L)},ue.useState=function(L){return rt.H.useState(L)},ue.useSyncExternalStore=function(L,K,mt){return rt.H.useSyncExternalStore(L,K,mt)},ue.useTransition=function(){return rt.H.useTransition()},ue.version="19.3.1",ue}var H_;function vp(){return H_||(H_=1,dd.exports=KM()),dd.exports}var En=vp(),pd={exports:{}},cl={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function JM(){return G_||(G_=1,(function(o){function e(H,st){var it=H.length;H.push(st);t:for(;0<it;){var ft=it-1>>>1,ht=H[ft];if(0<l(ht,st))H[ft]=st,H[it]=ht,it=ft;else break t}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var st=H[0],it=H.pop();if(it!==st){H[0]=it;t:for(var ft=0,ht=H.length,Et=ht>>>1;ft<Et;){var Tt=2*(ft+1)-1,ct=H[Tt],L=Tt+1,K=H[L];if(0>l(ct,it))L<ht&&0>l(K,ct)?(H[ft]=K,H[L]=it,ft=L):(H[ft]=ct,H[Tt]=it,ft=Tt);else if(L<ht&&0>l(K,it))H[ft]=K,H[L]=it,ft=L;else break t}}return st}function l(H,st){var it=H.sortIndex-st.sortIndex;return it!==0?it:H.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],g=[],_=1,m=null,y=3,M=!1,A=!1,R=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function N(H){for(var st=i(g);st!==null;){if(st.callback===null)s(g);else if(st.startTime<=H)s(g),st.sortIndex=st.expirationTime,e(p,st);else break;st=i(g)}}function X(H){if(R=!1,N(H),!A)if(i(p)!==null)A=!0,B||(B=!0,nt());else{var st=i(g);st!==null&&et(X,st.startTime-H)}}var B=!1,O=-1,rt=5,b=-1;function D(){return x?!0:!(o.unstable_now()-b<rt)}function lt(){if(x=!1,B){var H=o.unstable_now();b=H;var st=!0;try{t:{A=!1,R&&(R=!1,z(O),O=-1),M=!0;var it=y;try{e:{for(N(H),m=i(p);m!==null&&!(m.expirationTime>H&&D());){var ft=m.callback;if(typeof ft=="function"){m.callback=null,y=m.priorityLevel;var ht=ft(m.expirationTime<=H);if(H=o.unstable_now(),typeof ht=="function"){m.callback=ht,N(H),st=!0;break e}m===i(p)&&s(p),N(H)}else s(p);m=i(p)}if(m!==null)st=!0;else{var Et=i(g);Et!==null&&et(X,Et.startTime-H),st=!1}}break t}finally{m=null,y=it,M=!1}st=void 0}}finally{st?nt():B=!1}}}var nt;if(typeof C=="function")nt=function(){C(lt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,W=_t.port2;_t.port1.onmessage=lt,nt=function(){W.postMessage(null)}}else nt=function(){S(lt,0)};function et(H,st){O=S(function(){H(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(H){switch(y){case 1:case 2:case 3:var st=3;break;default:st=y}var it=y;y=st;try{return H()}finally{y=it}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(H,st){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var it=y;y=H;try{return st()}finally{y=it}},o.unstable_scheduleCallback=function(H,st,it){var ft=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ft+it:ft):it=ft,H){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=it+ht,H={id:_++,callback:st,priorityLevel:H,startTime:it,expirationTime:ht,sortIndex:-1},it>ft?(H.sortIndex=it,e(g,H),i(p)===null&&H===i(g)&&(R?(z(O),O=-1):R=!0,et(X,it-ft))):(H.sortIndex=ht,e(p,H),A||M||(A=!0,B||(B=!0,nt()))),H},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(H){var st=y;return function(){var it=y;y=st;try{return H.apply(this,arguments)}finally{y=it}}}})(gd)),gd}var V_;function $M(){return V_||(V_=1,md.exports=JM()),md.exports}var _d={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function tE(){if(X_)return Dn;X_=1;var o=vp();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,m,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===d?d:""+M,children:_,containerInfo:m,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(_){return{$$typeof:f,_reason:_}},Dn.createPortal=function(_,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return h(_,m,null,y)},Dn.flushSync=function(_){var m=p.T,y=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=m,s.p=y,s.d.f()}},Dn.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},Dn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Dn.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var y=m.as,M=g(y,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,R=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:R}):y==="script"&&s.d.X(_,{crossOrigin:M,integrity:A,fetchPriority:R,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(_)},Dn.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,M=g(y,m.crossOrigin);s.d.L(_,y,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(_,m){if(typeof _=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(_)},Dn.requestFormReset=function(_){s.d.r(_)},Dn.unstable_batchedUpdates=function(_,m){return _(m)},Dn.useFormState=function(_,m,y){return p.H.useFormState(_,m,y)},Dn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var W_;function eE(){if(W_)return _d.exports;W_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_d.exports=tE(),_d.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function nE(){if(q_)return cl;q_=1;var o=$M(),e=vp(),i=eE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===r)return p(u),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=c;else{for(var v=!1,E=u.child;E;){if(E===a){v=!0,a=u,r=c;break}if(E===r){v=!0,r=u,a=c;break}E=E.sibling}if(!v){for(E=c.child;E;){if(E===a){v=!0,a=c,r=u;break}if(E===r){v=!0,r=c,a=u;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,u,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function A(t){var n=[null,null],a=y(t);return a===null||R(n,t,a.child,{foundSelf:!1}),n}function R(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&R(t,n,a.child,r))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,z=null;function C(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function N(t,n,a){return t===a?(z=t,!1):t===n?(z!==null&&(S=t),!0):!1}function X(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var c=n;c;c=a(c))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,rt=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),lt=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),_t=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),et=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Tt=Symbol.for("react.legacy_hidden"),ct=Symbol.for("react.memo_cache_sentinel"),L=Symbol.for("react.view_transition"),K=Symbol.for("react.recoverable"),mt=Symbol.iterator;function gt(t){return t===null||typeof t!="object"?null:(t=mt&&t[mt]||t["@@iterator"],typeof t=="function"?t:null)}var Ot=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lt:return"Fragment";case _t:return"Profiler";case nt:return"StrictMode";case st:return"Suspense";case it:return"SuspenseList";case Et:return"Activity";case L:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case et:return t.displayName||"Context";case W:return(t._context.displayName||"Context")+".Consumer";case H:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ft:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var Rt=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ne={pending:!1,data:null,method:null,action:null},qt=[],se=-1;function Ft(t){return{current:t}}function ce(t){0>se||(t.current=qt[se],qt[se]=null,se--)}function Ht(t,n){se++,qt[se]=t.current,t.current=n}var U=Ft(null),w=Ft(null),ot=Ft(null),xt=Ft(null);function St(t,n){switch(Ht(ot,n),Ht(w,t),Ht(U,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Y0(n),t=k0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ce(U),Ht(U,t)}function vt(){ce(U),ce(w),ce(ot)}function Xt(t){var n=t.memoizedState;n!==null&&(Fs._currentValue=n.memoizedState,Ht(xt,t)),n=U.current;var a=k0(n,t.type);n!==a&&(Ht(w,t),Ht(U,a))}function At(t){w.current===t&&(ce(U),ce(w)),xt.current===t&&(ce(xt),Fs._currentValue=Ne)}var It,te;function ae(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+te}var yt=!1;function Ee(t,n){if(!t||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Ct){var Y=Ct}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Ct){Y=Ct}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ct){Y=Ct}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Ct){if(Ct&&Y&&typeof Ct.stack=="string")return[Ct.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),v=c[0],E=c[1];if(v&&E){var P=v.split(`
`),j=E.split(`
`);for(u=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(r===P.length||u===j.length)for(r=P.length-1,u=j.length-1;1<=r&&0<=u&&P[r]!==j[u];)u--;for(;1<=r&&0<=u;r--,u--)if(P[r]!==j[u]){if(r!==1||u!==1)do if(r--,u--,0>u||P[r]!==j[u]){var at=`
`+P[r].replace(" at new "," at ");return t.displayName&&at.includes("<anonymous>")&&(at=at.replace("<anonymous>",t.displayName)),at}while(1<=r&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ae(a):""}function fe(t,n){switch(t.tag){case 26:case 27:case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return t.child!==n&&n!==null?ae("Suspense Fallback"):ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return Ee(t.type,!1);case 11:return Ee(t.type.render,!1);case 1:return Ee(t.type,!0);case 31:return ae("Activity");case 30:return ae("ViewTransition");default:return""}}function ee(t){try{var n="",a=null;do n+=fe(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var kt=Object.prototype.hasOwnProperty,ut=o.unstable_scheduleCallback,oe=o.unstable_cancelCallback,ye=o.unstable_shouldYield,Oe=o.unstable_requestPaint,Yt=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,V=o.unstable_ImmediatePriority,Nt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,ne=o.unstable_IdlePriority,ze=o.log,Pe=o.unstable_setDisableYieldValue,je=null,Ce=null;function Se(t){if(typeof ze=="function"&&Pe(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(je,t)}catch{}}var we=Math.clz32?Math.clz32:ts,On=Math.log,Oa=Math.LN2;function ts(t){return t>>>=0,t===0?32:31-(On(t)/Oa|0)|0}var Zn=256,gi=262144,_i=4194304;function ri(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ui(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,c=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?u=ri(r):(v&=E,v!==0?u=ri(v):a||(a=E&~t,a!==0&&(u=ri(a))))):(E=r&~c,E!==0?u=ri(E):v!==0?u=ri(v):a||(a=r&~t,a!==0&&(u=ri(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Wi(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function xr(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-we(a),u=1<<r;n|=t[r],a&=~u}return n}function zt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T(){var t=_i;return _i<<=1,(_i&62914560)===0&&(_i=4194304),t}function F(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Q(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Z(t,n,a,r,u,c){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,j=t.hiddenUpdates;for(a=v&~a;0<a;){var at=31-we(a),pt=1<<at;E[at]=0,P[at]=-1;var Y=j[at];if(Y!==null)for(j[at]=null,at=0;at<Y.length;at++){var tt=Y[at];tt!==null&&(tt.lane&=-536870913)}a&=~pt}r!==0&&$(t,r,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(v&~n))}function $(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-we(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Dt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-we(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Bt(t,n){var a=n&-n;return a=(a&42)!==0?1:Vt(a),(a&(t.suspendedLanes|n))!==0?0:a}function Vt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Jt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function re(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:D_(t.type))}function ie(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var $t=Math.random().toString(36).slice(2),pe="__reactFiber$"+$t,Le="__reactProps$"+$t,We="__reactContainer$"+$t,Qn="__reactEvents$"+$t,Ge="__reactListeners$"+$t,Pt="__reactHandles$"+$t,en="__reactResources$"+$t,ge="__reactMarker$"+$t,mn="__reactLoad$"+$t;function qi(t){delete t[pe],delete t[Le],delete t[Ge],delete t[Pt]}function zn(t){var n;if(n=t[pe])return n;for(var a=t.parentNode;a;){if(n=a[We]||a[pe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=c_(t);t!==null;){if(a=t[pe])return a;t=c_(t)}return n}t=a,a=t.parentNode}return null}function Yi(t){if(t=t[pe]||t[We]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Kn(t){var n=t[en];return n||(n=t[en]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function an(t){t[ge]=!0}function Hn(t){t[mn]=void 0}var es=new Set,wl={};function ki(t,n){ns(t,n),ns(t+"Capture",n)}function ns(t,n){for(wl[t]=n,t=0;t<n.length;t++)es.add(n[t])}var dS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dp={},Lp={};function pS(t){return kt.call(Lp,t)?!0:kt.call(Dp,t)?!1:dS.test(t)?Lp[t]=!0:(Dp[t]=!0,!1)}var De=!1;function Up(){var t=De;return De=!1,t}function Cl(t,n,a){if(pS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Dl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function la(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function si(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Np(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function mS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,c.call(this,v)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gc(t){if(!t._valueTracker){var n=Np(t)?"checked":"value";t._valueTracker=mS(t,n,""+t[n])}}function Op(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Np(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var gS=/[\n"\\]/g;function vi(t){return t.replace(gS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vc(t,n,a,r,u,c,v,E){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+si(n)):t.value!==""+si(n)&&(t.value=""+si(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?Xc(t,si(t.value)):Xc(t,si(n)):a!=null?Xc(t,si(a)):r!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+si(E):t.removeAttribute("name")}function zp(t,n,a,r,u,c,v,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Gc(t);return}a=a!=null?""+si(a):"",n=n!=null?""+si(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Gc(t)}function Xc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function is(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+si(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pp(t,n,a){if(n!=null&&(n=""+si(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+si(a):""}function Bp(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=si(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Gc(t)}function as(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var _S=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ip(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||_S.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",De=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(Ip(t,u,r),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&Ip(t,c,n[c])}function Wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(t){return yS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,ss=null;function Hp(t){var n=Yi(t);if(n&&(t=n.stateNode)){var a=t[Le]||null;t:switch(t=n.stateNode,n.type){case"input":if(Vc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Le]||null;if(!u)throw Error(s(90));Vc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Op(r)}break t;case"textarea":Pp(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&is(t,!!a.multiple,n,!1)}}}var kc=!1;function Gp(t,n,a){if(kc)return t(n,a);kc=!0;try{var r=t(n);return r}finally{if(kc=!1,(rs!==null||ss!==null)&&(Lu(),rs&&(n=rs,t=ss,ss=rs=null,Hp(n),t)))for(n=0;n<t.length;n++)Hp(t[n])}}function xo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Le]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(ua)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{jc=!1}var za=null,Zc=null,Ul=null;function Vp(){if(Ul)return Ul;var t,n=Zc,a=n.length,r,u="value"in za?za.value:za.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(r=1;r<=v&&n[a-r]===u[c-r];r++);return Ul=u.slice(t,1<r?1-r:void 0)}function Nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function Xp(){return!1}function Gn(t){function n(a,r,u,c,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ol:Xp,this.isPropagationStopped=Xp,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Gn(Pa),Eo=O({},Pa,{view:0,detail:0}),SS=Gn(Eo),Qc,Kc,To,Pl=O({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Qc=t.screenX-To.screenX,Kc=t.screenY-To.screenY):Kc=Qc=0,To=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Wp=Gn(Pl),xS=O({},Pl,{dataTransfer:0}),MS=Gn(xS),ES=O({},Eo,{relatedTarget:0}),Jc=Gn(ES),TS=O({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),bS=Gn(TS),AS=O({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RS=Gn(AS),wS=O({},Pa,{data:0}),qp=Gn(wS),CS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function US(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=LS[t])?!!n[t]:!1}function $c(){return US}var NS=O({},Eo,{key:function(t){if(t.key){var n=CS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=Gn(NS),zS=O({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=Gn(zS),PS=O({},Pa,{submitter:0}),BS=Gn(PS),IS=O({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),FS=Gn(IS),HS=O({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),GS=Gn(HS),VS=O({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XS=Gn(VS),WS=O({},Pa,{newState:0,oldState:0,source:0}),qS=Gn(WS),YS=[9,13,27,32],tf=ua&&"CompositionEvent"in window,bo=null;ua&&"documentMode"in document&&(bo=document.documentMode);var kS=ua&&"TextEvent"in window&&!bo,kp=ua&&(!tf||bo&&8<bo&&11>=bo),jp=" ",Zp=!1;function Qp(t,n){switch(t){case"keyup":return YS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function jS(t,n){switch(t){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(Zp=!0,jp);case"textInput":return t=n.data,t===jp&&Zp?null:t;default:return null}}function ZS(t,n){if(os)return t==="compositionend"||!tf&&Qp(t,n)?(t=Vp(),Ul=Zc=za=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kp&&n.locale!=="ko"?null:n.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!QS[t.type]:n==="textarea"}function $p(t,n,a,r){rs?ss?ss.push(r):ss=[r]:rs=r,n=Bu(n,"onChange"),0<n.length&&(a=new zl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ao=null,Ro=null;function KS(t){H0(t,0)}function Bl(t){var n=nn(t);if(Op(n))return t}function tm(t,n){if(t==="change")return n}var em=!1;if(ua){var ef;if(ua){var nf="oninput"in document;if(!nf){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),nf=typeof nm.oninput=="function"}ef=nf}else ef=!1;em=ef&&(!document.documentMode||9<document.documentMode)}function im(){Ao&&(Ao.detachEvent("onpropertychange",am),Ro=Ao=null)}function am(t){if(t.propertyName==="value"&&Bl(Ro)){var n=[];$p(n,Ro,t,Yc(t)),Gp(KS,n)}}function JS(t,n,a){t==="focusin"?(im(),Ao=n,Ro=a,Ao.attachEvent("onpropertychange",am)):t==="focusout"&&im()}function $S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Ro)}function tx(t,n){if(t==="click")return Bl(n)}function ex(t,n){if(t==="input"||t==="change")return Bl(n)}function nx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:nx;function wo(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!kt.call(n,u)||!oi(t[u],n[u]))return!1}return!0}function af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,n){var a=rm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rm(a)}}function om(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?om(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=af(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=af(t.document)}return n}function rf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ix=ua&&"documentMode"in document&&11>=document.documentMode,ls=null,sf=null,Co=null,of=!1;function um(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;of||ls==null||ls!==af(r)||(r=ls,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&wo(Co,r)||(Co=r,r=Bu(sf,"onSelect"),0<r.length&&(n=new zl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ls)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var us={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},lf={},cm={};ua&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Er(t){if(lf[t])return lf[t];if(!us[t])return t;var n=us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cm)return lf[t]=n[a];return t}var fm=Er("animationend"),hm=Er("animationiteration"),dm=Er("animationstart"),ax=Er("transitionrun"),rx=Er("transitionstart"),sx=Er("transitioncancel"),pm=Er("transitionend"),mm=new Map,uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uf.push("scrollEnd");function Ni(t,n){mm.set(t,n),ki(n,[t])}var ox=0;function ca(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Bi.identifierPrefix;var a=ox++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function gm(t){if(t==null||typeof t=="string")return t;var n=null,a=Cs;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function fa(t,n){return t=gm(t),n=gm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],cs=0,cf=0;function Fl(){for(var t=cs,n=cf=cs=0;n<t;){var a=yi[n];yi[n++]=null;var r=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var c=yi[n];if(yi[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}c!==0&&_m(a,u,c)}}function Hl(t,n,a,r){yi[cs++]=t,yi[cs++]=n,yi[cs++]=a,yi[cs++]=r,cf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ff(t,n,a,r){return Hl(t,n,a,r),Gl(t)}function Tr(t,n){return Hl(t,null,null,n),Gl(t)}function _m(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-we(a),t=c.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),c):null}function Gl(t){if(50<Ko)throw Ko=0,Du=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fs={};function lx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,r){return new lx(t,n,a,r)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function vm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,r,u,c){var v=0;if(r=t,typeof r=="function")hf(r)&&(v=1);else if(typeof r=="string")v=PM(t,a,U.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Et:return t=Jn(31,a,n,u),t.elementType=Et,t.lanes=c,t;case lt:return br(a.children,u,c,n);case nt:v=8,u|=24;break;case _t:return t=Jn(12,a,n,u|2),t.elementType=_t,t.lanes=c,t;case st:return t=Jn(13,a,n,u),t.elementType=st,t.lanes=c,t;case it:return t=Jn(19,a,n,u),t.elementType=it,t.lanes=c,t;case Tt:case L:return t=u|32,t=Jn(30,a,n,t),t.elementType=L,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case et:v=10;break t;case W:v=9;break t;case H:v=11;break t;case ft:v=14;break t;case ht:v=16,r=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Jn(v,a,n,u),n.elementType=t,n.type=r,n.lanes=c,n}function br(t,n,a,r){return t=Jn(7,t,r,n),t.lanes=a,t}function df(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function ym(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function pf(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Sm=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=Sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ee(n)},Sm.set(t,n),n)}return{value:t,source:n,stack:ee(n)}}var hs=[],ds=0,Xl=null,Do=0,xi=[],Mi=0,Ba=null,Zi=1,Qi="";function da(t,n){hs[ds++]=Do,hs[ds++]=Xl,Xl=t,Do=n}function xm(t,n,a){xi[Mi++]=Zi,xi[Mi++]=Qi,xi[Mi++]=Ba,Ba=t;var r=Zi;t=Qi;var u=32-we(r)-1;r&=~(1<<u),a+=1;var c=32-we(n)+u;if(30<c){var v=u-u%5;c=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Zi=1<<32-we(n)+u|a<<u|r,Qi=c+t}else Zi=1<<c|a<<u|r,Qi=t}function Wl(t){t.return!==null&&(da(t,1),xm(t,1,0))}function mf(t){for(;t===Xl;)Xl=hs[--ds],hs[ds]=null,Do=hs[--ds],hs[ds]=null;for(;t===Ba;)Ba=xi[--Mi],xi[Mi]=null,Qi=xi[--Mi],xi[Mi]=null,Zi=xi[--Mi],xi[Mi]=null}function Mm(t,n){xi[Mi++]=Zi,xi[Mi++]=Qi,xi[Mi++]=Ba,Zi=n.id,Qi=n.overflow,Ba=t}var yn=null,Ze=null,_e=!1,Ia=null,Ei=!1,gf=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(Si(n,t)),gf}function Em(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[pe]=t,n[Le]=r,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<$o.length;a++)Me($o[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),zp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Bp(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||W0(n.textContent,a)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Fa(t,!0)}function ql(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:yn=yn.return}}function ps(t){if(t!==yn)return!1;if(!_e)return ql(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Fa(t),ql(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=u_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=u_(t)}else n===27?(n=Ze,er(t.type)?(t=ed,ed=null,Ze=t):Ze=n):Ze=yn?bi(t.stateNode.nextSibling):null;return!0}function Ar(){Ze=yn=null,_e=!1}function _f(){var t=Ia;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Ia=null),t}function Lo(t){Ia===null?Ia=[t]:Ia.push(t)}var vf=Ft(null),Rr=null,pa=null;function Ha(t,n,a){Ht(vf,n._currentValue),n._currentValue=a}function ma(t){t._currentValue=vf.current,ce(vf)}function Yl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var v=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var P=0;P<n.length;P++)if(E.context===n[P]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Yl(c.return,a,t),r||(v=null);break t}c=E.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,c=v.alternate,c!==null&&(c.lanes|=a),Yl(v,a,t),v=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Yl(u.return,a,t),v=u.child,v=v!==null?v.sibling:null):v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function wr(t,n,a,r){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=u.type;oi(u.pendingProps.value,v.value)||(t!==null?t.push(E):t=[E])}}else if(u===xt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fs):t=[Fs])}u=u.return}return t!==null&&yf(n,t,a,r),n.flags|=262144,t!==null}function kl(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Rr=t,pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Tm(Rr,t)}function jl(t,n){return Rr===null&&Cr(t),Tm(t,n)}function Tm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},pa===null){if(t===null)throw Error(s(308));pa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else pa=pa.next=n;return a}var ux=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},cx=o.unstable_scheduleCallback,fx=o.unstable_NormalPriority,ln={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new ux,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&cx(fx,function(){t.controller.abort()})}function bm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var No=null;function hx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Oo=null,xf=0,Dr=0,ms=null;function dx(t,n){if(Oo===null){var a=Oo=[];xf=0,Dr=Bh(),ms={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xf++,n.then(Am,Am),n}function Am(){if(--xf===0&&(No=null,Oo!==null)){ms!==null&&(ms.status="fulfilled");var t=Oo;Oo=null,Dr=0,ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function px(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Rm=Mt.S;Mt.S=function(t,n){if(y0=Yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dx(t,n),No!==null)for(var a=Ns;a!==null;)bm(a,No),a=a.next;if(a=t.types,a!==null){for(var r=Ns;r!==null;)bm(r,a),r=r.next;if(Dr!==0){r=No,r===null&&(r=No=[]);for(var u=0;u<a.length;u++){var c=a[u];r.indexOf(c)===-1&&r.push(c)}}}Rm!==null&&Rm(t,n)};var Lr=Ft(null);function Mf(){var t=Lr.current;return t!==null?t:qe.pooledCache}function Zl(t,n){n===null?Ht(Lr,Lr.current):Ht(Lr,n.pool)}function wm(){var t=Mf();return t===null?null:{parent:ln._currentValue,pool:t}}var gs=Error(s(460)),Ef=Error(s(474)),Ql=Error(s(542)),Kl={then:function(){}};function Cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Um(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Um(t),t}throw Nr=n,gs}}function Ur(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,gs):a}}var Nr=null;function Lm(){if(Nr===null)throw Error(s(459));var t=Nr;return Nr=null,t}function Um(t){if(t===gs||t===Ql)throw Error(s(483))}var _s=null,zo=0;function Jl(t){var n=zo;return zo+=1,_s===null&&(_s=[]),Dm(_s,t,n)}function Ga(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===rt?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Nm(t){function n(k,I){if(t){var J=k.deletions;J===null?(k.deletions=[I],k.flags|=16):J.push(I)}}function a(k,I){if(!t)return null;for(;I!==null;)n(k,I),I=I.sibling;return null}function r(k){for(var I=new Map;k!==null;)k.key===null?I.set(k.index,k):I.set(k.key,k),k=k.sibling;return I}function u(k,I){return k=ha(k,I),k.index=0,k.sibling=null,k}function c(k,I,J){return k.index=J,t?(J=k.alternate,J!==null?(J=J.index,J<I?(k.flags|=2,I):J):(k.flags|=134217730,I)):(k.flags|=1048576,I)}function v(k){return t&&k.alternate===null&&(k.flags|=134217730),k}function E(k,I,J,dt){return I===null||I.tag!==6?(I=df(J,k.mode,dt),I.return=k,I):(I=u(I,J),I.return=k,I)}function P(k,I,J,dt){var Gt=J.type;return Gt===lt?(k=at(k,I,J.props.children,dt,J.key),Ga(k,J),k):I!==null&&(I.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===ht&&Ur(Gt)===I.type)?(I=u(I,J.props),Ga(I,J),I.return=k,I):(I=Vl(J.type,J.key,J.props,null,k.mode,dt),Ga(I,J),I.return=k,I)}function j(k,I,J,dt){return I===null||I.tag!==4||I.stateNode.containerInfo!==J.containerInfo||I.stateNode.implementation!==J.implementation?(I=pf(J,k.mode,dt),I.return=k,I):(I=u(I,J.children||[]),I.return=k,I)}function at(k,I,J,dt,Gt){return I===null||I.tag!==7?(I=br(J,k.mode,dt,Gt),I.return=k,I):(I=u(I,J),I.return=k,I)}function pt(k,I,J){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=df(""+I,k.mode,J),I.return=k,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case b:return J=Vl(I.type,I.key,I.props,null,k.mode,J),Ga(J,I),J.return=k,J;case D:return I=pf(I,k.mode,J),I.return=k,I;case ht:return I=Ur(I),pt(k,I,J)}if(Rt(I)||gt(I))return I=br(I,k.mode,J,null),I.return=k,I;if(typeof I.then=="function")return pt(k,Jl(I),J);if(I.$$typeof===et)return pt(k,jl(k,I),J);$l(k,I)}return null}function Y(k,I,J,dt){var Gt=I!==null?I.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:E(k,I,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===Gt?P(k,I,J,dt):null;case D:return J.key===Gt?j(k,I,J,dt):null;case ht:return J=Ur(J),Y(k,I,J,dt)}if(Rt(J)||gt(J))return Gt!==null?null:at(k,I,J,dt,null);if(typeof J.then=="function")return Y(k,I,Jl(J),dt);if(J.$$typeof===et)return Y(k,I,jl(k,J),dt);$l(k,J)}return null}function tt(k,I,J,dt,Gt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return k=k.get(J)||null,E(I,k,""+dt,Gt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case b:return k=k.get(dt.key===null?J:dt.key)||null,P(I,k,dt,Gt);case D:return k=k.get(dt.key===null?J:dt.key)||null,j(I,k,dt,Gt);case ht:return dt=Ur(dt),tt(k,I,J,dt,Gt)}if(Rt(dt)||gt(dt))return k=k.get(J)||null,at(I,k,dt,Gt,null);if(typeof dt.then=="function")return tt(k,I,J,Jl(dt),Gt);if(dt.$$typeof===et)return tt(k,I,J,jl(I,dt),Gt);$l(I,dt)}return null}function Ct(k,I,J,dt){for(var Gt=null,be=null,Qt=I,le=I=0,fn=null;Qt!==null&&le<J.length;le++){Qt.index>le?(fn=Qt,Qt=null):fn=Qt.sibling;var Re=Y(k,Qt,J[le],dt);if(Re===null){Qt===null&&(Qt=fn);break}t&&Qt&&Re.alternate===null&&n(k,Qt),I=c(Re,I,le),be===null?Gt=Re:be.sibling=Re,be=Re,Qt=fn}if(le===J.length)return a(k,Qt),_e&&da(k,le),Gt;if(Qt===null){for(;le<J.length;le++)Qt=pt(k,J[le],dt),Qt!==null&&(I=c(Qt,I,le),be===null?Gt=Qt:be.sibling=Qt,be=Qt);return _e&&da(k,le),Gt}for(Qt=r(Qt);le<J.length;le++)fn=tt(Qt,k,le,J[le],dt),fn!==null&&(t&&(Re=fn.alternate,Re!==null&&Qt.delete(Re.key===null?le:Re.key)),I=c(fn,I,le),be===null?Gt=fn:be.sibling=fn,be=fn);return t&&Qt.forEach(function(sr){return n(k,sr)}),_e&&da(k,le),Gt}function Wt(k,I,J,dt){if(J==null)throw Error(s(151));for(var Gt=null,be=null,Qt=I,le=I=0,fn=null,Re=J.next();Qt!==null&&!Re.done;le++,Re=J.next()){Qt.index>le?(fn=Qt,Qt=null):fn=Qt.sibling;var sr=Y(k,Qt,Re.value,dt);if(sr===null){Qt===null&&(Qt=fn);break}t&&Qt&&sr.alternate===null&&n(k,Qt),I=c(sr,I,le),be===null?Gt=sr:be.sibling=sr,be=sr,Qt=fn}if(Re.done)return a(k,Qt),_e&&da(k,le),Gt;if(Qt===null){for(;!Re.done;le++,Re=J.next())Re=pt(k,Re.value,dt),Re!==null&&(I=c(Re,I,le),be===null?Gt=Re:be.sibling=Re,be=Re);return _e&&da(k,le),Gt}for(Qt=r(Qt);!Re.done;le++,Re=J.next())Re=tt(Qt,k,le,Re.value,dt),Re!==null&&(t&&(fn=Re.alternate,fn!==null&&Qt.delete(fn.key===null?le:fn.key)),I=c(Re,I,le),be===null?Gt=Re:be.sibling=Re,be=Re);return t&&Qt.forEach(function(jM){return n(k,jM)}),_e&&da(k,le),Gt}function de(k,I,J,dt){if(typeof J=="object"&&J!==null&&J.type===lt&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:t:{for(var Gt=J.key;I!==null;){if(I.key===Gt){if(Gt=J.type,Gt===lt){if(I.tag===7){a(k,I.sibling),dt=u(I,J.props.children),Ga(dt,J),dt.return=k,k=dt;break t}}else if(I.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===ht&&Ur(Gt)===I.type){a(k,I.sibling),dt=u(I,J.props),Ga(dt,J),dt.return=k,k=dt;break t}a(k,I);break}else n(k,I);I=I.sibling}J.type===lt?(dt=br(J.props.children,k.mode,dt,J.key),Ga(dt,J),dt.return=k,k=dt):(dt=Vl(J.type,J.key,J.props,null,k.mode,dt),Ga(dt,J),dt.return=k,k=dt)}return v(k);case D:t:{for(Gt=J.key;I!==null;){if(I.key===Gt)if(I.tag===4&&I.stateNode.containerInfo===J.containerInfo&&I.stateNode.implementation===J.implementation){a(k,I.sibling),dt=u(I,J.children||[]),dt.return=k,k=dt;break t}else{a(k,I);break}else n(k,I);I=I.sibling}dt=pf(J,k.mode,dt),dt.return=k,k=dt}return v(k);case ht:return J=Ur(J),de(k,I,J,dt)}if(Rt(J))return Ct(k,I,J,dt);if(gt(J)){if(Gt=gt(J),typeof Gt!="function")throw Error(s(150));return J=Gt.call(J),Wt(k,I,J,dt)}if(typeof J.then=="function")return de(k,I,Jl(J),dt);if(J.$$typeof===et)return de(k,I,jl(k,J),dt);$l(k,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,I!==null&&I.tag===6?(a(k,I.sibling),dt=u(I,J),dt.return=k,k=dt):(a(k,I),dt=df(J,k.mode,dt),dt.return=k,k=dt),v(k)):a(k,I)}return function(k,I,J,dt){try{zo=0;var Gt=de(k,I,J,dt);return _s=null,Gt}catch(Qt){if(Qt===gs||Qt===Ql)throw Qt;var be=Jn(29,Qt,null,k.mode);return be.lanes=dt,be.return=k,be}finally{}}}var Or=Nm(!0),Om=Nm(!1),Va=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Gl(t),_m(t,null,a),n}return Hl(t,r,n,a),Gl(t)}function Po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Dt(t,a)}}function Af(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=v:c=c.next=v,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Rf=!1;function Bo(){if(Rf){var t=ms;if(t!==null)throw t}}function Io(t,n,a,r){Rf=!1;var u=t.updateQueue;Va=!1;var c=u.firstBaseUpdate,v=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var P=E,j=P.next;P.next=null,v===null?c=j:v.next=j,v=P;var at=t.alternate;at!==null&&(at=at.updateQueue,E=at.lastBaseUpdate,E!==v&&(E===null?at.firstBaseUpdate=j:E.next=j,at.lastBaseUpdate=P))}if(c!==null){var pt=u.baseState;v=0,at=j=P=null,E=c;do{var Y=E.lane&-536870913,tt=Y!==E.lane;if(tt?(Te&Y)===Y:(r&Y)===Y){Y!==0&&Y===Dr&&(Rf=!0),at!==null&&(at=at.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ct=t,Wt=E;Y=n;var de=a;switch(Wt.tag){case 1:if(Ct=Wt.payload,typeof Ct=="function"){pt=Ct.call(de,pt,Y);break t}pt=Ct;break t;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Wt.payload,Y=typeof Ct=="function"?Ct.call(de,pt,Y):Ct,Y==null)break t;pt=O({},pt,Y);break t;case 2:Va=!0}}Y=E.callback,Y!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=u.callbacks,tt===null?u.callbacks=[Y]:tt.push(Y))}else tt={lane:Y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},at===null?(j=at=tt,P=pt):at=at.next=tt,v|=Y;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,u.lastBaseUpdate=tt,u.shared.pending=null}}while(!0);at===null&&(P=pt),u.baseState=P,u.firstBaseUpdate=j,u.lastBaseUpdate=at,c===null&&(u.shared.lanes=0),Ka|=v,t.lanes=v,t.memoizedState=pt}}function zm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Pm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zm(a[t],n)}var qa=Ft(null),tu=Ft(0);function Bm(t,n){t=Sa,Ht(tu,t),Ht(qa,n),Sa=t|n.baseLanes}function wf(){Ht(tu,Sa),Ht(qa,qa.current)}function Cf(){Sa=tu.current,ce(qa),ce(tu)}var An=Ft(null),Pn=null;function Ya(t){var n=t.alternate;Ht(Rn,Rn.current&1),Ht(An,t),Pn===null&&(n===null||qa.current!==null||n.memoizedState!==null)&&(Pn=t)}function Df(t){Ht(Rn,Rn.current),Ht(An,t),Pn===null&&(Pn=t)}function Im(t){t.tag===22?(Ht(Rn,Rn.current),Ht(An,t),Pn===null&&(Pn=t)):ka()}function ka(){Ht(Rn,Rn.current),Ht(An,An.current)}function li(t){ce(An),Pn===t&&(Pn=null),ce(Rn)}var Rn=Ft(0);function Fo(t,n){Ht(An,An.current),Ht(Rn,n)}function Lf(t){ce(Rn),ce(An),Pn===t&&(Pn=null)}function eu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$h(a)||td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=0,he=null,Ve=null,un=null,nu=!1,vs=!1,zr=!1,iu=0,Ho=0,ys=null,mx=0;function rn(){throw Error(s(321))}function Uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function Nf(t,n,a,r,u,c){return ga=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?xg:Mg,zr=!1,c=a(r,u),zr=!1,vs&&(c=Hm(n,a,r,u)),Fm(t),c}function Fm(t){Mt.H=cu;var n=Ve!==null&&Ve.next!==null;if(ga=0,un=Ve=he=null,nu=!1,Ho=0,ys=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&kl(t)&&(cn=!0))}function Hm(t,n,a,r){he=t;var u=0;do{if(vs&&(ys=null),Ho=0,vs=!1,25<=u)throw Error(s(301));if(u+=1,un=Ve=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Mt.H=Ex,c=n(a,r)}while(vs);return c}function gx(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Go(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(he.flags|=1024),n}function Of(){var t=iu!==0;return iu=0,t}function zf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pf(t){if(nu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nu=!1}ga=0,un=Ve=he=null,vs=!1,Ho=iu=0,ys=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=t:un=un.next=t,un}function on(){if(Ve===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,Ve=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?he.memoizedState=un=t:un=un.next=t}return un}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var n=Ho;return Ho+=1,ys===null&&(ys=[]),t=Dm(ys,t,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?xg:Mg),t}function ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===K)return;if(t.$$typeof===et)return bn(t)}throw Error(s(438,String(t)))}function Bf(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=au(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ct;return n.index++,a}function _a(t,n){return typeof n=="function"?n(t):n}function su(t){var n=on();return If(n,Ve,t)}function If(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,c=r.pending;if(c!==null){if(u!==null){var v=u.next;u.next=c.next,c.next=v}n.baseQueue=u=c,r.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=v=null,P=null,j=n,at=!1;do{var pt=j.lane&-536870913;if(pt!==j.lane?(Te&pt)===pt:(ga&pt)===pt){var Y=j.revertLane;if(Y===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),pt===Dr&&(at=!0);else if((ga&Y)===Y){j=j.next,Y===Dr&&(at=!0);continue}else pt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(E=P=pt,v=c):P=P.next=pt,he.lanes|=Y,Ka|=Y;pt=j.action,zr&&a(c,pt),c=j.hasEagerState?j.eagerState:a(c,pt)}else Y={lane:pt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(E=P=Y,v=c):P=P.next=Y,he.lanes|=pt,Ka|=pt;j=j.next}while(j!==null&&j!==n);if(P===null?v=c:P.next=E,!oi(c,t.memoizedState)&&(cn=!0,at&&(a=ms,a!==null)))throw a;t.memoizedState=c,t.baseState=v,t.baseQueue=P,r.lastRenderedState=c}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ff(t){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do c=t(c,v.action),v=v.next;while(v!==u);oi(c,n.memoizedState)||(cn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function Gm(t,n,a){var r=he,u=on(),c=_e;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!oi((Ve||u).memoizedState,a);if(v&&(u.memoizedState=a,cn=!0),u=u.queue,Vf(Wm.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||v||un!==null&&(un.memoizedState.tag&1)!==0,Ss(t?9:8,{destroy:void 0},Xm.bind(null,r,u,a,n),null),t){if(r.flags|=2048,qe===null)throw Error(s(349));c||(ga&127)!==0||Vm(r,n,a)}return a}function Vm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=au(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xm(t,n,a,r){n.value=a,n.getSnapshot=r,qm(n)&&Ym(t)}function Wm(t,n,a){return a(function(){qm(n)&&Ym(t)})}function qm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function Ym(t){var n=Tr(t,2);n!==null&&ni(n,t,2)}function Hf(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),zr){Se(!0);try{a()}finally{Se(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},n}function km(t,n,a,r){return t.baseState=a,If(t,Ve,typeof r=="function"?r:_a)}function _x(t,n,a,r,u){if(uu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){c.listeners.push(v)}};Mt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,jm(n,c)):(c.next=a.next,n.pending=a.next=c)}}function jm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var c=Mt.T,v={};v.types=c!==null?c.types:null,Mt.T=v;try{var E=a(u,r),P=Mt.S;P!==null&&P(v,E),Zm(t,n,E)}catch(j){Gf(t,n,j)}finally{c!==null&&v.types!==null&&(c.types=v.types),Mt.T=c}}else try{c=a(u,r),Zm(t,n,c)}catch(j){Gf(t,n,j)}}function Zm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Qm(t,n,r)},function(r){return Gf(t,n,r)}):Qm(t,n,a)}function Qm(t,n,a){n.status="fulfilled",n.value=a,Km(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,jm(t,a)))}function Gf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Km(n),n=n.next;while(n!==r)}t.action=null}function Km(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Jm(t,n){return n}function $m(t,n){if(_e){var a=qe.formState;if(a!==null){t:{var r=he;if(_e){if(Ze){e:{for(var u=Ze,c=Ei;u.nodeType!==8;){if(!c){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ze=bi(u.nextSibling),r=u.data==="F!";break t}}Fa(r)}r=!1}r&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jm,lastRenderedState:n},a.queue=r,a=vg.bind(null,he,r),r.dispatch=a,r=Hf(!1),c=kf.bind(null,he,!1,r.queue),r=Vn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=_x.bind(null,he,u,c,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function tg(t){var n=on();return eg(n,Ve,t)}function eg(t,n,a){if(n=If(t,n,Jm)[0],t=su(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Go(n)}catch(v){throw v===gs?Ql:v}else r=n;n=on();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Ss(9,{destroy:void 0},vx.bind(null,u,a),null)),[r,c,t]}function vx(t,n){t.action=n}function ng(t){var n=on(),a=Ve;if(a!==null)return eg(n,a,t);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ss(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=au(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function ig(){return on().memoizedState}function ou(t,n,a,r){var u=Vn();he.flags|=t,u.memoizedState=Ss(1|n,{destroy:void 0},a,r===void 0?null:r)}function lu(t,n,a,r){var u=on();r=r===void 0?null:r;var c=u.memoizedState.inst;Ve!==null&&r!==null&&Uf(r,Ve.memoizedState.deps)?u.memoizedState=Ss(n,c,a,r):(he.flags|=t,u.memoizedState=Ss(1|n,c,a,r))}function ag(t,n){ou(8390656,8,t,n)}function Vf(t,n){lu(2048,8,t,n)}function yx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=au(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function rg(t){var n=on().memoizedState;return yx({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function sg(t,n){return lu(4,2,t,n)}function og(t,n){return lu(4,4,t,n)}function lg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ug(t,n,a){a=a!=null?a.concat([t]):null,lu(4,4,lg.bind(null,n,t),a)}function Xf(){}function cg(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Uf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function fg(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Uf(n,r[1]))return r[0];if(r=t(),zr){Se(!0);try{t()}finally{Se(!1)}}return a.memoizedState=[r,n],r}function Wf(t,n,a){return a===void 0||(ga&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=x0(),he.lanes|=t,Ka|=t,a)}function hg(t,n,a,r){return oi(a,n)?a:qa.current!==null?(t=Wf(t,a,r),oi(t,n)||(cn=!0),t):(ga&106)===0||(ga&1073741824)!==0&&(Te&261930)===0?(cn=!0,t.memoizedState=a):(t=x0(),he.lanes|=t,Ka|=t,n)}function dg(t,n,a,r,u){var c=q.p;q.p=c!==0&&8>c?c:8;var v=Mt.T,E={};E.types=v!==null?v.types:null,Mt.T=E,kf(t,!1,n,a);try{var P=u(),j=Mt.S;if(j!==null&&j(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var at=px(P,r);Vo(t,n,at,hi(t))}else Vo(t,n,r,hi(t))}catch(pt){Vo(t,n,{then:function(){},status:"rejected",reason:pt},hi())}finally{q.p=c,v!==null&&E.types!==null&&(v.types=E.types),Mt.T=v}}function Sx(){}function qf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=pg(t).queue;dg(t,u,n,Ne,a===null?Sx:function(){return mg(t),a(r)})}function pg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ne,baseState:Ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:Ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function mg(t){var n=pg(t);n.next===null&&(n=t.alternate.memoizedState),Vo(t,n.next.queue,{},hi())}function Yf(){return bn(Fs)}function gg(){return on().memoizedState}function _g(){return on().memoizedState}function xx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=Xa(a);var r=Wa(n,t,a);r!==null&&(ni(r,n,a),Po(r,n,a)),n={cache:Sf()},t.payload=n;return}n=n.return}}function Mx(t,n,a){var r=hi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(t)?yg(n,a):(a=ff(t,n,a,r),a!==null&&(ni(a,t,r),Sg(a,n,r)))}function vg(t,n,a){var r=hi();Vo(t,n,a,r)}function Vo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(t))yg(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var v=n.lastRenderedState,E=c(v,a);if(u.hasEagerState=!0,u.eagerState=E,oi(E,v))return Hl(t,n,u,0),qe===null&&Fl(),!1}catch{}finally{}if(a=ff(t,n,u,r),a!==null)return ni(a,t,r),Sg(a,n,r),!0}return!1}function kf(t,n,a,r){if(r={lane:2,revertLane:Bh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uu(t)){if(n)throw Error(s(479))}else n=ff(t,a,r,2),n!==null&&ni(n,t,2)}function uu(t){var n=t.alternate;return t===he||n!==null&&n===he}function yg(t,n){vs=nu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Sg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Dt(t,a)}}var cu={readContext:bn,use:ru,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},xg={readContext:bn,use:ru,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:ag,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ou(4194308,4,lg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){ou(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var r=t();if(zr){Se(!0);try{t()}finally{Se(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Vn();if(a!==void 0){var u=a(n);if(zr){Se(!0);try{a(n)}finally{Se(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Mx.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hf(t);var n=t.queue,a=vg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xf,useDeferredValue:function(t,n){var a=Vn();return Wf(a,t,n)},useTransition:function(){var t=Hf(!1);return t=dg.bind(null,he,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=he,u=Vn();if(_e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Te&127)!==0||Vm(r,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,ag(Wm.bind(null,r,c,t),[t]),r.flags|=2048,Ss(9,{destroy:void 0},Xm.bind(null,r,c,a,n),null),a},useId:function(){var t=Vn(),n=qe.identifierPrefix;if(_e){var a=Qi,r=Zi;a=(r&~(1<<32-we(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=iu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=mx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yf,useFormState:$m,useActionState:$m,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=kf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Bf,useCacheRefresh:function(){return Vn().memoizedState=xx.bind(null,he)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mg={readContext:bn,use:ru,useCallback:cg,useContext:bn,useEffect:Vf,useImperativeHandle:ug,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:su,useRef:ig,useState:function(){return su(_a)},useDebugValue:Xf,useDeferredValue:function(t,n){var a=on();return hg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=su(_a)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:Yf,useFormState:tg,useActionState:tg,useOptimistic:function(t,n){var a=on();return km(a,Ve,t,n)},useMemoCache:Bf,useCacheRefresh:_g,useEffectEvent:rg},Ex={readContext:bn,use:ru,useCallback:cg,useContext:bn,useEffect:Vf,useImperativeHandle:ug,useInsertionEffect:sg,useLayoutEffect:og,useMemo:fg,useReducer:Ff,useRef:ig,useState:function(){return Ff(_a)},useDebugValue:Xf,useDeferredValue:function(t,n){var a=on();return Ve===null?Wf(a,t,n):hg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Ff(_a)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:Gm,useId:gg,useHostTransitionStatus:Yf,useFormState:ng,useActionState:ng,useOptimistic:function(t,n){var a=on();return Ve!==null?km(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:_g,useEffectEvent:rg};function jf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=hi(),u=Xa(r);u.payload=n,a!=null&&(u.callback=a),n=Wa(t,u,r),n!==null&&(ni(n,t,r),Po(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=hi(),u=Xa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(t,u,r),n!==null&&(ni(n,t,r),Po(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),r=Xa(a);r.tag=2,n!=null&&(r.callback=n),n=Wa(t,r,a),n!==null&&(ni(n,t,a),Po(n,t,a))}};function Eg(t,n,a,r,u,c,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,v):n.prototype&&n.prototype.isPureReactComponent?!wo(a,r)||!wo(u,c):!0}function Tg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Zf.enqueueReplaceState(n,n.state,null)}function Pr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function bg(t){Il(t)}function Ag(t){console.error(t)}function Rg(t){Il(t)}function fu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function wg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qf(t,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){fu(t,n)},a}function Cg(t){return t=Xa(t),t.tag=3,t}function Dg(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;t.payload=function(){return u(c)},t.callback=function(){wg(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){wg(n,a,r),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Tx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&wr(n,a,u,!0),a=An.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Uu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Oh(t,r,u)),!1;case 22:return a.flags|=65536,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Oh(t,r,u)),!1}throw Error(s(435,a.tag))}return Oh(t,r,u),Uu(),!1}if(_e)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==gf&&(t=Error(s(422),{cause:r}),Lo(Si(t,a)))):(r!==gf&&(n=Error(s(423),{cause:r}),Lo(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=Si(r,a),u=Qf(t.stateNode,r,u),Af(t,u),sn!==4&&(sn=2)),!1;var c=Error(s(520),{cause:r});if(c=Si(c,a),Qo===null?Qo=[c]:Qo.push(c),sn!==4&&(sn=2),n===null)return!0;r=Si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Qf(a.stateNode,r,t),Af(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ja===null||!Ja.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Cg(u),Dg(u,t,a,r),Af(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Kf=Error(s(461)),cn=!1;function gn(t,n,a,r){n.child=t===null?Om(n,null,a,r):Or(n,t.child,a,r)}function Lg(t,n,a,r,u){a=a.render;var c=n.ref;if("ref"in r){var v={};for(var E in r)E!=="ref"&&(v[E]=r[E])}else v=r;return Cr(n),r=Nf(t,n,a,v,c,u),E=Of(),t!==null&&!cn?(zf(t,n,u),va(t,n,u)):(_e&&E&&Wl(n),n.flags|=1,gn(t,n,r,u),n.child)}function Ug(t,n,a,r,u){if(t===null){var c=a.type;return typeof c=="function"&&!hf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Ng(t,n,c,r,u)):(t=Vl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!rh(t,u)){var v=c.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(v,r)&&t.ref===n.ref)return va(t,n,u)}return n.flags|=1,t=ha(c,r),t.ref=n.ref,t.return=n,n.child=t}function Ng(t,n,a,r,u){if(t!==null){var c=t.memoizedProps;if(wo(c,r)&&t.ref===n.ref)if(cn=!1,n.pendingProps=r=c,rh(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,va(t,n,u)}return Jf(t,n,a,r,u)}function Og(t,n,a,r){var u=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return zg(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,c!==null?c.cachePool:null),c!==null?Bm(n,c):wf(),Im(n);else return r=n.lanes=536870912,zg(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Zl(n,c.cachePool),Bm(n,c),ka(),n.memoizedState=null):(t!==null&&Zl(n,null),wf(),ka());return gn(t,n,u,a),n.child}function Xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zg(t,n,a,r,u){var c=Mf();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Zl(n,null),wf(),Im(n),t!==null&&wr(t,n,r,!0),n.childLanes=u,null}function hu(t,n){return n=du({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Pg(t,n,a){return Or(n,t.child,null,a),t=hu(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function bx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=hu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Xo(null,t);if(Df(n),(t=Ze)?(t=l_(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=ym(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return hu(n,r)}var c=t.memoizedState;if(c!==null){var v=c.dehydrated;if(Df(n),u)if(n.flags&256)n.flags&=-257,n=Pg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||wr(t,n,a,!1),u=(a&t.childLanes)!==0,cn||u){if(qa.current===null){if(r=qe,r!==null&&(v=Bt(r,a),v!==0&&v!==c.retryLane))throw c.retryLane=v,Tr(t,v),ni(r,t,v),Kf;Uu()}n=Pg(t,n,a)}else t=c.treeContext,Ze=bi(v.nextSibling),yn=n,_e=!0,Ia=null,Ei=!1,t!==null&&Mm(n,t),n=hu(n,r),n.flags|=134221824;return n}return t=ha(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Jf(t,n,a,r,u){return Cr(n),a=Nf(t,n,a,r,void 0,u),r=Of(),t!==null&&!cn?(zf(t,n,u),va(t,n,u)):(_e&&r&&Wl(n),n.flags|=1,gn(t,n,a,u),n.child)}function Bg(t,n,a,r,u,c){return Cr(n),n.updateQueue=null,a=Hm(n,r,a,u),Fm(t),r=Of(),t!==null&&!cn?(zf(t,n,c),va(t,n,c)):(_e&&r&&Wl(n),n.flags|=1,gn(t,n,a,c),n.child)}function Ig(t,n,a,r,u){if(Cr(n),n.stateNode===null){var c=fs,v=a.contextType;typeof v=="object"&&v!==null&&(c=bn(v)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Zf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Tf(n),v=a.contextType,c.context=typeof v=="object"&&v!==null?bn(v):fs,c.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(jf(n,a,v,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(v=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),v!==c.state&&Zf.enqueueReplaceState(c,c.state,null),Io(n,r,c,u),Bo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,P=Pr(a,E);c.props=P;var j=c.context,at=a.contextType;v=fs,typeof at=="object"&&at!==null&&(v=bn(at));var pt=a.getDerivedStateFromProps;at=typeof pt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,at||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||j!==v)&&Tg(n,c,r,v),Va=!1;var Y=n.memoizedState;c.state=Y,Io(n,r,c,u),Bo(),j=n.memoizedState,E||Y!==j||Va?(typeof pt=="function"&&(jf(n,a,pt,r),j=n.memoizedState),(P=Va||Eg(n,a,P,r,Y,j,v))?(at||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),c.props=r,c.state=j,c.context=v,r=P):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,bf(t,n),v=n.memoizedProps,at=Pr(a,v),c.props=at,pt=n.pendingProps,Y=c.context,j=a.contextType,P=fs,typeof j=="object"&&j!==null&&(P=bn(j)),E=a.getDerivedStateFromProps,(j=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v!==pt||Y!==P)&&Tg(n,c,r,P),Va=!1,Y=n.memoizedState,c.state=Y,Io(n,r,c,u),Bo();var tt=n.memoizedState;v!==pt||Y!==tt||Va||t!==null&&t.dependencies!==null&&kl(t.dependencies)?(typeof E=="function"&&(jf(n,a,E,r),tt=n.memoizedState),(at=Va||Eg(n,a,at,r,Y,tt,P)||t!==null&&t.dependencies!==null&&kl(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,tt,P),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,tt,P)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=tt),c.props=r,c.state=tt,c.context=P,r=at):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,xs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Or(n,t.child,null,u),n.child=Or(n,null,a,u)):gn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=va(t,n,u),t}function Fg(t,n,a,r){return Ar(),n.flags|=256,gn(t,n,a,r),n.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function th(t){return{baseLanes:t,cachePool:wm()}}function eh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function Hg(t,n,a){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,v;if((v=c)||(v=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?Ya(n):ka(),(t=Ze)?(t=l_(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=ym(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw Fa(n);return td(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,u?(ka(),u=n.mode,c=du({mode:"hidden",children:c},u),r=br(r,u,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=th(a),r.childLanes=eh(t,v,a),n.memoizedState=$f,Xo(null,r)):(Ya(n),nh(n,c))}var E=t.memoizedState;if(E!==null){var P=E.dehydrated;if(P!==null)return Ax(t,n,c,v,r,P,E,a)}return u?(ka(),u=r.fallback,c=n.mode,E=t.child,P=E.sibling,r=ha(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,P!==null?u=ha(P,u):(u=br(u,c,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Xo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=th(a):(c=u.cachePool,c!==null?(E=ln._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=wm(),u={baseLanes:u.baseLanes|a,cachePool:c}),r.memoizedState=u,r.childLanes=eh(t,v,a),n.memoizedState=$f,Xo(t.child,r)):(Ya(n),a=t.child,t=a.sibling,a=ha(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function nh(t,n){return n=du({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function du(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function pu(t,n,a){return Or(n,t.child,null,a),t=nh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ax(t,n,a,r,u,c,v,E){if(a)return n.flags&256?(Ya(n),n.flags&=-257,pu(t,n,E)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,null):(ka(),c=u.fallback,v=n.mode,u=du({mode:"visible",children:u.children},v),c=br(c,v,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Or(n,t.child,null,E),u=n.child,u.memoizedState=th(E),u.childLanes=eh(t,r,E),n.memoizedState=$f,Xo(null,u));if(Ya(n),td(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Lo({value:u,source:null,stack:null})),pu(t,n,E)}if(cn||wr(t,n,E,!1),r=(E&t.childLanes)!==0,cn||r){if(qa.current!==null)return pu(t,n,E);if(r=qe,r!==null&&(u=Bt(r,E),u!==0&&u!==v.retryLane))throw v.retryLane=u,Tr(t,u),ni(r,t,u),Kf;return $h(c)||Uu(),pu(t,n,E)}return $h(c)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,Ze=bi(c.nextSibling),yn=n,_e=!0,Ia=null,Ei=!1,t!==null&&Mm(n,t),n=nh(n,u.children),n.flags|=134221824,n)}function Gg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Yl(t.return,n,a)}function Vg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&eu(a)===null&&(n=t),t=t.sibling}return n}function mu(t,n,a,r,u,c){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:c}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=c)}function ih(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ah(t,n,a){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var v=Rn.current;if(n.flags&128)return Fo(n,v),null;var E=(v&2)!==0;if(E?(v=v&1|2,n.flags|=128):v&=1,Fo(n,v),u==="backwards"&&t!==null?(ih(t),gn(t,n,r,a),ih(t)):gn(t,n,r,a),r=_e?Do:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,a,n);else if(t.tag===19)Gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=Vg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,ih(n)),mu(n,!0,u,null,c,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&eu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}mu(n,!0,a,null,c,r);break;case"together":mu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Vg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mu(n,!1,u,a,c,r)}return n.child}function Xg(t,n,a){var r=n.pendingProps;return Ha(n,n.type,r.value),gn(t,n,r.children,a),n.child}function va(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ha(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ha(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&kl(t)))}function Rx(t,n,a){switch(n.tag){case 3:St(n,n.stateNode.containerInfo),Ha(n,ln,t.memoizedState.cache),Ar();break;case 27:case 5:Xt(n);break;case 4:St(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Df(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ya(n),n.flags|=128,null;r=wr(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?Hg(t,n,a):(Ya(n),t=va(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return ah(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(wr(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return ah(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Fo(n,Rn.current),r)break;return null;case 22:return n.lanes=0,Og(t,n,a,n.pendingProps);case 24:Ha(n,ln,t.memoizedState.cache)}return va(t,n,a)}function Wg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!rh(t,a)&&(n.flags&128)===0)return cn=!1,Rx(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,_e&&(n.flags&1048576)!==0&&xm(n,Do,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ur(n.elementType),n.type=t,typeof t=="function")hf(t)?(r=Pr(t,r),n.tag=1,n=Ig(null,n,t,r,a)):(n.tag=0,n=Jf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===H){n.tag=11,n=Lg(null,n,t,r,a);break t}else if(u===ft){n.tag=14,n=Ug(null,n,t,r,a);break t}else if(u===et){n.tag=10,n.type=t,n=Xg(null,n,a);break t}}throw n=Ut(t)||t,Error(s(306,n,""))}}return n;case 0:return Jf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Pr(r,n.pendingProps),Ig(t,n,r,u,a);case 3:t:{if(St(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,bf(t,n),Io(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ha(n,ln,r),r!==c.cache&&yf(n,[ln],a,!0),Bo(),r=v.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Fg(t,n,r,a);break t}else if(r!==u){u=Si(Error(s(424)),n),Lo(u),n=Fg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=bi(t.firstChild),yn=n,_e=!0,Ia=null,Ei=!0,a=Om(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ar(),r===u){n=va(t,n,a);break t}gn(t,n,r,a)}n=n.child}return n;case 26:return xs(t,n),t===null?(a=m_(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=j0(n.type,n.pendingProps,ot.current,n)):n.memoizedState=m_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&_e&&(r=n.stateNode=f_(n.type,n.pendingProps,ot.current),yn=n,Ei=!0,u=Ze,er(n.type)?(ed=u,Ze=bi(r.firstChild)):Ze=u),gn(t,n,n.pendingProps.children,a),xs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=r=Ze)&&(r=xM(r,n.type,n.pendingProps,Ei),r!==null?(n.stateNode=r,yn=n,Ze=bi(r.firstChild),Ei=!1,u=!0):u=!1),u||Fa(n)),Xt(n),u=n.type,c=n.pendingProps,v=t!==null?t.memoizedProps:null,r=c.children,Yh(u,c)?r=null:v!==null&&Yh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Nf(t,n,gx,null,null,a),Fs._currentValue=u),xs(t,n),gn(t,n,r,a),n.child;case 6:return t===null&&_e&&((t=a=Ze)&&(a=MM(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,yn=n,Ze=null,t=!0):t=!1),t||Fa(n)),null;case 13:return Hg(t,n,a);case 4:return St(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Or(n,null,r,a):gn(t,n,r,a),n.child;case 11:return Lg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,xs(t,n),gn(t,n,r,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return Xg(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Cr(n),u=bn(u),r=r(u),n.flags|=1,gn(t,n,r,a),n.child;case 14:return Ug(t,n,n.type,n.pendingProps,a);case 15:return Ng(t,n,n.type,n.pendingProps,a);case 19:return ah(t,n,a);case 31:return bx(t,n,a);case 22:return Og(t,n,a,n.pendingProps);case 24:return Cr(n),r=bn(ln),t===null?(u=Mf(),u===null&&(u=qe,c=Sf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:r,cache:u},Tf(n),Ha(n,ln,u)):((t.lanes&a)!==0&&(bf(t,n),Io(n,null,null,a),Bo()),u=t.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,ln,r)):(r=c.cache,Ha(n,ln,r),r!==u.cache&&yf(n,[ln],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Wl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:xs(t,n),gn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function sh(t,n,a,r,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?y_(n,r):y_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(b0())t.flags|=8192;else throw Nr=Kl,Ef}else t.flags&=-16777217}function qg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!S_(n))if(b0())t.flags|=8192;else throw Nr=Kl,Ef}function gu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?T():536870912,t.lanes|=n,As|=n)}function Wo(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function wx(t,n,a){var r=n.pendingProps;switch(mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ma(ln),vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ps(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_f())),Qe(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ya(n),c!==null?(Qe(n),qg(n,c)):(Qe(n),sh(n,u,null,r,a))):c?c!==t.memoizedState?(ya(n),Qe(n),qg(n,c)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),Qe(n),sh(n,u,t,r,a)),null;case 27:if(At(n),a=ot.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=U.current,ps(n)?Em(n):(t=f_(u,r,a),n.stateNode=t,ya(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(At(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(c=U.current,ps(n))Em(n);else{var v=el(ot.current);switch(c){case 1:c=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=v.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}c[pe]=n,c[Le]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)c.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=c;t:switch(Cn(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return Qe(n),n.subtreeFlags&=-33554433,sh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=ot.current,ps(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[pe]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||W0(t.nodeValue,a)),t||Fa(n,!0)}else t=el(t).createTextNode(r),t[pe]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ps(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[pe]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ps(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pe]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=_f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gu(n,n.updateQueue),Qe(n),null);case 4:return vt(),t===null&&Gh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return ma(n.type),Qe(n),null;case 19:if(Lf(n),r=n.memoizedState,r===null)return Qe(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)Wo(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=eu(t),c!==null){for(n.flags|=128,Wo(r,!1),t=c.updateQueue,n.updateQueue=t,gu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)vm(a,t),a=a.sibling;return Fo(n,Rn.current&1|2),_e&&da(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Yt()>wu&&(n.flags|=128,u=!0,Wo(r,!1),n.lanes=4194304)}else{if(!u)if(t=eu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,gu(n,t),Wo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return Qe(n),null}else 2*Yt()-r.renderingStartTime>wu&&a!==536870912&&(n.flags|=128,u=!0,Wo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Yt(),t.sibling=null,c=Rn.current,c=u?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||_e?Fo(n,c):(a=c,Ht(An,n),Ht(Rn,a),Pn===null&&(Pn=n)),_e&&da(n,r.treeForkCount),t}return Qe(n),null;case 22:case 23:return li(n),Cf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&gu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ce(Lr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ma(ln),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(s(156,n.tag))}function Cx(t,n){switch(mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ma(ln),vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return At(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Lf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return vt(),null;case 10:return ma(n.type),null;case 22:case 23:return li(n),Cf(),t!==null&&ce(Lr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ma(ln),null;case 25:return null;default:return null}}function Yg(t,n){switch(mf(n),n.tag){case 3:ma(ln),vt();break;case 26:case 27:case 5:At(n);break;case 4:vt();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Lf(n);break;case 10:ma(n.type);break;case 22:case 23:li(n),Cf(),t!==null&&ce(Lr);break;case 24:ma(ln)}}function qo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var c=a.create,v=a.inst;r=c(),v.destroy=r}a=a.next}while(a!==u)}}catch(E){Fe(n,n.return,E)}}function ja(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&t)===t){var v=r.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,u=n;var P=a,j=E;try{j()}catch(at){Fe(u,P,at)}}}r=r.next}while(r!==c)}}catch(at){Fe(n,n.return,at)}}function kg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Pm(n,a)}catch(r){Fe(t,t.return,r)}}}function jg(t,n,a){a.props=Pr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function Ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,c=ca(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=e_(c)),r=u.ref;break;case 7:if(t.stateNode===null){var v=new di(t);m(t.child,!1,yM,v,void 0,void 0),t.stateNode=v}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){Fe(t,n,E)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function _u(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)o_(t.stateNode,n[a])}function Zg(t){for(var n=t.return;n!==null&&(lh(n)&&o_(t.stateNode,n.stateNode),!oh(n));)n=n.return}function Yo(t){for(var n=t.return;n!==null&&(lh(n)&&SM(t.stateNode,n.stateNode),!oh(n));)n=n.return}function oh(t){return t.tag===5||t.tag===3||t.tag===27}function lh(t){return t&&t.tag===7&&t.stateNode!==null}function uh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function ch(t,n,a){try{var r=t.stateNode;eM(r,t.type,a,n),r[Le]=n}catch(u){Fe(t,t.return,u)}}function Qg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function fh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),_u(t,r),De=!0;else if(u!==4&&(u===27&&(_u(t,r),r=null,er(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(hh(t,n,a,r),t=t.sibling;t!==null;)hh(t,n,a,r),t=t.sibling}function vu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),_u(t,r),De=!0;else if(u!==4&&(u===27&&(_u(t,r),r=null,er(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vu(t,n,a,r),t=t.sibling;t!==null;)vu(t,n,a,r),t=t.sibling}function Kg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[pe]=t,n[Le]=a}catch(c){Fe(t,t.return,c)}}var yu=!1,ui=null;function Jg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(yu=!0)}var Ji=null;function $g(){var t=Ji;return Ji=null,t}var $n=0;function Ms(t,n,a,r,u){return $n=0,t0(t.child,n,a,r,u)}function t0(t,n,a,r,u){for(var c=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(r!==null){var E=Zh(v);r.push(E),E.view&&(c=!0)}else c||Zh(v).view&&(c=!0);yu=!0,$0(v,$n===0?n:n+"_"+$n,a),$n++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||t0(t.child,n,a,r,u)&&(c=!0));t=t.sibling}return c}function $i(t,n){for(;t!==null;)t.tag===5?t_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||$i(t.child,n)),t=t.sibling}function Su(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Su(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=fa(n.default,n.share),n!=="none"&&(Ms(t,a,n,null,!1)||$i(t.child,!1))}t=t.sibling}}function dh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=ca(r,a),c=fa(r.default,a.paired?r.share:r.enter);c!=="none"?Ms(t,u,c,null,!1)?(Su(t),a.paired||n||Ds(t,r.onEnter)):$i(t.child,!1):Su(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dh(t,n),t=t.sibling;else Su(t)}function ph(t){if(ui!==null&&ui.size!==0){var n=ui;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var c=fa(a.default,a.share);if(c!=="none"&&(Ms(t,r,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Ds(t,a.onShare)):$i(t.child,!1)),n.delete(r),n.size===0)break}}}ph(t)}t=t.sibling}}}function mh(t){if(t.tag===30){var n=t.memoizedProps,a=ca(n,t.stateNode),r=ui!==null?ui.get(a):void 0,u=fa(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Ms(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ui.delete(a),Ds(t,n.onShare)):Ds(t,n.onExit):$i(t.child,!1)),ui!==null&&ph(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mh(t),t=t.sibling;else ui!==null&&ph(t)}function e0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ca(n,t.stateNode);n=fa(n.default,n.update),t.flags&=-5,n!=="none"&&Ms(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&e0(t);t=t.sibling}}function gh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,$i(t.child,!1))}gh(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,$i(t.child,!1),gh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else gh(t)}function n0(t){for(t=t.child;t!==null;)t.tag===30?$i(t.child,!1):(t.subtreeFlags&33554432)!==0&&n0(t),t=t.sibling}function _h(t,n,a,r,u,c,v){for(var E=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(c!==null&&$n<c.length){var j=c[$n],at=Zh(P);(j.view||at.view)&&(E=!0);var pt;if(pt=(t.flags&4)===0)if(at.clip)pt=!0;else{pt=j.rect;var Y=at.rect;pt=pt.y!==Y.y||pt.x!==Y.x||pt.height!==Y.height||pt.width!==Y.width}pt&&(t.flags|=4),at.abs?at=!j.abs:(j=j.rect,at=at.rect,at=j.height!==at.height||j.width!==at.width),at&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&$0(P,$n===0?a:a+"_"+$n,u),E&&(t.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(P,$n===0?r:r+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:_h(t,n.child,a,r,u,c,v)&&(E=!0));n=n.sibling}return E}function i0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=ca(a,r),c=fa(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;$n=0,u=_h(r,E,u,u,c,v,!1),(t.flags&4)!==0&&u&&Ds(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&i0(t);t=t.sibling}}var Sn=!1,Be=!1,ta=!1,vh=!1,a0=typeof WeakSet=="function"?WeakSet:Set,xn=null,ea=!1,ko=!1,Mu=!1,yh=!1;function Dx(t,n,a){if(t=t.containerInfo,Wh=Hs,t=lm(t),rf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var c=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{r.nodeType,v.nodeType}catch{r=null;break t}var E=0,P=-1,j=-1,at=0,pt=0,Y=t,tt=null;e:for(;;){for(var Ct;Y!==r||c!==0&&Y.nodeType!==3||(P=E+c),Y!==v||u!==0&&Y.nodeType!==3||(j=E+u),Y.nodeType===3&&(E+=Y.nodeValue.length),(Ct=Y.firstChild)!==null;)tt=Y,Y=Ct;for(;;){if(Y===t)break e;if(tt===r&&++at===c&&(P=E),tt===v&&++pt===u&&(j=E),(Ct=Y.nextSibling)!==null)break;Y=tt,tt=Y.parentNode}Y=Ct}r=P===-1||j===-1?null:{start:P,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(qh={focusedElem:t,selectionRange:r},Hs=!1,a=(a&335544064)===a,xn=n,n=a?9270:1024;xn!==null;){if(t=xn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&mh(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&Jg(t),Eu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&mh(r),Eu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Jg(t),Eu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,xn=r):(a&&e0(t),Eu(a))}}ui=null}function Eu(t){for(;xn!==null;){var n=xn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var v=Pr(n.type,u);a=c.getSnapshotBeforeUpdate(v,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Fe(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Jh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Jh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ca(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=fa(u.default,u.update),u!=="none"&&Ms(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,xn=r;break}xn=n.return}}function r0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:na(t,a),r&4&&qo(5,a);break;case 1:if(na(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=Pr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}r&64&&kg(a),r&512&&Ki(a,a.return);break;case 3:if(na(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pm(t,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&r&4&&Kg(a);case 26:case 5:na(t,a),n===null&&r&4&&uh(a),r&512&&Ki(a,a.return);break;case 12:na(t,a);break;case 31:na(t,a),r&4&&u0(t,a);break;case 13:na(t,a),r&4&&c0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vx.bind(null,a),EM(t,a))));break;case 22:if(r=a.memoizedState!==null||Sn,!r){var c=n!==null&&n.memoizedState!==null||Be;n=Sn,u=Be,Sn=r,(Be=c)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Pi(t,a,r)):na(t,a),Sn=n,Be=u}break;case 30:na(t,a),r&512&&Ki(a,a.return);break;case 7:r&512&&Ki(a,a.return);default:na(t,a)}}function Sh(t,n){for(t=t.child;t!==null;)s0(t,n),t=t.sibling}function s0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,v=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(P){Fe(t,t.return,P)}xh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(P){Fe(t,t.return,P)}break;case 18:try{var E=t.stateNode;n?J0(E,!0):J0(t.stateNode,!1)}catch(P){Fe(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Sh(t,n);break;default:Sh(t,n)}}function xh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:s0(a,r);break t;case 22:a.memoizedState===null&&xh(a,r);break t;default:xh(a,r)}}t=t.sibling}}function o0(t){var n=t.alternate;n!==null&&(t.alternate=null,o0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,ti=!1;function Oi(t,n,a){for(a=a.child;a!==null;)l0(t,n,a),a=a.sibling}function l0(t,n,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(je,a)}catch{}switch(a.tag){case 26:Be||wn(a,n),Oi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||wn(a,n),Yo(a);var r=Je,u=ti;er(a.type)&&(Je=a.stateNode,ti=!1),Oi(t,n,a),h_(a.stateNode,a.type,a.memoizedProps),Je=r,ti=u;break;case 5:Be||wn(a,n),Yo(a);case 6:if(a.tag===6&&Yo(a),r=Je,u=ti,Je=null,Oi(t,n,a),Je=r,ti=u,Je!==null)if(ti)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),De=!0}catch(c){Fe(a,n,c)}else try{Je.removeChild(a.stateNode),De=!0}catch(c){Fe(a,n,c)}break;case 18:Je!==null&&(ti?(t=Je,K0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gs(t)):K0(Je,a.stateNode));break;case 4:r=Je,u=ti,Je=a.stateNode.containerInfo,ti=!0,Oi(t,n,a),Je=r,ti=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),Be||ja(4,a,n),Oi(t,n,a);break;case 1:Be||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&jg(a,n,r)),Oi(t,n,a);break;case 21:Oi(t,n,a);break;case 22:Be=(r=Be)||a.memoizedState!==null,Oi(t,n,a),Be=r;break;case 30:wn(a,n),Oi(t,n,a);break;case 7:Be||wn(a,n),Oi(t,n,a);break;default:Oi(t,n,a)}}function u0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gs(t)}catch(a){Fe(n,n.return,a)}}}function c0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(a){Fe(n,n.return,a)}}function Lx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new a0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new a0),n;default:throw Error(s(435,t.tag))}}function Tu(t,n){var a=Lx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Xx.bind(null,t,r);r.then(u,u)}})}function Xn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var c=r[u],v=t,E=n,P=E;t:for(;P!==null;){switch(P.tag){case 27:if(er(P.type)){Je=P.stateNode,ti=!1;break t}break;case 5:Je=P.stateNode,ti=!1;break t;case 3:case 4:Je=P.stateNode.containerInfo,ti=!0;break t}P=P.return}if(Je===null)throw Error(s(160));l0(v,E,c),Je=null,ti=!1,v=c.alternate,v!==null&&(v.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)f0(n,t,a),n=n.sibling}var zi=null;function f0(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var v=r[c];v.ref.impl=v.nextImpl}Xn(n,t,a),Wn(t),u&4&&(ja(3,t,t.return),qo(3,t),ja(5,t,t.return));break;case 1:Xn(n,t,a),Wn(t),u&512&&(Be||r===null||wn(r,r.return)),u&64&&Sn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=zi,Xn(n,t,a),Wn(t),u&512&&(Be||r===null||wn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Sn)t.stateNode=j0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[ge]||r[pe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Cn(r,n,a),r[pe]=t,an(r),n=r;break t;case"link":if(c=v_("link","href",u).get(n+(a.href||""))){for(v=0;v<c.length;v++)if(r=c[v],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(v,1);break e}}r=u.createElement(n),Cn(r,n,a),u.head.appendChild(r);break;case"meta":if(c=v_("meta","content",u).get(n+(a.content||""))){for(v=0;v<c.length;v++)if(r=c[v],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(v,1);break e}}r=u.createElement(n),Cn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[pe]=t,an(r),n=r}t.stateNode=n}else Sn||rd(c,t.type,t.stateNode);else t.stateNode=__(c,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Be||n.parentNode.removeChild(n)):u.count--,a===null?Sn||rd(c,t.type,t.stateNode):__(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ch(t,t.memoizedProps,r.memoizedProps);break;case 27:Xn(n,t,a),Wn(t),u&512&&(Be||r===null||wn(r,r.return)),r!==null&&u&4&&ch(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=ta,ta=!1,Xn(n,t,a),ta=c,Wn(t),u&512&&(Be||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{as(n,""),De=!0}catch(at){Fe(t,t.return,at)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,ch(t,n,r!==null?r.memoizedProps:n)),u&1024&&(vh=!0);break;case 6:if(Xn(n,t,a),Wn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(at){Fe(t,t.return,at)}}break;case 3:if(De=!1,Fu=null,c=zi,zi=nl(n.containerInfo),Xn(n,t,a),zi=c,Wn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(at){Fe(t,t.return,at)}vh&&(vh=!1,h0(t)),De=!1;break;case 4:u=ta,ta=Sn,r=Up(),c=zi,zi=nl(t.stateNode.containerInfo),Xn(n,t,a),Wn(t),zi=c,De&&ko&&(Mu=!0),De=r,ta=u;break;case 12:Xn(n,t,a),Wn(t);break;case 31:Xn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 13:Xn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ru=Yt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 22:c=t.memoizedState!==null,v=r!==null&&r.memoizedState!==null;var E=Sn,P=Be,j=ta;Sn=E||c,ta=j||c,Be=P||v,Xn(n,t,a),Be=P,ta=j,Sn=E,Wn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||v||Sn||Be||(n=v||Be,a=Sn,r=Be,Sn=c||Sn,Be=n,Za(t,2),Sn=a,Be=r),!c&&ta||Sh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Tu(t,a))));break;case 19:Xn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 30:u&512&&(Be||r===null||wn(r,r.return)),u=Up(),c=ko,v=(a&335544064)===a,E=t.memoizedProps,ko=v&&fa(E.default,E.update)!=="none",Xn(n,t,a),Wn(t),v&&r!==null&&De&&(t.flags|=4),ko=c,De=u;break;case 21:break;case 7:u&512&&(Be||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Xn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Qg(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(lh(u)){var c=u.stateNode;r===null?r=[c]:r.push(c)}if(oh(u))break;u=u.return}var v=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,P=fh(t);vu(t,P,E,v);break;case 5:var j=a.stateNode;a.flags&32&&(as(j,""),a.flags&=-33);var at=fh(t);vu(t,at,j,v);break;case 3:case 4:var pt=a.stateNode.containerInfo,Y=fh(t);hh(t,Y,pt,v);break;default:throw Error(s(161))}}catch(tt){Fe(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function h0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;h0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hs=!0,n.reset(),Hs=!1),t=t.sibling}}function Es(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)d0(n,t),n=n.sibling;else i0(n)}function d0(t,n){var a=t.alternate;if(a===null)dh(t,!1);else switch(t.tag){case 3:if(yh=ea=!1,$g(),Es(n,t),!ea&&!Mu){if(t=Ji,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];t_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),yh=!0}Ji=null;break;case 5:Es(n,t);break;case 4:r=ea,ea=!1,Es(n,t),ea&&(Mu=!0),ea=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?dh(t,!1):Es(n,t));break;case 30:r=ea,u=$g(),ea=!1,Es(n,t),ea&&(t.flags|=4);var c=t.memoizedProps,v=t.stateNode;n=ca(c,v),v=ca(a.memoizedProps,v);var E=fa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,$n=0,n=_h(t,a,n,v,E,c,!0),$n!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ds(t,t.memoizedProps.onUpdate),Ji=u):u!==null&&(u.push.apply(u,Ji),Ji=u),ea=(t.flags&32)!==0?!0:r;break;default:Es(n,t)}}function na(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)r0(t,n.alternate,n),n=n.sibling}function Za(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),Za(a,r);break;case 1:wn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&jg(a,a.return,u),Za(a,r);break;case 27:(r&2)!==0&&h_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Yo(a),Za(a,r);break;case 6:Yo(a);break;case 26:wn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Be||u.parentNode.removeChild(u),Za(a,r);break;case 22:a.memoizedState===null&&Za(a,r);break;case 30:wn(a,a.return),Za(a,r);break;case 7:wn(a,a.return);default:Za(a,r)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,c=n,v=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Pi(u,c,a),qo(4,c);break;case 1:if(Pi(u,c,a),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Fe(r,r.return,at)}if(r=c,u=r.updateQueue,u!==null){var P=r.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)zm(j[u],P)}catch(at){Fe(r,r.return,at)}}E&&v&64&&kg(c),Ki(c,c.return);break;case 27:(a&2)!==0&&Kg(c);case 5:c.tag!==5&&c.tag!==27||Zg(c),Pi(u,c,a),E&&r===null&&v&4&&uh(c),Ki(c,c.return);break;case 6:Zg(c);break;case 26:P=c.stateNode,c.memoizedState!==null||P===null||Sn||rd(nl(P.ownerDocument),c.type,P),Pi(u,c,a),E&&r===null&&v&4&&uh(c),Ki(c,c.return);break;case 12:Pi(u,c,a);break;case 31:Pi(u,c,a),E&&v&4&&u0(u,c);break;case 13:Pi(u,c,a),E&&v&4&&c0(u,c);break;case 22:c.memoizedState===null&&Pi(u,c,a),Ki(c,c.return);break;case 30:Pi(u,c,a),Ki(c,c.return);break;case 7:Ki(c,c.return);default:Pi(u,c,a)}n=n.sibling}}function Mh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Uo(a))}function Eh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Uo(t))}function Ti(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)p0(t,n,a,r),n=n.sibling;else u&&n0(n)}function p0(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),c&2048&&qo(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),u&&yh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Uo(c)));break;case 12:if(c&2048){Ti(t,n,a,r),c=n.stateNode;try{var v=n.memoizedProps,E=v.id,P=v.onPostCommit;typeof P=="function"&&P(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){Fe(n,n.return,j)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:v=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&xu(E),v._visibility&2?Ti(t,n,a,r):jo(t,n)):(u&&E!==null&&E.memoizedState!==null&&xu(n),v._visibility&2?Ti(t,n,a,r):(v._visibility|=2,Ts(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Mh(E,n);break;case 24:Ti(t,n,a,r),c&2048&&Eh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&($i(c.child,!0),$i(n.child,!0))),Ti(t,n,a,r);break;default:Ti(t,n,a,r)}}function Ts(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,v=n,E=a,P=r,j=v.flags;switch(v.tag){case 0:case 11:case 15:Ts(c,v,E,P,u),qo(8,v);break;case 23:break;case 22:var at=v.stateNode;v.memoizedState!==null?at._visibility&2?Ts(c,v,E,P,u):jo(c,v):(at._visibility|=2,Ts(c,v,E,P,u)),u&&j&2048&&Mh(v.alternate,v);break;case 24:Ts(c,v,E,P,u),u&&j&2048&&Eh(v.alternate,v);break;default:Ts(c,v,E,P,u)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:jo(a,r),u&2048&&Mh(r.alternate,r);break;case 24:jo(a,r),u&2048&&Eh(r.alternate,r);break;default:jo(a,r)}n=n.sibling}}var Br=8192;function Ir(t,n,a){if(t.subtreeFlags&Br)for(t=t.child;t!==null;)m0(t,n,a),t=t.sibling}function m0(t,n,a){switch(t.tag){case 26:Ir(t,n,a),t.flags&Br&&(t.memoizedState!==null?BM(a,zi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&M_(a,t)));break;case 5:Ir(t,n,a),t.flags&Br&&(t=t.stateNode,(n&335544128)===n&&M_(a,t));break;case 3:case 4:var r=zi;zi=nl(t.stateNode.containerInfo),Ir(t,n,a),zi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Br,Br=16777216,Ir(t,n,a),Br=r):Ir(t,n,a));break;case 30:if((t.flags&Br)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ui===null&&(ui=new Map),ui.set(r,u)}Ir(t,n,a);break;default:Ir(t,n,a)}}function g0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,v0(r,t)}g0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_0(t),t=t.sibling}function _0(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bu(t)):Zo(t);break;default:Zo(t)}}function bu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,v0(r,t)}g0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),bu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bu(n));break;default:bu(n)}t=t.sibling}}function v0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=t;xn!==null;){r=xn;var u=r.sibling,c=r.return;if(o0(r),r===a){xn=null;break t}if(u!==null){u.return=c,xn=u;break t}xn=c}}}var Ux={getCacheForType:function(t){var n=bn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(ln).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,xe=null,Te=0,Ie=0,ci=null,Qa=!1,bs=!1,Th=!1,Sa=0,sn=0,Ka=0,Fr=0,Au=0,fi=0,As=0,Qo=null,ei=null,bh=!1,Ru=0,y0=0,wu=1/0,Cu=null,Ja=null,$e=0,Bi=null,Hr=null,ia=0,Ah=0,Rh=null,S0=null,Rs=null,ws=null,Cs=null,Ko=0,Du=null;function hi(){return(Ue&2)!==0&&Te!==0?Te&-Te:Mt.T!==null?Bh():re()}function x0(){if(fi===0)if((Te&536870912)===0||_e){var t=gi;gi<<=1,(gi&3932160)===0&&(gi=262144),fi=t}else fi=536870912;return t=An.current,t!==null&&(t.flags|=32),fi}function Ds(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=e_(ca(t.memoizedProps,a))),ws===null&&(ws=[]),ws.push(n.bind(null,r))}}function ni(t,n,a){(t===qe&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Ls(t,0),$a(t,Te,fi,!1)),Q(t,a),((Ue&2)===0||t!==qe)&&(t===qe&&((Ue&2)===0&&(Fr|=a),sn===4&&$a(t,Te,fi,!1)),aa(t))}function M0(t,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Wi(t,n),u=r?Px(t,n):Ch(t,n,!0),c=r;do{if(u===0){bs&&!r&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Ox(a)){u=Ch(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var E=t;u=Qo;var P=E.current.memoizedState.isDehydrated;if(P&&(Ls(E,v).flags|=256),v=Ch(E,v,!1),v!==2&&v!==6){if(Th&&!P){E.errorRecoveryDisabledLanes|=c,Fr|=c,u=4;break t}c=ei,ei=u,c!==null&&(ei===null?ei=c:ei.push.apply(ei,c))}u=v}if(c=!1,u!==2)continue}}if(u===1){Ls(t,0),$a(t,n,0,!0);break}t:{switch(r=t,c=u,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:$a(r,n,fi,!Qa);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ru+300-Yt(),10<u)){if($a(r,n,fi,!Qa),Ui(r,0,!0)!==0)break t;ia=n,r.timeoutHandle=jh(E0.bind(null,r,a,ei,Cu,bh,n,fi,Fr,As,Qa,c,"Throttled",-0,0),u);break t}E0(r,a,ei,Cu,bh,n,fi,Fr,As,Qa,c,null,-0,0)}}break}while(!0);aa(t)}function E0(t,n,a,r,u,c,v,E,P,j,at,pt,Y,tt){t.timeoutHandle=-1;var Ct=n.subtreeFlags,Wt=(c&335544064)===c;if(pt=null,(Wt||Ct&8192||(Ct&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},ui=null,m0(n,c,pt),Wt&&(Ct=pt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Ct.count++,Ct.waitingForViewTransition=!0,Ct=rl.bind(Ct),Wt.finished.then(Ct,Ct))),Ct=(c&62914560)===c?Ru-Yt():(c&4194048)===c?y0-Yt():0,Ct=IM(pt,Ct),Ct!==null)){ia=c,t.cancelPendingCommit=Ct(L0.bind(null,t,n,c,a,r,u,v,E,P,j,at,pt,null,Y,tt)),$a(t,c,v,!j);return}L0(t,n,c,a,r,u,v,E,P,j,at,pt)}function Ox(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],c=u.getSnapshot;u=u.value;try{if(!oi(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,r){n=xr(t,n),n&=~Au,n&=~Fr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var c=31-we(u),v=1<<c;r[c]=-1,u&=~v}a!==0&&$(t,a,n)}function Lu(){return(Ue&6)===0?(Jo(0),!1):!0}function wh(){if(xe!==null){if(Ie===0)var t=xe.return;else t=xe,pa=Rr=null,Pf(t),_s=null,zo=0,t=xe;for(;t!==null;)Yg(t.alternate,t),t=t.return;xe=null}}function Ls(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,aM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ia=0,wh(),qe=t,xe=a=ha(t.current,null),Te=n,Ie=0,ci=null,Qa=!1,bs=Wi(t,n),Th=!1,As=fi=Au=Fr=Ka=sn=0,ei=Qo=null,bh=!1,Sa=xr(t,n),Fl(),a}function T0(t,n){he=null,Mt.H=cu,n===gs||n===Ql?(n=Lm(),Ie=3):n===Ef?(n=Lm(),Ie=4):Ie=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,xe===null&&(sn=1,fu(t,Si(n,t.current)))}function b0(){var t=An.current;return t===null?!0:(Te&4194048)===Te?Pn===null:(Te&62914560)===Te||(Te&536870912)!==0?t===Pn:!1}function A0(){var t=Mt.H;return Mt.H=cu,t===null?cu:t}function R0(){var t=Mt.A;return Mt.A=Ux,t}function Uu(){sn=4,Qa||(Te&4194048)!==Te&&An.current!==null||(bs=!0),(Ka&134217727)===0&&(Fr&134217727)===0||qe===null||$a(qe,Te,fi,!1)}function Ch(t,n,a){var r=Ue;Ue|=2;var u=A0(),c=R0();(qe!==t||Te!==n)&&(Cu=null,Ls(t,n)),n=!1;var v=sn;t:do try{if(Ie!==0&&xe!==null){var E=xe,P=ci;switch(Ie){case 8:wh(),v=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var j=Ie;if(Ie=0,ci=null,Us(t,E,P,j),a&&bs){v=0;break t}break;default:j=Ie,Ie=0,ci=null,Us(t,E,P,j)}}zx(),v=sn;break}catch(at){T0(t,at)}while(!0);return n&&t.shellSuspendCounter++,pa=Rr=null,Ue=r,Mt.H=u,Mt.A=c,xe===null&&(qe=null,Te=0,Fl()),v}function zx(){for(;xe!==null;)w0(xe)}function Px(t,n){var a=Ue;Ue|=2;var r=A0(),u=R0();qe!==t||Te!==n?(Cu=null,wu=Yt()+500,Ls(t,n)):bs=Wi(t,n);t:do try{if(Ie!==0&&xe!==null){n=xe;var c=ci;e:switch(Ie){case 1:Ie=0,ci=null,Us(t,n,c,1);break;case 2:case 9:if(Cm(c)){Ie=0,ci=null,C0(n);break}n=function(){Ie!==2&&Ie!==9||qe!==t||(Ie=7),aa(t)},c.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Cm(c)?(Ie=0,ci=null,C0(n)):(Ie=0,ci=null,Us(t,n,c,7));break;case 5:var v=null;switch(xe.tag){case 26:v=xe.memoizedState;case 5:case 27:var E=xe;if(v?S_(v):E.stateNode.complete){Ie=0,ci=null;var P=E.sibling;if(P!==null)xe=P;else{var j=E.return;j!==null?(xe=j,Nu(j)):xe=null}break e}}Ie=0,ci=null,Us(t,n,c,5);break;case 6:Ie=0,ci=null,Us(t,n,c,6);break;case 8:wh(),sn=6;break t;default:throw Error(s(462))}}Bx();break}catch(at){T0(t,at)}while(!0);return pa=Rr=null,Mt.H=r,Mt.A=u,Ue=a,xe!==null?0:(qe=null,Te=0,Fl(),sn)}function Bx(){for(;xe!==null&&!ye();)w0(xe)}function w0(t){var n=Wg(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Nu(t):xe=n}function C0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Bg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=Bg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Pf(n);var r=n;r===yn&&(_e?(ql(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(ql(r),_e=!0));default:Yg(a,n),n=xe=vm(n,Sa),n=Wg(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Nu(t):xe=n}function Us(t,n,a,r){pa=Rr=null,Pf(n),_s=null,zo=0;var u=n.return;try{if(Tx(t,u,n,a,Te)){sn=1,fu(t,Si(a,t.current)),xe=null;return}}catch(c){if(u!==null)throw xe=u,c;sn=1,fu(t,Si(a,t.current)),xe=null;return}n.flags&32768?(_e||r===1?t=!0:bs||(Te&536870912)!==0?t=!1:(Qa=t=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),D0(n,t)):Nu(n)}function Nu(t){var n=t;do{if((n.flags&32768)!==0){D0(n,Qa);return}t=n.return;var a=wx(n.alternate,n,Sa);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);sn===0&&(sn=5)}function D0(t,n){do{var a=Cx(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);sn=6,xe=null}function L0(t,n,a,r,u,c,v,E,P,j,at,pt){t.cancelPendingCommit=null;do Ou();while($e!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===qe&&(xe=qe=null,Te=0),Hr=n,Bi=t,ia=a,Rh=u,S0=r,Ix(t,n,a,v,E,P,pt)}}function Ix(t,n,a,r,u,c,v){var E=n.lanes|n.childLanes;if(Ah=E,E|=cf,Z(t,a,E,r,u,c),ws=null,(a&335544064)===a?(Cs=hx(t),r=10262):(Cs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Wx(wt,function(){return Nh(),null})):(t.callbackNode=null,t.callbackPriority=0),yu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,u=q.p,q.p=2,c=Ue,Ue|=4;try{Dx(t,n,a)}finally{Ue=c,q.p=u,Mt.T=r}}$e=1,yu?Rs=cM(v,t.containerInfo,Cs,Dh,Lh,Hx,Uh,Nh,Fx):(Dh(),Lh(),Uh())}function Fx(t){if($e!==0){var n=Bi.onRecoverableError;n(t,{componentStack:null})}}function Hx(){$e===3&&($e=0,d0(Hr,Bi),$e=4)}function Dh(){if($e===1){$e=0;var t=Bi,n=Hr,a=ia,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var u=q.p;q.p=2;var c=Ue;Ue|=4;try{ko=Mu=!1,f0(n,t,a),a=qh;var v=lm(t.containerInfo),E=a.focusedElem,P=a.selectionRange;if(v!==E&&E&&E.ownerDocument&&om(E.ownerDocument.documentElement,E)){if(P!==null&&rf(E)){var j=P.start,at=P.end;if(at===void 0&&(at=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(at,E.value.length);else{var pt=E.ownerDocument||document,Y=pt&&pt.defaultView||window;if(Y.getSelection){var tt=Y.getSelection(),Ct=E.textContent.length,Wt=Math.min(P.start,Ct),de=P.end===void 0?Wt:Math.min(P.end,Ct);!tt.extend&&Wt>de&&(v=de,de=Wt,Wt=v);var k=sm(E,Wt),I=sm(E,de);if(k&&I&&(tt.rangeCount!==1||tt.anchorNode!==k.node||tt.anchorOffset!==k.offset||tt.focusNode!==I.node||tt.focusOffset!==I.offset)){var J=pt.createRange();J.setStart(k.node,k.offset),tt.removeAllRanges(),Wt>de?(tt.addRange(J),tt.extend(I.node,I.offset)):(J.setEnd(I.node,I.offset),tt.addRange(J))}}}}for(pt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var dt=pt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Hs=!!Wh,qh=Wh=null}finally{Ue=c,q.p=u,Mt.T=r}}t.current=n,$e=2}}function Lh(){if($e===2){$e=0;var t=Bi,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var r=q.p;q.p=2;var u=Ue;Ue|=4;try{r0(t,n.alternate,n)}finally{Ue=u,q.p=r,Mt.T=a}}$e=3}}function Uh(){if($e===4||$e===3){$e=0;var t=Rs;Rs=null,Oe();var n=Bi,a=Hr,r=ia,u=S0,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?$e=5:($e=0,Hr=Bi=null,U0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ja=null),Jt(r),a=a.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(je,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Mt.T,c=q.p,q.p=2,Mt.T=null;try{for(var v=n.onRecoverableError,E=0;E<u.length;E++){var P=u[E];v(P.value,{componentStack:P.stack})}}finally{Mt.T=a,q.p=c}}if(u=ws,v=Cs,Cs=null,u!==null&&(ws=null,v===null&&(v=[]),t!==null))for(P=0;P<u.length;P++)a=(0,u[P])(v),a!==void 0&&t.finished.finally(a);(ia&3)!==0&&Ou(),aa(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Du?Ko++:(Ko=0,Du=n):(Ko=0,Du=null),Jo(0)}}function U0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Uo(n)))}function Ou(){return Rs!==null&&(Rs.skipTransition(),Rs=null),Dh(),Lh(),Uh(),Nh()}function Nh(){if($e!==5)return!1;var t=Bi,n=Ah;Ah=0;var a=Jt(ia),r=Mt.T,u=q.p;try{q.p=32>a?32:a,Mt.T=null,a=Rh,Rh=null;var c=Bi,v=ia;if($e=0,Hr=Bi=null,ia=0,(Ue&6)!==0)throw Error(s(331));var E=Ue;if(Ue|=4,_0(c.current),p0(c,c.current,v,a),Ue=E,Jo(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(je,c)}catch{}return!0}finally{q.p=u,Mt.T=r,U0(t,n)}}function N0(t,n,a){n=Si(a,n),n=Qf(t.stateNode,n,2),t=Wa(t,n,2),t!==null&&(Q(t,2),aa(t))}function Fe(t,n,a){if(t.tag===3)N0(t,t,a);else for(;n!==null;){if(n.tag===3){N0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))){t=Si(a,t),a=Cg(2),r=Wa(n,a,2),r!==null&&(Dg(a,r,n,t),Q(r,2),aa(r));break}}n=n.return}}function Oh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Nx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Th=!0,u.add(a),t=Gx.bind(null,t,n,a),n.then(t,t))}function Gx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Te&a)===a&&((sn===4||sn===3&&(Te&62914560)===Te&&300>Yt()-Ru)&&(Ue&2)===0?Ls(t,0):Au|=a,As===Te&&(As=0)),aa(t)}function O0(t,n){n===0&&(n=T()),t=Tr(t,n),t!==null&&(Q(t,n),aa(t))}function Vx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),O0(t,a)}function Xx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),O0(t,a)}function Wx(t,n){return ut(t,n)}var Ns=null,Os=null,zh=!1,zu=!1,Ph=!1,tr=0;function aa(t){t!==Os&&t.next===null&&(Os===null?Ns=Os=t:Os=Os.next=t),zu=!0,zh||(zh=!0,Yx())}function Jo(t,n){if(!Ph&&zu){Ph=!0;do for(var a=!1,r=Ns;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var v=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-we(42|t)+1)-1,c&=u&~(v&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,I0(r,c))}else c=Te,c=Ui(r,r===qe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Wi(r,c)||(a=!0,I0(r,c));r=r.next}while(a);Ph=!1}}function qx(){z0()}function z0(){zu=zh=!1;var t=0;tr!==0&&iM()&&(t=tr);for(var n=Yt(),a=null,r=Ns;r!==null;){var u=r.next,c=P0(r,n);c===0?(r.next=null,a===null?Ns=u:a.next=u,u===null&&(Os=a)):(a=r,(t!==0||(c&3)!==0)&&(zu=!0)),r=u}$e!==0&&$e!==5||Jo(t),tr!==0&&(tr=0)}function P0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var v=31-we(c),E=1<<v,P=u[v];P===-1?((E&a)===0||(E&r)!==0)&&(u[v]=zt(E,n)):P<=n&&(t.expiredLanes|=E),c&=~E}if(n=qe,a=Te,a=Ui(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&oe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Wi(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&oe(r),Jt(a)){case 2:case 8:a=Nt;break;case 32:a=wt;break;case 268435456:a=ne;break;default:a=wt}return r=B0.bind(null,t),a=ut(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&oe(r),t.callbackPriority=2,t.callbackNode=null,2}function B0(t,n){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ou()&&t.callbackNode!==a)return null;var r=Te;return r=Ui(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(M0(t,r,n),P0(t,Yt()),t.callbackNode!=null&&t.callbackNode===a?B0.bind(null,t):null)}function I0(t,n){if(Ou())return null;M0(t,n,!0)}function Yx(){rM(function(){(Ue&6)!==0?ut(V,qx):z0()})}function Bh(){if(tr===0){var t=Dr;t===0&&(t=Zn,Zn<<=1,(Zn&261888)===0&&(Zn=256)),tr=t}return tr}function F0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ll(t)}function kx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var c=F0((u[Le]||null).action),v=r.submitter;v&&(n=(n=v[Le]||null)?F0(n.formAction):v.getAttribute("formAction"),n!==null&&(c=n,v=null));var E=new zl("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(tr!==0){var P=new FormData(u,v);qf(a,{pending:!0,data:P,method:u.method,action:c},null,P)}}else typeof c=="function"&&(E.preventDefault(),P=new FormData(u,v),qf(a,{pending:!0,data:P,method:u.method,action:c},c,P))},currentTarget:u}]})}}for(var Ih=0;Ih<uf.length;Ih++){var Fh=uf[Ih],jx=Fh.toLowerCase(),Zx=Fh[0].toUpperCase()+Fh.slice(1);Ni(jx,"on"+Zx)}Ni(fm,"onAnimationEnd"),Ni(hm,"onAnimationIteration"),Ni(dm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(ax,"onTransitionRun"),Ni(rx,"onTransitionStart"),Ni(sx,"onTransitionCancel"),Ni(pm,"onTransitionEnd"),ns("onMouseEnter",["mouseout","mouseover"]),ns("onMouseLeave",["mouseout","mouseover"]),ns("onPointerEnter",["pointerout","pointerover"]),ns("onPointerLeave",["pointerout","pointerover"]),ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ki("onBeforeInput",["compositionend","keypress","textInput","paste"]),ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function H0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var v=r.length-1;0<=v;v--){var E=r[v],P=E.instance,j=E.currentTarget;if(E=E.listener,P!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=j;try{c(u)}catch(at){Il(at)}u.currentTarget=null,c=P}else for(v=0;v<r.length;v++){if(E=r[v],P=E.instance,j=E.currentTarget,E=E.listener,P!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=j;try{c(u)}catch(at){Il(at)}u.currentTarget=null,c=P}}}}function Me(t,n){var a=n[Qn];a===void 0&&(a=n[Qn]=new Set);var r=t+"__bubble";a.has(r)||(G0(n,t,2,!1),a.add(r))}function Hh(t,n,a){var r=0;n&&(r|=4),G0(a,t,r,n)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Gh(t){if(!t[Pu]){t[Pu]=!0,es.forEach(function(a){a!=="selectionchange"&&(Qx.has(a)||Hh(a,!1,t),Hh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pu]||(n[Pu]=!0,Hh("selectionchange",!1,n))}}function G0(t,n,a,r){switch(D_(n)){case 2:var u=VM;break;case 8:u=XM;break;default:u=od}a=u.bind(null,n,a,t),u=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Vh(t,n,a,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var E=r.stateNode.containerInfo;if(E===u)break;if(v===4)for(v=r.return;v!==null;){var P=v.tag;if((P===3||P===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;E!==null;){if(v=zn(E),v===null)return;if(P=v.tag,P===5||P===6||P===26||P===27){r=c=v;continue t}E=E.parentNode}}r=r.return}Gp(function(){var j=c,at=Yc(a),pt=[];t:{var Y=mm.get(t);if(Y!==void 0){var tt=zl,Ct=t;switch(t){case"keypress":if(Nl(a)===0)break t;case"keydown":case"keyup":tt=OS;break;case"focusin":Ct="focus",tt=Jc;break;case"focusout":Ct="blur",tt=Jc;break;case"beforeblur":case"afterblur":tt=Jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=MS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=FS;break;case fm:case hm:case dm:tt=bS;break;case pm:tt=GS;break;case"scroll":case"scrollend":tt=SS;break;case"wheel":tt=XS;break;case"copy":case"cut":case"paste":tt=RS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Yp;break;case"submit":tt=BS;break;case"toggle":case"beforetoggle":tt=qS}var Wt=(n&4)!==0,de=!Wt&&(t==="scroll"||t==="scrollend"),k=Wt?Y!==null?Y+"Capture":null:Y;Wt=[];for(var I=j,J;I!==null;){var dt=I;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||k===null||(dt=xo(I,k),dt!=null&&Wt.push(tl(I,dt,J))),de)break;I=I.return}0<Wt.length&&(Y=new tt(Y,Ct,null,a,at),pt.push({event:Y,listeners:Wt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",tt&&a!==qc&&(Ct=a.relatedTarget||a.fromElement)&&(zn(Ct)||Ct[We]))break t;(Y||tt)&&(Ct=at.window===at?at:(tt=at.ownerDocument)?tt.defaultView||tt.parentWindow:window,Y?(tt=a.relatedTarget||a.toElement,Y=j,tt=tt?zn(tt):null,tt!==null&&(de=f(tt),Wt=tt.tag,tt!==de||Wt!==5&&Wt!==27&&Wt!==6)&&(tt=null)):(Y=null,tt=j),Y!==tt&&(Wt=Wp,dt="onMouseLeave",k="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=Yp,dt="onPointerLeave",k="onPointerEnter",I="pointer"),de=Y==null?Ct:nn(Y),J=tt==null?Ct:nn(tt),Ct=new Wt(dt,I+"leave",Y,a,at),Ct.target=de,Ct.relatedTarget=J,dt=null,zn(at)===j&&(Wt=new Wt(k,I+"enter",tt,a,at),Wt.target=J,Wt.relatedTarget=de,dt=Wt),de=dt,Wt=Y&&tt?B(Y,tt,Kx):null,Y!==null&&V0(pt,Ct,Y,Wt,!1),tt!==null&&de!==null&&V0(pt,de,tt,Wt,!0)))}t:{if(Y=j?nn(j):window,tt=Y.nodeName&&Y.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Y.type==="file")var Gt=tm;else if(Jp(Y))if(em)Gt=ex;else{Gt=$S;var be=JS}else tt=Y.nodeName,!tt||tt.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?j&&Wc(j.elementType)&&(Gt=tm):Gt=tx;if(Gt&&(Gt=Gt(t,j))){$p(pt,Gt,a,at);break t}be&&be(t,Y,j)}switch(be=j?nn(j):window,t){case"focusin":(Jp(be)||be.contentEditable==="true")&&(ls=be,sf=j,Co=null);break;case"focusout":Co=sf=ls=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,um(pt,a,at);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":um(pt,a,at)}var Qt;if(tf)t:{switch(t){case"compositionstart":var le="onCompositionStart";break t;case"compositionend":le="onCompositionEnd";break t;case"compositionupdate":le="onCompositionUpdate";break t}le=void 0}else os?Qp(t,a)&&(le="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(kp&&a.locale!=="ko"&&(os||le!=="onCompositionStart"?le==="onCompositionEnd"&&os&&(Qt=Vp()):(za=at,Zc="value"in za?za.value:za.textContent,os=!0)),be=Bu(j,le),0<be.length&&(le=new qp(le,t,null,a,at),pt.push({event:le,listeners:be}),Qt?le.data=Qt:(Qt=Kp(a),Qt!==null&&(le.data=Qt)))),(Qt=kS?jS(t,a):ZS(t,a))&&(le=Bu(j,"onBeforeInput"),0<le.length&&(be=new qp("onBeforeInput","beforeinput",null,a,at),pt.push({event:be,listeners:le}),be.data=Qt)),kx(pt,t,j,a,at)}H0(pt,n)})}function tl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=xo(t,a),u!=null&&r.unshift(tl(t,u,c)),u=xo(t,n),u!=null&&r.push(tl(t,u,c))),t.tag===3)return r;t=t.return}return[]}function Kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function V0(t,n,a,r,u){for(var c=n._reactName,v=[];a!==null&&a!==r;){var E=a,P=E.alternate,j=E.stateNode;if(E=E.tag,P!==null&&P===r)break;E!==5&&E!==26&&E!==27||j===null||(P=j,u?(j=xo(a,c),j!=null&&v.unshift(tl(a,j,P))):u||(j=xo(a,c),j!=null&&v.push(tl(a,j,P)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function X0(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace($x,"")}function W0(t,n){return n=X0(n),X0(t)===n}function He(t,n,a,r,u,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||as(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&as(t,""+r);else return;break;case"className":Dl(t,"class",r);break;case"tabIndex":Dl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(t,a,r);break;case"style":Fp(t,r,c);return;case"data":if(n!=="object"){Dl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ll(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",u.name,u,null),He(t,n,"formEncType",u.formEncType,u,null),He(t,n,"formMethod",u.formMethod,u,null),He(t,n,"formTarget",u.formTarget,u,null)):(He(t,n,"encType",u.encType,u,null),He(t,n,"method",u.method,u,null),He(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ll(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ji);return;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ll(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Me("beforetoggle",t),Me("toggle",t),Cl(t,"popover",r);break;case"xlinkActuate":la(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":la(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":la(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":la(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":la(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":la(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":la(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":la(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":la(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Cl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=vS.get(a)||a,Cl(t,a,r);else return}De=!0}function Xh(t,n,a,r,u,c){switch(a){case"style":Fp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")as(t,r);else if(typeof r=="number"||typeof r=="bigint")as(t,""+r);else return;break;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"onClick":r!=null&&(t.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!wl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Le]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,u);break t}De=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Cl(t,a,r)}return}De=!0}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var r=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var v=a[c];if(v!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,c,v,a,null)}}u&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var E=c=v=u=null,P=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var at=a[r];if(at!=null)switch(r){case"name":u=at;break;case"type":v=at;break;case"checked":P=at;break;case"defaultChecked":j=at;break;case"value":c=at;break;case"defaultValue":E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:He(t,n,r,at,a,null)}}zp(t,c,E,P,j,v,u,!1);return;case"select":Me("invalid",t),r=v=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":v=E;break;case"multiple":r=E;default:He(t,n,u,E,a,null)}n=c,a=v,t.multiple=!!r,n!=null?is(t,!!r,n,!1):a!=null&&is(t,!!r,a,!0);return;case"textarea":Me("invalid",t),c=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":r=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(t,n,v,E,a,null)}Bp(t,r,u,c);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:He(t,n,P,r,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(r=0;r<$o.length;r++)Me($o[r],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,j,r,a,null)}return;default:if(Wc(n)){for(at in a)a.hasOwnProperty(at)&&(r=a[at],r!==void 0&&Xh(t,n,at,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&He(t,n,E,r,a,null))}var tM={};function eM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,v=null,E=null,P=null,j=null,at=null;for(tt in a){var pt=a[tt];if(a.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":P=pt;default:r.hasOwnProperty(tt)||He(t,n,tt,null,r,pt)}}for(var Y in r){var tt=r[Y];if(pt=a[Y],r.hasOwnProperty(Y)&&(tt!=null||pt!=null))switch(Y){case"type":tt!==pt&&(De=!0),c=tt;break;case"name":tt!==pt&&(De=!0),u=tt;break;case"checked":tt!==pt&&(De=!0),j=tt;break;case"defaultChecked":tt!==pt&&(De=!0),at=tt;break;case"value":tt!==pt&&(De=!0),v=tt;break;case"defaultValue":tt!==pt&&(De=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==pt&&He(t,n,Y,tt,r,pt)}}Vc(t,v,E,P,j,at,c,u);return;case"select":tt=v=E=Y=null;for(c in a)if(P=a[c],a.hasOwnProperty(c)&&P!=null)switch(c){case"value":break;case"multiple":tt=P;default:r.hasOwnProperty(c)||He(t,n,c,null,r,P)}for(u in r)if(c=r[u],P=a[u],r.hasOwnProperty(u)&&(c!=null||P!=null))switch(u){case"value":c!==P&&(De=!0),Y=c;break;case"defaultValue":c!==P&&(De=!0),E=c;break;case"multiple":c!==P&&(De=!0),v=c;default:c!==P&&He(t,n,u,c,r,P)}n=E,a=v,r=tt,Y!=null?is(t,!!a,Y,!1):!!r!=!!a&&(n!=null?is(t,!!a,n,!0):is(t,!!a,a?[]:"",!1));return;case"textarea":tt=Y=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,r,u)}for(v in r)if(u=r[v],c=a[v],r.hasOwnProperty(v)&&(u!=null||c!=null))switch(v){case"value":u!==c&&(De=!0),Y=u;break;case"defaultValue":u!==c&&(De=!0),tt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==c&&He(t,n,v,u,r,c)}Pp(t,Y,tt);return;case"option":for(var Ct in a)if(Y=a[Ct],a.hasOwnProperty(Ct)&&Y!=null&&!r.hasOwnProperty(Ct))switch(Ct){case"selected":t.selected=!1;break;default:He(t,n,Ct,null,r,Y)}for(P in r)if(Y=r[P],tt=a[P],r.hasOwnProperty(P)&&Y!==tt&&(Y!=null||tt!=null))switch(P){case"selected":Y!==tt&&(De=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:He(t,n,P,Y,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)Y=a[Wt],a.hasOwnProperty(Wt)&&Y!=null&&!r.hasOwnProperty(Wt)&&He(t,n,Wt,null,r,Y);for(j in r)if(Y=r[j],tt=a[j],r.hasOwnProperty(j)&&Y!==tt&&(Y!=null||tt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:He(t,n,j,Y,r,tt)}return;default:if(Wc(n)){for(var de in a)Y=a[de],a.hasOwnProperty(de)&&Y!==void 0&&!r.hasOwnProperty(de)&&Xh(t,n,de,void 0,r,Y);for(at in r)Y=r[at],tt=a[at],!r.hasOwnProperty(at)||Y===tt||Y===void 0&&tt===void 0||Xh(t,n,at,Y,r,tt);return}}for(var k in a)Y=a[k],a.hasOwnProperty(k)&&Y!=null&&!r.hasOwnProperty(k)&&He(t,n,k,null,r,Y);for(pt in r)Y=r[pt],tt=a[pt],!r.hasOwnProperty(pt)||Y===tt||Y==null&&tt==null||He(t,n,pt,Y,r,tt)}function q0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],c=u.transferSize,v=u.initiatorType,E=u.duration;if(c&&E&&q0(v)){for(v=0,E=u.responseEnd,r+=1;r<a.length;r++){var P=a[r],j=P.startTime;if(j>E)break;var at=P.transferSize,pt=P.initiatorType;at&&q0(pt)&&(P=P.responseEnd,v+=at*(P<E?1:(E-j)/(P-j)))}if(--r,n+=8*(c+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wh=null,qh=null;function el(t){return t.nodeType===9?t:t.ownerDocument}function Y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function j0(t,n,a,r){return a=el(a).createElement(t),a[pe]=r,a[Le]=n,Cn(a,t,n),an(a),a}function Yh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kh=null;function iM(){var t=window.event;return t&&t.type==="popstate"?t===kh?!1:(kh=t,!0):(kh=null,!1)}var jh=typeof setTimeout=="function"?setTimeout:void 0,aM=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,Q0=typeof requestAnimationFrame=="function"?requestAnimationFrame:jh,rM=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(t){return Z0.resolve(null).then(t).catch(sM)}:jh;function sM(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function K0(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Gs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")nd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,nd(a);for(var c=a.firstChild;c;){var v=c.nextSibling,E=c.nodeName;c[ge]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=v}}else a==="body"&&nd(t.ownerDocument.body);a=u}while(a);Gs(n)}function J0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function $0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function t_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function oM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Zh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return oM(n,a,t)}function lM(t){return t.documentElement.clientHeight}function uM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function cM(t,n,a,r,u,c,v,E,P){var j=n.nodeType===9?n:n.ownerDocument;try{var at=j.startViewTransition({update:function(){var Y=j.defaultView,tt=Y.navigation&&Y.navigation.transition,Ct=j.fonts.status;r();var Wt=[];if(Ct==="loaded"&&(lM(j),j.fonts.status==="loading"&&Wt.push(j.fonts.ready)),Ct=Wt.length,t!==null)for(var de=t.suspenseyImages,k=0,I=0;I<de.length;I++){var J=de[I];if(!J.complete){var dt=J.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<Y.innerHeight&&dt.left<Y.innerWidth){if(k+=x_(J),k>Hu){Wt.length=Ct;break}J=new Promise(uM.bind(J)),Wt.push(J)}}}if(0<Wt.length)return Y=Promise.race([Promise.all(Wt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(u,u),(tt?Promise.allSettled([tt.finished,Y]):Y).then(c,c);if(u(),tt)return tt.finished.then(c,c);c()},types:a});j.__reactViewTransition=at;var pt=[];return at.ready.then(function(){for(var Y=j.documentElement.getAnimations({subtree:!0}),tt=0;tt<Y.length;tt++){var Ct=Y[tt],Wt=Ct.effect,de=Wt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){pt.push(Ct),Ct=Wt.getKeyframes();for(var k=de=void 0,I=!0,J=0;J<Ct.length;J++){var dt=Ct[J],Gt=dt.width;if(de===void 0)de=Gt;else if(de!==Gt){I=!1;break}if(Gt=dt.height,k===void 0)k=Gt;else if(k!==Gt){I=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}I&&de!==void 0&&k!==void 0&&(Wt.setKeyframes(Ct),I=getComputedStyle(Wt.target,Wt.pseudoElement),I.width!==de||I.height!==k)&&(I=Ct[0],I.width=de,I.height=k,I=Ct[Ct.length-1],I.width=de,I.height=k,Wt.setKeyframes(Ct))}}v()},function(Y){j.__reactViewTransition===at&&(j.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&P(Y)}finally{r(),u(),v()}}),at.finished.finally(function(){for(var Y=0;Y<pt.length;Y++)pt[Y].cancel();j.__reactViewTransition===at&&(j.__reactViewTransition=null),E()}),at}catch{return r(),u(),v(),null}}function Gr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[u])}return r},Gr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function e_(t){return{name:t,group:new Gr("group",t),imagePair:new Gr("image-pair",t),old:new Gr("old",t),new:new Gr("new",t)}}function di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(i_(c,t,n,a)===-1){var v=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(P){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),r!==null&&(u=v.removeEventListener.bind(v,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=zs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),m(this._fragmentFiber.child,!1,fM,t,E,r)}this._eventListeners=c}};function fM(t,n,a,r){return x(t).addEventListener(n,a,r),!1}di.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=i_(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var c=u.cleanup;u=zs(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,hM,t,a,u),r.splice(n,1),c!==null&&c()}};function hM(t,n,a,r){return x(t).removeEventListener(n,a,r),!1}function zs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function n_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function i_(t,n,a,r){if(t.length===0)return-1;r=n_(r);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&n_(c.optionsOrUseCapture)===r)return u}return-1}di.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];r.addEventListener(c.type,c.attachedListener,zs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],r.removeEventListener(c.type,c.attachedListener,zs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},di.prototype.focus=function(t){m(this._fragmentFiber.child,!0,a_,t,void 0,void 0)};function a_(t,n){return t.tag===6?!1:(t=x(t),TM(t,n))}di.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Qh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!a_(n[a],t);a--);};function Qh(t,n){return n.push(t),!1}di.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=x(t),t=el(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,dM,t,void 0,void 0))};function dM(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,pM,t,void 0,void 0)};function pM(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,mM,t,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var r=Ii[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ii[n++]=r}Ii.length=n}};function mM(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var Ii=[],Kh=!1;function gM(t,n,a){Ii.push({fragmentInstance:t,observer:n,instance:a}),Kh||(Kh=!0,bM(function(){Kh=!1;var r=Ii;Ii=[];for(var u=0;u<r.length;u++){var c=r[u];c.observer.unobserve(c.instance)}}))}di.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,_M,t,void 0,void 0),t};function _M(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}di.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},di.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Qh,a,void 0,void 0);var r=x(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),u=x(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),P=v&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&v&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&u===t||P||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vM(t,n,a,r,u){var c=zn(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=y(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=B(a,c,X),n===null?n=!1:(m(n,!0,C,c,a),c=S,S=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=B(r,c,X),n===null?n=!1:(m(n,!0,N,c,r),c=S,z=S=null,n=c!==null)),n):!1}function r_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Qh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=A(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=x(r),r_(t,a);return}if(r=x(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=x(u),r_(u,a)):x(u).scrollIntoView(t),r+=a?-1:1}};function yM(t,n){return t=x(t),s_(t,n),!1}function s_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function o_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,zs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var v=0,E=0;E<Ii.length;E++){var P=Ii[E];(P.fragmentInstance!==n||P.observer!==c||P.instance!==t)&&(Ii[v++]=P)}Ii.length=v,c.observe(t)}),s_(t,n))}function SM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,zs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?gM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Jh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jh(a),qi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ge])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function MM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function l_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function $h(t){return t.data==="$?"||t.data==="$~"}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function EM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ed=null;function u_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function c_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function TM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function bM(t){Q0(function(){Q0(function(n){return t(n)})})}function f_(t,n,a){switch(n=el(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function h_(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&He(t,n,r,null,tM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ji&&(t.onclick=null),qi(t)}function nd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qi(t)}var Ai=new Map,d_=new Set;function nl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var xa=q.d;q.d={f:AM,r:RM,D:wM,C:CM,L:DM,m:LM,X:NM,S:UM,M:OM};function AM(){var t=xa.f(),n=Lu();return t||n}function RM(t){var n=Yi(t);n!==null&&n.tag===5&&n.type==="form"?mg(n):xa.r(t)}var Ps=typeof document>"u"?null:document;function p_(t,n,a){var r=Ps;if(r&&typeof n=="string"&&n){var u=vi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),d_.has(u)||(d_.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),an(n),r.head.appendChild(n)))}}function wM(t){xa.D(t),p_("dns-prefetch",t,null)}function CM(t,n){xa.C(t,n),p_("preconnect",t,n)}function DM(t,n,a){xa.L(t,n,a);var r=Ps;if(r&&t&&n){var u='link[rel="preload"][as="'+vi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vi(a.imageSizes)+'"]')):u+='[href="'+vi(t)+'"]';var c=u;switch(n){case"style":c=Bs(t);break;case"script":c=Is(t)}if(!(Ai.has(c)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ai.set(c,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(il(c))||n==="script"&&r.querySelector(al(c))))){var v=r.createElement("link");Cn(v,"link",t),n==="style"&&(v[mn]=!0,v.onload=v.onerror=function(){Hn(v)}),an(v),r.head.appendChild(v)}}}function LM(t,n){xa.m(t,n);var a=Ps;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vi(r)+'"][href="'+vi(t)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Is(t)}if(!Ai.has(c)&&(t=O({rel:"modulepreload",href:t},n),Ai.set(c,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(c)))return}r=a.createElement("link"),Cn(r,"link",t),an(r),a.head.appendChild(r)}}}function UM(t,n,a){xa.S(t,n,a);var r=Ps;if(r&&t){var u=Kn(r).hoistableStyles,c=Bs(t);n=n||"default";var v=u.get(c);if(!v){var E={loading:0,preload:null};if(v=r.querySelector(il(c)))E.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ai.get(c))&&id(t,a);var P=v=r.createElement("link");an(P),Cn(P,"link",t),P._p=new Promise(function(j,at){P.onload=j,P.onerror=at}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Iu(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:E},u.set(c,v)}}}function NM(t,n){xa.X(t,n);var a=Ps;if(a&&t){var r=Kn(a).hoistableScripts,u=Is(t),c=r.get(u);c||(c=a.querySelector(al(u)),c||(t=O({src:t,async:!0},n),(n=Ai.get(u))&&ad(t,n),c=a.createElement("script"),an(c),Cn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function OM(t,n){xa.M(t,n);var a=Ps;if(a&&t){var r=Kn(a).hoistableScripts,u=Is(t),c=r.get(u);c||(c=a.querySelector(al(u)),c||(t=O({src:t,async:!0,type:"module"},n),(n=Ai.get(u))&&ad(t,n),c=a.createElement("script"),an(c),Cn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function m_(t,n,a,r){var u=(u=ot.current)?nl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Bs(a.href),n=Kn(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Bs(a.href);var c=Kn(u).hoistableStyles,v=c.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,v),(c=u.querySelector(il(t)))?c._p||(v.instance=c,v.state.loading=5):(c=Ai.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(t,c)),zM(u,t,c,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Is(a),n=Kn(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Bs(t){return'href="'+vi(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function g_(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function zM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[mn]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[mn]=!0,n.onload=n.onerror=Hn.bind(null,n),Cn(n,"link",a),an(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Is(t){return'[src="'+vi(t)+'"]'}function al(t){return"script[async]"+t}function __(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+vi(a.href)+'"]');if(r)return n.instance=r,an(r),r;var u=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),an(r),Cn(r,"style",u),Iu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Bs(a.href);var c=t.querySelector(il(u));if(c)return n.state.loading|=4,n.instance=c,an(c),c;r=g_(a),(u=Ai.get(u))&&id(r,u),c=(t.ownerDocument||t).createElement("link"),an(c);var v=c;return v._p=new Promise(function(E,P){v.onload=E,v.onerror=P}),Cn(c,"link",r),n.state.loading|=4,Iu(c,a.precedence,t),n.instance=c;case"script":return c=Is(a.src),(u=t.querySelector(al(c)))?(n.instance=u,an(u),u):(r=a,(u=Ai.get(c))&&(r=O({},a),ad(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),an(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Iu(r,a.precedence,t));return n.instance}function Iu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,v=0;v<r.length;v++){var E=r[v];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fu=null;function v_(t,n,a){if(Fu===null){var r=new Map,u=Fu=new Map;u.set(a,r)}else u=Fu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[ge]||c[pe]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var v=c.getAttribute(n)||"";v=t+v;var E=r.get(v);E?E.push(c):r.set(v,[c])}}return r}function rd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function PM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function y_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function S_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function x_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function M_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=x_(n),t.suspenseyImages.push(n)),t=FM.bind(t),n.decode().then(t,t))}function BM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Bs(r.href),c=n.querySelector(il(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=rl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,an(c);return}c=n.ownerDocument||n,r=g_(r),(u=Ai.get(u))&&id(r,u),c=c.createElement("link"),an(c);var v=c;v._p=new Promise(function(E,P){v.onload=E,v.onerror=P}),Cn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=rl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hu=0;function IM(t,n){return t.stylesheets&&t.count===0&&Vu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Hu===0&&(Hu=62500*nM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Hu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function E_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Vu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function rl(){this.count--,E_(this)}function FM(){this.imgCount--,E_(this)}var Gu=null;function Vu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gu=new Map,n.forEach(HM,t),Gu=null,rl.call(t))}function HM(t,n){if(!(n.state.loading&4)){var a=Gu.get(t);if(a)var r=a.get(null);else{a=new Map,Gu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var v=u[c];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),c=a.get(v)||r,c===r&&a.set(null,u),a.set(v,u),this.count++,r=rl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fs={$$typeof:et,Provider:null,Consumer:null,_currentValue:Ne,_currentValue2:Ne,_threadCount:0};function GM(t,n,a,r,u,c,v,E,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=F(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=F(0),this.hiddenUpdates=F(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function T_(t,n,a,r,u,c,v,E,P,j,at,pt){return t=new GM(t,n,a,v,P,j,at,pt,E),n=1,c===!0&&(n|=24),c=Jn(3,null,null,n),t.current=c,c.stateNode=t,n=Sf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},Tf(c),t}function b_(t){return t?(t=fs,t):fs}function A_(t,n,a,r,u,c){u=b_(u),r.context===null?r.context=u:r.pendingContext=u,r=Xa(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Wa(t,r,n),a!==null&&(ni(a,t,n),Po(a,t,n))}function R_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sd(t,n){R_(t,n),(t=t.alternate)&&R_(t,n)}function w_(t){if(t.tag===13||t.tag===31){var n=Tr(t,67108864);n!==null&&ni(n,t,67108864),sd(t,67108864)}}function C_(t){if(t.tag===13||t.tag===31){var n=hi();n=Vt(n);var a=Tr(t,n);a!==null&&ni(a,t,n),sd(t,n)}}var Hs=!0;function VM(t,n,a,r){var u=Mt.T;Mt.T=null;var c=q.p;try{q.p=2,od(t,n,a,r)}finally{q.p=c,Mt.T=u}}function XM(t,n,a,r){var u=Mt.T;Mt.T=null;var c=q.p;try{q.p=8,od(t,n,a,r)}finally{q.p=c,Mt.T=u}}function od(t,n,a,r){if(Hs){var u=ld(r);if(u===null)Vh(t,n,r,Xu,a),L_(t,r);else if(qM(u,t,n,a,r))r.stopPropagation();else if(L_(t,r),n&4&&-1<WM.indexOf(t)){for(;u!==null;){var c=Yi(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var v=ri(c.pendingLanes);if(v!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var P=1<<31-we(v);E.entanglements[1]|=P,v&=~P}aa(c),(Ue&6)===0&&(wu=Yt()+500,Jo(0))}}break;case 31:case 13:E=Tr(c,2),E!==null&&ni(E,c,2),Lu(),sd(c,2)}if(c=ld(r),c===null&&Vh(t,n,r,Xu,a),c===u)break;u=c}u!==null&&r.stopPropagation()}else Vh(t,n,r,null,a)}}function ld(t){return t=Yc(t),ud(t)}var Xu=null;function ud(t){if(Xu=null,t=zn(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xu=t,null}function D_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case V:return 2;case Nt:return 8;case wt:case Kt:return 32;case ne:return 268435456;default:return 32}default:return 32}}var cd=!1,nr=null,ir=null,ar=null,sl=new Map,ol=new Map,rr=[],WM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(t,n){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(n.pointerId)}}function ll(t,n,a,r,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=Yi(n),n!==null&&w_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function qM(t,n,a,r,u){switch(n){case"focusin":return nr=ll(nr,t,n,a,r,u),!0;case"dragenter":return ir=ll(ir,t,n,a,r,u),!0;case"mouseover":return ar=ll(ar,t,n,a,r,u),!0;case"pointerover":var c=u.pointerId;return sl.set(c,ll(sl.get(c)||null,t,n,a,r,u)),!0;case"gotpointercapture":return c=u.pointerId,ol.set(c,ll(ol.get(c)||null,t,n,a,r,u)),!0}return!1}function U_(t){var n=zn(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ie(t.priority,function(){C_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ie(t.priority,function(){C_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);qc=r,a.target.dispatchEvent(r),qc=null}else return n=Yi(a),n!==null&&w_(n),t.blockedOn=a,!1;n.shift()}return!0}function N_(t,n,a){Wu(t)&&a.delete(n)}function YM(){cd=!1,nr!==null&&Wu(nr)&&(nr=null),ir!==null&&Wu(ir)&&(ir=null),ar!==null&&Wu(ar)&&(ar=null),sl.forEach(N_),ol.forEach(N_)}function qu(t,n){t.blockedOn===n&&(t.blockedOn=null,cd||(cd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,YM)))}var Yu=null;function O_(t){Yu!==t&&(Yu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yu===t&&(Yu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(ud(r||a)===null)continue;break}var c=Yi(a);c!==null&&(t.splice(n,3),n-=3,qf(c,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Gs(t){function n(P){return qu(P,t)}nr!==null&&qu(nr,t),ir!==null&&qu(ir,t),ar!==null&&qu(ar,t),sl.forEach(n),ol.forEach(n);for(var a=0;a<rr.length;a++){var r=rr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)U_(a),a.blockedOn===null&&rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],c=a[r+1],v=u[Le]||null;if(typeof c=="function")v||O_(a);else if(v){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,v=c[Le]||null)E=v.formAction;else if(ud(u)!==null)continue}else E=v.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),O_(a)}}}function z_(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fd(t){this._internalRoot=t}ku.prototype.render=fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=hi();A_(a,r,t,n,null,null)},ku.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;A_(t.current,2,null,t,null,null),Lu(),n[We]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var n=re();t={blockedOn:null,target:t,priority:n};for(var a=0;a<rr.length&&n!==0&&n<rr[a].priority;a++);rr.splice(a,0,t),a===0&&U_(t)}};var P_=e.version;if(P_!=="19.3.1")throw Error(s(527,P_,"19.3.1"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var kM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{je=ju.inject(kM),Ce=ju}catch{}}return cl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=bg,c=Ag,v=Rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=T_(t,1,!1,null,null,a,r,null,u,c,v,z_),t[We]=n.current,Gh(t),new fd(n)},cl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",c=bg,v=Ag,E=Rg,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=T_(t,1,!0,n,a??null,r,u,P,c,v,E,z_),n.context=b_(null),a=n.current,r=hi(),r=Vt(r),u=Xa(r),u.callback=null,Wa(a,u,r),a=r,n.current.lanes=a,Q(n,a),aa(n),t[We]=n.current,Gh(t),new ku(n)},cl.version="19.3.1",cl}var Y_;function iE(){if(Y_)return pd.exports;Y_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),pd.exports=nE(),pd.exports}var aE=iE();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yp="160",rE=0,k_=1,sE=2,by=1,Ay=2,Ra=3,vr=0,jn=1,sa=2,pr=0,co=1,rp=2,j_=3,Z_=4,oE=5,jr=100,lE=101,uE=102,Q_=103,K_=104,cE=200,fE=201,hE=202,dE=203,sp=204,op=205,pE=206,mE=207,gE=208,_E=209,vE=210,yE=211,SE=212,xE=213,ME=214,EE=0,TE=1,bE=2,Ac=3,AE=4,RE=5,wE=6,CE=7,Ry=0,DE=1,LE=2,mr=0,UE=1,NE=2,OE=3,wy=4,zE=5,PE=6,Cy=300,po=301,mo=302,lp=303,up=304,zc=306,Rc=1e3,Vi=1001,cp=1002,kn=1003,J_=1004,vd=1005,wi=1006,BE=1007,Tl=1008,gr=1009,IE=1010,FE=1011,Sp=1012,Dy=1013,hr=1014,dr=1015,bl=1016,Ly=1017,Uy=1018,Qr=1020,HE=1021,Xi=1023,GE=1024,VE=1025,Kr=1026,go=1027,XE=1028,Ny=1029,WE=1030,Oy=1031,zy=1033,yd=33776,Sd=33777,xd=33778,Md=33779,$_=35840,tv=35841,ev=35842,nv=35843,Py=36196,iv=37492,av=37496,rv=37808,sv=37809,ov=37810,lv=37811,uv=37812,cv=37813,fv=37814,hv=37815,dv=37816,pv=37817,mv=37818,gv=37819,_v=37820,vv=37821,Ed=36492,yv=36494,Sv=36495,qE=36283,xv=36284,Mv=36285,Ev=36286,By=3e3,La=3001,YE=3200,kE=3201,Iy=0,jE=1,Li="",Un="srgb",Ua="srgb-linear",xp="display-p3",Pc="display-p3-linear",wc="linear",Ke="srgb",Cc="rec709",Dc="p3",Vs=7680,Tv=519,ZE=512,QE=513,KE=514,Fy=515,JE=516,$E=517,tT=518,eT=519,fp=35044,bv="300 es",hp=1035,Da=2e3,Lc=2001;class vo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,dp=180/Math.PI;function _r(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Fn(o,e,i){return Math.max(e,Math.min(i,o))}function nT(o,e){return(o%e+e)%e}function bd(o,e,i){return(1-i)*o+i*e}function Av(o){return(o&o-1)===0&&o!==0}function pp(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function wa(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ke(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Zt{constructor(e=0,i=0){Zt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Fn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*l+e.x,this.y=f*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(e,i,s,l,f,d,h,p,g){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,p,g)}set(e,i,s,l,f,d,h,p,g){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=f,_[5]=p,_[6]=s,_[7]=d,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],g=s[1],_=s[4],m=s[7],y=s[2],M=s[5],A=s[8],R=l[0],x=l[3],S=l[6],z=l[1],C=l[4],N=l[7],X=l[2],B=l[5],O=l[8];return f[0]=d*R+h*z+p*X,f[3]=d*x+h*C+p*B,f[6]=d*S+h*N+p*O,f[1]=g*R+_*z+m*X,f[4]=g*x+_*C+m*B,f[7]=g*S+_*N+m*O,f[2]=y*R+M*z+A*X,f[5]=y*x+M*C+A*B,f[8]=y*S+M*N+A*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],g=e[7],_=e[8];return i*d*_-i*h*g-s*f*_+s*h*p+l*f*g-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],g=e[7],_=e[8],m=_*d-h*g,y=h*p-_*f,M=g*f-d*p,A=i*m+s*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(l*g-_*s)*R,e[2]=(h*s-l*d)*R,e[3]=y*R,e[4]=(_*i-l*p)*R,e[5]=(l*f-h*i)*R,e[6]=M*R,e[7]=(s*p-g*i)*R,e[8]=(d*i-s*f)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,d,h){const p=Math.cos(f),g=Math.sin(f);return this.set(s*p,s*g,-s*(p*d+g*h)+d+e,-l*g,l*p,-l*(-g*d+p*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Ad.makeScale(e,i)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ad.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new ve;function Hy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function iT(){const o=Uc("canvas");return o.style.display="block",o}const Rv={};function Sl(o){o in Rv||(Rv[o]=!0,console.warn(o))}const wv=new ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cv=new ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zu={[Ua]:{transfer:wc,primaries:Cc,toReference:o=>o,fromReference:o=>o},[Un]:{transfer:Ke,primaries:Cc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Pc]:{transfer:wc,primaries:Dc,toReference:o=>o.applyMatrix3(Cv),fromReference:o=>o.applyMatrix3(wv)},[xp]:{transfer:Ke,primaries:Dc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Cv),fromReference:o=>o.applyMatrix3(wv).convertLinearToSRGB()}},aT=new Set([Ua,Pc]),Xe={enabled:!0,_workingColorSpace:Ua,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!aT.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=Zu[e].toReference,l=Zu[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Zu[o].primaries},getTransfer:function(o){return o===Li?wc:Zu[o].transfer}};function fo(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rd(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Xs;class Gy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=Uc("canvas")),Xs.width=e.width,Xs.height=e.height;const s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=fo(f[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fo(i[s]/255)*255):i[s]=fo(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rT=0;class Vy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=_r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(wd(l[d].image)):f.push(wd(l[d]))}else f=wd(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function wd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Gy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sT=0;class ii extends vo{constructor(e=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,s=Vi,l=Vi,f=wi,d=Tl,h=Xi,p=gr,g=ii.DEFAULT_ANISOTROPY,_=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=_r(),this.name="",this.source=new Vy(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===La?Un:Li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Un?La:By}set encoding(e){Sl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===La?Un:Li}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Cy;ii.DEFAULT_ANISOTROPY=1;class Tn{constructor(e=0,i=0,s=0,l=1){Tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*f,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const p=e.elements,g=p[0],_=p[4],m=p[8],y=p[1],M=p[5],A=p[9],R=p[2],x=p[6],S=p[10];if(Math.abs(_-y)<.01&&Math.abs(m-R)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(m+R)<.1&&Math.abs(A+x)<.1&&Math.abs(g+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(g+1)/2,N=(M+1)/2,X=(S+1)/2,B=(_+y)/4,O=(m+R)/4,rt=(A+x)/4;return C>N&&C>X?C<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(C),l=B/s,f=O/s):N>X?N<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(N),s=B/l,f=rt/l):X<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(X),s=O/f,l=rt/f),this.set(s,l,f,i),this}let z=Math.sqrt((x-A)*(x-A)+(m-R)*(m-R)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(x-A)/z,this.y=(m-R)/z,this.z=(y-_)/z,this.w=Math.acos((g+M+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oT extends vo{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Tn(0,0,e,i),this.scissorTest=!1,this.viewport=new Tn(0,0,e,i);const l={width:e,height:i,depth:1};s.encoding!==void 0&&(Sl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===La?Un:Li),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new ii(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,i,s=1){(this.width!==e||this.height!==i||this.depth!==s)&&(this.width=e,this.height=i,this.depth=s,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Vy(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends oT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Xy extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lT extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=kn,this.minFilter=kn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,d,h){let p=s[l+0],g=s[l+1],_=s[l+2],m=s[l+3];const y=f[d+0],M=f[d+1],A=f[d+2],R=f[d+3];if(h===0){e[i+0]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(m!==R||p!==y||g!==M||_!==A){let x=1-h;const S=p*y+g*M+_*A+m*R,z=S>=0?1:-1,C=1-S*S;if(C>Number.EPSILON){const X=Math.sqrt(C),B=Math.atan2(X,S*z);x=Math.sin(x*B)/X,h=Math.sin(h*B)/X}const N=h*z;if(p=p*x+y*N,g=g*x+M*N,_=_*x+A*N,m=m*x+R*N,x===1-h){const X=1/Math.sqrt(p*p+g*g+_*_+m*m);p*=X,g*=X,_*=X,m*=X}}e[i]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,f,d){const h=s[l],p=s[l+1],g=s[l+2],_=s[l+3],m=f[d],y=f[d+1],M=f[d+2],A=f[d+3];return e[i]=h*A+_*m+p*M-g*y,e[i+1]=p*A+_*y+g*m-h*M,e[i+2]=g*A+_*M+h*y-p*m,e[i+3]=_*A-h*m-p*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,g=h(s/2),_=h(l/2),m=h(f/2),y=p(s/2),M=p(l/2),A=p(f/2);switch(d){case"XYZ":this._x=y*_*m+g*M*A,this._y=g*M*m-y*_*A,this._z=g*_*A+y*M*m,this._w=g*_*m-y*M*A;break;case"YXZ":this._x=y*_*m+g*M*A,this._y=g*M*m-y*_*A,this._z=g*_*A-y*M*m,this._w=g*_*m+y*M*A;break;case"ZXY":this._x=y*_*m-g*M*A,this._y=g*M*m+y*_*A,this._z=g*_*A+y*M*m,this._w=g*_*m-y*M*A;break;case"ZYX":this._x=y*_*m-g*M*A,this._y=g*M*m+y*_*A,this._z=g*_*A-y*M*m,this._w=g*_*m+y*M*A;break;case"YZX":this._x=y*_*m+g*M*A,this._y=g*M*m+y*_*A,this._z=g*_*A-y*M*m,this._w=g*_*m-y*M*A;break;case"XZY":this._x=y*_*m-g*M*A,this._y=g*M*m-y*_*A,this._z=g*_*A+y*M*m,this._w=g*_*m+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],d=i[1],h=i[5],p=i[9],g=i[2],_=i[6],m=i[10],y=s+h+m;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(f-g)*M,this._z=(d-l)*M}else if(s>h&&s>m){const M=2*Math.sqrt(1+s-h-m);this._w=(_-p)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(f+g)/M}else if(h>m){const M=2*Math.sqrt(1+h-s-m);this._w=(f-g)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+m-s-h);this._w=(d-l)/M,this._x=(f+g)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,d=e._w,h=i._x,p=i._y,g=i._z,_=i._w;return this._x=s*_+d*h+l*g-f*p,this._y=l*_+d*p+f*h-s*g,this._z=f*_+d*g+s*p-l*h,this._w=d*_-s*h-l*p-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,f=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=f,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,h),m=Math.sin((1-i)*_)/g,y=Math.sin(i*_)/g;return this._w=d*m+this._w*y,this._x=s*m+this._x*y,this._y=l*m+this._y*y,this._z=f*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e),l=2*Math.PI*Math.random(),f=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(f),s*Math.cos(f),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,i=0,s=0){G.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Dv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Dv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,d=e.y,h=e.z,p=e.w,g=2*(d*l-h*s),_=2*(h*i-f*l),m=2*(f*s-d*i);return this.x=i+p*g+d*m-h*_,this.y=s+p*_+h*g-f*m,this.z=l+p*m+f*_-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-f*h,this.y=f*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Fn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new G,Dv=new yo;class Al{constructor(e=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Fi):Fi.fromBufferAttribute(f,d),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Qu.copy(s.boundingBox)),Qu.applyMatrix4(e.matrixWorld),this.union(Qu)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),Ku.subVectors(this.max,fl),Ws.subVectors(e.a,fl),qs.subVectors(e.b,fl),Ys.subVectors(e.c,fl),or.subVectors(qs,Ws),lr.subVectors(Ys,qs),Vr.subVectors(Ws,Ys);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Vr.z,Vr.y,or.z,0,-or.x,lr.z,0,-lr.x,Vr.z,0,-Vr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Vr.y,Vr.x,0];return!Dd(i,Ws,qs,Ys,Ku)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,Ws,qs,Ys,Ku))?!1:(Ju.crossVectors(or,lr),i=[Ju.x,Ju.y,Ju.z],Dd(i,Ws,qs,Ys,Ku))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ma=[new G,new G,new G,new G,new G,new G,new G,new G],Fi=new G,Qu=new Al,Ws=new G,qs=new G,Ys=new G,or=new G,lr=new G,Vr=new G,fl=new G,Ku=new G,Ju=new G,Xr=new G;function Dd(o,e,i,s,l){for(let f=0,d=o.length-3;f<=d;f+=3){Xr.fromArray(o,f);const h=l.x*Math.abs(Xr.x)+l.y*Math.abs(Xr.y)+l.z*Math.abs(Xr.z),p=e.dot(Xr),g=i.dot(Xr),_=s.dot(Xr);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>h)return!1}return!0}const uT=new Al,hl=new G,Ld=new G;class Rl{constructor(e=new G,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):uT.setFromPoints(e).getCenter(s);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const i=hl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(hl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(Ld)),this.expandByPoint(hl.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ea=new G,Ud=new G,$u=new G,ur=new G,Nd=new G,tc=new G,Od=new G;class Mp{constructor(e=new G,i=new G(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ud.copy(e).add(i).multiplyScalar(.5),$u.copy(i).sub(e).normalize(),ur.copy(this.origin).sub(Ud);const f=e.distanceTo(i)*.5,d=-this.direction.dot($u),h=ur.dot(this.direction),p=-ur.dot($u),g=ur.lengthSq(),_=Math.abs(1-d*d);let m,y,M,A;if(_>0)if(m=d*p-h,y=d*h-p,A=f*_,m>=0)if(y>=-A)if(y<=A){const R=1/_;m*=R,y*=R,M=m*(m+d*y+2*h)+y*(d*m+y+2*p)+g}else y=f,m=Math.max(0,-(d*y+h)),M=-m*m+y*(y+2*p)+g;else y=-f,m=Math.max(0,-(d*y+h)),M=-m*m+y*(y+2*p)+g;else y<=-A?(m=Math.max(0,-(-d*f+h)),y=m>0?-f:Math.min(Math.max(-f,-p),f),M=-m*m+y*(y+2*p)+g):y<=A?(m=0,y=Math.min(Math.max(-f,-p),f),M=y*(y+2*p)+g):(m=Math.max(0,-(d*f+h)),y=m>0?f:Math.min(Math.max(-f,-p),f),M=-m*m+y*(y+2*p)+g);else y=d>0?-f:f,m=Math.max(0,-(d*y+h)),M=-m*m+y*(y+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Ud).addScaledVector($u,y),M}intersectSphere(e,i){Ea.subVectors(e.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,d,h,p;const g=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,y=this.origin;return g>=0?(s=(e.min.x-y.x)*g,l=(e.max.x-y.x)*g):(s=(e.max.x-y.x)*g,l=(e.min.x-y.x)*g),_>=0?(f=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(f=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),s>d||f>l||((f>s||isNaN(s))&&(s=f),(d<l||isNaN(l))&&(l=d),m>=0?(h=(e.min.z-y.z)*m,p=(e.max.z-y.z)*m):(h=(e.max.z-y.z)*m,p=(e.min.z-y.z)*m),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,i,s,l,f){Nd.subVectors(i,e),tc.subVectors(s,e),Od.crossVectors(Nd,tc);let d=this.direction.dot(Od),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ur.subVectors(this.origin,e);const p=h*this.direction.dot(tc.crossVectors(ur,tc));if(p<0)return null;const g=h*this.direction.dot(Nd.cross(ur));if(g<0||p+g>d)return null;const _=-h*ur.dot(Od);return _<0?null:this.at(_/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,s,l,f,d,h,p,g,_,m,y,M,A,R,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,p,g,_,m,y,M,A,R,x)}set(e,i,s,l,f,d,h,p,g,_,m,y,M,A,R,x){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=f,S[5]=d,S[9]=h,S[13]=p,S[2]=g,S[6]=_,S[10]=m,S[14]=y,S[3]=M,S[7]=A,S[11]=R,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ks.setFromMatrixColumn(e,0).length(),f=1/ks.setFromMatrixColumn(e,1).length(),d=1/ks.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),g=Math.sin(l),_=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const y=d*_,M=d*m,A=h*_,R=h*m;i[0]=p*_,i[4]=-p*m,i[8]=g,i[1]=M+A*g,i[5]=y-R*g,i[9]=-h*p,i[2]=R-y*g,i[6]=A+M*g,i[10]=d*p}else if(e.order==="YXZ"){const y=p*_,M=p*m,A=g*_,R=g*m;i[0]=y+R*h,i[4]=A*h-M,i[8]=d*g,i[1]=d*m,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=R+y*h,i[10]=d*p}else if(e.order==="ZXY"){const y=p*_,M=p*m,A=g*_,R=g*m;i[0]=y-R*h,i[4]=-d*m,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=R-y*h,i[2]=-d*g,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const y=d*_,M=d*m,A=h*_,R=h*m;i[0]=p*_,i[4]=A*g-M,i[8]=y*g+R,i[1]=p*m,i[5]=R*g+y,i[9]=M*g-A,i[2]=-g,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*g,A=h*p,R=h*g;i[0]=p*_,i[4]=R-y*m,i[8]=A*m+M,i[1]=m,i[5]=d*_,i[9]=-h*_,i[2]=-g*_,i[6]=M*m+A,i[10]=y-R*m}else if(e.order==="XZY"){const y=d*p,M=d*g,A=h*p,R=h*g;i[0]=p*_,i[4]=-m,i[8]=g*_,i[1]=y*m+R,i[5]=d*_,i[9]=M*m-A,i[2]=A*m-M,i[6]=h*_,i[10]=R*m+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,fT)}lookAt(e,i,s){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),cr.crossVectors(s,pi),cr.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),cr.crossVectors(s,pi)),cr.normalize(),ec.crossVectors(pi,cr),l[0]=cr.x,l[4]=ec.x,l[8]=pi.x,l[1]=cr.y,l[5]=ec.y,l[9]=pi.y,l[2]=cr.z,l[6]=ec.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],g=s[12],_=s[1],m=s[5],y=s[9],M=s[13],A=s[2],R=s[6],x=s[10],S=s[14],z=s[3],C=s[7],N=s[11],X=s[15],B=l[0],O=l[4],rt=l[8],b=l[12],D=l[1],lt=l[5],nt=l[9],_t=l[13],W=l[2],et=l[6],H=l[10],st=l[14],it=l[3],ft=l[7],ht=l[11],Et=l[15];return f[0]=d*B+h*D+p*W+g*it,f[4]=d*O+h*lt+p*et+g*ft,f[8]=d*rt+h*nt+p*H+g*ht,f[12]=d*b+h*_t+p*st+g*Et,f[1]=_*B+m*D+y*W+M*it,f[5]=_*O+m*lt+y*et+M*ft,f[9]=_*rt+m*nt+y*H+M*ht,f[13]=_*b+m*_t+y*st+M*Et,f[2]=A*B+R*D+x*W+S*it,f[6]=A*O+R*lt+x*et+S*ft,f[10]=A*rt+R*nt+x*H+S*ht,f[14]=A*b+R*_t+x*st+S*Et,f[3]=z*B+C*D+N*W+X*it,f[7]=z*O+C*lt+N*et+X*ft,f[11]=z*rt+C*nt+N*H+X*ht,f[15]=z*b+C*_t+N*st+X*Et,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],d=e[1],h=e[5],p=e[9],g=e[13],_=e[2],m=e[6],y=e[10],M=e[14],A=e[3],R=e[7],x=e[11],S=e[15];return A*(+f*p*m-l*g*m-f*h*y+s*g*y+l*h*M-s*p*M)+R*(+i*p*M-i*g*y+f*d*y-l*d*M+l*g*_-f*p*_)+x*(+i*g*m-i*h*M-f*d*m+s*d*M+f*h*_-s*g*_)+S*(-l*h*_-i*p*m+i*h*y+l*d*m-s*d*y+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],g=e[7],_=e[8],m=e[9],y=e[10],M=e[11],A=e[12],R=e[13],x=e[14],S=e[15],z=m*x*g-R*y*g+R*p*M-h*x*M-m*p*S+h*y*S,C=A*y*g-_*x*g-A*p*M+d*x*M+_*p*S-d*y*S,N=_*R*g-A*m*g+A*h*M-d*R*M-_*h*S+d*m*S,X=A*m*p-_*R*p-A*h*y+d*R*y+_*h*x-d*m*x,B=i*z+s*C+l*N+f*X;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=z*O,e[1]=(R*y*f-m*x*f-R*l*M+s*x*M+m*l*S-s*y*S)*O,e[2]=(h*x*f-R*p*f+R*l*g-s*x*g-h*l*S+s*p*S)*O,e[3]=(m*p*f-h*y*f-m*l*g+s*y*g+h*l*M-s*p*M)*O,e[4]=C*O,e[5]=(_*x*f-A*y*f+A*l*M-i*x*M-_*l*S+i*y*S)*O,e[6]=(A*p*f-d*x*f-A*l*g+i*x*g+d*l*S-i*p*S)*O,e[7]=(d*y*f-_*p*f+_*l*g-i*y*g-d*l*M+i*p*M)*O,e[8]=N*O,e[9]=(A*m*f-_*R*f-A*s*M+i*R*M+_*s*S-i*m*S)*O,e[10]=(d*R*f-A*h*f+A*s*g-i*R*g-d*s*S+i*h*S)*O,e[11]=(_*h*f-d*m*f-_*s*g+i*m*g+d*s*M-i*h*M)*O,e[12]=X*O,e[13]=(_*R*l-A*m*l+A*s*y-i*R*y-_*s*x+i*m*x)*O,e[14]=(A*h*l-d*R*l-A*s*p+i*R*p+d*s*x-i*h*x)*O,e[15]=(d*m*l-_*h*l+_*s*p-i*m*p-d*s*y+i*h*y)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,d=e.x,h=e.y,p=e.z,g=f*d,_=f*h;return this.set(g*d+s,g*h-l*p,g*p+l*h,0,g*h+l*p,_*h+s,_*p-l*d,0,g*p-l*h,_*p+l*d,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,d){return this.set(1,s,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,g=f+f,_=d+d,m=h+h,y=f*g,M=f*_,A=f*m,R=d*_,x=d*m,S=h*m,z=p*g,C=p*_,N=p*m,X=s.x,B=s.y,O=s.z;return l[0]=(1-(R+S))*X,l[1]=(M+N)*X,l[2]=(A-C)*X,l[3]=0,l[4]=(M-N)*B,l[5]=(1-(y+S))*B,l[6]=(x+z)*B,l[7]=0,l[8]=(A+C)*O,l[9]=(x-z)*O,l[10]=(1-(y+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let f=ks.set(l[0],l[1],l[2]).length();const d=ks.set(l[4],l[5],l[6]).length(),h=ks.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Hi.copy(this);const g=1/f,_=1/d,m=1/h;return Hi.elements[0]*=g,Hi.elements[1]*=g,Hi.elements[2]*=g,Hi.elements[4]*=_,Hi.elements[5]*=_,Hi.elements[6]*=_,Hi.elements[8]*=m,Hi.elements[9]*=m,Hi.elements[10]*=m,i.setFromRotationMatrix(Hi),s.x=f,s.y=d,s.z=h,this}makePerspective(e,i,s,l,f,d,h=Da){const p=this.elements,g=2*f/(i-e),_=2*f/(s-l),m=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(h===Da)M=-(d+f)/(d-f),A=-2*d*f/(d-f);else if(h===Lc)M=-d/(d-f),A=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,f,d,h=Da){const p=this.elements,g=1/(i-e),_=1/(s-l),m=1/(d-f),y=(i+e)*g,M=(s+l)*_;let A,R;if(h===Da)A=(d+f)*m,R=-2*m;else if(h===Lc)A=f*m,R=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=R,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ks=new G,Hi=new tn,cT=new G(0,0,0),fT=new G(1,1,1),cr=new G,ec=new G,pi=new G,Lv=new tn,Uv=new yo;class Bc{constructor(e=0,i=0,s=0,l=Bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],p=l[1],g=l[5],_=l[9],m=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Fn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Fn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Lv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Uv.setFromEuler(this),this.setFromQuaternion(Uv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bc.DEFAULT_ORDER="XYZ";class Wy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hT=0;const Nv=new G,js=new yo,Ta=new tn,nc=new G,dl=new G,dT=new G,pT=new yo,Ov=new G(1,0,0),zv=new G(0,1,0),Pv=new G(0,0,1),mT={type:"added"},gT={type:"removed"};class dn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new G,i=new Bc,s=new yo,l=new G(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ve}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return js.setFromAxisAngle(e,i),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,i){return js.setFromAxisAngle(e,i),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Ov,e)}rotateY(e){return this.rotateOnAxis(zv,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,i){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ov,e)}translateY(e){return this.translateOnAxis(zv,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?nc.copy(e):nc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(dl,nc,this.up):Ta.lookAt(nc,dl,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),js.setFromRotationMatrix(Ta),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,pT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const f=i[s];(f.matrixWorldAutoUpdate===!0||e===!0)&&f.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let f=0,d=l.length;f<d;f++){const h=l[f];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const m=p[g];f(e.shapes,m)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,g=this.material.length;p<g;p++)h.push(f(e.materials,this.material[p]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),g=d(e.textures),_=d(e.images),m=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),_.length>0&&(s.images=_),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const p=[];for(const g in h){const _=h[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}dn.DEFAULT_UP=new G(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new G,ba=new G,zd=new G,Aa=new G,Zs=new G,Qs=new G,Bv=new G,Pd=new G,Bd=new G,Id=new G;let ic=!1;class Ci{constructor(e=new G,i=new G,s=new G){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Gi.subVectors(e,i),l.cross(Gi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Gi.subVectors(l,i),ba.subVectors(s,i),zd.subVectors(e,i);const d=Gi.dot(Gi),h=Gi.dot(ba),p=Gi.dot(zd),g=ba.dot(ba),_=ba.dot(zd),m=d*g-h*h;if(m===0)return f.set(0,0,0),null;const y=1/m,M=(g*p-h*_)*y,A=(d*_-h*p)*y;return f.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getUV(e,i,s,l,f,d,h,p){return ic===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ic=!0),this.getInterpolation(e,i,s,l,f,d,h,p)}static getInterpolation(e,i,s,l,f,d,h,p){return this.getBarycoord(e,i,s,l,Aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Aa.x),p.addScaledVector(d,Aa.y),p.addScaledVector(h,Aa.z),p)}static isFrontFacing(e,i,s,l){return Gi.subVectors(s,i),ba.subVectors(e,i),Gi.cross(ba).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Gi.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,s,l,f){return ic===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ic=!0),Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}getInterpolation(e,i,s,l,f){return Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let d,h;Zs.subVectors(l,s),Qs.subVectors(f,s),Pd.subVectors(e,s);const p=Zs.dot(Pd),g=Qs.dot(Pd);if(p<=0&&g<=0)return i.copy(s);Bd.subVectors(e,l);const _=Zs.dot(Bd),m=Qs.dot(Bd);if(_>=0&&m<=_)return i.copy(l);const y=p*m-_*g;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(s).addScaledVector(Zs,d);Id.subVectors(e,f);const M=Zs.dot(Id),A=Qs.dot(Id);if(A>=0&&M<=A)return i.copy(f);const R=M*g-p*A;if(R<=0&&g>=0&&A<=0)return h=g/(g-A),i.copy(s).addScaledVector(Qs,h);const x=_*A-M*m;if(x<=0&&m-_>=0&&M-A>=0)return Bv.subVectors(f,l),h=(m-_)/(m-_+(M-A)),i.copy(l).addScaledVector(Bv,h);const S=1/(x+R+y);return d=R*S,h=y*S,i.copy(s).addScaledVector(Zs,d).addScaledVector(Qs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},ac={h:0,s:0,l:0};function Fd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ae{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Xe.workingColorSpace){return this.r=e,this.g=i,this.b=s,Xe.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Xe.workingColorSpace){if(e=nT(e,1),i=Fn(i,0,1),s=Fn(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Fd(d,f,e+1/3),this.g=Fd(d,f,e),this.b=Fd(d,f,e-1/3)}return Xe.toWorkingColorSpace(this,l),this}setStyle(e,i=Un){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Un){const s=qy[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=Rd(e.r),this.g=Rd(e.g),this.b=Rd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Xe.fromWorkingColorSpace(In.copy(this),e),Math.round(Fn(In.r*255,0,255))*65536+Math.round(Fn(In.g*255,0,255))*256+Math.round(Fn(In.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Xe.workingColorSpace){Xe.fromWorkingColorSpace(In.copy(this),i);const s=In.r,l=In.g,f=In.b,d=Math.max(s,l,f),h=Math.min(s,l,f);let p,g;const _=(h+d)/2;if(h===d)p=0,g=0;else{const m=d-h;switch(g=_<=.5?m/(d+h):m/(2-d-h),d){case s:p=(l-f)/m+(l<f?6:0);break;case l:p=(f-s)/m+2;break;case f:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,i=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Un){Xe.fromWorkingColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==Un?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+i,fr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fr),e.getHSL(ac);const s=bd(fr.h,ac.h,i),l=bd(fr.s,ac.s,i),f=bd(fr.l,ac.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ae;Ae.NAMES=qy;let _T=0;class Sr extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=co,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=op,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(s.blending=this.blending),this.side!==vr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sp&&(s.blendSrc=this.blendSrc),this.blendDst!==op&&(s.blendDst=this.blendDst),this.blendEquation!==jr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ac&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nc extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new G,rc=new Zt;class ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=fp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(e),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=wa(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ke(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wa(i,this.array)),i}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wa(i,this.array)),i}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wa(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wa(i,this.array)),i}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),f=ke(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fp&&(e.usage=this.usage),e}}class Yy extends ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ky extends ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class pn extends ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}let vT=0;const Ri=new tn,Hd=new dn,Ks=new G,mi=new Al,pl=new Al,Mn=new G;class Nn extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hy(e)?ky:Yy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ve().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,s){return Ri.makeTranslation(e,i,s),this.applyMatrix4(Ri),this}scale(e,i,s){return Ri.makeScale(e,i,s),this.applyMatrix4(Ri),this}lookAt(e){return Hd.lookAt(e),Hd.updateMatrix(),this.applyMatrix4(Hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const f=e[s];i.push(f.x,f.y,f.z||0)}return this.setAttribute("position",new pn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];mi.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];pl.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(mi.min,pl.min),mi.expandByPoint(Mn),Mn.addVectors(mi.max,pl.max),mi.expandByPoint(Mn)):(mi.expandByPoint(pl.min),mi.expandByPoint(pl.max))}mi.getCenter(s);let l=0;for(let f=0,d=e.count;f<d;f++)Mn.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let g=0,_=h.count;g<_;g++)Mn.fromBufferAttribute(h,g),p&&(Ks.fromBufferAttribute(e,g),Mn.add(Ks)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,l=i.position.array,f=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,g=[],_=[];for(let D=0;D<h;D++)g[D]=new G,_[D]=new G;const m=new G,y=new G,M=new G,A=new Zt,R=new Zt,x=new Zt,S=new G,z=new G;function C(D,lt,nt){m.fromArray(l,D*3),y.fromArray(l,lt*3),M.fromArray(l,nt*3),A.fromArray(d,D*2),R.fromArray(d,lt*2),x.fromArray(d,nt*2),y.sub(m),M.sub(m),R.sub(A),x.sub(A);const _t=1/(R.x*x.y-x.x*R.y);isFinite(_t)&&(S.copy(y).multiplyScalar(x.y).addScaledVector(M,-R.y).multiplyScalar(_t),z.copy(M).multiplyScalar(R.x).addScaledVector(y,-x.x).multiplyScalar(_t),g[D].add(S),g[lt].add(S),g[nt].add(S),_[D].add(z),_[lt].add(z),_[nt].add(z))}let N=this.groups;N.length===0&&(N=[{start:0,count:s.length}]);for(let D=0,lt=N.length;D<lt;++D){const nt=N[D],_t=nt.start,W=nt.count;for(let et=_t,H=_t+W;et<H;et+=3)C(s[et+0],s[et+1],s[et+2])}const X=new G,B=new G,O=new G,rt=new G;function b(D){O.fromArray(f,D*3),rt.copy(O);const lt=g[D];X.copy(lt),X.sub(O.multiplyScalar(O.dot(lt))).normalize(),B.crossVectors(rt,lt);const _t=B.dot(_[D])<0?-1:1;p[D*4]=X.x,p[D*4+1]=X.y,p[D*4+2]=X.z,p[D*4+3]=_t}for(let D=0,lt=N.length;D<lt;++D){const nt=N[D],_t=nt.start,W=nt.count;for(let et=_t,H=_t+W;et<H;et+=3)b(s[et+0]),b(s[et+1]),b(s[et+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new G,f=new G,d=new G,h=new G,p=new G,g=new G,_=new G,m=new G;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),R=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,A),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,x),_.subVectors(d,f),m.subVectors(l,f),_.cross(m),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,x),h.add(_),p.add(_),g.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(x,g.x,g.y,g.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),f.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,f),m.subVectors(l,f),_.cross(m),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,p){const g=h.array,_=h.itemSize,m=h.normalized,y=new g.constructor(p.length*_);let M=0,A=0;for(let R=0,x=p.length;R<x;R++){h.isInterleavedBufferAttribute?M=p[R]*h.data.stride+h.offset:M=p[R]*_;for(let S=0;S<_;S++)y[A++]=g[M++]}return new ai(y,_,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],g=e(p,s);i.setAttribute(h,g)}const f=this.morphAttributes;for(const h in f){const p=[],g=f[h];for(let _=0,m=g.length;_<m;_++){const y=g[_],M=e(y,s);p.push(M)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let m=0,y=g.length;m<y;m++){const M=g[m];_.push(M.toJSON(e.data))}_.length>0&&(l[p]=_,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const g in l){const _=l[g];this.setAttribute(g,_.clone(i))}const f=e.morphAttributes;for(const g in f){const _=[],m=f[g];for(let y=0,M=m.length;y<M;y++)_.push(m[y].clone(i));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,_=d.length;g<_;g++){const m=d[g];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new tn,Wr=new Mp,sc=new Rl,Fv=new G,Js=new G,$s=new G,to=new G,Gd=new G,oc=new G,lc=new Zt,uc=new Zt,cc=new Zt,Hv=new G,Gv=new G,Vv=new G,fc=new G,hc=new G;class Ye extends dn{constructor(e=new Nn,i=new Nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){oc.set(0,0,0);for(let p=0,g=f.length;p<g;p++){const _=h[p],m=f[p];_!==0&&(Gd.fromBufferAttribute(m,e),d?oc.addScaledVector(Gd,_):oc.addScaledVector(Gd.sub(i),_))}i.add(oc)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),sc.copy(s.boundingSphere),sc.applyMatrix4(f),Wr.copy(e.ray).recast(e.near),!(sc.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(sc,Fv)===null||Wr.origin.distanceToSquared(Fv)>(e.far-e.near)**2))&&(Iv.copy(f).invert(),Wr.copy(e.ray).applyMatrix4(Iv),!(s.boundingBox!==null&&Wr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Wr)))}_computeIntersections(e,i,s){let l;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,g=f.attributes.uv,_=f.attributes.uv1,m=f.attributes.normal,y=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,R=y.length;A<R;A++){const x=y[A],S=d[x.materialIndex],z=Math.max(x.start,M.start),C=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let N=z,X=C;N<X;N+=3){const B=h.getX(N),O=h.getX(N+1),rt=h.getX(N+2);l=dc(this,S,e,s,g,_,m,B,O,rt),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let x=A,S=R;x<S;x+=3){const z=h.getX(x),C=h.getX(x+1),N=h.getX(x+2);l=dc(this,d,e,s,g,_,m,z,C,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,R=y.length;A<R;A++){const x=y[A],S=d[x.materialIndex],z=Math.max(x.start,M.start),C=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let N=z,X=C;N<X;N+=3){const B=N,O=N+1,rt=N+2;l=dc(this,S,e,s,g,_,m,B,O,rt),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let x=A,S=R;x<S;x+=3){const z=x,C=x+1,N=x+2;l=dc(this,d,e,s,g,_,m,z,C,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function yT(o,e,i,s,l,f,d,h){let p;if(e.side===jn?p=s.intersectTriangle(d,f,l,!0,h):p=s.intersectTriangle(l,f,d,e.side===vr,h),p===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(hc);return g<i.near||g>i.far?null:{distance:g,point:hc.clone(),object:o}}function dc(o,e,i,s,l,f,d,h,p,g){o.getVertexPosition(h,Js),o.getVertexPosition(p,$s),o.getVertexPosition(g,to);const _=yT(o,e,i,s,Js,$s,to,fc);if(_){l&&(lc.fromBufferAttribute(l,h),uc.fromBufferAttribute(l,p),cc.fromBufferAttribute(l,g),_.uv=Ci.getInterpolation(fc,Js,$s,to,lc,uc,cc,new Zt)),f&&(lc.fromBufferAttribute(f,h),uc.fromBufferAttribute(f,p),cc.fromBufferAttribute(f,g),_.uv1=Ci.getInterpolation(fc,Js,$s,to,lc,uc,cc,new Zt),_.uv2=_.uv1),d&&(Hv.fromBufferAttribute(d,h),Gv.fromBufferAttribute(d,p),Vv.fromBufferAttribute(d,g),_.normal=Ci.getInterpolation(fc,Js,$s,to,Hv,Gv,Vv,new G),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const m={a:h,b:p,c:g,normal:new G,materialIndex:0};Ci.getNormal(Js,$s,to,m.normal),_.face=m}return _}class yr extends Nn{constructor(e=1,i=1,s=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const p=[],g=[],_=[],m=[];let y=0,M=0;A("z","y","x",-1,-1,s,i,e,d,f,0),A("z","y","x",1,-1,s,i,-e,d,f,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,f,4),A("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(p),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(m,2));function A(R,x,S,z,C,N,X,B,O,rt,b){const D=N/O,lt=X/rt,nt=N/2,_t=X/2,W=B/2,et=O+1,H=rt+1;let st=0,it=0;const ft=new G;for(let ht=0;ht<H;ht++){const Et=ht*lt-_t;for(let Tt=0;Tt<et;Tt++){const ct=Tt*D-nt;ft[R]=ct*z,ft[x]=Et*C,ft[S]=W,g.push(ft.x,ft.y,ft.z),ft[R]=0,ft[x]=0,ft[S]=B>0?1:-1,_.push(ft.x,ft.y,ft.z),m.push(Tt/O),m.push(1-ht/rt),st+=1}}for(let ht=0;ht<rt;ht++)for(let Et=0;Et<O;Et++){const Tt=y+Et+et*ht,ct=y+Et+et*(ht+1),L=y+(Et+1)+et*(ht+1),K=y+(Et+1)+et*ht;p.push(Tt,ct,K),p.push(ct,L,K),it+=6}h.addGroup(M,it,b),M+=it,y+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Yn(o){const e={};for(let i=0;i<o.length;i++){const s=_o(o[i]);for(const l in s)e[l]=s[l]}return e}function ST(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function jy(o){return o.getRenderTarget()===null?o.outputColorSpace:Xe.workingColorSpace}const xT={clone:_o,merge:Yn};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=ST(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zy extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Da}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Di extends Zy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,s,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Td*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,g=d.fullHeight;f+=d.offsetX*l/p,i-=d.offsetY*s/g,l*=d.width/p,s*=d.height/g}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const eo=-90,no=1;class TT extends dn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(eo,no,e,i);l.layers=this.layers,this.add(l);const f=new Di(eo,no,e,i);f.layers=this.layers,this.add(f);const d=new Di(eo,no,e,i);d.layers=this.layers,this.add(d);const h=new Di(eo,no,e,i);h.layers=this.layers,this.add(h);const p=new Di(eo,no,e,i);p.layers=this.layers,this.add(p);const g=new Di(eo,no,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,d,h,p]=i;for(const g of i)this.remove(g);if(e===Da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,g,_]=this.children,m=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(m,y,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Qy extends ii{constructor(e,i,s,l,f,d,h,p,g,_){e=e!==void 0?e:[],i=i!==void 0?i:po,super(e,i,s,l,f,d,h,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bT extends Jr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(Sl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===La?Un:Li),this.texture=new Qy(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new yr(5,5,5),f=new $r({name:"CubemapFromEquirect",uniforms:_o(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:pr});f.uniforms.tEquirect.value=i;const d=new Ye(l,f),h=i.minFilter;return i.minFilter===Tl&&(i.minFilter=wi),new TT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(f)}}const Vd=new G,AT=new G,RT=new ve;class Yr{constructor(e=new G(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Vd.subVectors(s,i).cross(AT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Vd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||RT.getNormalMatrix(e),l=this.coplanarPoint(Vd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Rl,pc=new G;class Ep{constructor(e=new Yr,i=new Yr,s=new Yr,l=new Yr,f=new Yr,d=new Yr){this.planes=[e,i,s,l,f,d]}set(e,i,s,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Da){const s=this.planes,l=e.elements,f=l[0],d=l[1],h=l[2],p=l[3],g=l[4],_=l[5],m=l[6],y=l[7],M=l[8],A=l[9],R=l[10],x=l[11],S=l[12],z=l[13],C=l[14],N=l[15];if(s[0].setComponents(p-f,y-g,x-M,N-S).normalize(),s[1].setComponents(p+f,y+g,x+M,N+S).normalize(),s[2].setComponents(p+d,y+_,x+A,N+z).normalize(),s[3].setComponents(p-d,y-_,x-A,N-z).normalize(),s[4].setComponents(p-h,y-m,x-R,N-C).normalize(),i===Da)s[5].setComponents(p+h,y+m,x+R,N+C).normalize();else if(i===Lc)s[5].setComponents(h,m,R,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(pc.x=l.normal.x>0?e.max.x:e.min.x,pc.y=l.normal.y>0?e.max.y:e.min.y,pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ky(){let o=null,e=!1,i=null,s=null;function l(f,d){i(f,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function wT(o,e){const i=e.isWebGL2,s=new WeakMap;function l(g,_){const m=g.array,y=g.usage,M=m.byteLength,A=o.createBuffer();o.bindBuffer(_,A),o.bufferData(_,m,y),g.onUploadCallback();let R;if(m instanceof Float32Array)R=o.FLOAT;else if(m instanceof Uint16Array)if(g.isFloat16BufferAttribute)if(i)R=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else R=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)R=o.SHORT;else if(m instanceof Uint32Array)R=o.UNSIGNED_INT;else if(m instanceof Int32Array)R=o.INT;else if(m instanceof Int8Array)R=o.BYTE;else if(m instanceof Uint8Array)R=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)R=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:A,type:R,bytesPerElement:m.BYTES_PER_ELEMENT,version:g.version,size:M}}function f(g,_,m){const y=_.array,M=_._updateRange,A=_.updateRanges;if(o.bindBuffer(m,g),M.count===-1&&A.length===0&&o.bufferSubData(m,0,y),A.length!==0){for(let R=0,x=A.length;R<x;R++){const S=A[R];i?o.bufferSubData(m,S.start*y.BYTES_PER_ELEMENT,y,S.start,S.count):o.bufferSubData(m,S.start*y.BYTES_PER_ELEMENT,y.subarray(S.start,S.start+S.count))}_.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(m,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(m,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),_.onUploadCallback()}function d(g){return g.isInterleavedBufferAttribute&&(g=g.data),s.get(g)}function h(g){g.isInterleavedBufferAttribute&&(g=g.data);const _=s.get(g);_&&(o.deleteBuffer(_.buffer),s.delete(g))}function p(g,_){if(g.isGLBufferAttribute){const y=s.get(g);(!y||y.version<g.version)&&s.set(g,{buffer:g.buffer,type:g.type,bytesPerElement:g.elementSize,version:g.version});return}g.isInterleavedBufferAttribute&&(g=g.data);const m=s.get(g);if(m===void 0)s.set(g,l(g,_));else if(m.version<g.version){if(m.size!==g.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");f(m.buffer,g,_),m.version=g.version}}return{get:d,remove:h,update:p}}class ho extends Nn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),g=h+1,_=p+1,m=e/h,y=i/p,M=[],A=[],R=[],x=[];for(let S=0;S<_;S++){const z=S*y-d;for(let C=0;C<g;C++){const N=C*m-f;A.push(N,-z,0),R.push(0,0,1),x.push(C/h),x.push(1-S/p)}}for(let S=0;S<p;S++)for(let z=0;z<h;z++){const C=z+g*S,N=z+g*(S+1),X=z+1+g*(S+1),B=z+1+g*S;M.push(C,N,B),M.push(N,X,B)}this.setIndex(M),this.setAttribute("position",new pn(A,3)),this.setAttribute("normal",new pn(R,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.widthSegments,e.heightSegments)}}var CT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,OT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,FT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$T=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,v1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,P1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,W1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ib=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$b=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:CT,alphahash_pars_fragment:DT,alphamap_fragment:LT,alphamap_pars_fragment:UT,alphatest_fragment:NT,alphatest_pars_fragment:OT,aomap_fragment:zT,aomap_pars_fragment:PT,batching_pars_vertex:BT,batching_vertex:IT,begin_vertex:FT,beginnormal_vertex:HT,bsdfs:GT,iridescence_fragment:VT,bumpmap_pars_fragment:XT,clipping_planes_fragment:WT,clipping_planes_pars_fragment:qT,clipping_planes_pars_vertex:YT,clipping_planes_vertex:kT,color_fragment:jT,color_pars_fragment:ZT,color_pars_vertex:QT,color_vertex:KT,common:JT,cube_uv_reflection_fragment:$T,defaultnormal_vertex:t1,displacementmap_pars_vertex:e1,displacementmap_vertex:n1,emissivemap_fragment:i1,emissivemap_pars_fragment:a1,colorspace_fragment:r1,colorspace_pars_fragment:s1,envmap_fragment:o1,envmap_common_pars_fragment:l1,envmap_pars_fragment:u1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:M1,envmap_vertex:f1,fog_vertex:h1,fog_pars_vertex:d1,fog_fragment:p1,fog_pars_fragment:m1,gradientmap_pars_fragment:g1,lightmap_fragment:_1,lightmap_pars_fragment:v1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:S1,lights_pars_begin:x1,lights_toon_fragment:E1,lights_toon_pars_fragment:T1,lights_phong_fragment:b1,lights_phong_pars_fragment:A1,lights_physical_fragment:R1,lights_physical_pars_fragment:w1,lights_fragment_begin:C1,lights_fragment_maps:D1,lights_fragment_end:L1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:z1,map_fragment:P1,map_pars_fragment:B1,map_particle_fragment:I1,map_particle_pars_fragment:F1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:G1,morphcolor_vertex:V1,morphnormal_vertex:X1,morphtarget_pars_vertex:W1,morphtarget_vertex:q1,normal_fragment_begin:Y1,normal_fragment_maps:k1,normal_pars_fragment:j1,normal_pars_vertex:Z1,normal_vertex:Q1,normalmap_pars_fragment:K1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:tb,iridescence_pars_fragment:eb,opaque_fragment:nb,packing:ib,premultiplied_alpha_fragment:ab,project_vertex:rb,dithering_fragment:sb,dithering_pars_fragment:ob,roughnessmap_fragment:lb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:cb,shadowmap_pars_vertex:fb,shadowmap_vertex:hb,shadowmask_pars_fragment:db,skinbase_vertex:pb,skinning_pars_vertex:mb,skinning_vertex:gb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:yb,tonemapping_fragment:Sb,tonemapping_pars_fragment:xb,transmission_fragment:Mb,transmission_pars_fragment:Eb,uv_pars_fragment:Tb,uv_pars_vertex:bb,uv_vertex:Ab,worldpos_vertex:Rb,background_vert:wb,background_frag:Cb,backgroundCube_vert:Db,backgroundCube_frag:Lb,cube_vert:Ub,cube_frag:Nb,depth_vert:Ob,depth_frag:zb,distanceRGBA_vert:Pb,distanceRGBA_frag:Bb,equirect_vert:Ib,equirect_frag:Fb,linedashed_vert:Hb,linedashed_frag:Gb,meshbasic_vert:Vb,meshbasic_frag:Xb,meshlambert_vert:Wb,meshlambert_frag:qb,meshmatcap_vert:Yb,meshmatcap_frag:kb,meshnormal_vert:jb,meshnormal_frag:Zb,meshphong_vert:Qb,meshphong_frag:Kb,meshphysical_vert:Jb,meshphysical_frag:$b,meshtoon_vert:tA,meshtoon_frag:eA,points_vert:nA,points_frag:iA,shadow_vert:aA,shadow_frag:rA,sprite_vert:sA,sprite_frag:oA},Lt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},ra={basic:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Yn([Lt.points,Lt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Yn([Lt.common,Lt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Yn([Lt.sprite,Lt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Yn([Lt.lights,Lt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ra.physical={uniforms:Yn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const mc={r:0,b:0,g:0};function lA(o,e,i,s,l,f,d){const h=new Ae(0);let p=f===!0?0:1,g,_,m=null,y=0,M=null;function A(x,S){let z=!1,C=S.isScene===!0?S.background:null;C&&C.isTexture&&(C=(S.backgroundBlurriness>0?i:e).get(C)),C===null?R(h,p):C&&C.isColor&&(R(C,1),z=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||z)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===zc)?(_===void 0&&(_=new Ye(new yr(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:_o(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(X,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,_.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Ke,(m!==C||y!==C.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,m=C,y=C.version,M=o.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(g===void 0&&(g=new Ye(new ho(2,2),new $r({name:"BackgroundMaterial",uniforms:_o(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=C,g.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,g.material.toneMapped=Xe.getTransfer(C.colorSpace)!==Ke,C.matrixAutoUpdate===!0&&C.updateMatrix(),g.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||y!==C.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,m=C,y=C.version,M=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null))}function R(x,S){x.getRGB(mc,jy(o)),s.buffers.color.setClear(mc.r,mc.g,mc.b,S,d)}return{getClearColor:function(){return h},setClearColor:function(x,S=1){h.set(x),p=S,R(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(x){p=x,R(h,p)},render:A}}function uA(o,e,i,s){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),f=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||f!==null,h={},p=x(null);let g=p,_=!1;function m(W,et,H,st,it){let ft=!1;if(d){const ht=R(st,H,et);g!==ht&&(g=ht,M(g.object)),ft=S(W,st,H,it),ft&&z(W,st,H,it)}else{const ht=et.wireframe===!0;(g.geometry!==st.id||g.program!==H.id||g.wireframe!==ht)&&(g.geometry=st.id,g.program=H.id,g.wireframe=ht,ft=!0)}it!==null&&i.update(it,o.ELEMENT_ARRAY_BUFFER),(ft||_)&&(_=!1,rt(W,et,H,st),it!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(it).buffer))}function y(){return s.isWebGL2?o.createVertexArray():f.createVertexArrayOES()}function M(W){return s.isWebGL2?o.bindVertexArray(W):f.bindVertexArrayOES(W)}function A(W){return s.isWebGL2?o.deleteVertexArray(W):f.deleteVertexArrayOES(W)}function R(W,et,H){const st=H.wireframe===!0;let it=h[W.id];it===void 0&&(it={},h[W.id]=it);let ft=it[et.id];ft===void 0&&(ft={},it[et.id]=ft);let ht=ft[st];return ht===void 0&&(ht=x(y()),ft[st]=ht),ht}function x(W){const et=[],H=[],st=[];for(let it=0;it<l;it++)et[it]=0,H[it]=0,st[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:H,attributeDivisors:st,object:W,attributes:{},index:null}}function S(W,et,H,st){const it=g.attributes,ft=et.attributes;let ht=0;const Et=H.getAttributes();for(const Tt in Et)if(Et[Tt].location>=0){const L=it[Tt];let K=ft[Tt];if(K===void 0&&(Tt==="instanceMatrix"&&W.instanceMatrix&&(K=W.instanceMatrix),Tt==="instanceColor"&&W.instanceColor&&(K=W.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;ht++}return g.attributesNum!==ht||g.index!==st}function z(W,et,H,st){const it={},ft=et.attributes;let ht=0;const Et=H.getAttributes();for(const Tt in Et)if(Et[Tt].location>=0){let L=ft[Tt];L===void 0&&(Tt==="instanceMatrix"&&W.instanceMatrix&&(L=W.instanceMatrix),Tt==="instanceColor"&&W.instanceColor&&(L=W.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),it[Tt]=K,ht++}g.attributes=it,g.attributesNum=ht,g.index=st}function C(){const W=g.newAttributes;for(let et=0,H=W.length;et<H;et++)W[et]=0}function N(W){X(W,0)}function X(W,et){const H=g.newAttributes,st=g.enabledAttributes,it=g.attributeDivisors;H[W]=1,st[W]===0&&(o.enableVertexAttribArray(W),st[W]=1),it[W]!==et&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,et),it[W]=et)}function B(){const W=g.newAttributes,et=g.enabledAttributes;for(let H=0,st=et.length;H<st;H++)et[H]!==W[H]&&(o.disableVertexAttribArray(H),et[H]=0)}function O(W,et,H,st,it,ft,ht){ht===!0?o.vertexAttribIPointer(W,et,H,it,ft):o.vertexAttribPointer(W,et,H,st,it,ft)}function rt(W,et,H,st){if(s.isWebGL2===!1&&(W.isInstancedMesh||st.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const it=st.attributes,ft=H.getAttributes(),ht=et.defaultAttributeValues;for(const Et in ft){const Tt=ft[Et];if(Tt.location>=0){let ct=it[Et];if(ct===void 0&&(Et==="instanceMatrix"&&W.instanceMatrix&&(ct=W.instanceMatrix),Et==="instanceColor"&&W.instanceColor&&(ct=W.instanceColor)),ct!==void 0){const L=ct.normalized,K=ct.itemSize,mt=i.get(ct);if(mt===void 0)continue;const gt=mt.buffer,Ot=mt.type,Ut=mt.bytesPerElement,Rt=s.isWebGL2===!0&&(Ot===o.INT||Ot===o.UNSIGNED_INT||ct.gpuType===Dy);if(ct.isInterleavedBufferAttribute){const Mt=ct.data,q=Mt.stride,Ne=ct.offset;if(Mt.isInstancedInterleavedBuffer){for(let qt=0;qt<Tt.locationSize;qt++)X(Tt.location+qt,Mt.meshPerAttribute);W.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let qt=0;qt<Tt.locationSize;qt++)N(Tt.location+qt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let qt=0;qt<Tt.locationSize;qt++)O(Tt.location+qt,K/Tt.locationSize,Ot,L,q*Ut,(Ne+K/Tt.locationSize*qt)*Ut,Rt)}else{if(ct.isInstancedBufferAttribute){for(let Mt=0;Mt<Tt.locationSize;Mt++)X(Tt.location+Mt,ct.meshPerAttribute);W.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Mt=0;Mt<Tt.locationSize;Mt++)N(Tt.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Mt=0;Mt<Tt.locationSize;Mt++)O(Tt.location+Mt,K/Tt.locationSize,Ot,L,K*Ut,K/Tt.locationSize*Mt*Ut,Rt)}}else if(ht!==void 0){const L=ht[Et];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Tt.location,L);break;case 3:o.vertexAttrib3fv(Tt.location,L);break;case 4:o.vertexAttrib4fv(Tt.location,L);break;default:o.vertexAttrib1fv(Tt.location,L)}}}}B()}function b(){nt();for(const W in h){const et=h[W];for(const H in et){const st=et[H];for(const it in st)A(st[it].object),delete st[it];delete et[H]}delete h[W]}}function D(W){if(h[W.id]===void 0)return;const et=h[W.id];for(const H in et){const st=et[H];for(const it in st)A(st[it].object),delete st[it];delete et[H]}delete h[W.id]}function lt(W){for(const et in h){const H=h[et];if(H[W.id]===void 0)continue;const st=H[W.id];for(const it in st)A(st[it].object),delete st[it];delete H[W.id]}}function nt(){_t(),_=!0,g!==p&&(g=p,M(g.object))}function _t(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:m,reset:nt,resetDefaultState:_t,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:lt,initAttributes:C,enableAttribute:N,disableUnusedAttributes:B}}function cA(o,e,i,s){const l=s.isWebGL2;let f;function d(_){f=_}function h(_,m){o.drawArrays(f,_,m),i.update(m,f,1)}function p(_,m,y){if(y===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](f,_,m,y),i.update(m,f,y)}function g(_,m,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<y;A++)this.render(_[A],m[A]);else{M.multiDrawArraysWEBGL(f,_,0,m,0,y);let A=0;for(let R=0;R<y;R++)A+=m[R];i.update(A,f,1)}}this.setMode=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=g}function fA(o,e,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function f(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=d||e.has("WEBGL_draw_buffers"),_=i.logarithmicDepthBuffer===!0,m=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),S=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=y>0,N=d||e.has("OES_texture_float"),X=C&&N,B=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:g,getMaxAnisotropy:l,getMaxPrecision:f,precision:h,logarithmicDepthBuffer:_,maxTextures:m,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:A,maxAttributes:R,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:z,vertexTextures:C,floatFragmentTextures:N,floatVertexTextures:X,maxSamples:B}}function hA(o){const e=this;let i=null,s=0,l=!1,f=!1;const d=new Yr,h=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const M=m.length!==0||y||s!==0||l;return l=y,s=m.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,y){i=_(m,y,0)},this.setState=function(m,y,M){const A=m.clippingPlanes,R=m.clipIntersection,x=m.clipShadows,S=o.get(m);if(!l||A===null||A.length===0||f&&!x)f?_(null):g();else{const z=f?0:s,C=z*4;let N=S.clippingState||null;p.value=N,N=_(A,y,C,M);for(let X=0;X!==C;++X)N[X]=i[X];S.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(m,y,M,A){const R=m!==null?m.length:0;let x=null;if(R!==0){if(x=p.value,A!==!0||x===null){const S=M+R*4,z=y.matrixWorldInverse;h.getNormalMatrix(z),(x===null||x.length<S)&&(x=new Float32Array(S));for(let C=0,N=M;C!==R;++C,N+=4)d.copy(m[C]).applyMatrix4(z,h),d.normal.toArray(x,N),x[N+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}function dA(o){let e=new WeakMap;function i(d,h){return h===lp?d.mapping=po:h===up&&(d.mapping=mo),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===lp||h===up)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new bT(p.height/2);return g.fromEquirectangularTexture(o,d),e.set(d,g),d.addEventListener("dispose",l),i(g.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}class Jy extends Zy{constructor(e=-1,i=1,s=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,d=f+g*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const lo=4,Xv=[.125,.215,.35,.446,.526,.582],Zr=20,Xd=new Jy,Wv=new Ae;let Wd=null,qd=0,Yd=0;const kr=(1+Math.sqrt(5))/2,io=1/kr,qv=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,kr,io),new G(0,kr,-io),new G(io,0,kr),new G(-io,0,kr),new G(kr,io,0),new G(-kr,io,0)];class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,l,f),i>0&&this._blur(f,0,0,i),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,qd,Yd),e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:bl,format:Xi,colorSpace:Ua,depthBuffer:!1},l=kv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kv(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pA(f)),this._blurMaterial=mA(f,e,i)}return l}_compileMaterial(e){const i=new Ye(this._lodPlanes[0],e);this._renderer.compile(i,Xd)}_sceneToCubeUV(e,i,s,l){const h=new Di(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,y=_.toneMapping;_.getClearColor(Wv),_.toneMapping=mr,_.autoClear=!1;const M=new Nc({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),A=new Ye(new yr,M);let R=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,R=!0):(M.color.copy(Wv),R=!0);for(let S=0;S<6;S++){const z=S%3;z===0?(h.up.set(0,p[S],0),h.lookAt(g[S],0,0)):z===1?(h.up.set(0,0,p[S]),h.lookAt(0,g[S],0)):(h.up.set(0,p[S],0),h.lookAt(0,0,g[S]));const C=this._cubeSize;gc(l,z*C,S>2?C:0,C,C),_.setRenderTarget(l),R&&_.render(A,h),_.render(e,h)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=m,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===po||e.mapping===mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jv());const f=l?this._cubemapMaterial:this._equirectMaterial,d=new Ye(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;gc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Xd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const f=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=qv[(l-1)%qv.length];this._blur(e,l-1,l,f,d)}i.autoClear=s}_blur(e,i,s,l,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",f),this._halfBlur(d,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,d,h){const p=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,m=new Ye(this._lodPlanes[l],g),y=g.uniforms,M=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),R=f/A,x=isFinite(f)?1+Math.floor(_*R):Zr;x>Zr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zr}`);const S=[];let z=0;for(let O=0;O<Zr;++O){const rt=O/R,b=Math.exp(-rt*rt/2);S.push(b),O===0?z+=b:O<x&&(z+=2*b)}for(let O=0;O<S.length;O++)S[O]=S[O]/z;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=S,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:C}=this;y.dTheta.value=A,y.mipInt.value=C-s;const N=this._sizeLods[l],X=3*N*(l>C-lo?l-C+lo:0),B=4*(this._cubeSize-N);gc(i,X,B,3*N,2*N),p.setRenderTarget(i),p.render(m,Xd)}}function pA(o){const e=[],i=[],s=[];let l=o;const f=o-lo+1+Xv.length;for(let d=0;d<f;d++){const h=Math.pow(2,l);i.push(h);let p=1/h;d>o-lo?p=Xv[d-o+lo-1]:d===0&&(p=0),s.push(p);const g=1/(h-2),_=-g,m=1+g,y=[_,_,m,_,m,m,_,_,m,m,_,m],M=6,A=6,R=3,x=2,S=1,z=new Float32Array(R*A*M),C=new Float32Array(x*A*M),N=new Float32Array(S*A*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,rt=B>2?0:-1,b=[O,rt,0,O+2/3,rt,0,O+2/3,rt+1,0,O,rt,0,O+2/3,rt+1,0,O,rt+1,0];z.set(b,R*A*B),C.set(y,x*A*B);const D=[B,B,B,B,B,B];N.set(D,S*A*B)}const X=new Nn;X.setAttribute("position",new ai(z,R)),X.setAttribute("uv",new ai(C,x)),X.setAttribute("faceIndex",new ai(N,S)),e.push(X),l>lo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function kv(o,e,i){const s=new Jr(o,e,i);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function mA(o,e,i){const s=new Float32Array(Zr),l=new G(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function jv(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Zv(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gA(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const p=h.mapping,g=p===lp||p===up,_=p===po||p===mo;if(g||_)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let m=e.get(h);return i===null&&(i=new Yv(o)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),e.set(h,m),m.texture}else{if(e.has(h))return e.get(h).texture;{const m=h.image;if(g&&m&&m.height>0||_&&m&&l(m)){i===null&&(i=new Yv(o));const y=g?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,y),h.addEventListener("dispose",f),y.texture}else return null}}}return h}function l(h){let p=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function f(h){const p=h.target;p.removeEventListener("dispose",f);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function _A(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function vA(o,e,i,s){const l={},f=new WeakMap;function d(m){const y=m.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const R=y.morphAttributes[A];for(let x=0,S=R.length;x<S;x++)e.remove(R[x])}y.removeEventListener("dispose",d),delete l[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(m,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function p(m){const y=m.attributes;for(const A in y)e.update(y[A],o.ARRAY_BUFFER);const M=m.morphAttributes;for(const A in M){const R=M[A];for(let x=0,S=R.length;x<S;x++)e.update(R[x],o.ARRAY_BUFFER)}}function g(m){const y=[],M=m.index,A=m.attributes.position;let R=0;if(M!==null){const z=M.array;R=M.version;for(let C=0,N=z.length;C<N;C+=3){const X=z[C+0],B=z[C+1],O=z[C+2];y.push(X,B,B,O,O,X)}}else if(A!==void 0){const z=A.array;R=A.version;for(let C=0,N=z.length/3-1;C<N;C+=3){const X=C+0,B=C+1,O=C+2;y.push(X,B,B,O,O,X)}}else return;const x=new(Hy(y)?ky:Yy)(y,1);x.version=R;const S=f.get(m);S&&e.remove(S),f.set(m,x)}function _(m){const y=f.get(m);if(y){const M=m.index;M!==null&&y.version<M.version&&g(m)}else g(m);return f.get(m)}return{get:h,update:p,getWireframeAttribute:_}}function yA(o,e,i,s){const l=s.isWebGL2;let f;function d(M){f=M}let h,p;function g(M){h=M.type,p=M.bytesPerElement}function _(M,A){o.drawElements(f,A,h,M*p),i.update(A,f,1)}function m(M,A,R){if(R===0)return;let x,S;if(l)x=o,S="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](f,A,h,M*p,R),i.update(A,f,R)}function y(M,A,R){if(R===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<R;S++)this.render(M[S]/p,A[S]);else{x.multiDrawElementsWEBGL(f,A,0,h,M,0,R);let S=0;for(let z=0;z<R;z++)S+=A[z];i.update(S,f,1)}}this.setMode=d,this.setIndex=g,this.render=_,this.renderInstances=m,this.renderMultiDraw=y}function SA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xA(o,e){return o[0]-e[0]}function MA(o,e){return Math.abs(e[1])-Math.abs(o[1])}function EA(o,e,i){const s={},l=new Float32Array(8),f=new WeakMap,d=new Tn,h=[];for(let g=0;g<8;g++)h[g]=[g,0];function p(g,_,m){const y=g.morphTargetInfluences;if(e.isWebGL2===!0){const A=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,R=A!==void 0?A.length:0;let x=f.get(_);if(x===void 0||x.count!==R){let et=function(){_t.dispose(),f.delete(_),_.removeEventListener("dispose",et)};var M=et;x!==void 0&&x.texture.dispose();const C=_.morphAttributes.position!==void 0,N=_.morphAttributes.normal!==void 0,X=_.morphAttributes.color!==void 0,B=_.morphAttributes.position||[],O=_.morphAttributes.normal||[],rt=_.morphAttributes.color||[];let b=0;C===!0&&(b=1),N===!0&&(b=2),X===!0&&(b=3);let D=_.attributes.position.count*b,lt=1;D>e.maxTextureSize&&(lt=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const nt=new Float32Array(D*lt*4*R),_t=new Xy(nt,D,lt,R);_t.type=dr,_t.needsUpdate=!0;const W=b*4;for(let H=0;H<R;H++){const st=B[H],it=O[H],ft=rt[H],ht=D*lt*4*H;for(let Et=0;Et<st.count;Et++){const Tt=Et*W;C===!0&&(d.fromBufferAttribute(st,Et),nt[ht+Tt+0]=d.x,nt[ht+Tt+1]=d.y,nt[ht+Tt+2]=d.z,nt[ht+Tt+3]=0),N===!0&&(d.fromBufferAttribute(it,Et),nt[ht+Tt+4]=d.x,nt[ht+Tt+5]=d.y,nt[ht+Tt+6]=d.z,nt[ht+Tt+7]=0),X===!0&&(d.fromBufferAttribute(ft,Et),nt[ht+Tt+8]=d.x,nt[ht+Tt+9]=d.y,nt[ht+Tt+10]=d.z,nt[ht+Tt+11]=ft.itemSize===4?d.w:1)}}x={count:R,texture:_t,size:new Zt(D,lt)},f.set(_,x),_.addEventListener("dispose",et)}let S=0;for(let C=0;C<y.length;C++)S+=y[C];const z=_.morphTargetsRelative?1:1-S;m.getUniforms().setValue(o,"morphTargetBaseInfluence",z),m.getUniforms().setValue(o,"morphTargetInfluences",y),m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const A=y===void 0?0:y.length;let R=s[_.id];if(R===void 0||R.length!==A){R=[];for(let N=0;N<A;N++)R[N]=[N,0];s[_.id]=R}for(let N=0;N<A;N++){const X=R[N];X[0]=N,X[1]=y[N]}R.sort(MA);for(let N=0;N<8;N++)N<A&&R[N][1]?(h[N][0]=R[N][0],h[N][1]=R[N][1]):(h[N][0]=Number.MAX_SAFE_INTEGER,h[N][1]=0);h.sort(xA);const x=_.morphAttributes.position,S=_.morphAttributes.normal;let z=0;for(let N=0;N<8;N++){const X=h[N],B=X[0],O=X[1];B!==Number.MAX_SAFE_INTEGER&&O?(x&&_.getAttribute("morphTarget"+N)!==x[B]&&_.setAttribute("morphTarget"+N,x[B]),S&&_.getAttribute("morphNormal"+N)!==S[B]&&_.setAttribute("morphNormal"+N,S[B]),l[N]=O,z+=O):(x&&_.hasAttribute("morphTarget"+N)===!0&&_.deleteAttribute("morphTarget"+N),S&&_.hasAttribute("morphNormal"+N)===!0&&_.deleteAttribute("morphNormal"+N),l[N]=0)}const C=_.morphTargetsRelative?1:1-z;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:p}}function TA(o,e,i,s){let l=new WeakMap;function f(p){const g=s.render.frame,_=p.geometry,m=e.get(p,_);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return m}function d(){l=new WeakMap}function h(p){const g=p.target;g.removeEventListener("dispose",h),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:d}}class $y extends ii{constructor(e,i,s,l,f,d,h,p,g,_){if(_=_!==void 0?_:Kr,_!==Kr&&_!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Kr&&(s=hr),s===void 0&&_===go&&(s=Qr),super(null,l,f,d,h,p,_,s,g),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:kn,this.minFilter=p!==void 0?p:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const tS=new ii,eS=new $y(1,1);eS.compareFunction=Fy;const nS=new Xy,iS=new lT,aS=new Qy,Qv=[],Kv=[],Jv=new Float32Array(16),$v=new Float32Array(9),ty=new Float32Array(4);function So(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=Qv[l];if(f===void 0&&(f=new Float32Array(l),Qv[l]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ic(o,e){let i=Kv[e];i===void 0&&(i=new Int32Array(e),Kv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function bA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function AA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function RA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function wA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function CA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;ty.set(s),o.uniformMatrix2fv(this.addr,!1,ty),vn(i,s)}}function DA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;$v.set(s),o.uniformMatrix3fv(this.addr,!1,$v),vn(i,s)}}function LA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;Jv.set(s),o.uniformMatrix4fv(this.addr,!1,Jv),vn(i,s)}}function UA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function NA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function OA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function zA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function PA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function BA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function IA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function HA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);const f=this.type===o.SAMPLER_2D_SHADOW?eS:tS;i.setTexture2D(e||f,l)}function GA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||iS,l)}function VA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||aS,l)}function XA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||nS,l)}function WA(o){switch(o){case 5126:return bA;case 35664:return AA;case 35665:return RA;case 35666:return wA;case 35674:return CA;case 35675:return DA;case 35676:return LA;case 5124:case 35670:return UA;case 35667:case 35671:return NA;case 35668:case 35672:return OA;case 35669:case 35673:return zA;case 5125:return PA;case 36294:return BA;case 36295:return IA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return XA}}function qA(o,e){o.uniform1fv(this.addr,e)}function YA(o,e){const i=So(e,this.size,2);o.uniform2fv(this.addr,i)}function kA(o,e){const i=So(e,this.size,3);o.uniform3fv(this.addr,i)}function jA(o,e){const i=So(e,this.size,4);o.uniform4fv(this.addr,i)}function ZA(o,e){const i=So(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function QA(o,e){const i=So(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function KA(o,e){const i=So(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function JA(o,e){o.uniform1iv(this.addr,e)}function $A(o,e){o.uniform2iv(this.addr,e)}function tR(o,e){o.uniform3iv(this.addr,e)}function eR(o,e){o.uniform4iv(this.addr,e)}function nR(o,e){o.uniform1uiv(this.addr,e)}function iR(o,e){o.uniform2uiv(this.addr,e)}function aR(o,e){o.uniform3uiv(this.addr,e)}function rR(o,e){o.uniform4uiv(this.addr,e)}function sR(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||tS,f[d])}function oR(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||iS,f[d])}function lR(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||aS,f[d])}function uR(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||nS,f[d])}function cR(o){switch(o){case 5126:return qA;case 35664:return YA;case 35665:return kA;case 35666:return jA;case 35674:return ZA;case 35675:return QA;case 35676:return KA;case 5124:case 35670:return JA;case 35667:case 35671:return $A;case 35668:case 35672:return tR;case 35669:case 35673:return eR;case 5125:return nR;case 36294:return iR;case 36295:return aR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return oR;case 35680:case 36300:case 36308:case 36293:return lR;case 36289:case 36303:case 36311:case 36292:return uR}}class fR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=WA(i.type)}}class hR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cR(i.type)}}class dR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],s)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function ey(o,e){o.seq.push(e),o.map[e.id]=e}function pR(o,e,i){const s=o.name,l=s.length;for(kd.lastIndex=0;;){const f=kd.exec(s),d=kd.lastIndex;let h=f[1];const p=f[2]==="]",g=f[3];if(p&&(h=h|0),g===void 0||g==="["&&d+2===l){ey(i,g===void 0?new fR(h,o,e):new hR(h,o,e));break}else{let m=i.map[h];m===void 0&&(m=new dR(h),ey(i,m)),i=m}}}class Tc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=e.getActiveUniform(i,l),d=e.getUniformLocation(i,f.name);pR(f,d,this)}}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function ny(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const mR=37297;let gR=0;function _R(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function vR(o){const e=Xe.getPrimaries(Xe.workingColorSpace),i=Xe.getPrimaries(o);let s;switch(e===i?s="":e===Dc&&i===Cc?s="LinearDisplayP3ToLinearSRGB":e===Cc&&i===Dc&&(s="LinearSRGBToLinearDisplayP3"),o){case Ua:case Pc:return[s,"LinearTransferOETF"];case Un:case xp:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function iy(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const f=/ERROR: 0:(\d+)/.exec(l);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+l+`

`+_R(o.getShaderSource(e),d)}else return l}function yR(o,e){const i=vR(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function SR(o,e){let i;switch(e){case UE:i="Linear";break;case NE:i="Reinhard";break;case OE:i="OptimizedCineon";break;case wy:i="ACESFilmic";break;case PE:i="AgX";break;case zE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function xR(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(uo).join(`
`)}function MR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(uo).join(`
`)}function ER(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function TR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function uo(o){return o!==""}function ay(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ry(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bR=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(o){return o.replace(bR,RR)}const AR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RR(o,e){let i=me[e];if(i===void 0){const s=AR.get(e);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return mp(i)}const wR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sy(o){return o.replace(wR,CR)}function CR(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function oy(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===by?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ay?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ra&&(e="SHADOWMAP_TYPE_VSM"),e}function LR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function NR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ry:e="ENVMAP_BLENDING_MULTIPLY";break;case DE:e="ENVMAP_BLENDING_MIX";break;case LE:e="ENVMAP_BLENDING_ADD";break}return e}function OR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function zR(o,e,i,s){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=DR(i),g=LR(i),_=UR(i),m=NR(i),y=OR(i),M=i.isWebGL2?"":xR(i),A=MR(i),R=ER(f),x=l.createProgram();let S,z,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(uo).join(`
`),S.length>0&&(S+=`
`),z=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(uo).join(`
`),z.length>0&&(z+=`
`)):(S=[oy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),z=[M,oy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",i.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==mr?"#define TONE_MAPPING":"",i.toneMapping!==mr?me.tonemapping_pars_fragment:"",i.toneMapping!==mr?SR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,yR("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(uo).join(`
`)),d=mp(d),d=ay(d,i),d=ry(d,i),h=mp(h),h=ay(h,i),h=ry(h,i),d=sy(d),h=sy(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,z=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+z);const N=C+S+d,X=C+z+h,B=ny(l,l.VERTEX_SHADER,N),O=ny(l,l.FRAGMENT_SHADER,X);l.attachShader(x,B),l.attachShader(x,O),i.index0AttributeName!==void 0?l.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(x,0,"position"),l.linkProgram(x);function rt(nt){if(o.debug.checkShaderErrors){const _t=l.getProgramInfoLog(x).trim(),W=l.getShaderInfoLog(B).trim(),et=l.getShaderInfoLog(O).trim();let H=!0,st=!0;if(l.getProgramParameter(x,l.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,x,B,O);else{const it=iy(l,B,"vertex"),ft=iy(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(x,l.VALIDATE_STATUS)+`

Program Info Log: `+_t+`
`+it+`
`+ft)}else _t!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_t):(W===""||et==="")&&(st=!1);st&&(nt.diagnostics={runnable:H,programLog:_t,vertexShader:{log:W,prefix:S},fragmentShader:{log:et,prefix:z}})}l.deleteShader(B),l.deleteShader(O),b=new Tc(l,x),D=TR(l,x)}let b;this.getUniforms=function(){return b===void 0&&rt(this),b};let D;this.getAttributes=function(){return D===void 0&&rt(this),D};let lt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return lt===!1&&(lt=l.getProgramParameter(x,mR)),lt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=gR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=O,this}let PR=0;class BR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new IR(e),i.set(e,s)),s}}class IR{constructor(e){this.id=PR++,this.code=e,this.usedTimes=0}}function FR(o,e,i,s,l,f,d){const h=new Wy,p=new BR,g=[],_=l.isWebGL2,m=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return b===0?"uv":`uv${b}`}function x(b,D,lt,nt,_t){const W=nt.fog,et=_t.geometry,H=b.isMeshStandardMaterial?nt.environment:null,st=(b.isMeshStandardMaterial?i:e).get(b.envMap||H),it=st&&st.mapping===zc?st.image.height:null,ft=A[b.type];b.precision!==null&&(M=l.getMaxPrecision(b.precision),M!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const ht=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Et=ht!==void 0?ht.length:0;let Tt=0;et.morphAttributes.position!==void 0&&(Tt=1),et.morphAttributes.normal!==void 0&&(Tt=2),et.morphAttributes.color!==void 0&&(Tt=3);let ct,L,K,mt;if(ft){const Ce=ra[ft];ct=Ce.vertexShader,L=Ce.fragmentShader}else ct=b.vertexShader,L=b.fragmentShader,p.update(b),K=p.getVertexShaderID(b),mt=p.getFragmentShaderID(b);const gt=o.getRenderTarget(),Ot=_t.isInstancedMesh===!0,Ut=_t.isBatchedMesh===!0,Rt=!!b.map,Mt=!!b.matcap,q=!!st,Ne=!!b.aoMap,qt=!!b.lightMap,se=!!b.bumpMap,Ft=!!b.normalMap,ce=!!b.displacementMap,Ht=!!b.emissiveMap,U=!!b.metalnessMap,w=!!b.roughnessMap,ot=b.anisotropy>0,xt=b.clearcoat>0,St=b.iridescence>0,vt=b.sheen>0,Xt=b.transmission>0,At=ot&&!!b.anisotropyMap,It=xt&&!!b.clearcoatMap,te=xt&&!!b.clearcoatNormalMap,ae=xt&&!!b.clearcoatRoughnessMap,yt=St&&!!b.iridescenceMap,Ee=St&&!!b.iridescenceThicknessMap,fe=vt&&!!b.sheenColorMap,ee=vt&&!!b.sheenRoughnessMap,kt=!!b.specularMap,ut=!!b.specularColorMap,oe=!!b.specularIntensityMap,ye=Xt&&!!b.transmissionMap,Oe=Xt&&!!b.thicknessMap,Yt=!!b.gradientMap,bt=!!b.alphaMap,V=b.alphaTest>0,Nt=!!b.alphaHash,wt=!!b.extensions,Kt=!!et.attributes.uv1,ne=!!et.attributes.uv2,ze=!!et.attributes.uv3;let Pe=mr;return b.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Pe=o.toneMapping),{isWebGL2:_,shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:L,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:Ut,instancing:Ot,instancingColor:Ot&&_t.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ua,map:Rt,matcap:Mt,envMap:q,envMapMode:q&&st.mapping,envMapCubeUVHeight:it,aoMap:Ne,lightMap:qt,bumpMap:se,normalMap:Ft,displacementMap:y&&ce,emissiveMap:Ht,normalMapObjectSpace:Ft&&b.normalMapType===jE,normalMapTangentSpace:Ft&&b.normalMapType===Iy,metalnessMap:U,roughnessMap:w,anisotropy:ot,anisotropyMap:At,clearcoat:xt,clearcoatMap:It,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,iridescence:St,iridescenceMap:yt,iridescenceThicknessMap:Ee,sheen:vt,sheenColorMap:fe,sheenRoughnessMap:ee,specularMap:kt,specularColorMap:ut,specularIntensityMap:oe,transmission:Xt,transmissionMap:ye,thicknessMap:Oe,gradientMap:Yt,opaque:b.transparent===!1&&b.blending===co,alphaMap:bt,alphaTest:V,alphaHash:Nt,combine:b.combine,mapUv:Rt&&R(b.map.channel),aoMapUv:Ne&&R(b.aoMap.channel),lightMapUv:qt&&R(b.lightMap.channel),bumpMapUv:se&&R(b.bumpMap.channel),normalMapUv:Ft&&R(b.normalMap.channel),displacementMapUv:ce&&R(b.displacementMap.channel),emissiveMapUv:Ht&&R(b.emissiveMap.channel),metalnessMapUv:U&&R(b.metalnessMap.channel),roughnessMapUv:w&&R(b.roughnessMap.channel),anisotropyMapUv:At&&R(b.anisotropyMap.channel),clearcoatMapUv:It&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:ee&&R(b.sheenRoughnessMap.channel),specularMapUv:kt&&R(b.specularMap.channel),specularColorMapUv:ut&&R(b.specularColorMap.channel),specularIntensityMapUv:oe&&R(b.specularIntensityMap.channel),transmissionMapUv:ye&&R(b.transmissionMap.channel),thicknessMapUv:Oe&&R(b.thicknessMap.channel),alphaMapUv:bt&&R(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Ft||ot),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,vertexUv1s:Kt,vertexUv2s:ne,vertexUv3s:ze,pointsUvs:_t.isPoints===!0&&!!et.attributes.uv&&(Rt||bt),fog:!!W,useFog:b.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:_t.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Tt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&lt.length>0,shadowMapType:o.shadowMap.type,toneMapping:Pe,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===Ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sa,flipSided:b.side===jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:wt&&b.extensions.derivatives===!0,extensionFragDepth:wt&&b.extensions.fragDepth===!0,extensionDrawBuffers:wt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&b.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:_||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function S(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const lt in b.defines)D.push(lt),D.push(b.defines[lt]);return b.isRawShaderMaterial===!1&&(z(D,b),C(D,b),D.push(o.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function z(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function C(b,D){h.disableAll(),D.isWebGL2&&h.enable(0),D.supportsVertexTextures&&h.enable(1),D.instancing&&h.enable(2),D.instancingColor&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),b.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.skinning&&h.enable(4),D.morphTargets&&h.enable(5),D.morphNormals&&h.enable(6),D.morphColors&&h.enable(7),D.premultipliedAlpha&&h.enable(8),D.shadowMapEnabled&&h.enable(9),D.useLegacyLights&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),b.push(h.mask)}function N(b){const D=A[b.type];let lt;if(D){const nt=ra[D];lt=xT.clone(nt.uniforms)}else lt=b.uniforms;return lt}function X(b,D){let lt;for(let nt=0,_t=g.length;nt<_t;nt++){const W=g[nt];if(W.cacheKey===D){lt=W,++lt.usedTimes;break}}return lt===void 0&&(lt=new zR(o,D,b,f),g.push(lt)),lt}function B(b){if(--b.usedTimes===0){const D=g.indexOf(b);g[D]=g[g.length-1],g.pop(),b.destroy()}}function O(b){p.remove(b)}function rt(){p.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:N,acquireProgram:X,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:rt}}function HR(){let o=new WeakMap;function e(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function i(f){o.delete(f)}function s(f,d,h){o.get(f)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function GR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ly(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function uy(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function d(m,y,M,A,R,x){let S=o[e];return S===void 0?(S={id:m.id,object:m,geometry:y,material:M,groupOrder:A,renderOrder:m.renderOrder,z:R,group:x},o[e]=S):(S.id=m.id,S.object=m,S.geometry=y,S.material=M,S.groupOrder=A,S.renderOrder=m.renderOrder,S.z=R,S.group=x),e++,S}function h(m,y,M,A,R,x){const S=d(m,y,M,A,R,x);M.transmission>0?s.push(S):M.transparent===!0?l.push(S):i.push(S)}function p(m,y,M,A,R,x){const S=d(m,y,M,A,R,x);M.transmission>0?s.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function g(m,y){i.length>1&&i.sort(m||GR),s.length>1&&s.sort(y||ly),l.length>1&&l.sort(y||ly)}function _(){for(let m=e,y=o.length;m<y;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:h,unshift:p,finish:_,sort:g}}function VR(){let o=new WeakMap;function e(s,l){const f=o.get(s);let d;return f===void 0?(d=new uy,o.set(s,[d])):l>=f.length?(d=new uy,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function XR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new G,color:new Ae};break;case"SpotLight":i={position:new G,direction:new G,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=i,i}}}function WR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let qR=0;function YR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function kR(o,e){const i=new XR,s=WR(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)l.probe.push(new G);const f=new G,d=new tn,h=new tn;function p(_,m){let y=0,M=0,A=0;for(let nt=0;nt<9;nt++)l.probe[nt].set(0,0,0);let R=0,x=0,S=0,z=0,C=0,N=0,X=0,B=0,O=0,rt=0,b=0;_.sort(YR);const D=m===!0?Math.PI:1;for(let nt=0,_t=_.length;nt<_t;nt++){const W=_[nt],et=W.color,H=W.intensity,st=W.distance,it=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)y+=et.r*H*D,M+=et.g*H*D,A+=et.b*H*D;else if(W.isLightProbe){for(let ft=0;ft<9;ft++)l.probe[ft].addScaledVector(W.sh.coefficients[ft],H);b++}else if(W.isDirectionalLight){const ft=i.get(W);if(ft.color.copy(W.color).multiplyScalar(W.intensity*D),W.castShadow){const ht=W.shadow,Et=s.get(W);Et.shadowBias=ht.bias,Et.shadowNormalBias=ht.normalBias,Et.shadowRadius=ht.radius,Et.shadowMapSize=ht.mapSize,l.directionalShadow[R]=Et,l.directionalShadowMap[R]=it,l.directionalShadowMatrix[R]=W.shadow.matrix,N++}l.directional[R]=ft,R++}else if(W.isSpotLight){const ft=i.get(W);ft.position.setFromMatrixPosition(W.matrixWorld),ft.color.copy(et).multiplyScalar(H*D),ft.distance=st,ft.coneCos=Math.cos(W.angle),ft.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ft.decay=W.decay,l.spot[S]=ft;const ht=W.shadow;if(W.map&&(l.spotLightMap[O]=W.map,O++,ht.updateMatrices(W),W.castShadow&&rt++),l.spotLightMatrix[S]=ht.matrix,W.castShadow){const Et=s.get(W);Et.shadowBias=ht.bias,Et.shadowNormalBias=ht.normalBias,Et.shadowRadius=ht.radius,Et.shadowMapSize=ht.mapSize,l.spotShadow[S]=Et,l.spotShadowMap[S]=it,B++}S++}else if(W.isRectAreaLight){const ft=i.get(W);ft.color.copy(et).multiplyScalar(H),ft.halfWidth.set(W.width*.5,0,0),ft.halfHeight.set(0,W.height*.5,0),l.rectArea[z]=ft,z++}else if(W.isPointLight){const ft=i.get(W);if(ft.color.copy(W.color).multiplyScalar(W.intensity*D),ft.distance=W.distance,ft.decay=W.decay,W.castShadow){const ht=W.shadow,Et=s.get(W);Et.shadowBias=ht.bias,Et.shadowNormalBias=ht.normalBias,Et.shadowRadius=ht.radius,Et.shadowMapSize=ht.mapSize,Et.shadowCameraNear=ht.camera.near,Et.shadowCameraFar=ht.camera.far,l.pointShadow[x]=Et,l.pointShadowMap[x]=it,l.pointShadowMatrix[x]=W.shadow.matrix,X++}l.point[x]=ft,x++}else if(W.isHemisphereLight){const ft=i.get(W);ft.skyColor.copy(W.color).multiplyScalar(H*D),ft.groundColor.copy(W.groundColor).multiplyScalar(H*D),l.hemi[C]=ft,C++}}z>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Lt.LTC_FLOAT_1,l.rectAreaLTC2=Lt.LTC_FLOAT_2):(l.rectAreaLTC1=Lt.LTC_HALF_1,l.rectAreaLTC2=Lt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Lt.LTC_FLOAT_1,l.rectAreaLTC2=Lt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Lt.LTC_HALF_1,l.rectAreaLTC2=Lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=A;const lt=l.hash;(lt.directionalLength!==R||lt.pointLength!==x||lt.spotLength!==S||lt.rectAreaLength!==z||lt.hemiLength!==C||lt.numDirectionalShadows!==N||lt.numPointShadows!==X||lt.numSpotShadows!==B||lt.numSpotMaps!==O||lt.numLightProbes!==b)&&(l.directional.length=R,l.spot.length=S,l.rectArea.length=z,l.point.length=x,l.hemi.length=C,l.directionalShadow.length=N,l.directionalShadowMap.length=N,l.pointShadow.length=X,l.pointShadowMap.length=X,l.spotShadow.length=B,l.spotShadowMap.length=B,l.directionalShadowMatrix.length=N,l.pointShadowMatrix.length=X,l.spotLightMatrix.length=B+O-rt,l.spotLightMap.length=O,l.numSpotLightShadowsWithMaps=rt,l.numLightProbes=b,lt.directionalLength=R,lt.pointLength=x,lt.spotLength=S,lt.rectAreaLength=z,lt.hemiLength=C,lt.numDirectionalShadows=N,lt.numPointShadows=X,lt.numSpotShadows=B,lt.numSpotMaps=O,lt.numLightProbes=b,l.version=qR++)}function g(_,m){let y=0,M=0,A=0,R=0,x=0;const S=m.matrixWorldInverse;for(let z=0,C=_.length;z<C;z++){const N=_[z];if(N.isDirectionalLight){const X=l.directional[y];X.direction.setFromMatrixPosition(N.matrixWorld),f.setFromMatrixPosition(N.target.matrixWorld),X.direction.sub(f),X.direction.transformDirection(S),y++}else if(N.isSpotLight){const X=l.spot[A];X.position.setFromMatrixPosition(N.matrixWorld),X.position.applyMatrix4(S),X.direction.setFromMatrixPosition(N.matrixWorld),f.setFromMatrixPosition(N.target.matrixWorld),X.direction.sub(f),X.direction.transformDirection(S),A++}else if(N.isRectAreaLight){const X=l.rectArea[R];X.position.setFromMatrixPosition(N.matrixWorld),X.position.applyMatrix4(S),h.identity(),d.copy(N.matrixWorld),d.premultiply(S),h.extractRotation(d),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),X.halfWidth.applyMatrix4(h),X.halfHeight.applyMatrix4(h),R++}else if(N.isPointLight){const X=l.point[M];X.position.setFromMatrixPosition(N.matrixWorld),X.position.applyMatrix4(S),M++}else if(N.isHemisphereLight){const X=l.hemi[x];X.direction.setFromMatrixPosition(N.matrixWorld),X.direction.transformDirection(S),x++}}}return{setup:p,setupView:g,state:l}}function cy(o,e){const i=new kR(o,e),s=[],l=[];function f(){s.length=0,l.length=0}function d(m){s.push(m)}function h(m){l.push(m)}function p(m){i.setup(s,m)}function g(m){i.setupView(s,m)}return{init:f,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:p,setupLightsView:g,pushLight:d,pushShadow:h}}function jR(o,e){let i=new WeakMap;function s(f,d=0){const h=i.get(f);let p;return h===void 0?(p=new cy(o,e),i.set(f,[p])):d>=h.length?(p=new cy(o,e),h.push(p)):p=h[d],p}function l(){i=new WeakMap}return{get:s,dispose:l}}class ZR extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QR extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $R(o,e,i){let s=new Ep;const l=new Zt,f=new Zt,d=new Tn,h=new ZR({depthPacking:kE}),p=new QR,g={},_=i.maxTextureSize,m={[vr]:jn,[jn]:vr,[sa]:sa},y=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:KR,fragmentShader:JR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Nn;A.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ye(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=by;let S=this.type;this.render=function(B,O,rt){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const b=o.getRenderTarget(),D=o.getActiveCubeFace(),lt=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(pr),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const _t=S!==Ra&&this.type===Ra,W=S===Ra&&this.type!==Ra;for(let et=0,H=B.length;et<H;et++){const st=B[et],it=st.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;l.copy(it.mapSize);const ft=it.getFrameExtents();if(l.multiply(ft),f.copy(it.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(f.x=Math.floor(_/ft.x),l.x=f.x*ft.x,it.mapSize.x=f.x),l.y>_&&(f.y=Math.floor(_/ft.y),l.y=f.y*ft.y,it.mapSize.y=f.y)),it.map===null||_t===!0||W===!0){const Et=this.type!==Ra?{minFilter:kn,magFilter:kn}:{};it.map!==null&&it.map.dispose(),it.map=new Jr(l.x,l.y,Et),it.map.texture.name=st.name+".shadowMap",it.camera.updateProjectionMatrix()}o.setRenderTarget(it.map),o.clear();const ht=it.getViewportCount();for(let Et=0;Et<ht;Et++){const Tt=it.getViewport(Et);d.set(f.x*Tt.x,f.y*Tt.y,f.x*Tt.z,f.y*Tt.w),nt.viewport(d),it.updateMatrices(st,Et),s=it.getFrustum(),N(O,rt,it.camera,st,this.type)}it.isPointLightShadow!==!0&&this.type===Ra&&z(it,rt),it.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(b,D,lt)};function z(B,O){const rt=e.update(R);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Jr(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(O,null,rt,y,R,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(O,null,rt,M,R,null)}function C(B,O,rt,b){let D=null;const lt=rt.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(lt!==void 0)D=lt;else if(D=rt.isPointLight===!0?p:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const nt=D.uuid,_t=O.uuid;let W=g[nt];W===void 0&&(W={},g[nt]=W);let et=W[_t];et===void 0&&(et=D.clone(),W[_t]=et,O.addEventListener("dispose",X)),D=et}if(D.visible=O.visible,D.wireframe=O.wireframe,b===Ra?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:m[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,rt.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const nt=o.properties.get(D);nt.light=rt}return D}function N(B,O,rt,b,D){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Ra)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,B.matrixWorld);const _t=e.update(B),W=B.material;if(Array.isArray(W)){const et=_t.groups;for(let H=0,st=et.length;H<st;H++){const it=et[H],ft=W[it.materialIndex];if(ft&&ft.visible){const ht=C(B,ft,b,D);B.onBeforeShadow(o,B,O,rt,_t,ht,it),o.renderBufferDirect(rt,null,_t,ht,B,it),B.onAfterShadow(o,B,O,rt,_t,ht,it)}}}else if(W.visible){const et=C(B,W,b,D);B.onBeforeShadow(o,B,O,rt,_t,et,null),o.renderBufferDirect(rt,null,_t,et,B,null),B.onAfterShadow(o,B,O,rt,_t,et,null)}}const nt=B.children;for(let _t=0,W=nt.length;_t<W;_t++)N(nt[_t],O,rt,b,D)}function X(B){B.target.removeEventListener("dispose",X);for(const rt in g){const b=g[rt],D=B.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function t2(o,e,i){const s=i.isWebGL2;function l(){let V=!1;const Nt=new Tn;let wt=null;const Kt=new Tn(0,0,0,0);return{setMask:function(ne){wt!==ne&&!V&&(o.colorMask(ne,ne,ne,ne),wt=ne)},setLocked:function(ne){V=ne},setClear:function(ne,ze,Pe,je,Ce){Ce===!0&&(ne*=je,ze*=je,Pe*=je),Nt.set(ne,ze,Pe,je),Kt.equals(Nt)===!1&&(o.clearColor(ne,ze,Pe,je),Kt.copy(Nt))},reset:function(){V=!1,wt=null,Kt.set(-1,0,0,0)}}}function f(){let V=!1,Nt=null,wt=null,Kt=null;return{setTest:function(ne){ne?Ut(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(ne){Nt!==ne&&!V&&(o.depthMask(ne),Nt=ne)},setFunc:function(ne){if(wt!==ne){switch(ne){case EE:o.depthFunc(o.NEVER);break;case TE:o.depthFunc(o.ALWAYS);break;case bE:o.depthFunc(o.LESS);break;case Ac:o.depthFunc(o.LEQUAL);break;case AE:o.depthFunc(o.EQUAL);break;case RE:o.depthFunc(o.GEQUAL);break;case wE:o.depthFunc(o.GREATER);break;case CE:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}wt=ne}},setLocked:function(ne){V=ne},setClear:function(ne){Kt!==ne&&(o.clearDepth(ne),Kt=ne)},reset:function(){V=!1,Nt=null,wt=null,Kt=null}}}function d(){let V=!1,Nt=null,wt=null,Kt=null,ne=null,ze=null,Pe=null,je=null,Ce=null;return{setTest:function(Se){V||(Se?Ut(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Se){Nt!==Se&&!V&&(o.stencilMask(Se),Nt=Se)},setFunc:function(Se,we,On){(wt!==Se||Kt!==we||ne!==On)&&(o.stencilFunc(Se,we,On),wt=Se,Kt=we,ne=On)},setOp:function(Se,we,On){(ze!==Se||Pe!==we||je!==On)&&(o.stencilOp(Se,we,On),ze=Se,Pe=we,je=On)},setLocked:function(Se){V=Se},setClear:function(Se){Ce!==Se&&(o.clearStencil(Se),Ce=Se)},reset:function(){V=!1,Nt=null,wt=null,Kt=null,ne=null,ze=null,Pe=null,je=null,Ce=null}}}const h=new l,p=new f,g=new d,_=new WeakMap,m=new WeakMap;let y={},M={},A=new WeakMap,R=[],x=null,S=!1,z=null,C=null,N=null,X=null,B=null,O=null,rt=null,b=new Ae(0,0,0),D=0,lt=!1,nt=null,_t=null,W=null,et=null,H=null;const st=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,ft=0;const ht=o.getParameter(o.VERSION);ht.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ht)[1]),it=ft>=1):ht.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),it=ft>=2);let Et=null,Tt={};const ct=o.getParameter(o.SCISSOR_BOX),L=o.getParameter(o.VIEWPORT),K=new Tn().fromArray(ct),mt=new Tn().fromArray(L);function gt(V,Nt,wt,Kt){const ne=new Uint8Array(4),ze=o.createTexture();o.bindTexture(V,ze),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pe=0;Pe<wt;Pe++)s&&(V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY)?o.texImage3D(Nt,0,o.RGBA,1,1,Kt,0,o.RGBA,o.UNSIGNED_BYTE,ne):o.texImage2D(Nt+Pe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ne);return ze}const Ot={};Ot[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ot[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Ot[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ot[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),p.setClear(1),g.setClear(0),Ut(o.DEPTH_TEST),p.setFunc(Ac),Ht(!1),U(k_),Ut(o.CULL_FACE),Ft(pr);function Ut(V){y[V]!==!0&&(o.enable(V),y[V]=!0)}function Rt(V){y[V]!==!1&&(o.disable(V),y[V]=!1)}function Mt(V,Nt){return M[V]!==Nt?(o.bindFramebuffer(V,Nt),M[V]=Nt,s&&(V===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Nt),V===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Nt)),!0):!1}function q(V,Nt){let wt=R,Kt=!1;if(V)if(wt=A.get(Nt),wt===void 0&&(wt=[],A.set(Nt,wt)),V.isWebGLMultipleRenderTargets){const ne=V.texture;if(wt.length!==ne.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let ze=0,Pe=ne.length;ze<Pe;ze++)wt[ze]=o.COLOR_ATTACHMENT0+ze;wt.length=ne.length,Kt=!0}}else wt[0]!==o.COLOR_ATTACHMENT0&&(wt[0]=o.COLOR_ATTACHMENT0,Kt=!0);else wt[0]!==o.BACK&&(wt[0]=o.BACK,Kt=!0);Kt&&(i.isWebGL2?o.drawBuffers(wt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(wt))}function Ne(V){return x!==V?(o.useProgram(V),x=V,!0):!1}const qt={[jr]:o.FUNC_ADD,[lE]:o.FUNC_SUBTRACT,[uE]:o.FUNC_REVERSE_SUBTRACT};if(s)qt[Q_]=o.MIN,qt[K_]=o.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(qt[Q_]=V.MIN_EXT,qt[K_]=V.MAX_EXT)}const se={[cE]:o.ZERO,[fE]:o.ONE,[hE]:o.SRC_COLOR,[sp]:o.SRC_ALPHA,[vE]:o.SRC_ALPHA_SATURATE,[gE]:o.DST_COLOR,[pE]:o.DST_ALPHA,[dE]:o.ONE_MINUS_SRC_COLOR,[op]:o.ONE_MINUS_SRC_ALPHA,[_E]:o.ONE_MINUS_DST_COLOR,[mE]:o.ONE_MINUS_DST_ALPHA,[yE]:o.CONSTANT_COLOR,[SE]:o.ONE_MINUS_CONSTANT_COLOR,[xE]:o.CONSTANT_ALPHA,[ME]:o.ONE_MINUS_CONSTANT_ALPHA};function Ft(V,Nt,wt,Kt,ne,ze,Pe,je,Ce,Se){if(V===pr){S===!0&&(Rt(o.BLEND),S=!1);return}if(S===!1&&(Ut(o.BLEND),S=!0),V!==oE){if(V!==z||Se!==lt){if((C!==jr||B!==jr)&&(o.blendEquation(o.FUNC_ADD),C=jr,B=jr),Se)switch(V){case co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rp:o.blendFunc(o.ONE,o.ONE);break;case j_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Z_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rp:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case j_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Z_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,X=null,O=null,rt=null,b.set(0,0,0),D=0,z=V,lt=Se}return}ne=ne||Nt,ze=ze||wt,Pe=Pe||Kt,(Nt!==C||ne!==B)&&(o.blendEquationSeparate(qt[Nt],qt[ne]),C=Nt,B=ne),(wt!==N||Kt!==X||ze!==O||Pe!==rt)&&(o.blendFuncSeparate(se[wt],se[Kt],se[ze],se[Pe]),N=wt,X=Kt,O=ze,rt=Pe),(je.equals(b)===!1||Ce!==D)&&(o.blendColor(je.r,je.g,je.b,Ce),b.copy(je),D=Ce),z=V,lt=!1}function ce(V,Nt){V.side===sa?Rt(o.CULL_FACE):Ut(o.CULL_FACE);let wt=V.side===jn;Nt&&(wt=!wt),Ht(wt),V.blending===co&&V.transparent===!1?Ft(pr):Ft(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),p.setFunc(V.depthFunc),p.setTest(V.depthTest),p.setMask(V.depthWrite),h.setMask(V.colorWrite);const Kt=V.stencilWrite;g.setTest(Kt),Kt&&(g.setMask(V.stencilWriteMask),g.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),g.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ut(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(V){nt!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),nt=V)}function U(V){V!==rE?(Ut(o.CULL_FACE),V!==_t&&(V===k_?o.cullFace(o.BACK):V===sE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),_t=V}function w(V){V!==W&&(it&&o.lineWidth(V),W=V)}function ot(V,Nt,wt){V?(Ut(o.POLYGON_OFFSET_FILL),(et!==Nt||H!==wt)&&(o.polygonOffset(Nt,wt),et=Nt,H=wt)):Rt(o.POLYGON_OFFSET_FILL)}function xt(V){V?Ut(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function St(V){V===void 0&&(V=o.TEXTURE0+st-1),Et!==V&&(o.activeTexture(V),Et=V)}function vt(V,Nt,wt){wt===void 0&&(Et===null?wt=o.TEXTURE0+st-1:wt=Et);let Kt=Tt[wt];Kt===void 0&&(Kt={type:void 0,texture:void 0},Tt[wt]=Kt),(Kt.type!==V||Kt.texture!==Nt)&&(Et!==wt&&(o.activeTexture(wt),Et=wt),o.bindTexture(V,Nt||Ot[V]),Kt.type=V,Kt.texture=Nt)}function Xt(){const V=Tt[Et];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function At(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(V){K.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),K.copy(V))}function ye(V){mt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),mt.copy(V))}function Oe(V,Nt){let wt=m.get(Nt);wt===void 0&&(wt=new WeakMap,m.set(Nt,wt));let Kt=wt.get(V);Kt===void 0&&(Kt=o.getUniformBlockIndex(Nt,V.name),wt.set(V,Kt))}function Yt(V,Nt){const Kt=m.get(Nt).get(V);_.get(Nt)!==Kt&&(o.uniformBlockBinding(Nt,Kt,V.__bindingPointIndex),_.set(Nt,Kt))}function bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},Et=null,Tt={},M={},A=new WeakMap,R=[],x=null,S=!1,z=null,C=null,N=null,X=null,B=null,O=null,rt=null,b=new Ae(0,0,0),D=0,lt=!1,nt=null,_t=null,W=null,et=null,H=null,K.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),p.reset(),g.reset()}return{buffers:{color:h,depth:p,stencil:g},enable:Ut,disable:Rt,bindFramebuffer:Mt,drawBuffers:q,useProgram:Ne,setBlending:Ft,setMaterial:ce,setFlipSided:Ht,setCullFace:U,setLineWidth:w,setPolygonOffset:ot,setScissorTest:xt,activeTexture:St,bindTexture:vt,unbindTexture:Xt,compressedTexImage2D:At,compressedTexImage3D:It,texImage2D:kt,texImage3D:ut,updateUBOMapping:Oe,uniformBlockBinding:Yt,texStorage2D:fe,texStorage3D:ee,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:yt,compressedTexSubImage3D:Ee,scissor:oe,viewport:ye,reset:bt}}function e2(o,e,i,s,l,f,d){const h=l.isWebGL2,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,w){return M?new OffscreenCanvas(U,w):Uc("canvas")}function R(U,w,ot,xt){let St=1;if((U.width>xt||U.height>xt)&&(St=xt/Math.max(U.width,U.height)),St<1||w===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const vt=w?pp:Math.floor,Xt=vt(St*U.width),At=vt(St*U.height);m===void 0&&(m=A(Xt,At));const It=ot?A(Xt,At):m;return It.width=Xt,It.height=At,It.getContext("2d").drawImage(U,0,0,Xt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Xt+"x"+At+")."),It}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function x(U){return Av(U.width)&&Av(U.height)}function S(U){return h?!1:U.wrapS!==Vi||U.wrapT!==Vi||U.minFilter!==kn&&U.minFilter!==wi}function z(U,w){return U.generateMipmaps&&w&&U.minFilter!==kn&&U.minFilter!==wi}function C(U){o.generateMipmap(U)}function N(U,w,ot,xt,St=!1){if(h===!1)return w;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let vt=w;if(w===o.RED&&(ot===o.FLOAT&&(vt=o.R32F),ot===o.HALF_FLOAT&&(vt=o.R16F),ot===o.UNSIGNED_BYTE&&(vt=o.R8)),w===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(vt=o.R8UI),ot===o.UNSIGNED_SHORT&&(vt=o.R16UI),ot===o.UNSIGNED_INT&&(vt=o.R32UI),ot===o.BYTE&&(vt=o.R8I),ot===o.SHORT&&(vt=o.R16I),ot===o.INT&&(vt=o.R32I)),w===o.RG&&(ot===o.FLOAT&&(vt=o.RG32F),ot===o.HALF_FLOAT&&(vt=o.RG16F),ot===o.UNSIGNED_BYTE&&(vt=o.RG8)),w===o.RGBA){const Xt=St?wc:Xe.getTransfer(xt);ot===o.FLOAT&&(vt=o.RGBA32F),ot===o.HALF_FLOAT&&(vt=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(vt=Xt===Ke?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function X(U,w,ot){return z(U,ot)===!0||U.isFramebufferTexture&&U.minFilter!==kn&&U.minFilter!==wi?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function B(U){return U===kn||U===J_||U===vd?o.NEAREST:o.LINEAR}function O(U){const w=U.target;w.removeEventListener("dispose",O),b(w),w.isVideoTexture&&_.delete(w)}function rt(U){const w=U.target;w.removeEventListener("dispose",rt),lt(w)}function b(U){const w=s.get(U);if(w.__webglInit===void 0)return;const ot=U.source,xt=y.get(ot);if(xt){const St=xt[w.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(U),Object.keys(xt).length===0&&y.delete(ot)}s.remove(U)}function D(U){const w=s.get(U);o.deleteTexture(w.__webglTexture);const ot=U.source,xt=y.get(ot);delete xt[w.__cacheKey],d.memory.textures--}function lt(U){const w=U.texture,ot=s.get(U),xt=s.get(w);if(xt.__webglTexture!==void 0&&(o.deleteTexture(xt.__webglTexture),d.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(ot.__webglFramebuffer[St]))for(let vt=0;vt<ot.__webglFramebuffer[St].length;vt++)o.deleteFramebuffer(ot.__webglFramebuffer[St][vt]);else o.deleteFramebuffer(ot.__webglFramebuffer[St]);ot.__webglDepthbuffer&&o.deleteRenderbuffer(ot.__webglDepthbuffer[St])}else{if(Array.isArray(ot.__webglFramebuffer))for(let St=0;St<ot.__webglFramebuffer.length;St++)o.deleteFramebuffer(ot.__webglFramebuffer[St]);else o.deleteFramebuffer(ot.__webglFramebuffer);if(ot.__webglDepthbuffer&&o.deleteRenderbuffer(ot.__webglDepthbuffer),ot.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ot.__webglMultisampledFramebuffer),ot.__webglColorRenderbuffer)for(let St=0;St<ot.__webglColorRenderbuffer.length;St++)ot.__webglColorRenderbuffer[St]&&o.deleteRenderbuffer(ot.__webglColorRenderbuffer[St]);ot.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ot.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let St=0,vt=w.length;St<vt;St++){const Xt=s.get(w[St]);Xt.__webglTexture&&(o.deleteTexture(Xt.__webglTexture),d.memory.textures--),s.remove(w[St])}s.remove(w),s.remove(U)}let nt=0;function _t(){nt=0}function W(){const U=nt;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),nt+=1,U}function et(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function H(U,w){const ot=s.get(U);if(U.isVideoTexture&&ce(U),U.isRenderTargetTexture===!1&&U.version>0&&ot.__version!==U.version){const xt=U.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(ot,U,w);return}}i.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+w)}function st(U,w){const ot=s.get(U);if(U.version>0&&ot.__version!==U.version){K(ot,U,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+w)}function it(U,w){const ot=s.get(U);if(U.version>0&&ot.__version!==U.version){K(ot,U,w);return}i.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+w)}function ft(U,w){const ot=s.get(U);if(U.version>0&&ot.__version!==U.version){mt(ot,U,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+w)}const ht={[Rc]:o.REPEAT,[Vi]:o.CLAMP_TO_EDGE,[cp]:o.MIRRORED_REPEAT},Et={[kn]:o.NEAREST,[J_]:o.NEAREST_MIPMAP_NEAREST,[vd]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[BE]:o.LINEAR_MIPMAP_NEAREST,[Tl]:o.LINEAR_MIPMAP_LINEAR},Tt={[ZE]:o.NEVER,[eT]:o.ALWAYS,[QE]:o.LESS,[Fy]:o.LEQUAL,[KE]:o.EQUAL,[tT]:o.GEQUAL,[JE]:o.GREATER,[$E]:o.NOTEQUAL};function ct(U,w,ot){if(ot?(o.texParameteri(U,o.TEXTURE_WRAP_S,ht[w.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ht[w.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ht[w.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[w.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[w.minFilter])):(o.texParameteri(U,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(U,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(w.wrapS!==Vi||w.wrapT!==Vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,o.TEXTURE_MAG_FILTER,B(w.magFilter)),o.texParameteri(U,o.TEXTURE_MIN_FILTER,B(w.minFilter)),w.minFilter!==kn&&w.minFilter!==wi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Tt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const xt=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===kn||w.minFilter!==vd&&w.minFilter!==Tl||w.type===dr&&e.has("OES_texture_float_linear")===!1||h===!1&&w.type===bl&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||s.get(w).__currentAnisotropy)&&(o.texParameterf(U,xt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy)}}function L(U,w){let ot=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",O));const xt=w.source;let St=y.get(xt);St===void 0&&(St={},y.set(xt,St));const vt=et(w);if(vt!==U.__cacheKey){St[vt]===void 0&&(St[vt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ot=!0),St[vt].usedTimes++;const Xt=St[U.__cacheKey];Xt!==void 0&&(St[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(w)),U.__cacheKey=vt,U.__webglTexture=St[vt].texture}return ot}function K(U,w,ot){let xt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xt=o.TEXTURE_3D);const St=L(U,w),vt=w.source;i.bindTexture(xt,U.__webglTexture,o.TEXTURE0+ot);const Xt=s.get(vt);if(vt.version!==Xt.__version||St===!0){i.activeTexture(o.TEXTURE0+ot);const At=Xe.getPrimaries(Xe.workingColorSpace),It=w.colorSpace===Li?null:Xe.getPrimaries(w.colorSpace),te=w.colorSpace===Li||At===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ae=S(w)&&x(w.image)===!1;let yt=R(w.image,ae,!1,l.maxTextureSize);yt=Ht(w,yt);const Ee=x(yt)||h,fe=f.convert(w.format,w.colorSpace);let ee=f.convert(w.type),kt=N(w.internalFormat,fe,ee,w.colorSpace,w.isVideoTexture);ct(xt,w,Ee);let ut;const oe=w.mipmaps,ye=h&&w.isVideoTexture!==!0&&kt!==Py,Oe=Xt.__version===void 0||St===!0,Yt=X(w,yt,Ee);if(w.isDepthTexture)kt=o.DEPTH_COMPONENT,h?w.type===dr?kt=o.DEPTH_COMPONENT32F:w.type===hr?kt=o.DEPTH_COMPONENT24:w.type===Qr?kt=o.DEPTH24_STENCIL8:kt=o.DEPTH_COMPONENT16:w.type===dr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Kr&&kt===o.DEPTH_COMPONENT&&w.type!==Sp&&w.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hr,ee=f.convert(w.type)),w.format===go&&kt===o.DEPTH_COMPONENT&&(kt=o.DEPTH_STENCIL,w.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qr,ee=f.convert(w.type))),Oe&&(ye?i.texStorage2D(o.TEXTURE_2D,1,kt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,kt,yt.width,yt.height,0,fe,ee,null));else if(w.isDataTexture)if(oe.length>0&&Ee){ye&&Oe&&i.texStorage2D(o.TEXTURE_2D,Yt,kt,oe[0].width,oe[0].height);for(let bt=0,V=oe.length;bt<V;bt++)ut=oe[bt],ye?i.texSubImage2D(o.TEXTURE_2D,bt,0,0,ut.width,ut.height,fe,ee,ut.data):i.texImage2D(o.TEXTURE_2D,bt,kt,ut.width,ut.height,0,fe,ee,ut.data);w.generateMipmaps=!1}else ye?(Oe&&i.texStorage2D(o.TEXTURE_2D,Yt,kt,yt.width,yt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,fe,ee,yt.data)):i.texImage2D(o.TEXTURE_2D,0,kt,yt.width,yt.height,0,fe,ee,yt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ye&&Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,kt,oe[0].width,oe[0].height,yt.depth);for(let bt=0,V=oe.length;bt<V;bt++)ut=oe[bt],w.format!==Xi?fe!==null?ye?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,ut.width,ut.height,yt.depth,fe,ut.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,kt,ut.width,ut.height,yt.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,ut.width,ut.height,yt.depth,fe,ee,ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,kt,ut.width,ut.height,yt.depth,0,fe,ee,ut.data)}else{ye&&Oe&&i.texStorage2D(o.TEXTURE_2D,Yt,kt,oe[0].width,oe[0].height);for(let bt=0,V=oe.length;bt<V;bt++)ut=oe[bt],w.format!==Xi?fe!==null?ye?i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,ut.width,ut.height,fe,ut.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,kt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?i.texSubImage2D(o.TEXTURE_2D,bt,0,0,ut.width,ut.height,fe,ee,ut.data):i.texImage2D(o.TEXTURE_2D,bt,kt,ut.width,ut.height,0,fe,ee,ut.data)}else if(w.isDataArrayTexture)ye?(Oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,kt,yt.width,yt.height,yt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,fe,ee,yt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,yt.width,yt.height,yt.depth,0,fe,ee,yt.data);else if(w.isData3DTexture)ye?(Oe&&i.texStorage3D(o.TEXTURE_3D,Yt,kt,yt.width,yt.height,yt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,fe,ee,yt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,yt.width,yt.height,yt.depth,0,fe,ee,yt.data);else if(w.isFramebufferTexture){if(Oe)if(ye)i.texStorage2D(o.TEXTURE_2D,Yt,kt,yt.width,yt.height);else{let bt=yt.width,V=yt.height;for(let Nt=0;Nt<Yt;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,kt,bt,V,0,fe,ee,null),bt>>=1,V>>=1}}else if(oe.length>0&&Ee){ye&&Oe&&i.texStorage2D(o.TEXTURE_2D,Yt,kt,oe[0].width,oe[0].height);for(let bt=0,V=oe.length;bt<V;bt++)ut=oe[bt],ye?i.texSubImage2D(o.TEXTURE_2D,bt,0,0,fe,ee,ut):i.texImage2D(o.TEXTURE_2D,bt,kt,fe,ee,ut);w.generateMipmaps=!1}else ye?(Oe&&i.texStorage2D(o.TEXTURE_2D,Yt,kt,yt.width,yt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,fe,ee,yt)):i.texImage2D(o.TEXTURE_2D,0,kt,fe,ee,yt);z(w,Ee)&&C(xt),Xt.__version=vt.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function mt(U,w,ot){if(w.image.length!==6)return;const xt=L(U,w),St=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+ot);const vt=s.get(St);if(St.version!==vt.__version||xt===!0){i.activeTexture(o.TEXTURE0+ot);const Xt=Xe.getPrimaries(Xe.workingColorSpace),At=w.colorSpace===Li?null:Xe.getPrimaries(w.colorSpace),It=w.colorSpace===Li||Xt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const te=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,yt=[];for(let bt=0;bt<6;bt++)!te&&!ae?yt[bt]=R(w.image[bt],!1,!0,l.maxCubemapSize):yt[bt]=ae?w.image[bt].image:w.image[bt],yt[bt]=Ht(w,yt[bt]);const Ee=yt[0],fe=x(Ee)||h,ee=f.convert(w.format,w.colorSpace),kt=f.convert(w.type),ut=N(w.internalFormat,ee,kt,w.colorSpace),oe=h&&w.isVideoTexture!==!0,ye=vt.__version===void 0||xt===!0;let Oe=X(w,Ee,fe);ct(o.TEXTURE_CUBE_MAP,w,fe);let Yt;if(te){oe&&ye&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ut,Ee.width,Ee.height);for(let bt=0;bt<6;bt++){Yt=yt[bt].mipmaps;for(let V=0;V<Yt.length;V++){const Nt=Yt[V];w.format!==Xi?ee!==null?oe?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V,0,0,Nt.width,Nt.height,ee,Nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V,ut,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V,0,0,Nt.width,Nt.height,ee,kt,Nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V,ut,Nt.width,Nt.height,0,ee,kt,Nt.data)}}}else{Yt=w.mipmaps,oe&&ye&&(Yt.length>0&&Oe++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ut,yt[0].width,yt[0].height));for(let bt=0;bt<6;bt++)if(ae){oe?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,yt[bt].width,yt[bt].height,ee,kt,yt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,yt[bt].width,yt[bt].height,0,ee,kt,yt[bt].data);for(let V=0;V<Yt.length;V++){const wt=Yt[V].image[bt].image;oe?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V+1,0,0,wt.width,wt.height,ee,kt,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V+1,ut,wt.width,wt.height,0,ee,kt,wt.data)}}else{oe?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ee,kt,yt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ut,ee,kt,yt[bt]);for(let V=0;V<Yt.length;V++){const Nt=Yt[V];oe?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V+1,0,0,ee,kt,Nt.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,V+1,ut,ee,kt,Nt.image[bt])}}}z(w,fe)&&C(o.TEXTURE_CUBE_MAP),vt.__version=St.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function gt(U,w,ot,xt,St,vt){const Xt=f.convert(ot.format,ot.colorSpace),At=f.convert(ot.type),It=N(ot.internalFormat,Xt,At,ot.colorSpace);if(!s.get(w).__hasExternalTextures){const ae=Math.max(1,w.width>>vt),yt=Math.max(1,w.height>>vt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,vt,It,ae,yt,w.depth,0,Xt,At,null):i.texImage2D(St,vt,It,ae,yt,0,Xt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ft(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,St,s.get(ot).__webglTexture,0,se(w)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,St,s.get(ot).__webglTexture,vt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(U,w,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,U),w.depthBuffer&&!w.stencilBuffer){let xt=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(ot||Ft(w)){const St=w.depthTexture;St&&St.isDepthTexture&&(St.type===dr?xt=o.DEPTH_COMPONENT32F:St.type===hr&&(xt=o.DEPTH_COMPONENT24));const vt=se(w);Ft(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt,xt,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,vt,xt,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,xt,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(w.depthBuffer&&w.stencilBuffer){const xt=se(w);ot&&Ft(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,o.DEPTH24_STENCIL8,w.width,w.height):Ft(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const xt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let St=0;St<xt.length;St++){const vt=xt[St],Xt=f.convert(vt.format,vt.colorSpace),At=f.convert(vt.type),It=N(vt.internalFormat,Xt,At,vt.colorSpace),te=se(w);ot&&Ft(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,te,It,w.width,w.height):Ft(w)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,te,It,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,It,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ut(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const xt=s.get(w.depthTexture).__webglTexture,St=se(w);if(w.depthTexture.format===Kr)Ft(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(w.depthTexture.format===go)Ft(w)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Rt(U){const w=s.get(U),ot=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");Ut(w.__webglFramebuffer,U)}else if(ot){w.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[xt]),w.__webglDepthbuffer[xt]=o.createRenderbuffer(),Ot(w.__webglDepthbuffer[xt],U,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Ot(w.__webglDepthbuffer,U,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(U,w,ot){const xt=s.get(U);w!==void 0&&gt(xt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&Rt(U)}function q(U){const w=U.texture,ot=s.get(U),xt=s.get(w);U.addEventListener("dispose",rt),U.isWebGLMultipleRenderTargets!==!0&&(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=w.version,d.memory.textures++);const St=U.isWebGLCubeRenderTarget===!0,vt=U.isWebGLMultipleRenderTargets===!0,Xt=x(U)||h;if(St){ot.__webglFramebuffer=[];for(let At=0;At<6;At++)if(h&&w.mipmaps&&w.mipmaps.length>0){ot.__webglFramebuffer[At]=[];for(let It=0;It<w.mipmaps.length;It++)ot.__webglFramebuffer[At][It]=o.createFramebuffer()}else ot.__webglFramebuffer[At]=o.createFramebuffer()}else{if(h&&w.mipmaps&&w.mipmaps.length>0){ot.__webglFramebuffer=[];for(let At=0;At<w.mipmaps.length;At++)ot.__webglFramebuffer[At]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(vt)if(l.drawBuffers){const At=U.texture;for(let It=0,te=At.length;It<te;It++){const ae=s.get(At[It]);ae.__webglTexture===void 0&&(ae.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&U.samples>0&&Ft(U)===!1){const At=vt?w:[w];ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let It=0;It<At.length;It++){const te=At[It];ot.__webglColorRenderbuffer[It]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[It]);const ae=f.convert(te.format,te.colorSpace),yt=f.convert(te.type),Ee=N(te.internalFormat,ae,yt,te.colorSpace,U.isXRRenderTarget===!0),fe=se(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,fe,Ee,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,ot.__webglColorRenderbuffer[It])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(ot.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(St){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),ct(o.TEXTURE_CUBE_MAP,w,Xt);for(let At=0;At<6;At++)if(h&&w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)gt(ot.__webglFramebuffer[At][It],U,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,It);else gt(ot.__webglFramebuffer[At],U,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);z(w,Xt)&&C(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(vt){const At=U.texture;for(let It=0,te=At.length;It<te;It++){const ae=At[It],yt=s.get(ae);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),ct(o.TEXTURE_2D,ae,Xt),gt(ot.__webglFramebuffer,U,ae,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,0),z(ae,Xt)&&C(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(h?At=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(At,xt.__webglTexture),ct(At,w,Xt),h&&w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)gt(ot.__webglFramebuffer[It],U,w,o.COLOR_ATTACHMENT0,At,It);else gt(ot.__webglFramebuffer,U,w,o.COLOR_ATTACHMENT0,At,0);z(w,Xt)&&C(At),i.unbindTexture()}U.depthBuffer&&Rt(U)}function Ne(U){const w=x(U)||h,ot=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let xt=0,St=ot.length;xt<St;xt++){const vt=ot[xt];if(z(vt,w)){const Xt=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,At=s.get(vt).__webglTexture;i.bindTexture(Xt,At),C(Xt),i.unbindTexture()}}}function qt(U){if(h&&U.samples>0&&Ft(U)===!1){const w=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],ot=U.width,xt=U.height;let St=o.COLOR_BUFFER_BIT;const vt=[],Xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=s.get(U),It=U.isWebGLMultipleRenderTargets===!0;if(It)for(let te=0;te<w.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let te=0;te<w.length;te++){vt.push(o.COLOR_ATTACHMENT0+te),U.depthBuffer&&vt.push(Xt);const ae=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(ae===!1&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),It&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[te]),ae===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Xt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Xt])),It){const yt=s.get(w[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,ot,xt,0,0,ot,xt,St,o.NEAREST),g&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,vt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),It)for(let te=0;te<w.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,At.__webglColorRenderbuffer[te]);const ae=s.get(w[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,ae,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function se(U){return Math.min(l.maxSamples,U.samples)}function Ft(U){const w=s.get(U);return h&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(U){const w=d.render.frame;_.get(U)!==w&&(_.set(U,w),U.update())}function Ht(U,w){const ot=U.colorSpace,xt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===hp||ot!==Ua&&ot!==Li&&(Xe.getTransfer(ot)===Ke?h===!1?e.has("EXT_sRGB")===!0&&xt===Xi?(U.format=hp,U.minFilter=wi,U.generateMipmaps=!1):w=Gy.sRGBToLinear(w):(xt!==Xi||St!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),w}this.allocateTextureUnit=W,this.resetTextureUnits=_t,this.setTexture2D=H,this.setTexture2DArray=st,this.setTexture3D=it,this.setTextureCube=ft,this.rebindTextures=Mt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ft}function n2(o,e,i){const s=i.isWebGL2;function l(f,d=Li){let h;const p=Xe.getTransfer(d);if(f===gr)return o.UNSIGNED_BYTE;if(f===Ly)return o.UNSIGNED_SHORT_4_4_4_4;if(f===Uy)return o.UNSIGNED_SHORT_5_5_5_1;if(f===IE)return o.BYTE;if(f===FE)return o.SHORT;if(f===Sp)return o.UNSIGNED_SHORT;if(f===Dy)return o.INT;if(f===hr)return o.UNSIGNED_INT;if(f===dr)return o.FLOAT;if(f===bl)return s?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(f===HE)return o.ALPHA;if(f===Xi)return o.RGBA;if(f===GE)return o.LUMINANCE;if(f===VE)return o.LUMINANCE_ALPHA;if(f===Kr)return o.DEPTH_COMPONENT;if(f===go)return o.DEPTH_STENCIL;if(f===hp)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(f===XE)return o.RED;if(f===Ny)return o.RED_INTEGER;if(f===WE)return o.RG;if(f===Oy)return o.RG_INTEGER;if(f===zy)return o.RGBA_INTEGER;if(f===yd||f===Sd||f===xd||f===Md)if(p===Ke)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(f===yd)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(f===Sd)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(f===xd)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(f===Md)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(f===yd)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(f===Sd)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(f===xd)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(f===Md)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(f===$_||f===tv||f===ev||f===nv)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(f===$_)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(f===tv)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(f===ev)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(f===nv)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(f===Py)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(f===iv||f===av)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(f===iv)return p===Ke?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(f===av)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(f===rv||f===sv||f===ov||f===lv||f===uv||f===cv||f===fv||f===hv||f===dv||f===pv||f===mv||f===gv||f===_v||f===vv)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(f===rv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(f===sv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(f===ov)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(f===lv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(f===uv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(f===cv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(f===fv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(f===hv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(f===dv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(f===pv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(f===mv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(f===gv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(f===_v)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(f===vv)return p===Ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(f===Ed||f===yv||f===Sv)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(f===Ed)return p===Ke?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(f===yv)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(f===Sv)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(f===qE||f===xv||f===Mv||f===Ev)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(f===Ed)return h.COMPRESSED_RED_RGTC1_EXT;if(f===xv)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(f===Mv)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(f===Ev)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return f===Qr?s?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[f]!==void 0?o[f]:null}return{convert:l}}class i2 extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oa extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a2={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,d=null;const h=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const R of e.hand.values()){const x=i.getJointPose(R,s),S=this._getHandJoint(g,R);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const _=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],y=_.position.distanceTo(m.position),M=.02,A=.005;g.inputState.pinching&&y>M+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(a2)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new oa;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class r2 extends vo{constructor(e,i){super();const s=this;let l=null,f=1,d=null,h="local-floor",p=1,g=null,_=null,m=null,y=null,M=null,A=null;const R=i.getContextAttributes();let x=null,S=null;const z=[],C=[],N=new Zt;let X=null;const B=new Di;B.layers.enable(1),B.viewport=new Tn;const O=new Di;O.layers.enable(2),O.viewport=new Tn;const rt=[B,O],b=new i2;b.layers.enable(1),b.layers.enable(2);let D=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let L=z[ct];return L===void 0&&(L=new jd,z[ct]=L),L.getTargetRaySpace()},this.getControllerGrip=function(ct){let L=z[ct];return L===void 0&&(L=new jd,z[ct]=L),L.getGripSpace()},this.getHand=function(ct){let L=z[ct];return L===void 0&&(L=new jd,z[ct]=L),L.getHandSpace()};function nt(ct){const L=C.indexOf(ct.inputSource);if(L===-1)return;const K=z[L];K!==void 0&&(K.update(ct.inputSource,ct.frame,g||d),K.dispatchEvent({type:ct.type,data:ct.inputSource}))}function _t(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",W);for(let ct=0;ct<z.length;ct++){const L=C[ct];L!==null&&(C[ct]=null,z[ct].disconnect(L))}D=null,lt=null,e.setRenderTarget(x),M=null,y=null,m=null,l=null,S=null,Tt.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){f=ct,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){h=ct,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(ct){g=ct},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return m},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ct){if(l=ct,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(N),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const L={antialias:l.renderState.layers===void 0?R.antialias:!0,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,L),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),S=new Jr(M.framebufferWidth,M.framebufferHeight,{format:Xi,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil})}else{let L=null,K=null,mt=null;R.depth&&(mt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,L=R.stencil?go:Kr,K=R.stencil?Qr:hr);const gt={colorFormat:i.RGBA8,depthFormat:mt,scaleFactor:f};m=new XRWebGLBinding(l,i),y=m.createProjectionLayer(gt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),S=new Jr(y.textureWidth,y.textureHeight,{format:Xi,type:gr,depthTexture:new $y(y.textureWidth,y.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0});const Ot=e.properties.get(S);Ot.__ignoreDepthValues=y.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(p),g=null,d=await l.requestReferenceSpace(h),Tt.setContext(l),Tt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function W(ct){for(let L=0;L<ct.removed.length;L++){const K=ct.removed[L],mt=C.indexOf(K);mt>=0&&(C[mt]=null,z[mt].disconnect(K))}for(let L=0;L<ct.added.length;L++){const K=ct.added[L];let mt=C.indexOf(K);if(mt===-1){for(let Ot=0;Ot<z.length;Ot++)if(Ot>=C.length){C.push(K),mt=Ot;break}else if(C[Ot]===null){C[Ot]=K,mt=Ot;break}if(mt===-1)break}const gt=z[mt];gt&&gt.connect(K)}}const et=new G,H=new G;function st(ct,L,K){et.setFromMatrixPosition(L.matrixWorld),H.setFromMatrixPosition(K.matrixWorld);const mt=et.distanceTo(H),gt=L.projectionMatrix.elements,Ot=K.projectionMatrix.elements,Ut=gt[14]/(gt[10]-1),Rt=gt[14]/(gt[10]+1),Mt=(gt[9]+1)/gt[5],q=(gt[9]-1)/gt[5],Ne=(gt[8]-1)/gt[0],qt=(Ot[8]+1)/Ot[0],se=Ut*Ne,Ft=Ut*qt,ce=mt/(-Ne+qt),Ht=ce*-Ne;L.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Ht),ct.translateZ(ce),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert();const U=Ut+ce,w=Rt+ce,ot=se-Ht,xt=Ft+(mt-Ht),St=Mt*Rt/w*U,vt=q*Rt/w*U;ct.projectionMatrix.makePerspective(ot,xt,St,vt,U,w),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}function it(ct,L){L===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(L.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(l===null)return;b.near=O.near=B.near=ct.near,b.far=O.far=B.far=ct.far,(D!==b.near||lt!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,lt=b.far);const L=ct.parent,K=b.cameras;it(b,L);for(let mt=0;mt<K.length;mt++)it(K[mt],L);K.length===2?st(b,B,O):b.projectionMatrix.copy(B.projectionMatrix),ft(ct,b,L)};function ft(ct,L,K){K===null?ct.matrix.copy(L.matrixWorld):(ct.matrix.copy(K.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(L.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(L.projectionMatrix),ct.projectionMatrixInverse.copy(L.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=dp*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(ct){p=ct,y!==null&&(y.fixedFoveation=ct),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ct)};let ht=null;function Et(ct,L){if(_=L.getViewerPose(g||d),A=L,_!==null){const K=_.views;M!==null&&(e.setRenderTargetFramebuffer(S,M.framebuffer),e.setRenderTarget(S));let mt=!1;K.length!==b.cameras.length&&(b.cameras.length=0,mt=!0);for(let gt=0;gt<K.length;gt++){const Ot=K[gt];let Ut=null;if(M!==null)Ut=M.getViewport(Ot);else{const Mt=m.getViewSubImage(y,Ot);Ut=Mt.viewport,gt===0&&(e.setRenderTargetTextures(S,Mt.colorTexture,y.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(S))}let Rt=rt[gt];Rt===void 0&&(Rt=new Di,Rt.layers.enable(gt),Rt.viewport=new Tn,rt[gt]=Rt),Rt.matrix.fromArray(Ot.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ot.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),gt===0&&(b.matrix.copy(Rt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),mt===!0&&b.cameras.push(Rt)}}for(let K=0;K<z.length;K++){const mt=C[K],gt=z[K];mt!==null&&gt!==void 0&&gt.update(mt,L,g||d)}ht&&ht(ct,L),L.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:L}),A=null}const Tt=new Ky;Tt.setAnimationLoop(Et),this.setAnimationLoop=function(ct){ht=ct},this.dispose=function(){}}}function s2(o,e){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,jy(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,z,C,N){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(x,S):S.isMeshToonMaterial?(f(x,S),m(x,S)):S.isMeshPhongMaterial?(f(x,S),_(x,S)):S.isMeshStandardMaterial?(f(x,S),y(x,S),S.isMeshPhysicalMaterial&&M(x,S,N)):S.isMeshMatcapMaterial?(f(x,S),A(x,S)):S.isMeshDepthMaterial?f(x,S):S.isMeshDistanceMaterial?(f(x,S),R(x,S)):S.isMeshNormalMaterial?f(x,S):S.isLineBasicMaterial?(d(x,S),S.isLineDashedMaterial&&h(x,S)):S.isPointsMaterial?p(x,S,z,C):S.isSpriteMaterial?g(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===jn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===jn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const z=e.get(S).envMap;if(z&&(x.envMap.value=z,x.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap){x.lightMap.value=S.lightMap;const C=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=S.lightMapIntensity*C,i(S.lightMap,x.lightMapTransform)}S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function h(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function p(x,S,z,C){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*z,x.scale.value=C*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function _(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function m(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function y(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),e.get(S).envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,z){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&x.clearcoatNormalScale.value.negate())),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=z.texture,x.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,S){S.matcap&&(x.matcap.value=S.matcap)}function R(x,S){const z=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(z.matrixWorld),x.nearDistance.value=z.shadow.camera.near,x.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function o2(o,e,i,s){let l={},f={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(z,C){const N=C.program;s.uniformBlockBinding(z,N)}function g(z,C){let N=l[z.id];N===void 0&&(A(z),N=_(z),l[z.id]=N,z.addEventListener("dispose",x));const X=C.program;s.updateUBOMapping(z,X);const B=e.render.frame;f[z.id]!==B&&(y(z),f[z.id]=B)}function _(z){const C=m();z.__bindingPointIndex=C;const N=o.createBuffer(),X=z.__size,B=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,X,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,N),N}function m(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const C=l[z.id],N=z.uniforms,X=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let B=0,O=N.length;B<O;B++){const rt=Array.isArray(N[B])?N[B]:[N[B]];for(let b=0,D=rt.length;b<D;b++){const lt=rt[b];if(M(lt,B,b,X)===!0){const nt=lt.__offset,_t=Array.isArray(lt.value)?lt.value:[lt.value];let W=0;for(let et=0;et<_t.length;et++){const H=_t[et],st=R(H);typeof H=="number"||typeof H=="boolean"?(lt.__data[0]=H,o.bufferSubData(o.UNIFORM_BUFFER,nt+W,lt.__data)):H.isMatrix3?(lt.__data[0]=H.elements[0],lt.__data[1]=H.elements[1],lt.__data[2]=H.elements[2],lt.__data[3]=0,lt.__data[4]=H.elements[3],lt.__data[5]=H.elements[4],lt.__data[6]=H.elements[5],lt.__data[7]=0,lt.__data[8]=H.elements[6],lt.__data[9]=H.elements[7],lt.__data[10]=H.elements[8],lt.__data[11]=0):(H.toArray(lt.__data,W),W+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,lt.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,C,N,X){const B=z.value,O=C+"_"+N;if(X[O]===void 0)return typeof B=="number"||typeof B=="boolean"?X[O]=B:X[O]=B.clone(),!0;{const rt=X[O];if(typeof B=="number"||typeof B=="boolean"){if(rt!==B)return X[O]=B,!0}else if(rt.equals(B)===!1)return rt.copy(B),!0}return!1}function A(z){const C=z.uniforms;let N=0;const X=16;for(let O=0,rt=C.length;O<rt;O++){const b=Array.isArray(C[O])?C[O]:[C[O]];for(let D=0,lt=b.length;D<lt;D++){const nt=b[D],_t=Array.isArray(nt.value)?nt.value:[nt.value];for(let W=0,et=_t.length;W<et;W++){const H=_t[W],st=R(H),it=N%X;it!==0&&X-it<st.boundary&&(N+=X-it),nt.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=N,N+=st.storage}}}const B=N%X;return B>0&&(N+=X-B),z.__size=N,z.__cache={},this}function R(z){const C={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(C.boundary=4,C.storage=4):z.isVector2?(C.boundary=8,C.storage=8):z.isVector3||z.isColor?(C.boundary=16,C.storage=12):z.isVector4?(C.boundary=16,C.storage=16):z.isMatrix3?(C.boundary=48,C.storage=48):z.isMatrix4?(C.boundary=64,C.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),C}function x(z){const C=z.target;C.removeEventListener("dispose",x);const N=d.indexOf(C.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete f[C.id]}function S(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},f={}}return{bind:p,update:g,dispose:S}}class rS{constructor(e={}){const{canvas:i=iT(),context:s=null,depth:l=!0,stencil:f=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=d;const M=new Uint32Array(4),A=new Int32Array(4);let R=null,x=null;const S=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const C=this;let N=!1,X=0,B=0,O=null,rt=-1,b=null;const D=new Tn,lt=new Tn;let nt=null;const _t=new Ae(0);let W=0,et=i.width,H=i.height,st=1,it=null,ft=null;const ht=new Tn(0,0,et,H),Et=new Tn(0,0,et,H);let Tt=!1;const ct=new Ep;let L=!1,K=!1,mt=null;const gt=new tn,Ot=new Zt,Ut=new G,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return O===null?st:1}let q=s;function Ne(T,F){for(let Q=0;Q<T.length;Q++){const Z=T[Q],$=i.getContext(Z,F);if($!==null)return $}return null}try{const T={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yp}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",V,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),q===null){const F=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&F.shift(),q=Ne(F,T),q===null)throw Ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let qt,se,Ft,ce,Ht,U,w,ot,xt,St,vt,Xt,At,It,te,ae,yt,Ee,fe,ee,kt,ut,oe,ye;function Oe(){qt=new _A(q),se=new fA(q,qt,e),qt.init(se),ut=new n2(q,qt,se),Ft=new t2(q,qt,se),ce=new SA(q),Ht=new HR,U=new e2(q,qt,Ft,Ht,se,ut,ce),w=new dA(C),ot=new gA(C),xt=new wT(q,se),oe=new uA(q,qt,xt,se),St=new vA(q,xt,ce,oe),vt=new TA(q,St,xt,ce),fe=new EA(q,se,U),ae=new hA(Ht),Xt=new FR(C,w,ot,qt,se,oe,ae),At=new s2(C,Ht),It=new VR,te=new jR(qt,se),Ee=new lA(C,w,ot,Ft,vt,y,p),yt=new $R(C,vt,se),ye=new o2(q,ce,se,Ft),ee=new cA(q,qt,ce,se),kt=new yA(q,qt,ce,se),ce.programs=Xt.programs,C.capabilities=se,C.extensions=qt,C.properties=Ht,C.renderLists=It,C.shadowMap=yt,C.state=Ft,C.info=ce}Oe();const Yt=new r2(C,q);this.xr=Yt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const T=qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(T){T!==void 0&&(st=T,this.setSize(et,H,!1))},this.getSize=function(T){return T.set(et,H)},this.setSize=function(T,F,Q=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=T,H=F,i.width=Math.floor(T*st),i.height=Math.floor(F*st),Q===!0&&(i.style.width=T+"px",i.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(et*st,H*st).floor()},this.setDrawingBufferSize=function(T,F,Q){et=T,H=F,st=Q,i.width=Math.floor(T*Q),i.height=Math.floor(F*Q),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,F,Q,Z){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,F,Q,Z),Ft.viewport(D.copy(ht).multiplyScalar(st).floor())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,F,Q,Z){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,F,Q,Z),Ft.scissor(lt.copy(Et).multiplyScalar(st).floor())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(T){Ft.setScissorTest(Tt=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){ft=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,F=!0,Q=!0){let Z=0;if(T){let $=!1;if(O!==null){const Dt=O.texture.format;$=Dt===zy||Dt===Oy||Dt===Ny}if($){const Dt=O.texture.type,Bt=Dt===gr||Dt===hr||Dt===Sp||Dt===Qr||Dt===Ly||Dt===Uy,Vt=Ee.getClearColor(),Jt=Ee.getClearAlpha(),re=Vt.r,ie=Vt.g,$t=Vt.b;Bt?(M[0]=re,M[1]=ie,M[2]=$t,M[3]=Jt,q.clearBufferuiv(q.COLOR,0,M)):(A[0]=re,A[1]=ie,A[2]=$t,A[3]=Jt,q.clearBufferiv(q.COLOR,0,A))}else Z|=q.COLOR_BUFFER_BIT}F&&(Z|=q.DEPTH_BUFFER_BIT),Q&&(Z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",V,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),It.dispose(),te.dispose(),Ht.dispose(),w.dispose(),ot.dispose(),vt.dispose(),oe.dispose(),ye.dispose(),Xt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Ce),Yt.removeEventListener("sessionend",Se),mt&&(mt.dispose(),mt=null),we.stop()};function bt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const T=ce.autoReset,F=yt.enabled,Q=yt.autoUpdate,Z=yt.needsUpdate,$=yt.type;Oe(),ce.autoReset=T,yt.enabled=F,yt.autoUpdate=Q,yt.needsUpdate=Z,yt.type=$}function Nt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function wt(T){const F=T.target;F.removeEventListener("dispose",wt),Kt(F)}function Kt(T){ne(T),Ht.remove(T)}function ne(T){const F=Ht.get(T).programs;F!==void 0&&(F.forEach(function(Q){Xt.releaseProgram(Q)}),T.isShaderMaterial&&Xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Q,Z,$,Dt){F===null&&(F=Rt);const Bt=$.isMesh&&$.matrixWorld.determinant()<0,Vt=Wi(T,F,Q,Z,$);Ft.setMaterial(Z,Bt);let Jt=Q.index,re=1;if(Z.wireframe===!0){if(Jt=St.getWireframeAttribute(Q),Jt===void 0)return;re=2}const ie=Q.drawRange,$t=Q.attributes.position;let pe=ie.start*re,Le=(ie.start+ie.count)*re;Dt!==null&&(pe=Math.max(pe,Dt.start*re),Le=Math.min(Le,(Dt.start+Dt.count)*re)),Jt!==null?(pe=Math.max(pe,0),Le=Math.min(Le,Jt.count)):$t!=null&&(pe=Math.max(pe,0),Le=Math.min(Le,$t.count));const We=Le-pe;if(We<0||We===1/0)return;oe.setup($,Z,Vt,Q,Jt);let Qn,Ge=ee;if(Jt!==null&&(Qn=xt.get(Jt),Ge=kt,Ge.setIndex(Qn)),$.isMesh)Z.wireframe===!0?(Ft.setLineWidth(Z.wireframeLinewidth*Mt()),Ge.setMode(q.LINES)):Ge.setMode(q.TRIANGLES);else if($.isLine){let Pt=Z.linewidth;Pt===void 0&&(Pt=1),Ft.setLineWidth(Pt*Mt()),$.isLineSegments?Ge.setMode(q.LINES):$.isLineLoop?Ge.setMode(q.LINE_LOOP):Ge.setMode(q.LINE_STRIP)}else $.isPoints?Ge.setMode(q.POINTS):$.isSprite&&Ge.setMode(q.TRIANGLES);if($.isBatchedMesh)Ge.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ge.renderInstances(pe,We,$.count);else if(Q.isInstancedBufferGeometry){const Pt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,en=Math.min(Q.instanceCount,Pt);Ge.renderInstances(pe,We,en)}else Ge.render(pe,We)};function ze(T,F,Q){T.transparent===!0&&T.side===sa&&T.forceSinglePass===!1?(T.side=jn,T.needsUpdate=!0,_i(T,F,Q),T.side=vr,T.needsUpdate=!0,_i(T,F,Q),T.side=sa):_i(T,F,Q)}this.compile=function(T,F,Q=null){Q===null&&(Q=T),x=te.get(Q),x.init(),z.push(x),Q.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),T!==Q&&T.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights(C._useLegacyLights);const Z=new Set;return T.traverse(function($){const Dt=$.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Vt=Dt[Bt];ze(Vt,Q,$),Z.add(Vt)}else ze(Dt,Q,$),Z.add(Dt)}),z.pop(),x=null,Z},this.compileAsync=function(T,F,Q=null){const Z=this.compile(T,F,Q);return new Promise($=>{function Dt(){if(Z.forEach(function(Bt){Ht.get(Bt).currentProgram.isReady()&&Z.delete(Bt)}),Z.size===0){$(T);return}setTimeout(Dt,10)}qt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Pe=null;function je(T){Pe&&Pe(T)}function Ce(){we.stop()}function Se(){we.start()}const we=new Ky;we.setAnimationLoop(je),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(T){Pe=T,Yt.setAnimationLoop(T),T===null?we.stop():we.start()},Yt.addEventListener("sessionstart",Ce),Yt.addEventListener("sessionend",Se),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(F),F=Yt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,O),x=te.get(T,z.length),x.init(),z.push(x),gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ct.setFromProjectionMatrix(gt),K=this.localClippingEnabled,L=ae.init(this.clippingPlanes,K),R=It.get(T,S.length),R.init(),S.push(R),On(T,F,0,C.sortObjects),R.finish(),C.sortObjects===!0&&R.sort(it,ft),this.info.render.frame++,L===!0&&ae.beginShadows();const Q=x.state.shadowsArray;if(yt.render(Q,T,F),L===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(R,T),x.setupLights(C._useLegacyLights),F.isArrayCamera){const Z=F.cameras;for(let $=0,Dt=Z.length;$<Dt;$++){const Bt=Z[$];Oa(R,T,Bt,Bt.viewport)}}else Oa(R,T,F);O!==null&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(C,T,F),oe.resetDefaultState(),rt=-1,b=null,z.pop(),z.length>0?x=z[z.length-1]:x=null,S.pop(),S.length>0?R=S[S.length-1]:R=null};function On(T,F,Q,Z){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)x.pushLight(T),T.castShadow&&x.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ct.intersectsSprite(T)){Z&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);const Bt=vt.update(T),Vt=T.material;Vt.visible&&R.push(T,Bt,Vt,Q,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ct.intersectsObject(T))){const Bt=vt.update(T),Vt=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Ut.copy(Bt.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Vt)){const Jt=Bt.groups;for(let re=0,ie=Jt.length;re<ie;re++){const $t=Jt[re],pe=Vt[$t.materialIndex];pe&&pe.visible&&R.push(T,Bt,pe,Q,Ut.z,$t)}}else Vt.visible&&R.push(T,Bt,Vt,Q,Ut.z,null)}}const Dt=T.children;for(let Bt=0,Vt=Dt.length;Bt<Vt;Bt++)On(Dt[Bt],F,Q,Z)}function Oa(T,F,Q,Z){const $=T.opaque,Dt=T.transmissive,Bt=T.transparent;x.setupLightsView(Q),L===!0&&ae.setGlobalState(C.clippingPlanes,Q),Dt.length>0&&ts($,Dt,F,Q),Z&&Ft.viewport(D.copy(Z)),$.length>0&&Zn($,F,Q),Dt.length>0&&Zn(Dt,F,Q),Bt.length>0&&Zn(Bt,F,Q),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function ts(T,F,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Dt=se.isWebGL2;mt===null&&(mt=new Jr(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")?bl:gr,minFilter:Tl,samples:Dt?4:0})),C.getDrawingBufferSize(Ot),Dt?mt.setSize(Ot.x,Ot.y):mt.setSize(pp(Ot.x),pp(Ot.y));const Bt=C.getRenderTarget();C.setRenderTarget(mt),C.getClearColor(_t),W=C.getClearAlpha(),W<1&&C.setClearColor(16777215,.5),C.clear();const Vt=C.toneMapping;C.toneMapping=mr,Zn(T,Q,Z),U.updateMultisampleRenderTarget(mt),U.updateRenderTargetMipmap(mt);let Jt=!1;for(let re=0,ie=F.length;re<ie;re++){const $t=F[re],pe=$t.object,Le=$t.geometry,We=$t.material,Qn=$t.group;if(We.side===sa&&pe.layers.test(Z.layers)){const Ge=We.side;We.side=jn,We.needsUpdate=!0,gi(pe,Q,Z,Le,We,Qn),We.side=Ge,We.needsUpdate=!0,Jt=!0}}Jt===!0&&(U.updateMultisampleRenderTarget(mt),U.updateRenderTargetMipmap(mt)),C.setRenderTarget(Bt),C.setClearColor(_t,W),C.toneMapping=Vt}function Zn(T,F,Q){const Z=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Dt=T.length;$<Dt;$++){const Bt=T[$],Vt=Bt.object,Jt=Bt.geometry,re=Z===null?Bt.material:Z,ie=Bt.group;Vt.layers.test(Q.layers)&&gi(Vt,F,Q,Jt,re,ie)}}function gi(T,F,Q,Z,$,Dt){T.onBeforeRender(C,F,Q,Z,$,Dt),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(C,F,Q,Z,T,Dt),$.transparent===!0&&$.side===sa&&$.forceSinglePass===!1?($.side=jn,$.needsUpdate=!0,C.renderBufferDirect(Q,F,Z,$,T,Dt),$.side=vr,$.needsUpdate=!0,C.renderBufferDirect(Q,F,Z,$,T,Dt),$.side=sa):C.renderBufferDirect(Q,F,Z,$,T,Dt),T.onAfterRender(C,F,Q,Z,$,Dt)}function _i(T,F,Q){F.isScene!==!0&&(F=Rt);const Z=Ht.get(T),$=x.state.lights,Dt=x.state.shadowsArray,Bt=$.state.version,Vt=Xt.getParameters(T,$.state,Dt,F,Q),Jt=Xt.getProgramCacheKey(Vt);let re=Z.programs;Z.environment=T.isMeshStandardMaterial?F.environment:null,Z.fog=F.fog,Z.envMap=(T.isMeshStandardMaterial?ot:w).get(T.envMap||Z.environment),re===void 0&&(T.addEventListener("dispose",wt),re=new Map,Z.programs=re);let ie=re.get(Jt);if(ie!==void 0){if(Z.currentProgram===ie&&Z.lightsStateVersion===Bt)return Ui(T,Vt),ie}else Vt.uniforms=Xt.getUniforms(T),T.onBuild(Q,Vt,C),T.onBeforeCompile(Vt,C),ie=Xt.acquireProgram(Vt,Jt),re.set(Jt,ie),Z.uniforms=Vt.uniforms;const $t=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($t.clippingPlanes=ae.uniform),Ui(T,Vt),Z.needsLights=zt(T),Z.lightsStateVersion=Bt,Z.needsLights&&($t.ambientLightColor.value=$.state.ambient,$t.lightProbe.value=$.state.probe,$t.directionalLights.value=$.state.directional,$t.directionalLightShadows.value=$.state.directionalShadow,$t.spotLights.value=$.state.spot,$t.spotLightShadows.value=$.state.spotShadow,$t.rectAreaLights.value=$.state.rectArea,$t.ltc_1.value=$.state.rectAreaLTC1,$t.ltc_2.value=$.state.rectAreaLTC2,$t.pointLights.value=$.state.point,$t.pointLightShadows.value=$.state.pointShadow,$t.hemisphereLights.value=$.state.hemi,$t.directionalShadowMap.value=$.state.directionalShadowMap,$t.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$t.spotShadowMap.value=$.state.spotShadowMap,$t.spotLightMatrix.value=$.state.spotLightMatrix,$t.spotLightMap.value=$.state.spotLightMap,$t.pointShadowMap.value=$.state.pointShadowMap,$t.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=ie,Z.uniformsList=null,ie}function ri(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Tc.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ui(T,F){const Q=Ht.get(T);Q.outputColorSpace=F.outputColorSpace,Q.batching=F.batching,Q.instancing=F.instancing,Q.instancingColor=F.instancingColor,Q.skinning=F.skinning,Q.morphTargets=F.morphTargets,Q.morphNormals=F.morphNormals,Q.morphColors=F.morphColors,Q.morphTargetsCount=F.morphTargetsCount,Q.numClippingPlanes=F.numClippingPlanes,Q.numIntersection=F.numClipIntersection,Q.vertexAlphas=F.vertexAlphas,Q.vertexTangents=F.vertexTangents,Q.toneMapping=F.toneMapping}function Wi(T,F,Q,Z,$){F.isScene!==!0&&(F=Rt),U.resetTextureUnits();const Dt=F.fog,Bt=Z.isMeshStandardMaterial?F.environment:null,Vt=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ua,Jt=(Z.isMeshStandardMaterial?ot:w).get(Z.envMap||Bt),re=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ie=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$t=!!Q.morphAttributes.position,pe=!!Q.morphAttributes.normal,Le=!!Q.morphAttributes.color;let We=mr;Z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(We=C.toneMapping);const Qn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ge=Qn!==void 0?Qn.length:0,Pt=Ht.get(Z),en=x.state.lights;if(L===!0&&(K===!0||T!==b)){const Hn=T===b&&Z.id===rt;ae.setState(Z,T,Hn)}let ge=!1;Z.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==en.state.version||Pt.outputColorSpace!==Vt||$.isBatchedMesh&&Pt.batching===!1||!$.isBatchedMesh&&Pt.batching===!0||$.isInstancedMesh&&Pt.instancing===!1||!$.isInstancedMesh&&Pt.instancing===!0||$.isSkinnedMesh&&Pt.skinning===!1||!$.isSkinnedMesh&&Pt.skinning===!0||$.isInstancedMesh&&Pt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Pt.instancingColor===!1&&$.instanceColor!==null||Pt.envMap!==Jt||Z.fog===!0&&Pt.fog!==Dt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ae.numPlanes||Pt.numIntersection!==ae.numIntersection)||Pt.vertexAlphas!==re||Pt.vertexTangents!==ie||Pt.morphTargets!==$t||Pt.morphNormals!==pe||Pt.morphColors!==Le||Pt.toneMapping!==We||se.isWebGL2===!0&&Pt.morphTargetsCount!==Ge)&&(ge=!0):(ge=!0,Pt.__version=Z.version);let mn=Pt.currentProgram;ge===!0&&(mn=_i(Z,F,$));let qi=!1,zn=!1,Yi=!1;const nn=mn.getUniforms(),Kn=Pt.uniforms;if(Ft.useProgram(mn.program)&&(qi=!0,zn=!0,Yi=!0),Z.id!==rt&&(rt=Z.id,zn=!0),qi||b!==T){nn.setValue(q,"projectionMatrix",T.projectionMatrix),nn.setValue(q,"viewMatrix",T.matrixWorldInverse);const Hn=nn.map.cameraPosition;Hn!==void 0&&Hn.setValue(q,Ut.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&nn.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&nn.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,zn=!0,Yi=!0)}if($.isSkinnedMesh){nn.setOptional(q,$,"bindMatrix"),nn.setOptional(q,$,"bindMatrixInverse");const Hn=$.skeleton;Hn&&(se.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),nn.setValue(q,"boneTexture",Hn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(nn.setOptional(q,$,"batchingTexture"),nn.setValue(q,"batchingTexture",$._matricesTexture,U));const an=Q.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0&&se.isWebGL2===!0)&&fe.update($,Q,mn),(zn||Pt.receiveShadow!==$.receiveShadow)&&(Pt.receiveShadow=$.receiveShadow,nn.setValue(q,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Kn.envMap.value=Jt,Kn.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),zn&&(nn.setValue(q,"toneMappingExposure",C.toneMappingExposure),Pt.needsLights&&xr(Kn,Yi),Dt&&Z.fog===!0&&At.refreshFogUniforms(Kn,Dt),At.refreshMaterialUniforms(Kn,Z,st,H,mt),Tc.upload(q,ri(Pt),Kn,U)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Tc.upload(q,ri(Pt),Kn,U),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&nn.setValue(q,"center",$.center),nn.setValue(q,"modelViewMatrix",$.modelViewMatrix),nn.setValue(q,"normalMatrix",$.normalMatrix),nn.setValue(q,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Hn=Z.uniformsGroups;for(let es=0,wl=Hn.length;es<wl;es++)if(se.isWebGL2){const ki=Hn[es];ye.update(ki,mn),ye.bind(ki,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function xr(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function zt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,F,Q){Ht.get(T.texture).__webglTexture=F,Ht.get(T.depthTexture).__webglTexture=Q;const Z=Ht.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=Q===void 0,Z.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const Q=Ht.get(T);Q.__webglFramebuffer=F,Q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Q=0){O=T,X=F,B=Q;let Z=!0,$=null,Dt=!1,Bt=!1;if(T){const Jt=Ht.get(T);Jt.__useDefaultFramebuffer!==void 0?(Ft.bindFramebuffer(q.FRAMEBUFFER,null),Z=!1):Jt.__webglFramebuffer===void 0?U.setupRenderTarget(T):Jt.__hasExternalTextures&&U.rebindTextures(T,Ht.get(T.texture).__webglTexture,Ht.get(T.depthTexture).__webglTexture);const re=T.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Bt=!0);const ie=Ht.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ie[F])?$=ie[F][Q]:$=ie[F],Dt=!0):se.isWebGL2&&T.samples>0&&U.useMultisampledRTT(T)===!1?$=Ht.get(T).__webglMultisampledFramebuffer:Array.isArray(ie)?$=ie[Q]:$=ie,D.copy(T.viewport),lt.copy(T.scissor),nt=T.scissorTest}else D.copy(ht).multiplyScalar(st).floor(),lt.copy(Et).multiplyScalar(st).floor(),nt=Tt;if(Ft.bindFramebuffer(q.FRAMEBUFFER,$)&&se.drawBuffers&&Z&&Ft.drawBuffers(T,$),Ft.viewport(D),Ft.scissor(lt),Ft.setScissorTest(nt),Dt){const Jt=Ht.get(T.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+F,Jt.__webglTexture,Q)}else if(Bt){const Jt=Ht.get(T.texture),re=F||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Jt.__webglTexture,Q||0,re)}rt=-1},this.readRenderTargetPixels=function(T,F,Q,Z,$,Dt,Bt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){Ft.bindFramebuffer(q.FRAMEBUFFER,Vt);try{const Jt=T.texture,re=Jt.format,ie=Jt.type;if(re!==Xi&&ut.convert(re)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=ie===bl&&(qt.has("EXT_color_buffer_half_float")||se.isWebGL2&&qt.has("EXT_color_buffer_float"));if(ie!==gr&&ut.convert(ie)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ie===dr&&(se.isWebGL2||qt.has("OES_texture_float")||qt.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-Z&&Q>=0&&Q<=T.height-$&&q.readPixels(F,Q,Z,$,ut.convert(re),ut.convert(ie),Dt)}finally{const Jt=O!==null?Ht.get(O).__webglFramebuffer:null;Ft.bindFramebuffer(q.FRAMEBUFFER,Jt)}}},this.copyFramebufferToTexture=function(T,F,Q=0){const Z=Math.pow(2,-Q),$=Math.floor(F.image.width*Z),Dt=Math.floor(F.image.height*Z);U.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,Q,0,0,T.x,T.y,$,Dt),Ft.unbindTexture()},this.copyTextureToTexture=function(T,F,Q,Z=0){const $=F.image.width,Dt=F.image.height,Bt=ut.convert(Q.format),Vt=ut.convert(Q.type);U.setTexture2D(Q,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment),F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Z,T.x,T.y,$,Dt,Bt,Vt,F.image.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Z,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Bt,F.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Z,T.x,T.y,Bt,Vt,F.image),Z===0&&Q.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(T,F,Q,Z,$=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Dt=T.max.x-T.min.x+1,Bt=T.max.y-T.min.y+1,Vt=T.max.z-T.min.z+1,Jt=ut.convert(Z.format),re=ut.convert(Z.type);let ie;if(Z.isData3DTexture)U.setTexture3D(Z,0),ie=q.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)U.setTexture2DArray(Z,0),ie=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);const $t=q.getParameter(q.UNPACK_ROW_LENGTH),pe=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Le=q.getParameter(q.UNPACK_SKIP_PIXELS),We=q.getParameter(q.UNPACK_SKIP_ROWS),Qn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ge=Q.isCompressedTexture?Q.mipmaps[$]:Q.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ge.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ge.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,T.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,T.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,T.min.z),Q.isDataTexture||Q.isData3DTexture?q.texSubImage3D(ie,$,F.x,F.y,F.z,Dt,Bt,Vt,Jt,re,Ge.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(ie,$,F.x,F.y,F.z,Dt,Bt,Vt,Jt,Ge.data)):q.texSubImage3D(ie,$,F.x,F.y,F.z,Dt,Bt,Vt,Jt,re,Ge),q.pixelStorei(q.UNPACK_ROW_LENGTH,$t),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,pe),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Le),q.pixelStorei(q.UNPACK_SKIP_ROWS,We),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Qn),$===0&&Z.generateMipmaps&&q.generateMipmap(ie),Ft.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),Ft.unbindTexture()},this.resetState=function(){X=0,B=0,O=null,Ft.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===xp?"display-p3":"srgb",i.unpackColorSpace=Xe.workingColorSpace===Pc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Un?La:By}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===La?Un:Ua}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class l2 extends rS{}l2.prototype.isWebGL1Renderer=!0;class bp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=i,this.far=s}clone(){return new bp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class u2 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class c2{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=fp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_r()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,f=this.stride;l<f;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_r()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new G;class Oc{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyMatrix4(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyNormalMatrix(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.transformDirection(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=wa(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=wa(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=wa(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=wa(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),s=ke(s,this.array),l=ke(l,this.array),f=ke(f,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=f,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[l+f])}return new ai(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[l+f])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sS extends Sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ao;const ml=new G,ro=new G,so=new G,oo=new Zt,gl=new Zt,oS=new tn,_c=new G,_l=new G,vc=new G,fy=new Zt,Zd=new Zt,hy=new Zt;class f2 extends dn{constructor(e=new sS){if(super(),this.isSprite=!0,this.type="Sprite",ao===void 0){ao=new Nn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new c2(i,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new Oc(s,3,0,!1)),ao.setAttribute("uv",new Oc(s,2,3,!1))}this.geometry=ao,this.material=e,this.center=new Zt(.5,.5)}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),oS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),so.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-so.z);const s=this.material.rotation;let l,f;s!==0&&(f=Math.cos(s),l=Math.sin(s));const d=this.center;yc(_c.set(-.5,-.5,0),so,d,ro,l,f),yc(_l.set(.5,-.5,0),so,d,ro,l,f),yc(vc.set(.5,.5,0),so,d,ro,l,f),fy.set(0,0),Zd.set(1,0),hy.set(1,1);let h=e.ray.intersectTriangle(_c,_l,vc,!1,ml);if(h===null&&(yc(_l.set(-.5,.5,0),so,d,ro,l,f),Zd.set(0,1),h=e.ray.intersectTriangle(_c,vc,_l,!1,ml),h===null))return;const p=e.ray.origin.distanceTo(ml);p<e.near||p>e.far||i.push({distance:p,point:ml.clone(),uv:Ci.getInterpolation(ml,_c,_l,vc,fy,Zd,hy,new Zt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yc(o,e,i,s,l,f){oo.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(gl.x=f*oo.x-l*oo.y,gl.y=l*oo.x+f*oo.y):gl.copy(oo),o.copy(e),o.x+=gl.x,o.y+=gl.y,o.applyMatrix4(oS)}class gp extends Sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dy=new G,py=new G,my=new tn,Qd=new Mp,Sc=new Rl;class gy extends dn{constructor(e=new Nn,i=new gp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,f=i.count;l<f;l++)dy.fromBufferAttribute(i,l-1),py.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=dy.distanceTo(py);e.setAttribute("lineDistance",new pn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=f,e.ray.intersectsSphere(Sc)===!1)return;my.copy(l).invert(),Qd.copy(e.ray).applyMatrix4(my);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,g=new G,_=new G,m=new G,y=new G,M=this.isLineSegments?2:1,A=s.index,x=s.attributes.position;if(A!==null){const S=Math.max(0,d.start),z=Math.min(A.count,d.start+d.count);for(let C=S,N=z-1;C<N;C+=M){const X=A.getX(C),B=A.getX(C+1);if(g.fromBufferAttribute(x,X),_.fromBufferAttribute(x,B),Qd.distanceSqToSegment(g,_,y,m)>p)continue;y.applyMatrix4(this.matrixWorld);const rt=e.ray.origin.distanceTo(y);rt<e.near||rt>e.far||i.push({distance:rt,point:m.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,d.start),z=Math.min(x.count,d.start+d.count);for(let C=S,N=z-1;C<N;C+=M){if(g.fromBufferAttribute(x,C),_.fromBufferAttribute(x,C+1),Qd.distanceSqToSegment(g,_,y,m)>p)continue;y.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(y);B<e.near||B>e.far||i.push({distance:B,point:m.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}class lS extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _y=new tn,_p=new Mp,xc=new Rl,Mc=new G;class h2 extends dn{constructor(e=new Nn,i=new lS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,f=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=f,e.ray.intersectsSphere(xc)===!1)return;_y.copy(l).invert(),_p.copy(e.ray).applyMatrix4(_y);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,g=s.index,m=s.attributes.position;if(g!==null){const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let A=y,R=M;A<R;A++){const x=g.getX(A);Mc.fromBufferAttribute(m,x),vy(Mc,x,p,l,e,i,this)}}else{const y=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let A=y,R=M;A<R;A++)Mc.fromBufferAttribute(m,A),vy(Mc,A,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function vy(o,e,i,s,l,f,d){const h=_p.distanceSqToPoint(o);if(h<i){const p=new G;_p.closestPointToPoint(o,p),p.applyMatrix4(s);const g=l.ray.origin.distanceTo(p);if(g<l.near||g>l.far)return;f.push({distance:g,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,object:d})}}class d2 extends ii{constructor(e,i,s,l,f,d,h,p,g){super(e,i,s,l,f,d,h,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Na{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),f=0;i.push(0);for(let d=1;d<=e;d++)s=this.getPoint(d/e),f+=s.distanceTo(l),i.push(f),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const s=this.getLengths();let l=0;const f=s.length;let d;i?d=i:d=e*s[f-1];let h=0,p=f-1,g;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),g=s[l]-d,g<0)h=l+1;else if(g>0)p=l-1;else{p=l;break}if(l=p,s[l]===d)return l/(f-1);const _=s[l],y=s[l+1]-_,M=(d-_)/y;return(l+M)/(f-1)}getTangent(e,i){let l=e-1e-4,f=e+1e-4;l<0&&(l=0),f>1&&(f=1);const d=this.getPoint(l),h=this.getPoint(f),p=i||(d.isVector2?new Zt:new G);return p.copy(h).sub(d).normalize(),p}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i){const s=new G,l=[],f=[],d=[],h=new G,p=new tn;for(let M=0;M<=e;M++){const A=M/e;l[M]=this.getTangentAt(A,new G)}f[0]=new G,d[0]=new G;let g=Number.MAX_VALUE;const _=Math.abs(l[0].x),m=Math.abs(l[0].y),y=Math.abs(l[0].z);_<=g&&(g=_,s.set(1,0,0)),m<=g&&(g=m,s.set(0,1,0)),y<=g&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),f[0].crossVectors(l[0],h),d[0].crossVectors(l[0],f[0]);for(let M=1;M<=e;M++){if(f[M]=f[M-1].clone(),d[M]=d[M-1].clone(),h.crossVectors(l[M-1],l[M]),h.length()>Number.EPSILON){h.normalize();const A=Math.acos(Fn(l[M-1].dot(l[M]),-1,1));f[M].applyMatrix4(p.makeRotationAxis(h,A))}d[M].crossVectors(l[M],f[M])}if(i===!0){let M=Math.acos(Fn(f[0].dot(f[e]),-1,1));M/=e,l[0].dot(h.crossVectors(f[0],f[e]))>0&&(M=-M);for(let A=1;A<=e;A++)f[A].applyMatrix4(p.makeRotationAxis(l[A],M*A)),d[A].crossVectors(l[A],f[A])}return{tangents:l,normals:f,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class uS extends Na{constructor(e=0,i=0,s=1,l=1,f=0,d=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=f,this.aEndAngle=d,this.aClockwise=h,this.aRotation=p}getPoint(e,i){const s=i||new Zt,l=Math.PI*2;let f=this.aEndAngle-this.aStartAngle;const d=Math.abs(f)<Number.EPSILON;for(;f<0;)f+=l;for(;f>l;)f-=l;f<Number.EPSILON&&(d?f=0:f=l),this.aClockwise===!0&&!d&&(f===l?f=-l:f=f-l);const h=this.aStartAngle+e*f;let p=this.aX+this.xRadius*Math.cos(h),g=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const _=Math.cos(this.aRotation),m=Math.sin(this.aRotation),y=p-this.aX,M=g-this.aY;p=y*_-M*m+this.aX,g=y*m+M*_+this.aY}return s.set(p,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p2 extends uS{constructor(e,i,s,l,f,d){super(e,i,s,s,l,f,d),this.isArcCurve=!0,this.type="ArcCurve"}}function Ap(){let o=0,e=0,i=0,s=0;function l(f,d,h,p){o=f,e=h,i=-3*f+3*d-2*h-p,s=2*f-2*d+h+p}return{initCatmullRom:function(f,d,h,p,g){l(d,h,g*(h-f),g*(p-d))},initNonuniformCatmullRom:function(f,d,h,p,g,_,m){let y=(d-f)/g-(h-f)/(g+_)+(h-d)/_,M=(h-d)/_-(p-d)/(_+m)+(p-h)/m;y*=_,M*=_,l(d,h,y,M)},calc:function(f){const d=f*f,h=d*f;return o+e*f+i*d+s*h}}}const Ec=new G,Kd=new Ap,Jd=new Ap,$d=new Ap;class m2 extends Na{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new G){const s=i,l=this.points,f=l.length,d=(f-(this.closed?0:1))*e;let h=Math.floor(d),p=d-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/f)+1)*f:p===0&&h===f-1&&(h=f-2,p=1);let g,_;this.closed||h>0?g=l[(h-1)%f]:(Ec.subVectors(l[0],l[1]).add(l[0]),g=Ec);const m=l[h%f],y=l[(h+1)%f];if(this.closed||h+2<f?_=l[(h+2)%f]:(Ec.subVectors(l[f-1],l[f-2]).add(l[f-1]),_=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let A=Math.pow(g.distanceToSquared(m),M),R=Math.pow(m.distanceToSquared(y),M),x=Math.pow(y.distanceToSquared(_),M);R<1e-4&&(R=1),A<1e-4&&(A=R),x<1e-4&&(x=R),Kd.initNonuniformCatmullRom(g.x,m.x,y.x,_.x,A,R,x),Jd.initNonuniformCatmullRom(g.y,m.y,y.y,_.y,A,R,x),$d.initNonuniformCatmullRom(g.z,m.z,y.z,_.z,A,R,x)}else this.curveType==="catmullrom"&&(Kd.initCatmullRom(g.x,m.x,y.x,_.x,this.tension),Jd.initCatmullRom(g.y,m.y,y.y,_.y,this.tension),$d.initCatmullRom(g.z,m.z,y.z,_.z,this.tension));return s.set(Kd.calc(p),Jd.calc(p),$d.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new G().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yy(o,e,i,s,l){const f=(s-e)*.5,d=(l-i)*.5,h=o*o,p=o*h;return(2*i-2*s+f+d)*p+(-3*i+3*s-2*f-d)*h+f*o+i}function g2(o,e){const i=1-o;return i*i*e}function _2(o,e){return 2*(1-o)*o*e}function v2(o,e){return o*o*e}function xl(o,e,i,s){return g2(o,e)+_2(o,i)+v2(o,s)}function y2(o,e){const i=1-o;return i*i*i*e}function S2(o,e){const i=1-o;return 3*i*i*o*e}function x2(o,e){return 3*(1-o)*o*o*e}function M2(o,e){return o*o*o*e}function Ml(o,e,i,s,l){return y2(o,e)+S2(o,i)+x2(o,s)+M2(o,l)}class E2 extends Na{constructor(e=new Zt,i=new Zt,s=new Zt,l=new Zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new Zt){const s=i,l=this.v0,f=this.v1,d=this.v2,h=this.v3;return s.set(Ml(e,l.x,f.x,d.x,h.x),Ml(e,l.y,f.y,d.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T2 extends Na{constructor(e=new G,i=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new G){const s=i,l=this.v0,f=this.v1,d=this.v2,h=this.v3;return s.set(Ml(e,l.x,f.x,d.x,h.x),Ml(e,l.y,f.y,d.y,h.y),Ml(e,l.z,f.z,d.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b2 extends Na{constructor(e=new Zt,i=new Zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new Zt){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Zt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A2 extends Na{constructor(e=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new G){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R2 extends Na{constructor(e=new Zt,i=new Zt,s=new Zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new Zt){const s=i,l=this.v0,f=this.v1,d=this.v2;return s.set(xl(e,l.x,f.x,d.x),xl(e,l.y,f.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rp extends Na{constructor(e=new G,i=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new G){const s=i,l=this.v0,f=this.v1,d=this.v2;return s.set(xl(e,l.x,f.x,d.x),xl(e,l.y,f.y,d.y),xl(e,l.z,f.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w2 extends Na{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Zt){const s=i,l=this.points,f=(l.length-1)*e,d=Math.floor(f),h=f-d,p=l[d===0?d:d-1],g=l[d],_=l[d>l.length-2?l.length-1:d+1],m=l[d>l.length-3?l.length-1:d+2];return s.set(yy(h,p.x,g.x,_.x,m.x),yy(h,p.y,g.y,_.y,m.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new Zt().fromArray(l))}return this}}var C2=Object.freeze({__proto__:null,ArcCurve:p2,CatmullRomCurve3:m2,CubicBezierCurve:E2,CubicBezierCurve3:T2,EllipseCurve:uS,LineCurve:b2,LineCurve3:A2,QuadraticBezierCurve:R2,QuadraticBezierCurve3:Rp,SplineCurve:w2});class wp extends Nn{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const f=[],d=[],h=[],p=[],g=new G,_=new Zt;d.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let m=0,y=3;m<=i;m++,y+=3){const M=s+m/i*l;g.x=e*Math.cos(M),g.y=e*Math.sin(M),d.push(g.x,g.y,g.z),h.push(0,0,1),_.x=(d[y]/e+1)/2,_.y=(d[y+1]/e+1)/2,p.push(_.x,_.y)}for(let m=1;m<=i;m++)f.push(m,m+1,0);this.setIndex(f),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ca extends Nn{constructor(e=1,i=1,s=1,l=32,f=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:p};const g=this;l=Math.floor(l),f=Math.floor(f);const _=[],m=[],y=[],M=[];let A=0;const R=[],x=s/2;let S=0;z(),d===!1&&(e>0&&C(!0),i>0&&C(!1)),this.setIndex(_),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(M,2));function z(){const N=new G,X=new G;let B=0;const O=(i-e)/s;for(let rt=0;rt<=f;rt++){const b=[],D=rt/f,lt=D*(i-e)+e;for(let nt=0;nt<=l;nt++){const _t=nt/l,W=_t*p+h,et=Math.sin(W),H=Math.cos(W);X.x=lt*et,X.y=-D*s+x,X.z=lt*H,m.push(X.x,X.y,X.z),N.set(et,O,H).normalize(),y.push(N.x,N.y,N.z),M.push(_t,1-D),b.push(A++)}R.push(b)}for(let rt=0;rt<l;rt++)for(let b=0;b<f;b++){const D=R[b][rt],lt=R[b+1][rt],nt=R[b+1][rt+1],_t=R[b][rt+1];_.push(D,lt,_t),_.push(lt,nt,_t),B+=6}g.addGroup(S,B,0),S+=B}function C(N){const X=A,B=new Zt,O=new G;let rt=0;const b=N===!0?e:i,D=N===!0?1:-1;for(let nt=1;nt<=l;nt++)m.push(0,x*D,0),y.push(0,D,0),M.push(.5,.5),A++;const lt=A;for(let nt=0;nt<=l;nt++){const W=nt/l*p+h,et=Math.cos(W),H=Math.sin(W);O.x=b*H,O.y=x*D,O.z=b*et,m.push(O.x,O.y,O.z),y.push(0,D,0),B.x=et*.5+.5,B.y=H*.5*D+.5,M.push(B.x,B.y),A++}for(let nt=0;nt<l;nt++){const _t=X+nt,W=lt+nt;N===!0?_.push(W,W+1,_t):_.push(W+1,W,_t),rt+=3}g.addGroup(S,rt,N===!0?1:2),S+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fc extends Ca{constructor(e=1,i=1,s=32,l=1,f=!1,d=0,h=Math.PI*2){super(0,e,i,s,l,f,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:f,thetaStart:d,thetaLength:h}}static fromJSON(e){return new Fc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class El extends Nn{constructor(e=1,i=32,s=16,l=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+h,Math.PI);let g=0;const _=[],m=new G,y=new G,M=[],A=[],R=[],x=[];for(let S=0;S<=s;S++){const z=[],C=S/s;let N=0;S===0&&d===0?N=.5/i:S===s&&p===Math.PI&&(N=-.5/i);for(let X=0;X<=i;X++){const B=X/i;m.x=-e*Math.cos(l+B*f)*Math.sin(d+C*h),m.y=e*Math.cos(d+C*h),m.z=e*Math.sin(l+B*f)*Math.sin(d+C*h),A.push(m.x,m.y,m.z),y.copy(m).normalize(),R.push(y.x,y.y,y.z),x.push(B+N,1-C),z.push(g++)}_.push(z)}for(let S=0;S<s;S++)for(let z=0;z<i;z++){const C=_[S][z+1],N=_[S][z],X=_[S+1][z],B=_[S+1][z+1];(S!==0||d>0)&&M.push(C,N,B),(S!==s-1||p<Math.PI)&&M.push(N,X,B)}this.setIndex(M),this.setAttribute("position",new pn(A,3)),this.setAttribute("normal",new pn(R,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cp extends Nn{constructor(e=new Rp(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),i=64,s=1,l=8,f=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:s,radialSegments:l,closed:f};const d=e.computeFrenetFrames(i,f);this.tangents=d.tangents,this.normals=d.normals,this.binormals=d.binormals;const h=new G,p=new G,g=new Zt;let _=new G;const m=[],y=[],M=[],A=[];R(),this.setIndex(A),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(M,2));function R(){for(let C=0;C<i;C++)x(C);x(f===!1?i:0),z(),S()}function x(C){_=e.getPointAt(C/i,_);const N=d.normals[C],X=d.binormals[C];for(let B=0;B<=l;B++){const O=B/l*Math.PI*2,rt=Math.sin(O),b=-Math.cos(O);p.x=b*N.x+rt*X.x,p.y=b*N.y+rt*X.y,p.z=b*N.z+rt*X.z,p.normalize(),y.push(p.x,p.y,p.z),h.x=_.x+s*p.x,h.y=_.y+s*p.y,h.z=_.z+s*p.z,m.push(h.x,h.y,h.z)}}function S(){for(let C=1;C<=i;C++)for(let N=1;N<=l;N++){const X=(l+1)*(C-1)+(N-1),B=(l+1)*C+(N-1),O=(l+1)*C+N,rt=(l+1)*(C-1)+N;A.push(X,B,rt),A.push(B,O,rt)}}function z(){for(let C=0;C<=i;C++)for(let N=0;N<=l;N++)g.x=C/i,g.y=N/l,M.push(g.x,g.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Cp(new C2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ln extends Sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iy,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cS extends dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class D2 extends cS{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const tp=new tn,Sy=new G,xy=new G;class L2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ep,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Sy.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sy),xy.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(xy),i.updateMatrixWorld(),tp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tp),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(tp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U2 extends L2{constructor(){super(new Jy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class N2 extends cS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new U2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);const ep=5,O2=[15,25,40],fS=.061,yl=fS*10,hS=9.81,My=78,z2=.5,np=new G(0,1.65,0),P2=new G(.05,1.57,-.5),vl=1.35,bc=.8,Ey=["#f4f1e8","#f4f1e8","#1c1c1c","#1c1c1c","#2f7bd6","#2f7bd6","#d63a3a","#d63a3a","#ffd23f","#ffd23f"],ip=()=>({dir:Math.random()<.5?-1:1,speed:Math.round(Math.random()*6)}),B2=o=>o===10?"Bullseye!":o>=8?"Great shot":o>=5?"Good hit":o>=1?"Just on target":"Missed the target",Ty=o=>o>=45?"Legend":o>=35?"Sharpshooter":o>=20?"Archer":"Rookie",I2=o=>o>=yl?0:10-Math.floor(o/fS),Hc=(o,e,i)=>{const s=document.createElement("canvas");s.width=o,s.height=e,i(s.getContext("2d"),o,e);const l=new d2(s);return l.encoding=La,l},F2=()=>Hc(8,512,(o,e,i)=>{const s=o.createLinearGradient(0,0,0,i);[[0,"#2f6fb8"],[.3,"#6fb0e6"],[.46,"#ffd9a8"],[.5,"#ffcf94"],[1,"#8a6a50"]].forEach(([l,f])=>s.addColorStop(l,f)),o.fillStyle=s,o.fillRect(0,0,e,i)}),H2=()=>{const o=Hc(256,256,(e,i,s)=>{e.fillStyle="#4d8a3c",e.fillRect(0,0,i,s);for(let l=0;l<2600;l++)e.fillStyle=`hsl(${88+Math.random()*30},${40+Math.random()*25}%,${22+Math.random()*20}%)`,e.fillRect(Math.random()*i,Math.random()*s,2,3+Math.random()*4)});return o.wrapS=o.wrapT=Rc,o.repeat.set(90,90),o.anisotropy=4,o},G2=()=>Hc(512,512,(o,e)=>{const i=e/2;for(let s=0;s<10;s++)o.beginPath(),o.arc(i,i,i*(1-s/10),0,Math.PI*2),o.fillStyle=Ey[s],o.fill(),o.lineWidth=2,o.strokeStyle=Ey[s]==="#1c1c1c"?"#ddd":"#222",o.stroke();o.strokeStyle="#222",o.lineWidth=2,o.beginPath(),o.moveTo(i-8,i),o.lineTo(i+8,i),o.moveTo(i,i-8),o.lineTo(i,i+8),o.stroke()}),V2=()=>Hc(128,128,o=>{const e=o.createRadialGradient(64,64,2,64,64,64);e.addColorStop(0,"rgba(255,255,230,1)"),e.addColorStop(.25,"rgba(255,220,150,.8)"),e.addColorStop(1,"rgba(255,190,110,0)"),o.fillStyle=e,o.fillRect(0,0,128,128)});function ap(o=1){const e=new oa,i=new Ln({color:14267002,roughness:.6}),s=new Ye(new Ca(.006,.006,bc,8).rotateX(Math.PI/2),i);s.position.z=bc/2;const l=new Ye(new Fc(.011,.05,10).rotateX(-Math.PI/2),new Ln({color:12174028,metalness:.9,roughness:.3}));return l.position.z=.025,e.add(s,l),[0,120,240].forEach((f,d)=>{const h=new Ye(new yr(.002,.03,.12),new Ln({color:d?16052712:15026253,roughness:.8}));h.position.z=bc-.08,h.rotation.z=f*Math.PI/180,h.geometry.translate(0,.015,0),e.add(h)}),e.scale.setScalar(o),e.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),e}const X2=(o,e,i)=>{let s=Math.atan2(o,e),l=s+.25;const f=d=>e*Math.tan(d)-hS*e*e/(2*i*i*Math.cos(d)**2);for(let d=0;d<30;d++){const h=(s+l)/2;f(h)<o?s=h:l=h}return(s+l)/2-Math.atan2(o,e)};function W2(){const o=En.useRef(null),e=En.useRef(null),i=En.useRef(null),s=En.useRef(null),l=En.useRef(null),f=En.useRef({}),[d,h]=En.useState(25),[p,g]=En.useState(!0),[_,m]=En.useState(ip),[y,M]=En.useState([]),[A,R]=En.useState(!1),[x,S]=En.useState(()=>{try{return Number(localStorage.getItem("archery-best"))||0}catch{return 0}}),z=ep-y.length,C=z===0,N=y.reduce((b,D)=>b+D.pts,0),X=y[y.length-1],B=En.useRef({});B.current={dist:d,assist:p,wind:_,over:C,onShot:(b,D,lt)=>{M(nt=>[...nt,{pts:b,dx:D,dy:lt}]),m(ip())}},En.useEffect(()=>{const b=o.current,D=e.current,lt=new rS({antialias:!0});lt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),lt.outputEncoding=La,lt.toneMapping=wy,lt.toneMappingExposure=1.05,lt.shadowMap.enabled=!0,lt.shadowMap.type=Ay,D.appendChild(lt.domElement);const nt=new u2;nt.fog=new bp(15782568,110,480);const _t=new Di(48,1,.05,700);_t.position.copy(np),nt.add(_t);const W=new Ye(new El(450,32,16),new Nc({map:F2(),side:jn,fog:!1}));nt.add(W);const et=new f2(new sS({map:V2(),blending:rp,fog:!1,depthWrite:!1}));et.position.set(-170,55,-380),et.scale.set(95,95,1),nt.add(et),nt.add(new D2(13625087,4876858,.65));const H=new N2(16769712,1.6);H.position.set(-26,38,22),H.castShadow=!0,H.shadow.mapSize.set(2048,2048),Object.assign(H.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:120}),nt.add(H,H.target);const st=new Ye(new ho(900,900),new Ln({map:H2(),roughness:1}));st.rotation.x=-Math.PI/2,st.receiveShadow=!0,nt.add(st);const it=new Ye(new ho(5,120),new Ln({color:6989903,roughness:1,transparent:!0,opacity:.45}));it.rotation.x=-Math.PI/2,it.position.set(0,.01,-50),it.receiveShadow=!0,nt.add(it);const ft=new Ye(new yr(4,.12,2.4),new Ln({color:9067059,roughness:.8}));ft.position.set(0,.06,.4),ft.receiveShadow=!0,nt.add(ft);const ht=new Ln({color:4025163,roughness:1});[[-190,-300,190,60],[10,-330,220,75],[210,-290,180,55]].forEach(([zt,T,F,Q])=>{const Z=new Ye(new El(1,24,12),ht);Z.scale.set(F,Q,70),Z.position.set(zt,-Q*.2,T),nt.add(Z)});const Et=new Ln({color:5913378,roughness:1}),Tt=[3107642,3833156,2382900].map(zt=>new Ln({color:zt,roughness:1}));for(let zt=0;zt<90;zt++){const T=Math.random()<.5?-1:1,F=T*(9+Math.random()*70),Q=25-Math.random()*190,Z=.8+Math.random()*1.3,$=new oa,Dt=new Ye(new Ca(.2*Z,.3*Z,2*Z,7),Et);Dt.position.y=Z,$.add(Dt);for(let Bt=0;Bt<3;Bt++){const Vt=new Ye(new Fc((2.1-Bt*.5)*Z,2.6*Z,8),Tt[zt%3]);Vt.position.y=(2.4+Bt*1.3)*Z,$.add(Vt)}$.position.set(F,0,Q),nt.add($)}const ct=new oa;nt.add(ct);const L=new Ln({color:8016432,roughness:.8}),K=new Ye(new Ca(yl+.06,yl+.06,.18,40).rotateX(Math.PI/2),new Ln({color:13214282,roughness:1}));K.position.set(0,vl,-.1),K.castShadow=K.receiveShadow=!0,ct.add(K);const mt=new Ye(new wp(yl,64),new Ln({map:G2(),roughness:.9}));mt.position.set(0,vl,0),mt.receiveShadow=!0,ct.add(mt);const gt=vl+.4;[[-.45,-.1,0,.1],[.45,-.1,0,-.1],[0,-.65,.35,0]].forEach(([zt,T,F,Q])=>{const Z=new Ye(new Ca(.035,.045,gt,8),L);Z.position.set(zt,gt/2-.05,T),Z.rotation.set(F,0,Q),Z.castShadow=!0,ct.add(Z)});const Ot=new Ln({color:13609294,roughness:1});for(let zt=0;zt<2;zt++)for(let T=-3;T<=3;T++){const F=new Ye(new yr(1.15,.8,.9),Ot);F.position.set(T*1.18+(zt?.55:0),.4+zt*.8,-2.2-zt*.05),F.castShadow=F.receiveShadow=!0,ct.add(F)}const Ut=[],Rt=(zt,T)=>{const F=new Ye(new Ca(.03,.04,4,8),new Ln({color:15658734}));F.position.set(zt,2,T),F.castShadow=!0;const Q=new oa;Q.position.set(zt,3.7,T);const Z=new ho(1.2,.5,14,1);Z.translate(.6,0,0);const $=new Ye(Z,new Nc({color:16734774,side:sa}));Q.add($),nt.add(F,Q),Ut.push({pole:F,grp:Q,geo:Z,base:Float32Array.from(Z.attributes.position.array)})};Rt(-2.4,0),Rt(3.2,0);const Mt=Ut[1],q=Ut[0],Ne=new oa;_t.add(Ne);const qt=new oa;qt.position.set(.1,-.2,0),Ne.add(qt);const se=new Ln({color:7029795,roughness:.5}),Ft=new Rp(new G(0,.3,.12),new G(0,0,-.14),new G(0,-.3,.12)),ce=new Ye(new Cp(Ft,24,.011,8),se);qt.add(ce);const Ht=new Ye(new Ca(.02,.02,.12,10),new Ln({color:1907220,roughness:.9}));Ht.position.set(0,0,-.005),qt.add(Ht);const U=new Ye(new El(.04,14,10),new Ln({color:13144176,roughness:.8}));U.position.set(0,-.01,.01),qt.add(U);const w=new Nn;w.setAttribute("position",new ai(new Float32Array(9),3));const ot=new gy(w,new gp({color:15921906}));ot.frustumCulled=!1,qt.add(ot);const xt=ap(.7);qt.add(xt);const St=bc*.7,vt=ap(1);vt.visible=!1,nt.add(vt);const Xt=new Nn;Xt.setAttribute("position",new ai(new Float32Array(360),3));const At=new gy(Xt,new gp({color:16777215,transparent:!0,opacity:.45}));At.frustumCulled=!1,nt.add(At);const It=28,te=new Float32Array(It*3),ae=new Float32Array(It*3),yt=new Nn;yt.setAttribute("position",new ai(te,3));const Ee=new lS({color:15260072,size:.06,transparent:!0,opacity:0,depthWrite:!1}),fe=new h2(yt,Ee);fe.frustumCulled=!1,nt.add(fe);let ee=[],kt=0;const ut={phase:"aim",draw:0,fatigue:0,breath:1,holding:!1,t:0,ptr:{x:0,y:0},ar:null,timer:0,trailN:0},oe=new G(0,1.3,-25),ye=new G,Oe=new G;let Yt=0,bt=48;const V=zt=>{Yt=zt,ct.position.set(0,0,-zt),H.target.position.set(0,0,-zt/2),H.position.set(-26,38,22-zt/2);const T=14+zt/2;Object.assign(H.shadow.camera,{left:-T,right:T,top:T,bottom:-T}),H.shadow.camera.updateProjectionMatrix(),oe.set(0,vl-.1,-zt),q.pole.position.z=q.grp.position.z=-zt+.6,Mt.pole.position.z=Mt.grp.position.z=-zt/2},Nt=()=>{ee.forEach(zt=>nt.remove(zt.mesh)),ee=[],vt.visible=!1,At.visible=!1},wt=()=>{Nt(),Object.assign(ut,{phase:"aim",draw:0,fatigue:0,ar:null})};V(B.current.dist),f.current={reset:wt,setDist:zt=>{wt(),V(zt)}};const Kt=new Zt,ne=()=>(_t.updateMatrixWorld(),new G(Kt.x,Kt.y,.5).unproject(_t).sub(_t.position).normalize()),ze=()=>{const zt=ut.draw;if(zt<.15){ut.phase="aim",ut.draw=0,ut.fatigue=0;return}const T=ne(),F=Yt,Q=_t.position.clone().addScaledVector(T,F/Math.max(.2,Math.abs(T.z))),Z=P2.clone(),$=Q.clone().sub(Z),Dt=Math.hypot($.x,$.z),Bt=$.clone().normalize();if(B.current.assist){const re=X2($.y,Dt,My);Bt.applyAxisAngle(new G().crossVectors(Bt,new G(0,1,0)).normalize(),re)}const Vt=My*(.3+.7*zt),Jt=B.current.wind;ut.ar={pos:Z,vel:Bt.multiplyScalar(Vt),wind:Jt.dir*Jt.speed*z2,done:!1},ut.phase="fly",ut.draw=0,ut.fatigue=0,ut.trailN=0,vt.visible=!0,At.visible=!0},Pe=(zt,T,F)=>{const Q=ap(1),Z=T.clone().normalize();Q.quaternion.setFromUnitVectors(new G(0,0,-1),Z),Q.position.copy(zt).addScaledVector(Z,F?.12:.2),nt.add(Q),ee.push({mesh:Q,q0:Q.quaternion.clone(),v:Z,age:0,hit:F})},je=zt=>{for(let T=0;T<It;T++)te.set([zt.x,zt.y,zt.z],T*3),ae.set([(Math.random()-.5)*1.2,Math.random()*.9,Math.random()*1.1],T*3);kt=.9,Ee.opacity=.9},Ce=(zt,T,F)=>{ut.ar.done=!0,ut.phase="hit",ut.timer=1.5,vt.visible=!1,Pe(zt,T,!!F&&F.pts>0),F&&je(zt),B.current.onShot(F?F.pts:0,F?Math.round(F.dx*100):null,F?Math.round(F.dy*100):null)},Se=zt=>{const T=ut.ar;let F=zt;for(;F>0&&!T.done;){const Q=Math.min(F,.004166666666666667);F-=Q;const Z=T.pos.clone();T.vel.y-=hS*Q,T.vel.x+=T.wind*Q,T.pos.addScaledVector(T.vel,Q);const $=-Yt;if(Z.z>$&&T.pos.z<=$){const Bt=(Z.z-$)/(Z.z-T.pos.z),Vt=Z.x+(T.pos.x-Z.x)*Bt,Jt=Z.y+(T.pos.y-Z.y)*Bt,re=Vt,ie=Jt-vl,$t=Math.hypot(re,ie);if($t<yl+.03){T.pos.set(Vt,Jt,$),Ce(T.pos,T.vel,{pts:I2($t),dx:re,dy:ie});return}}const Dt=T.pos.z<-Yt-1.75&&Math.abs(T.pos.x)<4.3&&T.pos.y<1.55;if(T.pos.y<=.02||Dt){Ce(T.pos,T.vel,null);return}}},we=zt=>{const T=b.getBoundingClientRect();ut.ptr.x=Math.max(-.95,Math.min(.95,(zt.clientX-T.left)/T.width*2-1)),ut.ptr.y=Math.max(-.95,Math.min(.95,-((zt.clientY-T.top)/T.height*2-1)))},On=()=>{ut.phase==="aim"&&!B.current.over&&(ut.phase="draw",ut.draw=0,ut.fatigue=0)},Oa=()=>{ut.phase==="draw"&&ze()},ts=zt=>{var T;zt.button>0||zt.target.closest("button")||(we(zt),On(),(T=b.setPointerCapture)==null||T.call(b,zt.pointerId))},Zn=()=>Oa(),gi=zt=>{["INPUT","TEXTAREA","SELECT"].includes(zt.target.tagName)||(zt.code==="Space"&&(zt.preventDefault(),!zt.repeat&&zt.type==="keydown"&&On(),zt.type==="keyup"&&Oa()),zt.key==="Shift"&&(ut.holding=zt.type==="keydown"))};b.addEventListener("pointermove",we),b.addEventListener("pointerdown",ts),b.addEventListener("pointerup",Zn),b.addEventListener("pointercancel",Zn),window.addEventListener("keydown",gi),window.addEventListener("keyup",gi),f.current.hold=zt=>{ut.holding=zt},f.current.draw=On,f.current.loose=Oa;const _i=()=>{const zt=b.clientWidth||800,T=b.clientHeight||450;lt.setSize(zt,T),_t.aspect=zt/T,_t.updateProjectionMatrix()};_i();const ri=new ResizeObserver(_i);ri.observe(b);let Ui,Wi=performance.now();const xr=zt=>{const T=Math.min(.1,(zt-Wi)/1e3);Wi=zt;const F=B.current.wind,Q=Math.min(1,F.speed/4);ut.t+=T;const Z=ut.t;let $=1;ut.phase==="fly"&&ut.ar&&($=ut.ar.pos.z<-Yt+5&&ut.ar.pos.z>-Yt-4?.3:1);const Dt=T*$;Ut.forEach(Pt=>{Pt.grp.scale.x=F.dir,Pt.grp.rotation.z=-(1-Q)*1.25*F.dir;const en=Pt.geo.attributes.position;for(let ge=0;ge<en.count;ge++){const mn=Pt.base[ge*3];en.array[ge*3+2]=Math.sin(mn*6-Z*(3+F.speed*1.4))*.09*(.25+Q)*mn,en.array[ge*3+1]=Pt.base[ge*3+1]+Math.sin(mn*4-Z*4)*.03*Q*mn}en.needsUpdate=!0}),ut.phase==="draw"&&(ut.draw=Math.min(1,ut.draw+T/1.1),ut.draw>=1&&(ut.fatigue=Math.min(1,ut.fatigue+T/2.6)));const Bt=ut.holding&&ut.breath>0&&(ut.phase==="aim"||ut.phase==="draw");ut.breath=Math.max(0,Math.min(1,ut.breath+(Bt?-.38:.22)*T)),i.current&&(i.current.style.width=`${ut.draw*100}%`,i.current.dataset.full=ut.draw>=1?"1":"0"),s.current&&(s.current.style.width=`${ut.breath*100}%`);const Vt=ut.phase==="aim"||ut.phase==="draw";let re=48-31*(ut.phase==="draw"?ut.draw:0),ie=10;if(Vt)ye.copy(np),Oe.copy(oe);else if(ut.phase==="fly"&&ut.ar){const Pt=ut.ar.vel.clone().normalize();ye.copy(ut.ar.pos).addScaledVector(Pt,-2.6).add(new G(.35,.4,0)),Oe.copy(ut.ar.pos).addScaledVector(Pt,6),re=55,ie=14}else if(ut.phase==="hit"&&ee.length){const Pt=ee[ee.length-1].mesh.position;ye.set(Pt.x*.5+.5,Math.max(.6,Pt.y+.2),-Yt+3),Oe.set(Pt.x,Pt.y,-Yt),re=40,ie=4}else ye.copy(np),Oe.copy(oe),re=48;const $t=1-Math.exp(-T*ie);_t.position.lerp(ye,$t),oe.lerp(Oe,1-Math.exp(-T*(Vt?14:ie))),bt+=(re-bt)*(1-Math.exp(-T*(Vt?16:6))),_t.fov=bt,_t.updateProjectionMatrix(),_t.lookAt(oe);const pe=Bt?.2:1,Le=(.012+(ut.phase==="draw"?.02+.06*ut.fatigue:0))*pe,We=(Math.sin(Z*1.7)*.6+Math.sin(Z*2.9+1)*.4)*Le,Qn=(Math.sin(Z*1.3+2)*.6+Math.sin(Z*3.3)*.4)*Le*.8;if(Kt.set(ut.ptr.x+We,ut.ptr.y+Qn),l.current){const Pt=b.clientWidth,en=b.clientHeight;l.current.style.transform=`translate(${(Kt.x*.5+.5)*Pt}px, ${(-Kt.y*.5+.5)*en}px)`,l.current.style.opacity=Vt&&!B.current.over?"1":"0"}const Ge=Vt&&!B.current.over;if(Ne.visible=Ge,Ge){const Pt=Math.tan(bt*Math.PI/360),en=Math.tan(48*Math.PI/360),ge=Pt/en;qt.scale.setScalar(.6*ge),qt.position.set(.2*ge,-.26*ge,-.75);const mn=new G(Kt.x*Pt*_t.aspect,Kt.y*Pt,-1).normalize();Ne.quaternion.setFromUnitVectors(new G(0,0,-1),mn);const qi=.14+ut.draw*.3,zn=w.attributes.position;zn.array.set([0,.3,.12,0,0,qi,0,-.3,.12]),zn.needsUpdate=!0,xt.position.set(0,-.005,qi-St)}if(ut.phase==="fly"&&ut.ar&&!ut.ar.done&&(Se(Dt),ut.ar)){vt.position.copy(ut.ar.pos),vt.quaternion.setFromUnitVectors(new G(0,0,-1),ut.ar.vel.clone().normalize());const Pt=Xt.attributes.position;ut.trailN<120&&(Pt.array.set([ut.ar.pos.x,ut.ar.pos.y,ut.ar.pos.z],ut.trailN*3),ut.trailN++,Xt.setDrawRange(0,ut.trailN),Pt.needsUpdate=!0)}if(ut.phase==="hit"&&(ut.timer-=T,ut.timer<=0&&(ut.phase=B.current.over?"over":"aim",At.visible=!1)),ut.phase,ee.forEach(Pt=>{Pt.age+=T;const en=Pt.hit?Math.exp(-Pt.age*5)*Math.sin(Pt.age*45)*.05:0;Pt.mesh.quaternion.copy(Pt.q0).multiply(new yo().setFromAxisAngle(new G(1,0,0),en))}),kt>0){kt-=T,Ee.opacity=Math.max(0,kt);for(let Pt=0;Pt<It;Pt++){ae[Pt*3+1]-=3*T;for(let en=0;en<3;en++)te[Pt*3+en]+=ae[Pt*3+en]*T}yt.attributes.position.needsUpdate=!0}lt.render(nt,_t),Ui=requestAnimationFrame(xr)};return Ui=requestAnimationFrame(xr),()=>{cancelAnimationFrame(Ui),ri.disconnect(),b.removeEventListener("pointermove",we),b.removeEventListener("pointerdown",ts),b.removeEventListener("pointerup",Zn),b.removeEventListener("pointercancel",Zn),window.removeEventListener("keydown",gi),window.removeEventListener("keyup",gi),nt.traverse(zt=>{var T;(T=zt.geometry)==null||T.dispose(),[].concat(zt.material||[]).forEach(F=>{var Q;(Q=F.map)==null||Q.dispose(),F.dispose()})}),lt.dispose(),lt.domElement.parentNode===D&&D.removeChild(lt.domElement)}},[]),En.useEffect(()=>{var b,D;(D=(b=f.current).setDist)==null||D.call(b,d)},[d]),En.useEffect(()=>{if(C&&N>x){S(N),R(!0);try{localStorage.setItem("archery-best",String(N))}catch{}}},[C,N,x]);const O=()=>{var b,D;M([]),m(ip()),R(!1),(D=(b=f.current).reset)==null||D.call(b)};let rt="Move the mouse to aim · hold click or Space to draw · release to shoot";return X&&(rt=`${B2(X.pts)}${X.pts?` · +${X.pts}`:""}`),C&&(rt=`Round over! ${N} / ${ep*10} · ${Ty(N)}${A?" · New best score!":""}`),jt.jsxs("div",{className:"ar",children:[jt.jsxs("div",{className:"ar-stage",ref:o,children:[jt.jsx("div",{className:"ar-canvas",ref:e}),jt.jsxs("div",{className:"ar-hud",children:[jt.jsxs("div",{className:"ar-stat",children:[jt.jsx("small",{children:"Score"}),jt.jsx("b",{children:N})]}),jt.jsxs("div",{className:"ar-stat",children:[jt.jsx("small",{children:"Arrows left"}),jt.jsx("b",{children:z})]}),jt.jsxs("div",{className:"ar-stat",children:[jt.jsx("small",{children:"Best"}),jt.jsx("b",{children:x})]}),jt.jsxs("div",{className:"ar-stat",children:[jt.jsx("small",{children:"Wind m/s"}),jt.jsx("b",{children:_.speed===0?"Calm":`${_.dir<0?"←":"→"} ${_.speed}`})]}),jt.jsxs("div",{className:"ar-stat",children:[jt.jsx("small",{children:"Distance"}),jt.jsxs("b",{children:[d," m"]})]})]}),jt.jsxs("div",{className:"ar-cross",ref:l,"aria-hidden":"true",children:[jt.jsx("i",{}),jt.jsx("i",{}),jt.jsx("i",{}),jt.jsx("i",{})]}),jt.jsx("p",{className:"ar-msg"+(C?" is-over":X&&X.pts===0?" is-miss":""),"aria-live":"polite",children:rt}),X&&!C&&jt.jsx("div",{className:"ar-pop"+(X.pts===0?" is-miss":""),children:X.pts?`+${X.pts}`:"Miss"},y.length),jt.jsxs("div",{className:"ar-bars","aria-hidden":"true",children:[jt.jsxs("div",{className:"ar-bar",children:[jt.jsx("span",{children:"Draw"}),jt.jsxs("div",{children:[jt.jsx("i",{ref:i}),jt.jsx("u",{})]})]}),jt.jsxs("div",{className:"ar-bar ar-bar--breath",children:[jt.jsx("span",{children:"Breath"}),jt.jsx("div",{children:jt.jsx("i",{ref:s})})]})]}),C&&jt.jsxs("div",{className:"ar-end",children:[jt.jsx("h3",{children:Ty(N)}),jt.jsxs("p",{children:[N," / ",ep*10,A?" · New best!":""]}),jt.jsx("div",{className:"ar-log",children:y.map((b,D)=>jt.jsx("span",{className:"ar-slot is-hit",title:b.dx===null?"Missed":`${b.dx} cm / ${b.dy} cm from centre`,children:b.pts},D))}),jt.jsx("button",{type:"button",className:"btn btn--sun",onClick:O,children:"Play again"})]})]}),jt.jsxs("div",{className:"ar-controls",children:[jt.jsx("div",{className:"ar-seg",role:"group","aria-label":"Shooting distance",children:O2.map(b=>jt.jsxs("button",{type:"button",className:b===d?"is-on":"",disabled:y.length>0&&!C,onClick:()=>{h(b),C&&O()},children:[b," m"]},b))}),jt.jsxs("label",{className:"ar-check",children:[jt.jsx("input",{type:"checkbox",checked:p,onChange:b=>g(b.target.checked)})," Aim assist (auto drop)"]}),jt.jsx("button",{type:"button",className:"btn",onPointerDown:()=>{var b,D;return(D=(b=f.current).hold)==null?void 0:D.call(b,!0)},onPointerUp:()=>{var b,D;return(D=(b=f.current).hold)==null?void 0:D.call(b,!1)},onPointerLeave:()=>{var b,D;return(D=(b=f.current).hold)==null?void 0:D.call(b,!1)},children:"Hold breath (Shift)"}),jt.jsx("button",{type:"button",className:"btn btn--mint",onPointerDown:()=>{var b,D;return(D=(b=f.current).draw)==null?void 0:D.call(b)},onPointerUp:()=>{var b,D;return(D=(b=f.current).loose)==null?void 0:D.call(b)},onPointerLeave:()=>{var b,D;return(D=(b=f.current).loose)==null?void 0:D.call(b)},disabled:C,children:"Draw & release (Space)"}),jt.jsx("button",{type:"button",className:"btn btn--rose",onClick:O,children:"Restart"})]}),jt.jsx("p",{className:"ar-tip",children:"Tip: full draw gives the flattest flight but your arm starts to tremble if you hold too long. Watch the flag and aim into the wind. Hold Shift to steady your breath."})]})}const q2="10";function Y2(){return En.useEffect(()=>(document.body.dataset.task=q2,()=>{delete document.body.dataset.task}),[]),jt.jsxs("main",{className:"page",children:[jt.jsxs("div",{className:"page-head",children:[jt.jsx("span",{className:"task-chip",children:"Task 10"}),jt.jsx("h1",{className:"page-title",children:"Archery Game"}),jt.jsx("p",{className:"page-sub",children:"Time your shot as the crosshair sways across the target. Closer to the bullseye means more points. Watch out for the wind!"})]}),jt.jsx(W2,{})]})}aE.createRoot(document.getElementById("root")).render(jt.jsx(En.StrictMode,{children:jt.jsx(Y2,{})}));
