var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/utilities/themes/docs.mdx.js"]=function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);f.length;)f.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={106:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var i=c;return l.push([755,0]),n()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},755:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return f})),n.d(t,"getContents",(function(){return h}));var r=n(0),a=n.n(r),l=n(4),o=n(2),u=n(1),c=[{id:"default",label:"Default",element:a.a.createElement("div",{className:"slds-box slds-theme_default"},a.a.createElement("p",null,"This is a ",a.a.createElement("strong",null,"default")," theme and here is a"," ",a.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"link"),"."))},{id:"shade",label:"Shade",element:a.a.createElement("div",{className:"slds-box slds-theme_shade"},a.a.createElement("p",null,"This is a ",a.a.createElement("strong",null,"default")," theme and here is a"," ",a.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"link"),"."))},{id:"texture",label:"Shade with texture",element:a.a.createElement("div",{className:"slds-box slds-theme_shade slds-theme_alert-texture"},a.a.createElement("p",null,"This theme has the ",a.a.createElement("strong",null,"alert texture")," added to the default theme and has a"," ",a.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"link"),"."))}],s=l.c.h2,i=l.c.h3,d=l.c.p,f=function(){return Object(r.createElement)(l.b,{},Object(r.createElement)("div",{className:"doc lead"},"Themes apply a set of color styles to an area."),s({id:"About-Themes"},"About Themes"),d({},"Use a color theme to apply color to the background and text. Some color themes apply a background image or texture."),s({id:"Base"},"Base"),Object(r.createElement)(o.a,null,Object(u.f)(c,"default")),s({id:"Examples"},"Examples"),i({id:"Shade"},"Shade"),Object(r.createElement)(o.a,null,Object(u.f)(c,"shade")),i({id:"Texture"},"Texture"),Object(r.createElement)(o.a,null,Object(u.f)(c,"texture")))},h=function(){return Object(l.a)(f())}}});