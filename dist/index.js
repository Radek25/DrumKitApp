/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/DrumPanelStyles.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/DrumPanelStyles.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".all-page-container {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  background-color: #3f3f3f;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n@media (min-width: 401px) {\n  .width-control-page {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  .width-control-page {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #202020;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .width-control-page img {\n    width: 250px;\n    height: 250px;\n  }\n}\n\n.logo {\n  width: 200px;\n  height: 70px;\n  margin: 0 100px;\n}\n@media (max-width: 850px) {\n  .logo {\n    display: none;\n  }\n}\n\n.drum-board {\n  width: 70%;\n  height: 70%;\n  padding: 10px;\n  border: 2px solid #ffffff;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 850px) {\n  .drum-board {\n    width: 90%;\n    height: 90%;\n  }\n}\n\n.play-field, .record-field {\n  height: 90%;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.play-field {\n  width: 50%;\n  padding: 0px 5px;\n  margin-right: 100px;\n  flex-wrap: wrap;\n}\n\n.record-field {\n  width: 30%;\n  background-color: #8cc534;\n  flex-wrap: wrap;\n  position: relative;\n  border: 0px solid #8cc534;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./Styles/DrumPanelStyles.scss","webpack://./Styles/Colors.scss","webpack://./Styles/Mixins.scss"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,aAAA;EACA,gBAAA;EACA,yBCNkB;ECClB,aAAA;EACA,uBAAA;EACA,mBAAA;EFKA,eAAA;AACJ;;AAEI;EADJ;IAEQ,aAAA;EAEN;AACF;AADI;EAJJ;IAKQ,WAAA;IACA,YAAA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,yBClBQ;ICDZ,aAAA;IACA,uBAAA;IACA,mBAAA;EFwBF;EALM;IACI,YAAA;IACA,aAAA;EAOV;AACF;;AAJA;EACI,YAAA;EACA,YAAA;EACA,eAAA;AAOJ;AANI;EAJJ;IAKQ,aAAA;EASN;AACF;;AAPA;EACI,UAAA;EACA,WAAA;EACA,aAAA;EEjCA,yBAAA;EACA,mBFiC6C;EEvC7C,aAAA;EACA,uBAAA;EACA,mBAAA;AFmDJ;AAZI;EANJ;IAOQ,UAAA;IACA,WAAA;EAeN;AACF;;AAbA;EACI,WAAA;EACA,YAAA;EEhDA,aAAA;EACA,uBAAA;EACA,mBAAA;AFiEJ;;AAhBA;EACI,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;AAmBJ;;AAjBA;EACI,UAAA;EACA,yBC3DS;ED4DT,eAAA;EACA,kBAAA;EExDA,yBAAA;EACA,mBFwD0C;EE9D1C,aAAA;EACA,uBAAA;EACA,mBAAA;AFoFJ","sourcesContent":["@import './Colors.scss';\r\n@import './Mixins.scss';\r\n.all-page-container{\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    background-color: $mainBackGroundColor;\r\n    @include StandarFlexOptions;\r\n    flex-wrap: wrap;\r\n}\r\n.width-control-page{\r\n    @media (min-width: 401px) {\r\n        display: none;\r\n    }\r\n    @media (max-width: 400px) {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        background-color: $contrastBlack;\r\n        @include StandarFlexOptions;\r\n        img{\r\n            width: 250px;\r\n            height: 250px;\r\n        }\r\n    }\r\n}\r\n.logo{\r\n    width: 200px;\r\n    height: 70px;\r\n    margin: 0 100px;\r\n    @media (max-width: 850px) {\r\n        display: none;\r\n    }\r\n}\r\n.drum-board{\r\n    width: 70%;\r\n    height: 70%;\r\n    padding: 10px;\r\n    @include StandardBorder(2px, $optionalWhite, 10px);\r\n    @include StandarFlexOptions;\r\n    @media (max-width: 850px){\r\n        width: 90%;\r\n        height: 90%;\r\n    }\r\n}\r\n.play-field, .record-field{\r\n    height: 90%;\r\n    padding: 5px;\r\n    @include StandarFlexOptions;\r\n}\r\n.play-field{\r\n    width: 50%;\r\n    padding: 0px 5px;\r\n    margin-right: 100px;\r\n    flex-wrap: wrap;\r\n}\r\n.record-field{\r\n    width: 30%;\r\n    background-color: $lightGreen;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    @include StandardBorder(0px, $lightGreen, 10px);\r\n    @include StandarFlexOptions;\r\n}","$mainBackGroundColor: #3f3f3f;\r\n$lightGreen: #8cc534;\r\n$contrastBlack: #202020;\r\n$optionalWhite: #ffffff;","@mixin StandarFlexOptions {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin StandardBorder($widthOfBorder, $colorOfBorder, $radiusSize) {\r\n    border: $widthOfBorder solid $colorOfBorder;\r\n    border-radius: $radiusSize;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/Metronome.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/Metronome.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".metronome-field {\n  width: 95%;\n  min-height: 40%;\n  height: auto;\n  padding: 5px;\n  box-sizing: border-box;\n  background-color: #202020;\n  border-radius: 10px;\n  position: relative;\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 800px) {\n  .metronome-field {\n    height: 40%;\n  }\n}\n.metronome-field .set-BPM-button {\n  width: 80%;\n  padding: 5px;\n  background-color: #ffffff;\n  border-radius: 10px;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.5vw;\n  font-weight: 900;\n  color: #202020;\n  outline: none;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.metronome-field .display-value-BPM {\n  width: 50%;\n  height: 30%;\n  margin-top: 40px;\n  color: #ffffff;\n  font-size: 6vh;\n  font-family: \"Rubik\", sans-serif;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 800px) {\n  .metronome-field .display-value-BPM {\n    margin-top: 30px;\n  }\n}\n.metronome-field .display-value-BPM input {\n  width: 80%;\n  padding: 0;\n  background-color: #202020;\n  font-size: 6vh;\n  font-family: \"Rubik\", sans-serif;\n  color: #ffffff;\n  text-align: center;\n  outline: none;\n  border: none;\n}\n.metronome-field .delete-metronome-button {\n  font-size: 1.5vw;\n  color: #ffffff;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: #202020;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.metronome-field .option-field-container {\n  width: 90%;\n  height: 30%;\n  margin: 20px 0 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 800px) {\n  .metronome-field .option-field-container {\n    margin: 5px 0;\n  }\n}\n.metronome-field .option-field-container .reset-metronome-button, .metronome-field .option-field-container .start-metronome-button {\n  width: 3.5vw;\n  height: 3.5vw;\n  padding: 0;\n  font-size: 1.5vw;\n  margin: 0 10px;\n  background-color: #202020;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./Styles/Metronome.scss","webpack://./Styles/Colors.scss","webpack://./Styles/Mixins.scss"],"names":[],"mappings":"AAEA;EACI,UAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;EACA,yBCNY;EDOZ,mBAAA;EACA,kBAAA;EACA,eAAA;EEVA,aAAA;EACA,uBAAA;EACA,mBAAA;AFUJ;AAAI;EAXJ;IAYQ,WAAA;EAGN;AACF;AAFG;EACI,UAAA;EACA,YAAA;EACA,yBChBS;EDiBT,mBAAA;EACA,gCAAA;EACA,gBAAA;EACA,gBAAA;EACA,cCtBS;EDuBT,aAAA;EACA,YAAA;EEzBH,aAAA;EACA,uBAAA;EACA,mBAAA;AF8BJ;AAJG;EACK,UAAA;EACA,WAAA;EACA,gBAAA;EACA,cC9BQ;ED+BR,cAAA;EACA,gCAAA;EACA,6BAAA;EACA,gCAAA;EEpCJ,aAAA;EACA,uBAAA;EACA,mBAAA;AF2CJ;AAPQ;EAVL;IAWS,gBAAA;EAUV;AACF;AATQ;EACG,UAAA;EACA,UAAA;EACA,yBC3CK;ED4CL,cAAA;EACA,gCAAA;EACA,cC7CK;ED8CL,kBAAA;EACA,aAAA;EACA,YAAA;AAWX;AARG;EACI,gBAAA;EACA,cCrDS;EDsDT,kBAAA;EACA,SAAA;EACA,WAAA;EACA,yBC1DS;ED2DT,YAAA;EE5DH,aAAA;EACA,uBAAA;EACA,mBAAA;AFuEJ;AAVG;EACI,UAAA;EACA,WAAA;EACA,mBAAA;EElEH,aAAA;EACA,uBAAA;EACA,mBAAA;AF+EJ;AAbO;EALJ;IAMK,aAAA;EAgBN;AACF;AAfO;EACK,YAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,cAAA;EACA,yBC5EI;ED6EJ,cC5EI;ECGZ,yBAAA;EACA,mBFyEqD;EE/ErD,aAAA;EACA,uBAAA;EACA,mBAAA;AFkGJ","sourcesContent":["@import './Colors.scss';\r\n@import './Mixins.scss';\r\n.metronome-field{\r\n    width: 95%;\r\n    min-height: 40%;\r\n    height: auto;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    background-color: $contrastBlack;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    flex-wrap: wrap;\r\n    @include StandarFlexOptions;\r\n    @media (max-width: 800px){\r\n        height: 40%;\r\n    }\r\n   .set-BPM-button{\r\n       width: 80%;\r\n       padding: 5px;\r\n       background-color: $optionalWhite;\r\n       border-radius: 10px;\r\n       font-family: 'Rubik', sans-serif;\r\n       font-size: 1.5vw;\r\n       font-weight: 900;\r\n       color:  $contrastBlack;\r\n       outline: none;\r\n       border: none;\r\n       @include StandarFlexOptions;\r\n   }\r\n   .display-value-BPM{\r\n        width: 50%;\r\n        height: 30%;\r\n        margin-top: 40px;\r\n        color: $optionalWhite;\r\n        font-size: 6vh;\r\n        font-family: 'Rubik', sans-serif;\r\n        border-top: 1px solid $optionalWhite;\r\n        border-bottom: 1px solid $optionalWhite;\r\n        @include StandarFlexOptions;\r\n        @media (max-width: 800px){\r\n            margin-top: 30px;\r\n        }\r\n        input{\r\n           width: 80%;\r\n           padding: 0;\r\n           background-color: $contrastBlack;\r\n           font-size: 6vh;\r\n           font-family: 'Rubik', sans-serif;\r\n           color: $optionalWhite;\r\n           text-align: center;\r\n           outline: none;\r\n           border: none;\r\n        }\r\n   }\r\n   .delete-metronome-button{\r\n       font-size: 1.5vw;\r\n       color: $optionalWhite;\r\n       position: absolute;\r\n       top: 10px;\r\n       right: 10px;\r\n       background-color: $contrastBlack;\r\n       border: none;\r\n       @include StandarFlexOptions;\r\n   }\r\n   .option-field-container{\r\n       width: 90%;\r\n       height: 30%;\r\n       margin: 20px 0 10px;\r\n       @include StandarFlexOptions;\r\n       @media (max-width: 800px){\r\n        margin: 5px 0;\r\n    }\r\n       .reset-metronome-button, .start-metronome-button{\r\n            width: 3.5vw;\r\n            height: 3.5vw;\r\n            padding: 0;\r\n            font-size: 1.5vw;\r\n            margin: 0 10px;\r\n            background-color: $contrastBlack;\r\n            color: $optionalWhite;\r\n            @include StandardBorder(2px, $optionalWhite, 50px);\r\n            @include StandarFlexOptions;\r\n       }\r\n   }\r\n}","$mainBackGroundColor: #3f3f3f;\r\n$lightGreen: #8cc534;\r\n$contrastBlack: #202020;\r\n$optionalWhite: #ffffff;","@mixin StandarFlexOptions {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin StandardBorder($widthOfBorder, $colorOfBorder, $radiusSize) {\r\n    border: $widthOfBorder solid $colorOfBorder;\r\n    border-radius: $radiusSize;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/RecordingFieldStyles.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/RecordingFieldStyles.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".all-tracks-field {\n  width: 90%;\n  position: relative;\n  margin-top: 20px;\n}", "",{"version":3,"sources":["webpack://./Styles/RecordingFieldStyles.scss"],"names":[],"mappings":"AAGA;EACI,UAAA;EACA,kBAAA;EACA,gBAAA;AAFJ","sourcesContent":["@import './Colors.scss';\r\n@import './Mixins.scss';\r\n\r\n.all-tracks-field{\r\n    width: 90%;\r\n    position: relative;\r\n    margin-top: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/SingleCell.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/SingleCell.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".single-cell {\n  width: calc((100% - 70px) / 3);\n  height: calc((100% - 70px) / 3);\n  box-sizing: border-box;\n  margin: 10px;\n  padding: 10px 5px;\n  background-color: #202020;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  border-radius: 10px;\n}\n.single-cell h5, .single-cell p {\n  width: 100%;\n  text-align: center;\n  margin: 0;\n}\n.single-cell h5 {\n  font-family: \"Grandstander\", cursive;\n  font-size: 1.8vw;\n}\n.single-cell p {\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.5vw;\n}", "",{"version":3,"sources":["webpack://./Styles/SingleCell.scss","webpack://./Styles/Colors.scss","webpack://./Styles/Mixins.scss"],"names":[],"mappings":"AAEA;EACI,8BAAA;EACA,+BAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;EACA,yBCNY;EDOZ,cCNY;ECFZ,aAAA;EACA,uBAAA;EACA,mBAAA;EFQA,eAAA;EACA,mBAAA;AACJ;AAAI;EACI,WAAA;EACA,kBAAA;EACA,SAAA;AAER;AAAI;EACI,oCAAA;EACA,gBAAA;AAER;AAAI;EACI,gCAAA;EACA,gBAAA;AAER","sourcesContent":["@import './Colors.scss';\r\n@import './Mixins.scss';\r\n.single-cell{\r\n    width: calc((100% - 70px) / 3);\r\n    height: calc((100% - 70px) / 3);\r\n    box-sizing: border-box;\r\n    margin: 10px;\r\n    padding: 10px 5px;\r\n    background-color: $contrastBlack;\r\n    color: $optionalWhite;\r\n    @include StandarFlexOptions;\r\n    flex-wrap: wrap;\r\n    border-radius: 10px;\r\n    h5, p{\r\n        width: 100%;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n    h5{\r\n        font-family: 'Grandstander', cursive;\r\n        font-size: 1.8vw;\r\n    }\r\n    p{\r\n        font-family: 'Rubik', sans-serif;\r\n        font-size: 1.5vw;\r\n    }\r\n}","$mainBackGroundColor: #3f3f3f;\r\n$lightGreen: #8cc534;\r\n$contrastBlack: #202020;\r\n$optionalWhite: #ffffff;","@mixin StandarFlexOptions {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin StandardBorder($widthOfBorder, $colorOfBorder, $radiusSize) {\r\n    border: $widthOfBorder solid $colorOfBorder;\r\n    border-radius: $radiusSize;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/TrackFieldStyles.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/TrackFieldStyles.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".soundtracks {\n  width: 100%;\n  padding: 2px 10px;\n  box-sizing: border-box;\n  background-color: #202020;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  color: #ffffff;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 2vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n.soundtracks .control-field {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.soundtracks .controls-icon {\n  position: relative;\n  font-size: 2vw;\n  margin: 0 3px;\n  padding: 2px;\n  color: #ffffff;\n  background-color: #202020;\n  border: none;\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.counter-page {\n  width: 70%;\n  height: 70%;\n  position: absolute;\n  border-radius: 10px;\n  background-color: rgba(32, 32, 32, 0.9);\n  color: #ffffff;\n  font-size: 7vw;\n  font-family: \"Grandstander\", cursive;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 850px) {\n  .counter-page {\n    width: 90%;\n    height: 90%;\n  }\n}", "",{"version":3,"sources":["webpack://./Styles/TrackFieldStyles.scss","webpack://./Styles/Colors.scss","webpack://./Styles/Mixins.scss"],"names":[],"mappings":"AAGA;EACI,WAAA;EACA,iBAAA;EACA,sBAAA;EACA,yBCLY;EDMZ,mBAAA;EACA,kBAAA;EACA,cCPY;EDQZ,gCAAA;EACA,cAAA;EEXA,aAAA;EACA,uBAAA;EACA,mBAAA;EFWA,8BAAA;AAAJ;AACI;EEdA,aAAA;EACA,uBAAA;EACA,mBAAA;AFgBJ;AADI;EACI,kBAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,cCpBQ;EDqBR,yBCtBQ;EDuBR,YAAA;EACA,aAAA;EEzBJ,aAAA;EACA,uBAAA;EACA,mBAAA;AF6BJ;;AAFA;EACI,UAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,uCAAA;EACA,cCjCY;EDkCZ,cAAA;EACA,oCAAA;EErCA,aAAA;EACA,uBAAA;EACA,mBAAA;AF2CJ;AANI;EAVJ;IAWQ,UAAA;IACA,WAAA;EASN;AACF","sourcesContent":["@import './Colors.scss';\r\n@import './Mixins.scss';\r\n\r\n.soundtracks{\r\n    width: 100%;\r\n    padding: 2px 10px;\r\n    box-sizing: border-box;\r\n    background-color: $contrastBlack;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    color: $optionalWhite;\r\n    font-family: 'Rubik', sans-serif;\r\n    font-size: 2vw;\r\n    @include StandarFlexOptions;\r\n    justify-content: space-between;\r\n    .control-field{\r\n        @include StandarFlexOptions;\r\n    }\r\n    .controls-icon{\r\n        position: relative;\r\n        font-size: 2vw;\r\n        margin: 0 3px;\r\n        padding: 2px;\r\n        color: $optionalWhite;\r\n        background-color: $contrastBlack;\r\n        border: none;\r\n        outline: none;\r\n        @include StandarFlexOptions;\r\n    }\r\n}\r\n.counter-page{\r\n    width: 70%;\r\n    height: 70%;\r\n    position: absolute;\r\n    border-radius: 10px;\r\n    background-color: rgba($color: $contrastBlack, $alpha: 0.9);\r\n    color: $optionalWhite;\r\n    font-size: 7vw;\r\n    font-family: 'Grandstander', cursive;\r\n    @include StandarFlexOptions;\r\n    @media (max-width: 850px){\r\n        width: 90%;\r\n        height: 90%;\r\n    }\r\n}","$mainBackGroundColor: #3f3f3f;\r\n$lightGreen: #8cc534;\r\n$contrastBlack: #202020;\r\n$optionalWhite: #ffffff;","@mixin StandarFlexOptions {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin StandardBorder($widthOfBorder, $colorOfBorder, $radiusSize) {\r\n    border: $widthOfBorder solid $colorOfBorder;\r\n    border-radius: $radiusSize;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/main.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/main.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./Styles/main.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AACJ","sourcesContent":["body{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./Styles/DrumPanelStyles.scss":
/*!*************************************!*\
  !*** ./Styles/DrumPanelStyles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DrumPanelStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./DrumPanelStyles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/DrumPanelStyles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DrumPanelStyles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_DrumPanelStyles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./Styles/Metronome.scss":
/*!*******************************!*\
  !*** ./Styles/Metronome.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Metronome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./Metronome.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/Metronome.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Metronome_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Metronome_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./Styles/RecordingFieldStyles.scss":
/*!******************************************!*\
  !*** ./Styles/RecordingFieldStyles.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RecordingFieldStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./RecordingFieldStyles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/RecordingFieldStyles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RecordingFieldStyles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RecordingFieldStyles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./Styles/SingleCell.scss":
/*!********************************!*\
  !*** ./Styles/SingleCell.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SingleCell_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./SingleCell.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/SingleCell.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SingleCell_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SingleCell_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./Styles/TrackFieldStyles.scss":
/*!**************************************!*\
  !*** ./Styles/TrackFieldStyles.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TrackFieldStyles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./TrackFieldStyles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/TrackFieldStyles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TrackFieldStyles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TrackFieldStyles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./Styles/main.scss":
/*!**************************!*\
  !*** ./Styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./Styles/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./Main/CreateDrumCell.ts":
/*!********************************!*\
  !*** ./Main/CreateDrumCell.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrumCell = void 0;
__webpack_require__(/*! ./../Styles/SingleCell */ "./Styles/SingleCell.scss");
var DrumCell = (function () {
    function DrumCell() {
        this.singleCell = document.createElement('div');
        this.singleCell.classList.add('single-cell');
    }
    return DrumCell;
}());
exports.DrumCell = DrumCell;


/***/ }),

/***/ "./Main/CreateDrumPanel.ts":
/*!*********************************!*\
  !*** ./Main/CreateDrumPanel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrumPanel = void 0;
var CreateDrumCell_1 = __webpack_require__(/*! ./CreateDrumCell */ "./Main/CreateDrumCell.ts");
var DataArrays_1 = __webpack_require__(/*! ./DataArrays */ "./Main/DataArrays.ts");
var CreateMetronome_1 = __webpack_require__(/*! ./CreateMetronome */ "./Main/CreateMetronome.ts");
var CreateRecording_1 = __webpack_require__(/*! ./CreateRecording */ "./Main/CreateRecording.ts");
var DrumPanel = (function () {
    function DrumPanel() {
        this.allPageContainer = document.createElement('div');
        this.allPageContainer.classList.add('all-page-container');
        document.body.appendChild(this.allPageContainer);
        this.widthControlPage = document.createElement('div');
        this.widthControlPage.classList.add('width-control-page');
        document.body.appendChild(this.widthControlPage);
        this.gifInControlPage = document.createElement('img');
        this.gifInControlPage.src = './Gif/turnScreen.gif';
        this.widthControlPage.appendChild(this.gifInControlPage);
        this.logo = document.createElement('img');
        this.logo.src = './Logo/logo.png';
        this.logo.classList.add('logo');
        this.allPageContainer.appendChild(this.logo);
        this.drumBoard = document.createElement('div');
        this.drumBoard.classList.add('drum-board');
        this.allPageContainer.appendChild(this.drumBoard);
        this.playField = document.createElement('div');
        this.playField.classList.add('play-field');
        this.drumBoard.appendChild(this.playField);
        this.recordField = document.createElement('div');
        this.recordField.classList.add('record-field');
        this.drumBoard.appendChild(this.recordField);
        this.record = new CreateRecording_1.RecordField;
        new CreateMetronome_1.Metronome;
        this.createCells();
    }
    DrumPanel.prototype.createCells = function () {
        for (var index = 0; index < 9; index++) {
            this.cell = new CreateDrumCell_1.DrumCell();
            this.cell.singleCell.id = "c" + index;
            this.playField.appendChild(this.cell.singleCell);
            this.addTextToCells(index);
            this.addSoundToCells(index);
        }
    };
    DrumPanel.prototype.addTextToCells = function (index) {
        this.titleCell = document.createElement('h5');
        this.titleCell.innerHTML = DataArrays_1.TitleArray[index].Name;
        this.cell.singleCell.appendChild(this.titleCell);
        this.infoCell = document.createElement('p');
        this.infoCell.innerHTML = DataArrays_1.TitleArray[index].Info;
        this.cell.singleCell.appendChild(this.infoCell);
    };
    DrumPanel.prototype.addSoundToCells = function (index) {
        this.audioCell = document.createElement('audio');
        this.audioCell.setAttribute('src', DataArrays_1.SoundArray[index].Src);
        this.audioCell.classList.add('audio' + index);
        this.cell.singleCell.appendChild(this.audioCell);
    };
    DrumPanel.prototype.playSound = function () {
        var _this = this;
        window.addEventListener('keydown', function (e) {
            if ((DataArrays_1.SoundArray.find(function (SoundArray) { return SoundArray.KeyCode === e.keyCode; })) !== undefined) {
                var cellIndex = DataArrays_1.SoundArray.find(function (SoundArray) { return SoundArray.KeyCode === e.keyCode; }).Index;
                var keyDownFinder = DataArrays_1.SoundArray.find(function (SoundArray) { return SoundArray.KeyCode === e.keyCode; }).Id;
                var playingCell = document.querySelector("" + keyDownFinder);
                var backgroundColorOfCell = document.querySelector('#c' + cellIndex);
                backgroundColorOfCell.style.backgroundColor = '#8cc534';
                playingCell.play();
                _this.record.keyCode = e.keyCode;
                _this.record.timeStart = new Date().getTime();
            }
        });
    };
    DrumPanel.prototype.pauseSound = function () {
        var _this = this;
        window.addEventListener('keyup', function (e) {
            if ((DataArrays_1.SoundArray.find(function (SoundArray) { return SoundArray.KeyCode === e.keyCode; })) !== undefined) {
                var cellIndex = DataArrays_1.SoundArray.find(function (SoundArray) { return SoundArray.KeyCode === e.keyCode; }).Index;
                var keyDownFinder = DataArrays_1.SoundArray.find(function (SoundArray) { return SoundArray.KeyCode === e.keyCode; }).Id;
                var playingCell = document.querySelector("" + keyDownFinder);
                var backgroundColorOfCell = document.querySelector('#c' + cellIndex);
                backgroundColorOfCell.style.backgroundColor = '#202020';
                playingCell.pause();
                playingCell.currentTime = 0;
                _this.record.timeStop = new Date().getTime();
                _this.record.getTimeAndKeyCode();
            }
        });
    };
    return DrumPanel;
}());
exports.DrumPanel = DrumPanel;


/***/ }),

/***/ "./Main/CreateMetronome.ts":
/*!*********************************!*\
  !*** ./Main/CreateMetronome.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Metronome = void 0;
__webpack_require__(/*! ./../Styles/Metronome.scss */ "./Styles/Metronome.scss");
var Metronome = (function () {
    function Metronome() {
        this.isInputOpen = false;
        this.isMetronomeStart = false;
        this.BPMValue = 60;
        this.recordField = document.querySelector('.record-field');
        this.metronomeField = document.createElement('div');
        this.metronomeField.classList.add('metronome-field');
        this.recordField.appendChild(this.metronomeField);
        this.soundOfMetronome = document.createElement('audio');
        this.soundOfMetronome.id = 'sound-of-metronome';
        this.soundOfMetronome.setAttribute('src', './../Sounds/tink.wav');
        this.metronomeField.appendChild(this.soundOfMetronome);
        this.setMetronomeButton = document.createElement('button');
        this.setMetronomeButton.classList.add('set-BPM-button');
        this.setMetronomeButton.innerText = 'Click to use metronome!';
        this.metronomeField.appendChild(this.setMetronomeButton);
        this.useMetronome();
    }
    Metronome.prototype.useMetronome = function () {
        var _this = this;
        this.setMetronomeButton.addEventListener('click', function () {
            _this.setMetronomeButton.style.display = 'none';
            _this.deleteMetronomeButton = document.createElement('button');
            _this.deleteMetronomeButton.classList.add('delete-metronome-button');
            _this.deleteMetronomeButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
            _this.metronomeField.appendChild(_this.deleteMetronomeButton);
            _this.displayValueBPM = document.createElement('div');
            _this.displayValueBPM.classList.add('display-value-BPM');
            _this.displayValueBPM.innerText = '60';
            _this.metronomeField.appendChild(_this.displayValueBPM);
            _this.optionFieldContainer = document.createElement('div');
            _this.optionFieldContainer.classList.add('option-field-container');
            _this.metronomeField.appendChild(_this.optionFieldContainer);
            _this.editMetronomeButton = document.createElement('button');
            _this.editMetronomeButton.classList.add('reset-metronome-button');
            _this.editMetronomeButton.innerHTML = '<i class="fas fa-pen"></i>';
            _this.optionFieldContainer.appendChild(_this.editMetronomeButton);
            _this.startMetronomeButton = document.createElement('button');
            _this.startMetronomeButton.classList.add('start-metronome-button');
            _this.startMetronomeButton.innerHTML = '<i class="fas fa-play"></i>';
            _this.optionFieldContainer.appendChild(_this.startMetronomeButton);
            _this.optionFieldContainer.style.display = 'flex';
            _this.displayValueBPM.style.display = 'flex';
            _this.deleteMetronome();
            _this.addBPMValue();
            _this.controlMetronome();
        });
    };
    Metronome.prototype.deleteMetronome = function () {
        var _this = this;
        this.deleteMetronomeButton.addEventListener('click', function () {
            _this.isMetronomeStart = false;
            _this.BPMValue = 60;
            _this.deleteMetronomeButton.style.display = 'none';
            _this.displayValueBPM.style.display = 'none';
            _this.optionFieldContainer.style.display = 'none';
            _this.setMetronomeButton.style.display = 'flex';
        });
    };
    Metronome.prototype.addBPMValue = function () {
        var _this = this;
        this.editMetronomeButton.addEventListener('click', function () {
            _this.lastBPMValue = _this.BPMValue;
            _this.isInputOpen = !_this.isInputOpen;
            if (_this.isInputOpen === true) {
                _this.isMetronomeStart = false;
                _this.inputBPMValue = document.createElement('input');
                _this.displayValueBPM.innerText = '';
                _this.displayValueBPM.appendChild(_this.inputBPMValue);
                _this.startMetronomeButton.style.display = 'none';
                _this.editMetronomeButton.innerHTML = '<i class="fas fa-check"></i>';
            }
            else {
                _this.setBPMValue();
                _this.displayValueBPM.innerText = "" + _this.BPMValue;
                _this.startMetronomeButton.style.display = 'flex';
                _this.startMetronomeButton.innerHTML = '<i class="fas fa-play"></i>';
                _this.editMetronomeButton.innerHTML = '<i class="fas fa-pen"></i>';
            }
        });
    };
    Metronome.prototype.setBPMValue = function () {
        var newBPMValue = parseInt(this.inputBPMValue.value);
        if (isNaN(newBPMValue) || newBPMValue > 200 || newBPMValue < 1) {
            alert('No BPM value was specified or the value format was incorrect (correct format is an integer from 1 to 200)!');
            this.BPMValue = this.lastBPMValue;
        }
        else {
            this.BPMValue = newBPMValue;
        }
    };
    Metronome.prototype.controlMetronome = function () {
        var _this = this;
        this.startMetronomeButton.addEventListener('click', function () {
            _this.isMetronomeStart = !_this.isMetronomeStart;
            playOrPouse(_this.isMetronomeStart, _this.startMetronomeButton, _this.deleteMetronomeButton, _this.editMetronomeButton, _this.BPMValue);
        });
        function playOrPouse(isMetronomeStart, startMetronomeButton, deleteMetronomeButton, editMetronomeButton, BPMValue) {
            if (isMetronomeStart === true) {
                startMetronomeButton.innerHTML = '<i class="fas fa-pause"></i>';
                var metronomeInterval_1 = setInterval(playMetronome, (60 * 1000) / BPMValue);
                startMetronomeButton.addEventListener('click', function () { return stopMetronome(metronomeInterval_1); });
                deleteMetronomeButton.addEventListener('click', function () { return stopMetronome(metronomeInterval_1); });
                editMetronomeButton.addEventListener('click', function () { return stopMetronome(metronomeInterval_1); });
            }
            else {
                startMetronomeButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        }
        function playMetronome() {
            var tic = document.querySelector('#sound-of-metronome');
            tic.play();
        }
        function stopMetronome(metronomeInterval) {
            clearInterval(metronomeInterval);
        }
    };
    return Metronome;
}());
exports.Metronome = Metronome;


/***/ }),

/***/ "./Main/CreateRecording.ts":
/*!*********************************!*\
  !*** ./Main/CreateRecording.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecordField = void 0;
__webpack_require__(/*! ./../Styles/RecordingFieldStyles.scss */ "./Styles/RecordingFieldStyles.scss");
var CreateTrack_1 = __webpack_require__(/*! ./CreateTrack */ "./Main/CreateTrack.ts");
var DataArrays_1 = __webpack_require__(/*! ./DataArrays */ "./Main/DataArrays.ts");
var RecordField = (function () {
    function RecordField() {
        this.recordField = document.querySelector('.record-field');
        this.allTracksField = document.createElement('div');
        this.allTracksField.classList.add('all-tracks-field');
        this.recordField.appendChild(this.allTracksField);
        this.trackOne = new CreateTrack_1.Track('Track 1');
        this.trackTwo = new CreateTrack_1.Track('Track 2');
        this.trackThree = new CreateTrack_1.Track('Track 3');
        this.trackFour = new CreateTrack_1.Track('Track 4');
        this.addBreakTimeAndPlayRecord();
        this.deleteRecord();
    }
    RecordField.prototype.getTimeAndKeyCode = function () {
        var data = {
            currentTime: this.timeStop - this.timeStart,
            key: this.keyCode,
            timeStart: this.timeStart,
            timeStop: this.timeStop,
            breakTime: 0
        };
        switch (true) {
            case this.trackOne.isRecordStart:
                DataArrays_1.FirstRecordArray.push(data);
                break;
            case this.trackTwo.isRecordStart:
                DataArrays_1.SecondRecordArray.push(data);
                break;
            case this.trackThree.isRecordStart:
                DataArrays_1.ThirdRecordArray.push(data);
                break;
            case this.trackFour.isRecordStart:
                DataArrays_1.FourthRecordArray.push(data);
                break;
            default:
                null;
                break;
        }
    };
    RecordField.prototype.addBreakTimeAndPlayRecord = function () {
        var _this = this;
        this.trackOne.playRecord.addEventListener('click', function () { return playRecordTrack(DataArrays_1.FirstRecordArray, _this.trackOne.isTrackFull); });
        this.trackTwo.playRecord.addEventListener('click', function () { return playRecordTrack(DataArrays_1.SecondRecordArray, _this.trackTwo.isTrackFull); });
        this.trackThree.playRecord.addEventListener('click', function () { return playRecordTrack(DataArrays_1.ThirdRecordArray, _this.trackThree.isTrackFull); });
        this.trackFour.playRecord.addEventListener('click', function () { return playRecordTrack(DataArrays_1.FourthRecordArray, _this.trackFour.isTrackFull); });
        function playRecordTrack(arrayOfTrack, isTrackFull) {
            if (isTrackFull === true) {
                getBreakTime(arrayOfTrack);
                var offSet_1 = 0;
                arrayOfTrack.forEach(function (e) {
                    var soundId = DataArrays_1.SoundArray.find(function (SoundArray) { return SoundArray.KeyCode === e.key; }).Id;
                    var playCell = document.querySelector("" + soundId);
                    setTimeout(function () {
                        playCell.play();
                        setTimeout(function () { return playCell.pause(); }, e.currentTime + offSet_1);
                    }, e.breakTime + offSet_1);
                    offSet_1 += e.currentTime + e.breakTime;
                });
            }
        }
        function getBreakTime(arrayOfTrack) {
            var breakTime;
            for (var index = 0; index < arrayOfTrack.length - 1; index++) {
                breakTime = arrayOfTrack[index + 1].timeStart - arrayOfTrack[index].timeStop;
                arrayOfTrack[index + 1].breakTime = breakTime;
            }
        }
    };
    RecordField.prototype.deleteRecord = function () {
        var _this = this;
        this.trackOne.deleteRecord.addEventListener('click', function () {
            if (confirm('Do you want remove record on Track 1?')) {
                DataArrays_1.FirstRecordArray.length = 0;
                _this.trackOne.isTrackFull = false;
            }
            else {
                null;
            }
        });
        this.trackTwo.deleteRecord.addEventListener('click', function () {
            if (confirm('Do you want remove record on Track 2?')) {
                DataArrays_1.SecondRecordArray.length = 0;
                _this.trackTwo.isTrackFull = false;
            }
            else {
                null;
            }
        });
        this.trackThree.deleteRecord.addEventListener('click', function () {
            if (confirm('Do you want remove record on Track 3?')) {
                DataArrays_1.ThirdRecordArray.length = 0;
                _this.trackThree.isTrackFull = false;
            }
            else {
                null;
            }
        });
        this.trackFour.deleteRecord.addEventListener('click', function () {
            if (confirm('Do you want remove record on Track 4?')) {
                DataArrays_1.FourthRecordArray.length = 0;
                _this.trackFour.isTrackFull = false;
            }
            else {
                null;
            }
        });
    };
    return RecordField;
}());
exports.RecordField = RecordField;


/***/ }),

/***/ "./Main/CreateTrack.ts":
/*!*****************************!*\
  !*** ./Main/CreateTrack.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Track = void 0;
__webpack_require__(/*! ./../Styles/TrackFieldStyles.scss */ "./Styles/TrackFieldStyles.scss");
var Track = (function () {
    function Track(titleOfTrack) {
        this.isRecordStart = false;
        this.isTrackFull = false;
        this.allTracksField = document.querySelector('.all-tracks-field');
        this.trackField = document.createElement('div');
        this.trackField.classList.add('soundtracks');
        this.trackField.innerText = "" + titleOfTrack;
        this.allTracksField.appendChild(this.trackField);
        this.controlField = document.createElement('div');
        this.controlField.classList.add('control-field');
        this.trackField.appendChild(this.controlField);
        this.startRecord = document.createElement('button');
        this.startRecord.classList.add('controls-icon');
        this.startRecord.classList.add('start-record');
        this.startRecord.innerHTML = '<i class="fas fa-record-vinyl"></i>';
        this.controlField.appendChild(this.startRecord);
        this.playRecord = document.createElement('button');
        this.playRecord.classList.add('controls-icon');
        this.playRecord.innerHTML = '<i class="far fa-play-circle"></i>';
        this.controlField.appendChild(this.playRecord);
        this.deleteRecord = document.createElement('button');
        this.deleteRecord.classList.add('controls-icon');
        this.deleteRecord.innerHTML = '<i class="far fa-times-circle"></i>';
        this.controlField.appendChild(this.deleteRecord);
        this.afterRecordClick();
    }
    Track.prototype.afterRecordClick = function () {
        var _this = this;
        this.startRecord.addEventListener('click', function () {
            if (_this.isRecordStart === false && _this.isTrackFull !== true) {
                setTimeout(function () { return _this.startRecord.style.color = '#ff0000'; }, 2950);
                _this.addCounterPage();
                _this.isRecordStart = !_this.isRecordStart;
            }
            else {
                _this.startRecord.style.color = '#ffffff8c';
                _this.isRecordStart = false;
                _this.isTrackFull = true;
            }
        });
    };
    Track.prototype.addCounterPage = function () {
        var _this = this;
        var counter = 2;
        this.drumBoard = document.querySelector('.drum-board');
        this.recordStartCounter = document.createElement('div');
        this.recordStartCounter.classList.add('counter-page');
        this.drumBoard.appendChild(this.recordStartCounter);
        this.recordStartCounter.innerText = '3';
        var counterInterval = setInterval(function () {
            if (counter > 0) {
                _this.recordStartCounter.innerText = "" + counter;
                counter--;
            }
            else {
                clearInterval(counterInterval);
            }
        }, 1000);
        setTimeout(function () { return _this.recordStartCounter.remove(); }, 3000);
    };
    return Track;
}());
exports.Track = Track;


/***/ }),

/***/ "./Main/DataArrays.ts":
/*!****************************!*\
  !*** ./Main/DataArrays.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FourthRecordArray = exports.ThirdRecordArray = exports.SecondRecordArray = exports.FirstRecordArray = exports.SoundArray = exports.TitleArray = void 0;
exports.TitleArray = [
    { Name: 'KICK', Info: 'Press Q', Index: 0 },
    { Name: 'TOM', Info: 'Press W', Index: 1 },
    { Name: 'SNARE', Info: 'Press E', Index: 2 },
    { Name: 'CLOSED HITHAT', Info: 'Press R', Index: 3 },
    { Name: 'OPEN HITHAT', Info: 'Press T', Index: 4 },
    { Name: 'STANDARD RIDE', Info: 'Press Y', Index: 5 },
    { Name: 'BOOM', Info: 'Press U', Index: 6 },
    { Name: 'TINK', Info: 'Press I', Index: 7 },
    { Name: 'CLAP', Info: 'Press O', Index: 8 },
];
exports.SoundArray = [
    { KeyCode: 81, Src: '../Sounds/kick.wav', Index: 0, Id: '.audio0' },
    { KeyCode: 87, Src: '../Sounds/tom.wav', Index: 1, Id: '.audio1' },
    { KeyCode: 69, Src: '../Sounds/snare.wav', Index: 2, Id: '.audio2' },
    { KeyCode: 82, Src: '../Sounds/hihat.wav', Index: 3, Id: '.audio3' },
    { KeyCode: 84, Src: '../Sounds/openhat.wav', Index: 4, Id: '.audio4' },
    { KeyCode: 89, Src: '../Sounds/ride.wav', Index: 5, Id: '.audio5' },
    { KeyCode: 85, Src: '../Sounds/boom.wav', Index: 6, Id: '.audio6' },
    { KeyCode: 73, Src: '../Sounds/tink.wav', Index: 7, Id: '.audio7' },
    { KeyCode: 79, Src: '../Sounds/clap.wav', Index: 8, Id: '.audio8' },
];
exports.FirstRecordArray = new Array();
exports.SecondRecordArray = new Array();
exports.ThirdRecordArray = new Array();
exports.FourthRecordArray = new Array();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./Main/index.ts ***!
  \***********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../Styles/main.scss */ "./Styles/main.scss");
__webpack_require__(/*! ./../Styles/DrumPanelStyles.scss */ "./Styles/DrumPanelStyles.scss");
var CreateDrumPanel_1 = __webpack_require__(/*! ./CreateDrumPanel */ "./Main/CreateDrumPanel.ts");
var drum = new CreateDrumPanel_1.DrumPanel;
drum.playSound();
drum.pauseSound();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map