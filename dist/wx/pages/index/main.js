require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(16);


// add this to handle exception

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
var db = wx.cloud.database();
db.collection('demand').doc('xuqiubao-63e52d').get({
  success: function success(res) {
    // res.data 包含该记录的数据
    console.log(res.data);
  }
});

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_372e7b4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-372e7b4e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_372e7b4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-372e7b4e", Component.options)
  } else {
    hotAPI.reload("data-v-372e7b4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 18:
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
  name: 'index',
  data: function data() {
    return {
      Demands: []
    };
  },

  // mounted: function () {
  //   const db = wx.cloud.database()
  //   db.collection('demand').where({
  //     _openid: 'o8Unj5EoX2byLgLZCBehdAaXzoyo'}).get({
  //     success: function (res) {
  //       // res.data 包含该记录的数据
  //       console.log(res.data)
  //     }
  //   })
  // },
  methods: {
    toExpressPage: function toExpressPage() {
      wx.navigateTo({
        url: 'express/main'
      });
    },
    toSportPage: function toSportPage() {
      wx.navigateTo({
        url: 'sports/main'
      });
    },
    toTakeoutPage: function toTakeoutPage() {
      wx.navigateTo({
        url: 'takeout/main'
      });
    },
    toTravelPage: function toTravelPage() {
      wx.navigateTo({
        url: 'travel/main'
      });
    },
    toUsedBookPage: function toUsedBookPage() {
      wx.navigateTo({
        url: 'usedBook/main'
      });
    },
    toRunPage: function toRunPage() {
      wx.navigateTo({
        url: 'run/main'
      });
    }
  },

  created: function created() {
    var _this = this;

    var db = wx.cloud.database({ env: 'xuqiubao-63e52d' });
    db.collection('demand').get().then(function (res) {
      console.log(res.data);
      _this.Demands = res.data;
    });
    // let app = getApp()
  }
});

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-grid', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('i-grid-item', {
    attrs: {
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.toExpressPage
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/快递.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_vm._v("快递")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "eventid": '1',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.toUsedBookPage
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/book.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_vm._v("二手书")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "eventid": '2',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.toTakeoutPage
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/外卖.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_vm._v("拿外卖")])], 1)], 1), _vm._v(" "), _c('i-grid', {
    attrs: {
      "mpcomid": '19'
    }
  }, [_c('i-grid-item', {
    attrs: {
      "eventid": '3',
      "mpcomid": '12'
    },
    on: {
      "click": _vm.toTravelPage
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '10'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/结伴.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_vm._v("结伴出游")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "eventid": '4',
      "mpcomid": '15'
    },
    on: {
      "click": _vm.toRunPage
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '13'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/跑腿.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '14'
    }
  }, [_vm._v("跑腿")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "eventid": '5',
      "mpcomid": '18'
    },
    on: {
      "click": _vm.toSportPage
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '16'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/运动.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '17'
    }
  }, [_vm._v("运动")])], 1)], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "mpcomid": '20'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "15px"
    }
  }, [_vm._v("需求广场")])]), _vm._v(" "), _vm._l((_vm.Demands), function(item, index) {
    return _c('i-card', {
      key: index,
      attrs: {
        "title": "需求",
        "extra": item.keywords,
        "thumb": "/static/images/需求.png",
        "mpcomid": '21_' + index
      }
    }, [_c('view', {
      slot: "content"
    }, [_c('text', [_vm._v("发布者：" + _vm._s(item.nickname) + " \\n  赏金：" + _vm._s(item.reward) + " \\n 详情：" + _vm._s(item.need) + "  ")])]), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_vm._v("具体信息请私戳，非诚勿扰")])])
  }), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "快递",
      "extra": "帮取快递",
      "thumb": "/static/images/快递.png",
      "mpcomid": '22'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("有同学能帮我去二期楚才菜鸟驿站取个快递吗？在线等")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("具体信息请私戳，非诚勿扰")])]), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "二手书",
      "extra": "二手书便宜出",
      "thumb": "/static/images/book.png",
      "mpcomid": '23'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("应届毕业生，毕业在即，便宜出二手书给学弟学妹。")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("买不了吃亏，买不了上当。")])]), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "拿外卖",
      "extra": "三期门口",
      "thumb": "/static/images/外卖.png",
      "mpcomid": '24'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("帮取下外卖，三期门口")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("懒癌发作，帮取下外卖。")])])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-372e7b4e", esExports)
  }
}

/***/ })

},[15]);