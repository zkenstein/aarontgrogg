function AtD_submit_check(t){AtD_proofread_click_count>0||(t.stopImmediatePropagation(),t.preventDefault(),"undefined"!=typeof tinyMCE&&tinyMCE.activeEditor&&!tinyMCE.activeEditor.isHidden()?tinyMCE.activeEditor.execCommand("mceWritingImprovementTool",AtD_submit_check_callback):(AtD_restore_if_proofreading(),AtD_check(AtD_submit_check_callback)))}function AtD_submit_check_callback(t){if(t=Number(t||0),AtD_unbind_proofreader_listeners(),0===t||AtD_proofread_click_count>1)AtD_update_post();else if(-1===t)alert(AtD.getLang("message_server_error","There was a problem communicating with the Proofreading service. Try again in one minute.")),AtD_update_post();else{var e,i=jQuery("#original_post_status").val();e="publish"===i?AtD.getLang("dialog_confirm_post_publish","The proofreader has suggestions for this post. Are you sure you want to publish it?\n\nPress OK to publish your post, or Cancel to view the suggestions and edit your post."):AtD.getLang("dialog_confirm_post_update","The proofreader has suggestions for this post. Are you sure you want to update it?\n\nPress OK to update your post, or Cancel to view the suggestions and edit your post."),confirm(e)?AtD_update_post():(AtD_bind_proofreader_listeners(),AtD_kill_autoproofread()),jQuery("#publish").removeClass("button-primary-disabled"),jQuery("#ajax-loading").hide()}}function AtD_kill_autoproofread(){jQuery("#publish").unbind("click.AtD_submit_check")}function AtD_update_post(){("undefined"==typeof tinyMCE||!tinyMCE.activeEditor||tinyMCE.activeEditor.isHidden())&&AtD_restore_if_proofreading(),jQuery("#publish").unbind("click.AtD_submit_check").click()}var AtD_proofread_click_count=0;jQuery(document).ready(function(t){var e=t("#original_post_status").val();"undefined"!=typeof AtD_check_when&&t("#content").length&&("publish"!==e&&AtD_check_when.onpublish||("publish"===e||"schedule"===e)&&AtD_check_when.onupdate)&&t("#publish").bind("click.AtD_submit_check",AtD_submit_check)});