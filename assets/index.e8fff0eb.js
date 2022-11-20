import{Q as P,k as E,a as J,M as oe,ao as se,T as ie,r as D,f as k,V as fe,b7 as ve,_ as h,b3 as ye,aq as Q,O as de,R as ne,aX as ce,a6 as X,G as z,cO as pe,as as he,au as me,N as xe,at as Ke}from"./index.00d33503.js";import{r as be,T as ke,t as ge,e as te,f as Ne,F as Oe,c as Ee,g as we,V as Ce,h as De}from"./iconUtil.bc2b7610.js";var ae=4;function Pe(n){var e,t=n.dropPosition,r=n.dropLevelOffset,d=n.prefixCls,s=n.indent,c=n.direction,x=c===void 0?"ltr":c,u=x==="ltr"?"left":"right",N=x==="ltr"?"right":"left",v=(e={},P(e,u,"".concat(-r*s+ae,"px")),P(e,N,0),e);switch(t){case-1:v.top="".concat(-3,"px");break;case 1:v.bottom="".concat(-3,"px");break;default:v.bottom="".concat(-3,"px"),v[u]="".concat(s+ae,"px");break}return E("div",{style:v,class:"".concat(d,"-drop-indicator")},null)}var ue=function(){var e=ge();return h(h({},e),{},{showLine:{type:[Boolean,Object],default:void 0},multiple:{type:Boolean,default:void 0},autoExpandParent:{type:Boolean,default:void 0},checkStrictly:{type:Boolean,default:void 0},checkable:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},defaultExpandAll:{type:Boolean,default:void 0},defaultExpandParent:{type:Boolean,default:void 0},defaultExpandedKeys:{type:Array},expandedKeys:{type:Array},checkedKeys:{type:[Array,Object]},defaultCheckedKeys:{type:Array},selectedKeys:{type:Array},defaultSelectedKeys:{type:Array},selectable:{type:Boolean,default:void 0},loadedKeys:{type:Array},draggable:{type:Boolean,default:void 0},showIcon:{type:Boolean,default:void 0},icon:{type:Function},switcherIcon:ne.any,prefixCls:String,replaceFields:{type:Object},blockNode:{type:Boolean,default:void 0},openAnimation:ne.any,onDoubleclick:e.onDblclick,"onUpdate:selectedKeys":Function,"onUpdate:checkedKeys":Function,"onUpdate:expandedKeys":Function})},B=J({compatConfig:{MODE:3},name:"ATree",inheritAttrs:!1,props:oe(ue(),{checkable:!1,selectable:!0,showIcon:!1,blockNode:!1}),slots:["icon","title","switcherIcon","titleRender"],setup:function(e,t){var r=t.attrs,d=t.expose,s=t.emit,c=t.slots;se(!(e.treeData===void 0&&c.default));var x=ie("tree",e),u=x.prefixCls,N=x.direction,v=x.virtual,m=D(),g=function(y){var p;(p=m.value)===null||p===void 0||p.scrollTo(y)};d({treeRef:m,onNodeExpand:function(){for(var y,p=arguments.length,C=new Array(p),w=0;w<p;w++)C[w]=arguments[w];(y=m.value)===null||y===void 0||y.onNodeExpand.apply(y,C)},scrollTo:g,selectedKeys:k(function(){var a;return(a=m.value)===null||a===void 0?void 0:a.selectedKeys}),checkedKeys:k(function(){var a;return(a=m.value)===null||a===void 0?void 0:a.checkedKeys}),halfCheckedKeys:k(function(){var a;return(a=m.value)===null||a===void 0?void 0:a.halfCheckedKeys}),loadedKeys:k(function(){var a;return(a=m.value)===null||a===void 0?void 0:a.loadedKeys}),loadingKeys:k(function(){var a;return(a=m.value)===null||a===void 0?void 0:a.loadingKeys}),expandedKeys:k(function(){var a;return(a=m.value)===null||a===void 0?void 0:a.expandedKeys})}),fe(function(){ve(e.replaceFields===void 0,"Tree","`replaceFields` is deprecated, please use fieldNames instead")});var j=function(y,p){s("update:checkedKeys",y),s("check",y,p)},H=function(y,p){s("update:expandedKeys",y),s("expand",y,p)},A=function(y,p){s("update:selectedKeys",y),s("select",y,p)};return function(){var a,y=e.showIcon,p=e.showLine,C=e.switcherIcon,w=C===void 0?c.switcherIcon:C,F=e.icon,L=F===void 0?c.icon:F,V=e.blockNode,I=e.checkable,T=e.selectable,R=e.fieldNames,l=R===void 0?e.replaceFields:R,o=e.motion,i=o===void 0?e.openAnimation:o,f=e.itemHeight,_=f===void 0?28:f,K=e.onDoubleclick,$=e.onDblclick,S=h(h(h({},r),ye(e,["onUpdate:checkedKeys","onUpdate:expandedKeys","onUpdate:selectedKeys","onDoubleclick"])),{},{showLine:Boolean(p),dropIndicatorRender:Pe,fieldNames:l,icon:L,itemHeight:_}),M=c.default?Q(c.default()):void 0;return E(ke,h(h({},S),{},{virtual:v.value,motion:i,ref:m,prefixCls:u.value,class:de((a={},P(a,"".concat(u.value,"-icon-hide"),!y),P(a,"".concat(u.value,"-block-node"),V),P(a,"".concat(u.value,"-unselectable"),!T),P(a,"".concat(u.value,"-rtl"),N.value==="rtl"),a),r.class),direction:N.value,checkable:I,selectable:T,switcherIcon:function(b){return be(u.value,w,p,b)},onCheck:j,onExpand:H,onSelect:A,onDblclick:$||K,children:M}),h(h({},c),{},{checkable:function(){return E("span",{class:"".concat(u.value,"-checkbox-inner")},null)}}))}}}),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"},$e=Te;function le(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable}))),r.forEach(function(d){Se(n,d,t[d])})}return n}function Se(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Y=function(e,t){var r=le({},e,t.attrs);return E(ce,le({},r,{icon:$e}),null)};Y.displayName="FolderOpenOutlined";Y.inheritAttrs=!1;var Ae=Y,_e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},Fe=_e;function re(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable}))),r.forEach(function(d){Ie(n,d,t[d])})}return n}function Ie(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Z=function(e,t){var r=re({},e,t.attrs);return E(ce,re({},r,{icon:Fe}),null)};Z.displayName="FolderOutlined";Z.inheritAttrs=!1;var Re=Z,O;(function(n){n[n.None=0]="None",n[n.Start=1]="Start",n[n.End=2]="End"})(O||(O={}));function ee(n,e,t){function r(d){var s=d[e.key],c=d[e.children];t(s,d)!==!1&&ee(c||[],e,t)}n.forEach(r)}function Be(n){var e=n.treeData,t=n.expandedKeys,r=n.startKey,d=n.endKey,s=n.fieldNames,c=s===void 0?{title:"title",key:"key",children:"children"}:s,x=[],u=O.None;if(r&&r===d)return[r];if(!r||!d)return[];function N(v){return v===r||v===d}return ee(e,c,function(v){if(u===O.End)return!1;if(N(v)){if(x.push(v),u===O.None)u=O.Start;else if(u===O.Start)return u=O.End,!1}else u===O.Start&&x.push(v);return t.indexOf(v)!==-1}),x}function W(n,e,t){var r=X(e),d=[];return ee(n,t,function(s,c){var x=r.indexOf(s);return x!==-1&&(d.push(c),r.splice(x,1)),!!r.length}),d}var je=["icon","blockNode"],He=function(){return h(h({},ue()),{},{expandAction:{type:[Boolean,String]}})};function Le(n){var e=n.isLeaf,t=n.expanded;return e?E(Oe,null,null):t?E(Ae,null,null):E(Re,null,null)}var q=J({compatConfig:{MODE:3},name:"ADirectoryTree",inheritAttrs:!1,props:oe(He(),{showIcon:!0,expandAction:"click"}),slots:["icon","title","switcherIcon","titleRender"],setup:function(e,t){var r,d=t.attrs,s=t.slots,c=t.emit,x=t.expose,u=D(e.treeData||te(Q((r=s.default)===null||r===void 0?void 0:r.call(s))));z(function(){return e.treeData},function(){u.value=e.treeData}),pe(function(){he(function(){if(e.treeData===void 0&&s.default){var l;u.value=te(Q((l=s.default)===null||l===void 0?void 0:l.call(s)))}})});var N=D(),v=D(),m=k(function(){return Ne(e.fieldNames)}),g=D(),j=function(o){var i;(i=g.value)===null||i===void 0||i.scrollTo(o)};x({scrollTo:j,selectedKeys:k(function(){var l;return(l=g.value)===null||l===void 0?void 0:l.selectedKeys}),checkedKeys:k(function(){var l;return(l=g.value)===null||l===void 0?void 0:l.checkedKeys}),halfCheckedKeys:k(function(){var l;return(l=g.value)===null||l===void 0?void 0:l.halfCheckedKeys}),loadedKeys:k(function(){var l;return(l=g.value)===null||l===void 0?void 0:l.loadedKeys}),loadingKeys:k(function(){var l;return(l=g.value)===null||l===void 0?void 0:l.loadingKeys}),expandedKeys:k(function(){var l;return(l=g.value)===null||l===void 0?void 0:l.expandedKeys})});var H=function(){var o=Ee(u.value,{fieldNames:m.value}),i=o.keyEntities,f;return e.defaultExpandAll?f=Object.keys(i):e.defaultExpandParent?f=we(e.expandedKeys||e.defaultExpandedKeys||[],i):f=e.expandedKeys||e.defaultExpandedKeys,f},A=D(e.selectedKeys||e.defaultSelectedKeys||[]),a=D(H());z(function(){return e.selectedKeys},function(){e.selectedKeys!==void 0&&(A.value=e.selectedKeys)},{immediate:!0}),z(function(){return e.expandedKeys},function(){e.expandedKeys!==void 0&&(a.value=e.expandedKeys)},{immediate:!0});var y=function(o,i){var f=i.isLeaf;f||o.shiftKey||o.metaKey||o.ctrlKey||g.value.onNodeExpand(o,i)},p=me(y,200,{leading:!0}),C=function(o,i){e.expandedKeys===void 0&&(a.value=o),c("update:expandedKeys",o),c("expand",o,i)},w=function(o,i){var f=e.expandAction;f==="click"&&p(o,i),c("click",o,i)},F=function(o,i){var f=e.expandAction;(f==="dblclick"||f==="doubleclick")&&p(o,i),c("doubleclick",o,i),c("dblclick",o,i)},L=function(o,i){var f=e.multiple,_=i.node,K=i.nativeEvent,$=_[m.value.key],S=h(h({},i),{},{selected:!0}),M=(K==null?void 0:K.ctrlKey)||(K==null?void 0:K.metaKey),U=K==null?void 0:K.shiftKey,b;f&&M?(b=o,N.value=$,v.value=b,S.selectedNodes=W(u.value,b,m.value)):f&&U?(b=Array.from(new Set([].concat(X(v.value||[]),X(Be({treeData:u.value,expandedKeys:a.value,startKey:$,endKey:N.value,fieldNames:m.value}))))),S.selectedNodes=W(u.value,b,m.value)):(b=[$],N.value=$,v.value=b,S.selectedNodes=W(u.value,b,m.value)),c("update:selectedKeys",b),c("select",b,S),e.selectedKeys===void 0&&(A.value=b)},V=function(o,i){c("update:checkedKeys",o),c("check",o,i)},I=ie("tree",e),T=I.prefixCls,R=I.direction;return function(){var l=de("".concat(T.value,"-directory"),P({},"".concat(T.value,"-directory-rtl"),R.value==="rtl"),d.class),o=e.icon,i=o===void 0?s.icon:o,f=e.blockNode,_=f===void 0?!0:f,K=xe(e,je);return E(B,h(h(h({},d),{},{icon:i||Le,ref:g,blockNode:_},K),{},{prefixCls:T.value,class:l,expandedKeys:a.value,selectedKeys:A.value,onSelect:L,onClick:w,onDblclick:F,onExpand:C,onCheck:V}),s)}}}),G=J(h(h({},Ce),{},{name:"ATreeNode",props:De})),Ue=Ke(B,{DirectoryTree:q,TreeNode:G,install:function(e){return e.component(B.name,B),e.component(G.name,G),e.component(q.name,q),e}});export{Ue as T};
