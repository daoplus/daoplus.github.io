import{J as m,a as l,db as c,b as d,aF as u,o as r,i as n,F as C,aI as _,n as a,bw as f,k}from"./index.46544bfc.js";import{b as h}from"./index.574d7a06.js";import"./index.da3ef71f.js";import"./FullscreenOutlined.8756b739.js";import"./index.c67559cd.js";import"./useWindowSizeFn.68605f5c.js";import"./useContentViewHeight.b028bc47.js";import"./useSortable.e25d881a.js";import"./_baseIteratee.ebb87e57.js";import"./get.71207ccd.js";import"./index.fa140f4d.js";import"./useRefs.fa34633b.js";import"./lock.379ae487.js";import"./ArrowLeftOutlined.465f66b4.js";import"./index.082ce6ff.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=d("setting-theme-picker");function i(s){e.event&&h(e.event,s)}return{prefixCls:o,handleClick:i}}}),y=["onClick"];function b(e,o,i,s,$,g){const p=u("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(C,null,_(e.colorList||[],t=>(r(),n("span",{key:t,onClick:F=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var J=m(v,[["render",b]]);export{J as default};
