jQuery(function(i){function t(t){if(i("body").hasClass("wp-customizer"))return void t.find(".widget-inside").css("top",0);if(t.hasClass("expanded")){t.attr("style")&&t.data("original-style",t.attr("style"));var e=t.width();if(400>e){var n=400-e;isRtl?t.css("position","relative").css("right","-"+n+"px").css("width","400px"):t.css("position","relative").css("left","-"+n+"px").css("width","400px")}}else t.data("original-style")?t.attr("style",t.data("original-style")).data("original-style",null):t.removeAttr("style")}var e=i("div#widgets-right");e.length&&i(e).find(".widget-control-actions").length||(e=i("form#customize-controls")),i("a.display-options").each(function(){var t=i(this),e=t.closest("div.widget");t.insertBefore(e.find("input.widget-control-save")),t.parent().removeClass("widget-control-noform").find(".spinner").remove().css("float","left").prependTo(t.parent())}),e.on("click.widgetconditions","a.add-condition",function(t){t.preventDefault();var e=i(this).closest("div.condition"),n=e.clone().insertAfter(e);n.find("select.conditions-rule-major").val(""),n.find("select.conditions-rule-minor").html("").attr("disabled"),n.find("span.conditions-rule-has-children").hide().html("")}),e.on("click.widgetconditions","a.display-options",function(e){e.preventDefault();var n=i(this),s=n.closest("div.widget");s.find("div.widget-conditional").toggleClass("widget-conditional-hide"),i(this).toggleClass("active"),s.toggleClass("expanded"),t(s),i(this).hasClass("active")?s.find("input[name=widget-conditions-visible]").val("1"):s.find("input[name=widget-conditions-visible]").val("0")}),e.on("click.widgetconditions","a.delete-condition",function(t){t.preventDefault();var e=i(this).closest("div.condition");e.is(":first-child")&&e.is(":last-child")?(i(this).closest("div.widget").find("a.display-options").click(),e.find("select.conditions-rule-major").val("").change()):e.detach()}),e.on("click.widgetconditions","div.widget-top",function(){var e=i(this).closest("div.widget"),n=e.find("a.display-options");n.hasClass("active")&&n.attr("opened","true"),n.attr("opened")&&(n.removeAttr("opened"),e.toggleClass("expanded"),t(e))}),i(document).on("change.widgetconditions","select.conditions-rule-major",function(){var t=i(this),e=t.siblings("select.conditions-rule-minor:first"),n=t.siblings("span.conditions-rule-has-children");if(t.val()){"page"!==t.val()&&n.hide().html(""),e.html("").append(i("<option/>").text(e.data("loading-text")));var s={action:"widget_conditions_options",major:t.val()};jQuery.post(ajaxurl,s,function(i){e.html(i).removeAttr("disabled")})}else t.siblings("select.conditions-rule-minor").attr("disabled","disabled").html(""),n.hide().html("")}),i(document).on("change.widgetconditions","select.conditions-rule-minor",function(){var t=i(this),e=t.siblings("select.conditions-rule-major"),n=t.siblings("span.conditions-rule-has-children");if("page"===e.val()){var s={action:"widget_conditions_has_children",major:e.val(),minor:t.val()};jQuery.post(ajaxurl,s,function(i){n.html(i).show()})}else n.hide().html("")})});