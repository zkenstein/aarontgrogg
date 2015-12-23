!function(e,t,s,a){"use strict";function r(e){if(e){var t=1+e.substr(1).search(/[A-Z]/),s=e.substr(0,t).toLowerCase(),a=e.substr(t).toLowerCase();return"-"+s+"-"+a}}function n(e){return e?e+",":""}function i(e){return e.length>0?e:null}function o(r){function n(t,s){var a=p(t),r={oldStyle:e(t).attr("style")||""},n={data:a,stepData:r};f.call(this,"beforeInitStep",e(t),n),r.delegate=a.delegate,f.call(this,"initStep",e(t),n),e(t).data("stepData",r),e(t).attr("id")||e(t).attr("id","step-"+(s+1)),f.call(this,"applyStep",e(t),n)}function o(t){var s=e(t).data("stepData");e(t).attr("style",s.oldStyle),f.call(this,"unapplyStep",e(t),{stepData:s})}function c(t){f.call(this,"unapplyStep",e(t),{stepData:t.data("stepData")}),f.call(this,"applyStep",e(t),{stepData:t.data("stepData")})}function u(){Y&&f.call(this,"setInactive",Y,{stepData:e(Y).data("stepData"),reason:"deinit"}),X.jmpressClass&&e(N).removeClass(X.jmpressClass),f.call(this,"beforeDeinit",e(this),{}),e(I.stepSelector,N).each(function(e){o.call(N,this)}),z.attr("style",O.container),I.fullscreen&&e("html").attr("style",""),k.attr("style",O.area),e(Z).children().each(function(){N.append(e(this))}),I.fullscreen?Z.remove():(Z.remove(),k.remove()),f.call(this,"afterDeinit",e(this),{}),e(N).data("jmpressmethods",!1)}function f(t,s,a){a.settings=I,a.current=X,a.container=z,a.parents=s?d(s):null,a.current=X,a.jmpress=this;var r={};return e.each(I[t],function(e,t){r.value=t.call(N,s,a)||r.value}),r.value}function d(t){return e(t).parentsUntil(N).not(N).filter(I.stepSelector)}function v(e){return g({step:Y,substep:F},e)}function g(t,s){var r;if(e.isPlainObject(t)&&(r=t.substep,t=t.step),"string"==typeof t&&(t=N.find(t).first()),!t||!e(t).data("stepData"))return!1;b.call(this);var n=e(t).data("stepData"),o=!1;if(f.call(this,"beforeChange",t,{stepData:n,reason:s,cancel:function(){o=!0}}),o)return a;var c={},u=t;e(t).data("stepData").delegate&&(u=i(e(t).parentsUntil(N).filter(I.stepSelector).filter(n.delegate))||i(e(t).near(n.delegate))||i(e(t).near(n.delegate,!0))||i(e(n.delegate,N)),u?n=u.data("stepData"):u=t),Q&&f.call(this,"setInactive",Q,{stepData:e(Q).data("stepData"),delegatedFrom:Y,reason:s,target:c,nextStep:u,nextSubstep:r,nextStepData:n});var l={stepData:n,delegatedFrom:t,reason:s,target:c,substep:r,prevStep:Q,prevSubstep:F,prevStepData:Q&&e(Q).data("stepData")};return f.call(this,"beforeActive",u,l),f.call(this,"setActive",u,l),X.jmpressClass&&e(N).removeClass(X.jmpressClass),e(N).addClass(X.jmpressClass="step-"+e(u).attr("id")),X.jmpressDelegatedClass&&e(N).removeClass(X.jmpressDelegatedClass),e(N).addClass(X.jmpressDelegatedClass="delegating-step-"+e(t).attr("id")),f.call(this,"applyTarget",u,e.extend({canvas:Z,area:k,beforeActive:Q},l)),Y=t,F=l.substep,Q=u,X.idleTimeout&&clearTimeout(X.idleTimeout),X.idleTimeout=setTimeout(function(){f.call(this,"idle",u,l)},Math.max(1,I.transitionDuration-100)),u}function b(){!function t(){function a(){(0!==e(z).scrollTop()||0!==e(z).scrollLeft())&&t()}if("BODY"===e(z)[0].tagName)try{s.scrollTo(0,0)}catch(r){}e(z).scrollTop(0),e(z).scrollLeft(0),setTimeout(a,1),setTimeout(a,10),setTimeout(a,100),setTimeout(a,200),setTimeout(a,400)}()}function y(e){return g.call(this,e,"jump")}function j(){return g.call(this,f.call(this,"selectNext",Y,{stepData:e(Y).data("stepData"),substep:F}),"next")}function D(){return g.call(this,f.call(this,"selectPrev",Y,{stepData:e(Y).data("stepData"),substep:F}),"prev")}function S(){return g.call(this,f.call(this,"selectHome",Y,{stepData:e(Y).data("stepData")}),"home")}function w(){return g.call(this,f.call(this,"selectEnd",Y,{stepData:e(Y).data("stepData")}),"end")}function x(t){return l(Z,t||{}),e(Z)}function C(){return Q&&e(Q)}function T(t,s,a){return h[t]?f.call(this,t,s,a):void e.error("callback "+t+" is not registered.")}function P(){var e=navigator.userAgent.toLowerCase();return-1===e.search(/(iphone)|(ipod)|(android)/)||-1!==e.search(/(chrome)/)}r=e.extend(!0,{},r||{});var M={},A=null;for(A in h)M[A]=e.isFunction(r[A])?[r[A]]:r[A],r[A]=[];var I=e.extend(!0,{},m,r);for(A in h)M[A]&&Array.prototype.push.apply(I[A],M[A]);var N=e(this),z=null,k=null,O={container:"",area:""},Z=null,X=null,Y=!1,F=null,Q=!1;if(N.data("jmpressmethods",{select:g,reselect:v,scrollFix:b,goTo:y,next:j,prev:D,home:S,end:w,canvas:x,container:function(){return z},settings:function(){return I},active:C,current:function(){return X},fire:T,init:function(t){n.call(this,e(t),X.nextIdNumber++)},deinit:function(t){t?o.call(this,e(t)):u.call(this)},reapply:c}),P()===!1)return void(I.notSupportedClass&&N.addClass(I.notSupportedClass));I.notSupportedClass&&N.removeClass(I.notSupportedClass);var L=e(I.stepSelector,N);z=N,k=e("<div />"),Z=e("<div />"),e(N).children().filter(L).each(function(){Z.append(e(this))}),I.fullscreen&&(z=e("body"),e("html").css({overflow:"hidden"}),k=N),O.area=k.attr("style")||"",O.container=z.attr("style")||"",I.fullscreen?(z.css({height:"100%"}),N.append(Z)):(z.css({position:"relative"}),k.append(Z),N.append(k)),e(z).addClass(I.containerClass),e(k).addClass(I.areaClass),e(Z).addClass(I.canvasClass),t.documentElement.style.height="100%",z.css({overflow:"hidden"});var E={position:"absolute",transitionDuration:"0s"};E=e.extend({},I.animation,E),l(k,E),l(k,{top:"50%",left:"50%",perspective:"1000px"}),l(Z,E),X={},f.call(this,"beforeInit",null,{}),L.each(function(e){n.call(N,this,e)}),X.nextIdNumber=L.length,f.call(this,"afterInit",null,{}),g.call(this,f.call(this,"selectInitialStep","init",{})),I.initClass&&e(L).removeClass(I.initClass)}function c(){return m}function u(t,s){e.isFunction(s)?g[t]?e.error("function "+t+" is already registered."):g[t]=s:h[t]?e.error("callback "+t+" is already registered."):(h[t]=1,m[t]=[])}function l(t,s){var a,r,n={};for(a in s)s.hasOwnProperty(a)&&(r=d(a),null!==r&&(n[r]=s[a]));return e(t).css(n),t}function p(t){function s(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].substr(0,1).toUpperCase()+e[t].substr(1);return e.join("")}if(e(t)[0].dataset)return e.extend({},e(t)[0].dataset);var a={},r=e(t)[0].attributes;return e.each(r,function(e,t){"data-"===t.nodeName.substr(0,5)&&(a[s(t.nodeName.substr(5))]=t.nodeValue)}),a}function f(){return!!e(this).data("jmpressmethods")}var d=function(){var e=t.createElement("dummy").style,s="Webkit Moz O ms Khtml".split(" "),r={};return function(t){if("undefined"==typeof r[t]){var n=t.charAt(0).toUpperCase()+t.substr(1),i=(t+" "+s.join(n+" ")+n).split(" ");r[t]=null;for(var o in i)if(e[i[o]]!==a){r[t]=i[o];break}}return r[t]}}(),m={stepSelector:".step",containerClass:"",canvasClass:"",areaClass:"",notSupportedClass:"not-supported",fullscreen:!0,animation:{transformOrigin:"top left",transitionProperty:n(r(d("transform")))+n(r(d("perspective")))+"opacity",transitionDuration:"1s",transitionDelay:"500ms",transitionTimingFunction:"ease-in-out",transformStyle:"preserve-3d"},transitionDuration:1500},h={beforeChange:1,beforeInitStep:1,initStep:1,beforeInit:1,afterInit:1,beforeDeinit:1,afterDeinit:1,applyStep:1,unapplyStep:1,setInactive:1,beforeActive:1,setActive:1,selectInitialStep:1,selectPrev:1,selectNext:1,selectHome:1,selectEnd:1,idle:1,applyTarget:1};for(var v in h)m[v]=[];var g={init:o,initialized:f,deinit:function(){},css:l,pfx:d,defaults:c,register:u,dataset:p};e.fn.jmpress=function(t){function s(){var s=e(this).data("jmpressmethods");if(s&&s[t])return s[t].apply(this,Array.prototype.slice.call(arguments,1));if(g[t])return g[t].apply(this,Array.prototype.slice.call(arguments,1));if(h[t]&&s){var a=s.settings(),r=Array.prototype.slice.call(arguments,1)[0];e.isFunction(r)&&(a[t]=a[t]||[],a[t].push(r))}else{if("object"==typeof t||!t)return o.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.jmpress")}return this}var a,r=arguments;return e(this).each(function(e,t){a=s.apply(t,r)}),a},e.extend({jmpress:function(t){if(g[t])return g[t].apply(this,Array.prototype.slice.call(arguments,1));if(h[t]){var s=Array.prototype.slice.call(arguments,1)[0];e.isFunction(s)?m[t].push(s):e.error("Second parameter should be a function: $.jmpress( callbackName, callbackFunction )")}else e.error("Method "+t+" does not exist on jQuery.jmpress")}})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(t,s,a,r){var n;return t.each(function(t,i){return r&&(n=s(i,a,r))?!1:e(i).is(a)?(n=i,!1):!r&&(n=s(i,a,r))?!1:void 0}),n}function n(t,s,a){var i=e(t).children();return a&&(i=e(i.get().reverse())),r(i,n,s,a)}function i(t,s,a){return r(e(t)[a?"prevAll":"nextAll"](),n,s,a)}function o(t,s,a){var r,n=e(t).parents();return n=e(n.get()),e.each(n.get(),function(t,n){return a&&e(n).is(s)?(r=n,!1):(r=i(n,s,a),r?!1:void 0)}),r}e.fn.near=function(t,s){var a=[];return e(this).each(function(e,r){var c=(s?!1:n(r,t,s))||i(r,t,s)||o(r,t,s);c&&a.push(c)}),e(a)}}(jQuery,document,window),function(e,t,s,a){"use strict";function r(e){return Math.round(1e4*e)/1e4+""}var n={3:{transform:function(t,s){var a="translate(-50%,-50%)";e.each(s,function(e,t){var s,n=["X","Y","Z"];if("translate"===t[0])a+=" translate3d("+r(t[1]||0)+"px,"+r(t[2]||0)+"px,"+r(t[3]||0)+"px)";else if("rotate"===t[0]){var i=t[4]?[1,2,3]:[3,2,1];for(s=0;3>s;s++)a+=" rotate"+n[i[s]-1]+"("+r(t[i[s]]||0)+"deg)"}else if("scale"===t[0])for(s=0;3>s;s++)a+=" scale"+n[s]+"("+r(t[s+1]||1)+")"}),e.jmpress("css",t,e.extend({},{transform:a}))}},2:{transform:function(t,s){var a="translate(-50%,-50%)";e.each(s,function(e,t){var s=["X","Y"];if("translate"===t[0])a+=" translate("+r(t[1]||0)+"px,"+r(t[2]||0)+"px)";else if("rotate"===t[0])a+=" rotate("+r(t[3]||0)+"deg)";else if("scale"===t[0])for(var n=0;2>n;n++)a+=" scale"+s[n]+"("+r(t[n+1]||1)+")"}),e.jmpress("css",t,e.extend({},{transform:a}))}},1:{transform:function(t,s){var a={top:0,left:0};e.each(s,function(e,t){"translate"===t[0]&&(a.left=Math.round(t[1]||0)+"px",a.top=Math.round(t[2]||0)+"px")}),t.animate(a,1e3)}}},i=function(){return e.jmpress("pfx","perspective")?n[3]:e.jmpress("pfx","transform")?n[2]:n[1]}();e.jmpress("defaults").reasonableAnimation={},e.jmpress("initStep",function(t,s){var a=s.data,r=s.stepData,n=parseFloat;e.extend(r,{x:n(a.x)||0,y:n(a.y)||0,z:n(a.z)||0,r:n(a.r)||0,phi:n(a.phi)||0,rotate:n(a.rotate)||0,rotateX:n(a.rotateX)||0,rotateY:n(a.rotateY)||0,rotateZ:n(a.rotateZ)||0,revertRotate:!1,scale:n(a.scale)||1,scaleX:n(a.scaleX)||!1,scaleY:n(a.scaleY)||!1,scaleZ:n(a.scaleZ)||1})}),e.jmpress("afterInit",function(t,s){var a=s.settings.stepSelector,r=s.current;r.perspectiveScale=1,r.maxNestedDepth=0;for(var n=e(s.jmpress).find(a).children(a);n.length;)r.maxNestedDepth++,n=n.children(a)}),e.jmpress("applyStep",function(t,s){e.jmpress("css",e(t),{position:"absolute",transformStyle:"preserve-3d"}),s.parents.length>0&&e.jmpress("css",e(t),{top:"50%",left:"50%"});var a=s.stepData,r=[["translate",a.x||a.r*Math.sin(a.phi*Math.PI/180),a.y||-a.r*Math.cos(a.phi*Math.PI/180),a.z],["rotate",a.rotateX,a.rotateY,a.rotateZ||a.rotate,!0],["scale",a.scaleX||a.scale,a.scaleY||a.scale,a.scaleZ||a.scale]];i.transform(t,r)}),e.jmpress("setActive",function(t,s){var r=s.target,n=s.stepData,i=r.transform=[];r.perspectiveScale=1;for(var o=s.current.maxNestedDepth;o>(s.parents.length||0);o--)i.push(["scale"],["rotate"],["translate"]);i.push(["scale",1/(n.scaleX||n.scale),1/(n.scaleY||n.scale),1/n.scaleZ]),i.push(["rotate",-n.rotateX,-n.rotateY,-(n.rotateZ||n.rotate)]),i.push(["translate",-(n.x||n.r*Math.sin(n.phi*Math.PI/180)),-(n.y||-n.r*Math.cos(n.phi*Math.PI/180)),-n.z]),r.perspectiveScale*=n.scaleX||n.scale,e.each(s.parents,function(t,s){var a=e(s).data("stepData");i.push(["scale",1/(a.scaleX||a.scale),1/(a.scaleY||a.scale),1/a.scaleZ]),i.push(["rotate",-a.rotateX,-a.rotateY,-(a.rotateZ||a.rotate)]),i.push(["translate",-(a.x||a.r*Math.sin(a.phi*Math.PI/180)),-(a.y||-a.r*Math.cos(a.phi*Math.PI/180)),-a.z]),r.perspectiveScale*=a.scaleX||a.scale}),e.each(i,function(e,t){function r(r){s.current["rotate"+r+"-"+e]===a&&(s.current["rotate"+r+"-"+e]=t[r]||0);var n=s.current["rotate"+r+"-"+e],i=t[r]||0,o=n%360,c=i%360;0>o&&(o+=360),0>c&&(c+=360);var u=c-o;-180>u?u+=360:u>180&&(u-=360),s.current["rotate"+r+"-"+e]=t[r]=n+u}"rotate"===t[0]&&(r(1),r(2),r(3))})}),e.jmpress("applyTarget",function(t,s){var a,r=s.target,n=(s.stepData,s.settings),o=1.3*r.perspectiveScale<s.current.perspectiveScale,c=r.perspectiveScale>1.3*s.current.perspectiveScale,u=-1;e.each(r.transform,function(e,t){return t.length<=1||"rotate"===t[0]&&t[1]%360===0&&t[2]%360===0&&t[3]%360===0?void 0:"scale"!==t[0]?!1:void(u=e)}),u!==s.current.oldLastScale&&(o=c=!1,s.current.oldLastScale=u);var l=[];if(-1!==u)for(;u>=0;)"scale"===r.transform[u][0]&&(l.push(r.transform[u]),r.transform[u]=["scale"]),u--;var p=n.animation;n.reasonableAnimation[s.reason]&&(p=e.extend({},p,n.reasonableAnimation[s.reason])),a={perspective:Math.round(1e3*r.perspectiveScale)+"px"},a=e.extend({},p,a),o||(a.transitionDelay="0s"),s.beforeActive||(a.transitionDuration="0s",a.transitionDelay="0s"),e.jmpress("css",s.area,a),i.transform(s.area,l),a=e.extend({},p),c||(a.transitionDelay="0s"),s.beforeActive||(a.transitionDuration="0s",a.transitionDelay="0s"),s.current.perspectiveScale=r.perspectiveScale,e.jmpress("css",s.canvas,a),i.transform(s.canvas,r.transform)})}(jQuery,document,window),function(e,t,s,a){"use strict";var r=e.jmpress,n="activeClass",i="nestedActiveClass",o=r("defaults");o[i]="nested-active",o[n]="active",r("setInactive",function(t,s){var a=s.settings,r=a[n],o=a[i];r&&e(t).removeClass(r),o&&e.each(s.parents,function(t,s){e(s).removeClass(o)})}),r("setActive",function(t,s){var a=s.settings,r=a[n],o=a[i];r&&e(t).addClass(r),o&&e.each(s.parents,function(t,s){e(s).addClass(o)})})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(t,s){return e(this).find(s.settings.stepSelector).first()}function n(t,s,a,r){if(!s)return!1;var n=a.settings.stepSelector;s=e(s);do{var i=s.near(n,r);if((0===i.length||0===i.closest(t).length)&&(i=e(t).find(n)[r?"last":"first"]()),!i.length)return!1;s=i}while(s.data("stepData").exclude);return s}var i=e.jmpress;i("initStep",function(e,t){t.stepData.exclude=t.data.exclude&&-1===["false","no"].indexOf(t.data.exclude)}),i("selectInitialStep",r),i("selectHome",r),i("selectEnd",function(t,s){return e(this).find(s.settings.stepSelector).last()}),i("selectPrev",function(e,t){return n(this,e,t,!0)}),i("selectNext",function(e,t){return n(this,e,t)})}(jQuery,document,window),function(e,t,s,a){"use strict";e.jmpress("selectInitialStep",function(e,t){return t.settings.start})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(t,s,a){for(var r=0;r<s.length-1;r++){var n=s[r],i=s[r+1];e(t).jmpress("initialized")?e(n,t).data("stepData")[a]=i:e(n,t).attr("data-"+a,i)}}function n(t,s,a,r){var n=s.stepData;if(n[a]){var i=e(t).near(n[a],r);if(i&&i.length)return i;if(i=e(n[a],this)[r?"last":"first"](),i&&i.length)return i}}var i=e.jmpress;i("register","route",function(e,t,s){"string"==typeof e&&(e=[e,e]),r(this,e,s?"prev":"next"),t||r(this,e.reverse(),s?"next":"prev")}),i("initStep",function(e,t){for(var s in{next:1,prev:1})t.stepData[s]=t.data[s]}),i("selectNext",function(e,t){return n.call(this,e,t,"next")}),i("selectPrev",function(e,t){return n.call(this,e,t,"prev",!0)})}(jQuery,document,window),function(e,t,s,a){"use strict";var r=e.jmpress,n="ajax:afterStepLoaded",i="ajax:loadStep";r("register",i),r("register",n),r("defaults").ajaxLoadedClass="loaded",r("initStep",function(t,s){s.stepData.src=e(t).attr("href")||s.data.src||!1,s.stepData.srcLoaded=!1}),r(i,function(t,s){var a=s.stepData,r=a&&a.src,i=s.settings;r&&(e(t).addClass(i.ajaxLoadedClass),a.srcLoaded=!0,e(t).load(r,function(a,r,i){e(s.jmpress).jmpress("fire",n,t,e.extend({},s,{response:a,status:r,xhr:i}))}))}),r("idle",function(t,s){if(t){var a=s.settings,r=e(this),n=(s.stepData,e(t).add(e(t).near(a.stepSelector)).add(e(t).near(a.stepSelector,!0)).add(r.jmpress("fire","selectPrev",t,{stepData:e(t).data("stepData")})).add(r.jmpress("fire","selectNext",t,{stepData:e(t).data("stepData")})));n.each(function(){var t=this,s=e(t).data("stepData");s.src&&!s.srcLoaded&&r.jmpress("fire",i,t,{stepData:e(t).data("stepData")})})}}),r("setActive",function(t,s){var a=e(t).data("stepData");a.src&&!a.srcLoaded&&e(this).jmpress("fire",i,t,{stepData:e(t).data("stepData")})})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}function n(t){try{var r=e("#"+s.location.hash.replace(/^#\/?/,""));return r.length>0&&r.is(t.stepSelector)?r:a}catch(n){}}function i(e){var t="#/"+e;s.history&&s.history.pushState?s.location.hash!==t&&s.history.pushState({},"",t):s.location.hash!==t&&(s.location.hash=t)}var o=e.jmpress,c="a[href^=#]";o("defaults").hash={use:!0,update:!0,bindChange:!0},o("selectInitialStep",function(t,a){var o=a.settings,u=o.hash,l=a.current,p=e(this);return a.current.hashNamespace=".jmpress-"+r(),u.use?(u.bindChange&&(e(s).bind("hashchange"+l.hashNamespace,function(e){var t=n(o);p.jmpress("initialized")&&p.jmpress("scrollFix"),t&&t.length&&(t.attr("id")!==p.jmpress("active").attr("id")&&p.jmpress("select",t),i(t.attr("id"))),e.preventDefault()}),e(c).on("click"+l.hashNamespace,function(t){var s=e(this).attr("href");try{e(s).is(o.stepSelector)&&(p.jmpress("select",s),t.preventDefault(),t.stopPropagation())}catch(a){}})),n(o)):void 0}),o("afterDeinit",function(t,a){e(c).off(a.current.hashNamespace),e(s).unbind(a.current.hashNamespace)}),o("setActive",function(t,s){var a=s.settings,r=s.current;a.hash.use&&a.hash.update&&(clearTimeout(r.hashtimeout),r.hashtimeout=setTimeout(function(){i(e(s.delegatedFrom).attr("id"))},a.transitionDuration+200))})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}function n(e){e.preventDefault(),e.stopPropagation()}var i=e.jmpress,o="next",c="prev";i("defaults").keyboard={use:!0,keys:{33:c,37:c,38:c,9:o+":"+c,32:o,34:o,39:o,40:o,36:"home",35:"end"},ignore:{INPUT:[32,37,38,39,40],TEXTAREA:[32,37,38,39,40],SELECT:[38,40]},tabSelector:"a[href]:visible, :input:visible"},i("afterInit",function(s,i){var o=i.settings,c=o.keyboard,u=c.ignore,l=i.current,p=e(this);o.fullscreen||p.attr("tabindex",0),l.keyboardNamespace=".jmpress-"+r(),e(o.fullscreen?t:p).bind("keypress"+l.keyboardNamespace,function(e){for(var t in u)if(e.target.nodeName===t&&-1!==u[t].indexOf(e.which))return;(e.which>=37&&e.which<=40||32===e.which)&&n(e)}),e(o.fullscreen?t:p).bind("keydown"+l.keyboardNamespace,function(t){var s=e(t.target);if((o.fullscreen||s.closest(p).length)&&c.use){for(var r in u)if(s[0].nodeName===r&&-1!==u[r].indexOf(t.which))return;var i,l=!1;if(9===t.which){if(s.closest(p.jmpress("active")).length?(i=s.near(c.tabSelector,t.shiftKey),e(i).closest(o.stepSelector).is(p.jmpress("active"))||(i=a)):t.shiftKey?l=!0:i=p.jmpress("active").find("a[href], :input").filter(":visible").first(),i&&i.length>0)return i.focus(),p.jmpress("scrollFix"),void n(t);t.shiftKey&&(l=!0)}var f=c.keys[t.which];"string"==typeof f?(-1!==f.indexOf(":")&&(f=f.split(":"),f=t.shiftKey?f[1]:f[0]),p.jmpress(f),n(t)):e.isFunction(f)?f.call(p,t):f&&(p.jmpress.apply(p,f),n(t)),l&&(i=p.jmpress("active").find("a[href], :input").filter(":visible").last(),i.focus(),p.jmpress("scrollFix"))}})}),i("afterDeinit",function(s,a){e(t).unbind(a.current.keyboardNamespace)})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}function n(e,t){return Math.max(Math.min(e,t),-t)}function i(t,s,a){var r=e(this).jmpress("current"),i=e(this).jmpress("settings"),o=e(this).jmpress("active").data("stepData"),c=e(this).jmpress("container");if(!(0===r.userZoom&&0>a)){var u=o.viewPortZoomable||i.viewPort.zoomable;if(!(r.userZoom===u&&a>0)){r.userZoom+=a;var l=e(c).innerWidth()/2,p=e(c).innerHeight()/2;t=t?t-l:t,s=s?s-p:s,r.userTranslateX=n(r.userTranslateX-a*t/r.zoomOriginWindowScale/u,l*r.userZoom*r.userZoom/u),r.userTranslateY=n(r.userTranslateY-a*s/r.zoomOriginWindowScale/u,p*r.userZoom*r.userZoom/u),e(this).jmpress("reselect","zoom")}}}var o=function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return t[1]||""}(),c=e.jmpress("defaults");c.viewPort={width:!1,height:!1,maxScale:0,minScale:0,zoomable:0,zoomBindMove:!0,zoomBindWheel:!0};var u=c.keyboard.keys;u["mozilla"===o?107:187]="zoomIn",u["mozilla"===o?109:189]="zoomOut",c.reasonableAnimation.resize={transitionDuration:"0s",transitionDelay:"0ms"},c.reasonableAnimation.zoom={transitionDuration:"0s",transitionDelay:"0ms"},e.jmpress("initStep",function(e,t){for(var s in{viewPortHeight:1,viewPortWidth:1,viewPortMinScale:1,viewPortMaxScale:1,viewPortZoomable:1})t.stepData[s]=t.data[s]&&parseFloat(t.data[s])}),e.jmpress("afterInit",function(n,i){var o=this;i.current.viewPortNamespace=".jmpress-"+r(),e(s).bind("resize"+i.current.viewPortNamespace,function(t){e(o).jmpress("reselect","resize")}),i.current.userZoom=0,i.current.userTranslateX=0,i.current.userTranslateY=0,i.settings.viewPort.zoomBindWheel&&e(i.settings.fullscreen?t:this).bind("mousewheel"+i.current.viewPortNamespace+" DOMMouseScroll"+i.current.viewPortNamespace,function(t,s){s=s||t.originalEvent.wheelDelta||-t.originalEvent.detail;var a=s/Math.abs(s);return 0>a?e(i.jmpress).jmpress("zoomOut",t.originalEvent.x,t.originalEvent.y):a>0&&e(i.jmpress).jmpress("zoomIn",t.originalEvent.x,t.originalEvent.y),!1}),i.settings.viewPort.zoomBindMove&&e(i.settings.fullscreen?t:this).bind("mousedown"+i.current.viewPortNamespace,function(e){i.current.userZoom&&(i.current.userTranslating={x:e.clientX,y:e.clientY},e.preventDefault(),e.stopImmediatePropagation())}).bind("mousemove"+i.current.viewPortNamespace,function(t){var s=i.current.userTranslating;s&&(e(o).jmpress("zoomTranslate",t.clientX-s.x,t.clientY-s.y),s.x=t.clientX,s.y=t.clientY,t.preventDefault(),t.stopImmediatePropagation())}).bind("mouseup"+i.current.viewPortNamespace,function(e){i.current.userTranslating&&(i.current.userTranslating=a,e.preventDefault(),e.stopImmediatePropagation())})}),e.jmpress("register","zoomIn",function(e,t){i.call(this,e||0,t||0,1)}),e.jmpress("register","zoomOut",function(e,t){i.call(this,e||0,t||0,-1)}),e.jmpress("register","zoomTranslate",function(t,s){var a=e(this).jmpress("current"),r=e(this).jmpress("settings"),i=e(this).jmpress("active").data("stepData"),o=e(this).jmpress("container"),c=i.viewPortZoomable||r.viewPort.zoomable,u=e(o).innerWidth(),l=e(o).innerHeight();a.userTranslateX=n(a.userTranslateX+t/a.zoomOriginWindowScale,u*a.userZoom*a.userZoom/c),a.userTranslateY=n(a.userTranslateY+s/a.zoomOriginWindowScale,l*a.userZoom*a.userZoom/c),e(this).jmpress("reselect","zoom")}),e.jmpress("afterDeinit",function(a,r){e(r.settings.fullscreen?t:this).unbind(r.current.viewPortNamespace),e(s).unbind(r.current.viewPortNamespace)}),e.jmpress("setActive",function(t,s){var a=s.settings.viewPort,r=s.stepData.viewPortHeight||a.height,n=s.stepData.viewPortWidth||a.width,i=s.stepData.viewPortMaxScale||a.maxScale,o=s.stepData.viewPortMinScale||a.minScale,c=r&&e(s.container).innerHeight()/r,u=n&&e(s.container).innerWidth()/n,l=(u||c)&&Math.min(u||c,c||u);if(l){l=l||1,i&&(l=Math.min(l,i)),o&&(l=Math.max(l,o));var p=s.stepData.viewPortZoomable||s.settings.viewPort.zoomable;if(p){var f=1/l-1/i;f/=p,l=1/(1/l-f*s.current.userZoom)}s.target.transform.reverse(),s.current.userTranslateX&&s.current.userTranslateY?s.target.transform.push(["translate",s.current.userTranslateX,s.current.userTranslateY,0]):s.target.transform.push(["translate"]),s.target.transform.push(["scale",l,l,1]),s.target.transform.reverse(),s.target.perspectiveScale/=l}s.current.zoomOriginWindowScale=l}),e.jmpress("setInactive",function(t,s){s.nextStep&&t&&e(s.nextStep).attr("id")===e(t).attr("id")||(s.current.userZoom=0,s.current.userTranslateX=0,s.current.userTranslateY=0)})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}var n=e.jmpress;n("defaults").mouse={clickSelects:!0},n("afterInit",function(t,s){var a=s.settings,n=a.stepSelector,i=s.current,o=e(this);i.clickableStepsNamespace=".jmpress-"+r(),o.bind("click"+i.clickableStepsNamespace,function(t){if(a.mouse.clickSelects&&!i.userZoom){var s=e(t.target).closest(n);s.is(o.jmpress("active"))||s.length&&(o.jmpress("select",s[0],"click"),t.preventDefault(),t.stopPropagation())}})}),n("afterDeinit",function(t,s){e(this).unbind(s.current.clickableStepsNamespace)})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(){return""+Math.round(1e5*Math.random(),0)}var n=e.jmpress;n("afterInit",function(s,a){var n=a.settings,i=a.current,o=a.jmpress;i.mobileNamespace=".jmpress-"+r();var c,u=[0,0];e(n.fullscreen?t:o).bind("touchstart"+i.mobileNamespace,function(e){c=e.originalEvent.touches[0],u=[c.pageX,c.pageY]}).bind("touchmove"+i.mobileNamespace,function(e){return c=e.originalEvent.touches[0],e.preventDefault(),!1}).bind("touchend"+i.mobileNamespace,function(t){var s=[c.pageX,c.pageY],a=[s[0]-u[0],s[1]-u[1]];return Math.max(Math.abs(a[0]),Math.abs(a[1]))>50?(a=Math.abs(a[0])>Math.abs(a[1])?a[0]:a[1],e(o).jmpress(a>0?"prev":"next"),t.preventDefault(),!1):void 0})}),n("afterDeinit",function(s,a){var r=a.settings,n=a.current,i=a.jmpress;e(r.fullscreen?t:i).unbind(n.mobileNamespace)})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(t,s,n){for(var i in s){var o=i;n&&(o=n+o.substr(0,1).toUpperCase()+o.substr(1)),e.isPlainObject(s[i])?r(t,s[i],o):t[o]===a&&(t[o]=s[i])}}function n(t,s){e.isArray(s)?s.length<t.length?e.error("more nested steps than children in template"):t.each(function(t,a){a=e(a);var n=a.data(u)||{};r(n,s[t]),a.data(u,n)}):e.isFunction(s)&&t.each(function(a,n){n=e(n);var i=n.data(u)||{};r(i,s(a,n,t)),n.data(u,i)})}function i(e,t,s,a){if(s.children){var r=t.children(a.settings.stepSelector);n(r,s.children)}o(e,s)}function o(e,t){r(e,t)}var c=e.jmpress,u="_template_",l="_applied_template_",p={};c("beforeInitStep",function(t,s){t=e(t);var a=s.data,r=a.template,n=t.data(l),o=t.data(u);r&&e.each(r.split(" "),function(e,r){var n=p[r];i(a,t,n,s)}),n&&i(a,t,n,s),o&&(i(a,t,o,s),t.data(u,null),o.template&&e.each(o.template.split(" "),function(e,r){var n=p[r];i(a,t,n,s)}))}),c("beforeInit",function(t,s){var a=c("dataset",this),r=a.template,i=s.settings.stepSelector;if(r){var o=p[r];n(e(this).find(i).filter(function(){return!e(this).parent().is(i)}),o.children)}}),c("register","template",function(t,s){p[t]?p[t]=e.extend(!0,{},p[t],s):p[t]=e.extend(!0,{},s)}),c("register","apply",function(t,s){if(s)if(e.isArray(s))n(e(t),s);else{var a;a="string"==typeof s?p[s]:e.extend(!0,{},s),e(t).each(function(t,s){s=e(s);var n=s.data(l)||{};r(n,a),s.data(l,n)})}else{var i=e(this).jmpress("settings").stepSelector;n(e(this).find(i).filter(function(){return!e(this).parent().is(i)}),t)}})}(jQuery,document,window),function(e,t,s,a){"use strict";e.jmpress("setActive",function(t,s){s.prevStep!==t&&e(t).triggerHandler("enterStep")}),e.jmpress("setInactive",function(t,s){s.nextStep!==t&&e(t).triggerHandler("leaveStep")})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(t){for(var s=t.split(" "),a=s[0],r={willClass:"will-"+a,doClass:"do-"+a,hasClass:"has-"+a},n="",i=1;i<s.length;i++){var o=s[i];switch(n){case"":"after"===o?n="after":e.warn("unknown keyword in '"+t+"'. '"+o+"' unknown.");break;case"after":if(o.match(/^[1-9][0-9]*m?s?/)){var c=parseFloat(o);-1!==o.indexOf("ms")?c*=1:-1!==o.indexOf("s")?c*=1e3:-1!==o.indexOf("m")&&(c*=6e4),r.delay=c}else r.after=Array.prototype.slice.call(s,i).join(" "),i=s.length}}return r}function n(t,s,a,r){r=r||t.length-1,a=a||0;for(var n=a;r+1>n;n++)if(e(t[n].element).is(s))return n}function i(t,s,a){e.each(s._on,function(e,s){t.push({substep:s.substep,delay:s.delay+a}),i(t,s.substep,s.delay+a)})}e.jmpress("defaults").customAnimationDataAttribute="jmpress",e.jmpress("afterInit",function(e,t){t.current.animationTimeouts=[],t.current.animationCleanupWaiting=[]}),e.jmpress("applyStep",function(t,s){function o(e,t){return t.substep._after?(l=t.substep._after,!1):void 0}var c={},u=[];if(e(t).find("[data-"+s.settings.customAnimationDataAttribute+"]").each(function(a,r){e(r).closest(s.settings.stepSelector).is(t)&&u.push({element:r})}),0!==u.length){e.each(u,function(t,a){a.info=r(e(a.element).data(s.settings.customAnimationDataAttribute)),e(a.element).addClass(a.info.willClass),a._on=[],a._after=null});var l={_after:a,_on:[],info:{}};if(e.each(u,function(e,t){var s=t.info.after;if(s)if("step"===s)s=l;else if("prev"===s)s=u[e-1];else{var r=n(u,s,0,e-1);r===a&&(r=n(u,s)),s=r===a||r===e?u[e-1]:u[r]}else s=u[e-1];if(s){if(!t.info.delay){if(!s._after)return void(s._after=t);s=s._after}s._on.push({substep:t,delay:t.info.delay||0})}}),l._after===a&&0===l._on.length){var p=n(u,s.stepData.startSubstep)||0;l._after=u[p]}var f=[];do{var d=[{substep:l,delay:0}];i(d,l,0),f.push(d),l=null,e.each(d,o)}while(l);c.list=f,e(t).data("substepsData",c)}}),e.jmpress("unapplyStep",function(t,s){var a=e(t).data("substepsData");a&&e.each(a.list,function(t,s){e.each(s,function(t,s){s.substep.info.willClass&&e(s.substep.element).removeClass(s.substep.info.willClass),s.substep.info.hasClass&&e(s.substep.element).removeClass(s.substep.info.hasClass),s.substep.info.doClass&&e(s.substep.element).removeClass(s.substep.info.doClass)})})}),e.jmpress("setActive",function(t,s){var r=e(t).data("substepsData");if(r){s.substep===a&&(s.substep="prev"===s.reason?r.list.length-1:0);var n=s.substep;e.each(s.current.animationTimeouts,function(e,t){clearTimeout(t)}),s.current.animationTimeouts=[],e.each(r.list,function(t,a){var r=n>t,i=n>=t;e.each(a,function(t,a){function n(){e(a.substep.element).addClass(a.substep.info.doClass)}a.substep.info.hasClass&&e(a.substep.element)[(r?"add":"remove")+"Class"](a.substep.info.hasClass),i&&!r&&a.delay&&"prev"!==s.reason?a.substep.info.doClass&&(e(a.substep.element).removeClass(a.substep.info.doClass),s.current.animationTimeouts.push(setTimeout(n,a.delay))):a.substep.info.doClass&&e(a.substep.element)[(i?"add":"remove")+"Class"](a.substep.info.doClass)})})}}),e.jmpress("setInactive",function(t,s){function a(t){e.each(t.list,function(t,s){e.each(s,function(t,s){s.substep.info.hasClass&&e(s.substep.element).removeClass(s.substep.info.hasClass),s.substep.info.doClass&&e(s.substep.element).removeClass(s.substep.info.doClass)})})}if(s.nextStep!==t){e.each(s.current.animationCleanupWaiting,function(e,t){a(t)}),s.current.animationCleanupWaiting=[];var r=e(t).data("substepsData");r&&s.current.animationCleanupWaiting.push(r)}}),e.jmpress("selectNext",function(t,s){if(s.substep!==a){var r=e(t).data("substepsData");if(r)return s.substep<r.list.length-1?{step:t,substep:s.substep+1}:void 0}}),e.jmpress("selectPrev",function(t,s){if(s.substep!==a){var r=e(t).data("substepsData");if(r)return s.substep>0?{step:t,substep:s.substep-1}:void 0}})}(jQuery,document,window),function(e,t,s,a){"use strict";e.jmpress("register","toggle",function(s,a,r){var n=this;e(t).bind("keydown",function(t){t.keyCode===s&&(e(n).jmpress("initialized")?e(n).jmpress("deinit"):e(n).jmpress(a))}),r&&e(n).jmpress(a)})}(jQuery,document,window),function(e,t,s,a){"use strict";function r(t,s,a){if(t.secondary&&-1!==t.secondary.split(" ").indexOf(s)){for(var r in t)if(r.length>9&&0===r.indexOf("secondary")){var n=t[r],i=r.substr(9);i=i.substr(0,1).toLowerCase()+i.substr(1),t[r]=t[i],t[i]=n}e(this).jmpress("reapply",e(a))}}e.jmpress("initStep",function(e,t){for(var s in t.data)0===s.indexOf("secondary")&&(t.stepData[s]=t.data[s])}),e.jmpress("beforeActive",function(t,s){r.call(s.jmpress,e(t).data("stepData"),"self",t);var a=e(t).parent();e(a).children(s.settings.stepSelector).each(function(t,a){var n=e(a).data("stepData");r.call(s.jmpress,n,"siblings",a)});for(var n=1;n<s.parents.length;n++)e(s.parents[n]).children(s.settings.stepSelector).each()}),e.jmpress("setInactive",function(t,s){
function a(t,a){var n=e(a).data("stepData");r.call(s.jmpress,n,"grandchildren",a)}r.call(s.jmpress,e(t).data("stepData"),"self",t);var n=e(t).parent();e(n).children(s.settings.stepSelector).each(function(t,a){var n=e(a).data("stepData");r.call(s.jmpress,n,"siblings",a)});for(var i=1;i<s.parents.length;i++)e(s.parents[i]).children(s.settings.stepSelector).each(a)})}(jQuery,document,window),function(e,t,s,a){"use strict";e.jmpress("defaults").duration={defaultValue:-1,defaultAction:"next",barSelector:a,barProperty:"width",barPropertyStart:"0",barPropertyEnd:"100%"},e.jmpress("initStep",function(e,t){t.stepData.duration=t.data.duration&&parseInt(t.data.duration,10),t.stepData.durationAction=t.data.durationAction}),e.jmpress("setInactive",function(t,s){var a=s.settings,r=a.duration,n=s.current;if(s.stepData.duration||r.defaultValue,n.durationTimeout){if(r.barSelector){var i={transitionProperty:r.barProperty,transitionDuration:"0",transitionDelay:"0",transitionTimingFunction:"linear"};i[r.barProperty]=r.barPropertyStart;var o=e(r.barSelector);e.jmpress("css",o,i),o.each(function(t,s){var a=e(s).next(),r=e(s).parent();e(s).detach(),a.length?a.insertBefore(s):r.append(s)})}clearTimeout(n.durationTimeout),delete n.durationTimeout}}),e.jmpress("setActive",function(t,s){var r=s.settings,n=r.duration,i=s.current,o=s.stepData.duration||n.defaultValue;if(o&&o>0){if(n.barSelector){var c={transitionProperty:n.barProperty,transitionDuration:o-2*r.transitionDuration/3-100+"ms",transitionDelay:2*r.transitionDuration/3+"ms",transitionTimingFunction:"linear"};c[n.barProperty]=n.barPropertyEnd,e.jmpress("css",e(n.barSelector),c)}var u=this;i.durationTimeout&&(clearTimeout(i.durationTimeout),i.durationTimeout=a),i.durationTimeout=setTimeout(function(){var t=s.stepData.durationAction||n.defaultAction;e(u).jmpress(t)},o)}})}(jQuery,document,window),function(e,t,s,a){"use strict";var r=e.jmpress,n="jmpress-presentation-";r("defaults").presentationMode={use:!0,url:"presentation-screen.html",notesUrl:!1,transferredValues:["userZoom","userTranslateX","userTranslateY"]},r("defaults").keyboard.keys[80]="presentationPopup",r("afterInit",function(t,a){var r=a.current;if(r.selectMessageListeners=[],a.settings.presentationMode.use){s.addEventListener("message",function(t){try{if("string"!=typeof t.data||0!==t.data.indexOf(n))return;var i=JSON.parse(t.data.slice(n.length));switch(i.type){case"select":e.each(a.settings.presentationMode.transferredValues,function(e,t){a.current[t]=i[t]}),/[a-z0-9\-]+/i.test(i.targetId)&&typeof i.substep in{number:1,undefined:1}?e(a.jmpress).jmpress("select",{step:"#"+i.targetId,substep:i.substep},i.reason):e.error("For security reasons the targetId must match /[a-z0-9\\-]+/i and substep must be a number.");break;case"listen":r.selectMessageListeners.push(t.source);break;case"ok":clearTimeout(r.presentationPopupTimeout);break;case"read":try{t.source.postMessage(n+JSON.stringify({type:"url",url:s.location.href,notesUrl:a.settings.presentationMode.notesUrl}),"*")}catch(o){e.error("Cannot post message to source: "+o)}break;default:throw"Unknown message type: "+i.type}}catch(o){e.error("Received message is malformed: "+o)}});try{s.parent&&s.parent!==s&&s.parent.postMessage(n+JSON.stringify({type:"afterInit"}),"*")}catch(i){e.error("Cannot post message to parent: "+i)}}}),r("afterDeinit",function(t,a){if(a.settings.presentationMode.use)try{s.parent&&s.parent!==s&&s.parent.postMessage(n+JSON.stringify({type:"afterDeinit"}),"*")}catch(r){e.error("Cannot post message to parent: "+r)}}),r("setActive",function(t,s){var a=e(s.delegatedFrom).attr("id"),r=s.substep,i=s.reason;e.each(s.current.selectMessageListeners,function(t,o){try{var c={type:"select",targetId:a,substep:r,reason:i};e.each(s.settings.presentationMode.transferredValues,function(e,t){c[t]=s.current[t]}),o.postMessage(n+JSON.stringify(c),"*")}catch(u){e.error("Cannot post message to listener: "+u)}})}),r("register","presentationPopup",function(){function t(){r.jmpress("current").presentationPopupTimeout=setTimeout(t,100);try{a.postMessage(n+JSON.stringify({type:"url",url:s.location.href,notesUrl:r.jmpress("settings").presentationMode.notesUrl}),"*")}catch(e){}}var a,r=e(this);r.jmpress("settings").presentationMode.use&&(a=s.open(e(this).jmpress("settings").presentationMode.url),r.jmpress("current").presentationPopupTimeout=setTimeout(t,100))})}(jQuery,document,window);