webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass/styled-components */ "./node_modules/rebass/styled-components/index.js");
/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass_styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jensamunch/Documents/nextjs/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  return __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    px: 2,
    color: "white",
    bg: "black",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    p: 2,
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Rebass"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
false,

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
false,

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
false,

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
false,

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
false,

/***/ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js":
false,

/***/ "./node_modules/@emotion/styled/dist/styled.browser.esm.js":
false,

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
false,

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
false,

/***/ "./node_modules/rebass/dist/index.esm.js":
false,

/***/ "./node_modules/rebass/styled-components/index.js":
/*!********************************************************!*\
  !*** ./node_modules/rebass/styled-components/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function get() {
    return _styledComponents.Box;
  }
});
Object.defineProperty(exports, "Flex", {
  enumerable: true,
  get: function get() {
    return _styledComponents.Flex;
  }
});
exports.Card = exports.Image = exports.Button = exports.Link = exports.Heading = exports.Text = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = __webpack_require__(/*! reflexbox/styled-components */ "./node_modules/reflexbox/styled-components/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Text = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_styledComponents.Box, _extends({
    ref: ref,
    tx: "text"
  }, props));
});
exports.Text = Text;
var Heading = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_styledComponents.Box, _extends({
    ref: ref,
    as: "h2",
    tx: "text",
    variant: "heading"
  }, props, {
    __css: {
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  }));
});
exports.Heading = Heading;
var Link = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_styledComponents.Box, _extends({
    ref: ref,
    as: "a",
    variant: "link"
  }, props));
});
exports.Link = Link;
var Button = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_styledComponents.Box, _extends({
    ref: ref,
    as: "button",
    tx: "buttons",
    variant: "primary"
  }, props, {
    __css: {
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 4
    }
  }));
});
exports.Button = Button;
var Image = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_styledComponents.Box, _extends({
    ref: ref,
    as: "img"
  }, props, {
    __css: {
      maxWidth: '100%',
      height: 'auto'
    }
  }));
});
exports.Image = Image;
var Card = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(_styledComponents.Box, _extends({
    ref: ref,
    variant: "card"
  }, props));
});
exports.Card = Card;

/***/ }),

/***/ "./node_modules/reflexbox/dist/index.js":
false,

/***/ "./node_modules/reflexbox/styled-components/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/reflexbox/styled-components/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.Box = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _styledSystem = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");

var _css = _interopRequireWildcard(__webpack_require__(/*! @styled-system/css */ "./node_modules/@styled-system/css/dist/index.esm.js"));

var _shouldForwardProp = _interopRequireDefault(__webpack_require__(/*! @styled-system/should-forward-prop */ "./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sx = function sx(props) {
  return (0, _css["default"])(props.sx)(props.theme);
};

var base = function base(props) {
  return (0, _css["default"])(props.__css)(props.theme);
};

var variant = function variant(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      _ref$tx = _ref.tx,
      tx = _ref$tx === void 0 ? 'variants' : _ref$tx;
  return (0, _css["default"])((0, _css.get)(theme, tx + '.' + variant, (0, _css.get)(theme, variant)))(theme);
};

var Box = (0, _styledComponents["default"])('div', {
  shouldForwardProp: _shouldForwardProp["default"]
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, sx, function (props) {
  return props.css;
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout, _styledSystem.typography, _styledSystem.color, _styledSystem.flexbox));
exports.Box = Box;
var Flex = (0, _styledComponents["default"])(Box)({
  display: 'flex'
});
exports.Flex = Flex;

/***/ })

})
//# sourceMappingURL=_app.js.897498a6ee4a34da81d9.hot-update.js.map