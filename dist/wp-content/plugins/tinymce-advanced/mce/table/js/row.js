function init(){tinyMCEPopup.resizeToInnerSize(),document.getElementById("backgroundimagebrowsercontainer").innerHTML=getBrowserHTML("backgroundimagebrowser","backgroundimage","image","table"),document.getElementById("bgcolor_pickcontainer").innerHTML=getColorPickerHTML("bgcolor_pick","bgcolor");var e=tinyMCEPopup.editor,t=e.dom,o=t.getParent(e.selection.getStart(),"tr"),a=document.forms[0],l=t.parseStyle(t.getAttrib(o,"style")),r=o.parentNode.nodeName.toLowerCase(),i=t.getAttrib(o,"align"),n=t.getAttrib(o,"valign"),c=trimSize(getStyle(o,"height","height")),d=t.getAttrib(o,"class"),g=convertRGBToHex(getStyle(o,"bgcolor","backgroundColor")),s=getStyle(o,"background","backgroundImage").replace(new RegExp("url\\(['\"]?([^'\"]*)['\"]?\\)","gi"),"$1"),u=t.getAttrib(o,"id"),m=t.getAttrib(o,"lang"),y=t.getAttrib(o,"dir");selectByValue(a,"rowtype",r),setActionforRowType(a,r),0==t.select("td.mceSelected,th.mceSelected",o).length?(addClassesToList("class","table_row_styles"),TinyMCE_EditableSelects.init(),a.bgcolor.value=g,a.backgroundimage.value=s,a.height.value=c,a.id.value=u,a.lang.value=m,a.style.value=t.serializeStyle(l),selectByValue(a,"align",i),selectByValue(a,"valign",n),selectByValue(a,"class",d,!0,!0),selectByValue(a,"dir",y),isVisible("backgroundimagebrowser")&&(document.getElementById("backgroundimage").style.width="180px"),updateColor("bgcolor_pick","bgcolor")):tinyMCEPopup.dom.hide("action")}function updateAction(){var e,t,o=tinyMCEPopup.editor,a=o.dom,l=document.forms[0],r=getSelectValue(l,"action");if(!AutoValidator.validate(l))return tinyMCEPopup.alert(AutoValidator.getErrorMessages(l).join(". ")+"."),!1;if(tinyMCEPopup.restoreSelection(),e=a.getParent(o.selection.getStart(),"tr"),t=a.getParent(o.selection.getStart(),"table"),a.select("td.mceSelected,th.mceSelected",e).length>0)return tinymce.each(t.rows,function(e){var t;for(t=0;t<e.cells.length;t++)if(a.hasClass(e.cells[t],"mceSelected"))return void updateRow(e,!0)}),o.addVisual(),o.nodeChanged(),o.execCommand("mceEndUndoLevel"),void tinyMCEPopup.close();switch(r){case"row":updateRow(e);break;case"all":for(var i=t.getElementsByTagName("tr"),n=0;n<i.length;n++)updateRow(i[n],!0);break;case"odd":case"even":for(var i=t.getElementsByTagName("tr"),n=0;n<i.length;n++)(n%2==0&&"odd"==r||n%2!=0&&"even"==r)&&updateRow(i[n],!0,!0)}o.addVisual(),o.nodeChanged(),o.execCommand("mceEndUndoLevel"),tinyMCEPopup.close()}function updateRow(e,t,o){var a=tinyMCEPopup.editor,l=document.forms[0],r=a.dom,i=e.parentNode.nodeName.toLowerCase(),n=getSelectValue(l,"rowtype"),c=a.getDoc();if(t||r.setAttrib(e,"id",l.id.value),r.setAttrib(e,"align",getSelectValue(l,"align")),r.setAttrib(e,"vAlign",getSelectValue(l,"valign")),r.setAttrib(e,"lang",l.lang.value),r.setAttrib(e,"dir",getSelectValue(l,"dir")),r.setAttrib(e,"style",r.serializeStyle(r.parseStyle(l.style.value))),r.setAttrib(e,"class",getSelectValue(l,"class")),r.setAttrib(e,"background",""),r.setAttrib(e,"bgColor",""),r.setAttrib(e,"height",""),e.style.height=getCSSSize(l.height.value),e.style.backgroundColor=l.bgcolor.value,""!=l.backgroundimage.value?e.style.backgroundImage="url('"+l.backgroundimage.value+"')":e.style.backgroundImage="",i!=n&&!o){for(var d=e.cloneNode(1),g=r.getParent(e,"table"),s=n,u=null,m=0;m<g.childNodes.length;m++)g.childNodes[m].nodeName.toLowerCase()==s&&(u=g.childNodes[m]);null==u&&(u=c.createElement(s),"CAPTION"==g.firstChild.nodeName?a.dom.insertAfter(u,g.firstChild):g.insertBefore(u,g.firstChild)),u.appendChild(d),e.parentNode.removeChild(e),e=d}r.setAttrib(e,"style",r.serializeStyle(r.parseStyle(e.style.cssText)))}function changedBackgroundImage(){var e=document.forms[0],t=tinyMCEPopup.editor.dom,o=t.parseStyle(e.style.value);o["background-image"]="url('"+e.backgroundimage.value+"')",e.style.value=t.serializeStyle(o)}function changedStyle(){var e=document.forms[0],t=tinyMCEPopup.editor.dom,o=t.parseStyle(e.style.value);o["background-image"]?e.backgroundimage.value=o["background-image"].replace(new RegExp("url\\('?([^']*)'?\\)","gi"),"$1"):e.backgroundimage.value="",o.height&&(e.height.value=trimSize(o.height)),o["background-color"]&&(e.bgcolor.value=o["background-color"],updateColor("bgcolor_pick","bgcolor"))}function changedSize(){var e=document.forms[0],t=tinyMCEPopup.editor.dom,o=t.parseStyle(e.style.value),a=e.height.value;""!=a?o.height=getCSSSize(a):o.height="",e.style.value=t.serializeStyle(o)}function changedColor(){var e=document.forms[0],t=tinyMCEPopup.editor.dom,o=t.parseStyle(e.style.value);o["background-color"]=e.bgcolor.value,e.style.value=t.serializeStyle(o)}function changedRowType(){var e=document.forms[0],t=getSelectValue(e,"rowtype");setActionforRowType(e,t)}function setActionforRowType(e,t){"tbody"===t?e.action.disabled=!1:(selectByValue(e,"action","row"),e.action.disabled=!0)}tinyMCEPopup.requireLangPack(),tinyMCEPopup.onInit.add(init);