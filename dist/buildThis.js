require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({2:[function(require,module,exports) {
"use strict";function e(){var e;console.log("footer001"),(e=document.getElementsByTagName("footer")[0]).style.backgroundColor="none",e.style.background="rgb(0, 0, 0)",e.style.background="linear-gradient(180deg, rgba(0,0,0,1) 32%, rgba(91,57,140,1) 98%)",function(){var e=new TimelineMax;document.getElementsByClassName("Footer-nav-folder-heading")[0].style.opacity=0;for(var o=document.getElementsByClassName("Footer-nav-folder-heading"),r=[],t=1;t<o.length;t++)r.push(Array.from(o[t]));console.log(r);var a=a.flat();e.staggerFrom(flatArrayRemainingFooterNavHeader,2,{opacity:0,y:100},2,"+=.5")}()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.footer=e;
},{}],1:[function(require,module,exports) {
"use strict";var e=require("./codeBase/animation/footer/footer001");(0,e.footer)();
},{"./codeBase/animation/footer/footer001":2}]},{},[1])