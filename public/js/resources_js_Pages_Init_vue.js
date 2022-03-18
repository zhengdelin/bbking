"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Init_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Init.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Init.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _router_after_login_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/after_login_routes */ "./resources/js/router/after_login_routes.js");
/* harmony import */ var _router_admin_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router/admin_routes */ "./resources/js/router/admin_routes.js");
/* harmony import */ var _router_boss_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/boss_routes */ "./resources/js/router/boss_routes.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var _useStore = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)(),
        state = _useStore.state,
        commit = _useStore.commit;

    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute)();
    console.log(router, route); //404網頁

    var not_found_route = {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      meta: {
        title: "not found"
      },
      component: function component() {
        return __webpack_require__.e(/*! import() */ "resources_js_Pages_404_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./404.vue */ "./resources/js/Pages/404.vue"));
      }
    };
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.onMounted)(function () {
      /* 如果有登入了 */
      if (state.is_login) {
        //先移除404
        router.removeRoute("NotFound");
        _router_after_login_routes__WEBPACK_IMPORTED_MODULE_0__.after_login_routes.forEach(function (i) {
          router.addRoute(i);
        }); //設置nav

        commit("setNav", 1); //將404加回來

        router.addRoute(not_found_route);
      }

      if (!state.init && state.is_login) {
        router.removeRoute("NotFound");

        switch (state.user_info.role_id) {
          case 2:
            _router_admin_routes__WEBPACK_IMPORTED_MODULE_1__.admin_routes.forEach(function (i) {
              router.addRoute(i);
            });
            break;

          case 3:
            [].concat(_toConsumableArray(_router_boss_routes__WEBPACK_IMPORTED_MODULE_2__.boss_routes), _toConsumableArray(_router_admin_routes__WEBPACK_IMPORTED_MODULE_1__.admin_routes)).forEach(function (i) {
              router.addRoute(i);
            });
            break;
        }

        router.addRoute(not_found_route);
        commit("setNav", 2);
        commit("init");
        router.push({
          name: "home"
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Init.vue?vue&type=template&id=d142578e":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Init.vue?vue&type=template&id=d142578e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div");
}

/***/ }),

/***/ "./resources/js/Pages/Init.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Init.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Init_vue_vue_type_template_id_d142578e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Init.vue?vue&type=template&id=d142578e */ "./resources/js/Pages/Init.vue?vue&type=template&id=d142578e");
/* harmony import */ var _Init_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Init.vue?vue&type=script&lang=js */ "./resources/js/Pages/Init.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Init_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Init_vue_vue_type_template_id_d142578e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Init.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Init.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Init.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Init_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Init_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Init.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Init.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Init.vue?vue&type=template&id=d142578e":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Init.vue?vue&type=template&id=d142578e ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Init_vue_vue_type_template_id_d142578e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Init_vue_vue_type_template_id_d142578e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Init.vue?vue&type=template&id=d142578e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Init.vue?vue&type=template&id=d142578e");


/***/ })

}]);