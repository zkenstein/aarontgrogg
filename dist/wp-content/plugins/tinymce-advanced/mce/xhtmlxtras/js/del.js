function init(){SXE.initElementDialog("del"),"update"==SXE.currentAction&&(setFormValue("datetime",tinyMCEPopup.editor.dom.getAttrib(SXE.updateElement,"datetime")),setFormValue("cite",tinyMCEPopup.editor.dom.getAttrib(SXE.updateElement,"cite")),SXE.showRemoveButton())}function setElementAttribs(e){setAllCommonAttribs(e),setAttrib(e,"datetime"),setAttrib(e,"cite"),e.removeAttribute("data-mce-new")}function insertDel(){var e=tinyMCEPopup.editor.dom.getParent(SXE.focusElement,"DEL");if(null==e){var t=SXE.inst.selection.getContent();if(t.length>0){insertInlineElement("del");for(var n=SXE.inst.dom.select("del[data-mce-new]"),i=0;i<n.length;i++){var e=n[i];setElementAttribs(e)}}}else setElementAttribs(e);tinyMCEPopup.editor.nodeChanged(),tinyMCEPopup.execCommand("mceEndUndoLevel"),tinyMCEPopup.close()}function removeDel(){SXE.removeElement("del"),tinyMCEPopup.close()}tinyMCEPopup.onInit.add(init);