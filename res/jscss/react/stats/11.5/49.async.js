(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{hgYP:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("Kbp9");var _skeleton=_interopRequireDefault(__webpack_require__("W92m"));__webpack_require__("avCb");var _spin=_interopRequireDefault(__webpack_require__("dbpm"));__webpack_require__("1hTB");var _table=_interopRequireDefault(__webpack_require__("KFXw"));__webpack_require__("334S");var _radio=_interopRequireDefault(__webpack_require__("CzC8"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_g2React=_interopRequireDefault(__webpack_require__("a6n9")),_g=__webpack_require__("1zR+"),_locale=__webpack_require__("TJP2"),_propTypes=__webpack_require__("EH+i"),Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text,myChart,notificationErrorKey="R6INDEXERR",oldChartConfig={};function getData(e){if("undefined"==typeof window.leaderboardData){var t="https://promotion.r6sground.cn/R6Index/",a=e["statistics"]||[],r=e["limit"]||0;window.Fthis.setState({tableDataLoading:!0,statistics:a,limit:String(r)});var i={statistics:a,limit:r},n=Base64.encode(JSON.stringify(i));n.length>0&&(t+=n);var o=new XMLHttpRequest;o.open("GET",t,!0),o.send(),o.onreadystatechange=function(){if(4==o.readyState&&o.status>=200&&o.status<300){var e=JSON.parse(o.responseText),t=e.data,a=(e.resolution,{}),r={},i={tableDataLoading:!1,table:!1,services:{Done:!0}};for(var n in t){var l=t[n],s=!1,d=void 0,c=void 0,u=function(e){switch(e){case"rank":return"\u6392\u4f4d\u6218";case"casual":return"\u5feb\u901f\u5bf9\u6218";case"generalMatchsRecord":return"\u6d3b\u8dc3\u73a9\u5bb6\u6307\u6570";case"PARTYSIZE5Record":return"\u4e94\u9ed1\u73a9\u5bb6\u6307\u6570";case"plantbombpvp":return"\u70b8\u5f39";case"rescuehostagepvp":return"\u4eba\u8d28";case"secureareapvp":return"\u4fdd\u5168";case"otherGameModes":return"\u5176\u4ed6\u6a21\u5f0f";default:return e}};if(Object.keys(l).length>1){if(i["table"]=!0,0==n.indexOf("operators_")){for(var _ in i["limitLimit"]={0:!0,1:!0,2:!0},l){var f=l[_];for(var p in f){var h=parseInt(f[p]),v=R6opeIdToOpeName(p);"object"!=typeof r[p]&&(r[p]={}),r[p]["key"]=p,r[p]["name"]=v,r[p][n]=h,"number"!=typeof r[p][n]&&(r[p][n]=0),h>0&&(r[p][n]+=h)}}i["columns"]=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"KD",dataIndex:"kd",key:"kd",sortDirections:["descend","ascend"],sorter:function(e,t){return e.kd-t.kd}},{title:"\u80dc\u7387",dataIndex:"wl",key:"wl",sortDirections:["descend","ascend"],sorter:function(e,t){return e.wl-t.wl},render:function(e){return _react.default.createElement("span",null,e," ","%")}},{title:"pickRate",dataIndex:"pickRate",key:"pickRate",sortDirections:["descend","ascend"],sorter:function(e,t){return e.pickRate-t.pickRate},render:function(e){return _react.default.createElement("span",null,e," ","%")}}]}else if(0==n.indexOf("count_")){a={};var g=[];for(var m in l){var w={};for(var b in l[m])"count_users"==n?(console.log("targetName"),i["title"]="\u73a9\u5bb6\u6d3b\u8dc3\u91cf",i["table"]=!1,s=!0,w[u(b)]=l[m][b],i["limitLimit"]={0:!0,1:!0,2:!0}):"count_ranks"==n?(i["title"]="\u6392\u4f4d/\u4f11\u95f2\u6bd4\u4f8b(\u767e\u5206\u6bd4)",i["table"]=!1,s=!1,w[u(b)]=l[m][b]):"count_modes"==n?(i["title"]="\u6a21\u5f0f\u6bd4\u7387(\u767e\u5206\u6bd4)",i["table"]=!1,s=!1,w[u(b)]=l[m][b]):"count_maps"==n?(i["title"]="\u5730\u56fe\u9009\u4e2d\u6982\u7387(\u767e\u5206\u6bd4)",i["table"]=!1,i["limitLimit"]={1:!0,2:!0},s=!1,w[mapIdToName(b)]=l[m][b]):"count_operators"==n&&(i["title"]="\u5e72\u5458\u4e0a\u573a\u7387(\u767e\u5206\u6bd4)",i["table"]=!1,i["limitLimit"]={1:!0,2:!0},s=!1,w[opeidtoname(b)]=l[m][b]);var y=new Date(m).toLocaleDateString()+" "+new Date(m).toLocaleDateString("chinese",{weekday:"long"}),k=new Date(m).valueOf();g.push({dataTimeStamp:k,dataTime:y,value:w})}g.sort(function(e,t){var a=e["dataTimeStamp"],r=t["dataTimeStamp"];return a<r?-1:a>r?1:void 0});for(var q={},D={},S=0,R=g;S<R.length;S++){var x=R[S];for(var C in a[x.dataTime]=x.value,x.value)"number"!=typeof D[C]&&(D[C]=0),D[C]=D[C]+x.value[C];var L=[];for(var E in D)L.push({aid:E,value:D[E]});for(var T in L.sort(function(e,t){var a=e["value"],r=t["value"];return a<r?1:a>r?-1:void 0}),L){var O=L[T];q[O.aid]=T<5}}console.log("dataForDisplay",a,"thisData",l),window.Fthis.setState(i),createTablePOT(a,"trend",{absoluteValue:s,defaultLegendSelected:q,xText:d,yText:c});break}}else if(1==Object.keys(l).length){if(0==n.indexOf("general_"))break;if(0==n.indexOf("count_")){for(var F in a={},l){var P={};for(var I in l[F])Object.keys(P).length>10||("count_users"==n?(i["title"]="\u6d3b\u8dc3\u73a9\u5bb6\u6570\u91cf",i["limitLimit"]={1:!0,2:!0},i["table"]=!1,s=!1,P[u(I)]=l[F][I]):"count_ranks"==n?(i["title"]="\u6392\u4f4d/\u4f11\u95f2\u6bd4\u4f8b(\u767e\u5206\u6bd4)",i["table"]=!1,s=!1,P[u(I)]=l[F][I]):"count_modes"==n?(i["title"]="\u6a21\u5f0f\u6bd4\u4f8b(\u767e\u5206\u6bd4)",i["table"]=!1,s=!1,P[u(I)]=l[F][I]):"count_maps"==n?(i["title"]="\u5730\u56fe\u9009\u4e2d\u6982\u7387(\u524d\u5341\u767e\u5206\u6bd4)",i["limitLimit"]={1:!0,2:!0},i["table"]=!1,s=!1,P[mapIdToName(I)]=l[F][I]):"count_operators"==n&&(i["title"]="\u5e72\u5458\u4e0a\u573a\u7387(\u524d\u5341\u767e\u5206\u6bd4)",i["limitLimit"]={1:!0,2:!0},i["table"]=!1,s=!1,P[opeidtoname(I)]=l[F][I]));a=P}window.Fthis.setState(i),createTablePOT(a,"amount",{absoluteValue:s,xText:d,yText:c})}}}if(console.log("tableDataTemp",r),i["table"]){a=[];var j=0;for(var M in r){var A=r[M];A.operators_won>0&&(j+=A.operators_won),A.operators_lost>0&&(j+=A.operators_lost)}for(var z in r){var N=r[z],H={};N.operators_lost+N.operators_won>50&&(H.name=N.name,N.operators_kills>0&&N.operators_deaths>0&&(H.kd=parseInt(N.operators_kills/N.operators_deaths*1e3)/1e3),N.operators_won>0&&N.operators_lost>0&&(H.wl=parseInt(N.operators_won/(N.operators_lost+N.operators_won)*100),H.pickRate=parseInt((N.operators_lost+N.operators_won)/j*1e4)/100),a.push(H))}i["dataSource"]=a,window.Fthis.setState(i)}}else;}}else window.Fthis.setState({services:{Done:!0}})}function createTablePOT(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.log("createTablePOTing",t,a,r),"object"!=typeof oldChartConfig&&(oldChartConfig={});try{var i=myChart.getOption()["legend"][0].selected;Object.keys(i).length>0&&(oldChartConfig["legendSelected"]=i),myChart.clear()}catch(e){}switch(myChart=echarts.init(document.getElementById("c1")),a){case"trend":var n=!1,o=null;r.absoluteValue&&(n=!0),r.defaultLegendSelected&&(o=r.defaultLegendSelected);var l=[],s=[],d=[],c={},u={};for(var _ in t){s.push(_);var f=t[_];for(var p in f)"undefined"==typeof c[p]&&(d.push(p),c[p]=[]),"number"!=typeof u[_]&&(u[_]=0),u[_]=u[_]+f[p]}for(var h in t){var v=t[h];for(var g in c)if("number"!=typeof v[g])c[g].push(null);else if(n)c[g].push(v[g]);else{var m=(v[g]/u[h]*100).toFixed(2);c[g].push(m)}}for(var w in c){var b={type:"line"};b["name"]=w,b["data"]=c[w],l.push(b)}e={tooltip:{trigger:"axis"},legend:{data:d,selected:function(){if("object"==typeof oldChartConfig&&"object"==typeof oldChartConfig["legendSelected"]&&null!=oldChartConfig["legendSelected"])return oldChartConfig["legendSelected"];if("object"==typeof o&&null!=o)return o;var e={};if(d.length>5)for(var t in d)e[d[t]]=!(t>5);return e}()},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:s},yAxis:{name:"\u76f8\u5bf9\u503c",type:"value"},series:l};break;case"amount":var y=!1;r.absoluteValue&&(y=!0);var k=[["probability","amount","product"]],q=0;for(var D in t)t[D]>0&&(q+=t[D]);for(var S in t)if(t[S]>0){var R=S,x=t[S],C=x/q*100;k.push([C,x,R])}k.sort(function(e,t){var a=e[0],r=t[0];return a<r?-1:a>r?1:void 0});var L={x:"probability",y:"product"};y&&(L={x:"amount",y:"product"}),e={dataset:{source:k},tooltip:{trigger:"axis"},grid:{containLabel:!0},xAxis:{name:"\u76f8\u5bf9\u503c"},yAxis:{type:"category"},series:[{type:"bar",encode:L}]};break;default:break}myChart.setOption(e),window.onresize=function(){console.log("onresize"),window.PaperMarginResize(!0),myChart.resize()}}function sendGetDataRequest(e,t){try{var a;if("undefined"!=typeof e&&"undefined"!=typeof t){var r={statistics:e,limit:t},i=document.location.pathname+"?wd="+Base64.encode(JSON.stringify(r));window.Fthis.props.history.replace(i),a=r}else a=JSON.parse(Base64.decode(getSearch()["wd"]||""));Fthis.setState({getDataRequestSent:!0}),getData(a)}catch(e){window.Fnotification["error"]({key:notificationErrorKey,message:FformatMessage({id:"\u65e0\u6548\u7684\u67e5\u8be2\u53c2\u6570"}),description:FformatMessage({id:"R6\u6307\u6570"}),duration:5e3}),console.error(e)}}var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={limitLimit:{},services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){"undefined"!=typeof window.needjs?eval(window.needjs):alert("needjs MISSING")}},{key:"render",value:function(){var e=this;window.Fthis=this;var t=_react.default.createElement(_icon.default,{type:"loading"});return window.PaperMarginResize=function(e){if(console.log("RC"),document.body.offsetWidth>1e3?document.body.offsetWidth>1200?window.PaperMargin="10px "+(document.body.offsetWidth-1200)/2+"px":window.PaperMargin="10px 50px":window.PaperMargin=20,e){var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})}},window.PaperMarginResize(),window.echartsLoaded?"undefined"!=typeof this.state.services.Done||"true"==this.state.services.Done?_react.default.createElement("div",{style:{height:"100%",width:"100%",overflow:"overlay"}},_react.default.createElement("div",{style:{height:60,background:"#1890ff"}},_react.default.createElement(_row.default,{style:{}},_react.default.createElement(_col.default,{span:12,style:{textAlign:"left",paddingLeft:15,height:60,fontSize:26,lineHeight:"60px",color:"white",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},"R6\u6307\u6570"),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right",padding:15,height:60}}))),_react.default.createElement("div",{style:{height:80,background:"#1890ffb3"}},_react.default.createElement(_row.default,{style:{}},_react.default.createElement(_col.default,{span:24,style:{textAlign:"left",paddingLeft:15,height:40,fontSize:22,lineHeight:"40px",color:"white",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},this.state.title),_react.default.createElement(_col.default,{span:24,style:{textAlign:"left",paddingLeft:15,height:30,lineHeight:"30px"}},_react.default.createElement(_radio.default.Group,{value:this.state.limit,buttonStyle:"solid",onChange:function(t){var a=t.target.value;sendGetDataRequest(e.state.statistics,a)}},_react.default.createElement(_radio.default.Button,{value:"0",disabled:this.state.limitLimit["0"]}," ","\u5b9e\u65f6"),_react.default.createElement(_radio.default.Button,{value:"3",disabled:this.state.limitLimit["3"]}," ","14\u5929"))))),_react.default.createElement("div",{style:{height:document.body.offsetHeight-64,background:"#F7F7F7"}},function(){return Fthis.state.table?_react.default.createElement(_spin.default,{tip:"\u4e0b\u8f7d\u6570\u636e",spinning:Fthis.state.tableDataLoading},_react.default.createElement(_table.default,{dataSource:Fthis.state.dataSource,columns:Fthis.state.columns})):_react.default.createElement(_spin.default,{tip:"\u4e0b\u8f7d\u6570\u636e",spinning:Fthis.state.tableDataLoading},_react.default.createElement("div",{id:"c1",style:{widht:"100%",height:document.body.offsetHeight-64,background:"#fff"}},t))}()),function(){setTimeout(function(){},0)}()):(this.state.getDataRequestSent||sendGetDataRequest(),_react.default.createElement("div",{style:{height:"100%",width:"100%",overflow:"overlay"}},_react.default.createElement("div",{style:{height:60,background:"#1890ff"}},_react.default.createElement(_row.default,{style:{}},_react.default.createElement(_col.default,{span:12,style:{textAlign:"left",paddingLeft:15,height:60,fontSize:26,lineHeight:"60px",color:"white",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},"R6\u6307\u6570"),_react.default.createElement(_col.default,{span:12,style:{textAlign:"right",padding:15,height:60}}))),_react.default.createElement("div",{style:{height:80,background:"#1890ffb3"}}),_react.default.createElement("div",{style:{height:400,background:"#fff",padding:15}},_react.default.createElement(_skeleton.default,{active:!0}),_react.default.createElement(_skeleton.default,{active:!0})))):_react.default.createElement("div",null,t,_react.default.createElement(_reactLoadScript.default,{url:"https://"+resCdn+"/gh/xieqiqiang00/r6sground.cn/res/jscss/echarts.min.js",onLoad:function(){console.log("echartsLOAD"),window.echartsLoaded=!0,Fthis.setState({echartsLoaded:!0}),e.state.getDataRequestSent||sendGetDataRequest()}}))}},{key:"componentWillUnmount",value:function(){this.state.services=void 0,oldChartConfig=void 0,myChart=void 0}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);