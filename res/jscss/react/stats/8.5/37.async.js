(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{MeiU:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("Q1Fi");var _row=_interopRequireDefault(__webpack_require__("7NCv"));__webpack_require__("Hq/V");var _col=_interopRequireDefault(__webpack_require__("fAnr"));__webpack_require__("B40R");var _badge=_interopRequireDefault(__webpack_require__("43HQ"));__webpack_require__("0NfI");var _tooltip=_interopRequireDefault(__webpack_require__("ZHzj"));__webpack_require__("5hX3");var _icon=_interopRequireDefault(__webpack_require__("wjJH")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("08VQ");var _typography=_interopRequireDefault(__webpack_require__("5+Er"));__webpack_require__("jDyY");var _card=_interopRequireDefault(__webpack_require__("q6Oz")),_react=_interopRequireWildcard(__webpack_require__("FQm9")),_locale=__webpack_require__("TJP2"),Meta=_card.default.Meta,Title=_typography.default.Title,Paragraph=_typography.default.Paragraph,Text=_typography.default.Text;delete window.shopItemList;var ServiceList=function(_PureComponent){function ServiceList(e){var t;return(0,_classCallCheck2.default)(this,ServiceList),t=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).call(this,e)),t.state={services:[{}],view:"type_a"},t}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidMount",value:function componentDidMount(){function getItems(){var e=new XMLHttpRequest;e.open("GET","https://promotion.r6sground.cn/shop/",!0),e.send(),e.onreadystatechange=function(){if(e.readyState==XMLHttpRequest.DONE)if(200==e.status){try{window.shopItemList=JSON.parse(e.responseText)}catch(e){window.pageOnNotie("\u5546\u54c1\u6e05\u5355\u5f02\u5e38","\u5237\u65b0\u9875\u9762\u4e5f\u8bb8\u4f1a\u89e3\u51b3\u95ee\u9898")}window.Fthis.setState({services:{Done:(new Date).getTime()}})}else window.pageOnNotie("\u5546\u54c1\u6e05\u5355\u52a0\u8f7d\u5931\u8d25","\u5237\u65b0\u9875\u9762\u4e5f\u8bb8\u4f1a\u89e3\u51b3\u95ee\u9898")}}if(window.Fthis=this,"undefined"!=typeof window.needjs)eval(window.needjs),getItems();else{var xhr=new XMLHttpRequest;xhr.open("GET","https://"+selfDomain+"/r6sg-app/res/need.js/",!0),xhr.send(),xhr.onreadystatechange=function(){xhr.readyState==XMLHttpRequest.DONE&&200==xhr.status&&(window.needjs=xhr.responseText,eval(xhr.responseText),getItems())}}}},{key:"render",value:function(){var e=_react.default.createElement(_icon.default,{type:"loading",style:{fontSize:"32px"}}),t=240,r=35;return window.screen.width<385?(r=15,t=window.screen.width-2*(r+3)):window.screen.width<570&&(r=15,t=(window.screen.width-2*(r+6))/2),"undefined"==typeof window.shopItemList?_react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:35}},e)):_react.default.createElement("div",null,_react.default.createElement("div",{style:{padding:35}},_react.default.createElement(_row.default,{style:{padding:r}},_react.default.createElement(_col.default,{span:24},_react.default.createElement("div",{style:{paddingBottom:35}},_react.default.createElement(_typography.default,null,_react.default.createElement(Title,null,(0,_locale.formatMessage)({id:"\u7cbe\u9009"}))),_react.default.createElement("div",{style:{display:"block"}},Array.from(window.shopItemList).map(function(e,r){var i,a=0,_=9999999,n="";try{for(var c in e.items)e.items[c].price<_&&(_=e.items[c].price),e.items[c].price*e.items[c].primeDiscount<_&&(_=e.items[c].price*e.items[c].primeDiscount),e.items[c].price>a&&(a=e.items[c].price),e.items[c].price*e.items[c].primeDiscount>a&&(a=e.items[c].price*e.items[c].primeDiscount),e.items[c].primeDiscount<1&&(n="\u4f1a\u5458\u4f18\u60e0");i=a==_?"":"\u8d77",_=_.toFixed(2),e.rid.test,e.pic.test,e.description.short.test}catch(e){return}return _react.default.createElement(_badge.default,{count:n},_react.default.createElement("div",{style:{padding:3,height:"auto",display:"inline",float:"left"},onClick:function(){window.Fthis.props.history.push("/Shopitems/items/"+e.rid)}},_react.default.createElement(_card.default,{hoverable:!0,style:{width:t},cover:_react.default.createElement("div",{style:{background:"url("+e.pic+")",backgroundSize:"100%",height:310}})},_react.default.createElement("div",{style:{paddingBottom:3}},_react.default.createElement(_tooltip.default,{placement:"topLeft",title:e.title},_react.default.createElement(Meta,{title:e.title,description:e.description.short}))),_react.default.createElement(Title,{level:3,style:{textAlign:"right"}},"CN\uffe5",_,_react.default.createElement("span",{style:{fontSize:10,fontWeight:300}},i)))))})))))))}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);