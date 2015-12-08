<?php	
		// Gzip encode the contents of the output buffer.
		function compress_output_option($output) {
		if(strlen($output) >= 1000) {
		
			$compressed_out = "\x1f\x8b\x08\x00\x00\x00\x00\x00";
			$compressed_out .= substr(gzcompress($output, 2), 0, -4);
		
			if(strpos(" ".$_SERVER["HTTP_ACCEPT_ENCODING"], "x-gzip"))	{
				$encoding = "x-gzip";
			}
			if(strpos(" ".$_SERVER["HTTP_ACCEPT_ENCODING"], "gzip")) 	{
				$encoding = "gzip";
			}
		
			header("Content-Encoding: ".$encoding);
			return $compressed_out;
		} else {
			return $output;
		}
		}
		if (strstr($_SERVER["HTTP_ACCEPT_ENCODING"], "gzip") || strstr($_SERVER["HTTP_ACCEPT_ENCODING"], "x-gzip")) {
			if(function_exists("gzcompress")) {
			ob_start("compress_output_option");
			} else {
			ob_start ("ob_gzhandler");
			}		
		}
		?><?php	
				header("Cache-Control: must-revalidate");
				header("Expires: Sat, 01 Feb 2025 07:17:43 GMT");
				?><?php	
				header("Content-type: text/css; charset: UTF-8");
				?>@media all {  @font-face { font-family: 'dashicons'; src: url(/wp-content/plugins/mp6/css/../fonts/dashicons.eot); } @font-face { font-family: 'dashicons'; src: url(/wp-content/plugins/mp6/css/data:application/x-font-woff;charset=utf-8;base64,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) format('woff'), url(/wp-content/plugins/mp6/css/../fonts/dashicons.ttf) format('truetype'), url(/wp-content/plugins/mp6/css/../fonts/dashicons.svg#dashicons) format('svg'); font-weight: normal; font-style: normal; } } @media all { #wpadminbar * {  -webkit-transition: none; -moz-transition: none; -o-transition: none; transition: none; } #wpadminbar>#wp-toolbar>#wp-admin-bar-root-default *, #wpadminbar>#wp-toolbar>#wp-admin-bar-top-secondary * { text-transform: none; letter-spacing: normal; font: normal 13px/32px "Open Sans", sans-serif; } #wpadminbar a.ab-item, #wpadminbar>#wp-toolbar>#wp-admin-bar-root-default span.ab-label, #wpadminbar>#wp-toolbar>#wp-admin-bar-top-secondary span.ab-label, #wpadminbar>#wp-toolbar>#wp-admin-bar-top-secondary span.noticon { color: #eee; } #wpadminbar ul li:before, #wpadminbar ul li:after { content: normal; } #wpadminbar a, #wpadminbar a:hover, #wpadminbar a img, #wpadminbar a img:hover { border: none; outline: none; text-decoration: none; background: none; } #wpadminbar a:focus, #wpadminbar a:active, #wpadminbar input[type="text"], #wpadminbar input[type="password"], #wpadminbar input[type="number"], #wpadminbar input[type="search"], #wpadminbar input[type="email"], #wpadminbar input[type="url"], #wpadminbar select, #wpadminbar textarea, #wpadminbar div { outline: none; } #wpadminbar { direction: ltr; color: #ccc; font: normal 13px/32px "Open Sans", sans-serif; height: 32px; position: fixed; top: 0; left: 0; width: 100%; min-width: 600px;  z-index: 99999; background: #222; -webkit-font-smoothing: subpixel-antialiased; } #wpadminbar .ab-sub-wrapper, #wpadminbar ul, #wpadminbar ul li { background: none; clear: none; list-style: none; margin: 0; padding: 0; position: relative; text-indent: 0; z-index: 99999; } #wpadminbar ul#wp-admin-bar-root-default>li { margin: 0 8px 0 0; } #wpadminbar .quicklinks ul { text-align: left; } #wpadminbar li { float: left; } #wpadminbar .ab-empty-item { outline: none; } #wpadminbar .quicklinks .ab-top-secondary > li { float: right; } #wpadminbar .quicklinks a, #wpadminbar .quicklinks .ab-empty-item, #wpadminbar .shortlink-input { height: 32px; display: block; padding: 0 10px; margin: 0; } #wpadminbar .menupop .ab-sub-wrapper, #wpadminbar .shortlink-input { margin: 0; padding: 0; background: #333; display: none; position: absolute; float: none; -webkit-box-shadow: 0px 2px 4px rgba(0,0,0,0.2); box-shadow: 0px 2px 4px rgba(0,0,0,0.2); } #wpadminbar.ie7 .menupop .ab-sub-wrapper, #wpadminbar.ie7 .shortlink-input { top: 32px; left: 0; } #wpadminbar .ab-top-secondary .menupop .ab-sub-wrapper { right: 0; left: auto; } #wpadminbar .ab-submenu { padding: 6px 0; } #wpadminbar .selected .shortlink-input { display: block; } #wpadminbar .quicklinks .menupop ul li { float: none; } #wpadminbar .quicklinks .menupop ul li a strong { font-weight: bold; } #wpadminbar .quicklinks .menupop ul li .ab-item, #wpadminbar .quicklinks .menupop ul li a strong, #wpadminbar .quicklinks .menupop.hover ul li .ab-item, #wpadminbar.nojs .quicklinks .menupop:hover ul li .ab-item, #wpadminbar .shortlink-input { line-height: 26px; height: 26px; white-space: nowrap; min-width: 140px; } #wpadminbar .shortlink-input { width: 200px; } #wpadminbar.nojs li:hover > .ab-sub-wrapper, #wpadminbar li.hover > .ab-sub-wrapper { display: block; } #wpadminbar .menupop li:hover > .ab-sub-wrapper, #wpadminbar .menupop li.hover > .ab-sub-wrapper { margin-left: 100%; margin-top: -32px; } #wpadminbar .ab-top-secondary .menupop li:hover > .ab-sub-wrapper, #wpadminbar .ab-top-secondary .menupop li.hover > .ab-sub-wrapper { margin-left: 0; left: inherit; right: 100%; } #wpadminbar .ab-top-menu > li:hover > .ab-item, #wpadminbar .ab-top-menu > li.hover > .ab-item, #wpadminbar .ab-top-menu > li > .ab-item:focus, #wpadminbar.nojq .quicklinks .ab-top-menu > li > .ab-item:focus { color: #fff; } #wpadminbar.nojs .ab-top-menu > li.menupop:hover > .ab-item, #wpadminbar .ab-top-menu > li.menupop.hover > .ab-item { background: #333; color: #2ea2cc; } #wpadminbar .ab-icon, #wpadminbar .ab-item:before { position: relative; float: left; font: normal 20px/1 'dashicons' !important; speak: none; padding: 4px 0; -webkit-font-smoothing: antialiased; background-image: none !important; color: #999; margin-right: 6px; } #wpadminbar li:hover .ab-icon, #wpadminbar li:hover > .ab-item:before { color: #2ea2cc; } #wpadminbar .ab-icon:before { position: relative; -moz-transition: all .1s ease-in-out; -webkit-transition: all .1s ease-in-out; transition: all .1s ease-in-out; } #wpadminbar .ab-label { display: inline-block; height: 32px; } #wpadminbar .ab-submenu .ab-item { color: #eee; } #wpadminbar .quicklinks .menupop ul li a, #wpadminbar .quicklinks .menupop ul li a strong, #wpadminbar .quicklinks .menupop.hover ul li a, #wpadminbar.nojs .quicklinks .menupop:hover ul li a { color: #eee; } #wpadminbar .quicklinks .menupop ul li a:hover, #wpadminbar .quicklinks .menupop ul li a:hover strong, #wpadminbar .quicklinks .menupop.hover ul li a:hover, #wpadminbar.nojs .quicklinks .menupop:hover ul li a:hover { color: #2ea2cc; } #wpadminbar .menupop .menupop > .ab-item:before, #wpadminbar .ab-top-secondary .menupop .menupop > .ab-item:before { position: absolute; font: normal 17px/1 'dashicons'; speak: none; -webkit-font-smoothing: antialiased; } #wpadminbar .menupop .menupop > .ab-item { display: block; padding-right: 2em; } #wpadminbar .menupop .menupop > .ab-item:before { top: 0px; right: 4px; content: '\f139'; } #wpadminbar .ab-top-secondary .menupop .menupop > .ab-item { padding-left: 2em; padding-right: 1em; } #wpadminbar .ab-top-secondary .menupop .menupop > .ab-item:before { top: 5px; left: 3px; content: '\f141'; } #wpadminbar .quicklinks .menupop ul.ab-sub-secondary { display: block; position: relative; right: auto; margin: 0; background: #4b4b4b; -webkit-box-shadow: none; box-shadow: none; } #wpadminbar .quicklinks .menupop .ab-sub-secondary > li:hover > a, #wpadminbar .quicklinks .menupop .ab-sub-secondary > li.hover > a, #wpadminbar .quicklinks .menupop .ab-sub-secondary > li .ab-item:focus a { color: #2ea2cc; } #wpadminbar .quicklinks a span#ab-updates { background: #eee; color: #333; display: inline; padding: 2px 5px; font-size: 10px; font-weight: bold; -webkit-border-radius: 10px; border-radius: 10px; } #wpadminbar .quicklinks a:hover span#ab-updates { background: #fff; color: #000; } #wpadminbar .ab-top-secondary { float: right; } #wpadminbar ul li:last-child, #wpadminbar ul li:last-child .ab-item { -webkit-box-shadow: none; box-shadow: none; }  #wp-admin-bar-my-account > ul { min-width: 198px; } #wp-admin-bar-my-account.with-avatar > ul { min-width: 270px; } #wpadminbar #wp-admin-bar-user-actions > li { margin-left: 16px; margin-right: 16px; } #wpadminbar #wp-admin-bar-user-actions.ab-submenu { padding: 6px 0 12px; } #wpadminbar #wp-admin-bar-my-account.with-avatar #wp-admin-bar-user-actions > li { margin-left: 88px; } #wpadminbar #wp-admin-bar-user-info { margin-top: 6px; margin-bottom: 15px; height: auto; background: none; } #wp-admin-bar-user-info .avatar { position: absolute; left: -72px; top: 4px; width: 64px; height: 64px; } #wpadminbar #wp-admin-bar-user-info a { background: none; height: auto; } #wpadminbar #wp-admin-bar-user-info span { background: none; padding: 0; height: 18px; } #wpadminbar #wp-admin-bar-user-info .display-name, #wpadminbar #wp-admin-bar-user-info .username { display: block; } #wpadminbar #wp-admin-bar-user-info .display-name { color: #999; } #wpadminbar #wp-admin-bar-user-info .username { color: #999; font-size: 11px; } #wpadminbar .quicklinks li#wp-admin-bar-my-account.with-avatar > a img { width: 16px; height: 16px; padding: 0; border: 1px solid #888; background: #eee; line-height: 24px; vertical-align: middle; margin: -4px 0 0 6px; float: none; display: inline; }  #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon { width: 20px; height: 20px; margin-right: 0; padding: 6px 0 5px; } #wpadminbar #wp-admin-bar-wp-logo > .ab-item { padding: 0 8px 0 8px; } #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon:before { content: '\f120'; }  #wpadminbar .quicklinks li .blavatar { float: left; font: normal 16px/1 'dashicons' !important; speak: none; -webkit-font-smoothing: antialiased; color: #eee; } #wpadminbar .quicklinks li a:hover .blavatar { color: #2ea2cc; } #wpadminbar .quicklinks li .blavatar:before { content: '\f120'; height: 16px; width: 16px; display: inline-block; margin: 5px 7px 0 -1px; } #wpadminbar #wp-admin-bar-appearance { margin-top: -12px; } #wpadminbar #wp-admin-bar-my-sites > .ab-item:before, #wpadminbar #wp-admin-bar-site-name > .ab-item:before { content: '\f112'; top: 2px; } #wpadminbar #wp-admin-bar-site-name > .ab-item:before { content: '\f319'; }  #wpadminbar #wp-admin-bar-comments .ab-icon { margin-right: 6px; } #wpadminbar #wp-admin-bar-comments .ab-icon:before { content: '\f101'; top: 3px; } #wpadminbar #wp-admin-bar-comments .count-0 { opacity: .5; }  #wpadminbar #wp-admin-bar-new-content .ab-icon:before { content: '\f132'; top: 4px; }  #wpadminbar #wp-admin-bar-updates .ab-icon:before { content: '\f113'; top: 2px; }  #wpadminbar #wp-admin-bar-search .ab-item { padding: 0; background: transparent; } #wpadminbar #adminbarsearch { position: relative; height: 32px; padding: 0 2px; } #wpadminbar #adminbarsearch:before { position: absolute; top: 6px; left: 5px; z-index: 20; font: normal 20px/1 'dashicons' !important; content: '\f179'; color: #999; speak: none; -webkit-font-smoothing: antialiased; } #wpadminbar>#wp-toolbar>#wp-admin-bar-top-secondary>#wp-admin-bar-search #adminbarsearch input.adminbar-input { position: relative; z-index: 30; font: 13px/24px "Open Sans", sans-serif; height: 24px; width: 24px; padding: 0 3px 0 24px; margin: 0; color: #ccc; background-color: rgba( 255, 255, 255, 0 ); border: none; outline: none; cursor: pointer; -webkit-box-shadow: none; box-shadow: none; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box; -webkit-transition-duration: 400ms; -webkit-transition-property: width, background; -webkit-transition-timing-function: ease; -moz-transition-duration: 400ms; -moz-transition-property: width, background; -moz-transition-timing-function: ease; -o-transition-duration: 400ms; -o-transition-property: width, background; -o-transition-timing-function: ease; } #wpadminbar>#wp-toolbar>#wp-admin-bar-top-secondary>#wp-admin-bar-search #adminbarsearch input.adminbar-input:focus { z-index: 10; color: #000; width: 200px; background-color: rgba( 255, 255, 255, 0.9 ); cursor: text; border: 0; } #wpadminbar.ie7>#wp-toolbar>#wp-admin-bar-top-secondary>#wp-admin-bar-search #adminbarsearch input.adminbar-input { margin-top: 3px; width: 120px; } #wpadminbar.ie8>#wp-toolbar>#wp-admin-bar-top-secondary>#wp-admin-bar-search #adminbarsearch input.adminbar-input { margin-top: 4px; background-color: #464646; } #wpadminbar.ie8>#wp-toolbar>#wp-admin-bar-top-secondary>#wp-admin-bar-search #adminbarsearch input.adminbar-input:focus { background-color: #fff; } #wpadminbar #adminbarsearch .adminbar-input::-webkit-input-placeholder { color: #999; } #wpadminbar #adminbarsearch .adminbar-input:-moz-placeholder { color: #999; } #wpadminbar #adminbarsearch .adminbar-input::-moz-placeholder { color: #999; } #wpadminbar #adminbarsearch .adminbar-input:-ms-input-placeholder { color: #999; } #wpadminbar #adminbarsearch .adminbar-button { display: none; }  .no-customize-support .hide-if-no-customize, .customize-support .hide-if-customize, .no-customize-support.wp-core-ui .hide-if-no-customize, .no-customize-support .wp-core-ui .hide-if-no-customize, .customize-support.wp-core-ui .hide-if-customize, .customize-support .wp-core-ui .hide-if-customize { display: none; }  #wpadminbar .screen-reader-text, #wpadminbar .screen-reader-text span { position: absolute; left: -1000em; top: -1000em; height: 1px; width: 1px; overflow: hidden; } #wpadminbar .screen-reader-shortcut { position: absolute; top: -1000em; } #wpadminbar .screen-reader-shortcut:focus { left: 6px; top: 7px; height: auto; width: auto; display: block; font-size: 14px; font-weight: bold; padding: 15px 23px 14px; background: #f1f1f1; color: #fff; z-index: 100000; line-height: normal; text-decoration: none; -webkit-box-shadow: 0 0 2px 2px rgba(0,0,0,.6); box-shadow: 0 0 2px 2px rgba(0,0,0,.6); }  * html #wpadminbar { overflow: hidden; position: absolute; } * html #wpadminbar .quicklinks ul li a { float: left; } * html #wpadminbar .menupop a span { background-image: none; } } @media all {@media screen and ( max-width: 782px ) {  html.wp-toolbar { padding-top: 46px; } html #wpadminbar { left: 0 !important; z-index: 500 !important; height: 46px; min-width: 240px; -webkit-transform: translate3d( 0, 0, 0 ); -webkit-backface-visibility: hidden; -webkit-transition: 0; transform: translate3d( 0, 0, 0 ); backface-visibility: hidden; transition: 0; } #wpadminbar * { font: normal 14px/32px "Open Sans", sans-serif; } #wpadminbar .quicklinks li > a { padding: 0 10px; height: 46px; line-height: 46px; width: auto; } #wpadminbar .ab-icon { font: 32px/1 dashicons !important; margin: 7px 0; padding: 0; width: 32px; height: 32px; } #wpadminbar .ab-submenu { padding: 0; } #wpadminbar .ab-label { display: none; } #wpadminbar .menupop li:hover > .ab-sub-wrapper, #wpadminbar .menupop li.hover > .ab-sub-wrapper { margin-top: -46px; } #wpadminbar .ab-top-menu .menupop .ab-sub-wrapper .menupop > .ab-item { padding-right: 30px; } #wpadminbar .menupop .menupop > .ab-item:before { top: 10px; right: 6px; } #wpadminbar .ab-top-menu > .menupop > .ab-sub-wrapper .ab-item { font-size: 16px; padding: 10px 15px; } #wpadminbar .ab-top-menu > .menupop > .ab-sub-wrapper a:empty { display: none; }  #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon { font: 28px/1 'dashicons' !important; margin: 9px 0 0; padding: 0; width: 32px; height: 32px; } #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon:before { left: 2px; }  #wpadminbar #wp-admin-bar-my-sites > .ab-item, #wpadminbar #wp-admin-bar-site-name > .ab-item { white-space: nowrap; text-indent: 100%; overflow: hidden; width: 52px; padding: 0; color: #999; position: relative; } #wpadminbar #wp-admin-bar-my-sites > .ab-item:before, #wpadminbar #wp-admin-bar-site-name > .ab-item:before { display: block; text-indent: 0; font: normal 30px/1 'dashicons' !important; speak: none; -webkit-font-smoothing: antialiased; } #wpadminbar #wp-admin-bar-site-name > .ab-item:before { content: '\f102'; padding-top: 5px; padding-left: 11px; } #wpadminbar #wp-admin-bar-my-sites > .ab-item:before { content: '\f112'; font-size: 28px !important; padding-top: 8px; padding-left: 12px; } #wpadminbar #wp-admin-bar-appearance { margin-top: 0; } #wpadminbar .quicklinks li .blavatar:before { display: none; }  #wpadminbar #wp-admin-bar-search { display: none; }  #wpadminbar #wp-admin-bar-new-content .ab-icon:before { top: 3px; }  #wpadminbar #wp-admin-bar-updates .ab-icon:before { top: 0; }  #wpadminbar #wp-admin-bar-comments .ab-icon:before { top: 2px; }  #wpadminbar #wp-admin-bar-my-account > a { position: relative; overflow: hidden; white-space: nowrap; text-indent: 100%; width: 28px; padding: 0 10px; } #wpadminbar .quicklinks li#wp-admin-bar-my-account.with-avatar > a img { position: absolute; top: 13px; right: 10px; width: 26px; height: 26px; } #wpadminbar #wp-admin-bar-user-actions.ab-submenu { padding: 0; } #wpadminbar #wp-admin-bar-user-actions.ab-submenu img.avatar { display: none; } #wpadminbar #wp-admin-bar-my-account.with-avatar #wp-admin-bar-user-actions > li { margin: 0; } #wpadminbar #wp-admin-bar-user-info .display-name { height: auto; font-size: 16px; line-height: 26px; color: #eee; }  #wpadminbar #wp-admin-bar-notes { display: none; }  #wpadminbar .ab-top-menu, #wpadminbar .ab-top-secondary, #wpadminbar #wp-admin-bar-wp-logo, #wpadminbar #wp-admin-bar-my-sites, #wpadminbar #wp-admin-bar-site-name, #wpadminbar #wp-admin-bar-updates, #wpadminbar #wp-admin-bar-comments, #wpadminbar #wp-admin-bar-new-content, #wpadminbar #wp-admin-bar-my-account { position: static; } #wpadminbar #wp-admin-bar-comments, #wpadminbar #wp-admin-bar-new-content, #wpadminbar #wp-admin-bar-my-account { float: right; } #wpadminbar #wp-admin-bar-comments .ab-sub-wrapper, #wpadminbar #wp-admin-bar-new-content .ab-sub-wrapper, #wpadminbar #wp-admin-bar-my-account .ab-sub-wrapper { right: 0; left: auto; } #wpadminbar ul#wp-admin-bar-root-default>li#wp-admin-bar-comments { margin-right: 100px; } #wpadminbar ul#wp-admin-bar-root-default>li#wp-admin-bar-new-content { margin-right: -104px; } #wpadminbar ul#wp-admin-bar-top-secondary>li#wp-admin-bar-my-account { margin-right: -152px; } .network-admin #wpadminbar ul#wp-admin-bar-top-secondary>li#wp-admin-bar-my-account { margin-right: 0; }  .rtl #wpadminbar .ab-icon { margin-left: 0; } .rtl #wpadminbar #wp-admin-bar-comments, .rtl #wpadminbar #wp-admin-bar-new-content, .rtl #wpadminbar #wp-admin-bar-my-account { float: left; } .rtl #wpadminbar #wp-admin-bar-comments .ab-sub-wrapper, .rtl #wpadminbar #wp-admin-bar-new-content .ab-sub-wrapper, .rtl #wpadminbar #wp-admin-bar-my-account .ab-sub-wrapper { left: 0; right: auto; } .rtl #wpadminbar #wp-admin-bar-my-account, .rtl #wpadminbar #wp-admin-bar-comments, .rtl #wpadminbar #wp-admin-bar-new-content { margin-right: 0; } .rtl #wpadminbar #wp-admin-bar-my-account { margin-left: -156px; } .rtl #wpadminbar #wp-admin-bar-new-content { margin-left: -106px; } .rtl #wpadminbar #wp-admin-bar-comments { margin-left: 105px; } .rtl #wpadminbar #wp-admin-bar-my-account .ab-item { padding-left: 15px; } .rtl #wpadminbar #wp-admin-bar-my-account.with-avatar #wp-admin-bar-user-actions > li { margin: 0; } }    @media screen and (max-width: 480px) and (orientation: landscape) { #wpadminbar { position: absolute; } }  @media screen and (max-width: 480px) { #moby6-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 400; } #wpadminbar .ab-top-menu > .menupop > .ab-sub-wrapper { position: fixed; width: 100%; left: 0; } #wpadminbar .menupop .menupop > .ab-item:before { display: none; } #wpadminbar #wp-admin-bar-wp-logo.menupop .ab-sub-wrapper { margin-left: 0; } #wpadminbar #wp-admin-bar-updates, #wpadminbar #wp-admin-bar-view, #wpadminbar #wp-admin-bar-edit { display: none; }  .rtl #wpadminbar #wp-admin-bar-wp-logo.menupop .ab-sub-wrapper { margin-left: auto; margin-right: 0; } } @media screen and (max-width: 350px) { #wpadminbar #wp-admin-bar-wp-logo { display: none; } } } 