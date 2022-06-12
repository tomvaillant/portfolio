"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 6488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_pages_post_index_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3981);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8037);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_1__]);
next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const mdxComponents = {};

const Post = ({
  post
}) => {
  const MDXContent = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_1__.useMDXComponent)(post.body.code);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_pages_post_index_style__WEBPACK_IMPORTED_MODULE_0__/* .PostStyle */ .g, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(MDXContent, {
        components: mdxComponents
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ PostStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__);


const PostStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "indexstyle__PostStyle",
  componentId: "sc-1xttiua-0"
})(["padding-top:220px;margin-right:70px;padding-bottom:110px;", "{margin-right:0;}h1,h2,h3,p,ol,ul,img,a{margin-bottom:13.5px;}ol,ul{list-style:initial;margin-left:24px;}a{text-decoration:underline;}"], (0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__.down)('sm'));

/***/ }),

/***/ 6682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_pages_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6488);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7345);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4562);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_pages_post__WEBPACK_IMPORTED_MODULE_0__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__]);
([_components_pages_post__WEBPACK_IMPORTED_MODULE_0__, contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Page = ({
  post
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      title: post.title,
      description: post.description,
      slug: post.slug,
      image: post.image
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_pages_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      post: post
    })]
  });
};

Page.r3f = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
async function getStaticPaths() {
  return {
    paths: contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__/* .allPosts.map */ .fd.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const post = contentlayer_generated__WEBPACK_IMPORTED_MODULE_2__/* .allPosts.find */ .fd.find(post => post.slug === params.slug);
  return {
    props: {
      post
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [562,345], () => (__webpack_exec__(6682)));
module.exports = __webpack_exports__;

})();