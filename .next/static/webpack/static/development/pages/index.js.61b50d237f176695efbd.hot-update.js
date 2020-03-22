webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
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
/* harmony import */ var _icons_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/moon.svg */ "./icons/moon.svg");
/* harmony import */ var _icons_moon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_moon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_sun_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/sun.svg */ "./icons/sun.svg");
/* harmony import */ var _icons_sun_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icons_sun_svg__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/jensamunch/Documents/nextjs/components/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_3__["useColorMode"])(),
      _useColorMode2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useColorMode, 2),
      colorMode = _useColorMode2[0],
      setColorMode = _useColorMode2[1];

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    as: "nav",
    sx: {
      py: 4,
      // padding-top & padding-bottom
      mb: 3 // margin-bottom

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    pr: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    pr: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/another-page",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    pr: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Another Page")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    onClick: function onClick(e) {
      setColorMode(colorMode === "default" ? "dark" : "default");
    },
    sx: {
      mt: -1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, colorMode === "default" ? __jsx("img", {
    src: _icons_moon_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }) : __jsx("img", {
    src: _icons_sun_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.61b50d237f176695efbd.hot-update.js.map