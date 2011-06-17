(function(_1,_2){
var _3=_1.document;
var _4=(function(){
var _5=function(_6,_7){
return new _5.fn.init(_6,_7,_8);
},_9=_1.jQuery,_$=_1.$,_8,_b=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,_c=/\S/,_d=/^\s+/,_e=/\s+$/,_f=/\d/,_10=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,_11=/^[\],:{}\s]*$/,_12=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,_13=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,_14=/(?:^|:|,)(?:\s*\[)+/g,_15=/(webkit)[ \/]([\w.]+)/,_16=/(opera)(?:.*version)?[ \/]([\w.]+)/,_17=/(msie) ([\w.]+)/,_18=/(mozilla)(?:.*? rv:([\w.]+))?/,_19=navigator.userAgent,_1a,_1b=false,_1c,_1d="then done fail isResolved isRejected promise".split(" "),_1e,_1f=Object.prototype.toString,_20=Object.prototype.hasOwnProperty,_21=Array.prototype.push,_22=Array.prototype.slice,_23=String.prototype.trim,_24=Array.prototype.indexOf,_25={};
_5.fn=_5.prototype={constructor:_5,init:function(_26,_27,_28){
var _29,_2a,ret,doc;
if(!_26){
return this;
}
if(_26.nodeType){
this.context=this[0]=_26;
this.length=1;
return this;
}
if(_26==="body"&&!_27&&_3.body){
this.context=_3;
this[0]=_3.body;
this.selector="body";
this.length=1;
return this;
}
if(typeof _26==="string"){
_29=_b.exec(_26);
if(_29&&(_29[1]||!_27)){
if(_29[1]){
_27=_27 instanceof _5?_27[0]:_27;
doc=(_27?_27.ownerDocument||_27:_3);
ret=_10.exec(_26);
if(ret){
if(_5.isPlainObject(_27)){
_26=[_3.createElement(ret[1])];
_5.fn.attr.call(_26,_27,true);
}else{
_26=[doc.createElement(ret[1])];
}
}else{
ret=_5.buildFragment([_29[1]],[doc]);
_26=(ret.cacheable?_5.clone(ret.fragment):ret.fragment).childNodes;
}
return _5.merge(this,_26);
}else{
_2a=_3.getElementById(_29[2]);
if(_2a&&_2a.parentNode){
if(_2a.id!==_29[2]){
return _28.find(_26);
}
this.length=1;
this[0]=_2a;
}
this.context=_3;
this.selector=_26;
return this;
}
}else{
if(!_27||_27.jquery){
return (_27||_28).find(_26);
}else{
return this.constructor(_27).find(_26);
}
}
}else{
if(_5.isFunction(_26)){
return _28.ready(_26);
}
}
if(_26.selector!==_2){
this.selector=_26.selector;
this.context=_26.context;
}
return _5.makeArray(_26,this);
},selector:"",jquery:"1.5.1",length:0,size:function(){
return this.length;
},toArray:function(){
return _22.call(this,0);
},get:function(num){
return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);
},pushStack:function(_2e,_2f,_30){
var ret=this.constructor();
if(_5.isArray(_2e)){
_21.apply(ret,_2e);
}else{
_5.merge(ret,_2e);
}
ret.prevObject=this;
ret.context=this.context;
if(_2f==="find"){
ret.selector=this.selector+(this.selector?" ":"")+_30;
}else{
if(_2f){
ret.selector=this.selector+"."+_2f+"("+_30+")";
}
}
return ret;
},each:function(_32,_33){
return _5.each(this,_32,_33);
},ready:function(fn){
_5.bindReady();
_1c.done(fn);
return this;
},eq:function(i){
return i===-1?this.slice(i):this.slice(i,+i+1);
},first:function(){
return this.eq(0);
},last:function(){
return this.eq(-1);
},slice:function(){
return this.pushStack(_22.apply(this,arguments),"slice",_22.call(arguments).join(","));
},map:function(_36){
return this.pushStack(_5.map(this,function(_37,i){
return _36.call(_37,i,_37);
}));
},end:function(){
return this.prevObject||this.constructor(null);
},push:_21,sort:[].sort,splice:[].splice};
_5.fn.init.prototype=_5.fn;
_5.extend=_5.fn.extend=function(){
var _39,_3a,src,_3c,_3d,_3e,_3f=arguments[0]||{},i=1,_41=arguments.length,_42=false;
if(typeof _3f==="boolean"){
_42=_3f;
_3f=arguments[1]||{};
i=2;
}
if(typeof _3f!=="object"&&!_5.isFunction(_3f)){
_3f={};
}
if(_41===i){
_3f=this;
--i;
}
for(;i<_41;i++){
if((_39=arguments[i])!=null){
for(_3a in _39){
src=_3f[_3a];
_3c=_39[_3a];
if(_3f===_3c){
continue;
}
if(_42&&_3c&&(_5.isPlainObject(_3c)||(_3d=_5.isArray(_3c)))){
if(_3d){
_3d=false;
_3e=src&&_5.isArray(src)?src:[];
}else{
_3e=src&&_5.isPlainObject(src)?src:{};
}
_3f[_3a]=_5.extend(_42,_3e,_3c);
}else{
if(_3c!==_2){
_3f[_3a]=_3c;
}
}
}
}
}
return _3f;
};
_5.extend({noConflict:function(_43){
_1.$=_$;
if(_43){
_1.jQuery=_9;
}
return _5;
},isReady:false,readyWait:1,ready:function(_44){
if(_44===true){
_5.readyWait--;
}
if(!_5.readyWait||(_44!==true&&!_5.isReady)){
if(!_3.body){
return setTimeout(_5.ready,1);
}
_5.isReady=true;
if(_44!==true&&--_5.readyWait>0){
return;
}
_1c.resolveWith(_3,[_5]);
if(_5.fn.trigger){
_5(_3).trigger("ready").unbind("ready");
}
}
},bindReady:function(){
if(_1b){
return;
}
_1b=true;
if(_3.readyState==="complete"){
return setTimeout(_5.ready,1);
}
if(_3.addEventListener){
_3.addEventListener("DOMContentLoaded",_1e,false);
_1.addEventListener("load",_5.ready,false);
}else{
if(_3.attachEvent){
_3.attachEvent("onreadystatechange",_1e);
_1.attachEvent("onload",_5.ready);
var _45=false;
try{
_45=_1.frameElement==null;
}
catch(e){
}
if(_3.documentElement.doScroll&&_45){
doScrollCheck();
}
}
}
},isFunction:function(obj){
return _5.type(obj)==="function";
},isArray:Array.isArray||function(obj){
return _5.type(obj)==="array";
},isWindow:function(obj){
return obj&&typeof obj==="object"&&"setInterval" in obj;
},isNaN:function(obj){
return obj==null||!_f.test(obj)||isNaN(obj);
},type:function(obj){
return obj==null?String(obj):_25[_1f.call(obj)]||"object";
},isPlainObject:function(obj){
if(!obj||_5.type(obj)!=="object"||obj.nodeType||_5.isWindow(obj)){
return false;
}
if(obj.constructor&&!_20.call(obj,"constructor")&&!_20.call(obj.constructor.prototype,"isPrototypeOf")){
return false;
}
var key;
for(key in obj){
}
return key===_2||_20.call(obj,key);
},isEmptyObject:function(obj){
for(var _4e in obj){
return false;
}
return true;
},error:function(msg){
throw msg;
},parseJSON:function(_50){
if(typeof _50!=="string"||!_50){
return null;
}
_50=_5.trim(_50);
if(_11.test(_50.replace(_12,"@").replace(_13,"]").replace(_14,""))){
return _1.JSON&&_1.JSON.parse?_1.JSON.parse(_50):(new Function("return "+_50))();
}else{
_5.error("Invalid JSON: "+_50);
}
},parseXML:function(_51,xml,tmp){
if(_1.DOMParser){
tmp=new DOMParser();
xml=tmp.parseFromString(_51,"text/xml");
}else{
xml=new ActiveXObject("Microsoft.XMLDOM");
xml.async="false";
xml.loadXML(_51);
}
tmp=xml.documentElement;
if(!tmp||!tmp.nodeName||tmp.nodeName==="parsererror"){
_5.error("Invalid XML: "+_51);
}
return xml;
},noop:function(){
},globalEval:function(_54){
if(_54&&_c.test(_54)){
var _55=_3.head||_3.getElementsByTagName("head")[0]||_3.documentElement,_56=_3.createElement("script");
if(_5.support.scriptEval()){
_56.appendChild(_3.createTextNode(_54));
}else{
_56.text=_54;
}
_55.insertBefore(_56,_55.firstChild);
_55.removeChild(_56);
}
},nodeName:function(_57,_58){
return _57.nodeName&&_57.nodeName.toUpperCase()===_58.toUpperCase();
},each:function(_59,_5a,_5b){
var _5c,i=0,_5e=_59.length,_5f=_5e===_2||_5.isFunction(_59);
if(_5b){
if(_5f){
for(_5c in _59){
if(_5a.apply(_59[_5c],_5b)===false){
break;
}
}
}else{
for(;i<_5e;){
if(_5a.apply(_59[i++],_5b)===false){
break;
}
}
}
}else{
if(_5f){
for(_5c in _59){
if(_5a.call(_59[_5c],_5c,_59[_5c])===false){
break;
}
}
}else{
for(var _60=_59[0];i<_5e&&_5a.call(_60,i,_60)!==false;_60=_59[++i]){
}
}
}
return _59;
},trim:_23?function(_61){
return _61==null?"":_23.call(_61);
}:function(_62){
return _62==null?"":_62.toString().replace(_d,"").replace(_e,"");
},makeArray:function(_63,_64){
var ret=_64||[];
if(_63!=null){
var _66=_5.type(_63);
if(_63.length==null||_66==="string"||_66==="function"||_66==="regexp"||_5.isWindow(_63)){
_21.call(ret,_63);
}else{
_5.merge(ret,_63);
}
}
return ret;
},inArray:function(_67,_68){
if(_68.indexOf){
return _68.indexOf(_67);
}
for(var i=0,_6a=_68.length;i<_6a;i++){
if(_68[i]===_67){
return i;
}
}
return -1;
},merge:function(_6b,_6c){
var i=_6b.length,j=0;
if(typeof _6c.length==="number"){
for(var l=_6c.length;j<l;j++){
_6b[i++]=_6c[j];
}
}else{
while(_6c[j]!==_2){
_6b[i++]=_6c[j++];
}
}
_6b.length=i;
return _6b;
},grep:function(_70,_71,inv){
var ret=[],_74;
inv=!!inv;
for(var i=0,_76=_70.length;i<_76;i++){
_74=!!_71(_70[i],i);
if(inv!==_74){
ret.push(_70[i]);
}
}
return ret;
},map:function(_77,_78,arg){
var ret=[],_7b;
for(var i=0,_7d=_77.length;i<_7d;i++){
_7b=_78(_77[i],i,arg);
if(_7b!=null){
ret[ret.length]=_7b;
}
}
return ret.concat.apply([],ret);
},guid:1,proxy:function(fn,_7f,_80){
if(arguments.length===2){
if(typeof _7f==="string"){
_80=fn;
fn=_80[_7f];
_7f=_2;
}else{
if(_7f&&!_5.isFunction(_7f)){
_80=_7f;
_7f=_2;
}
}
}
if(!_7f&&fn){
_7f=function(){
return fn.apply(_80||this,arguments);
};
}
if(fn){
_7f.guid=fn.guid=fn.guid||_7f.guid||_5.guid++;
}
return _7f;
},access:function(_81,key,_83,_84,fn,_86){
var _87=_81.length;
if(typeof key==="object"){
for(var k in key){
_5.access(_81,k,key[k],_84,fn,_83);
}
return _81;
}
if(_83!==_2){
_84=!_86&&_84&&_5.isFunction(_83);
for(var i=0;i<_87;i++){
fn(_81[i],key,_84?_83.call(_81[i],i,fn(_81[i],key)):_83,_86);
}
return _81;
}
return _87?fn(_81[0],key):_2;
},now:function(){
return (new Date()).getTime();
},_Deferred:function(){
var _8a=[],_8b,_8c,_8d,_8e={done:function(){
if(!_8d){
var _8f=arguments,i,_91,_92,_93,_94;
if(_8b){
_94=_8b;
_8b=0;
}
for(i=0,_91=_8f.length;i<_91;i++){
_92=_8f[i];
_93=_5.type(_92);
if(_93==="array"){
_8e.done.apply(_8e,_92);
}else{
if(_93==="function"){
_8a.push(_92);
}
}
}
if(_94){
_8e.resolveWith(_94[0],_94[1]);
}
}
return this;
},resolveWith:function(_95,_96){
if(!_8d&&!_8b&&!_8c){
_8c=1;
try{
while(_8a[0]){
_8a.shift().apply(_95,_96);
}
}
catch(e){
throw e;
}
finally{
_8b=[_95,_96];
_8c=0;
}
}
return this;
},resolve:function(){
_8e.resolveWith(_5.isFunction(this.promise)?this.promise():this,arguments);
return this;
},isResolved:function(){
return !!(_8c||_8b);
},cancel:function(){
_8d=1;
_8a=[];
return this;
}};
return _8e;
},Deferred:function(_97){
var _98=_5._Deferred(),_99=_5._Deferred(),_9a;
_5.extend(_98,{then:function(_9b,_9c){
_98.done(_9b).fail(_9c);
return this;
},fail:_99.done,rejectWith:_99.resolveWith,reject:_99.resolve,isRejected:_99.isResolved,promise:function(obj){
if(obj==null){
if(_9a){
return _9a;
}
_9a=obj={};
}
var i=_1d.length;
while(i--){
obj[_1d[i]]=_98[_1d[i]];
}
return obj;
}});
_98.done(_99.cancel).fail(_98.cancel);
delete _98.cancel;
if(_97){
_97.call(_98,_98);
}
return _98;
},when:function(_9f){
var _a0=arguments.length,_a1=_a0<=1&&_9f&&_5.isFunction(_9f.promise)?_9f:_5.Deferred(),_a2=_a1.promise();
if(_a0>1){
var _a3=_22.call(arguments,0),_a4=_a0,_a5=function(_a6){
return function(_a7){
_a3[_a6]=arguments.length>1?_22.call(arguments,0):_a7;
if(!(--_a4)){
_a1.resolveWith(_a2,_a3);
}
};
};
while((_a0--)){
_9f=_a3[_a0];
if(_9f&&_5.isFunction(_9f.promise)){
_9f.promise().then(_a5(_a0),_a1.reject);
}else{
--_a4;
}
}
if(!_a4){
_a1.resolveWith(_a2,_a3);
}
}else{
if(_a1!==_9f){
_a1.resolve(_9f);
}
}
return _a2;
},uaMatch:function(ua){
ua=ua.toLowerCase();
var _a9=_15.exec(ua)||_16.exec(ua)||_17.exec(ua)||ua.indexOf("compatible")<0&&_18.exec(ua)||[];
return {browser:_a9[1]||"",version:_a9[2]||"0"};
},sub:function(){
function jQuerySubclass(_aa,_ab){
return new jQuerySubclass.fn.init(_aa,_ab);
};
_5.extend(true,jQuerySubclass,this);
jQuerySubclass.superclass=this;
jQuerySubclass.fn=jQuerySubclass.prototype=this();
jQuerySubclass.fn.constructor=jQuerySubclass;
jQuerySubclass.subclass=this.subclass;
jQuerySubclass.fn.init=function init(_ac,_ad){
if(_ad&&_ad instanceof _5&&!(_ad instanceof jQuerySubclass)){
_ad=jQuerySubclass(_ad);
}
return _5.fn.init.call(this,_ac,_ad,_ae);
};
jQuerySubclass.fn.init.prototype=jQuerySubclass.fn;
var _ae=jQuerySubclass(_3);
return jQuerySubclass;
},browser:{}});
_1c=_5._Deferred();
_5.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,_b0){
_25["[object "+_b0+"]"]=_b0.toLowerCase();
});
_1a=_5.uaMatch(_19);
if(_1a.browser){
_5.browser[_1a.browser]=true;
_5.browser.version=_1a.version;
}
if(_5.browser.webkit){
_5.browser.safari=true;
}
if(_24){
_5.inArray=function(_b1,_b2){
return _24.call(_b2,_b1);
};
}
if(_c.test(" ")){
_d=/^[\s\xA0]+/;
_e=/[\s\xA0]+$/;
}
_8=_5(_3);
if(_3.addEventListener){
_1e=function(){
_3.removeEventListener("DOMContentLoaded",_1e,false);
_5.ready();
};
}else{
if(_3.attachEvent){
_1e=function(){
if(_3.readyState==="complete"){
_3.detachEvent("onreadystatechange",_1e);
_5.ready();
}
};
}
}
function doScrollCheck(){
if(_5.isReady){
return;
}
try{
_3.documentElement.doScroll("left");
}
catch(e){
setTimeout(doScrollCheck,1);
return;
}
_5.ready();
};
return _5;
})();
(function(){
_4.support={};
var div=_3.createElement("div");
div.style.display="none";
div.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var all=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0],_b6=_3.createElement("select"),opt=_b6.appendChild(_3.createElement("option")),_b8=div.getElementsByTagName("input")[0];
if(!all||!all.length||!a){
return;
}
_4.support={leadingWhitespace:div.firstChild.nodeType===3,tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:/^0.55$/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:_b8.value==="on",optSelected:opt.selected,deleteExpando:true,optDisabled:false,checkClone:false,noCloneEvent:true,noCloneChecked:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};
_b8.checked=true;
_4.support.noCloneChecked=_b8.cloneNode(true).checked;
_b6.disabled=true;
_4.support.optDisabled=!opt.disabled;
var _b9=null;
_4.support.scriptEval=function(){
if(_b9===null){
var _ba=_3.documentElement,_bb=_3.createElement("script"),id="script"+_4.now();
try{
_bb.appendChild(_3.createTextNode("window."+id+"=1;"));
}
catch(e){
}
_ba.insertBefore(_bb,_ba.firstChild);
if(_1[id]){
_b9=true;
delete _1[id];
}else{
_b9=false;
}
_ba.removeChild(_bb);
_ba=_bb=id=null;
}
return _b9;
};
try{
delete div.test;
}
catch(e){
_4.support.deleteExpando=false;
}
if(!div.addEventListener&&div.attachEvent&&div.fireEvent){
div.attachEvent("onclick",function click(){
_4.support.noCloneEvent=false;
if(typeof (_bd)!=="undefined"){
div.detachEvent("onclick",_bd);
}
});
div.cloneNode(true).fireEvent("onclick");
}
div=_3.createElement("div");
div.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
var _be=_3.createDocumentFragment();
_be.appendChild(div.firstChild);
_4.support.checkClone=_be.cloneNode(true).cloneNode(true).lastChild.checked;
_4(function(){
var div=_3.createElement("div"),_c0=_3.getElementsByTagName("body")[0];
if(!_c0){
return;
}
div.style.width=div.style.paddingLeft="1px";
_c0.appendChild(div);
_4.boxModel=_4.support.boxModel=div.offsetWidth===2;
if("zoom" in div.style){
div.style.display="inline";
div.style.zoom=1;
_4.support.inlineBlockNeedsLayout=div.offsetWidth===2;
div.style.display="";
div.innerHTML="<div style='width:4px;'></div>";
_4.support.shrinkWrapBlocks=div.offsetWidth!==2;
}
div.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
var tds=div.getElementsByTagName("td");
_4.support.reliableHiddenOffsets=tds[0].offsetHeight===0;
tds[0].style.display="";
tds[1].style.display="none";
_4.support.reliableHiddenOffsets=_4.support.reliableHiddenOffsets&&tds[0].offsetHeight===0;
div.innerHTML="";
_c0.removeChild(div).style.display="none";
div=tds=null;
});
var _c2=function(_c3){
var el=_3.createElement("div");
_c3="on"+_c3;
if(!el.attachEvent){
return true;
}
var _c5=(_c3 in el);
if(!_c5){
el.setAttribute(_c3,"return;");
_c5=typeof el[_c3]==="function";
}
el=null;
return _c5;
};
_4.support.submitBubbles=_c2("submit");
_4.support.changeBubbles=_c2("change");
div=all=a=null;
})();
var _c6=/^(?:\{.*\}|\[.*\])$/;
_4.extend({cache:{},uuid:0,expando:"jQuery"+(_4.fn.jquery+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(_c7){
_c7=_c7.nodeType?_4.cache[_c7[_4.expando]]:_c7[_4.expando];
return !!_c7&&!isEmptyDataObject(_c7);
},data:function(_c8,_c9,_ca,pvt){
if(!_4.acceptData(_c8)){
return;
}
var _cc=_4.expando,_cd=typeof _c9==="string",_ce,_cf=_c8.nodeType,_d0=_cf?_4.cache:_c8,id=_cf?_c8[_4.expando]:_c8[_4.expando]&&_4.expando;
if((!id||(pvt&&id&&!_d0[id][_cc]))&&_cd&&_ca===_2){
return;
}
if(!id){
if(_cf){
_c8[_4.expando]=id=++_4.uuid;
}else{
id=_4.expando;
}
}
if(!_d0[id]){
_d0[id]={};
if(!_cf){
_d0[id].toJSON=_4.noop;
}
}
if(typeof _c9==="object"||typeof _c9==="function"){
if(pvt){
_d0[id][_cc]=_4.extend(_d0[id][_cc],_c9);
}else{
_d0[id]=_4.extend(_d0[id],_c9);
}
}
_ce=_d0[id];
if(pvt){
if(!_ce[_cc]){
_ce[_cc]={};
}
_ce=_ce[_cc];
}
if(_ca!==_2){
_ce[_c9]=_ca;
}
if(_c9==="events"&&!_ce[_c9]){
return _ce[_cc]&&_ce[_cc].events;
}
return _cd?_ce[_c9]:_ce;
},removeData:function(_d2,_d3,pvt){
if(!_4.acceptData(_d2)){
return;
}
var _d5=_4.expando,_d6=_d2.nodeType,_d7=_d6?_4.cache:_d2,id=_d6?_d2[_4.expando]:_4.expando;
if(!_d7[id]){
return;
}
if(_d3){
var _d9=pvt?_d7[id][_d5]:_d7[id];
if(_d9){
delete _d9[_d3];
if(!isEmptyDataObject(_d9)){
return;
}
}
}
if(pvt){
delete _d7[id][_d5];
if(!isEmptyDataObject(_d7[id])){
return;
}
}
var _da=_d7[id][_d5];
if(_4.support.deleteExpando||_d7!=_1){
delete _d7[id];
}else{
_d7[id]=null;
}
if(_da){
_d7[id]={};
if(!_d6){
_d7[id].toJSON=_4.noop;
}
_d7[id][_d5]=_da;
}else{
if(_d6){
if(_4.support.deleteExpando){
delete _d2[_4.expando];
}else{
if(_d2.removeAttribute){
_d2.removeAttribute(_4.expando);
}else{
_d2[_4.expando]=null;
}
}
}
}
},_data:function(_db,_dc,_dd){
return _4.data(_db,_dc,_dd,true);
},acceptData:function(_de){
if(_de.nodeName){
var _df=_4.noData[_de.nodeName.toLowerCase()];
if(_df){
return !(_df===true||_de.getAttribute("classid")!==_df);
}
}
return true;
}});
_4.fn.extend({data:function(key,_e1){
var _e2=null;
if(typeof key==="undefined"){
if(this.length){
_e2=_4.data(this[0]);
if(this[0].nodeType===1){
var _e3=this[0].attributes,_e4;
for(var i=0,l=_e3.length;i<l;i++){
_e4=_e3[i].name;
if(_e4.indexOf("data-")===0){
_e4=_e4.substr(5);
dataAttr(this[0],_e4,_e2[_e4]);
}
}
}
}
return _e2;
}else{
if(typeof key==="object"){
return this.each(function(){
_4.data(this,key);
});
}
}
var _e7=key.split(".");
_e7[1]=_e7[1]?"."+_e7[1]:"";
if(_e1===_2){
_e2=this.triggerHandler("getData"+_e7[1]+"!",[_e7[0]]);
if(_e2===_2&&this.length){
_e2=_4.data(this[0],key);
_e2=dataAttr(this[0],key,_e2);
}
return _e2===_2&&_e7[1]?this.data(_e7[0]):_e2;
}else{
return this.each(function(){
var _e8=_4(this),_e9=[_e7[0],_e1];
_e8.triggerHandler("setData"+_e7[1]+"!",_e9);
_4.data(this,key,_e1);
_e8.triggerHandler("changeData"+_e7[1]+"!",_e9);
});
}
},removeData:function(key){
return this.each(function(){
_4.removeData(this,key);
});
}});
function dataAttr(_eb,key,_ed){
if(_ed===_2&&_eb.nodeType===1){
_ed=_eb.getAttribute("data-"+key);
if(typeof _ed==="string"){
try{
_ed=_ed==="true"?true:_ed==="false"?false:_ed==="null"?null:!_4.isNaN(_ed)?parseFloat(_ed):_c6.test(_ed)?_4.parseJSON(_ed):_ed;
}
catch(e){
}
_4.data(_eb,key,_ed);
}else{
_ed=_2;
}
}
return _ed;
};
function isEmptyDataObject(obj){
for(var _ef in obj){
if(_ef!=="toJSON"){
return false;
}
}
return true;
};
_4.extend({queue:function(_f0,_f1,_f2){
if(!_f0){
return;
}
_f1=(_f1||"fx")+"queue";
var q=_4._data(_f0,_f1);
if(!_f2){
return q||[];
}
if(!q||_4.isArray(_f2)){
q=_4._data(_f0,_f1,_4.makeArray(_f2));
}else{
q.push(_f2);
}
return q;
},dequeue:function(_f4,_f5){
_f5=_f5||"fx";
var _f6=_4.queue(_f4,_f5),fn=_f6.shift();
if(fn==="inprogress"){
fn=_f6.shift();
}
if(fn){
if(_f5==="fx"){
_f6.unshift("inprogress");
}
fn.call(_f4,function(){
_4.dequeue(_f4,_f5);
});
}
if(!_f6.length){
_4.removeData(_f4,_f5+"queue",true);
}
}});
_4.fn.extend({queue:function(_f8,_f9){
if(typeof _f8!=="string"){
_f9=_f8;
_f8="fx";
}
if(_f9===_2){
return _4.queue(this[0],_f8);
}
return this.each(function(i){
var _fb=_4.queue(this,_f8,_f9);
if(_f8==="fx"&&_fb[0]!=="inprogress"){
_4.dequeue(this,_f8);
}
});
},dequeue:function(_fc){
return this.each(function(){
_4.dequeue(this,_fc);
});
},delay:function(_fd,_fe){
_fd=_4.fx?_4.fx.speeds[_fd]||_fd:_fd;
_fe=_fe||"fx";
return this.queue(_fe,function(){
var _ff=this;
setTimeout(function(){
_4.dequeue(_ff,_fe);
},_fd);
});
},clearQueue:function(type){
return this.queue(type||"fx",[]);
}});
var _101=/[\n\t\r]/g,_102=/\s+/,_103=/\r/g,_104=/^(?:href|src|style)$/,_105=/^(?:button|input)$/i,_106=/^(?:button|input|object|select|textarea)$/i,_107=/^a(?:rea)?$/i,_108=/^(?:radio|checkbox)$/i;
_4.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
_4.fn.extend({attr:function(name,_10a){
return _4.access(this,name,_10a,true,_4.attr);
},removeAttr:function(name,fn){
return this.each(function(){
_4.attr(this,name,"");
if(this.nodeType===1){
this.removeAttribute(name);
}
});
},addClass:function(_10d){
if(_4.isFunction(_10d)){
return this.each(function(i){
var self=_4(this);
self.addClass(_10d.call(this,i,self.attr("class")));
});
}
if(_10d&&typeof _10d==="string"){
var _110=(_10d||"").split(_102);
for(var i=0,l=this.length;i<l;i++){
var elem=this[i];
if(elem.nodeType===1){
if(!elem.className){
elem.className=_10d;
}else{
var _114=" "+elem.className+" ",_115=elem.className;
for(var c=0,cl=_110.length;c<cl;c++){
if(_114.indexOf(" "+_110[c]+" ")<0){
_115+=" "+_110[c];
}
}
elem.className=_4.trim(_115);
}
}
}
}
return this;
},removeClass:function(_118){
if(_4.isFunction(_118)){
return this.each(function(i){
var self=_4(this);
self.removeClass(_118.call(this,i,self.attr("class")));
});
}
if((_118&&typeof _118==="string")||_118===_2){
var _11b=(_118||"").split(_102);
for(var i=0,l=this.length;i<l;i++){
var elem=this[i];
if(elem.nodeType===1&&elem.className){
if(_118){
var _11f=(" "+elem.className+" ").replace(_101," ");
for(var c=0,cl=_11b.length;c<cl;c++){
_11f=_11f.replace(" "+_11b[c]+" "," ");
}
elem.className=_4.trim(_11f);
}else{
elem.className="";
}
}
}
}
return this;
},toggleClass:function(_122,_123){
var type=typeof _122,_125=typeof _123==="boolean";
if(_4.isFunction(_122)){
return this.each(function(i){
var self=_4(this);
self.toggleClass(_122.call(this,i,self.attr("class"),_123),_123);
});
}
return this.each(function(){
if(type==="string"){
var _128,i=0,self=_4(this),_12b=_123,_12c=_122.split(_102);
while((_128=_12c[i++])){
_12b=_125?_12b:!self.hasClass(_128);
self[_12b?"addClass":"removeClass"](_128);
}
}else{
if(type==="undefined"||type==="boolean"){
if(this.className){
_4._data(this,"__className__",this.className);
}
this.className=this.className||_122===false?"":_4._data(this,"__className__")||"";
}
}
});
},hasClass:function(_12d){
var _12e=" "+_12d+" ";
for(var i=0,l=this.length;i<l;i++){
if((" "+this[i].className+" ").replace(_101," ").indexOf(_12e)>-1){
return true;
}
}
return false;
},val:function(_131){
if(!arguments.length){
var elem=this[0];
if(elem){
if(_4.nodeName(elem,"option")){
var val=elem.attributes.value;
return !val||val.specified?elem.value:elem.text;
}
if(_4.nodeName(elem,"select")){
var _134=elem.selectedIndex,_135=[],_136=elem.options,one=elem.type==="select-one";
if(_134<0){
return null;
}
for(var i=one?_134:0,max=one?_134+1:_136.length;i<max;i++){
var _13a=_136[i];
if(_13a.selected&&(_4.support.optDisabled?!_13a.disabled:_13a.getAttribute("disabled")===null)&&(!_13a.parentNode.disabled||!_4.nodeName(_13a.parentNode,"optgroup"))){
_131=_4(_13a).val();
if(one){
return _131;
}
_135.push(_131);
}
}
if(one&&!_135.length&&_136.length){
return _4(_136[_134]).val();
}
return _135;
}
if(_108.test(elem.type)&&!_4.support.checkOn){
return elem.getAttribute("value")===null?"on":elem.value;
}
return (elem.value||"").replace(_103,"");
}
return _2;
}
var _13b=_4.isFunction(_131);
return this.each(function(i){
var self=_4(this),val=_131;
if(this.nodeType!==1){
return;
}
if(_13b){
val=_131.call(this,i,self.val());
}
if(val==null){
val="";
}else{
if(typeof val==="number"){
val+="";
}else{
if(_4.isArray(val)){
val=_4.map(val,function(_13e){
return _13e==null?"":_13e+"";
});
}
}
}
if(_4.isArray(val)&&_108.test(this.type)){
this.checked=_4.inArray(self.val(),val)>=0;
}else{
if(_4.nodeName(this,"select")){
var _13f=_4.makeArray(val);
_4("option",this).each(function(){
this.selected=_4.inArray(_4(this).val(),_13f)>=0;
});
if(!_13f.length){
this.selectedIndex=-1;
}
}else{
this.value=val;
}
}
});
}});
_4.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(elem,name,_142,pass){
if(!elem||elem.nodeType===3||elem.nodeType===8||elem.nodeType===2){
return _2;
}
if(pass&&name in _4.attrFn){
return _4(elem)[name](_142);
}
var _144=elem.nodeType!==1||!_4.isXMLDoc(elem),set=_142!==_2;
name=_144&&_4.props[name]||name;
if(elem.nodeType===1){
var _146=_104.test(name);
if(name==="selected"&&!_4.support.optSelected){
var _147=elem.parentNode;
if(_147){
_147.selectedIndex;
if(_147.parentNode){
_147.parentNode.selectedIndex;
}
}
}
if((name in elem||elem[name]!==_2)&&_144&&!_146){
if(set){
if(name==="type"&&_105.test(elem.nodeName)&&elem.parentNode){
_4.error("type property can't be changed");
}
if(_142===null){
if(elem.nodeType===1){
elem.removeAttribute(name);
}
}else{
elem[name]=_142;
}
}
if(_4.nodeName(elem,"form")&&elem.getAttributeNode(name)){
return elem.getAttributeNode(name).nodeValue;
}
if(name==="tabIndex"){
var _148=elem.getAttributeNode("tabIndex");
return _148&&_148.specified?_148.value:_106.test(elem.nodeName)||_107.test(elem.nodeName)&&elem.href?0:_2;
}
return elem[name];
}
if(!_4.support.style&&_144&&name==="style"){
if(set){
elem.style.cssText=""+_142;
}
return elem.style.cssText;
}
if(set){
elem.setAttribute(name,""+_142);
}
if(!elem.attributes[name]&&(elem.hasAttribute&&!elem.hasAttribute(name))){
return _2;
}
var attr=!_4.support.hrefNormalized&&_144&&_146?elem.getAttribute(name,2):elem.getAttribute(name);
return attr===null?_2:attr;
}
if(set){
elem[name]=_142;
}
return elem[name];
}});
var _14a=/\.(.*)$/,_14b=/^(?:textarea|input|select)$/i,_14c=/\./g,_14d=/ /g,_14e=/[^\w\s.|`]/g,_14f=function(nm){
return nm.replace(_14e,"\\$&");
};
_4.event={add:function(elem,_152,_153,data){
if(elem.nodeType===3||elem.nodeType===8){
return;
}
try{
if(_4.isWindow(elem)&&(elem!==_1&&!elem.frameElement)){
elem=_1;
}
}
catch(e){
}
if(_153===false){
_153=returnFalse;
}else{
if(!_153){
return;
}
}
var _155,_156;
if(_153.handler){
_155=_153;
_153=_155.handler;
}
if(!_153.guid){
_153.guid=_4.guid++;
}
var _157=_4._data(elem);
if(!_157){
return;
}
var _158=_157.events,_159=_157.handle;
if(!_158){
_157.events=_158={};
}
if(!_159){
_157.handle=_159=function(){
return typeof _4!=="undefined"&&!_4.event.triggered?_4.event.handle.apply(_159.elem,arguments):_2;
};
}
_159.elem=elem;
_152=_152.split(" ");
var type,i=0,_15c;
while((type=_152[i++])){
_156=_155?_4.extend({},_155):{handler:_153,data:data};
if(type.indexOf(".")>-1){
_15c=type.split(".");
type=_15c.shift();
_156.namespace=_15c.slice(0).sort().join(".");
}else{
_15c=[];
_156.namespace="";
}
_156.type=type;
if(!_156.guid){
_156.guid=_153.guid;
}
var _15d=_158[type],_15e=_4.event.special[type]||{};
if(!_15d){
_15d=_158[type]=[];
if(!_15e.setup||_15e.setup.call(elem,data,_15c,_159)===false){
if(elem.addEventListener){
elem.addEventListener(type,_159,false);
}else{
if(elem.attachEvent){
elem.attachEvent("on"+type,_159);
}
}
}
}
if(_15e.add){
_15e.add.call(elem,_156);
if(!_156.handler.guid){
_156.handler.guid=_153.guid;
}
}
_15d.push(_156);
_4.event.global[type]=true;
}
elem=null;
},global:{},remove:function(elem,_160,_161,pos){
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(_161===false){
_161=returnFalse;
}
var ret,type,fn,j,i=0,all,_169,_16a,_16b,_16c,_16d,_16e,_16f=_4.hasData(elem)&&_4._data(elem),_170=_16f&&_16f.events;
if(!_16f||!_170){
return;
}
if(_160&&_160.type){
_161=_160.handler;
_160=_160.type;
}
if(!_160||typeof _160==="string"&&_160.charAt(0)==="."){
_160=_160||"";
for(type in _170){
_4.event.remove(elem,type+_160);
}
return;
}
_160=_160.split(" ");
while((type=_160[i++])){
_16e=type;
_16d=null;
all=type.indexOf(".")<0;
_169=[];
if(!all){
_169=type.split(".");
type=_169.shift();
_16a=new RegExp("(^|\\.)"+_4.map(_169.slice(0).sort(),_14f).join("\\.(?:.*\\.)?")+"(\\.|$)");
}
_16c=_170[type];
if(!_16c){
continue;
}
if(!_161){
for(j=0;j<_16c.length;j++){
_16d=_16c[j];
if(all||_16a.test(_16d.namespace)){
_4.event.remove(elem,_16e,_16d.handler,j);
_16c.splice(j--,1);
}
}
continue;
}
_16b=_4.event.special[type]||{};
for(j=pos||0;j<_16c.length;j++){
_16d=_16c[j];
if(_161.guid===_16d.guid){
if(all||_16a.test(_16d.namespace)){
if(pos==null){
_16c.splice(j--,1);
}
if(_16b.remove){
_16b.remove.call(elem,_16d);
}
}
if(pos!=null){
break;
}
}
}
if(_16c.length===0||pos!=null&&_16c.length===1){
if(!_16b.teardown||_16b.teardown.call(elem,_169)===false){
_4.removeEvent(elem,type,_16f.handle);
}
ret=null;
delete _170[type];
}
}
if(_4.isEmptyObject(_170)){
var _171=_16f.handle;
if(_171){
_171.elem=null;
}
delete _16f.events;
delete _16f.handle;
if(_4.isEmptyObject(_16f)){
_4.removeData(elem,_2,true);
}
}
},trigger:function(_172,data,elem){
var type=_172.type||_172,_176=arguments[3];
if(!_176){
_172=typeof _172==="object"?_172[_4.expando]?_172:_4.extend(_4.Event(type),_172):_4.Event(type);
if(type.indexOf("!")>=0){
_172.type=type=type.slice(0,-1);
_172.exclusive=true;
}
if(!elem){
_172.stopPropagation();
if(_4.event.global[type]){
_4.each(_4.cache,function(){
var _177=_4.expando,_178=this[_177];
if(_178&&_178.events&&_178.events[type]){
_4.event.trigger(_172,data,_178.handle.elem);
}
});
}
}
if(!elem||elem.nodeType===3||elem.nodeType===8){
return _2;
}
_172.result=_2;
_172.target=elem;
data=_4.makeArray(data);
data.unshift(_172);
}
_172.currentTarget=elem;
var _179=_4._data(elem,"handle");
if(_179){
_179.apply(elem,data);
}
var _17a=elem.parentNode||elem.ownerDocument;
try{
if(!(elem&&elem.nodeName&&_4.noData[elem.nodeName.toLowerCase()])){
if(elem["on"+type]&&elem["on"+type].apply(elem,data)===false){
_172.result=false;
_172.preventDefault();
}
}
}
catch(inlineError){
}
if(!_172.isPropagationStopped()&&_17a){
_4.event.trigger(_172,data,_17a,true);
}else{
if(!_172.isDefaultPrevented()){
var old,_17c=_172.target,_17d=type.replace(_14a,""),_17e=_4.nodeName(_17c,"a")&&_17d==="click",_17f=_4.event.special[_17d]||{};
if((!_17f._default||_17f._default.call(elem,_172)===false)&&!_17e&&!(_17c&&_17c.nodeName&&_4.noData[_17c.nodeName.toLowerCase()])){
try{
if(_17c[_17d]){
old=_17c["on"+_17d];
if(old){
_17c["on"+_17d]=null;
}
_4.event.triggered=true;
_17c[_17d]();
}
}
catch(triggerError){
}
if(old){
_17c["on"+_17d]=old;
}
_4.event.triggered=false;
}
}
}
},handle:function(_180){
var all,_182,_183,_184,_185,_186=[],args=_4.makeArray(arguments);
_180=args[0]=_4.event.fix(_180||_1.event);
_180.currentTarget=this;
all=_180.type.indexOf(".")<0&&!_180.exclusive;
if(!all){
_183=_180.type.split(".");
_180.type=_183.shift();
_186=_183.slice(0).sort();
_184=new RegExp("(^|\\.)"+_186.join("\\.(?:.*\\.)?")+"(\\.|$)");
}
_180.namespace=_180.namespace||_186.join(".");
_185=_4._data(this,"events");
_182=(_185||{})[_180.type];
if(_185&&_182){
_182=_182.slice(0);
for(var j=0,l=_182.length;j<l;j++){
var _18a=_182[j];
if(all||_184.test(_18a.namespace)){
_180.handler=_18a.handler;
_180.data=_18a.data;
_180.handleObj=_18a;
var ret=_18a.handler.apply(this,args);
if(ret!==_2){
_180.result=ret;
if(ret===false){
_180.preventDefault();
_180.stopPropagation();
}
}
if(_180.isImmediatePropagationStopped()){
break;
}
}
}
}
return _180.result;
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(_18c){
if(_18c[_4.expando]){
return _18c;
}
var _18d=_18c;
_18c=_4.Event(_18d);
for(var i=this.props.length,prop;i;){
prop=this.props[--i];
_18c[prop]=_18d[prop];
}
if(!_18c.target){
_18c.target=_18c.srcElement||_3;
}
if(_18c.target.nodeType===3){
_18c.target=_18c.target.parentNode;
}
if(!_18c.relatedTarget&&_18c.fromElement){
_18c.relatedTarget=_18c.fromElement===_18c.target?_18c.toElement:_18c.fromElement;
}
if(_18c.pageX==null&&_18c.clientX!=null){
var doc=_3.documentElement,body=_3.body;
_18c.pageX=_18c.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
_18c.pageY=_18c.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);
}
if(_18c.which==null&&(_18c.charCode!=null||_18c.keyCode!=null)){
_18c.which=_18c.charCode!=null?_18c.charCode:_18c.keyCode;
}
if(!_18c.metaKey&&_18c.ctrlKey){
_18c.metaKey=_18c.ctrlKey;
}
if(!_18c.which&&_18c.button!==_2){
_18c.which=(_18c.button&1?1:(_18c.button&2?3:(_18c.button&4?2:0)));
}
return _18c;
},guid:100000000,proxy:_4.proxy,special:{ready:{setup:_4.bindReady,teardown:_4.noop},live:{add:function(_192){
_4.event.add(this,liveConvert(_192.origType,_192.selector),_4.extend({},_192,{handler:liveHandler,guid:_192.handler.guid}));
},remove:function(_193){
_4.event.remove(this,liveConvert(_193.origType,_193.selector),_193);
}},beforeunload:{setup:function(data,_195,_196){
if(_4.isWindow(this)){
this.onbeforeunload=_196;
}
},teardown:function(_197,_198){
if(this.onbeforeunload===_198){
this.onbeforeunload=null;
}
}}}};
_4.removeEvent=_3.removeEventListener?function(elem,type,_19b){
if(elem.removeEventListener){
elem.removeEventListener(type,_19b,false);
}
}:function(elem,type,_19e){
if(elem.detachEvent){
elem.detachEvent("on"+type,_19e);
}
};
_4.Event=function(src){
if(!this.preventDefault){
return new _4.Event(src);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;
}else{
this.type=src;
}
this.timeStamp=_4.now();
this[_4.expando]=true;
};
function returnFalse(){
return false;
};
function returnTrue(){
return true;
};
_4.Event.prototype={preventDefault:function(){
this.isDefaultPrevented=returnTrue;
var e=this.originalEvent;
if(!e){
return;
}
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
},stopPropagation:function(){
this.isPropagationStopped=returnTrue;
var e=this.originalEvent;
if(!e){
return;
}
if(e.stopPropagation){
e.stopPropagation();
}
e.cancelBubble=true;
},stopImmediatePropagation:function(){
this.isImmediatePropagationStopped=returnTrue;
this.stopPropagation();
},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};
var _1a2=function(_1a3){
var _1a4=_1a3.relatedTarget;
try{
if(_1a4!==_3&&!_1a4.parentNode){
return;
}
while(_1a4&&_1a4!==this){
_1a4=_1a4.parentNode;
}
if(_1a4!==this){
_1a3.type=_1a3.data;
_4.event.handle.apply(this,arguments);
}
}
catch(e){
}
},_1a5=function(_1a6){
_1a6.type=_1a6.data;
_4.event.handle.apply(this,arguments);
};
_4.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){
_4.event.special[orig]={setup:function(data){
_4.event.add(this,fix,data&&data.selector?_1a5:_1a2,orig);
},teardown:function(data){
_4.event.remove(this,fix,data&&data.selector?_1a5:_1a2);
}};
});
if(!_4.support.submitBubbles){
_4.event.special.submit={setup:function(data,_1ac){
if(this.nodeName&&this.nodeName.toLowerCase()!=="form"){
_4.event.add(this,"click.specialSubmit",function(e){
var elem=e.target,type=elem.type;
if((type==="submit"||type==="image")&&_4(elem).closest("form").length){
trigger("submit",this,arguments);
}
});
_4.event.add(this,"keypress.specialSubmit",function(e){
var elem=e.target,type=elem.type;
if((type==="text"||type==="password")&&_4(elem).closest("form").length&&e.keyCode===13){
trigger("submit",this,arguments);
}
});
}else{
return false;
}
},teardown:function(_1b3){
_4.event.remove(this,".specialSubmit");
}};
}
if(!_4.support.changeBubbles){
var _1b4,_1b5=function(elem){
var type=elem.type,val=elem.value;
if(type==="radio"||type==="checkbox"){
val=elem.checked;
}else{
if(type==="select-multiple"){
val=elem.selectedIndex>-1?_4.map(elem.options,function(elem){
return elem.selected;
}).join("-"):"";
}else{
if(elem.nodeName.toLowerCase()==="select"){
val=elem.selectedIndex;
}
}
}
return val;
},_1ba=function _1ba(e){
var elem=e.target,data,val;
if(!_14b.test(elem.nodeName)||elem.readOnly){
return;
}
data=_4._data(elem,"_change_data");
val=_1b5(elem);
if(e.type!=="focusout"||elem.type!=="radio"){
_4._data(elem,"_change_data",val);
}
if(data===_2||val===data){
return;
}
if(data!=null||val){
e.type="change";
e.liveFired=_2;
_4.event.trigger(e,arguments[1],elem);
}
};
_4.event.special.change={filters:{focusout:_1ba,beforedeactivate:_1ba,click:function(e){
var elem=e.target,type=elem.type;
if(type==="radio"||type==="checkbox"||elem.nodeName.toLowerCase()==="select"){
_1ba.call(this,e);
}
},keydown:function(e){
var elem=e.target,type=elem.type;
if((e.keyCode===13&&elem.nodeName.toLowerCase()!=="textarea")||(e.keyCode===32&&(type==="checkbox"||type==="radio"))||type==="select-multiple"){
_1ba.call(this,e);
}
},beforeactivate:function(e){
var elem=e.target;
_4._data(elem,"_change_data",_1b5(elem));
}},setup:function(data,_1c8){
if(this.type==="file"){
return false;
}
for(var type in _1b4){
_4.event.add(this,type+".specialChange",_1b4[type]);
}
return _14b.test(this.nodeName);
},teardown:function(_1ca){
_4.event.remove(this,".specialChange");
return _14b.test(this.nodeName);
}};
_1b4=_4.event.special.change.filters;
_1b4.focus=_1b4.beforeactivate;
}
function trigger(type,elem,args){
var _1ce=_4.extend({},args[0]);
_1ce.type=type;
_1ce.originalEvent={};
_1ce.liveFired=_2;
_4.event.handle.call(elem,_1ce);
if(_1ce.isDefaultPrevented()){
args[0].preventDefault();
}
};
if(_3.addEventListener){
_4.each({focus:"focusin",blur:"focusout"},function(orig,fix){
_4.event.special[fix]={setup:function(){
this.addEventListener(orig,handler,true);
},teardown:function(){
this.removeEventListener(orig,handler,true);
}};
function handler(e){
e=_4.event.fix(e);
e.type=fix;
return _4.event.handle.call(this,e);
};
});
}
_4.each(["bind","one"],function(i,name){
_4.fn[name]=function(type,data,fn){
if(typeof type==="object"){
for(var key in type){
this[name](key,data,type[key],fn);
}
return this;
}
if(_4.isFunction(data)||data===false){
fn=data;
data=_2;
}
var _1d8=name==="one"?_4.proxy(fn,function(_1d9){
_4(this).unbind(_1d9,_1d8);
return fn.apply(this,arguments);
}):fn;
if(type==="unload"&&name!=="one"){
this.one(type,data,fn);
}else{
for(var i=0,l=this.length;i<l;i++){
_4.event.add(this[i],type,_1d8,data);
}
}
return this;
};
});
_4.fn.extend({unbind:function(type,fn){
if(typeof type==="object"&&!type.preventDefault){
for(var key in type){
this.unbind(key,type[key]);
}
}else{
for(var i=0,l=this.length;i<l;i++){
_4.event.remove(this[i],type,fn);
}
}
return this;
},delegate:function(_1e1,_1e2,data,fn){
return this.live(_1e2,data,fn,_1e1);
},undelegate:function(_1e5,_1e6,fn){
if(arguments.length===0){
return this.unbind("live");
}else{
return this.die(_1e6,null,fn,_1e5);
}
},trigger:function(type,data){
return this.each(function(){
_4.event.trigger(type,data,this);
});
},triggerHandler:function(type,data){
if(this[0]){
var _1ec=_4.Event(type);
_1ec.preventDefault();
_1ec.stopPropagation();
_4.event.trigger(_1ec,data,this[0]);
return _1ec.result;
}
},toggle:function(fn){
var args=arguments,i=1;
while(i<args.length){
_4.proxy(fn,args[i++]);
}
return this.click(_4.proxy(fn,function(_1f0){
var _1f1=(_4._data(this,"lastToggle"+fn.guid)||0)%i;
_4._data(this,"lastToggle"+fn.guid,_1f1+1);
_1f0.preventDefault();
return args[_1f1].apply(this,arguments)||false;
}));
},hover:function(_1f2,_1f3){
return this.mouseenter(_1f2).mouseleave(_1f3||_1f2);
}});
var _1f4={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
_4.each(["live","die"],function(i,name){
_4.fn[name]=function(_1f7,data,fn,_1fa){
var type,i=0,_1fc,_1fd,_1fe,_1ff=_1fa||this.selector,_200=_1fa?this:_4(this.context);
if(typeof _1f7==="object"&&!_1f7.preventDefault){
for(var key in _1f7){
_200[name](key,data,_1f7[key],_1ff);
}
return this;
}
if(_4.isFunction(data)){
fn=data;
data=_2;
}
_1f7=(_1f7||"").split(" ");
while((type=_1f7[i++])!=null){
_1fc=_14a.exec(type);
_1fd="";
if(_1fc){
_1fd=_1fc[0];
type=type.replace(_14a,"");
}
if(type==="hover"){
_1f7.push("mouseenter"+_1fd,"mouseleave"+_1fd);
continue;
}
_1fe=type;
if(type==="focus"||type==="blur"){
_1f7.push(_1f4[type]+_1fd);
type=type+_1fd;
}else{
type=(_1f4[type]||type)+_1fd;
}
if(name==="live"){
for(var j=0,l=_200.length;j<l;j++){
_4.event.add(_200[j],"live."+liveConvert(type,_1ff),{data:data,selector:_1ff,handler:fn,origType:type,origHandler:fn,preType:_1fe});
}
}else{
_200.unbind("live."+liveConvert(type,_1ff),fn);
}
}
return this;
};
});
function liveHandler(_204){
var stop,_206,_207,_208,_209,elem,j,i,l,data,_20f,_210,ret,_212=[],_213=[],_214=_4._data(this,"events");
if(_204.liveFired===this||!_214||!_214.live||_204.target.disabled||_204.button&&_204.type==="click"){
return;
}
if(_204.namespace){
_210=new RegExp("(^|\\.)"+_204.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");
}
_204.liveFired=this;
var live=_214.live.slice(0);
for(j=0;j<live.length;j++){
_209=live[j];
if(_209.origType.replace(_14a,"")===_204.type){
_213.push(_209.selector);
}else{
live.splice(j--,1);
}
}
_208=_4(_204.target).closest(_213,_204.currentTarget);
for(i=0,l=_208.length;i<l;i++){
_20f=_208[i];
for(j=0;j<live.length;j++){
_209=live[j];
if(_20f.selector===_209.selector&&(!_210||_210.test(_209.namespace))&&!_20f.elem.disabled){
elem=_20f.elem;
_207=null;
if(_209.preType==="mouseenter"||_209.preType==="mouseleave"){
_204.type=_209.preType;
_207=_4(_204.relatedTarget).closest(_209.selector)[0];
}
if(!_207||_207!==elem){
_212.push({elem:elem,handleObj:_209,level:_20f.level});
}
}
}
}
for(i=0,l=_212.length;i<l;i++){
_208=_212[i];
if(_206&&_208.level>_206){
break;
}
_204.currentTarget=_208.elem;
_204.data=_208.handleObj.data;
_204.handleObj=_208.handleObj;
ret=_208.handleObj.origHandler.apply(_208.elem,arguments);
if(ret===false||_204.isPropagationStopped()){
_206=_208.level;
if(ret===false){
stop=false;
}
if(_204.isImmediatePropagationStopped()){
break;
}
}
}
return stop;
};
function liveConvert(type,_217){
return (type&&type!=="*"?type+".":"")+_217.replace(_14c,"`").replace(_14d,"&");
};
_4.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error").split(" "),function(i,name){
_4.fn[name]=function(data,fn){
if(fn==null){
fn=data;
data=null;
}
return arguments.length>0?this.bind(name,data,fn):this.trigger(name);
};
if(_4.attrFn){
_4.attrFn[name]=true;
}
});
(function(){
var _21c=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,_21e=Object.prototype.toString,_21f=false,_220=true,_221=/\\/g,_222=/\W/;
[0,0].sort(function(){
_220=false;
return 0;
});
var _223=function(_224,_225,_226,seed){
_226=_226||[];
_225=_225||_3;
var _228=_225;
if(_225.nodeType!==1&&_225.nodeType!==9){
return [];
}
if(!_224||typeof _224!=="string"){
return _226;
}
var m,set,_22b,_22c,ret,cur,pop,i,_231=true,_232=_223.isXML(_225),_233=[],_234=_224;
do{
_21c.exec("");
m=_21c.exec(_234);
if(m){
_234=m[3];
_233.push(m[1]);
if(m[2]){
_22c=m[3];
break;
}
}
}while(m);
if(_233.length>1&&_235.exec(_224)){
if(_233.length===2&&Expr.relative[_233[0]]){
set=_237(_233[0]+_233[1],_225);
}else{
set=Expr.relative[_233[0]]?[_225]:_223(_233.shift(),_225);
while(_233.length){
_224=_233.shift();
if(Expr.relative[_224]){
_224+=_233.shift();
}
set=_237(_224,set);
}
}
}else{
if(!seed&&_233.length>1&&_225.nodeType===9&&!_232&&Expr.match.ID.test(_233[0])&&!Expr.match.ID.test(_233[_233.length-1])){
ret=_223.find(_233.shift(),_225,_232);
_225=ret.expr?_223.filter(ret.expr,ret.set)[0]:ret.set[0];
}
if(_225){
ret=seed?{expr:_233.pop(),set:_238(seed)}:_223.find(_233.pop(),_233.length===1&&(_233[0]==="~"||_233[0]==="+")&&_225.parentNode?_225.parentNode:_225,_232);
set=ret.expr?_223.filter(ret.expr,ret.set):ret.set;
if(_233.length>0){
_22b=_238(set);
}else{
_231=false;
}
while(_233.length){
cur=_233.pop();
pop=cur;
if(!Expr.relative[cur]){
cur="";
}else{
pop=_233.pop();
}
if(pop==null){
pop=_225;
}
Expr.relative[cur](_22b,pop,_232);
}
}else{
_22b=_233=[];
}
}
if(!_22b){
_22b=set;
}
if(!_22b){
_223.error(cur||_224);
}
if(_21e.call(_22b)==="[object Array]"){
if(!_231){
_226.push.apply(_226,_22b);
}else{
if(_225&&_225.nodeType===1){
for(i=0;_22b[i]!=null;i++){
if(_22b[i]&&(_22b[i]===true||_22b[i].nodeType===1&&_223.contains(_225,_22b[i]))){
_226.push(set[i]);
}
}
}else{
for(i=0;_22b[i]!=null;i++){
if(_22b[i]&&_22b[i].nodeType===1){
_226.push(set[i]);
}
}
}
}
}else{
_238(_22b,_226);
}
if(_22c){
_223(_22c,_228,_226,seed);
_223.uniqueSort(_226);
}
return _226;
};
_223.uniqueSort=function(_239){
if(_23a){
_21f=_220;
_239.sort(_23a);
if(_21f){
for(var i=1;i<_239.length;i++){
if(_239[i]===_239[i-1]){
_239.splice(i--,1);
}
}
}
}
return _239;
};
_223.matches=function(expr,set){
return _223(expr,null,null,set);
};
_223.matchesSelector=function(node,expr){
return _223(expr,null,null,[node]).length>0;
};
_223.find=function(expr,_241,_242){
var set;
if(!expr){
return [];
}
for(var i=0,l=Expr.order.length;i<l;i++){
var _246,type=Expr.order[i];
if((_246=Expr.leftMatch[type].exec(expr))){
var left=_246[1];
_246.splice(1,1);
if(left.substr(left.length-1)!=="\\"){
_246[1]=(_246[1]||"").replace(_221,"");
set=Expr.find[type](_246,_241,_242);
if(set!=null){
expr=expr.replace(Expr.match[type],"");
break;
}
}
}
}
if(!set){
set=typeof _241.getElementsByTagName!=="undefined"?_241.getElementsByTagName("*"):[];
}
return {set:set,expr:expr};
};
_223.filter=function(expr,set,_24b,not){
var _24d,_24e,old=expr,_250=[],_251=set,_252=set&&set[0]&&_223.isXML(set[0]);
while(expr&&set.length){
for(var type in Expr.filter){
if((_24d=Expr.leftMatch[type].exec(expr))!=null&&_24d[2]){
var _254,item,_256=Expr.filter[type],left=_24d[1];
_24e=false;
_24d.splice(1,1);
if(left.substr(left.length-1)==="\\"){
continue;
}
if(_251===_250){
_250=[];
}
if(Expr.preFilter[type]){
_24d=Expr.preFilter[type](_24d,_251,_24b,_250,not,_252);
if(!_24d){
_24e=_254=true;
}else{
if(_24d===true){
continue;
}
}
}
if(_24d){
for(var i=0;(item=_251[i])!=null;i++){
if(item){
_254=_256(item,_24d,i,_251);
var pass=not^!!_254;
if(_24b&&_254!=null){
if(pass){
_24e=true;
}else{
_251[i]=false;
}
}else{
if(pass){
_250.push(item);
_24e=true;
}
}
}
}
}
if(_254!==_2){
if(!_24b){
_251=_250;
}
expr=expr.replace(Expr.match[type],"");
if(!_24e){
return [];
}
break;
}
}
}
if(expr===old){
if(_24e==null){
_223.error(expr);
}else{
break;
}
}
old=expr;
}
return _251;
};
_223.error=function(msg){
throw "Syntax error, unrecognized expression: "+msg;
};
var Expr=_223.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){
return elem.getAttribute("href");
},type:function(elem){
return elem.getAttribute("type");
}},relative:{"+":function(_25d,part){
var _25f=typeof part==="string",_260=_25f&&!_222.test(part),_261=_25f&&!_260;
if(_260){
part=part.toLowerCase();
}
for(var i=0,l=_25d.length,elem;i<l;i++){
if((elem=_25d[i])){
while((elem=elem.previousSibling)&&elem.nodeType!==1){
}
_25d[i]=_261||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;
}
}
if(_261){
_223.filter(part,_25d,true);
}
},">":function(_265,part){
var elem,_268=typeof part==="string",i=0,l=_265.length;
if(_268&&!_222.test(part)){
part=part.toLowerCase();
for(;i<l;i++){
elem=_265[i];
if(elem){
var _26b=elem.parentNode;
_265[i]=_26b.nodeName.toLowerCase()===part?_26b:false;
}
}
}else{
for(;i<l;i++){
elem=_265[i];
if(elem){
_265[i]=_268?elem.parentNode:elem.parentNode===part;
}
}
if(_268){
_223.filter(part,_265,true);
}
}
},"":function(_26c,part,_26e){
var _26f,_270=done++,_271=dirCheck;
if(typeof part==="string"&&!_222.test(part)){
part=part.toLowerCase();
_26f=part;
_271=dirNodeCheck;
}
_271("parentNode",part,_270,_26c,_26f,_26e);
},"~":function(_272,part,_274){
var _275,_276=done++,_277=dirCheck;
if(typeof part==="string"&&!_222.test(part)){
part=part.toLowerCase();
_275=part;
_277=dirNodeCheck;
}
_277("previousSibling",part,_276,_272,_275,_274);
}},find:{ID:function(_278,_279,_27a){
if(typeof _279.getElementById!=="undefined"&&!_27a){
var m=_279.getElementById(_278[1]);
return m&&m.parentNode?[m]:[];
}
},NAME:function(_27c,_27d){
if(typeof _27d.getElementsByName!=="undefined"){
var ret=[],_27f=_27d.getElementsByName(_27c[1]);
for(var i=0,l=_27f.length;i<l;i++){
if(_27f[i].getAttribute("name")===_27c[1]){
ret.push(_27f[i]);
}
}
return ret.length===0?null:ret;
}
},TAG:function(_282,_283){
if(typeof _283.getElementsByTagName!=="undefined"){
return _283.getElementsByTagName(_282[1]);
}
}},preFilter:{CLASS:function(_284,_285,_286,_287,not,_289){
_284=" "+_284[1].replace(_221,"")+" ";
if(_289){
return _284;
}
for(var i=0,elem;(elem=_285[i])!=null;i++){
if(elem){
if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(_284)>=0)){
if(!_286){
_287.push(elem);
}
}else{
if(_286){
_285[i]=false;
}
}
}
}
return false;
},ID:function(_28c){
return _28c[1].replace(_221,"");
},TAG:function(_28d,_28e){
return _28d[1].replace(_221,"").toLowerCase();
},CHILD:function(_28f){
if(_28f[1]==="nth"){
if(!_28f[2]){
_223.error(_28f[0]);
}
_28f[2]=_28f[2].replace(/^\+|\s*/g,"");
var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(_28f[2]==="even"&&"2n"||_28f[2]==="odd"&&"2n+1"||!/\D/.test(_28f[2])&&"0n+"+_28f[2]||_28f[2]);
_28f[2]=(test[1]+(test[2]||1))-0;
_28f[3]=test[3]-0;
}else{
if(_28f[2]){
_223.error(_28f[0]);
}
}
_28f[0]=done++;
return _28f;
},ATTR:function(_291,_292,_293,_294,not,_296){
var name=_291[1]=_291[1].replace(_221,"");
if(!_296&&Expr.attrMap[name]){
_291[1]=Expr.attrMap[name];
}
_291[4]=(_291[4]||_291[5]||"").replace(_221,"");
if(_291[2]==="~="){
_291[4]=" "+_291[4]+" ";
}
return _291;
},PSEUDO:function(_298,_299,_29a,_29b,not){
if(_298[1]==="not"){
if((_21c.exec(_298[3])||"").length>1||/^\w/.test(_298[3])){
_298[3]=_223(_298[3],null,null,_299);
}else{
var ret=_223.filter(_298[3],_299,_29a,true^not);
if(!_29a){
_29b.push.apply(_29b,ret);
}
return false;
}
}else{
if(Expr.match.POS.test(_298[0])||Expr.match.CHILD.test(_298[0])){
return true;
}
}
return _298;
},POS:function(_29e){
_29e.unshift(true);
return _29e;
}},filters:{enabled:function(elem){
return elem.disabled===false&&elem.type!=="hidden";
},disabled:function(elem){
return elem.disabled===true;
},checked:function(elem){
return elem.checked===true;
},selected:function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},parent:function(elem){
return !!elem.firstChild;
},empty:function(elem){
return !elem.firstChild;
},has:function(elem,i,_2a7){
return !!_223(_2a7[3],elem).length;
},header:function(elem){
return (/h\d/i).test(elem.nodeName);
},text:function(elem){
return "text"===elem.getAttribute("type");
},radio:function(elem){
return "radio"===elem.type;
},checkbox:function(elem){
return "checkbox"===elem.type;
},file:function(elem){
return "file"===elem.type;
},password:function(elem){
return "password"===elem.type;
},submit:function(elem){
return "submit"===elem.type;
},image:function(elem){
return "image"===elem.type;
},reset:function(elem){
return "reset"===elem.type;
},button:function(elem){
return "button"===elem.type||elem.nodeName.toLowerCase()==="button";
},input:function(elem){
return (/input|select|textarea|button/i).test(elem.nodeName);
}},setFilters:{first:function(elem,i){
return i===0;
},last:function(elem,i,_2b7,_2b8){
return i===_2b8.length-1;
},even:function(elem,i){
return i%2===0;
},odd:function(elem,i){
return i%2===1;
},lt:function(elem,i,_2bf){
return i<_2bf[3]-0;
},gt:function(elem,i,_2c2){
return i>_2c2[3]-0;
},nth:function(elem,i,_2c5){
return _2c5[3]-0===i;
},eq:function(elem,i,_2c8){
return _2c8[3]-0===i;
}},filter:{PSEUDO:function(elem,_2ca,i,_2cc){
var name=_2ca[1],_2ce=Expr.filters[name];
if(_2ce){
return _2ce(elem,i,_2ca,_2cc);
}else{
if(name==="contains"){
return (elem.textContent||elem.innerText||_223.getText([elem])||"").indexOf(_2ca[3])>=0;
}else{
if(name==="not"){
var not=_2ca[3];
for(var j=0,l=not.length;j<l;j++){
if(not[j]===elem){
return false;
}
}
return true;
}else{
_223.error(name);
}
}
}
},CHILD:function(elem,_2d3){
var type=_2d3[1],node=elem;
switch(type){
case "only":
case "first":
while((node=node.previousSibling)){
if(node.nodeType===1){
return false;
}
}
if(type==="first"){
return true;
}
node=elem;
case "last":
while((node=node.nextSibling)){
if(node.nodeType===1){
return false;
}
}
return true;
case "nth":
var _2d6=_2d3[2],last=_2d3[3];
if(_2d6===1&&last===0){
return true;
}
var _2d8=_2d3[0],_2d9=elem.parentNode;
if(_2d9&&(_2d9.sizcache!==_2d8||!elem.nodeIndex)){
var _2da=0;
for(node=_2d9.firstChild;node;node=node.nextSibling){
if(node.nodeType===1){
node.nodeIndex=++_2da;
}
}
_2d9.sizcache=_2d8;
}
var diff=elem.nodeIndex-last;
if(_2d6===0){
return diff===0;
}else{
return (diff%_2d6===0&&diff/_2d6>=0);
}
}
},ID:function(elem,_2dd){
return elem.nodeType===1&&elem.getAttribute("id")===_2dd;
},TAG:function(elem,_2df){
return (_2df==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===_2df;
},CLASS:function(elem,_2e1){
return (" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(_2e1)>-1;
},ATTR:function(elem,_2e3){
var name=_2e3[1],_2e5=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),_2e6=_2e5+"",type=_2e3[2],_2e8=_2e3[4];
return _2e5==null?type==="!=":type==="="?_2e6===_2e8:type==="*="?_2e6.indexOf(_2e8)>=0:type==="~="?(" "+_2e6+" ").indexOf(_2e8)>=0:!_2e8?_2e6&&_2e5!==false:type==="!="?_2e6!==_2e8:type==="^="?_2e6.indexOf(_2e8)===0:type==="$="?_2e6.substr(_2e6.length-_2e8.length)===_2e8:type==="|="?_2e6===_2e8||_2e6.substr(0,_2e8.length+1)===_2e8+"-":false;
},POS:function(elem,_2ea,i,_2ec){
var name=_2ea[2],_2ee=Expr.setFilters[name];
if(_2ee){
return _2ee(elem,i,_2ea,_2ec);
}
}}};
var _235=Expr.match.POS,_2ef=function(all,num){
return "\\"+(num-0+1);
};
for(var type in Expr.match){
Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,_2ef));
}
var _238=function(_2f3,_2f4){
_2f3=Array.prototype.slice.call(_2f3,0);
if(_2f4){
_2f4.push.apply(_2f4,_2f3);
return _2f4;
}
return _2f3;
};
try{
Array.prototype.slice.call(_3.documentElement.childNodes,0)[0].nodeType;
}
catch(e){
_238=function(_2f5,_2f6){
var i=0,ret=_2f6||[];
if(_21e.call(_2f5)==="[object Array]"){
Array.prototype.push.apply(ret,_2f5);
}else{
if(typeof _2f5.length==="number"){
for(var l=_2f5.length;i<l;i++){
ret.push(_2f5[i]);
}
}else{
for(;_2f5[i];i++){
ret.push(_2f5[i]);
}
}
}
return ret;
};
}
var _23a,_2fa;
if(_3.documentElement.compareDocumentPosition){
_23a=function(a,b){
if(a===b){
_21f=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){
return a.compareDocumentPosition?-1:1;
}
return a.compareDocumentPosition(b)&4?-1:1;
};
}else{
_23a=function(a,b){
var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;
if(a===b){
_21f=true;
return 0;
}else{
if(aup===bup){
return _2fa(a,b);
}else{
if(!aup){
return -1;
}else{
if(!bup){
return 1;
}
}
}
}
while(cur){
ap.unshift(cur);
cur=cur.parentNode;
}
cur=bup;
while(cur){
bp.unshift(cur);
cur=cur.parentNode;
}
al=ap.length;
bl=bp.length;
for(var i=0;i<al&&i<bl;i++){
if(ap[i]!==bp[i]){
return _2fa(ap[i],bp[i]);
}
}
return i===al?_2fa(a,bp[i],-1):_2fa(ap[i],b,1);
};
_2fa=function(a,b,ret){
if(a===b){
return ret;
}
var cur=a.nextSibling;
while(cur){
if(cur===b){
return -1;
}
cur=cur.nextSibling;
}
return 1;
};
}
_223.getText=function(_30b){
var ret="",elem;
for(var i=0;_30b[i];i++){
elem=_30b[i];
if(elem.nodeType===3||elem.nodeType===4){
ret+=elem.nodeValue;
}else{
if(elem.nodeType!==8){
ret+=_223.getText(elem.childNodes);
}
}
}
return ret;
};
(function(){
var form=_3.createElement("div"),id="script"+(new Date()).getTime(),root=_3.documentElement;
form.innerHTML="<a name='"+id+"'/>";
root.insertBefore(form,root.firstChild);
if(_3.getElementById(id)){
Expr.find.ID=function(_312,_313,_314){
if(typeof _313.getElementById!=="undefined"&&!_314){
var m=_313.getElementById(_312[1]);
return m?m.id===_312[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===_312[1]?[m]:_2:[];
}
};
Expr.filter.ID=function(elem,_317){
var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===_317;
};
}
root.removeChild(form);
root=form=null;
})();
(function(){
var div=_3.createElement("div");
div.appendChild(_3.createComment(""));
if(div.getElementsByTagName("*").length>0){
Expr.find.TAG=function(_31a,_31b){
var _31c=_31b.getElementsByTagName(_31a[1]);
if(_31a[1]==="*"){
var tmp=[];
for(var i=0;_31c[i];i++){
if(_31c[i].nodeType===1){
tmp.push(_31c[i]);
}
}
_31c=tmp;
}
return _31c;
};
}
div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){
Expr.attrHandle.href=function(elem){
return elem.getAttribute("href",2);
};
}
div=null;
})();
if(_3.querySelectorAll){
(function(){
var _320=_223,div=_3.createElement("div"),id="__sizzle__";
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){
return;
}
_223=function(_323,_324,_325,seed){
_324=_324||_3;
if(!seed&&!_223.isXML(_324)){
var _327=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(_323);
if(_327&&(_324.nodeType===1||_324.nodeType===9)){
if(_327[1]){
return _238(_324.getElementsByTagName(_323),_325);
}else{
if(_327[2]&&Expr.find.CLASS&&_324.getElementsByClassName){
return _238(_324.getElementsByClassName(_327[2]),_325);
}
}
}
if(_324.nodeType===9){
if(_323==="body"&&_324.body){
return _238([_324.body],_325);
}else{
if(_327&&_327[3]){
var elem=_324.getElementById(_327[3]);
if(elem&&elem.parentNode){
if(elem.id===_327[3]){
return _238([elem],_325);
}
}else{
return _238([],_325);
}
}
}
try{
return _238(_324.querySelectorAll(_323),_325);
}
catch(qsaError){
}
}else{
if(_324.nodeType===1&&_324.nodeName.toLowerCase()!=="object"){
var _329=_324,old=_324.getAttribute("id"),nid=old||id,_32c=_324.parentNode,_32d=/^\s*[+~]/.test(_323);
if(!old){
_324.setAttribute("id",nid);
}else{
nid=nid.replace(/'/g,"\\$&");
}
if(_32d&&_32c){
_324=_324.parentNode;
}
try{
if(!_32d||_32c){
return _238(_324.querySelectorAll("[id='"+nid+"'] "+_323),_325);
}
}
catch(pseudoError){
}
finally{
if(!old){
_329.removeAttribute("id");
}
}
}
}
}
return _320(_323,_324,_325,seed);
};
for(var prop in _320){
_223[prop]=_320[prop];
}
div=null;
})();
}
(function(){
var html=_3.documentElement,_330=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector,_331=false;
try{
_330.call(_3.documentElement,"[test!='']:sizzle");
}
catch(pseudoError){
_331=true;
}
if(_330){
_223.matchesSelector=function(node,expr){
expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!_223.isXML(node)){
try{
if(_331||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){
return _330.call(node,expr);
}
}
catch(e){
}
}
return _223(expr,null,null,[node]).length>0;
};
}
})();
(function(){
var div=_3.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){
return;
}
div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){
return;
}
Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(_335,_336,_337){
if(typeof _336.getElementsByClassName!=="undefined"&&!_337){
return _336.getElementsByClassName(_335[1]);
}
};
div=null;
})();
function dirNodeCheck(dir,cur,_33a,_33b,_33c,_33d){
for(var i=0,l=_33b.length;i<l;i++){
var elem=_33b[i];
if(elem){
var _341=false;
elem=elem[dir];
while(elem){
if(elem.sizcache===_33a){
_341=_33b[elem.sizset];
break;
}
if(elem.nodeType===1&&!_33d){
elem.sizcache=_33a;
elem.sizset=i;
}
if(elem.nodeName.toLowerCase()===cur){
_341=elem;
break;
}
elem=elem[dir];
}
_33b[i]=_341;
}
}
};
function dirCheck(dir,cur,_344,_345,_346,_347){
for(var i=0,l=_345.length;i<l;i++){
var elem=_345[i];
if(elem){
var _34b=false;
elem=elem[dir];
while(elem){
if(elem.sizcache===_344){
_34b=_345[elem.sizset];
break;
}
if(elem.nodeType===1){
if(!_347){
elem.sizcache=_344;
elem.sizset=i;
}
if(typeof cur!=="string"){
if(elem===cur){
_34b=true;
break;
}
}else{
if(_223.filter(cur,[elem]).length>0){
_34b=elem;
break;
}
}
}
elem=elem[dir];
}
_345[i]=_34b;
}
}
};
if(_3.documentElement.contains){
_223.contains=function(a,b){
return a!==b&&(a.contains?a.contains(b):true);
};
}else{
if(_3.documentElement.compareDocumentPosition){
_223.contains=function(a,b){
return !!(a.compareDocumentPosition(b)&16);
};
}else{
_223.contains=function(){
return false;
};
}
}
_223.isXML=function(elem){
var _351=(elem?elem.ownerDocument||elem:0).documentElement;
return _351?_351.nodeName!=="HTML":false;
};
var _237=function(_352,_353){
var _354,_355=[],_356="",root=_353.nodeType?[_353]:_353;
while((_354=Expr.match.PSEUDO.exec(_352))){
_356+=_354[0];
_352=_352.replace(Expr.match.PSEUDO,"");
}
_352=Expr.relative[_352]?_352+"*":_352;
for(var i=0,l=root.length;i<l;i++){
_223(_352,root[i],_355);
}
return _223.filter(_356,_355);
};
_4.find=_223;
_4.expr=_223.selectors;
_4.expr[":"]=_4.expr.filters;
_4.unique=_223.uniqueSort;
_4.text=_223.getText;
_4.isXMLDoc=_223.isXML;
_4.contains=_223.contains;
})();
var _35a=/Until$/,_35b=/^(?:parents|prevUntil|prevAll)/,_35c=/,/,_35d=/^.[^:#\[\.,]*$/,_35e=Array.prototype.slice,POS=_4.expr.match.POS,_360={children:true,contents:true,next:true,prev:true};
_4.fn.extend({find:function(_361){
var ret=this.pushStack("","find",_361),_363=0;
for(var i=0,l=this.length;i<l;i++){
_363=ret.length;
_4.find(_361,this[i],ret);
if(i>0){
for(var n=_363;n<ret.length;n++){
for(var r=0;r<_363;r++){
if(ret[r]===ret[n]){
ret.splice(n--,1);
break;
}
}
}
}
}
return ret;
},has:function(_368){
var _369=_4(_368);
return this.filter(function(){
for(var i=0,l=_369.length;i<l;i++){
if(_4.contains(this,_369[i])){
return true;
}
}
});
},not:function(_36c){
return this.pushStack(winnow(this,_36c,false),"not",_36c);
},filter:function(_36d){
return this.pushStack(winnow(this,_36d,true),"filter",_36d);
},is:function(_36e){
return !!_36e&&_4.filter(_36e,this).length>0;
},closest:function(_36f,_370){
var ret=[],i,l,cur=this[0];
if(_4.isArray(_36f)){
var _375,_376,_377={},_378=1;
if(cur&&_36f.length){
for(i=0,l=_36f.length;i<l;i++){
_376=_36f[i];
if(!_377[_376]){
_377[_376]=_4.expr.match.POS.test(_376)?_4(_376,_370||this.context):_376;
}
}
while(cur&&cur.ownerDocument&&cur!==_370){
for(_376 in _377){
_375=_377[_376];
if(_375.jquery?_375.index(cur)>-1:_4(cur).is(_375)){
ret.push({selector:_376,elem:cur,level:_378});
}
}
cur=cur.parentNode;
_378++;
}
}
return ret;
}
var pos=POS.test(_36f)?_4(_36f,_370||this.context):null;
for(i=0,l=this.length;i<l;i++){
cur=this[i];
while(cur){
if(pos?pos.index(cur)>-1:_4.find.matchesSelector(cur,_36f)){
ret.push(cur);
break;
}else{
cur=cur.parentNode;
if(!cur||!cur.ownerDocument||cur===_370){
break;
}
}
}
}
ret=ret.length>1?_4.unique(ret):ret;
return this.pushStack(ret,"closest",_36f);
},index:function(elem){
if(!elem||typeof elem==="string"){
return _4.inArray(this[0],elem?_4(elem):this.parent().children());
}
return _4.inArray(elem.jquery?elem[0]:elem,this);
},add:function(_37b,_37c){
var set=typeof _37b==="string"?_4(_37b,_37c):_4.makeArray(_37b),all=_4.merge(this.get(),set);
return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:_4.unique(all));
},andSelf:function(){
return this.add(this.prevObject);
}});
function isDisconnected(node){
return !node||!node.parentNode||node.parentNode.nodeType===11;
};
_4.each({parent:function(elem){
var _381=elem.parentNode;
return _381&&_381.nodeType!==11?_381:null;
},parents:function(elem){
return _4.dir(elem,"parentNode");
},parentsUntil:function(elem,i,_385){
return _4.dir(elem,"parentNode",_385);
},next:function(elem){
return _4.nth(elem,2,"nextSibling");
},prev:function(elem){
return _4.nth(elem,2,"previousSibling");
},nextAll:function(elem){
return _4.dir(elem,"nextSibling");
},prevAll:function(elem){
return _4.dir(elem,"previousSibling");
},nextUntil:function(elem,i,_38c){
return _4.dir(elem,"nextSibling",_38c);
},prevUntil:function(elem,i,_38f){
return _4.dir(elem,"previousSibling",_38f);
},siblings:function(elem){
return _4.sibling(elem.parentNode.firstChild,elem);
},children:function(elem){
return _4.sibling(elem.firstChild);
},contents:function(elem){
return _4.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:_4.makeArray(elem.childNodes);
}},function(name,fn){
_4.fn[name]=function(_395,_396){
var ret=_4.map(this,fn,_395),args=_35e.call(arguments);
if(!_35a.test(name)){
_396=_395;
}
if(_396&&typeof _396==="string"){
ret=_4.filter(_396,ret);
}
ret=this.length>1&&!_360[name]?_4.unique(ret):ret;
if((this.length>1||_35c.test(_396))&&_35b.test(name)){
ret=ret.reverse();
}
return this.pushStack(ret,name,args.join(","));
};
});
_4.extend({filter:function(expr,_39a,not){
if(not){
expr=":not("+expr+")";
}
return _39a.length===1?_4.find.matchesSelector(_39a[0],expr)?[_39a[0]]:[]:_4.find.matches(expr,_39a);
},dir:function(elem,dir,_39e){
var _39f=[],cur=elem[dir];
while(cur&&cur.nodeType!==9&&(_39e===_2||cur.nodeType!==1||!_4(cur).is(_39e))){
if(cur.nodeType===1){
_39f.push(cur);
}
cur=cur[dir];
}
return _39f;
},nth:function(cur,_3a2,dir,elem){
_3a2=_3a2||1;
var num=0;
for(;cur;cur=cur[dir]){
if(cur.nodeType===1&&++num===_3a2){
break;
}
}
return cur;
},sibling:function(n,elem){
var r=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
r.push(n);
}
}
return r;
}});
function winnow(_3a9,_3aa,keep){
if(_4.isFunction(_3aa)){
return _4.grep(_3a9,function(elem,i){
var _3ae=!!_3aa.call(elem,i,elem);
return _3ae===keep;
});
}else{
if(_3aa.nodeType){
return _4.grep(_3a9,function(elem,i){
return (elem===_3aa)===keep;
});
}else{
if(typeof _3aa==="string"){
var _3b1=_4.grep(_3a9,function(elem){
return elem.nodeType===1;
});
if(_35d.test(_3aa)){
return _4.filter(_3aa,_3b1,!keep);
}else{
_3aa=_4.filter(_3aa,_3b1);
}
}
}
}
return _4.grep(_3a9,function(elem,i){
return (_4.inArray(elem,_3aa)>=0)===keep;
});
};
var _3b5=/ jQuery\d+="(?:\d+|null)"/g,_3b6=/^\s+/,_3b7=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_3b8=/<([\w:]+)/,_3b9=/<tbody/i,_3ba=/<|&#?\w+;/,_3bb=/<(?:script|object|embed|option|style)/i,_3bc=/checked\s*(?:[^=]|=\s*.checked.)/i,_3bd={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
_3bd.optgroup=_3bd.option;
_3bd.tbody=_3bd.tfoot=_3bd.colgroup=_3bd.caption=_3bd.thead;
_3bd.th=_3bd.td;
if(!_4.support.htmlSerialize){
_3bd._default=[1,"div<div>","</div>"];
}
_4.fn.extend({text:function(text){
if(_4.isFunction(text)){
return this.each(function(i){
var self=_4(this);
self.text(text.call(this,i,self.text()));
});
}
if(typeof text!=="object"&&text!==_2){
return this.empty().append((this[0]&&this[0].ownerDocument||_3).createTextNode(text));
}
return _4.text(this);
},wrapAll:function(html){
if(_4.isFunction(html)){
return this.each(function(i){
_4(this).wrapAll(html.call(this,i));
});
}
if(this[0]){
var wrap=_4(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstChild&&elem.firstChild.nodeType===1){
elem=elem.firstChild;
}
return elem;
}).append(this);
}
return this;
},wrapInner:function(html){
if(_4.isFunction(html)){
return this.each(function(i){
_4(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=_4(this),_3c8=self.contents();
if(_3c8.length){
_3c8.wrapAll(html);
}else{
self.append(html);
}
});
},wrap:function(html){
return this.each(function(){
_4(this).wrapAll(html);
});
},unwrap:function(){
return this.parent().each(function(){
if(!_4.nodeName(this,"body")){
_4(this).replaceWith(this.childNodes);
}
}).end();
},append:function(){
return this.domManip(arguments,true,function(elem){
if(this.nodeType===1){
this.appendChild(elem);
}
});
},prepend:function(){
return this.domManip(arguments,true,function(elem){
if(this.nodeType===1){
this.insertBefore(elem,this.firstChild);
}
});
},before:function(){
if(this[0]&&this[0].parentNode){
return this.domManip(arguments,false,function(elem){
this.parentNode.insertBefore(elem,this);
});
}else{
if(arguments.length){
var set=_4(arguments[0]);
set.push.apply(set,this.toArray());
return this.pushStack(set,"before",arguments);
}
}
},after:function(){
if(this[0]&&this[0].parentNode){
return this.domManip(arguments,false,function(elem){
this.parentNode.insertBefore(elem,this.nextSibling);
});
}else{
if(arguments.length){
var set=this.pushStack(this,"after",arguments);
set.push.apply(set,_4(arguments[0]).toArray());
return set;
}
}
},remove:function(_3d0,_3d1){
for(var i=0,elem;(elem=this[i])!=null;i++){
if(!_3d0||_4.filter(_3d0,[elem]).length){
if(!_3d1&&elem.nodeType===1){
_4.cleanData(elem.getElementsByTagName("*"));
_4.cleanData([elem]);
}
if(elem.parentNode){
elem.parentNode.removeChild(elem);
}
}
}
return this;
},empty:function(){
for(var i=0,elem;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
_4.cleanData(elem.getElementsByTagName("*"));
}
while(elem.firstChild){
elem.removeChild(elem.firstChild);
}
}
return this;
},clone:function(_3d6,_3d7){
_3d6=_3d6==null?false:_3d6;
_3d7=_3d7==null?_3d6:_3d7;
return this.map(function(){
return _4.clone(this,_3d6,_3d7);
});
},html:function(_3d8){
if(_3d8===_2){
return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(_3b5,""):null;
}else{
if(typeof _3d8==="string"&&!_3bb.test(_3d8)&&(_4.support.leadingWhitespace||!_3b6.test(_3d8))&&!_3bd[(_3b8.exec(_3d8)||["",""])[1].toLowerCase()]){
_3d8=_3d8.replace(_3b7,"<$1></$2>");
try{
for(var i=0,l=this.length;i<l;i++){
if(this[i].nodeType===1){
_4.cleanData(this[i].getElementsByTagName("*"));
this[i].innerHTML=_3d8;
}
}
}
catch(e){
this.empty().append(_3d8);
}
}else{
if(_4.isFunction(_3d8)){
this.each(function(i){
var self=_4(this);
self.html(_3d8.call(this,i,self.html()));
});
}else{
this.empty().append(_3d8);
}
}
}
return this;
},replaceWith:function(_3dd){
if(this[0]&&this[0].parentNode){
if(_4.isFunction(_3dd)){
return this.each(function(i){
var self=_4(this),old=self.html();
self.replaceWith(_3dd.call(this,i,old));
});
}
if(typeof _3dd!=="string"){
_3dd=_4(_3dd).detach();
}
return this.each(function(){
var next=this.nextSibling,_3e2=this.parentNode;
_4(this).remove();
if(next){
_4(next).before(_3dd);
}else{
_4(_3e2).append(_3dd);
}
});
}else{
return this.pushStack(_4(_4.isFunction(_3dd)?_3dd():_3dd),"replaceWith",_3dd);
}
},detach:function(_3e3){
return this.remove(_3e3,true);
},domManip:function(args,_3e5,_3e6){
var _3e7,_3e8,_3e9,_3ea,_3eb=args[0],_3ec=[];
if(!_4.support.checkClone&&arguments.length===3&&typeof _3eb==="string"&&_3bc.test(_3eb)){
return this.each(function(){
_4(this).domManip(args,_3e5,_3e6,true);
});
}
if(_4.isFunction(_3eb)){
return this.each(function(i){
var self=_4(this);
args[0]=_3eb.call(this,i,_3e5?self.html():_2);
self.domManip(args,_3e5,_3e6);
});
}
if(this[0]){
_3ea=_3eb&&_3eb.parentNode;
if(_4.support.parentNode&&_3ea&&_3ea.nodeType===11&&_3ea.childNodes.length===this.length){
_3e7={fragment:_3ea};
}else{
_3e7=_4.buildFragment(args,this,_3ec);
}
_3e9=_3e7.fragment;
if(_3e9.childNodes.length===1){
_3e8=_3e9=_3e9.firstChild;
}else{
_3e8=_3e9.firstChild;
}
if(_3e8){
_3e5=_3e5&&_4.nodeName(_3e8,"tr");
for(var i=0,l=this.length,_3f1=l-1;i<l;i++){
_3e6.call(_3e5?root(this[i],_3e8):this[i],_3e7.cacheable||(l>1&&i<_3f1)?_4.clone(_3e9,true,true):_3e9);
}
}
if(_3ec.length){
_4.each(_3ec,evalScript);
}
}
return this;
}});
function root(elem,cur){
return _4.nodeName(elem,"table")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem;
};
function cloneCopyEvent(src,dest){
if(dest.nodeType!==1||!_4.hasData(src)){
return;
}
var _3f6=_4.expando,_3f7=_4.data(src),_3f8=_4.data(dest,_3f7);
if((_3f7=_3f7[_3f6])){
var _3f9=_3f7.events;
_3f8=_3f8[_3f6]=_4.extend({},_3f7);
if(_3f9){
delete _3f8.handle;
_3f8.events={};
for(var type in _3f9){
for(var i=0,l=_3f9[type].length;i<l;i++){
_4.event.add(dest,type+(_3f9[type][i].namespace?".":"")+_3f9[type][i].namespace,_3f9[type][i],_3f9[type][i].data);
}
}
}
}
};
function cloneFixAttributes(src,dest){
if(dest.nodeType!==1){
return;
}
var _3ff=dest.nodeName.toLowerCase();
dest.clearAttributes();
dest.mergeAttributes(src);
if(_3ff==="object"){
dest.outerHTML=src.outerHTML;
}else{
if(_3ff==="input"&&(src.type==="checkbox"||src.type==="radio")){
if(src.checked){
dest.defaultChecked=dest.checked=src.checked;
}
if(dest.value!==src.value){
dest.value=src.value;
}
}else{
if(_3ff==="option"){
dest.selected=src.defaultSelected;
}else{
if(_3ff==="input"||_3ff==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
}
}
dest.removeAttribute(_4.expando);
};
_4.buildFragment=function(args,_401,_402){
var _403,_404,_405,doc=(_401&&_401[0]?_401[0].ownerDocument||_401[0]:_3);
if(args.length===1&&typeof args[0]==="string"&&args[0].length<512&&doc===_3&&args[0].charAt(0)==="<"&&!_3bb.test(args[0])&&(_4.support.checkClone||!_3bc.test(args[0]))){
_404=true;
_405=_4.fragments[args[0]];
if(_405){
if(_405!==1){
_403=_405;
}
}
}
if(!_403){
_403=doc.createDocumentFragment();
_4.clean(args,doc,_403,_402);
}
if(_404){
_4.fragments[args[0]]=_405?_403:1;
}
return {fragment:_403,cacheable:_404};
};
_4.fragments={};
_4.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,_408){
_4.fn[name]=function(_409){
var ret=[],_40b=_4(_409),_40c=this.length===1&&this[0].parentNode;
if(_40c&&_40c.nodeType===11&&_40c.childNodes.length===1&&_40b.length===1){
_40b[_408](this[0]);
return this;
}else{
for(var i=0,l=_40b.length;i<l;i++){
var _40f=(i>0?this.clone(true):this).get();
_4(_40b[i])[_408](_40f);
ret=ret.concat(_40f);
}
return this.pushStack(ret,name,_40b.selector);
}
};
});
function getAll(elem){
if("getElementsByTagName" in elem){
return elem.getElementsByTagName("*");
}else{
if("querySelectorAll" in elem){
return elem.querySelectorAll("*");
}else{
return [];
}
}
};
_4.extend({clone:function(elem,_412,_413){
var _414=elem.cloneNode(true),_415,_416,i;
if((!_4.support.noCloneEvent||!_4.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!_4.isXMLDoc(elem)){
cloneFixAttributes(elem,_414);
_415=getAll(elem);
_416=getAll(_414);
for(i=0;_415[i];++i){
cloneFixAttributes(_415[i],_416[i]);
}
}
if(_412){
cloneCopyEvent(elem,_414);
if(_413){
_415=getAll(elem);
_416=getAll(_414);
for(i=0;_415[i];++i){
cloneCopyEvent(_415[i],_416[i]);
}
}
}
return _414;
},clean:function(_418,_419,_41a,_41b){
_419=_419||_3;
if(typeof _419.createElement==="undefined"){
_419=_419.ownerDocument||_419[0]&&_419[0].ownerDocument||_3;
}
var ret=[];
for(var i=0,elem;(elem=_418[i])!=null;i++){
if(typeof elem==="number"){
elem+="";
}
if(!elem){
continue;
}
if(typeof elem==="string"&&!_3ba.test(elem)){
elem=_419.createTextNode(elem);
}else{
if(typeof elem==="string"){
elem=elem.replace(_3b7,"<$1></$2>");
var tag=(_3b8.exec(elem)||["",""])[1].toLowerCase(),wrap=_3bd[tag]||_3bd._default,_421=wrap[0],div=_419.createElement("div");
div.innerHTML=wrap[1]+elem+wrap[2];
while(_421--){
div=div.lastChild;
}
if(!_4.support.tbody){
var _423=_3b9.test(elem),_424=tag==="table"&&!_423?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!_423?div.childNodes:[];
for(var j=_424.length-1;j>=0;--j){
if(_4.nodeName(_424[j],"tbody")&&!_424[j].childNodes.length){
_424[j].parentNode.removeChild(_424[j]);
}
}
}
if(!_4.support.leadingWhitespace&&_3b6.test(elem)){
div.insertBefore(_419.createTextNode(_3b6.exec(elem)[0]),div.firstChild);
}
elem=div.childNodes;
}
}
if(elem.nodeType){
ret.push(elem);
}else{
ret=_4.merge(ret,elem);
}
}
if(_41a){
for(i=0;ret[i];i++){
if(_41b&&_4.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){
_41b.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);
}else{
if(ret[i].nodeType===1){
ret.splice.apply(ret,[i+1,0].concat(_4.makeArray(ret[i].getElementsByTagName("script"))));
}
_41a.appendChild(ret[i]);
}
}
}
return ret;
},cleanData:function(_426){
var data,id,_429=_4.cache,_42a=_4.expando,_42b=_4.event.special,_42c=_4.support.deleteExpando;
for(var i=0,elem;(elem=_426[i])!=null;i++){
if(elem.nodeName&&_4.noData[elem.nodeName.toLowerCase()]){
continue;
}
id=elem[_4.expando];
if(id){
data=_429[id]&&_429[id][_42a];
if(data&&data.events){
for(var type in data.events){
if(_42b[type]){
_4.event.remove(elem,type);
}else{
_4.removeEvent(elem,type,data.handle);
}
}
if(data.handle){
data.handle.elem=null;
}
}
if(_42c){
delete elem[_4.expando];
}else{
if(elem.removeAttribute){
elem.removeAttribute(_4.expando);
}
}
delete _429[id];
}
}
}});
function evalScript(i,elem){
if(elem.src){
_4.ajax({url:elem.src,async:false,dataType:"script"});
}else{
_4.globalEval(elem.text||elem.textContent||elem.innerHTML||"");
}
if(elem.parentNode){
elem.parentNode.removeChild(elem);
}
};
var _432=/alpha\([^)]*\)/i,_433=/opacity=([^)]*)/,_434=/-([a-z])/ig,_435=/([A-Z])/g,_436=/^-?\d+(?:px)?$/i,rnum=/^-?\d/,_438={position:"absolute",visibility:"hidden",display:"block"},_439=["Left","Right"],_43a=["Top","Bottom"],_43b,_43c,_43d,_43e=function(all,_440){
return _440.toUpperCase();
};
_4.fn.css=function(name,_442){
if(arguments.length===2&&_442===_2){
return this;
}
return _4.access(this,name,_442,true,function(elem,name,_445){
return _445!==_2?_4.style(elem,name,_445):_4.css(elem,name);
});
};
_4.extend({cssHooks:{opacity:{get:function(elem,_447){
if(_447){
var ret=_43b(elem,"opacity","opacity");
return ret===""?"1":ret;
}else{
return elem.style.opacity;
}
}}},cssNumber:{"zIndex":true,"fontWeight":true,"opacity":true,"zoom":true,"lineHeight":true},cssProps:{"float":_4.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,_44b,_44c){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,_44e=_4.camelCase(name),_44f=elem.style,_450=_4.cssHooks[_44e];
name=_4.cssProps[_44e]||_44e;
if(_44b!==_2){
if(typeof _44b==="number"&&isNaN(_44b)||_44b==null){
return;
}
if(typeof _44b==="number"&&!_4.cssNumber[_44e]){
_44b+="px";
}
if(!_450||!("set" in _450)||(_44b=_450.set(elem,_44b))!==_2){
try{
_44f[name]=_44b;
}
catch(e){
}
}
}else{
if(_450&&"get" in _450&&(ret=_450.get(elem,false,_44c))!==_2){
return ret;
}
return _44f[name];
}
},css:function(elem,name,_453){
var ret,_455=_4.camelCase(name),_456=_4.cssHooks[_455];
name=_4.cssProps[_455]||_455;
if(_456&&"get" in _456&&(ret=_456.get(elem,true,_453))!==_2){
return ret;
}else{
if(_43b){
return _43b(elem,name,_455);
}
}
},swap:function(elem,_458,_459){
var old={};
for(var name in _458){
old[name]=elem.style[name];
elem.style[name]=_458[name];
}
_459.call(elem);
for(name in _458){
elem.style[name]=old[name];
}
},camelCase:function(_45c){
return _45c.replace(_434,_43e);
}});
_4.curCSS=_4.css;
_4.each(["height","width"],function(i,name){
_4.cssHooks[name]={get:function(elem,_460,_461){
var val;
if(_460){
if(elem.offsetWidth!==0){
val=getWH(elem,name,_461);
}else{
_4.swap(elem,_438,function(){
val=getWH(elem,name,_461);
});
}
if(val<=0){
val=_43b(elem,name,name);
if(val==="0px"&&_43d){
val=_43d(elem,name,name);
}
if(val!=null){
return val===""||val==="auto"?"0px":val;
}
}
if(val<0||val==null){
val=elem.style[name];
return val===""||val==="auto"?"0px":val;
}
return typeof val==="string"?val:val+"px";
}
},set:function(elem,_464){
if(_436.test(_464)){
_464=parseFloat(_464);
if(_464>=0){
return _464+"px";
}
}else{
return _464;
}
}};
});
if(!_4.support.opacity){
_4.cssHooks.opacity={get:function(elem,_466){
return _433.test((_466&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":_466?"1":"";
},set:function(elem,_468){
var _469=elem.style;
_469.zoom=1;
var _46a=_4.isNaN(_468)?"":"alpha(opacity="+_468*100+")",_46b=_469.filter||"";
_469.filter=_432.test(_46b)?_46b.replace(_432,_46a):_469.filter+" "+_46a;
}};
}
if(_3.defaultView&&_3.defaultView.getComputedStyle){
_43c=function(elem,_46d,name){
var ret,_470,_471;
name=name.replace(_435,"-$1").toLowerCase();
if(!(_470=elem.ownerDocument.defaultView)){
return _2;
}
if((_471=_470.getComputedStyle(elem,null))){
ret=_471.getPropertyValue(name);
if(ret===""&&!_4.contains(elem.ownerDocument.documentElement,elem)){
ret=_4.style(elem,name);
}
}
return ret;
};
}
if(_3.documentElement.currentStyle){
_43d=function(elem,name){
var left,ret=elem.currentStyle&&elem.currentStyle[name],_476=elem.runtimeStyle&&elem.runtimeStyle[name],_477=elem.style;
if(!_436.test(ret)&&rnum.test(ret)){
left=_477.left;
if(_476){
elem.runtimeStyle.left=elem.currentStyle.left;
}
_477.left=name==="fontSize"?"1em":(ret||0);
ret=_477.pixelLeft+"px";
_477.left=left;
if(_476){
elem.runtimeStyle.left=_476;
}
}
return ret===""?"auto":ret;
};
}
_43b=_43c||_43d;
function getWH(elem,name,_47a){
var _47b=name==="width"?_439:_43a,val=name==="width"?elem.offsetWidth:elem.offsetHeight;
if(_47a==="border"){
return val;
}
_4.each(_47b,function(){
if(!_47a){
val-=parseFloat(_4.css(elem,"padding"+this))||0;
}
if(_47a==="margin"){
val+=parseFloat(_4.css(elem,"margin"+this))||0;
}else{
val-=parseFloat(_4.css(elem,"border"+this+"Width"))||0;
}
});
return val;
};
if(_4.expr&&_4.expr.filters){
_4.expr.filters.hidden=function(elem){
var _47e=elem.offsetWidth,_47f=elem.offsetHeight;
return (_47e===0&&_47f===0)||(!_4.support.reliableHiddenOffsets&&(elem.style.display||_4.css(elem,"display"))==="none");
};
_4.expr.filters.visible=function(elem){
return !_4.expr.filters.hidden(elem);
};
}
var r20=/%20/g,_482=/\[\]$/,_483=/\r?\n/g,_484=/#.*$/,_485=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,_486=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,_487=/(?:^file|^widget|\-extension):$/,_488=/^(?:GET|HEAD)$/,_489=/^\/\//,_48a=/\?/,_48b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,_48c=/^(?:select|textarea)/i,_48d=/\s+/,rts=/([?&])_=[^&]*/,_48f=/(^|\-)([a-z])/g,_490=function(_,$1,$2){
return $1+$2.toUpperCase();
},rurl=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,_495=_4.fn.load,_496={},_497={},_498,_499;
try{
_498=_3.location.href;
}
catch(e){
_498=_3.createElement("a");
_498.href="";
_498=_498.href;
}
_499=rurl.exec(_498.toLowerCase());
function addToPrefiltersOrTransports(_49a){
return function(_49b,func){
if(typeof _49b!=="string"){
func=_49b;
_49b="*";
}
if(_4.isFunction(func)){
var _49d=_49b.toLowerCase().split(_48d),i=0,_49f=_49d.length,_4a0,list,_4a2;
for(;i<_49f;i++){
_4a0=_49d[i];
_4a2=/^\+/.test(_4a0);
if(_4a2){
_4a0=_4a0.substr(1)||"*";
}
list=_49a[_4a0]=_49a[_4a0]||[];
list[_4a2?"unshift":"push"](func);
}
}
};
};
function inspectPrefiltersOrTransports(_4a3,_4a4,_4a5,_4a6,_4a7,_4a8){
_4a7=_4a7||_4a4.dataTypes[0];
_4a8=_4a8||{};
_4a8[_4a7]=true;
var list=_4a3[_4a7],i=0,_4ab=list?list.length:0,_4ac=(_4a3===_496),_4ad;
for(;i<_4ab&&(_4ac||!_4ad);i++){
_4ad=list[i](_4a4,_4a5,_4a6);
if(typeof _4ad==="string"){
if(!_4ac||_4a8[_4ad]){
_4ad=_2;
}else{
_4a4.dataTypes.unshift(_4ad);
_4ad=inspectPrefiltersOrTransports(_4a3,_4a4,_4a5,_4a6,_4ad,_4a8);
}
}
}
if((_4ac||!_4ad)&&!_4a8["*"]){
_4ad=inspectPrefiltersOrTransports(_4a3,_4a4,_4a5,_4a6,"*",_4a8);
}
return _4ad;
};
_4.fn.extend({load:function(url,_4af,_4b0){
if(typeof url!=="string"&&_495){
return _495.apply(this,arguments);
}else{
if(!this.length){
return this;
}
}
var off=url.indexOf(" ");
if(off>=0){
var _4b2=url.slice(off,url.length);
url=url.slice(0,off);
}
var type="GET";
if(_4af){
if(_4.isFunction(_4af)){
_4b0=_4af;
_4af=_2;
}else{
if(typeof _4af==="object"){
_4af=_4.param(_4af,_4.ajaxSettings.traditional);
type="POST";
}
}
}
var self=this;
_4.ajax({url:url,type:type,dataType:"html",data:_4af,complete:function(_4b5,_4b6,_4b7){
_4b7=_4b5.responseText;
if(_4b5.isResolved()){
_4b5.done(function(r){
_4b7=r;
});
self.html(_4b2?_4("<div>").append(_4b7.replace(_48b,"")).find(_4b2):_4b7);
}
if(_4b0){
self.each(_4b0,[_4b7,_4b6,_4b5]);
}
}});
return this;
},serialize:function(){
return _4.param(this.serializeArray());
},serializeArray:function(){
return this.map(function(){
return this.elements?_4.makeArray(this.elements):this;
}).filter(function(){
return this.name&&!this.disabled&&(this.checked||_48c.test(this.nodeName)||_486.test(this.type));
}).map(function(i,elem){
var val=_4(this).val();
return val==null?null:_4.isArray(val)?_4.map(val,function(val,i){
return {name:elem.name,value:val.replace(_483,"\r\n")};
}):{name:elem.name,value:val.replace(_483,"\r\n")};
}).get();
}});
_4.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){
_4.fn[o]=function(f){
return this.bind(o,f);
};
});
_4.each(["get","post"],function(i,_4c2){
_4[_4c2]=function(url,data,_4c5,type){
if(_4.isFunction(data)){
type=type||_4c5;
_4c5=data;
data=_2;
}
return _4.ajax({type:_4c2,url:url,data:data,success:_4c5,dataType:type});
};
});
_4.extend({getScript:function(url,_4c8){
return _4.get(url,_2,_4c8,"script");
},getJSON:function(url,data,_4cb){
return _4.get(url,data,_4cb,"json");
},ajaxSetup:function(_4cc,_4cd){
if(!_4cd){
_4cd=_4cc;
_4cc=_4.extend(true,_4.ajaxSettings,_4cd);
}else{
_4.extend(true,_4cc,_4.ajaxSettings,_4cd);
}
for(var _4ce in {context:1,url:1}){
if(_4ce in _4cd){
_4cc[_4ce]=_4cd[_4ce];
}else{
if(_4ce in _4.ajaxSettings){
_4cc[_4ce]=_4.ajaxSettings[_4ce];
}
}
}
return _4cc;
},ajaxSettings:{url:_498,isLocal:_487.test(_499[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":_1.String,"text html":true,"text json":_4.parseJSON,"text xml":_4.parseXML}},ajaxPrefilter:addToPrefiltersOrTransports(_496),ajaxTransport:addToPrefiltersOrTransports(_497),ajax:function(url,_4d0){
if(typeof url==="object"){
_4d0=url;
url=_2;
}
_4d0=_4d0||{};
var s=_4.ajaxSetup({},_4d0),_4d2=s.context||s,_4d3=_4d2!==s&&(_4d2.nodeType||_4d2 instanceof _4)?_4(_4d2):_4.event,_4d4=_4.Deferred(),_4d5=_4._Deferred(),_4d6=s.statusCode||{},_4d7,_4d8={},_4d9,_4da,_4db,_4dc,_4dd,_4de=0,_4df,i,_4e1={readyState:0,setRequestHeader:function(name,_4e3){
if(!_4de){
_4d8[name.toLowerCase().replace(_48f,_490)]=_4e3;
}
return this;
},getAllResponseHeaders:function(){
return _4de===2?_4d9:null;
},getResponseHeader:function(key){
var _4e5;
if(_4de===2){
if(!_4da){
_4da={};
while((_4e5=_485.exec(_4d9))){
_4da[_4e5[1].toLowerCase()]=_4e5[2];
}
}
_4e5=_4da[key.toLowerCase()];
}
return _4e5===_2?null:_4e5;
},overrideMimeType:function(type){
if(!_4de){
s.mimeType=type;
}
return this;
},abort:function(_4e7){
_4e7=_4e7||"abort";
if(_4db){
_4db.abort(_4e7);
}
done(0,_4e7);
return this;
}};
function done(_4e8,_4e9,_4ea,_4eb){
if(_4de===2){
return;
}
_4de=2;
if(_4dc){
clearTimeout(_4dc);
}
_4db=_2;
_4d9=_4eb||"";
_4e1.readyState=_4e8?4:0;
var _4ec,_4ed,_4ee,_4ef=_4ea?ajaxHandleResponses(s,_4e1,_4ea):_2,_4f0,etag;
if(_4e8>=200&&_4e8<300||_4e8===304){
if(s.ifModified){
if((_4f0=_4e1.getResponseHeader("Last-Modified"))){
_4.lastModified[_4d7]=_4f0;
}
if((etag=_4e1.getResponseHeader("Etag"))){
_4.etag[_4d7]=etag;
}
}
if(_4e8===304){
_4e9="notmodified";
_4ec=true;
}else{
try{
_4ed=ajaxConvert(s,_4ef);
_4e9="success";
_4ec=true;
}
catch(e){
_4e9="parsererror";
_4ee=e;
}
}
}else{
_4ee=_4e9;
if(!_4e9||_4e8){
_4e9="error";
if(_4e8<0){
_4e8=0;
}
}
}
_4e1.status=_4e8;
_4e1.statusText=_4e9;
if(_4ec){
_4d4.resolveWith(_4d2,[_4ed,_4e9,_4e1]);
}else{
_4d4.rejectWith(_4d2,[_4e1,_4e9,_4ee]);
}
_4e1.statusCode(_4d6);
_4d6=_2;
if(_4df){
_4d3.trigger("ajax"+(_4ec?"Success":"Error"),[_4e1,s,_4ec?_4ed:_4ee]);
}
_4d5.resolveWith(_4d2,[_4e1,_4e9]);
if(_4df){
_4d3.trigger("ajaxComplete",[_4e1,s]);
if(!(--_4.active)){
_4.event.trigger("ajaxStop");
}
}
};
_4d4.promise(_4e1);
_4e1.success=_4e1.done;
_4e1.error=_4e1.fail;
_4e1.complete=_4d5.done;
_4e1.statusCode=function(map){
if(map){
var tmp;
if(_4de<2){
for(tmp in map){
_4d6[tmp]=[_4d6[tmp],map[tmp]];
}
}else{
tmp=map[_4e1.status];
_4e1.then(tmp,tmp);
}
}
return this;
};
s.url=((url||s.url)+"").replace(_484,"").replace(_489,_499[1]+"//");
s.dataTypes=_4.trim(s.dataType||"*").toLowerCase().split(_48d);
if(!s.crossDomain){
_4dd=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(_4dd&&(_4dd[1]!=_499[1]||_4dd[2]!=_499[2]||(_4dd[3]||(_4dd[1]==="http:"?80:443))!=(_499[3]||(_499[1]==="http:"?80:443))));
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=_4.param(s.data,s.traditional);
}
inspectPrefiltersOrTransports(_496,s,_4d0,_4e1);
if(_4de===2){
return false;
}
_4df=s.global;
s.type=s.type.toUpperCase();
s.hasContent=!_488.test(s.type);
if(_4df&&_4.active++===0){
_4.event.trigger("ajaxStart");
}
if(!s.hasContent){
if(s.data){
s.url+=(_48a.test(s.url)?"&":"?")+s.data;
}
_4d7=s.url;
if(s.cache===false){
var ts=_4.now(),ret=s.url.replace(rts,"$1_="+ts);
s.url=ret+((ret===s.url)?(_48a.test(s.url)?"&":"?")+"_="+ts:"");
}
}
if(s.data&&s.hasContent&&s.contentType!==false||_4d0.contentType){
_4d8["Content-Type"]=s.contentType;
}
if(s.ifModified){
_4d7=_4d7||s.url;
if(_4.lastModified[_4d7]){
_4d8["If-Modified-Since"]=_4.lastModified[_4d7];
}
if(_4.etag[_4d7]){
_4d8["If-None-Match"]=_4.etag[_4d7];
}
}
_4d8.Accept=s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", */*; q=0.01":""):s.accepts["*"];
for(i in s.headers){
_4e1.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&(s.beforeSend.call(_4d2,_4e1,s)===false||_4de===2)){
_4e1.abort();
return false;
}
for(i in {success:1,error:1,complete:1}){
_4e1[i](s[i]);
}
_4db=inspectPrefiltersOrTransports(_497,s,_4d0,_4e1);
if(!_4db){
done(-1,"No Transport");
}else{
_4e1.readyState=1;
if(_4df){
_4d3.trigger("ajaxSend",[_4e1,s]);
}
if(s.async&&s.timeout>0){
_4dc=setTimeout(function(){
_4e1.abort("timeout");
},s.timeout);
}
try{
_4de=1;
_4db.send(_4d8,done);
}
catch(e){
if(status<2){
done(-1,e);
}else{
_4.error(e);
}
}
}
return _4e1;
},param:function(a,_4f7){
var s=[],add=function(key,_4fb){
_4fb=_4.isFunction(_4fb)?_4fb():_4fb;
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(_4fb);
};
if(_4f7===_2){
_4f7=_4.ajaxSettings.traditional;
}
if(_4.isArray(a)||(a.jquery&&!_4.isPlainObject(a))){
_4.each(a,function(){
add(this.name,this.value);
});
}else{
for(var _4fc in a){
buildParams(_4fc,a[_4fc],_4f7,add);
}
}
return s.join("&").replace(r20,"+");
}});
function buildParams(_4fd,obj,_4ff,add){
if(_4.isArray(obj)&&obj.length){
_4.each(obj,function(i,v){
if(_4ff||_482.test(_4fd)){
add(_4fd,v);
}else{
buildParams(_4fd+"["+(typeof v==="object"||_4.isArray(v)?i:"")+"]",v,_4ff,add);
}
});
}else{
if(!_4ff&&obj!=null&&typeof obj==="object"){
if(_4.isArray(obj)||_4.isEmptyObject(obj)){
add(_4fd,"");
}else{
for(var name in obj){
buildParams(_4fd+"["+name+"]",obj[name],_4ff,add);
}
}
}else{
add(_4fd,obj);
}
}
};
_4.extend({active:0,lastModified:{},etag:{}});
function ajaxHandleResponses(s,_505,_506){
var _507=s.contents,_508=s.dataTypes,_509=s.responseFields,ct,type,_50c,_50d;
for(type in _509){
if(type in _506){
_505[_509[type]]=_506[type];
}
}
while(_508[0]==="*"){
_508.shift();
if(ct===_2){
ct=s.mimeType||_505.getResponseHeader("content-type");
}
}
if(ct){
for(type in _507){
if(_507[type]&&_507[type].test(ct)){
_508.unshift(type);
break;
}
}
}
if(_508[0] in _506){
_50c=_508[0];
}else{
for(type in _506){
if(!_508[0]||s.converters[type+" "+_508[0]]){
_50c=type;
break;
}
if(!_50d){
_50d=type;
}
}
_50c=_50c||_50d;
}
if(_50c){
if(_50c!==_508[0]){
_508.unshift(_50c);
}
return _506[_50c];
}
};
function ajaxConvert(s,_50f){
if(s.dataFilter){
_50f=s.dataFilter(_50f,s.dataType);
}
var _510=s.dataTypes,_511={},i,key,_514=_510.length,tmp,_516=_510[0],prev,_518,conv,_51a,_51b;
for(i=1;i<_514;i++){
if(i===1){
for(key in s.converters){
if(typeof key==="string"){
_511[key.toLowerCase()]=s.converters[key];
}
}
}
prev=_516;
_516=_510[i];
if(_516==="*"){
_516=prev;
}else{
if(prev!=="*"&&prev!==_516){
_518=prev+" "+_516;
conv=_511[_518]||_511["* "+_516];
if(!conv){
_51b=_2;
for(_51a in _511){
tmp=_51a.split(" ");
if(tmp[0]===prev||tmp[0]==="*"){
_51b=_511[tmp[1]+" "+_516];
if(_51b){
_51a=_511[_51a];
if(_51a===true){
conv=_51b;
}else{
if(_51b===true){
conv=_51a;
}
}
break;
}
}
}
}
if(!(conv||_51b)){
_4.error("No conversion from "+_518.replace(" "," to "));
}
if(conv!==true){
_50f=conv?conv(_50f):_51b(_51a(_50f));
}
}
}
}
return _50f;
};
var jsc=_4.now(),jsre=/(\=)\?(&|$)|()\?\?()/i;
_4.ajaxSetup({jsonp:"callback",jsonpCallback:function(){
return _4.expando+"_"+(jsc++);
}});
_4.ajaxPrefilter("json jsonp",function(s,_51f,_520){
var _521=(typeof s.data==="string");
if(s.dataTypes[0]==="jsonp"||_51f.jsonpCallback||_51f.jsonp!=null||s.jsonp!==false&&(jsre.test(s.url)||_521&&jsre.test(s.data))){
var _522,_523=s.jsonpCallback=_4.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,_524=_1[_523],url=s.url,data=s.data,_527="$1"+_523+"$2",_528=function(){
_1[_523]=_524;
if(_522&&_4.isFunction(_524)){
_1[_523](_522[0]);
}
};
if(s.jsonp!==false){
url=url.replace(jsre,_527);
if(s.url===url){
if(_521){
data=data.replace(jsre,_527);
}
if(s.data===data){
url+=(/\?/.test(url)?"&":"?")+s.jsonp+"="+_523;
}
}
}
s.url=url;
s.data=data;
_1[_523]=function(_529){
_522=[_529];
};
_520.then(_528,_528);
s.converters["script json"]=function(){
if(!_522){
_4.error(_523+" was not called");
}
return _522[0];
};
s.dataTypes[0]="json";
return "script";
}
});
_4.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){
_4.globalEval(text);
return text;
}}});
_4.ajaxPrefilter("script",function(s){
if(s.cache===_2){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
s.global=false;
}
});
_4.ajaxTransport("script",function(s){
if(s.crossDomain){
var _52d,head=_3.head||_3.getElementsByTagName("head")[0]||_3.documentElement;
return {send:function(_,_530){
_52d=_3.createElement("script");
_52d.async="async";
if(s.scriptCharset){
_52d.charset=s.scriptCharset;
}
_52d.src=s.url;
_52d.onload=_52d.onreadystatechange=function(_,_532){
if(!_52d.readyState||/loaded|complete/.test(_52d.readyState)){
_52d.onload=_52d.onreadystatechange=null;
if(head&&_52d.parentNode){
head.removeChild(_52d);
}
_52d=_2;
if(!_532){
_530(200,"success");
}
}
};
head.insertBefore(_52d,head.firstChild);
},abort:function(){
if(_52d){
_52d.onload(0,1);
}
}};
}
});
var _533=_4.now(),_534,_535;
function xhrOnUnloadAbort(){
_4(_1).unload(function(){
for(var key in _534){
_534[key](0,1);
}
});
};
function createStandardXHR(){
try{
return new _1.XMLHttpRequest();
}
catch(e){
}
};
function createActiveXHR(){
try{
return new _1.ActiveXObject("Microsoft.XMLHTTP");
}
catch(e){
}
};
_4.ajaxSettings.xhr=_1.ActiveXObject?function(){
return !this.isLocal&&createStandardXHR()||createActiveXHR();
}:createStandardXHR;
_535=_4.ajaxSettings.xhr();
_4.support.ajax=!!_535;
_4.support.cors=_535&&("withCredentials" in _535);
_535=_2;
if(_4.support.ajax){
_4.ajaxTransport(function(s){
if(!s.crossDomain||_4.support.cors){
var _538;
return {send:function(_539,_53a){
var xhr=s.xhr(),_53c,i;
if(s.username){
xhr.open(s.type,s.url,s.async,s.username,s.password);
}else{
xhr.open(s.type,s.url,s.async);
}
if(s.xhrFields){
for(i in s.xhrFields){
xhr[i]=s.xhrFields[i];
}
}
if(s.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(s.mimeType);
}
if(!(s.crossDomain&&!s.hasContent)&&!_539["X-Requested-With"]){
_539["X-Requested-With"]="XMLHttpRequest";
}
try{
for(i in _539){
xhr.setRequestHeader(i,_539[i]);
}
}
catch(_){
}
xhr.send((s.hasContent&&s.data)||null);
_538=function(_,_53f){
var _540,_541,_542,_543,xml;
try{
if(_538&&(_53f||xhr.readyState===4)){
_538=_2;
if(_53c){
xhr.onreadystatechange=_4.noop;
delete _534[_53c];
}
if(_53f){
if(xhr.readyState!==4){
xhr.abort();
}
}else{
_540=xhr.status;
_542=xhr.getAllResponseHeaders();
_543={};
xml=xhr.responseXML;
if(xml&&xml.documentElement){
_543.xml=xml;
}
_543.text=xhr.responseText;
try{
_541=xhr.statusText;
}
catch(e){
_541="";
}
if(!_540&&s.isLocal&&!s.crossDomain){
_540=_543.text?200:404;
}else{
if(_540===1223){
_540=204;
}
}
}
}
}
catch(firefoxAccessException){
if(!_53f){
_53a(-1,firefoxAccessException);
}
}
if(_543){
_53a(_540,_541,_543,_542);
}
};
if(!s.async||xhr.readyState===4){
_538();
}else{
if(!_534){
_534={};
xhrOnUnloadAbort();
}
_53c=_533++;
xhr.onreadystatechange=_534[_53c]=_538;
}
},abort:function(){
if(_538){
_538(0,1);
}
}};
}
});
}
var _545={},_546=/^(?:toggle|show|hide)$/,_547=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,_548,_549=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
_4.fn.extend({show:function(_54a,_54b,_54c){
var elem,_54e;
if(_54a||_54a===0){
return this.animate(genFx("show",3),_54a,_54b,_54c);
}else{
for(var i=0,j=this.length;i<j;i++){
elem=this[i];
_54e=elem.style.display;
if(!_4._data(elem,"olddisplay")&&_54e==="none"){
_54e=elem.style.display="";
}
if(_54e===""&&_4.css(elem,"display")==="none"){
_4._data(elem,"olddisplay",defaultDisplay(elem.nodeName));
}
}
for(i=0;i<j;i++){
elem=this[i];
_54e=elem.style.display;
if(_54e===""||_54e==="none"){
elem.style.display=_4._data(elem,"olddisplay")||"";
}
}
return this;
}
},hide:function(_551,_552,_553){
if(_551||_551===0){
return this.animate(genFx("hide",3),_551,_552,_553);
}else{
for(var i=0,j=this.length;i<j;i++){
var _556=_4.css(this[i],"display");
if(_556!=="none"&&!_4._data(this[i],"olddisplay")){
_4._data(this[i],"olddisplay",_556);
}
}
for(i=0;i<j;i++){
this[i].style.display="none";
}
return this;
}
},_toggle:_4.fn.toggle,toggle:function(fn,fn2,_559){
var bool=typeof fn==="boolean";
if(_4.isFunction(fn)&&_4.isFunction(fn2)){
this._toggle.apply(this,arguments);
}else{
if(fn==null||bool){
this.each(function(){
var _55b=bool?fn:_4(this).is(":hidden");
_4(this)[_55b?"show":"hide"]();
});
}else{
this.animate(genFx("toggle",3),fn,fn2,_559);
}
}
return this;
},fadeTo:function(_55c,to,_55e,_55f){
return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},_55c,_55e,_55f);
},animate:function(prop,_561,_562,_563){
var _564=_4.speed(_561,_562,_563);
if(_4.isEmptyObject(prop)){
return this.each(_564.complete);
}
return this[_564.queue===false?"each":"queue"](function(){
var opt=_4.extend({},_564),p,_567=this.nodeType===1,_568=_567&&_4(this).is(":hidden"),self=this;
for(p in prop){
var name=_4.camelCase(p);
if(p!==name){
prop[name]=prop[p];
delete prop[p];
p=name;
}
if(prop[p]==="hide"&&_568||prop[p]==="show"&&!_568){
return opt.complete.call(this);
}
if(_567&&(p==="height"||p==="width")){
opt.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(_4.css(this,"display")==="inline"&&_4.css(this,"float")==="none"){
if(!_4.support.inlineBlockNeedsLayout){
this.style.display="inline-block";
}else{
var _56b=defaultDisplay(this.nodeName);
if(_56b==="inline"){
this.style.display="inline-block";
}else{
this.style.display="inline";
this.style.zoom=1;
}
}
}
}
if(_4.isArray(prop[p])){
(opt.specialEasing=opt.specialEasing||{})[p]=prop[p][1];
prop[p]=prop[p][0];
}
}
if(opt.overflow!=null){
this.style.overflow="hidden";
}
opt.curAnim=_4.extend({},prop);
_4.each(prop,function(name,val){
var e=new _4.fx(self,opt,name);
if(_546.test(val)){
e[val==="toggle"?_568?"show":"hide":val](prop);
}else{
var _56f=_547.exec(val),_570=e.cur();
if(_56f){
var end=parseFloat(_56f[2]),unit=_56f[3]||(_4.cssNumber[name]?"":"px");
if(unit!=="px"){
_4.style(self,name,(end||1)+unit);
_570=((end||1)/e.cur())*_570;
_4.style(self,name,_570+unit);
}
if(_56f[1]){
end=((_56f[1]==="-="?-1:1)*end)+_570;
}
e.custom(_570,end,unit);
}else{
e.custom(_570,val,"");
}
}
});
return true;
});
},stop:function(_573,_574){
var _575=_4.timers;
if(_573){
this.queue([]);
}
this.each(function(){
for(var i=_575.length-1;i>=0;i--){
if(_575[i].elem===this){
if(_574){
_575[i](true);
}
_575.splice(i,1);
}
}
});
if(!_574){
this.dequeue();
}
return this;
}});
function genFx(type,num){
var obj={};
_4.each(_549.concat.apply([],_549.slice(0,num)),function(){
obj[this]=type;
});
return obj;
};
_4.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,_57b){
_4.fn[name]=function(_57c,_57d,_57e){
return this.animate(_57b,_57c,_57d,_57e);
};
});
_4.extend({speed:function(_57f,_580,fn){
var opt=_57f&&typeof _57f==="object"?_4.extend({},_57f):{complete:fn||!fn&&_580||_4.isFunction(_57f)&&_57f,duration:_57f,easing:fn&&_580||_580&&!_4.isFunction(_580)&&_580};
opt.duration=_4.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in _4.fx.speeds?_4.fx.speeds[opt.duration]:_4.fx.speeds._default;
opt.old=opt.complete;
opt.complete=function(){
if(opt.queue!==false){
_4(this).dequeue();
}
if(_4.isFunction(opt.old)){
opt.old.call(this);
}
};
return opt;
},easing:{linear:function(p,n,_585,diff){
return _585+diff*p;
},swing:function(p,n,_589,diff){
return ((-Math.cos(p*Math.PI)/2)+0.5)*diff+_589;
}},timers:[],fx:function(elem,_58c,prop){
this.options=_58c;
this.elem=elem;
this.prop=prop;
if(!_58c.orig){
_58c.orig={};
}
}});
_4.fx.prototype={update:function(){
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
(_4.fx.step[this.prop]||_4.fx.step._default)(this);
},cur:function(){
if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){
return this.elem[this.prop];
}
var _58e,r=_4.css(this.elem,this.prop);
return isNaN(_58e=parseFloat(r))?!r||r==="auto"?0:r:_58e;
},custom:function(from,to,unit){
var self=this,fx=_4.fx;
this.startTime=_4.now();
this.start=from;
this.end=to;
this.unit=unit||this.unit||(_4.cssNumber[this.prop]?"":"px");
this.now=this.start;
this.pos=this.state=0;
function t(_595){
return self.step(_595);
};
t.elem=this.elem;
if(t()&&_4.timers.push(t)&&!_548){
_548=setInterval(fx.tick,fx.interval);
}
},show:function(){
this.options.orig[this.prop]=_4.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
_4(this.elem).show();
},hide:function(){
this.options.orig[this.prop]=_4.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0);
},step:function(_596){
var t=_4.now(),done=true;
if(_596||t>=this.options.duration+this.startTime){
this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(var i in this.options.curAnim){
if(this.options.curAnim[i]!==true){
done=false;
}
}
if(done){
if(this.options.overflow!=null&&!_4.support.shrinkWrapBlocks){
var elem=this.elem,_59b=this.options;
_4.each(["","X","Y"],function(_59c,_59d){
elem.style["overflow"+_59d]=_59b.overflow[_59c];
});
}
if(this.options.hide){
_4(this.elem).hide();
}
if(this.options.hide||this.options.show){
for(var p in this.options.curAnim){
_4.style(this.elem,p,this.options.orig[p]);
}
}
this.options.complete.call(this.elem);
}
return false;
}else{
var n=t-this.startTime;
this.state=n/this.options.duration;
var _5a0=this.options.specialEasing&&this.options.specialEasing[this.prop];
var _5a1=this.options.easing||(_4.easing.swing?"swing":"linear");
this.pos=_4.easing[_5a0||_5a1](this.state,n,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update();
}
return true;
}};
_4.extend(_4.fx,{tick:function(){
var _5a2=_4.timers;
for(var i=0;i<_5a2.length;i++){
if(!_5a2[i]()){
_5a2.splice(i--,1);
}
}
if(!_5a2.length){
_4.fx.stop();
}
},interval:13,stop:function(){
clearInterval(_548);
_548=null;
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){
_4.style(fx.elem,"opacity",fx.now);
},_default:function(fx){
if(fx.elem.style&&fx.elem.style[fx.prop]!=null){
fx.elem.style[fx.prop]=(fx.prop==="width"||fx.prop==="height"?Math.max(0,fx.now):fx.now)+fx.unit;
}else{
fx.elem[fx.prop]=fx.now;
}
}}});
if(_4.expr&&_4.expr.filters){
_4.expr.filters.animated=function(elem){
return _4.grep(_4.timers,function(fn){
return elem===fn.elem;
}).length;
};
}
function defaultDisplay(_5a8){
if(!_545[_5a8]){
var elem=_4("<"+_5a8+">").appendTo("body"),_5aa=elem.css("display");
elem.remove();
if(_5aa==="none"||_5aa===""){
_5aa="block";
}
_545[_5a8]=_5aa;
}
return _545[_5a8];
};
var _5ab=/^t(?:able|d|h)$/i,_5ac=/^(?:body|html)$/i;
if("getBoundingClientRect" in _3.documentElement){
_4.fn.offset=function(_5ad){
var elem=this[0],box;
if(_5ad){
return this.each(function(i){
_4.offset.setOffset(this,_5ad,i);
});
}
if(!elem||!elem.ownerDocument){
return null;
}
if(elem===elem.ownerDocument.body){
return _4.offset.bodyOffset(elem);
}
try{
box=elem.getBoundingClientRect();
}
catch(e){
}
var doc=elem.ownerDocument,_5b2=doc.documentElement;
if(!box||!_4.contains(_5b2,elem)){
return box?{top:box.top,left:box.left}:{top:0,left:0};
}
var body=doc.body,win=getWindow(doc),_5b5=_5b2.clientTop||body.clientTop||0,_5b6=_5b2.clientLeft||body.clientLeft||0,_5b7=(win.pageYOffset||_4.support.boxModel&&_5b2.scrollTop||body.scrollTop),_5b8=(win.pageXOffset||_4.support.boxModel&&_5b2.scrollLeft||body.scrollLeft),top=box.top+_5b7-_5b5,left=box.left+_5b8-_5b6;
return {top:top,left:left};
};
}else{
_4.fn.offset=function(_5bb){
var elem=this[0];
if(_5bb){
return this.each(function(i){
_4.offset.setOffset(this,_5bb,i);
});
}
if(!elem||!elem.ownerDocument){
return null;
}
if(elem===elem.ownerDocument.body){
return _4.offset.bodyOffset(elem);
}
_4.offset.initialize();
var _5be,_5bf=elem.offsetParent,_5c0=elem,doc=elem.ownerDocument,_5c2=doc.documentElement,body=doc.body,_5c4=doc.defaultView,_5c5=_5c4?_5c4.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;
while((elem=elem.parentNode)&&elem!==body&&elem!==_5c2){
if(_4.offset.supportsFixedPosition&&_5c5.position==="fixed"){
break;
}
_5be=_5c4?_5c4.getComputedStyle(elem,null):elem.currentStyle;
top-=elem.scrollTop;
left-=elem.scrollLeft;
if(elem===_5bf){
top+=elem.offsetTop;
left+=elem.offsetLeft;
if(_4.offset.doesNotAddBorder&&!(_4.offset.doesAddBorderForTableAndCells&&_5ab.test(elem.nodeName))){
top+=parseFloat(_5be.borderTopWidth)||0;
left+=parseFloat(_5be.borderLeftWidth)||0;
}
_5c0=_5bf;
_5bf=elem.offsetParent;
}
if(_4.offset.subtractsBorderForOverflowNotVisible&&_5be.overflow!=="visible"){
top+=parseFloat(_5be.borderTopWidth)||0;
left+=parseFloat(_5be.borderLeftWidth)||0;
}
_5c5=_5be;
}
if(_5c5.position==="relative"||_5c5.position==="static"){
top+=body.offsetTop;
left+=body.offsetLeft;
}
if(_4.offset.supportsFixedPosition&&_5c5.position==="fixed"){
top+=Math.max(_5c2.scrollTop,body.scrollTop);
left+=Math.max(_5c2.scrollLeft,body.scrollLeft);
}
return {top:top,left:left};
};
}
_4.offset={initialize:function(){
var body=_3.body,_5c9=_3.createElement("div"),_5ca,_5cb,_5cc,td,_5ce=parseFloat(_4.css(body,"marginTop"))||0,html="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
_4.extend(_5c9.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
_5c9.innerHTML=html;
body.insertBefore(_5c9,body.firstChild);
_5ca=_5c9.firstChild;
_5cb=_5ca.firstChild;
td=_5ca.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(_5cb.offsetTop!==5);
this.doesAddBorderForTableAndCells=(td.offsetTop===5);
_5cb.style.position="fixed";
_5cb.style.top="20px";
this.supportsFixedPosition=(_5cb.offsetTop===20||_5cb.offsetTop===15);
_5cb.style.position=_5cb.style.top="";
_5ca.style.overflow="hidden";
_5ca.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(_5cb.offsetTop===-5);
this.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==_5ce);
body.removeChild(_5c9);
body=_5c9=_5ca=_5cb=_5cc=td=null;
_4.offset.initialize=_4.noop;
},bodyOffset:function(body){
var top=body.offsetTop,left=body.offsetLeft;
_4.offset.initialize();
if(_4.offset.doesNotIncludeMarginInBodyOffset){
top+=parseFloat(_4.css(body,"marginTop"))||0;
left+=parseFloat(_4.css(body,"marginLeft"))||0;
}
return {top:top,left:left};
},setOffset:function(elem,_5d4,i){
var _5d6=_4.css(elem,"position");
if(_5d6==="static"){
elem.style.position="relative";
}
var _5d7=_4(elem),_5d8=_5d7.offset(),_5d9=_4.css(elem,"top"),_5da=_4.css(elem,"left"),_5db=(_5d6==="absolute"&&_4.inArray("auto",[_5d9,_5da])>-1),_5dc={},_5dd={},_5de,_5df;
if(_5db){
_5dd=_5d7.position();
}
_5de=_5db?_5dd.top:parseInt(_5d9,10)||0;
_5df=_5db?_5dd.left:parseInt(_5da,10)||0;
if(_4.isFunction(_5d4)){
_5d4=_5d4.call(elem,i,_5d8);
}
if(_5d4.top!=null){
_5dc.top=(_5d4.top-_5d8.top)+_5de;
}
if(_5d4.left!=null){
_5dc.left=(_5d4.left-_5d8.left)+_5df;
}
if("using" in _5d4){
_5d4.using.call(elem,_5dc);
}else{
_5d7.css(_5dc);
}
}};
_4.fn.extend({position:function(){
if(!this[0]){
return null;
}
var elem=this[0],_5e1=this.offsetParent(),_5e2=this.offset(),_5e3=_5ac.test(_5e1[0].nodeName)?{top:0,left:0}:_5e1.offset();
_5e2.top-=parseFloat(_4.css(elem,"marginTop"))||0;
_5e2.left-=parseFloat(_4.css(elem,"marginLeft"))||0;
_5e3.top+=parseFloat(_4.css(_5e1[0],"borderTopWidth"))||0;
_5e3.left+=parseFloat(_4.css(_5e1[0],"borderLeftWidth"))||0;
return {top:_5e2.top-_5e3.top,left:_5e2.left-_5e3.left};
},offsetParent:function(){
return this.map(function(){
var _5e4=this.offsetParent||_3.body;
while(_5e4&&(!_5ac.test(_5e4.nodeName)&&_4.css(_5e4,"position")==="static")){
_5e4=_5e4.offsetParent;
}
return _5e4;
});
}});
_4.each(["Left","Top"],function(i,name){
var _5e7="scroll"+name;
_4.fn[_5e7]=function(val){
var elem=this[0],win;
if(!elem){
return null;
}
if(val!==_2){
return this.each(function(){
win=getWindow(this);
if(win){
win.scrollTo(!i?val:_4(win).scrollLeft(),i?val:_4(win).scrollTop());
}else{
this[_5e7]=val;
}
});
}else{
win=getWindow(elem);
return win?("pageXOffset" in win)?win[i?"pageYOffset":"pageXOffset"]:_4.support.boxModel&&win.document.documentElement[_5e7]||win.document.body[_5e7]:elem[_5e7];
}
};
});
function getWindow(elem){
return _4.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;
};
_4.each(["Height","Width"],function(i,name){
var type=name.toLowerCase();
_4.fn["inner"+name]=function(){
return this[0]?parseFloat(_4.css(this[0],type,"padding")):null;
};
_4.fn["outer"+name]=function(_5ef){
return this[0]?parseFloat(_4.css(this[0],type,_5ef?"margin":"border")):null;
};
_4.fn[type]=function(size){
var elem=this[0];
if(!elem){
return size==null?null:this;
}
if(_4.isFunction(size)){
return this.each(function(i){
var self=_4(this);
self[type](size.call(this,i,self[type]()));
});
}
if(_4.isWindow(elem)){
var _5f4=elem.document.documentElement["client"+name];
return elem.document.compatMode==="CSS1Compat"&&_5f4||elem.document.body["client"+name]||_5f4;
}else{
if(elem.nodeType===9){
return Math.max(elem.documentElement["client"+name],elem.body["scroll"+name],elem.documentElement["scroll"+name],elem.body["offset"+name],elem.documentElement["offset"+name]);
}else{
if(size===_2){
var orig=_4.css(elem,type),ret=parseFloat(orig);
return _4.isNaN(ret)?orig:ret;
}else{
return this.css(type,typeof size==="string"?size:size+"px");
}
}
}
};
});
_1.jQuery=_1.$=_4;
})(window);
jq=$.noConflict();
var Prototype={Version:"1.5.0",BrowserFeatures:{XPath:!!document.evaluate},ScriptFragment:"(?:<script.*?>)((\n|\r|.)*?)(?:</script>)",emptyFunction:function(){
},K:function(x){
return x;
}};
var Class={create:function(){
return function(){
this.initialize.apply(this,arguments);
};
}};
var Abstract=new Object();
Object.extend=function(_5f8,_5f9){
for(var _5fa in _5f9){
_5f8[_5fa]=_5f9[_5fa];
}
return _5f8;
};
Object.extend(Object,{inspect:function(_5fb){
try{
if(_5fb===undefined){
return "undefined";
}
if(_5fb===null){
return "null";
}
return _5fb.inspect?_5fb.inspect():_5fb.toString();
}
catch(e){
if(e instanceof RangeError){
return "...";
}
throw e;
}
},keys:function(_5fc){
var keys=[];
for(var _5fe in _5fc){
keys.push(_5fe);
}
return keys;
},values:function(_5ff){
var _600=[];
for(var _601 in _5ff){
_600.push(_5ff[_601]);
}
return _600;
},clone:function(_602){
return Object.extend({},_602);
}});
Function.prototype.bind=function(){
var _603=this,args=$A(arguments),_605=args.shift();
return function(){
return _603.apply(_605,args.concat($A(arguments)));
};
};
Function.prototype.bindAsEventListener=function(_606){
var _607=this,args=$A(arguments),_606=args.shift();
return function(_609){
return _607.apply(_606,[(_609||window.event)].concat(args).concat($A(arguments)));
};
};
Object.extend(Number.prototype,{toColorPart:function(){
var _60a=this.toString(16);
if(this<16){
return "0"+_60a;
}
return _60a;
},succ:function(){
return this+1;
},times:function(_60b){
$R(0,this,true).each(_60b);
return this;
}});
var Try={these:function(){
var _60c;
for(var i=0,_60e=arguments.length;i<_60e;i++){
var _60f=arguments[i];
try{
_60c=_60f();
break;
}
catch(e){
}
}
return _60c;
}};
var PeriodicalExecuter=Class.create();
PeriodicalExecuter.prototype={initialize:function(_610,_611){
this.callback=_610;
this.frequency=_611;
this.currentlyExecuting=false;
this.registerCallback();
},registerCallback:function(){
this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000);
},stop:function(){
if(!this.timer){
return;
}
clearInterval(this.timer);
this.timer=null;
},onTimerEvent:function(){
if(!this.currentlyExecuting){
try{
this.currentlyExecuting=true;
this.callback(this);
}
finally{
this.currentlyExecuting=false;
}
}
}};
String.interpret=function(_612){
return _612==null?"":String(_612);
};
Object.extend(String.prototype,{gsub:function(_613,_614){
var _615="",_616=this,_617;
_614=arguments.callee.prepareReplacement(_614);
while(_616.length>0){
if(_617=_616.match(_613)){
_615+=_616.slice(0,_617.index);
_615+=String.interpret(_614(_617));
_616=_616.slice(_617.index+_617[0].length);
}else{
_615+=_616,_616="";
}
}
return _615;
},sub:function(_618,_619,_61a){
_619=this.gsub.prepareReplacement(_619);
_61a=_61a===undefined?1:_61a;
return this.gsub(_618,function(_61b){
if(--_61a<0){
return _61b[0];
}
return _619(_61b);
});
},scan:function(_61c,_61d){
this.gsub(_61c,_61d);
return this;
},truncate:function(_61e,_61f){
_61e=_61e||30;
_61f=_61f===undefined?"...":_61f;
return this.length>_61e?this.slice(0,_61e-_61f.length)+_61f:this;
},strip:function(){
return this.replace(/^\s+/,"").replace(/\s+$/,"");
},stripTags:function(){
return this.replace(/<\/?[^>]+>/gi,"");
},stripScripts:function(){
return this.replace(new RegExp(Prototype.ScriptFragment,"img"),"");
},extractScripts:function(){
var _620=new RegExp(Prototype.ScriptFragment,"img");
var _621=new RegExp(Prototype.ScriptFragment,"im");
return (this.match(_620)||[]).map(function(_622){
return (_622.match(_621)||["",""])[1];
});
},evalScripts:function(){
return this.extractScripts().map(function(_623){
return eval(_623);
});
},escapeHTML:function(){
var div=document.createElement("div");
var text=document.createTextNode(this);
div.appendChild(text);
return div.innerHTML;
},unescapeHTML:function(){
var div=document.createElement("div");
div.innerHTML=this.stripTags();
return div.childNodes[0]?(div.childNodes.length>1?$A(div.childNodes).inject("",function(memo,node){
return memo+node.nodeValue;
}):div.childNodes[0].nodeValue):"";
},toQueryParams:function(_629){
var _62a=this.strip().match(/([^?#]*)(#.*)?$/);
if(!_62a){
return {};
}
return _62a[1].split(_629||"&").inject({},function(hash,pair){
if((pair=pair.split("="))[0]){
var name=decodeURIComponent(pair[0]);
var _62e=pair[1]?decodeURIComponent(pair[1]):undefined;
if(hash[name]!==undefined){
if(hash[name].constructor!=Array){
hash[name]=[hash[name]];
}
if(_62e){
hash[name].push(_62e);
}
}else{
hash[name]=_62e;
}
}
return hash;
});
},toArray:function(){
return this.split("");
},succ:function(){
return this.slice(0,this.length-1)+String.fromCharCode(this.charCodeAt(this.length-1)+1);
},camelize:function(){
var _62f=this.split("-"),len=_62f.length;
if(len==1){
return _62f[0];
}
var _631=this.charAt(0)=="-"?_62f[0].charAt(0).toUpperCase()+_62f[0].substring(1):_62f[0];
for(var i=1;i<len;i++){
_631+=_62f[i].charAt(0).toUpperCase()+_62f[i].substring(1);
}
return _631;
},capitalize:function(){
return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase();
},underscore:function(){
return this.gsub(/::/,"/").gsub(/([A-Z]+)([A-Z][a-z])/,"#{1}_#{2}").gsub(/([a-z\d])([A-Z])/,"#{1}_#{2}").gsub(/-/,"_").toLowerCase();
},dasherize:function(){
return this.gsub(/_/,"-");
},inspect:function(_633){
var _634=this.replace(/\\/g,"\\\\");
if(_633){
return "\""+_634.replace(/"/g,"\\\"")+"\"";
}else{
return "'"+_634.replace(/'/g,"\\'")+"'";
}
}});
String.prototype.gsub.prepareReplacement=function(_635){
if(typeof _635=="function"){
return _635;
}
var _636=new Template(_635);
return function(_637){
return _636.evaluate(_637);
};
};
String.prototype.parseQuery=String.prototype.toQueryParams;
var Template=Class.create();
Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;
Template.prototype={initialize:function(_638,_639){
this.template=_638.toString();
this.pattern=_639||Template.Pattern;
},evaluate:function(_63a){
return this.template.gsub(this.pattern,function(_63b){
var _63c=_63b[1];
if(_63c=="\\"){
return _63b[2];
}
return _63c+String.interpret(_63a[_63b[3]]);
});
}};
var $break=new Object();
var $continue=new Object();
var Enumerable={each:function(_63d){
var _63e=0;
try{
this._each(function(_63f){
try{
_63d(_63f,_63e++);
}
catch(e){
if(e!=$continue){
throw e;
}
}
});
}
catch(e){
if(e!=$break){
throw e;
}
}
return this;
},eachSlice:function(_640,_641){
var _642=-_640,_643=[],_644=this.toArray();
while((_642+=_640)<_644.length){
_643.push(_644.slice(_642,_642+_640));
}
return _643.map(_641);
},all:function(_645){
var _646=true;
this.each(function(_647,_648){
_646=_646&&!!(_645||Prototype.K)(_647,_648);
if(!_646){
throw $break;
}
});
return _646;
},any:function(_649){
var _64a=false;
this.each(function(_64b,_64c){
if(_64a=!!(_649||Prototype.K)(_64b,_64c)){
throw $break;
}
});
return _64a;
},collect:function(_64d){
var _64e=[];
this.each(function(_64f,_650){
_64e.push((_64d||Prototype.K)(_64f,_650));
});
return _64e;
},detect:function(_651){
var _652;
this.each(function(_653,_654){
if(_651(_653,_654)){
_652=_653;
throw $break;
}
});
return _652;
},findAll:function(_655){
var _656=[];
this.each(function(_657,_658){
if(_655(_657,_658)){
_656.push(_657);
}
});
return _656;
},grep:function(_659,_65a){
var _65b=[];
this.each(function(_65c,_65d){
var _65e=_65c.toString();
if(_65e.match(_659)){
_65b.push((_65a||Prototype.K)(_65c,_65d));
}
});
return _65b;
},include:function(_65f){
var _660=false;
this.each(function(_661){
if(_661==_65f){
_660=true;
throw $break;
}
});
return _660;
},inGroupsOf:function(_662,_663){
_663=_663===undefined?null:_663;
return this.eachSlice(_662,function(_664){
while(_664.length<_662){
_664.push(_663);
}
return _664;
});
},inject:function(memo,_666){
this.each(function(_667,_668){
memo=_666(memo,_667,_668);
});
return memo;
},invoke:function(_669){
var args=$A(arguments).slice(1);
return this.map(function(_66b){
return _66b[_669].apply(_66b,args);
});
},max:function(_66c){
var _66d;
this.each(function(_66e,_66f){
_66e=(_66c||Prototype.K)(_66e,_66f);
if(_66d==undefined||_66e>=_66d){
_66d=_66e;
}
});
return _66d;
},min:function(_670){
var _671;
this.each(function(_672,_673){
_672=(_670||Prototype.K)(_672,_673);
if(_671==undefined||_672<_671){
_671=_672;
}
});
return _671;
},partition:function(_674){
var _675=[],_676=[];
this.each(function(_677,_678){
((_674||Prototype.K)(_677,_678)?_675:_676).push(_677);
});
return [_675,_676];
},pluck:function(_679){
var _67a=[];
this.each(function(_67b,_67c){
_67a.push(_67b[_679]);
});
return _67a;
},reject:function(_67d){
var _67e=[];
this.each(function(_67f,_680){
if(!_67d(_67f,_680)){
_67e.push(_67f);
}
});
return _67e;
},sortBy:function(_681){
return this.map(function(_682,_683){
return {value:_682,criteria:_681(_682,_683)};
}).sort(function(left,_685){
var a=left.criteria,b=_685.criteria;
return a<b?-1:a>b?1:0;
}).pluck("value");
},toArray:function(){
return this.map();
},zip:function(){
var _688=Prototype.K,args=$A(arguments);
if(typeof args.last()=="function"){
_688=args.pop();
}
var _68a=[this].concat(args).map($A);
return this.map(function(_68b,_68c){
return _688(_68a.pluck(_68c));
});
},size:function(){
return this.toArray().length;
},inspect:function(){
return "#<Enumerable:"+this.toArray().inspect()+">";
}};
Object.extend(Enumerable,{map:Enumerable.collect,find:Enumerable.detect,select:Enumerable.findAll,member:Enumerable.include,entries:Enumerable.toArray});
var $A=Array.from=function(_68d){
if(!_68d){
return [];
}
if(_68d.toArray){
return _68d.toArray();
}else{
var _68e=[];
for(var i=0,_690=_68d.length;i<_690;i++){
_68e.push(_68d[i]);
}
return _68e;
}
};
Object.extend(Array.prototype,Enumerable);
if(!Array.prototype._reverse){
Array.prototype._reverse=Array.prototype.reverse;
}
Object.extend(Array.prototype,{_each:function(_691){
for(var i=0,_693=this.length;i<_693;i++){
_691(this[i]);
}
},clear:function(){
this.length=0;
return this;
},first:function(){
return this[0];
},last:function(){
return this[this.length-1];
},compact:function(){
return this.select(function(_694){
return _694!=null;
});
},flatten:function(){
return this.inject([],function(_695,_696){
return _695.concat(_696&&_696.constructor==Array?_696.flatten():[_696]);
});
},without:function(){
var _697=$A(arguments);
return this.select(function(_698){
return !_697.include(_698);
});
},indexOf:function(_699){
for(var i=0,_69b=this.length;i<_69b;i++){
if(this[i]==_699){
return i;
}
}
return -1;
},reverse:function(_69c){
return (_69c!==false?this:this.toArray())._reverse();
},reduce:function(){
return this.length>1?this:this[0];
},uniq:function(){
return this.inject([],function(_69d,_69e){
return _69d.include(_69e)?_69d:_69d.concat([_69e]);
});
},clone:function(){
return [].concat(this);
},size:function(){
return this.length;
},inspect:function(){
return "["+this.map(Object.inspect).join(", ")+"]";
}});
Array.prototype.toArray=Array.prototype.clone;
function $w(_69f){
_69f=_69f.strip();
return _69f?_69f.split(/\s+/):[];
};
if(window.opera){
Array.prototype.concat=function(){
var _6a0=[];
for(var i=0,_6a2=this.length;i<_6a2;i++){
_6a0.push(this[i]);
}
for(var i=0,_6a2=arguments.length;i<_6a2;i++){
if(arguments[i].constructor==Array){
for(var j=0,_6a4=arguments[i].length;j<_6a4;j++){
_6a0.push(arguments[i][j]);
}
}else{
_6a0.push(arguments[i]);
}
}
return _6a0;
};
}
Prototype.Hash=function(obj){
Object.extend(this,obj||{});
};
Object.extend(Prototype.Hash,{toQueryString:function(obj){
var _6a7=[];
this.prototype._each.call(obj,function(pair){
if(!pair.key){
return;
}
if(pair.value&&pair.value.constructor==Array){
var _6a9=pair.value.compact();
if(_6a9.length<2){
pair.value=_6a9.reduce();
}else{
key=encodeURIComponent(pair.key);
_6a9.each(function(_6aa){
_6aa=_6aa!=undefined?encodeURIComponent(_6aa):"";
_6a7.push(key+"="+encodeURIComponent(_6aa));
});
return;
}
}
if(pair.value==undefined){
pair[1]="";
}
_6a7.push(pair.map(encodeURIComponent).join("="));
});
return _6a7.join("&");
}});
Object.extend(Prototype.Hash.prototype,Enumerable);
Object.extend(Prototype.Hash.prototype,{_each:function(_6ab){
for(var key in this){
var _6ad=this[key];
if(_6ad&&_6ad==Prototype.Hash.prototype[key]){
continue;
}
var pair=[key,_6ad];
pair.key=key;
pair.value=_6ad;
_6ab(pair);
}
},keys:function(){
return this.pluck("key");
},values:function(){
return this.pluck("value");
},merge:function(hash){
return $H(hash).inject(this,function(_6b0,pair){
_6b0[pair.key]=pair.value;
return _6b0;
});
},remove:function(){
var _6b2;
for(var i=0,_6b4=arguments.length;i<_6b4;i++){
var _6b5=this[arguments[i]];
if(_6b5!==undefined){
if(_6b2===undefined){
_6b2=_6b5;
}else{
if(_6b2.constructor!=Array){
_6b2=[_6b2];
}
_6b2.push(_6b5);
}
}
delete this[arguments[i]];
}
return _6b2;
},toQueryString:function(){
return Prototype.Hash.toQueryString(this);
},inspect:function(){
return "#<Prototype.Hash:{"+this.map(function(pair){
return pair.map(Object.inspect).join(": ");
}).join(", ")+"}>";
}});
function $H(_6b7){
if(_6b7&&_6b7.constructor==Prototype.Hash){
return _6b7;
}
return new Prototype.Hash(_6b7);
};
ObjectRange=Class.create();
Object.extend(ObjectRange.prototype,Enumerable);
Object.extend(ObjectRange.prototype,{initialize:function(_6b8,end,_6ba){
this.start=_6b8;
this.end=end;
this.exclusive=_6ba;
},_each:function(_6bb){
var _6bc=this.start;
while(this.include(_6bc)){
_6bb(_6bc);
_6bc=_6bc.succ();
}
},include:function(_6bd){
if(_6bd<this.start){
return false;
}
if(this.exclusive){
return _6bd<this.end;
}
return _6bd<=this.end;
}});
var $R=function(_6be,end,_6c0){
return new ObjectRange(_6be,end,_6c0);
};
var Ajax={getTransport:function(){
return Try.these(function(){
return new XMLHttpRequest();
},function(){
return new ActiveXObject("Msxml2.XMLHTTP");
},function(){
return new ActiveXObject("Microsoft.XMLHTTP");
})||false;
},activeRequestCount:0};
Ajax.Responders={responders:[],_each:function(_6c1){
this.responders._each(_6c1);
},register:function(_6c2){
if(!this.include(_6c2)){
this.responders.push(_6c2);
}
},unregister:function(_6c3){
this.responders=this.responders.without(_6c3);
},dispatch:function(_6c4,_6c5,_6c6,json){
this.each(function(_6c8){
if(typeof _6c8[_6c4]=="function"){
try{
_6c8[_6c4].apply(_6c8,[_6c5,_6c6,json]);
}
catch(e){
}
}
});
}};
Object.extend(Ajax.Responders,Enumerable);
Ajax.Responders.register({onCreate:function(){
Ajax.activeRequestCount++;
},onComplete:function(){
Ajax.activeRequestCount--;
}});
Ajax.Base=function(){
};
Ajax.Base.prototype={setOptions:function(_6c9){
this.options={method:"post",asynchronous:true,contentType:"application/x-www-form-urlencoded",encoding:"UTF-8",parameters:""};
Object.extend(this.options,_6c9||{});
this.options.method=this.options.method.toLowerCase();
if(typeof this.options.parameters=="string"){
this.options.parameters=this.options.parameters.toQueryParams();
}
}};
Ajax.Request=Class.create();
Ajax.Request.Events=["Uninitialized","Loading","Loaded","Interactive","Complete"];
Ajax.Request.prototype=Object.extend(new Ajax.Base(),{_complete:false,initialize:function(url,_6cb){
this.transport=Ajax.getTransport();
this.setOptions(_6cb);
this.request(url);
},request:function(url){
this.url=url;
this.method=this.options.method;
var _6cd=this.options.parameters;
if(!["get","post"].include(this.method)){
_6cd["_method"]=this.method;
this.method="post";
}
_6cd=Prototype.Hash.toQueryString(_6cd);
if(_6cd&&/Konqueror|Safari|KHTML/.test(navigator.userAgent)){
_6cd+="&_=";
}
if(this.method=="get"&&_6cd){
this.url+=(this.url.indexOf("?")>-1?"&":"?")+_6cd;
}
try{
Ajax.Responders.dispatch("onCreate",this,this.transport);
this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);
if(this.options.asynchronous){
setTimeout(function(){
this.respondToReadyState(1);
}.bind(this),10);
}
this.transport.onreadystatechange=this.onStateChange.bind(this);
this.setRequestHeaders();
var body=this.method=="post"?(this.options.postBody||_6cd):null;
this.transport.send(body);
if(!this.options.asynchronous&&this.transport.overrideMimeType){
this.onStateChange();
}
}
catch(e){
this.dispatchException(e);
}
},onStateChange:function(){
var _6cf=this.transport.readyState;
if(_6cf>1&&!((_6cf==4)&&this._complete)){
this.respondToReadyState(this.transport.readyState);
}
},setRequestHeaders:function(){
var _6d0={"X-Requested-With":"XMLHttpRequest","X-Prototype-Version":Prototype.Version,"Accept":"text/javascript, text/html, application/xml, text/xml, */*"};
if(this.method=="post"){
_6d0["Content-type"]=this.options.contentType+(this.options.encoding?"; charset="+this.options.encoding:"");
if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){
_6d0["Connection"]="close";
}
}
if(typeof this.options.requestHeaders=="object"){
var _6d1=this.options.requestHeaders;
if(typeof _6d1.push=="function"){
for(var i=0,_6d3=_6d1.length;i<_6d3;i+=2){
_6d0[_6d1[i]]=_6d1[i+1];
}
}else{
$H(_6d1).each(function(pair){
_6d0[pair.key]=pair.value;
});
}
}
for(var name in _6d0){
this.transport.setRequestHeader(name,_6d0[name]);
}
},success:function(){
return !this.transport.status||(this.transport.status>=200&&this.transport.status<300);
},respondToReadyState:function(_6d6){
var _6d7=Ajax.Request.Events[_6d6];
var _6d8=this.transport,json=this.evalJSON();
if(_6d7=="Complete"){
try{
this._complete=true;
(this.options["on"+this.transport.status]||this.options["on"+(this.success()?"Success":"Failure")]||Prototype.emptyFunction)(_6d8,json);
}
catch(e){
this.dispatchException(e);
}
if((this.getHeader("Content-type")||"text/javascript").strip().match(/^(text|application)\/(x-)?(java|ecma)script(;.*)?$/i)){
this.evalResponse();
}
}
try{
(this.options["on"+_6d7]||Prototype.emptyFunction)(_6d8,json);
Ajax.Responders.dispatch("on"+_6d7,this,_6d8,json);
}
catch(e){
this.dispatchException(e);
}
if(_6d7=="Complete"){
this.transport.onreadystatechange=Prototype.emptyFunction;
}
},getHeader:function(name){
try{
return this.transport.getResponseHeader(name);
}
catch(e){
return null;
}
},evalJSON:function(){
try{
var json=this.getHeader("X-JSON");
return json?eval("("+json+")"):null;
}
catch(e){
return null;
}
},evalResponse:function(){
try{
return eval(this.transport.responseText);
}
catch(e){
this.dispatchException(e);
}
},dispatchException:function(_6dc){
(this.options.onException||Prototype.emptyFunction)(this,_6dc);
Ajax.Responders.dispatch("onException",this,_6dc);
}});
Ajax.Updater=Class.create();
Object.extend(Object.extend(Ajax.Updater.prototype,Ajax.Request.prototype),{initialize:function(_6dd,url,_6df){
this.container={success:(_6dd.success||_6dd),failure:(_6dd.failure||(_6dd.success?null:_6dd))};
this.transport=Ajax.getTransport();
this.setOptions(_6df);
var _6e0=this.options.onComplete||Prototype.emptyFunction;
this.options.onComplete=(function(_6e1,_6e2){
this.updateContent();
_6e0(_6e1,_6e2);
}).bind(this);
this.request(url);
},updateContent:function(){
var _6e3=this.container[this.success()?"success":"failure"];
var _6e4=this.transport.responseText;
if(!this.options.evalScripts){
_6e4=_6e4.stripScripts();
}
if(_6e3=$(_6e3)){
if(this.options.insertion){
new this.options.insertion(_6e3,_6e4);
}else{
_6e3.update(_6e4);
}
}
if(this.success()){
if(this.onComplete){
setTimeout(this.onComplete.bind(this),10);
}
}
}});
Ajax.PeriodicalUpdater=Class.create();
Ajax.PeriodicalUpdater.prototype=Object.extend(new Ajax.Base(),{initialize:function(_6e5,url,_6e7){
this.setOptions(_6e7);
this.onComplete=this.options.onComplete;
this.frequency=(this.options.frequency||2);
this.decay=(this.options.decay||1);
this.updater={};
this.container=_6e5;
this.url=url;
this.start();
},start:function(){
this.options.onComplete=this.updateComplete.bind(this);
this.onTimerEvent();
},stop:function(){
this.updater.options.onComplete=undefined;
clearTimeout(this.timer);
(this.onComplete||Prototype.emptyFunction).apply(this,arguments);
},updateComplete:function(_6e8){
if(this.options.decay){
this.decay=(_6e8.responseText==this.lastText?this.decay*this.options.decay:1);
this.lastText=_6e8.responseText;
}
this.timer=setTimeout(this.onTimerEvent.bind(this),this.decay*this.frequency*1000);
},onTimerEvent:function(){
this.updater=new Ajax.Updater(this.container,this.url,this.options);
}});
function $(_6e9){
if(arguments.length>1){
for(var i=0,_6eb=[],_6ec=arguments.length;i<_6ec;i++){
_6eb.push($(arguments[i]));
}
return _6eb;
}
if(typeof _6e9=="string"){
_6e9=document.getElementById(_6e9);
}
return Element.extend(_6e9);
};
if(Prototype.BrowserFeatures.XPath){
document._getElementsByXPath=function(_6ed,_6ee){
var _6ef=[];
var _6f0=document.evaluate(_6ed,$(_6ee)||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for(var i=0,_6f2=_6f0.snapshotLength;i<_6f2;i++){
_6ef.push(_6f0.snapshotItem(i));
}
return _6ef;
};
}
document.getElementsByClassName=function(_6f3,_6f4){
if(Prototype.BrowserFeatures.XPath){
var q=".//*[contains(concat(' ', @class, ' '), ' "+_6f3+" ')]";
return document._getElementsByXPath(q,_6f4);
}else{
var _6f6=($(_6f4)||document.body).getElementsByTagName("*");
var _6f7=[],_6f8;
for(var i=0,_6fa=_6f6.length;i<_6fa;i++){
_6f8=_6f6[i];
if(Element.hasClassName(_6f8,_6f3)){
_6f7.push(Element.extend(_6f8));
}
}
return _6f7;
}
};
if(!window.Element){
var Element=new Object();
}
Element.extend=function(_6fb){
if(!_6fb||_nativeExtensions||_6fb.nodeType==3){
return _6fb;
}
if(!_6fb._extended&&_6fb.tagName&&_6fb!=window){
var _6fc=Object.clone(Element.Methods),_6fd=Element.extend.cache;
if(_6fb.tagName=="FORM"){
Object.extend(_6fc,Form.Methods);
}
if(["INPUT","TEXTAREA","SELECT"].include(_6fb.tagName)){
Object.extend(_6fc,Form.Element.Methods);
}
Object.extend(_6fc,Element.Methods.Simulated);
for(var _6fe in _6fc){
var _6ff=_6fc[_6fe];
if(typeof _6ff=="function"&&!(_6fe in _6fb)){
_6fb[_6fe]=_6fd.findOrStore(_6ff);
}
}
}
_6fb._extended=true;
return _6fb;
};
Element.extend.cache={findOrStore:function(_700){
return this[_700]=this[_700]||function(){
return _700.apply(null,[this].concat($A(arguments)));
};
}};
Element.Methods={visible:function(_701){
return $(_701).style.display!="none";
},toggle:function(_702){
_702=$(_702);
Element[Element.visible(_702)?"hide":"show"](_702);
return _702;
},hide:function(_703){
$(_703).style.display="none";
return _703;
},show:function(_704){
$(_704).style.display="";
return _704;
},remove:function(_705){
_705=$(_705);
_705.parentNode.removeChild(_705);
return _705;
},update:function(_706,html){
html=typeof html=="undefined"?"":html.toString();
$(_706).innerHTML=html.stripScripts();
setTimeout(function(){
html.evalScripts();
},10);
return _706;
},replace:function(_708,html){
_708=$(_708);
html=typeof html=="undefined"?"":html.toString();
if(_708.outerHTML){
_708.outerHTML=html.stripScripts();
}else{
var _70a=_708.ownerDocument.createRange();
_70a.selectNodeContents(_708);
_708.parentNode.replaceChild(_70a.createContextualFragment(html.stripScripts()),_708);
}
setTimeout(function(){
html.evalScripts();
},10);
return _708;
},inspect:function(_70b){
_70b=$(_70b);
var _70c="<"+_70b.tagName.toLowerCase();
$H({"id":"id","className":"class"}).each(function(pair){
var _70e=pair.first(),_70f=pair.last();
var _710=(_70b[_70e]||"").toString();
if(_710){
_70c+=" "+_70f+"="+_710.inspect(true);
}
});
return _70c+">";
},recursivelyCollect:function(_711,_712){
_711=$(_711);
var _713=[];
while(_711=_711[_712]){
if(_711.nodeType==1){
_713.push(Element.extend(_711));
}
}
return _713;
},ancestors:function(_714){
return $(_714).recursivelyCollect("parentNode");
},descendants:function(_715){
return $A($(_715).getElementsByTagName("*"));
},immediateDescendants:function(_716){
if(!(_716=$(_716).firstChild)){
return [];
}
while(_716&&_716.nodeType!=1){
_716=_716.nextSibling;
}
if(_716){
return [_716].concat($(_716).nextSiblings());
}
return [];
},previousSiblings:function(_717){
return $(_717).recursivelyCollect("previousSibling");
},nextSiblings:function(_718){
return $(_718).recursivelyCollect("nextSibling");
},siblings:function(_719){
_719=$(_719);
return _719.previousSiblings().reverse().concat(_719.nextSiblings());
},match:function(_71a,_71b){
if(typeof _71b=="string"){
_71b=new Selector(_71b);
}
return _71b.match($(_71a));
},up:function(_71c,_71d,_71e){
return Selector.findElement($(_71c).ancestors(),_71d,_71e);
},down:function(_71f,_720,_721){
return Selector.findElement($(_71f).descendants(),_720,_721);
},previous:function(_722,_723,_724){
return Selector.findElement($(_722).previousSiblings(),_723,_724);
},next:function(_725,_726,_727){
return Selector.findElement($(_725).nextSiblings(),_726,_727);
},getElementsBySelector:function(){
var args=$A(arguments),_729=$(args.shift());
return Selector.findChildElements(_729,args);
},getElementsByClassName:function(_72a,_72b){
return document.getElementsByClassName(_72b,_72a);
},readAttribute:function(_72c,name){
_72c=$(_72c);
if(document.all&&!window.opera){
var t=Element._attributeTranslations;
if(t.values[name]){
return t.values[name](_72c,name);
}
if(t.names[name]){
name=t.names[name];
}
var _72f=_72c.attributes[name];
if(_72f){
return _72f.nodeValue;
}
}
return _72c.getAttribute(name);
},getHeight:function(_730){
try{
return $(_730).getDimensions().height;
}
catch(e){
return 1;
}
},getWidth:function(_731){
return $(_731).getDimensions().width;
},classNames:function(_732){
return new Element.ClassNames(_732);
},hasClassName:function(_733,_734){
if(!(_733=$(_733))){
return;
}
var _735=_733.className;
if(_735.length==0){
return false;
}
if(_735==_734||_735.match(new RegExp("(^|\\s)"+_734+"(\\s|$)"))){
return true;
}
return false;
},addClassName:function(_736,_737){
if(!(_736=$(_736))){
return;
}
Element.classNames(_736).add(_737);
return _736;
},removeClassName:function(_738,_739){
if(!(_738=$(_738))){
return;
}
Element.classNames(_738).remove(_739);
return _738;
},toggleClassName:function(_73a,_73b){
if(!(_73a=$(_73a))){
return;
}
Element.classNames(_73a)[_73a.hasClassName(_73b)?"remove":"add"](_73b);
return _73a;
},observe:function(){
Event.observe.apply(Event,arguments);
return $A(arguments).first();
},stopObserving:function(){
Event.stopObserving.apply(Event,arguments);
return $A(arguments).first();
},cleanWhitespace:function(_73c){
_73c=$(_73c);
var node=_73c.firstChild;
while(node){
var _73e=node.nextSibling;
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
_73c.removeChild(node);
}
node=_73e;
}
return _73c;
},empty:function(_73f){
return $(_73f).innerHTML.match(/^\s*$/);
},descendantOf:function(_740,_741){
_740=$(_740),_741=$(_741);
while(_740=_740.parentNode){
if(_740==_741){
return true;
}
}
return false;
},scrollTo:function(_742){
_742=$(_742);
var pos=Position.cumulativeOffset(_742);
window.scrollTo(pos[0],pos[1]);
return _742;
},getStyle:function(_744,_745){
_744=$(_744);
if(["float","cssFloat"].include(_745)){
_745=(typeof _744.style.styleFloat!="undefined"?"styleFloat":"cssFloat");
}
_745=_745.camelize();
var _746=_744.style[_745];
if(!_746){
if(document.defaultView&&document.defaultView.getComputedStyle){
var css=document.defaultView.getComputedStyle(_744,null);
_746=css?css[_745]:null;
}else{
if(_744.currentStyle){
_746=_744.currentStyle[_745];
}
}
}
if((_746=="auto")&&["width","height"].include(_745)&&(_744.getStyle("display")!="none")){
_746=_744["offset"+_745.capitalize()]+"px";
}
if(window.opera&&["left","top","right","bottom"].include(_745)){
if(Element.getStyle(_744,"position")=="static"){
_746="auto";
}
}
if(_745=="opacity"){
if(_746){
return parseFloat(_746);
}
if(_746=(_744.getStyle("filter")||"").match(/alpha\(opacity=(.*)\)/)){
if(_746[1]){
return parseFloat(_746[1])/100;
}
}
return 1;
}
return _746=="auto"?null:_746;
},setStyle:function(_748,_749){
_748=$(_748);
for(var name in _749){
var _74b=_749[name];
if(name=="opacity"){
if(_74b==1){
_74b=(/Gecko/.test(navigator.userAgent)&&!/Konqueror|Safari|KHTML/.test(navigator.userAgent))?0.999999:1;
if(/MSIE/.test(navigator.userAgent)&&!window.opera){
_748.style.filter=_748.getStyle("filter").replace(/alpha\([^\)]*\)/gi,"");
}
}else{
if(_74b==""){
if(/MSIE/.test(navigator.userAgent)&&!window.opera){
_748.style.filter=_748.getStyle("filter").replace(/alpha\([^\)]*\)/gi,"");
}
}else{
if(_74b<0.00001){
_74b=0;
}
if(/MSIE/.test(navigator.userAgent)&&!window.opera){
_748.style.filter=_748.getStyle("filter").replace(/alpha\([^\)]*\)/gi,"")+"alpha(opacity="+_74b*100+")";
}
}
}
}else{
if(["float","cssFloat"].include(name)){
name=(typeof _748.style.styleFloat!="undefined")?"styleFloat":"cssFloat";
}
}
_748.style[name.camelize()]=_74b;
}
return _748;
},getDimensions:function(_74c){
_74c=$(_74c);
var _74d=$(_74c).getStyle("display");
if(_74d!="none"&&_74d!=null){
return {width:_74c.offsetWidth,height:_74c.offsetHeight};
}
var els=_74c.style;
var _74f=els.visibility;
var _750=els.position;
var _751=els.display;
els.visibility="hidden";
els.position="absolute";
els.display="block";
var _752=_74c.clientWidth;
var _753=_74c.clientHeight;
els.display=_751;
els.position=_750;
els.visibility=_74f;
return {width:_752,height:_753};
},makePositioned:function(_754){
_754=$(_754);
var pos=Element.getStyle(_754,"position");
if(pos=="static"||!pos){
_754._madePositioned=true;
_754.style.position="relative";
if(window.opera){
_754.style.top=0;
_754.style.left=0;
}
}
return _754;
},undoPositioned:function(_756){
_756=$(_756);
if(_756._madePositioned){
_756._madePositioned=undefined;
_756.style.position=_756.style.top=_756.style.left=_756.style.bottom=_756.style.right="";
}
return _756;
},makeClipping:function(_757){
_757=$(_757);
if(_757._overflow){
return _757;
}
_757._overflow=_757.style.overflow||"auto";
if((Element.getStyle(_757,"overflow")||"visible")!="hidden"){
_757.style.overflow="hidden";
}
return _757;
},undoClipping:function(_758){
_758=$(_758);
if(!_758._overflow){
return _758;
}
_758.style.overflow=_758._overflow=="auto"?"":_758._overflow;
_758._overflow=null;
return _758;
}};
Object.extend(Element.Methods,{childOf:Element.Methods.descendantOf});
Element._attributeTranslations={};
Element._attributeTranslations.names={colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",datetime:"dateTime",accesskey:"accessKey",tabindex:"tabIndex",enctype:"encType",maxlength:"maxLength",readonly:"readOnly",longdesc:"longDesc"};
Element._attributeTranslations.values={_getAttr:function(_759,_75a){
return _759.getAttribute(_75a,2);
},_flag:function(_75b,_75c){
return $(_75b).hasAttribute(_75c)?_75c:null;
},style:function(_75d){
return _75d.style.cssText.toLowerCase();
},title:function(_75e){
var node=_75e.getAttributeNode("title");
return node.specified?node.nodeValue:null;
}};
Object.extend(Element._attributeTranslations.values,{href:Element._attributeTranslations.values._getAttr,src:Element._attributeTranslations.values._getAttr,disabled:Element._attributeTranslations.values._flag,checked:Element._attributeTranslations.values._flag,readonly:Element._attributeTranslations.values._flag,multiple:Element._attributeTranslations.values._flag});
Element.Methods.Simulated={hasAttribute:function(_760,_761){
var t=Element._attributeTranslations;
_761=t.names[_761]||_761;
return $(_760).getAttributeNode(_761).specified;
}};
if(document.all&&!window.opera){
Element.Methods.update=function(_763,html){
_763=$(_763);
html=typeof html=="undefined"?"":html.toString();
var _765=_763.tagName.toUpperCase();
if(["THEAD","TBODY","TR","TD"].include(_765)){
var div=document.createElement("div");
switch(_765){
case "THEAD":
case "TBODY":
div.innerHTML="<table><tbody>"+html.stripScripts()+"</tbody></table>";
depth=2;
break;
case "TR":
div.innerHTML="<table><tbody><tr>"+html.stripScripts()+"</tr></tbody></table>";
depth=3;
break;
case "TD":
div.innerHTML="<table><tbody><tr><td>"+html.stripScripts()+"</td></tr></tbody></table>";
depth=4;
}
$A(_763.childNodes).each(function(node){
_763.removeChild(node);
});
depth.times(function(){
div=div.firstChild;
});
$A(div.childNodes).each(function(node){
_763.appendChild(node);
});
}else{
_763.innerHTML=html.stripScripts();
}
setTimeout(function(){
html.evalScripts();
},10);
return _763;
};
}
Object.extend(Element,Element.Methods);
var _nativeExtensions=false;
if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){
["","Form","Input","TextArea","Select"].each(function(tag){
var _76a="HTML"+tag+"Element";
if(window[_76a]){
return;
}
var _76b=window[_76a]={};
_76b.prototype=document.createElement(tag?tag.toLowerCase():"div").__proto__;
});
}
Element.addMethods=function(_76c){
Object.extend(Element.Methods,_76c||{});
function copy(_76d,_76e,_76f){
_76f=_76f||false;
var _770=Element.extend.cache;
for(var _771 in _76d){
var _772=_76d[_771];
if(!_76f||!(_771 in _76e)){
_76e[_771]=_770.findOrStore(_772);
}
}
};
if(typeof HTMLElement!="undefined"){
copy(Element.Methods,HTMLElement.prototype);
copy(Element.Methods.Simulated,HTMLElement.prototype,true);
copy(Form.Methods,HTMLFormElement.prototype);
[HTMLInputElement,HTMLTextAreaElement,HTMLSelectElement].each(function(_773){
copy(Form.Element.Methods,_773.prototype);
});
_nativeExtensions=true;
}
};
var Toggle=new Object();
Toggle.display=Element.toggle;
Abstract.Insertion=function(_774){
this.adjacency=_774;
};
Abstract.Insertion.prototype={initialize:function(_775,_776){
this.element=$(_775);
this.content=_776.stripScripts();
if(this.adjacency&&this.element.insertAdjacentHTML){
try{
this.element.insertAdjacentHTML(this.adjacency,this.content);
}
catch(e){
var _777=this.element.tagName.toUpperCase();
if(["TBODY","TR"].include(_777)){
this.insertContent(this.contentFromAnonymousTable());
}else{
throw e;
}
}
}else{
this.range=this.element.ownerDocument.createRange();
if(this.initializeRange){
this.initializeRange();
}
this.insertContent([this.range.createContextualFragment(this.content)]);
}
setTimeout(function(){
_776.evalScripts();
},10);
},contentFromAnonymousTable:function(){
var div=document.createElement("div");
div.innerHTML="<table><tbody>"+this.content+"</tbody></table>";
return $A(div.childNodes[0].childNodes[0].childNodes);
}};
var Insertion=new Object();
Insertion.Before=Class.create();
Insertion.Before.prototype=Object.extend(new Abstract.Insertion("beforeBegin"),{initializeRange:function(){
this.range.setStartBefore(this.element);
},insertContent:function(_779){
_779.each((function(_77a){
this.element.parentNode.insertBefore(_77a,this.element);
}).bind(this));
}});
Insertion.Top=Class.create();
Insertion.Top.prototype=Object.extend(new Abstract.Insertion("afterBegin"),{initializeRange:function(){
this.range.selectNodeContents(this.element);
this.range.collapse(true);
},insertContent:function(_77b){
_77b.reverse(false).each((function(_77c){
this.element.insertBefore(_77c,this.element.firstChild);
}).bind(this));
}});
Insertion.Bottom=Class.create();
Insertion.Bottom.prototype=Object.extend(new Abstract.Insertion("beforeEnd"),{initializeRange:function(){
this.range.selectNodeContents(this.element);
this.range.collapse(this.element);
},insertContent:function(_77d){
_77d.each((function(_77e){
this.element.appendChild(_77e);
}).bind(this));
}});
Insertion.After=Class.create();
Insertion.After.prototype=Object.extend(new Abstract.Insertion("afterEnd"),{initializeRange:function(){
this.range.setStartAfter(this.element);
},insertContent:function(_77f){
_77f.each((function(_780){
this.element.parentNode.insertBefore(_780,this.element.nextSibling);
}).bind(this));
}});
Element.ClassNames=Class.create();
Element.ClassNames.prototype={initialize:function(_781){
this.element=$(_781);
},_each:function(_782){
this.element.className.split(/\s+/).select(function(name){
return name.length>0;
})._each(_782);
},set:function(_784){
this.element.className=_784;
},add:function(_785){
if(this.include(_785)){
return;
}
this.set($A(this).concat(_785).join(" "));
},remove:function(_786){
if(!this.include(_786)){
return;
}
this.set($A(this).without(_786).join(" "));
},toString:function(){
return $A(this).join(" ");
}};
Object.extend(Element.ClassNames.prototype,Enumerable);
var Selector=Class.create();
Selector.prototype={initialize:function(_787){
this.params={classNames:[]};
this.expression=_787.toString().strip();
this.parseExpression();
this.compileMatcher();
},parseExpression:function(){
function abort(_788){
throw "Parse error in selector: "+_788;
};
if(this.expression==""){
abort("empty expression");
}
var _789=this.params,expr=this.expression,_78b,_78c,_78d,rest;
while(_78b=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_789.attributes=_789.attributes||[];
_789.attributes.push({name:_78b[2],operator:_78b[3],value:_78b[4]||_78b[5]||""});
expr=_78b[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_78b=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+)(.*)/i)){
_78c=_78b[1],_78d=_78b[2],rest=_78b[3];
switch(_78c){
case "#":
_789.id=_78d;
break;
case ".":
_789.classNames.push(_78d);
break;
case "":
case undefined:
_789.tagName=_78d.toUpperCase();
break;
default:
abort(expr.inspect());
}
expr=rest;
}
if(expr.length>0){
abort(expr.inspect());
}
},buildMatchExpression:function(){
var _78f=this.params,_790=[],_791;
if(_78f.wildcard){
_790.push("true");
}
if(_791=_78f.id){
_790.push("element.readAttribute(\"id\") == "+_791.inspect());
}
if(_791=_78f.tagName){
_790.push("element.tagName.toUpperCase() == "+_791.inspect());
}
if((_791=_78f.classNames).length>0){
for(var i=0,_793=_791.length;i<_793;i++){
_790.push("element.hasClassName("+_791[i].inspect()+")");
}
}
if(_791=_78f.attributes){
_791.each(function(_794){
var _795="element.readAttribute("+_794.name.inspect()+")";
var _796=function(_797){
return _795+" && "+_795+".split("+_797.inspect()+")";
};
switch(_794.operator){
case "=":
_790.push(_795+" == "+_794.value.inspect());
break;
case "~=":
_790.push(_796(" ")+".include("+_794.value.inspect()+")");
break;
case "|=":
_790.push(_796("-")+".first().toUpperCase() == "+_794.value.toUpperCase().inspect());
break;
case "!=":
_790.push(_795+" != "+_794.value.inspect());
break;
case "":
case undefined:
_790.push("element.hasAttribute("+_794.name.inspect()+")");
break;
default:
throw "Unknown operator "+_794.operator+" in selector";
}
});
}
return _790.join(" && ");
},compileMatcher:function(){
this.match=new Function("element","if (!element.tagName) return false;       element = $(element);       return "+this.buildMatchExpression());
},findElements:function(_798){
var _799;
if(_799=$(this.params.id)){
if(this.match(_799)){
if(!_798||Element.childOf(_799,_798)){
return [_799];
}
}
}
_798=(_798||document).getElementsByTagName(this.params.tagName||"*");
var _79a=[];
for(var i=0,_79c=_798.length;i<_79c;i++){
try{
if(this.match(_799=_798[i])){
_79a.push(Element.extend(_799));
}
}
catch(e){
}
}
return _79a;
},toString:function(){
return this.expression;
}};
Object.extend(Selector,{matchElements:function(_79d,_79e){
var _79f=new Selector(_79e);
return _79d.select(_79f.match.bind(_79f)).map(Element.extend);
},findElement:function(_7a0,_7a1,_7a2){
if(typeof _7a1=="number"){
_7a2=_7a1,_7a1=false;
}
return Selector.matchElements(_7a0,_7a1||"*")[_7a2||0];
},findChildElements:function(_7a3,_7a4){
return _7a4.map(function(_7a5){
return _7a5.match(/[^\s"]+(?:"[^"]*"[^\s"]+)*/g).inject([null],function(_7a6,expr){
var _7a8=new Selector(expr);
return _7a6.inject([],function(_7a9,_7aa){
return _7a9.concat(_7a8.findElements(_7aa||_7a3));
});
});
}).flatten();
}});
function $$(){
return Selector.findChildElements(document,$A(arguments));
};
var Form={reset:function(form){
$(form).reset();
return form;
},serializeElements:function(_7ac,_7ad){
var data=_7ac.inject({},function(_7af,_7b0){
if(!_7b0.disabled&&_7b0.name){
var key=_7b0.name,_7b2=$(_7b0).getValue();
if(_7b2!=undefined){
if(_7af[key]){
if(_7af[key].constructor!=Array){
_7af[key]=[_7af[key]];
}
_7af[key].push(_7b2);
}else{
_7af[key]=_7b2;
}
}
}
return _7af;
});
return _7ad?data:Prototype.Hash.toQueryString(data);
},unserializeElements:function(_7b3,hash){
for(i in hash){
Form.Element.setValue(i,hash[i].toString());
}
}};
Form.Methods={serialize:function(form,_7b6){
return Form.serializeElements(Form.getElements(form),_7b6);
},unserialize:function(form,hash){
return Form.unserializeElements(Form.getElements(form),hash);
},getElements:function(form){
return $A($(form).getElementsByTagName("*")).inject([],function(_7ba,_7bb){
if(Form.Element.Serializers[_7bb.tagName.toLowerCase()]){
_7ba.push(Element.extend(_7bb));
}
return _7ba;
});
},getInputs:function(form,_7bd,name){
form=$(form);
var _7bf=form.getElementsByTagName("input");
if(!_7bd&&!name){
return $A(_7bf).map(Element.extend);
}
for(var i=0,_7c1=[],_7c2=_7bf.length;i<_7c2;i++){
var _7c3=_7bf[i];
if((_7bd&&_7c3.type!=_7bd)||(name&&_7c3.name!=name)){
continue;
}
_7c1.push(Element.extend(_7c3));
}
return _7c1;
},disable:function(form){
form=$(form);
form.getElements().each(function(_7c5){
_7c5.blur();
_7c5.disabled="true";
});
return form;
},enable:function(form){
form=$(form);
form.getElements().each(function(_7c7){
_7c7.disabled="";
});
return form;
},findFirstElement:function(form){
return $(form).getElements().find(function(_7c9){
return _7c9.type!="hidden"&&!_7c9.disabled&&["input","select","textarea"].include(_7c9.tagName.toLowerCase());
});
},focusFirstElement:function(form){
form=$(form);
form.findFirstElement().activate();
return form;
}};
Object.extend(Form,Form.Methods);
Form.Element={focus:function(_7cb){
$(_7cb).focus();
return _7cb;
},select:function(_7cc){
$(_7cc).select();
return _7cc;
}};
Form.Element.Methods={serialize:function(_7cd){
_7cd=$(_7cd);
if(!_7cd.disabled&&_7cd.name){
var _7ce=_7cd.getValue();
if(_7ce!=undefined){
var pair={};
pair[_7cd.name]=_7ce;
return Prototype.Hash.toQueryString(pair);
}
}
return "";
},getValue:function(_7d0){
_7d0=$(_7d0);
var _7d1=_7d0.tagName.toLowerCase();
return Form.Element.Serializers[_7d1](_7d0);
},clear:function(_7d2){
$(_7d2).value="";
return _7d2;
},present:function(_7d3){
return $(_7d3).value!="";
},activate:function(_7d4){
_7d4=$(_7d4);
_7d4.focus();
if(_7d4.select&&(_7d4.tagName.toLowerCase()!="input"||!["button","reset","submit"].include(_7d4.type))){
_7d4.select();
}
return _7d4;
},disable:function(_7d5){
_7d5=$(_7d5);
_7d5.disabled=true;
return _7d5;
},enable:function(_7d6){
_7d6=$(_7d6);
_7d6.blur();
_7d6.disabled=false;
return _7d6;
}};
Object.extend(Form.Element,Form.Element.Methods);
var Field=Form.Element;
var $F=Form.Element.getValue;
Form.Element.Serializers={input:function(_7d7){
switch(_7d7.type.toLowerCase()){
case "checkbox":
return _7d7.checked?_7d7.value:0;
case "radio":
return Form.Element.Serializers.inputSelector(_7d7);
default:
return Form.Element.Serializers.textarea(_7d7);
}
},inputSelector:function(_7d8){
return _7d8.checked?_7d8.value:null;
},textarea:function(_7d9){
return _7d9.value;
},select:function(_7da){
return this[_7da.type=="select-one"?"selectOne":"selectMany"](_7da);
},selectOne:function(_7db){
var _7dc=_7db.selectedIndex;
return _7dc>=0?this.optionValue(_7db.options[_7dc]):null;
},selectMany:function(_7dd){
var _7de,_7df=_7dd.length;
if(!_7df){
return null;
}
for(var i=0,_7de=[];i<_7df;i++){
var opt=_7dd.options[i];
if(opt.selected){
_7de.push(this.optionValue(opt));
}
}
return _7de;
},optionValue:function(opt){
try{
ret=Element.extend(opt).hasAttribute("value")?opt.value:opt.text;
}
catch(e){
alert("caught:"+opt.value+" : "+e);
ret=opt.value;
}
return ret;
}};
Abstract.TimedObserver=function(){
};
Abstract.TimedObserver.prototype={initialize:function(_7e3,_7e4,_7e5){
this.frequency=_7e4;
this.element=$(_7e3);
this.callback=_7e5;
this.lastValue=this.getValue();
this.registerCallback();
},registerCallback:function(){
setInterval(this.onTimerEvent.bind(this),this.frequency*1000);
},onTimerEvent:function(){
var _7e6=this.getValue();
var _7e7=("string"==typeof this.lastValue&&"string"==typeof _7e6?this.lastValue!=_7e6:String(this.lastValue)!=String(_7e6));
if(_7e7){
this.callback(this.element,_7e6);
this.lastValue=_7e6;
}
}};
Form.Element.Observer=Class.create();
Form.Element.Observer.prototype=Object.extend(new Abstract.TimedObserver(),{getValue:function(){
return Form.Element.getValue(this.element);
}});
Form.Observer=Class.create();
Form.Observer.prototype=Object.extend(new Abstract.TimedObserver(),{getValue:function(){
return Form.serialize(this.element);
}});
Abstract.EventObserver=function(){
};
Abstract.EventObserver.prototype={initialize:function(_7e8,_7e9){
this.element=$(_7e8);
this.callback=_7e9;
this.lastValue=this.getValue();
if(this.element.tagName.toLowerCase()=="form"){
this.registerFormCallbacks();
}else{
this.registerCallback(this.element);
}
},onElementEvent:function(){
var _7ea=this.getValue();
if(this.lastValue!=_7ea){
this.callback(this.element,_7ea);
this.lastValue=_7ea;
}
},registerFormCallbacks:function(){
Form.getElements(this.element).each(this.registerCallback.bind(this));
},registerCallback:function(_7eb){
if(_7eb.type){
switch(_7eb.type.toLowerCase()){
case "checkbox":
case "radio":
Event.observe(_7eb,"click",this.onElementEvent.bind(this));
break;
default:
Event.observe(_7eb,"change",this.onElementEvent.bind(this));
break;
}
}
}};
Form.Element.EventObserver=Class.create();
Form.Element.EventObserver.prototype=Object.extend(new Abstract.EventObserver(),{getValue:function(){
return Form.Element.getValue(this.element);
}});
Form.EventObserver=Class.create();
Form.EventObserver.prototype=Object.extend(new Abstract.EventObserver(),{getValue:function(){
return Form.serialize(this.element);
}});
if(!window.Event){
var Event=new Object();
}
Object.extend(Event,{KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,element:function(_7ec){
return _7ec.target||_7ec.srcElement;
},isLeftClick:function(_7ed){
return (((_7ed.which)&&(_7ed.which==1))||((_7ed.button)&&(_7ed.button==1)));
},pointerX:function(_7ee){
return _7ee.pageX||(_7ee.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));
},pointerY:function(_7ef){
return _7ef.pageY||(_7ef.clientY+(document.documentElement.scrollTop||document.body.scrollTop));
},stop:function(_7f0){
if(_7f0.preventDefault){
_7f0.preventDefault();
_7f0.stopPropagation();
}else{
_7f0.returnValue=false;
_7f0.cancelBubble=true;
}
},findElement:function(_7f1,_7f2){
var _7f3=Event.element(_7f1);
while(_7f3.parentNode&&(!_7f3.tagName||(_7f3.tagName.toUpperCase()!=_7f2.toUpperCase()))){
_7f3=_7f3.parentNode;
}
return _7f3;
},observers:false,_observeAndCache:function(_7f4,name,_7f6,_7f7){
if(!this.observers){
this.observers=[];
}
if(_7f4==null){
return;
}
if(_7f4.addEventListener){
this.observers.push([_7f4,name,_7f6,_7f7]);
_7f4.addEventListener(name,_7f6,_7f7);
}else{
if(_7f4.attachEvent){
this.observers.push([_7f4,name,_7f6,_7f7]);
_7f4.attachEvent("on"+name,_7f6);
}
}
},unloadCache:function(){
if(!Event.observers){
return;
}
for(var i=0,_7f9=Event.observers.length;i<_7f9;i++){
Event.stopObserving.apply(this,Event.observers[i]);
Event.observers[i][0]=null;
}
Event.observers=false;
},observe:function(_7fa,name,_7fc,_7fd){
_7fa=$(_7fa);
_7fd=_7fd||false;
if(name=="keypress"&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||_7fa.attachEvent)){
name="keydown";
}
Event._observeAndCache(_7fa,name,_7fc,_7fd);
},stopObserving:function(_7fe,name,_800,_801){
_7fe=$(_7fe);
_801=_801||false;
if(name=="keypress"&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||_7fe.detachEvent)){
name="keydown";
}
if(_7fe.removeEventListener){
_7fe.removeEventListener(name,_800,_801);
}else{
if(_7fe.detachEvent){
try{
_7fe.detachEvent("on"+name,_800);
}
catch(e){
}
}
}
}});
if(navigator.appVersion.match(/\bMSIE\b/)){
Event.observe(window,"unload",Event.unloadCache,false);
}
var Position={includeScrollOffsets:false,prepare:function(){
this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
},realOffset:function(_802){
var _803=0,_804=0;
do{
_803+=_802.scrollTop||0;
_804+=_802.scrollLeft||0;
_802=_802.parentNode;
}while(_802);
return [_804,_803];
},cumulativeOffset:function(_805){
var _806=0,_807=0;
do{
_806+=_805.offsetTop||0;
_807+=_805.offsetLeft||0;
_805=_805.offsetParent;
}while(_805);
return [_807,_806];
},positionedOffset:function(_808){
var _809=0,_80a=0;
do{
_809+=_808.offsetTop||0;
_80a+=_808.offsetLeft||0;
_808=_808.offsetParent;
if(_808){
if(_808.tagName=="BODY"){
break;
}
var p=Element.getStyle(_808,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_808);
return [_80a,_809];
},offsetParent:function(_80c){
if(_80c.offsetParent){
return _80c.offsetParent;
}
if(_80c==document.body){
return _80c;
}
while((_80c=_80c.parentNode)&&_80c!=document.body){
if(Element.getStyle(_80c,"position")!="static"){
return _80c;
}
}
return document.body;
},within:function(_80d,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_80d,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_80d);
return (y>=this.offset[1]&&y<this.offset[1]+_80d.offsetHeight&&x>=this.offset[0]&&x<this.offset[0]+_80d.offsetWidth);
},withinIncludingScrolloffsets:function(_810,x,y){
var _813=this.realOffset(_810);
this.xcomp=x+_813[0]-this.deltaX;
this.ycomp=y+_813[1]-this.deltaY;
this.offset=this.cumulativeOffset(_810);
return (this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+_810.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+_810.offsetWidth);
},overlap:function(mode,_815){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset[1]+_815.offsetHeight)-this.ycomp)/_815.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset[0]+_815.offsetWidth)-this.xcomp)/_815.offsetWidth;
}
},page:function(_816){
var _817=0,_818=0;
var _819=_816;
do{
_817+=_819.offsetTop||0;
_818+=_819.offsetLeft||0;
if(_819.offsetParent==document.body){
if(Element.getStyle(_819,"position")=="absolute"){
break;
}
}
}while(_819=_819.offsetParent);
_819=_816;
do{
if(!window.opera||_819.tagName=="BODY"){
_817-=_819.scrollTop||0;
_818-=_819.scrollLeft||0;
}
}while(_819=_819.parentNode);
return [_818,_817];
},clone:function(_81a,_81b){
var _81c=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},arguments[2]||{});
_81a=$(_81a);
var p=Position.page(_81a);
_81b=$(_81b);
var _81e=[0,0];
var _81f=null;
if(Element.getStyle(_81b,"position")=="absolute"){
_81f=Position.offsetParent(_81b);
_81e=Position.page(_81f);
}
if(_81f==document.body){
_81e[0]-=document.body.offsetLeft;
_81e[1]-=document.body.offsetTop;
}
if(_81c.setLeft){
_81b.style.left=(p[0]-_81e[0]+_81c.offsetLeft)+"px";
}
if(_81c.setTop){
_81b.style.top=(p[1]-_81e[1]+_81c.offsetTop)+"px";
}
if(_81c.setWidth){
_81b.style.width=_81a.offsetWidth+"px";
}
if(_81c.setHeight){
_81b.style.height=_81a.offsetHeight+"px";
}
},absolutize:function(_820){
_820=$(_820);
if(_820.style.position=="absolute"){
return;
}
Position.prepare();
var _821=Position.positionedOffset(_820);
var top=_821[1];
var left=_821[0];
var _824=_820.clientWidth;
var _825=_820.clientHeight;
_820._originalLeft=left-parseFloat(_820.style.left||0);
_820._originalTop=top-parseFloat(_820.style.top||0);
_820._originalWidth=_820.style.width;
_820._originalHeight=_820.style.height;
_820.style.position="absolute";
_820.style.top=top+"px";
_820.style.left=left+"px";
_820.style.width=_824+"px";
_820.style.height=_825+"px";
},relativize:function(_826){
_826=$(_826);
if(_826.style.position=="relative"){
return;
}
Position.prepare();
_826.style.position="relative";
var top=parseFloat(_826.style.top||0)-(_826._originalTop||0);
var left=parseFloat(_826.style.left||0)-(_826._originalLeft||0);
_826.style.top=top+"px";
_826.style.left=left+"px";
_826.style.height=_826._originalHeight;
_826.style.width=_826._originalWidth;
}};
if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){
Position.cumulativeOffset=function(_829){
var _82a=0,_82b=0;
do{
_82a+=_829.offsetTop||0;
_82b+=_829.offsetLeft||0;
if(_829.offsetParent==document.body){
if(Element.getStyle(_829,"position")=="absolute"){
break;
}
}
_829=_829.offsetParent;
}while(_829);
return [_82b,_82a];
};
}
Element.addMethods();
function tip_init(){
jQuery("a.hptip").each(function(){
var url=jQuery(this).attr("data-tip");
if(jQuery(this).hasClass("mouseoverable")){
jQuery(this).hover(function(){
jQuery(this).data("sticky",1);
tip_show(url,this.id,this.name,true);
},function(){
jQuery(this).data("sticky",0);
var id=this.id;
setTimeout(function(){
tip_remove(id);
},800);
}).click(function(){
return false;
});
jQuery("#HPT").live("mouseover",function(){
var _82e=jQuery(this).data("linkId");
if(_82e){
jQuery("#"+_82e).data("sticky",1);
}
}).live("mouseout",function(_82f){
var hpts=jQuery(_82f.relatedTarget).closest("#HPT");
if(hpts.size()==0){
var _831=jQuery(this).data("linkId");
if(_831){
jQuery("#"+_831).data("sticky",0);
}
setTimeout(function(){
tip_remove(_831);
},800);
}
});
}else{
jQuery(this).hover(function(){
tip_show(url,this.id,this.name,false);
},function(){
jQuery("#HPT").remove();
}).click(function(){
return false;
});
}
});
};
function tip_remove(_832){
var _833=jQuery("#HPT").data("linkId");
if(_832!=_833){
return;
}
var _834=jQuery("#"+_832).data("sticky");
if(!_834){
jQuery("#HPT").remove();
}
};
function tip_show(url,_836,_837,_838){
if(jQuery("#HPT").size()){
jQuery("#HPT").remove();
}
if(_837==false&&_838){
_837="&nbsp;";
}
var de=document.documentElement;
var w=self.innerWidth||(de&&de.clientWidth)||document.body.clientWidth;
var _83b=getElementWidth(_836);
var _83c=w-getAbsoluteLeft(_836)-_83b;
var _83d=getAbsoluteLeft(_836);
var _83e=getAbsoluteTop(_836)-3;
var _83f=url.replace(/^[^\?]+\??/,"");
var _840=parseQuery(_83f);
if(_840["width"]===undefined){
_840["width"]=250;
}
if(_840["link"]!==undefined){
jQuery("#"+_836).bind("click",function(){
window.location=_840["link"];
});
jQuery("#"+_836).css("cursor","pointer");
}
var _841=_838?" <a href='#' class='close' onclick='jQuery(\"#HPT\").remove(); return false;'>x</a>":"";
var _842=_840["css"]?" class='"+_840["css"]+"'":"";
var _843;
var _844=false;
if(_840["dir"]!==undefined){
_843=_840["dir"];
}else{
if(_83c>(_840["width"]*1+11)){
_843="right";
}else{
if(_83c+_83b*0.3>(_840["width"]*1+11)){
_843="right";
_844=true;
}else{
if(_83d>(_840["width"]*1+11)){
_843="left";
}else{
_843="right";
_844=true;
}
}
}
}
var _845=_843=="left"?"right":"left";
var _846=_837?"<div id='HPT_close_"+_845+"'>"+_837+_841+"</div>":"";
var _847=_843=="left"?"style='left:"+((_840["width"]*1)+1)+"px"+"'":"";
jQuery("#container").append("<div id='HPT' style='width:"+_840["width"]*1+"px'"+_842+"><div id='HPT_arrow_"+_845+"' "+_847+"></div>"+_846+"<div id='HPT_copy'><div class='HPT_loader'><div></div></div>");
if(_843=="right"){
var _847=_83b+11;
if(_844){
var _848=getAbsoluteLeft(_836)+_847-_83b*0.3;
}else{
var _848=getAbsoluteLeft(_836)+_847;
}
}else{
var _848=getAbsoluteLeft(_836)-((_840["width"]*1)+15);
}
var _849=jQuery("#container").offset();
_848-=_849.left;
_83e-=_849.top;
jQuery("#HPT").css({left:_848+"px",top:_83e+"px"});
jQuery("#HPT").data("linkId",_836);
jQuery("#HPT").show();
jQuery("#HPT_copy").load(url);
};
function getElementWidth(_84a){
x=document.getElementById(_84a);
return x.offsetWidth;
};
function getAbsoluteLeft(_84b){
o=document.getElementById(_84b);
oLeft=o.offsetLeft;
while(o.offsetParent!=null){
oParent=o.offsetParent;
oLeft+=oParent.offsetLeft;
o=oParent;
}
return oLeft;
};
function getAbsoluteTop(_84c){
o=document.getElementById(_84c);
oTop=o.offsetTop;
while(o.offsetParent!=null){
oParent=o.offsetParent;
oTop+=oParent.offsetTop;
o=oParent;
}
return oTop;
};
function parseQuery(_84d){
var _84e=new Object();
if(!_84d){
return _84e;
}
var _84f=_84d.split(/[;&]/);
for(var i=0;i<_84f.length;i++){
var _851=_84f[i].split("=");
if(!_851||_851.length!=2){
continue;
}
var key=unescape(_851[0]);
var val=unescape(_851[1]);
val=val.replace(/\+/g," ");
_84e[key]=val;
}
return _84e;
};
function blockEvents(evt){
if(evt.target){
evt.preventDefault();
}else{
evt.returnValue=false;
}
};
Form.Element.setValue=function(_855,_856){
element_id=_855;
_855=$(_855);
if(!_855){
_855=document.getElementsByName(element_id)[0];
}
if(!_855){
return false;
}
var _857=_855.tagName.toLowerCase();
var _858=Form.Element.SetSerializers[_857](_855,_856);
};
Form.Element.SetSerializers={input:function(_859,_85a){
switch(_859.type.toLowerCase()){
case "submit":
case "hidden":
case "password":
case "text":
return Form.Element.SetSerializers.textarea(_859,_85a);
case "checkbox":
return Form.Element.SetSerializers.checkbox(_859,_85a);
case "radio":
return Form.Element.SetSerializers.inputSelector(_859,_85a);
}
return false;
},checkbox:function(_85b,_85c){
if(_85c==0||_85c==null||_85c==""){
_85b.checked=false;
}else{
_85b.checked=true;
}
},inputSelector:function(_85d,_85e){
fields=document.getElementsByName(_85d.name);
for(var i=0;i<fields.length;i++){
if(fields[i].value==_85e){
fields[i].checked=true;
}
}
},textarea:function(_860,_861){
_860.value=_861;
},select:function(_862,_863){
var _864="",opt,_866=_862.selectedIndex;
for(var i=0;i<_862.options.length;i++){
if(_862.options[i].value==_863){
_862.selectedIndex=i;
return true;
}
}
}};
var fx=new Object();
fx.Base=function(){
};
fx.Base.prototype={setOptions:function(_868){
this.options={duration:500,onComplete:"",transition:fx.sinoidal};
Object.extend(this.options,_868||{});
},step:function(){
var time=(new Date).getTime();
if(time>=this.options.duration+this.startTime){
this.now=this.to;
clearInterval(this.timer);
this.timer=null;
if(this.options.onComplete){
setTimeout(this.options.onComplete.bind(this),10);
}
}else{
var Tpos=(time-this.startTime)/(this.options.duration);
this.now=this.options.transition(Tpos)*(this.to-this.from)+this.from;
}
this.increase();
},custom:function(from,to){
if(this.timer!=null){
return;
}
this.from=from;
this.to=to;
this.startTime=(new Date).getTime();
this.timer=setInterval(this.step.bind(this),13);
},hide:function(){
this.now=0;
this.increase();
},clearTimer:function(){
clearInterval(this.timer);
this.timer=null;
}};
fx.Layout=Class.create();
fx.Layout.prototype=Object.extend(new fx.Base(),{initialize:function(el,_86e){
this.el=$(el);
this.el.style.overflow="hidden";
this.iniWidth=this.el.offsetWidth;
this.iniHeight=this.el.offsetHeight;
this.setOptions(_86e);
}});
fx.Height=Class.create();
Object.extend(Object.extend(fx.Height.prototype,fx.Layout.prototype),{increase:function(){
this.el.style.height=this.now+"px";
},toggle:function(){
var _86f=this.options.toHeight?this.options.toHeight:0;
if(this.el.offsetHeight>0){
this.custom(this.el.offsetHeight,_86f);
}else{
this.custom(0,this.el.scrollHeight);
}
}});
fx.Width=Class.create();
Object.extend(Object.extend(fx.Width.prototype,fx.Layout.prototype),{increase:function(){
this.el.style.width=this.now+"px";
},toggle:function(){
if(this.el.offsetWidth>0){
this.custom(this.el.offsetWidth,0);
}else{
this.custom(0,this.iniWidth);
}
}});
fx.Opacity=Class.create();
fx.Opacity.prototype=Object.extend(new fx.Base(),{initialize:function(el,_871){
this.el=$(el);
this.now=1;
this.increase();
this.setOptions(_871);
},increase:function(){
if(this.now==1&&(/Firefox/.test(navigator.userAgent))){
this.now=0.9999;
}
this.setOpacity(this.now);
},setOpacity:function(_872){
if(_872==0&&this.el.style.visibility!="hidden"){
this.el.style.visibility="hidden";
}else{
if(this.el.style.visibility!="visible"){
this.el.style.visibility="visible";
}
}
if(window.ActiveXObject){
this.el.style.filter="alpha(opacity="+_872*100+")";
}
this.el.style.opacity=_872;
},toggle:function(){
if(this.now>0){
this.custom(1,0);
}else{
this.custom(0,1);
}
}});
fx.sinoidal=function(pos){
return ((-Math.cos(pos*Math.PI)/2)+0.5);
};
fx.linear=function(pos){
return pos;
};
fx.cubic=function(pos){
return Math.pow(pos,3);
};
fx.circ=function(pos){
return Math.sqrt(pos);
};
fx.Scroll=Class.create();
fx.Scroll.prototype=Object.extend(new fx.Base(),{initialize:function(_877){
this.setOptions(_877);
},scrollTo:function(el){
var dest=Position.cumulativeOffset($(el))[1]-20;
var _87a=window.innerHeight||document.documentElement.clientHeight;
var full=document.documentElement.scrollHeight;
var top=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
if(dest+_87a>full){
this.custom(top,dest-_87a+(full-dest));
}else{
this.custom(top,dest);
}
},increase:function(){
window.scrollTo(0,this.now);
}});
fx.Text=Class.create();
fx.Text.prototype=Object.extend(new fx.Base(),{initialize:function(el,_87e){
this.el=$(el);
this.setOptions(_87e);
if(!this.options.unit){
this.options.unit="em";
}
},increase:function(){
this.el.style.fontSize=this.now+this.options.unit;
}});
fx.Combo=Class.create();
fx.Combo.prototype={setOptions:function(_87f){
this.options={opacity:true,height:true,width:false};
Object.extend(this.options,_87f||{});
},initialize:function(el,_881){
this.el=$(el);
this.setOptions(_881);
if(this.options.opacity){
this.o=new fx.Opacity(el,_881);
_881.onComplete=null;
}
if(this.options.height){
this.h=new fx.Height(el,_881);
_881.onComplete=null;
}
if(this.options.width){
this.w=new fx.Width(el,_881);
}
},toggle:function(){
this.checkExec("toggle");
},hide:function(){
this.checkExec("hide");
},clearTimer:function(){
this.checkExec("clearTimer");
},checkExec:function(func){
if(this.o){
this.o[func]();
}
if(this.h){
this.h[func]();
}
if(this.w){
this.w[func]();
}
},resizeTo:function(hto,wto){
if(this.h&&this.w){
this.h.custom(this.el.offsetHeight,this.el.offsetHeight+hto);
this.w.custom(this.el.offsetWidth,this.el.offsetWidth+wto);
}
},customSize:function(hto,wto){
if(this.h&&this.w){
this.h.custom(this.el.offsetHeight,hto);
this.w.custom(this.el.offsetWidth,wto);
}
}};
fx.Accordion=Class.create();
fx.Accordion.prototype={setOptions:function(_887){
this.options={delay:100,opacity:false};
Object.extend(this.options,_887||{});
},initialize:function(_888,_889,_88a){
this.elements=_889;
this.setOptions(_88a);
var _88a=_88a||"";
_889.each(function(el,i){
_88a.onComplete=function(){
if(el.offsetHeight>0){
el.style.height="1%";
}
};
el.fx=new fx.Combo(el,_88a);
el.fx.hide();
});
_888.each(function(tog,i){
tog.onclick=function(){
this.showThisHideOpen(_889[i]);
}.bind(this);
}.bind(this));
},showThisHideOpen:function(_88f){
this.elements.each(function(el,i){
if(el.offsetHeight>0&&el!=_88f){
this.clearAndToggle(el);
}
}.bind(this));
if(_88f.offsetHeight==0){
setTimeout(function(){
this.clearAndToggle(_88f);
}.bind(this),this.options.delay);
}
},clearAndToggle:function(el){
el.fx.clearTimer();
el.fx.toggle();
}};
var Remember=new Object();
Remember=function(){
};
Remember.prototype={initialize:function(el,_894){
this.el=$(el);
this.days=365;
this.options=_894;
this.effect();
var _895=this.readCookie();
if(_895){
this.fx.now=_895;
this.fx.increase();
}
},setCookie:function(_896){
var date=new Date();
date.setTime(date.getTime()+(this.days*24*60*60*1000));
var _898="; expires="+date.toGMTString();
document.cookie=this.el+this.el.id+this.prefix+"="+_896+_898+"; path=/";
},readCookie:function(){
var _899=this.el+this.el.id+this.prefix+"=";
var ca=document.cookie.split(";");
for(var i=0;c=ca[i];i++){
while(c.charAt(0)==" "){
c=c.substring(1,c.length);
}
if(c.indexOf(_899)==0){
return c.substring(_899.length,c.length);
}
}
return false;
},custom:function(from,to){
if(this.fx.now!=to){
this.setCookie(to);
this.fx.custom(from,to);
}
}};
fx.RememberHeight=Class.create();
fx.RememberHeight.prototype=Object.extend(new Remember(),{effect:function(){
this.fx=new fx.Height(this.el,this.options);
this.prefix="height";
},toggle:function(){
if(this.el.offsetHeight==0){
this.setCookie(this.el.scrollHeight);
}else{
this.setCookie(0);
}
this.fx.toggle();
},resize:function(to){
this.setCookie(this.el.offsetHeight+to);
this.fx.custom(this.el.offsetHeight,this.el.offsetHeight+to);
},hide:function(){
if(!this.readCookie()){
this.fx.hide();
}
}});
fx.RememberText=Class.create();
fx.RememberText.prototype=Object.extend(new Remember(),{effect:function(){
this.fx=new fx.Text(this.el,this.options);
this.prefix="text";
}});
fx.expoIn=function(pos){
return Math.pow(2,10*(pos-1));
};
fx.expoOut=function(pos){
return (-Math.pow(2,-10*pos)+1);
};
fx.quadIn=function(pos){
return Math.pow(pos,2);
};
fx.quadOut=function(pos){
return -(pos)*(pos-2);
};
fx.circOut=function(pos){
return Math.sqrt(1-Math.pow(pos-1,2));
};
fx.circIn=function(pos){
return -(Math.sqrt(1-Math.pow(pos,2))-1);
};
fx.backIn=function(pos){
return (pos)*pos*((2.7)*pos-1.7);
};
fx.backOut=function(pos){
return ((pos-1)*(pos-1)*((2.7)*(pos-1)+1.7)+1);
};
fx.sineOut=function(pos){
return Math.sin(pos*(Math.PI/2));
};
fx.sineIn=function(pos){
return -Math.cos(pos*(Math.PI/2))+1;
};
fx.sineInOut=function(pos){
return -(Math.cos(Math.PI*pos)-1)/2;
};
fx.Position=Class.create();
fx.Position.prototype=Object.extend(new fx.Base(),{initialize:function(el,_8ab){
this.el=$(el);
this.setOptions(_8ab);
this.now=[0,0];
},step:function(){
var time=(new Date).getTime();
if(time>=this.options.duration+this.startTime){
this.now=this.to;
clearInterval(this.timer);
this.timer=null;
if(this.options.onComplete){
setTimeout(this.options.onComplete.bind(this),10);
}
}else{
var Tpos=(time-this.startTime)/(this.options.duration);
var tmp=[];
tmp[0]=(this.options.transition(Tpos)*(this.to[0]-this.from[0])+this.from[0]);
tmp[1]=(this.options.transition(Tpos)*(this.to[1]-this.from[1])+this.from[1]);
this.now=tmp;
}
this.increase();
},increase:function(){
this.el.style["left"]=this.now[0]+"px";
this.el.style["top"]=this.now[1]+"px";
},move:function(from,to){
to=to?to:this.now;
this.custom(from,to);
}});
fx.Color=Class.create();
fx.Color.prototype=Object.extend(new fx.Base(),{initialize:function(el,_8b2){
this.el=$(el);
this.setOptions(_8b2);
this.now=0;
this.regex=new RegExp("#?(..?)(..?)(..?)");
if(!this.options.fromColor){
this.options.fromColor="#FFFFFF";
}
if(!this.options.toColor){
this.options.toColor="#FFFFFF";
}
if(!this.options.property){
this.props=new Array("backgroundColor");
}else{
this.props=this.options.property.split(",");
}
},increase:function(){
var hex="rgb("+(Math.round(this.cs[0]+(this.ce[0]-this.cs[0])*this.now))+","+(Math.round(this.cs[1]+(this.ce[1]-this.cs[1])*this.now))+","+(Math.round(this.cs[2]+(this.ce[2]-this.cs[2])*this.now))+")";
for(i=0;i<this.props.length;i++){
if(this.props[i]=="backgroundColor"){
this.el.style.backgroundColor=hex;
}else{
if(this.props[i]=="color"){
this.el.style.color=hex;
}else{
if(this.props[i]=="borderColor"){
this.el.style.borderColor=hex;
}
}
}
}
},toggle:function(){
this.cs=this.regex.exec(this.options.fromColor);
this.ce=this.regex.exec(this.options.toColor);
for(i=1;i<this.cs.length;i++){
this.cs[i-1]=parseInt(this.cs[i],16);
this.ce[i-1]=parseInt(this.ce[i],16);
}
if(this.now>0){
this.custom(1,0);
}else{
this.custom(0,1);
}
},cycle:function(){
this.toggle();
setTimeout(this.toggle.bind(this),this.options.duration+10);
},customColor:function(from,to){
this.cs=this.regex.exec(from);
this.ce=this.regex.exec(to);
for(i=1;i<this.cs.length;i++){
if(this.cs[i].length==1){
this.cs[i]+=this.cs[i];
}
if(this.ce[i].length==1){
this.ce[i]+=this.ce[i];
}
this.cs[i-1]=parseInt(this.cs[i],16);
this.ce[i-1]=parseInt(this.ce[i],16);
}
this.custom(0,1);
},customColorRGB:function(from,to){
this.rgb_regex=new RegExp("^rgb.([^,]*),s?([^,]*),s?([^)]*)");
this.cs=this.rgb_regex.exec(from);
this.ce=this.rgb_regex.exec(to);
if(!this.cs){
this.customColor(from,to);
return;
}
for(i=1;i<this.cs.length;i++){
this.cs[i-1]=parseInt(this.cs[i]);
this.ce[i-1]=parseInt(this.ce[i]);
}
this.custom(0,1);
}});
fx.Slide=Class.create();
Object.extend(Object.extend(fx.Slide.prototype,fx.Layout.prototype),{increase:function(){
this.el.style.height=this.now+"px";
},toggle:function(){
if(this.el.offsetHeight>0){
this.custom(this.el.offsetHeight,0);
}else{
this.custom(0,this.el.scrollHeight);
}
}});
function toggleOverlay(id){
toggleOverlay.init(id);
toggleOverlay.toggleCurtain();
};
function overlayIsOpen(id){
toggleOverlay.init(id);
return toggleOverlay.curtain.style.display=="block";
};
toggleOverlay.init=function(id){
this.isIE6orBelow=false;
var _8bb=navigator.userAgent.toLowerCase();
var _8bc=_8bb.indexOf("msie")+1;
if(_8bc){
version=_8bb.charAt(_8bc+4);
if(version<=6){
this.isIE6orBelow=true;
}
}
this.isMobile=_8bb.indexOf("mobile")>-1;
this.overlay=$(id);
this.wrapper=this.getWrapper();
this.curtain=this.getCurtain();
this.wrapper.appendChild(this.overlay);
if(this.isIE6orBelow){
this.iframe=this.getIframe();
}
if(navigator.userAgent.indexOf("Linux")!=-1){
tempObjects=document.body.getElementsByTagName("object");
this.elementsToHide=[];
for(var i=0;i<tempObjects.length;i++){
if(!$(tempObjects[i]).descendantOf(this.overlay)){
this.elementsToHide.push(tempObjects[i]);
}
}
}
if(this.isMobile){
scroll(0,0);
}
};
toggleOverlay.toggleCurtain=function(id){
this.overlay.toggle();
if(this.curtain.style.display!="block"){
this.showCurtain();
}else{
this.hideCurtain();
}
};
toggleOverlay.showCurtain=function(){
this.setElementVisibility("hidden");
this.wrapper.style.display="block";
this.curtain.style.display="block";
if(this.isIE6orBelow){
this.iframe.style.display="block";
}
this.stretchCurtain();
jq(this.overlay).trigger("visible",true);
Event.observe(window,"resize",this.stretchCurtain,false);
};
toggleOverlay.hideCurtain=function(){
this.setElementVisibility("visible");
this.curtain.style.display="none";
this.wrapper.style.display="none";
if(this.isIE6orBelow){
this.iframe.style.display="none";
}
jq(this.overlay).trigger("visible",false);
Event.stopObserving(window,"resize",this.stretchCurtain,false);
};
toggleOverlay.setElementVisibility=function(_8bf){
if(this.elementsToHide){
for(i=0;i<this.elementsToHide.length;i++){
this.elementsToHide[i].style.visibility=_8bf;
}
}
};
toggleOverlay.getWrapper=function(){
var id="toggleOverlayWrapper";
var div=$(id);
if(div){
return div;
}
div=document.createElement("div");
div.id=id;
document.body.appendChild(div);
div.style.zIndex="1000";
if(this.isIE6orBelow){
div.style.position="absolute";
div.style.top=Position.getViewportScrollY()+"px";
Event.observe(window,"scroll",function(){
div.style.top=Position.getViewportScrollY()+"px";
});
}else{
div.style.position="fixed";
}
return div;
};
toggleOverlay.getCurtain=function(){
var id="toggleOverlayCurtain";
var _8c3=$(id);
if(_8c3){
return _8c3;
}
_8c3=document.createElement("div");
_8c3.id=id;
this.wrapper.appendChild(_8c3);
return _8c3;
};
toggleOverlay.getIframe=function(){
var id="toggleOverlayIframe";
var _8c5=$(id);
if(_8c5){
return _8c5;
}
_8c5=document.createElement("iframe");
_8c5.id=id;
_8c5.src="";
_8c5.frameBorder="no";
_8c5.scrolling="no";
document.body.appendChild(_8c5);
return _8c5;
};
toggleOverlay.stretchCurtain=function(){
if(document.documentElement){
height=document.documentElement.scrollHeight;
}else{
height=document.body.scrollHeight;
}
toggleOverlay.wrapper.style.height=height+"px";
toggleOverlay.wrapper.style.width=document.body.scrollWidth+"px";
toggleOverlay.curtain.style.height=height+"px";
if(this.isIE6orBelow){
toggleOverlay.iframe.style.height=height+"px";
toggleOverlay.iframe.style.width=document.body.scrollWidth+"px";
}
if(this.isMobile||navigator.userAgent.indexOf("AppleWebKit/")>-1&&!document.evaluate){
wd=self["innerWidth"];
}else{
if(navigator.userAgent.indexOf("Opera")>-1&&parseFloat(window.opera.version())<9.5){
wd=document.body["clientWidth"];
}else{
wd=document.documentElement["clientWidth"];
}
}
left=wd/2-toggleOverlay.overlay.clientWidth/2+"px";
toggleOverlay.overlay.style.left=left;
};
JSONstring={compactOutput:false,includeProtos:false,includeFunctions:false,detectCirculars:false,restoreCirculars:true,make:function(arg,_8c7){
this.restore=_8c7;
this.mem=[];
this.pathMem=[];
return this.toJsonStringArray(arg).join("");
},toObject:function(x){
eval("this.myObj="+x);
if(!this.restoreCirculars||!alert){
return this.myObj;
}
this.restoreCode=[];
this.make(this.myObj,true);
var r=this.restoreCode.join(";")+";";
eval("r=r.replace(/\\W([0-9]{1,})(\\W)/g,\"[$1]$2\").replace(/\\.\\;/g,\";\")");
eval(r);
return this.myObj;
},toJsonStringArray:function(arg,out){
if(!out){
this.path=[];
}
out=out||[];
var u;
switch(typeof arg){
case "object":
this.lastObj=arg;
if(this.detectCirculars){
var m=this.mem;
var n=this.pathMem;
for(var i=0;i<m.length;i++){
if(arg===m[i]){
out.push("\"JSONcircRef:"+n[i]+"\"");
return out;
}
}
m.push(arg);
n.push(this.path.join("."));
}
if(arg){
if(arg.constructor==Array){
out.push("[");
for(var i=0;i<arg.length;++i){
this.path.push(i);
if(i>0){
out.push(",\n");
}
this.toJsonStringArray(arg[i],out);
this.path.pop();
}
out.push("]");
return out;
}else{
if(typeof arg.toString!="undefined"){
out.push("{");
var _8d0=true;
for(var i in arg){
if(!this.includeProtos&&arg[i]===arg.constructor.prototype[i]){
continue;
}
this.path.push(i);
var curr=out.length;
if(!_8d0){
out.push(this.compactOutput?",":",\n");
}
this.toJsonStringArray(i,out);
out.push(":");
this.toJsonStringArray(arg[i],out);
if(out[out.length-1]==u){
out.splice(curr,out.length-curr);
}else{
_8d0=false;
}
this.path.pop();
}
out.push("}");
return out;
}
}
return out;
}
out.push("null");
return out;
case "unknown":
case "undefined":
case "function":
out.push(this.includeFunctions?arg:u);
return out;
case "string":
if(this.restore&&arg.indexOf("JSONcircRef:")==0){
this.restoreCode.push("this.myObj."+this.path.join(".")+"="+arg.split("JSONcircRef:").join("this.myObj."));
}
out.push("\"");
var a=["\\","\\\\","\n","\\n","\r","\\r","\"","\\\""];
arg+="";
for(var i=0;i<8;i+=2){
arg=arg.split(a[i]).join(a[i+1]);
}
out.push(arg);
out.push("\"");
return out;
default:
out.push(String(arg));
return out;
}
}};
var detect=navigator.userAgent.toLowerCase();
var OS,browser,version,total,thestring;
if(checkIt("konqueror")){
browser="Konqueror";
OS="Linux";
}else{
if(checkIt("safari")){
browser="Safari";
}else{
if(checkIt("opera")){
browser="Opera";
}else{
if(checkIt("msie")){
browser="IE";
}else{
if(!checkIt("compatible")){
browser="Netscape Navigator";
version=detect.charAt(8);
}else{
browser="An unknown browser";
}
}
}
}
}
if(!version){
version=detect.charAt(place+thestring.length);
}
if(!OS){
if(checkIt("linux")){
OS="Linux";
}else{
if(checkIt("x11")){
OS="Unix";
}else{
if(checkIt("mac")){
OS="Mac";
}else{
if(checkIt("win")){
OS="Windows";
}else{
OS="an unknown operating system";
}
}
}
}
}
var insideHubEditor=false;
function checkIt(_8d3){
place=detect.indexOf(_8d3)+1;
thestring=_8d3;
return place;
};
function ssToId(id){
var s=new SoftScroll(id);
return false;
};
function ssTo(_8d6){
var s=new SoftScroll("mod_"+_8d6);
return false;
};
function ssOnload(){
var _8d8=location.hash.slice(1);
if(_8d8=="comments"){
ssToId("comFirst");
}else{
if(_8d8.substr(0,8)=="comment-"){
ssToId("comment"+_8d8.substr(8));
}else{
if(_8d8!=null&&_8d8){
ssToId(_8d8);
}
}
}
};
var SoftScroll=Class.create();
SoftScroll.prototype={initialize:function(ele,_8da,_8db){
this.ele=$(ele);
this.durat=_8da||1000;
this.delay=_8db||0;
if(this.delay){
setTimeout(this.toggle.bind(this),this.delay);
}else{
this.toggle();
}
},toggle:function(){
this.scroll=new fx.Scroll({duration:this.durat});
this.scroll.scrollTo(this.ele);
}};
function insertVideo(type,key,css,_8df,_8e0,_8e1){
var _8e2="<div class=\"video\">";
var mode="opaque";
if(_8e0){
mode="transparent";
}
if(_8e1=="bad"){
_8e2="<div class=\"video\" style=\"background-color: #f7e1e1; border-bottom:3px solid #ed9693; color: #440000; padding: 5px;\">"+"<p style=\"margin:0;\">&nbsp;The specified URL is not working</p></div>";
}
if(type=="Google"){
_8e2+="<embed style=\""+_8df+"\" class=\""+css+"\" "+"type=\"application/x-shockwave-flash\" id=\"VideoPlayback\" "+"src=\"http://video.google.com/googleplayer.swf?docId="+key+"&hl=en\""+" flashvars=\"\" wmode=\""+mode+"\">"+"</embed>";
}else{
if(type=="YouTube"){
_8e2+="<embed style=\""+_8df+"\" class=\""+css+"\" "+"type=\"application/x-shockwave-flash\" "+"src=\"http://www.youtube.com/v/"+key+"\" scale=\"exactFit\" "+"wmode=\""+mode+"\">"+"</embed>";
}else{
if(type=="Revver"){
_8e2+="<embed style=\""+_8df+"\" class=\""+css+"\" "+"type=\"application/x-shockwave-flash\" "+"src=\"http://flash.revver.com/player/1.0/player.swf?mediaId="+key+"\" scale=\"exactFit\" "+"wmode=\""+mode+"\" allowfullscreen=\"true\" allowScriptAccess=\"always\" flashvars=\"allowFullScreen=true\">"+"</embed>";
}else{
if(type=="Metacafe"){
_8e2+="<embed style=\""+_8df+"\" class=\""+css+"\" "+"type=\"application/x-shockwave-flash\" "+"src=\"http://www.metacafe.com/fplayer/"+key+".swf\" scale=\"exactFit\" "+"wmode=\""+mode+"\">"+"</embed>";
}else{
if(type=="Yahoo"){
var vid=key.substr(0,key.indexOf("/"));
var id=key.substr(key.indexOf("/")+1);
_8e2+="<embed class=\""+css+"\" flashvars=\"callback_function=YAHOO.yv.Player.SWFInterface&amp;id="+id+"&amp;vid="+vid+"&amp;autoPlay=0"+"&amp;site=video.yahoo.com&amp;lang=en-US&amp;intl=us&amp;"+"thumbUrl=http%3A//us.i1.yimg.com/us.yimg.com/i/us/sch/cn/video08/"+vid+"_rnde180d393_19.jpg\""+" allowfullscreen=\"true\" allowscriptaccess=\"never\" quality=\"high\" bgcolor=\"#000\" scale=\"exactFit\" "+" src=\"http://d.yimg.com/static.video.yahoo.com/yep/YV_YEP.swf\""+" type=\"application/x-shockwave-flash\" wmode=\""+mode+"\" />";
}else{
if(type=="YahooSports"){
_8e2+="<embed class=\""+css+"\" vid=\""+key+"\" flashvars=\"vid="+key+"\" allowfullscreen=\"true\" allowscriptaccess=\"never\" quality=\"high\" "+" bgcolor=\"#000\" scale=\"exactFit\" src=\"http://d.yimg.com/m/up/ypp/sports/player.swf\" type=\"application/x-shockwave-flash\" wmode=\""+mode+"\" />";
}else{
if(type=="Vimeo"){
_8e2+="<embed style=\""+_8df+"\" class=\""+css+"\" "+"type=\"application/x-shockwave-flash\" "+"src=\"http://vimeo.com/moogaloop.swf?clip_id="+key+"&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;"+"show_portrait=0&amp;color=&amp;fullscreen=1\" scale=\"exactFit\" allowFullscreen=\"true\" allowScriptAccess=\"never\" "+"wmode=\""+mode+"\">"+"</embed>";
}else{
if(type=="BlipTV"){
_8e2+="<embed style=\""+_8df+"\" class=\""+css+"\" "+"type=\"application/x-shockwave-flash\" "+"src=\"http://blip.tv/play/"+key+"\" scale=\"exactFit\" allowFullscreen=\"true\" allowScriptAccess=\"always\" "+"wmode=\""+mode+"\">"+"</embed>";
}else{
if(type=="Unknown"){
_8e2+="<p style=\"margin-left:1em\">The specified URL was not recognized</p>";
}else{
_8e2+="<p style=\"margin-left:1em\">Video Not Available</p>";
}
}
}
}
}
}
}
}
}
_8e2+="</div>";
if(_8e0){
Element.update(_8e0,_8e2);
}else{
if(type!="New"){
document.write(_8e2);
}
}
};
function safeScriptEval(_8e6){
var _8e7=_8e6.innerHTML.strip();
if(_8e7.substring(0,4)=="<!--"){
_8e7=_8e7.substring(4,_8e7.length-3);
}
try{
eval(_8e7);
}
catch(e){
}
};
function seeMoreTags(id){
jq.post("/xml/tags.php",{a:id},function(rsp){
jq("#nav_tags").append(rsp);
});
};
function shareHub(url){
new Ajax.Request("/xml/hubfeedshare.php",{parameters:$H({url:url}).toQueryString(),onSuccess:function(req){
eval(req.responseText);
if(success){
$("share_with_followers").innerHTML="Hub shared!";
}else{
$("share_with_followers").innerHTML="Sorry, something went wrong!";
}
}});
};
function praiseHub(id,val,d,c){
if(!id){
return;
}
$("praise_feedback").innerHTML="Saving ...";
var uri=$H({a:id,v:val,h:1}).toQueryString();
var ajax=new Ajax.Updater("praise_item_"+val,"/xml/feedback.php",{parameters:uri,onFailure:reportError,onSuccess:function(){
$("praise_feedback").innerHTML="Saved. Thanks!";
}});
return false;
};
function recArt(id,val){
var _8f4="rec_"+id;
var uri=$H({a:id,v:val}).toQueryString();
var ajax=new Ajax.Updater({success:_8f4},"/xml/feedback.php",{parameters:uri,onFailure:reportError});
return false;
};
function selectTab(_8f7,_8f8,_8f9){
var _8fa,_8fb;
for(var i=0;i<_8f9;i++){
_8fa=$("tab_"+_8f7+"_"+i);
_8fb=$("tabcontent_"+_8f7+"_"+i);
if(!_8fa||!_8fb){
alert("Cannot locate element: baseid="+_8f7+" index="+_8f8+" tabcount="+_8f9);
}
if(i==_8f8){
Element.addClassName(_8fa,"selected");
Element.addClassName(_8fb,"selected");
}else{
Element.removeClassName(_8fa,"selected");
Element.removeClassName(_8fb,"selected");
}
}
return false;
};
function categoryFanSignupNewUser(){
if(categoryFanCountChecked()==0){
$("warning").show();
}else{
categoryFanBulkJoin("category_fan_new_user",true);
}
};
function categoryFanSearchNewUser(){
$("nextStep").show();
categoryFanSearch("category_fan_new_user","category_fan_search_text",12,-1,categorySearchCallback);
};
function categoryFanMy(){
categoryFanBulkJoin("my_category_fans",false,true);
$("category_fan_search").innerHTML="";
$("category_fan_search_text").value="";
return false;
};
function categoryFanCountChecked(){
var _8fd=document.getElementsByClassName("jc");
var _8fe=0;
for(var j=0;j<_8fd.length;j++){
if(_8fd[j].checked){
_8fe++;
}
}
return _8fe;
};
function categoryFanBulkJoin(id,_901,_902,_903,_904){
var _905=document.getElementsByClassName("jc");
var cids=Array();
var _907=Array();
var i=0;
var k=0;
for(var j=0;j<_905.length;j++){
if(_905[j].checked){
cids[i++]=Number(_905[j].name.substr(3));
}else{
if(!_903){
_907[k++]=Number(_905[j].name.substr(3));
}
}
}
checked_ids=cids.join(",");
unchecked_ids=_907.join(",");
if(_903){
var ajax=new Ajax.Request("/xml/categoryFanBulkJoin.php",{parameters:$H({checked_ids:checked_ids,unchecked_ids:unchecked_ids,html_target:id}).toQueryString(),onSuccess:function(req){
if(_904){
_904(req);
}
}});
}else{
var ajax=new Ajax.Updater({success:id},"/xml/categoryFanBulkJoin.php",{parameters:$H({checked_ids:checked_ids,unchecked_ids:unchecked_ids,html_target:id}).toQueryString(),onSuccess:function(req){
if(_901){
window.location.replace("/contacts/newuser.php");
return;
}else{
if(_902){
setTimeout(categoryFanHighlight,500);
}
}
if(_904){
_904(req);
}
}});
}
return false;
};
function categoryFanHighlight(){
var elts=$$(".highlighted");
elts.each(function(elt){
var _910=new fx.Color(elt,{duration:700,fromColor:"#feffd7",toColor:"#ffffff"});
_910.toggle();
});
};
function categoryFanSearch(_911,_912,_913,cols,_915){
if(!_913){
var _913=8;
}
if(!cols){
var cols=2;
}
var _916=$F(_912);
if(_916.strip()==""){
return;
}
var ajax=new Ajax.Updater({success:_911},"/xml/categoryFanSearch.php",{parameters:$H({search:_916,limit:_913,cols:cols}),onComplete:function(){
if(_915){
_915();
}
}});
return false;
};
function submitProfileInfo(){
$("saveFailed").hide();
var ajax=new Ajax.Request("/xml/profile/profile.php",{parameters:$H({ajax:1,city:$("city").value,bio:$("biotext").value}).toQueryString(),onFailure:reportError,onComplete:function(_919){
var json=JSONstring.toObject(_919.responseText);
if(json.status=="saved"||json.status=="no change"){
$("saveSuccess").show();
}else{
if(json.status=="error"){
$("saveFailed").show();
}
}
}});
return false;
};
function facebookConnect(_91b,_91c){
_91b=typeof (_91b)!="undefined"?encodeURIComponent(_91b):"http%3A%2F%2Fhubpages.com%2Fuser%2Fnew%2Ffacebook_window.php";
_91c=typeof (_91c)!="undefined"?encodeURIComponent(_91c):"http%3A%2F%2Fhubpages.com%2Fuser%2Fnew%2Ffacebook_window.php?cancel=1";
authurl="https://www.facebook.com/login.php?api_key=86382555399&cancel_url="+_91c+"&display=popup&fbconnect=1&next="+_91b+"&return_session=1&session_version=3&v=1.0";
xyPos="";
if(window.screenX&&window.innerWidth){
xPos=window.screenX+((window.innerWidth-550)/2);
yPos=window.screenY+((window.innerHeight-300)/2);
xyPos="top="+yPos+",left="+xPos+",";
}else{
if(window.screenLeft&&document.body.clientHeight){
xPos=window.screenLeft+((document.body.clientWidth-550)/2);
yPos=window.screenTop+((document.body.clientHeight-300)/2);
xyPos="top="+yPos+",left="+xPos+",";
}
}
child=window.open(authurl,"authwindow",xyPos+"width=550,height=300,scrollbars=no,location=yes");
child.opener=self;
if(window.focus){
child.focus();
}
return false;
};
function toggleShareIt(id,flg){
if(flg){
var uri=$H({art_id:id}).toQueryString();
var ajax=new Ajax.Updater({success:"share_tgt"},"/xml/shareit.php",{parameters:uri,onFailure:reportError});
}else{
$("share_tgt").innerHTML="";
}
return false;
};
function showAskSignup(_921){
var uri=$H({btn_text:"ask!",explain:_921,show_signup:1}).toQueryString();
showAjaxOverlay("/xml/showsignup.php",uri,"linkarticle");
return false;
};
function showLinkArticle(url,_924){
var uri=$H({page_url:url,page_title:_924}).toQueryString();
showAjaxOverlay("/xml/linkarticle.php",uri,"linkarticle");
return false;
};
function showFlagHub(id){
var uri=$H({}).toQueryString();
showAjaxOverlay("/xml/flaghub.php?a="+id,uri,"flaghub");
return false;
};
function showFlagRequest(id){
var uri=$H({}).toQueryString();
showAjaxOverlay("/xml/flagrequest.php?r="+id,uri,"flagrequest");
return false;
};
function showFlagProfile(id){
var uri=$H({}).toQueryString();
showAjaxOverlay("/xml/flagprofile.php?u="+id,uri,"flagrequest");
return false;
};
function showEmailForm(purl,_92d,_92e){
var uri=$H({page_url:purl,page_type:_92d,page_filter:_92e}).toQueryString();
showAjaxOverlay("/xml/emailpage.php",uri,"emailhub");
return false;
};
function showEditProfileForm(){
var uri=$H({}).toQueryString();
showAjaxOverlay("/xml/profileform.php",uri,"editprofile");
return false;
};
function showHubOverlay(url,_932,_933){
var uri=$H({url:url,addComment:_932,commentText:_933}).toQueryString();
showAjaxOverlay("/xml/articlerender.php",uri,"hubpage");
return false;
};
function showAjaxOverlay(_935,_936,_937){
if(!$("overlay")){
var pole=new Insertion.Before("footer","<div id=\"overlay\" class=\"overlay\" style=\"display:none\"><a id=\"overlay_close\" href=\"#\" onclick=\"return closeAjaxOverlay();\"/>close</a><div id=\"overlay_content\"><div class=\"spinner\"></div></div></div>");
}
if(_937){
$("overlay").addClassName(_937);
}
toggleOverlay("overlay");
var ajax=new Ajax.Updater({success:"overlay_content"},_935,{parameters:_936,onComplete:function(){
if(!$("fixed_title")){
return;
}
var _93a=$("fixed_title").getHeight();
if(browser!="IE"||version>6){
$("overlay").setStyle({paddingTop:_93a+"px"});
}
adjustOverlayHeight();
}.bind(this),onFailure:reportError,evalScripts:true});
};
function closeAjaxOverlay(){
toggleOverlay("overlay");
$("overlay").className="overlay";
$("overlay_content").innerHTML="<div class=\"spinner\"></div>";
return false;
};
function adjustOverlayHeight(){
var _93b=browser=="IE"&&version<=6;
var _93c=$("overlay");
var _93d=Position.getViewportHeight();
if(_93d>750){
var _93e=_93d-150;
}else{
var _93e=_93d-90;
}
var _93f=_93c.getStyle("paddingTop");
var _940=_93c.getStyle("paddingBottom");
_93e-=_93f.substring(0,_93f.length-2);
_93e-=_940.substring(0,_940.length-2);
_93e=Math.max(_93e,100);
$("overlay").setStyle({height:_93e+"px"});
if(_93d>750){
$("overlay").setStyle({top:"75px"});
if($("fixed_title")&&!_93b){
$("fixed_title").setStyle({top:"75px"});
}
}else{
$("overlay").setStyle({top:"45px"});
if($("fixed_title")&&!_93b){
$("fixed_title").setStyle({top:"45px"});
}
}
if($("scrollable_content")){
var _941=$("overlay").getHeight()-$("fixed_title").getHeight()-10;
$("scrollable_content").setStyle({height:_941+"px"});
$("overlay_content").setStyle({overflowY:"visible"});
}else{
$("overlay_content").setStyle({height:(_93e-60)+"px",overflowY:"auto"});
}
};
function followQuestion(_942){
if(_942){
var data={questionId:_942};
var ajax=new jQuery.ajax({type:"POST",url:"/xml/follow.php",data:data,success:function(data){
if(data=="Not signed in"){
var url="/signin?explain=";
url+=escape("follow comments on this Hub");
url+="&url=";
url+=encodeURI(document.URL);
url+="#comments";
document.location.href=url;
}else{
jQuery("#follow_"+_942).replaceWith(data);
var _947=jQuery("#followResult"+_942);
if(_947){
if(data.indexOf("Unfollow",0)==0){
_948="You will now receive email when this question receives answers.";
_947.html(_948);
}else{
if(data.indexOf("Follow",0)==0){
var _948="You are no longer following this question.";
_947.text(_948);
}
}
}
}
}});
}
};
function followArticle(_949){
if(_949){
var data={articleId:_949};
var ajax=new jQuery.ajax({type:"POST",url:"/xml/follow.php",data:data,success:function(data){
if(data=="Not signed in"){
var url="/signin?explain=";
url+=escape("follow comments on this Hub");
url+="&url=";
url+=encodeURI(document.URL);
url+="#comments";
document.location.href=url;
}else{
jQuery(".follow_article_"+_949).html(data);
}
}});
}
};
function followForumTopic(_94e){
if(_94e){
var data={forumTopicId:_94e};
var ajax=new jQuery.ajax({type:"POST",url:"/xml/follow.php",data:data,success:function(data){
if(data=="Not signed in"){
var url="/signin?explain=";
url+=escape("follow forum topics");
url+="&url=";
url+=encodeURI(document.URL);
document.location.href=url;
}else{
jQuery("#follow_"+_94e).replaceWith(data);
}
}});
}
};
function updateFollowArticleButton(_953){
jQuery.ajax({type:"POST",url:"/xml/get_follow_text.php",data:{articleId:_953},success:function(data){
jQuery(".follow_article_"+_953).html(data);
}});
};
function updateFollowQuestionButton(_955){
jQuery.ajax({type:"POST",url:"/xml/get_follow_text.php",data:{questionId:_955},success:function(data){
jQuery("#follow_"+_955).replaceWith(data);
}});
};
function updateFollowForumTopicButton(_957){
jQuery.ajax({type:"POST",url:"/xml/get_follow_text.php",data:{forumTopicId:_957},success:function(data){
jQuery("#follow_"+_957).replaceWith(data);
}});
};
function expandComments(id,mm,flg){
if(flg){
var _95c=$H({mdc_id:id,modMode:mm}).toQueryString();
var ajax=new Ajax.Updater({success:"comment_tgt"},"/xml/comments.php",{parameters:_95c,onFailure:reportError});
}else{
$("comment_tgt").innerHTML="";
}
return false;
};
function expandRequests(id,_95f){
var _960=$H({article_id:id,num_pages:_95f}).toQueryString();
var ajax=new Ajax.Updater({success:"request_list_tgt"},"/xml/questions.php",{parameters:_960,onFailure:reportError});
return false;
};
function activity_why(id,_963,_964,_965){
var ajax=new Ajax.Updater({success:id},"/xml/activity_why.php",{parameters:$H({actionTypeId:_963,actionTargetId:_964,createDate:_965}).toQueryString(),onFailure:reportError,onComplete:function(){
if(typeof canvas!="undefined"&&canvas.redraw){
canvas.redraw();
}
}});
return false;
};
function article_flag(id,flag){
var ajax=new Ajax.Updater({success:"flaglink_"+id+"_"+flag},"/xml/flaghub.php",{parameters:$H({aID:id,reason:flag}).toQueryString(),onFailure:reportError});
};
function ellipse(str,_96b){
if(str.length>_96b&&_96b!=0){
str=str.substr(0,_96b-3);
var pos=str.lastIndexOf(" ");
if(pos===-1){
str=str.substr(0,_96b-3)+"...";
}else{
str=str.substr(0,pos)+"...";
}
}
return str;
};
function loadRandomArt(_96d,_96e){
var ajax=new Ajax.Request("/xml/random.php",{method:"post",parameters:"score="+_96e,onFailure:reportError,onComplete:function(req){
_96d.location.href=req.responseText;
}});
};
function toggleCommentEdit(_971,_972){
if(_972){
$("cedit_"+_971).style.display="none";
$("cbox_"+_971).style.display="";
$("ctext_"+_971).style.display="none";
}else{
$("cedit_"+_971).style.display="";
$("cbox_"+_971).style.display="none";
$("ctext_"+_971).style.display="";
}
};
function reportError(req){
alert("Something went wrong. Please try again. And when you get a chance, you may want to report this issue in the Hubpages forums.");
var _974=req.getAllResponseHeaders();
var ajax=new Ajax.Request("/xml/reporterror.php",{parameters:_974+"&error=1"});
};
function addTagEntries(){
var _976=4;
var _977=document.createElement("div");
_977.id="moreEntryDiv";
var li=null;
var _979=4+1;
var _97a=_979+_976;
for(var i=_979;i<_97a;i++){
li=document.createElement("li");
_977.appendChild(li);
var _97c=document.createElement("input");
_97c.className="tagEntry";
_97c.name="tag_"+i;
_97c.type="text";
_97c.size=40;
li.appendChild(_97c);
}
$("tagEntries").appendChild(_977);
return true;
};
function hubtool_add_tag(_97d){
var _97e=(_97d)?$(_97d):$("add_tag_input");
if(!_97e){
return;
}
var tag;
if(Field.present(_97e)&&_97e.type){
tag=$F(_97e);
Field.clear(_97e);
}else{
if(_97e.innerHTML){
tag=_97e.innerHTML;
Element.remove(Element.findElement(_97e,"li"));
}
}
if(!tag){
return;
}
var _980=0;
var _981=/^tag_(\d+)$/i;
var _982=document.getElementsByClassName("tagEntry");
_982.each(function(ele){
if(ele.id){
var ms=_981.exec(ele.id);
if(ms&&ms.length>0){
var id=parseInt(ms[1],10);
if($F(ele).length&&id>_980){
_980=id;
}
}
}
});
_980++;
var _986="tag_"+_980;
var _987=$("add_tag_input").parentNode;
var _988="<input class=\"tagEntry\" id=\""+_986+"\" name=\""+_986+"\" value=\""+tag+"\" size=\"30\" onFocus=\"_helpOn('help__tags')\" onBlur=\"_helpOff('help__tags')\" />";
if($(_986)){
var _989=$(_986).tabIndex;
Element.update($(_986).parentNode,_988);
$(_986).tabIndex=_989;
}else{
var _98a=$("tag_1").tabIndex-1;
var _989=_98a+_980;
var pole=new Insertion.Before(_987,"<li>"+_988+"</li>");
$(_986).tabIndex=_989;
_989=$("add_tag_input").tabIndex;
_989++;
$("add_tag_input").tabIndex=_989;
}
return false;
};
function add_calculated_tag(_98c,tag,_98e){
var _98f=tag.replace(/'/g,"\\'");
var _990=tag.replace(/ /g,"+");
var _991="tagd_"+tag.replace(/ /g,"_");
_991=_991.toLowerCase();
if($(_991)){
$(_991).style.fontWeight="bolder";
Field.clear("add_tag_input");
}else{
if(!tag.match(/^[a-zA-Z0-9 \-\'\&\.]{2,100}$/)){
alert("Invalid tag \""+tag+"\".\n\nTags should be from 2-100 characters, and contain only numbers, letters, spaces, dashes, periods, and ampersands.");
}else{
var _992=$("nav_tags_edit");
var _993="<a href=\"javascript:void delete_tag('"+_98c+"','"+_98f+"');\"><img src=\"http://x.hubpages.com/x/hubtool_discard_tag.gif\" width=\"14\" height=\"14\"/></a>";
_993+="<a id=\""+_991+"\" href=\"/tag/"+_990+"\">"+tag+"</a>";
var item=document.createElement("li");
item.innerHTML=_993;
_992.appendChild(item);
save_tag(_98c,tag,false);
}
}
var _995=$(_98e);
Element.remove(Element.findElement(_995,"li"));
return false;
};
function update_suggested_tags(_996){
var _997=$H({id:_996});
var ajax=new Ajax.Updater({success:"suggested_tags"},"/xml/suggestedtags.php",{parameters:_997,onFailure:reportError,onComplete:function(){
}});
};
function add_tag(_999){
if(!$("add_tag_input")||!$F("add_tag_input")){
return;
}
var tag=$F("add_tag_input");
var _99b=tag.replace(/'/g,"\\'");
var _99c=tag.replace(/ /g,"+");
var _99d="tagd_"+tag.replace(/ /g,"_");
_99d=_99d.toLowerCase();
if($(_99d)){
$(_99d).style.fontWeight="bolder";
Field.clear("add_tag_input");
}else{
if(!tag.match(/^[a-zA-Z0-9 \-\'\&\.]{2,100}$/)){
alert("Invalid tag \""+tag+"\".\n\nTags should be from 2-100 characters, and contain only numbers, letters, spaces, dashes, periods, and ampersands.");
}else{
var _99e=$("nav_tags_edit");
var _99f="<a href=\"javascript:void delete_tag('"+_999+"','"+_99b+"');\"><img src=\"http://x.hubpages.com/x/hubtool_discard_tag.gif\" width=\"14\" height=\"14\"/></a>";
_99f+="<a id=\""+_99d+"\" href=\"/tag/"+_99c+"\">"+tag+"</a>";
var item=document.createElement("li");
item.innerHTML=_99f;
_99e.appendChild(item);
save_tag(_999,tag,false);
Field.clear("add_tag_input");
}
}
return false;
};
function delete_tag(_9a1,tag){
if(!_9a1||!tag){
return;
}
var _9a3="tagd_"+tag.replace(/ /g,"_");
var _9a4=$(_9a3);
if(!_9a4){
return;
}
var li=_9a4.parentNode;
Element.remove(li);
save_tag(_9a1,tag,true);
return false;
};
function save_tag(_9a6,tag,del){
var _9a9=(del)?1:0;
var req={a:_9a6,v:tag,d:_9a9};
var _9ab=$H(req).toQueryString();
var ajax=new Ajax.Request("/xml/tagadd.php",{parameters:_9ab,onFailure:reportError,onComplete:function(){
if(typeof updateHubtoolWarnings!="undefined"){
updateHubtoolWarnings();
}
}});
};
function handleReturnKeyPress(_9ad,func){
_9ad=_9ad||window.event;
if(_9ad.keyCode==Event.KEY_RETURN){
Event.stop(_9ad);
func();
return false;
}else{
return true;
}
};
function fireOnReturn(_9af,func){
Event.observe(_9af,"keyup",function(_9b1){
_9b1=_9b1||window.event;
if(_9b1.which){
if(_9b1.which==Event.KEY_RETURN){
_9b1.preventDefault();
func();
}
}else{
if(_9b1.keyCode){
if(_9b1.keyCode==Event.KEY_RETURN){
Event.stop(_9b1);
func();
}
}
}
},false);
};
function InlineEdit(){
};
InlineEdit._registered=[];
InlineEdit._onedit=[];
InlineEdit._ondone=[];
InlineEdit._editting=[];
InlineEdit._setonclick=false;
InlineEdit.register=function(ele,_9b3){
var obj=$(ele);
obj.title="Click to edit";
obj.style.backgroundColor="#ffe";
obj.empty_text="";
InlineEdit._registered[obj.id]=_9b3;
obj.highlight=function(){
if(this.hide_timer){
clearTimeout(this.hide_timer);
}
this.style.backgroundColor="#ffffd3";
if(this.empty_text&&(this.innerHTML=="&nbsp;"||this.innerHTML==" "||this.innerHTML.charCodeAt(0)==160)){
this.innerHTML=this.empty_text;
}
};
obj.onmouseover=obj.highlight;
obj.onmouseout=function(){
if(this.hide_timer){
clearTimeout(this.hide_timer);
}
this.hide_timer=setTimeout("var el=$('"+this.id+"');if (el) {el.unhighlight();}",1000);
};
obj.unhighlight=function(){
this.style.backgroundColor="#ffe";
if(this.empty_text&&this.innerHTML==this.empty_text){
this.innerHTML="&nbsp;";
}
};
if(!InlineEdit._setonclick){
document.onclick=InlineEdit._handleDocClick;
InlineEdit._setonclick=true;
}
};
InlineEdit.unregister=function(ele){
var obj=$(ele);
obj.title="";
if(obj.hide_timer){
clearTimeout(obj.hide_timer);
}
obj.onmouseover=function(){
};
obj.onmouseout=function(){
};
obj.style.backgroundColor="";
delete InlineEdit._registered[obj.id];
};
InlineEdit.registerCallbacks=function(ele,_9b8,_9b9){
var obj=$(ele);
InlineEdit._onedit[obj.id]=_9b8;
InlineEdit._ondone[obj.id]=_9b9;
};
InlineEdit._handleDocClick=function(e){
if(!document.getElementById||!document.createElement){
return;
}
var obj;
if(!e){
obj=window.event.srcElement;
}else{
obj=e.target;
}
while(obj.nodeType!=1){
obj=obj.parentNode;
}
if(obj.tagName=="TEXTAREA"||obj.tagName=="A"){
return;
}
while(!InlineEdit._registered[obj.id]&&obj.nodeName!="HTML"){
obj=obj.parentNode;
}
if(obj.nodeName=="HTML"){
return;
}
InlineEdit.edit(obj);
};
InlineEdit.edit=function(ele){
ele=$(ele);
if(!InlineEdit._registered[ele.id]){
return false;
}
if(InlineEdit._onedit[ele.id]){
var _9be=InlineEdit._onedit[ele.id];
_9be(ele);
}
var text=ele.innerHTML;
if(ele.empty_text&&ele.empty_text==text){
text=" ";
}
var _9c0=document.createElement("INPUT");
_9c0.type="text";
Element.cloneStyles(ele,_9c0);
ele.parentNode.insertBefore(_9c0,ele);
InlineEdit._insertEditSpanBefore(ele);
_9c0.id=ele.id+"_edit_inplace";
InlineEdit._editting[_9c0.id]=ele;
Element.remove(ele);
_9c0.value=text;
_9c0.focus();
_9c0.select();
return false;
};
InlineEdit._onButtonClick=function(_9c1){
_9c1=_9c1||window.event;
var _9c2=_9c1.target||_9c1.srcElement;
var _9c3=(_9c2.innerHTML.search(/CANCEL/)==-1)?true:false;
var _9c4=_9c2.parentNode;
var _9c5=_9c4;
while(_9c5&&!InlineEdit._editting[_9c5.id]){
_9c5=_9c5.previousSibling;
}
var _9c6=InlineEdit._editting[_9c5.id];
_9c5.hasFocus=false;
var z=_9c5.parentNode;
z.insertBefore(_9c6,_9c5);
z.removeChild(_9c5);
z.removeChild(document.getElementsByClassName("buttonSpan",z)[0]);
delete InlineEdit._editting[_9c5.id];
if(InlineEdit._ondone[_9c6.id]){
var _9c8=InlineEdit._ondone[_9c6.id];
_9c8(_9c6);
}
if(_9c3){
_9c6.innerHTML=(_9c5.value.length>0)?_9c5.value:"&nbsp;";
var _9c9=InlineEdit._registered[_9c6.id];
_9c9(_9c5.value);
}
};
InlineEdit._insertEditSpanBefore=function(obj){
if(document.getElementById&&document.createElement){
var _9cb=document.createElement("span");
_9cb.className="buttonSpan";
var butt=document.createElement("button");
var _9cd=document.createTextNode("OK");
butt.appendChild(_9cd);
_9cb.appendChild(butt);
var _9ce=document.createElement("button");
var _9cf=document.createTextNode("CANCEL");
_9ce.appendChild(_9cf);
_9cb.appendChild(_9ce);
obj.parentNode.insertBefore(_9cb,obj);
butt.onclick=InlineEdit._onButtonClick;
_9ce.onclick=InlineEdit._onButtonClick;
}
};
var SampleDuration=Class.create();
SampleDuration.prototype={initialize:function(_9d0){
this.art_id=_9d0;
this.t=new Timer();
this.onleaveListener=this.onleave.bindAsEventListener(this);
Event.observe(window,"beforeunload",this.onleaveListener,false);
},onleave:function(e){
e=e||window.event;
this.t.stop();
var _9d2=$H({art_id:this.art_id,dur:this.t.length});
var ajax=new Ajax.Request("/xml/duration",{parameters:_9d2.toQueryString()});
}};
var myGlobalHandlers={onCreate:function(){
this.flag(true);
},onComplete:function(){
if(Ajax.activeRequestCount==0){
this.flag(false);
this.shouldShowIcon=false;
}
},onScroll:function(){
var div=insideHubEditor?$("ajaxing_big"):$("ajaxing");
if(div){
var _9d5=insideHubEditor?200:0;
div.style.top=(Position.getViewportScrollY()+_9d5)+"px";
}
},flagUp:function(){
this.flag(true);
},flagDown:function(){
this.flag(false);
},flag:function(up){
if(up){
this.shouldShowIcon=true;
setTimeout(this.showIcon.bind(this),2000);
}else{
if(!this.iconVisible){
return;
}
var _9d7=insideHubEditor?$("ajaxing_big"):$("ajaxing");
if(_9d7){
this.shouldShowIcon=false;
_9d7.style.display="none";
Event.stopObserving(window,"scroll",this.scrollListener,false);
this.scrollListener=null;
this.iconVisible=false;
}
}
},showIcon:function(id){
if(this.shouldShowIcon&&!this.iconVisible&&Ajax.activeRequestCount>0){
this.iconVisible=true;
var _9d9=insideHubEditor?$("ajaxing_big"):$("ajaxing");
_9d9.style.display="inline";
this.onScroll();
this.scrollListener=this.onScroll.bindAsEventListener(this);
Event.observe(window,"scroll",this.scrollListener,false);
}
}};
Ajax.Responders.register(myGlobalHandlers);
Element.setOpacity=function(ele,_9db){
ele=$(ele);
if(window.ActiveXObject){
ele.style.filter="alpha(opacity="+Math.round(_9db*100)+")";
}
ele.style.opacity=_9db;
};
Element.getCurrentStyle=function(ele){
ele=$(ele);
var _9dd;
if(document.defaultView){
_9dd=document.defaultView.getComputedStyle(ele,"");
}else{
_9dd=ele.currentStyle;
}
return _9dd;
};
Element.cloneStyles=function(ele,_9df,_9e0){
ele=$(ele);
_9df=$(_9df);
var _9e1=Element.getCurrentStyle(ele);
for(var name in _9e1){
if(browser=="Opera"){
if(name=="height"||name=="pixelHeight"||name=="pixelWidth"||name=="posHeight"||name=="posWidth"||name=="width"||name=="font"||name=="fontSize"){
continue;
}
}
var _9e3=_9e1[name];
if(_9e3!==""&&!(_9e3 instanceof Object)&&name!="length"&&name!="parentRule"){
if(_9e0&&name.indexOf(_9e0)!==0){
continue;
}
_9df.style[name]=_9e3;
}
}
return _9df;
};
Element.findElement=function(_9e4,_9e5){
_9e4=$(_9e4);
while(_9e4.parentNode&&(!_9e4.tagName||(_9e4.tagName.toUpperCase()!=_9e5.toUpperCase()))){
_9e4=_9e4.parentNode;
}
return _9e4;
};
String.prototype.trim=function(){
var res=this;
while(res.substring(0,1)==" "){
res=res.substring(1,res.length);
}
while(res.substring(res.length-1,res.length)==" "){
res=res.substring(0,res.length-1);
}
return res;
};
String.prototype.startsWith=function(_9e7){
var res=this;
return res.substring(0,_9e7.length)==_9e7;
};
Element.getWidth=function(ele){
ele=$(ele);
return ele.offsetWidth;
};
Element.ellipsis=function(ele,len){
len=len||(100);
var p=$(ele);
if(p&&p.innerHTML){
var _9ed=p.innerHTML;
if(_9ed.length>len){
_9ed=_9ed.substring(0,len);
_9ed=_9ed.replace(/\w+$/,"");
_9ed+="...";
p.innerHTML=_9ed;
}
}
};
Position.getViewportHeight=function(){
if(window.innerHeight!=window.undefined){
return window.innerHeight;
}
if(document.compatMode=="CSS1Compat"){
return document.documentElement.clientHeight;
}
if(document.body){
return document.body.clientHeight;
}
return window.undefined;
};
Position.getViewportWidth=function(){
if(window.innerWidth!=window.undefined){
return window.innerWidth;
}
if(document.compatMode=="CSS1Compat"){
return document.documentElement.clientWidth;
}
if(document.body){
return document.body.clientWidth;
}
return window.undefined;
};
Position.getDocumentHeight=function(){
return document.documentElement.scrollHeight;
};
Position.getDocumentWidth=function(){
return document.documentElement.scrollWidth;
};
Position.getViewportScrollX=function(){
var _9ee=0;
if(document.documentElement&&document.documentElement.scrollLeft){
_9ee=document.documentElement.scrollLeft;
}else{
if(document.body&&document.body.scrollLeft){
_9ee=document.body.scrollLeft;
}else{
if(window.pageXOffset){
_9ee=window.pageXOffset;
}else{
if(window.scrollX){
_9ee=window.scrollX;
}
}
}
}
return _9ee;
};
Position.getViewportScrollY=function(){
var _9ef=0;
if(document.documentElement&&document.documentElement.scrollTop){
_9ef=document.documentElement.scrollTop;
}else{
if(document.body&&document.body.scrollTop){
_9ef=document.body.scrollTop;
}else{
if(window.pageYOffset){
_9ef=window.pageYOffset;
}else{
if(window.scrollY){
_9ef=window.scrollY;
}
}
}
}
return _9ef;
};
Position.viewportPosition=function(id){
var off=jq("#"+id).offset();
eleBot=off.top+jq("#"+id).height();
var _9f2=jq(window).scrollTop();
var _9f3=_9f2+jq(window).height();
if(eleBot<_9f2){
return -1;
}
if(off.top>_9f3){
return 1;
}
return 0;
};
Position.withinViewport=function(ele){
var off=Position.cumulativeOffset($(ele));
var _9f6=[0+Position.getViewportScrollX(),Position.getViewportScrollY()];
var _9f7=[_9f6[0]+Position.getViewportWidth(),_9f6[1]+Position.getViewportHeight()];
return (_9f6[0]<off[0]&&off[0]<_9f7[0]&&_9f6[1]<off[1]&&off[1]<_9f7[1]);
};
Position.set=function(ele,_9f9){
if(ele&&_9f9){
ele.style.left=_9f9[0]+"px";
ele.style.top=_9f9[1]+"px";
}
};
function check_signed_in_ajax(_9fa,_9fb){
jQuery.ajax({url:"/xml/checksignedin.php",complete:function(_9fc,_9fd){
_9fa(eval(_9fc.responseText),_9fb);
}});
};
function phone_verify_required(_9fe,_9ff,_a00){
jq.post("/xml/verify/phoneverifyrequired.php",{},function(req){
if(req){
jq.post("/xml/verify/phone.php",{inOrderToDoWhat:_9fe},function(rsp){
jq.fancybox({content:"<div id=\"phone_verify\">"+rsp+"</div>",overlayColor:"#000",overlayOpacity:0.8,titleShow:false,autoDimensions:false,height:300});
});
}else{
_9ff.apply(null,_a00);
}
},"json");
};
function select_all(name,_a04,end){
for(var i=_a04;i<=end;i++){
var ele=$(name+"_"+i);
if(ele){
ele.checked=true;
}
}
var disp=$(name+"_selected");
if(disp){
disp.innerHTML=(end-_a04)+1;
}
update_plural(name);
};
function unselect_all(name,_a0a,end){
for(var i=_a0a;i<=end;i++){
var ele=$(name+"_"+i);
if(ele){
ele.checked=false;
}
}
var disp=$(name+"_selected");
if(disp){
disp.innerHTML=0;
}
update_plural(name);
};
function checkbox_onchange(name,num){
var disp=$(name+"_selected");
if(disp){
var ele=$(name+"_"+num);
if(ele.checked){
disp.innerHTML=parseInt(disp.innerHTML,10)+1;
update_plural(name);
}else{
disp.innerHTML=parseInt(disp.innerHTML,10)-1;
update_plural(name);
}
}
};
function update_plural(name){
var ele=document.getElementById(name+"_selected");
if(ele){
var disp=document.getElementById(name+"_plural");
if(disp){
if(parseInt(ele.innerHTML,10)==1){
disp.innerHTML=" is";
}else{
disp.innerHTML="s are";
}
}
}
};
function import_now(_a16,name,_a18,end){
var _a1a=self.opener.document.getElementById(_a16);
if(_a1a){
for(var i=_a18;i<=end;i++){
var ele=$(name+"_"+i);
if(ele&&ele.checked){
var _a1d=$(name+"_email_"+i);
if(_a1a.value.length<2||_a1a.value.charAt(_a1a.value.length)==","||_a1a.value.charAt(_a1a.value.length-1)==","){
_a1a.value=_a1a.value+_a1d.innerHTML;
}else{
_a1a.value=_a1a.value+", "+_a1d.innerHTML;
}
}
}
}else{
alert("cannot locate parent (opener) window!");
}
};
function charCounter(_a1e,_a1f,max){
var _a21=document.getElementById(_a1e);
var _a22=document.getElementById(_a1f);
if(!_a21){
alert("charCounter bad source: "+_a1e);
}
if(!_a22){
alert("charCounter bad source: "+_a1f);
}
if(_a21.value.length>max){
_a21.value=_a21.value.substring(0,max);
}
_a22.value=max-_a21.value.length;
};
function hideAnswers(){
$("hiddenAnswers").hide();
$("hideAnswers").hide();
$("showAnswers").show();
return false;
};
function showAnswers(){
$("hiddenAnswers").show();
$("hideAnswers").show();
$("showAnswers").hide();
return false;
};
function fetchAnswers(_a23,_a24,_a25){
var _a26=$H({answerIds:_a23,enableVoting:_a24,enableEditing:_a25}).toQueryString();
new Ajax.Updater("hiddenAnswers","/xml/answerfetch.php",{parameters:_a26});
$("hideAnswers").show();
$("fetchAnswers").hide();
return false;
};
function answerVote(id,v){
new Ajax.Updater("voting_"+id,"/xml/answervote.php",{parameters:{id:id,vote:v}});
return false;
};
function answerVoteDown(id){
return answerVote(id,-1);
};
function answerVoteUp(id){
return answerVote(id,1);
};
function fetchRecaptcha(_a2b){
var _a2c="6LemUQQAAAAAAC6mNwmiXb8ZwmUU0R9Z5v_yZ5xl";
if(typeof (Recaptcha)=="undefined"){
var _a2d=document.getElementsByTagName("head")[0];
var _a2e=document.createElement("script");
_a2e.type="text/javascript";
_a2e.src="http://api.recaptcha.net/js/recaptcha_ajax.js";
_a2e.onload=function(){
Recaptcha.create(_a2c,_a2b,{theme:"red"});
};
_a2e.onreadystatechange=function(){
if(this.readyState=="loaded"||this.readyState=="complete"){
Recaptcha.create(_a2c,_a2b,{theme:"red"});
}
};
_a2d.appendChild(_a2e);
}else{
Recaptcha.create(_a2c,_a2b,{theme:"red"});
}
};
function whenSignedIn(_a2f,fn){
args=Array.prototype.slice.call(arguments);
args=args.slice(2);
info={options:_a2f,fn:fn,args:args};
check_signed_in_ajax(whenSignedInCallback,info);
return false;
};
function whenSignedInCallback(_a31,info){
if(_a31){
info.fn.apply(null,info.args);
}else{
if(jQuery("#signInOverlay").size()==0){
var html="<div id=\"signInOverlay\" class=\"overlay\" style=\"display: none;\">";
html+="<a class=\"close\" href=\"#\" onclick=\"toggleOverlay('signInOverlay'); return false;\">close</a>";
html+="<div id=\"signInOverlayContent\"></div>";
html+="</div>";
jQuery("body").append(html);
}
jQuery.get("/xml/signinupform.php",info.options,function(data){
jQuery("#signInOverlayContent").html(data);
suFH.onSuccess=afterSignedIn.bind(null,info);
siFH.onSuccess=afterSignedIn.bind(null,info);
if(typeof (fetchRecaptcha)!="undefined"){
fetchRecaptcha("captcha_div");
}
toggleOverlay("signInOverlay");
});
}
return false;
};
function afterSignedIn(info){
toggleOverlay("signInOverlay");
info.fn.apply(null,info.args);
};
function getEvent(evt){
return window.event||evt;
};
function getKeyProperties(evt){
var e=getEvent(evt);
var k=e.keyCode?e.keyCode:e.charCode?e.charCode:e.which;
var t=e.target?e.target:e.srcElement?e.srcElement:e.which;
return {evt:e,keyCode:k,target:t};
};
function checkTabKeyAlone(evt){
var p=getKeyProperties(evt);
return (p.keyCode==9&&!p.evt.shiftKey&&!p.evt.ctrlKey&&!p.evt.altKey);
};
function checkShiftTabKey(evt){
var p=getKeyProperties(evt);
return (p.keyCode==9&&p.evt.shiftKey&&!p.evt.ctrlKey&&!p.evt.altKey);
};
function getSelectionProperties(evt){
var p=getKeyProperties(evt);
var tr=(p.target.setSelectionRange)?null:document.selection.createRange();
var tab=String.fromCharCode(9);
if(tr){
var br=document.body.createTextRange();
br.moveToElementText(p.target);
br.setEndPoint("StartToStart",tr);
var ss=p.target.value.length-br.text.length;
var se=ss+tr.text.length;
}else{
var ss=p.target.selectionStart;
var se=p.target.selectionEnd;
}
return {setSelection:function(ss,se){
if(tr){
var adj=ss-tab.length*(p.target.value.substring(0,ss).split("\n").length-1);
var adj2=se+tab.length*(p.target.value.substring(se,p.target.value.length).split("\n").length-1);
var nr=document.body.createTextRange();
nr.moveToElementText(p.target);
nr.moveStart("character",adj);
nr.moveEnd("character",-(p.target.value.length-adj2));
nr.select();
}else{
p.target.selectionStart=ss;
p.target.selectionEnd=se;
}
},isMultiline:function(){
return (se>(ss+2)&&p.target.value.slice(ss,se-2).indexOf("\n")!=-1);
},removeTab:function(){
if(this.isMultiline()){
var sel=p.target.value.slice(ss,se);
var a=sel.split("\n");
for(var i=0;i<a.length;i++){
if(a[i].slice(0,1)==tab||a[i].slice(0,1)==" "){
a[i]=a[i].slice(1,a[i].length);
}
}
sel=a.join("\n");
var pre=p.target.value.slice(0,ss);
var post=p.target.value.slice(se,p.target.value.length);
p.target.value=pre.concat(sel,post);
this.setSelection(ss,pre.length+sel.length);
}else{
var brt=p.target.value.slice(0,ss);
var ch=brt.slice(brt.length-1,brt.length);
if(ch==tab||ch==" "){
p.target.value=brt.slice(0,brt.length-1).concat(p.target.value.slice(ss,p.target.value.length));
this.setSelection(ss-1,se-1);
}
}
},addTab:function(){
if(this.isMultiline()){
if(ss>0){
ss=p.target.value.slice(0,ss).lastIndexOf("\n")+1;
}
var pre=p.target.value.slice(0,ss);
var sel=p.target.value.slice(ss,se);
var post=p.target.value.slice(se,p.target.value.length);
sel=sel.replace(/\n/g,"\n"+tab);
pre=pre.concat(tab);
p.target.value=pre.concat(sel,post);
this.setSelection(ss,se+(tab.length*sel.split("\n").length));
}else{
var pre=p.target.value.substring(0,ss);
var sel=p.target.value.substring(ss,se);
var post=p.target.value.substring(se,p.target.value.length);
pre=pre.concat(tab);
p.target.value=pre.concat(sel,post);
this.setSelection(ss+tab.length,se+tab.length);
}
}};
};
function getTextAreaSelection(evt){
var p=getKeyProperties(evt);
if(p.target.setSelectionRange){
var ss=p.target.selectionStart;
var se=p.target.selectionEnd;
return (ss!=se)?p.target.value.slice(ss,se):null;
}else{
var r=document.selection.createRange();
return (r.text.length!=0)?r.text:null;
}
};
function updateNumCharCount(_a5a,_a5b,_a5c){
if($(_a5b).hasClassName("dimmed")){
$(_a5c).update(_a5a);
}else{
if($(_a5b).value.length>_a5a){
$(_a5b).value=$(_a5b).value.substring(0,_a5a);
}
$(_a5c).update(_a5a-$(_a5b).value.length);
}
};
function checkCharCount(_a5d,_a5e,_a5f){
updateNumCharCount(_a5d,_a5e,_a5f);
Event.observe(_a5e,"click",function(){
updateNumCharCount(_a5d,_a5e,_a5f);
});
Event.observe(_a5e,"keypress",function(evt){
updateNumCharCount(_a5d,_a5e,_a5f);
if(evt.keyCode!=Event.KEY_BACKSPACE&&evt.keyCode!=Event.KEY_LEFT&&evt.keyCode!=Event.KEY_RIGHT&&evt.keyCode!=Event.KEY_UP&&evt.keyCode!=Event.KEY_DOWN&&(browser=="Opera"||evt.keyCode!=Event.KEY_DELETE)){
if($(_a5e).value.length>=_a5d){
Event.stop(evt);
return false;
}
}
return true;
});
Event.observe(_a5e,"keyup",function(){
updateNumCharCount(_a5d,_a5e,_a5f);
});
Event.observe(_a5e,"keydown",function(){
updateNumCharCount(_a5d,_a5e,_a5f);
});
};
function _drawPointerInd(_a61,_a62,_a63){
if(typeof _a63=="undefined"){
_a63="ind";
}
var _a64="<div id=\""+_a63+"\"><div>"+_a62+"</div></div>";
var pole=new Insertion.Bottom(_a61,_a64);
if(!window.ActiveXObject){
$(_a63).style.position="fixed";
}
setTimeout(function(){
if($(_a63)){
Element.remove(_a63);
}
},3500);
};
function getElementScreenTop(){
var _a66=(window.pageYOffset)?window.pageYOffset:(document.documentElement)?document.documentElement.scrollTop:document.body.scrollTop;
return _a66;
};
function setElementScreenTop(top){
if(window.pageYOffset){
var x=window.pageXOffset;
window.scrollTo(x,top);
}else{
if(document.documentElement){
document.documentElement.scrollTop=top;
}else{
document.body.scrollTop=top;
}
}
};
function scrollElementInView(_a69){
var _a6a=getElementScreenTop();
var top=getElementTop(_a69);
if(top<_a6a){
setElementScreenTop(top);
}
};
function getElementDimensions(elem){
var top=0,left=0,_a6f=elem.getWidth(),_a70=elem.getHeight();
do{
top+=elem.offsetTop;
left+=elem.offsetLeft;
elem=elem.offsetParent;
}while(elem!=null);
return {top:top,left:left,right:left+_a6f,bottom:top+_a70};
};
function getElementTop(elem){
var top=0;
do{
top+=elem.offsetTop;
elem=elem.offsetParent;
}while(elem!=null);
return top;
};
function getElementLeft(elem){
var left=0;
do{
left+=elem.offsetLeft;
elem=elem.offsetParent;
}while(elem!=null);
return left;
};
function getElementRight(elem){
return getElementLeft(elem)+elem.getWidth();
};
function getElementBottom(elem){
return getElementTop(elem)+elem.getHeight();
};
function removePXFromSize(size){
if(size.length>2&&size.substring(size.length-2).toLowerCase()=="px"){
return size.substring(0,size.length-2);
}else{
return size;
}
};
function StringBuffer(){
this.buffer=[];
};
StringBuffer.prototype.append=function(_a78){
this.buffer.push(_a78);
return this;
};
StringBuffer.prototype.toString=function toString(){
return this.buffer.join("");
};
function dump_divs(){
var _a79="DIV REPORT:<br/>";
var divs=$A(document.getElementsByTagName("div"));
divs.each(function(div){
if(div.id){
_a79+="#"+div.id+", ";
}
_a79+="."+div.className+", "+div.offsetWidth+" x "+div.offsetHeight+"<br/>";
});
if(!$("debug_div")){
out("create");
}
$("debug_div").innerHTML=_a79;
};
function out(_a7c){
if(window.console){
console.log(_a7c);
}else{
var pole;
var _a7e="<div id=\"debug_div\"></div>";
if(!$("debug_div")){
if($("footer")){
pole=new Insertion.Bottom("footer",_a7e);
}else{
if($("sidebar")){
pole=new Insertion.Bottom("sidebar",_a7e);
}
}
}
if($("debug_div")){
pole=new Insertion.Bottom("debug_div",_a7c+"<br/>");
}
}
};
function search_escape(str){
newstr=encodeURI(str);
newstr=newstr.replace(/\%20/g,"+");
return newstr;
};
var Timer=Class.create();
Timer.prototype={initialize:function(){
this.start();
},start:function(){
this.startTime=new Date();
},stop:function(){
this.stopTime=new Date();
this.length=(this.stopTime-this.startTime);
},inspect:function(){
if(!this.stopTime){
this.stop();
}
return "duration: "+this.length+"ms";
}};
function hpFormHandler(_a80){
this.submitMode=false;
this.submitUri="/";
this.nextUri="/";
this.lit=false;
this.form=$(_a80);
this.errors=$H({});
this.method="post";
this.errorId="formErrors";
this.errorHeader="<strong>Please fix these errors before continuing:</strong><br/>";
this.useEffects=true;
this.individualerrors=false;
this.scrollToErrors=false;
this.ensureSignedInBeforeSave=false;
this.ensureSignedInOptions={};
this.ensureCheckedSecurity=false;
this.lastCheckedSecurity=new Date().getTime()-(1000*1000);
this.setValidators();
};
hpFormHandler.prototype.handleSubmitServerError=function(req){
};
hpFormHandler.prototype.validateHideDiv=function(id){
$(id).hide();
};
hpFormHandler.prototype.validateLengthMax=function(ele,max,msg){
var val=$F(ele);
this.testForError(($F(ele).trim().length>max),ele,msg);
};
hpFormHandler.prototype.validateLengthMin=function(ele,min,msg){
var val=$F(ele);
this.testForError((val.length!=0&&val.length<min),ele,msg);
};
hpFormHandler.prototype.validateLengthExactly=function(ele,len,msg){
var val=$F(ele);
this.testForError((val.length!=0&&val.length!=len),ele,msg);
};
hpFormHandler.prototype.validateValueMin=function(ele,min,msg){
var val=$F(ele);
this.testForError(val<min,ele,msg);
};
hpFormHandler.prototype.validateValueMax=function(ele,max,msg){
var val=$F(ele);
this.testForError(val>max,ele,msg);
};
hpFormHandler.prototype.validateMandatory=function(ele,msg){
var val=false;
if($F(ele)){
val=$F(ele).trim();
}
this.testForError((!val||val.length==0),ele,msg);
};
hpFormHandler.prototype.validateRadioChecked=function(ele,msg){
if(!ele.name){
return;
}
var _a9c=$$("input[name="+ele.name+"]");
var _a9d=false;
_a9c.each(function(r){
if(r.checked==true){
_a9d=true;
throw $break;
}
});
this.testForError(!_a9d,ele,msg);
};
hpFormHandler.prototype.validateEnoughSpaces=function(ele,msg){
val=$F(ele).trim();
var _aa1=false;
if(val.length>=20){
var _aa2=val.match(/\s+/g);
var _aa3=_aa2?_aa2.length:0;
var _aa4=_aa3+1;
_aa1=_aa4/(val.length-_aa3)<0.08;
}
this.testForError(_aa1,ele,msg);
};
hpFormHandler.prototype.validateIsNumeric=function(ele,msg){
this.validateRegex(ele,/^\s*[0-9]*\s*$/,msg);
};
hpFormHandler.prototype.validateRegex=function(ele,_aa8,msg){
var val=$F(ele);
this.testForError((val.length!=0&&val.search(_aa8)==-1),ele,msg);
};
hpFormHandler.prototype.validateNoRegex=function(ele,_aac,msg){
var val=$F(ele);
this.testForError((val.search(_aac)!=-1),ele,msg);
};
hpFormHandler.prototype.validateNoSpaces=function(ele,msg){
var val=$F(ele).trim();
this.testForError(val.search(/ /)!=-1,ele,msg);
};
hpFormHandler.prototype.validateNot=function(ele,not,msg){
this.testForError(($F(ele).trim()==not),ele,msg);
};
hpFormHandler.prototype.validateSameAs=function(ele,ele2,msg){
this.testForError(($F(ele)!=$F(ele2)),ele,msg);
};
hpFormHandler.prototype.validateNoWords=function(ele,_ab9,msg){
var val=$F(ele);
var _abc=false;
for(i=0;i<_ab9.length&&!_abc;i++){
var _abd=new RegExp("[^a-zA-Z]"+_ab9[i]+"[^a-zA-Z]","i");
_abc=(val.search(_abd)>=0);
if(!_abc){
_abd=new RegExp("^"+_ab9[i]+"[^a-zA-Z]","i");
_abc=(val.search(_abd)>=0);
}
if(!_abc){
_abd=new RegExp("[^a-zA-Z]"+_ab9[i]+"$","i");
_abc=(val.search(_abd)>=0);
}
if(!_abc){
_abd=new RegExp("^"+_ab9[i]+"$","i");
_abc=(val.search(_abd)>=0);
}
}
this.testForError(_abc,ele,msg);
};
hpFormHandler.prototype.validateServerCheck=function(ele,url,msg){
var val=$F(ele);
if(val.length==0){
return;
}
if(ele.lastGoodValue&&ele.lastGoodValue==val){
return;
}
val=encodeURIComponent(val);
var _ac2=new Ajax.Request(url,{method:"post",parameters:ele.id+"="+val,onComplete:function(req){
eval(req.responseText);
if(!valid&&typeof msg=="object"){
if(typeof errorCode!="undefined"&&typeof msg[errorCode]!="undefined"){
msg=msg[errorCode];
}else{
msg=msg[0];
}
}
this.testForError(!valid,ele,msg);
if(valid){
ele.lastGoodValue=val;
}
this._showErrors();
}.bind(this),onException:function(){
alert("There was an error performing server side validation of your input, proceed with caution.");
},onFailure:reportError});
};
hpFormHandler.prototype.checkAnsweredSecurityQuestionBeforeSave=function(){
new Ajax.Request("/xml/profile/securityquestion.php",{method:"get",onComplete:function(req){
eval(req.responseText);
if(!valid){
showAskSecurityQuestion();
this.lastCheckedSecurity=new Date().getTime();
this._showErrors();
}else{
if(!this.submitMode){
this.params="ajax=1&"+Form.serialize(this.form);
var _ac5=new Ajax.Request(this.submitUri,{method:this.method,parameters:this.params,onComplete:this.handleResponse.bind(this),onFailure:reportError});
return;
}
this.form.submit();
}
}.bind(this),onException:function(){
alert("There was an error performing server side validation of your input, proceed with caution.");
},onFailure:"There was an error performing server side validation of your input, proceed with caution."});
};
function validateCheckedSecurityAndSubmit(form,fn,args){
new Ajax.Request("/xml/profile/securityquestion.php",{method:"get",onComplete:function(req){
eval(req.responseText);
if(!valid){
showAskSecurityQuestion();
}else{
if(typeof (fn)=="function"){
fn.apply(form,args);
}else{
form.submit();
}
}
}.bind(this),onException:function(){
alert("There was an error performing server side validation of your input, proceed with caution.");
},onFailure:"There was an error performing server side validation of your input, proceed with caution."});
};
function showAskSecurityQuestion(){
var aEl=jq("<a class=\"iframe\" href=\"/my/profile/security_ask_iframe.php\" style=\"display:none\">This goes to iframe</a>");
jq("#container").append(aEl);
jq(".iframe").fancybox({"hideOnContentClick":false,"hideOnOverlayClick":false,"enableEscapeButton":false,"showCloseButton":false,"width":624,"height":160,"scrolling":"no"});
jq(".iframe").click();
};
hpFormHandler.prototype.validateEmailList=function(ele){
var _acc=800;
var _acd=6;
this.validateLengthMin(ele,_acd,"The address you entered is too short. Please use an address at least "+_acd+" characters in length.");
this.validateNoRegex(ele,/\$/,"Dollar signs are not valid in an email address.");
this.validateNoRegex(ele,/\\/,"Backslashes are not valid in an email address.");
this.validateRegex(ele,/\@/,"A valid email address must contain an @ symbol.");
};
hpFormHandler.prototype.validateEmail=function(ele){
this.validateEmailList(ele);
var _acf=200;
this.validateLengthMax(ele,_acf,"Your email address is too long. Please use a shorter address.");
this.validateNoSpaces(ele,"Spaces are not valid characters in an email address.  Please recheck your address.");
};
hpFormHandler.prototype.validateEmailName=function(ele){
var _ad1=2;
var _ad2=200;
this.validateLengthMin(ele,_ad1,"Your name is too short.  Please enter at least 2 characters.");
this.validateLengthMax(ele,_ad2,"Your name is too long. Please use a shorter name.");
};
hpFormHandler.prototype.validatePhone=function(ele){
var val=$F(ele);
var us=/^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/;
this.testForError(!us.test(val)&&val.length>0,ele,"Please enter a valid phone number");
};
hpFormHandler.prototype.validatePostal=function(ele){
var val=$F(ele).trim();
var _ad8=false;
var us=/^\d{5}(-\d{4})?$/;
var ca=/[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] \d[ABCEGHJKLMNPRSTVWXYZ]\d/i;
var gb=/^[A-Za-z]{1,2}[\d]{1,2}([A-Za-z])?\s?[\d][A-Za-z]{2}$/i;
if(val.length==0||(us.test(val)||ca.test(val)||gb.test(val))){
_ad8=true;
}
this.testForError(!_ad8,ele,"Please enter a valid postal code");
};
hpFormHandler.prototype.validateNewPassword=function(ele1,ele2){
ele1=$(ele1);
ele2=$(ele2);
var _ade=40;
var _adf=5;
this.validateMandatory(ele1,"Please protect your hubpages account with a password.");
this.validateLengthMin(ele1,_adf,"Your password is too short.  Protect your account by choosing a password that is at least  "+_adf+" characters long.  Safety first!");
this.validateLengthMax(ele1,_ade,"Your password is too long; it will be difficult to type.  Please use a shorter password.");
this.validateMandatory(ele2,"Please confirm your password.");
this.validateSameAs(ele1,ele2,"Your passwords do not match.  Please retype them.");
};
hpFormHandler.prototype.validateTag=function(ele){
ele=$(ele);
var _ae1=60;
var _ae2=3;
this.validateRegex(ele,/^[\w\s\$\-\'\%\&]*$/,"Please use only alphanumeric and $, ', % or & characters in your tag.");
this.validateLengthMin(ele,3,"A tag should be at least three characters long.");
this.validateLengthMax(ele,_ae1,"A tag should not be longer than 60 characters.");
};
hpFormHandler.prototype.validateGroupName=function(ele,_ae4){
this.validateMandatory(ele,"Please specify a group name.");
this.validateLengthMax(ele,50,"Group names may be no longer than 50 characters.");
this.validateRegex(ele,/^[\w\s\$\-\'\%\&\!\?]*$/,"Please use only alphanumeric and $, ', -, %, !, ? or & characters in your group name.");
existingName=_ae4.detect(function(name){
return ($F(ele)==name);
});
this.testForError(existingName,ele,"You already have a group with this name.  Please select it from the list, or enter a new name.");
};
hpFormHandler.prototype.observe=function(){
new Form.EventObserver(this.form,this._elemsChanged.bind(this));
};
hpFormHandler.prototype.focusFirst=function(){
Form.focusFirstElement(this.form);
};
hpFormHandler.prototype.tabOnEnter=function(){
hpFormHandler.tabOnEnter(this.form);
};
hpFormHandler.tabOnEnter=function(form){
if(!$(form)){
return;
}
var _ae7=$A($(form).getElementsByTagName("input"));
_ae7.each(function(node){
Event.observe(node,"keydown",_handleInputKeypress,false);
});
};
hpFormHandler.prototype.ghostField=function(_ae9,_aea,_aeb){
if($(_ae9)&&$(_aea)){
var gw=new GhostWatcher(_ae9,_aea,_aeb);
}
};
hpFormHandler.prototype.setValidators=function(_aed,_aee){
this.toValidate=$H(_aed);
this.toValidateOnsubmit=$H(_aee);
};
hpFormHandler.prototype.hasErrors=function(){
return (this.errors&&this.errors.keys()&&this.errors.keys().length>0);
};
hpFormHandler.prototype.cancel=function(){
this.reset();
};
hpFormHandler.prototype.reset=function(){
Form.reset(this.form);
if(this.cancelUri){
location.href=this.cancelUri;
}
};
hpFormHandler.prototype.valid=function(){
this._runValidators(true);
if(this.hasErrors()){
return false;
}
return true;
};
hpFormHandler.prototype.save=function(_aef){
if(this.ensureSignedInBeforeSave&&!_aef){
whenSignedIn(this.ensureSignedInOptions,this.save.bind(this,true));
return false;
}
this.form.descendants().each(function(elt){
if(elt&&elt.tagName&&elt.hasClassName&&(elt.tagName=="TEXTAREA"||elt.tagName=="INPUT")&&elt.hasClassName("dimmed")){
elt.value="";
}
});
this._runValidators(true);
if(this.hasErrors()){
if(this.scrollToErrors){
var _af1=new fx.Scroll({duration:100});
_af1.scrollTo(this.errorDiv);
}
return false;
}
if((this.ensureCheckedSecurity)&&(new Date().getTime()-this.lastCheckedSecurity>1000*15)){
this.checkAnsweredSecurityQuestionBeforeSave();
return false;
}
if(window.tinyMCE&&tinyMCE.triggerSave){
try{
tinyMCE.triggerSave(false,true);
}
catch(e){
}
}
if(!this.submitMode){
this.params="ajax=1&"+Form.serialize(this.form);
var _af2=new Ajax.Request(this.submitUri,{method:this.method,parameters:this.params,onComplete:this.handleResponse.bind(this),onFailure:reportError});
}
return (this.submitMode);
};
hpFormHandler.prototype.handleResponse=function(req){
if(!this.skipValidationOfResponse){
eval(req.responseText);
}
if(this.skipValidationOfResponse||valid==1){
if(this.saveCallback){
this.saveCallback(req);
}
if(this.nextUri){
location.href=this.nextUri;
}
return true;
}else{
this.handleSubmitServerError(req);
return false;
}
};
hpFormHandler.prototype.testForError=function(_af4,ele,msg){
if(_af4){
var tmp=new Object();
tmp[ele.id]=msg;
this.errors=this.errors.merge(tmp);
}else{
if(this.errors[ele.id]){
if(typeof msg=="object"){
for(idx in msg){
if(this.errors[ele.id]==msg[idx]){
delete this.errors[ele.id];
}
}
}else{
if(this.errors[ele.id]==msg){
delete this.errors[ele.id];
}
}
}
}
};
hpFormHandler.prototype._elemsChanged=function(ele){
this._runValidators(false);
};
hpFormHandler.prototype._runValidators=function(_af9){
var _afa=Form.getElements(this.form);
var _afb=$A(_afa);
_afb.each(function(node){
if(_af9){
var _afd=this.toValidateOnsubmit[node.id];
if(!_afd){
_afd=this.toValidateOnsubmit[node.className];
}
if(_afd){
_afd(node);
}
}
var _afd=this.toValidate[node.id];
if(!_afd){
_afd=this.toValidate[node.className];
}
if(_afd){
_afd(node);
}
}.bind(this));
this._showErrors();
return !this.hasErrors();
};
hpFormHandler.prototype.alertServerErrors=function(req){
var json=JSONstring.toObject(req.responseText);
var _b00="";
if(json.status=="error"){
var _b01=0;
for(var key in json.errors){
if(key=="security"){
showAskSecurityQuestion();
}else{
for(i=0;i<json.errors[key].length;i++){
_b00+=" - "+json.errors[key][i]+"\n";
}
_b01++;
}
}
if(_b01>0){
alert("An error occurred saving your changes:\n\n"+_b00+"\nPlease try and correct the problem and try again.  If the problem persist, contact team@hubpages.com.");
}
}else{
if(json.status=="saved"||json.status=="no change"){
var _b03=new fx.Scroll({duration:300});
_b03.scrollTo("changesSaved");
$("changesSaved").show();
}else{
alert("An unknown error has occured.  Please try saving again.  If the problem persists, contact team@hubpages.com");
}
}
};
hpFormHandler.prototype._showErrors=function(){
if(this.individualerrors){
this._showErrorsPerField();
}else{
this._showErrorsOneDiv();
}
};
hpFormHandler.prototype._showErrorsOneDiv=function(){
if(!this.errorDiv&&!$(this.errorId)){
new Insertion.Top(this.form,"<div id=\""+this.errorId+"\"></div>");
}
if(!this.errorDiv){
this.errorDiv=$(this.errorId);
}
if(this.useEffects&&!this.errFade){
this.errFade=new fx.Opacity(this.errorDiv,{duration:500});
this.errFade.now=0;
}
if(!this.hasErrors()){
if(this.lit){
if(this.useEffects){
this.errFade.toggle();
}
var eles=document.getElementsByClassName("alertBorder",this.form);
eles.each(function(ele){
hpFormHandler.lightEle(ele,false);
});
if($("nextB")){
$("nextB").src="http://x.hubpages.com/i/next.gif";
}
this.lit=false;
}
return;
}
var _b06=this.errorHeader;
_b06+="<ul>";
this.errors.each(function(err){
_b06+="<li>"+err.value+"</li>";
var ele=$(err.key);
hpFormHandler.lightEle(ele,true);
});
_b06+="</ul>";
this.errorDiv.className="alert";
if(!this.lit){
if(this.useEffects){
Element.setOpacity(this.errorDiv,0);
this.errFade.toggle();
}
}
this.errorDiv.innerHTML=_b06;
this.lit=true;
};
hpFormHandler.prototype._showErrorsPerField=function(){
if(this.hasErrors()){
this.errors.each(function(err){
var _b0a=$(err.key);
var _b0b=err.key+"_error";
var _b0c=$(_b0b);
if(_b0c){
_b0c.innerHTML=err.value;
_b0c.className="alert";
_b0c.show();
}else{
new Insertion.Top(_b0a.parentNode,"<div id=\""+_b0b+"\" class=\"alert\">"+err.value+"</div>");
}
hpFormHandler.lightEle(_b0a,true);
});
var eles=document.getElementsByClassName("alertBorder",this.form);
eles.each(function(ele){
targetId=ele.id;
if(typeof this.errors[targetId]=="undefined"){
if($(targetId+"_error")){
$(targetId+"_error").hide();
}
hpFormHandler.lightEle(ele,false);
}
}.bind(this));
this.lit=true;
}else{
if(this.lit){
if(this.useEffects){
var eles=document.getElementsByClassName("alert",this.form);
eles.each(function(ele){
ele.hide();
});
}
var eles=document.getElementsByClassName("alertBorder",this.form);
eles.each(function(ele){
hpFormHandler.lightEle(ele,false);
});
this.lit=false;
}
}
};
function _handleInputKeypress(_b11){
_b11=_b11||window.event;
if(_b11.which){
if(_b11.which==Event.KEY_RETURN){
var _b12=document.createEvent("KeyboardEvent");
_b12.initKeyEvent("keydown",true,true,document.defaultView,_b11.ctrlKey,_b11.altKey,_b11.shiftKey,_b11.metaKey,Event.KEY_TAB,0);
_b11.preventDefault();
_b11.target.dispatchEvent(_b12);
}
}else{
if(_b11.keyCode){
if(_b11.keyCode==Event.KEY_RETURN){
_b11.keyCode=Event.KEY_TAB;
}
}
}
return true;
};
hpFormHandler.lightEle=function(ele,on){
ele=$(ele);
if(!ele){
return;
}
if(on){
Element.addClassName(ele,"alertBorder");
}else{
Element.removeClassName(ele,"alertBorder");
}
};
var GhostWatcher=Class.create();
GhostWatcher.prototype={initialize:function(_b15,_b16,_b17){
this.fromEle=$(_b15);
this.toEle=$(_b16);
this.copyFunction=(_b17!=null)?_b17:this.copyValue;
if(this.fromEle&&this.toEle){
Event.observe(this.fromEle,"keyup",this.copyFunction.bind(this),false);
}
Event.observe(window,"focus",this.copyFunction.bind(this),false);
Event.observe(window,"load",this.copyFunction.bind(this),false);
},copyValue:function(evt){
var text=$F(this.fromEle);
this.toEle.innerHTML=text.stripTags();
},recopy:function(){
this.copyFunction();
}};
function growTextArea(elt,_b1b,_b1c,_b1d){
var rows=Math.ceil($F(elt).length/_b1b)+1;
var _b1f=rows*_b1c;
_b1f=Math.max(_b1f,_b1d);
elt.setStyle({height:_b1f+"px"});
};
function makeGrowable(id,_b21,_b22,_b23){
var elt=$(id);
if(!elt){
return;
}
elt.observe("keyup",function(){
growTextArea(elt,_b21,_b22,_b23);
});
};
function makeExpandable(id,_b26,_b27,_b28){
var elt=$(id);
if(!elt){
return;
}
elt.addClassName("expandable_text");
elt.addClassName("dimmed");
elt.value=_b26;
var _b2a=elt.up("div");
elt.observe("focus",function(){
_b2a.addClassName("expanded");
if(elt.hasClassName("dimmed")){
elt.removeClassName("dimmed");
elt.value="";
}
if(_b27){
_b27();
}
});
elt.observe("blur",function(){
setTimeout(function(elt,_b2c,_b2d,_b2e){
if(!_b2e){
_b2c.removeClassName("expanded");
elt.setStyle({height:""});
}
if(elt.value==""){
elt.addClassName("dimmed");
elt.value=_b2d;
}
}.bind(this,elt,_b2a,_b26,_b28),250);
});
};
function initAutoComplete(_b2f,_b30){
var _b31="";
var _b32="++none++";
var _b33=false;
var _b34=false;
var _b35=false;
var _b36="#the_auto_comp_box";
var _b37="#search_form";
var _b38=".search_input";
var _b39=".search_submit";
var _b3a="/xml/getautocompletestrings.php";
var _b3b="";
var _b3c=0;
var _b3d=null;
var _b3e=null;
var _b3f=null;
var _b40=null;
var _b41=false;
if(_b30){
_b36=_b30.boxid;
_b37=_b30.container;
_b38=_b30.input;
_b39=_b30.submit;
if(_b30.ajaxtarget!=undefined){
_b3a=_b30.ajaxtarget;
}
if(_b30.querystring!=undefined){
_b3b="&"+_b30.querystring;
}
if(_b30.filter!=undefined){
_b3d=_b30.filter;
}
if(_b30.keyboardelem!=undefined){
_b3f=_b30.keyboardelem;
}
if(_b30.targoutput!=undefined){
_b3e=_b30.targoutput;
}
if(_b30.keyuptarget!=undefined){
_b40=_b30.keyuptarget;
}
if(_b30.showprogress!=undefined){
_b41=_b30.showprogress;
}
}
if(!_b3f){
_b3f=_b38;
}
if(!_b3e){
_b3e=_b38;
}
if(!_b40){
_b40=_b3f;
}
jQuery(document).ready(function(){
if(!_b33){
_b33=true;
jQuery("<div id=\""+_b36.substr(1)+"\" class=\"auto_comp_box\"></div>").insertAfter(_b3f);
if(_b41){
jQuery("<div id=\"auto_comp_close\">&nbsp;</div>").appendTo(_b36);
jQuery("#auto_comp_close").bind("click",function(){
jQuery(_b36).hide();
jQuery("#auto_comp_close").hide();
});
}
jQuery(_b36).hide();
if(!_b41){
jQuery(_b36).bind("focusin",function(){
_b34=true;
});
jQuery(_b36).bind("focusout",function(){
_b34=false;
});
jQuery(_b37).bind("focusin",function(){
_b35=true;
});
jQuery(_b37).bind("focusout",function(){
_b35=false;
setTimeout(function(){
if(!_b34&&!_b35){
jQuery(_b36).hide();
jQuery("#auto_comp_close").hide();
_b3b=_b3b.replace(/start=[^&]*&?/,"");
}
},300);
});
}
jQuery(_b37).attr("autocomplete","off");
jQuery(_b3f).bind("keydown",function(e){
var key=0;
if(e==null){
key=event.keyCode;
}else{
key=e.which;
}
switch(key){
case 40:
_b3c=0;
jQuery(_b36+" > .auto_comp_row:visible:eq(0) > a").trigger("focus");
return (false);
break;
}
return (true);
});
jQuery(_b40).bind("keyup",function(){
var _b44=jQuery(_b38).attr("value");
if(_b38!=_b3f){
if(_b31!=_b44){
_b3b=_b3b.replace(/start=[0123456789]+/,"");
_b3b=_b3b.replace(/&&/,"&");
}
_b31="";
_b32="++none++";
}
var _b45;
if(_b30){
_b45="hubs";
}else{
_b45=jQuery(".search_type option:selected").val();
}
if(_b44.strip().length==0){
jQuery(_b36).hide();
jQuery("#auto_comp_close").hide();
}
if(_b44.strip().length>0&&_b31!=_b44){
_b31=_b44;
if(_b44.indexOf(_b32)==0){
jQuery(_b36+" > .auto_comp_row").each(function(){
var _b46=jQuery(this).text();
if(_b3d){
_b46=_b3d(_b46);
}
if(_b46.indexOf(_b44)==0){
jQuery(this).show();
}else{
jQuery(this).hide();
}
});
return true;
}
_b32="++none++";
jQuery(_b36+" > .auto_comp_row").remove();
if(_b41){
jQuery("<div id=\"auto_comp_progress\" >&nbsp;</div>").appendTo(_b36);
jQuery(_b36).show();
}
jQuery.get(_b3a+"?s="+escape(_b44)+"&t="+escape(_b45)+_b3b,jQuery(_b37).serialize(),function(data){
jQuery("#auto_comp_error").remove();
jQuery("#auto_comp_progress").remove();
_b3b=_b3b.replace(/start=[0123456789]+/,"");
_b3b=_b3b.replace(/&&/,"&");
var _b48=jQuery(data).find("div").length;
var _b49=false;
if(_b48==0){
return true;
}
var _b4a=jQuery(_b38).val();
if(_b4a!=_b44){
return true;
}
if(_b48<_b2f){
_b32=_b44;
}else{
_b32="++none++";
}
jQuery(_b36).show();
jQuery(_b3f).focus();
var _b4b=jQuery(_b3f).position();
var _b4c=jQuery(_b3f).outerHeight(true);
jQuery(_b36).position(_b4b.top+_b4c,_b4b.left+5);
jQuery(data).find("div").appendTo(_b36);
jQuery(_b36+" > .auto_comp_row").bind("click",function(){
var _b4d=false;
jQuery(this).find("a").each(function(){
var aid=jQuery(this).attr("id");
var href=jQuery(this).attr("href");
if(aid=="acrup"||aid=="acrdown"){
_b4d=true;
var _b50=href.substr(8);
_b3b+="&start="+_b50;
_b3b=_b3b.replace(/&&/,"&");
}
});
if(_b4d){
if(!_b49){
setTimeout(function(){
jQuery(_b40).trigger("keyup");
},200);
_b34=false;
_b49=true;
}
return (false);
}
var _b51=jQuery(this).text();
if(_b3d){
_b51=_b3d(_b51);
}
jQuery(_b3e).attr("value",_b51);
if(_b39){
jQuery(_b39).trigger("click");
}
return (false);
});
jQuery(_b36+" > .auto_comp_row").bind("keypress",function(e){
var key=0;
if(e==null){
key=event.keyCode;
}else{
key=e.which;
}
switch(key){
case 13:
jQuery(this).trigger("click");
return (false);
break;
}
return (true);
});
jQuery(_b36+" > .auto_comp_row").bind("keydown",function(e){
var key=0;
if(e==null){
key=event.keyCode;
}else{
key=e.which;
}
switch(key){
case 40:
if(!jQuery(_b36+" > .auto_comp_row:visible:eq("+_b3c+") > a").length){
return (false);
}
++_b3c;
jQuery(_b36+" > .auto_comp_row:visible:eq("+_b3c+") > a").trigger("focus");
return (false);
break;
case 38:
--_b3c;
if(_b3c<0){
jQuery(_b3f).trigger("focus");
}else{
jQuery(_b36+" > .auto_comp_row:visible:eq("+_b3c+") > a").trigger("focus");
}
return (false);
break;
}
return (true);
});
});
}
});
}
});
};
var ImageViewerControl=Class.create();
ImageViewerControl.prototype={initialize:function(_b56,_b57,_b58,_b59){
this.modId=_b56;
this.floatStatus=_b57;
this.displayStatus=_b58;
this.popupFlg=_b59;
this.photoData=new Object();
this.photoOrder=new Array();
this.viewer_id=null;
this.timer=null;
this.slide_idx=-1;
this.displaySlideshowLinks=false;
this.excludeImageIdsFromSlideshow=$A(new Array());
this.resources={ht_viewer_sect:"image_viewer_"+this.modId,ht_inline_sect:"image_inline_"+this.modId,ht_slideshow_sect:"image_slideshow_"+this.modId,ht_thumbnail_sect:"image_thumbnail_"+this.modId,inline_images:"imgs_"+this.modId,viewer_display:"slide_display_"+this.modId,viewer_photo:"slide_img_"+this.modId,viewer_caption:"slide_desc_"+this.modId,thumb_tn_section:"slide_tn_section_"+this.modId};
},setMaxHeight:function(_b5a){
this.firstTimeLoadingImage=true;
this.maxHeight=_b5a;
},addPhoto:function(rec){
this.photoData[rec.id]=rec;
this.photoOrder.push(rec.id);
},clear:function(){
delete this.photoData;
this.photoData=new Object();
this.photoOrder.clear();
},render:function(){
switch(this.displayStatus){
case "No Border":
case "With Border":
this.renderInlineImages();
break;
case "Thumbnail":
this.renderThumbnails();
break;
}
},toggleViewer:function(){
switch(this.displayStatus){
case "No Border":
case "With Border":
Element.hide(this.resources.ht_viewer_sect);
Element.show(this.resources.ht_inline_sect);
Element.hide(this.resources.ht_thumbnail_sect);
break;
case "Thumbnail":
Element.show(this.resources.ht_viewer_sect);
Element.hide(this.resources.ht_inline_sect);
Element.show(this.resources.ht_thumbnail_sect);
break;
}
},loadSlide:function(id){
if(!this.firstTimeLoadingImage&&this.maxHeight){
$(this.resources.viewer_display).style.height=this.maxHeight+"px";
}
this.viewer_id=id;
rec=this.photoData[id];
$(this.resources.viewer_photo).innerHTML=this._getDisplayUrl();
$(this.resources.viewer_caption).innerHTML=this._getCaptionAndSource(rec);
if(this.popupFlg){
this._addpopup(id,$(this.resources.viewer_photo).firstChild);
}
this.firstTimeLoadingImage=false;
},getMaxDisplayHeight:function(){
var top=0;
this.photoOrder.each(function(id){
var hgt=this._getDisplayHeight(id);
top=hgt>top?hgt:top;
}.bind(this));
return top;
},setDisplaySlideshowLinks:function(_b60){
this.displaySlideshowLinks=_b60;
},setExcludeImagesFromSlideshow:function(){
this.excludeImageIdsFromSlideshow=$A(arguments);
},_getDisplayUrl:function(){
rec=this.photoData[this.viewer_id];
var _b61=rec.origWidth>=200&&rec.origHeight>=150;
if(rec.maxSize==2&&this.displayStatus=="With Border"){
return this._createImageTag(rec.urlQuarter,"quarter_frame",rec.esc_cap)+(_b61&&this.displaySlideshowLinks&&this.excludeImageIdsFromSlideshow.indexOf(this.viewer_id)==-1?getHubSlideshowHtml("quarter",this.displayStatus=="With Border"):"");
}else{
if(rec.maxSize==2){
return this._createImageTag(rec.urlQuarter,"quarter",rec.esc_cap)+(_b61&&this.displaySlideshowLinks&&this.excludeImageIdsFromSlideshow.indexOf(this.viewer_id)==-1?getHubSlideshowHtml("quarter",this.displayStatus=="With Border"):"");
}else{
if((this.floatStatus=="right"||rec.maxSize==1)&&this.displayStatus=="With Border"){
return this._createImageTag(rec.urlHalfPad,"half_frame",rec.esc_cap)+(_b61&&this.displaySlideshowLinks&&this.excludeImageIdsFromSlideshow.indexOf(this.viewer_id)==-1?getHubSlideshowHtml("half",this.displayStatus=="With Border"):"");
}else{
if(this.floatStatus=="right"||rec.maxSize==1){
return this._createImageTag(rec.urlHalf,"half",rec.esc_cap)+(_b61&&this.displaySlideshowLinks?getHubSlideshowHtml("half",this.displayStatus=="With Border"):"");
}else{
if(this.floatStatus=="none"&&this.displayStatus=="With Border"){
return this._createImageTag(rec.urlFullPad,"full_frame",rec.esc_cap)+(_b61&&this.displaySlideshowLinks&&this.excludeImageIdsFromSlideshow.indexOf(this.viewer_id)==-1?getHubSlideshowHtml("full",this.displayStatus=="With Border"):"");
}else{
if(this.floatStatus=="none"){
return this._createImageTag(rec.urlFull,"full",rec.esc_cap)+(_b61&&this.displaySlideshowLinks&&this.excludeImageIdsFromSlideshow.indexOf(this.viewer_id)==-1?getHubSlideshowHtml("full",this.displayStatus=="With Border"):"");
}
}
}
}
}
}
},_createImageTag:function(url,_b63,_b64){
if(undefined==_b64){
_b64="";
}
return "<img class='"+_b63+"' title='"+_b64+"' alt='"+_b64+"' src='"+url+"' />";
},_getDisplayHeight:function(_b65){
rec=this.photoData[_b65];
if(rec.maxSize==2){
return rec.ratio*120;
}else{
if((this.floatStatus=="right"||rec.maxSize==1)&&this.displayStatus=="With Border"){
return rec.ratio*248;
}else{
if(this.floatStatus=="right"||rec.maxSize==1){
return rec.ratio*260;
}else{
if(this.floatStatus=="none"&&this.displayStatus=="With Border"){
return rec.ratio*496;
}else{
if(this.floatStatus=="none"){
return rec.ratio*520;
}
}
}
}
}
},_getCaptionAndSource:function(rec){
var _b67=rec.nofollow?" rel=\"nofollow\"":"";
var _b68="";
if(rec.sourceUrl==""){
_b68=rec.sourceName;
}else{
if(rec.sourceName==""){
_b68="<a href=\""+rec.sourceUrl.replace(/"/g,"")+"\""+_b67+">"+rec.sourceUrl.truncate(50)+"</a>";
}else{
_b68="<a href=\""+rec.sourceUrl.replace(/"/g,"")+"\""+_b67+">"+rec.sourceName+"</a>";
}
}
if(_b68!=""){
_b68="<div>Source: "+_b68+"</div>";
}
return rec.caption+_b68;
},_addInlineImage:function(id){
this.viewer_id=id;
var rec=this.photoData[id];
var _b6b=document.createElement("div");
var _b6c=this._getDisplayUrl();
if(this.floatStatus=="none"){
var _b6d="caption_full";
}else{
var _b6d="caption_half";
}
_b6b.id="img_"+rec.id;
_b6b.innerHTML="<div id='img_url_"+rec.id+"'>"+_b6c+"</div>"+"<div class='"+_b6d+"' id='img_desc_"+rec.id+"'>"+this._getCaptionAndSource(rec)+"</div>";
$(this.resources.inline_images).appendChild(_b6b);
if(this.popupFlg){
this._addpopup(rec.id,$("img_url_"+rec.id).firstChild);
}
},renderInlineImages:function(){
$(this.resources.inline_images).innerHTML="";
this.photoOrder.each(function(id){
this._addInlineImage(id);
}.bind(this));
},_addThumbnail:function(id){
var rec=this.photoData[id];
var _b71=document.createElement("img");
_b71.id="slide_tn_"+rec.id;
_b71.src=rec.urlThumb;
_b71.alt=rec.caption;
_b71.title=rec.caption;
_b71.onclick=function(){
this.loadSlide(rec.id);
}.bind(this);
$(this.resources.thumb_tn_section).appendChild(_b71);
},renderThumbnails:function(){
$(this.resources.thumb_tn_section).innerHTML="";
this.photoOrder.each(function(id){
this._addThumbnail(id);
}.bind(this));
if(this.photoOrder.length>0){
$("slide_tn_"+this.photoOrder[0]).onclick();
}
},_addpopup:function(id,img){
img.title="Click to see full-size image.";
var link=jq("<a href=\"#\"></a>");
link.attr("data-lightbox",this.photoData[id].lightboxUrl).addClass("imglightbox");
jq(img).after(link).detach();
link.append(img);
link.fancybox({overlayOpacity:0.8,overlayColor:"#000",titleShow:false});
}};
var ForumSelector=Class.create();
ForumSelector.prototype={initialize:function(id,_b77){
this.id=id;
this.userId=_b77;
this.observeChanges();
},observeChanges:function(){
$(this.id+"_forum_id").observe("change",this.changeForum.bindAsEventListener(this));
$$("."+this.id+"_category_selector").each(function(elt){
elt.observe("change",this.changeCategory.bindAsEventListener(this));
}.bind(this));
},changeForum:function(_b79){
var elt=Event.findElement(_b79,"select");
this.chooseForum($F(elt));
},changeCategory:function(_b7b){
var elt=Event.findElement(_b7b,"select");
this.chooseCategory($F(elt));
},chooseForum:function(_b7d){
if(/fave/.test(_b7d)){
var _b7e=_b7d.substring(5);
this.chooseCategory(_b7e);
return;
}
new Ajax.Updater(this.id+"_forum_selector","/xml/forumselector.php",{parameters:$H({forumId:_b7d,id:this.id,userId:this.userId}).toQueryString(),onComplete:this.observeChanges.bind(this)});
},chooseCategory:function(_b7f){
new Ajax.Updater(this.id+"_forum_selector","/xml/forumselector.php",{parameters:$H({categoryId:_b7f,id:this.id,userId:this.userId}).toQueryString(),onComplete:this.observeChanges.bind(this)});
}};
var CategorySelector=Class.create();
CategorySelector.prototype={initialize:function(id,_b81,_b82,_b83){
this.id=id;
this.onchange=_b81;
this.onselect=_b82;
this.userId=_b83?_b83:0;
this.observeChanges();
},observeChanges:function(){
$$("."+this.id+"_category_selector").each(function(elt){
elt.observe("change",this.changeCategory.bindAsEventListener(this));
}.bind(this));
$("startOver"+this.id).observe("click",this.startOver.bind(this));
},changeCategory:function(_b85){
var elt=Event.findElement(_b85,"select");
this.chooseCategory($F(elt));
},chooseCategory:function(_b87,_b88,_b89){
new Ajax.Request("/xml/categoryselector.php",{parameters:$H({categoryId:_b87,userId:this.userId,id:this.id}).toQueryString(),onComplete:function(req){
var data=JSONstring.toObject(req.responseText);
$(this.id+"Wrapper").innerHTML=data["render"];
this.observeChanges();
if($(this.uniqueId+"SearchText")){
$(this.uniqueId+"SearchText").value="";
}
if($(this.uniqueId+"SearchResults")){
$(this.uniqueId+"SearchResults").innerHTML="";
}
this.onchange(data);
if(!_b88&&_b89){
this.onselect(_b89);
}
}.bind(this)});
},getValue:function(){
return $F(this.id+"Id");
},startOver:function(_b8c){
this.chooseCategory(0);
},refresh:function(){
this.chooseCategory(this.getValue());
},search:function(_b8d,_b8e,_b8f){
new Ajax.Updater(_b8e,"/xml/categorysearch.php",{parameters:$H({uniqueId:this.id,searchText:_b8d,numTabs:_b8f}),onFailure:function(){
}});
return false;
}};
function addEvent(_b90,type,_b92){
if(!_b92.$$guid){
_b92.$$guid=addEvent.guid++;
}
if(!_b90.events){
_b90.events={};
}
var _b93=_b90.events[type];
if(!_b93){
_b93=_b90.events[type]={};
if(_b90["on"+type]){
_b93[0]=_b90["on"+type];
}
}
_b93[_b92.$$guid]=_b92;
_b90["on"+type]=handleEvent;
};
addEvent.guid=1;
function removeEvent(_b94,type,_b96){
if(_b94.events&&_b94.events[type]){
delete _b94.events[type][_b96.$$guid];
}
};
function handleEvent(_b97){
var _b98=true;
_b97=_b97||fixEvent(window.event);
if(_b97==null){
return false;
}
if(this.events==null){
return false;
}
var _b99=this.events[_b97.type];
for(var i in _b99){
this.$$handleEvent=_b99[i];
if(this.$$handleEvent(_b97)===false){
_b98=false;
}
}
return _b98;
};
function fixEvent(_b9b){
if(_b9b!=null){
_b9b.preventDefault=fixEvent.preventDefault;
_b9b.stopPropagation=fixEvent.stopPropagation;
}
return _b9b;
};
fixEvent.preventDefault=function(){
this.returnValue=false;
};
fixEvent.stopPropagation=function(){
this.cancelBubble=true;
};
function getEventTarget(e){
var targ;
if(!e){
e=window.event;
}
if(e.target){
targ=e.target;
}else{
if(e.srcElement){
targ=e.srcElement;
}
}
if(targ.nodeType==3){
targ=targ.parentNode;
}
return targ;
};
var css={getElementsByClass:function(node,_b9f,tag){
var _ba1=new Array();
var els=node.getElementsByTagName(tag);
var _ba3=els.length;
var _ba4=new RegExp("(^|\\s)"+_b9f+"(\\s|$)");
for(var i=0,j=0;i<_ba3;i++){
if(this.elementHasClass(els[i],_b9f)){
_ba1[j]=els[i];
j++;
}
}
return _ba1;
},elementHasClass:function(el,_ba8){
if(!el){
return false;
}
var _ba9=new RegExp("\\b"+_ba8+"\\b");
if(el.className.match(_ba9)){
return true;
}
return false;
}};
var standardistaTableSorting={that:false,sortColumnIndex:-1,lastAssignedId:0,newRows:-1,lastSortedTable:-1,init:function(){
if(!document.getElementsByTagName){
return;
}
this.that=this;
this.run();
},run:function(){
var _baa=document.getElementsByTagName("table");
for(var i=0;i<_baa.length;i++){
var _bac=_baa[i];
if(css.elementHasClass(_bac,"sortable")){
this.makeSortable(_bac);
}
}
},makeSortable:function(_bad){
if(!_bad.id){
_bad.id="sortableTable"+this.lastAssignedId++;
}
if(!_bad.tHead||!_bad.tHead.rows||0==_bad.tHead.rows.length){
return;
}
var row=_bad.tHead.rows[_bad.tHead.rows.length-1];
for(var i=0;i<row.cells.length;i++){
var _bb0=row.cells[i].firstChild;
_bb0.onclick=this.headingClicked;
_bb0.setAttribute("columnId",i);
}
},sortTheTable:function(e){
var that=standardistaTableSorting.that;
var _bb3=getEventTarget(e);
var td=_bb3.parentNode;
var tr=td.parentNode;
var _bb6=tr.parentNode;
var _bb7=_bb6.parentNode;
if(!_bb7.tBodies||_bb7.tBodies[0].rows.length<=1){
return false;
}
var _bb8=_bb3.getAttribute("columnId")||td.cellIndex;
var _bb9=css.getElementsByClass(td,"tableSortArrow","span");
var _bba="";
if(_bb9.length>0){
_bba=_bb9[0].getAttribute("sortOrder");
}
var itm="";
var _bbc=0;
while(""==itm&&_bbc<_bb7.tBodies[0].rows.length){
var elm=_bb7.tBodies[0].rows[_bbc].cells[_bb8];
if(elm.childNodes.length==1){
itm=that.getInnerText(_bb7.tBodies[0].rows[_bbc].cells[_bb8]);
}else{
itm=that.getInnerText(_bb7.tBodies[0].rows[_bbc].cells[_bb8].firstChild);
}
_bbc++;
}
var _bbe=that.determineSortFunction(itm);
var _bbf;
if(_bb7.id==that.lastSortedTable&&_bb8==that.sortColumnIndex){
_bbf=that.newRows;
_bbf.reverse();
}else{
that.sortColumnIndex=_bb8;
_bbf=new Array();
for(var j=0;j<_bb7.tBodies[0].rows.length;j++){
_bbf[j]=_bb7.tBodies[0].rows[j];
}
_bbf.sort(_bbe);
}
that.moveRows(_bb7,_bbf);
that.newRows=_bbf;
that.lastSortedTable=_bb7.id;
var _bb9=css.getElementsByClass(tr,"tableSortArrow","span");
for(var j=0;j<_bb9.length;j++){
if(j==_bb8){
if(null==_bba||""==_bba||"DESC"==_bba){
_bb9[j].innerHTML="▼";
_bb9[j].setAttribute("sortOrder","ASC");
}else{
_bb9[j].innerHTML="▲";
_bb9[j].setAttribute("sortOrder","DESC");
}
}else{
_bb9[j].innerHTML="&nbsp;";
}
}
if(Element.hasClassName(_bb7.tBodies[0].rows[0],"evenRow")||Element.hasClassName(_bb7.tBodies[0].rows[0],"oddRow")){
for(var i=0;i<_bb7.tBodies[0].rows.length;i++){
tr=_bb7.tBodies[0].rows[i];
if(i%2==0){
if(!Element.hasClassName(tr,"oddRow")){
Element.addClassName(tr,"oddRow");
}
if(Element.hasClassName(tr,"evenRow")){
Element.removeClassName(tr,"evenRow");
}
}else{
if(!Element.hasClassName(tr,"evenRow")){
Element.addClassName(tr,"evenRow");
}
if(Element.hasClassName(tr,"oddRow")){
Element.removeClassName(tr,"oddRow");
}
}
}
}
return false;
},headingClicked:function(e){
var that=standardistaTableSorting.that;
that.sortTheTable(e);
return false;
},getInnerText:function(el){
if("string"==typeof el||"undefined"==typeof el){
return el;
}
if(null==el){
return "";
}
if(el.innerText){
return el.innerText;
}
if(el.nodeType&&el.nodeType==3){
return jq(el).text();
}
var str=el.getAttribute("standardistaTableSortingInnerText");
if(null!=str&&""!=str){
return str;
}
str="";
var cs=el.childNodes;
var l=cs.length;
for(var i=0;i<l;i++){
if(1==cs[i].nodeType){
str+=this.getInnerText(cs[i]);
break;
}else{
if(3==cs[i].nodeType){
str+=cs[i].nodeValue;
break;
}
}
}
el.setAttribute("standardistaTableSortingInnerText",str);
return str;
},determineSortFunction:function(itm){
var _bca=this.sortCaseInsensitive;
if(itm.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)){
_bca=this.sortDate;
}
if(itm.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)){
_bca=this.sortDate;
}
if(itm.match(/^[�$]/)){
_bca=this.sortCurrency;
}
if(itm.match(/^\d?\.?\d+$/)){
_bca=this.sortNumeric;
}
if(itm.match(/^[+-]?\d*\.?\d+([eE]-?\d+)?$/)){
_bca=this.sortNumeric;
}
if(itm.match(/^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$/)){
_bca=this.sortIP;
}
return _bca;
},sortCaseInsensitive:function(a,b){
var that=standardistaTableSorting.that;
var aa=that.getInnerText(a.cells[that.sortColumnIndex]).toLowerCase();
var bb=that.getInnerText(b.cells[that.sortColumnIndex]).toLowerCase();
if(aa==bb){
return 0;
}else{
if(aa<bb){
return -1;
}else{
return 1;
}
}
},sortDate:function(a,b){
var that=standardistaTableSorting.that;
var aa=that.getInnerText(a.cells[that.sortColumnIndex]);
var bb=that.getInnerText(b.cells[that.sortColumnIndex]);
var dt1,dt2,yr=-1;
if(aa.length==10){
dt1=aa.substr(6,4)+aa.substr(3,2)+aa.substr(0,2);
}else{
yr=aa.substr(6,2);
if(parseInt(yr)<50){
yr="20"+yr;
}else{
yr="19"+yr;
}
dt1=yr+aa.substr(3,2)+aa.substr(0,2);
}
if(bb.length==10){
dt2=bb.substr(6,4)+bb.substr(3,2)+bb.substr(0,2);
}else{
yr=bb.substr(6,2);
if(parseInt(yr)<50){
yr="20"+yr;
}else{
yr="19"+yr;
}
dt2=yr+bb.substr(3,2)+bb.substr(0,2);
}
if(dt1==dt2){
return 0;
}else{
if(dt1<dt2){
return -1;
}
}
return 1;
},sortCurrency:function(a,b){
var that=standardistaTableSorting.that;
var aa=that.getInnerText(a.cells[that.sortColumnIndex]).replace(/[^0-9.]/g,"");
var bb=that.getInnerText(b.cells[that.sortColumnIndex]).replace(/[^0-9.]/g,"");
return parseFloat(aa)-parseFloat(bb);
},sortNumeric:function(a,b){
var that=standardistaTableSorting.that;
var _be0=a.cells[that.sortColumnIndex];
if(_be0.childNodes.length>1){
var aa=parseFloat(that.getInnerText(a.cells[that.sortColumnIndex].firstChild));
}else{
aa=parseFloat(that.getInnerText(a.cells[that.sortColumnIndex]));
}
if(isNaN(aa)){
aa=0;
}
var _be2=b.cells[that.sortColumnIndex];
if(_be2.childNodes.length>1){
var bb=parseFloat(that.getInnerText(b.cells[that.sortColumnIndex].firstChild));
}else{
bb=parseFloat(that.getInnerText(b.cells[that.sortColumnIndex]));
}
if(isNaN(bb)){
bb=0;
}
return aa-bb;
},makeStandardIPAddress:function(val){
var vals=val.split(".");
for(x in vals){
val=vals[x];
while(3>val.length){
val="0"+val;
}
vals[x]=val;
}
val=vals.join(".");
return val;
},sortIP:function(a,b){
var that=standardistaTableSorting.that;
var aa=that.makeStandardIPAddress(that.getInnerText(a.cells[that.sortColumnIndex]).toLowerCase());
var bb=that.makeStandardIPAddress(that.getInnerText(b.cells[that.sortColumnIndex]).toLowerCase());
if(aa==bb){
return 0;
}else{
if(aa<bb){
return -1;
}else{
return 1;
}
}
},moveRows:function(_beb,_bec){
for(var i=0;i<_bec.length;i++){
var _bee=_bec[i];
_beb.tBodies[0].appendChild(_bee);
}
}};
function standardistaTableSortingInit(){
standardistaTableSorting.init();
};
Event.observe(window,"load",standardistaTableSortingInit);
var PollManager=Class.create();
PollManager.prototype={initialize:function(_bef,_bf0,_bf1){
this.modId=_bef;
this.pollId=_bf0;
this.results_div_id=_bef+"_poll_results";
this.vote_form_id=_bef+"_vote_form";
this.vote_radio_name=_bef+"_vote";
this.hubnugget=_bf1;
},seePollVotes:function(){
this.question_HTML=$(this.results_div_id).innerHTML;
var _bf2=$H({id:this.pollId}).toQueryString();
var ajax=new Ajax.Updater({success:this.results_div_id},"/xml/pollvote.php",{parameters:_bf2,onFailure:reportError,onComplete:function(){
}});
},goBackAndVote:function(){
$(this.results_div_id).innerHTML=this.question_HTML;
},voteInPoll:function(){
var vote;
var hn=this.hubnugget?1:0;
var _bf6=Form.getInputs(this.vote_form_id,"radio",this.vote_radio_name).find(function(_bf7){
return _bf7.checked;
});
if(null==_bf6){
return;
}else{
vote=_bf6.value;
}
var _bf8=$H({id:this.pollId,vote:vote,hn:hn}).toQueryString();
var ajax=new Ajax.Updater({success:this.results_div_id},"/xml/pollvote.php",{parameters:_bf8,onFailure:reportError,onComplete:function(){
}});
}};
var PollManagerManager=Class.create();
PollManagerManager.prototype={initialize:function(){
this.pollManagers=[];
},add:function(id,pm){
this.pollManagers[id]=pm;
},getById:function(id){
return this.pollManagers[id];
}};
var pmm=new PollManagerManager();
var ContentRotator=Class.create();
ContentRotator.prototype={initialize:function(ids,_bfe,_bff,_c00,_c01,_c02,_c03,_c04,_c05,loop){
this.ids=ids;
this.prefix=_bfe;
this.interval=_bff;
this.position=0;
this.paused=false;
this.transitionEffect=_c00;
this.transitioning=false;
this.activeUpdateThreadId=0;
this.fadeTransition=false;
if(_c01){
this.playId=_c01;
}
if(_c02){
this.pauseId=_c02;
}
if(_c03){
this.positionIndicatorId=_c03;
}
if(this.interval>0){
setTimeout(this.update.bind(this,this.activeUpdateThreadId),this.interval);
}
if(_c04){
this.prevId=_c04;
}
if(_c05){
this.nextId=_c05;
}
if(loop==undefined||loop){
this.loop=true;
}else{
this.loop=false;
}
},update:function(_c07){
if(this.paused||this.activeUpdateThreadId!=_c07){
return;
}
this.next();
setTimeout(this.update.bind(this,_c07),this.interval);
},pause:function(){
$(this.pauseId).hide();
$(this.playId).show();
this.paused=true;
},play:function(){
$(this.playId).hide();
$(this.pauseId).show();
this.paused=false;
this.activeUpdateThreadId++;
this.update(this.activeUpdateThreadId);
},endTransition:function(){
this.transitioning=false;
},seek:function(_c08){
var next=this.position<_c08;
newPosition=_c08%this.ids.length;
while(newPosition<0){
newPosition+=this.ids.length;
}
if(this.position==newPosition){
return;
}
if(this.positionIndicatorId){
$(this.positionIndicatorId+"_"+this.position).removeClassName("active");
}
if(this.transitionEffect>0){
if(this.transitioning){
if(next){
setTimeout(this.next.bind(this),400);
}else{
setTimeout(this.previous.bind(this),400);
}
return;
}
this.transitioning=true;
var _c0a=new fx.Opacity(this.prefix+this.ids[this.position],{duration:this.transitionEffect});
_c0a.toggle();
this.position=newPosition;
if(this.fadeTransition){
var _c0b=new fx.Opacity(this.prefix+this.ids[this.position],{duration:this.transitionEffect});
}else{
var _c0b=new fx.Height(this.prefix+this.ids[this.position],{duration:this.transitionEffect});
}
if(window.ActiveXObject){
$(this.prefix+this.ids[this.position]).setStyle({display:"inline",visibility:"visible"});
$(this.prefix+this.ids[this.position]).style.removeAttribute("filter");
}else{
$(this.prefix+this.ids[this.position]).setStyle({display:"inline",visibility:"visible",opacity:1});
}
_c0b.options.onComplete=this.endTransition.bind(this);
_c0b.hide();
_c0b.toggle();
}else{
$(this.prefix+this.ids[this.position]).hide();
this.position=newPosition;
$(this.prefix+this.ids[this.position]).show();
}
if(this.positionIndicatorId){
$(this.positionIndicatorId+"_"+this.position).addClassName("active");
}
if(!this.loop){
$(this.nextId).removeClassName("disabled");
$(this.prevId).removeClassName("disabled");
if(this.position==this.ids.length-1){
$(this.nextId).addClassName("disabled");
}
if(this.position==0){
$(this.prevId).addClassName("disabled");
}
}
},next:function(){
this.seek(this.position+1);
},previous:function(){
this.seek(this.position-1);
}};
var FeedManager=Class.create();
FeedManager.prototype={initialize:function(_c0c,_c0d,_c0e,_c0f,_c10){
this.typeId=_c0c;
this.categoryId=_c0d;
this.starred=_c0e;
this.mobile=navigator.userAgent.toLowerCase().indexOf("mobile")>-1;
this.standalone=_c10;
this.updateTime=_c0f;
this.originalUpdateTime=_c0f;
this.currentTime=parseInt(_c0f,10);
this.reportingFeedStoryId=0;
this.hiddenCount=0;
this.handlers=[];
this.feedItems=[];
this.feedItemCollection=[];
if(!this.standalone){
Event.observe(window,"load",function(){
if(browser=="IE"&&version<=6){
$("old_browser").show();
}
this.updateFeedTypeFilters();
$$("#sidebar .cat").each(function(elt){
if(elt.hasClassName("disabled")){
return;
}
elt.observe("mouseover",function(){
elt.addClassName("active_category");
elt.down(".delete_category").show();
});
elt.observe("mouseout",function(){
elt.removeClassName("active_category");
elt.down(".delete_category").hide();
});
});
if(this.starred==0){
this.newStoriesAvailable=0;
this.updaterFibonacciValue=60000;
this.updaterFibonacciValue2=60000;
setTimeout(this.fibonacciUpdate.bind(this),this.updaterFibonacciValue);
}
}.bind(this));
}
setInterval(this.updateTimes.bind(this),60000);
},updateTimes:function(){
this.currentTime+=60;
$$(".timestamp").each(function(elt){
var _c13=0;
elt.classNames().each(function(name){
if(name.substring(0,2)=="t_"){
_c13=parseInt(name.substring(2),10);
throw $break;
}
});
elt.innerHTML=this.getTimeAgo(this.currentTime-_c13);
}.bind(this));
},getTimeAgo:function(_c15){
if(_c15<=1){
return "1 second ago";
}
var _c16=Math.round(_c15/60);
var _c17=Math.round(_c15/3600);
var days=Math.round(_c15/86400);
var _c19=Math.round(_c15/604800);
var _c1a=Math.round(_c15/2592000);
var _c1b=Math.round(_c15/31536000);
var ret="";
if(_c1b>=2){
ret=_c1b+" years ago";
}else{
if(_c1a>=2){
ret=_c1a+" months ago";
}else{
if(_c19>=2){
ret=_c19+" weeks ago";
}else{
if(days>=2){
ret=days+" days ago";
}else{
if(_c17>=2){
ret=_c17+" hours ago";
}else{
if(_c16>=1){
ret=_c16+" minute"+(_c16==1?"":"s")+" ago";
}else{
ret=_c15+" second"+(_c15==1?"":"s")+" ago";
}
}
}
}
}
}
return ret;
},fibonacciUpdate:function(){
var _c1d=this.updaterFibonacciValue+this.updaterFibonacciValue2;
this.updaterFibonacciValue=this.updaterFibonacciValue2;
this.updaterFibonacciValue2=_c1d;
new Ajax.Request("/xml/feedupdate.php",{parameters:$H({render:0,a:this.updateTime,typeId:this.typeId,cId:this.categoryId}).toQueryString(),onComplete:function(req){
var _c1f=parseInt(req.responseText,10);
if(_c1f>0){
this.newStoriesAvailable=_c1f;
this.updateStoriesAvailable();
}
setTimeout(this.fibonacciUpdate.bind(this),this.updaterFibonacciValue);
}.bind(this)});
},updateStoriesAvailable:function(){
if(this.newStoriesAvailable==0){
$("new_stories_available").innerHTML="";
return;
}
var _c20=this.newStoriesAvailable==1?"y":"ies";
var is=this.newStoriesAvailable==1?"is":"are";
$("new_stories_available").innerHTML="at least "+this.newStoriesAvailable+" new stor"+_c20+" "+is+" available (click to load)";
},loadNewStories:function(_c22){
var nt=_c22?_c22:0;
$("loading_feed").show();
new Ajax.Request("/xml/feedupdate.php",{parameters:$H({render:1,a:this.updateTime,typeId:this.typeId,cId:this.categoryId,nt:nt}).toQueryString(),onComplete:function(req){
var data=JSONstring.toObject(req.responseText);
this.updateTime=data["utime"];
var _c26=$(document.createElement("div"));
_c26.addClassName("feed_item");
_c26.innerHTML=data["render"];
var _c27=$("feed_box").down(".feed_item",0);
_c27.parentNode.insertBefore(_c26,_c27);
_c26.descendants().each(function(elt){
if(elt.tagName=="SCRIPT"){
eval(elt.innerHTML);
}
});
this.addItems(data["feedData"]);
this.updaterFibonacciValue=30000;
this.updaterFibonacciValue2=30000;
this.newStoriesAvailable=0;
this.updateStoriesAvailable();
$("loading_feed").hide();
}.bind(this)});
return false;
},userFanJoin:function(u){
$("loading_feed").show();
new Ajax.Request("/xml/fan.php",{parameters:"u="+u+"&action=add",onComplete:function(req){
var info=JSONstring.toObject(req.responseText);
$("loading_feed").hide();
var _c2c=$(document.createElement("div"));
_c2c.addClassName("feed_item");
_c2c.innerHTML="<h2 class=\"feed_heading\">You are now following <a href=\""+info["url"]+"\">"+info["username"]+"</a>.</h2>";
var _c2d=$("feed_box").down(".feed_item",0);
_c2d.parentNode.insertBefore(_c2c,_c2d);
var li=$("suggested_author_"+u);
var ul=li.up("ul");
li.remove();
if(ul.immediateDescendants().size()==0){
new Ajax.Updater("suggested_author_box","/xml/fan.php",{parameters:"action=suggest&c="+this.categoryId});
}
}.bind(this)});
return false;
},categoryFanJoin:function(){
categoryFanBulkJoin("feed_category_fans",false,false,true,this.categoryFanCallback.bind(this));
$("loading_feed").show();
$("category_fan_search").innerHTML="";
$("category_fan_search_text").value="";
return false;
},categoryFanCallback:function(req){
var info=JSONstring.toObject(req.responseText);
if(info.length>0){
if(this.starred||this.categoryId||this.typeId){
$("loading_feed").hide();
$A(info).each(function(data){
var _c33=$(document.createElement("div"));
_c33.addClassName("feed_item");
_c33.innerHTML="<h2 class=\"feed_heading\">You are now following the topic <a href=\"/feed/all/"+data["id"]+"\">"+data["name"]+"</a>.</h2>";
var _c34=$("feed_box").down(".feed_item",0);
_c34.parentNode.insertBefore(_c33,_c34);
});
}else{
this.loadNewStories(info.length);
}
$A(info).each(function(data){
jq("#hc_"+data["id"]).remove();
});
}else{
$("loading_feed").hide();
var _c36=$(document.createElement("div"));
_c36.addClassName("feed_item");
_c36.innerHTML="<h2 class=\"feed_heading\">You were already a fan of that topic or topics.</h2>";
var _c37=$("feed_box").down(".feed_item",0);
_c37.parentNode.insertBefore(_c36,_c37);
return;
}
var _c38=$("category_filters");
if(!_c38){
var _c39=$(document.createElement("div"));
_c39.addClassName("sidebar_box");
_c39.innerHTML="<h3>Filter By Topic</h3><ul id=\"category_filters\" class=\"feed_filter\"><li class=\"all active\">All Topics</li></ul>";
var _c3a=$("type_filters");
_c3a.parentNode.insertBefore(_c39,_c3a);
var _c38=$("category_filters");
}
$A(info).each(function(data){
var li=$(document.createElement("li"));
li.id="category_filter_"+data["id"];
li.addClassName("cat");
li.innerHTML="<a class=\"delete_category\" onclick=\"return fm.deleteCategory("+data["id"]+",'"+data["name"]+"');"+"\" style=\"display: none;\" href=\"#\">delete</a>";
li.innerHTML+="<a href=\"/feed/all/"+data["id"]+"\" title=\""+data["path"]+"\">"+data["name"]+"</a>";
_c38.appendChild(li);
li.observe("mouseover",function(){
li.addClassName("active_category");
li.down(".delete_category").show();
});
li.observe("mouseout",function(){
li.removeClassName("active_category");
li.down(".delete_category").hide();
});
});
},readMore:function(_c3d,type,id){
new Ajax.Updater(_c3d,"/xml/readmore.php",{parameters:$H({id:id,type:type}).toQueryString()});
return false;
},makeGrowable:function(id,_c41,_c42,_c43){
makeGrowable(id,_c41,_c42,_c43);
},makeExpandable:function(id,_c45,_c46,_c47){
makeExpandable(id,_c45,_c46,_c47);
},addItems:function(feed){
feed.each(function(item){
var fi=new FeedItemManager(item["id"],item["fid"],item["date"],item["hidden"],item["liked"],this);
this.feedItems[item["id"]]=fi;
this.feedItemCollection.push(fi);
if(!item["temporary"]){
if(item["hidden"]){
this.hiddenCount++;
}else{
if(!this.standalone){
fi.hideMenuObserve();
}
}
}
}.bind(this));
if(!this.standalone){
this.updateHiddenLink();
}
},addHandler:function(name,h){
h.ensureSignedInBeforeSave=true;
this.handlers[name]=h;
},getHandler:function(name){
return this.handlers[name];
},saveForm:function(_c4e){
this.getHandler(_c4e).save();
return false;
},addStoryToTop:function(_c4f,id,_c51){
var _c52=$(document.createElement("div"));
_c52.innerHTML=_c4f;
_c52.addClassName("feed_item");
var _c53=$("feed_box").down(".feed_item",0);
_c53.parentNode.insertBefore(_c52,_c53);
_c52.descendants().each(function(elt){
if(elt.tagName=="SCRIPT"){
safeScriptEval(elt);
}
});
this.addItems(new Array({id:id,fid:id,date:0,hidden:0,liked:0,temporary:1}));
var _c55=new fx.Color(_c52,{duration:1600,fromColor:"#feffd7",toColor:"#ffffff",onComplete:(_c51?_c51:function(){
})});
_c55.toggle();
},shrinkStatus:function(){
photoGalleryInserter.instance().close();
var s=$("status");
s.value="What's on your mind?";
s.addClassName("dimmed");
$$("#status_update input[type=checkbox]")[0].checked=false;
$$("#status_update .photo_preview")[0].innerHTML="";
$$("#status_update input[name=imageId]")[0].value=0;
$("status_wrapper").removeClassName("expanded");
var _c57=new fx.Height("status_wrapper",{duration:400,toHeight:23,onComplete:function(){
$("status_wrapper").setStyle({height:"auto"});
$("tabcontent_feed_top_0").removeClassName("expanded");
}});
_c57.toggle();
},shrinkQuestion:function(data){
photoGalleryInserter.instance().close();
$("question_errors").innerHTML="";
if(data["limitReached"]){
$("tabcontent_feed_top_1").innerHTML="<h2>You have reached your daily limit for asking questions.</h2>";
}else{
var _c59=new fx.Height("question_wrapper",{duration:800,toHeight:31,onComplete:function(){
category.startOver();
$("categorySearchResults").innerHTML="";
Form.reset($("question_form"));
var _c5a=$("question");
_c5a.value="What is your question?";
_c5a.addClassName("dimmed");
_c5a.up("div").removeClassName("expanded");
var _c5b=$("additionalDetails");
_c5b.value="Additional details to your question (optional)";
_c5b.setStyle({height:""});
_c5b.addClassName("dimmed");
_c5b.up("div").removeClassName("expanded");
$("q_numcharsvalue").innerHTML=100;
$("ad_numcharsvalue").innerHTML=600;
$("requestSuggestions").hide();
$("confirmquestion").hide();
$("requestSuggestionsButton").show();
$("question_details").hide();
selectTab("categoryTabs",1,2);
subFlg=false;
$("question_wrapper").setStyle({height:"auto"});
$$("#question_details input[type=checkbox]")[0].checked=false;
$$("#question_details .photo_preview")[0].innerHTML="";
$$("#question_details input[name=imageId]")[0].value=0;
}});
_c59.toggle();
}
},forumShrink:function(){
photoGalleryInserter.instance().close();
var _c5c=new fx.Height("forum_wrapper",{duration:600,toHeight:22,onComplete:function(){
$("forum_msg").innerHTML="";
$("forum_details").hide();
var _c5d=$("subject");
var _c5e=$("message");
_c5d.addClassName("dimmed");
_c5d.value="What is the subject of your forum post?";
_c5d.up("div").removeClassName("expanded");
_c5e.addClassName("dimmed");
_c5e.value="Type your message";
_c5e.setStyle({height:""});
_c5e.up("div").removeClassName("expanded");
feed_forum_selector.chooseForum(0);
$("forum_wrapper").setStyle({height:"auto"});
$$("#forum_details input[type=checkbox]")[0].checked=false;
$$("#forum_details .photo_preview")[0].innerHTML="";
$$("#forum_details input[name=imageId]")[0].value=0;
}});
_c5c.toggle();
},forumCallback:function(req){
var data=JSONstring.toObject(req.responseText);
if(data["valid"]){
fm.addStoryToTop(data["render"],data["id"],this.forumShrink.bind(this));
}else{
if(data["msg"]){
$("forum_msg").innerHTML=data["msg"];
}
}
},statusCallback:function(req){
var data=JSONstring.toObject(req.responseText);
fm.addStoryToTop(data["render"],data["id"],this.shrinkStatus.bind(this));
},questionCallback:function(req){
var data=JSONstring.toObject(req.responseText);
this.addStoryToTop(data["render"],data["id"],this.shrinkQuestion.bind(this,data));
},moreFeed:function(_c65){
new Ajax.Request("/xml/feedmore.php",{parameters:$H({b:this.originalUpdateTime,startpos:_c65,typeId:this.typeId,categoryId:this.categoryId,starred:this.starred,sa:this.standalone?1:0,mobile:this.mobile}).toQueryString(),onComplete:function(req){
var _c67=JSONstring.toObject(req.responseText);
var _c68=$("show_more");
_c68.style.display="none";
_c68.id="";
var _c69=$(document.createElement("div"));
$("feed_box").appendChild(_c69);
_c69.innerHTML=_c67["render"];
var _c6a=$("feed_more_"+_c65);
$$("#feed_more_"+_c65+" script").each(function(_c6b){
safeScriptEval(_c6b);
});
this.addItems(_c67["feed"]);
}.bind(this)});
return false;
},updateHiddenLink:function(){
if(this.hiddenCount==1){
$("show_hidden").innerHTML="show 1 hidden story";
}else{
if(this.hiddenCount>0){
$("show_hidden").innerHTML="show "+this.hiddenCount+" hidden stories";
}else{
$("show_hidden").innerHTML="";
}
}
},getById:function(id){
return this.feedItems[id];
},stopReporting:function(){
if(this.reportingFeedStoryId){
this.getById(this.reportingFeedStoryId).stopObservePostReporting();
this.reportingFeedStoryId=0;
}
},unhideAll:function(){
this.feedItemCollection.each(function(fi){
fi.unhide();
});
this.updateHiddenLink();
return false;
},unhideUser:function(_c6e){
new Ajax.Request("/xml/feedhide.php",{parameters:$H({u:_c6e,del:1}).toQueryString(),onComplete:function(){
$$(".u"+_c6e).each(function(elt){
if(elt.id){
var fid=elt.id.substring(elt.id.indexOf("_")+1);
var _c71=this.getById(fid);
if(_c71){
_c71.unhide(true);
}
}
}.bind(this));
var hu=$("hu_"+_c6e);
if(hu){
if(hu.siblings().size()==0){
var _c73=$("hidden_people");
if(!($("hidden_topics"))){
var p=$(document.createElement("p"));
p.innerHTML="All people and topics are visible.";
_c73.parentNode.insertBefore(p,_c73);
}
_c73.remove();
}else{
hc.remove();
}
}
this.updateHiddenLink();
}.bind(this)});
return false;
},unhideCategory:function(_c75){
new Ajax.Request("/xml/feedhide.php",{parameters:$H({c:_c75,del:1}).toQueryString(),onComplete:function(){
$$(".c"+_c75).each(function(elt){
if(elt.id){
var fid=elt.id.substring(elt.id.indexOf("_")+1);
var _c78=this.getById(fid);
if(_c78){
_c78.unhide(true);
}
}
}.bind(this));
var hc=$("hc_"+_c75);
if(hc){
if(hc.siblings().size()==0){
var _c7a=$("hidden_topics");
if(!($("hidden_people"))){
var p=$(document.createElement("p"));
p.innerHTML="All people and topics are visible.";
_c7a.parentNode.insertBefore(p,_c7a);
}
_c7a.remove();
}else{
hc.remove();
}
}
this.updateHiddenLink();
}.bind(this)});
return false;
},toggleEditHidden:function(){
var val=$("edit_hidden").innerHTML;
if(val=="done editing"){
$("edit_hidden").innerHTML="edit";
$("hidden_list").hide();
}else{
$("edit_hidden").innerHTML="done editing";
if($("hidden_list").innerHTML==""){
this.updateHiddenList(true);
}else{
$("hidden_list").show();
}
}
return false;
},updateHiddenList:function(show){
new Ajax.Updater("hidden_list","/xml/feedhide.php",{parameters:"list=1",onComplete:function(){
if(show){
$("hidden_list").show();
}
}});
},closeOverlay:function(){
this.stopReporting();
toggleOverlay("overlay");
var _c7e=$("overlay");
_c7e.classNames().each(function(name){
if(name!="overlay"){
_c7e.removeClassName(name);
}
});
$("overlay_content").innerHTML="<div class=\"spinner\"></div>";
$("overlay").setStyle({paddingTop:"0"});
return false;
},openOverlay:function(_c80){
if(_c80){
$("overlay").addClassName(_c80);
}
adjustOverlayHeight();
toggleOverlay("overlay");
},showHelpOverlay:function(url){
this.openOverlay("help");
new Ajax.Updater("overlay_content","/xml/staticpage.php?url="+url);
return false;
},showQuestionOverlay:function(id){
this.openOverlay("hubpage");
new Ajax.Updater("overlay_content","/xml/answersrender.php?id="+id,{onComplete:function(){
var _c83=$("fixed_title").getHeight();
if(browser!="IE"||version>6){
$("overlay").setStyle({paddingTop:_c83+"px"});
}
adjustOverlayHeight();
}.bind(this)});
return false;
},showFlagRequestOverlay:function(id){
this.openOverlay("flagrequest");
new Ajax.Updater("overlay_content","/xml/flagrequest.php?r="+id,{evalScripts:true,onComplete:function(){
var _c85=$("fixed_title").getHeight();
if(browser!="IE"||version>6){
$("overlay").setStyle({paddingTop:_c85+"px"});
}
adjustOverlayHeight();
}.bind(this)});
return false;
},showFlagHubOverlay:function(id){
this.openOverlay("flaghub");
new Ajax.Updater("overlay_content","/xml/flaghub.php?a="+id,{evalScripts:true,onComplete:function(req){
var _c88=$("fixed_title").getHeight();
if(browser!="IE"||version>6){
$("overlay").setStyle({paddingTop:_c88+"px"});
}
adjustOverlayHeight();
}.bind(this)});
return false;
},showHubOverlay:function(url){
this.openOverlay("hubpage");
new Ajax.Request("/xml/articlerender.php?url="+url,{onComplete:function(req){
var _c8b=0;
$("overlay_content").innerHTML=req.responseText;
var _c8c=$("fixed_title").getHeight();
if(browser!="IE"||version>6){
$("overlay").setStyle({paddingTop:_c8c+"px"});
}
adjustOverlayHeight();
$$("#overlay_content script").each(function(_c8d){
var code=_c8d.innerHTML;
eval(code);
});
}.bind(this)});
return false;
},reportPost:function(_c8f){
this.openOverlay("postreport");
new Ajax.Updater("overlay_content","/xml/reportpostrender.php?p="+_c8f,{evalScripts:true});
return false;
},reportPostCallback:function(){
$("overlay_content").innerHTML="<h2>The post has been flagged. Thanks for your input!</h2>";
},deleteCategory:function(_c90,_c91){
var sure=confirm("Are you sure that you want to delete "+_c91+"?");
if(!sure){
return false;
}
var ajax=new Ajax.Request("/xml/categoryFanBulkJoin.php",{parameters:$H({checked_ids:"",unchecked_ids:_c90,html_target:"feed_category_fans"}).toQueryString(),onSuccess:function(){
$("category_filter_"+_c90).remove();
}});
return false;
},updateFeedTypeFilters:function(){
var _c94=$A(["hubs","comments","posts","questions","answers","fans","milestones"]);
_c94.each(function(type){
var _c96=false;
$$("#type_filters li."+type+" input.ht_box").each(function(_c97){
if(_c97.checked){
_c96=true;
throw $break;
}
});
var li=$("type_filters").down("li."+type);
if(li){
if(_c96){
li.removeClassName("inactive");
}else{
li.addClassName("inactive");
li.hide();
}
}
});
},toggleFeedPrefs:function(){
var _c99=$("edit_button");
var _c9a=$("filter").value;
var _c9b="edit";
if(_c99.innerHTML=="save"){
_c9b="save";
}
if(_c9b=="save"){
this.updateFeedTypeFilters();
var _c9c=0;
var _c9d=document.getElementsByClassName("ht_box");
for(var j=0;j<_c9d.length;j++){
if(_c9d[j].checked){
_c9c+=Number(_c9d[j].name.substr(3));
}
}
var _c9f=$("current_prefs");
if(_c9c!=_c9f.value){
var ajax=new Ajax.Request("/xml/activityPref.php",{parameters:$H({prefs:_c9c,filter:_c9a,feed:1}).toQueryString(),onComplete:function(){
Element.update(_c99,"edit");
var pf=$("preference_feedback");
pf.update("<span class=\"changes_saved\">Saved</span>. Changes take effect going forward. <a href=\"#\" id=\"preference_change_hide\" onclick=\"$('preference_feedback').hide(); return false;\">hide</a>");
pf.setStyle({height:""});
pf.show();
var _ca2=parseInt(pf.getStyle("height"));
var _ca3=new fx.Height("preference_feedback",{duration:600});
_ca3.hide();
_ca3.custom(0,_ca2);
}});
_c9f.value=_c9c;
}else{
Element.update(_c99,"edit");
var pf=$("preference_feedback");
pf.update("No changes were made. <a href=\"#\" id=\"preference_change_hide\" onclick=\"$('preference_feedback').hide(); return false;\">hide</a>");
pf.setStyle({height:""});
pf.show();
var _ca5=parseInt(pf.getStyle("height"));
var _ca6=new fx.Height("preference_feedback",{duration:600});
_ca6.hide();
_ca6.custom(0,_ca5);
}
}
var curs=document.getElementsByClassName("ht_cur");
var _ca8="";
for(var i=0;i<curs.length;i++){
_ca8=curs[i].className;
}
var eles=document.getElementsByClassName("ht_pref");
for(var i=0;i<eles.length;i++){
if(_c9b=="edit"){
if(_ca8=="ht_all ht_cur"){
eles[i].style.display="block";
}else{
if(eles[i].parentNode.className==_ca8){
eles[i].style.display="block";
}
}
}else{
eles[i].style.display="none";
}
}
if(_c9b=="edit"){
_c99.innerHTML="save";
$("preference_feedback").hide();
$$("#type_filters li.inactive").each(function(elt){
elt.show();
});
}
return false;
}};
var FeedItemManager=Class.create();
FeedItemManager.prototype={initialize:function(id,fid,_cae,_caf,_cb0,_cb1){
this.id=id;
this.feedItemId=fid;
this.cdate=_cae;
this.hidden=_caf;
this.liked=_cb0;
this.manager=_cb1;
this.menuVisible=0;
this.mobile=navigator.userAgent.toLowerCase().indexOf("mobile")>-1;
this.mouseoverHandlers=new Array();
this.mouseoutHandlers=new Array();
this.clickHandlers=new Array();
this.prefix="story_";
this.htmlId=this.prefix+this.id;
this.triggerId="menu_trigger_"+this.id;
this.hideId="menu_"+this.id;
this.mainId="hide_menu_"+this.id;
this.messageId="message_"+this.id;
this.hideMessageId="hide_message_"+this.id;
this.likeId="feed_like_"+this.id;
},unhide:function(_cb2){
if(!$(this.htmlId).hasClassName("hidden")){
return;
}
$(this.htmlId).removeClassName("hidden");
this.manager.hiddenCount--;
if(_cb2){
this.hidden=0;
this.hideMenuObserve();
}
},hideMenuObserve:function(){
if(!this.mobile){
Event.observe(this.htmlId,"mouseover",this.showHideMenu.bindAsEventListener(this));
Event.observe(this.htmlId,"mouseout",this.hideHideMenu.bindAsEventListener(this));
Event.observe(this.triggerId,"mouseover",function(){
$(this.hideId).show();
}.bind(this));
Event.observe(this.triggerId,"mouseout",function(){
$(this.hideId).hide();
}.bind(this));
}
$(this.hideId).immediateDescendants().each(function(elt){
elt=$(elt);
var _cb4=elt.immediateDescendants().detect(function(c){
return c.tagName=="UL";
});
if(_cb4){
elt.observe("mouseover",function(_cb6){
_cb6.show();
}.bind(this,_cb4));
elt.observe("mouseout",function(_cb7){
_cb7.hide();
}.bind(this,_cb4));
}
});
$(this.hideId).descendants().each(function(elt){
elt=$(elt);
if(elt.tagName=="LI"){
elt.observe("mouseover",function(){
if(!elt.hasClassName("active")){
elt.addClassName("active");
}
});
elt.observe("mouseout",function(){
if(elt.hasClassName("active")){
elt.removeClassName("active");
}
});
}
});
},showHideMenu:function(e){
if(!this.hidden&&!this.menuVisible){
this.menuVisible=1;
$(this.mainId).show();
}
},hideHideMenu:function(e){
if(this.menuVisible){
this.menuVisible=0;
$(this.mainId).hide();
}
},showLikedBy:function(){
new Ajax.Updater(this.likeId,"/xml/feedlikes.php",{parameters:$H({id:this.feedItemId}).toQueryString()});
return false;
},updateLikedCount:function(){
var _cbb="";
if(this.liked==0){
_cbb="No one likes this yet";
}else{
if(this.liked==1){
var link=$(document.createElement("a"));
link.href="#";
link.innerHTML="1 person";
likeBox=$(this.likeId);
likeBox.innerHTML="";
likeBox.appendChild(link);
likeBox.appendChild(document.createTextNode(" likes this"));
link.observe("click",this.showLikedBy.bind(this));
}else{
var link=$(document.createElement("a"));
link.href="#";
link.innerHTML=this.liked+" people";
likeBox=$(this.likeId);
likeBox.innerHTML="";
likeBox.appendChild(link);
likeBox.appendChild(document.createTextNode(" like this"));
link.observe("click",this.showLikedBy.bind(this));
}
}
},share:function(){
check_signed_in_ajax(this.doShare.bind(this));
return false;
},doShare:function(_cbd,_cbe){
if(_cbd){
new Ajax.Updater("share_"+this.id,"/xml/feedshare.php",{parameters:$H({id:this.feedItemId,d:this.cdate}).toQueryString(),onComplete:function(){
$(this.messageId).innerHTML="This story has been shared with your followers.";
}.bind(this)});
if(_cbe){
toggleOverlay("feedSignUp");
}
}else{
suFH.onSuccess=this.doShare.bind(this,true,true);
siFH.onSuccess=this.doShare.bind(this,true,true);
fetchRecaptcha("feedCaptcha");
toggleOverlay("feedSignUp");
}
},like:function(){
check_signed_in_ajax(this.doLike.bind(this));
return false;
},doLike:function(_cbf,_cc0){
if(_cbf){
new Ajax.Updater(this.likeId,"/xml/feedlike.php",{parameters:$H({id:this.feedItemId,uid:this.id,d:this.cdate}).toQueryString(),onComplete:function(){
$("like_"+this.id).innerHTML="liked";
}.bind(this)});
if(_cc0){
toggleOverlay("feedSignUp");
}
}else{
suFH.onSuccess=this.doLike.bind(this,true,true);
siFH.onSuccess=this.doLike.bind(this,true,true);
fetchRecaptcha("feedCaptcha");
toggleOverlay("feedSignUp");
}
},star:function(){
check_signed_in_ajax(this.doStar.bind(this));
return false;
},doStar:function(_cc1,_cc2){
if(_cc1){
new Ajax.Updater("star_"+this.id,"/xml/feedstar.php",{parameters:$H({id:this.feedItemId,star:1,d:this.cdate}).toQueryString(),onComplete:function(){
$(this.messageId).innerHTML="This story has been starred.";
}.bind(this)});
if(_cc2){
toggleOverlay("feedSignUp");
}
}else{
suFH.onSuccess=this.doStar.bind(this,true,true);
siFH.onSuccess=this.doStar.bind(this,true,true);
fetchRecaptcha("feedCaptcha");
toggleOverlay("feedSignUp");
}
},unstar:function(){
check_signed_in_ajax(this.doUnstar.bind(this));
return false;
},doUnstar:function(_cc3,_cc4){
if(_cc3){
new Ajax.Updater("star_"+this.id,"/xml/feedstar.php",{parameters:$H({id:this.feedItemId,star:0,d:this.cdate}).toQueryString(),onComplete:function(){
$(this.messageId).innerHTML="This story has been unstarred.";
}.bind(this)});
if(_cc4){
toggleOverlay("feedSignUp");
}
}else{
suFH.onSuccess=this.doUnstar.bind(this,true,true);
siFH.onSuccess=this.doUnstar.bind(this,true,true);
fetchRecaptcha("feedCaptcha");
toggleOverlay("feedSignUp");
}
},hide:function(){
this.manager.hiddenCount++;
this.hidden=1;
$(this.htmlId).addClassName("hidden");
},hideStory:function(){
new Ajax.Request("/xml/feedhide.php",{parameters:$H({id:this.feedItemId}).toQueryString(),onComplete:function(){
var hmsg=$(this.hideMessageId);
if(!hmsg){
var hmsg=$(document.createElement("div"));
hmsg.id=this.hideMessageId;
hmsg.addClassName("hide_notice");
var _cc6=$(this.htmlId);
_cc6.parentNode.insertBefore(hmsg,_cc6);
}
hmsg.innerHTML="Story hidden";
this.hide();
this.manager.updateHiddenLink();
}.bind(this)});
return false;
},removeHideMessage:function(){
$(this.hideMessageId).remove();
return false;
},hideUser:function(_cc7,_cc8){
_cc8=_cc8?1:0;
new Ajax.Request("/xml/feedhide.php",{parameters:$H({id:this.id,userId:_cc7,force:_cc8}).toQueryString(),onComplete:function(req){
var data=JSONstring.toObject(req.responseText);
var hmsg=$(this.hideMessageId);
if(!hmsg){
var hmsg=$(document.createElement("div"));
hmsg.id=this.hideMessageId;
hmsg.addClassName("hide_notice");
var _ccc=$(this.htmlId);
_ccc.parentNode.insertBefore(hmsg,_ccc);
}
hmsg.innerHTML=data["msgHtml"];
if(data["success"]){
$$(".u"+_cc7).each(function(elt){
eltId=elt.id.substring(this.prefix.length);
this.manager.getById(eltId).hide();
}.bind(this));
this.manager.updateHiddenLink();
this.manager.updateHiddenList();
}
}.bind(this)});
return false;
},hideCategory:function(_cce,_ccf){
_ccf=_ccf?1:0;
new Ajax.Request("/xml/feedhide.php",{parameters:$H({id:this.id,force:_ccf,categoryId:_cce}).toQueryString(),onComplete:function(req){
var data=JSONstring.toObject(req.responseText);
var hmsg=$(this.hideMessageId);
if(!hmsg){
var hmsg=$(document.createElement("div"));
hmsg.id=this.hideMessageId;
hmsg.addClassName("hide_notice");
var _cd3=$(this.htmlId);
_cd3.parentNode.insertBefore(hmsg,_cd3);
}
hmsg.innerHTML=data["msgHtml"];
if(data["success"]){
$$(".c"+_cce).each(function(elt){
eltId=elt.id.substring(this.prefix.length);
this.manager.getById(eltId).hide();
}.bind(this));
this.manager.updateHiddenLink();
this.manager.updateHiddenList();
}
if(data["ids"]){
$A(data["ids"]).each(function(id){
if($("category_filter_"+id)){
$("category_filter_"+id).remove();
}
});
}
}.bind(this)});
return false;
},hidePreviousPosts:function(){
var _cd6=$("feed_posts_"+this.id).immediateDescendants();
var _cd7=_cd6.size();
_cd6.each(function(elt,_cd9){
if(_cd9==_cd7-1){
elt.show();
}else{
elt.remove();
}
}.bind(this));
return false;
},hidePreviousComments:function(){
var _cda=$("feed_comments_"+this.id).immediateDescendants();
var _cdb=_cda.size();
var _cdc=0;
_cda.each(function(elt,_cde){
if(elt.hasClassName("show_previous")){
_cdc=_cde;
}
});
_cda.each(function(elt,_ce0){
if(_ce0==_cdc){
elt.show();
throw $break;
}else{
elt.remove();
}
}.bind(this));
return false;
},seePreviousPosts:function(_ce1,num,_ce3){
new Ajax.Request("/xml/moreposts.php",{parameters:$H({uid:this.id,t:_ce1,num:num,startpos:_ce3}).toQueryString(),onComplete:function(req){
var _ce5=$("feed_posts_"+this.id);
_ce5.down("div").hide();
new Insertion.Top(_ce5,req.responseText);
}.bind(this)});
return false;
},seePreviousFeedComments:function(num,_ce7){
new Ajax.Request("/xml/morefeedcomments.php",{parameters:$H({fid:this.feedItemId,id:this.id,num:num,startpos:_ce7}).toQueryString(),onComplete:function(req){
var _ce9=$("feed_comments_"+this.id);
_ce9.down("div").hide();
new Insertion.Top(_ce9,req.responseText);
}.bind(this)});
return false;
},seePreviousComments:function(_cea,num,_cec){
new Ajax.Request("/xml/morecomments.php",{parameters:$H({uid:this.id,mdcId:_cea,num:num,startpos:_cec}).toQueryString(),onComplete:function(req){
var _cee=$("feed_comments_"+this.id);
_cee.down("div").hide();
new Insertion.Top(_cee,req.responseText);
}.bind(this)});
return false;
},commentCallback:function(req){
data=JSONstring.toObject(req.responseText);
var _cf0=$("feed_comments_"+this.id);
_cf0.innerHTML+=data["render"];
$("comment_"+this.id).value="Write a comment...";
$("comment_"+this.id).addClassName("dimmed");
},answerCallback:function(req,_cf2){
var data=JSONstring.toObject(req.responseText);
if(data["valid"]){
$("server_error_"+this.id).innerHTML="";
$("answer_interact_"+this.id).innerHTML=data["msg"];
if(_cf2){
var c=Math.max(0,data["c"]-1);
$("answers_"+this.id).innerHTML=c+" other answer"+(c==1?"":"s");
}else{
$("answers_"+this.id).innerHTML=data["c"]+" answer"+(data["c"]==1?"":"s");
}
}else{
$("server_error_"+this.id).innerHTML="<span class=\"alert\">"+data["msg"]+"</span>";
}
},postCallback:function(req){
var data=JSONstring.toObject(req.responseText);
if(data["valid"]){
$("server_error_"+this.id).innerHTML="";
$("post_"+this.id).value="Write a reply...";
$("post_"+this.id).addClassName("dimmed");
$("new_posts_"+this.id).innerHTML+=data["render"];
}else{
$("server_error_"+this.id).innerHTML="<span class=\"alert\">"+data["msg"]+"</span>";
}
},activatePost:function(elt){
elt.addClassName("feed_post_active");
},deactivatePost:function(elt){
elt.removeClassName("feed_post_active");
},observePostReporting:function(){
this.manager.stopReporting();
this.manager.reportingFeedStoryId=this.id;
var _cf9=$$("#story_"+this.id+" .feed_post");
if(_cf9.size()>1){
_cf9.each(function(elt){
var _cfb=this.postIdFromDivId(elt.id);
elt.setStyle({cursor:"pointer"});
var _cfc=this.activatePost.bind(this,elt);
this.mouseoverHandlers[_cfb]=_cfc;
elt.observe("mouseover",_cfc);
var _cfd=this.deactivatePost.bind(this,elt);
this.mouseoutHandlers[_cfb]=_cfd;
elt.observe("mouseout",_cfd);
var _cfe=this.manager.reportPost.bind(this.manager,_cfb);
this.clickHandlers[_cfb]=_cfe;
elt.observe("click",_cfe);
}.bind(this));
var msg=$(document.createElement("p"));
msg.appendChild(document.createTextNode("Click on the post that you want to report or "));
var _d00=$(document.createElement("a"));
_d00.innerHTML="cancel report";
_d00.href="#";
msg.appendChild(_d00);
var _d01=$(this.messageId);
_d01.innerHTML="";
_d01.appendChild(msg);
_d01.addClassName("report_instructions");
var _d02=parseInt(_d01.getStyle("height"));
var _d03=new fx.Height(this.messageId,{duration:500});
_d03.hide();
_d03.custom(0,_d02);
_d00.observe("click",this.stopObservePostReporting.bind(this));
}else{
if(_cf9.size()==1){
var post=_cf9.detect(function(elt){
return true;
});
var _d06=post.id;
this.manager.reportPost(this.postIdFromDivId(_d06));
}
}
return false;
},postIdFromDivId:function(_d07){
return _d07.substring(_d07.lastIndexOf("_")+1);
},stopObservePostReporting:function(_d08){
var _d09=$$("#story_"+this.id+" .feed_post");
if(_d09.size()>1){
_d09.each(function(elt){
elt.setStyle({cursor:"auto"});
this.deactivatePost(elt);
var _d0b=this.postIdFromDivId(elt.id);
elt.stopObserving("mouseover",this.mouseoverHandlers[_d0b]);
elt.stopObserving("mouseout",this.mouseoutHandlers[_d0b]);
elt.stopObserving("click",this.clickHandlers[_d0b]);
}.bind(this));
}
$(this.messageId).innerHTML="";
$(this.messageId).removeClassName("report_instructions");
$(this.messageId).setStyle({height:""});
if(_d08){
Event.stop(_d08);
}
}};
var mm;
function mapsManager(){
this.maps=[];
};
mapsManager.prototype.addMap=function(id,map){
this.maps[id]=map;
map.id=id;
};
mapsManager.prototype.getMapById=function(id){
return this.maps[id];
};
function markerMap(m,_d10,tmId,usId){
this.map=m;
this.markers=[];
this.infowindow=new google.maps.InfoWindow();
this.polyline=new google.maps.Polyline({clickable:false,strokeColor:"#0000ff",strokeWeight:5,strokeOpacity:0.7});
this.polyline.setMap(m);
this.directionsResult=null;
this.legend=$(_d10);
this.travelModeId=tmId;
this.unitSystemId=usId;
this.id=null;
};
markerMap.prototype.addMarker=function(_d13,_d14){
this.markers.push(new infoMarker(this,_d13,_d14,this.markers.length));
};
markerMap.prototype.removeAllMarkers=function(){
for(var i=0;i<this.markers.length;i++){
this.markers[i].marker.setMap(null);
}
this.markers=[];
};
function infoMarker(_d16,_d17,_d18,_d19){
this.markermap=_d16;
this.marker=_d17;
this.content=_d18;
this.position=_d19;
this.open=false;
google.maps.event.addListener(this.marker,"click",function(){
this.markermap.infowindow.setContent(this.content);
this.markermap.infowindow.open(this.markermap.map,this.marker);
this.open=true;
google.maps.event.addListenerOnce(this.markermap.infowindow,"closeclick",function(){
this.open=false;
unhighlightMarker(this);
}.bind(this));
highlightMarker(this);
}.bind(this));
google.maps.event.addListener(this.marker,"mouseover",function(){
highlightMarker(this);
}.bind(this));
google.maps.event.addListener(this.marker,"mouseout",function(){
if(!this.open){
unhighlightMarker(this);
}
}.bind(this));
};
markerMap.prototype.hideDirections=function(){
var i=0;
while(true){
var _d1b=$(this.legend.id+"_"+i);
if(_d1b){
_d1b.innerHTML="";
}else{
break;
}
i++;
}
$(this.legend.id+"_copyright").innerHTML="";
$(this.legend.id+"_warnings").innerHTML="";
this.polyline.setMap(null);
};
markerMap.prototype.renderDirections=function(){
if(this.directionsResult.routes[0].overview_path.length==0){
this.polyline.setMap(null);
}else{
if(!this.polyline.getMap()){
this.polyline.setMap(this.map);
}
this.polyline.setPath(this.directionsResult.routes[0].overview_path);
}
var _d1c=this.directionsResult.routes[0];
var legs=_d1c.legs;
for(var i=0;i<legs.length;i++){
var leg=legs[i];
var html="<div>"+leg.distance.text+" - about "+leg.duration.text+" of "+$F(this.travelModeId).toLowerCase()+"</div><table><tbody>";
if(leg.steps.length>100){
html+="<p>We're sorry, but the directions for this step are too long to display.</p>";
}else{
for(var j=0;j<leg.steps.length;j++){
var step=leg.steps[j];
html+="<tr><td>"+(j+1)+".</td><td>"+step.instructions+"</td><td>"+step.distance.text+"</td></tr>";
}
html+="</tbody></table>";
}
$(this.legend.id+"_"+i).innerHTML=html;
}
while(true){
var _d23=$(this.legend.id+"_"+i);
if(_d23){
_d23.innerHTML="";
}else{
break;
}
i++;
}
$(this.legend.id+"_copyright").innerHTML=_d1c.copyrights;
var _d24="";
for(var j=0;j<_d1c.warnings.length;j++){
_d24+=_d1c.warnings[j]+"<br/>";
}
$(this.legend.id+"_warnings").innerHTML=_d24;
};
markerMap.prototype.fetchDirections=function(){
var _d25=this.markers;
var l=_d25.length;
var _d27=new google.maps.LatLng(_d25[0].marker.getPosition().lat(),_d25[0].marker.getPosition().lng());
var _d28=new google.maps.LatLng(_d25[l-1].marker.getPosition().lat(),_d25[l-1].marker.getPosition().lng());
var _d29=[];
for(var i=1;i<l-1;i++){
_d29.push({location:new google.maps.LatLng(_d25[i].marker.getPosition().lat(),_d25[i].marker.getPosition().lng()),stopover:true});
}
var _d2b={origin:_d27,destination:_d28,waypoints:_d29,travelMode:google.maps.DirectionsTravelMode[$F(this.travelModeId)],unitSystem:google.maps.DirectionsUnitSystem[$F(this.unitSystemId)]};
var _d2c=new google.maps.DirectionsService();
_d2c.route(_d2b,function(_d2d,_d2e){
if(_d2e==google.maps.DirectionsStatus.OK&&this.markers.length==l){
this.directionsResult=_d2d;
this.renderDirections();
}
}.bind(this));
};
jQuery(function(){
mm=new mapsManager();
});
function renderMapFromData(id,data,_d31){
var _d32="map_canvas_"+id;
var _d33=mm.getMapById(id);
if(!_d33){
var map=new google.maps.Map(document.getElementById(_d32));
var _d33=new markerMap(map,"map_legend_"+id,"travel_mode_"+id,"unit_system_"+id);
mm.addMap(id,_d33);
sv=true;
}else{
var map=_d33.map;
sv=false;
}
map.setOptions({zoom:data.zoom,center:new google.maps.LatLng(data.lat,data.lng),mapTypeId:google.maps.MapTypeId[data.mapType],streetViewControl:sv,scrollwheel:false});
_d33.removeAllMarkers();
var _d35="";
for(var i=0;i<data.markers.length;i++){
var m=data.markers[i];
var _d38=mapLetterFromPosition(i);
var icon="http://www.google.com/mapfiles/marker_green"+_d38+".png";
var _d3a="<div class=\"infowindow_content\"><strong>"+m.name+"</strong><br/><small>"+m.address+"</small><p>"+m.description+"</p>";
var _d3b=new google.maps.Marker({position:new google.maps.LatLng(m.lat,m.lng),map:map,title:m.name,icon:icon});
_d33.addMarker(_d3b,_d3a);
if(data.hubtool){
var dest=(m.address.strip()=="")?m.name:m.address;
_d35+="<div class=\"map_stopover\" onmouseover=\"highlightMapMarker(event, "+id+", "+i+");\" onmouseout=\"unhighlightMapMarker(event, "+id+", "+i+");\">"+"<img src=\""+icon+"\" id=\"stopover_icon_"+id+"_"+i+"\"/>"+"<strong>"+m.name+"</strong> - "+"<small>"+m.address+" "+"<a href=\"http://maps.google.com/maps?f=d&z="+data.zoom+"&q="+encodeURI(dest)+"@"+m.lat+","+m.lng+"\">[get directions]</a>"+"</small>"+"<p>"+m.description+"</p>"+"</div>"+"<div id=\""+_d33.legend.id+"_"+i+"\"></div>";
}
}
if(data.hubtool){
_d35+="<div id=\""+_d33.legend.id+"_warnings\" class=\"map_warnings\"></div>";
_d35+="<div id=\""+_d33.legend.id+"_copyright\" class=\"map_copyright\"></div>";
_d33.legend.innerHTML=_d35;
if(data.markers.length>=2){
$("map_route_"+id).show();
}else{
$("map_route_"+id).hide();
}
if(data.markers.length>=2&&$("route_options_"+id).visible()){
if(_d31||!_d33.directionsResult){
_d33.fetchDirections();
}else{
_d33.renderDirections();
}
}else{
var _d3d={status:"OK",routes:[{legs:[],overview_path:[],copyrights:"",warnings:[]}]};
_d33.directionsResult=_d3d;
_d33.renderDirections();
}
}
};
function showRouteAndDirections(id){
mm.getMapById(id).fetchDirections();
};
function hideRouteAndDirections(id){
mm.getMapById(id).hideDirections();
};
function highlightMarker(_d40){
var id=_d40.markermap.id;
if(!id){
return;
}
var _d42=mapLetterFromPosition(_d40.position);
var icon="http://www.google.com/mapfiles/marker_yellow"+_d42+".png";
_d40.marker.setIcon(icon);
var img=$("stopover_icon_"+id+"_"+_d40.position);
if(img){
img.src=icon;
}
};
function unhighlightMarker(_d45){
var id=_d45.markermap.id;
if(!id){
return;
}
var _d47=mapLetterFromPosition(_d45.position);
var icon="http://www.google.com/mapfiles/marker_green"+_d47+".png";
_d45.marker.setIcon(icon);
var img=$("stopover_icon_"+id+"_"+_d45.position);
if(img){
img.src=icon;
}
};
function mapLetterFromPosition(pos){
return String.fromCharCode(65+pos);
};
function highlightMapMarker(_d4b,id,_d4d){
var _d4e=mm.getMapById(id);
if(_d4d<_d4e.markers.length){
highlightMarker(_d4e.markers[_d4d]);
}
};
function unhighlightMapMarker(_d4f,id,_d51){
var _d52=mm.getMapById(id);
if(_d51<_d52.markers.length){
unhighlightMarker(_d52.markers[_d51]);
}
};
var lastEditedMessageEle=null;
function setCookie(_d53,_d54,_d55){
var _d56=new Date();
_d56.setDate(_d56.getDate()+_d55);
document.cookie=_d53+"="+escape(_d54)+((_d55==null)?"":";expires="+_d56.toUTCString());
};
function getCookie(_d57){
if(document.cookie.length>0){
var _d58=document.cookie.indexOf(_d57+"=");
if(_d58!=-1){
_d58=_d58+_d57.length+1;
var _d59=document.cookie.indexOf(";",_d58);
if(_d59==-1){
_d59=document.cookie.length;
}
return unescape(document.cookie.substring(_d58,_d59));
}
}
return "";
};
function attach_forum_topic_events(){
jQuery("div.posts a.reply").live("click",function(){
jQuery("#report_box").hide();
jQuery(".actionmenu a").removeClass("selected");
jQuery(this).addClass("selected");
var post=jQuery(this).closest("li.threaded");
post.append("<img class=\"wait\" src=\"/i/spnr.gif\" />");
check_signed_in_ajax(processReplyStart,{"ele":this});
return false;
});
jQuery("div.posts a.delete").live("click",function(){
if(confirm("Are you sure you want to delete this post?")){
var post=jQuery(this).closest("li.threaded");
post.append("<img class=\"wait\" src=\"/i/spnr.gif\" />");
jQuery(this).closest("li.threaded").load("/xml/forum/delete_inline.php",{postId:post.attr("id").substring(4)},processDeleteResponse);
}
return false;
});
jQuery("div.posts a.undelete").live("click",function(){
if(confirm("Are you sure you want to undelete this post?")){
var post=jQuery(this).closest("li.threaded");
post.append("<img class=\"wait\" src=\"/i/spnr.gif\" />");
jQuery(this).closest("li.threaded").load("/xml/forum/undelete_inline.php",{postId:post.attr("id").substring(4)},processUndeleteResponse);
}
return false;
});
jQuery("div.posts a.edit").live("click",function(){
jQuery("#report_box").hide();
jQuery(".actionmenu a").removeClass("selected");
jQuery(this).addClass("selected");
var post=jQuery(this).closest("li.threaded");
post.append("<img class=\"wait\" src=\"/i/spnr.gif\" />");
jQuery.ajax({type:"GET",url:"/xml/forum/edit_inline.php",data:{postId:post.attr("id").substring(4)},complete:processStartEditResponse});
return false;
});
jQuery("div.posts a.report").live("click",function(){
jQuery("#editor_box").hide();
jQuery(".actionmenu a").removeClass("selected");
jQuery(this).addClass("selected");
var post=jQuery(this).closest("li.threaded");
post.append("<img class=\"wait\" src=\"/i/spnr.gif\" />");
check_signed_in_ajax(processReportStart,{"ele":this});
return false;
});
jQuery("#editor_box .inline_cancel").click(function(){
jq("#photo_insert_code").hide();
jQuery(".actionmenu a").removeClass("selected");
var _d5f=jQuery("#editor_box");
if(_d5f.hasClass("edit_box")){
jQuery(".message",_d5f.closest(".postright")).show();
}
_d5f.hide();
return false;
});
jq("#editor_box #photo_insert_add").click(function(){
jq(this).hide();
jq("#photo_insert_code").hide();
var pgi=photoGalleryInserter.instance();
pgi.setOnImageSelect(function(id,_d62,_d63){
var ta=jq("#editor_box textarea");
var _d65=ta.val();
if(_d65.length){
ta.val(_d65+"\n\n[img]"+photoGalleryInserter.getImagePreviewURL(id,_d62,_d63)+"[/img]\n\n");
}else{
ta.val("[img]"+photoGalleryInserter.getImagePreviewURL(id,_d62,_d63)+"[/img]\n\n");
}
ta.focus();
});
pgi.setOnClose(function(){
jq("#editor_box #photo_insert_add").show();
});
jq("#editor_box #photo_insert").show();
return false;
});
jQuery("#editor_box .inline_reply").click(function(){
jq("#photo_insert_code").hide();
jQuery("#editor_box form").submit();
jQuery("#editor_box").append("<img class=\"wait\" src=\"/i/spnr.gif\" />");
return false;
});
jQuery("#report_box input[value=Cancel]").click(function(){
jQuery(".actionmenu a").removeClass("selected");
var _d66=jQuery("#report_box");
_d66.hide();
});
jQuery("#report_box input[value=Submit]").click(function(){
if(jQuery("#reportTypeId").val()=="0"){
alert("Please select a reason");
return false;
}
jQuery("#report_box").append("<img class=\"wait\" src=\"/i/spnr.gif\" />");
});
jQuery("div.reply_collapser a").live("click",function(){
var _d67=jQuery(this).closest("div.replies_box_wrapper");
var _d68=jQuery(this).closest("div.reply_collapser");
if(_d68.hasClass("show")){
_d68.addClass("hide").removeClass("show");
jQuery("a",_d68).html("");
jQuery("> .replies_box",_d67).slideDown();
}else{
jQuery("> .replies_box",_d67).slideUp(500,function(){
_d68.addClass("show").removeClass("hide");
jQuery("a",_d68).html(""+jQuery("li.threaded",_d67).length+" replies");
});
}
return false;
});
jQuery("a.toggle").live("click",function(){
if(jQuery(this).hasClass("expanded")){
jQuery(this).removeClass("expanded");
jQuery(this).html("more &rarr;");
}else{
jQuery(this).addClass("expanded");
jQuery(this).html("less &larr;");
}
jQuery("a.more",jQuery(this).closest(".actionmenu")).toggle();
return false;
});
jQuery("#reportTypeId").change(function(){
if(jQuery(this).val()=="5"){
jQuery("#new_category_wrapper").show();
}else{
jQuery("#new_category_wrapper").hide();
}
});
jQuery("li.threaded .in_reply_to a").live("click",function(){
var _d69=jQuery(this);
var _d6a=jQuery("#threaded_reply_to_box");
if(_d69.html()=="hide"){
_d69.html("this");
_d6a.hide();
return false;
}
var _d6b=_d69.attr("class").substr(7);
var _d6c=jQuery("#post"+_d6b+" .username").html();
var html="<p class=\"by\">By "+_d6c+"</p>"+jQuery("#message"+_d6b).html();
var _d6e=_d69.closest("li.threaded");
if(_d6a.length>0){
_d6e.append(_d6a);
}else{
jQuery(_d6e).append("<div id=\"threaded_reply_to_box\"></div>");
_d6a=jQuery("#threaded_reply_to_box");
}
_d6a.html(html);
var pos=_d69.position();
var _d70=_d69.width();
_d6a.css({"left":(pos.left+_d70)+"px","top":pos.top+"px"});
_d6a.show();
_d69.html("hide");
return false;
});
jQuery.each(jQuery("div.reply_collapser.show"),function(){
replies_wrapper=jQuery(this).closest("div.replies_box_wrapper");
jQuery("a",this).html(""+jQuery("li.threaded",replies_wrapper).length+" replies");
});
};
function show_post_reply_box(_d71){
_d71.append(jQuery("#editor_box"));
if(lastEditedMessageEle){
lastEditedMessageEle.show();
}
var _d72=jQuery("#editor_box");
_d72.removeClass("edit_box").addClass("reply_box");
jQuery(".inline_reply",_d72).text("submit");
jQuery("form",_d72).attr("action","/xml/forum/reply_inline.php");
jQuery("form",_d72).ajaxForm({type:"POST",dataType:"json",success:processReplyResponse,error:processReplyError});
if(jQuery("input[name=notifyOnReply]").length==0){
var _d73="checked";
if(getCookie("notifyOnReply")!=""){
_d73=(getCookie("notifyOnReply")=="true")?"checked":"";
}
var _d74=document.getElementById("admincenter");
var _d75="<p><input type=checkbox name=\"notifyOnReply\""+_d73+"> Email me if someone replies to this post</p>";
_d75+=_d74?"<p><input type=\"checkbox\" name=\"highlightReply\"/> Highlight this reply</p>":"";
_d75+="<br/>";
jQuery("textarea",_d72).after(_d75);
}
jQuery("#posterror ul",_d72).html("");
jQuery("#posterror",_d72).hide();
jQuery("textarea",_d72).val("");
jQuery("#postId",_d72).val(_d71.attr("id").substring(4));
_d72.append(jQuery("#formatting_tips"));
_d72.show();
var x=_d72.offset().top-300;
jQuery("html,body").animate({scrollTop:x},500);
};
function show_report_box(_d77){
if(lastEditedMessageEle){
lastEditedMessageEle.show();
}
var _d78=jQuery("#report_box");
jQuery("#reportPostId",_d78).val(_d77.attr("id").substring(4));
jQuery("form",_d78).ajaxForm({type:"POST",dataType:"json",complete:processReportResponse});
jQuery(">.post_highlight > .actionmenu",_d77).append(_d78);
jQuery(">.post_wrap > .actionmenu",_d77).append(_d78);
_d78.show();
var x=_d78.offset().top-300;
jQuery("html,body").animate({scrollTop:x},500);
};
function processReplyStart(_d7a,_d7b){
jQuery("li.threaded img.wait").remove();
var post=jQuery(_d7b["ele"]).closest("li.threaded");
if(!_d7a){
suFH.nextUri="?reply="+post.attr("id");
siFH.nextUri=suFH.nextUri;
fetchRecaptcha("replyCaptcha");
toggleOverlay("replySignUp");
}else{
show_post_reply_box(post);
}
};
function processReplyError(data,_d7e,_d7f){
alert("There may have been an error posting your reply ("+_d7e+").  We recommend copying the content of your reply somewhere for safekeeping, and then refreshing this page to see if your message has been posted. If this problem persists, please contact us at team@hubpages.com.");
};
function processEditedResponseError(data,_d81,_d82){
alert("There may have been an error updating your post ("+_d81+").  We recommend copying the content of your edited reply somewhere for safekeeping, and then refreshing this page to see if your edit has been posted.  If this problem persists, please contact us at team@hubpages.com.");
};
function processReplyResponse(data){
jQuery("li.threaded img.wait").remove();
if(data.errors.length==0){
jQuery(".actionmenu a").removeClass("selected");
jQuery("#editor_box").hide();
var ol=jQuery("#replies_box_"+data.postId+" > ol");
if(ol.length==0){
jQuery("#replies_box_"+data.postId).append("<ol></ol>");
}
jQuery("#replies_box_"+data.postId+" > ol").append(data.replyHtml.unescapeHTML());
replies_wrapper=jQuery("#replies_box_"+data.postId).closest(".replies_box_wrapper");
replies_wrapper.show();
reply_collapser=jQuery("> .reply_collapser",replies_wrapper);
reply_collapser.addClass("hide").removeClass("show");
jQuery("a",reply_collapser).html("");
jQuery("> .replies_box",replies_wrapper).slideDown();
}else{
jQuery("#editor_box #posterror").show();
errors_html="<li>"+data.errors.join("</li><li>")+"</li>";
jQuery("#editor_box #posterror ul").html(errors_html);
}
};
function processStartEditResponse(_d85,_d86){
jQuery("li.threaded img.wait").remove();
if(_d86=="error"){
alert(_d85.responseText);
return;
}
data=eval("("+_d85.responseText+")");
if(lastEditedMessageEle){
lastEditedMessageEle.show();
}
lastEditedMessageEle=jQuery("#message"+data.postId).hide();
var _d87=jQuery("#editor_box");
_d87.removeClass("reply_box").addClass("edit_box");
jQuery(".inline_reply",_d87).text("Save");
jQuery("form",_d87).attr("action","/xml/forum/edit_inline.php");
jQuery("form",_d87).ajaxForm({type:"POST",dataType:"json",success:processEditedResponse,error:processEditedResponseError});
if(jQuery("input[name=notifyOnReply]").length==0){
var _d88="checked";
if(getCookie("notifyOnReply")!=""){
_d88=(getCookie("notifyOnReply")=="true")?"checked":"";
}
var _d89=document.getElementById("admincenter");
var _d8a="<p><input type=checkbox name=\"notifyOnReply\""+_d88+"> Email me if someone replies to this post</p>";
_d8a+=_d89?"<p><input type=\"checkbox\" name=\"highlightReply\"/> Highlight this reply</p>":"";
_d8a+="<br/>";
jQuery("textarea",_d87).after(_d8a);
}
jQuery("input[name=notifyOnReply]").attr("checked",data.notifyOnReply==1);
jQuery("#posterror ul",_d87).html("");
jQuery("#posterror",_d87).hide();
jQuery("#postId",_d87).val(data.postId);
jQuery("textarea",_d87).val(data.message);
jQuery("#post"+data.postId+" > .post_wrap > .postright").append(jQuery("#editor_box"));
jQuery("#post"+data.postId+" > .post_highlight > .postright").append(jQuery("#editor_box"));
_d87.append(jQuery("#formatting_tips"));
_d87.show();
var x=_d87.offset().top-300;
jQuery("html,body").animate({scrollTop:x},500);
};
function processEditedResponse(data){
jQuery("li.threaded img.wait").remove();
if(data.errors.length==0){
jQuery(".actionmenu a").removeClass("selected");
jQuery("#editor_box").hide();
jQuery("#message"+data.postId).html(data.editedHtml.unescapeHTML());
jQuery("#message"+data.postId).show();
document.getElementById("postwrap"+data.postId).className=data.highlight?"post_highlight":"post_wrap";
}else{
jQuery("#editor_box #posterror").show();
errors_html="<li>"+data.errors.join("</li><li>")+"</li>";
jQuery("#editor_box #posterror ul").html(errors_html);
}
};
function processDeleteResponse(_d8d,_d8e,_d8f){
if(_d8e=="error"){
jQuery("li.threaded img.wait").remove();
alert(_d8d);
}
};
function processUndeleteResponse(_d90,_d91,_d92){
if(_d91=="error"){
jQuery("li.threaded img.wait").remove();
alert(_d90);
}
};
function processReportStart(_d93,_d94){
jQuery("li.threaded img.wait").remove();
var post=jQuery(_d94["ele"]).closest("li.threaded");
if(!_d93){
suFH.nextUri="?report="+post.attr("id");
siFH.nextUri=suFH.nextUri;
fetchRecaptcha("replyCaptcha");
toggleOverlay("replySignUp");
}else{
show_report_box(post);
}
};
function processReportResponse(_d96,_d97){
jQuery(".actionmenu a").removeClass("selected");
jQuery("li.threaded img.wait").remove();
var _d98=jQuery("#report_box");
_d98.hide();
alert(_d96.responseText);
};
(function($){
$.extend($.fn,{validate:function(_d9a){
if(!this.length){
_d9a&&_d9a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");
return;
}
var _d9b=$.data(this[0],"validator");
if(_d9b){
return _d9b;
}
_d9b=new $.validator(_d9a,this[0]);
$.data(this[0],"validator",_d9b);
if(_d9b.settings.onsubmit){
this.find("input, button").filter(".cancel").click(function(){
_d9b.cancelSubmit=true;
});
if(_d9b.settings.submitHandler){
this.find("input, button").filter(":submit").click(function(){
_d9b.submitButton=this;
});
}
this.submit(function(_d9c){
if(_d9b.settings.debug){
_d9c.preventDefault();
}
function handle(){
if(_d9b.settings.submitHandler){
if(_d9b.submitButton){
var _d9d=$("<input type='hidden'/>").attr("name",_d9b.submitButton.name).val(_d9b.submitButton.value).appendTo(_d9b.currentForm);
}
_d9b.settings.submitHandler.call(_d9b,_d9b.currentForm);
if(_d9b.submitButton){
_d9d.remove();
}
return false;
}
return true;
};
if(_d9b.cancelSubmit){
_d9b.cancelSubmit=false;
return handle();
}
if(_d9b.form()){
if(_d9b.pendingRequest){
_d9b.formSubmitted=true;
return false;
}
return handle();
}else{
_d9b.focusInvalid();
return false;
}
});
}
return _d9b;
},valid:function(){
if($(this[0]).is("form")){
return this.validate().form();
}else{
var _d9e=true;
var _d9f=$(this[0].form).validate();
this.each(function(){
_d9e&=_d9f.element(this);
});
return _d9e;
}
},removeAttrs:function(_da0){
var _da1={},_da2=this;
$.each(_da0.split(/\s/),function(_da3,_da4){
_da1[_da4]=_da2.attr(_da4);
_da2.removeAttr(_da4);
});
return _da1;
},rules:function(_da5,_da6){
var _da7=this[0];
if(_da5){
var _da8=$.data(_da7.form,"validator").settings;
var _da9=_da8.rules;
var _daa=$.validator.staticRules(_da7);
switch(_da5){
case "add":
$.extend(_daa,$.validator.normalizeRule(_da6));
_da9[_da7.name]=_daa;
if(_da6.messages){
_da8.messages[_da7.name]=$.extend(_da8.messages[_da7.name],_da6.messages);
}
break;
case "remove":
if(!_da6){
delete _da9[_da7.name];
return _daa;
}
var _dab={};
$.each(_da6.split(/\s/),function(_dac,_dad){
_dab[_dad]=_daa[_dad];
delete _daa[_dad];
});
return _dab;
}
}
var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(_da7),$.validator.classRules(_da7),$.validator.attributeRules(_da7),$.validator.staticRules(_da7)),_da7);
if(data.required){
var _daf=data.required;
delete data.required;
data=$.extend({required:_daf},data);
}
return data;
}});
$.extend($.expr[":"],{blank:function(a){
return !$.trim(""+a.value);
},filled:function(a){
return !!$.trim(""+a.value);
},unchecked:function(a){
return !a.checked;
}});
$.validator=function(_db3,form){
this.settings=$.extend(true,{},$.validator.defaults,_db3);
this.currentForm=form;
this.init();
};
$.validator.format=function(_db5,_db6){
if(arguments.length==1){
return function(){
var args=$.makeArray(arguments);
args.unshift(_db5);
return $.validator.format.apply(this,args);
};
}
if(arguments.length>2&&_db6.constructor!=Array){
_db6=$.makeArray(arguments).slice(1);
}
if(_db6.constructor!=Array){
_db6=[_db6];
}
$.each(_db6,function(i,n){
_db5=_db5.replace(new RegExp("\\{"+i+"\\}","g"),n);
});
return _db5;
};
$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(_dba){
this.lastActive=_dba;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){
this.settings.unhighlight&&this.settings.unhighlight.call(this,_dba,this.settings.errorClass,this.settings.validClass);
this.addWrapper(this.errorsFor(_dba)).hide();
}
},onfocusout:function(_dbb){
if(!this.checkable(_dbb)&&(_dbb.name in this.submitted||!this.optional(_dbb))){
this.element(_dbb);
}
},onkeyup:function(_dbc){
if(_dbc.name in this.submitted||_dbc==this.lastElement){
this.element(_dbc);
}
},onclick:function(_dbd){
if(_dbd.name in this.submitted){
this.element(_dbd);
}else{
if(_dbd.parentNode.name in this.submitted){
this.element(_dbd.parentNode);
}
}
},highlight:function(_dbe,_dbf,_dc0){
$(_dbe).addClass(_dbf).removeClass(_dc0);
},unhighlight:function(_dc1,_dc2,_dc3){
$(_dc1).removeClass(_dc2).addClass(_dc3);
}},setDefaults:function(_dc4){
$.extend($.validator.defaults,_dc4);
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){
this.labelContainer=$(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);
this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var _dc5=(this.groups={});
$.each(this.settings.groups,function(key,_dc7){
$.each(_dc7.split(/\s/),function(_dc8,name){
_dc5[name]=key;
});
});
var _dca=this.settings.rules;
$.each(_dca,function(key,_dcc){
_dca[key]=$.validator.normalizeRule(_dcc);
});
function delegate(_dcd){
var _dce=$.data(this[0].form,"validator"),_dcf="on"+_dcd.type.replace(/^validate/,"");
_dce.settings[_dcf]&&_dce.settings[_dcf].call(_dce,this[0]);
};
$(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",delegate).validateDelegate(":radio, :checkbox, select, option","click",delegate);
if(this.settings.invalidHandler){
$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);
}
},form:function(){
this.checkForm();
$.extend(this.submitted,this.errorMap);
this.invalid=$.extend({},this.errorMap);
if(!this.valid()){
$(this.currentForm).triggerHandler("invalid-form",[this]);
}
this.showErrors();
return this.valid();
},checkForm:function(){
this.prepareForm();
for(var i=0,_dd1=(this.currentElements=this.elements());_dd1[i];i++){
this.check(_dd1[i]);
}
return this.valid();
},element:function(_dd2){
_dd2=this.clean(_dd2);
this.lastElement=_dd2;
this.prepareElement(_dd2);
this.currentElements=$(_dd2);
var _dd3=this.check(_dd2);
if(_dd3){
delete this.invalid[_dd2.name];
}else{
this.invalid[_dd2.name]=true;
}
if(!this.numberOfInvalids()){
this.toHide=this.toHide.add(this.containers);
}
this.showErrors();
return _dd3;
},showErrors:function(_dd4){
if(_dd4){
$.extend(this.errorMap,_dd4);
this.errorList=[];
for(var name in _dd4){
this.errorList.push({message:_dd4[name],element:this.findByName(name)[0]});
}
this.successList=$.grep(this.successList,function(_dd6){
return !(_dd6.name in _dd4);
});
}
this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();
},resetForm:function(){
if($.fn.resetForm){
$(this.currentForm).resetForm();
}
this.submitted={};
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass);
},numberOfInvalids:function(){
return this.objectLength(this.invalid);
},objectLength:function(obj){
var _dd8=0;
for(var i in obj){
_dd8++;
}
return _dd8;
},hideErrors:function(){
this.addWrapper(this.toHide).hide();
},valid:function(){
return this.size()==0;
},size:function(){
return this.errorList.length;
},focusInvalid:function(){
if(this.settings.focusInvalid){
try{
$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");
}
catch(e){
}
}
},findLastActive:function(){
var _dda=this.lastActive;
return _dda&&$.grep(this.errorList,function(n){
return n.element.name==_dda.name;
}).length==1&&_dda;
},elements:function(){
var _ddc=this,_ddd={};
return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){
!this.name&&_ddc.settings.debug&&window.console&&console.error("%o has no name assigned",this);
if(this.name in _ddd||!_ddc.objectLength($(this).rules())){
return false;
}
_ddd[this.name]=true;
return true;
});
},clean:function(_dde){
return $(_dde)[0];
},errors:function(){
return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);
},reset:function(){
this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=$([]);
this.toHide=$([]);
this.currentElements=$([]);
},prepareForm:function(){
this.reset();
this.toHide=this.errors().add(this.containers);
},prepareElement:function(_ddf){
this.reset();
this.toHide=this.errorsFor(_ddf);
},check:function(_de0){
_de0=this.clean(_de0);
if(this.checkable(_de0)){
_de0=this.findByName(_de0.name).not(this.settings.ignore)[0];
}
var _de1=$(_de0).rules();
var _de2=false;
for(var _de3 in _de1){
var rule={method:_de3,parameters:_de1[_de3]};
try{
var _de5=$.validator.methods[_de3].call(this,_de0.value.replace(/\r/g,""),_de0,rule.parameters);
if(_de5=="dependency-mismatch"){
_de2=true;
continue;
}
_de2=false;
if(_de5=="pending"){
this.toHide=this.toHide.not(this.errorsFor(_de0));
return;
}
if(!_de5){
this.formatAndAdd(_de0,rule);
return false;
}
}
catch(e){
this.settings.debug&&window.console&&console.log("exception occured when checking element "+_de0.id+", check the '"+rule.method+"' method",e);
throw e;
}
}
if(_de2){
return;
}
if(this.objectLength(_de1)){
this.successList.push(_de0);
}
return true;
},customMetaMessage:function(_de6,_de7){
if(!$.metadata){
return;
}
var meta=this.settings.meta?$(_de6).metadata()[this.settings.meta]:$(_de6).metadata();
return meta&&meta.messages&&meta.messages[_de7];
},customMessage:function(name,_dea){
var m=this.settings.messages[name];
return m&&(m.constructor==String?m:m[_dea]);
},findDefined:function(){
for(var i=0;i<arguments.length;i++){
if(arguments[i]!==undefined){
return arguments[i];
}
}
return undefined;
},defaultMessage:function(_ded,_dee){
return this.findDefined(this.customMessage(_ded.name,_dee),this.customMetaMessage(_ded,_dee),!this.settings.ignoreTitle&&_ded.title||undefined,$.validator.messages[_dee],"<strong>Warning: No message defined for "+_ded.name+"</strong>");
},formatAndAdd:function(_def,rule){
var _df1=this.defaultMessage(_def,rule.method),_df2=/\$?\{(\d+)\}/g;
if(typeof _df1=="function"){
_df1=_df1.call(this,rule.parameters,_def);
}else{
if(_df2.test(_df1)){
_df1=jQuery.format(_df1.replace(_df2,"{$1}"),rule.parameters);
}
}
this.errorList.push({message:_df1,element:_def});
this.errorMap[_def.name]=_df1;
this.submitted[_def.name]=_df1;
},addWrapper:function(_df3){
if(this.settings.wrapper){
_df3=_df3.add(_df3.parent(this.settings.wrapper));
}
return _df3;
},defaultShowErrors:function(){
for(var i=0;this.errorList[i];i++){
var _df5=this.errorList[i];
this.settings.highlight&&this.settings.highlight.call(this,_df5.element,this.settings.errorClass,this.settings.validClass);
this.showLabel(_df5.element,_df5.message);
}
if(this.errorList.length){
this.toShow=this.toShow.add(this.containers);
}
if(this.settings.success){
for(var i=0;this.successList[i];i++){
this.showLabel(this.successList[i]);
}
}
if(this.settings.unhighlight){
for(var i=0,_df6=this.validElements();_df6[i];i++){
this.settings.unhighlight.call(this,_df6[i],this.settings.errorClass,this.settings.validClass);
}
}
this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show();
},validElements:function(){
return this.currentElements.not(this.invalidElements());
},invalidElements:function(){
return $(this.errorList).map(function(){
return this.element;
});
},showLabel:function(_df7,_df8){
var _df9=this.errorsFor(_df7);
if(_df9.length){
_df9.removeClass().addClass(this.settings.errorClass);
_df9.attr("generated")&&_df9.html(_df8);
}else{
_df9=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(_df7),generated:true}).addClass(this.settings.errorClass).html(_df8||"");
if(this.settings.wrapper){
_df9=_df9.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();
}
if(!this.labelContainer.append(_df9).length){
this.settings.errorPlacement?this.settings.errorPlacement(_df9,$(_df7)):_df9.insertAfter(_df7);
}
}
if(!_df8&&this.settings.success){
_df9.text("");
typeof this.settings.success=="string"?_df9.addClass(this.settings.success):this.settings.success(_df9);
}
this.toShow=this.toShow.add(_df9);
},errorsFor:function(_dfa){
var name=this.idOrName(_dfa);
return this.errors().filter(function(){
return $(this).attr("for")==name;
});
},idOrName:function(_dfc){
return this.groups[_dfc.name]||(this.checkable(_dfc)?_dfc.name:_dfc.id||_dfc.name);
},checkable:function(_dfd){
return /radio|checkbox/i.test(_dfd.type);
},findByName:function(name){
var form=this.currentForm;
return $(document.getElementsByName(name)).map(function(_e00,_e01){
return _e01.form==form&&_e01.name==name&&_e01||null;
});
},getLength:function(_e02,_e03){
switch(_e03.nodeName.toLowerCase()){
case "select":
return $("option:selected",_e03).length;
case "input":
if(this.checkable(_e03)){
return this.findByName(_e03.name).filter(":checked").length;
}
}
return _e02.length;
},depend:function(_e04,_e05){
return this.dependTypes[typeof _e04]?this.dependTypes[typeof _e04](_e04,_e05):true;
},dependTypes:{"boolean":function(_e06,_e07){
return _e06;
},"string":function(_e08,_e09){
return !!$(_e08,_e09.form).length;
},"function":function(_e0a,_e0b){
return _e0a(_e0b);
}},optional:function(_e0c){
return !$.validator.methods.required.call(this,$.trim(_e0c.value),_e0c)&&"dependency-mismatch";
},startRequest:function(_e0d){
if(!this.pending[_e0d.name]){
this.pendingRequest++;
this.pending[_e0d.name]=true;
}
},stopRequest:function(_e0e,_e0f){
this.pendingRequest--;
if(this.pendingRequest<0){
this.pendingRequest=0;
}
delete this.pending[_e0e.name];
if(_e0f&&this.pendingRequest==0&&this.formSubmitted&&this.form()){
$(this.currentForm).submit();
this.formSubmitted=false;
}else{
if(!_e0f&&this.pendingRequest==0&&this.formSubmitted){
$(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false;
}
}
},previousValue:function(_e10){
return $.data(_e10,"previousValue")||$.data(_e10,"previousValue",{old:null,valid:true,message:this.defaultMessage(_e10,"remote")});
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(_e11,_e12){
_e11.constructor==String?this.classRuleSettings[_e11]=_e12:$.extend(this.classRuleSettings,_e11);
},classRules:function(_e13){
var _e14={};
var _e15=$(_e13).attr("class");
_e15&&$.each(_e15.split(" "),function(){
if(this in $.validator.classRuleSettings){
$.extend(_e14,$.validator.classRuleSettings[this]);
}
});
return _e14;
},attributeRules:function(_e16){
var _e17={};
var _e18=$(_e16);
for(var _e19 in $.validator.methods){
var _e1a=_e18.attr(_e19);
if(_e1a){
_e17[_e19]=_e1a;
}
}
if(_e17.maxlength&&/-1|2147483647|524288/.test(_e17.maxlength)){
delete _e17.maxlength;
}
return _e17;
},metadataRules:function(_e1b){
if(!$.metadata){
return {};
}
var meta=$.data(_e1b.form,"validator").settings.meta;
return meta?$(_e1b).metadata()[meta]:$(_e1b).metadata();
},staticRules:function(_e1d){
var _e1e={};
var _e1f=$.data(_e1d.form,"validator");
if(_e1f.settings.rules){
_e1e=$.validator.normalizeRule(_e1f.settings.rules[_e1d.name])||{};
}
return _e1e;
},normalizeRules:function(_e20,_e21){
$.each(_e20,function(prop,val){
if(val===false){
delete _e20[prop];
return;
}
if(val.param||val.depends){
var _e24=true;
switch(typeof val.depends){
case "string":
_e24=!!$(val.depends,_e21.form).length;
break;
case "function":
_e24=val.depends.call(_e21,_e21);
break;
}
if(_e24){
_e20[prop]=val.param!==undefined?val.param:true;
}else{
delete _e20[prop];
}
}
});
$.each(_e20,function(rule,_e26){
_e20[rule]=$.isFunction(_e26)?_e26(_e21):_e26;
});
$.each(["minlength","maxlength","min","max"],function(){
if(_e20[this]){
_e20[this]=Number(_e20[this]);
}
});
$.each(["rangelength","range"],function(){
if(_e20[this]){
_e20[this]=[Number(_e20[this][0]),Number(_e20[this][1])];
}
});
if($.validator.autoCreateRanges){
if(_e20.min&&_e20.max){
_e20.range=[_e20.min,_e20.max];
delete _e20.min;
delete _e20.max;
}
if(_e20.minlength&&_e20.maxlength){
_e20.rangelength=[_e20.minlength,_e20.maxlength];
delete _e20.minlength;
delete _e20.maxlength;
}
}
if(_e20.messages){
delete _e20.messages;
}
return _e20;
},normalizeRule:function(data){
if(typeof data=="string"){
var _e28={};
$.each(data.split(/\s/),function(){
_e28[this]=true;
});
data=_e28;
}
return data;
},addMethod:function(name,_e2a,_e2b){
$.validator.methods[name]=_e2a;
$.validator.messages[name]=_e2b!=undefined?_e2b:$.validator.messages[name];
if(_e2a.length<3){
$.validator.addClassRules(name,$.validator.normalizeRule(name));
}
},methods:{required:function(_e2c,_e2d,_e2e){
if(!this.depend(_e2e,_e2d)){
return "dependency-mismatch";
}
switch(_e2d.nodeName.toLowerCase()){
case "select":
var val=$(_e2d).val();
return val&&val.length>0;
case "input":
if(this.checkable(_e2d)){
return this.getLength(_e2c,_e2d)>0;
}
default:
return $.trim(_e2c).length>0;
}
},remote:function(_e30,_e31,_e32){
if(this.optional(_e31)){
return "dependency-mismatch";
}
var _e33=this.previousValue(_e31);
if(!this.settings.messages[_e31.name]){
this.settings.messages[_e31.name]={};
}
_e33.originalMessage=this.settings.messages[_e31.name].remote;
this.settings.messages[_e31.name].remote=_e33.message;
_e32=typeof _e32=="string"&&{url:_e32}||_e32;
if(this.pending[_e31.name]){
return "pending";
}
if(_e33.old===_e30){
return _e33.valid;
}
_e33.old=_e30;
var _e34=this;
this.startRequest(_e31);
var data={};
data[_e31.name]=_e30;
$.ajax($.extend(true,{url:_e32,mode:"abort",port:"validate"+_e31.name,dataType:"json",data:data,success:function(_e36){
_e34.settings.messages[_e31.name].remote=_e33.originalMessage;
var _e37=_e36===true;
if(_e37){
var _e38=_e34.formSubmitted;
_e34.prepareElement(_e31);
_e34.formSubmitted=_e38;
_e34.successList.push(_e31);
_e34.showErrors();
}else{
var _e39={};
var _e3a=_e36||_e34.defaultMessage(_e31,"remote");
_e39[_e31.name]=_e33.message=$.isFunction(_e3a)?_e3a(_e30):_e3a;
_e34.showErrors(_e39);
}
_e33.valid=_e37;
_e34.stopRequest(_e31,_e37);
}},_e32));
return "pending";
},minlength:function(_e3b,_e3c,_e3d){
return this.optional(_e3c)||this.getLength($.trim(_e3b),_e3c)>=_e3d;
},maxlength:function(_e3e,_e3f,_e40){
return this.optional(_e3f)||this.getLength($.trim(_e3e),_e3f)<=_e40;
},rangelength:function(_e41,_e42,_e43){
var _e44=this.getLength($.trim(_e41),_e42);
return this.optional(_e42)||(_e44>=_e43[0]&&_e44<=_e43[1]);
},min:function(_e45,_e46,_e47){
return this.optional(_e46)||_e45>=_e47;
},max:function(_e48,_e49,_e4a){
return this.optional(_e49)||_e48<=_e4a;
},range:function(_e4b,_e4c,_e4d){
return this.optional(_e4c)||(_e4b>=_e4d[0]&&_e4b<=_e4d[1]);
},email:function(_e4e,_e4f){
return this.optional(_e4f)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_e4e);
},url:function(_e50,_e51){
return this.optional(_e51)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_e50);
},date:function(_e52,_e53){
return this.optional(_e53)||!/Invalid|NaN/.test(new Date(_e52));
},dateISO:function(_e54,_e55){
return this.optional(_e55)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(_e54);
},number:function(_e56,_e57){
return this.optional(_e57)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(_e56);
},digits:function(_e58,_e59){
return this.optional(_e59)||/^\d+$/.test(_e58);
},creditcard:function(_e5a,_e5b){
if(this.optional(_e5b)){
return "dependency-mismatch";
}
if(/[^0-9-]+/.test(_e5a)){
return false;
}
var _e5c=0,_e5d=0,_e5e=false;
_e5a=_e5a.replace(/\D/g,"");
for(var n=_e5a.length-1;n>=0;n--){
var _e60=_e5a.charAt(n);
var _e5d=parseInt(_e60,10);
if(_e5e){
if((_e5d*=2)>9){
_e5d-=9;
}
}
_e5c+=_e5d;
_e5e=!_e5e;
}
return (_e5c%10)==0;
},accept:function(_e61,_e62,_e63){
_e63=typeof _e63=="string"?_e63.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(_e62)||_e61.match(new RegExp(".("+_e63+")$","i"));
},equalTo:function(_e64,_e65,_e66){
var _e67=$(_e66).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){
$(_e65).valid();
});
return $.trim(_e64)==$.trim(_e67.val());
}}});
$.format=$.validator.format;
})(jQuery);
(function($){
var _e69={};
if($.ajaxPrefilter){
$.ajaxPrefilter(function(_e6a,_,xhr){
var port=_e6a.port;
if(_e6a.mode=="abort"){
if(_e69[port]){
_e69[port].abort();
}
_e69[port]=xhr;
}
});
}else{
var ajax=$.ajax;
$.ajax=function(_e6f){
var mode=("mode" in _e6f?_e6f:$.ajaxSettings).mode,port=("port" in _e6f?_e6f:$.ajaxSettings).port;
if(mode=="abort"){
if(_e69[port]){
_e69[port].abort();
}
return (_e69[port]=ajax.apply(this,arguments));
}
return ajax.apply(this,arguments);
};
}
})(jQuery);
(function($){
if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){
$.each({focus:"focusin",blur:"focusout"},function(_e73,fix){
$.event.special[fix]={setup:function(){
this.addEventListener(_e73,handler,true);
},teardown:function(){
this.removeEventListener(_e73,handler,true);
},handler:function(e){
arguments[0]=$.event.fix(e);
arguments[0].type=fix;
return $.event.handle.apply(this,arguments);
}};
function handler(e){
e=$.event.fix(e);
e.type=fix;
return $.event.handle.call(this,e);
};
});
}
$.extend($.fn,{validateDelegate:function(_e77,type,_e79){
return this.bind(type,function(_e7a){
var _e7b=$(_e7a.target);
if(_e7b.is(_e77)){
return _e79.apply(_e7b,arguments);
}
});
}});
})(jQuery);
jQuery.validator.addMethod("exactlength",function(_e7c,_e7d,_e7e){
return this.optional(_e7d)||this.getLength(jq.trim(_e7c),_e7d)==_e7e;
},jQuery.format("Please enter exactly {0} characters."));
jQuery.validator.addMethod("forbidden",function(_e7f,_e80,_e81){
if(!this.depend(_e81,_e80)){
return "dependency-mismatch";
}
switch(_e80.nodeName.toLowerCase()){
case "select":
var val=jq(_e80).val();
return !(val&&val.length>0);
case "input":
if(this.checkable(_e80)){
return this.getLength(_e7f,_e80)==0;
}
default:
return jq.trim(_e7f).length==0;
}
},"This field must be empty.");
jQuery.validator.addMethod("ssn",function(ssn,_e84,_e85){
if(!this.depend(_e85,_e84)){
return "dependency-mismatch";
}
var _e86=false;
if(ssn.search(/^[0-9]{3}\-[0-9]{2}\-[0-9]{4}$/)==-1){
_e86=true;
}else{
var _e87=ssn.split("-");
if(_e87[0]=="000"||_e87[1]=="00"||_e87[2]=="0000"){
_e86=true;
}
if(_e87[0]=="666"){
_e86=true;
}
var _e88=parseInt(_e87[0],10);
if(_e88>=900){
if(_e87[1][0]!=7&&_e87[1][0]!=8){
_e86=true;
}
}
}
return !_e86;
},"Your SSN or ITIN appears to be invalid. It should be in the format xxx-xx-xxxx, where each x is a digit. Please contact us at payments@hubpages.com for help.");
jQuery.validator.addMethod("nohtml",function(_e89,_e8a,_e8b){
if(!this.depend(_e8b,_e8a)){
return "dependency-mismatch";
}
return _e89.search(/[<|>]/)==-1;
},"Please do not include inequality signs (&lt; or &gt;) or HTML tags.");
jQuery.validator.addMethod("ein",function(ein,_e8d,_e8e){
if(!this.depend(_e8e,_e8d)){
return "dependency-mismatch";
}
return ein.search(/^[0-9]{2}\-[0-9]{7}$/)!=-1;
},"Your EIN appears to be invalid. It should be in the format xx-xxxxxxx, where each x is a digit. Please contact us at payments@hubpages.com for help.");
jQuery.validator.addMethod("mmddyyyy",function(_e8f,_e90,_e91){
var _e8f=jq.trim(_e8f);
if(_e8f.search(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)==-1){
return false;
}
var _e92=_e8f.split("-");
var m=1*_e92[0]-1;
var d=1*_e92[1];
var y=1*_e92[2];
if(y>2037){
return false;
}
var dte=new Date(y,m,d,1);
return (d==1*dte.getDate()&&m==1*dte.getMonth()&&y==1*dte.getFullYear());
},"Please provide a valid date with the format MM-DD-YYYY.");
(function($){
$.fn.checkLikeRadio=function(){
var that=this;
this.each(function(){
$(this).click(function(){
if($(this).attr("checked")){
var _e99=$(this);
$(that).each(function(){
if($(this)[0]!==_e99[0]){
$(this).attr("checked",false);
}
});
}
});
});
};
})(jQuery);
(function($){
$.fn.ajaxSubmit=function(_e9b){
if(!this.length){
log("ajaxSubmit: skipping submit process - no element selected");
return this;
}
if(typeof _e9b=="function"){
_e9b={success:_e9b};
}
var _e9c=this.attr("action");
var url=(typeof _e9c==="string")?$.trim(_e9c):"";
if(url){
url=(url.match(/^([^#]+)/)||[])[1];
}
url=url||window.location.href||"";
_e9b=$.extend(true,{url:url,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},_e9b);
var veto={};
this.trigger("form-pre-serialize",[this,_e9b,veto]);
if(veto.veto){
log("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
return this;
}
if(_e9b.beforeSerialize&&_e9b.beforeSerialize(this,_e9b)===false){
log("ajaxSubmit: submit aborted via beforeSerialize callback");
return this;
}
var n,v,a=this.formToArray(_e9b.semantic);
if(_e9b.data){
_e9b.extraData=_e9b.data;
for(n in _e9b.data){
if(_e9b.data[n] instanceof Array){
for(var k in _e9b.data[n]){
a.push({name:n,value:_e9b.data[n][k]});
}
}else{
v=_e9b.data[n];
v=$.isFunction(v)?v():v;
a.push({name:n,value:v});
}
}
}
if(_e9b.beforeSubmit&&_e9b.beforeSubmit(a,this,_e9b)===false){
log("ajaxSubmit: submit aborted via beforeSubmit callback");
return this;
}
this.trigger("form-submit-validate",[a,this,_e9b,veto]);
if(veto.veto){
log("ajaxSubmit: submit vetoed via form-submit-validate trigger");
return this;
}
var q=$.param(a);
if(_e9b.type.toUpperCase()=="GET"){
_e9b.url+=(_e9b.url.indexOf("?")>=0?"&":"?")+q;
_e9b.data=null;
}else{
_e9b.data=q;
}
var _ea4=this,_ea5=[];
if(_e9b.resetForm){
_ea5.push(function(){
_ea4.resetForm();
});
}
if(_e9b.clearForm){
_ea5.push(function(){
_ea4.clearForm();
});
}
if(!_e9b.dataType&&_e9b.target){
var _ea6=_e9b.success||function(){
};
_ea5.push(function(data){
var fn=_e9b.replaceTarget?"replaceWith":"html";
$(_e9b.target)[fn](data).each(_ea6,arguments);
});
}else{
if(_e9b.success){
_ea5.push(_e9b.success);
}
}
_e9b.success=function(data,_eaa,xhr){
var _eac=_e9b.context||_e9b;
for(var i=0,max=_ea5.length;i<max;i++){
_ea5[i].apply(_eac,[data,_eaa,xhr||_ea4,_ea4]);
}
};
var _eaf=$("input:file",this).length>0;
var mp="multipart/form-data";
var _eb1=(_ea4.attr("enctype")==mp||_ea4.attr("encoding")==mp);
if(_e9b.iframe!==false&&(_eaf||_e9b.iframe||_eb1)){
if(_e9b.closeKeepAlive){
$.get(_e9b.closeKeepAlive,fileUpload);
}else{
fileUpload();
}
}else{
$.ajax(_e9b);
}
this.trigger("form-submit-notify",[this,_e9b]);
return this;
function fileUpload(){
var form=_ea4[0];
if($(":input[name=submit],:input[id=submit]",form).length){
alert("Error: Form elements must not have name or id of \"submit\".");
return;
}
var s=$.extend(true,{},$.ajaxSettings,_e9b);
s.context=s.context||s;
var id="jqFormIO"+(new Date().getTime()),fn="_"+id;
var $io=$("<iframe id=\""+id+"\" name=\""+id+"\" src=\""+s.iframeSrc+"\" />");
var io=$io[0];
$io.css({position:"absolute",top:"-1000px",left:"-1000px"});
var xhr={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){
},getResponseHeader:function(){
},setRequestHeader:function(){
},abort:function(){
log("aborting upload...");
var e="aborted";
this.aborted=1;
$io.attr("src",s.iframeSrc);
xhr.error=e;
s.error&&s.error.call(s.context,xhr,"error",e);
g&&$.event.trigger("ajaxError",[xhr,s,e]);
s.complete&&s.complete.call(s.context,xhr,"error");
}};
var g=s.global;
if(g&&!$.active++){
$.event.trigger("ajaxStart");
}
if(g){
$.event.trigger("ajaxSend",[xhr,s]);
}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--;
}
return;
}
if(xhr.aborted){
return;
}
var _ebb=0;
var sub=form.clk;
if(sub){
var n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type=="image"){
s.extraData[n+".x"]=form.clk_x;
s.extraData[n+".y"]=form.clk_y;
}
}
}
function doSubmit(){
var t=_ea4.attr("target"),a=_ea4.attr("action");
form.setAttribute("target",id);
if(form.getAttribute("method")!="POST"){
form.setAttribute("method","POST");
}
if(form.getAttribute("action")!=s.url){
form.setAttribute("action",s.url);
}
if(!s.skipEncodingOverride){
_ea4.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});
}
if(s.timeout){
setTimeout(function(){
_ebb=true;
cb();
},s.timeout);
}
var _ebf=[];
try{
if(s.extraData){
for(var n in s.extraData){
_ebf.push($("<input type=\"hidden\" name=\""+n+"\" value=\""+s.extraData[n]+"\" />").appendTo(form)[0]);
}
}
$io.appendTo("body");
io.attachEvent?io.attachEvent("onload",cb):io.addEventListener("load",cb,false);
form.submit();
}
finally{
form.setAttribute("action",a);
if(t){
form.setAttribute("target",t);
}else{
_ea4.removeAttr("target");
}
$(_ebf).remove();
}
};
if(s.forceSync){
doSubmit();
}else{
setTimeout(doSubmit,10);
}
var data,doc,_ec3=50;
function cb(){
if(xhr.aborted){
return;
}
var doc=io.contentWindow?io.contentWindow.document:io.contentDocument?io.contentDocument:io.document;
if(!doc||doc.location.href==s.iframeSrc){
return;
}
io.detachEvent?io.detachEvent("onload",cb):io.removeEventListener("load",cb,false);
var ok=true;
try{
if(_ebb){
throw "timeout";
}
var _ec6=s.dataType=="xml"||doc.XMLDocument||$.isXMLDoc(doc);
log("isXml="+_ec6);
if(!_ec6&&window.opera&&(doc.body==null||doc.body.innerHTML=="")){
if(--_ec3){
log("requeing onLoad callback, DOM not available");
setTimeout(cb,250);
return;
}
}
xhr.responseText=doc.body?doc.body.innerHTML:doc.documentElement?doc.documentElement.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
xhr.getResponseHeader=function(_ec7){
var _ec8={"content-type":s.dataType};
return _ec8[_ec7];
};
var scr=/(json|script)/.test(s.dataType);
if(scr||s.textarea){
var ta=doc.getElementsByTagName("textarea")[0];
if(ta){
xhr.responseText=ta.value;
}else{
if(scr){
var pre=doc.getElementsByTagName("pre")[0];
var b=doc.getElementsByTagName("body")[0];
if(pre){
xhr.responseText=pre.textContent;
}else{
if(b){
xhr.responseText=b.innerHTML;
}
}
}
}
}else{
if(s.dataType=="xml"&&!xhr.responseXML&&xhr.responseText!=null){
xhr.responseXML=toXml(xhr.responseText);
}
}
data=httpData(xhr,s.dataType,s);
}
catch(e){
log("error caught:",e);
ok=false;
xhr.error=e;
s.error&&s.error.call(s.context,xhr,"error",e);
g&&$.event.trigger("ajaxError",[xhr,s,e]);
}
if(xhr.aborted){
log("upload aborted");
ok=false;
}
if(ok){
s.success&&s.success.call(s.context,data,"success",xhr);
g&&$.event.trigger("ajaxSuccess",[xhr,s]);
}
g&&$.event.trigger("ajaxComplete",[xhr,s]);
if(g&&!--$.active){
$.event.trigger("ajaxStop");
}
s.complete&&s.complete.call(s.context,xhr,ok?"success":"error");
setTimeout(function(){
$io.removeData("form-plugin-onload");
$io.remove();
xhr.responseXML=null;
},100);
};
var _ecd=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject("Microsoft.XMLDOM");
doc.async="false";
doc.loadXML(s);
}else{
doc=(new DOMParser()).parseFromString(s,"text/xml");
}
return (doc&&doc.documentElement&&doc.documentElement.nodeName!="parsererror")?doc:null;
};
var _ed0=$.parseJSON||function(s){
return window["eval"]("("+s+")");
};
var _ed2=function(xhr,type,s){
var ct=xhr.getResponseHeader("content-type")||"",xml=type==="xml"||!type&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==="parsererror"){
$.error&&$.error("parsererror");
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==="string"){
if(type==="json"||!type&&ct.indexOf("json")>=0){
data=_ed0(data);
}else{
if(type==="script"||!type&&ct.indexOf("javascript")>=0){
$.globalEval(data);
}
}
}
return data;
};
};
};
$.fn.ajaxForm=function(_ed8){
if(this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log("DOM not ready, queuing ajaxForm");
$(function(){
$(o.s,o.c).ajaxForm(_ed8);
});
return this;
}
log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));
return this;
}
return this.ajaxFormUnbind().bind("submit.form-plugin",function(e){
if(!e.isDefaultPrevented()){
e.preventDefault();
$(this).ajaxSubmit(_ed8);
}
}).bind("click.form-plugin",function(e){
var _edc=e.target;
var $el=$(_edc);
if(!($el.is(":submit,input:image"))){
var t=$el.closest(":submit");
if(t.length==0){
return;
}
_edc=t[0];
}
var form=this;
form.clk=_edc;
if(_edc.type=="image"){
if(e.offsetX!=undefined){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY;
}else{
if(typeof $.fn.offset=="function"){
var _ee0=$el.offset();
form.clk_x=e.pageX-_ee0.left;
form.clk_y=e.pageY-_ee0.top;
}else{
form.clk_x=e.pageX-_edc.offsetLeft;
form.clk_y=e.pageY-_edc.offsetTop;
}
}
}
setTimeout(function(){
form.clk=form.clk_x=form.clk_y=null;
},100);
});
};
$.fn.ajaxFormUnbind=function(){
return this.unbind("submit.form-plugin click.form-plugin");
};
$.fn.formToArray=function(_ee1){
var a=[];
if(this.length===0){
return a;
}
var form=this[0];
var els=_ee1?form.getElementsByTagName("*"):form.elements;
if(!els){
return a;
}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n){
continue;
}
if(_ee1&&form.clk&&el.type=="image"){
if(!el.disabled&&form.clk==el){
a.push({name:n,value:$(el).val()});
a.push({name:n+".x",value:form.clk_x},{name:n+".y",value:form.clk_y});
}
continue;
}
v=$.fieldValue(el,true);
if(v&&v.constructor==Array){
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]});
}
}else{
if(v!==null&&typeof v!="undefined"){
a.push({name:n,value:v});
}
}
}
if(!_ee1&&form.clk){
var _eec=$(form.clk),_eed=_eec[0];
n=_eed.name;
if(n&&!_eed.disabled&&_eed.type=="image"){
a.push({name:n,value:_eec.val()});
a.push({name:n+".x",value:form.clk_x},{name:n+".y",value:form.clk_y});
}
}
return a;
};
$.fn.formSerialize=function(_eee){
return $.param(this.formToArray(_eee));
};
$.fn.fieldSerialize=function(_eef){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return;
}
var v=$.fieldValue(this,_eef);
if(v&&v.constructor==Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]});
}
}else{
if(v!==null&&typeof v!="undefined"){
a.push({name:this.name,value:v});
}
}
});
return $.param(a);
};
$.fn.fieldValue=function(_ef5){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,_ef5);
if(v===null||typeof v=="undefined"||(v.constructor==Array&&!v.length)){
continue;
}
v.constructor==Array?$.merge(val,v):val.push(v);
}
return val;
};
$.fieldValue=function(el,_efc){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(_efc===undefined){
_efc=true;
}
if(_efc&&(!n||el.disabled||t=="reset"||t=="button"||(t=="checkbox"||t=="radio")&&!el.checked||(t=="submit"||t=="image")&&el.form&&el.form.clk!=el||tag=="select"&&el.selectedIndex==-1)){
return null;
}
if(tag=="select"){
var _f00=el.selectedIndex;
if(_f00<0){
return null;
}
var a=[],ops=el.options;
var one=(t=="select-one");
var max=(one?_f00+1:ops.length);
for(var i=(one?_f00:0);i<max;i++){
var op=ops[i];
if(op.selected){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes["value"]&&!(op.attributes["value"].specified))?op.text:op.value;
}
if(one){
return v;
}
a.push(v);
}
}
return a;
}
return $(el).val();
};
$.fn.clearForm=function(){
return this.each(function(){
$("input,select,textarea",this).clearFields();
});
};
$.fn.clearFields=$.fn.clearInputs=function(){
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
});
};
$.fn.resetForm=function(){
return this.each(function(){
if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){
this.reset();
}
});
};
$.fn.enable=function(b){
if(b===undefined){
b=true;
}
return this.each(function(){
this.disabled=!b;
});
};
$.fn.selected=function(_f0b){
if(_f0b===undefined){
_f0b=true;
}
return this.each(function(){
var t=this.type;
if(t=="checkbox"||t=="radio"){
this.checked=_f0b;
}else{
if(this.tagName.toLowerCase()=="option"){
var $sel=$(this).parent("select");
if(_f0b&&$sel[0]&&$sel[0].type=="select-one"){
$sel.find("option").selected(false);
}
this.selected=_f0b;
}
}
});
};
function log(){
if($.fn.ajaxSubmit.debug){
var msg="[jquery.form] "+Array.prototype.join.call(arguments,"");
if(window.console&&window.console.log){
window.console.log(msg);
}else{
if(window.opera&&window.opera.postError){
window.opera.postError(msg);
}
}
}
};
})(jQuery);
(function($){
$.ui=$.ui||{};
$.fn.extend({accordion:function(_f10,data){
var args=Array.prototype.slice.call(arguments,1);
return this.each(function(){
if(typeof _f10=="string"){
var _f13=$.data(this,"ui-accordion");
_f13[_f10].apply(_f13,args);
}else{
if(!$(this).is(".ui-accordion")){
$.data(this,"ui-accordion",new $.ui.accordion(this,_f10));
}
}
});
},activate:function(_f14){
return this.accordion("activate",_f14);
}});
$.ui.accordion=function(_f15,_f16){
this.options=_f16=$.extend({},$.ui.accordion.defaults,_f16);
this.element=_f15;
$(_f15).addClass("ui-accordion");
if(_f16.navigation){
var _f17=$(_f15).find("a").filter(_f16.navigationFilter);
if(_f17.length){
if(_f17.filter(_f16.header).length){
_f16.active=_f17;
}else{
_f16.active=_f17.parent().parent().prev();
_f17.addClass("current");
}
}
}
_f16.headers=$(_f15).find(_f16.header);
_f16.active=findActive(_f16.headers,_f16.active);
if(_f16.fillSpace){
var _f18=$(_f15).parent().height();
_f16.headers.each(function(){
_f18-=$(this).outerHeight();
});
var _f19=0;
_f16.headers.next().each(function(){
_f19=Math.max(_f19,$(this).innerHeight()-$(this).height());
}).height(_f18-_f19);
}else{
if(_f16.autoheight){
var _f18=0;
_f16.headers.next().each(function(){
_f18=Math.max(_f18,$(this).outerHeight());
}).height(_f18);
}
}
_f16.headers.not(_f16.active||"").next().hide();
_f16.active.parent().andSelf().addClass(_f16.selectedClass);
if(_f16.event){
$(_f15).bind((_f16.event)+".ui-accordion",clickHandler);
}
};
$.ui.accordion.prototype={activate:function(_f1a){
clickHandler.call(this.element,{target:findActive(this.options.headers,_f1a)[0]});
},enable:function(){
this.options.disabled=false;
},disable:function(){
this.options.disabled=true;
},destroy:function(){
this.options.headers.next().css("display","");
if(this.options.fillSpace||this.options.autoheight){
this.options.headers.next().css("height","");
}
$.removeData(this.element,"ui-accordion");
$(this.element).removeClass("ui-accordion").unbind(".ui-accordion");
}};
function scopeCallback(_f1b,_f1c){
return function(){
return _f1b.apply(_f1c,arguments);
};
};
function completed(_f1d){
if(!$.data(this,"ui-accordion")){
return;
}
var _f1e=$.data(this,"ui-accordion");
var _f1f=_f1e.options;
_f1f.running=_f1d?0:--_f1f.running;
if(_f1f.running){
return;
}
if(_f1f.clearStyle){
_f1f.toShow.add(_f1f.toHide).css({height:"",overflow:""});
}
$(this).triggerHandler("change.ui-accordion",[_f1f.data],_f1f.change);
};
function toggle(_f20,_f21,data,_f23,down){
var _f25=$.data(this,"ui-accordion").options;
_f25.toShow=_f20;
_f25.toHide=_f21;
_f25.data=data;
var _f26=scopeCallback(completed,this);
_f25.running=_f21.size()==0?_f20.size():_f21.size();
if(_f25.animated){
if(!_f25.alwaysOpen&&_f23){
$.ui.accordion.animations[_f25.animated]({toShow:jQuery([]),toHide:_f21,complete:_f26,down:down,autoheight:_f25.autoheight});
}else{
$.ui.accordion.animations[_f25.animated]({toShow:_f20,toHide:_f21,complete:_f26,down:down,autoheight:_f25.autoheight});
}
}else{
if(!_f25.alwaysOpen&&_f23){
_f20.toggle();
}else{
_f21.hide();
_f20.show();
}
_f26(true);
}
};
function clickHandler(_f27){
var _f28=$.data(this,"ui-accordion").options;
if(_f28.disabled){
return false;
}
if(!_f27.target&&!_f28.alwaysOpen){
_f28.active.parent().andSelf().toggleClass(_f28.selectedClass);
var _f29=_f28.active.next(),data={instance:this,options:_f28,newHeader:jQuery([]),oldHeader:_f28.active,newContent:jQuery([]),oldContent:_f29},_f2b=_f28.active=$([]);
toggle.call(this,_f2b,_f29,data);
return false;
}
var _f2c=$(_f27.target);
if(_f2c.parents(_f28.header).length){
while(!_f2c.is(_f28.header)){
_f2c=_f2c.parent();
}
}
var _f2d=_f2c[0]==_f28.active[0];
if(_f28.running||(_f28.alwaysOpen&&_f2d)){
return false;
}
if(!_f2c.is(_f28.header)){
return;
}
_f28.active.parent().andSelf().toggleClass(_f28.selectedClass);
if(!_f2d){
_f2c.parent().andSelf().addClass(_f28.selectedClass);
}
var _f2b=_f2c.next(),_f29=_f28.active.next(),data={instance:this,options:_f28,newHeader:_f2c,oldHeader:_f28.active,newContent:_f2b,oldContent:_f29},down=_f28.headers.index(_f28.active[0])>_f28.headers.index(_f2c[0]);
_f28.active=_f2d?$([]):_f2c;
toggle.call(this,_f2b,_f29,data,_f2d,down);
return false;
};
function findActive(_f2f,_f30){
return _f30!=undefined?typeof _f30=="number"?_f2f.filter(":eq("+_f30+")"):_f2f.not(_f2f.not(_f30)):_f30===false?$([]):_f2f.filter(":eq(0)");
};
$.extend($.ui.accordion,{defaults:{selectedClass:"selected",alwaysOpen:true,animated:"slide",event:"click",header:"a",autoheight:true,running:0,navigationFilter:function(){
return this.href.toLowerCase()==location.href.toLowerCase();
}},animations:{slide:function(_f31,_f32){
_f31=$.extend({easing:"swing",duration:300},_f31,_f32);
if(!_f31.toHide.size()){
_f31.toShow.animate({height:"show"},_f31);
return;
}
var _f33=_f31.toHide.height(),_f34=_f31.toShow.height(),_f35=_f34/_f33;
_f31.toShow.css({height:0,overflow:"hidden"}).show();
_f31.toHide.filter(":hidden").each(_f31.complete).end().filter(":visible").animate({height:"hide"},{step:function(now){
var _f37=(_f33-now)*_f35;
if($.browser.msie||$.browser.opera){
_f37=Math.ceil(_f37);
}
_f31.toShow.height(_f37);
},duration:_f31.duration,easing:_f31.easing,complete:function(){
if(!_f31.autoheight){
_f31.toShow.css("height","auto");
}
_f31.complete();
}});
},bounceslide:function(_f38){
this.slide(_f38,{easing:_f38.down?"bounceout":"swing",duration:_f38.down?1000:200});
},easeslide:function(_f39){
this.slide(_f39,{easing:"easeinout",duration:700});
}}});
})(jQuery);
(function($){
var tmp,_f3c,_f3d,wrap,_f3f,_f40,_f41,_f42,_f43,_f44=0,_f45={},_f46=[],_f47=0,_f48={},_f49=[],_f4a=null,_f4b=new Image(),_f4c=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,_f4d=/[^\.]\.(swf)\s*$/i,_f4e,_f4f=1,_f50,_f51,busy=false,_f53=20,fx=$.extend($("<div/>")[0],{prop:0}),_f55=0,_f56=!$.support.opacity&&!window.XMLHttpRequest,_f57=function(){
_f3c.hide();
_f4b.onerror=_f4b.onload=null;
if(_f4a){
_f4a.abort();
}
tmp.empty();
},_f58=function(){
$.fancybox("<p id=\"fancybox_error\">The requested content cannot be loaded.<br />Please try again later.</p>",{"scrolling":"no","padding":20,"transitionIn":"none","transitionOut":"none"});
},_f59=function(){
return [$(window).width(),$(window).height(),$(document).scrollLeft(),$(document).scrollTop()];
},_f5a=function(){
var view=_f59(),to={},_f5d=_f48.margin,_f5e=_f48.autoScale,_f5f=(_f53+_f5d)*2,_f60=(_f53+_f5d)*2,_f61=(_f48.padding*2),_f62;
if(_f48.width.toString().indexOf("%")>-1){
to.width=((view[0]*parseFloat(_f48.width))/100)-(_f53*2);
_f5e=false;
}else{
to.width=_f48.width+_f61;
}
if(_f48.height.toString().indexOf("%")>-1){
to.height=((view[1]*parseFloat(_f48.height))/100)-(_f53*2);
_f5e=false;
}else{
to.height=_f48.height+_f61;
}
if(_f5e&&(to.width>(view[0]-_f5f)||to.height>(view[1]-_f60))){
if(_f45.type=="image"||_f45.type=="swf"){
_f5f+=_f61;
_f60+=_f61;
_f62=Math.min(Math.min(view[0]-_f5f,_f48.width)/_f48.width,Math.min(view[1]-_f60,_f48.height)/_f48.height);
to.width=Math.round(_f62*(to.width-_f61))+_f61;
to.height=Math.round(_f62*(to.height-_f61))+_f61;
}else{
to.width=Math.min(to.width,(view[0]-_f5f));
to.height=Math.min(to.height,(view[1]-_f60));
}
}
to.top=view[3]+((view[1]-(to.height+(_f53*2)))*0.5);
if(_f48.minWidth==false){
to.left=view[2]+((view[0]-(to.width+(_f53*2)))*0.5);
}else{
to.left=view[2]+((view[0]-(Math.max(to.width,_f48.minWidth)+(_f53*2)))*0.5);
}
if(_f48.autoScale===false){
to.top=Math.max(view[3]+_f5d,to.top);
to.left=Math.max(view[2]+_f5d,to.left);
}
return to;
},_f63=function(_f64){
if(_f64&&_f64.length){
switch(_f48.titlePosition){
case "inside":
return _f64;
case "over":
return "<span id=\"fancybox-title-over\">"+_f64+"</span>";
default:
return "<span id=\"fancybox-title-wrap\"><span id=\"fancybox-title-left\"></span><span id=\"fancybox-title-main\">"+_f64+"</span><span id=\"fancybox-title-right\"></span></span>";
}
}
return false;
},_f65=function(){
var _f66=_f48.title,_f67=_f51.width-(_f48.padding*2),_f68="fancybox-title-"+_f48.titlePosition;
$("#fancybox-title").remove();
_f55=0;
if(_f48.titleShow===false){
return;
}
_f66=$.isFunction(_f48.titleFormat)?_f48.titleFormat(_f66,_f49,_f47,_f48):_f63(_f66);
if(!_f66||_f66===""){
return;
}
$("<div id=\"fancybox-title\" class=\""+_f68+"\" />").css({"width":_f67,"paddingLeft":_f48.padding,"paddingRight":_f48.padding}).html(_f66).appendTo("body");
switch(_f48.titlePosition){
case "inside":
_f55=$("#fancybox-title").outerHeight(true)-_f48.padding;
_f51.height+=_f55;
break;
case "over":
$("#fancybox-title").css("bottom",_f48.padding);
break;
default:
$("#fancybox-title").css("bottom",$("#fancybox-title").outerHeight(true)*-1);
break;
}
$("#fancybox-title").appendTo(_f3f).hide();
},_f69=function(){
$(document).unbind("keydown.fb").bind("keydown.fb",function(e){
if(e.keyCode==27&&_f48.enableEscapeButton){
e.preventDefault();
$.fancybox.close();
}else{
if(e.keyCode==37){
e.preventDefault();
$.fancybox.prev();
}else{
if(e.keyCode==39){
e.preventDefault();
$.fancybox.next();
}
}
}
});
if($.fn.mousewheel){
wrap.unbind("mousewheel.fb");
if(_f49.length>1){
wrap.bind("mousewheel.fb",function(e,_f6c){
e.preventDefault();
if(busy||_f6c===0){
return;
}
if(_f6c>0){
$.fancybox.prev();
}else{
$.fancybox.next();
}
});
}
}
if(!_f48.showNavArrows){
return;
}
if((_f48.cyclic&&_f49.length>1)||_f47!==0){
_f42.show();
}
if((_f48.cyclic&&_f49.length>1)||_f47!=(_f49.length-1)){
_f43.show();
}
},_f6d=function(){
var href,_f6f;
if((_f49.length-1)>_f47){
href=_f49[_f47+1].href;
if(typeof href!=="undefined"&&href.match(_f4c)){
_f6f=new Image();
_f6f.src=href;
}
}
if(_f47>0){
href=_f49[_f47-1].href;
if(typeof href!=="undefined"&&href.match(_f4c)){
_f6f=new Image();
_f6f.src=href;
}
}
},_f70=function(){
_f40.css("overflow",(_f48.scrolling=="auto"?(_f48.type=="image"||_f48.type=="iframe"||_f48.type=="swf"?"hidden":"auto"):(_f48.scrolling=="yes"?"auto":"visible")));
if(!$.support.opacity){
_f40.get(0).style.removeAttribute("filter");
wrap.get(0).style.removeAttribute("filter");
}
$("#fancybox-title").show();
if(_f48.hideOnContentClick){
_f40.one("click",$.fancybox.close);
}
if(_f48.hideOnOverlayClick){
_f3d.one("click",$.fancybox.close);
}
if(_f48.showCloseButton){
_f41.show();
}
_f69();
$(window).bind("resize.fb",$.fancybox.center);
if(_f48.centerOnScroll){
$(window).bind("scroll.fb",$.fancybox.center);
}else{
$(window).unbind("scroll.fb");
}
if($.isFunction(_f48.onComplete)){
_f48.onComplete(_f49,_f47,_f48);
}
busy=false;
_f6d();
},_f71=function(pos){
var _f73=Math.round(_f50.width+(_f51.width-_f50.width)*pos),_f74=Math.round(_f50.height+(_f51.height-_f50.height)*pos),top=Math.round(_f50.top+(_f51.top-_f50.top)*pos),left=Math.round(_f50.left+(_f51.left-_f50.left)*pos);
wrap.css({"width":_f73+"px","height":_f74+"px","top":top+"px","left":left+"px"});
_f73=Math.max(_f73-_f48.padding*2,0);
_f74=Math.max(_f74-(_f48.padding*2+(_f55*pos)),0);
_f40.css({"width":_f73+"px","height":_f74+"px"});
if(typeof _f51.opacity!=="undefined"){
wrap.css("opacity",(pos<0.5?0.5:pos));
}
},_f77=function(obj){
var pos=obj.offset();
pos.top+=parseFloat(obj.css("paddingTop"))||0;
pos.left+=parseFloat(obj.css("paddingLeft"))||0;
pos.top+=parseFloat(obj.css("border-top-width"))||0;
pos.left+=parseFloat(obj.css("border-left-width"))||0;
pos.width=obj.width();
pos.height=obj.height();
return pos;
},_f7a=function(){
var orig=_f45.orig?$(_f45.orig):false,from={},pos,view;
if(orig&&orig.length){
pos=_f77(orig);
from={width:(pos.width+(_f48.padding*2)),height:(pos.height+(_f48.padding*2)),top:(pos.top-_f48.padding-_f53),left:(pos.left-_f48.padding-_f53)};
}else{
view=_f59();
from={width:1,height:1,top:view[3]+view[1]*0.5,left:view[2]+view[0]*0.5};
}
return from;
},_f7f=function(){
_f3c.hide();
if(wrap.is(":visible")&&$.isFunction(_f48.onCleanup)){
if(_f48.onCleanup(_f49,_f47,_f48)===false){
$.event.trigger("fancybox-cancel");
busy=false;
return;
}
}
_f49=_f46;
_f47=_f44;
_f48=_f45;
_f40.get(0).scrollTop=0;
_f40.get(0).scrollLeft=0;
if(_f48.overlayShow){
if(_f56){
$("select:not(#fancybox-tmp select)").filter(function(){
return this.style.visibility!=="hidden";
}).css({"visibility":"hidden"}).one("fancybox-cleanup",function(){
this.style.visibility="inherit";
});
}
_f3d.css({"background-color":_f48.overlayColor,"opacity":_f48.overlayOpacity}).unbind().show();
}
_f51=_f5a();
_f65();
if(wrap.is(":visible")){
$(_f41.add(_f42).add(_f43)).hide();
var pos=wrap.position(),_f81;
_f50={top:pos.top,left:pos.left,width:wrap.width(),height:wrap.height()};
_f81=(_f50.width==_f51.width&&_f50.height==_f51.height);
_f40.fadeOut(_f48.changeFade,function(){
var _f82=function(){
_f40.html(tmp.contents()).fadeIn(_f48.changeFade,_f70);
};
$.event.trigger("fancybox-change");
_f40.empty().css("overflow","hidden");
if(_f81){
_f40.css({top:_f48.padding,left:_f48.padding,width:Math.max(_f51.width-(_f48.padding*2),1),height:Math.max(_f51.height-(_f48.padding*2)-_f55,1)});
_f82();
}else{
_f40.css({top:_f48.padding,left:_f48.padding,width:Math.max(_f50.width-(_f48.padding*2),1),height:Math.max(_f50.height-(_f48.padding*2),1)});
fx.prop=0;
$(fx).animate({prop:1},{duration:_f48.changeSpeed,easing:_f48.easingChange,step:_f71,complete:_f82});
}
});
return;
}
wrap.css("opacity",1);
if(_f48.transitionIn=="elastic"){
_f50=_f7a();
_f40.css({top:_f48.padding,left:_f48.padding,width:Math.max(_f50.width-(_f48.padding*2),1),height:Math.max(_f50.height-(_f48.padding*2),1)}).html(tmp.contents());
wrap.css(_f50).show();
if(_f48.opacity){
_f51.opacity=0;
}
fx.prop=0;
$(fx).animate({prop:1},{duration:_f48.speedIn,easing:_f48.easingIn,step:_f71,complete:_f70});
}else{
_f40.css({top:_f48.padding,left:_f48.padding,width:Math.max(_f51.width-(_f48.padding*2),1),height:Math.max(_f51.height-(_f48.padding*2)-_f55,1)}).html(tmp.contents());
wrap.css(_f51).fadeIn(_f48.transitionIn=="none"?0:_f48.speedIn,_f70);
}
},_f83=function(){
tmp.width(_f45.width);
tmp.height(_f45.height);
if(_f45.width=="auto"){
_f45.width=tmp.width();
}
if(_f45.height=="auto"){
_f45.height=tmp.height();
}
_f7f();
},_f84=function(){
busy=true;
_f45.width=_f4b.width;
_f45.height=_f4b.height;
$("<img />").attr({"id":"fancybox-img","src":_f4b.src,"alt":_f45.title}).appendTo(tmp);
_f7f();
},_f85=function(){
_f57();
var obj=_f46[_f44],href,type,_f89,str,emb,_f8c,data;
_f45=$.extend({},$.fn.fancybox.defaults,(typeof $(obj).data("fancybox")=="undefined"?_f45:$(obj).data("fancybox")));
_f89=obj.title||$(obj).title||_f45.title||"";
if(obj.nodeName&&!_f45.orig){
_f45.orig=$(obj).children("img:first").length?$(obj).children("img:first"):$(obj);
}
if(_f89===""&&_f45.orig){
_f89=_f45.orig.attr("alt");
}
if(obj.nodeName&&(/^(?:javascript|#)/i).test(jq(obj).attr("href"))){
lb=jq(obj).attr("data-lightbox");
href=lb||_f45.href||null;
}else{
href=_f45.href||obj.href||null;
}
if(typeof href=="function"){
href=href();
}
if(_f45.type){
type=_f45.type;
if(!href){
href=_f45.content;
}
}else{
if(_f45.content){
type="html";
}else{
if(href){
if(href.match(_f4c)){
type="image";
}else{
if(href.match(_f4d)){
type="swf";
}else{
if($(obj).hasClass("iframe")){
type="iframe";
}else{
if(href.match(/#/)){
obj=href.substr(href.indexOf("#"));
type=$(obj).length>0?"inline":"ajax";
}else{
type="ajax";
}
}
}
}
}else{
type="inline";
}
}
}
_f45.type=type;
_f45.href=href;
_f45.title=_f89;
if(_f45.autoDimensions&&_f45.type!=="iframe"&&_f45.type!=="swf"){
_f45.width="auto";
_f45.height="auto";
}
if(_f45.modal){
_f45.overlayShow=true;
_f45.hideOnOverlayClick=false;
_f45.hideOnContentClick=false;
_f45.enableEscapeButton=false;
_f45.showCloseButton=false;
}
if($.isFunction(_f45.onStart)){
if(_f45.onStart(_f46,_f44,_f45)===false){
busy=false;
return;
}
}
tmp.css("padding",(_f53+_f45.padding+_f45.margin));
$(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){
$(this).replaceWith(_f40.children());
});
switch(type){
case "html":
tmp.html(_f45.content);
_f83();
break;
case "inline":
$("<div class=\"fancybox-inline-tmp\" />").hide().insertBefore($(obj)).bind("fancybox-cleanup",function(){
$(this).replaceWith(_f40.children());
}).bind("fancybox-cancel",function(){
$(this).replaceWith(tmp.children());
});
$(obj).appendTo(tmp);
_f83();
break;
case "image":
busy=false;
$.fancybox.showActivity();
_f4b=new Image();
_f4b.onerror=function(){
_f58();
};
_f4b.onload=function(){
_f4b.onerror=null;
_f4b.onload=null;
_f84();
};
_f4b.src=href;
break;
case "swf":
str="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+_f45.width+"\" height=\""+_f45.height+"\"><param name=\"movie\" value=\""+href+"\"></param>";
emb="";
$.each(_f45.swf,function(name,val){
str+="<param name=\""+name+"\" value=\""+val+"\"></param>";
emb+=" "+name+"=\""+val+"\"";
});
str+="<embed src=\""+href+"\" type=\"application/x-shockwave-flash\" width=\""+_f45.width+"\" height=\""+_f45.height+"\""+emb+"></embed></object>";
tmp.html(str);
_f83();
break;
case "ajax":
_f8c=href.split("#",2);
data=_f45.ajax.data||{};
if(_f8c.length>1){
href=_f8c[0];
if(typeof data=="string"){
data+="&selector="+_f8c[1];
}else{
data.selector=_f8c[1];
}
}
busy=false;
$.fancybox.showActivity();
_f4a=$.ajax($.extend(_f45.ajax,{url:href,data:data,error:_f58,success:function(data,_f91,_f92){
if(_f4a.status==200){
tmp.html(data);
_f83();
}
}}));
break;
case "iframe":
$("<iframe id=\"fancybox-frame\" name=\"fancybox-frame"+new Date().getTime()+"\" frameborder=\"0\" hspace=\"0\" scrolling=\""+_f45.scrolling+"\" src=\""+_f45.href+"\"></iframe>").appendTo(tmp);
_f7f();
break;
}
},_f93=function(){
if(!_f3c.is(":visible")){
clearInterval(_f4e);
return;
}
$("div",_f3c).css("top",(_f4f*-40)+"px");
_f4f=(_f4f+1)%12;
},_f94=function(){
if($("#fancybox-wrap").length){
return;
}
$("body").append(tmp=$("<div id=\"fancybox-tmp\"></div>"),_f3c=$("<div id=\"fancybox-loading\"><div></div></div>"),_f3d=$("<div id=\"fancybox-overlay\"></div>"),wrap=$("<div id=\"fancybox-wrap\"></div>"));
if(!$.support.opacity){
wrap.addClass("fancybox-ie");
_f3c.addClass("fancybox-ie");
}
_f3f=$("<div id=\"fancybox-outer\"></div>").append("<div class=\"fancy-bg\" id=\"fancy-bg-n\"></div><div class=\"fancy-bg\" id=\"fancy-bg-ne\"></div><div class=\"fancy-bg\" id=\"fancy-bg-e\"></div><div class=\"fancy-bg\" id=\"fancy-bg-se\"></div><div class=\"fancy-bg\" id=\"fancy-bg-s\"></div><div class=\"fancy-bg\" id=\"fancy-bg-sw\"></div><div class=\"fancy-bg\" id=\"fancy-bg-w\"></div><div class=\"fancy-bg\" id=\"fancy-bg-nw\"></div>").appendTo(wrap);
_f3f.append(_f40=$("<div id=\"fancybox-inner\"></div>"),_f41=$("<a id=\"fancybox-close\"></a>"),_f42=$("<a href=\"javascript:;\" id=\"fancybox-left\"><span class=\"fancy-ico\" id=\"fancybox-left-ico\"></span></a>"),_f43=$("<a href=\"javascript:;\" id=\"fancybox-right\"><span class=\"fancy-ico\" id=\"fancybox-right-ico\"></span></a>"));
_f41.click($.fancybox.close);
_f3c.click($.fancybox.cancel);
_f42.click(function(e){
e.preventDefault();
$.fancybox.prev();
});
_f43.click(function(e){
e.preventDefault();
$.fancybox.next();
});
if(_f56){
_f3d.get(0).style.setExpression("height","document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");
_f3c.get(0).style.setExpression("top","(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");
_f3f.prepend("<iframe id=\"fancybox-hide-sel-frame\" src=\"javascript:'';\" scrolling=\"no\" frameborder=\"0\" ></iframe>");
}
};
$.fn.fancybox=function(_f97){
$(this).data("fancybox",$.extend({},_f97,($.metadata?$(this).metadata():{}))).unbind("click.fb").bind("click.fb",function(e){
e.preventDefault();
if(busy){
return;
}
busy=true;
$(this).blur();
_f46=[];
_f44=0;
var rel=$(this).attr("rel")||"";
if(!rel||rel==""||rel==="nofollow"){
_f46.push(this);
}else{
_f46=$("a[rel="+rel+"], area[rel="+rel+"]");
_f44=_f46.index(this);
}
_f85();
return false;
});
return this;
};
$.fancybox=function(obj){
if(busy){
return;
}
busy=true;
var opts=typeof arguments[1]!=="undefined"?arguments[1]:{};
_f46=[];
_f44=opts.index||0;
if($.isArray(obj)){
for(var i=0,j=obj.length;i<j;i++){
if(typeof obj[i]=="object"){
$(obj[i]).data("fancybox",$.extend({},opts,obj[i]));
}else{
obj[i]=$({}).data("fancybox",$.extend({content:obj[i]},opts));
}
}
_f46=jQuery.merge(_f46,obj);
}else{
if(typeof obj=="object"){
$(obj).data("fancybox",$.extend({},opts,obj));
}else{
obj=$({}).data("fancybox",$.extend({content:obj},opts));
}
_f46.push(obj);
}
if(_f44>_f46.length||_f44<0){
_f44=0;
}
_f85();
};
$.fancybox.showActivity=function(){
clearInterval(_f4e);
_f3c.show();
_f4e=setInterval(_f93,66);
};
$.fancybox.hideActivity=function(){
_f3c.hide();
};
$.fancybox.next=function(){
return $.fancybox.pos(_f47+1);
};
$.fancybox.prev=function(){
return $.fancybox.pos(_f47-1);
};
$.fancybox.pos=function(pos){
if(busy){
return;
}
pos=parseInt(pos,10);
if(pos>-1&&_f49.length>pos){
_f44=pos;
_f85();
}
if(_f48.cyclic&&_f49.length>1&&pos<0){
_f44=_f49.length-1;
_f85();
}
if(_f48.cyclic&&_f49.length>1&&pos>=_f49.length){
_f44=0;
_f85();
}
return;
};
$.fancybox.cancel=function(){
if(busy){
return;
}
busy=true;
$.event.trigger("fancybox-cancel");
_f57();
if(_f45&&$.isFunction(_f45.onCancel)){
_f45.onCancel(_f46,_f44,_f45);
}
busy=false;
};
$.fancybox.close=function(){
if(busy||wrap.is(":hidden")){
return;
}
busy=true;
if(_f48&&$.isFunction(_f48.onCleanup)){
if(_f48.onCleanup(_f49,_f47,_f48)===false){
busy=false;
return;
}
}
_f57();
$(_f41.add(_f42).add(_f43)).hide();
$("#fancybox-title").remove();
wrap.add(_f40).add(_f3d).unbind();
$(window).unbind("resize.fb scroll.fb");
$(document).unbind("keydown.fb");
function _cleanup(){
_f3d.fadeOut("fast");
wrap.hide();
$.event.trigger("fancybox-cleanup");
_f40.empty();
if($.isFunction(_f48.onClosed)){
_f48.onClosed(_f49,_f47,_f48);
}
_f49=_f45=[];
_f47=_f44=0;
_f48=_f45={};
busy=false;
};
_f40.css("overflow","hidden");
if(_f48.transitionOut=="elastic"){
_f50=_f7a();
var pos=wrap.position();
_f51={top:pos.top,left:pos.left,width:wrap.width(),height:wrap.height()};
if(_f48.opacity){
_f51.opacity=1;
}
fx.prop=1;
$(fx).animate({prop:0},{duration:_f48.speedOut,easing:_f48.easingOut,step:_f71,complete:_cleanup});
}else{
wrap.fadeOut(_f48.transitionOut=="none"?0:_f48.speedOut,_cleanup);
}
};
$.fancybox.resize=function(){
var c,h;
if(busy||wrap.is(":hidden")){
return;
}
busy=true;
c=_f40.wrapInner("<div style='overflow:auto'></div>").children();
h=c.height();
wrap.css({height:h+(_f48.padding*2)+_f55});
_f40.css({height:h});
c.replaceWith(c.children());
$.fancybox.center();
};
$.fancybox.center=function(){
busy=true;
var view=_f59(),_fa3=_f48.margin,to={};
to.top=view[3]+((view[1]-((wrap.height()-_f55)+(_f53*2)))*0.5);
to.left=view[2]+((view[0]-(wrap.width()+(_f53*2)))*0.5);
to.top=Math.max(view[3]+_fa3,to.top);
to.left=Math.max(view[2]+_fa3,to.left);
wrap.css(to);
busy=false;
};
$.fn.fancybox.defaults={padding:10,margin:20,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,minWidth:false,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.3,overlayColor:"#666",titleShow:true,titlePosition:"outside",titleFormat:null,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,onStart:null,onCancel:null,onComplete:null,onCleanup:null,onClosed:null};
$(document).ready(function(){
_f94();
});
})(jQuery);
(function(_fa5,_fa6){
var _fa7=_fa5.document;
(function(){
var _fa8=false,_fa9=/xyz/.test(function(){
xyz;
})?/\b_super\b/:/.*/;
this.JRClass=function(){
};
JRClass.extend=function(prop){
var _fab=this.prototype;
_fa8=true;
var _fac=new this();
_fa8=false;
for(var name in prop){
_fac[name]=typeof prop[name]=="function"&&typeof _fab[name]=="function"&&_fa9.test(prop[name])?(function(name,fn){
return function(){
var tmp=this._super;
this._super=_fab[name];
var ret=fn.apply(this,arguments);
this._super=tmp;
return ret;
};
})(name,prop[name]):prop[name];
}
function JRClass(){
if(!_fa8&&this.init){
this.init.apply(this,arguments);
}
};
JRClass.prototype=_fac;
JRClass.constructor=JRClass;
JRClass.extend=arguments.callee;
return JRClass;
};
})();
var _fb2=JRClass.extend({init:function(_fb3,_fb4){
if(typeof _fb3=="string"){
this.video=_fa7.getElementById(_fb3);
}else{
this.video=_fb3;
}
this.video.player=this;
this.values={};
this.elements={};
this.options={autoplay:false,preload:true,useBuiltInControls:false,controlsBelow:false,controlsAtStart:false,controlsHiding:true,defaultVolume:0.85,playerFallbackOrder:["html5","flash","links"],flashPlayer:"htmlObject",flashPlayerVersion:false};
if(typeof _fb2.options=="object"){
_V_.merge(this.options,_fb2.options);
}
if(typeof _fb4=="object"){
_V_.merge(this.options,_fb4);
}
if(this.getPreloadAttribute()!==_fa6){
this.options.preload=this.getPreloadAttribute();
}
if(this.getAutoplayAttribute()!==_fa6){
this.options.autoplay=this.getAutoplayAttribute();
}
this.box=this.video.parentNode;
this.linksFallback=this.getLinksFallback();
this.hideLinksFallback();
this.each(this.options.playerFallbackOrder,function(_fb5){
if(this[_fb5+"Supported"]()){
this[_fb5+"Init"]();
return true;
}
});
this.activateElement(this,"player");
this.activateElement(this.box,"box");
},behaviors:{},newBehavior:function(name,_fb7,_fb8){
this.behaviors[name]=_fb7;
this.extend(_fb8);
},activateElement:function(_fb9,_fba){
if(typeof _fb9=="string"){
_fb9=_fa7.getElementById(_fb9);
}
this.behaviors[_fba].call(this,_fb9);
},errors:[],warnings:[],warning:function(_fbb){
this.warnings.push(_fbb);
this.log(_fbb);
},history:[],log:function(_fbc){
if(!_fbc){
return;
}
if(typeof _fbc=="string"){
_fbc={type:_fbc};
}
if(_fbc.type){
this.history.push(_fbc.type);
}
if(this.history.length>=50){
this.history.shift();
}
try{
console.log(_fbc.type);
}
catch(e){
try{
opera.postError(_fbc.type);
}
catch(e){
}
}
},setLocalStorage:function(key,_fbe){
if(!localStorage){
return;
}
try{
localStorage[key]=_fbe;
}
catch(e){
if(e.code==22||e.code==1014){
this.warning(_fb2.warnings.localStorageFull);
}
}
},getPreloadAttribute:function(){
if(typeof this.video.hasAttribute=="function"&&this.video.hasAttribute("preload")){
var _fbf=this.video.getAttribute("preload");
if(_fbf===""||_fbf==="true"){
return "auto";
}
if(_fbf==="false"){
return "none";
}
return _fbf;
}
},getAutoplayAttribute:function(){
if(typeof this.video.hasAttribute=="function"&&this.video.hasAttribute("autoplay")){
var _fc0=this.video.getAttribute("autoplay");
if(_fc0==="false"){
return false;
}
return true;
}
},bufferedPercent:function(){
return (this.duration())?this.buffered()[1]/this.duration():0;
},each:function(arr,fn){
if(!arr||arr.length===0){
return;
}
for(var i=0,j=arr.length;i<j;i++){
if(fn.call(this,arr[i],i)){
break;
}
}
},extend:function(obj){
for(var _fc6 in obj){
if(obj.hasOwnProperty(_fc6)){
this[_fc6]=obj[_fc6];
}
}
}});
_fb2.player=_fb2.prototype;
_fb2.player.extend({flashSupported:function(){
if(!this.flashElement){
this.flashElement=this.getFlashElement();
}
if(this.flashElement&&this.flashPlayerVersionSupported()){
return true;
}else{
return false;
}
},flashInit:function(){
this.replaceWithFlash();
this.element=this.flashElement;
this.video.src="";
var _fc7=_fb2.flashPlayers[this.options.flashPlayer];
this.extend(_fb2.flashPlayers[this.options.flashPlayer].api);
(_fc7.init.context(this))();
},getFlashElement:function(){
var _fc8=this.video.children;
for(var i=0,j=_fc8.length;i<j;i++){
if(_fc8[i].className=="vjs-flash-fallback"){
return _fc8[i];
}
}
},replaceWithFlash:function(){
if(this.flashElement){
this.box.insertBefore(this.flashElement,this.video);
this.video.style.display="none";
}
},flashPlayerVersionSupported:function(){
var _fcb=(this.options.flashPlayerVersion)?this.options.flashPlayerVersion:_fb2.flashPlayers[this.options.flashPlayer].flashPlayerVersion;
return _fb2.getFlashVersion()>=_fcb;
}});
_fb2.flashPlayers={};
_fb2.flashPlayers.htmlObject={flashPlayerVersion:9,init:function(){
return true;
},api:{width:function(_fcc){
if(_fcc!==_fa6){
this.element.width=_fcc;
this.box.style.width=_fcc+"px";
this.triggerResizeListeners();
return this;
}
return this.element.width;
},height:function(_fcd){
if(_fcd!==_fa6){
this.element.height=_fcd;
this.box.style.height=_fcd+"px";
this.triggerResizeListeners();
return this;
}
return this.element.height;
}}};
_fb2.player.extend({linksSupported:function(){
return true;
},linksInit:function(){
this.showLinksFallback();
this.element=this.video;
},getLinksFallback:function(){
return this.box.getElementsByTagName("P")[0];
},hideLinksFallback:function(){
if(this.linksFallback){
this.linksFallback.style.display="none";
}
},showLinksFallback:function(){
if(this.linksFallback){
this.linksFallback.style.display="block";
}
}});
_fb2.merge=function(obj1,obj2,safe){
for(var _fd1 in obj2){
if(obj2.hasOwnProperty(_fd1)&&(!safe||!obj1.hasOwnProperty(_fd1))){
obj1[_fd1]=obj2[_fd1];
}
}
return obj1;
};
_fb2.extend=function(obj){
this.merge(this,obj,true);
};
_fb2.extend({setupAllWhenReady:function(_fd3){
_fb2.options=_fd3;
_fb2.DOMReady(_fb2.setup);
},DOMReady:function(fn){
_fb2.addToDOMReady(fn);
},setup:function(_fd5,_fd6){
var _fd7=false,_fd8=[],_fd9;
if(!_fd5||_fd5=="All"){
_fd5=_fb2.getVideoJSTags();
}else{
if(typeof _fd5!="object"||_fd5.nodeType==1){
_fd5=[_fd5];
_fd7=true;
}
}
for(var i=0;i<_fd5.length;i++){
if(typeof _fd5[i]=="string"){
_fd9=_fa7.getElementById(_fd5[i]);
}else{
_fd9=_fd5[i];
}
_fd8.push(new _fb2(_fd9,_fd6));
}
return (_fd7)?_fd8[0]:_fd8;
},getVideoJSTags:function(){
var _fdb=_fa7.getElementsByTagName("video"),_fdc=[],_fdd;
for(var i=0,j=_fdb.length;i<j;i++){
_fdd=_fdb[i];
if(_fdd.className.indexOf("video-js")!=-1){
_fdc.push(_fdd);
}
}
return _fdc;
},browserSupportsVideo:function(){
if(typeof _fb2.videoSupport!="undefined"){
return _fb2.videoSupport;
}
_fb2.videoSupport=!!_fa7.createElement("video").canPlayType;
return _fb2.videoSupport;
},getFlashVersion:function(){
if(typeof _fb2.flashVersion!="undefined"){
return _fb2.flashVersion;
}
var _fe0=0,desc;
if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]=="object"){
desc=navigator.plugins["Shockwave Flash"].description;
if(desc&&!(typeof navigator.mimeTypes!="undefined"&&navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)){
_fe0=parseInt(desc.match(/^.*\s+([^\s]+)\.[^\s]+\s+[^\s]+$/)[1],10);
}
}else{
if(typeof _fa5.ActiveXObject!="undefined"){
try{
var _fe2=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
if(_fe2){
_fe0=parseInt(_fe2.GetVariable("$version").match(/^[^\s]+\s(\d+)/)[1],10);
}
}
catch(e){
}
}
}
_fb2.flashVersion=_fe0;
return _fb2.flashVersion;
},isIE:function(){
return !+"\v1";
},isIPad:function(){
return navigator.userAgent.match(/iPad/i)!==null;
},isIPhone:function(){
return navigator.userAgent.match(/iPhone/i)!==null;
},isIOS:function(){
return _fb2.isIPhone()||_fb2.isIPad();
},iOSVersion:function(){
var _fe3=navigator.userAgent.match(/OS (\d+)_/i);
if(_fe3&&_fe3[1]){
return _fe3[1];
}
},isAndroid:function(){
return navigator.userAgent.match(/Android/i)!==null;
},androidVersion:function(){
var _fe4=navigator.userAgent.match(/Android (\d+)\./i);
if(_fe4&&_fe4[1]){
return _fe4[1];
}
},warnings:{videoNotReady:"Video is not ready yet (try playing the video first).",localStorageFull:"Local Storage is Full"}});
if(_fb2.isIE()){
_fa7.createElement("video");
}
_fa5.VideoJS=_fa5._V_=_fb2;
_fb2.player.extend({html5Supported:function(){
if(_fb2.browserSupportsVideo()&&this.canPlaySource()){
return true;
}else{
return false;
}
},html5Init:function(){
this.element=this.video;
this.fixPreloading();
this.supportProgressEvents();
this.volume((localStorage&&localStorage.volume)||this.options.defaultVolume);
if(_fb2.isIOS()){
this.options.useBuiltInControls=true;
this.iOSInterface();
}else{
if(_fb2.isAndroid()){
this.options.useBuiltInControls=true;
this.androidInterface();
}
}
if(!this.options.useBuiltInControls){
this.video.controls=false;
if(this.options.controlsBelow){
_V_.addClass(this.box,"vjs-controls-below");
}
this.activateElement(this.video,"playToggle");
this.buildStylesCheckDiv();
this.buildAndActivatePoster();
this.buildBigPlayButton();
this.buildAndActivateSpinner();
this.buildAndActivateControlBar();
this.loadInterface();
this.getSubtitles();
}
},canPlaySource:function(){
if(this.canPlaySourceResult){
return this.canPlaySourceResult;
}
var _fe5=this.video.children;
for(var i=0,j=_fe5.length;i<j;i++){
if(_fe5[i].tagName.toUpperCase()=="SOURCE"){
var _fe8=this.video.canPlayType(_fe5[i].type)||this.canPlayExt(_fe5[i].src);
if(_fe8=="probably"||_fe8=="maybe"){
this.firstPlayableSource=_fe5[i];
this.canPlaySourceResult=true;
return true;
}
}
}
this.canPlaySourceResult=false;
return false;
},canPlayExt:function(src){
if(!src){
return "";
}
var _fea=src.match(/\.([^\.]+)$/);
if(_fea&&_fea[1]){
var ext=_fea[1].toLowerCase();
if(_fb2.isAndroid()){
if(ext=="mp4"||ext=="m4v"){
return "maybe";
}
}else{
if(_fb2.isIOS()){
if(ext=="m3u8"){
return "maybe";
}
}
}
}
return "";
},forceTheSource:function(){
this.video.src=this.firstPlayableSource.src;
this.video.load();
},fixPreloading:function(){
if(typeof this.video.hasAttribute=="function"&&this.video.hasAttribute("preload")&&this.video.preload!="none"){
this.video.autobuffer=true;
}else{
this.video.autobuffer=false;
this.video.preload="none";
}
},supportProgressEvents:function(e){
_V_.addListener(this.video,"progress",this.playerOnVideoProgress.context(this));
},playerOnVideoProgress:function(_fed){
this.setBufferedFromProgress(_fed);
},setBufferedFromProgress:function(_fee){
if(_fee.total>0){
var _fef=(_fee.loaded/_fee.total)*this.duration();
if(_fef>this.values.bufferEnd){
this.values.bufferEnd=_fef;
}
}
},iOSInterface:function(){
if(_fb2.iOSVersion()<4){
this.forceTheSource();
}
if(_fb2.isIPad()){
this.buildAndActivateSpinner();
}
},androidInterface:function(){
this.forceTheSource();
_V_.addListener(this.video,"click",function(){
this.play();
});
this.buildBigPlayButton();
_V_.addListener(this.bigPlayButton,"click",function(){
this.play();
}.context(this));
this.positionBox();
this.showBigPlayButtons();
},loadInterface:function(){
if(!this.stylesHaveLoaded()){
if(!this.positionRetries){
this.positionRetries=1;
}
if(this.positionRetries++<100){
setTimeout(this.loadInterface.context(this),10);
return;
}
}
this.hideStylesCheckDiv();
this.showPoster();
if(this.video.paused!==false){
this.showBigPlayButtons();
}
if(this.options.controlsAtStart){
this.showControlBars();
}
this.positionAll();
},buildAndActivateControlBar:function(){
this.controls=_V_.createElement("div",{className:"vjs-controls"});
this.box.appendChild(this.controls);
this.activateElement(this.controls,"controlBar");
this.activateElement(this.controls,"mouseOverVideoReporter");
this.playControl=_V_.createElement("div",{className:"vjs-play-control",innerHTML:"<span></span>"});
this.controls.appendChild(this.playControl);
this.activateElement(this.playControl,"playToggle");
this.progressControl=_V_.createElement("div",{className:"vjs-progress-control"});
this.controls.appendChild(this.progressControl);
this.progressHolder=_V_.createElement("div",{className:"vjs-progress-holder"});
this.progressControl.appendChild(this.progressHolder);
this.activateElement(this.progressHolder,"currentTimeScrubber");
this.loadProgressBar=_V_.createElement("div",{className:"vjs-load-progress"});
this.progressHolder.appendChild(this.loadProgressBar);
this.activateElement(this.loadProgressBar,"loadProgressBar");
this.playProgressBar=_V_.createElement("div",{className:"vjs-play-progress"});
this.progressHolder.appendChild(this.playProgressBar);
this.activateElement(this.playProgressBar,"playProgressBar");
this.timeControl=_V_.createElement("div",{className:"vjs-time-control"});
this.controls.appendChild(this.timeControl);
this.currentTimeDisplay=_V_.createElement("span",{className:"vjs-current-time-display",innerHTML:"00:00"});
this.timeControl.appendChild(this.currentTimeDisplay);
this.activateElement(this.currentTimeDisplay,"currentTimeDisplay");
this.timeSeparator=_V_.createElement("span",{innerHTML:" / "});
this.timeControl.appendChild(this.timeSeparator);
this.durationDisplay=_V_.createElement("span",{className:"vjs-duration-display",innerHTML:"00:00"});
this.timeControl.appendChild(this.durationDisplay);
this.activateElement(this.durationDisplay,"durationDisplay");
this.volumeControl=_V_.createElement("div",{className:"vjs-volume-control",innerHTML:"<div><span></span><span></span><span></span><span></span><span></span><span></span></div>"});
this.controls.appendChild(this.volumeControl);
this.activateElement(this.volumeControl,"volumeScrubber");
this.volumeDisplay=this.volumeControl.children[0];
this.activateElement(this.volumeDisplay,"volumeDisplay");
this.fullscreenControl=_V_.createElement("div",{className:"vjs-fullscreen-control",innerHTML:"<div><span></span><span></span><span></span><span></span></div>"});
this.controls.appendChild(this.fullscreenControl);
this.activateElement(this.fullscreenControl,"fullscreenToggle");
},buildAndActivatePoster:function(){
this.updatePosterSource();
if(this.video.poster){
this.poster=_fa7.createElement("img");
this.box.appendChild(this.poster);
this.poster.src=this.video.poster;
this.poster.className="vjs-poster";
this.activateElement(this.poster,"poster");
}else{
this.poster=false;
}
},buildBigPlayButton:function(){
this.bigPlayButton=_V_.createElement("div",{className:"vjs-big-play-button",innerHTML:"<span></span>"});
this.box.appendChild(this.bigPlayButton);
this.activateElement(this.bigPlayButton,"bigPlayButton");
},buildAndActivateSpinner:function(){
this.spinner=_V_.createElement("div",{className:"vjs-spinner",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"});
this.box.appendChild(this.spinner);
this.activateElement(this.spinner,"spinner");
},buildStylesCheckDiv:function(){
this.stylesCheckDiv=_V_.createElement("div",{className:"vjs-styles-check"});
this.stylesCheckDiv.style.position="absolute";
this.box.appendChild(this.stylesCheckDiv);
},hideStylesCheckDiv:function(){
this.stylesCheckDiv.style.display="none";
},stylesHaveLoaded:function(){
if(this.stylesCheckDiv.offsetHeight!=5){
return false;
}else{
return true;
}
},positionAll:function(){
this.positionBox();
this.positionControlBars();
this.positionPoster();
},positionBox:function(){
if(this.videoIsFullScreen){
this.box.style.width="";
this.element.style.height="";
if(this.options.controlsBelow){
this.box.style.height="";
this.element.style.height=(this.box.offsetHeight-this.controls.offsetHeight)+"px";
}
}else{
this.box.style.width=this.width()+"px";
this.element.style.height=this.height()+"px";
if(this.options.controlsBelow){
this.element.style.height="";
}
}
},getSubtitles:function(){
var _ff0=this.video.getElementsByTagName("TRACK");
for(var i=0,j=_ff0.length;i<j;i++){
if(_ff0[i].getAttribute("kind")=="subtitles"&&_ff0[i].getAttribute("src")){
this.subtitlesSource=_ff0[i].getAttribute("src");
this.loadSubtitles();
this.buildSubtitles();
}
}
},loadSubtitles:function(){
_V_.get(this.subtitlesSource,this.parseSubtitles.context(this));
},parseSubtitles:function(_ff3){
var _ff4=_ff3.split("\n"),line="",_ff6,time,text;
this.subtitles=[];
this.currentSubtitle=false;
this.lastSubtitleIndex=0;
for(var i=0;i<_ff4.length;i++){
line=_V_.trim(_ff4[i]);
if(line){
_ff6={id:line,index:this.subtitles.length};
line=_V_.trim(_ff4[++i]);
time=line.split(" --> ");
_ff6.start=this.parseSubtitleTime(time[0]);
_ff6.end=this.parseSubtitleTime(time[1]);
text=[];
for(var j=i;j<_ff4.length;j++){
line=_V_.trim(_ff4[++i]);
if(!line){
break;
}
text.push(line);
}
_ff6.text=text.join("<br/>");
this.subtitles.push(_ff6);
}
}
},parseSubtitleTime:function(_ffb){
var _ffc=_ffb.split(":"),time=0;
time+=parseFloat(_ffc[0])*60*60;
time+=parseFloat(_ffc[1])*60;
var _ffe=_ffc[2].split(/\.|,/);
time+=parseFloat(_ffe[0]);
ms=parseFloat(_ffe[1]);
if(ms){
time+=ms/1000;
}
return time;
},buildSubtitles:function(){
this.subtitlesDisplay=_V_.createElement("div",{className:"vjs-subtitles"});
this.box.appendChild(this.subtitlesDisplay);
this.activateElement(this.subtitlesDisplay,"subtitlesDisplay");
},addVideoListener:function(type,fn){
_V_.addListener(this.video,type,fn.rEvtContext(this));
},play:function(){
this.video.play();
return this;
},onPlay:function(fn){
this.addVideoListener("play",fn);
return this;
},pause:function(){
this.video.pause();
return this;
},onPause:function(fn){
this.addVideoListener("pause",fn);
return this;
},paused:function(){
return this.video.paused;
},currentTime:function(_1003){
if(_1003!==_fa6){
try{
this.video.currentTime=_1003;
}
catch(e){
this.warning(_fb2.warnings.videoNotReady);
}
this.values.currentTime=_1003;
return this;
}
return this.video.currentTime;
},onCurrentTimeUpdate:function(fn){
this.currentTimeListeners.push(fn);
},duration:function(){
return this.video.duration;
},buffered:function(){
if(this.values.bufferStart===_fa6){
this.values.bufferStart=0;
this.values.bufferEnd=0;
}
if(this.video.buffered&&this.video.buffered.length>0){
var _1005=this.video.buffered.end(0);
if(_1005>this.values.bufferEnd){
this.values.bufferEnd=_1005;
}
}
return [this.values.bufferStart,this.values.bufferEnd];
},volume:function(_1006){
if(_1006!==_fa6){
this.values.volume=Math.max(0,Math.min(1,parseFloat(_1006)));
this.video.volume=this.values.volume;
this.setLocalStorage("volume",this.values.volume);
return this;
}
if(this.values.volume){
return this.values.volume;
}
return this.video.volume;
},onVolumeChange:function(fn){
_V_.addListener(this.video,"volumechange",fn.rEvtContext(this));
},width:function(width){
if(width!==_fa6){
this.video.width=width;
this.box.style.width=width+"px";
this.triggerResizeListeners();
return this;
}
return this.video.offsetWidth;
},height:function(_1009){
if(_1009!==_fa6){
this.video.height=_1009;
this.box.style.height=_1009+"px";
this.triggerResizeListeners();
return this;
}
return this.video.offsetHeight;
},supportsFullScreen:function(){
if(typeof this.video.webkitEnterFullScreen=="function"){
if(!navigator.userAgent.match("Chrome")&&!navigator.userAgent.match("Mac OS X 10.5")){
return true;
}
}
return false;
},html5EnterNativeFullScreen:function(){
try{
this.video.webkitEnterFullScreen();
}
catch(e){
if(e.code==11){
this.warning(_fb2.warnings.videoNotReady);
}
}
return this;
},enterFullScreen:function(){
if(this.supportsFullScreen()){
this.html5EnterNativeFullScreen();
}else{
this.enterFullWindow();
}
},exitFullScreen:function(){
if(this.supportsFullScreen()){
}else{
this.exitFullWindow();
}
},enterFullWindow:function(){
this.videoIsFullScreen=true;
this.docOrigOverflow=_fa7.documentElement.style.overflow;
_V_.addListener(_fa7,"keydown",this.fullscreenOnEscKey.rEvtContext(this));
_V_.addListener(_fa5,"resize",this.fullscreenOnWindowResize.rEvtContext(this));
_fa7.documentElement.style.overflow="hidden";
_V_.addClass(this.box,"vjs-fullscreen");
this.positionAll();
},exitFullWindow:function(){
this.videoIsFullScreen=false;
_fa7.removeEventListener("keydown",this.fullscreenOnEscKey,false);
_fa5.removeEventListener("resize",this.fullscreenOnWindowResize,false);
_fa7.documentElement.style.overflow=this.docOrigOverflow;
_V_.removeClass(this.box,"vjs-fullscreen");
this.positionAll();
},onError:function(fn){
this.addVideoListener("error",fn);
return this;
},onEnded:function(fn){
this.addVideoListener("ended",fn);
return this;
}});
_fb2.player.newBehavior("player",function(_100c){
this.onError(this.playerOnVideoError);
this.onPlay(this.playerOnVideoPlay);
this.onPlay(this.trackCurrentTime);
this.onPause(this.playerOnVideoPause);
this.onPause(this.stopTrackingCurrentTime);
this.onEnded(this.playerOnVideoEnded);
this.trackBuffered();
this.onBufferedUpdate(this.isBufferFull);
},{playerOnVideoError:function(event){
this.log(event);
this.log(this.video.error);
},playerOnVideoPlay:function(event){
this.hasPlayed=true;
},playerOnVideoPause:function(event){
},playerOnVideoEnded:function(event){
this.currentTime(0);
this.pause();
},trackBuffered:function(){
this.bufferedInterval=setInterval(this.triggerBufferedListeners.context(this),500);
},stopTrackingBuffered:function(){
clearInterval(this.bufferedInterval);
},bufferedListeners:[],onBufferedUpdate:function(fn){
this.bufferedListeners.push(fn);
},triggerBufferedListeners:function(){
this.isBufferFull();
this.each(this.bufferedListeners,function(_1012){
(_1012.context(this))();
});
},isBufferFull:function(){
if(this.bufferedPercent()==1){
this.stopTrackingBuffered();
}
},trackCurrentTime:function(){
if(this.currentTimeInterval){
clearInterval(this.currentTimeInterval);
}
this.currentTimeInterval=setInterval(this.triggerCurrentTimeListeners.context(this),100);
this.trackingCurrentTime=true;
},stopTrackingCurrentTime:function(){
clearInterval(this.currentTimeInterval);
this.trackingCurrentTime=false;
},currentTimeListeners:[],triggerCurrentTimeListeners:function(late,_1014){
this.each(this.currentTimeListeners,function(_1015){
(_1015.context(this))(_1014||this.currentTime());
});
},resizeListeners:[],onResize:function(fn){
this.resizeListeners.push(fn);
},triggerResizeListeners:function(){
this.each(this.resizeListeners,function(_1017){
(_1017.context(this))();
});
}});
_fb2.player.newBehavior("mouseOverVideoReporter",function(_1018){
_V_.addListener(_1018,"mousemove",this.mouseOverVideoReporterOnMouseMove.context(this));
_V_.addListener(_1018,"mouseout",this.mouseOverVideoReporterOnMouseOut.context(this));
},{mouseOverVideoReporterOnMouseMove:function(){
this.showControlBars();
clearInterval(this.mouseMoveTimeout);
this.mouseMoveTimeout=setTimeout(this.hideControlBars.context(this),4000);
},mouseOverVideoReporterOnMouseOut:function(event){
var _101a=event.relatedTarget;
while(_101a&&_101a!==this.box){
_101a=_101a.parentNode;
}
if(_101a!==this.box){
this.hideControlBars();
}
}});
_fb2.player.newBehavior("box",function(_101b){
this.positionBox();
_V_.addClass(_101b,"vjs-paused");
this.activateElement(_101b,"mouseOverVideoReporter");
this.onPlay(this.boxOnVideoPlay);
this.onPause(this.boxOnVideoPause);
},{boxOnVideoPlay:function(){
_V_.removeClass(this.box,"vjs-paused");
_V_.addClass(this.box,"vjs-playing");
},boxOnVideoPause:function(){
_V_.removeClass(this.box,"vjs-playing");
_V_.addClass(this.box,"vjs-paused");
}});
_fb2.player.newBehavior("poster",function(_101c){
this.activateElement(_101c,"mouseOverVideoReporter");
this.activateElement(_101c,"playButton");
this.onPlay(this.hidePoster);
this.onEnded(this.showPoster);
this.onResize(this.positionPoster);
},{showPoster:function(){
if(!this.poster){
return;
}
this.poster.style.display="block";
this.positionPoster();
},positionPoster:function(){
if(!this.poster||this.poster.style.display=="none"){
return;
}
this.poster.style.height=this.height()+"px";
this.poster.style.width=this.width()+"px";
},hidePoster:function(){
if(!this.poster){
return;
}
this.poster.style.display="none";
},updatePosterSource:function(){
if(!this.video.poster){
var _101d=this.video.getElementsByTagName("img");
if(_101d.length>0){
this.video.poster=_101d[0].src;
}
}
}});
_fb2.player.newBehavior("controlBar",function(_101e){
if(!this.controlBars){
this.controlBars=[];
this.onResize(this.positionControlBars);
}
this.controlBars.push(_101e);
_V_.addListener(_101e,"mousemove",this.onControlBarsMouseMove.context(this));
_V_.addListener(_101e,"mouseout",this.onControlBarsMouseOut.context(this));
},{showControlBars:function(){
if(!this.options.controlsAtStart&&!this.hasPlayed){
return;
}
this.each(this.controlBars,function(bar){
bar.style.display="block";
});
},positionControlBars:function(){
this.updatePlayProgressBars();
this.updateLoadProgressBars();
},hideControlBars:function(){
if(this.options.controlsHiding&&!this.mouseIsOverControls){
this.each(this.controlBars,function(bar){
bar.style.display="none";
});
}
},onControlBarsMouseMove:function(){
this.mouseIsOverControls=true;
},onControlBarsMouseOut:function(event){
this.mouseIsOverControls=false;
}});
_fb2.player.newBehavior("playToggle",function(_1022){
if(!this.elements.playToggles){
this.elements.playToggles=[];
this.onPlay(this.playTogglesOnPlay);
this.onPause(this.playTogglesOnPause);
}
this.elements.playToggles.push(_1022);
_V_.addListener(_1022,"click",this.onPlayToggleClick.context(this));
},{onPlayToggleClick:function(event){
if(this.paused()){
this.play();
}else{
this.pause();
}
},playTogglesOnPlay:function(event){
this.each(this.elements.playToggles,function(_1025){
_V_.removeClass(_1025,"vjs-paused");
_V_.addClass(_1025,"vjs-playing");
});
},playTogglesOnPause:function(event){
this.each(this.elements.playToggles,function(_1027){
_V_.removeClass(_1027,"vjs-playing");
_V_.addClass(_1027,"vjs-paused");
});
}});
_fb2.player.newBehavior("playButton",function(_1028){
_V_.addListener(_1028,"click",this.onPlayButtonClick.context(this));
},{onPlayButtonClick:function(event){
this.play();
}});
_fb2.player.newBehavior("pauseButton",function(_102a){
_V_.addListener(_102a,"click",this.onPauseButtonClick.context(this));
},{onPauseButtonClick:function(event){
this.pause();
}});
_fb2.player.newBehavior("playProgressBar",function(_102c){
if(!this.playProgressBars){
this.playProgressBars=[];
this.onCurrentTimeUpdate(this.updatePlayProgressBars);
}
this.playProgressBars.push(_102c);
},{updatePlayProgressBars:function(_102d){
var _102e=(_102d!==_fa6)?_102d/this.duration():this.currentTime()/this.duration();
if(isNaN(_102e)){
_102e=0;
}
this.each(this.playProgressBars,function(bar){
if(bar.style){
bar.style.width=_V_.round(_102e*100,2)+"%";
}
});
}});
_fb2.player.newBehavior("loadProgressBar",function(_1030){
if(!this.loadProgressBars){
this.loadProgressBars=[];
}
this.loadProgressBars.push(_1030);
this.onBufferedUpdate(this.updateLoadProgressBars);
},{updateLoadProgressBars:function(){
this.each(this.loadProgressBars,function(bar){
if(bar.style){
bar.style.width=_V_.round(this.bufferedPercent()*100,2)+"%";
}
});
}});
_fb2.player.newBehavior("currentTimeDisplay",function(_1032){
if(!this.currentTimeDisplays){
this.currentTimeDisplays=[];
this.onCurrentTimeUpdate(this.updateCurrentTimeDisplays);
}
this.currentTimeDisplays.push(_1032);
},{updateCurrentTimeDisplays:function(_1033){
if(!this.currentTimeDisplays){
return;
}
var time=(_1033)?_1033:this.currentTime();
this.each(this.currentTimeDisplays,function(dis){
dis.innerHTML=_V_.formatTime(time);
});
}});
_fb2.player.newBehavior("durationDisplay",function(_1036){
if(!this.durationDisplays){
this.durationDisplays=[];
this.onCurrentTimeUpdate(this.updateDurationDisplays);
}
this.durationDisplays.push(_1036);
},{updateDurationDisplays:function(){
if(!this.durationDisplays){
return;
}
this.each(this.durationDisplays,function(dis){
if(this.duration()){
dis.innerHTML=_V_.formatTime(this.duration());
}
});
}});
_fb2.player.newBehavior("currentTimeScrubber",function(_1038){
_V_.addListener(_1038,"mousedown",this.onCurrentTimeScrubberMouseDown.rEvtContext(this));
},{onCurrentTimeScrubberMouseDown:function(event,_103a){
event.preventDefault();
this.currentScrubber=_103a;
this.stopTrackingCurrentTime();
this.videoWasPlaying=!this.paused();
this.pause();
_V_.blockTextSelection();
this.setCurrentTimeWithScrubber(event);
_V_.addListener(_fa7,"mousemove",this.onCurrentTimeScrubberMouseMove.rEvtContext(this));
_V_.addListener(_fa7,"mouseup",this.onCurrentTimeScrubberMouseUp.rEvtContext(this));
},onCurrentTimeScrubberMouseMove:function(event){
this.setCurrentTimeWithScrubber(event);
},onCurrentTimeScrubberMouseUp:function(event){
_V_.unblockTextSelection();
_fa7.removeEventListener("mousemove",this.onCurrentTimeScrubberMouseMove,false);
_fa7.removeEventListener("mouseup",this.onCurrentTimeScrubberMouseUp,false);
if(this.videoWasPlaying){
this.play();
this.trackCurrentTime();
}
},setCurrentTimeWithScrubber:function(event){
var _103e=_V_.getRelativePosition(event.pageX,this.currentScrubber);
var _103f=_103e*this.duration();
this.triggerCurrentTimeListeners(0,_103f);
if(_103f==this.duration()){
_103f=_103f-0.1;
}
this.currentTime(_103f);
}});
_fb2.player.newBehavior("volumeDisplay",function(_1040){
if(!this.volumeDisplays){
this.volumeDisplays=[];
this.onVolumeChange(this.updateVolumeDisplays);
}
this.volumeDisplays.push(_1040);
this.updateVolumeDisplay(_1040);
},{updateVolumeDisplays:function(){
if(!this.volumeDisplays){
return;
}
this.each(this.volumeDisplays,function(dis){
this.updateVolumeDisplay(dis);
});
},updateVolumeDisplay:function(_1042){
var _1043=Math.ceil(this.volume()*6);
this.each(_1042.children,function(child,num){
if(num<_1043){
_V_.addClass(child,"vjs-volume-level-on");
}else{
_V_.removeClass(child,"vjs-volume-level-on");
}
});
}});
_fb2.player.newBehavior("volumeScrubber",function(_1046){
_V_.addListener(_1046,"mousedown",this.onVolumeScrubberMouseDown.rEvtContext(this));
},{onVolumeScrubberMouseDown:function(event,_1048){
_V_.blockTextSelection();
this.currentScrubber=_1048;
this.setVolumeWithScrubber(event);
_V_.addListener(_fa7,"mousemove",this.onVolumeScrubberMouseMove.rEvtContext(this));
_V_.addListener(_fa7,"mouseup",this.onVolumeScrubberMouseUp.rEvtContext(this));
},onVolumeScrubberMouseMove:function(event){
this.setVolumeWithScrubber(event);
},onVolumeScrubberMouseUp:function(event){
this.setVolumeWithScrubber(event);
_V_.unblockTextSelection();
_fa7.removeEventListener("mousemove",this.onVolumeScrubberMouseMove,false);
_fa7.removeEventListener("mouseup",this.onVolumeScrubberMouseUp,false);
},setVolumeWithScrubber:function(event){
var _104c=_V_.getRelativePosition(event.pageX,this.currentScrubber);
this.volume(_104c);
}});
_fb2.player.newBehavior("fullscreenToggle",function(_104d){
_V_.addListener(_104d,"click",this.onFullscreenToggleClick.context(this));
},{onFullscreenToggleClick:function(event){
if(!this.videoIsFullScreen){
this.enterFullScreen();
}else{
this.exitFullScreen();
}
},fullscreenOnWindowResize:function(event){
this.positionControlBars();
},fullscreenOnEscKey:function(event){
if(event.keyCode==27){
this.exitFullScreen();
}
}});
_fb2.player.newBehavior("bigPlayButton",function(_1051){
if(!this.elements.bigPlayButtons){
this.elements.bigPlayButtons=[];
this.onPlay(this.bigPlayButtonsOnPlay);
this.onEnded(this.bigPlayButtonsOnEnded);
}
this.elements.bigPlayButtons.push(_1051);
this.activateElement(_1051,"playButton");
},{bigPlayButtonsOnPlay:function(event){
this.hideBigPlayButtons();
},bigPlayButtonsOnEnded:function(event){
this.showBigPlayButtons();
},showBigPlayButtons:function(){
this.each(this.elements.bigPlayButtons,function(_1054){
_1054.style.display="block";
});
},hideBigPlayButtons:function(){
this.each(this.elements.bigPlayButtons,function(_1055){
_1055.style.display="none";
});
}});
_fb2.player.newBehavior("spinner",function(_1056){
if(!this.spinners){
this.spinners=[];
_V_.addListener(this.video,"loadeddata",this.spinnersOnVideoLoadedData.context(this));
_V_.addListener(this.video,"loadstart",this.spinnersOnVideoLoadStart.context(this));
_V_.addListener(this.video,"seeking",this.spinnersOnVideoSeeking.context(this));
_V_.addListener(this.video,"seeked",this.spinnersOnVideoSeeked.context(this));
_V_.addListener(this.video,"canplay",this.spinnersOnVideoCanPlay.context(this));
_V_.addListener(this.video,"canplaythrough",this.spinnersOnVideoCanPlayThrough.context(this));
_V_.addListener(this.video,"waiting",this.spinnersOnVideoWaiting.context(this));
_V_.addListener(this.video,"stalled",this.spinnersOnVideoStalled.context(this));
_V_.addListener(this.video,"suspend",this.spinnersOnVideoSuspend.context(this));
_V_.addListener(this.video,"playing",this.spinnersOnVideoPlaying.context(this));
_V_.addListener(this.video,"timeupdate",this.spinnersOnVideoTimeUpdate.context(this));
}
this.spinners.push(_1056);
},{showSpinners:function(){
this.each(this.spinners,function(_1057){
_1057.style.display="block";
});
clearInterval(this.spinnerInterval);
this.spinnerInterval=setInterval(this.rotateSpinners.context(this),100);
},hideSpinners:function(){
this.each(this.spinners,function(_1058){
_1058.style.display="none";
});
clearInterval(this.spinnerInterval);
},spinnersRotated:0,rotateSpinners:function(){
this.each(this.spinners,function(_1059){
_1059.style.WebkitTransform="scale(0.5) rotate("+this.spinnersRotated+"deg)";
_1059.style.MozTransform="scale(0.5) rotate("+this.spinnersRotated+"deg)";
});
if(this.spinnersRotated==360){
this.spinnersRotated=0;
}
this.spinnersRotated+=45;
},spinnersOnVideoLoadedData:function(event){
this.hideSpinners();
},spinnersOnVideoLoadStart:function(event){
this.showSpinners();
},spinnersOnVideoSeeking:function(event){
},spinnersOnVideoSeeked:function(event){
},spinnersOnVideoCanPlay:function(event){
},spinnersOnVideoCanPlayThrough:function(event){
this.hideSpinners();
},spinnersOnVideoWaiting:function(event){
this.showSpinners();
},spinnersOnVideoStalled:function(event){
},spinnersOnVideoSuspend:function(event){
},spinnersOnVideoPlaying:function(event){
this.hideSpinners();
},spinnersOnVideoTimeUpdate:function(event){
if(this.spinner.style.display=="block"){
this.hideSpinners();
}
}});
_fb2.player.newBehavior("subtitlesDisplay",function(_1065){
if(!this.subtitleDisplays){
this.subtitleDisplays=[];
this.onCurrentTimeUpdate(this.subtitleDisplaysOnVideoTimeUpdate);
this.onEnded(function(){
this.lastSubtitleIndex=0;
}.context(this));
}
this.subtitleDisplays.push(_1065);
},{subtitleDisplaysOnVideoTimeUpdate:function(time){
if(this.subtitles){
if(!this.currentSubtitle||this.currentSubtitle.start>=time||this.currentSubtitle.end<time){
var _1067=false,_1068=(this.subtitles[this.lastSubtitleIndex].start>time),i=this.lastSubtitleIndex-(_1068)?1:0;
while(true){
if(_1068){
if(i<0||this.subtitles[i].end<time){
break;
}
if(this.subtitles[i].start<time){
_1067=i;
break;
}
i--;
}else{
if(i>=this.subtitles.length||this.subtitles[i].start>time){
break;
}
if(this.subtitles[i].end>time){
_1067=i;
break;
}
i++;
}
}
if(_1067!==false){
this.currentSubtitle=this.subtitles[_1067];
this.lastSubtitleIndex=_1067;
this.updateSubtitleDisplays(this.currentSubtitle.text);
}else{
if(this.currentSubtitle){
this.currentSubtitle=false;
this.updateSubtitleDisplays("");
}
}
}
}
},updateSubtitleDisplays:function(val){
this.each(this.subtitleDisplays,function(disp){
disp.innerHTML=val;
});
}});
_fb2.extend({addClass:function(_106c,_106d){
if((" "+_106c.className+" ").indexOf(" "+_106d+" ")==-1){
_106c.className=_106c.className===""?_106d:_106c.className+" "+_106d;
}
},removeClass:function(_106e,_106f){
if(_106e.className.indexOf(_106f)==-1){
return;
}
var _1070=_106e.className.split(/\s+/);
_1070.splice(_1070.lastIndexOf(_106f),1);
_106e.className=_1070.join(" ");
},createElement:function(_1071,_1072){
return this.merge(_fa7.createElement(_1071),_1072);
},blockTextSelection:function(){
_fa7.body.focus();
_fa7.onselectstart=function(){
return false;
};
},unblockTextSelection:function(){
_fa7.onselectstart=function(){
return true;
};
},formatTime:function(secs){
var _1074=Math.round(secs);
var _1075=Math.floor(_1074/60);
_1075=(_1075>=10)?_1075:"0"+_1075;
_1074=Math.floor(_1074%60);
_1074=(_1074>=10)?_1074:"0"+_1074;
return _1075+":"+_1074;
},getRelativePosition:function(x,_1077){
return Math.max(0,Math.min(1,(x-this.findPosX(_1077))/_1077.offsetWidth));
},findPosX:function(obj){
var _1079=obj.offsetLeft;
while(obj=obj.offsetParent){
_1079+=obj.offsetLeft;
}
return _1079;
},getComputedStyleValue:function(_107a,style){
return _fa5.getComputedStyle(_107a,null).getPropertyValue(style);
},round:function(num,dec){
if(!dec){
dec=0;
}
return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
},addListener:function(_107e,type,_1080){
if(_107e.addEventListener){
_107e.addEventListener(type,_1080,false);
}else{
if(_107e.attachEvent){
_107e.attachEvent("on"+type,_1080);
}
}
},removeListener:function(_1081,type,_1083){
if(_1081.removeEventListener){
_1081.removeEventListener(type,_1083,false);
}else{
if(_1081.attachEvent){
_1081.detachEvent("on"+type,_1083);
}
}
},get:function(url,_1085){
if(typeof XMLHttpRequest=="undefined"){
XMLHttpRequest=function(){
try{
return new ActiveXObject("Msxml2.XMLHTTP.6.0");
}
catch(e){
}
try{
return new ActiveXObject("Msxml2.XMLHTTP.3.0");
}
catch(f){
}
try{
return new ActiveXObject("Msxml2.XMLHTTP");
}
catch(g){
}
throw new Error("This browser does not support XMLHttpRequest.");
};
}
var _1086=new XMLHttpRequest();
_1086.open("GET",url);
_1086.onreadystatechange=function(){
if(_1086.readyState==4&&_1086.status==200){
_1085(_1086.responseText);
}
}.context(this);
_1086.send();
},trim:function(_1087){
return _1087.toString().replace(/^\s+/,"").replace(/\s+$/,"");
},bindDOMReady:function(){
if(_fa7.readyState==="complete"){
return _fb2.onDOMReady();
}
if(_fa7.addEventListener){
_fa7.addEventListener("DOMContentLoaded",_fb2.DOMContentLoaded,false);
_fa5.addEventListener("load",_fb2.onDOMReady,false);
}else{
if(_fa7.attachEvent){
_fa7.attachEvent("onreadystatechange",_fb2.DOMContentLoaded);
_fa5.attachEvent("onload",_fb2.onDOMReady);
}
}
},DOMContentLoaded:function(){
if(_fa7.addEventListener){
_fa7.removeEventListener("DOMContentLoaded",_fb2.DOMContentLoaded,false);
_fb2.onDOMReady();
}else{
if(_fa7.attachEvent){
if(_fa7.readyState==="complete"){
_fa7.detachEvent("onreadystatechange",_fb2.DOMContentLoaded);
_fb2.onDOMReady();
}
}
}
},DOMReadyList:[],addToDOMReady:function(fn){
if(_fb2.DOMIsReady){
fn.call(_fa7);
}else{
_fb2.DOMReadyList.push(fn);
}
},DOMIsReady:false,onDOMReady:function(){
if(_fb2.DOMIsReady){
return;
}
if(!_fa7.body){
return setTimeout(_fb2.onDOMReady,13);
}
_fb2.DOMIsReady=true;
if(_fb2.DOMReadyList){
for(var i=0;i<_fb2.DOMReadyList.length;i++){
_fb2.DOMReadyList[i].call(_fa7);
}
_fb2.DOMReadyList=null;
}
}});
_fb2.bindDOMReady();
Function.prototype.context=function(obj){
var _108b=this,temp=function(){
return _108b.apply(obj,arguments);
};
return temp;
};
Function.prototype.evtContext=function(obj){
var _108e=this,temp=function(){
var _1090=this;
return _108e.call(obj,arguments[0],_1090);
};
return temp;
};
Function.prototype.rEvtContext=function(obj,_1092){
if(this.hasContext===true){
return this;
}
if(!_1092){
_1092=obj;
}
for(var _1093 in _1092){
if(_1092[_1093]==this){
_1092[_1093]=this.evtContext(obj);
_1092[_1093].hasContext=true;
return _1092[_1093];
}
}
return this.evtContext(obj);
};
if(_fa5.jQuery){
(function($){
$.fn.VideoJS=function(_1095){
this.each(function(){
_fb2.setup(this,_1095);
});
return this;
};
$.fn.player=function(){
return this[0].player;
};
})(jQuery);
}
_fa5.VideoJS=_fa5._V_=_fb2;
})(window);
jq.extend(VideoJS.prototype,{getSize:function(){
if((jq(".video_row").size()>0)||(jq("#hub_preload").size()>0)){
return "small";
}else{
return "big";
}
},trackUsage:function(_1096){
var _1097=((_1096/15)|0)*15;
if(this.lastLoggedOffset!=_1097&&!this.paused()){
var _1098=this.video.id.replace("hp_video_","");
var ajax=new Ajax.Request("/xml/videoWatch.php",{method:"get",parameters:"offset="+_1097+"&videoId="+_1098+"&rf="+escape(document.referrer)});
this.lastLoggedOffset=_1097;
}
},buildAndActivateControlBar:function(){
this.onCurrentTimeUpdate(this.trackUsage);
if(this.getSize()=="big"){
this.buildBigController();
}else{
if(this.getSize()=="small"){
this.buildSmallController();
}else{
alert("unknown size for video controls");
}
}
},buildSmallController:function(){
this.controls=_V_.createElement("div",{className:"vjs-controls"});
this.box.appendChild(this.controls);
this.activateElement(this.controls,"controlBar");
this.activateElement(this.controls,"mouseOverVideoReporter");
this.playControl=_V_.createElement("div",{className:"vjs-play-control",innerHTML:"<span></span>"});
this.controls.appendChild(this.playControl);
this.activateElement(this.playControl,"playToggle");
this.progressControl=_V_.createElement("div",{className:"vjs-progress-control"});
this.progressHolder=_V_.createElement("div",{className:"vjs-progress-holder"});
this.progressControl.appendChild(this.progressHolder);
this.activateElement(this.progressHolder,"currentTimeScrubber");
this.loadProgressBar=_V_.createElement("div",{className:"vjs-load-progress"});
this.progressHolder.appendChild(this.loadProgressBar);
this.activateElement(this.loadProgressBar,"loadProgressBar");
this.playProgressBar=_V_.createElement("div",{className:"vjs-play-progress"});
this.progressHolder.appendChild(this.playProgressBar);
this.activateElement(this.playProgressBar,"playProgressBar");
this.timeControl=_V_.createElement("div",{className:"vjs-time-control"});
this.currentTimeDisplay=_V_.createElement("span",{className:"vjs-current-time-display",innerHTML:"00:00"});
this.timeControl.appendChild(this.currentTimeDisplay);
this.activateElement(this.currentTimeDisplay,"currentTimeDisplay");
this.timeSeparator=_V_.createElement("span",{innerHTML:" / "});
this.timeControl.appendChild(this.timeSeparator);
this.durationDisplay=_V_.createElement("span",{className:"vjs-duration-display",innerHTML:"00:00"});
this.timeControl.appendChild(this.durationDisplay);
this.activateElement(this.durationDisplay,"durationDisplay");
this.volumeControl=_V_.createElement("div",{className:"vjs-volume-control",innerHTML:"<div><span></span><span></span><span></span><span></span><span></span><span></span></div>"});
this.activateElement(this.volumeControl,"volumeScrubber");
this.volumeDisplay=this.volumeControl.children[0];
this.activateElement(this.volumeDisplay,"volumeDisplay");
this.fullscreenControl=_V_.createElement("div",{className:"vjs-fullscreen-control",innerHTML:"<div><span></span><span></span><span></span><span></span></div>"});
this.activateElement(this.fullscreenControl,"fullscreenToggle");
},buildBigController:function(){
this.controls=_V_.createElement("div",{className:"vjs-controls"});
this.box.appendChild(this.controls);
this.activateElement(this.controls,"controlBar");
this.activateElement(this.controls,"mouseOverVideoReporter");
this.playControl=_V_.createElement("div",{className:"vjs-play-control",innerHTML:"<span></span>"});
this.controls.appendChild(this.playControl);
this.activateElement(this.playControl,"playToggle");
this.progressControl=_V_.createElement("div",{className:"vjs-progress-control"});
this.controls.appendChild(this.progressControl);
this.progressHolder=_V_.createElement("div",{className:"vjs-progress-holder"});
this.progressControl.appendChild(this.progressHolder);
this.activateElement(this.progressHolder,"currentTimeScrubber");
this.loadProgressBar=_V_.createElement("div",{className:"vjs-load-progress"});
this.progressHolder.appendChild(this.loadProgressBar);
this.activateElement(this.loadProgressBar,"loadProgressBar");
this.playProgressBar=_V_.createElement("div",{className:"vjs-play-progress"});
this.progressHolder.appendChild(this.playProgressBar);
this.activateElement(this.playProgressBar,"playProgressBar");
this.timeControl=_V_.createElement("div",{className:"vjs-time-control"});
this.controls.appendChild(this.timeControl);
this.currentTimeDisplay=_V_.createElement("span",{className:"vjs-current-time-display",innerHTML:"00:00"});
this.timeControl.appendChild(this.currentTimeDisplay);
this.activateElement(this.currentTimeDisplay,"currentTimeDisplay");
this.timeSeparator=_V_.createElement("span",{innerHTML:" / "});
this.timeControl.appendChild(this.timeSeparator);
this.durationDisplay=_V_.createElement("span",{className:"vjs-duration-display",innerHTML:"00:00"});
this.timeControl.appendChild(this.durationDisplay);
this.activateElement(this.durationDisplay,"durationDisplay");
this.volumeControl=_V_.createElement("div",{className:"vjs-volume-control",innerHTML:"<div><span></span><span></span><span></span><span></span><span></span><span></span></div>"});
this.controls.appendChild(this.volumeControl);
this.activateElement(this.volumeControl,"volumeScrubber");
this.volumeDisplay=this.volumeControl.children[0];
this.activateElement(this.volumeDisplay,"volumeDisplay");
this.fullscreenControl=_V_.createElement("div",{className:"vjs-fullscreen-control",innerHTML:"<div><span></span><span></span><span></span><span></span></div>"});
this.controls.appendChild(this.fullscreenControl);
this.activateElement(this.fullscreenControl,"fullscreenToggle");
},buildBigPlayButton:function(){
this.bigPlayButton=_V_.createElement("div",{className:"vjs-"+this.getSize()+"-play-button",innerHTML:"<span></span>"});
this.box.appendChild(this.bigPlayButton);
this.activateElement(this.bigPlayButton,"bigPlayButton");
}});
eval(function(p,a,c,k,e,d){
e=function(c){
return (c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36));
};
if(!"".replace(/^/,String)){
while(c--){
d[e(c)]=k[c]||e(c);
}
k=[function(e){
return d[e];
}];
e=function(){
return "\\w+";
};
c=1;
}
while(c--){
if(k[c]){
p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);
}
}
return p;
}("K M;I(M)1S 2U(\"2a't 4k M 4K 2g 3l 4G 4H\");(6(){6 r(f,e){I(!M.1R(f))1S 3m(\"3s 15 4R\");K a=f.1w;f=M(f.1m,t(f)+(e||\"\"));I(a)f.1w={1m:a.1m,19:a.19?a.19.1a(0):N};H f}6 t(f){H(f.1J?\"g\":\"\")+(f.4s?\"i\":\"\")+(f.4p?\"m\":\"\")+(f.4v?\"x\":\"\")+(f.3n?\"y\":\"\")}6 B(f,e,a,b){K c=u.L,d,h,g;v=R;5K{O(;c--;){g=u[c];I(a&g.3r&&(!g.2p||g.2p.W(b))){g.2q.12=e;I((h=g.2q.X(f))&&h.P===e){d={3k:g.2b.W(b,h,a),1C:h};1N}}}}5v(i){1S i}5q{v=11}H d}6 p(f,e,a){I(3b.Z.1i)H f.1i(e,a);O(a=a||0;a<f.L;a++)I(f[a]===e)H a;H-1}M=6(f,e){K a=[],b=M.1B,c=0,d,h;I(M.1R(f)){I(e!==1d)1S 3m(\"2a't 5r 5I 5F 5B 5C 15 5E 5p\");H r(f)}I(v)1S 2U(\"2a't W 3l M 59 5m 5g 5x 5i\");e=e||\"\";O(d={2N:11,19:[],2K:6(g){H e.1i(g)>-1},3d:6(g){e+=g}};c<f.L;)I(h=B(f,c,b,d)){a.U(h.3k);c+=h.1C[0].L||1}Y I(h=n.X.W(z[b],f.1a(c))){a.U(h[0]);c+=h[0].L}Y{h=f.3a(c);I(h===\"[\")b=M.2I;Y I(h===\"]\")b=M.1B;a.U(h);c++}a=15(a.1K(\"\"),n.Q.W(e,w,\"\"));a.1w={1m:f,19:d.2N?d.19:N};H a};M.3v=\"1.5.0\";M.2I=1;M.1B=2;K C=/\\$(?:(\\d\\d?|[$&`'])|{([$\\w]+)})/g,w=/[^5h]+|([\\s\\S])(?=[\\s\\S]*\\1)/g,A=/^(?:[?*+]|{\\d+(?:,\\d*)?})\\??/,v=11,u=[],n={X:15.Z.X,1A:15.Z.1A,1C:1r.Z.1C,Q:1r.Z.Q,1e:1r.Z.1e},x=n.X.W(/()??/,\"\")[1]===1d,D=6(){K f=/^/g;n.1A.W(f,\"\");H!f.12}(),y=6(){K f=/x/g;n.Q.W(\"x\",f,\"\");H!f.12}(),E=15.Z.3n!==1d,z={};z[M.2I]=/^(?:\\\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S]))/;z[M.1B]=/^(?:\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\\d*|x[\\29-26-f]{2}|u[\\29-26-f]{4}|c[A-3o-z]|[\\s\\S])|\\(\\?[:=!]|[?*+]\\?|{\\d+(?:,\\d*)?}\\??)/;M.1h=6(f,e,a,b){u.U({2q:r(f,\"g\"+(E?\"y\":\"\")),2b:e,3r:a||M.1B,2p:b||N})};M.2n=6(f,e){K a=f+\"/\"+(e||\"\");H M.2n[a]||(M.2n[a]=M(f,e))};M.3c=6(f){H r(f,\"g\")};M.5l=6(f){H f.Q(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g,\"\\\\$&\")};M.5e=6(f,e,a,b){e=r(e,\"g\"+(b&&E?\"y\":\"\"));e.12=a=a||0;f=e.X(f);H b?f&&f.P===a?f:N:f};M.3q=6(){M.1h=6(){1S 2U(\"2a't 55 1h 54 3q\")}};M.1R=6(f){H 53.Z.1q.W(f)===\"[2m 15]\"};M.3p=6(f,e,a,b){O(K c=r(e,\"g\"),d=-1,h;h=c.X(f);){a.W(b,h,++d,f,c);c.12===h.P&&c.12++}I(e.1J)e.12=0};M.57=6(f,e){H 6 a(b,c){K d=e[c].1I?e[c]:{1I:e[c]},h=r(d.1I,\"g\"),g=[],i;O(i=0;i<b.L;i++)M.3p(b[i],h,6(k){g.U(d.3j?k[d.3j]||\"\":k[0])});H c===e.L-1||!g.L?g:a(g,c+1)}([f],0)};15.Z.1p=6(f,e){H J.X(e[0])};15.Z.W=6(f,e){H J.X(e)};15.Z.X=6(f){K e=n.X.1p(J,14),a;I(e){I(!x&&e.L>1&&p(e,\"\")>-1){a=15(J.1m,n.Q.W(t(J),\"g\",\"\"));n.Q.W(f.1a(e.P),a,6(){O(K c=1;c<14.L-2;c++)I(14[c]===1d)e[c]=1d})}I(J.1w&&J.1w.19)O(K b=1;b<e.L;b++)I(a=J.1w.19[b-1])e[a]=e[b];!D&&J.1J&&!e[0].L&&J.12>e.P&&J.12--}H e};I(!D)15.Z.1A=6(f){(f=n.X.W(J,f))&&J.1J&&!f[0].L&&J.12>f.P&&J.12--;H!!f};1r.Z.1C=6(f){M.1R(f)||(f=15(f));I(f.1J){K e=n.1C.1p(J,14);f.12=0;H e}H f.X(J)};1r.Z.Q=6(f,e){K a=M.1R(f),b,c;I(a&&1j e.58()===\"3f\"&&e.1i(\"${\")===-1&&y)H n.Q.1p(J,14);I(a){I(f.1w)b=f.1w.19}Y f+=\"\";I(1j e===\"6\")c=n.Q.W(J,f,6(){I(b){14[0]=1f 1r(14[0]);O(K d=0;d<b.L;d++)I(b[d])14[0][b[d]]=14[d+1]}I(a&&f.1J)f.12=14[14.L-2]+14[0].L;H e.1p(N,14)});Y{c=J+\"\";c=n.Q.W(c,f,6(){K d=14;H n.Q.W(e,C,6(h,g,i){I(g)5b(g){24\"$\":H\"$\";24\"&\":H d[0];24\"`\":H d[d.L-1].1a(0,d[d.L-2]);24\"'\":H d[d.L-1].1a(d[d.L-2]+d[0].L);5a:i=\"\";g=+g;I(!g)H h;O(;g>d.L-3;){i=1r.Z.1a.W(g,-1)+i;g=1Q.3i(g/10)}H(g?d[g]||\"\":\"$\")+i}Y{g=+i;I(g<=d.L-3)H d[g];g=b?p(b,i):-1;H g>-1?d[g+1]:h}})})}I(a&&f.1J)f.12=0;H c};1r.Z.1e=6(f,e){I(!M.1R(f))H n.1e.1p(J,14);K a=J+\"\",b=[],c=0,d,h;I(e===1d||+e<0)e=5D;Y{e=1Q.3i(+e);I(!e)H[]}O(f=M.3c(f);d=f.X(a);){I(f.12>c){b.U(a.1a(c,d.P));d.L>1&&d.P<a.L&&3b.Z.U.1p(b,d.1a(1));h=d[0].L;c=f.12;I(b.L>=e)1N}f.12===d.P&&f.12++}I(c===a.L){I(!n.1A.W(f,\"\")||h)b.U(\"\")}Y b.U(a.1a(c));H b.L>e?b.1a(0,e):b};M.1h(/\\(\\?#[^)]*\\)/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?\"\":\"(?:)\"});M.1h(/\\((?!\\?)/,6(){J.19.U(N);H\"(\"});M.1h(/\\(\\?<([$\\w]+)>/,6(f){J.19.U(f[1]);J.2N=R;H\"(\"});M.1h(/\\\\k<([\\w$]+)>/,6(f){K e=p(J.19,f[1]);H e>-1?\"\\\\\"+(e+1)+(3R(f.2S.3a(f.P+f[0].L))?\"\":\"(?:)\"):f[0]});M.1h(/\\[\\^?]/,6(f){H f[0]===\"[]\"?\"\\\\b\\\\B\":\"[\\\\s\\\\S]\"});M.1h(/^\\(\\?([5A]+)\\)/,6(f){J.3d(f[1]);H\"\"});M.1h(/(?:\\s+|#.*)+/,6(f){H n.1A.W(A,f.2S.1a(f.P+f[0].L))?\"\":\"(?:)\"},M.1B,6(){H J.2K(\"x\")});M.1h(/\\./,6(){H\"[\\\\s\\\\S]\"},M.1B,6(){H J.2K(\"s\")})})();1j 2e!=\"1d\"&&(2e.M=M);K 1v=6(){6 r(a,b){a.1l.1i(b)!=-1||(a.1l+=\" \"+b)}6 t(a){H a.1i(\"3e\")==0?a:\"3e\"+a}6 B(a){H e.1Y.2A[t(a)]}6 p(a,b,c){I(a==N)H N;K d=c!=R?a.3G:[a.2G],h={\"#\":\"1c\",\".\":\"1l\"}[b.1o(0,1)]||\"3h\",g,i;g=h!=\"3h\"?b.1o(1):b.5u();I((a[h]||\"\").1i(g)!=-1)H a;O(a=0;d&&a<d.L&&i==N;a++)i=p(d[a],b,c);H i}6 C(a,b){K c={},d;O(d 2g a)c[d]=a[d];O(d 2g b)c[d]=b[d];H c}6 w(a,b,c,d){6 h(g){g=g||1P.5y;I(!g.1F){g.1F=g.52;g.3N=6(){J.5w=11}}c.W(d||1P,g)}a.3g?a.3g(\"4U\"+b,h):a.4y(b,h,11)}6 A(a,b){K c=e.1Y.2j,d=N;I(c==N){c={};O(K h 2g e.1U){K g=e.1U[h];d=g.4x;I(d!=N){g.1V=h.4w();O(g=0;g<d.L;g++)c[d[g]]=h}}e.1Y.2j=c}d=e.1U[c[a]];d==N&&b!=11&&1P.1X(e.13.1x.1X+(e.13.1x.3E+a));H d}6 v(a,b){O(K c=a.1e(\"\\n\"),d=0;d<c.L;d++)c[d]=b(c[d],d);H c.1K(\"\\n\")}6 u(a,b){I(a==N||a.L==0||a==\"\\n\")H a;a=a.Q(/</g,\"&1y;\");a=a.Q(/ {2,}/g,6(c){O(K d=\"\",h=0;h<c.L-1;h++)d+=e.13.1W;H d+\" \"});I(b!=N)a=v(a,6(c){I(c.L==0)H\"\";K d=\"\";c=c.Q(/^(&2s;| )+/,6(h){d=h;H\"\"});I(c.L==0)H d;H d+'<17 1g=\"'+b+'\">'+c+\"</17>\"});H a}6 n(a,b){a.1e(\"\\n\");O(K c=\"\",d=0;d<50;d++)c+=\"                    \";H a=v(a,6(h){I(h.1i(\"\\t\")==-1)H h;O(K g=0;(g=h.1i(\"\\t\"))!=-1;)h=h.1o(0,g)+c.1o(0,b-g%b)+h.1o(g+1,h.L);H h})}6 x(a){H a.Q(/^\\s+|\\s+$/g,\"\")}6 D(a,b){I(a.P<b.P)H-1;Y I(a.P>b.P)H 1;Y I(a.L<b.L)H-1;Y I(a.L>b.L)H 1;H 0}6 y(a,b){6 c(k){H k[0]}O(K d=N,h=[],g=b.2D?b.2D:c;(d=b.1I.X(a))!=N;){K i=g(d,b);I(1j i==\"3f\")i=[1f e.2L(i,d.P,b.23)];h=h.1O(i)}H h}6 E(a){K b=/(.*)((&1G;|&1y;).*)/;H a.Q(e.3A.3M,6(c){K d=\"\",h=N;I(h=b.X(c)){c=h[1];d=h[2]}H'<a 2h=\"'+c+'\">'+c+\"</a>\"+d})}6 z(){O(K a=1E.36(\"1k\"),b=[],c=0;c<a.L;c++)a[c].3s==\"20\"&&b.U(a[c]);H b}6 f(a){a=a.1F;K b=p(a,\".20\",R);a=p(a,\".3O\",R);K c=1E.4i(\"3t\");I(!(!a||!b||p(a,\"3t\"))){B(b.1c);r(b,\"1m\");O(K d=a.3G,h=[],g=0;g<d.L;g++)h.U(d[g].4z||d[g].4A);h=h.1K(\"\\r\");c.39(1E.4D(h));a.39(c);c.2C();c.4C();w(c,\"4u\",6(){c.2G.4E(c);b.1l=b.1l.Q(\"1m\",\"\")})}}I(1j 3F!=\"1d\"&&1j M==\"1d\")M=3F(\"M\").M;K e={2v:{\"1g-27\":\"\",\"2i-1s\":1,\"2z-1s-2t\":11,1M:N,1t:N,\"42-45\":R,\"43-22\":4,1u:R,16:R,\"3V-17\":R,2l:11,\"41-40\":R,2k:11,\"1z-1k\":11},13:{1W:\"&2s;\",2M:R,46:11,44:11,34:\"4n\",1x:{21:\"4o 1m\",2P:\"?\",1X:\"1v\\n\\n\",3E:\"4r't 4t 1D O: \",4g:\"4m 4B't 51 O 1z-1k 4F: \",37:'<!4T 1z 4S \"-//4V//3H 4W 1.0 4Z//4Y\" \"1Z://2y.3L.3K/4X/3I/3H/3I-4P.4J\"><1z 4I=\"1Z://2y.3L.3K/4L/5L\"><3J><4N 1Z-4M=\"5G-5M\" 6K=\"2O/1z; 6J=6I-8\" /><1t>6L 1v</1t></3J><3B 1L=\"25-6M:6Q,6P,6O,6N-6F;6y-2f:#6x;2f:#6w;25-22:6v;2O-3D:3C;\"><T 1L=\"2O-3D:3C;3w-32:1.6z;\"><T 1L=\"25-22:6A-6E;\">1v</T><T 1L=\"25-22:.6C;3w-6B:6R;\"><T>3v 3.0.76 (72 73 3x)</T><T><a 2h=\"1Z://3u.2w/1v\" 1F=\"38\" 1L=\"2f:#3y\">1Z://3u.2w/1v</a></T><T>70 17 6U 71.</T><T>6T 6X-3x 6Y 6D.</T></T><T>6t 61 60 J 1k, 5Z <a 2h=\"6u://2y.62.2w/63-66/65?64=5X-5W&5P=5O\" 1L=\"2f:#3y\">5R</a> 5V <2R/>5U 5T 5S!</T></T></3B></1z>'}},1Y:{2j:N,2A:{}},1U:{},3A:{6n:/\\/\\*[\\s\\S]*?\\*\\//2c,6m:/\\/\\/.*$/2c,6l:/#.*$/2c,6k:/\"([^\\\\\"\\n]|\\\\.)*\"/g,6o:/'([^\\\\'\\n]|\\\\.)*'/g,6p:1f M('\"([^\\\\\\\\\"]|\\\\\\\\.)*\"',\"3z\"),6s:1f M(\"'([^\\\\\\\\']|\\\\\\\\.)*'\",\"3z\"),6q:/(&1y;|<)!--[\\s\\S]*?--(&1G;|>)/2c,3M:/\\w+:\\/\\/[\\w-.\\/?%&=:@;]*/g,6a:{18:/(&1y;|<)\\?=?/g,1b:/\\?(&1G;|>)/g},69:{18:/(&1y;|<)%=?/g,1b:/%(&1G;|>)/g},6d:{18:/(&1y;|<)\\s*1k.*?(&1G;|>)/2T,1b:/(&1y;|<)\\/\\s*1k\\s*(&1G;|>)/2T}},16:{1H:6(a){6 b(i,k){H e.16.2o(i,k,e.13.1x[k])}O(K c='<T 1g=\"16\">',d=e.16.2x,h=d.2X,g=0;g<h.L;g++)c+=(d[h[g]].1H||b)(a,h[g]);c+=\"</T>\";H c},2o:6(a,b,c){H'<2W><a 2h=\"#\" 1g=\"6e 6h'+b+\" \"+b+'\">'+c+\"</a></2W>\"},2b:6(a){K b=a.1F,c=b.1l||\"\";b=B(p(b,\".20\",R).1c);K d=6(h){H(h=15(h+\"6f(\\\\w+)\").X(c))?h[1]:N}(\"6g\");b&&d&&e.16.2x[d].2B(b);a.3N()},2x:{2X:[\"21\",\"2P\"],21:{1H:6(a){I(a.V(\"2l\")!=R)H\"\";K b=a.V(\"1t\");H e.16.2o(a,\"21\",b?b:e.13.1x.21)},2B:6(a){a=1E.6j(t(a.1c));a.1l=a.1l.Q(\"47\",\"\")}},2P:{2B:6(){K a=\"68=0\";a+=\", 18=\"+(31.30-33)/2+\", 32=\"+(31.2Z-2Y)/2+\", 30=33, 2Z=2Y\";a=a.Q(/^,/,\"\");a=1P.6Z(\"\",\"38\",a);a.2C();K b=a.1E;b.6W(e.13.1x.37);b.6V();a.2C()}}}},35:6(a,b){K c;I(b)c=[b];Y{c=1E.36(e.13.34);O(K d=[],h=0;h<c.L;h++)d.U(c[h]);c=d}c=c;d=[];I(e.13.2M)c=c.1O(z());I(c.L===0)H d;O(h=0;h<c.L;h++){O(K g=c[h],i=a,k=c[h].1l,j=3W 0,l={},m=1f M(\"^\\\\[(?<2V>(.*?))\\\\]$\"),s=1f M(\"(?<27>[\\\\w-]+)\\\\s*:\\\\s*(?<1T>[\\\\w-%#]+|\\\\[.*?\\\\]|\\\".*?\\\"|'.*?')\\\\s*;?\",\"g\");(j=s.X(k))!=N;){K o=j.1T.Q(/^['\"]|['\"]$/g,\"\");I(o!=N&&m.1A(o)){o=m.X(o);o=o.2V.L>0?o.2V.1e(/\\s*,\\s*/):[]}l[j.27]=o}g={1F:g,1n:C(i,l)};g.1n.1D!=N&&d.U(g)}H d},1M:6(a,b){K c=J.35(a,b),d=N,h=e.13;I(c.L!==0)O(K g=0;g<c.L;g++){b=c[g];K i=b.1F,k=b.1n,j=k.1D,l;I(j!=N){I(k[\"1z-1k\"]==\"R\"||e.2v[\"1z-1k\"]==R){d=1f e.4l(j);j=\"4O\"}Y I(d=A(j))d=1f d;Y 6H;l=i.3X;I(h.2M){l=l;K m=x(l),s=11;I(m.1i(\"<![6G[\")==0){m=m.4h(9);s=R}K o=m.L;I(m.1i(\"]]\\>\")==o-3){m=m.4h(0,o-3);s=R}l=s?m:l}I((i.1t||\"\")!=\"\")k.1t=i.1t;k.1D=j;d.2Q(k);b=d.2F(l);I((i.1c||\"\")!=\"\")b.1c=i.1c;i.2G.74(b,i)}}},2E:6(a){w(1P,\"4k\",6(){e.1M(a)})}};e.2E=e.2E;e.1M=e.1M;e.2L=6(a,b,c){J.1T=a;J.P=b;J.L=a.L;J.23=c;J.1V=N};e.2L.Z.1q=6(){H J.1T};e.4l=6(a){6 b(j,l){O(K m=0;m<j.L;m++)j[m].P+=l}K c=A(a),d,h=1f e.1U.5Y,g=J,i=\"2F 1H 2Q\".1e(\" \");I(c!=N){d=1f c;O(K k=0;k<i.L;k++)(6(){K j=i[k];g[j]=6(){H h[j].1p(h,14)}})();d.28==N?1P.1X(e.13.1x.1X+(e.13.1x.4g+a)):h.2J.U({1I:d.28.17,2D:6(j){O(K l=j.17,m=[],s=d.2J,o=j.P+j.18.L,F=d.28,q,G=0;G<s.L;G++){q=y(l,s[G]);b(q,o);m=m.1O(q)}I(F.18!=N&&j.18!=N){q=y(j.18,F.18);b(q,j.P);m=m.1O(q)}I(F.1b!=N&&j.1b!=N){q=y(j.1b,F.1b);b(q,j.P+j[0].5Q(j.1b));m=m.1O(q)}O(j=0;j<m.L;j++)m[j].1V=c.1V;H m}})}};e.4j=6(){};e.4j.Z={V:6(a,b){K c=J.1n[a];c=c==N?b:c;K d={\"R\":R,\"11\":11}[c];H d==N?c:d},3Y:6(a){H 1E.4i(a)},4c:6(a,b){K c=[];I(a!=N)O(K d=0;d<a.L;d++)I(1j a[d]==\"2m\")c=c.1O(y(b,a[d]));H J.4e(c.6b(D))},4e:6(a){O(K b=0;b<a.L;b++)I(a[b]!==N)O(K c=a[b],d=c.P+c.L,h=b+1;h<a.L&&a[b]!==N;h++){K g=a[h];I(g!==N)I(g.P>d)1N;Y I(g.P==c.P&&g.L>c.L)a[b]=N;Y I(g.P>=c.P&&g.P<d)a[h]=N}H a},4d:6(a){K b=[],c=2u(J.V(\"2i-1s\"));v(a,6(d,h){b.U(h+c)});H b},3U:6(a){K b=J.V(\"1M\",[]);I(1j b!=\"2m\"&&b.U==N)b=[b];a:{a=a.1q();K c=3W 0;O(c=c=1Q.6c(c||0,0);c<b.L;c++)I(b[c]==a){b=c;1N a}b=-1}H b!=-1},2r:6(a,b,c){a=[\"1s\",\"6i\"+b,\"P\"+a,\"6r\"+(b%2==0?1:2).1q()];J.3U(b)&&a.U(\"67\");b==0&&a.U(\"1N\");H'<T 1g=\"'+a.1K(\" \")+'\">'+c+\"</T>\"},3Q:6(a,b){K c=\"\",d=a.1e(\"\\n\").L,h=2u(J.V(\"2i-1s\")),g=J.V(\"2z-1s-2t\");I(g==R)g=(h+d-1).1q().L;Y I(3R(g)==R)g=0;O(K i=0;i<d;i++){K k=b?b[i]:h+i,j;I(k==0)j=e.13.1W;Y{j=g;O(K l=k.1q();l.L<j;)l=\"0\"+l;j=l}a=j;c+=J.2r(i,k,a)}H c},49:6(a,b){a=x(a);K c=a.1e(\"\\n\");J.V(\"2z-1s-2t\");K d=2u(J.V(\"2i-1s\"));a=\"\";O(K h=J.V(\"1D\"),g=0;g<c.L;g++){K i=c[g],k=/^(&2s;|\\s)+/.X(i),j=N,l=b?b[g]:d+g;I(k!=N){j=k[0].1q();i=i.1o(j.L);j=j.Q(\" \",e.13.1W)}i=x(i);I(i.L==0)i=e.13.1W;a+=J.2r(g,l,(j!=N?'<17 1g=\"'+h+' 5N\">'+j+\"</17>\":\"\")+i)}H a},4f:6(a){H a?\"<4a>\"+a+\"</4a>\":\"\"},4b:6(a,b){6 c(l){H(l=l?l.1V||g:g)?l+\" \":\"\"}O(K d=0,h=\"\",g=J.V(\"1D\",\"\"),i=0;i<b.L;i++){K k=b[i],j;I(!(k===N||k.L===0)){j=c(k);h+=u(a.1o(d,k.P-d),j+\"48\")+u(k.1T,j+k.23);d=k.P+k.L+(k.75||0)}}h+=u(a.1o(d),c()+\"48\");H h},1H:6(a){K b=\"\",c=[\"20\"],d;I(J.V(\"2k\")==R)J.1n.16=J.1n.1u=11;1l=\"20\";J.V(\"2l\")==R&&c.U(\"47\");I((1u=J.V(\"1u\"))==11)c.U(\"6S\");c.U(J.V(\"1g-27\"));c.U(J.V(\"1D\"));a=a.Q(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,\"\").Q(/\\r/g,\" \");b=J.V(\"43-22\");I(J.V(\"42-45\")==R)a=n(a,b);Y{O(K h=\"\",g=0;g<b;g++)h+=\" \";a=a.Q(/\\t/g,h)}a=a;a:{b=a=a;h=/<2R\\s*\\/?>|&1y;2R\\s*\\/?&1G;/2T;I(e.13.46==R)b=b.Q(h,\"\\n\");I(e.13.44==R)b=b.Q(h,\"\");b=b.1e(\"\\n\");h=/^\\s*/;g=4Q;O(K i=0;i<b.L&&g>0;i++){K k=b[i];I(x(k).L!=0){k=h.X(k);I(k==N){a=a;1N a}g=1Q.4q(k[0].L,g)}}I(g>0)O(i=0;i<b.L;i++)b[i]=b[i].1o(g);a=b.1K(\"\\n\")}I(1u)d=J.4d(a);b=J.4c(J.2J,a);b=J.4b(a,b);b=J.49(b,d);I(J.V(\"41-40\"))b=E(b);1j 2H!=\"1d\"&&2H.3S&&2H.3S.1C(/5s/)&&c.U(\"5t\");H b='<T 1c=\"'+t(J.1c)+'\" 1g=\"'+c.1K(\" \")+'\">'+(J.V(\"16\")?e.16.1H(J):\"\")+'<3Z 5z=\"0\" 5H=\"0\" 5J=\"0\">'+J.4f(J.V(\"1t\"))+\"<3T><3P>\"+(1u?'<2d 1g=\"1u\">'+J.3Q(a)+\"</2d>\":\"\")+'<2d 1g=\"17\"><T 1g=\"3O\">'+b+\"</T></2d></3P></3T></3Z></T>\"},2F:6(a){I(a===N)a=\"\";J.17=a;K b=J.3Y(\"T\");b.3X=J.1H(a);J.V(\"16\")&&w(p(b,\".16\"),\"5c\",e.16.2b);J.V(\"3V-17\")&&w(p(b,\".17\"),\"56\",f);H b},2Q:6(a){J.1c=\"\"+1Q.5d(1Q.5n()*5k).1q();e.1Y.2A[t(J.1c)]=J;J.1n=C(e.2v,a||{});I(J.V(\"2k\")==R)J.1n.16=J.1n.1u=11},5j:6(a){a=a.Q(/^\\s+|\\s+$/g,\"\").Q(/\\s+/g,\"|\");H\"\\\\b(?:\"+a+\")\\\\b\"},5f:6(a){J.28={18:{1I:a.18,23:\"1k\"},1b:{1I:a.1b,23:\"1k\"},17:1f M(\"(?<18>\"+a.18.1m+\")(?<17>.*?)(?<1b>\"+a.1b.1m+\")\",\"5o\")}}};H e}();1j 2e!=\"1d\"&&(2e.1v=1v);",62,441,"||||||function|||||||||||||||||||||||||||||||||||||return|if|this|var|length|XRegExp|null|for|index|replace|true||div|push|getParam|call|exec|else|prototype||false|lastIndex|config|arguments|RegExp|toolbar|code|left|captureNames|slice|right|id|undefined|split|new|class|addToken|indexOf|typeof|script|className|source|params|substr|apply|toString|String|line|title|gutter|SyntaxHighlighter|_xregexp|strings|lt|html|test|OUTSIDE_CLASS|match|brush|document|target|gt|getHtml|regex|global|join|style|highlight|break|concat|window|Math|isRegExp|throw|value|brushes|brushName|space|alert|vars|http|syntaxhighlighter|expandSource|size|css|case|font|Fa|name|htmlScript|dA|can|handler|gm|td|exports|color|in|href|first|discoveredBrushes|light|collapse|object|cache|getButtonHtml|trigger|pattern|getLineHtml|nbsp|numbers|parseInt|defaults|com|items|www|pad|highlighters|execute|focus|func|all|getDiv|parentNode|navigator|INSIDE_CLASS|regexList|hasFlag|Match|useScriptTags|hasNamedCapture|text|help|init|br|input|gi|Error|values|span|list|250|height|width|screen|top|500|tagName|findElements|getElementsByTagName|aboutDialog|_blank|appendChild|charAt|Array|copyAsGlobal|setFlag|highlighter_|string|attachEvent|nodeName|floor|backref|output|the|TypeError|sticky|Za|iterate|freezeTokens|scope|type|textarea|alexgorbatchev|version|margin|2010|005896|gs|regexLib|body|center|align|noBrush|require|childNodes|DTD|xhtml1|head|org|w3|url|preventDefault|container|tr|getLineNumbersHtml|isNaN|userAgent|tbody|isLineHighlighted|quick|void|innerHTML|create|table|links|auto|smart|tab|stripBrs|tabs|bloggerMode|collapsed|plain|getCodeLinesHtml|caption|getMatchesHtml|findMatches|figureOutLineNumbers|removeNestedMatches|getTitleHtml|brushNotHtmlScript|substring|createElement|Highlighter|load|HtmlScript|Brush|pre|expand|multiline|min|Can|ignoreCase|find|blur|extended|toLowerCase|aliases|addEventListener|innerText|textContent|wasn|select|createTextNode|removeChild|option|same|frame|xmlns|dtd|twice|1999|equiv|meta|htmlscript|transitional|1E3|expected|PUBLIC|DOCTYPE|on|W3C|XHTML|TR|EN|Transitional||configured|srcElement|Object|after|run|dblclick|matchChain|valueOf|constructor|default|switch|click|round|execAt|forHtmlScript|token|gimy|functions|getKeywords|1E6|escape|within|random|sgi|another|finally|supply|MSIE|ie|toUpperCase|catch|returnValue|definition|event|border|imsx|constructing|one|Infinity|from|when|Content|cellpadding|flags|cellspacing|try|xhtml|Type|spaces|2930402|hosted_button_id|lastIndexOf|donate|active|development|keep|to|xclick|_s|Xml|please|like|you|paypal|cgi|cmd|webscr|bin|highlighted|scrollbars|aspScriptTags|phpScriptTags|sort|max|scriptScriptTags|toolbar_item|_|command|command_|number|getElementById|doubleQuotedString|singleLinePerlComments|singleLineCComments|multiLineCComments|singleQuotedString|multiLineDoubleQuotedString|xmlComments|alt|multiLineSingleQuotedString|If|https|1em|000|fff|background|5em|xx|bottom|75em|Gorbatchev|large|serif|CDATA|continue|utf|charset|content|About|family|sans|Helvetica|Arial|Geneva|3em|nogutter|Copyright|syntax|close|write|2004|Alex|open|JavaScript|highlighter|July|02|replaceChild|offset|83".split("|"),0,{}));
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10a2="ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR "+"DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH "+"HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP "+"HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY "+"HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT "+"HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE "+"LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF "+"LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR "+"LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR "+"PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT "+"PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 "+"POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR "+"PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 "+"PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT "+"SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG "+"ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM "+"char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t "+"clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS "+"FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t "+"__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t "+"jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler "+"sig_atomic_t size_t _stat __stat64 _stati64 terminate_function "+"time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf "+"va_list wchar_t wctrans_t wctype_t wint_t signed";
var _10a3="break case catch class const __finally __exception __try "+"const_cast continue private public protected __declspec "+"default delete deprecated dllexport dllimport do dynamic_cast "+"else enum explicit extern if for friend goto inline "+"mutable naked namespace new noinline noreturn nothrow "+"register reinterpret_cast return selectany "+"sizeof static static_cast struct switch template this "+"thread throw true false try typedef typeid typename union "+"using uuid virtual void volatile whcar_t while";
var _10a4="assert isalnum isalpha iscntrl isdigit isgraph islower isprint"+"ispunct isspace isupper isxdigit tolower toupper errno localeconv "+"setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod "+"frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf "+"longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start "+"clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen "+"fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell "+"fwrite getc getchar gets perror printf putc putchar puts remove "+"rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam "+"ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol "+"bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs "+"mbtowc qsort rand realloc srand strtod strtol strtoul system "+"wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr "+"strcmp strcoll strcpy strcspn strerror strlen strncat strncmp "+"strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime "+"clock ctime difftime gmtime localtime mktime strftime time";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^ *#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(_10a2),"gm"),css:"color1 bold"},{regex:new RegExp(this.getKeywords(_10a4),"gm"),css:"functions bold"},{regex:new RegExp(this.getKeywords(_10a3),"gm"),css:"keyword bold"}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["cpp","c"];
SyntaxHighlighter.brushes.Cpp=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10a5="abstract as base bool break byte case catch char checked class const "+"continue decimal default delegate do double else enum event explicit "+"extern false finally fixed float for foreach get goto if implicit in int "+"interface internal is lock long namespace new null object operator out "+"override params private protected public readonly ref return sbyte sealed set "+"short sizeof stackalloc static string struct switch this throw true try "+"typeof uint ulong unchecked unsafe ushort using virtual void while";
function fixComments(match,_10a7){
var css=(match[0].indexOf("///")==0)?"color1":"comments";
return [new SyntaxHighlighter.Match(match[0],match.index,css)];
};
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,func:fixComments},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:/@"(?:[^"]|"")*"/g,css:"string"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/^\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(_10a5),"gm"),css:"keyword"},{regex:/\bpartial(?=\s+(?:class|interface|struct)\b)/g,css:"keyword"},{regex:/\byield(?=\s+(?:return|break)\b)/g,css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["c#","c-sharp","csharp"];
SyntaxHighlighter.brushes.CSharp=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
function getKeywordsCSS(str){
return "\\b([a-z_]|)"+str.replace(/ /g,"(?=:)\\b|\\b([a-z_\\*]|\\*|)")+"(?=:)\\b";
};
function getValuesCSS(str){
return "\\b"+str.replace(/ /g,"(?!-)(?!:)\\b|\\b()")+":\\b";
};
var _10ab="ascent azimuth background-attachment background-color background-image background-position "+"background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top "+"border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color "+"border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width "+"border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color "+"content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display "+"elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font "+"height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top "+"margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans "+"outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page "+"page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position "+"quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress "+"table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em "+"vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index";
var _10ac="above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder "+"both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed "+"continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double "+"embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia "+"gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic "+"justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha "+"lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower "+"navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset "+"outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side "+"rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow "+"small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize "+"table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal "+"text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin "+"upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow";
var fonts="[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif";
this.regexList=[{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\#[a-fA-F0-9]{3,6}/g,css:"value"},{regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,css:"value"},{regex:/!important/g,css:"color3"},{regex:new RegExp(getKeywordsCSS(_10ab),"gm"),css:"keyword"},{regex:new RegExp(getValuesCSS(_10ac),"g"),css:"value"},{regex:new RegExp(this.getKeywords(fonts),"g"),css:"color1"}];
this.forHtmlScript({left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi});
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["css"];
SyntaxHighlighter.brushes.CSS=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10ae="abs addr and ansichar ansistring array as asm begin boolean byte cardinal "+"case char class comp const constructor currency destructor div do double "+"downto else end except exports extended false file finalization finally "+"for function goto if implementation in inherited int64 initialization "+"integer interface is label library longint longword mod nil not object "+"of on or packed pansichar pansistring pchar pcurrency pdatetime pextended "+"pint64 pointer private procedure program property pshortstring pstring "+"pvariant pwidechar pwidestring protected public published raise real real48 "+"record repeat set shl shortint shortstring shr single smallint string then "+"threadvar to true try type unit until uses val var varirnt while widechar "+"widestring with word write writeln xor";
this.regexList=[{regex:/\(\*[\s\S]*?\*\)/gm,css:"comments"},{regex:/{(?!\$)[\s\S]*?}/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\{\$[a-zA-Z]+ .+\}/g,css:"color1"},{regex:/\b[\d\.]+\b/g,css:"value"},{regex:/\$[a-zA-Z0-9]+\b/g,css:"value"},{regex:new RegExp(this.getKeywords(_10ae),"gmi"),css:"keyword"}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["delphi","pascal","pas"];
SyntaxHighlighter.brushes.Delphi=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
function process(match,_10b0){
var _10b1=SyntaxHighlighter.Match,code=match[0],tag=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(code),_10b4=[];
if(match.attributes!=null){
var _10b5,regex=new XRegExp("(?<name> [\\w:\\-\\.]+)"+"\\s*=\\s*"+"(?<value> \".*?\"|'.*?'|\\w+)","xg");
while((_10b5=regex.exec(code))!=null){
_10b4.push(new _10b1(_10b5.name,match.index+_10b5.index,"color1"));
_10b4.push(new _10b1(_10b5.value,match.index+_10b5.index+_10b5[0].indexOf(_10b5.value),"string"));
}
}
if(tag!=null){
_10b4.push(new _10b1(tag.name,match.index+tag[0].indexOf(tag.name),"keyword"));
}
return _10b4;
};
this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:process}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["xml","xhtml","xslt","html"];
SyntaxHighlighter.brushes.Xml=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10b7="abstract assert boolean break byte case catch char class const "+"continue default do double else enum extends "+"false final finally float for goto if implements import "+"instanceof int interface long native new null "+"package private protected public return "+"short static strictfp super switch synchronized this throw throws true "+"transient try void volatile while";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:/\/\*([^\*][\s\S]*)?\*\//gm,css:"comments"},{regex:/\/\*(?!\*\/)\*[\s\S]*?\*\//gm,css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:"value"},{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:"color1"},{regex:/\@interface\b/g,css:"color2"},{regex:new RegExp(this.getKeywords(_10b7),"gm"),css:"keyword"}];
this.forHtmlScript({left:/(&lt;|<)%[@!=]?/g,right:/%(&gt;|>)/g});
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["java"];
SyntaxHighlighter.brushes.Java=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10b8="break case catch continue "+"default delete do else false  "+"for function if in instanceof "+"new null return super switch "+"this throw true try typeof var while with";
var r=SyntaxHighlighter.regexLib;
this.regexList=[{regex:r.multiLineDoubleQuotedString,css:"string"},{regex:r.multiLineSingleQuotedString,css:"string"},{regex:r.singleLineCComments,css:"comments"},{regex:r.multiLineCComments,css:"comments"},{regex:/\s*#.*/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(_10b8),"gm"),css:"keyword"}];
this.forHtmlScript(r.scriptScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["js","jscript","javascript"];
SyntaxHighlighter.brushes.JScript=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var funcs="abs acos acosh addcslashes addslashes "+"array_change_key_case array_chunk array_combine array_count_values array_diff "+"array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill "+"array_filter array_flip array_intersect array_intersect_assoc array_intersect_key "+"array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map "+"array_merge array_merge_recursive array_multisort array_pad array_pop array_product "+"array_push array_rand array_reduce array_reverse array_search array_shift "+"array_slice array_splice array_sum array_udiff array_udiff_assoc "+"array_udiff_uassoc array_uintersect array_uintersect_assoc "+"array_uintersect_uassoc array_unique array_unshift array_values array_walk "+"array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert "+"basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress "+"bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir "+"checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists "+"closedir closelog copy cos cosh count count_chars date decbin dechex decoct "+"deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log "+"error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded "+"feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents "+"fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype "+"floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf "+"fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname "+"gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt "+"getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext "+"gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set "+"interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double "+"is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long "+"is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault "+"is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br "+"parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir "+"round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split "+"str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes "+"stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk "+"strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime "+"strtoupper strtr strval substr substr_compare";
var _10bb="abstract and array as break case catch cfunction class clone const continue declare default die do "+"else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach "+"function include include_once global goto if implements interface instanceof namespace new "+"old_function or private protected public return require require_once static switch "+"throw try use var while xor ";
var _10bc="__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\$\w+/g,css:"variable"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(_10bc),"gmi"),css:"constants"},{regex:new RegExp(this.getKeywords(_10bb),"gm"),css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["php"];
SyntaxHighlighter.brushes.Php=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10bd="and assert break class continue def del elif else "+"except exec finally for from global if import in is "+"lambda not or pass print raise return try yield while";
var funcs="__import__ abs all any apply basestring bin bool buffer callable "+"chr classmethod cmp coerce compile complex delattr dict dir "+"divmod enumerate eval execfile file filter float format frozenset "+"getattr globals hasattr hash help hex id input int intern "+"isinstance issubclass iter len list locals long map max min next "+"object oct open ord pow print property range raw_input reduce "+"reload repr reversed round set setattr slice sorted staticmethod "+"str sum super tuple type type unichr unicode vars xrange zip";
var _10bf="None True False self cls class_";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:/^\s*@\w+/gm,css:"decorator"},{regex:/(['\"]{3})([^\1])*?\1/gm,css:"comments"},{regex:/"(?!")(?:\.|\\\"|[^\""\n])*"/gm,css:"string"},{regex:/'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,css:"string"},{regex:/\+|\-|\*|\/|\%|=|==/gm,css:"keyword"},{regex:/\b\d+\.?\w*/g,css:"value"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(_10bd),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(_10bf),"gm"),css:"color1"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["py","python"];
SyntaxHighlighter.brushes.Python=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10c0="alias and BEGIN begin break case class def define_method defined do each else elsif "+"END end ensure false for if in module new next nil not or raise redo rescue retry return "+"self super then throw true undef unless until when while yield";
var _10c1="Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload "+"Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol "+"ThreadGroup Thread Time TrueClass";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/\b[A-Z0-9_]+\b/g,css:"constants"},{regex:/:[a-z][A-Za-z0-9_]*/g,css:"color2"},{regex:/(\$|@@|@)\w+/g,css:"variable bold"},{regex:new RegExp(this.getKeywords(_10c0),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(_10c1),"gm"),css:"color1"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["ruby","rails","ror","rb"];
SyntaxHighlighter.brushes.Ruby=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var funcs="abs avg case cast coalesce convert count current_timestamp "+"current_user day isnull left lower month nullif replace right "+"session_user space substring sum system_user upper user year";
var _10c3="absolute action add after alter as asc at authorization begin bigint "+"binary bit by cascade char character check checkpoint close collate "+"column commit committed connect connection constraint contains continue "+"create cube current current_date current_time cursor database date "+"deallocate dec decimal declare default delete desc distinct double drop "+"dynamic else end end-exec escape except exec execute false fetch first "+"float for force foreign forward free from full function global goto grant "+"group grouping having hour ignore index inner insensitive insert instead "+"int integer intersect into is isolation key last level load local max min "+"minute modify move name national nchar next no numeric of off on only "+"open option order out output partial password precision prepare primary "+"prior privileges procedure public read real references relative repeatable "+"restrict return returns revoke rollback rollup rows rule schema scroll "+"second section select sequence serializable set size smallint static "+"statistics table temp temporary then time timestamp to top transaction "+"translation trigger true truncate uncommitted union unique update values "+"varchar varying view when where with work";
var _10c4="all and any between cross in join like not null or outer some";
this.regexList=[{regex:/--(.*)$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"color2"},{regex:new RegExp(this.getKeywords(_10c4),"gmi"),css:"color1"},{regex:new RegExp(this.getKeywords(_10c3),"gmi"),css:"keyword"}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["sql"];
SyntaxHighlighter.brushes.Sql=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10c5="AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto "+"Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate "+"CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType "+"Date Decimal Declare Default Delegate Dim DirectCast Do Double Each "+"Else ElseIf End Enum Erase Error Event Exit False Finally For Friend "+"Function Get GetType GoSub GoTo Handles If Implements Imports In "+"Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module "+"MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing "+"NotInheritable NotOverridable Object On Option Optional Or OrElse "+"Overloads Overridable Overrides ParamArray Preserve Private Property "+"Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume "+"Return Select Set Shadows Shared Short Single Static Step Stop String "+"Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until "+"Variant When While With WithEvents WriteOnly Xor";
this.regexList=[{regex:/'.*$/gm,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:/^\s*#.*$/gm,css:"preprocessor"},{regex:new RegExp(this.getKeywords(_10c5),"gm"),css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["vb","vbnet"];
SyntaxHighlighter.brushes.Vb=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
function process(match,_10c7){
var _10c8=SyntaxHighlighter.Match,code=match[0],tag=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(code),_10cb=[];
if(match.attributes!=null){
var _10cc,regex=new XRegExp("(?<name> [\\w:\\-\\.]+)"+"\\s*=\\s*"+"(?<value> \".*?\"|'.*?'|\\w+)","xg");
while((_10cc=regex.exec(code))!=null){
_10cb.push(new _10c8(_10cc.name,match.index+_10cc.index,"color1"));
_10cb.push(new _10c8(_10cc.value,match.index+_10cc.index+_10cc[0].indexOf(_10cc.value),"string"));
}
}
if(tag!=null){
_10cb.push(new _10c8(tag.name,match.index+tag[0].indexOf(tag.name),"keyword"));
}
return _10cb;
};
this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:SyntaxHighlighter.regexLib.xmlComments,css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:process}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["xml","xhtml","xslt","html"];
SyntaxHighlighter.brushes.Xml=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
function ClojureRegExp(_10ce){
_10ce=_10ce+"(?=[[\\]{}(),\\s])";
this.regex=new RegExp(_10ce,"g");
this.lookBehind=/[\[\]{}(),\s]$/;
};
ClojureRegExp.prototype.exec=function(str){
var match,_10d1;
while(match=this.regex.exec(str)){
_10d1=str.substring(0,match.index);
if(this.lookBehind.test(_10d1)){
return match;
}else{
this.regex.lastIndex=match.index+1;
}
}
return null;
};
SyntaxHighlighter.brushes.Clojure=function(){
var _10d2=". def do fn if let loop monitor-enter monitor-exit new quote recur set! "+"throw try var",_10d3="* *1 *2 *3 *agent* *allow-unresolved-vars* *assert* *clojure-version* "+"*command-line-args* *compile-files* *compile-path* *e *err* *file* "+"*flush-on-newline* *in* *macro-meta* *math-context* *ns* *out* "+"*print-dup* *print-length* *print-level* *print-meta* *print-readably* "+"*read-eval* *source-path* *use-context-classloader* "+"*warn-on-reflection* + - -> -&gt; ->> -&gt;&gt; .. / < &lt; <= &lt;= = "+"== > &gt; >= &gt;= accessor aclone "+"add-classpath add-watch agent agent-errors aget alength alias all-ns "+"alter alter-meta! alter-var-root amap ancestors and apply areduce "+"array-map aset aset-boolean aset-byte aset-char aset-double aset-float "+"aset-int aset-long aset-short assert assoc assoc! assoc-in associative? "+"atom await await-for await1 bases bean bigdec bigint binding bit-and "+"bit-and-not bit-clear bit-flip bit-not bit-or bit-set bit-shift-left "+"bit-shift-right bit-test bit-xor boolean boolean-array booleans "+"bound-fn bound-fn* butlast byte byte-array bytes cast char char-array "+"char-escape-string char-name-string char? chars chunk chunk-append "+"chunk-buffer chunk-cons chunk-first chunk-next chunk-rest chunked-seq? "+"class class? clear-agent-errors clojure-version coll? comment commute "+"comp comparator compare compare-and-set! compile complement concat cond "+"condp conj conj! cons constantly construct-proxy contains? count "+"counted? create-ns create-struct cycle dec decimal? declare definline "+"defmacro defmethod defmulti defn defn- defonce defstruct delay delay? "+"deliver deref derive descendants destructure disj disj! dissoc dissoc! "+"distinct distinct? doall doc dorun doseq dosync dotimes doto double "+"double-array doubles drop drop-last drop-while empty empty? ensure "+"enumeration-seq eval even? every? false? ffirst file-seq filter find "+"find-doc find-ns find-var first float float-array float? floats flush "+"fn fn? fnext for force format future future-call future-cancel "+"future-cancelled? future-done? future? gen-class gen-interface gensym "+"get get-in get-method get-proxy-class get-thread-bindings get-validator "+"hash hash-map hash-set identical? identity if-let if-not ifn? import "+"in-ns inc init-proxy instance? int int-array integer? interleave intern "+"interpose into into-array ints io! isa? iterate iterator-seq juxt key "+"keys keyword keyword? last lazy-cat lazy-seq let letfn line-seq list "+"list* list? load load-file load-reader load-string loaded-libs locking "+"long long-array longs loop macroexpand macroexpand-1 make-array "+"make-hierarchy map map? mapcat max max-key memfn memoize merge "+"merge-with meta method-sig methods min min-key mod name namespace neg? "+"newline next nfirst nil? nnext not not-any? not-empty not-every? not= "+"\tns ns-aliases ns-imports ns-interns ns-map ns-name ns-publics "+"ns-refers ns-resolve ns-unalias ns-unmap nth nthnext num number? odd? "+"or parents partial partition pcalls peek persistent! pmap pop pop! "+"pop-thread-bindings pos? pr pr-str prefer-method prefers "+"primitives-classnames print print-ctor print-doc print-dup print-method "+"print-namespace-doc print-simple print-special-doc print-str printf "+"println println-str prn prn-str promise proxy proxy-call-with-super "+"proxy-mappings proxy-name proxy-super push-thread-bindings pvalues quot "+"rand rand-int range ratio? rational? rationalize re-find re-groups "+"re-matcher re-matches re-pattern re-seq read read-line read-string "+"reduce ref ref-history-count ref-max-history ref-min-history ref-set "+"refer refer-clojure release-pending-sends rem remove remove-method "+"remove-ns remove-watch repeat repeatedly replace replicate require "+"reset! reset-meta! resolve rest resultset-seq reverse reversible? rseq "+"rsubseq second select-keys send send-off seq seq? seque sequence "+"sequential? set set-validator! set? short short-array shorts "+"shutdown-agents slurp some sort sort-by sorted-map sorted-map-by "+"sorted-set sorted-set-by sorted? special-form-anchor special-symbol? "+"split-at split-with str stream? string? struct struct-map subs subseq "+"subvec supers swap! symbol symbol? sync syntax-symbol-anchor take "+"take-last take-nth take-while test the-ns time to-array to-array-2d "+"trampoline transient tree-seq true? type unchecked-add unchecked-dec "+"unchecked-divide unchecked-inc unchecked-multiply unchecked-negate "+"unchecked-remainder unchecked-subtract underive unquote "+"unquote-splicing update-in update-proxy use val vals var-get var-set "+"var? vary-meta vec vector vector? when when-first when-let when-not "+"while with-bindings with-bindings* with-in-str with-loading-context "+"with-local-vars with-meta with-open with-out-str with-precision xml-seq "+"zero? zipmap ";
this.getKeywords=function(_10d4){
_10d4=_10d4.replace(/[\-\[\]{}()*+?.\\\^$|,#]/g,"\\$&");
_10d4=_10d4.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|");
return "(?:"+_10d4+")";
};
this.regexList=[{regex:new RegExp("\\W;.*$","gm"),css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:/#"(?:\.|(\\\")|[^\""\n])*"/g,css:"string"},{regex:/\[|\]/g,css:"keyword"},{regex:/\s+&(amp;)?\s+/g,css:"keyword"},{regex:/#?\{|\}/g,css:"keyword"},{regex:/#\^\{/g,css:"keyword"},{regex:/#\(|%/g,css:"keyword"},{regex:/@/g,css:"keyword"},{regex:/(['`]|~@?)[\[({]/g,css:"keyword"},{regex:/\(|\)/g,css:"keyword"},{regex:/\\.\b/g,css:"value"},{regex:/[+\-]?\b0x[0-9A-F]+\b/gi,css:"value"},{regex:new ClojureRegExp("[+-]?\\b\\d+(\\.\\d*)?([eE][+-]?\\d+|M)?\\b"),css:"value"},{regex:/^[+\-]?\b\d+(\.\d*)?([eE][+\-]?\d+|M)?\b/g,css:"value"},{regex:/\b(true|false|nil)\b/g,css:"value"},{regex:/(`|#?'|~@?)[\w-.\/]+/g,css:"color1"},{regex:/:[A-Za-z0-9_\-]+/g,css:"constants"},{regex:new ClojureRegExp(this.getKeywords(_10d2)),css:"preprocessor"},{regex:/\#\^[A-Za-z]\w*/g,css:"preprocessor"},{regex:new ClojureRegExp(this.getKeywords(_10d3)),css:"functions"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
};
SyntaxHighlighter.brushes.Clojure.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Clojure.aliases=["clojure","Clojure","clj"];
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var funcs="abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr "+"chroot close closedir connect cos crypt defined delete each endgrent "+"endhostent endnetent endprotoent endpwent endservent eof exec exists "+"exp fcntl fileno flock fork format formline getc getgrent getgrgid "+"getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr "+"getnetbyname getnetent getpeername getpgrp getppid getpriority "+"getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid "+"getservbyname getservbyport getservent getsockname getsockopt glob "+"gmtime grep hex index int ioctl join keys kill lc lcfirst length link "+"listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd "+"oct open opendir ord pack pipe pop pos print printf prototype push "+"quotemeta rand read readdir readline readlink readpipe recv rename "+"reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl "+"semget semop send setgrent sethostent setnetent setpgrp setpriority "+"setprotoent setpwent setservent setsockopt shift shmctl shmget shmread "+"shmwrite shutdown sin sleep socket socketpair sort splice split sprintf "+"sqrt srand stat study substr symlink syscall sysopen sysread sysseek "+"system syswrite tell telldir time times tr truncate uc ucfirst umask "+"undef unlink unpack unshift utime values vec wait waitpid warn write";
var _10d6="bless caller continue dbmclose dbmopen die do dump else elsif eval exit "+"for foreach goto if import last local my next no our package redo ref "+"require return sub tie tied unless untie until use wantarray while";
this.regexList=[{regex:new RegExp("#[^!].*$","gm"),css:"comments"},{regex:new RegExp("^\\s*#!.*$","gm"),css:"preprocessor"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp("(\\$|@|%)\\w+","g"),css:"variable"},{regex:new RegExp(this.getKeywords(funcs),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords(_10d6),"gm"),css:"keyword"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["perl","Perl","pl"];
SyntaxHighlighter.brushes.Perl=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10d7="if fi then elif else for do done until while break continue case function return in eq ne ge le";
var _10d8="alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot"+"cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df "+"diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval "+"exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format "+"free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig "+"import install join kill less let ln local locate logname logout look lpc lpr lprint "+"lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools "+"mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap "+"printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice "+"remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown "+"sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time "+"times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias "+"uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir "+"vi watch wc whereis which who whoami Wget xargs yes";
this.regexList=[{regex:/^#!.*$/gm,css:"preprocessor bold"},{regex:/\/[\w-\/]+/gm,css:"plain"},{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(_10d7),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(_10d8),"gm"),css:"functions"}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["bash","shell"];
SyntaxHighlighter.brushes.Bash=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10d9="after and andalso band begin bnot bor bsl bsr bxor "+"case catch cond div end fun if let not of or orelse "+"query receive rem try when xor"+" module export import define";
this.regexList=[{regex:new RegExp("[A-Z][A-Za-z0-9_]+","g"),css:"constants"},{regex:new RegExp("\\%.+","gm"),css:"comments"},{regex:new RegExp("\\?[A-Za-z0-9_]+","g"),css:"preprocessor"},{regex:new RegExp("[a-z0-9_]+:[a-z0-9_]+","g"),css:"functions"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:new RegExp(this.getKeywords(_10d9),"gm"),css:"keyword"}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["erl","erlang"];
SyntaxHighlighter.brushes.Erland=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10da="as assert break case catch class continue def default do else extends finally "+"if in implements import instanceof interface new package property return switch "+"throw throws try while public protected private static";
var types="void boolean byte char short int long float double";
var _10dc="null";
var _10dd="allProperties count get size "+"collect each eachProperty eachPropertyName eachWithIndex find findAll "+"findIndexOf grep inject max min reverseEach sort "+"asImmutable asSynchronized flatten intersect join pop reverse subMap toList "+"padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize "+"eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText "+"splitEachLine withReader append encodeBase64 decodeBase64 filterLine "+"transformChar transformLine withOutputStream withPrintWriter withStream "+"withStreams withWriter withWriterAppend write writeLine "+"dump inspect invokeMethod print println step times upto use waitForOrKill "+"getText";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/""".*"""/g,css:"string"},{regex:new RegExp("\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b","gi"),css:"value"},{regex:new RegExp(this.getKeywords(_10da),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords(types),"gm"),css:"color1"},{regex:new RegExp(this.getKeywords(_10dc),"gm"),css:"constants"},{regex:new RegExp(this.getKeywords(_10dd),"gm"),css:"functions"}];
this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["groovy"];
SyntaxHighlighter.brushes.Groovy=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();
(function(){
typeof (require)!="undefined"?SyntaxHighlighter=require("shCore").SyntaxHighlighter:null;
function Brush(){
var _10de="val sealed case def true trait implicit forSome import match object null finally super "+"override try lazy for var catch throw type extends class while with new final yield abstract "+"else do if return protected private this package false";
var _10df="[_:=><%#@]+";
this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:"comments"},{regex:SyntaxHighlighter.regexLib.multiLineSingleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,css:"string"},{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:"string"},{regex:/0x[a-f0-9]+|\d+(\.\d+)?/gi,css:"value"},{regex:new RegExp(this.getKeywords(_10de),"gm"),css:"keyword"},{regex:new RegExp(_10df,"gm"),css:"keyword"}];
};
Brush.prototype=new SyntaxHighlighter.Highlighter();
Brush.aliases=["scala"];
SyntaxHighlighter.brushes.Scala=Brush;
typeof (exports)!="undefined"?exports.Brush=Brush:null;
})();

