import{u as r}from"./useECharts.5b112278.js";import{H as i,a as n,r as d,E as l,o as s,i as m,j as c,bn as p}from"./index.855cea3b.js";const f={class:"planBox"},y=n({__name:"PlanOverdueTimeWidget",props:{planId:{type:Number,default:0},planStatus:{type:Number,default:0},width:{type:String,default:"100%"},height:{type:String,default:"300px"},demoStockQuantityEffect:{type:Number,default:0},demoOutputEffect:{type:Number,default:0}},setup(t){const e=t,a=d(null),{setOptions:u}=r(a),o=e.demoStockQuantityEffect<600||e.demoOutputEffect<50?35:20;return console.log(`${o}_${e.demoStockQuantityEffect}_${e.demoOutputEffect}`),l(()=>{u({animationDuration:4567,title:[{text:"\u903E\u671F\u6982\u7387\uFF08\u65F6\u95F4\u7EBF\uFF09",left:"45%",top:"1%",textStyle:{color:"#000",fontSize:12}}],tooltip:{trigger:"axis"},xAxis:[{type:"category",data:["2022-12-01","2022-12-08","2022-12-15","2022-12-22","2022-12-29","2023-01-06","2023-01-13","2023-01-20"]}],yAxis:[{name:"\u903E\u671F\u6982\u7387",type:"value",axisLabel:{formatter:"{value} %"},axisLine:{show:!0,lineStyle:{color:"darkred"}}}],series:[{name:"\u903E\u671F\u6982\u7387\uFF08%\uFF09",yAxisIndex:0,type:"line",data:[90,71,83,61,52,32,o],label:{show:!0,position:"top",formatter:"{c}%",color:"darkred"},itemStyle:{color:"darkred"},markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]}}]})}),(_,x)=>(s(),m("div",f,[c("div",{ref_key:"overdueTimeChartRef",ref:a,style:p({height:t.height,width:t.width})},null,4)]))}});var g=i(y,[["__scopeId","data-v-e2e507d2"]]);export{g as default};
