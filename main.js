(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div class=\"element\" *ngIf=\"countries$ | async | selectedType:selectedType as country\">\n    <app-main-widget (typeEmitter)=\"selectedType = $event\" [country]=\"country\"></app-main-widget>\n    <div class=\"element-right\">\n      <app-temperatur-widget [weather]=\"country.weather\"></app-temperatur-widget>\n      <app-followers-widget [social]=\"country.social\"></app-followers-widget>\n    </div>\n    <div class=\"clear\"> </div>\n</div>\n<ng-template #loader>\n  <h2>Идет загрузка...</h2>\n</ng-template>\n<div class=\"copy-right\">\n      <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">  W3layouts </a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_mocks_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/mocks/countries */ "./src/mocks/countries.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Новостной виджет';
        this.countries$ = src_mocks_countries__WEBPACK_IMPORTED_MODULE_1__["countries$"];
        this.selectedType = 'Россия';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_widget_main_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-widget/main-widget.component */ "./src/app/components/main-widget/main-widget.component.ts");
/* harmony import */ var _components_temperatur_widget_temperatur_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/temperatur-widget/temperatur-widget.component */ "./src/app/components/temperatur-widget/temperatur-widget.component.ts");
/* harmony import */ var _components_followers_widget_followers_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/followers-widget/followers-widget.component */ "./src/app/components/followers-widget/followers-widget.component.ts");
/* harmony import */ var _country_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country-filter.pipe */ "./src/app/country-filter.pipe.ts");
/* harmony import */ var _selected_type_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selected-type.pipe */ "./src/app/selected-type.pipe.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_widget_main_widget_component__WEBPACK_IMPORTED_MODULE_4__["MainWidgetComponent"],
                _components_temperatur_widget_temperatur_widget_component__WEBPACK_IMPORTED_MODULE_5__["TemperaturWidgetComponent"],
                _components_followers_widget_followers_widget_component__WEBPACK_IMPORTED_MODULE_6__["FollowersWidgetComponent"],
                _country_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["CountryFilter"],
                _selected_type_pipe__WEBPACK_IMPORTED_MODULE_8__["SelectedTypePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/followers-widget/followers-widget.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/followers-widget/followers-widget.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{social.title}}</h4>\n    <span class=\"w-line\"> </span>\n    <img src=\"../../../{{social.flag}}\" alt=\"\"  class=\"img-responsive\">\n    </div>\n    <div class=\"teddy-follow\">\n      <ul>\n        <li class=\"folw-h\"><h3>Валюта</h3>\n          <p>{{social.currency}}</p>\n        </li>\n        <li><h3>Языки</h3>\n          <p>{{social.language}}</p>\n        </li>\n      </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/followers-widget/followers-widget.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/followers-widget/followers-widget.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93ZXJzLXdpZGdldC9mb2xsb3dlcnMtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/followers-widget/followers-widget.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/followers-widget/followers-widget.component.ts ***!
  \***************************************************************************/
/*! exports provided: FollowersWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersWidgetComponent", function() { return FollowersWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FollowersWidgetComponent = /** @class */ (function () {
    function FollowersWidgetComponent() {
    }
    FollowersWidgetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FollowersWidgetComponent.prototype, "social", void 0);
    FollowersWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followers-widget',
            template: __webpack_require__(/*! ./followers-widget.component.html */ "./src/app/components/followers-widget/followers-widget.component.html"),
            styles: [__webpack_require__(/*! ./followers-widget.component.scss */ "./src/app/components/followers-widget/followers-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FollowersWidgetComponent);
    return FollowersWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/main-widget/main-widget.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-widget/main-widget.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-left\">\n  <div class=\"element-bg-img\"><img src=\"../../../{{country.main.img}}\" alt=\"\" class=\"img-responsive\"> </div>\n  <div class=\"element-left-bottom\">\n    <div class=\"ele-strip\">\n      <ul >\n        <li *ngFor=\"let type of allTypes\">\n          <a href=\"#\" (click)=\"changeType(type)\">{{type}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"village\" >\n      <h3>{{country.type.countryName}}</h3>\n      <span class=\"line\"> </span>\n      <div class=\"activity_box\">\n        <div class=\"scrollbar\" id=\"style-2\">\n          <div class=\"activity-row\">\n            <div class=\"activity-desc\">\n              <p>{{country.main.description}}</p>\n              <h5>Президент</h5>\n              <p>{{country.main.president}}</p>\n              <h5>Столица</h5>\n              <p>{{country.main.capital}}</p>\n              <h5>Население</h5>\n              <p>{{country.main.population}} человек</p>\n              <h5>Основые религии</h5>\n              <div *ngFor=\"let religion of country.main.religion\">\n                <p>{{religion}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/main-widget/main-widget.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-widget/main-widget.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi13aWRnZXQvbWFpbi13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main-widget/main-widget.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-widget/main-widget.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWidgetComponent", function() { return MainWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_mocks_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/countries */ "./src/mocks/countries.ts");



var MainWidgetComponent = /** @class */ (function () {
    function MainWidgetComponent() {
        this.typeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.countries = [];
        this.allTypes = [];
    }
    MainWidgetComponent.prototype.changeType = function (type) {
        this.typeEmitter.emit(type);
    };
    MainWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        src_mocks_countries__WEBPACK_IMPORTED_MODULE_2__["countries$"].subscribe(function (countries) {
            countries.forEach(function (country) {
                if (!_this.allTypes.includes(country.type.countryName)) {
                    _this.allTypes.push(country.type.countryName);
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainWidgetComponent.prototype, "country", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainWidgetComponent.prototype, "typeEmitter", void 0);
    MainWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-widget',
            template: __webpack_require__(/*! ./main-widget.component.html */ "./src/app/components/main-widget/main-widget.component.html"),
            styles: [__webpack_require__(/*! ./main-widget.component.scss */ "./src/app/components/main-widget/main-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainWidgetComponent);
    return MainWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/temperatur-widget/temperatur-widget.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/temperatur-widget/temperatur-widget.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{weather.title}}</h5>\n  <span class=\"w-line\"> </span>\n  <img src=\"../../../{{weather.icon}}\" alt=\"\">\n  <h2>{{weather.temperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Вода {{weather.water}}<sup class=\"degree\">°</sup></h6>\n</div>"

/***/ }),

/***/ "./src/app/components/temperatur-widget/temperatur-widget.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/temperatur-widget/temperatur-widget.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGVyYXR1ci13aWRnZXQvdGVtcGVyYXR1ci13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/temperatur-widget/temperatur-widget.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/temperatur-widget/temperatur-widget.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TemperaturWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperaturWidgetComponent", function() { return TemperaturWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TemperaturWidgetComponent = /** @class */ (function () {
    function TemperaturWidgetComponent() {
    }
    TemperaturWidgetComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TemperaturWidgetComponent.prototype, "weather", void 0);
    TemperaturWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-temperatur-widget',
            template: __webpack_require__(/*! ./temperatur-widget.component.html */ "./src/app/components/temperatur-widget/temperatur-widget.component.html"),
            styles: [__webpack_require__(/*! ./temperatur-widget.component.scss */ "./src/app/components/temperatur-widget/temperatur-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TemperaturWidgetComponent);
    return TemperaturWidgetComponent;
}());



/***/ }),

/***/ "./src/app/country-filter.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/country-filter.pipe.ts ***!
  \****************************************/
/*! exports provided: CountryFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryFilter", function() { return CountryFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CountryFilter = /** @class */ (function () {
    function CountryFilter() {
    }
    CountryFilter.prototype.transform = function (countries) {
        var types = [];
        countries.forEach(function (country) {
            if (!types.includes(country.type.countryName)) {
                types.push(country.type.countryName);
            }
        });
        return types;
    };
    CountryFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'countryFilter'
        })
    ], CountryFilter);
    return CountryFilter;
}());



/***/ }),

/***/ "./src/app/selected-type.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/selected-type.pipe.ts ***!
  \***************************************/
/*! exports provided: SelectedTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedTypePipe", function() { return SelectedTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectedTypePipe = /** @class */ (function () {
    function SelectedTypePipe() {
    }
    SelectedTypePipe.prototype.transform = function (countries, type) {
        if (!type) {
            return;
        }
        var oneCountry = countries.filter(function (country) {
            return country.type.countryName === type;
        });
        return oneCountry[0];
    };
    SelectedTypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'selectedType'
        })
    ], SelectedTypePipe);
    return SelectedTypePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/mocks/countries.ts":
/*!********************************!*\
  !*** ./src/mocks/countries.ts ***!
  \********************************/
/*! exports provided: countries$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries$", function() { return countries$; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var russia = {
    main: {
        img: 'assets/images/countries/russia.jpg',
        population: 146781095,
        president: 'Путин Владимир Владимирович',
        capital: 'Москва',
        religion: ['православие, ислам, буддизм'],
        description: "\u0420\u043E\u0441\u0441\u0438\u044F \u2014 \u043C\u043D\u043E\u0433\u043E\u043D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E, \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0449\u0435\u0435\u0441\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u043C\n                  \u044D\u0442\u043D\u043E\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u043C \u043C\u043D\u043E\u0433\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435\u043C.",
    },
    weather: {
        title: 'Москва',
        icon: 'assets/images/weather/cloudy.png',
        water: 7,
        temperature: 12,
    },
    social: {
        title: 'Россия',
        flag: 'assets/images/flags/russia.png',
        currency: 'Рубли',
        language: 'Русский',
    },
    type: {
        countryName: 'Россия'
    },
};
var iceland = {
    main: {
        img: 'assets/images/countries/iceland.jpg',
        population: 357050,
        president: 'Гвюдни Торласиус Йоуханнессон',
        capital: 'Рейкьявик',
        religion: ['не присуща'],
        description: "\u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F - \u043E\u0441\u0442\u0440\u043E\u0432\u043D\u043E\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0437\u0430\u043F\u0430\u0434\u0435 \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0415\u0432\u0440\u043E\u043F\u044B\n                    \u0432 \u0441\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0410\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u043A\u0435\u0430\u043D\u0430 (\u043A \u0441\u0435\u0432\u0435\u0440\u043E-\u0437\u0430\u043F\u0430\u0434\u0443 \u043E\u0442 \u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u0438).\n                    ",
    },
    weather: {
        title: 'Рейкьявик',
        icon: 'assets/images/weather/rain.png',
        water: 2,
        temperature: 7,
    },
    social: {
        title: 'Исландия',
        flag: 'assets/images/flags/iceland.png',
        currency: 'Исландская крона',
        language: 'Исландский',
    },
    type: {
        countryName: 'Исландия'
    },
};
var spain = {
    main: {
        img: 'assets/images/countries/spain.jpg',
        population: 46528966,
        president: 'Педро Санчес Перес-Кастехон',
        capital: 'Мадрид',
        religion: ['католицизм, протестантизм, православие, ислам, буддизм, иудаизм'],
        description: "\u0418\u0441\u043F\u0430\u0301\u043D\u0438\u044F - \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u041A\u043E\u0440\u043E\u043B\u0435\u0301\u0432\u0441\u0442\u0432\u043E \u0418\u0441\u043F\u0430\u0301\u043D\u0438\u044F, \u0441\u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u043D\u0430 \u044E\u0433\u043E-\u0437\u0430\u043F\u0430\u0434\u0435 \u0415\u0432\u0440\u043E\u043F\u044B\n                   \u0438 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0432 \u0410\u0444\u0440\u0438\u043A\u0435, \u0447\u043B\u0435\u043D \u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u044E\u0437\u0430 \u0438 \u041D\u0410\u0422\u041E.",
    },
    weather: {
        title: 'Мадрид',
        icon: 'assets/images/weather/sun.png',
        water: 10,
        temperature: 16,
    },
    social: {
        title: 'Испа́ния',
        flag: 'assets/images/flags/spain.png',
        currency: 'Евро',
        language: 'испанский',
    },
    type: {
        countryName: 'Испа́ния'
    },
};
var brazil = {
    main: {
        img: 'assets/images/countries/brazil.jpg',
        population: 212804996,
        president: 'Жаи́р Месси́ас Болсона́ру',
        capital: 'Бразилиа',
        religion: ['католицизм, протестантизм, адвентизм, ислам, буддизм, иудаизм'],
        description: "\u0411\u0440\u0430\u0437\u0438\u043B\u0438\u044F - \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E \u0432 \u042E\u0436\u043D\u043E\u0439 \u0410\u043C\u0435\u0440\u0438\u043A\u0435, \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u043E\u044F\u0437\u044B\u0447\u043D\u043E\u0435 \u043D\u0430 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u043C \u043A\u043E\u043D\u0442\u0438\u043D\u0435\u043D\u0442\u0435.\n                   ",
    },
    weather: {
        title: 'Бразилиа',
        icon: 'assets/images/weather/sun.png',
        water: 17,
        temperature: 24,
    },
    social: {
        title: 'Бразилия',
        flag: 'assets/images/flags/brazil.png',
        currency: 'Бразильский реал',
        language: 'Бразилский, португальский',
    },
    type: {
        countryName: 'Бразилия'
    },
};
var countries$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([russia, spain, iceland, brazil]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Angular\1dz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map