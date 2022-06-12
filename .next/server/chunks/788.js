"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 4788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3742);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_flowmap_useFlowMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(405);
/* harmony import */ var _helpers_blend_useBlend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7361);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_store__WEBPACK_IMPORTED_MODULE_1__, _helpers_flowmap_useFlowMap__WEBPACK_IMPORTED_MODULE_3__, _helpers_blend_useBlend__WEBPACK_IMPORTED_MODULE_4__]);
([_helpers_store__WEBPACK_IMPORTED_MODULE_1__, _helpers_flowmap_useFlowMap__WEBPACK_IMPORTED_MODULE_3__, _helpers_blend_useBlend__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Bg() {
  const flowmap = (0,_helpers_flowmap_useFlowMap__WEBPACK_IMPORTED_MODULE_3__/* .useFlowMap */ .u)();
  (0,_helpers_blend_useBlend__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(flowmap);
  return null;
}

const LCanvas = ({
  children
}) => {
  const dom = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(state => state.dom);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__.Canvas, {
    mode: "concurrent",
    style: {
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      pointerEvents: "none"
    },
    shadows: false,
    gl: {
      alpha: true,
      antialias: false,
      stencil: false,
      depth: true
    },
    linear: false,
    onCreated: state => state.events.connect(dom.current),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Bg, {}), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LCanvas);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5906:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2949);
/* harmony import */ var _blend_frag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2818);
/* harmony import */ var _blend_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_0__]);
three__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
  uniforms: {
    time: {
      value: null
    },
    anim: {
      value: 0
    },
    tFlowMap: {
      value: null
    },
    uRes: {
      value: null
    },
    uTheme: {
      value: null
    }
  },
  fragmentShader: _blend_frag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  vertexShader: _blend_vert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (material);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useBlend)
/* harmony export */ });
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5906);
/* harmony import */ var _helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7486);
/* harmony import */ var _helpers_disposeAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4317);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8157);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_1__, _blend__WEBPACK_IMPORTED_MODULE_3__, _helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_4__, _helpers_store__WEBPACK_IMPORTED_MODULE_6__]);
([three__WEBPACK_IMPORTED_MODULE_1__, _blend__WEBPACK_IMPORTED_MODULE_3__, _helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_4__, _helpers_store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const {
  damp
} = three__WEBPACK_IMPORTED_MODULE_1__.MathUtils;
function useBlend(flowmap) {
  const theme = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(s => s.theme);
  const {
    size,
    gl
  } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__.useThree)();
  const {
    isWebGL2
  } = gl.capabilities;
  const {
    0: complexRTT,
    1: postScene,
    2: postCamera,
    3: screen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const postCamera = new three__WEBPACK_IMPORTED_MODULE_1__.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const complexRTT = isWebGL2 ? new three__WEBPACK_IMPORTED_MODULE_1__.WebGLMultisampleRenderTarget(512, 512) : new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderTarget(512, 512);
    complexRTT.texture.generateMipmaps = false;
    complexRTT.depthBuffer = false;
    complexRTT.stencilBuffer = false;
    complexRTT.texture.format = three__WEBPACK_IMPORTED_MODULE_1__.RGBFormat;
    complexRTT.samples = 4;
    _blend__WEBPACK_IMPORTED_MODULE_3__/* ["default"].uniforms.uTheme.value */ .Z.uniforms.uTheme.value = theme === 'light' ? new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0) : new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1);
    _blend__WEBPACK_IMPORTED_MODULE_3__/* ["default"].uniforms.tFlowMap.value */ .Z.uniforms.tFlowMap.value = flowmap.value;
    _blend__WEBPACK_IMPORTED_MODULE_3__/* ["default"].uniforms.uRes.value */ .Z.uniforms.uRes.value = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(size.width, size.height); // Fullscreen triangle

    const postScene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
    const postGeometry = (0,_helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_4__/* .getFullscreenTriangle */ .l)();
    const screen = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(postGeometry, _blend__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    screen.frustumCulled = false;
    postScene.add(screen);
    postScene.background = new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x212121); // const postScene = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)

    return [complexRTT, postScene, postCamera, screen];
  }, []);
  const animValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  const [styles, api] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_5__.useSpring)(() => ({
    opacity: 0,
    config: _react_spring_web__WEBPACK_IMPORTED_MODULE_5__.config.gentle
  }));
  api.start({
    opacity: 0.5,
    onChange: ({
      value
    }) => {
      animValue.current = value.opacity;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    return () => {
      complexRTT.dispose();
      (0,_helpers_disposeAll__WEBPACK_IMPORTED_MODULE_7__/* .disposeAll */ .p)(postScene);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    screen.material.uniforms.uTheme.value = theme === 'light' ? new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0) : new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1);
  }, [theme]);
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_0__.useFrame)(({
    gl
  }, delta) => {
    screen.material.uniforms.anim.value = damp(screen.material.uniforms.anim.value, animValue.current, 1.75, delta);
    screen.material.uniforms.time.value += delta;
    gl.setRenderTarget(null);
    gl.render(postScene, postCamera);
  }, 10);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    complexRTT.setSize(size.width, size.height);
    _blend__WEBPACK_IMPORTED_MODULE_3__/* ["default"].uniforms.uRes.value */ .Z.uniforms.uRes.value = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(size.width, size.height);
  }, [complexRTT, size]);
  return {
    complexRTT: complexRTT
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ disposeAll)
/* harmony export */ });
const disposeAll = scene => {
  scene.traverse(object => {
    if (!object.isMesh) return;
    object.geometry.dispose();

    if (object.material.isMaterial) {
      cleanMaterial(object.material);
    } else {
      // an array of materials
      for (const material of object.material) cleanMaterial(material);
    }
  });
};

const cleanMaterial = material => {
  // dispose textures
  for (const key of Object.keys(material)) {
    const value = material[key];

    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose();
    }
  }

  material.dispose();
};

/***/ }),

/***/ 405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useFlowMap)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2949);
/* harmony import */ var _helpers_flowmap_flowmap_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2244);
/* harmony import */ var _helpers_flowmap_flowmap_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_disposeAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4317);
/* harmony import */ var _helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7486);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_0__, _helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__]);
([three__WEBPACK_IMPORTED_MODULE_0__, _helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const useFlowMap = (falloff = 0.05, alpha = 1.0, dissipation = 0.955) => {
  const {
    size
  } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();
  const screenScene = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_0__.Scene(), []);
  const screenCamera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const screenGeometry = (0,_helpers_getFullScreenTriangle__WEBPACK_IMPORTED_MODULE_3__/* .getFullscreenTriangle */ .l)();
  const mousePos = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(), []);
  const mouseCache = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(), []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const mouseMove = e => {
      const mouseX = e.clientX / window.innerWidth * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.set(mouseX, mouseY);
    };

    document.addEventListener('mousemove', mouseMove);
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  let renderTargetRead = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderTarget(size.width, size.height, {
    type: three__WEBPACK_IMPORTED_MODULE_0__.HalfFloatType,
    depthBuffer: false
  }), [size]);
  renderTargetRead.name = 'flowRTTread';
  let renderTargetWrite = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderTarget(size.width, size.height, {
    type: three__WEBPACK_IMPORTED_MODULE_0__.HalfFloatType,
    depthBuffer: false
  }), [size]);
  renderTargetWrite.name = 'flowRTTwrite';
  renderTargetWrite.depthBuffer = false; // Flowmap material

  const material = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
    uniforms: {
      tMap: {
        value: null
      },
      uFalloff: {
        value: falloff
      },
      uAlpha: {
        value: alpha
      },
      time: {
        value: 0
      },
      uVisible: {
        value: true
      },
      uDissipation: {
        value: dissipation
      },
      uRes: {
        value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(size.width, size.height)
      },
      uMouse: {
        value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(-0.25, 0.5)
      }
    },
    vertexShader: _helpers_flowmap_flowmap_vert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    fragmentShader: _helpers_flowmap_flowmap_frag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    depthTest: false,
    glslVersion: three__WEBPACK_IMPORTED_MODULE_0__.GLSL3
  }), []);
  const screen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(screenGeometry, material), []);
  _store__WEBPACK_IMPORTED_MODULE_4__/* ["default"].setState */ .Z.setState({
    flowmap: screen.material.uniforms.tMap.value
  });
  screen.frustumCulled = false;
  screenScene.add(screen);
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(({
    gl,
    mouse,
    scene,
    camera
  }, delta) => {
    if (material) {
      let ratio = 0;
      const mouseX = mousePos.x * 0.5 + 0.5 + ratio;
      const mouseY = mousePos.y * 0.5 + 0.5;

      if (mouseX === mouseCache.x && mouseY === mouseCache.y) {
        material.uniforms.uVisible.value = false;
      } else {
        material.uniforms.uVisible.value = true;
      }

      mouseCache.set(mousePos.x * 0.5 + 0.5 + ratio, mousePos.y * 0.5 + 0.5);
      material.uniforms.time.value += delta;
      material.uniforms.uMouse.value.lerp(mouseCache, 0.14);
    }

    gl.autoClear = false;
    gl.setRenderTarget(renderTargetWrite);
    gl.render(screenScene, screenCamera); // Swap render targets

    const temp = renderTargetRead;
    renderTargetRead = renderTargetWrite;
    renderTargetWrite = temp;
    material.uniforms.tMap.value = renderTargetRead.texture;
    gl.setRenderTarget(null);
    gl.render(screenScene, screenCamera);
  }, 1); // useFrame(({ scene, camera, gl }, delta) => {
  //   gl.clear()
  //   gl.setRenderTarget(null)
  //   gl.render(scene, camera)
  // }, 10)

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    renderTargetWrite.setSize(size.width, size.height);
    renderTargetRead.setSize(size.width, size.height);
    material.uniforms.uRes.value = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(size.width, size.height);
  }, [size]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      renderTargetWrite.dispose();
      renderTargetRead.dispose();
      (0,_helpers_disposeAll__WEBPACK_IMPORTED_MODULE_7__/* .disposeAll */ .p)(screenScene);
    };
  }, []);
  return renderTargetRead.texture;
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getFullscreenTriangle)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_0__]);
three__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getFullscreenTriangle() {
  const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
  const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
  const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
  geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(vertices, 2));
  geometry.setAttribute('uv', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(uvs, 2));
  return geometry;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nuniform float time;\nuniform vec2 uRes;\nuniform float anim;\nuniform sampler2D flowmap;\nuniform vec3 uTheme;\nvarying vec2 vUv;\n\n/*\n A noise function mirrored and thresholded to maximize the value at the center of the screen\n Combined with a second layer of noise to produce an ink on paper effect\n*/\n\nconst vec3 inkColor = vec3(0.01, 0.01, 0.1);\nconst vec3 paperColor = vec3(1.0, 0.98, 0.94);\n\nconst float speed = 0.0075;\nconst float shadeContrast = 0.55;\n\n//3D simplex noise from: https://www.shadertoy.com/view/XsX3zB\nconst float F3 =  0.3333333;\nconst float G3 =  0.1666667;\n\nvec3 random3(vec3 c) {\n    float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));\n    vec3 r;\n    r.z = fract(512.0*j);\n    j *= .125;\n    r.x = fract(512.0*j);\n    j *= .125;\n    r.y = fract(512.0*j);\n    return r-0.5;\n}\n\nfloat simplex3d(vec3 p) {\n\t vec3 s = floor(p + dot(p, vec3(F3)));\n\t vec3 x = p - s + dot(s, vec3(G3));\n\t \n\t vec3 e = step(vec3(0.0), x - x.yzx);\n\t vec3 i1 = e*(1.0 - e.zxy);\n\t vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n\t \n\t vec3 x1 = x - i1 + G3;\n\t vec3 x2 = x - i2 + 2.0*G3;\n\t vec3 x3 = x - 1.0 + 3.0*G3;\n\t \n\t vec4 w, d;\n\t \n\t w.x = dot(x, x);\n\t w.y = dot(x1, x1);\n\t w.z = dot(x2, x2);\n\t w.w = dot(x3, x3);\n\t \n\t w = max(0.6 - w, 0.0);\n\t \n\t d.x = dot(random3(s), x);\n\t d.y = dot(random3(s + i1), x1);\n\t d.z = dot(random3(s + i2), x2);\n\t d.w = dot(random3(s + 1.0), x3);\n\t \n\t w *= w;\n\t w *= w;\n\t d *= w;\n\t \n\t return dot(d, vec4(52.0));\n}\n\nfloat fbmB(vec3 p)\n{\n\tfloat f = 0.0;\t\n\tfloat frequency = 1.0;\n\tfloat amplitude = 0.5;\n\tfor (int i = 0; i < 5; i++)\n\t{\n\t\tf += simplex3d(p * frequency) * amplitude;\n\t\tamplitude *= 0.5;\n\t\tfrequency *= 2.0 + float(i) / 100.0;\n\t}\n\treturn min(f, 1.0);\n}\n\nvec4 mainImage(vec2 fragCoord )\n{\n    //Setup coordinates\n    vec2 uv = 1.0 - fragCoord.xy / uRes.xy;\n    vec2 coord = 1.0 - uv * 2.0;\n    uv.x = 1.0 - abs(1.0 - uv.x * 2.0);\n    vec3 p = vec3(uv, time * speed);\n    \n    //Sample a noise function\n    float blot = fbmB(p * 3.0 + 8.0);\n    float shade = fbmB(p * 2.0 + 16.0);\n    \n    //Threshold\n    blot = (blot + (sqrt(uv.x) - abs(0.5 - uv.y)));\n    blot = smoothstep(0.65, 0.71, blot) * max(1.0 - shade * shadeContrast, 0.0);\n    \n    //Color\n    vec4 fragColor = vec4(mix(paperColor, inkColor, blot), 1.0);\n    fragColor.rgb *= 1.0 - pow(max(length(coord) - 0.5, 0.0), 5.0);\n    return fragColor;\n}\n\nvec3 hash3(in vec3 p) {\n  vec3 q = vec3(dot(p, vec3(127.1, 311.7, 189.2)),\n                dot(p, vec3(269.5, 183.3, 324.7)),\n                dot(p, vec3(419.2, 371.9, 128.5)));\n  return fract(sin(q) * 43758.5453);\n}\n\nfloat noise(in vec3 x, float v) {\n  // adapted from IQ's 2d voronoise:\n  // http://www.iquilezles.org/www/articles/voronoise/voronoise.htm\n  vec3 p = floor(x);\n  vec3 f = fract(x);\n\n  float s = 1.0 + 31.0 * v;\n  float va = 0.0;\n  float wt = 0.0;\n  for (int k=-2; k<=1; k++)\n  for (int j=-2; j<=1; j++)\n  for (int i=-2; i<=1; i++) {\n      vec3 g = vec3(float(i), float(j), float(k));\n      vec3 o = hash3(p + g);\n      vec3 r = g - f + o + 0.5;\n      float d = dot(r, r);\n      float w = pow(1.0 - smoothstep(0.0, 1.414, sqrt(d)), s);\n      va += o.z * w;\n      wt += w;\n    }\n    return va / wt;\n}\n\nfloat fBm(in vec3 p, float v) {\n  float sum = 0.0;\n  float amp = 1.0;\n  for(int i = 0; i < 1; i++) {\n      sum += amp * noise(p, v);\n      amp *= 0.5;\n      p *= 2.0;\n  }\n  return sum;\n}\n\nvoid main() {\n  // vec2 p = gl_FragCoord.xy / uRes.xy - .5;\n\n  vec4 flow = texture2D(flowmap, vUv);\n  // // p += flow.x;\n\n  // vec3 rd = normalize(vec3(p, 1.0));\n  // vec3 pos = vec3(0.0, 0.0, 1.0) * time + rd * 15.0;\n\n  // vec3 col = vec3(0.067,0.173,0.537) * fBm(pos, 1.);\n\n  // // gl_FragColor = vec4(mix(vec3(0.067,0.173,0.537), col, anim), 1.);\n\n    vec2 uv = vUv;\n    vec2 coord = 1.0 - uv * 2.0;\n    uv.x = 1.0 - abs(1.0 - uv.x * 2.0);\n    vec3 p = vec3(uv, time * speed);\n  \n  //Sample a noise function\n  float blot = fbmB(p * 10.0 + 80.0);\n  float shade = fbmB(p * 2.0 + 16.0);\n  \n  //Threshold\n  // blot = (blot + (sqrt(flow.x) - abs(0.5 - flow.y)));\n  // blot = smoothstep(0.65, 0.71, blot) * max(1.0 - shade * shadeContrast, 0.0);\n  \n  //Color\n  vec4 fragColor = flow * blot;\n\n  gl_FragColor = vec4(vec3(fragColor) * vec3(0.0), fragColor.a);\n  gl_FragColor = vec4(vec3(flow) * uTheme, flow.a);\n  // gl_FragColor = flow;\n}\n");

/***/ }),

/***/ 9589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n");

/***/ }),

/***/ 7848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision highp float;\n#define GLSLIFY 1\n\nout highp vec4 gFlowMap;\n\nuniform sampler2D tMap;\nuniform float uFalloff;\nuniform float uAlpha;\nuniform float time;\nuniform float uDissipation;\nuniform vec2 uRes;\nuniform bool uVisible;\n\nuniform vec2 uMouse;\n\n#include <packing>\n\nin vec2 vUv;\n\n//3D simplex noise from: https://www.shadertoy.com/view/XsX3zB\nconst float F3 =  0.3333333;\nconst float G3 =  0.1666667;\n\nvec3 random3(vec3 c) {\n    float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));\n    vec3 r;\n    r.z = fract(512.0*j);\n    j *= .125;\n    r.x = fract(512.0*j);\n    j *= .125;\n    r.y = fract(512.0*j);\n    return r-0.5;\n}\n\nfloat simplex3d(vec3 p) {\n\t vec3 s = floor(p + dot(p, vec3(F3)));\n\t vec3 x = p - s + dot(s, vec3(G3));\n\t \n\t vec3 e = step(vec3(0.0), x - x.yzx);\n\t vec3 i1 = e*(1.0 - e.zxy);\n\t vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n\t \n\t vec3 x1 = x - i1 + G3;\n\t vec3 x2 = x - i2 + 2.0*G3;\n\t vec3 x3 = x - 1.0 + 3.0*G3;\n\t \n\t vec4 w, d;\n\t \n\t w.x = dot(x, x);\n\t w.y = dot(x1, x1);\n\t w.z = dot(x2, x2);\n\t w.w = dot(x3, x3);\n\t \n\t w = max(0.6 - w, 0.0);\n\t \n\t d.x = dot(random3(s), x);\n\t d.y = dot(random3(s + i1), x1);\n\t d.z = dot(random3(s + i2), x2);\n\t d.w = dot(random3(s + 1.0), x3);\n\t \n\t w *= w;\n\t w *= w;\n\t d *= w;\n\t \n\t return dot(d, vec4(52.0));\n}\n\nfloat fbm(vec3 p)\n{\n\tfloat f = 0.0;\t\n\tfloat frequency = 1.0;\n\tfloat amplitude = 0.5;\n\tfor (int i = 0; i < 5; i++)\n\t{\n\t\tf += simplex3d(p * frequency) * amplitude;\n\t\tamplitude *= 0.5;\n\t\tfrequency *= 2.0 + float(i) / 100.0;\n\t}\n\treturn min(f, 1.0);\n}\n\nvoid main() {\n    // vec4 color = texture2D(tMap, vUv ) * uDissipation;\n\n    // vec2 cursor = vUv - uMouse * uVisible;\n    // cursor.x *= uRes.x / uRes.y;\n\n    // vec3 stamp = vec3(1. * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(1.)), 3.0));\n    // float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n    // color.rgb = mix(color.rgb, stamp, falloff);\n    // float alpha = color.r + color.g + color.b;\n\n    // gFlowMap = vec4(color.rgb, alpha);\n    // // gFlowMap = vec4(color.rgb, 1.);\n\n    vec2 p = gl_FragCoord.xy / uRes.xy - .5;\n    vec3 rd = normalize(vec3(p, 1.0));\n    vec3 pos = vec3(0.0, 0.0, 1.0) * time + rd * 15.0;\n    float f = fbm(pos);\n    vec3 col = vec3(0.067,0.173,0.537) * fbm(pos);\n\n    vec4 color = texture2D(tMap, vUv ) * uDissipation;\n    vec2 mouse = uMouse;\n    if (!uVisible) {\n      mouse = vec2(-1.5, -1.5);\n    }\n    vec2 cursor = vUv - mouse;\n    cursor.x *= uRes.x / uRes.y;\n\n    vec3 stamp = vec3(1. * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(1.)), 3.0));\n    float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * f;\n    color.rgb = mix(color.rgb, vec3(1.0), falloff);\n    float alpha = color.r + color.g + color.b;\n\n    gFlowMap = vec4(color.rgb, alpha);\n    // gFlowMap = vec4(color.rgb, 1.);\n}\n");

/***/ }),

/***/ 2244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nout vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n");

/***/ })

};
;