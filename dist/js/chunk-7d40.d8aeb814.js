(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d40"],{5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},"5e29":function(t,e,n){},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,i=1,o={},s=!1,c=t.document,r=Object.getPrototypeOf&&Object.getPrototypeOf(t);r=r&&r.setTimeout?r:t,"[object process]"==={}.toString.call(t.process)?h():m()?w():t.MessageChannel?v():c&&"onreadystatechange"in c.createElement("script")?p():g(),r.setImmediate=l,r.clearImmediate=d}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var s={callback:t,args:e};return o[i]=s,a(i),i++}function d(t){delete o[t]}function u(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function f(t){if(s)setTimeout(f,0,t);else{var e=o[t];if(e){s=!0;try{u(e)}finally{d(t),s=!1}}}}function h(){a=function(t){e.nextTick(function(){f(t)})}}function m(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function w(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function v(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},a=function(e){t.port2.postMessage(e)}}function p(){var t=c.documentElement;a=function(e){var n=c.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function g(){a=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("4362"))},6433:function(t,e,n){"use strict";var a=n("5e29"),i=n.n(a);i.a},"7f7f":function(t,e,n){var a=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in i||n("9e1e")&&a(i,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},b0cf:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("div",{staticClass:"mt-day transfer-detail"},[n("div",{staticClass:"detail-header"},[n("div",{staticClass:"header mt-font-white8"},[n("div",[n("span",[t._v(t._s(t.CurrentWallet.name)+":")]),t._v("  "+t._s(t.CurrentWallet.address.substring(0,10)+"..."+t.CurrentWallet.address.substring(30))+"\n          ")]),n("div",{staticClass:"mt-font-white"},[t._v("\n            "+t._s(t.$numeral(t.Balance.balance).format("0,0"))+"\n          ")]),n("div",[n("div",[t._v("\n              授权余额 "),n("span",[t._v(t._s(t.$numeral(t.Allowance.allowance).format("0,0")))])]),n("div",[n("div",{staticClass:"van-hairline--surround",on:{click:t.handleApprove}},[t._v("\n                去授权\n              ")])])]),n("div",{staticClass:" mt-font-white8"},[t._v("\n            提示：转账前必须要进行授权，如果授权数小于转账数，将无法完成转账。\n          ")])])]),n("div",{ref:"historyArea",staticClass:"history-area"},[n("h4",{staticClass:"van-hairline--bottom"},[t._v("\n            历史记录\n          ")]),t.historys.length?n("div",t._l(t.historys,function(e,a){return n("a",{key:a,staticClass:"history-item van-hairline--bottom",attrs:{href:"https://etherscan.io/tx/"+e.txHash,target:"_blank"}},[n("div",[n("div",[t._v("\n                  交易号 "+t._s(e.txHash.substring(0,10)+"..."+e.txHash.substring(56))+" \n                ")]),n("div",{staticClass:"mt-fs-12  mt-font-secondary"},[t._v(t._s(t.$date.format(1e3*e.created_at,"YYYY-MM-DD HH:mm:ss")))])]),n("div",[n("van-icon",{attrs:{name:"arrow"}})],1)])})):n("div",{staticClass:"history-item"},[t._v("\n            暂无记录或正在读取！\n          ")])])])]),n("div",{staticClass:"transfer-btn"},[n("button",{on:{click:t.handleTransaction}},[t._v("\n      批量转账\n    ")])])],1)},i=[],o=(n("7f7f"),n("cadf"),n("551c"),n("097d"),n("fa7d")),s=n("408b"),c=n("5118"),r={name:"transfer-detail",data:function(){return{listData:[],contractData:{},delegate:"0xa0342E0A9FE0b5178208115E7712762c88c228e0",Balance:"",Allowance:"",CurrentWallet:{address:""},transferHistorys:[],tokenPrice:0,historys:[],isLoading:!1}},mounted:function(){var t=this;this.contractData=Object(o["a"])("contract"),window.Ygritte&&window.Ygritte.setTitle("".concat(this.contractData.name," (").concat(this.contractData.symbol,")")),Object(s["a"])({contracts:this.contractData.contract}).then(function(e){t.tokenPrice=e.data.data[0].price}),this.initPossiableFunc(),window.Ygritte&&window.Ygritte.getCurrentWallet("MTgetCurrentWallet"),window.Ygritte&&window.Ygritte.fetchBalance(this.contractData.contract,"walletNow","MTfetchBalance"),window.Ygritte&&window.Ygritte.fetchAllowance(this.contractData.contract,"walletNow",this.delegate,"MTfetchAllowance")},methods:{onRefresh:function(){var t=this;window.Ygritte&&window.Ygritte.fetchBalance(this.contractData.contract,"walletNow","MTfetchBalance"),window.Ygritte&&window.Ygritte.fetchAllowance(this.contractData.contract,"walletNow",this.delegate,"MTfetchAllowance");var e=this.CurrentWallet.address+"_"+this.contractData.symbol+"_transfer_historys";window.Ygritte&&window.Ygritte.syncData(0,e,"","MTfetchHistorys"),Object(c["setTimeout"])(function(){t.isLoading=!1},500)},handleApprove:function(){window.Ygritte.doApprove(this.contractData.contract,this.delegate,"MTdoApprove")},handleTransaction:function(){console.log(this.Allowance.allowance>0),this.Allowance?"0"!==this.Allowance.allowance?this.$router.push("/dapp/transfer/contract"):this.$toast("请先授权使用".concat(this.contractData.symbol,"!")):this.$toast("正在获取数据，请稍等!")},initPossiableFunc:function(){var t=this;window.MTfetchBalance=function(e){t.Balance=e.data},window.MTfetchAllowance=function(e){t.Allowance=e.data,Object(o["b"])("Allowance",e.data)},window.MTdoApprove=function(e){t.Allowance=e.data},window.MTgetCurrentWallet=function(e){if(console.log(e),0===e.code){t.CurrentWallet=e.data,Object(o["b"])("current_wallet",e.data);var n=e.data.address+"_"+t.contractData.symbol+"_transfer_historys";window.Ygritte&&window.Ygritte.syncData(0,n,"","MTfetchHistorys")}},window.MTfetchHistorys=function(e){console.log(e.data,"200"),0===e.code&&e.data&&(Object(o["b"])("historys",JSON.parse(e.data.value)),t.historys=JSON.parse(e.data.value).reverse())}}}},l=r,d=(n("6433"),n("2877")),u=Object(d["a"])(l,a,i,!1,null,"ba7318b2",null);u.options.__file="detail.vue";e["default"]=u.exports}}]);