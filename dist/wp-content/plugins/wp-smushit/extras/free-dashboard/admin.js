jQuery(function(){function a(){function a(){var a,t=jQuery("<span></span>");t.addClass("input-field").text(p.val()),t.appendTo("body"),a=parseInt(t.width()),t.remove(),p.width(a+34)}function t(t){13===t.keyCode?btn_act.click():a()}p.length&&(p.keyup(t).focus().select(),a())}function t(){s.fadeIn(500),a()}function e(){s.fadeTo(100,0,function(){s.slideUp(100,function(){s.remove()})})}function n(){var a=u.replace(/\/plugins\//,"/support/view/plugin-reviews/")+"?rate=5#postform",t=jQuery('<a href="'+a+'" target="_blank">Rate</a>');t.appendTo("body"),t[0].click(),t.remove()}function i(){var a=p.val();_dcq.push(["identify",{email:a}]),_dcq.push(["track","Free plugin email course",{Plugin:o}])}function c(a,t){s.attr("data-message",t),s.addClass("loading"),ajax_data.action=a,jQuery.post(window.ajaxurl,ajax_data,e)}var s=jQuery(".frash-notice"),d=s.find("input[name=type]").val(),r=s.find("input[name=plugin_id]").val(),u=s.find("input[name=url_wp]").val(),o=s.find("input[name=drip_plugin]").val(),p=s.find("input[name=email]");btn_act=s.find(".frash-notice-act"),btn_dismiss=s.find(".frash-notice-dismiss"),ajax_data={},ajax_data.plugin_id=r,ajax_data.type=d,btn_act.click(function(a){switch(a.preventDefault(),d){case"rate":n();break;case"email":i()}c("frash_act",btn_act.data("msg"))}),btn_dismiss.click(function(a){a.preventDefault(),c("frash_dismiss",btn_dismiss.data("msg"))}),window.setTimeout(t,500)});var _dcq=_dcq||[],_dcs=_dcs||{};_dcs.account="6994213";var dc=document.createElement("script");dc.type="text/javascript",dc.async=!0,dc.src="//tag.getdrip.com/6994213.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(dc,s);