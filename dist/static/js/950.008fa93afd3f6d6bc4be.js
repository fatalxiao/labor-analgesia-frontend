"use strict";(self.webpackChunklabor_analgesia_frontend=self.webpackChunklabor_analgesia_frontend||[]).push([[950],{76810:(e,t,r)=>{r.d(t,{AX:()=>n,ZP:()=>a});var n="/labor-analgesia";const a={baseUrl:"http://localhost:4100",appBaseUrl:n}},75950:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O,formatObservalData:()=>v}),r(47941),r(82526),r(57327),r(41539),r(38880),r(89554),r(54747),r(49337);var n=r(4942),a=r(45987),o=(r(92222),r(76810)),l=r(8262);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){if(null!=e&&e.params){var t=e.params.patientId;return l.Z.get(i(i({},e),{},{url:"".concat(o.ZP.appBaseUrl,"/observal/getObservalDataByPatientId/").concat(t)}))}}function s(e){if(null!=e&&e.params){var t=e.params,r=t.patientId,n=t.observalData;return l.Z.post({url:"".concat(o.ZP.appBaseUrl,"/observal/createOrUpdateObservalData/").concat(r),params:n})}}var p=["observalEndPoint","epPlacementPoint"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){return function(){var t,r;return e?(e.observalEndPoint,e.epPlacementPoint,b(b({},(0,a.Z)(e,p)),{},{observalEndPointId:(null==e||null===(t=e.observalEndPoint)||void 0===t?void 0:t.id)||null,epPlacementPointId:(null==e||null===(r=e.epPlacementPoint)||void 0===r?void 0:r.id)||null})):null}},d={initialTime:"",observalEndPoint:null,cervixFullyDilatedTime:"",epPlacementPoint:null,cervixDilatation:"",initialDose:"8",pumpConsumption:"",bolus:"",pcaCount:"",manualBolusCount:"",firstPcaTime:"",firstManualBolusTime:"",hasVasoactiveAgent:!1,hasHypotension:!1,hasCaesareanSection:!1,hasInstrumental:!1,hasPruritus:!1,hasLateralEpisiotomy:!1,birthTime:"",foetalWeight:"",oneMinuteApgarScore:"",fiveMinuteApgarScore:"",description:""};const O={nameSpace:"observal",state:{form:b({},d),getActionType:null,updateActionType:null},apis:{getObservalData:function(e){var t=e.patientId;return function(e){return e({api:u,params:{patientId:t},successResMsgDisabled:!0})}},createOrUpdateObservalData:function(e){var t=e.patientId,r=e.callback,n=e.successResMsgDisabled,a=e.failureResMsgDisabled,o=void 0!==a&&a;return function(e,a,l){var c=l().observal.form;if(t&&c)return e({api:s,params:{patientId:t,observalData:v(c)()},successResMsgDisabled:n,failureResMsgDisabled:o,successCallback:function(){null==r||r()}})}}},globalReducers:{resetData:function(e){return b(b({},e),{},{form:b({},d)})}},reducers:{updateObservalField:function(e,t){var r=t.fieldName,n=t.fieldValue,a=b({},e.form);return a[r]=n,b(b({},e),{},{form:a})},getObservalDataRequest:function(e){return b(b({},e),{},{getActionType:"observal/getObservalRequest"})},getObservalDataSuccess:function(e,t){var r=t.responseData;return b(b({},e),{},{getActionType:"observal/getObservalSuccess",form:r||b({},d)})},getObservalDataFailure:function(e){return b(b({},e),{},{getActionType:"observal/getObservalFailure"})},createOrUpdateObservalDataRequest:function(e){return b(b({},e),{},{updateActionType:"observal/updateObservalRequest"})},createOrUpdateObservalDataSuccess:function(e){return b(b({},e),{},{updateActionType:"observal/updateObservalSuccess"})},createOrUpdateObservalDataFailure:function(e){return b(b({},e),{},{updateActionType:"observal/updateObservalFailure"})}}}},8262:(e,t,r)=>{r.d(t,{Z:()=>u}),r(47941),r(82526),r(57327),r(41539),r(38880),r(89554),r(54747),r(49337);var n=r(4942),a=(r(68309),r(78648)),o=r(67632);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){var r=t.name,n=t.url,l=t.params,i=t.header,u=(t.contentType,t.cancelable),s={method:e,url:n,headers:c({},i),params:"get"===e?l:null,data:"post"===e?l:null};if(u){var p=a.Z.CancelToken.source();o.ZP.add({name:r,url:n,source:p}),s.cancelToken=null==p?void 0:p.token}return(0,a.Z)(s)}const u={get:function(e){return i("get",e)},post:function(e){return i("post",e)}}},67632:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{ZP:()=>o}),r(57327),r(41539),r(68309),r(47042),r(91038),r(78783),r(74916),r(82526),r(41817),r(32165),r(66992),r(33948);var a=[];const o={add:function(e){e&&a.push(e)},cancelByName:function(e){a=a.filter((function(t){var r,n;return(null==t?void 0:t.name)!==e||(null==t||null===(r=t.source)||void 0===r||null===(n=r.cancel)||void 0===n||n.call(r),!1)}))},cancelOthersByName:function(e){a=a.filter((function(t){var r,n;return(null==t?void 0:t.name)===e||(null==t||null===(r=t.source)||void 0===r||null===(n=r.cancel)||void 0===n||n.call(r),!1)}))},cancelAll:function(){var e,t=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}(a);try{for(t.s();!(e=t.n()).done;){var r,o,l,c=e.value;null==c||null===(r=c.source)||void 0===r||null===(o=(l=r).cancel)||void 0===o||o.call(l)}}catch(e){t.e(e)}finally{t.f()}a.length=0}}}}]);