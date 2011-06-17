// ==UserSc    ript==
// @name xPath
// @namespace http://logiclord.com
// @description generates xpath for a given webpage
// ==/UserScript==

function addJavascript(jsname,pos) {
var th = document.getElementsByTagName(pos)[0];
var s = document.createElement('script');
s.setAttribute('type','text/javascript');
s.setAttribute('src',jsname);
th.appendChild(s);
} 
function addStyle(cssname,pos) {
var th = document.getElementsByTagName(pos)[0];
var s = document.createElement('link');
s.setAttribute('type','text/css');
s.setAttribute('media','screen');
s.setAttribute('href',cssname);
th.appendChild(s);
} 
addJavascript('http://localhost/mmd/js/jquery-1.4.2.min.js','head');
addJavascript('http://localhost/mmd/js/jquery.browser.min.js','head');
addJavascript('http://localhost/mmd/js/xpath_lib.js','head');
addJavascript('http://localhost/mmd/js/xpath.js','head');
addJavascript('http://localhost/mmd/js/inspector.js','head');
addJavascript('http://localhost/mmd/js/config.js','head');
addStyle('http://localhost/mmd/css/style.css','head');

