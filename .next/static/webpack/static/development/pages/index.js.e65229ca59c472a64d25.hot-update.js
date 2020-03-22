webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TodoForm.js":
/*!********************************!*\
  !*** ./components/TodoForm.js ***!
  \********************************/
/*! exports provided: TodoForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoForm", function() { return TodoForm; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jensamunch/Documents/nextjs/components/TodoForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */


function TodoForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var onChange = function onChange(e) {
    var value = e.target.value;
    props.addTodo(value);
    setSearchTerm(value);
  };

  var onSubmit = function onSubmit(e) {
    // Prevents GET request/page refresh on submit
    e.preventDefault();
    props.onFormSubmit();
    setSearchTerm('');
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
    type: "text",
    value: searchTerm,
    placeholder: "Enter search term...",
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    type: "submit",
    disabled: props.isSearching,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "SUBMIT"));
}
/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ })

})
//# sourceMappingURL=index.js.e65229ca59c472a64d25.hot-update.js.map