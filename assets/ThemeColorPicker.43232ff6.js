import{J as m,a as l,cR as c,b as d,aF as u,o as r,i as n,F as C,aI as _,n as a,bw as f,k}from"./index.be43a13b.js";import{b as h}from"./index.e1062485.js";import"./index.2842241d.js";import"./FullscreenOutlined.6a49efaf.js";import"./index.a687098d.js";import"./useWindowSizeFn.064eabda.js";import"./useContentViewHeight.533f2499.js";import"./useSortable.e1305827.js";import"./_baseIteratee.c6f5edd5.js";import"./get.203c84ab.js";import"./index.f6b8dae6.js";import"./useRefs.41283ad7.js";import"./lock.359ea65e.js";import"./ArrowLeftOutlined.965e86d4.js";import"./index.49b0feba.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=d("setting-theme-picker");function i(s){e.event&&h(e.event,s)}return{prefixCls:o,handleClick:i}}}),y=["onClick"];function $(e,o,i,s,b,g){const p=u("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(C,null,_(e.colorList||[],t=>(r(),n("span",{key:t,onClick:F=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var J=m(v,[["render",$]]);export{J as default};
