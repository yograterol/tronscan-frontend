(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1481:function(e,t,a){"use strict";t.a={pieChart:{color:["#98C8EB","#1A3964","#2A4994","#3665B0","#205097","#3A69C4"],title:{text:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} %"},series:[{name:"",type:"pie",radius:["45%","70%"],center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{c}%"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},representPieChart:{color:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"scroll",show:!1,orient:"vertical",left:"right",top:35,selectedMode:"false",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},supplyTypesTRXPieChart:{color:["#c84a45","#e7afad","#e19b98","#da8683"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"plain",show:!1,orient:"horizontal",bottom:0,left:"center",selectedMode:"false",itemGap:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","50%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:10,length2:5},emphasis:{show:!0}}}]},lineChart:{title:{text:"",x:"center",link:"",target:"self"},grid:{left:"5%",right:"7%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{data:[],type:"line"}]},ringPieChart:{title:{text:"",x:"center"},color:["#F25C81","#7CB5EC","#F4A45D","#8085ED","#8FCACE","#424246","#348188","#F25C81","#E5D355","#96EE80"],legend:{type:"scroll",orient:"vertical",x:"right",selected:{"Bancor Network":!1,Gatecoin:!1,BitFlip:!1,Braziliex:!1,Cobinhood:!1,CoinExchange:!1,CoinFalcon:!1,Cryptomate:!1,IDEX:!1,"LiteBit.eu":!1,"Stocks.Exchange":!1,Tidex:!1}},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"",type:"pie",selectedMode:"single",radius:[0,"30%"],center:["50%","50%"],label:{normal:{position:"inner",show:!1}},labelLine:{normal:{show:!1}},data:[]},{name:"",type:"pie",radius:["40%","55%"],center:["50%","50%"],data:[]}]},multiLineChart:{title:{text:"",x:"center"},legend:{type:"scroll",data:[]},grid:{left:"3%",right:"3%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},mapChart:{color:["gold"],series:[{name:"",type:"map",roam:!0,hoverable:!1,mapType:"none",itemStyle:{normal:{borderColor:"rgba(100,149,237,1)",borderWidth:.5,areaStyle:{color:"#1b1b1b"}}},data:[],geoCoord:{}},{name:"",type:"map",mapType:"none",data:[],markPoint:{symbol:"emptyCircle",symbolSize:function(e){return 1+e/10},effect:{show:!0,shadowBlur:0},itemStyle:{normal:{label:{show:!1}},emphasis:{label:{position:"top"}}},data:[]}}]},barChart:{title:{text:"Ranking"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:150},xAxis:{type:"value",name:"",axisLabel:{formatter:"{value}"}},yAxis:{type:"category",inverse:!0,data:[]},series:[{name:"",type:"bar",data:[],label:{normal:{show:!0,textBorderWidth:0}},itemStyle:{}}]},overviewChart:{title:{text:"",x:"center",link:"",target:"self",padding:[0,0,10,0]},tooltip:{trigger:"axis",axisPointer:{animation:!1}},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},axisPointer:{link:{xAxisIndex:"all"}},dataZoom:[{start:0,end:100},{type:"inside"}],grid:[{top:80,left:"10%",right:80,containLabel:!0}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:[]}],yAxis:[{name:"",nameGap:20,type:"value"}],series:[{name:"",type:"line",markPoint:{data:[{type:"max",name:"max"},{type:"min",name:"min"}]},data:[]}]},overviewHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:"",style:{color:"#c23631",fontSize:"16px"}},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#999999"}}},legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"area",name:"",data:[],marker:{enabled:!0}}]},HomeHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:"",style:{color:"#c23631",fontSize:"16px"}},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:[{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#c23631"}},gridLineWidth:0},{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#333333"}},opposite:!0,gridLineWidth:0}],legend:{align:"center",verticalAlign:"bottom",floating:!1,backgroundColor:"#FFFFFF"},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"spline",name:"",data:[],color:"#c23631",marker:{enabled:!1,radius:1}},{type:"spline",name:"",data:[],color:"#FFAA38",marker:{enabled:!1,radius:1},visible:!1},{type:"spline",name:"",data:[],color:"#FF8A84",yAxis:1,marker:{enabled:!1,radius:1},visible:!1}]},ringPieHighChart3D:{chart:{type:"pie",options3d:{enabled:!0,alpha:45},spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0},title:{text:""},subtitle:{text:""},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},credits:{enabled:!1},colors:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",showInLegend:!0,innerSize:100,depth:60}},legend:{itemStyle:{fontWeight:"normal",color:"#666666"}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},series:[{name:"",data:[]}]},supplyPieHighChart:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},credits:{enabled:!1},exporting:{enabled:!0,sourceWidth:562,sourceHeight:400,filename:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},colors:["#c84a45","#e7afad"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0},showInLegend:!0}},series:[{name:"",colorByPoint:!0,data:[]}]},supplyAreaHighChart:{chart:{type:"area"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},tickmarkPlacement:"on",title:{enabled:!1}},yAxis:{title:{text:""},labels:{style:{color:"#999999"}}},tooltip:{shared:!0,valueSuffix:"%"},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{area:{stacking:"normal",lineColor:"#666666",lineWidth:1,marker:{lineWidth:1,lineColor:"#666666",radius:1}}},series:[]},OverallFreezingRateChart:{chart:{type:"",zoomType:"xy"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},legend:{enabled:!0,align:"center"},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},title:{enabled:!1}},yAxis:[],tooltip:{},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{},series:[]},HoldTrxAccountChart:{chart:{type:"",zoomType:"xy"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},legend:{enabled:!0,align:"center"},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},title:{enabled:!1}},yAxis:[],tooltip:{},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{},series:[]}}},1974:function(e,t,a){"use strict";a.d(t,"b",function(){return N}),a.d(t,"a",function(){return O}),a.d(t,"c",function(){return M});var r=a(268),n=a.n(r),i=a(94),l=a(16),s=a(15),o=a(21),c=a(20),d=a(0),m=a.n(d),p=a(1481),u=a(1388),h=a.n(u),g=(a(1838),a(1494),a(1551),a(1911),a(1914),a(1915),a(1916),a(1917)),b=a.n(g),y=a(1538),x=a.n(y),f=a(1539),v=a.n(f),E=a(1540),k=a.n(E),C=a(1541),w=a.n(C);x()(b.a),v()(b.a),k()(b.a),w()(b.a);var N=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;Object(l.a)(this,a),r=t.call(this,e);var n=("_"+Math.random()).replace(".","_");return r.state={pieId:"ringPie"+n},r}return Object(s.a)(a,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,r=t.data,n=t.message,l=h.a.getInstanceByDom(document.getElementById(e));function s(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}if(void 0===l&&(l=h.a.init(document.getElementById(e))),p.a.ringPieChart.title.text=a.formatMessage({id:n.id})+" Top 10",p.a.ringPieChart.series[0].data=[],p.a.ringPieChart.series[1].data=[],p.a.ringPieChart.legend.data=[],r&&0<r.length){var o=r.sort(s("name")),c=[],d=[],m=[];for(var u in o)c.push({name:o[u].pair,value:o[u].volume}),m.indexOf(o[u].name)<0&&(m.push(o[u].name),d.push({name:o[u].name,value:0,subCount:[]}));for(var g in d)for(var b in o)o[b].name===d[g].name&&(d[g].value=d[g].value+o[b].volume,d[g].subCount.push({name:o[b].pair,value:o[b].volume}));d.sort(s("value"));var y=d.slice(d.length-10,d.length),x=[];for(var f in y)x.push.apply(x,Object(i.a)(y[f].subCount));p.a.ringPieChart.series[0].data=[],p.a.ringPieChart.series[1].data=[],p.a.ringPieChart.legend.data=m,p.a.ringPieChart.series[0].data=y,p.a.ringPieChart.series[1].data=x}r&&0===r.length&&(p.a.ringPieChart.title.text="No data"),l.setOption(p.a.ringPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),a}(m.a.Component),O=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;Object(l.a)(this,a),r=t.call(this,e);var n=("_"+Math.random()).replace(".","_");return r.state={pieId:"ringPie"+n},r}return Object(s.a)(a,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,r=t.data,i=t.message,l=t.source,s=n()(p.a.ringPieHighChart3D);if(r.length)for(var o in r)r[o].name?-1<r[o].name.indexOf("http://")&&(r[o].name=r[o].name.substring(7).split(".com")[0]):r[o].name=r[o].address;if(r&&0===r.length&&(s.title.text="No data"),r&&0<r.length){var c=[],d=[];for(var m in r)d.indexOf(r[m].name)<0&&(d.push(r[m].name),c.push([r[m].name,Number(r[m].volumeValue)]));var u=s.series[0].data;u.push.apply(u,c)}s.chart.options3d.enabled=!0,s.title.text=a.formatMessage({id:i.id}),s.exporting.filename=a.formatMessage({id:i.id}),s.tooltip.formatter=function(e){return a.formatDate(this.point.x),a.formatMessage({id:"witness"})+" : "+this.point.name+"<br/>"+a.formatMessage({id:"produced_blocks"})+" : "+this.point.y+"<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},"representatives"==l&&(s.plotOptions.pie.showInLegend=!1,s.plotOptions.pie.innerSize=60,s.plotOptions.pie.depth=40,s.exporting.enabled=!1,s.title.text=""),b.a.chart(document.getElementById(e),s)}},{key:"shouldComponentUpdate",value:function(e){return e.intl.locale!==this.props.intl.locale}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),a}(m.a.Component),M=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;Object(l.a)(this,a),r=t.call(this,e);var n=("_"+Math.random()).replace(".","_");return r.state={pieId:"ringPie"+n},r}return Object(s.a)(a,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,r=t.data,i=t.message,l=(t.source,n()(p.a.supplyPieHighChart));if(r&&0===r.length&&(l.title.text="No data"),r&&0<r.length){var s=[];for(var o in r)s.indexOf(r[o].name)<0&&l.series[0].data.push({name:a.formatMessage({id:r[o].name}),y:parseInt(r[o].value),selected:r[o].selected,sliced:r[o].sliced})}l.title.text=a.formatMessage({id:i.id}),l.exporting.filename=a.formatMessage({id:i.id}),l.tooltip.formatter=function(){return a.formatMessage({id:this.point.name})+" ("+a.formatNumber(this.point.y)+" TRX)<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},b.a.chart(document.getElementById(e),l)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),a}(m.a.Component)},3452:function(e,t,a){"use strict";a.r(t);var r=a(113),n=a.n(r),i=a(559),l=a.n(i),s=a(80),o=a.n(s),c=a(1352),d=a.n(c),m=a(2),p=a.n(m),u=a(6),h=a(16),g=a(15),b=a(21),y=a(20),x=a(0),f=a.n(x),v=a(28),E=a(253),k=a(3),C=a(90),w=a(13),N=a(23),O=a(4),M=a(1974),P=a(63),S=a(18),H=a(265),F=function(e){Object(b.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).getLatestBlock=Object(u.a)(p.a.mark(function t(){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.b.getLatestBlock();case 2:a=t.sent,e.setState({latestBlock:a.number});case 4:case"end":return t.stop()}},t)})),e.state={latestBlock:""},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.loadWitnesses(),this.props.loadStatisticData(),this.getLatestBlock()}},{key:"getPiechart",value:function(){var e=this.props.intl,t=this.props.statisticData,a=[];return 0<t.length&&t.map(function(t,r){a.push({key:r+1,name:t.name?t.name:t.url,address:t.address,volumeValue:t.blockProduced,volumePercentage:e.formatNumber(100*t.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),a}},{key:"renderWitnesses",value:function(e){var t=this,a=this.state.latestBlock,r=this.props.intl;if(0===e.length)return f.a.createElement("div",{className:"card"},f.a.createElement(C.b,null,Object(k.c)("loading_representatives")));var n=d()(o()(e,function(e){return e.producer}),function(e){return-1*e.votes}),i=d()(o()(e,function(e){return!e.producer}),function(e){return-1*e.votes}),s=l()(i,0,100),c=l()(i,100);n.map(function(e){Number(a)-e.latestBlockNumber<1e3?e.representerStatus=!0:e.representerStatus=!1});var m=r.locale;return f.a.createElement("div",{className:"ru"==m?"card border-0 represent__table w-1000 represent__table-ru":"card border-0 represent__table w-1000"},f.a.createElement("table",{className:"table table-hover table-striped bg-white m-0 sr",style:{border:"1px solid #DFD7CA"}},f.a.createElement("thead",{className:"thead-dark"},f.a.createElement("tr",null,f.a.createElement("th",{className:"text-center"},Object(k.c)("SR_rank")),f.a.createElement("th",null,Object(k.c)("name")),f.a.createElement("th",null,Object(k.c)("current_version")),f.a.createElement("th",{className:"text-center text-nowrap"},Object(k.c)("status")),f.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(k.c)("last_block")),f.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(k.c)("blocks_produced")),f.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(k.c)("SR_blocksMissed")),f.a.createElement("th",{className:"text-center text-nowrap"},Object(k.c)("productivity")),f.a.createElement("th",{className:"text-right text-nowrap"},Object(k.c)("SR_votes")),f.a.createElement("th",{className:"text-right text-nowrap",style:{borderRight:"1px solid rgb(223, 215, 202)"}},Object(k.c)("SR_voteRatio"),f.a.createElement("span",{className:"ml-2"},f.a.createElement(H.a,{placement:"top",text:"voting_brokerage_tip"}))))),f.a.createElement("tbody",null,f.a.createElement("tr",{style:{height:"72px"}},f.a.createElement("td",{colSpan:"10",className:"font-weight-bold"},f.a.createElement("i",{className:"fa fa-trophy mr-2 ml-2",style:{color:"#666"}}),Object(k.c)("Super Representatives"))),n.map(function(e,a){return f.a.createElement(L,{index:a,state:t.state,props:t.props,key:e.address+a,account:e})}),f.a.createElement("tr",{style:{height:"72px"}},f.a.createElement("td",{colSpan:"10",className:"font-weight-bold"},f.a.createElement("i",{className:"far fa-handshake mr-2 ml-2",style:{color:"#666"}}),Object(k.c)("Super Representative Partners"))),s.map(function(e,a){return f.a.createElement(L,{index:n?a+n.length:O.B?a+27:a+5,state:t.state,props:t.props,key:e.address+a,account:e,showSync:!1})}),O.B&&f.a.createElement("tr",{style:{height:"72px"}},f.a.createElement("td",{colSpan:"9",className:"font-weight-bold"},f.a.createElement("i",{className:"fa fa-user mr-2 ml-2",style:{color:"#666"}}),Object(k.c)("Super Representative Candidates"))),c&&c.map(function(e,a){return f.a.createElement(L,{index:n?a+n.length+s.length:O.B?a+127:a+5,state:t.state,props:t.props,key:e.address+a,account:e,showSync:!1})}))))}},{key:"render",value:function(){var e=this.props,t=e.intl,a=e.witnesses,r=this.getPiechart(),n=a.slice(0,O.N),i=d()(n,function(e){return-1*e.producePercentage})[0],l=_(n).filter(function(e){return 0<e.producedTotal}).sortBy(function(e){return e.producePercentage}).value()[0];return l=l||{},f.a.createElement("main",{className:"container header-overlap pb-3 token_black"},f.a.createElement("div",{className:0===a.length||0===r.length?"card":""},0===a.length||0===r.length?f.a.createElement(C.b,null):f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-6 foundation_title represent_title"},f.a.createElement("div",{className:"mb-3"},f.a.createElement("div",{className:"card h-100 widget-icon"},f.a.createElement("div",{className:"card-body"},f.a.createElement("h3",{className:"text-primary"},f.a.createElement(w.c,{value:a.length})),Object(k.c)("Super Representatives")))),f.a.createElement("div",{className:"mb-3"},f.a.createElement("div",{className:"card h-100"},f.a.createElement("div",{className:"card-body"},f.a.createElement("h3",null,f.a.createElement(w.c,{value:i.producePercentage}),"%"),f.a.createElement("div",{className:"represent_title_text"},f.a.createElement("span",null,Object(k.c)("highest_productivity")," - "),f.a.createElement(N.a,{address:i.address},i.name||i.url))))),f.a.createElement("div",{className:"mb-3"},f.a.createElement("div",{className:"card h-100 widget-icon"},f.a.createElement("div",{className:"card-body"},f.a.createElement("h3",null,f.a.createElement(w.c,{maximumFractionDigits:2,minimunFractionDigits:2,value:l.producePercentage||0}),"%"),f.a.createElement("div",{className:"represent_title_text"},f.a.createElement("span",null,Object(k.c)("lowest_productivity")," - "),f.a.createElement(N.a,{address:l.address},l.name||l.url)))))),f.a.createElement("div",{className:"col-md-6 mb-3"},f.a.createElement("div",{className:"card"},f.a.createElement("div",{style:{height:326,background:"#fff"},className:"pt-2 bg-line_blue"},f.a.createElement("div",{className:"card-header bg-tron-light color-grey-100 text-center pb-0",style:{border:0}},f.a.createElement("h6",{className:"m-0 lh-150",style:{fontSize:16}},f.a.createElement(P.a,{to:"/blockchain/stats/pieChart"},Object(k.c)("produce_distribution")))),f.a.createElement("div",{className:"card-body pt-0"},f.a.createElement("div",{style:{minWidth:255,height:200}},f.a.createElement(M.a,{message:{id:"produce_distribution"},intl:t,data:r,style:{height:255},source:"representatives"})))))))),f.a.createElement("div",{className:" mt-3"},f.a.createElement("div",{className:" table-scroll"},this.renderWitnesses(a))))}}]),a}(x.Component);function L(e){var t=e.account,a=e.showSync,r=void 0===a||a,i=e.index;return e.state,e.props,f.a.createElement("tr",{key:t.address,className:26<t.index?"represent__table__lighter":"represent__table__content"},f.a.createElement("td",{className:"text-center",style:{paddingLeft:"14px"}},i+1),f.a.createElement("td",null,t.name?f.a.createElement("div",{className:"_context_right_click font-weight-bold",style:{width:"150px"}},f.a.createElement(N.a,{address:t.address},t.name,f.a.createElement("br",null),f.a.createElement("span",{className:"small text-muted"},t.url))):f.a.createElement("div",{className:"_context_right_click"},f.a.createElement(N.a,{address:t.address},t.url))),f.a.createElement("td",{className:"text-center"},t.version||"-"),r?f.a.createElement("td",{className:"text-center"},t.representerStatus?f.a.createElement(n.a,{placement:"top",title:Object(k.c)("SR_normal")},f.a.createElement("span",{key:"no",className:"text-success"},f.a.createElement("i",{className:"fas fa-circle"}))):f.a.createElement(n.a,{placement:"top",title:Object(k.c)("SR_avnormal")},f.a.createElement("span",{key:"yes",className:"text-danger"},f.a.createElement("i",{className:"fas fa-circle"})))):f.a.createElement("td",null,"\xa0"),f.a.createElement("td",{className:"text-center  d-none d-lg-table-cell"},t.latestBlockNumber?f.a.createElement(N.b,{number:t.latestBlockNumber}):"-"),f.a.createElement("td",{className:"text-center d-none d-lg-table-cell"},t.producedTotal?f.a.createElement(w.c,{value:t.producedTotal}):"-"),f.a.createElement("td",{className:"text-center d-none d-lg-table-cell"},0!==t.missedTotal?f.a.createElement(w.c,{value:t.missedTotal}):"-"),f.a.createElement("td",{className:"text-center"},0<t.producedTotal?f.a.createElement(x.Fragment,null,Math.floor(100*t.producePercentage)/100,"%"):"-"),f.a.createElement("td",{className:"text-right"},f.a.createElement(x.Fragment,null,f.a.createElement(w.c,{value:t.votes||0}),f.a.createElement("br",null),"(",f.a.createElement(w.c,{minimumFractionDigits:2,maximumFractionDigits:2,value:t.votesPercentage}),"%",")")),f.a.createElement("td",{className:"text-right"},f.a.createElement(x.Fragment,null,f.a.createElement("span",null,t.brokerage||0==t.brokerage?100-t.brokerage+"%":""))))}var A={loadWitnesses:E.f,loadStatisticData:E.e};t.default=Object(v.connect)(function(e){return{witnesses:e.network.witnesses,statisticData:e.network.statisticData}},A,null,{pure:!1})(Object(w.h)(F))}}]);