webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MyCV.tsx":
/*!*****************************!*\
  !*** ./components/MyCV.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/namishah/Documents/Github/ShahNami/shahnami.github.io/components/MyCV.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "MyCV__SRow",
  componentId: "iecl1d-0"
})([""]);
var SCol = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "MyCV__SCol",
  componentId: "iecl1d-1"
})([""]);
var SColMeta = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "MyCV__SColMeta",
  componentId: "iecl1d-2"
})(["border-left:1px solid #e0e0e0;padding-left:15px;@media (max-width:990px){border:none;text-align:center;padding-top:8px;}"]);
var SImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "MyCV__SImage",
  componentId: "iecl1d-3"
})(["width:150px;height:auto;"]);
var SSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h4.withConfig({
  displayName: "MyCV__SSubtitle",
  componentId: "iecl1d-4"
})(["color:#777;font-weight:400;@media (max-width:990px){margin:0 auto;font-size:1.2em;padding-top:8px;padding-bottom:8px;}"]);
var STitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h1.withConfig({
  displayName: "MyCV__STitle",
  componentId: "iecl1d-5"
})(["color:#8d0c14;font-weight:500;text-transform:uppercase;@media (max-width:990px){margin:0 auto;padding-top:8px;}"]);
var SSectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h5.withConfig({
  displayName: "MyCV__SSectionTitle",
  componentId: "iecl1d-6"
})(["color:#8d0c14;font-weight:300;text-transform:uppercase;margin-bottom:15px;"]);
var SParagraph = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "MyCV__SParagraph",
  componentId: "iecl1d-7"
})(["font-size:14px;line-height:1.5;color:#000;text-align:justify;"]);
var SDescription = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "MyCV__SDescription",
  componentId: "iecl1d-8"
})(["font-size:14px;line-height:1.5;color:#000;@media (max-width:990px){margin:0 auto;text-align:center;padding-top:8px;}"]);
var SContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "MyCV__SContainer",
  componentId: "iecl1d-9"
})(["padding:50px;background-color:#fff;box-shadow:2px 2px 1px #606060;max-width:1000px;@media (max-width:990px){padding:30px;}"]);
var SSection = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "MyCV__SSection",
  componentId: "iecl1d-10"
})(["margin-top:1.5em;"]);
var SList = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ul.withConfig({
  displayName: "MyCV__SList",
  componentId: "iecl1d-11"
})(["font-size:14px;line-height:1.5;color:#000;"]);
var SDetailLabel = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "MyCV__SDetailLabel",
  componentId: "iecl1d-12"
})(["background-color:#eee;color:#777;padding:3px 7px;margin-bottom:5px;border-radius:2px;text-transform:uppercase;font-size:12px;text-align:right;"]);
var SMetaLabel = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "MyCV__SMetaLabel",
  componentId: "iecl1d-13"
})(["text-align:right;font-size:12px;line-height:1.5;color:#000;"]);
var SDetailTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h6.withConfig({
  displayName: "MyCV__SDetailTitle",
  componentId: "iecl1d-14"
})(["color:#333;font-weight:400;font-size:18px;line-height:1.3;"]);
var SHighlight = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "MyCV__SHighlight",
  componentId: "iecl1d-15"
})(["background-color:#fbd1d3;padding:3px;color:#000;"]);

var MyCV = function MyCV() {
  return __jsx(SContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(SSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(SCol, {
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(SImage, {
    className: 'mx-auto text-center d-block',
    src: '/static/images/profile.jpeg',
    thumbnail: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx(SCol, {
    lg: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(STitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Nami Shah")), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(SSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Cybersecurity Consultant")), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(SDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Background in ", __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "development"), ". Experience in", ' ', __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "security"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), "Ambition to learn. Looking for growth."))), __jsx(SCol, {
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(SColMeta, {
    xs: 12,
    sm: 6,
    md: 3,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("a", {
    target: '_blank',
    href: "https://www.nami.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "www.nami.sh")), __jsx(SColMeta, {
    xs: 12,
    sm: 6,
    md: 3,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:me@nami.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "me@nami.sh")), __jsx(SColMeta, {
    xs: 12,
    sm: 6,
    md: 3,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("a", {
    target: '_blank',
    href: "https://linkedin.com/in/namis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "linkedin.com/in/namis")), __jsx(SColMeta, {
    xs: 12,
    sm: 6,
    md: 3,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("a", {
    target: '_blank',
    href: "https://keybase.io/namis/pgp_keys.asc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "keybase.io/namis")))))), __jsx(SSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(SCol, {
    lg: {
      span: 8,
      offset: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(SSectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Skills")), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(SList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Hands-on experience in leading and conducting security assessments for both small businesses and large corporations;"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Proficient in front and back-end coding languages, such as Python, React.JS, TypeScript, Swift, Java, and more;"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "In-depth understanding of application and infrastructure penetration testing methodologies, relevant tooling and techniques;"), __jsx("li", {
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Making headway in cloud security, mobile pentesting, configuration reviews and purple teaming.")))))), __jsx(SSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(SCol, {
    lg: {
      span: 8,
      offset: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(SSectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Experience")), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx(SCol, {
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx(SDetailLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "MWR InfoSecurity"), __jsx(SMetaLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Mar. 2019 \u2022 current", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }), __jsx("a", {
    target: '_blank',
    href: 'https://f-secure.com',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "f-secure.com"))), __jsx(SCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(SDetailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Security Consultant"), __jsx(SParagraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "Led and conducted various security assessments on", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "infrastructure, web and mobile applications"), ". Shaped and supported the development of a brand new service around", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "open-source intelligence"), ". Developed and refined various tools and scripts to automate the process of external asset mapping and footprinting. Contributed to open-source tooling to support the development of internal services. Performed both", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "automated and manual vulnerability analysis"), ". Actively helped manage, estimate and scope out projects. Assisted in the organisation and management of the internship programme."))), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx(SCol, {
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx(SDetailLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "App Maven"), __jsx(SMetaLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Jul. 2019 \u2022 current", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }), __jsx("a", {
    target: '_blank',
    href: 'https://appmaven.io',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "appmaven.io"))), __jsx(SCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(SDetailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Co-Founder and Managing Director"), __jsx(SParagraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "Developed web and mobile applications for startup companies in", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "React (Native) and Swift"), ". Managed finances, legal and client relationships.", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, "Advised clients"), " the", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "appropriate technologies"), ' ', "for their use case, in order to improve their performance and create lasting value across their business. Actively persued new opportunities to", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "increase transactional work"), "."))), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx(SCol, {
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, __jsx(SDetailLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "The Security Factory"), __jsx(SMetaLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "May 2017 \u2022 Aug. 2017", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }), __jsx("a", {
    target: '_blank',
    href: 'https://thesecurityfactory.be',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "thesecurityfactory.be"))), __jsx(SCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, __jsx(SDetailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, "Penetration Tester"), __jsx(SParagraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, "Assigned to a large Belgian corporation. Worked with the security team and", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, "reported directly to the CISO"), ". Expanded my technical capabilities in", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "penetration testing"), ", relevant tooling, techniques and methodologies. Performed both automated and manual security assessments. Developed various", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, "Python scripts to automate repetitive tasks"), ' ', "and security checks."))), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, __jsx(SCol, {
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, __jsx(SDetailLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Accenture"), __jsx(SMetaLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "Oct. 2016 \u2022 May 2017", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }), __jsx("a", {
    target: '_blank',
    href: 'https://accenture.com',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, "accenture.com"))), __jsx(SCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, __jsx(SDetailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, "Security Implementation Services Associate"), __jsx(SParagraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Undertook this role after graduation, where I gained an understanding of the various business aspects that come with security. I supported the security team in consolidating bills of materials and", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "hardware procurement for vast infrastructures"), ". Documented and reviewed Nagios configurations and contributed to presentations", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, "clarifying business roadmaps"), "."))), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, __jsx(SCol, {
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, __jsx(SDetailLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, "Accenture"), __jsx(SMetaLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, "Feb. 2016 \u2022 May 2016", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }), __jsx("a", {
    target: '_blank',
    href: 'https://accenture.com',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, "accenture.com"))), __jsx(SCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, __jsx(SDetailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "Penetration Tester (Intern)"), __jsx(SParagraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, "Refined my technical and soft skills at a", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, "semester internship"), ' ', "at the cyber fusion centre in Prague.", __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, "Shadowed security assessments"), ' ', "and supported in awareness campaigns for various fortune 500 companies.", ' ', __jsx(SHighlight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, "Organised a CTF"), " and developed challenges for local universities.")))))), __jsx(SSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx(SCol, {
    lg: {
      span: 8,
      offset: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, __jsx(SSectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, "Education")), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, __jsx(SCol, {
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, __jsx(SDetailLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, "University of Warwick"), __jsx(SMetaLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "Sept. 2017 \u2022 Sept. 2018", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }), __jsx("a", {
    target: '_blank',
    href: 'https://warwick.ac.uk',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, "warwick.ac.uk"))), __jsx(SCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, __jsx(SDetailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, "MSc. Cybersecurity and Management (Distinction)"), __jsx(SParagraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, "Applied for the GCHQ certified postgraduate course in cybersecurity and management at the University of Warwick. The course was primarily focused on self-development. Studied various modules such as cryptosystems and data protection, digital forensics, cyber intelligence and operations, security architecture and network defence. Developed a real-time machine learning model for ransomware detection as part of my dissertation."))), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx(SCol, {
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, __jsx(SDetailLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, "University College Howest"), __jsx(SMetaLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, "Sept. 2013 \u2022 Jun. 2016", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }), __jsx("a", {
    target: '_blank',
    href: 'https://www.howest.be',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, "howest.be"))), __jsx(SCol, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, __jsx(SDetailTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, "BSc. Applied Computer Science, Cybercrime (First Class)"), __jsx(SParagraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, "Enrolled in the Computer and Cybercrime Professional program at University College Howest in Bruges, Belgium. Studied the essentials of information security policies, network hardening and security standards in web applications. Reverse-engineered malicious binaries for analysis and forensics. Expanded my interest in cryptography, access control and social engineering.")))))), __jsx(SSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, __jsx(SCol, {
    lg: {
      span: 8,
      offset: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }, __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, __jsx(SSectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, "Certifications and Courses")), __jsx(SRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, __jsx(SList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "CREST Registered Penetration Tester (CRT)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, "CREST Practitioner Security Analyst (CPSA)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, "Penetration Testing with Kali (PWK)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }, "CyberArk Privileged Account Security Fundamentals"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, "CCNA Security")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyCV);

/***/ })

})
//# sourceMappingURL=index.js.26d7e81193b6e814a9ca.hot-update.js.map