!function(){var e=tinymce.each;tinymce.create("tinymce.plugins.AdvListPlugin",{init:function(t,i){function n(t){var i=[];return e(t.split(/,/),function(e){i.push({title:"advlist."+("default"==e?"def":e.replace(/-/g,"_")),styles:{listStyleType:"default"==e?"":e}})}),i}var o=this;o.editor=t,o.numlist=t.getParam("advlist_number_styles")||n("default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman"),o.bullist=t.getParam("advlist_bullet_styles")||n("default,circle,disc,square"),tinymce.isIE&&/MSIE [2-7]/.test(navigator.userAgent)&&(o.isIE7=!0)},createControl:function(t,i){function n(t,i){var n=!0;return e(i.styles,function(e,i){return r.dom.getStyle(t,i)!=e?(n=!1,!1):void 0}),n}function o(){var e,i=r.dom,o=r.selection;e=i.getParent(o.getNode(),"ol,ul"),(!e||e.nodeName==("bullist"==t?"OL":"UL")||n(e,s))&&r.execCommand("bullist"==t?"InsertUnorderedList":"InsertOrderedList"),s&&(e=i.getParent(o.getNode(),"ol,ul"),e&&(i.setStyles(e,s.styles),e.removeAttribute("data-mce-style"))),r.focus()}var l,s,d=this,r=d.editor;return"numlist"==t||"bullist"==t?("advlist.def"==d[t][0].title&&(s=d[t][0]),l=i.createSplitButton(t,{title:"advanced."+t+"_desc","class":"mce_"+t,onclick:function(){o()}}),l.onRenderMenu.add(function(i,l){l.onHideMenu.add(function(){d.bookmark&&(r.selection.moveToBookmark(d.bookmark),d.bookmark=0)}),l.onShowMenu.add(function(){var i,o=r.dom,a=o.getParent(r.selection.getNode(),"ol,ul");(a||s)&&(i=d[t],e(l.items,function(t){var o=!0;t.setSelected(0),a&&!t.isDisabled()&&(e(i,function(e){return e.id!=t.id||n(a,e)?void 0:(o=!1,!1)}),o&&t.setSelected(1))}),a||l.items[s.id].setSelected(1)),r.focus(),tinymce.isIE&&(d.bookmark=r.selection.getBookmark(1))}),l.add({id:r.dom.uniqueId(),title:"advlist.types","class":"mceMenuItemTitle",titleItem:!0}).setDisabled(1),e(d[t],function(e){d.isIE7&&"lower-greek"==e.styles.listStyleType||(e.id=r.dom.uniqueId(),l.add({id:e.id,title:e.title,onclick:function(){s=e,o()}}))})}),l):void 0},getInfo:function(){return{longname:"Advanced lists",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/advlist",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("advlist",tinymce.plugins.AdvListPlugin)}();