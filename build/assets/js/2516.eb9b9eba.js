exports.id = 2516;
exports.ids = [2516];
exports.modules = {

/***/ 42516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75121);
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23007);
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13262);
var textCss=":host(.ion-color){color:var(--ion-color-base)}";var Text=function(){function t(t){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t)}t.prototype.render=function(){var t;var o=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,(t={},t[o]=true,t))},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))};return t}();Text.style=textCss;

/***/ }),

/***/ 13262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70655);
var hostContext=function(r,t){return t.closest(r)!==null};var createColorClasses=function(r,t){var e;return typeof r==="string"&&r.length>0?Object.assign((e={"ion-color":true},e["ion-color-"+r]=true,e),t):t};var getClassList=function(r){if(r!==undefined){var t=Array.isArray(r)?r:r.split(" ");return t.filter((function(r){return r!=null})).map((function(r){return r.trim()})).filter((function(r){return r!==""}))}return[]};var getClassMap=function(r){var t={};getClassList(r).forEach((function(r){return t[r]=true}));return t};var SCHEME=/^[a-z][a-z0-9+\-.]*:/;var openURL=function(r,t,e,n){return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0,void 0,void 0,(function(){var o;return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this,(function(a){if(r!=null&&r[0]!=="#"&&!SCHEME.test(r)){o=document.querySelector("ion-router");if(o){if(t!=null){t.preventDefault()}return[2,o.push(r,e,n)]}}return[2,false]}))}))};

/***/ })

};
;