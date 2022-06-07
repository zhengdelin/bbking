"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Global_CounterItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Global/CounterItem.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Global/CounterItem.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: [Number, String],
      "default": 1
    }
  },
  emits: ["update:value", "decreaseLowerThan0"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    /* 數量 */
    var amount = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(props.value);
    /* 字串長度 */

    var amount_length = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return amount.value.toString().length;
    });
    /* 增加減少 */

    var increment = function increment() {
      amount.value++;
      emitAmount();
    };

    var decrement = function decrement() {
      if (amount.value === 1) {
        emit("decreaseLowerThan0");
      } else {
        amount.value--;
        emitAmount();
      }
    };

    var emitAmount = function emitAmount() {
      if (amount.value) {
        amount.value = amount.value.toString().replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
        amount.value = Number(amount.value);
      }

      if (amount.value <= 0) {
        emit("decreaseLowerThan0");
        amount.value = 1;
      }

      emit("update:value", amount.value);
    };

    var getInputWidth = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return (amount_length.value < 3 ? 3 : amount_length.value) + "rem";
    });
    return {
      amount: amount,
      increment: increment,
      decrement: decrement,
      getInputWidth: getInputWidth,
      emitAmount: emitAmount
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Global/CounterItem.vue?vue&type=template&id=037b72ce":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Global/CounterItem.vue?vue&type=template&id=037b72ce ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex items-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_svg_render_vue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("svg-render-vue");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.decrement && $setup.decrement.apply($setup, arguments);
    }),
    "class": "border border-gray-200 px-2 py-1 hover:bg-gray-200"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_render_vue, {
    type: "minus"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "amount",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.amount = $event;
    }),
    "class": "px-1 py-1 text-center",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $setup.getInputWidth
    }),
    onChange: _cache[2] || (_cache[2] = function () {
      return $setup.emitAmount && $setup.emitAmount.apply($setup, arguments);
    })
  }, null, 36
  /* STYLE, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.amount]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $setup.increment && $setup.increment.apply($setup, arguments);
    }),
    "class": "border border-gray-200 px-2 py-1 hover:bg-gray-200"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_svg_render_vue, {
    type: "plus"
  })])]);
}

/***/ }),

/***/ "./resources/js/components/Global/CounterItem.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Global/CounterItem.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CounterItem_vue_vue_type_template_id_037b72ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CounterItem.vue?vue&type=template&id=037b72ce */ "./resources/js/components/Global/CounterItem.vue?vue&type=template&id=037b72ce");
/* harmony import */ var _CounterItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CounterItem.vue?vue&type=script&lang=js */ "./resources/js/components/Global/CounterItem.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_bbking_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_bbking_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CounterItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CounterItem_vue_vue_type_template_id_037b72ce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Global/CounterItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Global/CounterItem.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Global/CounterItem.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CounterItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CounterItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CounterItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Global/CounterItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Global/CounterItem.vue?vue&type=template&id=037b72ce":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Global/CounterItem.vue?vue&type=template&id=037b72ce ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CounterItem_vue_vue_type_template_id_037b72ce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CounterItem_vue_vue_type_template_id_037b72ce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CounterItem.vue?vue&type=template&id=037b72ce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Global/CounterItem.vue?vue&type=template&id=037b72ce");


/***/ })

}]);