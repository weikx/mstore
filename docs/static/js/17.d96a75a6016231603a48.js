webpackJsonp([17],{Twgf:function(a,e,t){"use strict";function i(a){t("gsxt")}Object.defineProperty(e,"__esModule",{value:!0});var n=t("l8Bu"),A=t("Z6ms"),o=t("VU/8"),r=i,s=o(n.a,A.a,!1,r,"data-v-aa6a2c60",null);e.default=s.exports},Z6ms:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"page full flex flex-col proile"},[t("mt-header",{staticClass:"header",attrs:{title:"个人中心"}}),a._v(" "),t("div",{staticClass:"proile-main flex flex-col"},[t("simple-scroll",{staticClass:"scroll-list",attrs:{direction:"vertical"}},[t("div",{staticClass:"item_content"},[t("div",{staticClass:"item_left"},[t("img",{attrs:{src:a.portrait}})]),a._v(" "),t("div",{staticClass:"item_right"},[t("p",{staticClass:"item_name"},[a._v(a._s(a.userName))]),a._v(" "),t("p",[a._v("工号:"+a._s(a.workNum))]),a._v(" "),t("p",[a._v(a._s(a.part))])])]),a._v(" "),t("div",{staticClass:"item_list flex-row flex"},[t("div",{on:{click:function(e){a.pagePush("/point")}}},[t("p",[t("span",{staticClass:"font-15"},[a._v(a._s(a.point))]),a._v("分")]),a._v(" "),t("p",{staticClass:"font-15"},[a._v("积分")])]),a._v(" "),t("div",{on:{click:function(e){a.pagePush("/coupons")}}},[t("p",[t("span",{staticClass:"font-15"},[a._v(a._s(a.coupons))]),a._v("张")]),a._v(" "),t("p",{staticClass:"font-15"},[a._v("票券")])]),a._v(" "),t("div",{on:{click:function(e){a.pagePush("/balance")}}},[t("p",[t("span",{staticClass:"font-15"},[a._v(a._s(a.balance))]),a._v("元")]),a._v(" "),t("p",{staticClass:"font-15"},[a._v("余额")])])]),a._v(" "),t("div",{staticClass:"item_order flex flex-row",on:{click:function(e){a.pagePush("/orderList")}}},[t("div",{staticClass:"item_order_left"},[t("p",{staticClass:"font-16 order"},[a._v("我的订单")]),a._v(" "),t("p",{staticClass:"gray order_describe"},[a._v("订单的记录都在这呢")])]),a._v(" "),t("div",{staticClass:"item_order_right gray"},[a._v("\n          查看所有订单 >\n        ")])]),a._v(" "),t("div",{staticClass:"item_order flex flex-row",on:{click:function(e){a.pagePush("/address")}}},[t("div",{staticClass:"item_order_left"},[t("p",{staticClass:"font-16 order"},[a._v("地址信息")]),a._v(" "),t("p",{staticClass:"gray order_describe"},[a._v(a._s(a.name)+" "+a._s(a.phone))])]),a._v(" "),t("div",{staticClass:"item_order_right gray"},[a._v("\n          "+a._s(a.addressDiscribe)+" >\n        ")])])])],1),a._v(" "),t("my-footer")],1)},n=[],A={render:i,staticRenderFns:n};e.a=A},gsxt:function(a,e,t){var i=t("z1Wo");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t("rjj0")("f90061a6",i,!0)},l8Bu:function(a,e,t){"use strict";var i=t("//Fk"),n=t.n(i),A=t("Dd8w"),o=t.n(A),r=t("NYxO");e.a={name:"profile",data:function(){return{loading:!0,cartList:[],userName:"悟空",workNum:"1254232",portrait:"/mstore/static/images/test.jpg",part:"市场部",point:100,coupons:10,balance:10,name:"李小白",phone:15253545122,addressDiscribe:"公司地址"}},computed:o()({},t.i(r.a)("cart",{list:function(a){return a.list}}),t.i(r.b)("cart",["totalPrice"])),created:function(){var a=this;this.getCartList().then(function(e){a.loading=!1,console.log(a.list),console.log(a.totalPrice)})},methods:o()({},t.i(r.c)("cart",["getCartList"]),{handleDetail:function(a){this.pagePush({path:"/detail/"+a})},addList:function(){var a=this;this.$store.dispatch("addList",this.value).then(function(e){console.log(a.$store.state),a.$messagebox.alert(e.msg)}).catch(function(e){a.$messagebox.alert("出错了")})},nana:function(){return new n.a(function(a){setTimeout(function(){a("es8")},2e3)})},handleClick:function(){this.back("/login")},handleClick2:function(){this.pagePush("/wallet")},handleAddressPage:function(){console.log(this)}})}},z1Wo:function(a,e,t){e=a.exports=t("FZ+f")(!0),e.push([a.i,".scroll-list[data-v-aa6a2c60]{-webkit-box-flex:1;-ms-flex:1;flex:1;background:#fff;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.header[data-v-aa6a2c60]{background-color:#fff;color:#000;border-bottom:1px solid #eee;height:2.5rem}.proile-main[data-v-aa6a2c60]{margin-top:.375rem;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:fff}.item_content[data-v-aa6a2c60]{height:4rem;overflow:hidden;width:18.75rem}.item_left[data-v-aa6a2c60]{margin-left:1rem;margin-top:.5rem;float:left}.item_left[data-v-aa6a2c60],.item_left img[data-v-aa6a2c60]{width:3rem;height:3rem;overflow:hidden;border-radius:120px}.item_right[data-v-aa6a2c60]{float:left;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;height:4rem;color:#666;font-size:12px;margin-left:1.25rem}.item_right p[data-v-aa6a2c60]{line-height:1rem}.item_name[data-v-aa6a2c60]{font-size:15px;color:#000}.item_list[data-v-aa6a2c60]{margin-top:1rem}.item_list div[data-v-aa6a2c60]{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;color:#9b9b9b}.item_list div span[data-v-aa6a2c60]{color:#ffcd00}.item_list p[data-v-aa6a2c60]{margin-top:.25rem}.item_order[data-v-aa6a2c60]{margin-top:1.75rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gray[data-v-aa6a2c60]{color:#999}.item_order_left[data-v-aa6a2c60]{margin-left:.75rem}.item_order_right[data-v-aa6a2c60]{margin-right:.75rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.order_describe[data-v-aa6a2c60]{padding-top:.25rem}.order[data-v-aa6a2c60]{color:#555}","",{version:3,sources:["I:/mstore/src/views/Profile.vue"],names:[],mappings:"AAQA,8BACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAoB,AACpB,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,yBACE,sBAAuB,AACvB,WAAY,AACZ,6BAA8B,AAC9B,aAAe,CAChB,AACD,8BACE,mBAAqB,AACrB,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAsB,CACvB,AACD,+BACE,YAAa,AACb,gBAAiB,AACjB,cAAgB,CACjB,AACD,4BAKE,iBAAkB,AAClB,iBAAmB,AACnB,UAAY,CACb,AACD,4DARE,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,mBAAqB,CAUtB,AACD,6BACE,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,4BAA6B,AAC7B,6BAA8B,AAC1B,qBAAsB,AAClB,iBAAkB,AAC1B,YAAa,AACb,WAAY,AACZ,eAAgB,AAChB,mBAAqB,CACtB,AACD,+BACE,gBAAkB,CACnB,AACD,4BACE,eAAgB,AAChB,UAAY,CACb,AACD,4BACE,eAAiB,CAClB,AACD,gCACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,kBAAmB,AACnB,aAAe,CAChB,AACD,qCACE,aAAe,CAChB,AACD,8BACE,iBAAoB,CACrB,AACD,6BACE,mBAAoB,AACpB,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CACxC,AACD,uBACE,UAAY,CACb,AACD,kCACE,kBAAqB,CACtB,AACD,mCACE,oBAAsB,AACtB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AAChB,oBAAsB,CAC/B,AACD,iCACE,kBAAqB,CACtB,AACD,wBACE,UAAe,CAChB",file:"Profile.vue",sourcesContent:['\n@charset "UTF-8";\n/* ==================================================\r\n * \t\t\t \t\t 全局Sass变量\r\n * \t这里简单介绍下CSS的布局，这里采用主流的Flexbox,\r\n *  在高度上采取固定Px，宽度自适应, 在布局上有参考下\r\n *  Framework7 的布局,在一些宽度上采用rem来优化多终端的适应\r\n * ================================================= */\n.scroll-list[data-v-aa6a2c60] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background: #ffffff;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.header[data-v-aa6a2c60] {\n  background-color: #fff;\n  color: #000;\n  border-bottom: 1px solid #eee;\n  height: 2.5rem;\n}\n.proile-main[data-v-aa6a2c60] {\n  margin-top: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background-color: fff;\n}\n.item_content[data-v-aa6a2c60] {\n  height: 4rem;\n  overflow: hidden;\n  width: 18.75rem;\n}\n.item_left[data-v-aa6a2c60] {\n  width: 3rem;\n  height: 3rem;\n  overflow: hidden;\n  border-radius: 120px;\n  margin-left: 1rem;\n  margin-top: 0.5rem;\n  float: left;\n}\n.item_left img[data-v-aa6a2c60] {\n  width: 3rem;\n  height: 3rem;\n  overflow: hidden;\n  border-radius: 120px;\n}\n.item_right[data-v-aa6a2c60] {\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  height: 4rem;\n  color: #666;\n  font-size: 12px;\n  margin-left: 1.25rem;\n}\n.item_right p[data-v-aa6a2c60] {\n  line-height: 1rem;\n}\n.item_name[data-v-aa6a2c60] {\n  font-size: 15px;\n  color: #000;\n}\n.item_list[data-v-aa6a2c60] {\n  margin-top: 1rem;\n}\n.item_list div[data-v-aa6a2c60] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  color: #9B9B9B;\n}\n.item_list div span[data-v-aa6a2c60] {\n  color: #FFCD00;\n}\n.item_list p[data-v-aa6a2c60] {\n  margin-top: 0.25rem;\n}\n.item_order[data-v-aa6a2c60] {\n  margin-top: 1.75rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.gray[data-v-aa6a2c60] {\n  color: #999;\n}\n.item_order_left[data-v-aa6a2c60] {\n  margin-left: 0.75rem;\n}\n.item_order_right[data-v-aa6a2c60] {\n  margin-right: 0.75rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.order_describe[data-v-aa6a2c60] {\n  padding-top: 0.25rem;\n}\n.order[data-v-aa6a2c60] {\n  color: #555555;\n}\n'],sourceRoot:""}])}});