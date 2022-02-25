"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Objects_Canvas_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/Canvas.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/Canvas.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var canvasBoxDOM = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var canvasDOM = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var canvasWidth = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(750);
    var canvasHeight = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(300);
    var color = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      r: 0,
      g: 0,
      b: 0
    });
    var drawing = false;
    var img = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var ctx;

    var mouseDown = function mouseDown(e) {
      var el = e.target || e.scrElement;
      console.log("mouseDown"); // console.log("e", e);
      // console.log("e.client", e.clientX, e.clientY);
      // console.log("e.offset", e.offsetX, e.offsetY);
      // console.log("e.page", e.pageX, e.pageY);
      // console.log("e.screen", e.screenX, e.screenY);
      // console.log("e.screen", e.screenX, e.screenY);
      //開始記錄位置

      ctx.beginPath(); //移到初始位置

      ctx.moveTo(e.offsetX, e.offsetY);
      drawing = true;

      el.onmousemove = function (e) {
        if (drawing) {
          console.log("mouseMove"); //連接至新的點

          ctx.lineTo(e.offsetX, e.offsetY); //繪製

          ctx.stroke();
        }
      };

      el.onmouseup = function () {
        console.log("mouseUp"); //關閉記錄位置

        ctx.closePath();
        drawing = false;
      };
    };

    var touchStart = function touchStart(e) {
      console.log("touchstart");
      var el = e.target || e.scrElement; //誤差

      var differX = e.target.offsetLeft;
      var differY = e.target.offsetTop; // (document.body.scrollWidth - canvasDOM.value.offsetWidth) / 2;
      // document.body.scrollHeight - canvasDOM.value.offsetHeight -document.body.scrollTop;
      // console.log(
      //   "document.body.scrollHeight",
      //   document.body.scrollHeight,
      //   "document.body.clientHeight",
      //   document.body.clientHeight,
      //   "canvasDOM.value.offsetHeight",
      //   canvasDOM.value.offsetHeight,
      //   "canvasDOM.value.scrollHeight",
      //   canvasDOM.value.scrollHeight,
      //   "canvasDOM.value.clientHeight",
      //   canvasDOM.value.clientHeight,
      //   "scrolltop",
      //   document.body.scrollTop
      // );
      //開始繪製

      ctx.beginPath(); //移到初始位置

      ctx.moveTo(e.targetTouches[0].clientX - differX, e.targetTouches[0].clientY - differY);
      drawing = true;

      el.ontouchmove = function (e) {
        console.log("touchmove");

        if (drawing) {
          //連接至新的點
          ctx.lineTo(e.targetTouches[0].clientX - differX, e.targetTouches[0].clientY - differY); //繪製

          ctx.stroke();
        }
      };

      el.ontouchend = function () {
        console.log("ontouchEnd"); //關閉繪製

        ctx.closePath();
        drawing = false;
      };
    };

    var resetCanvas = function resetCanvas() {
      ctx.fillStyle = "#FFFFFF";
      ctx.clearRect(0, 0, canvasDOM.value.width, canvasDOM.value.height);
      ctx.fillRect(0, 0, canvasDOM.value.width, canvasDOM.value.height);
      console.log(ctx);
    };

    var current_color = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      var current_color = "rgb(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ")");

      if (ctx) {
        ctx.strokeStyle = current_color;
      }

      return current_color;
    });
    var line_width = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.watch)(line_width, function () {
      ctx.lineWidth = line_width.value;
    });

    var confirmCanvas = function confirmCanvas() {
      if (confirm("確定儲存簽名")) {
        img.value = canvasDOM.value.toDataURL("image/png");
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("/upLoadBase64Img", {
          img_base64: img.value
        }).then(function (res) {});
      }
    };

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onMounted)(function () {
      canvasWidth.value = canvasBoxDOM.value.offsetWidth / 2;
      canvasHeight.value = canvasBoxDOM.value.offsetHeight / 2; // console.log(
      //   "document.body",
      //   document,
      //   "canvasBoxDOM,",
      //   canvasBoxDOM,
      //   "canvasDOM",
      //   canvasDOM
      // );

      ctx = canvasDOM.value.getContext("2d");
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvasDOM.value.width, canvasDOM.value.height);
      }); // console.log(ctx);
    });
    return _objectSpread(_objectSpread({}, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.toRefs)(color)), {}, {
      canvasDOM: canvasDOM,
      canvasBoxDOM: canvasBoxDOM,
      canvasWidth: canvasWidth,
      canvasHeight: canvasHeight,
      mouseDown: mouseDown,
      touchStart: touchStart,
      resetCanvas: resetCanvas,
      confirmCanvas: confirmCanvas,
      current_color: current_color,
      line_width: line_width
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/Canvas.vue?vue&type=template&id=21d7287e":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/Canvas.vue?vue&type=template&id=21d7287e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-100 w-100 flex-cc",
  ref: "canvasBoxDOM"
};
var _hoisted_2 = {
  "class": "d-flex flex-column me-2"
};
var _hoisted_3 = {
  "class": "flex-cc text-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "目前顏色: ", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "R"
}, "R:", -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "G"
}, "G:", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "B"
}, "B:", -1
/* HOISTED */
);

var _hoisted_8 = {
  "for": "line_width",
  "class": "text-center"
};
var _hoisted_9 = ["width", "height"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "d-inline-block ms-1",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "width": "20px",
      "height": "20px"
    }, {
      'background-color': $setup.current_color
    }])
  }, null, 4
  /* STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    name: "R",
    min: "0",
    max: "255",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.r = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.r]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    name: "G",
    min: "0",
    max: "255",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.g = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.g]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    name: "B",
    min: "0",
    max: "255",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.b = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.b]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_8, "線條粗細:" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.line_width), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "range",
    name: "line_width",
    min: "1",
    max: "10",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.line_width = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.line_width]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "button",
    value: "重製畫布",
    onClick: _cache[4] || (_cache[4] = function () {
      return $setup.resetCanvas && $setup.resetCanvas.apply($setup, arguments);
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "button",
    value: "確認簽名",
    onClick: _cache[5] || (_cache[5] = function () {
      return $setup.confirmCanvas && $setup.confirmCanvas.apply($setup, arguments);
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", {
    onMousedown: _cache[6] || (_cache[6] = function () {
      return $setup.mouseDown && $setup.mouseDown.apply($setup, arguments);
    }),
    onTouchstart: _cache[7] || (_cache[7] = function () {
      return $setup.touchStart && $setup.touchStart.apply($setup, arguments);
    }),
    ref: "canvasDOM",
    width: $setup.canvasWidth,
    height: $setup.canvasHeight,
    "class": "border-gray-radius"
  }, null, 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_9)], 512
  /* NEED_PATCH */
  );
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/Objects/Canvas.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Objects/Canvas.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Canvas_vue_vue_type_template_id_21d7287e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.vue?vue&type=template&id=21d7287e */ "./resources/js/components/Objects/Canvas.vue?vue&type=template&id=21d7287e");
/* harmony import */ var _Canvas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas.vue?vue&type=script&lang=js */ "./resources/js/components/Objects/Canvas.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Canvas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Canvas_vue_vue_type_template_id_21d7287e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Objects/Canvas.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Objects/Canvas.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Objects/Canvas.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Canvas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Canvas_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Canvas.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/Canvas.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Objects/Canvas.vue?vue&type=template&id=21d7287e":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Objects/Canvas.vue?vue&type=template&id=21d7287e ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Canvas_vue_vue_type_template_id_21d7287e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Canvas_vue_vue_type_template_id_21d7287e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Canvas.vue?vue&type=template&id=21d7287e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/Canvas.vue?vue&type=template&id=21d7287e");


/***/ })

}]);