(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{PlTp:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("QKdE");var _list=_interopRequireDefault(__webpack_require__("2Vcd"));__webpack_require__("VIk5");var _button=_interopRequireDefault(__webpack_require__("X+Ft"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH"));__webpack_require__("ye9w");var _notification2=_interopRequireDefault(__webpack_require__("ZnsJ"));__webpack_require__("ESh5");var _modal=_interopRequireDefault(__webpack_require__("CtjU")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("yPdm");var _steps=_interopRequireDefault(__webpack_require__("Al2M"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_reactLoadScript=_interopRequireDefault(__webpack_require__("oJ+t")),Title=_typography.default.Title,Text=_typography.default.Text,Step=_steps.default.Step;function checkProfile(){delete window.userinfo,eval(window.needjs),window.Fthis.setState({services:{Done:(new Date).getTime()}})}function qrGet(){var e=new XMLHttpRequest;e.open("GET","https://r6sground.cn/promotion/alipay/",!0),e.withCredentials=!0,e.send(),e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE)if(200==e.status)try{var t="https://r6sground.cn/promotion/alipay/?query="+JSON.parse(e.responseText).otp+"-"+window.userinfo.user_ID;new QRCode(document.getElementById("qrcode"),t)}catch(e){console.log(e),window.pageOnNotie("\u4e8c\u7ef4\u7801\u751f\u6210\u5931\u8d25",e)}else window.pageOnNotie("\u4e8c\u7ef4\u7801\u83b7\u53d6\u5931\u8d25","\u8bf7\u5237\u65b0\u540e\u518d\u8bd5\u4e00\u4e0b")}}var ServiceList=function(e){function t(e){var r;return(0,_classCallCheck2.default)(this,t),r=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(t).call(this,e)),r.state={services:[{}],view:"type_a"},r}return(0,_inherits2.default)(t,e),(0,_createClass2.default)(t,[{key:"render",value:function(){window.Fthis=this,window.FModal=_modal.default,window.Fnotification=_notification2.default;var e=[];e.push({title:window.hello(),description:"\u60a8\u5df2\u7ecf\u7ed1\u5b9a\u4e86\u652f\u4ed8\u5b9d"});var t=function(){return _react.default.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 512 512",fill:"#1890ff",stroke:"#1890ff"},_react.default.createElement("path",{d:"M160 32h-128v128h128v-128zM192 0v0 192h-192v-192h192zM64 64h64v64h-64zM480 32h-128v128h128v-128zM512 0v0 192h-192v-192h192zM384 64h64v64h-64zM160 352h-128v128h128v-128zM192 320v0 192h-192v-192h192zM64 384h64v64h-64zM224 0h32v32h-32zM256 32h32v32h-32zM224 64h32v32h-32zM256 96h32v32h-32zM224 128h32v32h-32zM256 160h32v32h-32zM224 192h32v32h-32zM224 256h32v32h-32zM256 288h32v32h-32zM224 320h32v32h-32zM256 352h32v32h-32zM224 384h32v32h-32zM256 416h32v32h-32zM224 448h32v32h-32zM256 480h32v32h-32zM480 256h32v32h-32zM32 256h32v32h-32zM64 224h32v32h-32zM0 224h32v32h-32zM128 224h32v32h-32zM160 256h32v32h-32zM192 224h32v32h-32zM288 256h32v32h-32zM320 224h32v32h-32zM352 256h32v32h-32zM384 224h32v32h-32zM416 256h32v32h-32zM448 224h32v32h-32zM480 320h32v32h-32zM288 320h32v32h-32zM320 288h32v32h-32zM352 320h32v32h-32zM416 320h32v32h-32zM448 288h32v32h-32zM480 384h32v32h-32zM288 384h32v32h-32zM320 352h32v32h-32zM384 352h32v32h-32zM416 384h32v32h-32zM448 352h32v32h-32zM480 448h32v32h-32zM320 416h32v32h-32zM352 448h32v32h-32zM384 416h32v32h-32zM416 448h32v32h-32zM320 480h32v32h-32zM384 480h32v32h-32zM448 480h32v32h-32z"}))};return function(){return"undefined"==typeof window.userinfo||"undefined"==typeof window.userinfo.alipay||""==window.userinfo.alipay||0==window.userinfo.alipay||null==window.userinfo.alipay||"false"==window.userinfo.alipay?_react.default.createElement("div",{style:{maxWidth:1024}},_react.default.createElement(_reactLoadScript.default,{url:"https://cdn.jsdelivr.net/gh/xieqiqiang00/r6sground.cn/res/jscss/qrcode.min.js",onLoad:function(){qrGet()}}),_react.default.createElement(_steps.default,{current:0},_react.default.createElement(Step,{title:"\u626b\u7801\u7ed1\u5b9a",icon:_react.default.createElement(_icon.default,{component:t})}),_react.default.createElement(Step,{title:"\u786e\u8ba4\u6388\u6743",icon:_react.default.createElement(_icon.default,{type:"schedule"})}),_react.default.createElement(Step,{title:"\u8ba4\u8bc1\u901a\u8fc7",icon:_react.default.createElement(_icon.default,{type:"smile-o"})})),_react.default.createElement("div",{style:{textAlign:"center",width:256,margin:25}},_react.default.createElement("div",{id:"qrcode"}),_react.default.createElement(Text,{style:{paddingTop:25}},"\u6253\u5f00\u652f\u4ed8\u5b9d App \u626b\u4e00\u626b"),_react.default.createElement("br",null),_react.default.createElement(Text,{style:{paddingTop:25}},"\u8bf7\u6c42\u7684\u6743\u9650\uff1a\u83b7\u53d6\u5934\u50cf\u6635\u79f0\u7b49\u516c\u5f00\u4fe1\u606f"),_react.default.createElement("br",null),_react.default.createElement(Text,{style:{paddingTop:25}},"\u82e5\u4e8c\u7ef4\u7801\u672a\u52a0\u8f7d\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"),_react.default.createElement("br",null)),_react.default.createElement(_button.default,{type:"primary",block:!0,style:{maxWidth:300},onClick:function(e){return checkProfile()}},"\u6211\u5df2\u5b8c\u6210")):_react.default.createElement("div",{style:{maxWidth:1024}},_react.default.createElement(_steps.default,{current:2},_react.default.createElement(Step,{title:"\u626b\u7801\u7ed1\u5b9a",icon:_react.default.createElement(_icon.default,{component:t})}),_react.default.createElement(Step,{title:"\u786e\u8ba4\u6388\u6743",icon:_react.default.createElement(_icon.default,{type:"schedule"})}),_react.default.createElement(Step,{title:"\u8ba4\u8bc1\u901a\u8fc7",icon:_react.default.createElement(_icon.default,{type:"smile-o"})})),_react.default.createElement(_list.default,{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return _react.default.createElement(_list.default.Item,{actions:e.actions},_react.default.createElement(_list.default.Item.Meta,{title:e.title,description:e.description}))}}))}()}}]),t}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);