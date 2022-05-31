"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8607],{2610:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3645),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,".article_banner_introduction[data-v-141e3356]{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden}",""]);const o=l},8607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(9200),l=n(6252),o=n(2262),u=n(8637),a=(n(442),n(5898)),c=n(6467),i=(n(8860),n(1158)),s={class:"grid grid-cols-1 bg-white rounded-md"},d=(0,r.Uk)(" 查無文章 ");const p={setup:function(e){var t=(0,u.oR)().getters,n=(0,o.iH)(),p=(0,l.Fl)((function(){return t["articleHandler/grouped_collected_articles"]})),f=(0,l.Fl)((function(){return p.value[n.value]}));return function(e,t){return(0,r.wg)(),(0,r.iD)("section",null,[(0,r.Wm)(i.Z,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.value=e}),class:"mb-4"},null,8,["modelValue"]),(0,r.Wm)(c.Z,{data:(0,r.SU)(f)},{emptyText:(0,r.w5)((function(){return[d]})),default:(0,r.w5)((function(){return[(0,r._)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,r.SU)(f),(function(e){return(0,r.wg)(),(0,r.j4)(a.Z,{key:e.id,article:e},null,8,["article"])})),128))])]})),_:1},8,["data"])])}}}},8860:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9200),l=n(2262),o=n(6252),u={class:"absolute right-2 top-1/2 -translate-y-1/2 duration-300"};const a={props:{initOpen:{type:Boolean,default:!1},closeText:{type:String,default:"展開"},openText:{type:String,default:"摺疊"},bg:{type:String,default:"bg-cyan-300"},hoverBg:{type:String,default:"bg-cyan-400"}},setup:function(e){var t=e,n=(0,l.BK)(t),a=n.initOpen,c=n.closeText,i=n.openText,s=n.bg,d=n.hoverBg,p=(0,l.iH)(),f=(0,l.iH)(!1),v=(0,l.iH)(0),g=function(){f.value=!f.value,v.value=f.value?p.value.scrollHeight+"px":0};return(0,o.bv)((function(){if(a.value){v.value="auto",f.value=!0;var e=setInterval((function(){p.value.scrollHeight&&(v.value=p.value.scrollHeight+"px",clearInterval(e))}),100)}})),function(e,t){var n=(0,r.up)("svg-render-vue"),l=(0,r.Q2)("hover");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{class:(0,r.C_)(["group relative py-1 text-sm text-center rounded-sm mb-2 font-bold duration-300",(0,r.SU)(s)]),onClick:g},[(0,r.Uk)((0,r.zw)(f.value?(0,r.SU)(i):(0,r.SU)(c))+" ",1),(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(n,{class:(0,r.C_)(["duration-500",{"rotate-180":f.value}]),type:"arrow_down"},null,8,["class"])])),[[l,"group-hover:scale-110"]])],2)),[[l,"hover:".concat((0,r.SU)(d)," hover:cursor-pointer")]]),(0,r._)("div",{class:"overflow-hidden duration-500",style:(0,r.j5)({height:v.value}),ref_key:"main",ref:p},[(0,r.WI)(e.$slots,"default")],4)])}}}},6467:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(9200);var l=n(2262),o={class:"text-center flex flex-col gap-3 justify-center items-center py-10"},u={class:"max-w-[10rem] min-h-[10rem]"},a=(0,r._)("img",{src:"/pictures/empty.png",alt:"空圖示"},null,-1),c={class:"font-bold"},i=(0,r.Uk)("這裡甚麼都沒有"),s={class:"flex gap-3 font-bold"};const d={};var p=n(3744);const f=(0,p.Z)(d,[["render",function(e,t,n,l,d,p){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",u,[(0,r.WI)(e.$slots,"image",{},(function(){return[a]}))]),(0,r._)("div",c,[(0,r.WI)(e.$slots,"default",{},(function(){return[i]}))]),(0,r._)("div",s,[(0,r.WI)(e.$slots,"button")])])}]]);var v=n(6252);const g={components:{EmptyItem:f},props:{data:{type:void 0,default:""}},setup:function(e){var t=(0,l.BK)(e).data,n=(0,v.Fl)((function(){return Object.prototype.toString.call(t.value)})),r=(0,v.Fl)((function(){switch(n.value){case"[object Array]":return 0===t.value.length;case"[object Object]":return 0===Object.keys(t.value).length;default:return!t.value}}));return{data:t,isNullOrEmpty:r}}},m=(0,p.Z)(g,[["render",function(e,t,n,l,o,u){var a=(0,r.up)("EmptyItem");return(0,r.wg)(),(0,r.iD)("div",null,[l.isNullOrEmpty?((0,r.wg)(),(0,r.j4)(a,{key:0},{button:(0,r.w5)((function(){return[(0,r.WI)(e.$slots,"button")]})),default:(0,r.w5)((function(){return[(0,r.WI)(e.$slots,"emptyText")]})),_:3})):(0,r.WI)(e.$slots,"default",{key:1})])}]])},1158:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(9200);var l=n(442),o=n(8860),u=n(8637),a=n(6252),c=n(2262);const i={components:{SelectMenu:l.Z,CollapseContainer:o.Z},props:{categoryGroup:{type:void 0,default:0}},emits:["update:modelValue","update:categoryGroup"],setup:function(e,t){var n=t.attrs,r=t.emit,l=(0,u.oR)(),o=l.getters,i=l.state,s=(0,a.Fl)((function(){return o["globalHandler/category_map_by_category_group"]})),d=(0,a.Fl)((function(){return i.globalHandler.category_groups})),p=(0,c.iH)("");p.value=d.value[0].name;var f=(0,a.Fl)({get:function(){return n.modelValue},set:function(e){return r("update:modelValue",e)}}),v=function(){r("update:categoryGroup",p.value),f.value=s.value[p.value][0].id};return v(),{categories:s,category_groups:d,cur_category_group:p,cur_category:f,changeCategory:v}}};const s=(0,n(3744).Z)(i,[["render",function(e,t,n,l,o,u){var a=(0,r.up)("SelectMenu"),c=(0,r.up)("CollapseContainer");return(0,r.wg)(),(0,r.j4)(c,{"close-text":"展開選擇類別","init-open":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(a,{class:"mb-4","option-value-key":"name",options:l.category_groups,modelValue:l.cur_category_group,"onUpdate:modelValue":[t[0]||(t[0]=function(e){return l.cur_category_group=e}),l.changeCategory]},{default:(0,r.w5)((function(e){var t=e.item;return[(0,r._)("div",null,(0,r.zw)(t.name),1)]})),_:1},8,["options","modelValue","onUpdate:modelValue"]),(0,r.Wm)(a,{"option-value-key":"id",options:l.categories[l.cur_category_group],modelValue:l.cur_category,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.cur_category=e})},{default:(0,r.w5)((function(e){var t=e.item;return[(0,r._)("div",null,(0,r.zw)(t.name),1)]})),_:1},8,["options","modelValue"])]})),_:1})}]])},442:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(9200),l={class:"flex flex-wrap flex-1"},o=["onClick"];var u=n(6252),a=n(2262);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d={props:{length:{type:Number,default:0},options:{type:[Array,Object],default:function(){return[]}},optionKey:{type:String,default:"id"},optionValueKey:{type:String,default:"value"},itemClass:{type:String,default:"py-4"},itemStyle:{type:Object,default:function(){return null}}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,r=t.attrs,l=(0,u.Fl)({get:function(){return r.modelValue},set:function(e){return n("update:modelValue",e)}});return i(i({},(0,a.BK)(e)),{},{modelValue:l})}};const p=(0,n(3744).Z)(d,[["render",function(e,t,n,u,a,c){return(0,r.wg)(),(0,r.iD)("ul",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.options,(function(t){return(0,r.wg)(),(0,r.iD)("li",{key:t[n.optionKey],class:(0,r.C_)(["bg-white text-center border-b-2 hover:cursor-pointer hover:text-blue-500 hover:font-bold duration-500 transition-[border]",u.modelValue===t[n.optionValueKey]?"border-blue-500 text-blue-500 font-bold":"border-slate-300",n.itemClass]),style:(0,r.j5)(n.itemStyle||{width:"".concat(1/(n.length||n.options.length)*100,"%")}),onClick:function(e){return u.modelValue=t[n.optionValueKey]}},[(0,r.WI)(e.$slots,"default",{item:t})],14,o)})),128))])}]])},5898:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(9200),l={class:"border-b border-gray-300 rounded-md px-3 py-4 bg-white"},o={class:"flex"},u=["innerHTML"],a=function(e){return(0,r.dD)("data-v-141e3356"),e=e(),(0,r.Cn)(),e}((function(){return(0,r._)("span",{class:"font-bold pl-1"},"比比王樂器",-1)})),c=(0,r.Uk)(" · "),i={class:"hover:underline"};var s=n(6252),d=n(8637);const p={components:{CollectIcon:n(5835).Z},props:{article:{type:Object,default:function(){}},collectable:{type:Boolean,default:!0}},setup:function(e){var t=(0,d.oR)(),n=t.getters,r=t.dispatch,l=(0,s.Fl)((function(){return e.article})),o=(0,s.Fl)((function(){return e.collectable})),u=(0,s.Fl)({get:function(){return n["articleHandler/articleIsCollected"](l.value.id)},set:function(e){return r("articleHandler/collectArticle",{article:l.value,status:e})}}),a=(0,s.Fl)((function(){return"/articles/".concat(l.value.category,"/").concat(l.value.id)}));return{article:l,isCollected:u,collectable:o,articlePath:a}}};var f=n(3379),v=n.n(f),g=n(2610),m={insert:"head",singleton:!1};v()(g.Z,m);g.Z.locals;const y=(0,n(3744).Z)(p,[["render",function(e,t,n,s,d,p){var f=(0,r.up)("router-link"),v=(0,r.up)("CollectIcon");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",o,[(0,r.Wm)(f,{to:{path:s.articlePath},class:"font-bold block mb-2 hover:text-indigo-500 w-[95%]"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(s.article.title),1)]})),_:1},8,["to"]),s.collectable?((0,r.wg)(),(0,r.j4)(v,{key:0,modelValue:s.isCollected,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.isCollected=e})},null,8,["modelValue"])):(0,r.kq)("",!0)]),(0,r._)("div",{class:"article_banner_introduction mb-1",innerHTML:s.article.content},null,8,u),(0,r._)("div",null,[a,c,(0,r._)("span",i,(0,r.zw)(s.article.updated_at),1)])])}],["__scopeId","data-v-141e3356"]])},5835:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(9200);var l=n(6252);const o={emits:["update:modelValue"],setup:function(e,t){var n=t.emit,r=t.attrs;return{modelValue:(0,l.Fl)({get:function(){return r.modelValue},set:function(e){return n("update:modelValue",e)}})}}};const u=(0,n(3744).Z)(o,[["render",function(e,t,n,l,o,u){var a=(0,r.up)("svg-render-vue");return(0,r.wg)(),(0,r.j4)(a,{onClick:t[0]||(t[0]=function(e){return l.modelValue=!l.modelValue}),class:(0,r.C_)(["hover:cursor-pointer ",{"text-white":!l.modelValue}]),"path-class":"stroke-black stroke-[30px]",type:"star",size:"xl"},null,8,["class"])}]])}}]);