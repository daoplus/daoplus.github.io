import{u as i}from"./useECharts.0c29eb34.js";import{H as o,a as n,r,E as s,o as l,i as p,j as u,bn as m}from"./index.af8328d7.js";const d={class:"planBox"},c=n({__name:"KpiCompletionWidget",props:{planId:{type:Number,default:0},planStatus:{type:Number,default:0},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=r(null),{setOptions:a}=i(t);return s(()=>{a({animationDuration:4321,tooltip:{trigger:"axis"},xAxis:[{type:"category",data:["2022-12-01","2022-12-08","2022-12-15","2022-12-22","2022-12-29","2023-01-06","2023-01-13","2023-01-20"]}],yAxis:[{name:"\u8BA1\u5212\u5B8C\u6210\u7387",type:"value",axisLabel:{formatter:"{value} %"},axisLine:{show:!0,lineStyle:{color:"darkgreen"}}}],series:[{name:"\u8BA1\u5212\u5B8C\u6210\u7387\uFF08%\uFF09",yAxisIndex:0,type:"line",data:[67,71,73,81,82,88,90],label:{show:!0,position:"top",formatter:"{c}%",color:"darkgreen"},itemStyle:{color:"darkgreen"},markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]}}]})}),(y,_)=>(l(),p("div",d,[u("div",{ref_key:"kpiCompletionTimeChartRef",ref:t,style:m({height:e.height,width:e.width})},null,4)]))}});var h=o(c,[["__scopeId","data-v-c6150508"]]);export{h as default};
