var T=Object.defineProperty,V=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&R(e,r,t[r]);if(M)for(var r of M(t))O.call(t,r)&&R(e,r,t[r]);return e},B=(e,t)=>V(e,G(t));var E=(e,t,r)=>new Promise((h,p)=>{var g=u=>{try{f(r.next(u))}catch(c){p(c)}},d=u=>{try{f(r.throw(u))}catch(c){p(c)}},f=u=>u.done?h(u.value):Promise.resolve(u.value).then(g,d);f((r=r.apply(e,t)).next())});import{J as z,a as F,bg as J,aM as K,r as W,bn as j,b as q,bM as x,a_ as H,c as Q,W as U,bp as X,bI as Y,bl as Z,eG as ee,aF as I,o as b,i as P,k as te,s as w,K as A,C as ne,t as S,x as ae,n as re,E as se}from"./index.46544bfc.js";import{B as D}from"./index.4bdc279b.js";const oe=F({name:"LayoutBreadcrumb",components:{Icon:J,[D.name]:D},props:{theme:K.oneOf(["dark","light"])},setup(){const e=W([]),{currentRoute:t}=j(),{prefixCls:r}=q("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=x(),p=H(),{t:g}=Q();U(()=>E(this,null,function*(){var C,y,$;if(t.value.name===X)return;const s=yield Y(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const i=Z(s,o),m=s.filter(N=>N.path===i[0]),l=d(m,i);if(!l||l.length===0)return;const _=f(l);(y=t.value.meta)!=null&&y.currentActiveMenu&&_.push(B(k({},t.value),{name:(($=t.value.meta)==null?void 0:$.title)||t.value.name})),e.value=_}));function d(s,n){const a=[];return s.forEach(o=>{var i,m;n.includes(o.path)&&a.push(B(k({},o),{name:((i=o.meta)==null?void 0:i.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...d(o.children,n))}),a}function f(s){return ee(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:i,hideBreadcrumb:m}=a;return!(!i||m)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function u(s,n,a){a==null||a.preventDefault();const{children:o,redirect:i,meta:m}=s;if((o==null?void 0:o.length)&&!i){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(i&&se(i))p(i);else{let l="";n.length===1?l=n[0]:l=`${n.slice(1).pop()||""}`,l=/^\//.test(l)?l:`/${l}`,p(l)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:u,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,p,g){const d=I("Icon"),f=I("router-link"),u=I("a-breadcrumb");return b(),P("div",{class:re([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[te(u,{routes:e.routes},{itemRender:w(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),A(d,{key:0,icon:e.getIcon(c)},null,8,["icon"])):ne("",!0),e.hasRedirect(v,c)?(b(),A(f,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:w(()=>[ae(S(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),P("span",ce,S(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var fe=z(oe,[["render",ie]]);export{fe as default};
