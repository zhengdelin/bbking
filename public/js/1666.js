"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1666],{3973:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".input_single_checkbox input{border:1px solid hsla(0,0%,50%,.5);border-radius:10px;padding-right:1rem}",""]);const i=r},4947:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".tox.tox-tinymce-inline .tox-editor-header{border-bottom:0!important;border-radius:0!important}.tox-notifications-container>.tox-notification--warning{display:none!important}.fade-enter-active,.fade-leave-active{transition:opacity 1s}.fade-enter-to,.fade-leave-from{opacity:1}.fade-enter-from,.fade-leave-to{opacity:0}",""]);const i=r},1666:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var o=n(9200),r={class:"col-span-6"},i={class:"col-span-6 md:col-span-3"},l={class:"col-span-3"};var a=n(7482),u=n(7965),c=n(6314),s=n(5410),d=n(4010),p=n(2262),f=n(8637),m=n(2119),g=n(6252),v=n(1067),y=n(1080),b=n(1014);const h={components:{SaveButtonVue:d.Z,TinymceEditor:a.Z,AdminInputFormVue:u.Z,InputTextVue:c.Z,InputSelectVue:s.Z,TitleItem:y.Z,InputSingleCheckbox:b.Z},props:{info:{type:String,default:function(){}}},setup:function(e){var t=(0,m.tv)(),n=(0,f.oR)(),o=n.dispatch,r=n.state,i=n.getters,l=(0,g.Fl)((function(){return e.info}));l.value||t.push({name:"admin-articles"});var a=(0,g.Fl)((function(){return i["globalHandler/category_map_by_category_group"]})),u=(0,p.iH)();u.value=l.value?JSON.parse(l.value):{};return{TITLE:v.R,categories:a,article:u,handleUpdateArticle:function(){o("articleHandler/updateArticle",u.value).then((function(){"error"!==r.status&&t.push({name:"admin-articles",params:{update_article:!0}})}))},dispatch:o}}};const _=(0,n(3744).Z)(h,[["render",function(e,t,n,a,u,c){var s=(0,o.up)("title-item"),d=(0,o.up)("save-button-vue"),p=(0,o.up)("input-text-vue"),f=(0,o.up)("InputSelectVue"),m=(0,o.up)("input-single-checkbox"),g=(0,o.up)("admin-input-form-vue"),v=(0,o.up)("TinymceEditor");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s,{title:"文章 - 編輯文章",return_to_route_name:"admin-articles"}),(0,o.Wm)(s,{title:"文章資訊"},{button:(0,o.w5)((function(){return[(0,o.Wm)(d,{onClick:a.handleUpdateArticle},null,8,["onClick"])]})),_:1}),(0,o.Wm)(g,{class:"mb-2"},{form_items:(0,o.w5)((function(){return[(0,o._)("div",r,[(0,o.Wm)(p,{focus:!0,trim:!0,required:!0,title:a.TITLE.title,modelValue:a.article.title,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.article.title=e}),onChange:t[1]||(t[1]=function(e){return a.dispatch("articleHandler/checkTitle",a.article.title)})},null,8,["title","modelValue"])]),(0,o._)("div",i,[(0,o.Wm)(f,{required:!0,title:a.TITLE.category,options:a.categories,group:"",modelValue:a.article.category_id,"onUpdate:modelValue":[t[2]||(t[2]=function(e){return a.article.category_id=e}),t[3]||(t[3]=function(e){return a.dispatch("globalHandler/checkCategory",a.article.category_id)})]},null,8,["title","options","modelValue"])]),(0,o._)("div",l,[(0,o.Wm)(m,{required:!0,title:"開放顯示",modelValue:a.article.status,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.article.status=e})},null,8,["modelValue"])])]})),_:1}),(0,o.Wm)(v,{content:a.article.content,"onUpdate:content":t[5]||(t[5]=function(e){return a.article.content=e}),placeholder:"...請輸入文章內容"},null,8,["content"])],64)}]])},7965:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(9200),r={class:"bg-white rounded-md border-gray-500"},i={class:"p-4"},l={class:"grid grid-cols-6 gap-4 items-center"};const a={components:{},props:{input_cols:{type:Array,default:function(){return[{col_span:"col-span-2",component:"input-text-vue",trim:!0,title:String,model:String,func_call:String,func_datas:Array}]}},data_source:{type:Object||Array,default:function(){return{}||[]}}}};const u=(0,n(3744).Z)(a,[["render",function(e,t,n,a,u,c){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",i,[(0,o._)("div",l,[(0,o.WI)(e.$slots,"form_items")])])])}]])},4010:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(9200),r={class:"bg-blue-500 hover:bg-blue-400 text-white disabled:bg-blue-400"},i=(0,o._)("span",null,"儲存",-1);const l={};const a=(0,n(3744).Z)(l,[["render",function(e,t,n,l,a,u){var c=(0,o.up)("svg-render-vue");return(0,o.wg)(),(0,o.iD)("button",r,[(0,o.Wm)(c,{type:"save",class:"mr-1"}),i])}]])},5410:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(9200),r={class:"font-bold"},i={key:0,class:"text-red-500"},l={class:"w-full py-1"},a=(0,o._)("option",{disabled:"",value:""},"點擊選擇",-1),u=["value"],c=["label"],s=["value"];var d=n(2262),p=n(6252);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const v={inheritAttrs:!1,props:{title:{type:String,default:""},required:{type:Boolean,default:!1},options:{type:[Array,Object],default:function(){return[]}},labelKey:{type:String,default:"name"},valueKey:{type:String,default:"id"},group:{type:Boolean,default:!1}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var n=t.attrs,o=t.emit,r=(0,p.Fl)({get:function(){return n.modelValue},set:function(e){o("update:modelValue",e)}});return m(m({},(0,d.BK)(e)),{},{modelValue:r})}};const y=(0,n(3744).Z)(v,[["render",function(e,t,n,d,p,f){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",r,[n.required?((0,o.wg)(),(0,o.iD)("span",i,"* ")):(0,o.kq)("",!0),(0,o._)("span",null,(0,o.zw)(n.title),1)]),(0,o._)("div",l,[(0,o.wy)((0,o._)("select",{class:"font-bold w-full border-gray-500 border-opacity-50 border-[1px] border-solid rounded-sm p-2","onUpdate:modelValue":t[0]||(t[0]=function(e){return d.modelValue=e})},[a,n.group?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(n.options,(function(e,t){return(0,o.wg)(),(0,o.iD)("optgroup",{class:"text-blue-500 font-bold",key:t,label:t},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(function(e){return(0,o.wg)(),(0,o.iD)("option",{class:"text-black font-bold",key:e[n.valueKey],value:e[n.valueKey]},(0,o.zw)(e[n.labelKey]),9,s)})),128))],8,c)})),128)):((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(n.options,(function(e){return(0,o.wg)(),(0,o.iD)("option",{class:"font-bold",key:e[n.valueKey],value:e[n.valueKey]},(0,o.zw)(e[n.labelKey]),9,u)})),128))],512),[[o.bM,d.modelValue]])])],64)}]])},1014:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(9200),r={class:"input_single_checkbox w-full"},i={class:"py-1"},l=["checked"],a={for:"field",class:"font-bold px-1"};var u=n(6252),c=n(2262);const s={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var n=t.attrs,o=t.emit,r=(0,c.iH)(null);return(0,u.bv)((function(){e.focus&&r.value.focus()})),{props:e,attrs:n,field:r,emitInput:function(e){o("update:modelValue",e.target.checked)}}}};var d=n(3379),p=n.n(d),f=n(3973),m={insert:"head",singleton:!1};p()(f.Z,m);f.Z.locals;const g=(0,n(3744).Z)(s,[["render",function(e,t,n,u,c,s){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",i,[(0,o._)("input",(0,o.dG)({name:"field",type:"checkbox"},u.attrs,{ref:"field",checked:u.attrs.modelValue,onInput:t[0]||(t[0]=function(){return u.emitInput&&u.emitInput.apply(u,arguments)})}),null,16,l),(0,o._)("label",a,(0,o.zw)(u.props.title),1)])])}]])},6314:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(9200),r={class:"font-bold"},i={key:0,class:"text-red-500"},l={class:"font-MicrosoftJhengHei"},a={class:"w-full py-1"},u=["type","placeholder","required"];var c=n(6252),s=n(2262);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1},trim:{type:Boolean,default:!0},isNumber:{type:Boolean,default:!1},required:{type:Boolean,default:!1},type:{type:String,default:"text"}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var n=t.attrs,o=t.emit,r=(0,s.iH)(),i=(0,s.BK)(e),l=i.title,a=i.trim,u=i.focus,d=i.isNumber,f=(0,c.Fl)((function(){return"輸入"+l.value})),m=(0,c.Fl)({get:function(){return n.modelValue},set:function(e){return o("update:modelValue",e)}});return(0,c.bv)((function(){u.value&&r.value.focus()})),p(p({modelValue:m,placeholder:f},(0,s.BK)(e)),{},{modelValueChange:function(){a.value&&(m.value=m.value.trim()),d.value&&(m.value=m.value.replace(/[^0-9]/gi,""))},field:r})}};const g=(0,n(3744).Z)(m,[["render",function(e,t,n,c,s,d){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",r,[n.required?((0,o.wg)(),(0,o.iD)("span",i,"* ")):(0,o.kq)("",!0),(0,o._)("span",l,(0,o.zw)(n.title),1)]),(0,o._)("div",a,[(0,o.wy)((0,o._)("input",{class:"w-full h-[40px] placeholder:font-bold border-gray-500 border-opacity-50 border-[1px] rounded-sm pl-4",type:n.type||"text",ref:"field","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.modelValue=e}),placeholder:c.placeholder,onChange:t[1]||(t[1]=function(){return c.modelValueChange&&c.modelValueChange.apply(c,arguments)}),required:n.required},null,40,u),[[o.YZ,c.modelValue]])])])}]])},7482:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(9200),r={class:"bg-white no-tailwind-base"};var i,l=n(6252),a=n(2262),u=n(8637),c=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],s=function(e){return-1!==c.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},d=function(e,t,n,r,i,l){r.setContent(l()),n.attrs["onUpdate:modelValue"]&&function(e,t,n,r){var i=e.modelEvents?e.modelEvents:null,l=Array.isArray(i)?i.join(" "):i;(0,o.YP)(r,(function(t,o){n&&"string"==typeof t&&t!==o&&t!==n.getContent({format:e.outputFormat})&&n.setContent(t)})),n.on(l||"change input undo redo",(function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))}))}(t,n,r,i),function(e,t,n){Object.keys(t).filter(s).forEach((function(o){var r=t[o];"function"==typeof r&&("onInit"===o?r(e,n):n.on(o.substring(2),(function(e){return r(e,n)})))}))}(e,n.attrs,r)},p=0,f=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++p+String(t)},m=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},g=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoaded:!1}},v=(i=g(),{load:function(e,t,n){i.scriptLoaded?n():(i.listeners.push(n),e.getElementById(i.scriptId)||function(e,t,n,o){var r=t.createElement("script");r.referrerPolicy="origin",r.type="application/javascript",r.id=e,r.src=n;var i=function(){r.removeEventListener("load",i),o()};r.addEventListener("load",i),t.head&&t.head.appendChild(r)}(i.scriptId,e,t,(function(){i.listeners.forEach((function(e){return e()})),i.scriptLoaded=!0})))},reinitialize:function(){i=g()}}),y=function(){var e="undefined"!=typeof window?window:n.g;return e&&e.tinymce?e.tinymce:null},b={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},h=function(){return h=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},h.apply(this,arguments)};const _=(0,o.aZ)({props:b,setup:function(e,t){var n=e.init?h({},e.init):{},r=(0,o.BK)(e),i=r.disabled,l=r.modelValue,a=r.tagName,u=(0,o.iH)(null),c=null,s=e.id||f("tiny-vue"),p=e.init&&e.init.inline||e.inline,g=!!t.attrs["onUpdate:modelValue"],b=!0,_=e.initialValue?e.initialValue:"",w="",S=function(){var o,r,i,a=(o=b,g?function(){return(null==l?void 0:l.value)?l.value:""}:function(){return o?_:w}),f=h(h({},n),{readonly:e.disabled,selector:"#"+s,plugins:(r=n.plugins,i=e.plugins,m(r).concat(m(i))),toolbar:e.toolbar||n.toolbar,inline:p,setup:function(o){c=o,o.on("init",(function(n){return d(n,e,t,o,l,a)})),"function"==typeof n.setup&&n.setup(o)}});(function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()})(u.value)&&(u.value.style.visibility=""),y().init(f),b=!1};(0,o.YP)(i,(function(e){null!==c&&c.setMode(e?"readonly":"design")})),(0,o.YP)(a,(function(e){var t;g||(w=c.getContent()),null===(t=y())||void 0===t||t.remove(c),(0,o.Y3)((function(){return S()}))})),(0,o.bv)((function(){if(null!==y())S();else if(u.value&&u.value.ownerDocument){var t=e.cloudChannel?e.cloudChannel:"5",n=e.apiKey?e.apiKey:"no-api-key",o=null==e.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":e.tinymceScriptSrc;v.load(u.value.ownerDocument,o,S)}})),(0,o.Jd)((function(){null!==y()&&y().remove(c)})),p||((0,o.dl)((function(){b||S()})),(0,o.se)((function(){var e;g||(w=c.getContent()),null===(e=y())||void 0===e||e.remove(c)})));return t.expose({rerender:function(e){var t;w=c.getContent(),null===(t=y())||void 0===t||t.remove(c),n=h(h({},n),e),(0,o.Y3)((function(){return S()}))}}),function(){return p?function(e,t,n,o){return e(o||"div",{id:t,ref:n})}(o.h,s,u,e.tagName):(0,o.h)("textarea",{id:s,visibility:"hidden",ref:u})}}});const w={components:{TitleItem:n(1080).Z,Editor:_},props:{title:{type:String,default:""},content:{type:String,default:""},placeholder:{type:String,default:"...請輸入文字"}},emits:["update:content"],setup:function(e,t){var n=t.emit,o=((0,u.oR)().dispatch,(0,a.iH)(!1)),r=(0,l.Fl)({get:function(){return e.content},set:function(e){return n("update:content",e)}}),i=(0,a.iH)();i.value=r.value;var c=(0,l.Fl)((function(){return r.value?"":e.placeholder})),s=((0,a.iH)(),{language_url:"../../assets/tinymce/langs/zh_TW.js",language:"zh_TW",placeholder:c.value,images_upload_url:"/api/article/admin/uploadArticlePic",images_upload_base_path:"/",convert_urls:!1,block_unsupported_drop:!0,plugins:"preview searchreplace autolink link image table autoresize autosave charmap code emoticons\n            help insertdatetime lists media quickbars template wordcount",toolbar:"newdocument preview restoredraft | undo redo searchreplace |\n      formatting text lists| alignment paragraphs styles|insertion|code wordcount help",toolbar_groups:{formatting:{icon:"format",tooltip:"格式",items:"color bold italic strikethrough underline| superscript subscript | removeformat"},text:{icon:"change-case",tooltip:"文字",items:"forecolor backcolor lineheight |  fontfamily fontsize"},alignment:{icon:"align-left",tooltip:"對齊",items:"alignleft aligncenter alignright alignjustify | outdent indent"},paragraphs:{icon:"paragraph",tooltip:"段落",items:"H1 h2 h3 h4 h5 h6 div"},lists:{icon:"ordered-list",tooptip:"列表",items:"numlist bullist"},insertion:{icon:"plus",tooltip:"新增",items:"image media table |hr link emoticons charmap insertdatetime | template "}},quickbars_insert_toolbar:" image media table |hr link emoticons charmap insertdatetime | template",quickbars_selection_toolbar:"quicklink| styles | forecolor backcolor fontfamily fontsize",autosave_interval:"30s",toolbar_sticky:!0,contextmenu:"redo undo"});return{show:o,modelValue:r,config:s,resetInput:function(){return r.value=i.value}}}};var S=n(3379),k=n.n(S),O=n(4947),V={insert:"head",singleton:!1};k()(O.Z,V);O.Z.locals;const x=(0,n(3744).Z)(w,[["render",function(e,t,n,i,l,a){var u=(0,o.up)("TitleItem"),c=(0,o.up)("Editor");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.WI)(e.$slots,"title",{},(function(){return[n.title?((0,o.wg)(),(0,o.j4)(u,{key:0,title:n.title},null,8,["title"])):(0,o.kq)("",!0)]})),(0,o.Wm)(o.uT,{name:"fade"},{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{modelValue:i.modelValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.modelValue=e}),init:i.config},null,8,["modelValue","init"])]})),_:1})])}]])},1080:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(9200),r={class:"flex items-center justify-between"},i={class:"grid grid-flow-col gap-4"};var l=n(6252),a=n(8637);const u={props:{title:{type:String,default:"管理"},return_to_route_name:{type:String,default:""},py:{type:String,default:""}},setup:function(e){var t=(0,a.oR)().commit,n=e.return_to_route_name,o=e.py;return{title:(0,l.Fl)((function(){return e.title})),return_to_route_name:n,py:o,commit:t}}};const c=(0,n(3744).Z)(u,[["render",function(e,t,n,l,a,u){var c=(0,o.up)("svg-render-vue"),s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",r,[l.return_to_route_name?((0,o.wg)(),(0,o.j4)(s,{key:0,to:{name:l.return_to_route_name},class:"text-blue-500 px-2",onClick:t[0]||(t[0]=function(e){return l.commit("clearStatus")})},{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{type:"return",size:"lg"})]})),_:1},8,["to"])):(0,o.kq)("",!0),(0,o.WI)(e.$slots,"return_router"),(0,o._)("div",{class:(0,o.C_)(["flex-auto px-2 py-4 font-bold text-2xl",l.py])},(0,o.zw)(l.title),3),(0,o._)("div",i,[(0,o.WI)(e.$slots,"button")])])}]])}}]);