!function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,n){e.fn.spin=function(s,i){return this.each(function(){var t=e(this),r=t.data();if(r.spinner&&(r.spinner.stop(),delete r.spinner),s!==!1){if(s=e.extend({color:i||t.css("color")},e.fn.spin.presets[s]||s),"undefined"!=typeof s.right&&"undefined"!=typeof s.length&&"undefined"!=typeof s.width&&"undefined"!=typeof s.radius){var p=t.css("padding-left");p="undefined"==typeof p?0:parseInt(p,10),s.left=t.outerWidth()-2*(s.length+s.width+s.radius)-p-s.right,delete s.right}r.spinner=new n(s).spin(this)}})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}),function(e){e.fn.spin.presets.wp={trail:60,speed:1.3},e.fn.spin.presets.small=e.extend({lines:8,length:2,width:2,radius:3},e.fn.spin.presets.wp),e.fn.spin.presets.medium=e.extend({lines:8,length:4,width:3,radius:5},e.fn.spin.presets.wp),e.fn.spin.presets.large=e.extend({lines:10,length:6,width:4,radius:7},e.fn.spin.presets.wp),e.fn.spin.presets["small-left"]=e.extend({left:5},e.fn.spin.presets.small),e.fn.spin.presets["small-right"]=e.extend({right:5},e.fn.spin.presets.small),e.fn.spin.presets["medium-left"]=e.extend({left:5},e.fn.spin.presets.medium),e.fn.spin.presets["medium-right"]=e.extend({right:5},e.fn.spin.presets.medium),e.fn.spin.presets["large-left"]=e.extend({left:5},e.fn.spin.presets.large),e.fn.spin.presets["large-right"]=e.extend({right:5},e.fn.spin.presets.large)}(jQuery);