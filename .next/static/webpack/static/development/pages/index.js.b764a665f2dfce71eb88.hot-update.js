webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TodoSingle.js":
/*!**********************************!*\
  !*** ./components/TodoSingle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "/Users/jensamunch/Documents/nextjs/components/TodoSingle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */



function TodoSingle(props) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: {
      display: "inline-block",
      color: "text",
      fontSize: 3,
      pr: 3,
      textDecoration: props.todo.isCompleted ? "line-through" : ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.todo.text), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    sx: {
      display: "inline-block",
      pr: 3
    },
    onClick: function onClick() {
      return props.completeTodo(props.index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Complete"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: function onClick() {
      return props.deleteTodo(props.index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Delete"));
}

/* harmony default export */ __webpack_exports__["default"] = (TodoSingle);

/***/ })

})
//# sourceMappingURL=index.js.b764a665f2dfce71eb88.hot-update.js.map