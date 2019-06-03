require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(61);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_72174072_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(64);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72174072"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_72174072_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\me\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72174072", Component.options)
  } else {
    hotAPI.reload("data-v-72174072", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {},

  methods: {
    bindGetUserInfo: function bindGetUserInfo() {
      wx.navigateTo({
        url: 'login/main'
      });
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('view', {
    staticClass: "userinfo"
  }, [_c('view', {
    staticClass: "userinfo-avatar"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "userinfo-name"
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '1'
    }
  })], 1)]), _vm._v(" "), _c('i-button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.bindGetUserInfo
    }
  }, [_vm._v("授权登录")]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "15px"
    }
  }, [_vm._v("我的需求")])]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "15px"
    }
  }, [_vm._v("已完成需求")])]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "15px"
    }
  }, [_vm._v("待完成需求")])]), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "15px"
    }
  }, [_vm._v("反馈建议")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72174072", esExports)
  }
}

/***/ })

},[60]);