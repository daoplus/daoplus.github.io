import{a as o,r as n,G as r,o as u,J as l,q as s,j as d,bw as m,l as f}from"./index.00d33503.js";import{C as c}from"./index.34df42c3.js";import"./index.4bb506ea.js";import"./index.9930c332.js";import{u as h}from"./useECharts.3f0d6999.js";import"./index.3c785eed.js";import"./useRefs.e516fdd9.js";const v=o({__name:"VisitSource",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=n(null),{setOptions:i}=h(a);return r(()=>t.loading,()=>{t.loading||i({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(p,g)=>(u(),l(f(c),{title:"\u8BBF\u95EE\u6765\u6E90",loading:e.loading},{default:s(()=>[d("div",{ref_key:"chartRef",ref:a,style:m({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{v as default};
