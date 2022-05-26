"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8571],{8571:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(9200),o={class:"col-span-6 md:col-span-3"},u={key:0,class:"col-span-6 md:col-span-3"},l={key:1,class:"col-span-6 md:col-span-3"};var a=r(2792),i=r(7965),c=r(6314),p=r(4991),s=r(1067),d=r(8637),g=r(6252),f=r(2262),y=r(2119),m=r(1080);const b={components:{CreateButtonVue:a.Z,AdminInputFormVue:i.Z,InputTextVue:c.Z,InputSelectVue:p.Z,TitleItem:m.Z},setup:function(){var e=(0,d.oR)(),t=e.dispatch,r=e.state,n=(0,y.tv)(),o=(0,y.yj)(),u=(0,g.Fl)((function(){return o.params.type?o.params.type:"category"})),l=(0,g.Fl)((function(){return r.globalHandler.category_groups})),a=(0,f.iH)({name:"",eng_name:"",category_group_id:""});return{type:u,TITLE:s.R,category:a,category_groups:l,handleCreateCategory:function(){t("globalHandler/createCategory",{data:a.value,type:u.value}).then((function(){"error"!==r.status&&n.push({name:"admin-categories",params:{update_category:!0}})}))},dispatch:t}}};const v=(0,r(3744).Z)(b,[["render",function(e,t,r,a,i,c){var p=(0,n.up)("title-item"),s=(0,n.up)("create-button-vue"),d=(0,n.up)("input-text-vue"),g=(0,n.up)("input-select-vue"),f=(0,n.up)("admin-input-form-vue");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(p,{return_to_route_name:"admin-categories",title:"category"===a.type?"產品 - 新增類別":"產品 - 新增類別群組"},null,8,["title"]),(0,n.Wm)(p,{title:"category"===a.type?"類別":"類別群組"},{button:(0,n.w5)((function(){return[(0,n.Wm)(s,{onClick:a.handleCreateCategory},null,8,["onClick"])]})),_:1},8,["title"]),(0,n.Wm)(f,{class:"mb-2"},{form_items:(0,n.w5)((function(){return[(0,n._)("div",o,[(0,n.Wm)(d,{title:a.TITLE.name,focus:!0,required:!0,modelValue:a.category.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.category.name=e}),onChange:t[1]||(t[1]=function(e){return a.dispatch("globalHandler/checkName",a.category.name)})},null,8,["title","modelValue"])]),"category"===a.type?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(d,{title:a.TITLE.eng_name,required:!0,modelValue:a.category.eng_name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.category.eng_name=e}),onChange:t[3]||(t[3]=function(e){return a.dispatch("globalHandler/checkEngName",a.category.eng_name)})},null,8,["title","modelValue"])])):(0,n.kq)("",!0),"category"===a.type?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(g,{required:!0,title:a.TITLE.category_group,options:a.category_groups,modelValue:a.category.category_group_id,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.category.category_group_id=e})},null,8,["title","options","modelValue"])])):(0,n.kq)("",!0)]})),_:1})],64)}]])},7965:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9200),o={class:"bg-white rounded-md border-gray-500"},u={class:"p-4"},l={class:"grid grid-cols-6 gap-4 items-center"};const a={components:{},props:{input_cols:{type:Array,default:function(){return[{col_span:"col-span-2",component:"input-text-vue",trim:!0,title:String,model:String,func_call:String,func_datas:Array}]}},data_source:{type:Object||Array,default:function(){return{}||[]}}}};const i=(0,r(3744).Z)(a,[["render",function(e,t,r,a,i,c){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",u,[(0,n._)("div",l,[(0,n.WI)(e.$slots,"form_items")])])])}]])},2792:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(9200),o={class:"bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white"};const u={props:{target_text:{type:String,default:""}},setup:function(e){return{target_text:e.target_text}}};const l=(0,r(3744).Z)(u,[["render",function(e,t,r,u,l,a){var i=(0,n.up)("svg-render-vue");return(0,n.wg)(),(0,n.iD)("button",o,[(0,n.Wm)(i,{type:"plus",class:"mr-1"}),(0,n._)("span",null,"新增"+(0,n.zw)(u.target_text),1)])}]])},4991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(9200),o={class:"font-bold"},u={key:0,class:"text-red-500"},l={class:"w-full py-1"},a=(0,n._)("option",{disabled:"",value:""},"點擊選擇",-1),i=["value"],c=["label"],p=["value"];var s=r(2262),d=r(6252);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m={inheritAttrs:!1,props:{title:{type:String,default:""},required:{type:Boolean,default:!1},options:{type:[Array,Object],default:function(){return[]}},labelKey:{type:String,default:"name"},valueKey:{type:String,default:"id"},group:{type:Boolean,default:!1}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var r=t.attrs,n=t.emit;console.log("inputSelect",e);var o=(0,d.Fl)({get:function(){return r.modelValue},set:function(e){n("update:modelValue",e)}});return f(f({},(0,s.BK)(e)),{},{modelValue:o})}};const b=(0,r(3744).Z)(m,[["render",function(e,t,r,s,d,g){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[r.required?((0,n.wg)(),(0,n.iD)("span",u,"* ")):(0,n.kq)("",!0),(0,n._)("span",null,(0,n.zw)(r.title),1)]),(0,n._)("div",l,[(0,n.wy)((0,n._)("select",{class:"font-bold w-full border-gray-500 border-opacity-50 border-[1px] border-solid rounded-sm p-2","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.modelValue=e})},[a,r.group?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(r.options,(function(e,t){return(0,n.wg)(),(0,n.iD)("optgroup",{key:t,label:t},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e[r.valueKey],value:e[r.valueKey]},(0,n.zw)(e[r.labelKey]),9,p)})),128))],8,c)})),128)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(r.options,(function(e){return(0,n.wg)(),(0,n.iD)("option",{key:e[r.valueKey],value:e[r.valueKey]},(0,n.zw)(e[r.labelKey]),9,i)})),128))],512),[[n.bM,s.modelValue]])])],64)}]])},6314:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(9200),o={class:"font-bold"},u={key:0,class:"text-red-500"},l={class:"font-MicrosoftJhengHei"},a={class:"w-full py-1"},i=["type","placeholder","required"];var c=r(6252),p=r(2262);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1},trim:{type:Boolean,default:!0},isNumber:{type:Boolean,default:!1},required:{type:Boolean,default:!1},type:{type:String,default:"text"}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var r=t.attrs,n=t.emit,o=(0,p.iH)(),u=(0,p.BK)(e),l=u.title,a=u.trim,i=u.focus,s=u.isNumber,g=(0,c.Fl)((function(){return"輸入"+l.value})),f=(0,c.Fl)({get:function(){return r.modelValue},set:function(e){return n("update:modelValue",e)}});return(0,c.bv)((function(){i.value&&o.value.focus()})),d(d({modelValue:f,placeholder:g},(0,p.BK)(e)),{},{modelValueChange:function(){a.value&&(f.value=f.value.trim()),s.value&&(f.value=f.value.replace(/[^0-9]/gi,""))},field:o})}};const y=(0,r(3744).Z)(f,[["render",function(e,t,r,c,p,s){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[r.required?((0,n.wg)(),(0,n.iD)("span",u,"* ")):(0,n.kq)("",!0),(0,n._)("span",l,(0,n.zw)(r.title),1)]),(0,n._)("div",a,[(0,n.wy)((0,n._)("input",{class:"w-full h-[40px] placeholder:font-bold border-gray-500 border-opacity-50 border-[1px] rounded-sm pl-4",type:r.type||"text",ref:"field","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.modelValue=e}),placeholder:c.placeholder,onChange:t[1]||(t[1]=function(){return c.modelValueChange&&c.modelValueChange.apply(c,arguments)}),required:r.required},null,40,i),[[n.YZ,c.modelValue]])])])}]])},1080:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(9200),o={class:"flex items-center justify-between"},u={class:"grid grid-flow-col gap-4"};var l=r(6252),a=r(8637);const i={props:{title:{type:String,default:"管理"},return_to_route_name:{type:String,default:""},py:{type:String,default:""}},setup:function(e){var t=(0,a.oR)().commit,r=e.return_to_route_name,n=e.py;return{title:(0,l.Fl)((function(){return e.title})),return_to_route_name:r,py:n,commit:t}}};const c=(0,r(3744).Z)(i,[["render",function(e,t,r,l,a,i){var c=(0,n.up)("svg-render-vue"),p=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[l.return_to_route_name?((0,n.wg)(),(0,n.j4)(p,{key:0,to:{name:l.return_to_route_name},class:"text-blue-500 px-2",onClick:t[0]||(t[0]=function(e){return l.commit("clearStatus")})},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{type:"return",size:"lg"})]})),_:1},8,["to"])):(0,n.kq)("",!0),(0,n.WI)(e.$slots,"return_router"),(0,n._)("div",{class:(0,n.C_)(["flex-auto px-2 py-4 font-bold text-2xl",l.py])},(0,n.zw)(l.title),3),(0,n._)("div",u,[(0,n.WI)(e.$slots,"button")])])}]])}}]);