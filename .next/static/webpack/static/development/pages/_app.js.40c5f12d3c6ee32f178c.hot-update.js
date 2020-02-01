webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _themes_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/theme */ "./themes/theme.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rebass/styled-components */ "./node_modules/rebass/styled-components/index.js");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rebass_styled_components__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/jensamunch/Documents/nextjs/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n* { box-sizing: border-box; }\nbody { margin:0; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Style = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: {
      colors: {
        background: 'black',
        primary: 'yellow'
      },
      space: [0, 6, 12, 24, 48],
      fontSizes: [14, 16, 18, 20, 24],
      radii: {
        "default": 12
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(Style, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    p: 3,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Hello"), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Beep"), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=_app.js.40c5f12d3c6ee32f178c.hot-update.js.map