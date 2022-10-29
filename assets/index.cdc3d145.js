import{a as F,U as S,f as h,Q as j,R as d,k as s,cs as D,ct as M,r as Q,W as V,F as q,cu as z,S as N,b9 as G}from"./index.46544bfc.js";var H=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},J=F({compatConfig:{MODE:3},name:"ACheckableTag",props:H(),setup:function(e,i){var l=i.slots,r=i.emit,g=S("tag",e),u=g.prefixCls,o=function(C){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",C)},k=h(function(){var n;return j(u.value,(n={},d(n,"".concat(u.value,"-checkable"),!0),d(n,"".concat(u.value,"-checkable-checked"),e.checked),n))});return function(){var n;return s("span",{class:k.value,onClick:o},[(n=l.default)===null||n===void 0?void 0:n.call(l)])}}}),b=J,K=new RegExp("^(".concat(D.join("|"),")(-inverse)?$")),L=new RegExp("^(".concat(M.join("|"),")$")),X=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},f=F({compatConfig:{MODE:3},name:"ATag",props:X(),slots:["closeIcon","icon"],setup:function(e,i){var l=i.slots,r=i.emit,g=i.attrs,u=S("tag",e),o=u.prefixCls,k=u.direction,n=Q(!0);V(function(){e.visible!==void 0&&(n.value=e.visible)});var C=function(t){t.stopPropagation(),r("update:visible",!1),r("close",t),!t.defaultPrevented&&e.visible===void 0&&(n.value=!1)},v=h(function(){var a=e.color;return a?K.test(a)||L.test(a):!1}),E=h(function(){var a;return j(o.value,(a={},d(a,"".concat(o.value,"-").concat(e.color),v.value),d(a,"".concat(o.value,"-has-color"),e.color&&!v.value),d(a,"".concat(o.value,"-hidden"),!n.value),d(a,"".concat(o.value,"-rtl"),k.value==="rtl"),a))});return function(){var a,t,p,m=e.icon,R=m===void 0?(a=l.icon)===null||a===void 0?void 0:a.call(l):m,y=e.color,P=e.closeIcon,T=P===void 0?(t=l.closeIcon)===null||t===void 0?void 0:t.call(l):P,x=e.closable,w=x===void 0?!1:x,B=function(){return w?T?s("span",{class:"".concat(o.value,"-close-icon"),onClick:C},[T]):s(G,{class:"".concat(o.value,"-close-icon"),onClick:C},null):null},O={backgroundColor:y&&!v.value?y:void 0},I=R||null,$=(p=l.default)===null||p===void 0?void 0:p.call(l),U=I?s(q,null,[I,s("span",null,[$])]):$,W="onClick"in g,_=s("span",{class:E.value,style:O},[U,B()]);return W?s(z,null,{default:function(){return[_]}}):_}}});f.CheckableTag=b;f.install=function(c){return c.component(f.name,f),c.component(b.name,b),c};var Z=f;export{Z as T};
