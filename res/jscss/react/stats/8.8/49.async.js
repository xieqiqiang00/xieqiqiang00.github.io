(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{hGpH:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("1hTB");var _table=_interopRequireDefault(__webpack_require__("KFXw"));__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_locale=__webpack_require__("TJP2"),requestProfileId,ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Operator",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var r="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,r);var o=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u5e72\u5458\u6570\u636e"})+" "+document.title.replace(o,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:!0}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u5e72\u5458\u6570\u636e"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){var e=_react.default.createElement(_icon.default,{type:"loading"});if("undefined"!=typeof this.state.services.Done||"done"==this.state.services.Done){var t=[{title:(0,_locale.formatMessage)({id:"\u56fe\u6807"}),dataIndex:"icon",fixed:"left",width:50},{title:(0,_locale.formatMessage)({id:"\u5e72\u5458"}),dataIndex:"name",sorter:function(e,t){return openametoid(e.name.replace((0,_locale.formatMessage)({id:"\u65b0\u8fdb\u5e72\u5458"}),"\u65b0\u8fdb\u5e72\u5458")).replace(":","")-openametoid(t.name.replace((0,_locale.formatMessage)({id:"\u65b0\u8fdb\u5e72\u5458"}),"\u65b0\u8fdb\u5e72\u5458")).replace(":","")},width:115},{title:(0,_locale.formatMessage)({id:"\u80dc\u7387"}),dataIndex:"wl",sortDirections:["descend","ascend"],sorter:function(e,t){return e.wl.replace("%","")-t.wl.replace("%","")},width:70},{title:(0,_locale.formatMessage)({id:"MMR"}),dataIndex:"mmr",sortDirections:["descend","ascend"],sorter:function(e,t){return e.mmr-t.mmr},width:85},{title:(0,_locale.formatMessage)({id:"\u56de\u5408\u6570"}),dataIndex:"round",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.round-t.round},width:85},{title:(0,_locale.formatMessage)({id:"\u65f6\u957f"}),dataIndex:"time",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.time.replace("\u5c0f\u65f6","")-t.time.replace("\u5c0f\u65f6","")},filters:[{text:(0,_locale.formatMessage)({id:"\u22654\u5c0f\u65f6"}),value:"1"},{text:(0,_locale.formatMessage)({id:"\u5176\u4ed6"}),value:"2"}],onFilter:function(e,t){return t.time.replace("\u5c0f\u65f6","")>3&&1==e||(!(t.time.replace("\u5c0f\u65f6","")>3||2!=e)||void 0)},width:90},{title:(0,_locale.formatMessage)({id:"\u6218\u635f"}),dataIndex:"kd",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.kd-t.kd},width:70},{title:(0,_locale.formatMessage)({id:"\u51fb\u6740"}),dataIndex:"kill",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.kill-t.kill},width:70},{title:(0,_locale.formatMessage)({id:"\u6b7b\u4ea1"}),dataIndex:"death",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.death-t.death},width:70},{title:(0,_locale.formatMessage)({id:"\u5747\u6740"}),dataIndex:"kpr",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.kpr-t.kpr},width:70},{title:(0,_locale.formatMessage)({id:"\u5747\u6b7b"}),dataIndex:"dpr",defaultSortOrder:"ascend",sortDirections:["descend","ascend"],sorter:function(e,t){return t.dpr-e.dpr},width:70},{title:(0,_locale.formatMessage)({id:"\u80dc\u5229"}),dataIndex:"won",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.won-t.won},width:70},{title:(0,_locale.formatMessage)({id:"\u5931\u8d25"}),dataIndex:"lost",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.lost-t.lost},width:70},{title:(0,_locale.formatMessage)({id:"\u5747\u6d3b"}),dataIndex:"spc",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.spc.replace("\u79d2","")-t.spc.replace("\u79d2","")},width:70},{title:(0,_locale.formatMessage)({id:"\u653b\u5b88"}),dataIndex:"place",defaultSortOrder:"descend",sortDirections:["descend","ascend"],sorter:function(e,t){return e.place.replace("\u8fdb\u653b","1").replace("\u9632\u5b88","2").replace("\u53cc\u8fb9","")-t.place.replace("\u8fdb\u653b","1").replace("\u9632\u5b88","2").replace("\u53cc\u8fb9","")}}],r=[];for(var o in window.OperatorList)if("undefined"!=typeof window.resulted["operatorpvp_timeplayed:"+o+":infinite"]){var a={};a.key=o,a.icon=_react.default.createElement(_avatar.default,{src:openametoicon(opeidtoname(o),o)}),a.name=opeidtoname(o).replace("\u65b0\u8fdb\u5e72\u5458",(0,_locale.formatMessage)({id:"\u65b0\u8fdb\u5e72\u5458"})),a.wl=EasyopeInfoFetch(o,"wl")+"%",a.mmr=parseInt(EasyopeInfoFetch(o,"operatorpvp_ug")/(EasyopeInfoFetch(o,"operatorpvp_roundwon")+EasyopeInfoFetch(o,"operatorpvp_roundlost"))/25),a.round=EasyopeInfoFetch(o,"operatorpvp_roundwon")+EasyopeInfoFetch(o,"operatorpvp_roundlost"),a.time=TimesTOh(EasyopeInfoFetch(o,"operatorpvp_timeplayed"))+"\u5c0f\u65f6",a.kd=EasyopeInfoFetch(o,"kd"),a.kill=EasyopeInfoFetch(o,"operatorpvp_kills"),a.death=EasyopeInfoFetch(o,"operatorpvp_death"),a.kpr=(EasyopeInfoFetch(o,"operatorpvp_kills")/(EasyopeInfoFetch(o,"operatorpvp_roundwon")+EasyopeInfoFetch(o,"operatorpvp_roundlost"))).toFixed(2),a.dpr=(EasyopeInfoFetch(o,"operatorpvp_death")/(EasyopeInfoFetch(o,"operatorpvp_roundwon")+EasyopeInfoFetch(o,"operatorpvp_roundlost"))).toFixed(2),a.won=EasyopeInfoFetch(o,"operatorpvp_roundwon"),a.lost=EasyopeInfoFetch(o,"operatorpvp_roundlost"),a.spc=parseInt(EasyopeInfoFetch(o,"operatorpvp_timeplayed")/EasyopeInfoFetch(o,"operatorpvp_death"))+"\u79d2",a.vspc=((EasyopeInfoFetch(o,"operatorpvp_roundwon")+EasyopeInfoFetch(o,"operatorpvp_roundlost"))/EasyopeInfoFetch(o,"operatorpvp_death")).toFixed(2),a.skill=EasyopeInfoFetch(o,"operatorpvp_skills"),"r"==opeidIsFangShouOrNot(o)?a.place=(0,_locale.formatMessage)({id:"\u53cc\u8fb9"}):opeidIsFangShouOrNot(o)?a.place=(0,_locale.formatMessage)({id:"\u9632\u5b88"}):a.place=(0,_locale.formatMessage)({id:"\u8fdb\u653b"}),r.push(a)}function n(e,t,r){}return _react.default.createElement("div",null,_react.default.createElement(_table.default,{columns:t,dataSource:r,onChange:n,scroll:{x:1280,y:5e3},pagination:!1,size:"small",align:"center"}))}return _react.default.createElement("div",null,e)}},{key:"componentDidUpdate",value:function(){function e(){try{var e=window.innerHeight-37-3-document.getElementsByClassName("ant-layout-header")[0].offsetHeight;document.getElementsByClassName("ant-table-body")[0].style.maxHeight=e+"px",document.getElementsByClassName("ant-table-body-inner")[0].style.maxHeight=e+"px"}catch(e){}}window.onresize=function(){try{e()}catch(e){}var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})},e()}},{key:"componentWillUnmount",value:function(){}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);