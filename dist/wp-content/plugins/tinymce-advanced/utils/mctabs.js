function MCTabs(){this.settings=[],this.onChange=tinyMCEPopup.editor.windowManager.createInstance("tinymce.util.Dispatcher")}MCTabs.prototype.init=function(t){this.settings=t},MCTabs.prototype.getParam=function(t,e){var n=null;return n="undefined"==typeof this.settings[t]?e:this.settings[t],"true"==n||"false"==n?"true"==n:n},MCTabs.prototype.showTab=function(t){t.className="current",t.setAttribute("aria-selected",!0),t.setAttribute("aria-expanded",!0),t.tabIndex=0},MCTabs.prototype.hideTab=function(t){t.className="",t.setAttribute("aria-selected",!1),t.setAttribute("aria-expanded",!1),t.tabIndex=-1},MCTabs.prototype.showPanel=function(t){t.className="current",t.setAttribute("aria-hidden",!1)},MCTabs.prototype.hidePanel=function(t){t.className="panel",t.setAttribute("aria-hidden",!0)},MCTabs.prototype.getPanelForTab=function(t){return tinyMCEPopup.dom.getAttrib(t,"aria-controls")},MCTabs.prototype.displayTab=function(t,e,n){var a,i,o,s,r,c,d,u=this;if(o=document.getElementById(t),void 0===e&&(e=u.getPanelForTab(o)),a=document.getElementById(e),i=a?a.parentNode:null,s=o?o.parentNode:null,r=u.getParam("selection_class","current"),o&&s){for(c=s.childNodes,d=0;d<c.length;d++)"LI"==c[d].nodeName&&u.hideTab(c[d]);u.showTab(o)}if(a&&i){for(c=i.childNodes,d=0;d<c.length;d++)"DIV"==c[d].nodeName&&u.hidePanel(c[d]);n||o.focus(),u.showPanel(a)}},MCTabs.prototype.getAnchor=function(){var t,e=document.location.href;return-1!=(t=e.lastIndexOf("#"))?e.substring(t+1):""};var mcTabs=new MCTabs;tinyMCEPopup.onInit.add(function(){var t=tinyMCEPopup.getWin().tinymce,e=tinyMCEPopup.dom,n=t.each;n(e.select("div.tabs"),function(a){var i;e.setAttrib(a,"role","tablist");var o=tinyMCEPopup.dom.select("li",a),s=function(t){mcTabs.displayTab(t,mcTabs.getPanelForTab(t)),mcTabs.onChange.dispatch(t)};n(o,function(t){e.setAttrib(t,"role","tab"),e.bind(t,"click",function(e){s(t.id)})}),e.bind(e.getRoot(),"keydown",function(e){9===e.keyCode&&e.ctrlKey&&!e.altKey&&(i.moveFocus(e.shiftKey?-1:1),t.dom.Event.cancel(e))}),n(e.select("a",a),function(t){e.setAttrib(t,"tabindex","-1")}),i=tinyMCEPopup.editor.windowManager.createInstance("tinymce.ui.KeyboardNavigation",{root:a,items:o,onAction:s,actOnFocus:!0,enableLeftRight:!0,enableUpDown:!0},tinyMCEPopup.dom)})});