"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Product_ShoppingListItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _FormattedPrice_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattedPrice.vue */ "./resources/js/components/User/Product/FormattedPrice.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CounterItem: (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.defineAsyncComponent)(function () {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Global_CounterItem_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../Global/CounterItem.vue */ "./resources/js/components/Global/CounterItem.vue"));
    }),
    FormattedPrice: _FormattedPrice_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    product: {
      type: Object,
      "default": function _default() {}
    },
    editable: {
      type: Boolean,
      "default": false
    },
    gridColsClass: {
      type: String,
      "default": " grid-cols-4 md:grid-cols-8"
    }
  },
  setup: function setup(props) {
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
    var cur_route = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return route.name;
    });

    var _useStore = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)(),
        dispatch = _useStore.dispatch;
    /* 購物車產品資訊 */


    var _toRefs = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.toRefs)(props),
        product = _toRefs.product,
        editable = _toRefs.editable,
        gridColsClass = _toRefs.gridColsClass; // console.log(product.value);

    /* 接收counter的emit */


    var amountChange = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(val) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(val != product.value.amount)) {
                  _context.next = 4;
                  break;
                }

                product.value.amount = val; // console.log("amountChange",val);

                _context.next = 4;
                return dispatch("productHandler/addProductToCart", {
                  amount: val,
                  product_id: product.value.product_id,
                  order_id: product.value.order_id
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function amountChange(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var handleDeleteCartProduct = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dispatch("productHandler/deleteCartProduct", {
                  product_id: product.value.product_id,
                  order_id: product.value.order_id
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function handleDeleteCartProduct() {
        return _ref2.apply(this, arguments);
      };
    }();

    return _objectSpread(_objectSpread({
      cur_route: cur_route,
      editable: editable,
      gridColsClass: gridColsClass
    }, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_5__.toRefs)(product.value)), {}, {
      product: product,
      amountChange: amountChange,
      handleDeleteCartProduct: handleDeleteCartProduct
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=template&id=58c664a2":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=template&id=58c664a2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-span-1 hidden md:block"
};
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = {
  "class": "col-span-1 md:col-span-2"
};
var _hoisted_4 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_FormattedPrice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormattedPrice");

  var _component_CounterItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CounterItem");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['grid justify-items-center items-center p-2 border-gray-300-sm bg-white border-b-0 last:border-b', $setup.gridColsClass])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.image,
    alt: _ctx.name,
    width: "100",
    height: "100"
  }, null, 8
  /* PROPS */
  , _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" {{ product }} "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      path: "/products/".concat(_ctx.eng_name, "/").concat(_ctx.product_id)
    },
    "class": "col-span-1 md:col-span-3 hover:text-blue-800 font-bold"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.name), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormattedPrice, {
    price: _ctx.price,
    "class": "col-span-1"
  }, null, 8
  /* PROPS */
  , ["price"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$setup.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_CounterItem, {
    key: 0,
    value: _ctx.amount,
    "onUpdate:value": $setup.amountChange,
    onDecreaseLowerThan0: $setup.handleDeleteCartProduct
  }, null, 8
  /* PROPS */
  , ["value", "onUpdate:value", "onDecreaseLowerThan0"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.amount), 1
  /* TEXT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormattedPrice, {
    price: _ctx.price * _ctx.amount,
    "class": "col-span-1"
  }, null, 8
  /* PROPS */
  , ["price"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    product: $setup.product
  })], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./resources/js/components/User/Product/ShoppingListItem.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/User/Product/ShoppingListItem.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShoppingListItem_vue_vue_type_template_id_58c664a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingListItem.vue?vue&type=template&id=58c664a2 */ "./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=template&id=58c664a2");
/* harmony import */ var _ShoppingListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingListItem.vue?vue&type=script&lang=js */ "./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_bbking_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_bbking_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ShoppingListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShoppingListItem_vue_vue_type_template_id_58c664a2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/User/Product/ShoppingListItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShoppingListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShoppingListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShoppingListItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=template&id=58c664a2":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=template&id=58c664a2 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShoppingListItem_vue_vue_type_template_id_58c664a2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ShoppingListItem_vue_vue_type_template_id_58c664a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ShoppingListItem.vue?vue&type=template&id=58c664a2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/Product/ShoppingListItem.vue?vue&type=template&id=58c664a2");


/***/ })

}]);