import{H as L,a as M,cV as I,b8 as k,bt as v,aL as A,b,c as N,m as x,f as O,aE as o,o as d,i as S,k as t,q as r,J as D,z as h,s as U,t as E,F as V,aN as R}from"./index.85326dda.js";import{A as $}from"./index.b4e6670d.js";import{D as P}from"./siteSetting.ff46fd99.js";import{c as y,u as T}from"./index.a912a4cd.js";import{a as B}from"./index.02c0d4af.js";import{h as z}from"./header.d801b988.js";import"./index.a227899e.js";import"./useSize.33bf0650.js";import"./eagerComputed.106c1fa1.js";import"./FullscreenOutlined.8c96991a.js";import"./index.38ba7f5f.js";import"./useWindowSizeFn.b069bfa4.js";import"./useContentViewHeight.5cf8a438.js";import"./useSortable.6e620ba0.js";import"./_baseIteratee.e9b51297.js";import"./get.5acece05.js";import"./index.f38e01d6.js";import"./index.2c357c19.js";import"./useRefs.208f6751.js";import"./lock.cc29e3ec.js";const F=M({name:"UserDropdown",components:{Dropdown:I,Menu:k,Avatar:$,MenuItem:y(()=>v(()=>import("./DropMenuItem.2aa10b83.js"),["assets/DropMenuItem.2aa10b83.js","assets/index.85326dda.js","assets/index.58b0c334.css"])),MenuDivider:k.Divider,LockAction:y(()=>v(()=>import("./LockModal.8b335355.js"),["assets/LockModal.8b335355.js","assets/LockModal.0068f88c.css","assets/index.251e5d3f.css","assets/index.85326dda.js","assets/index.58b0c334.css","assets/index.02c0d4af.js","assets/index.f6def211.css","assets/useWindowSizeFn.b069bfa4.js","assets/FullscreenOutlined.8c96991a.js","assets/useForm.606d20d0.js","assets/useForm.8b6ff96d.css","assets/index.61d7780b.js","assets/index.a18cc309.css","assets/index.fd335e53.js","assets/index.3a3c1369.css","assets/index.ac7c3e42.js","assets/index.cbc95d74.css","assets/index.1f761683.js","assets/index.ec35cb0a.css","assets/index.d8305d37.js","assets/index.ad95ebae.css","assets/index.ca360c0b.js","assets/index.49ada229.css","assets/index.7197f689.js","assets/index.47f7c782.css","assets/index.e87708cc.js","assets/index.be8c30f5.css","assets/index.d0f8572b.js","assets/index.7b8b5e30.css","assets/get.5acece05.js","assets/iconUtil.fd2bd220.js","assets/eagerComputed.106c1fa1.js","assets/index.5bb00a78.js","assets/index.faa73878.css","assets/_baseIteratee.e9b51297.js","assets/index.8b43bd79.js","assets/index.ee44ba04.css","assets/useRefs.208f6751.js","assets/Form.468afc18.js","assets/useSize.33bf0650.js","assets/download.6bf4a854.js","assets/index.ec5e9c90.js","assets/index.cb030764.css","assets/index.0b439a68.js","assets/useSortable.6e620ba0.js","assets/lock.cc29e3ec.js","assets/header.d801b988.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=b("header-user-dropdown"),{t:l}=N(),{getShowDoc:_,getUseLockPage:f}=T(),a=x(),g=O(()=>{const{realName:u="",avatar:w,desc:C}=a.getUserInfo||{};return{realName:u,avatar:w||z,desc:C}}),[s,{openModal:n}]=B();function i(){n(!0)}function c(){a.confirmLoginOut()}function p(){R(P)}function m(u){switch(u.key){case"logout":c();break;case"doc":p();break;case"lock":i();break}}return{prefixCls:e,t:l,getUserInfo:g,handleMenuClick:m,getShowDoc:_,register:s,getUseLockPage:f}}});function H(e,l,_,f,a,g){const s=o("Avatar"),n=o("MenuItem"),i=o("MenuDivider"),c=o("Menu"),p=o("Dropdown"),m=o("LockAction");return d(),S(V,null,[t(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:r(()=>[t(c,{onClick:e.handleMenuClick},{default:r(()=>[e.getShowDoc?(d(),D(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):h("",!0),e.getShowDoc?(d(),D(i,{key:1})):h("",!0),t(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:r(()=>[t(s,{size:28,style:{"background-color":"darkblue"}},{default:r(()=>[U(E(e.getUserInfo.realName),1)]),_:1})]),_:1},8,["overlayClassName"]),t(m,{onRegister:e.register},null,8,["onRegister"])],64)}var me=L(F,[["render",H]]);export{me as default};
