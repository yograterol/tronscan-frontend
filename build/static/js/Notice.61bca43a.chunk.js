(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1455:function(e,t,a){"use strict";var n=a(16),r=a(15),i=a(21),c=a(20),o=a(0),s=a.n(o),l=a(13),m=a(1456),d=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={time:e.time,newTime:Object(m.d)(e.time),timer:null},r}return Object(r.a)(a,[{key:"componentWillMount",value:function(){this.updateTime()}},{key:"updateTime",value:function(){var e=this,t=setInterval(function(){e.setState({newTime:Object(m.d)(e.props.time)})},1e3);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.state.newTime;return s.a.createElement("div",{className:"token_black table_pos"},s.a.createElement("div",null,e))}}]),a}(s.a.Component);t.a=Object(l.h)(d)},1456:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return l});var n=a(263),r=a.n(n);function i(e){var t=e.indexOf("T"),a=e.indexOf("Z"),n=e.substr(0,t),r=e.substr(t+1,a-t-1),i=n.replace(/\-/g,"/")+" "+r,c=new Date(Date.parse(i));return c=c.getTime(),c/=1e3,c+=28800,new Date(1e3*parseInt(c)).toLocaleDatetimeObj()+" "+new Date(1e3*parseInt(c)).totimeObj().match(/\d{2}:\d{2}:\d{2}/)[0]}function c(e,t,a,n){var r=t[n[a+1]]-e[n[a]].unit*t[n[a]],i=1<t[n[a]]?e[n[a]].plural:e[n[a]].odd,c=1<r?e[n[a+1]].plural:e[n[a+1]].odd,o=t[n[a]],s=r;return{firstTime:o,secondTime:s,firstUnit:i,secondUnit:c,string:s&&0<s?"".concat(o).concat(i," ").concat(s).concat(c):"".concat(o," ").concat(i)}}function o(e){return function(e){var t=r()(e),a=r()(),n="",i={day:{key:"days",plural:"days",odd:"day",unit:24},hour:{key:"hours",plural:"hrs",odd:"hr",unit:60},minute:{key:"minutes",plural:"mins",odd:"min",unit:60},second:{key:"seconds",plural:"secs",odd:"sec"}},o={};for(var s in i)o[s]=a.diff(t,i[s].key);var l=["day","hour","minute","second"],m="",d="";return 1<=o[l[0]]?n=c(i,o,0,l):1<=o[l[1]]?n=c(i,o,1,l):1<=o[l[2]]?n=c(i,o,2,l):(m=1<o[l[3]]?i[l[3]].plural:i[l[3]].odd,n={firstTime:d=o[l[3]],secondTime:0,firstUnit:m,secondUnit:null,string:d<1?"less than 1sec":"".concat(d).concat(m)}),n}(e).string+" ago"}function s(){var e=window.performance;if(e){var t=e.timing,a={};return a.loadPage=t.loadEventEnd-t.navigationStart,a.domReady=t.domContentLoadedEventEnd-t.navigationStart,a.redirect=t.redirectEnd-t.redirectStart,a.lookupDomain=t.domainLookupEnd-t.domainLookupStart,a.ttfb=t.responseStart-t.navigationStart,a.request=t.responseEnd-t.requestStart,a.loadEvent=t.loadEventEnd-t.loadEventStart,a.appcache=t.domainLookupStart-t.fetchStart,a.unloadEvent=t.unloadEventEnd-t.unloadEventStart,a.connect=t.connectEnd-t.connectStart,a}console.log("\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 performance \u63a5\u53e3")}function l(){var e=[];return window.performance.getEntries().forEach(function(t,a){var n={};n.Type=t.initiatorType,"first-paint"==t.name&&(n.Type="first-paint"),n.tSize=t.transferSize,n.sTime=parseInt(t.startTime),n.name=t.name,n.dur=parseInt(t.duration),n.rStart=parseInt(t.requestStart),e.push(n)}),e}},3477:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(6),c=a(16),o=a(15),s=a(21),l=a(20),m=a(0),d=a.n(m),u=a(13),p=a(18),v=a(63),f=a(3),h=a(1456),E=a(1455),b=function(e){Object(s.a)(n,e);var t,a=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).state={notice:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:(t=Object(i.a)(r.a.mark(function e(){var t,a,n,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.match,t.intl,a.params.id,e.next=4,p.b.getNotices({sort:"-timestamp"});case 4:n=e.sent,i=n.data,this.setState({notice:i});case 7:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e,t=this.props,a=t.intl,n=t.match.params.id,r=0<this.state.notice.length?this.state.notice.filter(function(e){return e.id==n})[0]:{},i=r.createTime?Object(h.a)(r.createTime.replace(/\s/,"T")+"Z"):"2018-01-01T00:00:00Z",c=r.extInfo?JSON.parse(r.extInfo):[];return e="zh"===a.locale?"CN":"EN",d.a.createElement("div",{className:"container header-overlap"},d.a.createElement("main",{className:"exchange"},d.a.createElement("div",{className:"exchange-box notice-box mb-2"},d.a.createElement("div",{className:"exchange-box-left"},d.a.createElement("div",{className:"exchange-list mr-2"},d.a.createElement("div",{className:"exchange-list-mark p-3"},d.a.createElement("div",{className:"exchange-box-left-title"},Object(f.c)("OthersArticle")),d.a.createElement("div",{className:"list-wrap"},this.state.notice.map(function(t){return d.a.createElement(v.a,{to:"/notice/"+t.id,repalce:"true",key:t.id,className:"list"+(n==t.id?" active":"")},t["title"+e])}))))),d.a.createElement("div",{className:"exchange-box-right"},d.a.createElement("div",{className:"exchange__kline p-3 mb-2"},d.a.createElement("div",{className:"exchange-box-right-title"},r["title"+e]),d.a.createElement("div",{className:"exchange-box-right-vice-title"},d.a.createElement("span",{className:"author"},"Poloni DEX"),d.a.createElement("div",{className:"line"}),d.a.createElement(E.a,{time:i})),d.a.createElement("div",{className:"exchange-box-right-content"},d.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:r["context"+e]}}),d.a.createElement("div",{className:"social-media"},c.map(function(e,t){return d.a.createElement("div",{key:t,className:"item"},d.a.createElement("span",null,e.method,":"),d.a.createElement("a",{href:e.link,target:"_blank"},e.link))}))))))))}}]),n}(d.a.Component);t.default=Object(u.h)(b)}}]);