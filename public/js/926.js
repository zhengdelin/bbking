"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[926],{9238:(r,t,n)=>{n.d(t,{Z:()=>c});var e=n(3645),a=n.n(e)()((function(r){return r[1]}));a.push([r.id,".article_banner_introduction[data-v-371b1592]{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden}",""]);const c=a},3926:(r,t,n)=>{n.r(t),n.d(t,{default:()=>C});var e=n(9200),a={class:"grid grid-cols-1 bg-white rounded-md"},c=(0,e._)("div",{class:"bg-white rounded-md py-4 flex justify-center"},[(0,e._)("button",{class:"border-gray-300 border-[1px] mx-2"}," 上一頁 "),(0,e._)("button",{class:"border-gray-300 border-[1px] mx-2"}," 下一頁 ")],-1);var o=n(7757),i=n.n(o),u=n(6252),s=n(2262),l=n(2119),d=n(8637),p={class:"border-b border-gray-300 rounded-md px-3 py-4"},f=["innerHTML"],v=function(r){return(0,e.dD)("data-v-371b1592"),r=r(),(0,e.Cn)(),r}((function(){return(0,e._)("span",{class:"font-bold pl-1"},"比比王樂器",-1)})),b=(0,e.Uk)(" · "),h={class:"hover:underline"};const w={props:{article:{type:Object,default:function(){}}},setup:function(r){var t=(0,u.Fl)((function(){return r.article})),n=(0,l.yj)();return{article:t,path:(0,u.Fl)((function(){return n.path}))}}};var y=n(3379),g=n.n(y),m=n(9238),x={insert:"head",singleton:!1};g()(m.Z,x);m.Z.locals;var k=n(3744);function _(r,t,n,e,a,c,o){try{var i=r[c](o),u=i.value}catch(r){return void n(r)}i.done?t(u):Promise.resolve(u).then(e,a)}function j(r){return function(){var t=this,n=arguments;return new Promise((function(e,a){var c=r.apply(t,n);function o(r){_(c,e,a,o,i,"next",r)}function i(r){_(c,e,a,o,i,"throw",r)}o(void 0)}))}}const H={name:"ArticleList",components:{ArticleBanner:(0,k.Z)(w,[["render",function(r,t,n,a,c,o){var i=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",p,[(0,e.Wm)(i,{to:{path:"".concat(a.path,"/").concat(a.article.id)},class:"font-bold block mb-2 hover:text-indigo-500"},{default:(0,e.w5)((function(){return[(0,e.Uk)((0,e.zw)(a.article.title),1)]})),_:1},8,["to"]),(0,e._)("div",{class:"article_banner_introduction mb-1",innerHTML:a.article.content},null,8,f),(0,e._)("div",null,[v,b,(0,e._)("span",h,(0,e.zw)(a.article.updated_at),1)])])}],["__scopeId","data-v-371b1592"]])},setup:function(){return j(i().mark((function r(){var t,n,e,a,c,o,p,f;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=(0,s.iH)(!1),(0,u.bv)((function(){t.value=!0})),n=(0,l.tv)(),e=(0,l.yj)(),a=(0,d.oR)(),c=a.dispatch,o=(0,u.Fl)((function(){return e.params.category})),(0,l.ao)(function(){var r=j(i().mark((function r(t){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.params.category||p[t.params.category]){r.next=3;break}return r.next=3,f(t.params.category);case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()),(0,u.YP)(o,function(){var r=j(i().mark((function r(t){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t||p[t]){r.next=3;break}return r.next=3,f(t);case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()),p=(0,s.qj)({}),r.next=11,c("articleHandler/getArticlesByCategory",{category:o.value}).then((function(r){r?p[o.value]=r:n.replace({name:"all-categories"})}));case 11:return f=function(){var r=j(i().mark((function r(t){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c("articleHandler/getArticlesByCategory",{category:t});case 2:p[t]=r.sent;case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),r.abrupt("return",{category:o,articles:p,show:t});case 13:case"end":return r.stop()}}),r)})))()}},C=(0,k.Z)(H,[["render",function(r,t,n,o,i,u){var s=(0,e.up)("article-banner");return(0,e.wg)(),(0,e.j4)(e.uT,{name:"fade-from-bottom-15px"},{default:(0,e.w5)((function(){return[(0,e.wy)((0,e._)("div",null,[(0,e._)("div",a,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.articles[o.category],(function(r){return(0,e.wg)(),(0,e.j4)(s,{key:r.id,article:r},null,8,["article"])})),128))]),c],512),[[e.F8,o.show]])]})),_:1})}]])}}]);