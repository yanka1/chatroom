(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73fa"],{"30b52":function(t,a,n){"use strict";var e=n("dc89"),c=n.n(e);c.a},b0cf:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"mt-day transfer-detail"},[n("van-nav-bar",{attrs:{title:"批量转账","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"detail-header"},[n("div",{staticClass:"header mt-font-white8"},[t._m(0),n("div",{staticClass:"mt-font-white"},[t._v("\n        "+t._s(t.$numeral(t.Balance.balance).format("0,0"))+"\n      ")]),n("div",[n("div",[t._v("\n          授权余额 "),n("span",[t._v(t._s(t.$numeral(t.Allowance.allowance).format("0,0")))])]),n("div",[n("div",{staticClass:"van-hairline--surround",on:{click:t.handleApprove}},[t._v("\n            去授权\n          ")])])]),n("div",{staticClass:" mt-font-white8"},[t._v("\n        提示：转账前必须要进行授权，如果授权数小于转账数，将无法完成转账。\n      ")])])]),n("div",{staticClass:"history-area"},[n("h4",{staticClass:"van-hairline--bottom"},[t._v("\n        历史记录\n      ")]),n("van-list",t._l(t.historys,function(a,e){return n("div",{key:e,staticClass:"history-item van-hairline--bottom"},[n("div",[n("div",[t._v("\n              交易号"),n("a",{attrs:{href:"https://etherscan.io/tx/"+a.txHash,target:"_blank"}},[t._v(" "+t._s(a.txHash.substring(0,10)+"..."+a.txHash.substring(56))+" ")])]),n("div",{staticClass:"mt-fs-12 mt-font-secondary"},[t._v(t._s(t.$moment(1e3*a.created_at).format("YYYY-MM-DD HH:mm:ss")))])]),n("div",[n("van-icon",{attrs:{name:"arrow"}})],1)])}))],1),n("button",{staticClass:"transfer-btn",on:{click:t.handleTransaction}},[t._v("\n    批量转账\n  ")])],1)},c=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("span",[t._v("wallet-01:")]),t._v("  h1udsfb213…fjg84n2uf\n      ")])}],o=(n("cadf"),n("551c"),n("097d"),n("fa7d")),i=n("408b"),s=[{txHash:"0x0ba3cc17db1eadd87252fdbf1f80ce16f7cb89e4e9b5016808093cdb00a37c3f",created_at:1536307544},{txHash:"0x0ba3cc17db1eadd87252fdbf1f80ce16f7cb89e4e9b5016808093cdb00a37c3f",created_at:1536307544}],l={name:"transfer-detail",data:function(){return{listData:[],contractData:{},delegate:"0xa0342E0A9FE0b5178208115E7712762c88c228e0",Balance:"",Allowance:"",tokenPrice:0,historys:s}},mounted:function(){var t=this;this.contractData=Object(o["a"])("contract"),Object(i["a"])({contracts:this.contractData.contract}).then(function(a){t.tokenPrice=a.data.data[0].price}),this.initPossiableFunc(),window.Ygritte&&window.Ygritte.fetchBalance(this.contractData.contract,"walletNow","MTfetchBalance"),window.Ygritte&&window.Ygritte.fetchBalance(this.contractData.contract,"walletNow","MTfetchBalance"),window.Ygritte&&window.Ygritte.fetchAllowance(this.contractData.contract,"walletNow",this.delegate,"MTfetchAllowance")},methods:{onClickLeft:function(){console.log("top-left-click"),this.$router.back()},handleApprove:function(){window.Ygritte.doApprove(this.contractData.contract,this.delegate,"MTdoApprove")},handleTransaction:function(){console.log(this.Allowance.allowance>0),this.Allowance?"0"!==this.Allowance.allowance?this.$router.push("/dapp/transfer/contract"):this.$toast("请先授权使用".concat(this.contractData.symbol,"!")):this.$toast("正在获取数据，请稍等!")},initPossiableFunc:function(){var t=this;window.MTfetchBalance=function(a){console.log(a),t.Balance=a},window.MTfetchAllowance=function(a){console.log(a),t.Allowance=a},window.MTdoApprove=function(a){console.log(a),t.Allowance=a}}}},r=l,d=(n("30b52"),n("2877")),f=Object(d["a"])(r,e,c,!1,null,"072f0607",null);f.options.__file="detail.vue";a["default"]=f.exports},dc89:function(t,a,n){}}]);
//# sourceMappingURL=chunk-73fa.0970d3be.js.map