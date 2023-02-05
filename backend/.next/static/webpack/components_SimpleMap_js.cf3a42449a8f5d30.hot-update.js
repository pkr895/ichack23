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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\nfunction Marker(lat, lng, onClick) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onClick,\n        style: {\n            backgroundColor: \"red\",\n            borderColor: \"white\",\n            borderWidth: \"5px\",\n            borderRadius: \"50%\",\n            width: \"25px\",\n            height: \"25px\",\n            display: \"inline-block\",\n            position: \"absolute\",\n            left: \"\".concat(lng, \"px\"),\n            top: \"\".concat(lat, \"px\")\n        }\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Marker;\nfunction PopUp(param) {\n    let { lat , lng , text  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"white\",\n            padding: \"10px\",\n            position: \"absolute\",\n            left: \"\".concat(-50 + lng, \"px\"),\n            top: \"\".concat(-70 + lat, \"px\"),\n            zIndex: 1\n        },\n        children: \"text\"\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PopUp;\nfunction SimpleMap() {\n    const mapStyles = [\n        {\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#523735\"\n                }\n            ]\n        },\n        {\n            \"elementType\": \"labels.text.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f5f1e6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#33d17a\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#c9b2a6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.country\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"on\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dcd2be\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"labels\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#ae9e90\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.neighborhood\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.province\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"on\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"landscape.man_made\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"landscape.natural\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"labels.text\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#93817c\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi.park\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#a5b076\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi.park\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#447530\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f5f1e6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"elementType\": \"labels.icon\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.arterial\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#fdfcf8\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f8c967\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#e9bc62\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway.controlled_access\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#e98d58\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway.controlled_access\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#db8555\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.local\",\n            \"elementType\": \"labels\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.local\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#806b63\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#8f7d77\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"labels.text.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#ebe3cd\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.station\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"water\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#99c1f1\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"water\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#92998d\"\n                }\n            ]\n        }\n    ];\n    console.log(process.env);\n    const setShowPopup = ()=>{\n        setShowPopup(!showPopup);\n    };\n    if (showPopup) {\n        console.log(showPopup);\n    }\n    var lat = 59.955413;\n    var lng = 30.337844;\n    return(// Important! Always set the container height explicitly\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"100vh\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            bootstrapURLKeys: {\n                key: \"AIzaSyBo8EAzrzlSOKvOmKRnlCjU1_ZNEVuiBj8\"\n            },\n            defaultCenter: {\n                lat: 60,\n                lng: 30\n            },\n            defaultZoom: 11,\n            options: {\n                styles: mapStyles\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Marker, {\n                    lat: lat,\n                    lng: lng,\n                    onClick: ()=>setShowPopup(!showPopup)\n                }, void 0, false, {\n                    fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n                    lineNumber: 381,\n                    columnNumber: 9\n                }, this),\n                showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PopUp, {\n                    lat: lat,\n                    lng: lng,\n                    text: \"infomration\"\n                }, void 0, false, {\n                    fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n                    lineNumber: 387,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n            lineNumber: 375,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 374,\n        columnNumber: 5\n    }, this));\n}\n_c2 = SimpleMap;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Marker\");\n$RefreshReg$(_c1, \"PopUp\");\n$RefreshReg$(_c2, \"SimpleMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW1wbGVNYXAuanM/MjMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XG5cblxuZnVuY3Rpb24gTWFya2VyKGxhdCwgbG5nLCBvbkNsaWNrKXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgb25DbGljaz17b25DbGlja30gXG4gICAgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICBib3JkZXJDb2xvcjogJ3doaXRlJyxcbiAgICAgIGJvcmRlcldpZHRoOiAnNXB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWR0aDogJzI1cHgnLFxuICAgICAgaGVpZ2h0OiAnMjVweCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogYCR7bG5nfXB4YCxcbiAgICAgIHRvcDogYCR7bGF0fXB4YFxuICAgIH19PjwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFBvcFVwKHtsYXQsIGxuZywgdGV4dH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogYCR7LTUwICsgbG5nfXB4YCxcbiAgICAgIHRvcDogYCR7LTcwICsgbGF0fXB4YCxcbiAgICAgIHpJbmRleDogMSxcbiAgICB9fVxuICAgID50ZXh0XG4gIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlTWFwKCkge1xuICBcbiAgY29uc3QgbWFwU3R5bGVzID0gW1xuICAgIHtcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM1MjM3MzVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNmNWYxZTZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzMzZDE3YVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjYzliMmE2XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmNvdW50cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGNkMmJlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxhbmRfcGFyY2VsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjYWU5ZTkwXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLm5laWdoYm9yaG9vZFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5tYW5fbWFkZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubmF0dXJhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNkZmQyYWVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNkZmQyYWVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjOTM4MTdjXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjYTViMDc2XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjNDQ3NTMwXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNmNWYxZTZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZmRmY2Y4XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNmOGM5NjdcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNlOWJjNjJcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2U5OGQ1OFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3NcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2RiODU1NVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM4MDZiNjNcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGZkMmFlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQubGluZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzhmN2Q3N1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2ViZTNjZFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb25cIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGZkMmFlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjOTljMWYxXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjOTI5OThkXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudik7XG5cbiAgY29uc3Qgc2V0U2hvd1BvcHVwID0gKCkgPT4ge1xuICAgIHNldFNob3dQb3B1cCghc2hvd1BvcHVwKTtcbiAgfTtcblxuICBpZiAoc2hvd1BvcHVwKSB7XG4gICAgY29uc29sZS5sb2coc2hvd1BvcHVwKTtcbiAgfSAgXG4gIHZhciBsYXQgPSA1OS45NTU0MTM7XG4gIHZhciBsbmcgPSAzMC4zMzc4NDQ7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBJbXBvcnRhbnQhIEFsd2F5cyBzZXQgdGhlIGNvbnRhaW5lciBoZWlnaHQgZXhwbGljaXRseVxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPEdvb2dsZU1hcFJlYWN0XG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5Qm84RUF6cnpsU09Ldk9tS1JubENqVTFfWk5FVnVpQmo4JyB9fVxuICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogNjAsIGxuZzogMzAgfX1cbiAgICAgICAgZGVmYXVsdFpvb209ezExfVxuICAgICAgICBvcHRpb25zPXt7IHN0eWxlczogbWFwU3R5bGVzIH19XG4gICAgICA+XG4gICAgICAgIDxNYXJrZXJcbiAgICAgICAgICBsYXQ9e2xhdH1cbiAgICAgICAgICBsbmc9e2xuZ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAoIXNob3dQb3B1cCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93UG9wdXAgJiYgKFxuICAgICAgICAgIDxQb3BVcFxuICAgICAgICAgICAgbGF0PXtsYXR9XG4gICAgICAgICAgICBsbmc9e2xuZ31cbiAgICAgICAgICAgIHRleHQ9XCJpbmZvbXJhdGlvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdvb2dsZU1hcFJlYWN0IiwiTWFya2VyIiwibGF0IiwibG5nIiwib25DbGljayIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIlBvcFVwIiwidGV4dCIsInBhZGRpbmciLCJ6SW5kZXgiLCJTaW1wbGVNYXAiLCJtYXBTdHlsZXMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsInNldFNob3dQb3B1cCIsInNob3dQb3B1cCIsImJvb3RzdHJhcFVSTEtleXMiLCJrZXkiLCJkZWZhdWx0Q2VudGVyIiwiZGVmYXVsdFpvb20iLCJvcHRpb25zIiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SimpleMap.js\n"));

/***/ })

});