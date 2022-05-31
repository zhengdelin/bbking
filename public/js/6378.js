"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6378],{6378:(t,e,r)=>{r.r(e),r.d(e,{default:()=>y});var n=r(9200),o={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-3 min-h-[70vh]"},u=(0,n.Uk)("暫無商品");var c=r(7757),a=r.n(c),i=r(6252),s=r(2262),l=r(2119),p=r(8637),d=r(154),f=r(6467);function g(t,e,r,n,o,u,c){try{var a=t[u](c),i=a.value}catch(t){return void r(t)}a.done?e(i):Promise.resolve(i).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function c(t){g(u,n,o,c,a,"next",t)}function a(t){g(u,n,o,c,a,"throw",t)}c(void 0)}))}}const m={components:{ProductListItem:d.Z,EmptyContainer:f.Z},name:"ProductList",setup:function(){return v(a().mark((function t(){var e,r,n,o,u,c,d;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(0,s.iH)(!1),(0,i.bv)((function(){e.value=!0})),r=(0,l.yj)(),n=(0,p.oR)(),o=n.dispatch,u=n.getters,c=(0,i.Fl)((function(){return r.params.category||u["globalHandler/first_category"]})),console.log("category",r),(0,l.ao)(function(){var t=v(a().mark((function t(r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.value=!1,!(n=r.params.category||u["globalHandler/first_category"])||u["productHandler/getProducts"](r.params.category)){t.next=5;break}return t.next=5,o("productHandler/getProductsByCategory",{category:n});case 5:setTimeout((function(){e.value=!0}),50);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),(d=(0,i.Fl)((function(){return u["productHandler/getProducts"](c.value)}))).value){t.next=11;break}return t.next=11,o("productHandler/getProductsByCategory",{category:c.value});case 11:return t.abrupt("return",{category:c,products:d,show:e});case 12:case"end":return t.stop()}}),t)})))()}};const y=(0,r(3744).Z)(m,[["render",function(t,e,r,c,a,i){var s=(0,n.up)("product-list-item"),l=(0,n.up)("EmptyContainer");return(0,n.wg)(),(0,n.j4)(l,{data:c.products,class:"relative"},{emptyText:(0,n.w5)((function(){return[u]})),default:(0,n.w5)((function(){return[(0,n.Wm)(n.uT,{name:"fade-from-bottom-15px"},{default:(0,n.w5)((function(){return[c.show?((0,n.wg)(),(0,n.iD)("div",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.products,(function(t){return(0,n.wg)(),(0,n.j4)(s,{key:t.id,product:t},null,8,["product"])})),128))])):(0,n.kq)("",!0)]})),_:1})]})),_:1},8,["data"])}]])},6467:(t,e,r)=>{r.d(e,{Z:()=>m});var n=r(9200);var o=r(2262),u={class:"text-center flex flex-col gap-3 justify-center items-center py-10"},c={class:"max-w-[10rem] min-h-[10rem]"},a=(0,n._)("img",{src:"/pictures/empty.png",alt:"空圖示"},null,-1),i={class:"font-bold"},s=(0,n.Uk)("這裡甚麼都沒有"),l={class:"flex gap-3 font-bold"};const p={};var d=r(3744);const f=(0,d.Z)(p,[["render",function(t,e,r,o,p,d){return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",c,[(0,n.WI)(t.$slots,"image",{},(function(){return[a]}))]),(0,n._)("div",i,[(0,n.WI)(t.$slots,"default",{},(function(){return[s]}))]),(0,n._)("div",l,[(0,n.WI)(t.$slots,"button")])])}]]);var g=r(6252);const v={components:{EmptyItem:f},props:{data:{type:void 0,default:""}},setup:function(t){var e=(0,o.BK)(t).data,r=(0,g.Fl)((function(){return Object.prototype.toString.call(e.value)})),n=(0,g.Fl)((function(){switch(r.value){case"[object Array]":return 0===e.value.length;case"[object Object]":return 0===Object.keys(e.value).length;default:return!e.value}}));return{data:e,isNullOrEmpty:n}}},m=(0,d.Z)(v,[["render",function(t,e,r,o,u,c){var a=(0,n.up)("EmptyItem");return(0,n.wg)(),(0,n.iD)("div",null,[o.isNullOrEmpty?((0,n.wg)(),(0,n.j4)(a,{key:0},{button:(0,n.w5)((function(){return[(0,n.WI)(t.$slots,"button")]})),default:(0,n.w5)((function(){return[(0,n.WI)(t.$slots,"emptyText")]})),_:3})):(0,n.WI)(t.$slots,"default",{key:1})])}]])},9346:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(9200),o={class:"text-orange-500 font-bold"};var u=r(2262),c=r(8637);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const l={props:{price:{type:[String,Number],default:0}},setup:function(t){var e=(0,c.oR)().getters;return i(i({},(0,u.BK)(t)),{},{formattedPrice:function(t){return e["productHandler/getFormattedPrice"](t)}})}};const p=(0,r(3744).Z)(l,[["render",function(t,e,r,u,c,a){return(0,n.wg)(),(0,n.iD)("span",o,"NT$"+(0,n.zw)(u.formattedPrice(r.price)),1)}]])},154:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(9200),o={class:"flex flex-col justify-between text-center"},u={class:""},c=["src","alt"];var a=r(6252);const i={components:{FormattedPrice:r(9346).Z},props:{product:{type:Object,default:function(){}}},setup:function(t){var e=(0,a.Fl)((function(){return t.product})),r=(0,a.Fl)((function(){return"/products/".concat(e.value.eng_name,"/").concat(e.value.id)}));return{product:e,productPath:r}}};const s=(0,r(3744).Z)(i,[["render",function(t,e,r,a,i,s){var l=(0,n.up)("router-link"),p=(0,n.up)("FormattedPrice");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",u,[(0,n.Wm)(l,{to:{path:a.productPath},class:"hover:brightness-[0.7] duration-300 flex justify-center"},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:a.product.image,alt:a.product.name,width:"300",height:"300"},null,8,c)]})),_:1},8,["to"]),(0,n.Wm)(l,{to:{path:a.productPath},class:"px-2 mt-3 my-1 block hover:text-blue-800 font-bold"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(a.product.name),1)]})),_:1},8,["to"])]),(0,n.Wm)(p,{price:a.product.price,class:"col-span-1"},null,8,["price"])])}]])}}]);