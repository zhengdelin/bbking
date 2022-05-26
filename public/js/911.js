"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[911],{1067:(t,e,i)=>{i.d(e,{R:()=>n});var n={account:"帳號",password:"密碼",check_password:"再次確認密碼",email:"電子郵件",name:"名稱",phone:"電話",address:"地址",title:"標題",content:"內容",category:"類別",category_id:"類別",category_name:"類別",category_group:"類別群組",category_group_id:"類別群組",category_group_name:"類別群組",eng_name:"英文名稱",url:"網址",introduction:"簡介",description:"描述",price:"價格",image:"圖片",updated_at:"上次更新",status:"狀態",logo:"Logo",business_hours:"營業時間",isHeadquarter:"為總公司"}},1946:(t,e,i)=>{i.d(e,{Z:()=>o});var n=i(3645),r=i.n(n)()((function(t){return t[1]}));r.push([t.id,"#tinymce{box-shadow:0 2px 8px 0 rgba(0,0,0,.2)}.tox.tox-tinymce-inline .tox-editor-header{border-bottom:0!important;border-radius:0!important}#tinymce_editor{background-color:#fff;border:1px solid #ccc;border-top:0;font-size:20px;line-height:1;text-align:left;vertical-align:top}.mce-content-body:not([dir=rtl])[data-mce-placeholder]:not(.mce-visualblocks):before{left:15px!important;top:25px}",""]);const o=r},4911:(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var n=i(9200),r={class:"col-span-6 md:col-span-3"},o={class:"col-span-6 md:col-span-3"};var a=i(4146),l=i(2792),u=i(7965),s=i(6695),c=i(3325),d=i(2262),p=i(8637),m=i(2119),g=i(6252),f=i(1067),_=i(5431);const y={components:{CreateButtonVue:l.Z,TinymceEditorVue:a.Z,AdminInputFormVue:u.Z,InputTextVue:s.Z,InputSelectVue:c.Z,TitleItem:_.Z},setup:function(){var t=(0,p.oR)(),e=t.dispatch,i=t.state,n=(0,g.Fl)((function(){return i.globalHandler.categories})),r=(0,m.tv)(),o=(0,d.iH)({title:"",category_id:"",content:""});return{article:o,categories:n,handleCreateArticle:function(){o.value.content=tinymce.get("tinymce_editor").getContent(),e("articleHandler/createArticle",o.value).then((function(){"error"!==i.status&&r.push({name:"admin-articles",params:{update_article:!0}})}))},dispatch:e,TITLE:f.R}}};const v=(0,i(3744).Z)(y,[["render",function(t,e,i,a,l,u){var s=(0,n.up)("title-item"),c=(0,n.up)("create-button-vue"),d=(0,n.up)("input-text-vue"),p=(0,n.up)("input-select-vue"),m=(0,n.up)("admin-input-form-vue"),g=(0,n.up)("tinymce-editor-vue");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{return_to_route_name:"admin-articles",title:"文章 - 新增文章"}),(0,n.Wm)(s,{title:"文章資訊"},{button:(0,n.w5)((function(){return[(0,n.Wm)(c,{onClick:a.handleCreateArticle},null,8,["onClick"])]})),_:1}),(0,n.Wm)(m,{class:"mb-2"},{form_items:(0,n.w5)((function(){return[(0,n._)("div",r,[(0,n.Wm)(d,{title:a.TITLE.title,focus:!0,trim:!0,required:!0,modelValue:a.article.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return a.article.title=t}),onChange:e[1]||(e[1]=function(t){return a.dispatch("articleHandler/checkTitle",a.article.title)})},null,8,["title","modelValue"])]),(0,n._)("div",o,[(0,n.Wm)(p,{required:!0,title:a.TITLE.category,option_group:a.categories,modelValue:a.article.category_id,"onUpdate:modelValue":e[2]||(e[2]=function(t){return a.article.category_id=t})},null,8,["title","option_group","modelValue"])])]})),_:1}),(0,n.Wm)(g,{placeholder:"...請輸入文章內容"})],64)}]])},7965:(t,e,i)=>{i.d(e,{Z:()=>u});var n=i(9200),r={class:"bg-white rounded-md border-gray-500"},o={class:"p-4"},a={class:"grid grid-cols-6 gap-4 items-center"};const l={components:{},props:{input_cols:{type:Array,default:function(){return[{col_span:"col-span-2",component:"input-text-vue",trim:!0,title:String,model:String,func_call:String,func_datas:Array}]}},data_source:{type:Object||Array,default:function(){return{}||[]}}}};const u=(0,i(3744).Z)(l,[["render",function(t,e,i,l,u,s){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",o,[(0,n._)("div",a,[(0,n.WI)(t.$slots,"form_items")])])])}]])},2792:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(9200),r={class:"bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white"};const o={props:{target_text:{type:String,default:""}},setup:function(t){return{target_text:t.target_text}}};const a=(0,i(3744).Z)(o,[["render",function(t,e,i,o,a,l){var u=(0,n.up)("svg-render-vue");return(0,n.wg)(),(0,n.iD)("button",r,[(0,n.Wm)(u,{type:"plus",class:"mr-1"}),(0,n._)("span",null,"新增"+(0,n.zw)(o.target_text),1)])}]])},3325:(t,e,i)=>{i.d(e,{Z:()=>g});var n=i(9200),r={class:"font-bold"},o={key:0,class:"text-red-500"},a={class:"w-full py-1"},l=["value"],u=(0,n._)("option",{value:"",disabled:""},"請選擇",-1),s=["value"],c=["label"],d=["value"];var p=i(8637);const m={inheritAttrs:!1,props:{title:{type:String,default:""},required:{type:Boolean,default:!1},option_group:{type:Object||Array,default:function(){return[]||0}},options:{type:Array,default:function(){return[]}},valChangeFun:{type:String,default:""}},emits:{"update:modelValue":{type:String,default:""}},setup:function(t,e){var i=e.attrs,n=e.emit,r=(0,p.oR)().dispatch,o=t.title,a=t.required,l=t.options,u=t.option_group,s=t.valChangeFun;return{title:o,required:a,option_group:u,options:l,emitInput:function(t){s&&r(s,t.target.value),n("update:modelValue",t.target.value)},attrs:i}}};const g=(0,i(3744).Z)(m,[["render",function(t,e,i,p,m,g){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",r,[p.required?((0,n.wg)(),(0,n.iD)("span",o,"* ")):(0,n.kq)("",!0),(0,n._)("span",null,(0,n.zw)(p.title),1)]),(0,n._)("div",a,[(0,n._)("select",{class:"font-bold w-full h-[40px] border-gray-500 border-opacity-50 border-[1px] border-solid rounded-[10px] pl-2",value:p.attrs.modelValue,onChange:e[0]||(e[0]=function(){return p.emitInput&&p.emitInput.apply(p,arguments)})},[u,p.options.length?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(p.options,(function(t){return(0,n.wg)(),(0,n.iD)("option",{key:t.id,value:t.id},(0,n.zw)(t.name),9,s)})),128)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(p.option_group,(function(t,e){return(0,n.wg)(),(0,n.iD)("optgroup",{key:e,label:e},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t,(function(t){return(0,n.wg)(),(0,n.iD)("option",{key:t.id,value:t.id},(0,n.zw)(t.name),9,d)})),128))],8,c)})),128))],40,l)])],64)}]])},6695:(t,e,i)=>{i.d(e,{Z:()=>p});var n=i(9200),r={class:"font-bold"},o={key:0,class:"text-red-500"},a={class:"font-MicrosoftJhengHei"},l={class:"w-full py-1"},u=["type","value"];var s=i(6252),c=i(2262);const d={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1},trim:{type:Boolean,default:!0},isNumber:{type:Boolean,default:!1},required:{type:Boolean,default:!1},type:{type:String,default:"text"}},emits:{"update:modelValue":{type:String,default:""}},setup:function(t,e){var i=e.attrs,n=e.emit,r=(0,c.iH)(),o=t.title,a=t.trim,l=t.focus,u=t.isNumber,d=t.type,p=(0,s.Fl)((function(){return t.required}));return(0,s.bv)((function(){l&&r.value.focus()})),{title:o,attrs:i,required:p,field:r,emitInput:function(t){var e=t.target.value;a&&(e=e.trim()),u&&(e=e.replace(/[^0-9]/gi,"")),n("update:modelValue",e)},type:d}}};const p=(0,i(3744).Z)(d,[["render",function(t,e,i,s,c,d){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",r,[s.required?((0,n.wg)(),(0,n.iD)("span",o,"* ")):(0,n.kq)("",!0),(0,n._)("span",a,(0,n.zw)(s.title),1)]),(0,n._)("div",l,[(0,n._)("input",(0,n.dG)({class:"w-full h-[40px] border-gray-500 border-opacity-50 border-[1px] rounded-md pl-4",type:s.type||"text"},s.attrs,{ref:"field",value:s.attrs.modelValue,onInput:e[0]||(e[0]=function(){return s.emitInput&&s.emitInput.apply(s,arguments)})}),null,16,u)])])}]])},4146:(t,e,i)=>{i.d(e,{Z:()=>f});var n=i(9200),r={class:"bg-white no-tailwind-base"},o={id:"tinymce_toolbar",class:"sticky z-[2] top-0 h-[78px]"},a=["innerHTML"];var l=i(6252),u=i(2262),s=i(2119);const c={props:{initial_value:{type:String,default:""},placeholder:{type:String,default:"...請輸入文字"}},setup:function(t){var e=(0,u.iH)(!1),i=(0,u.BK)(t),n=i.initial_value,r={selector:"#tinymce_editor",inline:!0,placeholder:i.placeholder.value,fixed_toolbar_container:"#tinymce_toolbar",toolbar_persist:!0,language_url:"../../assets/tinymce/langs/zh_TW.js",language:"zh_TW",images_upload_url:"/api/article/admin/uploadArticlePic",images_upload_base_path:"/",convert_urls:!1,block_unsupported_drop:!0,plugins:"preview searchreplace autolink link image table autoresize autosave charmap code emoticons\n            help insertdatetime lists media quickbars template wordcount",toolbar:"newdocument preview restoredraft | undo redo searchreplace | \n      formatting text lists| alignment paragraphs styles|insertion|code wordcount help",toolbar_groups:{formatting:{icon:"format",tooltip:"格式",items:"color bold italic strikethrough underline| superscript subscript | removeformat"},text:{icon:"change-case",tooltip:"文字",items:"forecolor backcolor lineheight |  fontfamily fontsize"},alignment:{icon:"align-left",tooltip:"對齊",items:"alignleft aligncenter alignright alignjustify | outdent indent"},paragraphs:{icon:"paragraph",tooltip:"段落",items:"H1 h2 h3 h4 h5 h6 div"},lists:{icon:"ordered-list",tooptip:"列表",items:"numlist bullist"},insertion:{icon:"plus",tooltip:"新增",items:"image media table |hr link emoticons charmap insertdatetime | template "}},quickbars_insert_toolbar:" image media table |hr link emoticons charmap insertdatetime | template",quickbars_selection_toolbar:"quicklink| styles | forecolor backcolor fontfamily fontsize",autosave_interval:"30s",toolbar_sticky:!0,contextmenu:"redo undo",skin:"tinymce-5",templates:[{title:"Date modified example",description:"Adds a timestamp indicating the last time the document modified.",content:'<p>Last Modified: <time class="mdate">This will be replaced with the date modified.</time></p>'}]};return(0,l.bv)((function(){tinymce.init(r),console.log("tinymce->",t),t.initial_value&&tinymce.get("tinymce_editor").setContent(t.initial_value),e.value=!0})),(0,s.iS)((function(){tinymce.get("tinymce_editor").destroy()})),{initial_value:n,show:e}}};var d=i(3379),p=i.n(d),m=i(1946),g={insert:"head",singleton:!1};p()(m.Z,g);m.Z.locals;const f=(0,i(3744).Z)(c,[["render",function(t,e,i,l,u,s){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(n.uT,{name:"fade"},{default:(0,n.w5)((function(){return[(0,n.wy)((0,n._)("div",o,null,512),[[n.F8,l.show]])]})),_:1}),(0,n._)("div",{id:"tinymce_editor",class:"bg-white article-box min-h-[20rem] px-3 py-1",innerHTML:l.initial_value},null,8,a)])}]])},5431:(t,e,i)=>{i.d(e,{Z:()=>s});var n=i(9200),r={class:"flex items-center justify-between"},o={class:"grid grid-flow-col gap-4"};var a=i(6252),l=i(8637);const u={props:{title:{type:String,default:"管理"},return_to_route_name:{type:String,default:""},py:{type:String,default:""}},setup:function(t){var e=(0,l.oR)().commit,i=t.return_to_route_name,n=t.py;return{title:(0,a.Fl)((function(){return t.title})),return_to_route_name:i,py:n,commit:e}}};const s=(0,i(3744).Z)(u,[["render",function(t,e,i,a,l,u){var s=(0,n.up)("svg-render-vue"),c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",r,[a.return_to_route_name?((0,n.wg)(),(0,n.j4)(c,{key:0,to:{name:a.return_to_route_name},class:"text-blue-500",onClick:e[0]||(e[0]=function(t){return a.commit("clearStatus")})},{default:(0,n.w5)((function(){return[(0,n.Wm)(s,{type:"return",size:"lg"})]})),_:1},8,["to"])):(0,n.kq)("",!0),(0,n.WI)(t.$slots,"return_router"),(0,n._)("div",{class:(0,n.C_)(["flex-auto px-2 py-4 font-bold text-2xl",a.py])},(0,n.zw)(a.title),3),(0,n._)("div",o,[(0,n.WI)(t.$slots,"button")])])}]])}}]);