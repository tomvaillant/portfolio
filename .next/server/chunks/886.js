"use strict";
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 8886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ listPosts)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/dom/listPosts/index.style.jsx

const ListPostsStyle = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__ListPostsStyle",
  componentId: "sc-1ayus2z-0"
})([".list-posts{.post-card{&:not(:last-child){margin-bottom:50px;}}}"]);
;// CONCATENATED MODULE: ./src/components/dom/filterPosts/index.style.jsx

const FilterPostsStyle = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__FilterPostsStyle",
  componentId: "sc-cnk07k-0"
})(["margin-bottom:60px;"]);
;// CONCATENATED MODULE: ./src/components/dom/filterButton/index.style.jsx

const FilterButtonStyle = external_styled_components_default().button.withConfig({
  displayName: "indexstyle__FilterButtonStyle",
  componentId: "sc-10hicq8-0"
})(["position:relative;padding-left:calc(9px + 12px);text-transform:capitalize;&:not(:last-child){margin-right:42px;}&::before{content:'';position:absolute;top:50%;left:0;display:block;width:9px;height:9px;border:1px solid #000000;border-radius:100%;transform:translate3D(0,-50%,0);}&.is-active{&::before{content:url(\"data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.59473 1.31055C4.59473 1.0344 4.37087 0.810547 4.09473 0.810547C3.81858 0.810547 3.59473 1.0344 3.59473 1.31055L4.59473 1.31055ZM3.74117 10.4512C3.93644 10.6465 4.25302 10.6465 4.44828 10.4512L7.63026 7.26921C7.82552 7.07395 7.82552 6.75737 7.63026 6.5621C7.435 6.36684 7.11842 6.36684 6.92315 6.5621L4.09473 9.39053L1.2663 6.5621C1.07104 6.36684 0.754455 6.36684 0.559193 6.5621C0.363931 6.75737 0.363931 7.07395 0.559193 7.26921L3.74117 10.4512ZM3.59473 1.31055L3.59473 10.0976L4.59473 10.0976L4.59473 1.31055L3.59473 1.31055Z' fill='black'/%3E%3C/svg%3E%0A\");top:0;border:inherit;transform:inherit;}}"]);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/dom/filterButton/index.jsx
const _excluded = ["text", "onClick"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FilterButton = _ref => {
  let {
    text,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: isActive,
    1: setIsActive
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(FilterButtonStyle, {
    className: isActive && 'is-active',
    onClick: e => {
      setIsActive(!isActive);
      onClick(e);
    },
    children: text
  });
};

/* harmony default export */ const filterButton = (FilterButton);
;// CONCATENATED MODULE: ./src/components/dom/filterPosts/index.jsx
const filterPosts_excluded = ["filters", "onChange"];

function filterPosts_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = filterPosts_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function filterPosts_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const FilterPosts = _ref => {
  let {
    filters,
    onChange
  } = _ref,
      props = filterPosts_objectWithoutProperties(_ref, filterPosts_excluded);

  const {
    0: listActiveFilters,
    1: setListActiveFilters
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    onChange(listActiveFilters);
  }, [listActiveFilters]);
  return /*#__PURE__*/jsx_runtime_.jsx(FilterPostsStyle, {
    children: filters.map(filter => /*#__PURE__*/jsx_runtime_.jsx(filterButton, {
      text: filter,
      onClick: e => {
        let oldListActiveFilters = listActiveFilters;
        let newListActiveFilters = [];
        const valueTarget = e.target.innerText.toLowerCase();

        if (!oldListActiveFilters.includes(valueTarget)) {
          newListActiveFilters = [...oldListActiveFilters, valueTarget];
        } else {
          newListActiveFilters = oldListActiveFilters.filter(item => item !== valueTarget);
        }

        setListActiveFilters(newListActiveFilters);
      }
    }, `filter-button-${filter}`))
  });
};

/* harmony default export */ const filterPosts = (FilterPosts);
;// CONCATENATED MODULE: ./src/components/dom/postCard/index.style.jsx

const PostCardStyle = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__PostCardStyle",
  componentId: "sc-zbd4d2-0"
})(["width:100%;&:hover{.h2{&::before{width:calc(100% + 18px);transition:width 0.25s ease-out;}}.more{.arrow{.line{transform:scale(0.5,1);transition:transform 0.25s ease-out;}}}}.h2{position:relative;display:inline-block;max-width:79.2%;margin-bottom:13.5px;margin-right:47px;&::before{content:'';position:absolute;left:-9px;display:block;width:0;height:100%;background:linear-gradient(89.32deg,#CBC8C6 0%,#E9E6E3 100%);z-index:-1;transition:width 0.2s ease-in;}}.more{display:flex;justify-content:space-between;align-items:flex-start;.p1{margin-right:47px;}.arrow{min-width:76px;margin-top:8px;.line{transform-origin:center right;transition:transform 0.2s ease-in;}}}"]);
;// CONCATENATED MODULE: ./src/components/dom/iconArrow/index.style.jsx

const ArrowStyle = external_styled_components_default().svg.withConfig({
  displayName: "indexstyle__ArrowStyle",
  componentId: "sc-9v1udq-0"
})(["transform:rotate3D(0,0,1,", "deg);path{&:first-child{fill:var(--bd-color-main);}&:last-child{stroke:var(--bd-color-main);}}"], props => {
  switch (props.orientation) {
    case "top":
      return -90;

    case "bottom":
      return 90;

    case "left":
      return 180;

    case "rigth":
    default:
      return 0;
  }
});
;// CONCATENATED MODULE: ./src/components/dom/iconArrow/index.jsx
const iconArrow_excluded = ["orientation"];

function iconArrow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = iconArrow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function iconArrow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const IconArrow = _ref => {
  let {
    orientation = "right"
  } = _ref,
      props = iconArrow_objectWithoutProperties(_ref, iconArrow_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ArrowStyle, {
    className: "arrow",
    orientation: orientation,
    width: "76",
    height: "8",
    viewBox: "0 0 76 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M74 3.5C73.7239 3.5 73.5 3.72386 73.5 4C73.5 4.27615 73.7239 4.5 74 4.5L74 3.5ZM75.3536 4.35355C75.5488 4.15829 75.5488 3.84171 75.3536 3.64645L72.1716 0.464474C71.9763 0.269212 71.6597 0.269213 71.4645 0.464476C71.2692 0.659738 71.2692 0.976321 71.4645 1.17158L74.2929 4L71.4645 6.82844C71.2692 7.0237 71.2692 7.34028 71.4645 7.53554C71.6597 7.73081 71.9763 7.7308 72.1716 7.53554L75.3536 4.35355ZM74 4.5L75 4.5L75 3.5L74 3.5L74 4.5Z",
      fill: "black"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      className: "line",
      d: "M1 4H74.6605",
      stroke: "black",
      strokeLinecap: "round"
    })]
  });
};

/* harmony default export */ const iconArrow = (IconArrow);
;// CONCATENATED MODULE: ./src/components/dom/postCard/index.jsx
const postCard_excluded = ["post"];

function postCard_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = postCard_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function postCard_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const PostCard = _ref => {
  let {
    post
  } = _ref,
      props = postCard_objectWithoutProperties(_ref, postCard_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PostCardStyle, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "h2",
      children: post.title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "more",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "p1",
        children: post.description
      }), /*#__PURE__*/jsx_runtime_.jsx(iconArrow, {})]
    })]
  });
};

/* harmony default export */ const postCard = (PostCard);
;// CONCATENATED MODULE: ./src/components/dom/paginationPosts/index.style.jsx

const PaginationPostsStyle = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__PaginationPostsStyle",
  componentId: "sc-mfml4d-0"
})(["display:flex;justify-content:center;.p1{margin-left:40px;margin-right:40px;}.arrow{min-width:76px;.line{transform-origin:center right;transition:transform 0.2s ease-in;}&:hover{.line{transform:scale(0.5,1);transition:transform 0.25s ease-out;}}}"]); // &:hover {
//   .h2 {
//     &::before {
//       width: calc(100% + 18px);
//       transition: width 0.25s ease-out;
//     }
//   }
//   .more {
//     .arrow {
//       .line {
//         transform: scale(0.5,1);
//         transition: transform 0.25s ease-out;
//       }
//     }
//   }
// }
// .h2 {
//   position: relative;
//   display: inline-block;
//   max-width: 79.2%;
//   margin-bottom: 13.5px;
//   margin-right: 47px;
//   &::before {
//     content: '';
//     position: absolute;
//     left: -9px;
//     display: block;
//     width: 0;
//     height: 100%;
//     background: linear-gradient(89.32deg, #CBC8C6 0%, #E9E6E3 100%);
//     z-index: -1;
//     transition: width 0.2s ease-in;
//   }
// }
// .more {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   .p1 {
//     margin-right: 47px;
//   }
//   .arrow {
//     min-width: 76px;
//     margin-top: 8px;
//     .line {
//       transform-origin: center right;
//       transition: transform 0.2s ease-in;
//     }
//   }
// }
;// CONCATENATED MODULE: ./src/components/dom/paginationButton/index.style.jsx

const PaginationButtonStyle = external_styled_components_default().button.withConfig({
  displayName: "indexstyle__PaginationButtonStyle",
  componentId: "sc-rupvtw-0"
})(["&.is-disable{opacity:0.5;cursor:pointer;pointer-events:none;}"]);
;// CONCATENATED MODULE: ./src/components/dom/paginationButton/index.jsx
const paginationButton_excluded = ["children", "onClick", "isDisable"];

function paginationButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = paginationButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function paginationButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const PaginationButton = _ref => {
  let {
    children,
    onClick,
    isDisable
  } = _ref,
      props = paginationButton_objectWithoutProperties(_ref, paginationButton_excluded);

  const {
    0: isActive,
    1: setIsActive
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(PaginationButtonStyle, {
    className: isDisable && 'is-disable',
    onClick: e => {
      setIsActive(!isActive);
      onClick(e);
    },
    children: children
  });
};

/* harmony default export */ const paginationButton = (PaginationButton);
;// CONCATENATED MODULE: ./src/components/dom/paginationPosts/index.jsx
const paginationPosts_excluded = ["posts", "maxByPage", "indexPage", "onChange"];

function paginationPosts_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = paginationPosts_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function paginationPosts_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const PaginationPosts = _ref => {
  let {
    posts,
    maxByPage = 1,
    indexPage,
    onChange
  } = _ref,
      props = paginationPosts_objectWithoutProperties(_ref, paginationPosts_excluded);

  const lengthPage = Math.ceil(posts.length / maxByPage);

  const previousIsDisable = () => {
    return indexPage + 1 == 1 ? true : false;
  };

  const nextIsDisable = () => {
    return indexPage + 1 == lengthPage ? true : false;
  };

  const previousPagePosts = () => {
    onChange(indexPage - 1);
  };

  const nextPagePosts = () => {
    onChange(indexPage + 1);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PaginationPostsStyle, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(paginationButton, {
      isDisable: previousIsDisable(),
      onClick: previousPagePosts,
      children: /*#__PURE__*/jsx_runtime_.jsx(iconArrow, {
        orientation: "left"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "p1",
      children: `Page ${indexPage + 1}/${lengthPage ? lengthPage : 1}`
    }), /*#__PURE__*/jsx_runtime_.jsx(paginationButton, {
      isDisable: nextIsDisable(),
      onClick: nextPagePosts,
      children: /*#__PURE__*/jsx_runtime_.jsx(iconArrow, {})
    })]
  });
};

/* harmony default export */ const paginationPosts = (PaginationPosts);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/dom/listPosts/index.jsx
const listPosts_excluded = ["posts", "categories", "maxPagination"];

function listPosts_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = listPosts_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function listPosts_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const ListPosts = _ref => {
  let {
    posts = [],
    categories = [],
    maxPagination = 1
  } = _ref,
      props = listPosts_objectWithoutProperties(_ref, listPosts_excluded);

  const {
    0: listFilteredPosts,
    1: setListFilteredPosts
  } = (0,external_react_.useState)(posts);
  const {
    0: listFilteredPostsByPage,
    1: setListFilteredPostsByPage
  } = (0,external_react_.useState)(listFilteredPosts);
  const {
    0: listActiveFilters,
    1: setListActiveFilters
  } = (0,external_react_.useState)([]);
  const {
    0: indexPage,
    1: setIndexPage
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    let newListFilteredPosts = [];

    if (listActiveFilters.length > 0) {
      newListFilteredPosts = posts.filter(post => listActiveFilters.includes(post.category));
    } else {
      newListFilteredPosts = posts;
    }

    setListFilteredPosts(newListFilteredPosts);
    setIndexPage(0);
  }, [listActiveFilters]);
  (0,external_react_.useEffect)(() => {
    const newListFilteredPostsByPage = listFilteredPosts.slice(maxPagination * indexPage, maxPagination * indexPage + maxPagination);
    setListFilteredPostsByPage(newListFilteredPostsByPage);
  }, [indexPage, listFilteredPosts]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListPostsStyle, {
    children: [categories && categories.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(filterPosts, {
      filters: categories,
      onChange: newListActiveFilters => setListActiveFilters(newListActiveFilters)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "list-posts",
      children: listFilteredPostsByPage.map((post, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "post-card",
        children: post.externalLink ? /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: post.externalLink,
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(postCard, {
            post: post
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: `/posts/${post.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(postCard, {
              post: post
            })
          })
        })
      }, `post-card-${index}`))
    }), maxPagination && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "separator"
      }), /*#__PURE__*/jsx_runtime_.jsx(paginationPosts, {
        posts: listFilteredPosts,
        maxByPage: maxPagination,
        indexPage: indexPage,
        onChange: newIndexPage => setIndexPage(newIndexPage)
      })]
    })]
  });
};

/* harmony default export */ const listPosts = (ListPosts);

/***/ })

};
;