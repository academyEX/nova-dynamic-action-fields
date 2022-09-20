/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DynamicActionFieldModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DynamicActionFieldModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function fetchDynamicActionFields(url, param) {
  return window.Nova.request().get(url, param);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'dynamic-action-field-modal',
  props: {
    working: Boolean,
    resourceName: {
      type: String,
      required: true
    },
    action: {
      type: Object,
      required: true
    },
    selectedResources: {
      type: [Array, String],
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      dynamicAction: null
    };
  },
  methods: {
    loadAction: function loadAction() {
      var _this = this;

      this.dynamicAction = null;
      fetchDynamicActionFields("/nova-vendor/dynamic-action-fields/actions/".concat(this.resourceName, "/dynamic-fields"), {
        params: {
          resources: Array.isArray(this.selectedResources) ? this.selectedResources.join(',') : this.selectedResources,
          action: this.action.uriKey
        }
      }).then(function (resp) {
        _this.dynamicAction = resp.data;
        _this.action.fields = _this.dynamicAction.fields;
      });
    }
  },
  mounted: function mounted() {
    this.loadAction();
  },
  watch: {
    action: function action() {
      this.loadAction();
    },
    resourceName: function resourceName() {
      this.loadAction();
    },
    selectedResources: function selectedResources() {
      this.loadAction();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DynamicActionFieldModal.vue?vue&type=template&id=5f341326":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DynamicActionFieldModal.vue?vue&type=template&id=5f341326 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "flex items-center justify-center z-50 p-6",
  style: {
    "min-height": "150px"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ConfirmActionModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConfirmActionModal");

  var _component_Loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loader");

  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");

  return $data.dynamicAction ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ConfirmActionModal, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0
  }, {
    working: $props.working,
    resourceName: $props.resourceName,
    selectedResources: $props.selectedResources,
    errors: $props.errors
  }, {
    action: $data.dynamicAction,
    onConfirm: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('confirm');
    }),
    onClose: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('close');
    })
  }), null, 16
  /* FULL_PROPS */
  , ["action"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    key: 1,
    tabindex: "-1",
    role: "dialog",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.$emit('close');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Loader, {
        "class": "text-60"
      })])];
    }),
    _: 1
    /* STABLE */

  }));
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

/***/ "./resources/js/components/DynamicActionFieldModal.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/DynamicActionFieldModal.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DynamicActionFieldModal_vue_vue_type_template_id_5f341326__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicActionFieldModal.vue?vue&type=template&id=5f341326 */ "./resources/js/components/DynamicActionFieldModal.vue?vue&type=template&id=5f341326");
/* harmony import */ var _DynamicActionFieldModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicActionFieldModal.vue?vue&type=script&lang=js */ "./resources/js/components/DynamicActionFieldModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_andy_Codebase_nova_dynamic_action_fields_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_andy_Codebase_nova_dynamic_action_fields_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DynamicActionFieldModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DynamicActionFieldModal_vue_vue_type_template_id_5f341326__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/DynamicActionFieldModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/DynamicActionFieldModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/DynamicActionFieldModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DynamicActionFieldModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DynamicActionFieldModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DynamicActionFieldModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DynamicActionFieldModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/DynamicActionFieldModal.vue?vue&type=template&id=5f341326":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/DynamicActionFieldModal.vue?vue&type=template&id=5f341326 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DynamicActionFieldModal_vue_vue_type_template_id_5f341326__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DynamicActionFieldModal_vue_vue_type_template_id_5f341326__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DynamicActionFieldModal.vue?vue&type=template&id=5f341326 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DynamicActionFieldModal.vue?vue&type=template&id=5f341326");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./resources/js/dynamic-action-fields.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DynamicActionFieldModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DynamicActionFieldModal */ "./resources/js/components/DynamicActionFieldModal.vue");

Nova.booting(function (app, store) {
  app.component('dynamic-action-field-modal', _components_DynamicActionFieldModal__WEBPACK_IMPORTED_MODULE_0__["default"]);
});
})();

/******/ })()
;