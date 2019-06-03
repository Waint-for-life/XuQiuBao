require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(71);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    usingComponents: {
      'i-button': '../../dist/button/index'
    }
  }
});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fe06ffa_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(74);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(72)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fe06ffa_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\release\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fe06ffa", Component.options)
  } else {
    hotAPI.reload("data-v-5fe06ffa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index.vue',
  data: function data() {
    return {
      demandList: [],
      detail: '',
      price: ''
    };
  },

  mounted: function mounted() {
    var _this = this;

    this.$fly.get('https://www.wjxweb.cn:789/Demand/').then(function (res) {
      console.log(res);
      _this.demandList = res.data.data;
    }).catch(function (err) {
      console.log(err);
    });
  },
  methods: {
    release: function release() {
      this.$fly.post('https://www.wjxweb.cn:789/Demand/', {
        keywords: 0, detail: 0, price: 0
      }).then(function (res) {
        console.log(res);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('view', [_c('i-panel', {
    attrs: {
      "title": "发布需求(通过滑动选择需求种类: )",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('picker-view', {
    staticStyle: {
      "width": "100%",
      "height": "100px",
      "margin": "0 auto"
    },
    attrs: {
      "indicator-style": "height: 50px;",
      "value": _vm.value,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindChange
    }
  }, [_c('picker-view-column', {
    attrs: {
      "mpcomid": '1'
    }
  }, _vm._l((_vm.demandList), function(item, index) {
    return _c('view', {
      key: item,
      staticClass: "demandList"
    }, [_vm._v(_vm._s(item.keywords) + "类")])
  }))], 1), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.detail,
      "mode": "wrapped",
      "title": "详情",
      "type": "textarea",
      "placeholder": "请输入你的需求内容(最多150字)",
      "maxlength": "150",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.price,
      "mode": "wrapped",
      "type": "number",
      "title": "赏金",
      "placeholder": "请输入你的赏金: ",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.release
    }
  }, [_vm._v("发布")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fe06ffa", esExports)
  }
}

/***/ })

},[70]);