(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-life-life"],{"02db":function(t,i,e){"use strict";var n=e("4ea4");e("99af"),e("c740"),e("fb6a"),e("a434"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var r=n(e("1da1")),a={name:"u-waterfall",props:{value:{type:Array,required:!0,default:function(){return[]}},addTime:{type:[Number,String],default:200},idKey:{type:String,default:"id"}},data:function(){return{leftList:[],rightList:[],tempList:[],children:[]}},watch:{copyFlowList:function(t,i){var e=Array.isArray(i)&&i.length>0?i.length:0;this.tempList=this.tempList.concat(this.cloneData(t.slice(e))),this.splitData()}},mounted:function(){this.tempList=this.cloneData(this.copyFlowList),this.splitData()},computed:{copyFlowList:function(){return this.cloneData(this.value)}},methods:{splitData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function i(){var e,n,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t.tempList.length){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,t.$uGetRect("#u-left-column");case 4:return e=i.sent,i.next=7,t.$uGetRect("#u-right-column");case 7:if(n=i.sent,r=t.tempList[0],r){i.next=11;break}return i.abrupt("return");case 11:e.height<n.height?t.leftList.push(r):e.height>n.height?t.rightList.push(r):t.leftList.length<=t.rightList.length?t.leftList.push(r):t.rightList.push(r),t.tempList.splice(0,1),t.tempList.length&&setTimeout((function(){t.splitData()}),t.addTime);case 14:case"end":return i.stop()}}),i)})))()},cloneData:function(t){return JSON.parse(JSON.stringify(t))},clear:function(){this.leftList=[],this.rightList=[],this.$emit("input",[]),this.tempList=[]},remove:function(t){var i=this,e=-1;e=this.leftList.findIndex((function(e){return e[i.idKey]==t})),-1!=e?this.leftList.splice(e,1):(e=this.rightList.findIndex((function(e){return e[i.idKey]==t})),-1!=e&&this.rightList.splice(e,1)),e=this.value.findIndex((function(e){return e[i.idKey]==t})),-1!=e&&this.$emit("input",this.value.splice(e,1))},modify:function(t,i,e){var n=this,r=-1;if(r=this.leftList.findIndex((function(i){return i[n.idKey]==t})),-1!=r?this.leftList[r][i]=e:(r=this.rightList.findIndex((function(i){return i[n.idKey]==t})),-1!=r&&(this.rightList[r][i]=e)),r=this.value.findIndex((function(i){return i[n.idKey]==t})),-1!=r){var a=this.cloneData(this.value);a[r][i]=e,this.$emit("input",a)}}}};i.default=a},"0906":function(t,i,e){t.exports=e.p+"static/img/life_bg.c1b7997c.png"},"0d52":function(t,i,e){"use strict";e.r(i);var n=e("749c"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},"121d":function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={uSwiper:e("8acc").default,uWaterfall:e("d13b").default,uLazyLoad:e("76aa").default},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"p-10"},[e("v-uni-scroll-view",{attrs:{"scroll-x":"true"}},[e("v-uni-view",{staticClass:"flex-a-center f-c-w w-vh tab-dv"},t._l(t.data.tab,(function(i,n){return e("v-uni-view",{key:n,staticClass:"wx-t t-a-center"},[e("v-uni-view",{staticClass:"p-10 flex-j-center",class:{active:t.active===n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change(n)}}},[e("v-uni-view",{staticClass:"wx-t"},[t._v(t._s(i.title))])],1),e("v-uni-view",{staticClass:"flex-j-center wx-t"},[e("v-uni-view",{staticClass:"bb bb1",class:{"bb-act":t.active===n}})],1)],1)})),1)],1),e("v-uni-view",{staticClass:"m-t10"},[e("u-swiper",{attrs:{mode:"none","bg-color":" ","border-radius":"20",list:t.data.banner,name:"picUrl",effect3d:!0}})],1),e("v-uni-view",{staticClass:"m-t-b10 flex-j-around"},t._l(t.data.kkong,(function(i,n){return e("v-uni-view",{key:n,staticClass:"t-a-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump(i.link)}}},[e("v-uni-image",{staticClass:"toc",attrs:{src:i.picUrl}}),e("v-uni-view",{},[t._v(t._s(i.title))])],1)})),1),e("v-uni-view",{staticClass:"m-t10"},[e("v-uni-scroll-view",{staticClass:"h-vh",attrs:{"scroll-y":"true"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)}}},[t.list.length>0?e("u-waterfall",{ref:"uWaterfall",scopedSlots:t._u([{key:"left",fn:function(i){var n=i.leftList;return t._l(n,(function(i,n){return e("v-uni-view",{key:n,staticClass:"demo-warter m-b20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump(i.detailUrl)}}},[e("u-lazy-load",{attrs:{threshold:"-450","border-radius":"10",image:i.pic,index:n}}),e("v-uni-view",{staticClass:"demo-title lh20 f-w-bold m-t-b10"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"flex-j-between f-c-9 f-size12 a-center"},[e("v-uni-view",{staticClass:"flex-a-center"},[e("v-uni-image",{staticClass:"avatar m-r10",attrs:{src:i.author.avatar}}),e("v-uni-view",[t._v(t._s(i.author.nickname))])],1),e("v-uni-view",[t._v(t._s(i.readingNum)+"阅读")])],1)],1)}))}},{key:"right",fn:function(i){var n=i.rightList;return t._l(n,(function(i,n){return e("v-uni-view",{key:n,staticClass:"demo-warter m-l10 m-b20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump(i.detailUrl)}}},[e("u-lazy-load",{attrs:{threshold:"-450","border-radius":"10",image:i.pic,index:n}}),e("v-uni-view",{staticClass:"demo-title lh20 f-w-bold m-t-b10"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"flex-j-between f-c-9 f-size12 a-center"},[e("v-uni-view",{staticClass:"flex-a-center"},[e("v-uni-image",{staticClass:"avatar m-r10",attrs:{src:i.author.avatar}}),e("v-uni-view",[t._v(t._s(i.author.nickname))])],1),e("v-uni-view",[t._v(t._s(i.readingNum)+"阅读")])],1)],1)}))}}],null,!1,953105087),model:{value:t.list,callback:function(i){t.list=i},expression:"list"}}):t._e()],1)],1)],1)},a=[]},"171d":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-wrap[data-v-62a92f18]{background-color:#eee;overflow:hidden}.u-lazy-item[data-v-62a92f18]{width:100%;-webkit-transform:transition3d(0,0,0);transform:transition3d(0,0,0);will-change:transform;display:block}',""]),t.exports=i},"1fc1":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.active[data-v-4b15add8]{font-size:20px}.bb[data-v-4b15add8]{border-bottom:%?8?% solid #f2b830}.bb-act[data-v-4b15add8]{border-bottom:%?8?% solid #fff;width:%?40?%}.toc[data-v-4b15add8]{width:%?80?%;height:%?80?%}.avatar[data-v-4b15add8]{width:%?60?%;height:%?60?%;border-radius:100%}.wx-t[data-v-4b15add8]{width:%?160?%}',""]),t.exports=i},"287c":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e("8f44")),a={components:{tab:r.default},props:{},data:function(){return{data:null}},methods:{getData:function(){var t=this;this.$api.life.bktrSimple().then((function(i){t.data=i.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getData()},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};i.default=a},"30a9":function(t,i,e){var n=e("7f7b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("440566fb",n,!0,{sourceMap:!1,shadowMode:!1})},"30ac":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-wrap",class:"u-lazy-item-"+t.elIndex,style:{opacity:Number(t.opacity),borderRadius:t.borderRadius+"rpx",transition:"opacity "+t.time/1e3+"s ease-in-out"}},[e("v-uni-view",{class:"u-lazy-item-"+t.elIndex},[t.isError?e("v-uni-image",{staticClass:"u-lazy-item error",style:{borderRadius:t.borderRadius+"rpx",height:t.imgHeight},attrs:{src:t.errorImg,mode:t.imgMode},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.errorImgLoaded.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickImg.apply(void 0,arguments)}}}):e("v-uni-image",{staticClass:"u-lazy-item",style:{borderRadius:t.borderRadius+"rpx",height:t.imgHeight},attrs:{src:t.isShow?t.image:t.loadingImg,mode:t.imgMode},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.imgLoaded.apply(void 0,arguments)},error:function(i){arguments[0]=i=t.$handleEvent(i),t.loadError.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickImg.apply(void 0,arguments)}}})],1)],1)},a=[]},"34d9":function(t,i,e){"use strict";var n=e("cba0"),r=e.n(n);r.a},"4cee":function(t,i,e){var n=e("171d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("0212e57d",n,!0,{sourceMap:!1,shadowMode:!1})},5859:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-waterfall"},[e("v-uni-view",{staticClass:"u-column",attrs:{id:"u-left-column"}},[t._t("left",null,{leftList:t.leftList})],2),e("v-uni-view",{staticClass:"u-column",attrs:{id:"u-right-column"}},[t._t("right",null,{rightList:t.rightList})],2)],1)},a=[]},"5e34":function(t,i,e){"use strict";e.r(i);var n=e("d2d6"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},"6cb1":function(t,i,e){"use strict";e.r(i);var n=e("d5ac"),r=e("822e");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("d612");var o,s=e("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"11c9bb94",null,!1,n["a"],o);i["default"]=u.exports},"749c":function(t,i,e){"use strict";e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={components:{},props:{data:{type:Object}},data:function(){return{active:0,page:1,pageSize:10,list:[]}},methods:{jump:function(t){window.location.href=t},lower:function(){this.page++,this.getData()},change:function(t){this.list=[],this.active=t,this.getData()},getData:function(){var t=this;this.$api.life.getHomeTab(this.data.tab[this.active].id,this.page,this.pageSize).then((function(i){t.list=t.list.concat(i.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getData()},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};i.default=n},"76aa":function(t,i,e){"use strict";e.r(i);var n=e("30ac"),r=e("9935");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("980d");var o,s=e("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"62a92f18",null,!1,n["a"],o);i["default"]=u.exports},"7f7b":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-waterfall[data-v-b5825dec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nflex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.u-column[data-v-b5825dec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;height:auto}.u-image[data-v-b5825dec]{width:100%}',""]),t.exports=i},"822e":function(t,i,e){"use strict";e.r(i);var n=e("287c"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},"8acc":function(t,i,e){"use strict";e.r(i);var n=e("d7f9"),r=e("5e34");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("fd01");var o,s=e("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"71f0b7e9",null,!1,n["a"],o);i["default"]=u.exports},"8f44":function(t,i,e){"use strict";e.r(i);var n=e("121d"),r=e("0d52");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("34d9");var o,s=e("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4b15add8",null,!1,n["a"],o);i["default"]=u.exports},9176:function(t,i,e){var n=e("9cf6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("6726588e",n,!0,{sourceMap:!1,shadowMode:!1})},"980d":function(t,i,e){"use strict";var n=e("4cee"),r=e.n(n);r.a},9935:function(t,i,e){"use strict";e.r(i);var n=e("c9aa"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},"9cf6":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-swiper-wrap[data-v-71f0b7e9]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-71f0b7e9]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-71f0b7e9]{padding:0 %?24?%;position:absolute;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nwidth:100%;z-index:1}.u-indicator-item-rect[data-v-71f0b7e9]{width:%?26?%;height:%?8?%;margin:0 %?6?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-71f0b7e9]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-71f0b7e9]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;-webkit-transition:all .5s;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-71f0b7e9]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-71f0b7e9]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-71f0b7e9]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-71f0b7e9]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-transition:all .5s;transition:all .5s;overflow:hidden;-webkit-box-sizing:content-box;box-sizing:initial;position:relative}.u-swiper-title[data-v-71f0b7e9]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-71f0b7e9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=i},"9e32":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.title[data-v-11c9bb94]{width:%?150?%;height:%?60?%}.tab-t[data-v-11c9bb94]{margin-top:%?-470?%}',""]),t.exports=i},b0c6:function(t,i,e){var n=e("9e32");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("24a45af2",n,!0,{sourceMap:!1,shadowMode:!1})},c9aa:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-lazy-load",props:{index:{type:[Number,String]},image:{type:String,default:""},imgMode:{type:String,default:"widthFix"},loadingImg:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM0QjNBQjkyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM0QjNBQkEyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzRCM0FCNzJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzRCM0FCODJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtRHfPcAAAAzUExURZWVldfX18PDw62trZubm9zc3Li4uKGhoebm5tLS0uHh4c3Nzaenp729vcjIyLKysuvr6141L40AAAcXSURBVHja7NzZlqpGAEBR5lG0//9rIw7IJKJi4or7PGTdtN10wr5SVAEGf/qqArsAiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAg+nmQFMi5Jis+sIniED23jSzIgLTtg2D//iYme/8QBM/9lQ+CAEhbNLM3N9hEHAThX7GPCiBfAxK1b51kD+R7QMLjXg7iCsgWIPUh7pfVozG791oeBPngm48G583uW5GkBvI+SBaM2xXDn1oqum423bX/mgF5FySc2cv93Voug9TdZotsggnkBZB2NzbhrSY5HnoG07jei8dvzsJB/c3W60SALILE46+WCztsbhPR7R2VJq0ukEcT49nyy8QhaKcRa3fYHZD4+ufqOJAcgDz8/59vtw1I3QP5K6JsOG0vm3hce4I8LQp/BaRZGJC3AAn7IKOKXbC+7EdA5vdmmVwOLksgRThqOqiH4XEGsht+peoPUE8U/jJIO5OLH4GEwUslV5G0PTBG5Uiw/Y2jyigO3l9HAHKv9PYb82LloH74dZBoBUgar+l48NsNvtD0fkez9iwrAvIYZDRCl+Xs149Hm/KZmQ+QjUCiO1ei4ru7EsgnQYrkznlQb7thCuRfAzlOAPN72427P4VA/i2Q/DKT/Ls/VR8fvIBsDZIuz7TPF6TCbnk4GJkB2RokejTjuE7/unlgCuSTIO0Cy+Plp6vDfnQlBchy8QtjSHVd3EgmK1bHLm+H6+nXYbz2DuQRSPnqoL7vvq0u70on4zvxgCyWD3b9UyDVdW24PaWaiGTnFZJwPIQAebDpIKheBIm7n124ZthMJipAlkqHO+IZkP1tbfzOJark/A7MgKyvvl60fRqkvXfhuow+t9+q00+0/yyBrK8ZngOtBzldhw2X9tvpNGty0gvkmbPeJ0Cy/r09s/stbmfo0yMWkEdjevgKyOn2t2pxv7UXoibTdCDLje9/Ww1ymqzn87dbp92242ZmMRjI8hASvwKSLq4udqN6ksw8nxXN3tszD9L8Gkg+2mFrQYql5az4tvFj5xOx4VwnSdeBtGdyPwUytxK77pBVlNHdO7OK3rh/eTPUvdutT3fO52tuHMqD4N7llv8pyOQQ//w19YVDfX27+Sfuby9/6nau4pdA8vEdOZuChEH/quHt0Jg+IRJ/5+PrHwKZXfjbDiS73Zo7mu5UkzX7uTsXe0e/7nC3ePf1O69+BUg2XDfZCqSqOu7rGVf8cHBe8zhC2b61dtUHXv0OkGo6ZL4JkpbRYXdUaFevivx2M/1GIOctNh949TtAoumQ+TpIHMX54CJu+8BDd8FkE5BqcZh/59XvAClmTvKfB0nDqIlHo3T70SftyW1eX9dXtgQJqs1f/Q6QaOa/7wmQKtxH8eiGoCRuovODIO3VxOMmruZbHrLyD7z6DSDtGyT7ew1kf9hNn07c986JTovzzem0Id9wUG+Vk/IDr34DSNR7huZJkMFT6vEhqrPx/j5cnlZML8N6/PAzh9Y99Flm5Yde/c9BquDOkvkKkMP58dA4qi9vivE8JOvGz/j8FokfPpr288+pH2ZPOZrLmeGD+7KOh6dqYWJ48ki7yUg0tz0go/fv/LLddfV3sgOLJyaGPY/zrSlh1a36Arkzoue9CyG35ze6E6/dzO2Ga0EGHqdRJIkfn9/8OEjTW8Vq91ZWh39FeehWA7Nu9ft8CpUEk1WWOyDF0OPyEU2Pnzf/bZC0P6IPzmAvu7KauQBVrgKpJ0tG2arHzX8e5Pb3PezNs/PrX+3JMyCLn9XXf37tPFHvt09WfCDDjx+yyn1/p1V11j7GnB/q3leLuVva79S/tzed+db08YpF4uOZtmz/9oXWMq6BCAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiAALELvqt/BBgACqVeUBXxcCkAAAAASUVORK5CYII="},errorImg:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdDMjhENDYyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDMjhENDcyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0MyOEQ0NDJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0MyOEQ0NTJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhLwhikAAAAzUExURZWVldfX162t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"},threshold:{type:[Number,String],default:100},duration:{type:[Number,String],default:500},effect:{type:String,default:"ease-in-out"},isEffect:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},height:{type:[Number,String],default:"450"}},data:function(){return{isShow:!1,opacity:1,time:this.duration,loadStatus:"",isError:!1,elIndex:this.$u.guid()}},computed:{getThreshold:function(){var t=uni.upx2px(Math.abs(this.threshold));return this.threshold<0?-t:t},imgHeight:function(){return this.$u.addUnit(this.height)}},created:function(){this.observer={}},watch:{isShow:function(t){var i=this;this.isEffect&&(this.time=0,this.opacity=0,setTimeout((function(){i.time=i.duration,i.opacity=1}),30))},image:function(t){t?(this.init(),this.isError=!1):this.isError=!0}},methods:{init:function(){this.isError=!1,this.loadStatus=""},clickImg:function(){0==this.isShow||this.isError,this.$emit("click",this.index)},imgLoaded:function(){""==this.loadStatus?this.loadStatus="lazyed":"lazyed"==this.loadStatus&&(this.loadStatus="loaded",this.$emit("load",this.index))},errorImgLoaded:function(){this.$emit("error",this.index)},loadError:function(){this.isError=!0},disconnectObserver:function(t){var i=this[t];i&&i.disconnect()}},beforeDestroy:function(){},mounted:function(){var t=this;this.$nextTick((function(){uni.$once("uOnReachBottom",(function(){t.isShow||(t.isShow=!0)}))})),setTimeout((function(){t.disconnectObserver("contentObserver");var i=uni.createIntersectionObserver(t);i.relativeToViewport({bottom:t.getThreshold}).observe(".u-lazy-item-"+t.elIndex,(function(i){i.intersectionRatio>0&&(t.isShow=!0,t.disconnectObserver("contentObserver"))})),t.contentObserver=i}),30)}};i.default=n},cba0:function(t,i,e){var n=e("1fc1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("ab0eaf64",n,!0,{sourceMap:!1,shadowMode:!1})},d13b:function(t,i,e){"use strict";e.r(i);var n=e("5859"),r=e("fb81");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("e05e");var o,s=e("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"b5825dec",null,!1,n["a"],o);i["default"]=u.exports},d2d6:function(t,i,e){"use strict";e("c975"),e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,i){t.length!==i.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var i=t.detail.current;this.uCurrent=i,this.$emit("change",i)},animationfinish:function(t){}}};i.default=n},d5ac:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-image",{staticClass:"wbfb",staticStyle:{top:"0","z-index":"-1"},attrs:{src:e("0906")}}),n("v-uni-view",{staticClass:"tab-t"},[n("v-uni-view",{staticClass:"flex-j-center p-tb20"},[n("v-uni-image",{staticClass:"title",attrs:{src:e("f37f")}})],1),t.data?n("tab",{attrs:{data:t.data}}):t._e()],1)],1)},a=[]},d612:function(t,i,e){"use strict";var n=e("b0c6"),r=e.n(n);r.a},d7f9:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[e("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)},animationfinish:function(i){arguments[0]=i=t.$handleEvent(i),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(i,n){return e("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[e("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.listClick(n)}}},[e("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:i[t.name]||i,mode:t.imgMode}}),t.title&&i.title?e("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(i.title))]):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(i,n){return e("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[e("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},a=[]},e05e:function(t,i,e){"use strict";var n=e("30a9"),r=e.n(n);r.a},f37f:function(t,i){t.exports="data:image/png;base64,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"},fb81:function(t,i,e){"use strict";e.r(i);var n=e("02db"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},fd01:function(t,i,e){"use strict";var n=e("9176"),r=e.n(n);r.a}}]);