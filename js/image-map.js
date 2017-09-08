/**
 *
 * Image-Map v1.0.6 (https://www.travismclarke.com)
 * Copyright 2016 Travis Clarke
 * License: MIT
 *
 * @preserve
 */
!function(e,t){if(!(window&&window.document||e&&e.document))throw new Error("ImageMap requires a window with a document");"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"string"!=typeof exports.nodeName?module.exports=t(require("jquery")):e.ImageMap=t(e.jQuery)}(this||window,function(e){"use strict";var t=function(e){var r=this;return r?(r.selector=e instanceof Array?e:[].slice.call(document.querySelectorAll(e)),(r.update=function(){r.selector.forEach(function(e){var t=e,r=document.createElement("img");void 0!==t.getAttribute("usemap")&&(r.addEventListener("load",function(){var e=new Image;e.src=t.getAttribute("src");var r=t.getAttribute("width")||e.width,n=t.getAttribute("height")||e.height,i=t.offsetWidth/100,o=t.offsetHeight/100,a=t.getAttribute("usemap").replace("#",""),u="coords";[].forEach.call(document.querySelectorAll('map[name="'+a+'"] area'),function(e){var t=e,a=t.dataset[u]=t.dataset[u]||t.getAttribute(u),c=a.split(","),d=Array.apply(null,Array(c.length));d.forEach(function(e,t){d[t]=t%2==0?Number(c[t]/r*100*i):Number(c[t]/n*100*o)}),t.setAttribute(u,d.toString())})}),r.setAttribute("src",t.getAttribute("src")))})})(),window.addEventListener("resize",r.update),r):new t(e)};return e&&e.fn&&(e.fn.imageMap=function(){return new t(this.toArray())}),t.ImageMap=t,t});
