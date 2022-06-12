"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
;// CONCATENATED MODULE: ./src/components/pages/home/index.style.jsx


const HomeStyle = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__HomeStyle",
  componentId: "sc-btgufd-0"
})(["padding-top:220px;margin-right:70px;padding-bottom:110px;", "{margin-right:0;}.h1{margin-bottom:60px;}"], (0,external_styled_breakpoints_.down)('sm'));
// EXTERNAL MODULE: ./src/components/dom/listPosts/index.jsx + 13 modules
var listPosts = __webpack_require__(8886);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/pages/home/index.jsx
const _excluded = ["posts"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const datas = {
  title: "Hello, I am Tom.",
  description: "Currently visualising thoughts and working as a creative producer in digital and film. I run Buried Signals, where we curate visual, investigative and immersive experiments in journalism.",
  allPosts: [{
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "1 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "2 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }, {
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "3 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "4 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }, {
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "5 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "6 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }, {
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "7 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "8 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }, {
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "9 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "10 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }, {
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "11 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "12 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }, {
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "13 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "14 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }, {
    slug: "/posts/a-xmas-experiment",
    category: "experiments",
    title: "15 A Xmas experiment",
    description: "A Christmas scene baked in Blender with D3 chart overlays.",
    externalLink: "https://google.com"
  }, {
    slug: "/posts/interstella-chapter-1",
    category: "articles",
    title: "16 Interstella, Chapter 1",
    description: "The Ambassador’s Daugther.",
    externalLink: undefined
  }],
  allCategories: ["articles", "experiments"]
};

const Home = _ref => {
  let {
    posts
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(HomeStyle, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container1",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "h1",
        children: datas.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "p1",
        children: datas.description
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "separator"
      }), /*#__PURE__*/jsx_runtime_.jsx(listPosts/* default */.Z, {
        posts: posts,
        categories: datas.allCategories,
        maxPagination: 7
      })]
    })
  });
};

/* harmony default export */ const home = (Home);

/***/ }),

/***/ 1020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (obj[key]) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pick);

/***/ }),

/***/ 1387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4562);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8037);
/* harmony import */ var _helpers_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1020);
/* harmony import */ var _components_pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9525);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_1__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const mdxComponents = {};

const Page = props => {
  // const MDXContent = useMDXComponent(props.posts);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_pages_home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      posts: props.posts
    })
  });
};

Page.r3f = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
async function getStaticProps() {
  const posts = contentlayer_generated__WEBPACK_IMPORTED_MODULE_0__/* .allPosts.map */ .fd.map(post => (0,_helpers_pick__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(post, ['slug', 'title', 'publishedAt', 'description', 'image', 'category', 'externalLink'])).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
  return {
    props: {
      posts
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 7008:
/***/ ((module) => {

module.exports = import("contentlayer/client");;

/***/ }),

/***/ 8037:
/***/ ((module) => {

module.exports = import("next-contentlayer/hooks");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [101,664,886,562], () => (__webpack_exec__(1387)));
module.exports = __webpack_exports__;

})();