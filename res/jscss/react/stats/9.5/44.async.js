(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"x2+c":function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz"));__webpack_require__("I4dy");var _datePicker=_interopRequireDefault(__webpack_require__("+qVy")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_locale=__webpack_require__("TJP2"),MonthPicker=_datePicker.default.MonthPicker,RangePicker=_datePicker.default.RangePicker,WeekPicker=_datePicker.default.WeekPicker,Meta=_card.default.Meta,defaultCardPic="https://r6sground.cn/r6-db-info/github/?url=https://github.com/xieqiqiang00/R6PIC/blob/master/rainbow6/news/original_1558493667.jpg",ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){if("undefined"!=typeof window.needjs)eval(window.needjs),window.Fthis.setState({services:{Done:(new Date).getTime()}});else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+window.selfDomain+"/r6sg-app/res/need.js/",!1),xhr.send(),xhr.status>=200&&xhr.status<300&&(window.needjs=xhr.responseText,eval(xhr.responseText),window.Fthis.setState({services:{Done:(new Date).getTime()}}))}if("undefined"==typeof window.competition){var _xhr=new XMLHttpRequest;if(_xhr.open("GET","https://promotion.r6sground.cn/competition/main.txt",!1),_xhr.send(),_xhr.status>=200&&_xhr.status<300)try{window.competition=JSON.parse(_xhr.responseText),window.Fthis.setState({services:{Done:(new Date).getTime()}})}catch(e){}}}},{key:"render",value:function(){window.Fthis=this;_react.default.createElement(_icon.default,{type:"loading"});return"undefined"==typeof this.state.services||"undefined"==typeof this.state.services.Done||"undefined"==typeof window.competition?_react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:35}},_react.default.createElement(_row.default,{gutter:16},_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"}))),_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"}))),_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"}))),_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{alt:"example",src:defaultCardPic}),loading:!0},_react.default.createElement(Meta,{title:"example",description:"example.com"})))))):_react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:35}},_react.default.createElement(_row.default,{gutter:16},Array.from(window.competition).map(function(e,t){var a="/Competition/"+e.id,r="";return new Date(e.time2).getTime()<(new Date).getTime()&&(r=(0,_locale.formatMessage)({id:"comp.\u5df2\u4e8e"})+" "+e.time2.substring(0,e.time2.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u7ed3\u675f"})),new Date(e.time2).getTime()>(new Date).getTime()&&(r=(0,_locale.formatMessage)({id:"comp.\u8fdb\u884c\u4e2d"})+" "+e.time2.substring(0,e.time2.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u7ed3\u675f"})),new Date(e.time1).getTime()>(new Date).getTime()&&(r=(0,_locale.formatMessage)({id:"comp.\u5c06\u4e8e"})+" "+e.time1.substring(0,e.time1.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u5f00\u59cb"})),new Date(e.regTime2).getTime()>(new Date).getTime()&&(r=(0,_locale.formatMessage)({id:"comp.\u62a5\u540d\u8fdb\u884c\u4e2d"})),new Date(e.regTime1).getTime()>(new Date).getTime()&&(r=(0,_locale.formatMessage)({id:"comp.\u5c06\u4e8e"})+" "+e.regTime1.substring(0,e.regTime1.length-3).replace(" 00:00","")+" "+(0,_locale.formatMessage)({id:"comp.\u5f00\u59cb\u62a5\u540d"})),_react.default.createElement(_col.default,{className:"gutter-row",span:24,lg:12,md:12,xxl:6},_react.default.createElement(_card.default,{hoverable:!0,style:{marginBottom:5},cover:_react.default.createElement("img",{src:e.headpic}),onClick:function(){window.Fthis.props.history.push(a)}},_react.default.createElement(Meta,{title:e.title,description:e.des}),_react.default.createElement(Meta,{description:r})))}))))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);