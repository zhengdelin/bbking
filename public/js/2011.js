"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2011],{3973:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".input_single_checkbox input{border:1px solid hsla(0,0%,50%,.5);border-radius:10px;padding-right:1rem}",""]);const i=o},4947:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".tox.tox-tinymce-inline .tox-editor-header{border-bottom:0!important;border-radius:0!important}.tox-notifications-container>.tox-notification--warning{display:none!important}.fade-enter-active,.fade-leave-active{transition:opacity 1s}.fade-enter-to,.fade-leave-from{opacity:1}.fade-enter-from,.fade-leave-to{opacity:0}",""]);const i=o},2011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(9200),o={class:"col-span-3 md:col-span-2"},i={class:"col-span-3 md:col-span-2"},a={class:"col-span-6 md:col-span-3"};var l=n(7965),u=n(6314),s=n(6099),c=n(1080),d=n(1067),p=n(8637),f=n(2262),m=n(2119),g=n(1014),v=n(7482),h=n(2792);const y={components:{AdminInputFormVue:l.Z,InputTextVue:u.Z,InputFileVue:s.Z,TitleItem:c.Z,InputSingleCheckbox:g.Z,TinymceEditor:v.Z,CreateButton:h.Z},props:{info:{type:String,default:function(){}}},setup:function(){var e=(0,p.oR)(),t=e.dispatch,n=e.state,r=(0,m.tv)(),o=(0,f.iH)({name:"",eng_name:"",url:"",address:"",phone:"",email:"",business_hours:"",description:"",logo:null,isHeadquarter:!1,status:!0}),i=(0,f.qj)([{model:"name",focus:!0,required:!0,func_call:"globalHandler/checkStoreInfoName"},{model:"eng_name"},{model:"url"},{model:"address"},{model:"phone"},{model:"email"},{model:"business_hours",func_call:"globalHandler/checkStoreInfoBH"}]);return{TITLE:d.R,store_info:o,input_cols:i,handleCreateStoreInfo:function(){t("globalHandler/createStoreInfo",o.value).then((function(){"error"!==n.status&&r.push({name:"admin-store_infos",params:{update_store_info:!0}})}))},fileChange:function(e){o.value.logo=e},dispatch:t}}};const _=(0,n(3744).Z)(y,[["render",function(e,t,n,l,u,s){var c=(0,r.up)("title-item"),d=(0,r.up)("create-button"),p=(0,r.up)("input-text-vue"),f=(0,r.up)("input-single-checkbox"),m=(0,r.up)("input-file-vue"),g=(0,r.up)("admin-input-form-vue"),v=(0,r.up)("TinymceEditor");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c,{return_to_route_name:"admin-store_infos",title:"店家資訊 - 新增店家資訊"}),(0,r.Wm)(c,{title:"店家資訊"},{button:(0,r.w5)((function(){return[(0,r.Wm)(d,{onClick:l.handleCreateStoreInfo},null,8,["onClick"])]})),_:1}),(0,r.Wm)(g,{class:"mb-2"},{form_items:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.input_cols,(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"col-span-6 md:col-span-2",key:e.model},[(0,r.Wm)(p,{title:l.TITLE[e.model],focus:e.focus,required:e.required,modelValue:l.store_info[e.model],"onUpdate:modelValue":function(t){return l.store_info[e.model]=t},onChange:function(t){return e.func_call?l.dispatch(e.func_call,l.store_info[e.model]):null}},null,8,["title","focus","required","modelValue","onUpdate:modelValue","onChange"])])})),128)),(0,r._)("div",o,[(0,r.Wm)(f,{required:!0,title:l.TITLE.isHeadquarter,modelValue:l.store_info.isHeadquarter,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.store_info.isHeadquarter=e})},null,8,["title","modelValue"])]),(0,r._)("div",i,[(0,r.Wm)(f,{required:!0,title:"狀態",modelValue:l.store_info.status,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.store_info.status=e})},null,8,["modelValue"])]),(0,r._)("div",a,[(0,r.Wm)(m,{type:"image",required:!0,accept:"image/png,image/jpeg",title:"Logo",onFileChange:l.fileChange},null,8,["onFileChange"])])]})),_:1}),(0,r.Wm)(v,{content:l.store_info.description,"onUpdate:content":t[2]||(t[2]=function(e){return l.store_info.description=e}),placeholder:"...輸入關於我們"},null,8,["content"])],64)}]])},7965:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(9200),o={class:"bg-white rounded-md border-gray-500"},i={class:"p-4"},a={class:"grid grid-cols-6 gap-4 items-center"};const l={components:{},props:{input_cols:{type:Array,default:function(){return[{col_span:"col-span-2",component:"input-text-vue",trim:!0,title:String,model:String,func_call:String,func_datas:Array}]}},data_source:{type:Object||Array,default:function(){return{}||[]}}}};const u=(0,n(3744).Z)(l,[["render",function(e,t,n,l,u,s){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[(0,r._)("div",a,[(0,r.WI)(e.$slots,"form_items")])])])}]])},3400:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(9200),o={class:"w-[70vw] lg:w-[80vw] h-[70vh] bg-white rounded-lg p-3 relative"},i={class:"h-full flex items-center justify-center"},a=["src"];var l=n(2262),u=n(4825),s=n(8245),c=n(6252);const d={components:{InMask:s.Z,PreviewButton:u.Z},props:{src:{type:String||Array,default:""}},setup:function(e){var t=(0,c.Fl)((function(){return e.src})),n=(0,l.iH)(!1);return{src:t,toggle:n,toggleShowPreview:function(){n.value=!n.value}}}};const p=(0,n(3744).Z)(d,[["render",function(e,t,n,l,u,s){var c=(0,r.up)("preview-button"),d=(0,r.up)("svg-render-vue"),p=(0,r.up)("InMask");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c,{onClick:l.toggleShowPreview},null,8,["onClick"]),(0,r.wy)((0,r.Wm)(p,{class:"!fixed"},{default:(0,r.w5)((function(){return[(0,r._)("div",o,[(0,r._)("div",{class:"p-2 m-3 hover:cursor-pointer absolute top-0 left-0",onClick:t[0]||(t[0]=function(){return l.toggleShowPreview&&l.toggleShowPreview.apply(l,arguments)})},[(0,r.Wm)(d,{type:"return",class:"text-blue-500"})]),(0,r._)("div",i,[(0,r._)("img",{src:l.src,class:"max-w-[300px] md:max-w-[400px] lg:max-w-[500px] max-h-[90%]"},null,8,a)])])]})),_:1},512),[[r.F8,l.toggle]])],64)}]])},2792:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(9200),o={class:"bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white"};const i={props:{target_text:{type:String,default:""}},setup:function(e){return{target_text:e.target_text}}};const a=(0,n(3744).Z)(i,[["render",function(e,t,n,i,a,l){var u=(0,r.up)("svg-render-vue");return(0,r.wg)(),(0,r.iD)("button",o,[(0,r.Wm)(u,{type:"plus",class:"mr-1"}),(0,r._)("span",null,"新增"+(0,r.zw)(i.target_text),1)])}]])},4825:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9200),o={class:"bg-slate-200 hover:bg-slate-300"},i=(0,r._)("span",null,"預覽",-1);const a={};const l=(0,n(3744).Z)(a,[["render",function(e,t,n,a,l,u){var s=(0,r.up)("svg-render-vue");return(0,r.wg)(),(0,r.iD)("button",o,[(0,r.Wm)(s,{type:"preview",class:"mr-1"}),i])}]])},6099:(e,t,n)=>{n.d(t,{Z:()=>V});var r=n(9200),o={class:"grid gap-2 grid-flow-col auto-cols-max items-center"},i={class:"font-bold"},a={key:0,class:"text-red-500"},l={class:"overflow-hidden whitespace-nowrap text-ellipsis w-20"},u=["accept"];var s=n(7757),c=n.n(s),d=n(6252),p=n(2262),f={class:"text-white bg-cyan-400 hover:bg-cyan-500 hover:cursor-pointer"};const m={props:{svg_name:{type:String,default:""},target_text:{type:String,default:""}},setup:function(e){return{target_text:e.target_text,svg_name:e.svg_name}}};var g=n(3744);const v=(0,g.Z)(m,[["render",function(e,t,n,o,i,a){var l=(0,r.up)("svg-render-vue");return(0,r.wg)(),(0,r.iD)("button",f,[(0,r.Wm)(l,{type:o.svg_name,class:"mr-1"},null,8,["type"]),(0,r._)("span",null,"上傳"+(0,r.zw)(o.target_text),1)])}]]);var h=n(3400),y=n(4825),_={class:"bg-red-500 hover:bg-red-400 hover:cursor-pointer text-white"},b=(0,r._)("span",null,"刪除",-1);const w={},x=(0,g.Z)(w,[["render",function(e,t,n,o,i,a){var l=(0,r.up)("svg-render-vue");return(0,r.wg)(),(0,r.iD)("button",_,[(0,r.Wm)(l,{type:"delete",class:"mr-1"}),b])}]]);var S=n(8637);function C(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}const k={components:{UploadButtonVue:v,PreviewButtonVue:y.Z,DeleteButtonVue:x,ImagePreviewVue:h.Z},props:{title:{type:String,default:""},required:{type:Boolean,default:!1},accept:{type:String,default:""},type:{type:String,default:""},image_src:{type:[String,File],default:""}},emits:{fileChange:{type:Object,default:function(){}}},setup:function(e,t){var n=t.emit,r=(0,S.oR)().dispatch,o=(0,p.iH)(),i=(0,p.BK)(e),a=i.title,l=i.required,u=i.accept,s=i.type,f=i.image_src,m=(0,p.iH)(""),g=(0,p.iH)(""),v=function(){var e,t=(e=c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.target.files.length>0)){e.next=7;break}if(m.value=t.target.files[0].name,n("fileChange",t.target.files[0]),"image"!==s.value){e.next=7;break}return e.next=6,r("readImageAsDataUrl",t.target.files[0]);case 6:g.value=e.sent;case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){C(i,r,o,a,l,"next",e)}function l(e){C(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,d.bv)((function(){m.value=f.value,g.value=f.value})),{inputDOM:o,title:a,required:l,accept:u,type:s,img_data:g,file_name:m,target_text:{image:"圖片"},fileChange:v,deleteFile:function(){m.value="",n("fileChange",{}),"image"===s.value&&(g.value="")}}}},V=(0,g.Z)(k,[["render",function(e,t,n,s,c,d){var p=(0,r.up)("upload-button-vue"),f=(0,r.up)("delete-button-vue"),m=(0,r.up)("image-preview-vue");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[s.required?((0,r.wg)(),(0,r.iD)("span",a,"* ")):(0,r.kq)("",!0),(0,r._)("span",null,(0,r.zw)(s.title),1)]),(0,r.Wm)(p,{svg_name:s.type,target_text:s.target_text[s.type],onClick:t[0]||(t[0]=function(e){return s.inputDOM.click()})},null,8,["svg_name","target_text"]),s.img_data?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("div",l,(0,r.zw)(s.file_name),1),(0,r.Wm)(f,{onClick:s.deleteFile},null,8,["onClick"]),(0,r.Wm)(m,{src:s.img_data},null,8,["src"])],64)):(0,r.kq)("",!0),(0,r._)("input",{type:"file",onChange:t[1]||(t[1]=function(){return s.fileChange&&s.fileChange.apply(s,arguments)}),accept:s.accept,ref:"inputDOM",hidden:""},null,40,u)])}]])},1014:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(9200),o={class:"input_single_checkbox w-full"},i={class:"py-1"},a=["checked"],l={for:"field",class:"font-bold px-1"};var u=n(6252),s=n(2262);const c={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var n=t.attrs,r=t.emit,o=(0,s.iH)(null);return(0,u.bv)((function(){e.focus&&o.value.focus()})),{props:e,attrs:n,field:o,emitInput:function(e){r("update:modelValue",e.target.checked)}}}};var d=n(3379),p=n.n(d),f=n(3973),m={insert:"head",singleton:!1};p()(f.Z,m);f.Z.locals;const g=(0,n(3744).Z)(c,[["render",function(e,t,n,u,s,c){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[(0,r._)("input",(0,r.dG)({name:"field",type:"checkbox"},u.attrs,{ref:"field",checked:u.attrs.modelValue,onInput:t[0]||(t[0]=function(){return u.emitInput&&u.emitInput.apply(u,arguments)})}),null,16,a),(0,r._)("label",l,(0,r.zw)(u.props.title),1)])])}]])},6314:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(9200),o={class:"font-bold"},i={key:0,class:"text-red-500"},a={class:"font-MicrosoftJhengHei"},l={class:"w-full py-1"},u=["type","placeholder","required"];var s=n(6252),c=n(2262);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m={inheritAttrs:!1,props:{title:{type:String,default:""},focus:{type:Boolean,default:!1},trim:{type:Boolean,default:!0},isNumber:{type:Boolean,default:!1},required:{type:Boolean,default:!1},type:{type:String,default:"text"}},emits:{"update:modelValue":{type:String,default:""}},setup:function(e,t){var n=t.attrs,r=t.emit,o=(0,c.iH)(),i=(0,c.BK)(e),a=i.title,l=i.trim,u=i.focus,d=i.isNumber,f=(0,s.Fl)((function(){return"輸入"+a.value})),m=(0,s.Fl)({get:function(){return n.modelValue},set:function(e){return r("update:modelValue",e)}});return(0,s.bv)((function(){u.value&&o.value.focus()})),p(p({modelValue:m,placeholder:f},(0,c.BK)(e)),{},{modelValueChange:function(){l.value&&(m.value=m.value.trim()),d.value&&(m.value=m.value.replace(/[^0-9]/gi,""))},field:o})}};const g=(0,n(3744).Z)(m,[["render",function(e,t,n,s,c,d){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",o,[n.required?((0,r.wg)(),(0,r.iD)("span",i,"* ")):(0,r.kq)("",!0),(0,r._)("span",a,(0,r.zw)(n.title),1)]),(0,r._)("div",l,[(0,r.wy)((0,r._)("input",{class:"w-full h-[40px] placeholder:font-bold border-gray-500 border-opacity-50 border-[1px] rounded-sm pl-4",type:n.type||"text",ref:"field","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.modelValue=e}),placeholder:s.placeholder,onChange:t[1]||(t[1]=function(){return s.modelValueChange&&s.modelValueChange.apply(s,arguments)}),required:n.required},null,40,u),[[r.YZ,s.modelValue]])])])}]])},7482:(e,t,n)=>{n.d(t,{Z:()=>V});var r=n(9200),o={class:"bg-white no-tailwind-base"};var i,a=n(6252),l=n(2262),u=n(8637),s=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],c=function(e){return-1!==s.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},d=function(e,t,n,o,i,a){o.setContent(a()),n.attrs["onUpdate:modelValue"]&&function(e,t,n,o){var i=e.modelEvents?e.modelEvents:null,a=Array.isArray(i)?i.join(" "):i;(0,r.YP)(o,(function(t,r){n&&"string"==typeof t&&t!==r&&t!==n.getContent({format:e.outputFormat})&&n.setContent(t)})),n.on(a||"change input undo redo",(function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))}))}(t,n,o,i),function(e,t,n){Object.keys(t).filter(c).forEach((function(r){var o=t[r];"function"==typeof o&&("onInit"===r?o(e,n):n.on(r.substring(2),(function(e){return o(e,n)})))}))}(e,n.attrs,o)},p=0,f=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++p+String(t)},m=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},g=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoaded:!1}},v=(i=g(),{load:function(e,t,n){i.scriptLoaded?n():(i.listeners.push(n),e.getElementById(i.scriptId)||function(e,t,n,r){var o=t.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=e,o.src=n;var i=function(){o.removeEventListener("load",i),r()};o.addEventListener("load",i),t.head&&t.head.appendChild(o)}(i.scriptId,e,t,(function(){i.listeners.forEach((function(e){return e()})),i.scriptLoaded=!0})))},reinitialize:function(){i=g()}}),h=function(){var e="undefined"!=typeof window?window:n.g;return e&&e.tinymce?e.tinymce:null},y={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},_=function(){return _=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_.apply(this,arguments)};const b=(0,r.aZ)({props:y,setup:function(e,t){var n=e.init?_({},e.init):{},o=(0,r.BK)(e),i=o.disabled,a=o.modelValue,l=o.tagName,u=(0,r.iH)(null),s=null,c=e.id||f("tiny-vue"),p=e.init&&e.init.inline||e.inline,g=!!t.attrs["onUpdate:modelValue"],y=!0,b=e.initialValue?e.initialValue:"",w="",x=function(){var r,o,i,l=(r=y,g?function(){return(null==a?void 0:a.value)?a.value:""}:function(){return r?b:w}),f=_(_({},n),{readonly:e.disabled,selector:"#"+c,plugins:(o=n.plugins,i=e.plugins,m(o).concat(m(i))),toolbar:e.toolbar||n.toolbar,inline:p,setup:function(r){s=r,r.on("init",(function(n){return d(n,e,t,r,a,l)})),"function"==typeof n.setup&&n.setup(r)}});(function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()})(u.value)&&(u.value.style.visibility=""),h().init(f),y=!1};(0,r.YP)(i,(function(e){null!==s&&s.setMode(e?"readonly":"design")})),(0,r.YP)(l,(function(e){var t;g||(w=s.getContent()),null===(t=h())||void 0===t||t.remove(s),(0,r.Y3)((function(){return x()}))})),(0,r.bv)((function(){if(null!==h())x();else if(u.value&&u.value.ownerDocument){var t=e.cloudChannel?e.cloudChannel:"5",n=e.apiKey?e.apiKey:"no-api-key",r=null==e.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":e.tinymceScriptSrc;v.load(u.value.ownerDocument,r,x)}})),(0,r.Jd)((function(){null!==h()&&h().remove(s)})),p||((0,r.dl)((function(){y||x()})),(0,r.se)((function(){var e;g||(w=s.getContent()),null===(e=h())||void 0===e||e.remove(s)})));return t.expose({rerender:function(e){var t;w=s.getContent(),null===(t=h())||void 0===t||t.remove(s),n=_(_({},n),e),(0,r.Y3)((function(){return x()}))}}),function(){return p?function(e,t,n,r){return e(r||"div",{id:t,ref:n})}(r.h,c,u,e.tagName):(0,r.h)("textarea",{id:c,visibility:"hidden",ref:u})}}});const w={components:{TitleItem:n(1080).Z,Editor:b},props:{title:{type:String,default:""},content:{type:String,default:""},placeholder:{type:String,default:"...請輸入文字"}},emits:["update:content"],setup:function(e,t){var n=t.emit,r=((0,u.oR)().dispatch,(0,l.iH)(!1)),o=(0,a.Fl)({get:function(){return e.content},set:function(e){return n("update:content",e)}}),i=(0,l.iH)();i.value=o.value;var s=(0,a.Fl)((function(){return o.value?"":e.placeholder})),c=((0,l.iH)(),{language_url:"../../assets/tinymce/langs/zh_TW.js",language:"zh_TW",placeholder:s.value,images_upload_url:"/api/article/admin/uploadArticlePic",images_upload_base_path:"/",convert_urls:!1,block_unsupported_drop:!0,plugins:"preview searchreplace autolink link image table autoresize autosave charmap code emoticons\n            help insertdatetime lists media quickbars template wordcount",toolbar:"newdocument preview restoredraft | undo redo searchreplace |\n      formatting text lists| alignment paragraphs styles|insertion|code wordcount help",toolbar_groups:{formatting:{icon:"format",tooltip:"格式",items:"color bold italic strikethrough underline| superscript subscript | removeformat"},text:{icon:"change-case",tooltip:"文字",items:"forecolor backcolor lineheight |  fontfamily fontsize"},alignment:{icon:"align-left",tooltip:"對齊",items:"alignleft aligncenter alignright alignjustify | outdent indent"},paragraphs:{icon:"paragraph",tooltip:"段落",items:"H1 h2 h3 h4 h5 h6 div"},lists:{icon:"ordered-list",tooptip:"列表",items:"numlist bullist"},insertion:{icon:"plus",tooltip:"新增",items:"image media table |hr link emoticons charmap insertdatetime | template "}},quickbars_insert_toolbar:" image media table |hr link emoticons charmap insertdatetime | template",quickbars_selection_toolbar:"quicklink| styles | forecolor backcolor fontfamily fontsize",autosave_interval:"30s",toolbar_sticky:!0,contextmenu:"redo undo"});return{show:r,modelValue:o,config:c,resetInput:function(){return o.value=i.value}}}};var x=n(3379),S=n.n(x),C=n(4947),k={insert:"head",singleton:!1};S()(C.Z,k);C.Z.locals;const V=(0,n(3744).Z)(w,[["render",function(e,t,n,i,a,l){var u=(0,r.up)("TitleItem"),s=(0,r.up)("Editor");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.WI)(e.$slots,"title",{},(function(){return[n.title?((0,r.wg)(),(0,r.j4)(u,{key:0,title:n.title},null,8,["title"])):(0,r.kq)("",!0)]})),(0,r.Wm)(r.uT,{name:"fade"},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{modelValue:i.modelValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.modelValue=e}),init:i.config},null,8,["modelValue","init"])]})),_:1})])}]])},1080:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(9200),o={class:"flex items-center justify-between"},i={class:"grid grid-flow-col gap-4"};var a=n(6252),l=n(8637);const u={props:{title:{type:String,default:"管理"},return_to_route_name:{type:String,default:""},py:{type:String,default:""}},setup:function(e){var t=(0,l.oR)().commit,n=e.return_to_route_name,r=e.py;return{title:(0,a.Fl)((function(){return e.title})),return_to_route_name:n,py:r,commit:t}}};const s=(0,n(3744).Z)(u,[["render",function(e,t,n,a,l,u){var s=(0,r.up)("svg-render-vue"),c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",o,[a.return_to_route_name?((0,r.wg)(),(0,r.j4)(c,{key:0,to:{name:a.return_to_route_name},class:"text-blue-500 px-2",onClick:t[0]||(t[0]=function(e){return a.commit("clearStatus")})},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{type:"return",size:"lg"})]})),_:1},8,["to"])):(0,r.kq)("",!0),(0,r.WI)(e.$slots,"return_router"),(0,r._)("div",{class:(0,r.C_)(["flex-auto px-2 py-4 font-bold text-2xl",a.py])},(0,r.zw)(a.title),3),(0,r._)("div",i,[(0,r.WI)(e.$slots,"button")])])}]])}}]);