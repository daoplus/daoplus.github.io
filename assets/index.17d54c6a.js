import{a as I,T as E,b8 as C,N as $,k as l,_ as x,R as N,cS as U,cR as V,Y as w,X as K,a2 as L,aa as Q,Q as O,bh as T,a6 as W}from"./index.00d33503.js";var X=["class","style"],Y=function(){return{prefixCls:String,href:String,separator:N.any,overlay:N.any,onClick:Function}},S=I({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Y(),slots:["separator","overlay"],setup:function(r,i){var t=i.slots,o=i.attrs,p=E("breadcrumb",r),d=p.prefixCls,b=function(f,n){var e=C(t,r,"overlay");return e?l(V,{overlay:e,placement:"bottom"},{default:function(){return[l("span",{class:"".concat(n,"-overlay-link")},[f,l(U,null,null)])]}}):f};return function(){var h,f=(h=C(t,r,"separator"))!==null&&h!==void 0?h:"/",n=C(t,r),e=o.class,u=o.style,s=$(o,X),c;return r.href!==void 0?c=l("a",x({class:"".concat(d.value,"-link"),onClick:r.onClick},s),[n]):c=l("span",x({class:"".concat(d.value,"-link"),onClick:r.onClick},s),[n]),c=b(c,d.value),n?l("span",{class:e,style:u},[c,f&&l("span",{class:"".concat(d.value,"-separator")},[f])]):null}}}),q=function(){return{prefixCls:String,routes:{type:Array},params:N.any,separator:N.any,itemRender:{type:Function}}};function z(a,r){if(!a.breadcrumbName)return null;var i=Object.keys(r).join("|"),t=a.breadcrumbName.replace(new RegExp(":(".concat(i,")"),"g"),function(o,p){return r[p]||o});return t}function D(a){var r=a.route,i=a.params,t=a.routes,o=a.paths,p=t.indexOf(r)===t.length-1,d=z(r,i);return p?l("span",null,[d]):l("a",{href:"#/".concat(o.join("/"))},[d])}var g=I({compatConfig:{MODE:3},name:"ABreadcrumb",props:q(),slots:["separator","itemRender"],setup:function(r,i){var t=i.slots,o=E("breadcrumb",r),p=o.prefixCls,d=o.direction,b=function(e,u){return e=(e||"").replace(/^\//,""),Object.keys(u).forEach(function(s){e=e.replace(":".concat(s),u[s])}),e},h=function(e,u,s){var c=W(e),v=b(u||"",s);return v&&c.push(v),c},f=function(e){var u=e.routes,s=u===void 0?[]:u,c=e.params,v=c===void 0?{}:c,R=e.separator,_=e.itemRender,A=_===void 0?D:_,B=[];return s.map(function(m){var y=b(m.path,v);y&&B.push(y);var j=[].concat(B),M=null;return m.children&&m.children.length&&(M=l(T,null,{default:function(){return[m.children.map(function(P){return l(T.Item,{key:P.path||P.breadcrumbName},{default:function(){return[A({route:P,params:v,routes:s,paths:h(j,P.path,v)})]}})})]}})),l(S,{overlay:M,separator:R,key:y||m.breadcrumbName},{default:function(){return[A({route:m,params:v,routes:s,paths:j})]}})})};return function(){var n,e,u,s=r.routes,c=r.params,v=c===void 0?{}:c,R=w(C(t,r)),_=(n=C(t,r,"separator"))!==null&&n!==void 0?n:"/",A=r.itemRender||t.itemRender||D;s&&s.length>0?u=f({routes:s,params:v,separator:_,itemRender:A}):R.length&&(u=R.map(function(m,y){return K(L(m.type)==="object"&&(m.type.__ANT_BREADCRUMB_ITEM||m.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Q(m,{separator:_,key:y})}));var B=(e={},O(e,p.value,!0),O(e,"".concat(p.value,"-rtl"),d.value==="rtl"),e);return l("div",{class:B},[u])}}}),G=["separator","class"],H=function(){return{prefixCls:String}},k=I({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:H(),setup:function(r,i){var t=i.slots,o=i.attrs,p=E("breadcrumb",r),d=p.prefixCls;return function(){var b;o.separator;var h=o.class,f=$(o,G),n=w((b=t.default)===null||b===void 0?void 0:b.call(t));return l("span",x({class:["".concat(d.value,"-separator"),h]},f),[n.length>0?n:"/"])}}});g.Item=S;g.Separator=k;g.install=function(a){return a.component(g.name,g),a.component(S.name,S),a.component(k.name,k),a};export{g as B};
