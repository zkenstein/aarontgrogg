var wpPostLikeCount=wpPostLikeCount||{};!function(t){wpPostLikeCount=jQuery.extend(wpPostLikeCount,{jsonAPIbase:"https://public-api.wordpress.com/rest/v1",APIqueue:[],wpPostLikeCount:function(){t(".post-like-count").each(function(){var o=t(this).attr("data-post-id"),n=t(this).attr("data-blog-id");wpPostLikeCount.APIqueue.push("/sites/"+n+"/posts/"+o+"/likes")}),wpPostLikeCount.getCounts()},showCount:function(o,n){t("#post-like-count-"+o).find(".comment-count").hide(),t("#post-like-count-"+o).find(".comment-count").text(n),t("#post-like-count-"+o).find(".comment-count").fadeIn()},getCounts:function(){for(var t={path:"/batch",data:"",success:function(t){for(var o in t)if(!t[o].error_data){var n=o.split("/"),e=n[4];wpPostLikeCount.showCount(e,t[o].found)}},error:function(){}},o="",n=0;n<wpPostLikeCount.APIqueue.length;n++)n>0&&(o="&"),t.data+=o+"urls[]="+wpPostLikeCount.APIqueue[n];wpPostLikeCount.request(t)}})}(jQuery),jQuery(document).ready(function(){wpPostLikeCount.wpPostLikeCount()});