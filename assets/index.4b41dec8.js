import{k as d,aX as Ve,a as re,p as Xe,G as pe,r as ae,E as We,f as M,Q as L,eM as Ct,b4 as _e,eN as xt,T as Ye,_ as h,N as ve,O as _t,cH as Ze,a2 as q,W as Et,ce as Ee,as as Le,V as Tt,X as ie,cp as St,af as kt,b3 as J,F as fe,ar as wt,ck as Nt,bu as Te,d1 as $t,cB as Pt,eO as Bt,b as qe,d4 as Ot,l as Se,H as Ge,aE as D,o as P,J as G,q as A,i as W,aH as Je,j as ke,bw as Dt,s as Qe,t as ne,z as $e,n as et,by as At,y as Ft}from"./index.00d33503.js";import{T as Re}from"./index.4bb506ea.js";import{B as Lt}from"./index.ae5d1ef4.js";import{L as te}from"./index.5b497660.js";import"./index.9930c332.js";import{A as Ie}from"./index.9ed05b31.js";import{T as je}from"./index.fe2830e0.js";import{T as Me}from"./transButton.913ad812.js";import{C as Rt}from"./CopyOutlined.e8e318ee.js";import{E as It}from"./EditOutlined.24b9552b.js";import"./useRefs.e516fdd9.js";import"./eagerComputed.116a7d66.js";import"./useSize.17f6a0ab.js";var jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Mt=jt;function ze(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable}))),i.forEach(function(u){zt(t,u,a[u])})}return t}function zt(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var Pe=function(e,a){var i=ze({},e,a.attrs);return d(Ve,ze({},i,{icon:Mt}),null)};Pe.displayName="EnterOutlined";Pe.inheritAttrs=!1;var Ht=Pe,Kt=function(){return{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String}},Ut=re({compatConfig:{MODE:3},name:"Editable",props:Kt(),setup:function(e,a){var i=a.emit,u=a.slots,l=Xe({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});pe(function(){return e.value},function(y){l.current=y});var o=ae();We(function(){if(o.value){var y,E=(y=o.value)===null||y===void 0?void 0:y.resizableTextArea,F=E==null?void 0:E.textArea;F.focus();var H=F.value.length;F.setSelectionRange(H,H)}});function f(y){o.value=y}function c(y){var E=y.target.value;l.current=E.replace(/[\r\n]/g,""),i("change",l.current)}function n(){l.inComposition=!0}function v(){l.inComposition=!1}function x(y){var E=y.keyCode;E===_e.ENTER&&y.preventDefault(),!l.inComposition&&(l.lastKeyCode=E)}function p(y){var E=y.keyCode,F=y.ctrlKey,H=y.altKey,m=y.metaKey,_=y.shiftKey;l.lastKeyCode===E&&!l.inComposition&&!F&&!H&&!m&&!_&&(E===_e.ENTER?(V(),i("end")):E===_e.ESC&&(l.current=e.originContent,i("cancel")))}function U(){V()}function V(){i("save",l.current.trim())}var z=M(function(){var y;return y={},L(y,"".concat(e.prefixCls),!0),L(y,"".concat(e.prefixCls,"-edit-content"),!0),L(y,"".concat(e.prefixCls,"-rtl"),e.direction==="rtl"),y});return function(){return d("div",{class:z.value},[d(Ct,{ref:f,maxlength:e.maxlength,value:l.current,onChange:c,onKeydown:x,onKeyup:p,onCompositionstart:n,onCompositionend:v,onBlur:U,rows:1,autoSize:e.autoSize===void 0||e.autoSize},null),u.enterIcon?u.enterIcon({className:"".concat(e.prefixCls,"-edit-content-confirm")}):d(Ht,{class:"".concat(e.prefixCls,"-edit-content-confirm")},null)])}}}),Vt=Ut,Xt=3,Wt=8,w,we={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Yt(t){var e=Array.prototype.slice.apply(t);return e.map(function(a){return"".concat(a,": ").concat(t.getPropertyValue(a),";")}).join("")}function tt(t,e){t.setAttribute("aria-hidden","true");var a=window.getComputedStyle(e),i=Yt(a);t.setAttribute("style",i),t.style.position="fixed",t.style.left="0",t.style.height="auto",t.style.minHeight="auto",t.style.maxHeight="auto",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.borderTopWidth="0",t.style.borderBottomWidth="0",t.style.top="-999999px",t.style.zIndex="-1000",t.style.textOverflow="clip",t.style.whiteSpace="normal",t.style.webkitLineClamp="none"}function Zt(t){var e=document.createElement("div");tt(e,t),e.appendChild(document.createTextNode("text")),document.body.appendChild(e);var a=e.getBoundingClientRect().height;return document.body.removeChild(e),a}var qt=function(t,e,a,i,u){w||(w=document.createElement("div"),w.setAttribute("aria-hidden","true"),document.body.appendChild(w));var l=e.rows,o=e.suffix,f=o===void 0?"":o,c=Zt(t),n=Math.round(c*l*100)/100;tt(w,t);var v=xt({render:function(){return d("div",{style:we},[d("span",{style:we},[a,f]),d("span",{style:we},[i])])}});v.mount(w);function x(){var m=Math.round(w.getBoundingClientRect().height*100)/100;return m-.1<=n}if(x())return v.unmount(),{content:a,text:w.innerHTML,ellipsis:!1};var p=Array.prototype.slice.apply(w.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(m){var _=m.nodeType,S=m.data;return _!==Wt&&S!==""}),U=Array.prototype.slice.apply(w.childNodes[0].childNodes[1].cloneNode(!0).childNodes);v.unmount();var V=[];w.innerHTML="";var z=document.createElement("span");w.appendChild(z);var y=document.createTextNode(u+f);z.appendChild(y),U.forEach(function(m){w.appendChild(m)});function E(m){z.insertBefore(m,y)}function F(m,_){var S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,$=arguments.length>3&&arguments[3]!==void 0?arguments[3]:_.length,be=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,K=Math.floor((S+$)/2),se=_.slice(0,K);if(m.textContent=se,S>=$-1)for(var X=$;X>=S;X-=1){var Q=_.slice(0,X);if(m.textContent=Q,x()||!Q)return X===_.length?{finished:!1,vNode:_}:{finished:!0,vNode:Q}}return x()?F(m,_,K,$,K):F(m,_,S,K,be)}function H(m){var _=m.nodeType;if(_===Xt){var S=m.textContent||"",$=document.createTextNode(S);return E($),F($,S)}return{finished:!1,vNode:null}}return p.some(function(m){var _=H(m),S=_.finished,$=_.vNode;return $&&V.push($),S}),{content:V,text:w.innerHTML,ellipsis:!0}},Gt=["prefixCls","class","direction","component"],Jt=function(){return{prefixCls:String,direction:String,component:String}},Qt=re({name:"ATypography",inheritAttrs:!1,props:Jt(),setup:function(e,a){var i=a.slots,u=a.attrs,l=Ye("typography",e),o=l.prefixCls,f=l.direction;return function(){var c,n=h(h({},e),u);n.prefixCls,n.class,n.direction;var v=n.component,x=v===void 0?"article":v,p=ve(n,Gt);return d(x,h({class:_t(o.value,L({},"".concat(o.value,"-rtl"),f.value==="rtl"),u.class)},p),{default:function(){return[(c=i.default)===null||c===void 0?void 0:c.call(i)]}})}}}),N=Qt,en=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var a=document.activeElement,i=[],u=0;u<e.rangeCount;u++)i.push(e.getRangeAt(u));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||i.forEach(function(l){e.addRange(l)}),a&&a.focus()}},tn=en,He={"text/plain":"Text","text/html":"Url",default:"Text"},nn="Copy to clipboard: #{key}, Enter";function an(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function rn(t,e){var a,i,u,l,o,f=!1;e||(e={});var c=e.debug||!1;try{i=tn(),u=document.createRange(),l=document.getSelection(),o=document.createElement("span"),o.textContent=t,o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(v){if(v.stopPropagation(),e.format)if(v.preventDefault(),typeof v.clipboardData=="undefined"){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var x=He[e.format]||He.default;window.clipboardData.setData(x,t)}else v.clipboardData.clearData(),v.clipboardData.setData(e.format,t);e.onCopy&&(v.preventDefault(),e.onCopy(v.clipboardData))}),document.body.appendChild(o),u.selectNodeContents(o),l.addRange(u);var n=document.execCommand("copy");if(!n)throw new Error("copy command was unsuccessful");f=!0}catch(v){c&&console.error("unable to copy using execCommand: ",v),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),f=!0}catch(x){c&&console.error("unable to copy using clipboardData: ",x),c&&console.error("falling back to prompt"),a=an("message"in e?e.message:nn),window.prompt(a,t)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(u):l.removeAllRanges()),o&&document.body.removeChild(o),i()}return f}var ln=["type","disabled","content","class","style"],on=Ze("webkitLineClamp"),sn=Ze("textOverflow"),Ke="...",le=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},un=re({compatConfig:{MODE:3},name:"Base",inheritAttrs:!1,props:le(),setup:function(e,a){var i=a.slots,u=a.attrs,l=a.emit,o=Ye("typography",e),f=o.prefixCls,c=o.direction,n=Xe({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),v=ae(),x=ae(),p=M(function(){var r=e.ellipsis;return r?h({rows:1,expandable:!1},q(r)==="object"?r:null):{}});We(function(){n.clientRendered=!0}),Et(function(){clearTimeout(n.copyId),Ee.cancel(n.rafId)}),pe([function(){return p.value.rows},function(){return e.content}],function(){Le(function(){se()})},{flush:"post",deep:!0,immediate:!0}),Tt(function(){e.content===void 0&&(ie(!e.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),ie(!e.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))});function U(){var r,s;return e.ellipsis||e.editable?e.content:(r=v.value)===null||r===void 0||(s=r.$el)===null||s===void 0?void 0:s.innerText}function V(r){var s=p.value.onExpand;n.expanded=!0,s==null||s(r)}function z(r){r.preventDefault(),n.originContent=e.content,K(!0)}function y(r){E(r),K(!1)}function E(r){var s=m.value.onChange;r!==e.content&&(l("update:content",r),s==null||s(r))}function F(){var r,s;(r=(s=m.value).onCancel)===null||r===void 0||r.call(s),K(!1)}function H(r){r.preventDefault(),r.stopPropagation();var s=e.copyable,g=h({},q(s)==="object"?s:null);g.text===void 0&&(g.text=U()),rn(g.text||""),n.copied=!0,Le(function(){g.onCopy&&g.onCopy(),n.copyId=setTimeout(function(){n.copied=!1},3e3)})}var m=M(function(){var r=e.editable;return r?h({},q(r)==="object"?r:null):{editing:!1}}),_=St(!1,{value:M(function(){return m.value.editing})}),S=kt(_,2),$=S[0],be=S[1];function K(r){var s=m.value.onStart;r&&s&&s(),be(r)}pe($,function(r){if(!r){var s;(s=x.value)===null||s===void 0||s.focus()}},{flush:"post"});function se(){Ee.cancel(n.rafId),n.rafId=Ee(function(){Q()})}var X=M(function(){var r=p.value,s=r.rows,g=r.expandable,b=r.suffix,k=r.onEllipsis,C=r.tooltip;return b||C||e.editable||e.copyable||g||k?!1:s===1?sn:on}),Q=function(){var s,g,b=n.ellipsisText,k=n.isEllipsis,C=p.value,T=C.rows,B=C.suffix,R=C.onEllipsis;if(!(!T||T<0||!((s=v.value)!==null&&s!==void 0&&s.$el)||n.expanded||e.content===void 0)&&!X.value){var O=qt((g=v.value)===null||g===void 0?void 0:g.$el,{rows:T,suffix:B},e.content,Oe(!0),Ke),ee=O.content,Y=O.text,I=O.ellipsis;(b!==Y||n.isEllipsis!==I)&&(n.ellipsisText=Y,n.ellipsisContent=ee,n.isEllipsis=I,k!==I&&R&&R(I))}};function lt(r,s){var g=r.mark,b=r.code,k=r.underline,C=r.delete,T=r.strong,B=r.keyboard,R=s;function O(ee,Y){if(!!ee){var I=function(){return R}();R=d(Y,null,{default:function(){return[I]}})}}return O(T,"strong"),O(k,"u"),O(C,"del"),O(b,"code"),O(g,"mark"),O(B,"kbd"),R}function ot(r){var s=p.value,g=s.expandable,b=s.symbol;if(!g||!r&&(n.expanded||!n.isEllipsis))return null;var k=(i.ellipsisSymbol?i.ellipsisSymbol():b)||n.expandStr;return d("a",{key:"expand",class:"".concat(f.value,"-expand"),onClick:V,"aria-label":n.expandStr},[k])}function st(){if(!!e.editable){var r=e.editable,s=r.tooltip,g=r.triggerType,b=g===void 0?["icon"]:g,k=i.editableIcon?i.editableIcon():d(It,{role:"button"},null),C=i.editableTooltip?i.editableTooltip():n.editStr,T=typeof C=="string"?C:"";return b.indexOf("icon")!==-1?d(Te,{key:"edit",title:s===!1?"":C},{default:function(){return[d(Me,{ref:x,class:"".concat(f.value,"-edit"),onClick:z,"aria-label":T},{default:function(){return[k]}})]}}):null}}function ut(){if(!!e.copyable){var r=e.copyable.tooltip,s=n.copied?n.copiedStr:n.copyStr,g=i.copyableTooltip?i.copyableTooltip({copied:n.copied}):s,b=typeof g=="string"?g:"",k=n.copied?d(Pt,null,null):d(Rt,null,null),C=i.copyableIcon?i.copyableIcon({copied:!!n.copied}):k;return d(Te,{key:"copy",title:r===!1?"":g},{default:function(){return[d(Me,{class:["".concat(f.value,"-copy"),L({},"".concat(f.value,"-copy-success"),n.copied)],onClick:H,"aria-label":b},{default:function(){return[C]}})]}})}}function ct(){var r=u.class,s=u.style,g=m.value,b=g.maxlength,k=g.autoSize,C=g.onEnd;return d(Vt,{class:r,style:s,prefixCls:f.value,value:e.content,originContent:n.originContent,maxlength:b,autoSize:k,onSave:y,onChange:E,onCancel:F,onEnd:C,direction:c.value},{enterIcon:i.editableEnterIcon})}function Oe(r){return[ot(r),st(),ut()].filter(function(s){return s})}return function(){var r,s=m.value.triggerType,g=s===void 0?["icon"]:s,b=e.ellipsis||e.editable?e.content!==void 0?e.content:(r=i.default)===null||r===void 0?void 0:r.call(i):i.default?i.default():e.content;return $.value?ct():d($t,{componentName:"Text",children:function(C){var T,B=h(h({},e),u),R=B.type,O=B.disabled;B.content;var ee=B.class,Y=B.style,I=ve(B,ln),ue=p.value,j=ue.rows,De=ue.suffix,Ce=ue.tooltip,dt=C.edit,pt=C.copy,ft=C.copied,vt=C.expand;n.editStr=dt,n.copyStr=pt,n.copiedStr=ft,n.expandStr=vt;var yt=J(I,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),ce=X.value,mt=j===1&&ce,Ae=j&&j>1&&ce,Z=b,gt;if(j&&n.isEllipsis&&!n.expanded&&!ce){var xe,Fe=I.title,de=Fe||"";!Fe&&(typeof b=="string"||typeof b=="number")&&(de=String(b)),de=(xe=de)===null||xe===void 0?void 0:xe.slice(String(n.ellipsisContent||"").length),Z=d(fe,null,[wt(n.ellipsisContent),d("span",{title:de,"aria-hidden":"true"},[Ke]),De])}else Z=d(fe,null,[b,De]);Z=lt(e,Z);var ht=Ce&&j&&n.isEllipsis&&!n.expanded&&!ce,bt=i.ellipsisTooltip?i.ellipsisTooltip():Ce;return d(Nt,{onResize:se,disabled:!j},{default:function(){return[d(N,h({ref:v,class:[(T={},L(T,"".concat(f.value,"-").concat(R),R),L(T,"".concat(f.value,"-disabled"),O),L(T,"".concat(f.value,"-ellipsis"),j),L(T,"".concat(f.value,"-single-line"),j===1&&!n.isEllipsis),L(T,"".concat(f.value,"-ellipsis-single-line"),mt),L(T,"".concat(f.value,"-ellipsis-multiple-line"),Ae),T),ee],style:h(h({},Y),{},{WebkitLineClamp:Ae?j:void 0}),"aria-label":gt,direction:c.value,onClick:g.indexOf("text")!==-1?z:function(){}},yt),{default:function(){return[ht?d(Te,{title:Ce===!0?b:bt},{default:function(){return[d("span",null,[Z])]}}):Z,Oe()]}})]}})}},null)}}}),oe=un,cn=["ellipsis","rel"],dn=function(){return J(h(h({},le()),{},{ellipsis:{type:Boolean,default:void 0}}),["component"])},ye=function(e,a){var i=a.slots,u=a.attrs,l=h(h({},e),u),o=l.ellipsis,f=l.rel,c=ve(l,cn);ie(q(o)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var n=h(h({},c),{},{rel:f===void 0&&c.target==="_blank"?"noopener noreferrer":f,ellipsis:!!o,component:"a"});return delete n.navigate,d(oe,n,i)};ye.displayName="ATypographyLink";ye.inheritAttrs=!1;ye.props=dn();var nt=ye,pn=function(){return J(le(),["component"])},me=function(e,a){var i=a.slots,u=a.attrs,l=h(h({},e),{},{component:"div"},u);return d(oe,l,i)};me.displayName="ATypographyParagraph";me.inheritAttrs=!1;me.props=pn();var at=me,fn=function(){return h(h({},J(le(),["component"])),{},{ellipsis:{type:[Boolean,Object],default:void 0}})},ge=function(e,a){var i=a.slots,u=a.attrs,l=e.ellipsis;ie(q(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var o=h(h({},e),{},{ellipsis:l&&q(l)==="object"?J(l,["expandable","rows"]):l,component:"span"},u);return d(oe,o,i)};ge.displayName="ATypographyText";ge.inheritAttrs=!1;ge.props=fn();var it=ge,vn=["level"],yn=Bt(1,2,3,4,5),mn=function(){return h(h({},J(le(),["component","strong"])),{},{level:Number})},he=function(e,a){var i=a.slots,u=a.attrs,l=e.level,o=l===void 0?1:l,f=ve(e,vn),c;yn.indexOf(o)!==-1?c="h".concat(o):(ie(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),c="h1");var n=h(h({},f),{},{component:c},u);return d(oe,n,i)};he.displayName="ATypographyTitle";he.inheritAttrs=!1;he.props=mn();var rt=he;N.Text=it;N.Title=rt;N.Paragraph=at;N.Link=nt;N.Base=oe;N.install=function(t){return t.component(N.name,N),t.component(N.Text.displayName,it),t.component(N.Title.displayName,rt),t.component(N.Paragraph.displayName,at),t.component(N.Link.displayName,nt),t};var gn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"},hn=gn;function Ue(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable}))),i.forEach(function(u){bn(t,u,a[u])})}return t}function bn(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var Be=function(e,a){var i=Ue({},e,a.attrs);return d(Ve,Ue({},i,{icon:hn}),null)};Be.displayName="BellOutlined";Be.inheritAttrs=!1;var Cn=Be;const Ne=[{key:"1",name:"\u901A\u77E5",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",description:"",datetime:"2022-10-09",type:"1"}]},{key:"2",name:"\u6D88\u606F",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u94FE\u4E3B\u53D1\u6765\u5907\u8D27\u63D0\u9192",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2022-10-07",type:"2",clickClose:!0}]},{key:"3",name:"\u5F85\u529E",list:[{id:"000000009",avatar:"",title:"\u4EFB\u52A1\u540D\u79F0",description:"\u4EFB\u52A1\u9700\u8981\u5728 2022-10-12 20:00 \u524D\u542F\u52A8",datetime:"",extra:"\u672A\u5F00\u59CB",color:"",type:"3"},{id:"000000010",avatar:"",title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",description:"\u4E0B\u6E38\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",datetime:"",extra:"\u9A6C\u4E0A\u5230\u671F",color:"red",type:"3"}]}];const xn=re({components:{[Ie.name]:Ie,[te.name]:te,[te.Item.name]:te.Item,AListItemMeta:te.Item.Meta,ATypographyParagraph:N.Paragraph,[je.name]:je},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(t,{emit:e}){const{prefixCls:a}=qe("header-notify-list"),i=ae(t.currentPage||1),u=M(()=>{const{pageSize:c,list:n}=t;if(c===!1)return[];let v=Ot(c)?c:5;return n.slice(v*(Se(i)-1),v*Se(i))});pe(()=>t.currentPage,c=>{i.value=c});const l=M(()=>!!t.onTitleClick),o=M(()=>{const{list:c,pageSize:n}=t;return n>0&&c&&c.length>n?{total:c.length,pageSize:n,current:Se(i),onChange(v){i.value=v,e("update:currentPage",v)}}:!1});function f(c){t.onTitleClick&&t.onTitleClick(c)}return{prefixCls:a,getPagination:o,getData:u,handleTitleClick:f,isTitleClickable:l}}}),_n={class:"title"},En={key:0,class:"extra"},Tn={key:1},Sn={key:0,class:"description"},kn={class:"datetime"};function wn(t,e,a,i,u,l){const o=D("a-typography-paragraph"),f=D("a-tag"),c=D("a-avatar"),n=D("a-list-item-meta"),v=D("a-list-item"),x=D("a-list");return P(),G(x,{class:et(t.prefixCls),bordered:"",pagination:t.getPagination},{default:A(()=>[(P(!0),W(fe,null,Je(t.getData,p=>(P(),G(v,{key:p.id,class:"list-item"},{default:A(()=>[d(n,null,{title:A(()=>[ke("div",_n,[d(o,{onClick:U=>t.handleTitleClick(p),style:Dt([{width:"100%","margin-bottom":"0 !important"},{cursor:t.isTitleClickable?"pointer":""}]),delete:!!p.titleDelete,ellipsis:t.$props.titleRows&&t.$props.titleRows>0?{rows:t.$props.titleRows,tooltip:!!p.title}:!1,content:p.title},null,8,["onClick","style","delete","ellipsis","content"]),p.extra?(P(),W("div",En,[d(f,{class:"tag",color:p.color},{default:A(()=>[Qe(ne(p.extra),1)]),_:2},1032,["color"])])):$e("",!0)])]),avatar:A(()=>[p.avatar?(P(),G(c,{key:0,class:"avatar",src:p.avatar},null,8,["src"])):(P(),W("span",Tn,ne(p.avatar),1))]),description:A(()=>[ke("div",null,[p.description?(P(),W("div",Sn,[d(o,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:t.$props.descRows&&t.$props.descRows>0?{rows:t.$props.descRows,tooltip:!!p.description}:!1,content:p.description},null,8,["ellipsis","content"])])):$e("",!0),ke("div",kn,ne(p.datetime),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["class","pagination"])}var Nn=Ge(xn,[["render",wn],["__scopeId","data-v-313258aa"]]);const $n=re({components:{Popover:At,BellOutlined:Cn,Tabs:Re,TabPane:Re.TabPane,Badge:Lt,NoticeList:Nn},setup(){const{prefixCls:t}=qe("header-notify"),{createMessage:e}=Ft(),a=ae(Ne),i=M(()=>{let l=0;for(let o=0;o<Ne.length;o++)l+=Ne[o].list.length;return l});function u(l){e.success("\u4F60\u70B9\u51FB\u4E86\u901A\u77E5\uFF0CID="+l.id),l.titleDelete=!l.titleDelete}return{prefixCls:t,listData:a,count:i,onNoticeClick:u,numberStyle:{}}}}),Pn={key:0};function Bn(t,e,a,i,u,l){const o=D("BellOutlined"),f=D("Badge"),c=D("NoticeList"),n=D("TabPane"),v=D("Tabs"),x=D("Popover");return P(),W("div",{class:et(t.prefixCls)},[d(x,{title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:A(()=>[d(v,null,{default:A(()=>[(P(!0),W(fe,null,Je(t.listData,p=>(P(),G(n,{key:p.key},{tab:A(()=>[Qe(ne(p.name)+" ",1),p.list.length!==0?(P(),W("span",Pn,"("+ne(p.list.length)+")",1)):$e("",!0)]),default:A(()=>[p.key==="1"?(P(),G(c,{key:0,list:p.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])):(P(),G(c,{key:1,list:p.list},null,8,["list"]))]),_:2},1024))),128))]),_:1})]),default:A(()=>[d(f,{count:t.count,dot:"",numberStyle:t.numberStyle},{default:A(()=>[d(o)]),_:1},8,["count","numberStyle"])]),_:1},8,["overlayClassName"])],2)}var Yn=Ge($n,[["render",Bn]]);export{Yn as default};
