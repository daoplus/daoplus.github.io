import{J as i,a as r,cS as l,b as p,f as m,aF as d,o as c,i as u,j as f,t as g,k as _,aG as b,n as v}from"./index.198240f3.js";import{b as S}from"./index.362e878d.js";import"./index.a0eeb16e.js";import"./FullscreenOutlined.6e934958.js";import"./index.5ac1d514.js";import"./useWindowSizeFn.86282fc3.js";import"./useContentViewHeight.ee345831.js";import"./useSortable.88b13504.js";import"./_baseIteratee.bb628691.js";import"./get.2c8b06e8.js";import"./index.8e9bdc27.js";import"./useRefs.069c5e3d.js";import"./lock.4951dc99.js";import"./ArrowLeftOutlined.66e158e3.js";import"./index.933b560d.js";const y=r({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(s){e.event&&S(e.event,s)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function C(e,t,a,n,s,h){const o=d("Select");return c(),u("div",{class:v(e.prefixCls)},[f("span",null,g(e.title),1),_(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var P=i(y,[["render",C],["__scopeId","data-v-6707e46b"]]);export{P as default};
