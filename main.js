"use strict";
(self["webpackChunkMakeCityLookBetter"] = self["webpackChunkMakeCityLookBetter"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ 4805);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class AppComponent {
    constructor() {
        this.Procent = {
            charged: '0%',
        };
        this.title = 'MakeCityLookBetter';
    }
    ngOnInit() {
        this.Map();
        this.StartAnimations();
        aos__WEBPACK_IMPORTED_MODULE_1__.init();
    }
    StartAnimations() {
        var tl = animejs__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
            easing: 'easeOutExpo',
            duration: 750
        });
        tl.add({
            targets: this.Procent,
            charged: '100%',
            cycles: 130,
            round: 1,
            duration: 2000,
            easing: 'linear',
        });
        tl.add({
            targets: '.Allplace',
            opacity: 0,
            duration: 1000,
            zIndex: -1
        });
    }
    Map() {
        Object.assign(mapboxgl, {
            accessToken: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mapboxKey
        });
        const map = new mapboxgl.Map({
            accessToken: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mapboxKey,
            style: 'mapbox://styles/fortyxd/cl2xqv469000615t7cf48cyb4',
            center: [37.4128099, 55.7395971],
            zoom: 15,
            pitch: 45,
            antialias: true,
            container: 'map-mapbox', // container ID
        });
        map.scrollZoom.disable();
        function rotateCamera(timestamp) {
            map.rotateTo((timestamp / 100) % 360, { duration: 0 });
            requestAnimationFrame(rotateCamera);
        }
        map.on('load', () => {
            rotateCamera(0);
            const layers = map.getStyle().layers;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 98, vars: 1, consts: [["id", "map-mapbox"], [1, "TextCenter", "text-light"], [1, "downdata"], [1, "p-5", "mb-4", "bg-light", "rounded-3"], ["data-aos", "zoom-in", 1, "container-fluid", "py-5", "m-4"], [1, "display-2", "text-center", "fw-bold"], [1, "text-center", "fs-4", "pt-2"], [1, "album", "py-5"], [1, "container"], [1, "row"], ["data-aos", "fade-right", 1, "col-md-4"], [1, "card", "mb-4", "box-shadow"], ["alt", "Thumbnail [100%x225]", "src", "assets/A.jpg", "data-holder-rendered", "true", 1, "card-img-top", 2, "height", "225px", "width", "100%", "display", "block"], [1, "card-body"], [1, "card-text"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group"], [1, "fw-bold", "text-muted"], ["data-aos", "fade-up", 1, "col-md-4"], ["alt", "Thumbnail [100%x225]", "src", "assets/Sredniy.jpg", "data-holder-rendered", "true", 1, "card-img-top", 2, "height", "225px", "width", "100%", "display", "block"], ["data-aos", "fade-left", 1, "col-md-4"], ["alt", "Thumbnail [100%x225]", "src", "assets/Praviy.jpg", "data-holder-rendered", "true", 1, "card-img-top", 2, "height", "225px", "width", "100%", "display", "block"], [1, "text-center", "display-2", "p-3"], [1, "container", "py-4"], ["data-aos", "fade-up", 1, "p-5", "mb-4", "bg-light", "rounded-3"], [1, "container-fluid", "py-5"], [1, "display-5", "fw-bold"], [1, "col-md-8", "fs-4"], [1, "row", "align-items-md-stretch"], ["data-aos", "fade-right", 1, "col-md-6"], [1, "h-100", "p-5", "text-white", "bg-dark", "rounded-3"], ["data-aos", "fade-left", 1, "col-md-6"], [1, "h-100", "p-5", "bg-light", "border", "rounded-3"], [1, "py-3", "my-4"], [1, "nav", "justify-content-center", "border-bottom", "pb-3", "mb-3"], [1, "nav-item"], ["href", "https://vk.com/fortyvk", 1, "nav-link", "px-2", "text-muted"], ["href", "https://github.com/FortyXD", 1, "nav-link", "px-2", "text-muted"], [1, "text-center", "text-muted"], [1, "Allplace"], [1, "LoadText"], [1, "display-3", "text-light"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0433\u043E\u0440\u043E\u0434 \u043B\u0443\u0447\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0433\u043E\u0440\u043E\u0434 \u043B\u0443\u0447\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0426\u0435\u043B\u044C \u043D\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0440\u0435\u043D\u0434\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13)(19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " \u2013 \u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u0435\u0433\u043E \u0432\u0438\u0434\u044B \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " \u2013 \u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432, \u0432 \u0447\u0430\u0441\u0442\u043D\u043E-\u0441\u0442\u0438, \u0432 \u0420\u0424; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " \u2013 \u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 (\u042F\u043D\u0430 \u0413\u0435\u0439\u043B\u0430).");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0418\u0437\u0443\u0447\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18)(30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 13)(33, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u043E\u0431\u043D\u044B\u043C, \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "C\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 20)(40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 13)(43, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u0420\u0435\u043D\u0434\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u044D\u0442\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Pixelmator pro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 23)(52, "div", 24)(53, "div", 25)(54, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\u041A\u043E\u043C\u0444\u043E\u0440\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "1. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0445\u043E\u0434\u0438\u0442\u044C: \u0434\u043E\u0440\u043E\u0436\u043A\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0433\u0443\u043B\u043E\u043A \u0438\u0437 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043C\u0430-\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0432\u043E \u0434\u0432\u043E\u0440\u0435, \u043F\u0430\u043D\u0434\u0443\u0441\u044B, \u0432\u0445\u043E\u0434\u044B \u0431\u0435\u0437 \u0441\u0442\u0443\u043F\u0435\u043D\u0435\u0439, \u043B\u0438\u0444\u0442\u044B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "2. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0434\u0435\u0442\u044C: \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043C\u0435\u0441\u0442 \u0434\u043B\u044F \u0441\u0438\u0434\u0435\u043D\u0438\u044F, \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u0434\u043B\u044F \u043E\u0442-\u0434\u044B\u0445\u0430 \u0438\u0437 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "3. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u043E\u044F\u0442\u044C, \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F: \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0434\u0435\u0440\u0435\u0432\u044C\u0435\u0432, \u0432 \u0442\u0435\u043D\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u043E\u0436\u043D\u043E \u0441\u043F\u0440\u044F\u0442\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0441\u043E\u043B\u043D\u0446\u0430, \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0435 \u043F\u0435\u0439\u0437\u0430\u0436\u0438 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0435 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 28)(63, "div", 29)(64, "div", 30)(65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\u0423\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "1. \u041C\u0430\u0441\u0448\u0442\u0430\u0431: \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u0438\u0434\u0435\u0442\u044C \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0443, \u043D\u0435\u0437\u0430\u0433\u043E\u0440\u043E\u0436\u0435\u043D\u043D\u0443\u044E \u0432\u044B-\u0441\u043E\u0442\u043D\u044B\u043C\u0438 \u0437\u0434\u0430\u043D\u0438\u044F\u043C\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "2. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0442\u044C\u0441\u044F \u043F\u043E\u0433\u043E\u0434\u043E\u0439: 4 \u0442\u0438\u043F\u0430 \u0434\u0435\u0440\u0435\u0432\u044C\u0435\u0432 \u0434\u0430\u044E\u0442 \u0432\u043E\u0437-\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0442\u044C\u0441\u044F \u0432\u0441\u0435\u043C\u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0430\u043C\u0438 \u0433\u043E\u0434\u0430 (\u0437\u0438\u043C\u0430 \u2013 \u0435\u043B\u044C, \u0432\u0435\u0441\u043D\u0430 \u2013 \u0441\u0438\u0440\u0435\u043D\u044C, \u043B\u0435\u0442\u043E \u2013 \u043A\u0430\u0448\u0442\u0430\u043D, \u043E\u0441\u0435\u043D\u044C \u2013 \u043A\u043B\u0451\u043D).");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "3. \u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u044F: \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430, \u0434\u0438\u0437\u0430\u0439\u043D, \u043C\u0430-\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u043F\u0440\u0438\u0440\u043E\u0434\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 31)(74, "div", 32)(75, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "1. \u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 (\u0447\u0443\u0432\u0441\u0442\u0432\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438): \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u0442\u0435\u0440\u0440\u0438-\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u0430 \u043E\u0442 \u043C\u0430\u0448\u0438\u043D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "2. \u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043F\u0440\u0435\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 (\u0447\u0443\u0432\u0441\u0442\u0432\u043E \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u0438): \u0434\u043E\u0441\u0442\u0443\u043F \u043D\u0430 \u0442\u0435\u0440-\u0440\u0438\u0442\u043E\u0440\u0438\u044E \u043F\u043E \u043A\u043B\u044E\u0447\u0443, \u0442\u0430\u043A\u0436\u0435 \u0432\u0438\u0434\u0435\u043E\u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435, \u043A\u043E\u043D\u0441\u044C\u0435\u0440\u0436\u0438, \u0441\u043E\u0441\u0435\u0434\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "3. \u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0439: \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0434\u0432\u043E\u0440 (\u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0432\u0435\u0442\u0440\u0430); \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043C\u0430\u0448\u0438\u043D \u0432\u043E \u0434\u0432\u043E\u0440\u0435 \u0438 \u043C\u043D\u043E\u0433\u043E \u0437\u0435\u043B\u0435\u043D\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 8)(84, "footer", 33)(85, "ul", 34)(86, "li", 35)(87, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "VK");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "li", 35)(90, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "\u00A9 2022 Andrey Forty, Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 39)(95, "div", 40)(96, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Procent.charged);
    } }, styles: ["#map-mapbox[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: -1;\r\n\r\n\r\n}\r\n.TextCenter[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: 10%;\r\n  font-size: 7rem;\r\n  text-align: center;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n.downdata[_ngcontent-%COMP%]{\r\n\r\n}\r\n.Allplace[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: -250vh;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgb(40,40,40);\r\n  opacity: 1;\r\n\r\n}\r\n.LoadText[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVzs7O0FBR2I7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixVQUFVOztBQUVaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwLW1hcGJveHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAtMTtcclxuXHJcblxyXG59XHJcbi5UZXh0Q2VudGVye1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGZvbnQtc2l6ZTogN3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4uZG93bmRhdGF7XHJcblxyXG59XHJcbi5BbGxwbGFjZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogLTI1MHZoO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLDQwLDQwKTtcclxuICBvcGFjaXR5OiAxO1xyXG5cclxufVxyXG4uTG9hZFRleHR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    mapboxKey: 'pk.eyJ1IjoiZm9ydHl4ZCIsImEiOiJjbDJ4b2g0bWcwNGg3M2NwN2VpdzFwdm1xIn0.UaRNygy_QubkMLy5N3MNEA'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map