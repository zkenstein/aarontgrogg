!function(e){function t(e){return"object"==typeof e?e:{top:e,left:e}}var i=e.scrollTo=function(t,i,n){e(window).scrollTo(t,i,n)};i.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1},i.window=function(t){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this,i=!t.nodeName||-1!=e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!i)return t;var n=(t.contentWindow||t).document||t.ownerDocument||t;return e.browser.safari||"BackCompat"==n.compatMode?n.body:n.documentElement})},e.fn.scrollTo=function(n,o,r){return"object"==typeof o&&(r=o,o=0),"function"==typeof r&&(r={onAfter:r}),"max"==n&&(n=9e9),r=e.extend({},i.defaults,r),o=o||r.speed||r.duration,r.queue=r.queue&&r.axis.length>1,r.queue&&(o/=2),r.offset=t(r.offset),r.over=t(r.over),this._scrollable().each(function(){function c(e){d.animate(l,o,r.easing,e&&function(){e.call(this,n,r)})}var a,u=this,d=e(u),s=n,l={},p=d.is("html,body");switch(typeof s){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(s)){s=t(s);break}s=e(s,this);case"object":(s.is||s.style)&&(a=(s=e(s)).offset())}e.each(r.axis.split(""),function(e,t){var n="x"==t?"Left":"Top",o=n.toLowerCase(),f="scroll"+n,j=u[f],m=i.max(u,t);if(a)l[f]=a[o]+(p?0:j-d.offset()[o]),r.margin&&(l[f]-=parseInt(s.css("margin"+n))||0,l[f]-=parseInt(s.css("border"+n+"Width"))||0),l[f]+=r.offset[o]||0,r.over[o]&&(l[f]+=s["x"==t?"width":"height"]()*r.over[o]);else{var h=s[o];l[f]=h.slice&&"%"==h.slice(-1)?parseFloat(h)/100*m:h}/^\d+$/.test(l[f])&&(l[f]=l[f]<=0?0:Math.min(l[f],m)),!e&&r.queue&&(j!=l[f]&&c(r.onAfterFirst),delete l[f])}),c(r.onAfter)}).end()},i.max=function(t,i){var n="x"==i?"Width":"Height",o="scroll"+n;if(!e(t).is("html,body"))return t[o]-e(t)[n.toLowerCase()]();var r="client"+n,c=t.ownerDocument.documentElement,a=t.ownerDocument.body;return Math.max(c[o],a[o])-Math.min(c[r],a[r])}}(jQuery),jetpack={numModules:0,container:null,arrow:null,linkClicked:null,resizeTimeout:null,resizeTimer:null,shadowTimer:null,statusText:null,isRTL:!("undefined"==typeof isRtl||!isRtl),didDebug:!1,init:function(){jetpack.numModules=jQuery("div.jetpack-module").not(".placeholder").size(),jetpack.container=jQuery("div.module-container"),jetpack.level_modules(),jetpack.level_placeholders(),jetpack.level_placeholders_on_resize(),jQuery("a.more-info-link","div.jetpack-module").bind("click",function(e){e.preventDefault(),jetpack.hide_shadows(),jetpack.linkClicked&&jetpack.linkClicked.parents("div.jetpack-module").attr("id")===jQuery(this).parents("div.jetpack-module").attr("id")?jetpack.close_learn_more(function(){jetpack.show_shadows()}):(jetpack.linkClicked=jQuery(this),jetpack.insert_learn_more(jQuery(this).parents("div.jetpack-module"),function(){jetpack.show_shadows()}),jQuery("a.jetpack-deactivate-button").hide(),jQuery("a.jetpack-configure-button").show(),jetpack.linkClicked.parents("div.jetpack-module").children(".jetpack-module-actions").children("a.jetpack-deactivate-button").show(),jetpack.linkClicked.parents("div.jetpack-module").children(".jetpack-module-actions").children("a.jetpack-configure-button").hide())}),jQuery(window).bind("resize",function(){jetpack.hide_shadows(),clearTimeout(jetpack.shadowTimer),jetpack.shadowTimer=setTimeout(function(){jetpack.show_shadows()},200)}),jQuery("a#jp-debug").bind("click",function(e){e.preventDefault(),jetpack.didDebug||(jetpack.didDebug=!0,jQuery("#jetpack-configuration").load(this.href,function(){jQuery.scrollTo("max","fast")})),jetpack.toggle_debug()}),jQuery("#jp-disconnect a").click(function(){return confirm(jetpackL10n.ays_disconnect)?void jQuery(this).addClass("clicked").css({"background-image":"url( "+userSettings.url+"wp-includes/images/spinner-2x.gif )","background-position":"9px 5px","background-size":"16px 16px"}).unbind("click").click(function(){return!1}):!1}),jQuery("#jp-unlink a").click(function(){return confirm(jetpackL10n.ays_unlink)?void jQuery(this).css({"background-image":"url( "+userSettings.url+"wp-includes/images/spinner-2x.gif )","background-position":"9px 5px","background-size":"16px 16px"}).unbind("click").click(function(){return!1}):!1}),jQuery("#screen-meta, #screen-meta-links").wrapAll('<div class="screen-meta-wrap" />')},level_modules:function(){var e=0;jQuery("div.jetpack-module","div.module-container").each(function(){e=Math.max(e,jQuery(this).height())}).height(e)},level_placeholders:function(){jQuery("div.placeholder").show();var e=jetpack.container.width(),t=5*parseInt(e/242,10)-jetpack.numModules;242*jetpack.numModules>e?jQuery("div.placeholder").slice(t).hide():jQuery("div.placeholder").hide()},level_placeholders_on_resize:function(){jQuery(window).bind("resize",function(){jetpack.resizeTimer||(jetpack.resizeTimer=setTimeout(function(){jetpack.resizeTimer=!1,jetpack.level_placeholders(),jetpack.level_placeholders_on_resize()},100))})},insert_learn_more:function(e,t){var i=parseInt(jetpack.container.width()/242,10),n=0,o=0,r=jetpack.isRTL?144:28;jQuery("div.jetpack-module","div.module-container").each(function(t,i){jQuery(i).attr("id")===jQuery(e).attr("id")&&(n=t)}),o=1+parseInt(n/i,10),jQuery("div.jetpack-module","div.module-container").each(function(n,c){return n+1===i*o?(jQuery("div.more-info").length?jQuery(c).next().hasClass("more-info")?(jQuery("div.more-info div.jp-content").fadeOut(100),jetpack.learn_more_content(jQuery(e).attr("id")),jQuery(window).scrollTo(jQuery("div.more-info").prev().offset().top-70,600,function(){"function"==typeof t&&t.call(this)})):(jQuery("div.more-info div.jp-content").hide(),jQuery("div.more-info").css({height:"230px",minHeight:0}).slideUp(200,function(){var i=jQuery(this);i.detach().insertAfter(c),jQuery("div.more-info div.jp-content").hide(),jetpack.learn_more_content(jQuery(e).attr("id")),i.css({height:"230px",minHeight:0}).slideDown(300,function(){i.css({height:"auto",minHeight:"230px"})}),jQuery(window).scrollTo(i.prev().offset().top-70,600,function(){"function"==typeof t&&t.call(this)})})):(jQuery(c).after('<div id="message" class="more-info jetpack-message"><div class="arrow"></div><div class="jp-content"></div><div class="jp-close">&times;</div><div class="clear"></div></div>'),jQuery("div.more-info").css({height:"230px",minHeight:0}),jQuery("div.more-info","div.module-container").hide().slideDown(400,function(){jQuery("div.more-info").css({height:"auto",minHeight:"230px"}),jetpack.learn_more_content(jQuery(e).attr("id")),jQuery(window).scrollTo(jQuery("div.more-info").prev().offset().top-70,600),"function"==typeof t&&t.call(this)}),jQuery("div.more-info").children("div.arrow").animate({left:jQuery(e).offset().left-jetpack.container.offset().left+r+"px"},300)),void jQuery("div.more-info").children("div.arrow").animate({left:jQuery(e).offset().left-jetpack.container.offset().left+r+"px"},300)):void 0}),jQuery(window).bind("resize",function(){jetpack.reposition_learn_more(e),jetpack.level_placeholders_on_resize()}),jQuery("div.more-info div.jp-close").unbind("click").bind("click",function(){jetpack.close_learn_more()})},reposition_learn_more:function(e){var t,i=parseInt(jetpack.container.width()/242,10),n=0;jQuery("div.jetpack-module","div.module-container").each(function(t,i){jQuery(i).attr("id")===jQuery(e).attr("id")&&(n=t)}),t=1+parseInt(n/i,10),jQuery("div.jetpack-module","div.module-container").each(function(n,o){n+1===i*t&&(jQuery("div.more-info").detach().insertAfter(o),jQuery("div.more-info").children("div.arrow").css({left:jQuery(e).offset().left-jetpack.container.offset().left+28+"px"},300))})},learn_more_content:function(e){var t=jQuery("#jp-more-info-"+e).html();jQuery("div.more-info div.jp-content").html(t).hide().fadeIn(300)},close_learn_more:function(e){jQuery("div.more-info div.jp-content").hide(),jQuery("div.more-info").css({height:"230px",minHeight:0}).slideUp(200,function(){jQuery(this).remove(),jQuery("a.jetpack-deactivate-button").hide(),jetpack.linkClicked.parents("div.jetpack-module").children(".jetpack-module-actions").children("a.jetpack-configure-button").show(),jetpack.linkClicked=null,"function"==typeof e&&e.call(this)})},toggle_debug:function(){jQuery("div#jetpack-configuration").toggle(0,function(){jQuery(this).is(":visible")&&jQuery.scrollTo("max","fast")})},hide_shadows:function(){jQuery("div.jetpack-module, div.more-info").css({"-webkit-box-shadow":"none"})},show_shadows:function(){jQuery("div.jetpack-module").css({"-webkit-box-shadow":"inset 0 1px 0 #fff, inset 0 0 20px rgba(0,0,0,0.05), 0 1px 2px rgba( 0,0,0,0.1 )"}),jQuery("div.more-info").css({"-webkit-box-shadow":"inset 0 0 20px rgba(0,0,0,0.05), 0 1px 2px rgba( 0,0,0,0.1 )"})}},jQuery(function(){jetpack.init()});