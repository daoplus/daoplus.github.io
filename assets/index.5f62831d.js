import{H as L,a as M,cR as I,bh as k,bC as v,aL as A,b,c as N,m as x,f as O,aE as o,o as d,i as S,k as t,q as r,J as D,z as h,s as U,t as E,F as R,aN as V}from"./index.c8fdd3dc.js";import{A as $}from"./index.2a86cc15.js";import{D as P}from"./siteSetting.ff46fd99.js";import{c as y,u as T}from"./index.366c9225.js";import{a as B}from"./index.d7621037.js";import{h as z}from"./header.d801b988.js";import"./index.8db5932c.js";import"./useSize.1734d1ce.js";import"./eagerComputed.d98ec5be.js";import"./FullscreenOutlined.ababedcf.js";import"./index.b31204da.js";import"./useWindowSizeFn.0ec14386.js";import"./useContentViewHeight.5605e99f.js";import"./useSortable.6365ce73.js";import"./_baseIteratee.d6e4fe7f.js";import"./get.3be4e632.js";import"./index.f6b8f9a6.js";import"./useRefs.6ab8c8dc.js";import"./lock.e3098b7d.js";const F=M({name:"UserDropdown",components:{Dropdown:I,Menu:k,Avatar:$,MenuItem:y(()=>v(()=>import("./DropMenuItem.1e8a3884.js"),["assets/DropMenuItem.1e8a3884.js","assets/index.c8fdd3dc.js","assets/index.de81f770.css"])),MenuDivider:k.Divider,LockAction:y(()=>v(()=>import("./LockModal.daeee0a4.js"),["assets/LockModal.daeee0a4.js","assets/LockModal.0068f88c.css","assets/index.251e5d3f.css","assets/index.c8fdd3dc.js","assets/index.de81f770.css","assets/index.d7621037.js","assets/index.f6def211.css","assets/useWindowSizeFn.0ec14386.js","assets/FullscreenOutlined.ababedcf.js","assets/useForm.0a77ed16.js","assets/useForm.1cbdcbe2.css","assets/index.150b5d8d.js","assets/index.a18cc309.css","assets/index.b362bdc1.js","assets/index.3a3c1369.css","assets/index.e5aba7de.js","assets/index.cbc95d74.css","assets/index.63f759e9.js","assets/index.ec35cb0a.css","assets/index.1f906f7c.js","assets/index.49ada229.css","assets/index.c66224eb.js","assets/index.47f7c782.css","assets/index.e3ee0347.js","assets/index.be8c30f5.css","assets/index.e8e2533d.js","assets/index.7b8b5e30.css","assets/get.3be4e632.js","assets/iconUtil.0f7a1158.js","assets/eagerComputed.d98ec5be.js","assets/index.4036a096.js","assets/index.faa73878.css","assets/_baseIteratee.d6e4fe7f.js","assets/index.8c08a691.js","assets/index.ee44ba04.css","assets/useRefs.6ab8c8dc.js","assets/Form.1e2cf28c.js","assets/useSize.1734d1ce.js","assets/download.c2274597.js","assets/index.55179393.js","assets/index.cb030764.css","assets/index.d78b12b6.js","assets/useSortable.6365ce73.js","assets/lock.e3098b7d.js","assets/header.d801b988.js"]))},props:{theme:A.oneOf(["dark","light"])},setup(){const{prefixCls:e}=b("header-user-dropdown"),{t:l}=N(),{getShowDoc:_,getUseLockPage:f}=T(),a=x(),g=O(()=>{const{realName:u="",avatar:w,desc:C}=a.getUserInfo||{};return{realName:u,avatar:w||z,desc:C}}),[s,{openModal:n}]=B();function i(){n(!0)}function c(){a.confirmLoginOut()}function p(){V(P)}function m(u){switch(u.key){case"logout":c();break;case"doc":p();break;case"lock":i();break}}return{prefixCls:e,t:l,getUserInfo:g,handleMenuClick:m,getShowDoc:_,register:s,getUseLockPage:f}}});function H(e,l,_,f,a,g){const s=o("Avatar"),n=o("MenuItem"),i=o("MenuDivider"),c=o("Menu"),p=o("Dropdown"),m=o("LockAction");return d(),S(R,null,[t(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:r(()=>[t(c,{onClick:e.handleMenuClick},{default:r(()=>[e.getShowDoc?(d(),D(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):h("",!0),e.getShowDoc?(d(),D(i,{key:1})):h("",!0),t(n,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:r(()=>[t(s,{size:28,style:{"background-color":"darkblue"}},{default:r(()=>[U(E(e.getUserInfo.realName),1)]),_:1})]),_:1},8,["overlayClassName"]),t(m,{onRegister:e.register},null,8,["onRegister"])],64)}var pe=L(F,[["render",H]]);export{pe as default};
