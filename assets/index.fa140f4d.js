import{r as k,X as Qe,ce as Be,a as ce,f as Z,k as f,b4 as ie,Q as ye,R as W,W as Le,_ as R,cf as G,ac as _,G as De,H as me,cg as Dt,bh as Kt,ch as Wt,ci as jt,S as Ke,aa as Ft,V as $t,bm as zt,a1 as dt,cj as Ee,ck as ft,cl as Ct,cm as Ht,m as Vt,N as Pt,Z as Gt,b3 as Ut,a5 as qt,cn as Xt,b7 as Ye,U as Yt,a2 as Zt,co as Qt,cp as bt,b9 as Jt}from"./index.46544bfc.js";import{u as ea}from"./useRefs.fa34633b.js";function ta(o){var e=k(),t=k(!1);function r(){for(var a=arguments.length,n=new Array(a),u=0;u<a;u++)n[u]=arguments[u];t.value||(Be.cancel(e.value),e.value=Be(function(){o.apply(void 0,n)}))}return Qe(function(){t.value=!0,Be.cancel(e.value)}),r}function aa(o){var e=k([]),t=k(typeof o=="function"?o():o),r=ta(function(){var n=t.value;e.value.forEach(function(u){n=u(n)}),e.value=[],t.value=n});function a(n){e.value.push(n),r()}return[t,a]}var na=ce({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var r=t.expose,a=t.attrs,n=k();function u(s){var c;(c=e.tab)!==null&&c!==void 0&&c.disabled||e.onClick(s)}r({domRef:n});function v(s){var c;s.preventDefault(),s.stopPropagation(),e.editable.onEdit("remove",{key:(c=e.tab)===null||c===void 0?void 0:c.key,event:s})}var l=Z(function(){var s;return e.editable&&e.closable!==!1&&!((s=e.tab)!==null&&s!==void 0&&s.disabled)});return function(){var s,c,b=e.prefixCls,g=e.id,M=e.active,I=e.tab,j=I.key,E=I.tab,z=I.disabled,T=I.closeIcon,d=e.renderWrapper,A=e.removeAriaLabel,H=e.editable,N=e.onFocus,B="".concat(b,"-tab"),L=f("div",{key:j,ref:n,class:ye(B,(s={},W(s,"".concat(B,"-with-remove"),l.value),W(s,"".concat(B,"-active"),M),W(s,"".concat(B,"-disabled"),z),s)),style:a.style,onClick:u},[f("div",{role:"tab","aria-selected":M,id:g&&"".concat(g,"-tab-").concat(j),class:"".concat(B,"-btn"),"aria-controls":g&&"".concat(g,"-panel-").concat(j),"aria-disabled":z,tabindex:z?null:0,onClick:function(D){D.stopPropagation(),u(D)},onKeydown:function(D){[ie.SPACE,ie.ENTER].includes(D.which)&&(D.preventDefault(),u(D))},onFocus:N},[typeof E=="function"?E():E]),l.value&&f("button",{type:"button","aria-label":A||"remove",tabindex:0,class:"".concat(B,"-remove"),onClick:function(D){D.stopPropagation(),v(D)}},[(T==null?void 0:T())||((c=H.removeIcon)===null||c===void 0?void 0:c.call(H))||"\xD7"])]);return d?d(L):L}}}),mt={width:0,height:0,left:0,top:0};function ia(o,e){var t=k(new Map);return Le(function(){for(var r,a=new Map,n=o.value,u=e.value.get((r=n[0])===null||r===void 0?void 0:r.key)||mt,v=u.left+u.width,l=0;l<n.length;l+=1){var s=n[l].key,c=e.value.get(s);if(!c){var b;c=e.value.get((b=n[l-1])===null||b===void 0?void 0:b.key)||mt}var g=a.get(s)||R({},c);g.right=v-g.left-g.width,a.set(s,g)}t.value=new Map(a)}),t}var It=ce({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var r=t.expose,a=t.attrs,n=k();return r({domRef:n}),function(){var u=e.prefixCls,v=e.editable,l=e.locale;return!v||v.showAdd===!1?null:f("button",{ref:n,type:"button",class:"".concat(u,"-nav-add"),style:a.style,"aria-label":(l==null?void 0:l.addAriaLabel)||"Add tab",onClick:function(c){v.onEdit("add",{event:c})}},[v.addIcon?v.addIcon():"+"])}}}),ra={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Ke.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},la=ce({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:ra,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var r=t.attrs,a=t.slots,n=G(!1),u=_(n,2),v=u[0],l=u[1],s=G(null),c=_(s,2),b=c[0],g=c[1],M=function(d){for(var A=e.tabs.filter(function(U){return!U.disabled}),H=A.findIndex(function(U){return U.key===b.value})||0,N=A.length,B=0;B<N;B+=1){H=(H+d+N)%N;var L=A[H];if(!L.disabled){g(L.key);return}}},I=function(d){var A=d.which;if(!v.value){[ie.DOWN,ie.SPACE,ie.ENTER].includes(A)&&(l(!0),d.preventDefault());return}switch(A){case ie.UP:M(-1),d.preventDefault();break;case ie.DOWN:M(1),d.preventDefault();break;case ie.ESC:l(!1);break;case ie.SPACE:case ie.ENTER:b.value!==null&&e.onTabClick(b.value,d);break}},j=Z(function(){return"".concat(e.id,"-more-popup")}),E=Z(function(){return b.value!==null?"".concat(j.value,"-").concat(b.value):null}),z=function(d,A){d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:A,event:d})};return De(function(){me(b,function(){var T=document.getElementById(E.value);T&&T.scrollIntoView&&T.scrollIntoView(!1)},{flush:"post",immediate:!0})}),me(v,function(){v.value||g(null)}),function(){var T,d=e.prefixCls,A=e.id,H=e.tabs,N=e.locale,B=e.mobile,L=e.moreIcon,U=L===void 0?((T=a.moreIcon)===null||T===void 0?void 0:T.call(a))||f(Dt,null,null):L,D=e.moreTransitionName,$=e.editable,ve=e.tabBarGutter,p=e.rtl,i=e.onTabClick,y="".concat(d,"-dropdown"),x=N==null?void 0:N.dropdownAriaLabel,K=W({},p?"marginRight":"marginLeft",ve);H.length||(K.visibility="hidden",K.order=1);var F=ye(W({},"".concat(y,"-rtl"),p)),C=B?null:f(jt,{prefixCls:y,trigger:["hover"],visible:v.value,transitionName:D,onVisibleChange:l,overlayClassName:F,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return f(Kt,{onClick:function(w){var q=w.key,re=w.domEvent;i(q,re),l(!1)},id:j.value,tabindex:-1,role:"listbox","aria-activedescendant":E.value,selectedKeys:[b.value],"aria-label":x!==void 0?x:"expanded dropdown"},{default:function(){return[H.map(function(w){var q,re,Te=$&&w.closable!==!1&&!w.disabled;return f(Wt,{key:w.key,id:"".concat(j.value,"-").concat(w.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(w.key),disabled:w.disabled},{default:function(){return[f("span",null,[typeof w.tab=="function"?w.tab():w.tab]),Te&&f("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(y,"-menu-item-remove"),onClick:function(se){se.stopPropagation(),z(se,w.key)}},[((q=w.closeIcon)===null||q===void 0?void 0:q.call(w))||((re=$.removeIcon)===null||re===void 0?void 0:re.call($))||"\xD7"])]}})})]}})},default:function(){return f("button",{type:"button",class:"".concat(d,"-nav-more"),style:K,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":j.value,id:"".concat(A,"-more"),"aria-expanded":v.value,onKeydown:I},[U])}});return f("div",{class:ye("".concat(d,"-nav-operations"),r.class),style:r.style},[C,f(It,{prefixCls:d,locale:N,editable:$},null)])}}}),kt=Symbol("tabsContextKey"),Et=function(e){Ft(kt,e)},Bt=function(){return $t(kt,{tabs:k([]),prefixCls:k()})};ce({compatConfig:{MODE:3},name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var r=t.slots;return Et(zt(e)),function(){var a;return(a=r.default)===null||a===void 0?void 0:a.call(r)}}});var oa=.1,yt=.01,Me=20,ht=Math.pow(.995,Me);function ua(o,e){var t=G(),r=_(t,2),a=r[0],n=r[1],u=G(0),v=_(u,2),l=v[0],s=v[1],c=G(0),b=_(c,2),g=b[0],M=b[1],I=G(),j=_(I,2),E=j[0],z=j[1],T=k();function d(p){var i=p.touches[0],y=i.screenX,x=i.screenY;n({x:y,y:x}),clearInterval(T.value)}function A(p){if(!!a.value){p.preventDefault();var i=p.touches[0],y=i.screenX,x=i.screenY,K=y-a.value.x,F=x-a.value.y;e(K,F),n({x:y,y:x});var C=Date.now();M(C-l.value),s(C),z({x:K,y:F})}}function H(){if(!!a.value){var p=E.value;if(n(null),z(null),p){var i=p.x/g.value,y=p.y/g.value,x=Math.abs(i),K=Math.abs(y);if(Math.max(x,K)<oa)return;var F=i,C=y;T.value=setInterval(function(){if(Math.abs(F)<yt&&Math.abs(C)<yt){clearInterval(T.value);return}F*=ht,C*=ht,e(F*Me,C*Me)},Me)}}}var N=k();function B(p){var i=p.deltaX,y=p.deltaY,x=0,K=Math.abs(i),F=Math.abs(y);K===F?x=N.value==="x"?i:y:K>F?(x=i,N.value="x"):(x=y,N.value="y"),e(-x,-x)&&p.preventDefault()}var L=k({onTouchStart:d,onTouchMove:A,onTouchEnd:H,onWheel:B});function U(p){L.value.onTouchStart(p)}function D(p){L.value.onTouchMove(p)}function $(p){L.value.onTouchEnd(p)}function ve(p){L.value.onWheel(p)}De(function(){var p,i;document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",$,{passive:!1}),(p=o.value)===null||p===void 0||p.addEventListener("touchstart",U,{passive:!1}),(i=o.value)===null||i===void 0||i.addEventListener("wheel",ve,{passive:!1})}),Qe(function(){document.removeEventListener("touchmove",D),document.removeEventListener("touchend",$)})}function gt(o,e){var t=k(o);function r(a){var n=typeof a=="function"?a(t.value):a;n!==t.value&&e(n,t.value),t.value=n}return[t,r]}var pt={width:0,height:0,left:0,top:0,right:0},ca=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Ke.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}},St=ce({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:ca(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var r=t.attrs,a=t.slots,n=Bt(),u=n.tabs,v=n.prefixCls,l=k(),s=k(),c=k(),b=k(),g=ea(),M=_(g,2),I=M[0],j=M[1],E=Z(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=gt(0,function(h,S){E.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"left":"right"})}),T=_(z,2),d=T[0],A=T[1],H=gt(0,function(h,S){!E.value&&e.onTabScroll&&e.onTabScroll({direction:h>S?"top":"bottom"})}),N=_(H,2),B=N[0],L=N[1],U=G(0),D=_(U,2),$=D[0],ve=D[1],p=G(0),i=_(p,2),y=i[0],x=i[1],K=G(null),F=_(K,2),C=F[0],Se=F[1],he=G(null),w=_(he,2),q=w[0],re=w[1],Te=G(0),ge=_(Te,2),xe=ge[0],se=ge[1],_e=G(0),J=_(_e,2),We=J[0],Ae=J[1],Re=aa(new Map),pe=_(Re,2),je=pe[0],Fe=pe[1],we=ia(u,je),At=Z(function(){return"".concat(v.value,"-nav-operations-hidden")}),Ce=k(0),Pe=k(0);Le(function(){E.value?e.rtl?(Ce.value=0,Pe.value=Math.max(0,$.value-C.value)):(Ce.value=Math.min(0,C.value-$.value),Pe.value=0):(Ce.value=Math.min(0,q.value-y.value),Pe.value=0)});var $e=function(S){return S<Ce.value?Ce.value:S>Pe.value?Pe.value:S},et=k(),Rt=G(),tt=_(Rt,2),ze=tt[0],at=tt[1],He=function(){at(Date.now())},Ve=function(){clearTimeout(et.value)},nt=function(S,m){S(function(O){var P=$e(O+m);return P})};ua(l,function(h,S){if(E.value){if(C.value>=$.value)return!1;nt(A,h)}else{if(q.value>=y.value)return!1;nt(L,S)}return Ve(),He(),!0}),me(ze,function(){Ve(),ze.value&&(et.value=setTimeout(function(){at(0)},100))});var it=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,m=we.value.get(S)||{width:0,height:0,left:0,right:0,top:0};if(E.value){var O=d.value;e.rtl?m.right<d.value?O=m.right:m.right+m.width>d.value+C.value&&(O=m.right+m.width-C.value):m.left<-d.value?O=-m.left:m.left+m.width>-d.value+C.value&&(O=-(m.left+m.width-C.value)),L(0),A($e(O))}else{var P=B.value;m.top<-B.value?P=-m.top:m.top+m.height>-B.value+q.value&&(P=-(m.top+m.height-q.value)),A(0),L($e(P))}},Ge=k(0),Ue=k(0);Le(function(){var h,S,m,O,P,X,Y,fe=we.value;["top","bottom"].includes(e.tabPosition)?(S="width",P=C.value,X=$.value,Y=xe.value,m=e.rtl?"right":"left",O=Math.abs(d.value)):(S="height",P=q.value,X=$.value,Y=We.value,m="top",O=-B.value);var ee=P;X+Y>P&&X<P&&(ee=P-Y);var le=u.value;if(!le.length){var oe;return oe=[0,0],Ge.value=oe[0],Ue.value=oe[1],oe}for(var be=le.length,V=be,te=0;te<be;te+=1){var ae=fe.get(le[te].key)||pt;if(ae[m]+ae[S]>O+ee){V=te-1;break}}for(var ue=0,Q=be-1;Q>=0;Q-=1){var ne=fe.get(le[Q].key)||pt;if(ne[m]<O){ue=Q+1;break}}return h=[ue,V],Ge.value=h[0],Ue.value=h[1],h});var qe=function(){var S,m,O,P,X,Y=((S=l.value)===null||S===void 0?void 0:S.offsetWidth)||0,fe=((m=l.value)===null||m===void 0?void 0:m.offsetHeight)||0,ee=((O=b.value)===null||O===void 0?void 0:O.$el)||{},le=ee.offsetWidth||0,oe=ee.offsetHeight||0;Se(Y),re(fe),se(le),Ae(oe);var be=(((P=s.value)===null||P===void 0?void 0:P.offsetWidth)||0)-le,V=(((X=s.value)===null||X===void 0?void 0:X.offsetHeight)||0)-oe;ve(be),x(V),Fe(function(){var te=new Map;return u.value.forEach(function(ae){var ue=ae.key,Q=j.value.get(ue),ne=(Q==null?void 0:Q.$el)||Q;ne&&te.set(ue,{width:ne.offsetWidth,height:ne.offsetHeight,left:ne.offsetLeft,top:ne.offsetTop})}),te})},rt=Z(function(){return[].concat(dt(u.value.slice(0,Ge.value)),dt(u.value.slice(Ue.value+1)))}),wt=G(),lt=_(wt,2),Ot=lt[0],Mt=lt[1],de=Z(function(){return we.value.get(e.activeKey)}),ot=k(),ut=function(){Be.cancel(ot.value)};me([de,E,function(){return e.rtl}],function(){var h={};de.value&&(E.value?(e.rtl?h.right=Ee(de.value.right):h.left=Ee(de.value.left),h.width=Ee(de.value.width)):(h.top=Ee(de.value.top),h.height=Ee(de.value.height))),ut(),ot.value=Be(function(){Mt(h)})}),me([function(){return e.activeKey},de,we,E],function(){it()},{flush:"post"}),me([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return u.value}],function(){qe()},{flush:"post"});var Xe=function(S){var m=S.position,O=S.prefixCls,P=S.extra;if(!P)return null;var X=P==null?void 0:P({position:m});return X?f("div",{class:"".concat(O,"-extra-content")},[X]):null};return Qe(function(){Ve(),ut()}),function(){var h,S=e.id,m=e.animated,O=e.activeKey,P=e.rtl,X=e.editable,Y=e.locale,fe=e.tabPosition,ee=e.tabBarGutter,le=e.onTabClick,oe=r.class,be=r.style,V=v.value,te=!!rt.value.length,ae="".concat(V,"-nav-wrap"),ue,Q,ne,ct;E.value?P?(Q=d.value>0,ue=d.value+C.value<$.value):(ue=d.value<0,Q=-d.value+C.value<$.value):(ne=B.value<0,ct=-B.value+q.value<y.value);var Oe={};fe==="top"||fe==="bottom"?Oe[P?"marginRight":"marginLeft"]=typeof ee=="number"?"".concat(ee,"px"):ee:Oe.marginTop=typeof ee=="number"?"".concat(ee,"px"):ee;var vt=u.value.map(function(Ie,st){var ke=Ie.key;return f(na,{id:S,prefixCls:V,key:ke,tab:Ie,style:st===0?void 0:Oe,closable:Ie.closable,editable:X,active:ke===O,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:I(ke),onClick:function(Lt){le(ke,Lt)},onFocus:function(){it(ke),He(),l.value&&(P||(l.value.scrollLeft=0),l.value.scrollTop=0)}},a)});return f("div",{role:"tablist",class:ye("".concat(V,"-nav"),oe),style:be,onKeydown:function(){He()}},[f(Xe,{position:"left",prefixCls:V,extra:a.leftExtra},null),f(ft,{onResize:qe},{default:function(){return[f("div",{class:ye(ae,(h={},W(h,"".concat(ae,"-ping-left"),ue),W(h,"".concat(ae,"-ping-right"),Q),W(h,"".concat(ae,"-ping-top"),ne),W(h,"".concat(ae,"-ping-bottom"),ct),h)),ref:l},[f(ft,{onResize:qe},{default:function(){return[f("div",{ref:s,class:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(d.value,"px, ").concat(B.value,"px)"),transition:ze.value?"none":void 0}},[vt,f(It,{ref:b,prefixCls:V,locale:Y,editable:X,style:R(R({},vt.length===0?void 0:Oe),{},{visibility:te?"hidden":null})},null),f("div",{class:ye("".concat(V,"-ink-bar"),W({},"".concat(V,"-ink-bar-animated"),m.inkBar)),style:Ot.value},null)])]}})])]}}),f(la,R(R({},e),{},{removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:c,prefixCls:V,tabs:rt.value,class:!te&&At.value}),Ct(a,["moreIcon"])),f(Xe,{position:"right",prefixCls:V,extra:a.rightExtra},null),f(Xe,{position:"right",prefixCls:V,extra:a.tabBarExtraContent},null)])}}}),va=ce({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Bt(),r=t.tabs,a=t.prefixCls;return function(){var n=e.id,u=e.activeKey,v=e.animated,l=e.tabPosition,s=e.rtl,c=e.destroyInactiveTabPane,b=v.tabPane,g=a.value,M=r.value.findIndex(function(I){return I.key===u});return f("div",{class:"".concat(g,"-content-holder")},[f("div",{class:["".concat(g,"-content"),"".concat(g,"-content-").concat(l),W({},"".concat(g,"-content-animated"),b)],style:M&&b?W({},s?"marginRight":"marginLeft","-".concat(M,"00%")):null},[r.value.map(function(I){return Ht(I.node,{key:I.key,prefixCls:g,tabKey:I.key,id:n,animated:b,active:I.key===u,destroyInactiveTabPane:c})})])])}}}),sa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},da=sa;function Tt(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),r.forEach(function(a){fa(o,a,t[a])})}return o}function fa(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}var Je=function(e,t){var r=Tt({},e,t.attrs);return f(Vt,Tt({},r,{icon:da}),null)};Je.displayName="PlusOutlined";Je.inheritAttrs=!1;var ba=Je,xt=0,_t=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Ke.any}};function ma(o){return o.map(function(e){if(qt(e)){for(var t=R({},e.props||{}),r=0,a=Object.entries(t);r<a.length;r++){var n=_(a[r],2),u=n[0],v=n[1];delete t[u],t[Xt(u)]=v}var l=e.children||{},s=e.key!==void 0?e.key:void 0,c=t.tab,b=c===void 0?l.tab:c,g=t.disabled,M=t.forceRender,I=t.closable,j=t.animated,E=t.active,z=t.destroyInactiveTabPane;return R(R({key:s},t),{},{node:e,closeIcon:l.closeIcon,tab:b,disabled:g===""||g,forceRender:M===""||M,closable:I===""||I,animated:j===""||j,active:E===""||E,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var ya=ce({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:R(R({},Pt(_t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{},{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots;Ye(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ye(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ye(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var n=Yt("tabs",e),u=n.prefixCls,v=n.direction,l=n.size,s=n.rootPrefixCls,c=Z(function(){return v.value==="rtl"}),b=Z(function(){var i=e.animated,y=e.tabPosition;return i===!1||["left","right"].includes(y)?{inkBar:!1,tabPane:!1}:i===!0?{inkBar:!0,tabPane:!0}:R({inkBar:!0,tabPane:!1},Zt(i)==="object"?i:{})}),g=G(!1),M=_(g,2),I=M[0],j=M[1];De(function(){j(Qt())});var E=bt(function(){var i;return(i=e.tabs[0])===null||i===void 0?void 0:i.key},{value:Z(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=_(E,2),T=z[0],d=z[1],A=G(function(){return e.tabs.findIndex(function(i){return i.key===T.value})}),H=_(A,2),N=H[0],B=H[1];Le(function(){var i=e.tabs.findIndex(function(x){return x.key===T.value});if(i===-1){var y;i=Math.max(0,Math.min(N.value,e.tabs.length-1)),d((y=e.tabs[i])===null||y===void 0?void 0:y.key)}B(i)});var L=bt(null,{value:Z(function(){return e.id})}),U=_(L,2),D=U[0],$=U[1],ve=Z(function(){return I.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});De(function(){e.id||($("rc-tabs-".concat(xt)),xt+=1)});var p=function(y,x){var K;(K=e.onTabClick)===null||K===void 0||K.call(e,y,x);var F=y!==T.value;if(d(y),F){var C;(C=e.onChange)===null||C===void 0||C.call(e,y)}};return Et({tabs:Z(function(){return e.tabs}),prefixCls:u}),function(){var i,y=e.id,x=e.type,K=e.tabBarGutter,F=e.tabBarStyle,C=e.locale,Se=e.destroyInactiveTabPane,he=e.renderTabBar,w=he===void 0?a.renderTabBar:he,q=e.onTabScroll,re=e.hideAdd,Te=e.centered,ge={id:D.value,activeKey:T.value,animated:b.value,tabPosition:ve.value,rtl:c.value,mobile:I.value},xe;x==="editable-card"&&(xe={onEdit:function(Ae,Re){var pe,je=Re.key,Fe=Re.event;(pe=e.onEdit)===null||pe===void 0||pe.call(e,Ae==="add"?Fe:je,Ae)},removeIcon:function(){return f(Jt,null,null)},addIcon:a.addIcon?a.addIcon:function(){return f(ba,null,null)},showAdd:re!==!0});var se,_e=R(R({},ge),{},{moreTransitionName:"".concat(s.value,"-slide-up"),editable:xe,locale:C,tabBarGutter:K,onTabClick:p,onTabScroll:q,style:F});w?se=w(R(R({},_e),{},{DefaultTabBar:St})):se=f(St,_e,Ct(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var J=u.value;return f("div",R(R({},r),{},{id:y,class:ye(J,"".concat(J,"-").concat(ve.value),(i={},W(i,"".concat(J,"-").concat(l.value),l.value),W(i,"".concat(J,"-card"),["card","editable-card"].includes(x)),W(i,"".concat(J,"-editable-card"),x==="editable-card"),W(i,"".concat(J,"-centered"),Te),W(i,"".concat(J,"-mobile"),I.value),W(i,"".concat(J,"-editable"),x==="editable-card"),W(i,"".concat(J,"-rtl"),c.value),i),r.class)}),[se,f(va,R(R({destroyInactiveTabPane:Se},ge),{},{animated:b.value}),null)])}}}),Ne=ce({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:Pt(_t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var r=t.attrs,a=t.slots,n=t.emit,u=function(l){n("update:activeKey",l),n("change",l)};return function(){var v,l=ma(Gt((v=a.default)===null||v===void 0?void 0:v.call(a)));return f(ya,R(R(R({},Ut(e,["onUpdate:activeKey"])),r),{},{onChange:u,tabs:l}),a)}}}),ha=function(){return{tab:Ke.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}},Ze=ce({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:ha(),slots:["closeIcon","tab"],setup:function(e,t){var r=t.attrs,a=t.slots,n=k(e.forceRender);me([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?n.value=!0:e.destroyInactiveTabPane&&(n.value=!1)},{immediate:!0});var u=Z(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var v,l=e.prefixCls,s=e.forceRender,c=e.id,b=e.active,g=e.tabKey;return f("div",{id:c&&"".concat(c,"-panel-").concat(g),role:"tabpanel",tabindex:b?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(g),"aria-hidden":!b,style:[u.value,r.style],class:["".concat(l,"-tabpane"),b&&"".concat(l,"-tabpane-active"),r.class]},[(b||n.value||s)&&((v=a.default)===null||v===void 0?void 0:v.call(a))])}}});Ne.TabPane=Ze;Ne.install=function(o){return o.component(Ne.name,Ne),o.component(Ze.name,Ze),o};export{Ne as T};
