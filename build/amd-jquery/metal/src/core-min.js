define(["exports"],function(e){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,n){for(var t=0;t<n.length;t++){var u=n[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(n,t,u){return t&&e(n.prototype,t),u&&e(n,u),n}}(),o=function(){function e(){n(this,e)}return u(e,null,[{key:"abstractMethod",value:function(){throw Error("Unimplemented abstract method")}},{key:"collectSuperClassesProperty",value:function(e,n){for(var t=[e[n]];e.__proto__&&!e.__proto__.isPrototypeOf(Function);)e=e.__proto__,t.push(e[n]);return t}},{key:"getFunctionName",value:function(e){if(!e.name){var n=e.toString();e.name=n.substring(9,n.indexOf("("))}return e.name}},{key:"getUid",value:function(n,t){if(n){var u=n[e.UID_PROPERTY];return t&&!n.hasOwnProperty(e.UID_PROPERTY)&&(u=null),u||(n[e.UID_PROPERTY]=e.uniqueIdCounter_++)}return e.uniqueIdCounter_++}},{key:"identityFunction",value:function(e){return e}},{key:"isBoolean",value:function(e){return"boolean"==typeof e}},{key:"isDef",value:function(e){return void 0!==e}},{key:"isDefAndNotNull",value:function(n){return e.isDef(n)&&!e.isNull(n)}},{key:"isDocument",value:function(e){return e&&"object"===("undefined"==typeof e?"undefined":t(e))&&9===e.nodeType}},{key:"isElement",value:function(e){return e&&"object"===("undefined"==typeof e?"undefined":t(e))&&1===e.nodeType}},{key:"isFunction",value:function(e){return"function"==typeof e}},{key:"isNull",value:function(e){return null===e}},{key:"isNumber",value:function(e){return"number"==typeof e}},{key:"isWindow",value:function(e){return null!==e&&e===e.window}},{key:"isObject",value:function(e){var n="undefined"==typeof e?"undefined":t(e);return"object"===n&&null!==e||"function"===n}},{key:"isPromise",value:function(e){return e&&"object"===("undefined"==typeof e?"undefined":t(e))&&"function"==typeof e.then}},{key:"isString",value:function(e){return"string"==typeof e}},{key:"mergeSuperClassesProperty",value:function(n,t,u){var o=t+"_MERGED";if(n.hasOwnProperty(o))return!1;var r=e.collectSuperClassesProperty(n,t);return u&&(r=u(r)),n[o]=r,!0}},{key:"nullFunction",value:function(){}}]),e}();o.UID_PROPERTY="core_"+(1e9*Math.random()>>>0),o.uniqueIdCounter_=1,e["default"]=o});