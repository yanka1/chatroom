(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e62"],{2139:function(t,n,e){"use strict";var a=e("d17d"),r=e.n(a);r.a},2621:function(t,n){n.f=Object.getOwnPropertySymbols},5803:function(t,n,e){t.exports=e.p+"img/quexing.a84042ce.png"},"70fc":function(t,n,e){},7333:function(t,n,e){"use strict";var a=e("0d58"),r=e("2621"),i=e("52a7"),o=e("4bf8"),c=e("626a"),s=Object.assign;t.exports=!s||e("79e5")(function(){var t={},n={},e=Symbol(),a="abcdefghijklmnopqrst";return t[e]=7,a.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=a})?function(t,n){var e=o(t),s=arguments.length,l=1,u=r.f,f=i.f;while(s>l){var d,h=c(arguments[l++]),g=u?a(h).concat(u(h)):a(h),p=g.length,v=0;while(p>v)f.call(h,d=g[v++])&&(e[d]=h[d])}return e}:s},"7f7f":function(t,n,e){var a=e("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in r||e("9e1e")&&a(r,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},a24a:function(t,n,e){"use strict";var a=e("70fc"),r=e.n(a);r.a},a3fd:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("form",{attrs:{action:"/"}},[e("van-search",{attrs:{placeholder:"请输入币种名称","show-action":t.showAction},on:{search:t.onSearch,focus:function(n){t.showAction=!0},blur:function(n){t.showAction=!1},cancel:t.onCancel},model:{value:t.searchValue,callback:function(n){t.searchValue=n},expression:"searchValue"}},[e("div",{attrs:{slot:"action"},on:{click:t.onCancel},slot:"action"},[t._v("取消")])])],1),e("div",{staticClass:"hint-area mt-text-center van-hairline--top-bottom "},[t._v("\n    什么是批量转账?\n  ")]),t.searchEmpty?t._e():e("van-list",t._l(t.filterContracts,function(n,a){return e("div",{key:a,staticClass:"contract van-hairline--bottom mt-fs-14 mt-flex mt-align-center mt-justify-between",on:{click:function(e){t.handleContractClick(n)}}},[e("div",[e("mt-proxy-img",{attrs:{src:n.logo,width:36,height:36}})],1),e("div",{staticClass:"contract-content"},[e("div",{staticClass:"contract-content-left"},[e("div",[t._v("\n            "+t._s(n.symbol)+"\n          ")]),e("div",{staticClass:"mt-fs-12"},[t._v(t._s(n.name))])]),"0x0"!==n.contract?e("div",{staticClass:"contract-content-right contract-arrow"},[e("van-icon",{attrs:{name:"arrow"}})],1):e("div",{staticClass:"contract-content-right mt-fs-12"},[t._v("\n          暂不支持 ETH 转账\n        ")])])])})),t.filterContracts.length?t._e():e("div",{staticClass:"filter-nothing"},[e("div"),e("p",[t._v("\n      暂无相关搜索结果\n    ")])])],1)},r=[],i=(e("7f7f"),e("f751"),e("cadf"),e("551c"),e("097d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:{backgroundImage:"url("+t.url+")",backgroundSize:"contain",width:t.width+"px",height:t.height+"px",marginRight:t.noMargin?0:"5px"}})}),o=[],c=(e("c5f6"),e("5803")),s=e.n(c),l={props:{src:null,title:null,width:{type:Number,default:20},height:{type:Number,default:20},noMargin:{type:Boolean,default:!1}},data:function(){return{url:s.a}},mounted:function(){this.url=s.a,this.src&&this.loadImg(this.src)},methods:{loadImg:function(t){var n=this,e=new Image;e.src=t,e.onerror=function(){e.src=s.a},e.onload=function(){n.url=e.src,setTimeout(function(){n.$emit("loaded")},200)}}},watch:{src:function(t){this.loadImg(t)}}},u=l,f=(e("a24a"),e("2877")),d=Object(f["a"])(u,i,o,!1,null,"0ce60620",null);d.options.__file="index.vue";var h=d.exports,g=e("4328"),p=e.n(g),v=e("fa7d"),w={name:"transfer-list",data:function(){return{stringify:p.a.stringify,listData:[],searchValue:"",CurrentWalletContracts:[],filterContracts:[],searchEmpty:!1,showAction:!1}},components:{MtProxyImg:h},watch:{CurrentWalletContracts:function(t){this.filterContracts=t},searchValue:function(t){var n=Object.assign([],this.CurrentWalletContracts);this.filterContracts=n.filter(function(n){var e=n.symbol.toUpperCase(),a=n.name.toUpperCase(),r=t.toUpperCase();return e.indexOf(r)>-1||a.indexOf(r)>-1})}},mounted:function(){this.filterContracts=this.CurrentWalletContracts,this.initPossiableFunc(),setTimeout(function(){window.Ygritte&&window.Ygritte.setTitle("批量转账"),window.Ygritte&&window.Ygritte.getCurrentWalletContracts("MTgetCurrentWalletContracts")},0)},methods:{onClickLeft:function(){console.log("top-left-click"),window.Ygritte&&window.Ygritte.closeWebView()},onSearch:function(){var t=this,n=Object.assign([],this.CurrentWalletContracts);this.filterContracts=n.filter(function(n){var e=n.symbol.toUpperCase(),a=n.name.toUpperCase(),r=t.searchValue.toUpperCase();return e.indexOf(r)>-1||a.indexOf(r)>-1})},onCancel:function(){this.showAction=!1},handleContractClick:function(t){"0x0"!==t.contract&&(Object(v["b"])("contract",t),this.$router.push("/dapp/transfer/detail"))},initPossiableFunc:function(){var t=this;window.MTgetCurrentWalletContracts=function(n){console.log(n.data),t.CurrentWalletContracts=n.data},window.getData=function(t){console.log(t)},window.addData=function(t){console.log(t)}},handleAddData:function(){window.Ygritte&&window.Ygritte.syncData(1,"data","data","addData")},handleGetData:function(){window.Ygritte&&window.Ygritte.syncData(0,"data","","getData")}}},m=w,C=(e("2139"),Object(f["a"])(m,a,r,!1,null,"6f064ecc",null));C.options.__file="list.vue";n["default"]=C.exports},aa77:function(t,n,e){var a=e("5ca1"),r=e("be13"),i=e("79e5"),o=e("fdef"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,n,e){var r={},c=i(function(){return!!o[t]()||s[t]()!=s}),l=r[t]=c?n(d):o[t];e&&(r[e]=l),a(a.P+a.F*c,"String",r)},d=f.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(l,"")),2&n&&(t=t.replace(u,"")),t};t.exports=f},c5f6:function(t,n,e){"use strict";var a=e("7726"),r=e("69a8"),i=e("2d95"),o=e("5dbc"),c=e("6a99"),s=e("79e5"),l=e("9093").f,u=e("11e9").f,f=e("86cc").f,d=e("aa77").trim,h="Number",g=a[h],p=g,v=g.prototype,w=i(e("2aeb")(v))==h,m="trim"in String.prototype,C=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=m?n.trim():d(n,3);var e,a,r,i=n.charCodeAt(0);if(43===i||45===i){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+n}for(var o,s=n.slice(2),l=0,u=s.length;l<u;l++)if(o=s.charCodeAt(l),o<48||o>r)return NaN;return parseInt(s,a)}}return+n};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof g&&(w?s(function(){v.valueOf.call(e)}):i(e)!=h)?o(new p(C(n)),e,g):C(n)};for(var b,y=e("9e1e")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;y.length>_;_++)r(p,b=y[_])&&!r(g,b)&&f(g,b,u(p,b));g.prototype=v,v.constructor=g,e("2aba")(a,h,g)}},d17d:function(t,n,e){},f751:function(t,n,e){var a=e("5ca1");a(a.S+a.F,"Object",{assign:e("7333")})},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);