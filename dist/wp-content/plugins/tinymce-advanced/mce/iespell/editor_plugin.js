!function(){tinymce.create("tinymce.plugins.IESpell",{init:function(e,n){var i,l=this;tinymce.isIE&&(l.editor=e,e.addCommand("mceIESpell",function(){try{i=new ActiveXObject("ieSpell.ieSpellExtension"),i.CheckDocumentNode(e.getDoc().documentElement)}catch(n){-2146827859==n.number?e.windowManager.confirm(e.getLang("iespell.download"),function(e){e&&window.open("http://www.iespell.com/download.php","ieSpellDownload","")}):e.windowManager.alert("Error Loading ieSpell: Exception "+n.number)}}),e.addButton("iespell",{title:"iespell.iespell_desc",cmd:"mceIESpell"}))},getInfo:function(){return{longname:"IESpell (IE Only)",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/iespell",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("iespell",tinymce.plugins.IESpell)}();