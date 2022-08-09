"use strict";
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/Header.js




const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        style: {
            marginTop: '10px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                route: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "item",
                    children: "Uni Proposals"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
                position: "right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "View Proposals"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/campaigns/new",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "+"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout.js




const Layout = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            props.children
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const routes = module.exports = __webpack_require__(662)();
routes.add('/tickets/new', '/tickets/new').add('/tickets/:address', '/tickets/show').add('/tickets/create/:address', '/tickets/create').add('/tickets/:address/requests', '/tickets/requests/index').add('/tickets/:address/requests/new', '/tickets/requests/new');


/***/ }),

/***/ 442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;
if (false) {} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('https://rinkeby.infura.io/v3/81830543415c458db9a881f079fc37f7');
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);


/***/ })

};
;