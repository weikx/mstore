webpackJsonp([2],{"5zde":function(e,t,o){o("zQR9"),o("qyJz"),e.exports=o("FeBl").Array.from},Gu7T:function(e,t,o){"use strict";t.__esModule=!0;var n=o("c/Tr"),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return(0,r.default)(e)}},KC5n:function(e,t,o){"use strict";function n(e,t){var t=t||300;return new l.a(function(o,n){setTimeout(function(){o(e)},t)})}var r=o("Gu7T"),a=o.n(r),i=o("//Fk"),l=o.n(i);t.a={name:"recommend",data:function(){return{moredata:[],scrollbar:!1,scrollbarFade:!0,pullDownRefresh:!0,pullDownRefreshThreshold:90,pullDownRefreshStop:40,pullUpLoad:!0,pullUpLoadThreshold:90,pageMore:0}},computed:{scrollbarObj:function(){return!!this.scrollbar&&{fade:this.scrollbarFade}},pullDownRefreshObj:function(){return!!this.pullDownRefresh&&{threshold:parseInt(this.pullDownRefreshThreshold),stop:parseInt(this.pullDownRefreshStop)}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:parseInt(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},created:function(){var e=this;this.fetchData().then(function(t){e.moredata=t.moredata})},methods:{itemClick:function(){alert("商品点击")},fetchData:function(){for(var e={moredata:[]},t=0;t<8;)e.moredata.push({url:"/mstore/static/images/etanru.jpg",price:1e3*t,pingpai:"商品品牌",desc:"商品品描述2商品品描述2商品品描述2商品品描述2商品品描述2"}),t++;return this.pageMore++,this.pageMore>3&&(e.moredata=[]),n(e,600)},onPullingDown:function(){var e=this;this.pageMore=0,this.fetchData().then(function(t){t?(e.moredata=t.moredata,e.$refs.scroll.forceUpdate(!0)):e.$refs.scroll.forceUpdate()})},onPullingUp:function(){var e=this;this.fetchData().then(function(t){t.moredata.length>0?(e.moredata=[].concat(a()(t.moredata),a()(e.moredata)),console.log(e.moredata.length),e.$nextTick(function(t){e.$refs.scroll.forceUpdate(!0)})):e.$nextTick(function(t){e.$refs.scroll.forceUpdate()})})}}}},TQFx:function(e,t,o){t=e.exports=o("FZ+f")(!0),t.push([e.i,".header[data-v-2e0137c3]{background-color:#fff;color:#000;border-bottom:1px solid #eee;height:2.5rem}.more-item[data-v-2e0137c3]{width:17.75rem;height:11.375rem}.category-tab-list[data-v-2e0137c3]{width:18.75rem;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff}.category-tab-list .category-tab-scroll[data-v-2e0137c3],.category-tab-list[data-v-2e0137c3]{-webkit-box-flex:1;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;justify-content:center}.category-tab-list .category-tab-scroll[data-v-2e0137c3]{width:17.75rem;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;overflow:hidden;-ms-flex-pack:center}.category-tab-list .listView[data-v-2e0137c3]{width:17.75rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.category-right[data-v-2e0137c3]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:.375rem}.category-right .category-list-sub[data-v-2e0137c3]{margin-top:.375rem}.category-right .category-list-sub .sub-title[data-v-2e0137c3]{font-weight:700}.category-right .category-list-sub .sub-list[data-v-2e0137c3]{background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.category-right .category-list-sub .sub-list .sub-item[data-v-2e0137c3]{width:4.25rem;height:5rem}.category-right .category-list-sub .sub-list .sub-item .sub-item-box span[data-v-2e0137c3]{padding-top:.375rem;display:-webkit-box;display:-ms-flexbox;display:flex}","",{version:3,sources:["I:/mstore/src/views/recommend.vue"],names:[],mappings:"AAQA,yBACE,sBAAuB,AACvB,WAAY,AACZ,6BAA8B,AAC9B,aAAe,CAChB,AACD,4BAGE,eAAgB,AAChB,gBAAkB,CACnB,AACD,oCACE,eAAgB,AAEZ,WAAY,AACR,OAAQ,AAOZ,0BAA2B,AACvB,sBAAuB,AAE3B,qBAAsB,AAE1B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAA0B,CAC3B,AACD,6FAnBE,mBAAoB,AAGpB,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAG9B,wBAAyB,AAEjB,sBAAwB,CAuBjC,AAjBD,yDACI,eAAgB,AAEZ,WAAY,AACR,OAAQ,AAGZ,0BAA2B,AACvB,sBAAuB,AAC/B,gBAAiB,AAGb,oBAAsB,CAK7B,AACD,8CACI,eAAgB,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,eAAiB,CACpB,AACD,iCACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,eAAuB,CAIxB,AACD,oDACI,kBAAqB,CACxB,AACD,+DACM,eAAkB,CACvB,AACD,8DACM,sBAA0B,AAC1B,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACzB,AACD,wEACQ,cAAe,AACf,WAAa,CACpB,AACD,2FACU,oBAAsB,AACtB,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACvB",file:"recommend.vue",sourcesContent:['\n@charset "UTF-8";\n/* ==================================================\r\n * \t\t\t \t\t 全局Sass变量\r\n * \t这里简单介绍下CSS的布局，这里采用主流的Flexbox,\r\n *  在高度上采取固定Px，宽度自适应, 在布局上有参考下\r\n *  Framework7 的布局,在一些宽度上采用rem来优化多终端的适应\r\n * ================================================= */\n.header[data-v-2e0137c3] {\n  background-color: #fff;\n  color: #000;\n  border-bottom: 1px solid #eee;\n  height: 2.5rem;\n}\n.more-item[data-v-2e0137c3] {\n  /*display: flex;*/\n  /*flex-wrap: wrap;*/\n  width: 17.75rem;\n  height: 11.375rem;\n}\n.category-tab-list[data-v-2e0137c3] {\n  width: 18.75rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #ffffff;\n}\n.category-tab-list .category-tab-scroll[data-v-2e0137c3] {\n    width: 17.75rem;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n    position: relative;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.category-tab-list .listView[data-v-2e0137c3] {\n    width: 17.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n}\n.category-right[data-v-2e0137c3] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.category-right .category-list-sub[data-v-2e0137c3] {\n    margin-top: 0.375rem;\n}\n.category-right .category-list-sub .sub-title[data-v-2e0137c3] {\n      font-weight: bold;\n}\n.category-right .category-list-sub .sub-list[data-v-2e0137c3] {\n      background-color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.category-right .category-list-sub .sub-list .sub-item[data-v-2e0137c3] {\n        width: 4.25rem;\n        height: 5rem;\n}\n.category-right .category-list-sub .sub-list .sub-item .sub-item-box span[data-v-2e0137c3] {\n          padding-top: 0.375rem;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n}\n'],sourceRoot:""}])},"c/Tr":function(e,t,o){e.exports={default:o("5zde"),__esModule:!0}},fBQ2:function(e,t,o){"use strict";var n=o("evD5"),r=o("X8DO");e.exports=function(e,t,o){t in e?n.f(e,t,r(0,o)):e[t]=o}},jLr7:function(e,t,o){var n=o("TQFx");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o("rjj0")("046ab12c",n,!0)},qyJz:function(e,t,o){"use strict";var n=o("+ZMJ"),r=o("kM2E"),a=o("sB3e"),i=o("msXi"),l=o("Mhyx"),s=o("QRG4"),A=o("fBQ2"),c=o("3fs2");r(r.S+r.F*!o("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,o,r,d,f=a(e),u="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,m=void 0!==p,B=0,x=c(f);if(m&&(p=n(p,b>2?arguments[2]:void 0,2)),void 0==x||u==Array&&l(x))for(t=s(f.length),o=new u(t);t>B;B++)A(o,B,m?p(f[B],B):f[B]);else for(d=x.call(f),o=new u;!(r=d.next()).done;B++)A(o,B,m?i(d,p,[r.value,B],!0):r.value);return o.length=B,o}})},uoVp:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page full flex flex-col"},[o("mt-header",{staticClass:"header",attrs:{title:"精品推荐"}},[o("mt-button",{staticClass:"btn",attrs:{slot:"left",icon:"back"},on:{click:function(t){e.pageBack()}},slot:"left"})],1),e._v(" "),o("div",{staticClass:"category-tab-list"},[e.moredata.length>0?o("div",{staticClass:"category-tab-scroll"},[o("scroll",{ref:"scroll",attrs:{scrollbar:e.scrollbarObj,pullDownRefresh:e.pullDownRefreshObj,pullUpLoad:e.pullUpLoadObj},on:{pullingDown:e.onPullingDown,pullingUp:e.onPullingUp}},[o("div",{staticClass:"listView"},e._l(e.moredata,function(t,n){return o("duo-pin-box",{key:n,staticClass:"more-item",attrs:{goShop:!1},on:{itemClick:e.itemClick}})}))])],1):o("data-empty")],1)],1)},r=[],a={render:n,staticRenderFns:r};t.a=a},we1U:function(e,t,o){"use strict";function n(e){o("jLr7")}Object.defineProperty(t,"__esModule",{value:!0});var r=o("KC5n"),a=o("uoVp"),i=o("VU/8"),l=n,s=i(r.a,a.a,!1,l,"data-v-2e0137c3",null);t.default=s.exports}});