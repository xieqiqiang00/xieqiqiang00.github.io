(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{mwcJ:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("avCb");var _spin=_interopRequireDefault(__webpack_require__("dbpm"));__webpack_require__("QKdE");var _list=_interopRequireDefault(__webpack_require__("2Vcd"));__webpack_require__("B40R");var _badge=_interopRequireDefault(__webpack_require__("43HQ"));__webpack_require__("0NfI");var _tooltip=_interopRequireDefault(__webpack_require__("ZHzj"));__webpack_require__("dp+4");var _avatar=_interopRequireDefault(__webpack_require__("nA/W"));__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("DYP6");var _alert=_interopRequireDefault(__webpack_require__("cobE")),_defineProperty2=_interopRequireDefault(__webpack_require__("3CjV"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactDom=_interopRequireDefault(__webpack_require__("syOM")),_reactAdsense=_interopRequireDefault(__webpack_require__("zsfv")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),_g2React=_interopRequireDefault(__webpack_require__("a6n9")),_g=__webpack_require__("1zR+"),_locale=__webpack_require__("TJP2"),Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text,requestProfileId,ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(window.Fthis=this,window.LastPage="Stats/Met",window.urlFix=function(){var e=-1;try{var t=window.location.pathname.indexOf("/",window.location.pathname.indexOf("/",window.location.pathname.indexOf("/")+1)+1)+1;if(0==t)throw"loc = 0";requestProfileId=window.location.pathname.substring(t,t+36)}catch(e){requestProfileId=0}if("undefined"!=typeof window.resulted&&"undefined"!=typeof window.resulted.profile_id&&(0!=String(requestProfileId).length&&0!=String(requestProfileId)||(requestProfileId=window.resulted.profile_id),e=window.resulted.profile_id),requestProfileId==e){requestProfileId=window.resulted.profile_id;var r="/"+window.LastPage+"/"+requestProfileId;history.replaceState(null,null,r);var i=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6700\u8fd1\u76f8\u9047"})+" "+document.title.replace(i,"")}else 36!=requestProfileId.length&&(requestProfileId=0)},window.urlFix(),"undefined"!=typeof window.needjs)eval(window.needjs),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?this.setState({services:{Done:456781}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),"undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId?_this2.setState({services:{Done:45672}}):window.Fthis.props.history.replace("/search/?profileid="+requestProfileId))}}window.onpopstate=function(e){if("undefined"!=typeof window.resulted&&window.resulted.profile_id==requestProfileId){window.Fthis.setState({services:{Done:45672}});var t=new RegExp(window.resulted.UsernameOnPlatform,"");document.title=window.resulted.UsernameOnPlatform+(0,_locale.formatMessage)({id:"\u7684\u6700\u8fd1\u76f8\u9047"})+" "+document.title.replace(t,"")}else window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}}},{key:"render",value:function(){window.Fthis=this;var e=_react.default.createElement(_icon.default,{type:"loading"});if(window.PaperMarginResize=function(e){if(console.log("RC"),document.body.offsetWidth>1e3?document.body.offsetWidth>1200?window.PaperMargin="10px "+(document.body.offsetWidth-1200)/2+"px":window.PaperMargin="10px 50px":window.PaperMargin=20,e){var t=(new Date).getTime();window.Fthis.setState({services:{Done:t}})}},window.onresize=function(){window.PaperMarginResize(!0)},window.PaperMarginResize(),"undefined"!=typeof this.state.services.Done||"true"==this.state.services.Done){if("undefined"==typeof window.resulted||"undefined"==typeof window.resulted.profile_id){try{window.Fthis.props.history.replace("/search/?profileid="+requestProfileId)}catch(e){window.Fthis.props.history.replace("/search/?profileid=")}return null}return _react.default.createElement("div",{id:"main",style:{maxHeight:window.innerHeight-64,overflow:"auto",background:"white"}},_react.default.createElement("div",{style:(0,_defineProperty2.default)({padding:24},"padding",window.PaperMargin)},_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"\u6700\u8fd1\u9047\u5230\u7684\u73a9\u5bb6"}))),function(){if("undefined"!=typeof window.userinfo&&!window.userinfo.prime)return _react.default.createElement(_alert.default,{message:(0,_locale.formatMessage)({id:"\u9700\u8981\u8ba2\u9605Prime\u624d\u80fd\u89e3\u9501\u6b64\u529f\u80fd"}),type:"warning"})}(),function(){if(!window.userinfo||!window.userinfo.prime)return _react.default.createElement(_row.default,{style:{marginTop:15}},_react.default.createElement(_reactAdsense.default.Google,{client:"ca-pub-4417984338760431",slot:"2284011358"}))}(),_react.default.createElement("div",{onClick:function(){"undefined"==typeof window.userinfo||window.userinfo.prime||window.Fthis.props.history.push("/Shopitems/items/1")}},_react.default.createElement(_spin.default,{tip:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"}),spinning:function(){try{return window.resulted.metList.list,!1}catch(e){return!0}}()},_react.default.createElement(_list.default,{className:"demo-loadmore-list",itemLayout:"horizontal",dataSource:function(){try{return window.resulted.metList.list,window.resulted.metList.list}catch(e){return[]}}(),renderItem:function(e){return _react.default.createElement(_spin.default,{tip:(0,_locale.formatMessage)({id:"\u52a0\u8f7d\u4e2d"}),spinning:function(){try{return"undefined"==typeof window.miniInfo||"undefined"==typeof window.miniInfo[e.pid]}catch(e){return!1}}()},_react.default.createElement(_list.default.Item,{onClick:function(){-1!=e.pid.indexOf("-")&&(window.LastPage="Stats/Peek",window.Fthis.props.history.push("/search/?profileid="+e.pid))},actions:[_react.default.createElement("div",null,_react.default.createElement(_avatar.default,{size:64,src:IconMMR(mmrtolevel(function(){try{var t=0;return window.miniInfo[e.pid].rank_apac_mmr>t&&2500!=window.miniInfo[e.pid].rank_apac_mmr&&(t=window.miniInfo[e.pid].rank_apac_mmr),window.miniInfo[e.pid].rank_emea_mmr>t&&2500!=window.miniInfo[e.pid].rank_emea_mmr&&(t=window.miniInfo[e.pid].rank_emea_mmr),window.miniInfo[e.pid].rank_ncsa_mmr>t&&2500!=window.miniInfo[e.pid].rank_ncsa_mmr&&(t=window.miniInfo[e.pid].rank_ncsa_mmr),t}catch(e){return 0}}()),seasonidToRankVer())}),_react.default.createElement(_tooltip.default,{placement:"leftTop",title:"Rating"},_react.default.createElement(_avatar.default,{size:64,style:{fontSize:40,color:"#f56a00",backgroundColor:"#fde3cf"}},function(){try{return window.miniInfo[e.pid].operatorpvp_ug>0?window.miniInfo[e.pid].operatorpvp_ug:"/"}catch(e){return 0}}())))]},_react.default.createElement(_list.default.Item.Meta,{avatar:_react.default.createElement(_badge.default,{count:e.sort},_react.default.createElement(_avatar.default,{shape:"square",size:64,src:function(){try{var t=window.miniInfo[e.pid].uplayMainId;return-1==t.indexOf(",")&&-1!=t.indexOf("-")||(t="06cf6417-becd-4442-a065-8876c5f2dda1"),ProfileIdtoAvatarImg(t)}catch(e){return ProfileIdtoAvatarImg("06cf6417-becd-4442-a065-8876c5f2dda1")}}()})),title:function(){return"undefined"!=typeof window.miniInfo&&"undefined"!=typeof window.miniInfo[e.pid]?window.miniInfo[e.pid].UsernameOnPlatform:e.pid}(),description:getFriendlyTime(e.time)+" "+time(new Date(e.time).getTime())}),_react.default.createElement("div",{style:{height:80}})))}}))),_react.default.createElement(_typography.default,null,_react.default.createElement(Paragraph,null))))}return _react.default.createElement("div",null,e)}},{key:"componentWillUnmount",value:function(){this.state.services=void 0}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);