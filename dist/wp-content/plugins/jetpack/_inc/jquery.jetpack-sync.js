jQuery(document).ready(function(t){var n=function(n){var e,a=t(".jetpack_sync_reindex_control");a.find(".jetpack_sync_reindex_control_action").attr("disabled",!0),a.find(".jetpack_sync_reindex_control_status").html("&hellip;"),e="DONE"===a.data("status")?{action:"jetpack-sync-reindex-trigger"}:{action:"jetpack-sync-reindex-status"},t.getJSON(ajaxurl,e,function(e){var a,c,s=t(".jetpack_sync_reindex_control");0!==s.length&&(a=s.data("strings"),c=a[e.status].status,"INDEXING"===e.status&&(c+=" ("+Math.floor(100*e.posts.imported/e.posts.total)+"%)"),s.data("status",e.status),s.find(".jetpack_sync_reindex_control_action").val(a[e.status].action),s.find(".jetpack_sync_reindex_control_status").text(c),setTimeout(function(){t(".jetpack_sync_reindex_control").find(".jetpack_sync_reindex_control_action").attr("disabled",!1)},n))})};t(".jetpack_sync_reindex_control").find(".jetpack_sync_reindex_control_action").live("click",function(t){t.preventDefault(),n(5e3)}),n(1e3)});