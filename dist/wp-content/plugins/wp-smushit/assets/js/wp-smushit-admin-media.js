var WP_Smush=WP_Smush||{};jQuery(function(t){"use strict";if(wp.media){var e=ajaxurl+"?action=wp_smushit_manual",s=Backbone.View.extend({className:"media-lib-wp-smush-el",tagName:"div",events:{"click .media-lib-wp-smush-icon":"click"},template:_.template('<span class="dashicons dashicons-media-archive media-lib-wp-smush-icon"></span>'),initialize:function(){this.render()},is_smushed:function(){var t=this,e=_.filter(wp_smushit_data.smushed,function(e){return e==t.model.get("id").toString()});return"object"==typeof e?e.length:!1},render:function(){var t=this.model.toJSON();this.$el.html(this.template()),this.$button=this.$(".media-lib-wp-smush-icon"),this.is_smushed()?this.$el.addClass("is_smushed"):(this.$el.addClass("active"),this.$button.prop("title",wp_smush_msgs.smush_now)),this.$button.data("id",t.id)},click:function(t){var s=WP_Smush.ajax(this.model.get("id"),e,0),i=this;t.preventDefault(),t.stopPropagation(),this.$button.css({display:"block"}),this.$button.prop("disabled",!0),this.$button.addClass("active spinner"),s.complete(function(t){i.$button.prop("disabled",!1),i.$button.removeClass("spinner"),i.$button.removeClass("active"),i.$el.removeClass("active"),i.$el.addClass("is_smushed")})}});WP_Smush.Attachments=wp.media.view.Attachments.extend({createAttachmentView:function(t){var e=wp.media.view.Attachments.__super__.createAttachmentView.apply(this,arguments);return _.defer(function(){var t=new s({model:e.model});e.$el.append(t.el),e.$el.addClass("has-smush-button")}),e}})}});