"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6609],{6609:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var n=r(9200),o=r(6252),u=r(2262),l=r(8637);r(9346),r(8576),r(6467),r(5260),r(442);const c={setup:function(t){var e=(0,l.oR)(),r=(e.dispatch,e.getters),c=e.state,a=((0,o.Fl)((function(){return c.productHandler.status})),(0,u.iH)(0));(0,o.Fl)((function(){return r["productHandler/getOrdersByStatus"](a.value)})),(0,o.Fl)((function(){return function(t){return r["productHandler/getOrderQuantities"](t)}}));return function(t,e){var r=(0,n.up)("RouterView");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n.Wm)(r)])}}}},6467:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(9200);var o=r(2262),u={class:"text-center flex flex-col gap-3 justify-center items-center py-10"},l={class:"max-w-[10rem] min-h-[10rem]"},c=(0,n._)("img",{src:"/pictures/empty.png",alt:"空圖示"},null,-1),a={class:"font-bold"},s=(0,n.Uk)("這裡甚麼都沒有"),i={class:"flex gap-3 font-bold"};const d={};var p=r(3744);const f=(0,p.Z)(d,[["render",function(t,e,r,o,d,p){return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",l,[(0,n.WI)(t.$slots,"image",{},(function(){return[c]}))]),(0,n._)("div",a,[(0,n.WI)(t.$slots,"default",{},(function(){return[s]}))]),(0,n._)("div",i,[(0,n.WI)(t.$slots,"button")])])}]]);var y=r(6252);const b={components:{EmptyItem:f},props:{data:{type:void 0,default:""}},setup:function(t){var e=(0,o.BK)(t).data,r=(0,y.Fl)((function(){return Object.prototype.toString.call(e.value)})),n=(0,y.Fl)((function(){switch(r.value){case"[object Array]":return 0===e.value.length;case"[object Object]":return 0===Object.keys(e.value).length;default:return!e.value}}));return{data:e,isNullOrEmpty:n}}},v=(0,p.Z)(b,[["render",function(t,e,r,o,u,l){var c=(0,n.up)("EmptyItem");return(0,n.wg)(),(0,n.iD)("div",null,[o.isNullOrEmpty?((0,n.wg)(),(0,n.j4)(c,{key:0},{button:(0,n.w5)((function(){return[(0,n.WI)(t.$slots,"button")]})),default:(0,n.w5)((function(){return[(0,n.WI)(t.$slots,"emptyText")]})),_:3})):(0,n.WI)(t.$slots,"default",{key:1})])}]])},442:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(9200),o={class:"flex flex-wrap flex-1"},u=["onClick"];var l=r(6252),c=r(2262);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d={props:{length:{type:Number,default:0},options:{type:[Array,Object],default:function(){return[]}},optionKey:{type:String,default:"id"},optionValueKey:{type:String,default:"value"},itemClass:{type:String,default:"py-4"},itemStyle:{type:Object,default:function(){return null}}},emits:["update:modelValue"],setup:function(t,e){var r=e.emit,n=e.attrs,o=(0,l.Fl)({get:function(){return n.modelValue},set:function(t){return r("update:modelValue",t)}});return s(s({},(0,c.BK)(t)),{},{modelValue:o})}};const p=(0,r(3744).Z)(d,[["render",function(t,e,r,l,c,a){return(0,n.wg)(),(0,n.iD)("ul",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.options,(function(e){return(0,n.wg)(),(0,n.iD)("li",{key:e[r.optionKey],class:(0,n.C_)(["bg-white text-center border-b-2 hover:cursor-pointer hover:text-blue-500 hover:font-bold duration-500 transition-[border]",l.modelValue===e[r.optionValueKey]?"border-blue-500 text-blue-500 font-bold":"border-slate-300",r.itemClass]),style:(0,n.j5)(r.itemStyle||{width:"".concat(1/(r.length||r.options.length)*100,"%")}),onClick:function(t){return l.modelValue=e[r.optionValueKey]}},[(0,n.WI)(t.$slots,"default",{item:e})],14,u)})),128))])}]])},5260:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(9200),o=(0,n.Uk)("前往購物");var u=r(6252),l=r(8637);const c={props:{category:{type:String,default:""},buttonClass:{type:String,default:""}},setup:function(t){var e=(0,l.oR)().getters,r=(0,u.Fl)((function(){return e["globalHandler/first_category"]}));return{category:(0,u.Fl)((function(){return t.category||r.value})),buttonClass:(0,u.Fl)((function(){return t.buttonClass}))}}};const a=(0,r(3744).Z)(c,[["render",function(t,e,r,u,l,c){var a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(a,{to:"/products/".concat(u.category)},{default:(0,n.w5)((function(){return[(0,n._)("button",{class:(0,n.C_)(["bg-yellow-500 font-bold hover:bg-yellow-400",u.buttonClass])},[(0,n.WI)(t.$slots,"default",{},(function(){return[o]}))],2)]})),_:3},8,["to"])}]])},9346:(t,e,r)=>{r.d(e,{Z:()=>d});var n=r(9200),o={class:"text-orange-500 font-bold"};var u=r(2262),l=r(8637);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const i={props:{price:{type:[String,Number],default:0}},setup:function(t){var e=(0,l.oR)().getters;return a(a({},(0,u.BK)(t)),{},{formattedPrice:function(t){return e["productHandler/getFormattedPrice"](t)}})}};const d=(0,r(3744).Z)(i,[["render",function(t,e,r,u,l,c){return(0,n.wg)(),(0,n.iD)("span",o,"NT$"+(0,n.zw)(u.formattedPrice(r.price)),1)}]])},8576:(t,e,r)=>{r.d(e,{Z:()=>z});var n=r(9200),o={class:"p-5 bg-white border-gray-300-sm"},u={class:"pb-3 flex justify-between border-b-2 border-slate-300 font-bold"},l={class:"flex"},c=[(0,n._)("div",{class:"group-hover:-translate-y-1 duration-500"}," 取消訂單 ",-1)],a=[(0,n._)("div",{class:"group-hover:-translate-y-1 duration-500"}," 恢復訂單 ",-1)],s=(0,n.Uk)(" 查看訂單詳情"),i={class:"flex justify-between pt-2"},d=(0,n._)("td",{class:"py-2.5 font-bold"},"訂單編號",-1),p={class:"py-2.5 px-5"},f=(0,n._)("td",{class:"py-2.5 font-bold"},"訂單時間",-1),y={class:"py-2.5 px-5"},b=(0,n._)("td",{class:"py-2.5 font-bold"},"收件人",-1),v={class:"py-2.5 px-5"},g=(0,n._)("td",{class:"py-2.5 font-bold"},"電話",-1),_={class:"py-2.5 px-5"},m=(0,n._)("td",{class:"py-2.5 font-bold"},"配送方式",-1),w={class:"py-2.5 px-5"},O=(0,n._)("td",{class:"py-2.5 font-bold"},"地址",-1),h={class:"py-2.5 px-5"},j={class:"mt-auto"},x=(0,n._)("td",{class:"font-bold py-2.5 text-right"},"商品價格",-1),k={class:"py-2.5 px-5"},P=(0,n._)("td",{class:"font-bold py-2.5 text-right"},"運費",-1),D={class:"py-2.5 px-5"},F=(0,n._)("td",{class:"font-bold py-2.5 text-right"},"總計",-1),C={class:"py-2.5 px-5"};var W=r(7757),S=r.n(W),H=r(2262),Z=r(6252),I=r(8637);function K(t,e,r,n,o,u,l){try{var c=t[u](l),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function V(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function l(t){K(u,n,o,l,c,"next",t)}function c(t){K(u,n,o,l,c,"throw",t)}l(void 0)}))}}const $={components:{FormattedPrice:r(9346).Z},props:{order:{type:Object,default:function(){return{}}}},setup:function(t){var e=(0,H.BK)(t).order,r=(0,I.oR)(),n=r.state,o=r.dispatch,u=(0,Z.Fl)((function(){return n.productHandler.status})),l=(0,Z.Fl)((function(){return u.value[e.value.status]})),c=(0,Z.Fl)((function(){return n.productHandler.delivery_options})),a=(0,Z.Fl)((function(){return n.productHandler.pay_method_options})),s=function(){var t=V(S().mark((function t(){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("productHandler/cancelOrder",{order:e.value});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=V(S().mark((function t(){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("productHandler/recoverOrder",{order:e.value});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{order:e,status:u,delivery_options:c,pay_method_options:a,cancelOrder:s,recoverOrder:i,cur_status:l}}};const z=(0,r(3744).Z)($,[["render",function(t,e,r,W,S,H){var Z=(0,n.up)("svg-render-vue"),I=(0,n.up)("router-link"),K=(0,n.up)("FormattedPrice");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",u,[(0,n._)("div",l,[(0,n._)("div",{class:(0,n.C_)(["mr-3 ",W.cur_status.color])},(0,n.zw)(W.cur_status.label),3),W.cur_status.cancelable?((0,n.wg)(),(0,n.iD)("div",{key:0,onClick:e[0]||(e[0]=function(){return W.cancelOrder&&W.cancelOrder.apply(W,arguments)}),class:"group px-3 border-l border-slate-300 text-red-500 hover:cursor-pointer"},c)):(0,n.kq)("",!0),W.cur_status.recoverable?((0,n.wg)(),(0,n.iD)("div",{key:1,onClick:e[1]||(e[1]=function(){return W.recoverOrder&&W.recoverOrder.apply(W,arguments)}),class:"group px-3 border-l border-slate-300 text-blue-500 hover:cursor-pointer"},a)):(0,n.kq)("",!0)]),(0,n.WI)(t.$slots,"link",{},(function(){return[(0,n.Wm)(I,{to:{path:"orders/".concat(W.order.id)},class:"hover:cursor-pointer hover:text-blue-500"},{default:(0,n.w5)((function(){return[s,(0,n.Wm)(Z,{type:"arrow_right",class:"ml-2"})]})),_:1},8,["to"])]}))]),(0,n._)("div",i,[(0,n._)("table",null,[(0,n._)("tr",null,[d,(0,n._)("td",p,(0,n.zw)(W.order.id),1)]),(0,n._)("tr",null,[f,(0,n._)("td",y,(0,n.zw)(W.order.updated_time),1)]),(0,n._)("tr",null,[b,(0,n._)("td",v,(0,n.zw)(W.order.name),1)]),(0,n._)("tr",null,[g,(0,n._)("td",_,(0,n.zw)(W.order.phone),1)]),(0,n._)("tr",null,[m,(0,n._)("td",w,(0,n.zw)(W.delivery_options[W.order.delivery_method].label),1)]),(0,n._)("tr",null,[O,(0,n._)("td",h,(0,n.zw)(W.order.address),1)])]),(0,n._)("table",j,[(0,n._)("tr",null,[x,(0,n._)("td",k,[(0,n.Wm)(K,{price:W.order.product_price},null,8,["price"])])]),(0,n._)("tr",null,[P,(0,n._)("td",D,[(0,n.Wm)(K,{price:W.order.delivery_fee},null,8,["price"])])]),(0,n._)("tr",null,[F,(0,n._)("td",C,[(0,n.Wm)(K,{price:W.order.total_price},null,8,["price"])])])])])])}]])}}]);