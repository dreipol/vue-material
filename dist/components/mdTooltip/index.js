!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}({0:function(t,e,o){t.exports=o(18)},18:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){t.component("md-tooltip",t.extend(r["default"]))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var s=o(109),r=n(s)},44:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=void 0,n=void 0,i=void 0,s=function(t){var e=t.targetElement.getBoundingClientRect();switch(t.mdDirection){case"top":t.$el.style.top=e.top-t.$el.offsetHeight+"px",t.$el.style.left=e.left+e.width/2+"px";break;case"right":t.$el.style.top=e.top+"px",t.$el.style.left=e.left+e.width+"px";break;case"bottom":t.$el.style.top=e.bottom+"px",t.$el.style.left=e.left+e.width/2+"px";break;case"left":t.$el.style.top=e.top+"px",t.$el.style.left=e.left-t.$el.offsetWidth+"px";break;default:console.warn("Invalid "+t.mdDirection+" option to md-direction option")}};e["default"]={props:{mdDirection:{type:String,"default":"bottom"},mdDelay:{type:String,"default":"0"}},data:function(){return{active:!1}},computed:{classes:function(){return{"md-active":this.active,"md-tooltip-top":"top"===this.mdDirection,"md-tooltip-right":"right"===this.mdDirection,"md-tooltip-bottom":"bottom"===this.mdDirection,"md-tooltip-left":"left"===this.mdDirection}},style:function(){return{"transition-delay":this.mdDelay+"ms"}}},watch:{mdDirection:function(){s(this)}},mounted:function(){var t=this,e=this.$el,i=e.parentNode;this.targetElement=i,o=function(){document.body.appendChild(e),s(t),t.active=!0},n=function(){var o=function n(){e.removeEventListener("transitionend",n),e.parentNode&&!e.classList.contains("md-active")&&document.body.removeChild(e)};t.active=!1,e.removeEventListener("transitionend",o),e.addEventListener("transitionend",o)},this.$parent.$el.classList===i.classList&&[].slice.call(i.classList).forEach(function(t){t.indexOf("md-")>=0&&"md-active"!==t&&e.classList.add(t+"-tooltip")}),this.$el.parentNode.removeChild(this.$el),i.addEventListener("mouseenter",o),i.addEventListener("focus",o),i.addEventListener("mouseleave",n),i.addEventListener("blur",n)},beforeDestroy:function(){this.active=!1,this.$el.parentNode&&document.body.removeChild(this.$el),i&&(i.removeEventListener("mouseenter",o),i.removeEventListener("focus",o),i.removeEventListener("mouseleave",n),i.removeEventListener("blur",n))}}},57:function(t,e){},109:function(t,e,o){var n,i;o(57),n=o(44);var s=o(123);i=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(i=n=n["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=n},123:function(module,exports){module.exports={render:function(){with(this)return _h("span",{staticClass:"md-tooltip","class":classes,style:style},[_t("default")])},staticRenderFns:[]}}})});