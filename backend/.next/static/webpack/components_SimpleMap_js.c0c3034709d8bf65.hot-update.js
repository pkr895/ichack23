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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleMap; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Marker(lat, lng, onClick) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onClick,\n        style: {\n            backgroundColor: \"red\",\n            borderColor: \"white\",\n            borderWidth: \"5px\",\n            borderRadius: \"50%\",\n            width: \"25px\",\n            height: \"25px\",\n            display: \"inline-block\",\n            position: \"absolute\",\n            left: \"\".concat(lng, \"px\"),\n            top: \"\".concat(lat, \"px\")\n        }\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Marker;\nfunction PopUp(param) {\n    let { lat , lng , text  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"white\",\n            padding: \"10px\",\n            position: \"absolute\",\n            left: \"\".concat(-50 + lng, \"px\"),\n            top: \"\".concat(-70 + lat, \"px\"),\n            zIndex: 1\n        },\n        children: \"text\"\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PopUp;\nfunction SimpleMap() {\n    _s();\n    const mapStyles = [\n        {\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#523735\"\n                }\n            ]\n        },\n        {\n            \"elementType\": \"labels.text.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f5f1e6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#33d17a\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#c9b2a6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.country\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"on\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dcd2be\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"labels\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.land_parcel\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#ae9e90\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.neighborhood\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"administrative.province\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"on\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"landscape.man_made\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"landscape.natural\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"labels.text\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#93817c\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi.park\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#a5b076\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"poi.park\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#447530\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f5f1e6\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road\",\n            \"elementType\": \"labels.icon\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.arterial\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#fdfcf8\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#f8c967\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#e9bc62\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway.controlled_access\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#e98d58\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.highway.controlled_access\",\n            \"elementType\": \"geometry.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#db8555\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.local\",\n            \"elementType\": \"labels\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"road.local\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#806b63\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit\",\n            \"stylers\": [\n                {\n                    \"visibility\": \"off\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#8f7d77\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.line\",\n            \"elementType\": \"labels.text.stroke\",\n            \"stylers\": [\n                {\n                    \"color\": \"#ebe3cd\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"transit.station\",\n            \"elementType\": \"geometry\",\n            \"stylers\": [\n                {\n                    \"color\": \"#dfd2ae\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"water\",\n            \"elementType\": \"geometry.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#99c1f1\"\n                }\n            ]\n        },\n        {\n            \"featureType\": \"water\",\n            \"elementType\": \"labels.text.fill\",\n            \"stylers\": [\n                {\n                    \"color\": \"#92998d\"\n                }\n            ]\n        }\n    ];\n    console.log(process.env);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    var lat = 59.955413;\n    var lng = 30.337844;\n    return(// Important! Always set the container height explicitly\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"100vh\",\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            bootstrapURLKeys: {\n                key: \"AIzaSyBo8EAzrzlSOKvOmKRnlCjU1_ZNEVuiBj8\"\n            },\n            defaultCenter: {\n                lat: 60,\n                lng: 30\n            },\n            defaultZoom: 11,\n            options: {\n                styles: mapStyles\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Marker, {\n                    lat: lat,\n                    lng: lng,\n                    onClick: ()=>setShowPopup(!showPopup)\n                }, void 0, false, {\n                    fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n                    lineNumber: 375,\n                    columnNumber: 9\n                }, this),\n                showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PopUp, {\n                    lat: lat,\n                    lng: lng,\n                    text: \"infomration\"\n                }, void 0, false, {\n                    fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n                    lineNumber: 381,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n            lineNumber: 369,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/abdullah/ichack/ichack23/frontend/components/SimpleMap.js\",\n        lineNumber: 368,\n        columnNumber: 5\n    }, this));\n}\n_s(SimpleMap, \"YxEq4CBtuWdF8IGTVx1DJqim++A=\");\n_c2 = SimpleMap;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Marker\");\n$RefreshReg$(_c1, \"PopUp\");\n$RefreshReg$(_c2, \"SimpleMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVztnQkFDVDtvQkFDRSxTQUFTO2dCQUNYO2FBQ0Q7UUFDSDtRQUNBO1lBQ0UsZUFBZTtZQUNmLGVBQWU7WUFDZixXQUFXO2dCQUNUO29CQUNFLFNBQVM7Z0JBQ1g7YUFDRDtRQUNIO1FBQ0E7WUFDRSxlQUFlO1lBQ2YsZUFBZTtZQUNmLFdBQVc7Z0JBQ1Q7b0JBQ0UsU0FBUztnQkFDWDthQUNEO1FBQ0g7UUFDQTtZQUNFLGVBQWU7WUFDZixlQUFlO1lBQ2YsV0FBVztnQkFDVDtvQkFDRSxTQUFTO2dCQUNYO2FBQ0Q7UUFDSDtRQUNBO1lBQ0UsZUFBZTtZQUNmLGVBQWU7WUFDZixXQUFXO2dCQUNUO29CQUNFLFNBQVM7Z0JBQ1g7YUFDRDtRQUNIO0tBQ0Q7SUFFREMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPQSxDQUFDQyxHQUFHO0lBRXZCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHN0IsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxJQUFJRyxNQUFNO0lBQ1YsSUFBSUMsTUFBTTtJQUVWLE9BQ0Usd0RBQXdEO2tCQUN4RCw4REFBQ0U7UUFBSUMsT0FBTztZQUFFTSxRQUFRO1lBQVNELE9BQU87UUFBTztrQkFDM0MsNEVBQUNYLHdEQUFjQTtZQUNiNkIsa0JBQWtCO2dCQUFFQyxLQUFLO1lBQTBDO1lBQ25FQyxlQUFlO2dCQUFFN0IsS0FBSztnQkFBSUMsS0FBSztZQUFHO1lBQ2xDNkIsYUFBYTtZQUNiQyxTQUFTO2dCQUFFQyxRQUFRWjtZQUFVOzs4QkFFN0IsOERBQUNyQjtvQkFDQ0MsS0FBS0E7b0JBQ0xDLEtBQUtBO29CQUNMQyxTQUFTLElBQU13QixhQUFhLENBQUNEOzs7Ozs7Z0JBRTlCQSwyQkFDQyw4REFBQ1Y7b0JBQ0NmLEtBQUtBO29CQUNMQyxLQUFLQTtvQkFDTGUsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakIsQ0FBQztHQTlWdUJHO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2ltcGxlTWFwLmpzPzIzMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuXG5cbmZ1bmN0aW9uIE1hcmtlcihsYXQsIGxuZywgb25DbGljayl7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9IFxuICAgIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICd3aGl0ZScsXG4gICAgICBib3JkZXJXaWR0aDogJzVweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lkdGg6ICcyNXB4JyxcbiAgICAgIGhlaWdodDogJzI1cHgnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IGAke2xuZ31weGAsXG4gICAgICB0b3A6IGAke2xhdH1weGBcbiAgICB9fT48L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBQb3BVcCh7bGF0LCBsbmcsIHRleHR9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IGAkey01MCArIGxuZ31weGAsXG4gICAgICB0b3A6IGAkey03MCArIGxhdH1weGAsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgfX1cbiAgICA+dGV4dFxuICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZU1hcCgpIHtcbiAgXG4gIGNvbnN0IG1hcFN0eWxlcyA9IFtcbiAgICB7XG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjNTIzNzM1XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjVmMWU2XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiMzM2QxN2FcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2M5YjJhNlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2RjZDJiZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2FlOWU5MFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5uZWlnaGJvcmhvb2RcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUucHJvdmluY2VcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGZkMmFlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGZkMmFlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzkzODE3Y1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2E1YjA3NlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzQ0NzUzMFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjVmMWU2XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZkZmNmOFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjhjOTY3XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjZTliYzYyXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheS5jb250cm9sbGVkX2FjY2Vzc1wiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNlOThkNThcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNkYjg1NTVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjODA2YjYzXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5saW5lXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2RmZDJhZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM4ZjdkNzdcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5saW5lXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNlYmUzY2RcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2RmZDJhZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5YzFmMVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzkyOTk4ZFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG5cbiAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpO1xuXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHZhciBsYXQgPSA1OS45NTU0MTM7XG4gIHZhciBsbmcgPSAzMC4zMzc4NDQ7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBJbXBvcnRhbnQhIEFsd2F5cyBzZXQgdGhlIGNvbnRhaW5lciBoZWlnaHQgZXhwbGljaXRseVxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgPEdvb2dsZU1hcFJlYWN0XG4gICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5Qm84RUF6cnpsU09Ldk9tS1JubENqVTFfWk5FVnVpQmo4JyB9fVxuICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogNjAsIGxuZzogMzAgfX1cbiAgICAgICAgZGVmYXVsdFpvb209ezExfVxuICAgICAgICBvcHRpb25zPXt7IHN0eWxlczogbWFwU3R5bGVzIH19XG4gICAgICA+XG4gICAgICAgIDxNYXJrZXJcbiAgICAgICAgICBsYXQ9e2xhdH1cbiAgICAgICAgICBsbmc9e2xuZ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAoIXNob3dQb3B1cCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93UG9wdXAgJiYgKFxuICAgICAgICAgIDxQb3BVcFxuICAgICAgICAgICAgbGF0PXtsYXR9XG4gICAgICAgICAgICBsbmc9e2xuZ31cbiAgICAgICAgICAgIHRleHQ9XCJpbmZvbXJhdGlvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdvb2dsZU1hcFJlYWN0IiwiTWFya2VyIiwibGF0IiwibG5nIiwib25DbGljayIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIlBvcFVwIiwidGV4dCIsInBhZGRpbmciLCJ6SW5kZXgiLCJTaW1wbGVNYXAiLCJtYXBTdHlsZXMiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImJvb3RzdHJhcFVSTEtleXMiLCJrZXkiLCJkZWZhdWx0Q2VudGVyIiwiZGVmYXVsdFpvb20iLCJvcHRpb25zIiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SimpleMap.js\n"));

/***/ })

});