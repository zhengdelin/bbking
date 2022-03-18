"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Objects_SvgRender_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/SvgRender.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/SvgRender.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: {
      type: String,
      "default": ""
    },
    viewBox: {
      type: String,
      "default": "0 0 24 24"
    },
    width: {
      type: Number,
      "default": 24
    },
    height: {
      type: Number,
      "default": 24
    },
    combination: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    //props
    var type = props.type;
    var width = props.width;
    var height = props.height;
    var viewBox = props.viewBox; //svg

    var svg = {
      bold: {
        path: {
          d: "M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z",
          "fill-rule": "evenodd"
        }
      },
      italic: {
        path: {
          d: "M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z",
          "fill-rule": "evenodd"
        }
      },
      underline: {
        path: {
          d: "M16 5c.6 0 1 .4 1 1v5.5a4 4 0 01-.4 1.8l-1 1.4a5.3 5.3 0 01-5.5 1 5 5 0 01-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 01-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 002.2.8 3.4 3.4 0 002.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1zM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2z",
          "fill-rule": "evenodd"
        }
      },
      edit: {
        path: {
          d: "M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023z"
        }
      },
      "delete": {
        path: {
          d: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
        }
      },
      arrow_double_right: {
        path: {
          d: "M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"
        }
      },
      arrow_right: {
        path: {
          d: "M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"
        }
      },
      return_arrow: {
        path: {
          d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        }
      },
      image: {
        path: {
          d: "M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"
        }
      },
      preview: {
        path: {
          d: "M3.5 12.5c.5.8 1.1 1.6 1.8 2.3 2 2 4.2 3.2 6.7 3.2s4.7-1.2 6.7-3.2a16.2 16.2 0 002.1-2.8 15.7 15.7 0 00-2.1-2.8c-2-2-4.2-3.2-6.7-3.2a9.3 9.3 0 00-6.7 3.2A16.2 16.2 0 003.2 12c0 .2.2.3.3.5zm-2.4-1l.7-1.2L4 7.8C6.2 5.4 8.9 4 12 4c3 0 5.8 1.4 8.1 3.8a18.2 18.2 0 012.8 3.7v1l-.7 1.2-2.1 2.5c-2.3 2.4-5 3.8-8.1 3.8-3 0-5.8-1.4-8.1-3.8a18.2 18.2 0 01-2.8-3.7 1 1 0 010-1zm12-3.3a2 2 0 102.7 2.6 4 4 0 11-2.6-2.6z"
        }
      }
    };
    var combined_svg = {
      strike: {
        "fill-rule": "evenodd",
        path: [{
          d: "M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 017 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1z"
        }, {
          d: "M5 11h14a1 1 0 010 2H5a1 1 0 010-2z",
          "fill-rule": "nonzero"
        }]
      }
    };

    if (props.combination) {
      return function () {
        return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
          width: width,
          height: height
        }, [(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)("g", {
          "fill-rule": combined_svg[type]["fill-rule"] ? combined_svg[type]["fill-rule"] : ""
        }, //用arrayfrom組成陣列 array map遍歷每個item
        Array.from(combined_svg[type].path).map(function (i) {
          return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
            d: i.d,
            "fill-rule": i["fill-rule"] ? i["fill-rule"] : ""
          });
        }))]);
      };
    } else {
      return function () {
        return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)("svg", {
          width: width,
          height: height,
          viewBox: viewBox
        }, [(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)("path", {
          d: svg[type].path.d,
          "full-rule": svg[type].path["fill-rule"] ? svg[type].path["fill-rule"] : "",
          fill: "inherit"
        })]);
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Objects/SvgRender.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Objects/SvgRender.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgRender.vue?vue&type=script&lang=js */ "./resources/js/components/Objects/SvgRender.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");



;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_SvgRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"], [['__file',"resources/js/components/Objects/SvgRender.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Objects/SvgRender.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Objects/SvgRender.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SvgRender_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SvgRender.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Objects/SvgRender.vue?vue&type=script&lang=js");
 

/***/ })

}]);