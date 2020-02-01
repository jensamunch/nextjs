webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");

var _jsxFileName = "/Users/jensamunch/Documents/nextjs/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["useColorMode"])(),
      _useColorMode2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useColorMode, 2),
      colorMode = _useColorMode2[0],
      setColorMode = _useColorMode2[1];

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    as: "nav",
    sx: {
      px: 3,
      // padding-left & padding-right
      // paddingX: 3 will also work
      py: 4,
      // padding-top & padding-bottom
      mb: 3 // margin-bottom

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    p: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Hello",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    p: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Hello")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/About",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    p: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "About")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    p: 2,
    border: 2,
    onClick: function onClick(e) {
      setColorMode(colorMode === 'default' ? 'dark' : 'default');
    },
    sx: {
      variant: 'links.nav.outlined'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, colorMode === 'default' ? 'Dark' : 'Light'));
});

/***/ })

})
//# sourceMappingURL=_app.js.1f34fc2fd5e5783b140c.hot-update.js.map