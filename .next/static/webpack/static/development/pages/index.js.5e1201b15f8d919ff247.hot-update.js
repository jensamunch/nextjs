webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Todo.js":
/*!****************************!*\
  !*** ./components/Todo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TodoSingle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoSingle */ "./components/TodoSingle.js");
/* harmony import */ var _components_TodoForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoForm */ "./components/TodoForm.js");

var _jsxFileName = "/Users/jensamunch/Documents/nextjs/components/Todo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @jsx jsx */





function Todo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    text: "Learn about React",
    isCompleted: false
  }, {
    text: "Meet friend for lunch",
    isCompleted: false
  }, {
    text: "Build really cool todo app",
    isCompleted: false
  }]),
      todos = _useState2[0],
      setTodos = _useState2[1];

  var completeTodo = function completeTodo(index) {
    var newTodos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos);

    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  var deleteTodo = function deleteTodo(index) {
    var newTodos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos);

    var removeTodos = removeItem(newTodos, index);
    setTodos(removeTodos);
  };

  var removeItem = function removeItem(items, i) {
    return items.slice(0, i - 1).concat(items.slice(i, items.length));
  };

  var addTodo = function addTodo(text) {
    var newTodos = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos), [{
      text: text,
      isCompleted: false
    }]);
    setTodos(newTodos);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    sx: {
      fontSize: 4,
      color: "text"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Todo List"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    sx: {
      fontSize: 1,
      color: "text"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, todos.map(function (todo, index) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_TodoSingle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      index: index,
      todo: todo,
      completeTodo: completeTodo,
      deleteTodo: deleteTodo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    });
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_TodoForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    addTodo: addTodo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ })

})
//# sourceMappingURL=index.js.5e1201b15f8d919ff247.hot-update.js.map