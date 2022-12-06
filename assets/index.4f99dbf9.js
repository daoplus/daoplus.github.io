import{H as L,a as M,cV as I,b8 as k,bt as v,aL as A,b,c as N,m as x,f as O,aE as o,o as d,i as S,k as t,q as r,J as D,z as h,s as U,t as E,F as V,aN as R}from"./index.af8328d7.js";import{A as $}from"./index.999205fa.js";import{D as P}from"./siteSetting.ff46fd99.js";import{c as y,u as T}from"./index.d08271c4.js";import{a as B}from"./index.0826f7f7.js";import{h as z}from"./header.d801b988.js";import"./index.a5bce8ce.js";import"./useSize.bcee7b14.js";import"./eagerComputed.f86034a8.js";import"./FullscreenOutlined.d8cf38f0.js";import"./index.c66eedfb.js";import"./useWindowSizeFn.a09c1202.js";import"./useContentViewHeight.15c736d8.js";import"./useSortable.3a48524b.js";import"./_baseIteratee.4a6ea22b.js";import"./get.0548d606.js";import"./index.542e1561.js";import"./index.46ca7df7.js";import"./useRefs.91c51ad4.js";import"./lock.781debcd.js";const F=M({name:"UserDropdown",components:{Dropdown:I,Menu:k,Avatar:$,MenuItem:y(()=>v(()=>import("./DropMenuItem.75df600d.js"),["assets/DropMenuItem.75df600d.js","assets/index.af8328d7.js","assets/index.58b0c334.css"])),MenuDivider:k.Divider,LockAction:y(()=>v(()=>import("./LockModal.284b7f2c.js"),["assets/LockModal.284b7f2c.js","assets/LockModal.0068f88c.css","assets/index.251e5d3f.css","assets/index.af8328d7.js","assets/index.58b0c334.css","assets/index.0826f7f7.js","assets/index.f6def211.css","assets/useWindowSizeFn.a09c1202.js","assets/FullscreenOutlined.d8cf38f0.js","assets/useForm.12e7ef0f.js","assets/useForm.8b6ff96d.css","assets/index.404510d3.js","assets/index.a18cc309.css","assets/index.27df118e.js","assets/index.3a3c1369.css","assets/index.e185b05b.js","assets/index.cbc95d74.css","assets/index.a02bdf03.js","assets/index.ec35cb0a.css","assets/index.a238d413.js","assets/index.ad95ebae.css","assets/index.cd2723d2.js","assets/index.49ada229.css","assets/index.10208eef.js","assets/index.47f7c782.css","assets/index.c0c5a5ea.js","assets/index.be8c30f5.css","assets/index.e636dfee.js","assets/index.7b8b5e30.css","assets/get.0548d606.js","assets/iconUtil.29ad0834.js","assets/eagerComputed.f86034a8.js","assets/index.263d323a.js","assets/index.faa73878.css","assets/_baseIteratee.4a6ea22b.js","assets/index.9a1a8e1c.js","assets/index.ee44ba04.css","assets/useRefs.91c51ad4.js","assets/Form.37487b8a.js","assets/useSize.bcee7b14.js","assets/download.58b1ff9a.js","assets/index.a5316c9e.js","assets/index.cb030764.css","assets/index.de146a89.js","assets/useSortable.3a48524b.js","assets/lock.781debcd.js","assets/header.d801b988.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=b("header-user-dropdown"),{t:l}=N(),{getShowDoc:_,getUseLockPage:f}=T(),a=x(),g=O(()=>{const{realName:u="",avatar:w,desc:C}=a.getUserInfo||{};return{realName:u,avatar:w||z,desc:C}}),[s,{openModal:n}]=B();function i(){n(!0)}function c(){a.confirmLoginOut()}function p(){R(P)}function m(u){switch(u.key){case"logout":c();break;case"doc":p();break;case"lock":i();break}}return{prefixCls:e,t:l,getUserInfo:g,handleMenuClick:m,getShowDoc:_,register:s,getUseLockPage:f}}});function H(e,l,_,f,a,g){const s=o("Avatar"),n=o("MenuItem"),i=o("MenuDivider"),c=o("Menu"),p=o("Dropdown"),m=o("LockAction");return d(),S(V,null,[t(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:r(()=>[t(c,{onClick:e.handleMenuClick},{default:r(()=>[e.getShowDoc?(d(),D(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):h("",!0),e.getShowDoc?(d(),D(i,{key:1})):h("",!0),t(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:r(()=>[t(s,{size:28,style:{"background-color":"darkblue"}},{default:r(()=>[U(E(e.getUserInfo.realName),1)]),_:1})]),_:1},8,["overlayClassName"]),t(m,{onRegister:e.register},null,8,["onRegister"])],64)}var me=L(F,[["render",H]]);export{me as default};
