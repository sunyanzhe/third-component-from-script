!function(o){var a={};function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=a,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,o){var a=o(2),n=o(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1},r=(a(n,i),n.locals?n.locals:{});e.exports=r},function(e,t,o){"use strict";var a=o(0);o.n(a).a},function(e,t,i){"use strict";var o,a,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=(a={},function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}),d=[];function u(e){for(var t=-1,o=0;o<d.length;o++)if(d[o].identifier===e){t=o;break}return t}function s(e,t){for(var o={},a=[],n=0;n<e.length;n++){var i=e[n],r=t.base?i[0]+t.base:i[0],c=o[r]||0,s="".concat(r," ").concat(c);o[r]=c+1;var l=u(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(d[l].references++,d[l].updater(p)):d.push({identifier:s,updater:g(p,t),references:1}),a.push(s)}return a}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=i.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach(function(e){t.setAttribute(e,o[e])}),"function"==typeof e.insert)e.insert(t);else{var n=r(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,o,a){var n=o?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=p(t,n);else{var i=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}var m=null,h=0;function g(t,e){var o,a,n;if(e.singleton){var i=h++;o=m=m||c(e),a=f.bind(null,o,i,!1),n=f.bind(null,o,i,!0)}else o=c(e),a=function(e,t,o){var a=o.css,n=o.media,i=o.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,o,e),n=function(){var e;null!==(e=o).parentNode&&e.parentNode.removeChild(e)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else n()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=n());var c=s(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<c.length;t++){var o=u(c[t]);d[o].references--}for(var a=s(e,r),n=0;n<c.length;n++){var i=u(c[n]);0===d[i].references&&(d[i].updater(),d.splice(i,1))}c=a}}}},function(e,t,o){(t=o(4)(!1)).push([e.i,'.poc-header[data-v-75d811a7]{position:relative;width:100%;height:60px;min-width:1366px;box-shadow:0px 1px 2px 0px rgba(168,168,168,0.3);background:#fff;display:flex;justify-content:space-between}.poc-header .poc-left-area[data-v-75d811a7]{position:relative;z-index:999;width:210px;height:60px;overflow:hidden;background:#001529;transition:height .5s;flex:0 0 210px}.poc-header .poc-left-area .icon-area[data-v-75d811a7]{position:relative;height:60px;color:#FFF}.poc-header .poc-left-area .poc-menu-icon[data-v-75d811a7]{position:absolute;right:10px;top:14px;width:16px;height:16px;padding:8px;cursor:pointer}.poc-header .poc-left-area .poc-menu-icon-item[data-v-75d811a7]{display:block;width:16px;height:2px;background:#ccc;margin-bottom:5px;transform:rotateZ(0deg) translate3d(0px, 0px, 0px);opacity:1;transition:all cubic-bezier(0.075, 0.82, 0.1, 1) 1s}.poc-header .poc-left-area .poc-menu-icon.actived .poc-menu-icon-item[data-v-75d811a7]:first-child{width:22px;transform:rotateZ(45deg) translate3d(3px, 7px, 0px)}.poc-header .poc-left-area .poc-menu-icon.actived .poc-menu-icon-item[data-v-75d811a7]:nth-of-type(2){opacity:0}.poc-header .poc-left-area .poc-menu-icon.actived .poc-menu-icon-item[data-v-75d811a7]:last-child{width:22px;transform:rotateZ(-45deg) translate3d(3px, -7px, 0px)}.poc-header .poc-page-list[data-v-75d811a7]{position:relative;display:block}.poc-header .poc-page-list .poc-page-item[data-v-75d811a7]{display:block;width:100%;height:44px;padding:15px 25px;color:#fff;cursor:pointer;box-sizing:border-box;line-height:14px}.poc-header .poc-page-list .poc-page-item-img[data-v-75d811a7]{margin-right:12px;vertical-align:top}.poc-header .poc-page-list .poc-page-item-span[data-v-75d811a7]{color:#fff;font-size:14px}.poc-header .poc-page-list .poc-page-item-link[data-v-75d811a7]:active{text-decoration:none}.poc-header .poc-center-area[data-v-75d811a7]{flex:1 1 auto;text-align:center;line-height:60px;color:black;position:relative}.poc-header .poc-right-area[data-v-75d811a7]{flex:0 0 auto;color:black}.poc-header .poc-right-area .poc-feature-list[data-v-75d811a7]{display:inline-block;overflow:hidden;height:60px}.poc-header .poc-right-area .poc-feature-list .poc-feature-item[data-v-75d811a7]{float:left;display:block;padding:18px 0;height:60px;margin-right:50px;box-sizing:border-box;cursor:pointer}.poc-header .poc-right-area .poc-feature-list .poc-feature-item[data-v-75d811a7]:last-of-type{margin-right:0}.poc-header .poc-right-area .poc-feature-list .poc-feature-item-icon[data-v-75d811a7]{width:24px;height:24px;vertical-align:top;margin-right:10px}.poc-header .poc-right-area .poc-feature-list .poc-feature-item-name[data-v-75d811a7]{display:inline-block;color:#333;font-size:14px;line-height:24px}.poc-header .poc-right-area .poc-user[data-v-75d811a7]{position:relative;z-index:999999;display:inline-block;height:60px;margin-left:50px;padding-right:20px;line-height:60px;cursor:pointer}.poc-header .poc-right-area .poc-user-name[data-v-75d811a7]{float:left;color:#333;font-size:14px;margin-right:10px}.poc-header .poc-right-area .poc-user-icon[data-v-75d811a7]{position:absolute;z-index:999999;top:25px;width:5px;height:5px;border:1px solid #333;border-left:none;border-top:none;transform:rotateZ(45deg);transition:all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s}.poc-header .poc-right-area .poc-user.actived .poc-user-icon[data-v-75d811a7]{transform:rotateZ(-135deg);top:28px}.poc-header .poc-right-area .poc-user .poc-user-container[data-v-75d811a7]{overflow:hidden}.poc-header .poc-right-area .poc-user .poc-logout[data-v-75d811a7]{position:absolute;z-index:999999;top:50px;left:-18px;z-index:10;margin:5px 0;background-color:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,0.1)}.poc-header .poc-right-area .poc-user .poc-logout[data-v-75d811a7]::after{top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff;content:" ";border-width:6px;position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.poc-header .poc-right-area .poc-user .poc-logout .poc-arrow[data-v-75d811a7]{top:-6px;left:50%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5;border-width:6px;filter:drop-shadow(0 2px 12px rgba(0,0,0,0.03));position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.poc-header .poc-right-area .poc-user .poc-logout-name[data-v-75d811a7]{list-style:none;line-height:36px;padding:0 20px;margin:0;font-size:14px;color:#606266;cursor:pointer;outline:none}\n',""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(o){var s=[];return s.toString=function(){return this.map(function(e){var t=function(e,t){var o=e[1]||"",a=e[3];if(!a)return o;if(t&&"function"==typeof btoa){var n=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(o," */")}(a),i=a.sources.map(function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")});return[o].concat(i).concat([n]).join("\n")}return[o].join("\n")}(e,o);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t}).join("")},s.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var n=0;n<this.length;n++){var i=this[n][0];null!=i&&(a[i]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);o&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),s.push(c))}},s}},function(e,t,o){"use strict";o.r(t);function a(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"poc-header"},[o("div",{staticClass:"poc-left-area",style:{"flex-basis":t.menuWidth},attrs:{id:"LEFT_AREA"},on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"icon-area"},[o("div",{staticClass:"poc-menu-icon",class:{actived:t.isSlide},on:{click:t.clickHandle}},[o("span",{staticClass:"poc-menu-icon-item"}),t._v(" "),o("span",{staticClass:"poc-menu-icon-item"}),t._v(" "),o("span",{staticClass:"poc-menu-icon-item"})]),t._v(" "),t._t("icon")],2),t._v(" "),o("ul",{staticClass:"poc-page-list"},t._l(t.list,function(e){return o("li",{key:e.key,staticClass:"poc-page-item"},[o("a",{staticClass:"poc-page-item-link",attrs:{tabindex:"-1",href:e.link}},[o("img",{staticClass:"poc-page-item-img",attrs:{src:e.src}}),t._v(" "),o("span",{staticClass:"poc-page-item-span"},[t._v(t._s(e.name))])])])}),0)]),t._v(" "),o("div",{staticClass:"poc-center-area"},[t._t("center")],2),t._v(" "),o("div",{staticClass:"poc-right-area",on:{click:function(e){e.stopPropagation()}}},[o("ul",{staticClass:"poc-feature-list"},[t.helpLink?o("li",{staticClass:"poc-feature-item",on:{click:function(e){return e.stopPropagation(),t.clickLiHandle(t.helpLink)}}},[o("img",{staticClass:"poc-feature-item-icon",attrs:{src:"http://img30.360buyimg.com/jr_image/jfs/t1/95467/4/14465/1186/5e66162fEe60ea3c0/f15806200277ddc9.png",alt:""}}),t._v(" "),o("span",{staticClass:"poc-feature-item-name"},[t._v("帮助中心")])]):t._e(),t._v(" "),o("li",{staticClass:"poc-feature-item",on:{click:function(e){return e.stopPropagation(),t.fullSceen(e)}}},[o("img",{staticClass:"poc-feature-item-icon",attrs:{src:"http://img30.360buyimg.com/jr_image/jfs/t1/93416/30/14488/503/5e66162fE33d655bf/0c0a01a0fdc26e20.png",alt:""}}),t._v(" "),o("span",{staticClass:"poc-feature-item-name"},[t._v(t._s(t.isFull?"退出全屏":"全屏"))])]),t._v(" "),t.messageLink?o("li",{staticClass:"poc-feature-item",on:{click:function(e){return e.stopPropagation(),t.clickLiHandle(t.messageLink)}}},[o("img",{staticClass:"poc-feature-item-icon",attrs:{src:"http://img30.360buyimg.com/jr_image/jfs/t1/88965/23/14485/710/5e66162fE207463a9/e4db349240a4664d.png",alt:""}}),t._v(" "),o("span",{staticClass:"poc-feature-item-name"},[t._v("消息")])]):t._e()]),t._v(" "),o("div",{staticClass:"poc-user",class:{actived:t.actived},on:{click:function(e){t.actived=!t.actived}}},[o("div",{staticClass:"poc-user-container"},[o("span",{staticClass:"poc-user-name"},[t._v(t._s(t.user))]),t._v(" "),o("span",{staticClass:"poc-user-icon"})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.actived,expression:"actived"}],staticClass:"poc-logout",on:{click:function(e){return e.stopPropagation(),t.logout(e)}}},[o("p",{staticClass:"poc-logout-name"},[t._v("退 出")]),t._v(" "),o("div",{staticClass:"poc-arrow"})])])])])}a._withStripped=!0;var n={name:"PocHeader",props:{menuWidth:String,messageLink:String,helpLink:String},data:function(){return{isSlide:!1,actived:!1,isFull:!1,user:"默认",list:[{key:"molo",name:"摹略-运营平台",src:"http://img30.360buyimg.com/jr_image/jfs/t1/88329/4/14470/515/5e65efa7Ed3c7d5df/97cbaac6065793dc.png",link:"http://molo.jd.com"},{key:"lego",name:"乐高-资源管理",src:"http://img30.360buyimg.com/jr_image/jfs/t1/107824/5/8208/448/5e65efa7E1b208d81/bc739202bd467e83.png",link:"http://mcmktadmin.jd.com"},{key:"hangmu",name:"航母-管理后台",src:"http://img30.360buyimg.com/jr_image/jfs/t1/89569/39/14359/470/5e65efa6E35dbbedb/a11c35a38cee20b1.png",link:"http://mcauth.jdfmgt.com"}]}},methods:{clickHandle:function(e){if(e.stopPropagation(),this.isSlide=!this.isSlide){for(var t=document.documentElement.offsetHeight,o=document.getElementById("LEFT_AREA"),a=o,n=o.offsetTop;a=a.offsetParent;)n+=a.offsetTop;o.style.height="".concat(t-n,"px")}else document.getElementById("LEFT_AREA").style.height=""},fullSceen:function(){var e=document.body;this.isFull?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()},logout:function(){window.location.href="//passport.jd.com/uc/login?ltype=logout&ReturnUrl=".concat(encodeURIComponent(window.location.href))},clickLiHandle:function(e){window.location.href=e},documentClickHandle:function(){this.actived=!1,this.isSlide&&(this.isSlide=!1,document.getElementById("LEFT_AREA").style.height="")}},created:function(){var h,g,t=this;h="https://passport.jd.com/call/getHelloJson",g={data:{m:"ls",_:+new Date},callback:"jQuery183027508230378578924_1583747349983"},new Promise(function(t,e){var o,a=g.param,n=void 0===a?"callback":a,i=g.timeout,r=void 0===i?6e4:i,c=g.data,s=void 0===c?{}:c,l=g.callback;function p(){m.parentNode&&(m.parentNode.removeChild(m),window[l]=null,o&&clearTimeout(o))}r&&(o=setTimeout(function(){p(),e("timeout")},r)),window[l]=function(e){window[l]&&p(),t(e)};var d="";for(var u in s){var f=void 0!==s[u]?s[u]:"";d+="&".concat(u,"=").concat(encodeURIComponent(f))}h=h+(0<h.indexOf("?")?"":"?")+d.substr(1),h="".concat(h,"&").concat(n,"=").concat(l);var m=document.createElement("script");m.src=h,document.head.appendChild(m)}).then(function(e){t.user=e.nick}).catch(console.warn),document.onfullscreenchange=function(){t.isFull=!t.isFull},document.addEventListener("click",this.documentClickHandle,!1)},beforeDestroy:function(){document.removeEventListener("click",this.documentClickHandle,!1)}};o(1);var i=function(e,t,o,a,n,i,r,c){var s,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),a&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),r?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=s):n&&(s=c?function(){n.call(this,this.$root.$options.shadowRoot)}:n),s)if(l.functional){l._injectStyles=s;var p=l.render;l.render=function(e,t){return s.call(t),p(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:l}}(n,a,[],!1,null,"75d811a7",null);i.options.__file="packages/Poc/src/PocHeader.vue";var r=i.exports;r.install=function(e){e.component(r.name,r)};function c(e){e.component(s.name,s)}var s=r;void 0!==window&&window.Vue&&c(window.Vue),window._installPocHeader=c;t.default={Poc:s,install:c}}]);