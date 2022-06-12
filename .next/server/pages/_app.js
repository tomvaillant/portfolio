"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
;// CONCATENATED MODULE: ./src/components/dom/header/index.style.jsx


const HeaderStyle = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__HeaderStyle",
  componentId: "sc-79i3n8-0"
})(["position:fixed;top:37.5px;left:0;display:flex;justify-content:space-between;align-items:center;width:100%;padding:0 60px;", "{position:absolute;padding:0 30px;}", "{padding:0 30px;}", "{flex-direction:column;gap:13.5px;}.navigation{display:flex;li{&:not(:last-child){margin-right:45px;", "{margin-right:13.5px;}}.a2{position:relative;padding-right:14px;&::before,&::after{position:absolute;right:0;display:block;width:9px;height:9px;border:1px solid var(--bd-color-main);border-radius:100%;}&::before{top:0;}&::after{bottom:0;}}&:first-child{.a2{&::after{content:'';}}}&:nth-child(2){.a2{&::before{content:'';}}}&:last-child{.a2{&::before,&::after{content:'';}}}}}"], (0,external_styled_breakpoints_.down)('xl'), (0,external_styled_breakpoints_.down)('md'), (0,external_styled_breakpoints_.down)('sm'), (0,external_styled_breakpoints_.down)('md'));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/dom/iconLogo/index.jsx + 1 modules
var iconLogo = __webpack_require__(8813);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/dom/header/index.jsx






const Header = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderStyle, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(iconLogo/* default */.Z, {})
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "navigation",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "a2",
          href: "https://www.buriedsignals.com/",
          target: "_blank",
          rel: "noreferrer",
          children: "Buried Signals"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "a2",
            children: "About"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "a2",
          href: "https://linktr.ee/tomvaillant",
          target: "_blank",
          rel: "noreferrer",
          children: "Connect"
        })
      })]
    })]
  });
};

/* harmony default export */ const header = (Header);

/***/ }),

/***/ 8813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ iconLogo)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/dom/iconLogo/index.style.jsx

const LogoStyle = external_styled_components_default().svg.withConfig({
  displayName: "indexstyle__LogoStyle",
  componentId: "sc-2yw4dk-0"
})(["rect,path{fill:var(--bd-color-main);}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/dom/iconLogo/index.jsx
const _excluded = ["orientation"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const IconLogo = _ref => {
  let {
    orientation = "right"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoStyle, {
    className: "logo",
    width: "64",
    height: "33",
    viewBox: "0 0 64 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "0.531494",
      y: "2.22852",
      width: "25.4333",
      height: "4.13964",
      rx: "0.432692",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M37.5778 2.22852C37.7647 2.22852 37.9304 2.3485 37.9888 2.52603L47.6005 31.7532C47.6925 32.0331 47.484 32.3211 47.1894 32.3211L42.5668 32.3211C42.3799 32.3211 42.2142 32.2011 42.1558 32.0236L32.5441 2.79638C32.4521 2.51652 32.6606 2.22852 32.9552 2.22852L37.5778 2.22852Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M62.461 2.24219C62.7761 2.24219 62.9688 2.53727 62.8319 2.81029L54.7577 18.9187C54.7225 18.989 54.668 19.0505 54.6 19.0966L48.6488 23.133C48.2704 23.3896 47.8033 23.047 47.9964 22.6544L57.9039 2.50958C57.9831 2.34856 58.1578 2.24224 58.3431 2.24223L62.461 2.24219Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M11.0105 15.686C10.9658 15.7557 10.942 15.8368 10.942 15.9196L10.942 31.8897C10.942 32.1287 11.1357 32.3224 11.3747 32.3224L15.0573 32.3224C15.2963 32.3224 15.49 32.1287 15.49 31.8897L15.49 10.179C15.49 9.74692 14.9264 9.58168 14.6931 9.94535L11.0105 15.686Z",
      fill: "white"
    })]
  });
};

/* harmony default export */ const iconLogo = (IconLogo);

/***/ }),

/***/ 1303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_layout_dom_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7055);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3742);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_store__WEBPACK_IMPORTED_MODULE_1__]);
_helpers_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Dom = ({
  children
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _helpers_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setState */ .Z.setState({
      dom: ref
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_layout_dom_style__WEBPACK_IMPORTED_MODULE_0__/* .DomStyle */ .L, {
    ref: ref,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ DomStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DomStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "domstyle__DomStyle",
  componentId: "sc-wmjf63-0"
})(["position:relative;z-index:10;width:100vw;overflow:initial;"]);

/***/ }),

/***/ 3742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  return {
    router: null,
    dom: null,
    theme: 'light'
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStore);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3742);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7345);
/* harmony import */ var _components_layout_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1303);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_dom_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8270);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8157);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_dom_iconLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8813);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_store__WEBPACK_IMPORTED_MODULE_1__, _components_layout_dom__WEBPACK_IMPORTED_MODULE_4__]);
([_helpers_store__WEBPACK_IMPORTED_MODULE_1__, _components_layout_dom__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const LCanvas = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/* import() */ 788).then(__webpack_require__.bind(__webpack_require__, 4788)), {
  ssr: false,
  loadableGenerated: {
    modules: ["_app.jsx -> " + '@/components/layout/canvas']
  }
});
const breakpoints = (0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_8__.createTheme)({
  sm: "440px",
  md: "600px",
  xl: "1440px"
});

function App({
  Component,
  pageProps = {
    title: 'index'
  }
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const theme = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(s => s.theme);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const transitions = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_9__.useTransition)(loading, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _helpers_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setState */ .Z.setState({
      router
    });

    switch (router.pathname.split('/')[1]) {
      case "about":
        _helpers_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setState */ .Z.setState({
          theme: 'dark'
        });
        break;

      default:
        _helpers_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setState */ .Z.setState({
          theme: 'light'
        });
        break;
    }
  }, [router]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: `global theme-${theme}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      title: pageProps.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
      theme: breakpoints,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_layout_dom__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: transitions(({
          opacity
        }, item) => item ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_react_spring_web__WEBPACK_IMPORTED_MODULE_9__.animated.div, {
          style: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            opacity: opacity.to({
              range: [0.0, 1.0],
              output: [0, 1]
            }),
            transform: 'translate3D(-50%, -50%, 0)'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_dom_iconLogo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_react_spring_web__WEBPACK_IMPORTED_MODULE_9__.animated.div, {
          style: {
            opacity: opacity.to({
              range: [1.0, 0.0],
              output: [1, 0]
            })
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_dom_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Component, _objectSpread({}, pageProps))]
        }))
      })
    }), (Component === null || Component === void 0 ? void 0 : Component.r3f) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(LCanvas, {
      children: Component.r3f(pageProps)
    })]
  }); // return (
  //   <div className={`global theme-${ theme }`}>
  //     <HeadMeta title={pageProps.title} />
  //     <ThemeProvider theme={breakpoints}>
  //       <Dom>
  //         <Header/>
  //         <Component {...pageProps} />
  //       </Dom>
  //     </ThemeProvider>
  //     {Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>}
  //   </div>
  // )
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8157:
/***/ ((module) => {

module.exports = require("@react-spring/web");

/***/ }),

/***/ 3784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6170:
/***/ ((module) => {

module.exports = require("styled-breakpoints");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [101,664,152,345], () => (__webpack_exec__(150)));
module.exports = __webpack_exports__;

})();