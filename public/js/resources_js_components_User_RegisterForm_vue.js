"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_RegisterForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/RegisterForm.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/RegisterForm.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {},
  data: function data() {
    return {
      account: "",
      password: "",
      re_password: "",
      account_err: "",
      password_err: "",
      re_password_err: "",
      email: "",
      email_err: "",
      csrf_token: '',
      remember: true
    };
  },
  computed: {},
  methods: {
    InputAcc: function InputAcc() {
      this.password = "";
      this.re_password = "";
      this.CheckAccount();
    },
    InputPas: function InputPas() {
      this.re_password = "";
      this.CheckPassword();
    },
    Submit: function Submit() {
      var _this = this;

      var acc = this.CheckAccount();
      var e = this.CheckEmail();
      var pas = this.CheckPassword();
      if (pas) var rpas = this.CheckRePassword();

      if (acc && e && pas && rpas) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("/userRegister", {
          account: this.account,
          password: this.password,
          email: this.email,
          remember: this.remember
        }).then(function (res) {
          var error = res.data.error;

          if (error) {
            console.log("註冊錯誤 : " + error);

            _this.$emit("GetError", error);
          } else {
            _this.$router.push({
              path: '/'
            });
          }
        });
      }
    },
    CheckAccount: function CheckAccount() {
      if (!this.account) {
        this.account_err = "請填寫帳號欄位";
        return false;
      } else {
        this.account_err = "";
        return true;
      }
    },
    CheckEmail: function CheckEmail() {
      //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var mailformat = /^\w+([\.-]?\w+)*@gmail.com/;

      if (!this.email) {
        this.email_err = "請填寫Email欄位";
        return false;
      } else {
        if (!this.email.match(mailformat)) {
          this.email_err = "Email格式錯誤";
          return false;
        } else {
          this.email_err = "";
          return true;
        }
      }
    },
    CheckPassword: function CheckPassword() {
      if (!this.password) {
        this.password_err = "請填寫密碼欄位";
        return false;
      } else {
        this.password_err = "";
        return true;
      }
    },
    CheckRePassword: function CheckRePassword() {
      this.re_password = this.re_password.trim();

      if (!this.re_password) {
        this.re_password_err = "請確認密碼";
        return false;
      } else {
        if (this.password != this.re_password) {
          this.re_password_err = "密碼不相同";
          return false;
        } else {
          this.re_password_err = "";
          return true;
        }
      }
    }
  },
  created: function created() {
    var _this2 = this;

    this.account = this.old_account;
    this.email = this.old_email;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/getCsrfToken").then(function (res) {
      _this2.csrf_token = res.data.csrf_token;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/RegisterForm.vue?vue&type=template&id=0bbae190":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/RegisterForm.vue?vue&type=template&id=0bbae190 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "login-register-form w-sm-80 w-lg-60",
  name: "register"
};
var _hoisted_2 = {
  "class": "col"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "error"
}, "*", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("帳號：");

var _hoisted_5 = {
  "class": "error"
};
var _hoisted_6 = {
  "class": "col pb-2"
};
var _hoisted_7 = {
  "class": "col"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "error"
}, "*", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Email：");

var _hoisted_10 = {
  "class": "error"
};
var _hoisted_11 = {
  "class": "col pb-2"
};
var _hoisted_12 = {
  "class": "col"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "error"
}, "*", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("密碼：");

var _hoisted_15 = {
  "class": "error"
};
var _hoisted_16 = {
  "class": "col pb-2"
};
var _hoisted_17 = {
  "class": "col"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "error"
}, "*", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("再次輸入密碼：");

var _hoisted_20 = {
  "class": "error"
};
var _hoisted_21 = {
  "class": "col pb-2"
};
var _hoisted_22 = {
  "class": "col pb-2"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "ps-1",
  "for": "remember"
}, "保持登入", -1
/* HOISTED */
);

var _hoisted_24 = ["value"];
var _hoisted_25 = {
  "class": "col flex-jc"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.account_err), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100",
    type: "text",
    name: "account",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.account = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.InputAcc();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.account, void 0, {
    trim: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.email_err), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100",
    type: "text",
    name: "email",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.email = $event;
    }),
    placeholder: "aaa@gmail.com",
    onChange: _cache[3] || (_cache[3] = function ($event) {
      return $options.CheckEmail();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email, void 0, {
    trim: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.password_err), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100",
    type: "password",
    name: "password",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.password = $event;
    }),
    onChange: _cache[5] || (_cache[5] = function ($event) {
      return $options.InputPas();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.password, void 0, {
    trim: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.re_password_err), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "w-100",
    type: "password",
    name: "re_password",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.re_password = $event;
    }),
    onChange: _cache[7] || (_cache[7] = function ($event) {
      return $options.CheckRePassword();
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.re_password, void 0, {
    trim: true
  }]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    name: "remember",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.remember = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.remember]]), _hoisted_23]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "_token",
    value: $data.csrf_token
  }, null, 8
  /* PROPS */
  , _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "button",
    value: "註冊",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.Submit();
    })
  })])])]);
}

/***/ }),

/***/ "./resources/js/components/User/RegisterForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/User/RegisterForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_0bbae190__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=0bbae190 */ "./resources/js/components/User/RegisterForm.vue?vue&type=template&id=0bbae190");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js */ "./resources/js/components/User/RegisterForm.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_instrument_platform_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RegisterForm_vue_vue_type_template_id_0bbae190__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/User/RegisterForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/User/RegisterForm.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/User/RegisterForm.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/RegisterForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/User/RegisterForm.vue?vue&type=template&id=0bbae190":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/User/RegisterForm.vue?vue&type=template&id=0bbae190 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_template_id_0bbae190__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegisterForm_vue_vue_type_template_id_0bbae190__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegisterForm.vue?vue&type=template&id=0bbae190 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/User/RegisterForm.vue?vue&type=template&id=0bbae190");


/***/ })

}]);