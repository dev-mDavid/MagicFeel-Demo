require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){console.log("hello world")};
},{}],3:[function(require,module,exports) {
"use strict";var e=require("../../../codeBase/animation/hello world test/hello world");(0,e.helloWorld)();
},{"../../../codeBase/animation/hello world test/hello world":4}],1:[function(require,module,exports) {
"use strict";var e=require("./projects/mDavid/page specific/MagicFeel-Demo");(0,e.buildThis)();
},{"./projects/mDavid/page specific/MagicFeel-Demo":3}]},{},[1])