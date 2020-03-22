webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TodoForm.js":
/*!********************************!*\
  !*** ./components/TodoForm.js ***!
  \********************************/
/*! exports provided: NameForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameForm", function() { return NameForm; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jensamunch/Documents/nextjs/components/TodoForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */


function NameForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var handleSubmit = function handleSubmit(evt) {
    evt.preventDefault();
    alert("Submitting Name ".concat(name));
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Frirst Name:", Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
    type: "text",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
    type: "submit",
    value: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ })

})
//# sourceMappingURL=index.js.2ce443422741e4fb106a.hot-update.js.map