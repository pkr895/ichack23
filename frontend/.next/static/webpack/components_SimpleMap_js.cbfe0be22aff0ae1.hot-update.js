"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_SimpleMap_js",{

/***/ "./components/SimpleMap.js":
/*!*********************************!*\
  !*** ./components/SimpleMap.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nfunction AnyReactComponent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"red\",\n            borderColor: \"white\",\n            borderWidth: \"1%\",\n            borderRadius: \"50%\",\n            width: \"5%\",\n            height: \"5%\",\n            display: \"inline-block\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = AnyReactComponent;\nfunction SimpleMap() {\n    const mapStyles = [\n        {\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#523735\"\n                }\n            ]\n        },\n        {\n            \"elementType\": \"labels.text.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f5f1e6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#33d17a\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#c9b2a6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.country\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"on\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dcd2be\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"labels\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#ae9e90\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.neighborhood\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.province\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"on\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"landscape.man_made\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"landscape.natural\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"labels.text\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#93817c\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi.park\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#a5b076\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi.park\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#447530\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f5f1e6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"elementType\": \"labels.icon\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.arterial\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#fdfcf8\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f8c967\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#e9bc62\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway.controlled_access\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#e98d58\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway.controlled_access\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#db8555\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.local\",\n            \"elementType\": \"labels\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.local\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#806b63\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#8f7d77\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"labels.text.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#ebe3cd\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.station\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"water\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#99c1f1\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"water\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#92998d\"\n                }\n            ]\n        }\n    ];\n    console.log(process.env);\n    function displayInfo() {\n        alert(\"info\");\n    }\n    return(// Important! Always set the container height explicitly\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"100vh\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            bootstrapURLKeys: {\n                key: \"AIzaSyBo8EAzrzlSOKvOmKRnlCjU1_ZNEVuiBj8\"\n            },\n            defaultCenter: {\n                lat: 60,\n                lng: 30\n            },\n            defaultZoom: 11,\n            options: {\n                styles: mapStyles\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnyReactComponent, {\n                lat: 59.955413,\n                lng: 30.337844,\n                text: \"text\"\n            }, void 0, false, {\n                fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n                lineNumber: 354,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n            lineNumber: 348,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 347,\n        columnNumber: 5\n    }, this));\n}\n_c1 = SimpleMap;\nvar _c, _c1;\n$RefreshReg$(_c, \"AnyReactComponent\");\n$RefreshReg$(_c1, \"SimpleMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YztRQUNyQkMsTUFBTTtJQUNSO0lBRUEsT0FDRSx3REFBd0Q7a0JBQ3hELDhEQUFDaEI7UUFBSUMsT0FBTztZQUFFTSxRQUFRO1lBQVNELE9BQU87UUFBTztrQkFDM0MsNEVBQUNSLHdEQUFjQTtZQUNibUIsa0JBQWtCO2dCQUFFQyxLQUFLO1lBQTBDO1lBQ25FQyxlQUFlO2dCQUFFQyxLQUFLO2dCQUFJQyxLQUFLO1lBQUc7WUFDbENDLGFBQWE7WUFDYkMsU0FBUztnQkFBRUMsUUFBUWQ7WUFBVTtzQkFFN0IsNEVBQUNYO2dCQUNDcUIsS0FBSztnQkFDTEMsS0FBSztnQkFDTEksTUFBSzs7Ozs7Ozs7Ozs7Ozs7OztBQUtmLENBQUM7TUF2VnVCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW1wbGVNYXAuanM/MjMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuXG5cbmZ1bmN0aW9uIEFueVJlYWN0Q29tcG9uZW50KCl7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyV2lkdGg6ICcxJScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lkdGg6ICc1JScsXG4gICAgICBoZWlnaHQ6ICc1JScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH19PjwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZU1hcCgpIHtcbiAgXG4gIGNvbnN0IG1hcFN0eWxlcyA9IFtcbiAgICB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjNTIzNzM1XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjVmMWU2XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiMzM2QxN2FcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2M5YjJhNlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2RjZDJiZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2FlOWU5MFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5uZWlnaGJvcmhvb2RcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUucHJvdmluY2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGZkMmFlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGZkMmFlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzkzODE3Y1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2E1YjA3NlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzQ0NzUzMFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjVmMWU2XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZkZmNmOFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjhjOTY3XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZTliYzYyXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2Vzc1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNlOThkNThcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNkYjg1NTVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjODA2YjYzXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5saW5lXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2RmZDJhZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM4ZjdkNzdcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5saW5lXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNlYmUzY2RcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2RmZDJhZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5YzFmMVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzkyOTk4ZFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG5cbiAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpO1xuXG4gIGZ1bmN0aW9uIGRpc3BsYXlJbmZvKCkge1xuICAgIGFsZXJ0KFwiaW5mb1wiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLy8gSW1wb3J0YW50ISBBbHdheXMgc2V0IHRoZSBjb250YWluZXIgaGVpZ2h0IGV4cGxpY2l0bHlcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIDxHb29nbGVNYXBSZWFjdFxuICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUJvOEVBenJ6bFNPS3ZPbUtSbmxDalUxX1pORVZ1aUJqOCcgfX1cbiAgICAgICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDYwLCBsbmc6IDMwIH19XG4gICAgICAgIGRlZmF1bHRab29tPXsxMX1cbiAgICAgICAgb3B0aW9ucz17eyBzdHlsZXM6IG1hcFN0eWxlcyB9fVxuICAgICAgPlxuICAgICAgICA8QW55UmVhY3RDb21wb25lbnRcbiAgICAgICAgICBsYXQ9ezU5Ljk1NTQxM31cbiAgICAgICAgICBsbmc9ezMwLjMzNzg0NH1cbiAgICAgICAgICB0ZXh0PVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiR29vZ2xlTWFwUmVhY3QiLCJBbnlSZWFjdENvbXBvbmVudCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsIlNpbXBsZU1hcCIsIm1hcFN0eWxlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiZGlzcGxheUluZm8iLCJhbGVydCIsImJvb3RzdHJhcFVSTEtleXMiLCJrZXkiLCJkZWZhdWx0Q2VudGVyIiwibGF0IiwibG5nIiwiZGVmYXVsdFpvb20iLCJvcHRpb25zIiwic3R5bGVzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SimpleMap.js\n"));

/***/ })

});