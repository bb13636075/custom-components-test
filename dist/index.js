!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.myLibrary=t():e.myLibrary=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=3)}([function(e,t,r){"use strict";e.exports=r(1)},function(e,t,r){"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,f=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function g(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||h}function _(){}function j(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var O=j.prototype=new _;O.constructor=j,n(O,g.prototype),O.isPureReactComponent=!0;var w={current:null},x={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,f=null;if(null!=t)for(n in void 0!==t.ref&&(f=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),a=0;a<i;a++)l[a]=arguments[a+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:c,ref:f,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,R=[];function T(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var f=typeof t;"undefined"!==f&&"boolean"!==f||(t=null);var i=!1;if(null===t)i=!0;else switch(f){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case u:case c:i=!0}}if(i)return n(o,t,""===r?"."+I(t,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var a=r+I(f=t[l],l);i+=e(f,a,n,o)}else if(null===t||"object"!=typeof t?a=null:a="function"==typeof(a=b&&t[b]||t["@@iterator"])?a:null,"function"==typeof a)for(t=a.call(t),l=0;!(f=t.next()).done;)i+=e(f=f.value,a=r+I(f,l++),n,o);else if("object"===f)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return i}(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),M(e,q,t=T(t,u,n,o)),A(t)}function N(){var e=w.current;if(null===e)throw Error(v(321));return e}var F={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=T(null,null,t,r)),A(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:g,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return N().useCallback(e,t)},useContext:function(e,t){return N().useContext(e,t)},useEffect:function(e,t){return N().useEffect(e,t)},useImperativeHandle:function(e,t,r){return N().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return N().useLayoutEffect(e,t)},useMemo:function(e,t){return N().useMemo(e,t)},useReducer:function(e,t,r){return N().useReducer(e,t,r)},useRef:function(e){return N().useRef(e)},useState:function(e){return N().useState(e)},Fragment:f,Profiler:l,StrictMode:i,Suspense:y,createElement:C,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),c=e.key,f=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(f=t.ref,i=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)k.call(t,a)&&!P.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==l?l[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){l=Array(a);for(var s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:f,props:o,_owner:i}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n}},D={default:F},V=D&&F||D;e.exports=V.default||V},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,f,i=c(e),l=1;l<arguments.length;l++){for(var a in r=Object(arguments[l]))o.call(r,a)&&(i[a]=r[a]);if(n){f=n(r);for(var s=0;s<f.length;s++)u.call(r,f[s])&&(i[f[s]]=r[f[s]])}}return i}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u="/Users/SumTix/willTime/sparetime/test-component/custom-components-test8/src/components/Tags/index.js";class c extends o.a.Component{render(){return o.a.createElement("div",{__source:{fileName:u,lineNumber:6},__self:this},"这是一个标签！")}}var f=c;r.d(t,"TagsComp",(function(){return f}))}])}));