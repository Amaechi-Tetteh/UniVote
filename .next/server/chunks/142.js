"use strict";
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ socialGroupFactory)
});

// EXTERNAL MODULE: ./web3.js
var web3 = __webpack_require__(442);
;// CONCATENATED MODULE: ./build/contracts/SocialGroupFactory.json
const SocialGroupFactory_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_socialToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"string","name":"_name","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"SocialGroupCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"socialGroupNfts","outputs":[{"internalType":"contract SocialGroupNFT","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"createSocialGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewSocialGroups","outputs":[{"internalType":"contract SocialGroupNFT[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true}]}');
;// CONCATENATED MODULE: ./socialGroupFactory.js


const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(JSON.stringify(SocialGroupFactory_namespaceObject.Mt)), '0xB8677C3816eeB3d3a3f460dcF9D7fEC34aC0D26C');
/* harmony default export */ const socialGroupFactory = (instance);


/***/ })

};
;