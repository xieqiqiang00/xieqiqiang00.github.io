(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{K0Hf:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__("fbTi"),_interopRequireDefault=__webpack_require__("mZ4U");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__("NTAr");var _progress=_interopRequireDefault(__webpack_require__("EbC3"));__webpack_require__("yh/O");var _icon=_interopRequireDefault(__webpack_require__("KzDW")),_classCallCheck2=_interopRequireDefault(__webpack_require__("43Yg")),_createClass2=_interopRequireDefault(__webpack_require__("/tCh")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("scpF")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("O/V9")),_inherits2=_interopRequireDefault(__webpack_require__("8aBX"));__webpack_require__("cW9H");var _modal=_interopRequireDefault(__webpack_require__("VJ/K"));__webpack_require__("NXoX");var _message2=_interopRequireDefault(__webpack_require__("pm8W"));__webpack_require__("nmAM");var _notification2=_interopRequireDefault(__webpack_require__("NZAf")),_react=_interopRequireWildcard(__webpack_require__("i9FB")),_reactDom=_interopRequireDefault(__webpack_require__("+q+N"));window.Fnotification=_notification2.default,window.Fmessage=_message2.default,window.Fconfirm=_modal.default.confirm,window.Ferror=_modal.default.error;var sseNotificationkey="sseNotificationkey";function userCompetitionProCess(e){try{for(var i in console.log(e),"undefined"==typeof window.resulted.Rcompetition&&(window.resulted.Rcompetition={}),"undefined"==typeof window.resulted.RcompetitionCalc&&(window.resulted.RcompetitionCalc={}),e.data)window.resulted.Rcompetition[i]=e.data[i];if("undefined"!=typeof window.userinfo&&"undefined"!=typeof window.userinfo.ProfileID&&window.userinfo.ProfileID==window.resulted.profile_id)for(var o in"undefined"==typeof window.BOXresulted.Rcompetition&&(window.BOXresulted.Rcompetition={}),"undefined"==typeof window.BOXresulted.RcompetitionCalc&&(window.BOXresulted.RcompetitionCalc={}),e.data)window.BOXresulted.RcompetitionCalc[o]=e.data[o],console.log(window.BOXresulted.RcompetitionCalc[o]);for(var t in window.resulted.Rcompetition){window.resulted.RcompetitionCalc[t]={},window.resulted.RcompetitionCalc[t].Star={};var n={won:0,lost:0},r=window.resulted.Rcompetition[t];if(r.star?window.resulted.RcompetitionCalc[t].Star.star=!0:window.resulted.RcompetitionCalc[t].Star.star=!1,"undefined"!=typeof r.ver&&5==r.ver){window.resulted.RcompetitionCalc[t]["Players"]=r.Met,window.resulted.RcompetitionCalc[t]["ope"]={},window.resulted.RcompetitionCalc[t]["weapon"]={},window.resulted.RcompetitionCalc[t]["rank"]={},window.resulted.RcompetitionCalc[t]["info"]={},window.resulted.RcompetitionCalc[t]["info"].ver=5;var a=0,d=0;for(var w in r.opev3){var s=r.opev3[w];if(-1==w.indexOf(":"))var l="own",p=w;else if(w.split(":").length-1==1)l=w.substring(0,w.indexOf(":")),p=l;else if(w.split(":").length-1==2)l=w.substring(0,w.indexOf(":")),p=w.substring(w.indexOf(":")+1,w.indexOf(":",w.indexOf(":")+1));else if(w.split(":").length-1==3)l=w.substring(0,w.indexOf(":")),p=w.substring(w.indexOf(":")+1,w.indexOf(":",w.indexOf(":")+3));if("xp"!=w)if("ap"!=w)if("Gr6sg_\u8ddd\u79bb:infinite"!=w)if("Gr6sg_\u5899\u58c1:infinite"!=w)if("Gr6sg_\u5012\u4e0b:infinite"!=w)if("Gr6sg_\u9632\u5b88\u6467\u6bc1:infinite"!=w)if("Gr6sg_\u7834\u7a97\u800c\u5165:infinite"!=w)if("Gr6sg_\u90e8\u7f72\u9632\u5fa1:infinite"!=w)if("Gr6sg_\u778e\u5b50\u51fb\u6740:infinite"!=w)if("LastMapPlayed"!=w)switch(l){case"operatorpvp_timeplayed":window.arrayCreT("ope",p,t),window.arrayPusher("timeplayed","ope",l,p,t),a+=s;break;case"operatorpvp_kills":window.arrayCreT("ope",p,t),window.arrayPusher("kill","ope",l,p,t);break;case"operatorpvp_death":window.arrayCreT("ope",p,t),window.arrayPusher("death","ope",l,p,t);break;case"operatorpvp_headshot":window.arrayCreT("ope",p,t),window.arrayPusher("hs","ope",l,p,t);break;case"operatorpvp_skills":window.arrayCreT("ope",p,t),window.arrayPusher("skill","ope",l,p,t);break;case"operatorpvp_\u5012\u4e0b":window.arrayCreT("ope",p,t),window.arrayPusher("down","ope",l,p,t);break;case"operatorpvp_melee":window.arrayCreT("ope",p,t),window.arrayPusher("melee","ope",l,p,t);break;case"operatorpvp_ug":window.arrayCreT("ope",p,t),window.arrayPusher("xp","ope",l,p,t),d+=s;break;case"operatorpvp_roundwon":window.arrayCreT("ope",p,t),window.arrayPusher("won","ope",l,p,t),n.won=n.won+s;break;case"operatorpvp_roundlost":window.arrayCreT("ope",p,t),window.arrayPusher("lost","ope",l,p,t),n.lost=n.lost+s;break;case"uweapon_select":window.arrayCreT("weapon",p,t),window.arrayPusher("select","weapon",l,p,t);break;case"uweapon_kill":window.arrayCreT("weapon",p,t),window.arrayPusher("kill","weapon",l,p,t);break;case"uweapon_death":window.arrayCreT("weapon",p,t),window.arrayPusher("death","weapon",l,p,t);break;case"uweapon_head":window.arrayCreT("weapon",p,t),window.arrayPusher("hs","weapon",l,p,t);break;case"uweapon_phit":window.arrayCreT("weapon",p,t),window.arrayPusher("hit","weapon",l,p,t);break;default:}else window.arrayPusher(s,"info","map","",t);else window.arrayPusher(s,"info","blind","",t);else window.arrayPusher(s,"info","bdestory","",t);else window.arrayPusher(s,"info","breakinto","",t);else window.arrayPusher(s,"info","destory","",t);else window.arrayPusher(s,"info","down","",t);else window.arrayPusher(s,"info","wall","",t);else window.arrayPusher(s,"info","distance","",t);else window.arrayPusher(s,"info","ap","",t);else window.arrayPusher(s,"info","xp","",t)}for(var c in window.arrayPusher(a,"info","timeCount","",t),window.arrayPusher(d,"info","xpInAll","",t),window.resulted.RcompetitionCalc[t].won=n.won,window.resulted.RcompetitionCalc[t].lost=n.lost,r.mmr)window.arrayPusher(r.mmr[c],"rank",c,"",t);for(var u in r)switch(u){case"CompetitionType":if(window.arrayPusher(r[u],"info","mode","",t),"plantbomb"==r[u])var f="\u70b8\u5f39";else if("rescuehostage"==r[u])f="\u4eba\u8d28";else if("securearea"==r[u])f="\u4fdd\u5168";else f="\u672a\u77e5";window.arrayPusher(f,"info","mode2","",t);break;case"Ctype":window.arrayPusher(r[u],"info","type","",t);break;case"reporttpye":window.arrayPusher(r[u],"info","type_old","",t);break;case"result":window.arrayPusher(r[u],"info",u,"",t);break;case"kill":window.arrayPusher(r[u],"info",u,"",t);break;case"death":window.arrayPusher(r[u],"info",u,"",t);break;case"assist":window.arrayPusher(r[u],"info",u,"",t);break;case"resultid":window.arrayPusher(r[u],"info",u,"",t),window.arrayPusher(String(r[u].substring(r[u].indexOf("/")+1)),"info","resultCid","tagId",t);break;case"time":window.arrayPusher(r.time.Natural,"info",u,"",t),window.arrayPusher(r.time.Unix,"info","time_unix","",t);break}var m="",C="",y="",h="";if(m=window.resulted.RcompetitionCalc[t]["info"],m="cas"==m.type?"\u4f11\u95f2":"rank"==m.type?"\u6392\u4f4d":"CA"==m.type_old?"\u4f11\u95f2":"RA"==m.type_old?"\u6392\u4f4d":"TH"==m.type_old?"\u730e\u6050":"CG"==m.type_old?"\u4f11\u95f2":"RG"==m.type_old?"\u6392\u4f4d":"\u672a\u77e5",window.resulted.RcompetitionCalc[t]["info"]["type2"]=m,m=window.resulted.RcompetitionCalc[t]["rank"],"\u6392\u4f4d"!=window.resulted.RcompetitionCalc[t]["info"]["type2"])C="0",y="0",h="\u672a\u77e5";else{var g=Math.max(parseInt(Math.abs(m.apac_c)),parseInt(Math.abs(m.emea_c)),parseInt(Math.abs(m.ncsa_c)));g==parseInt(Math.abs(m.emea_c))&&(C="\u4e2d\u4e1c",y=parseInt(m.emea),h=parseInt(m.emea_c)),g==parseInt(Math.abs(m.ncsa_c))&&(C="\u7f8e\u6d32",y=parseInt(m.ncsa),h=parseInt(m.ncsa_c)),g==parseInt(Math.abs(m.apac_c))&&(C="\u4e9a\u592a",y=parseInt(m.apac),h=parseInt(m.apac_c))}window.resulted.RcompetitionCalc[t]["rank2"]={},window.resulted.RcompetitionCalc[t]["rank2"].org=C,window.resulted.RcompetitionCalc[t]["rank2"].mmr=y,window.resulted.RcompetitionCalc[t]["rank2"].mmrc=h,"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].kill&&(window.resulted.RcompetitionCalc[t]["info"].kill=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].death&&(window.resulted.RcompetitionCalc[t]["info"].death=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].assist&&(window.resulted.RcompetitionCalc[t]["info"].assist=0),"undefined"==typeof window.resulted.RcompetitionCalc[t].won&&(window.resulted.RcompetitionCalc[t].won=0),"undefined"==typeof window.resulted.RcompetitionCalc[t].lost&&(window.resulted.RcompetitionCalc[t].lost=0),window.resulted.RcompetitionCalc[t].round=window.resulted.RcompetitionCalc[t].won+window.resulted.RcompetitionCalc[t].lost,("undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].xp||window.resulted.RcompetitionCalc[t]["info"].xp<1)&&(window.resulted.RcompetitionCalc[t]["info"].xp=0);var I=void 0;window.resulted.RcompetitionCalc[t]["info"].score=parseInt((window.resulted.RcompetitionCalc[t]["info"].xp-100*window.resulted.RcompetitionCalc[t].won-0*window.resulted.RcompetitionCalc[t].lost-I)/window.resulted.RcompetitionCalc[t].round);window.resulted.RcompetitionCalc[t].round;window.resulted.RcompetitionCalc[t]["info"].score=window.resulted.RcompetitionCalc[t].info.xpInAll,"unknow"==window.resulted.RcompetitionCalc[t]["info"].mode?window.resulted.RcompetitionCalc[t]["info"].Flyscore=0:(window.resulted.RcompetitionCalc[t]["info"].Flyscore=(window.resulted.RcompetitionCalc[t].info.xpInAll/window.resulted.RcompetitionCalc[t].round/2500*100).toFixed(0),"NaN"==String(window.resulted.RcompetitionCalc[t]["info"].Flyscore)&&(window.resulted.RcompetitionCalc[t]["info"].Flyscore=0)),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].ap&&(window.resulted.RcompetitionCalc[t]["info"].ap=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].timeCount&&(window.resulted.RcompetitionCalc[t]["info"].timeCount=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].distance&&(window.resulted.RcompetitionCalc[t]["info"].distance=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].wall&&(window.resulted.RcompetitionCalc[t]["info"].wall=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].down&&(window.resulted.RcompetitionCalc[t]["info"].down=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].destory&&(window.resulted.RcompetitionCalc[t]["info"].destory=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].breakinto&&(window.resulted.RcompetitionCalc[t]["info"].breakinto=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].bdestory&&(window.resulted.RcompetitionCalc[t]["info"].bdestory=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].blind&&(window.resulted.RcompetitionCalc[t]["info"].blind=0),window.resulted.RcompetitionCalc[t]["info"].devote=window.resulted.RcompetitionCalc[t]["info"].xp-100*window.resulted.RcompetitionCalc[t]["info"].kill,window.resulted.RcompetitionCalc[t]["info"].tag=[],"giveup"!=window.resulted.RcompetitionCalc[t]["info"].result&&("undefined"!=typeof window.resulted.Rcompetition[t].opev3&&"undefined"!=typeof window.resulted.Rcompetition[t].opev3["KillsInPvp.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&"number"==typeof window.resulted.Rcompetition[t].opev3["KillsInPvp.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&window.resulted.RcompetitionCalc[t]["info"].tag.push({key:window.resulted.Rcompetition[t].opev3["KillsInPvp.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]+"\u6b21\u7cbe\u5f69\u7684\u51fb\u6740",color:"magenta"}),"undefined"!=typeof window.resulted.Rcompetition[t].opev3&&"undefined"!=typeof window.resulted.Rcompetition[t].opev3["QuantityMatchPlayedInPvp.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&"number"==typeof window.resulted.Rcompetition[t].opev3["QuantityMatchPlayedInPvp.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&window.resulted.RcompetitionCalc[t]["info"].tag.push({key:"\u5b9e\u529b\u5f3a\u52b2\u7684\u5bf9\u624b",color:"red"}),"undefined"!=typeof window.resulted.Rcompetition[t].opev3&&"undefined"!=typeof window.resulted.Rcompetition[t].opev3["RoundPlayedByPartySize.PARTYSIZE.5.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&"number"==typeof window.resulted.Rcompetition[t].opev3["RoundPlayedByPartySize.PARTYSIZE.5.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&window.resulted.RcompetitionCalc[t]["info"].tag.push({key:"\u4e94\u9ed1\u8f66",color:"volcano"}),"undefined"!=typeof window.resulted.Rcompetition[t].opev3&&"undefined"!=typeof window.resulted.Rcompetition[t].opev3["RoundPlayedByPartySize.PARTYSIZE.5.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&"number"==typeof window.resulted.Rcompetition[t].opev3["RoundPlayedByPartySize.PARTYSIZE.5.GameModeHighLevelContext.MATCHMAKING_PVP_HIGHLEVEL"]&&window.resulted.RcompetitionCalc[t]["info"].tag.push({key:"\u4e94\u9ed1\u8f66",color:"orange"}),0!=window.resulted.Rcompetition[t].ap&&window.resulted.RcompetitionCalc[t]["info"].tag.push({key:"\u610f\u5916\u6536\u83b7",color:"gold"}),"undefined"!=typeof window.resulted.Rcompetition[t].opev3&&"undefined"!=typeof window.resulted.Rcompetition[t].opev3["Gr6sg_\u8ddd\u79bb:infinite"]&&"number"==typeof window.resulted.Rcompetition[t].opev3["Gr6sg_\u8ddd\u79bb:infinite"]&&window.resulted.Rcompetition[t].opev3["Gr6sg_\u8ddd\u79bb:infinite"]>2e3&&window.resulted.RcompetitionCalc[t]["info"].tag.push({key:"\u957f\u8dd1\u51a0\u519b",color:"lime"}))}else{for(var R in window.resulted.RcompetitionCalc[t]["ope"]={},window.resulted.RcompetitionCalc[t]["weapon"]={},window.resulted.RcompetitionCalc[t]["rank"]={},window.resulted.RcompetitionCalc[t]["info"]={},window.resulted.RcompetitionCalc[t]["info"].ver=3,window.resulted.RcompetitionCalc[t]["ty"]=r,r)switch(R){case"resultid":window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info",R,"tagId",t),window.arrayPusher(String(r[R].substring(r[R].indexOf("/")+1)),"info","resultCid","tagId",t),"won"==r[R]?window.resulted.RcompetitionCalc[t].info["result2"]="\u80dc\u5229":"lost"==r[R]?window.resulted.RcompetitionCalc[t].info["result2"]="\u6218\u8d25":window.resulted.RcompetitionCalc[t].info["result2"]="\u672a\u77e5",window.arrayPusher(f,"info","mode2","",t);break;case"result":window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info",R,"tagId",t);break;case"time":window.arrayCreT("info",p,t),window.arrayPusher(r[R].Natural,"info",R,"tagId",t);break;case"death":window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info",R,"tagId",t);break;case"kill":window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info",R,"tagId",t);break;case"CompetitionType":if(window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info","mode","tagId",t),"plantbomb"==r[R])f="\u70b8\u5f39";else if("rescuehostage"==r[R])f="\u4eba\u8d28";else if("securearea"==r[R])f="\u4fdd\u5168";else f="\u672a\u77e5";window.arrayPusher(f,"info","mode2","",t);break;case"reporttpye":window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info","type_old","tagId",t);break;case"Ctype":window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info","type","tagId",t);break;case"xp":window.arrayCreT("info",p,t),window.arrayPusher(r[R],"info","xp","tagId",t);break;default:window.arrayCreT("info",p,t),window.resulted.RcompetitionCalc[t].info[R]=r[R]}a=0;for(var _ in r.operator)for(var v in p=window.openametoid(r.operator[_].name),r.operator[_])switch("object"==typeof r.operator[_][v]&&(r.operator[_][v]=0),v){case"kill":window.arrayCreT("ope",p,t),window.arrayPusher("kill","ope",v,p,t,!0,_);break;case"death":window.arrayCreT("ope",p,t),window.arrayPusher("death","ope",v,p,t,!0,_);break;case"down":window.arrayCreT("ope",p,t),window.arrayPusher("down","ope",v,p,t,!0,_);break;case"head":window.arrayCreT("ope",p,t),window.arrayPusher("head","ope",v,p,t,!0,_);break;case"knife":window.arrayCreT("ope",p,t),window.arrayPusher("knife","ope",v,p,t,!0,_);break;case"skill":window.arrayCreT("ope",p,t),window.arrayPusher("skill","ope",v,p,t,!0,_);break;case"timeplayed":window.arrayCreT("ope",p,t),window.arrayPusher("time","ope",v,p,t,!0,_),a+=r.operator[_].time;break;case"xp":window.arrayCreT("ope",p,t),window.arrayPusher("xp","ope",v,p,t,!0,_);break}if(window.arrayPusher(a,"info","timeCount","",t),"undefined"!=typeof r.mmr)for(var b in r.mmr)window.arrayPusher(r.mmr[b],"rank",b,"tagId",t);var k="",P="",L="",T="";if(k=window.resulted.RcompetitionCalc[t]["info"],k="cas"==k.type?"\u4f11\u95f2":"rank"==k.type?"\u6392\u4f4d":"CA"==k.type_old?"\u4f11\u95f2":"RA"==k.type_old?"\u6392\u4f4d":"TH"==k.type_old?"\u730e\u6050":"CG"==k.type_old?"\u4f11\u95f2":"RG"==k.type_old?"\u6392\u4f4d":"\u672a\u77e5",window.resulted.RcompetitionCalc[t]["info"]["type2"]=k,k=window.resulted.RcompetitionCalc[t]["rank"],"\u6392\u4f4d"!=window.resulted.RcompetitionCalc[t]["info"]["type2"])P="0",L="0",T="\u672a\u77e5";else{var x=Math.max(parseInt(Math.abs(k.apac_c)),parseInt(Math.abs(k.emea_c)),parseInt(Math.abs(k.ncsa_c)));x==parseInt(Math.abs(k.emea_c))&&(P="\u6b27\u4e2d",L=parseInt(k.emea),T=parseInt(k.emea_c)),x==parseInt(Math.abs(k.ncsa_c))&&(P="\u7f8e\u6d32",L=parseInt(k.ncsa),T=parseInt(k.ncsa_c)),x==parseInt(Math.abs(k.apac_c))&&(P="\u4e9a\u592a",L=parseInt(k.apac),T=parseInt(k.apac_c))}window.resulted.RcompetitionCalc[t]["rank2"]={},window.resulted.RcompetitionCalc[t]["rank2"].org=P,window.resulted.RcompetitionCalc[t]["rank2"].mmr=L,window.resulted.RcompetitionCalc[t]["rank2"].mmrc=T,"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].kill&&(window.resulted.RcompetitionCalc[t]["info"].kill=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].death&&(window.resulted.RcompetitionCalc[t]["info"].death=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].assist&&(window.resulted.RcompetitionCalc[t]["info"].assist=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].xp&&(window.resulted.RcompetitionCalc[t]["info"].xp=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].ap?window.resulted.RcompetitionCalc[t]["info"].ap=0:window.resulted.RcompetitionCalc[t]["info"].ap?window.resulted.RcompetitionCalc[t]["info"].ap=1:window.resulted.RcompetitionCalc[t]["info"].ap=0,"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].timeCount&&(window.resulted.RcompetitionCalc[t]["info"].timeCount=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].distance&&(window.resulted.RcompetitionCalc[t]["info"].distance=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].wall&&(window.resulted.RcompetitionCalc[t]["info"].wall=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].down&&(window.resulted.RcompetitionCalc[t]["info"].down=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].destory&&(window.resulted.RcompetitionCalc[t]["info"].destory=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].breakinto&&(window.resulted.RcompetitionCalc[t]["info"].breakinto=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].bdestory&&(window.resulted.RcompetitionCalc[t]["info"].bdestory=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].blind&&(window.resulted.RcompetitionCalc[t]["info"].blind=0),"undefined"==typeof window.resulted.RcompetitionCalc[t]["info"].blind&&(window.resulted.RcompetitionCalc[t]["info"].blind=0),window.resulted.RcompetitionCalc[t]["info"].devote=window.resulted.RcompetitionCalc[t]["info"].xp-100*window.resulted.RcompetitionCalc[t]["info"].kill,window.resulted.RcompetitionCalc[t]["info"].devote<0&&(window.resulted.RcompetitionCalc[t]["info"].devote=0),window.resulted.RcompetitionCalc[t]["info"].Flyscore=0,window.resulted.RcompetitionCalc[t]["info"].score=0}}"undefined"!=typeof window.userinfo&&"undefined"!=typeof window.userinfo.ProfileID&&window.userinfo.ProfileID==window.resulted.profile_id&&(window.BOXresulted.RcompetitionCalc=window.resulted.RcompetitionCalc)}catch(e){console.warn(e)}}function jsonProCess(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}",i=JSON.parse(window.Base64.decode("eyAicmFua21tciI6ICIhMSQiLCAib3BlcmF0b3JwdnAiOiAiITIkIiwgIndlYXBvbnB2cCI6ICIhMyQiLCAiZ2FkZ2V0cHZwIjogIiE0JCIsICJpbmZpbml0ZSI6ICIhNSQiLCAia2lsbCI6ICIhNiQiLCAiZGVhdGgiOiAiITckIiwgIndvbiI6ICIhOCQiLCAibG9zdCI6ICIhOSQiLCAicm91bmQiOiAiITEwJCIsICJjaG9zZW4iOiAiITExJCIsICJ0b3RhbHhwIjogIiExMiQiLCAiZGJubyI6ICIhMTMkIiwgImhlYWRzaG90IjogIiExNCQiLCAiZ2VuZXJhbHB2cCI6ICIhMTUkIiwgImJ1bGxldGhpdCI6ICIhMTYkIiwgInBsYW50Ym9tYnB2cCI6ICIhMTckIiwgIndlYXBvbnR5cGVwdnAiOiAiITE4JCIsICJtYXRjaCI6ICIhMTkkIiwgImRibm9hc3Npc3RzIjogIiEyMCQiLCAibG9vdGJveF9wcm9iYWJpbGl0eSI6ICIhMjEkIiwgInBhc3Rfc2Vhc29ucyI6ICIhMjIkIiwgImFiYW5kb25zIjogIiEyMyQiLCAibG9zc2VzIjogIiEyNCQiLCAid2lucyI6ICIhMjUkIiwgInJhbmsiOiAiITI2JCIsICJuY3NhIjogIiEyNyQiLCAiYXBhYyI6ICIhMjgkIiwgImVtZWEiOiAiITI5JCIsICJtYXhfbW1yIjogIiEzMCQiLCAidGltZXBsYXllZCI6ICIhMzEkIiwgInBsYXllZCI6ICIhMzIkIiwgImdhZGdldCI6ICIhMzMkIiwgInJlaW5mb3JjZW1lbnQiOiAiITM0JCIsICJkZXN0cm95IjogIiEzNSQiLCAiZGVwbG95IjogIiEzNiQiLCAidXBkYXRlIjogIiEzNyQiLCAid2VhcCI6ICIhMzgkIiwgImZpcmVkIjogIiEzOSQiLCAib3BlIjogIiE0MCQiLCAiZGlzdGFuY2V0cmF2ZWxsZWQiOiAiITQxJCIsICJTZXJ2ZXJ0aW1lIjogIiE0MiQiLCAic2VydmVydGltZSI6ICIhNDMkIiwgInJlcG9ydFZlciI6ICIhNDQkIiwgIkNvbXBldGl0aW9uVHlwZSI6ICIhNDUkIiwgImZhbHNlIjogIiE0NiQiLCAidHJ1ZSI6ICIhNDckIiB9"));for(var o in i){var t=new RegExp(i[o].replace("$","\\$"),"g");e=e.replace(t,o)}return e}var userDataLoadingState=0,userDataLoadingStateIsActive="active",ServiceList=function(_PureComponent){function ServiceList(){return(0,_classCallCheck2.default)(this,ServiceList),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ServiceList).apply(this,arguments))}return(0,_inherits2.default)(ServiceList,_PureComponent),(0,_createClass2.default)(ServiceList,[{key:"componentDidCatch",value:function(e,i){console.debug(e),console.debug(i),this.setState({hasError:!0})}},{key:"render",value:function(){_react.default.createElement(_icon.default,{type:"loading"});return _react.default.createElement("span",null,_react.default.createElement("div",{id:"loading",style:{textAlign:"center",width:"100%",height:"100%",margin:"auto",position:"fixed",top:0,left:0,right:0,bottom:0}},_react.default.createElement("div",{style:{position:"absolute",width:500,height:300,top:"50%",left:"50%",marginLeft:-250,marginTop:-150,textAlign:"center",overflow:"hidden"}},_react.default.createElement("div",{id:"LCname",style:{position:"absolute",top:0,width:500,height:300,opacity:1}},_react.default.createElement("img",{src:"https://r6sground.cn/r6-db-info/user-info-search/name.png"})),_react.default.createElement("div",{id:"LCname-cover",style:{position:"absolute",top:0,width:500,height:300,opacity:0}},_react.default.createElement("img",{src:"https://r6sground.cn/r6-db-info/user-info-search/name-cover.png"})),_react.default.createElement("div",{id:"LCname-cover-cover",style:{position:"absolute",top:0,width:500,height:300,opacity:1,display:"none"}},_react.default.createElement("img",{src:"https://r6sground.cn/r6-db-info/user-info-search/name-cover-cover.png"}))),_react.default.createElement("div",{id:"loading-info",style:{position:"absolute",width:500,height:36,top:"50%",left:"50%",marginLeft:-250,marginTop:-200,textAlign:"center",overflow:"hidden",lineHeight:"36px",fontSize:"36px"}},"\u8fde\u63a5\u5230\u80b2\u78a7...")),_react.default.createElement("div",{id:"loading-info2",style:{position:"translate(0px,400px)",opacity:0}},_react.default.createElement("div",{id:"loading-info-username",style:{position:"absolute",width:240,height:42,top:"50%",left:"50%",marginLeft:-120,marginTop:-200,textAlign:"center",overflow:"hidden",lineHeight:"42px",fontSize:"32px"}},"\u672a\u77e5\u7528\u6237\u540d"),_react.default.createElement("div",{style:{position:"absolute",width:240,height:350,top:"50%",left:"50%",marginLeft:-120,marginTop:-200,textAlign:"center",overflow:"hidden",lineHeight:"36px",fontSize:"36px"}},_react.default.createElement("img",{id:"loading-info-userpic",style:{width:160,marginTop:60,boxShadow:"4px 5px 15px 0px #888888"},src:""})),_react.default.createElement("div",{id:"loading-info-userpic",style:{position:"absolute",width:240,height:350,top:"50%",left:"50%",marginLeft:-120,marginTop:50,textAlign:"center",overflow:"hidden",lineHeight:"26px",fontSize:"26px"}},_react.default.createElement(_progress.default,{percent:userDataLoadingState,status:userDataLoadingStateIsActive}))))}},{key:"componentDidMount",value:function componentDidMount(){window.Fthis=this,"undefined"==typeof window.temp&&(window.temp={}),window.arrayCreT=function(e,i,o){"ope"==e?"undefined"==typeof window.resulted.RcompetitionCalc[o]["ope"][i]&&(window.resulted.RcompetitionCalc[o]["ope"][i]={}):"weapon"==e?"undefined"==typeof window.resulted.RcompetitionCalc[o]["weapon"][i]&&(window.resulted.RcompetitionCalc[o]["weapon"][i]={}):"rank"==e&&"undefined"==typeof window.resulted.RcompetitionCalc[o]["rank"][i]&&(window.resulted.RcompetitionCalc[o]["rank"][i]={})},window.arrayPusher=function(e,i,o,t,n){var r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=arguments.length>6?arguments[6]:void 0;if(r)"ope"==i&&("undefined"==typeof window.resulted.RcompetitionCalc[n][i][t].name&&(window.resulted.RcompetitionCalc[n][i][t].name=window.opeidtoname(t)),window.resulted.RcompetitionCalc[n][i][t][e]=window.resulted.Rcompetition[n].operator[a][o]);else if("undefined"!=typeof window.resulted.Rcompetition[n].opev3&&"null"!=typeof window.resulted.Rcompetition[n].opev3&&"null"!=String(window.resulted.Rcompetition[n].opev3)&&"undefined"==typeof window.resulted.Rcompetition[n].opev3[o+":"+t+":infinite"]&&"rank"!=i&&"info"!=i)window.resulted.RcompetitionCalc[n][i][t][e]=0;else{if("ope"!=i&&"weapon"!=i)return"rank"==i||"info"==i?("undefined"==typeof window.resulted.RcompetitionCalc[n][i]&&(window.resulted.RcompetitionCalc[n][i]={}),void(window.resulted.RcompetitionCalc[n][i][o]=e)):void 0;"undefined"==typeof window.resulted.RcompetitionCalc[n][i][t].name&&("weapon"==i?window.resulted.RcompetitionCalc[n][i][t].name=window.weapidtoname(t):"ope"==i&&(window.resulted.RcompetitionCalc[n][i][t].name=window.opeidtoname(t))),window.resulted.RcompetitionCalc[n][i][t][e]=window.resulted.Rcompetition[n].opev3[o+":"+t+":infinite"]}},window.dataget=function(e){var i=new EventSource(RrequsetURL,{withCredentials:!0});i.onerror=function(e){2==i.readyState?pageOnError("\u60a8\u4e0e\u516d\u53f7\u6218\u573a\u670d\u52a1\u5668\u7684\u8fde\u63a5\u610f\u5916\u4e2d\u65ad\uff0c\u5e76\u4e14\u6d4f\u89c8\u5668\u8868\u793a\u5df2\u7ecf\u653e\u5f03\u91cd\u8bd5\u3002\u60a8\u53ef\u4ee5\u5237\u65b0\u7f51\u9875\u6765\u91cd\u8bd5\u3002",!1):window.Fnotification["info"]({key:sseNotificationkey,message:"\u73b0\u5728\u6b63\u5728\u91cd\u65b0\u8fde\u63a5",description:"\u60a8\u4e0e\u516d\u53f7\u6218\u573a\u670d\u52a1\u5668\u7684\u8fde\u63a5\u610f\u5916\u4e2d\u65ad\uff0c\u6d4f\u89c8\u5668\u6b63\u5728\u5c1d\u8bd5\u91cd\u8fde\uff0c\u5982\u679c\u95ee\u9898\u6301\u7eed\u5b58\u5728\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u3002"})},i.onopen=function(e){try{var i=parseInt(20+parseInt(10*Math.random()));i<userDataLoadingState&&(i=userDataLoadingState),userDataLoadingState=i,window.resulted.rankState="loading",window.resulted.rankStateTime=(new Date).getTime(),window.isFreshing=!0}catch(e){}},i.onmessage=function(e){var o;try{o=jsonProCess(e.data),console.log(o),o=JSON.parse(o),console.log(o)}catch(e){return}if("error"==o.key&&(500==o.data.httpCode?pageOnError(o.data.message,!1):pageOnNotie("\u9047\u5230\u9519\u8bef:"+o.data.errorCode,o.data.message)),"userMinData"==o.key)try{var t=parseInt(60+parseInt(10*Math.random()));t<userDataLoadingState&&(t=userDataLoadingState),userDataLoadingState=t,window.Fthis.setState({services:{Done:(new Date).getTime()}}),document.getElementById("loading").style.opacity=0,document.getElementById("loading-info-userpic").src=window.ProfileIdtoAvatarImg(o.data.useridMain,"full"),document.getElementById("loading-info-username").innerHTML=o.data.UsernameOnPlatform,document.getElementById("loading-info2").style.opacity=1}catch(e){}if("userMainData"==o.key)try{var n=parseInt(88+parseInt(10*Math.random()));n<userDataLoadingState&&(n=userDataLoadingState),userDataLoadingState=n;try{var r=o.data;if("undefined"!=typeof r.denied&&r.denied)return void pageOnError("\u8be5\u7528\u6237\u7981\u6b62\u4ed6\u4eba\u67e5\u8be2\u4ed6\u7684\u6218\u7ee9",!1);if("undefined"!=typeof r.error||"undefined"!=typeof r.errorContext)return void("R5SG2.UserInfoSearch.Bridge-2001"==r.errorCode?("undefined"==typeof window.requestContent&&0==window.requestContent&&"undefined"==window.requestContent||window.refreshProfile(window.requestContent,!0),pageOnError(r.message,!0)):pageOnError(r.message,!1))}catch(e){return PROmotionOnError(e),void pageOnError("\u53d1\u751f\u672a\u77e5\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u7ad9\u957f\u3002",!1)}window.resulted={};var a=DoGetAndDone(o.data,!0);window.resulted=a,window.resulted.referrer=window.temp.\u9875\u9762\u8bf7\u6c42\u65b9\u5f0f,"undefined"!=typeof window.userinfo&&"undefined"!=typeof window.userinfo.ProfileID&&window.userinfo.ProfileID==window.resulted.profile_id&&(window.BOXresulted={},window.BOXresulted=a)}catch(e){}if("userComp1"==o.key&&(userDataLoadingState=100,userDataLoadingStateIsActive=0,window.Fthis.setState({services:{Done:(new Date).getTime()}}),window.resulted["userComp1"]=o.data,setTimeout(function(){"undefined"==typeof window.LastPage||"stats"!=window.LastPage.substring(0,5).toLowerCase()&&"App/R6BOX/main"!=window.LastPage?-1!==window.navigator.userAgent.indexOf("r6sg-api")?window.Fthis.props.history.replace("/Home"):window.Fthis.props.history.replace("/Stats/Peek/"+window.resulted.profile_id):"undefined"!=typeof window.LastPageT&&"stats/competition/report"==window.LastPageT.toLowerCase()&&"undefined"!=typeof window.LastPageReportCid?(delete window.LastPageT,delete window.LastPageReportCid,window.Fthis.props.history.replace("/Stats/Competition/"+window.resulted.profile_id+"/"+window.LastPageReportCid)):"stats"==window.LastPage.substring(0,5).toLowerCase()?window.Fthis.props.history.replace("/"+window.LastPage+"/"+window.resulted.profile_id):window.Fthis.props.history.replace("/"+window.LastPage),window.Fthis.setState({services:{Done:(new Date).getTime()}})},300)),"userComp3"==o.key&&(userCompetitionProCess(o),console.log(o),window.Fthis.setState({services:{Done:(new Date).getTime()}})),"userComp100"==o.key&&(userCompetitionProCess(o),window.Fthis.setState({services:{Done:(new Date).getTime()}})),"CloseConnection"==o.key&&(i.close(),userDataLoadingState=100,userDataLoadingStateIsActive=0,window.Fthis.setState({services:{Done:(new Date).getTime()}})),"userRankData"==o.key)try{window.resulted.rank=o.data,window.resulted.rankState="done",window.Fthis.setState({services:{Done:(new Date).getTime()}})}catch(e){window.resulted.rankState="fail",window.pageOnNotie("\u6392\u4f4d\u4fe1\u606f\u5904\u7406\u5931\u8d25","\u201c\u6392\u4f4d\u6570\u636e\u201d\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5237\u65b0\u9875\u9762\u6765\u91cd\u8bd5\u3002","error")}if("userDataFresh"==o.key)try{if(window.isFreshing=!1,1==o.data.freshed){var d={},w={};for(var s in window.resulted.Rcompetition)d["r"+(Number(s.replace("r",""))+1)]=window.resulted.Rcompetition[s];for(var l in window.resulted.Rcompetition=d,window.resulted.RcompetitionCalc)w["r"+(Number(l.replace("r",""))+1)]=window.resulted.RcompetitionCalc[l];window.resulted.RcompetitionCalc=w;var p={data:{}};p.data.r1=o.data.content,userCompetitionProCess(p),window.resulted["userComp1"]=o.data}window.Fthis.setState({services:{Done:(new Date).getTime()}})}catch(e){window.resulted.rankState="fail",window.pageOnNotie("\u5237\u65b0\u6570\u636e\u65f6\u51fa\u9519","\u6d4f\u89c8\u5668\u65e0\u6cd5\u7406\u89e3\u670d\u52a1\u5668\u8fd4\u56de\u7684\u5185\u5bb9","error")}}};try{var loadingmagSTOPornot=!1,cavloc=0,cavCycleTimes=0;window.loadingmag=function(){cavCycleTimes+=1,1620<cavloc&&(cavloc=0),document.getElementById("LCname").style.top="-"+cavloc+"px",document.getElementById("LCname-cover").style.top="-"+cavloc+"px",1800>cavCycleTimes?(cavloc+=cavCycleTimes/4,document.getElementById("LCname").style.opacity=1-cavCycleTimes/180,document.getElementById("LCname-cover").style.opacity=cavCycleTimes/180):cavloc+=30},window.loadingmagSTOP=function(){setTimeout('document.getElementById("messagebox").style.display="none";',5e3);clearInterval(window.cavCycle)},window.cavCycle=setInterval("loadingmag()",16)}catch(e){}function getParam(e){var i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(i);return null!=o?unescape(o[2]):"null"}window.temp.\u9875\u9762\u8bf7\u6c42\u65b9\u5f0f=null;var profileid=getParam("profileid");"undefined"==typeof profileid||0!=profileid&&"0"!=profileid&&"undefined"!=profileid&&36==profileid.length&&""!=profileid||(profileid="undefined"!=typeof window.userinfo&&"undefined"!=typeof window.userinfo.ProfileID&&36==window.userinfo.ProfileID.length?window.userinfo.ProfileID:"f1b010e1-d441-47b1-be1f-cea6e2f22e19");var username=getParam("username");if("undefined"==typeof username||0!=username&&"0"!=username&&"undefined"!=username&&""!=username||(profileid="undefined"!=typeof window.userinfo&&"undefined"!=typeof window.userinfo.ProfileID&&36==window.userinfo.ProfileID.length?window.userinfo.ProfileID:"f1b010e1-d441-47b1-be1f-cea6e2f22e19",window.temp.\u9875\u9762\u8bf7\u6c42\u65b9\u5f0f="profileid"),"null"!=getParam("profileid")||"profileid"==window.temp.\u9875\u9762\u8bf7\u6c42\u65b9\u5f0f){window.requestContent=profileid;var RrequsetURL="https://global.r6sground.cn/stats/"+profileid.replace(/\./g,"@")+"/data";window.temp.\u9875\u9762\u8bf7\u6c42\u65b9\u5f0f="profileid"}else if("null"!=getParam("username")){window.requestContent=username;var platform=getParam("platform");if(2==platform||3==platform)var RrequsetURL="https://global.r6sground.cn/stats/"+username.replace(/\./g,"@")+"/data/p"+platform;else var RrequsetURL="https://global.r6sground.cn/stats/"+username.replace(/\./g,"@")+"/data";window.temp.\u9875\u9762\u8bf7\u6c42\u65b9\u5f0f="username"}else window.Fthis.props.history.replace("/Stats/error?error=\u4f60\u7684\u8bf7\u6c42\u7f3a\u5c11\u6216\u5305\u542b\u4e86\u9519\u8bef\u7684\u53c2\u6570");if("undefined"!=typeof window.needjs)eval(window.needjs),window.dataget(profileid);else{var xhr=new XMLHttpRequest;xhr.open("GET","https://r6sground.cn/r6sg-app/res/need.js/",!1),xhr.send(),xhr.status>=200&&xhr.status<300?(window.needjs=xhr.responseText,eval(xhr.responseText),window.dataget(profileid)):window.Fthis.props.history.replace("/Stats/error?error=\u8bf7\u6c42\u6838\u5fc3\u6587\u4ef6\u65f6\u9047\u5230\u95ee\u9898")}return _react.default.createElement("div",null,loading)}},{key:"componentWillUnmount",value:function(){clearInterval(window.cavCycle)}}]),ServiceList}(_react.PureComponent),_default=ServiceList;exports.default=_default}}]);