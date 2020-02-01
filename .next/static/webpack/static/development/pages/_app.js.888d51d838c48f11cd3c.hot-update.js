webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@rebass/preset/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@rebass/preset/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.preset = void 0;
// default theme preset
var preset = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    "default": 4,
    circle: 99999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
};
exports.preset = preset;
var _default = preset;
exports["default"] = _default;

/***/ }),

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
/* harmony import */ var _rebass_preset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rebass/preset */ "./node_modules/@rebass/preset/dist/index.js");
/* harmony import */ var _rebass_preset__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rebass_preset__WEBPACK_IMPORTED_MODULE_4__);
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


 //import theme from '../themes/theme'




var Style = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _rebass_preset__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(Style, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    p: 3,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Hello"), __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Outline"), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
});

/***/ }),

/***/ "./themes/theme.js":
false

})
//# sourceMappingURL=_app.js.888d51d838c48f11cd3c.hot-update.js.map