"use strict";(self.webpackChunklabor_analgesia_frontend=self.webpackChunklabor_analgesia_frontend||[]).push([[867],{45984:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(50369),l=t(57945),i=t(12270),o=t(5261),r=t(93379),s=t.n(r),c=t(7795),d=t.n(c),u=t(90569),p=t.n(u),m=t(3565),g=t.n(m),f=t(19216),b=t.n(f),h=t(44589),v=t.n(h),y=t(85554),P={};P.styleTagTransform=v(),P.setAttributes=g(),P.insert=p().bind(null,"head"),P.domAPI=d(),P.insertStyleElement=b(),s()(y.Z,P),y.Z&&y.Z.locals&&y.Z.locals;var Z=function(e){var a=e.isFirst,t=e.isLast,r=e.onPrev,s=e.onNext;return n.createElement("div",{className:"step-action"},a?null:n.createElement(l.default,{className:"previous-button",value:"Previous",iconCls:"fal fa-arrow-left",onClick:r}),n.createElement(i.default,{className:"continue-button",theme:o.default.SUCCESS,value:t?"DONE":"SAVE and CONTINUE",onClick:s}))};Z.defaultProps={isFirst:!1,isLast:!1};const k=Z},54908:(e,a,t)=>{t.d(a,{Z:()=>B});var n=t(87462),l=t(4942),i=t(29439),o=t(45987),r=t(50369),s=t(10072),c=t(64381),d=t.n(c),u=t(23279),p=t.n(u),m=t(93379),g=t.n(m),f=t(7795),b=t.n(f),h=t(90569),v=t.n(h),y=t(3565),P=t.n(y),Z=t(19216),k=t.n(Z),E=t(44589),S=t.n(E),R=t(49849),A={};A.styleTagTransform=S(),A.setAttributes=P(),A.insert=v().bind(null,"head"),A.domAPI=b(),A.insertStyleElement=k(),g()(R.Z,A),R.Z&&R.Z.locals&&R.Z.locals;var C=["children","className","loading"],w=function(e){var a=e.children,t=e.className,c=e.loading,u=(0,o.Z)(e,C),m=(0,r.useState)(!0),g=(0,i.Z)(m,2),f=g[0],b=g[1],h=(0,r.useCallback)((function(){b(!0)}),[]),v=(0,r.useCallback)((function(){b(!1)}),[]),y=(0,r.useMemo)((function(){return p()(v,150)}),[v]);return(0,r.useEffect)((function(){!f&&c?h():!c&&f&&y()}),[c,f,h,y]),f?r.createElement(s.default,(0,n.Z)({},u,{className:d()("module-loading",(0,l.Z)({},t,t))})):a};w.defaultProps={size:s.default.Size.LARGE};const B=w},65867:(e,a,t)=>{t.r(a),t.d(a,{default:()=>D}),t(74916),t(4723);var n=t(50369),l=t(60137),i=t(70828),o=t(54908),r=t(45984),s=(t(32564),t(42035)),c=t(79279),d=t(81694),u=t(88965),p=t(99243),m=t(93379),g=t.n(m),f=t(7795),b=t.n(f),h=t(90569),v=t.n(h),y=t(3565),P=t.n(y),Z=t(19216),k=t.n(Z),E=t(44589),S=t.n(E),R=t(43317),A={};A.styleTagTransform=S(),A.setAttributes=P(),A.insert=v().bind(null,"head"),A.domAPI=b(),A.insertStyleElement=k(),g()(R.Z,A),R.Z&&R.Z.locals&&R.Z.locals;const C=(0,l.connect)(null,(function(e){return(0,i.bindModelActionCreators)({appendTimePoint:"analgesia/appendTimePoint"},e)}))((function(e){var a=e.appendTimePoint;return n.createElement(p.default,{className:"analgesia-append-time-point-button",value:"Append Time Point",onClick:a},n.createElement("i",{className:"fal fa-chevron-down down-icon"}))}));var w=t(23279),B=t.n(w),x=t(57855),T=t(16162),F={};F.styleTagTransform=S(),F.setAttributes=P(),F.insert=v().bind(null,"head"),F.domAPI=b(),F.insertStyleElement=k(),g()(T.Z,F),T.Z&&T.Z.locals&&T.Z.locals;const N=(0,l.connect)((function(e){return{thoracicList:e.sensoryBlock.thoracicList,sacralList:e.sensoryBlock.sacralList,analgesiaData:e.analgesia.data}}),(function(e){return(0,i.bindModelActionCreators)({createOrUpdateAnalgesiaData:"analgesia/createOrUpdateAnalgesiaData",updateAnalgesiaDataField:"analgesia/updateAnalgesiaDataField"},e)}))((function(e){var a=e.patientId,t=e.thoracicList,l=e.sacralList,i=e.analgesiaData,o=e.createOrUpdateAnalgesiaData,r=e.updateAnalgesiaDataField,p=(0,n.useCallback)((function(){a&&(null==o||o({patientId:a,successResMsgDisabled:!0}))}),[a,o]),m=(0,n.useMemo)((function(){return B()(p,400)}),[p]),g=(0,n.useCallback)((function(e,a,t){null==r||r({timePoint:e,fieldName:a,fieldValue:t}),setTimeout((function(){return m()}),0)}),[r,m]),f=(0,n.useMemo)((function(){return[{key:"timePoint",width:48,headRenderer:"Time",bodyRenderer:function(e){return e.timePoint<60?"".concat(e.timePoint," min"):"".concat(e.timePoint/60," h")}},{key:"vasScore",headRenderer:"Vas",bodyRenderer:function(e){return n.createElement(d.Z,{value:(0,x.Uw)(e.vasScore),onChange:function(a){return g(e.timePoint,"vasScore",a)}})}},{key:"thoracicSensoryBlock",width:166,noWrap:!0,headRenderer:"TSB",bodyRenderer:function(e){return n.createElement("div",null,n.createElement("label",null,"L: "),n.createElement(u.Z,{data:t,value:e.thoracicSensoryBlockLeft,valueField:"value",displayField:"name",onChange:function(a){return g(e.timePoint,"thoracicSensoryBlockLeft",a)}}),n.createElement("label",null,", R: "),n.createElement(u.Z,{data:t,value:e.thoracicSensoryBlockRight,valueField:"value",displayField:"name",onChange:function(a){return g(e.timePoint,"thoracicSensoryBlockRight",a)}}))}},{key:"sacralSensoryBlock",width:166,noWrap:!0,headRenderer:"SSB",bodyRenderer:function(e){return n.createElement("div",null,n.createElement("label",null,"L: "),n.createElement(u.Z,{data:l,value:e.sacralSensoryBlockLeft,valueField:"value",displayField:"name",onChange:function(a){return g(e.timePoint,"sacralSensoryBlockLeft",a)}}),n.createElement("label",null,", R: "),n.createElement(u.Z,{data:l,value:e.sacralSensoryBlockRight,valueField:"value",displayField:"name",onChange:function(a){return g(e.timePoint,"sacralSensoryBlockRight",a)}}))}},{key:"bromageScore",headRenderer:"Bromage",bodyRenderer:function(e){return n.createElement(d.Z,{value:(0,x.Uw)(e.bromageScore),onChange:function(a){return g(e.timePoint,"bromageScore",a)}})}},{key:"systolicBloodPressure",headRenderer:"SBP",bodyRenderer:function(e){return n.createElement(d.Z,{value:(0,x.Uw)(e.systolicBloodPressure),onChange:function(a){return g(e.timePoint,"systolicBloodPressure",a)}})}},{key:"diastolicBloodPressure",headRenderer:"DBP",bodyRenderer:function(e){return n.createElement(d.Z,{value:(0,x.Uw)(e.diastolicBloodPressure),onChange:function(a){return g(e.timePoint,"diastolicBloodPressure",a)}})}},{key:"heartRate",headRenderer:"HR",bodyRenderer:function(e){return n.createElement(d.Z,{value:(0,x.Uw)(e.heartRate),onChange:function(a){return g(e.timePoint,"heartRate",a)}})}},{key:"fetalHeartRate",headRenderer:"FHR",bodyRenderer:function(e){return n.createElement(d.Z,{value:(0,x.Uw)(e.fetalHeartRate),onChange:function(a){return g(e.timePoint,"fetalHeartRate",a)}})}}]}),[t,l,g]);return n.createElement(s.Z,{className:"analgesia-data-table-card",hasFinishedLoading:!0},n.createElement(c.Z,{className:"analgesia-data-table",columns:f,data:i,idField:"timePoint",isPaginated:!1,isFootHidden:!0}),n.createElement(C,null))}));var I=t(31576),L=t(36681),U={};U.styleTagTransform=S(),U.setAttributes=P(),U.insert=v().bind(null,"head"),U.domAPI=b(),U.insertStyleElement=k(),g()(L.Z,U),L.Z&&L.Z.locals&&L.Z.locals;const D=(0,l.connect)((function(e){var a;return{getAnalgesiaStatus:null===(a=e.apiStatus.analgesia)||void 0===a?void 0:a.getAnalgesia}}),(function(e){return(0,i.bindModelActionCreators)({pushRoute:"route/push",getPatientInfo:"patientInfo/getPatientInfo",getAnalgesia:"analgesia/getAnalgesia",createOrUpdateAnalgesiaData:"analgesia/createOrUpdateAnalgesiaData",updatePatientStep:"editPatient/updatePatientStep"},e)}))((function(e){var a,t=e.match,l=e.getAnalgesiaStatus,i=e.pushRoute,s=e.getPatientInfo,c=e.getAnalgesia,d=e.createOrUpdateAnalgesiaData,u=e.updatePatientStep,p=null===(a=t.params)||void 0===a?void 0:a.patientId,m=(0,n.useMemo)((function(){return l!==I.ApiStatus.SUCCESS}),[l]),g=(0,n.useCallback)((function(){p||null==i||i({route:"/app/patient-list"}),null==s||s({id:p}),null==c||c({patientId:p})}),[p,i,s,c]),f=(0,n.useCallback)((function(){null==i||i({route:"/app/patient/info/".concat(p)})}),[p,i]),b=(0,n.useCallback)((function(){null==d||d({patientId:p,callback:function(){return null==i?void 0:i({route:"/app/patient/observal/".concat(p)})}})}),[p,d,i]);return(0,n.useEffect)((function(){g()}),[g]),(0,n.useEffect)((function(){null==u||u({activatedStep:1})}),[u]),n.createElement("div",{className:"analgesia-data"},n.createElement(o.Z,{loading:m},n.createElement(N,{patientId:p}),n.createElement(r.Z,{onPrev:f,onNext:b})))}))},85554:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(8081),l=t.n(n),i=t(23645),o=t.n(i)()(l());o.push([e.id,'.step-action{position:relative;width:100%;padding-top:24px;margin-top:36px}.step-action::before,.step-action::after{display:table;content:""}.step-action::after{clear:both}.step-action .previous-button{float:left;width:120px;height:48px;color:#abb5c1}.step-action .previous-button:hover{color:#4c637b}.step-action .continue-button{float:right;width:180px;height:48px;font-weight:700}.step-action::before{content:"";position:absolute;left:-24px;top:0;display:block;width:calc(100% + 48px);height:1px;background:#e4eaf2}',""]);const r=o},49849:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(8081),l=t.n(n),i=t(23645),o=t.n(i)()(l());o.push([e.id,".module-loading{display:block;margin:48px auto}",""]);const r=o},43317:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(8081),l=t.n(n),i=t(23645),o=t.n(i)()(l());o.push([e.id,".analgesia-append-time-point-button{display:block;width:auto;height:auto;margin:0 auto;padding:8px 16px;color:#abb5c1}.analgesia-append-time-point-button .down-icon{display:block;margin:0 auto}.analgesia-append-time-point-button:hover{color:#38b1eb}",""]);const r=o},36681:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(8081),l=t.n(n),i=t(23645),o=t.n(i)()(l());o.push([e.id,".analgesia-data{margin-top:-32px}",""]);const r=o},16162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(8081),l=t.n(n),i=t(23645),o=t.n(i)()(l());o.push([e.id,".analgesia-data-table-card .analgesia-data-table .material-provider-label-wrapper{display:none}.analgesia-data-table-card .analgesia-data-table .table-row{border:none !important}.analgesia-data-table-card .analgesia-data-table .material-text-field,.analgesia-data-table-card .analgesia-data-table .material-dropdown-select{width:72px}.analgesia-data-table-card .analgesia-data-table .material-dropdown-select{display:inline-block}.analgesia-data-table-card .analgesia-data-table label{color:#abb5c1}.analgesia-data-table-card.not-full-screen{padding:0 !important;border:none !important;border-radius:0 !important;box-shadow:none !important;background:rgba(0,0,0,0) !important}.analgesia-data-table-card.full-screen{bottom:20px !important}",""]);const r=o}}]);