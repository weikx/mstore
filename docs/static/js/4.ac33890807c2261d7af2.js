webpackJsonp([4],{"1HbR":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page full flex flex-col coupons"},[a("mt-header",{staticClass:"header",attrs:{title:"我的订单"}},[a("mt-button",{staticClass:"btn",attrs:{slot:"left",icon:"back"},on:{click:function(t){e.pageBack()}},slot:"left"}),e._v(" "),a("mt-button",{staticClass:"btn",attrs:{slot:"right"},on:{click:function(t){e.pagePush("/invoice")}},slot:"right"},[e._v("开发票")])],1),e._v(" "),a("div",{staticClass:"item_nav"},[a("div",{staticClass:"item_tab",class:{active:0==e.tabbarIndex},on:{click:function(t){e.tabbarIndex=0}}},[a("p",{staticClass:"font-12"},[e._v("全部")])]),e._v(" "),a("div",{staticClass:"item_tab",class:{active:1==e.tabbarIndex},on:{click:function(t){e.tabbarIndex=1}}},[a("p",{staticClass:"font-12"},[e._v("待付款")])]),e._v(" "),a("div",{staticClass:"item_tab",class:{active:2==e.tabbarIndex},on:{click:function(t){e.tabbarIndex=2}}},[a("p",{staticClass:"font-12"},[e._v("待发货")])]),e._v(" "),a("div",{staticClass:"item_tab",class:{active:3==e.tabbarIndex},on:{click:function(t){e.tabbarIndex=3}}},[a("p",{staticClass:"font-12"},[e._v("待收货")])]),e._v(" "),a("div",{staticClass:"item_tab",class:{active:4==e.tabbarIndex},on:{click:function(t){e.tabbarIndex=4}}},[a("p",{staticClass:"font-12"},[e._v("待评价")])]),e._v(" "),a("div",{staticClass:"item-tabbar-line",class:"line"+e.tabbarIndex},[a("div",{staticClass:"slide-line"})])]),e._v(" "),a("div",{staticClass:"item_content"},[a("scroll",{ref:"scroll",attrs:{scrollbar:e.scrollbarObj,pullDownRefresh:e.pullDownRefreshObj,pullUpLoad:e.pullUpLoadObj},on:{pullingDown:e.onPullingDown,pullingUp:e.onPullingUp}},[a("ul",{staticClass:"item_ul"},e._l(e.data,function(t,n){return a("li",{staticClass:"item_li",on:{click:function(a){e.pagePush("/orderDetail/"+t.sn)}}},[a("div",{staticClass:"item_li_top"},[a("div",{staticClass:"item_order  font-12"},[e._v("\n                        订单号："+e._s(t.sn)+"\n                    ")]),e._v(" "),a("div",{staticClass:"item_status  font-12"},[a("span",[e._v(e._s(t.status))]),e._v(" >\n                    ")])]),e._v(" "),a("div",{staticClass:"item_li_content mg-t-20"},[a("div",{staticClass:"item_img",style:{backgroundImage:"url("+t.orderImg+")"}}),e._v(" "),a("div",{staticClass:"item_discribe mg-l-30"},[a("p",{staticClass:"font-16 item_name mg-t-10"},[e._v(e._s(t.orderName))]),e._v(" "),a("p",{staticClass:"font-14 item_num mg-t-20"},[e._v("规格："),a("span",[e._v(e._s(t.spec))])]),e._v(" "),a("p",{staticClass:"font-14 item_pay mg-t-20"},[e._v("支付："),a("span",[e._v(e._s(t.orderPrice))]),e._v("元")]),e._v(" "),"已送达"==t.status?a("div",{staticClass:"item_btn"},[a("p",{staticClass:"font-14 item_confirm"},[e._v("确认收货")])]):e._e(),e._v(" "),"收货成功"==t.status?a("div",{staticClass:"item_btn"},[a("p",{staticClass:"font-14 item_confirm"},[e._v("商品评价")])]):e._e(),e._v(" "),"已过期"==t.status?a("div",{staticClass:"item_btn"},[a("p",{staticClass:"font-14 item_confirm"},[e._v("删除订单")])]):e._e(),e._v(" "),"待评价"==t.status?a("div",{staticClass:"item_btn",on:{click:function(a){e.pagePush("/evaluate/"+t.sn)}}},[a("p",{staticClass:"font-14 item_confirm"},[e._v("商品评价")])]):e._e()])])])}))])],1)],1)},r=[],i={render:n,staticRenderFns:r};t.a=i},"5zde":function(e,t,a){a("zQR9"),a("qyJz"),e.exports=a("FeBl").Array.from},A3Yo:function(module,__webpack_exports__,__webpack_require__){"use strict";function remoteData(e,t){var t=t||300;return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function(a,n){setTimeout(function(){a(e)},t)})}var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__=__webpack_require__("Gu7T"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__=__webpack_require__("//Fk"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__),count=0,page=0;__webpack_exports__.a={name:"orderList",data:function(){return{tabbarIndex:0,scrollbar:!1,scrollbarFade:!0,pullDownRefresh:!0,pullDownRefreshThreshold:90,pullDownRefreshStop:40,pullUpLoad:!0,pullUpLoadThreshold:40,data:[],pageMore:0,moredata:[]}},computed:{scrollbarObj:function(){return!!this.scrollbar&&{fade:this.scrollbarFade}},pullDownRefreshObj:function(){return!!this.pullDownRefresh&&{threshold:parseInt(this.pullDownRefreshThreshold),stop:parseInt(this.pullDownRefreshStop)}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:parseInt(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},created:function(){var e=this;this.fetchData().then(function(t){e.data=t.data}),console.log(111)},mounted:function(){},watch:{tabbarIndex:function(){var e=this;this.$refs.scroll.scrollTo(0,40,600),this.fetchData().then(function(t){e.data=t.data,e.pageMore=0,e.moredata=[],setTimeout(function(t){e.$refs.scroll.forceUpdate()},600)})}},methods:{fetchData:function fetchData(){var list0={data:[{sn:"845643513556464534351",status:"等待收货",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"已送达",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"收货成功",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"已过期",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"等待收货",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"}],moredata:[]},list1={data:[{sn:"845643513556464534351",status:"待付款",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"待付款",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"待付款",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"待付款",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"待付款",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"}],moredata:[]},list2={data:[{sn:"845643513556464534351",status:"待发货",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"待发货",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"}],moredata:[]},list3={data:[{sn:"845643513556464534351",status:"待收货",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"待收货",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"}],moredata:[]},list4={data:[{sn:"845643513556464534351",status:"待评价",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"},{sn:"845643513556464534351",status:"待评价",orderImg:"/static/images/test.jpg",orderName:"毛衣",spec:"一件（XL码）*2",orderPrice:"300"}],moredata:[]};++this.pageMore>3&&(this.moredata=[]);var newlist=eval("list"+this.tabbarIndex);return remoteData(newlist,600)},scrollTo:function(){this.$refs.scroll.scrollTo(this.scrollToX,this.scrollToY,this.scrollToTime,"linear")},onPullingDown:function(){var e=this;this.pageMore=0,this.moredata=[],this.fetchData().then(function(t){t?(e.data=t.data,e.$refs.scroll.forceUpdate(!0)):e.$refs.scroll.forceUpdate()})},onPullingUp:function(){var e=this;this.fetchData().then(function(t){t.moredata.length>0?(e.moredata=[].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(t.moredata),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(e.moredata)),e.$nextTick(function(t){e.$refs.scroll.forceUpdate(!0)})):e.$nextTick(function(t){e.$refs.scroll.forceUpdate()})})}}}},Gu7T:function(e,t,a){"use strict";t.__esModule=!0;var n=a("c/Tr"),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,r.default)(e)}},Jnaq:function(e,t,a){var n=a("P90A");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("513d02ec",n,!0)},P90A:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".header[data-v-2ed5d413]{background-color:#fff;color:#000;border-bottom:1px solid #eee;height:2.5rem}.item_content[data-v-2ed5d413]{width:18.75rem;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;position:relative}.item_nav[data-v-2ed5d413]{display:-webkit-box;display:-ms-flexbox;display:flex;width:18.75rem;height:2rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;position:relative;margin-bottom:1rem}.item_nav .item_tab[data-v-2ed5d413]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:gray}.item_nav .item_tab.active[data-v-2ed5d413]{color:#000}.item_nav .item-tabbar-line[data-v-2ed5d413]{position:absolute;left:0;right:0;bottom:0;height:.125rem}.item_nav .item-tabbar-line .slide-line[data-v-2ed5d413]{width:1rem;height:.125rem;position:absolute;left:-1rem;background-color:#53a2e3;-webkit-transition:all .1s;transition:all .1s;border-radius:5px}.item_nav .item-tabbar-line.line0 .slide-line[data-v-2ed5d413]{-webkit-transform:translateX(2.375rem);transform:translateX(2.375rem)}.item_nav .item-tabbar-line.line1 .slide-line[data-v-2ed5d413]{-webkit-transform:translateX(6.125rem);transform:translateX(6.125rem)}.item_nav .item-tabbar-line.line2 .slide-line[data-v-2ed5d413]{-webkit-transform:translateX(9.875rem);transform:translateX(9.875rem)}.item_nav .item-tabbar-line.line3 .slide-line[data-v-2ed5d413]{-webkit-transform:translateX(13.625rem);transform:translateX(13.625rem)}.item_nav .item-tabbar-line.line4 .slide-line[data-v-2ed5d413]{-webkit-transform:translateX(17.375rem);transform:translateX(17.375rem)}.item_li[data-v-2ed5d413]{padding:.75rem;border-bottom:1px solid #eee}.item_li_top[data-v-2ed5d413]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:gray}.item_status span[data-v-2ed5d413]{color:#ffb72c}.item_li_content[data-v-2ed5d413]{display:-webkit-box;display:-ms-flexbox;display:flex}.item_discribe[data-v-2ed5d413]{-webkit-box-flex:1;-ms-flex:1;flex:1}.item_img[data-v-2ed5d413]{width:5rem;height:5rem;background-position:50%;background-repeat:no-repeat;border-radius:5px;background-size:cover}.item_name[data-v-2ed5d413]{color:#000;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:11.5rem;height:1rem}.item_num[data-v-2ed5d413],.item_pay[data-v-2ed5d413]{color:gray}.item_pay span[data-v-2ed5d413]{color:#000}.item_btn[data-v-2ed5d413]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.item_confirm[data-v-2ed5d413]{color:#ffb72c;border:1px solid #ffb72c;height:1rem;width:3.5rem;text-align:center;border-radius:5px;line-height:1rem}","",{version:3,sources:["I:/mstore/src/views/orderList.vue"],names:[],mappings:"AAQA,yBACE,sBAAuB,AACvB,WAAY,AACZ,6BAA8B,AAC9B,aAAe,CAChB,AACD,+BACE,eAAgB,AAChB,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,2BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,YAAa,AACb,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,kBAAmB,AACnB,kBAAoB,CACrB,AACD,qCACI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,UAAY,CACf,AACD,4CACM,UAAa,CAClB,AACD,6CACI,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,SAAU,AACV,cAAiB,CACpB,AACD,yDACM,WAAY,AACZ,eAAiB,AACjB,kBAAmB,AACnB,WAAY,AACZ,yBAA0B,AAC1B,2BAA8B,AAC9B,mBAAsB,AACtB,iBAAmB,CACxB,AACD,+DACM,uCAAwC,AAChC,8BAAgC,CAC7C,AACD,+DACM,uCAAwC,AAChC,8BAAgC,CAC7C,AACD,+DACM,uCAAwC,AAChC,8BAAgC,CAC7C,AACD,+DACM,wCAAyC,AACjC,+BAAiC,CAC9C,AACD,+DACM,wCAAyC,AACjC,+BAAiC,CAC9C,AACD,0BACE,eAAyB,AACzB,4BAA8B,CAC/B,AACD,8BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,UAAY,CACb,AACD,mCACE,aAAe,CAChB,AACD,kCACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,gCACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,2BACE,WAAY,AACZ,YAAa,AACb,wBAA4B,AAC5B,4BAA6B,AAC7B,kBAAmB,AACnB,qBAAuB,CACxB,AACD,4BACE,WAAe,AACf,gBAAiB,AACjB,mBAAoB,AACpB,uBAAwB,AACxB,cAAe,AACf,WAAa,CACd,AAID,sDACE,UAAY,CACb,AACD,gCACE,UAAe,CAChB,AACD,2BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,kBAAmB,AACf,wBAA0B,CACnC,AACD,+BACE,cAAe,AACf,yBAA0B,AAC1B,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,gBAAkB,CACnB",file:"orderList.vue",sourcesContent:['\n@charset "UTF-8";\n/* ==================================================\r\n * \t\t\t \t\t 全局Sass变量\r\n * \t这里简单介绍下CSS的布局，这里采用主流的Flexbox,\r\n *  在高度上采取固定Px，宽度自适应, 在布局上有参考下\r\n *  Framework7 的布局,在一些宽度上采用rem来优化多终端的适应\r\n * ================================================= */\n.header[data-v-2ed5d413] {\n  background-color: #fff;\n  color: #000;\n  border-bottom: 1px solid #eee;\n  height: 2.5rem;\n}\n.item_content[data-v-2ed5d413] {\n  width: 18.75rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.item_nav[data-v-2ed5d413] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 18.75rem;\n  height: 2rem;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: relative;\n  margin-bottom: 1rem;\n}\n.item_nav .item_tab[data-v-2ed5d413] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: gray;\n}\n.item_nav .item_tab.active[data-v-2ed5d413] {\n      color: black;\n}\n.item_nav .item-tabbar-line[data-v-2ed5d413] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 0.125rem;\n}\n.item_nav .item-tabbar-line .slide-line[data-v-2ed5d413] {\n      width: 1rem;\n      height: 0.125rem;\n      position: absolute;\n      left: -1rem;\n      background-color: #53a2e3;\n      -webkit-transition: all 100ms;\n      transition: all 100ms;\n      border-radius: 5px;\n}\n.item_nav .item-tabbar-line.line0 .slide-line[data-v-2ed5d413] {\n      -webkit-transform: translateX(2.375rem);\n              transform: translateX(2.375rem);\n}\n.item_nav .item-tabbar-line.line1 .slide-line[data-v-2ed5d413] {\n      -webkit-transform: translateX(6.125rem);\n              transform: translateX(6.125rem);\n}\n.item_nav .item-tabbar-line.line2 .slide-line[data-v-2ed5d413] {\n      -webkit-transform: translateX(9.875rem);\n              transform: translateX(9.875rem);\n}\n.item_nav .item-tabbar-line.line3 .slide-line[data-v-2ed5d413] {\n      -webkit-transform: translateX(13.625rem);\n              transform: translateX(13.625rem);\n}\n.item_nav .item-tabbar-line.line4 .slide-line[data-v-2ed5d413] {\n      -webkit-transform: translateX(17.375rem);\n              transform: translateX(17.375rem);\n}\n.item_li[data-v-2ed5d413] {\n  padding: 0.75rem 0.75rem;\n  border-bottom: 1px solid #eee;\n}\n.item_li_top[data-v-2ed5d413] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: gray;\n}\n.item_status span[data-v-2ed5d413] {\n  color: #FFB72C;\n}\n.item_li_content[data-v-2ed5d413] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.item_discribe[data-v-2ed5d413] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.item_img[data-v-2ed5d413] {\n  width: 5rem;\n  height: 5rem;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  background-size: cover;\n}\n.item_name[data-v-2ed5d413] {\n  color: #000000;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 11.5rem;\n  height: 1rem;\n}\n.item_num[data-v-2ed5d413] {\n  color: gray;\n}\n.item_pay[data-v-2ed5d413] {\n  color: gray;\n}\n.item_pay span[data-v-2ed5d413] {\n  color: #000000;\n}\n.item_btn[data-v-2ed5d413] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.item_confirm[data-v-2ed5d413] {\n  color: #FFB72C;\n  border: 1px solid #FFB72C;\n  height: 1rem;\n  width: 3.5rem;\n  text-align: center;\n  border-radius: 5px;\n  line-height: 1rem;\n}\n'],sourceRoot:""}])},"c/Tr":function(e,t,a){e.exports={default:a("5zde"),__esModule:!0}},fBQ2:function(e,t,a){"use strict";var n=a("evD5"),r=a("X8DO");e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},gt2O:function(e,t,a){"use strict";function n(e){a("Jnaq")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("A3Yo"),i=a("1HbR"),s=a("VU/8"),o=n,l=s(r.a,i.a,!1,o,"data-v-2ed5d413",null);t.default=l.exports},qyJz:function(e,t,a){"use strict";var n=a("+ZMJ"),r=a("kM2E"),i=a("sB3e"),s=a("msXi"),o=a("Mhyx"),l=a("QRG4"),A=a("fBQ2"),d=a("3fs2");r(r.S+r.F*!a("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,c,m=i(e),_="function"==typeof this?this:Array,C=arguments.length,b=C>1?arguments[1]:void 0,f=void 0!==b,p=0,u=d(m);if(f&&(b=n(b,C>2?arguments[2]:void 0,2)),void 0==u||_==Array&&o(u))for(t=l(m.length),a=new _(t);t>p;p++)A(a,p,f?b(m[p],p):m[p]);else for(c=u.call(m),a=new _;!(r=c.next()).done;p++)A(a,p,f?s(c,b,[r.value,p],!0):r.value);return a.length=p,a}})}});