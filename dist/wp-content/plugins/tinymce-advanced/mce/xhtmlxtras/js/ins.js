function init(){SXE.initElementDialog("ins"),"update"==SXE.currentAction&&(setFormValue("datetime",tinyMCEPopup.editor.dom.getAttrib(SXE.updateElement,"datetime")),setFormValue("cite",tinyMCEPopup.editor.dom.getAttrib(SXE.updateElement,"cite")),SXE.showRemoveButton())}function setElementAttribs(t){setAllCommonAttribs(t),setAttrib(t,"datetime"),setAttrib(t,"cite"),t.removeAttribute("data-mce-new")}function insertIns(){var t=tinyMCEPopup.editor.dom.getParent(SXE.focusElement,"INS");if(null==t){var e=SXE.inst.selection.getContent();if(e.length>0){insertInlineElement("ins");for(var n=SXE.inst.dom.select("ins[data-mce-new]"),i=0;i<n.length;i++){var t=n[i];setElementAttribs(t)}}}else setElementAttribs(t);tinyMCEPopup.editor.nodeChanged(),tinyMCEPopup.execCommand("mceEndUndoLevel"),tinyMCEPopup.close()}function removeIns(){SXE.removeElement("ins"),tinyMCEPopup.close()}tinyMCEPopup.onInit.add(init);