!function(){var e,a,l=document.getElementById("access");return l&&(e=l.getElementsByTagName("h3")[0],a=l.getElementsByTagName("ul")[0],e)?a&&a.childNodes.length?void(e.onclick=function(){-1===a.className.indexOf("nav-menu")&&(a.className="nav-menu"),-1!==e.className.indexOf("toggled-on")?(e.className=e.className.replace(" toggled-on",""),a.className=a.className.replace(" toggled-on","")):(e.className+=" toggled-on",a.className+=" toggled-on")}):void(e.style.display="none"):void 0}();