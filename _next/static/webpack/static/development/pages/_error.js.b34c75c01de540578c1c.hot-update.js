webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/NotFound/NotFound.js":
/*!*****************************************!*\
  !*** ./components/NotFound/NotFound.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFound.css */ "./components/NotFound/NotFound.css");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NotFound_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/workspace/GithubNext/components/NotFound/NotFound.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const isServer = false;
function NotFound(props) {
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isServer ? window.innerWidth : null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleResize = () => {
      setWidth(!isServer ? window.innerWidth : null);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("section", {
    style: {
      width
    },
    className: "notfound banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    id: "notfound-coment",
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, '죄송합니다', __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), '요청하신 페이지를 찾을 수 없습니다.')));
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fworkspace%2FGithubNext%2Fpages%2F_error.js!./":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fworkspace%2FGithubNext%2Fpages%2F_error.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NotFound/NotFound */ "./components/NotFound/NotFound.js");
var _jsxFileName = "/workspace/GithubNext/pages/_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Error(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
    title: "404 Not Found",
    description: "Mineru Blog Page",
    openGraph: {
      url: 'https://mineru98.github.io/',
      title: '404 Not Found',
      description: 'Mineru Blog Page',
      type: 'website',
      images: [{
        url: 'https://source.unsplash.com/82TpEld0_e4/800x600',
        width: 800,
        height: 600,
        alt: 'Note Alt'
      }],
      site_name: 'Mineru Code Blog'
    },
    facebook: {
      appId: '2123338114642272'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_components_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
}

/***/ }),

/***/ 13:
/*!********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fworkspace%2FGithubNext%2Fpages%2F_error.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fworkspace%2FGithubNext%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fworkspace%2FGithubNext%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.b34c75c01de540578c1c.hot-update.js.map